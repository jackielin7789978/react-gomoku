(this["webpackJsonpreact-gomoku"]=this["webpackJsonpreact-gomoku"]||[]).push([[0],{30:function(n,t,e){"use strict";e.r(t);var i,r,a,o,c,s,b,l,d,p,u,x=e(16),j=e.n(x),h=e(5),O=e(2),g=e(1),f=e(7),m=e.p+"static/media/gamestart.e6b883e2.mp3",k=e.p+"static/media/blackchess.a419a936.mp3",v=e.p+"static/media/whitechess.9c0025d1.mp3",y=e.p+"static/media/winning.5826d047.mp3",w=e.p+"static/media/click.7ea98b81.mp3",S=e(3),C=Object(S.a)(i||(i=Object(O.a)(["\n  * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    font-family: 'NTR', sans-serif;\n    font-family: 'Gemunu Libre', sans-serif;\n  }\n  body {\n    background: #ececec;\n    height: 100vh;\n    overflow: hidden;\n  }\n  #root {\n    padding: 1px;\n  }\n  ::-webkit-scrollbar {\n    width: 6px;\n  }\n  ::-webkit-scrollbar-track {\n    -webkit-border-radius: 4px;\n    border-radius: 4px;\n  }\n  ::-webkit-scrollbar-thumb {\n    -webkit-border-radius: 0px;\n    border-radius: 0px;\n    background: #e0e0e0;\n  }\n  h1, h2, h3, h4, h5, h6 {\n    margin: 0;\n    padding: 0;\n  }\n  button {\n    border: none;\n    margin: 0;\n    padding: 0;\n  }\n  a {\n    text-decoration: none;\n    color: #222;\n    &:hover {\n      color: #222;\n    }\n    &:active {\n      color: #222;\n    }\n  }\n"]))),z=e(8),B=e(6),$=e(0),A=S.b.div(r||(r=Object(O.a)(["\n  position: absolute;\n  width: 50px;\n  top: 20px;\n  right: 30px;\n"]))),N=S.b.div(a||(a=Object(O.a)(["\n  display: inline-block;\n  width: 100%;\n  height: 20px;\n  background: #aab4be;\n  border-radius: 20px;\n"]))),G=S.b.span(o||(o=Object(O.a)(["\n  position: absolute;\n  left: ",";\n  top: -6px;\n  width: 30px;\n  height: 30px;\n  background: #001e3c;\n  border-radius: 50%;\n  cursor: pointer;\n"])),(function(n){return n.$isSoundOn?"40%":0})),q={color:"#f5f5f5",position:"absolute",top:"6px",right:"7px"};function F(n){var t=n.toggleSoundSetting,e=n.isSoundOn,i=n.playClicked;return Object($.jsxs)(A,{children:[Object($.jsx)(N,{}),Object($.jsx)(G,{onClick:function(){t(),i()},$isSoundOn:e,children:e?Object($.jsx)(z.a,{icon:B.c,style:q}):Object($.jsx)(z.a,{icon:B.b,style:q})})]})}var P,I,J,T,W=S.b.div(c||(c=Object(O.a)(["\n  background: #b89874;\n  width: 570px;\n  height: 570px;\n  box-shadow: 4px 8px 12px 1px rgba(60, 60, 60, 0.5);\n  overflow: hidden;\n  border-radius: 2px;\n  position: relative;\n  padding-bottom: 20px;\n"]))),E=S.b.div(s||(s=Object(O.a)(["\n  position: absolute;\n  background: #b89874;\n  z-index: 1;\n\n  &:first-child {\n    width: 100%;\n    height: 14px;\n    top: 0;\n  }\n  &:nth-child(2) {\n    width: 100%;\n    height: 14px;\n    bottom: 0;\n  }\n  &:nth-child(3) {\n    width: 14px;\n    height: 100%;\n    left: 0;\n  }\n  &:nth-child(4) {\n    width: 14px;\n    height: 100%;\n    right: 0;\n  }\n"]))),H=S.b.div(b||(b=Object(O.a)(["\n  height: 30px;\n  width: 570px;\n  position: relative;\n"]))),L=S.b.div(l||(l=Object(O.a)(["\n  position: relative;\n  display: inline-block;\n  top: 0;\n  left: 0px;\n  width: 30px;\n  height: 30px;\n  border: 1px solid #413320dd;\n  transform: translate(-50%, -50%);\n"]))),M=S.b.div(d||(d=Object(O.a)(["\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  left: 0px;\n  width: 30px;\n  height: 30px;\n  transform: translate(0, -2000%);\n  z-index: 2;\n  span {\n    width: 19px;\n    height: 19px;\n    border-radius: 50%;\n    background: transparent;\n    border: none;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-55%, -60%);\n    transition: linear 0.1s;\n    z-index: 5;\n    &:hover {\n      background: ",";\n      box-shadow: 2px 2px 3px 0px rgba(90, 90, 90, 0.7);\n    }\n  }\n"])),(function(n){return n.$isBlackNext?"rgba(80, 80, 80, 0.8)":"rgba(200, 200, 200, 0.8)"})),R=S.b.div(p||(p=Object(O.a)(["\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: #111;\n  border: 1px solid #333;\n  z-index: 5;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  box-shadow: 2px 2px 2px 0px rgba(30, 30, 30, 0.7);\n"]))),_=Object(S.b)(R)(u||(u=Object(O.a)(["\n  background: #eee;\n  border: 1px solid #ddd;\n"])));function D(n){var t=n.handleClick,e=n.handleSound,i=n.currentSquares,r=n.$isBlackNext,a=n.toggleSoundSetting,o=n.isSoundOn,c=n.playClicked,s=Array(20).fill(0).map((function(){return Array(20).fill(null)}));return Object($.jsxs)($.Fragment,{children:[Object($.jsx)(F,{toggleSoundSetting:a,isSoundOn:o,playClicked:c}),Object($.jsxs)(W,{children:[Object($.jsx)(E,{}),Object($.jsx)(E,{}),Object($.jsx)(E,{}),Object($.jsx)(E,{}),s.map((function(n,t){return Object($.jsx)(H,{style:{width:"600px"},children:n.map((function(n,e){return Object($.jsx)(L,{},t[e])}))},t)})),i.map((function(n,a){return Object($.jsx)(H,{children:n.map((function(o,c){return Object($.jsx)($.Fragment,{children:Object($.jsxs)(M,{$isBlackNext:r,onClick:function(n){n.stopPropagation(),t(a,c),e(r)},children:[Object($.jsx)("span",{}),i[a][c]?"Black"===i[a][c]?Object($.jsx)(R,{}):Object($.jsx)(_,{}):Object($.jsx)($.Fragment,{})]},n[c])})}))},a)}))]})]})}var K,Q,U,V,X=S.b.div(P||(P=Object(O.a)(["\n  margin-left: 20px;\n  font-size: 18px;\n  h3 {\n    margin-left: 10px;\n  }\n"]))),Y=S.b.div(I||(I=Object(O.a)(["\n  width: 150px;\n  padding: 8px;\n  margin: 10px 10px 0px 10px;\n  position: relative;\n  background: #fcfcfc;\n"]))),Z=Object(S.b)(z.a)(J||(J=Object(O.a)(["\n  position: absolute;\n  right: 10px;\n  font-size: 16px;\n  cursor: pointer;\n  transform: ",";\n"])),(function(n){return n.$isOpen?"rotate(180deg)":"rotate(0)"})),nn=S.b.div(T||(T=Object(O.a)(["\n  width: 150px;\n  margin: 0px 10px 10px 10px;\n  background: #fcfcfc;\n\n  ",";\n  div {\n    padding: 2px 8px;\n    cursor: pointer;\n    &:hover {\n      background: #e7e7e7;\n    }\n  }\n"])),(function(n){return n.$isOpen?"display: block":"display: none"}));function tn(n){var t=n.steps,e=n.jumpTo,i=n.isBlackNext,r=n.playClicked,a=Object(g.useState)(!1),o=Object(h.a)(a,2),c=o[0],s=o[1],b=Array.from(Array(t).keys());return Object($.jsxs)(X,{children:[Object($.jsxs)("h3",{children:["Next Player: ",i?"Black":"White"]}),Object($.jsxs)(Y,{$isOpen:c,children:["Go Back",Object($.jsx)(Z,{icon:B.a,$isOpen:c,onClick:function(){s(!c)}})]}),Object($.jsx)(nn,{$isOpen:c,children:b.map((function(n){var t=n?"Go to step ".concat(n):"Go to game start";return Object($.jsx)("div",{value:n,onClick:function(){e(n),r(),s(!c)},children:t},n)}))})]})}var en,rn=S.b.div(K||(K=Object(O.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(25, 25, 30, 0.6);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  z-index: 2;\n"]))),an=S.b.div(Q||(Q=Object(O.a)(["\n  font-size: 120px;\n  margin-bottom: 50px;\n  color: #eee;\n"]))),on=S.b.a(U||(U=Object(O.a)(["\n  font-size: 30px;\n  background: transparent;\n  cursor: pointer;\n  margin-bottom: 20px;\n  transition: ease 0.1s;\n  color: #d5d5d5;\n  &:hover {\n    color: #fff;\n  }\n"]))),cn=Object(S.b)(on)(V||(V=Object(O.a)(["\n  font-size: 54px;\n"])));function sn(n){var t=n.setIsPlaying,e=n.isSoundOn,i=n.playStart,r=n.playClicked,a=n.winner,o=n.history,c=n.setHistory;return Object($.jsxs)(rn,{children:[!a&&Object($.jsx)(cn,{onClick:function(){t(!0),e&&i()},children:"Start Game"}),a&&Object($.jsxs)($.Fragment,{children:[Object($.jsxs)(an,{children:["Winner is ",a]}),Object($.jsx)(on,{onClick:function(){e&&r(),t(!0),e&&i(),c(o.concat([{squares:Array(19).fill(0).map((function(){return Array(19).fill(null)})),coordinates:[null,null]}]))},children:"Play Again"})]})]})}var bn=S.b.div(en||(en=Object(O.a)(["\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  padding: 20px 0px;\n  text-align: center;\n  font-size: 18px;\n  letter-spacing: 1.5px;\n  a {\n    color: #8398a3;\n    transition: ease 0.2s;\n    &:hover {\n      color: #41548b;\n    }\n  }\n"])));function ln(){return Object($.jsxs)(bn,{children:["\xa9 Copyright 2021. Made by ","  ",Object($.jsx)("a",{href:"https://github.com/jackielin7789978",target:"_blank",rel:"noreferrer",children:"Jackie Lin"})]})}var dn,pn,un=function(n,t,e){if(t||e)return i(t,e,1,1)+i(t,e,-1,-1)>=4||i(t,e,1,0)+i(t,e,-1,0)>=4||i(t,e,0,1)+i(t,e,0,-1)>=4||i(t,e,1,-1)+i(t,e,-1,1)>=4?n[t][e]:null;function i(t,e,i,r){var a=n[t][e],o=t,c=e,s=0;do{if(c+=r,(o+=i)<0||c<0)break;if(o>18||c>18)break;if(n[o][c]!==a)break;s++}while(s<5);return s}},xn=S.b.section(dn||(dn=Object(O.a)(["\n  display: flex;\n  justify-content: center;\n  min-width: 50vw;\n  max-width: 90vw;\n  margin: 80px auto;\n"]))),jn=S.b.div(pn||(pn=Object(O.a)(["\n  font-size: 48px;\n  color: #222;\n  text-align: center;\n  letter-spacing: 1.5px;\n  margin: 5vh auto;\n"])));function hn(){var n=Object(g.useState)(!1),t=Object(h.a)(n,2),e=t[0],i=t[1],r=Object(g.useState)(!0),a=Object(h.a)(r,2),o=a[0],c=a[1],s=Object(g.useState)(!0),b=Object(h.a)(s,2),l=b[0],d=b[1],p=Object(g.useState)([{squares:Array(19).fill(0).map((function(){return Array(19).fill(null)})),coordinates:[null,null]}]),u=Object(h.a)(p,2),x=u[0],j=u[1],O=Object(g.useState)(0),S=Object(h.a)(O,2),z=S[0],B=S[1],A=x[x.length-1].squares,N=x[x.length-1].coordinates[0],G=x[x.length-1].coordinates[1],q=Object(f.a)(m,{volume:1}),F=Object(h.a)(q,1)[0],P=Object(f.a)(k,{volume:1}),I=Object(h.a)(P,1)[0],J=Object(f.a)(v,{volume:1}),T=Object(h.a)(J,1)[0],W=Object(f.a)(y,{volume:1}),E=Object(h.a)(W,1)[0],H=Object(f.a)(w,{volume:1}),L=Object(h.a)(H,1)[0];Object(g.useEffect)((function(){un(A,N,G)&&(i(!1),o&&E())}),[A,N,G,E,o,x]);return Object($.jsxs)($.Fragment,{children:[Object($.jsx)(C,{}),Object($.jsx)(jn,{children:"Gomoku Game"}),Object($.jsxs)(xn,{children:[Object($.jsx)(D,{currentSquares:A,handleClick:function(n,t){if(!un(A,N,G)&&!A[n][t]){var e=A[n].map((function(n,e){return e!==t?n:l?"Black":"White"}));j(x.concat([{squares:A.map((function(t,i){return i!==n?t:e})),coordinates:[n,t]}])),d(!l),B(z+1)}},handleSound:function(n){o&&(n?I():T())},playClicked:L,$isBlackNext:l,toggleSoundSetting:function(){c(!o)},isSoundOn:o}),Object($.jsx)(tn,{steps:z,jumpTo:function(n){j(x.slice(0,n+1)),B(Number(n)+1)},isBlackNext:l,playClicked:L})]}),!e&&Object($.jsx)(sn,{setIsPlaying:i,isSoundOn:o,playStart:F,playClicked:L,history:x,setHistory:j,winner:un(A,N,G)}),Object($.jsx)(ln,{})]})}j.a.render(Object($.jsx)(hn,{}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.8956d312.chunk.js.map