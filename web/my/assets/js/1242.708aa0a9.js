(window.webpackJsonp=window.webpackJsonp||[]).push([[1242],{3018:function(t,e,a){"use strict";a.r(e);a(555),a(117);var s=a(557),l=(a(556),a(558)),i=a(0),n={components:{MyFloat:l.a,MyFloatItem:s.a}};i.default.use(l.a),i.default.use(s.a);var r=n,o=a(19),u=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("my-float",[e("my-float-item",[this._v("左边内容")]),this._v(" "),e("my-float-item",{attrs:{float:"right"}},[this._v("右边内容")])],1)}),[],!1,null,null,null);e.default=u.exports},497:function(t,e,a){"use strict";a(116);var s={name:"MyFloatItem",inject:{wrapper:{default:null}},props:{float:{type:String,default:"left",validator:function(t){return["none","left","right"].includes(t)}}},computed:{classes:function(){if(this.wrapper){var t=this.float;return this.wrapper.reverse&&(t="right"===this.float?"left":"left"===this.float?"right":"none"),["is-".concat(t),{"is-fit":this.wrapper.fit}]}}}},l=a(19),i=Object(l.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"my-float-item",class:this.classes},[this._t("default")],2)}),[],!1,null,null,null);e.a=i.exports},555:function(t,e,a){},556:function(t,e,a){},557:function(t,e,a){"use strict";var s=a(47),l=a(497);e.a=Object(s.a)(l.a)},558:function(t,e,a){"use strict";var s=a(47),l={name:"MyFloat",provide:function(){return{wrapper:this}},props:{reverse:{type:Boolean,default:!1},fit:{type:Boolean,default:!1}},computed:{classes:function(){return{"my-float--fit":this.fit}}}},i=a(19),n=Object(i.a)(l,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"my-float",class:this.classes},[this._t("default")],2)}),[],!1,null,null,null).exports,r=a(497);e.a=Object(s.a)(n),Object(s.a)(r.a)}}]);