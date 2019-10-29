// export const saveCartProducts =  (data) => {
//     localStorage.setItem("cart_products",JSON.stringify(data));
// }

// export const saveOrderList = (data) => {
//     localStorage.setItem("order_list",JSON.stringify(data));
// }

/*
  cart 为购物车的数据
  order 为订单数据
  cartIndex 为购物车已存在商品索引
*/

/*
  获得本地数据
*/
export const getData = name => {
  let storeName = getSaveName(name);
  const data = storeName ? localStorage.getItem(storeName) : null;
  let res = null;
  try {
    res = JSON.parse(data);
  } catch (e) {
    res = data;
  }
  return res;
};

/*
  保存数据到本地
*/
export const saveData = (name, data) => {
  let storeName = getSaveName(name);
  storeName && localStorage.setItem(storeName, JSON.stringify(data));
};

/*
  删除本地数据
*/
export const removeData = name => {
  let storeName = getSaveName(name);
  storeName && localStorage.removeItem(storeName);
};

// 得到正确的存储数据名
function getSaveName(key) {
  // 判断是否支持 localStorage
  if(typeof(Storage) !== "function") {
    return false;
  }
  let storeName = null;
  switch (key) {
    case "cart":
      storeName = "cart_products";
      break;
    case "order":
      storeName = "order_list";
      break;
    case "cartIndex":
      storeName = "cart_index";
      break;
    default:
      return false;
  }
  return storeName;
}
