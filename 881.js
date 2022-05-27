"use strict";(self.webpackChunkwheel=self.webpackChunkwheel||[]).push([[881],{745:(e,t,n)=>{var r=n(30);t.s=r.createRoot,r.hydrateRoot},577:(e,t,n)=>{n.r(t);var r=n(737),i=n.n(r);function a(e){var t=e.componentRef,n=e.items,a=void 0===n?[]:n,o=e.onChange,l=e.onDone,u=(0,r.useState)(0),c=u[0],d=u[1],s=(0,r.useMemo)((function(){return 100/a.map((function(e){return e.weight})).reduce((function(e,t){return e+t}),0)}),[a]),f=(0,r.useMemo)((function(){return 360/a.map((function(e){return e.weight})).reduce((function(e,t){return e+t}),0)}),[a]),h=(0,r.useMemo)((function(){var e=0;return"".concat(a.reduce((function(t,n,r,i){return e+=s*n.weight,"".concat(t,", ").concat(n.color," ").concat(r>0?s*i[r-1].weight:"0","% ").concat(e,"%")}),"from ".concat(c,"deg")))}),[a,c]),m=(0,r.useRef)(),g=(0,r.useCallback)((function(){m.current&&(clearInterval(m.current),m.current=void 0),d(0),o(void 0)}),[]);(0,r.useEffect)((function(){return function(){g()}}),[]),(0,r.useEffect)((function(){g(),p.current=Array.from(Array(360).keys()).map((function(e){var t;return a.reduce((function(n,r){var i=n+f*r.weight;if(!(e/i<1))return i;t=r.id}),0),t}))}),[a]);var p=(0,r.useRef)([]);(0,r.useImperativeHandle)(t,(function(){return{start:function(e){y(e,p.current)}}}),[t]);var y=(0,r.useCallback)((function(e,t){g();var n=Math.ceil(360*Math.random()),r=t[n],i=e;m.current=setInterval((function(){d((function(a){var u=Math.floor(a/360),c=e-u,d=t[360-a%360];return o(d),i!=c&&(c>0?i=c:360-a%360==n&&(i=0,o(r),l(r),clearInterval(m.current),m.current=void 0)),a+i}))}),10)}),[]);return i().createElement("div",{style:{display:"grid",placeContent:"center",overflow:"hidden",margin:"0",height:"100%",padding:"10em"}},i().createElement("div",{style:{border:"20px solid white",borderRadius:"50%",background:"white",position:"relative"}},i().createElement("div",{style:{position:"absolute",left:"50%",transform:"translate(-50%, 0px) rotate(45deg)",border:"solid black",borderWidth:"0 3px 3px 0",display:"inline-block",padding:"3px"}}),i().createElement("div",{style:{padding:"8em",borderRadius:"50%",background:"radial-gradient(white calc(20% - 1px), transparent 20%), \n            conic-gradient(".concat(h,")")}})))}var o=["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","DarkOrange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","RebeccaPurple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"],l=function(e,t,n){if(n||2===arguments.length)for(var r,i=0,a=t.length;i<a;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))},u=[{id:0,title:"item 1",weight:1,color:"Blue",selected:!0},{id:1,title:"item 2",weight:2,color:"Green",selected:!0},{id:2,title:"item 3",weight:3,color:"Red",selected:!0}];function c(e){var t=e.onChange,n=(0,r.useState)(u),a=n[0],c=n[1];(0,r.useEffect)((function(){t(a.filter((function(e){return e.selected})))}),[a]);var d=(0,r.useCallback)((function(e){return i().createElement("span",{key:"item-input_".concat(e.id)},i().createElement("input",{type:"checkbox",checked:e.selected,onChange:function(t){c((function(n){return n.find((function(t){return t.id===e.id})).selected=t.target.checked,l([],n,!0)}))}}),i().createElement("input",{type:"text",value:e.title,onChange:function(t){c((function(n){return n.find((function(t){return t.id===e.id})).title=t.target.value,l([],n,!0)}))}})," - ",i().createElement("input",{type:"number",value:e.weight,min:1,onChange:function(t){c((function(n){return n.find((function(t){return t.id===e.id})).weight=t.target.valueAsNumber,l([],n,!0)}))}})," - ",i().createElement("input",{type:"text",value:e.color,onChange:function(t){c((function(n){return n.find((function(t){return t.id===e.id})).color=t.target.value,l([],n,!0)}))}}))}),[]),s=(0,r.useCallback)((function(){return o[Math.floor(Math.random()*o.length)]}),[]);return i().createElement("div",{style:{display:"flex",flexDirection:"column"}},a.map(d),i().createElement("button",{onClick:function(){return c((function(e){var t=s();return l(l([],e,!0),[{id:Math.max.apply(Math,e.map((function(e){return e.id})))+1,color:t,selected:!0,title:t,weight:1}],!1)}))}},"Add item"))}var d=n(745),s=document.getElementById("root");(0,d.s)(s).render(i().createElement((function(){var e,t=(0,r.useRef)(null),n=(0,r.useState)([]),o=n[0],l=n[1],u=(0,r.useState)(),d=u[0],s=u[1],f=(0,r.useCallback)((function(e){s(e)}),[]),h=(0,r.useCallback)((function(e){console.log("done: ",e)}),[]);return i().createElement(i().Fragment,null,i().createElement("div",{style:{justifySelf:"center"}},"Winner is ",null===(e=o.find((function(e){return e.id===d})))||void 0===e?void 0:e.color),i().createElement("div",{style:{position:"relative"}},i().createElement(a,{componentRef:t,items:o,onChange:f,onDone:h}),i().createElement("button",{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",borderRadius:"50%",height:"70px",width:"70px"},onClick:function(){var e;return null===(e=t.current)||void 0===e?void 0:e.start(10)}},"SPIN")),i().createElement(c,{onChange:function(e){l(e)}}))}),null))}}]);