(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{2151:function(t,e,n){"use strict";var i=n(47),r=(n(31),n(2175),{name:"MyDvScreen",inheritAttrs:!1,inject:{page:{default:null}},components:{Box:n(412).a},props:{enter:{type:String,default:"slideInRight"},leave:{type:String,default:"slideOutLeft"}},data:function(){return{}},computed:{enterClass:function(){return"animate__animated animate__".concat(this.enter," animate__faster")},leaveClass:function(){return"animate__animated animate__".concat(this.leave," animate__faster")},active:function(){var t=this.page,e=t.screens,n=t.screenActiveIndex;return!!e&&e[void 0===n?0:n]===this}},methods:{register:function(){var t,e=null===(t=this.page)||void 0===t?void 0:t.screens;e&&e.push(this)},unregister:function(){var t,e=this,n=null===(t=this.page)||void 0===t?void 0:t.screens;n&&(n=n.filter((function(t){return t!==e})))}},created:function(){this.register()},beforeDestroy:function(){this.unregister()}}),s=n(19),o=Object(s.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{"enter-active-class":this.enterClass,"leave-active-class":this.leaveClass}},[this.active?e("Box",this._b({staticClass:"my-dv-screen",attrs:{"default-width":"100%","default-height":"100%"}},"Box",this.$attrs,!1),[this._t("default")],2):this._e()],1)}),[],!1,null,null,null).exports;e.a=Object(i.a)(o)},2175:function(t,e,n){},366:function(t,e,n){"use strict";e.__esModule=!0,e.isInContainer=e.getScrollContainer=e.isScroll=e.getStyle=e.once=e.off=e.on=void 0;var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.hasClass=d,e.addClass=function(t,e){if(!t)return;for(var n=t.className,i=(e||"").split(" "),r=0,s=i.length;r<s;r++){var o=i[r];o&&(t.classList?t.classList.add(o):d(t,o)||(n+=" "+o))}t.classList||(t.className=n)},e.removeClass=function(t,e){if(!t||!e)return;for(var n=e.split(" "),i=" "+t.className+" ",r=0,s=n.length;r<s;r++){var o=n[r];o&&(t.classList?t.classList.remove(o):d(t,o)&&(i=i.replace(" "+o+" "," ")))}t.classList||(t.className=(i||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,""))},e.setStyle=function t(e,n,r){if(!e||!n)return;if("object"===(void 0===n?"undefined":i(n)))for(var s in n)n.hasOwnProperty(s)&&t(e,s,n[s]);else"opacity"===(n=u(n))&&l<9?e.style.filter=isNaN(r)?"":"alpha(opacity="+100*r+")":e.style[n]=r};var r,s=n(0);var o=((r=s)&&r.__esModule?r:{default:r}).default.prototype.$isServer,c=/([\:\-\_]+(.))/g,a=/^moz([A-Z])/,l=o?0:Number(document.documentMode),u=function(t){return t.replace(c,(function(t,e,n,i){return i?n.toUpperCase():n})).replace(a,"Moz$1")},f=e.on=!o&&document.addEventListener?function(t,e,n){t&&e&&n&&t.addEventListener(e,n,!1)}:function(t,e,n){t&&e&&n&&t.attachEvent("on"+e,n)},h=e.off=!o&&document.removeEventListener?function(t,e,n){t&&e&&t.removeEventListener(e,n,!1)}:function(t,e,n){t&&e&&t.detachEvent("on"+e,n)};e.once=function(t,e,n){f(t,e,(function i(){n&&n.apply(this,arguments),h(t,e,i)}))};function d(t,e){if(!t||!e)return!1;if(-1!==e.indexOf(" "))throw new Error("className should not contain space.");return t.classList?t.classList.contains(e):(" "+t.className+" ").indexOf(" "+e+" ")>-1}var m=e.getStyle=l<9?function(t,e){if(!o){if(!t||!e)return null;"float"===(e=u(e))&&(e="styleFloat");try{switch(e){case"opacity":try{return t.filters.item("alpha").opacity/100}catch(t){return 1}default:return t.style[e]||t.currentStyle?t.currentStyle[e]:null}}catch(n){return t.style[e]}}}:function(t,e){if(!o){if(!t||!e)return null;"float"===(e=u(e))&&(e="cssFloat");try{var n=document.defaultView.getComputedStyle(t,"");return t.style[e]||n?n[e]:null}catch(n){return t.style[e]}}};var p=e.isScroll=function(t,e){if(!o)return m(t,null!==e||void 0!==e?e?"overflow-y":"overflow-x":"overflow").match(/(scroll|auto)/)};e.getScrollContainer=function(t,e){if(!o){for(var n=t;n;){if([window,document,document.documentElement].includes(n))return window;if(p(n,e))return n;n=n.parentNode}return n}},e.isInContainer=function(t,e){if(o||!t||!e)return!1;var n=t.getBoundingClientRect(),i=void 0;return i=[window,document,document.documentElement,null,void 0].includes(e)?{top:0,right:window.innerWidth,bottom:window.innerHeight,left:0}:e.getBoundingClientRect(),n.top<i.bottom&&n.bottom>i.top&&n.right>i.left&&n.left<i.right}},385:function(t,e,n){"use strict";var i=n(2),r=n(49).findIndex,s=n(120),o=!0;"findIndex"in[]&&Array(1).findIndex((function(){o=!1})),i({target:"Array",proto:!0,forced:o},{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),s("findIndex")},412:function(t,e,n){"use strict";var i=n(47),r=n(76),s=n(46),o=(n(201),n(116),n(385),n(202),n(31),{name:"MyDvBox",inheritAttrs:!1,provide:function(){return{layoutVm:this.layout?this:null}},inject:{layoutVm:{default:null}},props:{width:String,height:String,defaultWidth:{type:String,default:"auto"},defaultHeight:{type:String,default:"auto"},left:{type:[String,Number]},top:{type:[String,Number]},right:[String,Number],bottom:[String,Number],zIndex:[Number,String],xAlign:{type:String,validator:function(t){return["left","right","center"].includes(t)}},yAlign:{type:String,validator:function(t){return["top","bottom","middle"].includes(t)}},contentAlign:{type:String,default:"left",validator:function(t){return["left","right","center"].includes(t)}},zoom:Number,scale:Number,fit:Boolean,visible:{type:Boolean,default:!0},position:{type:Boolean,default:!0},margin:String,padding:String,inline:Boolean,opacity:{type:Number,default:1},shadow:Boolean,layout:Boolean,weight:{type:Number,default:1},gap:{type:Number,default:0},direction:{type:String,default:"row",validator:function(t){return["row","column"].includes(t)}},free:Boolean},data:function(){return{boxes:[]}},computed:{layoutSize:function(){var t=this,e=this.weight,n=this.layoutVm,i=this.free;if(n&&!i){var r=n.gap,s=n.direction,o=n.total,c=n.boxCount,a=n.boxes,l=a.findIndex((function(e){return e===t})),u=c-1,f="(100% - ".concat(r*u,"px) * ").concat(e," / ").concat(o),h=a.filter((function(t,e){return e<l})).reduce((function(t,e){return t+e.weight}),0),d="(100% - ".concat(r*u,"px) * ").concat(h," / ").concat(o," +  ").concat(l*r,"px");return"row"===s?{height:"calc(".concat(f,")"),top:"calc(".concat(d,")")}:{width:"calc(".concat(f,")"),left:"calc(".concat(d,")")}}return null},styles:function(){var t=this.inline,e=this.margin,n=this.padding,i=this.position,r=this.fit,o=this.width,c=this.height,a=this.left,l=this.top,u=this.right,f=this.bottom,h=this.zIndex,d=this.zoom,m=this.scale,p=this.xAlign,g=this.yAlign,y=this.defaultWidth,v=this.defaultHeight;return Object(s.a)({position:i?"absolute":"relative",width:r?"100%":o||y,height:r?"100%":c||v,zoom:d,left:p?null:a,top:g?null:l,right:p?null:u,bottom:g?null:f,transform:m?"scale(".concat(m,")"):null,display:t?"inline-block":"block",opacity:this.opacity,margin:e,padding:n,zIndex:h},this.layoutSize)},classes:function(){var t;return t={},Object(r.a)(t,"is-".concat(this.xAlign),!!this.xAlign),Object(r.a)(t,"is-".concat(this.yAlign),!!this.yAlign),Object(r.a)(t,"is-shadow",this.shadow),Object(r.a)(t,"is-center-middle","center"===this.xAlign&&"middle"===this.yAlign),Object(r.a)(t,"is-content-align-".concat(this.contentAlign),!!this.contentAlign),t},total:function(){return this.boxes.reduce((function(t,e){return t+e.weight}),0)},boxCount:function(){return this.boxes.length}},methods:{registerBox:function(t){this.boxes.push(t)},unregisterBox:function(t){this.boxes=this.boxes.filter((function(e){return e!==t}))}},created:function(){this.layoutVm&&!this.free&&this.layoutVm.registerBox(this)},beforeDestroy:function(){this.layoutVm&&!this.free&&this.layoutVm.unregisterBox(this)}}),c=(n(520),n(19)),a=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return this.visible?e("div",this._g({staticClass:"my-dv-box",class:this.classes,style:this.styles},this.$listeners),[this._t("default")],2):this._e()}),[],!1,null,null,null).exports;e.a=Object(i.a)(a)},440:function(t,e,n){},444:function(t,e,n){},455:function(t,e,n){"use strict";var i=n(47),r=n(119),s=(n(201),n(202),n(369)),o=n(366),c=n(118),a=n(46),l={color:"#1de2ff",fill:"transparent",textColor:"#b4e4ff",colors:["#1165b2","#0d8888","#398912","#70980c","#b17706","#af620f","#af3b14","#ab181f","#a4226a","#502092","#2a39c3","#2a71c4","#128943","#49b312","#b28f13","#b25010","#bd352c","#a4224a","#6a1a97","#321a97","#1890ff","#13c2c2","#52c41a","#a0d911","#fdaa09","#fa8c16","#fa541c","#f5222d","#eb3197","#722ed1","#2f54eb"]},u={props:{config:Object},computed:{settings:function(){return Object(a.a)(Object(a.a)({},l),this.config)}}},f=n(502),h={name:"MyDvPage",mixins:[u],provide:function(){return{page:this}},props:{lock:{type:Boolean},scale:{type:Boolean,default:!0},width:{type:Number,default:1920,validator:function(t){return t>0}},height:{type:Number,default:1080,validator:function(t){return t>0}},activeIndex:{type:Number,default:0},target:{type:[String,HTMLElement,Function],default:function(){return document.body}},fit:Boolean,fullscreen:Boolean},data:function(){return{screens:[],screenActiveIndex:this.activeIndex,widthScale:1,heightScale:1,isFullScreen:!1}},watch:{$props:{deep:!0,immediate:!0,handler:function(){this.resize()}},activeIndex:{immediate:!0,handler:function(t){this.screenActiveIndex=t}}},computed:{styles:function(){return this.fit?{width:"100%",height:"100%",transform:"translateX(-50%) translateY(-50%)"}:{width:"".concat(this.width,"px"),height:"".concat(this.height,"px"),transform:"scaleX(".concat(this.widthScale,") scaleY(").concat(this.heightScale,") translateX(-50%) translateY(-50%)")}}},methods:{getTarget:function(){var t;switch(Object(r.a)(this.target)){case"string":t="parent"===this.target?this.$el.parentNode:document.querySelector(this.target);break;case"function":t=this.target();break;default:t=this.target}return t||document.body},resize:function(){if(!this.scale||this.fit)return this.widthScale=1,void(this.heightScale=1);var t=this.warpper||{},e=t.clientWidth,n=t.clientHeight;e&&n&&(this.lock?this.heightScale=this.widthScale=e/this.width:(this.widthScale=e/this.width,this.heightScale=n/this.height))},fullScreen:function(){var t=this.getTarget();Object(f.b)(t),this.isFullScreen=!0},exitFullScreen:function(){Object(f.a)(),this.isFullScreen=!1}},mounted:function(){this.warpper=this.getTarget(),Object(o.addClass)(this.warpper,"my-dv-page__wrapper"+this._uid),this.proxyResize=Object(c.c)(this.resize,100),Object(s.addResizeListener)(this.warpper,this.proxyResize),this.resize(),this.isFullScreen=!!this.fullscreen&&Object(f.c)()},beforeDestroy:function(){this.proxyResize&&Object(s.removeResizeListener)(this.warpper,this.proxyResize),Object(o.removeClass)(this.warpper,"my-dv-page__wrapper"+this._uid)}},d=(n(510),n(19)),m=Object(d.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-dv-page",style:t.styles},[t._t("default"),t._v(" "),t.fullscreen?n("div",{staticClass:"my-dv-page__fullscreen"},[t.isFullScreen?n("i",{staticClass:"el-icon-switch-button",attrs:{title:"取消全屏"},on:{click:t.exitFullScreen}}):n("i",{staticClass:"el-icon-full-screen",attrs:{title:"全屏"},on:{click:t.fullScreen}})]):t._e()],2)}),[],!1,null,null,null).exports;e.a=Object(i.a)(m)},502:function(t,e,n){"use strict";function i(t){var e=(t=t||document.documentElement).requestFullScreen||t.webkitRequestFullScreen||t.mozRequestFullScreen||t.msRequestFullscreen;void 0!==e&&e&&e.call(t)}function r(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen()}function s(){return document.isFullScreen||document.mozIsFullScreen||document.webkitIsFullScreen}n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return r})),n.d(e,"c",(function(){return s}))},510:function(t,e,n){"use strict";n(440)},520:function(t,e,n){"use strict";n(444)}}]);