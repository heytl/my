(window.webpackJsonp=window.webpackJsonp||[]).push([[1296],{1333:function(e,i,t){},1541:function(e,i,t){},3142:function(e,i,t){"use strict";t.r(i);t(1333),t(362);var l=t(1592),a=t.n(l),n=(t(1541),t(1542)),o=t.n(n),s=t(0),r={data:function(){return{dialogImageUrl:"",dialogVisible:!1}},methods:{handleRemove:function(e,i){console.log(e,i)},handlePictureCardPreview:function(e){this.dialogImageUrl=e.url,this.dialogVisible=!0}}};s.default.use(o.a),s.default.use(a.a);var d=r,u=t(18),c=Object(u.a)(d,(function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",[t("el-upload",{attrs:{action:"https://jsonplaceholder.typicode.com/posts/","list-type":"picture-card","on-preview":e.handlePictureCardPreview,"on-remove":e.handleRemove}},[t("i",{staticClass:"el-icon-plus"})]),e._v(" "),t("el-dialog",{attrs:{visible:e.dialogVisible},on:{"update:visible":function(i){e.dialogVisible=i}}},[t("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1)}),[],!1,null,null,null);i.default=c.exports},362:function(e,i,t){}}]);