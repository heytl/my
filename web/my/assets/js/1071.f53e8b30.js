(window.webpackJsonp=window.webpackJsonp||[]).push([[1071],{1642:function(t,e,a){},2351:function(t,e,a){"use strict";var n=a(1642);a.n(n).a},2784:function(t,e,a){"use strict";a.r(e);var n=a(410),r=a.n(n),o=a(411),s=a.n(o),l=(a(1344),a(123),a(1346)),u=(a(553),a(555)),d=a(0),c={components:{MyDrag:u.a,MyDrop:l.a},data:function(){return{text:"请放置在这里"}},methods:{handleEnter:function(){this.text="已进入"},handleLeave:function(){this.text="已离开"},handleDrop:function(){this.text="已放置"}}};d.default.use(s.a),d.default.use(r.a),d.default.use(u.a),d.default.use(l.a);var p=c,i=(a(2351),a(18)),f=Object(i.a)(p,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",[a("el-col",{attrs:{span:6}},[a("my-drag",{attrs:{group:"demo"}},[t._v("请把我拖到目标处")])],1),t._v(" "),a("el-col",{attrs:{span:6}},[a("my-drag",[t._v("我是不能被放置的")])],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("my-drop",{attrs:{accept:"demo"},on:{enter:t.handleEnter,leave:t.handleLeave,drop:t.handleDrop}},[t._v(t._s(t.text))])],1)],1)}),[],!1,null,"3fe8d990",null);e.default=f.exports}}]);