(window.webpackJsonp=window.webpackJsonp||[]).push([[1365],{2329:function(e,t,n){},2643:function(e,t,n){"use strict";n(2329)},3029:function(e,t,n){"use strict";n.r(t);n(782),n(368);var a=n(533),o=n.n(a),r=(n(803),n(542)),s=n.n(r),u=(n(1773),n(119),n(2153)),l=(n(632),n(633)),d=n(0),c={components:{MyDrag:l.a,MyDrop:u.a},data:function(){return{text:"请放置在这里"}},methods:{handleEnter:function(){this.text="已进入"},handleLeave:function(){this.text="已离开"},handleDrop:function(){this.text="已放置"}}};d.default.use(s.a),d.default.use(o.a),d.default.use(l.a),d.default.use(u.a);var i=c,f=(n(2643),n(20)),p=Object(f.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-row",[n("el-col",{attrs:{span:8}},[n("my-drag",[e._v("请把我拖到目标处")])],1),e._v(" "),n("el-col",{attrs:{span:16}},[n("my-drop",{on:{enter:e.handleEnter,leave:e.handleLeave,drop:e.handleDrop}},[e._v(e._s(e.text))])],1)],1)}),[],!1,null,"05152d43",null);t.default=p.exports}}]);