(function () {
    var n = this, r = n._, e = Array.prototype, o = Object.prototype, t = Function.prototype, u = e.push, c = e.slice,
        s = o.toString, i = o.hasOwnProperty, a = Array.isArray, f = Object.keys, l = t.bind, p = Object.create,
        h = function () {
        }, v = function (n) {
            return n instanceof v ? n : this instanceof v ? void (this._wrapped = n) : new v(n)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = v), exports._ = v) : n._ = v, v.VERSION = "1.8.3";
    var y = function (u, i, n) {
        if (void 0 === i) return u;
        switch (null == n ? 3 : n) {
            case 1:
                return function (n) {
                    return u.call(i, n)
                };
            case 2:
                return function (n, r) {
                    return u.call(i, n, r)
                };
            case 3:
                return function (n, r, t) {
                    return u.call(i, n, r, t)
                };
            case 4:
                return function (n, r, t, e) {
                    return u.call(i, n, r, t, e)
                }
        }
        return function () {
            return u.apply(i, arguments)
        }
    }, d = function (n, r, t) {
        return null == n ? v.identity : v.isFunction(n) ? y(n, r, t) : v.isObject(n) ? v.matcher(n) : v.property(n)
    };
    v.iteratee = function (n, r) {
        return d(n, r, 1 / 0)
    };
    var g = function (c, f) {
        return function (n) {
            var r = arguments.length;
            if (r < 2 || null == n) return n;
            for (var t = 1; t < r; t++) for (var e = arguments[t], u = c(e), i = u.length, o = 0; o < i; o++) {
                var a = u[o];
                f && void 0 !== n[a] || (n[a] = e[a])
            }
            return n
        }
    }, m = function (n) {
        if (!v.isObject(n)) return {};
        if (p) return p(n);
        h.prototype = n;
        var r = new h;
        return h.prototype = null, r
    }, b = function (r) {
        return function (n) {
            return null == n ? void 0 : n[r]
        }
    }, x = Math.pow(2, 53) - 1, _ = b("length"), j = function (n) {
        var r = _(n);
        return "number" == typeof r && 0 <= r && r <= x
    };

    function w(a) {
        return function (n, r, t, e) {
            r = y(r, e, 4);
            var u = !j(n) && v.keys(n), i = (u || n).length, o = 0 < a ? 0 : i - 1;
            return arguments.length < 3 && (t = n[u ? u[o] : o], o += a), function (n, r, t, e, u, i) {
                for (; 0 <= u && u < i; u += a) {
                    var o = e ? e[u] : u;
                    t = r(t, n[o], o, n)
                }
                return t
            }(n, r, t, u, o, i)
        }
    }

    v.each = v.forEach = function (n, r, t) {
        var e, u;
        if (r = y(r, t), j(n)) for (e = 0, u = n.length; e < u; e++) r(n[e], e, n); else {
            var i = v.keys(n);
            for (e = 0, u = i.length; e < u; e++) r(n[i[e]], i[e], n)
        }
        return n
    }, v.map = v.collect = function (n, r, t) {
        r = d(r, t);
        for (var e = !j(n) && v.keys(n), u = (e || n).length, i = Array(u), o = 0; o < u; o++) {
            var a = e ? e[o] : o;
            i[o] = r(n[a], a, n)
        }
        return i
    }, v.reduce = v.foldl = v.inject = w(1), v.reduceRight = v.foldr = w(-1), v.find = v.detect = function (n, r, t) {
        var e;
        if (void 0 !== (e = j(n) ? v.findIndex(n, r, t) : v.findKey(n, r, t)) && -1 !== e) return n[e]
    }, v.filter = v.select = function (n, e, r) {
        var u = [];
        return e = d(e, r), v.each(n, function (n, r, t) {
            e(n, r, t) && u.push(n)
        }), u
    }, v.reject = function (n, r, t) {
        return v.filter(n, v.negate(d(r)), t)
    }, v.every = v.all = function (n, r, t) {
        r = d(r, t);
        for (var e = !j(n) && v.keys(n), u = (e || n).length, i = 0; i < u; i++) {
            var o = e ? e[i] : i;
            if (!r(n[o], o, n)) return !1
        }
        return !0
    }, v.some = v.any = function (n, r, t) {
        r = d(r, t);
        for (var e = !j(n) && v.keys(n), u = (e || n).length, i = 0; i < u; i++) {
            var o = e ? e[i] : i;
            if (r(n[o], o, n)) return !0
        }
        return !1
    }, v.contains = v.includes = v.include = function (n, r, t, e) {
        return j(n) || (n = v.values(n)), ("number" != typeof t || e) && (t = 0), 0 <= v.indexOf(n, r, t)
    }, v.invoke = function (n, t) {
        var e = c.call(arguments, 2), u = v.isFunction(t);
        return v.map(n, function (n) {
            var r = u ? t : n[t];
            return null == r ? r : r.apply(n, e)
        })
    }, v.pluck = function (n, r) {
        return v.map(n, v.property(r))
    }, v.where = function (n, r) {
        return v.filter(n, v.matcher(r))
    }, v.findWhere = function (n, r) {
        return v.find(n, v.matcher(r))
    }, v.max = function (n, e, r) {
        var t, u, i = -1 / 0, o = -1 / 0;
        if (null == e && null != n) for (var a = 0, c = (n = j(n) ? n : v.values(n)).length; a < c; a++) t = n[a], i < t && (i = t); else e = d(e, r), v.each(n, function (n, r, t) {
            u = e(n, r, t), (o < u || u === -1 / 0 && i === -1 / 0) && (i = n, o = u)
        });
        return i
    }, v.min = function (n, e, r) {
        var t, u, i = 1 / 0, o = 1 / 0;
        if (null == e && null != n) for (var a = 0, c = (n = j(n) ? n : v.values(n)).length; a < c; a++) (t = n[a]) < i && (i = t); else e = d(e, r), v.each(n, function (n, r, t) {
            ((u = e(n, r, t)) < o || u === 1 / 0 && i === 1 / 0) && (i = n, o = u)
        });
        return i
    }, v.shuffle = function (n) {
        for (var r, t = j(n) ? n : v.values(n), e = t.length, u = Array(e), i = 0; i < e; i++) (r = v.random(0, i)) !== i && (u[i] = u[r]), u[r] = t[i];
        return u
    }, v.sample = function (n, r, t) {
        return null == r || t ? (j(n) || (n = v.values(n)), n[v.random(n.length - 1)]) : v.shuffle(n).slice(0, Math.max(0, r))
    }, v.sortBy = function (n, e, r) {
        return e = d(e, r), v.pluck(v.map(n, function (n, r, t) {
            return {value: n, index: r, criteria: e(n, r, t)}
        }).sort(function (n, r) {
            var t = n.criteria, e = r.criteria;
            if (t !== e) {
                if (e < t || void 0 === t) return 1;
                if (t < e || void 0 === e) return -1
            }
            return n.index - r.index
        }), "value")
    };
    var A = function (o) {
        return function (e, u, n) {
            var i = {};
            return u = d(u, n), v.each(e, function (n, r) {
                var t = u(n, r, e);
                o(i, n, t)
            }), i
        }
    };
    v.groupBy = A(function (n, r, t) {
        v.has(n, t) ? n[t].push(r) : n[t] = [r]
    }), v.indexBy = A(function (n, r, t) {
        n[t] = r
    }), v.countBy = A(function (n, r, t) {
        v.has(n, t) ? n[t]++ : n[t] = 1
    }), v.toArray = function (n) {
        return n ? v.isArray(n) ? c.call(n) : j(n) ? v.map(n, v.identity) : v.values(n) : []
    }, v.size = function (n) {
        return null == n ? 0 : j(n) ? n.length : v.keys(n).length
    }, v.partition = function (n, e, r) {
        e = d(e, r);
        var u = [], i = [];
        return v.each(n, function (n, r, t) {
            (e(n, r, t) ? u : i).push(n)
        }), [u, i]
    }, v.first = v.head = v.take = function (n, r, t) {
        if (null != n) return null == r || t ? n[0] : v.initial(n, n.length - r)
    }, v.initial = function (n, r, t) {
        return c.call(n, 0, Math.max(0, n.length - (null == r || t ? 1 : r)))
    }, v.last = function (n, r, t) {
        if (null != n) return null == r || t ? n[n.length - 1] : v.rest(n, Math.max(0, n.length - r))
    }, v.rest = v.tail = v.drop = function (n, r, t) {
        return c.call(n, null == r || t ? 1 : r)
    }, v.compact = function (n) {
        return v.filter(n, v.identity)
    };
    var O = function (n, r, t, e) {
        for (var u = [], i = 0, o = e || 0, a = _(n); o < a; o++) {
            var c = n[o];
            if (j(c) && (v.isArray(c) || v.isArguments(c))) {
                r || (c = O(c, r, t));
                var f = 0, l = c.length;
                for (u.length += l; f < l;) u[i++] = c[f++]
            } else t || (u[i++] = c)
        }
        return u
    };

    function k(i) {
        return function (n, r, t) {
            r = d(r, t);
            for (var e = _(n), u = 0 < i ? 0 : e - 1; 0 <= u && u < e; u += i) if (r(n[u], u, n)) return u;
            return -1
        }
    }

    function F(i, o, a) {
        return function (n, r, t) {
            var e = 0, u = _(n);
            if ("number" == typeof t) 0 < i ? e = 0 <= t ? t : Math.max(t + u, e) : u = 0 <= t ? Math.min(t + 1, u) : t + u + 1; else if (a && t && u) return n[t = a(n, r)] === r ? t : -1;
            if (r != r) return 0 <= (t = o(c.call(n, e, u), v.isNaN)) ? t + e : -1;
            for (t = 0 < i ? e : u - 1; 0 <= t && t < u; t += i) if (n[t] === r) return t;
            return -1
        }
    }

    v.flatten = function (n, r) {
        return O(n, r, !1)
    }, v.without = function (n) {
        return v.difference(n, c.call(arguments, 1))
    }, v.uniq = v.unique = function (n, r, t, e) {
        v.isBoolean(r) || (e = t, t = r, r = !1), null != t && (t = d(t, e));
        for (var u = [], i = [], o = 0, a = _(n); o < a; o++) {
            var c = n[o], f = t ? t(c, o, n) : c;
            r ? (o && i === f || u.push(c), i = f) : t ? v.contains(i, f) || (i.push(f), u.push(c)) : v.contains(u, c) || u.push(c)
        }
        return u
    }, v.union = function () {
        return v.uniq(O(arguments, !0, !0))
    }, v.intersection = function (n) {
        for (var r = [], t = arguments.length, e = 0, u = _(n); e < u; e++) {
            var i = n[e];
            if (!v.contains(r, i)) {
                for (var o = 1; o < t && v.contains(arguments[o], i); o++) ;
                o === t && r.push(i)
            }
        }
        return r
    }, v.difference = function (n) {
        var r = O(arguments, !0, !0, 1);
        return v.filter(n, function (n) {
            return !v.contains(r, n)
        })
    }, v.zip = function () {
        return v.unzip(arguments)
    }, v.unzip = function (n) {
        for (var r = n && v.max(n, _).length || 0, t = Array(r), e = 0; e < r; e++) t[e] = v.pluck(n, e);
        return t
    }, v.object = function (n, r) {
        for (var t = {}, e = 0, u = _(n); e < u; e++) r ? t[n[e]] = r[e] : t[n[e][0]] = n[e][1];
        return t
    }, v.findIndex = k(1), v.findLastIndex = k(-1), v.sortedIndex = function (n, r, t, e) {
        for (var u = (t = d(t, e, 1))(r), i = 0, o = _(n); i < o;) {
            var a = Math.floor((i + o) / 2);
            t(n[a]) < u ? i = a + 1 : o = a
        }
        return i
    }, v.indexOf = F(1, v.findIndex, v.sortedIndex), v.lastIndexOf = F(-1, v.findLastIndex), v.range = function (n, r, t) {
        null == r && (r = n || 0, n = 0), t = t || 1;
        for (var e = Math.max(Math.ceil((r - n) / t), 0), u = Array(e), i = 0; i < e; i++, n += t) u[i] = n;
        return u
    };
    var S = function (n, r, t, e, u) {
        if (!(e instanceof r)) return n.apply(t, u);
        var i = m(n.prototype), o = n.apply(i, u);
        return v.isObject(o) ? o : i
    };
    v.bind = function (n, r) {
        if (l && n.bind === l) return l.apply(n, c.call(arguments, 1));
        if (!v.isFunction(n)) throw new TypeError("Bind must be called on a function");
        var t = c.call(arguments, 2), e = function () {
            return S(n, e, r, this, t.concat(c.call(arguments)))
        };
        return e
    }, v.partial = function (u) {
        var i = c.call(arguments, 1), o = function () {
            for (var n = 0, r = i.length, t = Array(r), e = 0; e < r; e++) t[e] = i[e] === v ? arguments[n++] : i[e];
            for (; n < arguments.length;) t.push(arguments[n++]);
            return S(u, o, this, this, t)
        };
        return o
    }, v.bindAll = function (n) {
        var r, t, e = arguments.length;
        if (e <= 1) throw new Error("bindAll must be passed function names");
        for (r = 1; r < e; r++) n[t = arguments[r]] = v.bind(n[t], n);
        return n
    }, v.memoize = function (e, u) {
        var i = function (n) {
            var r = i.cache, t = "" + (u ? u.apply(this, arguments) : n);
            return v.has(r, t) || (r[t] = e.apply(this, arguments)), r[t]
        };
        return i.cache = {}, i
    }, v.delay = function (n, r) {
        var t = c.call(arguments, 2);
        return setTimeout(function () {
            return n.apply(null, t)
        }, r)
    }, v.defer = v.partial(v.delay, v, 1), v.throttle = function (t, e, u) {
        var i, o, a, c = null, f = 0;
        u || (u = {});
        var l = function () {
            f = !1 === u.leading ? 0 : v.now(), c = null, a = t.apply(i, o), c || (i = o = null)
        };
        return function () {
            var n = v.now();
            f || !1 !== u.leading || (f = n);
            var r = e - (n - f);
            return i = this, o = arguments, r <= 0 || e < r ? (c && (clearTimeout(c), c = null), f = n, a = t.apply(i, o), c || (i = o = null)) : c || !1 === u.trailing || (c = setTimeout(l, r)), a
        }
    }, v.debounce = function (r, t, e) {
        var u, i, o, a, c, f = function () {
            var n = v.now() - a;
            n < t && 0 <= n ? u = setTimeout(f, t - n) : (u = null, e || (c = r.apply(o, i), u || (o = i = null)))
        };
        return function () {
            o = this, i = arguments, a = v.now();
            var n = e && !u;
            return u || (u = setTimeout(f, t)), n && (c = r.apply(o, i), o = i = null), c
        }
    }, v.wrap = function (n, r) {
        return v.partial(r, n)
    }, v.negate = function (n) {
        return function () {
            return !n.apply(this, arguments)
        }
    }, v.compose = function () {
        var t = arguments, e = t.length - 1;
        return function () {
            for (var n = e, r = t[e].apply(this, arguments); n--;) r = t[n].call(this, r);
            return r
        }
    }, v.after = function (n, r) {
        return function () {
            if (--n < 1) return r.apply(this, arguments)
        }
    }, v.before = function (n, r) {
        var t;
        return function () {
            return 0 < --n && (t = r.apply(this, arguments)), n <= 1 && (r = null), t
        }
    }, v.once = v.partial(v.before, 2);
    var E = !{toString: null}.propertyIsEnumerable("toString"),
        M = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];

    function I(n, r) {
        var t = M.length, e = n.constructor, u = v.isFunction(e) && e.prototype || o, i = "constructor";
        for (v.has(n, i) && !v.contains(r, i) && r.push(i); t--;) (i = M[t]) in n && n[i] !== u[i] && !v.contains(r, i) && r.push(i)
    }

    v.keys = function (n) {
        if (!v.isObject(n)) return [];
        if (f) return f(n);
        var r = [];
        for (var t in n) v.has(n, t) && r.push(t);
        return E && I(n, r), r
    }, v.allKeys = function (n) {
        if (!v.isObject(n)) return [];
        var r = [];
        for (var t in n) r.push(t);
        return E && I(n, r), r
    }, v.values = function (n) {
        for (var r = v.keys(n), t = r.length, e = Array(t), u = 0; u < t; u++) e[u] = n[r[u]];
        return e
    }, v.mapObject = function (n, r, t) {
        r = d(r, t);
        for (var e, u = v.keys(n), i = u.length, o = {}, a = 0; a < i; a++) o[e = u[a]] = r(n[e], e, n);
        return o
    }, v.pairs = function (n) {
        for (var r = v.keys(n), t = r.length, e = Array(t), u = 0; u < t; u++) e[u] = [r[u], n[r[u]]];
        return e
    }, v.invert = function (n) {
        for (var r = {}, t = v.keys(n), e = 0, u = t.length; e < u; e++) r[n[t[e]]] = t[e];
        return r
    }, v.functions = v.methods = function (n) {
        var r = [];
        for (var t in n) v.isFunction(n[t]) && r.push(t);
        return r.sort()
    }, v.extend = g(v.allKeys), v.extendOwn = v.assign = g(v.keys), v.findKey = function (n, r, t) {
        r = d(r, t);
        for (var e, u = v.keys(n), i = 0, o = u.length; i < o; i++) if (r(n[e = u[i]], e, n)) return e
    }, v.pick = function (n, r, t) {
        var e, u, i = {}, o = n;
        if (null == o) return i;
        v.isFunction(r) ? (u = v.allKeys(o), e = y(r, t)) : (u = O(arguments, !1, !1, 1), e = function (n, r, t) {
            return r in t
        }, o = Object(o));
        for (var a = 0, c = u.length; a < c; a++) {
            var f = u[a], l = o[f];
            e(l, f, o) && (i[f] = l)
        }
        return i
    }, v.omit = function (n, r, t) {
        if (v.isFunction(r)) r = v.negate(r); else {
            var e = v.map(O(arguments, !1, !1, 1), String);
            r = function (n, r) {
                return !v.contains(e, r)
            }
        }
        return v.pick(n, r, t)
    }, v.defaults = g(v.allKeys, !0), v.create = function (n, r) {
        var t = m(n);
        return r && v.extendOwn(t, r), t
    }, v.clone = function (n) {
        return v.isObject(n) ? v.isArray(n) ? n.slice() : v.extend({}, n) : n
    }, v.tap = function (n, r) {
        return r(n), n
    }, v.isMatch = function (n, r) {
        var t = v.keys(r), e = t.length;
        if (null == n) return !e;
        for (var u = Object(n), i = 0; i < e; i++) {
            var o = t[i];
            if (r[o] !== u[o] || !(o in u)) return !1
        }
        return !0
    };
    var N = function (n, r, t, e) {
        if (n === r) return 0 !== n || 1 / n == 1 / r;
        if (null == n || null == r) return n === r;
        n instanceof v && (n = n._wrapped), r instanceof v && (r = r._wrapped);
        var u = s.call(n);
        if (u !== s.call(r)) return !1;
        switch (u) {
            case"[object RegExp]":
            case"[object String]":
                return "" + n == "" + r;
            case"[object Number]":
                return +n != +n ? +r != +r : 0 == +n ? 1 / +n == 1 / r : +n == +r;
            case"[object Date]":
            case"[object Boolean]":
                return +n == +r
        }
        var i = "[object Array]" === u;
        if (!i) {
            if ("object" != typeof n || "object" != typeof r) return !1;
            var o = n.constructor, a = r.constructor;
            if (o !== a && !(v.isFunction(o) && o instanceof o && v.isFunction(a) && a instanceof a) && "constructor" in n && "constructor" in r) return !1
        }
        e = e || [];
        for (var c = (t = t || []).length; c--;) if (t[c] === n) return e[c] === r;
        if (t.push(n), e.push(r), i) {
            if ((c = n.length) !== r.length) return !1;
            for (; c--;) if (!N(n[c], r[c], t, e)) return !1
        } else {
            var f, l = v.keys(n);
            if (c = l.length, v.keys(r).length !== c) return !1;
            for (; c--;) if (f = l[c], !v.has(r, f) || !N(n[f], r[f], t, e)) return !1
        }
        return t.pop(), e.pop(), !0
    };
    v.isEqual = function (n, r) {
        return N(n, r)
    }, v.isEmpty = function (n) {
        return null == n || (j(n) && (v.isArray(n) || v.isString(n) || v.isArguments(n)) ? 0 === n.length : 0 === v.keys(n).length)
    }, v.isElement = function (n) {
        return !(!n || 1 !== n.nodeType)
    }, v.isArray = a || function (n) {
        return "[object Array]" === s.call(n)
    }, v.isObject = function (n) {
        var r = typeof n;
        return "function" === r || "object" === r && !!n
    }, v.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function (r) {
        v["is" + r] = function (n) {
            return s.call(n) === "[object " + r + "]"
        }
    }), v.isArguments(arguments) || (v.isArguments = function (n) {
        return v.has(n, "callee")
    }), "function" != typeof /./ && "object" != typeof Int8Array && (v.isFunction = function (n) {
        return "function" == typeof n || !1
    }), v.isFinite = function (n) {
        return isFinite(n) && !isNaN(parseFloat(n))
    }, v.isNaN = function (n) {
        return v.isNumber(n) && n !== +n
    }, v.isBoolean = function (n) {
        return !0 === n || !1 === n || "[object Boolean]" === s.call(n)
    }, v.isNull = function (n) {
        return null === n
    }, v.isUndefined = function (n) {
        return void 0 === n
    }, v.has = function (n, r) {
        return null != n && i.call(n, r)
    }, v.noConflict = function () {
        return n._ = r, this
    }, v.identity = function (n) {
        return n
    }, v.constant = function (n) {
        return function () {
            return n
        }
    }, v.noop = function () {
    }, v.property = b, v.propertyOf = function (r) {
        return null == r ? function () {
        } : function (n) {
            return r[n]
        }
    }, v.matcher = v.matches = function (r) {
        return r = v.extendOwn({}, r), function (n) {
            return v.isMatch(n, r)
        }
    }, v.times = function (n, r, t) {
        var e = Array(Math.max(0, n));
        r = y(r, t, 1);
        for (var u = 0; u < n; u++) e[u] = r(u);
        return e
    }, v.random = function (n, r) {
        return null == r && (r = n, n = 0), n + Math.floor(Math.random() * (r - n + 1))
    }, v.now = Date.now || function () {
        return (new Date).getTime()
    };
    var B = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;"}, T = v.invert(B),
        R = function (r) {
            var t = function (n) {
                return r[n]
            }, n = "(?:" + v.keys(r).join("|") + ")", e = RegExp(n), u = RegExp(n, "g");
            return function (n) {
                return n = null == n ? "" : "" + n, e.test(n) ? n.replace(u, t) : n
            }
        };
    v.escape = R(B), v.unescape = R(T), v.result = function (n, r, t) {
        var e = null == n ? void 0 : n[r];
        return void 0 === e && (e = t), v.isFunction(e) ? e.call(n) : e
    };
    var q = 0;
    v.uniqueId = function (n) {
        var r = ++q + "";
        return n ? n + r : r
    }, v.templateSettings = {evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g};
    var K = /(.)^/, z = {"'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029"},
        D = /\\|'|\r|\n|\u2028|\u2029/g, L = function (n) {
            return "\\" + z[n]
        };
    v.template = function (i, n, r) {
        !n && r && (n = r), n = v.defaults({}, n, v.templateSettings);
        var t = RegExp([(n.escape || K).source, (n.interpolate || K).source, (n.evaluate || K).source].join("|") + "|$", "g"),
            o = 0, a = "__p+='";
        i.replace(t, function (n, r, t, e, u) {
            return a += i.slice(o, u).replace(D, L), o = u + n.length, r ? a += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'" : t ? a += "'+\n((__t=(" + t + "))==null?'':__t)+\n'" : e && (a += "';\n" + e + "\n__p+='"), n
        }), a += "';\n", n.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
        try {
            var e = new Function(n.variable || "obj", "_", a)
        } catch (n) {
            throw n.source = a, n
        }
        var u = function (n) {
            return e.call(this, n, v)
        }, c = n.variable || "obj";
        return u.source = "function(" + c + "){\n" + a + "}", u
    }, v.chain = function (n) {
        var r = v(n);
        return r._chain = !0, r
    };
    var P = function (n, r) {
        return n._chain ? v(r).chain() : r
    };
    v.mixin = function (t) {
        v.each(v.functions(t), function (n) {
            var r = v[n] = t[n];
            v.prototype[n] = function () {
                var n = [this._wrapped];
                return u.apply(n, arguments), P(this, r.apply(v, n))
            }
        })
    }, v.mixin(v), v.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (r) {
        var t = e[r];
        v.prototype[r] = function () {
            var n = this._wrapped;
            return t.apply(n, arguments), "shift" !== r && "splice" !== r || 0 !== n.length || delete n[0], P(this, n)
        }
    }), v.each(["concat", "join", "slice"], function (n) {
        var r = e[n];
        v.prototype[n] = function () {
            return P(this, r.apply(this._wrapped, arguments))
        }
    }), v.prototype.value = function () {
        return this._wrapped
    }, v.prototype.valueOf = v.prototype.toJSON = v.prototype.value, v.prototype.toString = function () {
        return "" + this._wrapped
    }, "function" == typeof define && define.amd && define("underscore", [], function () {
        return v
    })
}).call(this);