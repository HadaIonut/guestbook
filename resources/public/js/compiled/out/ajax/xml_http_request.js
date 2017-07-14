// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__29991 = e.target.readyState;
var fexpr__29990 = new cljs.core.PersistentArrayMap(null, 5, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready], null);
return (fexpr__29990.cljs$core$IFn$_invoke$arity$1 ? fexpr__29990.cljs$core$IFn$_invoke$arity$1(G__29991) : fexpr__29990.call(null,G__29991));
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("@pupeno/xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__29993,handler){
var map__29994 = p__29993;
var map__29994__$1 = ((((!((map__29994 == null)))?((((map__29994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29994.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29994):map__29994);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29994__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29994__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29994__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29994__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29994__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29994__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29994__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__29994,map__29994__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__29992_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__29992_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__29994,map__29994__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___30006 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___30006)){
var response_type_30007 = temp__4657__auto___30006;
this$__$1.responseType = cljs.core.name(response_type_30007);
} else {
}

var seq__29996_30008 = cljs.core.seq(headers);
var chunk__29997_30009 = null;
var count__29998_30010 = (0);
var i__29999_30011 = (0);
while(true){
if((i__29999_30011 < count__29998_30010)){
var vec__30000_30012 = chunk__29997_30009.cljs$core$IIndexed$_nth$arity$2(null,i__29999_30011);
var k_30013 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30000_30012,(0),null);
var v_30014 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30000_30012,(1),null);
this$__$1.setRequestHeader(k_30013,v_30014);

var G__30015 = seq__29996_30008;
var G__30016 = chunk__29997_30009;
var G__30017 = count__29998_30010;
var G__30018 = (i__29999_30011 + (1));
seq__29996_30008 = G__30015;
chunk__29997_30009 = G__30016;
count__29998_30010 = G__30017;
i__29999_30011 = G__30018;
continue;
} else {
var temp__4657__auto___30019 = cljs.core.seq(seq__29996_30008);
if(temp__4657__auto___30019){
var seq__29996_30020__$1 = temp__4657__auto___30019;
if(cljs.core.chunked_seq_QMARK_(seq__29996_30020__$1)){
var c__28215__auto___30021 = cljs.core.chunk_first(seq__29996_30020__$1);
var G__30022 = cljs.core.chunk_rest(seq__29996_30020__$1);
var G__30023 = c__28215__auto___30021;
var G__30024 = cljs.core.count(c__28215__auto___30021);
var G__30025 = (0);
seq__29996_30008 = G__30022;
chunk__29997_30009 = G__30023;
count__29998_30010 = G__30024;
i__29999_30011 = G__30025;
continue;
} else {
var vec__30003_30026 = cljs.core.first(seq__29996_30020__$1);
var k_30027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30003_30026,(0),null);
var v_30028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30003_30026,(1),null);
this$__$1.setRequestHeader(k_30027,v_30028);

var G__30029 = cljs.core.next(seq__29996_30020__$1);
var G__30030 = null;
var G__30031 = (0);
var G__30032 = (0);
seq__29996_30008 = G__30029;
chunk__29997_30009 = G__30030;
count__29998_30010 = G__30031;
i__29999_30011 = G__30032;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__27395__auto__ = body;
if(cljs.core.truth_(or__27395__auto__)){
return or__27395__auto__;
} else {
return "";
}
})());

return this$__$1;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});
