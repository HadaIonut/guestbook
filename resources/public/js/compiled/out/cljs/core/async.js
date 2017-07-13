// Compiled by ClojureScript 1.9.671 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33057 = arguments.length;
switch (G__33057) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async33058 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33058 = (function (f,blockable,meta33059){
this.f = f;
this.blockable = blockable;
this.meta33059 = meta33059;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33060,meta33059__$1){
var self__ = this;
var _33060__$1 = this;
return (new cljs.core.async.t_cljs$core$async33058(self__.f,self__.blockable,meta33059__$1));
});

cljs.core.async.t_cljs$core$async33058.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33060){
var self__ = this;
var _33060__$1 = this;
return self__.meta33059;
});

cljs.core.async.t_cljs$core$async33058.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33058.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33058.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async33058.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async33058.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta33059], null);
});

cljs.core.async.t_cljs$core$async33058.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33058.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33058";

cljs.core.async.t_cljs$core$async33058.cljs$lang$ctorPrWriter = (function (this__28038__auto__,writer__28039__auto__,opt__28040__auto__){
return cljs.core._write(writer__28039__auto__,"cljs.core.async/t_cljs$core$async33058");
});

cljs.core.async.__GT_t_cljs$core$async33058 = (function cljs$core$async$__GT_t_cljs$core$async33058(f__$1,blockable__$1,meta33059){
return (new cljs.core.async.t_cljs$core$async33058(f__$1,blockable__$1,meta33059));
});

}

return (new cljs.core.async.t_cljs$core$async33058(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__33064 = arguments.length;
switch (G__33064) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__33067 = arguments.length;
switch (G__33067) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__33070 = arguments.length;
switch (G__33070) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_33072 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33072) : fn1.call(null,val_33072));
} else {
cljs.core.async.impl.dispatch.run(((function (val_33072,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33072) : fn1.call(null,val_33072));
});})(val_33072,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__33074 = arguments.length;
switch (G__33074) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4655__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__28351__auto___33076 = n;
var x_33077 = (0);
while(true){
if((x_33077 < n__28351__auto___33076)){
(a[x_33077] = (0));

var G__33078 = (x_33077 + (1));
x_33077 = G__33078;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__33079 = (i + (1));
i = G__33079;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(typeof cljs.core.async.t_cljs$core$async33080 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33080 = (function (flag,meta33081){
this.flag = flag;
this.meta33081 = meta33081;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33080.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_33082,meta33081__$1){
var self__ = this;
var _33082__$1 = this;
return (new cljs.core.async.t_cljs$core$async33080(self__.flag,meta33081__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async33080.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_33082){
var self__ = this;
var _33082__$1 = this;
return self__.meta33081;
});})(flag))
;

cljs.core.async.t_cljs$core$async33080.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33080.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async33080.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33080.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33080.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta33081], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async33080.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33080.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33080";

cljs.core.async.t_cljs$core$async33080.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__28038__auto__,writer__28039__auto__,opt__28040__auto__){
return cljs.core._write(writer__28039__auto__,"cljs.core.async/t_cljs$core$async33080");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async33080 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33080(flag__$1,meta33081){
return (new cljs.core.async.t_cljs$core$async33080(flag__$1,meta33081));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async33080(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async33083 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33083 = (function (flag,cb,meta33084){
this.flag = flag;
this.cb = cb;
this.meta33084 = meta33084;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33083.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33085,meta33084__$1){
var self__ = this;
var _33085__$1 = this;
return (new cljs.core.async.t_cljs$core$async33083(self__.flag,self__.cb,meta33084__$1));
});

cljs.core.async.t_cljs$core$async33083.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33085){
var self__ = this;
var _33085__$1 = this;
return self__.meta33084;
});

cljs.core.async.t_cljs$core$async33083.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33083.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async33083.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33083.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async33083.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta33084], null);
});

cljs.core.async.t_cljs$core$async33083.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33083.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33083";

cljs.core.async.t_cljs$core$async33083.cljs$lang$ctorPrWriter = (function (this__28038__auto__,writer__28039__auto__,opt__28040__auto__){
return cljs.core._write(writer__28039__auto__,"cljs.core.async/t_cljs$core$async33083");
});

cljs.core.async.__GT_t_cljs$core$async33083 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33083(flag__$1,cb__$1,meta33084){
return (new cljs.core.async.t_cljs$core$async33083(flag__$1,cb__$1,meta33084));
});

}

return (new cljs.core.async.t_cljs$core$async33083(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33086_SHARP_){
var G__33088 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33086_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33088) : fret.call(null,G__33088));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33087_SHARP_){
var G__33089 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33087_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33089) : fret.call(null,G__33089));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__27427__auto__ = wport;
if(cljs.core.truth_(or__27427__auto__)){
return or__27427__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33090 = (i + (1));
i = G__33090;
continue;
}
} else {
return null;
}
break;
}
})();
var or__27427__auto__ = ret;
if(cljs.core.truth_(or__27427__auto__)){
return or__27427__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__4657__auto__ = (function (){var and__27415__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__27415__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__27415__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__28559__auto__ = [];
var len__28552__auto___33096 = arguments.length;
var i__28553__auto___33097 = (0);
while(true){
if((i__28553__auto___33097 < len__28552__auto___33096)){
args__28559__auto__.push((arguments[i__28553__auto___33097]));

var G__33098 = (i__28553__auto___33097 + (1));
i__28553__auto___33097 = G__33098;
continue;
} else {
}
break;
}

var argseq__28560__auto__ = ((((1) < args__28559__auto__.length))?(new cljs.core.IndexedSeq(args__28559__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28560__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33093){
var map__33094 = p__33093;
var map__33094__$1 = ((((!((map__33094 == null)))?((((map__33094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33094.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33094):map__33094);
var opts = map__33094__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33091){
var G__33092 = cljs.core.first(seq33091);
var seq33091__$1 = cljs.core.next(seq33091);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33092,seq33091__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__33100 = arguments.length;
switch (G__33100) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33011__auto___33146 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33011__auto___33146){
return (function (){
var f__33012__auto__ = (function (){var switch__32911__auto__ = ((function (c__33011__auto___33146){
return (function (state_33124){
var state_val_33125 = (state_33124[(1)]);
if((state_val_33125 === (7))){
var inst_33120 = (state_33124[(2)]);
var state_33124__$1 = state_33124;
var statearr_33126_33147 = state_33124__$1;
(statearr_33126_33147[(2)] = inst_33120);

(statearr_33126_33147[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33125 === (1))){
var state_33124__$1 = state_33124;
var statearr_33127_33148 = state_33124__$1;
(statearr_33127_33148[(2)] = null);

(statearr_33127_33148[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33125 === (4))){
var inst_33103 = (state_33124[(7)]);
var inst_33103__$1 = (state_33124[(2)]);
var inst_33104 = (inst_33103__$1 == null);
var state_33124__$1 = (function (){var statearr_33128 = state_33124;
(statearr_33128[(7)] = inst_33103__$1);

return statearr_33128;
})();
if(cljs.core.truth_(inst_33104)){
var statearr_33129_33149 = state_33124__$1;
(statearr_33129_33149[(1)] = (5));

} else {
var statearr_33130_33150 = state_33124__$1;
(statearr_33130_33150[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33125 === (13))){
var state_33124__$1 = state_33124;
var statearr_33131_33151 = state_33124__$1;
(statearr_33131_33151[(2)] = null);

(statearr_33131_33151[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33125 === (6))){
var inst_33103 = (state_33124[(7)]);
var state_33124__$1 = state_33124;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33124__$1,(11),to,inst_33103);
} else {
if((state_val_33125 === (3))){
var inst_33122 = (state_33124[(2)]);
var state_33124__$1 = state_33124;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33124__$1,inst_33122);
} else {
if((state_val_33125 === (12))){
var state_33124__$1 = state_33124;
var statearr_33132_33152 = state_33124__$1;
(statearr_33132_33152[(2)] = null);

(statearr_33132_33152[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33125 === (2))){
var state_33124__$1 = state_33124;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33124__$1,(4),from);
} else {
if((state_val_33125 === (11))){
var inst_33113 = (state_33124[(2)]);
var state_33124__$1 = state_33124;
if(cljs.core.truth_(inst_33113)){
var statearr_33133_33153 = state_33124__$1;
(statearr_33133_33153[(1)] = (12));

} else {
var statearr_33134_33154 = state_33124__$1;
(statearr_33134_33154[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33125 === (9))){
var state_33124__$1 = state_33124;
var statearr_33135_33155 = state_33124__$1;
(statearr_33135_33155[(2)] = null);

(statearr_33135_33155[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33125 === (5))){
var state_33124__$1 = state_33124;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33136_33156 = state_33124__$1;
(statearr_33136_33156[(1)] = (8));

} else {
var statearr_33137_33157 = state_33124__$1;
(statearr_33137_33157[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33125 === (14))){
var inst_33118 = (state_33124[(2)]);
var state_33124__$1 = state_33124;
var statearr_33138_33158 = state_33124__$1;
(statearr_33138_33158[(2)] = inst_33118);

(statearr_33138_33158[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33125 === (10))){
var inst_33110 = (state_33124[(2)]);
var state_33124__$1 = state_33124;
var statearr_33139_33159 = state_33124__$1;
(statearr_33139_33159[(2)] = inst_33110);

(statearr_33139_33159[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33125 === (8))){
var inst_33107 = cljs.core.async.close_BANG_(to);
var state_33124__$1 = state_33124;
var statearr_33140_33160 = state_33124__$1;
(statearr_33140_33160[(2)] = inst_33107);

(statearr_33140_33160[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__33011__auto___33146))
;
return ((function (switch__32911__auto__,c__33011__auto___33146){
return (function() {
var cljs$core$async$state_machine__32912__auto__ = null;
var cljs$core$async$state_machine__32912__auto____0 = (function (){
var statearr_33141 = [null,null,null,null,null,null,null,null];
(statearr_33141[(0)] = cljs$core$async$state_machine__32912__auto__);

(statearr_33141[(1)] = (1));

return statearr_33141;
});
var cljs$core$async$state_machine__32912__auto____1 = (function (state_33124){
while(true){
var ret_value__32913__auto__ = (function (){try{while(true){
var result__32914__auto__ = switch__32911__auto__(state_33124);
if(cljs.core.keyword_identical_QMARK_(result__32914__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__32914__auto__;
}
break;
}
}catch (e33142){if((e33142 instanceof Object)){
var ex__32915__auto__ = e33142;
var statearr_33143_33161 = state_33124;
(statearr_33143_33161[(5)] = ex__32915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33124);

return cljs.core.cst$kw$recur;
} else {
throw e33142;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32913__auto__,cljs.core.cst$kw$recur)){
var G__33162 = state_33124;
state_33124 = G__33162;
continue;
} else {
return ret_value__32913__auto__;
}
break;
}
});
cljs$core$async$state_machine__32912__auto__ = function(state_33124){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32912__auto____1.call(this,state_33124);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32912__auto____0;
cljs$core$async$state_machine__32912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32912__auto____1;
return cljs$core$async$state_machine__32912__auto__;
})()
;})(switch__32911__auto__,c__33011__auto___33146))
})();
var state__33013__auto__ = (function (){var statearr_33144 = (f__33012__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33012__auto__.cljs$core$IFn$_invoke$arity$0() : f__33012__auto__.call(null));
(statearr_33144[(6)] = c__33011__auto___33146);

return statearr_33144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33013__auto__);
});})(c__33011__auto___33146))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__33163){
var vec__33164 = p__33163;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33164,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33164,(1),null);
var job = vec__33164;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__33011__auto___33335 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33011__auto___33335,res,vec__33164,v,p,job,jobs,results){
return (function (){
var f__33012__auto__ = (function (){var switch__32911__auto__ = ((function (c__33011__auto___33335,res,vec__33164,v,p,job,jobs,results){
return (function (state_33171){
var state_val_33172 = (state_33171[(1)]);
if((state_val_33172 === (1))){
var state_33171__$1 = state_33171;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33171__$1,(2),res,v);
} else {
if((state_val_33172 === (2))){
var inst_33168 = (state_33171[(2)]);
var inst_33169 = cljs.core.async.close_BANG_(res);
var state_33171__$1 = (function (){var statearr_33173 = state_33171;
(statearr_33173[(7)] = inst_33168);

return statearr_33173;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33171__$1,inst_33169);
} else {
return null;
}
}
});})(c__33011__auto___33335,res,vec__33164,v,p,job,jobs,results))
;
return ((function (switch__32911__auto__,c__33011__auto___33335,res,vec__33164,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32912__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32912__auto____0 = (function (){
var statearr_33174 = [null,null,null,null,null,null,null,null];
(statearr_33174[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32912__auto__);

(statearr_33174[(1)] = (1));

return statearr_33174;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32912__auto____1 = (function (state_33171){
while(true){
var ret_value__32913__auto__ = (function (){try{while(true){
var result__32914__auto__ = switch__32911__auto__(state_33171);
if(cljs.core.keyword_identical_QMARK_(result__32914__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__32914__auto__;
}
break;
}
}catch (e33175){if((e33175 instanceof Object)){
var ex__32915__auto__ = e33175;
var statearr_33176_33336 = state_33171;
(statearr_33176_33336[(5)] = ex__32915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33171);

return cljs.core.cst$kw$recur;
} else {
throw e33175;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32913__auto__,cljs.core.cst$kw$recur)){
var G__33337 = state_33171;
state_33171 = G__33337;
continue;
} else {
return ret_value__32913__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32912__auto__ = function(state_33171){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32912__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32912__auto____1.call(this,state_33171);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32912__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32912__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32912__auto__;
})()
;})(switch__32911__auto__,c__33011__auto___33335,res,vec__33164,v,p,job,jobs,results))
})();
var state__33013__auto__ = (function (){var statearr_33177 = (f__33012__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33012__auto__.cljs$core$IFn$_invoke$arity$0() : f__33012__auto__.call(null));
(statearr_33177[(6)] = c__33011__auto___33335);

return statearr_33177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33013__auto__);
});})(c__33011__auto___33335,res,vec__33164,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__33178){
var vec__33179 = p__33178;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33179,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33179,(1),null);
var job = vec__33179;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__28351__auto___33338 = n;
var __33339 = (0);
while(true){
if((__33339 < n__28351__auto___33338)){
var G__33182_33340 = type;
var G__33182_33341__$1 = (((G__33182_33340 instanceof cljs.core.Keyword))?G__33182_33340.fqn:null);
switch (G__33182_33341__$1) {
case "compute":
var c__33011__auto___33343 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33339,c__33011__auto___33343,G__33182_33340,G__33182_33341__$1,n__28351__auto___33338,jobs,results,process,async){
return (function (){
var f__33012__auto__ = (function (){var switch__32911__auto__ = ((function (__33339,c__33011__auto___33343,G__33182_33340,G__33182_33341__$1,n__28351__auto___33338,jobs,results,process,async){
return (function (state_33195){
var state_val_33196 = (state_33195[(1)]);
if((state_val_33196 === (1))){
var state_33195__$1 = state_33195;
var statearr_33197_33344 = state_33195__$1;
(statearr_33197_33344[(2)] = null);

(statearr_33197_33344[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33196 === (2))){
var state_33195__$1 = state_33195;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33195__$1,(4),jobs);
} else {
if((state_val_33196 === (3))){
var inst_33193 = (state_33195[(2)]);
var state_33195__$1 = state_33195;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33195__$1,inst_33193);
} else {
if((state_val_33196 === (4))){
var inst_33185 = (state_33195[(2)]);
var inst_33186 = process(inst_33185);
var state_33195__$1 = state_33195;
if(cljs.core.truth_(inst_33186)){
var statearr_33198_33345 = state_33195__$1;
(statearr_33198_33345[(1)] = (5));

} else {
var statearr_33199_33346 = state_33195__$1;
(statearr_33199_33346[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33196 === (5))){
var state_33195__$1 = state_33195;
var statearr_33200_33347 = state_33195__$1;
(statearr_33200_33347[(2)] = null);

(statearr_33200_33347[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33196 === (6))){
var state_33195__$1 = state_33195;
var statearr_33201_33348 = state_33195__$1;
(statearr_33201_33348[(2)] = null);

(statearr_33201_33348[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33196 === (7))){
var inst_33191 = (state_33195[(2)]);
var state_33195__$1 = state_33195;
var statearr_33202_33349 = state_33195__$1;
(statearr_33202_33349[(2)] = inst_33191);

(statearr_33202_33349[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__33339,c__33011__auto___33343,G__33182_33340,G__33182_33341__$1,n__28351__auto___33338,jobs,results,process,async))
;
return ((function (__33339,switch__32911__auto__,c__33011__auto___33343,G__33182_33340,G__33182_33341__$1,n__28351__auto___33338,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32912__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32912__auto____0 = (function (){
var statearr_33203 = [null,null,null,null,null,null,null];
(statearr_33203[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32912__auto__);

(statearr_33203[(1)] = (1));

return statearr_33203;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32912__auto____1 = (function (state_33195){
while(true){
var ret_value__32913__auto__ = (function (){try{while(true){
var result__32914__auto__ = switch__32911__auto__(state_33195);
if(cljs.core.keyword_identical_QMARK_(result__32914__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__32914__auto__;
}
break;
}
}catch (e33204){if((e33204 instanceof Object)){
var ex__32915__auto__ = e33204;
var statearr_33205_33350 = state_33195;
(statearr_33205_33350[(5)] = ex__32915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33195);

return cljs.core.cst$kw$recur;
} else {
throw e33204;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32913__auto__,cljs.core.cst$kw$recur)){
var G__33351 = state_33195;
state_33195 = G__33351;
continue;
} else {
return ret_value__32913__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32912__auto__ = function(state_33195){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32912__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32912__auto____1.call(this,state_33195);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32912__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32912__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32912__auto__;
})()
;})(__33339,switch__32911__auto__,c__33011__auto___33343,G__33182_33340,G__33182_33341__$1,n__28351__auto___33338,jobs,results,process,async))
})();
var state__33013__auto__ = (function (){var statearr_33206 = (f__33012__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33012__auto__.cljs$core$IFn$_invoke$arity$0() : f__33012__auto__.call(null));
(statearr_33206[(6)] = c__33011__auto___33343);

return statearr_33206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33013__auto__);
});})(__33339,c__33011__auto___33343,G__33182_33340,G__33182_33341__$1,n__28351__auto___33338,jobs,results,process,async))
);


break;
case "async":
var c__33011__auto___33352 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33339,c__33011__auto___33352,G__33182_33340,G__33182_33341__$1,n__28351__auto___33338,jobs,results,process,async){
return (function (){
var f__33012__auto__ = (function (){var switch__32911__auto__ = ((function (__33339,c__33011__auto___33352,G__33182_33340,G__33182_33341__$1,n__28351__auto___33338,jobs,results,process,async){
return (function (state_33219){
var state_val_33220 = (state_33219[(1)]);
if((state_val_33220 === (1))){
var state_33219__$1 = state_33219;
var statearr_33221_33353 = state_33219__$1;
(statearr_33221_33353[(2)] = null);

(statearr_33221_33353[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33220 === (2))){
var state_33219__$1 = state_33219;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33219__$1,(4),jobs);
} else {
if((state_val_33220 === (3))){
var inst_33217 = (state_33219[(2)]);
var state_33219__$1 = state_33219;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33219__$1,inst_33217);
} else {
if((state_val_33220 === (4))){
var inst_33209 = (state_33219[(2)]);
var inst_33210 = async(inst_33209);
var state_33219__$1 = state_33219;
if(cljs.core.truth_(inst_33210)){
var statearr_33222_33354 = state_33219__$1;
(statearr_33222_33354[(1)] = (5));

} else {
var statearr_33223_33355 = state_33219__$1;
(statearr_33223_33355[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33220 === (5))){
var state_33219__$1 = state_33219;
var statearr_33224_33356 = state_33219__$1;
(statearr_33224_33356[(2)] = null);

(statearr_33224_33356[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33220 === (6))){
var state_33219__$1 = state_33219;
var statearr_33225_33357 = state_33219__$1;
(statearr_33225_33357[(2)] = null);

(statearr_33225_33357[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33220 === (7))){
var inst_33215 = (state_33219[(2)]);
var state_33219__$1 = state_33219;
var statearr_33226_33358 = state_33219__$1;
(statearr_33226_33358[(2)] = inst_33215);

(statearr_33226_33358[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__33339,c__33011__auto___33352,G__33182_33340,G__33182_33341__$1,n__28351__auto___33338,jobs,results,process,async))
;
return ((function (__33339,switch__32911__auto__,c__33011__auto___33352,G__33182_33340,G__33182_33341__$1,n__28351__auto___33338,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32912__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32912__auto____0 = (function (){
var statearr_33227 = [null,null,null,null,null,null,null];
(statearr_33227[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32912__auto__);

(statearr_33227[(1)] = (1));

return statearr_33227;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32912__auto____1 = (function (state_33219){
while(true){
var ret_value__32913__auto__ = (function (){try{while(true){
var result__32914__auto__ = switch__32911__auto__(state_33219);
if(cljs.core.keyword_identical_QMARK_(result__32914__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__32914__auto__;
}
break;
}
}catch (e33228){if((e33228 instanceof Object)){
var ex__32915__auto__ = e33228;
var statearr_33229_33359 = state_33219;
(statearr_33229_33359[(5)] = ex__32915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33219);

return cljs.core.cst$kw$recur;
} else {
throw e33228;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32913__auto__,cljs.core.cst$kw$recur)){
var G__33360 = state_33219;
state_33219 = G__33360;
continue;
} else {
return ret_value__32913__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32912__auto__ = function(state_33219){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32912__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32912__auto____1.call(this,state_33219);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32912__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32912__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32912__auto__;
})()
;})(__33339,switch__32911__auto__,c__33011__auto___33352,G__33182_33340,G__33182_33341__$1,n__28351__auto___33338,jobs,results,process,async))
})();
var state__33013__auto__ = (function (){var statearr_33230 = (f__33012__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33012__auto__.cljs$core$IFn$_invoke$arity$0() : f__33012__auto__.call(null));
(statearr_33230[(6)] = c__33011__auto___33352);

return statearr_33230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33013__auto__);
});})(__33339,c__33011__auto___33352,G__33182_33340,G__33182_33341__$1,n__28351__auto___33338,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33182_33341__$1)].join('')));

}

var G__33361 = (__33339 + (1));
__33339 = G__33361;
continue;
} else {
}
break;
}

var c__33011__auto___33362 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33011__auto___33362,jobs,results,process,async){
return (function (){
var f__33012__auto__ = (function (){var switch__32911__auto__ = ((function (c__33011__auto___33362,jobs,results,process,async){
return (function (state_33252){
var state_val_33253 = (state_33252[(1)]);
if((state_val_33253 === (1))){
var state_33252__$1 = state_33252;
var statearr_33254_33363 = state_33252__$1;
(statearr_33254_33363[(2)] = null);

(statearr_33254_33363[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33253 === (2))){
var state_33252__$1 = state_33252;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33252__$1,(4),from);
} else {
if((state_val_33253 === (3))){
var inst_33250 = (state_33252[(2)]);
var state_33252__$1 = state_33252;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33252__$1,inst_33250);
} else {
if((state_val_33253 === (4))){
var inst_33233 = (state_33252[(7)]);
var inst_33233__$1 = (state_33252[(2)]);
var inst_33234 = (inst_33233__$1 == null);
var state_33252__$1 = (function (){var statearr_33255 = state_33252;
(statearr_33255[(7)] = inst_33233__$1);

return statearr_33255;
})();
if(cljs.core.truth_(inst_33234)){
var statearr_33256_33364 = state_33252__$1;
(statearr_33256_33364[(1)] = (5));

} else {
var statearr_33257_33365 = state_33252__$1;
(statearr_33257_33365[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33253 === (5))){
var inst_33236 = cljs.core.async.close_BANG_(jobs);
var state_33252__$1 = state_33252;
var statearr_33258_33366 = state_33252__$1;
(statearr_33258_33366[(2)] = inst_33236);

(statearr_33258_33366[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33253 === (6))){
var inst_33238 = (state_33252[(8)]);
var inst_33233 = (state_33252[(7)]);
var inst_33238__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_33239 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33240 = [inst_33233,inst_33238__$1];
var inst_33241 = (new cljs.core.PersistentVector(null,2,(5),inst_33239,inst_33240,null));
var state_33252__$1 = (function (){var statearr_33259 = state_33252;
(statearr_33259[(8)] = inst_33238__$1);

return statearr_33259;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33252__$1,(8),jobs,inst_33241);
} else {
if((state_val_33253 === (7))){
var inst_33248 = (state_33252[(2)]);
var state_33252__$1 = state_33252;
var statearr_33260_33367 = state_33252__$1;
(statearr_33260_33367[(2)] = inst_33248);

(statearr_33260_33367[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33253 === (8))){
var inst_33238 = (state_33252[(8)]);
var inst_33243 = (state_33252[(2)]);
var state_33252__$1 = (function (){var statearr_33261 = state_33252;
(statearr_33261[(9)] = inst_33243);

return statearr_33261;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33252__$1,(9),results,inst_33238);
} else {
if((state_val_33253 === (9))){
var inst_33245 = (state_33252[(2)]);
var state_33252__$1 = (function (){var statearr_33262 = state_33252;
(statearr_33262[(10)] = inst_33245);

return statearr_33262;
})();
var statearr_33263_33368 = state_33252__$1;
(statearr_33263_33368[(2)] = null);

(statearr_33263_33368[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__33011__auto___33362,jobs,results,process,async))
;
return ((function (switch__32911__auto__,c__33011__auto___33362,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32912__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32912__auto____0 = (function (){
var statearr_33264 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33264[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32912__auto__);

(statearr_33264[(1)] = (1));

return statearr_33264;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32912__auto____1 = (function (state_33252){
while(true){
var ret_value__32913__auto__ = (function (){try{while(true){
var result__32914__auto__ = switch__32911__auto__(state_33252);
if(cljs.core.keyword_identical_QMARK_(result__32914__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__32914__auto__;
}
break;
}
}catch (e33265){if((e33265 instanceof Object)){
var ex__32915__auto__ = e33265;
var statearr_33266_33369 = state_33252;
(statearr_33266_33369[(5)] = ex__32915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33252);

return cljs.core.cst$kw$recur;
} else {
throw e33265;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32913__auto__,cljs.core.cst$kw$recur)){
var G__33370 = state_33252;
state_33252 = G__33370;
continue;
} else {
return ret_value__32913__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32912__auto__ = function(state_33252){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32912__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32912__auto____1.call(this,state_33252);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32912__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32912__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32912__auto__;
})()
;})(switch__32911__auto__,c__33011__auto___33362,jobs,results,process,async))
})();
var state__33013__auto__ = (function (){var statearr_33267 = (f__33012__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33012__auto__.cljs$core$IFn$_invoke$arity$0() : f__33012__auto__.call(null));
(statearr_33267[(6)] = c__33011__auto___33362);

return statearr_33267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33013__auto__);
});})(c__33011__auto___33362,jobs,results,process,async))
);


var c__33011__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33011__auto__,jobs,results,process,async){
return (function (){
var f__33012__auto__ = (function (){var switch__32911__auto__ = ((function (c__33011__auto__,jobs,results,process,async){
return (function (state_33305){
var state_val_33306 = (state_33305[(1)]);
if((state_val_33306 === (7))){
var inst_33301 = (state_33305[(2)]);
var state_33305__$1 = state_33305;
var statearr_33307_33371 = state_33305__$1;
(statearr_33307_33371[(2)] = inst_33301);

(statearr_33307_33371[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33306 === (20))){
var state_33305__$1 = state_33305;
var statearr_33308_33372 = state_33305__$1;
(statearr_33308_33372[(2)] = null);

(statearr_33308_33372[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33306 === (1))){
var state_33305__$1 = state_33305;
var statearr_33309_33373 = state_33305__$1;
(statearr_33309_33373[(2)] = null);

(statearr_33309_33373[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33306 === (4))){
var inst_33270 = (state_33305[(7)]);
var inst_33270__$1 = (state_33305[(2)]);
var inst_33271 = (inst_33270__$1 == null);
var state_33305__$1 = (function (){var statearr_33310 = state_33305;
(statearr_33310[(7)] = inst_33270__$1);

return statearr_33310;
})();
if(cljs.core.truth_(inst_33271)){
var statearr_33311_33374 = state_33305__$1;
(statearr_33311_33374[(1)] = (5));

} else {
var statearr_33312_33375 = state_33305__$1;
(statearr_33312_33375[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33306 === (15))){
var inst_33283 = (state_33305[(8)]);
var state_33305__$1 = state_33305;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33305__$1,(18),to,inst_33283);
} else {
if((state_val_33306 === (21))){
var inst_33296 = (state_33305[(2)]);
var state_33305__$1 = state_33305;
var statearr_33313_33376 = state_33305__$1;
(statearr_33313_33376[(2)] = inst_33296);

(statearr_33313_33376[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33306 === (13))){
var inst_33298 = (state_33305[(2)]);
var state_33305__$1 = (function (){var statearr_33314 = state_33305;
(statearr_33314[(9)] = inst_33298);

return statearr_33314;
})();
var statearr_33315_33377 = state_33305__$1;
(statearr_33315_33377[(2)] = null);

(statearr_33315_33377[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33306 === (6))){
var inst_33270 = (state_33305[(7)]);
var state_33305__$1 = state_33305;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33305__$1,(11),inst_33270);
} else {
if((state_val_33306 === (17))){
var inst_33291 = (state_33305[(2)]);
var state_33305__$1 = state_33305;
if(cljs.core.truth_(inst_33291)){
var statearr_33316_33378 = state_33305__$1;
(statearr_33316_33378[(1)] = (19));

} else {
var statearr_33317_33379 = state_33305__$1;
(statearr_33317_33379[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33306 === (3))){
var inst_33303 = (state_33305[(2)]);
var state_33305__$1 = state_33305;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33305__$1,inst_33303);
} else {
if((state_val_33306 === (12))){
var inst_33280 = (state_33305[(10)]);
var state_33305__$1 = state_33305;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33305__$1,(14),inst_33280);
} else {
if((state_val_33306 === (2))){
var state_33305__$1 = state_33305;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33305__$1,(4),results);
} else {
if((state_val_33306 === (19))){
var state_33305__$1 = state_33305;
var statearr_33318_33380 = state_33305__$1;
(statearr_33318_33380[(2)] = null);

(statearr_33318_33380[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33306 === (11))){
var inst_33280 = (state_33305[(2)]);
var state_33305__$1 = (function (){var statearr_33319 = state_33305;
(statearr_33319[(10)] = inst_33280);

return statearr_33319;
})();
var statearr_33320_33381 = state_33305__$1;
(statearr_33320_33381[(2)] = null);

(statearr_33320_33381[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33306 === (9))){
var state_33305__$1 = state_33305;
var statearr_33321_33382 = state_33305__$1;
(statearr_33321_33382[(2)] = null);

(statearr_33321_33382[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33306 === (5))){
var state_33305__$1 = state_33305;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33322_33383 = state_33305__$1;
(statearr_33322_33383[(1)] = (8));

} else {
var statearr_33323_33384 = state_33305__$1;
(statearr_33323_33384[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33306 === (14))){
var inst_33283 = (state_33305[(8)]);
var inst_33285 = (state_33305[(11)]);
var inst_33283__$1 = (state_33305[(2)]);
var inst_33284 = (inst_33283__$1 == null);
var inst_33285__$1 = cljs.core.not(inst_33284);
var state_33305__$1 = (function (){var statearr_33324 = state_33305;
(statearr_33324[(8)] = inst_33283__$1);

(statearr_33324[(11)] = inst_33285__$1);

return statearr_33324;
})();
if(inst_33285__$1){
var statearr_33325_33385 = state_33305__$1;
(statearr_33325_33385[(1)] = (15));

} else {
var statearr_33326_33386 = state_33305__$1;
(statearr_33326_33386[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33306 === (16))){
var inst_33285 = (state_33305[(11)]);
var state_33305__$1 = state_33305;
var statearr_33327_33387 = state_33305__$1;
(statearr_33327_33387[(2)] = inst_33285);

(statearr_33327_33387[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33306 === (10))){
var inst_33277 = (state_33305[(2)]);
var state_33305__$1 = state_33305;
var statearr_33328_33388 = state_33305__$1;
(statearr_33328_33388[(2)] = inst_33277);

(statearr_33328_33388[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33306 === (18))){
var inst_33288 = (state_33305[(2)]);
var state_33305__$1 = state_33305;
var statearr_33329_33389 = state_33305__$1;
(statearr_33329_33389[(2)] = inst_33288);

(statearr_33329_33389[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33306 === (8))){
var inst_33274 = cljs.core.async.close_BANG_(to);
var state_33305__$1 = state_33305;
var statearr_33330_33390 = state_33305__$1;
(statearr_33330_33390[(2)] = inst_33274);

(statearr_33330_33390[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__33011__auto__,jobs,results,process,async))
;
return ((function (switch__32911__auto__,c__33011__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32912__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32912__auto____0 = (function (){
var statearr_33331 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33331[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32912__auto__);

(statearr_33331[(1)] = (1));

return statearr_33331;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32912__auto____1 = (function (state_33305){
while(true){
var ret_value__32913__auto__ = (function (){try{while(true){
var result__32914__auto__ = switch__32911__auto__(state_33305);
if(cljs.core.keyword_identical_QMARK_(result__32914__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__32914__auto__;
}
break;
}
}catch (e33332){if((e33332 instanceof Object)){
var ex__32915__auto__ = e33332;
var statearr_33333_33391 = state_33305;
(statearr_33333_33391[(5)] = ex__32915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33305);

return cljs.core.cst$kw$recur;
} else {
throw e33332;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32913__auto__,cljs.core.cst$kw$recur)){
var G__33392 = state_33305;
state_33305 = G__33392;
continue;
} else {
return ret_value__32913__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32912__auto__ = function(state_33305){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32912__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32912__auto____1.call(this,state_33305);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32912__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32912__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32912__auto__;
})()
;})(switch__32911__auto__,c__33011__auto__,jobs,results,process,async))
})();
var state__33013__auto__ = (function (){var statearr_33334 = (f__33012__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33012__auto__.cljs$core$IFn$_invoke$arity$0() : f__33012__auto__.call(null));
(statearr_33334[(6)] = c__33011__auto__);

return statearr_33334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33013__auto__);
});})(c__33011__auto__,jobs,results,process,async))
);

return c__33011__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__33394 = arguments.length;
switch (G__33394) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__33397 = arguments.length;
switch (G__33397) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__33400 = arguments.length;
switch (G__33400) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__33011__auto___33449 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33011__auto___33449,tc,fc){
return (function (){
var f__33012__auto__ = (function (){var switch__32911__auto__ = ((function (c__33011__auto___33449,tc,fc){
return (function (state_33426){
var state_val_33427 = (state_33426[(1)]);
if((state_val_33427 === (7))){
var inst_33422 = (state_33426[(2)]);
var state_33426__$1 = state_33426;
var statearr_33428_33450 = state_33426__$1;
(statearr_33428_33450[(2)] = inst_33422);

(statearr_33428_33450[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33427 === (1))){
var state_33426__$1 = state_33426;
var statearr_33429_33451 = state_33426__$1;
(statearr_33429_33451[(2)] = null);

(statearr_33429_33451[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33427 === (4))){
var inst_33403 = (state_33426[(7)]);
var inst_33403__$1 = (state_33426[(2)]);
var inst_33404 = (inst_33403__$1 == null);
var state_33426__$1 = (function (){var statearr_33430 = state_33426;
(statearr_33430[(7)] = inst_33403__$1);

return statearr_33430;
})();
if(cljs.core.truth_(inst_33404)){
var statearr_33431_33452 = state_33426__$1;
(statearr_33431_33452[(1)] = (5));

} else {
var statearr_33432_33453 = state_33426__$1;
(statearr_33432_33453[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33427 === (13))){
var state_33426__$1 = state_33426;
var statearr_33433_33454 = state_33426__$1;
(statearr_33433_33454[(2)] = null);

(statearr_33433_33454[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33427 === (6))){
var inst_33403 = (state_33426[(7)]);
var inst_33409 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33403) : p.call(null,inst_33403));
var state_33426__$1 = state_33426;
if(cljs.core.truth_(inst_33409)){
var statearr_33434_33455 = state_33426__$1;
(statearr_33434_33455[(1)] = (9));

} else {
var statearr_33435_33456 = state_33426__$1;
(statearr_33435_33456[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33427 === (3))){
var inst_33424 = (state_33426[(2)]);
var state_33426__$1 = state_33426;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33426__$1,inst_33424);
} else {
if((state_val_33427 === (12))){
var state_33426__$1 = state_33426;
var statearr_33436_33457 = state_33426__$1;
(statearr_33436_33457[(2)] = null);

(statearr_33436_33457[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33427 === (2))){
var state_33426__$1 = state_33426;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33426__$1,(4),ch);
} else {
if((state_val_33427 === (11))){
var inst_33403 = (state_33426[(7)]);
var inst_33413 = (state_33426[(2)]);
var state_33426__$1 = state_33426;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33426__$1,(8),inst_33413,inst_33403);
} else {
if((state_val_33427 === (9))){
var state_33426__$1 = state_33426;
var statearr_33437_33458 = state_33426__$1;
(statearr_33437_33458[(2)] = tc);

(statearr_33437_33458[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33427 === (5))){
var inst_33406 = cljs.core.async.close_BANG_(tc);
var inst_33407 = cljs.core.async.close_BANG_(fc);
var state_33426__$1 = (function (){var statearr_33438 = state_33426;
(statearr_33438[(8)] = inst_33406);

return statearr_33438;
})();
var statearr_33439_33459 = state_33426__$1;
(statearr_33439_33459[(2)] = inst_33407);

(statearr_33439_33459[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33427 === (14))){
var inst_33420 = (state_33426[(2)]);
var state_33426__$1 = state_33426;
var statearr_33440_33460 = state_33426__$1;
(statearr_33440_33460[(2)] = inst_33420);

(statearr_33440_33460[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33427 === (10))){
var state_33426__$1 = state_33426;
var statearr_33441_33461 = state_33426__$1;
(statearr_33441_33461[(2)] = fc);

(statearr_33441_33461[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33427 === (8))){
var inst_33415 = (state_33426[(2)]);
var state_33426__$1 = state_33426;
if(cljs.core.truth_(inst_33415)){
var statearr_33442_33462 = state_33426__$1;
(statearr_33442_33462[(1)] = (12));

} else {
var statearr_33443_33463 = state_33426__$1;
(statearr_33443_33463[(1)] = (13));

}

return cljs.core.cst$kw$recur;
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
});})(c__33011__auto___33449,tc,fc))
;
return ((function (switch__32911__auto__,c__33011__auto___33449,tc,fc){
return (function() {
var cljs$core$async$state_machine__32912__auto__ = null;
var cljs$core$async$state_machine__32912__auto____0 = (function (){
var statearr_33444 = [null,null,null,null,null,null,null,null,null];
(statearr_33444[(0)] = cljs$core$async$state_machine__32912__auto__);

(statearr_33444[(1)] = (1));

return statearr_33444;
});
var cljs$core$async$state_machine__32912__auto____1 = (function (state_33426){
while(true){
var ret_value__32913__auto__ = (function (){try{while(true){
var result__32914__auto__ = switch__32911__auto__(state_33426);
if(cljs.core.keyword_identical_QMARK_(result__32914__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__32914__auto__;
}
break;
}
}catch (e33445){if((e33445 instanceof Object)){
var ex__32915__auto__ = e33445;
var statearr_33446_33464 = state_33426;
(statearr_33446_33464[(5)] = ex__32915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33426);

return cljs.core.cst$kw$recur;
} else {
throw e33445;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32913__auto__,cljs.core.cst$kw$recur)){
var G__33465 = state_33426;
state_33426 = G__33465;
continue;
} else {
return ret_value__32913__auto__;
}
break;
}
});
cljs$core$async$state_machine__32912__auto__ = function(state_33426){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32912__auto____1.call(this,state_33426);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32912__auto____0;
cljs$core$async$state_machine__32912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32912__auto____1;
return cljs$core$async$state_machine__32912__auto__;
})()
;})(switch__32911__auto__,c__33011__auto___33449,tc,fc))
})();
var state__33013__auto__ = (function (){var statearr_33447 = (f__33012__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33012__auto__.cljs$core$IFn$_invoke$arity$0() : f__33012__auto__.call(null));
(statearr_33447[(6)] = c__33011__auto___33449);

return statearr_33447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33013__auto__);
});})(c__33011__auto___33449,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33011__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33011__auto__){
return (function (){
var f__33012__auto__ = (function (){var switch__32911__auto__ = ((function (c__33011__auto__){
return (function (state_33486){
var state_val_33487 = (state_33486[(1)]);
if((state_val_33487 === (7))){
var inst_33482 = (state_33486[(2)]);
var state_33486__$1 = state_33486;
var statearr_33488_33506 = state_33486__$1;
(statearr_33488_33506[(2)] = inst_33482);

(statearr_33488_33506[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33487 === (1))){
var inst_33466 = init;
var state_33486__$1 = (function (){var statearr_33489 = state_33486;
(statearr_33489[(7)] = inst_33466);

return statearr_33489;
})();
var statearr_33490_33507 = state_33486__$1;
(statearr_33490_33507[(2)] = null);

(statearr_33490_33507[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33487 === (4))){
var inst_33469 = (state_33486[(8)]);
var inst_33469__$1 = (state_33486[(2)]);
var inst_33470 = (inst_33469__$1 == null);
var state_33486__$1 = (function (){var statearr_33491 = state_33486;
(statearr_33491[(8)] = inst_33469__$1);

return statearr_33491;
})();
if(cljs.core.truth_(inst_33470)){
var statearr_33492_33508 = state_33486__$1;
(statearr_33492_33508[(1)] = (5));

} else {
var statearr_33493_33509 = state_33486__$1;
(statearr_33493_33509[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33487 === (6))){
var inst_33466 = (state_33486[(7)]);
var inst_33469 = (state_33486[(8)]);
var inst_33473 = (state_33486[(9)]);
var inst_33473__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33466,inst_33469) : f.call(null,inst_33466,inst_33469));
var inst_33474 = cljs.core.reduced_QMARK_(inst_33473__$1);
var state_33486__$1 = (function (){var statearr_33494 = state_33486;
(statearr_33494[(9)] = inst_33473__$1);

return statearr_33494;
})();
if(inst_33474){
var statearr_33495_33510 = state_33486__$1;
(statearr_33495_33510[(1)] = (8));

} else {
var statearr_33496_33511 = state_33486__$1;
(statearr_33496_33511[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33487 === (3))){
var inst_33484 = (state_33486[(2)]);
var state_33486__$1 = state_33486;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33486__$1,inst_33484);
} else {
if((state_val_33487 === (2))){
var state_33486__$1 = state_33486;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33486__$1,(4),ch);
} else {
if((state_val_33487 === (9))){
var inst_33473 = (state_33486[(9)]);
var inst_33466 = inst_33473;
var state_33486__$1 = (function (){var statearr_33497 = state_33486;
(statearr_33497[(7)] = inst_33466);

return statearr_33497;
})();
var statearr_33498_33512 = state_33486__$1;
(statearr_33498_33512[(2)] = null);

(statearr_33498_33512[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33487 === (5))){
var inst_33466 = (state_33486[(7)]);
var state_33486__$1 = state_33486;
var statearr_33499_33513 = state_33486__$1;
(statearr_33499_33513[(2)] = inst_33466);

(statearr_33499_33513[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33487 === (10))){
var inst_33480 = (state_33486[(2)]);
var state_33486__$1 = state_33486;
var statearr_33500_33514 = state_33486__$1;
(statearr_33500_33514[(2)] = inst_33480);

(statearr_33500_33514[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33487 === (8))){
var inst_33473 = (state_33486[(9)]);
var inst_33476 = cljs.core.deref(inst_33473);
var state_33486__$1 = state_33486;
var statearr_33501_33515 = state_33486__$1;
(statearr_33501_33515[(2)] = inst_33476);

(statearr_33501_33515[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__33011__auto__))
;
return ((function (switch__32911__auto__,c__33011__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__32912__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32912__auto____0 = (function (){
var statearr_33502 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33502[(0)] = cljs$core$async$reduce_$_state_machine__32912__auto__);

(statearr_33502[(1)] = (1));

return statearr_33502;
});
var cljs$core$async$reduce_$_state_machine__32912__auto____1 = (function (state_33486){
while(true){
var ret_value__32913__auto__ = (function (){try{while(true){
var result__32914__auto__ = switch__32911__auto__(state_33486);
if(cljs.core.keyword_identical_QMARK_(result__32914__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__32914__auto__;
}
break;
}
}catch (e33503){if((e33503 instanceof Object)){
var ex__32915__auto__ = e33503;
var statearr_33504_33516 = state_33486;
(statearr_33504_33516[(5)] = ex__32915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33486);

return cljs.core.cst$kw$recur;
} else {
throw e33503;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32913__auto__,cljs.core.cst$kw$recur)){
var G__33517 = state_33486;
state_33486 = G__33517;
continue;
} else {
return ret_value__32913__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32912__auto__ = function(state_33486){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32912__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32912__auto____1.call(this,state_33486);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__32912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32912__auto____0;
cljs$core$async$reduce_$_state_machine__32912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32912__auto____1;
return cljs$core$async$reduce_$_state_machine__32912__auto__;
})()
;})(switch__32911__auto__,c__33011__auto__))
})();
var state__33013__auto__ = (function (){var statearr_33505 = (f__33012__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33012__auto__.cljs$core$IFn$_invoke$arity$0() : f__33012__auto__.call(null));
(statearr_33505[(6)] = c__33011__auto__);

return statearr_33505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33013__auto__);
});})(c__33011__auto__))
);

return c__33011__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__33011__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33011__auto__,f__$1){
return (function (){
var f__33012__auto__ = (function (){var switch__32911__auto__ = ((function (c__33011__auto__,f__$1){
return (function (state_33523){
var state_val_33524 = (state_33523[(1)]);
if((state_val_33524 === (1))){
var inst_33518 = cljs.core.async.reduce(f__$1,init,ch);
var state_33523__$1 = state_33523;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33523__$1,(2),inst_33518);
} else {
if((state_val_33524 === (2))){
var inst_33520 = (state_33523[(2)]);
var inst_33521 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33520) : f__$1.call(null,inst_33520));
var state_33523__$1 = state_33523;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33523__$1,inst_33521);
} else {
return null;
}
}
});})(c__33011__auto__,f__$1))
;
return ((function (switch__32911__auto__,c__33011__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__32912__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32912__auto____0 = (function (){
var statearr_33525 = [null,null,null,null,null,null,null];
(statearr_33525[(0)] = cljs$core$async$transduce_$_state_machine__32912__auto__);

(statearr_33525[(1)] = (1));

return statearr_33525;
});
var cljs$core$async$transduce_$_state_machine__32912__auto____1 = (function (state_33523){
while(true){
var ret_value__32913__auto__ = (function (){try{while(true){
var result__32914__auto__ = switch__32911__auto__(state_33523);
if(cljs.core.keyword_identical_QMARK_(result__32914__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__32914__auto__;
}
break;
}
}catch (e33526){if((e33526 instanceof Object)){
var ex__32915__auto__ = e33526;
var statearr_33527_33529 = state_33523;
(statearr_33527_33529[(5)] = ex__32915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33523);

return cljs.core.cst$kw$recur;
} else {
throw e33526;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32913__auto__,cljs.core.cst$kw$recur)){
var G__33530 = state_33523;
state_33523 = G__33530;
continue;
} else {
return ret_value__32913__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32912__auto__ = function(state_33523){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32912__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32912__auto____1.call(this,state_33523);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__32912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32912__auto____0;
cljs$core$async$transduce_$_state_machine__32912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32912__auto____1;
return cljs$core$async$transduce_$_state_machine__32912__auto__;
})()
;})(switch__32911__auto__,c__33011__auto__,f__$1))
})();
var state__33013__auto__ = (function (){var statearr_33528 = (f__33012__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33012__auto__.cljs$core$IFn$_invoke$arity$0() : f__33012__auto__.call(null));
(statearr_33528[(6)] = c__33011__auto__);

return statearr_33528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33013__auto__);
});})(c__33011__auto__,f__$1))
);

return c__33011__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__33532 = arguments.length;
switch (G__33532) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33011__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33011__auto__){
return (function (){
var f__33012__auto__ = (function (){var switch__32911__auto__ = ((function (c__33011__auto__){
return (function (state_33557){
var state_val_33558 = (state_33557[(1)]);
if((state_val_33558 === (7))){
var inst_33539 = (state_33557[(2)]);
var state_33557__$1 = state_33557;
var statearr_33559_33580 = state_33557__$1;
(statearr_33559_33580[(2)] = inst_33539);

(statearr_33559_33580[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33558 === (1))){
var inst_33533 = cljs.core.seq(coll);
var inst_33534 = inst_33533;
var state_33557__$1 = (function (){var statearr_33560 = state_33557;
(statearr_33560[(7)] = inst_33534);

return statearr_33560;
})();
var statearr_33561_33581 = state_33557__$1;
(statearr_33561_33581[(2)] = null);

(statearr_33561_33581[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33558 === (4))){
var inst_33534 = (state_33557[(7)]);
var inst_33537 = cljs.core.first(inst_33534);
var state_33557__$1 = state_33557;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33557__$1,(7),ch,inst_33537);
} else {
if((state_val_33558 === (13))){
var inst_33551 = (state_33557[(2)]);
var state_33557__$1 = state_33557;
var statearr_33562_33582 = state_33557__$1;
(statearr_33562_33582[(2)] = inst_33551);

(statearr_33562_33582[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33558 === (6))){
var inst_33542 = (state_33557[(2)]);
var state_33557__$1 = state_33557;
if(cljs.core.truth_(inst_33542)){
var statearr_33563_33583 = state_33557__$1;
(statearr_33563_33583[(1)] = (8));

} else {
var statearr_33564_33584 = state_33557__$1;
(statearr_33564_33584[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33558 === (3))){
var inst_33555 = (state_33557[(2)]);
var state_33557__$1 = state_33557;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33557__$1,inst_33555);
} else {
if((state_val_33558 === (12))){
var state_33557__$1 = state_33557;
var statearr_33565_33585 = state_33557__$1;
(statearr_33565_33585[(2)] = null);

(statearr_33565_33585[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33558 === (2))){
var inst_33534 = (state_33557[(7)]);
var state_33557__$1 = state_33557;
if(cljs.core.truth_(inst_33534)){
var statearr_33566_33586 = state_33557__$1;
(statearr_33566_33586[(1)] = (4));

} else {
var statearr_33567_33587 = state_33557__$1;
(statearr_33567_33587[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33558 === (11))){
var inst_33548 = cljs.core.async.close_BANG_(ch);
var state_33557__$1 = state_33557;
var statearr_33568_33588 = state_33557__$1;
(statearr_33568_33588[(2)] = inst_33548);

(statearr_33568_33588[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33558 === (9))){
var state_33557__$1 = state_33557;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33569_33589 = state_33557__$1;
(statearr_33569_33589[(1)] = (11));

} else {
var statearr_33570_33590 = state_33557__$1;
(statearr_33570_33590[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33558 === (5))){
var inst_33534 = (state_33557[(7)]);
var state_33557__$1 = state_33557;
var statearr_33571_33591 = state_33557__$1;
(statearr_33571_33591[(2)] = inst_33534);

(statearr_33571_33591[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33558 === (10))){
var inst_33553 = (state_33557[(2)]);
var state_33557__$1 = state_33557;
var statearr_33572_33592 = state_33557__$1;
(statearr_33572_33592[(2)] = inst_33553);

(statearr_33572_33592[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33558 === (8))){
var inst_33534 = (state_33557[(7)]);
var inst_33544 = cljs.core.next(inst_33534);
var inst_33534__$1 = inst_33544;
var state_33557__$1 = (function (){var statearr_33573 = state_33557;
(statearr_33573[(7)] = inst_33534__$1);

return statearr_33573;
})();
var statearr_33574_33593 = state_33557__$1;
(statearr_33574_33593[(2)] = null);

(statearr_33574_33593[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__33011__auto__))
;
return ((function (switch__32911__auto__,c__33011__auto__){
return (function() {
var cljs$core$async$state_machine__32912__auto__ = null;
var cljs$core$async$state_machine__32912__auto____0 = (function (){
var statearr_33575 = [null,null,null,null,null,null,null,null];
(statearr_33575[(0)] = cljs$core$async$state_machine__32912__auto__);

(statearr_33575[(1)] = (1));

return statearr_33575;
});
var cljs$core$async$state_machine__32912__auto____1 = (function (state_33557){
while(true){
var ret_value__32913__auto__ = (function (){try{while(true){
var result__32914__auto__ = switch__32911__auto__(state_33557);
if(cljs.core.keyword_identical_QMARK_(result__32914__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__32914__auto__;
}
break;
}
}catch (e33576){if((e33576 instanceof Object)){
var ex__32915__auto__ = e33576;
var statearr_33577_33594 = state_33557;
(statearr_33577_33594[(5)] = ex__32915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33557);

return cljs.core.cst$kw$recur;
} else {
throw e33576;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32913__auto__,cljs.core.cst$kw$recur)){
var G__33595 = state_33557;
state_33557 = G__33595;
continue;
} else {
return ret_value__32913__auto__;
}
break;
}
});
cljs$core$async$state_machine__32912__auto__ = function(state_33557){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32912__auto____1.call(this,state_33557);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32912__auto____0;
cljs$core$async$state_machine__32912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32912__auto____1;
return cljs$core$async$state_machine__32912__auto__;
})()
;})(switch__32911__auto__,c__33011__auto__))
})();
var state__33013__auto__ = (function (){var statearr_33578 = (f__33012__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33012__auto__.cljs$core$IFn$_invoke$arity$0() : f__33012__auto__.call(null));
(statearr_33578[(6)] = c__33011__auto__);

return statearr_33578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33013__auto__);
});})(c__33011__auto__))
);

return c__33011__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__28096__auto__ = (((_ == null))?null:_);
var m__28097__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__28096__auto__)]);
if(!((m__28097__auto__ == null))){
return (m__28097__auto__.cljs$core$IFn$_invoke$arity$1 ? m__28097__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__28097__auto__.call(null,_));
} else {
var m__28097__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__28097__auto____$1 == null))){
return (m__28097__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__28097__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__28097__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__28096__auto__ = (((m == null))?null:m);
var m__28097__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__28096__auto__)]);
if(!((m__28097__auto__ == null))){
return (m__28097__auto__.cljs$core$IFn$_invoke$arity$3 ? m__28097__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__28097__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__28097__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__28097__auto____$1 == null))){
return (m__28097__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__28097__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__28097__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__28096__auto__ = (((m == null))?null:m);
var m__28097__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__28096__auto__)]);
if(!((m__28097__auto__ == null))){
return (m__28097__auto__.cljs$core$IFn$_invoke$arity$2 ? m__28097__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__28097__auto__.call(null,m,ch));
} else {
var m__28097__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__28097__auto____$1 == null))){
return (m__28097__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__28097__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__28097__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__28096__auto__ = (((m == null))?null:m);
var m__28097__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__28096__auto__)]);
if(!((m__28097__auto__ == null))){
return (m__28097__auto__.cljs$core$IFn$_invoke$arity$1 ? m__28097__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__28097__auto__.call(null,m));
} else {
var m__28097__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__28097__auto____$1 == null))){
return (m__28097__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__28097__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__28097__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async33596 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33596 = (function (ch,cs,meta33597){
this.ch = ch;
this.cs = cs;
this.meta33597 = meta33597;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33598,meta33597__$1){
var self__ = this;
var _33598__$1 = this;
return (new cljs.core.async.t_cljs$core$async33596(self__.ch,self__.cs,meta33597__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async33596.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33598){
var self__ = this;
var _33598__$1 = this;
return self__.meta33597;
});})(cs))
;

cljs.core.async.t_cljs$core$async33596.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33596.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async33596.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33596.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33596.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33596.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33596.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta33597], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async33596.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33596.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33596";

cljs.core.async.t_cljs$core$async33596.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__28038__auto__,writer__28039__auto__,opt__28040__auto__){
return cljs.core._write(writer__28039__auto__,"cljs.core.async/t_cljs$core$async33596");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async33596 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async33596(ch__$1,cs__$1,meta33597){
return (new cljs.core.async.t_cljs$core$async33596(ch__$1,cs__$1,meta33597));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async33596(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__33011__auto___33818 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33011__auto___33818,cs,m,dchan,dctr,done){
return (function (){
var f__33012__auto__ = (function (){var switch__32911__auto__ = ((function (c__33011__auto___33818,cs,m,dchan,dctr,done){
return (function (state_33733){
var state_val_33734 = (state_33733[(1)]);
if((state_val_33734 === (7))){
var inst_33729 = (state_33733[(2)]);
var state_33733__$1 = state_33733;
var statearr_33735_33819 = state_33733__$1;
(statearr_33735_33819[(2)] = inst_33729);

(statearr_33735_33819[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33734 === (20))){
var inst_33632 = (state_33733[(7)]);
var inst_33644 = cljs.core.first(inst_33632);
var inst_33645 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33644,(0),null);
var inst_33646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33644,(1),null);
var state_33733__$1 = (function (){var statearr_33736 = state_33733;
(statearr_33736[(8)] = inst_33645);

return statearr_33736;
})();
if(cljs.core.truth_(inst_33646)){
var statearr_33737_33820 = state_33733__$1;
(statearr_33737_33820[(1)] = (22));

} else {
var statearr_33738_33821 = state_33733__$1;
(statearr_33738_33821[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33734 === (27))){
var inst_33681 = (state_33733[(9)]);
var inst_33676 = (state_33733[(10)]);
var inst_33601 = (state_33733[(11)]);
var inst_33674 = (state_33733[(12)]);
var inst_33681__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_33674,inst_33676);
var inst_33682 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33681__$1,inst_33601,done);
var state_33733__$1 = (function (){var statearr_33739 = state_33733;
(statearr_33739[(9)] = inst_33681__$1);

return statearr_33739;
})();
if(cljs.core.truth_(inst_33682)){
var statearr_33740_33822 = state_33733__$1;
(statearr_33740_33822[(1)] = (30));

} else {
var statearr_33741_33823 = state_33733__$1;
(statearr_33741_33823[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33734 === (1))){
var state_33733__$1 = state_33733;
var statearr_33742_33824 = state_33733__$1;
(statearr_33742_33824[(2)] = null);

(statearr_33742_33824[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33734 === (24))){
var inst_33632 = (state_33733[(7)]);
var inst_33651 = (state_33733[(2)]);
var inst_33652 = cljs.core.next(inst_33632);
var inst_33610 = inst_33652;
var inst_33611 = null;
var inst_33612 = (0);
var inst_33613 = (0);
var state_33733__$1 = (function (){var statearr_33743 = state_33733;
(statearr_33743[(13)] = inst_33610);

(statearr_33743[(14)] = inst_33611);

(statearr_33743[(15)] = inst_33613);

(statearr_33743[(16)] = inst_33612);

(statearr_33743[(17)] = inst_33651);

return statearr_33743;
})();
var statearr_33744_33825 = state_33733__$1;
(statearr_33744_33825[(2)] = null);

(statearr_33744_33825[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33734 === (39))){
var state_33733__$1 = state_33733;
var statearr_33748_33826 = state_33733__$1;
(statearr_33748_33826[(2)] = null);

(statearr_33748_33826[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33734 === (4))){
var inst_33601 = (state_33733[(11)]);
var inst_33601__$1 = (state_33733[(2)]);
var inst_33602 = (inst_33601__$1 == null);
var state_33733__$1 = (function (){var statearr_33749 = state_33733;
(statearr_33749[(11)] = inst_33601__$1);

return statearr_33749;
})();
if(cljs.core.truth_(inst_33602)){
var statearr_33750_33827 = state_33733__$1;
(statearr_33750_33827[(1)] = (5));

} else {
var statearr_33751_33828 = state_33733__$1;
(statearr_33751_33828[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33734 === (15))){
var inst_33610 = (state_33733[(13)]);
var inst_33611 = (state_33733[(14)]);
var inst_33613 = (state_33733[(15)]);
var inst_33612 = (state_33733[(16)]);
var inst_33628 = (state_33733[(2)]);
var inst_33629 = (inst_33613 + (1));
var tmp33745 = inst_33610;
var tmp33746 = inst_33611;
var tmp33747 = inst_33612;
var inst_33610__$1 = tmp33745;
var inst_33611__$1 = tmp33746;
var inst_33612__$1 = tmp33747;
var inst_33613__$1 = inst_33629;
var state_33733__$1 = (function (){var statearr_33752 = state_33733;
(statearr_33752[(13)] = inst_33610__$1);

(statearr_33752[(14)] = inst_33611__$1);

(statearr_33752[(18)] = inst_33628);

(statearr_33752[(15)] = inst_33613__$1);

(statearr_33752[(16)] = inst_33612__$1);

return statearr_33752;
})();
var statearr_33753_33829 = state_33733__$1;
(statearr_33753_33829[(2)] = null);

(statearr_33753_33829[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33734 === (21))){
var inst_33655 = (state_33733[(2)]);
var state_33733__$1 = state_33733;
var statearr_33757_33830 = state_33733__$1;
(statearr_33757_33830[(2)] = inst_33655);

(statearr_33757_33830[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33734 === (31))){
var inst_33681 = (state_33733[(9)]);
var inst_33685 = done(null);
var inst_33686 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33681);
var state_33733__$1 = (function (){var statearr_33758 = state_33733;
(statearr_33758[(19)] = inst_33685);

return statearr_33758;
})();
var statearr_33759_33831 = state_33733__$1;
(statearr_33759_33831[(2)] = inst_33686);

(statearr_33759_33831[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33734 === (32))){
var inst_33676 = (state_33733[(10)]);
var inst_33674 = (state_33733[(12)]);
var inst_33675 = (state_33733[(20)]);
var inst_33673 = (state_33733[(21)]);
var inst_33688 = (state_33733[(2)]);
var inst_33689 = (inst_33676 + (1));
var tmp33754 = inst_33674;
var tmp33755 = inst_33675;
var tmp33756 = inst_33673;
var inst_33673__$1 = tmp33756;
var inst_33674__$1 = tmp33754;
var inst_33675__$1 = tmp33755;
var inst_33676__$1 = inst_33689;
var state_33733__$1 = (function (){var statearr_33760 = state_33733;
(statearr_33760[(10)] = inst_33676__$1);

(statearr_33760[(22)] = inst_33688);

(statearr_33760[(12)] = inst_33674__$1);

(statearr_33760[(20)] = inst_33675__$1);

(statearr_33760[(21)] = inst_33673__$1);

return statearr_33760;
})();
var statearr_33761_33832 = state_33733__$1;
(statearr_33761_33832[(2)] = null);

(statearr_33761_33832[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33734 === (40))){
var inst_33701 = (state_33733[(23)]);
var inst_33705 = done(null);
var inst_33706 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33701);
var state_33733__$1 = (function (){var statearr_33762 = state_33733;
(statearr_33762[(24)] = inst_33705);

return statearr_33762;
})();
var statearr_33763_33833 = state_33733__$1;
(statearr_33763_33833[(2)] = inst_33706);

(statearr_33763_33833[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33734 === (33))){
var inst_33692 = (state_33733[(25)]);
var inst_33694 = cljs.core.chunked_seq_QMARK_(inst_33692);
var state_33733__$1 = state_33733;
if(inst_33694){
var statearr_33764_33834 = state_33733__$1;
(statearr_33764_33834[(1)] = (36));

} else {
var statearr_33765_33835 = state_33733__$1;
(statearr_33765_33835[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33734 === (13))){
var inst_33622 = (state_33733[(26)]);
var inst_33625 = cljs.core.async.close_BANG_(inst_33622);
var state_33733__$1 = state_33733;
var statearr_33766_33836 = state_33733__$1;
(statearr_33766_33836[(2)] = inst_33625);

(statearr_33766_33836[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33734 === (22))){
var inst_33645 = (state_33733[(8)]);
var inst_33648 = cljs.core.async.close_BANG_(inst_33645);
var state_33733__$1 = state_33733;
var statearr_33767_33837 = state_33733__$1;
(statearr_33767_33837[(2)] = inst_33648);

(statearr_33767_33837[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33734 === (36))){
var inst_33692 = (state_33733[(25)]);
var inst_33696 = cljs.core.chunk_first(inst_33692);
var inst_33697 = cljs.core.chunk_rest(inst_33692);
var inst_33698 = cljs.core.count(inst_33696);
var inst_33673 = inst_33697;
var inst_33674 = inst_33696;
var inst_33675 = inst_33698;
var inst_33676 = (0);
var state_33733__$1 = (function (){var statearr_33768 = state_33733;
(statearr_33768[(10)] = inst_33676);

(statearr_33768[(12)] = inst_33674);

(statearr_33768[(20)] = inst_33675);

(statearr_33768[(21)] = inst_33673);

return statearr_33768;
})();
var statearr_33769_33838 = state_33733__$1;
(statearr_33769_33838[(2)] = null);

(statearr_33769_33838[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33734 === (41))){
var inst_33692 = (state_33733[(25)]);
var inst_33708 = (state_33733[(2)]);
var inst_33709 = cljs.core.next(inst_33692);
var inst_33673 = inst_33709;
var inst_33674 = null;
var inst_33675 = (0);
var inst_33676 = (0);
var state_33733__$1 = (function (){var statearr_33770 = state_33733;
(statearr_33770[(10)] = inst_33676);

(statearr_33770[(27)] = inst_33708);

(statearr_33770[(12)] = inst_33674);

(statearr_33770[(20)] = inst_33675);

(statearr_33770[(21)] = inst_33673);

return statearr_33770;
})();
var statearr_33771_33839 = state_33733__$1;
(statearr_33771_33839[(2)] = null);

(statearr_33771_33839[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33734 === (43))){
var state_33733__$1 = state_33733;
var statearr_33772_33840 = state_33733__$1;
(statearr_33772_33840[(2)] = null);

(statearr_33772_33840[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33734 === (29))){
var inst_33717 = (state_33733[(2)]);
var state_33733__$1 = state_33733;
var statearr_33773_33841 = state_33733__$1;
(statearr_33773_33841[(2)] = inst_33717);

(statearr_33773_33841[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33734 === (44))){
var inst_33726 = (state_33733[(2)]);
var state_33733__$1 = (function (){var statearr_33774 = state_33733;
(statearr_33774[(28)] = inst_33726);

return statearr_33774;
})();
var statearr_33775_33842 = state_33733__$1;
(statearr_33775_33842[(2)] = null);

(statearr_33775_33842[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33734 === (6))){
var inst_33665 = (state_33733[(29)]);
var inst_33664 = cljs.core.deref(cs);
var inst_33665__$1 = cljs.core.keys(inst_33664);
var inst_33666 = cljs.core.count(inst_33665__$1);
var inst_33667 = cljs.core.reset_BANG_(dctr,inst_33666);
var inst_33672 = cljs.core.seq(inst_33665__$1);
var inst_33673 = inst_33672;
var inst_33674 = null;
var inst_33675 = (0);
var inst_33676 = (0);
var state_33733__$1 = (function (){var statearr_33776 = state_33733;
(statearr_33776[(30)] = inst_33667);

(statearr_33776[(10)] = inst_33676);

(statearr_33776[(29)] = inst_33665__$1);

(statearr_33776[(12)] = inst_33674);

(statearr_33776[(20)] = inst_33675);

(statearr_33776[(21)] = inst_33673);

return statearr_33776;
})();
var statearr_33777_33843 = state_33733__$1;
(statearr_33777_33843[(2)] = null);

(statearr_33777_33843[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33734 === (28))){
var inst_33673 = (state_33733[(21)]);
var inst_33692 = (state_33733[(25)]);
var inst_33692__$1 = cljs.core.seq(inst_33673);
var state_33733__$1 = (function (){var statearr_33778 = state_33733;
(statearr_33778[(25)] = inst_33692__$1);

return statearr_33778;
})();
if(inst_33692__$1){
var statearr_33779_33844 = state_33733__$1;
(statearr_33779_33844[(1)] = (33));

} else {
var statearr_33780_33845 = state_33733__$1;
(statearr_33780_33845[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33734 === (25))){
var inst_33676 = (state_33733[(10)]);
var inst_33675 = (state_33733[(20)]);
var inst_33678 = (inst_33676 < inst_33675);
var inst_33679 = inst_33678;
var state_33733__$1 = state_33733;
if(cljs.core.truth_(inst_33679)){
var statearr_33781_33846 = state_33733__$1;
(statearr_33781_33846[(1)] = (27));

} else {
var statearr_33782_33847 = state_33733__$1;
(statearr_33782_33847[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33734 === (34))){
var state_33733__$1 = state_33733;
var statearr_33783_33848 = state_33733__$1;
(statearr_33783_33848[(2)] = null);

(statearr_33783_33848[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33734 === (17))){
var state_33733__$1 = state_33733;
var statearr_33784_33849 = state_33733__$1;
(statearr_33784_33849[(2)] = null);

(statearr_33784_33849[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33734 === (3))){
var inst_33731 = (state_33733[(2)]);
var state_33733__$1 = state_33733;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33733__$1,inst_33731);
} else {
if((state_val_33734 === (12))){
var inst_33660 = (state_33733[(2)]);
var state_33733__$1 = state_33733;
var statearr_33785_33850 = state_33733__$1;
(statearr_33785_33850[(2)] = inst_33660);

(statearr_33785_33850[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33734 === (2))){
var state_33733__$1 = state_33733;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33733__$1,(4),ch);
} else {
if((state_val_33734 === (23))){
var state_33733__$1 = state_33733;
var statearr_33786_33851 = state_33733__$1;
(statearr_33786_33851[(2)] = null);

(statearr_33786_33851[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33734 === (35))){
var inst_33715 = (state_33733[(2)]);
var state_33733__$1 = state_33733;
var statearr_33787_33852 = state_33733__$1;
(statearr_33787_33852[(2)] = inst_33715);

(statearr_33787_33852[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33734 === (19))){
var inst_33632 = (state_33733[(7)]);
var inst_33636 = cljs.core.chunk_first(inst_33632);
var inst_33637 = cljs.core.chunk_rest(inst_33632);
var inst_33638 = cljs.core.count(inst_33636);
var inst_33610 = inst_33637;
var inst_33611 = inst_33636;
var inst_33612 = inst_33638;
var inst_33613 = (0);
var state_33733__$1 = (function (){var statearr_33788 = state_33733;
(statearr_33788[(13)] = inst_33610);

(statearr_33788[(14)] = inst_33611);

(statearr_33788[(15)] = inst_33613);

(statearr_33788[(16)] = inst_33612);

return statearr_33788;
})();
var statearr_33789_33853 = state_33733__$1;
(statearr_33789_33853[(2)] = null);

(statearr_33789_33853[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33734 === (11))){
var inst_33610 = (state_33733[(13)]);
var inst_33632 = (state_33733[(7)]);
var inst_33632__$1 = cljs.core.seq(inst_33610);
var state_33733__$1 = (function (){var statearr_33790 = state_33733;
(statearr_33790[(7)] = inst_33632__$1);

return statearr_33790;
})();
if(inst_33632__$1){
var statearr_33791_33854 = state_33733__$1;
(statearr_33791_33854[(1)] = (16));

} else {
var statearr_33792_33855 = state_33733__$1;
(statearr_33792_33855[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33734 === (9))){
var inst_33662 = (state_33733[(2)]);
var state_33733__$1 = state_33733;
var statearr_33793_33856 = state_33733__$1;
(statearr_33793_33856[(2)] = inst_33662);

(statearr_33793_33856[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33734 === (5))){
var inst_33608 = cljs.core.deref(cs);
var inst_33609 = cljs.core.seq(inst_33608);
var inst_33610 = inst_33609;
var inst_33611 = null;
var inst_33612 = (0);
var inst_33613 = (0);
var state_33733__$1 = (function (){var statearr_33794 = state_33733;
(statearr_33794[(13)] = inst_33610);

(statearr_33794[(14)] = inst_33611);

(statearr_33794[(15)] = inst_33613);

(statearr_33794[(16)] = inst_33612);

return statearr_33794;
})();
var statearr_33795_33857 = state_33733__$1;
(statearr_33795_33857[(2)] = null);

(statearr_33795_33857[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33734 === (14))){
var state_33733__$1 = state_33733;
var statearr_33796_33858 = state_33733__$1;
(statearr_33796_33858[(2)] = null);

(statearr_33796_33858[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33734 === (45))){
var inst_33723 = (state_33733[(2)]);
var state_33733__$1 = state_33733;
var statearr_33797_33859 = state_33733__$1;
(statearr_33797_33859[(2)] = inst_33723);

(statearr_33797_33859[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33734 === (26))){
var inst_33665 = (state_33733[(29)]);
var inst_33719 = (state_33733[(2)]);
var inst_33720 = cljs.core.seq(inst_33665);
var state_33733__$1 = (function (){var statearr_33798 = state_33733;
(statearr_33798[(31)] = inst_33719);

return statearr_33798;
})();
if(inst_33720){
var statearr_33799_33860 = state_33733__$1;
(statearr_33799_33860[(1)] = (42));

} else {
var statearr_33800_33861 = state_33733__$1;
(statearr_33800_33861[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33734 === (16))){
var inst_33632 = (state_33733[(7)]);
var inst_33634 = cljs.core.chunked_seq_QMARK_(inst_33632);
var state_33733__$1 = state_33733;
if(inst_33634){
var statearr_33801_33862 = state_33733__$1;
(statearr_33801_33862[(1)] = (19));

} else {
var statearr_33802_33863 = state_33733__$1;
(statearr_33802_33863[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33734 === (38))){
var inst_33712 = (state_33733[(2)]);
var state_33733__$1 = state_33733;
var statearr_33803_33864 = state_33733__$1;
(statearr_33803_33864[(2)] = inst_33712);

(statearr_33803_33864[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33734 === (30))){
var state_33733__$1 = state_33733;
var statearr_33804_33865 = state_33733__$1;
(statearr_33804_33865[(2)] = null);

(statearr_33804_33865[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33734 === (10))){
var inst_33611 = (state_33733[(14)]);
var inst_33613 = (state_33733[(15)]);
var inst_33621 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_33611,inst_33613);
var inst_33622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33621,(0),null);
var inst_33623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33621,(1),null);
var state_33733__$1 = (function (){var statearr_33805 = state_33733;
(statearr_33805[(26)] = inst_33622);

return statearr_33805;
})();
if(cljs.core.truth_(inst_33623)){
var statearr_33806_33866 = state_33733__$1;
(statearr_33806_33866[(1)] = (13));

} else {
var statearr_33807_33867 = state_33733__$1;
(statearr_33807_33867[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33734 === (18))){
var inst_33658 = (state_33733[(2)]);
var state_33733__$1 = state_33733;
var statearr_33808_33868 = state_33733__$1;
(statearr_33808_33868[(2)] = inst_33658);

(statearr_33808_33868[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33734 === (42))){
var state_33733__$1 = state_33733;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33733__$1,(45),dchan);
} else {
if((state_val_33734 === (37))){
var inst_33601 = (state_33733[(11)]);
var inst_33701 = (state_33733[(23)]);
var inst_33692 = (state_33733[(25)]);
var inst_33701__$1 = cljs.core.first(inst_33692);
var inst_33702 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33701__$1,inst_33601,done);
var state_33733__$1 = (function (){var statearr_33809 = state_33733;
(statearr_33809[(23)] = inst_33701__$1);

return statearr_33809;
})();
if(cljs.core.truth_(inst_33702)){
var statearr_33810_33869 = state_33733__$1;
(statearr_33810_33869[(1)] = (39));

} else {
var statearr_33811_33870 = state_33733__$1;
(statearr_33811_33870[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33734 === (8))){
var inst_33613 = (state_33733[(15)]);
var inst_33612 = (state_33733[(16)]);
var inst_33615 = (inst_33613 < inst_33612);
var inst_33616 = inst_33615;
var state_33733__$1 = state_33733;
if(cljs.core.truth_(inst_33616)){
var statearr_33812_33871 = state_33733__$1;
(statearr_33812_33871[(1)] = (10));

} else {
var statearr_33813_33872 = state_33733__$1;
(statearr_33813_33872[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__33011__auto___33818,cs,m,dchan,dctr,done))
;
return ((function (switch__32911__auto__,c__33011__auto___33818,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__32912__auto__ = null;
var cljs$core$async$mult_$_state_machine__32912__auto____0 = (function (){
var statearr_33814 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33814[(0)] = cljs$core$async$mult_$_state_machine__32912__auto__);

(statearr_33814[(1)] = (1));

return statearr_33814;
});
var cljs$core$async$mult_$_state_machine__32912__auto____1 = (function (state_33733){
while(true){
var ret_value__32913__auto__ = (function (){try{while(true){
var result__32914__auto__ = switch__32911__auto__(state_33733);
if(cljs.core.keyword_identical_QMARK_(result__32914__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__32914__auto__;
}
break;
}
}catch (e33815){if((e33815 instanceof Object)){
var ex__32915__auto__ = e33815;
var statearr_33816_33873 = state_33733;
(statearr_33816_33873[(5)] = ex__32915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33733);

return cljs.core.cst$kw$recur;
} else {
throw e33815;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32913__auto__,cljs.core.cst$kw$recur)){
var G__33874 = state_33733;
state_33733 = G__33874;
continue;
} else {
return ret_value__32913__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32912__auto__ = function(state_33733){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32912__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32912__auto____1.call(this,state_33733);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__32912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32912__auto____0;
cljs$core$async$mult_$_state_machine__32912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32912__auto____1;
return cljs$core$async$mult_$_state_machine__32912__auto__;
})()
;})(switch__32911__auto__,c__33011__auto___33818,cs,m,dchan,dctr,done))
})();
var state__33013__auto__ = (function (){var statearr_33817 = (f__33012__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33012__auto__.cljs$core$IFn$_invoke$arity$0() : f__33012__auto__.call(null));
(statearr_33817[(6)] = c__33011__auto___33818);

return statearr_33817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33013__auto__);
});})(c__33011__auto___33818,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__33876 = arguments.length;
switch (G__33876) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__28096__auto__ = (((m == null))?null:m);
var m__28097__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__28096__auto__)]);
if(!((m__28097__auto__ == null))){
return (m__28097__auto__.cljs$core$IFn$_invoke$arity$2 ? m__28097__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__28097__auto__.call(null,m,ch));
} else {
var m__28097__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__28097__auto____$1 == null))){
return (m__28097__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__28097__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__28097__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__28096__auto__ = (((m == null))?null:m);
var m__28097__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__28096__auto__)]);
if(!((m__28097__auto__ == null))){
return (m__28097__auto__.cljs$core$IFn$_invoke$arity$2 ? m__28097__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__28097__auto__.call(null,m,ch));
} else {
var m__28097__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__28097__auto____$1 == null))){
return (m__28097__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__28097__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__28097__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__28096__auto__ = (((m == null))?null:m);
var m__28097__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__28096__auto__)]);
if(!((m__28097__auto__ == null))){
return (m__28097__auto__.cljs$core$IFn$_invoke$arity$1 ? m__28097__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__28097__auto__.call(null,m));
} else {
var m__28097__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__28097__auto____$1 == null))){
return (m__28097__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__28097__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__28097__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__28096__auto__ = (((m == null))?null:m);
var m__28097__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__28096__auto__)]);
if(!((m__28097__auto__ == null))){
return (m__28097__auto__.cljs$core$IFn$_invoke$arity$2 ? m__28097__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__28097__auto__.call(null,m,state_map));
} else {
var m__28097__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__28097__auto____$1 == null))){
return (m__28097__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__28097__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__28097__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__28096__auto__ = (((m == null))?null:m);
var m__28097__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__28096__auto__)]);
if(!((m__28097__auto__ == null))){
return (m__28097__auto__.cljs$core$IFn$_invoke$arity$2 ? m__28097__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__28097__auto__.call(null,m,mode));
} else {
var m__28097__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__28097__auto____$1 == null))){
return (m__28097__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__28097__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__28097__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__28559__auto__ = [];
var len__28552__auto___33888 = arguments.length;
var i__28553__auto___33889 = (0);
while(true){
if((i__28553__auto___33889 < len__28552__auto___33888)){
args__28559__auto__.push((arguments[i__28553__auto___33889]));

var G__33890 = (i__28553__auto___33889 + (1));
i__28553__auto___33889 = G__33890;
continue;
} else {
}
break;
}

var argseq__28560__auto__ = ((((3) < args__28559__auto__.length))?(new cljs.core.IndexedSeq(args__28559__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28560__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33882){
var map__33883 = p__33882;
var map__33883__$1 = ((((!((map__33883 == null)))?((((map__33883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33883.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33883):map__33883);
var opts = map__33883__$1;
var statearr_33885_33891 = state;
(statearr_33885_33891[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts(((function (map__33883,map__33883__$1,opts){
return (function (val){
var statearr_33886_33892 = state;
(statearr_33886_33892[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__33883,map__33883__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_33887_33893 = state;
(statearr_33887_33893[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33878){
var G__33879 = cljs.core.first(seq33878);
var seq33878__$1 = cljs.core.next(seq33878);
var G__33880 = cljs.core.first(seq33878__$1);
var seq33878__$2 = cljs.core.next(seq33878__$1);
var G__33881 = cljs.core.first(seq33878__$2);
var seq33878__$3 = cljs.core.next(seq33878__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33879,G__33880,G__33881,seq33878__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async33894 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33894 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta33895){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta33895 = meta33895;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33894.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33896,meta33895__$1){
var self__ = this;
var _33896__$1 = this;
return (new cljs.core.async.t_cljs$core$async33894(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta33895__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33894.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33896){
var self__ = this;
var _33896__$1 = this;
return self__.meta33895;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33894.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33894.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33894.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33894.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33894.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33894.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33894.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33894.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33894.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta33895], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33894.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33894.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33894";

cljs.core.async.t_cljs$core$async33894.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__28038__auto__,writer__28039__auto__,opt__28040__auto__){
return cljs.core._write(writer__28039__auto__,"cljs.core.async/t_cljs$core$async33894");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async33894 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async33894(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta33895){
return (new cljs.core.async.t_cljs$core$async33894(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta33895));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async33894(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33011__auto___34058 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33011__auto___34058,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__33012__auto__ = (function (){var switch__32911__auto__ = ((function (c__33011__auto___34058,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_33998){
var state_val_33999 = (state_33998[(1)]);
if((state_val_33999 === (7))){
var inst_33913 = (state_33998[(2)]);
var state_33998__$1 = state_33998;
var statearr_34000_34059 = state_33998__$1;
(statearr_34000_34059[(2)] = inst_33913);

(statearr_34000_34059[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33999 === (20))){
var inst_33925 = (state_33998[(7)]);
var state_33998__$1 = state_33998;
var statearr_34001_34060 = state_33998__$1;
(statearr_34001_34060[(2)] = inst_33925);

(statearr_34001_34060[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33999 === (27))){
var state_33998__$1 = state_33998;
var statearr_34002_34061 = state_33998__$1;
(statearr_34002_34061[(2)] = null);

(statearr_34002_34061[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33999 === (1))){
var inst_33900 = (state_33998[(8)]);
var inst_33900__$1 = calc_state();
var inst_33902 = (inst_33900__$1 == null);
var inst_33903 = cljs.core.not(inst_33902);
var state_33998__$1 = (function (){var statearr_34003 = state_33998;
(statearr_34003[(8)] = inst_33900__$1);

return statearr_34003;
})();
if(inst_33903){
var statearr_34004_34062 = state_33998__$1;
(statearr_34004_34062[(1)] = (2));

} else {
var statearr_34005_34063 = state_33998__$1;
(statearr_34005_34063[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33999 === (24))){
var inst_33958 = (state_33998[(9)]);
var inst_33972 = (state_33998[(10)]);
var inst_33949 = (state_33998[(11)]);
var inst_33972__$1 = (inst_33949.cljs$core$IFn$_invoke$arity$1 ? inst_33949.cljs$core$IFn$_invoke$arity$1(inst_33958) : inst_33949.call(null,inst_33958));
var state_33998__$1 = (function (){var statearr_34006 = state_33998;
(statearr_34006[(10)] = inst_33972__$1);

return statearr_34006;
})();
if(cljs.core.truth_(inst_33972__$1)){
var statearr_34007_34064 = state_33998__$1;
(statearr_34007_34064[(1)] = (29));

} else {
var statearr_34008_34065 = state_33998__$1;
(statearr_34008_34065[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33999 === (4))){
var inst_33916 = (state_33998[(2)]);
var state_33998__$1 = state_33998;
if(cljs.core.truth_(inst_33916)){
var statearr_34009_34066 = state_33998__$1;
(statearr_34009_34066[(1)] = (8));

} else {
var statearr_34010_34067 = state_33998__$1;
(statearr_34010_34067[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33999 === (15))){
var inst_33943 = (state_33998[(2)]);
var state_33998__$1 = state_33998;
if(cljs.core.truth_(inst_33943)){
var statearr_34011_34068 = state_33998__$1;
(statearr_34011_34068[(1)] = (19));

} else {
var statearr_34012_34069 = state_33998__$1;
(statearr_34012_34069[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33999 === (21))){
var inst_33948 = (state_33998[(12)]);
var inst_33948__$1 = (state_33998[(2)]);
var inst_33949 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33948__$1,cljs.core.cst$kw$solos);
var inst_33950 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33948__$1,cljs.core.cst$kw$mutes);
var inst_33951 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33948__$1,cljs.core.cst$kw$reads);
var state_33998__$1 = (function (){var statearr_34013 = state_33998;
(statearr_34013[(13)] = inst_33950);

(statearr_34013[(12)] = inst_33948__$1);

(statearr_34013[(11)] = inst_33949);

return statearr_34013;
})();
return cljs.core.async.ioc_alts_BANG_(state_33998__$1,(22),inst_33951);
} else {
if((state_val_33999 === (31))){
var inst_33980 = (state_33998[(2)]);
var state_33998__$1 = state_33998;
if(cljs.core.truth_(inst_33980)){
var statearr_34014_34070 = state_33998__$1;
(statearr_34014_34070[(1)] = (32));

} else {
var statearr_34015_34071 = state_33998__$1;
(statearr_34015_34071[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33999 === (32))){
var inst_33957 = (state_33998[(14)]);
var state_33998__$1 = state_33998;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33998__$1,(35),out,inst_33957);
} else {
if((state_val_33999 === (33))){
var inst_33948 = (state_33998[(12)]);
var inst_33925 = inst_33948;
var state_33998__$1 = (function (){var statearr_34016 = state_33998;
(statearr_34016[(7)] = inst_33925);

return statearr_34016;
})();
var statearr_34017_34072 = state_33998__$1;
(statearr_34017_34072[(2)] = null);

(statearr_34017_34072[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33999 === (13))){
var inst_33925 = (state_33998[(7)]);
var inst_33932 = inst_33925.cljs$lang$protocol_mask$partition0$;
var inst_33933 = (inst_33932 & (64));
var inst_33934 = inst_33925.cljs$core$ISeq$;
var inst_33935 = (cljs.core.PROTOCOL_SENTINEL === inst_33934);
var inst_33936 = (inst_33933) || (inst_33935);
var state_33998__$1 = state_33998;
if(cljs.core.truth_(inst_33936)){
var statearr_34018_34073 = state_33998__$1;
(statearr_34018_34073[(1)] = (16));

} else {
var statearr_34019_34074 = state_33998__$1;
(statearr_34019_34074[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33999 === (22))){
var inst_33957 = (state_33998[(14)]);
var inst_33958 = (state_33998[(9)]);
var inst_33956 = (state_33998[(2)]);
var inst_33957__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33956,(0),null);
var inst_33958__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33956,(1),null);
var inst_33959 = (inst_33957__$1 == null);
var inst_33960 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33958__$1,change);
var inst_33961 = (inst_33959) || (inst_33960);
var state_33998__$1 = (function (){var statearr_34020 = state_33998;
(statearr_34020[(14)] = inst_33957__$1);

(statearr_34020[(9)] = inst_33958__$1);

return statearr_34020;
})();
if(cljs.core.truth_(inst_33961)){
var statearr_34021_34075 = state_33998__$1;
(statearr_34021_34075[(1)] = (23));

} else {
var statearr_34022_34076 = state_33998__$1;
(statearr_34022_34076[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33999 === (36))){
var inst_33948 = (state_33998[(12)]);
var inst_33925 = inst_33948;
var state_33998__$1 = (function (){var statearr_34023 = state_33998;
(statearr_34023[(7)] = inst_33925);

return statearr_34023;
})();
var statearr_34024_34077 = state_33998__$1;
(statearr_34024_34077[(2)] = null);

(statearr_34024_34077[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33999 === (29))){
var inst_33972 = (state_33998[(10)]);
var state_33998__$1 = state_33998;
var statearr_34025_34078 = state_33998__$1;
(statearr_34025_34078[(2)] = inst_33972);

(statearr_34025_34078[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33999 === (6))){
var state_33998__$1 = state_33998;
var statearr_34026_34079 = state_33998__$1;
(statearr_34026_34079[(2)] = false);

(statearr_34026_34079[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33999 === (28))){
var inst_33968 = (state_33998[(2)]);
var inst_33969 = calc_state();
var inst_33925 = inst_33969;
var state_33998__$1 = (function (){var statearr_34027 = state_33998;
(statearr_34027[(7)] = inst_33925);

(statearr_34027[(15)] = inst_33968);

return statearr_34027;
})();
var statearr_34028_34080 = state_33998__$1;
(statearr_34028_34080[(2)] = null);

(statearr_34028_34080[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33999 === (25))){
var inst_33994 = (state_33998[(2)]);
var state_33998__$1 = state_33998;
var statearr_34029_34081 = state_33998__$1;
(statearr_34029_34081[(2)] = inst_33994);

(statearr_34029_34081[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33999 === (34))){
var inst_33992 = (state_33998[(2)]);
var state_33998__$1 = state_33998;
var statearr_34030_34082 = state_33998__$1;
(statearr_34030_34082[(2)] = inst_33992);

(statearr_34030_34082[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33999 === (17))){
var state_33998__$1 = state_33998;
var statearr_34031_34083 = state_33998__$1;
(statearr_34031_34083[(2)] = false);

(statearr_34031_34083[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33999 === (3))){
var state_33998__$1 = state_33998;
var statearr_34032_34084 = state_33998__$1;
(statearr_34032_34084[(2)] = false);

(statearr_34032_34084[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33999 === (12))){
var inst_33996 = (state_33998[(2)]);
var state_33998__$1 = state_33998;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33998__$1,inst_33996);
} else {
if((state_val_33999 === (2))){
var inst_33900 = (state_33998[(8)]);
var inst_33905 = inst_33900.cljs$lang$protocol_mask$partition0$;
var inst_33906 = (inst_33905 & (64));
var inst_33907 = inst_33900.cljs$core$ISeq$;
var inst_33908 = (cljs.core.PROTOCOL_SENTINEL === inst_33907);
var inst_33909 = (inst_33906) || (inst_33908);
var state_33998__$1 = state_33998;
if(cljs.core.truth_(inst_33909)){
var statearr_34033_34085 = state_33998__$1;
(statearr_34033_34085[(1)] = (5));

} else {
var statearr_34034_34086 = state_33998__$1;
(statearr_34034_34086[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33999 === (23))){
var inst_33957 = (state_33998[(14)]);
var inst_33963 = (inst_33957 == null);
var state_33998__$1 = state_33998;
if(cljs.core.truth_(inst_33963)){
var statearr_34035_34087 = state_33998__$1;
(statearr_34035_34087[(1)] = (26));

} else {
var statearr_34036_34088 = state_33998__$1;
(statearr_34036_34088[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33999 === (35))){
var inst_33983 = (state_33998[(2)]);
var state_33998__$1 = state_33998;
if(cljs.core.truth_(inst_33983)){
var statearr_34037_34089 = state_33998__$1;
(statearr_34037_34089[(1)] = (36));

} else {
var statearr_34038_34090 = state_33998__$1;
(statearr_34038_34090[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33999 === (19))){
var inst_33925 = (state_33998[(7)]);
var inst_33945 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_33925);
var state_33998__$1 = state_33998;
var statearr_34039_34091 = state_33998__$1;
(statearr_34039_34091[(2)] = inst_33945);

(statearr_34039_34091[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33999 === (11))){
var inst_33925 = (state_33998[(7)]);
var inst_33929 = (inst_33925 == null);
var inst_33930 = cljs.core.not(inst_33929);
var state_33998__$1 = state_33998;
if(inst_33930){
var statearr_34040_34092 = state_33998__$1;
(statearr_34040_34092[(1)] = (13));

} else {
var statearr_34041_34093 = state_33998__$1;
(statearr_34041_34093[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33999 === (9))){
var inst_33900 = (state_33998[(8)]);
var state_33998__$1 = state_33998;
var statearr_34042_34094 = state_33998__$1;
(statearr_34042_34094[(2)] = inst_33900);

(statearr_34042_34094[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33999 === (5))){
var state_33998__$1 = state_33998;
var statearr_34043_34095 = state_33998__$1;
(statearr_34043_34095[(2)] = true);

(statearr_34043_34095[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33999 === (14))){
var state_33998__$1 = state_33998;
var statearr_34044_34096 = state_33998__$1;
(statearr_34044_34096[(2)] = false);

(statearr_34044_34096[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33999 === (26))){
var inst_33958 = (state_33998[(9)]);
var inst_33965 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33958);
var state_33998__$1 = state_33998;
var statearr_34045_34097 = state_33998__$1;
(statearr_34045_34097[(2)] = inst_33965);

(statearr_34045_34097[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33999 === (16))){
var state_33998__$1 = state_33998;
var statearr_34046_34098 = state_33998__$1;
(statearr_34046_34098[(2)] = true);

(statearr_34046_34098[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33999 === (38))){
var inst_33988 = (state_33998[(2)]);
var state_33998__$1 = state_33998;
var statearr_34047_34099 = state_33998__$1;
(statearr_34047_34099[(2)] = inst_33988);

(statearr_34047_34099[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33999 === (30))){
var inst_33950 = (state_33998[(13)]);
var inst_33958 = (state_33998[(9)]);
var inst_33949 = (state_33998[(11)]);
var inst_33975 = cljs.core.empty_QMARK_(inst_33949);
var inst_33976 = (inst_33950.cljs$core$IFn$_invoke$arity$1 ? inst_33950.cljs$core$IFn$_invoke$arity$1(inst_33958) : inst_33950.call(null,inst_33958));
var inst_33977 = cljs.core.not(inst_33976);
var inst_33978 = (inst_33975) && (inst_33977);
var state_33998__$1 = state_33998;
var statearr_34048_34100 = state_33998__$1;
(statearr_34048_34100[(2)] = inst_33978);

(statearr_34048_34100[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33999 === (10))){
var inst_33900 = (state_33998[(8)]);
var inst_33921 = (state_33998[(2)]);
var inst_33922 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33921,cljs.core.cst$kw$solos);
var inst_33923 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33921,cljs.core.cst$kw$mutes);
var inst_33924 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33921,cljs.core.cst$kw$reads);
var inst_33925 = inst_33900;
var state_33998__$1 = (function (){var statearr_34049 = state_33998;
(statearr_34049[(16)] = inst_33924);

(statearr_34049[(17)] = inst_33923);

(statearr_34049[(18)] = inst_33922);

(statearr_34049[(7)] = inst_33925);

return statearr_34049;
})();
var statearr_34050_34101 = state_33998__$1;
(statearr_34050_34101[(2)] = null);

(statearr_34050_34101[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33999 === (18))){
var inst_33940 = (state_33998[(2)]);
var state_33998__$1 = state_33998;
var statearr_34051_34102 = state_33998__$1;
(statearr_34051_34102[(2)] = inst_33940);

(statearr_34051_34102[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33999 === (37))){
var state_33998__$1 = state_33998;
var statearr_34052_34103 = state_33998__$1;
(statearr_34052_34103[(2)] = null);

(statearr_34052_34103[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33999 === (8))){
var inst_33900 = (state_33998[(8)]);
var inst_33918 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_33900);
var state_33998__$1 = state_33998;
var statearr_34053_34104 = state_33998__$1;
(statearr_34053_34104[(2)] = inst_33918);

(statearr_34053_34104[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__33011__auto___34058,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__32911__auto__,c__33011__auto___34058,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__32912__auto__ = null;
var cljs$core$async$mix_$_state_machine__32912__auto____0 = (function (){
var statearr_34054 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34054[(0)] = cljs$core$async$mix_$_state_machine__32912__auto__);

(statearr_34054[(1)] = (1));

return statearr_34054;
});
var cljs$core$async$mix_$_state_machine__32912__auto____1 = (function (state_33998){
while(true){
var ret_value__32913__auto__ = (function (){try{while(true){
var result__32914__auto__ = switch__32911__auto__(state_33998);
if(cljs.core.keyword_identical_QMARK_(result__32914__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__32914__auto__;
}
break;
}
}catch (e34055){if((e34055 instanceof Object)){
var ex__32915__auto__ = e34055;
var statearr_34056_34105 = state_33998;
(statearr_34056_34105[(5)] = ex__32915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33998);

return cljs.core.cst$kw$recur;
} else {
throw e34055;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32913__auto__,cljs.core.cst$kw$recur)){
var G__34106 = state_33998;
state_33998 = G__34106;
continue;
} else {
return ret_value__32913__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32912__auto__ = function(state_33998){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32912__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32912__auto____1.call(this,state_33998);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__32912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32912__auto____0;
cljs$core$async$mix_$_state_machine__32912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32912__auto____1;
return cljs$core$async$mix_$_state_machine__32912__auto__;
})()
;})(switch__32911__auto__,c__33011__auto___34058,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__33013__auto__ = (function (){var statearr_34057 = (f__33012__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33012__auto__.cljs$core$IFn$_invoke$arity$0() : f__33012__auto__.call(null));
(statearr_34057[(6)] = c__33011__auto___34058);

return statearr_34057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33013__auto__);
});})(c__33011__auto___34058,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__28096__auto__ = (((p == null))?null:p);
var m__28097__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__28096__auto__)]);
if(!((m__28097__auto__ == null))){
return (m__28097__auto__.cljs$core$IFn$_invoke$arity$4 ? m__28097__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__28097__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__28097__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__28097__auto____$1 == null))){
return (m__28097__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__28097__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__28097__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__28096__auto__ = (((p == null))?null:p);
var m__28097__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__28096__auto__)]);
if(!((m__28097__auto__ == null))){
return (m__28097__auto__.cljs$core$IFn$_invoke$arity$3 ? m__28097__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__28097__auto__.call(null,p,v,ch));
} else {
var m__28097__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__28097__auto____$1 == null))){
return (m__28097__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__28097__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__28097__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34108 = arguments.length;
switch (G__34108) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__28096__auto__ = (((p == null))?null:p);
var m__28097__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28096__auto__)]);
if(!((m__28097__auto__ == null))){
return (m__28097__auto__.cljs$core$IFn$_invoke$arity$1 ? m__28097__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__28097__auto__.call(null,p));
} else {
var m__28097__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28097__auto____$1 == null))){
return (m__28097__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__28097__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__28097__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__28096__auto__ = (((p == null))?null:p);
var m__28097__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28096__auto__)]);
if(!((m__28097__auto__ == null))){
return (m__28097__auto__.cljs$core$IFn$_invoke$arity$2 ? m__28097__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__28097__auto__.call(null,p,v));
} else {
var m__28097__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28097__auto____$1 == null))){
return (m__28097__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__28097__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__28097__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__34112 = arguments.length;
switch (G__34112) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__27427__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__27427__auto__)){
return or__27427__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__27427__auto__,mults){
return (function (p1__34110_SHARP_){
if(cljs.core.truth_((p1__34110_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34110_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__34110_SHARP_.call(null,topic)))){
return p1__34110_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34110_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__27427__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async34113 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34113 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34114){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34114 = meta34114;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34115,meta34114__$1){
var self__ = this;
var _34115__$1 = this;
return (new cljs.core.async.t_cljs$core$async34113(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34114__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34113.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34115){
var self__ = this;
var _34115__$1 = this;
return self__.meta34114;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34113.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34113.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34113.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34113.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34113.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34113.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34113.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34113.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta34114], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34113.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34113.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34113";

cljs.core.async.t_cljs$core$async34113.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__28038__auto__,writer__28039__auto__,opt__28040__auto__){
return cljs.core._write(writer__28039__auto__,"cljs.core.async/t_cljs$core$async34113");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async34113 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async34113(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34114){
return (new cljs.core.async.t_cljs$core$async34113(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34114));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async34113(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33011__auto___34233 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33011__auto___34233,mults,ensure_mult,p){
return (function (){
var f__33012__auto__ = (function (){var switch__32911__auto__ = ((function (c__33011__auto___34233,mults,ensure_mult,p){
return (function (state_34187){
var state_val_34188 = (state_34187[(1)]);
if((state_val_34188 === (7))){
var inst_34183 = (state_34187[(2)]);
var state_34187__$1 = state_34187;
var statearr_34189_34234 = state_34187__$1;
(statearr_34189_34234[(2)] = inst_34183);

(statearr_34189_34234[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34188 === (20))){
var state_34187__$1 = state_34187;
var statearr_34190_34235 = state_34187__$1;
(statearr_34190_34235[(2)] = null);

(statearr_34190_34235[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34188 === (1))){
var state_34187__$1 = state_34187;
var statearr_34191_34236 = state_34187__$1;
(statearr_34191_34236[(2)] = null);

(statearr_34191_34236[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34188 === (24))){
var inst_34166 = (state_34187[(7)]);
var inst_34175 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_34166);
var state_34187__$1 = state_34187;
var statearr_34192_34237 = state_34187__$1;
(statearr_34192_34237[(2)] = inst_34175);

(statearr_34192_34237[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34188 === (4))){
var inst_34118 = (state_34187[(8)]);
var inst_34118__$1 = (state_34187[(2)]);
var inst_34119 = (inst_34118__$1 == null);
var state_34187__$1 = (function (){var statearr_34193 = state_34187;
(statearr_34193[(8)] = inst_34118__$1);

return statearr_34193;
})();
if(cljs.core.truth_(inst_34119)){
var statearr_34194_34238 = state_34187__$1;
(statearr_34194_34238[(1)] = (5));

} else {
var statearr_34195_34239 = state_34187__$1;
(statearr_34195_34239[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34188 === (15))){
var inst_34160 = (state_34187[(2)]);
var state_34187__$1 = state_34187;
var statearr_34196_34240 = state_34187__$1;
(statearr_34196_34240[(2)] = inst_34160);

(statearr_34196_34240[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34188 === (21))){
var inst_34180 = (state_34187[(2)]);
var state_34187__$1 = (function (){var statearr_34197 = state_34187;
(statearr_34197[(9)] = inst_34180);

return statearr_34197;
})();
var statearr_34198_34241 = state_34187__$1;
(statearr_34198_34241[(2)] = null);

(statearr_34198_34241[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34188 === (13))){
var inst_34142 = (state_34187[(10)]);
var inst_34144 = cljs.core.chunked_seq_QMARK_(inst_34142);
var state_34187__$1 = state_34187;
if(inst_34144){
var statearr_34199_34242 = state_34187__$1;
(statearr_34199_34242[(1)] = (16));

} else {
var statearr_34200_34243 = state_34187__$1;
(statearr_34200_34243[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34188 === (22))){
var inst_34172 = (state_34187[(2)]);
var state_34187__$1 = state_34187;
if(cljs.core.truth_(inst_34172)){
var statearr_34201_34244 = state_34187__$1;
(statearr_34201_34244[(1)] = (23));

} else {
var statearr_34202_34245 = state_34187__$1;
(statearr_34202_34245[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34188 === (6))){
var inst_34166 = (state_34187[(7)]);
var inst_34168 = (state_34187[(11)]);
var inst_34118 = (state_34187[(8)]);
var inst_34166__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_34118) : topic_fn.call(null,inst_34118));
var inst_34167 = cljs.core.deref(mults);
var inst_34168__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34167,inst_34166__$1);
var state_34187__$1 = (function (){var statearr_34203 = state_34187;
(statearr_34203[(7)] = inst_34166__$1);

(statearr_34203[(11)] = inst_34168__$1);

return statearr_34203;
})();
if(cljs.core.truth_(inst_34168__$1)){
var statearr_34204_34246 = state_34187__$1;
(statearr_34204_34246[(1)] = (19));

} else {
var statearr_34205_34247 = state_34187__$1;
(statearr_34205_34247[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34188 === (25))){
var inst_34177 = (state_34187[(2)]);
var state_34187__$1 = state_34187;
var statearr_34206_34248 = state_34187__$1;
(statearr_34206_34248[(2)] = inst_34177);

(statearr_34206_34248[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34188 === (17))){
var inst_34142 = (state_34187[(10)]);
var inst_34151 = cljs.core.first(inst_34142);
var inst_34152 = cljs.core.async.muxch_STAR_(inst_34151);
var inst_34153 = cljs.core.async.close_BANG_(inst_34152);
var inst_34154 = cljs.core.next(inst_34142);
var inst_34128 = inst_34154;
var inst_34129 = null;
var inst_34130 = (0);
var inst_34131 = (0);
var state_34187__$1 = (function (){var statearr_34207 = state_34187;
(statearr_34207[(12)] = inst_34130);

(statearr_34207[(13)] = inst_34128);

(statearr_34207[(14)] = inst_34131);

(statearr_34207[(15)] = inst_34153);

(statearr_34207[(16)] = inst_34129);

return statearr_34207;
})();
var statearr_34208_34249 = state_34187__$1;
(statearr_34208_34249[(2)] = null);

(statearr_34208_34249[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34188 === (3))){
var inst_34185 = (state_34187[(2)]);
var state_34187__$1 = state_34187;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34187__$1,inst_34185);
} else {
if((state_val_34188 === (12))){
var inst_34162 = (state_34187[(2)]);
var state_34187__$1 = state_34187;
var statearr_34209_34250 = state_34187__$1;
(statearr_34209_34250[(2)] = inst_34162);

(statearr_34209_34250[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34188 === (2))){
var state_34187__$1 = state_34187;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34187__$1,(4),ch);
} else {
if((state_val_34188 === (23))){
var state_34187__$1 = state_34187;
var statearr_34210_34251 = state_34187__$1;
(statearr_34210_34251[(2)] = null);

(statearr_34210_34251[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34188 === (19))){
var inst_34168 = (state_34187[(11)]);
var inst_34118 = (state_34187[(8)]);
var inst_34170 = cljs.core.async.muxch_STAR_(inst_34168);
var state_34187__$1 = state_34187;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34187__$1,(22),inst_34170,inst_34118);
} else {
if((state_val_34188 === (11))){
var inst_34142 = (state_34187[(10)]);
var inst_34128 = (state_34187[(13)]);
var inst_34142__$1 = cljs.core.seq(inst_34128);
var state_34187__$1 = (function (){var statearr_34211 = state_34187;
(statearr_34211[(10)] = inst_34142__$1);

return statearr_34211;
})();
if(inst_34142__$1){
var statearr_34212_34252 = state_34187__$1;
(statearr_34212_34252[(1)] = (13));

} else {
var statearr_34213_34253 = state_34187__$1;
(statearr_34213_34253[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34188 === (9))){
var inst_34164 = (state_34187[(2)]);
var state_34187__$1 = state_34187;
var statearr_34214_34254 = state_34187__$1;
(statearr_34214_34254[(2)] = inst_34164);

(statearr_34214_34254[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34188 === (5))){
var inst_34125 = cljs.core.deref(mults);
var inst_34126 = cljs.core.vals(inst_34125);
var inst_34127 = cljs.core.seq(inst_34126);
var inst_34128 = inst_34127;
var inst_34129 = null;
var inst_34130 = (0);
var inst_34131 = (0);
var state_34187__$1 = (function (){var statearr_34215 = state_34187;
(statearr_34215[(12)] = inst_34130);

(statearr_34215[(13)] = inst_34128);

(statearr_34215[(14)] = inst_34131);

(statearr_34215[(16)] = inst_34129);

return statearr_34215;
})();
var statearr_34216_34255 = state_34187__$1;
(statearr_34216_34255[(2)] = null);

(statearr_34216_34255[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34188 === (14))){
var state_34187__$1 = state_34187;
var statearr_34220_34256 = state_34187__$1;
(statearr_34220_34256[(2)] = null);

(statearr_34220_34256[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34188 === (16))){
var inst_34142 = (state_34187[(10)]);
var inst_34146 = cljs.core.chunk_first(inst_34142);
var inst_34147 = cljs.core.chunk_rest(inst_34142);
var inst_34148 = cljs.core.count(inst_34146);
var inst_34128 = inst_34147;
var inst_34129 = inst_34146;
var inst_34130 = inst_34148;
var inst_34131 = (0);
var state_34187__$1 = (function (){var statearr_34221 = state_34187;
(statearr_34221[(12)] = inst_34130);

(statearr_34221[(13)] = inst_34128);

(statearr_34221[(14)] = inst_34131);

(statearr_34221[(16)] = inst_34129);

return statearr_34221;
})();
var statearr_34222_34257 = state_34187__$1;
(statearr_34222_34257[(2)] = null);

(statearr_34222_34257[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34188 === (10))){
var inst_34130 = (state_34187[(12)]);
var inst_34128 = (state_34187[(13)]);
var inst_34131 = (state_34187[(14)]);
var inst_34129 = (state_34187[(16)]);
var inst_34136 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34129,inst_34131);
var inst_34137 = cljs.core.async.muxch_STAR_(inst_34136);
var inst_34138 = cljs.core.async.close_BANG_(inst_34137);
var inst_34139 = (inst_34131 + (1));
var tmp34217 = inst_34130;
var tmp34218 = inst_34128;
var tmp34219 = inst_34129;
var inst_34128__$1 = tmp34218;
var inst_34129__$1 = tmp34219;
var inst_34130__$1 = tmp34217;
var inst_34131__$1 = inst_34139;
var state_34187__$1 = (function (){var statearr_34223 = state_34187;
(statearr_34223[(12)] = inst_34130__$1);

(statearr_34223[(13)] = inst_34128__$1);

(statearr_34223[(14)] = inst_34131__$1);

(statearr_34223[(17)] = inst_34138);

(statearr_34223[(16)] = inst_34129__$1);

return statearr_34223;
})();
var statearr_34224_34258 = state_34187__$1;
(statearr_34224_34258[(2)] = null);

(statearr_34224_34258[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34188 === (18))){
var inst_34157 = (state_34187[(2)]);
var state_34187__$1 = state_34187;
var statearr_34225_34259 = state_34187__$1;
(statearr_34225_34259[(2)] = inst_34157);

(statearr_34225_34259[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34188 === (8))){
var inst_34130 = (state_34187[(12)]);
var inst_34131 = (state_34187[(14)]);
var inst_34133 = (inst_34131 < inst_34130);
var inst_34134 = inst_34133;
var state_34187__$1 = state_34187;
if(cljs.core.truth_(inst_34134)){
var statearr_34226_34260 = state_34187__$1;
(statearr_34226_34260[(1)] = (10));

} else {
var statearr_34227_34261 = state_34187__$1;
(statearr_34227_34261[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__33011__auto___34233,mults,ensure_mult,p))
;
return ((function (switch__32911__auto__,c__33011__auto___34233,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__32912__auto__ = null;
var cljs$core$async$state_machine__32912__auto____0 = (function (){
var statearr_34228 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34228[(0)] = cljs$core$async$state_machine__32912__auto__);

(statearr_34228[(1)] = (1));

return statearr_34228;
});
var cljs$core$async$state_machine__32912__auto____1 = (function (state_34187){
while(true){
var ret_value__32913__auto__ = (function (){try{while(true){
var result__32914__auto__ = switch__32911__auto__(state_34187);
if(cljs.core.keyword_identical_QMARK_(result__32914__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__32914__auto__;
}
break;
}
}catch (e34229){if((e34229 instanceof Object)){
var ex__32915__auto__ = e34229;
var statearr_34230_34262 = state_34187;
(statearr_34230_34262[(5)] = ex__32915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34187);

return cljs.core.cst$kw$recur;
} else {
throw e34229;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32913__auto__,cljs.core.cst$kw$recur)){
var G__34263 = state_34187;
state_34187 = G__34263;
continue;
} else {
return ret_value__32913__auto__;
}
break;
}
});
cljs$core$async$state_machine__32912__auto__ = function(state_34187){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32912__auto____1.call(this,state_34187);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32912__auto____0;
cljs$core$async$state_machine__32912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32912__auto____1;
return cljs$core$async$state_machine__32912__auto__;
})()
;})(switch__32911__auto__,c__33011__auto___34233,mults,ensure_mult,p))
})();
var state__33013__auto__ = (function (){var statearr_34231 = (f__33012__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33012__auto__.cljs$core$IFn$_invoke$arity$0() : f__33012__auto__.call(null));
(statearr_34231[(6)] = c__33011__auto___34233);

return statearr_34231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33013__auto__);
});})(c__33011__auto___34233,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__34265 = arguments.length;
switch (G__34265) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__34268 = arguments.length;
switch (G__34268) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__34271 = arguments.length;
switch (G__34271) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__33011__auto___34338 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33011__auto___34338,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__33012__auto__ = (function (){var switch__32911__auto__ = ((function (c__33011__auto___34338,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_34310){
var state_val_34311 = (state_34310[(1)]);
if((state_val_34311 === (7))){
var state_34310__$1 = state_34310;
var statearr_34312_34339 = state_34310__$1;
(statearr_34312_34339[(2)] = null);

(statearr_34312_34339[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34311 === (1))){
var state_34310__$1 = state_34310;
var statearr_34313_34340 = state_34310__$1;
(statearr_34313_34340[(2)] = null);

(statearr_34313_34340[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34311 === (4))){
var inst_34274 = (state_34310[(7)]);
var inst_34276 = (inst_34274 < cnt);
var state_34310__$1 = state_34310;
if(cljs.core.truth_(inst_34276)){
var statearr_34314_34341 = state_34310__$1;
(statearr_34314_34341[(1)] = (6));

} else {
var statearr_34315_34342 = state_34310__$1;
(statearr_34315_34342[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34311 === (15))){
var inst_34306 = (state_34310[(2)]);
var state_34310__$1 = state_34310;
var statearr_34316_34343 = state_34310__$1;
(statearr_34316_34343[(2)] = inst_34306);

(statearr_34316_34343[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34311 === (13))){
var inst_34299 = cljs.core.async.close_BANG_(out);
var state_34310__$1 = state_34310;
var statearr_34317_34344 = state_34310__$1;
(statearr_34317_34344[(2)] = inst_34299);

(statearr_34317_34344[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34311 === (6))){
var state_34310__$1 = state_34310;
var statearr_34318_34345 = state_34310__$1;
(statearr_34318_34345[(2)] = null);

(statearr_34318_34345[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34311 === (3))){
var inst_34308 = (state_34310[(2)]);
var state_34310__$1 = state_34310;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34310__$1,inst_34308);
} else {
if((state_val_34311 === (12))){
var inst_34296 = (state_34310[(8)]);
var inst_34296__$1 = (state_34310[(2)]);
var inst_34297 = cljs.core.some(cljs.core.nil_QMARK_,inst_34296__$1);
var state_34310__$1 = (function (){var statearr_34319 = state_34310;
(statearr_34319[(8)] = inst_34296__$1);

return statearr_34319;
})();
if(cljs.core.truth_(inst_34297)){
var statearr_34320_34346 = state_34310__$1;
(statearr_34320_34346[(1)] = (13));

} else {
var statearr_34321_34347 = state_34310__$1;
(statearr_34321_34347[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34311 === (2))){
var inst_34273 = cljs.core.reset_BANG_(dctr,cnt);
var inst_34274 = (0);
var state_34310__$1 = (function (){var statearr_34322 = state_34310;
(statearr_34322[(7)] = inst_34274);

(statearr_34322[(9)] = inst_34273);

return statearr_34322;
})();
var statearr_34323_34348 = state_34310__$1;
(statearr_34323_34348[(2)] = null);

(statearr_34323_34348[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34311 === (11))){
var inst_34274 = (state_34310[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_34310,(10),Object,null,(9));
var inst_34283 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_34274) : chs__$1.call(null,inst_34274));
var inst_34284 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_34274) : done.call(null,inst_34274));
var inst_34285 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_34283,inst_34284);
var state_34310__$1 = state_34310;
var statearr_34324_34349 = state_34310__$1;
(statearr_34324_34349[(2)] = inst_34285);


cljs.core.async.impl.ioc_helpers.process_exception(state_34310__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_34311 === (9))){
var inst_34274 = (state_34310[(7)]);
var inst_34287 = (state_34310[(2)]);
var inst_34288 = (inst_34274 + (1));
var inst_34274__$1 = inst_34288;
var state_34310__$1 = (function (){var statearr_34325 = state_34310;
(statearr_34325[(7)] = inst_34274__$1);

(statearr_34325[(10)] = inst_34287);

return statearr_34325;
})();
var statearr_34326_34350 = state_34310__$1;
(statearr_34326_34350[(2)] = null);

(statearr_34326_34350[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34311 === (5))){
var inst_34294 = (state_34310[(2)]);
var state_34310__$1 = (function (){var statearr_34327 = state_34310;
(statearr_34327[(11)] = inst_34294);

return statearr_34327;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34310__$1,(12),dchan);
} else {
if((state_val_34311 === (14))){
var inst_34296 = (state_34310[(8)]);
var inst_34301 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_34296);
var state_34310__$1 = state_34310;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34310__$1,(16),out,inst_34301);
} else {
if((state_val_34311 === (16))){
var inst_34303 = (state_34310[(2)]);
var state_34310__$1 = (function (){var statearr_34328 = state_34310;
(statearr_34328[(12)] = inst_34303);

return statearr_34328;
})();
var statearr_34329_34351 = state_34310__$1;
(statearr_34329_34351[(2)] = null);

(statearr_34329_34351[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34311 === (10))){
var inst_34278 = (state_34310[(2)]);
var inst_34279 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_34310__$1 = (function (){var statearr_34330 = state_34310;
(statearr_34330[(13)] = inst_34278);

return statearr_34330;
})();
var statearr_34331_34352 = state_34310__$1;
(statearr_34331_34352[(2)] = inst_34279);


cljs.core.async.impl.ioc_helpers.process_exception(state_34310__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_34311 === (8))){
var inst_34292 = (state_34310[(2)]);
var state_34310__$1 = state_34310;
var statearr_34332_34353 = state_34310__$1;
(statearr_34332_34353[(2)] = inst_34292);

(statearr_34332_34353[(1)] = (5));


return cljs.core.cst$kw$recur;
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
});})(c__33011__auto___34338,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__32911__auto__,c__33011__auto___34338,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__32912__auto__ = null;
var cljs$core$async$state_machine__32912__auto____0 = (function (){
var statearr_34333 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34333[(0)] = cljs$core$async$state_machine__32912__auto__);

(statearr_34333[(1)] = (1));

return statearr_34333;
});
var cljs$core$async$state_machine__32912__auto____1 = (function (state_34310){
while(true){
var ret_value__32913__auto__ = (function (){try{while(true){
var result__32914__auto__ = switch__32911__auto__(state_34310);
if(cljs.core.keyword_identical_QMARK_(result__32914__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__32914__auto__;
}
break;
}
}catch (e34334){if((e34334 instanceof Object)){
var ex__32915__auto__ = e34334;
var statearr_34335_34354 = state_34310;
(statearr_34335_34354[(5)] = ex__32915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34310);

return cljs.core.cst$kw$recur;
} else {
throw e34334;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32913__auto__,cljs.core.cst$kw$recur)){
var G__34355 = state_34310;
state_34310 = G__34355;
continue;
} else {
return ret_value__32913__auto__;
}
break;
}
});
cljs$core$async$state_machine__32912__auto__ = function(state_34310){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32912__auto____1.call(this,state_34310);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32912__auto____0;
cljs$core$async$state_machine__32912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32912__auto____1;
return cljs$core$async$state_machine__32912__auto__;
})()
;})(switch__32911__auto__,c__33011__auto___34338,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__33013__auto__ = (function (){var statearr_34336 = (f__33012__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33012__auto__.cljs$core$IFn$_invoke$arity$0() : f__33012__auto__.call(null));
(statearr_34336[(6)] = c__33011__auto___34338);

return statearr_34336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33013__auto__);
});})(c__33011__auto___34338,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__34358 = arguments.length;
switch (G__34358) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33011__auto___34412 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33011__auto___34412,out){
return (function (){
var f__33012__auto__ = (function (){var switch__32911__auto__ = ((function (c__33011__auto___34412,out){
return (function (state_34390){
var state_val_34391 = (state_34390[(1)]);
if((state_val_34391 === (7))){
var inst_34369 = (state_34390[(7)]);
var inst_34370 = (state_34390[(8)]);
var inst_34369__$1 = (state_34390[(2)]);
var inst_34370__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34369__$1,(0),null);
var inst_34371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34369__$1,(1),null);
var inst_34372 = (inst_34370__$1 == null);
var state_34390__$1 = (function (){var statearr_34392 = state_34390;
(statearr_34392[(7)] = inst_34369__$1);

(statearr_34392[(8)] = inst_34370__$1);

(statearr_34392[(9)] = inst_34371);

return statearr_34392;
})();
if(cljs.core.truth_(inst_34372)){
var statearr_34393_34413 = state_34390__$1;
(statearr_34393_34413[(1)] = (8));

} else {
var statearr_34394_34414 = state_34390__$1;
(statearr_34394_34414[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34391 === (1))){
var inst_34359 = cljs.core.vec(chs);
var inst_34360 = inst_34359;
var state_34390__$1 = (function (){var statearr_34395 = state_34390;
(statearr_34395[(10)] = inst_34360);

return statearr_34395;
})();
var statearr_34396_34415 = state_34390__$1;
(statearr_34396_34415[(2)] = null);

(statearr_34396_34415[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34391 === (4))){
var inst_34360 = (state_34390[(10)]);
var state_34390__$1 = state_34390;
return cljs.core.async.ioc_alts_BANG_(state_34390__$1,(7),inst_34360);
} else {
if((state_val_34391 === (6))){
var inst_34386 = (state_34390[(2)]);
var state_34390__$1 = state_34390;
var statearr_34397_34416 = state_34390__$1;
(statearr_34397_34416[(2)] = inst_34386);

(statearr_34397_34416[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34391 === (3))){
var inst_34388 = (state_34390[(2)]);
var state_34390__$1 = state_34390;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34390__$1,inst_34388);
} else {
if((state_val_34391 === (2))){
var inst_34360 = (state_34390[(10)]);
var inst_34362 = cljs.core.count(inst_34360);
var inst_34363 = (inst_34362 > (0));
var state_34390__$1 = state_34390;
if(cljs.core.truth_(inst_34363)){
var statearr_34399_34417 = state_34390__$1;
(statearr_34399_34417[(1)] = (4));

} else {
var statearr_34400_34418 = state_34390__$1;
(statearr_34400_34418[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34391 === (11))){
var inst_34360 = (state_34390[(10)]);
var inst_34379 = (state_34390[(2)]);
var tmp34398 = inst_34360;
var inst_34360__$1 = tmp34398;
var state_34390__$1 = (function (){var statearr_34401 = state_34390;
(statearr_34401[(10)] = inst_34360__$1);

(statearr_34401[(11)] = inst_34379);

return statearr_34401;
})();
var statearr_34402_34419 = state_34390__$1;
(statearr_34402_34419[(2)] = null);

(statearr_34402_34419[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34391 === (9))){
var inst_34370 = (state_34390[(8)]);
var state_34390__$1 = state_34390;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34390__$1,(11),out,inst_34370);
} else {
if((state_val_34391 === (5))){
var inst_34384 = cljs.core.async.close_BANG_(out);
var state_34390__$1 = state_34390;
var statearr_34403_34420 = state_34390__$1;
(statearr_34403_34420[(2)] = inst_34384);

(statearr_34403_34420[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34391 === (10))){
var inst_34382 = (state_34390[(2)]);
var state_34390__$1 = state_34390;
var statearr_34404_34421 = state_34390__$1;
(statearr_34404_34421[(2)] = inst_34382);

(statearr_34404_34421[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34391 === (8))){
var inst_34360 = (state_34390[(10)]);
var inst_34369 = (state_34390[(7)]);
var inst_34370 = (state_34390[(8)]);
var inst_34371 = (state_34390[(9)]);
var inst_34374 = (function (){var cs = inst_34360;
var vec__34365 = inst_34369;
var v = inst_34370;
var c = inst_34371;
return ((function (cs,vec__34365,v,c,inst_34360,inst_34369,inst_34370,inst_34371,state_val_34391,c__33011__auto___34412,out){
return (function (p1__34356_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34356_SHARP_);
});
;})(cs,vec__34365,v,c,inst_34360,inst_34369,inst_34370,inst_34371,state_val_34391,c__33011__auto___34412,out))
})();
var inst_34375 = cljs.core.filterv(inst_34374,inst_34360);
var inst_34360__$1 = inst_34375;
var state_34390__$1 = (function (){var statearr_34405 = state_34390;
(statearr_34405[(10)] = inst_34360__$1);

return statearr_34405;
})();
var statearr_34406_34422 = state_34390__$1;
(statearr_34406_34422[(2)] = null);

(statearr_34406_34422[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__33011__auto___34412,out))
;
return ((function (switch__32911__auto__,c__33011__auto___34412,out){
return (function() {
var cljs$core$async$state_machine__32912__auto__ = null;
var cljs$core$async$state_machine__32912__auto____0 = (function (){
var statearr_34407 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34407[(0)] = cljs$core$async$state_machine__32912__auto__);

(statearr_34407[(1)] = (1));

return statearr_34407;
});
var cljs$core$async$state_machine__32912__auto____1 = (function (state_34390){
while(true){
var ret_value__32913__auto__ = (function (){try{while(true){
var result__32914__auto__ = switch__32911__auto__(state_34390);
if(cljs.core.keyword_identical_QMARK_(result__32914__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__32914__auto__;
}
break;
}
}catch (e34408){if((e34408 instanceof Object)){
var ex__32915__auto__ = e34408;
var statearr_34409_34423 = state_34390;
(statearr_34409_34423[(5)] = ex__32915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34390);

return cljs.core.cst$kw$recur;
} else {
throw e34408;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32913__auto__,cljs.core.cst$kw$recur)){
var G__34424 = state_34390;
state_34390 = G__34424;
continue;
} else {
return ret_value__32913__auto__;
}
break;
}
});
cljs$core$async$state_machine__32912__auto__ = function(state_34390){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32912__auto____1.call(this,state_34390);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32912__auto____0;
cljs$core$async$state_machine__32912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32912__auto____1;
return cljs$core$async$state_machine__32912__auto__;
})()
;})(switch__32911__auto__,c__33011__auto___34412,out))
})();
var state__33013__auto__ = (function (){var statearr_34410 = (f__33012__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33012__auto__.cljs$core$IFn$_invoke$arity$0() : f__33012__auto__.call(null));
(statearr_34410[(6)] = c__33011__auto___34412);

return statearr_34410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33013__auto__);
});})(c__33011__auto___34412,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__34426 = arguments.length;
switch (G__34426) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33011__auto___34471 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33011__auto___34471,out){
return (function (){
var f__33012__auto__ = (function (){var switch__32911__auto__ = ((function (c__33011__auto___34471,out){
return (function (state_34450){
var state_val_34451 = (state_34450[(1)]);
if((state_val_34451 === (7))){
var inst_34432 = (state_34450[(7)]);
var inst_34432__$1 = (state_34450[(2)]);
var inst_34433 = (inst_34432__$1 == null);
var inst_34434 = cljs.core.not(inst_34433);
var state_34450__$1 = (function (){var statearr_34452 = state_34450;
(statearr_34452[(7)] = inst_34432__$1);

return statearr_34452;
})();
if(inst_34434){
var statearr_34453_34472 = state_34450__$1;
(statearr_34453_34472[(1)] = (8));

} else {
var statearr_34454_34473 = state_34450__$1;
(statearr_34454_34473[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34451 === (1))){
var inst_34427 = (0);
var state_34450__$1 = (function (){var statearr_34455 = state_34450;
(statearr_34455[(8)] = inst_34427);

return statearr_34455;
})();
var statearr_34456_34474 = state_34450__$1;
(statearr_34456_34474[(2)] = null);

(statearr_34456_34474[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34451 === (4))){
var state_34450__$1 = state_34450;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34450__$1,(7),ch);
} else {
if((state_val_34451 === (6))){
var inst_34445 = (state_34450[(2)]);
var state_34450__$1 = state_34450;
var statearr_34457_34475 = state_34450__$1;
(statearr_34457_34475[(2)] = inst_34445);

(statearr_34457_34475[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34451 === (3))){
var inst_34447 = (state_34450[(2)]);
var inst_34448 = cljs.core.async.close_BANG_(out);
var state_34450__$1 = (function (){var statearr_34458 = state_34450;
(statearr_34458[(9)] = inst_34447);

return statearr_34458;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34450__$1,inst_34448);
} else {
if((state_val_34451 === (2))){
var inst_34427 = (state_34450[(8)]);
var inst_34429 = (inst_34427 < n);
var state_34450__$1 = state_34450;
if(cljs.core.truth_(inst_34429)){
var statearr_34459_34476 = state_34450__$1;
(statearr_34459_34476[(1)] = (4));

} else {
var statearr_34460_34477 = state_34450__$1;
(statearr_34460_34477[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34451 === (11))){
var inst_34427 = (state_34450[(8)]);
var inst_34437 = (state_34450[(2)]);
var inst_34438 = (inst_34427 + (1));
var inst_34427__$1 = inst_34438;
var state_34450__$1 = (function (){var statearr_34461 = state_34450;
(statearr_34461[(8)] = inst_34427__$1);

(statearr_34461[(10)] = inst_34437);

return statearr_34461;
})();
var statearr_34462_34478 = state_34450__$1;
(statearr_34462_34478[(2)] = null);

(statearr_34462_34478[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34451 === (9))){
var state_34450__$1 = state_34450;
var statearr_34463_34479 = state_34450__$1;
(statearr_34463_34479[(2)] = null);

(statearr_34463_34479[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34451 === (5))){
var state_34450__$1 = state_34450;
var statearr_34464_34480 = state_34450__$1;
(statearr_34464_34480[(2)] = null);

(statearr_34464_34480[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34451 === (10))){
var inst_34442 = (state_34450[(2)]);
var state_34450__$1 = state_34450;
var statearr_34465_34481 = state_34450__$1;
(statearr_34465_34481[(2)] = inst_34442);

(statearr_34465_34481[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34451 === (8))){
var inst_34432 = (state_34450[(7)]);
var state_34450__$1 = state_34450;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34450__$1,(11),out,inst_34432);
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
});})(c__33011__auto___34471,out))
;
return ((function (switch__32911__auto__,c__33011__auto___34471,out){
return (function() {
var cljs$core$async$state_machine__32912__auto__ = null;
var cljs$core$async$state_machine__32912__auto____0 = (function (){
var statearr_34466 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34466[(0)] = cljs$core$async$state_machine__32912__auto__);

(statearr_34466[(1)] = (1));

return statearr_34466;
});
var cljs$core$async$state_machine__32912__auto____1 = (function (state_34450){
while(true){
var ret_value__32913__auto__ = (function (){try{while(true){
var result__32914__auto__ = switch__32911__auto__(state_34450);
if(cljs.core.keyword_identical_QMARK_(result__32914__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__32914__auto__;
}
break;
}
}catch (e34467){if((e34467 instanceof Object)){
var ex__32915__auto__ = e34467;
var statearr_34468_34482 = state_34450;
(statearr_34468_34482[(5)] = ex__32915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34450);

return cljs.core.cst$kw$recur;
} else {
throw e34467;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32913__auto__,cljs.core.cst$kw$recur)){
var G__34483 = state_34450;
state_34450 = G__34483;
continue;
} else {
return ret_value__32913__auto__;
}
break;
}
});
cljs$core$async$state_machine__32912__auto__ = function(state_34450){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32912__auto____1.call(this,state_34450);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32912__auto____0;
cljs$core$async$state_machine__32912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32912__auto____1;
return cljs$core$async$state_machine__32912__auto__;
})()
;})(switch__32911__auto__,c__33011__auto___34471,out))
})();
var state__33013__auto__ = (function (){var statearr_34469 = (f__33012__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33012__auto__.cljs$core$IFn$_invoke$arity$0() : f__33012__auto__.call(null));
(statearr_34469[(6)] = c__33011__auto___34471);

return statearr_34469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33013__auto__);
});})(c__33011__auto___34471,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34485 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34485 = (function (f,ch,meta34486){
this.f = f;
this.ch = ch;
this.meta34486 = meta34486;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34485.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34487,meta34486__$1){
var self__ = this;
var _34487__$1 = this;
return (new cljs.core.async.t_cljs$core$async34485(self__.f,self__.ch,meta34486__$1));
});

cljs.core.async.t_cljs$core$async34485.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34487){
var self__ = this;
var _34487__$1 = this;
return self__.meta34486;
});

cljs.core.async.t_cljs$core$async34485.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34485.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async34485.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async34485.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34485.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async34488 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34488 = (function (f,ch,meta34486,_,fn1,meta34489){
this.f = f;
this.ch = ch;
this.meta34486 = meta34486;
this._ = _;
this.fn1 = fn1;
this.meta34489 = meta34489;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34488.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34490,meta34489__$1){
var self__ = this;
var _34490__$1 = this;
return (new cljs.core.async.t_cljs$core$async34488(self__.f,self__.ch,self__.meta34486,self__._,self__.fn1,meta34489__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34488.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34490){
var self__ = this;
var _34490__$1 = this;
return self__.meta34489;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34488.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34488.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34488.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34488.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34484_SHARP_){
var G__34491 = (((p1__34484_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34484_SHARP_) : self__.f.call(null,p1__34484_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34491) : f1.call(null,G__34491));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34488.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta34486,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async34485], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta34489], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34488.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34488.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34488";

cljs.core.async.t_cljs$core$async34488.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__28038__auto__,writer__28039__auto__,opt__28040__auto__){
return cljs.core._write(writer__28039__auto__,"cljs.core.async/t_cljs$core$async34488");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async34488 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34488(f__$1,ch__$1,meta34486__$1,___$2,fn1__$1,meta34489){
return (new cljs.core.async.t_cljs$core$async34488(f__$1,ch__$1,meta34486__$1,___$2,fn1__$1,meta34489));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34488(self__.f,self__.ch,self__.meta34486,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__27415__auto__ = ret;
if(cljs.core.truth_(and__27415__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__27415__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34492 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34492) : self__.f.call(null,G__34492));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async34485.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34485.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34485.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta34486], null);
});

cljs.core.async.t_cljs$core$async34485.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34485.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34485";

cljs.core.async.t_cljs$core$async34485.cljs$lang$ctorPrWriter = (function (this__28038__auto__,writer__28039__auto__,opt__28040__auto__){
return cljs.core._write(writer__28039__auto__,"cljs.core.async/t_cljs$core$async34485");
});

cljs.core.async.__GT_t_cljs$core$async34485 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34485(f__$1,ch__$1,meta34486){
return (new cljs.core.async.t_cljs$core$async34485(f__$1,ch__$1,meta34486));
});

}

return (new cljs.core.async.t_cljs$core$async34485(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34493 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34493 = (function (f,ch,meta34494){
this.f = f;
this.ch = ch;
this.meta34494 = meta34494;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34493.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34495,meta34494__$1){
var self__ = this;
var _34495__$1 = this;
return (new cljs.core.async.t_cljs$core$async34493(self__.f,self__.ch,meta34494__$1));
});

cljs.core.async.t_cljs$core$async34493.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34495){
var self__ = this;
var _34495__$1 = this;
return self__.meta34494;
});

cljs.core.async.t_cljs$core$async34493.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34493.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async34493.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34493.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34493.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34493.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async34493.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta34494], null);
});

cljs.core.async.t_cljs$core$async34493.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34493.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34493";

cljs.core.async.t_cljs$core$async34493.cljs$lang$ctorPrWriter = (function (this__28038__auto__,writer__28039__auto__,opt__28040__auto__){
return cljs.core._write(writer__28039__auto__,"cljs.core.async/t_cljs$core$async34493");
});

cljs.core.async.__GT_t_cljs$core$async34493 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34493(f__$1,ch__$1,meta34494){
return (new cljs.core.async.t_cljs$core$async34493(f__$1,ch__$1,meta34494));
});

}

return (new cljs.core.async.t_cljs$core$async34493(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async34496 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34496 = (function (p,ch,meta34497){
this.p = p;
this.ch = ch;
this.meta34497 = meta34497;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34496.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34498,meta34497__$1){
var self__ = this;
var _34498__$1 = this;
return (new cljs.core.async.t_cljs$core$async34496(self__.p,self__.ch,meta34497__$1));
});

cljs.core.async.t_cljs$core$async34496.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34498){
var self__ = this;
var _34498__$1 = this;
return self__.meta34497;
});

cljs.core.async.t_cljs$core$async34496.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34496.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async34496.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async34496.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34496.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34496.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34496.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34496.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta34497], null);
});

cljs.core.async.t_cljs$core$async34496.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34496.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34496";

cljs.core.async.t_cljs$core$async34496.cljs$lang$ctorPrWriter = (function (this__28038__auto__,writer__28039__auto__,opt__28040__auto__){
return cljs.core._write(writer__28039__auto__,"cljs.core.async/t_cljs$core$async34496");
});

cljs.core.async.__GT_t_cljs$core$async34496 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34496(p__$1,ch__$1,meta34497){
return (new cljs.core.async.t_cljs$core$async34496(p__$1,ch__$1,meta34497));
});

}

return (new cljs.core.async.t_cljs$core$async34496(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__34500 = arguments.length;
switch (G__34500) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33011__auto___34540 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33011__auto___34540,out){
return (function (){
var f__33012__auto__ = (function (){var switch__32911__auto__ = ((function (c__33011__auto___34540,out){
return (function (state_34521){
var state_val_34522 = (state_34521[(1)]);
if((state_val_34522 === (7))){
var inst_34517 = (state_34521[(2)]);
var state_34521__$1 = state_34521;
var statearr_34523_34541 = state_34521__$1;
(statearr_34523_34541[(2)] = inst_34517);

(statearr_34523_34541[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34522 === (1))){
var state_34521__$1 = state_34521;
var statearr_34524_34542 = state_34521__$1;
(statearr_34524_34542[(2)] = null);

(statearr_34524_34542[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34522 === (4))){
var inst_34503 = (state_34521[(7)]);
var inst_34503__$1 = (state_34521[(2)]);
var inst_34504 = (inst_34503__$1 == null);
var state_34521__$1 = (function (){var statearr_34525 = state_34521;
(statearr_34525[(7)] = inst_34503__$1);

return statearr_34525;
})();
if(cljs.core.truth_(inst_34504)){
var statearr_34526_34543 = state_34521__$1;
(statearr_34526_34543[(1)] = (5));

} else {
var statearr_34527_34544 = state_34521__$1;
(statearr_34527_34544[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34522 === (6))){
var inst_34503 = (state_34521[(7)]);
var inst_34508 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34503) : p.call(null,inst_34503));
var state_34521__$1 = state_34521;
if(cljs.core.truth_(inst_34508)){
var statearr_34528_34545 = state_34521__$1;
(statearr_34528_34545[(1)] = (8));

} else {
var statearr_34529_34546 = state_34521__$1;
(statearr_34529_34546[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34522 === (3))){
var inst_34519 = (state_34521[(2)]);
var state_34521__$1 = state_34521;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34521__$1,inst_34519);
} else {
if((state_val_34522 === (2))){
var state_34521__$1 = state_34521;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34521__$1,(4),ch);
} else {
if((state_val_34522 === (11))){
var inst_34511 = (state_34521[(2)]);
var state_34521__$1 = state_34521;
var statearr_34530_34547 = state_34521__$1;
(statearr_34530_34547[(2)] = inst_34511);

(statearr_34530_34547[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34522 === (9))){
var state_34521__$1 = state_34521;
var statearr_34531_34548 = state_34521__$1;
(statearr_34531_34548[(2)] = null);

(statearr_34531_34548[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34522 === (5))){
var inst_34506 = cljs.core.async.close_BANG_(out);
var state_34521__$1 = state_34521;
var statearr_34532_34549 = state_34521__$1;
(statearr_34532_34549[(2)] = inst_34506);

(statearr_34532_34549[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34522 === (10))){
var inst_34514 = (state_34521[(2)]);
var state_34521__$1 = (function (){var statearr_34533 = state_34521;
(statearr_34533[(8)] = inst_34514);

return statearr_34533;
})();
var statearr_34534_34550 = state_34521__$1;
(statearr_34534_34550[(2)] = null);

(statearr_34534_34550[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34522 === (8))){
var inst_34503 = (state_34521[(7)]);
var state_34521__$1 = state_34521;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34521__$1,(11),out,inst_34503);
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
});})(c__33011__auto___34540,out))
;
return ((function (switch__32911__auto__,c__33011__auto___34540,out){
return (function() {
var cljs$core$async$state_machine__32912__auto__ = null;
var cljs$core$async$state_machine__32912__auto____0 = (function (){
var statearr_34535 = [null,null,null,null,null,null,null,null,null];
(statearr_34535[(0)] = cljs$core$async$state_machine__32912__auto__);

(statearr_34535[(1)] = (1));

return statearr_34535;
});
var cljs$core$async$state_machine__32912__auto____1 = (function (state_34521){
while(true){
var ret_value__32913__auto__ = (function (){try{while(true){
var result__32914__auto__ = switch__32911__auto__(state_34521);
if(cljs.core.keyword_identical_QMARK_(result__32914__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__32914__auto__;
}
break;
}
}catch (e34536){if((e34536 instanceof Object)){
var ex__32915__auto__ = e34536;
var statearr_34537_34551 = state_34521;
(statearr_34537_34551[(5)] = ex__32915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34521);

return cljs.core.cst$kw$recur;
} else {
throw e34536;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32913__auto__,cljs.core.cst$kw$recur)){
var G__34552 = state_34521;
state_34521 = G__34552;
continue;
} else {
return ret_value__32913__auto__;
}
break;
}
});
cljs$core$async$state_machine__32912__auto__ = function(state_34521){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32912__auto____1.call(this,state_34521);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32912__auto____0;
cljs$core$async$state_machine__32912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32912__auto____1;
return cljs$core$async$state_machine__32912__auto__;
})()
;})(switch__32911__auto__,c__33011__auto___34540,out))
})();
var state__33013__auto__ = (function (){var statearr_34538 = (f__33012__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33012__auto__.cljs$core$IFn$_invoke$arity$0() : f__33012__auto__.call(null));
(statearr_34538[(6)] = c__33011__auto___34540);

return statearr_34538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33013__auto__);
});})(c__33011__auto___34540,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34554 = arguments.length;
switch (G__34554) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33011__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33011__auto__){
return (function (){
var f__33012__auto__ = (function (){var switch__32911__auto__ = ((function (c__33011__auto__){
return (function (state_34617){
var state_val_34618 = (state_34617[(1)]);
if((state_val_34618 === (7))){
var inst_34613 = (state_34617[(2)]);
var state_34617__$1 = state_34617;
var statearr_34619_34657 = state_34617__$1;
(statearr_34619_34657[(2)] = inst_34613);

(statearr_34619_34657[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34618 === (20))){
var inst_34583 = (state_34617[(7)]);
var inst_34594 = (state_34617[(2)]);
var inst_34595 = cljs.core.next(inst_34583);
var inst_34569 = inst_34595;
var inst_34570 = null;
var inst_34571 = (0);
var inst_34572 = (0);
var state_34617__$1 = (function (){var statearr_34620 = state_34617;
(statearr_34620[(8)] = inst_34571);

(statearr_34620[(9)] = inst_34594);

(statearr_34620[(10)] = inst_34570);

(statearr_34620[(11)] = inst_34569);

(statearr_34620[(12)] = inst_34572);

return statearr_34620;
})();
var statearr_34621_34658 = state_34617__$1;
(statearr_34621_34658[(2)] = null);

(statearr_34621_34658[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34618 === (1))){
var state_34617__$1 = state_34617;
var statearr_34622_34659 = state_34617__$1;
(statearr_34622_34659[(2)] = null);

(statearr_34622_34659[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34618 === (4))){
var inst_34558 = (state_34617[(13)]);
var inst_34558__$1 = (state_34617[(2)]);
var inst_34559 = (inst_34558__$1 == null);
var state_34617__$1 = (function (){var statearr_34623 = state_34617;
(statearr_34623[(13)] = inst_34558__$1);

return statearr_34623;
})();
if(cljs.core.truth_(inst_34559)){
var statearr_34624_34660 = state_34617__$1;
(statearr_34624_34660[(1)] = (5));

} else {
var statearr_34625_34661 = state_34617__$1;
(statearr_34625_34661[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34618 === (15))){
var state_34617__$1 = state_34617;
var statearr_34629_34662 = state_34617__$1;
(statearr_34629_34662[(2)] = null);

(statearr_34629_34662[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34618 === (21))){
var state_34617__$1 = state_34617;
var statearr_34630_34663 = state_34617__$1;
(statearr_34630_34663[(2)] = null);

(statearr_34630_34663[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34618 === (13))){
var inst_34571 = (state_34617[(8)]);
var inst_34570 = (state_34617[(10)]);
var inst_34569 = (state_34617[(11)]);
var inst_34572 = (state_34617[(12)]);
var inst_34579 = (state_34617[(2)]);
var inst_34580 = (inst_34572 + (1));
var tmp34626 = inst_34571;
var tmp34627 = inst_34570;
var tmp34628 = inst_34569;
var inst_34569__$1 = tmp34628;
var inst_34570__$1 = tmp34627;
var inst_34571__$1 = tmp34626;
var inst_34572__$1 = inst_34580;
var state_34617__$1 = (function (){var statearr_34631 = state_34617;
(statearr_34631[(8)] = inst_34571__$1);

(statearr_34631[(14)] = inst_34579);

(statearr_34631[(10)] = inst_34570__$1);

(statearr_34631[(11)] = inst_34569__$1);

(statearr_34631[(12)] = inst_34572__$1);

return statearr_34631;
})();
var statearr_34632_34664 = state_34617__$1;
(statearr_34632_34664[(2)] = null);

(statearr_34632_34664[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34618 === (22))){
var state_34617__$1 = state_34617;
var statearr_34633_34665 = state_34617__$1;
(statearr_34633_34665[(2)] = null);

(statearr_34633_34665[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34618 === (6))){
var inst_34558 = (state_34617[(13)]);
var inst_34567 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34558) : f.call(null,inst_34558));
var inst_34568 = cljs.core.seq(inst_34567);
var inst_34569 = inst_34568;
var inst_34570 = null;
var inst_34571 = (0);
var inst_34572 = (0);
var state_34617__$1 = (function (){var statearr_34634 = state_34617;
(statearr_34634[(8)] = inst_34571);

(statearr_34634[(10)] = inst_34570);

(statearr_34634[(11)] = inst_34569);

(statearr_34634[(12)] = inst_34572);

return statearr_34634;
})();
var statearr_34635_34666 = state_34617__$1;
(statearr_34635_34666[(2)] = null);

(statearr_34635_34666[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34618 === (17))){
var inst_34583 = (state_34617[(7)]);
var inst_34587 = cljs.core.chunk_first(inst_34583);
var inst_34588 = cljs.core.chunk_rest(inst_34583);
var inst_34589 = cljs.core.count(inst_34587);
var inst_34569 = inst_34588;
var inst_34570 = inst_34587;
var inst_34571 = inst_34589;
var inst_34572 = (0);
var state_34617__$1 = (function (){var statearr_34636 = state_34617;
(statearr_34636[(8)] = inst_34571);

(statearr_34636[(10)] = inst_34570);

(statearr_34636[(11)] = inst_34569);

(statearr_34636[(12)] = inst_34572);

return statearr_34636;
})();
var statearr_34637_34667 = state_34617__$1;
(statearr_34637_34667[(2)] = null);

(statearr_34637_34667[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34618 === (3))){
var inst_34615 = (state_34617[(2)]);
var state_34617__$1 = state_34617;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34617__$1,inst_34615);
} else {
if((state_val_34618 === (12))){
var inst_34603 = (state_34617[(2)]);
var state_34617__$1 = state_34617;
var statearr_34638_34668 = state_34617__$1;
(statearr_34638_34668[(2)] = inst_34603);

(statearr_34638_34668[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34618 === (2))){
var state_34617__$1 = state_34617;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34617__$1,(4),in$);
} else {
if((state_val_34618 === (23))){
var inst_34611 = (state_34617[(2)]);
var state_34617__$1 = state_34617;
var statearr_34639_34669 = state_34617__$1;
(statearr_34639_34669[(2)] = inst_34611);

(statearr_34639_34669[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34618 === (19))){
var inst_34598 = (state_34617[(2)]);
var state_34617__$1 = state_34617;
var statearr_34640_34670 = state_34617__$1;
(statearr_34640_34670[(2)] = inst_34598);

(statearr_34640_34670[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34618 === (11))){
var inst_34569 = (state_34617[(11)]);
var inst_34583 = (state_34617[(7)]);
var inst_34583__$1 = cljs.core.seq(inst_34569);
var state_34617__$1 = (function (){var statearr_34641 = state_34617;
(statearr_34641[(7)] = inst_34583__$1);

return statearr_34641;
})();
if(inst_34583__$1){
var statearr_34642_34671 = state_34617__$1;
(statearr_34642_34671[(1)] = (14));

} else {
var statearr_34643_34672 = state_34617__$1;
(statearr_34643_34672[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34618 === (9))){
var inst_34605 = (state_34617[(2)]);
var inst_34606 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34617__$1 = (function (){var statearr_34644 = state_34617;
(statearr_34644[(15)] = inst_34605);

return statearr_34644;
})();
if(cljs.core.truth_(inst_34606)){
var statearr_34645_34673 = state_34617__$1;
(statearr_34645_34673[(1)] = (21));

} else {
var statearr_34646_34674 = state_34617__$1;
(statearr_34646_34674[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34618 === (5))){
var inst_34561 = cljs.core.async.close_BANG_(out);
var state_34617__$1 = state_34617;
var statearr_34647_34675 = state_34617__$1;
(statearr_34647_34675[(2)] = inst_34561);

(statearr_34647_34675[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34618 === (14))){
var inst_34583 = (state_34617[(7)]);
var inst_34585 = cljs.core.chunked_seq_QMARK_(inst_34583);
var state_34617__$1 = state_34617;
if(inst_34585){
var statearr_34648_34676 = state_34617__$1;
(statearr_34648_34676[(1)] = (17));

} else {
var statearr_34649_34677 = state_34617__$1;
(statearr_34649_34677[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34618 === (16))){
var inst_34601 = (state_34617[(2)]);
var state_34617__$1 = state_34617;
var statearr_34650_34678 = state_34617__$1;
(statearr_34650_34678[(2)] = inst_34601);

(statearr_34650_34678[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34618 === (10))){
var inst_34570 = (state_34617[(10)]);
var inst_34572 = (state_34617[(12)]);
var inst_34577 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34570,inst_34572);
var state_34617__$1 = state_34617;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34617__$1,(13),out,inst_34577);
} else {
if((state_val_34618 === (18))){
var inst_34583 = (state_34617[(7)]);
var inst_34592 = cljs.core.first(inst_34583);
var state_34617__$1 = state_34617;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34617__$1,(20),out,inst_34592);
} else {
if((state_val_34618 === (8))){
var inst_34571 = (state_34617[(8)]);
var inst_34572 = (state_34617[(12)]);
var inst_34574 = (inst_34572 < inst_34571);
var inst_34575 = inst_34574;
var state_34617__$1 = state_34617;
if(cljs.core.truth_(inst_34575)){
var statearr_34651_34679 = state_34617__$1;
(statearr_34651_34679[(1)] = (10));

} else {
var statearr_34652_34680 = state_34617__$1;
(statearr_34652_34680[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__33011__auto__))
;
return ((function (switch__32911__auto__,c__33011__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32912__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32912__auto____0 = (function (){
var statearr_34653 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34653[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32912__auto__);

(statearr_34653[(1)] = (1));

return statearr_34653;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32912__auto____1 = (function (state_34617){
while(true){
var ret_value__32913__auto__ = (function (){try{while(true){
var result__32914__auto__ = switch__32911__auto__(state_34617);
if(cljs.core.keyword_identical_QMARK_(result__32914__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__32914__auto__;
}
break;
}
}catch (e34654){if((e34654 instanceof Object)){
var ex__32915__auto__ = e34654;
var statearr_34655_34681 = state_34617;
(statearr_34655_34681[(5)] = ex__32915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34617);

return cljs.core.cst$kw$recur;
} else {
throw e34654;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32913__auto__,cljs.core.cst$kw$recur)){
var G__34682 = state_34617;
state_34617 = G__34682;
continue;
} else {
return ret_value__32913__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32912__auto__ = function(state_34617){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32912__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32912__auto____1.call(this,state_34617);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__32912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32912__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32912__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32912__auto__;
})()
;})(switch__32911__auto__,c__33011__auto__))
})();
var state__33013__auto__ = (function (){var statearr_34656 = (f__33012__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33012__auto__.cljs$core$IFn$_invoke$arity$0() : f__33012__auto__.call(null));
(statearr_34656[(6)] = c__33011__auto__);

return statearr_34656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33013__auto__);
});})(c__33011__auto__))
);

return c__33011__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34684 = arguments.length;
switch (G__34684) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34687 = arguments.length;
switch (G__34687) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34690 = arguments.length;
switch (G__34690) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33011__auto___34737 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33011__auto___34737,out){
return (function (){
var f__33012__auto__ = (function (){var switch__32911__auto__ = ((function (c__33011__auto___34737,out){
return (function (state_34714){
var state_val_34715 = (state_34714[(1)]);
if((state_val_34715 === (7))){
var inst_34709 = (state_34714[(2)]);
var state_34714__$1 = state_34714;
var statearr_34716_34738 = state_34714__$1;
(statearr_34716_34738[(2)] = inst_34709);

(statearr_34716_34738[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34715 === (1))){
var inst_34691 = null;
var state_34714__$1 = (function (){var statearr_34717 = state_34714;
(statearr_34717[(7)] = inst_34691);

return statearr_34717;
})();
var statearr_34718_34739 = state_34714__$1;
(statearr_34718_34739[(2)] = null);

(statearr_34718_34739[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34715 === (4))){
var inst_34694 = (state_34714[(8)]);
var inst_34694__$1 = (state_34714[(2)]);
var inst_34695 = (inst_34694__$1 == null);
var inst_34696 = cljs.core.not(inst_34695);
var state_34714__$1 = (function (){var statearr_34719 = state_34714;
(statearr_34719[(8)] = inst_34694__$1);

return statearr_34719;
})();
if(inst_34696){
var statearr_34720_34740 = state_34714__$1;
(statearr_34720_34740[(1)] = (5));

} else {
var statearr_34721_34741 = state_34714__$1;
(statearr_34721_34741[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34715 === (6))){
var state_34714__$1 = state_34714;
var statearr_34722_34742 = state_34714__$1;
(statearr_34722_34742[(2)] = null);

(statearr_34722_34742[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34715 === (3))){
var inst_34711 = (state_34714[(2)]);
var inst_34712 = cljs.core.async.close_BANG_(out);
var state_34714__$1 = (function (){var statearr_34723 = state_34714;
(statearr_34723[(9)] = inst_34711);

return statearr_34723;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34714__$1,inst_34712);
} else {
if((state_val_34715 === (2))){
var state_34714__$1 = state_34714;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34714__$1,(4),ch);
} else {
if((state_val_34715 === (11))){
var inst_34694 = (state_34714[(8)]);
var inst_34703 = (state_34714[(2)]);
var inst_34691 = inst_34694;
var state_34714__$1 = (function (){var statearr_34724 = state_34714;
(statearr_34724[(10)] = inst_34703);

(statearr_34724[(7)] = inst_34691);

return statearr_34724;
})();
var statearr_34725_34743 = state_34714__$1;
(statearr_34725_34743[(2)] = null);

(statearr_34725_34743[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34715 === (9))){
var inst_34694 = (state_34714[(8)]);
var state_34714__$1 = state_34714;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34714__$1,(11),out,inst_34694);
} else {
if((state_val_34715 === (5))){
var inst_34694 = (state_34714[(8)]);
var inst_34691 = (state_34714[(7)]);
var inst_34698 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34694,inst_34691);
var state_34714__$1 = state_34714;
if(inst_34698){
var statearr_34727_34744 = state_34714__$1;
(statearr_34727_34744[(1)] = (8));

} else {
var statearr_34728_34745 = state_34714__$1;
(statearr_34728_34745[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34715 === (10))){
var inst_34706 = (state_34714[(2)]);
var state_34714__$1 = state_34714;
var statearr_34729_34746 = state_34714__$1;
(statearr_34729_34746[(2)] = inst_34706);

(statearr_34729_34746[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34715 === (8))){
var inst_34691 = (state_34714[(7)]);
var tmp34726 = inst_34691;
var inst_34691__$1 = tmp34726;
var state_34714__$1 = (function (){var statearr_34730 = state_34714;
(statearr_34730[(7)] = inst_34691__$1);

return statearr_34730;
})();
var statearr_34731_34747 = state_34714__$1;
(statearr_34731_34747[(2)] = null);

(statearr_34731_34747[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__33011__auto___34737,out))
;
return ((function (switch__32911__auto__,c__33011__auto___34737,out){
return (function() {
var cljs$core$async$state_machine__32912__auto__ = null;
var cljs$core$async$state_machine__32912__auto____0 = (function (){
var statearr_34732 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34732[(0)] = cljs$core$async$state_machine__32912__auto__);

(statearr_34732[(1)] = (1));

return statearr_34732;
});
var cljs$core$async$state_machine__32912__auto____1 = (function (state_34714){
while(true){
var ret_value__32913__auto__ = (function (){try{while(true){
var result__32914__auto__ = switch__32911__auto__(state_34714);
if(cljs.core.keyword_identical_QMARK_(result__32914__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__32914__auto__;
}
break;
}
}catch (e34733){if((e34733 instanceof Object)){
var ex__32915__auto__ = e34733;
var statearr_34734_34748 = state_34714;
(statearr_34734_34748[(5)] = ex__32915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34714);

return cljs.core.cst$kw$recur;
} else {
throw e34733;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32913__auto__,cljs.core.cst$kw$recur)){
var G__34749 = state_34714;
state_34714 = G__34749;
continue;
} else {
return ret_value__32913__auto__;
}
break;
}
});
cljs$core$async$state_machine__32912__auto__ = function(state_34714){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32912__auto____1.call(this,state_34714);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32912__auto____0;
cljs$core$async$state_machine__32912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32912__auto____1;
return cljs$core$async$state_machine__32912__auto__;
})()
;})(switch__32911__auto__,c__33011__auto___34737,out))
})();
var state__33013__auto__ = (function (){var statearr_34735 = (f__33012__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33012__auto__.cljs$core$IFn$_invoke$arity$0() : f__33012__auto__.call(null));
(statearr_34735[(6)] = c__33011__auto___34737);

return statearr_34735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33013__auto__);
});})(c__33011__auto___34737,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34751 = arguments.length;
switch (G__34751) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33011__auto___34817 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33011__auto___34817,out){
return (function (){
var f__33012__auto__ = (function (){var switch__32911__auto__ = ((function (c__33011__auto___34817,out){
return (function (state_34789){
var state_val_34790 = (state_34789[(1)]);
if((state_val_34790 === (7))){
var inst_34785 = (state_34789[(2)]);
var state_34789__$1 = state_34789;
var statearr_34791_34818 = state_34789__$1;
(statearr_34791_34818[(2)] = inst_34785);

(statearr_34791_34818[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34790 === (1))){
var inst_34752 = (new Array(n));
var inst_34753 = inst_34752;
var inst_34754 = (0);
var state_34789__$1 = (function (){var statearr_34792 = state_34789;
(statearr_34792[(7)] = inst_34753);

(statearr_34792[(8)] = inst_34754);

return statearr_34792;
})();
var statearr_34793_34819 = state_34789__$1;
(statearr_34793_34819[(2)] = null);

(statearr_34793_34819[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34790 === (4))){
var inst_34757 = (state_34789[(9)]);
var inst_34757__$1 = (state_34789[(2)]);
var inst_34758 = (inst_34757__$1 == null);
var inst_34759 = cljs.core.not(inst_34758);
var state_34789__$1 = (function (){var statearr_34794 = state_34789;
(statearr_34794[(9)] = inst_34757__$1);

return statearr_34794;
})();
if(inst_34759){
var statearr_34795_34820 = state_34789__$1;
(statearr_34795_34820[(1)] = (5));

} else {
var statearr_34796_34821 = state_34789__$1;
(statearr_34796_34821[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34790 === (15))){
var inst_34779 = (state_34789[(2)]);
var state_34789__$1 = state_34789;
var statearr_34797_34822 = state_34789__$1;
(statearr_34797_34822[(2)] = inst_34779);

(statearr_34797_34822[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34790 === (13))){
var state_34789__$1 = state_34789;
var statearr_34798_34823 = state_34789__$1;
(statearr_34798_34823[(2)] = null);

(statearr_34798_34823[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34790 === (6))){
var inst_34754 = (state_34789[(8)]);
var inst_34775 = (inst_34754 > (0));
var state_34789__$1 = state_34789;
if(cljs.core.truth_(inst_34775)){
var statearr_34799_34824 = state_34789__$1;
(statearr_34799_34824[(1)] = (12));

} else {
var statearr_34800_34825 = state_34789__$1;
(statearr_34800_34825[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34790 === (3))){
var inst_34787 = (state_34789[(2)]);
var state_34789__$1 = state_34789;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34789__$1,inst_34787);
} else {
if((state_val_34790 === (12))){
var inst_34753 = (state_34789[(7)]);
var inst_34777 = cljs.core.vec(inst_34753);
var state_34789__$1 = state_34789;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34789__$1,(15),out,inst_34777);
} else {
if((state_val_34790 === (2))){
var state_34789__$1 = state_34789;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34789__$1,(4),ch);
} else {
if((state_val_34790 === (11))){
var inst_34769 = (state_34789[(2)]);
var inst_34770 = (new Array(n));
var inst_34753 = inst_34770;
var inst_34754 = (0);
var state_34789__$1 = (function (){var statearr_34801 = state_34789;
(statearr_34801[(10)] = inst_34769);

(statearr_34801[(7)] = inst_34753);

(statearr_34801[(8)] = inst_34754);

return statearr_34801;
})();
var statearr_34802_34826 = state_34789__$1;
(statearr_34802_34826[(2)] = null);

(statearr_34802_34826[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34790 === (9))){
var inst_34753 = (state_34789[(7)]);
var inst_34767 = cljs.core.vec(inst_34753);
var state_34789__$1 = state_34789;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34789__$1,(11),out,inst_34767);
} else {
if((state_val_34790 === (5))){
var inst_34753 = (state_34789[(7)]);
var inst_34757 = (state_34789[(9)]);
var inst_34754 = (state_34789[(8)]);
var inst_34762 = (state_34789[(11)]);
var inst_34761 = (inst_34753[inst_34754] = inst_34757);
var inst_34762__$1 = (inst_34754 + (1));
var inst_34763 = (inst_34762__$1 < n);
var state_34789__$1 = (function (){var statearr_34803 = state_34789;
(statearr_34803[(12)] = inst_34761);

(statearr_34803[(11)] = inst_34762__$1);

return statearr_34803;
})();
if(cljs.core.truth_(inst_34763)){
var statearr_34804_34827 = state_34789__$1;
(statearr_34804_34827[(1)] = (8));

} else {
var statearr_34805_34828 = state_34789__$1;
(statearr_34805_34828[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34790 === (14))){
var inst_34782 = (state_34789[(2)]);
var inst_34783 = cljs.core.async.close_BANG_(out);
var state_34789__$1 = (function (){var statearr_34807 = state_34789;
(statearr_34807[(13)] = inst_34782);

return statearr_34807;
})();
var statearr_34808_34829 = state_34789__$1;
(statearr_34808_34829[(2)] = inst_34783);

(statearr_34808_34829[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34790 === (10))){
var inst_34773 = (state_34789[(2)]);
var state_34789__$1 = state_34789;
var statearr_34809_34830 = state_34789__$1;
(statearr_34809_34830[(2)] = inst_34773);

(statearr_34809_34830[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34790 === (8))){
var inst_34753 = (state_34789[(7)]);
var inst_34762 = (state_34789[(11)]);
var tmp34806 = inst_34753;
var inst_34753__$1 = tmp34806;
var inst_34754 = inst_34762;
var state_34789__$1 = (function (){var statearr_34810 = state_34789;
(statearr_34810[(7)] = inst_34753__$1);

(statearr_34810[(8)] = inst_34754);

return statearr_34810;
})();
var statearr_34811_34831 = state_34789__$1;
(statearr_34811_34831[(2)] = null);

(statearr_34811_34831[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__33011__auto___34817,out))
;
return ((function (switch__32911__auto__,c__33011__auto___34817,out){
return (function() {
var cljs$core$async$state_machine__32912__auto__ = null;
var cljs$core$async$state_machine__32912__auto____0 = (function (){
var statearr_34812 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34812[(0)] = cljs$core$async$state_machine__32912__auto__);

(statearr_34812[(1)] = (1));

return statearr_34812;
});
var cljs$core$async$state_machine__32912__auto____1 = (function (state_34789){
while(true){
var ret_value__32913__auto__ = (function (){try{while(true){
var result__32914__auto__ = switch__32911__auto__(state_34789);
if(cljs.core.keyword_identical_QMARK_(result__32914__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__32914__auto__;
}
break;
}
}catch (e34813){if((e34813 instanceof Object)){
var ex__32915__auto__ = e34813;
var statearr_34814_34832 = state_34789;
(statearr_34814_34832[(5)] = ex__32915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34789);

return cljs.core.cst$kw$recur;
} else {
throw e34813;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32913__auto__,cljs.core.cst$kw$recur)){
var G__34833 = state_34789;
state_34789 = G__34833;
continue;
} else {
return ret_value__32913__auto__;
}
break;
}
});
cljs$core$async$state_machine__32912__auto__ = function(state_34789){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32912__auto____1.call(this,state_34789);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32912__auto____0;
cljs$core$async$state_machine__32912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32912__auto____1;
return cljs$core$async$state_machine__32912__auto__;
})()
;})(switch__32911__auto__,c__33011__auto___34817,out))
})();
var state__33013__auto__ = (function (){var statearr_34815 = (f__33012__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33012__auto__.cljs$core$IFn$_invoke$arity$0() : f__33012__auto__.call(null));
(statearr_34815[(6)] = c__33011__auto___34817);

return statearr_34815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33013__auto__);
});})(c__33011__auto___34817,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34835 = arguments.length;
switch (G__34835) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33011__auto___34905 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33011__auto___34905,out){
return (function (){
var f__33012__auto__ = (function (){var switch__32911__auto__ = ((function (c__33011__auto___34905,out){
return (function (state_34877){
var state_val_34878 = (state_34877[(1)]);
if((state_val_34878 === (7))){
var inst_34873 = (state_34877[(2)]);
var state_34877__$1 = state_34877;
var statearr_34879_34906 = state_34877__$1;
(statearr_34879_34906[(2)] = inst_34873);

(statearr_34879_34906[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34878 === (1))){
var inst_34836 = [];
var inst_34837 = inst_34836;
var inst_34838 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_34877__$1 = (function (){var statearr_34880 = state_34877;
(statearr_34880[(7)] = inst_34837);

(statearr_34880[(8)] = inst_34838);

return statearr_34880;
})();
var statearr_34881_34907 = state_34877__$1;
(statearr_34881_34907[(2)] = null);

(statearr_34881_34907[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34878 === (4))){
var inst_34841 = (state_34877[(9)]);
var inst_34841__$1 = (state_34877[(2)]);
var inst_34842 = (inst_34841__$1 == null);
var inst_34843 = cljs.core.not(inst_34842);
var state_34877__$1 = (function (){var statearr_34882 = state_34877;
(statearr_34882[(9)] = inst_34841__$1);

return statearr_34882;
})();
if(inst_34843){
var statearr_34883_34908 = state_34877__$1;
(statearr_34883_34908[(1)] = (5));

} else {
var statearr_34884_34909 = state_34877__$1;
(statearr_34884_34909[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34878 === (15))){
var inst_34867 = (state_34877[(2)]);
var state_34877__$1 = state_34877;
var statearr_34885_34910 = state_34877__$1;
(statearr_34885_34910[(2)] = inst_34867);

(statearr_34885_34910[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34878 === (13))){
var state_34877__$1 = state_34877;
var statearr_34886_34911 = state_34877__$1;
(statearr_34886_34911[(2)] = null);

(statearr_34886_34911[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34878 === (6))){
var inst_34837 = (state_34877[(7)]);
var inst_34862 = inst_34837.length;
var inst_34863 = (inst_34862 > (0));
var state_34877__$1 = state_34877;
if(cljs.core.truth_(inst_34863)){
var statearr_34887_34912 = state_34877__$1;
(statearr_34887_34912[(1)] = (12));

} else {
var statearr_34888_34913 = state_34877__$1;
(statearr_34888_34913[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34878 === (3))){
var inst_34875 = (state_34877[(2)]);
var state_34877__$1 = state_34877;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34877__$1,inst_34875);
} else {
if((state_val_34878 === (12))){
var inst_34837 = (state_34877[(7)]);
var inst_34865 = cljs.core.vec(inst_34837);
var state_34877__$1 = state_34877;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34877__$1,(15),out,inst_34865);
} else {
if((state_val_34878 === (2))){
var state_34877__$1 = state_34877;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34877__$1,(4),ch);
} else {
if((state_val_34878 === (11))){
var inst_34845 = (state_34877[(10)]);
var inst_34841 = (state_34877[(9)]);
var inst_34855 = (state_34877[(2)]);
var inst_34856 = [];
var inst_34857 = inst_34856.push(inst_34841);
var inst_34837 = inst_34856;
var inst_34838 = inst_34845;
var state_34877__$1 = (function (){var statearr_34889 = state_34877;
(statearr_34889[(11)] = inst_34857);

(statearr_34889[(7)] = inst_34837);

(statearr_34889[(12)] = inst_34855);

(statearr_34889[(8)] = inst_34838);

return statearr_34889;
})();
var statearr_34890_34914 = state_34877__$1;
(statearr_34890_34914[(2)] = null);

(statearr_34890_34914[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34878 === (9))){
var inst_34837 = (state_34877[(7)]);
var inst_34853 = cljs.core.vec(inst_34837);
var state_34877__$1 = state_34877;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34877__$1,(11),out,inst_34853);
} else {
if((state_val_34878 === (5))){
var inst_34845 = (state_34877[(10)]);
var inst_34841 = (state_34877[(9)]);
var inst_34838 = (state_34877[(8)]);
var inst_34845__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34841) : f.call(null,inst_34841));
var inst_34846 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34845__$1,inst_34838);
var inst_34847 = cljs.core.keyword_identical_QMARK_(inst_34838,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_34848 = (inst_34846) || (inst_34847);
var state_34877__$1 = (function (){var statearr_34891 = state_34877;
(statearr_34891[(10)] = inst_34845__$1);

return statearr_34891;
})();
if(cljs.core.truth_(inst_34848)){
var statearr_34892_34915 = state_34877__$1;
(statearr_34892_34915[(1)] = (8));

} else {
var statearr_34893_34916 = state_34877__$1;
(statearr_34893_34916[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34878 === (14))){
var inst_34870 = (state_34877[(2)]);
var inst_34871 = cljs.core.async.close_BANG_(out);
var state_34877__$1 = (function (){var statearr_34895 = state_34877;
(statearr_34895[(13)] = inst_34870);

return statearr_34895;
})();
var statearr_34896_34917 = state_34877__$1;
(statearr_34896_34917[(2)] = inst_34871);

(statearr_34896_34917[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34878 === (10))){
var inst_34860 = (state_34877[(2)]);
var state_34877__$1 = state_34877;
var statearr_34897_34918 = state_34877__$1;
(statearr_34897_34918[(2)] = inst_34860);

(statearr_34897_34918[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34878 === (8))){
var inst_34845 = (state_34877[(10)]);
var inst_34837 = (state_34877[(7)]);
var inst_34841 = (state_34877[(9)]);
var inst_34850 = inst_34837.push(inst_34841);
var tmp34894 = inst_34837;
var inst_34837__$1 = tmp34894;
var inst_34838 = inst_34845;
var state_34877__$1 = (function (){var statearr_34898 = state_34877;
(statearr_34898[(7)] = inst_34837__$1);

(statearr_34898[(14)] = inst_34850);

(statearr_34898[(8)] = inst_34838);

return statearr_34898;
})();
var statearr_34899_34919 = state_34877__$1;
(statearr_34899_34919[(2)] = null);

(statearr_34899_34919[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__33011__auto___34905,out))
;
return ((function (switch__32911__auto__,c__33011__auto___34905,out){
return (function() {
var cljs$core$async$state_machine__32912__auto__ = null;
var cljs$core$async$state_machine__32912__auto____0 = (function (){
var statearr_34900 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34900[(0)] = cljs$core$async$state_machine__32912__auto__);

(statearr_34900[(1)] = (1));

return statearr_34900;
});
var cljs$core$async$state_machine__32912__auto____1 = (function (state_34877){
while(true){
var ret_value__32913__auto__ = (function (){try{while(true){
var result__32914__auto__ = switch__32911__auto__(state_34877);
if(cljs.core.keyword_identical_QMARK_(result__32914__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__32914__auto__;
}
break;
}
}catch (e34901){if((e34901 instanceof Object)){
var ex__32915__auto__ = e34901;
var statearr_34902_34920 = state_34877;
(statearr_34902_34920[(5)] = ex__32915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34877);

return cljs.core.cst$kw$recur;
} else {
throw e34901;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32913__auto__,cljs.core.cst$kw$recur)){
var G__34921 = state_34877;
state_34877 = G__34921;
continue;
} else {
return ret_value__32913__auto__;
}
break;
}
});
cljs$core$async$state_machine__32912__auto__ = function(state_34877){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32912__auto____1.call(this,state_34877);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32912__auto____0;
cljs$core$async$state_machine__32912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32912__auto____1;
return cljs$core$async$state_machine__32912__auto__;
})()
;})(switch__32911__auto__,c__33011__auto___34905,out))
})();
var state__33013__auto__ = (function (){var statearr_34903 = (f__33012__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33012__auto__.cljs$core$IFn$_invoke$arity$0() : f__33012__auto__.call(null));
(statearr_34903[(6)] = c__33011__auto___34905);

return statearr_34903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33013__auto__);
});})(c__33011__auto___34905,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

