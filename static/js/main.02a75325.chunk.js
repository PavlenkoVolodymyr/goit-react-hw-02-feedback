(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,function(e,t,c){},,,function(e,t,c){},,,,,function(e,t,c){},function(e,t,c){},,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),s=c(5),i=c.n(s),r=(c(17),c(6)),o=c(7),l=c(8),b=c(12),j=c(11),u=(c(18),c(4)),d=c.n(u),h=c(0);var O=function(e){var t=e.title,c=void 0===t?"":t,n=e.children;return Object(h.jsxs)("div",{className:d.a.container,children:[c&&Object(h.jsx)("h2",{className:d.a.title,children:c}),n]})},f=c(9),m=c.n(f);var v=function(e){var t=e.options,c=e.addLeaveFeedback;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{children:t.map((function(e){return Object(h.jsx)("button",{type:"button",className:m.a.button,onClick:function(){c(e)},children:e},e)}))})})},x=c(1),p=c.n(x);var k=function(e){var t=e.options,c=e.total,n=e.positivePercentage;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("ul",{className:p.a.list,children:[Object.keys(t).map((function(e){return Object(h.jsxs)("li",{className:p.a.item,children:[e,": ",Object(h.jsx)("span",{className:"".concat(p.a.numbers," ").concat(p.a[e]),children:t[e]})]})})),Object(h.jsxs)("li",{className:"".concat(p.a.item," "),children:["Total: ",Object(h.jsx)("span",{className:"".concat(p.a.numbers," "),children:c})]}),Object(h.jsxs)("li",{className:p.a.item,children:["Positive feedback:"," ",Object(h.jsxs)("span",{className:"".concat(p.a.numbers," "),children:[n,"%"]})]})]})})},g=c(10),F=c.n(g);var N=function(e){var t=e.message,c=void 0===t?"":t;return Object(h.jsx)(h.Fragment,{children:c&&Object(h.jsx)("p",{className:F.a.text,children:c})})},y=function(e){Object(b.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(o.a)(this,c);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.onSetFeedback=function(t){e.setState((function(e){return Object(r.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){return Object.keys(e.state).reduce((function(t,c){return t+e.state[c]}),0)},e.countPositiveFeedbackPercentage=function(){return Math.round(e.state.good/e.countTotalFeedback()*100)},e}return Object(l.a)(c,[{key:"render",value:function(){var e=this.countTotalFeedback(),t=this.countPositiveFeedbackPercentage(),c=this.state,n=Object.keys(this.state);return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(O,{title:"Please leave feedback",children:Object(h.jsx)(v,{options:n,addLeaveFeedback:this.onSetFeedback})}),Object(h.jsx)(O,{title:"Statistics",children:e>0?Object(h.jsx)(k,{options:c,total:e,positivePercentage:t}):Object(h.jsx)(N,{message:"There is no feedback"})})]})}}]),c}(n.Component),P=y;i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(P,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.02a75325.chunk.js.map