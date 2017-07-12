// Compiled by ClojureScript 1.9.671 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__54202){
var map__54203 = p__54202;
var map__54203__$1 = ((((!((map__54203 == null)))?((((map__54203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54203.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54203):map__54203);
var m = map__54203__$1;
var n = cljs.core.get.call(null,map__54203__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__54203__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__54205_54227 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__54206_54228 = null;
var count__54207_54229 = (0);
var i__54208_54230 = (0);
while(true){
if((i__54208_54230 < count__54207_54229)){
var f_54231 = cljs.core._nth.call(null,chunk__54206_54228,i__54208_54230);
cljs.core.println.call(null,"  ",f_54231);

var G__54232 = seq__54205_54227;
var G__54233 = chunk__54206_54228;
var G__54234 = count__54207_54229;
var G__54235 = (i__54208_54230 + (1));
seq__54205_54227 = G__54232;
chunk__54206_54228 = G__54233;
count__54207_54229 = G__54234;
i__54208_54230 = G__54235;
continue;
} else {
var temp__4657__auto___54236 = cljs.core.seq.call(null,seq__54205_54227);
if(temp__4657__auto___54236){
var seq__54205_54237__$1 = temp__4657__auto___54236;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54205_54237__$1)){
var c__46729__auto___54238 = cljs.core.chunk_first.call(null,seq__54205_54237__$1);
var G__54239 = cljs.core.chunk_rest.call(null,seq__54205_54237__$1);
var G__54240 = c__46729__auto___54238;
var G__54241 = cljs.core.count.call(null,c__46729__auto___54238);
var G__54242 = (0);
seq__54205_54227 = G__54239;
chunk__54206_54228 = G__54240;
count__54207_54229 = G__54241;
i__54208_54230 = G__54242;
continue;
} else {
var f_54243 = cljs.core.first.call(null,seq__54205_54237__$1);
cljs.core.println.call(null,"  ",f_54243);

var G__54244 = cljs.core.next.call(null,seq__54205_54237__$1);
var G__54245 = null;
var G__54246 = (0);
var G__54247 = (0);
seq__54205_54227 = G__54244;
chunk__54206_54228 = G__54245;
count__54207_54229 = G__54246;
i__54208_54230 = G__54247;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_54248 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__45909__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__45909__auto__)){
return or__45909__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_54248);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_54248)))?cljs.core.second.call(null,arglists_54248):arglists_54248));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__54209_54249 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__54210_54250 = null;
var count__54211_54251 = (0);
var i__54212_54252 = (0);
while(true){
if((i__54212_54252 < count__54211_54251)){
var vec__54213_54253 = cljs.core._nth.call(null,chunk__54210_54250,i__54212_54252);
var name_54254 = cljs.core.nth.call(null,vec__54213_54253,(0),null);
var map__54216_54255 = cljs.core.nth.call(null,vec__54213_54253,(1),null);
var map__54216_54256__$1 = ((((!((map__54216_54255 == null)))?((((map__54216_54255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54216_54255.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54216_54255):map__54216_54255);
var doc_54257 = cljs.core.get.call(null,map__54216_54256__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_54258 = cljs.core.get.call(null,map__54216_54256__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_54254);

cljs.core.println.call(null," ",arglists_54258);

if(cljs.core.truth_(doc_54257)){
cljs.core.println.call(null," ",doc_54257);
} else {
}

var G__54259 = seq__54209_54249;
var G__54260 = chunk__54210_54250;
var G__54261 = count__54211_54251;
var G__54262 = (i__54212_54252 + (1));
seq__54209_54249 = G__54259;
chunk__54210_54250 = G__54260;
count__54211_54251 = G__54261;
i__54212_54252 = G__54262;
continue;
} else {
var temp__4657__auto___54263 = cljs.core.seq.call(null,seq__54209_54249);
if(temp__4657__auto___54263){
var seq__54209_54264__$1 = temp__4657__auto___54263;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54209_54264__$1)){
var c__46729__auto___54265 = cljs.core.chunk_first.call(null,seq__54209_54264__$1);
var G__54266 = cljs.core.chunk_rest.call(null,seq__54209_54264__$1);
var G__54267 = c__46729__auto___54265;
var G__54268 = cljs.core.count.call(null,c__46729__auto___54265);
var G__54269 = (0);
seq__54209_54249 = G__54266;
chunk__54210_54250 = G__54267;
count__54211_54251 = G__54268;
i__54212_54252 = G__54269;
continue;
} else {
var vec__54218_54270 = cljs.core.first.call(null,seq__54209_54264__$1);
var name_54271 = cljs.core.nth.call(null,vec__54218_54270,(0),null);
var map__54221_54272 = cljs.core.nth.call(null,vec__54218_54270,(1),null);
var map__54221_54273__$1 = ((((!((map__54221_54272 == null)))?((((map__54221_54272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54221_54272.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54221_54272):map__54221_54272);
var doc_54274 = cljs.core.get.call(null,map__54221_54273__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_54275 = cljs.core.get.call(null,map__54221_54273__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_54271);

cljs.core.println.call(null," ",arglists_54275);

if(cljs.core.truth_(doc_54274)){
cljs.core.println.call(null," ",doc_54274);
} else {
}

var G__54276 = cljs.core.next.call(null,seq__54209_54264__$1);
var G__54277 = null;
var G__54278 = (0);
var G__54279 = (0);
seq__54209_54249 = G__54276;
chunk__54210_54250 = G__54277;
count__54211_54251 = G__54278;
i__54212_54252 = G__54279;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__54223 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__54224 = null;
var count__54225 = (0);
var i__54226 = (0);
while(true){
if((i__54226 < count__54225)){
var role = cljs.core._nth.call(null,chunk__54224,i__54226);
var temp__4657__auto___54280__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___54280__$1)){
var spec_54281 = temp__4657__auto___54280__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_54281));
} else {
}

var G__54282 = seq__54223;
var G__54283 = chunk__54224;
var G__54284 = count__54225;
var G__54285 = (i__54226 + (1));
seq__54223 = G__54282;
chunk__54224 = G__54283;
count__54225 = G__54284;
i__54226 = G__54285;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__54223);
if(temp__4657__auto____$1){
var seq__54223__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54223__$1)){
var c__46729__auto__ = cljs.core.chunk_first.call(null,seq__54223__$1);
var G__54286 = cljs.core.chunk_rest.call(null,seq__54223__$1);
var G__54287 = c__46729__auto__;
var G__54288 = cljs.core.count.call(null,c__46729__auto__);
var G__54289 = (0);
seq__54223 = G__54286;
chunk__54224 = G__54287;
count__54225 = G__54288;
i__54226 = G__54289;
continue;
} else {
var role = cljs.core.first.call(null,seq__54223__$1);
var temp__4657__auto___54290__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___54290__$2)){
var spec_54291 = temp__4657__auto___54290__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_54291));
} else {
}

var G__54292 = cljs.core.next.call(null,seq__54223__$1);
var G__54293 = null;
var G__54294 = (0);
var G__54295 = (0);
seq__54223 = G__54292;
chunk__54224 = G__54293;
count__54225 = G__54294;
i__54226 = G__54295;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1499848605605