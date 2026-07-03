!(function (t) {
  var e = {};
  function r(n) {
    if (e[n]) return e[n].exports;
    var o = (e[n] = { i: n, l: !1, exports: {} });
    return (t[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports);
  }
  ((r.m = t),
    (r.c = e),
    (r.d = function (t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (r.r = function (t) {
      ("undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 }));
    }),
    (r.t = function (t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var o in t)
          r.d(
            n,
            o,
            function (e) {
              return t[e];
            }.bind(null, o),
          );
      return n;
    }),
    (r.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return (r.d(e, "a", e), e);
    }),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = "/assets/starfleet-auth"),
    r((r.s = 93)));
})([
  function (t, e, r) {
    "use strict";
    (function (t) {
      var n = r(20);
      const { toString: o } = Object.prototype,
        { getPrototypeOf: i } = Object,
        a =
          ((s = Object.create(null)),
          (t) => {
            const e = o.call(t);
            return s[e] || (s[e] = e.slice(8, -1).toLowerCase());
          });
      var s;
      const u = (t) => ((t = t.toLowerCase()), (e) => a(e) === t),
        c = (t) => (e) => typeof e === t,
        { isArray: f } = Array,
        l = c("undefined");
      const h = u("ArrayBuffer");
      const p = c("string"),
        d = c("function"),
        y = c("number"),
        g = (t) => null !== t && "object" == typeof t,
        v = (t) => {
          if ("object" !== a(t)) return !1;
          const e = i(t);
          return !(
            (null !== e &&
              e !== Object.prototype &&
              null !== Object.getPrototypeOf(e)) ||
            Symbol.toStringTag in t ||
            Symbol.iterator in t
          );
        },
        m = u("Date"),
        w = u("File"),
        b = u("Blob"),
        E = u("FileList"),
        S = u("URLSearchParams");
      function x(t, e, { allOwnKeys: r = !1 } = {}) {
        if (null == t) return;
        let n, o;
        if (("object" != typeof t && (t = [t]), f(t)))
          for (n = 0, o = t.length; n < o; n++) e.call(null, t[n], n, t);
        else {
          const o = r ? Object.getOwnPropertyNames(t) : Object.keys(t),
            i = o.length;
          let a;
          for (n = 0; n < i; n++) ((a = o[n]), e.call(null, t[a], a, t));
        }
      }
      function _(t, e) {
        e = e.toLowerCase();
        const r = Object.keys(t);
        let n,
          o = r.length;
        for (; o-- > 0; ) if (((n = r[o]), e === n.toLowerCase())) return n;
        return null;
      }
      const O =
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof self
              ? self
              : "undefined" != typeof window
                ? window
                : t,
        A = (t) => !l(t) && t !== O;
      const R =
        ((j = "undefined" != typeof Uint8Array && i(Uint8Array)),
        (t) => j && t instanceof j);
      var j;
      const P = u("HTMLFormElement"),
        T = (
          ({ hasOwnProperty: t }) =>
          (e, r) =>
            t.call(e, r)
        )(Object.prototype),
        U = u("RegExp"),
        L = (t, e) => {
          const r = Object.getOwnPropertyDescriptors(t),
            n = {};
          (x(r, (r, o) => {
            !1 !== e(r, o, t) && (n[o] = r);
          }),
            Object.defineProperties(t, n));
        },
        B = "abcdefghijklmnopqrstuvwxyz",
        N = {
          DIGIT: "0123456789",
          ALPHA: B,
          ALPHA_DIGIT: B + B.toUpperCase() + "0123456789",
        };
      const C = u("AsyncFunction");
      e.a = {
        isArray: f,
        isArrayBuffer: h,
        isBuffer: function (t) {
          return (
            null !== t &&
            !l(t) &&
            null !== t.constructor &&
            !l(t.constructor) &&
            d(t.constructor.isBuffer) &&
            t.constructor.isBuffer(t)
          );
        },
        isFormData: (t) => {
          let e;
          return (
            t &&
            (("function" == typeof FormData && t instanceof FormData) ||
              (d(t.append) &&
                ("formdata" === (e = a(t)) ||
                  ("object" === e &&
                    d(t.toString) &&
                    "[object FormData]" === t.toString()))))
          );
        },
        isArrayBufferView: function (t) {
          let e;
          return (
            (e =
              "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
                ? ArrayBuffer.isView(t)
                : t && t.buffer && h(t.buffer)),
            e
          );
        },
        isString: p,
        isNumber: y,
        isBoolean: (t) => !0 === t || !1 === t,
        isObject: g,
        isPlainObject: v,
        isUndefined: l,
        isDate: m,
        isFile: w,
        isBlob: b,
        isRegExp: U,
        isFunction: d,
        isStream: (t) => g(t) && d(t.pipe),
        isURLSearchParams: S,
        isTypedArray: R,
        isFileList: E,
        forEach: x,
        merge: function t() {
          const { caseless: e } = (A(this) && this) || {},
            r = {},
            n = (n, o) => {
              const i = (e && _(r, o)) || o;
              v(r[i]) && v(n)
                ? (r[i] = t(r[i], n))
                : v(n)
                  ? (r[i] = t({}, n))
                  : f(n)
                    ? (r[i] = n.slice())
                    : (r[i] = n);
            };
          for (let t = 0, e = arguments.length; t < e; t++)
            arguments[t] && x(arguments[t], n);
          return r;
        },
        extend: (t, e, r, { allOwnKeys: o } = {}) => (
          x(
            e,
            (e, o) => {
              r && d(e) ? (t[o] = Object(n.a)(e, r)) : (t[o] = e);
            },
            { allOwnKeys: o },
          ),
          t
        ),
        trim: (t) =>
          t.trim
            ? t.trim()
            : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
        stripBOM: (t) => (65279 === t.charCodeAt(0) && (t = t.slice(1)), t),
        inherits: (t, e, r, n) => {
          ((t.prototype = Object.create(e.prototype, n)),
            (t.prototype.constructor = t),
            Object.defineProperty(t, "super", { value: e.prototype }),
            r && Object.assign(t.prototype, r));
        },
        toFlatObject: (t, e, r, n) => {
          let o, a, s;
          const u = {};
          if (((e = e || {}), null == t)) return e;
          do {
            for (o = Object.getOwnPropertyNames(t), a = o.length; a-- > 0; )
              ((s = o[a]),
                (n && !n(s, t, e)) || u[s] || ((e[s] = t[s]), (u[s] = !0)));
            t = !1 !== r && i(t);
          } while (t && (!r || r(t, e)) && t !== Object.prototype);
          return e;
        },
        kindOf: a,
        kindOfTest: u,
        endsWith: (t, e, r) => {
          ((t = String(t)),
            (void 0 === r || r > t.length) && (r = t.length),
            (r -= e.length));
          const n = t.indexOf(e, r);
          return -1 !== n && n === r;
        },
        toArray: (t) => {
          if (!t) return null;
          if (f(t)) return t;
          let e = t.length;
          if (!y(e)) return null;
          const r = new Array(e);
          for (; e-- > 0; ) r[e] = t[e];
          return r;
        },
        forEachEntry: (t, e) => {
          const r = (t && t[Symbol.iterator]).call(t);
          let n;
          for (; (n = r.next()) && !n.done; ) {
            const r = n.value;
            e.call(t, r[0], r[1]);
          }
        },
        matchAll: (t, e) => {
          let r;
          const n = [];
          for (; null !== (r = t.exec(e)); ) n.push(r);
          return n;
        },
        isHTMLForm: P,
        hasOwnProperty: T,
        hasOwnProp: T,
        reduceDescriptors: L,
        freezeMethods: (t) => {
          L(t, (e, r) => {
            if (d(t) && -1 !== ["arguments", "caller", "callee"].indexOf(r))
              return !1;
            const n = t[r];
            d(n) &&
              ((e.enumerable = !1),
              "writable" in e
                ? (e.writable = !1)
                : e.set ||
                  (e.set = () => {
                    throw Error("Can not rewrite read-only method '" + r + "'");
                  }));
          });
        },
        toObjectSet: (t, e) => {
          const r = {},
            n = (t) => {
              t.forEach((t) => {
                r[t] = !0;
              });
            };
          return (f(t) ? n(t) : n(String(t).split(e)), r);
        },
        toCamelCase: (t) =>
          t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (t, e, r) {
            return e.toUpperCase() + r;
          }),
        noop: () => {},
        toFiniteNumber: (t, e) => ((t = +t), Number.isFinite(t) ? t : e),
        findKey: _,
        global: O,
        isContextDefined: A,
        ALPHABET: N,
        generateString: (t = 16, e = N.ALPHA_DIGIT) => {
          let r = "";
          const { length: n } = e;
          for (; t--; ) r += e[(Math.random() * n) | 0];
          return r;
        },
        isSpecCompliantForm: function (t) {
          return !!(
            t &&
            d(t.append) &&
            "FormData" === t[Symbol.toStringTag] &&
            t[Symbol.iterator]
          );
        },
        toJSONObject: (t) => {
          const e = new Array(10),
            r = (t, n) => {
              if (g(t)) {
                if (e.indexOf(t) >= 0) return;
                if (!("toJSON" in t)) {
                  e[n] = t;
                  const o = f(t) ? [] : {};
                  return (
                    x(t, (t, e) => {
                      const i = r(t, n + 1);
                      !l(i) && (o[e] = i);
                    }),
                    (e[n] = void 0),
                    o
                  );
                }
              }
              return t;
            };
          return r(t, 0);
        },
        isAsyncFn: C,
        isThenable: (t) => t && (g(t) || d(t)) && d(t.then) && d(t.catch),
      };
    }).call(this, r(23));
  },
  function (t, e, r) {
    "use strict";
    var n = r(0);
    function o(t, e, r, n, o) {
      (Error.call(this),
        Error.captureStackTrace
          ? Error.captureStackTrace(this, this.constructor)
          : (this.stack = new Error().stack),
        (this.message = t),
        (this.name = "AxiosError"),
        e && (this.code = e),
        r && (this.config = r),
        n && (this.request = n),
        o && (this.response = o));
    }
    n.a.inherits(o, Error, {
      toJSON: function () {
        return {
          message: this.message,
          name: this.name,
          description: this.description,
          number: this.number,
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          config: n.a.toJSONObject(this.config),
          code: this.code,
          status:
            this.response && this.response.status ? this.response.status : null,
        };
      },
    });
    const i = o.prototype,
      a = {};
    ([
      "ERR_BAD_OPTION_VALUE",
      "ERR_BAD_OPTION",
      "ECONNABORTED",
      "ETIMEDOUT",
      "ERR_NETWORK",
      "ERR_FR_TOO_MANY_REDIRECTS",
      "ERR_DEPRECATED",
      "ERR_BAD_RESPONSE",
      "ERR_BAD_REQUEST",
      "ERR_CANCELED",
      "ERR_NOT_SUPPORT",
      "ERR_INVALID_URL",
    ].forEach((t) => {
      a[t] = { value: t };
    }),
      Object.defineProperties(o, a),
      Object.defineProperty(i, "isAxiosError", { value: !0 }),
      (o.from = (t, e, r, a, s, u) => {
        const c = Object.create(i);
        return (
          n.a.toFlatObject(
            t,
            c,
            function (t) {
              return t !== Error.prototype;
            },
            (t) => "isAxiosError" !== t,
          ),
          o.call(c, t.message, e, r, a, s),
          (c.cause = t),
          (c.name = t.name),
          u && Object.assign(c, u),
          c
        );
      }),
      (e.a = o));
  },
  function (t, e, r) {
    (function (e) {
      var r = function (t) {
        return t && t.Math == Math && t;
      };
      t.exports =
        r("object" == typeof globalThis && globalThis) ||
        r("object" == typeof window && window) ||
        r("object" == typeof self && self) ||
        r("object" == typeof e && e) ||
        Function("return this")();
    }).call(this, r(23));
  },
  function (t, e) {
    var r = {}.hasOwnProperty;
    t.exports = function (t, e) {
      return r.call(t, e);
    };
  },
  function (t, e, r) {
    var n = r(2),
      o = r(34),
      i = r(3),
      a = r(39),
      s = r(40),
      u = r(61),
      c = o("wks"),
      f = n.Symbol,
      l = u ? f : (f && f.withoutSetter) || a;
    t.exports = function (t) {
      return (
        i(c, t) || (s && i(f, t) ? (c[t] = f[t]) : (c[t] = l("Symbol." + t))),
        c[t]
      );
    };
  },
  function (t, e, r) {
    var n = r(53)();
    t.exports = n;
    try {
      regeneratorRuntime = n;
    } catch (t) {
      "object" == typeof globalThis
        ? (globalThis.regeneratorRuntime = n)
        : Function("r", "regeneratorRuntime = r")(n);
    }
  },
  function (t, e, r) {
    "use strict";
    (function (t) {
      var n = r(0),
        o = r(1),
        i = r(21);
      function a(t) {
        return n.a.isPlainObject(t) || n.a.isArray(t);
      }
      function s(t) {
        return n.a.endsWith(t, "[]") ? t.slice(0, -2) : t;
      }
      function u(t, e, r) {
        return t
          ? t
              .concat(e)
              .map(function (t, e) {
                return ((t = s(t)), !r && e ? "[" + t + "]" : t);
              })
              .join(r ? "." : "")
          : e;
      }
      const c = n.a.toFlatObject(n.a, {}, null, function (t) {
        return /^is[A-Z]/.test(t);
      });
      e.a = function (e, r, f) {
        if (!n.a.isObject(e)) throw new TypeError("target must be an object");
        r = r || new (i.a || FormData)();
        const l = (f = n.a.toFlatObject(
            f,
            { metaTokens: !0, dots: !1, indexes: !1 },
            !1,
            function (t, e) {
              return !n.a.isUndefined(e[t]);
            },
          )).metaTokens,
          h = f.visitor || v,
          p = f.dots,
          d = f.indexes,
          y =
            (f.Blob || ("undefined" != typeof Blob && Blob)) &&
            n.a.isSpecCompliantForm(r);
        if (!n.a.isFunction(h))
          throw new TypeError("visitor must be a function");
        function g(e) {
          if (null === e) return "";
          if (n.a.isDate(e)) return e.toISOString();
          if (!y && n.a.isBlob(e))
            throw new o.a("Blob is not supported. Use a Buffer instead.");
          return n.a.isArrayBuffer(e) || n.a.isTypedArray(e)
            ? y && "function" == typeof Blob
              ? new Blob([e])
              : t.from(e)
            : e;
        }
        function v(t, e, o) {
          let i = t;
          if (t && !o && "object" == typeof t)
            if (n.a.endsWith(e, "{}"))
              ((e = l ? e : e.slice(0, -2)), (t = JSON.stringify(t)));
            else if (
              (n.a.isArray(t) &&
                (function (t) {
                  return n.a.isArray(t) && !t.some(a);
                })(t)) ||
              ((n.a.isFileList(t) || n.a.endsWith(e, "[]")) &&
                (i = n.a.toArray(t)))
            )
              return (
                (e = s(e)),
                i.forEach(function (t, o) {
                  !n.a.isUndefined(t) &&
                    null !== t &&
                    r.append(
                      !0 === d ? u([e], o, p) : null === d ? e : e + "[]",
                      g(t),
                    );
                }),
                !1
              );
          return !!a(t) || (r.append(u(o, e, p), g(t)), !1);
        }
        const m = [],
          w = Object.assign(c, {
            defaultVisitor: v,
            convertValue: g,
            isVisitable: a,
          });
        if (!n.a.isObject(e)) throw new TypeError("data must be an object");
        return (
          (function t(e, o) {
            if (!n.a.isUndefined(e)) {
              if (-1 !== m.indexOf(e))
                throw Error("Circular reference detected in " + o.join("."));
              (m.push(e),
                n.a.forEach(e, function (e, i) {
                  !0 ===
                    (!(n.a.isUndefined(e) || null === e) &&
                      h.call(r, e, n.a.isString(i) ? i.trim() : i, o, w)) &&
                    t(e, o ? o.concat(i) : [i]);
                }),
                m.pop());
            }
          })(e),
          r
        );
      };
    }).call(this, r(89).Buffer);
  },
  function (t, e) {
    t.exports = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    };
  },
  function (t, e, r) {
    var n = r(10);
    t.exports = function (t) {
      if (!n(t)) throw TypeError(String(t) + " is not an object");
      return t;
    };
  },
  function (t, e, r) {
    var n = r(12),
      o = r(13),
      i = r(17);
    t.exports = n
      ? function (t, e, r) {
          return o.f(t, e, i(1, r));
        }
      : function (t, e, r) {
          return ((t[e] = r), t);
        };
  },
  function (t, e) {
    t.exports = function (t) {
      return "object" == typeof t ? null !== t : "function" == typeof t;
    };
  },
  function (t, e) {
    function r(t, e, r, n, o, i, a) {
      try {
        var s = t[i](a),
          u = s.value;
      } catch (t) {
        return void r(t);
      }
      s.done ? e(u) : Promise.resolve(u).then(n, o);
    }
    ((t.exports = function (t) {
      return function () {
        var e = this,
          n = arguments;
        return new Promise(function (o, i) {
          var a = t.apply(e, n);
          function s(t) {
            r(a, o, i, s, u, "next", t);
          }
          function u(t) {
            r(a, o, i, s, u, "throw", t);
          }
          s(void 0);
        });
      };
    }),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports));
  },
  function (t, e, r) {
    var n = r(7);
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
  function (t, e, r) {
    var n = r(12),
      o = r(36),
      i = r(8),
      a = r(38),
      s = Object.defineProperty;
    e.f = n
      ? s
      : function (t, e, r) {
          if ((i(t), (e = a(e, !0)), i(r), o))
            try {
              return s(t, e, r);
            } catch (t) {}
          if ("get" in r || "set" in r)
            throw TypeError("Accessors not supported");
          return ("value" in r && (t[e] = r.value), t);
        };
  },
  ,
  function (t, e, r) {
    var n = r(59),
      o = r(33);
    t.exports = function (t) {
      return n(o(t));
    };
  },
  function (t, e) {
    t.exports = !1;
  },
  function (t, e) {
    t.exports = function (t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e,
      };
    };
  },
  function (t, e) {
    t.exports = {};
  },
  function (t, e, r) {
    var n = r(2),
      o = r(9),
      i = r(3),
      a = r(24),
      s = r(44),
      u = r(30),
      c = u.get,
      f = u.enforce,
      l = String(String).split("String");
    (t.exports = function (t, e, r, s) {
      var u = !!s && !!s.unsafe,
        c = !!s && !!s.enumerable,
        h = !!s && !!s.noTargetGet;
      ("function" == typeof r &&
        ("string" != typeof e || i(r, "name") || o(r, "name", e),
        (f(r).source = l.join("string" == typeof e ? e : ""))),
        t !== n
          ? (u ? !h && t[e] && (c = !0) : delete t[e],
            c ? (t[e] = r) : o(t, e, r))
          : c
            ? (t[e] = r)
            : a(e, r));
    })(Function.prototype, "toString", function () {
      return ("function" == typeof this && c(this).source) || s(this);
    });
  },
  function (t, e, r) {
    "use strict";
    function n(t, e) {
      return function () {
        return t.apply(e, arguments);
      };
    }
    r.d(e, "a", function () {
      return n;
    });
  },
  function (t, e, r) {
    "use strict";
    e.a = null;
  },
  function (t, e) {
    function r(e) {
      return (
        (t.exports = r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports),
        r(e)
      );
    }
    ((t.exports = r),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports));
  },
  function (t, e) {
    var r;
    r = (function () {
      return this;
    })();
    try {
      r = r || new Function("return this")();
    } catch (t) {
      "object" == typeof window && (r = window);
    }
    t.exports = r;
  },
  function (t, e, r) {
    var n = r(2),
      o = r(9);
    t.exports = function (t, e) {
      try {
        o(n, t, e);
      } catch (r) {
        n[t] = e;
      }
      return e;
    };
  },
  function (t, e, r) {
    var n,
      o = r(8),
      i = r(62),
      a = r(27),
      s = r(26),
      u = r(67),
      c = r(37),
      f = r(29),
      l = f("IE_PROTO"),
      h = function () {},
      p = function (t) {
        return "<script>" + t + "<\/script>";
      },
      d = function () {
        try {
          n = document.domain && new ActiveXObject("htmlfile");
        } catch (t) {}
        var t, e;
        d = n
          ? (function (t) {
              (t.write(p("")), t.close());
              var e = t.parentWindow.Object;
              return ((t = null), e);
            })(n)
          : (((e = c("iframe")).style.display = "none"),
            u.appendChild(e),
            (e.src = String("javascript:")),
            (t = e.contentWindow.document).open(),
            t.write(p("document.F=Object")),
            t.close(),
            t.F);
        for (var r = a.length; r--; ) delete d.prototype[a[r]];
        return d();
      };
    ((s[l] = !0),
      (t.exports =
        Object.create ||
        function (t, e) {
          var r;
          return (
            null !== t
              ? ((h.prototype = o(t)),
                (r = new h()),
                (h.prototype = null),
                (r[l] = t))
              : (r = d()),
            void 0 === e ? r : i(r, e)
          );
        }));
  },
  function (t, e) {
    t.exports = {};
  },
  function (t, e) {
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
  function (t, e, r) {
    var n = r(43),
      o = r(2),
      i = function (t) {
        return "function" == typeof t ? t : void 0;
      };
    t.exports = function (t, e) {
      return arguments.length < 2
        ? i(n[t]) || i(o[t])
        : (n[t] && n[t][e]) || (o[t] && o[t][e]);
    };
  },
  function (t, e, r) {
    var n = r(34),
      o = r(39),
      i = n("keys");
    t.exports = function (t) {
      return i[t] || (i[t] = o(t));
    };
  },
  function (t, e, r) {
    var n,
      o,
      i,
      a = r(68),
      s = r(2),
      u = r(10),
      c = r(9),
      f = r(3),
      l = r(29),
      h = r(26),
      p = s.WeakMap;
    if (a) {
      var d = new p(),
        y = d.get,
        g = d.has,
        v = d.set;
      ((n = function (t, e) {
        return (v.call(d, t, e), e);
      }),
        (o = function (t) {
          return y.call(d, t) || {};
        }),
        (i = function (t) {
          return g.call(d, t);
        }));
    } else {
      var m = l("state");
      ((h[m] = !0),
        (n = function (t, e) {
          return (c(t, m, e), e);
        }),
        (o = function (t) {
          return f(t, m) ? t[m] : {};
        }),
        (i = function (t) {
          return f(t, m);
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
        return function (e) {
          var r;
          if (!u(e) || (r = o(e)).type !== t)
            throw TypeError("Incompatible receiver, " + t + " required");
          return r;
        };
      },
    };
  },
  function (t, e, r) {
    var n = r(13).f,
      o = r(3),
      i = r(4)("toStringTag");
    t.exports = function (t, e, r) {
      t &&
        !o((t = r ? t : t.prototype), i) &&
        n(t, i, { configurable: !0, value: e });
    };
  },
  function (t, e) {
    var r = {}.toString;
    t.exports = function (t) {
      return r.call(t).slice(8, -1);
    };
  },
  function (t, e) {
    t.exports = function (t) {
      if (null == t) throw TypeError("Can't call method on " + t);
      return t;
    };
  },
  function (t, e, r) {
    var n = r(16),
      o = r(35);
    (t.exports = function (t, e) {
      return o[t] || (o[t] = void 0 !== e ? e : {});
    })("versions", []).push({
      version: "3.6.5",
      mode: n ? "pure" : "global",
      copyright: "© 2020 Denis Pushkarev (zloirock.ru)",
    });
  },
  function (t, e, r) {
    var n = r(2),
      o = r(24),
      i = n["__core-js_shared__"] || o("__core-js_shared__", {});
    t.exports = i;
  },
  function (t, e, r) {
    var n = r(12),
      o = r(7),
      i = r(37);
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
  function (t, e, r) {
    var n = r(2),
      o = r(10),
      i = n.document,
      a = o(i) && o(i.createElement);
    t.exports = function (t) {
      return a ? i.createElement(t) : {};
    };
  },
  function (t, e, r) {
    var n = r(10);
    t.exports = function (t, e) {
      if (!n(t)) return t;
      var r, o;
      if (e && "function" == typeof (r = t.toString) && !n((o = r.call(t))))
        return o;
      if ("function" == typeof (r = t.valueOf) && !n((o = r.call(t)))) return o;
      if (!e && "function" == typeof (r = t.toString) && !n((o = r.call(t))))
        return o;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  function (t, e) {
    var r = 0,
      n = Math.random();
    t.exports = function (t) {
      return (
        "Symbol(" +
        String(void 0 === t ? "" : t) +
        ")_" +
        (++r + n).toString(36)
      );
    };
  },
  function (t, e, r) {
    var n = r(7);
    t.exports =
      !!Object.getOwnPropertySymbols &&
      !n(function () {
        return !String(Symbol());
      });
  },
  function (t, e, r) {
    var n = r(3),
      o = r(15),
      i = r(64).indexOf,
      a = r(26);
    t.exports = function (t, e) {
      var r,
        s = o(t),
        u = 0,
        c = [];
      for (r in s) !n(a, r) && n(s, r) && c.push(r);
      for (; e.length > u; ) n(s, (r = e[u++])) && (~i(c, r) || c.push(r));
      return c;
    };
  },
  function (t, e) {
    var r = Math.ceil,
      n = Math.floor;
    t.exports = function (t) {
      return isNaN((t = +t)) ? 0 : (t > 0 ? n : r)(t);
    };
  },
  function (t, e, r) {
    var n = r(2);
    t.exports = n;
  },
  function (t, e, r) {
    var n = r(35),
      o = Function.toString;
    ("function" != typeof n.inspectSource &&
      (n.inspectSource = function (t) {
        return o.call(t);
      }),
      (t.exports = n.inspectSource));
  },
  function (t, e, r) {
    var n = r(2),
      o = r(46).f,
      i = r(9),
      a = r(19),
      s = r(24),
      u = r(71),
      c = r(75);
    t.exports = function (t, e) {
      var r,
        f,
        l,
        h,
        p,
        d = t.target,
        y = t.global,
        g = t.stat;
      if ((r = y ? n : g ? n[d] || s(d, {}) : (n[d] || {}).prototype))
        for (f in e) {
          if (
            ((h = e[f]),
            (l = t.noTargetGet ? (p = o(r, f)) && p.value : r[f]),
            !c(y ? f : d + (g ? "." : "#") + f, t.forced) && void 0 !== l)
          ) {
            if (typeof h == typeof l) continue;
            u(h, l);
          }
          ((t.sham || (l && l.sham)) && i(h, "sham", !0), a(r, f, h, t));
        }
    };
  },
  function (t, e, r) {
    var n = r(12),
      o = r(70),
      i = r(17),
      a = r(15),
      s = r(38),
      u = r(3),
      c = r(36),
      f = Object.getOwnPropertyDescriptor;
    e.f = n
      ? f
      : function (t, e) {
          if (((t = a(t)), (e = s(e, !0)), c))
            try {
              return f(t, e);
            } catch (t) {}
          if (u(t, e)) return i(!o.f.call(t, e), t[e]);
        };
  },
  function (t, e, r) {
    "use strict";
    var n = r(48).IteratorPrototype,
      o = r(25),
      i = r(17),
      a = r(31),
      s = r(18),
      u = function () {
        return this;
      };
    t.exports = function (t, e, r) {
      var c = e + " Iterator";
      return (
        (t.prototype = o(n, { next: i(1, r) })),
        a(t, c, !1, !0),
        (s[c] = u),
        t
      );
    };
  },
  function (t, e, r) {
    "use strict";
    var n,
      o,
      i,
      a = r(49),
      s = r(9),
      u = r(3),
      c = r(4),
      f = r(16),
      l = c("iterator"),
      h = !1;
    ([].keys &&
      ("next" in (i = [].keys())
        ? (o = a(a(i))) !== Object.prototype && (n = o)
        : (h = !0)),
      null == n && (n = {}),
      f ||
        u(n, l) ||
        s(n, l, function () {
          return this;
        }),
      (t.exports = { IteratorPrototype: n, BUGGY_SAFARI_ITERATORS: h }));
  },
  function (t, e, r) {
    var n = r(3),
      o = r(76),
      i = r(29),
      a = r(77),
      s = i("IE_PROTO"),
      u = Object.prototype;
    t.exports = a
      ? Object.getPrototypeOf
      : function (t) {
          return (
            (t = o(t)),
            n(t, s)
              ? t[s]
              : "function" == typeof t.constructor && t instanceof t.constructor
                ? t.constructor.prototype
                : t instanceof Object
                  ? u
                  : null
          );
        };
  },
  function (t, e, r) {
    var n = r(85),
      o = r(32),
      i = r(4)("toStringTag"),
      a =
        "Arguments" ==
        o(
          (function () {
            return arguments;
          })(),
        );
    t.exports = n
      ? o
      : function (t) {
          var e, r, n;
          return void 0 === t
            ? "Undefined"
            : null === t
              ? "Null"
              : "string" ==
                  typeof (r = (function (t, e) {
                    try {
                      return t[e];
                    } catch (t) {}
                  })((e = Object(t)), i))
                ? r
                : a
                  ? o(e)
                  : "Object" == (n = o(e)) && "function" == typeof e.callee
                    ? "Arguments"
                    : n;
        };
  },
  function (t, e, r) {
    var n = r(50),
      o = r(18),
      i = r(4)("iterator");
    t.exports = function (t) {
      if (null != t) return t[i] || t["@@iterator"] || o[n(t)];
    };
  },
  function (t, e, r) {
    var n = r(87);
    ((t.exports = function (t, e, r) {
      return (
        (e = n(e)) in t
          ? Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = r),
        t
      );
    }),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports));
  },
  function (t, e, r) {
    var n = r(22).default;
    function o() {
      "use strict";
      /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ ((t.exports =
        o =
          function () {
            return e;
          }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports));
      var e = {},
        r = Object.prototype,
        i = r.hasOwnProperty,
        a =
          Object.defineProperty ||
          function (t, e, r) {
            t[e] = r.value;
          },
        s = "function" == typeof Symbol ? Symbol : {},
        u = s.iterator || "@@iterator",
        c = s.asyncIterator || "@@asyncIterator",
        f = s.toStringTag || "@@toStringTag";
      function l(t, e, r) {
        return (
          Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          }),
          t[e]
        );
      }
      try {
        l({}, "");
      } catch (t) {
        l = function (t, e, r) {
          return (t[e] = r);
        };
      }
      function h(t, e, r, n) {
        var o = e && e.prototype instanceof y ? e : y,
          i = Object.create(o.prototype),
          s = new j(n || []);
        return (a(i, "_invoke", { value: _(t, r, s) }), i);
      }
      function p(t, e, r) {
        try {
          return { type: "normal", arg: t.call(e, r) };
        } catch (t) {
          return { type: "throw", arg: t };
        }
      }
      e.wrap = h;
      var d = {};
      function y() {}
      function g() {}
      function v() {}
      var m = {};
      l(m, u, function () {
        return this;
      });
      var w = Object.getPrototypeOf,
        b = w && w(w(P([])));
      b && b !== r && i.call(b, u) && (m = b);
      var E = (v.prototype = y.prototype = Object.create(m));
      function S(t) {
        ["next", "throw", "return"].forEach(function (e) {
          l(t, e, function (t) {
            return this._invoke(e, t);
          });
        });
      }
      function x(t, e) {
        var r;
        a(this, "_invoke", {
          value: function (o, a) {
            function s() {
              return new e(function (r, s) {
                !(function r(o, a, s, u) {
                  var c = p(t[o], t, a);
                  if ("throw" !== c.type) {
                    var f = c.arg,
                      l = f.value;
                    return l && "object" == n(l) && i.call(l, "__await")
                      ? e.resolve(l.__await).then(
                          function (t) {
                            r("next", t, s, u);
                          },
                          function (t) {
                            r("throw", t, s, u);
                          },
                        )
                      : e.resolve(l).then(
                          function (t) {
                            ((f.value = t), s(f));
                          },
                          function (t) {
                            return r("throw", t, s, u);
                          },
                        );
                  }
                  u(c.arg);
                })(o, a, r, s);
              });
            }
            return (r = r ? r.then(s, s) : s());
          },
        });
      }
      function _(t, e, r) {
        var n = "suspendedStart";
        return function (o, i) {
          if ("executing" === n)
            throw new Error("Generator is already running");
          if ("completed" === n) {
            if ("throw" === o) throw i;
            return T();
          }
          for (r.method = o, r.arg = i; ; ) {
            var a = r.delegate;
            if (a) {
              var s = O(a, r);
              if (s) {
                if (s === d) continue;
                return s;
              }
            }
            if ("next" === r.method) r.sent = r._sent = r.arg;
            else if ("throw" === r.method) {
              if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
              r.dispatchException(r.arg);
            } else "return" === r.method && r.abrupt("return", r.arg);
            n = "executing";
            var u = p(t, e, r);
            if ("normal" === u.type) {
              if (((n = r.done ? "completed" : "suspendedYield"), u.arg === d))
                continue;
              return { value: u.arg, done: r.done };
            }
            "throw" === u.type &&
              ((n = "completed"), (r.method = "throw"), (r.arg = u.arg));
          }
        };
      }
      function O(t, e) {
        var r = e.method,
          n = t.iterator[r];
        if (void 0 === n)
          return (
            (e.delegate = null),
            ("throw" === r &&
              t.iterator.return &&
              ((e.method = "return"),
              (e.arg = void 0),
              O(t, e),
              "throw" === e.method)) ||
              ("return" !== r &&
                ((e.method = "throw"),
                (e.arg = new TypeError(
                  "The iterator does not provide a '" + r + "' method",
                )))),
            d
          );
        var o = p(n, t.iterator, e.arg);
        if ("throw" === o.type)
          return (
            (e.method = "throw"),
            (e.arg = o.arg),
            (e.delegate = null),
            d
          );
        var i = o.arg;
        return i
          ? i.done
            ? ((e[t.resultName] = i.value),
              (e.next = t.nextLoc),
              "return" !== e.method && ((e.method = "next"), (e.arg = void 0)),
              (e.delegate = null),
              d)
            : i
          : ((e.method = "throw"),
            (e.arg = new TypeError("iterator result is not an object")),
            (e.delegate = null),
            d);
      }
      function A(t) {
        var e = { tryLoc: t[0] };
        (1 in t && (e.catchLoc = t[1]),
          2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
          this.tryEntries.push(e));
      }
      function R(t) {
        var e = t.completion || {};
        ((e.type = "normal"), delete e.arg, (t.completion = e));
      }
      function j(t) {
        ((this.tryEntries = [{ tryLoc: "root" }]),
          t.forEach(A, this),
          this.reset(!0));
      }
      function P(t) {
        if (t) {
          var e = t[u];
          if (e) return e.call(t);
          if ("function" == typeof t.next) return t;
          if (!isNaN(t.length)) {
            var r = -1,
              n = function e() {
                for (; ++r < t.length; )
                  if (i.call(t, r)) return ((e.value = t[r]), (e.done = !1), e);
                return ((e.value = void 0), (e.done = !0), e);
              };
            return (n.next = n);
          }
        }
        return { next: T };
      }
      function T() {
        return { value: void 0, done: !0 };
      }
      return (
        (g.prototype = v),
        a(E, "constructor", { value: v, configurable: !0 }),
        a(v, "constructor", { value: g, configurable: !0 }),
        (g.displayName = l(v, f, "GeneratorFunction")),
        (e.isGeneratorFunction = function (t) {
          var e = "function" == typeof t && t.constructor;
          return (
            !!e &&
            (e === g || "GeneratorFunction" === (e.displayName || e.name))
          );
        }),
        (e.mark = function (t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, v)
              : ((t.__proto__ = v), l(t, f, "GeneratorFunction")),
            (t.prototype = Object.create(E)),
            t
          );
        }),
        (e.awrap = function (t) {
          return { __await: t };
        }),
        S(x.prototype),
        l(x.prototype, c, function () {
          return this;
        }),
        (e.AsyncIterator = x),
        (e.async = function (t, r, n, o, i) {
          void 0 === i && (i = Promise);
          var a = new x(h(t, r, n, o), i);
          return e.isGeneratorFunction(r)
            ? a
            : a.next().then(function (t) {
                return t.done ? t.value : a.next();
              });
        }),
        S(E),
        l(E, f, "Generator"),
        l(E, u, function () {
          return this;
        }),
        l(E, "toString", function () {
          return "[object Generator]";
        }),
        (e.keys = function (t) {
          var e = Object(t),
            r = [];
          for (var n in e) r.push(n);
          return (
            r.reverse(),
            function t() {
              for (; r.length; ) {
                var n = r.pop();
                if (n in e) return ((t.value = n), (t.done = !1), t);
              }
              return ((t.done = !0), t);
            }
          );
        }),
        (e.values = P),
        (j.prototype = {
          constructor: j,
          reset: function (t) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(R),
              !t)
            )
              for (var e in this)
                "t" === e.charAt(0) &&
                  i.call(this, e) &&
                  !isNaN(+e.slice(1)) &&
                  (this[e] = void 0);
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
            function r(r, n) {
              return (
                (a.type = "throw"),
                (a.arg = t),
                (e.next = r),
                n && ((e.method = "next"), (e.arg = void 0)),
                !!n
              );
            }
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var o = this.tryEntries[n],
                a = o.completion;
              if ("root" === o.tryLoc) return r("end");
              if (o.tryLoc <= this.prev) {
                var s = i.call(o, "catchLoc"),
                  u = i.call(o, "finallyLoc");
                if (s && u) {
                  if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                  if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                } else if (s) {
                  if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                } else {
                  if (!u)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                }
              }
            }
          },
          abrupt: function (t, e) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var n = this.tryEntries[r];
              if (
                n.tryLoc <= this.prev &&
                i.call(n, "finallyLoc") &&
                this.prev < n.finallyLoc
              ) {
                var o = n;
                break;
              }
            }
            o &&
              ("break" === t || "continue" === t) &&
              o.tryLoc <= e &&
              e <= o.finallyLoc &&
              (o = null);
            var a = o ? o.completion : {};
            return (
              (a.type = t),
              (a.arg = e),
              o
                ? ((this.method = "next"), (this.next = o.finallyLoc), d)
                : this.complete(a)
            );
          },
          complete: function (t, e) {
            if ("throw" === t.type) throw t.arg;
            return (
              "break" === t.type || "continue" === t.type
                ? (this.next = t.arg)
                : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
              d
            );
          },
          finish: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.finallyLoc === t)
                return (this.complete(r.completion, r.afterLoc), R(r), d);
            }
          },
          catch: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.tryLoc === t) {
                var n = r.completion;
                if ("throw" === n.type) {
                  var o = n.arg;
                  R(r);
                }
                return o;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (t, e, r) {
            return (
              (this.delegate = { iterator: P(t), resultName: e, nextLoc: r }),
              "next" === this.method && (this.arg = void 0),
              d
            );
          },
        }),
        e
      );
    }
    ((t.exports = o),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports));
  },
  function (t, e, r) {
    var n = r(55);
    t.exports = n;
  },
  function (t, e, r) {
    var n = r(56);
    t.exports = n;
  },
  function (t, e, r) {
    r(57);
    var n = r(43);
    t.exports = n.URLSearchParams;
  },
  function (t, e, r) {
    "use strict";
    r(58);
    var n = r(45),
      o = r(28),
      i = r(80),
      a = r(19),
      s = r(81),
      u = r(31),
      c = r(47),
      f = r(30),
      l = r(82),
      h = r(3),
      p = r(83),
      d = r(50),
      y = r(8),
      g = r(10),
      v = r(25),
      m = r(17),
      w = r(86),
      b = r(51),
      E = r(4),
      S = o("fetch"),
      x = o("Headers"),
      _ = E("iterator"),
      O = f.set,
      A = f.getterFor("URLSearchParams"),
      R = f.getterFor("URLSearchParamsIterator"),
      j = /\+/g,
      P = Array(4),
      T = function (t) {
        return (
          P[t - 1] || (P[t - 1] = RegExp("((?:%[\\da-f]{2}){" + t + "})", "gi"))
        );
      },
      U = function (t) {
        try {
          return decodeURIComponent(t);
        } catch (e) {
          return t;
        }
      },
      L = function (t) {
        var e = t.replace(j, " "),
          r = 4;
        try {
          return decodeURIComponent(e);
        } catch (t) {
          for (; r; ) e = e.replace(T(r--), U);
          return e;
        }
      },
      B = /[!'()~]|%20/g,
      N = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
      },
      C = function (t) {
        return N[t];
      },
      k = function (t) {
        return encodeURIComponent(t).replace(B, C);
      },
      D = function (t, e) {
        if (e)
          for (var r, n, o = e.split("&"), i = 0; i < o.length; )
            (r = o[i++]).length &&
              ((n = r.split("=")),
              t.push({ key: L(n.shift()), value: L(n.join("=")) }));
      },
      I = function (t) {
        ((this.entries.length = 0), D(this.entries, t));
      },
      F = function (t, e) {
        if (t < e) throw TypeError("Not enough arguments");
      },
      M = c(
        function (t, e) {
          O(this, {
            type: "URLSearchParamsIterator",
            iterator: w(A(t).entries),
            kind: e,
          });
        },
        "Iterator",
        function () {
          var t = R(this),
            e = t.kind,
            r = t.iterator.next(),
            n = r.value;
          return (
            r.done ||
              (r.value =
                "keys" === e
                  ? n.key
                  : "values" === e
                    ? n.value
                    : [n.key, n.value]),
            r
          );
        },
      ),
      Q = function () {
        l(this, Q, "URLSearchParams");
        var t,
          e,
          r,
          n,
          o,
          i,
          a,
          s,
          u,
          c = arguments.length > 0 ? arguments[0] : void 0,
          f = this,
          p = [];
        if (
          (O(f, {
            type: "URLSearchParams",
            entries: p,
            updateURL: function () {},
            updateSearchParams: I,
          }),
          void 0 !== c)
        )
          if (g(c))
            if ("function" == typeof (t = b(c)))
              for (r = (e = t.call(c)).next; !(n = r.call(e)).done; ) {
                if (
                  (a = (i = (o = w(y(n.value))).next).call(o)).done ||
                  (s = i.call(o)).done ||
                  !i.call(o).done
                )
                  throw TypeError("Expected sequence with length 2");
                p.push({ key: a.value + "", value: s.value + "" });
              }
            else for (u in c) h(c, u) && p.push({ key: u, value: c[u] + "" });
          else
            D(
              p,
              "string" == typeof c
                ? "?" === c.charAt(0)
                  ? c.slice(1)
                  : c
                : c + "",
            );
      },
      q = Q.prototype;
    (s(
      q,
      {
        append: function (t, e) {
          F(arguments.length, 2);
          var r = A(this);
          (r.entries.push({ key: t + "", value: e + "" }), r.updateURL());
        },
        delete: function (t) {
          F(arguments.length, 1);
          for (
            var e = A(this), r = e.entries, n = t + "", o = 0;
            o < r.length;

          )
            r[o].key === n ? r.splice(o, 1) : o++;
          e.updateURL();
        },
        get: function (t) {
          F(arguments.length, 1);
          for (var e = A(this).entries, r = t + "", n = 0; n < e.length; n++)
            if (e[n].key === r) return e[n].value;
          return null;
        },
        getAll: function (t) {
          F(arguments.length, 1);
          for (
            var e = A(this).entries, r = t + "", n = [], o = 0;
            o < e.length;
            o++
          )
            e[o].key === r && n.push(e[o].value);
          return n;
        },
        has: function (t) {
          F(arguments.length, 1);
          for (var e = A(this).entries, r = t + "", n = 0; n < e.length; )
            if (e[n++].key === r) return !0;
          return !1;
        },
        set: function (t, e) {
          F(arguments.length, 1);
          for (
            var r,
              n = A(this),
              o = n.entries,
              i = !1,
              a = t + "",
              s = e + "",
              u = 0;
            u < o.length;
            u++
          )
            (r = o[u]).key === a &&
              (i ? o.splice(u--, 1) : ((i = !0), (r.value = s)));
          (i || o.push({ key: a, value: s }), n.updateURL());
        },
        sort: function () {
          var t,
            e,
            r,
            n = A(this),
            o = n.entries,
            i = o.slice();
          for (o.length = 0, r = 0; r < i.length; r++) {
            for (t = i[r], e = 0; e < r; e++)
              if (o[e].key > t.key) {
                o.splice(e, 0, t);
                break;
              }
            e === r && o.push(t);
          }
          n.updateURL();
        },
        forEach: function (t) {
          for (
            var e,
              r = A(this).entries,
              n = p(t, arguments.length > 1 ? arguments[1] : void 0, 3),
              o = 0;
            o < r.length;

          )
            n((e = r[o++]).value, e.key, this);
        },
        keys: function () {
          return new M(this, "keys");
        },
        values: function () {
          return new M(this, "values");
        },
        entries: function () {
          return new M(this, "entries");
        },
      },
      { enumerable: !0 },
    ),
      a(q, _, q.entries),
      a(
        q,
        "toString",
        function () {
          for (var t, e = A(this).entries, r = [], n = 0; n < e.length; )
            ((t = e[n++]), r.push(k(t.key) + "=" + k(t.value)));
          return r.join("&");
        },
        { enumerable: !0 },
      ),
      u(Q, "URLSearchParams"),
      n({ global: !0, forced: !i }, { URLSearchParams: Q }),
      i ||
        "function" != typeof S ||
        "function" != typeof x ||
        n(
          { global: !0, enumerable: !0, forced: !0 },
          {
            fetch: function (t) {
              var e,
                r,
                n,
                o = [t];
              return (
                arguments.length > 1 &&
                  (g((e = arguments[1])) &&
                    ((r = e.body),
                    "URLSearchParams" === d(r) &&
                      ((n = e.headers ? new x(e.headers) : new x()).has(
                        "content-type",
                      ) ||
                        n.set(
                          "content-type",
                          "application/x-www-form-urlencoded;charset=UTF-8",
                        ),
                      (e = v(e, { body: m(0, String(r)), headers: m(0, n) })))),
                  o.push(e)),
                S.apply(this, o)
              );
            },
          },
        ),
      (t.exports = { URLSearchParams: Q, getState: A }));
  },
  function (t, e, r) {
    "use strict";
    var n = r(15),
      o = r(60),
      i = r(18),
      a = r(30),
      s = r(69),
      u = a.set,
      c = a.getterFor("Array Iterator");
    ((t.exports = s(
      Array,
      "Array",
      function (t, e) {
        u(this, { type: "Array Iterator", target: n(t), index: 0, kind: e });
      },
      function () {
        var t = c(this),
          e = t.target,
          r = t.kind,
          n = t.index++;
        return !e || n >= e.length
          ? ((t.target = void 0), { value: void 0, done: !0 })
          : "keys" == r
            ? { value: n, done: !1 }
            : "values" == r
              ? { value: e[n], done: !1 }
              : { value: [n, e[n]], done: !1 };
      },
      "values",
    )),
      (i.Arguments = i.Array),
      o("keys"),
      o("values"),
      o("entries"));
  },
  function (t, e, r) {
    var n = r(7),
      o = r(32),
      i = "".split;
    t.exports = n(function () {
      return !Object("z").propertyIsEnumerable(0);
    })
      ? function (t) {
          return "String" == o(t) ? i.call(t, "") : Object(t);
        }
      : Object;
  },
  function (t, e, r) {
    var n = r(4),
      o = r(25),
      i = r(13),
      a = n("unscopables"),
      s = Array.prototype;
    (null == s[a] && i.f(s, a, { configurable: !0, value: o(null) }),
      (t.exports = function (t) {
        s[a][t] = !0;
      }));
  },
  function (t, e, r) {
    var n = r(40);
    t.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator;
  },
  function (t, e, r) {
    var n = r(12),
      o = r(13),
      i = r(8),
      a = r(63);
    t.exports = n
      ? Object.defineProperties
      : function (t, e) {
          i(t);
          for (var r, n = a(e), s = n.length, u = 0; s > u; )
            o.f(t, (r = n[u++]), e[r]);
          return t;
        };
  },
  function (t, e, r) {
    var n = r(41),
      o = r(27);
    t.exports =
      Object.keys ||
      function (t) {
        return n(t, o);
      };
  },
  function (t, e, r) {
    var n = r(15),
      o = r(65),
      i = r(66),
      a = function (t) {
        return function (e, r, a) {
          var s,
            u = n(e),
            c = o(u.length),
            f = i(a, c);
          if (t && r != r) {
            for (; c > f; ) if ((s = u[f++]) != s) return !0;
          } else
            for (; c > f; f++)
              if ((t || f in u) && u[f] === r) return t || f || 0;
          return !t && -1;
        };
      };
    t.exports = { includes: a(!0), indexOf: a(!1) };
  },
  function (t, e, r) {
    var n = r(42),
      o = Math.min;
    t.exports = function (t) {
      return t > 0 ? o(n(t), 9007199254740991) : 0;
    };
  },
  function (t, e, r) {
    var n = r(42),
      o = Math.max,
      i = Math.min;
    t.exports = function (t, e) {
      var r = n(t);
      return r < 0 ? o(r + e, 0) : i(r, e);
    };
  },
  function (t, e, r) {
    var n = r(28);
    t.exports = n("document", "documentElement");
  },
  function (t, e, r) {
    var n = r(2),
      o = r(44),
      i = n.WeakMap;
    t.exports = "function" == typeof i && /native code/.test(o(i));
  },
  function (t, e, r) {
    "use strict";
    var n = r(45),
      o = r(47),
      i = r(49),
      a = r(78),
      s = r(31),
      u = r(9),
      c = r(19),
      f = r(4),
      l = r(16),
      h = r(18),
      p = r(48),
      d = p.IteratorPrototype,
      y = p.BUGGY_SAFARI_ITERATORS,
      g = f("iterator"),
      v = function () {
        return this;
      };
    t.exports = function (t, e, r, f, p, m, w) {
      o(r, e, f);
      var b,
        E,
        S,
        x = function (t) {
          if (t === p && j) return j;
          if (!y && t in A) return A[t];
          switch (t) {
            case "keys":
            case "values":
            case "entries":
              return function () {
                return new r(this, t);
              };
          }
          return function () {
            return new r(this);
          };
        },
        _ = e + " Iterator",
        O = !1,
        A = t.prototype,
        R = A[g] || A["@@iterator"] || (p && A[p]),
        j = (!y && R) || x(p),
        P = ("Array" == e && A.entries) || R;
      if (
        (P &&
          ((b = i(P.call(new t()))),
          d !== Object.prototype &&
            b.next &&
            (l ||
              i(b) === d ||
              (a ? a(b, d) : "function" != typeof b[g] && u(b, g, v)),
            s(b, _, !0, !0),
            l && (h[_] = v))),
        "values" == p &&
          R &&
          "values" !== R.name &&
          ((O = !0),
          (j = function () {
            return R.call(this);
          })),
        (l && !w) || A[g] === j || u(A, g, j),
        (h[e] = j),
        p)
      )
        if (
          ((E = {
            values: x("values"),
            keys: m ? j : x("keys"),
            entries: x("entries"),
          }),
          w)
        )
          for (S in E) (y || O || !(S in A)) && c(A, S, E[S]);
        else n({ target: e, proto: !0, forced: y || O }, E);
      return E;
    };
  },
  function (t, e, r) {
    "use strict";
    var n = {}.propertyIsEnumerable,
      o = Object.getOwnPropertyDescriptor,
      i = o && !n.call({ 1: 2 }, 1);
    e.f = i
      ? function (t) {
          var e = o(this, t);
          return !!e && e.enumerable;
        }
      : n;
  },
  function (t, e, r) {
    var n = r(3),
      o = r(72),
      i = r(46),
      a = r(13);
    t.exports = function (t, e) {
      for (var r = o(e), s = a.f, u = i.f, c = 0; c < r.length; c++) {
        var f = r[c];
        n(t, f) || s(t, f, u(e, f));
      }
    };
  },
  function (t, e, r) {
    var n = r(28),
      o = r(73),
      i = r(74),
      a = r(8);
    t.exports =
      n("Reflect", "ownKeys") ||
      function (t) {
        var e = o.f(a(t)),
          r = i.f;
        return r ? e.concat(r(t)) : e;
      };
  },
  function (t, e, r) {
    var n = r(41),
      o = r(27).concat("length", "prototype");
    e.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return n(t, o);
      };
  },
  function (t, e) {
    e.f = Object.getOwnPropertySymbols;
  },
  function (t, e, r) {
    var n = r(7),
      o = /#|\.prototype\./,
      i = function (t, e) {
        var r = s[a(t)];
        return r == c || (r != u && ("function" == typeof e ? n(e) : !!e));
      },
      a = (i.normalize = function (t) {
        return String(t).replace(o, ".").toLowerCase();
      }),
      s = (i.data = {}),
      u = (i.NATIVE = "N"),
      c = (i.POLYFILL = "P");
    t.exports = i;
  },
  function (t, e, r) {
    var n = r(33);
    t.exports = function (t) {
      return Object(n(t));
    };
  },
  function (t, e, r) {
    var n = r(7);
    t.exports = !n(function () {
      function t() {}
      return (
        (t.prototype.constructor = null),
        Object.getPrototypeOf(new t()) !== t.prototype
      );
    });
  },
  function (t, e, r) {
    var n = r(8),
      o = r(79);
    t.exports =
      Object.setPrototypeOf ||
      ("__proto__" in {}
        ? (function () {
            var t,
              e = !1,
              r = {};
            try {
              ((t = Object.getOwnPropertyDescriptor(
                Object.prototype,
                "__proto__",
              ).set).call(r, []),
                (e = r instanceof Array));
            } catch (t) {}
            return function (r, i) {
              return (n(r), o(i), e ? t.call(r, i) : (r.__proto__ = i), r);
            };
          })()
        : void 0);
  },
  function (t, e, r) {
    var n = r(10);
    t.exports = function (t) {
      if (!n(t) && null !== t)
        throw TypeError("Can't set " + String(t) + " as a prototype");
      return t;
    };
  },
  function (t, e, r) {
    var n = r(7),
      o = r(4),
      i = r(16),
      a = o("iterator");
    t.exports = !n(function () {
      var t = new URL("b?a=1&b=2&c=3", "http://a"),
        e = t.searchParams,
        r = "";
      return (
        (t.pathname = "c%20d"),
        e.forEach(function (t, n) {
          (e.delete("b"), (r += n + t));
        }),
        (i && !t.toJSON) ||
          !e.sort ||
          "http://a/c%20d?a=1&c=3" !== t.href ||
          "3" !== e.get("c") ||
          "a=1" !== String(new URLSearchParams("?a=1")) ||
          !e[a] ||
          "a" !== new URL("https://a@b").username ||
          "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") ||
          "xn--e1aybc" !== new URL("http://тест").host ||
          "#%D0%B1" !== new URL("http://a#б").hash ||
          "a1c3" !== r ||
          "x" !== new URL("http://x", void 0).host
      );
    });
  },
  function (t, e, r) {
    var n = r(19);
    t.exports = function (t, e, r) {
      for (var o in e) n(t, o, e[o], r);
      return t;
    };
  },
  function (t, e) {
    t.exports = function (t, e, r) {
      if (!(t instanceof e))
        throw TypeError("Incorrect " + (r ? r + " " : "") + "invocation");
      return t;
    };
  },
  function (t, e, r) {
    var n = r(84);
    t.exports = function (t, e, r) {
      if ((n(t), void 0 === e)) return t;
      switch (r) {
        case 0:
          return function () {
            return t.call(e);
          };
        case 1:
          return function (r) {
            return t.call(e, r);
          };
        case 2:
          return function (r, n) {
            return t.call(e, r, n);
          };
        case 3:
          return function (r, n, o) {
            return t.call(e, r, n, o);
          };
      }
      return function () {
        return t.apply(e, arguments);
      };
    };
  },
  function (t, e) {
    t.exports = function (t) {
      if ("function" != typeof t)
        throw TypeError(String(t) + " is not a function");
      return t;
    };
  },
  function (t, e, r) {
    var n = {};
    ((n[r(4)("toStringTag")] = "z"), (t.exports = "[object z]" === String(n)));
  },
  function (t, e, r) {
    var n = r(8),
      o = r(51);
    t.exports = function (t) {
      var e = o(t);
      if ("function" != typeof e)
        throw TypeError(String(t) + " is not iterable");
      return n(e.call(t));
    };
  },
  function (t, e, r) {
    var n = r(22).default,
      o = r(88);
    ((t.exports = function (t) {
      var e = o(t, "string");
      return "symbol" === n(e) ? e : String(e);
    }),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports));
  },
  function (t, e, r) {
    var n = r(22).default;
    ((t.exports = function (t, e) {
      if ("object" !== n(t) || null === t) return t;
      var r = t[Symbol.toPrimitive];
      if (void 0 !== r) {
        var o = r.call(t, e || "default");
        if ("object" !== n(o)) return o;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === e ? String : Number)(t);
    }),
      (t.exports.__esModule = !0),
      (t.exports.default = t.exports));
  },
  function (t, e, r) {
    "use strict";
    (function (t) {
      /*!
       * The buffer module from node.js, for the browser.
       *
       * @author   Feross Aboukhadijeh <http://feross.org>
       * @license  MIT
       */
      var n = r(90),
        o = r(91),
        i = r(92);
      function a() {
        return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
      }
      function s(t, e) {
        if (a() < e) throw new RangeError("Invalid typed array length");
        return (
          u.TYPED_ARRAY_SUPPORT
            ? ((t = new Uint8Array(e)).__proto__ = u.prototype)
            : (null === t && (t = new u(e)), (t.length = e)),
          t
        );
      }
      function u(t, e, r) {
        if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u))
          return new u(t, e, r);
        if ("number" == typeof t) {
          if ("string" == typeof e)
            throw new Error(
              "If encoding is specified then the first argument must be a string",
            );
          return l(this, t);
        }
        return c(this, t, e, r);
      }
      function c(t, e, r, n) {
        if ("number" == typeof e)
          throw new TypeError('"value" argument must not be a number');
        return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer
          ? (function (t, e, r, n) {
              if ((e.byteLength, r < 0 || e.byteLength < r))
                throw new RangeError("'offset' is out of bounds");
              if (e.byteLength < r + (n || 0))
                throw new RangeError("'length' is out of bounds");
              e =
                void 0 === r && void 0 === n
                  ? new Uint8Array(e)
                  : void 0 === n
                    ? new Uint8Array(e, r)
                    : new Uint8Array(e, r, n);
              u.TYPED_ARRAY_SUPPORT
                ? ((t = e).__proto__ = u.prototype)
                : (t = h(t, e));
              return t;
            })(t, e, r, n)
          : "string" == typeof e
            ? (function (t, e, r) {
                ("string" == typeof r && "" !== r) || (r = "utf8");
                if (!u.isEncoding(r))
                  throw new TypeError(
                    '"encoding" must be a valid string encoding',
                  );
                var n = 0 | d(e, r),
                  o = (t = s(t, n)).write(e, r);
                o !== n && (t = t.slice(0, o));
                return t;
              })(t, e, r)
            : (function (t, e) {
                if (u.isBuffer(e)) {
                  var r = 0 | p(e.length);
                  return (0 === (t = s(t, r)).length || e.copy(t, 0, 0, r), t);
                }
                if (e) {
                  if (
                    ("undefined" != typeof ArrayBuffer &&
                      e.buffer instanceof ArrayBuffer) ||
                    "length" in e
                  )
                    return "number" != typeof e.length || (n = e.length) != n
                      ? s(t, 0)
                      : h(t, e);
                  if ("Buffer" === e.type && i(e.data)) return h(t, e.data);
                }
                var n;
                throw new TypeError(
                  "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.",
                );
              })(t, e);
      }
      function f(t) {
        if ("number" != typeof t)
          throw new TypeError('"size" argument must be a number');
        if (t < 0) throw new RangeError('"size" argument must not be negative');
      }
      function l(t, e) {
        if ((f(e), (t = s(t, e < 0 ? 0 : 0 | p(e))), !u.TYPED_ARRAY_SUPPORT))
          for (var r = 0; r < e; ++r) t[r] = 0;
        return t;
      }
      function h(t, e) {
        var r = e.length < 0 ? 0 : 0 | p(e.length);
        t = s(t, r);
        for (var n = 0; n < r; n += 1) t[n] = 255 & e[n];
        return t;
      }
      function p(t) {
        if (t >= a())
          throw new RangeError(
            "Attempt to allocate Buffer larger than maximum size: 0x" +
              a().toString(16) +
              " bytes",
          );
        return 0 | t;
      }
      function d(t, e) {
        if (u.isBuffer(t)) return t.length;
        if (
          "undefined" != typeof ArrayBuffer &&
          "function" == typeof ArrayBuffer.isView &&
          (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)
        )
          return t.byteLength;
        "string" != typeof t && (t = "" + t);
        var r = t.length;
        if (0 === r) return 0;
        for (var n = !1; ; )
          switch (e) {
            case "ascii":
            case "latin1":
            case "binary":
              return r;
            case "utf8":
            case "utf-8":
            case void 0:
              return M(t).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * r;
            case "hex":
              return r >>> 1;
            case "base64":
              return Q(t).length;
            default:
              if (n) return M(t).length;
              ((e = ("" + e).toLowerCase()), (n = !0));
          }
      }
      function y(t, e, r) {
        var n = !1;
        if (((void 0 === e || e < 0) && (e = 0), e > this.length)) return "";
        if (((void 0 === r || r > this.length) && (r = this.length), r <= 0))
          return "";
        if ((r >>>= 0) <= (e >>>= 0)) return "";
        for (t || (t = "utf8"); ; )
          switch (t) {
            case "hex":
              return P(this, e, r);
            case "utf8":
            case "utf-8":
              return A(this, e, r);
            case "ascii":
              return R(this, e, r);
            case "latin1":
            case "binary":
              return j(this, e, r);
            case "base64":
              return O(this, e, r);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return T(this, e, r);
            default:
              if (n) throw new TypeError("Unknown encoding: " + t);
              ((t = (t + "").toLowerCase()), (n = !0));
          }
      }
      function g(t, e, r) {
        var n = t[e];
        ((t[e] = t[r]), (t[r] = n));
      }
      function v(t, e, r, n, o) {
        if (0 === t.length) return -1;
        if (
          ("string" == typeof r
            ? ((n = r), (r = 0))
            : r > 2147483647
              ? (r = 2147483647)
              : r < -2147483648 && (r = -2147483648),
          (r = +r),
          isNaN(r) && (r = o ? 0 : t.length - 1),
          r < 0 && (r = t.length + r),
          r >= t.length)
        ) {
          if (o) return -1;
          r = t.length - 1;
        } else if (r < 0) {
          if (!o) return -1;
          r = 0;
        }
        if (("string" == typeof e && (e = u.from(e, n)), u.isBuffer(e)))
          return 0 === e.length ? -1 : m(t, e, r, n, o);
        if ("number" == typeof e)
          return (
            (e &= 255),
            u.TYPED_ARRAY_SUPPORT &&
            "function" == typeof Uint8Array.prototype.indexOf
              ? o
                ? Uint8Array.prototype.indexOf.call(t, e, r)
                : Uint8Array.prototype.lastIndexOf.call(t, e, r)
              : m(t, [e], r, n, o)
          );
        throw new TypeError("val must be string, number or Buffer");
      }
      function m(t, e, r, n, o) {
        var i,
          a = 1,
          s = t.length,
          u = e.length;
        if (
          void 0 !== n &&
          ("ucs2" === (n = String(n).toLowerCase()) ||
            "ucs-2" === n ||
            "utf16le" === n ||
            "utf-16le" === n)
        ) {
          if (t.length < 2 || e.length < 2) return -1;
          ((a = 2), (s /= 2), (u /= 2), (r /= 2));
        }
        function c(t, e) {
          return 1 === a ? t[e] : t.readUInt16BE(e * a);
        }
        if (o) {
          var f = -1;
          for (i = r; i < s; i++)
            if (c(t, i) === c(e, -1 === f ? 0 : i - f)) {
              if ((-1 === f && (f = i), i - f + 1 === u)) return f * a;
            } else (-1 !== f && (i -= i - f), (f = -1));
        } else
          for (r + u > s && (r = s - u), i = r; i >= 0; i--) {
            for (var l = !0, h = 0; h < u; h++)
              if (c(t, i + h) !== c(e, h)) {
                l = !1;
                break;
              }
            if (l) return i;
          }
        return -1;
      }
      function w(t, e, r, n) {
        r = Number(r) || 0;
        var o = t.length - r;
        n ? (n = Number(n)) > o && (n = o) : (n = o);
        var i = e.length;
        if (i % 2 != 0) throw new TypeError("Invalid hex string");
        n > i / 2 && (n = i / 2);
        for (var a = 0; a < n; ++a) {
          var s = parseInt(e.substr(2 * a, 2), 16);
          if (isNaN(s)) return a;
          t[r + a] = s;
        }
        return a;
      }
      function b(t, e, r, n) {
        return q(M(e, t.length - r), t, r, n);
      }
      function E(t, e, r, n) {
        return q(
          (function (t) {
            for (var e = [], r = 0; r < t.length; ++r)
              e.push(255 & t.charCodeAt(r));
            return e;
          })(e),
          t,
          r,
          n,
        );
      }
      function S(t, e, r, n) {
        return E(t, e, r, n);
      }
      function x(t, e, r, n) {
        return q(Q(e), t, r, n);
      }
      function _(t, e, r, n) {
        return q(
          (function (t, e) {
            for (
              var r, n, o, i = [], a = 0;
              a < t.length && !((e -= 2) < 0);
              ++a
            )
              ((r = t.charCodeAt(a)),
                (n = r >> 8),
                (o = r % 256),
                i.push(o),
                i.push(n));
            return i;
          })(e, t.length - r),
          t,
          r,
          n,
        );
      }
      function O(t, e, r) {
        return 0 === e && r === t.length
          ? n.fromByteArray(t)
          : n.fromByteArray(t.slice(e, r));
      }
      function A(t, e, r) {
        r = Math.min(t.length, r);
        for (var n = [], o = e; o < r; ) {
          var i,
            a,
            s,
            u,
            c = t[o],
            f = null,
            l = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
          if (o + l <= r)
            switch (l) {
              case 1:
                c < 128 && (f = c);
                break;
              case 2:
                128 == (192 & (i = t[o + 1])) &&
                  (u = ((31 & c) << 6) | (63 & i)) > 127 &&
                  (f = u);
                break;
              case 3:
                ((i = t[o + 1]),
                  (a = t[o + 2]),
                  128 == (192 & i) &&
                    128 == (192 & a) &&
                    (u = ((15 & c) << 12) | ((63 & i) << 6) | (63 & a)) >
                      2047 &&
                    (u < 55296 || u > 57343) &&
                    (f = u));
                break;
              case 4:
                ((i = t[o + 1]),
                  (a = t[o + 2]),
                  (s = t[o + 3]),
                  128 == (192 & i) &&
                    128 == (192 & a) &&
                    128 == (192 & s) &&
                    (u =
                      ((15 & c) << 18) |
                      ((63 & i) << 12) |
                      ((63 & a) << 6) |
                      (63 & s)) > 65535 &&
                    u < 1114112 &&
                    (f = u));
            }
          (null === f
            ? ((f = 65533), (l = 1))
            : f > 65535 &&
              ((f -= 65536),
              n.push(((f >>> 10) & 1023) | 55296),
              (f = 56320 | (1023 & f))),
            n.push(f),
            (o += l));
        }
        return (function (t) {
          var e = t.length;
          if (e <= 4096) return String.fromCharCode.apply(String, t);
          var r = "",
            n = 0;
          for (; n < e; )
            r += String.fromCharCode.apply(String, t.slice(n, (n += 4096)));
          return r;
        })(n);
      }
      ((e.Buffer = u),
        (e.SlowBuffer = function (t) {
          +t != t && (t = 0);
          return u.alloc(+t);
        }),
        (e.INSPECT_MAX_BYTES = 50),
        (u.TYPED_ARRAY_SUPPORT =
          void 0 !== t.TYPED_ARRAY_SUPPORT
            ? t.TYPED_ARRAY_SUPPORT
            : (function () {
                try {
                  var t = new Uint8Array(1);
                  return (
                    (t.__proto__ = {
                      __proto__: Uint8Array.prototype,
                      foo: function () {
                        return 42;
                      },
                    }),
                    42 === t.foo() &&
                      "function" == typeof t.subarray &&
                      0 === t.subarray(1, 1).byteLength
                  );
                } catch (t) {
                  return !1;
                }
              })()),
        (e.kMaxLength = a()),
        (u.poolSize = 8192),
        (u._augment = function (t) {
          return ((t.__proto__ = u.prototype), t);
        }),
        (u.from = function (t, e, r) {
          return c(null, t, e, r);
        }),
        u.TYPED_ARRAY_SUPPORT &&
          ((u.prototype.__proto__ = Uint8Array.prototype),
          (u.__proto__ = Uint8Array),
          "undefined" != typeof Symbol &&
            Symbol.species &&
            u[Symbol.species] === u &&
            Object.defineProperty(u, Symbol.species, {
              value: null,
              configurable: !0,
            })),
        (u.alloc = function (t, e, r) {
          return (function (t, e, r, n) {
            return (
              f(e),
              e <= 0
                ? s(t, e)
                : void 0 !== r
                  ? "string" == typeof n
                    ? s(t, e).fill(r, n)
                    : s(t, e).fill(r)
                  : s(t, e)
            );
          })(null, t, e, r);
        }),
        (u.allocUnsafe = function (t) {
          return l(null, t);
        }),
        (u.allocUnsafeSlow = function (t) {
          return l(null, t);
        }),
        (u.isBuffer = function (t) {
          return !(null == t || !t._isBuffer);
        }),
        (u.compare = function (t, e) {
          if (!u.isBuffer(t) || !u.isBuffer(e))
            throw new TypeError("Arguments must be Buffers");
          if (t === e) return 0;
          for (
            var r = t.length, n = e.length, o = 0, i = Math.min(r, n);
            o < i;
            ++o
          )
            if (t[o] !== e[o]) {
              ((r = t[o]), (n = e[o]));
              break;
            }
          return r < n ? -1 : n < r ? 1 : 0;
        }),
        (u.isEncoding = function (t) {
          switch (String(t).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return !0;
            default:
              return !1;
          }
        }),
        (u.concat = function (t, e) {
          if (!i(t))
            throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === t.length) return u.alloc(0);
          var r;
          if (void 0 === e)
            for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
          var n = u.allocUnsafe(e),
            o = 0;
          for (r = 0; r < t.length; ++r) {
            var a = t[r];
            if (!u.isBuffer(a))
              throw new TypeError(
                '"list" argument must be an Array of Buffers',
              );
            (a.copy(n, o), (o += a.length));
          }
          return n;
        }),
        (u.byteLength = d),
        (u.prototype._isBuffer = !0),
        (u.prototype.swap16 = function () {
          var t = this.length;
          if (t % 2 != 0)
            throw new RangeError("Buffer size must be a multiple of 16-bits");
          for (var e = 0; e < t; e += 2) g(this, e, e + 1);
          return this;
        }),
        (u.prototype.swap32 = function () {
          var t = this.length;
          if (t % 4 != 0)
            throw new RangeError("Buffer size must be a multiple of 32-bits");
          for (var e = 0; e < t; e += 4)
            (g(this, e, e + 3), g(this, e + 1, e + 2));
          return this;
        }),
        (u.prototype.swap64 = function () {
          var t = this.length;
          if (t % 8 != 0)
            throw new RangeError("Buffer size must be a multiple of 64-bits");
          for (var e = 0; e < t; e += 8)
            (g(this, e, e + 7),
              g(this, e + 1, e + 6),
              g(this, e + 2, e + 5),
              g(this, e + 3, e + 4));
          return this;
        }),
        (u.prototype.toString = function () {
          var t = 0 | this.length;
          return 0 === t
            ? ""
            : 0 === arguments.length
              ? A(this, 0, t)
              : y.apply(this, arguments);
        }),
        (u.prototype.equals = function (t) {
          if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
          return this === t || 0 === u.compare(this, t);
        }),
        (u.prototype.inspect = function () {
          var t = "",
            r = e.INSPECT_MAX_BYTES;
          return (
            this.length > 0 &&
              ((t = this.toString("hex", 0, r).match(/.{2}/g).join(" ")),
              this.length > r && (t += " ... ")),
            "<Buffer " + t + ">"
          );
        }),
        (u.prototype.compare = function (t, e, r, n, o) {
          if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
          if (
            (void 0 === e && (e = 0),
            void 0 === r && (r = t ? t.length : 0),
            void 0 === n && (n = 0),
            void 0 === o && (o = this.length),
            e < 0 || r > t.length || n < 0 || o > this.length)
          )
            throw new RangeError("out of range index");
          if (n >= o && e >= r) return 0;
          if (n >= o) return -1;
          if (e >= r) return 1;
          if (this === t) return 0;
          for (
            var i = (o >>>= 0) - (n >>>= 0),
              a = (r >>>= 0) - (e >>>= 0),
              s = Math.min(i, a),
              c = this.slice(n, o),
              f = t.slice(e, r),
              l = 0;
            l < s;
            ++l
          )
            if (c[l] !== f[l]) {
              ((i = c[l]), (a = f[l]));
              break;
            }
          return i < a ? -1 : a < i ? 1 : 0;
        }),
        (u.prototype.includes = function (t, e, r) {
          return -1 !== this.indexOf(t, e, r);
        }),
        (u.prototype.indexOf = function (t, e, r) {
          return v(this, t, e, r, !0);
        }),
        (u.prototype.lastIndexOf = function (t, e, r) {
          return v(this, t, e, r, !1);
        }),
        (u.prototype.write = function (t, e, r, n) {
          if (void 0 === e) ((n = "utf8"), (r = this.length), (e = 0));
          else if (void 0 === r && "string" == typeof e)
            ((n = e), (r = this.length), (e = 0));
          else {
            if (!isFinite(e))
              throw new Error(
                "Buffer.write(string, encoding, offset[, length]) is no longer supported",
              );
            ((e |= 0),
              isFinite(r)
                ? ((r |= 0), void 0 === n && (n = "utf8"))
                : ((n = r), (r = void 0)));
          }
          var o = this.length - e;
          if (
            ((void 0 === r || r > o) && (r = o),
            (t.length > 0 && (r < 0 || e < 0)) || e > this.length)
          )
            throw new RangeError("Attempt to write outside buffer bounds");
          n || (n = "utf8");
          for (var i = !1; ; )
            switch (n) {
              case "hex":
                return w(this, t, e, r);
              case "utf8":
              case "utf-8":
                return b(this, t, e, r);
              case "ascii":
                return E(this, t, e, r);
              case "latin1":
              case "binary":
                return S(this, t, e, r);
              case "base64":
                return x(this, t, e, r);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return _(this, t, e, r);
              default:
                if (i) throw new TypeError("Unknown encoding: " + n);
                ((n = ("" + n).toLowerCase()), (i = !0));
            }
        }),
        (u.prototype.toJSON = function () {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0),
          };
        }));
      function R(t, e, r) {
        var n = "";
        r = Math.min(t.length, r);
        for (var o = e; o < r; ++o) n += String.fromCharCode(127 & t[o]);
        return n;
      }
      function j(t, e, r) {
        var n = "";
        r = Math.min(t.length, r);
        for (var o = e; o < r; ++o) n += String.fromCharCode(t[o]);
        return n;
      }
      function P(t, e, r) {
        var n = t.length;
        ((!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n));
        for (var o = "", i = e; i < r; ++i) o += F(t[i]);
        return o;
      }
      function T(t, e, r) {
        for (var n = t.slice(e, r), o = "", i = 0; i < n.length; i += 2)
          o += String.fromCharCode(n[i] + 256 * n[i + 1]);
        return o;
      }
      function U(t, e, r) {
        if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
        if (t + e > r)
          throw new RangeError("Trying to access beyond buffer length");
      }
      function L(t, e, r, n, o, i) {
        if (!u.isBuffer(t))
          throw new TypeError('"buffer" argument must be a Buffer instance');
        if (e > o || e < i)
          throw new RangeError('"value" argument is out of bounds');
        if (r + n > t.length) throw new RangeError("Index out of range");
      }
      function B(t, e, r, n) {
        e < 0 && (e = 65535 + e + 1);
        for (var o = 0, i = Math.min(t.length - r, 2); o < i; ++o)
          t[r + o] =
            (e & (255 << (8 * (n ? o : 1 - o)))) >>> (8 * (n ? o : 1 - o));
      }
      function N(t, e, r, n) {
        e < 0 && (e = 4294967295 + e + 1);
        for (var o = 0, i = Math.min(t.length - r, 4); o < i; ++o)
          t[r + o] = (e >>> (8 * (n ? o : 3 - o))) & 255;
      }
      function C(t, e, r, n, o, i) {
        if (r + n > t.length) throw new RangeError("Index out of range");
        if (r < 0) throw new RangeError("Index out of range");
      }
      function k(t, e, r, n, i) {
        return (i || C(t, 0, r, 4), o.write(t, e, r, n, 23, 4), r + 4);
      }
      function D(t, e, r, n, i) {
        return (i || C(t, 0, r, 8), o.write(t, e, r, n, 52, 8), r + 8);
      }
      ((u.prototype.slice = function (t, e) {
        var r,
          n = this.length;
        if (
          ((t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n),
          (e = void 0 === e ? n : ~~e) < 0
            ? (e += n) < 0 && (e = 0)
            : e > n && (e = n),
          e < t && (e = t),
          u.TYPED_ARRAY_SUPPORT)
        )
          (r = this.subarray(t, e)).__proto__ = u.prototype;
        else {
          var o = e - t;
          r = new u(o, void 0);
          for (var i = 0; i < o; ++i) r[i] = this[i + t];
        }
        return r;
      }),
        (u.prototype.readUIntLE = function (t, e, r) {
          ((t |= 0), (e |= 0), r || U(t, e, this.length));
          for (var n = this[t], o = 1, i = 0; ++i < e && (o *= 256); )
            n += this[t + i] * o;
          return n;
        }),
        (u.prototype.readUIntBE = function (t, e, r) {
          ((t |= 0), (e |= 0), r || U(t, e, this.length));
          for (var n = this[t + --e], o = 1; e > 0 && (o *= 256); )
            n += this[t + --e] * o;
          return n;
        }),
        (u.prototype.readUInt8 = function (t, e) {
          return (e || U(t, 1, this.length), this[t]);
        }),
        (u.prototype.readUInt16LE = function (t, e) {
          return (e || U(t, 2, this.length), this[t] | (this[t + 1] << 8));
        }),
        (u.prototype.readUInt16BE = function (t, e) {
          return (e || U(t, 2, this.length), (this[t] << 8) | this[t + 1]);
        }),
        (u.prototype.readUInt32LE = function (t, e) {
          return (
            e || U(t, 4, this.length),
            (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
              16777216 * this[t + 3]
          );
        }),
        (u.prototype.readUInt32BE = function (t, e) {
          return (
            e || U(t, 4, this.length),
            16777216 * this[t] +
              ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
          );
        }),
        (u.prototype.readIntLE = function (t, e, r) {
          ((t |= 0), (e |= 0), r || U(t, e, this.length));
          for (var n = this[t], o = 1, i = 0; ++i < e && (o *= 256); )
            n += this[t + i] * o;
          return (n >= (o *= 128) && (n -= Math.pow(2, 8 * e)), n);
        }),
        (u.prototype.readIntBE = function (t, e, r) {
          ((t |= 0), (e |= 0), r || U(t, e, this.length));
          for (var n = e, o = 1, i = this[t + --n]; n > 0 && (o *= 256); )
            i += this[t + --n] * o;
          return (i >= (o *= 128) && (i -= Math.pow(2, 8 * e)), i);
        }),
        (u.prototype.readInt8 = function (t, e) {
          return (
            e || U(t, 1, this.length),
            128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
          );
        }),
        (u.prototype.readInt16LE = function (t, e) {
          e || U(t, 2, this.length);
          var r = this[t] | (this[t + 1] << 8);
          return 32768 & r ? 4294901760 | r : r;
        }),
        (u.prototype.readInt16BE = function (t, e) {
          e || U(t, 2, this.length);
          var r = this[t + 1] | (this[t] << 8);
          return 32768 & r ? 4294901760 | r : r;
        }),
        (u.prototype.readInt32LE = function (t, e) {
          return (
            e || U(t, 4, this.length),
            this[t] |
              (this[t + 1] << 8) |
              (this[t + 2] << 16) |
              (this[t + 3] << 24)
          );
        }),
        (u.prototype.readInt32BE = function (t, e) {
          return (
            e || U(t, 4, this.length),
            (this[t] << 24) |
              (this[t + 1] << 16) |
              (this[t + 2] << 8) |
              this[t + 3]
          );
        }),
        (u.prototype.readFloatLE = function (t, e) {
          return (e || U(t, 4, this.length), o.read(this, t, !0, 23, 4));
        }),
        (u.prototype.readFloatBE = function (t, e) {
          return (e || U(t, 4, this.length), o.read(this, t, !1, 23, 4));
        }),
        (u.prototype.readDoubleLE = function (t, e) {
          return (e || U(t, 8, this.length), o.read(this, t, !0, 52, 8));
        }),
        (u.prototype.readDoubleBE = function (t, e) {
          return (e || U(t, 8, this.length), o.read(this, t, !1, 52, 8));
        }),
        (u.prototype.writeUIntLE = function (t, e, r, n) {
          ((t = +t), (e |= 0), (r |= 0), n) ||
            L(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
          var o = 1,
            i = 0;
          for (this[e] = 255 & t; ++i < r && (o *= 256); )
            this[e + i] = (t / o) & 255;
          return e + r;
        }),
        (u.prototype.writeUIntBE = function (t, e, r, n) {
          ((t = +t), (e |= 0), (r |= 0), n) ||
            L(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
          var o = r - 1,
            i = 1;
          for (this[e + o] = 255 & t; --o >= 0 && (i *= 256); )
            this[e + o] = (t / i) & 255;
          return e + r;
        }),
        (u.prototype.writeUInt8 = function (t, e, r) {
          return (
            (t = +t),
            (e |= 0),
            r || L(this, t, e, 1, 255, 0),
            u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
            (this[e] = 255 & t),
            e + 1
          );
        }),
        (u.prototype.writeUInt16LE = function (t, e, r) {
          return (
            (t = +t),
            (e |= 0),
            r || L(this, t, e, 2, 65535, 0),
            u.TYPED_ARRAY_SUPPORT
              ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8))
              : B(this, t, e, !0),
            e + 2
          );
        }),
        (u.prototype.writeUInt16BE = function (t, e, r) {
          return (
            (t = +t),
            (e |= 0),
            r || L(this, t, e, 2, 65535, 0),
            u.TYPED_ARRAY_SUPPORT
              ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t))
              : B(this, t, e, !1),
            e + 2
          );
        }),
        (u.prototype.writeUInt32LE = function (t, e, r) {
          return (
            (t = +t),
            (e |= 0),
            r || L(this, t, e, 4, 4294967295, 0),
            u.TYPED_ARRAY_SUPPORT
              ? ((this[e + 3] = t >>> 24),
                (this[e + 2] = t >>> 16),
                (this[e + 1] = t >>> 8),
                (this[e] = 255 & t))
              : N(this, t, e, !0),
            e + 4
          );
        }),
        (u.prototype.writeUInt32BE = function (t, e, r) {
          return (
            (t = +t),
            (e |= 0),
            r || L(this, t, e, 4, 4294967295, 0),
            u.TYPED_ARRAY_SUPPORT
              ? ((this[e] = t >>> 24),
                (this[e + 1] = t >>> 16),
                (this[e + 2] = t >>> 8),
                (this[e + 3] = 255 & t))
              : N(this, t, e, !1),
            e + 4
          );
        }),
        (u.prototype.writeIntLE = function (t, e, r, n) {
          if (((t = +t), (e |= 0), !n)) {
            var o = Math.pow(2, 8 * r - 1);
            L(this, t, e, r, o - 1, -o);
          }
          var i = 0,
            a = 1,
            s = 0;
          for (this[e] = 255 & t; ++i < r && (a *= 256); )
            (t < 0 && 0 === s && 0 !== this[e + i - 1] && (s = 1),
              (this[e + i] = (((t / a) >> 0) - s) & 255));
          return e + r;
        }),
        (u.prototype.writeIntBE = function (t, e, r, n) {
          if (((t = +t), (e |= 0), !n)) {
            var o = Math.pow(2, 8 * r - 1);
            L(this, t, e, r, o - 1, -o);
          }
          var i = r - 1,
            a = 1,
            s = 0;
          for (this[e + i] = 255 & t; --i >= 0 && (a *= 256); )
            (t < 0 && 0 === s && 0 !== this[e + i + 1] && (s = 1),
              (this[e + i] = (((t / a) >> 0) - s) & 255));
          return e + r;
        }),
        (u.prototype.writeInt8 = function (t, e, r) {
          return (
            (t = +t),
            (e |= 0),
            r || L(this, t, e, 1, 127, -128),
            u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
            t < 0 && (t = 255 + t + 1),
            (this[e] = 255 & t),
            e + 1
          );
        }),
        (u.prototype.writeInt16LE = function (t, e, r) {
          return (
            (t = +t),
            (e |= 0),
            r || L(this, t, e, 2, 32767, -32768),
            u.TYPED_ARRAY_SUPPORT
              ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8))
              : B(this, t, e, !0),
            e + 2
          );
        }),
        (u.prototype.writeInt16BE = function (t, e, r) {
          return (
            (t = +t),
            (e |= 0),
            r || L(this, t, e, 2, 32767, -32768),
            u.TYPED_ARRAY_SUPPORT
              ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t))
              : B(this, t, e, !1),
            e + 2
          );
        }),
        (u.prototype.writeInt32LE = function (t, e, r) {
          return (
            (t = +t),
            (e |= 0),
            r || L(this, t, e, 4, 2147483647, -2147483648),
            u.TYPED_ARRAY_SUPPORT
              ? ((this[e] = 255 & t),
                (this[e + 1] = t >>> 8),
                (this[e + 2] = t >>> 16),
                (this[e + 3] = t >>> 24))
              : N(this, t, e, !0),
            e + 4
          );
        }),
        (u.prototype.writeInt32BE = function (t, e, r) {
          return (
            (t = +t),
            (e |= 0),
            r || L(this, t, e, 4, 2147483647, -2147483648),
            t < 0 && (t = 4294967295 + t + 1),
            u.TYPED_ARRAY_SUPPORT
              ? ((this[e] = t >>> 24),
                (this[e + 1] = t >>> 16),
                (this[e + 2] = t >>> 8),
                (this[e + 3] = 255 & t))
              : N(this, t, e, !1),
            e + 4
          );
        }),
        (u.prototype.writeFloatLE = function (t, e, r) {
          return k(this, t, e, !0, r);
        }),
        (u.prototype.writeFloatBE = function (t, e, r) {
          return k(this, t, e, !1, r);
        }),
        (u.prototype.writeDoubleLE = function (t, e, r) {
          return D(this, t, e, !0, r);
        }),
        (u.prototype.writeDoubleBE = function (t, e, r) {
          return D(this, t, e, !1, r);
        }),
        (u.prototype.copy = function (t, e, r, n) {
          if (
            (r || (r = 0),
            n || 0 === n || (n = this.length),
            e >= t.length && (e = t.length),
            e || (e = 0),
            n > 0 && n < r && (n = r),
            n === r)
          )
            return 0;
          if (0 === t.length || 0 === this.length) return 0;
          if (e < 0) throw new RangeError("targetStart out of bounds");
          if (r < 0 || r >= this.length)
            throw new RangeError("sourceStart out of bounds");
          if (n < 0) throw new RangeError("sourceEnd out of bounds");
          (n > this.length && (n = this.length),
            t.length - e < n - r && (n = t.length - e + r));
          var o,
            i = n - r;
          if (this === t && r < e && e < n)
            for (o = i - 1; o >= 0; --o) t[o + e] = this[o + r];
          else if (i < 1e3 || !u.TYPED_ARRAY_SUPPORT)
            for (o = 0; o < i; ++o) t[o + e] = this[o + r];
          else Uint8Array.prototype.set.call(t, this.subarray(r, r + i), e);
          return i;
        }),
        (u.prototype.fill = function (t, e, r, n) {
          if ("string" == typeof t) {
            if (
              ("string" == typeof e
                ? ((n = e), (e = 0), (r = this.length))
                : "string" == typeof r && ((n = r), (r = this.length)),
              1 === t.length)
            ) {
              var o = t.charCodeAt(0);
              o < 256 && (t = o);
            }
            if (void 0 !== n && "string" != typeof n)
              throw new TypeError("encoding must be a string");
            if ("string" == typeof n && !u.isEncoding(n))
              throw new TypeError("Unknown encoding: " + n);
          } else "number" == typeof t && (t &= 255);
          if (e < 0 || this.length < e || this.length < r)
            throw new RangeError("Out of range index");
          if (r <= e) return this;
          var i;
          if (
            ((e >>>= 0),
            (r = void 0 === r ? this.length : r >>> 0),
            t || (t = 0),
            "number" == typeof t)
          )
            for (i = e; i < r; ++i) this[i] = t;
          else {
            var a = u.isBuffer(t) ? t : M(new u(t, n).toString()),
              s = a.length;
            for (i = 0; i < r - e; ++i) this[i + e] = a[i % s];
          }
          return this;
        }));
      var I = /[^+\/0-9A-Za-z-_]/g;
      function F(t) {
        return t < 16 ? "0" + t.toString(16) : t.toString(16);
      }
      function M(t, e) {
        var r;
        e = e || 1 / 0;
        for (var n = t.length, o = null, i = [], a = 0; a < n; ++a) {
          if ((r = t.charCodeAt(a)) > 55295 && r < 57344) {
            if (!o) {
              if (r > 56319) {
                (e -= 3) > -1 && i.push(239, 191, 189);
                continue;
              }
              if (a + 1 === n) {
                (e -= 3) > -1 && i.push(239, 191, 189);
                continue;
              }
              o = r;
              continue;
            }
            if (r < 56320) {
              ((e -= 3) > -1 && i.push(239, 191, 189), (o = r));
              continue;
            }
            r = 65536 + (((o - 55296) << 10) | (r - 56320));
          } else o && (e -= 3) > -1 && i.push(239, 191, 189);
          if (((o = null), r < 128)) {
            if ((e -= 1) < 0) break;
            i.push(r);
          } else if (r < 2048) {
            if ((e -= 2) < 0) break;
            i.push((r >> 6) | 192, (63 & r) | 128);
          } else if (r < 65536) {
            if ((e -= 3) < 0) break;
            i.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
          } else {
            if (!(r < 1114112)) throw new Error("Invalid code point");
            if ((e -= 4) < 0) break;
            i.push(
              (r >> 18) | 240,
              ((r >> 12) & 63) | 128,
              ((r >> 6) & 63) | 128,
              (63 & r) | 128,
            );
          }
        }
        return i;
      }
      function Q(t) {
        return n.toByteArray(
          (function (t) {
            if (
              (t = (function (t) {
                return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
              })(t).replace(I, "")).length < 2
            )
              return "";
            for (; t.length % 4 != 0; ) t += "=";
            return t;
          })(t),
        );
      }
      function q(t, e, r, n) {
        for (var o = 0; o < n && !(o + r >= e.length || o >= t.length); ++o)
          e[o + r] = t[o];
        return o;
      }
    }).call(this, r(23));
  },
  function (t, e, r) {
    "use strict";
    ((e.byteLength = function (t) {
      var e = c(t),
        r = e[0],
        n = e[1];
      return (3 * (r + n)) / 4 - n;
    }),
      (e.toByteArray = function (t) {
        var e,
          r,
          n = c(t),
          a = n[0],
          s = n[1],
          u = new i(
            (function (t, e, r) {
              return (3 * (e + r)) / 4 - r;
            })(0, a, s),
          ),
          f = 0,
          l = s > 0 ? a - 4 : a;
        for (r = 0; r < l; r += 4)
          ((e =
            (o[t.charCodeAt(r)] << 18) |
            (o[t.charCodeAt(r + 1)] << 12) |
            (o[t.charCodeAt(r + 2)] << 6) |
            o[t.charCodeAt(r + 3)]),
            (u[f++] = (e >> 16) & 255),
            (u[f++] = (e >> 8) & 255),
            (u[f++] = 255 & e));
        2 === s &&
          ((e = (o[t.charCodeAt(r)] << 2) | (o[t.charCodeAt(r + 1)] >> 4)),
          (u[f++] = 255 & e));
        1 === s &&
          ((e =
            (o[t.charCodeAt(r)] << 10) |
            (o[t.charCodeAt(r + 1)] << 4) |
            (o[t.charCodeAt(r + 2)] >> 2)),
          (u[f++] = (e >> 8) & 255),
          (u[f++] = 255 & e));
        return u;
      }),
      (e.fromByteArray = function (t) {
        for (
          var e, r = t.length, o = r % 3, i = [], a = 0, s = r - o;
          a < s;
          a += 16383
        )
          i.push(f(t, a, a + 16383 > s ? s : a + 16383));
        1 === o
          ? ((e = t[r - 1]), i.push(n[e >> 2] + n[(e << 4) & 63] + "=="))
          : 2 === o &&
            ((e = (t[r - 2] << 8) + t[r - 1]),
            i.push(n[e >> 10] + n[(e >> 4) & 63] + n[(e << 2) & 63] + "="));
        return i.join("");
      }));
    for (
      var n = [],
        o = [],
        i = "undefined" != typeof Uint8Array ? Uint8Array : Array,
        a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        s = 0,
        u = a.length;
      s < u;
      ++s
    )
      ((n[s] = a[s]), (o[a.charCodeAt(s)] = s));
    function c(t) {
      var e = t.length;
      if (e % 4 > 0)
        throw new Error("Invalid string. Length must be a multiple of 4");
      var r = t.indexOf("=");
      return (-1 === r && (r = e), [r, r === e ? 0 : 4 - (r % 4)]);
    }
    function f(t, e, r) {
      for (var o, i, a = [], s = e; s < r; s += 3)
        ((o =
          ((t[s] << 16) & 16711680) +
          ((t[s + 1] << 8) & 65280) +
          (255 & t[s + 2])),
          a.push(
            n[((i = o) >> 18) & 63] +
              n[(i >> 12) & 63] +
              n[(i >> 6) & 63] +
              n[63 & i],
          ));
      return a.join("");
    }
    ((o["-".charCodeAt(0)] = 62), (o["_".charCodeAt(0)] = 63));
  },
  function (t, e) {
    ((e.read = function (t, e, r, n, o) {
      var i,
        a,
        s = 8 * o - n - 1,
        u = (1 << s) - 1,
        c = u >> 1,
        f = -7,
        l = r ? o - 1 : 0,
        h = r ? -1 : 1,
        p = t[e + l];
      for (
        l += h, i = p & ((1 << -f) - 1), p >>= -f, f += s;
        f > 0;
        i = 256 * i + t[e + l], l += h, f -= 8
      );
      for (
        a = i & ((1 << -f) - 1), i >>= -f, f += n;
        f > 0;
        a = 256 * a + t[e + l], l += h, f -= 8
      );
      if (0 === i) i = 1 - c;
      else {
        if (i === u) return a ? NaN : (1 / 0) * (p ? -1 : 1);
        ((a += Math.pow(2, n)), (i -= c));
      }
      return (p ? -1 : 1) * a * Math.pow(2, i - n);
    }),
      (e.write = function (t, e, r, n, o, i) {
        var a,
          s,
          u,
          c = 8 * i - o - 1,
          f = (1 << c) - 1,
          l = f >> 1,
          h = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
          p = n ? 0 : i - 1,
          d = n ? 1 : -1,
          y = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
        for (
          e = Math.abs(e),
            isNaN(e) || e === 1 / 0
              ? ((s = isNaN(e) ? 1 : 0), (a = f))
              : ((a = Math.floor(Math.log(e) / Math.LN2)),
                e * (u = Math.pow(2, -a)) < 1 && (a--, (u *= 2)),
                (e += a + l >= 1 ? h / u : h * Math.pow(2, 1 - l)) * u >= 2 &&
                  (a++, (u /= 2)),
                a + l >= f
                  ? ((s = 0), (a = f))
                  : a + l >= 1
                    ? ((s = (e * u - 1) * Math.pow(2, o)), (a += l))
                    : ((s = e * Math.pow(2, l - 1) * Math.pow(2, o)), (a = 0)));
          o >= 8;
          t[r + p] = 255 & s, p += d, s /= 256, o -= 8
        );
        for (
          a = (a << o) | s, c += o;
          c > 0;
          t[r + p] = 255 & a, p += d, a /= 256, c -= 8
        );
        t[r + p - d] |= 128 * y;
      }));
  },
  function (t, e) {
    var r = {}.toString;
    t.exports =
      Array.isArray ||
      function (t) {
        return "[object Array]" == r.call(t);
      };
  },
  function (t, e, r) {
    "use strict";
    r.r(e);
    var n = r(11),
      o = r.n(n),
      i = r(5),
      a = r.n(i),
      s =
        (r(54),
        /(^https?:\/\/(aemlocal|wwwdev|wwwqa|wwwstage|preview|www|author|authorstage)\.nvidia\.(com|cn)(\/[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*)?)/),
      u = {
        "/auth/gtc": "/assets/starfleet-auth/splash.js",
        "/auth/gtc/": "/assets/starfleet-auth/splash.js",
        "/auth/aid": "/assets/starfleet-auth/splash.js",
        "/auth/aid/": "/assets/starfleet-auth/splash.js",
        "/auth/events": "/assets/starfleet-auth/splash.js",
        "/auth/events/": "/assets/starfleet-auth/splash.js",
        "/auth/hints/": "/assets/starfleet-auth/hints/hints.js",
        "/auth/hints": "/assets/starfleet-auth/hints/hints.js",
        "/auth/aisummit": "/assets/starfleet-auth/splash.js",
        "/auth/aisummit/": "/assets/starfleet-auth/splash.js",
        "/auth/provider": "/assets/account/provider/bundle.js",
        "/auth/provider/": "/assets/account/provider/bundle.js",
      },
      c = r(52),
      f = r.n(c);
    function l(t) {
      this.message = t;
    }
    ((l.prototype = new Error()), (l.prototype.name = "InvalidCharacterError"));
    var h =
      ("undefined" != typeof window &&
        window.atob &&
        window.atob.bind(window)) ||
      function (t) {
        var e = String(t).replace(/=+$/, "");
        if (e.length % 4 == 1)
          throw new l(
            "'atob' failed: The string to be decoded is not correctly encoded.",
          );
        for (
          var r, n, o = 0, i = 0, a = "";
          (n = e.charAt(i++));
          ~n && ((r = o % 4 ? 64 * r + n : n), o++ % 4)
            ? (a += String.fromCharCode(255 & (r >> ((-2 * o) & 6))))
            : 0
        )
          n =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
              n,
            );
        return a;
      };
    function p(t) {
      var e = t.replace(/-/g, "+").replace(/_/g, "/");
      switch (e.length % 4) {
        case 0:
          break;
        case 2:
          e += "==";
          break;
        case 3:
          e += "=";
          break;
        default:
          throw "Illegal base64url string!";
      }
      try {
        return (function (t) {
          return decodeURIComponent(
            h(t).replace(/(.)/g, function (t, e) {
              var r = e.charCodeAt(0).toString(16).toUpperCase();
              return (r.length < 2 && (r = "0" + r), "%" + r);
            }),
          );
        })(e);
      } catch (t) {
        return h(e);
      }
    }
    function d(t) {
      this.message = t;
    }
    ((d.prototype = new Error()), (d.prototype.name = "InvalidTokenError"));
    var y = function (t, e) {
      if ("string" != typeof t) throw new d("Invalid token specified");
      var r = !0 === (e = e || {}).header ? 0 : 1;
      try {
        return JSON.parse(p(t.split(".")[r]));
      } catch (t) {
        throw new d("Invalid token specified: " + t.message);
      }
    };
    function g(t, e) {
      var r = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        (e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          r.push.apply(r, n));
      }
      return r;
    }
    var v = function (t, e, r) {
        var n = 1e3 * Number(r);
        if (Number.isFinite(n) && !(n <= 0)) {
          var o = new Date(Date.now() + n).toUTCString();
          document.cookie = ""
            .concat(t, "=")
            .concat(encodeURIComponent(String(e)), "; expires=")
            .concat(o, "; path=/; domain=")
            .concat(".nvidia.com", "; Secure; SameSite=Lax");
        }
      },
      m = function () {
        var t = localStorage.getItem("nvDeviceId");
        if (t) return t;
        var e = Date.now();
        return (
          (function (t) {
            localStorage.setItem("nvDeviceId", t);
          })(
            (t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
              /[xy]/g,
              function (t) {
                var r = (e + 16 * Math.random()) % 16 | 0;
                return (
                  (e = Math.floor(e / 16)),
                  ("x" === t ? r : (3 & r) | 8).toString(16)
                );
              },
            )),
          ),
          t
        );
      },
      w = function (t, e) {
        var r = new Date();
        r = new Date(r.getTime() + 1e3 * t.get("expires_in"));
        var n = t.get("id_token"),
          o = t.get("refresh_token"),
          i = y(n),
          a = (function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = null != arguments[e] ? arguments[e] : {};
              e % 2
                ? g(Object(r), !0).forEach(function (e) {
                    f()(t, e, r[e]);
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      t,
                      Object.getOwnPropertyDescriptors(r),
                    )
                  : g(Object(r)).forEach(function (e) {
                      Object.defineProperty(
                        t,
                        e,
                        Object.getOwnPropertyDescriptor(r, e),
                      );
                    });
            }
            return t;
          })(
            {
              access_token: t.get("access_token"),
              idp_id: null == i ? void 0 : i.idp_id,
              id_token: n,
              expiration: r,
              email: null == i ? void 0 : i.email,
              client_id: e.client_id,
            },
            o && { refresh_token: o },
          );
        (localStorage.setItem(
          Object({
            bf_QiQKCSmVP6hcMnWQHtNAvABzDMIbFXSbX0QxLdh4: "prvyFedarationData",
            "nVBlb-1OsO_WE2ttj_VqK8je1u9__gE-Vcxw3tMwyqI": "prvyFedarationData",
            "VPwcyyOw2vq-9uwjexFdfj3N62TqAtciut87fAkxEa4": "acctFederationData",
            HdpDyyR1DqQFapN2MBk5kjJgAvu6UTXRDgtwLhQjrH8: "acctFederationData",
            "7P7a5UOQktoVZrhHUK_6LW1WTsBs_lu7-M5xydCnMAc": "acctFederationData",
            Sj5csgQhOSdie5em4TGAG12CLwv1fm0J4dWAmBTfS2E: "acctFederationData",
            gZa8m8C7EwByRrxIP8452sWhNaH3QZ9A2E1c8EeBM9I: "nvodFederationData",
            _uLecQaU_5m9dfXiGXcNnZqtb86K1PFE9SU4zHE9BCQ: "nvodFederationData",
            "qyGmG-hQQKxuw8SMyrvlEkitqx2oI2r1h7ctgRQFSAs": "citcFederationData",
            "xAX98X6BqKdjws8pv-O3QjiD00jNdlw1fjczXNH_Hck":
              "acdmyFederationData",
            "CJ7L66KtoyhKfjVdh-hPg4vp2yIvtfNPHSwepbB-qJc":
              "prvyAdminFedarationData",
          })[e.client_id],
          JSON.stringify(a),
        ),
          localStorage.setItem(
            "lastLoginData",
            Object({
              bf_QiQKCSmVP6hcMnWQHtNAvABzDMIbFXSbX0QxLdh4: "prvyFedarationData",
              "nVBlb-1OsO_WE2ttj_VqK8je1u9__gE-Vcxw3tMwyqI":
                "prvyFedarationData",
              "VPwcyyOw2vq-9uwjexFdfj3N62TqAtciut87fAkxEa4":
                "acctFederationData",
              HdpDyyR1DqQFapN2MBk5kjJgAvu6UTXRDgtwLhQjrH8: "acctFederationData",
              "7P7a5UOQktoVZrhHUK_6LW1WTsBs_lu7-M5xydCnMAc":
                "acctFederationData",
              Sj5csgQhOSdie5em4TGAG12CLwv1fm0J4dWAmBTfS2E: "acctFederationData",
              gZa8m8C7EwByRrxIP8452sWhNaH3QZ9A2E1c8EeBM9I: "nvodFederationData",
              _uLecQaU_5m9dfXiGXcNnZqtb86K1PFE9SU4zHE9BCQ: "nvodFederationData",
              "qyGmG-hQQKxuw8SMyrvlEkitqx2oI2r1h7ctgRQFSAs":
                "citcFederationData",
              "xAX98X6BqKdjws8pv-O3QjiD00jNdlw1fjczXNH_Hck":
                "acdmyFederationData",
              "CJ7L66KtoyhKfjVdh-hPg4vp2yIvtfNPHSwepbB-qJc":
                "prvyAdminFedarationData",
            })[e.client_id],
          ));
        var s,
          u,
          c = JSON.stringify({
            login_hint: null == i ? void 0 : i.email,
            idp_id: null == i ? void 0 : i.idp_id,
            timestamp: new Date().toISOString(),
            sub: null == i ? void 0 : i.sub,
          });
        (localStorage.setItem("loginHints", c),
          (s = c),
          (u = "loginHints"),
          (document.cookie = ""
            .concat(u, "=")
            .concat(s, "; expires=")
            .concat(
              new Date(new Date().getTime() + 31536e6).toUTCString(),
              "; domain=",
            )
            .concat(".nvidia.com", "; path=/; secure")));
      },
      b = function (t) {
        for (
          var e = "",
            r =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
            n = 0;
          n < t;
          n++
        )
          e = e.concat(r.charAt(Math.floor(Math.random() * r.length)));
        return btoa(e);
      },
      E = (function () {
        var t = o()(
          a.a.mark(function t() {
            var e, r, n, o;
            return a.a.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (e = window.crypto.getRandomValues(new Uint8Array(32))),
                      (r = S(e)),
                      sessionStorage.setItem("CV", r),
                      (n = new TextEncoder().encode(r)),
                      (t.next = 6),
                      window.crypto.subtle.digest("SHA-256", n)
                    );
                  case 6:
                    return (
                      (o = t.sent),
                      console.log(o),
                      t.abrupt("return", S(new Uint8Array(o)))
                    );
                  case 9:
                  case "end":
                    return t.stop();
                }
            }, t);
          }),
        );
        return function () {
          return t.apply(this, arguments);
        };
      })();
    function S(t) {
      return btoa(String.fromCharCode.apply(null, t))
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=/g, "");
    }
    var x = function (t) {
        (null == t ? void 0 : t.includes("javascript:")) ||
          (null == t ? void 0 : t.includes("vbscript:")) ||
          (t && t.match(s) && (location.href = t));
      },
      _ = r(0),
      O = r(20),
      A = r(6);
    function R(t) {
      const e = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0",
      };
      return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function (t) {
        return e[t];
      });
    }
    function j(t, e) {
      ((this._pairs = []), t && Object(A.a)(t, this, e));
    }
    const P = j.prototype;
    ((P.append = function (t, e) {
      this._pairs.push([t, e]);
    }),
      (P.toString = function (t) {
        const e = t
          ? function (e) {
              return t.call(this, e, R);
            }
          : R;
        return this._pairs
          .map(function (t) {
            return e(t[0]) + "=" + e(t[1]);
          }, "")
          .join("&");
      }));
    var T = j;
    function U(t) {
      return encodeURIComponent(t)
        .replace(/%3A/gi, ":")
        .replace(/%24/g, "$")
        .replace(/%2C/gi, ",")
        .replace(/%20/g, "+")
        .replace(/%5B/gi, "[")
        .replace(/%5D/gi, "]");
    }
    function L(t, e, r) {
      if (!e) return t;
      const n = (r && r.encode) || U,
        o = r && r.serialize;
      let i;
      if (
        ((i = o
          ? o(e, r)
          : _.a.isURLSearchParams(e)
            ? e.toString()
            : new T(e, r).toString(n)),
        i)
      ) {
        const e = t.indexOf("#");
        (-1 !== e && (t = t.slice(0, e)),
          (t += (-1 === t.indexOf("?") ? "?" : "&") + i));
      }
      return t;
    }
    var B = class {
        constructor() {
          this.handlers = [];
        }
        use(t, e, r) {
          return (
            this.handlers.push({
              fulfilled: t,
              rejected: e,
              synchronous: !!r && r.synchronous,
              runWhen: r ? r.runWhen : null,
            }),
            this.handlers.length - 1
          );
        }
        eject(t) {
          this.handlers[t] && (this.handlers[t] = null);
        }
        clear() {
          this.handlers && (this.handlers = []);
        }
        forEach(t) {
          _.a.forEach(this.handlers, function (e) {
            null !== e && t(e);
          });
        }
      },
      N = r(1),
      C = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1,
      };
    var k = {
      isBrowser: !0,
      classes: {
        URLSearchParams:
          "undefined" != typeof URLSearchParams ? URLSearchParams : T,
        FormData: "undefined" != typeof FormData ? FormData : null,
        Blob: "undefined" != typeof Blob ? Blob : null,
      },
      isStandardBrowserEnv: (() => {
        let t;
        return (
          ("undefined" == typeof navigator ||
            ("ReactNative" !== (t = navigator.product) &&
              "NativeScript" !== t &&
              "NS" !== t)) &&
          "undefined" != typeof window &&
          "undefined" != typeof document
        );
      })(),
      isStandardBrowserWebWorkerEnv:
        "undefined" != typeof WorkerGlobalScope &&
        self instanceof WorkerGlobalScope &&
        "function" == typeof self.importScripts,
      protocols: ["http", "https", "file", "blob", "url", "data"],
    };
    var D = function (t) {
      function e(t, r, n, o) {
        let i = t[o++];
        const a = Number.isFinite(+i),
          s = o >= t.length;
        if (((i = !i && _.a.isArray(n) ? n.length : i), s))
          return (_.a.hasOwnProp(n, i) ? (n[i] = [n[i], r]) : (n[i] = r), !a);
        (n[i] && _.a.isObject(n[i])) || (n[i] = []);
        return (
          e(t, r, n[i], o) &&
            _.a.isArray(n[i]) &&
            (n[i] = (function (t) {
              const e = {},
                r = Object.keys(t);
              let n;
              const o = r.length;
              let i;
              for (n = 0; n < o; n++) ((i = r[n]), (e[i] = t[i]));
              return e;
            })(n[i])),
          !a
        );
      }
      if (_.a.isFormData(t) && _.a.isFunction(t.entries)) {
        const r = {};
        return (
          _.a.forEachEntry(t, (t, n) => {
            e(
              (function (t) {
                return _.a
                  .matchAll(/\w+|\[(\w*)]/g, t)
                  .map((t) => ("[]" === t[0] ? "" : t[1] || t[0]));
              })(t),
              n,
              r,
              0,
            );
          }),
          r
        );
      }
      return null;
    };
    const I = { "Content-Type": void 0 };
    const F = {
      transitional: C,
      adapter: ["xhr", "http"],
      transformRequest: [
        function (t, e) {
          const r = e.getContentType() || "",
            n = r.indexOf("application/json") > -1,
            o = _.a.isObject(t);
          o && _.a.isHTMLForm(t) && (t = new FormData(t));
          if (_.a.isFormData(t)) return n && n ? JSON.stringify(D(t)) : t;
          if (
            _.a.isArrayBuffer(t) ||
            _.a.isBuffer(t) ||
            _.a.isStream(t) ||
            _.a.isFile(t) ||
            _.a.isBlob(t)
          )
            return t;
          if (_.a.isArrayBufferView(t)) return t.buffer;
          if (_.a.isURLSearchParams(t))
            return (
              e.setContentType(
                "application/x-www-form-urlencoded;charset=utf-8",
                !1,
              ),
              t.toString()
            );
          let i;
          if (o) {
            if (r.indexOf("application/x-www-form-urlencoded") > -1)
              return (function (t, e) {
                return Object(A.a)(
                  t,
                  new k.classes.URLSearchParams(),
                  Object.assign(
                    {
                      visitor: function (t, e, r, n) {
                        return k.isNode && _.a.isBuffer(t)
                          ? (this.append(e, t.toString("base64")), !1)
                          : n.defaultVisitor.apply(this, arguments);
                      },
                    },
                    e,
                  ),
                );
              })(t, this.formSerializer).toString();
            if (
              (i = _.a.isFileList(t)) ||
              r.indexOf("multipart/form-data") > -1
            ) {
              const e = this.env && this.env.FormData;
              return Object(A.a)(
                i ? { "files[]": t } : t,
                e && new e(),
                this.formSerializer,
              );
            }
          }
          return o || n
            ? (e.setContentType("application/json", !1),
              (function (t, e, r) {
                if (_.a.isString(t))
                  try {
                    return ((e || JSON.parse)(t), _.a.trim(t));
                  } catch (t) {
                    if ("SyntaxError" !== t.name) throw t;
                  }
                return (r || JSON.stringify)(t);
              })(t))
            : t;
        },
      ],
      transformResponse: [
        function (t) {
          const e = this.transitional || F.transitional,
            r = e && e.forcedJSONParsing,
            n = "json" === this.responseType;
          if (t && _.a.isString(t) && ((r && !this.responseType) || n)) {
            const r = !(e && e.silentJSONParsing) && n;
            try {
              return JSON.parse(t);
            } catch (t) {
              if (r) {
                if ("SyntaxError" === t.name)
                  throw N.a.from(
                    t,
                    N.a.ERR_BAD_RESPONSE,
                    this,
                    null,
                    this.response,
                  );
                throw t;
              }
            }
          }
          return t;
        },
      ],
      timeout: 0,
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN",
      maxContentLength: -1,
      maxBodyLength: -1,
      env: { FormData: k.classes.FormData, Blob: k.classes.Blob },
      validateStatus: function (t) {
        return t >= 200 && t < 300;
      },
      headers: { common: { Accept: "application/json, text/plain, */*" } },
    };
    (_.a.forEach(["delete", "get", "head"], function (t) {
      F.headers[t] = {};
    }),
      _.a.forEach(["post", "put", "patch"], function (t) {
        F.headers[t] = _.a.merge(I);
      }));
    var M = F;
    const Q = _.a.toObjectSet([
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent",
    ]);
    const q = Symbol("internals");
    function H(t) {
      return t && String(t).trim().toLowerCase();
    }
    function z(t) {
      return !1 === t || null == t ? t : _.a.isArray(t) ? t.map(z) : String(t);
    }
    function K(t, e, r, n, o) {
      return _.a.isFunction(n)
        ? n.call(this, e, r)
        : (o && (e = r),
          _.a.isString(e)
            ? _.a.isString(n)
              ? -1 !== e.indexOf(n)
              : _.a.isRegExp(n)
                ? n.test(e)
                : void 0
            : void 0);
    }
    class X {
      constructor(t) {
        t && this.set(t);
      }
      set(t, e, r) {
        const n = this;
        function o(t, e, r) {
          const o = H(e);
          if (!o) throw new Error("header name must be a non-empty string");
          const i = _.a.findKey(n, o);
          (!i ||
            void 0 === n[i] ||
            !0 === r ||
            (void 0 === r && !1 !== n[i])) &&
            (n[i || e] = z(t));
        }
        const i = (t, e) => _.a.forEach(t, (t, r) => o(t, r, e));
        return (
          _.a.isPlainObject(t) || t instanceof this.constructor
            ? i(t, e)
            : _.a.isString(t) &&
                (t = t.trim()) &&
                !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim())
              ? i(
                  ((t) => {
                    const e = {};
                    let r, n, o;
                    return (
                      t &&
                        t.split("\n").forEach(function (t) {
                          ((o = t.indexOf(":")),
                            (r = t.substring(0, o).trim().toLowerCase()),
                            (n = t.substring(o + 1).trim()),
                            !r ||
                              (e[r] && Q[r]) ||
                              ("set-cookie" === r
                                ? e[r]
                                  ? e[r].push(n)
                                  : (e[r] = [n])
                                : (e[r] = e[r] ? e[r] + ", " + n : n)));
                        }),
                      e
                    );
                  })(t),
                  e,
                )
              : null != t && o(e, t, r),
          this
        );
      }
      get(t, e) {
        if ((t = H(t))) {
          const r = _.a.findKey(this, t);
          if (r) {
            const t = this[r];
            if (!e) return t;
            if (!0 === e)
              return (function (t) {
                const e = Object.create(null),
                  r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                let n;
                for (; (n = r.exec(t)); ) e[n[1]] = n[2];
                return e;
              })(t);
            if (_.a.isFunction(e)) return e.call(this, t, r);
            if (_.a.isRegExp(e)) return e.exec(t);
            throw new TypeError("parser must be boolean|regexp|function");
          }
        }
      }
      has(t, e) {
        if ((t = H(t))) {
          const r = _.a.findKey(this, t);
          return !(!r || void 0 === this[r] || (e && !K(0, this[r], r, e)));
        }
        return !1;
      }
      delete(t, e) {
        const r = this;
        let n = !1;
        function o(t) {
          if ((t = H(t))) {
            const o = _.a.findKey(r, t);
            !o || (e && !K(0, r[o], o, e)) || (delete r[o], (n = !0));
          }
        }
        return (_.a.isArray(t) ? t.forEach(o) : o(t), n);
      }
      clear(t) {
        const e = Object.keys(this);
        let r = e.length,
          n = !1;
        for (; r--; ) {
          const o = e[r];
          (t && !K(0, this[o], o, t, !0)) || (delete this[o], (n = !0));
        }
        return n;
      }
      normalize(t) {
        const e = this,
          r = {};
        return (
          _.a.forEach(this, (n, o) => {
            const i = _.a.findKey(r, o);
            if (i) return ((e[i] = z(n)), void delete e[o]);
            const a = t
              ? (function (t) {
                  return t
                    .trim()
                    .toLowerCase()
                    .replace(
                      /([a-z\d])(\w*)/g,
                      (t, e, r) => e.toUpperCase() + r,
                    );
                })(o)
              : String(o).trim();
            (a !== o && delete e[o], (e[a] = z(n)), (r[a] = !0));
          }),
          this
        );
      }
      concat(...t) {
        return this.constructor.concat(this, ...t);
      }
      toJSON(t) {
        const e = Object.create(null);
        return (
          _.a.forEach(this, (r, n) => {
            null != r &&
              !1 !== r &&
              (e[n] = t && _.a.isArray(r) ? r.join(", ") : r);
          }),
          e
        );
      }
      [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]();
      }
      toString() {
        return Object.entries(this.toJSON())
          .map(([t, e]) => t + ": " + e)
          .join("\n");
      }
      get [Symbol.toStringTag]() {
        return "AxiosHeaders";
      }
      static from(t) {
        return t instanceof this ? t : new this(t);
      }
      static concat(t, ...e) {
        const r = new this(t);
        return (e.forEach((t) => r.set(t)), r);
      }
      static accessor(t) {
        const e = (this[q] = this[q] = { accessors: {} }).accessors,
          r = this.prototype;
        function n(t) {
          const n = H(t);
          e[n] ||
            (!(function (t, e) {
              const r = _.a.toCamelCase(" " + e);
              ["get", "set", "has"].forEach((n) => {
                Object.defineProperty(t, n + r, {
                  value: function (t, r, o) {
                    return this[n].call(this, e, t, r, o);
                  },
                  configurable: !0,
                });
              });
            })(r, t),
            (e[n] = !0));
        }
        return (_.a.isArray(t) ? t.forEach(n) : n(t), this);
      }
    }
    (X.accessor([
      "Content-Type",
      "Content-Length",
      "Accept",
      "Accept-Encoding",
      "User-Agent",
      "Authorization",
    ]),
      _.a.freezeMethods(X.prototype),
      _.a.freezeMethods(X));
    var G = X;
    function V(t, e) {
      const r = this || M,
        n = e || r,
        o = G.from(n.headers);
      let i = n.data;
      return (
        _.a.forEach(t, function (t) {
          i = t.call(r, i, o.normalize(), e ? e.status : void 0);
        }),
        o.normalize(),
        i
      );
    }
    function J(t) {
      return !(!t || !t.__CANCEL__);
    }
    function W(t, e, r) {
      (N.a.call(this, null == t ? "canceled" : t, N.a.ERR_CANCELED, e, r),
        (this.name = "CanceledError"));
    }
    _.a.inherits(W, N.a, { __CANCEL__: !0 });
    var Y = W,
      Z = r(21);
    var $ = k.isStandardBrowserEnv
      ? {
          write: function (t, e, r, n, o, i) {
            const a = [];
            (a.push(t + "=" + encodeURIComponent(e)),
              _.a.isNumber(r) && a.push("expires=" + new Date(r).toGMTString()),
              _.a.isString(n) && a.push("path=" + n),
              _.a.isString(o) && a.push("domain=" + o),
              !0 === i && a.push("secure"),
              (document.cookie = a.join("; ")));
          },
          read: function (t) {
            const e = document.cookie.match(
              new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"),
            );
            return e ? decodeURIComponent(e[3]) : null;
          },
          remove: function (t) {
            this.write(t, "", Date.now() - 864e5);
          },
        }
      : {
          write: function () {},
          read: function () {
            return null;
          },
          remove: function () {},
        };
    function tt(t, e) {
      return t && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
        ? (function (t, e) {
            return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t;
          })(t, e)
        : e;
    }
    var et = k.isStandardBrowserEnv
      ? (function () {
          const t = /(msie|trident)/i.test(navigator.userAgent),
            e = document.createElement("a");
          let r;
          function n(r) {
            let n = r;
            return (
              t && (e.setAttribute("href", n), (n = e.href)),
              e.setAttribute("href", n),
              {
                href: e.href,
                protocol: e.protocol ? e.protocol.replace(/:$/, "") : "",
                host: e.host,
                search: e.search ? e.search.replace(/^\?/, "") : "",
                hash: e.hash ? e.hash.replace(/^#/, "") : "",
                hostname: e.hostname,
                port: e.port,
                pathname:
                  "/" === e.pathname.charAt(0) ? e.pathname : "/" + e.pathname,
              }
            );
          }
          return (
            (r = n(window.location.href)),
            function (t) {
              const e = _.a.isString(t) ? n(t) : t;
              return e.protocol === r.protocol && e.host === r.host;
            }
          );
        })()
      : function () {
          return !0;
        };
    var rt = function (t, e) {
      t = t || 10;
      const r = new Array(t),
        n = new Array(t);
      let o,
        i = 0,
        a = 0;
      return (
        (e = void 0 !== e ? e : 1e3),
        function (s) {
          const u = Date.now(),
            c = n[a];
          (o || (o = u), (r[i] = s), (n[i] = u));
          let f = a,
            l = 0;
          for (; f !== i; ) ((l += r[f++]), (f %= t));
          if (((i = (i + 1) % t), i === a && (a = (a + 1) % t), u - o < e))
            return;
          const h = c && u - c;
          return h ? Math.round((1e3 * l) / h) : void 0;
        }
      );
    };
    function nt(t, e) {
      let r = 0;
      const n = rt(50, 250);
      return (o) => {
        const i = o.loaded,
          a = o.lengthComputable ? o.total : void 0,
          s = i - r,
          u = n(s);
        r = i;
        const c = {
          loaded: i,
          total: a,
          progress: a ? i / a : void 0,
          bytes: s,
          rate: u || void 0,
          estimated: u && a && i <= a ? (a - i) / u : void 0,
          event: o,
        };
        ((c[e ? "download" : "upload"] = !0), t(c));
      };
    }
    var ot =
      "undefined" != typeof XMLHttpRequest &&
      function (t) {
        return new Promise(function (e, r) {
          let n = t.data;
          const o = G.from(t.headers).normalize(),
            i = t.responseType;
          let a;
          function s() {
            (t.cancelToken && t.cancelToken.unsubscribe(a),
              t.signal && t.signal.removeEventListener("abort", a));
          }
          _.a.isFormData(n) &&
            (k.isStandardBrowserEnv || k.isStandardBrowserWebWorkerEnv
              ? o.setContentType(!1)
              : o.setContentType("multipart/form-data;", !1));
          let u = new XMLHttpRequest();
          if (t.auth) {
            const e = t.auth.username || "",
              r = t.auth.password
                ? unescape(encodeURIComponent(t.auth.password))
                : "";
            o.set("Authorization", "Basic " + btoa(e + ":" + r));
          }
          const c = tt(t.baseURL, t.url);
          function f() {
            if (!u) return;
            const n = G.from(
              "getAllResponseHeaders" in u && u.getAllResponseHeaders(),
            );
            (!(function (t, e, r) {
              const n = r.config.validateStatus;
              r.status && n && !n(r.status)
                ? e(
                    new N.a(
                      "Request failed with status code " + r.status,
                      [N.a.ERR_BAD_REQUEST, N.a.ERR_BAD_RESPONSE][
                        Math.floor(r.status / 100) - 4
                      ],
                      r.config,
                      r.request,
                      r,
                    ),
                  )
                : t(r);
            })(
              function (t) {
                (e(t), s());
              },
              function (t) {
                (r(t), s());
              },
              {
                data:
                  i && "text" !== i && "json" !== i
                    ? u.response
                    : u.responseText,
                status: u.status,
                statusText: u.statusText,
                headers: n,
                config: t,
                request: u,
              },
            ),
              (u = null));
          }
          if (
            (u.open(
              t.method.toUpperCase(),
              L(c, t.params, t.paramsSerializer),
              !0,
            ),
            (u.timeout = t.timeout),
            "onloadend" in u
              ? (u.onloadend = f)
              : (u.onreadystatechange = function () {
                  u &&
                    4 === u.readyState &&
                    (0 !== u.status ||
                      (u.responseURL &&
                        0 === u.responseURL.indexOf("file:"))) &&
                    setTimeout(f);
                }),
            (u.onabort = function () {
              u &&
                (r(new N.a("Request aborted", N.a.ECONNABORTED, t, u)),
                (u = null));
            }),
            (u.onerror = function () {
              (r(new N.a("Network Error", N.a.ERR_NETWORK, t, u)), (u = null));
            }),
            (u.ontimeout = function () {
              let e = t.timeout
                ? "timeout of " + t.timeout + "ms exceeded"
                : "timeout exceeded";
              const n = t.transitional || C;
              (t.timeoutErrorMessage && (e = t.timeoutErrorMessage),
                r(
                  new N.a(
                    e,
                    n.clarifyTimeoutError ? N.a.ETIMEDOUT : N.a.ECONNABORTED,
                    t,
                    u,
                  ),
                ),
                (u = null));
            }),
            k.isStandardBrowserEnv)
          ) {
            const e =
              (t.withCredentials || et(c)) &&
              t.xsrfCookieName &&
              $.read(t.xsrfCookieName);
            e && o.set(t.xsrfHeaderName, e);
          }
          (void 0 === n && o.setContentType(null),
            "setRequestHeader" in u &&
              _.a.forEach(o.toJSON(), function (t, e) {
                u.setRequestHeader(e, t);
              }),
            _.a.isUndefined(t.withCredentials) ||
              (u.withCredentials = !!t.withCredentials),
            i && "json" !== i && (u.responseType = t.responseType),
            "function" == typeof t.onDownloadProgress &&
              u.addEventListener("progress", nt(t.onDownloadProgress, !0)),
            "function" == typeof t.onUploadProgress &&
              u.upload &&
              u.upload.addEventListener("progress", nt(t.onUploadProgress)),
            (t.cancelToken || t.signal) &&
              ((a = (e) => {
                u &&
                  (r(!e || e.type ? new Y(null, t, u) : e),
                  u.abort(),
                  (u = null));
              }),
              t.cancelToken && t.cancelToken.subscribe(a),
              t.signal &&
                (t.signal.aborted
                  ? a()
                  : t.signal.addEventListener("abort", a))));
          const l = (function (t) {
            const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
            return (e && e[1]) || "";
          })(c);
          l && -1 === k.protocols.indexOf(l)
            ? r(
                new N.a(
                  "Unsupported protocol " + l + ":",
                  N.a.ERR_BAD_REQUEST,
                  t,
                ),
              )
            : u.send(n || null);
        });
      };
    const it = { http: Z.a, xhr: ot };
    _.a.forEach(it, (t, e) => {
      if (t) {
        try {
          Object.defineProperty(t, "name", { value: e });
        } catch (t) {}
        Object.defineProperty(t, "adapterName", { value: e });
      }
    });
    var at = (t) => {
      t = _.a.isArray(t) ? t : [t];
      const { length: e } = t;
      let r, n;
      for (
        let o = 0;
        o < e && ((r = t[o]), !(n = _.a.isString(r) ? it[r.toLowerCase()] : r));
        o++
      );
      if (!n) {
        if (!1 === n)
          throw new N.a(
            `Adapter ${r} is not supported by the environment`,
            "ERR_NOT_SUPPORT",
          );
        throw new Error(
          _.a.hasOwnProp(it, r)
            ? `Adapter '${r}' is not available in the build`
            : `Unknown adapter '${r}'`,
        );
      }
      if (!_.a.isFunction(n)) throw new TypeError("adapter is not a function");
      return n;
    };
    function st(t) {
      if (
        (t.cancelToken && t.cancelToken.throwIfRequested(),
        t.signal && t.signal.aborted)
      )
        throw new Y(null, t);
    }
    function ut(t) {
      (st(t),
        (t.headers = G.from(t.headers)),
        (t.data = V.call(t, t.transformRequest)),
        -1 !== ["post", "put", "patch"].indexOf(t.method) &&
          t.headers.setContentType("application/x-www-form-urlencoded", !1));
      return at(t.adapter || M.adapter)(t).then(
        function (e) {
          return (
            st(t),
            (e.data = V.call(t, t.transformResponse, e)),
            (e.headers = G.from(e.headers)),
            e
          );
        },
        function (e) {
          return (
            J(e) ||
              (st(t),
              e &&
                e.response &&
                ((e.response.data = V.call(t, t.transformResponse, e.response)),
                (e.response.headers = G.from(e.response.headers)))),
            Promise.reject(e)
          );
        },
      );
    }
    const ct = (t) => (t instanceof G ? t.toJSON() : t);
    function ft(t, e) {
      e = e || {};
      const r = {};
      function n(t, e, r) {
        return _.a.isPlainObject(t) && _.a.isPlainObject(e)
          ? _.a.merge.call({ caseless: r }, t, e)
          : _.a.isPlainObject(e)
            ? _.a.merge({}, e)
            : _.a.isArray(e)
              ? e.slice()
              : e;
      }
      function o(t, e, r) {
        return _.a.isUndefined(e)
          ? _.a.isUndefined(t)
            ? void 0
            : n(void 0, t, r)
          : n(t, e, r);
      }
      function i(t, e) {
        if (!_.a.isUndefined(e)) return n(void 0, e);
      }
      function a(t, e) {
        return _.a.isUndefined(e)
          ? _.a.isUndefined(t)
            ? void 0
            : n(void 0, t)
          : n(void 0, e);
      }
      function s(r, o, i) {
        return i in e ? n(r, o) : i in t ? n(void 0, r) : void 0;
      }
      const u = {
        url: i,
        method: i,
        data: i,
        baseURL: a,
        transformRequest: a,
        transformResponse: a,
        paramsSerializer: a,
        timeout: a,
        timeoutMessage: a,
        withCredentials: a,
        adapter: a,
        responseType: a,
        xsrfCookieName: a,
        xsrfHeaderName: a,
        onUploadProgress: a,
        onDownloadProgress: a,
        decompress: a,
        maxContentLength: a,
        maxBodyLength: a,
        beforeRedirect: a,
        transport: a,
        httpAgent: a,
        httpsAgent: a,
        cancelToken: a,
        socketPath: a,
        responseEncoding: a,
        validateStatus: s,
        headers: (t, e) => o(ct(t), ct(e), !0),
      };
      return (
        _.a.forEach(Object.keys(Object.assign({}, t, e)), function (n) {
          const i = u[n] || o,
            a = i(t[n], e[n], n);
          (_.a.isUndefined(a) && i !== s) || (r[n] = a);
        }),
        r
      );
    }
    const lt = {};
    ["object", "boolean", "number", "function", "string", "symbol"].forEach(
      (t, e) => {
        lt[t] = function (r) {
          return typeof r === t || "a" + (e < 1 ? "n " : " ") + t;
        };
      },
    );
    const ht = {};
    lt.transitional = function (t, e, r) {
      function n(t, e) {
        return (
          "[Axios v1.4.0] Transitional option '" +
          t +
          "'" +
          e +
          (r ? ". " + r : "")
        );
      }
      return (r, o, i) => {
        if (!1 === t)
          throw new N.a(
            n(o, " has been removed" + (e ? " in " + e : "")),
            N.a.ERR_DEPRECATED,
          );
        return (
          e &&
            !ht[o] &&
            ((ht[o] = !0),
            console.warn(
              n(
                o,
                " has been deprecated since v" +
                  e +
                  " and will be removed in the near future",
              ),
            )),
          !t || t(r, o, i)
        );
      };
    };
    var pt = {
      assertOptions: function (t, e, r) {
        if ("object" != typeof t)
          throw new N.a("options must be an object", N.a.ERR_BAD_OPTION_VALUE);
        const n = Object.keys(t);
        let o = n.length;
        for (; o-- > 0; ) {
          const i = n[o],
            a = e[i];
          if (a) {
            const e = t[i],
              r = void 0 === e || a(e, i, t);
            if (!0 !== r)
              throw new N.a(
                "option " + i + " must be " + r,
                N.a.ERR_BAD_OPTION_VALUE,
              );
          } else if (!0 !== r)
            throw new N.a("Unknown option " + i, N.a.ERR_BAD_OPTION);
        }
      },
      validators: lt,
    };
    const dt = pt.validators;
    class yt {
      constructor(t) {
        ((this.defaults = t),
          (this.interceptors = { request: new B(), response: new B() }));
      }
      request(t, e) {
        ("string" == typeof t ? ((e = e || {}).url = t) : (e = t || {}),
          (e = ft(this.defaults, e)));
        const { transitional: r, paramsSerializer: n, headers: o } = e;
        let i;
        (void 0 !== r &&
          pt.assertOptions(
            r,
            {
              silentJSONParsing: dt.transitional(dt.boolean),
              forcedJSONParsing: dt.transitional(dt.boolean),
              clarifyTimeoutError: dt.transitional(dt.boolean),
            },
            !1,
          ),
          null != n &&
            (_.a.isFunction(n)
              ? (e.paramsSerializer = { serialize: n })
              : pt.assertOptions(
                  n,
                  { encode: dt.function, serialize: dt.function },
                  !0,
                )),
          (e.method = (
            e.method ||
            this.defaults.method ||
            "get"
          ).toLowerCase()),
          (i = o && _.a.merge(o.common, o[e.method])),
          i &&
            _.a.forEach(
              ["delete", "get", "head", "post", "put", "patch", "common"],
              (t) => {
                delete o[t];
              },
            ),
          (e.headers = G.concat(i, o)));
        const a = [];
        let s = !0;
        this.interceptors.request.forEach(function (t) {
          ("function" == typeof t.runWhen && !1 === t.runWhen(e)) ||
            ((s = s && t.synchronous), a.unshift(t.fulfilled, t.rejected));
        });
        const u = [];
        let c;
        this.interceptors.response.forEach(function (t) {
          u.push(t.fulfilled, t.rejected);
        });
        let f,
          l = 0;
        if (!s) {
          const t = [ut.bind(this), void 0];
          for (
            t.unshift.apply(t, a),
              t.push.apply(t, u),
              f = t.length,
              c = Promise.resolve(e);
            l < f;

          )
            c = c.then(t[l++], t[l++]);
          return c;
        }
        f = a.length;
        let h = e;
        for (l = 0; l < f; ) {
          const t = a[l++],
            e = a[l++];
          try {
            h = t(h);
          } catch (t) {
            e.call(this, t);
            break;
          }
        }
        try {
          c = ut.call(this, h);
        } catch (t) {
          return Promise.reject(t);
        }
        for (l = 0, f = u.length; l < f; ) c = c.then(u[l++], u[l++]);
        return c;
      }
      getUri(t) {
        return L(
          tt((t = ft(this.defaults, t)).baseURL, t.url),
          t.params,
          t.paramsSerializer,
        );
      }
    }
    (_.a.forEach(["delete", "get", "head", "options"], function (t) {
      yt.prototype[t] = function (e, r) {
        return this.request(
          ft(r || {}, { method: t, url: e, data: (r || {}).data }),
        );
      };
    }),
      _.a.forEach(["post", "put", "patch"], function (t) {
        function e(e) {
          return function (r, n, o) {
            return this.request(
              ft(o || {}, {
                method: t,
                headers: e ? { "Content-Type": "multipart/form-data" } : {},
                url: r,
                data: n,
              }),
            );
          };
        }
        ((yt.prototype[t] = e()), (yt.prototype[t + "Form"] = e(!0)));
      }));
    var gt = yt;
    class vt {
      constructor(t) {
        if ("function" != typeof t)
          throw new TypeError("executor must be a function.");
        let e;
        this.promise = new Promise(function (t) {
          e = t;
        });
        const r = this;
        (this.promise.then((t) => {
          if (!r._listeners) return;
          let e = r._listeners.length;
          for (; e-- > 0; ) r._listeners[e](t);
          r._listeners = null;
        }),
          (this.promise.then = (t) => {
            let e;
            const n = new Promise((t) => {
              (r.subscribe(t), (e = t));
            }).then(t);
            return (
              (n.cancel = function () {
                r.unsubscribe(e);
              }),
              n
            );
          }),
          t(function (t, n, o) {
            r.reason || ((r.reason = new Y(t, n, o)), e(r.reason));
          }));
      }
      throwIfRequested() {
        if (this.reason) throw this.reason;
      }
      subscribe(t) {
        this.reason
          ? t(this.reason)
          : this._listeners
            ? this._listeners.push(t)
            : (this._listeners = [t]);
      }
      unsubscribe(t) {
        if (!this._listeners) return;
        const e = this._listeners.indexOf(t);
        -1 !== e && this._listeners.splice(e, 1);
      }
      static source() {
        let t;
        return {
          token: new vt(function (e) {
            t = e;
          }),
          cancel: t,
        };
      }
    }
    var mt = vt;
    const wt = {
      Continue: 100,
      SwitchingProtocols: 101,
      Processing: 102,
      EarlyHints: 103,
      Ok: 200,
      Created: 201,
      Accepted: 202,
      NonAuthoritativeInformation: 203,
      NoContent: 204,
      ResetContent: 205,
      PartialContent: 206,
      MultiStatus: 207,
      AlreadyReported: 208,
      ImUsed: 226,
      MultipleChoices: 300,
      MovedPermanently: 301,
      Found: 302,
      SeeOther: 303,
      NotModified: 304,
      UseProxy: 305,
      Unused: 306,
      TemporaryRedirect: 307,
      PermanentRedirect: 308,
      BadRequest: 400,
      Unauthorized: 401,
      PaymentRequired: 402,
      Forbidden: 403,
      NotFound: 404,
      MethodNotAllowed: 405,
      NotAcceptable: 406,
      ProxyAuthenticationRequired: 407,
      RequestTimeout: 408,
      Conflict: 409,
      Gone: 410,
      LengthRequired: 411,
      PreconditionFailed: 412,
      PayloadTooLarge: 413,
      UriTooLong: 414,
      UnsupportedMediaType: 415,
      RangeNotSatisfiable: 416,
      ExpectationFailed: 417,
      ImATeapot: 418,
      MisdirectedRequest: 421,
      UnprocessableEntity: 422,
      Locked: 423,
      FailedDependency: 424,
      TooEarly: 425,
      UpgradeRequired: 426,
      PreconditionRequired: 428,
      TooManyRequests: 429,
      RequestHeaderFieldsTooLarge: 431,
      UnavailableForLegalReasons: 451,
      InternalServerError: 500,
      NotImplemented: 501,
      BadGateway: 502,
      ServiceUnavailable: 503,
      GatewayTimeout: 504,
      HttpVersionNotSupported: 505,
      VariantAlsoNegotiates: 506,
      InsufficientStorage: 507,
      LoopDetected: 508,
      NotExtended: 510,
      NetworkAuthenticationRequired: 511,
    };
    Object.entries(wt).forEach(([t, e]) => {
      wt[e] = t;
    });
    var bt = wt;
    const Et = (function t(e) {
      const r = new gt(e),
        n = Object(O.a)(gt.prototype.request, r);
      return (
        _.a.extend(n, gt.prototype, r, { allOwnKeys: !0 }),
        _.a.extend(n, r, null, { allOwnKeys: !0 }),
        (n.create = function (r) {
          return t(ft(e, r));
        }),
        n
      );
    })(M);
    ((Et.Axios = gt),
      (Et.CanceledError = Y),
      (Et.CancelToken = mt),
      (Et.isCancel = J),
      (Et.VERSION = "1.4.0"),
      (Et.toFormData = A.a),
      (Et.AxiosError = N.a),
      (Et.Cancel = Et.CanceledError),
      (Et.all = function (t) {
        return Promise.all(t);
      }),
      (Et.spread = function (t) {
        return function (e) {
          return t.apply(null, e);
        };
      }),
      (Et.isAxiosError = function (t) {
        return _.a.isObject(t) && !0 === t.isAxiosError;
      }),
      (Et.mergeConfig = ft),
      (Et.AxiosHeaders = G),
      (Et.formToJSON = (t) => D(_.a.isHTMLForm(t) ? new FormData(t) : t)),
      (Et.HttpStatusCode = bt),
      (Et.default = Et));
    var St,
      xt,
      _t,
      Ot = Et,
      At = (function () {
        var t = o()(
          a.a.mark(function t(e, r, n, o, i, s, u) {
            var c;
            return a.a.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (
                      ((c = new URLSearchParams({
                        response_type:
                          Object({
                            bf_QiQKCSmVP6hcMnWQHtNAvABzDMIbFXSbX0QxLdh4: "code",
                            "VPwcyyOw2vq-9uwjexFdfj3N62TqAtciut87fAkxEa4":
                              "code",
                            HdpDyyR1DqQFapN2MBk5kjJgAvu6UTXRDgtwLhQjrH8: "code",
                            Sj5csgQhOSdie5em4TGAG12CLwv1fm0J4dWAmBTfS2E: "code",
                            gZa8m8C7EwByRrxIP8452sWhNaH3QZ9A2E1c8EeBM9I: "code",
                            _uLecQaU_5m9dfXiGXcNnZqtb86K1PFE9SU4zHE9BCQ: "code",
                            "qyGmG-hQQKxuw8SMyrvlEkitqx2oI2r1h7ctgRQFSAs":
                              "code",
                            "xAX98X6BqKdjws8pv-O3QjiD00jNdlw1fjczXNH_Hck":
                              "code",
                            "CJ7L66KtoyhKfjVdh-hPg4vp2yIvtfNPHSwepbB-qJc":
                              "code",
                          })[r] || "id_token token",
                        client_id: r,
                        redirect_uri: window.location.href.split("?")[0],
                        state: btoa(
                          JSON.stringify({
                            referrer: e,
                            client_id: r,
                            state: u,
                            prompt: s,
                          }),
                        ),
                        scope: Object({
                          bf_QiQKCSmVP6hcMnWQHtNAvABzDMIbFXSbX0QxLdh4:
                            "openid consent consent_u email",
                          "nVBlb-1OsO_WE2ttj_VqK8je1u9__gE-Vcxw3tMwyqI":
                            "openid consent consent_u email",
                          "VPwcyyOw2vq-9uwjexFdfj3N62TqAtciut87fAkxEa4":
                            "openid consent consent_u email",
                          HdpDyyR1DqQFapN2MBk5kjJgAvu6UTXRDgtwLhQjrH8:
                            "openid consent consent_u email",
                          "7P7a5UOQktoVZrhHUK_6LW1WTsBs_lu7-M5xydCnMAc":
                            "openid consent consent_u email",
                          Sj5csgQhOSdie5em4TGAG12CLwv1fm0J4dWAmBTfS2E:
                            "openid consent consent_u email",
                          gZa8m8C7EwByRrxIP8452sWhNaH3QZ9A2E1c8EeBM9I:
                            "openid consent consent_u email",
                          _uLecQaU_5m9dfXiGXcNnZqtb86K1PFE9SU4zHE9BCQ:
                            "openid consent email",
                          "qyGmG-hQQKxuw8SMyrvlEkitqx2oI2r1h7ctgRQFSAs":
                            "openid email",
                          "xAX98X6BqKdjws8pv-O3QjiD00jNdlw1fjczXNH_Hck":
                            "openid email",
                          "CJ7L66KtoyhKfjVdh-hPg4vp2yIvtfNPHSwepbB-qJc":
                            "openid email roles profile",
                        })[r],
                        device_id: m(),
                        nonce:
                          Object({
                            "qyGmG-hQQKxuw8SMyrvlEkitqx2oI2r1h7ctgRQFSAs":
                              "NotUsed",
                          })[r] || b(32),
                        ui_locales: n,
                      })),
                      o && c.append("idp_id", o),
                      i && c.append("login_hint", i),
                      s && c.append("prompt", s),
                      !Object({
                        bf_QiQKCSmVP6hcMnWQHtNAvABzDMIbFXSbX0QxLdh4: "S256",
                        "VPwcyyOw2vq-9uwjexFdfj3N62TqAtciut87fAkxEa4": "S256",
                        HdpDyyR1DqQFapN2MBk5kjJgAvu6UTXRDgtwLhQjrH8: "S256",
                        Sj5csgQhOSdie5em4TGAG12CLwv1fm0J4dWAmBTfS2E: "S256",
                        gZa8m8C7EwByRrxIP8452sWhNaH3QZ9A2E1c8EeBM9I: "S256",
                        _uLecQaU_5m9dfXiGXcNnZqtb86K1PFE9SU4zHE9BCQ: "S256",
                        "qyGmG-hQQKxuw8SMyrvlEkitqx2oI2r1h7ctgRQFSAs": "S256",
                        "xAX98X6BqKdjws8pv-O3QjiD00jNdlw1fjczXNH_Hck": "S256",
                        "CJ7L66KtoyhKfjVdh-hPg4vp2yIvtfNPHSwepbB-qJc": "S256",
                      })[r])
                    ) {
                      t.next = 11;
                      break;
                    }
                    return (
                      c.append(
                        "code_challenge_method",
                        Object({
                          bf_QiQKCSmVP6hcMnWQHtNAvABzDMIbFXSbX0QxLdh4: "S256",
                          "VPwcyyOw2vq-9uwjexFdfj3N62TqAtciut87fAkxEa4": "S256",
                          HdpDyyR1DqQFapN2MBk5kjJgAvu6UTXRDgtwLhQjrH8: "S256",
                          Sj5csgQhOSdie5em4TGAG12CLwv1fm0J4dWAmBTfS2E: "S256",
                          gZa8m8C7EwByRrxIP8452sWhNaH3QZ9A2E1c8EeBM9I: "S256",
                          _uLecQaU_5m9dfXiGXcNnZqtb86K1PFE9SU4zHE9BCQ: "S256",
                          "qyGmG-hQQKxuw8SMyrvlEkitqx2oI2r1h7ctgRQFSAs": "S256",
                          "xAX98X6BqKdjws8pv-O3QjiD00jNdlw1fjczXNH_Hck": "S256",
                          "CJ7L66KtoyhKfjVdh-hPg4vp2yIvtfNPHSwepbB-qJc": "S256",
                        })[r],
                      ),
                      (t.t0 = c),
                      (t.next = 9),
                      E()
                    );
                  case 9:
                    ((t.t1 = t.sent),
                      t.t0.append.call(t.t0, "code_challenge", t.t1));
                  case 11:
                    window.location.href = ""
                      .concat(
                        Object({
                          "7P7a5UOQktoVZrhHUK_6LW1WTsBs_lu7-M5xydCnMAc":
                            "https://login.nvidia.cn/authorize",
                          "nVBlb-1OsO_WE2ttj_VqK8je1u9__gE-Vcxw3tMwyqI":
                            "https://login.nvidia.cn/authorize",
                          _uLecQaU_5m9dfXiGXcNnZqtb86K1PFE9SU4zHE9BCQ:
                            "https://login.nvidia.cn/authorize",
                        })[r] || "https://login.nvidia.com/authorize",
                        "?",
                      )
                      .concat(c.toString());
                  case 12:
                  case "end":
                    return t.stop();
                }
            }, t);
          }),
        );
        return function (e, r, n, o, i, a, s) {
          return t.apply(this, arguments);
        };
      })(),
      Rt = function (t, e) {
        return Ot.post(
          "zh-CN" === e
            ? "https://login.nvidia.cn/token"
            : "https://login.nvidia.com/token",
          new URLSearchParams({
            code: t,
            grant_type: "authorization_code",
            code_verifier: sessionStorage.getItem("CV"),
            redirect_uri: window.location.href.split("?")[0],
          }),
        );
      },
      jt = new URLSearchParams(location.href.split(/(\?|#)/)[2]),
      Pt = jt.get("redirect_uri"),
      Tt = location.pathname;
    if (
      ((null === (St = Tt) || void 0 === St
        ? void 0
        : St.startsWith("/auth/gtc")) && (Tt = "/auth/gtc"),
      (null === (xt = Tt) || void 0 === xt
        ? void 0
        : xt.startsWith("/auth/aid")) && (Tt = "/auth/aid"),
      (null === (_t = Tt) || void 0 === _t
        ? void 0
        : _t.startsWith("/auth/events")) && (Tt = "/auth/events"),
      u[Tt])
    ) {
      var Ut = document.createElement("script");
      ((Ut.src = u[Tt]), document.head.appendChild(Ut));
    } else if (Pt && Pt.match(s))
      At(
        Pt,
        jt.get("client_id"),
        jt.get("ui_locales"),
        jt.get("idp_id"),
        jt.get("login_hint"),
        jt.get("prompt"),
        jt.get("state"),
      );
    else if (jt.has("access_token")) Nt();
    else if (jt.has("code"))
      !(function (t, e) {
        Bt.apply(this, arguments);
      })(jt.get("code"), jt.get("ui_locales"));
    else if (jt.has("error")) {
      var Lt = JSON.parse(atob(jt.get("state")));
      "none" === (null == Lt ? void 0 : Lt.prompt)
        ? (console.log(jt.toString()), window.parent.postMessage("failure"))
        : (sessionStorage.setItem("AuthError", jt.get("error")),
          x(Lt.referrer));
    }
    function Bt() {
      return (Bt = o()(
        a.a.mark(function t(e, r) {
          var n, o;
          return a.a.wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return ((t.prev = 0), (t.next = 3), Rt(e, r));
                  case 3:
                    for (o in (n = t.sent).data) jt.append(o, n.data[o]);
                    t.next = 11;
                    break;
                  case 7:
                    ((t.prev = 7),
                      (t.t0 = t.catch(0)),
                      console.log("error redeeming the token"),
                      x(JSON.parse(atob(jt.get("state"))).referrer));
                  case 11:
                    Nt();
                  case 12:
                  case "end":
                    return t.stop();
                }
            },
            t,
            null,
            [[0, 7]],
          );
        }),
      )).apply(this, arguments);
    }
    function Nt() {
      var t,
        e,
        r,
        n,
        o,
        i,
        a = JSON.parse(atob(jt.get("state")));
      if (
        ("https://author.nvidia.com" === new URL(a.referrer).origin &&
          ((r = (t = jt).get("id_token")),
          (n = t.get("expires_in")),
          (o = y(r)),
          (i =
            null !== (e = null == o ? void 0 : o.email) && void 0 !== e
              ? e
              : ""),
          v("id_token_aem_author", r, n),
          v("email_aem_author", i, n),
          v("expires_in_aem_author", n, n)),
        w(jt, a),
        "none" === (null == a ? void 0 : a.prompt))
      )
        (window.parent.postMessage("success"), x(a.referrer));
      else if (a.state) {
        var s = a.referrer.includes("?") ? "&state=" : "?state=";
        x("".concat(a.referrer).concat(s).concat(encodeURIComponent(a.state)));
      } else x(a.referrer);
    }
  },
]);
//# sourceMappingURL=starfleet.js.map
