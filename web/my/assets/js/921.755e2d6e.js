(window.webpackJsonp=window.webpackJsonp||[]).push([[921],{2372:function(t,e,n){},2687:function(t,e,n){"use strict";n(2372)},3105:function(t,e,n){"use strict";n.r(e);var i=n(476),r=n(418),o=n(0);o.default.use(r.a),o.default.use(i.a);var s={},l=(n(2687),n(19)),a=Object(l.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"600px"}},[n("my-dv-page",{attrs:{target:"parent",fit:""}},[n("my-dv-box",{attrs:{"x-align":"left","y-align":"top"}},[t._v("left top")]),t._v(" "),n("my-dv-box",{attrs:{"x-align":"center","y-align":"top"}},[t._v("center top")]),t._v(" "),n("my-dv-box",{attrs:{"x-align":"right","y-align":"top"}},[t._v("right top")]),t._v(" "),n("my-dv-box",{attrs:{"x-align":"left","y-align":"middle"}},[t._v("left middle")]),t._v(" "),n("my-dv-box",{attrs:{"x-align":"center","y-align":"middle"}},[t._v("center middle")]),t._v(" "),n("my-dv-box",{attrs:{"x-align":"right","y-align":"middle"}},[t._v("right middle")]),t._v(" "),n("my-dv-box",{attrs:{"x-align":"left","y-align":"bottom"}},[t._v("left bottom")]),t._v(" "),n("my-dv-box",{attrs:{"x-align":"center","y-align":"bottom"}},[t._v("center bottom")]),t._v(" "),n("my-dv-box",{attrs:{"x-align":"right","y-align":"bottom"}},[t._v("right bottom")])],1)],1)}),[],!1,null,"adb6f2e8",null);e.default=a.exports},366:function(t,e,n){"use strict";e.__esModule=!0,e.removeResizeListener=e.addResizeListener=void 0;var i,r=n(392),o=(i=r)&&i.__esModule?i:{default:i};var s="undefined"==typeof window,l=function(t){var e=t,n=Array.isArray(e),i=0;for(e=n?e:e[Symbol.iterator]();;){var r;if(n){if(i>=e.length)break;r=e[i++]}else{if((i=e.next()).done)break;r=i.value}var o=r.target.__resizeListeners__||[];o.length&&o.forEach((function(t){t()}))}};e.addResizeListener=function(t,e){s||(t.__resizeListeners__||(t.__resizeListeners__=[],t.__ro__=new o.default(l),t.__ro__.observe(t)),t.__resizeListeners__.push(e))},e.removeResizeListener=function(t,e){t&&t.__resizeListeners__&&(t.__resizeListeners__.splice(t.__resizeListeners__.indexOf(e),1),t.__resizeListeners__.length||t.__ro__.disconnect())}},367:function(t,e,n){"use strict";e.__esModule=!0,e.isInContainer=e.getScrollContainer=e.isScroll=e.getStyle=e.once=e.off=e.on=void 0;var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.hasClass=h,e.addClass=function(t,e){if(!t)return;for(var n=t.className,i=(e||"").split(" "),r=0,o=i.length;r<o;r++){var s=i[r];s&&(t.classList?t.classList.add(s):h(t,s)||(n+=" "+s))}t.classList||(t.className=n)},e.removeClass=function(t,e){if(!t||!e)return;for(var n=e.split(" "),i=" "+t.className+" ",r=0,o=n.length;r<o;r++){var s=n[r];s&&(t.classList?t.classList.remove(s):h(t,s)&&(i=i.replace(" "+s+" "," ")))}t.classList||(t.className=(i||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,""))},e.setStyle=function t(e,n,r){if(!e||!n)return;if("object"===(void 0===n?"undefined":i(n)))for(var o in n)n.hasOwnProperty(o)&&t(e,o,n[o]);else"opacity"===(n=u(n))&&c<9?e.style.filter=isNaN(r)?"":"alpha(opacity="+100*r+")":e.style[n]=r};var r,o=n(0);var s=((r=o)&&r.__esModule?r:{default:r}).default.prototype.$isServer,l=/([\:\-\_]+(.))/g,a=/^moz([A-Z])/,c=s?0:Number(document.documentMode),u=function(t){return t.replace(l,(function(t,e,n,i){return i?n.toUpperCase():n})).replace(a,"Moz$1")},d=e.on=!s&&document.addEventListener?function(t,e,n){t&&e&&n&&t.addEventListener(e,n,!1)}:function(t,e,n){t&&e&&n&&t.attachEvent("on"+e,n)},f=e.off=!s&&document.removeEventListener?function(t,e,n){t&&e&&t.removeEventListener(e,n,!1)}:function(t,e,n){t&&e&&t.detachEvent("on"+e,n)};e.once=function(t,e,n){d(t,e,(function i(){n&&n.apply(this,arguments),f(t,e,i)}))};function h(t,e){if(!t||!e)return!1;if(-1!==e.indexOf(" "))throw new Error("className should not contain space.");return t.classList?t.classList.contains(e):(" "+t.className+" ").indexOf(" "+e+" ")>-1}var m=e.getStyle=c<9?function(t,e){if(!s){if(!t||!e)return null;"float"===(e=u(e))&&(e="styleFloat");try{switch(e){case"opacity":try{return t.filters.item("alpha").opacity/100}catch(t){return 1}default:return t.style[e]||t.currentStyle?t.currentStyle[e]:null}}catch(n){return t.style[e]}}}:function(t,e){if(!s){if(!t||!e)return null;"float"===(e=u(e))&&(e="cssFloat");try{var n=document.defaultView.getComputedStyle(t,"");return t.style[e]||n?n[e]:null}catch(n){return t.style[e]}}};var g=e.isScroll=function(t,e){if(!s)return m(t,null!==e||void 0!==e?e?"overflow-y":"overflow-x":"overflow").match(/(scroll|auto)/)};e.getScrollContainer=function(t,e){if(!s){for(var n=t;n;){if([window,document,document.documentElement].includes(n))return window;if(g(n,e))return n;n=n.parentNode}return n}},e.isInContainer=function(t,e){if(s||!t||!e)return!1;var n=t.getBoundingClientRect(),i=void 0;return i=[window,document,document.documentElement,null,void 0].includes(e)?{top:0,right:window.innerWidth,bottom:window.innerHeight,left:0}:e.getBoundingClientRect(),n.top<i.bottom&&n.bottom>i.top&&n.right>i.left&&n.left<i.right}},388:function(t,e,n){"use strict";var i=n(2),r=n(49).findIndex,o=n(120),s=!0;"findIndex"in[]&&Array(1).findIndex((function(){s=!1})),i({target:"Array",proto:!0,forced:s},{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),o("findIndex")},418:function(t,e,n){"use strict";var i=n(47),r=n(75),o=n(46),s=(n(201),n(116),n(388),n(202),n(31),{name:"MyDvBox",inheritAttrs:!1,provide:function(){return{layoutVm:this.layout?this:null}},inject:{layoutVm:{default:null}},props:{width:String,height:String,defaultWidth:{type:String,default:"auto"},defaultHeight:{type:String,default:"auto"},left:{type:[String,Number]},top:{type:[String,Number]},right:[String,Number],bottom:[String,Number],zIndex:[Number,String],xAlign:{type:String,validator:function(t){return["left","right","center"].includes(t)}},yAlign:{type:String,validator:function(t){return["top","bottom","middle"].includes(t)}},contentAlign:{type:String,default:"left",validator:function(t){return["left","right","center"].includes(t)}},zoom:Number,scale:Number,fit:Boolean,visible:{type:Boolean,default:!0},position:{type:Boolean,default:!0},margin:String,padding:String,inline:Boolean,opacity:{type:Number,default:1},shadow:Boolean,layout:Boolean,weight:{type:Number,default:1},gap:{type:Number,default:0},direction:{type:String,default:"row",validator:function(t){return["row","column"].includes(t)}},free:Boolean},data:function(){return{boxes:[]}},computed:{layoutSize:function(){var t=this,e=this.weight,n=this.layoutVm,i=this.free;if(n&&!i){var r=n.gap,o=n.direction,s=n.total,l=n.boxCount,a=n.boxes,c=a.findIndex((function(e){return e===t})),u=l-1,d="(100% - ".concat(r*u,"px) * ").concat(e," / ").concat(s),f=a.filter((function(t,e){return e<c})).reduce((function(t,e){return t+e.weight}),0),h="(100% - ".concat(r*u,"px) * ").concat(f," / ").concat(s," +  ").concat(c*r,"px");return"row"===o?{height:"calc(".concat(d,")"),top:"calc(".concat(h,")")}:{width:"calc(".concat(d,")"),left:"calc(".concat(h,")")}}return null},styles:function(){var t=this.inline,e=this.margin,n=this.padding,i=this.position,r=this.fit,s=this.width,l=this.height,a=this.left,c=this.top,u=this.right,d=this.bottom,f=this.zIndex,h=this.zoom,m=this.scale,g=this.xAlign,p=this.yAlign,y=this.defaultWidth,v=this.defaultHeight;return Object(o.a)({position:i?"absolute":"relative",width:r?"100%":s||y,height:r?"100%":l||v,zoom:h,left:g?null:a,top:p?null:c,right:g?null:u,bottom:p?null:d,transform:m?"scale(".concat(m,")"):null,display:t?"inline-block":"block",opacity:this.opacity,margin:e,padding:n,zIndex:f},this.layoutSize)},classes:function(){var t;return t={},Object(r.a)(t,"is-".concat(this.xAlign),!!this.xAlign),Object(r.a)(t,"is-".concat(this.yAlign),!!this.yAlign),Object(r.a)(t,"is-shadow",this.shadow),Object(r.a)(t,"is-center-middle","center"===this.xAlign&&"middle"===this.yAlign),Object(r.a)(t,"is-content-align-".concat(this.contentAlign),!!this.contentAlign),t},total:function(){return this.boxes.reduce((function(t,e){return t+e.weight}),0)},boxCount:function(){return this.boxes.length}},methods:{registerBox:function(t){this.boxes.push(t)},unregisterBox:function(t){this.boxes=this.boxes.filter((function(e){return e!==t}))}},created:function(){this.layoutVm&&!this.free&&this.layoutVm.registerBox(this)},beforeDestroy:function(){this.layoutVm&&!this.free&&this.layoutVm.unregisterBox(this)}}),l=(n(532),n(19)),a=Object(l.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return this.visible?e("div",this._g({staticClass:"my-dv-box",class:this.classes,style:this.styles},this.$listeners),[this._t("default")],2):this._e()}),[],!1,null,null,null).exports;e.a=Object(i.a)(a)},453:function(t,e,n){},457:function(t,e,n){},476:function(t,e,n){"use strict";var i=n(47),r=n(119),o=(n(201),n(202),n(366)),s=n(367),l=n(118),a=n(46),c={color:"#1de2ff",fill:"transparent",textColor:"#b4e4ff",colors:["#1165b2","#0d8888","#398912","#70980c","#b17706","#af620f","#af3b14","#ab181f","#a4226a","#502092","#2a39c3","#2a71c4","#128943","#49b312","#b28f13","#b25010","#bd352c","#a4224a","#6a1a97","#321a97","#1890ff","#13c2c2","#52c41a","#a0d911","#fdaa09","#fa8c16","#fa541c","#f5222d","#eb3197","#722ed1","#2f54eb"]},u={props:{config:Object},computed:{settings:function(){return Object(a.a)(Object(a.a)({},c),this.config)}}},d=n(503),f={name:"MyDvPage",mixins:[u],provide:function(){return{page:this}},props:{lock:{type:Boolean},scale:{type:Boolean,default:!0},width:{type:Number,default:1920,validator:function(t){return t>0}},height:{type:Number,default:1080,validator:function(t){return t>0}},activeIndex:{type:Number,default:0},target:{type:[String,HTMLElement,Function],default:function(){return document.body}},fit:Boolean,fullscreen:Boolean},data:function(){return{screens:[],screenActiveIndex:this.activeIndex,widthScale:1,heightScale:1,isFullScreen:!1}},watch:{$props:{deep:!0,immediate:!0,handler:function(){this.resize()}},activeIndex:{immediate:!0,handler:function(t){this.screenActiveIndex=t}}},computed:{styles:function(){return this.fit?{width:"100%",height:"100%",transform:"translateX(-50%) translateY(-50%)"}:{width:"".concat(this.width,"px"),height:"".concat(this.height,"px"),transform:"scaleX(".concat(this.widthScale,") scaleY(").concat(this.heightScale,") translateX(-50%) translateY(-50%)")}}},methods:{getTarget:function(){var t;switch(Object(r.a)(this.target)){case"string":t="parent"===this.target?this.$el.parentNode:document.querySelector(this.target);break;case"function":t=this.target();break;default:t=this.target}return t||document.body},resize:function(){if(!this.scale||this.fit)return this.widthScale=1,void(this.heightScale=1);var t=this.warpper||{},e=t.clientWidth,n=t.clientHeight;e&&n&&(this.lock?this.heightScale=this.widthScale=e/this.width:(this.widthScale=e/this.width,this.heightScale=n/this.height))},fullScreen:function(){var t=this.getTarget();Object(d.b)(t),this.isFullScreen=!0},exitFullScreen:function(){Object(d.a)(),this.isFullScreen=!1}},mounted:function(){this.warpper=this.getTarget(),Object(s.addClass)(this.warpper,"my-dv-page__wrapper"+this._uid),this.proxyResize=Object(l.c)(this.resize,100),Object(o.addResizeListener)(this.warpper,this.proxyResize),this.resize(),this.isFullScreen=!!this.fullscreen&&Object(d.c)()},beforeDestroy:function(){this.proxyResize&&Object(o.removeResizeListener)(this.warpper,this.proxyResize),Object(s.removeClass)(this.warpper,"my-dv-page__wrapper"+this._uid)}},h=(n(525),n(19)),m=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-dv-page",style:t.styles},[t._t("default"),t._v(" "),t.fullscreen?n("div",{staticClass:"my-dv-page__fullscreen"},[t.isFullScreen?n("i",{staticClass:"el-icon-switch-button",attrs:{title:"取消全屏"},on:{click:t.exitFullScreen}}):n("i",{staticClass:"el-icon-full-screen",attrs:{title:"全屏"},on:{click:t.fullScreen}})]):t._e()],2)}),[],!1,null,null,null).exports;e.a=Object(i.a)(m)},503:function(t,e,n){"use strict";function i(t){var e=(t=t||document.documentElement).requestFullScreen||t.webkitRequestFullScreen||t.mozRequestFullScreen||t.msRequestFullscreen;void 0!==e&&e&&e.call(t)}function r(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen()}function o(){return document.isFullScreen||document.mozIsFullScreen||document.webkitIsFullScreen}n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return r})),n.d(e,"c",(function(){return o}))},525:function(t,e,n){"use strict";n(453)},532:function(t,e,n){"use strict";n(457)}}]);