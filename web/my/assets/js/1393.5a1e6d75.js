(window.webpackJsonp=window.webpackJsonp||[]).push([[1393],{2191:function(t,e,i){},2234:function(t,e,i){"use strict";var s=i(47),a=(i(201),i(369)),n={name:"MySlideLayout",props:{type:{type:String,default:"horizontal",validator:function(t){return"horizontal"===t||"vertical"===t}},edageWidth:{type:Number,default:50,validator:function(t){return t>=5&&t<=95}},range:{type:Array,default:function(){return[5,95]},validator:function(t){return 2===t.length&&t[1]>t[0]&&t[1]<=95&&t[0]>=5}}},data:function(){return{defaultLength:0,minLength:0,maxLength:0,finish:!1}},computed:{},watch:{type:function(){this.setLayout()},edageWidth:function(){this.setLayout()},range:function(){this.setLayout()}},methods:{setLayout:function(){var t="horizontal"===this.type?this.$refs.body.offsetWidth:this.$refs.body.offsetHeight,e=this.edageWidth/100,i=Math.round(t*e),s=this.range[1]/100,a=this.range[0]/100,n=Math.round(t*s),r=Math.round(t*a);this.defaultLength=i,this.maxLength=n,this.minLength=r,this.finish=!0,this.$emit("on-ready")},resizeHandle:function(){this.$emit("on-resize",this.$refs.resizeBar)}},created:function(){},mounted:function(){var t=this;setTimeout((function(){t.setLayout()}),200),Object(a.addResizeListener)(this.$el,this.setLayout),Object(a.addResizeListener)(this.$refs.resizeBar,this.resizeHandle)},beforeDestroy:function(){Object(a.removeResizeListener)(this.$el,this.setLayout),Object(a.removeResizeListener)(this.$refs.resizeBar,this.resizeHandle)}},r=i(19),h=Object(r.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"body",class:{"my-slide-layout":!0,horizontal:"horizontal"===t.type,vertical:"vertical"===t.type}},["horizontal"===t.type?i("div",{staticClass:"left-warp"},[i("div",{ref:"resizeBar",staticClass:"resize-bar",style:{width:t.defaultLength+"px","max-width":t.maxLength+"px","min-Width":t.minLength+"px"},on:{resize:t.resizeHandle}}),t._v(" "),i("div",{staticClass:"resize-line"}),t._v(" "),i("div",{staticClass:"resize-save"},[t.finish?i("div",{staticClass:"content-warp"},[t._t("odd")],2):t._e()])]):t._e(),t._v(" "),"horizontal"===t.type?i("div",{staticClass:"right-warp"},[t.finish?i("div",{staticClass:"content-warp"},[t._t("even")],2):t._e()]):t._e(),t._v(" "),"vertical"===t.type?i("div",{staticClass:"top-warp"},[i("div",{staticClass:"resize-bar",staticStyle:{height:"250px","max-height":"450px"},style:{height:t.defaultLength+"px","max-height":t.maxLength+"px","min-height":t.minLength+"px"}}),t._v(" "),i("div",{staticClass:"resize-line"}),t._v(" "),i("div",{staticClass:"resize-save"},[t.finish?i("div",{staticClass:"content-warp"},[t._t("odd")],2):t._e()])]):t._e(),t._v(" "),"vertical"===t.type?i("div",{staticClass:"bottom-warp"},[t.finish?i("div",{staticClass:"content-warp"},[t._t("even")],2):t._e()]):t._e()])}),[],!1,null,null,null).exports;e.a=Object(s.a)(h)},3361:function(t,e,i){"use strict";i.r(e);i(2191),i(117);var s=i(2234),a=i(0),n={components:{MySlideLayout:s.a}};a.default.use(s.a);var r=n,h=i(19),o=Object(h.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{width:"400px",height:"400px"}},[e("my-slide-layout",{attrs:{type:"horizontal","edage-width":40}},[e("div",{staticStyle:{width:"100%",height:"100%",background:"lightgreen"},attrs:{slot:"odd"},slot:"odd"},[this._v("left")]),this._v(" "),e("div",{staticStyle:{width:"100%",height:"100%",background:"pink"},attrs:{slot:"even"},slot:"even"},[this._v("right")])])],1)}),[],!1,null,"06399401",null);e.default=o.exports}}]);