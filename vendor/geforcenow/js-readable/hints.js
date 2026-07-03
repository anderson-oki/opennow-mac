(() => {
  var t = {
      7757: (t, r, e) => {
        t.exports = e(5666);
      },
      9662: (t, r, e) => {
        var n = e(614),
          o = e(6330),
          i = TypeError;
        t.exports = function (t) {
          if (n(t)) return t;
          throw i(o(t) + " is not a function");
        };
      },
      1223: (t, r, e) => {
        var n = e(5112),
          o = e(30),
          i = e(3070).f,
          a = n("unscopables"),
          c = Array.prototype;
        (null == c[a] && i(c, a, { configurable: !0, value: o(null) }),
          (t.exports = function (t) {
            c[a][t] = !0;
          }));
      },
      9670: (t, r, e) => {
        var n = e(111),
          o = String,
          i = TypeError;
        t.exports = function (t) {
          if (n(t)) return t;
          throw i(o(t) + " is not an object");
        };
      },
      1318: (t, r, e) => {
        var n = e(5656),
          o = e(1400),
          i = e(6244),
          a = function (t) {
            return function (r, e, a) {
              var c,
                u = n(r),
                s = i(u),
                f = o(a, s);
              if (t && e != e) {
                for (; s > f; ) if ((c = u[f++]) != c) return !0;
              } else
                for (; s > f; f++)
                  if ((t || f in u) && u[f] === e) return t || f || 0;
              return !t && -1;
            };
          };
        t.exports = { includes: a(!0), indexOf: a(!1) };
      },
      1194: (t, r, e) => {
        var n = e(7293),
          o = e(5112),
          i = e(7392),
          a = o("species");
        t.exports = function (t) {
          return (
            i >= 51 ||
            !n(function () {
              var r = [];
              return (
                ((r.constructor = {})[a] = function () {
                  return { foo: 1 };
                }),
                1 !== r[t](Boolean).foo
              );
            })
          );
        };
      },
      7475: (t, r, e) => {
        var n = e(3157),
          o = e(4411),
          i = e(111),
          a = e(5112)("species"),
          c = Array;
        t.exports = function (t) {
          var r;
          return (
            n(t) &&
              ((r = t.constructor),
              ((o(r) && (r === c || n(r.prototype))) ||
                (i(r) && null === (r = r[a]))) &&
                (r = void 0)),
            void 0 === r ? c : r
          );
        };
      },
      5417: (t, r, e) => {
        var n = e(7475);
        t.exports = function (t, r) {
          return new (n(t))(0 === r ? 0 : r);
        };
      },
      4326: (t, r, e) => {
        var n = e(1702),
          o = n({}.toString),
          i = n("".slice);
        t.exports = function (t) {
          return i(o(t), 8, -1);
        };
      },
      648: (t, r, e) => {
        var n = e(1694),
          o = e(614),
          i = e(4326),
          a = e(5112)("toStringTag"),
          c = Object,
          u =
            "Arguments" ==
            i(
              (function () {
                return arguments;
              })(),
            );
        t.exports = n
          ? i
          : function (t) {
              var r, e, n;
              return void 0 === t
                ? "Undefined"
                : null === t
                  ? "Null"
                  : "string" ==
                      typeof (e = (function (t, r) {
                        try {
                          return t[r];
                        } catch (t) {}
                      })((r = c(t)), a))
                    ? e
                    : u
                      ? i(r)
                      : "Object" == (n = i(r)) && o(r.callee)
                        ? "Arguments"
                        : n;
            };
      },
      9920: (t, r, e) => {
        var n = e(2597),
          o = e(3887),
          i = e(1236),
          a = e(3070);
        t.exports = function (t, r, e) {
          for (var c = o(r), u = a.f, s = i.f, f = 0; f < c.length; f++) {
            var l = c[f];
            n(t, l) || (e && n(e, l)) || u(t, l, s(r, l));
          }
        };
      },
      4964: (t, r, e) => {
        var n = e(5112)("match");
        t.exports = function (t) {
          var r = /./;
          try {
            "/./"[t](r);
          } catch (e) {
            try {
              return ((r[n] = !1), "/./"[t](r));
            } catch (t) {}
          }
          return !1;
        };
      },
      4230: (t, r, e) => {
        var n = e(1702),
          o = e(4488),
          i = e(1340),
          a = /"/g,
          c = n("".replace);
        t.exports = function (t, r, e, n) {
          var u = i(o(t)),
            s = "<" + r;
          return (
            "" !== e && (s += " " + e + '="' + c(i(n), a, "&quot;") + '"'),
            s + ">" + u + "</" + r + ">"
          );
        };
      },
      8880: (t, r, e) => {
        var n = e(9781),
          o = e(3070),
          i = e(9114);
        t.exports = n
          ? function (t, r, e) {
              return o.f(t, r, i(1, e));
            }
          : function (t, r, e) {
              return ((t[r] = e), t);
            };
      },
      9114: (t) => {
        t.exports = function (t, r) {
          return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: r,
          };
        };
      },
      6135: (t, r, e) => {
        "use strict";
        var n = e(4948),
          o = e(3070),
          i = e(9114);
        t.exports = function (t, r, e) {
          var a = n(r);
          a in t ? o.f(t, a, i(0, e)) : (t[a] = e);
        };
      },
      8052: (t, r, e) => {
        var n = e(614),
          o = e(3070),
          i = e(6339),
          a = e(3072);
        t.exports = function (t, r, e, c) {
          c || (c = {});
          var u = c.enumerable,
            s = void 0 !== c.name ? c.name : r;
          if ((n(e) && i(e, s, c), c.global)) u ? (t[r] = e) : a(r, e);
          else {
            try {
              c.unsafe ? t[r] && (u = !0) : delete t[r];
            } catch (t) {}
            u
              ? (t[r] = e)
              : o.f(t, r, {
                  value: e,
                  enumerable: !1,
                  configurable: !c.nonConfigurable,
                  writable: !c.nonWritable,
                });
          }
          return t;
        };
      },
      3072: (t, r, e) => {
        var n = e(7854),
          o = Object.defineProperty;
        t.exports = function (t, r) {
          try {
            o(n, t, { value: r, configurable: !0, writable: !0 });
          } catch (e) {
            n[t] = r;
          }
          return r;
        };
      },
      9781: (t, r, e) => {
        var n = e(7293);
        t.exports = !n(function () {
          return (
            7 !=
            Object.defineProperty({}, 1, {
              get: function () {
                return 7;
              },
            })[1]
          );
        });
      },
      317: (t, r, e) => {
        var n = e(7854),
          o = e(111),
          i = n.document,
          a = o(i) && o(i.createElement);
        t.exports = function (t) {
          return a ? i.createElement(t) : {};
        };
      },
      7207: (t) => {
        var r = TypeError;
        t.exports = function (t) {
          if (t > 9007199254740991) throw r("Maximum allowed index exceeded");
          return t;
        };
      },
      8113: (t, r, e) => {
        var n = e(5005);
        t.exports = n("navigator", "userAgent") || "";
      },
      7392: (t, r, e) => {
        var n,
          o,
          i = e(7854),
          a = e(8113),
          c = i.process,
          u = i.Deno,
          s = (c && c.versions) || (u && u.version),
          f = s && s.v8;
        (f && (o = (n = f.split("."))[0] > 0 && n[0] < 4 ? 1 : +(n[0] + n[1])),
          !o &&
            a &&
            (!(n = a.match(/Edge\/(\d+)/)) || n[1] >= 74) &&
            (n = a.match(/Chrome\/(\d+)/)) &&
            (o = +n[1]),
          (t.exports = o));
      },
      748: (t) => {
        t.exports = [
          "constructor",
          "hasOwnProperty",
          "isPrototypeOf",
          "propertyIsEnumerable",
          "toLocaleString",
          "toString",
          "valueOf",
        ];
      },
      2109: (t, r, e) => {
        var n = e(7854),
          o = e(1236).f,
          i = e(8880),
          a = e(8052),
          c = e(3072),
          u = e(9920),
          s = e(4705);
        t.exports = function (t, r) {
          var e,
            f,
            l,
            p,
            v,
            h = t.target,
            g = t.global,
            y = t.stat;
          if ((e = g ? n : y ? n[h] || c(h, {}) : (n[h] || {}).prototype))
            for (f in r) {
              if (
                ((p = r[f]),
                (l = t.dontCallGetSet ? (v = o(e, f)) && v.value : e[f]),
                !s(g ? f : h + (y ? "." : "#") + f, t.forced) && void 0 !== l)
              ) {
                if (typeof p == typeof l) continue;
                u(p, l);
              }
              ((t.sham || (l && l.sham)) && i(p, "sham", !0), a(e, f, p, t));
            }
        };
      },
      7293: (t) => {
        t.exports = function (t) {
          try {
            return !!t();
          } catch (t) {
            return !0;
          }
        };
      },
      4374: (t, r, e) => {
        var n = e(7293);
        t.exports = !n(function () {
          var t = function () {}.bind();
          return "function" != typeof t || t.hasOwnProperty("prototype");
        });
      },
      6916: (t, r, e) => {
        var n = e(4374),
          o = Function.prototype.call;
        t.exports = n
          ? o.bind(o)
          : function () {
              return o.apply(o, arguments);
            };
      },
      6530: (t, r, e) => {
        var n = e(9781),
          o = e(2597),
          i = Function.prototype,
          a = n && Object.getOwnPropertyDescriptor,
          c = o(i, "name"),
          u = c && "something" === function () {}.name,
          s = c && (!n || (n && a(i, "name").configurable));
        t.exports = { EXISTS: c, PROPER: u, CONFIGURABLE: s };
      },
      1702: (t, r, e) => {
        var n = e(4374),
          o = Function.prototype,
          i = o.bind,
          a = o.call,
          c = n && i.bind(a, a);
        t.exports = n
          ? function (t) {
              return t && c(t);
            }
          : function (t) {
              return (
                t &&
                function () {
                  return a.apply(t, arguments);
                }
              );
            };
      },
      5005: (t, r, e) => {
        var n = e(7854),
          o = e(614),
          i = function (t) {
            return o(t) ? t : void 0;
          };
        t.exports = function (t, r) {
          return arguments.length < 2 ? i(n[t]) : n[t] && n[t][r];
        };
      },
      8173: (t, r, e) => {
        var n = e(9662);
        t.exports = function (t, r) {
          var e = t[r];
          return null == e ? void 0 : n(e);
        };
      },
      7854: (t, r, e) => {
        var n = function (t) {
          return t && t.Math == Math && t;
        };
        t.exports =
          n("object" == typeof globalThis && globalThis) ||
          n("object" == typeof window && window) ||
          n("object" == typeof self && self) ||
          n("object" == typeof e.g && e.g) ||
          (function () {
            return this;
          })() ||
          Function("return this")();
      },
      2597: (t, r, e) => {
        var n = e(1702),
          o = e(7908),
          i = n({}.hasOwnProperty);
        t.exports =
          Object.hasOwn ||
          function (t, r) {
            return i(o(t), r);
          };
      },
      3501: (t) => {
        t.exports = {};
      },
      490: (t, r, e) => {
        var n = e(5005);
        t.exports = n("document", "documentElement");
      },
      4664: (t, r, e) => {
        var n = e(9781),
          o = e(7293),
          i = e(317);
        t.exports =
          !n &&
          !o(function () {
            return (
              7 !=
              Object.defineProperty(i("div"), "a", {
                get: function () {
                  return 7;
                },
              }).a
            );
          });
      },
      8361: (t, r, e) => {
        var n = e(1702),
          o = e(7293),
          i = e(4326),
          a = Object,
          c = n("".split);
        t.exports = o(function () {
          return !a("z").propertyIsEnumerable(0);
        })
          ? function (t) {
              return "String" == i(t) ? c(t, "") : a(t);
            }
          : a;
      },
      2788: (t, r, e) => {
        var n = e(1702),
          o = e(614),
          i = e(5465),
          a = n(Function.toString);
        (o(i.inspectSource) ||
          (i.inspectSource = function (t) {
            return a(t);
          }),
          (t.exports = i.inspectSource));
      },
      9909: (t, r, e) => {
        var n,
          o,
          i,
          a = e(8536),
          c = e(7854),
          u = e(1702),
          s = e(111),
          f = e(8880),
          l = e(2597),
          p = e(5465),
          v = e(6200),
          h = e(3501),
          g = "Object already initialized",
          y = c.TypeError,
          d = c.WeakMap;
        if (a || p.state) {
          var m = p.state || (p.state = new d()),
            b = u(m.get),
            x = u(m.has),
            w = u(m.set);
          ((n = function (t, r) {
            if (x(m, t)) throw new y(g);
            return ((r.facade = t), w(m, t, r), r);
          }),
            (o = function (t) {
              return b(m, t) || {};
            }),
            (i = function (t) {
              return x(m, t);
            }));
        } else {
          var O = v("state");
          ((h[O] = !0),
            (n = function (t, r) {
              if (l(t, O)) throw new y(g);
              return ((r.facade = t), f(t, O, r), r);
            }),
            (o = function (t) {
              return l(t, O) ? t[O] : {};
            }),
            (i = function (t) {
              return l(t, O);
            }));
        }
        t.exports = {
          set: n,
          get: o,
          has: i,
          enforce: function (t) {
            return i(t) ? o(t) : n(t, {});
          },
          getterFor: function (t) {
            return function (r) {
              var e;
              if (!s(r) || (e = o(r)).type !== t)
                throw y("Incompatible receiver, " + t + " required");
              return e;
            };
          },
        };
      },
      3157: (t, r, e) => {
        var n = e(4326);
        t.exports =
          Array.isArray ||
          function (t) {
            return "Array" == n(t);
          };
      },
      614: (t) => {
        t.exports = function (t) {
          return "function" == typeof t;
        };
      },
      4411: (t, r, e) => {
        var n = e(1702),
          o = e(7293),
          i = e(614),
          a = e(648),
          c = e(5005),
          u = e(2788),
          s = function () {},
          f = [],
          l = c("Reflect", "construct"),
          p = /^\s*(?:class|function)\b/,
          v = n(p.exec),
          h = !p.exec(s),
          g = function (t) {
            if (!i(t)) return !1;
            try {
              return (l(s, f, t), !0);
            } catch (t) {
              return !1;
            }
          },
          y = function (t) {
            if (!i(t)) return !1;
            switch (a(t)) {
              case "AsyncFunction":
              case "GeneratorFunction":
              case "AsyncGeneratorFunction":
                return !1;
            }
            try {
              return h || !!v(p, u(t));
            } catch (t) {
              return !0;
            }
          };
        ((y.sham = !0),
          (t.exports =
            !l ||
            o(function () {
              var t;
              return (
                g(g.call) ||
                !g(Object) ||
                !g(function () {
                  t = !0;
                }) ||
                t
              );
            })
              ? y
              : g));
      },
      4705: (t, r, e) => {
        var n = e(7293),
          o = e(614),
          i = /#|\.prototype\./,
          a = function (t, r) {
            var e = u[c(t)];
            return e == f || (e != s && (o(r) ? n(r) : !!r));
          },
          c = (a.normalize = function (t) {
            return String(t).replace(i, ".").toLowerCase();
          }),
          u = (a.data = {}),
          s = (a.NATIVE = "N"),
          f = (a.POLYFILL = "P");
        t.exports = a;
      },
      111: (t, r, e) => {
        var n = e(614);
        t.exports = function (t) {
          return "object" == typeof t ? null !== t : n(t);
        };
      },
      1913: (t) => {
        t.exports = !1;
      },
      7850: (t, r, e) => {
        var n = e(111),
          o = e(4326),
          i = e(5112)("match");
        t.exports = function (t) {
          var r;
          return n(t) && (void 0 !== (r = t[i]) ? !!r : "RegExp" == o(t));
        };
      },
      2190: (t, r, e) => {
        var n = e(5005),
          o = e(614),
          i = e(7976),
          a = e(3307),
          c = Object;
        t.exports = a
          ? function (t) {
              return "symbol" == typeof t;
            }
          : function (t) {
              var r = n("Symbol");
              return o(r) && i(r.prototype, c(t));
            };
      },
      6244: (t, r, e) => {
        var n = e(7466);
        t.exports = function (t) {
          return n(t.length);
        };
      },
      6339: (t, r, e) => {
        var n = e(7293),
          o = e(614),
          i = e(2597),
          a = e(9781),
          c = e(6530).CONFIGURABLE,
          u = e(2788),
          s = e(9909),
          f = s.enforce,
          l = s.get,
          p = Object.defineProperty,
          v =
            a &&
            !n(function () {
              return 8 !== p(function () {}, "length", { value: 8 }).length;
            }),
          h = String(String).split("String"),
          g = (t.exports = function (t, r, e) {
            ("Symbol(" === String(r).slice(0, 7) &&
              (r = "[" + String(r).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
              e && e.getter && (r = "get " + r),
              e && e.setter && (r = "set " + r),
              (!i(t, "name") || (c && t.name !== r)) &&
                (a
                  ? p(t, "name", { value: r, configurable: !0 })
                  : (t.name = r)),
              v &&
                e &&
                i(e, "arity") &&
                t.length !== e.arity &&
                p(t, "length", { value: e.arity }));
            try {
              e && i(e, "constructor") && e.constructor
                ? a && p(t, "prototype", { writable: !1 })
                : t.prototype && (t.prototype = void 0);
            } catch (t) {}
            var n = f(t);
            return (
              i(n, "source") ||
                (n.source = h.join("string" == typeof r ? r : "")),
              t
            );
          });
        Function.prototype.toString = g(function () {
          return (o(this) && l(this).source) || u(this);
        }, "toString");
      },
      4758: (t) => {
        var r = Math.ceil,
          e = Math.floor;
        t.exports =
          Math.trunc ||
          function (t) {
            var n = +t;
            return (n > 0 ? e : r)(n);
          };
      },
      133: (t, r, e) => {
        var n = e(7392),
          o = e(7293);
        t.exports =
          !!Object.getOwnPropertySymbols &&
          !o(function () {
            var t = Symbol();
            return (
              !String(t) ||
              !(Object(t) instanceof Symbol) ||
              (!Symbol.sham && n && n < 41)
            );
          });
      },
      8536: (t, r, e) => {
        var n = e(7854),
          o = e(614),
          i = e(2788),
          a = n.WeakMap;
        t.exports = o(a) && /native code/.test(i(a));
      },
      3929: (t, r, e) => {
        var n = e(7850),
          o = TypeError;
        t.exports = function (t) {
          if (n(t)) throw o("The method doesn't accept regular expressions");
          return t;
        };
      },
      30: (t, r, e) => {
        var n,
          o = e(9670),
          i = e(6048),
          a = e(748),
          c = e(3501),
          u = e(490),
          s = e(317),
          f = e(6200)("IE_PROTO"),
          l = function () {},
          p = function (t) {
            return "<script>" + t + "<\/script>";
          },
          v = function (t) {
            (t.write(p("")), t.close());
            var r = t.parentWindow.Object;
            return ((t = null), r);
          },
          h = function () {
            try {
              n = new ActiveXObject("htmlfile");
            } catch (t) {}
            var t, r;
            h =
              "undefined" != typeof document
                ? document.domain && n
                  ? v(n)
                  : (((r = s("iframe")).style.display = "none"),
                    u.appendChild(r),
                    (r.src = String("javascript:")),
                    (t = r.contentWindow.document).open(),
                    t.write(p("document.F=Object")),
                    t.close(),
                    t.F)
                : v(n);
            for (var e = a.length; e--; ) delete h.prototype[a[e]];
            return h();
          };
        ((c[f] = !0),
          (t.exports =
            Object.create ||
            function (t, r) {
              var e;
              return (
                null !== t
                  ? ((l.prototype = o(t)),
                    (e = new l()),
                    (l.prototype = null),
                    (e[f] = t))
                  : (e = h()),
                void 0 === r ? e : i.f(e, r)
              );
            }));
      },
      6048: (t, r, e) => {
        var n = e(9781),
          o = e(3353),
          i = e(3070),
          a = e(9670),
          c = e(5656),
          u = e(1956);
        r.f =
          n && !o
            ? Object.defineProperties
            : function (t, r) {
                a(t);
                for (var e, n = c(r), o = u(r), s = o.length, f = 0; s > f; )
                  i.f(t, (e = o[f++]), n[e]);
                return t;
              };
      },
      3070: (t, r, e) => {
        var n = e(9781),
          o = e(4664),
          i = e(3353),
          a = e(9670),
          c = e(4948),
          u = TypeError,
          s = Object.defineProperty,
          f = Object.getOwnPropertyDescriptor;
        r.f = n
          ? i
            ? function (t, r, e) {
                if (
                  (a(t),
                  (r = c(r)),
                  a(e),
                  "function" == typeof t &&
                    "prototype" === r &&
                    "value" in e &&
                    "writable" in e &&
                    !e.writable)
                ) {
                  var n = f(t, r);
                  n &&
                    n.writable &&
                    ((t[r] = e.value),
                    (e = {
                      configurable:
                        "configurable" in e ? e.configurable : n.configurable,
                      enumerable:
                        "enumerable" in e ? e.enumerable : n.enumerable,
                      writable: !1,
                    }));
                }
                return s(t, r, e);
              }
            : s
          : function (t, r, e) {
              if ((a(t), (r = c(r)), a(e), o))
                try {
                  return s(t, r, e);
                } catch (t) {}
              if ("get" in e || "set" in e) throw u("Accessors not supported");
              return ("value" in e && (t[r] = e.value), t);
            };
      },
      1236: (t, r, e) => {
        var n = e(9781),
          o = e(6916),
          i = e(5296),
          a = e(9114),
          c = e(5656),
          u = e(4948),
          s = e(2597),
          f = e(4664),
          l = Object.getOwnPropertyDescriptor;
        r.f = n
          ? l
          : function (t, r) {
              if (((t = c(t)), (r = u(r)), f))
                try {
                  return l(t, r);
                } catch (t) {}
              if (s(t, r)) return a(!o(i.f, t, r), t[r]);
            };
      },
      8006: (t, r, e) => {
        var n = e(6324),
          o = e(748).concat("length", "prototype");
        r.f =
          Object.getOwnPropertyNames ||
          function (t) {
            return n(t, o);
          };
      },
      5181: (t, r) => {
        r.f = Object.getOwnPropertySymbols;
      },
      7976: (t, r, e) => {
        var n = e(1702);
        t.exports = n({}.isPrototypeOf);
      },
      6324: (t, r, e) => {
        var n = e(1702),
          o = e(2597),
          i = e(5656),
          a = e(1318).indexOf,
          c = e(3501),
          u = n([].push);
        t.exports = function (t, r) {
          var e,
            n = i(t),
            s = 0,
            f = [];
          for (e in n) !o(c, e) && o(n, e) && u(f, e);
          for (; r.length > s; ) o(n, (e = r[s++])) && (~a(f, e) || u(f, e));
          return f;
        };
      },
      1956: (t, r, e) => {
        var n = e(6324),
          o = e(748);
        t.exports =
          Object.keys ||
          function (t) {
            return n(t, o);
          };
      },
      5296: (t, r) => {
        "use strict";
        var e = {}.propertyIsEnumerable,
          n = Object.getOwnPropertyDescriptor,
          o = n && !e.call({ 1: 2 }, 1);
        r.f = o
          ? function (t) {
              var r = n(this, t);
              return !!r && r.enumerable;
            }
          : e;
      },
      2140: (t, r, e) => {
        var n = e(6916),
          o = e(614),
          i = e(111),
          a = TypeError;
        t.exports = function (t, r) {
          var e, c;
          if ("string" === r && o((e = t.toString)) && !i((c = n(e, t))))
            return c;
          if (o((e = t.valueOf)) && !i((c = n(e, t)))) return c;
          if ("string" !== r && o((e = t.toString)) && !i((c = n(e, t))))
            return c;
          throw a("Can't convert object to primitive value");
        };
      },
      3887: (t, r, e) => {
        var n = e(5005),
          o = e(1702),
          i = e(8006),
          a = e(5181),
          c = e(9670),
          u = o([].concat);
        t.exports =
          n("Reflect", "ownKeys") ||
          function (t) {
            var r = i.f(c(t)),
              e = a.f;
            return e ? u(r, e(t)) : r;
          };
      },
      4488: (t) => {
        var r = TypeError;
        t.exports = function (t) {
          if (null == t) throw r("Can't call method on " + t);
          return t;
        };
      },
      6200: (t, r, e) => {
        var n = e(2309),
          o = e(9711),
          i = n("keys");
        t.exports = function (t) {
          return i[t] || (i[t] = o(t));
        };
      },
      5465: (t, r, e) => {
        var n = e(7854),
          o = e(3072),
          i = "__core-js_shared__",
          a = n[i] || o(i, {});
        t.exports = a;
      },
      2309: (t, r, e) => {
        var n = e(1913),
          o = e(5465);
        (t.exports = function (t, r) {
          return o[t] || (o[t] = void 0 !== r ? r : {});
        })("versions", []).push({
          version: "3.23.4",
          mode: n ? "pure" : "global",
          copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)",
          license: "https://github.com/zloirock/core-js/blob/v3.23.4/LICENSE",
          source: "https://github.com/zloirock/core-js",
        });
      },
      3429: (t, r, e) => {
        var n = e(7293);
        t.exports = function (t) {
          return n(function () {
            var r = ""[t]('"');
            return r !== r.toLowerCase() || r.split('"').length > 3;
          });
        };
      },
      1400: (t, r, e) => {
        var n = e(9303),
          o = Math.max,
          i = Math.min;
        t.exports = function (t, r) {
          var e = n(t);
          return e < 0 ? o(e + r, 0) : i(e, r);
        };
      },
      5656: (t, r, e) => {
        var n = e(8361),
          o = e(4488);
        t.exports = function (t) {
          return n(o(t));
        };
      },
      9303: (t, r, e) => {
        var n = e(4758);
        t.exports = function (t) {
          var r = +t;
          return r != r || 0 === r ? 0 : n(r);
        };
      },
      7466: (t, r, e) => {
        var n = e(9303),
          o = Math.min;
        t.exports = function (t) {
          return t > 0 ? o(n(t), 9007199254740991) : 0;
        };
      },
      7908: (t, r, e) => {
        var n = e(4488),
          o = Object;
        t.exports = function (t) {
          return o(n(t));
        };
      },
      7593: (t, r, e) => {
        var n = e(6916),
          o = e(111),
          i = e(2190),
          a = e(8173),
          c = e(2140),
          u = e(5112),
          s = TypeError,
          f = u("toPrimitive");
        t.exports = function (t, r) {
          if (!o(t) || i(t)) return t;
          var e,
            u = a(t, f);
          if (u) {
            if (
              (void 0 === r && (r = "default"), (e = n(u, t, r)), !o(e) || i(e))
            )
              return e;
            throw s("Can't convert object to primitive value");
          }
          return (void 0 === r && (r = "number"), c(t, r));
        };
      },
      4948: (t, r, e) => {
        var n = e(7593),
          o = e(2190);
        t.exports = function (t) {
          var r = n(t, "string");
          return o(r) ? r : r + "";
        };
      },
      1694: (t, r, e) => {
        var n = {};
        ((n[e(5112)("toStringTag")] = "z"),
          (t.exports = "[object z]" === String(n)));
      },
      1340: (t, r, e) => {
        var n = e(648),
          o = String;
        t.exports = function (t) {
          if ("Symbol" === n(t))
            throw TypeError("Cannot convert a Symbol value to a string");
          return o(t);
        };
      },
      6330: (t) => {
        var r = String;
        t.exports = function (t) {
          try {
            return r(t);
          } catch (t) {
            return "Object";
          }
        };
      },
      9711: (t, r, e) => {
        var n = e(1702),
          o = 0,
          i = Math.random(),
          a = n((1).toString);
        t.exports = function (t) {
          return "Symbol(" + (void 0 === t ? "" : t) + ")_" + a(++o + i, 36);
        };
      },
      3307: (t, r, e) => {
        var n = e(133);
        t.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator;
      },
      3353: (t, r, e) => {
        var n = e(9781),
          o = e(7293);
        t.exports =
          n &&
          o(function () {
            return (
              42 !=
              Object.defineProperty(function () {}, "prototype", {
                value: 42,
                writable: !1,
              }).prototype
            );
          });
      },
      5112: (t, r, e) => {
        var n = e(7854),
          o = e(2309),
          i = e(2597),
          a = e(9711),
          c = e(133),
          u = e(3307),
          s = o("wks"),
          f = n.Symbol,
          l = f && f.for,
          p = u ? f : (f && f.withoutSetter) || a;
        t.exports = function (t) {
          if (!i(s, t) || (!c && "string" != typeof s[t])) {
            var r = "Symbol." + t;
            c && i(f, t) ? (s[t] = f[t]) : (s[t] = u && l ? l(r) : p(r));
          }
          return s[t];
        };
      },
      2222: (t, r, e) => {
        "use strict";
        var n = e(2109),
          o = e(7293),
          i = e(3157),
          a = e(111),
          c = e(7908),
          u = e(6244),
          s = e(7207),
          f = e(6135),
          l = e(5417),
          p = e(1194),
          v = e(5112),
          h = e(7392),
          g = v("isConcatSpreadable"),
          y =
            h >= 51 ||
            !o(function () {
              var t = [];
              return ((t[g] = !1), t.concat()[0] !== t);
            }),
          d = p("concat"),
          m = function (t) {
            if (!a(t)) return !1;
            var r = t[g];
            return void 0 !== r ? !!r : i(t);
          };
        n(
          { target: "Array", proto: !0, arity: 1, forced: !y || !d },
          {
            concat: function (t) {
              var r,
                e,
                n,
                o,
                i,
                a = c(this),
                p = l(a, 0),
                v = 0;
              for (r = -1, n = arguments.length; r < n; r++)
                if (m((i = -1 === r ? a : arguments[r])))
                  for (o = u(i), s(v + o), e = 0; e < o; e++, v++)
                    e in i && f(p, v, i[e]);
                else (s(v + 1), f(p, v++, i));
              return ((p.length = v), p);
            },
          },
        );
      },
      6699: (t, r, e) => {
        "use strict";
        var n = e(2109),
          o = e(1318).includes,
          i = e(7293),
          a = e(1223);
        (n(
          {
            target: "Array",
            proto: !0,
            forced: i(function () {
              return !Array(1).includes();
            }),
          },
          {
            includes: function (t) {
              return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
            },
          },
        ),
          a("includes"));
      },
      2023: (t, r, e) => {
        "use strict";
        var n = e(2109),
          o = e(1702),
          i = e(3929),
          a = e(4488),
          c = e(1340),
          u = e(4964),
          s = o("".indexOf);
        n(
          { target: "String", proto: !0, forced: !u("includes") },
          {
            includes: function (t) {
              return !!~s(
                c(a(this)),
                c(i(t)),
                arguments.length > 1 ? arguments[1] : void 0,
              );
            },
          },
        );
      },
      86: (t, r, e) => {
        "use strict";
        var n = e(2109),
          o = e(4230);
        n(
          { target: "String", proto: !0, forced: e(3429)("sub") },
          {
            sub: function () {
              return o(this, "sub", "", "");
            },
          },
        );
      },
      5666: (t) => {
        var r = (function (t) {
          "use strict";
          var r,
            e = Object.prototype,
            n = e.hasOwnProperty,
            o = "function" == typeof Symbol ? Symbol : {},
            i = o.iterator || "@@iterator",
            a = o.asyncIterator || "@@asyncIterator",
            c = o.toStringTag || "@@toStringTag";
          function u(t, r, e) {
            return (
              Object.defineProperty(t, r, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[r]
            );
          }
          try {
            u({}, "");
          } catch (t) {
            u = function (t, r, e) {
              return (t[r] = e);
            };
          }
          function s(t, r, e, n) {
            var o = r && r.prototype instanceof y ? r : y,
              i = Object.create(o.prototype),
              a = new k(n || []);
            return (
              (i._invoke = (function (t, r, e) {
                var n = l;
                return function (o, i) {
                  if (n === v) throw new Error("Generator is already running");
                  if (n === h) {
                    if ("throw" === o) throw i;
                    return _();
                  }
                  for (e.method = o, e.arg = i; ; ) {
                    var a = e.delegate;
                    if (a) {
                      var c = E(a, e);
                      if (c) {
                        if (c === g) continue;
                        return c;
                      }
                    }
                    if ("next" === e.method) e.sent = e._sent = e.arg;
                    else if ("throw" === e.method) {
                      if (n === l) throw ((n = h), e.arg);
                      e.dispatchException(e.arg);
                    } else "return" === e.method && e.abrupt("return", e.arg);
                    n = v;
                    var u = f(t, r, e);
                    if ("normal" === u.type) {
                      if (((n = e.done ? h : p), u.arg === g)) continue;
                      return { value: u.arg, done: e.done };
                    }
                    "throw" === u.type &&
                      ((n = h), (e.method = "throw"), (e.arg = u.arg));
                  }
                };
              })(t, e, a)),
              i
            );
          }
          function f(t, r, e) {
            try {
              return { type: "normal", arg: t.call(r, e) };
            } catch (t) {
              return { type: "throw", arg: t };
            }
          }
          t.wrap = s;
          var l = "suspendedStart",
            p = "suspendedYield",
            v = "executing",
            h = "completed",
            g = {};
          function y() {}
          function d() {}
          function m() {}
          var b = {};
          u(b, i, function () {
            return this;
          });
          var x = Object.getPrototypeOf,
            w = x && x(x(T([])));
          w && w !== e && n.call(w, i) && (b = w);
          var O = (m.prototype = y.prototype = Object.create(b));
          function S(t) {
            ["next", "throw", "return"].forEach(function (r) {
              u(t, r, function (t) {
                return this._invoke(r, t);
              });
            });
          }
          function j(t, r) {
            function e(o, i, a, c) {
              var u = f(t[o], t, i);
              if ("throw" !== u.type) {
                var s = u.arg,
                  l = s.value;
                return l && "object" == typeof l && n.call(l, "__await")
                  ? r.resolve(l.__await).then(
                      function (t) {
                        e("next", t, a, c);
                      },
                      function (t) {
                        e("throw", t, a, c);
                      },
                    )
                  : r.resolve(l).then(
                      function (t) {
                        ((s.value = t), a(s));
                      },
                      function (t) {
                        return e("throw", t, a, c);
                      },
                    );
              }
              c(u.arg);
            }
            var o;
            this._invoke = function (t, n) {
              function i() {
                return new r(function (r, o) {
                  e(t, n, r, o);
                });
              }
              return (o = o ? o.then(i, i) : i());
            };
          }
          function E(t, e) {
            var n = t.iterator[e.method];
            if (n === r) {
              if (((e.delegate = null), "throw" === e.method)) {
                if (
                  t.iterator.return &&
                  ((e.method = "return"),
                  (e.arg = r),
                  E(t, e),
                  "throw" === e.method)
                )
                  return g;
                ((e.method = "throw"),
                  (e.arg = new TypeError(
                    "The iterator does not provide a 'throw' method",
                  )));
              }
              return g;
            }
            var o = f(n, t.iterator, e.arg);
            if ("throw" === o.type)
              return (
                (e.method = "throw"),
                (e.arg = o.arg),
                (e.delegate = null),
                g
              );
            var i = o.arg;
            return i
              ? i.done
                ? ((e[t.resultName] = i.value),
                  (e.next = t.nextLoc),
                  "return" !== e.method && ((e.method = "next"), (e.arg = r)),
                  (e.delegate = null),
                  g)
                : i
              : ((e.method = "throw"),
                (e.arg = new TypeError("iterator result is not an object")),
                (e.delegate = null),
                g);
          }
          function L(t) {
            var r = { tryLoc: t[0] };
            (1 in t && (r.catchLoc = t[1]),
              2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])),
              this.tryEntries.push(r));
          }
          function P(t) {
            var r = t.completion || {};
            ((r.type = "normal"), delete r.arg, (t.completion = r));
          }
          function k(t) {
            ((this.tryEntries = [{ tryLoc: "root" }]),
              t.forEach(L, this),
              this.reset(!0));
          }
          function T(t) {
            if (t) {
              var e = t[i];
              if (e) return e.call(t);
              if ("function" == typeof t.next) return t;
              if (!isNaN(t.length)) {
                var o = -1,
                  a = function e() {
                    for (; ++o < t.length; )
                      if (n.call(t, o))
                        return ((e.value = t[o]), (e.done = !1), e);
                    return ((e.value = r), (e.done = !0), e);
                  };
                return (a.next = a);
              }
            }
            return { next: _ };
          }
          function _() {
            return { value: r, done: !0 };
          }
          return (
            (d.prototype = m),
            u(O, "constructor", m),
            u(m, "constructor", d),
            (d.displayName = u(m, c, "GeneratorFunction")),
            (t.isGeneratorFunction = function (t) {
              var r = "function" == typeof t && t.constructor;
              return (
                !!r &&
                (r === d || "GeneratorFunction" === (r.displayName || r.name))
              );
            }),
            (t.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, m)
                  : ((t.__proto__ = m), u(t, c, "GeneratorFunction")),
                (t.prototype = Object.create(O)),
                t
              );
            }),
            (t.awrap = function (t) {
              return { __await: t };
            }),
            S(j.prototype),
            u(j.prototype, a, function () {
              return this;
            }),
            (t.AsyncIterator = j),
            (t.async = function (r, e, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new j(s(r, e, n, o), i);
              return t.isGeneratorFunction(e)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            S(O),
            u(O, c, "Generator"),
            u(O, i, function () {
              return this;
            }),
            u(O, "toString", function () {
              return "[object Generator]";
            }),
            (t.keys = function (t) {
              var r = [];
              for (var e in t) r.push(e);
              return (
                r.reverse(),
                function e() {
                  for (; r.length; ) {
                    var n = r.pop();
                    if (n in t) return ((e.value = n), (e.done = !1), e);
                  }
                  return ((e.done = !0), e);
                }
              );
            }),
            (t.values = T),
            (k.prototype = {
              constructor: k,
              reset: function (t) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = r),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = r),
                  this.tryEntries.forEach(P),
                  !t)
                )
                  for (var e in this)
                    "t" === e.charAt(0) &&
                      n.call(this, e) &&
                      !isNaN(+e.slice(1)) &&
                      (this[e] = r);
              },
              stop: function () {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function (t) {
                if (this.done) throw t;
                var e = this;
                function o(n, o) {
                  return (
                    (c.type = "throw"),
                    (c.arg = t),
                    (e.next = n),
                    o && ((e.method = "next"), (e.arg = r)),
                    !!o
                  );
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var a = this.tryEntries[i],
                    c = a.completion;
                  if ("root" === a.tryLoc) return o("end");
                  if (a.tryLoc <= this.prev) {
                    var u = n.call(a, "catchLoc"),
                      s = n.call(a, "finallyLoc");
                    if (u && s) {
                      if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                      if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                    } else if (u) {
                      if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    } else {
                      if (!s)
                        throw new Error(
                          "try statement without catch or finally",
                        );
                      if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (t, r) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var o = this.tryEntries[e];
                  if (
                    o.tryLoc <= this.prev &&
                    n.call(o, "finallyLoc") &&
                    this.prev < o.finallyLoc
                  ) {
                    var i = o;
                    break;
                  }
                }
                i &&
                  ("break" === t || "continue" === t) &&
                  i.tryLoc <= r &&
                  r <= i.finallyLoc &&
                  (i = null);
                var a = i ? i.completion : {};
                return (
                  (a.type = t),
                  (a.arg = r),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), g)
                    : this.complete(a)
                );
              },
              complete: function (t, r) {
                if ("throw" === t.type) throw t.arg;
                return (
                  "break" === t.type || "continue" === t.type
                    ? (this.next = t.arg)
                    : "return" === t.type
                      ? ((this.rval = this.arg = t.arg),
                        (this.method = "return"),
                        (this.next = "end"))
                      : "normal" === t.type && r && (this.next = r),
                  g
                );
              },
              finish: function (t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var e = this.tryEntries[r];
                  if (e.finallyLoc === t)
                    return (this.complete(e.completion, e.afterLoc), P(e), g);
                }
              },
              catch: function (t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var e = this.tryEntries[r];
                  if (e.tryLoc === t) {
                    var n = e.completion;
                    if ("throw" === n.type) {
                      var o = n.arg;
                      P(e);
                    }
                    return o;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (t, e, n) {
                return (
                  (this.delegate = {
                    iterator: T(t),
                    resultName: e,
                    nextLoc: n,
                  }),
                  "next" === this.method && (this.arg = r),
                  g
                );
              },
            }),
            t
          );
        })(t.exports);
        try {
          regeneratorRuntime = r;
        } catch (t) {
          "object" == typeof globalThis
            ? (globalThis.regeneratorRuntime = r)
            : Function("r", "regeneratorRuntime = r")(r);
        }
      },
    },
    r = {};
  function e(n) {
    var o = r[n];
    if (void 0 !== o) return o.exports;
    var i = (r[n] = { exports: {} });
    return (t[n](i, i.exports, e), i.exports);
  }
  ((e.n = (t) => {
    var r = t && t.__esModule ? () => t.default : () => t;
    return (e.d(r, { a: r }), r);
  }),
    (e.d = (t, r) => {
      for (var n in r)
        e.o(r, n) &&
          !e.o(t, n) &&
          Object.defineProperty(t, n, { enumerable: !0, get: r[n] });
    }),
    (e.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (t) {
        if ("object" == typeof window) return window;
      }
    })()),
    (e.o = (t, r) => Object.prototype.hasOwnProperty.call(t, r)),
    (() => {
      "use strict";
      function t(t, r, e, n, o, i, a) {
        try {
          var c = t[i](a),
            u = c.value;
        } catch (t) {
          return void e(t);
        }
        c.done ? r(u) : Promise.resolve(u).then(n, o);
      }
      var r = e(7757),
        n = e.n(r);
      (e(6699),
        e(2023),
        e(86),
        e(2222),
        window.addEventListener("message", function (r) {
          var e;
          (console.log("inside the hints message handler"),
            ((e = n().mark(function t() {
              var e, c, u;
              return n().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (
                          [
                            "http://aemlocal.nvidia.com:8080/",
                            "https://geforcenow-stage.nvidia.com",
                            "https://geforcenow-partner.nvidia.com",
                            "https://geforcenow-restricted.nvidia.com",
                            "https://play.geforcenow.com",
                            "https://prod-feat-seamless-login-testing.review.ngc.nvidia.com",
                            "https://ngc-catalog-523.dev.ngc.nvidia.com",
                            "https://catalog.stg.ngc.nvidia.com",
                            "https://catalog.canary.ngc.nvidia.com",
                            "https://catalog.ngc.nvidia.com",
                            "https://stg.ngc.nvidia.com",
                            "https://canary.ngc.nvidia.com",
                            "https://ngc.nvidia.com",
                            "https://developer.nvidia.com",
                            "https://nvid.nvidia.com",
                            "https://build.ngc.nvidia.com",
                            "https://build.nvidia.com",
                            "https://build.canary.ngc.nvidia.com",
                            "https://gfnguru.nvidia.com",
                            "https://marketplace.nvidia.com",
                          ].includes(r.origin)
                        ) {
                          t.next = 3;
                          break;
                        }
                        return (
                          console.log("origin not allowed", r.origin),
                          t.abrupt("return")
                        );
                      case 3:
                        if (
                          (console.log("origin allowed"),
                          (e = !1),
                          document.hasStorageAccess)
                        ) {
                          t.next = 9;
                          break;
                        }
                        ((e = !0), (t.next = 21));
                        break;
                      case 9:
                        return (
                          console.log("querying storage access permission"),
                          (t.next = 12),
                          navigator.permissions.query({
                            name: "storage-access",
                          })
                        );
                      case 12:
                        if (
                          ((c = t.sent),
                          console.log("permissions response", c.state),
                          "granted" !== c.state)
                        ) {
                          t.next = 18;
                          break;
                        }
                        ((e = !0), (t.next = 21));
                        break;
                      case 18:
                        return (
                          (t.next = 20),
                          document.requestStorageAccess({ localStorage: !0 })
                        );
                      case 20:
                        e = t.sent;
                      case 21:
                        if ((console.log("storage access", e), !e)) {
                          t.next = 46;
                          break;
                        }
                        ((t.prev = 23),
                          (t.t0 = r.data.type),
                          (t.next =
                            "read" === t.t0
                              ? 27
                              : "write" === t.t0
                                ? 32
                                : "delete" === t.t0
                                  ? 35
                                  : 38));
                        break;
                      case 27:
                        return (
                          console.log("reading hints"),
                          (u = o()),
                          r.source.postMessage(
                            { payload: u, type: "success" },
                            r.origin,
                          ),
                          console.log("auth hints read", u),
                          t.abrupt("break", 38)
                        );
                      case 32:
                        return (
                          a({
                            login_hint: r.data.login_hint,
                            idp_id: r.data.idp_id,
                            timestamp: r.data.timestamp,
                            sub: r.data.sub,
                          }),
                          r.source.postMessage({ type: "success" }, r.origin),
                          t.abrupt("break", 38)
                        );
                      case 35:
                        return (
                          i(),
                          r.source.postMessage({ type: "success" }, r.origin),
                          t.abrupt("break", 38)
                        );
                      case 38:
                        t.next = 44;
                        break;
                      case 40:
                        ((t.prev = 40),
                          (t.t1 = t.catch(23)),
                          console.log(
                            "error in reading/writing/deleting hints",
                            t.t1,
                          ),
                          r.source.postMessage(
                            { type: "error", payload: t.t1 },
                            r.origin,
                          ));
                      case 44:
                        t.next = 47;
                        break;
                      case 46:
                        r.source.postMessage(
                          {
                            type: "error",
                            payload: {
                              name: "3PC",
                              message: "storage access not granted",
                            },
                          },
                          r.origin,
                        );
                      case 47:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                null,
                [[23, 40]],
              );
            })),
            function () {
              var r = this,
                n = arguments;
              return new Promise(function (o, i) {
                var a = e.apply(r, n);
                function c(r) {
                  t(a, o, i, c, u, "next", r);
                }
                function u(r) {
                  t(a, o, i, c, u, "throw", r);
                }
                c(void 0);
              });
            })());
        }));
      var o = function () {
          return JSON.parse(localStorage.getItem("loginHints"));
        },
        i = function () {
          (localStorage.removeItem("loginHints"),
            (document.cookie = ""
              .concat(
                "loginHints",
                "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; domain=",
              )
              .concat(".nvidia.com", "; path=/")));
        },
        a = function (t) {
          var r;
          (localStorage.setItem("loginHints", JSON.stringify(t)),
            (r = JSON.stringify(t)),
            (document.cookie = ""
              .concat("loginHints", "=")
              .concat(r, "; expires=")
              .concat(
                new Date(new Date().getTime() + 31536e6).toUTCString(),
                "; domain=",
              )
              .concat(".nvidia.com", "; path=/; secure")));
        };
    })());
})();
//# sourceMappingURL=hints.js.map
