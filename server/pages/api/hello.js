"use strict";(()=>{var e={};e.id=1,e.ids=[1],e.modules={5600:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},6762:(e,n)=>{Object.defineProperty(n,"M",{enumerable:!0,get:function(){return function e(n,t){return t in n?n[t]:"then"in n&&"function"==typeof n.then?n.then(n=>e(n,t)):"function"==typeof n&&"default"===t?n:void 0}}})},1376:(e,n,t)=>{t.r(n),t.d(n,{config:()=>P,default:()=>d,routeModule:()=>l});var r={};t.r(r),t.d(r,{default:()=>o});var i=t(9947),u=t(2706),a=t(6762);let o=(e,n)=>{n.status(200).json({name:"Edwin Dang"})},d=(0,a.M)(r,"default"),P=(0,a.M)(r,"config"),l=new i.PagesAPIRouteModule({definition:{kind:u.A.PAGES_API,page:"/api/hello",pathname:"/api/hello",bundlePath:"",filename:""},userland:r})},2706:(e,n)=>{var t;Object.defineProperty(n,"A",{enumerable:!0,get:function(){return t}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE",e.IMAGE="IMAGE"}(t||(t={}))},9947:(e,n,t)=>{e.exports=t(5600)}};var n=require("../../webpack-api-runtime.js");n.C(e);var t=n(n.s=1376);module.exports=t})();