(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{10:function(e,n,t){},11:function(e,n,t){"use strict";t.r(n);var i=t(0),c=t(1),o=t.n(c),r=t(3),a=t.n(r);t(9),t(10);var s=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)("form",{onSubmit:function(e){e.preventDefault();var n=e.target.children.name.value;e.target.children.name.value="",fetch("/send-kitten-name",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n})}).then((function(e){return e.json()})).then((function(e){return console.log(e)}))},children:Object(i.jsx)("input",{type:"text",placeholder:"kitten name",name:"name"})})})},u=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,12)).then((function(n){var t=n.getCLS,i=n.getFID,c=n.getFCP,o=n.getLCP,r=n.getTTFB;t(e),i(e),c(e),o(e),r(e)}))};a.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(s,{})}),document.getElementById("root")),u()},9:function(e,n,t){}},[[11,1,2]]]);
//# sourceMappingURL=main.6d37e5a7.chunk.js.map