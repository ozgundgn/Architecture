(function (n) {
    var r = {};

    function o(e) {
        if (r[e]) return r[e].exports;
        var t = r[e] = {
            i: e,
            l: false,
            exports: {}
        };
        n[e].call(t.exports, t, t.exports, o);
        t.l = true;
        return t.exports
    }
    o.m = n;
    o.c = r;
    o.d = function (e, t, n) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: true,
            get: n
        })
    };
    o.r = function (e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(e, "__esModule", {
            value: true
        })
    };
    o.t = function (t, e) {
        1 & e && (t = o(t));
        if (8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        o.r(n);
        Object.defineProperty(n, "default", {
            enumerable: true,
            value: t
        });
        if (2 & e && "string" != typeof t)
            for (var r in t) o.d(n, r, function (e) {
                return t[e]
            }.bind(null, r));
        return n
    };
    o.n = function (t) {
        var e = t && t.__esModule ? function e() {
            return t["default"]
        } : function e() {
            return t
        };
        o.d(e, "a", e);
        return e
    };
    o.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    };
    o.p = "https://assets.squarespace.com/universal/scripts-compressed/";
    return o(o.s = "./src/main/webapp/universal/src/apps/Performance/bootstrap.js")
})({
    "./node_modules/process/browser.js": function (e, t) {
        var n = e.exports = {};
        var r;
        var o;

        function i() {
            throw new Error("setTimeout has not been defined")
        }

        function a() {
            throw new Error("clearTimeout has not been defined")
        } (function () {
            try {
                r = "function" === typeof setTimeout ? setTimeout : i
            } catch (e) {
                r = i
            }
            try {
                o = "function" === typeof clearTimeout ? clearTimeout : a
            } catch (e) {
                o = a
            }
        })();

        function s(t) {
            if (r === setTimeout) return setTimeout(t, 0);
            if ((r === i || !r) && setTimeout) {
                r = setTimeout;
                return setTimeout(t, 0)
            }
            try {
                return r(t, 0)
            } catch (e) {
                try {
                    return r.call(null, t, 0)
                } catch (e) {
                    return r.call(this, t, 0)
                }
            }
        }

        function u(t) {
            if (o === clearTimeout) return clearTimeout(t);
            if ((o === a || !o) && clearTimeout) {
                o = clearTimeout;
                return clearTimeout(t)
            }
            try {
                return o(t)
            } catch (e) {
                try {
                    return o.call(null, t)
                } catch (e) {
                    return o.call(this, t)
                }
            }
        }
        var c = [];
        var l = false;
        var f;
        var p = -1;

        function d() {
            if (!l || !f) return;
            l = false;
            f.length ? c = f.concat(c) : p = -1;
            c.length && v()
        }

        function v() {
            if (l) return;
            var e = s(d);
            l = true;
            var t = c.length;
            while (t) {
                f = c;
                c = [];
                while (++p < t) f && f[p].run();
                p = -1;
                t = c.length
            }
            f = null;
            l = false;
            u(e)
        }
        n.nextTick = function (e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            c.push(new m(e, t));
            1 !== c.length || l || s(v)
        };

        function m(e, t) {
            this.fun = e;
            this.array = t
        }
        m.prototype.run = function () {
            this.fun.apply(null, this.array)
        };
        n.title = "browser";
        n.browser = true;
        n.env = {};
        n.argv = [];
        n.version = "";
        n.versions = {};

        function h() { }
        n.on = h;
        n.addListener = h;
        n.once = h;
        n.off = h;
        n.removeListener = h;
        n.removeAllListeners = h;
        n.emit = h;
        n.prependListener = h;
        n.prependOnceListener = h;
        n.listeners = function (e) {
            return []
        };
        n.binding = function (e) {
            throw new Error("process.binding is not supported")
        };
        n.cwd = function () {
            return "/"
        };
        n.chdir = function (e) {
            throw new Error("process.chdir is not supported")
        };
        n.umask = function () {
            return 0
        }
    },
    "./node_modules/webpack/buildin/global.js": function (e, t) {
        var n;
        n = function () {
            return this
        }();
        try {
            n = n || new Function("return this")()
        } catch (e) {
            "object" === typeof window && (n = window)
        }
        e.exports = n
    },
    "./node_modules/webpack/buildin/harmony-module.js": function (e, t) {
        e.exports = function (e) {
            if (!e.webpackPolyfill) {
                var t = Object.create(e);
                t.children || (t.children = []);
                Object.defineProperty(t, "loaded", {
                    enumerable: true,
                    get: function () {
                        return t.l
                    }
                });
                Object.defineProperty(t, "id", {
                    enumerable: true,
                    get: function () {
                        return t.i
                    }
                });
                Object.defineProperty(t, "exports", {
                    enumerable: true
                });
                t.webpackPolyfill = 1
            }
            return t
        }
    },
    "./src/main/webapp/universal/node_modules/@babel/runtime/helpers/defineProperty.js": function (e, t) {
        function n(e, t, n) {
            t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: true,
                configurable: true,
                writable: true
            }) : e[t] = n;
            return e
        }
        e.exports = n
    },
    "./src/main/webapp/universal/node_modules/@babel/runtime/helpers/interopRequireDefault.js": function (e, t) {
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        e.exports = n
    },
    "./src/main/webapp/universal/node_modules/@babel/runtime/helpers/interopRequireWildcard.js": function (e, t) {
        function n(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                        r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                    } t["default"] = e;
            return t
        }
        e.exports = n
    },
    "./src/main/webapp/universal/node_modules/@sentry/browser/esm/index.js": function (e, t, n) {
        "use strict";
        n.r(t);
        n.d(t, "Severity", function () {
            return c["a"]
        });
        n.d(t, "Status", function () {
            return a
        });
        n.d(t, "addGlobalEventProcessor", function () {
            return s["b"]
        });
        n.d(t, "addBreadcrumb", function () {
            return m
        });
        n.d(t, "captureException", function () {
            return f
        });
        n.d(t, "captureEvent", function () {
            return d
        });
        n.d(t, "captureMessage", function () {
            return p
        });
        n.d(t, "configureScope", function () {
            return v
        });
        n.d(t, "getHubFromCarrier", function () {
            return l["c"]
        });
        n.d(t, "getCurrentHub", function () {
            return l["b"]
        });
        n.d(t, "Hub", function () {
            return l["a"]
        });
        n.d(t, "Scope", function () {
            return s["a"]
        });
        n.d(t, "setContext", function () {
            return y
        });
        n.d(t, "setExtra", function () {
            return _
        });
        n.d(t, "setExtras", function () {
            return b
        });
        n.d(t, "setTag", function () {
            return w
        });
        n.d(t, "setTags", function () {
            return g
        });
        n.d(t, "setUser", function () {
            return j
        });
        n.d(t, "withScope", function () {
            return E
        });
        n.d(t, "BrowserClient", function () {
            return me
        });
        n.d(t, "defaultIntegrations", function () {
            return De
        });
        n.d(t, "forceLoad", function () {
            return Ue
        });
        n.d(t, "init", function () {
            return Ne
        });
        n.d(t, "lastEventId", function () {
            return Be
        });
        n.d(t, "onLoad", function () {
            return Fe
        });
        n.d(t, "showReportDialog", function () {
            return Me
        });
        n.d(t, "flush", function () {
            return qe
        });
        n.d(t, "close", function () {
            return He
        });
        n.d(t, "wrap", function () {
            return ze
        });
        n.d(t, "SDK_NAME", function () {
            return de
        });
        n.d(t, "SDK_VERSION", function () {
            return ve
        });
        n.d(t, "Integrations", function () {
            return Ve
        });
        n.d(t, "Transports", function () {
            return i
        });
        var r = {};
        n.r(r);
        n.d(r, "FunctionToString", function () {
            return ye
        });
        n.d(r, "InboundFilters", function () {
            return ge
        });
        var o = {};
        n.r(o);
        n.d(o, "GlobalHandlers", function () {
            return Pe
        });
        n.d(o, "TryCatch", function () {
            return Oe
        });
        n.d(o, "Breadcrumbs", function () {
            return xe
        });
        n.d(o, "LinkedErrors", function () {
            return Re
        });
        n.d(o, "UserAgent", function () {
            return Le
        });
        var i = {};
        n.r(i);
        n.d(i, "BaseTransport", function () {
            return ue
        });
        n.d(i, "FetchTransport", function () {
            return le
        });
        n.d(i, "XHRTransport", function () {
            return fe
        });
        var h = n("./src/main/webapp/universal/node_modules/tslib/tslib.es6.js");
        var c = n("./src/main/webapp/universal/node_modules/@sentry/types/esm/severity.js");
        var a;
        (function (e) {
            e["Unknown"] = "unknown";
            e["Skipped"] = "skipped";
            e["Success"] = "success";
            e["RateLimit"] = "rate_limit";
            e["Invalid"] = "invalid";
            e["Failed"] = "failed"
        })(a = a || {});
        (function (t) {
            function e(e) {
                if (e >= 200 && e < 300) return t.Success;
                if (429 === e) return t.RateLimit;
                if (e >= 400 && e < 500) return t.Invalid;
                if (e >= 500) return t.Failed;
                return t.Unknown
            }
            t.fromHttpCode = e
        })(a = a || {});
        var s = n("./src/main/webapp/universal/node_modules/@sentry/hub/esm/scope.js");
        var l = n("./src/main/webapp/universal/node_modules/@sentry/hub/esm/hub.js");

        function u(e) {
            var t = [];
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            var r = Object(l["b"])();
            if (r && r[e]) return r[e].apply(r, h["d"](t));
            throw new Error("No hub defined or " + e + " was not found on the hub, please open a bug report.")
        }

        function f(e) {
            var t;
            try {
                throw new Error("Sentry syntheticException")
            } catch (e) {
                t = e
            }
            return u("captureException", e, {
                originalException: e,
                syntheticException: t
            })
        }

        function p(e, t) {
            var n;
            try {
                throw new Error(e)
            } catch (e) {
                n = e
            }
            return u("captureMessage", e, t, {
                originalException: e,
                syntheticException: n
            })
        }

        function d(e) {
            return u("captureEvent", e)
        }

        function v(e) {
            u("configureScope", e)
        }

        function m(e) {
            u("addBreadcrumb", e)
        }

        function y(e, t) {
            u("setContext", e, t)
        }

        function b(e) {
            u("setExtras", e)
        }

        function g(e) {
            u("setTags", e)
        }

        function _(e, t) {
            u("setExtra", e, t)
        }

        function w(e, t) {
            u("setTag", e, t)
        }

        function j(e) {
            u("setUser", e)
        }

        function E(e) {
            u("withScope", e)
        }

        function S(e) {
            var t = [];
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            u.apply(void 0, h["d"](["_invokeClient", e], t))
        }
        var O = n("./src/main/webapp/universal/node_modules/@sentry/utils/esm/dsn.js");
        var T = n("./src/main/webapp/universal/node_modules/@sentry/utils/esm/object.js");
        var x = "7";
        var k = function () {
            function e(e) {
                this.dsn = e;
                this._dsnObject = new O["a"](e)
            }
            e.prototype.getDsn = function () {
                return this._dsnObject
            };
            e.prototype.getStoreEndpoint = function () {
                return "" + this._getBaseUrl() + this.getStoreEndpointPath()
            };
            e.prototype.getStoreEndpointWithUrlEncodedAuth = function () {
                var e = this._dsnObject;
                var t = {
                    sentry_key: e.user,
                    sentry_version: x
                };
                return this.getStoreEndpoint() + "?" + Object(T["f"])(t)
            };
            e.prototype._getBaseUrl = function () {
                var e = this._dsnObject;
                var t = e.protocol ? e.protocol + ":" : "";
                var n = e.port ? ":" + e.port : "";
                return t + "//" + e.host + n
            };
            e.prototype.getStoreEndpointPath = function () {
                var e = this._dsnObject;
                return (e.path ? "/" + e.path : "") + "/api/" + e.projectId + "/store/"
            };
            e.prototype.getRequestHeaders = function (e, t) {
                var n = this._dsnObject;
                var r = ["Sentry sentry_version=" + x];
                r.push("sentry_client=" + e + "/" + t);
                r.push("sentry_key=" + n.user);
                n.pass && r.push("sentry_secret=" + n.pass);
                return {
                    "Content-Type": "application/json",
                    "X-Sentry-Auth": r.join(", ")
                }
            };
            e.prototype.getReportDialogEndpoint = function (e) {
                void 0 === e && (e = {});
                var t = this._dsnObject;
                var n = this._getBaseUrl() + (t.path ? "/" + t.path : "") + "/api/embed/error-page/";
                var r = [];
                r.push("dsn=" + t.toString());
                for (var o in e)
                    if ("user" === o) {
                        if (!e.user) continue;
                        e.user.name && r.push("name=" + encodeURIComponent(e.user.name));
                        e.user.email && r.push("email=" + encodeURIComponent(e.user.email))
                    } else r.push(encodeURIComponent(o) + "=" + encodeURIComponent(e[o]));
                if (r.length) return n + "?" + r.join("&");
                return n
            };
            return e
        }();
        var P = n("./src/main/webapp/universal/node_modules/@sentry/utils/esm/logger.js");
        var I = n("./src/main/webapp/universal/node_modules/@sentry/utils/esm/is.js");
        var C = n("./src/main/webapp/universal/node_modules/@sentry/utils/esm/syncpromise.js");
        var R = n("./src/main/webapp/universal/node_modules/@sentry/utils/esm/string.js");
        var A = n("./src/main/webapp/universal/node_modules/@sentry/utils/esm/misc.js");
        var L = [];

        function D(e) {
            var t = e.defaultIntegrations && h["d"](e.defaultIntegrations) || [];
            var n = e.integrations;
            var r = [];
            if (Array.isArray(n)) {
                var o = n.map(function (e) {
                    return e.name
                });
                var i = [];
                t.forEach(function (e) {
                    if (-1 === o.indexOf(e.name) && -1 === i.indexOf(e.name)) {
                        r.push(e);
                        i.push(e.name)
                    }
                });
                n.forEach(function (e) {
                    if (-1 === i.indexOf(e.name)) {
                        r.push(e);
                        i.push(e.name)
                    }
                })
            } else if ("function" === typeof n) {
                r = n(t);
                r = Array.isArray(r) ? r : [r]
            } else r = h["d"](t);
            var a = r.map(function (e) {
                return e.name
            });
            var s = "Debug"; - 1 !== a.indexOf(s) && r.push.apply(r, h["d"](r.splice(a.indexOf(s), 1)));
            return r
        }

        function N(e) {
            if (-1 !== L.indexOf(e.name)) return;
            e.setupOnce(s["b"], l["b"]);
            L.push(e.name);
            P["a"].log("Integration installed: " + e.name)
        }

        function M(e) {
            var t = {};
            D(e).forEach(function (e) {
                t[e.name] = e;
                N(e)
            });
            return t
        }
        var B = function () {
            function e(e, t) {
                this._integrations = {};
                this._processing = false;
                this._backend = new e(t);
                this._options = t;
                t.dsn && (this._dsn = new O["a"](t.dsn))
            }
            e.prototype.captureException = function (e, t, n) {
                var r = this;
                var o = t && t.event_id;
                this._processing = true;
                this._getBackend().eventFromException(e, t).then(function (e) {
                    return r._processEvent(e, t, n)
                }).then(function (e) {
                    o = e && e.event_id;
                    r._processing = false
                }).then(null, function (e) {
                    P["a"].error(e);
                    r._processing = false
                });
                return o
            };
            e.prototype.captureMessage = function (e, t, n, r) {
                var o = this;
                var i = n && n.event_id;
                this._processing = true;
                var a = Object(I["i"])(e) ? this._getBackend().eventFromMessage("" + e, t, n) : this._getBackend().eventFromException(e, n);
                a.then(function (e) {
                    return o._processEvent(e, n, r)
                }).then(function (e) {
                    i = e && e.event_id;
                    o._processing = false
                }).then(null, function (e) {
                    P["a"].error(e);
                    o._processing = false
                });
                return i
            };
            e.prototype.captureEvent = function (e, t, n) {
                var r = this;
                var o = t && t.event_id;
                this._processing = true;
                this._processEvent(e, t, n).then(function (e) {
                    o = e && e.event_id;
                    r._processing = false
                }).then(null, function (e) {
                    P["a"].error(e);
                    r._processing = false
                });
                return o
            };
            e.prototype.getDsn = function () {
                return this._dsn
            };
            e.prototype.getOptions = function () {
                return this._options
            };
            e.prototype.flush = function (e) {
                var n = this;
                return this._isClientProcessing(e).then(function (t) {
                    clearInterval(t.interval);
                    return n._getBackend().getTransport().close(e).then(function (e) {
                        return t.ready && e
                    })
                })
            };
            e.prototype.close = function (e) {
                var t = this;
                return this.flush(e).then(function (e) {
                    t.getOptions().enabled = false;
                    return e
                })
            };
            e.prototype.setupIntegrations = function () {
                this._isEnabled() && (this._integrations = M(this._options))
            };
            e.prototype.getIntegration = function (t) {
                try {
                    return this._integrations[t.id] || null
                } catch (e) {
                    P["a"].warn("Cannot retrieve integration " + t.id + " from the current Client");
                    return null
                }
            };
            e.prototype._isClientProcessing = function (o) {
                var i = this;
                return new C["a"](function (e) {
                    var t = 0;
                    var n = 1;
                    var r = 0;
                    clearInterval(r);
                    r = setInterval(function () {
                        if (i._processing) {
                            t += n;
                            o && t >= o && e({
                                interval: r,
                                ready: false
                            })
                        } else e({
                            interval: r,
                            ready: true
                        })
                    }, n)
                })
            };
            e.prototype._getBackend = function () {
                return this._backend
            };
            e.prototype._isEnabled = function () {
                return false !== this.getOptions().enabled && void 0 !== this._dsn
            };
            e.prototype._prepareEvent = function (e, t, n) {
                var r = this;
                var o = this.getOptions(),
                    i = o.environment,
                    a = o.release,
                    s = o.dist,
                    u = o.maxValueLength,
                    c = void 0 === u ? 250 : u,
                    l = o.normalizeDepth,
                    f = void 0 === l ? 3 : l;
                var p = h["a"]({}, e);
                void 0 === p.environment && void 0 !== i && (p.environment = i);
                void 0 === p.release && void 0 !== a && (p.release = a);
                void 0 === p.dist && void 0 !== s && (p.dist = s);
                p.message && (p.message = Object(R["d"])(p.message, c));
                var d = p.exception && p.exception.values && p.exception.values[0];
                d && d.value && (d.value = Object(R["d"])(d.value, c));
                var v = p.request;
                v && v.url && (v.url = Object(R["d"])(v.url, c));
                void 0 === p.event_id && (p.event_id = n && n.event_id ? n.event_id : Object(A["q"])());
                this._addIntegrations(p.sdk);
                var m = C["a"].resolve(p);
                t && (m = t.applyToEvent(p, n));
                return m.then(function (e) {
                    if ("number" === typeof f && f > 0) return r._normalizeEvent(e, f);
                    return e
                })
            };
            e.prototype._normalizeEvent = function (e, t) {
                if (!e) return null;
                return h["a"]({}, e, e.breadcrumbs && {
                    breadcrumbs: e.breadcrumbs.map(function (e) {
                        return h["a"]({}, e, e.data && {
                            data: Object(T["d"])(e.data, t)
                        })
                    })
                }, e.user && {
                    user: Object(T["d"])(e.user, t)
                }, e.contexts && {
                    contexts: Object(T["d"])(e.contexts, t)
                }, e.extra && {
                    extra: Object(T["d"])(e.extra, t)
                })
            };
            e.prototype._addIntegrations = function (e) {
                var t = Object.keys(this._integrations);
                e && t.length > 0 && (e.integrations = t)
            };
            e.prototype._processEvent = function (e, a, t) {
                var s = this;
                var n = this.getOptions(),
                    u = n.beforeSend,
                    r = n.sampleRate;
                if (!this._isEnabled()) return C["a"].reject("SDK not enabled, will not send event.");
                if ("number" === typeof r && Math.random() > r) return C["a"].reject("This event has been sampled, will not send event.");
                return new C["a"](function (o, i) {
                    s._prepareEvent(e, t, a).then(function (e) {
                        if (null === e) {
                            i("An event processor returned null, will not send event.");
                            return
                        }
                        var t = e;
                        var n = a && a.data && true === a.data.__sentry__;
                        if (n || !u) {
                            s._getBackend().sendEvent(t);
                            o(t);
                            return
                        }
                        var r = u(e, a);
                        if ("undefined" === typeof r) P["a"].error("`beforeSend` method has to return `null` or a valid event.");
                        else if (Object(I["m"])(r)) s._handleAsyncBeforeSend(r, o, i);
                        else {
                            t = r;
                            if (null === t) {
                                P["a"].log("`beforeSend` returned `null`, will not send event.");
                                o(null);
                                return
                            }
                            s._getBackend().sendEvent(t);
                            o(t)
                        }
                    }).then(null, function (e) {
                        s.captureException(e, {
                            data: {
                                __sentry__: true
                            },
                            originalException: e
                        });
                        i("Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " + e)
                    })
                })
            };
            e.prototype._handleAsyncBeforeSend = function (e, t, n) {
                var r = this;
                e.then(function (e) {
                    if (null === e) {
                        n("`beforeSend` returned `null`, will not send event.");
                        return
                    }
                    r._getBackend().sendEvent(e);
                    t(e)
                }).then(null, function (e) {
                    n("beforeSend rejected with " + e)
                })
            };
            return e
        }();
        var U = n("./src/main/webapp/universal/node_modules/@sentry/utils/esm/error.js");
        var F = function () {
            function e() { }
            e.prototype.sendEvent = function (e) {
                return C["a"].resolve({
                    reason: "NoopTransport: Event has been skipped because no Dsn is configured.",
                    status: a.Skipped
                })
            };
            e.prototype.close = function (e) {
                return C["a"].resolve(true)
            };
            return e
        }();
        var q = function () {
            function e(e) {
                this._options = e;
                this._options.dsn || P["a"].warn("No DSN provided, backend will not do anything.");
                this._transport = this._setupTransport()
            }
            e.prototype._setupTransport = function () {
                return new F
            };
            e.prototype.eventFromException = function (e, t) {
                throw new U["a"]("Backend has to implement `eventFromException` method")
            };
            e.prototype.eventFromMessage = function (e, t, n) {
                throw new U["a"]("Backend has to implement `eventFromMessage` method")
            };
            e.prototype.sendEvent = function (e) {
                this._transport.sendEvent(e).then(null, function (e) {
                    P["a"].error("Error while sending event: " + e)
                })
            };
            e.prototype.getTransport = function () {
                return this._transport
            };
            return e
        }();
        var H = n("./src/main/webapp/universal/node_modules/@sentry/utils/esm/supports.js");
        var z = "?";
        var Y = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
        var W = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js))(?::(\d+))?(?::(\d+))?\s*$/i;
        var V = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
        var G = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
        var X = /\((\S*)(?::(\d+))(?::(\d+))\)/;

        function K(e) {
            var t = null;
            var n = e && e.framesToPop;
            try {
                t = $(e);
                if (t) return Z(t, n)
            } catch (e) { }
            try {
                t = J(e);
                if (t) return Z(t, n)
            } catch (e) { }
            return {
                message: Q(e),
                name: e && e.name,
                stack: [],
                failed: true
            }
        }

        function J(e) {
            if (!e || !e.stack) return null;
            var t = [];
            var n = e.stack.split("\n");
            var r;
            var o;
            var i;
            var a;
            for (var s = 0; s < n.length; ++s) {
                if (i = Y.exec(n[s])) {
                    var u = i[2] && 0 === i[2].indexOf("native");
                    r = i[2] && 0 === i[2].indexOf("eval");
                    if (r && (o = X.exec(i[2]))) {
                        i[2] = o[1];
                        i[3] = o[2];
                        i[4] = o[3]
                    }
                    a = {
                        url: i[2] && 0 === i[2].indexOf("address at ") ? i[2].substr("address at ".length) : i[2],
                        func: i[1] || z,
                        args: u ? [i[2]] : [],
                        line: i[3] ? +i[3] : null,
                        column: i[4] ? +i[4] : null
                    }
                } else if (i = V.exec(n[s])) a = {
                    url: i[2],
                    func: i[1] || z,
                    args: [],
                    line: +i[3],
                    column: i[4] ? +i[4] : null
                };
                else {
                    if (!(i = W.exec(n[s]))) continue;
                    r = i[3] && i[3].indexOf(" > eval") > -1;
                    if (r && (o = G.exec(i[3]))) {
                        i[1] = i[1] || "eval";
                        i[3] = o[1];
                        i[4] = o[2];
                        i[5] = ""
                    } else 0 !== s || i[5] || void 0 === e.columnNumber || (t[0].column = e.columnNumber + 1);
                    a = {
                        url: i[3],
                        func: i[1] || z,
                        args: i[2] ? i[2].split(",") : [],
                        line: i[4] ? +i[4] : null,
                        column: i[5] ? +i[5] : null
                    }
                } !a.func && a.line && (a.func = z);
                t.push(a)
            }
            if (!t.length) return null;
            return {
                message: Q(e),
                name: e.name,
                stack: t
            }
        }

        function $(e) {
            if (!e || !e.stacktrace) return null;
            var t = e.stacktrace;
            var n = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i;
            var r = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\))? in (.*):\s*$/i;
            var o = t.split("\n");
            var i = [];
            var a;
            for (var s = 0; s < o.length; s += 2) {
                var u = null;
                (a = n.exec(o[s])) ? u = {
                    url: a[2],
                    func: a[3],
                    args: [],
                    line: +a[1],
                    column: null
                } : (a = r.exec(o[s])) && (u = {
                    url: a[6],
                    func: a[3] || a[4],
                    args: a[5] ? a[5].split(",") : [],
                    line: +a[1],
                    column: +a[2]
                });
                if (u) {
                    !u.func && u.line && (u.func = z);
                    i.push(u)
                }
            }
            if (!i.length) return null;
            return {
                message: Q(e),
                name: e.name,
                stack: i
            }
        }

        function Z(t, e) {
            try {
                return h["a"]({}, t, {
                    stack: t.stack.slice(e)
                })
            } catch (e) {
                return t
            }
        }

        function Q(e) {
            var t = e && e.message;
            if (!t) return "No error message";
            if (t.error && "string" === typeof t.error.message) return t.error.message;
            return t
        }
        var ee = 50;

        function te(e) {
            var t = oe(e.stack);
            var n = {
                type: e.name,
                value: e.message
            };
            t && t.length && (n.stacktrace = {
                frames: t
            });
            void 0 === n.type && "" === n.value && (n.value = "Unrecoverable error caught");
            return n
        }

        function ne(e, t, n) {
            var r = {
                exception: {
                    values: [{
                        type: Object(I["f"])(e) ? e.constructor.name : n ? "UnhandledRejection" : "Error",
                        value: "Non-Error " + (n ? "promise rejection" : "exception") + " captured with keys: " + Object(T["b"])(e)
                    }]
                },
                extra: {
                    __serialized__: Object(T["e"])(e)
                }
            };
            if (t) {
                var o = K(t);
                var i = oe(o.stack);
                r.stacktrace = {
                    frames: i
                }
            }
            return r
        }

        function re(e) {
            var t = te(e);
            return {
                exception: {
                    values: [t]
                }
            }
        }

        function oe(e) {
            if (!e || !e.length) return [];
            var t = e;
            var n = t[0].func || "";
            var r = t[t.length - 1].func || ""; - 1 === n.indexOf("captureMessage") && -1 === n.indexOf("captureException") || (t = t.slice(1)); - 1 !== r.indexOf("sentryWrapped") && (t = t.slice(0, -1));
            return t.map(function (e) {
                return {
                    colno: null === e.column ? void 0 : e.column,
                    filename: e.url || t[0].url,
                    function: e.func || "?",
                    in_app: true,
                    lineno: null === e.line ? void 0 : e.line
                }
            }).slice(0, ee).reverse()
        }

        function ie(e, t, n) {
            void 0 === n && (n = {});
            var r;
            if (Object(I["e"])(e) && e.error) {
                var o = e;
                e = o.error;
                r = re(K(e));
                return r
            }
            if (Object(I["a"])(e) || Object(I["b"])(e)) {
                var i = e;
                var a = i.name || (Object(I["a"])(i) ? "DOMError" : "DOMException");
                var s = i.message ? a + ": " + i.message : a;
                r = ae(s, t, n);
                Object(A["c"])(r, s);
                return r
            }
            if (Object(I["d"])(e)) {
                r = re(K(e));
                return r
            }
            if (Object(I["h"])(e) || Object(I["f"])(e)) {
                var u = e;
                r = ne(u, t, n.rejection);
                Object(A["b"])(r, {
                    synthetic: true
                });
                return r
            }
            r = ae(e, t, n);
            Object(A["c"])(r, "" + e, void 0);
            Object(A["b"])(r, {
                synthetic: true
            });
            return r
        }

        function ae(e, t, n) {
            void 0 === n && (n = {});
            var r = {
                message: e
            };
            if (n.attachStacktrace && t) {
                var o = K(t);
                var i = oe(o.stack);
                r.stacktrace = {
                    frames: i
                }
            }
            return r
        }
        var se = n("./src/main/webapp/universal/node_modules/@sentry/utils/esm/promisebuffer.js");
        var ue = function () {
            function e(e) {
                this.options = e;
                this._buffer = new se["a"](30);
                this.url = new k(this.options.dsn).getStoreEndpointWithUrlEncodedAuth()
            }
            e.prototype.sendEvent = function (e) {
                throw new U["a"]("Transport Class has to implement `sendEvent` method")
            };
            e.prototype.close = function (e) {
                return this._buffer.drain(e)
            };
            return e
        }();
        var ce = Object(A["i"])();
        var le = function (t) {
            h["b"](e, t);

            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                e._disabledUntil = new Date(Date.now());
                return e
            }
            e.prototype.sendEvent = function (e) {
                var i = this;
                if (new Date(Date.now()) < this._disabledUntil) return Promise.reject({
                    event: e,
                    reason: "Transport locked till " + this._disabledUntil + " due to too many requests.",
                    status: 429
                });
                var t = {
                    body: JSON.stringify(e),
                    method: "POST",
                    referrerPolicy: Object(H["g"])() ? "origin" : ""
                };
                void 0 !== this.options.headers && (t.headers = this.options.headers);
                return this._buffer.add(new C["a"](function (r, o) {
                    ce.fetch(i.url, t).then(function (e) {
                        var t = a.fromHttpCode(e.status);
                        if (t === a.Success) {
                            r({
                                status: t
                            });
                            return
                        }
                        if (t === a.RateLimit) {
                            var n = Date.now();
                            i._disabledUntil = new Date(n + Object(A["m"])(n, e.headers.get("Retry-After")));
                            P["a"].warn("Too many requests, backing off till: " + i._disabledUntil)
                        }
                        o(e)
                    }).catch(o)
                }))
            };
            return e
        }(ue);
        var fe = function (t) {
            h["b"](e, t);

            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                e._disabledUntil = new Date(Date.now());
                return e
            }
            e.prototype.sendEvent = function (t) {
                var i = this;
                if (new Date(Date.now()) < this._disabledUntil) return Promise.reject({
                    event: t,
                    reason: "Transport locked till " + this._disabledUntil + " due to too many requests.",
                    status: 429
                });
                return this._buffer.add(new C["a"](function (n, r) {
                    var o = new XMLHttpRequest;
                    o.onreadystatechange = function () {
                        if (4 !== o.readyState) return;
                        var e = a.fromHttpCode(o.status);
                        if (e === a.Success) {
                            n({
                                status: e
                            });
                            return
                        }
                        if (e === a.RateLimit) {
                            var t = Date.now();
                            i._disabledUntil = new Date(t + Object(A["m"])(t, o.getResponseHeader("Retry-After")));
                            P["a"].warn("Too many requests, backing off till: " + i._disabledUntil)
                        }
                        r(o)
                    };
                    o.open("POST", i.url);
                    for (var e in i.options.headers) i.options.headers.hasOwnProperty(e) && o.setRequestHeader(e, i.options.headers[e]);
                    o.send(JSON.stringify(t))
                }))
            };
            return e
        }(ue);
        var pe = function (t) {
            h["b"](e, t);

            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            e.prototype._setupTransport = function () {
                if (!this._options.dsn) return t.prototype._setupTransport.call(this);
                var e = h["a"]({}, this._options.transportOptions, {
                    dsn: this._options.dsn
                });
                if (this._options.transport) return new this._options.transport(e);
                if (Object(H["d"])()) return new le(e);
                return new fe(e)
            };
            e.prototype.eventFromException = function (e, t) {
                var n = t && t.syntheticException || void 0;
                var r = ie(e, n, {
                    attachStacktrace: this._options.attachStacktrace
                });
                Object(A["b"])(r, {
                    handled: true,
                    type: "generic"
                });
                r.level = c["a"].Error;
                t && t.event_id && (r.event_id = t.event_id);
                return C["a"].resolve(r)
            };
            e.prototype.eventFromMessage = function (e, t, n) {
                void 0 === t && (t = c["a"].Info);
                var r = n && n.syntheticException || void 0;
                var o = ae(e, r, {
                    attachStacktrace: this._options.attachStacktrace
                });
                o.level = t;
                n && n.event_id && (o.event_id = n.event_id);
                return C["a"].resolve(o)
            };
            return e
        }(q);
        var de = "sentry.javascript.browser";
        var ve = "5.15.0";
        var me = function (r) {
            h["b"](e, r);

            function e(e) {
                void 0 === e && (e = {});
                return r.call(this, pe, e) || this
            }
            e.prototype._prepareEvent = function (e, t, n) {
                e.platform = e.platform || "javascript";
                e.sdk = h["a"]({}, e.sdk, {
                    name: de,
                    packages: h["d"](e.sdk && e.sdk.packages || [], [{
                        name: "npm:@sentry/browser",
                        version: ve
                    }]),
                    version: ve
                });
                return r.prototype._prepareEvent.call(this, e, t, n)
            };
            e.prototype.showReportDialog = function (e) {
                void 0 === e && (e = {});
                var t = Object(A["i"])().document;
                if (!t) return;
                if (!this._isEnabled()) {
                    P["a"].error("Trying to call showReportDialog with Sentry Client is disabled");
                    return
                }
                var n = e.dsn || this.getDsn();
                if (!e.eventId) {
                    P["a"].error("Missing `eventId` option in showReportDialog call");
                    return
                }
                if (!n) {
                    P["a"].error("Missing `Dsn` option in showReportDialog call");
                    return
                }
                var r = t.createElement("script");
                r.async = true;
                r.src = new k(n).getReportDialogEndpoint(e);
                e.onLoad && (r.onload = e.onLoad);
                (t.head || t.body).appendChild(r)
            };
            return e
        }(B);
        var he;
        var ye = function () {
            function e() {
                this.name = e.id
            }
            e.prototype.setupOnce = function () {
                he = Function.prototype.toString;
                Function.prototype.toString = function () {
                    var e = [];
                    for (var t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    var n = this.__sentry_original__ || this;
                    return he.apply(n, e)
                }
            };
            e.id = "FunctionToString";
            return e
        }();
        var be = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];
        var ge = function () {
            function a(e) {
                void 0 === e && (e = {});
                this._options = e;
                this.name = a.id
            }
            a.prototype.setupOnce = function () {
                Object(s["b"])(function (e) {
                    var t = Object(l["b"])();
                    if (!t) return e;
                    var n = t.getIntegration(a);
                    if (n) {
                        var r = t.getClient();
                        var o = r ? r.getOptions() : {};
                        var i = n._mergeOptions(o);
                        if (n._shouldDropEvent(e, i)) return null
                    }
                    return e
                })
            };
            a.prototype._shouldDropEvent = function (e, t) {
                if (this._isSentryError(e, t)) {
                    P["a"].warn("Event dropped due to being internal Sentry Error.\nEvent: " + Object(A["g"])(e));
                    return true
                }
                if (this._isIgnoredError(e, t)) {
                    P["a"].warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + Object(A["g"])(e));
                    return true
                }
                if (this._isBlacklistedUrl(e, t)) {
                    P["a"].warn("Event dropped due to being matched by `blacklistUrls` option.\nEvent: " + Object(A["g"])(e) + ".\nUrl: " + this._getEventFilterUrl(e));
                    return true
                }
                if (!this._isWhitelistedUrl(e, t)) {
                    P["a"].warn("Event dropped due to not being matched by `whitelistUrls` option.\nEvent: " + Object(A["g"])(e) + ".\nUrl: " + this._getEventFilterUrl(e));
                    return true
                }
                return false
            };
            a.prototype._isSentryError = function (e, t) {
                void 0 === t && (t = {});
                if (!t.ignoreInternal) return false;
                try {
                    return e && e.exception && e.exception.values && e.exception.values[0] && "SentryError" === e.exception.values[0].type || false
                } catch (e) {
                    return false
                }
            };
            a.prototype._isIgnoredError = function (e, n) {
                void 0 === n && (n = {});
                if (!n.ignoreErrors || !n.ignoreErrors.length) return false;
                return this._getPossibleEventMessages(e).some(function (t) {
                    return n.ignoreErrors.some(function (e) {
                        return Object(R["a"])(t, e)
                    })
                })
            };
            a.prototype._isBlacklistedUrl = function (e, t) {
                void 0 === t && (t = {});
                if (!t.blacklistUrls || !t.blacklistUrls.length) return false;
                var n = this._getEventFilterUrl(e);
                return !!n && t.blacklistUrls.some(function (e) {
                    return Object(R["a"])(n, e)
                })
            };
            a.prototype._isWhitelistedUrl = function (e, t) {
                void 0 === t && (t = {});
                if (!t.whitelistUrls || !t.whitelistUrls.length) return true;
                var n = this._getEventFilterUrl(e);
                return !n || t.whitelistUrls.some(function (e) {
                    return Object(R["a"])(n, e)
                })
            };
            a.prototype._mergeOptions = function (e) {
                void 0 === e && (e = {});
                return {
                    blacklistUrls: h["d"](this._options.blacklistUrls || [], e.blacklistUrls || []),
                    ignoreErrors: h["d"](this._options.ignoreErrors || [], e.ignoreErrors || [], be),
                    ignoreInternal: "undefined" === typeof this._options.ignoreInternal || this._options.ignoreInternal,
                    whitelistUrls: h["d"](this._options.whitelistUrls || [], e.whitelistUrls || [])
                }
            };
            a.prototype._getPossibleEventMessages = function (t) {
                if (t.message) return [t.message];
                if (t.exception) try {
                    var e = t.exception.values && t.exception.values[0] || {},
                        n = e.type,
                        r = void 0 === n ? "" : n,
                        o = e.value,
                        i = void 0 === o ? "" : o;
                    return ["" + i, r + ": " + i]
                } catch (e) {
                    P["a"].error("Cannot extract message for event " + Object(A["g"])(t));
                    return []
                }
                return []
            };
            a.prototype._getEventFilterUrl = function (t) {
                try {
                    if (t.stacktrace) {
                        var e = t.stacktrace.frames;
                        return e && e[e.length - 1].filename || null
                    }
                    if (t.exception) {
                        var n = t.exception.values && t.exception.values[0].stacktrace && t.exception.values[0].stacktrace.frames;
                        return n && n[n.length - 1].filename || null
                    }
                    return null
                } catch (e) {
                    P["a"].error("Cannot extract url for event " + Object(A["g"])(t));
                    return null
                }
            };
            a.id = "InboundFilters";
            return a
        }();

        function _e(e, t) {
            true === t.debug && P["a"].enable();
            var n = Object(l["b"])();
            var r = new e(t);
            n.bindClient(r)
        }
        var we = 0;

        function je() {
            return we > 0
        }

        function Ee() {
            we += 1;
            setTimeout(function () {
                we -= 1
            })
        }

        function Se(t, r, o) {
            void 0 === r && (r = {});
            if ("function" !== typeof t) return t;
            try {
                if (t.__sentry__) return t;
                if (t.__sentry_wrapped__) return t.__sentry_wrapped__
            } catch (e) {
                return t
            }
            var e = function () {
                var n = Array.prototype.slice.call(arguments);
                try {
                    o && "function" === typeof o && o.apply(this, arguments);
                    var e = n.map(function (e) {
                        return Se(e, r)
                    });
                    if (t.handleEvent) return t.handleEvent.apply(this, e);
                    return t.apply(this, e)
                } catch (t) {
                    Ee();
                    E(function (e) {
                        e.addEventProcessor(function (e) {
                            var t = h["a"]({}, e);
                            if (r.mechanism) {
                                Object(A["c"])(t, void 0, void 0);
                                Object(A["b"])(t, r.mechanism)
                            }
                            t.extra = h["a"]({}, t.extra, {
                                arguments: n
                            });
                            return t
                        });
                        f(t)
                    });
                    throw t
                }
            };
            try {
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
            } catch (e) { }
            t.prototype = t.prototype || {};
            e.prototype = t.prototype;
            Object.defineProperty(t, "__sentry_wrapped__", {
                enumerable: false,
                value: e
            });
            Object.defineProperties(e, {
                __sentry__: {
                    enumerable: false,
                    value: true
                },
                __sentry_original__: {
                    enumerable: false,
                    value: t
                }
            });
            try {
                var i = Object.getOwnPropertyDescriptor(e, "name");
                i.configurable && Object.defineProperty(e, "name", {
                    get: function () {
                        return t.name
                    }
                })
            } catch (e) { }
            return e
        }
        var Oe = function () {
            function e() {
                this._ignoreOnError = 0;
                this.name = e.id
            }
            e.prototype._wrapTimeFunction = function (r) {
                return function () {
                    var e = [];
                    for (var t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    var n = e[0];
                    e[0] = Se(n, {
                        mechanism: {
                            data: {
                                function: Object(A["h"])(r)
                            },
                            handled: true,
                            type: "instrument"
                        }
                    });
                    return r.apply(this, e)
                }
            };
            e.prototype._wrapRAF = function (t) {
                return function (e) {
                    return t(Se(e, {
                        mechanism: {
                            data: {
                                function: "requestAnimationFrame",
                                handler: Object(A["h"])(t)
                            },
                            handled: true,
                            type: "instrument"
                        }
                    }))
                }
            };
            e.prototype._wrapEventTarget = function (o) {
                var e = Object(A["i"])();
                var t = e[o] && e[o].prototype;
                if (!t || !t.hasOwnProperty || !t.hasOwnProperty("addEventListener")) return;
                Object(T["c"])(t, "addEventListener", function (r) {
                    return function (e, t, n) {
                        try {
                            "function" === typeof t.handleEvent && (t.handleEvent = Se(t.handleEvent.bind(t), {
                                mechanism: {
                                    data: {
                                        function: "handleEvent",
                                        handler: Object(A["h"])(t),
                                        target: o
                                    },
                                    handled: true,
                                    type: "instrument"
                                }
                            }))
                        } catch (e) { }
                        return r.call(this, e, Se(t, {
                            mechanism: {
                                data: {
                                    function: "addEventListener",
                                    handler: Object(A["h"])(t),
                                    target: o
                                },
                                handled: true,
                                type: "instrument"
                            }
                        }), n)
                    }
                });
                Object(T["c"])(t, "removeEventListener", function (o) {
                    return function (e, t, n) {
                        var r = t;
                        try {
                            r = r && (r.__sentry_wrapped__ || r)
                        } catch (e) { }
                        return o.call(this, e, r, n)
                    }
                })
            };
            e.prototype._wrapXHR = function (o) {
                return function () {
                    var e = [];
                    for (var t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    var r = this;
                    var n = ["onload", "onerror", "onprogress", "onreadystatechange"];
                    n.forEach(function (n) {
                        n in r && "function" === typeof r[n] && Object(T["c"])(r, n, function (e) {
                            var t = {
                                mechanism: {
                                    data: {
                                        function: n,
                                        handler: Object(A["h"])(e)
                                    },
                                    handled: true,
                                    type: "instrument"
                                }
                            };
                            e.__sentry_original__ && (t.mechanism.data.handler = Object(A["h"])(e.__sentry_original__));
                            return Se(e, t)
                        })
                    });
                    return o.apply(this, e)
                }
            };
            e.prototype.setupOnce = function () {
                this._ignoreOnError = this._ignoreOnError;
                var e = Object(A["i"])();
                Object(T["c"])(e, "setTimeout", this._wrapTimeFunction.bind(this));
                Object(T["c"])(e, "setInterval", this._wrapTimeFunction.bind(this));
                Object(T["c"])(e, "requestAnimationFrame", this._wrapRAF.bind(this));
                "XMLHttpRequest" in e && Object(T["c"])(XMLHttpRequest.prototype, "send", this._wrapXHR.bind(this));
                ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"].forEach(this._wrapEventTarget.bind(this))
            };
            e.id = "TryCatch";
            return e
        }();
        var Te = n("./src/main/webapp/universal/node_modules/@sentry/utils/esm/instrument.js");
        var xe = function () {
            function t(e) {
                this.name = t.id;
                this._options = h["a"]({
                    console: true,
                    dom: true,
                    fetch: true,
                    history: true,
                    sentry: true,
                    xhr: true
                }, e)
            }
            t.prototype._consoleBreadcrumb = function (e) {
                var t = {
                    category: "console",
                    data: {
                        arguments: e.args,
                        logger: "console"
                    },
                    level: c["a"].fromString(e.level),
                    message: Object(R["b"])(e.args, " ")
                };
                if ("assert" === e.level) {
                    if (false !== e.args[0]) return;
                    t.message = "Assertion failed: " + (Object(R["b"])(e.args.slice(1), " ") || "console.assert");
                    t.data.arguments = e.args.slice(1)
                }
                Object(l["b"])().addBreadcrumb(t, {
                    input: e.args,
                    level: e.level
                })
            };
            t.prototype._domBreadcrumb = function (e) {
                var t;
                try {
                    t = e.event.target ? Object(A["k"])(e.event.target) : Object(A["k"])(e.event)
                } catch (e) {
                    t = "<unknown>"
                }
                if (0 === t.length) return;
                Object(l["b"])().addBreadcrumb({
                    category: "ui." + e.name,
                    message: t
                }, {
                    event: e.event,
                    name: e.name
                })
            };
            t.prototype._xhrBreadcrumb = function (e) {
                if (e.endTimestamp) {
                    if (e.xhr.__sentry_own_request__) return;
                    Object(l["b"])().addBreadcrumb({
                        category: "xhr",
                        data: e.xhr.__sentry_xhr__,
                        type: "http"
                    }, {
                        xhr: e.xhr
                    });
                    return
                }
                this._options.sentry && e.xhr.__sentry_own_request__ && ke(e.args[0])
            };
            t.prototype._fetchBreadcrumb = function (e) {
                if (!e.endTimestamp) return;
                var t = Object(l["b"])().getClient();
                var n = t && t.getDsn();
                if (this._options.sentry && n) {
                    var r = new k(n).getStoreEndpoint();
                    if (r && -1 !== e.fetchData.url.indexOf(r) && "POST" === e.fetchData.method && e.args[1] && e.args[1].body) {
                        ke(e.args[1].body);
                        return
                    }
                }
                e.error ? Object(l["b"])().addBreadcrumb({
                    category: "fetch",
                    data: h["a"]({}, e.fetchData, {
                        status_code: e.response.status
                    }),
                    level: c["a"].Error,
                    type: "http"
                }, {
                    data: e.error,
                    input: e.args
                }) : Object(l["b"])().addBreadcrumb({
                    category: "fetch",
                    data: h["a"]({}, e.fetchData, {
                        status_code: e.response.status
                    }),
                    type: "http"
                }, {
                    input: e.args,
                    response: e.response
                })
            };
            t.prototype._historyBreadcrumb = function (e) {
                var t = Object(A["i"])();
                var n = e.from;
                var r = e.to;
                var o = Object(A["o"])(t.location.href);
                var i = Object(A["o"])(n);
                var a = Object(A["o"])(r);
                i.path || (i = o);
                o.protocol === a.protocol && o.host === a.host && (r = a.relative);
                o.protocol === i.protocol && o.host === i.host && (n = i.relative);
                Object(l["b"])().addBreadcrumb({
                    category: "navigation",
                    data: {
                        from: n,
                        to: r
                    }
                })
            };
            t.prototype.setupOnce = function () {
                var n = this;
                this._options.console && Object(Te["a"])({
                    callback: function () {
                        var e = [];
                        for (var t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        n._consoleBreadcrumb.apply(n, h["d"](e))
                    },
                    type: "console"
                });
                this._options.dom && Object(Te["a"])({
                    callback: function () {
                        var e = [];
                        for (var t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        n._domBreadcrumb.apply(n, h["d"](e))
                    },
                    type: "dom"
                });
                this._options.xhr && Object(Te["a"])({
                    callback: function () {
                        var e = [];
                        for (var t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        n._xhrBreadcrumb.apply(n, h["d"](e))
                    },
                    type: "xhr"
                });
                this._options.fetch && Object(Te["a"])({
                    callback: function () {
                        var e = [];
                        for (var t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        n._fetchBreadcrumb.apply(n, h["d"](e))
                    },
                    type: "fetch"
                });
                this._options.history && Object(Te["a"])({
                    callback: function () {
                        var e = [];
                        for (var t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        n._historyBreadcrumb.apply(n, h["d"](e))
                    },
                    type: "history"
                })
            };
            t.id = "Breadcrumbs";
            return t
        }();

        function ke(e) {
            try {
                var t = JSON.parse(e);
                Object(l["b"])().addBreadcrumb({
                    category: "sentry." + ("transaction" === t.type ? "transaction" : "event"),
                    event_id: t.event_id,
                    level: t.level || c["a"].fromString("error"),
                    message: Object(A["g"])(t)
                }, {
                    event: t
                })
            } catch (e) {
                P["a"].error("Error while adding sentry type breadcrumb")
            }
        }
        var Pe = function () {
            function u(e) {
                this.name = u.id;
                this._onErrorHandlerInstalled = false;
                this._onUnhandledRejectionHandlerInstalled = false;
                this._options = h["a"]({
                    onerror: true,
                    onunhandledrejection: true
                }, e)
            }
            u.prototype.setupOnce = function () {
                Error.stackTraceLimit = 50;
                if (this._options.onerror) {
                    P["a"].log("Global Handler attached: onerror");
                    this._installGlobalOnErrorHandler()
                }
                if (this._options.onunhandledrejection) {
                    P["a"].log("Global Handler attached: onunhandledrejection");
                    this._installGlobalOnUnhandledRejectionHandler()
                }
            };
            u.prototype._installGlobalOnErrorHandler = function () {
                var s = this;
                if (this._onErrorHandlerInstalled) return;
                Object(Te["a"])({
                    callback: function (e) {
                        var t = e.error;
                        var n = Object(l["b"])();
                        var r = n.getIntegration(u);
                        var o = t && true === t.__sentry_own_request__;
                        if (!r || je() || o) return;
                        var i = n.getClient();
                        var a = Object(I["i"])(t) ? s._eventFromIncompleteOnError(e.msg, e.url, e.line, e.column) : s._enhanceEventWithInitialFrame(ie(t, void 0, {
                            attachStacktrace: i && i.getOptions().attachStacktrace,
                            rejection: false
                        }), e.url, e.line, e.column);
                        Object(A["b"])(a, {
                            handled: false,
                            type: "onerror"
                        });
                        n.captureEvent(a, {
                            originalException: t
                        })
                    },
                    type: "error"
                });
                this._onErrorHandlerInstalled = true
            };
            u.prototype._installGlobalOnUnhandledRejectionHandler = function () {
                var s = this;
                if (this._onUnhandledRejectionHandlerInstalled) return;
                Object(Te["a"])({
                    callback: function (e) {
                        var t = e;
                        try {
                            "reason" in e ? t = e.reason : "detail" in e && "reason" in e.detail && (t = e.detail.reason)
                        } catch (e) { }
                        var n = Object(l["b"])();
                        var r = n.getIntegration(u);
                        var o = t && true === t.__sentry_own_request__;
                        if (!r || je() || o) return true;
                        var i = n.getClient();
                        var a = Object(I["i"])(t) ? s._eventFromIncompleteRejection(t) : ie(t, void 0, {
                            attachStacktrace: i && i.getOptions().attachStacktrace,
                            rejection: true
                        });
                        a.level = c["a"].Error;
                        Object(A["b"])(a, {
                            handled: false,
                            type: "onunhandledrejection"
                        });
                        n.captureEvent(a, {
                            originalException: t
                        });
                        return
                    },
                    type: "unhandledrejection"
                });
                this._onUnhandledRejectionHandlerInstalled = true
            };
            u.prototype._eventFromIncompleteOnError = function (e, t, n, r) {
                var o = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
                var i = Object(I["e"])(e) ? e.message : e;
                var a;
                if (Object(I["k"])(i)) {
                    var s = i.match(o);
                    if (s) {
                        a = s[1];
                        i = s[2]
                    }
                }
                var u = {
                    exception: {
                        values: [{
                            type: a || "Error",
                            value: i
                        }]
                    }
                };
                return this._enhanceEventWithInitialFrame(u, t, n, r)
            };
            u.prototype._eventFromIncompleteRejection = function (e) {
                return {
                    exception: {
                        values: [{
                            type: "UnhandledRejection",
                            value: "Non-Error promise rejection captured with value: " + e
                        }]
                    }
                }
            };
            u.prototype._enhanceEventWithInitialFrame = function (e, t, n, r) {
                e.exception = e.exception || {};
                e.exception.values = e.exception.values || [];
                e.exception.values[0] = e.exception.values[0] || {};
                e.exception.values[0].stacktrace = e.exception.values[0].stacktrace || {};
                e.exception.values[0].stacktrace.frames = e.exception.values[0].stacktrace.frames || [];
                var o = isNaN(parseInt(r, 10)) ? void 0 : r;
                var i = isNaN(parseInt(n, 10)) ? void 0 : n;
                var a = Object(I["k"])(t) && t.length > 0 ? t : Object(A["j"])();
                0 === e.exception.values[0].stacktrace.frames.length && e.exception.values[0].stacktrace.frames.push({
                    colno: o,
                    filename: a,
                    function: "?",
                    in_app: true,
                    lineno: i
                });
                return e
            };
            u.id = "GlobalHandlers";
            return u
        }();
        var Ie = "cause";
        var Ce = 5;
        var Re = function () {
            function r(e) {
                void 0 === e && (e = {});
                this.name = r.id;
                this._key = e.key || Ie;
                this._limit = e.limit || Ce
            }
            r.prototype.setupOnce = function () {
                Object(s["b"])(function (e, t) {
                    var n = Object(l["b"])().getIntegration(r);
                    if (n) return n._handler(e, t);
                    return e
                })
            };
            r.prototype._handler = function (e, t) {
                if (!e.exception || !e.exception.values || !t || !Object(I["g"])(t.originalException, Error)) return e;
                var n = this._walkErrorTree(t.originalException, this._key);
                e.exception.values = h["d"](n, e.exception.values);
                return e
            };
            r.prototype._walkErrorTree = function (e, t, n) {
                void 0 === n && (n = []);
                if (!Object(I["g"])(e[t], Error) || n.length + 1 >= this._limit) return n;
                var r = K(e[t]);
                var o = te(r);
                return this._walkErrorTree(e[t], t, h["d"]([o], n))
            };
            r.id = "LinkedErrors";
            return r
        }();
        var Ae = Object(A["i"])();
        var Le = function () {
            function n() {
                this.name = n.id
            }
            n.prototype.setupOnce = function () {
                Object(s["b"])(function (e) {
                    if (Object(l["b"])().getIntegration(n)) {
                        if (!Ae.navigator || !Ae.location) return e;
                        var t = e.request || {};
                        t.url = t.url || Ae.location.href;
                        t.headers = t.headers || {};
                        t.headers["User-Agent"] = Ae.navigator.userAgent;
                        return h["a"]({}, e, {
                            request: t
                        })
                    }
                    return e
                })
            };
            n.id = "UserAgent";
            return n
        }();
        var De = [new r.InboundFilters, new r.FunctionToString, new Oe, new xe, new Pe, new Re, new Le];

        function Ne(e) {
            void 0 === e && (e = {});
            void 0 === e.defaultIntegrations && (e.defaultIntegrations = De);
            if (void 0 === e.release) {
                var t = Object(A["i"])();
                t.SENTRY_RELEASE && t.SENTRY_RELEASE.id && (e.release = t.SENTRY_RELEASE.id)
            }
            _e(me, e)
        }

        function Me(e) {
            void 0 === e && (e = {});
            e.eventId || (e.eventId = Object(l["b"])().lastEventId());
            var t = Object(l["b"])().getClient();
            t && t.showReportDialog(e)
        }

        function Be() {
            return Object(l["b"])().lastEventId()
        }

        function Ue() { }

        function Fe(e) {
            e()
        }

        function qe(e) {
            var t = Object(l["b"])().getClient();
            if (t) return t.flush(e);
            return C["a"].reject(false)
        }

        function He(e) {
            var t = Object(l["b"])().getClient();
            if (t) return t.close(e);
            return C["a"].reject(false)
        }

        function ze(e) {
            return Se(e)()
        }
        var Ye = {};
        var We = Object(A["i"])();
        We.Sentry && We.Sentry.Integrations && (Ye = We.Sentry.Integrations);
        var Ve = h["a"]({}, Ye, r, o)
    },
    "./src/main/webapp/universal/node_modules/@sentry/hub/esm/hub.js": function (e, r, y) {
        "use strict";
        (function (o) {
            y.d(r, "a", function () {
                return u
            });
            y.d(r, "b", function () {
                return e
            });
            y.d(r, "c", function () {
                return m
            });
            var f = y("./src/main/webapp/universal/node_modules/tslib/tslib.es6.js");
            var p = y("./src/main/webapp/universal/node_modules/@sentry/utils/esm/misc.js");
            var i = y("./src/main/webapp/universal/node_modules/@sentry/utils/esm/logger.js");
            var a = y("./src/main/webapp/universal/node_modules/@sentry/hub/esm/scope.js");
            var s = 3;
            var d = 100;
            var v = 100;
            var u = function () {
                function e(e, t, n) {
                    void 0 === t && (t = new a["a"]);
                    void 0 === n && (n = s);
                    this._version = n;
                    this._stack = [];
                    this._stack.push({
                        client: e,
                        scope: t
                    })
                }
                e.prototype._invokeClient = function (e) {
                    var t;
                    var n = [];
                    for (var r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
                    var o = this.getStackTop();
                    o && o.client && o.client[e] && (t = o.client)[e].apply(t, f["d"](n, [o.scope]))
                };
                e.prototype.isOlderThan = function (e) {
                    return this._version < e
                };
                e.prototype.bindClient = function (e) {
                    var t = this.getStackTop();
                    t.client = e;
                    e && e.setupIntegrations && e.setupIntegrations()
                };
                e.prototype.pushScope = function () {
                    var e = this.getStack();
                    var t = e.length > 0 ? e[e.length - 1].scope : void 0;
                    var n = a["a"].clone(t);
                    this.getStack().push({
                        client: this.getClient(),
                        scope: n
                    });
                    return n
                };
                e.prototype.popScope = function () {
                    return void 0 !== this.getStack().pop()
                };
                e.prototype.withScope = function (e) {
                    var t = this.pushScope();
                    try {
                        e(t)
                    } finally {
                        this.popScope()
                    }
                };
                e.prototype.getClient = function () {
                    return this.getStackTop().client
                };
                e.prototype.getScope = function () {
                    return this.getStackTop().scope
                };
                e.prototype.getStack = function () {
                    return this._stack
                };
                e.prototype.getStackTop = function () {
                    return this._stack[this._stack.length - 1]
                };
                e.prototype.captureException = function (e, t) {
                    var n = this._lastEventId = Object(p["q"])();
                    var r = t;
                    if (!t) {
                        var o = void 0;
                        try {
                            throw new Error("Sentry syntheticException")
                        } catch (e) {
                            o = e
                        }
                        r = {
                            originalException: e,
                            syntheticException: o
                        }
                    }
                    this._invokeClient("captureException", e, f["a"]({}, r, {
                        event_id: n
                    }));
                    return n
                };
                e.prototype.captureMessage = function (e, t, n) {
                    var r = this._lastEventId = Object(p["q"])();
                    var o = n;
                    if (!n) {
                        var i = void 0;
                        try {
                            throw new Error(e)
                        } catch (e) {
                            i = e
                        }
                        o = {
                            originalException: e,
                            syntheticException: i
                        }
                    }
                    this._invokeClient("captureMessage", e, t, f["a"]({}, o, {
                        event_id: r
                    }));
                    return r
                };
                e.prototype.captureEvent = function (e, t) {
                    var n = this._lastEventId = Object(p["q"])();
                    this._invokeClient("captureEvent", e, f["a"]({}, t, {
                        event_id: n
                    }));
                    return n
                };
                e.prototype.lastEventId = function () {
                    return this._lastEventId
                };
                e.prototype.addBreadcrumb = function (e, t) {
                    var n = this.getStackTop();
                    if (!n.scope || !n.client) return;
                    var r = n.client.getOptions && n.client.getOptions() || {},
                        o = r.beforeBreadcrumb,
                        i = void 0 === o ? null : o,
                        a = r.maxBreadcrumbs,
                        s = void 0 === a ? d : a;
                    if (s <= 0) return;
                    var u = Object(p["p"])();
                    var c = f["a"]({
                        timestamp: u
                    }, e);
                    var l = i ? Object(p["d"])(function () {
                        return i(c, t)
                    }) : c;
                    if (null === l) return;
                    n.scope.addBreadcrumb(l, Math.min(s, v))
                };
                e.prototype.setUser = function (e) {
                    var t = this.getStackTop();
                    if (!t.scope) return;
                    t.scope.setUser(e)
                };
                e.prototype.setTags = function (e) {
                    var t = this.getStackTop();
                    if (!t.scope) return;
                    t.scope.setTags(e)
                };
                e.prototype.setExtras = function (e) {
                    var t = this.getStackTop();
                    if (!t.scope) return;
                    t.scope.setExtras(e)
                };
                e.prototype.setTag = function (e, t) {
                    var n = this.getStackTop();
                    if (!n.scope) return;
                    n.scope.setTag(e, t)
                };
                e.prototype.setExtra = function (e, t) {
                    var n = this.getStackTop();
                    if (!n.scope) return;
                    n.scope.setExtra(e, t)
                };
                e.prototype.setContext = function (e, t) {
                    var n = this.getStackTop();
                    if (!n.scope) return;
                    n.scope.setContext(e, t)
                };
                e.prototype.configureScope = function (e) {
                    var t = this.getStackTop();
                    t.scope && t.client && e(t.scope)
                };
                e.prototype.run = function (e) {
                    var t = n(this);
                    try {
                        e(this)
                    } finally {
                        n(t)
                    }
                };
                e.prototype.getIntegration = function (t) {
                    var e = this.getClient();
                    if (!e) return null;
                    try {
                        return e.getIntegration(t)
                    } catch (e) {
                        i["a"].warn("Cannot retrieve integration " + t.id + " from the current Hub");
                        return null
                    }
                };
                e.prototype.startSpan = function (e, t) {
                    void 0 === t && (t = false);
                    return this._callExtensionMethod("startSpan", e, t)
                };
                e.prototype.traceHeaders = function () {
                    return this._callExtensionMethod("traceHeaders")
                };
                e.prototype._callExtensionMethod = function (e) {
                    var t = [];
                    for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                    var r = c();
                    var o = r.__SENTRY__;
                    if (o && o.extensions && "function" === typeof o.extensions[e]) return o.extensions[e].apply(this, t);
                    i["a"].warn("Extension method " + e + " couldn't be found, doing nothing.")
                };
                return e
            }();

            function c() {
                var e = Object(p["i"])();
                e.__SENTRY__ = e.__SENTRY__ || {
                    extensions: {},
                    hub: void 0
                };
                return e
            }

            function n(e) {
                var t = c();
                var n = m(t);
                h(t, e);
                return n
            }

            function e() {
                var e = c();
                l(e) && !m(e).isOlderThan(s) || h(e, new u);
                if (Object(p["l"])()) return t(e);
                return m(e)
            }

            function t(t) {
                try {
                    var e = Object(p["f"])(o, "domain");
                    var n = e.active;
                    if (!n) return m(t);
                    if (!l(n) || m(n).isOlderThan(s)) {
                        var r = m(t).getStackTop();
                        h(n, new u(r.client, a["a"].clone(r.scope)))
                    }
                    return m(n)
                } catch (e) {
                    return m(t)
                }
            }

            function l(e) {
                if (e && e.__SENTRY__ && e.__SENTRY__.hub) return true;
                return false
            }

            function m(e) {
                if (e && e.__SENTRY__ && e.__SENTRY__.hub) return e.__SENTRY__.hub;
                e.__SENTRY__ = e.__SENTRY__ || {};
                e.__SENTRY__.hub = new u;
                return e.__SENTRY__.hub
            }

            function h(e, t) {
                if (!e) return false;
                e.__SENTRY__ = e.__SENTRY__ || {};
                e.__SENTRY__.hub = t;
                return true
            }
        }).call(this, y("./node_modules/webpack/buildin/harmony-module.js")(e))
    },
    "./src/main/webapp/universal/node_modules/@sentry/hub/esm/scope.js": function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return i
        });
        n.d(t, "b", function () {
            return s
        });
        var c = n("./src/main/webapp/universal/node_modules/tslib/tslib.es6.js");
        var r = n("./src/main/webapp/universal/node_modules/@sentry/utils/esm/syncpromise.js");
        var l = n("./src/main/webapp/universal/node_modules/@sentry/utils/esm/is.js");
        var o = n("./src/main/webapp/universal/node_modules/@sentry/utils/esm/misc.js");
        var i = function () {
            function n() {
                this._notifyingListeners = false;
                this._scopeListeners = [];
                this._eventProcessors = [];
                this._breadcrumbs = [];
                this._user = {};
                this._tags = {};
                this._extra = {};
                this._context = {}
            }
            n.prototype.addScopeListener = function (e) {
                this._scopeListeners.push(e)
            };
            n.prototype.addEventProcessor = function (e) {
                this._eventProcessors.push(e);
                return this
            };
            n.prototype._notifyScopeListeners = function () {
                var t = this;
                if (!this._notifyingListeners) {
                    this._notifyingListeners = true;
                    setTimeout(function () {
                        t._scopeListeners.forEach(function (e) {
                            e(t)
                        });
                        t._notifyingListeners = false
                    })
                }
            };
            n.prototype._notifyEventProcessors = function (o, i, a, s) {
                var u = this;
                void 0 === s && (s = 0);
                return new r["a"](function (t, e) {
                    var n = o[s];
                    if (null === i || "function" !== typeof n) t(i);
                    else {
                        var r = n(c["a"]({}, i), a);
                        Object(l["m"])(r) ? r.then(function (e) {
                            return u._notifyEventProcessors(o, e, a, s + 1).then(t)
                        }).then(null, e) : u._notifyEventProcessors(o, r, a, s + 1).then(t).then(null, e)
                    }
                })
            };
            n.prototype.setUser = function (e) {
                this._user = e || {};
                this._notifyScopeListeners();
                return this
            };
            n.prototype.setTags = function (e) {
                this._tags = c["a"]({}, this._tags, e);
                this._notifyScopeListeners();
                return this
            };
            n.prototype.setTag = function (e, t) {
                var n;
                this._tags = c["a"]({}, this._tags, (n = {}, n[e] = t, n));
                this._notifyScopeListeners();
                return this
            };
            n.prototype.setExtras = function (e) {
                this._extra = c["a"]({}, this._extra, e);
                this._notifyScopeListeners();
                return this
            };
            n.prototype.setExtra = function (e, t) {
                var n;
                this._extra = c["a"]({}, this._extra, (n = {}, n[e] = t, n));
                this._notifyScopeListeners();
                return this
            };
            n.prototype.setFingerprint = function (e) {
                this._fingerprint = e;
                this._notifyScopeListeners();
                return this
            };
            n.prototype.setLevel = function (e) {
                this._level = e;
                this._notifyScopeListeners();
                return this
            };
            n.prototype.setTransaction = function (e) {
                this._transaction = e;
                this._span && (this._span.transaction = e);
                this._notifyScopeListeners();
                return this
            };
            n.prototype.setContext = function (e, t) {
                var n;
                this._context = c["a"]({}, this._context, (n = {}, n[e] = t, n));
                this._notifyScopeListeners();
                return this
            };
            n.prototype.setSpan = function (e) {
                this._span = e;
                this._notifyScopeListeners();
                return this
            };
            n.prototype.getSpan = function () {
                return this._span
            };
            n.clone = function (e) {
                var t = new n;
                if (e) {
                    t._breadcrumbs = c["d"](e._breadcrumbs);
                    t._tags = c["a"]({}, e._tags);
                    t._extra = c["a"]({}, e._extra);
                    t._context = c["a"]({}, e._context);
                    t._user = e._user;
                    t._level = e._level;
                    t._span = e._span;
                    t._transaction = e._transaction;
                    t._fingerprint = e._fingerprint;
                    t._eventProcessors = c["d"](e._eventProcessors)
                }
                return t
            };
            n.prototype.clear = function () {
                this._breadcrumbs = [];
                this._tags = {};
                this._extra = {};
                this._user = {};
                this._context = {};
                this._level = void 0;
                this._transaction = void 0;
                this._fingerprint = void 0;
                this._span = void 0;
                this._notifyScopeListeners();
                return this
            };
            n.prototype.addBreadcrumb = function (e, t) {
                var n = c["a"]({
                    timestamp: Object(o["p"])()
                }, e);
                this._breadcrumbs = void 0 !== t && t >= 0 ? c["d"](this._breadcrumbs, [n]).slice(-t) : c["d"](this._breadcrumbs, [n]);
                this._notifyScopeListeners();
                return this
            };
            n.prototype.clearBreadcrumbs = function () {
                this._breadcrumbs = [];
                this._notifyScopeListeners();
                return this
            };
            n.prototype._applyFingerprint = function (e) {
                e.fingerprint = e.fingerprint ? Array.isArray(e.fingerprint) ? e.fingerprint : [e.fingerprint] : [];
                this._fingerprint && (e.fingerprint = e.fingerprint.concat(this._fingerprint));
                e.fingerprint && !e.fingerprint.length && delete e.fingerprint
            };
            n.prototype.applyToEvent = function (e, t) {
                this._extra && Object.keys(this._extra).length && (e.extra = c["a"]({}, this._extra, e.extra));
                this._tags && Object.keys(this._tags).length && (e.tags = c["a"]({}, this._tags, e.tags));
                this._user && Object.keys(this._user).length && (e.user = c["a"]({}, this._user, e.user));
                this._context && Object.keys(this._context).length && (e.contexts = c["a"]({}, this._context, e.contexts));
                this._level && (e.level = this._level);
                this._transaction && (e.transaction = this._transaction);
                this._span && (e.contexts = c["a"]({
                    trace: this._span.getTraceContext()
                }, e.contexts));
                this._applyFingerprint(e);
                e.breadcrumbs = c["d"](e.breadcrumbs || [], this._breadcrumbs);
                e.breadcrumbs = e.breadcrumbs.length > 0 ? e.breadcrumbs : void 0;
                return this._notifyEventProcessors(c["d"](a(), this._eventProcessors), e, t)
            };
            return n
        }();

        function a() {
            var e = Object(o["i"])();
            e.__SENTRY__ = e.__SENTRY__ || {};
            e.__SENTRY__.globalEventProcessors = e.__SENTRY__.globalEventProcessors || [];
            return e.__SENTRY__.globalEventProcessors
        }

        function s(e) {
            a().push(e)
        }
    },
    "./src/main/webapp/universal/node_modules/@sentry/types/esm/severity.js": function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return r
        });
        var r;
        (function (e) {
            e["Fatal"] = "fatal";
            e["Error"] = "error";
            e["Warning"] = "warning";
            e["Log"] = "log";
            e["Info"] = "info";
            e["Debug"] = "debug";
            e["Critical"] = "critical"
        })(r = r || {});
        (function (t) {
            function e(e) {
                switch (e) {
                    case "debug":
                        return t.Debug;
                    case "info":
                        return t.Info;
                    case "warn":
                    case "warning":
                        return t.Warning;
                    case "error":
                        return t.Error;
                    case "fatal":
                        return t.Fatal;
                    case "critical":
                        return t.Critical;
                    case "log":
                    default:
                        return t.Log
                }
            }
            t.fromString = e
        })(r = r || {})
    },
    "./src/main/webapp/universal/node_modules/@sentry/utils/esm/dsn.js": function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return r
        });
        var v = n("./src/main/webapp/universal/node_modules/tslib/tslib.es6.js");
        var m = n("./src/main/webapp/universal/node_modules/@sentry/utils/esm/error.js");
        var h = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w\.-]+)(?::(\d+))?\/(.+)/;
        var y = "Invalid Dsn";
        var r = function () {
            function e(e) {
                "string" === typeof e ? this._fromString(e) : this._fromComponents(e);
                this._validate()
            }
            e.prototype.toString = function (e) {
                void 0 === e && (e = false);
                var t = this,
                    n = t.host,
                    r = t.path,
                    o = t.pass,
                    i = t.port,
                    a = t.projectId,
                    s = t.protocol,
                    u = t.user;
                return s + "://" + u + (e && o ? ":" + o : "") + "@" + n + (i ? ":" + i : "") + "/" + (r ? r + "/" : r) + a
            };
            e.prototype._fromString = function (e) {
                var t = h.exec(e);
                if (!t) throw new m["a"](y);
                var n = v["c"](t.slice(1), 6),
                    r = n[0],
                    o = n[1],
                    i = n[2],
                    a = void 0 === i ? "" : i,
                    s = n[3],
                    u = n[4],
                    c = void 0 === u ? "" : u,
                    l = n[5];
                var f = "";
                var p = l;
                var d = p.split("/");
                if (d.length > 1) {
                    f = d.slice(0, -1).join("/");
                    p = d.pop()
                }
                this._fromComponents({
                    host: s,
                    pass: a,
                    path: f,
                    projectId: p,
                    port: c,
                    protocol: r,
                    user: o
                })
            };
            e.prototype._fromComponents = function (e) {
                this.protocol = e.protocol;
                this.user = e.user;
                this.pass = e.pass || "";
                this.host = e.host;
                this.port = e.port || "";
                this.path = e.path || "";
                this.projectId = e.projectId
            };
            e.prototype._validate = function () {
                var t = this;
                ["protocol", "user", "host", "projectId"].forEach(function (e) {
                    if (!t[e]) throw new m["a"](y)
                });
                if ("http" !== this.protocol && "https" !== this.protocol) throw new m["a"](y);
                if (this.port && isNaN(parseInt(this.port, 10))) throw new m["a"](y)
            };
            return e
        }()
    },
    "./src/main/webapp/universal/node_modules/@sentry/utils/esm/error.js": function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return s
        });
        var o = n("./src/main/webapp/universal/node_modules/tslib/tslib.es6.js");
        var i = Object.setPrototypeOf || ({
            __proto__: []
        }
            instanceof Array ? r : a);

        function r(e, t) {
            e.__proto__ = t;
            return e
        }

        function a(e, t) {
            for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
            return e
        }
        var s = function (r) {
            o["b"](e, r);

            function e(e) {
                var t = this.constructor;
                var n = r.call(this, e) || this;
                n.message = e;
                n.name = t.prototype.constructor.name;
                i(n, t.prototype);
                return n
            }
            return e
        }(Error)
    },
    "./src/main/webapp/universal/node_modules/@sentry/utils/esm/instrument.js": function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return d
        });
        var s = n("./src/main/webapp/universal/node_modules/tslib/tslib.es6.js");
        var o = n("./src/main/webapp/universal/node_modules/@sentry/utils/esm/is.js");
        var u = n("./src/main/webapp/universal/node_modules/@sentry/utils/esm/logger.js");
        var c = n("./src/main/webapp/universal/node_modules/@sentry/utils/esm/misc.js");
        var i = n("./src/main/webapp/universal/node_modules/@sentry/utils/esm/object.js");
        var r = n("./src/main/webapp/universal/node_modules/@sentry/utils/esm/supports.js");
        var a = Object(c["i"])();
        var l = {};
        var f = {};

        function p(e) {
            if (f[e]) return;
            f[e] = true;
            switch (e) {
                case "console":
                    m();
                    break;
                case "dom":
                    j();
                    break;
                case "xhr":
                    g();
                    break;
                case "fetch":
                    h();
                    break;
                case "history":
                    w();
                    break;
                case "error":
                    I();
                    break;
                case "unhandledrejection":
                    R();
                    break;
                default:
                    u["a"].warn("unknown instrumentation type:", e)
            }
        }

        function d(e) {
            if (!e || "string" !== typeof e.type || "function" !== typeof e.callback) return;
            l[e.type] = l[e.type] || [];
            l[e.type].push(e.callback);
            p(e.type)
        }

        function v(t, e) {
            var n, r;
            if (!t || !l[t]) return;
            try {
                for (var o = s["e"](l[t] || []), i = o.next(); !i.done; i = o.next()) {
                    var a = i.value;
                    try {
                        a(e)
                    } catch (e) {
                        u["a"].error("Error while triggering instrumentation handler.\nType: " + t + "\nName: " + Object(c["h"])(a) + "\nError: " + e)
                    }
                }
            } catch (e) {
                n = {
                    error: e
                }
            } finally {
                try {
                    i && !i.done && (r = o.return) && r.call(o)
                } finally {
                    if (n) throw n.error
                }
            }
        }

        function m() {
            if (!("console" in a)) return;
            ["debug", "info", "warn", "error", "log", "assert"].forEach(function (r) {
                if (!(r in a.console)) return;
                Object(i["c"])(a.console, r, function (n) {
                    return function () {
                        var e = [];
                        for (var t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        v("console", {
                            args: e,
                            level: r
                        });
                        n && Function.prototype.apply.call(n, a.console, e)
                    }
                })
            })
        }

        function h() {
            if (!Object(r["f"])()) return;
            Object(i["c"])(a, "fetch", function (r) {
                return function () {
                    var e = [];
                    for (var t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    var n = {
                        args: e,
                        fetchData: {
                            method: y(e),
                            url: b(e)
                        },
                        startTimestamp: Date.now()
                    };
                    v("fetch", s["a"]({}, n));
                    return r.apply(a, e).then(function (e) {
                        v("fetch", s["a"]({}, n, {
                            endTimestamp: Date.now(),
                            response: e
                        }));
                        return e
                    }, function (e) {
                        v("fetch", s["a"]({}, n, {
                            endTimestamp: Date.now(),
                            error: e
                        }));
                        throw e
                    })
                }
            })
        }

        function y(e) {
            void 0 === e && (e = []);
            if ("Request" in a && Object(o["g"])(e[0], Request) && e[0].method) return String(e[0].method).toUpperCase();
            if (e[1] && e[1].method) return String(e[1].method).toUpperCase();
            return "GET"
        }

        function b(e) {
            void 0 === e && (e = []);
            if ("string" === typeof e[0]) return e[0];
            if ("Request" in a && Object(o["g"])(e[0], Request)) return e[0].url;
            return String(e[0])
        }

        function g() {
            if (!("XMLHttpRequest" in a)) return;
            var e = XMLHttpRequest.prototype;
            Object(i["c"])(e, "open", function (r) {
                return function () {
                    var e = [];
                    for (var t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    var n = e[1];
                    this.__sentry_xhr__ = {
                        method: Object(o["k"])(e[0]) ? e[0].toUpperCase() : e[0],
                        url: e[1]
                    };
                    Object(o["k"])(n) && "POST" === this.__sentry_xhr__.method && n.match(/sentry_key/) && (this.__sentry_own_request__ = true);
                    return r.apply(this, e)
                }
            });
            Object(i["c"])(e, "send", function (o) {
                return function () {
                    var e = [];
                    for (var t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    var n = this;
                    var r = {
                        args: e,
                        startTimestamp: Date.now(),
                        xhr: n
                    };
                    v("xhr", s["a"]({}, r));
                    n.addEventListener("readystatechange", function () {
                        if (4 === n.readyState) {
                            try {
                                n.__sentry_xhr__ && (n.__sentry_xhr__.status_code = n.status)
                            } catch (e) { }
                            v("xhr", s["a"]({}, r, {
                                endTimestamp: Date.now()
                            }))
                        }
                    });
                    return o.apply(this, e)
                }
            })
        }
        var _;

        function w() {
            if (!Object(r["e"])()) return;
            var o = a.onpopstate;
            a.onpopstate = function () {
                var e = [];
                for (var t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var n = a.location.href;
                var r = _;
                _ = n;
                v("history", {
                    from: r,
                    to: n
                });
                if (o) return o.apply(this, e)
            };

            function e(i) {
                return function () {
                    var e = [];
                    for (var t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    var n = e.length > 2 ? e[2] : void 0;
                    if (n) {
                        var r = _;
                        var o = String(n);
                        _ = o;
                        v("history", {
                            from: r,
                            to: o
                        })
                    }
                    return i.apply(this, e)
                }
            }
            Object(i["c"])(a.history, "pushState", e);
            Object(i["c"])(a.history, "replaceState", e)
        }

        function j() {
            if (!("document" in a)) return;
            a.document.addEventListener("click", x("click", v.bind(null, "dom")), false);
            a.document.addEventListener("keypress", k(v.bind(null, "dom")), false);
            ["EventTarget", "Node"].forEach(function (e) {
                var t = a[e] && a[e].prototype;
                if (!t || !t.hasOwnProperty || !t.hasOwnProperty("addEventListener")) return;
                Object(i["c"])(t, "addEventListener", function (r) {
                    return function (e, t, n) {
                        if (t && t.handleEvent) {
                            "click" === e && Object(i["c"])(t, "handleEvent", function (t) {
                                return function (e) {
                                    x("click", v.bind(null, "dom"))(e);
                                    return t.call(this, e)
                                }
                            });
                            "keypress" === e && Object(i["c"])(t, "handleEvent", function (t) {
                                return function (e) {
                                    k(v.bind(null, "dom"))(e);
                                    return t.call(this, e)
                                }
                            })
                        } else {
                            "click" === e && x("click", v.bind(null, "dom"), true)(this);
                            "keypress" === e && k(v.bind(null, "dom"))(this)
                        }
                        return r.call(this, e, t, n)
                    }
                });
                Object(i["c"])(t, "removeEventListener", function (o) {
                    return function (e, t, n) {
                        var r = t;
                        try {
                            r = r && (r.__sentry_wrapped__ || r)
                        } catch (e) { }
                        return o.call(this, e, r, n)
                    }
                })
            })
        }
        var E = 1e3;
        var S = 0;
        var O;
        var T;

        function x(t, n, r) {
            void 0 === r && (r = false);
            return function (e) {
                O = void 0;
                if (!e || T === e) return;
                T = e;
                S && clearTimeout(S);
                r ? S = setTimeout(function () {
                    n({
                        event: e,
                        name: t
                    })
                }) : n({
                    event: e,
                    name: t
                })
            }
        }

        function k(r) {
            return function (e) {
                var t;
                try {
                    t = e.target
                } catch (e) {
                    return
                }
                var n = t && t.tagName;
                if (!n || "INPUT" !== n && "TEXTAREA" !== n && !t.isContentEditable) return;
                O || x("input", r)(e);
                clearTimeout(O);
                O = setTimeout(function () {
                    O = void 0
                }, E)
            }
        }
        var P = null;

        function I() {
            P = a.onerror;
            a.onerror = function (e, t, n, r, o) {
                v("error", {
                    column: r,
                    error: o,
                    line: n,
                    msg: e,
                    url: t
                });
                if (P) return P.apply(this, arguments);
                return false
            }
        }
        var C = null;

        function R() {
            C = a.onunhandledrejection;
            a.onunhandledrejection = function (e) {
                v("unhandledrejection", e);
                if (C) return C.apply(this, arguments);
                return true
            }
        }
    },
    "./src/main/webapp/universal/node_modules/@sentry/utils/esm/is.js": function (e, t, n) {
        "use strict";
        n.d(t, "d", function () {
            return r
        });
        n.d(t, "e", function () {
            return o
        });
        n.d(t, "a", function () {
            return i
        });
        n.d(t, "b", function () {
            return a
        });
        n.d(t, "k", function () {
            return s
        });
        n.d(t, "i", function () {
            return u
        });
        n.d(t, "h", function () {
            return c
        });
        n.d(t, "f", function () {
            return l
        });
        n.d(t, "c", function () {
            return f
        });
        n.d(t, "j", function () {
            return p
        });
        n.d(t, "m", function () {
            return d
        });
        n.d(t, "l", function () {
            return v
        });
        n.d(t, "g", function () {
            return m
        });

        function r(e) {
            switch (Object.prototype.toString.call(e)) {
                case "[object Error]":
                    return true;
                case "[object Exception]":
                    return true;
                case "[object DOMException]":
                    return true;
                default:
                    return m(e, Error)
            }
        }

        function o(e) {
            return "[object ErrorEvent]" === Object.prototype.toString.call(e)
        }

        function i(e) {
            return "[object DOMError]" === Object.prototype.toString.call(e)
        }

        function a(e) {
            return "[object DOMException]" === Object.prototype.toString.call(e)
        }

        function s(e) {
            return "[object String]" === Object.prototype.toString.call(e)
        }

        function u(e) {
            return null === e || "object" !== typeof e && "function" !== typeof e
        }

        function c(e) {
            return "[object Object]" === Object.prototype.toString.call(e)
        }

        function l(e) {
            return "undefined" !== typeof Event && m(e, Event)
        }

        function f(e) {
            return "undefined" !== typeof Element && m(e, Element)
        }

        function p(e) {
            return "[object RegExp]" === Object.prototype.toString.call(e)
        }

        function d(e) {
            return Boolean(e && e.then && "function" === typeof e.then)
        }

        function v(e) {
            return c(e) && "nativeEvent" in e && "preventDefault" in e && "stopPropagation" in e
        }

        function m(e, t) {
            try {
                return e instanceof t
            } catch (e) {
                return false
            }
        }
    },
    "./src/main/webapp/universal/node_modules/@sentry/utils/esm/logger.js": function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return s
        });
        var r = n("./src/main/webapp/universal/node_modules/@sentry/utils/esm/misc.js");
        var o = Object(r["i"])();
        var i = "Sentry Logger ";
        var a = function () {
            function e() {
                this._enabled = false
            }
            e.prototype.disable = function () {
                this._enabled = false
            };
            e.prototype.enable = function () {
                this._enabled = true
            };
            e.prototype.log = function () {
                var e = [];
                for (var t = 0; t < arguments.length; t++) e[t] = arguments[t];
                if (!this._enabled) return;
                Object(r["d"])(function () {
                    o.console.log(i + "[Log]: " + e.join(" "))
                })
            };
            e.prototype.warn = function () {
                var e = [];
                for (var t = 0; t < arguments.length; t++) e[t] = arguments[t];
                if (!this._enabled) return;
                Object(r["d"])(function () {
                    o.console.warn(i + "[Warn]: " + e.join(" "))
                })
            };
            e.prototype.error = function () {
                var e = [];
                for (var t = 0; t < arguments.length; t++) e[t] = arguments[t];
                if (!this._enabled) return;
                Object(r["d"])(function () {
                    o.console.error(i + "[Error]: " + e.join(" "))
                })
            };
            return e
        }();
        o.__SENTRY__ = o.__SENTRY__ || {};
        var s = o.__SENTRY__.logger || (o.__SENTRY__.logger = new a)
    },
    "./src/main/webapp/universal/node_modules/@sentry/utils/esm/memo.js": function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return r
        });
        var r = function () {
            function e() {
                this._hasWeakSet = "function" === typeof WeakSet;
                this._inner = this._hasWeakSet ? new WeakSet : []
            }
            e.prototype.memoize = function (e) {
                if (this._hasWeakSet) {
                    if (this._inner.has(e)) return true;
                    this._inner.add(e);
                    return false
                }
                for (var t = 0; t < this._inner.length; t++) {
                    var n = this._inner[t];
                    if (n === e) return true
                }
                this._inner.push(e);
                return false
            };
            e.prototype.unmemoize = function (e) {
                if (this._hasWeakSet) this._inner.delete(e);
                else
                    for (var t = 0; t < this._inner.length; t++)
                        if (this._inner[t] === e) {
                            this._inner.splice(t, 1);
                            break
                        }
            };
            return e
        }()
    },
    "./src/main/webapp/universal/node_modules/@sentry/utils/esm/misc.js": function (e, I, C) {
        "use strict";
        (function (e, t, n) {
            C.d(I, "f", function () {
                return r
            });
            C.d(I, "l", function () {
                return o
            });
            C.d(I, "i", function () {
                return s
            });
            C.d(I, "q", function () {
                return u
            });
            C.d(I, "o", function () {
                return l
            });
            C.d(I, "g", function () {
                return f
            });
            C.d(I, "d", function () {
                return p
            });
            C.d(I, "c", function () {
                return d
            });
            C.d(I, "b", function () {
                return v
            });
            C.d(I, "j", function () {
                return m
            });
            C.d(I, "k", function () {
                return h
            });
            C.d(I, "e", function () {
                return w
            });
            C.d(I, "p", function () {
                return j
            });
            C.d(I, "n", function () {
                return S
            });
            C.d(I, "m", function () {
                return T
            });
            C.d(I, "h", function () {
                return k
            });
            C.d(I, "a", function () {
                return P
            });
            var c = C("./src/main/webapp/universal/node_modules/@sentry/utils/esm/is.js");
            var a = C("./src/main/webapp/universal/node_modules/@sentry/utils/esm/string.js");

            function r(e, t) {
                return e.require(t)
            }

            function o() {
                return "[object process]" === Object.prototype.toString.call("undefined" !== typeof e ? e : 0)
            }
            var i = {};

            function s() {
                return o() ? t : "undefined" !== typeof window ? window : "undefined" !== typeof self ? self : i
            }

            function u() {
                var e = s();
                var t = e.crypto || e.msCrypto;
                if (!(void 0 === t) && t.getRandomValues) {
                    var n = new Uint16Array(8);
                    t.getRandomValues(n);
                    n[3] = 4095 & n[3] | 16384;
                    n[4] = 16383 & n[4] | 32768;
                    var r = function (e) {
                        var t = e.toString(16);
                        while (t.length < 4) t = "0" + t;
                        return t
                    };
                    return r(n[0]) + r(n[1]) + r(n[2]) + r(n[3]) + r(n[4]) + r(n[5]) + r(n[6]) + r(n[7])
                }
                return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (e) {
                    var t = 16 * Math.random() | 0;
                    var n = "x" === e ? t : 3 & t | 8;
                    return n.toString(16)
                })
            }

            function l(e) {
                if (!e) return {};
                var t = e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
                if (!t) return {};
                var n = t[6] || "";
                var r = t[8] || "";
                return {
                    host: t[4],
                    path: t[5],
                    protocol: t[2],
                    relative: t[5] + n + r
                }
            }

            function f(e) {
                if (e.message) return e.message;
                if (e.exception && e.exception.values && e.exception.values[0]) {
                    var t = e.exception.values[0];
                    if (t.type && t.value) return t.type + ": " + t.value;
                    return t.type || t.value || e.event_id || "<unknown>"
                }
                return e.event_id || "<unknown>"
            }

            function p(e) {
                var t = s();
                var n = ["debug", "info", "warn", "error", "log", "assert"];
                if (!("console" in t)) return e();
                var r = t.console;
                var o = {};
                n.forEach(function (e) {
                    if (e in t.console && r[e].__sentry_original__) {
                        o[e] = r[e];
                        r[e] = r[e].__sentry_original__
                    }
                });
                var i = e();
                Object.keys(o).forEach(function (e) {
                    r[e] = o[e]
                });
                return i
            }

            function d(e, t, n) {
                e.exception = e.exception || {};
                e.exception.values = e.exception.values || [];
                e.exception.values[0] = e.exception.values[0] || {};
                e.exception.values[0].value = e.exception.values[0].value || t || "";
                e.exception.values[0].type = e.exception.values[0].type || n || "Error"
            }

            function v(t, n) {
                void 0 === n && (n = {});
                try {
                    t.exception.values[0].mechanism = t.exception.values[0].mechanism || {};
                    Object.keys(n).forEach(function (e) {
                        t.exception.values[0].mechanism[e] = n[e]
                    })
                } catch (e) { }
            }

            function m() {
                try {
                    return document.location.href
                } catch (e) {
                    return ""
                }
            }

            function h(e) {
                try {
                    var t = e;
                    var n = 5;
                    var r = 80;
                    var o = [];
                    var i = 0;
                    var a = 0;
                    var s = " > ";
                    var u = s.length;
                    var c = void 0;
                    while (t && i++ < n) {
                        c = y(t);
                        if ("html" === c || i > 1 && a + o.length * u + c.length >= r) break;
                        o.push(c);
                        a += c.length;
                        t = t.parentNode
                    }
                    return o.reverse().join(s)
                } catch (e) {
                    return "<unknown>"
                }
            }

            function y(e) {
                var t = e;
                var n = [];
                var r;
                var o;
                var i;
                var a;
                var s;
                if (!t || !t.tagName) return "";
                n.push(t.tagName.toLowerCase());
                t.id && n.push("#" + t.id);
                r = t.className;
                if (r && Object(c["k"])(r)) {
                    o = r.split(/\s+/);
                    for (s = 0; s < o.length; s++) n.push("." + o[s])
                }
                var u = ["type", "name", "title", "alt"];
                for (s = 0; s < u.length; s++) {
                    i = u[s];
                    a = t.getAttribute(i);
                    a && n.push("[" + i + '="' + a + '"]')
                }
                return n.join("")
            }
            var b = Date.now();
            var g = 0;
            var _ = {
                now: function () {
                    var e = Date.now() - b;
                    e < g && (e = g);
                    g = e;
                    return e
                },
                timeOrigin: b
            };
            var w = function () {
                if (o()) try {
                    var e = r(n, "perf_hooks");
                    return e.performance
                } catch (e) {
                    return _
                }
                s().performance && void 0 === performance.timeOrigin && (performance.timeOrigin = performance.timing && performance.timing.navigationStart || b);
                return s().performance || _
            }();

            function j() {
                return (w.timeOrigin + w.now()) / 1e3
            }
            var E = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;

            function S(e) {
                var t = e.match(E) || [];
                var n = parseInt(t[1], 10);
                var r = parseInt(t[2], 10);
                var o = parseInt(t[3], 10);
                return {
                    buildmetadata: t[5],
                    major: isNaN(n) ? void 0 : n,
                    minor: isNaN(r) ? void 0 : r,
                    patch: isNaN(o) ? void 0 : o,
                    prerelease: t[4]
                }
            }
            var O = 6e4;

            function T(e, t) {
                if (!t) return O;
                var n = parseInt("" + t, 10);
                if (!isNaN(n)) return 1e3 * n;
                var r = Date.parse("" + t);
                if (!isNaN(r)) return r - e;
                return O
            }
            var x = "<anonymous>";

            function k(e) {
                try {
                    if (!e || "function" !== typeof e) return x;
                    return e.name || x
                } catch (e) {
                    return x
                }
            }

            function P(e, t, n) {
                void 0 === n && (n = 5);
                var r = t.lineno || 0;
                var o = e.length;
                var i = Math.max(Math.min(o, r - 1), 0);
                t.pre_context = e.slice(Math.max(0, i - n), i).map(function (e) {
                    return Object(a["c"])(e, 0)
                });
                t.context_line = Object(a["c"])(e[Math.min(o - 1, i)], t.colno || 0);
                t.post_context = e.slice(Math.min(i + 1, o), i + 1 + n).map(function (e) {
                    return Object(a["c"])(e, 0)
                })
            }
        }).call(this, C("./node_modules/process/browser.js"), C("./node_modules/webpack/buildin/global.js"), C("./node_modules/webpack/buildin/harmony-module.js")(e))
    },
    "./src/main/webapp/universal/node_modules/@sentry/utils/esm/object.js": function (e, b, g) {
        "use strict";
        (function (n) {
            g.d(b, "c", function () {
                return e
            });
            g.d(b, "f", function () {
                return t
            });
            g.d(b, "e", function () {
                return s
            });
            g.d(b, "g", function () {
                return v
            });
            g.d(b, "d", function () {
                return m
            });
            g.d(b, "b", function () {
                return h
            });
            g.d(b, "a", function () {
                return y
            });
            var u = g("./src/main/webapp/universal/node_modules/tslib/tslib.es6.js");
            var c = g("./src/main/webapp/universal/node_modules/@sentry/utils/esm/is.js");
            var l = g("./src/main/webapp/universal/node_modules/@sentry/utils/esm/memo.js");
            var a = g("./src/main/webapp/universal/node_modules/@sentry/utils/esm/misc.js");
            var i = g("./src/main/webapp/universal/node_modules/@sentry/utils/esm/string.js");

            function e(e, t, n) {
                if (!(t in e)) return;
                var r = e[t];
                var o = n(r);
                if ("function" === typeof o) try {
                    o.prototype = o.prototype || {};
                    Object.defineProperties(o, {
                        __sentry_original__: {
                            enumerable: false,
                            value: r
                        }
                    })
                } catch (e) { }
                e[t] = o
            }

            function t(t) {
                return Object.keys(t).map(function (e) {
                    return encodeURIComponent(e) + "=" + encodeURIComponent(t[e])
                }).join("&")
            }

            function f(e) {
                if (Object(c["d"])(e)) {
                    var t = e;
                    var n = {
                        message: t.message,
                        name: t.name,
                        stack: t.stack
                    };
                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
                    return n
                }
                if (Object(c["f"])(e)) {
                    var o = e;
                    var i = {};
                    i.type = o.type;
                    try {
                        i.target = Object(c["c"])(o.target) ? Object(a["k"])(o.target) : Object.prototype.toString.call(o.target)
                    } catch (e) {
                        i.target = "<unknown>"
                    }
                    try {
                        i.currentTarget = Object(c["c"])(o.currentTarget) ? Object(a["k"])(o.currentTarget) : Object.prototype.toString.call(o.currentTarget)
                    } catch (e) {
                        i.currentTarget = "<unknown>"
                    }
                    "undefined" !== typeof CustomEvent && Object(c["g"])(e, CustomEvent) && (i.detail = o.detail);
                    for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (i[r] = o);
                    return i
                }
                return e
            }

            function r(e) {
                return ~-encodeURI(e).split(/%..|./).length
            }

            function o(e) {
                return r(JSON.stringify(e))
            }

            function s(e, t, n) {
                void 0 === t && (t = 3);
                void 0 === n && (n = 102400);
                var r = m(e, t);
                if (o(r) > n) return s(e, t - 1, n);
                return r
            }

            function p(e) {
                var t = Object.prototype.toString.call(e);
                if ("string" === typeof e) return e;
                if ("[object Object]" === t) return "[Object]";
                if ("[object Array]" === t) return "[Array]";
                var n = d(e);
                return Object(c["i"])(n) ? n : t
            }

            function d(e, t) {
                if ("domain" === t && e && "object" === typeof e && e._events) return "[Domain]";
                if ("domainEmitter" === t) return "[DomainEmitter]";
                if ("undefined" !== typeof n && e === n) return "[Global]";
                if ("undefined" !== typeof window && e === window) return "[Window]";
                if ("undefined" !== typeof document && e === document) return "[Document]";
                if (Object(c["l"])(e)) return "[SyntheticEvent]";
                if ("number" === typeof e && e !== e) return "[NaN]";
                if (void 0 === e) return "[undefined]";
                if ("function" === typeof e) return "[Function: " + Object(a["h"])(e) + "]";
                return e
            }

            function v(e, t, n, r) {
                void 0 === n && (n = 1 / 0);
                void 0 === r && (r = new l["a"]);
                if (0 === n) return p(t);
                if (null !== t && void 0 !== t && "function" === typeof t.toJSON) return t.toJSON();
                var o = d(t, e);
                if (Object(c["i"])(o)) return o;
                var i = f(t);
                var a = Array.isArray(t) ? [] : {};
                if (r.memoize(t)) return "[Circular ~]";
                for (var s in i) {
                    if (!Object.prototype.hasOwnProperty.call(i, s)) continue;
                    a[s] = v(s, i[s], n - 1, r)
                }
                r.unmemoize(t);
                return a
            }

            function m(e, n) {
                try {
                    return JSON.parse(JSON.stringify(e, function (e, t) {
                        return v(e, t, n)
                    }))
                } catch (e) {
                    return "**non-serializable**"
                }
            }

            function h(e, t) {
                void 0 === t && (t = 40);
                var n = Object.keys(f(e));
                n.sort();
                if (!n.length) return "[object has no keys]";
                if (n[0].length >= t) return Object(i["d"])(n[0], t);
                for (var r = n.length; r > 0; r--) {
                    var o = n.slice(0, r).join(", ");
                    if (o.length > t) continue;
                    if (r === n.length) return o;
                    return Object(i["d"])(o, t)
                }
                return ""
            }

            function y(e) {
                var t, n;
                if (Object(c["h"])(e)) {
                    var r = e;
                    var o = {};
                    try {
                        for (var i = u["e"](Object.keys(r)), a = i.next(); !a.done; a = i.next()) {
                            var s = a.value;
                            "undefined" !== typeof r[s] && (o[s] = y(r[s]))
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            a && !a.done && (n = i.return) && n.call(i)
                        } finally {
                            if (t) throw t.error
                        }
                    }
                    return o
                }
                if (Array.isArray(e)) return e.map(y);
                return e
            }
        }).call(this, g("./node_modules/webpack/buildin/global.js"))
    },
    "./src/main/webapp/universal/node_modules/@sentry/utils/esm/promisebuffer.js": function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return i
        });
        var r = n("./src/main/webapp/universal/node_modules/@sentry/utils/esm/error.js");
        var o = n("./src/main/webapp/universal/node_modules/@sentry/utils/esm/syncpromise.js");
        var i = function () {
            function e(e) {
                this._limit = e;
                this._buffer = []
            }
            e.prototype.isReady = function () {
                return void 0 === this._limit || this.length() < this._limit
            };
            e.prototype.add = function (e) {
                var t = this;
                if (!this.isReady()) return o["a"].reject(new r["a"]("Not adding Promise due to buffer limit reached.")); - 1 === this._buffer.indexOf(e) && this._buffer.push(e);
                e.then(function () {
                    return t.remove(e)
                }).then(null, function () {
                    return t.remove(e).then(null, function () { })
                });
                return e
            };
            e.prototype.remove = function (e) {
                var t = this._buffer.splice(this._buffer.indexOf(e), 1)[0];
                return t
            };
            e.prototype.length = function () {
                return this._buffer.length
            };
            e.prototype.drain = function (n) {
                var r = this;
                return new o["a"](function (e) {
                    var t = setTimeout(function () {
                        n && n > 0 && e(false)
                    }, n);
                    o["a"].all(r._buffer).then(function () {
                        clearTimeout(t);
                        e(true)
                    }).then(null, function () {
                        e(true)
                    })
                })
            };
            return e
        }()
    },
    "./src/main/webapp/universal/node_modules/@sentry/utils/esm/string.js": function (e, t, n) {
        "use strict";
        n.d(t, "d", function () {
            return o
        });
        n.d(t, "c", function () {
            return i
        });
        n.d(t, "b", function () {
            return a
        });
        n.d(t, "a", function () {
            return s
        });
        var r = n("./src/main/webapp/universal/node_modules/@sentry/utils/esm/is.js");

        function o(e, t) {
            void 0 === t && (t = 0);
            if ("string" !== typeof e || 0 === t) return e;
            return e.length <= t ? e : e.substr(0, t) + "..."
        }

        function i(e, t) {
            var n = e;
            var r = n.length;
            if (r <= 150) return n;
            t > r && (t = r);
            var o = Math.max(t - 60, 0);
            o < 5 && (o = 0);
            var i = Math.min(o + 140, r);
            i > r - 5 && (i = r);
            i === r && (o = Math.max(i - 140, 0));
            n = n.slice(o, i);
            o > 0 && (n = "'{snip} " + n);
            i < r && (n += " {snip}");
            return n
        }

        function a(e, t) {
            if (!Array.isArray(e)) return "";
            var n = [];
            for (var r = 0; r < e.length; r++) {
                var o = e[r];
                try {
                    n.push(String(o))
                } catch (e) {
                    n.push("[value cannot be serialized]")
                }
            }
            return n.join(t)
        }

        function s(e, t) {
            if (Object(r["j"])(t)) return t.test(e);
            if ("string" === typeof t) return -1 !== e.indexOf(t);
            return false
        }
    },
    "./src/main/webapp/universal/node_modules/@sentry/utils/esm/supports.js": function (e, t, n) {
        "use strict";
        n.d(t, "c", function () {
            return r
        });
        n.d(t, "a", function () {
            return a
        });
        n.d(t, "b", function () {
            return s
        });
        n.d(t, "d", function () {
            return u
        });
        n.d(t, "f", function () {
            return l
        });
        n.d(t, "h", function () {
            return f
        });
        n.d(t, "g", function () {
            return p
        });
        n.d(t, "e", function () {
            return d
        });
        var o = n("./src/main/webapp/universal/node_modules/@sentry/utils/esm/logger.js");
        var i = n("./src/main/webapp/universal/node_modules/@sentry/utils/esm/misc.js");

        function r() {
            try {
                new ErrorEvent("");
                return true
            } catch (e) {
                return false
            }
        }

        function a() {
            try {
                new DOMError("");
                return true
            } catch (e) {
                return false
            }
        }

        function s() {
            try {
                new DOMException("");
                return true
            } catch (e) {
                return false
            }
        }

        function u() {
            if (!("fetch" in Object(i["i"])())) return false;
            try {
                new Headers;
                new Request("");
                new Response;
                return true
            } catch (e) {
                return false
            }
        }

        function c(e) {
            return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
        }

        function l() {
            if (!u()) return false;
            var e = Object(i["i"])();
            if (c(e.fetch)) return true;
            var t = false;
            var n = e.document;
            if (n) try {
                var r = n.createElement("iframe");
                r.hidden = true;
                n.head.appendChild(r);
                r.contentWindow && r.contentWindow.fetch && (t = c(r.contentWindow.fetch));
                n.head.removeChild(r)
            } catch (e) {
                o["a"].warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e)
            }
            return t
        }

        function f() {
            return "ReportingObserver" in Object(i["i"])()
        }

        function p() {
            if (!u()) return false;
            try {
                new Request("_", {
                    referrerPolicy: "origin"
                });
                return true
            } catch (e) {
                return false
            }
        }

        function d() {
            var e = Object(i["i"])();
            var t = e.chrome;
            var n = t && t.app && t.app.runtime;
            var r = "history" in e && !!e.history.pushState && !!e.history.replaceState;
            return !n && r
        }
    },
    "./src/main/webapp/universal/node_modules/@sentry/utils/esm/syncpromise.js": function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return i
        });
        var r = n("./src/main/webapp/universal/node_modules/@sentry/utils/esm/is.js");
        var o;
        (function (e) {
            e["PENDING"] = "PENDING";
            e["RESOLVED"] = "RESOLVED";
            e["REJECTED"] = "REJECTED"
        })(o = o || {});
        var i = function () {
            function a(e) {
                var n = this;
                this._state = o.PENDING;
                this._handlers = [];
                this._resolve = function (e) {
                    n._setResult(o.RESOLVED, e)
                };
                this._reject = function (e) {
                    n._setResult(o.REJECTED, e)
                };
                this._setResult = function (e, t) {
                    if (n._state !== o.PENDING) return;
                    if (Object(r["m"])(t)) {
                        t.then(n._resolve, n._reject);
                        return
                    }
                    n._state = e;
                    n._value = t;
                    n._executeHandlers()
                };
                this._attachHandler = function (e) {
                    n._handlers = n._handlers.concat(e);
                    n._executeHandlers()
                };
                this._executeHandlers = function () {
                    if (n._state === o.PENDING) return;
                    n._state === o.REJECTED ? n._handlers.forEach(function (e) {
                        e.onrejected && e.onrejected(n._value)
                    }) : n._handlers.forEach(function (e) {
                        e.onfulfilled && e.onfulfilled(n._value)
                    });
                    n._handlers = []
                };
                try {
                    e(this._resolve, this._reject)
                } catch (e) {
                    this._reject(e)
                }
            }
            a.prototype.toString = function () {
                return "[object SyncPromise]"
            };
            a.resolve = function (t) {
                return new a(function (e) {
                    e(t)
                })
            };
            a.reject = function (n) {
                return new a(function (e, t) {
                    t(n)
                })
            };
            a.all = function (e) {
                return new a(function (n, r) {
                    if (!Array.isArray(e)) {
                        r(new TypeError("Promise.all requires an array as input."));
                        return
                    }
                    if (0 === e.length) {
                        n([]);
                        return
                    }
                    var o = e.length;
                    var i = [];
                    e.forEach(function (e, t) {
                        a.resolve(e).then(function (e) {
                            i[t] = e;
                            o -= 1;
                            if (0 !== o) return;
                            n(i)
                        }).then(null, r)
                    })
                })
            };
            a.prototype.then = function (r, o) {
                var e = this;
                return new a(function (t, n) {
                    e._attachHandler({
                        onfulfilled: function (e) {
                            if (!r) {
                                t(e);
                                return
                            }
                            try {
                                t(r(e));
                                return
                            } catch (e) {
                                n(e);
                                return
                            }
                        },
                        onrejected: function (e) {
                            if (!o) {
                                n(e);
                                return
                            }
                            try {
                                t(o(e));
                                return
                            } catch (e) {
                                n(e);
                                return
                            }
                        }
                    })
                })
            };
            a.prototype.catch = function (e) {
                return this.then(function (e) {
                    return e
                }, e)
            };
            a.prototype.finally = function (o) {
                var i = this;
                return new a(function (e, t) {
                    var n;
                    var r;
                    return i.then(function (e) {
                        r = false;
                        n = e;
                        o && o()
                    }, function (e) {
                        r = true;
                        n = e;
                        o && o()
                    }).then(function () {
                        if (r) {
                            t(n);
                            return
                        }
                        e(n)
                    })
                })
            };
            return a
        }()
    },
    "./src/main/webapp/universal/node_modules/@sqs/praetor/build/module/index.js": function (e, t, n) {
        "use strict";
        n.r(t);
        n.d(t, "StaticPraetorClient", function () {
            return u
        });
        n.d(t, "Configuration", function () {
            return o
        });
        n.d(t, "ExperimentType", function () {
            return a
        });
        var r = "true";
        var i = "default";
        var a;
        (function (e) {
            e["FEATURE_TOGGLE"] = "FEATURE_TOGGLE";
            e["AB_TEST"] = "AB_TEST"
        })(a = a || {});
        var o = function () {
            function e(e) {
                var t = this;
                this.experiments = {};
                this.isConfigurationLoaded = Boolean(e.isConfigurationLoaded);
                Array.isArray(e.experimentContextList) && e.experimentContextList.forEach(function (e) {
                    null !== e && "object" === typeof e && e.hasOwnProperty("name") && (t.experiments[e.name] = e)
                })
            }
            e.prototype.isValid = function () {
                return this.isConfigurationLoaded
            };
            e.prototype.getContext = function (e) {
                return this.experiments[e]
            };
            return e
        }();
        var s = function () {
            function e(e) {
                this.configuration = new o(e)
            }
            e.prototype.getFeatureToggle = function (e, t) {
                var n = this.getContextValidity(e, a.FEATURE_TOGGLE),
                    r = n.context,
                    o = n.error;
                if (o || null === r) return {
                    enabled: t,
                    error: o
                };
                if (r.containsError) return {
                    enabled: this.isFeatureToggleEnabled(r),
                    error: "The specified feature has an invalid server-side definition"
                };
                return {
                    enabled: this.isFeatureToggleEnabled(r)
                }
            };
            e.prototype.getABTestVariant = function (e, t) {
                var n = this.getContextValidity(e, a.AB_TEST),
                    r = n.context,
                    o = n.error;
                if (o || null === r) return {
                    error: o,
                    segment: i,
                    variant: t
                };
                if (r.containsError) return {
                    error: "The specified feature has an invalid server-side definition",
                    segment: r.segmentName,
                    variant: r.variant
                };
                return {
                    segment: r.segmentName,
                    variant: r.variant
                }
            };
            e.prototype.getAllExperiments = function () {
                return this.configuration
            };
            e.prototype.getContextValidity = function (e, t) {
                if (!this.configuration.isValid()) return {
                    context: null,
                    error: "The underlying Praetor configuration is not loaded"
                };
                var n = this.configuration.getContext(e);
                if (void 0 === n) return {
                    context: null,
                    error: "The specified feature does not exist"
                };
                if (n.experimentType !== t) return {
                    context: null,
                    error: "The specified feature is not a " + t
                };
                return {
                    context: n
                }
            };
            e.prototype.isFeatureToggleEnabled = function (e) {
                return e.variant === r
            };
            return e
        }();
        var u = s
    },
    "./src/main/webapp/universal/node_modules/@sqs/rum-collector/lib/index.js": function (e, t, n) {
        "use strict";
        n.r(t);
        n.d(t, "default", function () {
            return Ht
        });
        n.d(t, "getPerformanceData", function () {
            return tt
        });
        n.d(t, "getPerformanceMetrics", function () {
            return kn
        });
        n.d(t, "mark", function () {
            return In
        });
        n.d(t, "measure", function () {
            return Cn
        });
        n.d(t, "getDomainLookup", function () {
            return zt
        });
        n.d(t, "getTCPConnection", function () {
            return Yt
        });
        n.d(t, "getCumulativeLayoutShift", function () {
            return mn
        });
        n.d(t, "getDecodedBodySize", function () {
            return hn
        });
        n.d(t, "getDomContentLoadedEventEnd", function () {
            return yn
        });
        n.d(t, "getDomContentLoadedEventStart", function () {
            return bn
        });
        n.d(t, "getEncodedBodySize", function () {
            return gn
        });
        n.d(t, "getFirstContentfulPaint", function () {
            return _n
        });
        n.d(t, "getFirstInputDelay", function () {
            return wn
        });
        n.d(t, "getLargestContentfulPaint", function () {
            return jn
        });
        n.d(t, "getLoadEventEnd", function () {
            return En
        });
        n.d(t, "getLoadEventStart", function () {
            return Sn
        });
        n.d(t, "getResponseStart", function () {
            return On
        });
        n.d(t, "getTLSNegotiation", function () {
            return Tn
        });
        n.d(t, "getTimeToInteractive", function () {
            return xn
        });
        n.d(t, "trackLoadPerformance", function () {
            return Fn
        });
        var o = {};
        n.r(o);
        n.d(o, "getDomainLookup", function () {
            return zt
        });
        n.d(o, "getTCPConnection", function () {
            return Yt
        });
        n.d(o, "getCumulativeLayoutShift", function () {
            return mn
        });
        n.d(o, "getDecodedBodySize", function () {
            return hn
        });
        n.d(o, "getDomContentLoadedEventEnd", function () {
            return yn
        });
        n.d(o, "getDomContentLoadedEventStart", function () {
            return bn
        });
        n.d(o, "getEncodedBodySize", function () {
            return gn
        });
        n.d(o, "getFirstContentfulPaint", function () {
            return _n
        });
        n.d(o, "getFirstInputDelay", function () {
            return wn
        });
        n.d(o, "getLargestContentfulPaint", function () {
            return jn
        });
        n.d(o, "getLoadEventEnd", function () {
            return En
        });
        n.d(o, "getLoadEventStart", function () {
            return Sn
        });
        n.d(o, "getResponseStart", function () {
            return On
        });
        n.d(o, "getTLSNegotiation", function () {
            return Tn
        });
        n.d(o, "getTimeToInteractive", function () {
            return xn
        });
        var i = n("./src/main/webapp/universal/node_modules/@sqs/praetor/build/module/index.js");
        var r = function (e, t) {
            r = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                };
            return r(e, t)
        };

        function a(e, t) {
            r(e, t);

            function n() {
                this.constructor = e
            }
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }
        var v = function () {
            v = Object.assign || function e(t) {
                for (var n, r = 1, o = arguments.length; r < o; r++) {
                    n = arguments[r];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                }
                return t
            };
            return v.apply(this, arguments)
        };

        function m(e, t) {
            var n = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
            if (null != e && "function" === typeof Object.getOwnPropertySymbols)
                for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
            return n
        }

        function s(e, t, n, r) {
            var o = arguments.length,
                i = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r,
                a;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) i = Reflect.decorate(e, t, n, r);
            else
                for (var s = e.length - 1; s >= 0; s--)(a = e[s]) && (i = (o < 3 ? a(i) : o > 3 ? a(t, n, i) : a(t, n)) || i);
            return o > 3 && i && Object.defineProperty(t, n, i), i
        }

        function u(n, r) {
            return function (e, t) {
                r(e, t, n)
            }
        }

        function c(e, t) {
            if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(e, t)
        }

        function l(e, a, n, s) {
            function u(t) {
                return t instanceof n ? t : new n(function (e) {
                    e(t)
                })
            }
            return new (n = n || Promise)(function (t, n) {
                function r(e) {
                    try {
                        i(s.next(e))
                    } catch (e) {
                        n(e)
                    }
                }

                function o(e) {
                    try {
                        i(s["throw"](e))
                    } catch (e) {
                        n(e)
                    }
                }

                function i(e) {
                    e.done ? t(e.value) : u(e.value).then(r, o)
                }
                i((s = s.apply(e, a || [])).next())
            })
        }

        function f(e, n) {
            var r = {
                label: 0,
                sent: function () {
                    if (1 & a[0]) throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            },
                o, i, a, t;
            return t = {
                next: s(0),
                throw: s(1),
                return: s(2)
            }, "function" === typeof Symbol && (t[Symbol.iterator] = function () {
                return this
            }), t;

            function s(t) {
                return function (e) {
                    return u([t, e])
                }
            }

            function u(t) {
                if (o) throw new TypeError("Generator is already executing.");
                while (r) try {
                    if (o = 1, i && (a = 2 & t[0] ? i["return"] : t[0] ? i["throw"] || ((a = i["return"]) && a.call(i), 0) : i.next) && !(a = a.call(i, t[1])).done) return a;
                    (i = 0, a) && (t = [2 & t[0], a.value]);
                    switch (t[0]) {
                        case 0:
                        case 1:
                            a = t;
                            break;
                        case 4:
                            r.label++;
                            return {
                                value: t[1], done: false
                            };
                        case 5:
                            r.label++;
                            i = t[1];
                            t = [0];
                            continue;
                        case 7:
                            t = r.ops.pop();
                            r.trys.pop();
                            continue;
                        default:
                            if (!(a = r.trys, a = a.length > 0 && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                r = 0;
                                continue
                            }
                            if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                r.label = t[1];
                                break
                            }
                            if (6 === t[0] && r.label < a[1]) {
                                r.label = a[1];
                                a = t;
                                break
                            }
                            if (a && r.label < a[2]) {
                                r.label = a[2];
                                r.ops.push(t);
                                break
                            }
                            a[2] && r.ops.pop();
                            r.trys.pop();
                            continue
                    }
                    t = n.call(e, r)
                } catch (e) {
                    t = [6, e];
                    i = 0
                } finally {
                        o = a = 0
                    }
                if (5 & t[0]) throw t[1];
                return {
                    value: t[0] ? t[1] : void 0,
                    done: true
                }
            }
        }
        var p = Object.create ? function (e, t, n, r) {
            void 0 === r && (r = n);
            Object.defineProperty(e, r, {
                enumerable: true,
                get: function () {
                    return t[n]
                }
            })
        } : function (e, t, n, r) {
            void 0 === r && (r = n);
            e[r] = t[n]
        };

        function d(e, t) {
            for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || p(t, e, n)
        }

        function h(e) {
            var t = "function" === typeof Symbol && Symbol.iterator,
                n = t && e[t],
                r = 0;
            if (n) return n.call(e);
            if (e && "number" === typeof e.length) return {
                next: function () {
                    e && r >= e.length && (e = void 0);
                    return {
                        value: e && e[r++],
                        done: !e
                    }
                }
            };
            throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }

        function y(e, t) {
            var n = "function" === typeof Symbol && e[Symbol.iterator];
            if (!n) return e;
            var r = n.call(e),
                o, i = [],
                a;
            try {
                while ((void 0 === t || t-- > 0) && !(o = r.next()).done) i.push(o.value)
            } catch (e) {
                a = {
                    error: e
                }
            } finally {
                try {
                    o && !o.done && (n = r["return"]) && n.call(r)
                } finally {
                    if (a) throw a.error
                }
            }
            return i
        }

        function b() {
            for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(y(arguments[t]));
            return e
        }

        function g() {
            for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
            for (var r = Array(e), o = 0, t = 0; t < n; t++)
                for (var i = arguments[t], a = 0, s = i.length; a < s; a++, o++) r[o] = i[a];
            return r
        }

        function _(e) {
            return this instanceof _ ? (this.v = e, this) : new _(e)
        }

        function w(e, t, n) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var o = n.apply(e, t || []),
                i, a = [];
            return i = {}, r("next"), r("throw"), r("return"), i[Symbol.asyncIterator] = function () {
                return this
            }, i;

            function r(r) {
                o[r] && (i[r] = function (n) {
                    return new Promise(function (e, t) {
                        a.push([r, n, e, t]) > 1 || s(r, n)
                    })
                })
            }

            function s(e, t) {
                try {
                    u(o[e](t))
                } catch (e) {
                    f(a[0][3], e)
                }
            }

            function u(e) {
                e.value instanceof _ ? Promise.resolve(e.value.v).then(c, l) : f(a[0][2], e)
            }

            function c(e) {
                s("next", e)
            }

            function l(e) {
                s("throw", e)
            }

            function f(e, t) {
                (e(t), a.shift(), a.length) && s(a[0][0], a[0][1])
            }
        }

        function j(r) {
            var e, o;
            return e = {}, t("next"), t("throw", function (e) {
                throw e
            }), t("return"), e[Symbol.iterator] = function () {
                return this
            }, e;

            function t(t, n) {
                e[t] = r[t] ? function (e) {
                    return (o = !o) ? {
                        value: _(r[t](e)),
                        done: "return" === t
                    } : n ? n(e) : e
                } : n
            }
        }

        function E(o) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var e = o[Symbol.asyncIterator],
                t;
            return e ? e.call(o) : (o = "function" === typeof h ? h(o) : o[Symbol.iterator](), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function () {
                return this
            }, t);

            function n(r) {
                t[r] = o[r] && function (n) {
                    return new Promise(function (e, t) {
                        n = o[r](n), i(e, t, n.done, n.value)
                    })
                }
            }

            function i(t, e, n, r) {
                Promise.resolve(r).then(function (e) {
                    t({
                        value: e,
                        done: n
                    })
                }, e)
            }
        }

        function S(e, t) {
            Object.defineProperty ? Object.defineProperty(e, "raw", {
                value: t
            }) : e.raw = t;
            return e
        }
        var O = Object.create ? function (e, t) {
            Object.defineProperty(e, "default", {
                enumerable: true,
                value: t
            })
        } : function (e, t) {
            e["default"] = t
        };

        function T(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && p(t, e, n);
            O(t, e);
            return t
        }

        function x(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function k(e, t) {
            if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
            return t.get(e)
        }

        function P(e, t, n) {
            if (!t.has(e)) throw new TypeError("attempted to set private field on non-instance");
            t.set(e, n);
            return n
        }
        var I = n("./src/main/webapp/universal/node_modules/tti-polyfill/tti-polyfill.js");
        var C = "/api/1/performance";
        var R = "/records";
        var A = "/settings";
        var L = "/error";
        var D = "3.1.1";
        var N = function (e) {
            return {
                app: "a",
                data: {
                    __encoding_config__: e,
                    __encoding_key__: "d"
                },
                event: "e",
                pageLoadId: "pl",
                ts: "t"
            }
        };
        var M = {
            downlink: "do",
            effectiveType: "ef",
            rtt: "rtt",
            saveData: "sd"
        };
        var B = {
            devicePixelRatio: "dpr",
            screenHeight: "sh",
            screenWidth: "sw",
            viewportHeight: "vh",
            viewportWidth: "vw"
        };
        var U = {
            deviceMemory: "dm",
            hardwareConcurrency: "hc"
        };
        var F = {
            abTest: "ab",
            analyticsId: "aid",
            connectEnd: "ce",
            connectStart: "c",
            connection: {
                __encoding_config__: M,
                __encoding_key__: "con"
            },
            context: "ctx",
            decodedBodySize: "db",
            deliveryType: "dt",
            display: {
                __encoding_config__: B,
                __encoding_key__: "disp"
            },
            domComplete: "dc",
            domContentLoadedEventEnd: "de",
            domContentLoadedEventStart: "ds",
            domInteractive: "di",
            domLoading: "d",
            domainLookupEnd: "dle",
            domainLookupStart: "dl",
            encodedBodySize: "eb",
            fetchStart: "f",
            firstContentfulPaint: "fcp",
            firstInputDelay: "fid",
            firstInteraction: "fi",
            firstPaint: "fp",
            hardware: {
                __encoding_config__: U,
                __encoding_key__: "hdw"
            },
            hash: "h",
            hostname: "hn",
            loadEventEnd: "le",
            loadEventStart: "l",
            marketingId: "mid",
            memberId: "mem",
            navigationStart: "n",
            navigationType: "nt",
            nextHopProtocol: "nh",
            pathname: "p",
            redirectCount: "rc",
            redirectEnd: "rde",
            redirectStart: "rd",
            requestStart: "r",
            responseEnd: "re",
            responseStart: "rs",
            secureConnectionStart: "s",
            supportLevel: "sl",
            transferSize: "t",
            tti: "tti",
            unloadEventEnd: "ue",
            unloadEventStart: "u",
            version: "v",
            visibilityStateOnDCL: "vs"
        };
        var q = {
            duration: "d",
            endMarkDetail: "e",
            measureDetail: "m",
            name: "n",
            startMarkDetail: "s",
            startTime: "st"
        };
        var H = {
            info: {
                __encoding_config__: {
                    img: {
                        __encoding_config__: {
                            __encoding_config__: {
                                assetUrl: "a",
                                naturalHeight: "nh",
                                naturalWidth: "nw",
                                parentHeight: "ph",
                                parentWidth: "pw",
                                squarespaceSize: "s",
                                visibleInSession: "vs",
                                visibleOnLoad: "vl"
                            },
                            __encoding_skip__: true
                        },
                        __encoding_key__: "img"
                    }
                },
                __encoding_key__: "i"
            },
            timings: "t"
        };
        var z = Object.keys(F);
        var Y = Object.keys(q);
        var W = Object.keys(H);
        var V = "userTiming";
        var G = "mark";
        var X = "measure";
        var K = ["click", "mousedown", "keydown", "touchstart", "pointerdown"];
        var J = "DOMContentLoaded";
        var $ = "load";
        var Z = "sqsImageLoad";
        var Q = [J, $];
        var ee = "beforeunload";
        var te = "pagehide";
        var ne = "resourcetimingbufferfull";
        var re = ["first-paint", "first-contentful-paint"];
        var oe = [Z, ee, $, ne, te];
        var ie = [$, ee, te];
        var ae = "rum-";
        var se = "ss_ab";
        var ue = "SS_MID";
        var ce = "SS_ANALYTICS_ID";
        var le = 3e4;
        var fe = 3e4;
        var pe = 5e4;
        var de = /(iPhone|iPod|iPad) OS ((1[0-2])|[2-9])_\d+.*AppleWebKit(?!.*Safari)/i;

        function ve(e) {
            var t = e.timeStamp;
            var n = t > 1e12 ? +new Date : window.performance.now();
            var r = Math.max(n - t, 0);
            return {
                firstInputDelay: r,
                firstInteraction: n
            }
        }

        function me() {
            return !!(window.performance && window.performance.now && window.addEventListener)
        }

        function he() {
            return !!(window.PerformanceMeasure && window.PerformanceMark && window.performance && window.performance.mark && window.performance.measure)
        }

        function ye() {
            if (!window.hasOwnProperty("PerformanceObserver")) return false;
            try {
                var e = new window.PerformanceObserver(function () {
                    return null
                });
                e.observe({
                    type: "mark"
                });
                e.disconnect()
            } catch (e) {
                return false
            }
            return true
        }

        function be() {
            return !!(window.performance && window.performance.getEntriesByType && window.PerformanceNavigationTiming)
        }

        function ge() {
            return !!(window.performance && window.performance.timing && window.PerformanceTiming)
        }

        function _e() {
            return "function" === typeof window.navigator.sendBeacon && !de.test(window.navigator.userAgent)
        }

        function we() {
            return !!window.PerformancePaintTiming
        }

        function je() {
            return !!window.LargestContentfulPaint
        }

        function Ee() {
            return !!window.PerformanceLongTaskTiming
        }

        function Se(e) {
            var t = {};
            for (var n in e) "function" !== typeof e[n] && (t[n] = e[n]);
            return t
        }
        var Oe = function (e) {
            var n = e.type,
                t = e.buffered,
                r = void 0 === t || t,
                o = e.isReadyFn,
                i = void 0 === o ? function () {
                    return true
                } : o;
            return new Promise(function (t) {
                var e = new PerformanceObserver(function (e) {
                    i(e) && t(e)
                });
                e.observe({
                    type: n,
                    buffered: r
                })
            })
        };

        function Te() {
            var e = {};
            if (window.performance) {
                if (be()) {
                    e = Se(window.performance.getEntriesByType("navigation")[0]);
                    e.supportLevel = 2
                } else if (ge()) {
                    e = Se(window.performance.timing);
                    e.supportLevel = 1
                }
                if (performance.navigation) {
                    e.navigationType = window.performance.navigation.type;
                    e.redirectCount = window.performance.navigation.redirectCount
                }
            }
            return e
        }
        var xe = null;
        var ke = function () {
            return l(void 0, void 0, void 0, function () {
                return f(this, function (e) {
                    switch (e.label) {
                        case 0:
                            if (!!xe) return [3, 4];
                            if (!(be() && ye())) return [3, 2];
                            return [4, Ie()];
                        case 1:
                            xe = e.sent();
                            return [3, 4];
                        case 2:
                            if (!ge()) return [3, 4];
                            return [4, Ce()];
                        case 3:
                            xe = e.sent();
                            e.label = 4;
                        case 4:
                            return [2, xe]
                    }
                })
            })
        };
        var Pe = function (n) {
            return l(void 0, void 0, void 0, function () {
                var t;
                return f(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return [4, ke()];
                        case 1:
                            t = e.sent();
                            if (!t || "number" !== typeof t[n]) return [2, null];
                            return [2, Math.round(t[n])]
                    }
                })
            })
        };

        function Ie() {
            return l(this, void 0, void 0, function () {
                var t, n, r;
                return f(this, function (e) {
                    switch (e.label) {
                        case 0:
                            e.trys.push([0, 2, , 3]);
                            return [4, Oe({
                                type: "navigation",
                                isReadyFn: function (e) {
                                    var t = e.getEntries()[0];
                                    return !!(t.duration && t.duration > 0)
                                }
                            })];
                        case 1:
                            t = e.sent();
                            n = t.getEntries()[0];
                            return [2, Se(n)];
                        case 2:
                            r = e.sent();
                            return [2, null];
                        case 3:
                            return [2]
                    }
                })
            })
        }

        function Ce() {
            var t = function () {
                var e = Se(window.performance.timing);
                var t = e.navigationStart;
                delete e.navigationStart;
                for (var n in e) e[n] > 0 && (e[n] = e[n] - t);
                return e
            };
            return new Promise(function (e) {
                "complete" !== document.readyState ? window.addEventListener("load", function () {
                    setTimeout(function () {
                        e(t())
                    })
                }) : e(t())
            })
        }

        function Re(e) {
            var t = new RegExp("(^| )" + e + "=([^;]+)");
            var n = document.cookie.match(t);
            if (n) return n[2];
            return ""
        }

        function Ae(e) {
            if (window.localStorage && window.localStorage.getItem) return window.localStorage.getItem(e);
            return null
        }
        var Le;
        (function (e) {
            e["Beacon"] = "beacon";
            e["XHR"] = "xhr"
        })(Le = Le || {});

        function De() {
            var e = Me();
            var t = Be();
            var n = Fe();
            return {
                abTest: Ne(),
                analyticsId: Re(ce),
                connection: e,
                deliveryType: _e() ? Le.Beacon : Le.XHR,
                display: t,
                hardware: n,
                hash: window.location.hash || "",
                hostname: window.location.hostname || "",
                marketingId: Re(ue),
                memberId: Ue(),
                pathname: window.location.pathname || "/",
                version: D
            }
        }

        function Ne() {
            if (!window.atob) return null;
            var e = Ae(se);
            if (e) try {
                return JSON.parse(window.atob(e))
            } catch (e) {
                return null
            }
            return null
        }

        function Me() {
            var e = {};
            var t = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
            if (t) {
                var n = (1e3 * t.downlink).toString();
                e = {
                    downlink: parseInt(n, 10),
                    effectiveType: t.effectiveType,
                    rtt: t.rtt,
                    saveData: t.saveData
                }
            }
            return e
        }

        function Be() {
            var e = window.devicePixelRatio;
            var t = window.screen,
                n = t.width,
                r = t.height;
            var o = document.documentElement,
                i = o.clientHeight,
                a = o.clientWidth;
            var s = {
                devicePixelRatio: e,
                screenHeight: r,
                screenWidth: n,
                viewportHeight: i,
                viewportWidth: a
            };
            return s
        }

        function Ue() {
            try {
                return window.Static.SQUARESPACE_CONTEXT.authenticatedAccount.id
            } catch (e) {
                return ""
            }
        }

        function Fe() {
            return {
                deviceMemory: navigator.deviceMemory,
                hardwareConcurrency: navigator.hardwareConcurrency
            }
        }

        function qe(e) {
            var t;
            var n = e.name,
                r = e.startTime;
            if (re.indexOf(n) >= 0) return t = {}, t[He(n)] = r, t;
            return {}
        }

        function He(e) {
            return e.replace(/-([a-zA-Z])/g, function (e, t) {
                var n = t && t.toUpperCase();
                return n || e
            })
        }

        function ze(f, p) {
            var d = {};
            Object.keys(p).forEach(function (e) {
                var t = p[e];
                var n;
                var r;
                var o = f[e] || f;
                var i = typeof o;
                var a = "string" === i;
                var s = "object" === i || "undefined" === o;
                if (!a && !s) return;
                if (a) {
                    n = o;
                    r = Ye(t)
                } else {
                    var u = o.__encoding_skip__;
                    var c = o.__encoding_config__;
                    var l = o.__encoding_fn__;
                    if (!u && !c && !f) throw new Error("Invalid encoding map");
                    n = u ? e : o.__encoding_key__;
                    r = c ? ze(c, t) : l ? l(t) : t
                }
                n && (d["" + n] = r)
            });
            return d
        }

        function Ye(e) {
            if ("boolean" === typeof e) return e ? 1 : 0;
            if (We(e)) return e.toString(36);
            return e
        }

        function We(e) {
            return ("number" === typeof e || e instanceof Number) && isFinite(e)
        }
        var Ve;
        var Ge = [];

        function Xe(e, t) {
            if (_e() && navigator.sendBeacon(e, t)) return;
            var n = new XMLHttpRequest;
            n.open("POST", e, true);
            n.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
            n.send(t)
        }

        function Ke(n) {
            ie.forEach(function (t) {
                window.addEventListener(t, function () {
                    try {
                        if (t === $) Ve = window.setTimeout($e, fe, n);
                        else if ("number" === typeof Ve) {
                            window.clearTimeout(Ve);
                            Ve = void 0
                        }
                        $e(n)
                    } catch (e) {
                        n(e, t)
                    }
                })
            })
        }

        function Je(e) {
            Ge.push(e)
        }

        function $e(t) {
            try {
                if (Ge.length) {
                    var e = [];
                    while (Ge.length) {
                        var n = Ge.pop();
                        var r = JSON.stringify(n);
                        if (!(r.length <= pe && n)) throw new Error("Omitting individual metric because it's over the PER_METRIC_DELIVERY_SIZE (metric is " + r.length + " bytes, delivered from " + window.location.href + ")");
                        e.push(n)
                    }
                    if (e.length) {
                        var o = JSON.stringify(e);
                        Xe(C + R, o)
                    }
                }
            } catch (e) {
                t(e)
            }
        }

        function Ze(e) {
            Xe(C + L, e)
        }

        function Qe(e, t) {
            var n = ze(e, t);
            if (!n) throw new Error("Data is empty");
            Je(n)
        }
        var et = [];

        function tt() {
            return et
        }

        function nt(e) {
            et.push(e)
        }

        function rt(e, t, n, r) {
            var o = Object.freeze({
                app: e,
                data: r,
                event: t,
                pageLoadId: n,
                ts: Date.now()
            });
            nt(o);
            return o
        }
        var ot;
        (function (e) {
            e["OBSERVE"] = "observe";
            e["GATHER"] = "gather";
            e["BOTH"] = "both";
            e["NONE"] = ""
        })(ot = ot || {});
        var it = function () {
            function e() {
                this.requiresContext = false;
                this.context = {};
                this.deliveryBuffer = [];
                this.entryTypes = [e.eventName];
                this.fireOnce = false;
                this.gatherEvents = [];
                this.supportType = ot.NONE;
                this.encodeConfig = N({});
                this.appName = "";
                this.pageLoadId = ""
            }
            e.prototype.getDeliveryBuffer = function () {
                return this.deliveryBuffer
            };
            e.prototype.getEventName = function () {
                return this.constructor.eventName
            };
            e.prototype.getEntryTypes = function () {
                return this.entryTypes
            };
            e.prototype.getGatherEvents = function () {
                return this.gatherEvents
            };
            e.prototype.getSupportType = function () {
                return this.supportType
            };
            e.prototype.shouldFireOnce = function () {
                return this.fireOnce
            };
            e.prototype.observerParse = function (e) {
                this.deliveryBuffer.push(e);
                return true
            };
            e.prototype.gather = function (e) {
                return e
            };
            e.prototype.gatherParse = function (e) {
                this.deliveryBuffer.push(e);
                return true
            };
            e.prototype.deliver = function () {
                while (this.deliveryBuffer.length) {
                    var e = this.deliveryBuffer.shift();
                    if (e) {
                        var t = rt(this.appName, this.getEventName(), this.pageLoadId, e);
                        Qe(this.getEncodeConfig(), t)
                    }
                }
                this.deliveryBuffer = []
            };
            e.prototype.getEncodeConfig = function () {
                return this.encodeConfig
            };
            e.prototype.setApp = function (e) {
                this.appName = e;
                return this
            };
            e.prototype.setId = function (e) {
                this.pageLoadId = e;
                return this
            };
            e.eventName = "";
            return e
        }();
        var at = it;
        var st = function (n) {
            a(e, n);

            function e() {
                var e;
                var t = n.call(this) || this;
                t.requiresContext = true;
                t.fireOnce = true;
                t.gatherEvents = [$, ee, te];
                t.entryTypes = ["paint", "longtask"];
                t.supportType = ot.BOTH;
                t.deliveryBuffer = [{}];
                t.encodeConfig = N(F);
                t.visibilityStateOnDCL = "";
                t.metricsCollected = {
                    load: false
                };
                window.addEventListener("DOMContentLoaded", function () {
                    return t.visibilityStateOnDCL = document.visibilityState || ""
                });
                if (me()) {
                    t.metricsCollected.interaction = false;
                    (e = t.gatherEvents).push.apply(e, K)
                }
                ye() && (t.metricsCollected.paint = false);
                t.setupTTI();
                return t
            }
            e.prototype.gather = function (e) {
                if (e.type === $) {
                    this.metricsCollected.load = true;
                    return v(v({
                        context: this.context,
                        visibilityStateOnDCL: this.visibilityStateOnDCL
                    }, De()), Te())
                }
                if (-1 !== K.indexOf(e.type) && false === this.metricsCollected.interaction) {
                    this.metricsCollected.interaction = true;
                    return ve(e)
                }
                e.type === ee && (this.metricsCollected = {});
                return {}
            };
            e.prototype.gatherParse = function (e) {
                return this.parse(e)
            };
            e.prototype.observerParse = function (e) {
                if ("paint" === e.entryType) {
                    this.metricsCollected.paint = true;
                    return this.parse(qe(e))
                }
                "longtask" === e.entryType && window.__tti && window.__tti.e.push(e);
                return false
            };
            e.prototype.parse = function (n) {
                var t = this;
                this.deliveryBuffer.length && z.reduce(function (e, t) {
                    t in n && (e[t] = n[t]);
                    return e
                }, this.deliveryBuffer[0]);
                var e = Object.keys(this.metricsCollected).every(function (e) {
                    return t.metricsCollected[e]
                });
                return e
            };
            e.prototype.setupTTI = function () {
                var t = this;
                if (window.PerformanceLongTaskTiming && window.PerformanceObserver) {
                    window.__tti = {
                        e: []
                    };
                    this.metricsCollected.tti = false;
                    Object(I["getFirstConsistentlyInteractive"])().then(function (e) {
                        t.metricsCollected.tti = true;
                        t.parse({
                            tti: e
                        })
                    })
                }
            };
            e.eventName = "page_speed";
            return e
        }(at);
        var ut = st;
        var ct = n("./src/main/webapp/universal/node_modules/resourcetiming-compression/src/resourcetiming-compression.js");
        var lt = n.n(ct);
        var ft = function (t) {
            a(e, t);

            function e() {
                var e = t.call(this) || this;
                e.entryTypes = ["resource"];
                e.gatherEvents = oe;
                e.encodeConfig = N(H);
                e.readyToDeliver = false;
                e.dataBuffer = {
                    info: {},
                    timings: {}
                };
                e.resourceTimingData = [];
                window.performance && window.performance.getEntriesByType && window.performance.clearResourceTimings && window.PerformanceResourceTiming && window.performance.getEntriesByType("resource")[0] instanceof PerformanceResourceTiming ? e.supportType = ot.GATHER : e.supportType = ot.NONE;
                e.initImageLoaderData();
                return e
            }
            e.prototype.gather = function (e) {
                if (e.type === Z) {
                    var t = e.detail.imageData,
                        n = void 0 === t ? {} : t;
                    this.dataBuffer.info.img = v(v({}, this.dataBuffer.info.img), this.gatherImageInfo(n));
                    return this.dataBuffer
                }
                e.type === ee && (this.readyToDeliver = true);
                this.resourceTimingData = g(this.resourceTimingData, this.gatherImageTimingData());
                return this.dataBuffer
            };
            e.prototype.gatherParse = function () {
                if (this.readyToDeliver) {
                    var e = lt.a.compressResourceTiming(window, this.resourceTimingData, [], false).restiming;
                    this.dataBuffer.timings = e;
                    this.deliveryBuffer = [this.dataBuffer]
                }
                return this.readyToDeliver
            };
            e.prototype.initImageLoaderData = function () {
                var t = this;
                this.dataBuffer.info.img = {};
                if (window.ImageLoader && window.ImageLoader.imageInfo && Object.keys(window.ImageLoader.imageInfo).length) {
                    var n = window.ImageLoader.imageInfo;
                    Object.keys(n).forEach(function (e) {
                        t.dataBuffer.info.img = v(v({}, t.dataBuffer.info.img), t.gatherImageInfo(n[e], true))
                    })
                }
            };
            e.prototype.isSquarespaceImage = function (e) {
                var t = e.name,
                    n = e.initiatorType;
                var r = document.createElement("a");
                r.href = t;
                var o = r.hostname,
                    i = r.pathname;
                return Boolean("img" === n && (o.indexOf("images.squarespace-cdn.com") > -1 || (o.indexOf("squarespace.com") || o.indexOf("sqsp.net") > -1 || o.indexOf("squarespace.net") > -1) && i.indexOf("static") > -1))
            };
            e.prototype.gatherImageTimingData = function () {
                var e = window.performance.getEntriesByType("resource").filter(this.isSquarespaceImage);
                window.performance.clearResourceTimings();
                return e
            };
            e.prototype.gatherImageInfo = function (e, t) {
                var n;
                void 0 === t && (t = false);
                var r = e.naturalDimensions,
                    o = void 0 === r ? {} : r,
                    i = e.parentElementDimensions,
                    a = void 0 === i ? {} : i,
                    s = e.isVisible,
                    u = void 0 !== s && s,
                    c = e.assetUrl,
                    l = e.squarespaceSize,
                    f = m(e, ["naturalDimensions", "parentElementDimensions", "isVisible", "assetUrl", "squarespaceSize"]);
                if (!c || !l) return {};
                var p = c + "?format=" + e.squarespaceSize;
                var d = v({
                    assetUrl: p,
                    squarespaceSize: l
                }, f);
                if (o.hasOwnProperty("height") && o.hasOwnProperty("width")) {
                    d.naturalHeight = Math.round(o.height);
                    d.naturalWidth = Math.round(o.width)
                }
                if (a.hasOwnProperty("height") && a.hasOwnProperty("width")) {
                    d.parentHeight = Math.round(a.height);
                    d.parentWidth = Math.round(a.width)
                }
                d.visibleInSession = u;
                d.visibleOnLoad = t && u;
                return n = {}, n[p] = d, n
            };
            e.eventName = "resource";
            return e
        }(at);
        var pt = ft;

        function dt(e) {
            return "string" === typeof e && "rum-" === e.substring(0, 4)
        }

        function vt(e) {
            return "number" === typeof e ? Math.round(e) : e
        }
        var mt = function (i) {
            a(e, i);

            function e() {
                var e = i.call(this) || this;
                e.gatherEvents = [V];
                e.encodeConfig = N(q);
                e.supportType = ot.GATHER;
                e.detailCache = {};
                e.measureMarkCache = {};
                if (he()) {
                    var t = window.performance.getEntriesByType("measure");
                    for (var n = 0, r = t; n < r.length; n++) {
                        var o = r[n];
                        e.parse(Se(o))
                    }
                } else e.supportType = ot.NONE;
                return e
            }
            e.prototype.gather = function (e) {
                if (e && bt(e.detail) && bt(e.detail.userTimingEntry)) {
                    var t = e.detail,
                        n = t.userTimingEntry,
                        r = t.startMark,
                        o = t.endMark,
                        i = t.detail;
                    if (n.entryType === G) this.addDetail(n.name, i);
                    else if (n.entryType === X) {
                        this.addMeasure(n.name, r, o);
                        return v(v(v({}, Se(n)), this.getDetails(n.name)), {
                            measureDetail: i
                        })
                    }
                }
                return {}
            };
            e.prototype.gatherParse = function (e) {
                this.parse(e);
                return true
            };
            e.prototype.parse = function (e) {
                if (!dt(e.name)) return false;
                var t = {};
                for (var n = 0, r = Y; n < r.length; n++) {
                    var o = r[n];
                    e.hasOwnProperty(o) && (t[o] = vt(e[o]))
                }
                this.deliveryBuffer.push(t);
                return true
            };
            e.prototype.addMeasure = function (e, t, n) {
                this.measureMarkCache[e] = {
                    startMarkName: t,
                    endMarkName: n
                }
            };
            e.prototype.addDetail = function (e, t) {
                this.detailCache[e] = yt(t)
            };
            e.prototype.getDetails = function (e) {
                var t = {};
                var n = this.measureMarkCache[e];
                if (void 0 !== n) {
                    delete this.measureMarkCache[e];
                    var r = n.startMarkName,
                        o = n.endMarkName;
                    if (void 0 !== r && this.detailCache.hasOwnProperty(r)) {
                        t.startMarkDetail = this.detailCache[r];
                        delete this.detailCache[r]
                    }
                    if (void 0 !== o && this.detailCache.hasOwnProperty(o)) {
                        t.endMarkDetail = this.detailCache[o];
                        delete this.detailCache[o]
                    }
                }
                return t
            };
            e.eventName = "user";
            return e
        }(at);
        var ht = mt;

        function yt(e) {
            if ("object" !== typeof e || null === e) return e;
            var t = {};
            for (var n in e) n in e && (t[n] = e[n]);
            return t
        }

        function bt(e) {
            return null !== e && "object" === typeof e
        }
        var gt = function (t) {
            a(e, t);

            function e() {
                var e = t.call(this) || this;
                e.gatherEvents = [ee, te];
                e.supportType = ot.GATHER;
                e.encodeConfig = N();
                _e() || (e.supportType = ot.NONE);
                return e
            }
            e.prototype.gather = function () {
                if (wt()) return window.YUI.stats.getSerializedDataForReporter();
                return {}
            };
            e.prototype.gatherParse = function (e) {
                this.deliveryBuffer.push(e);
                return true
            };
            e.eventName = "yui_stats";
            return e
        }(at);
        var _t = gt;

        function wt() {
            return window.YUI && window.YUI.stats && window.YUI.stats.getSerializedDataForReporter && "function" === typeof window.YUI.stats.getSerializedDataForReporter
        }
        var jt = [ut, ht, pt, _t];

        function Et(n, e, r, o) {
            e.forEach(function (e) {
                Q.indexOf(e) > -1 && Tt() ? n({
                    type: e
                }) : window.addEventListener(e, function e(t) {
                    try {
                        r && window.removeEventListener(t.type, e);
                        return n(t)
                    } catch (e) {
                        o(e, {
                            fireOnce: r,
                            event: t
                        })
                    }
                })
            })
        }

        function St(n, r) {
            if (!("PerformanceObserver" in window)) return;
            var o = function (e) {
                e.forEach(function (e) {
                    var t = new CustomEvent(Ot(e.entryType), {
                        detail: e.toJSON()
                    });
                    window.dispatchEvent(t)
                })
            };
            var t = function (e) {
                var t = e.entryType;
                return n.indexOf(t) > -1
            };
            var i = function (e) {
                var t = e.entryType;
                return "navigation" === t
            };
            o(performance.getEntries().filter(function (e) {
                return t(e) && !i(e) || Tt() && i(e)
            }));
            var e = new window.PerformanceObserver(function (e) {
                var t;
                try {
                    t = e.getEntries();
                    o(t)
                } catch (e) {
                    r(e, t)
                }
            });
            if (n.length > 0) try {
                e.observe({
                    entryTypes: n
                })
            } catch (e) { }
        }

        function Ot(e) {
            return e + "-observer"
        }

        function Tt() {
            return "complete" === document.readyState
        }
        var xt = [];
        var kt;
        var Pt = 2e3;

        function It(e, t, n) {
            void 0 === n && (n = false);
            if (window.requestIdleCallback && !n) {
                xt.push(e);
                kt = kt || window.requestIdleCallback(function (e) {
                    return Ct(e, t)
                }, {
                    timeout: Pt
                })
            } else e.deliver()
        }

        function Ct(e, t) {
            try {
                while ((e.timeRemaining() > 0 || e.didTimeout) && xt.length) {
                    var n = xt.shift();
                    n && n.deliver()
                }
                kt = xt.length ? window.requestIdleCallback(function (e) {
                    return Ct(e, t)
                }, {
                    timeout: Pt
                }) : void 0
            } catch (e) {
                t(e)
            }
        }
        var Rt = {
            passive: true,
            capture: true
        };

        function At(t, e, n) {
            var r = function () {
                try {
                    e(t);
                    i()
                } catch (e) {
                    n(e, t)
                }
            };
            var o = function () {
                try {
                    i()
                } catch (e) {
                    n(e)
                }
            };

            function i() {
                window.removeEventListener("pointerup", r, Rt);
                window.removeEventListener("pointercancel", o, Rt)
            }
            window.addEventListener("pointerup", r, Rt);
            window.addEventListener("pointercancel", o, Rt)
        }

        function Lt(o) {
            return function (e, t) {
                void 0 === t && (t = false);
                var n = o.getABTestVariant(e + "-rollout", t.toString()).variant;
                var r = "true" === n;
                return r
            }
        }

        function Dt(o, i, a, s) {
            return function (e, t) {
                var n = o(t.eventName + "-plugin");
                if (n) {
                    var r = (new t).setApp(i).setId(a);
                    r.requiresContext && (r.context = s);
                    e.push(r)
                }
                return e
            }
        }

        function Nt(n, r, o) {
            return function (e) {
                var t = e.detail;
                try {
                    n.observerParse(t) && It(n, o)
                } catch (e) {
                    o(e, {
                        observerEventType: r,
                        parsedData: n.getDeliveryBuffer(),
                        observerData: t
                    })
                }
            }
        }

        function Mt(r, o) {
            function e(e) {
                var t;
                try {
                    t = r.gather(e);
                    if ("pointerdown" === t.eventType) At(t, function (e) {
                        return Bt(r, e, o)
                    }, o);
                    else {
                        var n = e.type === ee || e.type === te;
                        Bt(r, t, o, n)
                    }
                } catch (e) {
                    o(e, {
                        eventName: r.getEventName(),
                        parsedData: r.getDeliveryBuffer(),
                        rawData: t
                    })
                }
            }
            return e
        }

        function Bt(e, t, n, r) {
            void 0 === r && (r = false);
            var o = e.gatherParse(t);
            o && It(e, n, r)
        }
        var Ut = function () {
            return new Promise(function (e, t) {
                var n = new XMLHttpRequest;
                n.onreadystatechange = function () {
                    if (n.readyState === XMLHttpRequest.DONE)
                        if (200 === n.status) try {
                            e(JSON.parse(n.response))
                        } catch (e) {
                            t(e)
                        } else 0 !== n.status && t(new Error("XHR request DONE with unexpected status: " + n.status))
                };
                n.ontimeout = function () {
                    t(new Error("Metric settings request timeout"))
                };
                n.open("GET", C + A, true);
                n.timeout = le;
                n.send()
            })
        };
        var Ft = function (n, r) {
            return function (e, t) {
                Ze("RUMError[" + n + "]: " + e);
                r && r(e, t)
            }
        };
        var qt = function (e) {
            var t = {
                appName: e.appName || "",
                context: e.context || {},
                enabled: "boolean" !== typeof e.enabled || e.enabled
            };
            t.captureException = Ft(t.appName, e.captureException);
            return t
        };

        function Ht(e) {
            var a = qt(e);
            var r;
            return Ut().then(function (e) {
                r = e.pageLoadId;
                if (!r) throw new Error("Unable to resolve pageLoadId");
                return new i["StaticPraetorClient"](e)
            }).then(function (e) {
                var t = Lt(e);
                if (["rum", a.appName + "-app"].some(function (e) {
                    return !t(e)
                })) return;
                var n = jt.reduce(Dt(t, a.appName, r, a.context), []);
                var i = [];
                n.forEach(function (r) {
                    var e = r.getSupportType();
                    if (e === ot.OBSERVE || e === ot.BOTH) {
                        var t = r.getEntryTypes();
                        t.forEach(function (e) {
                            var t = Ot(e);
                            i.push(e);
                            var n = Nt(r, t, a.captureException);
                            window.addEventListener(t, n)
                        })
                    }
                    if (e === ot.GATHER || e === ot.BOTH) {
                        var n = r.getGatherEvents();
                        var o = Mt(r, a.captureException);
                        Et(o, n, r.shouldFireOnce(), a.captureException)
                    }
                });
                St(i, a.captureException);
                a.enabled && Ke(a.captureException)
            }).catch(function (e) {
                a.captureException(e, {
                    pageLoadId: r,
                    parsedOptions: a
                })
            })
        }
        var zt = function () {
            return l(void 0, void 0, void 0, function () {
                var t, n, r, o;
                return f(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return [4, Promise.all([Pe("domainLookupEnd"), Pe("domainLookupStart")])];
                        case 1:
                            t = e.sent(), n = t[0], r = t[1];
                            if (!(n && r)) return [2, null];
                            o = n - r;
                            return [2, {
                                domainLookup: o
                            }]
                    }
                })
            })
        };
        var Yt = function () {
            return l(void 0, void 0, void 0, function () {
                var t, n, r, o;
                return f(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return [4, Promise.all([Pe("connectEnd"), Pe("connectStart")])];
                        case 1:
                            t = e.sent(), n = t[0], r = t[1];
                            if (!(n && r)) return [2, null];
                            o = n - r;
                            return [2, {
                                tcpConnection: o
                            }]
                    }
                })
            })
        };
        var Wt, Vt, Gt = function () {
            return "".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12)
        },
            Xt = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
                return {
                    name: e,
                    value: t,
                    delta: 0,
                    entries: [],
                    id: Gt(),
                    isFinal: !1
                }
            },
            Kt = function (e, t) {
                try {
                    if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                        var n = new PerformanceObserver(function (e) {
                            return e.getEntries().map(t)
                        });
                        return n.observe({
                            type: e,
                            buffered: !0
                        }), n
                    }
                } catch (e) { }
            },
            Jt = !1,
            $t = !1,
            Zt = function (e) {
                Jt = !e.persisted
            },
            Qt = function () {
                addEventListener("pagehide", Zt), addEventListener("beforeunload", function () { })
            },
            en = function (n) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                $t || (Qt(), $t = !0), addEventListener("visibilitychange", function (e) {
                    var t = e.timeStamp;
                    "hidden" === document.visibilityState && n({
                        timeStamp: t,
                        isUnloading: Jt
                    })
                }, {
                    capture: !0,
                    once: e
                })
            },
            tn = function (e, t, n, r) {
                var o;
                return function () {
                    n && t.isFinal && n.disconnect(), t.value >= 0 && (r || t.isFinal || "hidden" === document.visibilityState) && (t.delta = t.value - (o || 0), (t.delta || t.isFinal || void 0 === o) && (e(t), o = t.value))
                }
            },
            nn = function (e) {
                var n, t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    r = Xt("CLS", 0),
                    o = function (e) {
                        e.hadRecentInput || (r.value += e.value, r.entries.push(e), n())
                    },
                    i = Kt("layout-shift", o);
                i && (n = tn(e, r, i, t), en(function (e) {
                    var t = e.isUnloading;
                    i.takeRecords().map(o), t && (r.isFinal = !0), n()
                }))
            },
            rn = function () {
                return void 0 === Wt && (Wt = "hidden" === document.visibilityState ? 0 : 1 / 0, en(function (e) {
                    var t = e.timeStamp;
                    return Wt = t
                }, !0)), {
                    get timeStamp() {
                        return Wt
                    }
                }
            },
            on = function (e) {
                var t, n = Xt("FCP"),
                    r = rn(),
                    o = Kt("paint", function (e) {
                        "first-contentful-paint" === e.name && e.startTime < r.timeStamp && (n.value = e.startTime, n.isFinal = !0, n.entries.push(e), t())
                    });
                o && (t = tn(e, n, o))
            },
            an = function (e) {
                var n = Xt("FID"),
                    r = rn(),
                    t = function (e) {
                        e.startTime < r.timeStamp && (n.value = e.processingStart - e.startTime, n.entries.push(e), n.isFinal = !0, i())
                    },
                    o = Kt("first-input", t),
                    i = tn(e, n, o);
                o ? en(function () {
                    o.takeRecords().map(t), o.disconnect()
                }, !0) : window.perfMetrics && window.perfMetrics.onFirstInputDelay && window.perfMetrics.onFirstInputDelay(function (e, t) {
                    t.timeStamp < r.timeStamp && (n.value = e, n.isFinal = !0, n.entries = [{
                        entryType: "first-input",
                        name: t.type,
                        target: t.target,
                        cancelable: t.cancelable,
                        startTime: t.timeStamp,
                        processingStart: t.timeStamp + e
                    }], i())
                })
            },
            sn = function () {
                return Vt = Vt || new Promise(function (t) {
                    return ["scroll", "keydown", "pointerdown"].map(function (e) {
                        addEventListener(e, t, {
                            once: !0,
                            passive: !0,
                            capture: !0
                        })
                    })
                }), Vt
            },
            un = function (e) {
                var n, t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    r = Xt("LCP"),
                    o = rn(),
                    i = function (e) {
                        var t = e.startTime;
                        t < o.timeStamp ? (r.value = t, r.entries.push(e)) : r.isFinal = !0, n()
                    },
                    a = Kt("largest-contentful-paint", i);
                if (a) {
                    n = tn(e, r, a, t);
                    var s = function () {
                        r.isFinal || (a.takeRecords().map(i), r.isFinal = !0, n())
                    };
                    sn().then(s), en(s, !0)
                }
            },
            cn = function (t) {
                var e, n = Xt("TTFB");
                e = function () {
                    try {
                        var e = performance.getEntriesByType("navigation")[0] || function () {
                            var e = performance.timing,
                                t = {
                                    entryType: "navigation",
                                    startTime: 0
                                };
                            for (var n in e) "navigationStart" !== n && "toJSON" !== n && (t[n] = Math.max(e[n] - e.navigationStart, 0));
                            return t
                        }();
                        n.value = n.delta = e.responseStart, n.entries = [e], n.isFinal = !0, t(n)
                    } catch (e) { }
                }, "complete" === document.readyState ? setTimeout(e, 0) : addEventListener("pageshow", e)
            };
        var ln = function (e) {
            return new Promise(function (t, n) {
                try {
                    e(function (e) {
                        t(e)
                    })
                } catch (e) {
                    n(e)
                }
            })
        };
        var fn = function (t, n) {
            void 0 === n && (n = null);
            return new Promise(function (e) {
                setTimeout(function () {
                    return e(n)
                }, t)
            })
        };
        var pn = 1e4;
        var dn = function (t) {
            return function () {
                return l(void 0, void 0, void 0, function () {
                    return f(this, function (e) {
                        return [2, Promise.race([ln(t), fn(pn)])]
                    })
                })
            }
        };
        var vn = {
            getCLS: dn(nn),
            getFCP: dn(on),
            getLCP: dn(un),
            getTTFB: dn(cn),
            getFID: dn(an)
        };
        var mn = function () {
            return l(void 0, void 0, void 0, function () {
                var t;
                return f(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return [4, vn.getCLS()];
                        case 1:
                            t = e.sent();
                            return [2, t ? {
                                cumulativeLayoutShift: t.value
                            } : null]
                    }
                })
            })
        };
        var hn = function () {
            return l(void 0, void 0, void 0, function () {
                var t;
                return f(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return [4, Pe("decodedBodySize")];
                        case 1:
                            t = e.sent();
                            return [2, t ? {
                                decodedBodySize: t
                            } : null]
                    }
                })
            })
        };
        var yn = function () {
            return l(void 0, void 0, void 0, function () {
                var t;
                return f(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return [4, Pe("domContentLoadedEventEnd")];
                        case 1:
                            t = e.sent();
                            return [2, t ? {
                                domContentLoadedEventEnd: t
                            } : null]
                    }
                })
            })
        };
        var bn = function () {
            return l(void 0, void 0, void 0, function () {
                var t;
                return f(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return [4, Pe("domContentLoadedEventStart")];
                        case 1:
                            t = e.sent();
                            return [2, t ? {
                                domContentLoadedEventStart: t
                            } : null]
                    }
                })
            })
        };
        var gn = function () {
            return l(void 0, void 0, void 0, function () {
                var t;
                return f(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return [4, Pe("encodedBodySize")];
                        case 1:
                            t = e.sent();
                            return [2, t ? {
                                encodedBodySize: t
                            } : null]
                    }
                })
            })
        };
        var _n = function () {
            return l(void 0, void 0, void 0, function () {
                var t;
                return f(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return [4, vn.getFCP()];
                        case 1:
                            t = e.sent();
                            return [2, t ? {
                                firstContentfulPaint: Math.round(t.value)
                            } : null]
                    }
                })
            })
        };
        var wn = function () {
            return l(void 0, void 0, void 0, function () {
                var t;
                return f(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return [4, vn.getFID()];
                        case 1:
                            t = e.sent();
                            return [2, t ? {
                                firstInputDelay: Math.round(t.value)
                            } : null]
                    }
                })
            })
        };
        var jn = function () {
            return l(void 0, void 0, void 0, function () {
                var t;
                return f(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return [4, vn.getLCP()];
                        case 1:
                            t = e.sent();
                            return [2, t ? {
                                largestContentfulPaint: Math.round(t.value)
                            } : null]
                    }
                })
            })
        };
        var En = function () {
            return l(void 0, void 0, void 0, function () {
                var t;
                return f(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return [4, Pe("loadEventEnd")];
                        case 1:
                            t = e.sent();
                            return [2, t ? {
                                loadEventEnd: t
                            } : null]
                    }
                })
            })
        };
        var Sn = function () {
            return l(void 0, void 0, void 0, function () {
                var t;
                return f(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return [4, Pe("loadEventStart")];
                        case 1:
                            t = e.sent();
                            return [2, t ? {
                                loadEventStart: t
                            } : null]
                    }
                })
            })
        };
        var On = function () {
            return l(void 0, void 0, void 0, function () {
                var t;
                return f(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return [4, vn.getTTFB()];
                        case 1:
                            t = e.sent();
                            return [2, t ? {
                                responseStart: Math.round(t.value)
                            } : null]
                    }
                })
            })
        };
        var Tn = function () {
            return l(void 0, void 0, void 0, function () {
                var t, n, r, o;
                return f(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return [4, Promise.all([Pe("connectEnd"), Pe("secureConnectionStart")])];
                        case 1:
                            t = e.sent(), n = t[0], r = t[1];
                            if (!(n && r)) return [2, null];
                            o = n - r;
                            return [2, {
                                tlsNegotiation: o
                            }]
                    }
                })
            })
        };
        var xn = function () {
            return l(void 0, void 0, void 0, function () {
                var t;
                return f(this, function (e) {
                    if (!(Ee() && ye())) return [2, null];
                    t = false;
                    window.__tti = {
                        e: []
                    };
                    Oe({
                        type: "longtask",
                        buffered: false,
                        isReadyFn: function (e) {
                            window.__tti.e = window.__tti.e.concat(e.getEntries());
                            return t
                        }
                    });
                    return [2, Object(I["getFirstConsistentlyInteractive"])().then(function (e) {
                        t = true;
                        return {
                            timeToInteractive: Math.round(e)
                        }
                    })]
                })
            })
        };

        function kn() {
            return l(this, void 0, void 0, function () {
                var t, n, r;
                return f(this, function (e) {
                    switch (e.label) {
                        case 0:
                            t = Object.values(o).map(function (e) {
                                return e()
                            });
                            e.label = 1;
                        case 1:
                            e.trys.push([1, 3, , 4]);
                            return [4, Promise.all(t)];
                        case 2:
                            n = e.sent().reduce(function (e, t) {
                                e = v(v({}, e), t);
                                return e
                            }, {});
                            return [2, n];
                        case 3:
                            r = e.sent();
                            return [2, {}];
                        case 4:
                            return [2]
                    }
                })
            })
        }

        function Pn(e, t) {
            "function" === typeof window.dispatchEvent && "function" === typeof CustomEvent && window.dispatchEvent(new CustomEvent(e, {
                detail: t
            }))
        }

        function In(e, t) {
            try {
                if (!An()) return;
                var n = ae + e;
                window.performance.mark(n);
                var r = {
                    userTimingEntry: Ln(n)
                };
                "object" === typeof t && null !== t && (r.detail = t.detail);
                Pn(V, r)
            } catch (e) {
                Ze("RUMError[mark]: " + e)
            }
        }

        function Cn(e, t) {
            try {
                if (!(An() && Rn())) return;
                var n = "object" === typeof t && null !== t;
                var r = n && "string" === typeof t.end;
                var o = n && "string" === typeof t.start;
                var i = n && !!t.requireStart;
                var a = ae + e;
                var s = o ? ae + t.start : a;
                var u = r ? ae + t.end : void 0;
                if (i && 0 === window.performance.getEntriesByName(s, "mark").length) return;
                Dn(a, s, u);
                var c = Ln(a);
                var l = {
                    detail: n ? t.detail : void 0,
                    endMark: u,
                    startMark: s,
                    userTimingEntry: c
                };
                Pn(V, l);
                return c
            } catch (e) {
                Ze("RUMError[measure]: " + e)
            }
        }

        function Rn() {
            return "performance" in window && "getEntries" in window.performance && "getEntriesByType" in window.performance && "getEntriesByName" in window.performance
        }

        function An() {
            return "mark" in window.performance && "measure" in window.performance
        }

        function Ln(e) {
            var t = window.performance.getEntriesByName(e);
            return t[t.length - 1]
        }

        function Dn(t, e, n) {
            try {
                window.performance.measure(t, e, n)
            } catch (e) {
                if (!(e instanceof DOMException)) throw e;
                try {
                    window.performance.measure(t, "navigationStart")
                } catch (e) {
                    if (!(e instanceof DOMException)) throw e;
                    window.performance.measure(t)
                }
            }
        }
        var Nn = n("./src/main/webapp/universal/node_modules/@sqs/track-events/v2.js");
        var Mn = n.n(Nn);
        var Bn = {
            action: "load",
            actor: "user",
            event_owner_team: "web_performance",
            event_source: "web",
            object_type: "website"
        };
        var Un = function () {
            var e = /^qa\d+.sqsp.net/g;
            var t = /^stage.sqsp.net/g;
            var n = window.location.hostname.substr(window.location.hostname.indexOf(".") + 1);
            if (t.test(n) || e.test(n)) return Nn["SourceEnvironment"].STAGING;
            if ("localhost" === n) return Nn["SourceEnvironment"].DEV;
            if ("squarespace.net" === n) return Nn["SourceEnvironment"].CORP;
            return Nn["SourceEnvironment"].PROD
        };
        var Fn = function (r) {
            return l(void 0, void 0, void 0, function () {
                var t, n;
                return f(this, function (e) {
                    switch (e.label) {
                        case 0:
                            t = new Mn.a({
                                customSchemaName: "Performance",
                                sourceEnvironment: Un()
                            }, Bn);
                            return [4, kn()];
                        case 1:
                            n = e.sent();
                            t.track(v(v({}, r), {
                                cumulative_layout_shift: n.cumulativeLayoutShift,
                                decoded_body_size_bytes: n.decodedBodySize,
                                dom_content_loaded_event_end_ms: n.domContentLoadedEventEnd,
                                dom_content_loaded_event_start_ms: n.domContentLoadedEventStart,
                                domain_lookup_ms: n.domainLookup,
                                encoded_body_size_bytes: n.encodedBodySize,
                                first_contentful_paint_ms: n.firstContentfulPaint,
                                first_input_delay_ms: n.firstInputDelay,
                                largest_contentful_paint_ms: n.largestContentfulPaint,
                                load_event_end_ms: n.loadEventEnd,
                                load_event_start_ms: n.loadEventStart,
                                response_start_ms: n.responseStart,
                                tcp_connection_ms: n.tcpConnection,
                                time_to_interactive_ms: n.timeToInteractive,
                                tls_negotiation_ms: n.tlsNegotiation
                            }));
                            return [2]
                    }
                })
            })
        }
    },
    "./src/main/webapp/universal/node_modules/@sqs/track-events/v2.js": function (e, t, n) {
        e.exports = function (n) {
            var r = {};

            function o(e) {
                if (r[e]) return r[e].exports;
                var t = r[e] = {
                    i: e,
                    l: false,
                    exports: {}
                };
                n[e].call(t.exports, t, t.exports, o);
                t.l = true;
                return t.exports
            }
            o.m = n;
            o.c = r;
            o.d = function (e, t, n) {
                o.o(e, t) || Object.defineProperty(e, t, {
                    enumerable: true,
                    get: n
                })
            };
            o.r = function (e) {
                "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                });
                Object.defineProperty(e, "__esModule", {
                    value: true
                })
            };
            o.t = function (t, e) {
                1 & e && (t = o(t));
                if (8 & e) return t;
                if (4 & e && "object" === typeof t && t && t.__esModule) return t;
                var n = Object.create(null);
                o.r(n);
                Object.defineProperty(n, "default", {
                    enumerable: true,
                    value: t
                });
                if (2 & e && "string" != typeof t)
                    for (var r in t) o.d(n, r, function (e) {
                        return t[e]
                    }.bind(null, r));
                return n
            };
            o.n = function (t) {
                var e = t && t.__esModule ? function e() {
                    return t["default"]
                } : function e() {
                    return t
                };
                o.d(e, "a", e);
                return e
            };
            o.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            };
            o.p = "";
            return o(o.s = 10)
        }([function (e, t) {
            var s = /^([^=]+)=([^;]*)$/;
            var t = e.exports = function (i, e) {
                i = i || {};
                "string" === typeof i && (i = {
                    cookie: i
                });
                void 0 === i.cookie && (i.cookie = "");
                false !== e && (e = true);
                var t = function (e) {
                    return e
                };
                var o = e ? escape : t;
                var a = e ? unescape : t;
                var n = {};
                n.get = function (e) {
                    var t = i.cookie.split(/;\s*/);
                    for (var n = 0; n < t.length; n++) {
                        var r = (t[n] || "").match(s) || [];
                        var o = a(r[1] || "");
                        if (o === e) return a(r[2] || "")
                    }
                    return
                };
                n.set = function (e, t, n) {
                    n = n || {};
                    var r = o(e) + "=" + o(t);
                    n.expires && (r += "; expires=" + n.expires);
                    n.path && (r += "; path=" + o(n.path));
                    n.domain && (r += "; domain=" + o(n.domain));
                    n.secure && (r += "; secure");
                    i.cookie = r;
                    return r
                };
                return n
            };
            if ("undefined" !== typeof document) {
                var n = t(document);
                t.get = n.get;
                t.set = n.set
            }
        }, function (e, t, n) {
            "use strict";
            t.decode = t.parse = n(6);
            t.encode = t.stringify = n(7)
        }, function (e, t, n) {
            var a = n(8);
            var s = n(9);

            function r(e, t, n) {
                var r = t && n || 0;
                if ("string" == typeof e) {
                    t = "binary" === e ? new Array(16) : null;
                    e = null
                }
                e = e || {};
                var o = e.random || (e.rng || a)();
                o[6] = 15 & o[6] | 64;
                o[8] = 63 & o[8] | 128;
                if (t)
                    for (var i = 0; i < 16; ++i) t[r + i] = o[i];
                return t || s(o)
            }
            e.exports = r
        }, function (e, t) {
            e.exports = function (n) {
                var r = {};

                function o(e) {
                    if (r[e]) return r[e].exports;
                    var t = r[e] = {
                        i: e,
                        l: false,
                        exports: {}
                    };
                    n[e].call(t.exports, t, t.exports, o);
                    t.l = true;
                    return t.exports
                }
                o.m = n;
                o.c = r;
                o.d = function (e, t, n) {
                    o.o(e, t) || Object.defineProperty(e, t, {
                        enumerable: true,
                        get: n
                    })
                };
                o.r = function (e) {
                    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    });
                    Object.defineProperty(e, "__esModule", {
                        value: true
                    })
                };
                o.t = function (t, e) {
                    1 & e && (t = o(t));
                    if (8 & e) return t;
                    if (4 & e && "object" === typeof t && t && t.__esModule) return t;
                    var n = Object.create(null);
                    o.r(n);
                    Object.defineProperty(n, "default", {
                        enumerable: true,
                        value: t
                    });
                    if (2 & e && "string" != typeof t)
                        for (var r in t) o.d(n, r, function (e) {
                            return t[e]
                        }.bind(null, r));
                    return n
                };
                o.n = function (t) {
                    var e = t && t.__esModule ? function e() {
                        return t["default"]
                    } : function e() {
                        return t
                    };
                    o.d(e, "a", e);
                    return e
                };
                o.o = function (e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                };
                o.p = "";
                return o(o.s = 0)
            }([function (e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: true
                });
                t.getSessionInfo = d;
                var r = n(1);
                var i = s(r);
                var o = n(4);
                var a = s(o);

                function s(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                var u = "SS_IS_FIRST_SESSION";
                var c = "SS_HAS_LANDED";
                var l = "SS_SESSION_ID";
                var f = ["squarespace.com", "squarespace.net", "sqsp.net"];
                var p = function e(t, n) {
                    var r = void 0;
                    f.forEach(function (e) {
                        window.location.hostname.indexOf(e) > -1 && (r = e)
                    });
                    r = r || window.location.hostname;
                    a.default.set(t, n, {
                        domain: r,
                        path: "/",
                        secure: window.location.protocol.indexOf("https") > -1
                    })
                };

                function d() {
                    if ("undefined" === typeof window) return;
                    if (window._sessionInfo) return window._sessionInfo;
                    try {
                        var e = localStorage.getItem(c);
                        var t = sessionStorage.getItem(u);
                        var n = null === t;
                        var r = null === e || "true" === t;
                        var o = a.default.get(l);
                        localStorage.setItem(c, "true");
                        n && (r ? sessionStorage.setItem(u, "true") : sessionStorage.setItem(u, "false"));
                        if (!o) {
                            o = (0, i.default)();
                            p(l, o)
                        }
                        window._sessionInfo = {
                            isFirstLanding: n,
                            isFirstSession: r,
                            sessionId: o
                        };
                        return window._sessionInfo
                    } catch (e) {
                        console.warn("Unable access local/session storage.");
                        return {
                            isFirstLanding: false,
                            isFirstSession: false
                        }
                    }
                }
            }, function (e, t, n) {
                var a = n(2);
                var s = n(3);

                function r(e, t, n) {
                    var r = t && n || 0;
                    if ("string" == typeof e) {
                        t = "binary" === e ? new Array(16) : null;
                        e = null
                    }
                    e = e || {};
                    var o = e.random || (e.rng || a)();
                    o[6] = 15 & o[6] | 64;
                    o[8] = 63 & o[8] | 128;
                    if (t)
                        for (var i = 0; i < 16; ++i) t[r + i] = o[i];
                    return t || s(o)
                }
                e.exports = r
            }, function (e, t) {
                var n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
                if (n) {
                    var r = new Uint8Array(16);
                    e.exports = function e() {
                        n(r);
                        return r
                    }
                } else {
                    var o = new Array(16);
                    e.exports = function e() {
                        for (var t = 0, n; t < 16; t++) {
                            0 === (3 & t) && (n = 4294967296 * Math.random());
                            o[t] = n >>> ((3 & t) << 3) & 255
                        }
                        return o
                    }
                }
            }, function (e, t) {
                var o = [];
                for (var n = 0; n < 256; ++n) o[n] = (n + 256).toString(16).substr(1);

                function r(e, t) {
                    var n = t || 0;
                    var r = o;
                    return [r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]]].join("")
                }
                e.exports = r
            }, function (e, t) {
                var s = /^([^=]+)=([^;]*)$/;
                var t = e.exports = function (i, e) {
                    i = i || {};
                    "string" === typeof i && (i = {
                        cookie: i
                    });
                    void 0 === i.cookie && (i.cookie = "");
                    false !== e && (e = true);
                    var t = function (e) {
                        return e
                    };
                    var o = e ? escape : t;
                    var a = e ? unescape : t;
                    var n = {};
                    n.get = function (e) {
                        var t = i.cookie.split(/;\s*/);
                        for (var n = 0; n < t.length; n++) {
                            var r = (t[n] || "").match(s) || [];
                            var o = a(r[1] || "");
                            if (o === e) return a(r[2] || "")
                        }
                        return
                    };
                    n.set = function (e, t, n) {
                        n = n || {};
                        var r = o(e) + "=" + o(t);
                        n.expires && (r += "; expires=" + n.expires);
                        n.path && (r += "; path=" + o(n.path));
                        n.domain && (r += "; domain=" + o(n.domain));
                        n.secure && (r += "; secure");
                        i.cookie = r;
                        return r
                    };
                    return n
                };
                if ("undefined" !== typeof document) {
                    var n = t(document);
                    t.get = n.get;
                    t.set = n.set
                }
            }])
        }, function (e) {
            e.exports = JSON.parse('{"a":"3.4.6"}')
        }, function (e, t) {
            e.exports = n("./src/main/webapp/universal/node_modules/core-js/modules/es.promise.js")
        }, function (e, t, n) {
            "use strict";

            function m(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            e.exports = function (e, t, n, r) {
                t = t || "&";
                n = n || "=";
                var o = {};
                if ("string" !== typeof e || 0 === e.length) return o;
                var i = /\+/g;
                e = e.split(t);
                var a = 1e3;
                r && "number" === typeof r.maxKeys && (a = r.maxKeys);
                var s = e.length;
                a > 0 && s > a && (s = a);
                for (var u = 0; u < s; ++u) {
                    var c = e[u].replace(i, "%20"),
                        l = c.indexOf(n),
                        f, p, d, v;
                    if (l >= 0) {
                        f = c.substr(0, l);
                        p = c.substr(l + 1)
                    } else {
                        f = c;
                        p = ""
                    }
                    d = decodeURIComponent(f);
                    v = decodeURIComponent(p);
                    m(o, d) ? h(o[d]) ? o[d].push(v) : o[d] = [o[d], v] : o[d] = v
                }
                return o
            };
            var h = Array.isArray || function (e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }
        }, function (e, t, n) {
            "use strict";
            var i = function (e) {
                switch (typeof e) {
                    case "string":
                        return e;
                    case "boolean":
                        return e ? "true" : "false";
                    case "number":
                        return isFinite(e) ? e : "";
                    default:
                        return ""
                }
            };
            e.exports = function (n, r, o, e) {
                r = r || "&";
                o = o || "=";
                null === n && (n = void 0);
                if ("object" === typeof n) return s(u(n), function (e) {
                    var t = encodeURIComponent(i(e)) + o;
                    return a(n[e]) ? s(n[e], function (e) {
                        return t + encodeURIComponent(i(e))
                    }).join(r) : t + encodeURIComponent(i(n[e]))
                }).join(r);
                if (!e) return "";
                return encodeURIComponent(i(e)) + o + encodeURIComponent(i(n))
            };
            var a = Array.isArray || function (e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            };

            function s(e, t) {
                if (e.map) return e.map(t);
                var n = [];
                for (var r = 0; r < e.length; r++) n.push(t(e[r], r));
                return n
            }
            var u = Object.keys || function (e) {
                var t = [];
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
                return t
            }
        }, function (e, t) {
            var n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
            if (n) {
                var r = new Uint8Array(16);
                e.exports = function e() {
                    n(r);
                    return r
                }
            } else {
                var o = new Array(16);
                e.exports = function e() {
                    for (var t = 0, n; t < 16; t++) {
                        0 === (3 & t) && (n = 4294967296 * Math.random());
                        o[t] = n >>> ((3 & t) << 3) & 255
                    }
                    return o
                }
            }
        }, function (e, t) {
            var o = [];
            for (var n = 0; n < 256; ++n) o[n] = (n + 256).toString(16).substr(1);

            function r(e, t) {
                var n = t || 0;
                var r = o;
                return [r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], "-", r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]], r[e[n++]]].join("")
            }
            e.exports = r
        }, function (e, t, n) {
            "use strict";
            n.r(t);
            n.d(t, "ClientConfig", function () {
                return
            });
            n.d(t, "EventSource", function () {
                return l
            });
            n.d(t, "SourceEnvironment", function () {
                return c
            });
            n.d(t, "default", function () {
                return M
            });
            var r = n(5);
            var o = n(0);
            var y = n.n(o);
            var i = n(1);
            var a = n.n(i);
            var s = n(2);
            var u = n.n(s);
            var c;
            (function (e) {
                e["DEV"] = "dev";
                e["QA"] = "qa";
                e["STAGING"] = "staging";
                e["PROD"] = "prod"
            })(c = c || {});
            var l;
            (function (e) {
                e["WEB"] = "WEB";
                e["IOS"] = "IOS";
                e["ANDROID"] = "ANDROID";
                e["SERVER"] = "SERVER"
            })(l = l || {});

            function f(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function p(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || false;
                    r.configurable = true;
                    "value" in r && (r.writable = true);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function d(e, t, n) {
                t && p(e.prototype, t);
                n && p(e, n);
                return e
            }

            function v(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: true,
                    configurable: true,
                    writable: true
                }) : e[t] = n;
                return e
            }
            var m = function () {
                function e() {
                    f(this, e);
                    v(this, "_analyticsId", void 0);
                    v(this, "_config", void 0);
                    v(this, "_defaultPayload", void 0)
                }
                d(e, [{
                    key: "track",
                    value: function e() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (false === this._config.fireEvents) return Promise.resolve();
                        var n = this._generatePayload(t);
                        if (this._config.validateMode) return this._validateEvent(n);
                        if (!this._config.url) return Promise.resolve();
                        if (!n) return Promise.reject(new Error("no payload"));
                        return this._config.useBeacon ? this._sendBeacon(n) : this._sendXhr(n)
                    }
                }, {
                    key: "_getAnalyticsId",
                    value: function e() {
                        var t = function e(t) {
                            return t && "null" !== t ? t : null
                        };
                        var n = t(y.a.get(this._config.storageKey));
                        var r = t(this._getLocalStorageItem());
                        var o = t(this._analyticsId);
                        var i = n || r || o || u()();
                        this._setAnalyticsId(i);
                        return i
                    }
                }, {
                    key: "_getLocalStorageItem",
                    value: function e() {
                        var t = false;
                        var n = localStorage.getItem(this._config.expirationKey);
                        if (n) {
                            var r = new Date;
                            var o = new Date(n);
                            t = r > o
                        }
                        if (t) {
                            localStorage.removeItem(this._config.storageKey);
                            localStorage.removeItem(this._config.expirationKey);
                            return null
                        }
                        return localStorage.getItem(this._config.storageKey)
                    }
                }, {
                    key: "_getNormalizedPathname",
                    value: function e() {
                        var t = window.location.pathname;
                        "/" === t[t.length - 1] && (t = t.substring(0, t.length - 1));
                        return t
                    }
                }, {
                    key: "_generatePayload",
                    value: function e(t) {
                        return t
                    }
                }, {
                    key: "_log",
                    value: function e(t) {
                        this._config.logging && console.log(t)
                    }
                }, {
                    key: "_sendBeacon",
                    value: function e(t) {
                        var n = {
                            type: "application/x-www-form-urlencoded"
                        };
                        var r = new Blob([a.a.stringify(t)], n);
                        navigator.sendBeacon(this._config.url, r);
                        return Promise.resolve()
                    }
                }, {
                    key: "_sendXhr",
                    value: function e(t, n) {
                        var r = this;
                        n = n || this._config.url;
                        var o = new XMLHttpRequest;
                        var i = JSON.stringify(t);
                        var a = new Set([200, 202]);
                        return new Promise(function (e, t) {
                            o.open("POST", n, true);
                            o.setRequestHeader("Content-Type", "application/json");
                            o.send(i);
                            o.addEventListener("readystatechange", function () {
                                if (4 !== o.readyState) return;
                                if (a.has(o.status)) e();
                                else {
                                    r._warn("Error tracking event: HTTP Status ".concat(o.status));
                                    t(new Error("Error tracking event: HTTP Status ".concat(o.status)))
                                }
                            })
                        })
                    }
                }, {
                    key: "_setAnalyticsId",
                    value: function e(t) {
                        this._analyticsId = t;
                        var n = this._config.cookie,
                            r = n.path,
                            o = n.secure;
                        var i = window.location.hostname;
                        this._config.cookie.domains.forEach(function (e) {
                            window.location.hostname.indexOf(e) > -1 && (i = e)
                        });
                        var a = new Date;
                        a.setDate(a.getDate() + this._config.cookie.daysToStore);
                        var s = a.toUTCString();
                        try {
                            y.a.set(this._config.storageKey, t, {
                                domain: i,
                                expires: s,
                                path: r,
                                secure: o
                            });
                            var u = document.cookie.indexOf(this._config.storageKey) !== document.cookie.lastIndexOf(this._config.storageKey);
                            if (u) {
                                var c = new Date(0).toUTCString();
                                y.a.set(this._config.storageKey, null, {
                                    expires: c
                                })
                            }
                            localStorage.setItem(this._config.storageKey, t);
                            localStorage.setItem(this._config.expirationKey, s)
                        } catch (e) {
                            this._warn("Unable to store analyticsId")
                        }
                    }
                }, {
                    key: "_validateEvent",
                    value: function e(t) {
                        return Promise.resolve(t)
                    }
                }, {
                    key: "_warn",
                    value: function e(t) {
                        this._config.logging && console.warn(t)
                    }
                }]);
                return e
            }();
            var b = n(3);
            var g = n(4);
            var h = function e() {
                return {
                    devBaseDomainUrl: "https://clanker-events.stage.sqsp.net",
                    cookie: {
                        daysToStore: 390,
                        domains: ["squarespace.com", "squarespace.net", "sqsp.net"],
                        path: "/",
                        secure: window.location.protocol.indexOf("https") > -1
                    },
                    expirationKey: "SS_ANALYTICS_EXPIRATION",
                    fireEvents: true,
                    logging: false,
                    sourceEnvironment: c.DEV,
                    storageKey: "SS_ANALYTICS_ID",
                    url: "https://clanker-events.stage.sqsp.net/api/v1/clanker/events",
                    useBeacon: true,
                    validateMode: false
                }
            };

            function _(e) {
                _ = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function e(t) {
                    return typeof t
                } : function e(t) {
                    return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                };
                return _(e)
            }

            function w(e, t) {
                if (null == e) return {};
                var n = j(e, t);
                var r, o;
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (o = 0; o < i.length; o++) {
                        r = i[o];
                        if (t.indexOf(r) >= 0) continue;
                        if (!Object.prototype.propertyIsEnumerable.call(e, r)) continue;
                        n[r] = e[r]
                    }
                }
                return n
            }

            function j(e, t) {
                if (null == e) return {};
                var n = {};
                var r = Object.keys(e);
                var o, i;
                for (i = 0; i < r.length; i++) {
                    o = r[i];
                    if (t.indexOf(o) >= 0) continue;
                    n[o] = e[o]
                }
                return n
            }

            function E(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter(function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }));
                    n.push.apply(n, r)
                }
                return n
            }

            function S(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? E(Object(n), true).forEach(function (e) {
                        O(t, e, n[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : E(Object(n)).forEach(function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    })
                }
                return t
            }

            function O(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: true,
                    configurable: true,
                    writable: true
                }) : e[t] = n;
                return e
            }

            function T() {
                T = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                };
                return T.apply(this, arguments)
            }

            function x(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function k(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || false;
                    r.configurable = true;
                    "value" in r && (r.writable = true);
                    Object.defineProperty(e, r.key, r)
                }
            }

            function P(e, t, n) {
                t && k(e.prototype, t);
                n && k(e, n);
                return e
            }

            function I(e, t) {
                if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: true,
                        configurable: true
                    }
                });
                t && C(e, t)
            }

            function C(e, t) {
                C = Object.setPrototypeOf || function e(t, n) {
                    t.__proto__ = n;
                    return t
                };
                return C(e, t)
            }

            function R(r) {
                return function () {
                    var e = N(r),
                        t;
                    if (D()) {
                        var n = N(this).constructor;
                        t = Reflect.construct(e, arguments, n)
                    } else t = e.apply(this, arguments);
                    return A(this, t)
                }
            }

            function A(e, t) {
                if (t && ("object" === _(t) || "function" === typeof t)) return t;
                return L(e)
            }

            function L(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function D() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return false;
                if (Reflect.construct.sham) return false;
                if ("function" === typeof Proxy) return true;
                try {
                    Date.prototype.toString.call(Reflect.construct(Date, [], function () { }));
                    return true
                } catch (e) {
                    return false
                }
            }

            function N(e) {
                N = Object.setPrototypeOf ? Object.getPrototypeOf : function e(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                };
                return N(e)
            }
            var M = function (e) {
                I(i, e);
                var o = R(i);

                function i(e) {
                    var t;
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    x(this, i);
                    t = o.call(this);
                    var r = h();
                    t._config = T(r, e);
                    t._defaultPayload = n;
                    "sendBeacon" in navigator || (t._config.useBeacon = false);
                    t._config.url = t._generateUrl();
                    return t
                }
                P(i, [{
                    key: "_generatePayload",
                    value: function e(t) {
                        var n = new Date;
                        var r = Object(b["getSessionInfo"])();
                        var o = S({}, this._defaultPayload, {}, t);
                        var i = o.context_website_id,
                            a = o.custom_schema_name,
                            s = o.destination_url,
                            u = o.member_account_id,
                            c = o.object_identifier,
                            l = o.resolved_locale,
                            f = o.website_locale,
                            p = o.member_account_locale,
                            d = w(o, ["context_website_id", "custom_schema_name", "destination_url", "member_account_id", "object_identifier", "resolved_locale", "website_locale", "member_account_locale"]);
                        var v = {
                            analytics_id: this._getAnalyticsId(),
                            browser_language: navigator.language,
                            browser_window_height: window.innerHeight,
                            browser_window_width: window.innerWidth,
                            client_name: "Javascript Pipeline 2.0 Event Tracker Client",
                            client_version: g["a"],
                            marketing_id: y.a.get("SS_MID") || null,
                            page_host: window.location.hostname,
                            page_path: this._getNormalizedPathname(),
                            page_query_params: window.location.search,
                            page_referrer_url: document.referrer,
                            session_id: r.sessionId || null,
                            enduser_user_agent: navigator.userAgent,
                            event_occurrence_timestamp: n.getTime(),
                            browser_locale: navigator.language
                        };
                        this._warnOfOverwrittenFields(o, v);
                        var m = a || this._config.customSchemaName;
                        var h = {
                            eventContent: S({}, d, {}, v, {
                                custom_schema_name: m,
                                source_environment: this._config.sourceEnvironment,
                                context_website_id: i || null,
                                destination_url: s || null,
                                member_account_id: u || null,
                                object_identifier: c || null,
                                resolved_locale: l || document.documentElement.lang || "en-US",
                                website_locale: f || null,
                                member_account_locale: p || null
                            }),
                            eventSchemaName: m
                        };
                        this._config.logging && this._log({
                            payload: S({}, h)
                        });
                        h.eventContent = JSON.stringify(h.eventContent);
                        return h
                    }
                }, {
                    key: "_warnOfOverwrittenFields",
                    value: function e(t, n) {
                        var r = this;
                        Object.keys(t).forEach(function (e) {
                            t.hasOwnProperty(e) && n.hasOwnProperty(e) && r._warn("".concat(e, " is auto populated by @sqs/track-events/v2 and was overwritten"))
                        })
                    }
                }, {
                    key: "_generateUrl",
                    value: function e() {
                        var t = this._config,
                            n = t.sourceEnvironment,
                            r = t.devBaseDomainUrl;
                        var o = "";
                        switch (n) {
                            case c.DEV:
                                o = "".concat(r, "/api/v1/clanker/events");
                                break;
                            case c.QA:
                            case c.STAGING:
                                o = "https://clanker-events.stage.sqsp.net/api/v1/clanker/events";
                                break;
                            case c.PROD:
                                o = "https://clanker-events.squarespace.com/api/v1/clanker/events";
                                break;
                            default:
                                this._warn("sourceEnvironment needs to be set to one of dev, staging, or prod");
                                o = ""
                        }
                        return o
                    }
                }, {
                    key: "spawnTracker",
                    value: function e() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        var n = T({}, this._defaultPayload, t);
                        return new i(this._config, n)
                    }
                }, {
                    key: "_validateEvent",
                    value: function e(t) {
                        var n = "".concat(this._config.devBaseDomainUrl, "/api/v1/clanker/validate-event-content/").concat(this._config.customSchemaName);
                        this._sendXhr(t.eventContent, n)
                    }
                }]);
                return i
            }(m)
        }])
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/a-function.js": function (e, t) {
        e.exports = function (e) {
            if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
            return e
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/an-instance.js": function (e, t) {
        e.exports = function (e, t, n) {
            if (!(e instanceof t)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
            return e
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/an-object.js": function (e, t, n) {
        var r = n("./src/main/webapp/universal/node_modules/core-js/internals/is-object.js");
        e.exports = function (e) {
            if (!r(e)) throw TypeError(String(e) + " is not an object");
            return e
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/array-includes.js": function (e, t, n) {
        var u = n("./src/main/webapp/universal/node_modules/core-js/internals/to-indexed-object.js");
        var c = n("./src/main/webapp/universal/node_modules/core-js/internals/to-length.js");
        var l = n("./src/main/webapp/universal/node_modules/core-js/internals/to-absolute-index.js");
        var r = function (s) {
            return function (e, t, n) {
                var r = u(e);
                var o = c(r.length);
                var i = l(n, o);
                var a;
                if (s && t != t)
                    while (o > i) {
                        a = r[i++];
                        if (a != a) return true
                    } else
                    for (; o > i; i++)
                        if ((s || i in r) && r[i] === t) return s || i || 0;
                return !s && -1
            }
        };
        e.exports = {
            includes: r(true),
            indexOf: r(false)
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/bind-context.js": function (e, t, n) {
        var i = n("./src/main/webapp/universal/node_modules/core-js/internals/a-function.js");
        e.exports = function (r, o, e) {
            i(r);
            if (void 0 === o) return r;
            switch (e) {
                case 0:
                    return function () {
                        return r.call(o)
                    };
                case 1:
                    return function (e) {
                        return r.call(o, e)
                    };
                case 2:
                    return function (e, t) {
                        return r.call(o, e, t)
                    };
                case 3:
                    return function (e, t, n) {
                        return r.call(o, e, t, n)
                    }
            }
            return function () {
                return r.apply(o, arguments)
            }
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/call-with-safe-iteration-closing.js": function (e, t, n) {
        var i = n("./src/main/webapp/universal/node_modules/core-js/internals/an-object.js");
        e.exports = function (t, e, n, r) {
            try {
                return r ? e(i(n)[0], n[1]) : e(n)
            } catch (e) {
                var o = t["return"];
                void 0 !== o && i(o.call(t));
                throw e
            }
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/check-correctness-of-iteration.js": function (e, t, n) {
        var r = n("./src/main/webapp/universal/node_modules/core-js/internals/well-known-symbol.js");
        var o = r("iterator");
        var i = false;
        try {
            var a = 0;
            var s = {
                next: function () {
                    return {
                        done: !!a++
                    }
                },
                return: function () {
                    i = true
                }
            };
            s[o] = function () {
                return this
            };
            Array.from(s, function () {
                throw 2
            })
        } catch (e) { }
        e.exports = function (e, t) {
            if (!t && !i) return false;
            var n = false;
            try {
                var r = {};
                r[o] = function () {
                    return {
                        next: function () {
                            return {
                                done: n = true
                            }
                        }
                    }
                };
                e(r)
            } catch (e) { }
            return n
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/classof-raw.js": function (e, t) {
        var n = {}.toString;
        e.exports = function (e) {
            return n.call(e).slice(8, -1)
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/classof.js": function (e, t, n) {
        var o = n("./src/main/webapp/universal/node_modules/core-js/internals/classof-raw.js");
        var r = n("./src/main/webapp/universal/node_modules/core-js/internals/well-known-symbol.js");
        var i = r("toStringTag");
        var a = "Arguments" == o(function () {
            return arguments
        }());
        var s = function (e, t) {
            try {
                return e[t]
            } catch (e) { }
        };
        e.exports = function (e) {
            var t, n, r;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = s(t = Object(e), i)) ? n : a ? o(t) : "Object" == (r = o(t)) && "function" == typeof t.callee ? "Arguments" : r
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/copy-constructor-properties.js": function (e, t, n) {
        var s = n("./src/main/webapp/universal/node_modules/core-js/internals/has.js");
        var u = n("./src/main/webapp/universal/node_modules/core-js/internals/own-keys.js");
        var c = n("./src/main/webapp/universal/node_modules/core-js/internals/object-get-own-property-descriptor.js");
        var l = n("./src/main/webapp/universal/node_modules/core-js/internals/object-define-property.js");
        e.exports = function (e, t) {
            var n = u(t);
            var r = l.f;
            var o = c.f;
            for (var i = 0; i < n.length; i++) {
                var a = n[i];
                s(e, a) || r(e, a, o(t, a))
            }
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/create-non-enumerable-property.js": function (e, t, n) {
        var r = n("./src/main/webapp/universal/node_modules/core-js/internals/descriptors.js");
        var o = n("./src/main/webapp/universal/node_modules/core-js/internals/object-define-property.js");
        var i = n("./src/main/webapp/universal/node_modules/core-js/internals/create-property-descriptor.js");
        e.exports = r ? function (e, t, n) {
            return o.f(e, t, i(1, n))
        } : function (e, t, n) {
            e[t] = n;
            return e
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/create-property-descriptor.js": function (e, t) {
        e.exports = function (e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/descriptors.js": function (e, t, n) {
        var r = n("./src/main/webapp/universal/node_modules/core-js/internals/fails.js");
        e.exports = !r(function () {
            return 7 != Object.defineProperty({}, "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/document-create-element.js": function (e, t, n) {
        var r = n("./src/main/webapp/universal/node_modules/core-js/internals/global.js");
        var o = n("./src/main/webapp/universal/node_modules/core-js/internals/is-object.js");
        var i = r.document;
        var a = o(i) && o(i.createElement);
        e.exports = function (e) {
            return a ? i.createElement(e) : {}
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/enum-bug-keys.js": function (e, t) {
        e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/export.js": function (e, t, n) {
        var f = n("./src/main/webapp/universal/node_modules/core-js/internals/global.js");
        var p = n("./src/main/webapp/universal/node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
        var d = n("./src/main/webapp/universal/node_modules/core-js/internals/create-non-enumerable-property.js");
        var v = n("./src/main/webapp/universal/node_modules/core-js/internals/redefine.js");
        var m = n("./src/main/webapp/universal/node_modules/core-js/internals/set-global.js");
        var h = n("./src/main/webapp/universal/node_modules/core-js/internals/copy-constructor-properties.js");
        var y = n("./src/main/webapp/universal/node_modules/core-js/internals/is-forced.js");
        e.exports = function (e, t) {
            var n = e.target;
            var r = e.global;
            var o = e.stat;
            var i, a, s, u, c, l;
            a = r ? f : o ? f[n] || m(n, {}) : (f[n] || {}).prototype;
            if (a)
                for (s in t) {
                    c = t[s];
                    if (e.noTargetGet) {
                        l = p(a, s);
                        u = l && l.value
                    } else u = a[s];
                    i = y(r ? s : n + (o ? "." : "#") + s, e.forced);
                    if (!i && void 0 !== u) {
                        if (typeof c === typeof u) continue;
                        h(c, u)
                    } (e.sham || u && u.sham) && d(c, "sham", true);
                    v(a, s, c, e)
                }
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/fails.js": function (e, t) {
        e.exports = function (e) {
            try {
                return !!e()
            } catch (e) {
                return true
            }
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/function-to-string.js": function (e, t, n) {
        var r = n("./src/main/webapp/universal/node_modules/core-js/internals/shared.js");
        e.exports = r("native-function-to-string", Function.toString)
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/get-built-in.js": function (e, t, n) {
        var r = n("./src/main/webapp/universal/node_modules/core-js/internals/path.js");
        var o = n("./src/main/webapp/universal/node_modules/core-js/internals/global.js");
        var i = function (e) {
            return "function" == typeof e ? e : void 0
        };
        e.exports = function (e, t) {
            return arguments.length < 2 ? i(r[e]) || i(o[e]) : r[e] && r[e][t] || o[e] && o[e][t]
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/get-iterator-method.js": function (e, t, n) {
        var r = n("./src/main/webapp/universal/node_modules/core-js/internals/classof.js");
        var o = n("./src/main/webapp/universal/node_modules/core-js/internals/iterators.js");
        var i = n("./src/main/webapp/universal/node_modules/core-js/internals/well-known-symbol.js");
        var a = i("iterator");
        e.exports = function (e) {
            if (void 0 != e) return e[a] || e["@@iterator"] || o[r(e)]
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/global.js": function (n, e, t) {
        (function (e) {
            var t = function (e) {
                return e && e.Math == Math && e
            };
            n.exports = t("object" == typeof globalThis && globalThis) || t("object" == typeof window && window) || t("object" == typeof self && self) || t("object" == typeof e && e) || Function("return this")()
        }).call(this, t("./node_modules/webpack/buildin/global.js"))
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/has.js": function (e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function (e, t) {
            return n.call(e, t)
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/hidden-keys.js": function (e, t) {
        e.exports = {}
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/host-report-errors.js": function (e, t, n) {
        var r = n("./src/main/webapp/universal/node_modules/core-js/internals/global.js");
        e.exports = function (e, t) {
            var n = r.console;
            n && n.error && (1 === arguments.length ? n.error(e) : n.error(e, t))
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/html.js": function (e, t, n) {
        var r = n("./src/main/webapp/universal/node_modules/core-js/internals/get-built-in.js");
        e.exports = r("document", "documentElement")
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/ie8-dom-define.js": function (e, t, n) {
        var r = n("./src/main/webapp/universal/node_modules/core-js/internals/descriptors.js");
        var o = n("./src/main/webapp/universal/node_modules/core-js/internals/fails.js");
        var i = n("./src/main/webapp/universal/node_modules/core-js/internals/document-create-element.js");
        e.exports = !r && !o(function () {
            return 7 != Object.defineProperty(i("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/indexed-object.js": function (e, t, n) {
        var r = n("./src/main/webapp/universal/node_modules/core-js/internals/fails.js");
        var o = n("./src/main/webapp/universal/node_modules/core-js/internals/classof-raw.js");
        var i = "".split;
        e.exports = r(function () {
            return !Object("z").propertyIsEnumerable(0)
        }) ? function (e) {
            return "String" == o(e) ? i.call(e, "") : Object(e)
        } : Object
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/internal-state.js": function (e, t, n) {
        var r = n("./src/main/webapp/universal/node_modules/core-js/internals/native-weak-map.js");
        var o = n("./src/main/webapp/universal/node_modules/core-js/internals/global.js");
        var i = n("./src/main/webapp/universal/node_modules/core-js/internals/is-object.js");
        var a = n("./src/main/webapp/universal/node_modules/core-js/internals/create-non-enumerable-property.js");
        var s = n("./src/main/webapp/universal/node_modules/core-js/internals/has.js");
        var u = n("./src/main/webapp/universal/node_modules/core-js/internals/shared-key.js");
        var c = n("./src/main/webapp/universal/node_modules/core-js/internals/hidden-keys.js");
        var l = o.WeakMap;
        var f, p, d;
        var v = function (e) {
            return d(e) ? p(e) : f(e, {})
        };
        var m = function (n) {
            return function (e) {
                var t;
                if (!i(e) || (t = p(e)).type !== n) throw TypeError("Incompatible receiver, " + n + " required");
                return t
            }
        };
        if (r) {
            var h = new l;
            var y = h.get;
            var b = h.has;
            var g = h.set;
            f = function (e, t) {
                g.call(h, e, t);
                return t
            };
            p = function (e) {
                return y.call(h, e) || {}
            };
            d = function (e) {
                return b.call(h, e)
            }
        } else {
            var _ = u("state");
            c[_] = true;
            f = function (e, t) {
                a(e, _, t);
                return t
            };
            p = function (e) {
                return s(e, _) ? e[_] : {}
            };
            d = function (e) {
                return s(e, _)
            }
        }
        e.exports = {
            set: f,
            get: p,
            has: d,
            enforce: v,
            getterFor: m
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/is-array-iterator-method.js": function (e, t, n) {
        var r = n("./src/main/webapp/universal/node_modules/core-js/internals/well-known-symbol.js");
        var o = n("./src/main/webapp/universal/node_modules/core-js/internals/iterators.js");
        var i = r("iterator");
        var a = Array.prototype;
        e.exports = function (e) {
            return void 0 !== e && (o.Array === e || a[i] === e)
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/is-forced.js": function (e, t, n) {
        var r = n("./src/main/webapp/universal/node_modules/core-js/internals/fails.js");
        var o = /#|\.prototype\./;
        var i = function (e, t) {
            var n = s[a(e)];
            return n == c || n != u && ("function" == typeof t ? r(t) : !!t)
        };
        var a = i.normalize = function (e) {
            return String(e).replace(o, ".").toLowerCase()
        };
        var s = i.data = {};
        var u = i.NATIVE = "N";
        var c = i.POLYFILL = "P";
        e.exports = i
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/is-object.js": function (e, t) {
        e.exports = function (e) {
            return "object" === typeof e ? null !== e : "function" === typeof e
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/is-pure.js": function (e, t) {
        e.exports = false
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/iterate.js": function (e, t, n) {
        var d = n("./src/main/webapp/universal/node_modules/core-js/internals/an-object.js");
        var v = n("./src/main/webapp/universal/node_modules/core-js/internals/is-array-iterator-method.js");
        var m = n("./src/main/webapp/universal/node_modules/core-js/internals/to-length.js");
        var h = n("./src/main/webapp/universal/node_modules/core-js/internals/bind-context.js");
        var y = n("./src/main/webapp/universal/node_modules/core-js/internals/get-iterator-method.js");
        var b = n("./src/main/webapp/universal/node_modules/core-js/internals/call-with-safe-iteration-closing.js");
        var g = function (e, t) {
            this.stopped = e;
            this.result = t
        };
        var r = e.exports = function (e, t, n, r, o) {
            var i = h(t, n, r ? 2 : 1);
            var a, s, u, c, l, f, p;
            if (o) a = e;
            else {
                s = y(e);
                if ("function" != typeof s) throw TypeError("Target is not iterable");
                if (v(s)) {
                    for (u = 0, c = m(e.length); c > u; u++) {
                        l = r ? i(d(p = e[u])[0], p[1]) : i(e[u]);
                        if (l && l instanceof g) return l
                    }
                    return new g(false)
                }
                a = s.call(e)
            }
            f = a.next;
            while (!(p = f.call(a)).done) {
                l = b(a, i, p.value, r);
                if ("object" == typeof l && l && l instanceof g) return l
            }
            return new g(false)
        };
        r.stop = function (e) {
            return new g(true, e)
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/iterators.js": function (e, t) {
        e.exports = {}
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/microtask.js": function (e, t, n) {
        var r = n("./src/main/webapp/universal/node_modules/core-js/internals/global.js");
        var o = n("./src/main/webapp/universal/node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
        var i = n("./src/main/webapp/universal/node_modules/core-js/internals/classof-raw.js");
        var a = n("./src/main/webapp/universal/node_modules/core-js/internals/task.js").set;
        var s = n("./src/main/webapp/universal/node_modules/core-js/internals/user-agent.js");
        var u = r.MutationObserver || r.WebKitMutationObserver;
        var c = r.process;
        var l = r.Promise;
        var f = "process" == i(c);
        var p = o(r, "queueMicrotask");
        var d = p && p.value;
        var v, m, h, y, b, g, _, w;
        if (!d) {
            v = function () {
                var e, t;
                f && (e = c.domain) && e.exit();
                while (m) {
                    t = m.fn;
                    m = m.next;
                    try {
                        t()
                    } catch (e) {
                        m ? y() : h = void 0;
                        throw e
                    }
                }
                h = void 0;
                e && e.enter()
            };
            if (f) y = function () {
                c.nextTick(v)
            };
            else if (u && !/(iphone|ipod|ipad).*applewebkit/i.test(s)) {
                b = true;
                g = document.createTextNode("");
                new u(v).observe(g, {
                    characterData: true
                });
                y = function () {
                    g.data = b = !b
                }
            } else if (l && l.resolve) {
                _ = l.resolve(void 0);
                w = _.then;
                y = function () {
                    w.call(_, v)
                }
            } else y = function () {
                a.call(r, v)
            }
        }
        e.exports = d || function (e) {
            var t = {
                fn: e,
                next: void 0
            };
            h && (h.next = t);
            if (!m) {
                m = t;
                y()
            }
            h = t
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/native-promise-constructor.js": function (e, t, n) {
        var r = n("./src/main/webapp/universal/node_modules/core-js/internals/global.js");
        e.exports = r.Promise
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/native-symbol.js": function (e, t, n) {
        var r = n("./src/main/webapp/universal/node_modules/core-js/internals/fails.js");
        e.exports = !!Object.getOwnPropertySymbols && !r(function () {
            return !String(Symbol())
        })
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/native-weak-map.js": function (e, t, n) {
        var r = n("./src/main/webapp/universal/node_modules/core-js/internals/global.js");
        var o = n("./src/main/webapp/universal/node_modules/core-js/internals/function-to-string.js");
        var i = r.WeakMap;
        e.exports = "function" === typeof i && /native code/.test(o.call(i))
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/new-promise-capability.js": function (e, t, n) {
        "use strict";
        var o = n("./src/main/webapp/universal/node_modules/core-js/internals/a-function.js");
        var r = function (e) {
            var n, r;
            this.promise = new e(function (e, t) {
                if (void 0 !== n || void 0 !== r) throw TypeError("Bad Promise constructor");
                n = e;
                r = t
            });
            this.resolve = o(n);
            this.reject = o(r)
        };
        e.exports.f = function (e) {
            return new r(e)
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/object-define-property.js": function (e, t, n) {
        var r = n("./src/main/webapp/universal/node_modules/core-js/internals/descriptors.js");
        var o = n("./src/main/webapp/universal/node_modules/core-js/internals/ie8-dom-define.js");
        var i = n("./src/main/webapp/universal/node_modules/core-js/internals/an-object.js");
        var a = n("./src/main/webapp/universal/node_modules/core-js/internals/to-primitive.js");
        var s = Object.defineProperty;
        t.f = r ? s : function e(t, n, r) {
            i(t);
            n = a(n, true);
            i(r);
            if (o) try {
                return s(t, n, r)
            } catch (e) { }
            if ("get" in r || "set" in r) throw TypeError("Accessors not supported");
            "value" in r && (t[n] = r.value);
            return t
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/object-get-own-property-descriptor.js": function (e, t, n) {
        var r = n("./src/main/webapp/universal/node_modules/core-js/internals/descriptors.js");
        var o = n("./src/main/webapp/universal/node_modules/core-js/internals/object-property-is-enumerable.js");
        var i = n("./src/main/webapp/universal/node_modules/core-js/internals/create-property-descriptor.js");
        var a = n("./src/main/webapp/universal/node_modules/core-js/internals/to-indexed-object.js");
        var s = n("./src/main/webapp/universal/node_modules/core-js/internals/to-primitive.js");
        var u = n("./src/main/webapp/universal/node_modules/core-js/internals/has.js");
        var c = n("./src/main/webapp/universal/node_modules/core-js/internals/ie8-dom-define.js");
        var l = Object.getOwnPropertyDescriptor;
        t.f = r ? l : function e(t, n) {
            t = a(t);
            n = s(n, true);
            if (c) try {
                return l(t, n)
            } catch (e) { }
            if (u(t, n)) return i(!o.f.call(t, n), t[n])
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/object-get-own-property-names.js": function (e, t, n) {
        var r = n("./src/main/webapp/universal/node_modules/core-js/internals/object-keys-internal.js");
        var o = n("./src/main/webapp/universal/node_modules/core-js/internals/enum-bug-keys.js");
        var i = o.concat("length", "prototype");
        t.f = Object.getOwnPropertyNames || function e(t) {
            return r(t, i)
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/object-get-own-property-symbols.js": function (e, t) {
        t.f = Object.getOwnPropertySymbols
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/object-keys-internal.js": function (e, t, n) {
        var a = n("./src/main/webapp/universal/node_modules/core-js/internals/has.js");
        var s = n("./src/main/webapp/universal/node_modules/core-js/internals/to-indexed-object.js");
        var u = n("./src/main/webapp/universal/node_modules/core-js/internals/array-includes.js").indexOf;
        var c = n("./src/main/webapp/universal/node_modules/core-js/internals/hidden-keys.js");
        e.exports = function (e, t) {
            var n = s(e);
            var r = 0;
            var o = [];
            var i;
            for (i in n) !a(c, i) && a(n, i) && o.push(i);
            while (t.length > r) a(n, i = t[r++]) && (~u(o, i) || o.push(i));
            return o
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/object-property-is-enumerable.js": function (e, t, n) {
        "use strict";
        var r = {}.propertyIsEnumerable;
        var o = Object.getOwnPropertyDescriptor;
        var i = o && !r.call({
            1: 2
        }, 1);
        t.f = i ? function e(t) {
            var n = o(this, t);
            return !!n && n.enumerable
        } : r
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/own-keys.js": function (e, t, n) {
        var r = n("./src/main/webapp/universal/node_modules/core-js/internals/get-built-in.js");
        var o = n("./src/main/webapp/universal/node_modules/core-js/internals/object-get-own-property-names.js");
        var i = n("./src/main/webapp/universal/node_modules/core-js/internals/object-get-own-property-symbols.js");
        var a = n("./src/main/webapp/universal/node_modules/core-js/internals/an-object.js");
        e.exports = r("Reflect", "ownKeys") || function e(t) {
            var n = o.f(a(t));
            var r = i.f;
            return r ? n.concat(r(t)) : n
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/path.js": function (e, t, n) {
        e.exports = n("./src/main/webapp/universal/node_modules/core-js/internals/global.js")
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/perform.js": function (e, t) {
        e.exports = function (e) {
            try {
                return {
                    error: false,
                    value: e()
                }
            } catch (e) {
                return {
                    error: true,
                    value: e
                }
            }
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/promise-resolve.js": function (e, t, n) {
        var o = n("./src/main/webapp/universal/node_modules/core-js/internals/an-object.js");
        var i = n("./src/main/webapp/universal/node_modules/core-js/internals/is-object.js");
        var a = n("./src/main/webapp/universal/node_modules/core-js/internals/new-promise-capability.js");
        e.exports = function (e, t) {
            o(e);
            if (i(t) && t.constructor === e) return t;
            var n = a.f(e);
            var r = n.resolve;
            r(t);
            return n.promise
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/redefine-all.js": function (e, t, n) {
        var o = n("./src/main/webapp/universal/node_modules/core-js/internals/redefine.js");
        e.exports = function (e, t, n) {
            for (var r in t) o(e, r, t[r], n);
            return e
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/redefine.js": function (e, t, n) {
        var s = n("./src/main/webapp/universal/node_modules/core-js/internals/global.js");
        var r = n("./src/main/webapp/universal/node_modules/core-js/internals/shared.js");
        var u = n("./src/main/webapp/universal/node_modules/core-js/internals/create-non-enumerable-property.js");
        var c = n("./src/main/webapp/universal/node_modules/core-js/internals/has.js");
        var l = n("./src/main/webapp/universal/node_modules/core-js/internals/set-global.js");
        var o = n("./src/main/webapp/universal/node_modules/core-js/internals/function-to-string.js");
        var i = n("./src/main/webapp/universal/node_modules/core-js/internals/internal-state.js");
        var a = i.get;
        var f = i.enforce;
        var p = String(o).split("toString");
        r("inspectSource", function (e) {
            return o.call(e)
        });
        (e.exports = function (e, t, n, r) {
            var o = !!r && !!r.unsafe;
            var i = !!r && !!r.enumerable;
            var a = !!r && !!r.noTargetGet;
            if ("function" == typeof n) {
                "string" != typeof t || c(n, "name") || u(n, "name", t);
                f(n).source = p.join("string" == typeof t ? t : "")
            }
            if (e === s) {
                i ? e[t] = n : l(t, n);
                return
            }
            o ? !a && e[t] && (i = true) : delete e[t];
            i ? e[t] = n : u(e, t, n)
        })(Function.prototype, "toString", function e() {
            return "function" == typeof this && a(this).source || o.call(this)
        })
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/require-object-coercible.js": function (e, t) {
        e.exports = function (e) {
            if (void 0 == e) throw TypeError("Can't call method on " + e);
            return e
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/set-global.js": function (e, t, n) {
        var r = n("./src/main/webapp/universal/node_modules/core-js/internals/global.js");
        var o = n("./src/main/webapp/universal/node_modules/core-js/internals/create-non-enumerable-property.js");
        e.exports = function (t, n) {
            try {
                o(r, t, n)
            } catch (e) {
                r[t] = n
            }
            return n
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/set-species.js": function (e, t, n) {
        "use strict";
        var r = n("./src/main/webapp/universal/node_modules/core-js/internals/get-built-in.js");
        var o = n("./src/main/webapp/universal/node_modules/core-js/internals/object-define-property.js");
        var i = n("./src/main/webapp/universal/node_modules/core-js/internals/well-known-symbol.js");
        var a = n("./src/main/webapp/universal/node_modules/core-js/internals/descriptors.js");
        var s = i("species");
        e.exports = function (e) {
            var t = r(e);
            var n = o.f;
            a && t && !t[s] && n(t, s, {
                configurable: true,
                get: function () {
                    return this
                }
            })
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/set-to-string-tag.js": function (e, t, n) {
        var r = n("./src/main/webapp/universal/node_modules/core-js/internals/object-define-property.js").f;
        var o = n("./src/main/webapp/universal/node_modules/core-js/internals/has.js");
        var i = n("./src/main/webapp/universal/node_modules/core-js/internals/well-known-symbol.js");
        var a = i("toStringTag");
        e.exports = function (e, t, n) {
            e && !o(e = n ? e : e.prototype, a) && r(e, a, {
                configurable: true,
                value: t
            })
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/shared-key.js": function (e, t, n) {
        var r = n("./src/main/webapp/universal/node_modules/core-js/internals/shared.js");
        var o = n("./src/main/webapp/universal/node_modules/core-js/internals/uid.js");
        var i = r("keys");
        e.exports = function (e) {
            return i[e] || (i[e] = o(e))
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/shared-store.js": function (e, t, n) {
        var r = n("./src/main/webapp/universal/node_modules/core-js/internals/global.js");
        var o = n("./src/main/webapp/universal/node_modules/core-js/internals/set-global.js");
        var i = "__core-js_shared__";
        var a = r[i] || o(i, {});
        e.exports = a
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/shared.js": function (e, t, n) {
        var r = n("./src/main/webapp/universal/node_modules/core-js/internals/is-pure.js");
        var o = n("./src/main/webapp/universal/node_modules/core-js/internals/shared-store.js");
        (e.exports = function (e, t) {
            return o[e] || (o[e] = void 0 !== t ? t : {})
        })("versions", []).push({
            version: "3.3.6",
            mode: r ? "pure" : "global",
            copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
        })
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/species-constructor.js": function (e, t, n) {
        var o = n("./src/main/webapp/universal/node_modules/core-js/internals/an-object.js");
        var i = n("./src/main/webapp/universal/node_modules/core-js/internals/a-function.js");
        var r = n("./src/main/webapp/universal/node_modules/core-js/internals/well-known-symbol.js");
        var a = r("species");
        e.exports = function (e, t) {
            var n = o(e).constructor;
            var r;
            return void 0 === n || void 0 == (r = o(n)[a]) ? t : i(r)
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/task.js": function (e, t, n) {
        var r = n("./src/main/webapp/universal/node_modules/core-js/internals/global.js");
        var o = n("./src/main/webapp/universal/node_modules/core-js/internals/fails.js");
        var i = n("./src/main/webapp/universal/node_modules/core-js/internals/classof-raw.js");
        var a = n("./src/main/webapp/universal/node_modules/core-js/internals/bind-context.js");
        var s = n("./src/main/webapp/universal/node_modules/core-js/internals/html.js");
        var u = n("./src/main/webapp/universal/node_modules/core-js/internals/document-create-element.js");
        var c = n("./src/main/webapp/universal/node_modules/core-js/internals/user-agent.js");
        var l = r.location;
        var f = r.setImmediate;
        var p = r.clearImmediate;
        var d = r.process;
        var v = r.MessageChannel;
        var m = r.Dispatch;
        var h = 0;
        var y = {};
        var b = "onreadystatechange";
        var g, _, w;
        var j = function (e) {
            if (y.hasOwnProperty(e)) {
                var t = y[e];
                delete y[e];
                t()
            }
        };
        var E = function (e) {
            return function () {
                j(e)
            }
        };
        var S = function (e) {
            j(e.data)
        };
        var O = function (e) {
            r.postMessage(e + "", l.protocol + "//" + l.host)
        };
        if (!f || !p) {
            f = function e(t) {
                var n = [];
                var r = 1;
                while (arguments.length > r) n.push(arguments[r++]);
                y[++h] = function () {
                    ("function" == typeof t ? t : Function(t)).apply(void 0, n)
                };
                g(h);
                return h
            };
            p = function e(t) {
                delete y[t]
            };
            if ("process" == i(d)) g = function (e) {
                d.nextTick(E(e))
            };
            else if (m && m.now) g = function (e) {
                m.now(E(e))
            };
            else if (v && !/(iphone|ipod|ipad).*applewebkit/i.test(c)) {
                _ = new v;
                w = _.port2;
                _.port1.onmessage = S;
                g = a(w.postMessage, w, 1)
            } else if (!r.addEventListener || "function" != typeof postMessage || r.importScripts || o(O)) g = b in u("script") ? function (e) {
                s.appendChild(u("script"))[b] = function () {
                    s.removeChild(this);
                    j(e)
                }
            } : function (e) {
                setTimeout(E(e), 0)
            };
            else {
                g = O;
                r.addEventListener("message", S, false)
            }
        }
        e.exports = {
            set: f,
            clear: p
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/to-absolute-index.js": function (e, t, n) {
        var r = n("./src/main/webapp/universal/node_modules/core-js/internals/to-integer.js");
        var o = Math.max;
        var i = Math.min;
        e.exports = function (e, t) {
            var n = r(e);
            return n < 0 ? o(n + t, 0) : i(n, t)
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/to-indexed-object.js": function (e, t, n) {
        var r = n("./src/main/webapp/universal/node_modules/core-js/internals/indexed-object.js");
        var o = n("./src/main/webapp/universal/node_modules/core-js/internals/require-object-coercible.js");
        e.exports = function (e) {
            return r(o(e))
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/to-integer.js": function (e, t) {
        var n = Math.ceil;
        var r = Math.floor;
        e.exports = function (e) {
            return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/to-length.js": function (e, t, n) {
        var r = n("./src/main/webapp/universal/node_modules/core-js/internals/to-integer.js");
        var o = Math.min;
        e.exports = function (e) {
            return e > 0 ? o(r(e), 9007199254740991) : 0
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/to-primitive.js": function (e, t, n) {
        var o = n("./src/main/webapp/universal/node_modules/core-js/internals/is-object.js");
        e.exports = function (e, t) {
            if (!o(e)) return e;
            var n, r;
            if (t && "function" == typeof (n = e.toString) && !o(r = n.call(e))) return r;
            if ("function" == typeof (n = e.valueOf) && !o(r = n.call(e))) return r;
            if (!t && "function" == typeof (n = e.toString) && !o(r = n.call(e))) return r;
            throw TypeError("Can't convert object to primitive value")
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/uid.js": function (e, t) {
        var n = 0;
        var r = Math.random();
        e.exports = function (e) {
            return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++n + r).toString(36)
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/user-agent.js": function (e, t, n) {
        var r = n("./src/main/webapp/universal/node_modules/core-js/internals/get-built-in.js");
        e.exports = r("navigator", "userAgent") || ""
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/v8-version.js": function (e, t, n) {
        var r = n("./src/main/webapp/universal/node_modules/core-js/internals/global.js");
        var o = n("./src/main/webapp/universal/node_modules/core-js/internals/user-agent.js");
        var i = r.process;
        var a = i && i.versions;
        var s = a && a.v8;
        var u, c;
        if (s) {
            u = s.split(".");
            c = u[0] + u[1]
        } else if (o) {
            u = o.match(/Edge\/(\d+)/);
            if (!u || u[1] >= 74) {
                u = o.match(/Chrome\/(\d+)/);
                u && (c = u[1])
            }
        }
        e.exports = c && +c
    },
    "./src/main/webapp/universal/node_modules/core-js/internals/well-known-symbol.js": function (e, t, n) {
        var r = n("./src/main/webapp/universal/node_modules/core-js/internals/global.js");
        var o = n("./src/main/webapp/universal/node_modules/core-js/internals/shared.js");
        var i = n("./src/main/webapp/universal/node_modules/core-js/internals/uid.js");
        var a = n("./src/main/webapp/universal/node_modules/core-js/internals/native-symbol.js");
        var s = r.Symbol;
        var u = o("wks");
        e.exports = function (e) {
            return u[e] || (u[e] = a && s[e] || (a ? s : i)("Symbol." + e))
        }
    },
    "./src/main/webapp/universal/node_modules/core-js/modules/es.promise.js": function (e, t, n) {
        "use strict";
        var r = n("./src/main/webapp/universal/node_modules/core-js/internals/export.js");
        var o = n("./src/main/webapp/universal/node_modules/core-js/internals/is-pure.js");
        var i = n("./src/main/webapp/universal/node_modules/core-js/internals/global.js");
        var a = n("./src/main/webapp/universal/node_modules/core-js/internals/get-built-in.js");
        var s = n("./src/main/webapp/universal/node_modules/core-js/internals/native-promise-constructor.js");
        var u = n("./src/main/webapp/universal/node_modules/core-js/internals/redefine.js");
        var c = n("./src/main/webapp/universal/node_modules/core-js/internals/redefine-all.js");
        var l = n("./src/main/webapp/universal/node_modules/core-js/internals/set-to-string-tag.js");
        var f = n("./src/main/webapp/universal/node_modules/core-js/internals/set-species.js");
        var p = n("./src/main/webapp/universal/node_modules/core-js/internals/is-object.js");
        var d = n("./src/main/webapp/universal/node_modules/core-js/internals/a-function.js");
        var v = n("./src/main/webapp/universal/node_modules/core-js/internals/an-instance.js");
        var m = n("./src/main/webapp/universal/node_modules/core-js/internals/classof-raw.js");
        var h = n("./src/main/webapp/universal/node_modules/core-js/internals/iterate.js");
        var y = n("./src/main/webapp/universal/node_modules/core-js/internals/check-correctness-of-iteration.js");
        var b = n("./src/main/webapp/universal/node_modules/core-js/internals/species-constructor.js");
        var g = n("./src/main/webapp/universal/node_modules/core-js/internals/task.js").set;
        var _ = n("./src/main/webapp/universal/node_modules/core-js/internals/microtask.js");
        var w = n("./src/main/webapp/universal/node_modules/core-js/internals/promise-resolve.js");
        var j = n("./src/main/webapp/universal/node_modules/core-js/internals/host-report-errors.js");
        var E = n("./src/main/webapp/universal/node_modules/core-js/internals/new-promise-capability.js");
        var S = n("./src/main/webapp/universal/node_modules/core-js/internals/perform.js");
        var O = n("./src/main/webapp/universal/node_modules/core-js/internals/internal-state.js");
        var T = n("./src/main/webapp/universal/node_modules/core-js/internals/is-forced.js");
        var x = n("./src/main/webapp/universal/node_modules/core-js/internals/well-known-symbol.js");
        var k = n("./src/main/webapp/universal/node_modules/core-js/internals/v8-version.js");
        var P = x("species");
        var I = "Promise";
        var C = O.get;
        var R = O.set;
        var A = O.getterFor(I);
        var L = s;
        var D = i.TypeError;
        var N = i.document;
        var M = i.process;
        var B = a("fetch");
        var U = E.f;
        var F = U;
        var q = "process" == m(M);
        var H = !!(N && N.createEvent && i.dispatchEvent);
        var z = "unhandledrejection";
        var Y = "rejectionhandled";
        var W = 0;
        var V = 1;
        var G = 2;
        var X = 1;
        var K = 2;
        var J, $, Z, Q;
        var ee = T(I, function () {
            if (66 === k) return true;
            if (!q && "function" != typeof PromiseRejectionEvent) return true;
            if (o && !L.prototype["finally"]) return true;
            if (k >= 51 && /native code/.test(L)) return false;
            var e = L.resolve(1);
            var t = function (e) {
                e(function () { }, function () { })
            };
            var n = e.constructor = {};
            n[P] = t;
            return !(e.then(function () { }) instanceof t)
        });
        var te = ee || !y(function (e) {
            L.all(e)["catch"](function () { })
        });
        var ne = function (e) {
            var t;
            return !(!p(e) || "function" != typeof (t = e.then)) && t
        };
        var re = function (f, p, d) {
            if (p.notified) return;
            p.notified = true;
            var v = p.reactions;
            _(function () {
                var e = p.value;
                var t = p.state == V;
                var n = 0;
                while (v.length > n) {
                    var r = v[n++];
                    var o = t ? r.ok : r.fail;
                    var i = r.resolve;
                    var a = r.reject;
                    var s = r.domain;
                    var u, c, l;
                    try {
                        if (o) {
                            if (!t) {
                                p.rejection === K && se(f, p);
                                p.rejection = X
                            }
                            if (true === o) u = e;
                            else {
                                s && s.enter();
                                u = o(e);
                                if (s) {
                                    s.exit();
                                    l = true
                                }
                            }
                            u === r.promise ? a(D("Promise-chain cycle")) : (c = ne(u)) ? c.call(u, i, a) : i(u)
                        } else a(e)
                    } catch (e) {
                        s && !l && s.exit();
                        a(e)
                    }
                }
                p.reactions = [];
                p.notified = false;
                d && !p.rejection && ie(f, p)
            })
        };
        var oe = function (e, t, n) {
            var r, o;
            if (H) {
                r = N.createEvent("Event");
                r.promise = t;
                r.reason = n;
                r.initEvent(e, false, true);
                i.dispatchEvent(r)
            } else r = {
                promise: t,
                reason: n
            };
            (o = i["on" + e]) ? o(r) : e === z && j("Unhandled promise rejection", n)
        };
        var ie = function (r, o) {
            g.call(i, function () {
                var e = o.value;
                var t = ae(o);
                var n;
                if (t) {
                    n = S(function () {
                        q ? M.emit("unhandledRejection", e, r) : oe(z, r, e)
                    });
                    o.rejection = q || ae(o) ? K : X;
                    if (n.error) throw n.value
                }
            })
        };
        var ae = function (e) {
            return e.rejection !== X && !e.parent
        };
        var se = function (e, t) {
            g.call(i, function () {
                q ? M.emit("rejectionHandled", e) : oe(Y, e, t.value)
            })
        };
        var ue = function (t, n, r, o) {
            return function (e) {
                t(n, r, e, o)
            }
        };
        var ce = function (e, t, n, r) {
            if (t.done) return;
            t.done = true;
            r && (t = r);
            t.value = n;
            t.state = G;
            re(e, t, true)
        };
        var le = function (n, r, e, t) {
            if (r.done) return;
            r.done = true;
            t && (r = t);
            try {
                if (n === e) throw D("Promise can't be resolved itself");
                var o = ne(e);
                if (o) _(function () {
                    var t = {
                        done: false
                    };
                    try {
                        o.call(e, ue(le, n, t, r), ue(ce, n, t, r))
                    } catch (e) {
                        ce(n, t, e, r)
                    }
                });
                else {
                    r.value = e;
                    r.state = V;
                    re(n, r, false)
                }
            } catch (e) {
                ce(n, {
                    done: false
                }, e, r)
            }
        };
        if (ee) {
            L = function e(t) {
                v(this, L, I);
                d(t);
                J.call(this);
                var n = C(this);
                try {
                    t(ue(le, this, n), ue(ce, this, n))
                } catch (e) {
                    ce(this, n, e)
                }
            };
            J = function e(t) {
                R(this, {
                    type: I,
                    done: false,
                    notified: false,
                    parent: false,
                    reactions: [],
                    rejection: false,
                    state: W,
                    value: void 0
                })
            };
            J.prototype = c(L.prototype, {
                then: function e(t, n) {
                    var r = A(this);
                    var o = U(b(this, L));
                    o.ok = "function" != typeof t || t;
                    o.fail = "function" == typeof n && n;
                    o.domain = q ? M.domain : void 0;
                    r.parent = true;
                    r.reactions.push(o);
                    r.state != W && re(this, r, false);
                    return o.promise
                },
                catch: function (e) {
                    return this.then(void 0, e)
                }
            });
            $ = function () {
                var e = new J;
                var t = C(e);
                this.promise = e;
                this.resolve = ue(le, e, t);
                this.reject = ue(ce, e, t)
            };
            E.f = U = function (e) {
                return e === L || e === Z ? new $(e) : F(e)
            };
            if (!o && "function" == typeof s) {
                Q = s.prototype.then;
                u(s.prototype, "then", function e(t, n) {
                    var r = this;
                    return new L(function (e, t) {
                        Q.call(r, e, t)
                    }).then(t, n)
                }, {
                    unsafe: true
                });
                "function" == typeof B && r({
                    global: true,
                    enumerable: true,
                    forced: true
                }, {
                    fetch: function e(t) {
                        return w(L, B.apply(i, arguments))
                    }
                })
            }
        }
        r({
            global: true,
            wrap: true,
            forced: ee
        }, {
            Promise: L
        });
        l(L, I, false, true);
        f(I);
        Z = a(I);
        r({
            target: I,
            stat: true,
            forced: ee
        }, {
            reject: function e(t) {
                var n = U(this);
                n.reject.call(void 0, t);
                return n.promise
            }
        });
        r({
            target: I,
            stat: true,
            forced: o || ee
        }, {
            resolve: function e(t) {
                return w(o && this === Z ? L : this, t)
            }
        });
        r({
            target: I,
            stat: true,
            forced: te
        }, {
            all: function e(t) {
                var s = this;
                var n = U(s);
                var u = n.resolve;
                var c = n.reject;
                var r = S(function () {
                    var r = d(s.resolve);
                    var o = [];
                    var i = 0;
                    var a = 1;
                    h(t, function (e) {
                        var t = i++;
                        var n = false;
                        o.push(void 0);
                        a++;
                        r.call(s, e).then(function (e) {
                            if (n) return;
                            n = true;
                            o[t] = e;
                            --a || u(o)
                        }, c)
                    });
                    --a || u(o)
                });
                r.error && c(r.value);
                return n.promise
            },
            race: function e(n) {
                var r = this;
                var o = U(r);
                var i = o.reject;
                var t = S(function () {
                    var t = d(r.resolve);
                    h(n, function (e) {
                        t.call(r, e).then(o.resolve, i)
                    })
                });
                t.error && i(t.value);
                return o.promise
            }
        })
    },
    "./src/main/webapp/universal/node_modules/resourcetiming-compression/src/resourcetiming-compression.js": function (n, r, e) {
        var o, i;
        (function (v) {
            "use strict";
            var e;
            var t;
            if ("undefined" !== typeof v) {
                e = v;
                t = e.ResourceTimingCompression
            }
            var y = {};
            y.HOSTNAMES_REVERSED = true;
            y.INITIATOR_TYPES = {
                other: 0,
                img: 1,
                link: 2,
                script: 3,
                css: 4,
                xmlhttprequest: 5,
                html: 6,
                image: 7,
                beacon: 8,
                fetch: 9,
                iframe: "a",
                subdocument: "a",
                body: "b",
                input: "c",
                frame: "a",
                object: "d",
                video: "e",
                audio: "f",
                source: "g",
                track: "h",
                embed: "i",
                eventsource: "j",
                navigation: 6
            };
            y.DEFAULT_XSS_BREAK_WORDS = [/(h)(ref)/gi, /(s)(rc)/gi, /(a)(ction)/gi];
            y.XSS_BREAK_DELIM = "\n";
            y.DEFAULT_URL_LIMIT = 500;
            y.SPECIAL_DATA_PREFIX = "*";
            y.SPECIAL_DATA_DIMENSION_TYPE = "0";
            y.SPECIAL_DATA_SIZE_TYPE = "1";
            y.SPECIAL_DATA_SCRIPT_TYPE = "2";
            y.SPECIAL_DATA_SCRIPT_ASYNC_ATTR = 1;
            y.SPECIAL_DATA_SCRIPT_DEFER_ATTR = 2;
            y.SPECIAL_DATA_SCRIPT_LOCAT_ATTR = 4;
            y.SPECIAL_DATA_SERVERTIMING_TYPE = "3";
            y.SPECIAL_DATA_LINK_ATTR_TYPE = "4";
            y.SPECIAL_DATA_NAMESPACED_TYPE = "5";
            y.SPECIAL_DATA_SERVICE_WORKER_TYPE = "6";
            y.REL_TYPES = {
                prefetch: 1,
                preload: 2,
                prerender: 3,
                stylesheet: 4
            };
            y.HOSTNAME_REGEX = /^(https?:\/\/)([^\/]+)(.*)/;
            y.trimUrls = [];
            y.xssBreakWords = y.DEFAULT_XSS_BREAK_WORDS;
            y.noConflict = function () {
                e.ResourceTimingCompression = t;
                return y
            };
            y.roundUpTiming = function (e) {
                "number" !== typeof e && (e = 0);
                return Math.ceil(e || 0)
            };
            y.convertToTrie = function (e) {
                var t = {},
                    n, r, o, i, a, s, u, c;
                for (n in e) {
                    if (!e.hasOwnProperty(n)) continue;
                    r = n;
                    for (o = 0; o < this.xssBreakWords.length; o++) r = r.replace(this.xssBreakWords[o], "$1" + y.XSS_BREAK_DELIM + "$2");
                    i = e[n];
                    a = r.split("");
                    u = t;
                    for (o = 0; o < a.length; o++) {
                        s = a[o];
                        c = u[s];
                        "undefined" === typeof c ? u = u[s] = o === a.length - 1 ? i : {} : "string" === typeof c ? u = u[s] = {
                            "|": c
                        } : o === a.length - 1 ? u[s]["|"] = i : u = u[s]
                    }
                }
                return t
            };
            y.optimizeTrie = function (e, t) {
                var n = 0,
                    r, o, i;
                var a = [];
                for (r in e) e.hasOwnProperty(r) && a.push(r);
                for (var s = 0; s < a.length; s++) {
                    r = a[s];
                    if ("object" === typeof e[r]) {
                        o = this.optimizeTrie(e[r], false);
                        if (o) {
                            delete e[r];
                            if (r === y.XSS_BREAK_DELIM) {
                                r = o.name;
                                n++
                            } else r += o.name;
                            e[r] = o.value
                        }
                    }
                    n++
                }
                if (1 === n) {
                    if (t) {
                        i = {};
                        i[r] = e[r];
                        return i
                    }
                    return {
                        name: r,
                        value: e[r]
                    }
                }
                if (t) return e;
                return false
            };
            y.trimTiming = function (e, t) {
                "number" !== typeof e && (e = 0);
                "number" !== typeof t && (t = 0);
                var n = Math.round(e || 0),
                    r = Math.round(t || 0);
                return 0 === n ? 0 : n - r
            };
            y.getNavStartTime = function (e) {
                var t = 0,
                    n;
                if (!e) return t;
                try {
                    n = e.location && e.location.href;
                    "performance" in e && e.performance && e.performance.timing && e.performance.timing.navigationStart && (t = e.performance.timing.navigationStart)
                } catch (e) { }
                return t
            };
            y.findPerformanceEntriesForFrame = function (e, t, n, r) {
                var o = [],
                    i, a, s, u, c, l, f, p, d, v = {},
                    m = {},
                    h;
                "undefined" === typeof t && (t = true);
                "undefined" === typeof n && (n = 0);
                "undefined" === typeof r && (r = 0);
                if (r > 10) return o;
                try {
                    s = this.getNavStartTime(e);
                    h = e.document.createElement("a");
                    g(h, m, "script");
                    g(h, v, "link");
                    if (e.frames)
                        for (i = 0; i < e.frames.length; i++) {
                            u = this.getNavStartTime(e.frames[i]);
                            c = 0;
                            u > s && (c = n + (u - s));
                            o = o.concat(this.findPerformanceEntriesForFrame(e.frames[i], false, c, ++r))
                        }
                    try {
                        p = e.location && e.location.href;
                        if (!("performance" in e) || !e.performance || !e.performance.getEntriesByType) return o
                    } catch (e) {
                        return o
                    }
                    if (t) {
                        a = e.performance.getEntriesByType("navigation");
                        if (a && 1 === a.length) {
                            l = a[0];
                            o.push({
                                name: e.location.href,
                                startTime: 0,
                                initiatorType: "html",
                                redirectStart: l.redirectStart,
                                redirectEnd: l.redirectEnd,
                                fetchStart: l.fetchStart,
                                domainLookupStart: l.domainLookupStart,
                                domainLookupEnd: l.domainLookupEnd,
                                connectStart: l.connectStart,
                                secureConnectionStart: l.secureConnectionStart,
                                connectEnd: l.connectEnd,
                                requestStart: l.requestStart,
                                responseStart: l.responseStart,
                                responseEnd: l.responseEnd,
                                serverTiming: l.serverTiming || []
                            })
                        } else if (e.performance.timing) {
                            f = e.performance.timing;
                            0 !== f.navigationStart && f.responseEnd <= f.navigationStart + 36e5 && o.push({
                                name: e.location.href,
                                startTime: 0,
                                initiatorType: "html",
                                redirectStart: f.redirectStart ? f.redirectStart - f.navigationStart : 0,
                                redirectEnd: f.redirectEnd ? f.redirectEnd - f.navigationStart : 0,
                                fetchStart: f.fetchStart ? f.fetchStart - f.navigationStart : 0,
                                domainLookupStart: f.domainLookupStart ? f.domainLookupStart - f.navigationStart : 0,
                                domainLookupEnd: f.domainLookupEnd ? f.domainLookupEnd - f.navigationStart : 0,
                                connectStart: f.connectStart ? f.connectStart - f.navigationStart : 0,
                                secureConnectionStart: f.secureConnectionStart ? f.secureConnectionStart - f.navigationStart : 0,
                                connectEnd: f.connectEnd ? f.connectEnd - f.navigationStart : 0,
                                requestStart: f.requestStart ? f.requestStart - f.navigationStart : 0,
                                responseStart: f.responseStart ? f.responseStart - f.navigationStart : 0,
                                responseEnd: f.responseEnd ? f.responseEnd - f.navigationStart : 0
                            })
                        }
                    }
                    var y = e.performance.getEntriesByType("resource");
                    var b = [];
                    for (i = 0; y && i < y.length; i++) {
                        f = y[i];
                        d = {
                            name: f.name,
                            initiatorType: f.initiatorType,
                            startTime: f.startTime + n,
                            redirectStart: f.redirectStart ? f.redirectStart + n : 0,
                            redirectEnd: f.redirectEnd ? f.redirectEnd + n : 0,
                            fetchStart: f.fetchStart ? f.fetchStart + n : 0,
                            domainLookupStart: f.domainLookupStart ? f.domainLookupStart + n : 0,
                            domainLookupEnd: f.domainLookupEnd ? f.domainLookupEnd + n : 0,
                            connectStart: f.connectStart ? f.connectStart + n : 0,
                            secureConnectionStart: f.secureConnectionStart ? f.secureConnectionStart + n : 0,
                            connectEnd: f.connectEnd ? f.connectEnd + n : 0,
                            requestStart: f.requestStart ? f.requestStart + n : 0,
                            responseStart: f.responseStart ? f.responseStart + n : 0,
                            responseEnd: f.responseEnd ? f.responseEnd + n : 0
                        };
                        if (f.encodedBodySize || f.decodedBodySize || f.transferSize) {
                            d.encodedBodySize = f.encodedBodySize;
                            d.decodedBodySize = f.decodedBodySize;
                            d.transferSize = f.transferSize
                        }
                        f.serverTiming && f.serverTiming.length && (d.serverTiming = f.serverTiming);
                        this.updateScriptFlags(m, f, d);
                        this.updateLinkFlags(v, f, d);
                        b.push(d)
                    }
                    o = o.concat(b)
                } catch (e) {
                    return o
                }
                return o
            };
            y.updateScriptFlags = function (e, t, n) {
                if (("script" === t.initiatorType || "link" === t.initiatorType) && e[t.name]) {
                    var r = e[t.name];
                    n.scriptAttrs = (r.async ? y.SPECIAL_DATA_SCRIPT_ASYNC_ATTR : 0) | (r.defer ? y.SPECIAL_DATA_SCRIPT_DEFER_ATTR : 0);
                    while (1 === r.nodeType && "BODY" !== r.nodeName) r = r.parentNode;
                    n.scriptAttrs |= "BODY" === r.nodeName ? y.SPECIAL_DATA_SCRIPT_LOCAT_ATTR : 0
                }
            };
            y.updateLinkFlags = function (e, t, n) {
                "link" === t.initiatorType && e[t.name] && e[t.name].rel.split(/[\u0009\u000A\u000C\u000D\u0020]+/).find(function (e) {
                    e = e.toLowerCase();
                    if (y.REL_TYPES[e]) {
                        n.linkAttrs = y.REL_TYPES[e];
                        return true
                    }
                    return false
                })
            };
            y.toBase36 = function (e) {
                if ("number" === typeof e && 0 !== e) return e.toString(36);
                return "string" === typeof e ? e : ""
            };

            function g(t, n, e) {
                Array.prototype.forEach.call(t.ownerDocument.getElementsByTagName(e), function (e) {
                    t.href = e.currentSrc || e.src || e.getAttribute("xlink:href") || e.href;
                    t.href.match(/^https?:\/\//) && (n[t.href] = e)
                })
            }
            y.getVisibleEntries = function (e) {
                if (!e) return {};
                var t = ["img", "iframe", "image"],
                    c = {},
                    l, f, p = e.document,
                    d = p.createElement("A");
                l = void 0 !== e.pageXOffset ? e.pageXOffset : (p.documentElement || p.body.parentNode || p.body).scrollLeft;
                f = void 0 !== e.pageYOffset ? e.pageYOffset : (p.documentElement || p.body.parentNode || p.body).scrollTop;
                t.forEach(function (e) {
                    var t = p.getElementsByTagName(e),
                        n, r, o, i;
                    for (r = 0; r < t.length; r++) {
                        n = t[r];
                        if (!n) continue;
                        i = n.currentSrc || n.src || "function" === typeof n.getAttribute && n.getAttribute("src") || n.getAttribute("xlink:href");
                        d.href = i;
                        i = d.href;
                        if (!i || c[i]) continue;
                        o = n.getBoundingClientRect();
                        if ((o.height || n.offsetHeight) && (o.width || n.offsetWidth)) {
                            c[i] = [o.height || n.offsetHeight, o.width || n.offsetWidth, Math.round(o.top + f), Math.round(o.left + l)];
                            if (!n.naturalHeight && !n.naturalWidth) continue;
                            var a, s, u;
                            if (n.currentSrc && (n.srcset || n.parentNode && n.parentNode.nodeName && "PICTURE" === n.parentNode.nodeName.toUpperCase())) {
                                a = n.isConnected ? n.ownerDocument.createElement("IMG") : new v.Image;
                                a.src = i
                            } else a = n;
                            s = a.naturalHeight || n.naturalHeight;
                            u = a.naturalWidth || n.naturalWidth;
                            !s && !u || c[i][0] === s && c[i][1] === u || c[i].push(s, u)
                        }
                    }
                });
                return c
            };
            y.inArray = function (e, t) {
                var n;
                if ("undefined" === typeof e || "undefined" === typeof t || !t.length) return false;
                for (n = 0; n < t.length; n++)
                    if (t[n] === e) return true;
                return false
            };
            y.getFilteredResourceTiming = function (e, t, n, r) {
                var o = this.findPerformanceEntriesForFrame(e, true, 0, 0),
                    i, a, s = this.getNavStartTime(e),
                    u = {};
                if (!o || !o.length) return {
                    entries: []
                };
                var c = [];
                for (i = 0; i < o.length; i++) {
                    a = o[i];
                    if (0 === a.name.indexOf("about:") || 0 === a.name.indexOf("javascript:")) continue;
                    if (t && s + a.startTime < t) continue;
                    if (n && s + a.startTime > n) break;
                    if ("undefined" !== typeof r && "*" !== r && r.length && (!a.initiatorType || !this.inArray(a.initiatorType, r))) continue;
                    y.accumulateServerTimingEntries(u, a.serverTiming);
                    c.push(a)
                }
                var l = y.compressServerTiming(u);
                return {
                    entries: c,
                    serverTiming: {
                        lookup: l,
                        indexed: y.indexServerTiming(l)
                    }
                }
            };
            y.compressSize = function (e) {
                var t, n, r, o;
                if (e.encodedBodySize || e.decodedBodySize || e.transferSize) {
                    t = e.transferSize;
                    n = e.encodedBodySize;
                    r = e.decodedBodySize;
                    o = [n, t ? t - n : "_", r - n];
                    return o.map(this.toBase36).join(",").replace(/,+$/, "")
                }
                return ""
            };
            y.cleanupURL = function (e, t) {
                var n;
                if (!e || "[object Array]" === Object.prototype.toString.call(e)) return "";
                if ("undefined" !== typeof t && e && e.length > t) {
                    n = e.indexOf("?");
                    e = -1 !== n && n < t ? e.substr(0, n) + "?..." : e.substr(0, t - 3) + "..."
                }
                return e
            };
            y.trimUrl = function (e, t) {
                var n, r, o;
                if (e && t)
                    for (n = 0; n < t.length; n++) {
                        o = t[n];
                        if ("string" === typeof o) {
                            r = e.indexOf(o);
                            if (-1 !== r) {
                                e = e.substr(0, r + o.length) + "...";
                                break
                            }
                        } else o instanceof RegExp && o.test(e) && (e = e.replace(o, "$1") + "...")
                    }
                return this.cleanupURL(e, y.DEFAULT_URL_LIMIT)
            };
            y.getResourceTiming = function (e, t, n, r) {
                "undefined" === typeof e && (e = v);
                var o = y.getFilteredResourceTiming(e, t, n);
                var i = o.entries,
                    a = o.serverTiming;
                if (!i || !i.length) return {};
                return y.compressResourceTiming(e, i, a, r)
            };
            y.compressResourceTiming = function (e, t, i, n) {
                var r, o, a = {},
                    s, u, c, l, f = {};
                n || (f = this.getVisibleEntries(e));
                for (r = 0; r < t.length; r++) {
                    o = t[r];
                    s = this.INITIATOR_TYPES[o.initiatorType];
                    "undefined" === typeof s && (s = 0);
                    l = s + [this.trimTiming(o.startTime, 0), this.trimTiming(o.responseEnd, o.startTime), this.trimTiming(o.responseStart, o.startTime), this.trimTiming(o.requestStart, o.startTime), this.trimTiming(o.connectEnd, o.startTime), this.trimTiming(o.secureConnectionStart, o.startTime), this.trimTiming(o.connectStart, o.startTime), this.trimTiming(o.domainLookupEnd, o.startTime), this.trimTiming(o.domainLookupStart, o.startTime), this.trimTiming(o.redirectEnd, o.startTime), this.trimTiming(o.redirectStart, o.startTime)].map(this.toBase36).join(",").replace(/,+$/, "");
                    var p = this.compressSize(o);
                    "" !== p && (l += y.SPECIAL_DATA_PREFIX + y.SPECIAL_DATA_SIZE_TYPE + p);
                    o.hasOwnProperty("scriptAttrs") && (l += y.SPECIAL_DATA_PREFIX + y.SPECIAL_DATA_SCRIPT_TYPE + o.scriptAttrs);
                    o.hasOwnProperty("linkAttrs") && (l += y.SPECIAL_DATA_PREFIX + y.SPECIAL_DATA_LINK_ATTR_TYPE + o.linkAttrs);
                    o.serverTiming && o.serverTiming.length && (l += y.SPECIAL_DATA_PREFIX + y.SPECIAL_DATA_SERVERTIMING_TYPE + o.serverTiming.reduce(function (e, t, n) {
                        var r = String(t.duration);
                        "0." === r.substring(0, 2) && (r = r.substring(1));
                        var o = y.identifyServerTimingEntry(i.indexed[t.name].index, i.indexed[t.name].descriptions[t.description]);
                        e += (n > 0 ? "," : "") + r + o;
                        return e
                    }, ""));
                    if (o.workerStart && "number" === typeof o.workerStart && 0 !== o.workerStart) {
                        var d = y.roundUpTiming(o.workerStart);
                        var v = this.trimTiming(d, o.startTime);
                        l += y.SPECIAL_DATA_PREFIX + y.SPECIAL_DATA_SERVICE_WORKER_TYPE + this.toBase36(v)
                    }
                    c = u = this.trimUrl(o.name, this.trimUrls);
                    y.HOSTNAMES_REVERSED && (c = this.reverseHostname(u));
                    if (o.hasOwnProperty("_data")) {
                        var m = "";
                        for (var h in o._data) o._data.hasOwnProperty(h) && (m += y.SPECIAL_DATA_PREFIX + y.SPECIAL_DATA_NAMESPACED_TYPE + h + ":" + o._data[h]);
                        "undefined" === typeof a[u] ? a[u] = l + m : a[u] += m
                    } else void 0 !== a[c] ? a[c] += "|" + l : void 0 !== f[u] ? a[c] = y.SPECIAL_DATA_PREFIX + y.SPECIAL_DATA_DIMENSION_TYPE + f[u].map(this.toBase36).join(",").replace(/,+$/, "") + "|" + l : a[c] = l
                }
                return {
                    restiming: this.optimizeTrie(this.convertToTrie(a), true),
                    servertiming: i.lookup
                }
            };
            y.reverseHostname = function (e) {
                return e.replace(y.HOSTNAME_REGEX, function (e, t, n, r) {
                    return t + y.reverseString(n) + r
                })
            };
            y.reverseString = function (e) {
                var t = e.length,
                    n = "";
                while (t--) n += e[t];
                return n
            };
            y.accumulateServerTimingEntries = function (n, e) {
                (e || []).forEach(function (e) {
                    "undefined" === typeof n[e.name] && (n[e.name] = {
                        count: 0,
                        counts: {}
                    });
                    var t = n[e.name];
                    t.counts[e.description] = t.counts[e.description] || 0;
                    t.counts[e.description]++;
                    t.count++
                })
            };
            y.compressServerTiming = function (r) {
                return Object.keys(r).sort(function (e, t) {
                    return r[t].count - r[e].count
                }).reduce(function (e, n) {
                    var t = Object.keys(r[n].counts).sort(function (e, t) {
                        return r[n].counts[t] - r[n].counts[e]
                    });
                    e.push(1 === t.length && "" === t[0] ? n : [n].concat(t));
                    return e
                }, [])
            };
            y.indexServerTiming = function (e) {
                return e.reduce(function (e, t, n) {
                    var r, o;
                    if (Array.isArray(t)) {
                        r = t[0];
                        o = t.slice(1).reduce(function (e, t, n) {
                            e[t] = n;
                            return e
                        }, {})
                    } else {
                        r = t;
                        o = {
                            "": 0
                        }
                    }
                    e[r] = {
                        index: n,
                        descriptions: o
                    };
                    return e
                }, {})
            };
            y.identifyServerTimingEntry = function (e, t) {
                var n = "";
                e && (n += e);
                t && (n += "." + t);
                n.length && (n = ":" + n);
                return n
            };
            true;
            !(o = [], i = function () {
                return y
            }.apply(r, o), void 0 !== i && (n.exports = i))
        })("undefined" !== typeof window ? window : void 0)
    },
    "./src/main/webapp/universal/node_modules/tslib/tslib.es6.js": function (e, t, n) {
        "use strict";
        n.d(t, "b", function () {
            return o
        });
        n.d(t, "a", function () {
            return i
        });
        n.d(t, "e", function () {
            return v
        });
        n.d(t, "c", function () {
            return m
        });
        n.d(t, "d", function () {
            return h
        });
        var r = function (e, t) {
            r = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                };
            return r(e, t)
        };

        function o(e, t) {
            r(e, t);

            function n() {
                this.constructor = e
            }
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }
        var i = function () {
            i = Object.assign || function e(t) {
                for (var n, r = 1, o = arguments.length; r < o; r++) {
                    n = arguments[r];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                }
                return t
            };
            return i.apply(this, arguments)
        };

        function a(e, t) {
            var n = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
            if (null != e && "function" === typeof Object.getOwnPropertySymbols)
                for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
            return n
        }

        function s(e, t, n, r) {
            var o = arguments.length,
                i = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r,
                a;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) i = Reflect.decorate(e, t, n, r);
            else
                for (var s = e.length - 1; s >= 0; s--)(a = e[s]) && (i = (o < 3 ? a(i) : o > 3 ? a(t, n, i) : a(t, n)) || i);
            return o > 3 && i && Object.defineProperty(t, n, i), i
        }

        function u(n, r) {
            return function (e, t) {
                r(e, t, n)
            }
        }

        function c(e, t) {
            if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(e, t)
        }

        function l(e, a, n, s) {
            function u(t) {
                return t instanceof n ? t : new n(function (e) {
                    e(t)
                })
            }
            return new (n = n || Promise)(function (t, n) {
                function r(e) {
                    try {
                        i(s.next(e))
                    } catch (e) {
                        n(e)
                    }
                }

                function o(e) {
                    try {
                        i(s["throw"](e))
                    } catch (e) {
                        n(e)
                    }
                }

                function i(e) {
                    e.done ? t(e.value) : u(e.value).then(r, o)
                }
                i((s = s.apply(e, a || [])).next())
            })
        }

        function f(e, n) {
            var r = {
                label: 0,
                sent: function () {
                    if (1 & a[0]) throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            },
                o, i, a, t;
            return t = {
                next: s(0),
                throw: s(1),
                return: s(2)
            }, "function" === typeof Symbol && (t[Symbol.iterator] = function () {
                return this
            }), t;

            function s(t) {
                return function (e) {
                    return u([t, e])
                }
            }

            function u(t) {
                if (o) throw new TypeError("Generator is already executing.");
                while (r) try {
                    if (o = 1, i && (a = 2 & t[0] ? i["return"] : t[0] ? i["throw"] || ((a = i["return"]) && a.call(i), 0) : i.next) && !(a = a.call(i, t[1])).done) return a;
                    (i = 0, a) && (t = [2 & t[0], a.value]);
                    switch (t[0]) {
                        case 0:
                        case 1:
                            a = t;
                            break;
                        case 4:
                            r.label++;
                            return {
                                value: t[1], done: false
                            };
                        case 5:
                            r.label++;
                            i = t[1];
                            t = [0];
                            continue;
                        case 7:
                            t = r.ops.pop();
                            r.trys.pop();
                            continue;
                        default:
                            if (!(a = r.trys, a = a.length > 0 && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                r = 0;
                                continue
                            }
                            if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                r.label = t[1];
                                break
                            }
                            if (6 === t[0] && r.label < a[1]) {
                                r.label = a[1];
                                a = t;
                                break
                            }
                            if (a && r.label < a[2]) {
                                r.label = a[2];
                                r.ops.push(t);
                                break
                            }
                            a[2] && r.ops.pop();
                            r.trys.pop();
                            continue
                    }
                    t = n.call(e, r)
                } catch (e) {
                    t = [6, e];
                    i = 0
                } finally {
                        o = a = 0
                    }
                if (5 & t[0]) throw t[1];
                return {
                    value: t[0] ? t[1] : void 0,
                    done: true
                }
            }
        }

        function p(e, t, n, r) {
            void 0 === r && (r = n);
            e[r] = t[n]
        }

        function d(e, t) {
            for (var n in e) "default" === n || t.hasOwnProperty(n) || (t[n] = e[n])
        }

        function v(e) {
            var t = "function" === typeof Symbol && Symbol.iterator,
                n = t && e[t],
                r = 0;
            if (n) return n.call(e);
            if (e && "number" === typeof e.length) return {
                next: function () {
                    e && r >= e.length && (e = void 0);
                    return {
                        value: e && e[r++],
                        done: !e
                    }
                }
            };
            throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }

        function m(e, t) {
            var n = "function" === typeof Symbol && e[Symbol.iterator];
            if (!n) return e;
            var r = n.call(e),
                o, i = [],
                a;
            try {
                while ((void 0 === t || t-- > 0) && !(o = r.next()).done) i.push(o.value)
            } catch (e) {
                a = {
                    error: e
                }
            } finally {
                try {
                    o && !o.done && (n = r["return"]) && n.call(r)
                } finally {
                    if (a) throw a.error
                }
            }
            return i
        }

        function h() {
            for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(m(arguments[t]));
            return e
        }

        function y() {
            for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
            for (var r = Array(e), o = 0, t = 0; t < n; t++)
                for (var i = arguments[t], a = 0, s = i.length; a < s; a++, o++) r[o] = i[a];
            return r
        }

        function b(e) {
            return this instanceof b ? (this.v = e, this) : new b(e)
        }

        function g(e, t, n) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var o = n.apply(e, t || []),
                i, a = [];
            return i = {}, r("next"), r("throw"), r("return"), i[Symbol.asyncIterator] = function () {
                return this
            }, i;

            function r(r) {
                o[r] && (i[r] = function (n) {
                    return new Promise(function (e, t) {
                        a.push([r, n, e, t]) > 1 || s(r, n)
                    })
                })
            }

            function s(e, t) {
                try {
                    u(o[e](t))
                } catch (e) {
                    f(a[0][3], e)
                }
            }

            function u(e) {
                e.value instanceof b ? Promise.resolve(e.value.v).then(c, l) : f(a[0][2], e)
            }

            function c(e) {
                s("next", e)
            }

            function l(e) {
                s("throw", e)
            }

            function f(e, t) {
                (e(t), a.shift(), a.length) && s(a[0][0], a[0][1])
            }
        }

        function _(r) {
            var e, o;
            return e = {}, t("next"), t("throw", function (e) {
                throw e
            }), t("return"), e[Symbol.iterator] = function () {
                return this
            }, e;

            function t(t, n) {
                e[t] = r[t] ? function (e) {
                    return (o = !o) ? {
                        value: b(r[t](e)),
                        done: "return" === t
                    } : n ? n(e) : e
                } : n
            }
        }

        function w(o) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var e = o[Symbol.asyncIterator],
                t;
            return e ? e.call(o) : (o = "function" === typeof v ? v(o) : o[Symbol.iterator](), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function () {
                return this
            }, t);

            function n(r) {
                t[r] = o[r] && function (n) {
                    return new Promise(function (e, t) {
                        n = o[r](n), i(e, t, n.done, n.value)
                    })
                }
            }

            function i(t, e, n, r) {
                Promise.resolve(r).then(function (e) {
                    t({
                        value: e,
                        done: n
                    })
                }, e)
            }
        }

        function j(e, t) {
            Object.defineProperty ? Object.defineProperty(e, "raw", {
                value: t
            }) : e.raw = t;
            return e
        }

        function E(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            t.default = e;
            return t
        }

        function S(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function O(e, t) {
            if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
            return t.get(e)
        }

        function T(e, t, n) {
            if (!t.has(e)) throw new TypeError("attempted to set private field on non-instance");
            t.set(e, n);
            return n
        }
    },
    "./src/main/webapp/universal/node_modules/tti-polyfill/tti-polyfill.js": function (O, T, e) {
        (function (j) {
            var E, S;
            (function () {
                var t = "undefined" != typeof window && window === this ? this : "undefined" != typeof j && null != j ? j : this,
                    n = "function" == typeof Object.defineProperties ? Object.defineProperty : function (e, t, n) {
                        e != Array.prototype && e != Object.prototype && (e[t] = n.value)
                    };

                function r() {
                    r = function () { };
                    t.Symbol || (t.Symbol = e)
                }
                var o = 0;

                function e(e) {
                    return "jscomp_symbol_" + (e || "") + o++
                }

                function i() {
                    r();
                    var e = t.Symbol.iterator;
                    e = e || (t.Symbol.iterator = t.Symbol("iterator"));
                    "function" != typeof Array.prototype[e] && n(Array.prototype, e, {
                        configurable: !0,
                        writable: !0,
                        value: function () {
                            return a(this)
                        }
                    });
                    i = function () { }
                }

                function a(e) {
                    var t = 0;
                    return s(function () {
                        return t < e.length ? {
                            done: !1,
                            value: e[t++]
                        } : {
                                done: !0
                            }
                    })
                }

                function s(e) {
                    i();
                    e = {
                        next: e
                    };
                    e[t.Symbol.iterator] = function () {
                        return this
                    };
                    return e
                }

                function u(e) {
                    i();
                    var t = e[Symbol.iterator];
                    return t ? t.call(e) : a(e)
                }

                function c(e) {
                    if (!(e instanceof Array)) {
                        e = u(e);
                        for (var t, n = []; !(t = e.next()).done;) n.push(t.value);
                        e = n
                    }
                    return e
                }
                var l = 0;

                function f(o, i) {
                    var a = XMLHttpRequest.prototype.send,
                        s = l++;
                    XMLHttpRequest.prototype.send = function (e) {
                        for (var t = [], n = 0; n < arguments.length; ++n) t[n - 0] = arguments[n];
                        var r = this;
                        o(s);
                        this.addEventListener("readystatechange", function () {
                            4 === r.readyState && i(s)
                        });
                        return a.apply(this, t)
                    }
                }

                function p(i, a) {
                    var s = fetch;
                    fetch = function (e) {
                        for (var o = [], t = 0; t < arguments.length; ++t) o[t - 0] = arguments[t];
                        return new Promise(function (t, n) {
                            var r = l++;
                            i(r);
                            s.apply(null, [].concat(c(o))).then(function (e) {
                                a(r);
                                t(e)
                            }, function (e) {
                                a(e);
                                n(e)
                            })
                        })
                    }
                }
                var d = "img script iframe link audio video source".split(" ");

                function v(e, t) {
                    e = u(e);
                    for (var n = e.next(); !n.done; n = e.next())
                        if (n = n.value, t.includes(n.nodeName.toLowerCase()) || v(n.children, t)) return !0;
                    return !1
                }

                function m(n) {
                    var e = new MutationObserver(function (e) {
                        e = u(e);
                        for (var t = e.next(); !t.done; t = e.next()) t = t.value, "childList" == t.type && v(t.addedNodes, d) ? n(t) : "attributes" == t.type && d.includes(t.target.tagName.toLowerCase()) && n(t)
                    });
                    e.observe(document, {
                        attributes: !0,
                        childList: !0,
                        subtree: !0,
                        attributeFilter: ["href", "src"]
                    });
                    return e
                }

                function h(e, t) {
                    if (2 < e.length) return performance.now();
                    var n = [];
                    t = u(t);
                    for (var r = t.next(); !r.done; r = t.next()) r = r.value, n.push({
                        timestamp: r.start,
                        type: "requestStart"
                    }), n.push({
                        timestamp: r.end,
                        type: "requestEnd"
                    });
                    t = u(e);
                    for (r = t.next(); !r.done; r = t.next()) n.push({
                        timestamp: r.value,
                        type: "requestStart"
                    });
                    n.sort(function (e, t) {
                        return e.timestamp - t.timestamp
                    });
                    e = e.length;
                    for (t = n.length - 1; 0 <= t; t--) switch (r = n[t], r.type) {
                        case "requestStart":
                            e--;
                            break;
                        case "requestEnd":
                            e++;
                            if (2 < e) return r.timestamp;
                            break;
                        default:
                            throw Error("Internal Error: This should never happen")
                    }
                    return 0
                }

                function y(e) {
                    e = e || {};
                    this.w = !!e.useMutationObserver;
                    this.u = e.minValue || null;
                    e = window.__tti && window.__tti.e;
                    var t = window.__tti && window.__tti.o;
                    this.a = e ? e.map(function (e) {
                        return {
                            start: e.startTime,
                            end: e.startTime + e.duration
                        }
                    }) : [];
                    t && t.disconnect();
                    this.b = [];
                    this.f = new Map;
                    this.j = null;
                    this.v = -1 / 0;
                    this.i = !1;
                    this.h = this.c = this.s = null;
                    f(this.m.bind(this), this.l.bind(this));
                    p(this.m.bind(this), this.l.bind(this));
                    _(this);
                    this.w && (this.h = m(this.B.bind(this)))
                }
                y.prototype.getFirstConsistentlyInteractive = function () {
                    var t = this;
                    return new Promise(function (e) {
                        t.s = e;
                        "complete" == document.readyState ? b(t) : window.addEventListener("load", function () {
                            b(t)
                        })
                    })
                };

                function b(e) {
                    e.i = !0;
                    var t = 0 < e.a.length ? e.a[e.a.length - 1].end : 0,
                        n = h(e.g, e.b);
                    g(e, Math.max(n + 5e3, t))
                }

                function g(i, e) {
                    !i.i || i.v > e || (clearTimeout(i.j), i.j = setTimeout(function () {
                        var e = performance.timing.navigationStart,
                            t = h(i.g, i.b),
                            e = (window.a && window.a.A ? 1e3 * window.a.A().C - e : 0) || performance.timing.domContentLoadedEventEnd - e;
                        if (i.u) var n = i.u;
                        else n = performance.timing.domContentLoadedEventEnd ? (n = performance.timing, n.domContentLoadedEventEnd - n.navigationStart) : null;
                        var r = performance.now();
                        null === n && g(i, Math.max(t + 5e3, r + 1e3));
                        var o = i.a;
                        t = 5e3 > r - t ? null : (t = o.length ? o[o.length - 1].end : e, 5e3 > r - t ? null : Math.max(t, n));
                        t && (i.s(t), clearTimeout(i.j), i.i = !1, i.c && i.c.disconnect(), i.h && i.h.disconnect());
                        g(i, performance.now() + 1e3)
                    }, e - performance.now()), i.v = e)
                }

                function _(r) {
                    r.c = new PerformanceObserver(function (e) {
                        e = u(e.getEntries());
                        for (var t = e.next(); !t.done; t = e.next())
                            if (t = t.value, "resource" === t.entryType && (r.b.push({
                                start: t.fetchStart,
                                end: t.responseEnd
                            }), g(r, h(r.g, r.b) + 5e3)), "longtask" === t.entryType) {
                                var n = t.startTime + t.duration;
                                r.a.push({
                                    start: t.startTime,
                                    end: n
                                });
                                g(r, n + 5e3)
                            }
                    });
                    r.c.observe({
                        entryTypes: ["longtask", "resource"]
                    })
                }
                y.prototype.m = function (e) {
                    this.f.set(e, performance.now())
                };
                y.prototype.l = function (e) {
                    this.f.delete(e)
                };
                y.prototype.B = function () {
                    g(this, performance.now() + 5e3)
                };
                t.Object.defineProperties(y.prototype, {
                    g: {
                        configurable: !0,
                        enumerable: !0,
                        get: function () {
                            return [].concat(c(this.f.values()))
                        }
                    }
                });
                var w = {
                    getFirstConsistentlyInteractive: function (e) {
                        e = e || {};
                        return "PerformanceLongTaskTiming" in window ? new y(e).getFirstConsistentlyInteractive() : Promise.resolve(null)
                    }
                };
                true, O.exports ? O.exports = w : (true, !(E = [], S = function () {
                    return w
                }.apply(T, E), void 0 !== S && (O.exports = S)))
            })()
        }).call(this, e("./node_modules/webpack/buildin/global.js"))
    },
    "./src/main/webapp/universal/packages/enums/PageTypes.js": function (e, t) {
        var n = {
            MAIN_CONTENT: 1,
            CONTENT_COLLECTION: 1,
            PAGE: 2,
            SPLASH_PAGE: 3,
            CONTENT_ITEM: 50,
            NOT_FOUND: 100,
            ERROR: 101,
            SEARCH: 102,
            LOCK_SCREEN: 103,
            POPUP_OVERLAY: 104,
            PROTECTED_CONTENT: 105,
            MEMBER_AREA_ACCESS_DENIED: 106,
            SHOW_CART: 200,
            CHECKOUT: 201,
            ORDER_CONFIRMED: 202,
            DONATE: 203,
            CONTRIBUTION_CONFIRMED: 204,
            COMMERCE_CART_V2: 205,
            SUBSCRIPTION_CONFIRMED: 206,
            ORDER_RECEIVED: 207,
            MEMBERSHIP_CONFIRMED: 208,
            NEWSLETTER_UNSUBSCRIBE: 300,
            COMMERCE_EMAIL_PREVIEW: 301
        };
        e.exports = n
    },
    "./src/main/webapp/universal/packages/enums/StatusConstants.js": function (e, t) {
        var n = {
            EXPIRED: 1,
            PASTDUE: 2,
            TRIAL: 3,
            BETA: 4,
            REMOVED: 5,
            INTERNAL: 6,
            COMPED: 7,
            PAID: 8,
            V5_LINKED: 11,
            ACTIVE_PARKING_PAGE: 12,
            RESOLD: 13,
            RESOLD_GRACE_PERIOD: 14,
            ENTERPRISE: 15
        };
        e.exports = n
    },
    "./src/main/webapp/universal/src/apps/Performance/bootstrap.js": function (e, t, n) {
        "use strict";
        var r = n("./src/main/webapp/universal/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
        var o = r(n("./src/main/webapp/universal/node_modules/@babel/runtime/helpers/defineProperty.js"));
        var i = r(n("./src/main/webapp/universal/node_modules/@sqs/rum-collector/lib/index.js"));
        var u = r(n("./src/main/webapp/universal/packages/enums/StatusConstants.js"));
        var a = r(n("./src/main/webapp/universal/packages/enums/PageTypes.js"));
        var c = n("./src/main/webapp/universal/src/shared/utils/error-reporter/global-sentry.ts");

        function s(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }));
                n.push.apply(n, r)
            }
            return n
        }

        function l(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? s(Object(n), true).forEach(function (e) {
                    (0, o.default)(t, e, n[e])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                })
            }
            return t
        }
        var f = window.Static && window.Static.SQUARESPACE_CONTEXT;
        var p = window.top !== window;
        var d = Object.freeze((0, o.default)({}, a.default.COMMERCE_CART_V2, "commerce-cart"));

        function v() {
            var e = window.location && window.location.pathname || "";
            return !p && /^\/config(\/.*)?$/.test(e)
        }

        function m() {
            return {
                inFrame: p,
                templateId: f.templateId || "",
                impersonatedSession: !!f.impersonatedSession,
                pageType: "number" === typeof f.pageType ? f.pageType : -1
            }
        }

        function h() {
            var e = f.website,
                t = void 0 === e ? {} : e;
            return {
                authenticUrl: t.authenticUrl || "",
                cloneable: !!t.cloneable,
                developerMode: !!t.developerMode,
                isHstsEnabled: !!t.isHstsEnabled,
                language: t.language || "",
                timeZone: t.timeZone || "",
                websiteId: t.id || "",
                websiteType: t.websiteType || -1
            }
        }

        function y() {
            var e = f.websiteSettings,
                t = void 0 === e ? {} : e;
            return {
                ampEnabled: !!t.ampEnabled
            }
        }

        function b() {
            var e = f.collection,
                t = void 0 === e ? {} : e;
            return {
                collectionType: t.type || -1
            }
        }

        function g() {
            return window.Squarespace && "SECTION_CONTEXT" in window.Squarespace
        }

        function _() {
            if (f.hasOwnProperty("templateVersion")) return f.templateVersion.replace(".", "_");
            if (g()) return "8";
            return null
        }

        function w(e) {
            var t = v();
            var n = d[f.pageType];
            var r = {
                appName: n || "v".concat(e, "-").concat(t ? "config" : "user-sites"),
                context: l({}, m(), {}, h(), {}, y(), {}, b()),
                captureException: function e(t, n) {
                    (0, c.withScope)(function (e) {
                        e.setTag("project", "rum-collector");
                        void 0 !== n && e.setExtra("extras", n);
                        (0, c.captureException)(t)
                    })
                }
            };
            if (t) {
                var o = f.website.siteStatus.value === u.default.INTERNAL;
                var i = f.authenticatedAccount,
                    a = i.createdOn,
                    s = i.id;
                r.context.isInternal = o;
                r.context.createdOn = a;
                r.context.memberId = s
            }
            return r
        }

        function j() {
            if (true, f) {
                var e = _();
                if (null === e) return;
                var t = w(e);
                (0, i.default)(t)
            }
        }
        j()
    },
    "./src/main/webapp/universal/src/shared/utils/error-reporter/global-sentry.ts": function (e, t, n) {
        "use strict";
        var r = n("./src/main/webapp/universal/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.withScope = t.configureScope = t.captureEvent = t.captureException = t.captureMessage = void 0;
        var o = r(n("./src/main/webapp/universal/node_modules/@sentry/browser/esm/index.js"));
        var i, a, s, u, c;
        t.withScope = c;
        t.configureScope = u;
        t.captureEvent = s;
        t.captureException = a;
        t.captureMessage = i;
        var l = function e(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.Severity.Debug;
            console.log("".concat(n, ": ").concat(t));
            return "some-error-identifier"
        };
        if (window.SQUARESPACE_SENTRY) {
            t.captureMessage = i = window.SQUARESPACE_SENTRY.captureMessage;
            t.captureException = a = window.SQUARESPACE_SENTRY.captureException;
            t.captureEvent = s = window.SQUARESPACE_SENTRY.captureEvent;
            t.configureScope = u = window.SQUARESPACE_SENTRY.configureScope;
            t.withScope = c = window.SQUARESPACE_SENTRY.withScope
        } else {
            t.captureMessage = i = l;
            t.captureException = a = l;
            t.captureEvent = s = l;
            t.configureScope = u = function e() { };
            t.withScope = c = function e() { }
        }
    }
});
//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/performance-62bec8330fe6c68cb5715-min.en-US.js.map