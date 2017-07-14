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
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["This text is printed from src/clj/guestbook/routes/core.cljs. Go ahead and edit it and see reloading in action."], 0));
guestbookcljs.core.handler = (function guestbookcljs$core$handler(response){
return console.log([cljs.core.str.cljs$core$IFn$_invoke$arity$1(response)].join(''));
});
guestbookcljs.core.error_handler = (function guestbookcljs$core$error_handler(p__40791){
var map__40792 = p__40791;
var map__40792__$1 = ((((!((map__40792 == null)))?((((map__40792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40792.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40792):map__40792);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40792__$1,cljs.core.cst$kw$status);
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40792__$1,cljs.core.cst$kw$status_DASH_text);
return console.log([cljs.core.str.cljs$core$IFn$_invoke$arity$1("something bad happened: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic("/index",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$headers,new cljs.core.PersistentArrayMap(null, 1, ["Accept","application/transit+json"], null),cljs.core.cst$kw$params,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$message,"Hello World",cljs.core.cst$kw$user,"Bob"], null),cljs.core.cst$kw$handler,guestbookcljs.core.handler,cljs.core.cst$kw$error_DASH_handler,guestbookcljs.core.error_handler], null)], 0));
if(typeof guestbookcljs.core.app_state !== 'undefined'){
} else {
guestbookcljs.core.app_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$contacts,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$first,"Ghita",cljs.core.cst$kw$last,"Bitdiddle",cljs.core.cst$kw$email,"benb@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$first,"Alyssa",cljs.core.cst$kw$middle_DASH_initial,"P",cljs.core.cst$kw$last,"Hacker",cljs.core.cst$kw$email,"aphacker@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$first,"Eva",cljs.core.cst$kw$middle,"Lu",cljs.core.cst$kw$last,"Ator",cljs.core.cst$kw$email,"eval@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$first,"Louis",cljs.core.cst$kw$last,"Reasoner",cljs.core.cst$kw$email,"prolog@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$first,"Cy",cljs.core.cst$kw$middle_DASH_initial,"D",cljs.core.cst$kw$last,"Effect",cljs.core.cst$kw$email,"bugs@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$first,"Lem",cljs.core.cst$kw$middle_DASH_initial,"E",cljs.core.cst$kw$last,"Tweakit",cljs.core.cst$kw$email,"morebugs@mit.edu"], null)], null)], null));
}
guestbookcljs.core.middle_name = (function guestbookcljs$core$middle_name(p__40794){
var map__40795 = p__40794;
var map__40795__$1 = ((((!((map__40795 == null)))?((((map__40795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40795.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40795):map__40795);
var middle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40795__$1,cljs.core.cst$kw$middle);
var middle_initial = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40795__$1,cljs.core.cst$kw$middle_DASH_initial);
if(cljs.core.truth_(middle)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(middle)].join('');
} else {
if(cljs.core.truth_(middle_initial)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(middle_initial),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".")].join('');
} else {
return null;
}
}
});
guestbookcljs.core.display_name = (function guestbookcljs$core$display_name(p__40797){
var map__40798 = p__40797;
var map__40798__$1 = ((((!((map__40798 == null)))?((((map__40798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40798.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40798):map__40798);
var contact = map__40798__$1;
var first = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40798__$1,cljs.core.cst$kw$first);
var last = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40798__$1,cljs.core.cst$kw$last);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(last),cljs.core.str.cljs$core$IFn$_invoke$arity$1(","),cljs.core.str.cljs$core$IFn$_invoke$arity$1(first),cljs.core.str.cljs$core$IFn$_invoke$arity$1(guestbookcljs.core.middle_name(contact))].join('');
});
guestbookcljs.core.contact_view = (function guestbookcljs$core$contact_view(contact,owner){
if(typeof guestbookcljs.core.t_guestbookcljs$core40800 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
guestbookcljs.core.t_guestbookcljs$core40800 = (function (contact,owner,meta40801){
this.contact = contact;
this.owner = owner;
this.meta40801 = meta40801;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
guestbookcljs.core.t_guestbookcljs$core40800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40802,meta40801__$1){
var self__ = this;
var _40802__$1 = this;
return (new guestbookcljs.core.t_guestbookcljs$core40800(self__.contact,self__.owner,meta40801__$1));
});

guestbookcljs.core.t_guestbookcljs$core40800.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40802){
var self__ = this;
var _40802__$1 = this;
return self__.meta40801;
});

guestbookcljs.core.t_guestbookcljs$core40800.prototype.om$core$IRenderState$ = cljs.core.PROTOCOL_SENTINEL;

guestbookcljs.core.t_guestbookcljs$core40800.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__40803){
var self__ = this;
var map__40804 = p__40803;
var map__40804__$1 = ((((!((map__40804 == null)))?((((map__40804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40804.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40804):map__40804);
var delete$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40804__$1,cljs.core.cst$kw$delete);
var this$__$1 = this;
return om.dom.li.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.span.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([guestbookcljs.core.display_name(self__.contact)], 0)),om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (this$__$1,map__40804,map__40804__$1,delete$){
return (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(delete$,cljs.core.deref(self__.contact));
});})(this$__$1,map__40804,map__40804__$1,delete$))
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Delete"], 0))], 0));
});

guestbookcljs.core.t_guestbookcljs$core40800.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$contact,cljs.core.cst$sym$owner,cljs.core.cst$sym$meta40801], null);
});

guestbookcljs.core.t_guestbookcljs$core40800.cljs$lang$type = true;

guestbookcljs.core.t_guestbookcljs$core40800.cljs$lang$ctorStr = "guestbookcljs.core/t_guestbookcljs$core40800";

guestbookcljs.core.t_guestbookcljs$core40800.cljs$lang$ctorPrWriter = (function (this__28747__auto__,writer__28748__auto__,opt__28749__auto__){
return cljs.core._write(writer__28748__auto__,"guestbookcljs.core/t_guestbookcljs$core40800");
});

guestbookcljs.core.__GT_t_guestbookcljs$core40800 = (function guestbookcljs$core$contact_view_$___GT_t_guestbookcljs$core40800(contact__$1,owner__$1,meta40801){
return (new guestbookcljs.core.t_guestbookcljs$core40800(contact__$1,owner__$1,meta40801));
});

}

return (new guestbookcljs.core.t_guestbookcljs$core40800(contact,owner,cljs.core.PersistentArrayMap.EMPTY));
});
guestbookcljs.core.handle_change = (function guestbookcljs$core$handle_change(e,owner,p__40806){
var map__40807 = p__40806;
var map__40807__$1 = ((((!((map__40807 == null)))?((((map__40807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40807.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40807):map__40807);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40807__$1,cljs.core.cst$kw$text);
var value = e.target.value;
if(cljs.core.not(cljs.core.re_find(/[0-9]/,value))){
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.cst$kw$text,value);
} else {
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.cst$kw$text,text);
}
});
guestbookcljs.core.parse_contact = (function guestbookcljs$core$parse_contact(contact_str){
var vec__40809 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(contact_str,/\s+/);
var first = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40809,(0),null);
var middle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40809,(1),null);
var last = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40809,(2),null);
var parts = vec__40809;
var vec__40812 = (((last == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [first,middle], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [first,last,middle], null));
var first__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40812,(0),null);
var last__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40812,(1),null);
var middle__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40812,(2),null);
var middle__$2 = (cljs.core.truth_(middle__$1)?clojure.string.replace(middle__$1,".",""):null);
var c = (cljs.core.truth_(middle__$2)?cljs.core.count(middle__$2):(0));
if((cljs.core.count(parts) >= (2))){
var G__40815 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$first,first__$1,cljs.core.cst$kw$last,last__$1], null);
var G__40815__$1 = (((c === (1)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40815,cljs.core.cst$kw$middle_DASH_initial,middle__$2):G__40815);
if((c >= (2))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40815__$1,cljs.core.cst$kw$middle,middle__$2);
} else {
return G__40815__$1;
}
} else {
return null;
}
});
guestbookcljs.core.add_contact = (function guestbookcljs$core$add_contact(data,owner){
var new_contact = guestbookcljs.core.parse_contact(om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"new-contact").value);
if(cljs.core.truth_(new_contact)){
om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(data,cljs.core.cst$kw$contacts,((function (new_contact){
return (function (p1__40816_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__40816_SHARP_,new_contact);
});})(new_contact))
);

return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.cst$kw$text,"");
} else {
return null;
}
});
guestbookcljs.core.contacts_view = (function guestbookcljs$core$contacts_view(data,owner){
if(typeof guestbookcljs.core.t_guestbookcljs$core40819 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
guestbookcljs.core.t_guestbookcljs$core40819 = (function (data,owner,meta40820){
this.data = data;
this.owner = owner;
this.meta40820 = meta40820;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
guestbookcljs.core.t_guestbookcljs$core40819.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40821,meta40820__$1){
var self__ = this;
var _40821__$1 = this;
return (new guestbookcljs.core.t_guestbookcljs$core40819(self__.data,self__.owner,meta40820__$1));
});

guestbookcljs.core.t_guestbookcljs$core40819.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40821){
var self__ = this;
var _40821__$1 = this;
return self__.meta40820;
});

guestbookcljs.core.t_guestbookcljs$core40819.prototype.om$core$IInitState$ = cljs.core.PROTOCOL_SENTINEL;

guestbookcljs.core.t_guestbookcljs$core40819.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$delete,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0(),cljs.core.cst$kw$text,""], null);
});

guestbookcljs.core.t_guestbookcljs$core40819.prototype.om$core$IWillMount$ = cljs.core.PROTOCOL_SENTINEL;

guestbookcljs.core.t_guestbookcljs$core40819.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var delete$ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.cst$kw$delete);
var c__33599__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33599__auto__,delete$,___$1){
return (function (){
var f__33600__auto__ = (function (){var switch__33537__auto__ = ((function (c__33599__auto__,delete$,___$1){
return (function (state_40831){
var state_val_40832 = (state_40831[(1)]);
if((state_val_40832 === (1))){
var state_40831__$1 = state_40831;
var statearr_40833_40841 = state_40831__$1;
(statearr_40833_40841[(2)] = null);

(statearr_40833_40841[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_40832 === (2))){
var state_40831__$1 = state_40831;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40831__$1,(4),delete$);
} else {
if((state_val_40832 === (3))){
var inst_40829 = (state_40831[(2)]);
var state_40831__$1 = state_40831;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40831__$1,inst_40829);
} else {
if((state_val_40832 === (4))){
var inst_40824 = (state_40831[(2)]);
var inst_40825 = (function (){var contact = inst_40824;
return ((function (contact,inst_40824,state_val_40832,c__33599__auto__,delete$,___$1){
return (function (xs){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (contact,inst_40824,state_val_40832,c__33599__auto__,delete$,___$1){
return (function (p1__40817_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(contact,p1__40817_SHARP_);
});})(contact,inst_40824,state_val_40832,c__33599__auto__,delete$,___$1))
,xs));
});
;})(contact,inst_40824,state_val_40832,c__33599__auto__,delete$,___$1))
})();
var inst_40826 = om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.cst$kw$contacts,inst_40825);
var state_40831__$1 = (function (){var statearr_40834 = state_40831;
(statearr_40834[(7)] = inst_40826);

return statearr_40834;
})();
var statearr_40835_40842 = state_40831__$1;
(statearr_40835_40842[(2)] = null);

(statearr_40835_40842[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
});})(c__33599__auto__,delete$,___$1))
;
return ((function (switch__33537__auto__,c__33599__auto__,delete$,___$1){
return (function() {
var guestbookcljs$core$contacts_view_$_state_machine__33538__auto__ = null;
var guestbookcljs$core$contacts_view_$_state_machine__33538__auto____0 = (function (){
var statearr_40836 = [null,null,null,null,null,null,null,null];
(statearr_40836[(0)] = guestbookcljs$core$contacts_view_$_state_machine__33538__auto__);

(statearr_40836[(1)] = (1));

return statearr_40836;
});
var guestbookcljs$core$contacts_view_$_state_machine__33538__auto____1 = (function (state_40831){
while(true){
var ret_value__33539__auto__ = (function (){try{while(true){
var result__33540__auto__ = switch__33537__auto__(state_40831);
if(cljs.core.keyword_identical_QMARK_(result__33540__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__33540__auto__;
}
break;
}
}catch (e40837){if((e40837 instanceof Object)){
var ex__33541__auto__ = e40837;
var statearr_40838_40843 = state_40831;
(statearr_40838_40843[(5)] = ex__33541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40831);

return cljs.core.cst$kw$recur;
} else {
throw e40837;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33539__auto__,cljs.core.cst$kw$recur)){
var G__40844 = state_40831;
state_40831 = G__40844;
continue;
} else {
return ret_value__33539__auto__;
}
break;
}
});
guestbookcljs$core$contacts_view_$_state_machine__33538__auto__ = function(state_40831){
switch(arguments.length){
case 0:
return guestbookcljs$core$contacts_view_$_state_machine__33538__auto____0.call(this);
case 1:
return guestbookcljs$core$contacts_view_$_state_machine__33538__auto____1.call(this,state_40831);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
guestbookcljs$core$contacts_view_$_state_machine__33538__auto__.cljs$core$IFn$_invoke$arity$0 = guestbookcljs$core$contacts_view_$_state_machine__33538__auto____0;
guestbookcljs$core$contacts_view_$_state_machine__33538__auto__.cljs$core$IFn$_invoke$arity$1 = guestbookcljs$core$contacts_view_$_state_machine__33538__auto____1;
return guestbookcljs$core$contacts_view_$_state_machine__33538__auto__;
})()
;})(switch__33537__auto__,c__33599__auto__,delete$,___$1))
})();
var state__33601__auto__ = (function (){var statearr_40839 = (f__33600__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33600__auto__.cljs$core$IFn$_invoke$arity$0() : f__33600__auto__.call(null));
(statearr_40839[(6)] = c__33599__auto__);

return statearr_40839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33601__auto__);
});})(c__33599__auto__,delete$,___$1))
);

return c__33599__auto__;
});

guestbookcljs.core.t_guestbookcljs$core40819.prototype.om$core$IRenderState$ = cljs.core.PROTOCOL_SENTINEL;

guestbookcljs.core.t_guestbookcljs$core40819.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.h2.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Contact list"], 0)),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.ul,null,om.core.build_all.cljs$core$IFn$_invoke$arity$3(guestbookcljs.core.contact_view,cljs.core.cst$kw$contacts.cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$init_DASH_state,state], null))),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__40840 = ({"type": "text", "ref": "new-contact", "value": cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(state), "onChange": ((function (this$__$1){
return (function (p1__40818_SHARP_){
return guestbookcljs.core.handle_change(p1__40818_SHARP_,self__.owner,state);
});})(this$__$1))
});
return (om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1(G__40840) : om.dom.input.call(null,G__40840));
})(),om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (this$__$1){
return (function (){
return guestbookcljs.core.add_contact(self__.data,self__.owner);
});})(this$__$1))
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Add contact"], 0))], 0))], 0));
});

guestbookcljs.core.t_guestbookcljs$core40819.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$data,cljs.core.cst$sym$owner,cljs.core.cst$sym$meta40820], null);
});

guestbookcljs.core.t_guestbookcljs$core40819.cljs$lang$type = true;

guestbookcljs.core.t_guestbookcljs$core40819.cljs$lang$ctorStr = "guestbookcljs.core/t_guestbookcljs$core40819";

guestbookcljs.core.t_guestbookcljs$core40819.cljs$lang$ctorPrWriter = (function (this__28747__auto__,writer__28748__auto__,opt__28749__auto__){
return cljs.core._write(writer__28748__auto__,"guestbookcljs.core/t_guestbookcljs$core40819");
});

guestbookcljs.core.__GT_t_guestbookcljs$core40819 = (function guestbookcljs$core$contacts_view_$___GT_t_guestbookcljs$core40819(data__$1,owner__$1,meta40820){
return (new guestbookcljs.core.t_guestbookcljs$core40819(data__$1,owner__$1,meta40820));
});

}

return (new guestbookcljs.core.t_guestbookcljs$core40819(data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root(guestbookcljs.core.contacts_view,guestbookcljs.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$target,document.getElementById("contacts")], null));
guestbookcljs.core.on_js_reload = (function guestbookcljs$core$on_js_reload(){

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["resources/public/css"], null);
});
