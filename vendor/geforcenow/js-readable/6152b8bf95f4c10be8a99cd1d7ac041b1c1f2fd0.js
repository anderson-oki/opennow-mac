(self.webpackChunkaccount_wrapper =
  self.webpackChunkaccount_wrapper || []).push([
  [605],
  {
    2933: (e, t, n) => {
      "use strict";
      n.r(t);
      var r = n(9741);
      (n(9537).Z.info("Account Wrapper Starfleet v".concat("1.9.8")),
        window.NVIDIAGDC || (window.NVIDIAGDC = {}),
        (window.NVIDIAGDC.starfleet = r.default),
        document.dispatchEvent(new CustomEvent("starfleet-ready")));
    },
    8555: (e, t, n) => {
      "use strict";
      (n.d(t, { d8: () => c, Df: () => a }),
        n(4687),
        n(2222),
        n(4916),
        n(5306));
      var r = n(1401),
        c =
          (n(1521),
          function (e, t) {
            document.cookie = ""
              .concat(t, "=")
              .concat(e, "; expires=")
              .concat(
                new Date(new Date().getTime() + 31536e6).toUTCString(),
                "; domain=",
              )
              .concat((0, r.Zy)() ? ".nvidia.cn" : ".nvidia.com", "; path=/");
          }),
        a = function (e) {
          for (var t = e.replace(/-/g, "+").replace(/_/g, "/"); t.length % 4; )
            t += "=";
          return t;
        };
    },
    1401: (e, t, n) => {
      "use strict";
      (n.d(t, { Zy: () => r }),
        n(4916),
        n(4723),
        n(3123),
        n(6699),
        n(2023),
        n(5306),
        n(2222));
      var r = function () {
        return location.host.includes(".cn");
      };
    },
    4687: (e, t, n) => {
      var r = n(7061)();
      e.exports = r;
      try {
        regeneratorRuntime = r;
      } catch (e) {
        "object" == typeof globalThis
          ? (globalThis.regeneratorRuntime = r)
          : Function("r", "regeneratorRuntime = r")(r);
      }
    },
  },
]);
//# sourceMappingURL=v1.9.8-605.a9d8ca6d408412df3c59.js.map
