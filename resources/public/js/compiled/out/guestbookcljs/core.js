// Compiled by ClojureScript 1.9.671 {}
goog.provide('guestbookcljs.core');
goog.require('cljs.core');
goog.require('om.core');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"This text is printed from src/clj/guestbook/routes/core.cljs. Go ahead and edit it and see reloading in action.");
if(typeof guestbookcljs.core.app_state !== 'undefined'){
} else {
guestbookcljs.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contacts","contacts",333503174),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"first","first",-644103046),"Ben",new cljs.core.Keyword(null,"last","last",1105735132),"Bitdiddle",new cljs.core.Keyword(null,"email","email",1415816706),"benb@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"first","first",-644103046),"Alyssa",new cljs.core.Keyword(null,"middle-initial","middle-initial",854677765),"P",new cljs.core.Keyword(null,"last","last",1105735132),"Hacker",new cljs.core.Keyword(null,"email","email",1415816706),"aphacker@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"first","first",-644103046),"Eva",new cljs.core.Keyword(null,"middle","middle",-701029031),"Lu",new cljs.core.Keyword(null,"last","last",1105735132),"Ator",new cljs.core.Keyword(null,"email","email",1415816706),"eval@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"first","first",-644103046),"Louis",new cljs.core.Keyword(null,"last","last",1105735132),"Reasoner",new cljs.core.Keyword(null,"email","email",1415816706),"prolog@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"first","first",-644103046),"Cy",new cljs.core.Keyword(null,"middle-initial","middle-initial",854677765),"D",new cljs.core.Keyword(null,"last","last",1105735132),"Effect",new cljs.core.Keyword(null,"email","email",1415816706),"bugs@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"first","first",-644103046),"Lem",new cljs.core.Keyword(null,"middle-initial","middle-initial",854677765),"E",new cljs.core.Keyword(null,"last","last",1105735132),"Tweakit",new cljs.core.Keyword(null,"email","email",1415816706),"morebugs@mit.edu"], null)], null)], null));
}
guestbookcljs.core.middle_name = (function guestbookcljs$core$middle_name(p__49376){
var map__49377 = p__49376;
var map__49377__$1 = ((((!((map__49377 == null)))?((((map__49377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49377.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49377):map__49377);
var middle = cljs.core.get.call(null,map__49377__$1,new cljs.core.Keyword(null,"middle","middle",-701029031));
var middle_initial = cljs.core.get.call(null,map__49377__$1,new cljs.core.Keyword(null,"middle-initial","middle-initial",854677765));
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
guestbookcljs.core.display_name = (function guestbookcljs$core$display_name(p__49379){
var map__49380 = p__49379;
var map__49380__$1 = ((((!((map__49380 == null)))?((((map__49380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49380.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49380):map__49380);
var contact = map__49380__$1;
var first = cljs.core.get.call(null,map__49380__$1,new cljs.core.Keyword(null,"first","first",-644103046));
var last = cljs.core.get.call(null,map__49380__$1,new cljs.core.Keyword(null,"last","last",1105735132));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(last),cljs.core.str.cljs$core$IFn$_invoke$arity$1(","),cljs.core.str.cljs$core$IFn$_invoke$arity$1(first),cljs.core.str.cljs$core$IFn$_invoke$arity$1(guestbookcljs.core.middle_name.call(null,contact))].join('');
});
guestbookcljs.core.contact_view = (function guestbookcljs$core$contact_view(contact,owner){
if(typeof guestbookcljs.core.t_guestbookcljs$core49382 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
guestbookcljs.core.t_guestbookcljs$core49382 = (function (contact,owner,meta49383){
this.contact = contact;
this.owner = owner;
this.meta49383 = meta49383;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
guestbookcljs.core.t_guestbookcljs$core49382.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49384,meta49383__$1){
var self__ = this;
var _49384__$1 = this;
return (new guestbookcljs.core.t_guestbookcljs$core49382(self__.contact,self__.owner,meta49383__$1));
});

guestbookcljs.core.t_guestbookcljs$core49382.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49384){
var self__ = this;
var _49384__$1 = this;
return self__.meta49383;
});

guestbookcljs.core.t_guestbookcljs$core49382.prototype.om$core$IRenderState$ = cljs.core.PROTOCOL_SENTINEL;

guestbookcljs.core.t_guestbookcljs$core49382.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__49385){
var self__ = this;
var map__49386 = p__49385;
var map__49386__$1 = ((((!((map__49386 == null)))?((((map__49386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49386.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49386):map__49386);
var delete$ = cljs.core.get.call(null,map__49386__$1,new cljs.core.Keyword(null,"delete","delete",-1768633620));
var this$__$1 = this;
return om.dom.li.call(null,null,om.dom.span.call(null,null,guestbookcljs.core.display_name.call(null,self__.contact)),om.dom.button.call(null,({"onClick": ((function (this$__$1,map__49386,map__49386__$1,delete$){
return (function (e){
return cljs.core.async.put_BANG_.call(null,delete$,cljs.core.deref.call(null,self__.contact));
});})(this$__$1,map__49386,map__49386__$1,delete$))
}),"Delete"));
});

guestbookcljs.core.t_guestbookcljs$core49382.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"contact","contact",-2045342397,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta49383","meta49383",1384184995,null)], null);
});

guestbookcljs.core.t_guestbookcljs$core49382.cljs$lang$type = true;

guestbookcljs.core.t_guestbookcljs$core49382.cljs$lang$ctorStr = "guestbookcljs.core/t_guestbookcljs$core49382";

guestbookcljs.core.t_guestbookcljs$core49382.cljs$lang$ctorPrWriter = (function (this__46525__auto__,writer__46526__auto__,opt__46527__auto__){
return cljs.core._write.call(null,writer__46526__auto__,"guestbookcljs.core/t_guestbookcljs$core49382");
});

guestbookcljs.core.__GT_t_guestbookcljs$core49382 = (function guestbookcljs$core$contact_view_$___GT_t_guestbookcljs$core49382(contact__$1,owner__$1,meta49383){
return (new guestbookcljs.core.t_guestbookcljs$core49382(contact__$1,owner__$1,meta49383));
});

}

return (new guestbookcljs.core.t_guestbookcljs$core49382(contact,owner,cljs.core.PersistentArrayMap.EMPTY));
});
guestbookcljs.core.handle_change = (function guestbookcljs$core$handle_change(e,owner,p__49388){
var map__49389 = p__49388;
var map__49389__$1 = ((((!((map__49389 == null)))?((((map__49389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49389.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49389):map__49389);
var text = cljs.core.get.call(null,map__49389__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var value = e.target.value;
if(cljs.core.not.call(null,cljs.core.re_find.call(null,/[0-9]/,value))){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"text","text",-1790561697),value);
} else {
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"text","text",-1790561697),text);
}
});
guestbookcljs.core.contacts_view = (function guestbookcljs$core$contacts_view(data,owner){
if(typeof guestbookcljs.core.t_guestbookcljs$core49393 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
guestbookcljs.core.t_guestbookcljs$core49393 = (function (data,owner,meta49394){
this.data = data;
this.owner = owner;
this.meta49394 = meta49394;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
guestbookcljs.core.t_guestbookcljs$core49393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49395,meta49394__$1){
var self__ = this;
var _49395__$1 = this;
return (new guestbookcljs.core.t_guestbookcljs$core49393(self__.data,self__.owner,meta49394__$1));
});

guestbookcljs.core.t_guestbookcljs$core49393.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49395){
var self__ = this;
var _49395__$1 = this;
return self__.meta49394;
});

guestbookcljs.core.t_guestbookcljs$core49393.prototype.om$core$IInitState$ = cljs.core.PROTOCOL_SENTINEL;

guestbookcljs.core.t_guestbookcljs$core49393.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"delete","delete",-1768633620),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"text","text",-1790561697),""], null);
});

guestbookcljs.core.t_guestbookcljs$core49393.prototype.om$core$IWillMount$ = cljs.core.PROTOCOL_SENTINEL;

guestbookcljs.core.t_guestbookcljs$core49393.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var delete$ = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"delete","delete",-1768633620));
var c__49331__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49331__auto__,delete$,___$1){
return (function (){
var f__49332__auto__ = (function (){var switch__49310__auto__ = ((function (c__49331__auto__,delete$,___$1){
return (function (state_49405){
var state_val_49406 = (state_49405[(1)]);
if((state_val_49406 === (1))){
var state_49405__$1 = state_49405;
var statearr_49407_49414 = state_49405__$1;
(statearr_49407_49414[(2)] = null);

(statearr_49407_49414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49406 === (2))){
var state_49405__$1 = state_49405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49405__$1,(4),delete$);
} else {
if((state_val_49406 === (3))){
var inst_49403 = (state_49405[(2)]);
var state_49405__$1 = state_49405;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49405__$1,inst_49403);
} else {
if((state_val_49406 === (4))){
var inst_49398 = (state_49405[(2)]);
var inst_49399 = (function (){var contact = inst_49398;
return ((function (contact,inst_49398,state_val_49406,c__49331__auto__,delete$,___$1){
return (function (xs){
return cljs.core.vec.call(null,cljs.core.remove.call(null,((function (contact,inst_49398,state_val_49406,c__49331__auto__,delete$,___$1){
return (function (p1__49391_SHARP_){
return cljs.core._EQ_.call(null,contact,p1__49391_SHARP_);
});})(contact,inst_49398,state_val_49406,c__49331__auto__,delete$,___$1))
,xs));
});
;})(contact,inst_49398,state_val_49406,c__49331__auto__,delete$,___$1))
})();
var inst_49400 = om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"contacts","contacts",333503174),inst_49399);
var state_49405__$1 = (function (){var statearr_49408 = state_49405;
(statearr_49408[(7)] = inst_49400);

return statearr_49408;
})();
var statearr_49409_49415 = state_49405__$1;
(statearr_49409_49415[(2)] = null);

(statearr_49409_49415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__49331__auto__,delete$,___$1))
;
return ((function (switch__49310__auto__,c__49331__auto__,delete$,___$1){
return (function() {
var guestbookcljs$core$contacts_view_$_state_machine__49311__auto__ = null;
var guestbookcljs$core$contacts_view_$_state_machine__49311__auto____0 = (function (){
var statearr_49410 = [null,null,null,null,null,null,null,null];
(statearr_49410[(0)] = guestbookcljs$core$contacts_view_$_state_machine__49311__auto__);

(statearr_49410[(1)] = (1));

return statearr_49410;
});
var guestbookcljs$core$contacts_view_$_state_machine__49311__auto____1 = (function (state_49405){
while(true){
var ret_value__49312__auto__ = (function (){try{while(true){
var result__49313__auto__ = switch__49310__auto__.call(null,state_49405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49313__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49313__auto__;
}
break;
}
}catch (e49411){if((e49411 instanceof Object)){
var ex__49314__auto__ = e49411;
var statearr_49412_49416 = state_49405;
(statearr_49412_49416[(5)] = ex__49314__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49411;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49417 = state_49405;
state_49405 = G__49417;
continue;
} else {
return ret_value__49312__auto__;
}
break;
}
});
guestbookcljs$core$contacts_view_$_state_machine__49311__auto__ = function(state_49405){
switch(arguments.length){
case 0:
return guestbookcljs$core$contacts_view_$_state_machine__49311__auto____0.call(this);
case 1:
return guestbookcljs$core$contacts_view_$_state_machine__49311__auto____1.call(this,state_49405);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
guestbookcljs$core$contacts_view_$_state_machine__49311__auto__.cljs$core$IFn$_invoke$arity$0 = guestbookcljs$core$contacts_view_$_state_machine__49311__auto____0;
guestbookcljs$core$contacts_view_$_state_machine__49311__auto__.cljs$core$IFn$_invoke$arity$1 = guestbookcljs$core$contacts_view_$_state_machine__49311__auto____1;
return guestbookcljs$core$contacts_view_$_state_machine__49311__auto__;
})()
;})(switch__49310__auto__,c__49331__auto__,delete$,___$1))
})();
var state__49333__auto__ = (function (){var statearr_49413 = f__49332__auto__.call(null);
(statearr_49413[(6)] = c__49331__auto__);

return statearr_49413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49333__auto__);
});})(c__49331__auto__,delete$,___$1))
);

return c__49331__auto__;
});

guestbookcljs.core.t_guestbookcljs$core49393.prototype.om$core$IRenderState$ = cljs.core.PROTOCOL_SENTINEL;

guestbookcljs.core.t_guestbookcljs$core49393.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
return om.dom.div.call(null,null,om.dom.h2.call(null,null,"Contact list"),cljs.core.apply.call(null,om.dom.ul,null,om.core.build_all.call(null,guestbookcljs.core.contact_view,new cljs.core.Keyword(null,"contacts","contacts",333503174).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),state], null))),om.dom.div.call(null,null,om.dom.input.call(null,({"type": "text", "ref": "new-contact", "value": new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(state), "onChange": ((function (this$__$1){
return (function (p1__49392_SHARP_){
return guestbookcljs.core.handle_change.call(null,p1__49392_SHARP_,self__.owner,state);
});})(this$__$1))
})),om.dom.button.call(null,({"onClick": ((function (this$__$1){
return (function (){
return guestbookcljs.core.add_contact.call(null,self__.data,self__.owner);
});})(this$__$1))
}),"Add contact")));
});

guestbookcljs.core.t_guestbookcljs$core49393.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta49394","meta49394",-57387433,null)], null);
});

guestbookcljs.core.t_guestbookcljs$core49393.cljs$lang$type = true;

guestbookcljs.core.t_guestbookcljs$core49393.cljs$lang$ctorStr = "guestbookcljs.core/t_guestbookcljs$core49393";

guestbookcljs.core.t_guestbookcljs$core49393.cljs$lang$ctorPrWriter = (function (this__46525__auto__,writer__46526__auto__,opt__46527__auto__){
return cljs.core._write.call(null,writer__46526__auto__,"guestbookcljs.core/t_guestbookcljs$core49393");
});

guestbookcljs.core.__GT_t_guestbookcljs$core49393 = (function guestbookcljs$core$contacts_view_$___GT_t_guestbookcljs$core49393(data__$1,owner__$1,meta49394){
return (new guestbookcljs.core.t_guestbookcljs$core49393(data__$1,owner__$1,meta49394));
});

}

return (new guestbookcljs.core.t_guestbookcljs$core49393(data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,guestbookcljs.core.contacts_view,guestbookcljs.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("contacts")], null));
guestbookcljs.core.parse_contact = (function guestbookcljs$core$parse_contact(contact_str){
var vec__49418 = clojure.string.split.call(null,contact_str,/\s+/);
var first = cljs.core.nth.call(null,vec__49418,(0),null);
var middle = cljs.core.nth.call(null,vec__49418,(1),null);
var last = cljs.core.nth.call(null,vec__49418,(2),null);
var parts = vec__49418;
var vec__49421 = (((last == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [first,middle], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [first,last,middle], null));
var first__$1 = cljs.core.nth.call(null,vec__49421,(0),null);
var last__$1 = cljs.core.nth.call(null,vec__49421,(1),null);
var middle__$1 = cljs.core.nth.call(null,vec__49421,(2),null);
var middle__$2 = (cljs.core.truth_(middle__$1)?clojure.string.replace.call(null,middle__$1,".",""):null);
var c = (cljs.core.truth_(middle__$2)?cljs.core.count.call(null,middle__$2):(0));
if((cljs.core.count.call(null,parts) >= (2))){
var G__49424 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first","first",-644103046),first__$1,new cljs.core.Keyword(null,"last","last",1105735132),last__$1], null);
var G__49424__$1 = (((c === (1)))?cljs.core.assoc.call(null,G__49424,new cljs.core.Keyword(null,"middle-initial","middle-initial",854677765),middle__$2):G__49424);
if((c >= (2))){
return cljs.core.assoc.call(null,G__49424__$1,new cljs.core.Keyword(null,"middle","middle",-701029031),middle__$2);
} else {
return G__49424__$1;
}
} else {
return null;
}
});
guestbookcljs.core.add_contact = (function guestbookcljs$core$add_contact(data,owner){
var new_contact = guestbookcljs.core.parse_contact.call(null,om.core.get_node.call(null,owner,"new-contact").value);
if(cljs.core.truth_(new_contact)){
om.core.transact_BANG_.call(null,data,new cljs.core.Keyword(null,"contacts","contacts",333503174),((function (new_contact){
return (function (p1__49425_SHARP_){
return cljs.core.conj.call(null,p1__49425_SHARP_,new_contact);
});})(new_contact))
);

return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"text","text",-1790561697),"");
} else {
return null;
}
});
guestbookcljs.core.on_js_reload = (function guestbookcljs$core$on_js_reload(){

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["resources/public/css"], null);
});

//# sourceMappingURL=core.js.map?rel=1499853893808