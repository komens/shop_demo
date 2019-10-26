
const initState = {
    tabIndex: "1", // 存放当前导航
    cartProducts:[], //存放购物车的数据 (id,index,count)
    selectedProducts: [], // 存放选中的商品
    historyOrder: [], // 存放历史订单 (id,index,count)
    products:[ // 存放商品数据
        {
            id: 's0001',
            name: '铁剑',
            image: '//game.gtimg.cn/images/yxzj/img201606/itemimg/1111.jpg',
            price: 250,
            desc: "+20物理攻击"
        }, {
            id: 's0002',
            name: '匕首',
            image: '//game.gtimg.cn/images/yxzj/img201606/itemimg/1112.jpg',
            price: 250,
            desc: "+10%攻击速度"
        }, {
            id: 's0003',
            name: '搏击拳套',
            image: '//game.gtimg.cn/images/yxzj/img201606/itemimg/1113.jpg',
            price: 250,
            desc: "+8%暴击"
        }, {
            id: 's0004',
            name: '匕首',
            image: '//game.gtimg.cn/images/yxzj/img201606/itemimg/1112.jpg',
            price: 250,
            desc: "+10%攻击速度"
        }, {
            id: 's0005',
            name: '匕首',
            image: '//game.gtimg.cn/images/yxzj/img201606/itemimg/1112.jpg',
            price: 250,
            desc: "+10%攻击速度"
        }, {
            id: 's0006',
            name: '匕首',
            image: '//game.gtimg.cn/images/yxzj/img201606/itemimg/1112.jpg',
            price: 250,
            desc: "+10%攻击速度"
        }, {
            id: 's0007',
            name: '匕首',
            image: '//game.gtimg.cn/images/yxzj/img201606/itemimg/1112.jpg',
            price: 250,
            desc: "+10%攻击速度"
        }, {
            id: 's0008',
            name: '匕首',
            image: '//game.gtimg.cn/images/yxzj/img201606/itemimg/1112.jpg',
            price: 250,
            desc: "+10%攻击速度"
        }, {
            id: 's0009',
            name: '匕首',
            image: '//game.gtimg.cn/images/yxzj/img201606/itemimg/1112.jpg',
            price: 250,
            desc: "+10%攻击速度"
        }, {
            id: 's0010',
            name: '匕首',
            image: '//game.gtimg.cn/images/yxzj/img201606/itemimg/1112.jpg',
            price: 250,
            desc: "+10%攻击速度"
        }, {
            id: 's0011',
            name: '匕首',
            image: '//game.gtimg.cn/images/yxzj/img201606/itemimg/1112.jpg',
            price: 250,
            desc: "+10%攻击速度"
        }, {
            id: 's0012',
            name: '匕首',
            image: '//game.gtimg.cn/images/yxzj/img201606/itemimg/1112.jpg',
            price: 250,
            desc: "+10%攻击速度"
        }, {
            id: 's0013',
            name: '匕首',
            image: '//game.gtimg.cn/images/yxzj/img201606/itemimg/1112.jpg',
            price: 250,
            desc: "+10%攻击速度"
        }, {
            id: 's0014',
            name: '匕首',
            image: '//game.gtimg.cn/images/yxzj/img201606/itemimg/1112.jpg',
            price: 250,
            desc: "+10%攻击速度"
        }, {
            id: 's00015',
            name: '匕首',
            image: '//game.gtimg.cn/images/yxzj/img201606/itemimg/1112.jpg',
            price: 250,
            desc: "+10%攻击速度"
        }, {
            id: 's0016',
            name: '匕首',
            image: '//game.gtimg.cn/images/yxzj/img201606/itemimg/1112.jpg',
            price: 250,
            desc: "+10%攻击速度"
        }
    ]
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
    return {
        type: SETTLE_ACCOUNTS,
        count: price
    }
}

const cartReducer = (state = initState, {index, count, type, ...other}) => {
	switch (type) {
         /*
            添加商品到购物车
         */
		case ADD_PRODUCT:
            {
                const hasIndex = cartHasIndex.indexOf(index) //判断购物车中是否含有该商品
                let newCartProducts = []
                if(hasIndex > -1) { //如果有则在原有基础上加新增数量
                    const product = {...state.cartProducts[hasIndex]}
                    product.count += count
                    newCartProducts = [...state.cartProducts]
                    newCartProducts.splice(hasIndex,1,product) //将对于位置的商品信息替换为新的
                } else { // 如果没有，则直接插入
                    newCartProducts = [].concat(state.cartProducts, {
                        id: state.products[index].id,
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
        case PRODUCT_COUNT_CHANGE:
            {
                const product = Object.assign({},state.cartProducts[index])
                product.count = count
                const newCartProducts = [].concat(state.cartProducts)
                newCartProducts.splice(index,1,product)
                return {
                    ...state,
                    cartProducts: newCartProducts
                }
            }
        /*
            从购物车删除一个商品
        */
        case DELET_PRODUCT:
            {
                const newCartProducts = [...state.cartProducts]
                newCartProducts.splice(index,1)
                // 声明一个新数组用于存储 删除商品后 与购物车商品索引做对应
                let newSelectedProducts = []
                state.selectedProducts.forEach(item => {
                    if (item < index) {
                        // 如果删除的索引大于当前索引，则不变
                        newSelectedProducts.push(item)
                    } else if(item > index) {
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
            const order = []
            state.selectedProducts.forEach(item => {
                order.push({
                    id: state.cartProducts[item].id,
                    index: state.cartProducts[item].index,
                    count: state.cartProducts[item].count,
                })
            })
            const newHistoryOrder = [].concat(state.historyOrder)
            newHistoryOrder.push(order)
            // 清空已经选择的数据
            const selectedProducts = [];

            // 删除购物车中已经购买的商品
            const newCartProducts = []
            cartHasIndex.splice(0)
            state.cartProducts.forEach((item,index) => {
                if(!state.selectedProducts.includes(index)) {
                    newCartProducts.push(item)
                    cartHasIndex.push(index)
                }
            })

          return {
              ...state,
              historyOrder: newHistoryOrder,
              cartProducts: newCartProducts,
              selectedProducts
          }
      }
		default:
			return state
	}
}
export default cartReducer