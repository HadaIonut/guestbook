// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('guestbookcljs.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.core');
goog.require('om.core');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_();
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["This text is printed from src/clj/guestbook/routes/core.cljs.\n    Go ahead and edit it and see reloading in action."], 0));
guestbookcljs.core.handler = (function guestbookcljs$core$handler(response){
return console.log([cljs.core.str.cljs$core$IFn$_invoke$arity$1(response)].join(''));
});
guestbookcljs.core.error_handler = (function guestbookcljs$core$error_handler(p__40070){
var map__40071 = p__40070;
var map__40071__$1 = ((((!((map__40071 == null)))?((((map__40071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40071.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40071):map__40071);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40071__$1,cljs.core.cst$kw$status);
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40071__$1,cljs.core.cst$kw$status_DASH_text);
return console.log([cljs.core.str.cljs$core$IFn$_invoke$arity$1("something bad happened: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("/send-info",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$response_DASH_format,cljs.core.cst$kw$transit], null)], 0));
guestbookcljs.core.name_comp = (function guestbookcljs$core$name_comp(state,owner){
if(typeof guestbookcljs.core.t_guestbookcljs$core40073 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
guestbookcljs.core.t_guestbookcljs$core40073 = (function (state,owner,meta40074){
this.state = state;
this.owner = owner;
this.meta40074 = meta40074;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
guestbookcljs.core.t_guestbookcljs$core40073.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40075,meta40074__$1){
var self__ = this;
var _40075__$1 = this;
return (new guestbookcljs.core.t_guestbookcljs$core40073(self__.state,self__.owner,meta40074__$1));
});

guestbookcljs.core.t_guestbookcljs$core40073.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40075){
var self__ = this;
var _40075__$1 = this;
return self__.meta40074;
});

guestbookcljs.core.t_guestbookcljs$core40073.prototype.om$core$IRender$ = cljs.core.PROTOCOL_SENTINEL;

guestbookcljs.core.t_guestbookcljs$core40073.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return om.dom.p.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(self__.state),guestbookcljs.core.nl,cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(self__.state)], 0));
});

guestbookcljs.core.t_guestbookcljs$core40073.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$state,cljs.core.cst$sym$owner,cljs.core.cst$sym$meta40074], null);
});

guestbookcljs.core.t_guestbookcljs$core40073.cljs$lang$type = true;

guestbookcljs.core.t_guestbookcljs$core40073.cljs$lang$ctorStr = "guestbookcljs.core/t_guestbookcljs$core40073";

guestbookcljs.core.t_guestbookcljs$core40073.cljs$lang$ctorPrWriter = (function (this__28756__auto__,writer__28757__auto__,opt__28758__auto__){
return cljs.core._write(writer__28757__auto__,"guestbookcljs.core/t_guestbookcljs$core40073");
});

guestbookcljs.core.__GT_t_guestbookcljs$core40073 = (function guestbookcljs$core$name_comp_$___GT_t_guestbookcljs$core40073(state__$1,owner__$1,meta40074){
return (new guestbookcljs.core.t_guestbookcljs$core40073(state__$1,owner__$1,meta40074));
});

}

return (new guestbookcljs.core.t_guestbookcljs$core40073(state,owner,cljs.core.PersistentArrayMap.EMPTY));
});
if(typeof guestbookcljs.core.app_state !== 'undefined'){
} else {
guestbookcljs.core.app_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$contacts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$messages,cljs.core.PersistentVector.EMPTY], null));
}
guestbookcljs.core.getMessages = (function guestbookcljs$core$getMessages(state){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("/send-info",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$response_DASH_format,cljs.core.cst$kw$transit,cljs.core.cst$kw$handler,(function (r){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$contacts,(function (_){
return r;
}));
})], null)], 0));
});
guestbookcljs.core.root_comp = (function guestbookcljs$core$root_comp(state,owner){
if(typeof guestbookcljs.core.t_guestbookcljs$core40076 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
guestbookcljs.core.t_guestbookcljs$core40076 = (function (state,owner,meta40077){
this.state = state;
this.owner = owner;
this.meta40077 = meta40077;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
guestbookcljs.core.t_guestbookcljs$core40076.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40078,meta40077__$1){
var self__ = this;
var _40078__$1 = this;
return (new guestbookcljs.core.t_guestbookcljs$core40076(self__.state,self__.owner,meta40077__$1));
});

guestbookcljs.core.t_guestbookcljs$core40076.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40078){
var self__ = this;
var _40078__$1 = this;
return self__.meta40077;
});

guestbookcljs.core.t_guestbookcljs$core40076.prototype.om$core$IWillMount$ = cljs.core.PROTOCOL_SENTINEL;

guestbookcljs.core.t_guestbookcljs$core40076.prototype.om$core$IWillMount$will_mount$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return guestbookcljs.core.getMessages(self__.state);
});

guestbookcljs.core.t_guestbookcljs$core40076.prototype.om$core$IRender$ = cljs.core.PROTOCOL_SENTINEL;

guestbookcljs.core.t_guestbookcljs$core40076.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.core.build_all.cljs$core$IFn$_invoke$arity$2(guestbookcljs.core.name_comp,cljs.core.cst$kw$contacts.cljs$core$IFn$_invoke$arity$1(self__.state))], 0));
});

guestbookcljs.core.t_guestbookcljs$core40076.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$state,cljs.core.cst$sym$owner,cljs.core.cst$sym$meta40077], null);
});

guestbookcljs.core.t_guestbookcljs$core40076.cljs$lang$type = true;

guestbookcljs.core.t_guestbookcljs$core40076.cljs$lang$ctorStr = "guestbookcljs.core/t_guestbookcljs$core40076";

guestbookcljs.core.t_guestbookcljs$core40076.cljs$lang$ctorPrWriter = (function (this__28756__auto__,writer__28757__auto__,opt__28758__auto__){
return cljs.core._write(writer__28757__auto__,"guestbookcljs.core/t_guestbookcljs$core40076");
});

guestbookcljs.core.__GT_t_guestbookcljs$core40076 = (function guestbookcljs$core$root_comp_$___GT_t_guestbookcljs$core40076(state__$1,owner__$1,meta40077){
return (new guestbookcljs.core.t_guestbookcljs$core40076(state__$1,owner__$1,meta40077));
});

}

return (new guestbookcljs.core.t_guestbookcljs$core40076(state,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root(guestbookcljs.core.root_comp,guestbookcljs.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$target,document.getElementById("contacts")], null));
