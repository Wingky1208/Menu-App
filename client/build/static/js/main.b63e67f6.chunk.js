(this["webpackJsonpreact-menu_app"]=this["webpackJsonpreact-menu_app"]||[]).push([[0],{71:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var c=n(3),a=n.n(c),r=n(54),i=n.n(r),s=(n(71),n(5)),j=n(11),o=n(6),l=n(60),u=n(87),b=n(89),d=n(86),O=n(58),h=n(9),m=n(14),p=n(24),x=n(61),f=n(25),g="UPDATE_ITEMS",v="ADD_TO_CART",y="ADD_MULTIPLE_TO_CART",w="REMOVE_FROM_CART",_="UPDATE_CART_QUANTITY",k="TOGGLE_CART",C="UPDATE_CATEGORIES",N="UPDATE_CURRENT_CATEGORY",I=function(e,t){switch(t.type){case g:return Object(s.a)(Object(s.a)({},e),{},{items:Object(f.a)(t.items)});case v:return Object(s.a)(Object(s.a)({},e),{},{cartOpen:!0,cart:[].concat(Object(f.a)(e.cart),[t.item])});case y:return Object(s.a)(Object(s.a)({},e),{},{cart:[].concat(Object(f.a)(e.cart),Object(f.a)(t.items))});case _:return Object(s.a)(Object(s.a)({},e),{},{cartOpen:!0,cart:e.cart.map((function(e){return t._id===e._id&&(e.purchaseQuantity=t.purchaseQuantity),e}))});case w:var n=e.cart.filter((function(e){return e._id!==t._id}));return Object(s.a)(Object(s.a)({},e),{},{cartOpen:n.length>0,cart:n});case"CLEAR_CART":return Object(s.a)(Object(s.a)({},e),{},{cartOpen:!1,cart:[]});case k:return Object(s.a)(Object(s.a)({},e),{},{cartOpen:!e.cartOpen});case C:return Object(s.a)(Object(s.a)({},e),{},{categories:Object(f.a)(t.categories)});case N:return Object(s.a)(Object(s.a)({},e),{},{currentCategory:t.currentCategory});default:return e}};var D=n(1),T=["value"],E=Object(c.createContext)(),S=E.Provider,$=function(e){e.value;var t,n=Object(x.a)(e,T),a=(t={items:[],cart:[],cartOpen:!1,categories:[],currentCategory:""},Object(c.useReducer)(I,t)),r=Object(h.a)(a,2),i=r[0],j=r[1];return Object(D.jsx)(S,Object(s.a)({value:[i,j]},n))},A=function(){return Object(c.useContext)(E)};function Q(e,t,n){return new Promise((function(c,a){var r,i,s,j=window.indexedDB.open("menu-app",1);j.onupgradeneeded=function(e){var t=j.result;t.createObjectStore("items",{keyPath:"_id"}),t.createObjectStore("categories",{keyPath:"_id"}),t.createObjectStore("cart",{keyPath:"_id"})},j.onerror=function(e){console.log("There was an error")},j.onsuccess=function(a){switch(r=j.result,i=r.transaction(e,"readwrite"),s=i.objectStore(e),r.onerror=function(e){console.log("error",e)},t){case"put":s.put(n),c(n);break;case"get":var o=s.getAll();o.onsuccess=function(){c(o.result)};break;case"delete":s.delete(n._id);break;default:console.log("No valid method")}i.oncomplete=function(){r.close()}}}))}var U,F,R,P,L=n(82),G=n(21),Y=n(88),M=Object(Y.a)(U||(U=Object(G.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),B=(Object(Y.a)(F||(F=Object(G.a)(["\n  mutation addOrder($items: [ID]!) {\n    addOrder(items: $items) {\n      purchaseDate\n      items {\n        _id\n        name\n        description\n        price\n      \n        category {\n          name\n        }\n        rating{\n            thumbsUp\n            thumbsDown\n        }\n      }\n    }\n  }\n"]))),Object(Y.a)(R||(R=Object(G.a)(["\n  mutation addUser(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    addUser(\n      firstName: $firstName\n      lastName: $lastName\n      email: $email\n      password: $password\n    ) {\n      token\n      user {\n        _id\n      }\n    }\n  }  \n"])))),q=Object(Y.a)(P||(P=Object(G.a)(["\nmutation updateItem($thumbsUp: Float, $thumbsDown: Float, $id: ID) {\n  updateItem(thumbsUp: $thumbsUp, thumbsDown: $thumbsDown, _id: $id) {\n    thumbsUp\n    thumbsDown\n  }\n}\n"])));var J,W,H,K,X,z=function(e){var t=A(),n=Object(h.a)(t,2),c=n[0],a=n[1],r=(e.image,e.name),i=e._id,o=e.price,l=e.thumbsUp,u=e.thumbsDown,b=c.cart,d=Object(L.a)(q),O=Object(h.a)(d,1)[0],x=function(){var e=Object(p.a)(Object(m.a)().mark((function e(){return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O({variables:{id:i,thumbsUp:l+1}});case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(p.a)(Object(m.a)().mark((function e(){return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O({variables:{id:i,thumbsDown:u+1}});case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(D.jsxs)("div",{className:"card px-1 py-1",children:[Object(D.jsxs)(j.b,{to:"/items/".concat(i),children:[Object(D.jsx)("img",{alt:r}),Object(D.jsx)("p",{children:r})]}),Object(D.jsx)("div",{children:Object(D.jsxs)("span",{children:["$",o]})}),Object(D.jsxs)("p",{onClick:x,children:["\ud83d\udc4d ",l]}),Object(D.jsxs)("p",{onClick:f,children:["\ud83d\udc4e ",u]}),Object(D.jsx)("div",{}),Object(D.jsx)("button",{onClick:function(){var t=b.find((function(e){return e._id===i}));t?(a({type:_,_id:i,purchaseQuantity:parseInt(t.purchaseQuantity)+1}),Q("cart","put",Object(s.a)(Object(s.a)({},t),{},{purchaseQuantity:parseInt(t.purchaseQuantity)+1}))):(a({type:v,item:Object(s.a)(Object(s.a)({},e),{},{purchaseQuantity:1})}),Q("cart","put",Object(s.a)(Object(s.a)({},e),{},{purchaseQuantity:1})))},children:"Add to cart"})]})},V=n(62),Z=Object(Y.a)(J||(J=Object(G.a)(["\n  query getItems($category: ID) {\n    items(category: $category) {\n      _id\n      name\n      description\n      price\n      image\n      category {\n        _id\n      }\n      thumbsUp\n      thumbsDown\n    }\n  }\n"]))),ee=Object(Y.a)(W||(W=Object(G.a)(["\n  query getCheckout($items: [ID]!) {\n    checkout(items: $items) {\n      session\n    }\n  }\n"]))),te=(Object(Y.a)(H||(H=Object(G.a)(["\n  {\n    items {\n      _id\n      name\n      description\n      price\n    \n      category {\n        name\n      }\n    }\n  }\n"]))),Object(Y.a)(K||(K=Object(G.a)(["\n  {\n    categories {\n      _id\n      name\n    }\n  }\n"])))),ne=Object(Y.a)(X||(X=Object(G.a)(["\n  {\n    user {\n      firstName\n      lastName\n      orders {\n        _id\n        purchaseDate\n        items {\n          _id\n          name\n          description\n          price\n          image\n        }\n      }\n    }\n  }\n"])));var ce=function(){var e=A(),t=Object(h.a)(e,2),n=t[0],a=t[1],r=n.currentCategory,i=Object(V.b)(Z),s=i.loading,j=i.data;return Object(c.useEffect)((function(){j?(a({type:g,items:j.items}),j.items.forEach((function(e){Q("items","put",e)}))):s||Q("items","get").then((function(e){a({type:g,items:e})}))}),[j,s,a]),Object(D.jsxs)("div",{className:"my-2",children:[Object(D.jsx)("h2",{children:"Our Items:"}),n.items.length?Object(D.jsx)("div",{className:"flex-row",children:(r?n.items.filter((function(e){return e.category._id===r})):n.items).map((function(e){return Object(D.jsx)(z,{_id:e._id,image:e.image,name:e.name,price:e.price,thumbsUp:e.thumbsUp,thumbsDown:e.thumbsDown},e._id)}))}):Object(D.jsx)("h3",{children:"You haven't added any items yet!"})]})};var ae=function(){var e=A(),t=Object(h.a)(e,2),n=t[0],a=t[1],r=n.categories,i=Object(V.b)(te),s=i.loading,j=i.data;return Object(c.useEffect)((function(){j?(a({type:C,categories:j.categories}),j.categories.forEach((function(e){Q("categories","put",e)}))):s||Q("categories","get").then((function(e){a({type:C,categories:e})}))}),[j,s,a]),Object(D.jsxs)("div",{children:[Object(D.jsx)("div",{children:"Choose a Menu"}),Object(D.jsx)("select",{onClick:function(e){return t=e.target.value,void a({type:N,currentCategory:t});var t},children:r.map((function(e){return Object(D.jsx)("option",{value:e._id,children:e.name},e._id)}))})]})},re=function(){return Object(D.jsxs)("div",{className:"container",children:[Object(D.jsx)(ae,{}),Object(D.jsx)(ce,{})]})};var ie=function(){var e,t=Object(V.b)(ne).data;return t&&(e=t.user),Object(D.jsx)(D.Fragment,{children:Object(D.jsxs)("div",{children:[Object(D.jsx)(j.b,{to:"/",children:"\u2190 Back to Items"}),e?Object(D.jsxs)(D.Fragment,{children:[Object(D.jsxs)("h2",{children:["Order History for ",e.firstName," ",e.lastName]}),e.orders.map((function(e){return Object(D.jsxs)("div",{className:"my-2",children:[Object(D.jsx)("h3",{children:new Date(parseInt(e.purchaseDate)).toLocaleDateString()}),Object(D.jsx)("div",{className:"flex-row",children:e.items.map((function(e,t){var n=e._id,c=(e.image,e.name),a=e.price;return Object(D.jsxs)("div",{children:[Object(D.jsxs)(j.b,{to:"/items/".concat(n),children:[Object(D.jsx)("img",{alt:c}),Object(D.jsx)("p",{children:c})]}),Object(D.jsx)("div",{children:Object(D.jsxs)("span",{children:["$",a]})})]},t)}))})]},e._id)}))]}):null]})})},se=n(29),je=n(55),oe=n(56),le=n(45),ue=n.n(le),be=new(function(){function e(){Object(je.a)(this,e)}return Object(oe.a)(e,[{key:"getProfile",value:function(){return ue()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return ue()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}());var de=function(){var e=Object(c.useState)({email:"",password:""}),t=Object(h.a)(e,2),n=t[0],a=t[1],r=Object(L.a)(M),i=Object(h.a)(r,2),o=i[0],l=i[1].error,u=function(){var e=Object(p.a)(Object(m.a)().mark((function e(t){var c,a;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,o({variables:{email:n.email,password:n.password}});case 4:c=e.sent,a=c.data.login.token,be.login(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),b=function(e){var t=e.target,c=t.name,r=t.value;a(Object(s.a)(Object(s.a)({},n),{},Object(se.a)({},c,r)))};return Object(D.jsxs)("div",{children:[Object(D.jsx)(j.b,{to:"/signup",children:"\u2190 Go to Signup"}),Object(D.jsx)("h2",{children:"Login"}),Object(D.jsxs)("form",{onSubmit:u,children:[Object(D.jsxs)("div",{children:[Object(D.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(D.jsx)("input",{placeholder:"youremail@email.com",name:"email",type:"email",id:"email",onChange:b})]}),Object(D.jsxs)("div",{children:[Object(D.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(D.jsx)("input",{placeholder:"********",name:"password",type:"password",id:"pwd",onChange:b})]}),l?Object(D.jsx)("div",{children:Object(D.jsx)("p",{className:"error-text",children:"The provided credentials are incorrect"})}):null,Object(D.jsx)("div",{children:Object(D.jsx)("button",{type:"submit",children:"Submit"})})]})]})};var Oe=function(){var e=Object(c.useState)({email:"",password:""}),t=Object(h.a)(e,2),n=t[0],a=t[1],r=Object(L.a)(B),i=Object(h.a)(r,1)[0],o=function(){var e=Object(p.a)(Object(m.a)().mark((function e(t){var c,a;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,i({variables:{email:n.email,password:n.password,firstName:n.firstName,lastName:n.lastName}});case 3:c=e.sent,a=c.data.addUser.token,be.login(a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(e){var t=e.target,c=t.name,r=t.value;a(Object(s.a)(Object(s.a)({},n),{},Object(se.a)({},c,r)))};return Object(D.jsxs)("div",{children:[Object(D.jsx)(j.b,{to:"/login",children:"\u2190 Go to Login"}),Object(D.jsx)("h2",{children:"Signup"}),Object(D.jsxs)("form",{onSubmit:o,children:[Object(D.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(D.jsx)("label",{htmlFor:"firstName",children:"First Name:"}),Object(D.jsx)("input",{placeholder:"First",name:"firstName",type:"firstName",id:"firstName",onChange:l})]}),Object(D.jsxs)("div",{children:[Object(D.jsx)("label",{htmlFor:"lastName",children:"Last Name:"}),Object(D.jsx)("input",{placeholder:"Last",name:"lastName",type:"lastName",id:"lastName",onChange:l})]}),Object(D.jsxs)("div",{children:[Object(D.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(D.jsx)("input",{placeholder:"youremail@email.com",name:"email",type:"email",id:"email",onChange:l})]}),Object(D.jsxs)("div",{children:[Object(D.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(D.jsx)("input",{placeholder:"********",name:"password",type:"password",id:"pwd",onChange:l})]}),Object(D.jsx)("div",{children:Object(D.jsx)("button",{type:"submit",children:"Submit"})})]})]})},he=n(57),me=n(84),pe=function(e){var t=e.item,n=A(),c=Object(h.a)(n,2)[1];return Object(D.jsxs)("div",{className:"flex-row",children:[Object(D.jsx)("div",{children:Object(D.jsx)("img",{src:"/images/".concat(t.image),alt:""})}),Object(D.jsxs)("div",{children:[Object(D.jsxs)("div",{children:[t.name,", $",t.price]}),Object(D.jsxs)("div",{children:[Object(D.jsx)("span",{children:"Qty:"}),Object(D.jsx)("input",{type:"number",placeholder:"1",value:t.purchaseQuantity,onChange:function(e){var n=e.target.value;"0"===n?(c({type:w,_id:t._id}),Q("cart","delete",Object(s.a)({},t))):(c({type:_,_id:t._id,purchaseQuantity:parseInt(n)}),Q("cart","put",Object(s.a)(Object(s.a)({},t),{},{purchaseQuantity:parseInt(n)})))}}),Object(D.jsx)("span",{role:"img","aria-label":"trash",onClick:function(){return function(e){c({type:w,_id:e._id}),Q("cart","delete",Object(s.a)({},e))}(t)},children:"\ud83d\uddd1\ufe0f"})]})]})]})},xe=Object(he.a)("pk_test_51LReexIhTfAGHhtGiPY0YGTFCdwIf70vlq9AEaI8YEXLs3dIfGGJ5BP9mdX7bpjrwYqfjD70TRIxxIKLW3DFKtem00WdammY7S"),fe=function(){var e=A(),t=Object(h.a)(e,2),n=t[0],a=t[1],r=Object(me.a)(ee),i=Object(h.a)(r,2),s=i[0],j=i[1].data;function o(){a({type:k})}return Object(c.useEffect)((function(){j&&xe.then((function(e){e.redirectToCheckout({sessionId:j.checkout.session})}))}),[j]),Object(c.useEffect)((function(){function e(){return(e=Object(p.a)(Object(m.a)().mark((function e(){var t;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q("cart","get");case 2:t=e.sent,a({type:y,items:Object(f.a)(t)});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n.cart.length||function(){e.apply(this,arguments)}()}),[n.cart.length,a]),n.cartOpen?Object(D.jsxs)("div",{className:"cart",children:[Object(D.jsx)("div",{className:"close",onClick:o,children:"[close]"}),Object(D.jsx)("h2",{children:"Shopping Cart"}),n.cart.length?Object(D.jsxs)("div",{children:[n.cart.map((function(e){return Object(D.jsx)(pe,{item:e},e._id)})),Object(D.jsxs)("div",{className:"flex-row space-between",children:[Object(D.jsxs)("strong",{children:["Total: $",function(){var e=0;return n.cart.forEach((function(t){e+=t.price*t.purchaseQuantity})),e.toFixed(2)}()]}),be.loggedIn()?Object(D.jsx)("button",{onClick:function(){var e=[];n.cart.forEach((function(t){for(var n=0;n<t.purchaseQuantity;n++)e.push(t._id)})),s({variables:{items:e}}),console.log(e)},children:"Checkout"}):Object(D.jsx)("span",{children:"(log in to check out)"})]})]}):Object(D.jsxs)("h3",{children:[Object(D.jsx)("span",{role:"img","aria-label":"shocked",children:"\ud83d\ude31"}),"You haven't added anything to your cart yet!"]})]}):Object(D.jsx)("div",{className:"cart-closed",onClick:o,children:Object(D.jsx)("span",{role:"img","aria-label":"trash",children:"\ud83d\uded2"})})};var ge=function(){return Object(D.jsxs)("header",{className:"flex-row px-1",children:[Object(D.jsx)("h1",{children:Object(D.jsx)(j.b,{to:"/",children:"Menu-app"})}),Object(D.jsx)("nav",{children:be.loggedIn()?Object(D.jsxs)("ul",{children:[Object(D.jsx)("li",{children:Object(D.jsx)(j.b,{to:"/Profile",children:"Profile"})}),Object(D.jsx)("li",{children:Object(D.jsx)("a",{href:"/",onClick:function(){return be.logout()},children:"Logout"})}),Object(D.jsx)("li",{children:Object(D.jsx)(fe,{})})]}):Object(D.jsxs)("ul",{children:[Object(D.jsx)("li",{children:Object(D.jsx)(j.b,{to:"/signup",children:"Signup"})}),Object(D.jsx)("li",{children:Object(D.jsx)(j.b,{to:"/login",children:"Login"})}),Object(D.jsx)("li",{children:Object(D.jsx)(fe,{})})]})})]})};var ve=function(e){return Object(D.jsxs)("div",{children:["\xa9 ",(new Date).getFullYear()," All Rights Reserved. Designed & developed by ",Object(D.jsx)("a",{href:"https://github.com/abdallajama201",target:"blank",children:"Abdalla"}),", ",Object(D.jsx)("a",{href:"https://github.com/JamesF905",target:"blank",children:"James"}),", ",Object(D.jsx)("a",{href:"https://github.com/Wingky1208",target:"blank",children:"Wingky"})]})};var ye=function(){var e=A(),t=Object(h.a)(e,2),n=t[0],a=t[1],r=Object(o.g)().id,i=Object(c.useState)({}),l=Object(h.a)(i,2),u=l[0],b=l[1],d=Object(V.b)(Z),O=d.loading,m=d.data,p=n.items,x=n.cart;return Object(c.useEffect)((function(){p.length?b(p.find((function(e){return e._id===r}))):m?(a({type:g,items:m.items}),m.items.forEach((function(e){Q("items","put",e)}))):O||Q("items","get").then((function(e){a({type:g,items:e})}))}),[p,m,O,a,r]),Object(D.jsx)(D.Fragment,{children:u&&x?Object(D.jsxs)("div",{className:"container my-1",children:[Object(D.jsx)(j.b,{to:"/",children:"\u2190 Back to Items"}),Object(D.jsx)("h2",{children:u.name}),Object(D.jsx)("p",{children:u.description}),Object(D.jsxs)("p",{children:[Object(D.jsx)("strong",{children:"Price:"}),"$",u.price," ",Object(D.jsx)("button",{onClick:function(){var e=x.find((function(e){return e._id===r}));e?(a({type:_,_id:r,purchaseQuantity:parseInt(e.purchaseQuantity)+1}),Q("cart","put",Object(s.a)(Object(s.a)({},e),{},{purchaseQuantity:parseInt(e.purchaseQuantity)+1}))):(a({type:v,item:Object(s.a)(Object(s.a)({},u),{},{purchaseQuantity:1})}),Q("cart","put",Object(s.a)(Object(s.a)({},u),{},{purchaseQuantity:1})))},children:"Add to Cart"}),Object(D.jsx)("button",{disabled:!x.find((function(e){return e._id===u._id})),onClick:function(){a({type:w,_id:u._id}),Q("cart","delete",Object(s.a)({},u))},children:"Remove from Cart"})]}),Object(D.jsx)("img",{alt:u.name})]}):null})},we=Object(l.a)({uri:"/graphql"}),_e=Object(O.a)((function(e,t){var n=t.headers,c=localStorage.getItem("id_token");return{headers:Object(s.a)(Object(s.a)({},n),{},{authorization:c?"Bearer ".concat(c):""})}})),ke=new u.a({link:_e.concat(we),cache:new b.a});var Ce=function(){return Object(D.jsx)(d.a,{client:ke,children:Object(D.jsx)(j.a,{children:Object(D.jsx)("div",{children:Object(D.jsxs)($,{children:[Object(D.jsx)(ge,{}),Object(D.jsxs)(o.c,{children:[Object(D.jsx)(o.a,{path:"/",element:Object(D.jsx)(re,{})}),Object(D.jsx)(o.a,{path:"/profile",element:Object(D.jsx)(ie,{})}),Object(D.jsx)(o.a,{path:"/login",element:Object(D.jsx)(de,{})}),Object(D.jsx)(o.a,{path:"/signup",element:Object(D.jsx)(Oe,{})}),Object(D.jsx)(o.a,{path:"/items/:id",element:Object(D.jsx)(ye,{})})]}),Object(D.jsx)(ve,{})]})})})})};i.a.render(Object(D.jsx)(a.a.StrictMode,{children:Object(D.jsx)(Ce,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.b63e67f6.chunk.js.map