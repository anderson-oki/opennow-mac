/*! For license information please see 44.9119bbd71d18e19fa3db.js.LICENSE.txt */
"use strict";
(self.webpackChunk_monorepo_gfn_home =
  self.webpackChunk_monorepo_gfn_home || []).push([
  [44],
  {
    2684(t, e, n) {
      (n.r(e), n.d(e, { default: () => m }));
      var r = n(7359),
        o = (n(4663), n(5641));
      function a(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      var c = function (t) {
          var e,
            n,
            r,
            o,
            c,
            i,
            u = t.clientId,
            s = t.redirectUri,
            l = t.idpId,
            f = t.prompt,
            d =
              ((c = ((n = "en-us"),
              (r = new URLSearchParams(location.search)),
              (o = window.top.location.hostname.match(/.cn$/)
                ? "zh-cn"
                : (function (t, e) {
                    if (!t) return "";
                    var n = (function (t) {
                      return t.replace(/-|_/g, "-");
                    })(t).split("-");
                    return n.length < 2
                      ? ""
                      : "xx_XX" === e
                        ? ""
                            .concat(n[0].toLowerCase(), "_")
                            .concat(n[1].toUpperCase())
                        : "".concat(n[0], "-").concat(n[1]).toLowerCase();
                  })(null == r ? void 0 : r.get("locale"), "xx-xx") ||
                  (null === (e = window.top.location.pathname) ||
                  void 0 === e ||
                  null === (e = e.split("/")) ||
                  void 0 === e
                    ? void 0
                    : e[1]) ||
                  window.top.document.documentElement.lang ||
                  n),
              /^[a-z]{2}-[a-z]{2}$/i.test(o) ? o.toLowerCase() : n).split("-")),
              (i = 2),
              (function (t) {
                if (Array.isArray(t)) return t;
              })(c) ||
                (function (t, e) {
                  var n =
                    null == t
                      ? null
                      : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                        t["@@iterator"];
                  if (null != n) {
                    var r,
                      o,
                      a,
                      c,
                      i = [],
                      u = !0,
                      s = !1;
                    try {
                      if (((a = (n = n.call(t)).next), 0 === e));
                      else
                        for (
                          ;
                          !(u = (r = a.call(n)).done) &&
                          (i.push(r.value), i.length !== e);
                          u = !0
                        );
                    } catch (t) {
                      ((s = !0), (o = t));
                    } finally {
                      try {
                        if (
                          !u &&
                          null != n.return &&
                          ((c = n.return()), Object(c) !== c)
                        )
                          return;
                      } finally {
                        if (s) throw o;
                      }
                    }
                    return i;
                  }
                })(c, i) ||
                (function (t, e) {
                  if (t) {
                    if ("string" == typeof t) return a(t, e);
                    var n = {}.toString.call(t).slice(8, -1);
                    return (
                      "Object" === n &&
                        t.constructor &&
                        (n = t.constructor.name),
                      "Map" === n || "Set" === n
                        ? Array.from(t)
                        : "Arguments" === n ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                          ? a(t, e)
                          : void 0
                    );
                  }
                })(c, i) ||
                (function () {
                  throw new TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                  );
                })()),
            p = d[0],
            _ = d[1],
            g = new URLSearchParams({
              redirect_uri: s || location.href,
              client_id: u,
              idp_id: l,
              ui_locales: "".concat(p, "-").concat(_.toUpperCase()),
              prompt: f || "select_account",
            }),
            m = new URL("/auth/", window.location.origin);
          ((m.search = g.toString()), (window.location.href = m.toString()));
        },
        i = n(9868),
        u = n(1001),
        s = n(7654),
        l = (n(2536), n(9213), n(3229)),
        f = (n(8496), n(2985));
      function d() {
        var t,
          e,
          n = "function" == typeof Symbol ? Symbol : {},
          r = n.iterator || "@@iterator",
          o = n.toStringTag || "@@toStringTag";
        function a(n, r, o, a) {
          var u = r && r.prototype instanceof i ? r : i,
            s = Object.create(u.prototype);
          return (
            p(
              s,
              "_invoke",
              (function (n, r, o) {
                var a,
                  i,
                  u,
                  s = 0,
                  l = o || [],
                  f = !1,
                  d = {
                    p: 0,
                    n: 0,
                    v: t,
                    a: p,
                    f: p.bind(t, 4),
                    d: function (e, n) {
                      return ((a = e), (i = 0), (u = t), (d.n = n), c);
                    },
                  };
                function p(n, r) {
                  for (
                    i = n, u = r, e = 0;
                    !f && s && !o && e < l.length;
                    e++
                  ) {
                    var o,
                      a = l[e],
                      p = d.p,
                      _ = a[2];
                    n > 3
                      ? (o = _ === r) &&
                        ((u = a[(i = a[4]) ? 5 : ((i = 3), 3)]),
                        (a[4] = a[5] = t))
                      : a[0] <= p &&
                        ((o = n < 2 && p < a[1])
                          ? ((i = 0), (d.v = r), (d.n = a[1]))
                          : p < _ &&
                            (o = n < 3 || a[0] > r || r > _) &&
                            ((a[4] = n), (a[5] = r), (d.n = _), (i = 0)));
                  }
                  if (o || n > 1) return c;
                  throw ((f = !0), r);
                }
                return function (o, l, _) {
                  if (s > 1) throw TypeError("Generator is already running");
                  for (
                    f && 1 === l && p(l, _), i = l, u = _;
                    (e = i < 2 ? t : u) || !f;

                  ) {
                    a ||
                      (i
                        ? i < 3
                          ? (i > 1 && (d.n = -1), p(i, u))
                          : (d.n = u)
                        : (d.v = u));
                    try {
                      if (((s = 2), a)) {
                        if ((i || (o = "next"), (e = a[o]))) {
                          if (!(e = e.call(a, u)))
                            throw TypeError("iterator result is not an object");
                          if (!e.done) return e;
                          ((u = e.value), i < 2 && (i = 0));
                        } else
                          (1 === i && (e = a.return) && e.call(a),
                            i < 2 &&
                              ((u = TypeError(
                                "The iterator does not provide a '" +
                                  o +
                                  "' method",
                              )),
                              (i = 1)));
                        a = t;
                      } else if ((e = (f = d.n < 0) ? u : n.call(r, d)) !== c)
                        break;
                    } catch (e) {
                      ((a = t), (i = 1), (u = e));
                    } finally {
                      s = 1;
                    }
                  }
                  return { value: e, done: f };
                };
              })(n, o, a),
              !0,
            ),
            s
          );
        }
        var c = {};
        function i() {}
        function u() {}
        function s() {}
        e = Object.getPrototypeOf;
        var l = [][r]
            ? e(e([][r]()))
            : (p((e = {}), r, function () {
                return this;
              }),
              e),
          f = (s.prototype = i.prototype = Object.create(l));
        function _(t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, s)
              : ((t.__proto__ = s), p(t, o, "GeneratorFunction")),
            (t.prototype = Object.create(f)),
            t
          );
        }
        return (
          (u.prototype = s),
          p(f, "constructor", s),
          p(s, "constructor", u),
          (u.displayName = "GeneratorFunction"),
          p(s, o, "GeneratorFunction"),
          p(f),
          p(f, o, "Generator"),
          p(f, r, function () {
            return this;
          }),
          p(f, "toString", function () {
            return "[object Generator]";
          }),
          (d = function () {
            return { w: a, m: _ };
          })()
        );
      }
      function p(t, e, n, r) {
        var o = Object.defineProperty;
        try {
          o({}, "", {});
        } catch (t) {
          o = 0;
        }
        ((p = function (t, e, n, r) {
          function a(e, n) {
            p(t, e, function (t) {
              return this._invoke(e, n, t);
            });
          }
          e
            ? o
              ? o(t, e, {
                  value: n,
                  enumerable: !r,
                  configurable: !r,
                  writable: !r,
                })
              : (t[e] = n)
            : (a("next", 0), a("throw", 1), a("return", 2));
        }),
          p(t, e, n, r));
      }
      function _(t, e, n, r, o, a, c) {
        try {
          var i = t[a](c),
            u = i.value;
        } catch (t) {
          return void n(t);
        }
        i.done ? e(u) : Promise.resolve(u).then(r, o);
      }
      var g = r.lazy(function () {
        return n
          .e(599)
          .then(n.t.bind(n, 599, 23))
          .catch(function (t) {
            throw t;
          });
      });
      const m = function () {
        var t = (0, o.useUserStore)(function (t) {
            return t.session;
          }),
          e = (0, f.useSubscriptionStore)(function (t) {
            return t.activePlan;
          }),
          n = (0, f.useSubscriptionStore)(function (t) {
            return t.pausedPlan;
          }),
          a = t.accessToken,
          p = t.expiration,
          m = (function () {
            var t,
              r =
                ((t = d().m(function t(r) {
                  var o, l, f, _, g, m, S, E, w, h, v, A, N;
                  return d().w(
                    function (t) {
                      for (;;)
                        switch ((t.p = t.n)) {
                          case 0:
                            if (
                              ((f = r.product),
                              (_ = r.action),
                              (t.p = 1),
                              (g = a && new Date(p) > new Date()),
                              (m = (0, u.sO)()),
                              (S = (0, u.rD)(m)),
                              _ !== s.Dv.NOTIFY_ME)
                            ) {
                              t.n = 2;
                              break;
                            }
                            return (
                              (E = s.ij[f.membershipTier]),
                              (w = E.notifyMeUrlLoggedIn),
                              (h = E.notifyMeUrlLoggedOut),
                              (window.location.href = ""
                                .concat(window.location.origin, "/")
                                .concat(m)
                                .concat(g ? w : h || i.S.GFN_NOTIFY_ME)),
                              t.a(2)
                            );
                          case 2:
                            if (g) {
                              t.n = 3;
                              break;
                            }
                            return (
                              c({
                                clientId:
                                  "HdpDyyR1DqQFapN2MBk5kjJgAvu6UTXRDgtwLhQjrH8",
                                idpId:
                                  "PDiAhv2kJTFeQ7WOPqiQ2tRZ7lGhR2X11dXvM4TZSxg",
                                redirectUri: ""
                                  .concat(
                                    window.location.origin,
                                    "/gfn/callback?productId=",
                                  )
                                  .concat(f.id, "&locale=")
                                  .concat(m),
                              }),
                              t.a(2)
                            );
                          case 3:
                            ((N = _),
                              (t.n =
                                N === s.Dv.CANCEL
                                  ? 4
                                  : N === s.Dv.CHANGE_PLAN
                                    ? 5
                                    : N === s.Dv.RESUBSCRIBE
                                      ? 6
                                      : (s.Dv.GET_FREE_PLAN, 7)));
                            break;
                          case 4:
                          case 5:
                          case 7:
                            return (
                              (window.location.href = ""
                                .concat(location.origin, "/")
                                .concat(S)
                                .concat(
                                  i.S.GFN_ACCOUNT_MANAGEMENT,
                                  "summary?requestedPlanId=",
                                )
                                .concat(f.id)),
                              t.a(3, 8)
                            );
                          case 6:
                            return (
                              (v = { requestedPlanId: f.id }),
                              (null == e ? void 0 : e.status) ===
                                SUBSCRIPTION_STATUSES.PENDING_CANCEL &&
                                (null == e ||
                                null === (o = e.storageDetails) ||
                                void 0 === o
                                  ? void 0
                                  : o.status) ===
                                  STORAGE_STATUSES.PENDING_CANCEL &&
                                ((v.requestedStorageId =
                                  e.storageDetails.productId),
                                (v.requestedRegion =
                                  e.storageDetails.metroRegion)),
                              (null == n ? void 0 : n.status) ===
                                SUBSCRIPTION_STATUSES.PENDING_CANCEL &&
                                (null == n ||
                                null === (l = n.storageDetails) ||
                                void 0 === l
                                  ? void 0
                                  : l.status) ===
                                  STORAGE_STATUSES.PENDING_CANCEL &&
                                ((v.requestedStorageId =
                                  n.storageDetails.productId),
                                (v.requestedRegion =
                                  n.storageDetails.metroRegion)),
                              (A = new URLSearchParams(v).toString()),
                              (window.location.href = ""
                                .concat(location.origin, "/")
                                .concat(S)
                                .concat(i.S.GFN_ACCOUNT_MANAGEMENT, "summary?")
                                .concat(A)),
                              t.a(3, 8)
                            );
                          case 8:
                            t.n = 10;
                            break;
                          case 9:
                            throw ((t.p = 9), t.v);
                          case 10:
                            return t.a(2);
                        }
                    },
                    t,
                    null,
                    [[1, 9]],
                  );
                })),
                function () {
                  var e = this,
                    n = arguments;
                  return new Promise(function (r, o) {
                    var a = t.apply(e, n);
                    function c(t) {
                      _(a, r, o, c, i, "next", t);
                    }
                    function i(t) {
                      _(a, r, o, c, i, "throw", t);
                    }
                    c(void 0);
                  });
                });
            return function (t) {
              return r.apply(this, arguments);
            };
          })();
        return r.createElement(
          "div",
          { className: "py-[45px]" },
          r.createElement(g, {
            onProductClick: m,
            expandAllFeatures: (0, l.N0)(),
          }),
        );
      };
    },
    9868(t, e, n) {
      n.d(e, { S: () => r });
      var r = {
        GFN_PARTNERS: "/geforce-now/partners/",
        GFN_ACCOUNT: "/account/gfn/",
        GFN_MKT_HOME: "/geforce-now/",
        CUSTOMER_SUPPORT: "https://www.nvidia.com/nvcc",
        SERVER_STATUS: "https://status.geforcenow.com",
        PROFILE: "/account/",
        FAQ: "/geforce-now/faq/",
        GFN_GAMES: "/geforce-now/games/",
        GIFT_CARDS: "/geforce-now/gift-cards/",
        GFN_MEMBERSHIP: "/geforce-now/premium-memberships/",
        SYSTEM_REQUIREMENTS: "/geforce-now/system-reqs/",
        VRS: "/account/redeem/",
        ALL_FEATURES_PAGE:
          "/geforce-now/premium-memberships/#compare-all-gfn-memberships",
        FOUNDERS_BENEFITS: "/geforce-now/founders-benefits/",
        GFN_NOTIFY_ME: "/geforce-now/notify-me/",
        TERMS_OF_USE: "/geforce-now/terms-of-use/",
        MEMBERSHIP_TERMS: "/geforce-now/membership-terms/",
        GFN_ACCOUNT_MANAGEMENT: "/account/gfn/",
        GFN_PAYMENT_LIMITATIONS:
          "https://nvidia.custhelp.com/app/answers/detail/a_id/5632/",
        GFN_PRODUCT_MATRIX: "/manage/",
        GFN_UPGRADE_STORAGE: "/upgrade-storage/",
        GFN_MANAGE_STORAGE: "/manage-storage/",
        GFN_PAYMENT_DETAILS: "/payment-details/",
        MANAGE_STEAM_GAMES:
          "https://play.geforcenow.com/games?game-id=104299974&action=play-game&utm_source=nvidia&utm_campaign=i2p_steam&utm_medium=web",
        INSTALL_TO_PLAY_GAMES: "/geforce-now/games/#install-to-play",
        HOW_TO_PLAY: "/geforce-now/how-to-play/",
        PRIVACY_REQUEST_DATA: function () {
          return "/".concat(
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "en-us",
            "/account/privacy/request-data/",
          );
        },
        USER_BANNED_PROD: "https://static.uas.geforcenow.com/user_banned",
        USER_BANNED_STAGE: "https://static.uas-stg.nvidiagrid.net/user_banned",
      };
    },
  },
]);
