// export const saveCartProducts =  (data) => {
//     localStorage.setItem("cart_products",JSON.stringify(data));
// }

// export const saveOrderList = (data) => {
//     localStorage.setItem("order_list",JSON.stringify(data));
// }

/*
  cart 为购物车的数据
  order 为订单数据
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
  localStorage.setItem(storeName, JSON.stringify(data));
};

/*
  删除本地数据
*/
export const removeData = (name) =>{
  let storeName = getSaveName(name);
  localStorage.removeItem(storeName);
}

// 得到正确的存储数据名
function getSaveName(key) {
  let storeName = null;
  switch (key) {
    case "cart":
      storeName = "cart_products";
      break;
    case "order":
      storeName = "order_list";
      break;
    default:
      return false;
  }
  return storeName;
}
