webpackJsonp([1],{"07PK":function(t,n,e){"use strict";(function(t){n.a={name:"HelloWorld",data:function(){return{datas:[]}},methods:{getdata:function(){var n=this;t.ajax({type:"GET",url:"../static/mydata.json",dataType:"json",success:function(t){"0001"==t.status&&(n.datas=t.datas),console.log(t)},error:function(t){console.log("error")}})}}}}).call(n,e("7t+N"))},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("7+uW"),r={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var s=e("VU/8")({name:"App"},r,!1,function(t){e("qGWJ")},null,null).exports,o=e("/ocq"),u=e("07PK"),c={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"hello"},[e("button",{staticClass:"btn",attrs:{type:"button",name:"button"},on:{click:t.getdata}},[t._v("jquery ajax 点击请求")]),t._v(" "),e("ul",t._l(t.datas,function(n,a){return e("li",[e("span",[t._v("\n        "+t._s(n.name)+"\n      ")]),t._v(" "),e("span",{staticStyle:{"margin-left":"10px"}},[t._v("\n        "+t._s(n.address)+"\n      ")])])}))])},staticRenderFns:[]};var i=function(t){e("x1/u")},l=e("VU/8")(u.a,c,!1,i,"data-v-21d57033",null).exports;a.a.use(o.a);var p=new o.a({routes:[{path:"/",name:"HelloWorld",component:l}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:p,components:{App:s},template:"<App/>"})},qGWJ:function(t,n){},"x1/u":function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.af9bc9a3139ab90101bc.js.map