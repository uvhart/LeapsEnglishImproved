!function (t) {
    "use strict";
    if ("function" == typeof bootstrap) bootstrap("promise", t); else if ("object" == typeof exports && "object" == typeof module) module.exports = t(); else if ("function" == typeof define && define.amd) define(t); else if ("undefined" != typeof ses) {
        if (!ses.ok()) return;
        ses.makeQ = t
    } else {
        if ("undefined" == typeof window && "undefined" == typeof self) throw new Error("This environment was not anticipated by Q. Please file a bug.");
        var n = "undefined" != typeof window ? window : self, e = n.Q;
        n.Q = t(), n.Q.noConflict = function () {
            return n.Q = e, this
        }
    }
}(function () {
    "use strict";
    var c = !1;
    try {
        throw new Error
    } catch (t) {
        c = !!t.stack
    }
    var o, i = g(), n = function () {
    }, p = function () {
        var e = {task: void 0, next: null}, n = e, r = !1, o = void 0, i = !1, u = [];

        function c() {
            for (var t, n; e.next;) t = (e = e.next).task, e.task = void 0, (n = e.domain) && (e.domain = void 0, n.enter()), f(t, n);
            for (; u.length;) f(t = u.pop());
            r = !1
        }

        function f(t, n) {
            try {
                t()
            } catch (t) {
                if (i) throw n && n.exit(), setTimeout(c, 0), n && n.enter(), t;
                setTimeout(function () {
                    throw t
                }, 0)
            }
            n && n.exit()
        }

        if (p = function (t) {
            n = n.next = {task: t, domain: i && process.domain, next: null}, r || (r = !0, o())
        }, "object" == typeof process && "[object process]" === process.toString() && process.nextTick) i = !0, o = function () {
            process.nextTick(c)
        }; else if ("function" == typeof setImmediate) o = "undefined" != typeof window ? setImmediate.bind(window, c) : function () {
            setImmediate(c)
        }; else if ("undefined" != typeof MessageChannel) {
            var t = new MessageChannel;
            t.port1.onmessage = function () {
                o = s, (t.port1.onmessage = c)()
            };
            var s = function () {
                t.port2.postMessage(0)
            };
            o = function () {
                setTimeout(c, 0), s()
            }
        } else o = function () {
            setTimeout(c, 0)
        };
        return p.runAfter = function (t) {
            u.push(t), r || (r = !0, o())
        }, p
    }(), e = Function.call;

    function t(t) {
        return function () {
            return e.apply(t, arguments)
        }
    }

    var f, s = t(Array.prototype.slice), a = t(Array.prototype.reduce || function (t, n) {
        var e = 0, r = this.length;
        if (1 === arguments.length) for (; ;) {
            if (e in this) {
                n = this[e++];
                break
            }
            if (++e >= r) throw new TypeError
        }
        for (; e < r; e++) e in this && (n = t(n, this[e], e));
        return n
    }), u = t(Array.prototype.indexOf || function (t) {
        for (var n = 0; n < this.length; n++) if (this[n] === t) return n;
        return -1
    }), r = t(Array.prototype.map || function (r, o) {
        var i = this, u = [];
        return a(i, function (t, n, e) {
            u.push(r.call(o, n, e, i))
        }, void 0), u
    }), l = Object.create || function (t) {
        function n() {
        }

        return n.prototype = t, new n
    }, d = Object.defineProperty || function (t, n, e) {
        return t[n] = e.value, t
    }, h = t(Object.prototype.hasOwnProperty), y = Object.keys || function (t) {
        var n = [];
        for (var e in t) h(t, e) && n.push(e);
        return n
    }, v = t(Object.prototype.toString);
    f = "undefined" != typeof ReturnValue ? ReturnValue : function (t) {
        this.value = t
    };
    var m = "From previous event:";

    function k(t, n) {
        if (c && n.stack && "object" == typeof t && null !== t && t.stack) {
            for (var e = [], r = n; r; r = r.source) r.stack && (!t.__minimumStackCounter__ || t.__minimumStackCounter__ > r.stackCounter) && (d(t, "__minimumStackCounter__", {
                value: r.stackCounter,
                configurable: !0
            }), e.unshift(r.stack));
            e.unshift(t.stack);
            var o = function (t) {
                for (var n = t.split("\n"), e = [], r = 0; r < n.length; ++r) {
                    var o = n[r];
                    !j(o) && (-1 === (i = o).indexOf("(module.js:") && -1 === i.indexOf("(node.js:")) && o && e.push(o)
                }
                var i;
                return e.join("\n")
            }(e.join("\n" + m + "\n"));
            d(t, "stack", {value: o, configurable: !0})
        }
    }

    function w(t) {
        var n = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(t);
        if (n) return [n[1], Number(n[2])];
        var e = /at ([^ ]+):(\d+):(?:\d+)$/.exec(t);
        if (e) return [e[1], Number(e[2])];
        var r = /.*@(.+):(\d+)$/.exec(t);
        return r ? [r[1], Number(r[2])] : void 0
    }

    function j(t) {
        var n = w(t);
        if (!n) return !1;
        var e = n[0], r = n[1];
        return e === o && i <= r && r <= z
    }

    function g() {
        if (c) try {
            throw new Error
        } catch (t) {
            var n = t.stack.split("\n"), e = w(0 < n[0].indexOf("@") ? n[1] : n[2]);
            if (!e) return;
            return o = e[0], e[1]
        }
    }

    function b(t) {
        return t instanceof E ? t : _(t) ? (n = t, e = T(), b.nextTick(function () {
            try {
                n.then(e.resolve, e.reject, e.notify)
            } catch (t) {
                e.reject(t)
            }
        }), e.promise) : $(t);
        var n, e
    }

    (b.resolve = b).nextTick = p, b.longStackSupport = !1;
    var x = 1;

    function T() {
        var o, i = [], u = [], t = l(T.prototype), n = l(E.prototype);
        if (n.promiseDispatch = function (t, n, e) {
            var r = s(arguments);
            i ? (i.push(r), "when" === n && e[1] && u.push(e[1])) : b.nextTick(function () {
                o.promiseDispatch.apply(o, r)
            })
        }, n.valueOf = function () {
            if (i) return n;
            var t = C(o);
            return Q(t) && (o = t), t
        }, n.inspect = function () {
            return o ? o.inspect() : {state: "pending"}
        }, b.longStackSupport && c) try {
            throw new Error
        } catch (t) {
            n.stack = t.stack.substring(t.stack.indexOf("\n") + 1), n.stackCounter = x++
        }

        function e(e) {
            o = e, b.longStackSupport && c && (n.source = e), a(i, function (t, n) {
                b.nextTick(function () {
                    e.promiseDispatch.apply(e, n)
                })
            }, void 0), u = i = void 0
        }

        return t.promise = n, t.resolve = function (t) {
            o || e(b(t))
        }, t.fulfill = function (t) {
            o || e($(t))
        }, t.reject = function (t) {
            o || e(B(t))
        }, t.notify = function (e) {
            o || a(u, function (t, n) {
                b.nextTick(function () {
                    n(e)
                })
            }, void 0)
        }, t
    }

    function R(t) {
        if ("function" != typeof t) throw new TypeError("resolver must be a function.");
        var n = T();
        try {
            t(n.resolve, n.reject, n.notify)
        } catch (t) {
            n.reject(t)
        }
        return n.promise
    }

    function S(o) {
        return R(function (t, n) {
            for (var e = 0, r = o.length; e < r; e++) b(o[e]).then(t, n)
        })
    }

    function E(o, i, n) {
        void 0 === i && (i = function (t) {
            return B(new Error("Promise does not support operation: " + t))
        }), void 0 === n && (n = function () {
            return {state: "unknown"}
        });
        var u = l(E.prototype);
        if (u.promiseDispatch = function (t, n, e) {
            var r;
            try {
                r = o[n] ? o[n].apply(u, e) : i.call(u, n, e)
            } catch (t) {
                r = B(t)
            }
            t && t(r)
        }, u.inspect = n) {
            var t = n();
            "rejected" === t.state && (u.exception = t.reason), u.valueOf = function () {
                var t = n();
                return "pending" === t.state || "rejected" === t.state ? u : t.value
            }
        }
        return u
    }

    function O(t, n, e, r) {
        return b(t).then(n, e, r)
    }

    function C(t) {
        if (Q(t)) {
            var n = t.inspect();
            if ("fulfilled" === n.state) return n.value
        }
        return t
    }

    function Q(t) {
        return t instanceof E
    }

    function _(t) {
        return (n = t) === Object(n) && "function" == typeof t.then;
        var n
    }

    "object" == typeof process && process && process.env && process.env.Q_DEBUG && (b.longStackSupport = !0), (b.defer = T).prototype.makeNodeResolver = function () {
        var e = this;
        return function (t, n) {
            t ? e.reject(t) : 2 < arguments.length ? e.resolve(s(arguments, 1)) : e.resolve(n)
        }
    }, b.Promise = R, (b.promise = R).race = S, R.all = H, R.reject = B, (R.resolve = b).passByCopy = function (t) {
        return t
    }, E.prototype.passByCopy = function () {
        return this
    }, b.join = function (t, n) {
        return b(t).join(n)
    }, E.prototype.join = function (t) {
        return b([this, t]).spread(function (t, n) {
            if (t === n) return t;
            throw new Error("Q can't join: not the same: " + t + " " + n)
        })
    }, b.race = S, E.prototype.race = function () {
        return this.then(b.race)
    }, (b.makePromise = E).prototype.toString = function () {
        return "[object Promise]"
    }, E.prototype.then = function (n, e, o) {
        var r = this, i = T(), u = !1;
        return b.nextTick(function () {
            r.promiseDispatch(function (t) {
                u || (u = !0, i.resolve(function (t) {
                    try {
                        return "function" == typeof n ? n(t) : t
                    } catch (t) {
                        return B(t)
                    }
                }(t)))
            }, "when", [function (t) {
                u || (u = !0, i.resolve(function (t) {
                    if ("function" == typeof e) {
                        k(t, r);
                        try {
                            return e(t)
                        } catch (t) {
                            return B(t)
                        }
                    }
                    return B(t)
                }(t)))
            }])
        }), r.promiseDispatch(void 0, "when", [void 0, function (t) {
            var n, e, r = !1;
            try {
                e = t, n = "function" == typeof o ? o(e) : e
            } catch (t) {
                if (r = !0, !b.onerror) throw t;
                b.onerror(t)
            }
            r || i.notify(n)
        }]), i.promise
    }, b.tap = function (t, n) {
        return b(t).tap(n)
    }, E.prototype.tap = function (n) {
        return n = b(n), this.then(function (t) {
            return n.fcall(t).thenResolve(t)
        })
    }, b.when = O, E.prototype.thenResolve = function (t) {
        return this.then(function () {
            return t
        })
    }, b.thenResolve = function (t, n) {
        return b(t).thenResolve(n)
    }, E.prototype.thenReject = function (t) {
        return this.then(function () {
            throw t
        })
    }, b.thenReject = function (t, n) {
        return b(t).thenReject(n)
    }, b.nearer = C, b.isPromise = Q, b.isPromiseAlike = _, b.isPending = function (t) {
        return Q(t) && "pending" === t.inspect().state
    }, E.prototype.isPending = function () {
        return "pending" === this.inspect().state
    }, b.isFulfilled = function (t) {
        return !Q(t) || "fulfilled" === t.inspect().state
    }, E.prototype.isFulfilled = function () {
        return "fulfilled" === this.inspect().state
    }, b.isRejected = function (t) {
        return Q(t) && "rejected" === t.inspect().state
    }, E.prototype.isRejected = function () {
        return "rejected" === this.inspect().state
    };
    var N, P, D, A = [], I = [], U = [], F = !0;

    function M() {
        A.length = 0, I.length = 0, F || (F = !0)
    }

    function B(n) {
        var t, e, r = E({
            when: function (t) {
                return t && function (n) {
                    if (F) {
                        var e = u(I, n);
                        -1 !== e && ("object" == typeof process && "function" == typeof process.emit && b.nextTick.runAfter(function () {
                            var t = u(U, n);
                            -1 !== t && (process.emit("rejectionHandled", A[e], n), U.splice(t, 1))
                        }), I.splice(e, 1), A.splice(e, 1))
                    }
                }(this), t ? t(n) : this
            }
        }, function () {
            return this
        }, function () {
            return {state: "rejected", reason: n}
        });
        return t = r, e = n, F && ("object" == typeof process && "function" == typeof process.emit && b.nextTick.runAfter(function () {
            -1 !== u(I, t) && (process.emit("unhandledRejection", e, t), U.push(t))
        }), I.push(t), e && void 0 !== e.stack ? A.push(e.stack) : A.push("(no stack) " + e)), r
    }

    function $(e) {
        return E({
            when: function () {
                return e
            }, get: function (t) {
                return e[t]
            }, set: function (t, n) {
                e[t] = n
            }, delete: function (t) {
                delete e[t]
            }, post: function (t, n) {
                return null == t ? e.apply(void 0, n) : e[t].apply(e, n)
            }, apply: function (t, n) {
                return e.apply(t, n)
            }, keys: function () {
                return y(e)
            }
        }, void 0, function () {
            return {state: "fulfilled", value: e}
        })
    }

    function V(t, n, e) {
        return b(t).spread(n, e)
    }

    function G(t, n, e) {
        return b(t).dispatch(n, e)
    }

    function H(t) {
        return O(t, function (o) {
            var i = 0, u = T();
            return a(o, function (t, n, e) {
                var r;
                Q(n) && "fulfilled" === (r = n.inspect()).state ? o[e] = r.value : (++i, O(n, function (t) {
                    o[e] = t, 0 == --i && u.resolve(o)
                }, u.reject, function (t) {
                    u.notify({index: e, value: t})
                }))
            }, void 0), 0 === i && u.resolve(o), u.promise
        })
    }

    function L(o) {
        if (0 === o.length) return b.resolve();
        var i = b.defer(), u = 0;
        return a(o, function (t, n, e) {
            var r = o[e];
            u++, O(r, function (t) {
                i.resolve(t)
            }, function (t) {
                if (0 == --u) {
                    var n = t || new Error("" + t);
                    n.message = "Q can't get fulfillment value from any promise, all promises were rejected. Last error message: " + n.message, i.reject(n)
                }
            }, function (t) {
                i.notify({index: e, value: t})
            })
        }, void 0), i.promise
    }

    function q(t) {
        return O(t, function (t) {
            return t = r(t, b), O(H(r(t, function (t) {
                return O(t, n, n)
            })), function () {
                return t
            })
        })
    }

    b.resetUnhandledRejections = M, b.getUnhandledReasons = function () {
        return A.slice()
    }, b.stopUnhandledRejectionTracking = function () {
        M(), F = !1
    }, M(), b.reject = B, b.fulfill = $, b.master = function (e) {
        return E({
            isDef: function () {
            }
        }, function (t, n) {
            return G(e, t, n)
        }, function () {
            return b(e).inspect()
        })
    }, b.spread = V, E.prototype.spread = function (n, t) {
        return this.all().then(function (t) {
            return n.apply(void 0, t)
        }, t)
    }, b.async = function (n) {
        return function () {
            function t(t, n) {
                var e, r;
                if ("undefined" == typeof StopIteration) {
                    try {
                        e = o[t](n)
                    } catch (t) {
                        return B(t)
                    }
                    return e.done ? b(e.value) : O(e.value, i, u)
                }
                try {
                    e = o[t](n)
                } catch (t) {
                    return "[object StopIteration]" === v(r = t) || r instanceof f ? b(t.value) : B(t)
                }
                return O(e, i, u)
            }

            var o = n.apply(this, arguments), i = t.bind(t, "next"), u = t.bind(t, "throw");
            return i()
        }
    }, b.spawn = function (t) {
        b.done(b.async(t)())
    }, b.return = function (t) {
        throw new f(t)
    }, b.promised = function (e) {
        return function () {
            return V([this, H(arguments)], function (t, n) {
                return e.apply(t, n)
            })
        }
    }, b.dispatch = G, E.prototype.dispatch = function (t, n) {
        var e = this, r = T();
        return b.nextTick(function () {
            e.promiseDispatch(r.resolve, t, n)
        }), r.promise
    }, b.get = function (t, n) {
        return b(t).dispatch("get", [n])
    }, E.prototype.get = function (t) {
        return this.dispatch("get", [t])
    }, b.set = function (t, n, e) {
        return b(t).dispatch("set", [n, e])
    }, E.prototype.set = function (t, n) {
        return this.dispatch("set", [t, n])
    }, b.del = b.delete = function (t, n) {
        return b(t).dispatch("delete", [n])
    }, E.prototype.del = E.prototype.delete = function (t) {
        return this.dispatch("delete", [t])
    }, b.mapply = b.post = function (t, n, e) {
        return b(t).dispatch("post", [n, e])
    }, E.prototype.mapply = E.prototype.post = function (t, n) {
        return this.dispatch("post", [t, n])
    }, b.send = b.mcall = b.invoke = function (t, n) {
        return b(t).dispatch("post", [n, s(arguments, 2)])
    }, E.prototype.send = E.prototype.mcall = E.prototype.invoke = function (t) {
        return this.dispatch("post", [t, s(arguments, 1)])
    }, b.fapply = function (t, n) {
        return b(t).dispatch("apply", [void 0, n])
    }, E.prototype.fapply = function (t) {
        return this.dispatch("apply", [void 0, t])
    }, b.try = b.fcall = function (t) {
        return b(t).dispatch("apply", [void 0, s(arguments, 1)])
    }, E.prototype.fcall = function () {
        return this.dispatch("apply", [void 0, s(arguments)])
    }, b.fbind = function (t) {
        var n = b(t), e = s(arguments, 1);
        return function () {
            return n.dispatch("apply", [this, e.concat(s(arguments))])
        }
    }, E.prototype.fbind = function () {
        var t = this, n = s(arguments);
        return function () {
            return t.dispatch("apply", [this, n.concat(s(arguments))])
        }
    }, b.keys = function (t) {
        return b(t).dispatch("keys", [])
    }, E.prototype.keys = function () {
        return this.dispatch("keys", [])
    }, b.all = H, E.prototype.all = function () {
        return H(this)
    }, b.any = L, E.prototype.any = function () {
        return L(this)
    }, b.allResolved = (N = q, P = "allResolved", D = "allSettled", function () {
        return "undefined" != typeof console && "function" == typeof console.warn && console.warn(P + " is deprecated, use " + D + " instead.", new Error("").stack), N.apply(N, arguments)
    }), E.prototype.allResolved = function () {
        return q(this)
    }, b.allSettled = function (t) {
        return b(t).allSettled()
    }, E.prototype.allSettled = function () {
        return this.then(function (t) {
            return H(r(t, function (t) {
                function n() {
                    return t.inspect()
                }

                return (t = b(t)).then(n, n)
            }))
        })
    }, b.fail = b.catch = function (t, n) {
        return b(t).then(void 0, n)
    }, E.prototype.fail = E.prototype.catch = function (t) {
        return this.then(void 0, t)
    }, b.progress = function (t, n) {
        return b(t).then(void 0, void 0, n)
    }, E.prototype.progress = function (t) {
        return this.then(void 0, void 0, t)
    }, b.fin = b.finally = function (t, n) {
        return b(t).finally(n)
    }, E.prototype.fin = E.prototype.finally = function (n) {
        if (!n || "function" != typeof n.apply) throw new Error("Q can't apply finally callback");
        return n = b(n), this.then(function (t) {
            return n.fcall().then(function () {
                return t
            })
        }, function (t) {
            return n.fcall().then(function () {
                throw t
            })
        })
    }, b.done = function (t, n, e, r) {
        return b(t).done(n, e, r)
    }, E.prototype.done = function (t, n, e) {
        var r = function (t) {
            b.nextTick(function () {
                if (k(t, o), !b.onerror) throw t;
                b.onerror(t)
            })
        }, o = t || n || e ? this.then(t, n, e) : this;
        "object" == typeof process && process && process.domain && (r = process.domain.bind(r)), o.then(void 0, r)
    }, b.timeout = function (t, n, e) {
        return b(t).timeout(n, e)
    }, E.prototype.timeout = function (t, n) {
        var e = T(), r = setTimeout(function () {
            n && "string" != typeof n || ((n = new Error(n || "Timed out after " + t + " ms")).code = "ETIMEDOUT"), e.reject(n)
        }, t);
        return this.then(function (t) {
            clearTimeout(r), e.resolve(t)
        }, function (t) {
            clearTimeout(r), e.reject(t)
        }, e.notify), e.promise
    }, b.delay = function (t, n) {
        return void 0 === n && (n = t, t = void 0), b(t).delay(n)
    }, E.prototype.delay = function (e) {
        return this.then(function (t) {
            var n = T();
            return setTimeout(function () {
                n.resolve(t)
            }, e), n.promise
        })
    }, b.nfapply = function (t, n) {
        return b(t).nfapply(n)
    }, E.prototype.nfapply = function (t) {
        var n = T(), e = s(t);
        return e.push(n.makeNodeResolver()), this.fapply(e).fail(n.reject), n.promise
    }, b.nfcall = function (t) {
        var n = s(arguments, 1);
        return b(t).nfapply(n)
    }, E.prototype.nfcall = function () {
        var t = s(arguments), n = T();
        return t.push(n.makeNodeResolver()), this.fapply(t).fail(n.reject), n.promise
    }, b.nfbind = b.denodeify = function (e) {
        if (void 0 === e) throw new Error("Q can't wrap an undefined function");
        var r = s(arguments, 1);
        return function () {
            var t = r.concat(s(arguments)), n = T();
            return t.push(n.makeNodeResolver()), b(e).fapply(t).fail(n.reject), n.promise
        }
    }, E.prototype.nfbind = E.prototype.denodeify = function () {
        var t = s(arguments);
        return t.unshift(this), b.denodeify.apply(void 0, t)
    }, b.nbind = function (e, r) {
        var o = s(arguments, 2);
        return function () {
            var t = o.concat(s(arguments)), n = T();
            return t.push(n.makeNodeResolver()), b(function () {
                return e.apply(r, arguments)
            }).fapply(t).fail(n.reject), n.promise
        }
    }, E.prototype.nbind = function () {
        var t = s(arguments, 0);
        return t.unshift(this), b.nbind.apply(void 0, t)
    }, b.nmapply = b.npost = function (t, n, e) {
        return b(t).npost(n, e)
    }, E.prototype.nmapply = E.prototype.npost = function (t, n) {
        var e = s(n || []), r = T();
        return e.push(r.makeNodeResolver()), this.dispatch("post", [t, e]).fail(r.reject), r.promise
    }, b.nsend = b.nmcall = b.ninvoke = function (t, n) {
        var e = s(arguments, 2), r = T();
        return e.push(r.makeNodeResolver()), b(t).dispatch("post", [n, e]).fail(r.reject), r.promise
    }, E.prototype.nsend = E.prototype.nmcall = E.prototype.ninvoke = function (t) {
        var n = s(arguments, 1), e = T();
        return n.push(e.makeNodeResolver()), this.dispatch("post", [t, n]).fail(e.reject), e.promise
    }, b.nodeify = function (t, n) {
        return b(t).nodeify(n)
    }, E.prototype.nodeify = function (n) {
        if (!n) return this;
        this.then(function (t) {
            b.nextTick(function () {
                n(null, t)
            })
        }, function (t) {
            b.nextTick(function () {
                n(t)
            })
        })
    }, b.noConflict = function () {
        throw new Error("Q.noConflict only works when Q is used as a global")
    };
    var z = g();
    return b
});