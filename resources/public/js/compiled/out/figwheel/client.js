// Compiled by ClojureScript 1.9.671 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.10";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__54299 = arguments.length;
switch (G__54299) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__47041__auto__ = [];
var len__47034__auto___54302 = arguments.length;
var i__47035__auto___54303 = (0);
while(true){
if((i__47035__auto___54303 < len__47034__auto___54302)){
args__47041__auto__.push((arguments[i__47035__auto___54303]));

var G__54304 = (i__47035__auto___54303 + (1));
i__47035__auto___54303 = G__54304;
continue;
} else {
}
break;
}

var argseq__47042__auto__ = ((((0) < args__47041__auto__.length))?(new cljs.core.IndexedSeq(args__47041__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__47042__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq54301){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54301));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__47041__auto__ = [];
var len__47034__auto___54306 = arguments.length;
var i__47035__auto___54307 = (0);
while(true){
if((i__47035__auto___54307 < len__47034__auto___54306)){
args__47041__auto__.push((arguments[i__47035__auto___54307]));

var G__54308 = (i__47035__auto___54307 + (1));
i__47035__auto___54307 = G__54308;
continue;
} else {
}
break;
}

var argseq__47042__auto__ = ((((0) < args__47041__auto__.length))?(new cljs.core.IndexedSeq(args__47041__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__47042__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq54305){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54305));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel autoloading "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__54309){
var map__54310 = p__54309;
var map__54310__$1 = ((((!((map__54310 == null)))?((((map__54310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54310.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54310):map__54310);
var message = cljs.core.get.call(null,map__54310__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__54310__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__45909__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__45909__auto__)){
return or__45909__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__45897__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__45897__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__45897__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__48989__auto___54389 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48989__auto___54389,ch){
return (function (){
var f__48990__auto__ = (function (){var switch__48901__auto__ = ((function (c__48989__auto___54389,ch){
return (function (state_54361){
var state_val_54362 = (state_54361[(1)]);
if((state_val_54362 === (7))){
var inst_54357 = (state_54361[(2)]);
var state_54361__$1 = state_54361;
var statearr_54363_54390 = state_54361__$1;
(statearr_54363_54390[(2)] = inst_54357);

(statearr_54363_54390[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54362 === (1))){
var state_54361__$1 = state_54361;
var statearr_54364_54391 = state_54361__$1;
(statearr_54364_54391[(2)] = null);

(statearr_54364_54391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54362 === (4))){
var inst_54314 = (state_54361[(7)]);
var inst_54314__$1 = (state_54361[(2)]);
var state_54361__$1 = (function (){var statearr_54365 = state_54361;
(statearr_54365[(7)] = inst_54314__$1);

return statearr_54365;
})();
if(cljs.core.truth_(inst_54314__$1)){
var statearr_54366_54392 = state_54361__$1;
(statearr_54366_54392[(1)] = (5));

} else {
var statearr_54367_54393 = state_54361__$1;
(statearr_54367_54393[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54362 === (15))){
var inst_54321 = (state_54361[(8)]);
var inst_54336 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_54321);
var inst_54337 = cljs.core.first.call(null,inst_54336);
var inst_54338 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_54337);
var inst_54339 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_54338)].join('');
var inst_54340 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_54339);
var state_54361__$1 = state_54361;
var statearr_54368_54394 = state_54361__$1;
(statearr_54368_54394[(2)] = inst_54340);

(statearr_54368_54394[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54362 === (13))){
var inst_54345 = (state_54361[(2)]);
var state_54361__$1 = state_54361;
var statearr_54369_54395 = state_54361__$1;
(statearr_54369_54395[(2)] = inst_54345);

(statearr_54369_54395[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54362 === (6))){
var state_54361__$1 = state_54361;
var statearr_54370_54396 = state_54361__$1;
(statearr_54370_54396[(2)] = null);

(statearr_54370_54396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54362 === (17))){
var inst_54343 = (state_54361[(2)]);
var state_54361__$1 = state_54361;
var statearr_54371_54397 = state_54361__$1;
(statearr_54371_54397[(2)] = inst_54343);

(statearr_54371_54397[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54362 === (3))){
var inst_54359 = (state_54361[(2)]);
var state_54361__$1 = state_54361;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54361__$1,inst_54359);
} else {
if((state_val_54362 === (12))){
var inst_54320 = (state_54361[(9)]);
var inst_54334 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_54320,opts);
var state_54361__$1 = state_54361;
if(cljs.core.truth_(inst_54334)){
var statearr_54372_54398 = state_54361__$1;
(statearr_54372_54398[(1)] = (15));

} else {
var statearr_54373_54399 = state_54361__$1;
(statearr_54373_54399[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54362 === (2))){
var state_54361__$1 = state_54361;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54361__$1,(4),ch);
} else {
if((state_val_54362 === (11))){
var inst_54321 = (state_54361[(8)]);
var inst_54326 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54327 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_54321);
var inst_54328 = cljs.core.async.timeout.call(null,(1000));
var inst_54329 = [inst_54327,inst_54328];
var inst_54330 = (new cljs.core.PersistentVector(null,2,(5),inst_54326,inst_54329,null));
var state_54361__$1 = state_54361;
return cljs.core.async.ioc_alts_BANG_.call(null,state_54361__$1,(14),inst_54330);
} else {
if((state_val_54362 === (9))){
var inst_54321 = (state_54361[(8)]);
var inst_54347 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_54348 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_54321);
var inst_54349 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_54348);
var inst_54350 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_54349)].join('');
var inst_54351 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_54350);
var state_54361__$1 = (function (){var statearr_54374 = state_54361;
(statearr_54374[(10)] = inst_54347);

return statearr_54374;
})();
var statearr_54375_54400 = state_54361__$1;
(statearr_54375_54400[(2)] = inst_54351);

(statearr_54375_54400[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54362 === (5))){
var inst_54314 = (state_54361[(7)]);
var inst_54316 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_54317 = (new cljs.core.PersistentArrayMap(null,2,inst_54316,null));
var inst_54318 = (new cljs.core.PersistentHashSet(null,inst_54317,null));
var inst_54319 = figwheel.client.focus_msgs.call(null,inst_54318,inst_54314);
var inst_54320 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_54319);
var inst_54321 = cljs.core.first.call(null,inst_54319);
var inst_54322 = figwheel.client.autoload_QMARK_.call(null);
var state_54361__$1 = (function (){var statearr_54376 = state_54361;
(statearr_54376[(9)] = inst_54320);

(statearr_54376[(8)] = inst_54321);

return statearr_54376;
})();
if(cljs.core.truth_(inst_54322)){
var statearr_54377_54401 = state_54361__$1;
(statearr_54377_54401[(1)] = (8));

} else {
var statearr_54378_54402 = state_54361__$1;
(statearr_54378_54402[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54362 === (14))){
var inst_54332 = (state_54361[(2)]);
var state_54361__$1 = state_54361;
var statearr_54379_54403 = state_54361__$1;
(statearr_54379_54403[(2)] = inst_54332);

(statearr_54379_54403[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54362 === (16))){
var state_54361__$1 = state_54361;
var statearr_54380_54404 = state_54361__$1;
(statearr_54380_54404[(2)] = null);

(statearr_54380_54404[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54362 === (10))){
var inst_54353 = (state_54361[(2)]);
var state_54361__$1 = (function (){var statearr_54381 = state_54361;
(statearr_54381[(11)] = inst_54353);

return statearr_54381;
})();
var statearr_54382_54405 = state_54361__$1;
(statearr_54382_54405[(2)] = null);

(statearr_54382_54405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54362 === (8))){
var inst_54320 = (state_54361[(9)]);
var inst_54324 = figwheel.client.reload_file_state_QMARK_.call(null,inst_54320,opts);
var state_54361__$1 = state_54361;
if(cljs.core.truth_(inst_54324)){
var statearr_54383_54406 = state_54361__$1;
(statearr_54383_54406[(1)] = (11));

} else {
var statearr_54384_54407 = state_54361__$1;
(statearr_54384_54407[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__48989__auto___54389,ch))
;
return ((function (switch__48901__auto__,c__48989__auto___54389,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__48902__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__48902__auto____0 = (function (){
var statearr_54385 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54385[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__48902__auto__);

(statearr_54385[(1)] = (1));

return statearr_54385;
});
var figwheel$client$file_reloader_plugin_$_state_machine__48902__auto____1 = (function (state_54361){
while(true){
var ret_value__48903__auto__ = (function (){try{while(true){
var result__48904__auto__ = switch__48901__auto__.call(null,state_54361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48904__auto__;
}
break;
}
}catch (e54386){if((e54386 instanceof Object)){
var ex__48905__auto__ = e54386;
var statearr_54387_54408 = state_54361;
(statearr_54387_54408[(5)] = ex__48905__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54386;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54409 = state_54361;
state_54361 = G__54409;
continue;
} else {
return ret_value__48903__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__48902__auto__ = function(state_54361){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__48902__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__48902__auto____1.call(this,state_54361);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__48902__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__48902__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__48902__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__48902__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__48902__auto__;
})()
;})(switch__48901__auto__,c__48989__auto___54389,ch))
})();
var state__48991__auto__ = (function (){var statearr_54388 = f__48990__auto__.call(null);
(statearr_54388[(6)] = c__48989__auto___54389);

return statearr_54388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48991__auto__);
});})(c__48989__auto___54389,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__54410_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__54410_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_54412 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_54412){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e54411){if((e54411 instanceof Error)){
var e = e54411;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_54412], null));
} else {
var e = e54411;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_54412))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__54413){
var map__54414 = p__54413;
var map__54414__$1 = ((((!((map__54414 == null)))?((((map__54414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54414.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54414):map__54414);
var opts = map__54414__$1;
var build_id = cljs.core.get.call(null,map__54414__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__54414,map__54414__$1,opts,build_id){
return (function (p__54416){
var vec__54417 = p__54416;
var seq__54418 = cljs.core.seq.call(null,vec__54417);
var first__54419 = cljs.core.first.call(null,seq__54418);
var seq__54418__$1 = cljs.core.next.call(null,seq__54418);
var map__54420 = first__54419;
var map__54420__$1 = ((((!((map__54420 == null)))?((((map__54420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54420.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54420):map__54420);
var msg = map__54420__$1;
var msg_name = cljs.core.get.call(null,map__54420__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__54418__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__54417,seq__54418,first__54419,seq__54418__$1,map__54420,map__54420__$1,msg,msg_name,_,map__54414,map__54414__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__54417,seq__54418,first__54419,seq__54418__$1,map__54420,map__54420__$1,msg,msg_name,_,map__54414,map__54414__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__54414,map__54414__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__54422){
var vec__54423 = p__54422;
var seq__54424 = cljs.core.seq.call(null,vec__54423);
var first__54425 = cljs.core.first.call(null,seq__54424);
var seq__54424__$1 = cljs.core.next.call(null,seq__54424);
var map__54426 = first__54425;
var map__54426__$1 = ((((!((map__54426 == null)))?((((map__54426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54426.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54426):map__54426);
var msg = map__54426__$1;
var msg_name = cljs.core.get.call(null,map__54426__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__54424__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__54428){
var map__54429 = p__54428;
var map__54429__$1 = ((((!((map__54429 == null)))?((((map__54429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54429.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54429):map__54429);
var on_compile_warning = cljs.core.get.call(null,map__54429__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__54429__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__54429,map__54429__$1,on_compile_warning,on_compile_fail){
return (function (p__54431){
var vec__54432 = p__54431;
var seq__54433 = cljs.core.seq.call(null,vec__54432);
var first__54434 = cljs.core.first.call(null,seq__54433);
var seq__54433__$1 = cljs.core.next.call(null,seq__54433);
var map__54435 = first__54434;
var map__54435__$1 = ((((!((map__54435 == null)))?((((map__54435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54435.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54435):map__54435);
var msg = map__54435__$1;
var msg_name = cljs.core.get.call(null,map__54435__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__54433__$1;
var pred__54437 = cljs.core._EQ_;
var expr__54438 = msg_name;
if(cljs.core.truth_(pred__54437.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__54438))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__54437.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__54438))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__54429,map__54429__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__48989__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48989__auto__,msg_hist,msg_names,msg){
return (function (){
var f__48990__auto__ = (function (){var switch__48901__auto__ = ((function (c__48989__auto__,msg_hist,msg_names,msg){
return (function (state_54527){
var state_val_54528 = (state_54527[(1)]);
if((state_val_54528 === (7))){
var inst_54447 = (state_54527[(2)]);
var state_54527__$1 = state_54527;
if(cljs.core.truth_(inst_54447)){
var statearr_54529_54576 = state_54527__$1;
(statearr_54529_54576[(1)] = (8));

} else {
var statearr_54530_54577 = state_54527__$1;
(statearr_54530_54577[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54528 === (20))){
var inst_54521 = (state_54527[(2)]);
var state_54527__$1 = state_54527;
var statearr_54531_54578 = state_54527__$1;
(statearr_54531_54578[(2)] = inst_54521);

(statearr_54531_54578[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54528 === (27))){
var inst_54517 = (state_54527[(2)]);
var state_54527__$1 = state_54527;
var statearr_54532_54579 = state_54527__$1;
(statearr_54532_54579[(2)] = inst_54517);

(statearr_54532_54579[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54528 === (1))){
var inst_54440 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_54527__$1 = state_54527;
if(cljs.core.truth_(inst_54440)){
var statearr_54533_54580 = state_54527__$1;
(statearr_54533_54580[(1)] = (2));

} else {
var statearr_54534_54581 = state_54527__$1;
(statearr_54534_54581[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54528 === (24))){
var inst_54519 = (state_54527[(2)]);
var state_54527__$1 = state_54527;
var statearr_54535_54582 = state_54527__$1;
(statearr_54535_54582[(2)] = inst_54519);

(statearr_54535_54582[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54528 === (4))){
var inst_54525 = (state_54527[(2)]);
var state_54527__$1 = state_54527;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54527__$1,inst_54525);
} else {
if((state_val_54528 === (15))){
var inst_54523 = (state_54527[(2)]);
var state_54527__$1 = state_54527;
var statearr_54536_54583 = state_54527__$1;
(statearr_54536_54583[(2)] = inst_54523);

(statearr_54536_54583[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54528 === (21))){
var inst_54476 = (state_54527[(2)]);
var inst_54477 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54478 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54477);
var state_54527__$1 = (function (){var statearr_54537 = state_54527;
(statearr_54537[(7)] = inst_54476);

return statearr_54537;
})();
var statearr_54538_54584 = state_54527__$1;
(statearr_54538_54584[(2)] = inst_54478);

(statearr_54538_54584[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54528 === (31))){
var inst_54506 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_54527__$1 = state_54527;
if(cljs.core.truth_(inst_54506)){
var statearr_54539_54585 = state_54527__$1;
(statearr_54539_54585[(1)] = (34));

} else {
var statearr_54540_54586 = state_54527__$1;
(statearr_54540_54586[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54528 === (32))){
var inst_54515 = (state_54527[(2)]);
var state_54527__$1 = state_54527;
var statearr_54541_54587 = state_54527__$1;
(statearr_54541_54587[(2)] = inst_54515);

(statearr_54541_54587[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54528 === (33))){
var inst_54502 = (state_54527[(2)]);
var inst_54503 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54504 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54503);
var state_54527__$1 = (function (){var statearr_54542 = state_54527;
(statearr_54542[(8)] = inst_54502);

return statearr_54542;
})();
var statearr_54543_54588 = state_54527__$1;
(statearr_54543_54588[(2)] = inst_54504);

(statearr_54543_54588[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54528 === (13))){
var inst_54461 = figwheel.client.heads_up.clear.call(null);
var state_54527__$1 = state_54527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54527__$1,(16),inst_54461);
} else {
if((state_val_54528 === (22))){
var inst_54482 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54483 = figwheel.client.heads_up.append_warning_message.call(null,inst_54482);
var state_54527__$1 = state_54527;
var statearr_54544_54589 = state_54527__$1;
(statearr_54544_54589[(2)] = inst_54483);

(statearr_54544_54589[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54528 === (36))){
var inst_54513 = (state_54527[(2)]);
var state_54527__$1 = state_54527;
var statearr_54545_54590 = state_54527__$1;
(statearr_54545_54590[(2)] = inst_54513);

(statearr_54545_54590[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54528 === (29))){
var inst_54493 = (state_54527[(2)]);
var inst_54494 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54495 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54494);
var state_54527__$1 = (function (){var statearr_54546 = state_54527;
(statearr_54546[(9)] = inst_54493);

return statearr_54546;
})();
var statearr_54547_54591 = state_54527__$1;
(statearr_54547_54591[(2)] = inst_54495);

(statearr_54547_54591[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54528 === (6))){
var inst_54442 = (state_54527[(10)]);
var state_54527__$1 = state_54527;
var statearr_54548_54592 = state_54527__$1;
(statearr_54548_54592[(2)] = inst_54442);

(statearr_54548_54592[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54528 === (28))){
var inst_54489 = (state_54527[(2)]);
var inst_54490 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54491 = figwheel.client.heads_up.display_warning.call(null,inst_54490);
var state_54527__$1 = (function (){var statearr_54549 = state_54527;
(statearr_54549[(11)] = inst_54489);

return statearr_54549;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54527__$1,(29),inst_54491);
} else {
if((state_val_54528 === (25))){
var inst_54487 = figwheel.client.heads_up.clear.call(null);
var state_54527__$1 = state_54527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54527__$1,(28),inst_54487);
} else {
if((state_val_54528 === (34))){
var inst_54508 = figwheel.client.heads_up.flash_loaded.call(null);
var state_54527__$1 = state_54527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54527__$1,(37),inst_54508);
} else {
if((state_val_54528 === (17))){
var inst_54467 = (state_54527[(2)]);
var inst_54468 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54469 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54468);
var state_54527__$1 = (function (){var statearr_54550 = state_54527;
(statearr_54550[(12)] = inst_54467);

return statearr_54550;
})();
var statearr_54551_54593 = state_54527__$1;
(statearr_54551_54593[(2)] = inst_54469);

(statearr_54551_54593[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54528 === (3))){
var inst_54459 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_54527__$1 = state_54527;
if(cljs.core.truth_(inst_54459)){
var statearr_54552_54594 = state_54527__$1;
(statearr_54552_54594[(1)] = (13));

} else {
var statearr_54553_54595 = state_54527__$1;
(statearr_54553_54595[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54528 === (12))){
var inst_54455 = (state_54527[(2)]);
var state_54527__$1 = state_54527;
var statearr_54554_54596 = state_54527__$1;
(statearr_54554_54596[(2)] = inst_54455);

(statearr_54554_54596[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54528 === (2))){
var inst_54442 = (state_54527[(10)]);
var inst_54442__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_54527__$1 = (function (){var statearr_54555 = state_54527;
(statearr_54555[(10)] = inst_54442__$1);

return statearr_54555;
})();
if(cljs.core.truth_(inst_54442__$1)){
var statearr_54556_54597 = state_54527__$1;
(statearr_54556_54597[(1)] = (5));

} else {
var statearr_54557_54598 = state_54527__$1;
(statearr_54557_54598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54528 === (23))){
var inst_54485 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_54527__$1 = state_54527;
if(cljs.core.truth_(inst_54485)){
var statearr_54558_54599 = state_54527__$1;
(statearr_54558_54599[(1)] = (25));

} else {
var statearr_54559_54600 = state_54527__$1;
(statearr_54559_54600[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54528 === (35))){
var state_54527__$1 = state_54527;
var statearr_54560_54601 = state_54527__$1;
(statearr_54560_54601[(2)] = null);

(statearr_54560_54601[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54528 === (19))){
var inst_54480 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_54527__$1 = state_54527;
if(cljs.core.truth_(inst_54480)){
var statearr_54561_54602 = state_54527__$1;
(statearr_54561_54602[(1)] = (22));

} else {
var statearr_54562_54603 = state_54527__$1;
(statearr_54562_54603[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54528 === (11))){
var inst_54451 = (state_54527[(2)]);
var state_54527__$1 = state_54527;
var statearr_54563_54604 = state_54527__$1;
(statearr_54563_54604[(2)] = inst_54451);

(statearr_54563_54604[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54528 === (9))){
var inst_54453 = figwheel.client.heads_up.clear.call(null);
var state_54527__$1 = state_54527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54527__$1,(12),inst_54453);
} else {
if((state_val_54528 === (5))){
var inst_54444 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_54527__$1 = state_54527;
var statearr_54564_54605 = state_54527__$1;
(statearr_54564_54605[(2)] = inst_54444);

(statearr_54564_54605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54528 === (14))){
var inst_54471 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_54527__$1 = state_54527;
if(cljs.core.truth_(inst_54471)){
var statearr_54565_54606 = state_54527__$1;
(statearr_54565_54606[(1)] = (18));

} else {
var statearr_54566_54607 = state_54527__$1;
(statearr_54566_54607[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54528 === (26))){
var inst_54497 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_54527__$1 = state_54527;
if(cljs.core.truth_(inst_54497)){
var statearr_54567_54608 = state_54527__$1;
(statearr_54567_54608[(1)] = (30));

} else {
var statearr_54568_54609 = state_54527__$1;
(statearr_54568_54609[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54528 === (16))){
var inst_54463 = (state_54527[(2)]);
var inst_54464 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54465 = figwheel.client.heads_up.display_exception.call(null,inst_54464);
var state_54527__$1 = (function (){var statearr_54569 = state_54527;
(statearr_54569[(13)] = inst_54463);

return statearr_54569;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54527__$1,(17),inst_54465);
} else {
if((state_val_54528 === (30))){
var inst_54499 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54500 = figwheel.client.heads_up.display_warning.call(null,inst_54499);
var state_54527__$1 = state_54527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54527__$1,(33),inst_54500);
} else {
if((state_val_54528 === (10))){
var inst_54457 = (state_54527[(2)]);
var state_54527__$1 = state_54527;
var statearr_54570_54610 = state_54527__$1;
(statearr_54570_54610[(2)] = inst_54457);

(statearr_54570_54610[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54528 === (18))){
var inst_54473 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54474 = figwheel.client.heads_up.display_exception.call(null,inst_54473);
var state_54527__$1 = state_54527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54527__$1,(21),inst_54474);
} else {
if((state_val_54528 === (37))){
var inst_54510 = (state_54527[(2)]);
var state_54527__$1 = state_54527;
var statearr_54571_54611 = state_54527__$1;
(statearr_54571_54611[(2)] = inst_54510);

(statearr_54571_54611[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54528 === (8))){
var inst_54449 = figwheel.client.heads_up.flash_loaded.call(null);
var state_54527__$1 = state_54527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54527__$1,(11),inst_54449);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__48989__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__48901__auto__,c__48989__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48902__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48902__auto____0 = (function (){
var statearr_54572 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54572[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48902__auto__);

(statearr_54572[(1)] = (1));

return statearr_54572;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48902__auto____1 = (function (state_54527){
while(true){
var ret_value__48903__auto__ = (function (){try{while(true){
var result__48904__auto__ = switch__48901__auto__.call(null,state_54527);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48904__auto__;
}
break;
}
}catch (e54573){if((e54573 instanceof Object)){
var ex__48905__auto__ = e54573;
var statearr_54574_54612 = state_54527;
(statearr_54574_54612[(5)] = ex__48905__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54527);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54573;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54613 = state_54527;
state_54527 = G__54613;
continue;
} else {
return ret_value__48903__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48902__auto__ = function(state_54527){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48902__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48902__auto____1.call(this,state_54527);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48902__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48902__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48902__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48902__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48902__auto__;
})()
;})(switch__48901__auto__,c__48989__auto__,msg_hist,msg_names,msg))
})();
var state__48991__auto__ = (function (){var statearr_54575 = f__48990__auto__.call(null);
(statearr_54575[(6)] = c__48989__auto__);

return statearr_54575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48991__auto__);
});})(c__48989__auto__,msg_hist,msg_names,msg))
);

return c__48989__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__48989__auto___54642 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48989__auto___54642,ch){
return (function (){
var f__48990__auto__ = (function (){var switch__48901__auto__ = ((function (c__48989__auto___54642,ch){
return (function (state_54628){
var state_val_54629 = (state_54628[(1)]);
if((state_val_54629 === (1))){
var state_54628__$1 = state_54628;
var statearr_54630_54643 = state_54628__$1;
(statearr_54630_54643[(2)] = null);

(statearr_54630_54643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54629 === (2))){
var state_54628__$1 = state_54628;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54628__$1,(4),ch);
} else {
if((state_val_54629 === (3))){
var inst_54626 = (state_54628[(2)]);
var state_54628__$1 = state_54628;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54628__$1,inst_54626);
} else {
if((state_val_54629 === (4))){
var inst_54616 = (state_54628[(7)]);
var inst_54616__$1 = (state_54628[(2)]);
var state_54628__$1 = (function (){var statearr_54631 = state_54628;
(statearr_54631[(7)] = inst_54616__$1);

return statearr_54631;
})();
if(cljs.core.truth_(inst_54616__$1)){
var statearr_54632_54644 = state_54628__$1;
(statearr_54632_54644[(1)] = (5));

} else {
var statearr_54633_54645 = state_54628__$1;
(statearr_54633_54645[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54629 === (5))){
var inst_54616 = (state_54628[(7)]);
var inst_54618 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_54616);
var state_54628__$1 = state_54628;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54628__$1,(8),inst_54618);
} else {
if((state_val_54629 === (6))){
var state_54628__$1 = state_54628;
var statearr_54634_54646 = state_54628__$1;
(statearr_54634_54646[(2)] = null);

(statearr_54634_54646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54629 === (7))){
var inst_54624 = (state_54628[(2)]);
var state_54628__$1 = state_54628;
var statearr_54635_54647 = state_54628__$1;
(statearr_54635_54647[(2)] = inst_54624);

(statearr_54635_54647[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54629 === (8))){
var inst_54620 = (state_54628[(2)]);
var state_54628__$1 = (function (){var statearr_54636 = state_54628;
(statearr_54636[(8)] = inst_54620);

return statearr_54636;
})();
var statearr_54637_54648 = state_54628__$1;
(statearr_54637_54648[(2)] = null);

(statearr_54637_54648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__48989__auto___54642,ch))
;
return ((function (switch__48901__auto__,c__48989__auto___54642,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__48902__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__48902__auto____0 = (function (){
var statearr_54638 = [null,null,null,null,null,null,null,null,null];
(statearr_54638[(0)] = figwheel$client$heads_up_plugin_$_state_machine__48902__auto__);

(statearr_54638[(1)] = (1));

return statearr_54638;
});
var figwheel$client$heads_up_plugin_$_state_machine__48902__auto____1 = (function (state_54628){
while(true){
var ret_value__48903__auto__ = (function (){try{while(true){
var result__48904__auto__ = switch__48901__auto__.call(null,state_54628);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48904__auto__;
}
break;
}
}catch (e54639){if((e54639 instanceof Object)){
var ex__48905__auto__ = e54639;
var statearr_54640_54649 = state_54628;
(statearr_54640_54649[(5)] = ex__48905__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54628);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54639;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54650 = state_54628;
state_54628 = G__54650;
continue;
} else {
return ret_value__48903__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__48902__auto__ = function(state_54628){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__48902__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__48902__auto____1.call(this,state_54628);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__48902__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__48902__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__48902__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__48902__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__48902__auto__;
})()
;})(switch__48901__auto__,c__48989__auto___54642,ch))
})();
var state__48991__auto__ = (function (){var statearr_54641 = f__48990__auto__.call(null);
(statearr_54641[(6)] = c__48989__auto___54642);

return statearr_54641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48991__auto__);
});})(c__48989__auto___54642,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__48989__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48989__auto__){
return (function (){
var f__48990__auto__ = (function (){var switch__48901__auto__ = ((function (c__48989__auto__){
return (function (state_54656){
var state_val_54657 = (state_54656[(1)]);
if((state_val_54657 === (1))){
var inst_54651 = cljs.core.async.timeout.call(null,(3000));
var state_54656__$1 = state_54656;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54656__$1,(2),inst_54651);
} else {
if((state_val_54657 === (2))){
var inst_54653 = (state_54656[(2)]);
var inst_54654 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_54656__$1 = (function (){var statearr_54658 = state_54656;
(statearr_54658[(7)] = inst_54653);

return statearr_54658;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54656__$1,inst_54654);
} else {
return null;
}
}
});})(c__48989__auto__))
;
return ((function (switch__48901__auto__,c__48989__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__48902__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__48902__auto____0 = (function (){
var statearr_54659 = [null,null,null,null,null,null,null,null];
(statearr_54659[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__48902__auto__);

(statearr_54659[(1)] = (1));

return statearr_54659;
});
var figwheel$client$enforce_project_plugin_$_state_machine__48902__auto____1 = (function (state_54656){
while(true){
var ret_value__48903__auto__ = (function (){try{while(true){
var result__48904__auto__ = switch__48901__auto__.call(null,state_54656);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48904__auto__;
}
break;
}
}catch (e54660){if((e54660 instanceof Object)){
var ex__48905__auto__ = e54660;
var statearr_54661_54663 = state_54656;
(statearr_54661_54663[(5)] = ex__48905__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54656);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54660;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54664 = state_54656;
state_54656 = G__54664;
continue;
} else {
return ret_value__48903__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__48902__auto__ = function(state_54656){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__48902__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__48902__auto____1.call(this,state_54656);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__48902__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__48902__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__48902__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__48902__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__48902__auto__;
})()
;})(switch__48901__auto__,c__48989__auto__))
})();
var state__48991__auto__ = (function (){var statearr_54662 = f__48990__auto__.call(null);
(statearr_54662[(6)] = c__48989__auto__);

return statearr_54662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48991__auto__);
});})(c__48989__auto__))
);

return c__48989__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__48989__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48989__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__48990__auto__ = (function (){var switch__48901__auto__ = ((function (c__48989__auto__,figwheel_version,temp__4657__auto__){
return (function (state_54671){
var state_val_54672 = (state_54671[(1)]);
if((state_val_54672 === (1))){
var inst_54665 = cljs.core.async.timeout.call(null,(2000));
var state_54671__$1 = state_54671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54671__$1,(2),inst_54665);
} else {
if((state_val_54672 === (2))){
var inst_54667 = (state_54671[(2)]);
var inst_54668 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_54669 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_54668);
var state_54671__$1 = (function (){var statearr_54673 = state_54671;
(statearr_54673[(7)] = inst_54667);

return statearr_54673;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54671__$1,inst_54669);
} else {
return null;
}
}
});})(c__48989__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__48901__auto__,c__48989__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48902__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48902__auto____0 = (function (){
var statearr_54674 = [null,null,null,null,null,null,null,null];
(statearr_54674[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48902__auto__);

(statearr_54674[(1)] = (1));

return statearr_54674;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48902__auto____1 = (function (state_54671){
while(true){
var ret_value__48903__auto__ = (function (){try{while(true){
var result__48904__auto__ = switch__48901__auto__.call(null,state_54671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48904__auto__;
}
break;
}
}catch (e54675){if((e54675 instanceof Object)){
var ex__48905__auto__ = e54675;
var statearr_54676_54678 = state_54671;
(statearr_54676_54678[(5)] = ex__48905__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54675;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54679 = state_54671;
state_54671 = G__54679;
continue;
} else {
return ret_value__48903__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48902__auto__ = function(state_54671){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48902__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48902__auto____1.call(this,state_54671);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48902__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48902__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48902__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48902__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48902__auto__;
})()
;})(switch__48901__auto__,c__48989__auto__,figwheel_version,temp__4657__auto__))
})();
var state__48991__auto__ = (function (){var statearr_54677 = f__48990__auto__.call(null);
(statearr_54677[(6)] = c__48989__auto__);

return statearr_54677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48991__auto__);
});})(c__48989__auto__,figwheel_version,temp__4657__auto__))
);

return c__48989__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__54680){
var map__54681 = p__54680;
var map__54681__$1 = ((((!((map__54681 == null)))?((((map__54681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54681.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54681):map__54681);
var file = cljs.core.get.call(null,map__54681__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__54681__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__54681__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__54683 = "";
var G__54683__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54683),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__54683);
var G__54683__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54683__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__54683__$1);
if(cljs.core.truth_((function (){var and__45897__auto__ = line;
if(cljs.core.truth_(and__45897__auto__)){
return column;
} else {
return and__45897__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54683__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__54683__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__54684){
var map__54685 = p__54684;
var map__54685__$1 = ((((!((map__54685 == null)))?((((map__54685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54685.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54685):map__54685);
var ed = map__54685__$1;
var formatted_exception = cljs.core.get.call(null,map__54685__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__54685__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__54685__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__54687_54691 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__54688_54692 = null;
var count__54689_54693 = (0);
var i__54690_54694 = (0);
while(true){
if((i__54690_54694 < count__54689_54693)){
var msg_54695 = cljs.core._nth.call(null,chunk__54688_54692,i__54690_54694);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_54695);

var G__54696 = seq__54687_54691;
var G__54697 = chunk__54688_54692;
var G__54698 = count__54689_54693;
var G__54699 = (i__54690_54694 + (1));
seq__54687_54691 = G__54696;
chunk__54688_54692 = G__54697;
count__54689_54693 = G__54698;
i__54690_54694 = G__54699;
continue;
} else {
var temp__4657__auto___54700 = cljs.core.seq.call(null,seq__54687_54691);
if(temp__4657__auto___54700){
var seq__54687_54701__$1 = temp__4657__auto___54700;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54687_54701__$1)){
var c__46729__auto___54702 = cljs.core.chunk_first.call(null,seq__54687_54701__$1);
var G__54703 = cljs.core.chunk_rest.call(null,seq__54687_54701__$1);
var G__54704 = c__46729__auto___54702;
var G__54705 = cljs.core.count.call(null,c__46729__auto___54702);
var G__54706 = (0);
seq__54687_54691 = G__54703;
chunk__54688_54692 = G__54704;
count__54689_54693 = G__54705;
i__54690_54694 = G__54706;
continue;
} else {
var msg_54707 = cljs.core.first.call(null,seq__54687_54701__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_54707);

var G__54708 = cljs.core.next.call(null,seq__54687_54701__$1);
var G__54709 = null;
var G__54710 = (0);
var G__54711 = (0);
seq__54687_54691 = G__54708;
chunk__54688_54692 = G__54709;
count__54689_54693 = G__54710;
i__54690_54694 = G__54711;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error on "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__54712){
var map__54713 = p__54712;
var map__54713__$1 = ((((!((map__54713 == null)))?((((map__54713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54713.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54713):map__54713);
var w = map__54713__$1;
var message = cljs.core.get.call(null,map__54713__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Compile Warning - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__45897__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__45897__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__45897__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__54715 = cljs.core.seq.call(null,plugins);
var chunk__54716 = null;
var count__54717 = (0);
var i__54718 = (0);
while(true){
if((i__54718 < count__54717)){
var vec__54719 = cljs.core._nth.call(null,chunk__54716,i__54718);
var k = cljs.core.nth.call(null,vec__54719,(0),null);
var plugin = cljs.core.nth.call(null,vec__54719,(1),null);
if(cljs.core.truth_(plugin)){
var pl_54725 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__54715,chunk__54716,count__54717,i__54718,pl_54725,vec__54719,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_54725.call(null,msg_hist);
});})(seq__54715,chunk__54716,count__54717,i__54718,pl_54725,vec__54719,k,plugin))
);
} else {
}

var G__54726 = seq__54715;
var G__54727 = chunk__54716;
var G__54728 = count__54717;
var G__54729 = (i__54718 + (1));
seq__54715 = G__54726;
chunk__54716 = G__54727;
count__54717 = G__54728;
i__54718 = G__54729;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__54715);
if(temp__4657__auto__){
var seq__54715__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54715__$1)){
var c__46729__auto__ = cljs.core.chunk_first.call(null,seq__54715__$1);
var G__54730 = cljs.core.chunk_rest.call(null,seq__54715__$1);
var G__54731 = c__46729__auto__;
var G__54732 = cljs.core.count.call(null,c__46729__auto__);
var G__54733 = (0);
seq__54715 = G__54730;
chunk__54716 = G__54731;
count__54717 = G__54732;
i__54718 = G__54733;
continue;
} else {
var vec__54722 = cljs.core.first.call(null,seq__54715__$1);
var k = cljs.core.nth.call(null,vec__54722,(0),null);
var plugin = cljs.core.nth.call(null,vec__54722,(1),null);
if(cljs.core.truth_(plugin)){
var pl_54734 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__54715,chunk__54716,count__54717,i__54718,pl_54734,vec__54722,k,plugin,seq__54715__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_54734.call(null,msg_hist);
});})(seq__54715,chunk__54716,count__54717,i__54718,pl_54734,vec__54722,k,plugin,seq__54715__$1,temp__4657__auto__))
);
} else {
}

var G__54735 = cljs.core.next.call(null,seq__54715__$1);
var G__54736 = null;
var G__54737 = (0);
var G__54738 = (0);
seq__54715 = G__54735;
chunk__54716 = G__54736;
count__54717 = G__54737;
i__54718 = G__54738;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__54740 = arguments.length;
switch (G__54740) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__54741_54746 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__54742_54747 = null;
var count__54743_54748 = (0);
var i__54744_54749 = (0);
while(true){
if((i__54744_54749 < count__54743_54748)){
var msg_54750 = cljs.core._nth.call(null,chunk__54742_54747,i__54744_54749);
figwheel.client.socket.handle_incoming_message.call(null,msg_54750);

var G__54751 = seq__54741_54746;
var G__54752 = chunk__54742_54747;
var G__54753 = count__54743_54748;
var G__54754 = (i__54744_54749 + (1));
seq__54741_54746 = G__54751;
chunk__54742_54747 = G__54752;
count__54743_54748 = G__54753;
i__54744_54749 = G__54754;
continue;
} else {
var temp__4657__auto___54755 = cljs.core.seq.call(null,seq__54741_54746);
if(temp__4657__auto___54755){
var seq__54741_54756__$1 = temp__4657__auto___54755;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54741_54756__$1)){
var c__46729__auto___54757 = cljs.core.chunk_first.call(null,seq__54741_54756__$1);
var G__54758 = cljs.core.chunk_rest.call(null,seq__54741_54756__$1);
var G__54759 = c__46729__auto___54757;
var G__54760 = cljs.core.count.call(null,c__46729__auto___54757);
var G__54761 = (0);
seq__54741_54746 = G__54758;
chunk__54742_54747 = G__54759;
count__54743_54748 = G__54760;
i__54744_54749 = G__54761;
continue;
} else {
var msg_54762 = cljs.core.first.call(null,seq__54741_54756__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_54762);

var G__54763 = cljs.core.next.call(null,seq__54741_54756__$1);
var G__54764 = null;
var G__54765 = (0);
var G__54766 = (0);
seq__54741_54746 = G__54763;
chunk__54742_54747 = G__54764;
count__54743_54748 = G__54765;
i__54744_54749 = G__54766;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__47041__auto__ = [];
var len__47034__auto___54771 = arguments.length;
var i__47035__auto___54772 = (0);
while(true){
if((i__47035__auto___54772 < len__47034__auto___54771)){
args__47041__auto__.push((arguments[i__47035__auto___54772]));

var G__54773 = (i__47035__auto___54772 + (1));
i__47035__auto___54772 = G__54773;
continue;
} else {
}
break;
}

var argseq__47042__auto__ = ((((0) < args__47041__auto__.length))?(new cljs.core.IndexedSeq(args__47041__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__47042__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__54768){
var map__54769 = p__54768;
var map__54769__$1 = ((((!((map__54769 == null)))?((((map__54769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54769.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54769):map__54769);
var opts = map__54769__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq54767){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54767));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e54774){if((e54774 instanceof Error)){
var e = e54774;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e54774;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__54775){
var map__54776 = p__54775;
var map__54776__$1 = ((((!((map__54776 == null)))?((((map__54776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54776.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54776):map__54776);
var msg_name = cljs.core.get.call(null,map__54776__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1499848607061