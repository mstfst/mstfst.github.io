(this["webpackJsonpreact-tinder-card-example"]=this["webpackJsonpreact-tinder-card-example"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),i=n.n(o),c=(n(10),n(11),n(1)),l=n(4),s=n.n(l),u={start:{text:"You and your friend are out at night when you notice a store that is closed, but the front door is open.  \n    \n    Your friend goes in to check it out.\n    \n    What do you do?",leftText:"Wait outside",leftCardID:"police_arrive",rightText:"Go in",rightCardID:"police_arrive"},police_arrive:{text:"The police arrive.",leftText:"Wait",leftCardID:"end",rightText:"Run",rightCardID:"end"},end:{text:"The last card",leftText:"end",leftCardID:null,rightText:"end",rightCardID:null}};var d=function(){var e=Object(a.useState)("start"),t=Object(c.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)(),l=Object(c.a)(i,2),d=(l[0],l[1],Object(a.useState)(!1)),f=Object(c.a)(d,2),m=f[0],h=f[1],p=Object(a.useMemo)((function(){return Array(Object.keys(u).length).fill(0).map((function(e){return r.a.createRef()}))}),[]),y=Object(a.useState)(p.length-1),g=Object(c.a)(y,2),b=g[0],v=g[1],w=function(e,t){p[t].current.swipe(e)};return r.a.createElement("div",null,r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Damion&display=swap",rel:"stylesheet"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Alatsi&display=swap",rel:"stylesheet"}),r.a.createElement("div",{className:"cardContainer"},Object.keys(u).map((function(e,t){return r.a.createElement(s.a,{ref:p[t],preventSwipe:["up","down"],className:"swipe",key:e,onSwipe:function(e){m||h(!0)},onCardLeftScreen:function(e){return function(e,t){v(t-1),"left"===e?o(u[n].leftCardID):"right"===e&&o(u[n].rightCardID),h(!1)}(e,t)}},r.a.createElement("div",{style:{backgroundColor:"grey",display:t===b?"block":"none"},className:"card"},r.a.createElement("h3",{style:{whiteSpace:"pre-line"}},n?u[n].text:null)))}))),n?r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{onClick:function(){return w("left",b)}},u[n].leftText),r.a.createElement("button",{onClick:function(){return w("right",b)}},u[n].rightText)):r.a.createElement("div",{className:"treatedFairlySection"},r.a.createElement("p",null,"Do you think you were treated fairly?"),r.a.createElement("div",{className:"buttons",style:{justifyContent:"center"}},r.a.createElement("button",{onClick:function(){window.location.reload()}},"Try again"))))};var f=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},5:function(e,t,n){e.exports=n(16)}},[[5,1,2]]]);
//# sourceMappingURL=main.2011cdab.chunk.js.map