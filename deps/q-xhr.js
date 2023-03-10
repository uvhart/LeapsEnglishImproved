!function (t) {
    "function" == typeof define && define.amd ? define(["q"], function (e) {
        return t(XMLHttpRequest, e)
    }) : "object" == typeof exports && "object" == typeof module ? module.exports = t : "undefined" != typeof Q && t(XMLHttpRequest, Q)
}(function (h, l) {
    function i(n) {
        return Array.prototype.forEach.call(arguments, function (t) {
            t && t !== n && Object.keys(t).forEach(function (e) {
                n[e] = t[e]
            })
        }), n
    }

    function m(e) {
        return (e || "").toLowerCase()
    }

    function y(u) {
        var i = "object" == typeof u ? u : void 0;
        return function (e) {
            var t, n, r, o, s;
            return i || (s = {}, (t = u) && t.split("\n").forEach(function (e) {
                o = e.indexOf(":"), n = m(e.substr(0, o).trim()), r = e.substr(o + 1).trim(), n && (s[n] ? s[n] += ", " + r : s[n] = r)
            }), i = s), e ? i[m(e)] : i
        }
    }

    function x(t, n, e) {
        return "function" == typeof e ? e(t, n) : (e.forEach(function (e) {
            t = e(t, n)
        }), t)
    }

    function R(e) {
        return 200 <= e && e < 300
    }

    function q(t, n, r) {
        var e = Object.keys(t);
        return e.forEach(function (e) {
            n.call(r, t[e], e)
        }), e
    }

    function j(e, t) {
        if (!t) return e;
        var n, r, o, s = [];
        return n = t, r = function (e, t) {
            null != e && (Array.isArray(e) || (e = [e]), e.forEach(function (e) {
                "object" == typeof e && (e = JSON.stringify(e)), s.push(encodeURIComponent(t) + "=" + encodeURIComponent(e))
            }))
        }, Object.keys(n).sort().forEach(function (e) {
            r.call(o, n[e], e)
        }), e + (-1 == e.indexOf("?") ? "?" : "&") + s.join("&")
    }

    l.xhr = function (e) {
        var f = l.xhr.defaults, t = {transformRequest: f.transformRequest, transformResponse: f.transformResponse},
            p = function (e) {
                var t, n, r, o = f.headers, s = i({}, e.headers), u = function (r) {
                    q(r, function (e, t) {
                        if ("function" == typeof e) {
                            var n = e();
                            null != n ? r[t] = n : delete r[t]
                        }
                    })
                };
                u(o = i({}, o.common, o[m(e.method)])), u(s);
                e:for (t in o) {
                    for (r in n = m(t), s) if (m(r) === n) continue e;
                    s[t] = o[t]
                }
                return s
            }(e);
        i(t, e), t.headers = p, t.method = (t.method || "GET").toUpperCase();
        var d = function (e) {
            return e.data = x(e.data, e.headers, t.transformResponse), R(e.status) ? e : l.reject(e)
        }, n = l.when(t);
        return l.xhr.interceptors.filter(function (e) {
            return !!e.request || !!e.requestError
        }).map(function (e) {
            return {success: e.request, failure: e.requestError}
        }).concat({
            success: function (e) {
                p = e.headers;
                var t = x(e.data, y(p), e.transformRequest);
                return null == e.data && q(p, function (e, t) {
                    "content-type" === m(t) && delete p[t]
                }), null == e.withCredentials && null != f.withCredentials && (e.withCredentials = f.withCredentials), (r = e, n = t, u = l.defer(), i = u.promise, a = j(r.url, r.params), c = new h, l.xhr.pendingRequests.push(r), c.open(r.method, a, !0), q(r.headers, function (e, t) {
                    e && c.setRequestHeader(t, e)
                }), c.onreadystatechange = function () {
                    if (4 == c.readyState) {
                        var e, t;
                        -1 !== o && (t = c.getAllResponseHeaders(), e = c.responseType ? c.response : c.responseText), s && clearTimeout(s), o = o || c.status, c = null, o = Math.max(1223 == o ? 204 : o, 0);
                        var n = l.xhr.pendingRequests.indexOf(r);
                        -1 !== n && l.xhr.pendingRequests.splice(n, 1), (R(o) ? u.resolve : u.reject)({
                            data: e,
                            status: o,
                            headers: y(t),
                            config: r
                        })
                    }
                }, c.onprogress = function (e) {
                    u.notify(e)
                }, r.withCredentials && (c.withCredentials = !0), r.responseType && (c.responseType = r.responseType), c.send(n || null), 0 < r.timeout && (s = setTimeout(function () {
                    o = -1, c && c.abort()
                }, r.timeout)), i).then(d, d);
                var r, n, o, s, u, i, a, c
            }
        }).concat(l.xhr.interceptors.filter(function (e) {
            return !!e.response || !!e.responseError
        }).map(function (e) {
            return {success: e.response, failure: e.responseError}
        })).forEach(function (e) {
            n = n.then(e.success, e.failure)
        }), n
    };
    var e = {"Content-Type": "application/json;charset=utf-8"};
    return l.xhr.defaults = {
        transformResponse: [function (e, t) {
            return "string" == typeof e && e.length && 0 <= (t("content-type") || "").indexOf("json") && (e = JSON.parse(e)), e
        }], transformRequest: [function (e) {
            return e && "object" == typeof e && "[object File]" !== e.toString() ? JSON.stringify(e) : e
        }], headers: {common: {Accept: "application/json, text/plain, */*"}, post: e, put: e, patch: e}
    }, l.xhr.interceptors = [], l.xhr.pendingRequests = [], ["get", "delete", "head"].forEach(function (n) {
        l.xhr[n] = function (e, t) {
            return l.xhr(i(t || {}, {method: n, url: e}))
        }
    }), ["post", "put", "patch"].forEach(function (r) {
        l.xhr[r] = function (e, t, n) {
            return l.xhr(i(n || {}, {method: r, url: e, data: t}))
        }
    }), l
});