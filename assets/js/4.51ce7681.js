(window.webpackJsonp=window.webpackJsonp||[]).push([[4,6],{101:function(t,e,n){"use strict";var a=n(79);n.n(a).a},102:function(t,e,n){},146:function(t,e,n){"use strict";var a=n(102);n.n(a).a},149:function(t,e,n){"use strict";n.r(e);var a={components:{SWUpdatePopup:n(41).default}},o=(n(146),n(6)),u=Object(o.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SWUpdatePopup",{scopedSlots:t._u([{key:"default",fn:function(e){e.enabled;var a=e.reload,o=e.message,u=e.buttonText;return n("div",{staticClass:"my-sw-update-popup"},[t._v("\n    "+t._s(o)),n("br"),t._v(" "),n("button",{on:{click:a}},[t._v("\n      "+t._s(u)+"\n    ")])])}}])})},[],!1,null,null,null);u.options.__file="MySWUpdatePopup.vue";e.default=u.exports},41:function(t,e,n){"use strict";n.r(e);var a=n(7),o=n(19);const u={"/":{message:"New content is available.",buttonText:"Refresh"},"/zh/":{message:"发现新内容可用",buttonText:"刷新"}};var s={data:function(){return{rawPopupConfig:{message:"New content is available.",buttonText:"Refresh"},updateEvent:null}},created:function(){a.a.$on("sw-updated",this.onSWUpdated),!0==={message:"New content is available.",buttonText:"Refresh"}&&(this.rawPopupConfig=u)},computed:{popupConfig:function(){return Object(o.b)(this,this.rawPopupConfig)},enabled:function(){return Boolean(this.popupConfig&&this.updateEvent)},message:function(){var t=this.popupConfig;return t&&t.message||u["/"].message},buttonText:function(){var t=this.popupConfig;return t&&t.buttonText||u["/"].buttonText}},methods:{onSWUpdated:function(t){this.updateEvent=t},reload:function(){this.updateEvent&&(this.updateEvent.skipWaiting().then(function(){location.reload(!0)}),this.updateEvent=null)}}},i=(n(101),n(6)),p=Object(i.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"sw-update-popup"}},[t._t("default",[t.enabled?n("div",{staticClass:"sw-update-popup"},[t._v("\n      "+t._s(t.message)),n("br"),t._v(" "),n("button",{on:{click:t.reload}},[t._v(t._s(t.buttonText))])]):t._e()],{reload:t.reload,enabled:t.enabled,message:t.message,buttonText:t.buttonText})],2)},[],!1,null,"64bbe3ac",null);p.options.__file="SWUpdatePopup.vue";e.default=p.exports},79:function(t,e,n){}}]);