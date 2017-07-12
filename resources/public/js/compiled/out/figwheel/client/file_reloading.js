// Compiled by ClojureScript 1.9.671 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__45909__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__45909__auto__){
return or__45909__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__45909__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["svgpan.SvgPan",null,"far.out",null,"cljs.nodejs",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__45909__auto__)){
return or__45909__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__52467_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__52467_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__52468 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__52469 = null;
var count__52470 = (0);
var i__52471 = (0);
while(true){
if((i__52471 < count__52470)){
var n = cljs.core._nth.call(null,chunk__52469,i__52471);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__52472 = seq__52468;
var G__52473 = chunk__52469;
var G__52474 = count__52470;
var G__52475 = (i__52471 + (1));
seq__52468 = G__52472;
chunk__52469 = G__52473;
count__52470 = G__52474;
i__52471 = G__52475;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__52468);
if(temp__4657__auto__){
var seq__52468__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52468__$1)){
var c__46729__auto__ = cljs.core.chunk_first.call(null,seq__52468__$1);
var G__52476 = cljs.core.chunk_rest.call(null,seq__52468__$1);
var G__52477 = c__46729__auto__;
var G__52478 = cljs.core.count.call(null,c__46729__auto__);
var G__52479 = (0);
seq__52468 = G__52476;
chunk__52469 = G__52477;
count__52470 = G__52478;
i__52471 = G__52479;
continue;
} else {
var n = cljs.core.first.call(null,seq__52468__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__52480 = cljs.core.next.call(null,seq__52468__$1);
var G__52481 = null;
var G__52482 = (0);
var G__52483 = (0);
seq__52468 = G__52480;
chunk__52469 = G__52481;
count__52470 = G__52482;
i__52471 = G__52483;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__52493_52501 = cljs.core.seq.call(null,deps);
var chunk__52494_52502 = null;
var count__52495_52503 = (0);
var i__52496_52504 = (0);
while(true){
if((i__52496_52504 < count__52495_52503)){
var dep_52505 = cljs.core._nth.call(null,chunk__52494_52502,i__52496_52504);
topo_sort_helper_STAR_.call(null,dep_52505,(depth + (1)),state);

var G__52506 = seq__52493_52501;
var G__52507 = chunk__52494_52502;
var G__52508 = count__52495_52503;
var G__52509 = (i__52496_52504 + (1));
seq__52493_52501 = G__52506;
chunk__52494_52502 = G__52507;
count__52495_52503 = G__52508;
i__52496_52504 = G__52509;
continue;
} else {
var temp__4657__auto___52510 = cljs.core.seq.call(null,seq__52493_52501);
if(temp__4657__auto___52510){
var seq__52493_52511__$1 = temp__4657__auto___52510;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52493_52511__$1)){
var c__46729__auto___52512 = cljs.core.chunk_first.call(null,seq__52493_52511__$1);
var G__52513 = cljs.core.chunk_rest.call(null,seq__52493_52511__$1);
var G__52514 = c__46729__auto___52512;
var G__52515 = cljs.core.count.call(null,c__46729__auto___52512);
var G__52516 = (0);
seq__52493_52501 = G__52513;
chunk__52494_52502 = G__52514;
count__52495_52503 = G__52515;
i__52496_52504 = G__52516;
continue;
} else {
var dep_52517 = cljs.core.first.call(null,seq__52493_52511__$1);
topo_sort_helper_STAR_.call(null,dep_52517,(depth + (1)),state);

var G__52518 = cljs.core.next.call(null,seq__52493_52511__$1);
var G__52519 = null;
var G__52520 = (0);
var G__52521 = (0);
seq__52493_52501 = G__52518;
chunk__52494_52502 = G__52519;
count__52495_52503 = G__52520;
i__52496_52504 = G__52521;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__52497){
var vec__52498 = p__52497;
var seq__52499 = cljs.core.seq.call(null,vec__52498);
var first__52500 = cljs.core.first.call(null,seq__52499);
var seq__52499__$1 = cljs.core.next.call(null,seq__52499);
var x = first__52500;
var xs = seq__52499__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__52498,seq__52499,first__52500,seq__52499__$1,x,xs,get_deps__$1){
return (function (p1__52484_SHARP_){
return clojure.set.difference.call(null,p1__52484_SHARP_,x);
});})(vec__52498,seq__52499,first__52500,seq__52499__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__52522 = cljs.core.seq.call(null,provides);
var chunk__52523 = null;
var count__52524 = (0);
var i__52525 = (0);
while(true){
if((i__52525 < count__52524)){
var prov = cljs.core._nth.call(null,chunk__52523,i__52525);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__52526_52534 = cljs.core.seq.call(null,requires);
var chunk__52527_52535 = null;
var count__52528_52536 = (0);
var i__52529_52537 = (0);
while(true){
if((i__52529_52537 < count__52528_52536)){
var req_52538 = cljs.core._nth.call(null,chunk__52527_52535,i__52529_52537);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_52538,prov);

var G__52539 = seq__52526_52534;
var G__52540 = chunk__52527_52535;
var G__52541 = count__52528_52536;
var G__52542 = (i__52529_52537 + (1));
seq__52526_52534 = G__52539;
chunk__52527_52535 = G__52540;
count__52528_52536 = G__52541;
i__52529_52537 = G__52542;
continue;
} else {
var temp__4657__auto___52543 = cljs.core.seq.call(null,seq__52526_52534);
if(temp__4657__auto___52543){
var seq__52526_52544__$1 = temp__4657__auto___52543;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52526_52544__$1)){
var c__46729__auto___52545 = cljs.core.chunk_first.call(null,seq__52526_52544__$1);
var G__52546 = cljs.core.chunk_rest.call(null,seq__52526_52544__$1);
var G__52547 = c__46729__auto___52545;
var G__52548 = cljs.core.count.call(null,c__46729__auto___52545);
var G__52549 = (0);
seq__52526_52534 = G__52546;
chunk__52527_52535 = G__52547;
count__52528_52536 = G__52548;
i__52529_52537 = G__52549;
continue;
} else {
var req_52550 = cljs.core.first.call(null,seq__52526_52544__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_52550,prov);

var G__52551 = cljs.core.next.call(null,seq__52526_52544__$1);
var G__52552 = null;
var G__52553 = (0);
var G__52554 = (0);
seq__52526_52534 = G__52551;
chunk__52527_52535 = G__52552;
count__52528_52536 = G__52553;
i__52529_52537 = G__52554;
continue;
}
} else {
}
}
break;
}

var G__52555 = seq__52522;
var G__52556 = chunk__52523;
var G__52557 = count__52524;
var G__52558 = (i__52525 + (1));
seq__52522 = G__52555;
chunk__52523 = G__52556;
count__52524 = G__52557;
i__52525 = G__52558;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__52522);
if(temp__4657__auto__){
var seq__52522__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52522__$1)){
var c__46729__auto__ = cljs.core.chunk_first.call(null,seq__52522__$1);
var G__52559 = cljs.core.chunk_rest.call(null,seq__52522__$1);
var G__52560 = c__46729__auto__;
var G__52561 = cljs.core.count.call(null,c__46729__auto__);
var G__52562 = (0);
seq__52522 = G__52559;
chunk__52523 = G__52560;
count__52524 = G__52561;
i__52525 = G__52562;
continue;
} else {
var prov = cljs.core.first.call(null,seq__52522__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__52530_52563 = cljs.core.seq.call(null,requires);
var chunk__52531_52564 = null;
var count__52532_52565 = (0);
var i__52533_52566 = (0);
while(true){
if((i__52533_52566 < count__52532_52565)){
var req_52567 = cljs.core._nth.call(null,chunk__52531_52564,i__52533_52566);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_52567,prov);

var G__52568 = seq__52530_52563;
var G__52569 = chunk__52531_52564;
var G__52570 = count__52532_52565;
var G__52571 = (i__52533_52566 + (1));
seq__52530_52563 = G__52568;
chunk__52531_52564 = G__52569;
count__52532_52565 = G__52570;
i__52533_52566 = G__52571;
continue;
} else {
var temp__4657__auto___52572__$1 = cljs.core.seq.call(null,seq__52530_52563);
if(temp__4657__auto___52572__$1){
var seq__52530_52573__$1 = temp__4657__auto___52572__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52530_52573__$1)){
var c__46729__auto___52574 = cljs.core.chunk_first.call(null,seq__52530_52573__$1);
var G__52575 = cljs.core.chunk_rest.call(null,seq__52530_52573__$1);
var G__52576 = c__46729__auto___52574;
var G__52577 = cljs.core.count.call(null,c__46729__auto___52574);
var G__52578 = (0);
seq__52530_52563 = G__52575;
chunk__52531_52564 = G__52576;
count__52532_52565 = G__52577;
i__52533_52566 = G__52578;
continue;
} else {
var req_52579 = cljs.core.first.call(null,seq__52530_52573__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_52579,prov);

var G__52580 = cljs.core.next.call(null,seq__52530_52573__$1);
var G__52581 = null;
var G__52582 = (0);
var G__52583 = (0);
seq__52530_52563 = G__52580;
chunk__52531_52564 = G__52581;
count__52532_52565 = G__52582;
i__52533_52566 = G__52583;
continue;
}
} else {
}
}
break;
}

var G__52584 = cljs.core.next.call(null,seq__52522__$1);
var G__52585 = null;
var G__52586 = (0);
var G__52587 = (0);
seq__52522 = G__52584;
chunk__52523 = G__52585;
count__52524 = G__52586;
i__52525 = G__52587;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__52588_52592 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__52589_52593 = null;
var count__52590_52594 = (0);
var i__52591_52595 = (0);
while(true){
if((i__52591_52595 < count__52590_52594)){
var ns_52596 = cljs.core._nth.call(null,chunk__52589_52593,i__52591_52595);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_52596);

var G__52597 = seq__52588_52592;
var G__52598 = chunk__52589_52593;
var G__52599 = count__52590_52594;
var G__52600 = (i__52591_52595 + (1));
seq__52588_52592 = G__52597;
chunk__52589_52593 = G__52598;
count__52590_52594 = G__52599;
i__52591_52595 = G__52600;
continue;
} else {
var temp__4657__auto___52601 = cljs.core.seq.call(null,seq__52588_52592);
if(temp__4657__auto___52601){
var seq__52588_52602__$1 = temp__4657__auto___52601;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52588_52602__$1)){
var c__46729__auto___52603 = cljs.core.chunk_first.call(null,seq__52588_52602__$1);
var G__52604 = cljs.core.chunk_rest.call(null,seq__52588_52602__$1);
var G__52605 = c__46729__auto___52603;
var G__52606 = cljs.core.count.call(null,c__46729__auto___52603);
var G__52607 = (0);
seq__52588_52592 = G__52604;
chunk__52589_52593 = G__52605;
count__52590_52594 = G__52606;
i__52591_52595 = G__52607;
continue;
} else {
var ns_52608 = cljs.core.first.call(null,seq__52588_52602__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_52608);

var G__52609 = cljs.core.next.call(null,seq__52588_52602__$1);
var G__52610 = null;
var G__52611 = (0);
var G__52612 = (0);
seq__52588_52592 = G__52609;
chunk__52589_52593 = G__52610;
count__52590_52594 = G__52611;
i__52591_52595 = G__52612;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__45909__auto__ = goog.require__;
if(cljs.core.truth_(or__45909__auto__)){
return or__45909__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__52613__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__52613 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52614__i = 0, G__52614__a = new Array(arguments.length -  0);
while (G__52614__i < G__52614__a.length) {G__52614__a[G__52614__i] = arguments[G__52614__i + 0]; ++G__52614__i;}
  args = new cljs.core.IndexedSeq(G__52614__a,0,null);
} 
return G__52613__delegate.call(this,args);};
G__52613.cljs$lang$maxFixedArity = 0;
G__52613.cljs$lang$applyTo = (function (arglist__52615){
var args = cljs.core.seq(arglist__52615);
return G__52613__delegate(args);
});
G__52613.cljs$core$IFn$_invoke$arity$variadic = G__52613__delegate;
return G__52613;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__52616 = cljs.core._EQ_;
var expr__52617 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__52616.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__52617))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__52616,expr__52617){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__52616,expr__52617))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__52616,expr__52617){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e52619){if((e52619 instanceof Error)){
var e = e52619;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e52619;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__52616,expr__52617))
} else {
if(cljs.core.truth_(pred__52616.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__52617))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__52616.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__52617))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__52616.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__52617))){
return ((function (pred__52616,expr__52617){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e52620){if((e52620 instanceof Error)){
var e = e52620;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e52620;

}
}})());
});
;})(pred__52616,expr__52617))
} else {
return ((function (pred__52616,expr__52617){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__52616,expr__52617))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__52621,callback){
var map__52622 = p__52621;
var map__52622__$1 = ((((!((map__52622 == null)))?((((map__52622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52622.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52622):map__52622);
var file_msg = map__52622__$1;
var request_url = cljs.core.get.call(null,map__52622__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__52622,map__52622__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__52622,map__52622__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__48989__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48989__auto__){
return (function (){
var f__48990__auto__ = (function (){var switch__48901__auto__ = ((function (c__48989__auto__){
return (function (state_52646){
var state_val_52647 = (state_52646[(1)]);
if((state_val_52647 === (7))){
var inst_52642 = (state_52646[(2)]);
var state_52646__$1 = state_52646;
var statearr_52648_52665 = state_52646__$1;
(statearr_52648_52665[(2)] = inst_52642);

(statearr_52648_52665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52647 === (1))){
var state_52646__$1 = state_52646;
var statearr_52649_52666 = state_52646__$1;
(statearr_52649_52666[(2)] = null);

(statearr_52649_52666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52647 === (4))){
var inst_52626 = (state_52646[(7)]);
var inst_52626__$1 = (state_52646[(2)]);
var state_52646__$1 = (function (){var statearr_52650 = state_52646;
(statearr_52650[(7)] = inst_52626__$1);

return statearr_52650;
})();
if(cljs.core.truth_(inst_52626__$1)){
var statearr_52651_52667 = state_52646__$1;
(statearr_52651_52667[(1)] = (5));

} else {
var statearr_52652_52668 = state_52646__$1;
(statearr_52652_52668[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52647 === (6))){
var state_52646__$1 = state_52646;
var statearr_52653_52669 = state_52646__$1;
(statearr_52653_52669[(2)] = null);

(statearr_52653_52669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52647 === (3))){
var inst_52644 = (state_52646[(2)]);
var state_52646__$1 = state_52646;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52646__$1,inst_52644);
} else {
if((state_val_52647 === (2))){
var state_52646__$1 = state_52646;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52646__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_52647 === (11))){
var inst_52638 = (state_52646[(2)]);
var state_52646__$1 = (function (){var statearr_52654 = state_52646;
(statearr_52654[(8)] = inst_52638);

return statearr_52654;
})();
var statearr_52655_52670 = state_52646__$1;
(statearr_52655_52670[(2)] = null);

(statearr_52655_52670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52647 === (9))){
var inst_52632 = (state_52646[(9)]);
var inst_52630 = (state_52646[(10)]);
var inst_52634 = inst_52632.call(null,inst_52630);
var state_52646__$1 = state_52646;
var statearr_52656_52671 = state_52646__$1;
(statearr_52656_52671[(2)] = inst_52634);

(statearr_52656_52671[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52647 === (5))){
var inst_52626 = (state_52646[(7)]);
var inst_52628 = figwheel.client.file_reloading.blocking_load.call(null,inst_52626);
var state_52646__$1 = state_52646;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52646__$1,(8),inst_52628);
} else {
if((state_val_52647 === (10))){
var inst_52630 = (state_52646[(10)]);
var inst_52636 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_52630);
var state_52646__$1 = state_52646;
var statearr_52657_52672 = state_52646__$1;
(statearr_52657_52672[(2)] = inst_52636);

(statearr_52657_52672[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52647 === (8))){
var inst_52632 = (state_52646[(9)]);
var inst_52626 = (state_52646[(7)]);
var inst_52630 = (state_52646[(2)]);
var inst_52631 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_52632__$1 = cljs.core.get.call(null,inst_52631,inst_52626);
var state_52646__$1 = (function (){var statearr_52658 = state_52646;
(statearr_52658[(9)] = inst_52632__$1);

(statearr_52658[(10)] = inst_52630);

return statearr_52658;
})();
if(cljs.core.truth_(inst_52632__$1)){
var statearr_52659_52673 = state_52646__$1;
(statearr_52659_52673[(1)] = (9));

} else {
var statearr_52660_52674 = state_52646__$1;
(statearr_52660_52674[(1)] = (10));

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
});})(c__48989__auto__))
;
return ((function (switch__48901__auto__,c__48989__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__48902__auto__ = null;
var figwheel$client$file_reloading$state_machine__48902__auto____0 = (function (){
var statearr_52661 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52661[(0)] = figwheel$client$file_reloading$state_machine__48902__auto__);

(statearr_52661[(1)] = (1));

return statearr_52661;
});
var figwheel$client$file_reloading$state_machine__48902__auto____1 = (function (state_52646){
while(true){
var ret_value__48903__auto__ = (function (){try{while(true){
var result__48904__auto__ = switch__48901__auto__.call(null,state_52646);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48904__auto__;
}
break;
}
}catch (e52662){if((e52662 instanceof Object)){
var ex__48905__auto__ = e52662;
var statearr_52663_52675 = state_52646;
(statearr_52663_52675[(5)] = ex__48905__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52646);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52662;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52676 = state_52646;
state_52646 = G__52676;
continue;
} else {
return ret_value__48903__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__48902__auto__ = function(state_52646){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__48902__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__48902__auto____1.call(this,state_52646);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__48902__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__48902__auto____0;
figwheel$client$file_reloading$state_machine__48902__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__48902__auto____1;
return figwheel$client$file_reloading$state_machine__48902__auto__;
})()
;})(switch__48901__auto__,c__48989__auto__))
})();
var state__48991__auto__ = (function (){var statearr_52664 = f__48990__auto__.call(null);
(statearr_52664[(6)] = c__48989__auto__);

return statearr_52664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48991__auto__);
});})(c__48989__auto__))
);

return c__48989__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__52677,callback){
var map__52678 = p__52677;
var map__52678__$1 = ((((!((map__52678 == null)))?((((map__52678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52678.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52678):map__52678);
var file_msg = map__52678__$1;
var namespace = cljs.core.get.call(null,map__52678__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__52678,map__52678__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__52678,map__52678__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__52680){
var map__52681 = p__52680;
var map__52681__$1 = ((((!((map__52681 == null)))?((((map__52681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52681.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52681):map__52681);
var file_msg = map__52681__$1;
var namespace = cljs.core.get.call(null,map__52681__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__52683){
var map__52684 = p__52683;
var map__52684__$1 = ((((!((map__52684 == null)))?((((map__52684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52684.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52684):map__52684);
var file_msg = map__52684__$1;
var namespace = cljs.core.get.call(null,map__52684__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__45897__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__45897__auto__){
var or__45909__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__45909__auto__)){
return or__45909__auto__;
} else {
var or__45909__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__45909__auto____$1)){
return or__45909__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__45897__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__52686,callback){
var map__52687 = p__52686;
var map__52687__$1 = ((((!((map__52687 == null)))?((((map__52687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52687.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52687):map__52687);
var file_msg = map__52687__$1;
var request_url = cljs.core.get.call(null,map__52687__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__52687__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not trying to load file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__48989__auto___52737 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48989__auto___52737,out){
return (function (){
var f__48990__auto__ = (function (){var switch__48901__auto__ = ((function (c__48989__auto___52737,out){
return (function (state_52722){
var state_val_52723 = (state_52722[(1)]);
if((state_val_52723 === (1))){
var inst_52696 = cljs.core.seq.call(null,files);
var inst_52697 = cljs.core.first.call(null,inst_52696);
var inst_52698 = cljs.core.next.call(null,inst_52696);
var inst_52699 = files;
var state_52722__$1 = (function (){var statearr_52724 = state_52722;
(statearr_52724[(7)] = inst_52697);

(statearr_52724[(8)] = inst_52698);

(statearr_52724[(9)] = inst_52699);

return statearr_52724;
})();
var statearr_52725_52738 = state_52722__$1;
(statearr_52725_52738[(2)] = null);

(statearr_52725_52738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52723 === (2))){
var inst_52705 = (state_52722[(10)]);
var inst_52699 = (state_52722[(9)]);
var inst_52704 = cljs.core.seq.call(null,inst_52699);
var inst_52705__$1 = cljs.core.first.call(null,inst_52704);
var inst_52706 = cljs.core.next.call(null,inst_52704);
var inst_52707 = (inst_52705__$1 == null);
var inst_52708 = cljs.core.not.call(null,inst_52707);
var state_52722__$1 = (function (){var statearr_52726 = state_52722;
(statearr_52726[(10)] = inst_52705__$1);

(statearr_52726[(11)] = inst_52706);

return statearr_52726;
})();
if(inst_52708){
var statearr_52727_52739 = state_52722__$1;
(statearr_52727_52739[(1)] = (4));

} else {
var statearr_52728_52740 = state_52722__$1;
(statearr_52728_52740[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52723 === (3))){
var inst_52720 = (state_52722[(2)]);
var state_52722__$1 = state_52722;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52722__$1,inst_52720);
} else {
if((state_val_52723 === (4))){
var inst_52705 = (state_52722[(10)]);
var inst_52710 = figwheel.client.file_reloading.reload_js_file.call(null,inst_52705);
var state_52722__$1 = state_52722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52722__$1,(7),inst_52710);
} else {
if((state_val_52723 === (5))){
var inst_52716 = cljs.core.async.close_BANG_.call(null,out);
var state_52722__$1 = state_52722;
var statearr_52729_52741 = state_52722__$1;
(statearr_52729_52741[(2)] = inst_52716);

(statearr_52729_52741[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52723 === (6))){
var inst_52718 = (state_52722[(2)]);
var state_52722__$1 = state_52722;
var statearr_52730_52742 = state_52722__$1;
(statearr_52730_52742[(2)] = inst_52718);

(statearr_52730_52742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52723 === (7))){
var inst_52706 = (state_52722[(11)]);
var inst_52712 = (state_52722[(2)]);
var inst_52713 = cljs.core.async.put_BANG_.call(null,out,inst_52712);
var inst_52699 = inst_52706;
var state_52722__$1 = (function (){var statearr_52731 = state_52722;
(statearr_52731[(12)] = inst_52713);

(statearr_52731[(9)] = inst_52699);

return statearr_52731;
})();
var statearr_52732_52743 = state_52722__$1;
(statearr_52732_52743[(2)] = null);

(statearr_52732_52743[(1)] = (2));


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
});})(c__48989__auto___52737,out))
;
return ((function (switch__48901__auto__,c__48989__auto___52737,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__48902__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__48902__auto____0 = (function (){
var statearr_52733 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52733[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__48902__auto__);

(statearr_52733[(1)] = (1));

return statearr_52733;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__48902__auto____1 = (function (state_52722){
while(true){
var ret_value__48903__auto__ = (function (){try{while(true){
var result__48904__auto__ = switch__48901__auto__.call(null,state_52722);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48904__auto__;
}
break;
}
}catch (e52734){if((e52734 instanceof Object)){
var ex__48905__auto__ = e52734;
var statearr_52735_52744 = state_52722;
(statearr_52735_52744[(5)] = ex__48905__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52734;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52745 = state_52722;
state_52722 = G__52745;
continue;
} else {
return ret_value__48903__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__48902__auto__ = function(state_52722){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__48902__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__48902__auto____1.call(this,state_52722);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__48902__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__48902__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__48902__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__48902__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__48902__auto__;
})()
;})(switch__48901__auto__,c__48989__auto___52737,out))
})();
var state__48991__auto__ = (function (){var statearr_52736 = f__48990__auto__.call(null);
(statearr_52736[(6)] = c__48989__auto___52737);

return statearr_52736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48991__auto__);
});})(c__48989__auto___52737,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__52746,opts){
var map__52747 = p__52746;
var map__52747__$1 = ((((!((map__52747 == null)))?((((map__52747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52747.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52747):map__52747);
var eval_body = cljs.core.get.call(null,map__52747__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__52747__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__45897__auto__ = eval_body;
if(cljs.core.truth_(and__45897__auto__)){
return typeof eval_body === 'string';
} else {
return and__45897__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e52749){var e = e52749;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to evaluate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__52750_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__52750_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__52751){
var vec__52752 = p__52751;
var k = cljs.core.nth.call(null,vec__52752,(0),null);
var v = cljs.core.nth.call(null,vec__52752,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__52755){
var vec__52756 = p__52755;
var k = cljs.core.nth.call(null,vec__52756,(0),null);
var v = cljs.core.nth.call(null,vec__52756,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__52762,p__52763){
var map__52764 = p__52762;
var map__52764__$1 = ((((!((map__52764 == null)))?((((map__52764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52764.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52764):map__52764);
var opts = map__52764__$1;
var before_jsload = cljs.core.get.call(null,map__52764__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__52764__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__52764__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__52765 = p__52763;
var map__52765__$1 = ((((!((map__52765 == null)))?((((map__52765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52765.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52765):map__52765);
var msg = map__52765__$1;
var files = cljs.core.get.call(null,map__52765__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__52765__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__52765__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__48989__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48989__auto__,map__52764,map__52764__$1,opts,before_jsload,on_jsload,reload_dependents,map__52765,map__52765__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__48990__auto__ = (function (){var switch__48901__auto__ = ((function (c__48989__auto__,map__52764,map__52764__$1,opts,before_jsload,on_jsload,reload_dependents,map__52765,map__52765__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_52919){
var state_val_52920 = (state_52919[(1)]);
if((state_val_52920 === (7))){
var inst_52779 = (state_52919[(7)]);
var inst_52781 = (state_52919[(8)]);
var inst_52780 = (state_52919[(9)]);
var inst_52782 = (state_52919[(10)]);
var inst_52787 = cljs.core._nth.call(null,inst_52780,inst_52782);
var inst_52788 = figwheel.client.file_reloading.eval_body.call(null,inst_52787,opts);
var inst_52789 = (inst_52782 + (1));
var tmp52921 = inst_52779;
var tmp52922 = inst_52781;
var tmp52923 = inst_52780;
var inst_52779__$1 = tmp52921;
var inst_52780__$1 = tmp52923;
var inst_52781__$1 = tmp52922;
var inst_52782__$1 = inst_52789;
var state_52919__$1 = (function (){var statearr_52924 = state_52919;
(statearr_52924[(7)] = inst_52779__$1);

(statearr_52924[(8)] = inst_52781__$1);

(statearr_52924[(11)] = inst_52788);

(statearr_52924[(9)] = inst_52780__$1);

(statearr_52924[(10)] = inst_52782__$1);

return statearr_52924;
})();
var statearr_52925_53008 = state_52919__$1;
(statearr_52925_53008[(2)] = null);

(statearr_52925_53008[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52920 === (20))){
var inst_52822 = (state_52919[(12)]);
var inst_52830 = figwheel.client.file_reloading.sort_files.call(null,inst_52822);
var state_52919__$1 = state_52919;
var statearr_52926_53009 = state_52919__$1;
(statearr_52926_53009[(2)] = inst_52830);

(statearr_52926_53009[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52920 === (27))){
var state_52919__$1 = state_52919;
var statearr_52927_53010 = state_52919__$1;
(statearr_52927_53010[(2)] = null);

(statearr_52927_53010[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52920 === (1))){
var inst_52771 = (state_52919[(13)]);
var inst_52768 = before_jsload.call(null,files);
var inst_52769 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_52770 = (function (){return ((function (inst_52771,inst_52768,inst_52769,state_val_52920,c__48989__auto__,map__52764,map__52764__$1,opts,before_jsload,on_jsload,reload_dependents,map__52765,map__52765__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__52759_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__52759_SHARP_);
});
;})(inst_52771,inst_52768,inst_52769,state_val_52920,c__48989__auto__,map__52764,map__52764__$1,opts,before_jsload,on_jsload,reload_dependents,map__52765,map__52765__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52771__$1 = cljs.core.filter.call(null,inst_52770,files);
var inst_52772 = cljs.core.not_empty.call(null,inst_52771__$1);
var state_52919__$1 = (function (){var statearr_52928 = state_52919;
(statearr_52928[(14)] = inst_52769);

(statearr_52928[(15)] = inst_52768);

(statearr_52928[(13)] = inst_52771__$1);

return statearr_52928;
})();
if(cljs.core.truth_(inst_52772)){
var statearr_52929_53011 = state_52919__$1;
(statearr_52929_53011[(1)] = (2));

} else {
var statearr_52930_53012 = state_52919__$1;
(statearr_52930_53012[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52920 === (24))){
var state_52919__$1 = state_52919;
var statearr_52931_53013 = state_52919__$1;
(statearr_52931_53013[(2)] = null);

(statearr_52931_53013[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52920 === (39))){
var inst_52872 = (state_52919[(16)]);
var state_52919__$1 = state_52919;
var statearr_52932_53014 = state_52919__$1;
(statearr_52932_53014[(2)] = inst_52872);

(statearr_52932_53014[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52920 === (46))){
var inst_52914 = (state_52919[(2)]);
var state_52919__$1 = state_52919;
var statearr_52933_53015 = state_52919__$1;
(statearr_52933_53015[(2)] = inst_52914);

(statearr_52933_53015[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52920 === (4))){
var inst_52816 = (state_52919[(2)]);
var inst_52817 = cljs.core.List.EMPTY;
var inst_52818 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_52817);
var inst_52819 = (function (){return ((function (inst_52816,inst_52817,inst_52818,state_val_52920,c__48989__auto__,map__52764,map__52764__$1,opts,before_jsload,on_jsload,reload_dependents,map__52765,map__52765__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__52760_SHARP_){
var and__45897__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__52760_SHARP_);
if(cljs.core.truth_(and__45897__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__52760_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__52760_SHARP_)));
} else {
return and__45897__auto__;
}
});
;})(inst_52816,inst_52817,inst_52818,state_val_52920,c__48989__auto__,map__52764,map__52764__$1,opts,before_jsload,on_jsload,reload_dependents,map__52765,map__52765__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52820 = cljs.core.filter.call(null,inst_52819,files);
var inst_52821 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_52822 = cljs.core.concat.call(null,inst_52820,inst_52821);
var state_52919__$1 = (function (){var statearr_52934 = state_52919;
(statearr_52934[(17)] = inst_52816);

(statearr_52934[(18)] = inst_52818);

(statearr_52934[(12)] = inst_52822);

return statearr_52934;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_52935_53016 = state_52919__$1;
(statearr_52935_53016[(1)] = (16));

} else {
var statearr_52936_53017 = state_52919__$1;
(statearr_52936_53017[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52920 === (15))){
var inst_52806 = (state_52919[(2)]);
var state_52919__$1 = state_52919;
var statearr_52937_53018 = state_52919__$1;
(statearr_52937_53018[(2)] = inst_52806);

(statearr_52937_53018[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52920 === (21))){
var inst_52832 = (state_52919[(19)]);
var inst_52832__$1 = (state_52919[(2)]);
var inst_52833 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_52832__$1);
var state_52919__$1 = (function (){var statearr_52938 = state_52919;
(statearr_52938[(19)] = inst_52832__$1);

return statearr_52938;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52919__$1,(22),inst_52833);
} else {
if((state_val_52920 === (31))){
var inst_52917 = (state_52919[(2)]);
var state_52919__$1 = state_52919;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52919__$1,inst_52917);
} else {
if((state_val_52920 === (32))){
var inst_52872 = (state_52919[(16)]);
var inst_52877 = inst_52872.cljs$lang$protocol_mask$partition0$;
var inst_52878 = (inst_52877 & (64));
var inst_52879 = inst_52872.cljs$core$ISeq$;
var inst_52880 = (cljs.core.PROTOCOL_SENTINEL === inst_52879);
var inst_52881 = (inst_52878) || (inst_52880);
var state_52919__$1 = state_52919;
if(cljs.core.truth_(inst_52881)){
var statearr_52939_53019 = state_52919__$1;
(statearr_52939_53019[(1)] = (35));

} else {
var statearr_52940_53020 = state_52919__$1;
(statearr_52940_53020[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52920 === (40))){
var inst_52894 = (state_52919[(20)]);
var inst_52893 = (state_52919[(2)]);
var inst_52894__$1 = cljs.core.get.call(null,inst_52893,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_52895 = cljs.core.get.call(null,inst_52893,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_52896 = cljs.core.not_empty.call(null,inst_52894__$1);
var state_52919__$1 = (function (){var statearr_52941 = state_52919;
(statearr_52941[(21)] = inst_52895);

(statearr_52941[(20)] = inst_52894__$1);

return statearr_52941;
})();
if(cljs.core.truth_(inst_52896)){
var statearr_52942_53021 = state_52919__$1;
(statearr_52942_53021[(1)] = (41));

} else {
var statearr_52943_53022 = state_52919__$1;
(statearr_52943_53022[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52920 === (33))){
var state_52919__$1 = state_52919;
var statearr_52944_53023 = state_52919__$1;
(statearr_52944_53023[(2)] = false);

(statearr_52944_53023[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52920 === (13))){
var inst_52792 = (state_52919[(22)]);
var inst_52796 = cljs.core.chunk_first.call(null,inst_52792);
var inst_52797 = cljs.core.chunk_rest.call(null,inst_52792);
var inst_52798 = cljs.core.count.call(null,inst_52796);
var inst_52779 = inst_52797;
var inst_52780 = inst_52796;
var inst_52781 = inst_52798;
var inst_52782 = (0);
var state_52919__$1 = (function (){var statearr_52945 = state_52919;
(statearr_52945[(7)] = inst_52779);

(statearr_52945[(8)] = inst_52781);

(statearr_52945[(9)] = inst_52780);

(statearr_52945[(10)] = inst_52782);

return statearr_52945;
})();
var statearr_52946_53024 = state_52919__$1;
(statearr_52946_53024[(2)] = null);

(statearr_52946_53024[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52920 === (22))){
var inst_52835 = (state_52919[(23)]);
var inst_52836 = (state_52919[(24)]);
var inst_52832 = (state_52919[(19)]);
var inst_52840 = (state_52919[(25)]);
var inst_52835__$1 = (state_52919[(2)]);
var inst_52836__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_52835__$1);
var inst_52837 = (function (){var all_files = inst_52832;
var res_SINGLEQUOTE_ = inst_52835__$1;
var res = inst_52836__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_52835,inst_52836,inst_52832,inst_52840,inst_52835__$1,inst_52836__$1,state_val_52920,c__48989__auto__,map__52764,map__52764__$1,opts,before_jsload,on_jsload,reload_dependents,map__52765,map__52765__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__52761_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__52761_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_52835,inst_52836,inst_52832,inst_52840,inst_52835__$1,inst_52836__$1,state_val_52920,c__48989__auto__,map__52764,map__52764__$1,opts,before_jsload,on_jsload,reload_dependents,map__52765,map__52765__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52838 = cljs.core.filter.call(null,inst_52837,inst_52835__$1);
var inst_52839 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_52840__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_52839);
var inst_52841 = cljs.core.not_empty.call(null,inst_52840__$1);
var state_52919__$1 = (function (){var statearr_52947 = state_52919;
(statearr_52947[(23)] = inst_52835__$1);

(statearr_52947[(24)] = inst_52836__$1);

(statearr_52947[(26)] = inst_52838);

(statearr_52947[(25)] = inst_52840__$1);

return statearr_52947;
})();
if(cljs.core.truth_(inst_52841)){
var statearr_52948_53025 = state_52919__$1;
(statearr_52948_53025[(1)] = (23));

} else {
var statearr_52949_53026 = state_52919__$1;
(statearr_52949_53026[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52920 === (36))){
var state_52919__$1 = state_52919;
var statearr_52950_53027 = state_52919__$1;
(statearr_52950_53027[(2)] = false);

(statearr_52950_53027[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52920 === (41))){
var inst_52894 = (state_52919[(20)]);
var inst_52898 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_52899 = cljs.core.map.call(null,inst_52898,inst_52894);
var inst_52900 = cljs.core.pr_str.call(null,inst_52899);
var inst_52901 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_52900)].join('');
var inst_52902 = figwheel.client.utils.log.call(null,inst_52901);
var state_52919__$1 = state_52919;
var statearr_52951_53028 = state_52919__$1;
(statearr_52951_53028[(2)] = inst_52902);

(statearr_52951_53028[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52920 === (43))){
var inst_52895 = (state_52919[(21)]);
var inst_52905 = (state_52919[(2)]);
var inst_52906 = cljs.core.not_empty.call(null,inst_52895);
var state_52919__$1 = (function (){var statearr_52952 = state_52919;
(statearr_52952[(27)] = inst_52905);

return statearr_52952;
})();
if(cljs.core.truth_(inst_52906)){
var statearr_52953_53029 = state_52919__$1;
(statearr_52953_53029[(1)] = (44));

} else {
var statearr_52954_53030 = state_52919__$1;
(statearr_52954_53030[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52920 === (29))){
var inst_52872 = (state_52919[(16)]);
var inst_52835 = (state_52919[(23)]);
var inst_52836 = (state_52919[(24)]);
var inst_52832 = (state_52919[(19)]);
var inst_52838 = (state_52919[(26)]);
var inst_52840 = (state_52919[(25)]);
var inst_52868 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_52871 = (function (){var all_files = inst_52832;
var res_SINGLEQUOTE_ = inst_52835;
var res = inst_52836;
var files_not_loaded = inst_52838;
var dependencies_that_loaded = inst_52840;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52872,inst_52835,inst_52836,inst_52832,inst_52838,inst_52840,inst_52868,state_val_52920,c__48989__auto__,map__52764,map__52764__$1,opts,before_jsload,on_jsload,reload_dependents,map__52765,map__52765__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__52870){
var map__52955 = p__52870;
var map__52955__$1 = ((((!((map__52955 == null)))?((((map__52955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52955.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52955):map__52955);
var namespace = cljs.core.get.call(null,map__52955__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52872,inst_52835,inst_52836,inst_52832,inst_52838,inst_52840,inst_52868,state_val_52920,c__48989__auto__,map__52764,map__52764__$1,opts,before_jsload,on_jsload,reload_dependents,map__52765,map__52765__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52872__$1 = cljs.core.group_by.call(null,inst_52871,inst_52838);
var inst_52874 = (inst_52872__$1 == null);
var inst_52875 = cljs.core.not.call(null,inst_52874);
var state_52919__$1 = (function (){var statearr_52957 = state_52919;
(statearr_52957[(28)] = inst_52868);

(statearr_52957[(16)] = inst_52872__$1);

return statearr_52957;
})();
if(inst_52875){
var statearr_52958_53031 = state_52919__$1;
(statearr_52958_53031[(1)] = (32));

} else {
var statearr_52959_53032 = state_52919__$1;
(statearr_52959_53032[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52920 === (44))){
var inst_52895 = (state_52919[(21)]);
var inst_52908 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_52895);
var inst_52909 = cljs.core.pr_str.call(null,inst_52908);
var inst_52910 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_52909)].join('');
var inst_52911 = figwheel.client.utils.log.call(null,inst_52910);
var state_52919__$1 = state_52919;
var statearr_52960_53033 = state_52919__$1;
(statearr_52960_53033[(2)] = inst_52911);

(statearr_52960_53033[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52920 === (6))){
var inst_52813 = (state_52919[(2)]);
var state_52919__$1 = state_52919;
var statearr_52961_53034 = state_52919__$1;
(statearr_52961_53034[(2)] = inst_52813);

(statearr_52961_53034[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52920 === (28))){
var inst_52838 = (state_52919[(26)]);
var inst_52865 = (state_52919[(2)]);
var inst_52866 = cljs.core.not_empty.call(null,inst_52838);
var state_52919__$1 = (function (){var statearr_52962 = state_52919;
(statearr_52962[(29)] = inst_52865);

return statearr_52962;
})();
if(cljs.core.truth_(inst_52866)){
var statearr_52963_53035 = state_52919__$1;
(statearr_52963_53035[(1)] = (29));

} else {
var statearr_52964_53036 = state_52919__$1;
(statearr_52964_53036[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52920 === (25))){
var inst_52836 = (state_52919[(24)]);
var inst_52852 = (state_52919[(2)]);
var inst_52853 = cljs.core.not_empty.call(null,inst_52836);
var state_52919__$1 = (function (){var statearr_52965 = state_52919;
(statearr_52965[(30)] = inst_52852);

return statearr_52965;
})();
if(cljs.core.truth_(inst_52853)){
var statearr_52966_53037 = state_52919__$1;
(statearr_52966_53037[(1)] = (26));

} else {
var statearr_52967_53038 = state_52919__$1;
(statearr_52967_53038[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52920 === (34))){
var inst_52888 = (state_52919[(2)]);
var state_52919__$1 = state_52919;
if(cljs.core.truth_(inst_52888)){
var statearr_52968_53039 = state_52919__$1;
(statearr_52968_53039[(1)] = (38));

} else {
var statearr_52969_53040 = state_52919__$1;
(statearr_52969_53040[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52920 === (17))){
var state_52919__$1 = state_52919;
var statearr_52970_53041 = state_52919__$1;
(statearr_52970_53041[(2)] = recompile_dependents);

(statearr_52970_53041[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52920 === (3))){
var state_52919__$1 = state_52919;
var statearr_52971_53042 = state_52919__$1;
(statearr_52971_53042[(2)] = null);

(statearr_52971_53042[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52920 === (12))){
var inst_52809 = (state_52919[(2)]);
var state_52919__$1 = state_52919;
var statearr_52972_53043 = state_52919__$1;
(statearr_52972_53043[(2)] = inst_52809);

(statearr_52972_53043[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52920 === (2))){
var inst_52771 = (state_52919[(13)]);
var inst_52778 = cljs.core.seq.call(null,inst_52771);
var inst_52779 = inst_52778;
var inst_52780 = null;
var inst_52781 = (0);
var inst_52782 = (0);
var state_52919__$1 = (function (){var statearr_52973 = state_52919;
(statearr_52973[(7)] = inst_52779);

(statearr_52973[(8)] = inst_52781);

(statearr_52973[(9)] = inst_52780);

(statearr_52973[(10)] = inst_52782);

return statearr_52973;
})();
var statearr_52974_53044 = state_52919__$1;
(statearr_52974_53044[(2)] = null);

(statearr_52974_53044[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52920 === (23))){
var inst_52835 = (state_52919[(23)]);
var inst_52836 = (state_52919[(24)]);
var inst_52832 = (state_52919[(19)]);
var inst_52838 = (state_52919[(26)]);
var inst_52840 = (state_52919[(25)]);
var inst_52843 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_52845 = (function (){var all_files = inst_52832;
var res_SINGLEQUOTE_ = inst_52835;
var res = inst_52836;
var files_not_loaded = inst_52838;
var dependencies_that_loaded = inst_52840;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52835,inst_52836,inst_52832,inst_52838,inst_52840,inst_52843,state_val_52920,c__48989__auto__,map__52764,map__52764__$1,opts,before_jsload,on_jsload,reload_dependents,map__52765,map__52765__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__52844){
var map__52975 = p__52844;
var map__52975__$1 = ((((!((map__52975 == null)))?((((map__52975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52975.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52975):map__52975);
var request_url = cljs.core.get.call(null,map__52975__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52835,inst_52836,inst_52832,inst_52838,inst_52840,inst_52843,state_val_52920,c__48989__auto__,map__52764,map__52764__$1,opts,before_jsload,on_jsload,reload_dependents,map__52765,map__52765__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52846 = cljs.core.reverse.call(null,inst_52840);
var inst_52847 = cljs.core.map.call(null,inst_52845,inst_52846);
var inst_52848 = cljs.core.pr_str.call(null,inst_52847);
var inst_52849 = figwheel.client.utils.log.call(null,inst_52848);
var state_52919__$1 = (function (){var statearr_52977 = state_52919;
(statearr_52977[(31)] = inst_52843);

return statearr_52977;
})();
var statearr_52978_53045 = state_52919__$1;
(statearr_52978_53045[(2)] = inst_52849);

(statearr_52978_53045[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52920 === (35))){
var state_52919__$1 = state_52919;
var statearr_52979_53046 = state_52919__$1;
(statearr_52979_53046[(2)] = true);

(statearr_52979_53046[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52920 === (19))){
var inst_52822 = (state_52919[(12)]);
var inst_52828 = figwheel.client.file_reloading.expand_files.call(null,inst_52822);
var state_52919__$1 = state_52919;
var statearr_52980_53047 = state_52919__$1;
(statearr_52980_53047[(2)] = inst_52828);

(statearr_52980_53047[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52920 === (11))){
var state_52919__$1 = state_52919;
var statearr_52981_53048 = state_52919__$1;
(statearr_52981_53048[(2)] = null);

(statearr_52981_53048[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52920 === (9))){
var inst_52811 = (state_52919[(2)]);
var state_52919__$1 = state_52919;
var statearr_52982_53049 = state_52919__$1;
(statearr_52982_53049[(2)] = inst_52811);

(statearr_52982_53049[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52920 === (5))){
var inst_52781 = (state_52919[(8)]);
var inst_52782 = (state_52919[(10)]);
var inst_52784 = (inst_52782 < inst_52781);
var inst_52785 = inst_52784;
var state_52919__$1 = state_52919;
if(cljs.core.truth_(inst_52785)){
var statearr_52983_53050 = state_52919__$1;
(statearr_52983_53050[(1)] = (7));

} else {
var statearr_52984_53051 = state_52919__$1;
(statearr_52984_53051[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52920 === (14))){
var inst_52792 = (state_52919[(22)]);
var inst_52801 = cljs.core.first.call(null,inst_52792);
var inst_52802 = figwheel.client.file_reloading.eval_body.call(null,inst_52801,opts);
var inst_52803 = cljs.core.next.call(null,inst_52792);
var inst_52779 = inst_52803;
var inst_52780 = null;
var inst_52781 = (0);
var inst_52782 = (0);
var state_52919__$1 = (function (){var statearr_52985 = state_52919;
(statearr_52985[(7)] = inst_52779);

(statearr_52985[(32)] = inst_52802);

(statearr_52985[(8)] = inst_52781);

(statearr_52985[(9)] = inst_52780);

(statearr_52985[(10)] = inst_52782);

return statearr_52985;
})();
var statearr_52986_53052 = state_52919__$1;
(statearr_52986_53052[(2)] = null);

(statearr_52986_53052[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52920 === (45))){
var state_52919__$1 = state_52919;
var statearr_52987_53053 = state_52919__$1;
(statearr_52987_53053[(2)] = null);

(statearr_52987_53053[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52920 === (26))){
var inst_52835 = (state_52919[(23)]);
var inst_52836 = (state_52919[(24)]);
var inst_52832 = (state_52919[(19)]);
var inst_52838 = (state_52919[(26)]);
var inst_52840 = (state_52919[(25)]);
var inst_52855 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_52857 = (function (){var all_files = inst_52832;
var res_SINGLEQUOTE_ = inst_52835;
var res = inst_52836;
var files_not_loaded = inst_52838;
var dependencies_that_loaded = inst_52840;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52835,inst_52836,inst_52832,inst_52838,inst_52840,inst_52855,state_val_52920,c__48989__auto__,map__52764,map__52764__$1,opts,before_jsload,on_jsload,reload_dependents,map__52765,map__52765__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__52856){
var map__52988 = p__52856;
var map__52988__$1 = ((((!((map__52988 == null)))?((((map__52988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52988.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52988):map__52988);
var namespace = cljs.core.get.call(null,map__52988__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__52988__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52835,inst_52836,inst_52832,inst_52838,inst_52840,inst_52855,state_val_52920,c__48989__auto__,map__52764,map__52764__$1,opts,before_jsload,on_jsload,reload_dependents,map__52765,map__52765__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52858 = cljs.core.map.call(null,inst_52857,inst_52836);
var inst_52859 = cljs.core.pr_str.call(null,inst_52858);
var inst_52860 = figwheel.client.utils.log.call(null,inst_52859);
var inst_52861 = (function (){var all_files = inst_52832;
var res_SINGLEQUOTE_ = inst_52835;
var res = inst_52836;
var files_not_loaded = inst_52838;
var dependencies_that_loaded = inst_52840;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52835,inst_52836,inst_52832,inst_52838,inst_52840,inst_52855,inst_52857,inst_52858,inst_52859,inst_52860,state_val_52920,c__48989__auto__,map__52764,map__52764__$1,opts,before_jsload,on_jsload,reload_dependents,map__52765,map__52765__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52835,inst_52836,inst_52832,inst_52838,inst_52840,inst_52855,inst_52857,inst_52858,inst_52859,inst_52860,state_val_52920,c__48989__auto__,map__52764,map__52764__$1,opts,before_jsload,on_jsload,reload_dependents,map__52765,map__52765__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52862 = setTimeout(inst_52861,(10));
var state_52919__$1 = (function (){var statearr_52990 = state_52919;
(statearr_52990[(33)] = inst_52855);

(statearr_52990[(34)] = inst_52860);

return statearr_52990;
})();
var statearr_52991_53054 = state_52919__$1;
(statearr_52991_53054[(2)] = inst_52862);

(statearr_52991_53054[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52920 === (16))){
var state_52919__$1 = state_52919;
var statearr_52992_53055 = state_52919__$1;
(statearr_52992_53055[(2)] = reload_dependents);

(statearr_52992_53055[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52920 === (38))){
var inst_52872 = (state_52919[(16)]);
var inst_52890 = cljs.core.apply.call(null,cljs.core.hash_map,inst_52872);
var state_52919__$1 = state_52919;
var statearr_52993_53056 = state_52919__$1;
(statearr_52993_53056[(2)] = inst_52890);

(statearr_52993_53056[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52920 === (30))){
var state_52919__$1 = state_52919;
var statearr_52994_53057 = state_52919__$1;
(statearr_52994_53057[(2)] = null);

(statearr_52994_53057[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52920 === (10))){
var inst_52792 = (state_52919[(22)]);
var inst_52794 = cljs.core.chunked_seq_QMARK_.call(null,inst_52792);
var state_52919__$1 = state_52919;
if(inst_52794){
var statearr_52995_53058 = state_52919__$1;
(statearr_52995_53058[(1)] = (13));

} else {
var statearr_52996_53059 = state_52919__$1;
(statearr_52996_53059[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52920 === (18))){
var inst_52826 = (state_52919[(2)]);
var state_52919__$1 = state_52919;
if(cljs.core.truth_(inst_52826)){
var statearr_52997_53060 = state_52919__$1;
(statearr_52997_53060[(1)] = (19));

} else {
var statearr_52998_53061 = state_52919__$1;
(statearr_52998_53061[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52920 === (42))){
var state_52919__$1 = state_52919;
var statearr_52999_53062 = state_52919__$1;
(statearr_52999_53062[(2)] = null);

(statearr_52999_53062[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52920 === (37))){
var inst_52885 = (state_52919[(2)]);
var state_52919__$1 = state_52919;
var statearr_53000_53063 = state_52919__$1;
(statearr_53000_53063[(2)] = inst_52885);

(statearr_53000_53063[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52920 === (8))){
var inst_52779 = (state_52919[(7)]);
var inst_52792 = (state_52919[(22)]);
var inst_52792__$1 = cljs.core.seq.call(null,inst_52779);
var state_52919__$1 = (function (){var statearr_53001 = state_52919;
(statearr_53001[(22)] = inst_52792__$1);

return statearr_53001;
})();
if(inst_52792__$1){
var statearr_53002_53064 = state_52919__$1;
(statearr_53002_53064[(1)] = (10));

} else {
var statearr_53003_53065 = state_52919__$1;
(statearr_53003_53065[(1)] = (11));

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
});})(c__48989__auto__,map__52764,map__52764__$1,opts,before_jsload,on_jsload,reload_dependents,map__52765,map__52765__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__48901__auto__,c__48989__auto__,map__52764,map__52764__$1,opts,before_jsload,on_jsload,reload_dependents,map__52765,map__52765__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__48902__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__48902__auto____0 = (function (){
var statearr_53004 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53004[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__48902__auto__);

(statearr_53004[(1)] = (1));

return statearr_53004;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__48902__auto____1 = (function (state_52919){
while(true){
var ret_value__48903__auto__ = (function (){try{while(true){
var result__48904__auto__ = switch__48901__auto__.call(null,state_52919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48904__auto__;
}
break;
}
}catch (e53005){if((e53005 instanceof Object)){
var ex__48905__auto__ = e53005;
var statearr_53006_53066 = state_52919;
(statearr_53006_53066[(5)] = ex__48905__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53005;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53067 = state_52919;
state_52919 = G__53067;
continue;
} else {
return ret_value__48903__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__48902__auto__ = function(state_52919){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__48902__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__48902__auto____1.call(this,state_52919);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__48902__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__48902__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__48902__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__48902__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__48902__auto__;
})()
;})(switch__48901__auto__,c__48989__auto__,map__52764,map__52764__$1,opts,before_jsload,on_jsload,reload_dependents,map__52765,map__52765__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__48991__auto__ = (function (){var statearr_53007 = f__48990__auto__.call(null);
(statearr_53007[(6)] = c__48989__auto__);

return statearr_53007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48991__auto__);
});})(c__48989__auto__,map__52764,map__52764__$1,opts,before_jsload,on_jsload,reload_dependents,map__52765,map__52765__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__48989__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__53070,link){
var map__53071 = p__53070;
var map__53071__$1 = ((((!((map__53071 == null)))?((((map__53071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53071.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53071):map__53071);
var file = cljs.core.get.call(null,map__53071__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__53071,map__53071__$1,file){
return (function (p1__53068_SHARP_,p2__53069_SHARP_){
if(cljs.core._EQ_.call(null,p1__53068_SHARP_,p2__53069_SHARP_)){
return p1__53068_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__53071,map__53071__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__53074){
var map__53075 = p__53074;
var map__53075__$1 = ((((!((map__53075 == null)))?((((map__53075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53075.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53075):map__53075);
var match_length = cljs.core.get.call(null,map__53075__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__53075__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__53073_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__53073_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__53077_SHARP_,p2__53078_SHARP_){
return cljs.core.assoc.call(null,p1__53077_SHARP_,cljs.core.get.call(null,p2__53078_SHARP_,key),p2__53078_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_53079 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_53079);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_53079);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__53080,p__53081){
var map__53082 = p__53080;
var map__53082__$1 = ((((!((map__53082 == null)))?((((map__53082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53082.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53082):map__53082);
var on_cssload = cljs.core.get.call(null,map__53082__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__53083 = p__53081;
var map__53083__$1 = ((((!((map__53083 == null)))?((((map__53083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53083.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53083):map__53083);
var files_msg = map__53083__$1;
var files = cljs.core.get.call(null,map__53083__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1499848598300