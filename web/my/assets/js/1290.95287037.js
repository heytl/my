(window.webpackJsonp=window.webpackJsonp||[]).push([[1290],{2893:function(t,e,a){"use strict";a.r(e);var i=a(476),s=a(47),n=(a(201),a(202),{name:"MyDvBorder7",mixins:[a(845).a],props:{duration:{type:Number,default:4}},computed:{length:function(){return 2*(this.width+this.height-5)},path:function(){var t=this.reverse,e=this.width,a=this.height;return t?"M 2.5, 2.5 L 2.5, ".concat(a-2.5," L ").concat(e-2.5,", ").concat(a-2.5," L ").concat(e-2.5,", 2.5 L 2.5, 2.5"):"M2.5, 2.5 L".concat(e-2.5,", 2.5 L").concat(e-2.5,", ").concat(a-2.5," L2.5, ").concat(a-2.5," L2.5, 2.5")}}}),r=a(19),o=Object(r.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Box",t._b({staticClass:"my-dv-border-7",class:t.classes,attrs:{"default-width":"400px","default-height":"300px",padding:"0"}},"Box",t.$attrs,!1),[a("svg",{staticClass:"my-dv-border__svg",style:t.styles,attrs:{width:t.width,height:t.height}},[a("defs",[a("path",{attrs:{id:"path-"+t._uid,d:t.path,fill:"transparent"}}),t._v(" "),a("radialGradient",{attrs:{id:"gradient-"+t._uid,cx:"50%",cy:"50%",r:"50%"}},[a("stop",{attrs:{offset:"0%","stop-color":"#fff","stop-opacity":"1"}}),t._v(" "),a("stop",{attrs:{offset:"100%","stop-color":"#fff","stop-opacity":"0"}})],1),t._v(" "),a("mask",{attrs:{id:"mask-"+t._uid}},[a("circle",{attrs:{cx:"0",cy:"0",r:"150",fill:"url(#gradient-"+t._uid+")"}},[a("animateMotion",{attrs:{dur:t.duration+"s",path:t.path,rotate:"auto",repeatCount:"indefinite"}})],1)])],1),t._v(" "),a("polygon",{attrs:{fill:t.fill,points:"5, 5 "+(t.width-5)+", 5 "+(t.width-5)+" "+(t.height-5)+" 5, "+(t.height-5)}}),t._v(" "),a("use",{attrs:{stroke:t.dark,"stroke-width":"1","xlink:href":"#path-"+t._uid}}),t._v(" "),a("use",{attrs:{stroke:t.light,"stroke-width":"3","xlink:href":"#path-"+t._uid,mask:"url(#mask-"+t._uid+")"}},[a("animate",{attrs:{attributeName:"stroke-dasharray",from:"0, "+t.length,to:t.length+", 0",dur:t.duration+"s",repeatCount:"indefinite"}})])]),t._v(" "),a("BoxContent",{attrs:{padding:t.$attrs.padding}},[t._t("default")],2)],1)}),[],!1,null,null,null).exports,l=Object(s.a)(o),d=a(0);d.default.use(l),d.default.use(i.a);var u={},c=Object(r.a)(u,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{height:"600px"}},[e("my-dv-page",{attrs:{target:"parent",fit:""}},[e("my-dv-border7",{attrs:{"x-align":"center","y-align":"middle",width:"80%",height:"80%"}})],1)],1)}),[],!1,null,null,null);e.default=c.exports},723:function(t,e,a){},841:function(t,e,a){},842:function(t,e,a){"use strict";a(723)},845:function(t,e,a){"use strict";a(384),a(201);var i=a(418),s=a(498),n=a(47),r={name:"MyDvContent",props:{padding:String},computed:{styles:function(){return{padding:this.padding}}}},o=(a(842),a(19)),l=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"my-dv-content",style:this.styles},[this._t("default")],2)}),[],!1,null,null,null).exports,d=Object(n.a)(l),u=a(727);a(841),e.a={mixins:[s.a,u.a],inheritAttrs:!1,components:{Box:i.a,BoxContent:d},props:{fill:{type:String,default:function(){var t,e;return(null==this||null===(t=this.page)||void 0===t||null===(e=t.settings)||void 0===e?void 0:e.fill)||"transparent"}},reverse:Boolean,opacity:{type:Number,default:1}},computed:{classes:function(){return{"my-dv-border":!0,"is-reverse":this.reverse}},styles:function(){return{opacity:this.opacity}}}}}}]);