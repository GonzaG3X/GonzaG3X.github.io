(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{28:function(e,n,t){},33:function(e,n,t){},36:function(e,n,t){"use strict";t.r(n);var c=t(0),i=t.n(c),o=t(12),a=t.n(o),s=(t(28),t(23)),d=t(4),r=t(9),l=t(3),j=t(15),b="TODORAR",u="CONFIGURAR",h=(t(33),t(1));var O=Object(j.b)((function(e){return{config:e.config,todos:e.todos}}),(function(e){return{changeConfig:function(n){return e({type:u,config:n})},changeTodos:function(n){return e(function(e){return{type:b,todos:e}}(n))}}}))((function(e){var n,t,i=e.config,o=e.todos,a=e.changeConfig,s=e.changeTodos;document.body.style.background="linear-gradient(0deg, #ad00ff 1%, rgba(255,255,255,1) 7%, rgba(255,255,255,1) 93%, #ad00ff 100%)",Object(c.useEffect)((function(){var e=localStorage.getItem("todos");e&&s(JSON.parse(e))}),[s]),Object(c.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(o))}),[o]);var d=function(e,n){var t=Object(l.a)({},i),c=t.cn.split(" ");t.cn=c.length>1?c[0]:t.cn,t.cn=t.cn+" fadeOut",a(t),setTimeout((function(){(t=Object(l.a)({},i)).screen=e,t.cn=n+" fadeIn",a(t)}),480)},j=function(e,n){switch(n){case 0:d(1,"mainCard");break;case 1:d(0,"homeCard");break;case 2:d(2,"todoCard");break;case 3:d(3,"todoCard");break;case 4:d(4,"todoCard");break;case 5:d(5,"formAdd");break;case 6:d(6,"mainCard");break;case 7:d(7,"detailCard");break;default:return}};Object(c.useEffect)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j;i.info.id&&e(null,7)}),[i.info]);var b=function(e){switch(e){case 0:s(Object(l.a)(Object(l.a)({},o),{},{todo:[{title:i.add.title,description:i.add.description}].concat(Object(r.a)(o.todo))}));break;case 1:s(Object(l.a)(Object(l.a)({},o),{},{doing:[{title:i.add.title,description:i.add.description}].concat(Object(r.a)(o.doing))}));break;case 2:s(Object(l.a)(Object(l.a)({},o),{},{done:[{title:i.add.title,description:i.add.description}].concat(Object(r.a)(o.done))}));break;default:return}var n=Object(l.a)({},i);n.add.title="",n.add.description="",a(n),setTimeout((function(){return j(0,e+2)}),1)},u=function(e,n){var t=Object(l.a)({},i);t.info={id:e,i:n},a(t)},O=function(e){switch(e){case-1:var n=Object(l.a)({},o);n[i.info.id].splice(i.info.i,1),s(n),j(0,"todo"===i.info.id?2:"doing"===i.info.id?3:4);break;case 0:var t=Object(l.a)({},o),c=t[i.info.id].splice(i.info.i,1)[0];t.todo=[c].concat(Object(r.a)(t.todo)),s(t),j(0,0);break;case 1:var a=Object(l.a)({},o),d=a[i.info.id].splice(i.info.i,1)[0];a.doing=[d].concat(Object(r.a)(a.doing)),s(a),j(0,0);break;case 2:var b=Object(l.a)({},o),u=b[i.info.id].splice(i.info.i,1)[0];b.done=[u].concat(Object(r.a)(b.done)),s(b),j(0,0);break;default:return}};if(!i.screen)return Object(h.jsx)("div",{className:"homeContainer",children:Object(h.jsxs)("div",{className:i.cn,children:[Object(h.jsxs)("h1",{children:["Todo List ",Object(h.jsx)("span",{children:"APP"})]}),Object(h.jsx)("div",{id:"enterBtn",onClick:function(e){return j(0,0)},children:"Enter"})]})});switch(i.screen){case 1:return Object(h.jsx)("div",{className:"homeContainer",children:Object(h.jsxs)("div",{className:i.cn,children:[Object(h.jsxs)("div",{onClick:function(e){return j(0,2)},className:"chooseCard",children:["Todos",Object(h.jsxs)("span",{children:["(",o.todo.length,")"]})]}),Object(h.jsxs)("div",{onClick:function(e){return j(0,3)},className:"chooseCard",children:["Doing",Object(h.jsxs)("span",{children:["(",o.doing.length,")"]})]}),Object(h.jsxs)("div",{onClick:function(e){return j(0,4)},className:"chooseCard",children:["Done",Object(h.jsxs)("span",{children:["(",o.done.length,")"]})]}),Object(h.jsx)("div",{onClick:function(e){return j(0,5)},className:"chooseCard",children:"Add"})]})});case 2:return Object(h.jsx)("div",{className:"homeContainer",children:Object(h.jsxs)("div",{className:i.cn,children:[Object(h.jsx)("div",{onClick:function(e){return j(0,0)},className:"quit",children:Object(h.jsx)("b",{children:"X"})}),o.todo.length?o.todo.map((function(e,n){return Object(h.jsx)("div",{onClick:function(e){return u("todo",n)},className:"chooseCard",children:e.title},n)})):Object(h.jsx)("h1",{children:"There is nothing to show"})]})});case 3:return Object(h.jsx)("div",{className:"homeContainer",children:Object(h.jsxs)("div",{className:i.cn,children:[Object(h.jsx)("div",{onClick:function(e){return j(0,0)},className:"quit",children:Object(h.jsx)("b",{children:"X"})}),o.doing.length?o.doing.map((function(e,n){return Object(h.jsx)("div",{onClick:function(e){return u("doing",n)},className:"chooseCard",children:e.title},n)})):Object(h.jsx)("h1",{children:"There is nothing to show"})]})});case 4:return Object(h.jsx)("div",{className:"homeContainer",children:Object(h.jsxs)("div",{className:i.cn,children:[Object(h.jsx)("div",{onClick:function(e){return j(0,0)},className:"quit",children:Object(h.jsx)("b",{children:"X"})}),o.done.length?o.done.map((function(e,n){return Object(h.jsx)("div",{onClick:function(e){return u("done",n)},className:"chooseCard",children:e.title},n)})):Object(h.jsx)("h1",{children:"There is nothing to show"})]})});case 5:return Object(h.jsx)("div",{className:"homeContainer",children:Object(h.jsxs)("div",{className:i.cn,children:[Object(h.jsx)("div",{onClick:function(e){return j(0,0)},className:"quit",children:Object(h.jsx)("b",{children:"X"})}),Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),j(0,6)},children:[Object(h.jsx)("input",{type:"text",value:i.add.title,onChange:function(e){return a(Object(l.a)(Object(l.a)({},i),{},{add:Object(l.a)(Object(l.a)({},i.add),{},{title:e.target.value})}))},name:"title",placeholder:"Title"}),Object(h.jsx)("input",{type:"text",value:i.add.description,onChange:function(e){return a(Object(l.a)(Object(l.a)({},i),{},{add:Object(l.a)(Object(l.a)({},i.add),{},{description:e.target.value})}))},name:"description",placeholder:"Description"}),Object(h.jsx)("button",{type:"submit",children:"Add"})]})]})});case 6:return Object(h.jsx)("div",{className:"homeContainer",children:Object(h.jsxs)("div",{className:i.cn,children:[Object(h.jsx)("div",{onClick:function(e){return j(0,5)},className:"quit",children:Object(h.jsx)("b",{children:"X"})}),Object(h.jsxs)("div",{onClick:function(e){return b(0)},className:"chooseCard",children:["Todos",Object(h.jsxs)("span",{children:["(",o.todo.length,")"]})]}),Object(h.jsxs)("div",{onClick:function(e){return b(1)},className:"chooseCard",children:["Doing",Object(h.jsxs)("span",{children:["(",o.doing.length,")"]})]}),Object(h.jsxs)("div",{onClick:function(e){return b(2)},className:"chooseCard",children:["Done",Object(h.jsxs)("span",{children:["(",o.done.length,")"]})]})]})});case 7:return Object(h.jsx)("div",{className:"homeContainer",children:Object(h.jsxs)("div",{className:i.cn,children:[Object(h.jsx)("div",{onClick:function(e){return j(0,"todo"===i.info.id?2:"doing"===i.info.id?3:4)},className:"quit",children:Object(h.jsx)("b",{children:"X"})}),Object(h.jsx)("h1",{children:null===(n=o[i.info.id][i.info.i])||void 0===n?void 0:n.title}),Object(h.jsx)("p",{children:null===(t=o[i.info.id][i.info.i])||void 0===t?void 0:t.description}),Object(h.jsxs)("div",{children:["todo"!==i.info.id&&Object(h.jsx)("button",{onClick:function(e){return O(0)},className:"btnMove",children:"Todo"}),"doing"!==i.info.id&&Object(h.jsx)("button",{onClick:function(e){return O(1)},className:"btnMove",children:"Doing"}),"done"!==i.info.id&&Object(h.jsx)("button",{onClick:function(e){return O(2)},className:"btnMove",children:"Done"}),Object(h.jsx)("button",{onClick:function(e){return O(-1)},className:"btnMove",children:"Delete"})]})]})});default:return null}}));var f=function(){return Object(h.jsx)(s.a,{children:Object(h.jsx)(d.a,{exact:!0,path:"/",component:O})})},x=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,37)).then((function(n){var t=n.getCLS,c=n.getFID,i=n.getFCP,o=n.getLCP,a=n.getTTFB;t(e),c(e),i(e),o(e),a(e)}))},v=t(14),m={todos:{done:[],doing:[],todo:[]},config:{cn:"homeCard",screen:0,add:{title:"",description:""},info:{id:null}}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case b:return Object(l.a)(Object(l.a)({},e),{},{todos:n.todos});case u:return Object(l.a)(Object(l.a)({},e),{},{config:n.config});default:return e}},C=Object(v.b)(g,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());a.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(j.a,{store:C,children:Object(h.jsx)(f,{})})}),document.getElementById("root")),x()}},[[36,1,2]]]);
//# sourceMappingURL=main.8e601f88.chunk.js.map