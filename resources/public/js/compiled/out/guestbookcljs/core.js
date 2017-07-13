// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('guestbookcljs.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('om.core');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_();
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["This text is printed from src/clj/guestbook/routes/core.cljs. Go ahead and edit it and see reloading in action."], 0));
if(typeof guestbookcljs.core.app_state !== 'undefined'){
} else {
guestbookcljs.core.app_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$contacts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$first,"Gica",cljs.core.cst$kw$last,"Bitdiddle",cljs.core.cst$kw$email,"benb@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$first,"Lem",cljs.core.cst$kw$middle_DASH_initial,"E",cljs.core.cst$kw$last,"Tweakit",cljs.core.cst$kw$email,"morebugs@mit.edu"], null)], null)], null));
}
guestbookcljs.core.middle_name = (function guestbookcljs$core$middle_name(p__42761){
var map__42762 = p__42761;
var map__42762__$1 = ((((!((map__42762 == null)))?((((map__42762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42762.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42762):map__42762);
var middle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42762__$1,cljs.core.cst$kw$middle);
var middle_initial = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42762__$1,cljs.core.cst$kw$middle_DASH_initial);
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
guestbookcljs.core.display_name = (function guestbookcljs$core$display_name(p__42764){
var map__42765 = p__42764;
var map__42765__$1 = ((((!((map__42765 == null)))?((((map__42765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42765.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42765):map__42765);
var contact = map__42765__$1;
var first = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42765__$1,cljs.core.cst$kw$first);
var last = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42765__$1,cljs.core.cst$kw$last);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(last),cljs.core.str.cljs$core$IFn$_invoke$arity$1(","),cljs.core.str.cljs$core$IFn$_invoke$arity$1(first),cljs.core.str.cljs$core$IFn$_invoke$arity$1(guestbookcljs.core.middle_name(contact))].join('');
});
guestbookcljs.core.contact_view = (function guestbookcljs$core$contact_view(contact,owner){
if(typeof guestbookcljs.core.t_guestbookcljs$core42767 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
guestbookcljs.core.t_guestbookcljs$core42767 = (function (contact,owner,meta42768){
this.contact = contact;
this.owner = owner;
this.meta42768 = meta42768;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
guestbookcljs.core.t_guestbookcljs$core42767.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42769,meta42768__$1){
var self__ = this;
var _42769__$1 = this;
return (new guestbookcljs.core.t_guestbookcljs$core42767(self__.contact,self__.owner,meta42768__$1));
});

guestbookcljs.core.t_guestbookcljs$core42767.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42769){
var self__ = this;
var _42769__$1 = this;
return self__.meta42768;
});

guestbookcljs.core.t_guestbookcljs$core42767.prototype.om$core$IRenderState$ = cljs.core.PROTOCOL_SENTINEL;

guestbookcljs.core.t_guestbookcljs$core42767.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__42770){
var self__ = this;
var map__42771 = p__42770;
var map__42771__$1 = ((((!((map__42771 == null)))?((((map__42771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42771.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42771):map__42771);
var delete$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42771__$1,cljs.core.cst$kw$delete);
var this$__$1 = this;
return om.dom.li.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.span.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([guestbookcljs.core.display_name(self__.contact)], 0)),om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (this$__$1,map__42771,map__42771__$1,delete$){
return (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(delete$,cljs.core.deref(self__.contact));
});})(this$__$1,map__42771,map__42771__$1,delete$))
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Delete"], 0))], 0));
});

guestbookcljs.core.t_guestbookcljs$core42767.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$contact,cljs.core.cst$sym$owner,cljs.core.cst$sym$meta42768], null);
});

guestbookcljs.core.t_guestbookcljs$core42767.cljs$lang$type = true;

guestbookcljs.core.t_guestbookcljs$core42767.cljs$lang$ctorStr = "guestbookcljs.core/t_guestbookcljs$core42767";

guestbookcljs.core.t_guestbookcljs$core42767.cljs$lang$ctorPrWriter = (function (this__28038__auto__,writer__28039__auto__,opt__28040__auto__){
return cljs.core._write(writer__28039__auto__,"guestbookcljs.core/t_guestbookcljs$core42767");
});

guestbookcljs.core.__GT_t_guestbookcljs$core42767 = (function guestbookcljs$core$contact_view_$___GT_t_guestbookcljs$core42767(contact__$1,owner__$1,meta42768){
return (new guestbookcljs.core.t_guestbookcljs$core42767(contact__$1,owner__$1,meta42768));
});

}

return (new guestbookcljs.core.t_guestbookcljs$core42767(contact,owner,cljs.core.PersistentArrayMap.EMPTY));
});
guestbookcljs.core.handle_change = (function guestbookcljs$core$handle_change(e,owner,p__42773){
var map__42774 = p__42773;
var map__42774__$1 = ((((!((map__42774 == null)))?((((map__42774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42774.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42774):map__42774);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42774__$1,cljs.core.cst$kw$text);
var value = e.target.value;
if(cljs.core.not(cljs.core.re_find(/[0-9]/,value))){
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.cst$kw$text,value);
} else {
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.cst$kw$text,text);
}
});
guestbookcljs.core.parse_contact = (function guestbookcljs$core$parse_contact(contact_str){
var vec__42776 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(contact_str,/\s+/);
var first = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42776,(0),null);
var middle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42776,(1),null);
var last = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42776,(2),null);
var parts = vec__42776;
var vec__42779 = (((last == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [first,middle], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [first,last,middle], null));
var first__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42779,(0),null);
var last__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42779,(1),null);
var middle__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42779,(2),null);
var middle__$2 = (cljs.core.truth_(middle__$1)?clojure.string.replace(middle__$1,".",""):null);
var c = (cljs.core.truth_(middle__$2)?cljs.core.count(middle__$2):(0));
if((cljs.core.count(parts) >= (2))){
var G__42782 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$first,first__$1,cljs.core.cst$kw$last,last__$1], null);
var G__42782__$1 = (((c === (1)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42782,cljs.core.cst$kw$middle_DASH_initial,middle__$2):G__42782);
if((c >= (2))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42782__$1,cljs.core.cst$kw$middle,middle__$2);
} else {
return G__42782__$1;
}
} else {
return null;
}
});
guestbookcljs.core.add_contact = (function guestbookcljs$core$add_contact(data,owner){
var new_contact = guestbookcljs.core.parse_contact(om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"new-contact").value);
if(cljs.core.truth_(new_contact)){
om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(data,cljs.core.cst$kw$contacts,((function (new_contact){
return (function (p1__42783_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__42783_SHARP_,new_contact);
});})(new_contact))
);

return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.cst$kw$text,"");
} else {
return null;
}
});
guestbookcljs.core.contacts_view = (function guestbookcljs$core$contacts_view(data,owner){
if(typeof guestbookcljs.core.t_guestbookcljs$core42786 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
guestbookcljs.core.t_guestbookcljs$core42786 = (function (data,owner,meta42787){
this.data = data;
this.owner = owner;
this.meta42787 = meta42787;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
guestbookcljs.core.t_guestbookcljs$core42786.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42788,meta42787__$1){
var self__ = this;
var _42788__$1 = this;
return (new guestbookcljs.core.t_guestbookcljs$core42786(self__.data,self__.owner,meta42787__$1));
});

guestbookcljs.core.t_guestbookcljs$core42786.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42788){
var self__ = this;
var _42788__$1 = this;
return self__.meta42787;
});

guestbookcljs.core.t_guestbookcljs$core42786.prototype.om$core$IInitState$ = cljs.core.PROTOCOL_SENTINEL;

guestbookcljs.core.t_guestbookcljs$core42786.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$delete,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0(),cljs.core.cst$kw$text,""], null);
});

guestbookcljs.core.t_guestbookcljs$core42786.prototype.om$core$IWillMount$ = cljs.core.PROTOCOL_SENTINEL;

guestbookcljs.core.t_guestbookcljs$core42786.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var delete$ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.cst$kw$delete);
var c__33011__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33011__auto__,delete$,___$1){
return (function (){
var f__33012__auto__ = (function (){var switch__32911__auto__ = ((function (c__33011__auto__,delete$,___$1){
return (function (state_42798){
var state_val_42799 = (state_42798[(1)]);
if((state_val_42799 === (1))){
var state_42798__$1 = state_42798;
var statearr_42800_42808 = state_42798__$1;
(statearr_42800_42808[(2)] = null);

(statearr_42800_42808[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42799 === (2))){
var state_42798__$1 = state_42798;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42798__$1,(4),delete$);
} else {
if((state_val_42799 === (3))){
var inst_42796 = (state_42798[(2)]);
var state_42798__$1 = state_42798;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42798__$1,inst_42796);
} else {
if((state_val_42799 === (4))){
var inst_42791 = (state_42798[(2)]);
var inst_42792 = (function (){var contact = inst_42791;
return ((function (contact,inst_42791,state_val_42799,c__33011__auto__,delete$,___$1){
return (function (xs){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (contact,inst_42791,state_val_42799,c__33011__auto__,delete$,___$1){
return (function (p1__42784_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(contact,p1__42784_SHARP_);
});})(contact,inst_42791,state_val_42799,c__33011__auto__,delete$,___$1))
,xs));
});
;})(contact,inst_42791,state_val_42799,c__33011__auto__,delete$,___$1))
})();
var inst_42793 = om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.data,cljs.core.cst$kw$contacts,inst_42792);
var state_42798__$1 = (function (){var statearr_42801 = state_42798;
(statearr_42801[(7)] = inst_42793);

return statearr_42801;
})();
var statearr_42802_42809 = state_42798__$1;
(statearr_42802_42809[(2)] = null);

(statearr_42802_42809[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
});})(c__33011__auto__,delete$,___$1))
;
return ((function (switch__32911__auto__,c__33011__auto__,delete$,___$1){
return (function() {
var guestbookcljs$core$contacts_view_$_state_machine__32912__auto__ = null;
var guestbookcljs$core$contacts_view_$_state_machine__32912__auto____0 = (function (){
var statearr_42803 = [null,null,null,null,null,null,null,null];
(statearr_42803[(0)] = guestbookcljs$core$contacts_view_$_state_machine__32912__auto__);

(statearr_42803[(1)] = (1));

return statearr_42803;
});
var guestbookcljs$core$contacts_view_$_state_machine__32912__auto____1 = (function (state_42798){
while(true){
var ret_value__32913__auto__ = (function (){try{while(true){
var result__32914__auto__ = switch__32911__auto__(state_42798);
if(cljs.core.keyword_identical_QMARK_(result__32914__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__32914__auto__;
}
break;
}
}catch (e42804){if((e42804 instanceof Object)){
var ex__32915__auto__ = e42804;
var statearr_42805_42810 = state_42798;
(statearr_42805_42810[(5)] = ex__32915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42798);

return cljs.core.cst$kw$recur;
} else {
throw e42804;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32913__auto__,cljs.core.cst$kw$recur)){
var G__42811 = state_42798;
state_42798 = G__42811;
continue;
} else {
return ret_value__32913__auto__;
}
break;
}
});
guestbookcljs$core$contacts_view_$_state_machine__32912__auto__ = function(state_42798){
switch(arguments.length){
case 0:
return guestbookcljs$core$contacts_view_$_state_machine__32912__auto____0.call(this);
case 1:
return guestbookcljs$core$contacts_view_$_state_machine__32912__auto____1.call(this,state_42798);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
guestbookcljs$core$contacts_view_$_state_machine__32912__auto__.cljs$core$IFn$_invoke$arity$0 = guestbookcljs$core$contacts_view_$_state_machine__32912__auto____0;
guestbookcljs$core$contacts_view_$_state_machine__32912__auto__.cljs$core$IFn$_invoke$arity$1 = guestbookcljs$core$contacts_view_$_state_machine__32912__auto____1;
return guestbookcljs$core$contacts_view_$_state_machine__32912__auto__;
})()
;})(switch__32911__auto__,c__33011__auto__,delete$,___$1))
})();
var state__33013__auto__ = (function (){var statearr_42806 = (f__33012__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33012__auto__.cljs$core$IFn$_invoke$arity$0() : f__33012__auto__.call(null));
(statearr_42806[(6)] = c__33011__auto__);

return statearr_42806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33013__auto__);
});})(c__33011__auto__,delete$,___$1))
);

return c__33011__auto__;
});

guestbookcljs.core.t_guestbookcljs$core42786.prototype.om$core$IRenderState$ = cljs.core.PROTOCOL_SENTINEL;

guestbookcljs.core.t_guestbookcljs$core42786.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.h2.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Contact list"], 0)),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.ul,null,om.core.build_all.cljs$core$IFn$_invoke$arity$3(guestbookcljs.core.contact_view,cljs.core.cst$kw$contacts.cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$init_DASH_state,state], null))),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__42807 = ({"type": "text", "ref": "new-contact", "value": cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(state), "onChange": ((function (this$__$1){
return (function (p1__42785_SHARP_){
return guestbookcljs.core.handle_change(p1__42785_SHARP_,self__.owner,state);
});})(this$__$1))
});
return (om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1(G__42807) : om.dom.input.call(null,G__42807));
})(),om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (this$__$1){
return (function (){
return guestbookcljs.core.add_contact(self__.data,self__.owner);
});})(this$__$1))
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Add contact"], 0))], 0))], 0));
});

guestbookcljs.core.t_guestbookcljs$core42786.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$data,cljs.core.cst$sym$owner,cljs.core.cst$sym$meta42787], null);
});

guestbookcljs.core.t_guestbookcljs$core42786.cljs$lang$type = true;

guestbookcljs.core.t_guestbookcljs$core42786.cljs$lang$ctorStr = "guestbookcljs.core/t_guestbookcljs$core42786";

guestbookcljs.core.t_guestbookcljs$core42786.cljs$lang$ctorPrWriter = (function (this__28038__auto__,writer__28039__auto__,opt__28040__auto__){
return cljs.core._write(writer__28039__auto__,"guestbookcljs.core/t_guestbookcljs$core42786");
});

guestbookcljs.core.__GT_t_guestbookcljs$core42786 = (function guestbookcljs$core$contacts_view_$___GT_t_guestbookcljs$core42786(data__$1,owner__$1,meta42787){
return (new guestbookcljs.core.t_guestbookcljs$core42786(data__$1,owner__$1,meta42787));
});

}

return (new guestbookcljs.core.t_guestbookcljs$core42786(data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root(guestbookcljs.core.contacts_view,guestbookcljs.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$target,document.getElementById("contacts")], null));
guestbookcljs.core.on_js_reload = (function guestbookcljs$core$on_js_reload(){

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["resources/public/css"], null);
});
