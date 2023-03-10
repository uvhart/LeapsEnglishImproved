!function (e, n) {
    "function" == typeof define && define.amd ? define(["q-xhr"], n) : e.redmetrics = n(e.b)
}(this, function (e) {
    var a = {};

    function i(e) {
        if (!e) return null;
        var n = new Date(e);
        return new Date(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate(), n.getUTCHours(), n.getUTCMinutes(), n.getUTCSeconds(), n.getUTCMilliseconds())
    }

    return a.prepareWriteConnection = function (e) {
        var t = [], r = [], o = Q.defer(), n = null, a = null, i = {
            connected: !1,
            playerId: null,
            playerInfo: {},
            options: _.defaults({}, e, {
                protocol: "https",
                host: "api.redmetrics.io",
                port: 443,
                bufferingDelay: 5e3,
                player: {}
            })
        };
        if (i.options.baseUrl || (i.options.baseUrl = i.options.protocol + "://" + i.options.host + ":" + i.options.port), !i.options.gameVersionId) throw new Error("Missing options.gameVersionId");

        function s() {
            return (new Date).toISOString()
        }

        function u() {
            0 == t.length && 0 == r.length || Q.spread([function () {
                if (0 == t.length) return Q.fcall(function () {
                    return 0
                });
                for (var e = 0; e < t.length; e++) _.extend(t[e], {
                    gameVersion: i.options.gameVersionId,
                    player: i.playerId
                });
                var n = Q.xhr({
                    url: i.options.baseUrl + "/v1/event/",
                    method: "POST",
                    data: JSON.stringify(t),
                    contentType: "application/json"
                }).then(function (e) {
                    return e.data.length
                }).fail(function (e) {
                    throw new Error("Error posting events: " + e)
                });
                return t = [], n
            }(), function () {
                if (0 == r.length) return Q.fcall(function () {
                    return 0
                });
                for (var e = 0; e < r.length; e++) _.extend(r[e], {
                    gameVersion: i.options.gameVersionId,
                    player: i.playerId
                });
                var n = Q.xhr({
                    url: i.options.baseUrl + "/v1/snapshot/",
                    method: "POST",
                    data: JSON.stringify(r),
                    contentType: "application/json"
                }).then(function (e) {
                    return e.data.length
                }).fail(function (e) {
                    throw new Error("Error posting snapshots: " + e)
                });
                return r = [], n
            }()], function (e, n) {
                o.resolve({events: e, snapshots: n})
            }).fail(function (e) {
                o.reject(new Error("Error posting data: " + e))
            }).fin(function () {
                o = Q.defer()
            })
        }

        return i.connect = function () {
            if (i.connected) throw new Error("writeConnection is already connected. Call writeConnection.disconnect() before connecting again.");
            _.extend(i.options.player, i.playerInfo);
            var e = i.playerInfo;
            return a = Q.xhr.get(i.options.baseUrl + "/status").fail(function (e) {
                throw i.connected = !1, new Error("Cannot connect to writeConnection server", i.options.baseUrl)
            }).then(function () {
                return Q.xhr.get(i.options.baseUrl + "/v1/gameVersion/" + i.options.gameVersionId).fail(function (e) {
                    throw i.connected = !1, new Error("Invalid gameVersionId")
                })
            }).then(function () {
                var e = i.options.player;
                return _.has(e, "customData") && ((e = _.clone(e)).customData = JSON.stringify(e.customData)), Q.xhr({
                    url: i.options.baseUrl + "/v1/player/",
                    method: "POST",
                    data: JSON.stringify(e),
                    contentType: "application/json"
                }).then(function (e) {
                    i.playerId = e.data.id
                }).fail(function (e) {
                    throw i.connected = !1, new Error("Cannot create player: " + e)
                })
            }).then(function () {
                if (i.connected = !0, n = window.setInterval(u, i.options.bufferingDelay), e != i.playerInfo) return i.updatePlayer(i.playerInfo)
            })
        }, i.disconnect = function () {
            function e() {
                i.playerId = null, a = null, i.connected = !1
            }

            return n && (window.clearInterval(n), n = null), a ? a.then(u).fin(e) : Q.fcall(e)
        }, i.postEvent = function (e) {
            return e.section && _.isArray(e.section) && (e.section = e.section.join(".")), t.push(_.extend(e, {userTime: s()})), o.promise
        }, i.postSnapshot = function (e) {
            return e.section && _.isArray(e.section) && (e.section = e.section.join(".")), r.push(_.extend(e, {userTime: s()})), o.promise
        }, i.updatePlayer = function (e) {
            return i.playerInfo = e, i.connected ? (_.has(e, "customData") && ((e = _.clone(e)).customData = JSON.stringify(e.customData)), Q.xhr({
                url: i.options.baseUrl + "/v1/player/" + i.playerId,
                method: "PUT",
                data: JSON.stringify(e),
                contentType: "application/json"
            }).then(function () {
                return i.playerInfo
            }).fail(function (e) {
                throw new Error("Cannot update player:", e)
            })) : Q(i.playerInfo)
        }, i
    }, a.executeQuery = function (r, o) {
        if (_.defaults({}, o, {
            protocol: "https",
            host: "api.writeConnection.io",
            port: 443
        }), o.baseUrl || (o.baseUrl = o.protocol + "://" + o.host + ":" + o.port), !r.entityType) throw new Error("Missing entityType");
        var n = _.clone(r);
        return _.each(["after", "before", "beforeUserTime", "afterUserTime"], function (e) {
            _.has(r, e) && (n[e] = function (e) {
                if (!e) return null;
                var n = new Date(e),
                    t = Date.UTC(n.getFullYear(), n.getMonth(), n.getDate(), n.getHours(), n.getMinutes(), n.getSeconds(), n.getMilliseconds());
                return new Date(t).toISOString()
            }(r[e]))
        }), Q.xhr.get(o.baseUrl + "/v1/" + n.entityType, {params: n}).then(function (e) {
            var n = e.headers(), t = {
                pageNumber: parseInt(n["x-page-number"]),
                pageCount: parseInt(n["x-page-count"]),
                perPageCount: parseInt(n["x-per-page-count"]),
                totalCount: parseInt(n["x-total-count"]),
                connectionOptions: o,
                searchFilter: r,
                data: _.each(e.data, function (e) {
                    e.serverTime = i(e.serverTime), e.userTime && (e.userTime = i(e.userTime))
                }),
                hasNextPage: function () {
                    return a.hasNextPage(t)
                },
                hasPreviousPage: function () {
                    return a.hasPreviousPage(t)
                },
                nextPage: function () {
                    return a.nextPage(t)
                },
                previousPage: function () {
                    return a.previousPage(t)
                }
            };
            return t
        })
    }, a.hasNextPage = function (e) {
        return e.pageNumber < e.pageCount
    }, a.hasPreviousPage = function (e) {
        return 1 < e.pageNumber
    }, a.nextPage = function (e) {
        var n = _.extend({}, e.searchFilter, {page: e.pageNumber + 1});
        return a.executeQuery(n, e.connectionOptions)
    }, a.previousPage = function (e) {
        if (!a.hasPreviousPage(e)) throw new Error("There is no previous page");
        var n = _.extend({}, e.searchFilter, {page: e.pageNumber - 1});
        return a.executeQuery(n, e.connectionOptions)
    }, a
});