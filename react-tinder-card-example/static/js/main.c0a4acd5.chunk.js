(this["webpackJsonpreact-tinder-card-example"]=this["webpackJsonpreact-tinder-card-example"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(3),i=n.n(a),l=(n(10),n(11),n(1)),c=n(4),s=n.n(c),u={start:{text:"You and your friend are out at night when you notice a store that is closed.\n\n    It seems that someone has broken into the store -- the front door is open.\n   \n   Your friend goes in to check it out.\n   \n   What do you do?",leftText:"Wait outside",leftCardID:"police_arrive_wait",rightText:"Go in",rightCardID:"police_arrive_go_in"},police_arrive_wait:{text:'The police arrive.\n\n    One officer goes in to arrest your friend for break and enter.\n    \n    The other officer suspects you of being a "lookout" for your friend.\n    \n    You are asked to freeze and put your hands up.',leftText:"Put your hands up",leftCardID:"police_arrest_comply",rightText:"Run",rightCardID:"police_arrest_run"},police_arrive_go_in:{text:"The police arrive.\n\n    They enter the store and find you and your friend inside.\n    \n    One officer holds you at gunpoint and tells you freeze and put your hands up.",leftText:"Put your hands up",leftCardID:"police_arrest_comply",rightText:"Run",rightCardID:"police_arrest_run"},police_arrest_comply:{text:"The police officer arrests you for break and enter.\n\n    The officer has the choice to let you live in your community until your criminal charges are resolved, or take you into police custody.\n    \n    The officer chooses to take you into police custody.",leftText:"Go into police custody",leftCardID:null,rightText:null,rightCardID:null},police_arrest_run:{text:"The police officer chases after you, catches up to you, and violently takes you down.\n\n    You are arrested for break and enter and evading arrest.\n    \n    You are taken into police custody.",leftText:"Go into police custody",leftCardID:null,rightText:null,rightCardID:null}};var d=function(){var e=Object(r.useState)("start"),t=Object(l.a)(e,2),n=t[0],a=t[1],i=Object(r.useState)(),c=Object(l.a)(i,2),d=(c[0],c[1],Object(r.useState)(!1)),f=Object(l.a)(d,2),h=f[0],p=f[1],y=Object(r.useMemo)((function(){var e={};return Object.keys(u).map((function(t,n){e[t]={}})),e}),[]),m=function(e,t){h||(p(!0),y[t].current.swipe(e))};return o.a.createElement("div",null,o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Damion&display=swap",rel:"stylesheet"}),o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Alatsi&display=swap",rel:"stylesheet"}),o.a.createElement("div",{className:"cardContainer"},n?Object.keys(u).map((function(e,t){return o.a.createElement(s.a,{ref:y[e],preventSwipe:["up","down"],className:"swipe",key:e,onSwipe:function(e){h||p(!0)},onCardLeftScreen:function(t){return function(e,t){"left"===e?a(u[t].leftCardID):"right"===e&&a(u[t].rightCardID),p(!1)}(t,e)}},o.a.createElement("div",{style:{backgroundColor:"grey",display:n===e?"block":"none"},className:"card"},o.a.createElement("h3",{style:{whiteSpace:"pre-line"}},u[e].text)))})):null),n?o.a.createElement("div",{className:"buttons"},u[n].leftText?o.a.createElement("button",{onClick:function(){return m("left",n)}},u[n].leftText):null,u[n].rightText?o.a.createElement("button",{onClick:function(){return m("right",n)}},u[n].rightText):null):o.a.createElement("div",{className:"treatedFairlySection"},o.a.createElement("p",null,"Do you think you were treated fairly?"),o.a.createElement("div",{className:"buttons",style:{justifyContent:"center"}},o.a.createElement("button",{onClick:function(){window.location.reload()}},"Try again")),o.a.createElement("div",null,o.a.createElement("a",{href:"https://github.com/mstfst/react-tinder-card-example"},"See the GitHub repo."))))};var f=function(){return o.a.createElement("div",{className:"app"},o.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},5:function(e,t,n){e.exports=n(16)}},[[5,1,2]]]);
//# sourceMappingURL=main.c0a4acd5.chunk.js.map