(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{168:function(e,t,n){e.exports=n.p+"static/media/logo.dc7ad8ec.png"},180:function(e,t,n){e.exports=n(332)},230:function(e,t,n){},254:function(e,t,n){},329:function(e,t,n){},331:function(e,t,n){},332:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),i=n.n(c),o=n(27),l=n(43),u=n(45),s=n(334),d=n(24),m=n(132),g=n(340),p=n(333),f=n(79),h=n(94),b=n(62),E=function(e){for(var t="0123456789qwertyuioplkjhgfdsazxcvbnm",n="",a=0;a<e;a++)n+=t.charAt(Math.floor(Math.random()*t.length));return n+=(new Date).valueOf().toString(16)},O=function(e){return"".concat(e.getFullYear(),"\u5e74").concat(e.getMonth()+1,"\u6708").concat(e.getDate(),"\u65e5").concat(e.getHours(),"\u65f6").concat(e.getMinutes(),"\u5206").concat(e.getSeconds(),"\u79d2")},x=function(e){var t=y(e),n=t?localStorage.getItem(t):null,a=null;try{a=JSON.parse(n)}catch(r){a=n}return a},j=function(e,t){var n=y(e);localStorage.setItem(n,JSON.stringify(t))};function y(e){var t=null;switch(e){case"cart":t="cart_products";break;case"order":t="order_list";break;default:return!1}return t}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(n,!0).forEach((function(t){Object(h.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C={tabIndex:"1",cartProducts:x("cart")||[],selectedProducts:[],historyOrder:x("order")||[],products:[{id:"s0001",index:0,name:"\u94c1\u5251",image:"//game.gtimg.cn/images/yxzj/img201606/itemimg/1111.jpg",price:250,desc:"+20\u7269\u7406\u653b\u51fb"},{id:"s0002",index:1,name:"\u5315\u9996",image:"//game.gtimg.cn/images/yxzj/img201606/itemimg/1112.jpg",price:290,desc:"+10%\u653b\u51fb\u901f\u5ea6"},{id:"s0003",index:2,name:"\u640f\u51fb\u62f3\u5957",image:"//game.gtimg.cn/images/yxzj/img201606/itemimg/1113.jpg",price:320,desc:"+8%\u66b4\u51fb"},{id:"s0004",index:3,name:"\u5438\u8840\u4e4b\u9570",image:"//game.gtimg.cn/images/yxzj/img201606/itemimg/1114.jpg",price:410,desc:"+10%\u7269\u7406\u653b\u51fb<br>+8%\u7269\u7406\u5438\u8840"},{id:"s0005",index:4,name:"\u96f7\u9e23\u5203",image:"//game.gtimg.cn/images/yxzj/img201606/itemimg/1116.jpg",price:450,desc:"+40\u7269\u7406\u653b\u51fb"},{id:"s0006",index:5,name:"\u51b2\u80fd\u62f3\u5957",image:"//game.gtimg.cn/images/yxzj/img201606/itemimg/1117.jpg",price:550,desc:"+15%\u66b4\u51fb\u7387"},{id:"s0007",index:6,name:"\u98ce\u66b4\u5de8\u5251",image:"//game.gtimg.cn/images/yxzj/img201606/itemimg/1121.jpg",price:910,desc:"+80\u7269\u7406\u653b\u51fb"},{id:"s0008",index:7,name:"\u65e5\u5195",image:"//game.gtimg.cn/images/yxzj/img201606/itemimg/1122.jpg",price:790,desc:"+40\u7269\u7406\u653b\u51fb<br>+300\u6700\u5927\u751f\u547d"},{id:"s0009",index:8,name:"\u72c2\u66b4\u53cc\u5203",image:"//game.gtimg.cn/images/yxzj/img201606/itemimg/1123.jpg",price:890,desc:"+15%\u653b\u51fb\u901f\u5ea6<br>+10%\u66b4\u51fb\u7387<br>+5%\u79fb\u901f"},{id:"s0010",index:9,name:"\u9668\u661f",image:"//game.gtimg.cn/images/yxzj/img201606/itemimg/1124.jpg",price:1080,desc:"+45\u7269\u7406\u653b\u51fb<br>+10%\u51b7\u5374\u7f29\u51cf"},{id:"s0011",index:10,name:"\u788e\u661f\u9524",image:"//game.gtimg.cn/images/yxzj/img201606/itemimg/1131.jpg",price:2100,desc:"+80\u7269\u7406\u653b\u51fb<br>+10%\u51b7\u5374\u7f29\u51cf"},{id:"s0012",index:11,name:"\u672b\u4e16",image:"//game.gtimg.cn/images/yxzj/img201606/itemimg/1126.jpg",price:2160,desc:"+60\u7269\u7406\u653b\u51fb<br>+30%\u653b\u51fb\u901f\u5ea6<br>+10%\u7269\u7406\u5438\u8840"},{id:"s0013",index:12,name:"\u540d\u5200\xb7\u53f8\u547d",image:"//game.gtimg.cn/images/yxzj/img201606/itemimg/1127.jpg",price:1900,desc:"+60\u7269\u7406\u653b\u51fb<br>+5%\u51b7\u5374\u7f29\u51cf"},{id:"s0014",index:13,name:"\u51b0\u971c\u957f\u77db",image:"//game.gtimg.cn/images/yxzj/img201606/itemimg/1128.jpg",price:1980,desc:"+80\u7269\u7406\u653b\u51fb<br>+600\u6700\u5927\u751f\u547d<br>+15%\u653b\u51fb\u901f\u5ea6"},{id:"s00015",index:14,name:"\u901f\u51fb\u4e4b\u67aa",image:"//game.gtimg.cn/images/yxzj/img201606/itemimg/1129.jpg",price:890,desc:"+25%\u653b\u51fb\u901f\u5ea6"},{id:"s0016",index:15,name:"\u5236\u88c1\u4e4b\u5203",image:"//game.gtimg.cn/images/yxzj/img201606/itemimg/11210.jpg",price:1800,desc:"+100\u7269\u7406\u653b\u51fb<br>+10%\u7269\u7406\u5438\u8840"}],searchProducts:[]},S=[],w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0,n=t.index,a=t.count,r=t.type,c=Object(b.a)(t,["index","count","type"]),i=e.cartProducts,o=e.products,l=e.selectedProducts,u=e.historyOrder;switch(r){case"ADD_PRODUCT":var s=S.indexOf(n),d=[];if(s>-1){var m=P({},i[s]);m.count+=a,(d=Object(f.a)(i)).splice(s,1,m)}else d=[].concat(i,{id:o[n].id,index:n,count:a}),S.push(n);return j("cart",d),P({},e,{cartProducts:d,selectedProducts:[]});case"PRODUCT_COUNT_CHANGE":var g=Object.assign({},i[n]);g.count=a;var h=[].concat(i);return h.splice(n,1,g),j("cart",h),P({},e,{cartProducts:h});case"DELET_PRODUCT":var x=Object(f.a)(i);x.splice(n,1),j("cart",x);var y=[];l.forEach((function(e){e<n?y.push(e):e>n&&y.push(e-1)}));var v=S.indexOf(n);return S.splice(v,1),P({},e,{cartProducts:x,selectedProducts:y});case"SELECT_PRODUCT":var w=[].concat(c.selectArr);return P({},e,{selectedProducts:w});case"SETTLE_ACCOUNTS":var k=[];l.forEach((function(e){var t=i[e].index,n=o[t];k.push({key:i[e].id,product:{image:n.image,name:n.name},amount:i[e].count,price:n.price,allCount:n.price*i[e].count,desc:n.desc})}));var D=E(5),I={id:D,date:O(new Date),productsList:k,count:a},T=[].concat(u);T.unshift(I);var N=[],_=[];return S.splice(0),i.forEach((function(e,t){l.includes(t)||(_.push(e),S.push(t))})),j("order",T),j("cart",_),P({},e,{historyOrder:T,cartProducts:_,selectedProducts:N});case"SEARCH_PRODUCTS":var z=[],A=c.name;return A&&(o.forEach((function(e){(e.name.includes(A)||A.includes(e.name))&&z.push(e)})),z.length>0||p.a.warn({message:"\u8b66\u544a\uff01",description:"\u641c\u7d22\u7ed3\u679c\u4e3a\u7a7a\uff0c\u4e0d\u4e88\u5c55\u793a\uff01",duration:1})),P({},e,{searchProducts:z});default:return e}},k=(n(230),n(168)),D=n.n(k),I=function(e){var t=e.tabIndex,n=e.handleSearch;return r.a.createElement(s.a.Header,{className:"header"},r.a.createElement("a",{href:"/",className:"logo"},r.a.createElement("img",{src:D.a,alt:""})),r.a.createElement(m.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:"1",className:"menu-wrapper",selectedKeys:t},r.a.createElement(m.a.Item,{key:"1"},r.a.createElement(l.b,{to:"/"},"\u5546\u54c1\u6d4f\u89c8")),r.a.createElement(m.a.Item,{key:"2"},r.a.createElement(l.b,{to:"/cart"},"\u8d2d\u7269\u8f66")),r.a.createElement(m.a.Item,{key:"3"},r.a.createElement(l.b,{to:"/order"},"\u6211\u7684\u8ba2\u5355"))),r.a.createElement(g.a.Search,{placeholder:"\u8bf7\u8f93\u5165\u5546\u54c1\u540d",onSearch:n,className:"search"}))},T=Object(d.a)(Object(o.b)((function(e){return{tabIndex:e.cart.tabIndex}}),{searchProducts:function(e){return{type:"SEARCH_PRODUCTS",name:e}}}),u.f,Object(d.b)({handleSearch:function(e){var t=e.searchProducts,n=e.history;return function(e){var a=n.location.pathname;"/cart"!==a&&"/order"!==a?t(e):p.a.warn({message:"\u8b66\u544a\uff01",description:"\u8bf7\u5728\u5546\u54c1\u9875\u8fdb\u884c\u641c\u7d22",duration:1})}}}))((function(e){var t=e.location,n=(e.tabIndex,e.handleSearch),c="1",i="\u5546\u54c1\u6d4f\u89c8";switch(t.pathname){case"/":c="1",i="\u5546\u54c1\u6d4f\u89c8";break;case"/cart":c="2",i="\u6211\u7684\u8d2d\u7269\u8f66";break;case"/order":c="3",i="\u6211\u7684\u8ba2\u5355";break;default:c="1"}return Object(a.useEffect)((function(){document.title=i})),r.a.createElement(I,{tabIndex:c,handleSearch:n})})),N=n(66),_=n(31),z=n(338),A=n(341),L=n(34),U=n(335),R=z.a.Meta,H=Object(d.a)(Object(d.c)("count","changeCount",1),Object(d.b)({handleCartClick:function(e){return function(){var t=e.index,n=e.count,a=e.onClick,r=e.product;a(t,n),U.a.success("".concat(n,"\u4ef6\u5546\u54c1\u300e").concat(r.name,"\u300f\u5df2\u6210\u529f\u52a0\u5165\u8d2d\u7269\u8f66!"),1)}}}))((function(e){var t=e.product,n=e.handleCartClick,a=(e.index,e.count,Object(b.a)(e,["product","handleCartClick","index","count"]));return r.a.createElement(z.a,{hoverable:!0,className:a.className,cover:r.a.createElement("img",{alt:"example",src:t.image}),actions:[r.a.createElement(A.a,{min:1,defaultValue:1,style:{width:"50px"},onChange:a.changeCount}),r.a.createElement(L.a,{type:"primary",shape:"circle",icon:"shopping-cart",onClick:n})]},r.a.createElement(R,{title:t.name,description:"\u5355\u4ef7\uff1a"+t.price}))}));n(254);function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(n,!0).forEach((function(t){Object(h.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var F=Object(o.b)((function(e){return{products:e.cart.products,searchProducts:e.cart.searchProducts}}),{addProduct:function(e,t){return{type:"ADD_PRODUCT",index:e,count:t}}},(function(e,t){for(var n=e.products,a=e.searchProducts,r=t.addProduct,c=a.length>0?a:n,i=arguments.length,o=new Array(i>2?i-2:0),l=2;l<i;l++)o[l-2]=arguments[l];return B({newProducts:c,addProduct:r},o)}))((function(e){var t=e.newProducts,n=e.addProduct;return r.a.createElement("div",{className:"products-wrap"},r.a.createElement(N.a,null,t.map((function(e,t){return r.a.createElement(_.a,{key:e.id,xs:24,sm:12,md:6,lg:4},r.a.createElement(H,{className:"product-item",onClick:n,product:e,index:e.index}))}))))})),J=function(e){return r.a.createElement("h2",{style:{width:"90%",color:"#e4b653",borderBottom:"1px solid #e4b653",fontSize:"30px",margin:"25px auto",paddingBottom:"10px",textAlign:"center"}},e.children)},K=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(J,null,"\u5546\u54c1\u5217\u8868"),r.a.createElement(F,null))},G=n(65),V=n(337),W=function(e){var t=e.order;return r.a.createElement("div",{className:"table-header"},r.a.createElement("h5",null,"\u8ba2\u5355\u7f16\u53f7\uff1a",t.id),r.a.createElement("p",null,"\u751f\u6210\u65f6\u95f4\uff1a",t.date))},q=function(e){var t=e.order;return r.a.createElement("div",{className:"table-footer"},r.a.createElement("p",null,"\u5408\u8ba1\uff1a",r.a.createElement("span",null,"\uffe5 ",t.count)))},Y=[{title:"\u5546\u54c1",dataIndex:"product",align:"center",width:"30%",render:function(e){return r.a.createElement("div",{className:"image-wrap"},r.a.createElement("img",{src:e.image,alt:""}),r.a.createElement("div",{className:"product-name"},r.a.createElement("span",null,e.name)))}},{title:"\u4ecb\u7ecd",dataIndex:"desc",align:"center",render:function(e){return r.a.createElement("span",{dangerouslySetInnerHTML:{__html:e}})}},{title:"\u5355\u4ef7",dataIndex:"price",align:"center"},{title:"\u6570\u91cf",dataIndex:"amount",align:"center"},{title:"\u603b\u4ef7",dataIndex:"allCount",align:"center"}],$=function(e){var t=e.order;return r.a.createElement(V.a,{className:"order-table",columns:Y,dataSource:t.productsList,bordereds:!0,pagination:{hideOnSinglePage:!0},title:function(){return r.a.createElement(W,{order:t})},footer:function(){return r.a.createElement(q,{order:t})}})},Q=function(e){var t=e.orderList;return t.length>0?t.map((function(e,t){return r.a.createElement($,{key:t,order:e})})):r.a.createElement(G.a,{description:"\u6682\u65f6\u6ca1\u6709\u5386\u53f2\u8ba2\u5355\uff0c\u8d76\u5feb\u53bb\u9009\u8d2d\u5427\uff01"})},X=(n(329),Object(o.b)((function(e){return{orderList:e.cart.historyOrder}}))((function(e){var t=e.orderList;e.products;return r.a.createElement(r.a.Fragment,null,r.a.createElement(J,null,"\u8ba2\u5355\u5217\u8868"),r.a.createElement(Q,{orderList:t}))}))),Z=n(339),ee=n(336),te=n(174),ne=n(7),ae=[{title:"\u5546\u54c1\u540d\u79f0",dataIndex:"image",render:function(e){return r.a.createElement("img",{src:e,className:"product-image",alt:""})}},{title:"\u5546\u54c1\u63cf\u8ff0",dataIndex:"desc",render:function(e){return r.a.createElement("span",{dangerouslySetInnerHTML:{__html:e}})}},{title:"\u5355\u4ef7",dataIndex:"price"},{title:"\u8d2d\u4e70\u6570\u91cf",dataIndex:"number",render:function(e){return r.a.createElement(ie,{count:e})}},{title:"\u603b\u4ef7",dataIndex:"count"},{title:"",dataIndex:"delete",render:function(e){return r.a.createElement(oe,{cartIndex:e})}}],re=Z.a.Title,ce=Z.a.Text,ie=Object(d.a)(Object(o.b)((function(e){return{}}),{countChange:function(e,t){return{type:"PRODUCT_COUNT_CHANGE",index:e,count:t}}}),Object(d.b)({handleCountChange:function(e){var t=e.count,n=e.countChange;return function(e){n(t.index,e)}}}))((function(e){var t=e.count,n=e.handleCountChange;return r.a.createElement(A.a,{min:1,defaultValue:t.num,onChange:n})})),oe=Object(d.a)(Object(o.b)((function(){return{}}),{deleteProduct:function(e){return{type:"DELET_PRODUCT",index:e}}}),Object(d.b)({handleDelete:function(e){var t=e.deleteProduct,n=e.cartIndex;return function(){t(n)}}}))((function(e){var t=e.handleDelete;return r.a.createElement(ee.a,{title:"\u4f60\u786e\u5b9a\u8981\u79fb\u9664\u8be5\u5546\u54c1\u5417?",okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",onConfirm:t},r.a.createElement(L.a,{type:"link"},"\u5220\u9664"))})),le=Object(d.a)(Object(o.b)((function(e){return{cartProducts:e.cart.cartProducts,products:e.cart.products,selectedProducts:e.cart.selectedProducts}}),{selectProduct:function(e){return{type:"SELECT_PRODUCT",selectArr:e}},settleAccounts:function(e){return{type:"SETTLE_ACCOUNTS",count:e}}},(function(e,t){var n=e.cartProducts,a=e.products,r=e.selectedProducts,c=t.selectProduct,i=t.settleAccounts;n=n.map((function(e,t){var n=e.id,r=e.index,c=e.count;return{key:t,image:a[r].image,desc:a[r].desc,price:a[r].price,number:{id:n,index:t,num:c},count:a[r].price*c,delete:t}}));var o={hideDefaultSelections:!0,selectedRowKeys:Object(f.a)(r),onChange:function(e,t){var n=t.map((function(e){return e.delete}));c(n)}},l=0;return r.forEach((function(e){l+=n[e].count})),{cartProducts:n,rowSelection:o,selectedProducts:r,selectProduct:c,allCount:l,settleAccounts:i}})),u.f,Object(d.c)("isSettle","setIsSettle",!1),Object(d.b)({handleSettleClick:function(e){var t=e.allCount,n=e.settleAccounts,a=e.history,c=e.setIsSettle;return function(){t>0?(n(t),c(!0),p.a.open({message:"\u7ed3\u7b97\u6210\u529f",duration:1.5,description:"\u611f\u8c22\u60a8\u5149\u4e34\u5c0f\u5e97\uff0c\u60a8\u4e00\u5171\u6d88\u8d39".concat(t,"\u5143\uff0c\u5373\u5c06\u4e3a\u60a8\u8df3\u8f6c\u8ba2\u5355\u9875\u9762\u3002\u3002\u3002"),icon:r.a.createElement(ne.a,{type:"smile",style:{color:"#108ee9"}}),onClose:function(){a.push("/order")}})):U.a.error("\u7ed3\u7b97\u5931\u8d25\uff01\u8bf7\u9009\u62e9\u9700\u8981\u8d2d\u4e70\u7684\u5546\u54c1\u3002",1)}}}))((function(e){var t=e.cartProducts,n=void 0===t?[]:t,a=e.allCount,c=void 0===a?0:a,i=e.rowSelection,o=void 0===i?{}:i,l=e.handleSettleClick,u=e.isSettle;Object(b.a)(e,["cartProducts","allCount","rowSelection","handleSettleClick","isSettle"]);return r.a.createElement(te.a,{wrapperClassName:"cart",spinning:u,tip:"\u6b63\u5728\u5904\u7406\uff0c\u8bf7\u7a0d\u540e..."},r.a.createElement(V.a,{rowSelection:o,columns:ae,dataSource:n,locale:{emptyText:"\u8d2d\u7269\u8f66\u662f\u7a7a\u7684\uff0c\u5feb\u53bb\u9009\u8d2d\u5427\uff01"}}),r.a.createElement("div",{className:"settle"},r.a.createElement(re,{level:4,className:"all-count"},"\u603b\u4ef7\uff1a",r.a.createElement(ce,{type:"warning",className:"money"},c)," ","\u5143"),r.a.createElement(L.a,{type:"primary",loading:u,shape:"round",icon:"shop",className:"settle-btn",onClick:l},"\u7ed3\u7b97")))})),ue=(n(331),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(J,null,"\u8d2d\u7269\u8f66"),r.a.createElement(le,null))});var se=function(){return r.a.createElement(s.a,null,r.a.createElement(l.a,null,r.a.createElement(T,null),r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/cart",component:ue}),r.a.createElement(u.a,{path:"/order",component:X}),r.a.createElement(u.a,{path:"/",component:K}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var de=n(64),me=n(177),ge=Object(de.c)({cart:w}),pe=Object(de.d)(ge,Object(de.a)(me.a));i.a.render(r.a.createElement(o.a,{store:pe},r.a.createElement(se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[180,1,2]]]);
//# sourceMappingURL=main.230ff219.chunk.js.map