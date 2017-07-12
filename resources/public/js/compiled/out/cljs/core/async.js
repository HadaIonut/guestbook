// Compiled by ClojureScript 1.9.671 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__49035 = arguments.length;
switch (G__49035) {
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
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async49036 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49036 = (function (f,blockable,meta49037){
this.f = f;
this.blockable = blockable;
this.meta49037 = meta49037;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async49036.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49038,meta49037__$1){
var self__ = this;
var _49038__$1 = this;
return (new cljs.core.async.t_cljs$core$async49036(self__.f,self__.blockable,meta49037__$1));
});

cljs.core.async.t_cljs$core$async49036.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49038){
var self__ = this;
var _49038__$1 = this;
return self__.meta49037;
});

cljs.core.async.t_cljs$core$async49036.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49036.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async49036.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async49036.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async49036.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta49037","meta49037",1156330029,null)], null);
});

cljs.core.async.t_cljs$core$async49036.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49036.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49036";

cljs.core.async.t_cljs$core$async49036.cljs$lang$ctorPrWriter = (function (this__46520__auto__,writer__46521__auto__,opt__46522__auto__){
return cljs.core._write.call(null,writer__46521__auto__,"cljs.core.async/t_cljs$core$async49036");
});

cljs.core.async.__GT_t_cljs$core$async49036 = (function cljs$core$async$__GT_t_cljs$core$async49036(f__$1,blockable__$1,meta49037){
return (new cljs.core.async.t_cljs$core$async49036(f__$1,blockable__$1,meta49037));
});

}

return (new cljs.core.async.t_cljs$core$async49036(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
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
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__49042 = arguments.length;
switch (G__49042) {
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
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var G__49045 = arguments.length;
switch (G__49045) {
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
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var G__49048 = arguments.length;
switch (G__49048) {
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
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_49050 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_49050);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_49050,ret){
return (function (){
return fn1.call(null,val_49050);
});})(val_49050,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
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
var G__49052 = arguments.length;
switch (G__49052) {
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
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
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
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__46833__auto___49054 = n;
var x_49055 = (0);
while(true){
if((x_49055 < n__46833__auto___49054)){
(a[x_49055] = (0));

var G__49056 = (x_49055 + (1));
x_49055 = G__49056;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__49057 = (i + (1));
i = G__49057;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async49058 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49058 = (function (flag,meta49059){
this.flag = flag;
this.meta49059 = meta49059;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async49058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_49060,meta49059__$1){
var self__ = this;
var _49060__$1 = this;
return (new cljs.core.async.t_cljs$core$async49058(self__.flag,meta49059__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async49058.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_49060){
var self__ = this;
var _49060__$1 = this;
return self__.meta49059;
});})(flag))
;

cljs.core.async.t_cljs$core$async49058.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49058.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async49058.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async49058.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async49058.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta49059","meta49059",592533647,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async49058.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49058.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49058";

cljs.core.async.t_cljs$core$async49058.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__46520__auto__,writer__46521__auto__,opt__46522__auto__){
return cljs.core._write.call(null,writer__46521__auto__,"cljs.core.async/t_cljs$core$async49058");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async49058 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async49058(flag__$1,meta49059){
return (new cljs.core.async.t_cljs$core$async49058(flag__$1,meta49059));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async49058(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async49061 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49061 = (function (flag,cb,meta49062){
this.flag = flag;
this.cb = cb;
this.meta49062 = meta49062;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async49061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49063,meta49062__$1){
var self__ = this;
var _49063__$1 = this;
return (new cljs.core.async.t_cljs$core$async49061(self__.flag,self__.cb,meta49062__$1));
});

cljs.core.async.t_cljs$core$async49061.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49063){
var self__ = this;
var _49063__$1 = this;
return self__.meta49062;
});

cljs.core.async.t_cljs$core$async49061.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49061.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async49061.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async49061.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async49061.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta49062","meta49062",114349175,null)], null);
});

cljs.core.async.t_cljs$core$async49061.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49061.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49061";

cljs.core.async.t_cljs$core$async49061.cljs$lang$ctorPrWriter = (function (this__46520__auto__,writer__46521__auto__,opt__46522__auto__){
return cljs.core._write.call(null,writer__46521__auto__,"cljs.core.async/t_cljs$core$async49061");
});

cljs.core.async.__GT_t_cljs$core$async49061 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async49061(flag__$1,cb__$1,meta49062){
return (new cljs.core.async.t_cljs$core$async49061(flag__$1,cb__$1,meta49062));
});

}

return (new cljs.core.async.t_cljs$core$async49061(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__49064_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__49064_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__49065_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__49065_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__45909__auto__ = wport;
if(cljs.core.truth_(or__45909__auto__)){
return or__45909__auto__;
} else {
return port;
}
})()], null));
} else {
var G__49066 = (i + (1));
i = G__49066;
continue;
}
} else {
return null;
}
break;
}
})();
var or__45909__auto__ = ret;
if(cljs.core.truth_(or__45909__auto__)){
return or__45909__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__45897__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__45897__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__45897__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__47041__auto__ = [];
var len__47034__auto___49072 = arguments.length;
var i__47035__auto___49073 = (0);
while(true){
if((i__47035__auto___49073 < len__47034__auto___49072)){
args__47041__auto__.push((arguments[i__47035__auto___49073]));

var G__49074 = (i__47035__auto___49073 + (1));
i__47035__auto___49073 = G__49074;
continue;
} else {
}
break;
}

var argseq__47042__auto__ = ((((1) < args__47041__auto__.length))?(new cljs.core.IndexedSeq(args__47041__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__47042__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__49069){
var map__49070 = p__49069;
var map__49070__$1 = ((((!((map__49070 == null)))?((((map__49070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49070.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49070):map__49070);
var opts = map__49070__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq49067){
var G__49068 = cljs.core.first.call(null,seq49067);
var seq49067__$1 = cljs.core.next.call(null,seq49067);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__49068,seq49067__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var G__49076 = arguments.length;
switch (G__49076) {
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
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__48989__auto___49122 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48989__auto___49122){
return (function (){
var f__48990__auto__ = (function (){var switch__48901__auto__ = ((function (c__48989__auto___49122){
return (function (state_49100){
var state_val_49101 = (state_49100[(1)]);
if((state_val_49101 === (7))){
var inst_49096 = (state_49100[(2)]);
var state_49100__$1 = state_49100;
var statearr_49102_49123 = state_49100__$1;
(statearr_49102_49123[(2)] = inst_49096);

(statearr_49102_49123[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49101 === (1))){
var state_49100__$1 = state_49100;
var statearr_49103_49124 = state_49100__$1;
(statearr_49103_49124[(2)] = null);

(statearr_49103_49124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49101 === (4))){
var inst_49079 = (state_49100[(7)]);
var inst_49079__$1 = (state_49100[(2)]);
var inst_49080 = (inst_49079__$1 == null);
var state_49100__$1 = (function (){var statearr_49104 = state_49100;
(statearr_49104[(7)] = inst_49079__$1);

return statearr_49104;
})();
if(cljs.core.truth_(inst_49080)){
var statearr_49105_49125 = state_49100__$1;
(statearr_49105_49125[(1)] = (5));

} else {
var statearr_49106_49126 = state_49100__$1;
(statearr_49106_49126[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49101 === (13))){
var state_49100__$1 = state_49100;
var statearr_49107_49127 = state_49100__$1;
(statearr_49107_49127[(2)] = null);

(statearr_49107_49127[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49101 === (6))){
var inst_49079 = (state_49100[(7)]);
var state_49100__$1 = state_49100;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49100__$1,(11),to,inst_49079);
} else {
if((state_val_49101 === (3))){
var inst_49098 = (state_49100[(2)]);
var state_49100__$1 = state_49100;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49100__$1,inst_49098);
} else {
if((state_val_49101 === (12))){
var state_49100__$1 = state_49100;
var statearr_49108_49128 = state_49100__$1;
(statearr_49108_49128[(2)] = null);

(statearr_49108_49128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49101 === (2))){
var state_49100__$1 = state_49100;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49100__$1,(4),from);
} else {
if((state_val_49101 === (11))){
var inst_49089 = (state_49100[(2)]);
var state_49100__$1 = state_49100;
if(cljs.core.truth_(inst_49089)){
var statearr_49109_49129 = state_49100__$1;
(statearr_49109_49129[(1)] = (12));

} else {
var statearr_49110_49130 = state_49100__$1;
(statearr_49110_49130[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49101 === (9))){
var state_49100__$1 = state_49100;
var statearr_49111_49131 = state_49100__$1;
(statearr_49111_49131[(2)] = null);

(statearr_49111_49131[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49101 === (5))){
var state_49100__$1 = state_49100;
if(cljs.core.truth_(close_QMARK_)){
var statearr_49112_49132 = state_49100__$1;
(statearr_49112_49132[(1)] = (8));

} else {
var statearr_49113_49133 = state_49100__$1;
(statearr_49113_49133[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49101 === (14))){
var inst_49094 = (state_49100[(2)]);
var state_49100__$1 = state_49100;
var statearr_49114_49134 = state_49100__$1;
(statearr_49114_49134[(2)] = inst_49094);

(statearr_49114_49134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49101 === (10))){
var inst_49086 = (state_49100[(2)]);
var state_49100__$1 = state_49100;
var statearr_49115_49135 = state_49100__$1;
(statearr_49115_49135[(2)] = inst_49086);

(statearr_49115_49135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49101 === (8))){
var inst_49083 = cljs.core.async.close_BANG_.call(null,to);
var state_49100__$1 = state_49100;
var statearr_49116_49136 = state_49100__$1;
(statearr_49116_49136[(2)] = inst_49083);

(statearr_49116_49136[(1)] = (10));


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
});})(c__48989__auto___49122))
;
return ((function (switch__48901__auto__,c__48989__auto___49122){
return (function() {
var cljs$core$async$state_machine__48902__auto__ = null;
var cljs$core$async$state_machine__48902__auto____0 = (function (){
var statearr_49117 = [null,null,null,null,null,null,null,null];
(statearr_49117[(0)] = cljs$core$async$state_machine__48902__auto__);

(statearr_49117[(1)] = (1));

return statearr_49117;
});
var cljs$core$async$state_machine__48902__auto____1 = (function (state_49100){
while(true){
var ret_value__48903__auto__ = (function (){try{while(true){
var result__48904__auto__ = switch__48901__auto__.call(null,state_49100);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48904__auto__;
}
break;
}
}catch (e49118){if((e49118 instanceof Object)){
var ex__48905__auto__ = e49118;
var statearr_49119_49137 = state_49100;
(statearr_49119_49137[(5)] = ex__48905__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49100);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49118;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49138 = state_49100;
state_49100 = G__49138;
continue;
} else {
return ret_value__48903__auto__;
}
break;
}
});
cljs$core$async$state_machine__48902__auto__ = function(state_49100){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48902__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48902__auto____1.call(this,state_49100);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__48902__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48902__auto____0;
cljs$core$async$state_machine__48902__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48902__auto____1;
return cljs$core$async$state_machine__48902__auto__;
})()
;})(switch__48901__auto__,c__48989__auto___49122))
})();
var state__48991__auto__ = (function (){var statearr_49120 = f__48990__auto__.call(null);
(statearr_49120[(6)] = c__48989__auto___49122);

return statearr_49120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48991__auto__);
});})(c__48989__auto___49122))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__49139){
var vec__49140 = p__49139;
var v = cljs.core.nth.call(null,vec__49140,(0),null);
var p = cljs.core.nth.call(null,vec__49140,(1),null);
var job = vec__49140;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__48989__auto___49311 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48989__auto___49311,res,vec__49140,v,p,job,jobs,results){
return (function (){
var f__48990__auto__ = (function (){var switch__48901__auto__ = ((function (c__48989__auto___49311,res,vec__49140,v,p,job,jobs,results){
return (function (state_49147){
var state_val_49148 = (state_49147[(1)]);
if((state_val_49148 === (1))){
var state_49147__$1 = state_49147;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49147__$1,(2),res,v);
} else {
if((state_val_49148 === (2))){
var inst_49144 = (state_49147[(2)]);
var inst_49145 = cljs.core.async.close_BANG_.call(null,res);
var state_49147__$1 = (function (){var statearr_49149 = state_49147;
(statearr_49149[(7)] = inst_49144);

return statearr_49149;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49147__$1,inst_49145);
} else {
return null;
}
}
});})(c__48989__auto___49311,res,vec__49140,v,p,job,jobs,results))
;
return ((function (switch__48901__auto__,c__48989__auto___49311,res,vec__49140,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48902__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48902__auto____0 = (function (){
var statearr_49150 = [null,null,null,null,null,null,null,null];
(statearr_49150[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48902__auto__);

(statearr_49150[(1)] = (1));

return statearr_49150;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48902__auto____1 = (function (state_49147){
while(true){
var ret_value__48903__auto__ = (function (){try{while(true){
var result__48904__auto__ = switch__48901__auto__.call(null,state_49147);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48904__auto__;
}
break;
}
}catch (e49151){if((e49151 instanceof Object)){
var ex__48905__auto__ = e49151;
var statearr_49152_49312 = state_49147;
(statearr_49152_49312[(5)] = ex__48905__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49147);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49151;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49313 = state_49147;
state_49147 = G__49313;
continue;
} else {
return ret_value__48903__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48902__auto__ = function(state_49147){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48902__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48902__auto____1.call(this,state_49147);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__48902__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48902__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48902__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48902__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48902__auto__;
})()
;})(switch__48901__auto__,c__48989__auto___49311,res,vec__49140,v,p,job,jobs,results))
})();
var state__48991__auto__ = (function (){var statearr_49153 = f__48990__auto__.call(null);
(statearr_49153[(6)] = c__48989__auto___49311);

return statearr_49153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48991__auto__);
});})(c__48989__auto___49311,res,vec__49140,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__49154){
var vec__49155 = p__49154;
var v = cljs.core.nth.call(null,vec__49155,(0),null);
var p = cljs.core.nth.call(null,vec__49155,(1),null);
var job = vec__49155;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__46833__auto___49314 = n;
var __49315 = (0);
while(true){
if((__49315 < n__46833__auto___49314)){
var G__49158_49316 = type;
var G__49158_49317__$1 = (((G__49158_49316 instanceof cljs.core.Keyword))?G__49158_49316.fqn:null);
switch (G__49158_49317__$1) {
case "compute":
var c__48989__auto___49319 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__49315,c__48989__auto___49319,G__49158_49316,G__49158_49317__$1,n__46833__auto___49314,jobs,results,process,async){
return (function (){
var f__48990__auto__ = (function (){var switch__48901__auto__ = ((function (__49315,c__48989__auto___49319,G__49158_49316,G__49158_49317__$1,n__46833__auto___49314,jobs,results,process,async){
return (function (state_49171){
var state_val_49172 = (state_49171[(1)]);
if((state_val_49172 === (1))){
var state_49171__$1 = state_49171;
var statearr_49173_49320 = state_49171__$1;
(statearr_49173_49320[(2)] = null);

(statearr_49173_49320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49172 === (2))){
var state_49171__$1 = state_49171;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49171__$1,(4),jobs);
} else {
if((state_val_49172 === (3))){
var inst_49169 = (state_49171[(2)]);
var state_49171__$1 = state_49171;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49171__$1,inst_49169);
} else {
if((state_val_49172 === (4))){
var inst_49161 = (state_49171[(2)]);
var inst_49162 = process.call(null,inst_49161);
var state_49171__$1 = state_49171;
if(cljs.core.truth_(inst_49162)){
var statearr_49174_49321 = state_49171__$1;
(statearr_49174_49321[(1)] = (5));

} else {
var statearr_49175_49322 = state_49171__$1;
(statearr_49175_49322[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49172 === (5))){
var state_49171__$1 = state_49171;
var statearr_49176_49323 = state_49171__$1;
(statearr_49176_49323[(2)] = null);

(statearr_49176_49323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49172 === (6))){
var state_49171__$1 = state_49171;
var statearr_49177_49324 = state_49171__$1;
(statearr_49177_49324[(2)] = null);

(statearr_49177_49324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49172 === (7))){
var inst_49167 = (state_49171[(2)]);
var state_49171__$1 = state_49171;
var statearr_49178_49325 = state_49171__$1;
(statearr_49178_49325[(2)] = inst_49167);

(statearr_49178_49325[(1)] = (3));


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
});})(__49315,c__48989__auto___49319,G__49158_49316,G__49158_49317__$1,n__46833__auto___49314,jobs,results,process,async))
;
return ((function (__49315,switch__48901__auto__,c__48989__auto___49319,G__49158_49316,G__49158_49317__$1,n__46833__auto___49314,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48902__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48902__auto____0 = (function (){
var statearr_49179 = [null,null,null,null,null,null,null];
(statearr_49179[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48902__auto__);

(statearr_49179[(1)] = (1));

return statearr_49179;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48902__auto____1 = (function (state_49171){
while(true){
var ret_value__48903__auto__ = (function (){try{while(true){
var result__48904__auto__ = switch__48901__auto__.call(null,state_49171);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48904__auto__;
}
break;
}
}catch (e49180){if((e49180 instanceof Object)){
var ex__48905__auto__ = e49180;
var statearr_49181_49326 = state_49171;
(statearr_49181_49326[(5)] = ex__48905__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49171);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49180;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49327 = state_49171;
state_49171 = G__49327;
continue;
} else {
return ret_value__48903__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48902__auto__ = function(state_49171){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48902__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48902__auto____1.call(this,state_49171);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__48902__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48902__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48902__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48902__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48902__auto__;
})()
;})(__49315,switch__48901__auto__,c__48989__auto___49319,G__49158_49316,G__49158_49317__$1,n__46833__auto___49314,jobs,results,process,async))
})();
var state__48991__auto__ = (function (){var statearr_49182 = f__48990__auto__.call(null);
(statearr_49182[(6)] = c__48989__auto___49319);

return statearr_49182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48991__auto__);
});})(__49315,c__48989__auto___49319,G__49158_49316,G__49158_49317__$1,n__46833__auto___49314,jobs,results,process,async))
);


break;
case "async":
var c__48989__auto___49328 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__49315,c__48989__auto___49328,G__49158_49316,G__49158_49317__$1,n__46833__auto___49314,jobs,results,process,async){
return (function (){
var f__48990__auto__ = (function (){var switch__48901__auto__ = ((function (__49315,c__48989__auto___49328,G__49158_49316,G__49158_49317__$1,n__46833__auto___49314,jobs,results,process,async){
return (function (state_49195){
var state_val_49196 = (state_49195[(1)]);
if((state_val_49196 === (1))){
var state_49195__$1 = state_49195;
var statearr_49197_49329 = state_49195__$1;
(statearr_49197_49329[(2)] = null);

(statearr_49197_49329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49196 === (2))){
var state_49195__$1 = state_49195;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49195__$1,(4),jobs);
} else {
if((state_val_49196 === (3))){
var inst_49193 = (state_49195[(2)]);
var state_49195__$1 = state_49195;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49195__$1,inst_49193);
} else {
if((state_val_49196 === (4))){
var inst_49185 = (state_49195[(2)]);
var inst_49186 = async.call(null,inst_49185);
var state_49195__$1 = state_49195;
if(cljs.core.truth_(inst_49186)){
var statearr_49198_49330 = state_49195__$1;
(statearr_49198_49330[(1)] = (5));

} else {
var statearr_49199_49331 = state_49195__$1;
(statearr_49199_49331[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49196 === (5))){
var state_49195__$1 = state_49195;
var statearr_49200_49332 = state_49195__$1;
(statearr_49200_49332[(2)] = null);

(statearr_49200_49332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49196 === (6))){
var state_49195__$1 = state_49195;
var statearr_49201_49333 = state_49195__$1;
(statearr_49201_49333[(2)] = null);

(statearr_49201_49333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49196 === (7))){
var inst_49191 = (state_49195[(2)]);
var state_49195__$1 = state_49195;
var statearr_49202_49334 = state_49195__$1;
(statearr_49202_49334[(2)] = inst_49191);

(statearr_49202_49334[(1)] = (3));


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
});})(__49315,c__48989__auto___49328,G__49158_49316,G__49158_49317__$1,n__46833__auto___49314,jobs,results,process,async))
;
return ((function (__49315,switch__48901__auto__,c__48989__auto___49328,G__49158_49316,G__49158_49317__$1,n__46833__auto___49314,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48902__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48902__auto____0 = (function (){
var statearr_49203 = [null,null,null,null,null,null,null];
(statearr_49203[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48902__auto__);

(statearr_49203[(1)] = (1));

return statearr_49203;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48902__auto____1 = (function (state_49195){
while(true){
var ret_value__48903__auto__ = (function (){try{while(true){
var result__48904__auto__ = switch__48901__auto__.call(null,state_49195);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48904__auto__;
}
break;
}
}catch (e49204){if((e49204 instanceof Object)){
var ex__48905__auto__ = e49204;
var statearr_49205_49335 = state_49195;
(statearr_49205_49335[(5)] = ex__48905__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49195);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49336 = state_49195;
state_49195 = G__49336;
continue;
} else {
return ret_value__48903__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48902__auto__ = function(state_49195){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48902__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48902__auto____1.call(this,state_49195);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__48902__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48902__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48902__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48902__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48902__auto__;
})()
;})(__49315,switch__48901__auto__,c__48989__auto___49328,G__49158_49316,G__49158_49317__$1,n__46833__auto___49314,jobs,results,process,async))
})();
var state__48991__auto__ = (function (){var statearr_49206 = f__48990__auto__.call(null);
(statearr_49206[(6)] = c__48989__auto___49328);

return statearr_49206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48991__auto__);
});})(__49315,c__48989__auto___49328,G__49158_49316,G__49158_49317__$1,n__46833__auto___49314,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49158_49317__$1)].join('')));

}

var G__49337 = (__49315 + (1));
__49315 = G__49337;
continue;
} else {
}
break;
}

var c__48989__auto___49338 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48989__auto___49338,jobs,results,process,async){
return (function (){
var f__48990__auto__ = (function (){var switch__48901__auto__ = ((function (c__48989__auto___49338,jobs,results,process,async){
return (function (state_49228){
var state_val_49229 = (state_49228[(1)]);
if((state_val_49229 === (1))){
var state_49228__$1 = state_49228;
var statearr_49230_49339 = state_49228__$1;
(statearr_49230_49339[(2)] = null);

(statearr_49230_49339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49229 === (2))){
var state_49228__$1 = state_49228;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49228__$1,(4),from);
} else {
if((state_val_49229 === (3))){
var inst_49226 = (state_49228[(2)]);
var state_49228__$1 = state_49228;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49228__$1,inst_49226);
} else {
if((state_val_49229 === (4))){
var inst_49209 = (state_49228[(7)]);
var inst_49209__$1 = (state_49228[(2)]);
var inst_49210 = (inst_49209__$1 == null);
var state_49228__$1 = (function (){var statearr_49231 = state_49228;
(statearr_49231[(7)] = inst_49209__$1);

return statearr_49231;
})();
if(cljs.core.truth_(inst_49210)){
var statearr_49232_49340 = state_49228__$1;
(statearr_49232_49340[(1)] = (5));

} else {
var statearr_49233_49341 = state_49228__$1;
(statearr_49233_49341[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49229 === (5))){
var inst_49212 = cljs.core.async.close_BANG_.call(null,jobs);
var state_49228__$1 = state_49228;
var statearr_49234_49342 = state_49228__$1;
(statearr_49234_49342[(2)] = inst_49212);

(statearr_49234_49342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49229 === (6))){
var inst_49214 = (state_49228[(8)]);
var inst_49209 = (state_49228[(7)]);
var inst_49214__$1 = cljs.core.async.chan.call(null,(1));
var inst_49215 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49216 = [inst_49209,inst_49214__$1];
var inst_49217 = (new cljs.core.PersistentVector(null,2,(5),inst_49215,inst_49216,null));
var state_49228__$1 = (function (){var statearr_49235 = state_49228;
(statearr_49235[(8)] = inst_49214__$1);

return statearr_49235;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49228__$1,(8),jobs,inst_49217);
} else {
if((state_val_49229 === (7))){
var inst_49224 = (state_49228[(2)]);
var state_49228__$1 = state_49228;
var statearr_49236_49343 = state_49228__$1;
(statearr_49236_49343[(2)] = inst_49224);

(statearr_49236_49343[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49229 === (8))){
var inst_49214 = (state_49228[(8)]);
var inst_49219 = (state_49228[(2)]);
var state_49228__$1 = (function (){var statearr_49237 = state_49228;
(statearr_49237[(9)] = inst_49219);

return statearr_49237;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49228__$1,(9),results,inst_49214);
} else {
if((state_val_49229 === (9))){
var inst_49221 = (state_49228[(2)]);
var state_49228__$1 = (function (){var statearr_49238 = state_49228;
(statearr_49238[(10)] = inst_49221);

return statearr_49238;
})();
var statearr_49239_49344 = state_49228__$1;
(statearr_49239_49344[(2)] = null);

(statearr_49239_49344[(1)] = (2));


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
});})(c__48989__auto___49338,jobs,results,process,async))
;
return ((function (switch__48901__auto__,c__48989__auto___49338,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48902__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48902__auto____0 = (function (){
var statearr_49240 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49240[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48902__auto__);

(statearr_49240[(1)] = (1));

return statearr_49240;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48902__auto____1 = (function (state_49228){
while(true){
var ret_value__48903__auto__ = (function (){try{while(true){
var result__48904__auto__ = switch__48901__auto__.call(null,state_49228);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48904__auto__;
}
break;
}
}catch (e49241){if((e49241 instanceof Object)){
var ex__48905__auto__ = e49241;
var statearr_49242_49345 = state_49228;
(statearr_49242_49345[(5)] = ex__48905__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49228);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49241;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49346 = state_49228;
state_49228 = G__49346;
continue;
} else {
return ret_value__48903__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48902__auto__ = function(state_49228){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48902__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48902__auto____1.call(this,state_49228);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__48902__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48902__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48902__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48902__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48902__auto__;
})()
;})(switch__48901__auto__,c__48989__auto___49338,jobs,results,process,async))
})();
var state__48991__auto__ = (function (){var statearr_49243 = f__48990__auto__.call(null);
(statearr_49243[(6)] = c__48989__auto___49338);

return statearr_49243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48991__auto__);
});})(c__48989__auto___49338,jobs,results,process,async))
);


var c__48989__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48989__auto__,jobs,results,process,async){
return (function (){
var f__48990__auto__ = (function (){var switch__48901__auto__ = ((function (c__48989__auto__,jobs,results,process,async){
return (function (state_49281){
var state_val_49282 = (state_49281[(1)]);
if((state_val_49282 === (7))){
var inst_49277 = (state_49281[(2)]);
var state_49281__$1 = state_49281;
var statearr_49283_49347 = state_49281__$1;
(statearr_49283_49347[(2)] = inst_49277);

(statearr_49283_49347[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49282 === (20))){
var state_49281__$1 = state_49281;
var statearr_49284_49348 = state_49281__$1;
(statearr_49284_49348[(2)] = null);

(statearr_49284_49348[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49282 === (1))){
var state_49281__$1 = state_49281;
var statearr_49285_49349 = state_49281__$1;
(statearr_49285_49349[(2)] = null);

(statearr_49285_49349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49282 === (4))){
var inst_49246 = (state_49281[(7)]);
var inst_49246__$1 = (state_49281[(2)]);
var inst_49247 = (inst_49246__$1 == null);
var state_49281__$1 = (function (){var statearr_49286 = state_49281;
(statearr_49286[(7)] = inst_49246__$1);

return statearr_49286;
})();
if(cljs.core.truth_(inst_49247)){
var statearr_49287_49350 = state_49281__$1;
(statearr_49287_49350[(1)] = (5));

} else {
var statearr_49288_49351 = state_49281__$1;
(statearr_49288_49351[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49282 === (15))){
var inst_49259 = (state_49281[(8)]);
var state_49281__$1 = state_49281;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49281__$1,(18),to,inst_49259);
} else {
if((state_val_49282 === (21))){
var inst_49272 = (state_49281[(2)]);
var state_49281__$1 = state_49281;
var statearr_49289_49352 = state_49281__$1;
(statearr_49289_49352[(2)] = inst_49272);

(statearr_49289_49352[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49282 === (13))){
var inst_49274 = (state_49281[(2)]);
var state_49281__$1 = (function (){var statearr_49290 = state_49281;
(statearr_49290[(9)] = inst_49274);

return statearr_49290;
})();
var statearr_49291_49353 = state_49281__$1;
(statearr_49291_49353[(2)] = null);

(statearr_49291_49353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49282 === (6))){
var inst_49246 = (state_49281[(7)]);
var state_49281__$1 = state_49281;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49281__$1,(11),inst_49246);
} else {
if((state_val_49282 === (17))){
var inst_49267 = (state_49281[(2)]);
var state_49281__$1 = state_49281;
if(cljs.core.truth_(inst_49267)){
var statearr_49292_49354 = state_49281__$1;
(statearr_49292_49354[(1)] = (19));

} else {
var statearr_49293_49355 = state_49281__$1;
(statearr_49293_49355[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49282 === (3))){
var inst_49279 = (state_49281[(2)]);
var state_49281__$1 = state_49281;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49281__$1,inst_49279);
} else {
if((state_val_49282 === (12))){
var inst_49256 = (state_49281[(10)]);
var state_49281__$1 = state_49281;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49281__$1,(14),inst_49256);
} else {
if((state_val_49282 === (2))){
var state_49281__$1 = state_49281;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49281__$1,(4),results);
} else {
if((state_val_49282 === (19))){
var state_49281__$1 = state_49281;
var statearr_49294_49356 = state_49281__$1;
(statearr_49294_49356[(2)] = null);

(statearr_49294_49356[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49282 === (11))){
var inst_49256 = (state_49281[(2)]);
var state_49281__$1 = (function (){var statearr_49295 = state_49281;
(statearr_49295[(10)] = inst_49256);

return statearr_49295;
})();
var statearr_49296_49357 = state_49281__$1;
(statearr_49296_49357[(2)] = null);

(statearr_49296_49357[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49282 === (9))){
var state_49281__$1 = state_49281;
var statearr_49297_49358 = state_49281__$1;
(statearr_49297_49358[(2)] = null);

(statearr_49297_49358[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49282 === (5))){
var state_49281__$1 = state_49281;
if(cljs.core.truth_(close_QMARK_)){
var statearr_49298_49359 = state_49281__$1;
(statearr_49298_49359[(1)] = (8));

} else {
var statearr_49299_49360 = state_49281__$1;
(statearr_49299_49360[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49282 === (14))){
var inst_49259 = (state_49281[(8)]);
var inst_49261 = (state_49281[(11)]);
var inst_49259__$1 = (state_49281[(2)]);
var inst_49260 = (inst_49259__$1 == null);
var inst_49261__$1 = cljs.core.not.call(null,inst_49260);
var state_49281__$1 = (function (){var statearr_49300 = state_49281;
(statearr_49300[(8)] = inst_49259__$1);

(statearr_49300[(11)] = inst_49261__$1);

return statearr_49300;
})();
if(inst_49261__$1){
var statearr_49301_49361 = state_49281__$1;
(statearr_49301_49361[(1)] = (15));

} else {
var statearr_49302_49362 = state_49281__$1;
(statearr_49302_49362[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49282 === (16))){
var inst_49261 = (state_49281[(11)]);
var state_49281__$1 = state_49281;
var statearr_49303_49363 = state_49281__$1;
(statearr_49303_49363[(2)] = inst_49261);

(statearr_49303_49363[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49282 === (10))){
var inst_49253 = (state_49281[(2)]);
var state_49281__$1 = state_49281;
var statearr_49304_49364 = state_49281__$1;
(statearr_49304_49364[(2)] = inst_49253);

(statearr_49304_49364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49282 === (18))){
var inst_49264 = (state_49281[(2)]);
var state_49281__$1 = state_49281;
var statearr_49305_49365 = state_49281__$1;
(statearr_49305_49365[(2)] = inst_49264);

(statearr_49305_49365[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49282 === (8))){
var inst_49250 = cljs.core.async.close_BANG_.call(null,to);
var state_49281__$1 = state_49281;
var statearr_49306_49366 = state_49281__$1;
(statearr_49306_49366[(2)] = inst_49250);

(statearr_49306_49366[(1)] = (10));


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
});})(c__48989__auto__,jobs,results,process,async))
;
return ((function (switch__48901__auto__,c__48989__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48902__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48902__auto____0 = (function (){
var statearr_49307 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49307[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48902__auto__);

(statearr_49307[(1)] = (1));

return statearr_49307;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48902__auto____1 = (function (state_49281){
while(true){
var ret_value__48903__auto__ = (function (){try{while(true){
var result__48904__auto__ = switch__48901__auto__.call(null,state_49281);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48904__auto__;
}
break;
}
}catch (e49308){if((e49308 instanceof Object)){
var ex__48905__auto__ = e49308;
var statearr_49309_49367 = state_49281;
(statearr_49309_49367[(5)] = ex__48905__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49281);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49308;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49368 = state_49281;
state_49281 = G__49368;
continue;
} else {
return ret_value__48903__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48902__auto__ = function(state_49281){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48902__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48902__auto____1.call(this,state_49281);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__48902__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48902__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48902__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48902__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48902__auto__;
})()
;})(switch__48901__auto__,c__48989__auto__,jobs,results,process,async))
})();
var state__48991__auto__ = (function (){var statearr_49310 = f__48990__auto__.call(null);
(statearr_49310[(6)] = c__48989__auto__);

return statearr_49310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48991__auto__);
});})(c__48989__auto__,jobs,results,process,async))
);

return c__48989__auto__;
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
var G__49370 = arguments.length;
switch (G__49370) {
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
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var G__49373 = arguments.length;
switch (G__49373) {
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
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var G__49376 = arguments.length;
switch (G__49376) {
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
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__48989__auto___49425 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48989__auto___49425,tc,fc){
return (function (){
var f__48990__auto__ = (function (){var switch__48901__auto__ = ((function (c__48989__auto___49425,tc,fc){
return (function (state_49402){
var state_val_49403 = (state_49402[(1)]);
if((state_val_49403 === (7))){
var inst_49398 = (state_49402[(2)]);
var state_49402__$1 = state_49402;
var statearr_49404_49426 = state_49402__$1;
(statearr_49404_49426[(2)] = inst_49398);

(statearr_49404_49426[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49403 === (1))){
var state_49402__$1 = state_49402;
var statearr_49405_49427 = state_49402__$1;
(statearr_49405_49427[(2)] = null);

(statearr_49405_49427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49403 === (4))){
var inst_49379 = (state_49402[(7)]);
var inst_49379__$1 = (state_49402[(2)]);
var inst_49380 = (inst_49379__$1 == null);
var state_49402__$1 = (function (){var statearr_49406 = state_49402;
(statearr_49406[(7)] = inst_49379__$1);

return statearr_49406;
})();
if(cljs.core.truth_(inst_49380)){
var statearr_49407_49428 = state_49402__$1;
(statearr_49407_49428[(1)] = (5));

} else {
var statearr_49408_49429 = state_49402__$1;
(statearr_49408_49429[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49403 === (13))){
var state_49402__$1 = state_49402;
var statearr_49409_49430 = state_49402__$1;
(statearr_49409_49430[(2)] = null);

(statearr_49409_49430[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49403 === (6))){
var inst_49379 = (state_49402[(7)]);
var inst_49385 = p.call(null,inst_49379);
var state_49402__$1 = state_49402;
if(cljs.core.truth_(inst_49385)){
var statearr_49410_49431 = state_49402__$1;
(statearr_49410_49431[(1)] = (9));

} else {
var statearr_49411_49432 = state_49402__$1;
(statearr_49411_49432[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49403 === (3))){
var inst_49400 = (state_49402[(2)]);
var state_49402__$1 = state_49402;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49402__$1,inst_49400);
} else {
if((state_val_49403 === (12))){
var state_49402__$1 = state_49402;
var statearr_49412_49433 = state_49402__$1;
(statearr_49412_49433[(2)] = null);

(statearr_49412_49433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49403 === (2))){
var state_49402__$1 = state_49402;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49402__$1,(4),ch);
} else {
if((state_val_49403 === (11))){
var inst_49379 = (state_49402[(7)]);
var inst_49389 = (state_49402[(2)]);
var state_49402__$1 = state_49402;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49402__$1,(8),inst_49389,inst_49379);
} else {
if((state_val_49403 === (9))){
var state_49402__$1 = state_49402;
var statearr_49413_49434 = state_49402__$1;
(statearr_49413_49434[(2)] = tc);

(statearr_49413_49434[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49403 === (5))){
var inst_49382 = cljs.core.async.close_BANG_.call(null,tc);
var inst_49383 = cljs.core.async.close_BANG_.call(null,fc);
var state_49402__$1 = (function (){var statearr_49414 = state_49402;
(statearr_49414[(8)] = inst_49382);

return statearr_49414;
})();
var statearr_49415_49435 = state_49402__$1;
(statearr_49415_49435[(2)] = inst_49383);

(statearr_49415_49435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49403 === (14))){
var inst_49396 = (state_49402[(2)]);
var state_49402__$1 = state_49402;
var statearr_49416_49436 = state_49402__$1;
(statearr_49416_49436[(2)] = inst_49396);

(statearr_49416_49436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49403 === (10))){
var state_49402__$1 = state_49402;
var statearr_49417_49437 = state_49402__$1;
(statearr_49417_49437[(2)] = fc);

(statearr_49417_49437[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49403 === (8))){
var inst_49391 = (state_49402[(2)]);
var state_49402__$1 = state_49402;
if(cljs.core.truth_(inst_49391)){
var statearr_49418_49438 = state_49402__$1;
(statearr_49418_49438[(1)] = (12));

} else {
var statearr_49419_49439 = state_49402__$1;
(statearr_49419_49439[(1)] = (13));

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
});})(c__48989__auto___49425,tc,fc))
;
return ((function (switch__48901__auto__,c__48989__auto___49425,tc,fc){
return (function() {
var cljs$core$async$state_machine__48902__auto__ = null;
var cljs$core$async$state_machine__48902__auto____0 = (function (){
var statearr_49420 = [null,null,null,null,null,null,null,null,null];
(statearr_49420[(0)] = cljs$core$async$state_machine__48902__auto__);

(statearr_49420[(1)] = (1));

return statearr_49420;
});
var cljs$core$async$state_machine__48902__auto____1 = (function (state_49402){
while(true){
var ret_value__48903__auto__ = (function (){try{while(true){
var result__48904__auto__ = switch__48901__auto__.call(null,state_49402);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48904__auto__;
}
break;
}
}catch (e49421){if((e49421 instanceof Object)){
var ex__48905__auto__ = e49421;
var statearr_49422_49440 = state_49402;
(statearr_49422_49440[(5)] = ex__48905__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49402);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49421;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49441 = state_49402;
state_49402 = G__49441;
continue;
} else {
return ret_value__48903__auto__;
}
break;
}
});
cljs$core$async$state_machine__48902__auto__ = function(state_49402){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48902__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48902__auto____1.call(this,state_49402);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__48902__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48902__auto____0;
cljs$core$async$state_machine__48902__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48902__auto____1;
return cljs$core$async$state_machine__48902__auto__;
})()
;})(switch__48901__auto__,c__48989__auto___49425,tc,fc))
})();
var state__48991__auto__ = (function (){var statearr_49423 = f__48990__auto__.call(null);
(statearr_49423[(6)] = c__48989__auto___49425);

return statearr_49423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48991__auto__);
});})(c__48989__auto___49425,tc,fc))
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
var c__48989__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48989__auto__){
return (function (){
var f__48990__auto__ = (function (){var switch__48901__auto__ = ((function (c__48989__auto__){
return (function (state_49462){
var state_val_49463 = (state_49462[(1)]);
if((state_val_49463 === (7))){
var inst_49458 = (state_49462[(2)]);
var state_49462__$1 = state_49462;
var statearr_49464_49482 = state_49462__$1;
(statearr_49464_49482[(2)] = inst_49458);

(statearr_49464_49482[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49463 === (1))){
var inst_49442 = init;
var state_49462__$1 = (function (){var statearr_49465 = state_49462;
(statearr_49465[(7)] = inst_49442);

return statearr_49465;
})();
var statearr_49466_49483 = state_49462__$1;
(statearr_49466_49483[(2)] = null);

(statearr_49466_49483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49463 === (4))){
var inst_49445 = (state_49462[(8)]);
var inst_49445__$1 = (state_49462[(2)]);
var inst_49446 = (inst_49445__$1 == null);
var state_49462__$1 = (function (){var statearr_49467 = state_49462;
(statearr_49467[(8)] = inst_49445__$1);

return statearr_49467;
})();
if(cljs.core.truth_(inst_49446)){
var statearr_49468_49484 = state_49462__$1;
(statearr_49468_49484[(1)] = (5));

} else {
var statearr_49469_49485 = state_49462__$1;
(statearr_49469_49485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49463 === (6))){
var inst_49445 = (state_49462[(8)]);
var inst_49442 = (state_49462[(7)]);
var inst_49449 = (state_49462[(9)]);
var inst_49449__$1 = f.call(null,inst_49442,inst_49445);
var inst_49450 = cljs.core.reduced_QMARK_.call(null,inst_49449__$1);
var state_49462__$1 = (function (){var statearr_49470 = state_49462;
(statearr_49470[(9)] = inst_49449__$1);

return statearr_49470;
})();
if(inst_49450){
var statearr_49471_49486 = state_49462__$1;
(statearr_49471_49486[(1)] = (8));

} else {
var statearr_49472_49487 = state_49462__$1;
(statearr_49472_49487[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49463 === (3))){
var inst_49460 = (state_49462[(2)]);
var state_49462__$1 = state_49462;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49462__$1,inst_49460);
} else {
if((state_val_49463 === (2))){
var state_49462__$1 = state_49462;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49462__$1,(4),ch);
} else {
if((state_val_49463 === (9))){
var inst_49449 = (state_49462[(9)]);
var inst_49442 = inst_49449;
var state_49462__$1 = (function (){var statearr_49473 = state_49462;
(statearr_49473[(7)] = inst_49442);

return statearr_49473;
})();
var statearr_49474_49488 = state_49462__$1;
(statearr_49474_49488[(2)] = null);

(statearr_49474_49488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49463 === (5))){
var inst_49442 = (state_49462[(7)]);
var state_49462__$1 = state_49462;
var statearr_49475_49489 = state_49462__$1;
(statearr_49475_49489[(2)] = inst_49442);

(statearr_49475_49489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49463 === (10))){
var inst_49456 = (state_49462[(2)]);
var state_49462__$1 = state_49462;
var statearr_49476_49490 = state_49462__$1;
(statearr_49476_49490[(2)] = inst_49456);

(statearr_49476_49490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49463 === (8))){
var inst_49449 = (state_49462[(9)]);
var inst_49452 = cljs.core.deref.call(null,inst_49449);
var state_49462__$1 = state_49462;
var statearr_49477_49491 = state_49462__$1;
(statearr_49477_49491[(2)] = inst_49452);

(statearr_49477_49491[(1)] = (10));


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
});})(c__48989__auto__))
;
return ((function (switch__48901__auto__,c__48989__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__48902__auto__ = null;
var cljs$core$async$reduce_$_state_machine__48902__auto____0 = (function (){
var statearr_49478 = [null,null,null,null,null,null,null,null,null,null];
(statearr_49478[(0)] = cljs$core$async$reduce_$_state_machine__48902__auto__);

(statearr_49478[(1)] = (1));

return statearr_49478;
});
var cljs$core$async$reduce_$_state_machine__48902__auto____1 = (function (state_49462){
while(true){
var ret_value__48903__auto__ = (function (){try{while(true){
var result__48904__auto__ = switch__48901__auto__.call(null,state_49462);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48904__auto__;
}
break;
}
}catch (e49479){if((e49479 instanceof Object)){
var ex__48905__auto__ = e49479;
var statearr_49480_49492 = state_49462;
(statearr_49480_49492[(5)] = ex__48905__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49462);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49479;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49493 = state_49462;
state_49462 = G__49493;
continue;
} else {
return ret_value__48903__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__48902__auto__ = function(state_49462){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__48902__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__48902__auto____1.call(this,state_49462);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__48902__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__48902__auto____0;
cljs$core$async$reduce_$_state_machine__48902__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__48902__auto____1;
return cljs$core$async$reduce_$_state_machine__48902__auto__;
})()
;})(switch__48901__auto__,c__48989__auto__))
})();
var state__48991__auto__ = (function (){var statearr_49481 = f__48990__auto__.call(null);
(statearr_49481[(6)] = c__48989__auto__);

return statearr_49481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48991__auto__);
});})(c__48989__auto__))
);

return c__48989__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__48989__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48989__auto__,f__$1){
return (function (){
var f__48990__auto__ = (function (){var switch__48901__auto__ = ((function (c__48989__auto__,f__$1){
return (function (state_49499){
var state_val_49500 = (state_49499[(1)]);
if((state_val_49500 === (1))){
var inst_49494 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_49499__$1 = state_49499;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49499__$1,(2),inst_49494);
} else {
if((state_val_49500 === (2))){
var inst_49496 = (state_49499[(2)]);
var inst_49497 = f__$1.call(null,inst_49496);
var state_49499__$1 = state_49499;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49499__$1,inst_49497);
} else {
return null;
}
}
});})(c__48989__auto__,f__$1))
;
return ((function (switch__48901__auto__,c__48989__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__48902__auto__ = null;
var cljs$core$async$transduce_$_state_machine__48902__auto____0 = (function (){
var statearr_49501 = [null,null,null,null,null,null,null];
(statearr_49501[(0)] = cljs$core$async$transduce_$_state_machine__48902__auto__);

(statearr_49501[(1)] = (1));

return statearr_49501;
});
var cljs$core$async$transduce_$_state_machine__48902__auto____1 = (function (state_49499){
while(true){
var ret_value__48903__auto__ = (function (){try{while(true){
var result__48904__auto__ = switch__48901__auto__.call(null,state_49499);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48904__auto__;
}
break;
}
}catch (e49502){if((e49502 instanceof Object)){
var ex__48905__auto__ = e49502;
var statearr_49503_49505 = state_49499;
(statearr_49503_49505[(5)] = ex__48905__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49499);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49502;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49506 = state_49499;
state_49499 = G__49506;
continue;
} else {
return ret_value__48903__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__48902__auto__ = function(state_49499){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__48902__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__48902__auto____1.call(this,state_49499);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__48902__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__48902__auto____0;
cljs$core$async$transduce_$_state_machine__48902__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__48902__auto____1;
return cljs$core$async$transduce_$_state_machine__48902__auto__;
})()
;})(switch__48901__auto__,c__48989__auto__,f__$1))
})();
var state__48991__auto__ = (function (){var statearr_49504 = f__48990__auto__.call(null);
(statearr_49504[(6)] = c__48989__auto__);

return statearr_49504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48991__auto__);
});})(c__48989__auto__,f__$1))
);

return c__48989__auto__;
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
var G__49508 = arguments.length;
switch (G__49508) {
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
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__48989__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48989__auto__){
return (function (){
var f__48990__auto__ = (function (){var switch__48901__auto__ = ((function (c__48989__auto__){
return (function (state_49533){
var state_val_49534 = (state_49533[(1)]);
if((state_val_49534 === (7))){
var inst_49515 = (state_49533[(2)]);
var state_49533__$1 = state_49533;
var statearr_49535_49556 = state_49533__$1;
(statearr_49535_49556[(2)] = inst_49515);

(statearr_49535_49556[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49534 === (1))){
var inst_49509 = cljs.core.seq.call(null,coll);
var inst_49510 = inst_49509;
var state_49533__$1 = (function (){var statearr_49536 = state_49533;
(statearr_49536[(7)] = inst_49510);

return statearr_49536;
})();
var statearr_49537_49557 = state_49533__$1;
(statearr_49537_49557[(2)] = null);

(statearr_49537_49557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49534 === (4))){
var inst_49510 = (state_49533[(7)]);
var inst_49513 = cljs.core.first.call(null,inst_49510);
var state_49533__$1 = state_49533;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49533__$1,(7),ch,inst_49513);
} else {
if((state_val_49534 === (13))){
var inst_49527 = (state_49533[(2)]);
var state_49533__$1 = state_49533;
var statearr_49538_49558 = state_49533__$1;
(statearr_49538_49558[(2)] = inst_49527);

(statearr_49538_49558[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49534 === (6))){
var inst_49518 = (state_49533[(2)]);
var state_49533__$1 = state_49533;
if(cljs.core.truth_(inst_49518)){
var statearr_49539_49559 = state_49533__$1;
(statearr_49539_49559[(1)] = (8));

} else {
var statearr_49540_49560 = state_49533__$1;
(statearr_49540_49560[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49534 === (3))){
var inst_49531 = (state_49533[(2)]);
var state_49533__$1 = state_49533;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49533__$1,inst_49531);
} else {
if((state_val_49534 === (12))){
var state_49533__$1 = state_49533;
var statearr_49541_49561 = state_49533__$1;
(statearr_49541_49561[(2)] = null);

(statearr_49541_49561[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49534 === (2))){
var inst_49510 = (state_49533[(7)]);
var state_49533__$1 = state_49533;
if(cljs.core.truth_(inst_49510)){
var statearr_49542_49562 = state_49533__$1;
(statearr_49542_49562[(1)] = (4));

} else {
var statearr_49543_49563 = state_49533__$1;
(statearr_49543_49563[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49534 === (11))){
var inst_49524 = cljs.core.async.close_BANG_.call(null,ch);
var state_49533__$1 = state_49533;
var statearr_49544_49564 = state_49533__$1;
(statearr_49544_49564[(2)] = inst_49524);

(statearr_49544_49564[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49534 === (9))){
var state_49533__$1 = state_49533;
if(cljs.core.truth_(close_QMARK_)){
var statearr_49545_49565 = state_49533__$1;
(statearr_49545_49565[(1)] = (11));

} else {
var statearr_49546_49566 = state_49533__$1;
(statearr_49546_49566[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49534 === (5))){
var inst_49510 = (state_49533[(7)]);
var state_49533__$1 = state_49533;
var statearr_49547_49567 = state_49533__$1;
(statearr_49547_49567[(2)] = inst_49510);

(statearr_49547_49567[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49534 === (10))){
var inst_49529 = (state_49533[(2)]);
var state_49533__$1 = state_49533;
var statearr_49548_49568 = state_49533__$1;
(statearr_49548_49568[(2)] = inst_49529);

(statearr_49548_49568[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49534 === (8))){
var inst_49510 = (state_49533[(7)]);
var inst_49520 = cljs.core.next.call(null,inst_49510);
var inst_49510__$1 = inst_49520;
var state_49533__$1 = (function (){var statearr_49549 = state_49533;
(statearr_49549[(7)] = inst_49510__$1);

return statearr_49549;
})();
var statearr_49550_49569 = state_49533__$1;
(statearr_49550_49569[(2)] = null);

(statearr_49550_49569[(1)] = (2));


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
});})(c__48989__auto__))
;
return ((function (switch__48901__auto__,c__48989__auto__){
return (function() {
var cljs$core$async$state_machine__48902__auto__ = null;
var cljs$core$async$state_machine__48902__auto____0 = (function (){
var statearr_49551 = [null,null,null,null,null,null,null,null];
(statearr_49551[(0)] = cljs$core$async$state_machine__48902__auto__);

(statearr_49551[(1)] = (1));

return statearr_49551;
});
var cljs$core$async$state_machine__48902__auto____1 = (function (state_49533){
while(true){
var ret_value__48903__auto__ = (function (){try{while(true){
var result__48904__auto__ = switch__48901__auto__.call(null,state_49533);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48904__auto__;
}
break;
}
}catch (e49552){if((e49552 instanceof Object)){
var ex__48905__auto__ = e49552;
var statearr_49553_49570 = state_49533;
(statearr_49553_49570[(5)] = ex__48905__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49533);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49552;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49571 = state_49533;
state_49533 = G__49571;
continue;
} else {
return ret_value__48903__auto__;
}
break;
}
});
cljs$core$async$state_machine__48902__auto__ = function(state_49533){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48902__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48902__auto____1.call(this,state_49533);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__48902__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48902__auto____0;
cljs$core$async$state_machine__48902__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48902__auto____1;
return cljs$core$async$state_machine__48902__auto__;
})()
;})(switch__48901__auto__,c__48989__auto__))
})();
var state__48991__auto__ = (function (){var statearr_49554 = f__48990__auto__.call(null);
(statearr_49554[(6)] = c__48989__auto__);

return statearr_49554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48991__auto__);
});})(c__48989__auto__))
);

return c__48989__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

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
var x__46578__auto__ = (((_ == null))?null:_);
var m__46579__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__46578__auto__)]);
if(!((m__46579__auto__ == null))){
return m__46579__auto__.call(null,_);
} else {
var m__46579__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__46579__auto____$1 == null))){
return m__46579__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
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
var x__46578__auto__ = (((m == null))?null:m);
var m__46579__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__46578__auto__)]);
if(!((m__46579__auto__ == null))){
return m__46579__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__46579__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__46579__auto____$1 == null))){
return m__46579__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__46578__auto__ = (((m == null))?null:m);
var m__46579__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__46578__auto__)]);
if(!((m__46579__auto__ == null))){
return m__46579__auto__.call(null,m,ch);
} else {
var m__46579__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__46579__auto____$1 == null))){
return m__46579__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__46578__auto__ = (((m == null))?null:m);
var m__46579__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__46578__auto__)]);
if(!((m__46579__auto__ == null))){
return m__46579__auto__.call(null,m);
} else {
var m__46579__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__46579__auto____$1 == null))){
return m__46579__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async49572 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49572 = (function (ch,cs,meta49573){
this.ch = ch;
this.cs = cs;
this.meta49573 = meta49573;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async49572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_49574,meta49573__$1){
var self__ = this;
var _49574__$1 = this;
return (new cljs.core.async.t_cljs$core$async49572(self__.ch,self__.cs,meta49573__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async49572.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_49574){
var self__ = this;
var _49574__$1 = this;
return self__.meta49573;
});})(cs))
;

cljs.core.async.t_cljs$core$async49572.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49572.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async49572.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49572.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async49572.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async49572.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async49572.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta49573","meta49573",-755996108,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async49572.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49572.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49572";

cljs.core.async.t_cljs$core$async49572.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__46520__auto__,writer__46521__auto__,opt__46522__auto__){
return cljs.core._write.call(null,writer__46521__auto__,"cljs.core.async/t_cljs$core$async49572");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async49572 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async49572(ch__$1,cs__$1,meta49573){
return (new cljs.core.async.t_cljs$core$async49572(ch__$1,cs__$1,meta49573));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async49572(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__48989__auto___49794 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48989__auto___49794,cs,m,dchan,dctr,done){
return (function (){
var f__48990__auto__ = (function (){var switch__48901__auto__ = ((function (c__48989__auto___49794,cs,m,dchan,dctr,done){
return (function (state_49709){
var state_val_49710 = (state_49709[(1)]);
if((state_val_49710 === (7))){
var inst_49705 = (state_49709[(2)]);
var state_49709__$1 = state_49709;
var statearr_49711_49795 = state_49709__$1;
(statearr_49711_49795[(2)] = inst_49705);

(statearr_49711_49795[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49710 === (20))){
var inst_49608 = (state_49709[(7)]);
var inst_49620 = cljs.core.first.call(null,inst_49608);
var inst_49621 = cljs.core.nth.call(null,inst_49620,(0),null);
var inst_49622 = cljs.core.nth.call(null,inst_49620,(1),null);
var state_49709__$1 = (function (){var statearr_49712 = state_49709;
(statearr_49712[(8)] = inst_49621);

return statearr_49712;
})();
if(cljs.core.truth_(inst_49622)){
var statearr_49713_49796 = state_49709__$1;
(statearr_49713_49796[(1)] = (22));

} else {
var statearr_49714_49797 = state_49709__$1;
(statearr_49714_49797[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49710 === (27))){
var inst_49657 = (state_49709[(9)]);
var inst_49577 = (state_49709[(10)]);
var inst_49652 = (state_49709[(11)]);
var inst_49650 = (state_49709[(12)]);
var inst_49657__$1 = cljs.core._nth.call(null,inst_49650,inst_49652);
var inst_49658 = cljs.core.async.put_BANG_.call(null,inst_49657__$1,inst_49577,done);
var state_49709__$1 = (function (){var statearr_49715 = state_49709;
(statearr_49715[(9)] = inst_49657__$1);

return statearr_49715;
})();
if(cljs.core.truth_(inst_49658)){
var statearr_49716_49798 = state_49709__$1;
(statearr_49716_49798[(1)] = (30));

} else {
var statearr_49717_49799 = state_49709__$1;
(statearr_49717_49799[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49710 === (1))){
var state_49709__$1 = state_49709;
var statearr_49718_49800 = state_49709__$1;
(statearr_49718_49800[(2)] = null);

(statearr_49718_49800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49710 === (24))){
var inst_49608 = (state_49709[(7)]);
var inst_49627 = (state_49709[(2)]);
var inst_49628 = cljs.core.next.call(null,inst_49608);
var inst_49586 = inst_49628;
var inst_49587 = null;
var inst_49588 = (0);
var inst_49589 = (0);
var state_49709__$1 = (function (){var statearr_49719 = state_49709;
(statearr_49719[(13)] = inst_49587);

(statearr_49719[(14)] = inst_49627);

(statearr_49719[(15)] = inst_49589);

(statearr_49719[(16)] = inst_49588);

(statearr_49719[(17)] = inst_49586);

return statearr_49719;
})();
var statearr_49720_49801 = state_49709__$1;
(statearr_49720_49801[(2)] = null);

(statearr_49720_49801[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49710 === (39))){
var state_49709__$1 = state_49709;
var statearr_49724_49802 = state_49709__$1;
(statearr_49724_49802[(2)] = null);

(statearr_49724_49802[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49710 === (4))){
var inst_49577 = (state_49709[(10)]);
var inst_49577__$1 = (state_49709[(2)]);
var inst_49578 = (inst_49577__$1 == null);
var state_49709__$1 = (function (){var statearr_49725 = state_49709;
(statearr_49725[(10)] = inst_49577__$1);

return statearr_49725;
})();
if(cljs.core.truth_(inst_49578)){
var statearr_49726_49803 = state_49709__$1;
(statearr_49726_49803[(1)] = (5));

} else {
var statearr_49727_49804 = state_49709__$1;
(statearr_49727_49804[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49710 === (15))){
var inst_49587 = (state_49709[(13)]);
var inst_49589 = (state_49709[(15)]);
var inst_49588 = (state_49709[(16)]);
var inst_49586 = (state_49709[(17)]);
var inst_49604 = (state_49709[(2)]);
var inst_49605 = (inst_49589 + (1));
var tmp49721 = inst_49587;
var tmp49722 = inst_49588;
var tmp49723 = inst_49586;
var inst_49586__$1 = tmp49723;
var inst_49587__$1 = tmp49721;
var inst_49588__$1 = tmp49722;
var inst_49589__$1 = inst_49605;
var state_49709__$1 = (function (){var statearr_49728 = state_49709;
(statearr_49728[(13)] = inst_49587__$1);

(statearr_49728[(18)] = inst_49604);

(statearr_49728[(15)] = inst_49589__$1);

(statearr_49728[(16)] = inst_49588__$1);

(statearr_49728[(17)] = inst_49586__$1);

return statearr_49728;
})();
var statearr_49729_49805 = state_49709__$1;
(statearr_49729_49805[(2)] = null);

(statearr_49729_49805[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49710 === (21))){
var inst_49631 = (state_49709[(2)]);
var state_49709__$1 = state_49709;
var statearr_49733_49806 = state_49709__$1;
(statearr_49733_49806[(2)] = inst_49631);

(statearr_49733_49806[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49710 === (31))){
var inst_49657 = (state_49709[(9)]);
var inst_49661 = done.call(null,null);
var inst_49662 = cljs.core.async.untap_STAR_.call(null,m,inst_49657);
var state_49709__$1 = (function (){var statearr_49734 = state_49709;
(statearr_49734[(19)] = inst_49661);

return statearr_49734;
})();
var statearr_49735_49807 = state_49709__$1;
(statearr_49735_49807[(2)] = inst_49662);

(statearr_49735_49807[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49710 === (32))){
var inst_49649 = (state_49709[(20)]);
var inst_49651 = (state_49709[(21)]);
var inst_49652 = (state_49709[(11)]);
var inst_49650 = (state_49709[(12)]);
var inst_49664 = (state_49709[(2)]);
var inst_49665 = (inst_49652 + (1));
var tmp49730 = inst_49649;
var tmp49731 = inst_49651;
var tmp49732 = inst_49650;
var inst_49649__$1 = tmp49730;
var inst_49650__$1 = tmp49732;
var inst_49651__$1 = tmp49731;
var inst_49652__$1 = inst_49665;
var state_49709__$1 = (function (){var statearr_49736 = state_49709;
(statearr_49736[(20)] = inst_49649__$1);

(statearr_49736[(21)] = inst_49651__$1);

(statearr_49736[(22)] = inst_49664);

(statearr_49736[(11)] = inst_49652__$1);

(statearr_49736[(12)] = inst_49650__$1);

return statearr_49736;
})();
var statearr_49737_49808 = state_49709__$1;
(statearr_49737_49808[(2)] = null);

(statearr_49737_49808[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49710 === (40))){
var inst_49677 = (state_49709[(23)]);
var inst_49681 = done.call(null,null);
var inst_49682 = cljs.core.async.untap_STAR_.call(null,m,inst_49677);
var state_49709__$1 = (function (){var statearr_49738 = state_49709;
(statearr_49738[(24)] = inst_49681);

return statearr_49738;
})();
var statearr_49739_49809 = state_49709__$1;
(statearr_49739_49809[(2)] = inst_49682);

(statearr_49739_49809[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49710 === (33))){
var inst_49668 = (state_49709[(25)]);
var inst_49670 = cljs.core.chunked_seq_QMARK_.call(null,inst_49668);
var state_49709__$1 = state_49709;
if(inst_49670){
var statearr_49740_49810 = state_49709__$1;
(statearr_49740_49810[(1)] = (36));

} else {
var statearr_49741_49811 = state_49709__$1;
(statearr_49741_49811[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49710 === (13))){
var inst_49598 = (state_49709[(26)]);
var inst_49601 = cljs.core.async.close_BANG_.call(null,inst_49598);
var state_49709__$1 = state_49709;
var statearr_49742_49812 = state_49709__$1;
(statearr_49742_49812[(2)] = inst_49601);

(statearr_49742_49812[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49710 === (22))){
var inst_49621 = (state_49709[(8)]);
var inst_49624 = cljs.core.async.close_BANG_.call(null,inst_49621);
var state_49709__$1 = state_49709;
var statearr_49743_49813 = state_49709__$1;
(statearr_49743_49813[(2)] = inst_49624);

(statearr_49743_49813[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49710 === (36))){
var inst_49668 = (state_49709[(25)]);
var inst_49672 = cljs.core.chunk_first.call(null,inst_49668);
var inst_49673 = cljs.core.chunk_rest.call(null,inst_49668);
var inst_49674 = cljs.core.count.call(null,inst_49672);
var inst_49649 = inst_49673;
var inst_49650 = inst_49672;
var inst_49651 = inst_49674;
var inst_49652 = (0);
var state_49709__$1 = (function (){var statearr_49744 = state_49709;
(statearr_49744[(20)] = inst_49649);

(statearr_49744[(21)] = inst_49651);

(statearr_49744[(11)] = inst_49652);

(statearr_49744[(12)] = inst_49650);

return statearr_49744;
})();
var statearr_49745_49814 = state_49709__$1;
(statearr_49745_49814[(2)] = null);

(statearr_49745_49814[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49710 === (41))){
var inst_49668 = (state_49709[(25)]);
var inst_49684 = (state_49709[(2)]);
var inst_49685 = cljs.core.next.call(null,inst_49668);
var inst_49649 = inst_49685;
var inst_49650 = null;
var inst_49651 = (0);
var inst_49652 = (0);
var state_49709__$1 = (function (){var statearr_49746 = state_49709;
(statearr_49746[(20)] = inst_49649);

(statearr_49746[(21)] = inst_49651);

(statearr_49746[(27)] = inst_49684);

(statearr_49746[(11)] = inst_49652);

(statearr_49746[(12)] = inst_49650);

return statearr_49746;
})();
var statearr_49747_49815 = state_49709__$1;
(statearr_49747_49815[(2)] = null);

(statearr_49747_49815[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49710 === (43))){
var state_49709__$1 = state_49709;
var statearr_49748_49816 = state_49709__$1;
(statearr_49748_49816[(2)] = null);

(statearr_49748_49816[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49710 === (29))){
var inst_49693 = (state_49709[(2)]);
var state_49709__$1 = state_49709;
var statearr_49749_49817 = state_49709__$1;
(statearr_49749_49817[(2)] = inst_49693);

(statearr_49749_49817[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49710 === (44))){
var inst_49702 = (state_49709[(2)]);
var state_49709__$1 = (function (){var statearr_49750 = state_49709;
(statearr_49750[(28)] = inst_49702);

return statearr_49750;
})();
var statearr_49751_49818 = state_49709__$1;
(statearr_49751_49818[(2)] = null);

(statearr_49751_49818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49710 === (6))){
var inst_49641 = (state_49709[(29)]);
var inst_49640 = cljs.core.deref.call(null,cs);
var inst_49641__$1 = cljs.core.keys.call(null,inst_49640);
var inst_49642 = cljs.core.count.call(null,inst_49641__$1);
var inst_49643 = cljs.core.reset_BANG_.call(null,dctr,inst_49642);
var inst_49648 = cljs.core.seq.call(null,inst_49641__$1);
var inst_49649 = inst_49648;
var inst_49650 = null;
var inst_49651 = (0);
var inst_49652 = (0);
var state_49709__$1 = (function (){var statearr_49752 = state_49709;
(statearr_49752[(30)] = inst_49643);

(statearr_49752[(20)] = inst_49649);

(statearr_49752[(21)] = inst_49651);

(statearr_49752[(11)] = inst_49652);

(statearr_49752[(12)] = inst_49650);

(statearr_49752[(29)] = inst_49641__$1);

return statearr_49752;
})();
var statearr_49753_49819 = state_49709__$1;
(statearr_49753_49819[(2)] = null);

(statearr_49753_49819[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49710 === (28))){
var inst_49668 = (state_49709[(25)]);
var inst_49649 = (state_49709[(20)]);
var inst_49668__$1 = cljs.core.seq.call(null,inst_49649);
var state_49709__$1 = (function (){var statearr_49754 = state_49709;
(statearr_49754[(25)] = inst_49668__$1);

return statearr_49754;
})();
if(inst_49668__$1){
var statearr_49755_49820 = state_49709__$1;
(statearr_49755_49820[(1)] = (33));

} else {
var statearr_49756_49821 = state_49709__$1;
(statearr_49756_49821[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49710 === (25))){
var inst_49651 = (state_49709[(21)]);
var inst_49652 = (state_49709[(11)]);
var inst_49654 = (inst_49652 < inst_49651);
var inst_49655 = inst_49654;
var state_49709__$1 = state_49709;
if(cljs.core.truth_(inst_49655)){
var statearr_49757_49822 = state_49709__$1;
(statearr_49757_49822[(1)] = (27));

} else {
var statearr_49758_49823 = state_49709__$1;
(statearr_49758_49823[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49710 === (34))){
var state_49709__$1 = state_49709;
var statearr_49759_49824 = state_49709__$1;
(statearr_49759_49824[(2)] = null);

(statearr_49759_49824[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49710 === (17))){
var state_49709__$1 = state_49709;
var statearr_49760_49825 = state_49709__$1;
(statearr_49760_49825[(2)] = null);

(statearr_49760_49825[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49710 === (3))){
var inst_49707 = (state_49709[(2)]);
var state_49709__$1 = state_49709;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49709__$1,inst_49707);
} else {
if((state_val_49710 === (12))){
var inst_49636 = (state_49709[(2)]);
var state_49709__$1 = state_49709;
var statearr_49761_49826 = state_49709__$1;
(statearr_49761_49826[(2)] = inst_49636);

(statearr_49761_49826[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49710 === (2))){
var state_49709__$1 = state_49709;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49709__$1,(4),ch);
} else {
if((state_val_49710 === (23))){
var state_49709__$1 = state_49709;
var statearr_49762_49827 = state_49709__$1;
(statearr_49762_49827[(2)] = null);

(statearr_49762_49827[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49710 === (35))){
var inst_49691 = (state_49709[(2)]);
var state_49709__$1 = state_49709;
var statearr_49763_49828 = state_49709__$1;
(statearr_49763_49828[(2)] = inst_49691);

(statearr_49763_49828[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49710 === (19))){
var inst_49608 = (state_49709[(7)]);
var inst_49612 = cljs.core.chunk_first.call(null,inst_49608);
var inst_49613 = cljs.core.chunk_rest.call(null,inst_49608);
var inst_49614 = cljs.core.count.call(null,inst_49612);
var inst_49586 = inst_49613;
var inst_49587 = inst_49612;
var inst_49588 = inst_49614;
var inst_49589 = (0);
var state_49709__$1 = (function (){var statearr_49764 = state_49709;
(statearr_49764[(13)] = inst_49587);

(statearr_49764[(15)] = inst_49589);

(statearr_49764[(16)] = inst_49588);

(statearr_49764[(17)] = inst_49586);

return statearr_49764;
})();
var statearr_49765_49829 = state_49709__$1;
(statearr_49765_49829[(2)] = null);

(statearr_49765_49829[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49710 === (11))){
var inst_49608 = (state_49709[(7)]);
var inst_49586 = (state_49709[(17)]);
var inst_49608__$1 = cljs.core.seq.call(null,inst_49586);
var state_49709__$1 = (function (){var statearr_49766 = state_49709;
(statearr_49766[(7)] = inst_49608__$1);

return statearr_49766;
})();
if(inst_49608__$1){
var statearr_49767_49830 = state_49709__$1;
(statearr_49767_49830[(1)] = (16));

} else {
var statearr_49768_49831 = state_49709__$1;
(statearr_49768_49831[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49710 === (9))){
var inst_49638 = (state_49709[(2)]);
var state_49709__$1 = state_49709;
var statearr_49769_49832 = state_49709__$1;
(statearr_49769_49832[(2)] = inst_49638);

(statearr_49769_49832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49710 === (5))){
var inst_49584 = cljs.core.deref.call(null,cs);
var inst_49585 = cljs.core.seq.call(null,inst_49584);
var inst_49586 = inst_49585;
var inst_49587 = null;
var inst_49588 = (0);
var inst_49589 = (0);
var state_49709__$1 = (function (){var statearr_49770 = state_49709;
(statearr_49770[(13)] = inst_49587);

(statearr_49770[(15)] = inst_49589);

(statearr_49770[(16)] = inst_49588);

(statearr_49770[(17)] = inst_49586);

return statearr_49770;
})();
var statearr_49771_49833 = state_49709__$1;
(statearr_49771_49833[(2)] = null);

(statearr_49771_49833[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49710 === (14))){
var state_49709__$1 = state_49709;
var statearr_49772_49834 = state_49709__$1;
(statearr_49772_49834[(2)] = null);

(statearr_49772_49834[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49710 === (45))){
var inst_49699 = (state_49709[(2)]);
var state_49709__$1 = state_49709;
var statearr_49773_49835 = state_49709__$1;
(statearr_49773_49835[(2)] = inst_49699);

(statearr_49773_49835[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49710 === (26))){
var inst_49641 = (state_49709[(29)]);
var inst_49695 = (state_49709[(2)]);
var inst_49696 = cljs.core.seq.call(null,inst_49641);
var state_49709__$1 = (function (){var statearr_49774 = state_49709;
(statearr_49774[(31)] = inst_49695);

return statearr_49774;
})();
if(inst_49696){
var statearr_49775_49836 = state_49709__$1;
(statearr_49775_49836[(1)] = (42));

} else {
var statearr_49776_49837 = state_49709__$1;
(statearr_49776_49837[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49710 === (16))){
var inst_49608 = (state_49709[(7)]);
var inst_49610 = cljs.core.chunked_seq_QMARK_.call(null,inst_49608);
var state_49709__$1 = state_49709;
if(inst_49610){
var statearr_49777_49838 = state_49709__$1;
(statearr_49777_49838[(1)] = (19));

} else {
var statearr_49778_49839 = state_49709__$1;
(statearr_49778_49839[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49710 === (38))){
var inst_49688 = (state_49709[(2)]);
var state_49709__$1 = state_49709;
var statearr_49779_49840 = state_49709__$1;
(statearr_49779_49840[(2)] = inst_49688);

(statearr_49779_49840[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49710 === (30))){
var state_49709__$1 = state_49709;
var statearr_49780_49841 = state_49709__$1;
(statearr_49780_49841[(2)] = null);

(statearr_49780_49841[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49710 === (10))){
var inst_49587 = (state_49709[(13)]);
var inst_49589 = (state_49709[(15)]);
var inst_49597 = cljs.core._nth.call(null,inst_49587,inst_49589);
var inst_49598 = cljs.core.nth.call(null,inst_49597,(0),null);
var inst_49599 = cljs.core.nth.call(null,inst_49597,(1),null);
var state_49709__$1 = (function (){var statearr_49781 = state_49709;
(statearr_49781[(26)] = inst_49598);

return statearr_49781;
})();
if(cljs.core.truth_(inst_49599)){
var statearr_49782_49842 = state_49709__$1;
(statearr_49782_49842[(1)] = (13));

} else {
var statearr_49783_49843 = state_49709__$1;
(statearr_49783_49843[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49710 === (18))){
var inst_49634 = (state_49709[(2)]);
var state_49709__$1 = state_49709;
var statearr_49784_49844 = state_49709__$1;
(statearr_49784_49844[(2)] = inst_49634);

(statearr_49784_49844[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49710 === (42))){
var state_49709__$1 = state_49709;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49709__$1,(45),dchan);
} else {
if((state_val_49710 === (37))){
var inst_49677 = (state_49709[(23)]);
var inst_49668 = (state_49709[(25)]);
var inst_49577 = (state_49709[(10)]);
var inst_49677__$1 = cljs.core.first.call(null,inst_49668);
var inst_49678 = cljs.core.async.put_BANG_.call(null,inst_49677__$1,inst_49577,done);
var state_49709__$1 = (function (){var statearr_49785 = state_49709;
(statearr_49785[(23)] = inst_49677__$1);

return statearr_49785;
})();
if(cljs.core.truth_(inst_49678)){
var statearr_49786_49845 = state_49709__$1;
(statearr_49786_49845[(1)] = (39));

} else {
var statearr_49787_49846 = state_49709__$1;
(statearr_49787_49846[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49710 === (8))){
var inst_49589 = (state_49709[(15)]);
var inst_49588 = (state_49709[(16)]);
var inst_49591 = (inst_49589 < inst_49588);
var inst_49592 = inst_49591;
var state_49709__$1 = state_49709;
if(cljs.core.truth_(inst_49592)){
var statearr_49788_49847 = state_49709__$1;
(statearr_49788_49847[(1)] = (10));

} else {
var statearr_49789_49848 = state_49709__$1;
(statearr_49789_49848[(1)] = (11));

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
});})(c__48989__auto___49794,cs,m,dchan,dctr,done))
;
return ((function (switch__48901__auto__,c__48989__auto___49794,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__48902__auto__ = null;
var cljs$core$async$mult_$_state_machine__48902__auto____0 = (function (){
var statearr_49790 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49790[(0)] = cljs$core$async$mult_$_state_machine__48902__auto__);

(statearr_49790[(1)] = (1));

return statearr_49790;
});
var cljs$core$async$mult_$_state_machine__48902__auto____1 = (function (state_49709){
while(true){
var ret_value__48903__auto__ = (function (){try{while(true){
var result__48904__auto__ = switch__48901__auto__.call(null,state_49709);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48904__auto__;
}
break;
}
}catch (e49791){if((e49791 instanceof Object)){
var ex__48905__auto__ = e49791;
var statearr_49792_49849 = state_49709;
(statearr_49792_49849[(5)] = ex__48905__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49791;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49850 = state_49709;
state_49709 = G__49850;
continue;
} else {
return ret_value__48903__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__48902__auto__ = function(state_49709){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__48902__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__48902__auto____1.call(this,state_49709);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__48902__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__48902__auto____0;
cljs$core$async$mult_$_state_machine__48902__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__48902__auto____1;
return cljs$core$async$mult_$_state_machine__48902__auto__;
})()
;})(switch__48901__auto__,c__48989__auto___49794,cs,m,dchan,dctr,done))
})();
var state__48991__auto__ = (function (){var statearr_49793 = f__48990__auto__.call(null);
(statearr_49793[(6)] = c__48989__auto___49794);

return statearr_49793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48991__auto__);
});})(c__48989__auto___49794,cs,m,dchan,dctr,done))
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
var G__49852 = arguments.length;
switch (G__49852) {
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
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__46578__auto__ = (((m == null))?null:m);
var m__46579__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__46578__auto__)]);
if(!((m__46579__auto__ == null))){
return m__46579__auto__.call(null,m,ch);
} else {
var m__46579__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__46579__auto____$1 == null))){
return m__46579__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__46578__auto__ = (((m == null))?null:m);
var m__46579__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__46578__auto__)]);
if(!((m__46579__auto__ == null))){
return m__46579__auto__.call(null,m,ch);
} else {
var m__46579__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__46579__auto____$1 == null))){
return m__46579__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__46578__auto__ = (((m == null))?null:m);
var m__46579__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__46578__auto__)]);
if(!((m__46579__auto__ == null))){
return m__46579__auto__.call(null,m);
} else {
var m__46579__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__46579__auto____$1 == null))){
return m__46579__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__46578__auto__ = (((m == null))?null:m);
var m__46579__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__46578__auto__)]);
if(!((m__46579__auto__ == null))){
return m__46579__auto__.call(null,m,state_map);
} else {
var m__46579__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__46579__auto____$1 == null))){
return m__46579__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__46578__auto__ = (((m == null))?null:m);
var m__46579__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__46578__auto__)]);
if(!((m__46579__auto__ == null))){
return m__46579__auto__.call(null,m,mode);
} else {
var m__46579__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__46579__auto____$1 == null))){
return m__46579__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__47041__auto__ = [];
var len__47034__auto___49864 = arguments.length;
var i__47035__auto___49865 = (0);
while(true){
if((i__47035__auto___49865 < len__47034__auto___49864)){
args__47041__auto__.push((arguments[i__47035__auto___49865]));

var G__49866 = (i__47035__auto___49865 + (1));
i__47035__auto___49865 = G__49866;
continue;
} else {
}
break;
}

var argseq__47042__auto__ = ((((3) < args__47041__auto__.length))?(new cljs.core.IndexedSeq(args__47041__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__47042__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__49858){
var map__49859 = p__49858;
var map__49859__$1 = ((((!((map__49859 == null)))?((((map__49859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49859.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49859):map__49859);
var opts = map__49859__$1;
var statearr_49861_49867 = state;
(statearr_49861_49867[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__49859,map__49859__$1,opts){
return (function (val){
var statearr_49862_49868 = state;
(statearr_49862_49868[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__49859,map__49859__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_49863_49869 = state;
(statearr_49863_49869[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq49854){
var G__49855 = cljs.core.first.call(null,seq49854);
var seq49854__$1 = cljs.core.next.call(null,seq49854);
var G__49856 = cljs.core.first.call(null,seq49854__$1);
var seq49854__$2 = cljs.core.next.call(null,seq49854__$1);
var G__49857 = cljs.core.first.call(null,seq49854__$2);
var seq49854__$3 = cljs.core.next.call(null,seq49854__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__49855,G__49856,G__49857,seq49854__$3);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async49870 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49870 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta49871){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta49871 = meta49871;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async49870.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_49872,meta49871__$1){
var self__ = this;
var _49872__$1 = this;
return (new cljs.core.async.t_cljs$core$async49870(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta49871__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49870.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_49872){
var self__ = this;
var _49872__$1 = this;
return self__.meta49871;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49870.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49870.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49870.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49870.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49870.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49870.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49870.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49870.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49870.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta49871","meta49871",-1763111841,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async49870.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49870.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49870";

cljs.core.async.t_cljs$core$async49870.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__46520__auto__,writer__46521__auto__,opt__46522__auto__){
return cljs.core._write.call(null,writer__46521__auto__,"cljs.core.async/t_cljs$core$async49870");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async49870 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async49870(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta49871){
return (new cljs.core.async.t_cljs$core$async49870(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta49871));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async49870(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__48989__auto___50034 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48989__auto___50034,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__48990__auto__ = (function (){var switch__48901__auto__ = ((function (c__48989__auto___50034,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_49974){
var state_val_49975 = (state_49974[(1)]);
if((state_val_49975 === (7))){
var inst_49889 = (state_49974[(2)]);
var state_49974__$1 = state_49974;
var statearr_49976_50035 = state_49974__$1;
(statearr_49976_50035[(2)] = inst_49889);

(statearr_49976_50035[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (20))){
var inst_49901 = (state_49974[(7)]);
var state_49974__$1 = state_49974;
var statearr_49977_50036 = state_49974__$1;
(statearr_49977_50036[(2)] = inst_49901);

(statearr_49977_50036[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (27))){
var state_49974__$1 = state_49974;
var statearr_49978_50037 = state_49974__$1;
(statearr_49978_50037[(2)] = null);

(statearr_49978_50037[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (1))){
var inst_49876 = (state_49974[(8)]);
var inst_49876__$1 = calc_state.call(null);
var inst_49878 = (inst_49876__$1 == null);
var inst_49879 = cljs.core.not.call(null,inst_49878);
var state_49974__$1 = (function (){var statearr_49979 = state_49974;
(statearr_49979[(8)] = inst_49876__$1);

return statearr_49979;
})();
if(inst_49879){
var statearr_49980_50038 = state_49974__$1;
(statearr_49980_50038[(1)] = (2));

} else {
var statearr_49981_50039 = state_49974__$1;
(statearr_49981_50039[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (24))){
var inst_49934 = (state_49974[(9)]);
var inst_49925 = (state_49974[(10)]);
var inst_49948 = (state_49974[(11)]);
var inst_49948__$1 = inst_49925.call(null,inst_49934);
var state_49974__$1 = (function (){var statearr_49982 = state_49974;
(statearr_49982[(11)] = inst_49948__$1);

return statearr_49982;
})();
if(cljs.core.truth_(inst_49948__$1)){
var statearr_49983_50040 = state_49974__$1;
(statearr_49983_50040[(1)] = (29));

} else {
var statearr_49984_50041 = state_49974__$1;
(statearr_49984_50041[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (4))){
var inst_49892 = (state_49974[(2)]);
var state_49974__$1 = state_49974;
if(cljs.core.truth_(inst_49892)){
var statearr_49985_50042 = state_49974__$1;
(statearr_49985_50042[(1)] = (8));

} else {
var statearr_49986_50043 = state_49974__$1;
(statearr_49986_50043[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (15))){
var inst_49919 = (state_49974[(2)]);
var state_49974__$1 = state_49974;
if(cljs.core.truth_(inst_49919)){
var statearr_49987_50044 = state_49974__$1;
(statearr_49987_50044[(1)] = (19));

} else {
var statearr_49988_50045 = state_49974__$1;
(statearr_49988_50045[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (21))){
var inst_49924 = (state_49974[(12)]);
var inst_49924__$1 = (state_49974[(2)]);
var inst_49925 = cljs.core.get.call(null,inst_49924__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_49926 = cljs.core.get.call(null,inst_49924__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_49927 = cljs.core.get.call(null,inst_49924__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_49974__$1 = (function (){var statearr_49989 = state_49974;
(statearr_49989[(10)] = inst_49925);

(statearr_49989[(12)] = inst_49924__$1);

(statearr_49989[(13)] = inst_49926);

return statearr_49989;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_49974__$1,(22),inst_49927);
} else {
if((state_val_49975 === (31))){
var inst_49956 = (state_49974[(2)]);
var state_49974__$1 = state_49974;
if(cljs.core.truth_(inst_49956)){
var statearr_49990_50046 = state_49974__$1;
(statearr_49990_50046[(1)] = (32));

} else {
var statearr_49991_50047 = state_49974__$1;
(statearr_49991_50047[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (32))){
var inst_49933 = (state_49974[(14)]);
var state_49974__$1 = state_49974;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49974__$1,(35),out,inst_49933);
} else {
if((state_val_49975 === (33))){
var inst_49924 = (state_49974[(12)]);
var inst_49901 = inst_49924;
var state_49974__$1 = (function (){var statearr_49992 = state_49974;
(statearr_49992[(7)] = inst_49901);

return statearr_49992;
})();
var statearr_49993_50048 = state_49974__$1;
(statearr_49993_50048[(2)] = null);

(statearr_49993_50048[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (13))){
var inst_49901 = (state_49974[(7)]);
var inst_49908 = inst_49901.cljs$lang$protocol_mask$partition0$;
var inst_49909 = (inst_49908 & (64));
var inst_49910 = inst_49901.cljs$core$ISeq$;
var inst_49911 = (cljs.core.PROTOCOL_SENTINEL === inst_49910);
var inst_49912 = (inst_49909) || (inst_49911);
var state_49974__$1 = state_49974;
if(cljs.core.truth_(inst_49912)){
var statearr_49994_50049 = state_49974__$1;
(statearr_49994_50049[(1)] = (16));

} else {
var statearr_49995_50050 = state_49974__$1;
(statearr_49995_50050[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (22))){
var inst_49933 = (state_49974[(14)]);
var inst_49934 = (state_49974[(9)]);
var inst_49932 = (state_49974[(2)]);
var inst_49933__$1 = cljs.core.nth.call(null,inst_49932,(0),null);
var inst_49934__$1 = cljs.core.nth.call(null,inst_49932,(1),null);
var inst_49935 = (inst_49933__$1 == null);
var inst_49936 = cljs.core._EQ_.call(null,inst_49934__$1,change);
var inst_49937 = (inst_49935) || (inst_49936);
var state_49974__$1 = (function (){var statearr_49996 = state_49974;
(statearr_49996[(14)] = inst_49933__$1);

(statearr_49996[(9)] = inst_49934__$1);

return statearr_49996;
})();
if(cljs.core.truth_(inst_49937)){
var statearr_49997_50051 = state_49974__$1;
(statearr_49997_50051[(1)] = (23));

} else {
var statearr_49998_50052 = state_49974__$1;
(statearr_49998_50052[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (36))){
var inst_49924 = (state_49974[(12)]);
var inst_49901 = inst_49924;
var state_49974__$1 = (function (){var statearr_49999 = state_49974;
(statearr_49999[(7)] = inst_49901);

return statearr_49999;
})();
var statearr_50000_50053 = state_49974__$1;
(statearr_50000_50053[(2)] = null);

(statearr_50000_50053[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (29))){
var inst_49948 = (state_49974[(11)]);
var state_49974__$1 = state_49974;
var statearr_50001_50054 = state_49974__$1;
(statearr_50001_50054[(2)] = inst_49948);

(statearr_50001_50054[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (6))){
var state_49974__$1 = state_49974;
var statearr_50002_50055 = state_49974__$1;
(statearr_50002_50055[(2)] = false);

(statearr_50002_50055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (28))){
var inst_49944 = (state_49974[(2)]);
var inst_49945 = calc_state.call(null);
var inst_49901 = inst_49945;
var state_49974__$1 = (function (){var statearr_50003 = state_49974;
(statearr_50003[(7)] = inst_49901);

(statearr_50003[(15)] = inst_49944);

return statearr_50003;
})();
var statearr_50004_50056 = state_49974__$1;
(statearr_50004_50056[(2)] = null);

(statearr_50004_50056[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (25))){
var inst_49970 = (state_49974[(2)]);
var state_49974__$1 = state_49974;
var statearr_50005_50057 = state_49974__$1;
(statearr_50005_50057[(2)] = inst_49970);

(statearr_50005_50057[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (34))){
var inst_49968 = (state_49974[(2)]);
var state_49974__$1 = state_49974;
var statearr_50006_50058 = state_49974__$1;
(statearr_50006_50058[(2)] = inst_49968);

(statearr_50006_50058[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (17))){
var state_49974__$1 = state_49974;
var statearr_50007_50059 = state_49974__$1;
(statearr_50007_50059[(2)] = false);

(statearr_50007_50059[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (3))){
var state_49974__$1 = state_49974;
var statearr_50008_50060 = state_49974__$1;
(statearr_50008_50060[(2)] = false);

(statearr_50008_50060[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (12))){
var inst_49972 = (state_49974[(2)]);
var state_49974__$1 = state_49974;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49974__$1,inst_49972);
} else {
if((state_val_49975 === (2))){
var inst_49876 = (state_49974[(8)]);
var inst_49881 = inst_49876.cljs$lang$protocol_mask$partition0$;
var inst_49882 = (inst_49881 & (64));
var inst_49883 = inst_49876.cljs$core$ISeq$;
var inst_49884 = (cljs.core.PROTOCOL_SENTINEL === inst_49883);
var inst_49885 = (inst_49882) || (inst_49884);
var state_49974__$1 = state_49974;
if(cljs.core.truth_(inst_49885)){
var statearr_50009_50061 = state_49974__$1;
(statearr_50009_50061[(1)] = (5));

} else {
var statearr_50010_50062 = state_49974__$1;
(statearr_50010_50062[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (23))){
var inst_49933 = (state_49974[(14)]);
var inst_49939 = (inst_49933 == null);
var state_49974__$1 = state_49974;
if(cljs.core.truth_(inst_49939)){
var statearr_50011_50063 = state_49974__$1;
(statearr_50011_50063[(1)] = (26));

} else {
var statearr_50012_50064 = state_49974__$1;
(statearr_50012_50064[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (35))){
var inst_49959 = (state_49974[(2)]);
var state_49974__$1 = state_49974;
if(cljs.core.truth_(inst_49959)){
var statearr_50013_50065 = state_49974__$1;
(statearr_50013_50065[(1)] = (36));

} else {
var statearr_50014_50066 = state_49974__$1;
(statearr_50014_50066[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (19))){
var inst_49901 = (state_49974[(7)]);
var inst_49921 = cljs.core.apply.call(null,cljs.core.hash_map,inst_49901);
var state_49974__$1 = state_49974;
var statearr_50015_50067 = state_49974__$1;
(statearr_50015_50067[(2)] = inst_49921);

(statearr_50015_50067[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (11))){
var inst_49901 = (state_49974[(7)]);
var inst_49905 = (inst_49901 == null);
var inst_49906 = cljs.core.not.call(null,inst_49905);
var state_49974__$1 = state_49974;
if(inst_49906){
var statearr_50016_50068 = state_49974__$1;
(statearr_50016_50068[(1)] = (13));

} else {
var statearr_50017_50069 = state_49974__$1;
(statearr_50017_50069[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (9))){
var inst_49876 = (state_49974[(8)]);
var state_49974__$1 = state_49974;
var statearr_50018_50070 = state_49974__$1;
(statearr_50018_50070[(2)] = inst_49876);

(statearr_50018_50070[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (5))){
var state_49974__$1 = state_49974;
var statearr_50019_50071 = state_49974__$1;
(statearr_50019_50071[(2)] = true);

(statearr_50019_50071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (14))){
var state_49974__$1 = state_49974;
var statearr_50020_50072 = state_49974__$1;
(statearr_50020_50072[(2)] = false);

(statearr_50020_50072[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (26))){
var inst_49934 = (state_49974[(9)]);
var inst_49941 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_49934);
var state_49974__$1 = state_49974;
var statearr_50021_50073 = state_49974__$1;
(statearr_50021_50073[(2)] = inst_49941);

(statearr_50021_50073[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (16))){
var state_49974__$1 = state_49974;
var statearr_50022_50074 = state_49974__$1;
(statearr_50022_50074[(2)] = true);

(statearr_50022_50074[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (38))){
var inst_49964 = (state_49974[(2)]);
var state_49974__$1 = state_49974;
var statearr_50023_50075 = state_49974__$1;
(statearr_50023_50075[(2)] = inst_49964);

(statearr_50023_50075[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (30))){
var inst_49934 = (state_49974[(9)]);
var inst_49925 = (state_49974[(10)]);
var inst_49926 = (state_49974[(13)]);
var inst_49951 = cljs.core.empty_QMARK_.call(null,inst_49925);
var inst_49952 = inst_49926.call(null,inst_49934);
var inst_49953 = cljs.core.not.call(null,inst_49952);
var inst_49954 = (inst_49951) && (inst_49953);
var state_49974__$1 = state_49974;
var statearr_50024_50076 = state_49974__$1;
(statearr_50024_50076[(2)] = inst_49954);

(statearr_50024_50076[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (10))){
var inst_49876 = (state_49974[(8)]);
var inst_49897 = (state_49974[(2)]);
var inst_49898 = cljs.core.get.call(null,inst_49897,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_49899 = cljs.core.get.call(null,inst_49897,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_49900 = cljs.core.get.call(null,inst_49897,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_49901 = inst_49876;
var state_49974__$1 = (function (){var statearr_50025 = state_49974;
(statearr_50025[(7)] = inst_49901);

(statearr_50025[(16)] = inst_49898);

(statearr_50025[(17)] = inst_49900);

(statearr_50025[(18)] = inst_49899);

return statearr_50025;
})();
var statearr_50026_50077 = state_49974__$1;
(statearr_50026_50077[(2)] = null);

(statearr_50026_50077[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (18))){
var inst_49916 = (state_49974[(2)]);
var state_49974__$1 = state_49974;
var statearr_50027_50078 = state_49974__$1;
(statearr_50027_50078[(2)] = inst_49916);

(statearr_50027_50078[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (37))){
var state_49974__$1 = state_49974;
var statearr_50028_50079 = state_49974__$1;
(statearr_50028_50079[(2)] = null);

(statearr_50028_50079[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49975 === (8))){
var inst_49876 = (state_49974[(8)]);
var inst_49894 = cljs.core.apply.call(null,cljs.core.hash_map,inst_49876);
var state_49974__$1 = state_49974;
var statearr_50029_50080 = state_49974__$1;
(statearr_50029_50080[(2)] = inst_49894);

(statearr_50029_50080[(1)] = (10));


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
});})(c__48989__auto___50034,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__48901__auto__,c__48989__auto___50034,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__48902__auto__ = null;
var cljs$core$async$mix_$_state_machine__48902__auto____0 = (function (){
var statearr_50030 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50030[(0)] = cljs$core$async$mix_$_state_machine__48902__auto__);

(statearr_50030[(1)] = (1));

return statearr_50030;
});
var cljs$core$async$mix_$_state_machine__48902__auto____1 = (function (state_49974){
while(true){
var ret_value__48903__auto__ = (function (){try{while(true){
var result__48904__auto__ = switch__48901__auto__.call(null,state_49974);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48904__auto__;
}
break;
}
}catch (e50031){if((e50031 instanceof Object)){
var ex__48905__auto__ = e50031;
var statearr_50032_50081 = state_49974;
(statearr_50032_50081[(5)] = ex__48905__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50031;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50082 = state_49974;
state_49974 = G__50082;
continue;
} else {
return ret_value__48903__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__48902__auto__ = function(state_49974){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__48902__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__48902__auto____1.call(this,state_49974);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__48902__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__48902__auto____0;
cljs$core$async$mix_$_state_machine__48902__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__48902__auto____1;
return cljs$core$async$mix_$_state_machine__48902__auto__;
})()
;})(switch__48901__auto__,c__48989__auto___50034,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__48991__auto__ = (function (){var statearr_50033 = f__48990__auto__.call(null);
(statearr_50033[(6)] = c__48989__auto___50034);

return statearr_50033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48991__auto__);
});})(c__48989__auto___50034,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__46578__auto__ = (((p == null))?null:p);
var m__46579__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__46578__auto__)]);
if(!((m__46579__auto__ == null))){
return m__46579__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__46579__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__46579__auto____$1 == null))){
return m__46579__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__46578__auto__ = (((p == null))?null:p);
var m__46579__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__46578__auto__)]);
if(!((m__46579__auto__ == null))){
return m__46579__auto__.call(null,p,v,ch);
} else {
var m__46579__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__46579__auto____$1 == null))){
return m__46579__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__50084 = arguments.length;
switch (G__50084) {
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
var x__46578__auto__ = (((p == null))?null:p);
var m__46579__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__46578__auto__)]);
if(!((m__46579__auto__ == null))){
return m__46579__auto__.call(null,p);
} else {
var m__46579__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__46579__auto____$1 == null))){
return m__46579__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__46578__auto__ = (((p == null))?null:p);
var m__46579__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__46578__auto__)]);
if(!((m__46579__auto__ == null))){
return m__46579__auto__.call(null,p,v);
} else {
var m__46579__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__46579__auto____$1 == null))){
return m__46579__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
var G__50088 = arguments.length;
switch (G__50088) {
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
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__45909__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__45909__auto__)){
return or__45909__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__45909__auto__,mults){
return (function (p1__50086_SHARP_){
if(cljs.core.truth_(p1__50086_SHARP_.call(null,topic))){
return p1__50086_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__50086_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__45909__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async50089 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50089 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta50090){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta50090 = meta50090;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async50089.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_50091,meta50090__$1){
var self__ = this;
var _50091__$1 = this;
return (new cljs.core.async.t_cljs$core$async50089(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta50090__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50089.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_50091){
var self__ = this;
var _50091__$1 = this;
return self__.meta50090;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50089.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50089.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50089.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50089.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50089.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50089.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50089.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50089.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta50090","meta50090",229372557,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50089.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50089.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50089";

cljs.core.async.t_cljs$core$async50089.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__46520__auto__,writer__46521__auto__,opt__46522__auto__){
return cljs.core._write.call(null,writer__46521__auto__,"cljs.core.async/t_cljs$core$async50089");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async50089 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async50089(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta50090){
return (new cljs.core.async.t_cljs$core$async50089(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta50090));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async50089(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__48989__auto___50209 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48989__auto___50209,mults,ensure_mult,p){
return (function (){
var f__48990__auto__ = (function (){var switch__48901__auto__ = ((function (c__48989__auto___50209,mults,ensure_mult,p){
return (function (state_50163){
var state_val_50164 = (state_50163[(1)]);
if((state_val_50164 === (7))){
var inst_50159 = (state_50163[(2)]);
var state_50163__$1 = state_50163;
var statearr_50165_50210 = state_50163__$1;
(statearr_50165_50210[(2)] = inst_50159);

(statearr_50165_50210[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50164 === (20))){
var state_50163__$1 = state_50163;
var statearr_50166_50211 = state_50163__$1;
(statearr_50166_50211[(2)] = null);

(statearr_50166_50211[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50164 === (1))){
var state_50163__$1 = state_50163;
var statearr_50167_50212 = state_50163__$1;
(statearr_50167_50212[(2)] = null);

(statearr_50167_50212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50164 === (24))){
var inst_50142 = (state_50163[(7)]);
var inst_50151 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_50142);
var state_50163__$1 = state_50163;
var statearr_50168_50213 = state_50163__$1;
(statearr_50168_50213[(2)] = inst_50151);

(statearr_50168_50213[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50164 === (4))){
var inst_50094 = (state_50163[(8)]);
var inst_50094__$1 = (state_50163[(2)]);
var inst_50095 = (inst_50094__$1 == null);
var state_50163__$1 = (function (){var statearr_50169 = state_50163;
(statearr_50169[(8)] = inst_50094__$1);

return statearr_50169;
})();
if(cljs.core.truth_(inst_50095)){
var statearr_50170_50214 = state_50163__$1;
(statearr_50170_50214[(1)] = (5));

} else {
var statearr_50171_50215 = state_50163__$1;
(statearr_50171_50215[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50164 === (15))){
var inst_50136 = (state_50163[(2)]);
var state_50163__$1 = state_50163;
var statearr_50172_50216 = state_50163__$1;
(statearr_50172_50216[(2)] = inst_50136);

(statearr_50172_50216[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50164 === (21))){
var inst_50156 = (state_50163[(2)]);
var state_50163__$1 = (function (){var statearr_50173 = state_50163;
(statearr_50173[(9)] = inst_50156);

return statearr_50173;
})();
var statearr_50174_50217 = state_50163__$1;
(statearr_50174_50217[(2)] = null);

(statearr_50174_50217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50164 === (13))){
var inst_50118 = (state_50163[(10)]);
var inst_50120 = cljs.core.chunked_seq_QMARK_.call(null,inst_50118);
var state_50163__$1 = state_50163;
if(inst_50120){
var statearr_50175_50218 = state_50163__$1;
(statearr_50175_50218[(1)] = (16));

} else {
var statearr_50176_50219 = state_50163__$1;
(statearr_50176_50219[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50164 === (22))){
var inst_50148 = (state_50163[(2)]);
var state_50163__$1 = state_50163;
if(cljs.core.truth_(inst_50148)){
var statearr_50177_50220 = state_50163__$1;
(statearr_50177_50220[(1)] = (23));

} else {
var statearr_50178_50221 = state_50163__$1;
(statearr_50178_50221[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50164 === (6))){
var inst_50144 = (state_50163[(11)]);
var inst_50142 = (state_50163[(7)]);
var inst_50094 = (state_50163[(8)]);
var inst_50142__$1 = topic_fn.call(null,inst_50094);
var inst_50143 = cljs.core.deref.call(null,mults);
var inst_50144__$1 = cljs.core.get.call(null,inst_50143,inst_50142__$1);
var state_50163__$1 = (function (){var statearr_50179 = state_50163;
(statearr_50179[(11)] = inst_50144__$1);

(statearr_50179[(7)] = inst_50142__$1);

return statearr_50179;
})();
if(cljs.core.truth_(inst_50144__$1)){
var statearr_50180_50222 = state_50163__$1;
(statearr_50180_50222[(1)] = (19));

} else {
var statearr_50181_50223 = state_50163__$1;
(statearr_50181_50223[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50164 === (25))){
var inst_50153 = (state_50163[(2)]);
var state_50163__$1 = state_50163;
var statearr_50182_50224 = state_50163__$1;
(statearr_50182_50224[(2)] = inst_50153);

(statearr_50182_50224[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50164 === (17))){
var inst_50118 = (state_50163[(10)]);
var inst_50127 = cljs.core.first.call(null,inst_50118);
var inst_50128 = cljs.core.async.muxch_STAR_.call(null,inst_50127);
var inst_50129 = cljs.core.async.close_BANG_.call(null,inst_50128);
var inst_50130 = cljs.core.next.call(null,inst_50118);
var inst_50104 = inst_50130;
var inst_50105 = null;
var inst_50106 = (0);
var inst_50107 = (0);
var state_50163__$1 = (function (){var statearr_50183 = state_50163;
(statearr_50183[(12)] = inst_50106);

(statearr_50183[(13)] = inst_50107);

(statearr_50183[(14)] = inst_50129);

(statearr_50183[(15)] = inst_50104);

(statearr_50183[(16)] = inst_50105);

return statearr_50183;
})();
var statearr_50184_50225 = state_50163__$1;
(statearr_50184_50225[(2)] = null);

(statearr_50184_50225[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50164 === (3))){
var inst_50161 = (state_50163[(2)]);
var state_50163__$1 = state_50163;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50163__$1,inst_50161);
} else {
if((state_val_50164 === (12))){
var inst_50138 = (state_50163[(2)]);
var state_50163__$1 = state_50163;
var statearr_50185_50226 = state_50163__$1;
(statearr_50185_50226[(2)] = inst_50138);

(statearr_50185_50226[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50164 === (2))){
var state_50163__$1 = state_50163;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50163__$1,(4),ch);
} else {
if((state_val_50164 === (23))){
var state_50163__$1 = state_50163;
var statearr_50186_50227 = state_50163__$1;
(statearr_50186_50227[(2)] = null);

(statearr_50186_50227[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50164 === (19))){
var inst_50144 = (state_50163[(11)]);
var inst_50094 = (state_50163[(8)]);
var inst_50146 = cljs.core.async.muxch_STAR_.call(null,inst_50144);
var state_50163__$1 = state_50163;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50163__$1,(22),inst_50146,inst_50094);
} else {
if((state_val_50164 === (11))){
var inst_50104 = (state_50163[(15)]);
var inst_50118 = (state_50163[(10)]);
var inst_50118__$1 = cljs.core.seq.call(null,inst_50104);
var state_50163__$1 = (function (){var statearr_50187 = state_50163;
(statearr_50187[(10)] = inst_50118__$1);

return statearr_50187;
})();
if(inst_50118__$1){
var statearr_50188_50228 = state_50163__$1;
(statearr_50188_50228[(1)] = (13));

} else {
var statearr_50189_50229 = state_50163__$1;
(statearr_50189_50229[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50164 === (9))){
var inst_50140 = (state_50163[(2)]);
var state_50163__$1 = state_50163;
var statearr_50190_50230 = state_50163__$1;
(statearr_50190_50230[(2)] = inst_50140);

(statearr_50190_50230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50164 === (5))){
var inst_50101 = cljs.core.deref.call(null,mults);
var inst_50102 = cljs.core.vals.call(null,inst_50101);
var inst_50103 = cljs.core.seq.call(null,inst_50102);
var inst_50104 = inst_50103;
var inst_50105 = null;
var inst_50106 = (0);
var inst_50107 = (0);
var state_50163__$1 = (function (){var statearr_50191 = state_50163;
(statearr_50191[(12)] = inst_50106);

(statearr_50191[(13)] = inst_50107);

(statearr_50191[(15)] = inst_50104);

(statearr_50191[(16)] = inst_50105);

return statearr_50191;
})();
var statearr_50192_50231 = state_50163__$1;
(statearr_50192_50231[(2)] = null);

(statearr_50192_50231[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50164 === (14))){
var state_50163__$1 = state_50163;
var statearr_50196_50232 = state_50163__$1;
(statearr_50196_50232[(2)] = null);

(statearr_50196_50232[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50164 === (16))){
var inst_50118 = (state_50163[(10)]);
var inst_50122 = cljs.core.chunk_first.call(null,inst_50118);
var inst_50123 = cljs.core.chunk_rest.call(null,inst_50118);
var inst_50124 = cljs.core.count.call(null,inst_50122);
var inst_50104 = inst_50123;
var inst_50105 = inst_50122;
var inst_50106 = inst_50124;
var inst_50107 = (0);
var state_50163__$1 = (function (){var statearr_50197 = state_50163;
(statearr_50197[(12)] = inst_50106);

(statearr_50197[(13)] = inst_50107);

(statearr_50197[(15)] = inst_50104);

(statearr_50197[(16)] = inst_50105);

return statearr_50197;
})();
var statearr_50198_50233 = state_50163__$1;
(statearr_50198_50233[(2)] = null);

(statearr_50198_50233[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50164 === (10))){
var inst_50106 = (state_50163[(12)]);
var inst_50107 = (state_50163[(13)]);
var inst_50104 = (state_50163[(15)]);
var inst_50105 = (state_50163[(16)]);
var inst_50112 = cljs.core._nth.call(null,inst_50105,inst_50107);
var inst_50113 = cljs.core.async.muxch_STAR_.call(null,inst_50112);
var inst_50114 = cljs.core.async.close_BANG_.call(null,inst_50113);
var inst_50115 = (inst_50107 + (1));
var tmp50193 = inst_50106;
var tmp50194 = inst_50104;
var tmp50195 = inst_50105;
var inst_50104__$1 = tmp50194;
var inst_50105__$1 = tmp50195;
var inst_50106__$1 = tmp50193;
var inst_50107__$1 = inst_50115;
var state_50163__$1 = (function (){var statearr_50199 = state_50163;
(statearr_50199[(12)] = inst_50106__$1);

(statearr_50199[(17)] = inst_50114);

(statearr_50199[(13)] = inst_50107__$1);

(statearr_50199[(15)] = inst_50104__$1);

(statearr_50199[(16)] = inst_50105__$1);

return statearr_50199;
})();
var statearr_50200_50234 = state_50163__$1;
(statearr_50200_50234[(2)] = null);

(statearr_50200_50234[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50164 === (18))){
var inst_50133 = (state_50163[(2)]);
var state_50163__$1 = state_50163;
var statearr_50201_50235 = state_50163__$1;
(statearr_50201_50235[(2)] = inst_50133);

(statearr_50201_50235[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50164 === (8))){
var inst_50106 = (state_50163[(12)]);
var inst_50107 = (state_50163[(13)]);
var inst_50109 = (inst_50107 < inst_50106);
var inst_50110 = inst_50109;
var state_50163__$1 = state_50163;
if(cljs.core.truth_(inst_50110)){
var statearr_50202_50236 = state_50163__$1;
(statearr_50202_50236[(1)] = (10));

} else {
var statearr_50203_50237 = state_50163__$1;
(statearr_50203_50237[(1)] = (11));

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
});})(c__48989__auto___50209,mults,ensure_mult,p))
;
return ((function (switch__48901__auto__,c__48989__auto___50209,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__48902__auto__ = null;
var cljs$core$async$state_machine__48902__auto____0 = (function (){
var statearr_50204 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50204[(0)] = cljs$core$async$state_machine__48902__auto__);

(statearr_50204[(1)] = (1));

return statearr_50204;
});
var cljs$core$async$state_machine__48902__auto____1 = (function (state_50163){
while(true){
var ret_value__48903__auto__ = (function (){try{while(true){
var result__48904__auto__ = switch__48901__auto__.call(null,state_50163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48904__auto__;
}
break;
}
}catch (e50205){if((e50205 instanceof Object)){
var ex__48905__auto__ = e50205;
var statearr_50206_50238 = state_50163;
(statearr_50206_50238[(5)] = ex__48905__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50205;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50239 = state_50163;
state_50163 = G__50239;
continue;
} else {
return ret_value__48903__auto__;
}
break;
}
});
cljs$core$async$state_machine__48902__auto__ = function(state_50163){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48902__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48902__auto____1.call(this,state_50163);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__48902__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48902__auto____0;
cljs$core$async$state_machine__48902__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48902__auto____1;
return cljs$core$async$state_machine__48902__auto__;
})()
;})(switch__48901__auto__,c__48989__auto___50209,mults,ensure_mult,p))
})();
var state__48991__auto__ = (function (){var statearr_50207 = f__48990__auto__.call(null);
(statearr_50207[(6)] = c__48989__auto___50209);

return statearr_50207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48991__auto__);
});})(c__48989__auto___50209,mults,ensure_mult,p))
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
var G__50241 = arguments.length;
switch (G__50241) {
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
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__50244 = arguments.length;
switch (G__50244) {
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
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var G__50247 = arguments.length;
switch (G__50247) {
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
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__48989__auto___50314 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48989__auto___50314,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__48990__auto__ = (function (){var switch__48901__auto__ = ((function (c__48989__auto___50314,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_50286){
var state_val_50287 = (state_50286[(1)]);
if((state_val_50287 === (7))){
var state_50286__$1 = state_50286;
var statearr_50288_50315 = state_50286__$1;
(statearr_50288_50315[(2)] = null);

(statearr_50288_50315[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50287 === (1))){
var state_50286__$1 = state_50286;
var statearr_50289_50316 = state_50286__$1;
(statearr_50289_50316[(2)] = null);

(statearr_50289_50316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50287 === (4))){
var inst_50250 = (state_50286[(7)]);
var inst_50252 = (inst_50250 < cnt);
var state_50286__$1 = state_50286;
if(cljs.core.truth_(inst_50252)){
var statearr_50290_50317 = state_50286__$1;
(statearr_50290_50317[(1)] = (6));

} else {
var statearr_50291_50318 = state_50286__$1;
(statearr_50291_50318[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50287 === (15))){
var inst_50282 = (state_50286[(2)]);
var state_50286__$1 = state_50286;
var statearr_50292_50319 = state_50286__$1;
(statearr_50292_50319[(2)] = inst_50282);

(statearr_50292_50319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50287 === (13))){
var inst_50275 = cljs.core.async.close_BANG_.call(null,out);
var state_50286__$1 = state_50286;
var statearr_50293_50320 = state_50286__$1;
(statearr_50293_50320[(2)] = inst_50275);

(statearr_50293_50320[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50287 === (6))){
var state_50286__$1 = state_50286;
var statearr_50294_50321 = state_50286__$1;
(statearr_50294_50321[(2)] = null);

(statearr_50294_50321[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50287 === (3))){
var inst_50284 = (state_50286[(2)]);
var state_50286__$1 = state_50286;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50286__$1,inst_50284);
} else {
if((state_val_50287 === (12))){
var inst_50272 = (state_50286[(8)]);
var inst_50272__$1 = (state_50286[(2)]);
var inst_50273 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_50272__$1);
var state_50286__$1 = (function (){var statearr_50295 = state_50286;
(statearr_50295[(8)] = inst_50272__$1);

return statearr_50295;
})();
if(cljs.core.truth_(inst_50273)){
var statearr_50296_50322 = state_50286__$1;
(statearr_50296_50322[(1)] = (13));

} else {
var statearr_50297_50323 = state_50286__$1;
(statearr_50297_50323[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50287 === (2))){
var inst_50249 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_50250 = (0);
var state_50286__$1 = (function (){var statearr_50298 = state_50286;
(statearr_50298[(9)] = inst_50249);

(statearr_50298[(7)] = inst_50250);

return statearr_50298;
})();
var statearr_50299_50324 = state_50286__$1;
(statearr_50299_50324[(2)] = null);

(statearr_50299_50324[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50287 === (11))){
var inst_50250 = (state_50286[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_50286,(10),Object,null,(9));
var inst_50259 = chs__$1.call(null,inst_50250);
var inst_50260 = done.call(null,inst_50250);
var inst_50261 = cljs.core.async.take_BANG_.call(null,inst_50259,inst_50260);
var state_50286__$1 = state_50286;
var statearr_50300_50325 = state_50286__$1;
(statearr_50300_50325[(2)] = inst_50261);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50286__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50287 === (9))){
var inst_50250 = (state_50286[(7)]);
var inst_50263 = (state_50286[(2)]);
var inst_50264 = (inst_50250 + (1));
var inst_50250__$1 = inst_50264;
var state_50286__$1 = (function (){var statearr_50301 = state_50286;
(statearr_50301[(10)] = inst_50263);

(statearr_50301[(7)] = inst_50250__$1);

return statearr_50301;
})();
var statearr_50302_50326 = state_50286__$1;
(statearr_50302_50326[(2)] = null);

(statearr_50302_50326[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50287 === (5))){
var inst_50270 = (state_50286[(2)]);
var state_50286__$1 = (function (){var statearr_50303 = state_50286;
(statearr_50303[(11)] = inst_50270);

return statearr_50303;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50286__$1,(12),dchan);
} else {
if((state_val_50287 === (14))){
var inst_50272 = (state_50286[(8)]);
var inst_50277 = cljs.core.apply.call(null,f,inst_50272);
var state_50286__$1 = state_50286;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50286__$1,(16),out,inst_50277);
} else {
if((state_val_50287 === (16))){
var inst_50279 = (state_50286[(2)]);
var state_50286__$1 = (function (){var statearr_50304 = state_50286;
(statearr_50304[(12)] = inst_50279);

return statearr_50304;
})();
var statearr_50305_50327 = state_50286__$1;
(statearr_50305_50327[(2)] = null);

(statearr_50305_50327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50287 === (10))){
var inst_50254 = (state_50286[(2)]);
var inst_50255 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_50286__$1 = (function (){var statearr_50306 = state_50286;
(statearr_50306[(13)] = inst_50254);

return statearr_50306;
})();
var statearr_50307_50328 = state_50286__$1;
(statearr_50307_50328[(2)] = inst_50255);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50286__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50287 === (8))){
var inst_50268 = (state_50286[(2)]);
var state_50286__$1 = state_50286;
var statearr_50308_50329 = state_50286__$1;
(statearr_50308_50329[(2)] = inst_50268);

(statearr_50308_50329[(1)] = (5));


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
});})(c__48989__auto___50314,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__48901__auto__,c__48989__auto___50314,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__48902__auto__ = null;
var cljs$core$async$state_machine__48902__auto____0 = (function (){
var statearr_50309 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50309[(0)] = cljs$core$async$state_machine__48902__auto__);

(statearr_50309[(1)] = (1));

return statearr_50309;
});
var cljs$core$async$state_machine__48902__auto____1 = (function (state_50286){
while(true){
var ret_value__48903__auto__ = (function (){try{while(true){
var result__48904__auto__ = switch__48901__auto__.call(null,state_50286);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48904__auto__;
}
break;
}
}catch (e50310){if((e50310 instanceof Object)){
var ex__48905__auto__ = e50310;
var statearr_50311_50330 = state_50286;
(statearr_50311_50330[(5)] = ex__48905__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50286);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50331 = state_50286;
state_50286 = G__50331;
continue;
} else {
return ret_value__48903__auto__;
}
break;
}
});
cljs$core$async$state_machine__48902__auto__ = function(state_50286){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48902__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48902__auto____1.call(this,state_50286);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__48902__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48902__auto____0;
cljs$core$async$state_machine__48902__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48902__auto____1;
return cljs$core$async$state_machine__48902__auto__;
})()
;})(switch__48901__auto__,c__48989__auto___50314,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__48991__auto__ = (function (){var statearr_50312 = f__48990__auto__.call(null);
(statearr_50312[(6)] = c__48989__auto___50314);

return statearr_50312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48991__auto__);
});})(c__48989__auto___50314,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__50334 = arguments.length;
switch (G__50334) {
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
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__48989__auto___50388 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48989__auto___50388,out){
return (function (){
var f__48990__auto__ = (function (){var switch__48901__auto__ = ((function (c__48989__auto___50388,out){
return (function (state_50366){
var state_val_50367 = (state_50366[(1)]);
if((state_val_50367 === (7))){
var inst_50346 = (state_50366[(7)]);
var inst_50345 = (state_50366[(8)]);
var inst_50345__$1 = (state_50366[(2)]);
var inst_50346__$1 = cljs.core.nth.call(null,inst_50345__$1,(0),null);
var inst_50347 = cljs.core.nth.call(null,inst_50345__$1,(1),null);
var inst_50348 = (inst_50346__$1 == null);
var state_50366__$1 = (function (){var statearr_50368 = state_50366;
(statearr_50368[(7)] = inst_50346__$1);

(statearr_50368[(9)] = inst_50347);

(statearr_50368[(8)] = inst_50345__$1);

return statearr_50368;
})();
if(cljs.core.truth_(inst_50348)){
var statearr_50369_50389 = state_50366__$1;
(statearr_50369_50389[(1)] = (8));

} else {
var statearr_50370_50390 = state_50366__$1;
(statearr_50370_50390[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50367 === (1))){
var inst_50335 = cljs.core.vec.call(null,chs);
var inst_50336 = inst_50335;
var state_50366__$1 = (function (){var statearr_50371 = state_50366;
(statearr_50371[(10)] = inst_50336);

return statearr_50371;
})();
var statearr_50372_50391 = state_50366__$1;
(statearr_50372_50391[(2)] = null);

(statearr_50372_50391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50367 === (4))){
var inst_50336 = (state_50366[(10)]);
var state_50366__$1 = state_50366;
return cljs.core.async.ioc_alts_BANG_.call(null,state_50366__$1,(7),inst_50336);
} else {
if((state_val_50367 === (6))){
var inst_50362 = (state_50366[(2)]);
var state_50366__$1 = state_50366;
var statearr_50373_50392 = state_50366__$1;
(statearr_50373_50392[(2)] = inst_50362);

(statearr_50373_50392[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50367 === (3))){
var inst_50364 = (state_50366[(2)]);
var state_50366__$1 = state_50366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50366__$1,inst_50364);
} else {
if((state_val_50367 === (2))){
var inst_50336 = (state_50366[(10)]);
var inst_50338 = cljs.core.count.call(null,inst_50336);
var inst_50339 = (inst_50338 > (0));
var state_50366__$1 = state_50366;
if(cljs.core.truth_(inst_50339)){
var statearr_50375_50393 = state_50366__$1;
(statearr_50375_50393[(1)] = (4));

} else {
var statearr_50376_50394 = state_50366__$1;
(statearr_50376_50394[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50367 === (11))){
var inst_50336 = (state_50366[(10)]);
var inst_50355 = (state_50366[(2)]);
var tmp50374 = inst_50336;
var inst_50336__$1 = tmp50374;
var state_50366__$1 = (function (){var statearr_50377 = state_50366;
(statearr_50377[(11)] = inst_50355);

(statearr_50377[(10)] = inst_50336__$1);

return statearr_50377;
})();
var statearr_50378_50395 = state_50366__$1;
(statearr_50378_50395[(2)] = null);

(statearr_50378_50395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50367 === (9))){
var inst_50346 = (state_50366[(7)]);
var state_50366__$1 = state_50366;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50366__$1,(11),out,inst_50346);
} else {
if((state_val_50367 === (5))){
var inst_50360 = cljs.core.async.close_BANG_.call(null,out);
var state_50366__$1 = state_50366;
var statearr_50379_50396 = state_50366__$1;
(statearr_50379_50396[(2)] = inst_50360);

(statearr_50379_50396[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50367 === (10))){
var inst_50358 = (state_50366[(2)]);
var state_50366__$1 = state_50366;
var statearr_50380_50397 = state_50366__$1;
(statearr_50380_50397[(2)] = inst_50358);

(statearr_50380_50397[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50367 === (8))){
var inst_50346 = (state_50366[(7)]);
var inst_50347 = (state_50366[(9)]);
var inst_50336 = (state_50366[(10)]);
var inst_50345 = (state_50366[(8)]);
var inst_50350 = (function (){var cs = inst_50336;
var vec__50341 = inst_50345;
var v = inst_50346;
var c = inst_50347;
return ((function (cs,vec__50341,v,c,inst_50346,inst_50347,inst_50336,inst_50345,state_val_50367,c__48989__auto___50388,out){
return (function (p1__50332_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__50332_SHARP_);
});
;})(cs,vec__50341,v,c,inst_50346,inst_50347,inst_50336,inst_50345,state_val_50367,c__48989__auto___50388,out))
})();
var inst_50351 = cljs.core.filterv.call(null,inst_50350,inst_50336);
var inst_50336__$1 = inst_50351;
var state_50366__$1 = (function (){var statearr_50381 = state_50366;
(statearr_50381[(10)] = inst_50336__$1);

return statearr_50381;
})();
var statearr_50382_50398 = state_50366__$1;
(statearr_50382_50398[(2)] = null);

(statearr_50382_50398[(1)] = (2));


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
});})(c__48989__auto___50388,out))
;
return ((function (switch__48901__auto__,c__48989__auto___50388,out){
return (function() {
var cljs$core$async$state_machine__48902__auto__ = null;
var cljs$core$async$state_machine__48902__auto____0 = (function (){
var statearr_50383 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50383[(0)] = cljs$core$async$state_machine__48902__auto__);

(statearr_50383[(1)] = (1));

return statearr_50383;
});
var cljs$core$async$state_machine__48902__auto____1 = (function (state_50366){
while(true){
var ret_value__48903__auto__ = (function (){try{while(true){
var result__48904__auto__ = switch__48901__auto__.call(null,state_50366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48904__auto__;
}
break;
}
}catch (e50384){if((e50384 instanceof Object)){
var ex__48905__auto__ = e50384;
var statearr_50385_50399 = state_50366;
(statearr_50385_50399[(5)] = ex__48905__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50384;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50400 = state_50366;
state_50366 = G__50400;
continue;
} else {
return ret_value__48903__auto__;
}
break;
}
});
cljs$core$async$state_machine__48902__auto__ = function(state_50366){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48902__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48902__auto____1.call(this,state_50366);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__48902__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48902__auto____0;
cljs$core$async$state_machine__48902__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48902__auto____1;
return cljs$core$async$state_machine__48902__auto__;
})()
;})(switch__48901__auto__,c__48989__auto___50388,out))
})();
var state__48991__auto__ = (function (){var statearr_50386 = f__48990__auto__.call(null);
(statearr_50386[(6)] = c__48989__auto___50388);

return statearr_50386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48991__auto__);
});})(c__48989__auto___50388,out))
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
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__50402 = arguments.length;
switch (G__50402) {
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
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__48989__auto___50447 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48989__auto___50447,out){
return (function (){
var f__48990__auto__ = (function (){var switch__48901__auto__ = ((function (c__48989__auto___50447,out){
return (function (state_50426){
var state_val_50427 = (state_50426[(1)]);
if((state_val_50427 === (7))){
var inst_50408 = (state_50426[(7)]);
var inst_50408__$1 = (state_50426[(2)]);
var inst_50409 = (inst_50408__$1 == null);
var inst_50410 = cljs.core.not.call(null,inst_50409);
var state_50426__$1 = (function (){var statearr_50428 = state_50426;
(statearr_50428[(7)] = inst_50408__$1);

return statearr_50428;
})();
if(inst_50410){
var statearr_50429_50448 = state_50426__$1;
(statearr_50429_50448[(1)] = (8));

} else {
var statearr_50430_50449 = state_50426__$1;
(statearr_50430_50449[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50427 === (1))){
var inst_50403 = (0);
var state_50426__$1 = (function (){var statearr_50431 = state_50426;
(statearr_50431[(8)] = inst_50403);

return statearr_50431;
})();
var statearr_50432_50450 = state_50426__$1;
(statearr_50432_50450[(2)] = null);

(statearr_50432_50450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50427 === (4))){
var state_50426__$1 = state_50426;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50426__$1,(7),ch);
} else {
if((state_val_50427 === (6))){
var inst_50421 = (state_50426[(2)]);
var state_50426__$1 = state_50426;
var statearr_50433_50451 = state_50426__$1;
(statearr_50433_50451[(2)] = inst_50421);

(statearr_50433_50451[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50427 === (3))){
var inst_50423 = (state_50426[(2)]);
var inst_50424 = cljs.core.async.close_BANG_.call(null,out);
var state_50426__$1 = (function (){var statearr_50434 = state_50426;
(statearr_50434[(9)] = inst_50423);

return statearr_50434;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50426__$1,inst_50424);
} else {
if((state_val_50427 === (2))){
var inst_50403 = (state_50426[(8)]);
var inst_50405 = (inst_50403 < n);
var state_50426__$1 = state_50426;
if(cljs.core.truth_(inst_50405)){
var statearr_50435_50452 = state_50426__$1;
(statearr_50435_50452[(1)] = (4));

} else {
var statearr_50436_50453 = state_50426__$1;
(statearr_50436_50453[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50427 === (11))){
var inst_50403 = (state_50426[(8)]);
var inst_50413 = (state_50426[(2)]);
var inst_50414 = (inst_50403 + (1));
var inst_50403__$1 = inst_50414;
var state_50426__$1 = (function (){var statearr_50437 = state_50426;
(statearr_50437[(10)] = inst_50413);

(statearr_50437[(8)] = inst_50403__$1);

return statearr_50437;
})();
var statearr_50438_50454 = state_50426__$1;
(statearr_50438_50454[(2)] = null);

(statearr_50438_50454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50427 === (9))){
var state_50426__$1 = state_50426;
var statearr_50439_50455 = state_50426__$1;
(statearr_50439_50455[(2)] = null);

(statearr_50439_50455[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50427 === (5))){
var state_50426__$1 = state_50426;
var statearr_50440_50456 = state_50426__$1;
(statearr_50440_50456[(2)] = null);

(statearr_50440_50456[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50427 === (10))){
var inst_50418 = (state_50426[(2)]);
var state_50426__$1 = state_50426;
var statearr_50441_50457 = state_50426__$1;
(statearr_50441_50457[(2)] = inst_50418);

(statearr_50441_50457[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50427 === (8))){
var inst_50408 = (state_50426[(7)]);
var state_50426__$1 = state_50426;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50426__$1,(11),out,inst_50408);
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
});})(c__48989__auto___50447,out))
;
return ((function (switch__48901__auto__,c__48989__auto___50447,out){
return (function() {
var cljs$core$async$state_machine__48902__auto__ = null;
var cljs$core$async$state_machine__48902__auto____0 = (function (){
var statearr_50442 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50442[(0)] = cljs$core$async$state_machine__48902__auto__);

(statearr_50442[(1)] = (1));

return statearr_50442;
});
var cljs$core$async$state_machine__48902__auto____1 = (function (state_50426){
while(true){
var ret_value__48903__auto__ = (function (){try{while(true){
var result__48904__auto__ = switch__48901__auto__.call(null,state_50426);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48904__auto__;
}
break;
}
}catch (e50443){if((e50443 instanceof Object)){
var ex__48905__auto__ = e50443;
var statearr_50444_50458 = state_50426;
(statearr_50444_50458[(5)] = ex__48905__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50443;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50459 = state_50426;
state_50426 = G__50459;
continue;
} else {
return ret_value__48903__auto__;
}
break;
}
});
cljs$core$async$state_machine__48902__auto__ = function(state_50426){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48902__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48902__auto____1.call(this,state_50426);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__48902__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48902__auto____0;
cljs$core$async$state_machine__48902__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48902__auto____1;
return cljs$core$async$state_machine__48902__auto__;
})()
;})(switch__48901__auto__,c__48989__auto___50447,out))
})();
var state__48991__auto__ = (function (){var statearr_50445 = f__48990__auto__.call(null);
(statearr_50445[(6)] = c__48989__auto___50447);

return statearr_50445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48991__auto__);
});})(c__48989__auto___50447,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async50461 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50461 = (function (f,ch,meta50462){
this.f = f;
this.ch = ch;
this.meta50462 = meta50462;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async50461.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50463,meta50462__$1){
var self__ = this;
var _50463__$1 = this;
return (new cljs.core.async.t_cljs$core$async50461(self__.f,self__.ch,meta50462__$1));
});

cljs.core.async.t_cljs$core$async50461.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50463){
var self__ = this;
var _50463__$1 = this;
return self__.meta50462;
});

cljs.core.async.t_cljs$core$async50461.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50461.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async50461.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async50461.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50461.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async50464 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50464 = (function (f,ch,meta50462,_,fn1,meta50465){
this.f = f;
this.ch = ch;
this.meta50462 = meta50462;
this._ = _;
this.fn1 = fn1;
this.meta50465 = meta50465;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async50464.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_50466,meta50465__$1){
var self__ = this;
var _50466__$1 = this;
return (new cljs.core.async.t_cljs$core$async50464(self__.f,self__.ch,self__.meta50462,self__._,self__.fn1,meta50465__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async50464.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_50466){
var self__ = this;
var _50466__$1 = this;
return self__.meta50465;
});})(___$1))
;

cljs.core.async.t_cljs$core$async50464.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50464.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async50464.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async50464.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__50460_SHARP_){
return f1.call(null,(((p1__50460_SHARP_ == null))?null:self__.f.call(null,p1__50460_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async50464.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta50462","meta50462",659857566,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async50461","cljs.core.async/t_cljs$core$async50461",-1233347401,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta50465","meta50465",-56074310,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async50464.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50464.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50464";

cljs.core.async.t_cljs$core$async50464.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__46520__auto__,writer__46521__auto__,opt__46522__auto__){
return cljs.core._write.call(null,writer__46521__auto__,"cljs.core.async/t_cljs$core$async50464");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async50464 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async50464(f__$1,ch__$1,meta50462__$1,___$2,fn1__$1,meta50465){
return (new cljs.core.async.t_cljs$core$async50464(f__$1,ch__$1,meta50462__$1,___$2,fn1__$1,meta50465));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async50464(self__.f,self__.ch,self__.meta50462,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__45897__auto__ = ret;
if(cljs.core.truth_(and__45897__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__45897__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async50461.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50461.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async50461.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta50462","meta50462",659857566,null)], null);
});

cljs.core.async.t_cljs$core$async50461.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50461.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50461";

cljs.core.async.t_cljs$core$async50461.cljs$lang$ctorPrWriter = (function (this__46520__auto__,writer__46521__auto__,opt__46522__auto__){
return cljs.core._write.call(null,writer__46521__auto__,"cljs.core.async/t_cljs$core$async50461");
});

cljs.core.async.__GT_t_cljs$core$async50461 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async50461(f__$1,ch__$1,meta50462){
return (new cljs.core.async.t_cljs$core$async50461(f__$1,ch__$1,meta50462));
});

}

return (new cljs.core.async.t_cljs$core$async50461(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async50467 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50467 = (function (f,ch,meta50468){
this.f = f;
this.ch = ch;
this.meta50468 = meta50468;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async50467.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50469,meta50468__$1){
var self__ = this;
var _50469__$1 = this;
return (new cljs.core.async.t_cljs$core$async50467(self__.f,self__.ch,meta50468__$1));
});

cljs.core.async.t_cljs$core$async50467.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50469){
var self__ = this;
var _50469__$1 = this;
return self__.meta50468;
});

cljs.core.async.t_cljs$core$async50467.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50467.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async50467.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50467.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async50467.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50467.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async50467.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta50468","meta50468",23726951,null)], null);
});

cljs.core.async.t_cljs$core$async50467.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50467.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50467";

cljs.core.async.t_cljs$core$async50467.cljs$lang$ctorPrWriter = (function (this__46520__auto__,writer__46521__auto__,opt__46522__auto__){
return cljs.core._write.call(null,writer__46521__auto__,"cljs.core.async/t_cljs$core$async50467");
});

cljs.core.async.__GT_t_cljs$core$async50467 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async50467(f__$1,ch__$1,meta50468){
return (new cljs.core.async.t_cljs$core$async50467(f__$1,ch__$1,meta50468));
});

}

return (new cljs.core.async.t_cljs$core$async50467(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async50470 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50470 = (function (p,ch,meta50471){
this.p = p;
this.ch = ch;
this.meta50471 = meta50471;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async50470.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50472,meta50471__$1){
var self__ = this;
var _50472__$1 = this;
return (new cljs.core.async.t_cljs$core$async50470(self__.p,self__.ch,meta50471__$1));
});

cljs.core.async.t_cljs$core$async50470.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50472){
var self__ = this;
var _50472__$1 = this;
return self__.meta50471;
});

cljs.core.async.t_cljs$core$async50470.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50470.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async50470.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async50470.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50470.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async50470.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async50470.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async50470.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta50471","meta50471",-1461464195,null)], null);
});

cljs.core.async.t_cljs$core$async50470.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50470.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50470";

cljs.core.async.t_cljs$core$async50470.cljs$lang$ctorPrWriter = (function (this__46520__auto__,writer__46521__auto__,opt__46522__auto__){
return cljs.core._write.call(null,writer__46521__auto__,"cljs.core.async/t_cljs$core$async50470");
});

cljs.core.async.__GT_t_cljs$core$async50470 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async50470(p__$1,ch__$1,meta50471){
return (new cljs.core.async.t_cljs$core$async50470(p__$1,ch__$1,meta50471));
});

}

return (new cljs.core.async.t_cljs$core$async50470(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__50474 = arguments.length;
switch (G__50474) {
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
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__48989__auto___50514 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48989__auto___50514,out){
return (function (){
var f__48990__auto__ = (function (){var switch__48901__auto__ = ((function (c__48989__auto___50514,out){
return (function (state_50495){
var state_val_50496 = (state_50495[(1)]);
if((state_val_50496 === (7))){
var inst_50491 = (state_50495[(2)]);
var state_50495__$1 = state_50495;
var statearr_50497_50515 = state_50495__$1;
(statearr_50497_50515[(2)] = inst_50491);

(statearr_50497_50515[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50496 === (1))){
var state_50495__$1 = state_50495;
var statearr_50498_50516 = state_50495__$1;
(statearr_50498_50516[(2)] = null);

(statearr_50498_50516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50496 === (4))){
var inst_50477 = (state_50495[(7)]);
var inst_50477__$1 = (state_50495[(2)]);
var inst_50478 = (inst_50477__$1 == null);
var state_50495__$1 = (function (){var statearr_50499 = state_50495;
(statearr_50499[(7)] = inst_50477__$1);

return statearr_50499;
})();
if(cljs.core.truth_(inst_50478)){
var statearr_50500_50517 = state_50495__$1;
(statearr_50500_50517[(1)] = (5));

} else {
var statearr_50501_50518 = state_50495__$1;
(statearr_50501_50518[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50496 === (6))){
var inst_50477 = (state_50495[(7)]);
var inst_50482 = p.call(null,inst_50477);
var state_50495__$1 = state_50495;
if(cljs.core.truth_(inst_50482)){
var statearr_50502_50519 = state_50495__$1;
(statearr_50502_50519[(1)] = (8));

} else {
var statearr_50503_50520 = state_50495__$1;
(statearr_50503_50520[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50496 === (3))){
var inst_50493 = (state_50495[(2)]);
var state_50495__$1 = state_50495;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50495__$1,inst_50493);
} else {
if((state_val_50496 === (2))){
var state_50495__$1 = state_50495;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50495__$1,(4),ch);
} else {
if((state_val_50496 === (11))){
var inst_50485 = (state_50495[(2)]);
var state_50495__$1 = state_50495;
var statearr_50504_50521 = state_50495__$1;
(statearr_50504_50521[(2)] = inst_50485);

(statearr_50504_50521[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50496 === (9))){
var state_50495__$1 = state_50495;
var statearr_50505_50522 = state_50495__$1;
(statearr_50505_50522[(2)] = null);

(statearr_50505_50522[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50496 === (5))){
var inst_50480 = cljs.core.async.close_BANG_.call(null,out);
var state_50495__$1 = state_50495;
var statearr_50506_50523 = state_50495__$1;
(statearr_50506_50523[(2)] = inst_50480);

(statearr_50506_50523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50496 === (10))){
var inst_50488 = (state_50495[(2)]);
var state_50495__$1 = (function (){var statearr_50507 = state_50495;
(statearr_50507[(8)] = inst_50488);

return statearr_50507;
})();
var statearr_50508_50524 = state_50495__$1;
(statearr_50508_50524[(2)] = null);

(statearr_50508_50524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50496 === (8))){
var inst_50477 = (state_50495[(7)]);
var state_50495__$1 = state_50495;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50495__$1,(11),out,inst_50477);
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
});})(c__48989__auto___50514,out))
;
return ((function (switch__48901__auto__,c__48989__auto___50514,out){
return (function() {
var cljs$core$async$state_machine__48902__auto__ = null;
var cljs$core$async$state_machine__48902__auto____0 = (function (){
var statearr_50509 = [null,null,null,null,null,null,null,null,null];
(statearr_50509[(0)] = cljs$core$async$state_machine__48902__auto__);

(statearr_50509[(1)] = (1));

return statearr_50509;
});
var cljs$core$async$state_machine__48902__auto____1 = (function (state_50495){
while(true){
var ret_value__48903__auto__ = (function (){try{while(true){
var result__48904__auto__ = switch__48901__auto__.call(null,state_50495);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48904__auto__;
}
break;
}
}catch (e50510){if((e50510 instanceof Object)){
var ex__48905__auto__ = e50510;
var statearr_50511_50525 = state_50495;
(statearr_50511_50525[(5)] = ex__48905__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50495);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50510;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50526 = state_50495;
state_50495 = G__50526;
continue;
} else {
return ret_value__48903__auto__;
}
break;
}
});
cljs$core$async$state_machine__48902__auto__ = function(state_50495){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48902__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48902__auto____1.call(this,state_50495);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__48902__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48902__auto____0;
cljs$core$async$state_machine__48902__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48902__auto____1;
return cljs$core$async$state_machine__48902__auto__;
})()
;})(switch__48901__auto__,c__48989__auto___50514,out))
})();
var state__48991__auto__ = (function (){var statearr_50512 = f__48990__auto__.call(null);
(statearr_50512[(6)] = c__48989__auto___50514);

return statearr_50512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48991__auto__);
});})(c__48989__auto___50514,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__50528 = arguments.length;
switch (G__50528) {
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
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__48989__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48989__auto__){
return (function (){
var f__48990__auto__ = (function (){var switch__48901__auto__ = ((function (c__48989__auto__){
return (function (state_50591){
var state_val_50592 = (state_50591[(1)]);
if((state_val_50592 === (7))){
var inst_50587 = (state_50591[(2)]);
var state_50591__$1 = state_50591;
var statearr_50593_50631 = state_50591__$1;
(statearr_50593_50631[(2)] = inst_50587);

(statearr_50593_50631[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50592 === (20))){
var inst_50557 = (state_50591[(7)]);
var inst_50568 = (state_50591[(2)]);
var inst_50569 = cljs.core.next.call(null,inst_50557);
var inst_50543 = inst_50569;
var inst_50544 = null;
var inst_50545 = (0);
var inst_50546 = (0);
var state_50591__$1 = (function (){var statearr_50594 = state_50591;
(statearr_50594[(8)] = inst_50544);

(statearr_50594[(9)] = inst_50568);

(statearr_50594[(10)] = inst_50543);

(statearr_50594[(11)] = inst_50546);

(statearr_50594[(12)] = inst_50545);

return statearr_50594;
})();
var statearr_50595_50632 = state_50591__$1;
(statearr_50595_50632[(2)] = null);

(statearr_50595_50632[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50592 === (1))){
var state_50591__$1 = state_50591;
var statearr_50596_50633 = state_50591__$1;
(statearr_50596_50633[(2)] = null);

(statearr_50596_50633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50592 === (4))){
var inst_50532 = (state_50591[(13)]);
var inst_50532__$1 = (state_50591[(2)]);
var inst_50533 = (inst_50532__$1 == null);
var state_50591__$1 = (function (){var statearr_50597 = state_50591;
(statearr_50597[(13)] = inst_50532__$1);

return statearr_50597;
})();
if(cljs.core.truth_(inst_50533)){
var statearr_50598_50634 = state_50591__$1;
(statearr_50598_50634[(1)] = (5));

} else {
var statearr_50599_50635 = state_50591__$1;
(statearr_50599_50635[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50592 === (15))){
var state_50591__$1 = state_50591;
var statearr_50603_50636 = state_50591__$1;
(statearr_50603_50636[(2)] = null);

(statearr_50603_50636[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50592 === (21))){
var state_50591__$1 = state_50591;
var statearr_50604_50637 = state_50591__$1;
(statearr_50604_50637[(2)] = null);

(statearr_50604_50637[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50592 === (13))){
var inst_50544 = (state_50591[(8)]);
var inst_50543 = (state_50591[(10)]);
var inst_50546 = (state_50591[(11)]);
var inst_50545 = (state_50591[(12)]);
var inst_50553 = (state_50591[(2)]);
var inst_50554 = (inst_50546 + (1));
var tmp50600 = inst_50544;
var tmp50601 = inst_50543;
var tmp50602 = inst_50545;
var inst_50543__$1 = tmp50601;
var inst_50544__$1 = tmp50600;
var inst_50545__$1 = tmp50602;
var inst_50546__$1 = inst_50554;
var state_50591__$1 = (function (){var statearr_50605 = state_50591;
(statearr_50605[(8)] = inst_50544__$1);

(statearr_50605[(10)] = inst_50543__$1);

(statearr_50605[(11)] = inst_50546__$1);

(statearr_50605[(14)] = inst_50553);

(statearr_50605[(12)] = inst_50545__$1);

return statearr_50605;
})();
var statearr_50606_50638 = state_50591__$1;
(statearr_50606_50638[(2)] = null);

(statearr_50606_50638[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50592 === (22))){
var state_50591__$1 = state_50591;
var statearr_50607_50639 = state_50591__$1;
(statearr_50607_50639[(2)] = null);

(statearr_50607_50639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50592 === (6))){
var inst_50532 = (state_50591[(13)]);
var inst_50541 = f.call(null,inst_50532);
var inst_50542 = cljs.core.seq.call(null,inst_50541);
var inst_50543 = inst_50542;
var inst_50544 = null;
var inst_50545 = (0);
var inst_50546 = (0);
var state_50591__$1 = (function (){var statearr_50608 = state_50591;
(statearr_50608[(8)] = inst_50544);

(statearr_50608[(10)] = inst_50543);

(statearr_50608[(11)] = inst_50546);

(statearr_50608[(12)] = inst_50545);

return statearr_50608;
})();
var statearr_50609_50640 = state_50591__$1;
(statearr_50609_50640[(2)] = null);

(statearr_50609_50640[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50592 === (17))){
var inst_50557 = (state_50591[(7)]);
var inst_50561 = cljs.core.chunk_first.call(null,inst_50557);
var inst_50562 = cljs.core.chunk_rest.call(null,inst_50557);
var inst_50563 = cljs.core.count.call(null,inst_50561);
var inst_50543 = inst_50562;
var inst_50544 = inst_50561;
var inst_50545 = inst_50563;
var inst_50546 = (0);
var state_50591__$1 = (function (){var statearr_50610 = state_50591;
(statearr_50610[(8)] = inst_50544);

(statearr_50610[(10)] = inst_50543);

(statearr_50610[(11)] = inst_50546);

(statearr_50610[(12)] = inst_50545);

return statearr_50610;
})();
var statearr_50611_50641 = state_50591__$1;
(statearr_50611_50641[(2)] = null);

(statearr_50611_50641[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50592 === (3))){
var inst_50589 = (state_50591[(2)]);
var state_50591__$1 = state_50591;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50591__$1,inst_50589);
} else {
if((state_val_50592 === (12))){
var inst_50577 = (state_50591[(2)]);
var state_50591__$1 = state_50591;
var statearr_50612_50642 = state_50591__$1;
(statearr_50612_50642[(2)] = inst_50577);

(statearr_50612_50642[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50592 === (2))){
var state_50591__$1 = state_50591;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50591__$1,(4),in$);
} else {
if((state_val_50592 === (23))){
var inst_50585 = (state_50591[(2)]);
var state_50591__$1 = state_50591;
var statearr_50613_50643 = state_50591__$1;
(statearr_50613_50643[(2)] = inst_50585);

(statearr_50613_50643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50592 === (19))){
var inst_50572 = (state_50591[(2)]);
var state_50591__$1 = state_50591;
var statearr_50614_50644 = state_50591__$1;
(statearr_50614_50644[(2)] = inst_50572);

(statearr_50614_50644[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50592 === (11))){
var inst_50557 = (state_50591[(7)]);
var inst_50543 = (state_50591[(10)]);
var inst_50557__$1 = cljs.core.seq.call(null,inst_50543);
var state_50591__$1 = (function (){var statearr_50615 = state_50591;
(statearr_50615[(7)] = inst_50557__$1);

return statearr_50615;
})();
if(inst_50557__$1){
var statearr_50616_50645 = state_50591__$1;
(statearr_50616_50645[(1)] = (14));

} else {
var statearr_50617_50646 = state_50591__$1;
(statearr_50617_50646[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50592 === (9))){
var inst_50579 = (state_50591[(2)]);
var inst_50580 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_50591__$1 = (function (){var statearr_50618 = state_50591;
(statearr_50618[(15)] = inst_50579);

return statearr_50618;
})();
if(cljs.core.truth_(inst_50580)){
var statearr_50619_50647 = state_50591__$1;
(statearr_50619_50647[(1)] = (21));

} else {
var statearr_50620_50648 = state_50591__$1;
(statearr_50620_50648[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50592 === (5))){
var inst_50535 = cljs.core.async.close_BANG_.call(null,out);
var state_50591__$1 = state_50591;
var statearr_50621_50649 = state_50591__$1;
(statearr_50621_50649[(2)] = inst_50535);

(statearr_50621_50649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50592 === (14))){
var inst_50557 = (state_50591[(7)]);
var inst_50559 = cljs.core.chunked_seq_QMARK_.call(null,inst_50557);
var state_50591__$1 = state_50591;
if(inst_50559){
var statearr_50622_50650 = state_50591__$1;
(statearr_50622_50650[(1)] = (17));

} else {
var statearr_50623_50651 = state_50591__$1;
(statearr_50623_50651[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50592 === (16))){
var inst_50575 = (state_50591[(2)]);
var state_50591__$1 = state_50591;
var statearr_50624_50652 = state_50591__$1;
(statearr_50624_50652[(2)] = inst_50575);

(statearr_50624_50652[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50592 === (10))){
var inst_50544 = (state_50591[(8)]);
var inst_50546 = (state_50591[(11)]);
var inst_50551 = cljs.core._nth.call(null,inst_50544,inst_50546);
var state_50591__$1 = state_50591;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50591__$1,(13),out,inst_50551);
} else {
if((state_val_50592 === (18))){
var inst_50557 = (state_50591[(7)]);
var inst_50566 = cljs.core.first.call(null,inst_50557);
var state_50591__$1 = state_50591;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50591__$1,(20),out,inst_50566);
} else {
if((state_val_50592 === (8))){
var inst_50546 = (state_50591[(11)]);
var inst_50545 = (state_50591[(12)]);
var inst_50548 = (inst_50546 < inst_50545);
var inst_50549 = inst_50548;
var state_50591__$1 = state_50591;
if(cljs.core.truth_(inst_50549)){
var statearr_50625_50653 = state_50591__$1;
(statearr_50625_50653[(1)] = (10));

} else {
var statearr_50626_50654 = state_50591__$1;
(statearr_50626_50654[(1)] = (11));

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
});})(c__48989__auto__))
;
return ((function (switch__48901__auto__,c__48989__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__48902__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__48902__auto____0 = (function (){
var statearr_50627 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50627[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__48902__auto__);

(statearr_50627[(1)] = (1));

return statearr_50627;
});
var cljs$core$async$mapcat_STAR__$_state_machine__48902__auto____1 = (function (state_50591){
while(true){
var ret_value__48903__auto__ = (function (){try{while(true){
var result__48904__auto__ = switch__48901__auto__.call(null,state_50591);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48904__auto__;
}
break;
}
}catch (e50628){if((e50628 instanceof Object)){
var ex__48905__auto__ = e50628;
var statearr_50629_50655 = state_50591;
(statearr_50629_50655[(5)] = ex__48905__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50591);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50628;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50656 = state_50591;
state_50591 = G__50656;
continue;
} else {
return ret_value__48903__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__48902__auto__ = function(state_50591){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__48902__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__48902__auto____1.call(this,state_50591);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__48902__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__48902__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__48902__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__48902__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__48902__auto__;
})()
;})(switch__48901__auto__,c__48989__auto__))
})();
var state__48991__auto__ = (function (){var statearr_50630 = f__48990__auto__.call(null);
(statearr_50630[(6)] = c__48989__auto__);

return statearr_50630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48991__auto__);
});})(c__48989__auto__))
);

return c__48989__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__50658 = arguments.length;
switch (G__50658) {
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
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__50661 = arguments.length;
switch (G__50661) {
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
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__50664 = arguments.length;
switch (G__50664) {
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
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__48989__auto___50711 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48989__auto___50711,out){
return (function (){
var f__48990__auto__ = (function (){var switch__48901__auto__ = ((function (c__48989__auto___50711,out){
return (function (state_50688){
var state_val_50689 = (state_50688[(1)]);
if((state_val_50689 === (7))){
var inst_50683 = (state_50688[(2)]);
var state_50688__$1 = state_50688;
var statearr_50690_50712 = state_50688__$1;
(statearr_50690_50712[(2)] = inst_50683);

(statearr_50690_50712[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50689 === (1))){
var inst_50665 = null;
var state_50688__$1 = (function (){var statearr_50691 = state_50688;
(statearr_50691[(7)] = inst_50665);

return statearr_50691;
})();
var statearr_50692_50713 = state_50688__$1;
(statearr_50692_50713[(2)] = null);

(statearr_50692_50713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50689 === (4))){
var inst_50668 = (state_50688[(8)]);
var inst_50668__$1 = (state_50688[(2)]);
var inst_50669 = (inst_50668__$1 == null);
var inst_50670 = cljs.core.not.call(null,inst_50669);
var state_50688__$1 = (function (){var statearr_50693 = state_50688;
(statearr_50693[(8)] = inst_50668__$1);

return statearr_50693;
})();
if(inst_50670){
var statearr_50694_50714 = state_50688__$1;
(statearr_50694_50714[(1)] = (5));

} else {
var statearr_50695_50715 = state_50688__$1;
(statearr_50695_50715[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50689 === (6))){
var state_50688__$1 = state_50688;
var statearr_50696_50716 = state_50688__$1;
(statearr_50696_50716[(2)] = null);

(statearr_50696_50716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50689 === (3))){
var inst_50685 = (state_50688[(2)]);
var inst_50686 = cljs.core.async.close_BANG_.call(null,out);
var state_50688__$1 = (function (){var statearr_50697 = state_50688;
(statearr_50697[(9)] = inst_50685);

return statearr_50697;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50688__$1,inst_50686);
} else {
if((state_val_50689 === (2))){
var state_50688__$1 = state_50688;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50688__$1,(4),ch);
} else {
if((state_val_50689 === (11))){
var inst_50668 = (state_50688[(8)]);
var inst_50677 = (state_50688[(2)]);
var inst_50665 = inst_50668;
var state_50688__$1 = (function (){var statearr_50698 = state_50688;
(statearr_50698[(7)] = inst_50665);

(statearr_50698[(10)] = inst_50677);

return statearr_50698;
})();
var statearr_50699_50717 = state_50688__$1;
(statearr_50699_50717[(2)] = null);

(statearr_50699_50717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50689 === (9))){
var inst_50668 = (state_50688[(8)]);
var state_50688__$1 = state_50688;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50688__$1,(11),out,inst_50668);
} else {
if((state_val_50689 === (5))){
var inst_50665 = (state_50688[(7)]);
var inst_50668 = (state_50688[(8)]);
var inst_50672 = cljs.core._EQ_.call(null,inst_50668,inst_50665);
var state_50688__$1 = state_50688;
if(inst_50672){
var statearr_50701_50718 = state_50688__$1;
(statearr_50701_50718[(1)] = (8));

} else {
var statearr_50702_50719 = state_50688__$1;
(statearr_50702_50719[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50689 === (10))){
var inst_50680 = (state_50688[(2)]);
var state_50688__$1 = state_50688;
var statearr_50703_50720 = state_50688__$1;
(statearr_50703_50720[(2)] = inst_50680);

(statearr_50703_50720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50689 === (8))){
var inst_50665 = (state_50688[(7)]);
var tmp50700 = inst_50665;
var inst_50665__$1 = tmp50700;
var state_50688__$1 = (function (){var statearr_50704 = state_50688;
(statearr_50704[(7)] = inst_50665__$1);

return statearr_50704;
})();
var statearr_50705_50721 = state_50688__$1;
(statearr_50705_50721[(2)] = null);

(statearr_50705_50721[(1)] = (2));


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
});})(c__48989__auto___50711,out))
;
return ((function (switch__48901__auto__,c__48989__auto___50711,out){
return (function() {
var cljs$core$async$state_machine__48902__auto__ = null;
var cljs$core$async$state_machine__48902__auto____0 = (function (){
var statearr_50706 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50706[(0)] = cljs$core$async$state_machine__48902__auto__);

(statearr_50706[(1)] = (1));

return statearr_50706;
});
var cljs$core$async$state_machine__48902__auto____1 = (function (state_50688){
while(true){
var ret_value__48903__auto__ = (function (){try{while(true){
var result__48904__auto__ = switch__48901__auto__.call(null,state_50688);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48904__auto__;
}
break;
}
}catch (e50707){if((e50707 instanceof Object)){
var ex__48905__auto__ = e50707;
var statearr_50708_50722 = state_50688;
(statearr_50708_50722[(5)] = ex__48905__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50688);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50707;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50723 = state_50688;
state_50688 = G__50723;
continue;
} else {
return ret_value__48903__auto__;
}
break;
}
});
cljs$core$async$state_machine__48902__auto__ = function(state_50688){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48902__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48902__auto____1.call(this,state_50688);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__48902__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48902__auto____0;
cljs$core$async$state_machine__48902__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48902__auto____1;
return cljs$core$async$state_machine__48902__auto__;
})()
;})(switch__48901__auto__,c__48989__auto___50711,out))
})();
var state__48991__auto__ = (function (){var statearr_50709 = f__48990__auto__.call(null);
(statearr_50709[(6)] = c__48989__auto___50711);

return statearr_50709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48991__auto__);
});})(c__48989__auto___50711,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__50725 = arguments.length;
switch (G__50725) {
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
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__48989__auto___50791 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48989__auto___50791,out){
return (function (){
var f__48990__auto__ = (function (){var switch__48901__auto__ = ((function (c__48989__auto___50791,out){
return (function (state_50763){
var state_val_50764 = (state_50763[(1)]);
if((state_val_50764 === (7))){
var inst_50759 = (state_50763[(2)]);
var state_50763__$1 = state_50763;
var statearr_50765_50792 = state_50763__$1;
(statearr_50765_50792[(2)] = inst_50759);

(statearr_50765_50792[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50764 === (1))){
var inst_50726 = (new Array(n));
var inst_50727 = inst_50726;
var inst_50728 = (0);
var state_50763__$1 = (function (){var statearr_50766 = state_50763;
(statearr_50766[(7)] = inst_50728);

(statearr_50766[(8)] = inst_50727);

return statearr_50766;
})();
var statearr_50767_50793 = state_50763__$1;
(statearr_50767_50793[(2)] = null);

(statearr_50767_50793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50764 === (4))){
var inst_50731 = (state_50763[(9)]);
var inst_50731__$1 = (state_50763[(2)]);
var inst_50732 = (inst_50731__$1 == null);
var inst_50733 = cljs.core.not.call(null,inst_50732);
var state_50763__$1 = (function (){var statearr_50768 = state_50763;
(statearr_50768[(9)] = inst_50731__$1);

return statearr_50768;
})();
if(inst_50733){
var statearr_50769_50794 = state_50763__$1;
(statearr_50769_50794[(1)] = (5));

} else {
var statearr_50770_50795 = state_50763__$1;
(statearr_50770_50795[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50764 === (15))){
var inst_50753 = (state_50763[(2)]);
var state_50763__$1 = state_50763;
var statearr_50771_50796 = state_50763__$1;
(statearr_50771_50796[(2)] = inst_50753);

(statearr_50771_50796[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50764 === (13))){
var state_50763__$1 = state_50763;
var statearr_50772_50797 = state_50763__$1;
(statearr_50772_50797[(2)] = null);

(statearr_50772_50797[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50764 === (6))){
var inst_50728 = (state_50763[(7)]);
var inst_50749 = (inst_50728 > (0));
var state_50763__$1 = state_50763;
if(cljs.core.truth_(inst_50749)){
var statearr_50773_50798 = state_50763__$1;
(statearr_50773_50798[(1)] = (12));

} else {
var statearr_50774_50799 = state_50763__$1;
(statearr_50774_50799[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50764 === (3))){
var inst_50761 = (state_50763[(2)]);
var state_50763__$1 = state_50763;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50763__$1,inst_50761);
} else {
if((state_val_50764 === (12))){
var inst_50727 = (state_50763[(8)]);
var inst_50751 = cljs.core.vec.call(null,inst_50727);
var state_50763__$1 = state_50763;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50763__$1,(15),out,inst_50751);
} else {
if((state_val_50764 === (2))){
var state_50763__$1 = state_50763;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50763__$1,(4),ch);
} else {
if((state_val_50764 === (11))){
var inst_50743 = (state_50763[(2)]);
var inst_50744 = (new Array(n));
var inst_50727 = inst_50744;
var inst_50728 = (0);
var state_50763__$1 = (function (){var statearr_50775 = state_50763;
(statearr_50775[(7)] = inst_50728);

(statearr_50775[(8)] = inst_50727);

(statearr_50775[(10)] = inst_50743);

return statearr_50775;
})();
var statearr_50776_50800 = state_50763__$1;
(statearr_50776_50800[(2)] = null);

(statearr_50776_50800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50764 === (9))){
var inst_50727 = (state_50763[(8)]);
var inst_50741 = cljs.core.vec.call(null,inst_50727);
var state_50763__$1 = state_50763;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50763__$1,(11),out,inst_50741);
} else {
if((state_val_50764 === (5))){
var inst_50731 = (state_50763[(9)]);
var inst_50728 = (state_50763[(7)]);
var inst_50727 = (state_50763[(8)]);
var inst_50736 = (state_50763[(11)]);
var inst_50735 = (inst_50727[inst_50728] = inst_50731);
var inst_50736__$1 = (inst_50728 + (1));
var inst_50737 = (inst_50736__$1 < n);
var state_50763__$1 = (function (){var statearr_50777 = state_50763;
(statearr_50777[(12)] = inst_50735);

(statearr_50777[(11)] = inst_50736__$1);

return statearr_50777;
})();
if(cljs.core.truth_(inst_50737)){
var statearr_50778_50801 = state_50763__$1;
(statearr_50778_50801[(1)] = (8));

} else {
var statearr_50779_50802 = state_50763__$1;
(statearr_50779_50802[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50764 === (14))){
var inst_50756 = (state_50763[(2)]);
var inst_50757 = cljs.core.async.close_BANG_.call(null,out);
var state_50763__$1 = (function (){var statearr_50781 = state_50763;
(statearr_50781[(13)] = inst_50756);

return statearr_50781;
})();
var statearr_50782_50803 = state_50763__$1;
(statearr_50782_50803[(2)] = inst_50757);

(statearr_50782_50803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50764 === (10))){
var inst_50747 = (state_50763[(2)]);
var state_50763__$1 = state_50763;
var statearr_50783_50804 = state_50763__$1;
(statearr_50783_50804[(2)] = inst_50747);

(statearr_50783_50804[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50764 === (8))){
var inst_50727 = (state_50763[(8)]);
var inst_50736 = (state_50763[(11)]);
var tmp50780 = inst_50727;
var inst_50727__$1 = tmp50780;
var inst_50728 = inst_50736;
var state_50763__$1 = (function (){var statearr_50784 = state_50763;
(statearr_50784[(7)] = inst_50728);

(statearr_50784[(8)] = inst_50727__$1);

return statearr_50784;
})();
var statearr_50785_50805 = state_50763__$1;
(statearr_50785_50805[(2)] = null);

(statearr_50785_50805[(1)] = (2));


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
});})(c__48989__auto___50791,out))
;
return ((function (switch__48901__auto__,c__48989__auto___50791,out){
return (function() {
var cljs$core$async$state_machine__48902__auto__ = null;
var cljs$core$async$state_machine__48902__auto____0 = (function (){
var statearr_50786 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50786[(0)] = cljs$core$async$state_machine__48902__auto__);

(statearr_50786[(1)] = (1));

return statearr_50786;
});
var cljs$core$async$state_machine__48902__auto____1 = (function (state_50763){
while(true){
var ret_value__48903__auto__ = (function (){try{while(true){
var result__48904__auto__ = switch__48901__auto__.call(null,state_50763);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48904__auto__;
}
break;
}
}catch (e50787){if((e50787 instanceof Object)){
var ex__48905__auto__ = e50787;
var statearr_50788_50806 = state_50763;
(statearr_50788_50806[(5)] = ex__48905__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50763);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50787;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50807 = state_50763;
state_50763 = G__50807;
continue;
} else {
return ret_value__48903__auto__;
}
break;
}
});
cljs$core$async$state_machine__48902__auto__ = function(state_50763){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48902__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48902__auto____1.call(this,state_50763);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__48902__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48902__auto____0;
cljs$core$async$state_machine__48902__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48902__auto____1;
return cljs$core$async$state_machine__48902__auto__;
})()
;})(switch__48901__auto__,c__48989__auto___50791,out))
})();
var state__48991__auto__ = (function (){var statearr_50789 = f__48990__auto__.call(null);
(statearr_50789[(6)] = c__48989__auto___50791);

return statearr_50789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48991__auto__);
});})(c__48989__auto___50791,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__50809 = arguments.length;
switch (G__50809) {
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
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__48989__auto___50879 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48989__auto___50879,out){
return (function (){
var f__48990__auto__ = (function (){var switch__48901__auto__ = ((function (c__48989__auto___50879,out){
return (function (state_50851){
var state_val_50852 = (state_50851[(1)]);
if((state_val_50852 === (7))){
var inst_50847 = (state_50851[(2)]);
var state_50851__$1 = state_50851;
var statearr_50853_50880 = state_50851__$1;
(statearr_50853_50880[(2)] = inst_50847);

(statearr_50853_50880[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50852 === (1))){
var inst_50810 = [];
var inst_50811 = inst_50810;
var inst_50812 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_50851__$1 = (function (){var statearr_50854 = state_50851;
(statearr_50854[(7)] = inst_50812);

(statearr_50854[(8)] = inst_50811);

return statearr_50854;
})();
var statearr_50855_50881 = state_50851__$1;
(statearr_50855_50881[(2)] = null);

(statearr_50855_50881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50852 === (4))){
var inst_50815 = (state_50851[(9)]);
var inst_50815__$1 = (state_50851[(2)]);
var inst_50816 = (inst_50815__$1 == null);
var inst_50817 = cljs.core.not.call(null,inst_50816);
var state_50851__$1 = (function (){var statearr_50856 = state_50851;
(statearr_50856[(9)] = inst_50815__$1);

return statearr_50856;
})();
if(inst_50817){
var statearr_50857_50882 = state_50851__$1;
(statearr_50857_50882[(1)] = (5));

} else {
var statearr_50858_50883 = state_50851__$1;
(statearr_50858_50883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50852 === (15))){
var inst_50841 = (state_50851[(2)]);
var state_50851__$1 = state_50851;
var statearr_50859_50884 = state_50851__$1;
(statearr_50859_50884[(2)] = inst_50841);

(statearr_50859_50884[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50852 === (13))){
var state_50851__$1 = state_50851;
var statearr_50860_50885 = state_50851__$1;
(statearr_50860_50885[(2)] = null);

(statearr_50860_50885[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50852 === (6))){
var inst_50811 = (state_50851[(8)]);
var inst_50836 = inst_50811.length;
var inst_50837 = (inst_50836 > (0));
var state_50851__$1 = state_50851;
if(cljs.core.truth_(inst_50837)){
var statearr_50861_50886 = state_50851__$1;
(statearr_50861_50886[(1)] = (12));

} else {
var statearr_50862_50887 = state_50851__$1;
(statearr_50862_50887[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50852 === (3))){
var inst_50849 = (state_50851[(2)]);
var state_50851__$1 = state_50851;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50851__$1,inst_50849);
} else {
if((state_val_50852 === (12))){
var inst_50811 = (state_50851[(8)]);
var inst_50839 = cljs.core.vec.call(null,inst_50811);
var state_50851__$1 = state_50851;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50851__$1,(15),out,inst_50839);
} else {
if((state_val_50852 === (2))){
var state_50851__$1 = state_50851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50851__$1,(4),ch);
} else {
if((state_val_50852 === (11))){
var inst_50815 = (state_50851[(9)]);
var inst_50819 = (state_50851[(10)]);
var inst_50829 = (state_50851[(2)]);
var inst_50830 = [];
var inst_50831 = inst_50830.push(inst_50815);
var inst_50811 = inst_50830;
var inst_50812 = inst_50819;
var state_50851__$1 = (function (){var statearr_50863 = state_50851;
(statearr_50863[(7)] = inst_50812);

(statearr_50863[(8)] = inst_50811);

(statearr_50863[(11)] = inst_50829);

(statearr_50863[(12)] = inst_50831);

return statearr_50863;
})();
var statearr_50864_50888 = state_50851__$1;
(statearr_50864_50888[(2)] = null);

(statearr_50864_50888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50852 === (9))){
var inst_50811 = (state_50851[(8)]);
var inst_50827 = cljs.core.vec.call(null,inst_50811);
var state_50851__$1 = state_50851;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50851__$1,(11),out,inst_50827);
} else {
if((state_val_50852 === (5))){
var inst_50815 = (state_50851[(9)]);
var inst_50812 = (state_50851[(7)]);
var inst_50819 = (state_50851[(10)]);
var inst_50819__$1 = f.call(null,inst_50815);
var inst_50820 = cljs.core._EQ_.call(null,inst_50819__$1,inst_50812);
var inst_50821 = cljs.core.keyword_identical_QMARK_.call(null,inst_50812,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_50822 = (inst_50820) || (inst_50821);
var state_50851__$1 = (function (){var statearr_50865 = state_50851;
(statearr_50865[(10)] = inst_50819__$1);

return statearr_50865;
})();
if(cljs.core.truth_(inst_50822)){
var statearr_50866_50889 = state_50851__$1;
(statearr_50866_50889[(1)] = (8));

} else {
var statearr_50867_50890 = state_50851__$1;
(statearr_50867_50890[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50852 === (14))){
var inst_50844 = (state_50851[(2)]);
var inst_50845 = cljs.core.async.close_BANG_.call(null,out);
var state_50851__$1 = (function (){var statearr_50869 = state_50851;
(statearr_50869[(13)] = inst_50844);

return statearr_50869;
})();
var statearr_50870_50891 = state_50851__$1;
(statearr_50870_50891[(2)] = inst_50845);

(statearr_50870_50891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50852 === (10))){
var inst_50834 = (state_50851[(2)]);
var state_50851__$1 = state_50851;
var statearr_50871_50892 = state_50851__$1;
(statearr_50871_50892[(2)] = inst_50834);

(statearr_50871_50892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50852 === (8))){
var inst_50815 = (state_50851[(9)]);
var inst_50811 = (state_50851[(8)]);
var inst_50819 = (state_50851[(10)]);
var inst_50824 = inst_50811.push(inst_50815);
var tmp50868 = inst_50811;
var inst_50811__$1 = tmp50868;
var inst_50812 = inst_50819;
var state_50851__$1 = (function (){var statearr_50872 = state_50851;
(statearr_50872[(7)] = inst_50812);

(statearr_50872[(8)] = inst_50811__$1);

(statearr_50872[(14)] = inst_50824);

return statearr_50872;
})();
var statearr_50873_50893 = state_50851__$1;
(statearr_50873_50893[(2)] = null);

(statearr_50873_50893[(1)] = (2));


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
});})(c__48989__auto___50879,out))
;
return ((function (switch__48901__auto__,c__48989__auto___50879,out){
return (function() {
var cljs$core$async$state_machine__48902__auto__ = null;
var cljs$core$async$state_machine__48902__auto____0 = (function (){
var statearr_50874 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50874[(0)] = cljs$core$async$state_machine__48902__auto__);

(statearr_50874[(1)] = (1));

return statearr_50874;
});
var cljs$core$async$state_machine__48902__auto____1 = (function (state_50851){
while(true){
var ret_value__48903__auto__ = (function (){try{while(true){
var result__48904__auto__ = switch__48901__auto__.call(null,state_50851);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48904__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48904__auto__;
}
break;
}
}catch (e50875){if((e50875 instanceof Object)){
var ex__48905__auto__ = e50875;
var statearr_50876_50894 = state_50851;
(statearr_50876_50894[(5)] = ex__48905__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50875;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48903__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50895 = state_50851;
state_50851 = G__50895;
continue;
} else {
return ret_value__48903__auto__;
}
break;
}
});
cljs$core$async$state_machine__48902__auto__ = function(state_50851){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48902__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48902__auto____1.call(this,state_50851);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__48902__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48902__auto____0;
cljs$core$async$state_machine__48902__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48902__auto____1;
return cljs$core$async$state_machine__48902__auto__;
})()
;})(switch__48901__auto__,c__48989__auto___50879,out))
})();
var state__48991__auto__ = (function (){var statearr_50877 = f__48990__auto__.call(null);
(statearr_50877[(6)] = c__48989__auto___50879);

return statearr_50877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48991__auto__);
});})(c__48989__auto___50879,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1499848581195