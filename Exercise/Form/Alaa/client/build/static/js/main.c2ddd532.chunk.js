(this.webpackJsonpalaa_test_client=this.webpackJsonpalaa_test_client||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),i=n.n(a),s=n(17),r=n.n(s),d=(n(25),n(12)),o=(n(26),n(19)),l=n(11);var u=function(e){var t=e.onClick,n=e.innerText;return e.style,Object(c.jsxs)("button",{onClick:t,children:[" ",n," "]})};var j=function(e){var t=e.candidateNames,n=e.setCandidateNames;return Object(c.jsxs)("div",{className:"body add_input",children:[Object(c.jsxs)("div",{className:"add-input",children:[Object(c.jsx)("input",{className:"add-candidate-input",placeholder:"add candidate name"}),Object(c.jsx)(u,{onClick:function(){var e=document.querySelector(".add-candidate-input"),c=!!e&&""!=e.value&&e.value;if(e.value="",console.log(e),console.log(c),t.find((function(e){return e===c})))return alert("".concat(c," Already Exists in your list")),void console.log("before the return");if(t.length>=4){var a=document.querySelector(".lottery-btn");a&&a.classList.remove("hide")}console.log("before the adding ".concat(c)),n([].concat(Object(o.a)(t),[c]))},innerText:"Add"})]}),Object(c.jsx)("div",{className:"candidates",children:t.map((function(e,t){return Object(c.jsx)("div",{className:"candidate-name",children:e},t)}))}),Object(c.jsx)("div",{className:"lottery-btn hide",children:Object(c.jsx)(l.b,{to:"/lottery",children:Object(c.jsx)(u,{onClick:function(){fetch("/add-candidates",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({candidateNames:t})}).then((function(e){return e.json()})).then((function(e){return console.log(e)}))},innerText:" Go To Lottery"})})})]})};var b=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],i=t[1];return Object(c.jsxs)("div",{className:"body lottery",children:[Object(c.jsx)(u,{onClick:function(){fetch("/get-selected-candidates").then((function(e){return e.json()})).then((function(e){i(e.candidates.map((function(e){return e.name})))}))},innerText:"get Two Winners"}),n.map((function(e,t){return Object(c.jsxs)("p",{children:[" ",e," "]},t)}))]})},h=n(2);function f(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],i=t[1];return Object(c.jsx)(l.a,{children:Object(c.jsxs)(h.c,{children:[Object(c.jsx)(h.a,{path:"/lottery",children:Object(c.jsx)(b,{})}),Object(c.jsx)(h.a,{path:"/",children:Object(c.jsx)(j,{candidateNames:n,setCandidateNames:i})})]})})}var O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(f,{})}),document.getElementById("root")),O()}},[[35,1,2]]]);
//# sourceMappingURL=main.c2ddd532.chunk.js.map