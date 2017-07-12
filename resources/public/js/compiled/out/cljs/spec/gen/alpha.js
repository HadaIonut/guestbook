// Compiled by ClojureScript 1.9.671 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__46520__auto__,writer__46521__auto__,opt__46522__auto__){
return cljs.core._write.call(null,writer__46521__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__47041__auto__ = [];
var len__47034__auto___53149 = arguments.length;
var i__47035__auto___53150 = (0);
while(true){
if((i__47035__auto___53150 < len__47034__auto___53149)){
args__47041__auto__.push((arguments[i__47035__auto___53150]));

var G__53151 = (i__47035__auto___53150 + (1));
i__47035__auto___53150 = G__53151;
continue;
} else {
}
break;
}

var argseq__47042__auto__ = ((((0) < args__47041__auto__.length))?(new cljs.core.IndexedSeq(args__47041__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__47042__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq53148){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53148));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__47041__auto__ = [];
var len__47034__auto___53153 = arguments.length;
var i__47035__auto___53154 = (0);
while(true){
if((i__47035__auto___53154 < len__47034__auto___53153)){
args__47041__auto__.push((arguments[i__47035__auto___53154]));

var G__53155 = (i__47035__auto___53154 + (1));
i__47035__auto___53154 = G__53155;
continue;
} else {
}
break;
}

var argseq__47042__auto__ = ((((0) < args__47041__auto__.length))?(new cljs.core.IndexedSeq(args__47041__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__47042__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq53152){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53152));
});

var g_QMARK__53156 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_53157 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__53156){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__53156))
,null));
var mkg_53158 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__53156,g_53157){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__53156,g_53157))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__53156,g_53157,mkg_53158){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__53156).call(null,x);
});})(g_QMARK__53156,g_53157,mkg_53158))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__53156,g_53157,mkg_53158){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_53158).call(null,gfn);
});})(g_QMARK__53156,g_53157,mkg_53158))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__53156,g_53157,mkg_53158){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_53157).call(null,generator);
});})(g_QMARK__53156,g_53157,mkg_53158))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__53120__auto___53178 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__53120__auto___53178){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__47041__auto__ = [];
var len__47034__auto___53179 = arguments.length;
var i__47035__auto___53180 = (0);
while(true){
if((i__47035__auto___53180 < len__47034__auto___53179)){
args__47041__auto__.push((arguments[i__47035__auto___53180]));

var G__53181 = (i__47035__auto___53180 + (1));
i__47035__auto___53180 = G__53181;
continue;
} else {
}
break;
}

var argseq__47042__auto__ = ((((0) < args__47041__auto__.length))?(new cljs.core.IndexedSeq(args__47041__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__47042__auto__);
});})(g__53120__auto___53178))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53120__auto___53178){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53120__auto___53178),args);
});})(g__53120__auto___53178))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__53120__auto___53178){
return (function (seq53159){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53159));
});})(g__53120__auto___53178))
;


var g__53120__auto___53182 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__53120__auto___53182){
return (function cljs$spec$gen$alpha$list(var_args){
var args__47041__auto__ = [];
var len__47034__auto___53183 = arguments.length;
var i__47035__auto___53184 = (0);
while(true){
if((i__47035__auto___53184 < len__47034__auto___53183)){
args__47041__auto__.push((arguments[i__47035__auto___53184]));

var G__53185 = (i__47035__auto___53184 + (1));
i__47035__auto___53184 = G__53185;
continue;
} else {
}
break;
}

var argseq__47042__auto__ = ((((0) < args__47041__auto__.length))?(new cljs.core.IndexedSeq(args__47041__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__47042__auto__);
});})(g__53120__auto___53182))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53120__auto___53182){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53120__auto___53182),args);
});})(g__53120__auto___53182))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__53120__auto___53182){
return (function (seq53160){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53160));
});})(g__53120__auto___53182))
;


var g__53120__auto___53186 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__53120__auto___53186){
return (function cljs$spec$gen$alpha$map(var_args){
var args__47041__auto__ = [];
var len__47034__auto___53187 = arguments.length;
var i__47035__auto___53188 = (0);
while(true){
if((i__47035__auto___53188 < len__47034__auto___53187)){
args__47041__auto__.push((arguments[i__47035__auto___53188]));

var G__53189 = (i__47035__auto___53188 + (1));
i__47035__auto___53188 = G__53189;
continue;
} else {
}
break;
}

var argseq__47042__auto__ = ((((0) < args__47041__auto__.length))?(new cljs.core.IndexedSeq(args__47041__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__47042__auto__);
});})(g__53120__auto___53186))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53120__auto___53186){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53120__auto___53186),args);
});})(g__53120__auto___53186))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__53120__auto___53186){
return (function (seq53161){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53161));
});})(g__53120__auto___53186))
;


var g__53120__auto___53190 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__53120__auto___53190){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__47041__auto__ = [];
var len__47034__auto___53191 = arguments.length;
var i__47035__auto___53192 = (0);
while(true){
if((i__47035__auto___53192 < len__47034__auto___53191)){
args__47041__auto__.push((arguments[i__47035__auto___53192]));

var G__53193 = (i__47035__auto___53192 + (1));
i__47035__auto___53192 = G__53193;
continue;
} else {
}
break;
}

var argseq__47042__auto__ = ((((0) < args__47041__auto__.length))?(new cljs.core.IndexedSeq(args__47041__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__47042__auto__);
});})(g__53120__auto___53190))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53120__auto___53190){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53120__auto___53190),args);
});})(g__53120__auto___53190))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__53120__auto___53190){
return (function (seq53162){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53162));
});})(g__53120__auto___53190))
;


var g__53120__auto___53194 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__53120__auto___53194){
return (function cljs$spec$gen$alpha$set(var_args){
var args__47041__auto__ = [];
var len__47034__auto___53195 = arguments.length;
var i__47035__auto___53196 = (0);
while(true){
if((i__47035__auto___53196 < len__47034__auto___53195)){
args__47041__auto__.push((arguments[i__47035__auto___53196]));

var G__53197 = (i__47035__auto___53196 + (1));
i__47035__auto___53196 = G__53197;
continue;
} else {
}
break;
}

var argseq__47042__auto__ = ((((0) < args__47041__auto__.length))?(new cljs.core.IndexedSeq(args__47041__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__47042__auto__);
});})(g__53120__auto___53194))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53120__auto___53194){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53120__auto___53194),args);
});})(g__53120__auto___53194))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__53120__auto___53194){
return (function (seq53163){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53163));
});})(g__53120__auto___53194))
;


var g__53120__auto___53198 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__53120__auto___53198){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__47041__auto__ = [];
var len__47034__auto___53199 = arguments.length;
var i__47035__auto___53200 = (0);
while(true){
if((i__47035__auto___53200 < len__47034__auto___53199)){
args__47041__auto__.push((arguments[i__47035__auto___53200]));

var G__53201 = (i__47035__auto___53200 + (1));
i__47035__auto___53200 = G__53201;
continue;
} else {
}
break;
}

var argseq__47042__auto__ = ((((0) < args__47041__auto__.length))?(new cljs.core.IndexedSeq(args__47041__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__47042__auto__);
});})(g__53120__auto___53198))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53120__auto___53198){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53120__auto___53198),args);
});})(g__53120__auto___53198))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__53120__auto___53198){
return (function (seq53164){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53164));
});})(g__53120__auto___53198))
;


var g__53120__auto___53202 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__53120__auto___53202){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__47041__auto__ = [];
var len__47034__auto___53203 = arguments.length;
var i__47035__auto___53204 = (0);
while(true){
if((i__47035__auto___53204 < len__47034__auto___53203)){
args__47041__auto__.push((arguments[i__47035__auto___53204]));

var G__53205 = (i__47035__auto___53204 + (1));
i__47035__auto___53204 = G__53205;
continue;
} else {
}
break;
}

var argseq__47042__auto__ = ((((0) < args__47041__auto__.length))?(new cljs.core.IndexedSeq(args__47041__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__47042__auto__);
});})(g__53120__auto___53202))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53120__auto___53202){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53120__auto___53202),args);
});})(g__53120__auto___53202))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__53120__auto___53202){
return (function (seq53165){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53165));
});})(g__53120__auto___53202))
;


var g__53120__auto___53206 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__53120__auto___53206){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__47041__auto__ = [];
var len__47034__auto___53207 = arguments.length;
var i__47035__auto___53208 = (0);
while(true){
if((i__47035__auto___53208 < len__47034__auto___53207)){
args__47041__auto__.push((arguments[i__47035__auto___53208]));

var G__53209 = (i__47035__auto___53208 + (1));
i__47035__auto___53208 = G__53209;
continue;
} else {
}
break;
}

var argseq__47042__auto__ = ((((0) < args__47041__auto__.length))?(new cljs.core.IndexedSeq(args__47041__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__47042__auto__);
});})(g__53120__auto___53206))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53120__auto___53206){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53120__auto___53206),args);
});})(g__53120__auto___53206))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__53120__auto___53206){
return (function (seq53166){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53166));
});})(g__53120__auto___53206))
;


var g__53120__auto___53210 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__53120__auto___53210){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__47041__auto__ = [];
var len__47034__auto___53211 = arguments.length;
var i__47035__auto___53212 = (0);
while(true){
if((i__47035__auto___53212 < len__47034__auto___53211)){
args__47041__auto__.push((arguments[i__47035__auto___53212]));

var G__53213 = (i__47035__auto___53212 + (1));
i__47035__auto___53212 = G__53213;
continue;
} else {
}
break;
}

var argseq__47042__auto__ = ((((0) < args__47041__auto__.length))?(new cljs.core.IndexedSeq(args__47041__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__47042__auto__);
});})(g__53120__auto___53210))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53120__auto___53210){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53120__auto___53210),args);
});})(g__53120__auto___53210))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__53120__auto___53210){
return (function (seq53167){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53167));
});})(g__53120__auto___53210))
;


var g__53120__auto___53214 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__53120__auto___53214){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__47041__auto__ = [];
var len__47034__auto___53215 = arguments.length;
var i__47035__auto___53216 = (0);
while(true){
if((i__47035__auto___53216 < len__47034__auto___53215)){
args__47041__auto__.push((arguments[i__47035__auto___53216]));

var G__53217 = (i__47035__auto___53216 + (1));
i__47035__auto___53216 = G__53217;
continue;
} else {
}
break;
}

var argseq__47042__auto__ = ((((0) < args__47041__auto__.length))?(new cljs.core.IndexedSeq(args__47041__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__47042__auto__);
});})(g__53120__auto___53214))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53120__auto___53214){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53120__auto___53214),args);
});})(g__53120__auto___53214))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__53120__auto___53214){
return (function (seq53168){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53168));
});})(g__53120__auto___53214))
;


var g__53120__auto___53218 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__53120__auto___53218){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__47041__auto__ = [];
var len__47034__auto___53219 = arguments.length;
var i__47035__auto___53220 = (0);
while(true){
if((i__47035__auto___53220 < len__47034__auto___53219)){
args__47041__auto__.push((arguments[i__47035__auto___53220]));

var G__53221 = (i__47035__auto___53220 + (1));
i__47035__auto___53220 = G__53221;
continue;
} else {
}
break;
}

var argseq__47042__auto__ = ((((0) < args__47041__auto__.length))?(new cljs.core.IndexedSeq(args__47041__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__47042__auto__);
});})(g__53120__auto___53218))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53120__auto___53218){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53120__auto___53218),args);
});})(g__53120__auto___53218))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__53120__auto___53218){
return (function (seq53169){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53169));
});})(g__53120__auto___53218))
;


var g__53120__auto___53222 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__53120__auto___53222){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__47041__auto__ = [];
var len__47034__auto___53223 = arguments.length;
var i__47035__auto___53224 = (0);
while(true){
if((i__47035__auto___53224 < len__47034__auto___53223)){
args__47041__auto__.push((arguments[i__47035__auto___53224]));

var G__53225 = (i__47035__auto___53224 + (1));
i__47035__auto___53224 = G__53225;
continue;
} else {
}
break;
}

var argseq__47042__auto__ = ((((0) < args__47041__auto__.length))?(new cljs.core.IndexedSeq(args__47041__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__47042__auto__);
});})(g__53120__auto___53222))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53120__auto___53222){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53120__auto___53222),args);
});})(g__53120__auto___53222))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__53120__auto___53222){
return (function (seq53170){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53170));
});})(g__53120__auto___53222))
;


var g__53120__auto___53226 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__53120__auto___53226){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__47041__auto__ = [];
var len__47034__auto___53227 = arguments.length;
var i__47035__auto___53228 = (0);
while(true){
if((i__47035__auto___53228 < len__47034__auto___53227)){
args__47041__auto__.push((arguments[i__47035__auto___53228]));

var G__53229 = (i__47035__auto___53228 + (1));
i__47035__auto___53228 = G__53229;
continue;
} else {
}
break;
}

var argseq__47042__auto__ = ((((0) < args__47041__auto__.length))?(new cljs.core.IndexedSeq(args__47041__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__47042__auto__);
});})(g__53120__auto___53226))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53120__auto___53226){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53120__auto___53226),args);
});})(g__53120__auto___53226))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__53120__auto___53226){
return (function (seq53171){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53171));
});})(g__53120__auto___53226))
;


var g__53120__auto___53230 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__53120__auto___53230){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__47041__auto__ = [];
var len__47034__auto___53231 = arguments.length;
var i__47035__auto___53232 = (0);
while(true){
if((i__47035__auto___53232 < len__47034__auto___53231)){
args__47041__auto__.push((arguments[i__47035__auto___53232]));

var G__53233 = (i__47035__auto___53232 + (1));
i__47035__auto___53232 = G__53233;
continue;
} else {
}
break;
}

var argseq__47042__auto__ = ((((0) < args__47041__auto__.length))?(new cljs.core.IndexedSeq(args__47041__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__47042__auto__);
});})(g__53120__auto___53230))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53120__auto___53230){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53120__auto___53230),args);
});})(g__53120__auto___53230))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__53120__auto___53230){
return (function (seq53172){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53172));
});})(g__53120__auto___53230))
;


var g__53120__auto___53234 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__53120__auto___53234){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__47041__auto__ = [];
var len__47034__auto___53235 = arguments.length;
var i__47035__auto___53236 = (0);
while(true){
if((i__47035__auto___53236 < len__47034__auto___53235)){
args__47041__auto__.push((arguments[i__47035__auto___53236]));

var G__53237 = (i__47035__auto___53236 + (1));
i__47035__auto___53236 = G__53237;
continue;
} else {
}
break;
}

var argseq__47042__auto__ = ((((0) < args__47041__auto__.length))?(new cljs.core.IndexedSeq(args__47041__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__47042__auto__);
});})(g__53120__auto___53234))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53120__auto___53234){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53120__auto___53234),args);
});})(g__53120__auto___53234))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__53120__auto___53234){
return (function (seq53173){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53173));
});})(g__53120__auto___53234))
;


var g__53120__auto___53238 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__53120__auto___53238){
return (function cljs$spec$gen$alpha$return(var_args){
var args__47041__auto__ = [];
var len__47034__auto___53239 = arguments.length;
var i__47035__auto___53240 = (0);
while(true){
if((i__47035__auto___53240 < len__47034__auto___53239)){
args__47041__auto__.push((arguments[i__47035__auto___53240]));

var G__53241 = (i__47035__auto___53240 + (1));
i__47035__auto___53240 = G__53241;
continue;
} else {
}
break;
}

var argseq__47042__auto__ = ((((0) < args__47041__auto__.length))?(new cljs.core.IndexedSeq(args__47041__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__47042__auto__);
});})(g__53120__auto___53238))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53120__auto___53238){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53120__auto___53238),args);
});})(g__53120__auto___53238))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__53120__auto___53238){
return (function (seq53174){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53174));
});})(g__53120__auto___53238))
;


var g__53120__auto___53242 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__53120__auto___53242){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__47041__auto__ = [];
var len__47034__auto___53243 = arguments.length;
var i__47035__auto___53244 = (0);
while(true){
if((i__47035__auto___53244 < len__47034__auto___53243)){
args__47041__auto__.push((arguments[i__47035__auto___53244]));

var G__53245 = (i__47035__auto___53244 + (1));
i__47035__auto___53244 = G__53245;
continue;
} else {
}
break;
}

var argseq__47042__auto__ = ((((0) < args__47041__auto__.length))?(new cljs.core.IndexedSeq(args__47041__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__47042__auto__);
});})(g__53120__auto___53242))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53120__auto___53242){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53120__auto___53242),args);
});})(g__53120__auto___53242))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__53120__auto___53242){
return (function (seq53175){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53175));
});})(g__53120__auto___53242))
;


var g__53120__auto___53246 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__53120__auto___53246){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__47041__auto__ = [];
var len__47034__auto___53247 = arguments.length;
var i__47035__auto___53248 = (0);
while(true){
if((i__47035__auto___53248 < len__47034__auto___53247)){
args__47041__auto__.push((arguments[i__47035__auto___53248]));

var G__53249 = (i__47035__auto___53248 + (1));
i__47035__auto___53248 = G__53249;
continue;
} else {
}
break;
}

var argseq__47042__auto__ = ((((0) < args__47041__auto__.length))?(new cljs.core.IndexedSeq(args__47041__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__47042__auto__);
});})(g__53120__auto___53246))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53120__auto___53246){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53120__auto___53246),args);
});})(g__53120__auto___53246))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__53120__auto___53246){
return (function (seq53176){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53176));
});})(g__53120__auto___53246))
;


var g__53120__auto___53250 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__53120__auto___53250){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__47041__auto__ = [];
var len__47034__auto___53251 = arguments.length;
var i__47035__auto___53252 = (0);
while(true){
if((i__47035__auto___53252 < len__47034__auto___53251)){
args__47041__auto__.push((arguments[i__47035__auto___53252]));

var G__53253 = (i__47035__auto___53252 + (1));
i__47035__auto___53252 = G__53253;
continue;
} else {
}
break;
}

var argseq__47042__auto__ = ((((0) < args__47041__auto__.length))?(new cljs.core.IndexedSeq(args__47041__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__47042__auto__);
});})(g__53120__auto___53250))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53120__auto___53250){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__53120__auto___53250),args);
});})(g__53120__auto___53250))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__53120__auto___53250){
return (function (seq53177){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53177));
});})(g__53120__auto___53250))
;

var g__53133__auto___53275 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__53133__auto___53275){
return (function cljs$spec$gen$alpha$any(var_args){
var args__47041__auto__ = [];
var len__47034__auto___53276 = arguments.length;
var i__47035__auto___53277 = (0);
while(true){
if((i__47035__auto___53277 < len__47034__auto___53276)){
args__47041__auto__.push((arguments[i__47035__auto___53277]));

var G__53278 = (i__47035__auto___53277 + (1));
i__47035__auto___53277 = G__53278;
continue;
} else {
}
break;
}

var argseq__47042__auto__ = ((((0) < args__47041__auto__.length))?(new cljs.core.IndexedSeq(args__47041__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__47042__auto__);
});})(g__53133__auto___53275))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53133__auto___53275){
return (function (args){
return cljs.core.deref.call(null,g__53133__auto___53275);
});})(g__53133__auto___53275))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__53133__auto___53275){
return (function (seq53254){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53254));
});})(g__53133__auto___53275))
;


var g__53133__auto___53279 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__53133__auto___53279){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__47041__auto__ = [];
var len__47034__auto___53280 = arguments.length;
var i__47035__auto___53281 = (0);
while(true){
if((i__47035__auto___53281 < len__47034__auto___53280)){
args__47041__auto__.push((arguments[i__47035__auto___53281]));

var G__53282 = (i__47035__auto___53281 + (1));
i__47035__auto___53281 = G__53282;
continue;
} else {
}
break;
}

var argseq__47042__auto__ = ((((0) < args__47041__auto__.length))?(new cljs.core.IndexedSeq(args__47041__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__47042__auto__);
});})(g__53133__auto___53279))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53133__auto___53279){
return (function (args){
return cljs.core.deref.call(null,g__53133__auto___53279);
});})(g__53133__auto___53279))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__53133__auto___53279){
return (function (seq53255){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53255));
});})(g__53133__auto___53279))
;


var g__53133__auto___53283 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__53133__auto___53283){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__47041__auto__ = [];
var len__47034__auto___53284 = arguments.length;
var i__47035__auto___53285 = (0);
while(true){
if((i__47035__auto___53285 < len__47034__auto___53284)){
args__47041__auto__.push((arguments[i__47035__auto___53285]));

var G__53286 = (i__47035__auto___53285 + (1));
i__47035__auto___53285 = G__53286;
continue;
} else {
}
break;
}

var argseq__47042__auto__ = ((((0) < args__47041__auto__.length))?(new cljs.core.IndexedSeq(args__47041__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__47042__auto__);
});})(g__53133__auto___53283))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53133__auto___53283){
return (function (args){
return cljs.core.deref.call(null,g__53133__auto___53283);
});})(g__53133__auto___53283))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__53133__auto___53283){
return (function (seq53256){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53256));
});})(g__53133__auto___53283))
;


var g__53133__auto___53287 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__53133__auto___53287){
return (function cljs$spec$gen$alpha$char(var_args){
var args__47041__auto__ = [];
var len__47034__auto___53288 = arguments.length;
var i__47035__auto___53289 = (0);
while(true){
if((i__47035__auto___53289 < len__47034__auto___53288)){
args__47041__auto__.push((arguments[i__47035__auto___53289]));

var G__53290 = (i__47035__auto___53289 + (1));
i__47035__auto___53289 = G__53290;
continue;
} else {
}
break;
}

var argseq__47042__auto__ = ((((0) < args__47041__auto__.length))?(new cljs.core.IndexedSeq(args__47041__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__47042__auto__);
});})(g__53133__auto___53287))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53133__auto___53287){
return (function (args){
return cljs.core.deref.call(null,g__53133__auto___53287);
});})(g__53133__auto___53287))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__53133__auto___53287){
return (function (seq53257){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53257));
});})(g__53133__auto___53287))
;


var g__53133__auto___53291 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__53133__auto___53291){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__47041__auto__ = [];
var len__47034__auto___53292 = arguments.length;
var i__47035__auto___53293 = (0);
while(true){
if((i__47035__auto___53293 < len__47034__auto___53292)){
args__47041__auto__.push((arguments[i__47035__auto___53293]));

var G__53294 = (i__47035__auto___53293 + (1));
i__47035__auto___53293 = G__53294;
continue;
} else {
}
break;
}

var argseq__47042__auto__ = ((((0) < args__47041__auto__.length))?(new cljs.core.IndexedSeq(args__47041__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__47042__auto__);
});})(g__53133__auto___53291))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53133__auto___53291){
return (function (args){
return cljs.core.deref.call(null,g__53133__auto___53291);
});})(g__53133__auto___53291))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__53133__auto___53291){
return (function (seq53258){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53258));
});})(g__53133__auto___53291))
;


var g__53133__auto___53295 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__53133__auto___53295){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__47041__auto__ = [];
var len__47034__auto___53296 = arguments.length;
var i__47035__auto___53297 = (0);
while(true){
if((i__47035__auto___53297 < len__47034__auto___53296)){
args__47041__auto__.push((arguments[i__47035__auto___53297]));

var G__53298 = (i__47035__auto___53297 + (1));
i__47035__auto___53297 = G__53298;
continue;
} else {
}
break;
}

var argseq__47042__auto__ = ((((0) < args__47041__auto__.length))?(new cljs.core.IndexedSeq(args__47041__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__47042__auto__);
});})(g__53133__auto___53295))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53133__auto___53295){
return (function (args){
return cljs.core.deref.call(null,g__53133__auto___53295);
});})(g__53133__auto___53295))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__53133__auto___53295){
return (function (seq53259){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53259));
});})(g__53133__auto___53295))
;


var g__53133__auto___53299 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__53133__auto___53299){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__47041__auto__ = [];
var len__47034__auto___53300 = arguments.length;
var i__47035__auto___53301 = (0);
while(true){
if((i__47035__auto___53301 < len__47034__auto___53300)){
args__47041__auto__.push((arguments[i__47035__auto___53301]));

var G__53302 = (i__47035__auto___53301 + (1));
i__47035__auto___53301 = G__53302;
continue;
} else {
}
break;
}

var argseq__47042__auto__ = ((((0) < args__47041__auto__.length))?(new cljs.core.IndexedSeq(args__47041__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__47042__auto__);
});})(g__53133__auto___53299))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53133__auto___53299){
return (function (args){
return cljs.core.deref.call(null,g__53133__auto___53299);
});})(g__53133__auto___53299))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__53133__auto___53299){
return (function (seq53260){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53260));
});})(g__53133__auto___53299))
;


var g__53133__auto___53303 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__53133__auto___53303){
return (function cljs$spec$gen$alpha$double(var_args){
var args__47041__auto__ = [];
var len__47034__auto___53304 = arguments.length;
var i__47035__auto___53305 = (0);
while(true){
if((i__47035__auto___53305 < len__47034__auto___53304)){
args__47041__auto__.push((arguments[i__47035__auto___53305]));

var G__53306 = (i__47035__auto___53305 + (1));
i__47035__auto___53305 = G__53306;
continue;
} else {
}
break;
}

var argseq__47042__auto__ = ((((0) < args__47041__auto__.length))?(new cljs.core.IndexedSeq(args__47041__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__47042__auto__);
});})(g__53133__auto___53303))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53133__auto___53303){
return (function (args){
return cljs.core.deref.call(null,g__53133__auto___53303);
});})(g__53133__auto___53303))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__53133__auto___53303){
return (function (seq53261){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53261));
});})(g__53133__auto___53303))
;


var g__53133__auto___53307 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__53133__auto___53307){
return (function cljs$spec$gen$alpha$int(var_args){
var args__47041__auto__ = [];
var len__47034__auto___53308 = arguments.length;
var i__47035__auto___53309 = (0);
while(true){
if((i__47035__auto___53309 < len__47034__auto___53308)){
args__47041__auto__.push((arguments[i__47035__auto___53309]));

var G__53310 = (i__47035__auto___53309 + (1));
i__47035__auto___53309 = G__53310;
continue;
} else {
}
break;
}

var argseq__47042__auto__ = ((((0) < args__47041__auto__.length))?(new cljs.core.IndexedSeq(args__47041__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__47042__auto__);
});})(g__53133__auto___53307))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53133__auto___53307){
return (function (args){
return cljs.core.deref.call(null,g__53133__auto___53307);
});})(g__53133__auto___53307))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__53133__auto___53307){
return (function (seq53262){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53262));
});})(g__53133__auto___53307))
;


var g__53133__auto___53311 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__53133__auto___53311){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__47041__auto__ = [];
var len__47034__auto___53312 = arguments.length;
var i__47035__auto___53313 = (0);
while(true){
if((i__47035__auto___53313 < len__47034__auto___53312)){
args__47041__auto__.push((arguments[i__47035__auto___53313]));

var G__53314 = (i__47035__auto___53313 + (1));
i__47035__auto___53313 = G__53314;
continue;
} else {
}
break;
}

var argseq__47042__auto__ = ((((0) < args__47041__auto__.length))?(new cljs.core.IndexedSeq(args__47041__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__47042__auto__);
});})(g__53133__auto___53311))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53133__auto___53311){
return (function (args){
return cljs.core.deref.call(null,g__53133__auto___53311);
});})(g__53133__auto___53311))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__53133__auto___53311){
return (function (seq53263){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53263));
});})(g__53133__auto___53311))
;


var g__53133__auto___53315 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__53133__auto___53315){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__47041__auto__ = [];
var len__47034__auto___53316 = arguments.length;
var i__47035__auto___53317 = (0);
while(true){
if((i__47035__auto___53317 < len__47034__auto___53316)){
args__47041__auto__.push((arguments[i__47035__auto___53317]));

var G__53318 = (i__47035__auto___53317 + (1));
i__47035__auto___53317 = G__53318;
continue;
} else {
}
break;
}

var argseq__47042__auto__ = ((((0) < args__47041__auto__.length))?(new cljs.core.IndexedSeq(args__47041__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__47042__auto__);
});})(g__53133__auto___53315))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53133__auto___53315){
return (function (args){
return cljs.core.deref.call(null,g__53133__auto___53315);
});})(g__53133__auto___53315))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__53133__auto___53315){
return (function (seq53264){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53264));
});})(g__53133__auto___53315))
;


var g__53133__auto___53319 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__53133__auto___53319){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__47041__auto__ = [];
var len__47034__auto___53320 = arguments.length;
var i__47035__auto___53321 = (0);
while(true){
if((i__47035__auto___53321 < len__47034__auto___53320)){
args__47041__auto__.push((arguments[i__47035__auto___53321]));

var G__53322 = (i__47035__auto___53321 + (1));
i__47035__auto___53321 = G__53322;
continue;
} else {
}
break;
}

var argseq__47042__auto__ = ((((0) < args__47041__auto__.length))?(new cljs.core.IndexedSeq(args__47041__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__47042__auto__);
});})(g__53133__auto___53319))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53133__auto___53319){
return (function (args){
return cljs.core.deref.call(null,g__53133__auto___53319);
});})(g__53133__auto___53319))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__53133__auto___53319){
return (function (seq53265){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53265));
});})(g__53133__auto___53319))
;


var g__53133__auto___53323 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__53133__auto___53323){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__47041__auto__ = [];
var len__47034__auto___53324 = arguments.length;
var i__47035__auto___53325 = (0);
while(true){
if((i__47035__auto___53325 < len__47034__auto___53324)){
args__47041__auto__.push((arguments[i__47035__auto___53325]));

var G__53326 = (i__47035__auto___53325 + (1));
i__47035__auto___53325 = G__53326;
continue;
} else {
}
break;
}

var argseq__47042__auto__ = ((((0) < args__47041__auto__.length))?(new cljs.core.IndexedSeq(args__47041__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__47042__auto__);
});})(g__53133__auto___53323))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53133__auto___53323){
return (function (args){
return cljs.core.deref.call(null,g__53133__auto___53323);
});})(g__53133__auto___53323))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__53133__auto___53323){
return (function (seq53266){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53266));
});})(g__53133__auto___53323))
;


var g__53133__auto___53327 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__53133__auto___53327){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__47041__auto__ = [];
var len__47034__auto___53328 = arguments.length;
var i__47035__auto___53329 = (0);
while(true){
if((i__47035__auto___53329 < len__47034__auto___53328)){
args__47041__auto__.push((arguments[i__47035__auto___53329]));

var G__53330 = (i__47035__auto___53329 + (1));
i__47035__auto___53329 = G__53330;
continue;
} else {
}
break;
}

var argseq__47042__auto__ = ((((0) < args__47041__auto__.length))?(new cljs.core.IndexedSeq(args__47041__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__47042__auto__);
});})(g__53133__auto___53327))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53133__auto___53327){
return (function (args){
return cljs.core.deref.call(null,g__53133__auto___53327);
});})(g__53133__auto___53327))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__53133__auto___53327){
return (function (seq53267){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53267));
});})(g__53133__auto___53327))
;


var g__53133__auto___53331 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__53133__auto___53331){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__47041__auto__ = [];
var len__47034__auto___53332 = arguments.length;
var i__47035__auto___53333 = (0);
while(true){
if((i__47035__auto___53333 < len__47034__auto___53332)){
args__47041__auto__.push((arguments[i__47035__auto___53333]));

var G__53334 = (i__47035__auto___53333 + (1));
i__47035__auto___53333 = G__53334;
continue;
} else {
}
break;
}

var argseq__47042__auto__ = ((((0) < args__47041__auto__.length))?(new cljs.core.IndexedSeq(args__47041__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__47042__auto__);
});})(g__53133__auto___53331))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53133__auto___53331){
return (function (args){
return cljs.core.deref.call(null,g__53133__auto___53331);
});})(g__53133__auto___53331))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__53133__auto___53331){
return (function (seq53268){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53268));
});})(g__53133__auto___53331))
;


var g__53133__auto___53335 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__53133__auto___53335){
return (function cljs$spec$gen$alpha$string(var_args){
var args__47041__auto__ = [];
var len__47034__auto___53336 = arguments.length;
var i__47035__auto___53337 = (0);
while(true){
if((i__47035__auto___53337 < len__47034__auto___53336)){
args__47041__auto__.push((arguments[i__47035__auto___53337]));

var G__53338 = (i__47035__auto___53337 + (1));
i__47035__auto___53337 = G__53338;
continue;
} else {
}
break;
}

var argseq__47042__auto__ = ((((0) < args__47041__auto__.length))?(new cljs.core.IndexedSeq(args__47041__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__47042__auto__);
});})(g__53133__auto___53335))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53133__auto___53335){
return (function (args){
return cljs.core.deref.call(null,g__53133__auto___53335);
});})(g__53133__auto___53335))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__53133__auto___53335){
return (function (seq53269){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53269));
});})(g__53133__auto___53335))
;


var g__53133__auto___53339 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__53133__auto___53339){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__47041__auto__ = [];
var len__47034__auto___53340 = arguments.length;
var i__47035__auto___53341 = (0);
while(true){
if((i__47035__auto___53341 < len__47034__auto___53340)){
args__47041__auto__.push((arguments[i__47035__auto___53341]));

var G__53342 = (i__47035__auto___53341 + (1));
i__47035__auto___53341 = G__53342;
continue;
} else {
}
break;
}

var argseq__47042__auto__ = ((((0) < args__47041__auto__.length))?(new cljs.core.IndexedSeq(args__47041__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__47042__auto__);
});})(g__53133__auto___53339))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53133__auto___53339){
return (function (args){
return cljs.core.deref.call(null,g__53133__auto___53339);
});})(g__53133__auto___53339))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__53133__auto___53339){
return (function (seq53270){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53270));
});})(g__53133__auto___53339))
;


var g__53133__auto___53343 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__53133__auto___53343){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__47041__auto__ = [];
var len__47034__auto___53344 = arguments.length;
var i__47035__auto___53345 = (0);
while(true){
if((i__47035__auto___53345 < len__47034__auto___53344)){
args__47041__auto__.push((arguments[i__47035__auto___53345]));

var G__53346 = (i__47035__auto___53345 + (1));
i__47035__auto___53345 = G__53346;
continue;
} else {
}
break;
}

var argseq__47042__auto__ = ((((0) < args__47041__auto__.length))?(new cljs.core.IndexedSeq(args__47041__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__47042__auto__);
});})(g__53133__auto___53343))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53133__auto___53343){
return (function (args){
return cljs.core.deref.call(null,g__53133__auto___53343);
});})(g__53133__auto___53343))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__53133__auto___53343){
return (function (seq53271){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53271));
});})(g__53133__auto___53343))
;


var g__53133__auto___53347 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__53133__auto___53347){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__47041__auto__ = [];
var len__47034__auto___53348 = arguments.length;
var i__47035__auto___53349 = (0);
while(true){
if((i__47035__auto___53349 < len__47034__auto___53348)){
args__47041__auto__.push((arguments[i__47035__auto___53349]));

var G__53350 = (i__47035__auto___53349 + (1));
i__47035__auto___53349 = G__53350;
continue;
} else {
}
break;
}

var argseq__47042__auto__ = ((((0) < args__47041__auto__.length))?(new cljs.core.IndexedSeq(args__47041__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__47042__auto__);
});})(g__53133__auto___53347))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53133__auto___53347){
return (function (args){
return cljs.core.deref.call(null,g__53133__auto___53347);
});})(g__53133__auto___53347))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__53133__auto___53347){
return (function (seq53272){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53272));
});})(g__53133__auto___53347))
;


var g__53133__auto___53351 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__53133__auto___53351){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__47041__auto__ = [];
var len__47034__auto___53352 = arguments.length;
var i__47035__auto___53353 = (0);
while(true){
if((i__47035__auto___53353 < len__47034__auto___53352)){
args__47041__auto__.push((arguments[i__47035__auto___53353]));

var G__53354 = (i__47035__auto___53353 + (1));
i__47035__auto___53353 = G__53354;
continue;
} else {
}
break;
}

var argseq__47042__auto__ = ((((0) < args__47041__auto__.length))?(new cljs.core.IndexedSeq(args__47041__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__47042__auto__);
});})(g__53133__auto___53351))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53133__auto___53351){
return (function (args){
return cljs.core.deref.call(null,g__53133__auto___53351);
});})(g__53133__auto___53351))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__53133__auto___53351){
return (function (seq53273){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53273));
});})(g__53133__auto___53351))
;


var g__53133__auto___53355 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__53133__auto___53355){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__47041__auto__ = [];
var len__47034__auto___53356 = arguments.length;
var i__47035__auto___53357 = (0);
while(true){
if((i__47035__auto___53357 < len__47034__auto___53356)){
args__47041__auto__.push((arguments[i__47035__auto___53357]));

var G__53358 = (i__47035__auto___53357 + (1));
i__47035__auto___53357 = G__53358;
continue;
} else {
}
break;
}

var argseq__47042__auto__ = ((((0) < args__47041__auto__.length))?(new cljs.core.IndexedSeq(args__47041__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__47042__auto__);
});})(g__53133__auto___53355))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__53133__auto___53355){
return (function (args){
return cljs.core.deref.call(null,g__53133__auto___53355);
});})(g__53133__auto___53355))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__53133__auto___53355){
return (function (seq53274){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53274));
});})(g__53133__auto___53355))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__47041__auto__ = [];
var len__47034__auto___53361 = arguments.length;
var i__47035__auto___53362 = (0);
while(true){
if((i__47035__auto___53362 < len__47034__auto___53361)){
args__47041__auto__.push((arguments[i__47035__auto___53362]));

var G__53363 = (i__47035__auto___53362 + (1));
i__47035__auto___53362 = G__53363;
continue;
} else {
}
break;
}

var argseq__47042__auto__ = ((((0) < args__47041__auto__.length))?(new cljs.core.IndexedSeq(args__47041__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__47042__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__53359_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__53359_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq53360){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53360));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__53364_SHARP_){
return (new Date(p1__53364_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1499848600354