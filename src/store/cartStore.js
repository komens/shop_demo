import {products} from "../mock";
import {uniqueKey} from "../utils/uniqueKey"
import {filterDate} from "../utils/filterDate"

const initState = {
    tabIndex: "1", // 存放当前导航
    cartProducts: [], //存放购物车的数据 (id,index,count)
    selectedProducts: [], // 存放选中的商品
    historyOrder: [], // 存放历史订单 (id,index,count)
    products: products
}

// 标记数组，存储当前购物车商品的索引集合
const cartHasIndex = []

const ADD_PRODUCT = "ADD_PRODUCT" // 添加商品
const PRODUCT_COUNT_CHANGE = "PRODUCT_COUNT_CHANGE" // 改变商品数量
const DELET_PRODUCT = "DELET_PRODUCT" // 删除商品
const SELECT_PRODUCT = "SELECT_PRODUCT" // 勾选商品
const SETTLE_ACCOUNTS = "SETTLE_ACCOUNTS"

// 添加商品
export const addProduct = (index, count) => {
    return {
        type: ADD_PRODUCT,
        index,
        count
    }
}

// 改变数量
export const countChange = (index, count) => {
    return {
        type: PRODUCT_COUNT_CHANGE,
        index,
        count
    }
}

// 删除商品
export const deleteProduct = (index) => {
    return {
        type: DELET_PRODUCT,
        index
    }
}

// 勾选商品
export const selectProduct = (selectArr) => {
    // console.log(selectArr)
    return {
        type: SELECT_PRODUCT,
        selectArr
    }
}

// 结算商品
export const settleAccounts = (price) => {
    console.log(price)
    return {
        type: SETTLE_ACCOUNTS,
        count: price
    }
}

const cartReducer = (state = initState, {index, count, type, ...other}) => {
    const {cartProducts, products, selectedProducts, historyOrder} = state
    switch (type) {
        /*
           添加商品到购物车
        */
        case ADD_PRODUCT: {
            const hasIndex = cartHasIndex.indexOf(index) //判断购物车中是否含有该商品
            let newCartProducts = []
            if (hasIndex > -1) { //如果有则在原有基础上加新增数量
                const product = {...cartProducts[hasIndex]}
                product.count += count
                newCartProducts = [...cartProducts]
                newCartProducts.splice(hasIndex, 1, product) //将对于位置的商品信息替换为新的
            } else { // 如果没有，则直接插入
                newCartProducts = [].concat(cartProducts, {
                    id: products[index].id,
                    index,
                    count
                })
                cartHasIndex.push(index) //更新标记数组
            }
            return {
                ...state,
                cartProducts: newCartProducts,
                selectedProducts: [] // 添加新商品后清空选择列表
            }
        }
        /*
            改变商品数量
        */
        case PRODUCT_COUNT_CHANGE: {
            const product = Object.assign({}, cartProducts[index])
            product.count = count
            const newCartProducts = [].concat(cartProducts)
            newCartProducts.splice(index, 1, product)
            return {
                ...state,
                cartProducts: newCartProducts
            }
        }
        /*
            从购物车删除一个商品
        */
        case DELET_PRODUCT: {
            const newCartProducts = [...cartProducts]
            newCartProducts.splice(index, 1)
            // 声明一个新数组用于存储 删除商品后 与购物车商品索引做对应
            let newSelectedProducts = []
            selectedProducts.forEach(item => {
                if (item < index) {
                    // 如果删除的索引大于当前索引，则不变
                    newSelectedProducts.push(item)
                } else if (item > index) {
                    // 如果索引大于删除的索引则 勾选索引需要减一
                    newSelectedProducts.push(item - 1)
                }
            })
            // 删除商品后需要重新计算标记数组
            const hasIndex = cartHasIndex.indexOf(index)
            cartHasIndex.splice(hasIndex, 1)
            return {
                ...state,
                cartProducts: newCartProducts,
                selectedProducts: newSelectedProducts // 更新选中商品索引
            }
        }
        /*
            勾选商品
        */
        case SELECT_PRODUCT: {
            const selectedProducts = [].concat(other.selectArr)
            return {
                ...state,
                selectedProducts
            }
        }
        /*
             结算商品
        */
        case SETTLE_ACCOUNTS: {
            // 创建历史订单
            const productsList = []
            selectedProducts.forEach(item => {
                const index = cartProducts[item].index
                productsList.push({
                    key: cartProducts[item].id,
                    image: products[index].image,
                    amount: cartProducts[item].count,
                    price: products[index].price,
                    allCount: products[index].price * cartProducts[item].count,
                    desc: products[index].desc
                })
            })
            //  配置订单数据
            const key = uniqueKey(5)
            const order = {
                id: key,
                date: filterDate(new Date()),
                productsList,
                count
            }
            const newHistoryOrder = [].concat(historyOrder)
            newHistoryOrder.unshift(order)
            // 清空已经选择的数据
            const newSelectedProducts = [];

            // 删除购物车中已经购买的商品
            const newCartProducts = []
            cartHasIndex.splice(0)
            cartProducts.forEach((item, index) => {
                if (!selectedProducts.includes(index)) {
                    newCartProducts.push(item)
                    cartHasIndex.push(index)
                }
            })

            return {
                ...state,
                historyOrder: newHistoryOrder,
                cartProducts: newCartProducts,
                selectedProducts: newSelectedProducts
            }
        }
        default:
            return state
    }
}
export default cartReducer