(window.webpackJsonp=window.webpackJsonp||[]).push([[1125,7],{1725:function(e,t,i){},1767:function(e,t,i){"use strict";var r=i(53),n=(i(201),i(124),i(84),i(52)),a=i(1152),o=i(505),s={name:"MyMapOverview",inject:["myMap"],props:{theme:{type:String,default:"light",validator:function(e){return["light","dark"].includes(e)}},collapsible:{type:Boolean,default:!0},collapsed:{type:Boolean,default:!0},label:String,collapseLabel:String,rotateWithView:Boolean,tipLabel:{type:String,default:"缩略图"},invert:Boolean},render:function(){return null},data:function(){return{adapter:null}},watch:{adapter:function(){this.$nextTick(this.draw)}},methods:{draw:function(){if(this.adapter){this.removeControl();var e=Object(o.a)(this.adapter),t=this.invert?"my-map-overview--invert":"";this.overview=new a.a(Object(n.a)(Object(n.a)({},this.$props),{},{layers:[e],className:"ol-overviewmap my-map-overview is-".concat(this.theme," ").concat(t)})),this.myMap.map.addControl(this.overview)}},removeControl:function(){this.overview&&this.myMap.map.removeControl(this.overview)},layerChangeHandler:function(e){this.adapter=e}},created:function(){var e=this;this.myMap.$on("my-map-layers:change",this.layerChangeHandler),this.myMap.mapReady((function(){e.adapter=e.myMap.adapter}))},beforeDestroy:function(){this.removeControl(),this.myMap.$off("my-map-layers:change",this.layerChangeHandler)}};i(1725),t.a=Object(r.a)(s)},3282:function(e,t,i){"use strict";i.r(t);var r=i(1767),n=i(454),a=i(0);a.default.use(n.a),a.default.use(r.a);var o={},s=i(18),c=Object(s.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("my-map",[t("my-map-overview",{attrs:{collapsed:!1}})],1)}),[],!1,null,null,null);t.default=c.exports},454:function(e,t,i){"use strict";var r=i(53),n=(i(201),i(21),i(381),i(55),i(86),i(84),i(200),i(442),i(371),i(56),i(52)),a=i(85),o=i(671),s=i(620),c=i(559),l=i(561),u=i(459),h=i(568),p=i(604),d=i(505),m=i(367),f={name:"MyMap",provide:function(){return{myMap:this}},inject:{page:{default:null}},props:{zoom:{type:Number,default:10},minZoom:{type:Number,default:1},maxZoom:{type:Number,default:20},center:{type:Array,default:function(){return[113.261999,23.130592]}},adapter:{type:[String,Object,Function],default:"Baidu"},projection:{type:String,default:"EPSG:4326"},width:{type:String,default:"100%"},height:{type:String,default:"400px"},dragPan:{type:Boolean,default:!0},mouseWheelZoom:{type:Boolean,default:!0},mapOptions:Object,viewOptions:Object,invert:Boolean,filter:Object},render:function(){var e=arguments[0];return e("div",{class:this.classes,style:this.styles},[this.$slots.default])},data:function(){return{cursor:null,viewWidth:0,viewHeight:0}},computed:{classes:function(){return{"my-map":!0,"my-map--invert":this.invert}},styles:function(){return{width:this.width,height:this.height,cursor:this.cursor?"pointer":""}},filterStyle:function(){return this.filter?Object.entries(this.filter).map((function(e){var t=Object(a.a)(e,2),i=t[0],r=t[1];return"hue-rotate"===i?"".concat(i,"(").concat(r,"deg)"):"".concat(i,"(").concat(r,")")})).join(" "):null}},watch:{dragPan:function(e){this.setActive(c.a,e)},mouseWheelZoom:function(e){this.setActive(l.a,e)},filterStyle:function(){this.setCanvasFilter()}},methods:{setActive:function(e,t){if(this.map){var i=this.map.getInteractions().getArray().find((function(t){return t instanceof e}));i&&i.setActive(t)}},init:function(){var e=this.$props,t=e.center,i=e.projection,r=e.zoom,a=e.minZoom,h=e.maxZoom,p=Object(d.a)(this.adapter);p.__MY_LAYER__=!0;var f=new s.a(Object(n.a)(Object(n.a)({},this.viewOptions||{}),{},{projection:i,center:t,zoom:r,minZoom:a,maxZoom:h}));this.map=new o.a(Object(n.a)(Object(n.a)({},this.mapOptions||{}),{},{layers:[].concat(p),view:f,target:this.$el,controls:[],interactions:[new c.a,new l.a,new u.b({handleEvent:this.handleEvent})]})),this.setActive(c.a,this.dragPan),this.setActive(l.a,this.mouseWheelZoom),this.bindMapEvents(),this.$emit("ready",this.map,this),Object(m.addResizeListener)(this.$el,this.setViewSize),this.setCanvasFilter()},dispose:function(){this.map&&(this.map.disposeInternal(),this.unbindMapEvents(),Object(m.removeResizeListener)(this.$el,this.setViewSize))},getFeatureAtPixel:function(e){return this.map?this.map.forEachFeatureAtPixel(e,(function(e){return e})):null},setCursor:function(e){var t=this.getFeatureVM(e);this.cursor=t&&(t.cursor||t.$listeners.click)},clickTrigger:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"click";if(e){var r=this.getFeatureVM(e);r&&r.$emit(i,t,e)}},getLayer:function(){return this.map?this.map.getLayers().getArray().find((function(e){return e.__MY_LAYER__})):null},getFeatureVM:function(e){if(e){var t=(e.get("features")||[])[0]||e;return t.__vm__||t.get("__vm__")}},enterAndLeaveTrigger:function(e,t){if(!this.featureAtPixel&&e){this.$emit("mouseenter",t,e);var i=this.getFeatureVM(e);i&&i.$emit("mouseenter",t,e)}if(this.featureAtPixel&&!e){this.$emit("mouseleave",t,this.featureAtPixel);var r=this.getFeatureVM(this.featureAtPixel);r&&r.$emit("mouseleave",t,this.featureAtPixel)}if(this.featureAtPixel&&e&&this.featureAtPixel!==e){this.$emit("mouseleave",t,this.featureAtPixel),this.$emit("mouseenter",t,e);var n=this.getFeatureVM(this.featureAtPixel);n&&n.$emit("mouseleave",t,this.featureAtPixel);var a=this.getFeatureVM(e);a&&a.$emit("mouseenter",t,e)}this.featureAtPixel=e},handleEvent:function(e){var t=e.type,i=this.page||{},r=i.widthScale,n=void 0===r?1:r,o=i.heightScale,s=void 0===o?1:o,c=Object(a.a)(e.pixel,2),l=[c[0]/n,c[1]/s],u=this.getFeatureAtPixel(l);switch(t){case"pointermove":this.setCursor(u),this.enterAndLeaveTrigger(u,e);break;case"click":this.clickTrigger(u,e);break;default:this.clickTrigger(u,e,t)}return!0},bindMapEvents:function(){var e=this;this.map&&Object.entries(this.$listeners).forEach((function(t){var i=Object(a.a)(t,2),r=i[0],n=i[1];return e.map.on(r,n)}))},unbindMapEvents:function(){var e=this;this.map&&Object.entries(this.$listeners).forEach((function(t){var i=Object(a.a)(t,2),r=i[0],n=i[1];return e.map.un(r,n)}))},resize:function(){this.map.updateSize()},moveTo:function(e){this.map&&this.map.getView().animate({center:e,duration:200})},zoomTo:function(e){this.map&&this.map.getView().animate({zoom:Number.parseInt(e),duration:200})},zoomIn:function(){if(this.map){var e=this.map.getView();this.zoomTo(e.getZoom()+1)}},zoomOut:function(){if(this.map){var e=this.map.getView();this.zoomTo(e.getZoom()-1)}},mapReady:function(e){this.map?e&&e(this.map,this):this.$once("ready",e)},createVectorLayer:function(){if(this.map&&!this.vectorLayer){var e=new p.a;return this.vectorLayer=new h.a({source:e,zIndex:1}),this.map.addLayer(this.vectorLayer),this.vectorLayer}},addFeature:function(e){if(this.map){this.vectorLayer||this.createVectorLayer();var t=this.vectorLayer.getSource(),i=[].concat(e);t.addFeatures(i)}},removeFeature:function(e){if(this.vectorLayer){var t=this.vectorLayer.getSource();[].concat(e).forEach((function(e){return t.removeFeature(e)}))}},getMetersPerUnit:function(){return this.map?this.map.getView().getProjection().getMetersPerUnit():0},setViewSize:function(){var e=this.$el.getBoundingClientRect();this.viewWidth=e.width||0,this.viewHeight=e.height||0,this.map&&this.map.updateSize(),this.$emit("view-size-change",e)},setCanvasFilter:function(){if(this.map){var e=this.map.getViewport();e&&(e.style.filter=this.filterStyle)}},clear:function(){this.map&&(this.map.getLayers().getArray().filter((function(e){return!e.__MY_LAYER__})).forEach((function(e){e.getSource().clear()})),(this.$children||[]).forEach((function(e){e.clear&&e.clear()})))}},mounted:function(){this.init()},beforeDestroy:function(){this.dispose()}};i(664),i(526),t.a=Object(r.a)(f)},484:function(e,t,i){"use strict";i.d(t,"c",(function(){return o})),i.d(t,"d",(function(){return s})),i.d(t,"a",(function(){return c})),i.d(t,"b",(function(){return l}));i(55),i(86),i(32),i(545),i(33),i(87),i(457),i(59),i(569),i(392);var r=i(547),n=i.n(r),a=/^(http|https):\/\/[\w.:]*\//;function o(e,t,i){var r,n={};e=(e||location.search).replace(/^[^]*\?/,""),t=t||"&",i=i||"=";for(var a=new RegExp("(?:^|\\"+t+")([^\\"+i+"\\"+t+"]+)(?:\\"+i+"([^\\"+t+"]*))?","g");null!==(r=a.exec(e));)r[1]!==e&&(n[decodeURIComponent(r[1])]=decodeURIComponent(r[2]||""));return n}function s(e){var t=[];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.push([i,encodeURIComponent(e[i])].join("="));return t.join("&")}function c(e){var t=e.match(a);return t?t[0]:""}function l(e,t){var i=[],r=c(e),a=n()(e.replace(r,""),i).exec(t.split("?")[0].replace(r,"")),o={};return a&&a.length>0&&i.forEach((function(e,t){o[e.name]=a[t+1]})),o}},505:function(e,t,i){"use strict";i.d(t,"a",(function(){return Q}));i(201),i(84);var r=i(52),n=i(57),a=i(496),o=i(627),s=i(669),c=i(489),l=i(673),u=i(603),h=i(426),p=i(626),d=(i(86),i(32),i(7),i(87),i(28)),m=i(62),f=i(134),v=i(135),g=i(133),y=i(136),b=i(482),w=i(562),j="METER",O="KILOMETER",S="DEGREE",x="INCH",E="FOOT",M="ISERVER";function T(e,t,i){var r=e*t*(1/.0254)*function(e){var t;if(e===j)t=1;else if(e===S)t=2*Math.PI*6378137/360;else if(e===O)t=.001;else if(e===x)t=1/.025399999918;else{if(e!==E)return t;t=.3048}return t}(i);return r=1/r}function I(e,t,i){var r=e*t*(1/.0254)*this.getMeterPerMapUnit(i);return r=1/r}var P=function(e){Object(g.a)(i,e);var t=Object(y.a)(i);function i(e){var r;if(Object(d.a)(this,i),void 0===(e=e||{}).url)return Object(f.a)(r);e.format=e.format?e.format:"png";var n=e.url+"/tileImage."+e.format+"?";e.serverType=e.serverType||M,r=t.call(this,{attributions:e.attributions,cacheSize:e.cacheSize,crossOrigin:e.crossOrigin,logo:e.logo,opaque:e.opaque,projection:e.projection,reprojectionErrorThreshold:e.reprojectionErrorThreshold,state:e.state,tileClass:e.tileClass,tileGrid:e.tileGrid,tileLoadFunction:e.tileLoadFunction,tilePixelRatio:e.tilePixelRatio,tileUrlFunction:function(t,r,n){a.tileGrid||(a.extent?(a.tileGrid=i.createTileGrid(e.extent),a.resolutions&&(a.tileGrid.resolutions=a.resolutions)):("EPSG:3857"===n.getCode()&&(a.tileGrid=i.createTileGrid([-20037508.3427892,-20037508.3427892,20037508.3427892,20037508.3427892]),a.extent=[-20037508.3427892,-20037508.3427892,20037508.3427892,20037508.3427892]),"EPSG:4326"===n.getCode()&&(a.tileGrid=i.createTileGrid([-180,-90,180,90]),a.extent=[-180,-90,180,90])));a.origin=a.tileGrid.getOrigin(0);var o=t[0],c=t[1],l=-t[2]-1,u=a.tileGrid.getResolution(o),h=n.getUnits();"degrees"===h&&(h=S);"m"===h&&(h=j);var p=T(u,96,h),d=Object(b.c)(a.tileGrid.getTileSize(o,a.tmpSize)),m=s.call(a)+encodeURI("&x="+c+"&y="+l+"&width="+d[0]+"&height="+d[1]+"&scale="+p);a.tileProxy&&(m=a.tileProxy+encodeURIComponent(m));a.cacheEnabled||(m+="&_t="+(new Date).getTime());return m},url:e.url,urls:e.urls,wrapX:void 0!==e.wrapX&&e.wrapX,cacheEnabled:e.cacheEnabled,layersID:e.layersID}),e.tileProxy&&(r.tileProxy=e.tileProxy),r.options=e,r._url=e.url,r.tileSetsIndex=-1,r.tempIndex=-1;var a=Object(v.a)(r);function o(){var t={};return t.redirect=void 0!==e.redirect&&e.redirect,t.transparent=void 0===e.transparent||e.transparent,t.cacheEnabled=!(!1===e.cacheEnabled),this.cacheEnabled=t.cacheEnabled,t._cache=t.cacheEnabled,this.origin&&(t.origin=JSON.stringify({x:this.origin[0],y:this.origin[1]})),e.prjCoordSys&&(t.prjCoordSys=JSON.stringify(e.prjCoordSys)),e.layersID&&(t.layersID=e.layersID.toString()),e.overlapDisplayed?t.overlapDisplayed=!0:(t.overlapDisplayed=!1,e.overlapDisplayedOptions&&(t.overlapDisplayedOptions=this.overlapDisplayedOptions.toString())),e.cacheEnabled&&e.tileversion&&(t.tileversion=e.tileversion.toString()),t}function s(){return this._paramsChanged&&(this._layerUrl=c.call(this),this._paramsChanged=!1),this._layerUrl||c.call(this)}function c(){return this._layerUrl=n+encodeURI(l.call(this)),this._layerUrl}function l(){this.requestParams=this.requestParams||o.call(this);var e=[];for(var t in this.requestParams)e.push(t+"="+this.requestParams[t]);return e.join("&")}return r}return Object(m.a)(i,[{key:"setTileSetsInfo",value:function(e){this.tileSets=e,Array.isArray(this.tileSets)&&(this.tileSets=e[0]),this.tileSets&&(this.dispatchEvent({type:"tilesetsinfoloaded",value:{tileVersions:this.tileSets.tileVersions}}),this.changeTilesVersion())}},{key:"lastTilesVersion",value:function(){this.tempIndex=this.tileSetsIndex-1,this.changeTilesVersion()}},{key:"nextTilesVersion",value:function(){this.tempIndex=this.tileSetsIndex+1,this.changeTilesVersion()}},{key:"changeTilesVersion",value:function(){var e=this;if(null!=e.tileSets&&!(e.tempIndex===e.tileSetsIndex||this.tempIndex<0)){var t=e.tileSets.tileVersions;if(t&&e.tempIndex<t.length&&e.tempIndex>=0){var i=t[e.tempIndex].name;e.mergeTileVersionParam(i)&&(e.tileSetsIndex=e.tempIndex,e.dispatchEvent({type:"tileversionschanged",value:{tileVersion:t[e.tempIndex]}}))}}}},{key:"updateCurrentTileSetsIndex",value:function(e){this.tempIndex=e}},{key:"mergeTileVersionParam",value:function(e){return!!e&&(this.requestParams.tileversion=e,this._paramsChanged=!0,this.refresh(),!0)}}],[{key:"optionsFromMapJSON",value:function(e,t){var i={};i.url=e,i.crossOrigin="anonymous";var r=[t.bounds.left,t.bounds.bottom,t.bounds.right,t.bounds.top],n=function(){var e,i=r[2]-r[0],n=r[3]-r[1],a=i>=n?i:n;e=a===i?a/t.viewer.width:a/t.viewer.height;var o=[],s=j;t.coordUnit===S&&(s=S);if(t.visibleScalesEnabled&&t.visibleScales&&t.visibleScales.length>0)for(var c=0;c<t.visibleScales.length;c++)o.push(I(t.visibleScales[c],96,s));else for(var l=0;l<17;l++)o.push(e/Math.pow(2,l));return o.sort((function(e,t){return t-e}))}();return i.tileGrid=new h.a({extent:r,resolutions:n}),i}},{key:"createTileGrid",value:function(e,t,i,r,n){var a=Object(w.a)({extent:e,maxZoom:t,minZoom:i,tileSize:r});return new h.a({extent:e,minZoom:i,origin:n,resolutions:a.getResolutions(),tileSize:a.getTileSize()})}}]),i}(u.a),_=i(369),z=i(382),A=i(484),G=(i(33),i(59),i(670)),C=i.n(G),L=new z.b({code:"baidu",extent:[-20037726.37,-12474104.17,20037726.37,12474104.17],units:"m"});Object(z.d)(L),Object(z.c)("EPSG:4326",L,C.a.ll2bmerc,C.a.bmerc2ll),Object(z.c)("EPSG:3857",L,C.a.smerc2bmerc,C.a.bmerc2smerc);for(var V=new Array(19),F=0;F<19;++F)V[F]=Math.pow(2,18-F);var R=function(e){return new a.a({source:new c.a({projection:"baidu",maxZoom:18,tileUrlFunction:function(t){var i=t[1],r=-t[2]-1,n=t[0];i<0&&(i="M"+-i),r<0&&(r="M"+-r);var a=Math.ceil(5*Math.random());return e.url.replace(/{x}/g,i).replace(/{y}/g,r).replace(/{z}/g,n).replace(/{n}/g,a)},tileGrid:new h.a({resolutions:V,origin:[0,0]})})})},$="http://webrd03.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}&lang=zh_cn",k="http://online{n}.map.bdimg.com/tile/?qt=vtile&x={x}&y={y}&z={z}&styles=pl&scaler=1&udt=20190718",Z="http://10.8.6.103/PGIS_S_TileMapServer/Maps/BJSL/EzMap?Service=getImage&Type=RGB&ZoomOffset=0",D="http://53.1.238.17/iserver/services/map-pgisvec/rest/maps/pgisvecv1",U="http://68.26.21.71/images/GetImage.do?method=showImageRedisBytable&jinyi_admin:MA_PGISSLDT&version=v1";function B(){for(var e=[],t=0;t<20;t++){var i=t<7?[64,64]:[107.5,28];e.push(i)}return e}function W(){for(var e=[],t=0;t<20;t++){var i=2.0000081722216954/Math.pow(2,t);e.push(i)}return e}function N(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"EPSG:4326",t=256,i=Object(z.j)(e),r=i.getExtent(),n=Object(_.E)(r)/t,a=[],o=[],s=0;s<=20;s++)a[s]=s,o[s]=n/Math.pow(2,s);return new p.b({origin:Object(_.C)(r),resolutions:o,matrixIds:a})}function q(e){var t=e.layers.map((function(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"vec_c";return new a.a({source:new c.a({url:"http://t{0-7}.tianditu.com/DataServer?T="+e+"&x={x}&y={y}&l={z}&tk=464554f64aa4f4e90e0321c17a57a331"})})}(e)}));return new o.a({layers:t})}function X(e){var t=N(),i=e.url;return new a.a({source:new l.a({url:i,tileGrid:t}),wrapX:!1})}function Y(e){var t=e.url,i=N();return new a.a({source:new l.a({url:"",crossOrigin:"Anonymous",tileGrid:i,tileLoadFunction:function(e,i){var r=Object(A.c)(i),n={Row:r.TileRow,Col:r.TileCol,Zoom:r.TileMatrix,V:"1.0.0"};e.getImage().src="".concat(t,"&").concat(Object(A.d)(n))}}),wrapX:!1})}function H(e){if("function"==typeof e.url){var t=e.url,i=N();return new a.a({source:new l.a({url:"",crossOrigin:"Anonymous",tileGrid:i,tileLoadFunction:function(e,i){var r=Object(A.c)(i);e.getImage().src=t(r)}}),wrapX:!1})}return Y(e)}function J(e){return new a.a({source:new P({url:e.url}),projection:e.projection||"EPSG:4326"})}function K(e){var t=e.url;return new a.a({projection:e.projection||"EPSG:4326",url:"".concat(t,"&l={z}&x={y}&y={x}"),tileGrid:new h.a({origin:e.origins||B(),resolutions:e.resolutions||W()})})}function Q(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("function"==typeof e)return e({TileLayer:a.a,LayerGroup:o.a,OSM:s.a,XYZ:c.a,WMTS:l.a,TileImage:u.a,TileGrid:h.a,WMTSGrid:p.b,getWidth:_.E,getTopLeft:_.C,getProj:z.j});var i="object"===Object(n.a)(e)?Object(r.a)({},e):{type:e},d=i.type;switch(delete i.type,d){case"OSM":return new a.a(Object(r.a)(Object(r.a)({},t),{},{source:new s.a(i)}));case"XYZ":return new a.a(Object(r.a)(Object(r.a)({},t),{},{source:new c.a(i)}));case"Amap":return new a.a(Object(r.a)(Object(r.a)({},t),{},{source:new c.a(Object(r.a)({url:$},i))}));case"Baidu":return R(Object(r.a)({url:k},i));case"TDT":return q(Object(r.a)({layers:["vec_c","vec_w","cva_w","ibo_w"]},i));case"Founder":return X(Object(r.a)({url:"http://127.0.0.1:3000/proxy"},i));case"Ez":return Y(Object(r.a)({url:Z},i));case"Super":return J(Object(r.a)({url:D},i));case"Fc":return K(Object(r.a)({url:U},i));case"WMTS":return H(i)}}},526:function(e,t,i){}}]);