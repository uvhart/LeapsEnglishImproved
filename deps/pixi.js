!function (t) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = t(); else if ("function" == typeof define && define.amd) define([], t); else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).PIXI = t()
    }
}(function () {
    return function o(s, a, u) {
        function h(r, t) {
            if (!a[r]) {
                if (!s[r]) {
                    var e = "function" == typeof require && require;
                    if (!t && e) return e(r, !0);
                    if (l) return l(r, !0);
                    var n = new Error("Cannot find module '" + r + "'");
                    throw n.code = "MODULE_NOT_FOUND", n
                }
                var i = a[r] = {exports: {}};
                s[r][0].call(i.exports, function (t) {
                    var e = s[r][1][t];
                    return h(e || t)
                }, i, i.exports, o, s, a, u)
            }
            return a[r].exports
        }

        for (var l = "function" == typeof require && require, t = 0; t < u.length; t++) h(u[t]);
        return h
    }({
        1: [function (t, e, r) {
            "use strict";

            function n(t) {
                var e = 32;
                return (t &= -t) && e--, 65535 & t && (e -= 16), 16711935 & t && (e -= 8), 252645135 & t && (e -= 4), 858993459 & t && (e -= 2), 1431655765 & t && (e -= 1), e
            }

            r.INT_BITS = 32, r.INT_MAX = 2147483647, r.INT_MIN = -1 << 31, r.sign = function (t) {
                return (0 < t) - (t < 0)
            }, r.abs = function (t) {
                var e = t >> 31;
                return (t ^ e) - e
            }, r.min = function (t, e) {
                return e ^ (t ^ e) & -(t < e)
            }, r.max = function (t, e) {
                return t ^ (t ^ e) & -(t < e)
            }, r.isPow2 = function (t) {
                return !(t & t - 1 || !t)
            }, r.log2 = function (t) {
                var e, r;
                return e = (65535 < t) << 4, e |= r = (255 < (t >>>= e)) << 3, e |= r = (15 < (t >>>= r)) << 2, (e |= r = (3 < (t >>>= r)) << 1) | (t >>>= r) >> 1
            }, r.log10 = function (t) {
                return 1e9 <= t ? 9 : 1e8 <= t ? 8 : 1e7 <= t ? 7 : 1e6 <= t ? 6 : 1e5 <= t ? 5 : 1e4 <= t ? 4 : 1e3 <= t ? 3 : 100 <= t ? 2 : 10 <= t ? 1 : 0
            }, r.popCount = function (t) {
                return 16843009 * ((t = (858993459 & (t -= t >>> 1 & 1431655765)) + (t >>> 2 & 858993459)) + (t >>> 4) & 252645135) >>> 24
            }, r.countTrailingZeros = n, r.nextPow2 = function (t) {
                return t += 0 === t, --t, t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, (t |= t >>> 16) + 1
            }, r.prevPow2 = function (t) {
                return t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, (t |= t >>> 16) - (t >>> 1)
            }, r.parity = function (t) {
                return t ^= t >>> 16, t ^= t >>> 8, t ^= t >>> 4, 27030 >>> (t &= 15) & 1
            };
            var i = new Array(256);
            !function (t) {
                for (var e = 0; e < 256; ++e) {
                    var r = e, n = e, i = 7;
                    for (r >>>= 1; r; r >>>= 1) n <<= 1, n |= 1 & r, --i;
                    t[e] = n << i & 255
                }
            }(i), r.reverse = function (t) {
                return i[255 & t] << 24 | i[t >>> 8 & 255] << 16 | i[t >>> 16 & 255] << 8 | i[t >>> 24 & 255]
            }, r.interleave2 = function (t, e) {
                return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t &= 65535) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e &= 65535) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1
            }, r.deinterleave2 = function (t, e) {
                return (t = 65535 & ((t = 16711935 & ((t = 252645135 & ((t = 858993459 & ((t = t >>> e & 1431655765) | t >>> 1)) | t >>> 2)) | t >>> 4)) | t >>> 16)) << 16 >> 16
            }, r.interleave3 = function (t, e, r) {
                return t = 1227133513 & ((t = 3272356035 & ((t = 251719695 & ((t = 4278190335 & ((t &= 1023) | t << 16)) | t << 8)) | t << 4)) | t << 2), (t |= (e = 1227133513 & ((e = 3272356035 & ((e = 251719695 & ((e = 4278190335 & ((e &= 1023) | e << 16)) | e << 8)) | e << 4)) | e << 2)) << 1) | (r = 1227133513 & ((r = 3272356035 & ((r = 251719695 & ((r = 4278190335 & ((r &= 1023) | r << 16)) | r << 8)) | r << 4)) | r << 2)) << 2
            }, r.deinterleave3 = function (t, e) {
                return (t = 1023 & ((t = 4278190335 & ((t = 251719695 & ((t = 3272356035 & ((t = t >>> e & 1227133513) | t >>> 2)) | t >>> 4)) | t >>> 8)) | t >>> 16)) << 22 >> 22
            }, r.nextCombination = function (t) {
                var e = t | t - 1;
                return e + 1 | (~e & -~e) - 1 >>> n(t) + 1
            }
        }, {}],
        2: [function (t, e, r) {
            "use strict";

            function n(t, e, r) {
                r = r || 2;
                var n, i, o, s, a, u, h, l = e && e.length, c = l ? e[0] * r : t.length, d = v(t, 0, c, r, !0), f = [];
                if (!d) return f;
                if (l && (d = function (t, e, r, n) {
                    var i, o, s, a, u, h = [];
                    for (i = 0, o = e.length; i < o; i++) s = e[i] * n, a = i < o - 1 ? e[i + 1] * n : t.length, (u = v(t, s, a, n, !1)) === u.next && (u.steiner = !0), h.push(b(u));
                    for (h.sort(m), i = 0; i < h.length; i++) _(h[i], r), r = g(r, r.next);
                    return r
                }(t, e, d, r)), t.length > 80 * r) {
                    n = o = t[0], i = s = t[1];
                    for (var p = r; p < c; p += r) (a = t[p]) < n && (n = a), (u = t[p + 1]) < i && (i = u), o < a && (o = a), s < u && (s = u);
                    h = Math.max(o - n, s - i)
                }
                return y(d, f, r, n, i, h), f
            }

            function v(t, e, r, n, i) {
                var o, s;
                if (i === 0 < P(t, e, r, n)) for (o = e; o < r; o += n) s = u(o, t[o], t[o + 1], s); else for (o = r - n; e <= o; o -= n) s = u(o, t[o], t[o + 1], s);
                return s && a(s, s.next) && (O(s), s = s.next), s
            }

            function g(t, e) {
                if (!t) return t;
                e || (e = t);
                var r, n = t;
                do {
                    if (r = !1, n.steiner || !a(n, n.next) && 0 !== T(n.prev, n, n.next)) n = n.next; else {
                        if (O(n), (n = e = n.prev) === n.next) return null;
                        r = !0
                    }
                } while (r || n !== e);
                return e
            }

            function y(t, e, r, n, i, o, s) {
                if (t) {
                    !s && o && function (t, e, r, n) {
                        var i = t;
                        for (; null === i.z && (i.z = p(i.x, i.y, e, r, n)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next, i !== t;) ;
                        i.prevZ.nextZ = null, i.prevZ = null, function (t) {
                            var e, r, n, i, o, s, a, u, h = 1;
                            do {
                                for (r = t, o = t = null, s = 0; r;) {
                                    for (s++, n = r, e = a = 0; e < h && (a++, n = n.nextZ); e++) ;
                                    for (u = h; 0 < a || 0 < u && n;) 0 === a ? (n = (i = n).nextZ, u--) : 0 !== u && n ? r.z <= n.z ? (r = (i = r).nextZ, a--) : (n = (i = n).nextZ, u--) : (r = (i = r).nextZ, a--), o ? o.nextZ = i : t = i, i.prevZ = o, o = i;
                                    r = n
                                }
                                o.nextZ = null, h *= 2
                            } while (1 < s)
                        }(i)
                    }(t, n, i, o);
                    for (var a, u, h = t; t.prev !== t.next;) if (a = t.prev, u = t.next, o ? c(t, n, i, o) : l(t)) e.push(a.i / r), e.push(t.i / r), e.push(u.i / r), O(t), t = u.next, h = u.next; else if ((t = u) === h) {
                        s ? 1 === s ? y(t = d(t, e, r), e, r, n, i, o, 2) : 2 === s && f(t, e, r, n, i, o) : y(g(t), e, r, n, i, o, 1);
                        break
                    }
                }
            }

            function l(t) {
                var e = t.prev, r = t, n = t.next;
                if (0 <= T(e, r, n)) return !1;
                for (var i = t.next.next; i !== t.prev;) {
                    if (x(e.x, e.y, r.x, r.y, n.x, n.y, i.x, i.y) && 0 <= T(i.prev, i, i.next)) return !1;
                    i = i.next
                }
                return !0
            }

            function c(t, e, r, n) {
                var i = t.prev, o = t, s = t.next;
                if (0 <= T(i, o, s)) return !1;
                for (var a = i.x < o.x ? i.x < s.x ? i.x : s.x : o.x < s.x ? o.x : s.x, u = i.y < o.y ? i.y < s.y ? i.y : s.y : o.y < s.y ? o.y : s.y, h = i.x > o.x ? i.x > s.x ? i.x : s.x : o.x > s.x ? o.x : s.x, l = i.y > o.y ? i.y > s.y ? i.y : s.y : o.y > s.y ? o.y : s.y, c = p(a, u, e, r, n), d = p(h, l, e, r, n), f = t.nextZ; f && f.z <= d;) {
                    if (f !== t.prev && f !== t.next && x(i.x, i.y, o.x, o.y, s.x, s.y, f.x, f.y) && 0 <= T(f.prev, f, f.next)) return !1;
                    f = f.nextZ
                }
                for (f = t.prevZ; f && f.z >= c;) {
                    if (f !== t.prev && f !== t.next && x(i.x, i.y, o.x, o.y, s.x, s.y, f.x, f.y) && 0 <= T(f.prev, f, f.next)) return !1;
                    f = f.prevZ
                }
                return !0
            }

            function d(t, e, r) {
                var n = t;
                do {
                    var i = n.prev, o = n.next.next;
                    !a(i, o) && w(i, n, n.next, o) && E(i, o) && E(o, i) && (e.push(i.i / r), e.push(n.i / r), e.push(o.i / r), O(n), O(n.next), n = t = o), n = n.next
                } while (n !== t);
                return n
            }

            function f(t, e, r, n, i, o) {
                var s, a, u = t;
                do {
                    for (var h = u.next.next; h !== u.prev;) {
                        if (u.i !== h.i && (a = h, (s = u).next.i !== a.i && s.prev.i !== a.i && !function (t, e) {
                            var r = t;
                            do {
                                if (r.i !== t.i && r.next.i !== t.i && r.i !== e.i && r.next.i !== e.i && w(r, r.next, t, e)) return !0;
                                r = r.next
                            } while (r !== t);
                            return !1
                        }(s, a) && E(s, a) && E(a, s) && function (t, e) {
                            var r = t, n = !1, i = (t.x + e.x) / 2, o = (t.y + e.y) / 2;
                            for (; r.y > o != r.next.y > o && i < (r.next.x - r.x) * (o - r.y) / (r.next.y - r.y) + r.x && (n = !n), r = r.next, r !== t;) ;
                            return n
                        }(s, a))) {
                            var l = S(u, h);
                            return u = g(u, u.next), l = g(l, l.next), y(u, e, r, n, i, o), void y(l, e, r, n, i, o)
                        }
                        h = h.next
                    }
                    u = u.next
                } while (u !== t)
            }

            function m(t, e) {
                return t.x - e.x
            }

            function _(t, e) {
                if (e = function (t, e) {
                    var r, n = e, i = t.x, o = t.y, s = -1 / 0;
                    do {
                        if (o <= n.y && o >= n.next.y) {
                            var a = n.x + (o - n.y) * (n.next.x - n.x) / (n.next.y - n.y);
                            if (a <= i && s < a) {
                                if ((s = a) === i) {
                                    if (o === n.y) return n;
                                    if (o === n.next.y) return n.next
                                }
                                r = n.x < n.next.x ? n : n.next
                            }
                        }
                        n = n.next
                    } while (n !== e);
                    if (!r) return null;
                    if (i === s) return r.prev;
                    var u, h = r, l = r.x, c = r.y, d = 1 / 0;
                    n = r.next;
                    for (; n !== h;) i >= n.x && n.x >= l && x(o < c ? i : s, o, l, c, o < c ? s : i, o, n.x, n.y) && ((u = Math.abs(o - n.y) / (i - n.x)) < d || u === d && n.x > r.x) && E(n, t) && (r = n, d = u), n = n.next;
                    return r
                }(t, e)) {
                    var r = S(e, t);
                    g(r, r.next)
                }
            }

            function p(t, e, r, n, i) {
                return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - r) / i) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - n) / i) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1
            }

            function b(t) {
                for (var e = t, r = t; e.x < r.x && (r = e), (e = e.next) !== t;) ;
                return r
            }

            function x(t, e, r, n, i, o, s, a) {
                return 0 <= (i - s) * (e - a) - (t - s) * (o - a) && 0 <= (t - s) * (n - a) - (r - s) * (e - a) && 0 <= (r - s) * (o - a) - (i - s) * (n - a)
            }

            function T(t, e, r) {
                return (e.y - t.y) * (r.x - e.x) - (e.x - t.x) * (r.y - e.y)
            }

            function a(t, e) {
                return t.x === e.x && t.y === e.y
            }

            function w(t, e, r, n) {
                return !!(a(t, e) && a(r, n) || a(t, n) && a(r, e)) || 0 < T(t, e, r) != 0 < T(t, e, n) && 0 < T(r, n, t) != 0 < T(r, n, e)
            }

            function E(t, e) {
                return T(t.prev, t, t.next) < 0 ? 0 <= T(t, e, t.next) && 0 <= T(t, t.prev, e) : T(t, e, t.prev) < 0 || T(t, t.next, e) < 0
            }

            function S(t, e) {
                var r = new s(t.i, t.x, t.y), n = new s(e.i, e.x, e.y), i = t.next, o = e.prev;
                return (t.next = e).prev = t, (r.next = i).prev = r, (n.next = r).prev = n, (o.next = n).prev = o, n
            }

            function u(t, e, r, n) {
                var i = new s(t, e, r);
                return n ? (i.next = n.next, (i.prev = n).next.prev = i, n.next = i) : (i.prev = i).next = i, i
            }

            function O(t) {
                t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ)
            }

            function s(t, e, r) {
                this.i = t, this.x = e, this.y = r, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
            }

            function P(t, e, r, n) {
                for (var i = 0, o = e, s = r - n; o < r; o += n) i += (t[s] - t[o]) * (t[o + 1] + t[s + 1]), s = o;
                return i
            }

            (e.exports = n).deviation = function (t, e, r, n) {
                var i = e && e.length, o = i ? e[0] * r : t.length, s = Math.abs(P(t, 0, o, r));
                if (i) for (var a = 0, u = e.length; a < u; a++) {
                    var h = e[a] * r, l = a < u - 1 ? e[a + 1] * r : t.length;
                    s -= Math.abs(P(t, h, l, r))
                }
                var c = 0;
                for (a = 0; a < n.length; a += 3) {
                    var d = n[a] * r, f = n[a + 1] * r, p = n[a + 2] * r;
                    c += Math.abs((t[d] - t[p]) * (t[f + 1] - t[d + 1]) - (t[d] - t[f]) * (t[p + 1] - t[d + 1]))
                }
                return 0 === s && 0 === c ? 0 : Math.abs((c - s) / s)
            }, n.flatten = function (t) {
                for (var e = t[0][0].length, r = {
                    vertices: [],
                    holes: [],
                    dimensions: e
                }, n = 0, i = 0; i < t.length; i++) {
                    for (var o = 0; o < t[i].length; o++) for (var s = 0; s < e; s++) r.vertices.push(t[i][o][s]);
                    0 < i && (n += t[i - 1].length, r.holes.push(n))
                }
                return r
            }
        }, {}],
        3: [function (t, e, r) {
            "use strict";
            var n = Object.prototype.hasOwnProperty, f = "~";

            function h() {
            }

            function o(t, e, r) {
                this.fn = t, this.context = e, this.once = r || !1
            }

            function i() {
                this._events = new h, this._eventsCount = 0
            }

            Object.create && (h.prototype = Object.create(null), (new h).__proto__ || (f = !1)), i.prototype.eventNames = function () {
                var t, e, r = [];
                if (0 === this._eventsCount) return r;
                for (e in t = this._events) n.call(t, e) && r.push(f ? e.slice(1) : e);
                return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(t)) : r
            }, i.prototype.listeners = function (t, e) {
                var r = f ? f + t : t, n = this._events[r];
                if (e) return !!n;
                if (!n) return [];
                if (n.fn) return [n.fn];
                for (var i = 0, o = n.length, s = new Array(o); i < o; i++) s[i] = n[i].fn;
                return s
            }, i.prototype.emit = function (t, e, r, n, i, o) {
                var s = f ? f + t : t;
                if (!this._events[s]) return !1;
                var a, u, h = this._events[s], l = arguments.length;
                if (h.fn) {
                    switch (h.once && this.removeListener(t, h.fn, void 0, !0), l) {
                        case 1:
                            return h.fn.call(h.context), !0;
                        case 2:
                            return h.fn.call(h.context, e), !0;
                        case 3:
                            return h.fn.call(h.context, e, r), !0;
                        case 4:
                            return h.fn.call(h.context, e, r, n), !0;
                        case 5:
                            return h.fn.call(h.context, e, r, n, i), !0;
                        case 6:
                            return h.fn.call(h.context, e, r, n, i, o), !0
                    }
                    for (u = 1, a = new Array(l - 1); u < l; u++) a[u - 1] = arguments[u];
                    h.fn.apply(h.context, a)
                } else {
                    var c, d = h.length;
                    for (u = 0; u < d; u++) switch (h[u].once && this.removeListener(t, h[u].fn, void 0, !0), l) {
                        case 1:
                            h[u].fn.call(h[u].context);
                            break;
                        case 2:
                            h[u].fn.call(h[u].context, e);
                            break;
                        case 3:
                            h[u].fn.call(h[u].context, e, r);
                            break;
                        case 4:
                            h[u].fn.call(h[u].context, e, r, n);
                            break;
                        default:
                            if (!a) for (c = 1, a = new Array(l - 1); c < l; c++) a[c - 1] = arguments[c];
                            h[u].fn.apply(h[u].context, a)
                    }
                }
                return !0
            }, i.prototype.on = function (t, e, r) {
                var n = new o(e, r || this), i = f ? f + t : t;
                return this._events[i] ? this._events[i].fn ? this._events[i] = [this._events[i], n] : this._events[i].push(n) : (this._events[i] = n, this._eventsCount++), this
            }, i.prototype.once = function (t, e, r) {
                var n = new o(e, r || this, !0), i = f ? f + t : t;
                return this._events[i] ? this._events[i].fn ? this._events[i] = [this._events[i], n] : this._events[i].push(n) : (this._events[i] = n, this._eventsCount++), this
            }, i.prototype.removeListener = function (t, e, r, n) {
                var i = f ? f + t : t;
                if (!this._events[i]) return this;
                if (!e) return 0 == --this._eventsCount ? this._events = new h : delete this._events[i], this;
                var o = this._events[i];
                if (o.fn) o.fn !== e || n && !o.once || r && o.context !== r || (0 == --this._eventsCount ? this._events = new h : delete this._events[i]); else {
                    for (var s = 0, a = [], u = o.length; s < u; s++) (o[s].fn !== e || n && !o[s].once || r && o[s].context !== r) && a.push(o[s]);
                    a.length ? this._events[i] = 1 === a.length ? a[0] : a : 0 == --this._eventsCount ? this._events = new h : delete this._events[i]
                }
                return this
            }, i.prototype.removeAllListeners = function (t) {
                var e;
                return t ? (e = f ? f + t : t, this._events[e] && (0 == --this._eventsCount ? this._events = new h : delete this._events[e])) : (this._events = new h, this._eventsCount = 0), this
            }, i.prototype.off = i.prototype.removeListener, i.prototype.addListener = i.prototype.on, i.prototype.setMaxListeners = function () {
                return this
            }, i.prefixed = f, i.EventEmitter = i, void 0 !== e && (e.exports = i)
        }, {}],
        4: [function (t, e, r) {
            var n, i, o, s, a, u, h, l, c, d, f, p, v, g, y, m, _, b, x;
            n = this, i = /iPhone/i, o = /iPod/i, s = /iPad/i, a = /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i, u = /Android/i, h = /(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i, l = /(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i, c = /Windows Phone/i, d = /(?=.*\bWindows\b)(?=.*\bARM\b)/i, f = /BlackBerry/i, p = /BB10/i, v = /Opera Mini/i, g = /(CriOS|Chrome)(?=.*\bMobile\b)/i, y = /(?=.*\bFirefox\b)(?=.*\bMobile\b)/i, m = new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)", "i"), _ = function (t, e) {
                return t.test(e)
            }, b = function (t) {
                var e = t || navigator.userAgent, r = e.split("[FBAN");
                if (void 0 !== r[1] && (e = r[0]), void 0 !== (r = e.split("Twitter"))[1] && (e = r[0]), this.apple = {
                    phone: _(i, e),
                    ipod: _(o, e),
                    tablet: !_(i, e) && _(s, e),
                    device: _(i, e) || _(o, e) || _(s, e)
                }, this.amazon = {
                    phone: _(h, e),
                    tablet: !_(h, e) && _(l, e),
                    device: _(h, e) || _(l, e)
                }, this.android = {
                    phone: _(h, e) || _(a, e),
                    tablet: !_(h, e) && !_(a, e) && (_(l, e) || _(u, e)),
                    device: _(h, e) || _(l, e) || _(a, e) || _(u, e)
                }, this.windows = {
                    phone: _(c, e),
                    tablet: _(d, e),
                    device: _(c, e) || _(d, e)
                }, this.other = {
                    blackberry: _(f, e),
                    blackberry10: _(p, e),
                    opera: _(v, e),
                    firefox: _(y, e),
                    chrome: _(g, e),
                    device: _(f, e) || _(p, e) || _(v, e) || _(y, e) || _(g, e)
                }, this.seven_inch = _(m, e), this.any = this.apple.device || this.android.device || this.windows.device || this.other.device || this.seven_inch, this.phone = this.apple.phone || this.android.phone || this.windows.phone, this.tablet = this.apple.tablet || this.android.tablet || this.windows.tablet, "undefined" == typeof window) return this
            }, x = function () {
                var t = new b;
                return t.Class = b, t
            }, void 0 !== e && e.exports && "undefined" == typeof window ? e.exports = b : void 0 !== e && e.exports && "undefined" != typeof window ? e.exports = x() : n.isMobile = x()
        }, {}],
        5: [function (t, e, r) {
            "use strict";
            Object.defineProperty(r, "__esModule", {value: !0});
            var i = function () {
                function n(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function (t, e, r) {
                    return e && n(t.prototype, e), r && n(t, r), t
                }
            }();

            function o(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            var n = function () {
                function n(t, e, r) {
                    void 0 === e && (e = !1), o(this, n), this._fn = t, this._once = e, this._thisArg = r, this._next = this._prev = this._owner = null
                }

                return i(n, [{
                    key: "detach", value: function () {
                        return null !== this._owner && (this._owner.detach(this), !0)
                    }
                }]), n
            }();

            function s(t, e) {
                return t._head ? (t._tail._next = e)._prev = t._tail : t._head = e, (t._tail = e)._owner = t, e
            }

            var a = function () {
                function t() {
                    o(this, t), this._head = this._tail = void 0
                }

                return i(t, [{
                    key: "handlers", value: function () {
                        var t = !(arguments.length <= 0 || void 0 === arguments[0]) && arguments[0], e = this._head;
                        if (t) return !!e;
                        for (var r = []; e;) r.push(e), e = e._next;
                        return r
                    }
                }, {
                    key: "has", value: function (t) {
                        if (!(t instanceof n)) throw new Error("MiniSignal#has(): First arg must be a MiniSignalBinding object.");
                        return t._owner === this
                    }
                }, {
                    key: "dispatch", value: function () {
                        var t = this._head;
                        if (!t) return !1;
                        for (; t;) t._once && this.detach(t), t._fn.apply(t._thisArg, arguments), t = t._next;
                        return !0
                    }
                }, {
                    key: "add", value: function (t) {
                        var e = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1];
                        if ("function" != typeof t) throw new Error("MiniSignal#add(): First arg must be a Function.");
                        return s(this, new n(t, !1, e))
                    }
                }, {
                    key: "once", value: function (t) {
                        var e = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1];
                        if ("function" != typeof t) throw new Error("MiniSignal#once(): First arg must be a Function.");
                        return s(this, new n(t, !0, e))
                    }
                }, {
                    key: "detach", value: function (t) {
                        if (!(t instanceof n)) throw new Error("MiniSignal#detach(): First arg must be a MiniSignalBinding object.");
                        return t._owner !== this || (t._prev && (t._prev._next = t._next), t._next && (t._next._prev = t._prev), t === this._head ? (this._head = t._next, null === t._next && (this._tail = null)) : t === this._tail && (this._tail = t._prev, this._tail._next = null), t._owner = null), this
                    }
                }, {
                    key: "detachAll", value: function () {
                        var t = this._head;
                        if (!t) return this;
                        for (this._head = this._tail = null; t;) t._owner = null, t = t._next;
                        return this
                    }
                }]), t
            }();
            a.MiniSignalBinding = n, r.default = a, e.exports = r.default
        }, {}],
        6: [function (t, e, r) {
            "use strict";
            var u = Object.getOwnPropertySymbols, h = Object.prototype.hasOwnProperty,
                l = Object.prototype.propertyIsEnumerable;
            e.exports = function () {
                try {
                    if (!Object.assign) return !1;
                    var t = new String("abc");
                    if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
                    for (var e = {}, r = 0; r < 10; r++) e["_" + String.fromCharCode(r)] = r;
                    if ("0123456789" !== Object.getOwnPropertyNames(e).map(function (t) {
                        return e[t]
                    }).join("")) return !1;
                    var n = {};
                    return "abcdefghijklmnopqrst".split("").forEach(function (t) {
                        n[t] = t
                    }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
                } catch (t) {
                    return !1
                }
            }() ? Object.assign : function (t, e) {
                for (var r, n, i = function (t) {
                    if (null == t) throw new TypeError("Object.assign cannot be called with null or undefined");
                    return Object(t)
                }(t), o = 1; o < arguments.length; o++) {
                    for (var s in r = Object(arguments[o])) h.call(r, s) && (i[s] = r[s]);
                    if (u) {
                        n = u(r);
                        for (var a = 0; a < n.length; a++) l.call(r, n[a]) && (i[n[a]] = r[n[a]])
                    }
                }
                return i
            }
        }, {}],
        7: [function (t, e, r) {
            "use strict";
            e.exports = function (t, e) {
                e = e || {};
                for (var n = {
                    key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
                    q: {name: "queryKey", parser: /(?:^|&)([^&=]*)=?([^&]*)/g},
                    parser: {
                        strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                        loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
                    }
                }, r = n.parser[e.strictMode ? "strict" : "loose"].exec(t), i = {}, o = 14; o--;) i[n.key[o]] = r[o] || "";
                return i[n.q.name] = {}, i[n.key[12]].replace(n.q.parser, function (t, e, r) {
                    e && (i[n.q.name][e] = r)
                }), i
            }
        }, {}],
        8: [function (t, e, h) {
            (function (i) {
                function o(t, e) {
                    for (var r = 0, n = t.length - 1; 0 <= n; n--) {
                        var i = t[n];
                        "." === i ? t.splice(n, 1) : ".." === i ? (t.splice(n, 1), r++) : r && (t.splice(n, 1), r--)
                    }
                    if (e) for (; r--; r) t.unshift("..");
                    return t
                }

                var e = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/, s = function (t) {
                    return e.exec(t).slice(1)
                };

                function a(t, e) {
                    if (t.filter) return t.filter(e);
                    for (var r = [], n = 0; n < t.length; n++) e(t[n], n, t) && r.push(t[n]);
                    return r
                }

                h.resolve = function () {
                    for (var t = "", e = !1, r = arguments.length - 1; -1 <= r && !e; r--) {
                        var n = 0 <= r ? arguments[r] : i.cwd();
                        if ("string" != typeof n) throw new TypeError("Arguments to path.resolve must be strings");
                        n && (t = n + "/" + t, e = "/" === n.charAt(0))
                    }
                    return (e ? "/" : "") + (t = o(a(t.split("/"), function (t) {
                        return !!t
                    }), !e).join("/")) || "."
                }, h.normalize = function (t) {
                    var e = h.isAbsolute(t), r = "/" === n(t, -1);
                    return (t = o(a(t.split("/"), function (t) {
                        return !!t
                    }), !e).join("/")) || e || (t = "."), t && r && (t += "/"), (e ? "/" : "") + t
                }, h.isAbsolute = function (t) {
                    return "/" === t.charAt(0)
                }, h.join = function () {
                    var t = Array.prototype.slice.call(arguments, 0);
                    return h.normalize(a(t, function (t, e) {
                        if ("string" != typeof t) throw new TypeError("Arguments to path.join must be strings");
                        return t
                    }).join("/"))
                }, h.relative = function (t, e) {
                    function r(t) {
                        for (var e = 0; e < t.length && "" === t[e]; e++) ;
                        for (var r = t.length - 1; 0 <= r && "" === t[r]; r--) ;
                        return r < e ? [] : t.slice(e, r - e + 1)
                    }

                    t = h.resolve(t).substr(1), e = h.resolve(e).substr(1);
                    for (var n = r(t.split("/")), i = r(e.split("/")), o = Math.min(n.length, i.length), s = o, a = 0; a < o; a++) if (n[a] !== i[a]) {
                        s = a;
                        break
                    }
                    var u = [];
                    for (a = s; a < n.length; a++) u.push("..");
                    return (u = u.concat(i.slice(s))).join("/")
                }, h.sep = "/", h.delimiter = ":", h.dirname = function (t) {
                    var e = s(t), r = e[0], n = e[1];
                    return r || n ? (n && (n = n.substr(0, n.length - 1)), r + n) : "."
                }, h.basename = function (t, e) {
                    var r = s(t)[2];
                    return e && r.substr(-1 * e.length) === e && (r = r.substr(0, r.length - e.length)), r
                }, h.extname = function (t) {
                    return s(t)[3]
                };
                var n = "b" === "ab".substr(-1) ? function (t, e, r) {
                    return t.substr(e, r)
                } : function (t, e, r) {
                    return e < 0 && (e = t.length + e), t.substr(e, r)
                }
            }).call(this, t("_process"))
        }, {_process: 26}],
        9: [function (t, e, r) {
            var i = new ArrayBuffer(0), o = function (t, e, r, n) {
                this.gl = t, this.buffer = t.createBuffer(), this.type = e || t.ARRAY_BUFFER, this.drawType = n || t.STATIC_DRAW, this.data = i, r && this.upload(r), this._updateID = 0
            };
            o.prototype.upload = function (t, e, r) {
                r || this.bind();
                var n = this.gl;
                t = t || this.data, e = e || 0, this.data.byteLength >= t.byteLength ? n.bufferSubData(this.type, e, t) : n.bufferData(this.type, t, this.drawType), this.data = t
            }, o.prototype.bind = function () {
                this.gl.bindBuffer(this.type, this.buffer)
            }, o.createVertexBuffer = function (t, e, r) {
                return new o(t, t.ARRAY_BUFFER, e, r)
            }, o.createIndexBuffer = function (t, e, r) {
                return new o(t, t.ELEMENT_ARRAY_BUFFER, e, r)
            }, o.create = function (t, e, r, n) {
                return new o(t, e, r, n)
            }, o.prototype.destroy = function () {
                this.gl.deleteBuffer(this.buffer)
            }, e.exports = o
        }, {}],
        10: [function (t, e, r) {
            var s = t("./GLTexture"), a = function (t, e, r) {
                this.gl = t, this.framebuffer = t.createFramebuffer(), this.stencil = null, this.texture = null, this.width = e || 100, this.height = r || 100
            };
            a.prototype.enableTexture = function (t) {
                var e = this.gl;
                this.texture = t || new s(e), this.texture.bind(), this.bind(), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, this.texture.texture, 0)
            }, a.prototype.enableStencil = function () {
                if (!this.stencil) {
                    var t = this.gl;
                    this.stencil = t.createRenderbuffer(), t.bindRenderbuffer(t.RENDERBUFFER, this.stencil), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.RENDERBUFFER, this.stencil), t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_STENCIL, this.width, this.height)
                }
            }, a.prototype.clear = function (t, e, r, n) {
                this.bind();
                var i = this.gl;
                i.clearColor(t, e, r, n), i.clear(i.COLOR_BUFFER_BIT | i.DEPTH_BUFFER_BIT)
            }, a.prototype.bind = function () {
                var t = this.gl;
                t.bindFramebuffer(t.FRAMEBUFFER, this.framebuffer)
            }, a.prototype.unbind = function () {
                var t = this.gl;
                t.bindFramebuffer(t.FRAMEBUFFER, null)
            }, a.prototype.resize = function (t, e) {
                var r = this.gl;
                this.width = t, this.height = e, this.texture && this.texture.uploadData(null, t, e), this.stencil && (r.bindRenderbuffer(r.RENDERBUFFER, this.stencil), r.renderbufferStorage(r.RENDERBUFFER, r.DEPTH_STENCIL, t, e))
            }, a.prototype.destroy = function () {
                var t = this.gl;
                this.texture && this.texture.destroy(), t.deleteFramebuffer(this.framebuffer), this.gl = null, this.stencil = null, this.texture = null
            }, a.createRGBA = function (t, e, r, n) {
                var i = s.fromData(t, null, e, r);
                i.enableNearestScaling(), i.enableWrapClamp();
                var o = new a(t, e, r);
                return o.enableTexture(i), o.unbind(), o
            }, a.createFloat32 = function (t, e, r, n) {
                var i = new s.fromData(t, n, e, r);
                i.enableNearestScaling(), i.enableWrapClamp();
                var o = new a(t, e, r);
                return o.enableTexture(i), o.unbind(), o
            }, e.exports = a
        }, {"./GLTexture": 12}],
        11: [function (t, e, r) {
            var o = t("./shader/compileProgram"), s = t("./shader/extractAttributes"),
                a = t("./shader/extractUniforms"), u = t("./shader/setPrecision"),
                h = t("./shader/generateUniformAccessObject"), n = function (t, e, r, n, i) {
                    this.gl = t, n && (e = u(e, n), r = u(r, n)), this.program = o(t, e, r, i), this.attributes = s(t, this.program), this.uniformData = a(t, this.program), this.uniforms = h(t, this.uniformData)
                };
            n.prototype.bind = function () {
                this.gl.useProgram(this.program)
            }, n.prototype.destroy = function () {
                this.attributes = null, this.uniformData = null, this.uniforms = null, this.gl.deleteProgram(this.program)
            }, e.exports = n
        }, {
            "./shader/compileProgram": 17,
            "./shader/extractAttributes": 19,
            "./shader/extractUniforms": 20,
            "./shader/generateUniformAccessObject": 21,
            "./shader/setPrecision": 25
        }],
        12: [function (t, e, r) {
            var o = function (t, e, r, n, i) {
                this.gl = t, this.texture = t.createTexture(), this.mipmap = !1, this.premultiplyAlpha = !1, this.width = e || -1, this.height = r || -1, this.format = n || t.RGBA, this.type = i || t.UNSIGNED_BYTE
            }, i = !(o.prototype.upload = function (t) {
                this.bind();
                var e = this.gl;
                e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha);
                var r = t.videoWidth || t.width, n = t.videoHeight || t.height;
                n !== this.height || r !== this.width ? e.texImage2D(e.TEXTURE_2D, 0, this.format, this.format, this.type, t) : e.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, this.format, this.type, t), this.width = r, this.height = n
            });
            o.prototype.uploadData = function (t, e, r) {
                this.bind();
                var n = this.gl;
                if (t instanceof Float32Array) {
                    if (!i) {
                        if (!n.getExtension("OES_texture_float")) throw new Error("floating point textures not available");
                        i = !0
                    }
                    this.type = n.FLOAT
                } else this.type = this.type || n.UNSIGNED_BYTE;
                n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha), e !== this.width || r !== this.height ? n.texImage2D(n.TEXTURE_2D, 0, this.format, e, r, 0, this.format, this.type, t || null) : n.texSubImage2D(n.TEXTURE_2D, 0, 0, 0, e, r, this.format, this.type, t || null), this.width = e, this.height = r
            }, o.prototype.bind = function (t) {
                var e = this.gl;
                void 0 !== t && e.activeTexture(e.TEXTURE0 + t), e.bindTexture(e.TEXTURE_2D, this.texture)
            }, o.prototype.unbind = function () {
                var t = this.gl;
                t.bindTexture(t.TEXTURE_2D, null)
            }, o.prototype.minFilter = function (t) {
                var e = this.gl;
                this.bind(), this.mipmap ? e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, t ? e.LINEAR_MIPMAP_LINEAR : e.NEAREST_MIPMAP_NEAREST) : e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, t ? e.LINEAR : e.NEAREST)
            }, o.prototype.magFilter = function (t) {
                var e = this.gl;
                this.bind(), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, t ? e.LINEAR : e.NEAREST)
            }, o.prototype.enableMipmap = function () {
                var t = this.gl;
                this.bind(), this.mipmap = !0, t.generateMipmap(t.TEXTURE_2D)
            }, o.prototype.enableLinearScaling = function () {
                this.minFilter(!0), this.magFilter(!0)
            }, o.prototype.enableNearestScaling = function () {
                this.minFilter(!1), this.magFilter(!1)
            }, o.prototype.enableWrapClamp = function () {
                var t = this.gl;
                this.bind(), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE)
            }, o.prototype.enableWrapRepeat = function () {
                var t = this.gl;
                this.bind(), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.REPEAT), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.REPEAT)
            }, o.prototype.enableWrapMirrorRepeat = function () {
                var t = this.gl;
                this.bind(), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.MIRRORED_REPEAT), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.MIRRORED_REPEAT)
            }, o.prototype.destroy = function () {
                this.gl.deleteTexture(this.texture)
            }, o.fromSource = function (t, e, r) {
                var n = new o(t);
                return n.premultiplyAlpha = r || !1, n.upload(e), n
            }, o.fromData = function (t, e, r, n) {
                var i = new o(t);
                return i.uploadData(e, r, n), i
            }, e.exports = o
        }, {}],
        13: [function (t, e, r) {
            var i = t("./setVertexAttribArrays");

            function n(t, e) {
                if (this.nativeVaoExtension = null, n.FORCE_NATIVE || (this.nativeVaoExtension = t.getExtension("OES_vertex_array_object") || t.getExtension("MOZ_OES_vertex_array_object") || t.getExtension("WEBKIT_OES_vertex_array_object")), this.nativeState = e, this.nativeVaoExtension) {
                    this.nativeVao = this.nativeVaoExtension.createVertexArrayOES();
                    var r = t.getParameter(t.MAX_VERTEX_ATTRIBS);
                    this.nativeState = {tempAttribState: new Array(r), attribState: new Array(r)}
                }
                this.gl = t, this.attributes = [], this.indexBuffer = null, this.dirty = !1
            }

            n.prototype.constructor = n, (e.exports = n).FORCE_NATIVE = !1, n.prototype.bind = function () {
                return this.nativeVao ? (this.nativeVaoExtension.bindVertexArrayOES(this.nativeVao), this.dirty && (this.dirty = !1, this.activate())) : this.activate(), this
            }, n.prototype.unbind = function () {
                return this.nativeVao && this.nativeVaoExtension.bindVertexArrayOES(null), this
            }, n.prototype.activate = function () {
                for (var t = this.gl, e = null, r = 0; r < this.attributes.length; r++) {
                    var n = this.attributes[r];
                    e !== n.buffer && (n.buffer.bind(), e = n.buffer), t.vertexAttribPointer(n.attribute.location, n.attribute.size, n.type || t.FLOAT, n.normalized || !1, n.stride || 0, n.start || 0)
                }
                return i(t, this.attributes, this.nativeState), this.indexBuffer && this.indexBuffer.bind(), this
            }, n.prototype.addAttribute = function (t, e, r, n, i, o) {
                return this.attributes.push({
                    buffer: t,
                    attribute: e,
                    location: e.location,
                    type: r || this.gl.FLOAT,
                    normalized: n || !1,
                    stride: i || 0,
                    start: o || 0
                }), this.dirty = !0, this
            }, n.prototype.addIndex = function (t) {
                return this.indexBuffer = t, this.dirty = !0, this
            }, n.prototype.clear = function () {
                return this.nativeVao && this.nativeVaoExtension.bindVertexArrayOES(this.nativeVao), this.attributes.length = 0, this.indexBuffer = null, this
            }, n.prototype.draw = function (t, e, r) {
                var n = this.gl;
                return this.indexBuffer ? n.drawElements(t, e || this.indexBuffer.data.length, n.UNSIGNED_SHORT, 2 * (r || 0)) : n.drawArrays(t, r, e || this.getSize()), this
            }, n.prototype.destroy = function () {
                this.gl = null, this.indexBuffer = null, this.attributes = null, this.nativeState = null, this.nativeVao && this.nativeVaoExtension.deleteVertexArrayOES(this.nativeVao), this.nativeVaoExtension = null, this.nativeVao = null
            }, n.prototype.getSize = function () {
                var t = this.attributes[0];
                return t.buffer.data.length / (t.stride / 4 || t.attribute.size)
            }
        }, {"./setVertexAttribArrays": 16}],
        14: [function (t, e, r) {
            e.exports = function (t, e) {
                var r = t.getContext("webgl", e) || t.getContext("experimental-webgl", e);
                if (!r) throw new Error("This browser does not support webGL. Try using the canvas renderer");
                return r
            }
        }, {}],
        15: [function (t, e, r) {
            var n = {
                createContext: t("./createContext"),
                setVertexAttribArrays: t("./setVertexAttribArrays"),
                GLBuffer: t("./GLBuffer"),
                GLFramebuffer: t("./GLFramebuffer"),
                GLShader: t("./GLShader"),
                GLTexture: t("./GLTexture"),
                VertexArrayObject: t("./VertexArrayObject"),
                shader: t("./shader")
            };
            void 0 !== e && e.exports && (e.exports = n), "undefined" != typeof window && (window.PIXI = window.PIXI || {}, window.PIXI.glCore = n)
        }, {
            "./GLBuffer": 9,
            "./GLFramebuffer": 10,
            "./GLShader": 11,
            "./GLTexture": 12,
            "./VertexArrayObject": 13,
            "./createContext": 14,
            "./setVertexAttribArrays": 16,
            "./shader": 22
        }],
        16: [function (t, e, r) {
            e.exports = function (t, e, r) {
                var n;
                if (r) {
                    var i = r.tempAttribState, o = r.attribState;
                    for (n = 0; n < i.length; n++) i[n] = !1;
                    for (n = 0; n < e.length; n++) i[e[n].attribute.location] = !0;
                    for (n = 0; n < o.length; n++) o[n] !== i[n] && (o[n] = i[n], r.attribState[n] ? t.enableVertexAttribArray(n) : t.disableVertexAttribArray(n))
                } else for (n = 0; n < e.length; n++) {
                    var s = e[n];
                    t.enableVertexAttribArray(s.attribute.location)
                }
            }
        }, {}],
        17: [function (t, e, r) {
            var u = function (t, e, r) {
                var n = t.createShader(e);
                return t.shaderSource(n, r), t.compileShader(n), t.getShaderParameter(n, t.COMPILE_STATUS) ? n : (console.log(t.getShaderInfoLog(n)), null)
            };
            e.exports = function (t, e, r, n) {
                var i = u(t, t.VERTEX_SHADER, e), o = u(t, t.FRAGMENT_SHADER, r), s = t.createProgram();
                if (t.attachShader(s, i), t.attachShader(s, o), n) for (var a in n) t.bindAttribLocation(s, n[a], a);
                return t.linkProgram(s), t.getProgramParameter(s, t.LINK_STATUS) || (console.error("Pixi.js Error: Could not initialize shader."), console.error("gl.VALIDATE_STATUS", t.getProgramParameter(s, t.VALIDATE_STATUS)), console.error("gl.getError()", t.getError()), "" !== t.getProgramInfoLog(s) && console.warn("Pixi.js Warning: gl.getProgramInfoLog()", t.getProgramInfoLog(s)), t.deleteProgram(s), s = null), t.deleteShader(i), t.deleteShader(o), s
            }
        }, {}],
        18: [function (t, e, r) {
            var n = function (t) {
                for (var e = new Array(t), r = 0; r < e.length; r++) e[r] = !1;
                return e
            };
            e.exports = function (t, e) {
                switch (t) {
                    case"float":
                        return 0;
                    case"vec2":
                        return new Float32Array(2 * e);
                    case"vec3":
                        return new Float32Array(3 * e);
                    case"vec4":
                        return new Float32Array(4 * e);
                    case"int":
                    case"sampler2D":
                        return 0;
                    case"ivec2":
                        return new Int32Array(2 * e);
                    case"ivec3":
                        return new Int32Array(3 * e);
                    case"ivec4":
                        return new Int32Array(4 * e);
                    case"bool":
                        return !1;
                    case"bvec2":
                        return n(2 * e);
                    case"bvec3":
                        return n(3 * e);
                    case"bvec4":
                        return n(4 * e);
                    case"mat2":
                        return new Float32Array([1, 0, 0, 1]);
                    case"mat3":
                        return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
                    case"mat4":
                        return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
                }
            }
        }, {}],
        19: [function (t, e, r) {
            var a = t("./mapType"), u = t("./mapSize"), h = function (t, e, r, n) {
                gl.vertexAttribPointer(this.location, this.size, t || gl.FLOAT, e || !1, r || 0, n || 0)
            };
            e.exports = function (t, e) {
                for (var r = {}, n = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES), i = 0; i < n; i++) {
                    var o = t.getActiveAttrib(e, i), s = a(t, o.type);
                    r[o.name] = {type: s, size: u(s), location: t.getAttribLocation(e, o.name), pointer: h}
                }
                return r
            }
        }, {"./mapSize": 23, "./mapType": 24}],
        20: [function (t, e, r) {
            var u = t("./mapType"), h = t("./defaultValue");
            e.exports = function (t, e) {
                for (var r = {}, n = t.getProgramParameter(e, t.ACTIVE_UNIFORMS), i = 0; i < n; i++) {
                    var o = t.getActiveUniform(e, i), s = o.name.replace(/\[.*?\]/, ""), a = u(t, o.type);
                    r[s] = {type: a, size: o.size, location: t.getUniformLocation(e, s), value: h(a, o.size)}
                }
                return r
            }
        }, {"./defaultValue": 18, "./mapType": 24}],
        21: [function (t, e, r) {
            var l = function (t) {
                    var e = n.replace("%%", t);
                    return new Function(e)
                }, c = function (t, e) {
                    var r, n = i.replace(/%%/g, t);
                    return (r = 1 === e.size ? o[e.type] : s[e.type]) && (n += "\nthis.gl." + r + ";"), new Function("value", n)
                }, d = function (t, e) {
                    for (var r = e, n = 0; n < t.length - 1; n++) {
                        var i = r[t[n]] || {data: {}};
                        r[t[n]] = i, r = i
                    }
                    return r
                }, n = ["return this.data.%%.value;"].join("\n"),
                i = ["this.data.%%.value = value;", "var location = this.data.%%.location;"].join("\n"), o = {
                    float: "uniform1f(location, value)",
                    vec2: "uniform2f(location, value[0], value[1])",
                    vec3: "uniform3f(location, value[0], value[1], value[2])",
                    vec4: "uniform4f(location, value[0], value[1], value[2], value[3])",
                    int: "uniform1i(location, value)",
                    ivec2: "uniform2i(location, value[0], value[1])",
                    ivec3: "uniform3i(location, value[0], value[1], value[2])",
                    ivec4: "uniform4i(location, value[0], value[1], value[2], value[3])",
                    bool: "uniform1i(location, value)",
                    bvec2: "uniform2i(location, value[0], value[1])",
                    bvec3: "uniform3i(location, value[0], value[1], value[2])",
                    bvec4: "uniform4i(location, value[0], value[1], value[2], value[3])",
                    mat2: "uniformMatrix2fv(location, false, value)",
                    mat3: "uniformMatrix3fv(location, false, value)",
                    mat4: "uniformMatrix4fv(location, false, value)",
                    sampler2D: "uniform1i(location, value)"
                }, s = {
                    float: "uniform1fv(location, value)",
                    vec2: "uniform2fv(location, value)",
                    vec3: "uniform3fv(location, value)",
                    vec4: "uniform4fv(location, value)",
                    int: "uniform1iv(location, value)",
                    ivec2: "uniform2iv(location, value)",
                    ivec3: "uniform3iv(location, value)",
                    ivec4: "uniform4iv(location, value)",
                    bool: "uniform1iv(location, value)",
                    bvec2: "uniform2iv(location, value)",
                    bvec3: "uniform3iv(location, value)",
                    bvec4: "uniform4iv(location, value)",
                    sampler2D: "uniform1iv(location, value)"
                };
            e.exports = function (t, e) {
                var r = {data: {}};
                r.gl = t;
                for (var n = Object.keys(e), i = 0; i < n.length; i++) {
                    var o = n[i], s = o.split("."), a = s[s.length - 1], u = d(s, r), h = e[o];
                    u.data[a] = h, u.gl = t, Object.defineProperty(u, a, {get: l(a), set: c(a, h)})
                }
                return r
            }
        }, {}],
        22: [function (t, e, r) {
            e.exports = {
                compileProgram: t("./compileProgram"),
                defaultValue: t("./defaultValue"),
                extractAttributes: t("./extractAttributes"),
                extractUniforms: t("./extractUniforms"),
                generateUniformAccessObject: t("./generateUniformAccessObject"),
                setPrecision: t("./setPrecision"),
                mapSize: t("./mapSize"),
                mapType: t("./mapType")
            }
        }, {
            "./compileProgram": 17,
            "./defaultValue": 18,
            "./extractAttributes": 19,
            "./extractUniforms": 20,
            "./generateUniformAccessObject": 21,
            "./mapSize": 23,
            "./mapType": 24,
            "./setPrecision": 25
        }],
        23: [function (t, e, r) {
            var n = {
                float: 1,
                vec2: 2,
                vec3: 3,
                vec4: 4,
                int: 1,
                ivec2: 2,
                ivec3: 3,
                ivec4: 4,
                bool: 1,
                bvec2: 2,
                bvec3: 3,
                bvec4: 4,
                mat2: 4,
                mat3: 9,
                mat4: 16,
                sampler2D: 1
            };
            e.exports = function (t) {
                return n[t]
            }
        }, {}],
        24: [function (t, e, r) {
            var o = null, s = {
                FLOAT: "float",
                FLOAT_VEC2: "vec2",
                FLOAT_VEC3: "vec3",
                FLOAT_VEC4: "vec4",
                INT: "int",
                INT_VEC2: "ivec2",
                INT_VEC3: "ivec3",
                INT_VEC4: "ivec4",
                BOOL: "bool",
                BOOL_VEC2: "bvec2",
                BOOL_VEC3: "bvec3",
                BOOL_VEC4: "bvec4",
                FLOAT_MAT2: "mat2",
                FLOAT_MAT3: "mat3",
                FLOAT_MAT4: "mat4",
                SAMPLER_2D: "sampler2D"
            };
            e.exports = function (t, e) {
                if (!o) {
                    var r = Object.keys(s);
                    o = {};
                    for (var n = 0; n < r.length; ++n) {
                        var i = r[n];
                        o[t[i]] = s[i]
                    }
                }
                return o[e]
            }
        }, {}],
        25: [function (t, e, r) {
            e.exports = function (t, e) {
                return "precision" !== t.substring(0, 9) ? "precision " + e + " float;\n" + t : t
            }
        }, {}],
        26: [function (t, e, r) {
            var n, i, o = e.exports = {};

            function s() {
                throw new Error("setTimeout has not been defined")
            }

            function a() {
                throw new Error("clearTimeout has not been defined")
            }

            function u(e) {
                if (n === setTimeout) return setTimeout(e, 0);
                if ((n === s || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
                try {
                    return n(e, 0)
                } catch (t) {
                    try {
                        return n.call(null, e, 0)
                    } catch (t) {
                        return n.call(this, e, 0)
                    }
                }
            }

            !function () {
                try {
                    n = "function" == typeof setTimeout ? setTimeout : s
                } catch (t) {
                    n = s
                }
                try {
                    i = "function" == typeof clearTimeout ? clearTimeout : a
                } catch (t) {
                    i = a
                }
            }();
            var h, l = [], c = !1, d = -1;

            function f() {
                c && h && (c = !1, h.length ? l = h.concat(l) : d = -1, l.length && p())
            }

            function p() {
                if (!c) {
                    var t = u(f);
                    c = !0;
                    for (var e = l.length; e;) {
                        for (h = l, l = []; ++d < e;) h && h[d].run();
                        d = -1, e = l.length
                    }
                    h = null, c = !1, function (e) {
                        if (i === clearTimeout) return clearTimeout(e);
                        if ((i === a || !i) && clearTimeout) return i = clearTimeout, clearTimeout(e);
                        try {
                            i(e)
                        } catch (t) {
                            try {
                                return i.call(null, e)
                            } catch (t) {
                                return i.call(this, e)
                            }
                        }
                    }(t)
                }
            }

            function v(t, e) {
                this.fun = t, this.array = e
            }

            function g() {
            }

            o.nextTick = function (t) {
                var e = new Array(arguments.length - 1);
                if (1 < arguments.length) for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
                l.push(new v(t, e)), 1 !== l.length || c || u(p)
            }, v.prototype.run = function () {
                this.fun.apply(null, this.array)
            }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = g, o.addListener = g, o.once = g, o.off = g, o.removeListener = g, o.removeAllListeners = g, o.emit = g, o.prependListener = g, o.prependOnceListener = g, o.listeners = function (t) {
                return []
            }, o.binding = function (t) {
                throw new Error("process.binding is not supported")
            }, o.cwd = function () {
                return "/"
            }, o.chdir = function (t) {
                throw new Error("process.chdir is not supported")
            }, o.umask = function () {
                return 0
            }
        }, {}],
        27: [function (t, I, D) {
            (function (A) {
                !function (t) {
                    var e = "object" == typeof D && D && !D.nodeType && D,
                        r = "object" == typeof I && I && !I.nodeType && I, n = "object" == typeof A && A;
                    n.global !== n && n.window !== n && n.self !== n || (t = n);
                    var i, o, y = 2147483647, m = 36, _ = 1, b = 26, s = 38, a = 700, x = 72, T = 128, w = "-",
                        u = /^xn--/, h = /[^\x20-\x7E]/, l = /[\x2E\u3002\uFF0E\uFF61]/g, c = {
                            overflow: "Overflow: input needs wider integers to process",
                            "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                            "invalid-input": "Invalid input"
                        }, d = m - _, E = Math.floor, S = String.fromCharCode;

                    function O(t) {
                        throw new RangeError(c[t])
                    }

                    function f(t, e) {
                        for (var r = t.length, n = []; r--;) n[r] = e(t[r]);
                        return n
                    }

                    function p(t, e) {
                        var r = t.split("@"), n = "";
                        return 1 < r.length && (n = r[0] + "@", t = r[1]), n + f((t = t.replace(l, ".")).split("."), e).join(".")
                    }

                    function P(t) {
                        for (var e, r, n = [], i = 0, o = t.length; i < o;) 55296 <= (e = t.charCodeAt(i++)) && e <= 56319 && i < o ? 56320 == (64512 & (r = t.charCodeAt(i++))) ? n.push(((1023 & e) << 10) + (1023 & r) + 65536) : (n.push(e), i--) : n.push(e);
                        return n
                    }

                    function M(t) {
                        return f(t, function (t) {
                            var e = "";
                            return 65535 < t && (e += S((t -= 65536) >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), e += S(t)
                        }).join("")
                    }

                    function C(t, e) {
                        return t + 22 + 75 * (t < 26) - ((0 != e) << 5)
                    }

                    function R(t, e, r) {
                        var n = 0;
                        for (t = r ? E(t / a) : t >> 1, t += E(t / e); d * b >> 1 < t; n += m) t = E(t / d);
                        return E(n + (d + 1) * t / (t + s))
                    }

                    function v(t) {
                        var e, r, n, i, o, s, a, u, h, l, c, d = [], f = t.length, p = 0, v = T, g = x;
                        for ((r = t.lastIndexOf(w)) < 0 && (r = 0), n = 0; n < r; ++n) 128 <= t.charCodeAt(n) && O("not-basic"), d.push(t.charCodeAt(n));
                        for (i = 0 < r ? r + 1 : 0; i < f;) {
                            for (o = p, s = 1, a = m; f <= i && O("invalid-input"), c = t.charCodeAt(i++), (m <= (u = c - 48 < 10 ? c - 22 : c - 65 < 26 ? c - 65 : c - 97 < 26 ? c - 97 : m) || u > E((y - p) / s)) && O("overflow"), p += u * s, !(u < (h = a <= g ? _ : g + b <= a ? b : a - g)); a += m) s > E(y / (l = m - h)) && O("overflow"), s *= l;
                            g = R(p - o, e = d.length + 1, 0 == o), E(p / e) > y - v && O("overflow"), v += E(p / e), p %= e, d.splice(p++, 0, v)
                        }
                        return M(d)
                    }

                    function g(t) {
                        var e, r, n, i, o, s, a, u, h, l, c, d, f, p, v, g = [];
                        for (d = (t = P(t)).length, e = T, o = x, s = r = 0; s < d; ++s) (c = t[s]) < 128 && g.push(S(c));
                        for (n = i = g.length, i && g.push(w); n < d;) {
                            for (a = y, s = 0; s < d; ++s) e <= (c = t[s]) && c < a && (a = c);
                            for (a - e > E((y - r) / (f = n + 1)) && O("overflow"), r += (a - e) * f, e = a, s = 0; s < d; ++s) if ((c = t[s]) < e && ++r > y && O("overflow"), c == e) {
                                for (u = r, h = m; !(u < (l = h <= o ? _ : o + b <= h ? b : h - o)); h += m) v = u - l, p = m - l, g.push(S(C(l + v % p, 0))), u = E(v / p);
                                g.push(S(C(u, 0))), o = R(r, f, n == i), r = 0, ++n
                            }
                            ++r, ++e
                        }
                        return g.join("")
                    }

                    if (i = {
                        version: "1.4.1",
                        ucs2: {decode: P, encode: M},
                        decode: v,
                        encode: g,
                        toASCII: function (t) {
                            return p(t, function (t) {
                                return h.test(t) ? "xn--" + g(t) : t
                            })
                        },
                        toUnicode: function (t) {
                            return p(t, function (t) {
                                return u.test(t) ? v(t.slice(4).toLowerCase()) : t
                            })
                        }
                    }, e && r) if (I.exports == e) r.exports = i; else for (o in i) i.hasOwnProperty(o) && (e[o] = i[o]); else t.punycode = i
                }(this)
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        28: [function (t, e, r) {
            "use strict";
            e.exports = function (t, e, r, n) {
                e = e || "&", r = r || "=";
                var i = {};
                if ("string" != typeof t || 0 === t.length) return i;
                var o = /\+/g;
                t = t.split(e);
                var s = 1e3;
                n && "number" == typeof n.maxKeys && (s = n.maxKeys);
                var a, u, h = t.length;
                0 < s && s < h && (h = s);
                for (var l = 0; l < h; ++l) {
                    var c, d, f, p, v = t[l].replace(o, "%20"), g = v.indexOf(r);
                    0 <= g ? (c = v.substr(0, g), d = v.substr(g + 1)) : (c = v, d = ""), f = decodeURIComponent(c), p = decodeURIComponent(d), a = i, u = f, Object.prototype.hasOwnProperty.call(a, u) ? y(i[f]) ? i[f].push(p) : i[f] = [i[f], p] : i[f] = p
                }
                return i
            };
            var y = Array.isArray || function (t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            }
        }, {}],
        29: [function (t, e, r) {
            "use strict";
            var o = function (t) {
                switch (typeof t) {
                    case"string":
                        return t;
                    case"boolean":
                        return t ? "true" : "false";
                    case"number":
                        return isFinite(t) ? t : "";
                    default:
                        return ""
                }
            };
            e.exports = function (r, n, i, t) {
                return n = n || "&", i = i || "=", null === r && (r = void 0), "object" == typeof r ? a(u(r), function (t) {
                    var e = encodeURIComponent(o(t)) + i;
                    return s(r[t]) ? a(r[t], function (t) {
                        return e + encodeURIComponent(o(t))
                    }).join(n) : e + encodeURIComponent(o(r[t]))
                }).join(n) : t ? encodeURIComponent(o(t)) + i + encodeURIComponent(o(r)) : ""
            };
            var s = Array.isArray || function (t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            };

            function a(t, e) {
                if (t.map) return t.map(e);
                for (var r = [], n = 0; n < t.length; n++) r.push(e(t[n], n));
                return r
            }

            var u = Object.keys || function (t) {
                var e = [];
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.push(r);
                return e
            }
        }, {}],
        30: [function (t, e, r) {
            "use strict";
            r.decode = r.parse = t("./decode"), r.encode = r.stringify = t("./encode")
        }, {"./decode": 28, "./encode": 29}],
        31: [function (t, e, r) {
            "use strict";
            e.exports = function (t, e, r) {
                var n, i = t.length;
                if (!(i <= e || 0 === r)) {
                    var o = i - (r = i < e + r ? i - e : r);
                    for (n = e; n < o; ++n) t[n] = t[n + r];
                    t.length = o
                }
            }
        }, {}],
        32: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, i = n(t("mini-signals")), o = n(t("parse-uri")), s = function (t) {
                {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e.default = t, e
                }
            }(t("./async")), c = n(t("./Resource"));

            function n(t) {
                return t && t.__esModule ? t : {default: t}
            }

            var a = /(#[\w-]+)?$/, u = function () {
                function n() {
                    var r = this, t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
                        e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 10;
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, n), this.baseUrl = t, this.progress = 0, this.loading = !1, this.defaultQueryString = "", this._beforeMiddleware = [], this._afterMiddleware = [], this._resourcesParsing = [], this._boundLoadResource = function (t, e) {
                        return r._loadResource(t, e)
                    }, this._queue = s.queue(this._boundLoadResource, e), this._queue.pause(), this.resources = {}, this.onProgress = new i.default, this.onError = new i.default, this.onLoad = new i.default, this.onStart = new i.default, this.onComplete = new i.default
                }

                return n.prototype.add = function (t, e, r, n) {
                    if (Array.isArray(t)) {
                        for (var i = 0; i < t.length; ++i) this.add(t[i]);
                        return this
                    }
                    if ("object" === (void 0 === t ? "undefined" : l(t)) && (n = e || t.callback || t.onComplete, e = (r = t).url, t = t.name || t.key || t.url), "string" != typeof e && (n = r, r = e, e = t), "string" != typeof e) throw new Error("No url passed to add resource to loader.");
                    if ("function" == typeof r && (n = r, r = null), this.loading && (!r || !r.parentResource)) throw new Error("Cannot add resources while the loader is running.");
                    if (this.resources[t]) throw new Error('Resource named "' + t + '" already exists.');
                    if (e = this._prepareUrl(e), this.resources[t] = new c.default(t, e, r), "function" == typeof n && this.resources[t].onAfterMiddleware.once(n), this.loading) {
                        for (var o = r.parentResource, s = [], a = 0; a < o.children.length; ++a) o.children[a].isComplete || s.push(o.children[a]);
                        var u = o.progressChunk * (s.length + 1) / (s.length + 2);
                        o.children.push(this.resources[t]), o.progressChunk = u;
                        for (var h = 0; h < s.length; ++h) s[h].progressChunk = u;
                        this.resources[t].progressChunk = u
                    }
                    return this._queue.push(this.resources[t]), this
                }, n.prototype.pre = function (t) {
                    return this._beforeMiddleware.push(t), this
                }, n.prototype.use = function (t) {
                    return this._afterMiddleware.push(t), this
                }, n.prototype.reset = function () {
                    for (var t in this.progress = 0, this.loading = !1, this._queue.kill(), this._queue.pause(), this.resources) {
                        var e = this.resources[t];
                        e._onLoadBinding && e._onLoadBinding.detach(), e.isLoading && e.abort()
                    }
                    return this.resources = {}, this
                }, n.prototype.load = function (t) {
                    if ("function" == typeof t && this.onComplete.once(t), this.loading) return this;
                    for (var e = 100 / this._queue._tasks.length, r = 0; r < this._queue._tasks.length; ++r) this._queue._tasks[r].data.progressChunk = e;
                    return this.loading = !0, this.onStart.dispatch(this), this._queue.resume(), this
                }, n.prototype._prepareUrl = function (t) {
                    var e = (0, o.default)(t, {strictMode: !0}), r = void 0;
                    if (r = e.protocol || !e.path || 0 === t.indexOf("//") ? t : this.baseUrl.length && this.baseUrl.lastIndexOf("/") !== this.baseUrl.length - 1 && "/" !== t.charAt(0) ? this.baseUrl + "/" + t : this.baseUrl + t, this.defaultQueryString) {
                        var n = a.exec(r)[0];
                        -1 !== (r = r.substr(0, r.length - n.length)).indexOf("?") ? r += "&" + this.defaultQueryString : r += "?" + this.defaultQueryString, r += n
                    }
                    return r
                }, n.prototype._loadResource = function (r, t) {
                    var n = this;
                    r._dequeue = t, s.eachSeries(this._beforeMiddleware, function (t, e) {
                        t.call(n, r, function () {
                            e(r.isComplete ? {} : null)
                        })
                    }, function () {
                        r.isComplete ? n._onLoad(r) : (r._onLoadBinding = r.onComplete.once(n._onLoad, n), r.load())
                    }, !0)
                }, n.prototype._onComplete = function () {
                    this.loading = !1, this.onComplete.dispatch(this, this.resources)
                }, n.prototype._onLoad = function (r) {
                    var n = this;
                    r._onLoadBinding = null, this._resourcesParsing.push(r), r._dequeue(), s.eachSeries(this._afterMiddleware, function (t, e) {
                        t.call(n, r, e)
                    }, function () {
                        r.onAfterMiddleware.dispatch(r), n.progress += r.progressChunk, n.onProgress.dispatch(n, r), r.error ? n.onError.dispatch(r.error, n, r) : n.onLoad.dispatch(n, r), n._resourcesParsing.splice(n._resourcesParsing.indexOf(r), 1), n._queue.idle() && 0 === n._resourcesParsing.length && (n.progress = 100, n._onComplete())
                    }, !0)
                }, n
            }();
            r.default = u
        }, {"./Resource": 33, "./async": 34, "mini-signals": 5, "parse-uri": 7}],
        33: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n = function () {
                function n(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function (t, e, r) {
                    return e && n(t.prototype, e), r && n(t, r), t
                }
            }(), i = o(t("parse-uri")), s = o(t("mini-signals"));

            function o(t) {
                return t && t.__esModule ? t : {default: t}
            }

            var a = !(!window.XDomainRequest || "withCredentials" in new XMLHttpRequest), u = null;

            function h() {
            }

            var l = function () {
                function o(t, e, r) {
                    if (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, o), "string" != typeof t || "string" != typeof e) throw new Error("Both name and url are required for constructing a resource.");
                    r = r || {}, this._flags = 0, this._setFlag(o.STATUS_FLAGS.DATA_URL, 0 === e.indexOf("data:")), this.name = t, this.url = e, this.extension = this._getExtension(), this.data = null, this.crossOrigin = !0 === r.crossOrigin ? "anonymous" : r.crossOrigin, this.loadType = r.loadType || this._determineLoadType(), this.xhrType = r.xhrType, this.metadata = r.metadata || {}, this.error = null, this.xhr = null, this.children = [], this.type = o.TYPE.UNKNOWN, this.progressChunk = 0, this._dequeue = h, this._onLoadBinding = null, this._boundComplete = this.complete.bind(this), this._boundOnError = this._onError.bind(this), this._boundOnProgress = this._onProgress.bind(this), this._boundXhrOnError = this._xhrOnError.bind(this), this._boundXhrOnAbort = this._xhrOnAbort.bind(this), this._boundXhrOnLoad = this._xhrOnLoad.bind(this), this._boundXdrOnTimeout = this._xdrOnTimeout.bind(this), this.onStart = new s.default, this.onProgress = new s.default, this.onComplete = new s.default, this.onAfterMiddleware = new s.default
                }

                return o.setExtensionLoadType = function (t, e) {
                    c(o._loadTypeMap, t, e)
                }, o.setExtensionXhrType = function (t, e) {
                    c(o._xhrTypeMap, t, e)
                }, o.prototype.complete = function () {
                    if (this.data && this.data.removeEventListener && (this.data.removeEventListener("error", this._boundOnError, !1), this.data.removeEventListener("load", this._boundComplete, !1), this.data.removeEventListener("progress", this._boundOnProgress, !1), this.data.removeEventListener("canplaythrough", this._boundComplete, !1)), this.xhr && (this.xhr.removeEventListener ? (this.xhr.removeEventListener("error", this._boundXhrOnError, !1), this.xhr.removeEventListener("abort", this._boundXhrOnAbort, !1), this.xhr.removeEventListener("progress", this._boundOnProgress, !1), this.xhr.removeEventListener("load", this._boundXhrOnLoad, !1)) : (this.xhr.onerror = null, this.xhr.ontimeout = null, this.xhr.onprogress = null, this.xhr.onload = null)), this.isComplete) throw new Error("Complete called again for an already completed resource.");
                    this._setFlag(o.STATUS_FLAGS.COMPLETE, !0), this._setFlag(o.STATUS_FLAGS.LOADING, !1), this.onComplete.dispatch(this)
                }, o.prototype.abort = function (t) {
                    if (!this.error) {
                        if (this.error = new Error(t), this.xhr) this.xhr.abort(); else if (this.xdr) this.xdr.abort(); else if (this.data) if (this.data.src) this.data.src = o.EMPTY_GIF; else for (; this.data.firstChild;) this.data.removeChild(this.data.firstChild);
                        this.complete()
                    }
                }, o.prototype.load = function (t) {
                    var e = this;
                    if (!this.isLoading) if (this.isComplete) t && setTimeout(function () {
                        return t(e)
                    }, 1); else switch (t && this.onComplete.once(t), this._setFlag(o.STATUS_FLAGS.LOADING, !0), this.onStart.dispatch(this), !1 !== this.crossOrigin && "string" == typeof this.crossOrigin || (this.crossOrigin = this._determineCrossOrigin(this.url)), this.loadType) {
                        case o.LOAD_TYPE.IMAGE:
                            this.type = o.TYPE.IMAGE, this._loadElement("image");
                            break;
                        case o.LOAD_TYPE.AUDIO:
                            this.type = o.TYPE.AUDIO, this._loadSourceElement("audio");
                            break;
                        case o.LOAD_TYPE.VIDEO:
                            this.type = o.TYPE.VIDEO, this._loadSourceElement("video");
                            break;
                        case o.LOAD_TYPE.XHR:
                        default:
                            a && this.crossOrigin ? this._loadXdr() : this._loadXhr()
                    }
                }, o.prototype._hasFlag = function (t) {
                    return !!(this._flags & t)
                }, o.prototype._setFlag = function (t, e) {
                    this._flags = e ? this._flags | t : this._flags & ~t
                }, o.prototype._loadElement = function (t) {
                    this.metadata.loadElement ? this.data = this.metadata.loadElement : "image" === t && void 0 !== window.Image ? this.data = new Image : this.data = document.createElement(t), this.crossOrigin && (this.data.crossOrigin = this.crossOrigin), this.metadata.skipSource || (this.data.src = this.url), this.data.addEventListener("error", this._boundOnError, !1), this.data.addEventListener("load", this._boundComplete, !1), this.data.addEventListener("progress", this._boundOnProgress, !1)
                }, o.prototype._loadSourceElement = function (t) {
                    if (this.metadata.loadElement ? this.data = this.metadata.loadElement : "audio" === t && void 0 !== window.Audio ? this.data = new Audio : this.data = document.createElement(t), null !== this.data) {
                        if (!this.metadata.skipSource) if (navigator.isCocoonJS) this.data.src = Array.isArray(this.url) ? this.url[0] : this.url; else if (Array.isArray(this.url)) for (var e = this.metadata.mimeType, r = 0; r < this.url.length; ++r) this.data.appendChild(this._createSource(t, this.url[r], Array.isArray(e) ? e[r] : e)); else {
                            var n = this.metadata.mimeType;
                            this.data.appendChild(this._createSource(t, this.url, Array.isArray(n) ? n[0] : n))
                        }
                        this.data.addEventListener("error", this._boundOnError, !1), this.data.addEventListener("load", this._boundComplete, !1), this.data.addEventListener("progress", this._boundOnProgress, !1), this.data.addEventListener("canplaythrough", this._boundComplete, !1), this.data.load()
                    } else this.abort("Unsupported element: " + t)
                }, o.prototype._loadXhr = function () {
                    "string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
                    var t = this.xhr = new XMLHttpRequest;
                    t.open("GET", this.url, !0), this.xhrType === o.XHR_RESPONSE_TYPE.JSON || this.xhrType === o.XHR_RESPONSE_TYPE.DOCUMENT ? t.responseType = o.XHR_RESPONSE_TYPE.TEXT : t.responseType = this.xhrType, t.addEventListener("error", this._boundXhrOnError, !1), t.addEventListener("abort", this._boundXhrOnAbort, !1), t.addEventListener("progress", this._boundOnProgress, !1), t.addEventListener("load", this._boundXhrOnLoad, !1), t.send()
                }, o.prototype._loadXdr = function () {
                    "string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
                    var t = this.xhr = new XDomainRequest;
                    t.timeout = 5e3, t.onerror = this._boundXhrOnError, t.ontimeout = this._boundXdrOnTimeout, t.onprogress = this._boundOnProgress, t.onload = this._boundXhrOnLoad, t.open("GET", this.url, !0), setTimeout(function () {
                        return t.send()
                    }, 1)
                }, o.prototype._createSource = function (t, e, r) {
                    r || (r = t + "/" + this._getExtension(e));
                    var n = document.createElement("source");
                    return n.src = e, n.type = r, n
                }, o.prototype._onError = function (t) {
                    this.abort("Failed to load element using: " + t.target.nodeName)
                }, o.prototype._onProgress = function (t) {
                    t && t.lengthComputable && this.onProgress.dispatch(this, t.loaded / t.total)
                }, o.prototype._xhrOnError = function () {
                    var t = this.xhr;
                    this.abort(d(t) + " Request failed. Status: " + t.status + ', text: "' + t.statusText + '"')
                }, o.prototype._xhrOnAbort = function () {
                    this.abort(d(this.xhr) + " Request was aborted by the user.")
                }, o.prototype._xdrOnTimeout = function () {
                    this.abort(d(this.xhr) + " Request timed out.")
                }, o.prototype._xhrOnLoad = function () {
                    var t = this.xhr, e = "", r = void 0 === t.status ? 200 : t.status;
                    if ("" !== t.responseType && "text" !== t.responseType && void 0 !== t.responseType || (e = t.responseText), 0 === r && 0 < e.length ? r = 200 : 1223 === r && (r = 204), 2 === (r / 100 | 0)) {
                        if (this.xhrType === o.XHR_RESPONSE_TYPE.TEXT) this.data = e, this.type = o.TYPE.TEXT; else if (this.xhrType === o.XHR_RESPONSE_TYPE.JSON) try {
                            this.data = JSON.parse(e), this.type = o.TYPE.JSON
                        } catch (t) {
                            return void this.abort("Error trying to parse loaded json: " + t)
                        } else if (this.xhrType === o.XHR_RESPONSE_TYPE.DOCUMENT) try {
                            if (window.DOMParser) {
                                var n = new DOMParser;
                                this.data = n.parseFromString(e, "text/xml")
                            } else {
                                var i = document.createElement("div");
                                i.innerHTML = e, this.data = i
                            }
                            this.type = o.TYPE.XML
                        } catch (t) {
                            return void this.abort("Error trying to parse loaded xml: " + t)
                        } else this.data = t.response || e;
                        this.complete()
                    } else this.abort("[" + t.status + "] " + t.statusText + ": " + t.responseURL)
                }, o.prototype._determineCrossOrigin = function (t, e) {
                    if (0 === t.indexOf("data:")) return "";
                    e = e || window.location, u || (u = document.createElement("a")), u.href = t;
                    var r = !(t = (0, i.default)(u.href, {strictMode: !0})).port && "" === e.port || t.port === e.port,
                        n = t.protocol ? t.protocol + ":" : "";
                    return t.host === e.hostname && r && n === e.protocol ? "" : "anonymous"
                }, o.prototype._determineXhrType = function () {
                    return o._xhrTypeMap[this.extension] || o.XHR_RESPONSE_TYPE.TEXT
                }, o.prototype._determineLoadType = function () {
                    return o._loadTypeMap[this.extension] || o.LOAD_TYPE.XHR
                }, o.prototype._getExtension = function () {
                    var t = this.url, e = "";
                    if (this.isDataUrl) {
                        var r = t.indexOf("/");
                        e = t.substring(r + 1, t.indexOf(";", r))
                    } else {
                        var n = t.indexOf("?"), i = t.indexOf("#"),
                            o = Math.min(-1 < n ? n : t.length, -1 < i ? i : t.length);
                        e = (t = t.substring(0, o)).substring(t.lastIndexOf(".") + 1)
                    }
                    return e.toLowerCase()
                }, o.prototype._getMimeFromXhrType = function (t) {
                    switch (t) {
                        case o.XHR_RESPONSE_TYPE.BUFFER:
                            return "application/octet-binary";
                        case o.XHR_RESPONSE_TYPE.BLOB:
                            return "application/blob";
                        case o.XHR_RESPONSE_TYPE.DOCUMENT:
                            return "application/xml";
                        case o.XHR_RESPONSE_TYPE.JSON:
                            return "application/json";
                        case o.XHR_RESPONSE_TYPE.DEFAULT:
                        case o.XHR_RESPONSE_TYPE.TEXT:
                        default:
                            return "text/plain"
                    }
                }, n(o, [{
                    key: "isDataUrl", get: function () {
                        return this._hasFlag(o.STATUS_FLAGS.DATA_URL)
                    }
                }, {
                    key: "isComplete", get: function () {
                        return this._hasFlag(o.STATUS_FLAGS.COMPLETE)
                    }
                }, {
                    key: "isLoading", get: function () {
                        return this._hasFlag(o.STATUS_FLAGS.LOADING)
                    }
                }]), o
            }();

            function c(t, e, r) {
                e && 0 === e.indexOf(".") && (e = e.substring(1)), e && (t[e] = r)
            }

            function d(t) {
                return t.toString().replace("object ", "")
            }

            (r.default = l).STATUS_FLAGS = {NONE: 0, DATA_URL: 1, COMPLETE: 2, LOADING: 4}, l.TYPE = {
                UNKNOWN: 0,
                JSON: 1,
                XML: 2,
                IMAGE: 3,
                AUDIO: 4,
                VIDEO: 5,
                TEXT: 6
            }, l.LOAD_TYPE = {XHR: 1, IMAGE: 2, AUDIO: 3, VIDEO: 4}, l.XHR_RESPONSE_TYPE = {
                DEFAULT: "text",
                BUFFER: "arraybuffer",
                BLOB: "blob",
                DOCUMENT: "document",
                JSON: "json",
                TEXT: "text"
            }, l._loadTypeMap = {
                gif: l.LOAD_TYPE.IMAGE,
                png: l.LOAD_TYPE.IMAGE,
                bmp: l.LOAD_TYPE.IMAGE,
                jpg: l.LOAD_TYPE.IMAGE,
                jpeg: l.LOAD_TYPE.IMAGE,
                tif: l.LOAD_TYPE.IMAGE,
                tiff: l.LOAD_TYPE.IMAGE,
                webp: l.LOAD_TYPE.IMAGE,
                tga: l.LOAD_TYPE.IMAGE,
                svg: l.LOAD_TYPE.IMAGE,
                "svg+xml": l.LOAD_TYPE.IMAGE,
                mp3: l.LOAD_TYPE.AUDIO,
                ogg: l.LOAD_TYPE.AUDIO,
                wav: l.LOAD_TYPE.AUDIO,
                mp4: l.LOAD_TYPE.VIDEO,
                webm: l.LOAD_TYPE.VIDEO
            }, l._xhrTypeMap = {
                xhtml: l.XHR_RESPONSE_TYPE.DOCUMENT,
                html: l.XHR_RESPONSE_TYPE.DOCUMENT,
                htm: l.XHR_RESPONSE_TYPE.DOCUMENT,
                xml: l.XHR_RESPONSE_TYPE.DOCUMENT,
                tmx: l.XHR_RESPONSE_TYPE.DOCUMENT,
                svg: l.XHR_RESPONSE_TYPE.DOCUMENT,
                tsx: l.XHR_RESPONSE_TYPE.DOCUMENT,
                gif: l.XHR_RESPONSE_TYPE.BLOB,
                png: l.XHR_RESPONSE_TYPE.BLOB,
                bmp: l.XHR_RESPONSE_TYPE.BLOB,
                jpg: l.XHR_RESPONSE_TYPE.BLOB,
                jpeg: l.XHR_RESPONSE_TYPE.BLOB,
                tif: l.XHR_RESPONSE_TYPE.BLOB,
                tiff: l.XHR_RESPONSE_TYPE.BLOB,
                webp: l.XHR_RESPONSE_TYPE.BLOB,
                tga: l.XHR_RESPONSE_TYPE.BLOB,
                json: l.XHR_RESPONSE_TYPE.JSON,
                text: l.XHR_RESPONSE_TYPE.TEXT,
                txt: l.XHR_RESPONSE_TYPE.TEXT,
                ttf: l.XHR_RESPONSE_TYPE.BUFFER,
                otf: l.XHR_RESPONSE_TYPE.BUFFER
            }, l.EMPTY_GIF = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
        }, {"mini-signals": 5, "parse-uri": 7}],
        34: [function (t, e, r) {
            "use strict";

            function s() {
            }

            function a(e) {
                return function () {
                    if (null === e) throw new Error("Callback was already called.");
                    var t = e;
                    e = null, t.apply(this, arguments)
                }
            }

            r.__esModule = !0, r.eachSeries = function (r, n, i, o) {
                var s = 0, a = r.length;
                !function t(e) {
                    e || s === a ? i && i(e) : o ? setTimeout(function () {
                        n(r[s++], t)
                    }, 1) : n(r[s++], t)
                }()
            }, r.queue = function (e, t) {
                if (null == t) t = 1; else if (0 === t) throw new Error("Concurrency must not be zero");
                var r = 0, i = {
                    _tasks: [],
                    concurrency: t,
                    saturated: s,
                    unsaturated: s,
                    buffer: t / 4,
                    empty: s,
                    drain: s,
                    error: s,
                    started: !1,
                    paused: !1,
                    push: function (t, e) {
                        n(t, !1, e)
                    },
                    kill: function () {
                        r = 0, i.drain = s, i.started = !1, i._tasks = []
                    },
                    unshift: function (t, e) {
                        n(t, !0, e)
                    },
                    process: function () {
                        for (; !i.paused && r < i.concurrency && i._tasks.length;) {
                            var t = i._tasks.shift();
                            0 === i._tasks.length && i.empty(), (r += 1) === i.concurrency && i.saturated(), e(t.data, a(o(t)))
                        }
                    },
                    length: function () {
                        return i._tasks.length
                    },
                    running: function () {
                        return r
                    },
                    idle: function () {
                        return i._tasks.length + r === 0
                    },
                    pause: function () {
                        !0 !== i.paused && (i.paused = !0)
                    },
                    resume: function () {
                        if (!1 !== i.paused) {
                            i.paused = !1;
                            for (var t = 1; t <= i.concurrency; t++) i.process()
                        }
                    }
                };

                function n(t, e, r) {
                    if (null != r && "function" != typeof r) throw new Error("task callback must be a function");
                    if (i.started = !0, null == t && i.idle()) setTimeout(function () {
                        return i.drain()
                    }, 1); else {
                        var n = {data: t, callback: "function" == typeof r ? r : s};
                        e ? i._tasks.unshift(n) : i._tasks.push(n), setTimeout(function () {
                            return i.process()
                        }, 1)
                    }
                }

                function o(t) {
                    return function () {
                        r -= 1, t.callback.apply(t, arguments), null != arguments[0] && i.error(arguments[0], t.data), r <= i.concurrency - i.buffer && i.unsaturated(), i.idle() && i.drain(), i.process()
                    }
                }

                return i
            }
        }, {}],
        35: [function (t, e, r) {
            "use strict";
            r.__esModule = !0, r.encodeBinary = function (t) {
                var e = "", r = 0;
                for (; r < t.length;) {
                    for (var n = [0, 0, 0], i = [0, 0, 0, 0], o = 0; o < n.length; ++o) r < t.length ? n[o] = 255 & t.charCodeAt(r++) : n[o] = 0;
                    i[0] = n[0] >> 2, i[1] = (3 & n[0]) << 4 | n[1] >> 4, i[2] = (15 & n[1]) << 2 | n[2] >> 6, i[3] = 63 & n[2];
                    var s = r - (t.length - 1);
                    switch (s) {
                        case 2:
                            i[3] = 64, i[2] = 64;
                            break;
                        case 1:
                            i[3] = 64
                    }
                    for (var a = 0; a < i.length; ++a) e += u.charAt(i[a])
                }
                return e
            };
            var u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        }, {}],
        36: [function (t, e, r) {
            "use strict";
            var n = t("./Loader").default, i = t("./Resource").default, o = t("./async"), s = t("./b64");
            n.Resource = i, n.async = o, n.base64 = s, e.exports = n, e.exports.default = n
        }, {"./Loader": 32, "./Resource": 33, "./async": 34, "./b64": 35}],
        37: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            };
            r.blobMiddlewareFactory = function () {
                return function (t, e) {
                    if (t.data) {
                        if (t.xhr && t.xhrType === s.default.XHR_RESPONSE_TYPE.BLOB) if (window.Blob && "string" != typeof t.data) {
                            if (0 === t.data.type.indexOf("image")) {
                                var r = (i = u.createObjectURL(t.data), t.blob = t.data, t.data = new Image, t.data.src = i, t.type = s.default.TYPE.IMAGE, t.data.onload = function () {
                                    u.revokeObjectURL(i), t.data.onload = null, e()
                                }, {v: void 0});
                                if ("object" === (void 0 === r ? "undefined" : o(r))) return r.v
                            }
                        } else {
                            var n = t.xhr.getResponseHeader("content-type");
                            if (n && 0 === n.indexOf("image")) return t.data = new Image, t.data.src = "data:" + n + ";base64," + a.default.encodeBinary(t.xhr.responseText), t.type = s.default.TYPE.IMAGE, void (t.data.onload = function () {
                                t.data.onload = null, e()
                            })
                        }
                        var i;
                        e()
                    } else e()
                }
            };
            var s = n(t("../../Resource")), a = n(t("../../b64"));

            function n(t) {
                return t && t.__esModule ? t : {default: t}
            }

            var u = window.URL || window.webkitURL
        }, {"../../Resource": 33, "../../b64": 35}],
        38: [function (t, e, r) {
            "use strict";
            var D = t("punycode"), L = t("./util");

            function P() {
                this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
            }

            r.parse = o, r.resolve = function (t, e) {
                return o(t, !1, !0).resolve(e)
            }, r.resolveObject = function (t, e) {
                return t ? o(t, !1, !0).resolveObject(e) : e
            }, r.format = function (t) {
                L.isString(t) && (t = o(t));
                return t instanceof P ? t.format() : P.prototype.format.call(t)
            }, r.Url = P;
            var N = /^([a-z0-9.+-]+:)/i, n = /:[0-9]*$/, F = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
                i = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
                B = ["'"].concat(i), k = ["%", "/", "?", ";", "#"].concat(B), j = ["/", "?", "#"],
                U = /^[+a-z0-9A-Z_-]{0,63}$/, X = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
                G = {javascript: !0, "javascript:": !0}, W = {javascript: !0, "javascript:": !0}, H = {
                    http: !0,
                    https: !0,
                    ftp: !0,
                    gopher: !0,
                    file: !0,
                    "http:": !0,
                    "https:": !0,
                    "ftp:": !0,
                    "gopher:": !0,
                    "file:": !0
                }, Y = t("querystring");

            function o(t, e, r) {
                if (t && L.isObject(t) && t instanceof P) return t;
                var n = new P;
                return n.parse(t, e, r), n
            }

            P.prototype.parse = function (t, e, r) {
                if (!L.isString(t)) throw new TypeError("Parameter 'url' must be a string, not " + typeof t);
                var n = t.indexOf("?"), i = -1 !== n && n < t.indexOf("#") ? "?" : "#", o = t.split(i);
                o[0] = o[0].replace(/\\/g, "/");
                var s = t = o.join(i);
                if (s = s.trim(), !r && 1 === t.split("#").length) {
                    var a = F.exec(s);
                    if (a) return this.path = s, this.href = s, this.pathname = a[1], a[2] ? (this.search = a[2], this.query = e ? Y.parse(this.search.substr(1)) : this.search.substr(1)) : e && (this.search = "", this.query = {}), this
                }
                var u = N.exec(s);
                if (u) {
                    var h = (u = u[0]).toLowerCase();
                    this.protocol = h, s = s.substr(u.length)
                }
                if (r || u || s.match(/^\/\/[^@\/]+@[^@\/]+/)) {
                    var l = "//" === s.substr(0, 2);
                    !l || u && W[u] || (s = s.substr(2), this.slashes = !0)
                }
                if (!W[u] && (l || u && !H[u])) {
                    for (var c, d, f = -1, p = 0; p < j.length; p++) {
                        -1 !== (v = s.indexOf(j[p])) && (-1 === f || v < f) && (f = v)
                    }
                    -1 !== (d = -1 === f ? s.lastIndexOf("@") : s.lastIndexOf("@", f)) && (c = s.slice(0, d), s = s.slice(d + 1), this.auth = decodeURIComponent(c)), f = -1;
                    for (p = 0; p < k.length; p++) {
                        var v;
                        -1 !== (v = s.indexOf(k[p])) && (-1 === f || v < f) && (f = v)
                    }
                    -1 === f && (f = s.length), this.host = s.slice(0, f), s = s.slice(f), this.parseHost(), this.hostname = this.hostname || "";
                    var g = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                    if (!g) for (var y = this.hostname.split(/\./), m = (p = 0, y.length); p < m; p++) {
                        var _ = y[p];
                        if (_ && !_.match(U)) {
                            for (var b = "", x = 0, T = _.length; x < T; x++) 127 < _.charCodeAt(x) ? b += "x" : b += _[x];
                            if (!b.match(U)) {
                                var w = y.slice(0, p), E = y.slice(p + 1), S = _.match(X);
                                S && (w.push(S[1]), E.unshift(S[2])), E.length && (s = "/" + E.join(".") + s), this.hostname = w.join(".");
                                break
                            }
                        }
                    }
                    255 < this.hostname.length ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), g || (this.hostname = D.toASCII(this.hostname));
                    var O = this.port ? ":" + this.port : "", P = this.hostname || "";
                    this.host = P + O, this.href += this.host, g && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== s[0] && (s = "/" + s))
                }
                if (!G[h]) for (p = 0, m = B.length; p < m; p++) {
                    var M = B[p];
                    if (-1 !== s.indexOf(M)) {
                        var C = encodeURIComponent(M);
                        C === M && (C = escape(M)), s = s.split(M).join(C)
                    }
                }
                var R = s.indexOf("#");
                -1 !== R && (this.hash = s.substr(R), s = s.slice(0, R));
                var A = s.indexOf("?");
                if (-1 !== A ? (this.search = s.substr(A), this.query = s.substr(A + 1), e && (this.query = Y.parse(this.query)), s = s.slice(0, A)) : e && (this.search = "", this.query = {}), s && (this.pathname = s), H[h] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
                    O = this.pathname || "";
                    var I = this.search || "";
                    this.path = O + I
                }
                return this.href = this.format(), this
            }, P.prototype.format = function () {
                var t = this.auth || "";
                t && (t = (t = encodeURIComponent(t)).replace(/%3A/i, ":"), t += "@");
                var e = this.protocol || "", r = this.pathname || "", n = this.hash || "", i = !1, o = "";
                this.host ? i = t + this.host : this.hostname && (i = t + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (i += ":" + this.port)), this.query && L.isObject(this.query) && Object.keys(this.query).length && (o = Y.stringify(this.query));
                var s = this.search || o && "?" + o || "";
                return e && ":" !== e.substr(-1) && (e += ":"), this.slashes || (!e || H[e]) && !1 !== i ? (i = "//" + (i || ""), r && "/" !== r.charAt(0) && (r = "/" + r)) : i || (i = ""), n && "#" !== n.charAt(0) && (n = "#" + n), s && "?" !== s.charAt(0) && (s = "?" + s), e + i + (r = r.replace(/[?#]/g, function (t) {
                    return encodeURIComponent(t)
                })) + (s = s.replace("#", "%23")) + n
            }, P.prototype.resolve = function (t) {
                return this.resolveObject(o(t, !1, !0)).format()
            }, P.prototype.resolveObject = function (t) {
                if (L.isString(t)) {
                    var e = new P;
                    e.parse(t, !1, !0), t = e
                }
                for (var r = new P, n = Object.keys(this), i = 0; i < n.length; i++) {
                    var o = n[i];
                    r[o] = this[o]
                }
                if (r.hash = t.hash, "" === t.href) return r.href = r.format(), r;
                if (t.slashes && !t.protocol) {
                    for (var s = Object.keys(t), a = 0; a < s.length; a++) {
                        var u = s[a];
                        "protocol" !== u && (r[u] = t[u])
                    }
                    return H[r.protocol] && r.hostname && !r.pathname && (r.path = r.pathname = "/"), r.href = r.format(), r
                }
                if (t.protocol && t.protocol !== r.protocol) {
                    if (!H[t.protocol]) {
                        for (var h = Object.keys(t), l = 0; l < h.length; l++) {
                            var c = h[l];
                            r[c] = t[c]
                        }
                        return r.href = r.format(), r
                    }
                    if (r.protocol = t.protocol, t.host || W[t.protocol]) r.pathname = t.pathname; else {
                        for (var d = (t.pathname || "").split("/"); d.length && !(t.host = d.shift());) ;
                        t.host || (t.host = ""), t.hostname || (t.hostname = ""), "" !== d[0] && d.unshift(""), d.length < 2 && d.unshift(""), r.pathname = d.join("/")
                    }
                    if (r.search = t.search, r.query = t.query, r.host = t.host || "", r.auth = t.auth, r.hostname = t.hostname || t.host, r.port = t.port, r.pathname || r.search) {
                        var f = r.pathname || "", p = r.search || "";
                        r.path = f + p
                    }
                    return r.slashes = r.slashes || t.slashes, r.href = r.format(), r
                }
                var v = r.pathname && "/" === r.pathname.charAt(0),
                    g = t.host || t.pathname && "/" === t.pathname.charAt(0), y = g || v || r.host && t.pathname, m = y,
                    _ = r.pathname && r.pathname.split("/") || [],
                    b = (d = t.pathname && t.pathname.split("/") || [], r.protocol && !H[r.protocol]);
                if (b && (r.hostname = "", r.port = null, r.host && ("" === _[0] ? _[0] = r.host : _.unshift(r.host)), r.host = "", t.protocol && (t.hostname = null, t.port = null, t.host && ("" === d[0] ? d[0] = t.host : d.unshift(t.host)), t.host = null), y = y && ("" === d[0] || "" === _[0])), g) r.host = t.host || "" === t.host ? t.host : r.host, r.hostname = t.hostname || "" === t.hostname ? t.hostname : r.hostname, r.search = t.search, r.query = t.query, _ = d; else if (d.length) _ || (_ = []), _.pop(), _ = _.concat(d), r.search = t.search, r.query = t.query; else if (!L.isNullOrUndefined(t.search)) {
                    if (b) r.hostname = r.host = _.shift(), (S = !!(r.host && 0 < r.host.indexOf("@")) && r.host.split("@")) && (r.auth = S.shift(), r.host = r.hostname = S.shift());
                    return r.search = t.search, r.query = t.query, L.isNull(r.pathname) && L.isNull(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.href = r.format(), r
                }
                if (!_.length) return r.pathname = null, r.search ? r.path = "/" + r.search : r.path = null, r.href = r.format(), r;
                for (var x = _.slice(-1)[0], T = (r.host || t.host || 1 < _.length) && ("." === x || ".." === x) || "" === x, w = 0, E = _.length; 0 <= E; E--) "." === (x = _[E]) ? _.splice(E, 1) : ".." === x ? (_.splice(E, 1), w++) : w && (_.splice(E, 1), w--);
                if (!y && !m) for (; w--; w) _.unshift("..");
                !y || "" === _[0] || _[0] && "/" === _[0].charAt(0) || _.unshift(""), T && "/" !== _.join("/").substr(-1) && _.push("");
                var S, O = "" === _[0] || _[0] && "/" === _[0].charAt(0);
                b && (r.hostname = r.host = O ? "" : _.length ? _.shift() : "", (S = !!(r.host && 0 < r.host.indexOf("@")) && r.host.split("@")) && (r.auth = S.shift(), r.host = r.hostname = S.shift()));
                return (y = y || r.host && _.length) && !O && _.unshift(""), _.length ? r.pathname = _.join("/") : (r.pathname = null, r.path = null), L.isNull(r.pathname) && L.isNull(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.auth = t.auth || r.auth, r.slashes = r.slashes || t.slashes, r.href = r.format(), r
            }, P.prototype.parseHost = function () {
                var t = this.host, e = n.exec(t);
                e && (":" !== (e = e[0]) && (this.port = e.substr(1)), t = t.substr(0, t.length - e.length)), t && (this.hostname = t)
            }
        }, {"./util": 39, punycode: 27, querystring: 30}],
        39: [function (t, e, r) {
            "use strict";
            e.exports = {
                isString: function (t) {
                    return "string" == typeof t
                }, isObject: function (t) {
                    return "object" == typeof t && null !== t
                }, isNull: function (t) {
                    return null === t
                }, isNullOrUndefined: function (t) {
                    return null == t
                }
            }
        }, {}],
        40: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var u = function (t) {
                {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e.default = t, e
                }
            }(t("../core")), n = o(t("ismobilejs")), i = o(t("./accessibleTarget"));

            function o(t) {
                return t && t.__esModule ? t : {default: t}
            }

            u.utils.mixins.delayMixin(u.DisplayObject.prototype, i.default);
            var s = function () {
                function r(t) {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, r), !n.default.tablet && !n.default.phone || navigator.isCocoonJS || this.createTouchHook();
                    var e = document.createElement("div");
                    e.style.width = "100px", e.style.height = "100px", e.style.position = "absolute", e.style.top = "0px", e.style.left = "0px", e.style.zIndex = 2, this.div = e, this.pool = [], this.renderId = 0, this.debug = !1, this.renderer = t, this.children = [], this._onKeyDown = this._onKeyDown.bind(this), this._onMouseMove = this._onMouseMove.bind(this), this.isActive = !1, this.isMobileAccessabillity = !1, window.addEventListener("keydown", this._onKeyDown, !1)
                }

                return r.prototype.createTouchHook = function () {
                    var t = this, e = document.createElement("button");
                    e.style.width = "1px", e.style.height = "1px", e.style.position = "absolute", e.style.top = "-1000px", e.style.left = "-1000px", e.style.zIndex = 2, e.style.backgroundColor = "#FF0000", e.title = "HOOK DIV", e.addEventListener("focus", function () {
                        t.isMobileAccessabillity = !0, t.activate(), document.body.removeChild(e)
                    }), document.body.appendChild(e)
                }, r.prototype.activate = function () {
                    this.isActive || (this.isActive = !0, window.document.addEventListener("mousemove", this._onMouseMove, !0), window.removeEventListener("keydown", this._onKeyDown, !1), this.renderer.on("postrender", this.update, this), this.renderer.view.parentNode && this.renderer.view.parentNode.appendChild(this.div))
                }, r.prototype.deactivate = function () {
                    this.isActive && !this.isMobileAccessabillity && (this.isActive = !1, window.document.removeEventListener("mousemove", this._onMouseMove), window.addEventListener("keydown", this._onKeyDown, !1), this.renderer.off("postrender", this.update), this.div.parentNode && this.div.parentNode.removeChild(this.div))
                }, r.prototype.updateAccessibleObjects = function (t) {
                    if (t.visible) {
                        t.accessible && t.interactive && (t._accessibleActive || this.addChild(t), t.renderId = this.renderId);
                        for (var e = t.children, r = e.length - 1; 0 <= r; r--) this.updateAccessibleObjects(e[r])
                    }
                }, r.prototype.update = function () {
                    if (this.renderer.renderingToScreen) {
                        this.updateAccessibleObjects(this.renderer._lastObjectRendered);
                        var t = this.renderer.view.getBoundingClientRect(), e = t.width / this.renderer.width,
                            r = t.height / this.renderer.height, n = this.div;
                        n.style.left = t.left + "px", n.style.top = t.top + "px", n.style.width = this.renderer.width + "px", n.style.height = this.renderer.height + "px";
                        for (var i = 0; i < this.children.length; i++) {
                            var o = this.children[i];
                            if (o.renderId !== this.renderId) o._accessibleActive = !1, u.utils.removeItems(this.children, i, 1), this.div.removeChild(o._accessibleDiv), this.pool.push(o._accessibleDiv), o._accessibleDiv = null, i--, 0 === this.children.length && this.deactivate(); else {
                                n = o._accessibleDiv;
                                var s = o.hitArea, a = o.worldTransform;
                                o.hitArea ? (n.style.left = (a.tx + s.x * a.a) * e + "px", n.style.top = (a.ty + s.y * a.d) * r + "px", n.style.width = s.width * a.a * e + "px", n.style.height = s.height * a.d * r + "px") : (s = o.getBounds(), this.capHitArea(s), n.style.left = s.x * e + "px", n.style.top = s.y * r + "px", n.style.width = s.width * e + "px", n.style.height = s.height * r + "px")
                            }
                        }
                        this.renderId++
                    }
                }, r.prototype.capHitArea = function (t) {
                    t.x < 0 && (t.width += t.x, t.x = 0), t.y < 0 && (t.height += t.y, t.y = 0), t.x + t.width > this.renderer.width && (t.width = this.renderer.width - t.x), t.y + t.height > this.renderer.height && (t.height = this.renderer.height - t.y)
                }, r.prototype.addChild = function (t) {
                    var e = this.pool.pop();
                    e || ((e = document.createElement("button")).style.width = "100px", e.style.height = "100px", e.style.backgroundColor = this.debug ? "rgba(255,0,0,0.5)" : "transparent", e.style.position = "absolute", e.style.zIndex = 2, e.style.borderStyle = "none", e.addEventListener("click", this._onClick.bind(this)), e.addEventListener("focus", this._onFocus.bind(this)), e.addEventListener("focusout", this._onFocusOut.bind(this))), t.accessibleTitle ? e.title = t.accessibleTitle : t.accessibleTitle || t.accessibleHint || (e.title = "displayObject " + this.tabIndex), t.accessibleHint && e.setAttribute("aria-label", t.accessibleHint), t._accessibleActive = !0, (t._accessibleDiv = e).displayObject = t, this.children.push(t), this.div.appendChild(t._accessibleDiv), t._accessibleDiv.tabIndex = t.tabIndex
                }, r.prototype._onClick = function (t) {
                    var e = this.renderer.plugins.interaction;
                    e.dispatchEvent(t.target.displayObject, "click", e.eventData)
                }, r.prototype._onFocus = function (t) {
                    var e = this.renderer.plugins.interaction;
                    e.dispatchEvent(t.target.displayObject, "mouseover", e.eventData)
                }, r.prototype._onFocusOut = function (t) {
                    var e = this.renderer.plugins.interaction;
                    e.dispatchEvent(t.target.displayObject, "mouseout", e.eventData)
                }, r.prototype._onKeyDown = function (t) {
                    9 === t.keyCode && this.activate()
                }, r.prototype._onMouseMove = function () {
                    this.deactivate()
                }, r.prototype.destroy = function () {
                    this.div = null;
                    for (var t = 0; t < this.children.length; t++) this.children[t].div = null;
                    window.document.removeEventListener("mousemove", this._onMouseMove), window.removeEventListener("keydown", this._onKeyDown), this.pool = null, this.children = null, this.renderer = null
                }, r
            }();
            r.default = s, u.WebGLRenderer.registerPlugin("accessibility", s), u.CanvasRenderer.registerPlugin("accessibility", s)
        }, {"../core": 65, "./accessibleTarget": 41, ismobilejs: 4}],
        41: [function (t, e, r) {
            "use strict";
            r.__esModule = !0, r.default = {
                accessible: !1,
                accessibleTitle: null,
                accessibleHint: null,
                tabIndex: 0,
                _accessibleActive: !1,
                _accessibleDiv: !1
            }
        }, {}],
        42: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n = t("./accessibleTarget");
            Object.defineProperty(r, "accessibleTarget", {
                enumerable: !0, get: function () {
                    return o(n).default
                }
            });
            var i = t("./AccessibilityManager");

            function o(t) {
                return t && t.__esModule ? t : {default: t}
            }

            Object.defineProperty(r, "AccessibilityManager", {
                enumerable: !0, get: function () {
                    return o(i).default
                }
            })
        }, {"./AccessibilityManager": 40, "./accessibleTarget": 41}],
        43: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n = function () {
                    function n(t, e) {
                        for (var r = 0; r < e.length; r++) {
                            var n = e[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }

                    return function (t, e, r) {
                        return e && n(t.prototype, e), r && n(t, r), t
                    }
                }(), s = t("./autoDetectRenderer"), a = o(t("./display/Container")), u = t("./ticker"),
                h = o(t("./settings")), i = t("./const");

            function o(t) {
                return t && t.__esModule ? t : {default: t}
            }

            var l = function () {
                function o(t, e, r, n, i) {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, o), "number" == typeof t && (t = Object.assign({
                        width: t,
                        height: e || h.default.RENDER_OPTIONS.height,
                        forceCanvas: !!n,
                        sharedTicker: !!i
                    }, r)), this._options = t = Object.assign({
                        autoStart: !0,
                        sharedTicker: !1,
                        forceCanvas: !1,
                        sharedLoader: !1
                    }, t), this.renderer = (0, s.autoDetectRenderer)(t), this.stage = new a.default, this._ticker = null, this.ticker = t.sharedTicker ? u.shared : new u.Ticker, t.autoStart && this.start()
                }

                return o.prototype.render = function () {
                    this.renderer.render(this.stage)
                }, o.prototype.stop = function () {
                    this._ticker.stop()
                }, o.prototype.start = function () {
                    this._ticker.start()
                }, o.prototype.destroy = function (t) {
                    var e = this._ticker;
                    this.ticker = null, e.destroy(), this.stage.destroy(), this.stage = null, this.renderer.destroy(t), this.renderer = null, this._options = null
                }, n(o, [{
                    key: "ticker", set: function (t) {
                        this._ticker && this._ticker.remove(this.render, this), (this._ticker = t) && t.add(this.render, this, i.UPDATE_PRIORITY.LOW)
                    }, get: function () {
                        return this._ticker
                    }
                }, {
                    key: "view", get: function () {
                        return this.renderer.view
                    }
                }, {
                    key: "screen", get: function () {
                        return this.renderer.screen
                    }
                }]), o
            }();
            r.default = l
        }, {"./autoDetectRenderer": 45, "./const": 46, "./display/Container": 48, "./settings": 101, "./ticker": 120}],
        44: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n, i = t("pixi-gl-core"), o = t("./settings"), s = (n = o) && n.__esModule ? n : {default: n};

            function a(t, e) {
                if (t instanceof Array) {
                    if ("precision" !== t[0].substring(0, 9)) {
                        var r = t.slice(0);
                        return r.unshift("precision " + e + " float;"), r
                    }
                } else if ("precision" !== t.substring(0, 9)) return "precision " + e + " float;\n" + t;
                return t
            }

            var u = function (n) {
                function i(t, e, r) {
                    return function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, i), function (t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, n.call(this, t, a(e, s.default.PRECISION_VERTEX), a(r, s.default.PRECISION_FRAGMENT)))
                }

                return function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(i, n), i
            }(i.GLShader);
            r.default = u
        }, {"./settings": 101, "pixi-gl-core": 15}],
        45: [function (t, e, r) {
            "use strict";
            r.__esModule = !0, r.autoDetectRenderer = function (t, e, r, n) {
                var i = t && t.forceCanvas;
                void 0 !== n && (i = n);
                if (!i && o.isWebGLSupported()) return new a.default(t, e, r);
                return new s.default(t, e, r)
            };
            var o = function (t) {
                {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e.default = t, e
                }
            }(t("./utils")), s = n(t("./renderers/canvas/CanvasRenderer")), a = n(t("./renderers/webgl/WebGLRenderer"));

            function n(t) {
                return t && t.__esModule ? t : {default: t}
            }
        }, {"./renderers/canvas/CanvasRenderer": 77, "./renderers/webgl/WebGLRenderer": 84, "./utils": 124}],
        46: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            r.VERSION = "4.5.4", r.PI_2 = 2 * Math.PI, r.RAD_TO_DEG = 180 / Math.PI, r.DEG_TO_RAD = Math.PI / 180, r.RENDERER_TYPE = {
                UNKNOWN: 0,
                WEBGL: 1,
                CANVAS: 2
            }, r.BLEND_MODES = {
                NORMAL: 0,
                ADD: 1,
                MULTIPLY: 2,
                SCREEN: 3,
                OVERLAY: 4,
                DARKEN: 5,
                LIGHTEN: 6,
                COLOR_DODGE: 7,
                COLOR_BURN: 8,
                HARD_LIGHT: 9,
                SOFT_LIGHT: 10,
                DIFFERENCE: 11,
                EXCLUSION: 12,
                HUE: 13,
                SATURATION: 14,
                COLOR: 15,
                LUMINOSITY: 16,
                NORMAL_NPM: 17,
                ADD_NPM: 18,
                SCREEN_NPM: 19
            }, r.DRAW_MODES = {
                POINTS: 0,
                LINES: 1,
                LINE_LOOP: 2,
                LINE_STRIP: 3,
                TRIANGLES: 4,
                TRIANGLE_STRIP: 5,
                TRIANGLE_FAN: 6
            }, r.SCALE_MODES = {LINEAR: 0, NEAREST: 1}, r.WRAP_MODES = {
                CLAMP: 0,
                REPEAT: 1,
                MIRRORED_REPEAT: 2
            }, r.GC_MODES = {
                AUTO: 0,
                MANUAL: 1
            }, r.URL_FILE_EXTENSION = /\.(\w{3,4})(?:$|\?|#)/i, r.DATA_URI = /^\s*data:(?:([\w-]+)\/([\w+.-]+))?(?:;(charset=[\w-]+|base64))?,(.*)/i, r.SVG_SIZE = /<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i, r.SHAPES = {
                POLY: 0,
                RECT: 1,
                CIRC: 2,
                ELIP: 3,
                RREC: 4
            }, r.PRECISION = {LOW: "lowp", MEDIUM: "mediump", HIGH: "highp"}, r.TRANSFORM_MODE = {
                STATIC: 0,
                DYNAMIC: 1
            }, r.TEXT_GRADIENT = {LINEAR_VERTICAL: 0, LINEAR_HORIZONTAL: 1}, r.UPDATE_PRIORITY = {
                INTERACTION: 50,
                HIGH: 25,
                NORMAL: 0,
                LOW: -25,
                UTILITY: -50
            }
        }, {}],
        47: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n = t("../math");
            var i = function () {
                function t() {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0, this.rect = null
                }

                return t.prototype.isEmpty = function () {
                    return this.minX > this.maxX || this.minY > this.maxY
                }, t.prototype.clear = function () {
                    this.updateID++, this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0
                }, t.prototype.getRectangle = function (t) {
                    return this.minX > this.maxX || this.minY > this.maxY ? n.Rectangle.EMPTY : ((t = t || new n.Rectangle(0, 0, 1, 1)).x = this.minX, t.y = this.minY, t.width = this.maxX - this.minX, t.height = this.maxY - this.minY, t)
                }, t.prototype.addPoint = function (t) {
                    this.minX = Math.min(this.minX, t.x), this.maxX = Math.max(this.maxX, t.x), this.minY = Math.min(this.minY, t.y), this.maxY = Math.max(this.maxY, t.y)
                }, t.prototype.addQuad = function (t) {
                    var e = this.minX, r = this.minY, n = this.maxX, i = this.maxY, o = t[0], s = t[1];
                    e = o < e ? o : e, r = s < r ? s : r, n = n < o ? o : n, i = i < s ? s : i, e = (o = t[2]) < e ? o : e, r = (s = t[3]) < r ? s : r, n = n < o ? o : n, i = i < s ? s : i, e = (o = t[4]) < e ? o : e, r = (s = t[5]) < r ? s : r, n = n < o ? o : n, i = i < s ? s : i, e = (o = t[6]) < e ? o : e, r = (s = t[7]) < r ? s : r, n = n < o ? o : n, i = i < s ? s : i, this.minX = e, this.minY = r, this.maxX = n, this.maxY = i
                }, t.prototype.addFrame = function (t, e, r, n, i) {
                    var o = t.worldTransform, s = o.a, a = o.b, u = o.c, h = o.d, l = o.tx, c = o.ty, d = this.minX,
                        f = this.minY, p = this.maxX, v = this.maxY, g = s * e + u * r + l, y = a * e + h * r + c;
                    d = g < d ? g : d, f = y < f ? y : f, p = p < g ? g : p, v = v < y ? y : v, d = (g = s * n + u * r + l) < d ? g : d, f = (y = a * n + h * r + c) < f ? y : f, p = p < g ? g : p, v = v < y ? y : v, d = (g = s * e + u * i + l) < d ? g : d, f = (y = a * e + h * i + c) < f ? y : f, p = p < g ? g : p, v = v < y ? y : v, d = (g = s * n + u * i + l) < d ? g : d, f = (y = a * n + h * i + c) < f ? y : f, p = p < g ? g : p, v = v < y ? y : v, this.minX = d, this.minY = f, this.maxX = p, this.maxY = v
                }, t.prototype.addVertices = function (t, e, r, n) {
                    for (var i = t.worldTransform, o = i.a, s = i.b, a = i.c, u = i.d, h = i.tx, l = i.ty, c = this.minX, d = this.minY, f = this.maxX, p = this.maxY, v = r; v < n; v += 2) {
                        var g = e[v], y = e[v + 1], m = o * g + a * y + h, _ = u * y + s * g + l;
                        c = m < c ? m : c, d = _ < d ? _ : d, f = f < m ? m : f, p = p < _ ? _ : p
                    }
                    this.minX = c, this.minY = d, this.maxX = f, this.maxY = p
                }, t.prototype.addBounds = function (t) {
                    var e = this.minX, r = this.minY, n = this.maxX, i = this.maxY;
                    this.minX = t.minX < e ? t.minX : e, this.minY = t.minY < r ? t.minY : r, this.maxX = t.maxX > n ? t.maxX : n, this.maxY = t.maxY > i ? t.maxY : i
                }, t.prototype.addBoundsMask = function (t, e) {
                    var r = t.minX > e.minX ? t.minX : e.minX, n = t.minY > e.minY ? t.minY : e.minY,
                        i = t.maxX < e.maxX ? t.maxX : e.maxX, o = t.maxY < e.maxY ? t.maxY : e.maxY;
                    if (r <= i && n <= o) {
                        var s = this.minX, a = this.minY, u = this.maxX, h = this.maxY;
                        this.minX = r < s ? r : s, this.minY = n < a ? n : a, this.maxX = u < i ? i : u, this.maxY = h < o ? o : h
                    }
                }, t.prototype.addBoundsArea = function (t, e) {
                    var r = t.minX > e.x ? t.minX : e.x, n = t.minY > e.y ? t.minY : e.y,
                        i = t.maxX < e.x + e.width ? t.maxX : e.x + e.width,
                        o = t.maxY < e.y + e.height ? t.maxY : e.y + e.height;
                    if (r <= i && n <= o) {
                        var s = this.minX, a = this.minY, u = this.maxX, h = this.maxY;
                        this.minX = r < s ? r : s, this.minY = n < a ? n : a, this.maxX = u < i ? i : u, this.maxY = h < o ? o : h
                    }
                }, t
            }();
            r.default = i
        }, {"../math": 70}],
        48: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n, o = function () {
                function n(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function (t, e, r) {
                    return e && n(t.prototype, e), r && n(t, r), t
                }
            }(), s = t("../utils"), i = t("./DisplayObject");
            var a = function (i) {
                function e() {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    var t = function (t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, i.call(this));
                    return t.children = [], t
                }

                return function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, i), e.prototype.onChildrenChange = function () {
                }, e.prototype.addChild = function (t) {
                    var e = arguments.length;
                    if (1 < e) for (var r = 0; r < e; r++) this.addChild(arguments[r]); else t.parent && t.parent.removeChild(t), t.parent = this, t.transform._parentID = -1, this.children.push(t), this._boundsID++, this.onChildrenChange(this.children.length - 1), t.emit("added", this);
                    return t
                }, e.prototype.addChildAt = function (t, e) {
                    if (e < 0 || e > this.children.length) throw new Error(t + "addChildAt: The index " + e + " supplied is out of bounds " + this.children.length);
                    return t.parent && t.parent.removeChild(t), t.parent = this, t.transform._parentID = -1, this.children.splice(e, 0, t), this._boundsID++, this.onChildrenChange(e), t.emit("added", this), t
                }, e.prototype.swapChildren = function (t, e) {
                    if (t !== e) {
                        var r = this.getChildIndex(t), n = this.getChildIndex(e);
                        this.children[r] = e, this.children[n] = t, this.onChildrenChange(r < n ? r : n)
                    }
                }, e.prototype.getChildIndex = function (t) {
                    var e = this.children.indexOf(t);
                    if (-1 === e) throw new Error("The supplied DisplayObject must be a child of the caller");
                    return e
                }, e.prototype.setChildIndex = function (t, e) {
                    if (e < 0 || e >= this.children.length) throw new Error("The supplied index is out of bounds");
                    var r = this.getChildIndex(t);
                    (0, s.removeItems)(this.children, r, 1), this.children.splice(e, 0, t), this.onChildrenChange(e)
                }, e.prototype.getChildAt = function (t) {
                    if (t < 0 || t >= this.children.length) throw new Error("getChildAt: Index (" + t + ") does not exist.");
                    return this.children[t]
                }, e.prototype.removeChild = function (t) {
                    var e = arguments.length;
                    if (1 < e) for (var r = 0; r < e; r++) this.removeChild(arguments[r]); else {
                        var n = this.children.indexOf(t);
                        if (-1 === n) return null;
                        t.parent = null, t.transform._parentID = -1, (0, s.removeItems)(this.children, n, 1), this._boundsID++, this.onChildrenChange(n), t.emit("removed", this)
                    }
                    return t
                }, e.prototype.removeChildAt = function (t) {
                    var e = this.getChildAt(t);
                    return e.parent = null, e.transform._parentID = -1, (0, s.removeItems)(this.children, t, 1), this._boundsID++, this.onChildrenChange(t), e.emit("removed", this), e
                }, e.prototype.removeChildren = function () {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0, e = arguments[1], r = t,
                        n = "number" == typeof e ? e : this.children.length, i = n - r, o = void 0;
                    if (0 < i && i <= n) {
                        o = this.children.splice(r, i);
                        for (var s = 0; s < o.length; ++s) o[s].parent = null, o[s].transform && (o[s].transform._parentID = -1);
                        this._boundsID++, this.onChildrenChange(t);
                        for (var a = 0; a < o.length; ++a) o[a].emit("removed", this);
                        return o
                    }
                    if (0 === i && 0 === this.children.length) return [];
                    throw new RangeError("removeChildren: numeric values are outside the acceptable range.")
                }, e.prototype.updateTransform = function () {
                    this._boundsID++, this.transform.updateTransform(this.parent.transform), this.worldAlpha = this.alpha * this.parent.worldAlpha;
                    for (var t = 0, e = this.children.length; t < e; ++t) {
                        var r = this.children[t];
                        r.visible && r.updateTransform()
                    }
                }, e.prototype.calculateBounds = function () {
                    this._bounds.clear(), this._calculateBounds();
                    for (var t = 0; t < this.children.length; t++) {
                        var e = this.children[t];
                        e.visible && e.renderable && (e.calculateBounds(), e._mask ? (e._mask.calculateBounds(), this._bounds.addBoundsMask(e._bounds, e._mask._bounds)) : e.filterArea ? this._bounds.addBoundsArea(e._bounds, e.filterArea) : this._bounds.addBounds(e._bounds))
                    }
                    this._lastBoundsID = this._boundsID
                }, e.prototype._calculateBounds = function () {
                }, e.prototype.renderWebGL = function (t) {
                    if (this.visible && !(this.worldAlpha <= 0) && this.renderable) if (this._mask || this._filters) this.renderAdvancedWebGL(t); else {
                        this._renderWebGL(t);
                        for (var e = 0, r = this.children.length; e < r; ++e) this.children[e].renderWebGL(t)
                    }
                }, e.prototype.renderAdvancedWebGL = function (t) {
                    t.flush();
                    var e = this._filters, r = this._mask;
                    if (e) {
                        this._enabledFilters || (this._enabledFilters = []);
                        for (var n = this._enabledFilters.length = 0; n < e.length; n++) e[n].enabled && this._enabledFilters.push(e[n]);
                        this._enabledFilters.length && t.filterManager.pushFilter(this, this._enabledFilters)
                    }
                    r && t.maskManager.pushMask(this, this._mask), this._renderWebGL(t);
                    for (var i = 0, o = this.children.length; i < o; i++) this.children[i].renderWebGL(t);
                    t.flush(), r && t.maskManager.popMask(this, this._mask), e && this._enabledFilters && this._enabledFilters.length && t.filterManager.popFilter()
                }, e.prototype._renderWebGL = function (t) {
                }, e.prototype._renderCanvas = function (t) {
                }, e.prototype.renderCanvas = function (t) {
                    if (this.visible && !(this.worldAlpha <= 0) && this.renderable) {
                        this._mask && t.maskManager.pushMask(this._mask), this._renderCanvas(t);
                        for (var e = 0, r = this.children.length; e < r; ++e) this.children[e].renderCanvas(t);
                        this._mask && t.maskManager.popMask(t)
                    }
                }, e.prototype.destroy = function (t) {
                    i.prototype.destroy.call(this);
                    var e = "boolean" == typeof t ? t : t && t.children,
                        r = this.removeChildren(0, this.children.length);
                    if (e) for (var n = 0; n < r.length; ++n) r[n].destroy(t)
                }, o(e, [{
                    key: "width", get: function () {
                        return this.scale.x * this.getLocalBounds().width
                    }, set: function (t) {
                        var e = this.getLocalBounds().width;
                        this.scale.x = 0 !== e ? t / e : 1, this._width = t
                    }
                }, {
                    key: "height", get: function () {
                        return this.scale.y * this.getLocalBounds().height
                    }, set: function (t) {
                        var e = this.getLocalBounds().height;
                        this.scale.y = 0 !== e ? t / e : 1, this._height = t
                    }
                }]), e
            }(((n = i) && n.__esModule ? n : {default: n}).default);
            (r.default = a).prototype.containerUpdateTransform = a.prototype.updateTransform
        }, {"../utils": 124, "./DisplayObject": 49}],
        49: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = function () {
                    function n(t, e) {
                        for (var r = 0; r < e.length; r++) {
                            var n = e[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }

                    return function (t, e, r) {
                        return e && n(t.prototype, e), r && n(t, r), t
                    }
                }(), n = c(t("eventemitter3")), o = t("../const"), s = c(t("../settings")), a = c(t("./TransformStatic")),
                u = c(t("./Transform")), h = c(t("./Bounds")), l = t("../math");

            function c(t) {
                return t && t.__esModule ? t : {default: t}
            }

            var d = function (r) {
                function n() {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    var t = function (t, e) {
                            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !e || "object" != typeof e && "function" != typeof e ? t : e
                        }(this, r.call(this)),
                        e = s.default.TRANSFORM_MODE === o.TRANSFORM_MODE.STATIC ? a.default : u.default;
                    return t.tempDisplayObjectParent = null, t.transform = new e, t.alpha = 1, t.visible = !0, t.renderable = !0, t.parent = null, t.worldAlpha = 1, t.filterArea = null, t._filters = null, t._enabledFilters = null, t._bounds = new h.default, t._boundsID = 0, t._lastBoundsID = -1, t._boundsRect = null, t._localBoundsRect = null, t._mask = null, t._destroyed = !1, t
                }

                return function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(n, r), n.prototype.updateTransform = function () {
                    this.transform.updateTransform(this.parent.transform), this.worldAlpha = this.alpha * this.parent.worldAlpha, this._bounds.updateID++
                }, n.prototype._recursivePostUpdateTransform = function () {
                    this.parent ? (this.parent._recursivePostUpdateTransform(), this.transform.updateTransform(this.parent.transform)) : this.transform.updateTransform(this._tempDisplayObjectParent.transform)
                }, n.prototype.getBounds = function (t, e) {
                    return t || (this.parent ? (this._recursivePostUpdateTransform(), this.updateTransform()) : (this.parent = this._tempDisplayObjectParent, this.updateTransform(), this.parent = null)), this._boundsID !== this._lastBoundsID && this.calculateBounds(), e || (this._boundsRect || (this._boundsRect = new l.Rectangle), e = this._boundsRect), this._bounds.getRectangle(e)
                }, n.prototype.getLocalBounds = function (t) {
                    var e = this.transform, r = this.parent;
                    this.parent = null, this.transform = this._tempDisplayObjectParent.transform, t || (this._localBoundsRect || (this._localBoundsRect = new l.Rectangle), t = this._localBoundsRect);
                    var n = this.getBounds(!1, t);
                    return this.parent = r, this.transform = e, n
                }, n.prototype.toGlobal = function (t, e) {
                    return 2 < arguments.length && void 0 !== arguments[2] && arguments[2] || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent, this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.apply(t, e)
                }, n.prototype.toLocal = function (t, e, r, n) {
                    return e && (t = e.toGlobal(t, r, n)), n || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent, this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.applyInverse(t, r)
                }, n.prototype.renderWebGL = function (t) {
                }, n.prototype.renderCanvas = function (t) {
                }, n.prototype.setParent = function (t) {
                    if (!t || !t.addChild) throw new Error("setParent: Argument must be a Container");
                    return t.addChild(this), t
                }, n.prototype.setTransform = function () {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                        e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
                        r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1,
                        n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 1,
                        i = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
                        o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0,
                        s = 6 < arguments.length && void 0 !== arguments[6] ? arguments[6] : 0,
                        a = 7 < arguments.length && void 0 !== arguments[7] ? arguments[7] : 0,
                        u = 8 < arguments.length && void 0 !== arguments[8] ? arguments[8] : 0;
                    return this.position.x = t, this.position.y = e, this.scale.x = r || 1, this.scale.y = n || 1, this.rotation = i, this.skew.x = o, this.skew.y = s, this.pivot.x = a, this.pivot.y = u, this
                }, n.prototype.destroy = function () {
                    this.removeAllListeners(), this.parent && this.parent.removeChild(this), this.transform = null, this.parent = null, this._bounds = null, this._currentBounds = null, this._mask = null, this.filterArea = null, this.interactive = !1, this.interactiveChildren = !1, this._destroyed = !0
                }, i(n, [{
                    key: "_tempDisplayObjectParent", get: function () {
                        return null === this.tempDisplayObjectParent && (this.tempDisplayObjectParent = new n), this.tempDisplayObjectParent
                    }
                }, {
                    key: "x", get: function () {
                        return this.position.x
                    }, set: function (t) {
                        this.transform.position.x = t
                    }
                }, {
                    key: "y", get: function () {
                        return this.position.y
                    }, set: function (t) {
                        this.transform.position.y = t
                    }
                }, {
                    key: "worldTransform", get: function () {
                        return this.transform.worldTransform
                    }
                }, {
                    key: "localTransform", get: function () {
                        return this.transform.localTransform
                    }
                }, {
                    key: "position", get: function () {
                        return this.transform.position
                    }, set: function (t) {
                        this.transform.position.copy(t)
                    }
                }, {
                    key: "scale", get: function () {
                        return this.transform.scale
                    }, set: function (t) {
                        this.transform.scale.copy(t)
                    }
                }, {
                    key: "pivot", get: function () {
                        return this.transform.pivot
                    }, set: function (t) {
                        this.transform.pivot.copy(t)
                    }
                }, {
                    key: "skew", get: function () {
                        return this.transform.skew
                    }, set: function (t) {
                        this.transform.skew.copy(t)
                    }
                }, {
                    key: "rotation", get: function () {
                        return this.transform.rotation
                    }, set: function (t) {
                        this.transform.rotation = t
                    }
                }, {
                    key: "worldVisible", get: function () {
                        var t = this;
                        do {
                            if (!t.visible) return !1;
                            t = t.parent
                        } while (t);
                        return !0
                    }
                }, {
                    key: "mask", get: function () {
                        return this._mask
                    }, set: function (t) {
                        this._mask && (this._mask.renderable = !0), this._mask = t, this._mask && (this._mask.renderable = !1)
                    }
                }, {
                    key: "filters", get: function () {
                        return this._filters && this._filters.slice()
                    }, set: function (t) {
                        this._filters = t && t.slice()
                    }
                }]), n
            }(n.default);
            (r.default = d).prototype.displayObjectUpdateTransform = d.prototype.updateTransform
        }, {
            "../const": 46,
            "../math": 70,
            "../settings": 101,
            "./Bounds": 47,
            "./Transform": 50,
            "./TransformStatic": 52,
            eventemitter3: 3
        }],
        50: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n, i = function () {
                function n(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function (t, e, r) {
                    return e && n(t.prototype, e), r && n(t, r), t
                }
            }(), o = t("../math"), s = t("./TransformBase");
            var a = function (e) {
                function r() {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, r);
                    var t = function (t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, e.call(this));
                    return t.position = new o.Point(0, 0), t.scale = new o.Point(1, 1), t.skew = new o.ObservablePoint(t.updateSkew, t, 0, 0), t.pivot = new o.Point(0, 0), t._rotation = 0, t._cx = 1, t._sx = 0, t._cy = 0, t._sy = 1, t
                }

                return function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(r, e), r.prototype.updateSkew = function () {
                    this._cx = Math.cos(this._rotation + this.skew._y), this._sx = Math.sin(this._rotation + this.skew._y), this._cy = -Math.sin(this._rotation - this.skew._x), this._sy = Math.cos(this._rotation - this.skew._x)
                }, r.prototype.updateLocalTransform = function () {
                    var t = this.localTransform;
                    t.a = this._cx * this.scale.x, t.b = this._sx * this.scale.x, t.c = this._cy * this.scale.y, t.d = this._sy * this.scale.y, t.tx = this.position.x - (this.pivot.x * t.a + this.pivot.y * t.c), t.ty = this.position.y - (this.pivot.x * t.b + this.pivot.y * t.d)
                }, r.prototype.updateTransform = function (t) {
                    var e = this.localTransform;
                    e.a = this._cx * this.scale.x, e.b = this._sx * this.scale.x, e.c = this._cy * this.scale.y, e.d = this._sy * this.scale.y, e.tx = this.position.x - (this.pivot.x * e.a + this.pivot.y * e.c), e.ty = this.position.y - (this.pivot.x * e.b + this.pivot.y * e.d);
                    var r = t.worldTransform, n = this.worldTransform;
                    n.a = e.a * r.a + e.b * r.c, n.b = e.a * r.b + e.b * r.d, n.c = e.c * r.a + e.d * r.c, n.d = e.c * r.b + e.d * r.d, n.tx = e.tx * r.a + e.ty * r.c + r.tx, n.ty = e.tx * r.b + e.ty * r.d + r.ty, this._worldID++
                }, r.prototype.setFromMatrix = function (t) {
                    t.decompose(this)
                }, i(r, [{
                    key: "rotation", get: function () {
                        return this._rotation
                    }, set: function (t) {
                        this._rotation = t, this.updateSkew()
                    }
                }]), r
            }(((n = s) && n.__esModule ? n : {default: n}).default);
            r.default = a
        }, {"../math": 70, "./TransformBase": 51}],
        51: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n = t("../math");
            var i = function () {
                function t() {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.worldTransform = new n.Matrix, this.localTransform = new n.Matrix, this._worldID = 0, this._parentID = 0
                }

                return t.prototype.updateLocalTransform = function () {
                }, t.prototype.updateTransform = function (t) {
                    var e = t.worldTransform, r = this.worldTransform, n = this.localTransform;
                    r.a = n.a * e.a + n.b * e.c, r.b = n.a * e.b + n.b * e.d, r.c = n.c * e.a + n.d * e.c, r.d = n.c * e.b + n.d * e.d, r.tx = n.tx * e.a + n.ty * e.c + e.tx, r.ty = n.tx * e.b + n.ty * e.d + e.ty, this._worldID++
                }, t
            }();
            (r.default = i).prototype.updateWorldTransform = i.prototype.updateTransform, i.IDENTITY = new i
        }, {"../math": 70}],
        52: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n, i = function () {
                function n(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function (t, e, r) {
                    return e && n(t.prototype, e), r && n(t, r), t
                }
            }(), o = t("../math"), s = t("./TransformBase");
            var a = function (e) {
                function r() {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, r);
                    var t = function (t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, e.call(this));
                    return t.position = new o.ObservablePoint(t.onChange, t, 0, 0), t.scale = new o.ObservablePoint(t.onChange, t, 1, 1), t.pivot = new o.ObservablePoint(t.onChange, t, 0, 0), t.skew = new o.ObservablePoint(t.updateSkew, t, 0, 0), t._rotation = 0, t._cx = 1, t._sx = 0, t._cy = 0, t._sy = 1, t._localID = 0, t._currentLocalID = 0, t
                }

                return function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(r, e), r.prototype.onChange = function () {
                    this._localID++
                }, r.prototype.updateSkew = function () {
                    this._cx = Math.cos(this._rotation + this.skew._y), this._sx = Math.sin(this._rotation + this.skew._y), this._cy = -Math.sin(this._rotation - this.skew._x), this._sy = Math.cos(this._rotation - this.skew._x), this._localID++
                }, r.prototype.updateLocalTransform = function () {
                    var t = this.localTransform;
                    this._localID !== this._currentLocalID && (t.a = this._cx * this.scale._x, t.b = this._sx * this.scale._x, t.c = this._cy * this.scale._y, t.d = this._sy * this.scale._y, t.tx = this.position._x - (this.pivot._x * t.a + this.pivot._y * t.c), t.ty = this.position._y - (this.pivot._x * t.b + this.pivot._y * t.d), this._currentLocalID = this._localID, this._parentID = -1)
                }, r.prototype.updateTransform = function (t) {
                    var e = this.localTransform;
                    if (this._localID !== this._currentLocalID && (e.a = this._cx * this.scale._x, e.b = this._sx * this.scale._x, e.c = this._cy * this.scale._y, e.d = this._sy * this.scale._y, e.tx = this.position._x - (this.pivot._x * e.a + this.pivot._y * e.c), e.ty = this.position._y - (this.pivot._x * e.b + this.pivot._y * e.d), this._currentLocalID = this._localID, this._parentID = -1), this._parentID !== t._worldID) {
                        var r = t.worldTransform, n = this.worldTransform;
                        n.a = e.a * r.a + e.b * r.c, n.b = e.a * r.b + e.b * r.d, n.c = e.c * r.a + e.d * r.c, n.d = e.c * r.b + e.d * r.d, n.tx = e.tx * r.a + e.ty * r.c + r.tx, n.ty = e.tx * r.b + e.ty * r.d + r.ty, this._parentID = t._worldID, this._worldID++
                    }
                }, r.prototype.setFromMatrix = function (t) {
                    t.decompose(this), this._localID++
                }, i(r, [{
                    key: "rotation", get: function () {
                        return this._rotation
                    }, set: function (t) {
                        this._rotation = t, this.updateSkew()
                    }
                }]), r
            }(((n = s) && n.__esModule ? n : {default: n}).default);
            r.default = a
        }, {"../math": 70, "./TransformBase": 51}],
        53: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n = i(t("../display/Container")), o = i(t("../textures/RenderTexture")),
                s = i(t("../textures/Texture")), a = i(t("./GraphicsData")), u = i(t("../sprites/Sprite")),
                h = t("../math"), l = t("../utils"), E = t("../const"), c = i(t("../display/Bounds")),
                d = i(t("./utils/bezierCurveTo")), f = i(t("../renderers/canvas/CanvasRenderer"));

            function i(t) {
                return t && t.__esModule ? t : {default: t}
            }

            var p = void 0, v = new h.Matrix, g = new h.Point, y = new Float32Array(4), m = new Float32Array(4),
                _ = function (i) {
                    function r() {
                        var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                        !function (t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, r);
                        var e = function (t, e) {
                            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !e || "object" != typeof e && "function" != typeof e ? t : e
                        }(this, i.call(this));
                        return e.fillAlpha = 1, e.lineWidth = 0, e.nativeLines = t, e.lineColor = 0, e.graphicsData = [], e.tint = 16777215, e._prevTint = 16777215, e.blendMode = E.BLEND_MODES.NORMAL, e.currentPath = null, e._webGL = {}, e.isMask = !1, e.boundsPadding = 0, e._localBounds = new c.default, e.dirty = 0, e.fastRectDirty = -1, e.clearDirty = 0, e.boundsDirty = -1, e.cachedSpriteDirty = !1, e._spriteRect = null, e._fastRect = !1, e
                    }

                    return function (t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }(r, i), r.prototype.clone = function () {
                        var t = new r;
                        t.renderable = this.renderable, t.fillAlpha = this.fillAlpha, t.lineWidth = this.lineWidth, t.lineColor = this.lineColor, t.tint = this.tint, t.blendMode = this.blendMode, t.isMask = this.isMask, t.boundsPadding = this.boundsPadding, t.dirty = 0, t.cachedSpriteDirty = this.cachedSpriteDirty;
                        for (var e = 0; e < this.graphicsData.length; ++e) t.graphicsData.push(this.graphicsData[e].clone());
                        return t.currentPath = t.graphicsData[t.graphicsData.length - 1], t.updateLocalBounds(), t
                    }, r.prototype.lineStyle = function () {
                        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                            e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
                            r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1;
                        if (this.lineWidth = t, this.lineColor = e, this.lineAlpha = r, this.currentPath) if (this.currentPath.shape.points.length) {
                            var n = new h.Polygon(this.currentPath.shape.points.slice(-2));
                            n.closed = !1, this.drawShape(n)
                        } else this.currentPath.lineWidth = this.lineWidth, this.currentPath.lineColor = this.lineColor, this.currentPath.lineAlpha = this.lineAlpha;
                        return this
                    }, r.prototype.moveTo = function (t, e) {
                        var r = new h.Polygon([t, e]);
                        return r.closed = !1, this.drawShape(r), this
                    }, r.prototype.lineTo = function (t, e) {
                        return this.currentPath.shape.points.push(t, e), this.dirty++, this
                    }, r.prototype.quadraticCurveTo = function (t, e, r, n) {
                        this.currentPath ? 0 === this.currentPath.shape.points.length && (this.currentPath.shape.points = [0, 0]) : this.moveTo(0, 0);
                        var i = this.currentPath.shape.points, o = 0, s = 0;
                        0 === i.length && this.moveTo(0, 0);
                        for (var a = i[i.length - 2], u = i[i.length - 1], h = 1; h <= 20; ++h) {
                            var l = h / 20;
                            o = a + (t - a) * l, s = u + (e - u) * l, i.push(o + (t + (r - t) * l - o) * l, s + (e + (n - e) * l - s) * l)
                        }
                        return this.dirty++, this
                    }, r.prototype.bezierCurveTo = function (t, e, r, n, i, o) {
                        this.currentPath ? 0 === this.currentPath.shape.points.length && (this.currentPath.shape.points = [0, 0]) : this.moveTo(0, 0);
                        var s = this.currentPath.shape.points, a = s[s.length - 2], u = s[s.length - 1];
                        return s.length -= 2, (0, d.default)(a, u, t, e, r, n, i, o, s), this.dirty++, this
                    }, r.prototype.arcTo = function (t, e, r, n, i) {
                        this.currentPath ? 0 === this.currentPath.shape.points.length && this.currentPath.shape.points.push(t, e) : this.moveTo(t, e);
                        var o = this.currentPath.shape.points, s = o[o.length - 2], a = o[o.length - 1] - e, u = s - t,
                            h = n - e, l = r - t, c = Math.abs(a * l - u * h);
                        if (c < 1e-8 || 0 === i) o[o.length - 2] === t && o[o.length - 1] === e || o.push(t, e); else {
                            var d = a * a + u * u, f = h * h + l * l, p = a * h + u * l, v = i * Math.sqrt(d) / c,
                                g = i * Math.sqrt(f) / c, y = v * p / d, m = g * p / f, _ = v * l + g * u,
                                b = v * h + g * a, x = u * (g + y), T = a * (g + y), w = l * (v + m), E = h * (v + m),
                                S = Math.atan2(T - b, x - _), O = Math.atan2(E - b, w - _);
                            this.arc(_ + t, b + e, i, S, O, l * a < u * h)
                        }
                        return this.dirty++, this
                    }, r.prototype.arc = function (t, e, r, n, i) {
                        var o = 5 < arguments.length && void 0 !== arguments[5] && arguments[5];
                        if (n === i) return this;
                        !o && i <= n ? i += 2 * Math.PI : o && n <= i && (n += 2 * Math.PI);
                        var s = i - n, a = 40 * Math.ceil(Math.abs(s) / (2 * Math.PI));
                        if (0 === s) return this;
                        var u = t + Math.cos(n) * r, h = e + Math.sin(n) * r,
                            l = this.currentPath ? this.currentPath.shape.points : null;
                        l ? l[l.length - 2] === u && l[l.length - 1] === h || l.push(u, h) : (this.moveTo(u, h), l = this.currentPath.shape.points);
                        for (var c = s / (2 * a), d = 2 * c, f = Math.cos(c), p = Math.sin(c), v = a - 1, g = v % 1 / v, y = 0; y <= v; ++y) {
                            var m = c + n + d * (y + g * y), _ = Math.cos(m), b = -Math.sin(m);
                            l.push((f * _ + p * b) * r + t, (f * -b + p * _) * r + e)
                        }
                        return this.dirty++, this
                    }, r.prototype.beginFill = function () {
                        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                            e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1;
                        return this.filling = !0, this.fillColor = t, this.fillAlpha = e, this.currentPath && this.currentPath.shape.points.length <= 2 && (this.currentPath.fill = this.filling, this.currentPath.fillColor = this.fillColor, this.currentPath.fillAlpha = this.fillAlpha), this
                    }, r.prototype.endFill = function () {
                        return this.filling = !1, this.fillColor = null, this.fillAlpha = 1, this
                    }, r.prototype.drawRect = function (t, e, r, n) {
                        return this.drawShape(new h.Rectangle(t, e, r, n)), this
                    }, r.prototype.drawRoundedRect = function (t, e, r, n, i) {
                        return this.drawShape(new h.RoundedRectangle(t, e, r, n, i)), this
                    }, r.prototype.drawCircle = function (t, e, r) {
                        return this.drawShape(new h.Circle(t, e, r)), this
                    }, r.prototype.drawEllipse = function (t, e, r, n) {
                        return this.drawShape(new h.Ellipse(t, e, r, n)), this
                    }, r.prototype.drawPolygon = function (t) {
                        var e = t, r = !0;
                        if (e instanceof h.Polygon && (r = e.closed, e = e.points), !Array.isArray(e)) {
                            e = new Array(arguments.length);
                            for (var n = 0; n < e.length; ++n) e[n] = arguments[n]
                        }
                        var i = new h.Polygon(e);
                        return i.closed = r, this.drawShape(i), this
                    }, r.prototype.clear = function () {
                        return (this.lineWidth || this.filling || 0 < this.graphicsData.length) && (this.lineWidth = 0, this.filling = !1, this.boundsDirty = -1, this.dirty++, this.clearDirty++, this.graphicsData.length = 0), this.currentPath = null, this._spriteRect = null, this
                    }, r.prototype.isFastRect = function () {
                        return 1 === this.graphicsData.length && this.graphicsData[0].shape.type === E.SHAPES.RECT && !this.graphicsData[0].lineWidth
                    }, r.prototype._renderWebGL = function (t) {
                        this.dirty !== this.fastRectDirty && (this.fastRectDirty = this.dirty, this._fastRect = this.isFastRect()), this._fastRect ? this._renderSpriteRect(t) : (t.setObjectRenderer(t.plugins.graphics), t.plugins.graphics.render(this))
                    }, r.prototype._renderSpriteRect = function (t) {
                        var e = this.graphicsData[0].shape;
                        this._spriteRect || (this._spriteRect = new u.default(new s.default(s.default.WHITE)));
                        var r = this._spriteRect;
                        if (16777215 === this.tint) r.tint = this.graphicsData[0].fillColor; else {
                            var n = y, i = m;
                            (0, l.hex2rgb)(this.graphicsData[0].fillColor, n), (0, l.hex2rgb)(this.tint, i), n[0] *= i[0], n[1] *= i[1], n[2] *= i[2], r.tint = (0, l.rgb2hex)(n)
                        }
                        r.alpha = this.graphicsData[0].fillAlpha, r.worldAlpha = this.worldAlpha * r.alpha, r.blendMode = this.blendMode, r._texture._frame.width = e.width, r._texture._frame.height = e.height, r.transform.worldTransform = this.transform.worldTransform, r.anchor.set(-e.x / e.width, -e.y / e.height), r._onAnchorUpdate(), r._renderWebGL(t)
                    }, r.prototype._renderCanvas = function (t) {
                        !0 !== this.isMask && t.plugins.graphics.render(this)
                    }, r.prototype._calculateBounds = function () {
                        this.boundsDirty !== this.dirty && (this.boundsDirty = this.dirty, this.updateLocalBounds(), this.cachedSpriteDirty = !0);
                        var t = this._localBounds;
                        this._bounds.addFrame(this.transform, t.minX, t.minY, t.maxX, t.maxY)
                    }, r.prototype.containsPoint = function (t) {
                        this.worldTransform.applyInverse(t, g);
                        for (var e = this.graphicsData, r = 0; r < e.length; ++r) {
                            var n = e[r];
                            if (n.fill && (n.shape && n.shape.contains(g.x, g.y))) {
                                if (n.holes) for (var i = 0; i < n.holes.length; i++) {
                                    if (n.holes[i].contains(g.x, g.y)) return !1
                                }
                                return !0
                            }
                        }
                        return !1
                    }, r.prototype.updateLocalBounds = function () {
                        var t = 1 / 0, e = -1 / 0, r = 1 / 0, n = -1 / 0;
                        if (this.graphicsData.length) for (var i = 0, o = 0, s = 0, a = 0, u = 0, h = 0; h < this.graphicsData.length; h++) {
                            var l = this.graphicsData[h], c = l.type, d = l.lineWidth;
                            if (i = l.shape, c === E.SHAPES.RECT || c === E.SHAPES.RREC) o = i.x - d / 2, s = i.y - d / 2, t = o < t ? o : t, e = e < o + (a = i.width + d) ? o + a : e, r = s < r ? s : r, n = n < s + (u = i.height + d) ? s + u : n; else if (c === E.SHAPES.CIRC) o = i.x, s = i.y, t = o - (a = i.radius + d / 2) < t ? o - a : t, e = e < o + a ? o + a : e, r = s - (u = i.radius + d / 2) < r ? s - u : r, n = n < s + u ? s + u : n; else if (c === E.SHAPES.ELIP) o = i.x, s = i.y, t = o - (a = i.width + d / 2) < t ? o - a : t, e = e < o + a ? o + a : e, r = s - (u = i.height + d / 2) < r ? s - u : r, n = n < s + u ? s + u : n; else for (var f = i.points, p = 0, v = 0, g = 0, y = 0, m = 0, _ = 0, b = 0, x = 0, T = 0; T + 2 < f.length; T += 2) o = f[T], s = f[T + 1], p = f[T + 2], v = f[T + 3], g = Math.abs(p - o), y = Math.abs(v - s), u = d, (a = Math.sqrt(g * g + y * y)) < 1e-9 || (t = (b = (p + o) / 2) - (m = (u / a * y + g) / 2) < t ? b - m : t, e = e < b + m ? b + m : e, r = (x = (v + s) / 2) - (_ = (u / a * g + y) / 2) < r ? x - _ : r, n = n < x + _ ? x + _ : n)
                        } else n = r = e = t = 0;
                        var w = this.boundsPadding;
                        this._localBounds.minX = t - w, this._localBounds.maxX = e + w, this._localBounds.minY = r - w, this._localBounds.maxY = n + w
                    }, r.prototype.drawShape = function (t) {
                        this.currentPath && this.currentPath.shape.points.length <= 2 && this.graphicsData.pop(), this.currentPath = null;
                        var e = new a.default(this.lineWidth, this.lineColor, this.lineAlpha, this.fillColor, this.fillAlpha, this.filling, this.nativeLines, t);
                        return this.graphicsData.push(e), e.type === E.SHAPES.POLY && (e.shape.closed = e.shape.closed || this.filling, this.currentPath = e), this.dirty++, e
                    }, r.prototype.generateCanvasTexture = function (t) {
                        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1,
                            r = this.getLocalBounds(), n = o.default.create(r.width, r.height, t, e);
                        p || (p = new f.default), this.transform.updateLocalTransform(), this.transform.localTransform.copy(v), v.invert(), v.tx -= r.x, v.ty -= r.y, p.render(this, n, !0, v);
                        var i = s.default.fromCanvas(n.baseTexture._canvasRenderTarget.canvas, t, "graphics");
                        return i.baseTexture.resolution = e, i.baseTexture.update(), i
                    }, r.prototype.closePath = function () {
                        var t = this.currentPath;
                        return t && t.shape && t.shape.close(), this
                    }, r.prototype.addHole = function () {
                        var t = this.graphicsData.pop();
                        return this.currentPath = this.graphicsData[this.graphicsData.length - 1], this.currentPath.addHole(t.shape), this.currentPath = null, this
                    }, r.prototype.destroy = function (t) {
                        i.prototype.destroy.call(this, t);
                        for (var e = 0; e < this.graphicsData.length; ++e) this.graphicsData[e].destroy();
                        for (var r in this._webgl) for (var n = 0; n < this._webgl[r].data.length; ++n) this._webgl[r].data[n].destroy();
                        this._spriteRect && this._spriteRect.destroy(), this.graphicsData = null, this.currentPath = null, this._webgl = null, this._localBounds = null
                    }, r
                }(n.default);
            (r.default = _)._SPRITE_TEXTURE = null
        }, {
            "../const": 46,
            "../display/Bounds": 47,
            "../display/Container": 48,
            "../math": 70,
            "../renderers/canvas/CanvasRenderer": 77,
            "../sprites/Sprite": 102,
            "../textures/RenderTexture": 113,
            "../textures/Texture": 115,
            "../utils": 124,
            "./GraphicsData": 54,
            "./utils/bezierCurveTo": 56
        }],
        54: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n = function () {
                function u(t, e, r, n, i, o, s, a) {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, u), this.lineWidth = t, this.nativeLines = s, this.lineColor = e, this.lineAlpha = r, this._lineTint = e, this.fillColor = n, this.fillAlpha = i, this._fillTint = n, this.fill = o, this.holes = [], this.shape = a, this.type = a.type
                }

                return u.prototype.clone = function () {
                    return new u(this.lineWidth, this.lineColor, this.lineAlpha, this.fillColor, this.fillAlpha, this.fill, this.nativeLines, this.shape)
                }, u.prototype.addHole = function (t) {
                    this.holes.push(t)
                }, u.prototype.destroy = function () {
                    this.shape = null, this.holes = null
                }, u
            }();
            r.default = n
        }, {}],
        55: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n, i = t("../../renderers/canvas/CanvasRenderer"), o = (n = i) && n.__esModule ? n : {default: n},
                M = t("../../const");
            var s = function () {
                function e(t) {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.renderer = t
                }

                return e.prototype.render = function (t) {
                    var e = this.renderer, r = e.context, n = t.worldAlpha, i = t.transform.worldTransform,
                        o = e.resolution;
                    this._prevTint !== this.tint && (this.dirty = !0), r.setTransform(i.a * o, i.b * o, i.c * o, i.d * o, i.tx * o, i.ty * o), t.dirty && (this.updateGraphicsTint(t), t.dirty = !1), e.setBlendMode(t.blendMode);
                    for (var s = 0; s < t.graphicsData.length; s++) {
                        var a = t.graphicsData[s], u = a.shape, h = a._fillTint, l = a._lineTint;
                        if (r.lineWidth = a.lineWidth, a.type === M.SHAPES.POLY) {
                            r.beginPath(), this.renderPolygon(u.points, u.closed, r);
                            for (var c = 0; c < a.holes.length; c++) this.renderPolygon(a.holes[c].points, !0, r);
                            a.fill && (r.globalAlpha = a.fillAlpha * n, r.fillStyle = "#" + ("00000" + (0 | h).toString(16)).substr(-6), r.fill()), a.lineWidth && (r.globalAlpha = a.lineAlpha * n, r.strokeStyle = "#" + ("00000" + (0 | l).toString(16)).substr(-6), r.stroke())
                        } else if (a.type === M.SHAPES.RECT) (a.fillColor || 0 === a.fillColor) && (r.globalAlpha = a.fillAlpha * n, r.fillStyle = "#" + ("00000" + (0 | h).toString(16)).substr(-6), r.fillRect(u.x, u.y, u.width, u.height)), a.lineWidth && (r.globalAlpha = a.lineAlpha * n, r.strokeStyle = "#" + ("00000" + (0 | l).toString(16)).substr(-6), r.strokeRect(u.x, u.y, u.width, u.height)); else if (a.type === M.SHAPES.CIRC) r.beginPath(), r.arc(u.x, u.y, u.radius, 0, 2 * Math.PI), r.closePath(), a.fill && (r.globalAlpha = a.fillAlpha * n, r.fillStyle = "#" + ("00000" + (0 | h).toString(16)).substr(-6), r.fill()), a.lineWidth && (r.globalAlpha = a.lineAlpha * n, r.strokeStyle = "#" + ("00000" + (0 | l).toString(16)).substr(-6), r.stroke()); else if (a.type === M.SHAPES.ELIP) {
                            var d = 2 * u.width, f = 2 * u.height, p = u.x - d / 2, v = u.y - f / 2;
                            r.beginPath();
                            var g = d / 2 * .5522848, y = f / 2 * .5522848, m = p + d, _ = v + f, b = p + d / 2,
                                x = v + f / 2;
                            r.moveTo(p, x), r.bezierCurveTo(p, x - y, b - g, v, b, v), r.bezierCurveTo(b + g, v, m, x - y, m, x), r.bezierCurveTo(m, x + y, b + g, _, b, _), r.bezierCurveTo(b - g, _, p, x + y, p, x), r.closePath(), a.fill && (r.globalAlpha = a.fillAlpha * n, r.fillStyle = "#" + ("00000" + (0 | h).toString(16)).substr(-6), r.fill()), a.lineWidth && (r.globalAlpha = a.lineAlpha * n, r.strokeStyle = "#" + ("00000" + (0 | l).toString(16)).substr(-6), r.stroke())
                        } else if (a.type === M.SHAPES.RREC) {
                            var T = u.x, w = u.y, E = u.width, S = u.height, O = u.radius, P = Math.min(E, S) / 2 | 0;
                            O = P < O ? P : O, r.beginPath(), r.moveTo(T, w + O), r.lineTo(T, w + S - O), r.quadraticCurveTo(T, w + S, T + O, w + S), r.lineTo(T + E - O, w + S), r.quadraticCurveTo(T + E, w + S, T + E, w + S - O), r.lineTo(T + E, w + O), r.quadraticCurveTo(T + E, w, T + E - O, w), r.lineTo(T + O, w), r.quadraticCurveTo(T, w, T, w + O), r.closePath(), (a.fillColor || 0 === a.fillColor) && (r.globalAlpha = a.fillAlpha * n, r.fillStyle = "#" + ("00000" + (0 | h).toString(16)).substr(-6), r.fill()), a.lineWidth && (r.globalAlpha = a.lineAlpha * n, r.strokeStyle = "#" + ("00000" + (0 | l).toString(16)).substr(-6), r.stroke())
                        }
                    }
                }, e.prototype.updateGraphicsTint = function (t) {
                    t._prevTint = t.tint;
                    for (var e = (t.tint >> 16 & 255) / 255, r = (t.tint >> 8 & 255) / 255, n = (255 & t.tint) / 255, i = 0; i < t.graphicsData.length; ++i) {
                        var o = t.graphicsData[i], s = 0 | o.fillColor, a = 0 | o.lineColor;
                        o._fillTint = ((s >> 16 & 255) / 255 * e * 255 << 16) + ((s >> 8 & 255) / 255 * r * 255 << 8) + (255 & s) / 255 * n * 255, o._lineTint = ((a >> 16 & 255) / 255 * e * 255 << 16) + ((a >> 8 & 255) / 255 * r * 255 << 8) + (255 & a) / 255 * n * 255
                    }
                }, e.prototype.renderPolygon = function (t, e, r) {
                    r.moveTo(t[0], t[1]);
                    for (var n = 1; n < t.length / 2; ++n) r.lineTo(t[2 * n], t[2 * n + 1]);
                    e && r.closePath()
                }, e.prototype.destroy = function () {
                    this.renderer = null
                }, e
            }();
            r.default = s, o.default.registerPlugin("graphics", s)
        }, {"../../const": 46, "../../renderers/canvas/CanvasRenderer": 77}],
        56: [function (t, e, r) {
            "use strict";
            r.__esModule = !0, r.default = function (t, e, r, n, i, o, s, a) {
                var u = 8 < arguments.length && void 0 !== arguments[8] ? arguments[8] : [], h = 0, l = 0, c = 0, d = 0,
                    f = 0;
                u.push(t, e);
                for (var p = 1, v = 0; p <= 20; ++p) c = (l = (h = 1 - (v = p / 20)) * h) * h, f = (d = v * v) * v, u.push(c * t + 3 * l * v * r + 3 * h * d * i + f * s, c * e + 3 * l * v * n + 3 * h * d * o + f * a);
                return u
            }
        }, {}],
        57: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var h = t("../../utils"), l = t("../../const"), i = a(t("../../renderers/webgl/utils/ObjectRenderer")),
                n = a(t("../../renderers/webgl/WebGLRenderer")), o = a(t("./WebGLGraphicsData")),
                s = a(t("./shaders/PrimitiveShader")), c = a(t("./utils/buildPoly")),
                d = a(t("./utils/buildRectangle")), f = a(t("./utils/buildRoundedRectangle")),
                p = a(t("./utils/buildCircle"));

            function a(t) {
                return t && t.__esModule ? t : {default: t}
            }

            var u = function (r) {
                function n(t) {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    var e = function (t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, r.call(this, t));
                    return e.graphicsDataPool = [], e.primitiveShader = null, e.gl = t.gl, e.CONTEXT_UID = 0, e
                }

                return function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(n, r), n.prototype.onContextChange = function () {
                    this.gl = this.renderer.gl, this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.primitiveShader = new s.default(this.gl)
                }, n.prototype.destroy = function () {
                    i.default.prototype.destroy.call(this);
                    for (var t = 0; t < this.graphicsDataPool.length; ++t) this.graphicsDataPool[t].destroy();
                    this.graphicsDataPool = null
                }, n.prototype.render = function (t) {
                    var e = this.renderer, r = e.gl, n = void 0, i = t._webGL[this.CONTEXT_UID];
                    i && t.dirty === i.dirty || (this.updateGraphics(t), i = t._webGL[this.CONTEXT_UID]);
                    var o = this.primitiveShader;
                    e.bindShader(o), e.state.setBlendMode(t.blendMode);
                    for (var s = 0, a = i.data.length; s < a; s++) {
                        var u = (n = i.data[s]).shader;
                        e.bindShader(u), u.uniforms.translationMatrix = t.transform.worldTransform.toArray(!0), u.uniforms.tint = (0, h.hex2rgb)(t.tint), u.uniforms.alpha = t.worldAlpha, e.bindVao(n.vao), n.nativeLines ? r.drawArrays(r.LINES, 0, n.points.length / 6) : n.vao.draw(r.TRIANGLE_STRIP, n.indices.length)
                    }
                }, n.prototype.updateGraphics = function (t) {
                    var e = this.renderer.gl, r = t._webGL[this.CONTEXT_UID];
                    if (r || (r = t._webGL[this.CONTEXT_UID] = {
                        lastIndex: 0,
                        data: [],
                        gl: e,
                        clearDirty: -1,
                        dirty: -1
                    }), r.dirty = t.dirty, t.clearDirty !== r.clearDirty) {
                        r.clearDirty = t.clearDirty;
                        for (var n = 0; n < r.data.length; n++) this.graphicsDataPool.push(r.data[n]);
                        r.data.length = 0, r.lastIndex = 0
                    }
                    for (var i = void 0, o = void 0, s = r.lastIndex; s < t.graphicsData.length; s++) {
                        var a = t.graphicsData[s];
                        i = this.getWebGLData(r, 0), a.nativeLines && a.lineWidth && (o = this.getWebGLData(r, 0, !0), r.lastIndex++), a.type === l.SHAPES.POLY && (0, c.default)(a, i, o), a.type === l.SHAPES.RECT ? (0, d.default)(a, i, o) : a.type === l.SHAPES.CIRC || a.type === l.SHAPES.ELIP ? (0, p.default)(a, i, o) : a.type === l.SHAPES.RREC && (0, f.default)(a, i, o), r.lastIndex++
                    }
                    this.renderer.bindVao(null);
                    for (var u = 0; u < r.data.length; u++) (i = r.data[u]).dirty && i.upload()
                }, n.prototype.getWebGLData = function (t, e, r) {
                    var n = t.data[t.data.length - 1];
                    return (!n || n.nativeLines !== r || 32e4 < n.points.length) && ((n = this.graphicsDataPool.pop() || new o.default(this.renderer.gl, this.primitiveShader, this.renderer.state.attribsState)).nativeLines = r, n.reset(e), t.data.push(n)), n.dirty = !0, n
                }, n
            }(i.default);
            r.default = u, n.default.registerPlugin("graphics", u)
        }, {
            "../../const": 46,
            "../../renderers/webgl/WebGLRenderer": 84,
            "../../renderers/webgl/utils/ObjectRenderer": 94,
            "../../utils": 124,
            "./WebGLGraphicsData": 58,
            "./shaders/PrimitiveShader": 59,
            "./utils/buildCircle": 60,
            "./utils/buildPoly": 62,
            "./utils/buildRectangle": 63,
            "./utils/buildRoundedRectangle": 64
        }],
        58: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n, i = t("pixi-gl-core"), o = (n = i) && n.__esModule ? n : {default: n};
            var s = function () {
                function n(t, e, r) {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, n), this.gl = t, this.color = [0, 0, 0], this.points = [], this.indices = [], this.buffer = o.default.GLBuffer.createVertexBuffer(t), this.indexBuffer = o.default.GLBuffer.createIndexBuffer(t), this.dirty = !0, this.nativeLines = !1, this.glPoints = null, this.glIndices = null, this.shader = e, this.vao = new o.default.VertexArrayObject(t, r).addIndex(this.indexBuffer).addAttribute(this.buffer, e.attributes.aVertexPosition, t.FLOAT, !1, 24, 0).addAttribute(this.buffer, e.attributes.aColor, t.FLOAT, !1, 24, 8)
                }

                return n.prototype.reset = function () {
                    this.points.length = 0, this.indices.length = 0
                }, n.prototype.upload = function () {
                    this.glPoints = new Float32Array(this.points), this.buffer.upload(this.glPoints), this.glIndices = new Uint16Array(this.indices), this.indexBuffer.upload(this.glIndices), this.dirty = !1
                }, n.prototype.destroy = function () {
                    this.color = null, this.points = null, this.indices = null, this.vao.destroy(), this.buffer.destroy(), this.indexBuffer.destroy(), this.gl = null, this.buffer = null, this.indexBuffer = null, this.glPoints = null, this.glIndices = null
                }, n
            }();
            r.default = s
        }, {"pixi-gl-core": 15}],
        59: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n, i = t("../../../Shader");
            var o = function (e) {
                function r(t) {
                    return function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, r), function (t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, e.call(this, t, ["attribute vec2 aVertexPosition;", "attribute vec4 aColor;", "uniform mat3 translationMatrix;", "uniform mat3 projectionMatrix;", "uniform float alpha;", "uniform vec3 tint;", "varying vec4 vColor;", "void main(void){", "   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);", "   vColor = aColor * vec4(tint * alpha, alpha);", "}"].join("\n"), ["varying vec4 vColor;", "void main(void){", "   gl_FragColor = vColor;", "}"].join("\n")))
                }

                return function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(r, e), r
            }(((n = i) && n.__esModule ? n : {default: n}).default);
            r.default = o
        }, {"../../../Shader": 44}],
        60: [function (t, e, r) {
            "use strict";
            r.__esModule = !0, r.default = function (t, e, r) {
                var n = t.shape, i = n.x, o = n.y, s = void 0, a = void 0;
                t.type === T.SHAPES.CIRC ? (s = n.radius, a = n.radius) : (s = n.width, a = n.height);
                if (0 === s || 0 === a) return;
                var u = Math.floor(30 * Math.sqrt(n.radius)) || Math.floor(15 * Math.sqrt(n.width + n.height)),
                    h = 2 * Math.PI / u;
                if (t.fill) {
                    var l = (0, w.hex2rgb)(t.fillColor), c = t.fillAlpha, d = l[0] * c, f = l[1] * c, p = l[2] * c,
                        v = e.points, g = e.indices, y = v.length / 6;
                    g.push(y);
                    for (var m = 0; m < u + 1; m++) v.push(i, o, d, f, p, c), v.push(i + Math.sin(h * m) * s, o + Math.cos(h * m) * a, d, f, p, c), g.push(y++, y++);
                    g.push(y - 1)
                }
                if (t.lineWidth) {
                    var _ = t.points;
                    t.points = [];
                    for (var b = 0; b < u + 1; b++) t.points.push(i + Math.sin(h * b) * s, o + Math.cos(h * b) * a);
                    (0, x.default)(t, e, r), t.points = _
                }
            };
            var n, i = t("./buildLine"), x = (n = i) && n.__esModule ? n : {default: n}, T = t("../../../const"),
                w = t("../../../utils")
        }, {"../../../const": 46, "../../../utils": 124, "./buildLine": 61}],
        61: [function (t, e, r) {
            "use strict";
            r.__esModule = !0, r.default = function (t, e, r) {
                t.nativeLines ? function (t, e) {
                    var r = 0, n = t.points;
                    if (0 === n.length) return;
                    var i = e.points, o = n.length / 2, s = (0, H.hex2rgb)(t.lineColor), a = t.lineAlpha, u = s[0] * a,
                        h = s[1] * a, l = s[2] * a;
                    for (r = 1; r < o; r++) {
                        var c = n[2 * (r - 1)], d = n[2 * (r - 1) + 1], f = n[2 * r], p = n[2 * r + 1];
                        i.push(c, d), i.push(u, h, l, a), i.push(f, p), i.push(u, h, l, a)
                    }
                }(t, r) : function (t, e) {
                    var r = t.points;
                    if (0 === r.length) return;
                    var n = new W.Point(r[0], r[1]), i = new W.Point(r[r.length - 2], r[r.length - 1]);
                    if (n.x === i.x && n.y === i.y) {
                        (r = r.slice()).pop(), r.pop();
                        var o = (i = new W.Point(r[r.length - 2], r[r.length - 1])).x + .5 * (n.x - i.x),
                            s = i.y + .5 * (n.y - i.y);
                        r.unshift(o, s), r.push(o, s)
                    }
                    var a = e.points, u = e.indices, h = r.length / 2, l = r.length, c = a.length / 6,
                        d = t.lineWidth / 2, f = (0, H.hex2rgb)(t.lineColor), p = t.lineAlpha, v = f[0] * p,
                        g = f[1] * p, y = f[2] * p, m = r[0], _ = r[1], b = r[2], x = r[3], T = 0, w = 0, E = -(_ - x),
                        S = m - b, O = 0, P = 0, M = 0, C = 0, R = Math.sqrt(E * E + S * S);
                    E /= R, S /= R, E *= d, S *= d, a.push(m - E, _ - S, v, g, y, p), a.push(m + E, _ + S, v, g, y, p);
                    for (var A = 1; A < h - 1; ++A) {
                        m = r[2 * (A - 1)], _ = r[2 * (A - 1) + 1], b = r[2 * A], x = r[2 * A + 1], T = r[2 * (A + 1)], w = r[2 * (A + 1) + 1], E = -(_ - x), S = m - b, R = Math.sqrt(E * E + S * S), E /= R, S /= R, E *= d, S *= d, O = -(x - w), P = b - T, R = Math.sqrt(O * O + P * P), O /= R, P /= R;
                        var I = -S + _ - (-S + x), D = -E + b - (-E + m), L = (-E + m) * (-S + x) - (-E + b) * (-S + _),
                            N = -(P *= d) + w - (-P + x), F = -(O *= d) + b - (-O + T),
                            B = (-O + T) * (-P + x) - (-O + b) * (-P + w), k = I * F - N * D;
                        if (Math.abs(k) < .1) k += 10.1, a.push(b - E, x - S, v, g, y, p), a.push(b + E, x + S, v, g, y, p); else {
                            var j = (D * B - F * L) / k, U = (N * L - I * B) / k,
                                X = (j - b) * (j - b) + (U - x) * (U - x);
                            196 * d * d < X ? (M = E - O, C = S - P, R = Math.sqrt(M * M + C * C), M /= R, C /= R, M *= d, C *= d, a.push(b - M, x - C), a.push(v, g, y, p), a.push(b + M, x + C), a.push(v, g, y, p), a.push(b - M, x - C), a.push(v, g, y, p), l++) : (a.push(j, U), a.push(v, g, y, p), a.push(b - (j - b), x - (U - x)), a.push(v, g, y, p))
                        }
                    }
                    m = r[2 * (h - 2)], _ = r[2 * (h - 2) + 1], b = r[2 * (h - 1)], x = r[2 * (h - 1) + 1], E = -(_ - x), S = m - b, R = Math.sqrt(E * E + S * S), E /= R, S /= R, E *= d, S *= d, a.push(b - E, x - S), a.push(v, g, y, p), a.push(b + E, x + S), a.push(v, g, y, p), u.push(c);
                    for (var G = 0; G < l; ++G) u.push(c++);
                    u.push(c - 1)
                }(t, e)
            };
            var W = t("../../../math"), H = t("../../../utils")
        }, {"../../../math": 70, "../../../utils": 124}],
        62: [function (t, e, r) {
            "use strict";
            r.__esModule = !0, r.default = function (t, e, r) {
                t.points = t.shape.points.slice();
                var n = t.points;
                if (t.fill && 6 <= n.length) {
                    for (var i = [], o = t.holes, s = 0; s < o.length; s++) {
                        var a = o[s];
                        i.push(n.length / 2), n = n.concat(a.points)
                    }
                    var u = e.points, h = e.indices, l = n.length / 2, c = (0, x.hex2rgb)(t.fillColor), d = t.fillAlpha,
                        f = c[0] * d, p = c[1] * d, v = c[2] * d, g = (0, T.default)(n, i, 2);
                    if (!g) return;
                    for (var y = u.length / 6, m = 0; m < g.length; m += 3) h.push(g[m] + y), h.push(g[m] + y), h.push(g[m + 1] + y), h.push(g[m + 2] + y), h.push(g[m + 2] + y);
                    for (var _ = 0; _ < l; _++) u.push(n[2 * _], n[2 * _ + 1], f, p, v, d)
                }
                0 < t.lineWidth && (0, b.default)(t, e, r)
            };
            var b = n(t("./buildLine")), x = t("../../../utils"), T = n(t("earcut"));

            function n(t) {
                return t && t.__esModule ? t : {default: t}
            }
        }, {"../../../utils": 124, "./buildLine": 61, earcut: 2}],
        63: [function (t, e, r) {
            "use strict";
            r.__esModule = !0, r.default = function (t, e, r) {
                var n = t.shape, i = n.x, o = n.y, s = n.width, a = n.height;
                if (t.fill) {
                    var u = (0, m.hex2rgb)(t.fillColor), h = t.fillAlpha, l = u[0] * h, c = u[1] * h, d = u[2] * h,
                        f = e.points, p = e.indices, v = f.length / 6;
                    f.push(i, o), f.push(l, c, d, h), f.push(i + s, o), f.push(l, c, d, h), f.push(i, o + a), f.push(l, c, d, h), f.push(i + s, o + a), f.push(l, c, d, h), p.push(v, v, v + 1, v + 2, v + 3, v + 3)
                }
                if (t.lineWidth) {
                    var g = t.points;
                    t.points = [i, o, i + s, o, i + s, o + a, i, o + a, i, o], (0, y.default)(t, e, r), t.points = g
                }
            };
            var n, i = t("./buildLine"), y = (n = i) && n.__esModule ? n : {default: n}, m = t("../../../utils")
        }, {"../../../utils": 124, "./buildLine": 61}],
        64: [function (t, e, r) {
            "use strict";
            r.__esModule = !0, r.default = function (t, e, r) {
                var n = t.shape, i = n.x, o = n.y, s = n.width, a = n.height, u = n.radius, h = [];
                if (h.push(i, o + u), P(i, o + a - u, i, o + a, i + u, o + a, h), P(i + s - u, o + a, i + s, o + a, i + s, o + a - u, h), P(i + s, o + u, i + s, o, i + s - u, o, h), P(i + u, o, i, o, i, o + u + 1e-10, h), t.fill) {
                    for (var l = (0, O.hex2rgb)(t.fillColor), c = t.fillAlpha, d = l[0] * c, f = l[1] * c, p = l[2] * c, v = e.points, g = e.indices, y = v.length / 6, m = (0, E.default)(h, null, 2), _ = 0, b = m.length; _ < b; _ += 3) g.push(m[_] + y), g.push(m[_] + y), g.push(m[_ + 1] + y), g.push(m[_ + 2] + y), g.push(m[_ + 2] + y);
                    for (var x = 0, T = h.length; x < T; x++) v.push(h[x], h[++x], d, f, p, c)
                }
                if (t.lineWidth) {
                    var w = t.points;
                    t.points = h, (0, S.default)(t, e, r), t.points = w
                }
            };
            var E = n(t("earcut")), S = n(t("./buildLine")), O = t("../../../utils");

            function n(t) {
                return t && t.__esModule ? t : {default: t}
            }

            function v(t, e, r) {
                return t + (e - t) * r
            }

            function P(t, e, r, n, i, o) {
                for (var s = 6 < arguments.length && void 0 !== arguments[6] ? arguments[6] : [], a = 0, u = 0, h = 0, l = 0, c = 0, d = 0, f = 0, p = 0; f <= 20; ++f) a = v(t, r, p = f / 20), u = v(e, n, p), h = v(r, i, p), l = v(n, o, p), c = v(a, h, p), d = v(u, l, p), s.push(c, d);
                return s
            }
        }, {"../../../utils": 124, "./buildLine": 61, earcut: 2}],
        65: [function (t, e, r) {
            "use strict";
            r.__esModule = !0, r.autoDetectRenderer = r.Application = r.Filter = r.SpriteMaskFilter = r.Quad = r.RenderTarget = r.ObjectRenderer = r.WebGLManager = r.Shader = r.CanvasRenderTarget = r.TextureUvs = r.VideoBaseTexture = r.BaseRenderTexture = r.RenderTexture = r.BaseTexture = r.Texture = r.Spritesheet = r.CanvasGraphicsRenderer = r.GraphicsRenderer = r.GraphicsData = r.Graphics = r.TextMetrics = r.TextStyle = r.Text = r.SpriteRenderer = r.CanvasTinter = r.CanvasSpriteRenderer = r.Sprite = r.TransformBase = r.TransformStatic = r.Transform = r.Container = r.DisplayObject = r.Bounds = r.glCore = r.WebGLRenderer = r.CanvasRenderer = r.ticker = r.utils = r.settings = void 0;
            var n = t("./const");
            Object.keys(n).forEach(function (t) {
                "default" !== t && "__esModule" !== t && Object.defineProperty(r, t, {
                    enumerable: !0, get: function () {
                        return n[t]
                    }
                })
            });
            var i = t("./math");
            Object.keys(i).forEach(function (t) {
                "default" !== t && "__esModule" !== t && Object.defineProperty(r, t, {
                    enumerable: !0, get: function () {
                        return i[t]
                    }
                })
            });
            var o = t("pixi-gl-core");
            Object.defineProperty(r, "glCore", {
                enumerable: !0, get: function () {
                    return V(o).default
                }
            });
            var s = t("./display/Bounds");
            Object.defineProperty(r, "Bounds", {
                enumerable: !0, get: function () {
                    return V(s).default
                }
            });
            var a = t("./display/DisplayObject");
            Object.defineProperty(r, "DisplayObject", {
                enumerable: !0, get: function () {
                    return V(a).default
                }
            });
            var u = t("./display/Container");
            Object.defineProperty(r, "Container", {
                enumerable: !0, get: function () {
                    return V(u).default
                }
            });
            var h = t("./display/Transform");
            Object.defineProperty(r, "Transform", {
                enumerable: !0, get: function () {
                    return V(h).default
                }
            });
            var l = t("./display/TransformStatic");
            Object.defineProperty(r, "TransformStatic", {
                enumerable: !0, get: function () {
                    return V(l).default
                }
            });
            var c = t("./display/TransformBase");
            Object.defineProperty(r, "TransformBase", {
                enumerable: !0, get: function () {
                    return V(c).default
                }
            });
            var d = t("./sprites/Sprite");
            Object.defineProperty(r, "Sprite", {
                enumerable: !0, get: function () {
                    return V(d).default
                }
            });
            var f = t("./sprites/canvas/CanvasSpriteRenderer");
            Object.defineProperty(r, "CanvasSpriteRenderer", {
                enumerable: !0, get: function () {
                    return V(f).default
                }
            });
            var p = t("./sprites/canvas/CanvasTinter");
            Object.defineProperty(r, "CanvasTinter", {
                enumerable: !0, get: function () {
                    return V(p).default
                }
            });
            var v = t("./sprites/webgl/SpriteRenderer");
            Object.defineProperty(r, "SpriteRenderer", {
                enumerable: !0, get: function () {
                    return V(v).default
                }
            });
            var g = t("./text/Text");
            Object.defineProperty(r, "Text", {
                enumerable: !0, get: function () {
                    return V(g).default
                }
            });
            var y = t("./text/TextStyle");
            Object.defineProperty(r, "TextStyle", {
                enumerable: !0, get: function () {
                    return V(y).default
                }
            });
            var m = t("./text/TextMetrics");
            Object.defineProperty(r, "TextMetrics", {
                enumerable: !0, get: function () {
                    return V(m).default
                }
            });
            var _ = t("./graphics/Graphics");
            Object.defineProperty(r, "Graphics", {
                enumerable: !0, get: function () {
                    return V(_).default
                }
            });
            var b = t("./graphics/GraphicsData");
            Object.defineProperty(r, "GraphicsData", {
                enumerable: !0, get: function () {
                    return V(b).default
                }
            });
            var x = t("./graphics/webgl/GraphicsRenderer");
            Object.defineProperty(r, "GraphicsRenderer", {
                enumerable: !0, get: function () {
                    return V(x).default
                }
            });
            var T = t("./graphics/canvas/CanvasGraphicsRenderer");
            Object.defineProperty(r, "CanvasGraphicsRenderer", {
                enumerable: !0, get: function () {
                    return V(T).default
                }
            });
            var w = t("./textures/Spritesheet");
            Object.defineProperty(r, "Spritesheet", {
                enumerable: !0, get: function () {
                    return V(w).default
                }
            });
            var E = t("./textures/Texture");
            Object.defineProperty(r, "Texture", {
                enumerable: !0, get: function () {
                    return V(E).default
                }
            });
            var S = t("./textures/BaseTexture");
            Object.defineProperty(r, "BaseTexture", {
                enumerable: !0, get: function () {
                    return V(S).default
                }
            });
            var O = t("./textures/RenderTexture");
            Object.defineProperty(r, "RenderTexture", {
                enumerable: !0, get: function () {
                    return V(O).default
                }
            });
            var P = t("./textures/BaseRenderTexture");
            Object.defineProperty(r, "BaseRenderTexture", {
                enumerable: !0, get: function () {
                    return V(P).default
                }
            });
            var M = t("./textures/VideoBaseTexture");
            Object.defineProperty(r, "VideoBaseTexture", {
                enumerable: !0, get: function () {
                    return V(M).default
                }
            });
            var C = t("./textures/TextureUvs");
            Object.defineProperty(r, "TextureUvs", {
                enumerable: !0, get: function () {
                    return V(C).default
                }
            });
            var R = t("./renderers/canvas/utils/CanvasRenderTarget");
            Object.defineProperty(r, "CanvasRenderTarget", {
                enumerable: !0, get: function () {
                    return V(R).default
                }
            });
            var A = t("./Shader");
            Object.defineProperty(r, "Shader", {
                enumerable: !0, get: function () {
                    return V(A).default
                }
            });
            var I = t("./renderers/webgl/managers/WebGLManager");
            Object.defineProperty(r, "WebGLManager", {
                enumerable: !0, get: function () {
                    return V(I).default
                }
            });
            var D = t("./renderers/webgl/utils/ObjectRenderer");
            Object.defineProperty(r, "ObjectRenderer", {
                enumerable: !0, get: function () {
                    return V(D).default
                }
            });
            var L = t("./renderers/webgl/utils/RenderTarget");
            Object.defineProperty(r, "RenderTarget", {
                enumerable: !0, get: function () {
                    return V(L).default
                }
            });
            var N = t("./renderers/webgl/utils/Quad");
            Object.defineProperty(r, "Quad", {
                enumerable: !0, get: function () {
                    return V(N).default
                }
            });
            var F = t("./renderers/webgl/filters/spriteMask/SpriteMaskFilter");
            Object.defineProperty(r, "SpriteMaskFilter", {
                enumerable: !0, get: function () {
                    return V(F).default
                }
            });
            var B = t("./renderers/webgl/filters/Filter");
            Object.defineProperty(r, "Filter", {
                enumerable: !0, get: function () {
                    return V(B).default
                }
            });
            var k = t("./Application");
            Object.defineProperty(r, "Application", {
                enumerable: !0, get: function () {
                    return V(k).default
                }
            });
            var j = t("./autoDetectRenderer");
            Object.defineProperty(r, "autoDetectRenderer", {
                enumerable: !0, get: function () {
                    return j.autoDetectRenderer
                }
            });
            var U = Y(t("./utils")), X = Y(t("./ticker")), G = V(t("./settings")),
                W = V(t("./renderers/canvas/CanvasRenderer")), H = V(t("./renderers/webgl/WebGLRenderer"));

            function Y(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e.default = t, e
            }

            function V(t) {
                return t && t.__esModule ? t : {default: t}
            }

            r.settings = G.default, r.utils = U, r.ticker = X, r.CanvasRenderer = W.default, r.WebGLRenderer = H.default
        }, {
            "./Application": 43,
            "./Shader": 44,
            "./autoDetectRenderer": 45,
            "./const": 46,
            "./display/Bounds": 47,
            "./display/Container": 48,
            "./display/DisplayObject": 49,
            "./display/Transform": 50,
            "./display/TransformBase": 51,
            "./display/TransformStatic": 52,
            "./graphics/Graphics": 53,
            "./graphics/GraphicsData": 54,
            "./graphics/canvas/CanvasGraphicsRenderer": 55,
            "./graphics/webgl/GraphicsRenderer": 57,
            "./math": 70,
            "./renderers/canvas/CanvasRenderer": 77,
            "./renderers/canvas/utils/CanvasRenderTarget": 79,
            "./renderers/webgl/WebGLRenderer": 84,
            "./renderers/webgl/filters/Filter": 86,
            "./renderers/webgl/filters/spriteMask/SpriteMaskFilter": 89,
            "./renderers/webgl/managers/WebGLManager": 93,
            "./renderers/webgl/utils/ObjectRenderer": 94,
            "./renderers/webgl/utils/Quad": 95,
            "./renderers/webgl/utils/RenderTarget": 96,
            "./settings": 101,
            "./sprites/Sprite": 102,
            "./sprites/canvas/CanvasSpriteRenderer": 103,
            "./sprites/canvas/CanvasTinter": 104,
            "./sprites/webgl/SpriteRenderer": 106,
            "./text/Text": 108,
            "./text/TextMetrics": 109,
            "./text/TextStyle": 110,
            "./textures/BaseRenderTexture": 111,
            "./textures/BaseTexture": 112,
            "./textures/RenderTexture": 113,
            "./textures/Spritesheet": 114,
            "./textures/Texture": 115,
            "./textures/TextureUvs": 116,
            "./textures/VideoBaseTexture": 117,
            "./ticker": 120,
            "./utils": 124,
            "pixi-gl-core": 15
        }],
        66: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n, i = t("./Matrix"), l = (n = i) && n.__esModule ? n : {default: n};
            var c = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1],
                d = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1],
                f = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1],
                p = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1], v = [], g = [];

            function y(t) {
                return t < 0 ? -1 : 0 < t ? 1 : 0
            }

            !function () {
                for (var t = 0; t < 16; t++) {
                    var e = [];
                    g.push(e);
                    for (var r = 0; r < 16; r++) for (var n = y(c[t] * c[r] + f[t] * d[r]), i = y(d[t] * c[r] + p[t] * d[r]), o = y(c[t] * f[r] + f[t] * p[r]), s = y(d[t] * f[r] + p[t] * p[r]), a = 0; a < 16; a++) if (c[a] === n && d[a] === i && f[a] === o && p[a] === s) {
                        e.push(a);
                        break
                    }
                }
                for (var u = 0; u < 16; u++) {
                    var h = new l.default;
                    h.set(c[u], d[u], f[u], p[u], 0, 0), v.push(h)
                }
            }();
            var o = {
                E: 0,
                SE: 1,
                S: 2,
                SW: 3,
                W: 4,
                NW: 5,
                N: 6,
                NE: 7,
                MIRROR_VERTICAL: 8,
                MIRROR_HORIZONTAL: 12,
                uX: function (t) {
                    return c[t]
                },
                uY: function (t) {
                    return d[t]
                },
                vX: function (t) {
                    return f[t]
                },
                vY: function (t) {
                    return p[t]
                },
                inv: function (t) {
                    return 8 & t ? 15 & t : 7 & -t
                },
                add: function (t, e) {
                    return g[t][e]
                },
                sub: function (t, e) {
                    return g[t][o.inv(e)]
                },
                rotate180: function (t) {
                    return 4 ^ t
                },
                isSwapWidthHeight: function (t) {
                    return 2 == (3 & t)
                },
                byDirection: function (t, e) {
                    return 2 * Math.abs(t) <= Math.abs(e) ? 0 <= e ? o.S : o.N : 2 * Math.abs(e) <= Math.abs(t) ? 0 < t ? o.E : o.W : 0 < e ? 0 < t ? o.SE : o.SW : 0 < t ? o.NE : o.NW
                },
                matrixAppendRotationInv: function (t, e) {
                    var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0,
                        n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 0, i = v[o.inv(e)];
                    i.tx = r, i.ty = n, t.append(i)
                }
            };
            r.default = o
        }, {"./Matrix": 67}],
        67: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n, i = function () {
                function n(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function (t, e, r) {
                    return e && n(t.prototype, e), r && n(t, r), t
                }
            }(), o = t("./Point"), a = (n = o) && n.__esModule ? n : {default: n};
            var s = function () {
                function s() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1,
                        e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
                        r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0,
                        n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 1,
                        i = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
                        o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, s), this.a = t, this.b = e, this.c = r, this.d = n, this.tx = i, this.ty = o, this.array = null
                }

                return s.prototype.fromArray = function (t) {
                    this.a = t[0], this.b = t[1], this.c = t[3], this.d = t[4], this.tx = t[2], this.ty = t[5]
                }, s.prototype.set = function (t, e, r, n, i, o) {
                    return this.a = t, this.b = e, this.c = r, this.d = n, this.tx = i, this.ty = o, this
                }, s.prototype.toArray = function (t, e) {
                    this.array || (this.array = new Float32Array(9));
                    var r = e || this.array;
                    return t ? (r[0] = this.a, r[1] = this.b, r[2] = 0, r[3] = this.c, r[4] = this.d, r[5] = 0, r[6] = this.tx, r[7] = this.ty) : (r[0] = this.a, r[1] = this.c, r[2] = this.tx, r[3] = this.b, r[4] = this.d, r[5] = this.ty, r[6] = 0, r[7] = 0), r[8] = 1, r
                }, s.prototype.apply = function (t, e) {
                    e = e || new a.default;
                    var r = t.x, n = t.y;
                    return e.x = this.a * r + this.c * n + this.tx, e.y = this.b * r + this.d * n + this.ty, e
                }, s.prototype.applyInverse = function (t, e) {
                    e = e || new a.default;
                    var r = 1 / (this.a * this.d + this.c * -this.b), n = t.x, i = t.y;
                    return e.x = this.d * r * n + -this.c * r * i + (this.ty * this.c - this.tx * this.d) * r, e.y = this.a * r * i + -this.b * r * n + (-this.ty * this.a + this.tx * this.b) * r, e
                }, s.prototype.translate = function (t, e) {
                    return this.tx += t, this.ty += e, this
                }, s.prototype.scale = function (t, e) {
                    return this.a *= t, this.d *= e, this.c *= t, this.b *= e, this.tx *= t, this.ty *= e, this
                }, s.prototype.rotate = function (t) {
                    var e = Math.cos(t), r = Math.sin(t), n = this.a, i = this.c, o = this.tx;
                    return this.a = n * e - this.b * r, this.b = n * r + this.b * e, this.c = i * e - this.d * r, this.d = i * r + this.d * e, this.tx = o * e - this.ty * r, this.ty = o * r + this.ty * e, this
                }, s.prototype.append = function (t) {
                    var e = this.a, r = this.b, n = this.c, i = this.d;
                    return this.a = t.a * e + t.b * n, this.b = t.a * r + t.b * i, this.c = t.c * e + t.d * n, this.d = t.c * r + t.d * i, this.tx = t.tx * e + t.ty * n + this.tx, this.ty = t.tx * r + t.ty * i + this.ty, this
                }, s.prototype.setTransform = function (t, e, r, n, i, o, s, a, u) {
                    var h = Math.sin(s), l = Math.cos(s), c = Math.cos(u), d = Math.sin(u), f = -Math.sin(a),
                        p = Math.cos(a), v = l * i, g = h * i, y = -h * o, m = l * o;
                    return this.a = c * v + d * y, this.b = c * g + d * m, this.c = f * v + p * y, this.d = f * g + p * m, this.tx = t + (r * v + n * y), this.ty = e + (r * g + n * m), this
                }, s.prototype.prepend = function (t) {
                    var e = this.tx;
                    if (1 !== t.a || 0 !== t.b || 0 !== t.c || 1 !== t.d) {
                        var r = this.a, n = this.c;
                        this.a = r * t.a + this.b * t.c, this.b = r * t.b + this.b * t.d, this.c = n * t.a + this.d * t.c, this.d = n * t.b + this.d * t.d
                    }
                    return this.tx = e * t.a + this.ty * t.c + t.tx, this.ty = e * t.b + this.ty * t.d + t.ty, this
                }, s.prototype.decompose = function (t) {
                    var e = this.a, r = this.b, n = this.c, i = this.d, o = -Math.atan2(-n, i), s = Math.atan2(r, e);
                    return Math.abs(o + s) < 1e-5 ? (t.rotation = s, e < 0 && 0 <= i && (t.rotation += t.rotation <= 0 ? Math.PI : -Math.PI), t.skew.x = t.skew.y = 0) : (t.skew.x = o, t.skew.y = s), t.scale.x = Math.sqrt(e * e + r * r), t.scale.y = Math.sqrt(n * n + i * i), t.position.x = this.tx, t.position.y = this.ty, t
                }, s.prototype.invert = function () {
                    var t = this.a, e = this.b, r = this.c, n = this.d, i = this.tx, o = t * n - e * r;
                    return this.a = n / o, this.b = -e / o, this.c = -r / o, this.d = t / o, this.tx = (r * this.ty - n * i) / o, this.ty = -(t * this.ty - e * i) / o, this
                }, s.prototype.identity = function () {
                    return this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0, this
                }, s.prototype.clone = function () {
                    var t = new s;
                    return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t
                }, s.prototype.copy = function (t) {
                    return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t
                }, i(s, null, [{
                    key: "IDENTITY", get: function () {
                        return new s
                    }
                }, {
                    key: "TEMP_MATRIX", get: function () {
                        return new s
                    }
                }]), s
            }();
            r.default = s
        }, {"./Point": 69}],
        68: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n = function () {
                function n(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function (t, e, r) {
                    return e && n(t.prototype, e), r && n(t, r), t
                }
            }();
            var i = function () {
                function i(t, e) {
                    var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0,
                        n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 0;
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, i), this._x = r, this._y = n, this.cb = t, this.scope = e
                }

                return i.prototype.set = function (t, e) {
                    var r = t || 0, n = e || (0 !== e ? r : 0);
                    this._x === r && this._y === n || (this._x = r, this._y = n, this.cb.call(this.scope))
                }, i.prototype.copy = function (t) {
                    this._x === t.x && this._y === t.y || (this._x = t.x, this._y = t.y, this.cb.call(this.scope))
                }, n(i, [{
                    key: "x", get: function () {
                        return this._x
                    }, set: function (t) {
                        this._x !== t && (this._x = t, this.cb.call(this.scope))
                    }
                }, {
                    key: "y", get: function () {
                        return this._y
                    }, set: function (t) {
                        this._y !== t && (this._y = t, this.cb.call(this.scope))
                    }
                }]), i
            }();
            r.default = i
        }, {}],
        69: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n = function () {
                function r() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                        e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0;
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, r), this.x = t, this.y = e
                }

                return r.prototype.clone = function () {
                    return new r(this.x, this.y)
                }, r.prototype.copy = function (t) {
                    this.set(t.x, t.y)
                }, r.prototype.equals = function (t) {
                    return t.x === this.x && t.y === this.y
                }, r.prototype.set = function (t, e) {
                    this.x = t || 0, this.y = e || (0 !== e ? this.x : 0)
                }, r
            }();
            r.default = n
        }, {}],
        70: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n = t("./Point");
            Object.defineProperty(r, "Point", {
                enumerable: !0, get: function () {
                    return d(n).default
                }
            });
            var i = t("./ObservablePoint");
            Object.defineProperty(r, "ObservablePoint", {
                enumerable: !0, get: function () {
                    return d(i).default
                }
            });
            var o = t("./Matrix");
            Object.defineProperty(r, "Matrix", {
                enumerable: !0, get: function () {
                    return d(o).default
                }
            });
            var s = t("./GroupD8");
            Object.defineProperty(r, "GroupD8", {
                enumerable: !0, get: function () {
                    return d(s).default
                }
            });
            var a = t("./shapes/Circle");
            Object.defineProperty(r, "Circle", {
                enumerable: !0, get: function () {
                    return d(a).default
                }
            });
            var u = t("./shapes/Ellipse");
            Object.defineProperty(r, "Ellipse", {
                enumerable: !0, get: function () {
                    return d(u).default
                }
            });
            var h = t("./shapes/Polygon");
            Object.defineProperty(r, "Polygon", {
                enumerable: !0, get: function () {
                    return d(h).default
                }
            });
            var l = t("./shapes/Rectangle");
            Object.defineProperty(r, "Rectangle", {
                enumerable: !0, get: function () {
                    return d(l).default
                }
            });
            var c = t("./shapes/RoundedRectangle");

            function d(t) {
                return t && t.__esModule ? t : {default: t}
            }

            Object.defineProperty(r, "RoundedRectangle", {
                enumerable: !0, get: function () {
                    return d(c).default
                }
            })
        }, {
            "./GroupD8": 66,
            "./Matrix": 67,
            "./ObservablePoint": 68,
            "./Point": 69,
            "./shapes/Circle": 71,
            "./shapes/Ellipse": 72,
            "./shapes/Polygon": 73,
            "./shapes/Rectangle": 74,
            "./shapes/RoundedRectangle": 75
        }],
        71: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n, i = t("./Rectangle"), o = (n = i) && n.__esModule ? n : {default: n}, s = t("../../const");
            var a = function () {
                function n() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                        e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
                        r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, n), this.x = t, this.y = e, this.radius = r, this.type = s.SHAPES.CIRC
                }

                return n.prototype.clone = function () {
                    return new n(this.x, this.y, this.radius)
                }, n.prototype.contains = function (t, e) {
                    if (this.radius <= 0) return !1;
                    var r = this.radius * this.radius, n = this.x - t, i = this.y - e;
                    return (n *= n) + (i *= i) <= r
                }, n.prototype.getBounds = function () {
                    return new o.default(this.x - this.radius, this.y - this.radius, 2 * this.radius, 2 * this.radius)
                }, n
            }();
            r.default = a
        }, {"../../const": 46, "./Rectangle": 74}],
        72: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n, i = t("./Rectangle"), o = (n = i) && n.__esModule ? n : {default: n}, s = t("../../const");
            var a = function () {
                function i() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                        e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
                        r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0,
                        n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 0;
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, i), this.x = t, this.y = e, this.width = r, this.height = n, this.type = s.SHAPES.ELIP
                }

                return i.prototype.clone = function () {
                    return new i(this.x, this.y, this.width, this.height)
                }, i.prototype.contains = function (t, e) {
                    if (this.width <= 0 || this.height <= 0) return !1;
                    var r = (t - this.x) / this.width, n = (e - this.y) / this.height;
                    return (r *= r) + (n *= n) <= 1
                }, i.prototype.getBounds = function () {
                    return new o.default(this.x - this.width, this.y - this.height, this.width, this.height)
                }, i
            }();
            r.default = a
        }, {"../../const": 46, "./Rectangle": 74}],
        73: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n, i = t("../Point"), a = (n = i) && n.__esModule ? n : {default: n}, u = t("../../const");
            var o = function () {
                function s() {
                    for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                    if (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, s), Array.isArray(e[0]) && (e = e[0]), e[0] instanceof a.default) {
                        for (var n = [], i = 0, o = e.length; i < o; i++) n.push(e[i].x, e[i].y);
                        e = n
                    }
                    this.closed = !0, this.points = e, this.type = u.SHAPES.POLY
                }

                return s.prototype.clone = function () {
                    return new s(this.points.slice())
                }, s.prototype.close = function () {
                    var t = this.points;
                    t[0] === t[t.length - 2] && t[1] === t[t.length - 1] || t.push(t[0], t[1])
                }, s.prototype.contains = function (t, e) {
                    for (var r = !1, n = this.points.length / 2, i = 0, o = n - 1; i < n; o = i++) {
                        var s = this.points[2 * i], a = this.points[2 * i + 1], u = this.points[2 * o],
                            h = this.points[2 * o + 1];
                        e < a != e < h && t < (e - a) / (h - a) * (u - s) + s && (r = !r)
                    }
                    return r
                }, s
            }();
            r.default = o
        }, {"../../const": 46, "../Point": 69}],
        74: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n = function () {
                function n(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function (t, e, r) {
                    return e && n(t.prototype, e), r && n(t, r), t
                }
            }(), o = t("../../const");
            var i = function () {
                function i() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                        e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
                        r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0,
                        n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 0;
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, i), this.x = Number(t), this.y = Number(e), this.width = Number(r), this.height = Number(n), this.type = o.SHAPES.RECT
                }

                return i.prototype.clone = function () {
                    return new i(this.x, this.y, this.width, this.height)
                }, i.prototype.copy = function (t) {
                    return this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height, this
                }, i.prototype.contains = function (t, e) {
                    return !(this.width <= 0 || this.height <= 0) && (t >= this.x && t < this.x + this.width && e >= this.y && e < this.y + this.height)
                }, i.prototype.pad = function (t, e) {
                    t = t || 0, e = e || (0 !== e ? t : 0), this.x -= t, this.y -= e, this.width += 2 * t, this.height += 2 * e
                }, i.prototype.fit = function (t) {
                    this.x < t.x && (this.width += this.x, this.width < 0 && (this.width = 0), this.x = t.x), this.y < t.y && (this.height += this.y, this.height < 0 && (this.height = 0), this.y = t.y), this.x + this.width > t.x + t.width && (this.width = t.width - this.x, this.width < 0 && (this.width = 0)), this.y + this.height > t.y + t.height && (this.height = t.height - this.y, this.height < 0 && (this.height = 0))
                }, i.prototype.enlarge = function (t) {
                    var e = Math.min(this.x, t.x), r = Math.max(this.x + this.width, t.x + t.width),
                        n = Math.min(this.y, t.y), i = Math.max(this.y + this.height, t.y + t.height);
                    this.x = e, this.width = r - e, this.y = n, this.height = i - n
                }, n(i, [{
                    key: "left", get: function () {
                        return this.x
                    }
                }, {
                    key: "right", get: function () {
                        return this.x + this.width
                    }
                }, {
                    key: "top", get: function () {
                        return this.y
                    }
                }, {
                    key: "bottom", get: function () {
                        return this.y + this.height
                    }
                }], [{
                    key: "EMPTY", get: function () {
                        return new i(0, 0, 0, 0)
                    }
                }]), i
            }();
            r.default = i
        }, {"../../const": 46}],
        75: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var s = t("../../const");
            var n = function () {
                function o() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                        e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
                        r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0,
                        n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 0,
                        i = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 20;
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, o), this.x = t, this.y = e, this.width = r, this.height = n, this.radius = i, this.type = s.SHAPES.RREC
                }

                return o.prototype.clone = function () {
                    return new o(this.x, this.y, this.width, this.height, this.radius)
                }, o.prototype.contains = function (t, e) {
                    if (this.width <= 0 || this.height <= 0) return !1;
                    if (t >= this.x && t <= this.x + this.width && e >= this.y && e <= this.y + this.height) {
                        if (e >= this.y + this.radius && e <= this.y + this.height - this.radius || t >= this.x + this.radius && t <= this.x + this.width - this.radius) return !0;
                        var r = t - (this.x + this.radius), n = e - (this.y + this.radius),
                            i = this.radius * this.radius;
                        if (r * r + n * n <= i) return !0;
                        if ((r = t - (this.x + this.width - this.radius)) * r + n * n <= i) return !0;
                        if (r * r + (n = e - (this.y + this.height - this.radius)) * n <= i) return !0;
                        if ((r = t - (this.x + this.radius)) * r + n * n <= i) return !0
                    }
                    return !1
                }, o
            }();
            r.default = n
        }, {"../../const": 46}],
        76: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n = function () {
                    function n(t, e) {
                        for (var r = 0; r < e.length; r++) {
                            var n = e[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }

                    return function (t, e, r) {
                        return e && n(t.prototype, e), r && n(t, r), t
                    }
                }(), a = t("../utils"), u = t("../math"), h = t("../const"), l = o(t("../settings")),
                c = o(t("../display/Container")), d = o(t("../textures/RenderTexture")), i = o(t("eventemitter3"));

            function o(t) {
                return t && t.__esModule ? t : {default: t}
            }

            var f = new u.Matrix, s = function (o) {
                function s(t, e, r, n) {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, s);
                    var i = function (t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, o.call(this));
                    return (0, a.sayHello)(t), "number" == typeof e && (e = Object.assign({
                        width: e,
                        height: r || l.default.RENDER_OPTIONS.height
                    }, n)), e = Object.assign({}, l.default.RENDER_OPTIONS, e), i.options = e, i.type = h.RENDERER_TYPE.UNKNOWN, i.screen = new u.Rectangle(0, 0, e.width, e.height), i.view = e.view || document.createElement("canvas"), i.resolution = e.resolution || l.default.RESOLUTION, i.transparent = e.transparent, i.autoResize = e.autoResize || !1, i.blendModes = null, i.preserveDrawingBuffer = e.preserveDrawingBuffer, i.clearBeforeRender = e.clearBeforeRender, i.roundPixels = e.roundPixels, i._backgroundColor = 0, i._backgroundColorRgba = [0, 0, 0, 0], i._backgroundColorString = "#000000", i.backgroundColor = e.backgroundColor || i._backgroundColor, i._tempDisplayObjectParent = new c.default, i._lastObjectRendered = i._tempDisplayObjectParent, i
                }

                return function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(s, o), s.prototype.resize = function (t, e) {
                    this.screen.width = t, this.screen.height = e, this.view.width = t * this.resolution, this.view.height = e * this.resolution, this.autoResize && (this.view.style.width = t + "px", this.view.style.height = e + "px")
                }, s.prototype.generateTexture = function (t, e, r) {
                    var n = t.getLocalBounds(), i = d.default.create(0 | n.width, 0 | n.height, e, r);
                    return f.tx = -n.x, f.ty = -n.y, this.render(t, i, !1, f, !0), i
                }, s.prototype.destroy = function (t) {
                    t && this.view.parentNode && this.view.parentNode.removeChild(this.view), this.type = h.RENDERER_TYPE.UNKNOWN, this.view = null, this.screen = null, this.resolution = 0, this.transparent = !1, this.autoResize = !1, this.blendModes = null, this.options = null, this.preserveDrawingBuffer = !1, this.clearBeforeRender = !1, this.roundPixels = !1, this._backgroundColor = 0, this._backgroundColorRgba = null, this._backgroundColorString = null, this._tempDisplayObjectParent = null, this._lastObjectRendered = null
                }, n(s, [{
                    key: "width", get: function () {
                        return this.view.width
                    }
                }, {
                    key: "height", get: function () {
                        return this.view.height
                    }
                }, {
                    key: "backgroundColor", get: function () {
                        return this._backgroundColor
                    }, set: function (t) {
                        this._backgroundColor = t, this._backgroundColorString = (0, a.hex2string)(t), (0, a.hex2rgb)(t, this._backgroundColorRgba)
                    }
                }]), s
            }(i.default);
            r.default = s
        }, {
            "../const": 46,
            "../display/Container": 48,
            "../math": 70,
            "../settings": 101,
            "../textures/RenderTexture": 113,
            "../utils": 124,
            eventemitter3: 3
        }],
        77: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n = o(t("../SystemRenderer")), s = o(t("./utils/CanvasMaskManager")),
                l = o(t("./utils/CanvasRenderTarget")), a = o(t("./utils/mapCanvasBlendModesToPixi")),
                i = t("../../utils"), c = t("../../const"), u = o(t("../../settings"));

            function o(t) {
                return t && t.__esModule ? t : {default: t}
            }

            var h = function (i) {
                function o(t, e, r) {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, o);
                    var n = function (t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, i.call(this, "Canvas", t, e, r));
                    return n.type = c.RENDERER_TYPE.CANVAS, n.rootContext = n.view.getContext("2d", {alpha: n.transparent}), n.context = n.rootContext, n.refresh = !0, n.maskManager = new s.default(n), n.smoothProperty = "imageSmoothingEnabled", n.rootContext.imageSmoothingEnabled || (n.rootContext.webkitImageSmoothingEnabled ? n.smoothProperty = "webkitImageSmoothingEnabled" : n.rootContext.mozImageSmoothingEnabled ? n.smoothProperty = "mozImageSmoothingEnabled" : n.rootContext.oImageSmoothingEnabled ? n.smoothProperty = "oImageSmoothingEnabled" : n.rootContext.msImageSmoothingEnabled && (n.smoothProperty = "msImageSmoothingEnabled")), n.initPlugins(), n.blendModes = (0, a.default)(), n._activeBlendMode = null, n.renderingToScreen = !1, n.resize(n.options.width, n.options.height), n
                }

                return function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(o, i), o.prototype.render = function (t, e, r, n, i) {
                    if (this.view) {
                        this.renderingToScreen = !e, this.emit("prerender");
                        var o = this.resolution;
                        e ? ((e = e.baseTexture || e)._canvasRenderTarget || (e._canvasRenderTarget = new l.default(e.width, e.height, e.resolution), e.source = e._canvasRenderTarget.canvas, e.valid = !0), this.context = e._canvasRenderTarget.context, this.resolution = e._canvasRenderTarget.resolution) : this.context = this.rootContext;
                        var s = this.context;
                        if (e || (this._lastObjectRendered = t), !i) {
                            var a = t.parent, u = this._tempDisplayObjectParent.transform.worldTransform;
                            n ? (n.copy(u), this._tempDisplayObjectParent.transform._worldID = -1) : u.identity(), t.parent = this._tempDisplayObjectParent, t.updateTransform(), t.parent = a
                        }
                        s.setTransform(1, 0, 0, 1, 0, 0), s.globalAlpha = 1, this._activeBlendMode = c.BLEND_MODES.NORMAL, s.globalCompositeOperation = this.blendModes[c.BLEND_MODES.NORMAL], navigator.isCocoonJS && this.view.screencanvas && (s.fillStyle = "black", s.clear()), (void 0 !== r ? r : this.clearBeforeRender) && this.renderingToScreen && (this.transparent ? s.clearRect(0, 0, this.width, this.height) : (s.fillStyle = this._backgroundColorString, s.fillRect(0, 0, this.width, this.height)));
                        var h = this.context;
                        this.context = s, t.renderCanvas(this), this.context = h, this.resolution = o, this.emit("postrender")
                    }
                }, o.prototype.clear = function (t) {
                    var e = this.context;
                    t = t || this._backgroundColorString, !this.transparent && t ? (e.fillStyle = t, e.fillRect(0, 0, this.width, this.height)) : e.clearRect(0, 0, this.width, this.height)
                }, o.prototype.setBlendMode = function (t) {
                    this._activeBlendMode !== t && (this._activeBlendMode = t, this.context.globalCompositeOperation = this.blendModes[t])
                }, o.prototype.destroy = function (t) {
                    this.destroyPlugins(), i.prototype.destroy.call(this, t), this.context = null, this.refresh = !0, this.maskManager.destroy(), this.maskManager = null, this.smoothProperty = null
                }, o.prototype.resize = function (t, e) {
                    i.prototype.resize.call(this, t, e), this.smoothProperty && (this.rootContext[this.smoothProperty] = u.default.SCALE_MODE === c.SCALE_MODES.LINEAR)
                }, o.prototype.invalidateBlendMode = function () {
                    this._activeBlendMode = this.blendModes.indexOf(this.context.globalCompositeOperation)
                }, o
            }(n.default);
            r.default = h, i.pluginTarget.mixin(h)
        }, {
            "../../const": 46,
            "../../settings": 101,
            "../../utils": 124,
            "../SystemRenderer": 76,
            "./utils/CanvasMaskManager": 78,
            "./utils/CanvasRenderTarget": 79,
            "./utils/mapCanvasBlendModesToPixi": 81
        }],
        78: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var E = t("../../../const");
            var n = function () {
                function e(t) {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.renderer = t
                }

                return e.prototype.pushMask = function (t) {
                    var e = this.renderer;
                    e.context.save();
                    var r = t.alpha, n = t.transform.worldTransform, i = e.resolution;
                    e.context.setTransform(n.a * i, n.b * i, n.c * i, n.d * i, n.tx * i, n.ty * i), t._texture || (this.renderGraphicsShape(t), e.context.clip()), t.worldAlpha = r
                }, e.prototype.renderGraphicsShape = function (t) {
                    var e = this.renderer.context, r = t.graphicsData.length;
                    if (0 !== r) {
                        e.beginPath();
                        for (var n = 0; n < r; n++) {
                            var i = t.graphicsData[n], o = i.shape;
                            if (i.type === E.SHAPES.POLY) {
                                var s = o.points;
                                e.moveTo(s[0], s[1]);
                                for (var a = 1; a < s.length / 2; a++) e.lineTo(s[2 * a], s[2 * a + 1]);
                                s[0] === s[s.length - 2] && s[1] === s[s.length - 1] && e.closePath()
                            } else if (i.type === E.SHAPES.RECT) e.rect(o.x, o.y, o.width, o.height), e.closePath(); else if (i.type === E.SHAPES.CIRC) e.arc(o.x, o.y, o.radius, 0, 2 * Math.PI), e.closePath(); else if (i.type === E.SHAPES.ELIP) {
                                var u = 2 * o.width, h = 2 * o.height, l = o.x - u / 2, c = o.y - h / 2,
                                    d = u / 2 * .5522848, f = h / 2 * .5522848, p = l + u, v = c + h, g = l + u / 2,
                                    y = c + h / 2;
                                e.moveTo(l, y), e.bezierCurveTo(l, y - f, g - d, c, g, c), e.bezierCurveTo(g + d, c, p, y - f, p, y), e.bezierCurveTo(p, y + f, g + d, v, g, v), e.bezierCurveTo(g - d, v, l, y + f, l, y), e.closePath()
                            } else if (i.type === E.SHAPES.RREC) {
                                var m = o.x, _ = o.y, b = o.width, x = o.height, T = o.radius,
                                    w = Math.min(b, x) / 2 | 0;
                                T = w < T ? w : T, e.moveTo(m, _ + T), e.lineTo(m, _ + x - T), e.quadraticCurveTo(m, _ + x, m + T, _ + x), e.lineTo(m + b - T, _ + x), e.quadraticCurveTo(m + b, _ + x, m + b, _ + x - T), e.lineTo(m + b, _ + T), e.quadraticCurveTo(m + b, _, m + b - T, _), e.lineTo(m + T, _), e.quadraticCurveTo(m, _, m, _ + T), e.closePath()
                            }
                        }
                    }
                }, e.prototype.popMask = function (t) {
                    t.context.restore(), t.invalidateBlendMode()
                }, e.prototype.destroy = function () {
                }, e
            }();
            r.default = n
        }, {"../../../const": 46}],
        79: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n, i = function () {
                function n(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function (t, e, r) {
                    return e && n(t.prototype, e), r && n(t, r), t
                }
            }(), o = t("../../../settings"), s = (n = o) && n.__esModule ? n : {default: n};
            var a = function () {
                function n(t, e, r) {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, n), this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.resolution = r || s.default.RESOLUTION, this.resize(t, e)
                }

                return n.prototype.clear = function () {
                    this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
                }, n.prototype.resize = function (t, e) {
                    this.canvas.width = t * this.resolution, this.canvas.height = e * this.resolution
                }, n.prototype.destroy = function () {
                    this.context = null, this.canvas = null
                }, i(n, [{
                    key: "width", get: function () {
                        return this.canvas.width
                    }, set: function (t) {
                        this.canvas.width = t
                    }
                }, {
                    key: "height", get: function () {
                        return this.canvas.height
                    }, set: function (t) {
                        this.canvas.height = t
                    }
                }]), n
            }();
            r.default = a
        }, {"../../../settings": 101}],
        80: [function (t, e, r) {
            "use strict";

            function s(t) {
                var e = document.createElement("canvas");
                e.width = 6, e.height = 1;
                var r = e.getContext("2d");
                return r.fillStyle = t, r.fillRect(0, 0, 6, 1), e
            }

            r.__esModule = !0, r.default = function () {
                if ("undefined" == typeof document) return !1;
                var t = s("#ff00ff"), e = s("#ffff00"), r = document.createElement("canvas");
                r.width = 6, r.height = 1;
                var n = r.getContext("2d");
                n.globalCompositeOperation = "multiply", n.drawImage(t, 0, 0), n.drawImage(e, 2, 0);
                var i = n.getImageData(2, 0, 1, 1);
                if (!i) return !1;
                var o = i.data;
                return 255 === o[0] && 0 === o[1] && 0 === o[2]
            }
        }, {}],
        81: [function (t, e, r) {
            "use strict";
            r.__esModule = !0, r.default = function () {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
                (0, s.default)() ? (t[i.BLEND_MODES.NORMAL] = "source-over", t[i.BLEND_MODES.ADD] = "lighter", t[i.BLEND_MODES.MULTIPLY] = "multiply", t[i.BLEND_MODES.SCREEN] = "screen", t[i.BLEND_MODES.OVERLAY] = "overlay", t[i.BLEND_MODES.DARKEN] = "darken", t[i.BLEND_MODES.LIGHTEN] = "lighten", t[i.BLEND_MODES.COLOR_DODGE] = "color-dodge", t[i.BLEND_MODES.COLOR_BURN] = "color-burn", t[i.BLEND_MODES.HARD_LIGHT] = "hard-light", t[i.BLEND_MODES.SOFT_LIGHT] = "soft-light", t[i.BLEND_MODES.DIFFERENCE] = "difference", t[i.BLEND_MODES.EXCLUSION] = "exclusion", t[i.BLEND_MODES.HUE] = "hue", t[i.BLEND_MODES.SATURATION] = "saturate", t[i.BLEND_MODES.COLOR] = "color", t[i.BLEND_MODES.LUMINOSITY] = "luminosity") : (t[i.BLEND_MODES.NORMAL] = "source-over", t[i.BLEND_MODES.ADD] = "lighter", t[i.BLEND_MODES.MULTIPLY] = "source-over", t[i.BLEND_MODES.SCREEN] = "source-over", t[i.BLEND_MODES.OVERLAY] = "source-over", t[i.BLEND_MODES.DARKEN] = "source-over", t[i.BLEND_MODES.LIGHTEN] = "source-over", t[i.BLEND_MODES.COLOR_DODGE] = "source-over", t[i.BLEND_MODES.COLOR_BURN] = "source-over", t[i.BLEND_MODES.HARD_LIGHT] = "source-over", t[i.BLEND_MODES.SOFT_LIGHT] = "source-over", t[i.BLEND_MODES.DIFFERENCE] = "source-over", t[i.BLEND_MODES.EXCLUSION] = "source-over", t[i.BLEND_MODES.HUE] = "source-over", t[i.BLEND_MODES.SATURATION] = "source-over", t[i.BLEND_MODES.COLOR] = "source-over", t[i.BLEND_MODES.LUMINOSITY] = "source-over");
                return t[i.BLEND_MODES.NORMAL_NPM] = t[i.BLEND_MODES.NORMAL], t[i.BLEND_MODES.ADD_NPM] = t[i.BLEND_MODES.ADD], t[i.BLEND_MODES.SCREEN_NPM] = t[i.BLEND_MODES.SCREEN], t
            };
            var n, i = t("../../../const"), o = t("./canUseNewCanvasBlendModes"),
                s = (n = o) && n.__esModule ? n : {default: n}
        }, {"../../../const": 46, "./canUseNewCanvasBlendModes": 80}],
        82: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n, i = t("../../const"), o = t("../../settings"), s = (n = o) && n.__esModule ? n : {default: n};
            var a = function () {
                function e(t) {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.renderer = t, this.count = 0, this.checkCount = 0, this.maxIdle = s.default.GC_MAX_IDLE, this.checkCountMax = s.default.GC_MAX_CHECK_COUNT, this.mode = s.default.GC_MODE
                }

                return e.prototype.update = function () {
                    this.count++, this.mode !== i.GC_MODES.MANUAL && (this.checkCount++, this.checkCount > this.checkCountMax && (this.checkCount = 0, this.run()))
                }, e.prototype.run = function () {
                    for (var t = this.renderer.textureManager, e = t._managedTextures, r = !1, n = 0; n < e.length; n++) {
                        var i = e[n];
                        !i._glRenderTargets && this.count - i.touched > this.maxIdle && (t.destroyTexture(i, !0), r = !(e[n] = null))
                    }
                    if (r) {
                        for (var o = 0, s = 0; s < e.length; s++) null !== e[s] && (e[o++] = e[s]);
                        e.length = o
                    }
                }, e.prototype.unload = function (t) {
                    var e = this.renderer.textureManager;
                    t._texture && t._texture._glRenderTargets && e.destroyTexture(t._texture, !0);
                    for (var r = t.children.length - 1; 0 <= r; r--) this.unload(t.children[r])
                }, e
            }();
            r.default = a
        }, {"../../const": 46, "../../settings": 101}],
        83: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n, u = t("pixi-gl-core"), h = t("../../const"), i = t("./utils/RenderTarget"),
                l = (n = i) && n.__esModule ? n : {default: n}, s = t("../../utils");
            var o = function () {
                function e(t) {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.renderer = t, this.gl = t.gl, this._managedTextures = []
                }

                return e.prototype.bindTexture = function () {
                }, e.prototype.getTexture = function () {
                }, e.prototype.updateTexture = function (t, e) {
                    var r = this.gl, n = !!t._glRenderTargets;
                    if (!t.hasLoaded) return null;
                    var i = this.renderer.boundTextures;
                    if (void 0 === e) for (var o = e = 0; o < i.length; ++o) if (i[o] === t) {
                        e = o;
                        break
                    }
                    i[e] = t, r.activeTexture(r.TEXTURE0 + e);
                    var s = t._glTextures[this.renderer.CONTEXT_UID];
                    if (s) n ? t._glRenderTargets[this.renderer.CONTEXT_UID].resize(t.width, t.height) : s.upload(t.source); else {
                        if (n) {
                            var a = new l.default(this.gl, t.width, t.height, t.scaleMode, t.resolution);
                            a.resize(t.width, t.height), s = (t._glRenderTargets[this.renderer.CONTEXT_UID] = a).texture
                        } else (s = new u.GLTexture(this.gl, null, null, null, null)).bind(e), s.premultiplyAlpha = !0, s.upload(t.source);
                        t._glTextures[this.renderer.CONTEXT_UID] = s, t.on("update", this.updateTexture, this), t.on("dispose", this.destroyTexture, this), this._managedTextures.push(t), t.isPowerOfTwo ? (t.mipmap && s.enableMipmap(), t.wrapMode === h.WRAP_MODES.CLAMP ? s.enableWrapClamp() : t.wrapMode === h.WRAP_MODES.REPEAT ? s.enableWrapRepeat() : s.enableWrapMirrorRepeat()) : s.enableWrapClamp(), t.scaleMode === h.SCALE_MODES.NEAREST ? s.enableNearestScaling() : s.enableLinearScaling()
                    }
                    return s
                }, e.prototype.destroyTexture = function (t, e) {
                    if ((t = t.baseTexture || t).hasLoaded) {
                        var r = this.renderer.CONTEXT_UID, n = t._glTextures, i = t._glRenderTargets;
                        if (n[r] && (this.renderer.unbindTexture(t), n[r].destroy(), t.off("update", this.updateTexture, this), t.off("dispose", this.destroyTexture, this), delete n[r], !e)) {
                            var o = this._managedTextures.indexOf(t);
                            -1 !== o && (0, s.removeItems)(this._managedTextures, o, 1)
                        }
                        i && i[r] && (i[r].destroy(), delete i[r])
                    }
                }, e.prototype.removeAll = function () {
                    for (var t = 0; t < this._managedTextures.length; ++t) {
                        var e = this._managedTextures[t];
                        e._glTextures[this.renderer.CONTEXT_UID] && delete e._glTextures[this.renderer.CONTEXT_UID]
                    }
                }, e.prototype.destroy = function () {
                    for (var t = 0; t < this._managedTextures.length; ++t) {
                        var e = this._managedTextures[t];
                        this.destroyTexture(e, !0), e.off("update", this.updateTexture, this), e.off("dispose", this.destroyTexture, this)
                    }
                    this._managedTextures = null
                }, e
            }();
            r.default = o
        }, {"../../const": 46, "../../utils": 124, "./utils/RenderTarget": 96, "pixi-gl-core": 15}],
        84: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n = o(t("../SystemRenderer")), s = o(t("./managers/MaskManager")),
                a = o(t("./managers/StencilManager")), u = o(t("./managers/FilterManager")),
                h = o(t("./utils/RenderTarget")), l = o(t("./utils/ObjectRenderer")), c = o(t("./TextureManager")),
                d = o(t("../../textures/BaseTexture")), f = o(t("./TextureGarbageCollector")), p = o(t("./WebGLState")),
                v = o(t("./utils/mapWebGLDrawModesToPixi")), g = o(t("./utils/validateContext")), i = t("../../utils"),
                y = o(t("pixi-gl-core")), m = t("../../const");

            function o(t) {
                return t && t.__esModule ? t : {default: t}
            }

            var _ = 0, b = function (i) {
                function o(t, e, r) {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, o);
                    var n = function (t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, i.call(this, "WebGL", t, e, r));
                    return n.legacy = n.options.legacy, n.legacy && (y.default.VertexArrayObject.FORCE_NATIVE = !0), n.type = m.RENDERER_TYPE.WEBGL, n.handleContextLost = n.handleContextLost.bind(n), n.handleContextRestored = n.handleContextRestored.bind(n), n.view.addEventListener("webglcontextlost", n.handleContextLost, !1), n.view.addEventListener("webglcontextrestored", n.handleContextRestored, !1), n._contextOptions = {
                        alpha: n.transparent,
                        antialias: n.options.antialias,
                        premultipliedAlpha: n.transparent && "notMultiplied" !== n.transparent,
                        stencil: !0,
                        preserveDrawingBuffer: n.options.preserveDrawingBuffer,
                        powerPreference: n.options.powerPreference
                    }, n._backgroundColorRgba[3] = n.transparent ? 0 : 1, n.maskManager = new s.default(n), n.stencilManager = new a.default(n), n.emptyRenderer = new l.default(n), n.currentRenderer = n.emptyRenderer, n.initPlugins(), n.options.context && (0, g.default)(n.options.context), n.gl = n.options.context || y.default.createContext(n.view, n._contextOptions), n.CONTEXT_UID = _++, n.state = new p.default(n.gl), n.renderingToScreen = !0, n.boundTextures = null, n._activeShader = null, n._activeVao = null, n._activeRenderTarget = null, n._initContext(), n.filterManager = new u.default(n), n.drawModes = (0, v.default)(n.gl), n._nextTextureLocation = 0, n.setBlendMode(0), n
                }

                return function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(o, i), o.prototype._initContext = function () {
                    var t = this.gl;
                    t.isContextLost() && t.getExtension("WEBGL_lose_context") && t.getExtension("WEBGL_lose_context").restoreContext();
                    var e = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS);
                    this._activeShader = null, this._activeVao = null, this.boundTextures = new Array(e), this.emptyTextures = new Array(e), this.textureManager = new c.default(this), this.textureGC = new f.default(this), this.state.resetToDefault(), this.rootRenderTarget = new h.default(t, this.width, this.height, null, this.resolution, !0), this.rootRenderTarget.clearColor = this._backgroundColorRgba, this.bindRenderTarget(this.rootRenderTarget);
                    var r = new y.default.GLTexture.fromData(t, null, 1, 1), n = {_glTextures: {}};
                    n._glTextures[this.CONTEXT_UID] = {};
                    for (var i = 0; i < e; i++) {
                        var o = new d.default;
                        o._glTextures[this.CONTEXT_UID] = r, this.boundTextures[i] = n, this.emptyTextures[i] = o, this.bindTexture(null, i)
                    }
                    this.emit("context", t), this.resize(this.screen.width, this.screen.height)
                }, o.prototype.render = function (t, e, r, n, i) {
                    if (this.renderingToScreen = !e, this.emit("prerender"), this.gl && !this.gl.isContextLost()) {
                        if (this._nextTextureLocation = 0, e || (this._lastObjectRendered = t), !i) {
                            var o = t.parent;
                            t.parent = this._tempDisplayObjectParent, t.updateTransform(), t.parent = o
                        }
                        this.bindRenderTexture(e, n), this.currentRenderer.start(), (void 0 !== r ? r : this.clearBeforeRender) && this._activeRenderTarget.clear(), t.renderWebGL(this), this.currentRenderer.flush(), this.textureGC.update(), this.emit("postrender")
                    }
                }, o.prototype.setObjectRenderer = function (t) {
                    this.currentRenderer !== t && (this.currentRenderer.stop(), this.currentRenderer = t, this.currentRenderer.start())
                }, o.prototype.flush = function () {
                    this.setObjectRenderer(this.emptyRenderer)
                }, o.prototype.resize = function (t, e) {
                    n.default.prototype.resize.call(this, t, e), this.rootRenderTarget.resize(t, e), this._activeRenderTarget === this.rootRenderTarget && (this.rootRenderTarget.activate(), this._activeShader && (this._activeShader.uniforms.projectionMatrix = this.rootRenderTarget.projectionMatrix.toArray(!0)))
                }, o.prototype.setBlendMode = function (t) {
                    this.state.setBlendMode(t)
                }, o.prototype.clear = function (t) {
                    this._activeRenderTarget.clear(t)
                }, o.prototype.setTransform = function (t) {
                    this._activeRenderTarget.transform = t
                }, o.prototype.clearRenderTexture = function (t, e) {
                    var r = t.baseTexture._glRenderTargets[this.CONTEXT_UID];
                    return r && r.clear(e), this
                }, o.prototype.bindRenderTexture = function (t, e) {
                    var r = void 0;
                    if (t) {
                        var n = t.baseTexture;
                        n._glRenderTargets[this.CONTEXT_UID] || this.textureManager.updateTexture(n, 0), this.unbindTexture(n), (r = n._glRenderTargets[this.CONTEXT_UID]).setFrame(t.frame)
                    } else r = this.rootRenderTarget;
                    return r.transform = e, this.bindRenderTarget(r), this
                }, o.prototype.bindRenderTarget = function (t) {
                    return t !== this._activeRenderTarget && ((this._activeRenderTarget = t).activate(), this._activeShader && (this._activeShader.uniforms.projectionMatrix = t.projectionMatrix.toArray(!0)), this.stencilManager.setMaskStack(t.stencilMaskStack)), this
                }, o.prototype.bindShader = function (t, e) {
                    return this._activeShader !== t && ((this._activeShader = t).bind(), !1 !== e && (t.uniforms.projectionMatrix = this._activeRenderTarget.projectionMatrix.toArray(!0))), this
                }, o.prototype.bindTexture = function (t, e, r) {
                    if ((t = (t = t || this.emptyTextures[e]).baseTexture || t).touched = this.textureGC.count, r) e = e || 0; else {
                        for (var n = 0; n < this.boundTextures.length; n++) if (this.boundTextures[n] === t) return n;
                        void 0 === e && (this._nextTextureLocation++, this._nextTextureLocation %= this.boundTextures.length, e = this.boundTextures.length - this._nextTextureLocation - 1)
                    }
                    var i = this.gl, o = t._glTextures[this.CONTEXT_UID];
                    return o ? (this.boundTextures[e] = t, i.activeTexture(i.TEXTURE0 + e), i.bindTexture(i.TEXTURE_2D, o.texture)) : this.textureManager.updateTexture(t, e), e
                }, o.prototype.unbindTexture = function (t) {
                    var e = this.gl;
                    t = t.baseTexture || t;
                    for (var r = 0; r < this.boundTextures.length; r++) this.boundTextures[r] === t && (this.boundTextures[r] = this.emptyTextures[r], e.activeTexture(e.TEXTURE0 + r), e.bindTexture(e.TEXTURE_2D, this.emptyTextures[r]._glTextures[this.CONTEXT_UID].texture));
                    return this
                }, o.prototype.createVao = function () {
                    return new y.default.VertexArrayObject(this.gl, this.state.attribState)
                }, o.prototype.bindVao = function (t) {
                    return this._activeVao === t || (t ? t.bind() : this._activeVao && this._activeVao.unbind(), this._activeVao = t), this
                }, o.prototype.reset = function () {
                    return this.setObjectRenderer(this.emptyRenderer), this._activeShader = null, this._activeRenderTarget = this.rootRenderTarget, this.rootRenderTarget.activate(), this.state.resetToDefault(), this
                }, o.prototype.handleContextLost = function (t) {
                    t.preventDefault()
                }, o.prototype.handleContextRestored = function () {
                    this.textureManager.removeAll(), this._initContext()
                }, o.prototype.destroy = function (t) {
                    this.destroyPlugins(), this.view.removeEventListener("webglcontextlost", this.handleContextLost), this.view.removeEventListener("webglcontextrestored", this.handleContextRestored), this.textureManager.destroy(), i.prototype.destroy.call(this, t), this.uid = 0, this.maskManager.destroy(), this.stencilManager.destroy(), this.filterManager.destroy(), this.maskManager = null, this.filterManager = null, this.textureManager = null, this.currentRenderer = null, this.handleContextLost = null, this.handleContextRestored = null, this._contextOptions = null, this.gl.useProgram(null), this.gl.getExtension("WEBGL_lose_context") && this.gl.getExtension("WEBGL_lose_context").loseContext(), this.gl = null
                }, o
            }(n.default);
            r.default = b, i.pluginTarget.mixin(b)
        }, {
            "../../const": 46,
            "../../textures/BaseTexture": 112,
            "../../utils": 124,
            "../SystemRenderer": 76,
            "./TextureGarbageCollector": 82,
            "./TextureManager": 83,
            "./WebGLState": 85,
            "./managers/FilterManager": 90,
            "./managers/MaskManager": 91,
            "./managers/StencilManager": 92,
            "./utils/ObjectRenderer": 94,
            "./utils/RenderTarget": 96,
            "./utils/mapWebGLDrawModesToPixi": 99,
            "./utils/validateContext": 100,
            "pixi-gl-core": 15
        }],
        85: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n, i = t("./utils/mapWebGLBlendModesToPixi"), o = (n = i) && n.__esModule ? n : {default: n};
            var s = function () {
                function e(t) {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.activeState = new Uint8Array(16), this.defaultState = new Uint8Array(16), this.defaultState[0] = 1, this.stackIndex = 0, this.stack = [], this.gl = t, this.maxAttribs = t.getParameter(t.MAX_VERTEX_ATTRIBS), this.attribState = {
                        tempAttribState: new Array(this.maxAttribs),
                        attribState: new Array(this.maxAttribs)
                    }, this.blendModes = (0, o.default)(t), this.nativeVaoExtension = t.getExtension("OES_vertex_array_object") || t.getExtension("MOZ_OES_vertex_array_object") || t.getExtension("WEBKIT_OES_vertex_array_object")
                }

                return e.prototype.push = function () {
                    var t = this.stack[this.stackIndex];
                    t || (t = this.stack[this.stackIndex] = new Uint8Array(16)), ++this.stackIndex;
                    for (var e = 0; e < this.activeState.length; e++) t[e] = this.activeState[e]
                }, e.prototype.pop = function () {
                    var t = this.stack[--this.stackIndex];
                    this.setState(t)
                }, e.prototype.setState = function (t) {
                    this.setBlend(t[0]), this.setDepthTest(t[1]), this.setFrontFace(t[2]), this.setCullFace(t[3]), this.setBlendMode(t[4])
                }, e.prototype.setBlend = function (t) {
                    t = t ? 1 : 0, this.activeState[0] !== t && (this.activeState[0] = t, this.gl[t ? "enable" : "disable"](this.gl.BLEND))
                }, e.prototype.setBlendMode = function (t) {
                    if (t !== this.activeState[4]) {
                        this.activeState[4] = t;
                        var e = this.blendModes[t];
                        2 === e.length ? this.gl.blendFunc(e[0], e[1]) : this.gl.blendFuncSeparate(e[0], e[1], e[2], e[3])
                    }
                }, e.prototype.setDepthTest = function (t) {
                    t = t ? 1 : 0, this.activeState[1] !== t && (this.activeState[1] = t, this.gl[t ? "enable" : "disable"](this.gl.DEPTH_TEST))
                }, e.prototype.setCullFace = function (t) {
                    t = t ? 1 : 0, this.activeState[3] !== t && (this.activeState[3] = t, this.gl[t ? "enable" : "disable"](this.gl.CULL_FACE))
                }, e.prototype.setFrontFace = function (t) {
                    t = t ? 1 : 0, this.activeState[2] !== t && (this.activeState[2] = t, this.gl.frontFace(this.gl[t ? "CW" : "CCW"]))
                }, e.prototype.resetAttributes = function () {
                    for (var t = 0; t < this.attribState.tempAttribState.length; t++) this.attribState.tempAttribState[t] = 0;
                    for (var e = 0; e < this.attribState.attribState.length; e++) this.attribState.attribState[e] = 0;
                    for (var r = 1; r < this.maxAttribs; r++) this.gl.disableVertexAttribArray(r)
                }, e.prototype.resetToDefault = function () {
                    this.nativeVaoExtension && this.nativeVaoExtension.bindVertexArrayOES(null), this.resetAttributes();
                    for (var t = 0; t < this.activeState.length; ++t) this.activeState[t] = 32;
                    this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, !1), this.setState(this.defaultState)
                }, e
            }();
            r.default = s
        }, {"./utils/mapWebGLBlendModesToPixi": 98}],
        86: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n = function () {
                    function n(t, e) {
                        for (var r = 0; r < e.length; r++) {
                            var n = e[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }

                    return function (t, e, r) {
                        return e && n(t.prototype, e), r && n(t, r), t
                    }
                }(), o = i(t("./extractUniformsFromSrc")), s = t("../../../utils"), a = t("../../../const"),
                u = i(t("../../../settings"));

            function i(t) {
                return t && t.__esModule ? t : {default: t}
            }

            var h = {}, l = function () {
                function i(t, e, r) {
                    for (var n in function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, i), this.vertexSrc = t || i.defaultVertexSrc, this.fragmentSrc = e || i.defaultFragmentSrc, this._blendMode = a.BLEND_MODES.NORMAL, this.uniformData = r || (0, o.default)(this.vertexSrc, this.fragmentSrc, "projectionMatrix|uSampler"), this.uniforms = {}, this.uniformData) this.uniforms[n] = this.uniformData[n].value;
                    this.glShaders = {}, h[this.vertexSrc + this.fragmentSrc] || (h[this.vertexSrc + this.fragmentSrc] = (0, s.uid)()), this.glShaderKey = h[this.vertexSrc + this.fragmentSrc], this.padding = 4, this.resolution = u.default.RESOLUTION, this.enabled = !0, this.autoFit = !0
                }

                return i.prototype.apply = function (t, e, r, n, i) {
                    t.applyFilter(this, e, r, n)
                }, n(i, [{
                    key: "blendMode", get: function () {
                        return this._blendMode
                    }, set: function (t) {
                        this._blendMode = t
                    }
                }], [{
                    key: "defaultVertexSrc", get: function () {
                        return ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "uniform mat3 projectionMatrix;", "uniform mat3 filterMatrix;", "varying vec2 vTextureCoord;", "varying vec2 vFilterCoord;", "void main(void){", "   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);", "   vFilterCoord = ( filterMatrix * vec3( aTextureCoord, 1.0)  ).xy;", "   vTextureCoord = aTextureCoord ;", "}"].join("\n")
                    }
                }, {
                    key: "defaultFragmentSrc", get: function () {
                        return ["varying vec2 vTextureCoord;", "varying vec2 vFilterCoord;", "uniform sampler2D uSampler;", "uniform sampler2D filterSampler;", "void main(void){", "   vec4 masky = texture2D(filterSampler, vFilterCoord);", "   vec4 sample = texture2D(uSampler, vTextureCoord);", "   vec4 color;", "   if(mod(vFilterCoord.x, 1.0) > 0.5)", "   {", "     color = vec4(1.0, 0.0, 0.0, 1.0);", "   }", "   else", "   {", "     color = vec4(0.0, 1.0, 0.0, 1.0);", "   }", "   gl_FragColor = mix(sample, masky, 0.5);", "   gl_FragColor *= sample.a;", "}"].join("\n")
                    }
                }]), i
            }();
            r.default = l
        }, {"../../../const": 46, "../../../settings": 101, "../../../utils": 124, "./extractUniformsFromSrc": 87}],
        87: [function (t, e, r) {
            "use strict";
            r.__esModule = !0, r.default = function (t, e, r) {
                var n = o(t), i = o(e);
                return Object.assign(n, i)
            };
            var n, i = t("pixi-gl-core");
            var c = ((n = i) && n.__esModule ? n : {default: n}).default.shader.defaultValue;

            function o(t) {
                for (var e = new RegExp("^(projectionMatrix|uSampler|filterArea|filterClamp)$"), r = {}, n = void 0, i = t.replace(/\s+/g, " ").split(/\s*;\s*/), o = 0; o < i.length; o++) {
                    var s = i[o].trim();
                    if (-1 < s.indexOf("uniform")) {
                        var a = s.split(" "), u = a[1], h = a[2], l = 1;
                        -1 < h.indexOf("[") && (h = (n = h.split(/\[|]/))[0], l *= Number(n[1])), h.match(e) || (r[h] = {
                            value: c(u, l),
                            name: h,
                            type: u
                        })
                    }
                }
                return r
            }
        }, {"pixi-gl-core": 15}],
        88: [function (t, e, r) {
            "use strict";
            r.__esModule = !0, r.calculateScreenSpaceMatrix = function (t, e, r) {
                var n = t.identity();
                return n.translate(e.x / r.width, e.y / r.height), n.scale(r.width, r.height), n
            }, r.calculateNormalizedScreenSpaceMatrix = function (t, e, r) {
                var n = t.identity();
                n.translate(e.x / r.width, e.y / r.height);
                var i = r.width / e.width, o = r.height / e.height;
                return n.scale(i, o), n
            }, r.calculateSpriteMatrix = function (t, e, r, n) {
                var i = n.worldTransform.copy(l.Matrix.TEMP_MATRIX), o = n._texture.baseTexture, s = t.identity(),
                    a = r.height / r.width;
                s.translate(e.x / r.width, e.y / r.height), s.scale(1, a);
                var u = r.width / o.width, h = r.height / o.height;
                return i.tx /= o.width * u, i.ty /= o.width * u, i.invert(), s.prepend(i), s.scale(1, 1 / a), s.scale(u, h), s.translate(n.anchor.x, n.anchor.y), s
            };
            var l = t("../../../math")
        }, {"../../../math": 70}],
        89: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n, i = t("../Filter"), o = (n = i) && n.__esModule ? n : {default: n}, s = t("../../../../math");
            t("path");
            var a = function (n) {
                function i(t) {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, i);
                    var e = new s.Matrix, r = function (t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, n.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n}\n", "varying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float alpha;\nuniform sampler2D mask;\n\nvoid main(void)\n{\n    // check clip! this will stop the mask bleeding out from the edges\n    vec2 text = abs( vMaskCoord - 0.5 );\n    text = step(0.5, text);\n\n    float clip = 1.0 - max(text.y, text.x);\n    vec4 original = texture2D(uSampler, vTextureCoord);\n    vec4 masky = texture2D(mask, vMaskCoord);\n\n    original *= (masky.r * masky.a * alpha * clip);\n\n    gl_FragColor = original;\n}\n"));
                    return t.renderable = !1, r.maskSprite = t, r.maskMatrix = e, r
                }

                return function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(i, n), i.prototype.apply = function (t, e, r) {
                    var n = this.maskSprite;
                    this.uniforms.mask = n._texture, this.uniforms.otherMatrix = t.calculateSpriteMatrix(this.maskMatrix, n), this.uniforms.alpha = n.worldAlpha, t.applyFilter(this, e, r)
                }, i
            }(o.default);
            r.default = a
        }, {"../../../../math": 70, "../Filter": 86, path: 8}],
        90: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n = l(t("./WebGLManager")), a = l(t("../utils/RenderTarget")), i = l(t("../utils/Quad")),
                o = t("../../../math"), u = l(t("../../../Shader")), s = function (t) {
                    {
                        if (t && t.__esModule) return t;
                        var e = {};
                        if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                        return e.default = t, e
                    }
                }(t("../filters/filterTransforms")), h = l(t("bit-twiddle"));

            function l(t) {
                return t && t.__esModule ? t : {default: t}
            }

            function c(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            var d = function t() {
                c(this, t), this.renderTarget = null, this.sourceFrame = new o.Rectangle, this.destinationFrame = new o.Rectangle, this.filters = [], this.target = null, this.resolution = 1
            }, f = function (r) {
                function n(t) {
                    c(this, n);
                    var e = function (t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, r.call(this, t));
                    return e.gl = e.renderer.gl, e.quad = new i.default(e.gl, t.state.attribState), e.shaderCache = {}, e.pool = {}, e.filterData = null, e
                }

                return function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(n, r), n.prototype.pushFilter = function (t, e) {
                    var r = this.renderer, n = this.filterData;
                    if (!n) {
                        n = this.renderer._activeRenderTarget.filterStack;
                        var i = new d;
                        i.sourceFrame = i.destinationFrame = this.renderer._activeRenderTarget.size, i.renderTarget = r._activeRenderTarget, this.renderer._activeRenderTarget.filterData = n = {
                            index: 0,
                            stack: [i]
                        }, this.filterData = n
                    }
                    var o = n.stack[++n.index];
                    o || (o = n.stack[n.index] = new d);
                    var s = e[0].resolution, a = 0 | e[0].padding, u = t.filterArea || t.getBounds(!0),
                        h = o.sourceFrame, l = o.destinationFrame;
                    h.x = (u.x * s | 0) / s, h.y = (u.y * s | 0) / s, h.width = (u.width * s | 0) / s, h.height = (u.height * s | 0) / s, n.stack[0].renderTarget.transform || e[0].autoFit && h.fit(n.stack[0].destinationFrame), h.pad(a), l.width = h.width, l.height = h.height;
                    var c = this.getPotRenderTarget(r.gl, h.width, h.height, s);
                    o.target = t, o.filters = e, o.resolution = s, (o.renderTarget = c).setFrame(l, h), r.bindRenderTarget(c), c.clear()
                }, n.prototype.popFilter = function () {
                    var t = this.filterData, e = t.stack[t.index - 1], r = t.stack[t.index];
                    this.quad.map(r.renderTarget.size, r.sourceFrame).upload();
                    var n = r.filters;
                    if (1 === n.length) n[0].apply(this, r.renderTarget, e.renderTarget, !1, r), this.freePotRenderTarget(r.renderTarget); else {
                        var i = r.renderTarget,
                            o = this.getPotRenderTarget(this.renderer.gl, r.sourceFrame.width, r.sourceFrame.height, r.resolution);
                        o.setFrame(r.destinationFrame, r.sourceFrame), o.clear();
                        var s = 0;
                        for (s = 0; s < n.length - 1; ++s) {
                            n[s].apply(this, i, o, !0, r);
                            var a = i;
                            i = o, o = a
                        }
                        n[s].apply(this, i, e.renderTarget, !1, r), this.freePotRenderTarget(i), this.freePotRenderTarget(o)
                    }
                    t.index--, 0 === t.index && (this.filterData = null)
                }, n.prototype.applyFilter = function (t, e, r, n) {
                    var i = this.renderer, o = i.gl, s = t.glShaders[i.CONTEXT_UID];
                    s || (t.glShaderKey ? (s = this.shaderCache[t.glShaderKey]) || (s = new u.default(this.gl, t.vertexSrc, t.fragmentSrc), t.glShaders[i.CONTEXT_UID] = this.shaderCache[t.glShaderKey] = s) : s = t.glShaders[i.CONTEXT_UID] = new u.default(this.gl, t.vertexSrc, t.fragmentSrc), i.bindVao(null), this.quad.initVao(s)), i.bindVao(this.quad.vao), i.bindRenderTarget(r), n && (o.disable(o.SCISSOR_TEST), i.clear(), o.enable(o.SCISSOR_TEST)), r === i.maskManager.scissorRenderTarget && i.maskManager.pushScissorMask(null, i.maskManager.scissorData), i.bindShader(s);
                    var a = this.renderer.emptyTextures[0];
                    this.renderer.boundTextures[0] = a, this.syncUniforms(s, t), i.state.setBlendMode(t.blendMode), o.activeTexture(o.TEXTURE0), o.bindTexture(o.TEXTURE_2D, e.texture.texture), this.quad.vao.draw(this.renderer.gl.TRIANGLES, 6, 0), o.bindTexture(o.TEXTURE_2D, a._glTextures[this.renderer.CONTEXT_UID].texture)
                }, n.prototype.syncUniforms = function (t, e) {
                    var r = e.uniformData, n = e.uniforms, i = 1, o = void 0;
                    if (t.uniforms.filterArea) {
                        o = this.filterData.stack[this.filterData.index];
                        var s = t.uniforms.filterArea;
                        s[0] = o.renderTarget.size.width, s[1] = o.renderTarget.size.height, s[2] = o.sourceFrame.x, s[3] = o.sourceFrame.y, t.uniforms.filterArea = s
                    }
                    if (t.uniforms.filterClamp) {
                        o = o || this.filterData.stack[this.filterData.index];
                        var a = t.uniforms.filterClamp;
                        a[0] = 0, a[1] = 0, a[2] = (o.sourceFrame.width - 1) / o.renderTarget.size.width, a[3] = (o.sourceFrame.height - 1) / o.renderTarget.size.height, t.uniforms.filterClamp = a
                    }
                    for (var u in r) if ("sampler2D" === r[u].type && 0 !== n[u]) {
                        if (n[u].baseTexture) t.uniforms[u] = this.renderer.bindTexture(n[u].baseTexture, i); else {
                            t.uniforms[u] = i;
                            var h = this.renderer.gl;
                            this.renderer.boundTextures[i] = this.renderer.emptyTextures[i], h.activeTexture(h.TEXTURE0 + i), n[u].texture.bind()
                        }
                        i++
                    } else if ("mat3" === r[u].type) void 0 !== n[u].a ? t.uniforms[u] = n[u].toArray(!0) : t.uniforms[u] = n[u]; else if ("vec2" === r[u].type) if (void 0 !== n[u].x) {
                        var l = t.uniforms[u] || new Float32Array(2);
                        l[0] = n[u].x, l[1] = n[u].y, t.uniforms[u] = l
                    } else t.uniforms[u] = n[u]; else "float" === r[u].type ? t.uniforms.data[u].value !== r[u] && (t.uniforms[u] = n[u]) : t.uniforms[u] = n[u]
                }, n.prototype.getRenderTarget = function (t, e) {
                    var r = this.filterData.stack[this.filterData.index],
                        n = this.getPotRenderTarget(this.renderer.gl, r.sourceFrame.width, r.sourceFrame.height, e || r.resolution);
                    return n.setFrame(r.destinationFrame, r.sourceFrame), n
                }, n.prototype.returnRenderTarget = function (t) {
                    this.freePotRenderTarget(t)
                }, n.prototype.calculateScreenSpaceMatrix = function (t) {
                    var e = this.filterData.stack[this.filterData.index];
                    return s.calculateScreenSpaceMatrix(t, e.sourceFrame, e.renderTarget.size)
                }, n.prototype.calculateNormalizedScreenSpaceMatrix = function (t) {
                    var e = this.filterData.stack[this.filterData.index];
                    return s.calculateNormalizedScreenSpaceMatrix(t, e.sourceFrame, e.renderTarget.size, e.destinationFrame)
                }, n.prototype.calculateSpriteMatrix = function (t, e) {
                    var r = this.filterData.stack[this.filterData.index];
                    return s.calculateSpriteMatrix(t, r.sourceFrame, r.renderTarget.size, e)
                }, n.prototype.destroy = function () {
                    this.shaderCache = {}, this.emptyPool()
                }, n.prototype.getPotRenderTarget = function (t, e, r, n) {
                    var i = (65535 & (e = h.default.nextPow2(e * n))) << 16 | 65535 & (r = h.default.nextPow2(r * n));
                    this.pool[i] || (this.pool[i] = []);
                    var o = this.pool[i].pop();
                    if (!o) {
                        var s = this.renderer.boundTextures[0];
                        t.activeTexture(t.TEXTURE0), o = new a.default(t, e, r, null, 1), t.bindTexture(t.TEXTURE_2D, s._glTextures[this.renderer.CONTEXT_UID].texture)
                    }
                    return o.resolution = n, o.defaultFrame.width = o.size.width = e / n, o.defaultFrame.height = o.size.height = r / n, o
                }, n.prototype.emptyPool = function () {
                    for (var t in this.pool) {
                        var e = this.pool[t];
                        if (e) for (var r = 0; r < e.length; r++) e[r].destroy(!0)
                    }
                    this.pool = {}
                }, n.prototype.freePotRenderTarget = function (t) {
                    var e = (65535 & t.size.width * t.resolution) << 16 | 65535 & t.size.height * t.resolution;
                    this.pool[e].push(t)
                }, n
            }(n.default);
            r.default = f
        }, {
            "../../../Shader": 44,
            "../../../math": 70,
            "../filters/filterTransforms": 88,
            "../utils/Quad": 95,
            "../utils/RenderTarget": 96,
            "./WebGLManager": 93,
            "bit-twiddle": 1
        }],
        91: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n = o(t("./WebGLManager")), i = o(t("../filters/spriteMask/SpriteMaskFilter"));

            function o(t) {
                return t && t.__esModule ? t : {default: t}
            }

            var s = function (r) {
                function n(t) {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    var e = function (t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, r.call(this, t));
                    return e.scissor = !1, e.scissorData = null, e.scissorRenderTarget = null, e.enableScissor = !0, e.alphaMaskPool = [], e.alphaMaskIndex = 0, e
                }

                return function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(n, r), n.prototype.pushMask = function (t, e) {
                    if (e.texture) this.pushSpriteMask(t, e); else if (this.enableScissor && !this.scissor && this.renderer._activeRenderTarget.root && !this.renderer.stencilManager.stencilMaskStack.length && e.isFastRect()) {
                        var r = e.worldTransform, n = Math.atan2(r.b, r.a);
                        (n = Math.round(n * (180 / Math.PI))) % 90 ? this.pushStencilMask(e) : this.pushScissorMask(t, e)
                    } else this.pushStencilMask(e)
                }, n.prototype.popMask = function (t, e) {
                    e.texture ? this.popSpriteMask(t, e) : this.enableScissor && !this.renderer.stencilManager.stencilMaskStack.length ? this.popScissorMask(t, e) : this.popStencilMask(t, e)
                }, n.prototype.pushSpriteMask = function (t, e) {
                    var r = this.alphaMaskPool[this.alphaMaskIndex];
                    r || (r = this.alphaMaskPool[this.alphaMaskIndex] = [new i.default(e)]), r[0].resolution = this.renderer.resolution, r[0].maskSprite = e, t.filterArea = e.getBounds(!0), this.renderer.filterManager.pushFilter(t, r), this.alphaMaskIndex++
                }, n.prototype.popSpriteMask = function () {
                    this.renderer.filterManager.popFilter(), this.alphaMaskIndex--
                }, n.prototype.pushStencilMask = function (t) {
                    this.renderer.currentRenderer.stop(), this.renderer.stencilManager.pushStencil(t)
                }, n.prototype.popStencilMask = function () {
                    this.renderer.currentRenderer.stop(), this.renderer.stencilManager.popStencil()
                }, n.prototype.pushScissorMask = function (t, e) {
                    e.renderable = !0;
                    var r = this.renderer._activeRenderTarget, n = e.getBounds();
                    n.fit(r.size), e.renderable = !1, this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST);
                    var i = this.renderer.resolution;
                    this.renderer.gl.scissor(n.x * i, (r.root ? r.size.height - n.y - n.height : n.y) * i, n.width * i, n.height * i), this.scissorRenderTarget = r, this.scissorData = e, this.scissor = !0
                }, n.prototype.popScissorMask = function () {
                    this.scissorRenderTarget = null, this.scissorData = null, this.scissor = !1;
                    var t = this.renderer.gl;
                    t.disable(t.SCISSOR_TEST)
                }, n
            }(n.default);
            r.default = s
        }, {"../filters/spriteMask/SpriteMaskFilter": 89, "./WebGLManager": 93}],
        92: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n, i = t("./WebGLManager"), o = (n = i) && n.__esModule ? n : {default: n};
            var s = function (r) {
                function n(t) {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    var e = function (t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, r.call(this, t));
                    return e.stencilMaskStack = null, e
                }

                return function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(n, r), n.prototype.setMaskStack = function (t) {
                    this.stencilMaskStack = t;
                    var e = this.renderer.gl;
                    0 === t.length ? e.disable(e.STENCIL_TEST) : e.enable(e.STENCIL_TEST)
                }, n.prototype.pushStencil = function (t) {
                    this.renderer.setObjectRenderer(this.renderer.plugins.graphics), this.renderer._activeRenderTarget.attachStencilBuffer();
                    var e = this.renderer.gl, r = this.stencilMaskStack;
                    0 === r.length && (e.enable(e.STENCIL_TEST), e.clear(e.STENCIL_BUFFER_BIT), e.stencilFunc(e.ALWAYS, 1, 1)), r.push(t), e.colorMask(!1, !1, !1, !1), e.stencilFunc(e.EQUAL, 0, r.length), e.stencilOp(e.KEEP, e.KEEP, e.INCR), this.renderer.plugins.graphics.render(t), e.colorMask(!0, !0, !0, !0), e.stencilFunc(e.NOTEQUAL, 0, r.length), e.stencilOp(e.KEEP, e.KEEP, e.KEEP)
                }, n.prototype.popStencil = function () {
                    this.renderer.setObjectRenderer(this.renderer.plugins.graphics);
                    var t = this.renderer.gl, e = this.stencilMaskStack, r = e.pop();
                    0 === e.length ? t.disable(t.STENCIL_TEST) : (t.colorMask(!1, !1, !1, !1), t.stencilFunc(t.EQUAL, 0, e.length), t.stencilOp(t.KEEP, t.KEEP, t.DECR), this.renderer.plugins.graphics.render(r), t.colorMask(!0, !0, !0, !0), t.stencilFunc(t.NOTEQUAL, 0, e.length), t.stencilOp(t.KEEP, t.KEEP, t.KEEP))
                }, n.prototype.destroy = function () {
                    o.default.prototype.destroy.call(this), this.stencilMaskStack.stencilStack = null
                }, n
            }(o.default);
            r.default = s
        }, {"./WebGLManager": 93}],
        93: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n = function () {
                function e(t) {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.renderer = t, this.renderer.on("context", this.onContextChange, this)
                }

                return e.prototype.onContextChange = function () {
                }, e.prototype.destroy = function () {
                    this.renderer.off("context", this.onContextChange, this), this.renderer = null
                }, e
            }();
            r.default = n
        }, {}],
        94: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n, i = t("../managers/WebGLManager");
            var o = function (t) {
                function e() {
                    return function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), function (t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, t.apply(this, arguments))
                }

                return function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, t), e.prototype.start = function () {
                }, e.prototype.stop = function () {
                    this.flush()
                }, e.prototype.flush = function () {
                }, e.prototype.render = function (t) {
                }, e
            }(((n = i) && n.__esModule ? n : {default: n}).default);
            r.default = o
        }, {"../managers/WebGLManager": 93}],
        95: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = n(t("pixi-gl-core")), o = n(t("../../../utils/createIndicesForQuads"));

            function n(t) {
                return t && t.__esModule ? t : {default: t}
            }

            var s = function () {
                function n(t, e) {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, n), this.gl = t, this.vertices = new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1]), this.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), this.interleaved = new Float32Array(16);
                    for (var r = 0; r < 4; r++) this.interleaved[4 * r] = this.vertices[2 * r], this.interleaved[4 * r + 1] = this.vertices[2 * r + 1], this.interleaved[4 * r + 2] = this.uvs[2 * r], this.interleaved[4 * r + 3] = this.uvs[2 * r + 1];
                    this.indices = (0, o.default)(1), this.vertexBuffer = i.default.GLBuffer.createVertexBuffer(t, this.interleaved, t.STATIC_DRAW), this.indexBuffer = i.default.GLBuffer.createIndexBuffer(t, this.indices, t.STATIC_DRAW), this.vao = new i.default.VertexArrayObject(t, e)
                }

                return n.prototype.initVao = function (t) {
                    this.vao.clear().addIndex(this.indexBuffer).addAttribute(this.vertexBuffer, t.attributes.aVertexPosition, this.gl.FLOAT, !1, 16, 0).addAttribute(this.vertexBuffer, t.attributes.aTextureCoord, this.gl.FLOAT, !1, 16, 8)
                }, n.prototype.map = function (t, e) {
                    var r = 0, n = 0;
                    return this.uvs[0] = r, this.uvs[1] = n, this.uvs[2] = r + e.width / t.width, this.uvs[3] = n, this.uvs[4] = r + e.width / t.width, this.uvs[5] = n + e.height / t.height, this.uvs[6] = r, this.uvs[7] = n + e.height / t.height, r = e.x, n = e.y, this.vertices[0] = r, this.vertices[1] = n, this.vertices[2] = r + e.width, this.vertices[3] = n, this.vertices[4] = r + e.width, this.vertices[5] = n + e.height, this.vertices[6] = r, this.vertices[7] = n + e.height, this
                }, n.prototype.upload = function () {
                    for (var t = 0; t < 4; t++) this.interleaved[4 * t] = this.vertices[2 * t], this.interleaved[4 * t + 1] = this.vertices[2 * t + 1], this.interleaved[4 * t + 2] = this.uvs[2 * t], this.interleaved[4 * t + 3] = this.uvs[2 * t + 1];
                    return this.vertexBuffer.upload(this.interleaved), this
                }, n.prototype.destroy = function () {
                    var t = this.gl;
                    t.deleteBuffer(this.vertexBuffer), t.deleteBuffer(this.indexBuffer)
                }, n
            }();
            r.default = s
        }, {"../../../utils/createIndicesForQuads": 122, "pixi-gl-core": 15}],
        96: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n, a = t("../../../math"), u = t("../../../const"), i = t("../../../settings"),
                h = (n = i) && n.__esModule ? n : {default: n}, l = t("pixi-gl-core");
            var o = function () {
                function s(t, e, r, n, i, o) {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, s), this.gl = t, this.frameBuffer = null, this.texture = null, this.clearColor = [0, 0, 0, 0], this.size = new a.Rectangle(0, 0, 1, 1), this.resolution = i || h.default.RESOLUTION, this.projectionMatrix = new a.Matrix, this.transform = null, this.frame = null, this.defaultFrame = new a.Rectangle, this.destinationFrame = null, this.sourceFrame = null, this.stencilBuffer = null, this.stencilMaskStack = [], this.filterData = null, this.scaleMode = void 0 !== n ? n : h.default.SCALE_MODE, this.root = o, this.root ? (this.frameBuffer = new l.GLFramebuffer(t, 100, 100), this.frameBuffer.framebuffer = null) : (this.frameBuffer = l.GLFramebuffer.createRGBA(t, 100, 100), this.scaleMode === u.SCALE_MODES.NEAREST ? this.frameBuffer.texture.enableNearestScaling() : this.frameBuffer.texture.enableLinearScaling(), this.texture = this.frameBuffer.texture), this.setFrame(), this.resize(e, r)
                }

                return s.prototype.clear = function (t) {
                    var e = t || this.clearColor;
                    this.frameBuffer.clear(e[0], e[1], e[2], e[3])
                }, s.prototype.attachStencilBuffer = function () {
                    this.root || this.frameBuffer.enableStencil()
                }, s.prototype.setFrame = function (t, e) {
                    this.destinationFrame = t || this.destinationFrame || this.defaultFrame, this.sourceFrame = e || this.sourceFrame || this.destinationFrame
                }, s.prototype.activate = function () {
                    var t = this.gl;
                    this.frameBuffer.bind(), this.calculateProjection(this.destinationFrame, this.sourceFrame), this.transform && this.projectionMatrix.append(this.transform), this.destinationFrame !== this.sourceFrame ? (t.enable(t.SCISSOR_TEST), t.scissor(0 | this.destinationFrame.x, 0 | this.destinationFrame.y, this.destinationFrame.width * this.resolution | 0, this.destinationFrame.height * this.resolution | 0)) : t.disable(t.SCISSOR_TEST), t.viewport(0 | this.destinationFrame.x, 0 | this.destinationFrame.y, this.destinationFrame.width * this.resolution | 0, this.destinationFrame.height * this.resolution | 0)
                }, s.prototype.calculateProjection = function (t, e) {
                    var r = this.projectionMatrix;
                    e = e || t, r.identity(), this.root ? (r.a = 1 / t.width * 2, r.d = -1 / t.height * 2, r.tx = -1 - e.x * r.a, r.ty = 1 - e.y * r.d) : (r.a = 1 / t.width * 2, r.d = 1 / t.height * 2, r.tx = -1 - e.x * r.a, r.ty = -1 - e.y * r.d)
                }, s.prototype.resize = function (t, e) {
                    if (t |= 0, e |= 0, this.size.width !== t || this.size.height !== e) {
                        this.size.width = t, this.size.height = e, this.defaultFrame.width = t, this.defaultFrame.height = e, this.frameBuffer.resize(t * this.resolution, e * this.resolution);
                        var r = this.frame || this.size;
                        this.calculateProjection(r)
                    }
                }, s.prototype.destroy = function () {
                    this.frameBuffer.destroy(), this.frameBuffer = null, this.texture = null
                }, s
            }();
            r.default = o
        }, {"../../../const": 46, "../../../math": 70, "../../../settings": 101, "pixi-gl-core": 15}],
        97: [function (t, e, r) {
            "use strict";
            r.__esModule = !0, r.default = function (t, e) {
                var r = !e;
                if (0 === t) throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");
                if (r) {
                    var n = document.createElement("canvas");
                    n.width = 1, n.height = 1, e = s.default.createContext(n)
                }
                var i = e.createShader(e.FRAGMENT_SHADER);
                for (; ;) {
                    var o = a.replace(/%forloop%/gi, u(t));
                    if (e.shaderSource(i, o), e.compileShader(i), e.getShaderParameter(i, e.COMPILE_STATUS)) break;
                    t = t / 2 | 0
                }
                r && e.getExtension("WEBGL_lose_context") && e.getExtension("WEBGL_lose_context").loseContext();
                return t
            };
            var n, i = t("pixi-gl-core"), s = (n = i) && n.__esModule ? n : {default: n};
            var a = ["precision mediump float;", "void main(void){", "float test = 0.1;", "%forloop%", "gl_FragColor = vec4(0.0);", "}"].join("\n");

            function u(t) {
                for (var e = "", r = 0; r < t; ++r) 0 < r && (e += "\nelse "), r < t - 1 && (e += "if(test == " + r + ".0){}");
                return e
            }
        }, {"pixi-gl-core": 15}],
        98: [function (t, e, r) {
            "use strict";
            r.__esModule = !0, r.default = function (t) {
                var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [];
                return e[n.BLEND_MODES.NORMAL] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.BLEND_MODES.ADD] = [t.ONE, t.DST_ALPHA], e[n.BLEND_MODES.MULTIPLY] = [t.DST_COLOR, t.ONE_MINUS_SRC_ALPHA], e[n.BLEND_MODES.SCREEN] = [t.ONE, t.ONE_MINUS_SRC_COLOR], e[n.BLEND_MODES.OVERLAY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.BLEND_MODES.DARKEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.BLEND_MODES.LIGHTEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.BLEND_MODES.COLOR_DODGE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.BLEND_MODES.COLOR_BURN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.BLEND_MODES.HARD_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.BLEND_MODES.SOFT_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.BLEND_MODES.DIFFERENCE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.BLEND_MODES.EXCLUSION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.BLEND_MODES.HUE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.BLEND_MODES.SATURATION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.BLEND_MODES.COLOR] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.BLEND_MODES.LUMINOSITY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.BLEND_MODES.NORMAL_NPM] = [t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.BLEND_MODES.ADD_NPM] = [t.SRC_ALPHA, t.DST_ALPHA, t.ONE, t.DST_ALPHA], e[n.BLEND_MODES.SCREEN_NPM] = [t.SRC_ALPHA, t.ONE_MINUS_SRC_COLOR, t.ONE, t.ONE_MINUS_SRC_COLOR], e
            };
            var n = t("../../../const")
        }, {"../../../const": 46}],
        99: [function (t, e, r) {
            "use strict";
            r.__esModule = !0, r.default = function (t) {
                var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                return e[n.DRAW_MODES.POINTS] = t.POINTS, e[n.DRAW_MODES.LINES] = t.LINES, e[n.DRAW_MODES.LINE_LOOP] = t.LINE_LOOP, e[n.DRAW_MODES.LINE_STRIP] = t.LINE_STRIP, e[n.DRAW_MODES.TRIANGLES] = t.TRIANGLES, e[n.DRAW_MODES.TRIANGLE_STRIP] = t.TRIANGLE_STRIP, e[n.DRAW_MODES.TRIANGLE_FAN] = t.TRIANGLE_FAN, e
            };
            var n = t("../../../const")
        }, {"../../../const": 46}],
        100: [function (t, e, r) {
            "use strict";
            r.__esModule = !0, r.default = function (t) {
                t.getContextAttributes().stencil || console.warn("Provided WebGL context does not have a stencil buffer, masks may not render correctly")
            }
        }, {}],
        101: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n = o(t("./utils/maxRecommendedTextures")), i = o(t("./utils/canUploadSameBuffer"));

            function o(t) {
                return t && t.__esModule ? t : {default: t}
            }

            r.default = {
                TARGET_FPMS: .06,
                MIPMAP_TEXTURES: !0,
                RESOLUTION: 1,
                FILTER_RESOLUTION: 1,
                SPRITE_MAX_TEXTURES: (0, n.default)(32),
                SPRITE_BATCH_SIZE: 4096,
                RETINA_PREFIX: /@([0-9\.]+)x/,
                RENDER_OPTIONS: {
                    view: null,
                    antialias: !1,
                    forceFXAA: !1,
                    autoResize: !1,
                    transparent: !1,
                    backgroundColor: 0,
                    clearBeforeRender: !0,
                    preserveDrawingBuffer: !1,
                    roundPixels: !1,
                    width: 800,
                    height: 600,
                    legacy: !1
                },
                TRANSFORM_MODE: 0,
                GC_MODE: 0,
                GC_MAX_IDLE: 3600,
                GC_MAX_CHECK_COUNT: 600,
                WRAP_MODE: 0,
                SCALE_MODE: 0,
                PRECISION_VERTEX: "highp",
                PRECISION_FRAGMENT: "mediump",
                CAN_UPLOAD_SAME_BUFFER: (0, i.default)()
            }
        }, {"./utils/canUploadSameBuffer": 121, "./utils/maxRecommendedTextures": 126}],
        102: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = function () {
                    function n(t, e) {
                        for (var r = 0; r < e.length; r++) {
                            var n = e[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }

                    return function (t, e, r) {
                        return e && n(t.prototype, e), r && n(t, r), t
                    }
                }(), o = t("../math"), s = t("../utils"), a = t("../const"), u = h(t("../textures/Texture")),
                n = h(t("../display/Container"));

            function h(t) {
                return t && t.__esModule ? t : {default: t}
            }

            var l = new o.Point, c = function (r) {
                function n(t) {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    var e = function (t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, r.call(this));
                    return e._anchor = new o.ObservablePoint(e._onAnchorUpdate, e), e._texture = null, e._width = 0, e._height = 0, e._tint = null, e._tintRGB = null, e.tint = 16777215, e.blendMode = a.BLEND_MODES.NORMAL, e.shader = null, e.cachedTint = 16777215, e.texture = t || u.default.EMPTY, e.vertexData = new Float32Array(8), e.vertexTrimmedData = null, e._transformID = -1, e._textureID = -1, e._transformTrimmedID = -1, e._textureTrimmedID = -1, e.pluginName = "sprite", e
                }

                return function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(n, r), n.prototype._onTextureUpdate = function () {
                    this._textureID = -1, this._textureTrimmedID = -1, this._width && (this.scale.x = (0, s.sign)(this.scale.x) * this._width / this._texture.orig.width), this._height && (this.scale.y = (0, s.sign)(this.scale.y) * this._height / this._texture.orig.height)
                }, n.prototype._onAnchorUpdate = function () {
                    this._transformID = -1, this._transformTrimmedID = -1
                }, n.prototype.calculateVertices = function () {
                    if (this._transformID !== this.transform._worldID || this._textureID !== this._texture._updateID) {
                        this._transformID = this.transform._worldID, this._textureID = this._texture._updateID;
                        var t = this._texture, e = this.transform.worldTransform, r = e.a, n = e.b, i = e.c, o = e.d,
                            s = e.tx, a = e.ty, u = this.vertexData, h = t.trim, l = t.orig, c = this._anchor, d = 0,
                            f = 0, p = 0, v = 0;
                        h ? (d = (f = h.x - c._x * l.width) + h.width, p = (v = h.y - c._y * l.height) + h.height) : (d = (f = -c._x * l.width) + l.width, p = (v = -c._y * l.height) + l.height), u[0] = r * f + i * v + s, u[1] = o * v + n * f + a, u[2] = r * d + i * v + s, u[3] = o * v + n * d + a, u[4] = r * d + i * p + s, u[5] = o * p + n * d + a, u[6] = r * f + i * p + s, u[7] = o * p + n * f + a
                    }
                }, n.prototype.calculateTrimmedVertices = function () {
                    if (this.vertexTrimmedData) {
                        if (this._transformTrimmedID === this.transform._worldID && this._textureTrimmedID === this._texture._updateID) return
                    } else this.vertexTrimmedData = new Float32Array(8);
                    this._transformTrimmedID = this.transform._worldID, this._textureTrimmedID = this._texture._updateID;
                    var t = this._texture, e = this.vertexTrimmedData, r = t.orig, n = this._anchor,
                        i = this.transform.worldTransform, o = i.a, s = i.b, a = i.c, u = i.d, h = i.tx, l = i.ty,
                        c = -n._x * r.width, d = c + r.width, f = -n._y * r.height, p = f + r.height;
                    e[0] = o * c + a * f + h, e[1] = u * f + s * c + l, e[2] = o * d + a * f + h, e[3] = u * f + s * d + l, e[4] = o * d + a * p + h, e[5] = u * p + s * d + l, e[6] = o * c + a * p + h, e[7] = u * p + s * c + l
                }, n.prototype._renderWebGL = function (t) {
                    this.calculateVertices(), t.setObjectRenderer(t.plugins[this.pluginName]), t.plugins[this.pluginName].render(this)
                }, n.prototype._renderCanvas = function (t) {
                    t.plugins[this.pluginName].render(this)
                }, n.prototype._calculateBounds = function () {
                    var t = this._texture.trim, e = this._texture.orig;
                    !t || t.width === e.width && t.height === e.height ? (this.calculateVertices(), this._bounds.addQuad(this.vertexData)) : (this.calculateTrimmedVertices(), this._bounds.addQuad(this.vertexTrimmedData))
                }, n.prototype.getLocalBounds = function (t) {
                    return 0 === this.children.length ? (this._bounds.minX = this._texture.orig.width * -this._anchor._x, this._bounds.minY = this._texture.orig.height * -this._anchor._y, this._bounds.maxX = this._texture.orig.width * (1 - this._anchor._x), this._bounds.maxY = this._texture.orig.height * (1 - this._anchor._y), t || (this._localBoundsRect || (this._localBoundsRect = new o.Rectangle), t = this._localBoundsRect), this._bounds.getRectangle(t)) : r.prototype.getLocalBounds.call(this, t)
                }, n.prototype.containsPoint = function (t) {
                    this.worldTransform.applyInverse(t, l);
                    var e = this._texture.orig.width, r = this._texture.orig.height, n = -e * this.anchor.x, i = 0;
                    return l.x >= n && l.x < n + e && (i = -r * this.anchor.y, l.y >= i && l.y < i + r)
                }, n.prototype.destroy = function (t) {
                    if (r.prototype.destroy.call(this, t), this._anchor = null, "boolean" == typeof t ? t : t && t.texture) {
                        var e = "boolean" == typeof t ? t : t && t.baseTexture;
                        this._texture.destroy(!!e)
                    }
                    this._texture = null, this.shader = null
                }, n.from = function (t) {
                    return new n(u.default.from(t))
                }, n.fromFrame = function (t) {
                    var e = s.TextureCache[t];
                    if (!e) throw new Error('The frameId "' + t + '" does not exist in the texture cache');
                    return new n(e)
                }, n.fromImage = function (t, e, r) {
                    return new n(u.default.fromImage(t, e, r))
                }, i(n, [{
                    key: "width", get: function () {
                        return Math.abs(this.scale.x) * this._texture.orig.width
                    }, set: function (t) {
                        var e = (0, s.sign)(this.scale.x) || 1;
                        this.scale.x = e * t / this._texture.orig.width, this._width = t
                    }
                }, {
                    key: "height", get: function () {
                        return Math.abs(this.scale.y) * this._texture.orig.height
                    }, set: function (t) {
                        var e = (0, s.sign)(this.scale.y) || 1;
                        this.scale.y = e * t / this._texture.orig.height, this._height = t
                    }
                }, {
                    key: "anchor", get: function () {
                        return this._anchor
                    }, set: function (t) {
                        this._anchor.copy(t)
                    }
                }, {
                    key: "tint", get: function () {
                        return this._tint
                    }, set: function (t) {
                        this._tint = t, this._tintRGB = (t >> 16) + (65280 & t) + ((255 & t) << 16)
                    }
                }, {
                    key: "texture", get: function () {
                        return this._texture
                    }, set: function (t) {
                        this._texture !== t && (this._texture = t, this.cachedTint = 16777215, this._textureID = -1, this._textureTrimmedID = -1, t && (t.baseTexture.hasLoaded ? this._onTextureUpdate() : t.once("update", this._onTextureUpdate, this)))
                    }
                }]), n
            }(n.default);
            r.default = c
        }, {"../const": 46, "../display/Container": 48, "../math": 70, "../textures/Texture": 115, "../utils": 124}],
        103: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n = i(t("../../renderers/canvas/CanvasRenderer")), l = t("../../const"), c = t("../../math"),
                d = i(t("./CanvasTinter"));

            function i(t) {
                return t && t.__esModule ? t : {default: t}
            }

            var f = new c.Matrix, o = function () {
                function e(t) {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.renderer = t
                }

                return e.prototype.render = function (t) {
                    var e = t._texture, r = this.renderer, n = e._frame.width, i = e._frame.height,
                        o = t.transform.worldTransform, s = 0, a = 0;
                    if (!(e.orig.width <= 0 || e.orig.height <= 0) && e.baseTexture.source && (r.setBlendMode(t.blendMode), e.valid)) {
                        r.context.globalAlpha = t.worldAlpha;
                        var u = e.baseTexture.scaleMode === l.SCALE_MODES.LINEAR;
                        r.smoothProperty && r.context[r.smoothProperty] !== u && (r.context[r.smoothProperty] = u), e.trim ? (s = e.trim.width / 2 + e.trim.x - t.anchor.x * e.orig.width, a = e.trim.height / 2 + e.trim.y - t.anchor.y * e.orig.height) : (s = (.5 - t.anchor.x) * e.orig.width, a = (.5 - t.anchor.y) * e.orig.height), e.rotate && (o.copy(f), o = f, c.GroupD8.matrixAppendRotationInv(o, e.rotate, s, a), a = s = 0), s -= n / 2, a -= i / 2, r.roundPixels ? (r.context.setTransform(o.a, o.b, o.c, o.d, o.tx * r.resolution | 0, o.ty * r.resolution | 0), s |= 0, a |= 0) : r.context.setTransform(o.a, o.b, o.c, o.d, o.tx * r.resolution, o.ty * r.resolution);
                        var h = e.baseTexture.resolution;
                        16777215 !== t.tint ? (t.cachedTint === t.tint && t.tintedTexture.tintId === t._texture._updateID || (t.cachedTint = t.tint, t.tintedTexture = d.default.getTintedTexture(t, t.tint)), r.context.drawImage(t.tintedTexture, 0, 0, n * h, i * h, s * r.resolution, a * r.resolution, n * r.resolution, i * r.resolution)) : r.context.drawImage(e.baseTexture.source, e._frame.x * h, e._frame.y * h, n * h, i * h, s * r.resolution, a * r.resolution, n * r.resolution, i * r.resolution)
                    }
                }, e.prototype.destroy = function () {
                    this.renderer = null
                }, e
            }();
            r.default = o, n.default.registerPlugin("sprite", o)
        }, {"../../const": 46, "../../math": 70, "../../renderers/canvas/CanvasRenderer": 77, "./CanvasTinter": 104}],
        104: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n, f = t("../../utils"), i = t("../../renderers/canvas/utils/canUseNewCanvasBlendModes");
            var a = {
                getTintedTexture: function (t, e) {
                    var r = t._texture, n = "#" + ("00000" + (0 | (e = a.roundColor(e))).toString(16)).substr(-6);
                    r.tintCache = r.tintCache || {};
                    var i = r.tintCache[n], o = void 0;
                    if (i) {
                        if (i.tintId === r._updateID) return r.tintCache[n];
                        o = r.tintCache[n]
                    } else o = a.canvas || document.createElement("canvas");
                    if (a.tintMethod(r, e, o), o.tintId = r._updateID, a.convertTintToImage) {
                        var s = new Image;
                        s.src = o.toDataURL(), r.tintCache[n] = s
                    } else r.tintCache[n] = o, a.canvas = null;
                    return o
                },
                tintWithMultiply: function (t, e, r) {
                    var n = r.getContext("2d"), i = t._frame.clone(), o = t.baseTexture.resolution;
                    i.x *= o, i.y *= o, i.width *= o, i.height *= o, r.width = Math.ceil(i.width), r.height = Math.ceil(i.height), n.save(), n.fillStyle = "#" + ("00000" + (0 | e).toString(16)).substr(-6), n.fillRect(0, 0, i.width, i.height), n.globalCompositeOperation = "multiply", n.drawImage(t.baseTexture.source, i.x, i.y, i.width, i.height, 0, 0, i.width, i.height), n.globalCompositeOperation = "destination-atop", n.drawImage(t.baseTexture.source, i.x, i.y, i.width, i.height, 0, 0, i.width, i.height), n.restore()
                },
                tintWithOverlay: function (t, e, r) {
                    var n = r.getContext("2d"), i = t._frame.clone(), o = t.baseTexture.resolution;
                    i.x *= o, i.y *= o, i.width *= o, i.height *= o, r.width = Math.ceil(i.width), r.height = Math.ceil(i.height), n.save(), n.globalCompositeOperation = "copy", n.fillStyle = "#" + ("00000" + (0 | e).toString(16)).substr(-6), n.fillRect(0, 0, i.width, i.height), n.globalCompositeOperation = "destination-atop", n.drawImage(t.baseTexture.source, i.x, i.y, i.width, i.height, 0, 0, i.width, i.height), n.restore()
                },
                tintWithPerPixel: function (t, e, r) {
                    var n = r.getContext("2d"), i = t._frame.clone(), o = t.baseTexture.resolution;
                    i.x *= o, i.y *= o, i.width *= o, i.height *= o, r.width = Math.ceil(i.width), r.height = Math.ceil(i.height), n.save(), n.globalCompositeOperation = "copy", n.drawImage(t.baseTexture.source, i.x, i.y, i.width, i.height, 0, 0, i.width, i.height), n.restore();
                    for (var s = (0, f.hex2rgb)(e), a = s[0], u = s[1], h = s[2], l = n.getImageData(0, 0, i.width, i.height), c = l.data, d = 0; d < c.length; d += 4) c[d + 0] *= a, c[d + 1] *= u, c[d + 2] *= h;
                    n.putImageData(l, 0, 0)
                },
                roundColor: function (t) {
                    var e = a.cacheStepsPerColorChannel, r = (0, f.hex2rgb)(t);
                    return r[0] = Math.min(255, r[0] / e * e), r[1] = Math.min(255, r[1] / e * e), r[2] = Math.min(255, r[2] / e * e), (0, f.rgb2hex)(r)
                },
                cacheStepsPerColorChannel: 8,
                convertTintToImage: !1,
                canUseMultiply: (0, ((n = i) && n.__esModule ? n : {default: n}).default)(),
                tintMethod: 0
            };
            a.tintMethod = a.canUseMultiply ? a.tintWithMultiply : a.tintWithPerPixel, r.default = a
        }, {"../../renderers/canvas/utils/canUseNewCanvasBlendModes": 80, "../../utils": 124}],
        105: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n = function () {
                function e(t) {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.vertices = new ArrayBuffer(t), this.float32View = new Float32Array(this.vertices), this.uint32View = new Uint32Array(this.vertices)
                }

                return e.prototype.destroy = function () {
                    this.vertices = null, this.positions = null, this.uvs = null, this.colors = null
                }, e
            }();
            r.default = n
        }, {}],
        106: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n = o(t("../../renderers/webgl/utils/ObjectRenderer")), i = o(t("../../renderers/webgl/WebGLRenderer")),
                s = o(t("../../utils/createIndicesForQuads")), a = o(t("./generateMultiTextureShader")),
                u = o(t("../../renderers/webgl/utils/checkMaxIfStatmentsInShader")), h = o(t("./BatchBuffer")),
                F = o(t("../../settings")), B = t("../../utils"), k = o(t("pixi-gl-core")), j = o(t("bit-twiddle"));

            function o(t) {
                return t && t.__esModule ? t : {default: t}
            }

            var U = 0, X = 0, l = function (i) {
                function o(t) {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, o);
                    var e = function (t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, i.call(this, t));
                    e.vertSize = 5, e.vertByteSize = 4 * e.vertSize, e.size = F.default.SPRITE_BATCH_SIZE, e.buffers = [];
                    for (var r = 1; r <= j.default.nextPow2(e.size); r *= 2) e.buffers.push(new h.default(4 * r * e.vertByteSize));
                    e.indices = (0, s.default)(e.size), e.shader = null, e.currentIndex = 0, e.groups = [];
                    for (var n = 0; n < e.size; n++) e.groups[n] = {
                        textures: [],
                        textureCount: 0,
                        ids: [],
                        size: 0,
                        start: 0,
                        blend: 0
                    };
                    return e.sprites = [], e.vertexBuffers = [], e.vaos = [], e.vaoMax = 2, e.vertexCount = 0, e.renderer.on("prerender", e.onPrerender, e), e
                }

                return function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(o, i), o.prototype.onContextChange = function () {
                    var t = this.renderer.gl;
                    this.renderer.legacy ? this.MAX_TEXTURES = 1 : (this.MAX_TEXTURES = Math.min(t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS), F.default.SPRITE_MAX_TEXTURES), this.MAX_TEXTURES = (0, u.default)(this.MAX_TEXTURES, t)), this.shader = (0, a.default)(t, this.MAX_TEXTURES), this.indexBuffer = k.default.GLBuffer.createIndexBuffer(t, this.indices, t.STATIC_DRAW), this.renderer.bindVao(null);
                    for (var e = this.shader.attributes, r = 0; r < this.vaoMax; r++) {
                        var n = this.vertexBuffers[r] = k.default.GLBuffer.createVertexBuffer(t, null, t.STREAM_DRAW),
                            i = this.renderer.createVao().addIndex(this.indexBuffer).addAttribute(n, e.aVertexPosition, t.FLOAT, !1, this.vertByteSize, 0).addAttribute(n, e.aTextureCoord, t.UNSIGNED_SHORT, !0, this.vertByteSize, 8).addAttribute(n, e.aColor, t.UNSIGNED_BYTE, !0, this.vertByteSize, 12);
                        e.aTextureId && i.addAttribute(n, e.aTextureId, t.FLOAT, !1, this.vertByteSize, 16), this.vaos[r] = i
                    }
                    this.vao = this.vaos[0], this.currentBlendMode = 99999, this.boundTextures = new Array(this.MAX_TEXTURES)
                }, o.prototype.onPrerender = function () {
                    this.vertexCount = 0
                }, o.prototype.render = function (t) {
                    this.currentIndex >= this.size && this.flush(), t._texture._uvs && (this.sprites[this.currentIndex++] = t)
                }, o.prototype.flush = function () {
                    if (0 !== this.currentIndex) {
                        var t = this.renderer.gl, e = this.MAX_TEXTURES, r = j.default.nextPow2(this.currentIndex),
                            n = j.default.log2(r), i = this.buffers[n], o = this.sprites, s = this.groups,
                            a = i.float32View, u = i.uint32View, h = this.boundTextures,
                            l = this.renderer.boundTextures, c = this.renderer.textureGC.count, d = 0, f = void 0,
                            p = void 0, v = 1, g = 0, y = s[0], m = void 0, _ = void 0,
                            b = B.premultiplyBlendMode[o[0]._texture.baseTexture.premultipliedAlpha ? 1 : 0][o[0].blendMode];
                        y.textureCount = 0, y.start = 0, y.blend = b, U++;
                        var x = void 0;
                        for (x = 0; x < e; ++x) h[x] = l[x], h[x]._virtalBoundId = x;
                        for (x = 0; x < this.currentIndex; ++x) {
                            var T = o[x];
                            f = T._texture.baseTexture;
                            var w = B.premultiplyBlendMode[Number(f.premultipliedAlpha)][T.blendMode];
                            if (b !== w && (b = w, p = null, g = e, U++), p !== f && (p = f)._enabled !== U) {
                                if (g === e && (U++, y.size = x - y.start, g = 0, (y = s[v++]).blend = b, y.textureCount = 0, y.start = x), f.touched = c, -1 === f._virtalBoundId) for (var E = 0; E < e; ++E) {
                                    var S = (E + X) % e, O = h[S];
                                    if (O._enabled !== U) {
                                        X++, O._virtalBoundId = -1, h[f._virtalBoundId = S] = f;
                                        break
                                    }
                                }
                                f._enabled = U, y.textureCount++, y.ids[g] = f._virtalBoundId, y.textures[g++] = f
                            }
                            if (m = T.vertexData, _ = T._texture._uvs.uvsUint32, this.renderer.roundPixels) {
                                var P = this.renderer.resolution;
                                a[d] = (m[0] * P | 0) / P, a[d + 1] = (m[1] * P | 0) / P, a[d + 5] = (m[2] * P | 0) / P, a[d + 6] = (m[3] * P | 0) / P, a[d + 10] = (m[4] * P | 0) / P, a[d + 11] = (m[5] * P | 0) / P, a[d + 15] = (m[6] * P | 0) / P, a[d + 16] = (m[7] * P | 0) / P
                            } else a[d] = m[0], a[d + 1] = m[1], a[d + 5] = m[2], a[d + 6] = m[3], a[d + 10] = m[4], a[d + 11] = m[5], a[d + 15] = m[6], a[d + 16] = m[7];
                            u[d + 2] = _[0], u[d + 7] = _[1], u[d + 12] = _[2], u[d + 17] = _[3];
                            var M = Math.min(T.worldAlpha, 1),
                                C = M < 1 && f.premultipliedAlpha ? (0, B.premultiplyTint)(T._tintRGB, M) : T._tintRGB + (255 * M << 24);
                            u[d + 3] = u[d + 8] = u[d + 13] = u[d + 18] = C, a[d + 4] = a[d + 9] = a[d + 14] = a[d + 19] = f._virtalBoundId, d += 20
                        }
                        if (y.size = x - y.start, F.default.CAN_UPLOAD_SAME_BUFFER) this.vertexBuffers[this.vertexCount].upload(i.vertices, 0, !0); else {
                            if (this.vaoMax <= this.vertexCount) {
                                this.vaoMax++;
                                var R = this.shader.attributes,
                                    A = this.vertexBuffers[this.vertexCount] = k.default.GLBuffer.createVertexBuffer(t, null, t.STREAM_DRAW),
                                    I = this.renderer.createVao().addIndex(this.indexBuffer).addAttribute(A, R.aVertexPosition, t.FLOAT, !1, this.vertByteSize, 0).addAttribute(A, R.aTextureCoord, t.UNSIGNED_SHORT, !0, this.vertByteSize, 8).addAttribute(A, R.aColor, t.UNSIGNED_BYTE, !0, this.vertByteSize, 12);
                                R.aTextureId && I.addAttribute(A, R.aTextureId, t.FLOAT, !1, this.vertByteSize, 16), this.vaos[this.vertexCount] = I
                            }
                            this.renderer.bindVao(this.vaos[this.vertexCount]), this.vertexBuffers[this.vertexCount].upload(i.vertices, 0, !1), this.vertexCount++
                        }
                        for (x = 0; x < e; ++x) l[x]._virtalBoundId = -1;
                        for (x = 0; x < v; ++x) {
                            for (var D = s[x], L = D.textureCount, N = 0; N < L; N++) p = D.textures[N], l[D.ids[N]] !== p && this.renderer.bindTexture(p, D.ids[N], !0), p._virtalBoundId = -1;
                            this.renderer.state.setBlendMode(D.blend), t.drawElements(t.TRIANGLES, 6 * D.size, t.UNSIGNED_SHORT, 6 * D.start * 2)
                        }
                        this.currentIndex = 0
                    }
                }, o.prototype.start = function () {
                    this.renderer.bindShader(this.shader), F.default.CAN_UPLOAD_SAME_BUFFER && (this.renderer.bindVao(this.vaos[this.vertexCount]), this.vertexBuffers[this.vertexCount].bind())
                }, o.prototype.stop = function () {
                    this.flush()
                }, o.prototype.destroy = function () {
                    for (var t = 0; t < this.vaoMax; t++) this.vertexBuffers[t] && this.vertexBuffers[t].destroy(), this.vaos[t] && this.vaos[t].destroy();
                    this.indexBuffer && this.indexBuffer.destroy(), this.renderer.off("prerender", this.onPrerender, this), i.prototype.destroy.call(this), this.shader && (this.shader.destroy(), this.shader = null), this.vertexBuffers = null, this.vaos = null, this.indexBuffer = null, this.indices = null, this.sprites = null;
                    for (var e = 0; e < this.buffers.length; ++e) this.buffers[e].destroy()
                }, o
            }(n.default);
            r.default = l, i.default.registerPlugin("sprite", l)
        }, {
            "../../renderers/webgl/WebGLRenderer": 84,
            "../../renderers/webgl/utils/ObjectRenderer": 94,
            "../../renderers/webgl/utils/checkMaxIfStatmentsInShader": 97,
            "../../settings": 101,
            "../../utils": 124,
            "../../utils/createIndicesForQuads": 122,
            "./BatchBuffer": 105,
            "./generateMultiTextureShader": 107,
            "bit-twiddle": 1,
            "pixi-gl-core": 15
        }],
        107: [function (t, e, r) {
            "use strict";
            r.__esModule = !0, r.default = function (t, e) {
                var r = a;
                r = (r = r.replace(/%count%/gi, e)).replace(/%forloop%/gi, function (t) {
                    var e = "";
                    e += "\n", e += "\n";
                    for (var r = 0; r < t; r++) 0 < r && (e += "\nelse "), r < t - 1 && (e += "if(textureId == " + r + ".0)"), e += "\n{", e += "\n\tcolor = texture2D(uSamplers[" + r + "], vTextureCoord);", e += "\n}";
                    return e += "\n", e += "\n"
                }(e));
                for (var n = new s.default(t, "precision highp float;\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\nattribute float aTextureId;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\n\nvoid main(void){\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vTextureId = aTextureId;\n    vColor = aColor;\n}\n", r), i = [], o = 0; o < e; o++) i[o] = o;
                return n.bind(), n.uniforms.uSamplers = i, n
            };
            var n, i = t("../../Shader"), s = (n = i) && n.__esModule ? n : {default: n};
            t("path");
            var a = ["varying vec2 vTextureCoord;", "varying vec4 vColor;", "varying float vTextureId;", "uniform sampler2D uSamplers[%count%];", "void main(void){", "vec4 color;", "float textureId = floor(vTextureId+0.5);", "%forloop%", "gl_FragColor = color * vColor;", "}"].join("\n")
        }, {"../../Shader": 44, path: 8}],
        108: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n = function () {
                    function n(t, e) {
                        for (var r = 0; r < e.length; r++) {
                            var n = e[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }

                    return function (t, e, r) {
                        return e && n(t.prototype, e), r && n(t, r), t
                    }
                }(), i = o(t("../sprites/Sprite")), a = o(t("../textures/Texture")), u = t("../math"), h = t("../utils"),
                v = t("../const"), l = o(t("../settings")), c = o(t("./TextStyle")), y = o(t("./TextMetrics")),
                d = o(t("../utils/trimCanvas"));

            function o(t) {
                return t && t.__esModule ? t : {default: t}
            }

            var f = {texture: !0, children: !1, baseTexture: !0}, s = function (o) {
                function s(t, e, r) {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, s), (r = r || document.createElement("canvas")).width = 3, r.height = 3;
                    var n = a.default.fromCanvas(r, l.default.SCALE_MODE, "text");
                    n.orig = new u.Rectangle, n.trim = new u.Rectangle;
                    var i = function (t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, o.call(this, n));
                    return a.default.addToCache(i._texture, i._texture.baseTexture.textureCacheIds[0]), i.canvas = r, i.context = i.canvas.getContext("2d"), i.resolution = l.default.RESOLUTION, i._text = null, i._style = null, i._styleListener = null, i._font = "", i.text = t, i.style = e, i.localStyleID = -1, i
                }

                return function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(s, o), s.prototype.updateText = function (t) {
                    var e = this._style;
                    if (this.localStyleID !== e.styleID && (this.dirty = !0, this.localStyleID = e.styleID), this.dirty || !t) {
                        this._font = this._style.toFontString();
                        var r = this.context,
                            n = y.default.measureText(this._text, this._style, this._style.wordWrap, this.canvas),
                            i = n.width, o = n.height, s = n.lines, a = n.lineHeight, u = n.lineWidths,
                            h = n.maxLineWidth, l = n.fontProperties;
                        this.canvas.width = Math.ceil((i + 2 * e.padding) * this.resolution), this.canvas.height = Math.ceil((o + 2 * e.padding) * this.resolution), r.scale(this.resolution, this.resolution), r.clearRect(0, 0, this.canvas.width, this.canvas.height), r.font = this._font, r.strokeStyle = e.stroke, r.lineWidth = e.strokeThickness, r.textBaseline = e.textBaseline, r.lineJoin = e.lineJoin, r.miterLimit = e.miterLimit;
                        var c = void 0, d = void 0;
                        if (e.dropShadow) {
                            r.fillStyle = e.dropShadowColor, r.globalAlpha = e.dropShadowAlpha, r.shadowBlur = e.dropShadowBlur, 0 < e.dropShadowBlur && (r.shadowColor = e.dropShadowColor);
                            for (var f = Math.cos(e.dropShadowAngle) * e.dropShadowDistance, p = Math.sin(e.dropShadowAngle) * e.dropShadowDistance, v = 0; v < s.length; v++) c = e.strokeThickness / 2, d = e.strokeThickness / 2 + v * a + l.ascent, "right" === e.align ? c += h - u[v] : "center" === e.align && (c += (h - u[v]) / 2), e.fill && (this.drawLetterSpacing(s[v], c + f + e.padding, d + p + e.padding), e.stroke && e.strokeThickness && (r.strokeStyle = e.dropShadowColor, this.drawLetterSpacing(s[v], c + f + e.padding, d + p + e.padding, !0), r.strokeStyle = e.stroke))
                        }
                        r.shadowBlur = 0, r.globalAlpha = 1, r.fillStyle = this._generateFillStyle(e, s);
                        for (var g = 0; g < s.length; g++) c = e.strokeThickness / 2, d = e.strokeThickness / 2 + g * a + l.ascent, "right" === e.align ? c += h - u[g] : "center" === e.align && (c += (h - u[g]) / 2), e.stroke && e.strokeThickness && this.drawLetterSpacing(s[g], c + e.padding, d + e.padding, !0), e.fill && this.drawLetterSpacing(s[g], c + e.padding, d + e.padding);
                        this.updateTexture()
                    }
                }, s.prototype.drawLetterSpacing = function (t, e, r) {
                    var n = 3 < arguments.length && void 0 !== arguments[3] && arguments[3],
                        i = this._style.letterSpacing;
                    if (0 !== i) for (var o = String.prototype.split.call(t, ""), s = e, a = 0, u = ""; a < t.length;) u = o[a++], n ? this.context.strokeText(u, s, r) : this.context.fillText(u, s, r), s += this.context.measureText(u).width + i; else n ? this.context.strokeText(t, e, r) : this.context.fillText(t, e, r)
                }, s.prototype.updateTexture = function () {
                    var t = this.canvas;
                    if (this._style.trim) {
                        var e = (0, d.default)(t);
                        t.width = e.width, t.height = e.height, this.context.putImageData(e.data, 0, 0)
                    }
                    var r = this._texture, n = this._style, i = n.trim ? 0 : n.padding, o = r.baseTexture;
                    o.hasLoaded = !0, o.resolution = this.resolution, o.realWidth = t.width, o.realHeight = t.height, o.width = t.width / this.resolution, o.height = t.height / this.resolution, r.trim.width = r._frame.width = t.width / this.resolution, r.trim.height = r._frame.height = t.height / this.resolution, r.trim.x = -i, r.trim.y = -i, r.orig.width = r._frame.width - 2 * i, r.orig.height = r._frame.height - 2 * i, this._onTextureUpdate(), o.emit("update", o), this.dirty = !1
                }, s.prototype.renderWebGL = function (t) {
                    this.resolution !== t.resolution && (this.resolution = t.resolution, this.dirty = !0), this.updateText(!0), o.prototype.renderWebGL.call(this, t)
                }, s.prototype._renderCanvas = function (t) {
                    this.resolution !== t.resolution && (this.resolution = t.resolution, this.dirty = !0), this.updateText(!0), o.prototype._renderCanvas.call(this, t)
                }, s.prototype.getLocalBounds = function (t) {
                    return this.updateText(!0), o.prototype.getLocalBounds.call(this, t)
                }, s.prototype._calculateBounds = function () {
                    this.updateText(!0), this.calculateVertices(), this._bounds.addQuad(this.vertexData)
                }, s.prototype._onStyleChange = function () {
                    this.dirty = !0
                }, s.prototype._generateFillStyle = function (t, e) {
                    if (!Array.isArray(t.fill)) return t.fill;
                    if (navigator.isCocoonJS) return t.fill[0];
                    var r = void 0, n = void 0, i = void 0, o = void 0, s = this.canvas.width / this.resolution,
                        a = this.canvas.height / this.resolution, u = t.fill.slice(), h = t.fillGradientStops.slice();
                    if (!h.length) for (var l = u.length + 1, c = 1; c < l; ++c) h.push(c / l);
                    if (u.unshift(t.fill[0]), h.unshift(0), u.push(t.fill[t.fill.length - 1]), h.push(1), t.fillGradientType === v.TEXT_GRADIENT.LINEAR_VERTICAL) {
                        r = this.context.createLinearGradient(s / 2, 0, s / 2, a), n = (u.length + 1) * e.length;
                        for (var d = i = 0; d < e.length; d++) {
                            i += 1;
                            for (var f = 0; f < u.length; f++) o = "number" == typeof h[f] ? h[f] / e.length + d / e.length : i / n, r.addColorStop(o, u[f]), i++
                        }
                    } else {
                        r = this.context.createLinearGradient(0, a / 2, s, a / 2), n = u.length + 1, i = 1;
                        for (var p = 0; p < u.length; p++) o = "number" == typeof h[p] ? h[p] : i / n, r.addColorStop(o, u[p]), i++
                    }
                    return r
                }, s.prototype.destroy = function (t) {
                    "boolean" == typeof t && (t = {children: t}), t = Object.assign({}, f, t), o.prototype.destroy.call(this, t), this.context = null, this.canvas = null, this._style = null
                }, n(s, [{
                    key: "width", get: function () {
                        return this.updateText(!0), Math.abs(this.scale.x) * this._texture.orig.width
                    }, set: function (t) {
                        this.updateText(!0);
                        var e = (0, h.sign)(this.scale.x) || 1;
                        this.scale.x = e * t / this._texture.orig.width, this._width = t
                    }
                }, {
                    key: "height", get: function () {
                        return this.updateText(!0), Math.abs(this.scale.y) * this._texture.orig.height
                    }, set: function (t) {
                        this.updateText(!0);
                        var e = (0, h.sign)(this.scale.y) || 1;
                        this.scale.y = e * t / this._texture.orig.height, this._height = t
                    }
                }, {
                    key: "style", get: function () {
                        return this._style
                    }, set: function (t) {
                        (t = t || {}) instanceof c.default ? this._style = t : this._style = new c.default(t), this.localStyleID = -1, this.dirty = !0
                    }
                }, {
                    key: "text", get: function () {
                        return this._text
                    }, set: function (t) {
                        t = String("" === t || null == t ? " " : t), this._text !== t && (this._text = t, this.dirty = !0)
                    }
                }]), s
            }(i.default);
            r.default = s
        }, {
            "../const": 46,
            "../math": 70,
            "../settings": 101,
            "../sprites/Sprite": 102,
            "../textures/Texture": 115,
            "../utils": 124,
            "../utils/trimCanvas": 129,
            "./TextMetrics": 109,
            "./TextStyle": 110
        }],
        109: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n = function () {
                function y(t, e, r, n, i, o, s, a, u) {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, y), this.text = t, this.style = e, this.width = r, this.height = n, this.lines = i, this.lineWidths = o, this.lineHeight = s, this.maxLineWidth = a, this.fontProperties = u
                }

                return y.measureText = function (t, e, r) {
                    var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : y._canvas;
                    r = r || e.wordWrap;
                    var i = e.toFontString(), o = y.measureFont(i), s = n.getContext("2d");
                    s.font = i;
                    for (var a = (r ? y.wordWrap(t, e, n) : t).split(/(?:\r\n|\r|\n)/), u = new Array(a.length), h = 0, l = 0; l < a.length; l++) {
                        var c = s.measureText(a[l]).width + (a[l].length - 1) * e.letterSpacing;
                        u[l] = c, h = Math.max(h, c)
                    }
                    var d = h + e.strokeThickness;
                    e.dropShadow && (d += e.dropShadowDistance);
                    var f = e.lineHeight || o.fontSize + e.strokeThickness,
                        p = Math.max(f, o.fontSize + e.strokeThickness) + (a.length - 1) * (f + e.leading);
                    return e.dropShadow && (p += e.dropShadowDistance), new y(t, e, d, p, a, u, f + e.leading, h, o)
                }, y.wordWrap = function (t, e) {
                    for (var r = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : y._canvas).getContext("2d"), n = "", i = t.split("\n"), o = e.wordWrapWidth, s = {}, a = 0; a < i.length; a++) {
                        for (var u = o, h = i[a].split(" "), l = 0; l < h.length; l++) {
                            var c = r.measureText(h[l]).width;
                            if (e.breakWords && o < c) for (var d = h[l].split(""), f = 0; f < d.length; f++) {
                                var p = d[f], v = s[p];
                                void 0 === v && (v = r.measureText(p).width, s[p] = v), u < v ? (n += "\n" + p, u = o - v) : (0 === f && (n += " "), n += p, u -= v)
                            } else {
                                var g = c + r.measureText(" ").width;
                                0 === l || u < g ? (0 < l && (n += "\n"), n += h[l], u = o - c) : (u -= g, n += " " + h[l])
                            }
                        }
                        a < i.length - 1 && (n += "\n")
                    }
                    return n
                }, y.measureFont = function (t) {
                    if (y._fonts[t]) return y._fonts[t];
                    var e = {}, r = y._canvas, n = y._context;
                    n.font = t;
                    var i = Math.ceil(n.measureText("|MÉq").width), o = Math.ceil(n.measureText("M").width), s = 2 * o;
                    o = 1.4 * o | 0, r.width = i, r.height = s, n.fillStyle = "#f00", n.fillRect(0, 0, i, s), n.font = t, n.textBaseline = "alphabetic", n.fillStyle = "#000", n.fillText("|MÉq", 0, o);
                    var a = n.getImageData(0, 0, i, s).data, u = a.length, h = 4 * i, l = 0, c = 0, d = !1;
                    for (l = 0; l < o; ++l) {
                        for (var f = 0; f < h; f += 4) if (255 !== a[c + f]) {
                            d = !0;
                            break
                        }
                        if (d) break;
                        c += h
                    }
                    for (e.ascent = o - l, c = u - h, d = !1, l = s; o < l; --l) {
                        for (var p = 0; p < h; p += 4) if (255 !== a[c + p]) {
                            d = !0;
                            break
                        }
                        if (d) break;
                        c -= h
                    }
                    return e.descent = l - o, e.fontSize = e.ascent + e.descent, y._fonts[t] = e
                }, y
            }();
            r.default = n;
            var i = document.createElement("canvas");
            i.width = i.height = 10, n._canvas = i, n._context = i.getContext("2d"), n._fonts = {}
        }, {}],
        110: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n = function () {
                function n(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function (t, e, r) {
                    return e && n(t.prototype, e), r && n(t, r), t
                }
            }(), i = t("../const"), o = t("../utils");
            var s = {
                align: "left",
                breakWords: !1,
                dropShadow: !1,
                dropShadowAlpha: 1,
                dropShadowAngle: Math.PI / 6,
                dropShadowBlur: 0,
                dropShadowColor: "black",
                dropShadowDistance: 5,
                fill: "black",
                fillGradientType: i.TEXT_GRADIENT.LINEAR_VERTICAL,
                fillGradientStops: [],
                fontFamily: "Arial",
                fontSize: 26,
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: "normal",
                letterSpacing: 0,
                lineHeight: 0,
                lineJoin: "miter",
                miterLimit: 10,
                padding: 0,
                stroke: "black",
                strokeThickness: 0,
                textBaseline: "alphabetic",
                trim: !1,
                wordWrap: !1,
                wordWrapWidth: 100,
                leading: 0
            }, a = function () {
                function r(t) {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, r), this.styleID = 0, Object.assign(this, s, t)
                }

                return r.prototype.clone = function () {
                    var t = {};
                    for (var e in s) t[e] = this[e];
                    return new r(t)
                }, r.prototype.reset = function () {
                    Object.assign(this, s)
                }, r.prototype.toFontString = function () {
                    var t = "number" == typeof this.fontSize ? this.fontSize + "px" : this.fontSize,
                        e = this.fontFamily;
                    Array.isArray(this.fontFamily) || (e = this.fontFamily.split(","));
                    for (var r = e.length - 1; 0 <= r; r--) {
                        var n = e[r].trim();
                        /([\"\'])[^\'\"]+\1/.test(n) || (n = '"' + n + '"'), e[r] = n
                    }
                    return this.fontStyle + " " + this.fontVariant + " " + this.fontWeight + " " + t + " " + e.join(",")
                }, n(r, [{
                    key: "align", get: function () {
                        return this._align
                    }, set: function (t) {
                        this._align !== t && (this._align = t, this.styleID++)
                    }
                }, {
                    key: "breakWords", get: function () {
                        return this._breakWords
                    }, set: function (t) {
                        this._breakWords !== t && (this._breakWords = t, this.styleID++)
                    }
                }, {
                    key: "dropShadow", get: function () {
                        return this._dropShadow
                    }, set: function (t) {
                        this._dropShadow !== t && (this._dropShadow = t, this.styleID++)
                    }
                }, {
                    key: "dropShadowAlpha", get: function () {
                        return this._dropShadowAlpha
                    }, set: function (t) {
                        this._dropShadowAlpha !== t && (this._dropShadowAlpha = t, this.styleID++)
                    }
                }, {
                    key: "dropShadowAngle", get: function () {
                        return this._dropShadowAngle
                    }, set: function (t) {
                        this._dropShadowAngle !== t && (this._dropShadowAngle = t, this.styleID++)
                    }
                }, {
                    key: "dropShadowBlur", get: function () {
                        return this._dropShadowBlur
                    }, set: function (t) {
                        this._dropShadowBlur !== t && (this._dropShadowBlur = t, this.styleID++)
                    }
                }, {
                    key: "dropShadowColor", get: function () {
                        return this._dropShadowColor
                    }, set: function (t) {
                        var e = h(t);
                        this._dropShadowColor !== e && (this._dropShadowColor = e, this.styleID++)
                    }
                }, {
                    key: "dropShadowDistance", get: function () {
                        return this._dropShadowDistance
                    }, set: function (t) {
                        this._dropShadowDistance !== t && (this._dropShadowDistance = t, this.styleID++)
                    }
                }, {
                    key: "fill", get: function () {
                        return this._fill
                    }, set: function (t) {
                        var e = h(t);
                        this._fill !== e && (this._fill = e, this.styleID++)
                    }
                }, {
                    key: "fillGradientType", get: function () {
                        return this._fillGradientType
                    }, set: function (t) {
                        this._fillGradientType !== t && (this._fillGradientType = t, this.styleID++)
                    }
                }, {
                    key: "fillGradientStops", get: function () {
                        return this._fillGradientStops
                    }, set: function (t) {
                        (function (t, e) {
                            if (!Array.isArray(t) || !Array.isArray(e)) return !1;
                            if (t.length !== e.length) return !1;
                            for (var r = 0; r < t.length; ++r) if (t[r] !== e[r]) return !1;
                            return !0
                        })(this._fillGradientStops, t) || (this._fillGradientStops = t, this.styleID++)
                    }
                }, {
                    key: "fontFamily", get: function () {
                        return this._fontFamily
                    }, set: function (t) {
                        this.fontFamily !== t && (this._fontFamily = t, this.styleID++)
                    }
                }, {
                    key: "fontSize", get: function () {
                        return this._fontSize
                    }, set: function (t) {
                        this._fontSize !== t && (this._fontSize = t, this.styleID++)
                    }
                }, {
                    key: "fontStyle", get: function () {
                        return this._fontStyle
                    }, set: function (t) {
                        this._fontStyle !== t && (this._fontStyle = t, this.styleID++)
                    }
                }, {
                    key: "fontVariant", get: function () {
                        return this._fontVariant
                    }, set: function (t) {
                        this._fontVariant !== t && (this._fontVariant = t, this.styleID++)
                    }
                }, {
                    key: "fontWeight", get: function () {
                        return this._fontWeight
                    }, set: function (t) {
                        this._fontWeight !== t && (this._fontWeight = t, this.styleID++)
                    }
                }, {
                    key: "letterSpacing", get: function () {
                        return this._letterSpacing
                    }, set: function (t) {
                        this._letterSpacing !== t && (this._letterSpacing = t, this.styleID++)
                    }
                }, {
                    key: "lineHeight", get: function () {
                        return this._lineHeight
                    }, set: function (t) {
                        this._lineHeight !== t && (this._lineHeight = t, this.styleID++)
                    }
                }, {
                    key: "leading", get: function () {
                        return this._leading
                    }, set: function (t) {
                        this._leading !== t && (this._leading = t, this.styleID++)
                    }
                }, {
                    key: "lineJoin", get: function () {
                        return this._lineJoin
                    }, set: function (t) {
                        this._lineJoin !== t && (this._lineJoin = t, this.styleID++)
                    }
                }, {
                    key: "miterLimit", get: function () {
                        return this._miterLimit
                    }, set: function (t) {
                        this._miterLimit !== t && (this._miterLimit = t, this.styleID++)
                    }
                }, {
                    key: "padding", get: function () {
                        return this._padding
                    }, set: function (t) {
                        this._padding !== t && (this._padding = t, this.styleID++)
                    }
                }, {
                    key: "stroke", get: function () {
                        return this._stroke
                    }, set: function (t) {
                        var e = h(t);
                        this._stroke !== e && (this._stroke = e, this.styleID++)
                    }
                }, {
                    key: "strokeThickness", get: function () {
                        return this._strokeThickness
                    }, set: function (t) {
                        this._strokeThickness !== t && (this._strokeThickness = t, this.styleID++)
                    }
                }, {
                    key: "textBaseline", get: function () {
                        return this._textBaseline
                    }, set: function (t) {
                        this._textBaseline !== t && (this._textBaseline = t, this.styleID++)
                    }
                }, {
                    key: "trim", get: function () {
                        return this._trim
                    }, set: function (t) {
                        this._trim !== t && (this._trim = t, this.styleID++)
                    }
                }, {
                    key: "wordWrap", get: function () {
                        return this._wordWrap
                    }, set: function (t) {
                        this._wordWrap !== t && (this._wordWrap = t, this.styleID++)
                    }
                }, {
                    key: "wordWrapWidth", get: function () {
                        return this._wordWrapWidth
                    }, set: function (t) {
                        this._wordWrapWidth !== t && (this._wordWrapWidth = t, this.styleID++)
                    }
                }]), r
            }();

            function u(t) {
                return "number" == typeof t ? (0, o.hex2string)(t) : ("string" == typeof t && 0 === t.indexOf("0x") && (t = t.replace("0x", "#")), t)
            }

            function h(t) {
                if (Array.isArray(t)) {
                    for (var e = 0; e < t.length; ++e) t[e] = u(t[e]);
                    return t
                }
                return u(t)
            }

            r.default = a
        }, {"../const": 46, "../utils": 124}],
        111: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n = i(t("./BaseTexture")), a = i(t("../settings"));

            function i(t) {
                return t && t.__esModule ? t : {default: t}
            }

            var o = function (o) {
                function s() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 100,
                        e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 100, r = arguments[2],
                        n = arguments[3];
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, s);
                    var i = function (t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, o.call(this, null, r));
                    return i.resolution = n || a.default.RESOLUTION, i.width = t, i.height = e, i.realWidth = i.width * i.resolution, i.realHeight = i.height * i.resolution, i.scaleMode = void 0 !== r ? r : a.default.SCALE_MODE, i.hasLoaded = !0, i._glRenderTargets = {}, i._canvasRenderTarget = null, i.valid = !1, i
                }

                return function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(s, o), s.prototype.resize = function (t, e) {
                    t === this.width && e === this.height || (this.valid = 0 < t && 0 < e, this.width = t, this.height = e, this.realWidth = this.width * this.resolution, this.realHeight = this.height * this.resolution, this.valid && this.emit("update", this))
                }, s.prototype.destroy = function () {
                    o.prototype.destroy.call(this, !0), this.renderer = null
                }, s
            }(n.default);
            r.default = o
        }, {"../settings": 101, "./BaseTexture": 112}],
        112: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var a = t("../utils"), o = i(t("../settings")), n = i(t("eventemitter3")),
                u = i(t("../utils/determineCrossOrigin")), h = i(t("bit-twiddle"));

            function i(t) {
                return t && t.__esModule ? t : {default: t}
            }

            var s = function (i) {
                function s(t, e, r) {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, s);
                    var n = function (t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, i.call(this));
                    return n.uid = (0, a.uid)(), n.touched = 0, n.resolution = r || o.default.RESOLUTION, n.width = 100, n.height = 100, n.realWidth = 100, n.realHeight = 100, n.scaleMode = void 0 !== e ? e : o.default.SCALE_MODE, n.hasLoaded = !1, n.isLoading = !1, n.source = null, n.origSource = null, n.imageType = null, n.sourceScale = 1, n.premultipliedAlpha = !0, n.imageUrl = null, n.isPowerOfTwo = !1, n.mipmap = o.default.MIPMAP_TEXTURES, n.wrapMode = o.default.WRAP_MODE, n._glTextures = {}, n._enabled = 0, n._virtalBoundId = -1, n._destroyed = !1, n.textureCacheIds = [], t && n.loadSource(t), n
                }

                return function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(s, i), s.prototype.update = function () {
                    "svg" !== this.imageType && (this.realWidth = this.source.naturalWidth || this.source.videoWidth || this.source.width, this.realHeight = this.source.naturalHeight || this.source.videoHeight || this.source.height, this._updateDimensions()), this.emit("update", this)
                }, s.prototype._updateDimensions = function () {
                    this.width = this.realWidth / this.resolution, this.height = this.realHeight / this.resolution, this.isPowerOfTwo = h.default.isPow2(this.realWidth) && h.default.isPow2(this.realHeight)
                }, s.prototype.loadSource = function (t) {
                    var e = this.isLoading;
                    this.hasLoaded = !1, this.isLoading = !1, e && this.source && (this.source.onload = null, this.source.onerror = null);
                    var r = !this.source;
                    if (((this.source = t).src && t.complete || t.getContext) && t.width && t.height) this._updateImageType(), "svg" === this.imageType ? this._loadSvgSource() : this._sourceLoaded(), r && this.emit("loaded", this); else if (!t.getContext) {
                        this.isLoading = !0;
                        var n = this;
                        if (t.onload = function () {
                            n._updateImageType(), t.onload = null, t.onerror = null, n.isLoading && (n.isLoading = !1, n._sourceLoaded(), "svg" !== n.imageType ? n.emit("loaded", n) : n._loadSvgSource())
                        }, t.onerror = function () {
                            t.onload = null, t.onerror = null, n.isLoading && (n.isLoading = !1, n.emit("error", n))
                        }, t.complete && t.src) {
                            if (t.onload = null, t.onerror = null, "svg" === n.imageType) return void n._loadSvgSource();
                            this.isLoading = !1, t.width && t.height ? (this._sourceLoaded(), e && this.emit("loaded", this)) : e && this.emit("error", this)
                        }
                    }
                }, s.prototype._updateImageType = function () {
                    if (this.imageUrl) {
                        var t = (0, a.decomposeDataUri)(this.imageUrl), e = void 0;
                        if (t && "image" === t.mediaType) {
                            var r = t.subType.split("+")[0];
                            if (!(e = (0, a.getUrlFileExtension)("." + r))) throw new Error("Invalid image type in data URI.")
                        } else (e = (0, a.getUrlFileExtension)(this.imageUrl)) || (e = "png");
                        this.imageType = e
                    }
                }, s.prototype._loadSvgSource = function () {
                    if ("svg" === this.imageType) {
                        var t = (0, a.decomposeDataUri)(this.imageUrl);
                        t ? this._loadSvgSourceUsingDataUri(t) : this._loadSvgSourceUsingXhr()
                    }
                }, s.prototype._loadSvgSourceUsingDataUri = function (t) {
                    var e = void 0;
                    if ("base64" === t.encoding) {
                        if (!atob) throw new Error("Your browser doesn't support base64 conversions.");
                        e = atob(t.data)
                    } else e = t.data;
                    this._loadSvgSourceUsingString(e)
                }, s.prototype._loadSvgSourceUsingXhr = function () {
                    var t = this, e = new XMLHttpRequest;
                    e.onload = function () {
                        if (e.readyState !== e.DONE || 200 !== e.status) throw new Error("Failed to load SVG using XHR.");
                        t._loadSvgSourceUsingString(e.response)
                    }, e.onerror = function () {
                        return t.emit("error", t)
                    }, e.open("GET", this.imageUrl, !0), e.send()
                }, s.prototype._loadSvgSourceUsingString = function (t) {
                    var e = (0, a.getSvgSize)(t), r = e.width, n = e.height;
                    if (!r || !n) throw new Error("The SVG image must have width and height defined (in pixels), canvas API needs them.");
                    this.realWidth = Math.round(r * this.sourceScale), this.realHeight = Math.round(n * this.sourceScale), this._updateDimensions();
                    var i = document.createElement("canvas");
                    i.width = this.realWidth, i.height = this.realHeight, i._pixiId = "canvas_" + (0, a.uid)(), i.getContext("2d").drawImage(this.source, 0, 0, r, n, 0, 0, this.realWidth, this.realHeight), this.origSource = this.source, this.source = i, s.addToCache(this, i._pixiId), this.isLoading = !1, this._sourceLoaded(), this.emit("loaded", this)
                }, s.prototype._sourceLoaded = function () {
                    this.hasLoaded = !0, this.update()
                }, s.prototype.destroy = function () {
                    this.imageUrl && (delete a.TextureCache[this.imageUrl], this.imageUrl = null, navigator.isCocoonJS || (this.source.src = "")), this.source = null, this.dispose(), s.removeFromCache(this), this.textureCacheIds = null, this._destroyed = !0
                }, s.prototype.dispose = function () {
                    this.emit("dispose", this)
                }, s.prototype.updateSourceImage = function (t) {
                    this.source.src = t, this.loadSource(this.source)
                }, s.fromImage = function (t, e, r, n) {
                    var i = a.BaseTextureCache[t];
                    if (!i) {
                        var o = new Image;
                        void 0 === e && 0 !== t.indexOf("data:") ? o.crossOrigin = (0, u.default)(t) : e && (o.crossOrigin = "string" == typeof e ? e : "anonymous"), (i = new s(o, r)).imageUrl = t, n && (i.sourceScale = n), i.resolution = (0, a.getResolutionOfUrl)(t), o.src = t, s.addToCache(i, t)
                    }
                    return i
                }, s.fromCanvas = function (t, e) {
                    var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "canvas";
                    t._pixiId || (t._pixiId = r + "_" + (0, a.uid)());
                    var n = a.BaseTextureCache[t._pixiId];
                    return n || (n = new s(t, e), s.addToCache(n, t._pixiId)), n
                }, s.from = function (t, e, r) {
                    if ("string" == typeof t) return s.fromImage(t, void 0, e, r);
                    if (t instanceof HTMLImageElement) {
                        var n = t.src, i = a.BaseTextureCache[n];
                        return i || ((i = new s(t, e)).imageUrl = n, r && (i.sourceScale = r), i.resolution = (0, a.getResolutionOfUrl)(n), s.addToCache(i, n)), i
                    }
                    return t instanceof HTMLCanvasElement ? s.fromCanvas(t, e) : t
                }, s.addToCache = function (t, e) {
                    e && (-1 === t.textureCacheIds.indexOf(e) && t.textureCacheIds.push(e), a.BaseTextureCache[e] && console.warn("BaseTexture added to the cache with an id [" + e + "] that already had an entry"), a.BaseTextureCache[e] = t)
                }, s.removeFromCache = function (t) {
                    if ("string" == typeof t) {
                        var e = a.BaseTextureCache[t];
                        if (e) {
                            var r = e.textureCacheIds.indexOf(t);
                            return -1 < r && e.textureCacheIds.splice(r, 1), delete a.BaseTextureCache[t], e
                        }
                    } else if (t && t.textureCacheIds) {
                        for (var n = 0; n < t.textureCacheIds.length; ++n) delete a.BaseTextureCache[t.textureCacheIds[n]];
                        return t.textureCacheIds.length = 0, t
                    }
                    return null
                }, s
            }(n.default);
            r.default = s
        }, {
            "../settings": 101,
            "../utils": 124,
            "../utils/determineCrossOrigin": 123,
            "bit-twiddle": 1,
            eventemitter3: 3
        }],
        113: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var l = n(t("./BaseRenderTexture"));

            function n(t) {
                return t && t.__esModule ? t : {default: t}
            }

            var i = function (u) {
                function h(t, e) {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, h);
                    var r = null;
                    if (!(t instanceof l.default)) {
                        var n = arguments[1], i = arguments[2], o = arguments[3], s = arguments[4];
                        console.warn("Please use RenderTexture.create(" + n + ", " + i + ") instead of the ctor directly."), r = arguments[0], e = null, t = new l.default(n, i, o, s)
                    }
                    var a = function (t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, u.call(this, t, e));
                    return a.legacyRenderer = r, a.valid = !0, a._updateUvs(), a
                }

                return function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(h, u), h.prototype.resize = function (t, e, r) {
                    this.valid = 0 < t && 0 < e, this._frame.width = this.orig.width = t, this._frame.height = this.orig.height = e, r || this.baseTexture.resize(t, e), this._updateUvs()
                }, h.create = function (t, e, r, n) {
                    return new h(new l.default(t, e, r, n))
                }, h
            }(n(t("./Texture")).default);
            r.default = i
        }, {"./BaseRenderTexture": 111, "./Texture": 115}],
        114: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n = function () {
                function n(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function (t, e, r) {
                    return e && n(t.prototype, e), r && n(t, r), t
                }
            }(), h = t("../"), i = t("../utils");
            var o = function () {
                function u(t, e) {
                    var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, u), this.baseTexture = t, this.textures = {}, this.data = e, this.resolution = this._updateResolution(r || this.baseTexture.imageUrl), this._frames = this.data.frames, this._frameKeys = Object.keys(this._frames), this._batchIndex = 0, this._callback = null
                }

                return n(u, null, [{
                    key: "BATCH_SIZE", get: function () {
                        return 1e3
                    }
                }]), u.prototype._updateResolution = function (t) {
                    var e = this.data.meta.scale, r = (0, i.getResolutionOfUrl)(t, null);
                    return null === r && (r = void 0 !== e ? parseFloat(e) : 1), 1 !== r && (this.baseTexture.resolution = r, this.baseTexture.update()), r
                }, u.prototype.parse = function (t) {
                    this._batchIndex = 0, this._callback = t, this._frameKeys.length <= u.BATCH_SIZE ? (this._processFrames(0), this._parseComplete()) : this._nextBatch()
                }, u.prototype._processFrames = function (t) {
                    for (var e = t, r = u.BATCH_SIZE; e - t < r && e < this._frameKeys.length;) {
                        var n = this._frameKeys[e], i = this._frames[n].frame;
                        if (i) {
                            var o = null, s = null,
                                a = new h.Rectangle(0, 0, this._frames[n].sourceSize.w / this.resolution, this._frames[n].sourceSize.h / this.resolution);
                            o = this._frames[n].rotated ? new h.Rectangle(i.x / this.resolution, i.y / this.resolution, i.h / this.resolution, i.w / this.resolution) : new h.Rectangle(i.x / this.resolution, i.y / this.resolution, i.w / this.resolution, i.h / this.resolution), this._frames[n].trimmed && (s = new h.Rectangle(this._frames[n].spriteSourceSize.x / this.resolution, this._frames[n].spriteSourceSize.y / this.resolution, i.w / this.resolution, i.h / this.resolution)), this.textures[n] = new h.Texture(this.baseTexture, o, a, s, this._frames[n].rotated ? 2 : 0), h.Texture.addToCache(this.textures[n], n)
                        }
                        e++
                    }
                }, u.prototype._parseComplete = function () {
                    var t = this._callback;
                    this._callback = null, this._batchIndex = 0, t.call(this, this.textures)
                }, u.prototype._nextBatch = function () {
                    var t = this;
                    this._processFrames(this._batchIndex * u.BATCH_SIZE), this._batchIndex++, setTimeout(function () {
                        t._batchIndex * u.BATCH_SIZE < t._frameKeys.length ? t._nextBatch() : t._parseComplete()
                    }, 0)
                }, u.prototype.destroy = function () {
                    var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                    for (var e in this.textures) this.textures[e].destroy();
                    this._frames = null, this._frameKeys = null, this.data = null, this.textures = null, t && this.baseTexture.destroy(), this.baseTexture = null
                }, u
            }();
            r.default = o
        }, {"../": 65, "../utils": 124}],
        115: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n = function () {
                    function n(t, e) {
                        for (var r = 0; r < e.length; r++) {
                            var n = e[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }

                    return function (t, e, r) {
                        return e && n(t.prototype, e), r && n(t, r), t
                    }
                }(), o = a(t("./BaseTexture")), i = a(t("./VideoBaseTexture")), u = a(t("./TextureUvs")),
                s = a(t("eventemitter3")), h = t("../math"), l = t("../utils"), c = a(t("../settings"));

            function a(t) {
                return t && t.__esModule ? t : {default: t}
            }

            var d = function (s) {
                function a(t, e, r, n, i) {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, a);
                    var o = function (t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, s.call(this));
                    if (o.noFrame = !1, e || (o.noFrame = !0, e = new h.Rectangle(0, 0, 1, 1)), t instanceof a && (t = t.baseTexture), o.baseTexture = t, o._frame = e, o.trim = n, o.valid = !1, o.requiresUpdate = !1, o._uvs = null, o.orig = r || e, o._rotate = Number(i || 0), !0 === i) o._rotate = 2; else if (o._rotate % 2 != 0) throw new Error("attempt to use diamond-shaped UVs. If you are sure, set rotation manually");
                    return t.hasLoaded ? (o.noFrame && (e = new h.Rectangle(0, 0, t.width, t.height), t.on("update", o.onBaseTextureUpdated, o)), o.frame = e) : t.once("loaded", o.onBaseTextureLoaded, o), o._updateID = 0, o.transform = null, o.textureCacheIds = [], o
                }

                return function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(a, s), a.prototype.update = function () {
                    this.baseTexture.update()
                }, a.prototype.onBaseTextureLoaded = function (t) {
                    this._updateID++, this.noFrame ? this.frame = new h.Rectangle(0, 0, t.width, t.height) : this.frame = this._frame, this.baseTexture.on("update", this.onBaseTextureUpdated, this), this.emit("update", this)
                }, a.prototype.onBaseTextureUpdated = function (t) {
                    this._updateID++, this._frame.width = t.width, this._frame.height = t.height, this.emit("update", this)
                }, a.prototype.destroy = function (t) {
                    this.baseTexture && (t && (l.TextureCache[this.baseTexture.imageUrl] && a.removeFromCache(this.baseTexture.imageUrl), this.baseTexture.destroy()), this.baseTexture.off("update", this.onBaseTextureUpdated, this), this.baseTexture.off("loaded", this.onBaseTextureLoaded, this), this.baseTexture = null), this._frame = null, this._uvs = null, this.trim = null, this.orig = null, this.valid = !1, a.removeFromCache(this), this.textureCacheIds = null
                }, a.prototype.clone = function () {
                    return new a(this.baseTexture, this.frame, this.orig, this.trim, this.rotate)
                }, a.prototype._updateUvs = function () {
                    this._uvs || (this._uvs = new u.default), this._uvs.set(this._frame, this.baseTexture, this.rotate), this._updateID++
                }, a.fromImage = function (t, e, r, n) {
                    var i = l.TextureCache[t];
                    return i || (i = new a(o.default.fromImage(t, e, r, n)), a.addToCache(i, t)), i
                }, a.fromFrame = function (t) {
                    var e = l.TextureCache[t];
                    if (!e) throw new Error('The frameId "' + t + '" does not exist in the texture cache');
                    return e
                }, a.fromCanvas = function (t, e) {
                    var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "canvas";
                    return new a(o.default.fromCanvas(t, e, r))
                }, a.fromVideo = function (t, e) {
                    return "string" == typeof t ? a.fromVideoUrl(t, e) : new a(i.default.fromVideo(t, e))
                }, a.fromVideoUrl = function (t, e) {
                    return new a(i.default.fromUrl(t, e))
                }, a.from = function (t) {
                    if ("string" == typeof t) {
                        var e = l.TextureCache[t];
                        return e || (null !== t.match(/\.(mp4|webm|ogg|h264|avi|mov)$/) ? a.fromVideoUrl(t) : a.fromImage(t))
                    }
                    return t instanceof HTMLImageElement ? new a(o.default.from(t)) : t instanceof HTMLCanvasElement ? a.fromCanvas(t, c.default.SCALE_MODE, "HTMLCanvasElement") : t instanceof HTMLVideoElement ? a.fromVideo(t) : t instanceof o.default ? new a(t) : t
                }, a.fromLoader = function (t, e, r) {
                    var n = new o.default(t, void 0, (0, l.getResolutionOfUrl)(e)), i = new a(n);
                    return n.imageUrl = e, r || (r = e), o.default.addToCache(i.baseTexture, r), a.addToCache(i, r), r !== e && (o.default.addToCache(i.baseTexture, e), a.addToCache(i, e)), i
                }, a.addToCache = function (t, e) {
                    e && (-1 === t.textureCacheIds.indexOf(e) && t.textureCacheIds.push(e), l.TextureCache[e] && console.warn("Texture added to the cache with an id [" + e + "] that already had an entry"), l.TextureCache[e] = t)
                }, a.removeFromCache = function (t) {
                    if ("string" == typeof t) {
                        var e = l.TextureCache[t];
                        if (e) {
                            var r = e.textureCacheIds.indexOf(t);
                            return -1 < r && e.textureCacheIds.splice(r, 1), delete l.TextureCache[t], e
                        }
                    } else if (t && t.textureCacheIds) {
                        for (var n = 0; n < t.textureCacheIds.length; ++n) l.TextureCache[t.textureCacheIds[n]] === t && delete l.TextureCache[t.textureCacheIds[n]];
                        return t.textureCacheIds.length = 0, t
                    }
                    return null
                }, n(a, [{
                    key: "frame", get: function () {
                        return this._frame
                    }, set: function (t) {
                        if (this._frame = t, this.noFrame = !1, t.x + t.width > this.baseTexture.width || t.y + t.height > this.baseTexture.height) throw new Error("Texture Error: frame does not fit inside the base Texture dimensions: X: " + t.x + " + " + t.width + " = " + (t.x + t.width) + " > " + this.baseTexture.width + " Y: " + t.y + " + " + t.height + " = " + (t.y + t.height) + " > " + this.baseTexture.height);
                        this.valid = t && t.width && t.height && this.baseTexture.hasLoaded, this.trim || this.rotate || (this.orig = t), this.valid && this._updateUvs()
                    }
                }, {
                    key: "rotate", get: function () {
                        return this._rotate
                    }, set: function (t) {
                        this._rotate = t, this.valid && this._updateUvs()
                    }
                }, {
                    key: "width", get: function () {
                        return this.orig.width
                    }
                }, {
                    key: "height", get: function () {
                        return this.orig.height
                    }
                }]), a
            }(s.default);

            function f(t) {
                t.destroy = function () {
                }, t.on = function () {
                }, t.once = function () {
                }, t.emit = function () {
                }
            }

            (r.default = d).EMPTY = new d(new o.default), f(d.EMPTY), f(d.EMPTY.baseTexture), d.WHITE = function () {
                var t = document.createElement("canvas");
                t.width = 10, t.height = 10;
                var e = t.getContext("2d");
                return e.fillStyle = "white", e.fillRect(0, 0, 10, 10), new d(new o.default(t))
            }(), f(d.WHITE), f(d.WHITE.baseTexture)
        }, {
            "../math": 70,
            "../settings": 101,
            "../utils": 124,
            "./BaseTexture": 112,
            "./TextureUvs": 116,
            "./VideoBaseTexture": 117,
            eventemitter3: 3
        }],
        116: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n, i = t("../math/GroupD8"), h = (n = i) && n.__esModule ? n : {default: n};
            var o = function () {
                function t() {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.x0 = 0, this.y0 = 0, this.x1 = 1, this.y1 = 0, this.x2 = 1, this.y2 = 1, this.x3 = 0, this.y3 = 1, this.uvsUint32 = new Uint32Array(4)
                }

                return t.prototype.set = function (t, e, r) {
                    var n = e.width, i = e.height;
                    if (r) {
                        var o = t.width / 2 / n, s = t.height / 2 / i, a = t.x / n + o, u = t.y / i + s;
                        r = h.default.add(r, h.default.NW), this.x0 = a + o * h.default.uX(r), this.y0 = u + s * h.default.uY(r), r = h.default.add(r, 2), this.x1 = a + o * h.default.uX(r), this.y1 = u + s * h.default.uY(r), r = h.default.add(r, 2), this.x2 = a + o * h.default.uX(r), this.y2 = u + s * h.default.uY(r), r = h.default.add(r, 2), this.x3 = a + o * h.default.uX(r), this.y3 = u + s * h.default.uY(r)
                    } else this.x0 = t.x / n, this.y0 = t.y / i, this.x1 = (t.x + t.width) / n, this.y1 = t.y / i, this.x2 = (t.x + t.width) / n, this.y2 = (t.y + t.height) / i, this.x3 = t.x / n, this.y3 = (t.y + t.height) / i;
                    this.uvsUint32[0] = (65535 * this.y0 & 65535) << 16 | 65535 * this.x0 & 65535, this.uvsUint32[1] = (65535 * this.y1 & 65535) << 16 | 65535 * this.x1 & 65535, this.uvsUint32[2] = (65535 * this.y2 & 65535) << 16 | 65535 * this.x2 & 65535, this.uvsUint32[3] = (65535 * this.y3 & 65535) << 16 | 65535 * this.x3 & 65535
                }, t
            }();
            r.default = o
        }, {"../math/GroupD8": 66}],
        117: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n, o = function () {
                    function n(t, e) {
                        for (var r = 0; r < e.length; r++) {
                            var n = e[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }

                    return function (t, e, r) {
                        return e && n(t.prototype, e), r && n(t, r), t
                    }
                }(), i = t("./BaseTexture"), s = (n = i) && n.__esModule ? n : {default: n}, a = t("../utils"),
                u = t("../ticker"), h = t("../const");
            var l = function (n) {
                function i(t, e) {
                    if (function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, i), !t) throw new Error("No video source element specified.");
                    (t.readyState === t.HAVE_ENOUGH_DATA || t.readyState === t.HAVE_FUTURE_DATA) && t.width && t.height && (t.complete = !0);
                    var r = function (t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, n.call(this, t, e));
                    return r.width = t.videoWidth, r.height = t.videoHeight, r._autoUpdate = !0, r._isAutoUpdating = !1, r.autoPlay = !0, r.update = r.update.bind(r), r._onCanPlay = r._onCanPlay.bind(r), t.addEventListener("play", r._onPlayStart.bind(r)), t.addEventListener("pause", r._onPlayStop.bind(r)), r.hasLoaded = !1, r.__loaded = !1, r._isSourceReady() ? r._onCanPlay() : (t.addEventListener("canplay", r._onCanPlay), t.addEventListener("canplaythrough", r._onCanPlay)), r
                }

                return function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(i, n), i.prototype._isSourcePlaying = function () {
                    var t = this.source;
                    return 0 < t.currentTime && !1 === t.paused && !1 === t.ended && 2 < t.readyState
                }, i.prototype._isSourceReady = function () {
                    return 3 === this.source.readyState || 4 === this.source.readyState
                }, i.prototype._onPlayStart = function () {
                    this.hasLoaded || this._onCanPlay(), !this._isAutoUpdating && this.autoUpdate && (u.shared.add(this.update, this, h.UPDATE_PRIORITY.HIGH), this._isAutoUpdating = !0)
                }, i.prototype._onPlayStop = function () {
                    this._isAutoUpdating && (u.shared.remove(this.update, this), this._isAutoUpdating = !1)
                }, i.prototype._onCanPlay = function () {
                    this.hasLoaded = !0, this.source && (this.source.removeEventListener("canplay", this._onCanPlay), this.source.removeEventListener("canplaythrough", this._onCanPlay), this.width = this.source.videoWidth, this.height = this.source.videoHeight, this.__loaded || (this.__loaded = !0, this.emit("loaded", this)), this._isSourcePlaying() ? this._onPlayStart() : this.autoPlay && this.source.play())
                }, i.prototype.destroy = function () {
                    this._isAutoUpdating && u.shared.remove(this.update, this), this.source && this.source._pixiId && (s.default.removeFromCache(this.source._pixiId), delete this.source._pixiId), n.prototype.destroy.call(this)
                }, i.fromVideo = function (t, e) {
                    t._pixiId || (t._pixiId = "video_" + (0, a.uid)());
                    var r = a.BaseTextureCache[t._pixiId];
                    return r || (r = new i(t, e), s.default.addToCache(r, t._pixiId)), r
                }, i.fromUrl = function (t, e) {
                    var r = document.createElement("video");
                    if (r.setAttribute("webkit-playsinline", ""), r.setAttribute("playsinline", ""), Array.isArray(t)) for (var n = 0; n < t.length; ++n) r.appendChild(c(t[n].src || t[n], t[n].mime)); else r.appendChild(c(t.src || t, t.mime));
                    return r.load(), i.fromVideo(r, e)
                }, o(i, [{
                    key: "autoUpdate", get: function () {
                        return this._autoUpdate
                    }, set: function (t) {
                        t !== this._autoUpdate && (this._autoUpdate = t, !this._autoUpdate && this._isAutoUpdating ? (u.shared.remove(this.update, this), this._isAutoUpdating = !1) : this._autoUpdate && !this._isAutoUpdating && (u.shared.add(this.update, this, h.UPDATE_PRIORITY.HIGH), this._isAutoUpdating = !0))
                    }
                }]), i
            }(s.default);

            function c(t, e) {
                e || (e = "video/" + t.substr(t.lastIndexOf(".") + 1));
                var r = document.createElement("source");
                return r.src = t, r.type = e, r
            }

            (r.default = l).fromUrls = l.fromUrl
        }, {"../const": 46, "../ticker": 120, "../utils": 124, "./BaseTexture": 112}],
        118: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n = function () {
                function n(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function (t, e, r) {
                    return e && n(t.prototype, e), r && n(t, r), t
                }
            }(), i = a(t("../settings")), o = t("../const"), s = a(t("./TickerListener"));

            function a(t) {
                return t && t.__esModule ? t : {default: t}
            }

            var u = function () {
                function t() {
                    var e = this;
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this._head = new s.default(null, null, 1 / 0), this._requestId = null, this._maxElapsedMS = 100, this.autoStart = !1, this.deltaTime = 1, this.elapsedMS = 1 / i.default.TARGET_FPMS, this.lastTime = -1, this.speed = 1, this.started = !1, this._tick = function (t) {
                        e._requestId = null, e.started && (e.update(t), e.started && null === e._requestId && e._head.next && (e._requestId = requestAnimationFrame(e._tick)))
                    }
                }

                return t.prototype._requestIfNeeded = function () {
                    null === this._requestId && this._head.next && (this.lastTime = performance.now(), this._requestId = requestAnimationFrame(this._tick))
                }, t.prototype._cancelIfNeeded = function () {
                    null !== this._requestId && (cancelAnimationFrame(this._requestId), this._requestId = null)
                }, t.prototype._startIfPossible = function () {
                    this.started ? this._requestIfNeeded() : this.autoStart && this.start()
                }, t.prototype.add = function (t, e) {
                    var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : o.UPDATE_PRIORITY.NORMAL;
                    return this._addListener(new s.default(t, e, r))
                }, t.prototype.addOnce = function (t, e) {
                    var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : o.UPDATE_PRIORITY.NORMAL;
                    return this._addListener(new s.default(t, e, r, !0))
                }, t.prototype._addListener = function (t) {
                    var e = this._head.next, r = this._head;
                    if (e) {
                        for (; e;) {
                            if (t.priority > e.priority) {
                                t.connect(r);
                                break
                            }
                            e = (r = e).next
                        }
                        t.previous || t.connect(r)
                    } else t.connect(r);
                    return this._startIfPossible(), this
                }, t.prototype.remove = function (t, e) {
                    for (var r = this._head.next; r;) r = r.match(t, e) ? r.destroy() : r.next;
                    return this._head.next || this._cancelIfNeeded(), this
                }, t.prototype.start = function () {
                    this.started || (this.started = !0, this._requestIfNeeded())
                }, t.prototype.stop = function () {
                    this.started && (this.started = !1, this._cancelIfNeeded())
                }, t.prototype.destroy = function () {
                    this.stop();
                    for (var t = this._head.next; t;) t = t.destroy(!0);
                    this._head.destroy(), this._head = null
                }, t.prototype.update = function () {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : performance.now(),
                        e = void 0;
                    if (t > this.lastTime) {
                        (e = this.elapsedMS = t - this.lastTime) > this._maxElapsedMS && (e = this._maxElapsedMS), this.deltaTime = e * i.default.TARGET_FPMS * this.speed;
                        for (var r = this._head, n = r.next; n;) n = n.emit(this.deltaTime);
                        r.next || this._cancelIfNeeded()
                    } else this.deltaTime = this.elapsedMS = 0;
                    this.lastTime = t
                }, n(t, [{
                    key: "FPS", get: function () {
                        return 1e3 / this.elapsedMS
                    }
                }, {
                    key: "minFPS", get: function () {
                        return 1e3 / this._maxElapsedMS
                    }, set: function (t) {
                        var e = Math.min(Math.max(0, t) / 1e3, i.default.TARGET_FPMS);
                        this._maxElapsedMS = 1 / e
                    }
                }]), t
            }();
            r.default = u
        }, {"../const": 46, "../settings": 101, "./TickerListener": 119}],
        119: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n = function () {
                function i(t) {
                    var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
                        r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0,
                        n = 3 < arguments.length && void 0 !== arguments[3] && arguments[3];
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, i), this.fn = t, this.context = e, this.priority = r, this.once = n, this.next = null, this.previous = null, this._destroyed = !1
                }

                return i.prototype.match = function (t, e) {
                    return e = e || null, this.fn === t && this.context === e
                }, i.prototype.emit = function (t) {
                    this.fn && (this.context ? this.fn.call(this.context, t) : this.fn(t));
                    var e = this.next;
                    return this.once && this.destroy(!0), this._destroyed && (this.next = null), e
                }, i.prototype.connect = function (t) {
                    (this.previous = t).next && (t.next.previous = this), this.next = t.next, t.next = this
                }, i.prototype.destroy = function () {
                    var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                    this._destroyed = !0, this.fn = null, this.context = null, this.previous && (this.previous.next = this.next), this.next && (this.next.previous = this.previous);
                    var e = this.previous;
                    return this.next = t ? null : e, this.previous = null, e
                }, i
            }();
            r.default = n
        }, {}],
        120: [function (t, e, r) {
            "use strict";
            r.__esModule = !0, r.Ticker = r.shared = void 0;
            var n, i = t("./Ticker"), o = (n = i) && n.__esModule ? n : {default: n};
            var s = new o.default;
            s.autoStart = !0, s.destroy = function () {
            }, r.shared = s, r.Ticker = o.default
        }, {"./Ticker": 118}],
        121: [function (t, e, r) {
            "use strict";
            r.__esModule = !0, r.default = function () {
                return !(navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform))
            }
        }, {}],
        122: [function (t, e, r) {
            "use strict";
            r.__esModule = !0, r.default = function (t) {
                for (var e = 6 * t, r = new Uint16Array(e), n = 0, i = 0; n < e; n += 6, i += 4) r[n + 0] = i + 0, r[n + 1] = i + 1, r[n + 2] = i + 2, r[n + 3] = i + 0, r[n + 4] = i + 2, r[n + 5] = i + 3;
                return r
            }
        }, {}],
        123: [function (t, e, r) {
            "use strict";
            r.__esModule = !0, r.default = function (t) {
                var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : window.location;
                if (0 === t.indexOf("data:")) return "";
                e = e || window.location, s || (s = document.createElement("a"));
                s.href = t;
                var r = !(t = o.default.parse(s.href)).port && "" === e.port || t.port === e.port;
                if (t.hostname !== e.hostname || !r || t.protocol !== e.protocol) return "anonymous";
                return ""
            };
            var n, i = t("url"), o = (n = i) && n.__esModule ? n : {default: n};
            var s = void 0
        }, {url: 38}],
        124: [function (t, e, r) {
            "use strict";
            r.__esModule = !0, r.premultiplyBlendMode = r.BaseTextureCache = r.TextureCache = r.mixins = r.pluginTarget = r.EventEmitter = r.removeItems = r.isMobile = void 0, r.uid = function () {
                return ++f
            }, r.hex2rgb = function (t, e) {
                return (e = e || [])[0] = (t >> 16 & 255) / 255, e[1] = (t >> 8 & 255) / 255, e[2] = (255 & t) / 255, e
            }, r.hex2string = function (t) {
                return t = t.toString(16), "#" + (t = "000000".substr(0, 6 - t.length) + t)
            }, r.rgb2hex = function (t) {
                return (255 * t[0] << 16) + (255 * t[1] << 8) + (255 * t[2] | 0)
            }, r.getResolutionOfUrl = function (t, e) {
                var r = i.default.RETINA_PREFIX.exec(t);
                if (r) return parseFloat(r[1]);
                return void 0 !== e ? e : 1
            }, r.decomposeDataUri = function (t) {
                var e = n.DATA_URI.exec(t);
                if (e) return {
                    mediaType: e[1] ? e[1].toLowerCase() : void 0,
                    subType: e[2] ? e[2].toLowerCase() : void 0,
                    encoding: e[3] ? e[3].toLowerCase() : void 0,
                    data: e[4]
                };
                return
            }, r.getUrlFileExtension = function (t) {
                var e = n.URL_FILE_EXTENSION.exec(t);
                if (e) return e[1].toLowerCase();
                return
            }, r.getSvgSize = function (t) {
                var e = n.SVG_SIZE.exec(t), r = {};
                e && (r[e[1]] = Math.round(parseFloat(e[3])), r[e[5]] = Math.round(parseFloat(e[7])));
                return r
            }, r.skipHello = function () {
                p = !0
            }, r.sayHello = function (t) {
                if (p) return;
                if (-1 < navigator.userAgent.toLowerCase().indexOf("chrome")) {
                    var e = ["\n %c %c %c PixiJS " + n.VERSION + " - ✰ " + t + " ✰  %c  %c  http://www.pixijs.com/  %c %c ♥%c♥%c♥ \n\n", "background: #ff66a5; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff66a5; background: #030307; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "background: #ffc3dc; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;"];
                    window.console.log.apply(console, e)
                } else window.console && window.console.log("PixiJS " + n.VERSION + " - " + t + " - http://www.pixijs.com/");
                p = !0
            }, r.isWebGLSupported = function () {
                var t = {stencil: !0, failIfMajorPerformanceCaveat: !0};
                try {
                    if (!window.WebGLRenderingContext) return !1;
                    var e = document.createElement("canvas"),
                        r = e.getContext("webgl", t) || e.getContext("experimental-webgl", t),
                        n = !(!r || !r.getContextAttributes().stencil);
                    if (r) {
                        var i = r.getExtension("WEBGL_lose_context");
                        i && i.loseContext()
                    }
                    return r = null, n
                } catch (t) {
                    return !1
                }
            }, r.sign = function (t) {
                return 0 === t ? 0 : t < 0 ? -1 : 1
            }, r.destroyTextureCache = function () {
                var t = void 0;
                for (t in v) v[t].destroy();
                for (t in g) g[t].destroy()
            }, r.clearTextureCache = function () {
                var t = void 0;
                for (t in v) delete v[t];
                for (t in g) delete g[t]
            }, r.correctBlendMode = function (t, e) {
                return y[e ? 1 : 0][t]
            }, r.premultiplyTint = function (t, e) {
                if (1 === e) return (255 * e << 24) + t;
                if (0 === e) return 0;
                var r = t >> 16 & 255, n = t >> 8 & 255, i = 255 & t;
                return (255 * e << 24) + ((r = r * e + .5 | 0) << 16) + ((n = n * e + .5 | 0) << 8) + (i = i * e + .5 | 0)
            }, r.premultiplyRgba = function (t, e, r, n) {
                r = r || new Float32Array(4), n || void 0 === n ? (r[0] = t[0] * e, r[1] = t[1] * e, r[2] = t[2] * e) : (r[0] = t[0], r[1] = t[1], r[2] = t[2]);
                return r[3] = e, r
            }, r.premultiplyTintToRgba = function (t, e, r, n) {
                (r = r || new Float32Array(4))[0] = (t >> 16 & 255) / 255, r[1] = (t >> 8 & 255) / 255, r[2] = (255 & t) / 255, (n || void 0 === n) && (r[0] *= e, r[1] *= e, r[2] *= e);
                return r[3] = e, r
            };
            var n = t("../const"), i = d(t("../settings")), o = d(t("eventemitter3")), s = d(t("./pluginTarget")),
                a = c(t("./mixin")), u = c(t("ismobilejs")), h = d(t("remove-array-items")),
                l = d(t("./mapPremultipliedBlendModes"));

            function c(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e.default = t, e
            }

            function d(t) {
                return t && t.__esModule ? t : {default: t}
            }

            var f = 0, p = !1;
            r.isMobile = u, r.removeItems = h.default, r.EventEmitter = o.default, r.pluginTarget = s.default, r.mixins = a;
            var v = r.TextureCache = Object.create(null), g = r.BaseTextureCache = Object.create(null);
            var y = r.premultiplyBlendMode = (0, l.default)()
        }, {
            "../const": 46,
            "../settings": 101,
            "./mapPremultipliedBlendModes": 125,
            "./mixin": 127,
            "./pluginTarget": 128,
            eventemitter3: 3,
            ismobilejs: 4,
            "remove-array-items": 31
        }],
        125: [function (t, e, r) {
            "use strict";
            r.__esModule = !0, r.default = function () {
                for (var t = [], e = [], r = 0; r < 32; r++) t[r] = r, e[r] = r;
                t[i.BLEND_MODES.NORMAL_NPM] = i.BLEND_MODES.NORMAL, t[i.BLEND_MODES.ADD_NPM] = i.BLEND_MODES.ADD, t[i.BLEND_MODES.SCREEN_NPM] = i.BLEND_MODES.SCREEN, e[i.BLEND_MODES.NORMAL] = i.BLEND_MODES.NORMAL_NPM, e[i.BLEND_MODES.ADD] = i.BLEND_MODES.ADD_NPM, e[i.BLEND_MODES.SCREEN] = i.BLEND_MODES.SCREEN_NPM;
                var n = [];
                return n.push(e), n.push(t), n
            };
            var i = t("../const")
        }, {"../const": 46}],
        126: [function (t, e, r) {
            "use strict";
            r.__esModule = !0, r.default = function (t) {
                if (o.default.tablet || o.default.phone) return 4;
                return t
            };
            var n, i = t("ismobilejs"), o = (n = i) && n.__esModule ? n : {default: n}
        }, {ismobilejs: 4}],
        127: [function (t, e, r) {
            "use strict";

            function n(t, e) {
                if (t && e) for (var r = Object.keys(e), n = 0; n < r.length; ++n) {
                    var i = r[n];
                    Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(e, i))
                }
            }

            r.__esModule = !0, r.mixin = n, r.delayMixin = function (t, e) {
                i.push(t, e)
            }, r.performMixins = function () {
                for (var t = 0; t < i.length; t += 2) n(i[t], i[t + 1]);
                i.length = 0
            };
            var i = []
        }, {}],
        128: [function (t, e, r) {
            "use strict";
            r.__esModule = !0, r.default = {
                mixin: function (t) {
                    var r;
                    (r = t).__plugins = {}, r.registerPlugin = function (t, e) {
                        r.__plugins[t] = e
                    }, r.prototype.initPlugins = function () {
                        for (var t in this.plugins = this.plugins || {}, r.__plugins) this.plugins[t] = new r.__plugins[t](this)
                    }, r.prototype.destroyPlugins = function () {
                        for (var t in this.plugins) this.plugins[t].destroy(), this.plugins[t] = null;
                        this.plugins = null
                    }
                }
            }
        }, {}],
        129: [function (t, e, r) {
            "use strict";
            r.__esModule = !0, r.default = function (t) {
                var e = t.width, r = t.height, n = t.getContext("2d"), i = n.getImageData(0, 0, e, r).data,
                    o = i.length, s = {top: null, left: null, right: null, bottom: null}, a = void 0, u = void 0,
                    h = void 0;
                for (a = 0; a < o; a += 4) 0 !== i[a + 3] && (u = a / 4 % e, h = ~~(a / 4 / e), null === s.top && (s.top = h), null === s.left ? s.left = u : u < s.left && (s.left = u), null === s.right ? s.right = u + 1 : s.right < u && (s.right = u + 1), null === s.bottom ? s.bottom = h : s.bottom < h && (s.bottom = h));
                e = s.right - s.left, r = s.bottom - s.top + 1;
                var l = n.getImageData(s.left, s.top, e, r);
                return {height: r, width: e, data: l}
            }
        }, {}],
        130: [function (t, e, r) {
            "use strict";

            function p(t) {
                var e = (new Error).stack;
                void 0 === e ? console.warn("Deprecation Warning: ", t) : (e = e.split("\n").splice(3).join("\n"), console.groupCollapsed ? (console.groupCollapsed("%cDeprecation Warning: %c%s", "color:#614108;background:#fffbe6", "font-weight:normal;color:#614108;background:#fffbe6", t), console.warn(e), console.groupEnd()) : (console.warn("Deprecation Warning: ", t), console.warn(e)))
            }

            r.__esModule = !0, r.default = function (r) {
                var t = r.mesh, e = r.particles, n = r.extras, i = r.filters, o = r.prepare, s = r.loaders,
                    a = r.interaction;
                Object.defineProperties(r, {
                    SpriteBatch: {
                        get: function () {
                            throw new ReferenceError("SpriteBatch does not exist any more, please use the new ParticleContainer instead.")
                        }
                    }, AssetLoader: {
                        get: function () {
                            throw new ReferenceError("The loader system was overhauled in PixiJS v3, please see the new PIXI.loaders.Loader class.")
                        }
                    }, Stage: {
                        get: function () {
                            return p("You do not need to use a PIXI Stage any more, you can simply render any container."), r.Container
                        }
                    }, DisplayObjectContainer: {
                        get: function () {
                            return p("DisplayObjectContainer has been shortened to Container, please use Container from now on."), r.Container
                        }
                    }, Strip: {
                        get: function () {
                            return p("The Strip class has been renamed to Mesh and moved to mesh.Mesh, please use mesh.Mesh from now on."), t.Mesh
                        }
                    }, Rope: {
                        get: function () {
                            return p("The Rope class has been moved to mesh.Rope, please use mesh.Rope from now on."), t.Rope
                        }
                    }, ParticleContainer: {
                        get: function () {
                            return p("The ParticleContainer class has been moved to particles.ParticleContainer, please use particles.ParticleContainer from now on."), e.ParticleContainer
                        }
                    }, MovieClip: {
                        get: function () {
                            return p("The MovieClip class has been moved to extras.AnimatedSprite, please use extras.AnimatedSprite."), n.AnimatedSprite
                        }
                    }, TilingSprite: {
                        get: function () {
                            return p("The TilingSprite class has been moved to extras.TilingSprite, please use extras.TilingSprite from now on."), n.TilingSprite
                        }
                    }, BitmapText: {
                        get: function () {
                            return p("The BitmapText class has been moved to extras.BitmapText, please use extras.BitmapText from now on."), n.BitmapText
                        }
                    }, blendModes: {
                        get: function () {
                            return p("The blendModes has been moved to BLEND_MODES, please use BLEND_MODES from now on."), r.BLEND_MODES
                        }
                    }, scaleModes: {
                        get: function () {
                            return p("The scaleModes has been moved to SCALE_MODES, please use SCALE_MODES from now on."), r.SCALE_MODES
                        }
                    }, BaseTextureCache: {
                        get: function () {
                            return p("The BaseTextureCache class has been moved to utils.BaseTextureCache, please use utils.BaseTextureCache from now on."), r.utils.BaseTextureCache
                        }
                    }, TextureCache: {
                        get: function () {
                            return p("The TextureCache class has been moved to utils.TextureCache, please use utils.TextureCache from now on."), r.utils.TextureCache
                        }
                    }, math: {
                        get: function () {
                            return p("The math namespace is deprecated, please access members already accessible on PIXI."), r
                        }
                    }, AbstractFilter: {
                        get: function () {
                            return p("AstractFilter has been renamed to Filter, please use PIXI.Filter"), r.Filter
                        }
                    }, TransformManual: {
                        get: function () {
                            return p("TransformManual has been renamed to TransformBase, please update your pixi-spine"), r.TransformBase
                        }
                    }, TARGET_FPMS: {
                        get: function () {
                            return p("PIXI.TARGET_FPMS has been deprecated, please use PIXI.settings.TARGET_FPMS"), r.settings.TARGET_FPMS
                        }, set: function (t) {
                            p("PIXI.TARGET_FPMS has been deprecated, please use PIXI.settings.TARGET_FPMS"), r.settings.TARGET_FPMS = t
                        }
                    }, FILTER_RESOLUTION: {
                        get: function () {
                            return p("PIXI.FILTER_RESOLUTION has been deprecated, please use PIXI.settings.FILTER_RESOLUTION"), r.settings.FILTER_RESOLUTION
                        }, set: function (t) {
                            p("PIXI.FILTER_RESOLUTION has been deprecated, please use PIXI.settings.FILTER_RESOLUTION"), r.settings.FILTER_RESOLUTION = t
                        }
                    }, RESOLUTION: {
                        get: function () {
                            return p("PIXI.RESOLUTION has been deprecated, please use PIXI.settings.RESOLUTION"), r.settings.RESOLUTION
                        }, set: function (t) {
                            p("PIXI.RESOLUTION has been deprecated, please use PIXI.settings.RESOLUTION"), r.settings.RESOLUTION = t
                        }
                    }, MIPMAP_TEXTURES: {
                        get: function () {
                            return p("PIXI.MIPMAP_TEXTURES has been deprecated, please use PIXI.settings.MIPMAP_TEXTURES"), r.settings.MIPMAP_TEXTURES
                        }, set: function (t) {
                            p("PIXI.MIPMAP_TEXTURES has been deprecated, please use PIXI.settings.MIPMAP_TEXTURES"), r.settings.MIPMAP_TEXTURES = t
                        }
                    }, SPRITE_BATCH_SIZE: {
                        get: function () {
                            return p("PIXI.SPRITE_BATCH_SIZE has been deprecated, please use PIXI.settings.SPRITE_BATCH_SIZE"), r.settings.SPRITE_BATCH_SIZE
                        }, set: function (t) {
                            p("PIXI.SPRITE_BATCH_SIZE has been deprecated, please use PIXI.settings.SPRITE_BATCH_SIZE"), r.settings.SPRITE_BATCH_SIZE = t
                        }
                    }, SPRITE_MAX_TEXTURES: {
                        get: function () {
                            return p("PIXI.SPRITE_MAX_TEXTURES has been deprecated, please use PIXI.settings.SPRITE_MAX_TEXTURES"), r.settings.SPRITE_MAX_TEXTURES
                        }, set: function (t) {
                            p("PIXI.SPRITE_MAX_TEXTURES has been deprecated, please use PIXI.settings.SPRITE_MAX_TEXTURES"), r.settings.SPRITE_MAX_TEXTURES = t
                        }
                    }, RETINA_PREFIX: {
                        get: function () {
                            return p("PIXI.RETINA_PREFIX has been deprecated, please use PIXI.settings.RETINA_PREFIX"), r.settings.RETINA_PREFIX
                        }, set: function (t) {
                            p("PIXI.RETINA_PREFIX has been deprecated, please use PIXI.settings.RETINA_PREFIX"), r.settings.RETINA_PREFIX = t
                        }
                    }, DEFAULT_RENDER_OPTIONS: {
                        get: function () {
                            return p("PIXI.DEFAULT_RENDER_OPTIONS has been deprecated, please use PIXI.settings.DEFAULT_RENDER_OPTIONS"), r.settings.RENDER_OPTIONS
                        }
                    }
                });
                for (var u = [{parent: "TRANSFORM_MODE", target: "TRANSFORM_MODE"}, {
                    parent: "GC_MODES",
                    target: "GC_MODE"
                }, {parent: "WRAP_MODES", target: "WRAP_MODE"}, {
                    parent: "SCALE_MODES",
                    target: "SCALE_MODE"
                }, {parent: "PRECISION", target: "PRECISION_FRAGMENT"}], h = function (t) {
                    var e = u[t];
                    Object.defineProperty(r[e.parent], "DEFAULT", {
                        get: function () {
                            return p("PIXI." + e.parent + ".DEFAULT has been deprecated, please use PIXI.settings." + e.target), r.settings[e.target]
                        }, set: function (t) {
                            p("PIXI." + e.parent + ".DEFAULT has been deprecated, please use PIXI.settings." + e.target), r.settings[e.target] = t
                        }
                    })
                }, l = 0; l < u.length; l++) h(l);
                Object.defineProperties(r.settings, {
                    PRECISION: {
                        get: function () {
                            return p("PIXI.settings.PRECISION has been deprecated, please use PIXI.settings.PRECISION_FRAGMENT"), r.settings.PRECISION_FRAGMENT
                        }, set: function (t) {
                            p("PIXI.settings.PRECISION has been deprecated, please use PIXI.settings.PRECISION_FRAGMENT"), r.settings.PRECISION_FRAGMENT = t
                        }
                    }
                }), n.AnimatedSprite && Object.defineProperties(n, {
                    MovieClip: {
                        get: function () {
                            return p("The MovieClip class has been renamed to AnimatedSprite, please use AnimatedSprite from now on."), n.AnimatedSprite
                        }
                    }
                });
                r.DisplayObject.prototype.generateTexture = function (t, e, r) {
                    return p("generateTexture has moved to the renderer, please use renderer.generateTexture(displayObject)"), t.generateTexture(this, e, r)
                }, r.Graphics.prototype.generateTexture = function (t, e) {
                    return p("graphics generate texture has moved to the renderer. Or to render a graphics to a texture using canvas please use generateCanvasTexture"), this.generateCanvasTexture(t, e)
                }, r.RenderTexture.prototype.render = function (t, e, r, n) {
                    this.legacyRenderer.render(t, this, r, e, !n), p("RenderTexture.render is now deprecated, please use renderer.render(displayObject, renderTexture)")
                }, r.RenderTexture.prototype.getImage = function (t) {
                    return p("RenderTexture.getImage is now deprecated, please use renderer.extract.image(target)"), this.legacyRenderer.extract.image(t)
                }, r.RenderTexture.prototype.getBase64 = function (t) {
                    return p("RenderTexture.getBase64 is now deprecated, please use renderer.extract.base64(target)"), this.legacyRenderer.extract.base64(t)
                }, r.RenderTexture.prototype.getCanvas = function (t) {
                    return p("RenderTexture.getCanvas is now deprecated, please use renderer.extract.canvas(target)"), this.legacyRenderer.extract.canvas(t)
                }, r.RenderTexture.prototype.getPixels = function (t) {
                    return p("RenderTexture.getPixels is now deprecated, please use renderer.extract.pixels(target)"), this.legacyRenderer.pixels(t)
                }, r.Sprite.prototype.setTexture = function (t) {
                    this.texture = t, p("setTexture is now deprecated, please use the texture property, e.g : sprite.texture = texture;")
                }, n.BitmapText && (n.BitmapText.prototype.setText = function (t) {
                    this.text = t, p("setText is now deprecated, please use the text property, e.g : myBitmapText.text = 'my text';")
                });
                r.Text.prototype.setText = function (t) {
                    this.text = t, p("setText is now deprecated, please use the text property, e.g : myText.text = 'my text';")
                }, r.Text.calculateFontProperties = function (t) {
                    return p("Text.calculateFontProperties is now deprecated, please use the TextMetrics.measureFont"), r.TextMetrics.measureFont(t)
                }, Object.defineProperties(r.Text, {
                    fontPropertiesCache: {
                        get: function () {
                            return p("Text.fontPropertiesCache is deprecated"), r.TextMetrics._fonts
                        }
                    }, fontPropertiesCanvas: {
                        get: function () {
                            return p("Text.fontPropertiesCanvas is deprecated"), r.TextMetrics._canvas
                        }
                    }, fontPropertiesContext: {
                        get: function () {
                            return p("Text.fontPropertiesContext is deprecated"), r.TextMetrics._context
                        }
                    }
                }), r.Text.prototype.setStyle = function (t) {
                    this.style = t, p("setStyle is now deprecated, please use the style property, e.g : myText.style = style;")
                }, r.Text.prototype.determineFontProperties = function (t) {
                    return p("determineFontProperties is now deprecated, please use TextMetrics.measureFont method"), r.TextMetrics.measureFont(t)
                }, r.Text.getFontStyle = function (t) {
                    return p("getFontStyle is now deprecated, please use TextStyle.toFontString() instead"), (t = t || {}) instanceof r.TextStyle || (t = new r.TextStyle(t)), t.toFontString()
                }, Object.defineProperties(r.TextStyle.prototype, {
                    font: {
                        get: function () {
                            p("text style property 'font' is now deprecated, please use the 'fontFamily', 'fontSize', 'fontStyle', 'fontVariant' and 'fontWeight' properties from now on");
                            var t = "number" == typeof this._fontSize ? this._fontSize + "px" : this._fontSize;
                            return this._fontStyle + " " + this._fontVariant + " " + this._fontWeight + " " + t + " " + this._fontFamily
                        }, set: function (t) {
                            p("text style property 'font' is now deprecated, please use the 'fontFamily','fontSize',fontStyle','fontVariant' and 'fontWeight' properties from now on"), 1 < t.indexOf("italic") ? this._fontStyle = "italic" : -1 < t.indexOf("oblique") ? this._fontStyle = "oblique" : this._fontStyle = "normal", -1 < t.indexOf("small-caps") ? this._fontVariant = "small-caps" : this._fontVariant = "normal";
                            var e = t.split(" "), r = -1;
                            this._fontSize = 26;
                            for (var n = 0; n < e.length; ++n) if (e[n].match(/(px|pt|em|%)/)) {
                                r = n, this._fontSize = e[n];
                                break
                            }
                            this._fontWeight = "normal";
                            for (var i = 0; i < r; ++i) if (e[i].match(/(bold|bolder|lighter|100|200|300|400|500|600|700|800|900)/)) {
                                this._fontWeight = e[i];
                                break
                            }
                            if (-1 < r && r < e.length - 1) {
                                this._fontFamily = "";
                                for (var o = r + 1; o < e.length; ++o) this._fontFamily += e[o] + " ";
                                this._fontFamily = this._fontFamily.slice(0, -1)
                            } else this._fontFamily = "Arial";
                            this.styleID++
                        }
                    }
                }), r.Texture.prototype.setFrame = function (t) {
                    this.frame = t, p("setFrame is now deprecated, please use the frame property, e.g: myTexture.frame = frame;")
                }, r.Texture.addTextureToCache = function (t, e) {
                    r.Texture.addToCache(t, e), p("Texture.addTextureToCache is deprecated, please use Texture.addToCache from now on.")
                }, r.Texture.removeTextureFromCache = function (t) {
                    return p("Texture.removeTextureFromCache is deprecated, please use Texture.removeFromCache from now on. Be aware that Texture.removeFromCache does not automatically its BaseTexture from the BaseTextureCache. For that, use BaseTexture.removeFromCache"), r.BaseTexture.removeFromCache(t), r.Texture.removeFromCache(t)
                }, Object.defineProperties(i, {
                    AbstractFilter: {
                        get: function () {
                            return p("AstractFilter has been renamed to Filter, please use PIXI.Filter"), r.AbstractFilter
                        }
                    }, SpriteMaskFilter: {
                        get: function () {
                            return p("filters.SpriteMaskFilter is an undocumented alias, please use SpriteMaskFilter from now on."), r.SpriteMaskFilter
                        }
                    }
                }), r.utils.uuid = function () {
                    return p("utils.uuid() is deprecated, please use utils.uid() from now on."), r.utils.uid()
                }, r.utils.canUseNewCanvasBlendModes = function () {
                    return p("utils.canUseNewCanvasBlendModes() is deprecated, please use CanvasTinter.canUseMultiply from now on"), r.CanvasTinter.canUseMultiply
                };
                var c = !0;
                Object.defineProperty(r.utils, "_saidHello", {
                    set: function (t) {
                        t && (p("PIXI.utils._saidHello is deprecated, please use PIXI.utils.skipHello()"), this.skipHello()), c = t
                    }, get: function () {
                        return c
                    }
                }), o.BasePrepare && (o.BasePrepare.prototype.register = function (t, e) {
                    return p("renderer.plugins.prepare.register is now deprecated, please use renderer.plugins.prepare.registerFindHook & renderer.plugins.prepare.registerUploadHook"), t && this.registerFindHook(t), e && this.registerUploadHook(e), this
                });
                o.canvas && Object.defineProperty(o.canvas, "UPLOADS_PER_FRAME", {
                    set: function () {
                        p("PIXI.CanvasPrepare.UPLOADS_PER_FRAME has been removed. Please set renderer.plugins.prepare.limiter.maxItemsPerFrame on your renderer")
                    }, get: function () {
                        return p("PIXI.CanvasPrepare.UPLOADS_PER_FRAME has been removed. Please use renderer.plugins.prepare.limiter"), NaN
                    }
                });
                o.webgl && Object.defineProperty(o.webgl, "UPLOADS_PER_FRAME", {
                    set: function () {
                        p("PIXI.WebGLPrepare.UPLOADS_PER_FRAME has been removed. Please set renderer.plugins.prepare.limiter.maxItemsPerFrame on your renderer")
                    }, get: function () {
                        return p("PIXI.WebGLPrepare.UPLOADS_PER_FRAME has been removed. Please use renderer.plugins.prepare.limiter"), NaN
                    }
                });
                if (s.Loader) {
                    var d = s.Resource, f = s.Loader;
                    Object.defineProperties(d.prototype, {
                        isJson: {
                            get: function () {
                                return p("The isJson property is deprecated, please use `resource.type === Resource.TYPE.JSON`."), this.type === d.TYPE.JSON
                            }
                        }, isXml: {
                            get: function () {
                                return p("The isXml property is deprecated, please use `resource.type === Resource.TYPE.XML`."), this.type === d.TYPE.XML
                            }
                        }, isImage: {
                            get: function () {
                                return p("The isImage property is deprecated, please use `resource.type === Resource.TYPE.IMAGE`."), this.type === d.TYPE.IMAGE
                            }
                        }, isAudio: {
                            get: function () {
                                return p("The isAudio property is deprecated, please use `resource.type === Resource.TYPE.AUDIO`."), this.type === d.TYPE.AUDIO
                            }
                        }, isVideo: {
                            get: function () {
                                return p("The isVideo property is deprecated, please use `resource.type === Resource.TYPE.VIDEO`."), this.type === d.TYPE.VIDEO
                            }
                        }
                    }), Object.defineProperties(f.prototype, {
                        before: {
                            get: function () {
                                return p("The before() method is deprecated, please use pre()."), this.pre
                            }
                        }, after: {
                            get: function () {
                                return p("The after() method is deprecated, please use use()."), this.use
                            }
                        }
                    })
                }
                a.interactiveTarget && Object.defineProperty(a.interactiveTarget, "defaultCursor", {
                    set: function (t) {
                        p("Property defaultCursor has been replaced with 'cursor'. "), this.cursor = t
                    }, get: function () {
                        return p("Property defaultCursor has been replaced with 'cursor'. "), this.cursor
                    }
                });
                a.InteractionManager && (Object.defineProperty(a.InteractionManager, "defaultCursorStyle", {
                    set: function (t) {
                        p("Property defaultCursorStyle has been replaced with 'cursorStyles.default'. "), this.cursorStyles.default = t
                    }, get: function () {
                        return p("Property defaultCursorStyle has been replaced with 'cursorStyles.default'. "), this.cursorStyles.default
                    }
                }), Object.defineProperty(a.InteractionManager, "currentCursorStyle", {
                    set: function (t) {
                        p("Property currentCursorStyle has been removed.See the currentCursorMode property, which works differently."), this.currentCursorMode = t
                    }, get: function () {
                        return p("Property currentCursorStyle has been removed.See the currentCursorMode property, which works differently."), this.currentCursorMode
                    }
                }))
            }
        }, {}],
        131: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var l = function (t) {
                {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e.default = t, e
                }
            }(t("../../core"));
            var c = new l.Rectangle, n = function () {
                function e(t) {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), (this.renderer = t).extract = this
                }

                return e.prototype.image = function (t) {
                    var e = new Image;
                    return e.src = this.base64(t), e
                }, e.prototype.base64 = function (t) {
                    return this.canvas(t).toDataURL()
                }, e.prototype.canvas = function (t) {
                    var e = this.renderer, r = void 0, n = void 0, i = void 0, o = void 0;
                    t && (o = t instanceof l.RenderTexture ? t : e.generateTexture(t)), o ? (r = o.baseTexture._canvasRenderTarget.context, n = o.baseTexture._canvasRenderTarget.resolution, i = o.frame) : (r = e.rootContext, (i = c).width = this.renderer.width, i.height = this.renderer.height);
                    var s = i.width * n, a = i.height * n, u = new l.CanvasRenderTarget(s, a),
                        h = r.getImageData(i.x * n, i.y * n, s, a);
                    return u.context.putImageData(h, 0, 0), u.canvas
                }, e.prototype.pixels = function (t) {
                    var e = this.renderer, r = void 0, n = void 0, i = void 0, o = void 0;
                    return t && (o = t instanceof l.RenderTexture ? t : e.generateTexture(t)), o ? (r = o.baseTexture._canvasRenderTarget.context, n = o.baseTexture._canvasRenderTarget.resolution, i = o.frame) : (r = e.rootContext, (i = c).width = e.width, i.height = e.height), r.getImageData(0, 0, i.width * n, i.height * n).data
                }, e.prototype.destroy = function () {
                    this.renderer.extract = null, this.renderer = null
                }, e
            }();
            r.default = n, l.CanvasRenderer.registerPlugin("extract", n)
        }, {"../../core": 65}],
        132: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n = t("./webgl/WebGLExtract");
            Object.defineProperty(r, "webgl", {
                enumerable: !0, get: function () {
                    return o(n).default
                }
            });
            var i = t("./canvas/CanvasExtract");

            function o(t) {
                return t && t.__esModule ? t : {default: t}
            }

            Object.defineProperty(r, "canvas", {
                enumerable: !0, get: function () {
                    return o(i).default
                }
            })
        }, {"./canvas/CanvasExtract": 131, "./webgl/WebGLExtract": 133}],
        133: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var f = function (t) {
                {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e.default = t, e
                }
            }(t("../../core"));
            var p = new f.Rectangle, n = function () {
                function e(t) {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), (this.renderer = t).extract = this
                }

                return e.prototype.image = function (t) {
                    var e = new Image;
                    return e.src = this.base64(t), e
                }, e.prototype.base64 = function (t) {
                    return this.canvas(t).toDataURL()
                }, e.prototype.canvas = function (t) {
                    var e = this.renderer, r = void 0, n = void 0, i = void 0, o = !1, s = void 0;
                    t && (s = t instanceof f.RenderTexture ? t : this.renderer.generateTexture(t)), s ? (n = (r = s.baseTexture._glRenderTargets[this.renderer.CONTEXT_UID]).resolution, i = s.frame, o = !1) : (n = (r = this.renderer.rootRenderTarget).resolution, o = !0, (i = p).width = r.size.width, i.height = r.size.height);
                    var a = i.width * n, u = i.height * n, h = new f.CanvasRenderTarget(a, u);
                    if (r) {
                        e.bindRenderTarget(r);
                        var l = new Uint8Array(4 * a * u), c = e.gl;
                        c.readPixels(i.x * n, i.y * n, a, u, c.RGBA, c.UNSIGNED_BYTE, l);
                        var d = h.context.getImageData(0, 0, a, u);
                        d.data.set(l), h.context.putImageData(d, 0, 0), o && (h.context.scale(1, -1), h.context.drawImage(h.canvas, 0, -u))
                    }
                    return h.canvas
                }, e.prototype.pixels = function (t) {
                    var e = this.renderer, r = void 0, n = void 0, i = void 0, o = void 0;
                    t && (o = t instanceof f.RenderTexture ? t : this.renderer.generateTexture(t)), o ? (n = (r = o.baseTexture._glRenderTargets[this.renderer.CONTEXT_UID]).resolution, i = o.frame) : (n = (r = this.renderer.rootRenderTarget).resolution, (i = p).width = r.size.width, i.height = r.size.height);
                    var s = i.width * n, a = i.height * n, u = new Uint8Array(4 * s * a);
                    if (r) {
                        e.bindRenderTarget(r);
                        var h = e.gl;
                        h.readPixels(i.x * n, i.y * n, s, a, h.RGBA, h.UNSIGNED_BYTE, u)
                    }
                    return u
                }, e.prototype.destroy = function () {
                    this.renderer.extract = null, this.renderer = null
                }, e
            }();
            r.default = n, f.WebGLRenderer.registerPlugin("extract", n)
        }, {"../../core": 65}],
        134: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var o = function () {
                function n(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function (t, e, r) {
                    return e && n(t.prototype, e), r && n(t, r), t
                }
            }(), s = function (t) {
                {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e.default = t, e
                }
            }(t("../core"));
            var n = function (n) {
                function i(t, e) {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, i);
                    var r = function (t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, n.call(this, t[0] instanceof s.Texture ? t[0] : t[0].texture));
                    return r._textures = null, r._durations = null, r.textures = t, r._autoUpdate = !1 !== e, r.animationSpeed = 1, r.loop = !0, r.onComplete = null, r.onFrameChange = null, r.onLoop = null, r._currentTime = 0, r.playing = !1, r
                }

                return function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(i, n), i.prototype.stop = function () {
                    this.playing && (this.playing = !1, this._autoUpdate && s.ticker.shared.remove(this.update, this))
                }, i.prototype.play = function () {
                    this.playing || (this.playing = !0, this._autoUpdate && s.ticker.shared.add(this.update, this, s.UPDATE_PRIORITY.HIGH))
                }, i.prototype.gotoAndStop = function (t) {
                    this.stop();
                    var e = this.currentFrame;
                    this._currentTime = t, e !== this.currentFrame && this.updateTexture()
                }, i.prototype.gotoAndPlay = function (t) {
                    var e = this.currentFrame;
                    this._currentTime = t, e !== this.currentFrame && this.updateTexture(), this.play()
                }, i.prototype.update = function (t) {
                    var e = this.animationSpeed * t, r = this.currentFrame;
                    if (null !== this._durations) {
                        var n = this._currentTime % 1 * this._durations[this.currentFrame];
                        for (n += e / 60 * 1e3; n < 0;) this._currentTime--, n += this._durations[this.currentFrame];
                        var i = Math.sign(this.animationSpeed * t);
                        for (this._currentTime = Math.floor(this._currentTime); n >= this._durations[this.currentFrame];) n -= this._durations[this.currentFrame] * i, this._currentTime += i;
                        this._currentTime += n / this._durations[this.currentFrame]
                    } else this._currentTime += e;
                    this._currentTime < 0 && !this.loop ? (this.gotoAndStop(0), this.onComplete && this.onComplete()) : this._currentTime >= this._textures.length && !this.loop ? (this.gotoAndStop(this._textures.length - 1), this.onComplete && this.onComplete()) : r !== this.currentFrame && (this.loop && this.onLoop && (0 < this.animationSpeed && this.currentFrame < r ? this.onLoop() : this.animationSpeed < 0 && this.currentFrame > r && this.onLoop()), this.updateTexture())
                }, i.prototype.updateTexture = function () {
                    this._texture = this._textures[this.currentFrame], this._textureID = -1, this.onFrameChange && this.onFrameChange(this.currentFrame)
                }, i.prototype.destroy = function (t) {
                    this.stop(), n.prototype.destroy.call(this, t)
                }, i.fromFrames = function (t) {
                    for (var e = [], r = 0; r < t.length; ++r) e.push(s.Texture.fromFrame(t[r]));
                    return new i(e)
                }, i.fromImages = function (t) {
                    for (var e = [], r = 0; r < t.length; ++r) e.push(s.Texture.fromImage(t[r]));
                    return new i(e)
                }, o(i, [{
                    key: "totalFrames", get: function () {
                        return this._textures.length
                    }
                }, {
                    key: "textures", get: function () {
                        return this._textures
                    }, set: function (t) {
                        if (t[0] instanceof s.Texture) this._textures = t, this._durations = null; else {
                            this._textures = [], this._durations = [];
                            for (var e = 0; e < t.length; e++) this._textures.push(t[e].texture), this._durations.push(t[e].time)
                        }
                        this.gotoAndStop(0), this.updateTexture()
                    }
                }, {
                    key: "currentFrame", get: function () {
                        var t = Math.floor(this._currentTime) % this._textures.length;
                        return t < 0 && (t += this._textures.length), t
                    }
                }]), i
            }(s.Sprite);
            r.default = n
        }, {"../core": 65}],
        135: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var i = function () {
                function n(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function (t, e, r) {
                    return e && n(t.prototype, e), r && n(t, r), t
                }
            }(), O = function (t) {
                {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e.default = t, e
                }
            }(t("../core")), o = n(t("../core/math/ObservablePoint")), y = n(t("../core/settings"));

            function n(t) {
                return t && t.__esModule ? t : {default: t}
            }

            var s = function (n) {
                function S(t) {
                    var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, S);
                    var r = function (t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, n.call(this));
                    return r._textWidth = 0, r._textHeight = 0, r._glyphs = [], r._font = {
                        tint: void 0 !== e.tint ? e.tint : 16777215,
                        align: e.align || "left",
                        name: null,
                        size: 0
                    }, r.font = e.font, r._text = t, r._maxWidth = 0, r._maxLineHeight = 0, r._anchor = new o.default(function () {
                        r.dirty = !0
                    }, r, 0, 0), r.dirty = !1, r.updateText(), r
                }

                return function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(S, n), S.prototype.updateText = function () {
                    for (var t = S.fonts[this._font.name], e = this._font.size / t.size, r = new O.Point, n = [], i = [], o = null, s = 0, a = 0, u = 0, h = -1, l = 0, c = 0, d = 0, f = 0; f < this.text.length; f++) {
                        var p = this.text.charCodeAt(f);
                        if (/(\s)/.test(this.text.charAt(f)) && (h = f, l = s), /(?:\r\n|\r|\n)/.test(this.text.charAt(f))) i.push(s), a = Math.max(a, s), u++, r.x = 0, r.y += t.lineHeight, o = null; else if (-1 !== h && 0 < this._maxWidth && r.x * e > this._maxWidth) O.utils.removeItems(n, h - c, f - h), f = h, h = -1, ++c, i.push(l), a = Math.max(a, l), u++, r.x = 0, r.y += t.lineHeight, o = null; else {
                            var v = t.chars[p];
                            v && (o && v.kerning[o] && (r.x += v.kerning[o]), n.push({
                                texture: v.texture,
                                line: u,
                                charCode: p,
                                position: new O.Point(r.x + v.xOffset, r.y + v.yOffset)
                            }), s = r.x + (v.texture.width + v.xOffset), r.x += v.xAdvance, d = Math.max(d, v.yOffset + v.texture.height), o = p)
                        }
                    }
                    i.push(s), a = Math.max(a, s);
                    for (var g = [], y = 0; y <= u; y++) {
                        var m = 0;
                        "right" === this._font.align ? m = a - i[y] : "center" === this._font.align && (m = (a - i[y]) / 2), g.push(m)
                    }
                    for (var _ = n.length, b = this.tint, x = 0; x < _; x++) {
                        var T = this._glyphs[x];
                        T ? T.texture = n[x].texture : (T = new O.Sprite(n[x].texture), this._glyphs.push(T)), T.position.x = (n[x].position.x + g[n[x].line]) * e, T.position.y = n[x].position.y * e, T.scale.x = T.scale.y = e, T.tint = b, T.parent || this.addChild(T)
                    }
                    for (var w = _; w < this._glyphs.length; ++w) this.removeChild(this._glyphs[w]);
                    if (this._textWidth = a * e, this._textHeight = (r.y + t.lineHeight) * e, 0 !== this.anchor.x || 0 !== this.anchor.y) for (var E = 0; E < _; E++) this._glyphs[E].x -= this._textWidth * this.anchor.x, this._glyphs[E].y -= this._textHeight * this.anchor.y;
                    this._maxLineHeight = d * e
                }, S.prototype.updateTransform = function () {
                    this.validate(), this.containerUpdateTransform()
                }, S.prototype.getLocalBounds = function () {
                    return this.validate(), n.prototype.getLocalBounds.call(this)
                }, S.prototype.validate = function () {
                    this.dirty && (this.updateText(), this.dirty = !1)
                }, S.registerFont = function (t, e) {
                    var r = {}, n = t.getElementsByTagName("info")[0], i = t.getElementsByTagName("common")[0],
                        o = e.baseTexture.resolution || y.default.RESOLUTION;
                    r.font = n.getAttribute("face"), r.size = parseInt(n.getAttribute("size"), 10), r.lineHeight = parseInt(i.getAttribute("lineHeight"), 10) / o, r.chars = {};
                    for (var s = t.getElementsByTagName("char"), a = 0; a < s.length; a++) {
                        var u = s[a], h = parseInt(u.getAttribute("id"), 10),
                            l = new O.Rectangle(parseInt(u.getAttribute("x"), 10) / o + e.frame.x / o, parseInt(u.getAttribute("y"), 10) / o + e.frame.y / o, parseInt(u.getAttribute("width"), 10) / o, parseInt(u.getAttribute("height"), 10) / o);
                        r.chars[h] = {
                            xOffset: parseInt(u.getAttribute("xoffset"), 10) / o,
                            yOffset: parseInt(u.getAttribute("yoffset"), 10) / o,
                            xAdvance: parseInt(u.getAttribute("xadvance"), 10) / o,
                            kerning: {},
                            texture: new O.Texture(e.baseTexture, l)
                        }
                    }
                    for (var c = t.getElementsByTagName("kerning"), d = 0; d < c.length; d++) {
                        var f = c[d], p = parseInt(f.getAttribute("first"), 10) / o,
                            v = parseInt(f.getAttribute("second"), 10) / o,
                            g = parseInt(f.getAttribute("amount"), 10) / o;
                        r.chars[v] && (r.chars[v].kerning[p] = g)
                    }
                    return S.fonts[r.font] = r
                }, i(S, [{
                    key: "tint", get: function () {
                        return this._font.tint
                    }, set: function (t) {
                        this._font.tint = "number" == typeof t && 0 <= t ? t : 16777215, this.dirty = !0
                    }
                }, {
                    key: "align", get: function () {
                        return this._font.align
                    }, set: function (t) {
                        this._font.align = t || "left", this.dirty = !0
                    }
                }, {
                    key: "anchor", get: function () {
                        return this._anchor
                    }, set: function (t) {
                        "number" == typeof t ? this._anchor.set(t) : this._anchor.copy(t)
                    }
                }, {
                    key: "font", get: function () {
                        return this._font
                    }, set: function (t) {
                        t && ("string" == typeof t ? (t = t.split(" "), this._font.name = 1 === t.length ? t[0] : t.slice(1).join(" "), this._font.size = 2 <= t.length ? parseInt(t[0], 10) : S.fonts[this._font.name].size) : (this._font.name = t.name, this._font.size = "number" == typeof t.size ? t.size : parseInt(t.size, 10)), this.dirty = !0)
                    }
                }, {
                    key: "text", get: function () {
                        return this._text
                    }, set: function (t) {
                        t = t.toString() || " ", this._text !== t && (this._text = t, this.dirty = !0)
                    }
                }, {
                    key: "maxWidth", get: function () {
                        return this._maxWidth
                    }, set: function (t) {
                        this._maxWidth !== t && (this._maxWidth = t, this.dirty = !0)
                    }
                }, {
                    key: "maxLineHeight", get: function () {
                        return this.validate(), this._maxLineHeight
                    }
                }, {
                    key: "textWidth", get: function () {
                        return this.validate(), this._textWidth
                    }
                }, {
                    key: "textHeight", get: function () {
                        return this.validate(), this._textHeight
                    }
                }]), S
            }(O.Container);
            (r.default = s).fonts = {}
        }, {"../core": 65, "../core/math/ObservablePoint": 68, "../core/settings": 101}],
        136: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n, i = function () {
                function n(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function (t, e, r) {
                    return e && n(t.prototype, e), r && n(t, r), t
                }
            }(), o = t("../core/math/Matrix"), s = (n = o) && n.__esModule ? n : {default: n};
            var h = new s.default, a = function () {
                function r(t, e) {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, r), this._texture = t, this.mapCoord = new s.default, this.uClampFrame = new Float32Array(4), this.uClampOffset = new Float32Array(2), this._lastTextureID = -1, this.clampOffset = 0, this.clampMargin = void 0 === e ? .5 : e
                }

                return r.prototype.multiplyUvs = function (t, e) {
                    void 0 === e && (e = t);
                    for (var r = this.mapCoord, n = 0; n < t.length; n += 2) {
                        var i = t[n], o = t[n + 1];
                        e[n] = i * r.a + o * r.c + r.tx, e[n + 1] = i * r.b + o * r.d + r.ty
                    }
                    return e
                }, r.prototype.update = function (t) {
                    var e = this._texture;
                    if (!e || !e.valid) return !1;
                    if (!t && this._lastTextureID === e._updateID) return !1;
                    this._lastTextureID = e._updateID;
                    var r = e._uvs;
                    this.mapCoord.set(r.x1 - r.x0, r.y1 - r.y0, r.x3 - r.x0, r.y3 - r.y0, r.x0, r.y0);
                    var n = e.orig, i = e.trim;
                    i && (h.set(n.width / i.width, 0, 0, n.height / i.height, -i.x / i.width, -i.y / i.height), this.mapCoord.append(h));
                    var o = e.baseTexture, s = this.uClampFrame, a = this.clampMargin / o.resolution,
                        u = this.clampOffset;
                    return s[0] = (e._frame.x + a + u) / o.width, s[1] = (e._frame.y + a + u) / o.height, s[2] = (e._frame.x + e._frame.width - a + u) / o.width, s[3] = (e._frame.y + e._frame.height - a + u) / o.height, this.uClampOffset[0] = u / o.realWidth, this.uClampOffset[1] = u / o.realHeight, !0
                }, i(r, [{
                    key: "texture", get: function () {
                        return this._texture
                    }, set: function (t) {
                        this._texture = t, this._lastTextureID = -1
                    }
                }]), r
            }();
            r.default = a
        }, {"../core/math/Matrix": 67}],
        137: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n = function () {
                function n(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function (t, e, r) {
                    return e && n(t.prototype, e), r && n(t, r), t
                }
            }(), d = function (t) {
                {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e.default = t, e
                }
            }(t("../core")), f = i(t("../core/sprites/canvas/CanvasTinter")), s = i(t("./TextureTransform"));

            function i(t) {
                return t && t.__esModule ? t : {default: t}
            }

            var a = new d.Point, o = function (i) {
                function o(t) {
                    var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 100,
                        r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 100;
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, o);
                    var n = function (t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, i.call(this, t));
                    return n.tileTransform = new d.TransformStatic, n._width = e, n._height = r, n._canvasPattern = null, n.uvTransform = t.transform || new s.default(t), n.pluginName = "tilingSprite", n.uvRespectAnchor = !1, n
                }

                return function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(o, i), o.prototype._onTextureUpdate = function () {
                    this.uvTransform && (this.uvTransform.texture = this._texture)
                }, o.prototype._renderWebGL = function (t) {
                    var e = this._texture;
                    e && e.valid && (this.tileTransform.updateLocalTransform(), this.uvTransform.update(), t.setObjectRenderer(t.plugins[this.pluginName]), t.plugins[this.pluginName].render(this))
                }, o.prototype._renderCanvas = function (t) {
                    var e = this._texture;
                    if (e.baseTexture.hasLoaded) {
                        var r = t.context, n = this.worldTransform, i = t.resolution, o = e.baseTexture,
                            s = o.resolution, a = this.tilePosition.x / this.tileScale.x % e._frame.width * s,
                            u = this.tilePosition.y / this.tileScale.y % e._frame.height * s;
                        if (!this._canvasPattern) {
                            var h = new d.CanvasRenderTarget(e._frame.width, e._frame.height, s);
                            16777215 !== this.tint ? (this.cachedTint !== this.tint && (this.cachedTint = this.tint, this.tintedTexture = f.default.getTintedTexture(this, this.tint)), h.context.drawImage(this.tintedTexture, 0, 0)) : h.context.drawImage(o.source, -e._frame.x * s, -e._frame.y * s), this._canvasPattern = h.context.createPattern(h.canvas, "repeat")
                        }
                        r.globalAlpha = this.worldAlpha, r.setTransform(n.a * i, n.b * i, n.c * i, n.d * i, n.tx * i, n.ty * i), t.setBlendMode(this.blendMode), r.fillStyle = this._canvasPattern, r.scale(this.tileScale.x / s, this.tileScale.y / s);
                        var l = this.anchor.x * -this._width, c = this.anchor.y * -this._height;
                        this.uvRespectAnchor ? (r.translate(a, u), r.fillRect(-a + l, -u + c, this._width / this.tileScale.x * s, this._height / this.tileScale.y * s)) : (r.translate(a + l, u + c), r.fillRect(-a, -u, this._width / this.tileScale.x * s, this._height / this.tileScale.y * s))
                    }
                }, o.prototype._calculateBounds = function () {
                    var t = this._width * -this._anchor._x, e = this._height * -this._anchor._y,
                        r = this._width * (1 - this._anchor._x), n = this._height * (1 - this._anchor._y);
                    this._bounds.addFrame(this.transform, t, e, r, n)
                }, o.prototype.getLocalBounds = function (t) {
                    return 0 === this.children.length ? (this._bounds.minX = this._width * -this._anchor._x, this._bounds.minY = this._height * -this._anchor._y, this._bounds.maxX = this._width * (1 - this._anchor._x), this._bounds.maxY = this._height * (1 - this._anchor._x), t || (this._localBoundsRect || (this._localBoundsRect = new d.Rectangle), t = this._localBoundsRect), this._bounds.getRectangle(t)) : i.prototype.getLocalBounds.call(this, t)
                }, o.prototype.containsPoint = function (t) {
                    this.worldTransform.applyInverse(t, a);
                    var e = this._width, r = this._height, n = -e * this.anchor._x;
                    if (a.x >= n && a.x < n + e) {
                        var i = -r * this.anchor._y;
                        if (a.y >= i && a.y < i + r) return !0
                    }
                    return !1
                }, o.prototype.destroy = function (t) {
                    i.prototype.destroy.call(this, t), this.tileTransform = null, this.uvTransform = null
                }, o.from = function (t, e, r) {
                    return new o(d.Texture.from(t), e, r)
                }, o.fromFrame = function (t, e, r) {
                    var n = d.utils.TextureCache[t];
                    if (!n) throw new Error('The frameId "' + t + '" does not exist in the texture cache ' + this);
                    return new o(n, e, r)
                }, o.fromImage = function (t, e, r, n, i) {
                    return new o(d.Texture.fromImage(t, n, i), e, r)
                }, n(o, [{
                    key: "clampMargin", get: function () {
                        return this.uvTransform.clampMargin
                    }, set: function (t) {
                        this.uvTransform.clampMargin = t, this.uvTransform.update(!0)
                    }
                }, {
                    key: "tileScale", get: function () {
                        return this.tileTransform.scale
                    }, set: function (t) {
                        this.tileTransform.scale.copy(t)
                    }
                }, {
                    key: "tilePosition", get: function () {
                        return this.tileTransform.position
                    }, set: function (t) {
                        this.tileTransform.position.copy(t)
                    }
                }, {
                    key: "width", get: function () {
                        return this._width
                    }, set: function (t) {
                        this._width = t
                    }
                }, {
                    key: "height", get: function () {
                        return this._height
                    }, set: function (t) {
                        this._height = t
                    }
                }]), o
            }(d.Sprite);
            r.default = o
        }, {"../core": 65, "../core/sprites/canvas/CanvasTinter": 104, "./TextureTransform": 136}],
        138: [function (t, e, r) {
            "use strict";
            var l = function (t) {
                    {
                        if (t && t.__esModule) return t;
                        var e = {};
                        if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                        return e.default = t, e
                    }
                }(t("../core")), c = n(t("../core/textures/Texture")), d = n(t("../core/textures/BaseTexture")),
                f = t("../core/utils");

            function n(t) {
                return t && t.__esModule ? t : {default: t}
            }

            var i = l.DisplayObject, p = new l.Matrix;
            i.prototype._cacheAsBitmap = !1, i.prototype._cacheData = !1;
            var o = function t() {
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.textureCacheId = null, this.originalRenderWebGL = null, this.originalRenderCanvas = null, this.originalCalculateBounds = null, this.originalGetLocalBounds = null, this.originalUpdateTransform = null, this.originalHitTest = null, this.originalDestroy = null, this.originalMask = null, this.originalFilterArea = null, this.sprite = null
            };
            Object.defineProperties(i.prototype, {
                cacheAsBitmap: {
                    get: function () {
                        return this._cacheAsBitmap
                    }, set: function (t) {
                        if (this._cacheAsBitmap !== t) {
                            var e = void 0;
                            (this._cacheAsBitmap = t) ? (this._cacheData || (this._cacheData = new o), (e = this._cacheData).originalRenderWebGL = this.renderWebGL, e.originalRenderCanvas = this.renderCanvas, e.originalUpdateTransform = this.updateTransform, e.originalCalculateBounds = this._calculateBounds, e.originalGetLocalBounds = this.getLocalBounds, e.originalDestroy = this.destroy, e.originalContainsPoint = this.containsPoint, e.originalMask = this._mask, e.originalFilterArea = this.filterArea, this.renderWebGL = this._renderCachedWebGL, this.renderCanvas = this._renderCachedCanvas, this.destroy = this._cacheAsBitmapDestroy) : ((e = this._cacheData).sprite && this._destroyCachedDisplayObject(), this.renderWebGL = e.originalRenderWebGL, this.renderCanvas = e.originalRenderCanvas, this._calculateBounds = e.originalCalculateBounds, this.getLocalBounds = e.originalGetLocalBounds, this.destroy = e.originalDestroy, this.updateTransform = e.originalUpdateTransform, this.containsPoint = e.originalContainsPoint, this._mask = e.originalMask, this.filterArea = e.originalFilterArea)
                        }
                    }
                }
            }), i.prototype._renderCachedWebGL = function (t) {
                !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObject(t), this._cacheData.sprite._transformID = -1, this._cacheData.sprite.worldAlpha = this.worldAlpha, this._cacheData.sprite._renderWebGL(t))
            }, i.prototype._initCachedDisplayObject = function (t) {
                if (!this._cacheData || !this._cacheData.sprite) {
                    var e = this.alpha;
                    this.alpha = 1, t.currentRenderer.flush();
                    var r = this.getLocalBounds().clone();
                    if (this._filters) {
                        var n = this._filters[0].padding;
                        r.pad(n)
                    }
                    var i = t._activeRenderTarget, o = t.filterManager.filterStack,
                        s = l.RenderTexture.create(0 | r.width, 0 | r.height), a = "cacheAsBitmap_" + (0, f.uid)();
                    this._cacheData.textureCacheId = a, d.default.addToCache(s.baseTexture, a), c.default.addToCache(s, a);
                    var u = p;
                    u.tx = -r.x, u.ty = -r.y, this.transform.worldTransform.identity(), this.renderWebGL = this._cacheData.originalRenderWebGL, t.render(this, s, !0, u, !0), t.bindRenderTarget(i), t.filterManager.filterStack = o, this.renderWebGL = this._renderCachedWebGL, this.updateTransform = this.displayObjectUpdateTransform, this._mask = null, this.filterArea = null;
                    var h = new l.Sprite(s);
                    h.transform.worldTransform = this.transform.worldTransform, h.anchor.x = -r.x / r.width, h.anchor.y = -r.y / r.height, h.alpha = e, h._bounds = this._bounds, this._calculateBounds = this._calculateCachedBounds, this.getLocalBounds = this._getCachedLocalBounds, this._cacheData.sprite = h, this.transform._parentID = -1, this.parent ? this.updateTransform() : (this.parent = t._tempDisplayObjectParent, this.updateTransform(), this.parent = null), this.containsPoint = h.containsPoint.bind(h)
                }
            }, i.prototype._renderCachedCanvas = function (t) {
                !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObjectCanvas(t), this._cacheData.sprite.worldAlpha = this.worldAlpha, this._cacheData.sprite.renderCanvas(t))
            }, i.prototype._initCachedDisplayObjectCanvas = function (t) {
                if (!this._cacheData || !this._cacheData.sprite) {
                    var e = this.getLocalBounds(), r = this.alpha;
                    this.alpha = 1;
                    var n = t.context, i = l.RenderTexture.create(0 | e.width, 0 | e.height),
                        o = "cacheAsBitmap_" + (0, f.uid)();
                    this._cacheData.textureCacheId = o, d.default.addToCache(i.baseTexture, o), c.default.addToCache(i, o);
                    var s = p;
                    this.transform.localTransform.copy(s), s.invert(), s.tx -= e.x, s.ty -= e.y, this.renderCanvas = this._cacheData.originalRenderCanvas, t.render(this, i, !0, s, !1), t.context = n, this.renderCanvas = this._renderCachedCanvas, this._calculateBounds = this._calculateCachedBounds, this._mask = null, this.filterArea = null;
                    var a = new l.Sprite(i);
                    a.transform.worldTransform = this.transform.worldTransform, a.anchor.x = -e.x / e.width, a.anchor.y = -e.y / e.height, a._bounds = this._bounds, a.alpha = r, this.parent ? this.updateTransform() : (this.parent = t._tempDisplayObjectParent, this.updateTransform(), this.parent = null), this.updateTransform = this.displayObjectUpdateTransform, this._cacheData.sprite = a, this.containsPoint = a.containsPoint.bind(a)
                }
            }, i.prototype._calculateCachedBounds = function () {
                this._cacheData.sprite._calculateBounds()
            }, i.prototype._getCachedLocalBounds = function () {
                return this._cacheData.sprite.getLocalBounds()
            }, i.prototype._destroyCachedDisplayObject = function () {
                this._cacheData.sprite._texture.destroy(!0), this._cacheData.sprite = null, d.default.removeFromCache(this._cacheData.textureCacheId), c.default.removeFromCache(this._cacheData.textureCacheId), this._cacheData.textureCacheId = null
            }, i.prototype._cacheAsBitmapDestroy = function (t) {
                this.cacheAsBitmap = !1, this.destroy(t)
            }
        }, {"../core": 65, "../core/textures/BaseTexture": 112, "../core/textures/Texture": 115, "../core/utils": 124}],
        139: [function (t, e, r) {
            "use strict";
            var n = function (t) {
                {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e.default = t, e
                }
            }(t("../core"));
            n.DisplayObject.prototype.name = null, n.Container.prototype.getChildByName = function (t) {
                for (var e = 0; e < this.children.length; e++) if (this.children[e].name === t) return this.children[e];
                return null
            }
        }, {"../core": 65}],
        140: [function (t, e, r) {
            "use strict";
            var n = function (t) {
                {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e.default = t, e
                }
            }(t("../core"));
            n.DisplayObject.prototype.getGlobalPosition = function () {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : new n.Point,
                    e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                return this.parent ? this.parent.toGlobal(this.position, t, e) : (t.x = this.position.x, t.y = this.position.y), t
            }
        }, {"../core": 65}],
        141: [function (t, e, r) {
            "use strict";
            r.__esModule = !0, r.BitmapText = r.TilingSpriteRenderer = r.TilingSprite = r.TextureTransform = r.AnimatedSprite = void 0;
            var n = t("./AnimatedSprite");
            Object.defineProperty(r, "AnimatedSprite", {
                enumerable: !0, get: function () {
                    return u(n).default
                }
            });
            var i = t("./TextureTransform");
            Object.defineProperty(r, "TextureTransform", {
                enumerable: !0, get: function () {
                    return u(i).default
                }
            });
            var o = t("./TilingSprite");
            Object.defineProperty(r, "TilingSprite", {
                enumerable: !0, get: function () {
                    return u(o).default
                }
            });
            var s = t("./webgl/TilingSpriteRenderer");
            Object.defineProperty(r, "TilingSpriteRenderer", {
                enumerable: !0, get: function () {
                    return u(s).default
                }
            });
            var a = t("./BitmapText");

            function u(t) {
                return t && t.__esModule ? t : {default: t}
            }

            Object.defineProperty(r, "BitmapText", {
                enumerable: !0, get: function () {
                    return u(a).default
                }
            }), t("./cacheAsBitmap"), t("./getChildByName"), t("./getGlobalPosition")
        }, {
            "./AnimatedSprite": 134,
            "./BitmapText": 135,
            "./TextureTransform": 136,
            "./TilingSprite": 137,
            "./cacheAsBitmap": 138,
            "./getChildByName": 139,
            "./getGlobalPosition": 140,
            "./webgl/TilingSpriteRenderer": 142
        }],
        142: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var p = function (t) {
                {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e.default = t, e
                }
            }(t("../../core")), v = t("../../core/const");
            t("path");
            var g = new p.Matrix, n = function (r) {
                function n(t) {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    var e = function (t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, r.call(this, t));
                    return e.shader = null, e.simpleShader = null, e.quad = null, e
                }

                return function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(n, r), n.prototype.onContextChange = function () {
                    var t = this.renderer.gl;
                    this.shader = new p.Shader(t, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n", "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nuniform mat3 uMapCoord;\nuniform vec4 uClampFrame;\nuniform vec2 uClampOffset;\n\nvoid main(void)\n{\n    vec2 coord = mod(vTextureCoord - uClampOffset, vec2(1.0, 1.0)) + uClampOffset;\n    coord = (uMapCoord * vec3(coord, 1.0)).xy;\n    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);\n\n    vec4 sample = texture2D(uSampler, coord);\n    gl_FragColor = sample * uColor;\n}\n"), this.simpleShader = new p.Shader(t, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n", "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\n\nvoid main(void)\n{\n    vec4 sample = texture2D(uSampler, vTextureCoord);\n    gl_FragColor = sample * uColor;\n}\n"), this.renderer.bindVao(null), this.quad = new p.Quad(t, this.renderer.state.attribState), this.quad.initVao(this.shader)
                }, n.prototype.render = function (t) {
                    var e = this.renderer, r = this.quad;
                    e.bindVao(r.vao);
                    var n = r.vertices;
                    n[0] = n[6] = t._width * -t.anchor.x, n[1] = n[3] = t._height * -t.anchor.y, n[2] = n[4] = t._width * (1 - t.anchor.x), n[5] = n[7] = t._height * (1 - t.anchor.y), t.uvRespectAnchor && ((n = r.uvs)[0] = n[6] = -t.anchor.x, n[1] = n[3] = -t.anchor.y, n[2] = n[4] = 1 - t.anchor.x, n[5] = n[7] = 1 - t.anchor.y), r.upload();
                    var i = t._texture, o = i.baseTexture, s = t.tileTransform.localTransform, a = t.uvTransform,
                        u = o.isPowerOfTwo && i.frame.width === o.width && i.frame.height === o.height;
                    u && (o._glTextures[e.CONTEXT_UID] ? u = o.wrapMode !== v.WRAP_MODES.CLAMP : o.wrapMode === v.WRAP_MODES.CLAMP && (o.wrapMode = v.WRAP_MODES.REPEAT));
                    var h = u ? this.simpleShader : this.shader;
                    e.bindShader(h);
                    var l = i.width, c = i.height, d = t._width, f = t._height;
                    g.set(s.a * l / d, s.b * l / f, s.c * c / d, s.d * c / f, s.tx / d, s.ty / f), g.invert(), u ? g.prepend(a.mapCoord) : (h.uniforms.uMapCoord = a.mapCoord.toArray(!0), h.uniforms.uClampFrame = a.uClampFrame, h.uniforms.uClampOffset = a.uClampOffset), h.uniforms.uTransform = g.toArray(!0), h.uniforms.uColor = p.utils.premultiplyTintToRgba(t.tint, t.worldAlpha, h.uniforms.uColor, o.premultipliedAlpha), h.uniforms.translationMatrix = t.transform.worldTransform.toArray(!0), h.uniforms.uSampler = e.bindTexture(i), e.setBlendMode(p.utils.correctBlendMode(t.blendMode, o.premultipliedAlpha)), r.vao.draw(this.renderer.gl.TRIANGLES, 6, 0)
                }, n
            }(p.ObjectRenderer);
            r.default = n, p.WebGLRenderer.registerPlugin("tilingSprite", n)
        }, {"../../core": 65, "../../core/const": 46, path: 8}],
        143: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n = function () {
                function n(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function (t, e, r) {
                    return e && n(t.prototype, e), r && n(t, r), t
                }
            }(), a = function (t) {
                {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e.default = t, e
                }
            }(t("../../core")), u = i(t("./BlurXFilter")), h = i(t("./BlurYFilter"));

            function i(t) {
                return t && t.__esModule ? t : {default: t}
            }

            var o = function (o) {
                function s(t, e, r, n) {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, s);
                    var i = function (t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, o.call(this));
                    return i.blurXFilter = new u.default(t, e, r, n), i.blurYFilter = new h.default(t, e, r, n), i.padding = 0, i.resolution = r || a.settings.RESOLUTION, i.quality = e || 4, i.blur = t || 8, i
                }

                return function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(s, o), s.prototype.apply = function (t, e, r) {
                    var n = t.getRenderTarget(!0);
                    this.blurXFilter.apply(t, e, n, !0), this.blurYFilter.apply(t, n, r, !1), t.returnRenderTarget(n)
                }, n(s, [{
                    key: "blur", get: function () {
                        return this.blurXFilter.blur
                    }, set: function (t) {
                        this.blurXFilter.blur = this.blurYFilter.blur = t, this.padding = 2 * Math.max(Math.abs(this.blurXFilter.strength), Math.abs(this.blurYFilter.strength))
                    }
                }, {
                    key: "quality", get: function () {
                        return this.blurXFilter.quality
                    }, set: function (t) {
                        this.blurXFilter.quality = this.blurYFilter.quality = t
                    }
                }, {
                    key: "blurX", get: function () {
                        return this.blurXFilter.blur
                    }, set: function (t) {
                        this.blurXFilter.blur = t, this.padding = 2 * Math.max(Math.abs(this.blurXFilter.strength), Math.abs(this.blurYFilter.strength))
                    }
                }, {
                    key: "blurY", get: function () {
                        return this.blurYFilter.blur
                    }, set: function (t) {
                        this.blurYFilter.blur = t, this.padding = 2 * Math.max(Math.abs(this.blurXFilter.strength), Math.abs(this.blurYFilter.strength))
                    }
                }, {
                    key: "blendMode", get: function () {
                        return this.blurYFilter._blendMode
                    }, set: function (t) {
                        this.blurYFilter._blendMode = t
                    }
                }]), s
            }(a.Filter);
            r.default = o
        }, {"../../core": 65, "./BlurXFilter": 144, "./BlurYFilter": 145}],
        144: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n = function () {
                    function n(t, e) {
                        for (var r = 0; r < e.length; r++) {
                            var n = e[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }

                    return function (t, e, r) {
                        return e && n(t.prototype, e), r && n(t, r), t
                    }
                }(), h = function (t) {
                    {
                        if (t && t.__esModule) return t;
                        var e = {};
                        if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                        return e.default = t, e
                    }
                }(t("../../core")), c = i(t("./generateBlurVertSource")), d = i(t("./generateBlurFragSource")),
                f = i(t("./getMaxBlurKernelSize"));

            function i(t) {
                return t && t.__esModule ? t : {default: t}
            }

            var o = function (a) {
                function u(t, e, r, n) {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, u), n = n || 5;
                    var i = (0, c.default)(n, !0), o = (0, d.default)(n), s = function (t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, a.call(this, i, o));
                    return s.resolution = r || h.settings.RESOLUTION, s._quality = 0, s.quality = e || 4, s.strength = t || 8, s.firstRun = !0, s
                }

                return function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(u, a), u.prototype.apply = function (t, e, r, n) {
                    if (this.firstRun) {
                        var i = t.renderer.gl, o = (0, f.default)(i);
                        this.vertexSrc = (0, c.default)(o, !0), this.fragmentSrc = (0, d.default)(o), this.firstRun = !1
                    }
                    if (this.uniforms.strength = 1 / r.size.width * (r.size.width / e.size.width), this.uniforms.strength *= this.strength, this.uniforms.strength /= this.passes, 1 === this.passes) t.applyFilter(this, e, r, n); else {
                        for (var s = t.getRenderTarget(!0), a = e, u = s, h = 0; h < this.passes - 1; h++) {
                            t.applyFilter(this, a, u, !0);
                            var l = u;
                            u = a, a = l
                        }
                        t.applyFilter(this, a, r, n), t.returnRenderTarget(s)
                    }
                }, n(u, [{
                    key: "blur", get: function () {
                        return this.strength
                    }, set: function (t) {
                        this.padding = 2 * Math.abs(t), this.strength = t
                    }
                }, {
                    key: "quality", get: function () {
                        return this._quality
                    }, set: function (t) {
                        this._quality = t, this.passes = t
                    }
                }]), u
            }(h.Filter);
            r.default = o
        }, {
            "../../core": 65,
            "./generateBlurFragSource": 146,
            "./generateBlurVertSource": 147,
            "./getMaxBlurKernelSize": 148
        }],
        145: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n = function () {
                    function n(t, e) {
                        for (var r = 0; r < e.length; r++) {
                            var n = e[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }

                    return function (t, e, r) {
                        return e && n(t.prototype, e), r && n(t, r), t
                    }
                }(), h = function (t) {
                    {
                        if (t && t.__esModule) return t;
                        var e = {};
                        if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                        return e.default = t, e
                    }
                }(t("../../core")), c = i(t("./generateBlurVertSource")), d = i(t("./generateBlurFragSource")),
                f = i(t("./getMaxBlurKernelSize"));

            function i(t) {
                return t && t.__esModule ? t : {default: t}
            }

            var o = function (a) {
                function u(t, e, r, n) {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, u), n = n || 5;
                    var i = (0, c.default)(n, !1), o = (0, d.default)(n), s = function (t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, a.call(this, i, o));
                    return s.resolution = r || h.settings.RESOLUTION, s._quality = 0, s.quality = e || 4, s.strength = t || 8, s.firstRun = !0, s
                }

                return function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(u, a), u.prototype.apply = function (t, e, r, n) {
                    if (this.firstRun) {
                        var i = t.renderer.gl, o = (0, f.default)(i);
                        this.vertexSrc = (0, c.default)(o, !1), this.fragmentSrc = (0, d.default)(o), this.firstRun = !1
                    }
                    if (this.uniforms.strength = 1 / r.size.height * (r.size.height / e.size.height), this.uniforms.strength *= this.strength, this.uniforms.strength /= this.passes, 1 === this.passes) t.applyFilter(this, e, r, n); else {
                        for (var s = t.getRenderTarget(!0), a = e, u = s, h = 0; h < this.passes - 1; h++) {
                            t.applyFilter(this, a, u, !0);
                            var l = u;
                            u = a, a = l
                        }
                        t.applyFilter(this, a, r, n), t.returnRenderTarget(s)
                    }
                }, n(u, [{
                    key: "blur", get: function () {
                        return this.strength
                    }, set: function (t) {
                        this.padding = 2 * Math.abs(t), this.strength = t
                    }
                }, {
                    key: "quality", get: function () {
                        return this._quality
                    }, set: function (t) {
                        this._quality = t, this.passes = t
                    }
                }]), u
            }(h.Filter);
            r.default = o
        }, {
            "../../core": 65,
            "./generateBlurFragSource": 146,
            "./generateBlurVertSource": 147,
            "./getMaxBlurKernelSize": 148
        }],
        146: [function (t, e, r) {
            "use strict";
            r.__esModule = !0, r.default = function (t) {
                for (var e = u[t], r = e.length, n = h, i = "", o = void 0, s = 0; s < t; s++) {
                    var a = "gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;".replace("%index%", s);
                    r <= (o = s) && (o = t - s - 1), a = a.replace("%value%", e[o]), i += a, i += "\n"
                }
                return n = (n = n.replace("%blur%", i)).replace("%size%", t)
            };
            var u = {
                    5: [.153388, .221461, .250301],
                    7: [.071303, .131514, .189879, .214607],
                    9: [.028532, .067234, .124009, .179044, .20236],
                    11: [.0093, .028002, .065984, .121703, .175713, .198596],
                    13: [.002406, .009255, .027867, .065666, .121117, .174868, .197641],
                    15: [489e-6, .002403, .009246, .02784, .065602, .120999, .174697, .197448]
                },
                h = ["varying vec2 vBlurTexCoords[%size%];", "uniform sampler2D uSampler;", "void main(void)", "{", "    gl_FragColor = vec4(0.0);", "    %blur%", "}"].join("\n")
        }, {}],
        147: [function (t, e, r) {
            "use strict";
            r.__esModule = !0, r.default = function (t, e) {
                var r = Math.ceil(t / 2), n = u, i = "", o = void 0;
                o = e ? "vBlurTexCoords[%index%] = aTextureCoord + vec2(%sampleIndex% * strength, 0.0);" : "vBlurTexCoords[%index%] = aTextureCoord + vec2(0.0, %sampleIndex% * strength);";
                for (var s = 0; s < t; s++) {
                    var a = o.replace("%index%", s);
                    a = a.replace("%sampleIndex%", s - (r - 1) + ".0"), i += a, i += "\n"
                }
                return n = (n = n.replace("%blur%", i)).replace("%size%", t)
            };
            var u = ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "uniform float strength;", "uniform mat3 projectionMatrix;", "varying vec2 vBlurTexCoords[%size%];", "void main(void)", "{", "gl_Position = vec4((projectionMatrix * vec3((aVertexPosition), 1.0)).xy, 0.0, 1.0);", "%blur%", "}"].join("\n")
        }, {}],
        148: [function (t, e, r) {
            "use strict";
            r.__esModule = !0, r.default = function (t) {
                var e = t.getParameter(t.MAX_VARYING_VECTORS), r = 15;
                for (; e < r;) r -= 2;
                return r
            }
        }, {}],
        149: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n = function () {
                function n(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function (t, e, r) {
                    return e && n(t.prototype, e), r && n(t, r), t
                }
            }(), i = function (t) {
                {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e.default = t, e
                }
            }(t("../../core"));
            t("path");
            var o = function (e) {
                function r() {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, r);
                    var t = function (t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, e.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float m[20];\nuniform float uAlpha;\n\nvoid main(void)\n{\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    if (uAlpha == 0.0) {\n        gl_FragColor = c;\n        return;\n    }\n\n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (c.a > 0.0) {\n      c.rgb /= c.a;\n    }\n\n    vec4 result;\n\n    result.r = (m[0] * c.r);\n        result.r += (m[1] * c.g);\n        result.r += (m[2] * c.b);\n        result.r += (m[3] * c.a);\n        result.r += m[4];\n\n    result.g = (m[5] * c.r);\n        result.g += (m[6] * c.g);\n        result.g += (m[7] * c.b);\n        result.g += (m[8] * c.a);\n        result.g += m[9];\n\n    result.b = (m[10] * c.r);\n       result.b += (m[11] * c.g);\n       result.b += (m[12] * c.b);\n       result.b += (m[13] * c.a);\n       result.b += m[14];\n\n    result.a = (m[15] * c.r);\n       result.a += (m[16] * c.g);\n       result.a += (m[17] * c.b);\n       result.a += (m[18] * c.a);\n       result.a += m[19];\n\n    vec3 rgb = mix(c.rgb, result.rgb, uAlpha);\n\n    // Premultiply alpha again.\n    rgb *= result.a;\n\n    gl_FragColor = vec4(rgb, result.a);\n}\n"));
                    return t.uniforms.m = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], t.alpha = 1, t
                }

                return function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(r, e), r.prototype._loadMatrix = function (t) {
                    var e = t;
                    1 < arguments.length && void 0 !== arguments[1] && arguments[1] && (this._multiply(e, this.uniforms.m, t), e = this._colorMatrix(e)), this.uniforms.m = e
                }, r.prototype._multiply = function (t, e, r) {
                    return t[0] = e[0] * r[0] + e[1] * r[5] + e[2] * r[10] + e[3] * r[15], t[1] = e[0] * r[1] + e[1] * r[6] + e[2] * r[11] + e[3] * r[16], t[2] = e[0] * r[2] + e[1] * r[7] + e[2] * r[12] + e[3] * r[17], t[3] = e[0] * r[3] + e[1] * r[8] + e[2] * r[13] + e[3] * r[18], t[4] = e[0] * r[4] + e[1] * r[9] + e[2] * r[14] + e[3] * r[19] + e[4], t[5] = e[5] * r[0] + e[6] * r[5] + e[7] * r[10] + e[8] * r[15], t[6] = e[5] * r[1] + e[6] * r[6] + e[7] * r[11] + e[8] * r[16], t[7] = e[5] * r[2] + e[6] * r[7] + e[7] * r[12] + e[8] * r[17], t[8] = e[5] * r[3] + e[6] * r[8] + e[7] * r[13] + e[8] * r[18], t[9] = e[5] * r[4] + e[6] * r[9] + e[7] * r[14] + e[8] * r[19] + e[9], t[10] = e[10] * r[0] + e[11] * r[5] + e[12] * r[10] + e[13] * r[15], t[11] = e[10] * r[1] + e[11] * r[6] + e[12] * r[11] + e[13] * r[16], t[12] = e[10] * r[2] + e[11] * r[7] + e[12] * r[12] + e[13] * r[17], t[13] = e[10] * r[3] + e[11] * r[8] + e[12] * r[13] + e[13] * r[18], t[14] = e[10] * r[4] + e[11] * r[9] + e[12] * r[14] + e[13] * r[19] + e[14], t[15] = e[15] * r[0] + e[16] * r[5] + e[17] * r[10] + e[18] * r[15], t[16] = e[15] * r[1] + e[16] * r[6] + e[17] * r[11] + e[18] * r[16], t[17] = e[15] * r[2] + e[16] * r[7] + e[17] * r[12] + e[18] * r[17], t[18] = e[15] * r[3] + e[16] * r[8] + e[17] * r[13] + e[18] * r[18], t[19] = e[15] * r[4] + e[16] * r[9] + e[17] * r[14] + e[18] * r[19] + e[19], t
                }, r.prototype._colorMatrix = function (t) {
                    var e = new Float32Array(t);
                    return e[4] /= 255, e[9] /= 255, e[14] /= 255, e[19] /= 255, e
                }, r.prototype.brightness = function (t, e) {
                    var r = [t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 1, 0];
                    this._loadMatrix(r, e)
                }, r.prototype.greyscale = function (t, e) {
                    var r = [t, t, t, 0, 0, t, t, t, 0, 0, t, t, t, 0, 0, 0, 0, 0, 1, 0];
                    this._loadMatrix(r, e)
                }, r.prototype.blackAndWhite = function (t) {
                    this._loadMatrix([.3, .6, .1, 0, 0, .3, .6, .1, 0, 0, .3, .6, .1, 0, 0, 0, 0, 0, 1, 0], t)
                }, r.prototype.hue = function (t, e) {
                    t = (t || 0) / 180 * Math.PI;
                    var r = Math.cos(t), n = Math.sin(t), i = (0, Math.sqrt)(1 / 3),
                        o = [r + 1 / 3 * (1 - r), 1 / 3 * (1 - r) - i * n, 1 / 3 * (1 - r) + i * n, 0, 0, 1 / 3 * (1 - r) + i * n, r + 1 / 3 * (1 - r), 1 / 3 * (1 - r) - i * n, 0, 0, 1 / 3 * (1 - r) - i * n, 1 / 3 * (1 - r) + i * n, r + 1 / 3 * (1 - r), 0, 0, 0, 0, 0, 1, 0];
                    this._loadMatrix(o, e)
                }, r.prototype.contrast = function (t, e) {
                    var r = (t || 0) + 1, n = -.5 * (r - 1),
                        i = [r, 0, 0, 0, n, 0, r, 0, 0, n, 0, 0, r, 0, n, 0, 0, 0, 1, 0];
                    this._loadMatrix(i, e)
                }, r.prototype.saturate = function () {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0, e = arguments[1],
                        r = 2 * t / 3 + 1, n = -.5 * (r - 1),
                        i = [r, n, n, 0, 0, n, r, n, 0, 0, n, n, r, 0, 0, 0, 0, 0, 1, 0];
                    this._loadMatrix(i, e)
                }, r.prototype.desaturate = function () {
                    this.saturate(-1)
                }, r.prototype.negative = function (t) {
                    this._loadMatrix([0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0], t)
                }, r.prototype.sepia = function (t) {
                    this._loadMatrix([.393, .7689999, .18899999, 0, 0, .349, .6859999, .16799999, 0, 0, .272, .5339999, .13099999, 0, 0, 0, 0, 0, 1, 0], t)
                }, r.prototype.technicolor = function (t) {
                    this._loadMatrix([1.9125277891456083, -.8545344976951645, -.09155508482755585, 0, 11.793603434377337, -.3087833385928097, 1.7658908555458428, -.10601743074722245, 0, -70.35205161461398, -.231103377548616, -.7501899197440212, 1.847597816108189, 0, 30.950940869491138, 0, 0, 0, 1, 0], t)
                }, r.prototype.polaroid = function (t) {
                    this._loadMatrix([1.438, -.062, -.062, 0, 0, -.122, 1.378, -.122, 0, 0, -.016, -.016, 1.483, 0, 0, 0, 0, 0, 1, 0], t)
                }, r.prototype.toBGR = function (t) {
                    this._loadMatrix([0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0], t)
                }, r.prototype.kodachrome = function (t) {
                    this._loadMatrix([1.1285582396593525, -.3967382283601348, -.03992559172921793, 0, 63.72958762196502, -.16404339962244616, 1.0835251566291304, -.05498805115633132, 0, 24.732407896706203, -.16786010706155763, -.5603416277695248, 1.6014850761964943, 0, 35.62982807460946, 0, 0, 0, 1, 0], t)
                }, r.prototype.browni = function (t) {
                    this._loadMatrix([.5997023498159715, .34553243048391263, -.2708298674538042, 0, 47.43192855600873, -.037703249837783157, .8609577587992641, .15059552388459913, 0, -36.96841498319127, .24113635128153335, -.07441037908422492, .44972182064877153, 0, -7.562075277591283, 0, 0, 0, 1, 0], t)
                }, r.prototype.vintage = function (t) {
                    this._loadMatrix([.6279345635605994, .3202183420819367, -.03965408211312453, 0, 9.651285835294123, .02578397704808868, .6441188644374771, .03259127616149294, 0, 7.462829176470591, .0466055556782719, -.0851232987247891, .5241648018700465, 0, 5.159190588235296, 0, 0, 0, 1, 0], t)
                }, r.prototype.colorTone = function (t, e, r, n, i) {
                    var o = ((r = r || 16770432) >> 16 & 255) / 255, s = (r >> 8 & 255) / 255, a = (255 & r) / 255,
                        u = ((n = n || 3375104) >> 16 & 255) / 255, h = (n >> 8 & 255) / 255, l = (255 & n) / 255,
                        c = [.3, .59, .11, 0, 0, o, s, a, t = t || .2, 0, u, h, l, e = e || .15, 0, o - u, s - h, a - l, 0, 0];
                    this._loadMatrix(c, i)
                }, r.prototype.night = function (t, e) {
                    var r = [-2 * (t = t || .1), -t, 0, 0, 0, -t, 0, t, 0, 0, 0, t, 2 * t, 0, 0, 0, 0, 0, 1, 0];
                    this._loadMatrix(r, e)
                }, r.prototype.predator = function (t, e) {
                    var r = [11.224130630493164 * t, -4.794486999511719 * t, -2.8746118545532227 * t, 0 * t, .40342438220977783 * t, -3.6330697536468506 * t, 9.193157196044922 * t, -2.951810836791992 * t, 0 * t, -1.316135048866272 * t, -3.2184197902679443 * t, -4.2375030517578125 * t, 7.476448059082031 * t, 0 * t, .8044459223747253 * t, 0, 0, 0, 1, 0];
                    this._loadMatrix(r, e)
                }, r.prototype.lsd = function (t) {
                    this._loadMatrix([2, -.4, .5, 0, 0, -.5, 2, -.4, 0, 0, -.4, -.5, 3, 0, 0, 0, 0, 0, 1, 0], t)
                }, r.prototype.reset = function () {
                    this._loadMatrix([1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], !1)
                }, n(r, [{
                    key: "matrix", get: function () {
                        return this.uniforms.m
                    }, set: function (t) {
                        this.uniforms.m = t
                    }
                }, {
                    key: "alpha", get: function () {
                        return this.uniforms.uAlpha
                    }, set: function (t) {
                        this.uniforms.uAlpha = t
                    }
                }]), r
            }(i.Filter);
            (r.default = o).prototype.grayscale = o.prototype.greyscale
        }, {"../../core": 65, path: 8}],
        150: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n = function () {
                function n(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function (t, e, r) {
                    return e && n(t.prototype, e), r && n(t, r), t
                }
            }(), s = function (t) {
                {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e.default = t, e
                }
            }(t("../../core"));
            t("path");
            var i = function (i) {
                function o(t, e) {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, o);
                    var r = new s.Matrix;
                    t.renderable = !1;
                    var n = function (t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, i.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 filterMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vFilterCoord;\n\nvoid main(void)\n{\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vFilterCoord = ( filterMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n   vTextureCoord = aTextureCoord;\n}", "varying vec2 vFilterCoord;\nvarying vec2 vTextureCoord;\n\nuniform vec2 scale;\n\nuniform sampler2D uSampler;\nuniform sampler2D mapSampler;\n\nuniform vec4 filterClamp;\n\nvoid main(void)\n{\n   vec4 map =  texture2D(mapSampler, vFilterCoord);\n\n   map -= 0.5;\n   map.xy *= scale;\n\n   gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), filterClamp.xy, filterClamp.zw));\n}\n"));
                    return n.maskSprite = t, n.maskMatrix = r, n.uniforms.mapSampler = t._texture, n.uniforms.filterMatrix = r, n.uniforms.scale = {
                        x: 1,
                        y: 1
                    }, null == e && (e = 20), n.scale = new s.Point(e, e), n
                }

                return function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(o, i), o.prototype.apply = function (t, e, r) {
                    var n = 1 / r.destinationFrame.width * (r.size.width / e.size.width);
                    this.uniforms.filterMatrix = t.calculateSpriteMatrix(this.maskMatrix, this.maskSprite), this.uniforms.scale.x = this.scale.x * n, this.uniforms.scale.y = this.scale.y * n, t.applyFilter(this, e, r)
                }, n(o, [{
                    key: "map", get: function () {
                        return this.uniforms.mapSampler
                    }, set: function (t) {
                        this.uniforms.mapSampler = t
                    }
                }]), o
            }(s.Filter);
            r.default = i
        }, {"../../core": 65, path: 8}],
        151: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n = function (t) {
                {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e.default = t, e
                }
            }(t("../../core"));
            t("path");
            var i = function (t) {
                function e() {
                    return function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), function (t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, t.call(this, "\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nuniform vec4 filterArea;\n\nvarying vec2 vTextureCoord;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvoid texcoords(vec2 fragCoord, vec2 resolution,\n               out vec2 v_rgbNW, out vec2 v_rgbNE,\n               out vec2 v_rgbSW, out vec2 v_rgbSE,\n               out vec2 v_rgbM) {\n    vec2 inverseVP = 1.0 / resolution.xy;\n    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n    v_rgbM = vec2(fragCoord * inverseVP);\n}\n\nvoid main(void) {\n\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n   vTextureCoord = aTextureCoord;\n\n   vec2 fragCoord = vTextureCoord * filterArea.xy;\n\n   texcoords(fragCoord, filterArea.xy, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n}", 'varying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\n/**\n Basic FXAA implementation based on the code on geeks3d.com with the\n modification that the texture2DLod stuff was removed since it\'s\n unsupported by WebGL.\n \n --\n \n From:\n https://github.com/mitsuhiko/webgl-meincraft\n \n Copyright (c) 2011 by Armin Ronacher.\n \n Some rights reserved.\n \n Redistribution and use in source and binary forms, with or without\n modification, are permitted provided that the following conditions are\n met:\n \n * Redistributions of source code must retain the above copyright\n notice, this list of conditions and the following disclaimer.\n \n * Redistributions in binary form must reproduce the above\n copyright notice, this list of conditions and the following\n disclaimer in the documentation and/or other materials provided\n with the distribution.\n \n * The names of the contributors may not be used to endorse or\n promote products derived from this software without specific\n prior written permission.\n \n THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\n LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\n A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\n OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\n SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\n LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\n DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\n THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\n OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n */\n\n#ifndef FXAA_REDUCE_MIN\n#define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#endif\n#ifndef FXAA_REDUCE_MUL\n#define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#endif\n#ifndef FXAA_SPAN_MAX\n#define FXAA_SPAN_MAX     8.0\n#endif\n\n//optimized version for mobile, where dependent\n//texture reads can be a bottleneck\nvec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 resolution,\n          vec2 v_rgbNW, vec2 v_rgbNE,\n          vec2 v_rgbSW, vec2 v_rgbSE,\n          vec2 v_rgbM) {\n    vec4 color;\n    mediump vec2 inverseVP = vec2(1.0 / resolution.x, 1.0 / resolution.y);\n    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\n    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;\n    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\n    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\n    vec4 texColor = texture2D(tex, v_rgbM);\n    vec3 rgbM  = texColor.xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n    \n    mediump vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n    \n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n    \n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n                  dir * rcpDirMin)) * inverseVP;\n    \n    vec3 rgbA = 0.5 * (\n                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n    \n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, texColor.a);\n    else\n        color = vec4(rgbB, texColor.a);\n    return color;\n}\n\nvoid main() {\n\n      vec2 fragCoord = vTextureCoord * filterArea.xy;\n\n      vec4 color;\n\n    color = fxaa(uSampler, fragCoord, filterArea.xy, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n\n      gl_FragColor = color;\n}\n'))
                }

                return function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, t), e
            }(n.Filter);
            r.default = i
        }, {"../../core": 65, path: 8}],
        152: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n = t("./fxaa/FXAAFilter");
            Object.defineProperty(r, "FXAAFilter", {
                enumerable: !0, get: function () {
                    return c(n).default
                }
            });
            var i = t("./noise/NoiseFilter");
            Object.defineProperty(r, "NoiseFilter", {
                enumerable: !0, get: function () {
                    return c(i).default
                }
            });
            var o = t("./displacement/DisplacementFilter");
            Object.defineProperty(r, "DisplacementFilter", {
                enumerable: !0, get: function () {
                    return c(o).default
                }
            });
            var s = t("./blur/BlurFilter");
            Object.defineProperty(r, "BlurFilter", {
                enumerable: !0, get: function () {
                    return c(s).default
                }
            });
            var a = t("./blur/BlurXFilter");
            Object.defineProperty(r, "BlurXFilter", {
                enumerable: !0, get: function () {
                    return c(a).default
                }
            });
            var u = t("./blur/BlurYFilter");
            Object.defineProperty(r, "BlurYFilter", {
                enumerable: !0, get: function () {
                    return c(u).default
                }
            });
            var h = t("./colormatrix/ColorMatrixFilter");
            Object.defineProperty(r, "ColorMatrixFilter", {
                enumerable: !0, get: function () {
                    return c(h).default
                }
            });
            var l = t("./void/VoidFilter");

            function c(t) {
                return t && t.__esModule ? t : {default: t}
            }

            Object.defineProperty(r, "VoidFilter", {
                enumerable: !0, get: function () {
                    return c(l).default
                }
            })
        }, {
            "./blur/BlurFilter": 143,
            "./blur/BlurXFilter": 144,
            "./blur/BlurYFilter": 145,
            "./colormatrix/ColorMatrixFilter": 149,
            "./displacement/DisplacementFilter": 150,
            "./fxaa/FXAAFilter": 151,
            "./noise/NoiseFilter": 153,
            "./void/VoidFilter": 154
        }],
        153: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var o = function () {
                function n(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function (t, e, r) {
                    return e && n(t.prototype, e), r && n(t, r), t
                }
            }(), n = function (t) {
                {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e.default = t, e
                }
            }(t("../../core"));
            t("path");
            var i = function (n) {
                function i() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : .5,
                        e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : Math.random();
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, i);
                    var r = function (t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, n.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "precision highp float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform float uNoise;\nuniform float uSeed;\nuniform sampler2D uSampler;\n\nfloat rand(vec2 co)\n{\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main()\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n    float randomValue = rand(gl_FragCoord.xy * uSeed);\n    float diff = (randomValue - 0.5) * uNoise;\n\n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (color.a > 0.0) {\n        color.rgb /= color.a;\n    }\n\n    color.r += diff;\n    color.g += diff;\n    color.b += diff;\n\n    // Premultiply alpha again.\n    color.rgb *= color.a;\n\n    gl_FragColor = color;\n}\n"));
                    return r.noise = t, r.seed = e, r
                }

                return function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(i, n), o(i, [{
                    key: "noise", get: function () {
                        return this.uniforms.uNoise
                    }, set: function (t) {
                        this.uniforms.uNoise = t
                    }
                }, {
                    key: "seed", get: function () {
                        return this.uniforms.uSeed
                    }, set: function (t) {
                        this.uniforms.uSeed = t
                    }
                }]), i
            }(n.Filter);
            r.default = i
        }, {"../../core": 65, path: 8}],
        154: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n = function (t) {
                {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e.default = t, e
                }
            }(t("../../core"));
            t("path");
            var i = function (e) {
                function r() {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, r);
                    var t = function (t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, e.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n}\n"));
                    return t.glShaderKey = "void", t
                }

                return function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(r, e), r
            }(n.Filter);
            r.default = i
        }, {"../../core": 65, path: 8}],
        155: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n = function () {
                function n(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function (t, e, r) {
                    return e && n(t.prototype, e), r && n(t, r), t
                }
            }(), i = function (t) {
                {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e.default = t, e
                }
            }(t("../core"));
            var o = function () {
                function t() {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.global = new i.Point, this.target = null, this.originalEvent = null, this.identifier = null, this.isPrimary = !1, this.button = 0, this.buttons = 0, this.width = 0, this.height = 0, this.tiltX = 0, this.tiltY = 0, this.pointerType = null, this.pressure = 0, this.rotationAngle = 0, this.twist = 0, this.tangentialPressure = 0
                }

                return t.prototype.getLocalPosition = function (t, e, r) {
                    return t.worldTransform.applyInverse(r || this.global, e)
                }, t.prototype._copyEvent = function (t) {
                    t.isPrimary && (this.isPrimary = !0), this.button = t.button, this.buttons = t.buttons, this.width = t.width, this.height = t.height, this.tiltX = t.tiltX, this.tiltY = t.tiltY, this.pointerType = t.pointerType, this.pressure = t.pressure, this.rotationAngle = t.rotationAngle, this.twist = t.twist || 0, this.tangentialPressure = t.tangentialPressure || 0
                }, t.prototype._reset = function () {
                    this.isPrimary = !1
                }, n(t, [{
                    key: "pointerId", get: function () {
                        return this.identifier
                    }
                }]), t
            }();
            r.default = o
        }, {"../core": 65}],
        156: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n = function () {
                function t() {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.stopped = !1, this.target = null, this.currentTarget = null, this.type = null, this.data = null
                }

                return t.prototype.stopPropagation = function () {
                    this.stopped = !0
                }, t.prototype._reset = function () {
                    this.stopped = !1, this.currentTarget = null, this.target = null
                }, t
            }();
            r.default = n
        }, {}],
        157: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, s = function (t) {
                    {
                        if (t && t.__esModule) return t;
                        var e = {};
                        if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                        return e.default = t, e
                    }
                }(t("../core")), a = h(t("./InteractionData")), u = h(t("./InteractionEvent")),
                c = h(t("./InteractionTrackingData")), n = h(t("eventemitter3")), i = h(t("./interactiveTarget"));

            function h(t) {
                return t && t.__esModule ? t : {default: t}
            }

            s.utils.mixins.delayMixin(s.DisplayObject.prototype, i.default);
            var l = "MOUSE", d = {target: null, data: {global: null}}, f = function (n) {
                function i(t, e) {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, i);
                    var r = function (t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, n.call(this));
                    return e = e || {}, r.renderer = t, r.autoPreventDefault = void 0 === e.autoPreventDefault || e.autoPreventDefault, r.interactionFrequency = e.interactionFrequency || 10, r.mouse = new a.default, r.mouse.identifier = l, r.mouse.global.set(-999999), r.activeInteractionData = {}, r.activeInteractionData[l] = r.mouse, r.interactionDataPool = [], r.eventData = new u.default, r.interactionDOMElement = null, r.moveWhenInside = !1, r.eventsAdded = !1, r.mouseOverRenderer = !1, r.supportsTouchEvents = "ontouchstart" in window, r.supportsPointerEvents = !!window.PointerEvent, r.onPointerUp = r.onPointerUp.bind(r), r.processPointerUp = r.processPointerUp.bind(r), r.onPointerCancel = r.onPointerCancel.bind(r), r.processPointerCancel = r.processPointerCancel.bind(r), r.onPointerDown = r.onPointerDown.bind(r), r.processPointerDown = r.processPointerDown.bind(r), r.onPointerMove = r.onPointerMove.bind(r), r.processPointerMove = r.processPointerMove.bind(r), r.onPointerOut = r.onPointerOut.bind(r), r.processPointerOverOut = r.processPointerOverOut.bind(r), r.onPointerOver = r.onPointerOver.bind(r), r.cursorStyles = {
                        default: "inherit",
                        pointer: "pointer"
                    }, r.currentCursorMode = null, r.cursor = null, r._tempPoint = new s.Point, r.resolution = 1, r.setTargetElement(r.renderer.view, r.renderer.resolution), r
                }

                return function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(i, n), i.prototype.hitTest = function (t, e) {
                    return d.target = null, d.data.global = t, e || (e = this.renderer._lastObjectRendered), this.processInteractive(d, e, null, !0), d.target
                }, i.prototype.setTargetElement = function (t) {
                    var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1;
                    this.removeEvents(), this.interactionDOMElement = t, this.resolution = e, this.addEvents()
                }, i.prototype.addEvents = function () {
                    this.interactionDOMElement && (s.ticker.shared.add(this.update, this, s.UPDATE_PRIORITY.INTERACTION), window.navigator.msPointerEnabled ? (this.interactionDOMElement.style["-ms-content-zooming"] = "none", this.interactionDOMElement.style["-ms-touch-action"] = "none") : this.supportsPointerEvents && (this.interactionDOMElement.style["touch-action"] = "none"), this.supportsPointerEvents ? (window.document.addEventListener("pointermove", this.onPointerMove, !0), this.interactionDOMElement.addEventListener("pointerdown", this.onPointerDown, !0), this.interactionDOMElement.addEventListener("pointerleave", this.onPointerOut, !0), this.interactionDOMElement.addEventListener("pointerover", this.onPointerOver, !0), window.addEventListener("pointercancel", this.onPointerCancel, !0), window.addEventListener("pointerup", this.onPointerUp, !0)) : (window.document.addEventListener("mousemove", this.onPointerMove, !0), this.interactionDOMElement.addEventListener("mousedown", this.onPointerDown, !0), this.interactionDOMElement.addEventListener("mouseout", this.onPointerOut, !0), this.interactionDOMElement.addEventListener("mouseover", this.onPointerOver, !0), window.addEventListener("mouseup", this.onPointerUp, !0)), this.supportsTouchEvents && (this.interactionDOMElement.addEventListener("touchstart", this.onPointerDown, !0), this.interactionDOMElement.addEventListener("touchcancel", this.onPointerCancel, !0), this.interactionDOMElement.addEventListener("touchend", this.onPointerUp, !0), this.interactionDOMElement.addEventListener("touchmove", this.onPointerMove, !0)), this.eventsAdded = !0)
                }, i.prototype.removeEvents = function () {
                    this.interactionDOMElement && (s.ticker.shared.remove(this.update, this), window.navigator.msPointerEnabled ? (this.interactionDOMElement.style["-ms-content-zooming"] = "", this.interactionDOMElement.style["-ms-touch-action"] = "") : this.supportsPointerEvents && (this.interactionDOMElement.style["touch-action"] = ""), this.supportsPointerEvents ? (window.document.removeEventListener("pointermove", this.onPointerMove, !0), this.interactionDOMElement.removeEventListener("pointerdown", this.onPointerDown, !0), this.interactionDOMElement.removeEventListener("pointerleave", this.onPointerOut, !0), this.interactionDOMElement.removeEventListener("pointerover", this.onPointerOver, !0), window.removeEventListener("pointercancel", this.onPointerCancel, !0), window.removeEventListener("pointerup", this.onPointerUp, !0)) : (window.document.removeEventListener("mousemove", this.onPointerMove, !0), this.interactionDOMElement.removeEventListener("mousedown", this.onPointerDown, !0), this.interactionDOMElement.removeEventListener("mouseout", this.onPointerOut, !0), this.interactionDOMElement.removeEventListener("mouseover", this.onPointerOver, !0), window.removeEventListener("mouseup", this.onPointerUp, !0)), this.supportsTouchEvents && (this.interactionDOMElement.removeEventListener("touchstart", this.onPointerDown, !0), this.interactionDOMElement.removeEventListener("touchcancel", this.onPointerCancel, !0), this.interactionDOMElement.removeEventListener("touchend", this.onPointerUp, !0), this.interactionDOMElement.removeEventListener("touchmove", this.onPointerMove, !0)), this.interactionDOMElement = null, this.eventsAdded = !1)
                }, i.prototype.update = function (t) {
                    if (this._deltaTime += t, !(this._deltaTime < this.interactionFrequency) && (this._deltaTime = 0, this.interactionDOMElement)) if (this.didMove) this.didMove = !1; else {
                        for (var e in this.cursor = null, this.activeInteractionData) if (this.activeInteractionData.hasOwnProperty(e)) {
                            var r = this.activeInteractionData[e];
                            if (r.originalEvent && "touch" !== r.pointerType) {
                                var n = this.configureInteractionEventForDOMEvent(this.eventData, r.originalEvent, r);
                                this.processInteractive(n, this.renderer._lastObjectRendered, this.processPointerOverOut, !0)
                            }
                        }
                        this.setCursorMode(this.cursor)
                    }
                }, i.prototype.setCursorMode = function (t) {
                    if (t = t || "default", this.currentCursorMode !== t) {
                        this.currentCursorMode = t;
                        var e = this.cursorStyles[t];
                        if (e) switch (void 0 === e ? "undefined" : o(e)) {
                            case"string":
                                this.interactionDOMElement.style.cursor = e;
                                break;
                            case"function":
                                e(t);
                                break;
                            case"object":
                                Object.assign(this.interactionDOMElement.style, e)
                        } else "string" != typeof t || Object.prototype.hasOwnProperty.call(this.cursorStyles, t) || (this.interactionDOMElement.style.cursor = t)
                    }
                }, i.prototype.dispatchEvent = function (t, e, r) {
                    r.stopped || (r.currentTarget = t, r.type = e, t.emit(e, r), t[e] && t[e](r))
                }, i.prototype.mapPositionToPoint = function (t, e, r) {
                    var n = void 0;
                    n = this.interactionDOMElement.parentElement ? this.interactionDOMElement.getBoundingClientRect() : {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    };
                    var i = navigator.isCocoonJS ? this.resolution : 1 / this.resolution;
                    t.x = (e - n.left) * (this.interactionDOMElement.width / n.width) * i, t.y = (r - n.top) * (this.interactionDOMElement.height / n.height) * i
                }, i.prototype.processInteractive = function (t, e, r, n, i) {
                    if (!e || !e.visible) return !1;
                    var o = t.data.global, s = !1, a = i = e.interactive || i;
                    if (e.hitArea ? a = !1 : n && e._mask && (e._mask.containsPoint(o) || (n = !1)), e.interactiveChildren && e.children) for (var u = e.children, h = u.length - 1; 0 <= h; h--) {
                        var l = u[h], c = this.processInteractive(t, l, r, n, a);
                        if (c) {
                            if (!l.parent) continue;
                            a = !1, c && (t.target && (n = !1), s = !0)
                        }
                    }
                    return i && (n && !t.target && (e.hitArea ? (e.worldTransform.applyInverse(o, this._tempPoint), e.hitArea.contains(this._tempPoint.x, this._tempPoint.y) && (s = !0)) : e.containsPoint && e.containsPoint(o) && (s = !0)), e.interactive && (s && !t.target && (t.target = e), r && r(t, e, !!s))), s
                }, i.prototype.onPointerDown = function (t) {
                    if (!this.supportsTouchEvents || "touch" !== t.pointerType) {
                        var e = this.normalizeToPointerData(t);
                        this.autoPreventDefault && e[0].isNormalized && t.preventDefault();
                        for (var r = e.length, n = 0; n < r; n++) {
                            var i = e[n], o = this.getInteractionDataForPointerId(i),
                                s = this.configureInteractionEventForDOMEvent(this.eventData, i, o);
                            if (s.data.originalEvent = t, this.processInteractive(s, this.renderer._lastObjectRendered, this.processPointerDown, !0), this.emit("pointerdown", s), "touch" === i.pointerType) this.emit("touchstart", s); else if ("mouse" === i.pointerType || "pen" === i.pointerType) {
                                var a = 2 === i.button;
                                this.emit(a ? "rightdown" : "mousedown", this.eventData)
                            }
                        }
                    }
                }, i.prototype.processPointerDown = function (t, e, r) {
                    var n = t.data, i = t.data.identifier;
                    if (r) if (e.trackedPointers[i] || (e.trackedPointers[i] = new c.default(i)), this.dispatchEvent(e, "pointerdown", t), "touch" === n.pointerType) this.dispatchEvent(e, "touchstart", t); else if ("mouse" === n.pointerType || "pen" === n.pointerType) {
                        var o = 2 === n.button;
                        o ? e.trackedPointers[i].rightDown = !0 : e.trackedPointers[i].leftDown = !0, this.dispatchEvent(e, o ? "rightdown" : "mousedown", t)
                    }
                }, i.prototype.onPointerComplete = function (t, e, r) {
                    for (var n = this.normalizeToPointerData(t), i = n.length, o = t.target !== this.interactionDOMElement ? "outside" : "", s = 0; s < i; s++) {
                        var a = n[s], u = this.getInteractionDataForPointerId(a),
                            h = this.configureInteractionEventForDOMEvent(this.eventData, a, u);
                        if (h.data.originalEvent = t, this.processInteractive(h, this.renderer._lastObjectRendered, r, e || !o), this.emit(e ? "pointercancel" : "pointerup" + o, h), "mouse" === a.pointerType || "pen" === a.pointerType) {
                            var l = 2 === a.button;
                            this.emit(l ? "rightup" + o : "mouseup" + o, h)
                        } else "touch" === a.pointerType && (this.emit(e ? "touchcancel" : "touchend" + o, h), this.releaseInteractionDataForPointerId(a.pointerId, u))
                    }
                }, i.prototype.onPointerCancel = function (t) {
                    this.supportsTouchEvents && "touch" === t.pointerType || this.onPointerComplete(t, !0, this.processPointerCancel)
                }, i.prototype.processPointerCancel = function (t, e) {
                    var r = t.data, n = t.data.identifier;
                    void 0 !== e.trackedPointers[n] && (delete e.trackedPointers[n], this.dispatchEvent(e, "pointercancel", t), "touch" === r.pointerType && this.dispatchEvent(e, "touchcancel", t))
                }, i.prototype.onPointerUp = function (t) {
                    this.supportsTouchEvents && "touch" === t.pointerType || this.onPointerComplete(t, !1, this.processPointerUp)
                }, i.prototype.processPointerUp = function (t, e, r) {
                    var n = t.data, i = t.data.identifier, o = e.trackedPointers[i], s = "touch" === n.pointerType;
                    if ("mouse" === n.pointerType || "pen" === n.pointerType) {
                        var a = 2 === n.button, u = c.default.FLAGS, h = a ? u.RIGHT_DOWN : u.LEFT_DOWN,
                            l = void 0 !== o && o.flags & h;
                        r ? (this.dispatchEvent(e, a ? "rightup" : "mouseup", t), l && this.dispatchEvent(e, a ? "rightclick" : "click", t)) : l && this.dispatchEvent(e, a ? "rightupoutside" : "mouseupoutside", t), o && (a ? o.rightDown = !1 : o.leftDown = !1)
                    }
                    r ? (this.dispatchEvent(e, "pointerup", t), s && this.dispatchEvent(e, "touchend", t), o && (this.dispatchEvent(e, "pointertap", t), s && (this.dispatchEvent(e, "tap", t), o.over = !1))) : o && (this.dispatchEvent(e, "pointerupoutside", t), s && this.dispatchEvent(e, "touchendoutside", t)), o && o.none && delete e.trackedPointers[i]
                }, i.prototype.onPointerMove = function (t) {
                    if (!this.supportsTouchEvents || "touch" !== t.pointerType) {
                        var e = this.normalizeToPointerData(t);
                        "mouse" === e[0].pointerType && (this.didMove = !0, this.cursor = null);
                        for (var r = e.length, n = 0; n < r; n++) {
                            var i = e[n], o = this.getInteractionDataForPointerId(i),
                                s = this.configureInteractionEventForDOMEvent(this.eventData, i, o);
                            s.data.originalEvent = t;
                            var a = "touch" !== i.pointerType || this.moveWhenInside;
                            this.processInteractive(s, this.renderer._lastObjectRendered, this.processPointerMove, a), this.emit("pointermove", s), "touch" === i.pointerType && this.emit("touchmove", s), "mouse" !== i.pointerType && "pen" !== i.pointerType || this.emit("mousemove", s)
                        }
                        "mouse" === e[0].pointerType && this.setCursorMode(this.cursor)
                    }
                }, i.prototype.processPointerMove = function (t, e, r) {
                    var n = t.data, i = "touch" === n.pointerType,
                        o = "mouse" === n.pointerType || "pen" === n.pointerType;
                    o && this.processPointerOverOut(t, e, r), this.moveWhenInside && !r || (this.dispatchEvent(e, "pointermove", t), i && this.dispatchEvent(e, "touchmove", t), o && this.dispatchEvent(e, "mousemove", t))
                }, i.prototype.onPointerOut = function (t) {
                    if (!this.supportsTouchEvents || "touch" !== t.pointerType) {
                        var e = this.normalizeToPointerData(t)[0];
                        "mouse" === e.pointerType && (this.mouseOverRenderer = !1, this.setCursorMode(null));
                        var r = this.getInteractionDataForPointerId(e),
                            n = this.configureInteractionEventForDOMEvent(this.eventData, e, r);
                        n.data.originalEvent = e, this.processInteractive(n, this.renderer._lastObjectRendered, this.processPointerOverOut, !1), this.emit("pointerout", n), "mouse" === e.pointerType || "pen" === e.pointerType ? this.emit("mouseout", n) : this.releaseInteractionDataForPointerId(r.identifier)
                    }
                }, i.prototype.processPointerOverOut = function (t, e, r) {
                    var n = t.data, i = t.data.identifier, o = "mouse" === n.pointerType || "pen" === n.pointerType,
                        s = e.trackedPointers[i];
                    r && !s && (s = e.trackedPointers[i] = new c.default(i)), void 0 !== s && (r && this.mouseOverRenderer ? (s.over || (s.over = !0, this.dispatchEvent(e, "pointerover", t), o && this.dispatchEvent(e, "mouseover", t)), o && null === this.cursor && (this.cursor = e.cursor)) : s.over && (s.over = !1, this.dispatchEvent(e, "pointerout", this.eventData), o && this.dispatchEvent(e, "mouseout", t), s.none && delete e.trackedPointers[i]))
                }, i.prototype.onPointerOver = function (t) {
                    var e = this.normalizeToPointerData(t)[0], r = this.getInteractionDataForPointerId(e),
                        n = this.configureInteractionEventForDOMEvent(this.eventData, e, r);
                    "mouse" === (n.data.originalEvent = e).pointerType && (this.mouseOverRenderer = !0), this.emit("pointerover", n), "mouse" !== e.pointerType && "pen" !== e.pointerType || this.emit("mouseover", n)
                }, i.prototype.getInteractionDataForPointerId = function (t) {
                    var e = t.pointerId, r = void 0;
                    return e === l || "mouse" === t.pointerType ? r = this.mouse : this.activeInteractionData[e] ? r = this.activeInteractionData[e] : ((r = this.interactionDataPool.pop() || new a.default).identifier = e, this.activeInteractionData[e] = r), r._copyEvent(t), r
                }, i.prototype.releaseInteractionDataForPointerId = function (t) {
                    var e = this.activeInteractionData[t];
                    e && (delete this.activeInteractionData[t], e._reset(), this.interactionDataPool.push(e))
                }, i.prototype.configureInteractionEventForDOMEvent = function (t, e, r) {
                    return t.data = r, this.mapPositionToPoint(r.global, e.clientX, e.clientY), navigator.isCocoonJS && "touch" === e.pointerType && (r.global.x = r.global.x / this.resolution, r.global.y = r.global.y / this.resolution), "touch" === e.pointerType && (e.globalX = r.global.x, e.globalY = r.global.y), r.originalEvent = e, t._reset(), t
                }, i.prototype.normalizeToPointerData = function (t) {
                    var e = [];
                    if (this.supportsTouchEvents && t instanceof TouchEvent) for (var r = 0, n = t.changedTouches.length; r < n; r++) {
                        var i = t.changedTouches[r];
                        void 0 === i.button && (i.button = t.touches.length ? 1 : 0), void 0 === i.buttons && (i.buttons = t.touches.length ? 1 : 0), void 0 === i.isPrimary && (i.isPrimary = 1 === t.touches.length && "touchstart" === t.type), void 0 === i.width && (i.width = i.radiusX || 1), void 0 === i.height && (i.height = i.radiusY || 1), void 0 === i.tiltX && (i.tiltX = 0), void 0 === i.tiltY && (i.tiltY = 0), void 0 === i.pointerType && (i.pointerType = "touch"), void 0 === i.pointerId && (i.pointerId = i.identifier || 0), void 0 === i.pressure && (i.pressure = i.force || .5), i.twist = 0, void (i.tangentialPressure = 0) === i.layerX && (i.layerX = i.offsetX = i.clientX), void 0 === i.layerY && (i.layerY = i.offsetY = i.clientY), i.isNormalized = !0, e.push(i)
                    } else !(t instanceof MouseEvent) || this.supportsPointerEvents && t instanceof window.PointerEvent || (void 0 === t.isPrimary && (t.isPrimary = !0), void 0 === t.width && (t.width = 1), void 0 === t.height && (t.height = 1), void 0 === t.tiltX && (t.tiltX = 0), void 0 === t.tiltY && (t.tiltY = 0), void 0 === t.pointerType && (t.pointerType = "mouse"), void 0 === t.pointerId && (t.pointerId = l), void 0 === t.pressure && (t.pressure = .5), t.twist = 0, t.tangentialPressure = 0, t.isNormalized = !0), e.push(t);
                    return e
                }, i.prototype.destroy = function () {
                    this.removeEvents(), this.removeAllListeners(), this.renderer = null, this.mouse = null, this.eventData = null, this.interactionDOMElement = null, this.onPointerDown = null, this.processPointerDown = null, this.onPointerUp = null, this.processPointerUp = null, this.onPointerCancel = null, this.processPointerCancel = null, this.onPointerMove = null, this.processPointerMove = null, this.onPointerOut = null, this.processPointerOverOut = null, this.onPointerOver = null, this._tempPoint = null
                }, i
            }(n.default);
            r.default = f, s.WebGLRenderer.registerPlugin("interaction", f), s.CanvasRenderer.registerPlugin("interaction", f)
        }, {
            "../core": 65,
            "./InteractionData": 155,
            "./InteractionEvent": 156,
            "./InteractionTrackingData": 158,
            "./interactiveTarget": 160,
            eventemitter3: 3
        }],
        158: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n = function () {
                function n(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function (t, e, r) {
                    return e && n(t.prototype, e), r && n(t, r), t
                }
            }();
            var i = function () {
                function e(t) {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this._pointerId = t, this._flags = e.FLAGS.NONE
                }

                return e.prototype._doSet = function (t, e) {
                    this._flags = e ? this._flags | t : this._flags & ~t
                }, n(e, [{
                    key: "pointerId", get: function () {
                        return this._pointerId
                    }
                }, {
                    key: "flags", get: function () {
                        return this._flags
                    }, set: function (t) {
                        this._flags = t
                    }
                }, {
                    key: "none", get: function () {
                        return this._flags === this.constructor.FLAGS.NONE
                    }
                }, {
                    key: "over", get: function () {
                        return 0 != (this._flags & this.constructor.FLAGS.OVER)
                    }, set: function (t) {
                        this._doSet(this.constructor.FLAGS.OVER, t)
                    }
                }, {
                    key: "rightDown", get: function () {
                        return 0 != (this._flags & this.constructor.FLAGS.RIGHT_DOWN)
                    }, set: function (t) {
                        this._doSet(this.constructor.FLAGS.RIGHT_DOWN, t)
                    }
                }, {
                    key: "leftDown", get: function () {
                        return 0 != (this._flags & this.constructor.FLAGS.LEFT_DOWN)
                    }, set: function (t) {
                        this._doSet(this.constructor.FLAGS.LEFT_DOWN, t)
                    }
                }]), e
            }();
            (r.default = i).FLAGS = Object.freeze({NONE: 0, OVER: 1, LEFT_DOWN: 2, RIGHT_DOWN: 4})
        }, {}],
        159: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n = t("./InteractionData");
            Object.defineProperty(r, "InteractionData", {
                enumerable: !0, get: function () {
                    return u(n).default
                }
            });
            var i = t("./InteractionManager");
            Object.defineProperty(r, "InteractionManager", {
                enumerable: !0, get: function () {
                    return u(i).default
                }
            });
            var o = t("./interactiveTarget");
            Object.defineProperty(r, "interactiveTarget", {
                enumerable: !0, get: function () {
                    return u(o).default
                }
            });
            var s = t("./InteractionTrackingData");
            Object.defineProperty(r, "InteractionTrackingData", {
                enumerable: !0, get: function () {
                    return u(s).default
                }
            });
            var a = t("./InteractionEvent");

            function u(t) {
                return t && t.__esModule ? t : {default: t}
            }

            Object.defineProperty(r, "InteractionEvent", {
                enumerable: !0, get: function () {
                    return u(a).default
                }
            })
        }, {
            "./InteractionData": 155,
            "./InteractionEvent": 156,
            "./InteractionManager": 157,
            "./InteractionTrackingData": 158,
            "./interactiveTarget": 160
        }],
        160: [function (t, e, r) {
            "use strict";
            r.__esModule = !0, r.default = {
                interactive: !1, interactiveChildren: !0, hitArea: null, get buttonMode() {
                    return "pointer" === this.cursor
                }, set buttonMode(t) {
                    t ? this.cursor = "pointer" : "pointer" === this.cursor && (this.cursor = null)
                }, cursor: null, get trackedPointers() {
                    return void 0 === this._trackedPointers && (this._trackedPointers = {}), this._trackedPointers
                }, _trackedPointers: void 0
            }
        }, {}],
        161: [function (t, e, r) {
            "use strict";
            r.__esModule = !0, r.parse = u, r.default = function () {
                return function (e, r) {
                    if (e.data && e.type === a.Resource.TYPE.XML) if (0 !== e.data.getElementsByTagName("page").length && 0 !== e.data.getElementsByTagName("info").length && null !== e.data.getElementsByTagName("info")[0].getAttribute("face")) {
                        var t = e.isDataUrl ? "" : o.dirname(e.url);
                        e.isDataUrl && ("." === t && (t = ""), this.baseUrl && t && "/" === this.baseUrl.charAt(this.baseUrl.length - 1) && (t += "/")), (t = t.replace(this.baseUrl, "")) && "/" !== t.charAt(t.length - 1) && (t += "/");
                        var n = t + e.data.getElementsByTagName("page")[0].getAttribute("file");
                        if (s.utils.TextureCache[n]) u(e, s.utils.TextureCache[n]), r(); else {
                            var i = {
                                crossOrigin: e.crossOrigin,
                                loadType: a.Resource.LOAD_TYPE.IMAGE,
                                metadata: e.metadata.imageMetadata,
                                parentResource: e
                            };
                            this.add(e.name + "_image", n, i, function (t) {
                                u(e, t.texture), r()
                            })
                        }
                    } else r(); else r()
                }
            };
            var o = function (t) {
                {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e.default = t, e
                }
            }(t("path")), s = t("../core"), a = t("resource-loader"), n = t("../extras");

            function u(t, e) {
                t.bitmapFont = n.BitmapText.registerFont(t.data, e)
            }
        }, {"../core": 65, "../extras": 141, path: 8, "resource-loader": 36}],
        162: [function (t, e, r) {
            "use strict";
            r.__esModule = !0, r.shared = r.Resource = r.textureParser = r.getResourcePath = r.spritesheetParser = r.parseBitmapFontData = r.bitmapFontParser = r.Loader = void 0;
            var n = t("./bitmapFontParser");
            Object.defineProperty(r, "bitmapFontParser", {
                enumerable: !0, get: function () {
                    return h(n).default
                }
            }), Object.defineProperty(r, "parseBitmapFontData", {
                enumerable: !0, get: function () {
                    return n.parse
                }
            });
            var i = t("./spritesheetParser");
            Object.defineProperty(r, "spritesheetParser", {
                enumerable: !0, get: function () {
                    return h(i).default
                }
            }), Object.defineProperty(r, "getResourcePath", {
                enumerable: !0, get: function () {
                    return i.getResourcePath
                }
            });
            var o = t("./textureParser");
            Object.defineProperty(r, "textureParser", {
                enumerable: !0, get: function () {
                    return h(o).default
                }
            });
            var s = t("resource-loader");
            Object.defineProperty(r, "Resource", {
                enumerable: !0, get: function () {
                    return s.Resource
                }
            });
            var a = h(t("../core/Application")), u = h(t("./loader"));

            function h(t) {
                return t && t.__esModule ? t : {default: t}
            }

            r.Loader = u.default;
            var l = new u.default;
            l.destroy = function () {
            }, r.shared = l;
            var c = a.default.prototype;
            c._loader = null, Object.defineProperty(c, "loader", {
                get: function () {
                    if (!this._loader) {
                        var t = this._options.sharedLoader;
                        this._loader = t ? l : new u.default
                    }
                    return this._loader
                }
            }), c._parentDestroy = c.destroy, c.destroy = function (t) {
                this._loader && (this._loader.destroy(), this._loader = null), this._parentDestroy(t)
            }
        }, {
            "../core/Application": 43,
            "./bitmapFontParser": 161,
            "./loader": 163,
            "./spritesheetParser": 164,
            "./textureParser": 165,
            "resource-loader": 36
        }],
        163: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n = h(t("resource-loader")), i = t("resource-loader/lib/middlewares/parsing/blob"),
                s = h(t("eventemitter3")), o = h(t("./textureParser")), a = h(t("./spritesheetParser")),
                u = h(t("./bitmapFontParser"));

            function h(t) {
                return t && t.__esModule ? t : {default: t}
            }

            var l = function (i) {
                function o(t, e) {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, o);
                    var n = function (t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, i.call(this, t, e));
                    s.default.call(n);
                    for (var r = 0; r < o._pixiMiddleware.length; ++r) n.use(o._pixiMiddleware[r]());
                    return n.onStart.add(function (t) {
                        return n.emit("start", t)
                    }), n.onProgress.add(function (t, e) {
                        return n.emit("progress", t, e)
                    }), n.onError.add(function (t, e, r) {
                        return n.emit("error", t, e, r)
                    }), n.onLoad.add(function (t, e) {
                        return n.emit("load", t, e)
                    }), n.onComplete.add(function (t, e) {
                        return n.emit("complete", t, e)
                    }), n
                }

                return function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(o, i), o.addPixiMiddleware = function (t) {
                    o._pixiMiddleware.push(t)
                }, o.prototype.destroy = function () {
                    this.removeAllListeners(), this.reset()
                }, o
            }(n.default);
            for (var c in r.default = l, s.default.prototype) l.prototype[c] = s.default.prototype[c];
            l._pixiMiddleware = [i.blobMiddlewareFactory, o.default, a.default, u.default];
            var d = n.default.Resource;
            d.setExtensionXhrType("fnt", d.XHR_RESPONSE_TYPE.DOCUMENT)
        }, {
            "./bitmapFontParser": 161,
            "./spritesheetParser": 164,
            "./textureParser": 165,
            eventemitter3: 3,
            "resource-loader": 36,
            "resource-loader/lib/middlewares/parsing/blob": 37
        }],
        164: [function (t, e, r) {
            "use strict";
            r.__esModule = !0, r.default = function () {
                return function (r, n) {
                    var t = r.name + "_image";
                    if (r.data && r.type === o.Resource.TYPE.JSON && r.data.frames && !this.resources[t]) {
                        var e = {
                            crossOrigin: r.crossOrigin,
                            loadType: o.Resource.LOAD_TYPE.IMAGE,
                            metadata: r.metadata.imageMetadata,
                            parentResource: r
                        }, i = u(r, this.baseUrl);
                        this.add(t, i, e, function (t) {
                            var e = new a.Spritesheet(t.texture.baseTexture, r.data, r.url);
                            e.parse(function () {
                                r.spritesheet = e, r.textures = e.textures, n()
                            })
                        })
                    } else n()
                }
            }, r.getResourcePath = u;
            var n, o = t("resource-loader"), i = t("url"), s = (n = i) && n.__esModule ? n : {default: n},
                a = t("../core");

            function u(t, e) {
                return t.isDataUrl ? t.data.meta.image : s.default.resolve(t.url.replace(e, ""), t.data.meta.image)
            }
        }, {"../core": 65, "resource-loader": 36, url: 38}],
        165: [function (t, e, r) {
            "use strict";
            r.__esModule = !0, r.default = function () {
                return function (t, e) {
                    t.data && t.type === i.Resource.TYPE.IMAGE && (t.texture = s.default.fromLoader(t.data, t.url, t.name)), e()
                }
            };
            var n, i = t("resource-loader"), o = t("../core/textures/Texture"),
                s = (n = o) && n.__esModule ? n : {default: n}
        }, {"../core/textures/Texture": 115, "resource-loader": 36}],
        166: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n, i = function () {
                function n(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function (t, e, r) {
                    return e && n(t.prototype, e), r && n(t, r), t
                }
            }(), a = function (t) {
                {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e.default = t, e
                }
            }(t("../core")), o = t("../extras/TextureTransform"), u = (n = o) && n.__esModule ? n : {default: n};
            var c = new a.Point, d = new a.Polygon, s = function (s) {
                function l(t, e, r, n, i) {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, l);
                    var o = function (t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, s.call(this));
                    return o._texture = t, o.uvs = r || new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), o.vertices = e || new Float32Array([0, 0, 100, 0, 100, 100, 0, 100]), o.indices = n || new Uint16Array([0, 1, 3, 2]), o.dirty = 0, o.indexDirty = 0, o.blendMode = a.BLEND_MODES.NORMAL, o.canvasPadding = 0, o.drawMode = i || l.DRAW_MODES.TRIANGLE_MESH, o.shader = null, o.tintRgb = new Float32Array([1, 1, 1]), o._glDatas = {}, o._uvTransform = new u.default(t), o.uploadUvTransform = !1, o.pluginName = "mesh", o
                }

                return function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(l, s), l.prototype._renderWebGL = function (t) {
                    this.refresh(), t.setObjectRenderer(t.plugins[this.pluginName]), t.plugins[this.pluginName].render(this)
                }, l.prototype._renderCanvas = function (t) {
                    this.refresh(), t.plugins[this.pluginName].render(this)
                }, l.prototype._onTextureUpdate = function () {
                    this._uvTransform.texture = this._texture, this.refresh()
                }, l.prototype.multiplyUvs = function () {
                    this.uploadUvTransform || this._uvTransform.multiplyUvs(this.uvs)
                }, l.prototype.refresh = function (t) {
                    this._uvTransform.update(t) && this._refresh()
                }, l.prototype._refresh = function () {
                }, l.prototype._calculateBounds = function () {
                    this._bounds.addVertices(this.transform, this.vertices, 0, this.vertices.length)
                }, l.prototype.containsPoint = function (t) {
                    if (!this.getBounds().contains(t.x, t.y)) return !1;
                    this.worldTransform.applyInverse(t, c);
                    for (var e = this.vertices, r = d.points, n = this.indices, i = this.indices.length, o = this.drawMode === l.DRAW_MODES.TRIANGLES ? 3 : 1, s = 0; s + 2 < i; s += o) {
                        var a = 2 * n[s], u = 2 * n[s + 1], h = 2 * n[s + 2];
                        if (r[0] = e[a], r[1] = e[a + 1], r[2] = e[u], r[3] = e[u + 1], r[4] = e[h], r[5] = e[h + 1], d.contains(c.x, c.y)) return !0
                    }
                    return !1
                }, i(l, [{
                    key: "texture", get: function () {
                        return this._texture
                    }, set: function (t) {
                        this._texture !== t && (this._texture = t) && (t.baseTexture.hasLoaded ? this._onTextureUpdate() : t.once("update", this._onTextureUpdate, this))
                    }
                }, {
                    key: "tint", get: function () {
                        return a.utils.rgb2hex(this.tintRgb)
                    }, set: function (t) {
                        this.tintRgb = a.utils.hex2rgb(t, this.tintRgb)
                    }
                }]), l
            }(a.Container);
            (r.default = s).DRAW_MODES = {TRIANGLE_MESH: 0, TRIANGLES: 1}
        }, {"../core": 65, "../extras/TextureTransform": 136}],
        167: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n, i = function () {
                function n(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function (t, e, r) {
                    return e && n(t.prototype, e), r && n(t, r), t
                }
            }(), o = t("./Plane"), s = (n = o) && n.__esModule ? n : {default: n};
            var a = function (s) {
                function a(t, e, r, n, i) {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, a);
                    var o = function (t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, s.call(this, t, 4, 4));
                    return o._origWidth = t.orig.width, o._origHeight = t.orig.height, o._width = o._origWidth, o._height = o._origHeight, o.leftWidth = void 0 !== e ? e : 10, o.rightWidth = void 0 !== n ? n : 10, o.topHeight = void 0 !== r ? r : 10, o.bottomHeight = void 0 !== i ? i : 10, o.refresh(!0), o
                }

                return function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(a, s), a.prototype.updateHorizontalVertices = function () {
                    var t = this.vertices;
                    t[9] = t[11] = t[13] = t[15] = this._topHeight, t[17] = t[19] = t[21] = t[23] = this._height - this._bottomHeight, t[25] = t[27] = t[29] = t[31] = this._height
                }, a.prototype.updateVerticalVertices = function () {
                    var t = this.vertices;
                    t[2] = t[10] = t[18] = t[26] = this._leftWidth, t[4] = t[12] = t[20] = t[28] = this._width - this._rightWidth, t[6] = t[14] = t[22] = t[30] = this._width
                }, a.prototype._renderCanvas = function (t) {
                    var e = t.context;
                    e.globalAlpha = this.worldAlpha;
                    var r = this.worldTransform, n = t.resolution;
                    t.roundPixels ? e.setTransform(r.a * n, r.b * n, r.c * n, r.d * n, r.tx * n | 0, r.ty * n | 0) : e.setTransform(r.a * n, r.b * n, r.c * n, r.d * n, r.tx * n, r.ty * n);
                    var i = this._texture.baseTexture, o = i.source, s = i.width, a = i.height;
                    this.drawSegment(e, o, s, a, 0, 1, 10, 11), this.drawSegment(e, o, s, a, 2, 3, 12, 13), this.drawSegment(e, o, s, a, 4, 5, 14, 15), this.drawSegment(e, o, s, a, 8, 9, 18, 19), this.drawSegment(e, o, s, a, 10, 11, 20, 21), this.drawSegment(e, o, s, a, 12, 13, 22, 23), this.drawSegment(e, o, s, a, 16, 17, 26, 27), this.drawSegment(e, o, s, a, 18, 19, 28, 29), this.drawSegment(e, o, s, a, 20, 21, 30, 31)
                }, a.prototype.drawSegment = function (t, e, r, n, i, o, s, a) {
                    var u = this.uvs, h = this.vertices, l = (u[s] - u[i]) * r, c = (u[a] - u[o]) * n, d = h[s] - h[i],
                        f = h[a] - h[o];
                    l < 1 && (l = 1), c < 1 && (c = 1), d < 1 && (d = 1), f < 1 && (f = 1), t.drawImage(e, u[i] * r, u[o] * n, l, c, h[i], h[o], d, f)
                }, a.prototype._refresh = function () {
                    s.prototype._refresh.call(this);
                    var t = this.uvs, e = this._texture;
                    this._origWidth = e.orig.width, this._origHeight = e.orig.height;
                    var r = 1 / this._origWidth, n = 1 / this._origHeight;
                    t[0] = t[8] = t[16] = t[24] = 0, t[1] = t[3] = t[5] = t[7] = 0, t[6] = t[14] = t[22] = t[30] = 1, t[25] = t[27] = t[29] = t[31] = 1, t[2] = t[10] = t[18] = t[26] = r * this._leftWidth, t[4] = t[12] = t[20] = t[28] = 1 - r * this._rightWidth, t[9] = t[11] = t[13] = t[15] = n * this._topHeight, t[17] = t[19] = t[21] = t[23] = 1 - n * this._bottomHeight, this.updateHorizontalVertices(), this.updateVerticalVertices(), this.dirty = !0, this.multiplyUvs()
                }, i(a, [{
                    key: "width", get: function () {
                        return this._width
                    }, set: function (t) {
                        this._width = t, this._refresh()
                    }
                }, {
                    key: "height", get: function () {
                        return this._height
                    }, set: function (t) {
                        this._height = t, this._refresh()
                    }
                }, {
                    key: "leftWidth", get: function () {
                        return this._leftWidth
                    }, set: function (t) {
                        this._leftWidth = t, this._refresh()
                    }
                }, {
                    key: "rightWidth", get: function () {
                        return this._rightWidth
                    }, set: function (t) {
                        this._rightWidth = t, this._refresh()
                    }
                }, {
                    key: "topHeight", get: function () {
                        return this._topHeight
                    }, set: function (t) {
                        this._topHeight = t, this._refresh()
                    }
                }, {
                    key: "bottomHeight", get: function () {
                        return this._bottomHeight
                    }, set: function (t) {
                        this._bottomHeight = t, this._refresh()
                    }
                }]), a
            }(s.default);
            r.default = a
        }, {"./Plane": 168}],
        168: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n, i = t("./Mesh"), s = (n = i) && n.__esModule ? n : {default: n};
            var o = function (i) {
                function o(t, e, r) {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, o);
                    var n = function (t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, i.call(this, t));
                    return n._ready = !0, n.verticesX = e || 10, n.verticesY = r || 10, n.drawMode = s.default.DRAW_MODES.TRIANGLES, n.refresh(), n
                }

                return function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(o, i), o.prototype._refresh = function () {
                    for (var t = this._texture, e = this.verticesX * this.verticesY, r = [], n = [], i = [], o = this.verticesX - 1, s = this.verticesY - 1, a = t.width / o, u = t.height / s, h = 0; h < e; h++) {
                        var l = h % this.verticesX, c = h / this.verticesX | 0;
                        r.push(l * a, c * u), n.push(l / o, c / s)
                    }
                    for (var d = o * s, f = 0; f < d; f++) {
                        var p = f % o, v = f / o | 0, g = v * this.verticesX + p, y = v * this.verticesX + p + 1,
                            m = (v + 1) * this.verticesX + p, _ = (v + 1) * this.verticesX + p + 1;
                        i.push(g, y, m), i.push(y, _, m)
                    }
                    this.vertices = new Float32Array(r), this.uvs = new Float32Array(n), this.colors = new Float32Array([]), this.indices = new Uint16Array(i), this.indexDirty = !0, this.multiplyUvs()
                }, o.prototype._onTextureUpdate = function () {
                    s.default.prototype._onTextureUpdate.call(this), this._ready && this.refresh()
                }, o
            }(s.default);
            r.default = o
        }, {"./Mesh": 166}],
        169: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n, i = t("./Mesh");
            var o = function (n) {
                function i(t, e) {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, i);
                    var r = function (t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, n.call(this, t));
                    return r.points = e, r.vertices = new Float32Array(4 * e.length), r.uvs = new Float32Array(4 * e.length), r.colors = new Float32Array(2 * e.length), r.indices = new Uint16Array(2 * e.length), r.autoUpdate = !0, r.refresh(), r
                }

                return function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(i, n), i.prototype._refresh = function () {
                    var t = this.points;
                    if (!(t.length < 1) && this._texture._uvs) {
                        this.vertices.length / 4 !== t.length && (this.vertices = new Float32Array(4 * t.length), this.uvs = new Float32Array(4 * t.length), this.colors = new Float32Array(2 * t.length), this.indices = new Uint16Array(2 * t.length));
                        var e = this.uvs, r = this.indices, n = this.colors;
                        e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 1, n[0] = 1, n[1] = 1, r[0] = 0, r[1] = 1;
                        for (var i = t.length, o = 1; o < i; o++) {
                            var s = 4 * o, a = o / (i - 1);
                            e[s] = a, e[s + 1] = 0, e[s + 2] = a, e[s + 3] = 1, n[s = 2 * o] = 1, n[s + 1] = 1, r[s = 2 * o] = s, r[s + 1] = s + 1
                        }
                        this.dirty++, this.indexDirty++, this.multiplyUvs(), this.refreshVertices()
                    }
                }, i.prototype.refreshVertices = function () {
                    var t = this.points;
                    if (!(t.length < 1)) for (var e = t[0], r = void 0, n = 0, i = 0, o = this.vertices, s = t.length, a = 0; a < s; a++) {
                        var u = t[a], h = 4 * a;
                        i = -((r = a < t.length - 1 ? t[a + 1] : u).x - e.x), n = r.y - e.y;
                        var l = 10 * (1 - a / (s - 1));
                        1 < l && (l = 1);
                        var c = Math.sqrt(n * n + i * i), d = this._texture.height / 2;
                        n /= c, i /= c, n *= d, i *= d, o[h] = u.x + n, o[h + 1] = u.y + i, o[h + 2] = u.x - n, o[h + 3] = u.y - i, e = u
                    }
                }, i.prototype.updateTransform = function () {
                    this.autoUpdate && this.refreshVertices(), this.containerUpdateTransform()
                }, i
            }(((n = i) && n.__esModule ? n : {default: n}).default);
            r.default = o
        }, {"./Mesh": 166}],
        170: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n, i = function (t) {
                {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e.default = t, e
                }
            }(t("../../core")), o = t("../Mesh"), s = (n = o) && n.__esModule ? n : {default: n};
            var a = function () {
                function e(t) {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.renderer = t
                }

                return e.prototype.render = function (t) {
                    var e = this.renderer, r = e.context, n = t.worldTransform, i = e.resolution;
                    e.roundPixels ? r.setTransform(n.a * i, n.b * i, n.c * i, n.d * i, n.tx * i | 0, n.ty * i | 0) : r.setTransform(n.a * i, n.b * i, n.c * i, n.d * i, n.tx * i, n.ty * i), e.setBlendMode(t.blendMode), t.drawMode === s.default.DRAW_MODES.TRIANGLE_MESH ? this._renderTriangleMesh(t) : this._renderTriangles(t)
                }, e.prototype._renderTriangleMesh = function (t) {
                    for (var e = t.vertices.length / 2, r = 0; r < e - 2; r++) {
                        var n = 2 * r;
                        this._renderDrawTriangle(t, n, n + 2, n + 4)
                    }
                }, e.prototype._renderTriangles = function (t) {
                    for (var e = t.indices, r = e.length, n = 0; n < r; n += 3) {
                        var i = 2 * e[n], o = 2 * e[n + 1], s = 2 * e[n + 2];
                        this._renderDrawTriangle(t, i, o, s)
                    }
                }, e.prototype._renderDrawTriangle = function (t, e, r, n) {
                    var i = this.renderer.context, o = t.uvs, s = t.vertices, a = t._texture;
                    if (a.valid) {
                        var u = a.baseTexture, h = u.source, l = u.width, c = u.height, d = void 0, f = void 0,
                            p = void 0, v = void 0, g = void 0, y = void 0;
                        if (t.uploadUvTransform) {
                            var m = t._uvTransform.mapCoord;
                            d = (o[e] * m.a + o[e + 1] * m.c + m.tx) * u.width, f = (o[r] * m.a + o[r + 1] * m.c + m.tx) * u.width, p = (o[n] * m.a + o[n + 1] * m.c + m.tx) * u.width, v = (o[e] * m.b + o[e + 1] * m.d + m.ty) * u.height, g = (o[r] * m.b + o[r + 1] * m.d + m.ty) * u.height, y = (o[n] * m.b + o[n + 1] * m.d + m.ty) * u.height
                        } else d = o[e] * u.width, f = o[r] * u.width, p = o[n] * u.width, v = o[e + 1] * u.height, g = o[r + 1] * u.height, y = o[n + 1] * u.height;
                        var _ = s[e], b = s[r], x = s[n], T = s[e + 1], w = s[r + 1], E = s[n + 1];
                        if (0 < t.canvasPadding) {
                            var S = t.canvasPadding / t.worldTransform.a, O = t.canvasPadding / t.worldTransform.d,
                                P = (_ + b + x) / 3, M = (T + w + E) / 3, C = _ - P, R = T - M,
                                A = Math.sqrt(C * C + R * R);
                            _ = P + C / A * (A + S), T = M + R / A * (A + O), R = w - M, b = P + (C = b - P) / (A = Math.sqrt(C * C + R * R)) * (A + S), w = M + R / A * (A + O), R = E - M, x = P + (C = x - P) / (A = Math.sqrt(C * C + R * R)) * (A + S), E = M + R / A * (A + O)
                        }
                        i.save(), i.beginPath(), i.moveTo(_, T), i.lineTo(b, w), i.lineTo(x, E), i.closePath(), i.clip();
                        var I = d * g + v * p + f * y - g * p - v * f - d * y,
                            D = _ * g + v * x + b * y - g * x - v * b - _ * y,
                            L = d * b + _ * p + f * x - b * p - _ * f - d * x,
                            N = d * g * x + v * b * p + _ * f * y - _ * g * p - v * f * x - d * b * y,
                            F = T * g + v * E + w * y - g * E - v * w - T * y,
                            B = d * w + T * p + f * E - w * p - T * f - d * E,
                            k = d * g * E + v * w * p + T * f * y - T * g * p - v * f * E - d * w * y;
                        i.transform(D / I, F / I, L / I, B / I, N / I, k / I), i.drawImage(h, 0, 0, l * u.resolution, c * u.resolution, 0, 0, l, c), i.restore(), this.renderer.invalidateBlendMode()
                    }
                }, e.prototype.renderMeshFlat = function (t) {
                    var e = this.renderer.context, r = t.vertices, n = r.length / 2;
                    e.beginPath();
                    for (var i = 1; i < n - 2; ++i) {
                        var o = 2 * i, s = r[o], a = r[o + 1], u = r[o + 2], h = r[o + 3], l = r[o + 4], c = r[o + 5];
                        e.moveTo(s, a), e.lineTo(u, h), e.lineTo(l, c)
                    }
                    e.fillStyle = "#FF0000", e.fill(), e.closePath()
                }, e.prototype.destroy = function () {
                    this.renderer = null
                }, e
            }();
            r.default = a, i.CanvasRenderer.registerPlugin("mesh", a)
        }, {"../../core": 65, "../Mesh": 166}],
        171: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n = t("./Mesh");
            Object.defineProperty(r, "Mesh", {
                enumerable: !0, get: function () {
                    return h(n).default
                }
            });
            var i = t("./webgl/MeshRenderer");
            Object.defineProperty(r, "MeshRenderer", {
                enumerable: !0, get: function () {
                    return h(i).default
                }
            });
            var o = t("./canvas/CanvasMeshRenderer");
            Object.defineProperty(r, "CanvasMeshRenderer", {
                enumerable: !0, get: function () {
                    return h(o).default
                }
            });
            var s = t("./Plane");
            Object.defineProperty(r, "Plane", {
                enumerable: !0, get: function () {
                    return h(s).default
                }
            });
            var a = t("./NineSlicePlane");
            Object.defineProperty(r, "NineSlicePlane", {
                enumerable: !0, get: function () {
                    return h(a).default
                }
            });
            var u = t("./Rope");

            function h(t) {
                return t && t.__esModule ? t : {default: t}
            }

            Object.defineProperty(r, "Rope", {
                enumerable: !0, get: function () {
                    return h(u).default
                }
            })
        }, {
            "./Mesh": 166,
            "./NineSlicePlane": 167,
            "./Plane": 168,
            "./Rope": 169,
            "./canvas/CanvasMeshRenderer": 170,
            "./webgl/MeshRenderer": 172
        }],
        172: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var s = function (t) {
                {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e.default = t, e
                }
            }(t("../../core")), a = n(t("pixi-gl-core")), u = n(t("../Mesh"));
            t("path");

            function n(t) {
                return t && t.__esModule ? t : {default: t}
            }

            var h = s.Matrix.IDENTITY, i = function (r) {
                function n(t) {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    var e = function (t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, r.call(this, t));
                    return e.shader = null, e
                }

                return function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(n, r), n.prototype.onContextChange = function () {
                    var t = this.renderer.gl;
                    this.shader = new s.Shader(t, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n", "varying vec2 vTextureCoord;\nuniform vec4 uColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;\n}\n")
                }, n.prototype.render = function (t) {
                    var e = this.renderer, r = e.gl, n = t._texture;
                    if (n.valid) {
                        var i = t._glDatas[e.CONTEXT_UID];
                        i || (e.bindVao(null), (i = {
                            shader: this.shader,
                            vertexBuffer: a.default.GLBuffer.createVertexBuffer(r, t.vertices, r.STREAM_DRAW),
                            uvBuffer: a.default.GLBuffer.createVertexBuffer(r, t.uvs, r.STREAM_DRAW),
                            indexBuffer: a.default.GLBuffer.createIndexBuffer(r, t.indices, r.STATIC_DRAW),
                            vao: null,
                            dirty: t.dirty,
                            indexDirty: t.indexDirty
                        }).vao = new a.default.VertexArrayObject(r).addIndex(i.indexBuffer).addAttribute(i.vertexBuffer, i.shader.attributes.aVertexPosition, r.FLOAT, !1, 8, 0).addAttribute(i.uvBuffer, i.shader.attributes.aTextureCoord, r.FLOAT, !1, 8, 0), t._glDatas[e.CONTEXT_UID] = i), e.bindVao(i.vao), t.dirty !== i.dirty && (i.dirty = t.dirty, i.uvBuffer.upload(t.uvs)), t.indexDirty !== i.indexDirty && (i.indexDirty = t.indexDirty, i.indexBuffer.upload(t.indices)), i.vertexBuffer.upload(t.vertices), e.bindShader(i.shader), i.shader.uniforms.uSampler = e.bindTexture(n), e.state.setBlendMode(s.utils.correctBlendMode(t.blendMode, n.baseTexture.premultipliedAlpha)), i.shader.uniforms.uTransform && (t.uploadUvTransform ? i.shader.uniforms.uTransform = t._uvTransform.mapCoord.toArray(!0) : i.shader.uniforms.uTransform = h.toArray(!0)), i.shader.uniforms.translationMatrix = t.worldTransform.toArray(!0), i.shader.uniforms.uColor = s.utils.premultiplyRgba(t.tintRgb, t.worldAlpha, i.shader.uniforms.uColor, n.baseTexture.premultipliedAlpha);
                        var o = t.drawMode === u.default.DRAW_MODES.TRIANGLE_MESH ? r.TRIANGLE_STRIP : r.TRIANGLES;
                        i.vao.draw(o, t.indices.length, 0)
                    }
                }, n
            }(s.ObjectRenderer);
            r.default = i, s.WebGLRenderer.registerPlugin("mesh", i)
        }, {"../../core": 65, "../Mesh": 166, path: 8, "pixi-gl-core": 15}],
        173: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n = function () {
                function n(t, e) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }

                return function (t, e, r) {
                    return e && n(t.prototype, e), r && n(t, r), t
                }
            }(), s = function (t) {
                {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e.default = t, e
                }
            }(t("../core")), a = t("../core/utils");
            var i = function (i) {
                function o() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1500, e = arguments[1],
                        r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 16384;
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, o);
                    var n = function (t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, i.call(this));
                    return 16384 < r && (r = 16384), t < r && (r = t), n._properties = [!1, !0, !1, !1, !1], n._maxSize = t, n._batchSize = r, n._glBuffers = {}, n._bufferToUpdate = 0, n.interactiveChildren = !1, n.blendMode = s.BLEND_MODES.NORMAL, n.roundPixels = !0, n.baseTexture = null, n.setProperties(e), n._tint = 0, n.tintRgb = new Float32Array(4), n.tint = 16777215, n
                }

                return function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(o, i), o.prototype.setProperties = function (t) {
                    t && (this._properties[0] = "scale" in t ? !!t.scale : this._properties[0], this._properties[1] = "position" in t ? !!t.position : this._properties[1], this._properties[2] = "rotation" in t ? !!t.rotation : this._properties[2], this._properties[3] = "uvs" in t ? !!t.uvs : this._properties[3], this._properties[4] = "alpha" in t ? !!t.alpha : this._properties[4])
                }, o.prototype.updateTransform = function () {
                    this.displayObjectUpdateTransform()
                }, o.prototype.renderWebGL = function (t) {
                    var e = this;
                    this.visible && !(this.worldAlpha <= 0) && this.children.length && this.renderable && (this.baseTexture || (this.baseTexture = this.children[0]._texture.baseTexture, this.baseTexture.hasLoaded || this.baseTexture.once("update", function () {
                        return e.onChildrenChange(0)
                    })), t.setObjectRenderer(t.plugins.particle), t.plugins.particle.render(this))
                }, o.prototype.onChildrenChange = function (t) {
                    var e = Math.floor(t / this._batchSize);
                    e < this._bufferToUpdate && (this._bufferToUpdate = e)
                }, o.prototype.renderCanvas = function (t) {
                    if (this.visible && !(this.worldAlpha <= 0) && this.children.length && this.renderable) {
                        var e = t.context, r = this.worldTransform, n = !0, i = 0, o = 0, s = 0, a = 0;
                        t.setBlendMode(this.blendMode), e.globalAlpha = this.worldAlpha, this.displayObjectUpdateTransform();
                        for (var u = 0; u < this.children.length; ++u) {
                            var h = this.children[u];
                            if (h.visible) {
                                var l = h._texture.frame;
                                if (e.globalAlpha = this.worldAlpha * h.alpha, h.rotation % (2 * Math.PI) == 0) n && (e.setTransform(r.a, r.b, r.c, r.d, r.tx * t.resolution, r.ty * t.resolution), n = !1), i = h.anchor.x * (-l.width * h.scale.x) + h.position.x + .5, o = h.anchor.y * (-l.height * h.scale.y) + h.position.y + .5, s = l.width * h.scale.x, a = l.height * h.scale.y; else {
                                    n || (n = !0), h.displayObjectUpdateTransform();
                                    var c = h.worldTransform;
                                    t.roundPixels ? e.setTransform(c.a, c.b, c.c, c.d, c.tx * t.resolution | 0, c.ty * t.resolution | 0) : e.setTransform(c.a, c.b, c.c, c.d, c.tx * t.resolution, c.ty * t.resolution), i = h.anchor.x * -l.width + .5, o = h.anchor.y * -l.height + .5, s = l.width, a = l.height
                                }
                                var d = h._texture.baseTexture.resolution;
                                e.drawImage(h._texture.baseTexture.source, l.x * d, l.y * d, l.width * d, l.height * d, i * t.resolution, o * t.resolution, s * t.resolution, a * t.resolution)
                            }
                        }
                    }
                }, o.prototype.destroy = function (t) {
                    if (i.prototype.destroy.call(this, t), this._buffers) for (var e = 0; e < this._buffers.length; ++e) this._buffers[e].destroy();
                    this._properties = null, this._buffers = null
                }, n(o, [{
                    key: "tint", get: function () {
                        return this._tint
                    }, set: function (t) {
                        this._tint = t, (0, a.hex2rgb)(t, this.tintRgb)
                    }
                }]), o
            }(s.Container);
            r.default = i
        }, {"../core": 65, "../core/utils": 124}],
        174: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n = t("./ParticleContainer");
            Object.defineProperty(r, "ParticleContainer", {
                enumerable: !0, get: function () {
                    return o(n).default
                }
            });
            var i = t("./webgl/ParticleRenderer");

            function o(t) {
                return t && t.__esModule ? t : {default: t}
            }

            Object.defineProperty(r, "ParticleRenderer", {
                enumerable: !0, get: function () {
                    return o(i).default
                }
            })
        }, {"./ParticleContainer": 173, "./webgl/ParticleRenderer": 176}],
        175: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var c = n(t("pixi-gl-core")), d = n(t("../../core/utils/createIndicesForQuads"));

            function n(t) {
                return t && t.__esModule ? t : {default: t}
            }

            var i = function () {
                function s(t, e, r, n) {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, s), this.gl = t, this.vertSize = 2, this.vertByteSize = 4 * this.vertSize, this.size = n, this.dynamicProperties = [], this.staticProperties = [];
                    for (var i = 0; i < e.length; ++i) {
                        var o = e[i];
                        o = {
                            attribute: o.attribute,
                            size: o.size,
                            uploadFunction: o.uploadFunction,
                            offset: o.offset
                        }, r[i] ? this.dynamicProperties.push(o) : this.staticProperties.push(o)
                    }
                    this.staticStride = 0, this.staticBuffer = null, this.staticData = null, this.dynamicStride = 0, this.dynamicBuffer = null, this.dynamicData = null, this.initBuffers()
                }

                return s.prototype.initBuffers = function () {
                    var t = this.gl, e = 0;
                    this.indices = (0, d.default)(this.size), this.indexBuffer = c.default.GLBuffer.createIndexBuffer(t, this.indices, t.STATIC_DRAW);
                    for (var r = this.dynamicStride = 0; r < this.dynamicProperties.length; ++r) {
                        var n = this.dynamicProperties[r];
                        n.offset = e, e += n.size, this.dynamicStride += n.size
                    }
                    this.dynamicData = new Float32Array(this.size * this.dynamicStride * 4), this.dynamicBuffer = c.default.GLBuffer.createVertexBuffer(t, this.dynamicData, t.STREAM_DRAW);
                    for (var i = 0, o = this.staticStride = 0; o < this.staticProperties.length; ++o) {
                        var s = this.staticProperties[o];
                        s.offset = i, i += s.size, this.staticStride += s.size
                    }
                    this.staticData = new Float32Array(this.size * this.staticStride * 4), this.staticBuffer = c.default.GLBuffer.createVertexBuffer(t, this.staticData, t.STATIC_DRAW), this.vao = new c.default.VertexArrayObject(t).addIndex(this.indexBuffer);
                    for (var a = 0; a < this.dynamicProperties.length; ++a) {
                        var u = this.dynamicProperties[a];
                        this.vao.addAttribute(this.dynamicBuffer, u.attribute, t.FLOAT, !1, 4 * this.dynamicStride, 4 * u.offset)
                    }
                    for (var h = 0; h < this.staticProperties.length; ++h) {
                        var l = this.staticProperties[h];
                        this.vao.addAttribute(this.staticBuffer, l.attribute, t.FLOAT, !1, 4 * this.staticStride, 4 * l.offset)
                    }
                }, s.prototype.uploadDynamic = function (t, e, r) {
                    for (var n = 0; n < this.dynamicProperties.length; n++) {
                        var i = this.dynamicProperties[n];
                        i.uploadFunction(t, e, r, this.dynamicData, this.dynamicStride, i.offset)
                    }
                    this.dynamicBuffer.upload()
                }, s.prototype.uploadStatic = function (t, e, r) {
                    for (var n = 0; n < this.staticProperties.length; n++) {
                        var i = this.staticProperties[n];
                        i.uploadFunction(t, e, r, this.staticData, this.staticStride, i.offset)
                    }
                    this.staticBuffer.upload()
                }, s.prototype.destroy = function () {
                    this.dynamicProperties = null, this.dynamicData = null, this.dynamicBuffer.destroy(), this.staticProperties = null, this.staticData = null, this.staticBuffer.destroy()
                }, s
            }();
            r.default = i
        }, {"../../core/utils/createIndicesForQuads": 122, "pixi-gl-core": 15}],
        176: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var p = function (t) {
                {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e.default = t, e
                }
            }(t("../../core")), i = n(t("./ParticleShader")), a = n(t("./ParticleBuffer"));

            function n(t) {
                return t && t.__esModule ? t : {default: t}
            }

            var o = function (r) {
                function n(t) {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    var e = function (t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, r.call(this, t));
                    return e.shader = null, e.indexBuffer = null, e.properties = null, e.tempMatrix = new p.Matrix, e.CONTEXT_UID = 0, e
                }

                return function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(n, r), n.prototype.onContextChange = function () {
                    var t = this.renderer.gl;
                    this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.shader = new i.default(t), this.properties = [{
                        attribute: this.shader.attributes.aVertexPosition,
                        size: 2,
                        uploadFunction: this.uploadVertices,
                        offset: 0
                    }, {
                        attribute: this.shader.attributes.aPositionCoord,
                        size: 2,
                        uploadFunction: this.uploadPosition,
                        offset: 0
                    }, {
                        attribute: this.shader.attributes.aRotation,
                        size: 1,
                        uploadFunction: this.uploadRotation,
                        offset: 0
                    }, {
                        attribute: this.shader.attributes.aTextureCoord,
                        size: 2,
                        uploadFunction: this.uploadUvs,
                        offset: 0
                    }, {attribute: this.shader.attributes.aColor, size: 1, uploadFunction: this.uploadAlpha, offset: 0}]
                }, n.prototype.start = function () {
                    this.renderer.bindShader(this.shader)
                }, n.prototype.render = function (t) {
                    var e = t.children, r = t._maxSize, n = t._batchSize, i = this.renderer, o = e.length;
                    if (0 !== o) {
                        r < o && (o = r);
                        var s = t._glBuffers[i.CONTEXT_UID];
                        s || (s = t._glBuffers[i.CONTEXT_UID] = this.generateBuffers(t));
                        var a = e[0]._texture.baseTexture;
                        this.renderer.setBlendMode(p.utils.correctBlendMode(t.blendMode, a.premultipliedAlpha));
                        var u = i.gl, h = t.worldTransform.copy(this.tempMatrix);
                        h.prepend(i._activeRenderTarget.projectionMatrix), this.shader.uniforms.projectionMatrix = h.toArray(!0), this.shader.uniforms.uColor = p.utils.premultiplyRgba(t.tintRgb, t.worldAlpha, this.shader.uniforms.uColor, a.premultipliedAlpha), this.shader.uniforms.uSampler = i.bindTexture(a);
                        for (var l = 0, c = 0; l < o; l += n, c += 1) {
                            var d = o - l;
                            n < d && (d = n);
                            var f = s[c];
                            f.uploadDynamic(e, l, d), t._bufferToUpdate === c && (f.uploadStatic(e, l, d), t._bufferToUpdate = c + 1), i.bindVao(f.vao), f.vao.draw(u.TRIANGLES, 6 * d)
                        }
                    }
                }, n.prototype.generateBuffers = function (t) {
                    for (var e = this.renderer.gl, r = [], n = t._maxSize, i = t._batchSize, o = t._properties, s = 0; s < n; s += i) r.push(new a.default(e, this.properties, o, i));
                    return r
                }, n.prototype.uploadVertices = function (t, e, r, n, i, o) {
                    for (var s = 0, a = 0, u = 0, h = 0, l = 0; l < r; ++l) {
                        var c = t[e + l], d = c._texture, f = c.scale.x, p = c.scale.y, v = d.trim, g = d.orig;
                        v ? (s = (a = v.x - c.anchor.x * g.width) + v.width, u = (h = v.y - c.anchor.y * g.height) + v.height) : (s = g.width * (1 - c.anchor.x), a = g.width * -c.anchor.x, u = g.height * (1 - c.anchor.y), h = g.height * -c.anchor.y), n[o] = a * f, n[o + 1] = h * p, n[o + i] = s * f, n[o + i + 1] = h * p, n[o + 2 * i] = s * f, n[o + 2 * i + 1] = u * p, n[o + 3 * i] = a * f, n[o + 3 * i + 1] = u * p, o += 4 * i
                    }
                }, n.prototype.uploadPosition = function (t, e, r, n, i, o) {
                    for (var s = 0; s < r; s++) {
                        var a = t[e + s].position;
                        n[o] = a.x, n[o + 1] = a.y, n[o + i] = a.x, n[o + i + 1] = a.y, n[o + 2 * i] = a.x, n[o + 2 * i + 1] = a.y, n[o + 3 * i] = a.x, n[o + 3 * i + 1] = a.y, o += 4 * i
                    }
                }, n.prototype.uploadRotation = function (t, e, r, n, i, o) {
                    for (var s = 0; s < r; s++) {
                        var a = t[e + s].rotation;
                        n[o] = a, n[o + i] = a, n[o + 2 * i] = a, n[o + 3 * i] = a, o += 4 * i
                    }
                }, n.prototype.uploadUvs = function (t, e, r, n, i, o) {
                    for (var s = 0; s < r; ++s) {
                        var a = t[e + s]._texture._uvs;
                        a ? (n[o] = a.x0, n[o + 1] = a.y0, n[o + i] = a.x1, n[o + i + 1] = a.y1, n[o + 2 * i] = a.x2, n[o + 2 * i + 1] = a.y2, n[o + 3 * i] = a.x3, n[o + 3 * i + 1] = a.y3) : (n[o] = 0, n[o + 1] = 0, n[o + i] = 0, n[o + i + 1] = 0, n[o + 2 * i] = 0, n[o + 2 * i + 1] = 0, n[o + 3 * i] = 0, n[o + 3 * i + 1] = 0), o += 4 * i
                    }
                }, n.prototype.uploadAlpha = function (t, e, r, n, i, o) {
                    for (var s = 0; s < r; s++) {
                        var a = t[e + s].alpha;
                        n[o] = a, n[o + i] = a, n[o + 2 * i] = a, n[o + 3 * i] = a, o += 4 * i
                    }
                }, n.prototype.destroy = function () {
                    this.renderer.gl && this.renderer.gl.deleteBuffer(this.indexBuffer), r.prototype.destroy.call(this), this.shader.destroy(), this.indices = null, this.tempMatrix = null
                }, n
            }(p.ObjectRenderer);
            r.default = o, p.WebGLRenderer.registerPlugin("particle", o)
        }, {"../../core": 65, "./ParticleBuffer": 175, "./ParticleShader": 177}],
        177: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n, i = t("../../core/Shader");
            var o = function (e) {
                function r(t) {
                    return function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, r), function (t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, e.call(this, t, ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "attribute float aColor;", "attribute vec2 aPositionCoord;", "attribute vec2 aScale;", "attribute float aRotation;", "uniform mat3 projectionMatrix;", "varying vec2 vTextureCoord;", "varying float vColor;", "void main(void){", "   vec2 v = aVertexPosition;", "   v.x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);", "   v.y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);", "   v = v + aPositionCoord;", "   gl_Position = vec4((projectionMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "   vColor = aColor;", "}"].join("\n"), ["varying vec2 vTextureCoord;", "varying float vColor;", "uniform sampler2D uSampler;", "uniform vec4 uColor;", "void main(void){", "  vec4 color = texture2D(uSampler, vTextureCoord) * vColor * uColor;", "  if (color.a == 0.0) discard;", "  gl_FragColor = color;", "}"].join("\n")))
                }

                return function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(r, e), r
            }(((n = i) && n.__esModule ? n : {default: n}).default);
            r.default = o
        }, {"../../core/Shader": 44}],
        178: [function (t, e, r) {
            "use strict";
            Math.sign || (Math.sign = function (t) {
                return 0 === (t = Number(t)) || isNaN(t) ? t : 0 < t ? 1 : -1
            })
        }, {}],
        179: [function (t, e, r) {
            "use strict";
            var n, i = t("object-assign"), o = (n = i) && n.__esModule ? n : {default: n};
            Object.assign || (Object.assign = o.default)
        }, {"object-assign": 6}],
        180: [function (t, e, r) {
            "use strict";
            t("./Object.assign"), t("./requestAnimationFrame"), t("./Math.sign"), window.ArrayBuffer || (window.ArrayBuffer = Array), window.Float32Array || (window.Float32Array = Array), window.Uint32Array || (window.Uint32Array = Array), window.Uint16Array || (window.Uint16Array = Array)
        }, {"./Math.sign": 178, "./Object.assign": 179, "./requestAnimationFrame": 181}],
        181: [function (t, e, r) {
            (function (t) {
                "use strict";
                if (Date.now && Date.prototype.getTime || (Date.now = function () {
                    return (new Date).getTime()
                }), !t.performance || !t.performance.now) {
                    var e = Date.now();
                    t.performance || (t.performance = {}), t.performance.now = function () {
                        return Date.now() - e
                    }
                }
                for (var n = Date.now(), r = ["ms", "moz", "webkit", "o"], i = 0; i < r.length && !t.requestAnimationFrame; ++i) {
                    var o = r[i];
                    t.requestAnimationFrame = t[o + "RequestAnimationFrame"], t.cancelAnimationFrame = t[o + "CancelAnimationFrame"] || t[o + "CancelRequestAnimationFrame"]
                }
                t.requestAnimationFrame || (t.requestAnimationFrame = function (t) {
                    if ("function" != typeof t) throw new TypeError(t + "is not a function");
                    var e = Date.now(), r = 16 + n - e;
                    return r < 0 && (r = 0), n = e, setTimeout(function () {
                        n = Date.now(), t(performance.now())
                    }, r)
                }), t.cancelAnimationFrame || (t.cancelAnimationFrame = function (t) {
                    return clearTimeout(t)
                })
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        182: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n, a = function (t) {
                {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e.default = t, e
                }
            }(t("../core")), i = t("./limiters/CountLimiter"), o = (n = i) && n.__esModule ? n : {default: n};
            var u = a.ticker.shared;
            a.settings.UPLOADS_PER_FRAME = 4;
            var s = function () {
                function r(t) {
                    var e = this;
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, r), this.limiter = new o.default(a.settings.UPLOADS_PER_FRAME), this.renderer = t, this.uploadHookHelper = null, this.queue = [], this.addHooks = [], this.uploadHooks = [], this.completes = [], this.ticking = !1, this.delayedTick = function () {
                        e.queue && e.prepareItems()
                    }, this.registerFindHook(p), this.registerFindHook(v), this.registerFindHook(h), this.registerFindHook(l), this.registerFindHook(c), this.registerUploadHook(d), this.registerUploadHook(f)
                }

                return r.prototype.upload = function (t, e) {
                    "function" == typeof t && (e = t, t = null), t && this.add(t), this.queue.length ? (e && this.completes.push(e), this.ticking || (this.ticking = !0, u.addOnce(this.tick, this, a.UPDATE_PRIORITY.UTILITY))) : e && e()
                }, r.prototype.tick = function () {
                    setTimeout(this.delayedTick, 0)
                }, r.prototype.prepareItems = function () {
                    for (this.limiter.beginFrame(); this.queue.length && this.limiter.allowedToUpload();) {
                        var t = this.queue[0], e = !1;
                        if (t && !t._destroyed) for (var r = 0, n = this.uploadHooks.length; r < n; r++) if (this.uploadHooks[r](this.uploadHookHelper, t)) {
                            this.queue.shift(), e = !0;
                            break
                        }
                        e || this.queue.shift()
                    }
                    if (this.queue.length) u.addOnce(this.tick, this, a.UPDATE_PRIORITY.UTILITY); else {
                        this.ticking = !1;
                        for (var i = this.completes.slice(0), o = this.completes.length = 0, s = i.length; o < s; o++) i[o]()
                    }
                }, r.prototype.registerFindHook = function (t) {
                    return t && this.addHooks.push(t), this
                }, r.prototype.registerUploadHook = function (t) {
                    return t && this.uploadHooks.push(t), this
                }, r.prototype.add = function (t) {
                    for (var e = 0, r = this.addHooks.length; e < r && !this.addHooks[e](t, this.queue); e++) ;
                    if (t instanceof a.Container) for (var n = t.children.length - 1; 0 <= n; n--) this.add(t.children[n]);
                    return this
                }, r.prototype.destroy = function () {
                    this.ticking && u.remove(this.tick, this), this.ticking = !1, this.addHooks = null, this.uploadHooks = null, this.renderer = null, this.completes = null, this.queue = null, this.limiter = null, this.uploadHookHelper = null
                }, r
            }();

            function h(t, e) {
                var r = !1;
                if (t && t._textures && t._textures.length) for (var n = 0; n < t._textures.length; n++) if (t._textures[n] instanceof a.Texture) {
                    var i = t._textures[n].baseTexture;
                    -1 === e.indexOf(i) && (e.push(i), r = !0)
                }
                return r
            }

            function l(t, e) {
                return t instanceof a.BaseTexture && (-1 === e.indexOf(t) && e.push(t), !0)
            }

            function c(t, e) {
                if (t._texture && t._texture instanceof a.Texture) {
                    var r = t._texture.baseTexture;
                    return -1 === e.indexOf(r) && e.push(r), !0
                }
                return !1
            }

            function d(t, e) {
                return e instanceof a.Text && (e.updateText(!0), !0)
            }

            function f(t, e) {
                if (e instanceof a.TextStyle) {
                    var r = e.toFontString();
                    return a.TextMetrics.measureFont(r), !0
                }
                return !1
            }

            function p(t, e) {
                if (t instanceof a.Text) {
                    -1 === e.indexOf(t.style) && e.push(t.style), -1 === e.indexOf(t) && e.push(t);
                    var r = t._texture.baseTexture;
                    return -1 === e.indexOf(r) && e.push(r), !0
                }
                return !1
            }

            function v(t, e) {
                return t instanceof a.TextStyle && (-1 === e.indexOf(t) && e.push(t), !0)
            }

            r.default = s
        }, {"../core": 65, "./limiters/CountLimiter": 185}],
        183: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n, o = function (t) {
                {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e.default = t, e
                }
            }(t("../../core")), i = t("../BasePrepare"), s = (n = i) && n.__esModule ? n : {default: n};
            var a = function (r) {
                function n(t) {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    var e = function (t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, r.call(this, t));
                    return (e.uploadHookHelper = e).canvas = document.createElement("canvas"), e.canvas.width = 16, e.canvas.height = 16, e.ctx = e.canvas.getContext("2d"), e.registerUploadHook(u), e
                }

                return function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(n, r), n.prototype.destroy = function () {
                    r.prototype.destroy.call(this), this.ctx = null, this.canvas = null
                }, n
            }(s.default);

            function u(t, e) {
                if (e instanceof o.BaseTexture) {
                    var r = e.source, n = 0 === r.width ? t.canvas.width : Math.min(t.canvas.width, r.width),
                        i = 0 === r.height ? t.canvas.height : Math.min(t.canvas.height, r.height);
                    return t.ctx.drawImage(r, 0, 0, n, i, 0, 0, t.canvas.width, t.canvas.height), !0
                }
                return !1
            }

            r.default = a, o.CanvasRenderer.registerPlugin("prepare", a)
        }, {"../../core": 65, "../BasePrepare": 182}],
        184: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n = t("./webgl/WebGLPrepare");
            Object.defineProperty(r, "webgl", {
                enumerable: !0, get: function () {
                    return u(n).default
                }
            });
            var i = t("./canvas/CanvasPrepare");
            Object.defineProperty(r, "canvas", {
                enumerable: !0, get: function () {
                    return u(i).default
                }
            });
            var o = t("./BasePrepare");
            Object.defineProperty(r, "BasePrepare", {
                enumerable: !0, get: function () {
                    return u(o).default
                }
            });
            var s = t("./limiters/CountLimiter");
            Object.defineProperty(r, "CountLimiter", {
                enumerable: !0, get: function () {
                    return u(s).default
                }
            });
            var a = t("./limiters/TimeLimiter");

            function u(t) {
                return t && t.__esModule ? t : {default: t}
            }

            Object.defineProperty(r, "TimeLimiter", {
                enumerable: !0, get: function () {
                    return u(a).default
                }
            })
        }, {
            "./BasePrepare": 182,
            "./canvas/CanvasPrepare": 183,
            "./limiters/CountLimiter": 185,
            "./limiters/TimeLimiter": 186,
            "./webgl/WebGLPrepare": 187
        }],
        185: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n = function () {
                function e(t) {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.maxItemsPerFrame = t, this.itemsLeft = 0
                }

                return e.prototype.beginFrame = function () {
                    this.itemsLeft = this.maxItemsPerFrame
                }, e.prototype.allowedToUpload = function () {
                    return 0 < this.itemsLeft--
                }, e
            }();
            r.default = n
        }, {}],
        186: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n = function () {
                function e(t) {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.maxMilliseconds = t, this.frameStart = 0
                }

                return e.prototype.beginFrame = function () {
                    this.frameStart = Date.now()
                }, e.prototype.allowedToUpload = function () {
                    return Date.now() - this.frameStart < this.maxMilliseconds
                }, e
            }();
            r.default = n
        }, {}],
        187: [function (t, e, r) {
            "use strict";
            r.__esModule = !0;
            var n, i = function (t) {
                {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e.default = t, e
                }
            }(t("../../core")), o = t("../BasePrepare");
            var s = function (r) {
                function n(t) {
                    !function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, n);
                    var e = function (t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }(this, r.call(this, t));
                    return e.uploadHookHelper = e.renderer, e.registerFindHook(h), e.registerUploadHook(a), e.registerUploadHook(u), e
                }

                return function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(n, r), n
            }(((n = o) && n.__esModule ? n : {default: n}).default);

            function a(t, e) {
                return e instanceof i.BaseTexture && (e._glTextures[t.CONTEXT_UID] || t.textureManager.updateTexture(e), !0)
            }

            function u(t, e) {
                return e instanceof i.Graphics && ((e.dirty || e.clearDirty || !e._webGL[t.plugins.graphics.CONTEXT_UID]) && t.plugins.graphics.updateGraphics(e), !0)
            }

            function h(t, e) {
                return t instanceof i.Graphics && (e.push(t), !0)
            }

            r.default = s, i.WebGLRenderer.registerPlugin("prepare", s)
        }, {"../../core": 65, "../BasePrepare": 182}],
        188: [function (y, t, m) {
            (function (t) {
                "use strict";
                m.__esModule = !0, m.loader = m.prepare = m.particles = m.mesh = m.loaders = m.interaction = m.filters = m.extras = m.extract = m.accessibility = void 0;
                var e = y("./polyfill");
                Object.keys(e).forEach(function (t) {
                    "default" !== t && "__esModule" !== t && Object.defineProperty(m, t, {
                        enumerable: !0,
                        get: function () {
                            return e[t]
                        }
                    })
                });
                var r = y("./core");
                Object.keys(r).forEach(function (t) {
                    "default" !== t && "__esModule" !== t && Object.defineProperty(m, t, {
                        enumerable: !0,
                        get: function () {
                            return r[t]
                        }
                    })
                });
                var n, i = y("./deprecation"), o = (n = i) && n.__esModule ? n : {default: n},
                    s = v(y("./accessibility")), a = v(y("./extract")), u = v(y("./extras")), h = v(y("./filters")),
                    l = v(y("./interaction")), c = v(y("./loaders")), d = v(y("./mesh")), f = v(y("./particles")),
                    p = v(y("./prepare"));

                function v(t) {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t) for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e.default = t, e
                }

                r.utils.mixins.performMixins();
                var g = c.shared || null;
                m.accessibility = s, m.extract = a, m.extras = u, m.filters = h, m.interaction = l, m.loaders = c, m.mesh = d, m.particles = f, m.prepare = p, m.loader = g, "function" == typeof o.default && (0, o.default)(m), t.PIXI = m
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
            "./accessibility": 42,
            "./core": 65,
            "./deprecation": 130,
            "./extract": 132,
            "./extras": 141,
            "./filters": 152,
            "./interaction": 159,
            "./loaders": 162,
            "./mesh": 171,
            "./particles": 174,
            "./polyfill": 180,
            "./prepare": 184
        }]
    }, {}, [188])(188)
});