"use strict";
(self.webpackChunkaccount_wrapper =
  self.webpackChunkaccount_wrapper || []).push([
  [88],
  {
    9537: (e, t, n) => {
      (n.d(t, { Z: () => i }), n(2222));
      var r = "[account-wrapper]",
        o = function (e) {},
        a = function (e) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1;
            o < t;
            o++
          )
            n[o - 1] = arguments[o];
          e.apply(void 0, [r].concat(n));
        };
      const i = {
        debug: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          o.apply(void 0, [console.log].concat(t));
        },
        debugError: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          o.apply(void 0, [console.error].concat(t));
        },
        info: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          a.apply(void 0, [console.log].concat(t));
        },
        warn: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          a.apply(void 0, [console.warn].concat(t));
        },
        error: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          a.apply(void 0, [console.error].concat(t));
        },
      };
    },
    9741: (e, t, n) => {
      (n.d(t, { default: () => b }),
        n(7042),
        n(8309),
        n(2526),
        n(1817),
        n(2165));
      var r = n(5861),
        o = n(8152),
        a = n(5671),
        i = n(1656),
        s = n(4687),
        c = n.n(s),
        u =
          (n(4916),
          n(3123),
          n(6992),
          n(1539),
          n(8783),
          n(3948),
          n(1637),
          n(2222),
          n(9714),
          n(6699),
          n(2023),
          n(1038),
          n(8674),
          n(5306),
          n(2707),
          n(7941),
          n(9600),
          n(4723),
          n(1521)),
        l = n.n(u),
        g = n(8555),
        h = n(9537);
      function f(e, t) {
        var n =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (e) {
                if ("string" == typeof e) return d(e, t);
                var n = {}.toString.call(e).slice(8, -1);
                return (
                  "Object" === n && e.constructor && (n = e.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(e)
                    : "Arguments" === n ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      ? d(e, t)
                      : void 0
                );
              }
            })(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        }
        var a,
          i = !0,
          s = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return ((i = e.done), e);
          },
          e: function (e) {
            ((s = !0), (a = e));
          },
          f: function () {
            try {
              i || null == n.return || n.return();
            } finally {
              if (s) throw a;
            }
          },
        };
      }
      function d(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var p = "/auth/",
        m =
          "/consent/gaming/v1-1/enterprise/v1-1?trackTechnicalData&trackBehavioralData",
        v =
          "/consent/gaming/v1-1?trackTechnicalData&trackBehavioralData&region=CN",
        S =
          "/consent/enterprise/v1-1?trackTechnicalData&trackBehavioralData&region=CN",
        y = {
          gaming: "gaming",
          developer: "enterprise",
          enterprise: "enterprise",
          developersbusiness: "enterprise",
        },
        w = !!sessionStorage.getItem("jso"),
        b = (function () {
          function e(t) {
            ((0, a.Z)(this, e), (this.configs = t));
          }
          var t, n;
          return (
            (0, i.Z)(e, [
              {
                key: "authorize",
                value: function (e, t) {
                  var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : null;
                  (localStorage.removeItem(this.configs.SESSION_ITEM_NAME),
                    localStorage.removeItem(this.configs.LAST_LOGIN),
                    localStorage.removeItem(this.configs.PRIVACY_ITEM_NAME));
                  var r = e.split("-"),
                    a = (0, o.Z)(r, 2),
                    i = a[0],
                    s = a[1],
                    c = new URLSearchParams({
                      redirect_uri: location.href,
                      client_id: this.configs.CLIENT_ID,
                      idp_id: this.configs.JARVIS_IDP_ID,
                      ui_locales: "".concat(i, "-").concat(s.toUpperCase()),
                    });
                  (t && c.set("prompt", t),
                    n && c.set("login_hint", n),
                    (window.location.href = ""
                      .concat(p, "?")
                      .concat(c.toString())));
                },
              },
              {
                key: "getLocalSession",
                value: function (e) {
                  (h.Z.debug(
                    "getLocalSession: getting local session from the below item",
                  ),
                    h.Z.debug(this.configs.SESSION_ITEM_NAME));
                  var t = JSON.parse(
                    localStorage.getItem(this.configs.SESSION_ITEM_NAME),
                  );
                  return (
                    !!t &&
                    (h.Z.debug(
                      "getLocalSession: session found in local storage",
                    ),
                    h.Z.debug(t),
                    new Date(t.expiration) > new Date()
                      ? (e(t), !0)
                      : (h.Z.debug("getLocalSession: session expired"), !1))
                  );
                },
              },
              {
                key: "getSsoSession",
                value: function (e) {
                  var t = JSON.parse(
                    localStorage.getItem(
                      localStorage.getItem(this.configs.LAST_LOGIN),
                    ),
                  );
                  return (
                    !!(
                      t &&
                      this.configs.SUPPORTED_IDPS.includes(t.idp_id) &&
                      new Date(t.expiration) > new Date()
                    ) && (e(t), !0)
                  );
                },
              },
              {
                key: "getAuthHints",
                value: function () {
                  var e = this.configs.urlParams.get("loginhint");
                  if (e)
                    return (
                      this.configs.urlParams.delete("loginhint"),
                      window.history.replaceState(
                        null,
                        null,
                        ""
                          .concat(
                            Array.from(this.configs.urlParams.values()).length >
                              0
                              ? "?"
                              : location.pathname,
                          )
                          .concat(this.configs.urlParams.toString()),
                      ),
                      {
                        timestamp: new Date().toISOString(),
                        login_hint: e,
                        idp_id: "HdpDyyR1DqQFapN2MBk5kjJgAvu6UTXRDgtwLhQjrH8",
                      }
                    );
                  var t = this.configs.urlParams.get("jso");
                  if (t)
                    try {
                      (h.Z.debug("jso passed: ", t),
                        (w = !0),
                        sessionStorage.setItem("jso", t));
                      var n = JSON.parse(atob((0, g.Df)(t)));
                      if (
                        (this.configs.urlParams.delete("jso"),
                        window.history.replaceState(
                          null,
                          null,
                          ""
                            .concat(
                              Array.from(this.configs.urlParams.values())
                                .length > 0
                                ? "?"
                                : location.pathname,
                            )
                            .concat(this.configs.urlParams.toString()),
                        ),
                        !n.loginHint)
                      )
                        throw "jso missing login hint";
                      return {
                        timestamp: new Date().toISOString(),
                        login_hint: n.loginHint,
                        idp_id: n.idpId,
                      };
                    } catch (e) {
                      h.Z.debug("error parsing the passing jso param", e);
                    }
                  return JSON.parse(
                    localStorage.getItem(this.configs.LOGIN_HINTS_ITEM_NAME),
                  );
                },
              },
              {
                key: "getAuthHintsSession",
                value:
                  ((n = (0, r.Z)(
                    c().mark(function e(t) {
                      var n = this;
                      return c().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return e.abrupt(
                                "return",
                                new Promise(function (e) {
                                  var r = n.getAuthHints();
                                  if (
                                    (h.Z.debug(
                                      "getAuthHintsSession: auth hints",
                                    ),
                                    h.Z.debug(r),
                                    r &&
                                      r.login_hint &&
                                      new Date(r.timestamp).getTime() + 36e5 >
                                        new Date().getTime())
                                  ) {
                                    h.Z.debug(
                                      "getAuthHintsSession: auth hints valid, starting silent login",
                                    );
                                    var a = document.createElement("iframe"),
                                      i = t.split("-"),
                                      s = (0, o.Z)(i, 2),
                                      c = s[0],
                                      u = s[1],
                                      l = new URLSearchParams({
                                        redirect_uri: location.href,
                                        client_id: n.configs.CLIENT_ID,
                                        idp_id:
                                          "PDiAhv2kJTFeQ7WOPqiQ2tRZ7lGhR2X11dXvM4TZSxg",
                                        ui_locales: ""
                                          .concat(c, "-")
                                          .concat(u.toUpperCase()),
                                        prompt: "none",
                                        login_hint: r.login_hint,
                                      });
                                    ((a.src = ""
                                      .concat(location.origin)
                                      .concat(p, "?")
                                      .concat(l.toString())),
                                      h.Z.debug("iframe URL", a.src),
                                      (a.hidden = !0));
                                    var g = setTimeout(function () {
                                      (h.Z.debug("silent login timed out"),
                                        e(!1));
                                    }, n.configs.SSO_TIMEOUT || 3e3);
                                    window.addEventListener(
                                      "message",
                                      function (t) {
                                        "success" ===
                                        (null == t ? void 0 : t.data)
                                          ? (h.Z.debug(
                                              "getAuthHintsSession: silent login successful",
                                            ),
                                            clearTimeout(g),
                                            document.body.removeChild(f),
                                            e(
                                              JSON.parse(
                                                localStorage.getItem(
                                                  n.configs.SESSION_ITEM_NAME,
                                                ),
                                              ),
                                            ))
                                          : "failure" ===
                                              (null == t ? void 0 : t.data) &&
                                            (clearTimeout(g),
                                            document.body.removeChild(f),
                                            h.Z.debug("silent login failed"),
                                            e(!1));
                                      },
                                    );
                                    var f = document.body.appendChild(a);
                                  } else
                                    (h.Z.debug(
                                      "getAuthHintsSession: auth hints not valid",
                                    ),
                                      e(!1));
                                }),
                              );
                            case 1:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    }),
                  )),
                  function (e) {
                    return n.apply(this, arguments);
                  }),
              },
              {
                key: "getSession",
                value:
                  ((t = (0, r.Z)(
                    c().mark(function e(t) {
                      var n = this;
                      return c().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  this.configs.urlParams.has("jso") ||
                                  this.configs.urlParams.has("loginhint")
                                ) {
                                  e.next = 5;
                                  break;
                                }
                                return (
                                  h.Z.debug(
                                    "getSession: no jso or loginhint params, starting with local session",
                                  ),
                                  e.abrupt(
                                    "return",
                                    new Promise(function (e) {
                                      (0, r.Z)(
                                        c().mark(function r() {
                                          var o;
                                          return c().wrap(function (r) {
                                            for (;;)
                                              switch ((r.prev = r.next)) {
                                                case 0:
                                                  if (!n.getLocalSession(e)) {
                                                    r.next = 2;
                                                    break;
                                                  }
                                                  return r.abrupt("return");
                                                case 2:
                                                  return (
                                                    (r.next = 4),
                                                    n.getAuthHintsSession(t)
                                                  );
                                                case 4:
                                                  ((o = r.sent), e(o));
                                                case 6:
                                                case "end":
                                                  return r.stop();
                                              }
                                          }, r);
                                        }),
                                      )();
                                    }),
                                  )
                                );
                              case 5:
                                return (
                                  h.Z.debug(
                                    "getSession: jso or loginhint params present, starting with auth hints session",
                                  ),
                                  e.abrupt(
                                    "return",
                                    new Promise(function (e) {
                                      (0, r.Z)(
                                        c().mark(function r() {
                                          var o;
                                          return c().wrap(function (r) {
                                            for (;;)
                                              switch ((r.prev = r.next)) {
                                                case 0:
                                                  return (
                                                    (r.next = 2),
                                                    n.getAuthHintsSession(t)
                                                  );
                                                case 2:
                                                  if (!(o = r.sent)) {
                                                    r.next = 8;
                                                    break;
                                                  }
                                                  return (
                                                    e(o),
                                                    r.abrupt("return")
                                                  );
                                                case 8:
                                                  if (!n.getLocalSession(e)) {
                                                    r.next = 10;
                                                    break;
                                                  }
                                                  return r.abrupt("return");
                                                case 10:
                                                  e(!1);
                                                case 11:
                                                case "end":
                                                  return r.stop();
                                              }
                                          }, r);
                                        }),
                                      )();
                                    }),
                                  )
                                );
                              case 7:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  )),
                  function (e) {
                    return t.apply(this, arguments);
                  }),
              },
              {
                key: "getProfile",
                value: function (e) {
                  return l().get(
                    ""
                      .concat(this.configs.STARFLEET_BASE)
                      .concat("/assets/v2/Me"),
                    {
                      params: {},
                      headers: { Authorization: "Bearer ".concat(e) },
                    },
                  );
                },
              },
              {
                key: "getEmailToken",
                value: function (e) {
                  l()
                    .get(
                      ""
                        .concat(this.configs.VOLTRON_BASE)
                        .concat("/services/ets/v1/generate/email/token"),
                      { params: { email: e } },
                    )
                    .then(function (e) {
                      (0, g.d8)(e.data.token, "nvweb_E");
                    })
                    .catch(function (e) {
                      return h.Z.debug("Getting email token", e);
                    });
                },
              },
              {
                key: "getStarfleetToken",
                value: function (e) {
                  l()
                    .get(
                      ""
                        .concat(this.configs.VOLTRON_BASE)
                        .concat("/services/ets/v1/generate/starfleet/token"),
                      { headers: { idToken: e } },
                    )
                    .then(function (e) {
                      (0, g.d8)(e.data.token, "nvweb_S");
                    })
                    .catch(function (e) {
                      return h.Z.debug("Getting starfleet token", e);
                    });
                },
              },
              {
                key: "getanonymousToken",
                value: function () {
                  try {
                    var e = new Date().getTime(),
                      t =
                        (performance &&
                          performance.now &&
                          1e3 * performance.now()) ||
                        0,
                      n = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
                        /[xy]/g,
                        function (n) {
                          var r = 16 * Math.random();
                          return (
                            e > 0
                              ? ((r = (e + r) % 16 | 0),
                                (e = Math.floor(e / 16)))
                              : ((r = (t + r) % 16 | 0),
                                (t = Math.floor(t / 16))),
                            ("x" === n ? r : (3 & r) | 8).toString(16)
                          );
                        },
                      );
                    (0, g.d8)(n, "nvweb_A");
                  } catch (e) {
                    h.Z.debug("Getting anomymous token", e);
                  }
                },
              },
              {
                key: "consentSignupCheck",
                value: function () {
                  var e,
                    t,
                    n =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : [],
                    r = arguments.length > 1 ? arguments[1] : void 0,
                    a =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : "en-us",
                    i = arguments.length > 3 ? arguments[3] : void 0,
                    s = i.tld,
                    c = void 0 === s ? "com" : s,
                    u = i.countryCode,
                    l = void 0 === u ? "US" : u,
                    g = i.isPIPLM4On,
                    d = void 0 === g || g,
                    p = {},
                    b = /\w+(?=\/v)/;
                  n.sort(function (e, t) {
                    return new Date(e.timestamp) - new Date(t.timestamp);
                  });
                  var _,
                    k = f(n);
                  try {
                    for (k.s(); !(_ = k.n()).done; ) {
                      var I = _.value;
                      try {
                        ((t = I.consentAsked.match(b)[0]),
                          (p["".concat(y[t])] = {
                            consentGranted: I.consentGranted,
                          }));
                      } catch (e) {
                        h.Z.debug(
                          "consentAsked URL is not matching the spec",
                          e,
                        );
                      }
                    }
                  } catch (e) {
                    k.e(e);
                  } finally {
                    k.f();
                  }
                  var x =
                    (null === (e = sessionStorage.getItem("consentAsked")) ||
                    void 0 === e
                      ? void 0
                      : e.split(",")) || [];
                  if (
                    (h.Z.debug(p),
                    2 === Object.keys(p).length ||
                      x.includes(r.substring(0, 6)) ||
                      w)
                  )
                    return (
                      sessionStorage.setItem(
                        "parsedConsent",
                        JSON.stringify(p),
                      ),
                      !0
                    );
                  var A = a.split("-"),
                    T = (0, o.Z)(A, 2),
                    Z = T[0],
                    E = T[1];
                  (x.push(r.substring(0, 6)),
                    sessionStorage.setItem("consentAsked", x.join()),
                    history.pushState({}, "", location.href));
                  var D = "";
                  return (
                    (D =
                      "com" === c && "CN" === l
                        ? d
                          ? m
                          : S
                        : "cn" === c
                          ? d
                            ? m
                            : v
                          : m),
                    (location.href = ""
                      .concat(D, "&client_id=")
                      .concat(this.configs.CLIENT_ID, "&redirect_uri=")
                      .concat(encodeURIComponent(location.href), "&locale=")
                      .concat(Z, "_")
                      .concat(E.toUpperCase())),
                    sessionStorage.setItem("parsedConsent", !1),
                    !1
                  );
                },
              },
            ]),
            e
          );
        })();
    },
  },
]);
//# sourceMappingURL=v1.9.8-88.219261712f36846bea08.js.map
