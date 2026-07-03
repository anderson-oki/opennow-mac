/*! For license information please see librarian.js.LICENSE.txt */
!(function (e, n) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = n())
    : "function" == typeof define && define.amd
      ? define([], n)
      : "object" == typeof exports
        ? (exports.LIBRARIAN = n())
        : (e.LIBRARIAN = n());
})(self, () =>
  (() => {
    "use strict";
    var e,
      n,
      t = {
        625(e, n, t) {
          t.d(n, { A: () => o });
          var r = t(601),
            a = t.n(r),
            i = t(314),
            l = t.n(i)()(a());
          l.push([
            e.id,
            "/* * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    margin: 0;\n    font-family: NVIDIA-NALA, Arial, Helvetica, sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\nul{\n    list-style-type: none;\n    padding-left: 0px;\n}\n\na {\n    color: #000000;\n} */",
            "",
          ]);
          const o = l;
        },
        220(e, n, t) {
          t.d(n, { A: () => o });
          var r = t(601),
            a = t.n(r),
            i = t(314),
            l = t.n(i)()(a());
          l.push([
            e.id,
            "/* :root {\n  --app-font: NVIDIA Sans, Arial, Helvetica, sans-serif;\n  --padding-tb-30: 30px 0px;\n  --padding-tb-15: 15px 0px;\n  --brand-color: #76b900;\n} */\n\n/* body {\n  font-family: NVIDIA-NALA, Arial, Helvetica, sans-serif;\n} */\n",
            "",
          ]);
          const o = l;
        },
        836(e, n, t) {
          t.d(n, { A: () => o });
          var r = t(601),
            a = t.n(r),
            i = t(314),
            l = t.n(i)()(a());
          l.push([
            e.id,
            ".librarian-show-all-btn {\n  color: #000;\n  font-size: 15px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 25px;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  padding-left: 0px !important;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  gap: 12px;\n  margin-top: -15px;\n  line-height: 1em;\n}\n\n.librarian-show-all-btn::before,\n.librarian-show-all-btn::after {\n  content: \"\";\n  flex: 1;\n  height: 1px;\n  background-color: #ccc;\n}\n\n.librarian-more-less-btn {\n  color: #000;\n  font-size: 15px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 25px;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  display: inline-block;\n  text-decoration: underline;\n  text-align: center;\n  padding: 0;\n  padding-left: 15px;\n  line-height: 1em;\n}\n\n.librarian-hide-filters {\n  max-height: 0;\n  display: none;\n  transition: max-height 1s ease-in-out;\n  transition: height 0.2s;\n}\n\n.librarian-filters-container {\n  width: 100%;\n  justify-content: space-around;\n  background-color: #F7F7F7;\n  display: flex;\n  flex-direction: column;\n  opacity: 1;\n  /* max-height: 5000px; */\n  transition: opacity 0.5s ease, max-height 0.5s ease;\n  overflow: hidden;\n  margin-top: 30px;\n}\n\n.librarian-filters-container-items {\n  display: flex;\n  padding: 30px;\n}\n\n.librarian-filters-container-hide {\n  opacity: 0;\n  max-height: 0;\n  margin-top: 0px;\n  transition: opacity 0.5s ease, max-height 0.5s ease, margin-top 0.5s ease;\n}\n\n.librarian-filter-title {\n  font-size: 18px !important;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 125%;\n}\n\n.librarian-filters-reset-apply-container {\n  background-color: transparent !important;\n  margin-top: 8px !important;\n  display: flex !important;\n  justify-content: center !important;\n  gap: 16px !important;\n  margin-top: 15px !important;\n}\n\n.librarian-reset-btn {\n  cursor: pointer !important;\n  background-color: #fff !important;\n  border-radius: 0 !important;\n  outline: none !important;\n  font-weight: 700 !important;\n  font-size: 14px !important;\n  padding: 6px !important;\n  color: #000 !important;\n  flex: 1 !important;\n  max-width: 130px !important;\n  text-transform: none !important;\n  line-height: normal !important;\n  text-align: center !important;\n  border: 2px solid  #76B900\n}\n\n.librarian-reset-btn:hover {\n  background-color: #f2f2f2 !important;\n}\n\n.librarian-apply-btn {\n  cursor: pointer !important;\n  background-color: #76b900 !important;\n  border: 2px solid #76b900 !important;\n  border-radius: 0 !important;\n  outline: none !important;\n  font-weight: 700 !important;\n  font-size: 14px !important;\n  padding: 6px !important;\n  color: #000 !important;\n  flex: 1 !important;\n  max-width: 160px !important;\n  text-transform: none !important;\n  line-height: normal !important;\n  text-align: center !important;\n}\n\n.librarian-apply-btn:hover {\n  background-color: #659f00 !important;\n  border-color: #659f00 !important;\n}\n\n.librarian-filter-items-container {\n  padding: 30px 0;\n}\n\n.librarian-checkbox-item {\n  display: flex;\n  align-items: flex-start;\n}\n\n.librarian-checkbox-label {\n  font-size: 15px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 140%;\n  padding-left: 15px;\n  cursor: pointer;\n  color: #000 !important;\n}\n\n.librarian-checkbox-label-disabled {\n  color: #999 !important;\n  cursor: auto;\n}\n\n.librarian-select-deselect-top {\n  padding-top: 15px;\n}\n\n.librarian-site-filters-list {\n  padding: 30px 0 0 0;\n}\n\n.librarian-mobile-filters-content {\n  width: 100%;\n}\n\n.librarian-checkbox {\n  width: 16px;\n  height: 16px;\n  accent-color: #fff !important;\n  cursor: pointer;\n  appearance: none;\n  content: '' !important;\n  -webkit-appearance: none;\n  border-radius: 0;\n  background-color: transparent !important;\n  position: relative;\n  margin:2px;\n\n  @supports (-webkit-touch-callout: none) {\n    content: '';\n    accent-color: #fff !important;\n  }\n}\n\n.librarian-checkbox-span {\n  width: 16px;\n  height: 16px;\n  border-radius: 0;\n  position: relative;\n  margin:2px;\n  cursor: pointer;\n}\n\n.librarian-checkbox:disabled {\n  cursor: auto;\n}\n\n.librarian-checkbox:checked::before {\n  outline: 2px solid #999;\n  content: '\\f00c';\n  display: block;\n  text-align: center;\n  color: #666;\n  font-family: \"Font Awesome 6 Pro\";\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 125%;\n}\n\n.librarian-checkbox:not(:checked) {\n  outline: 2px solid #999;\n  border-radius: 0px;\n\n  @supports (-webkit-touch-callout: none) {\n    outline: 2px solid #999;\n    border: none;\n    -webkit-appearance: none;\n    border-radius: 0px;\n  }\n}\n\n.librarian-filter-title-container {\n  display: flex;\n  justify-content: space-between;\n  padding-bottom: 12px;\n  border-bottom: 2px solid #dedfdf;\n}\n\n.librarian-arrow-icon {\n  display: inline-block;\n  transition: transform 0.3s ease;\n  cursor: pointer;\n}\n\n.librarian-arrow-icon-rotated {\n  transform: rotate(180deg);\n}\n\n.librarian-filter-headings {\n  width: 220px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding-bottom: 30px;\n}\n\n.librarian-items-container {\n  display: flex;\n  column-gap: 40px;\n  row-gap: 0;\n  flex-wrap: wrap;\n  padding-top: 30px\n}\n\n.librarian-filter-headings p {\n  font-weight: bold;\n  font-size: 15px;\n  color: #000;\n  margin: 0;\n  padding: 0 !important;\n  line-height: 1em;\n}\n\n.librarian-select-deselect {\n  cursor: pointer;\n  color: #000;\n  font-family: \"NVIDIA Sans\";\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 166.7%;\n  text-decoration-style: solid;\n  text-decoration-skip-ink: none;\n  text-decoration-thickness: auto;\n  text-underline-offset: auto;\n  text-underline-position: from-font;\n}\n\n.librarian-checkbox-all {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n\n.librarian-select-deselect-label {\n  font-weight: 700;\n  text-decoration: none;\n}\n\n/*Mobile*/\n@media only screen and (max-width: 639px) {\n  .librarian-filters-container-items {\n    justify-content: center;\n    padding-bottom: 0px !important;\n  }\n}\n\n/*Tablet*/\n@media only screen and (min-width: 640px) and (max-width: 1023px) {\n  .librarian-filters-container-items {\n    justify-content: center;\n  }\n\n  /* .librarian-checkbox-item {\n    display: block;\n  } */\n}\n\n/*Laptop and Desktop*/\n@media only screen and (min-width: 1024px) {\n  .librarian-filters-container {\n    display: none !important;\n  }\n\n  .librarian-filters-reset-apply-container {\n    justify-content: flex-start !important;\n    margin: 15px !important;\n  }\n\n  .librarian-reset-btn,\n  .librarian-apply-btn {\n    flex: none !important;\n    min-width: 100px !important;\n  }\n}",
            "",
          ]);
          const o = l;
        },
        963(e, n, t) {
          t.d(n, { A: () => p });
          var r = t(601),
            a = t.n(r),
            i = t(314),
            l = t.n(i),
            o = t(919),
            s = t(417),
            u = t.n(s),
            c = new URL(t(301), t.b),
            d = l()(a());
          d.i(o.A);
          var f = u()(c);
          d.push([
            e.id,
            `.librarian-show-more {\n  font-size: 16px;\n  white-space: nowrap;\n  font-weight: bold;\n}\n\n.librarian-show-more-button {\n  display: inline-flex;\n  align-items: center;\n  background: transparent;\n  cursor: pointer;\n  border: none;\n  outline: none;\n  line-height: 125%;\n  font-weight: 700;\n  color: #EEE;\n  justify-content: flex-start;\n  padding: 0px !important;\n  gap: 6px;\n}\n\n.librarian-show-more-button:focus-visible {\n  outline: 2px solid #76B900;\n  outline-offset: 4px;\n  border-radius: 4px;\n}\n\n.librarian-show-more-btn-container {\n  display: flex;\n  box-sizing: border-box;\n  justify-content: center;\n  align-items: center;\n  padding: 16px;\n  width: 100%;\n  background-color: #000;\n  border-radius: 0 0 10px 10px;\n}\n\n.librarian-genAI-summary-btn-container .librarian-show-more-button {\n  margin-right: auto;\n}\n\n.librarian-show-more-btn-sub-container {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  gap: 30px;\n}\n\n.librarian-arrow {\n  display: inline-block;\n  margin-left: 5px;\n  transition: transform 0.3s ease;\n  color: #76b900;\n}\n\n.librarian-rotated {\n  transform: rotate(-180deg);\n  padding-top: 0px;\n}\n\n.librarian-genai-summery {\n  width: 100%;\n  position: relative;\n}\n\n.librarian-genai-wrapper {\n  background-color: #161616;\n  margin: 20px;\n  padding: 20px;\n  border-radius: 0 10px 10px 10px;\n  color: #EEE;\n}\n\n.librarian-genai-container{\n  p{\n    margin-bottom: 0px !important;\n  }\n}\n\n.librarian-genai-container {\n  box-sizing: border-box;\n  border-radius: 12px;\n  padding: 14px 14px 0px 14px;\n  max-width: 100%;\n  color: #EEE;\n  background-color: #000;\n  overflow: hidden;\n  transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1);\n  max-height: 80px;\n  --gradient-border-bg: #000;\n}\n\n.librarian-genai-container.librarian-genai-measured {\n  max-height: var(--librarian-genai-container-height, 80px);\n}\n\n.librarian-genai-container.librarian-genai-revealed {\n  max-height: none;\n}\n\n.librarian-genai-container.librarian-genai-empty {\n  padding-bottom: 14px;\n}\n\n.librarian-genai-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.librarian-genai-title-text {\n  padding-left: 10px;\n}\n\n.librarian-genai-fade-in {\n  animation: librarian-genai-fade-in 0.45s ease-out both;\n  animation-delay: 0.5s;\n}\n\n.librarian-genai-fade-in ~ .librarian-genai-fade-in {\n  animation-delay: 0.6s;\n}\n\n.librarian-genai-fade-in ~ .librarian-genai-fade-in ~ .librarian-genai-fade-in {\n  animation-delay: 0.7s;\n}\n\n@keyframes librarian-genai-fade-in {\n  from { opacity: 0; transform: translateY(8px); }\n  to { opacity: 1; transform: translateY(0); }\n}\n\n.librarian-ai-summery-text {\n  position: relative;\n  display: block;\n  color: #EEE;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-bottom: 30px !important;\n  padding-top: 30px !important;\n  padding-left: 65px !important;\n  font-size: 15px;\n  line-height: 25px;\n  white-space: pre-line;\n  list-style: none !important;\n  transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.librarian-ai-summery-text::before {\n  content: "";\n  position: absolute;\n  top: 4px;\n  bottom: 4px;\n  left: 15px;\n  width: 2px;\n  background-color: #76B900;\n  border-radius: 2px;\n}\n\n.librarian-ai-summery-text > li {\n  margin-bottom: 15px;\n  list-style: none !important;\n  animation: librarian-genai-fade-in 0.45s ease-out both;\n}\n\n.librarian-ai-summery-text > li:nth-child(1) { animation-delay: 0.50s; }\n.librarian-ai-summery-text > li:nth-child(2) { animation-delay: 0.58s; }\n.librarian-ai-summery-text > li:nth-child(3) { animation-delay: 0.66s; }\n.librarian-ai-summery-text > li:nth-child(4) { animation-delay: 0.74s; }\n.librarian-ai-summery-text > li:nth-child(5) { animation-delay: 0.82s; }\n.librarian-ai-summery-text > li:nth-child(6) { animation-delay: 0.90s; }\n.librarian-ai-summery-text > li:nth-child(7) { animation-delay: 0.98s; }\n.librarian-ai-summery-text > li:nth-child(8) { animation-delay: 1.06s; }\n.librarian-ai-summery-text > li:nth-child(9) { animation-delay: 1.14s; }\n.librarian-ai-summery-text > li:nth-child(10) { animation-delay: 1.22s; }\n.librarian-ai-summery-text > li:nth-child(n+11) { animation-delay: 1.30s; }\n\n.librarian-ai-summery-text.librarian-summery-measured {\n  max-height: var(--librarian-genai-content-height, none);\n}\n\n.librarian-ai-summery-text.librarian-summery-measured.librarian-show-less-text {\n  max-height: 242px;\n}\n\n.librarian-ai-summery-text > li::marker {\n  content: '';\n}\n\n.librarian-ai-summery-text > li:last-child {\n  margin-bottom: 0;\n}\n\n.librarian-ai-summery-text>li::before {\n  content: "";\n  display: inline-block;\n  width: 8px;\n  height: 14px;\n  margin-left: -16px;\n  margin-right: 10px;\n  vertical-align: middle;\n  background: url(${f}) no-repeat center / contain;\n}\n\n.librarian-citation {\n  display: inline-block;\n  box-sizing: border-box;\n  min-width: 20px;\n  height: 20px;\n  padding: 0 4px;\n  font-weight: 700 !important;\n  color: #EEE !important;\n  font-family: inherit;\n  border: 1px solid #76B900;\n  text-decoration: none !important;\n  font-size: 12px !important;\n  line-height: 18px !important;\n  text-align: center;\n  margin-right: 5px !important;\n}\n\n.librarian-citation:hover,\n.librarian-citation:focus-visible {\n  border-color: #FFFFFF;\n}\n\n.librarian-citation:last-child {\n  margin-right: 0px !important;\n}\n\n.librarian-show-less-text {\n  max-height: 242px;\n}\n\n.librarian-ai-summery-text::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 70px;\n  pointer-events: none;\n  opacity: 0;\n  background: linear-gradient(\n    180deg,\n    rgba(0, 0, 0, 0) 0%,\n    rgba(0, 0, 0, 0.7) 60%,\n    #000 100%\n  );\n  transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.librarian-show-less-text::after {\n  opacity: 1;\n}\n\n.librarian-genAi-summery-title {\n  font-size: 15px;\n  color: #EEE;\n  font-weight: 700;\n  line-height: 1;\n  display: flex;\n  align-items: center;\n  padding-top: 0px;\n  padding: 0px !important;\n}\n\n.librarian-genAi-summery-title > span {\n  display: inline-flex;\n  align-items: center;\n}\n\n.librarian-genAI-summary-btn-container {\n  display: flex;\n  width: 100%;\n  box-sizing: border-box;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 20px;\n  padding: 8px 16px;\n\n  &:hover {\n    svg {\n      cursor: pointer;\n    }\n  }\n}\n\n.librarian-tooltip > div,\n.librarian-thumbs-up > div,\n.librarian-thumbs-down > div {\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.librarian-tooltip,\n.librarian-thumbs-up,\n.librarian-thumbs-down {\n  position: relative;\n  display: inline-block;\n}\n\n.librarian-tooltip .librarian-tooltiptext,\n.librarian-thumbs-up .librarian-thumbsuptext,\n.librarian-thumbs-down .librarian-thumbsdowntext {\n  visibility: hidden;\n  width: max-content;\n  max-width: 240px;\n  background-color: #313131;\n  color: #fff;\n  text-align: center;\n  font-family: "NVIDIA Sans", "NVIDIA Sans Fallback", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 1;\n  padding: 8px 16px;\n  border: 1px solid #636363;\n  border-radius: 4px;\n  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.12);\n  position: absolute;\n  z-index: 1080;\n  bottom: calc(100% + 8px);\n  left: 50%;\n  transform: translateX(-50%);\n  margin-left: 0;\n  opacity: 0;\n  transition: opacity 0.3s;\n}\n\n/* .librarian-tooltip .librarian-tooltiptext::after, .librarian-thumbs-up .librarian-thumbsuptext::after, .librarian-thumbs-down .librarian-thumbsdowntext::after {\n  content: "";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: #555 transparent transparent transparent;\n} */\n\n.librarian-tooltip:hover .librarian-tooltiptext,\n.librarian-thumbs-up:hover .librarian-thumbsuptext,\n.librarian-thumbs-down:hover .librarian-thumbsdowntext {\n  visibility: visible;\n  opacity: 1;\n}\n\n/* Mobile devices */\n@media only screen and (max-width: 639px) {\n  .librarian-genai-container {\n    max-width: 460px;\n  }\n\n  .librarian-show-more-btn-container {\n    flex-direction: column;\n    text-align: center;\n  }\n\n  .librarian-show-more-btn-sub-container {\n    flex-direction: column;\n    text-align: center;\n    align-items: center;\n  }\n\n  .librarian-show-less-text,\n  .librarian-ai-summery-text.librarian-summery-measured.librarian-show-less-text {\n    max-height: calc(240px + var(--librarian-btn-bar-height, 130px) + 12px);\n  }\n\n  .librarian-disclaimer-container {\n    margin-top: 5px;\n  }\n}\n\n/* Tablet devices */\n@media only screen and (min-width: 640px) and (max-width: 1023px) {\n  .librarian-show-more-btn-container {\n    flex-direction: column;\n    text-align: center;\n  }\n\n  .librarian-show-more-btn-sub-container {\n    flex-direction: column;\n    text-align: center;\n    align-items: center;\n  }\n\n  .librarian-show-less-text,\n  .librarian-ai-summery-text.librarian-summery-measured.librarian-show-less-text {\n    max-height: calc(203px + var(--librarian-btn-bar-height, 120px) + 12px);\n  }\n\n  .librarian-disclaimer-container {\n    margin: auto;\n    margin-top: 5px;\n  }\n}\n\n/*Laptop*/\n@media only screen and (min-width: 1024px) and (max-width: 1349px) {\n  .librarian-genai-container {\n    max-width: 790px;\n  }\n}\n\n/*Desktop*/\n@media only screen and (min-width: 1350px) {\n  .librarian-genai-container {\n    max-width: 900px;\n  }\n}\n\n.librarian-search-refinements {\n  margin-top: 30px;\n  align-self: flex-start;\n}\n\n.librarian-search-refinements-header {\n  font-size: 15px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 166.7%;\n  padding: 0 !important\n}\n\n.librarian-search-refinements-items {\n  color: #EEE;\n  font-size: 15px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 100%;\n  border-bottom: 1px solid #76B900;\n  cursor: pointer;\n  padding-top: 15px;\n  width: fit-content\n}\n\n.librarian-search-refinements-container {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  padding-top: 16px;\n}\n\n.librarian-search-refinements-capsule {\n  color: #222;\n  font-size: 11px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 15.4px;\n  border-radius: 18px;\n  border: 1px solid #808080;\n  padding: 5px 10px;\n  align-items: center;\n  cursor: pointer;\n}\n\n.librarian-disclaimer-container {\n  font-size: 10px !important;\n  line-height: 130%;\n  p{\n    color: #CCC !important;\n    font-size: 10px !important;\n    padding: 0;\n  }\n}\n\n.librarian-disclaimer-container a {\n  text-decoration-thickness: 1px !important;\n  &:hover{\n    text-decoration-color: #fff;\n  }\n}\n\n.librarian-generating-dots > span {\n  display: inline-block;\n  opacity: 0;\n  animation: librarian-generating-dot 1.2s ease-in-out infinite;\n}\n\n.librarian-generating-dots > span:nth-child(2) {\n  animation-delay: 0.2s;\n}\n\n.librarian-generating-dots > span:nth-child(3) {\n  animation-delay: 0.4s;\n}\n\n@keyframes librarian-generating-dot {\n  0%, 80%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n}`,
            "",
          ]);
          const p = d;
        },
        632(e, n, t) {
          t.d(n, { A: () => o });
          var r = t(601),
            a = t.n(r),
            i = t(314),
            l = t.n(i)()(a());
          l.push([
            e.id,
            ".librarian-no-results-container {\n  width: 100%;\n}\n\n.librarian-no-results-text {\n  font-size: 22px;\n  line-height: 175%;\n}\n\n.librarian-no-results-term {\n  font-weight: bold;\n}\n\n.librarian-no-results-list {\n  list-style-type: disc;\n  padding-left: 15px;\n  font-size: 15px;\n  line-height: 25px;\n  color: #666 !important;\n}\n.librarian-no-results-list li span{\n  color: #000 !important;\n}\n\n.librarian-no-result-tips {\n  font-size: 15px;\n  font-weight: 700;\n}\n\n.librarian-search-tips-container {\n  background-color: #f7f7f7;\n  padding: 20px 30px;  \n}\n",
            "",
          ]);
          const o = l;
        },
        201(e, n, t) {
          t.d(n, { A: () => o });
          var r = t(601),
            a = t.n(r),
            i = t(314),
            l = t.n(i)()(a());
          l.push([
            e.id,
            ".librarian-notfound-container {\n  text-align: center;\n  padding: 80px 20px;\n  background-color: #fff;\n  color: #000;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 40px;\n}\n\n.librarian-notfound-status {\n  color: #000;\n  font-size: 20px !important;\n  font-weight:700;\n  line-height: 25px !important;\n}\n\n.librarian-notfound-title {\n  color: #000;\n  font-size: 48px;\n  font-weight:700;\n  line-height: 60px;\n}\n\n.librarian-notfound-description {\n  font-size: 15px !important;\n  color: #000;\n  width: 740px;\n  max-width: 90%;\n  margin: auto;\n  font-weight: 400;\n  line-height: 25px;\n}\n\n.librarian-notfound-button {\n  background-color: #76b900;\n  color: #000;\n  border: none;\n  outline: none;\n  text-decoration: none !important;\n  padding: 13px 15px;\n  font-weight: 700 !important;\n  font-family: 18px !important;\n  display: inline-block;\n  &:hover {\n    background-color: #91c733;;\n  }\n}\n\n/* Tablet devices */\n@media only screen and (min-width: 640px) and (max-width: 1023px) {\n  .librarian-notfound-title{\n    font-size: 36px !important;\n    line-height: 45px !important;\n  }\n}\n\n/* Mobile devices */\n@media only screen and (max-width: 639px){\n  .librarian-notfound-title{\n    font-size: 36px !important;\n    line-height: 45px !important;\n  }\n}",
            "",
          ]);
          const o = l;
        },
        321(e, n, t) {
          t.d(n, { A: () => u });
          var r = t(601),
            a = t.n(r),
            i = t(314),
            l = t.n(i),
            o = t(919),
            s = l()(a());
          (s.i(o.A),
            s.push([
              e.id,
              '.librarian-overlay-container {\n  background: #161616;\n  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.19), 0px 0px 2px 0px rgba(0, 0, 0, 0.19);\n  padding: 60px 0;\n  text-align: center;\n  width: 100%;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.librarian-overlay-text {\n  font-size: 36px !important;\n  font-weight: 700 !important;\n  line-height: 45px !important;\n  color: #fff !important;\n}\n\n@media only screen and (max-width: 1199px) {\n  .librarian-overlay-text {\n    font-size: 28px !important;\n    line-height: 35px !important;\n  }\n}\n\n@media only screen and (max-width: 1023px) {\n  .librarian-overlay-text {\n    font-size: 24px !important;\n    line-height: 30px !important;\n  }\n}\n\n.librarian-overlay-text-container {\n  margin: 0 auto;\n}\n\n.librarian-overlay-topWrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 30px;\n}\n\n.librarian-overlay {\n  position: fixed;\n  top: var(--nv-global-nav-pull-up, 44px);\n  left: 0;\n  height: calc(100% - 40px);\n  width: 100%;\n  min-height: 50%;\n  background-color: transparent;\n  box-shadow: 0 2px 4px #000d;\n  background-color: #0009;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  z-index: 1000;\n}\n\n.librarian-inline {\n  width: 100%;\n  display: block;\n}\n\n.librarian-inline .librarian-overlay-container.librarian-inline-container {\n  position: relative;\n  width: 100%;\n  max-width: 100%;\n  padding: 60px 0;\n  box-shadow: none;\n}\n\n@media only screen and (max-width: 1023px) {\n  .librarian-overlay-container,\n  .librarian-inline .librarian-overlay-container.librarian-inline-container {\n    padding: 30px 0;\n  }\n}\n\n@media only screen and (max-width:639px){\n  .librarian-overlay-container,\n  .librarian-inline .librarian-overlay-container.librarian-inline-container {\n    padding-top: 0 !important;\n  }\n}\n\n.librarian-show-overlay {\n  display: block;\n}\n\n.librarian-close-button {\n  position: absolute;\n  top: 10px;\n  right: 20px;\n  font-size: 30px;\n  cursor: pointer;\n}\n\n.librarian-search-input-home {\n  max-width: 910px;\n}\n\n.librarian-search-ai-icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  flex-shrink: 0;\n}\n\n.librarian-search-input-container .librarian-search-input {\n  flex: 1;\n  background-color: transparent !important;\n  color: #fff !important;\n  border: none !important;\n  outline: none !important;\n  font-size: 16px;\n  height: 100%;\n  caret-color: #d4c4a8;\n}\n\n.librarian-search-input-container .librarian-search-input::placeholder {\n  color: #b3b3b3;\n  opacity: 1;\n}\n\n.librarian-suggestedPillsWrapper {\n  /* overflow-x: scroll;\n  scrollbar-width: none; */\n  width: 731px;\n  margin: 0 auto;\n  flex-direction: column;\n  text-align: center;\n}\n\n.librarian-try-searches-header {\n  margin: 30px auto 0;\n  color: #fff !important;\n  font-size: 15px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 166.7%;\n  padding: 0 !important;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.librarian-try-searches-header:focus-visible {\n  outline: 2px solid #d4c4a8;\n  outline-offset: 4px;\n  border-radius: 4px;\n}\n\n.librarian-try-searches-chevron {\n  display: inline-flex;\n  align-items: center;\n  transition: transform 0.25s ease;\n}\n\n.librarian-try-searches-chevron.librarian-rotated {\n  transform: rotate(180deg);\n}\n\n.librarian-suggestedPillsContainer {\n  /* scrollbar-width: none;\n  -ms-overflow-style: none; */\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n/* .librarian-suggestedPillsContainer::-webkit-scrollbar {\n  display: none;\n} */\n\n\n.librarian-suggestedPills {\n  color: #EEE;\n  font-size: 11px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 15.4px;\n  border-radius: 18px;\n  border: 1px solid #808080;\n  padding: 5px 10px;\n  align-items: center;\n  cursor: pointer;\n  margin-right: 16px;\n  margin-top: 16px;\n}\n\n.librarian-hidden-div{\n  display: none;\n}\n\n@media only screen and (max-width:639px) {\n  .librarian-hidden-div{\n    display: block;\n    height: 100px;\n  }\n}\n\n/* Mobile devices */\n@media (max-width:639px) {\n  .librarian-overlay-topWrapper {\n    margin-top: 60px;\n  }\n}\n\n@media only screen and (max-width:399px) {\n  .librarian-overlay-container{\n    min-height: none;\n    overflow: scroll;\n  }\n}\n@media only screen and (max-width: 639px) {\n  .librarian-overlay-container,\n  .librarian-inline .librarian-overlay-container.librarian-inline-container {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n\n  .librarian-overlay-container .general-container {\n    max-width: 630px !important;\n    width: 100% !important;\n    padding: 0px !important;\n  }\n\n  .librarian-search-input-home {\n    max-width: 455px;\n  }\n\n  .librarian-search-input {\n    font-size: 16px;\n  }\n\n  .librarian-suggestedPillsWrapper {\n    width: 100%;\n    max-width: 100%;\n  }\n}\n\n/* Tablet devices */\n@media only screen and (min-width: 640px) and (max-width: 1023px) {\n  .librarian-overlay-container .general-container {\n    max-width: 630px !important;\n    width: 100% !important;\n  }\n\n  .librarian-search-input-home {\n    max-width: 620px;\n  }\n\n  .librarian-search-input {\n    font-size: 16px;\n  }\n\n  .librarian-suggestedPillsWrapper {\n    width: 630px;\n    max-width: 100vw;\n  }\n}\n\n\n/* Laptop devices */\n@media only screen and (min-width: 1024px) and (max-width: 1349px) {\n  .librarian-overlay-container .general-container {\n    max-width: 954px !important;\n    width: 100% !important;\n  }\n\n  .librarian-search-input-home {\n    max-width: 790px;\n  }\n}\n\n/* Desktop devices */\n@media only screen and (min-width: 1350px) {\n  .librarian-overlay-container .general-container {\n    max-width: 1290px !important;\n    width: 100% !important;\n  }\n\n  .librarian-search-input-home {\n    max-width: 910px;\n  }\n}\n\n#paperplane-icon-btn {\n  border: none;\n  background: #76b900;\n  width: 30px;\n  height: 30px;\n  border-radius: 2px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: background 0.2s ease, opacity 0.2s ease;\n}\n\n#paperplane-icon-btn:hover:not(:disabled) {\n  background: #8fd400;\n}\n\n#paperplane-icon-btn:disabled {\n  cursor: auto;\n  background: #ccc;\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n\n\n.librarian-search-input-container .librarian-search-icon[aria-label="cross-button"] {\n  background: transparent;\n  border: none;\n  color: #b3b3b3;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 4px;\n  margin-right: 4px;\n}\n\n.librarian-search-input-container .librarian-search-icon[aria-label="cross-button"]:hover {\n  color: #fff;\n}',
              "",
            ]));
          const u = s;
        },
        785(e, n, t) {
          t.d(n, { A: () => o });
          var r = t(601),
            a = t.n(r),
            i = t(314),
            l = t.n(i)()(a());
          l.push([
            e.id,
            ".librarian-search-pagination-wrapper {\n  display: flex;\n  width: 100%;\n  padding: 20px 0;\n}\n\n/* only mobile viewport */\n@media screen and (max-width: 639px) {\n  .librarian-search-pagination-wrapper {\n    font-size: 14px;\n  }\n}\n\n/* tablet, laptop and desktop viewport */\n@media screen and (min-width: 640px) {\n  .librarian-search-pagination-wrapper {\n    font-size: 16px;\n  }\n}\n\n.librarian-pager-left {\n  flex: 0 0 128px;\n}\n\n.librarian-pager-center {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  background: #f7f7f7 0 0 no-repeat padding-box;\n  letter-spacing: 0;\n  color: #000;\n  font-weight: bold;\n  font-size: 20px;\n  height: 50px;\n}\n\n.librarian-pager-right {\n  flex: 0 0 128px;\n}\n\n.librarian-pagination-button {\n  width: 128px;\n  padding: 12px !important;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  -webkit-border-radius: 0;\n  -moz-border-radius: 0;\n  border-radius: 0;\n  background: #76B900 0 0 no-repeat padding-box;\n  text-align: center;\n  color: #000;\n  font-weight: bold;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  cursor: pointer;\n  font-size: 18px;\n  box-sizing: border-box;\n  height: 50px;\n\n  &:disabled {\n    background-color: #fff;\n    border: 2px solid #76B900;\n    cursor: auto;\n  }\n}",
            "",
          ]);
          const o = l;
        },
        247(e, n, t) {
          t.d(n, { A: () => o });
          var r = t(601),
            a = t.n(r),
            i = t(314),
            l = t.n(i)()(a());
          l.push([
            e.id,
            "img {\n    border: 0;\n}\n\n.librarian-search-results-wrapper {\n    padding-top: 30px;\n}\n\n/* only mobile viewport */\n@media screen and (max-width: 639px) {\n    .librarian-search-results-wrapper .search-results-item {\n        padding-bottom: 40px;\n    }\n\n    .librarian-search-results-wrapper .search-results-item:last-child {\n        padding-bottom: 0px !important;\n    }\n}\n\n\n/* tablet, laptop and desktop viewport */\n@media screen and (min-width: 640px) {\n    .librarian-search-results-wrapper .search-results-item {\n        padding-bottom: 30px;\n    }\n\n    .librarian-search-results-wrapper .search-results-item:last-child {\n        padding-bottom: 0px !important;\n    }\n}\n\n.librarian-search-results-wrapper .promoted-item {\n    align-content: center;\n    align-items: flex-start;\n    display: flex;\n    flex-direction: row;\n}\n\n/* laptop and desktop viewport */\n@media screen and (min-width: 1024px) {\n    .librarian-search-results-wrapper .promoted-item .event-item-image {\n        min-width: 30%;\n        width: 30%;\n    }\n\n    .librarian-search-results-wrapper .event-item-image {\n        display: inline-block;\n        padding: 0 30px 0 0;\n        height: auto;\n    }\n}\n\n/* only tablet viewport */\n@media screen and (min-width: 640px) and (max-width: 1023px) {\n    .librarian-search-results-wrapper .promoted-item .event-item-image {\n        min-width: 50%;\n        width: 50%;\n    }\n\n    .librarian-search-results-wrapper .event-item-image {\n        display: inline-block;\n        padding: 0 15px 0 0;\n        height: auto;\n    }\n}\n\n/* only mobile viewport */\n@media screen and (max-width: 639px) {\n    .librarian-search-results-wrapper .promoted-item .event-item-image {\n        min-width: 50%;\n        width: 50%;\n    }\n\n    .librarian-search-results-wrapper .event-item-image {\n        display: none;\n        padding: 0 30px 0 0;\n        height: auto;\n    }\n}\n\n/* only mobile viewport */\n@media screen and (max-width: 639px) {\n    .librarian-search-results-text {\n        max-width: 100%\n    }\n}\n\n/* only tablet viewport */\n@media screen and (min-width: 640px) and (max-width: 1023px) {\n    .librarian-search-results-text {\n        max-width: 50%\n    }\n}\n\n.librarian-item-image {\n    background-color: #ccc;\n    height: 0;\n    padding-bottom: 56.25%;\n    position: relative;\n    width: 100%;\n}\n\n.librarian-item-image img.thumbnail {\n    height: 100%;\n    left: 0;\n    opacity: 0;\n    position: absolute;\n    transition: opacity 1s ease;\n    width: 100%;\n}\n\n.librarian-item-image img.thumbnail.in {\n    opacity: 1;\n}\n\n.librarian-search-results-wrapper .search-results-item>div {\n    line-height: 1.25em;\n}\n\n.librarian-search-results-wrapper .promoted-item .recommended {\n    border: 2px solid #ccc;\n    color: #000;\n    display: inline-block;\n    font-size: 14px;\n    line-height: 24px;\n    padding: 0 5px;\n    font-weight: 500;\n}\n\n/* mobile and tablet viewport */\n@media screen and (max-width: 1023px) {\n    .librarian-search-results-wrapper .promoted-item .recommended {\n        margin-bottom: 10px;\n    }\n}\n\n/* laptop and desktop viewport */\n@media screen and (min-width: 1024px) {\n    .librarian-search-results-wrapper .promoted-item .recommended {\n        margin-bottom: 15px;\n    }\n}\n\n.librarian-search-results-wrapper .search-results-item .librarian-item-title {\n    font-weight: bold;\n}\n\n/* mobile and tablet viewport */\n@media screen and (max-width: 1023px) {\n    .librarian-search-results-wrapper .search-results-item .librarian-item-title {\n        padding-bottom: 5px;\n    }\n}\n\n/* laptop and desktop viewport */\n@media screen and (min-width: 1024px) {\n    .librarian-search-results-wrapper .search-results-item .librarian-item-title {\n        padding-bottom: 10px;\n    }\n}\n\n/* only mobile viewport */\n@media screen and (max-width: 639px) {\n    .librarian-search-results-wrapper .search-results-item .librarian-item-title a {\n        font-size: 20px;\n        line-height: normal;\n    }\n}\n\n/* tablet, laptop and desktop viewport */\n@media screen and (min-width: 640px) {\n    .librarian-search-results-wrapper .search-results-item .librarian-item-title a {\n        font-size: 20px;\n        line-height: normal;\n    }\n}\n\n/* only mobile viewport */\n@media screen and (max-width: 639px) {\n    .librarian-search-results-wrapper .search-results-item .librarian-item-summary {\n        font-size: 16px;\n        line-height: 24px;\n        padding-bottom: 5px;\n        color: #1a1a1a;\n    }\n}\n\n/* tablet, laptop and desktop viewport */\n@media screen and (min-width: 640px) {\n    .librarian-search-results-wrapper .search-results-item .librarian-item-summary {\n        font-size: 16px;\n        line-height: 24px;\n        padding-bottom: 10px;\n        color: #1a1a1a;\n    }\n}\n\n.librarian-search-results-wrapper .search-results-item .librarian-item-footer {\n    padding-bottom: 0;\n    overflow-x: hidden;\n    text-overflow: ellipsis;\n    font-size: 14px;\n    line-height: 22px;\n}\n\n.librarian-search-results-wrapper .search-results-item .librarian-item-footer .librarian-item-footer-inner {\n    white-space: wrap;\n    clip: auto;\n}\n\n.librarian-search-results-wrapper .search-results-item .librarian-item-footer .librarian-item-footer-inner .librarian-item-link a {\n    color: #999;\n    text-decoration: none;\n}\n\n.librarian-result-item {\n    text-decoration: none !important;\n}",
            "",
          ]);
          const o = l;
        },
        653(e, n, t) {
          t.d(n, { A: () => o });
          var r = t(601),
            a = t.n(r),
            i = t(314),
            l = t.n(i)()(a());
          l.push([
            e.id,
            ".librarian-ul-list {\n  margin-top: 0px !important;\n  margin-bottom: 0px !important;\n  padding-left: 0px;\n  list-style: none !important;\n}\n\n.librarian-results {\n  margin-bottom: 45px;\n  font-weight: 400;\n  list-style: none !important;\n}\n\n\n.librarian-result-heading {\n  display: flex;\n  align-items: flex-start;\n  gap: 4px;\n  margin-bottom: 8px;\n  justify-content: left;\n  text-align: left;\n}\n\n.librarian-result-body {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 0;\n}\n\n.librarian-result-title {\n  color: #000;\n  text-decoration: none;\n  font-weight: bold;\n  font-size: 20px;\n  line-height: normal;\n}\n\n.librarian-result-number {\n  display: inline-block;\n  box-sizing: border-box;\n  min-width: calc(1.25em + 4px);\n  padding: 0 4px;\n  margin-right: 4px;\n  border: 2px solid #76B900;\n  color: #1a1a1a;\n  font-weight: 700;\n  line-height: 1.25;\n  text-align: center;\n  vertical-align: bottom;\n}\n\n.librarian-result-item:hover .librarian-result-number,\n.librarian-result-item:focus-visible .librarian-result-number {\n  border-color: #000;\n}\n\n.librarian-result-description {\n    font-size: 16px;\n    color: #1a1a1a;\n    padding-bottom: 0px !important;\n    margin-bottom: 10px;\n    overflow: hidden;\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    text-overflow: ellipsis;\n    -webkit-line-clamp: 3;\n    line-clamp: 3;\n}\n\n/* mobile and tablet viewport */\n@media screen and (max-width: 1023px) {\n  .librarian-result-description {\n    line-height: 22px;\n  }\n}\n\n/* laptop and desktop viewport */\n@media screen and (min-width: 1024px) {\n  .librarian-result-description {\n    line-height: 24px;\n    margin-bottom: 5px;\n  }\n}\n\n.librarian-result-item {\n  text-decoration: none !important;\n  display: block;\n  border-radius: 4px;\n}\n\n.librarian-result-item:focus {\n  outline: none;\n}\n\n.librarian-result-item:focus-visible {\n  outline: 2px solid #76B900;\n  outline-offset: -2px;\n}\n\n.librarian-result-link {\n  color: #999;\n  overflow-wrap: break-word;\n  font-size: 14px;\n  line-height: 22px;\n}\n",
            "",
          ]);
          const o = l;
        },
        952(e, n, t) {
          t.d(n, { A: () => o });
          var r = t(601),
            a = t.n(r),
            i = t(314),
            l = t.n(i)()(a());
          l.push([
            e.id,
            ".librarian-box-container{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: auto;\n  min-height: 50vh;\n  margin: 0 auto;\n  max-width: 1070px;\n  max-width: 100%;\n}\n\n.librarian-results-layout {\n  display: flex;\n}\n\n.librarian-search-row {\n  width: 100%;\n  display: flex;\n}\n\n.librarian-genai-summery-active {\n  margin-top: 30px;\n}\n\n.librarian-results-divider {\n  background: #ccc;\n  border: none;\n  height: 1px;\n}\n\n#target-div {\n  height: 10px;\n  background: transparent;\n}\n.librarian-error{\n  padding: 20px;\n}\n\n.librarian-result-count-and-promos {\n  width: 100%\n}\n\n.librarian-page-cascade {\n  width: 100%;\n}\n\n.librarian-page-cascade > * {\n  opacity: 0;\n}\n\n.librarian-page-cascade-ready > * {\n  animation: librarian-page-cascade-in 0.45s ease-out both;\n}\n\n.librarian-page-cascade-ready > *:nth-child(1) { animation-delay: 1.4s; }\n.librarian-page-cascade-ready > *:nth-child(2) { animation-delay: 1.5s; }\n.librarian-page-cascade-ready > *:nth-child(3) { animation-delay: 1.6s; }\n.librarian-page-cascade-ready > *:nth-child(4) { animation-delay: 1.7s; }\n.librarian-page-cascade-ready > *:nth-child(n+5) { animation-delay: 1.8s; }\n\n@keyframes librarian-page-cascade-in {\n  from { opacity: 0; transform: translateY(8px); }\n  to { opacity: 1; transform: translateY(0); }\n}\n.librarian-loader-container{\n  height: 260px;\n  display: flex;\n  justify-content: center;\n}\n\n.librarian-results-count{\n  font-size: 18px; \n  font-weight: 700; \n  color:#000;\n  line-height: 125%;\n  padding: 0px !important\n}\n\n.librarian-recommendedForYouDesktopAndLaptop{\n  width: 370px;\n  border-right: 2px solid #DEDFDF;\n  margin-right: 60px;\n  padding-right: 60px;\n}\n\n.librarian-showFilterIcon {\n  display: none;\n  width: 120px;\n  justify-content: space-evenly;\n}\n\n.librarian-showFilterIcon-opened {\n  p {\n    color: #76b900 !important;\n  }\n  svg {\n    path{\n    stroke: #76b900 !important;\n  }\n}\n}\n\n.librarian-showFilterIcon-label{\n  color: #76b900 !important;\n}\n.librarian-showFilterIcon-path{\n  stroke: #76b900 !important;\n}\n\n#nv__card__container {\n  padding: 0px !important;\n}\n\n/* Mobile devices */\n@media only screen and (max-width: 639px) {\n  .librarian-box-container{\n    width: 458px;\n  }\n  .librarian-recommendedForYouDesktopAndLaptop{\n    display: none;\n  }\n  .librarian-result-count-and-promos {\n    padding-top: 40px;\n  }\n  .librarian-showFilterIcon{\n    display: flex;\n    align-items: center;\n  }\n}\n\n/* Tablet devices */\n@media only screen and (min-width: 640px) and (max-width: 1023px) {\n  .librarian-box-container{\n    width: 620px; \n  }\n  .librarian-recommendedForYouDesktopAndLaptop{\n    display: none;\n  }\n  .librarian-result-count-and-promos {\n    padding-top: 40px;\n  }\n  .librarian-showFilterIcon{\n    display: flex;\n    align-items: center;\n  }\n}\n\n/* Laptop Devices */\n@media only screen and (min-width: 1024px) and (max-width: 1349px) {\n  .librarian-box-container{\n    width: 790px; \n  }\n  .librarian-recommendedForYouMobileandTablet{\n    display: none;\n  }\n  .librarian-result-count-and-promos {\n    padding-top: 50px;\n  }\n}\n\n/* Desktop Devices */\n@media only screen and (min-width: 1350px) {\n  .librarian-box-container{\n    width: 1070px;\n  }\n  .librarian-search-row {\n    max-width: 900px;\n    align-self: flex-start;\n  }\n  .librarian-recommendedForYouMobileandTablet{\n    display: none;\n  }\n  .librarian-result-count-and-promos {\n    padding-top: 50px;\n  }\n}\n\n.librarian-recommendedForYouMobileandTablet {\n  margin-top: 30px;\n  align-self: flex-start;\n}\n\n#mobile-generated-banner-list {\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n}\n\n#search-promo-container #nv__rfc__section__wrapper #rfu123 .nv-teaser {\n  margin-bottom: 30px !important;\n}\n\n#mobile-generated-banner-list #nv__rfc__section__wrapper-2 #rfu123-2 .nv-teaser {\n  margin-right: 20px !important;\n}\n\n#mobile-generated-banner-list .at-rec-container-mobile {\n  padding-left: 0px !important;\n}\n\n#search-promo-container #nv__rfc__section__wrapper #rfu123 .nv-card-data {\n  padding-bottom: 15px !important;\n}\n\n#search-promo-container #nv__rfc__section__wrapper h4 {\n  font-size: 20px !important;\n  padding-top: 0px !important;\n}\n\n#mobile-generated-banner-list #nv__rfc__section__wrapper-2 h4 {\n  font-size: 20px !important;\n  padding-top: 0px !important;\n}\n\n",
            "",
          ]);
          const o = l;
        },
        919(e, n, t) {
          t.d(n, { A: () => o });
          var r = t(601),
            a = t.n(r),
            i = t(314),
            l = t.n(i)()(a());
          l.push([
            e.id,
            '@property --angle {\n  syntax: "<angle>";\n  initial-value: 0deg;\n  inherits: false;\n}\n\n@keyframes rotateGradientBorder {\n  from { --angle: 0deg; }\n  to   { --angle: 360deg; }\n}\n\n.rotating-gradient-border {\n  position: relative;\n  isolation: isolate;\n  border: 2px solid transparent;\n  background-origin: border-box;\n  background-clip: padding-box, border-box;\n  background-image:\n    linear-gradient(\n      var(--gradient-border-bg, transparent),\n      var(--gradient-border-bg, transparent)\n    ),\n    conic-gradient(\n      from var(--angle, 0deg),\n      #8b7355 0%, #6d5a3a 5%, #7a6542 10%, #d4c4a8 15%, #b8956e 20%,\n      #c9a86c 25%, #e8dcc4 30%, #f5ede0 35%, #c4a064 40%, #8b7355 45%,\n      #7a6542 50%, #b89b6a 55%, #d4c4a8 60%, #e8dcc4 65%, #c9a86c 70%,\n      #b8956e 75%, #a68b5b 80%, #8b7355 85%, #6d5a3a 90%, #9a8262 95%,\n      #8b7355 100%\n    );\n  animation: rotateGradientBorder 20s linear infinite;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .rotating-gradient-border {\n    animation: none;\n  }\n}\n',
            "",
          ]);
          const o = l;
        },
        393(e, n, t) {
          t.d(n, { A: () => u });
          var r = t(601),
            a = t.n(r),
            i = t(314),
            l = t.n(i),
            o = t(919),
            s = l()(a());
          (s.i(o.A),
            s.push([
              e.id,
              ".librarian-search-input-wrapper {\n    box-sizing: border-box;\n    border-radius: 12px;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    padding: 6px 6px 6px 14px;\n    height: 51px !important;\n    background-color: #0b0b0b;\n    box-shadow: 0 0 24px rgba(196, 160, 100, 0.18);\n    --gradient-border-bg: #0b0b0b;\n}\n\n.librarian-search-input-wrapper .librarian-search-ai-icon {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    width: 32px;\n    height: 32px;\n    flex-shrink: 0;\n}\n\n.librarian-resultsContainer {\n    padding-top: 30px;\n    width: 100%;\n}\n\n.librarian-search-input {\n    border: none;\n    width: 100%;\n    font-size: 16px;\n    font-weight: 400;\n    background-color: transparent;\n    color: #fff !important;\n    caret-color: #d4c4a8;\n}\n\n.librarian-search-input::placeholder {\n    color: #b3b3b3;\n    opacity: 1;\n}\n\n.librarian-search-input:focus {\n    outline: none;\n}\n\n.librarian-search-icon {\n    background-color: transparent;\n    border: none;\n    align-items: center;\n    color: #b3b3b3;\n    cursor: pointer;\n}\n\n.librarian-cross-icon {\n    background-color: transparent;\n    border: none;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    color: #b3b3b3;\n    cursor: pointer;\n    padding: 4px;\n}\n\n.librarian-cross-icon:hover {\n    color: #fff;\n}\n\n.librarian-paperplane-icon {\n    border: none;\n    background: #76B900;\n    width: 36px;\n    height: 36px;\n    border-radius: 6px;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    flex-shrink: 0;\n    cursor: pointer;\n    padding: 0;\n    transition: background 0.2s ease, opacity 0.2s ease;\n}\n\n.librarian-paperplane-icon:hover:not(:disabled) {\n    background: #8FD400;\n}\n\n.librarian-paperplane-icon:disabled {\n    cursor: auto;\n    opacity: 0.6;\n}\n\n.librarian-genAI-loader-title {\n    font-size: 16px;\n    color: #666;\n    font-weight: 500;\n    padding: 40px !important;\n    margin-block-start: 0px !important;\n}\n\n",
              "",
            ]));
          const u = s;
        },
        314(e) {
          e.exports = function (e) {
            var n = [];
            return (
              (n.toString = function () {
                return this.map(function (n) {
                  var t = "",
                    r = void 0 !== n[5];
                  return (
                    n[4] && (t += "@supports (".concat(n[4], ") {")),
                    n[2] && (t += "@media ".concat(n[2], " {")),
                    r &&
                      (t += "@layer".concat(
                        n[5].length > 0 ? " ".concat(n[5]) : "",
                        " {",
                      )),
                    (t += e(n)),
                    r && (t += "}"),
                    n[2] && (t += "}"),
                    n[4] && (t += "}"),
                    t
                  );
                }).join("");
              }),
              (n.i = function (e, t, r, a, i) {
                "string" == typeof e && (e = [[null, e, void 0]]);
                var l = {};
                if (r)
                  for (var o = 0; o < this.length; o++) {
                    var s = this[o][0];
                    null != s && (l[s] = !0);
                  }
                for (var u = 0; u < e.length; u++) {
                  var c = [].concat(e[u]);
                  (r && l[c[0]]) ||
                    (void 0 !== i &&
                      (void 0 === c[5] ||
                        (c[1] = "@layer"
                          .concat(c[5].length > 0 ? " ".concat(c[5]) : "", " {")
                          .concat(c[1], "}")),
                      (c[5] = i)),
                    t &&
                      (c[2]
                        ? ((c[1] = "@media "
                            .concat(c[2], " {")
                            .concat(c[1], "}")),
                          (c[2] = t))
                        : (c[2] = t)),
                    a &&
                      (c[4]
                        ? ((c[1] = "@supports ("
                            .concat(c[4], ") {")
                            .concat(c[1], "}")),
                          (c[4] = a))
                        : (c[4] = "".concat(a))),
                    n.push(c));
                }
              }),
              n
            );
          };
        },
        417(e) {
          e.exports = function (e, n) {
            return (
              n || (n = {}),
              e
                ? ((e = String(e.__esModule ? e.default : e)),
                  /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
                  n.hash && (e += n.hash),
                  /["'() \t\n]|(%20)/.test(e) || n.needQuotes
                    ? '"'.concat(
                        e.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
                        '"',
                      )
                    : e)
                : e
            );
          };
        },
        601(e) {
          e.exports = function (e) {
            return e[1];
          };
        },
        146(e, n, t) {
          var r = t(363),
            a = {
              childContextTypes: !0,
              contextType: !0,
              contextTypes: !0,
              defaultProps: !0,
              displayName: !0,
              getDefaultProps: !0,
              getDerivedStateFromError: !0,
              getDerivedStateFromProps: !0,
              mixins: !0,
              propTypes: !0,
              type: !0,
            },
            i = {
              name: !0,
              length: !0,
              prototype: !0,
              caller: !0,
              callee: !0,
              arguments: !0,
              arity: !0,
            },
            l = {
              $$typeof: !0,
              compare: !0,
              defaultProps: !0,
              displayName: !0,
              propTypes: !0,
              type: !0,
            },
            o = {};
          function s(e) {
            return r.isMemo(e) ? l : o[e.$$typeof] || a;
          }
          ((o[r.ForwardRef] = {
            $$typeof: !0,
            render: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
          }),
            (o[r.Memo] = l));
          var u = Object.defineProperty,
            c = Object.getOwnPropertyNames,
            d = Object.getOwnPropertySymbols,
            f = Object.getOwnPropertyDescriptor,
            p = Object.getPrototypeOf,
            m = Object.prototype;
          e.exports = function e(n, t, r) {
            if ("string" != typeof t) {
              if (m) {
                var a = p(t);
                a && a !== m && e(n, a, r);
              }
              var l = c(t);
              d && (l = l.concat(d(t)));
              for (var o = s(n), h = s(t), b = 0; b < l.length; ++b) {
                var v = l[b];
                if (!(i[v] || (r && r[v]) || (h && h[v]) || (o && o[v]))) {
                  var g = f(t, v);
                  try {
                    u(n, v, g);
                  } catch (e) {}
                }
              }
            }
            return n;
          };
        },
        551(e, n, t) {
          var r = t(540),
            a = t(982);
          function i(e) {
            for (
              var n =
                  "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
                t = 1;
              t < arguments.length;
              t++
            )
              n += "&args[]=" + encodeURIComponent(arguments[t]);
            return (
              "Minified React error #" +
              e +
              "; visit " +
              n +
              " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            );
          }
          var l = new Set(),
            o = {};
          function s(e, n) {
            (u(e, n), u(e + "Capture", n));
          }
          function u(e, n) {
            for (o[e] = n, e = 0; e < n.length; e++) l.add(n[e]);
          }
          var c = !(
              "undefined" == typeof window ||
              void 0 === window.document ||
              void 0 === window.document.createElement
            ),
            d = Object.prototype.hasOwnProperty,
            f =
              /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
            p = {},
            m = {};
          function h(e, n, t, r, a, i, l) {
            ((this.acceptsBooleans = 2 === n || 3 === n || 4 === n),
              (this.attributeName = r),
              (this.attributeNamespace = a),
              (this.mustUseProperty = t),
              (this.propertyName = e),
              (this.type = n),
              (this.sanitizeURL = i),
              (this.removeEmptyString = l));
          }
          var b = {};
          ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
            .split(" ")
            .forEach(function (e) {
              b[e] = new h(e, 0, !1, e, null, !1, !1);
            }),
            [
              ["acceptCharset", "accept-charset"],
              ["className", "class"],
              ["htmlFor", "for"],
              ["httpEquiv", "http-equiv"],
            ].forEach(function (e) {
              var n = e[0];
              b[n] = new h(n, 1, !1, e[1], null, !1, !1);
            }),
            ["contentEditable", "draggable", "spellCheck", "value"].forEach(
              function (e) {
                b[e] = new h(e, 2, !1, e.toLowerCase(), null, !1, !1);
              },
            ),
            [
              "autoReverse",
              "externalResourcesRequired",
              "focusable",
              "preserveAlpha",
            ].forEach(function (e) {
              b[e] = new h(e, 2, !1, e, null, !1, !1);
            }),
            "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
              .split(" ")
              .forEach(function (e) {
                b[e] = new h(e, 3, !1, e.toLowerCase(), null, !1, !1);
              }),
            ["checked", "multiple", "muted", "selected"].forEach(function (e) {
              b[e] = new h(e, 3, !0, e, null, !1, !1);
            }),
            ["capture", "download"].forEach(function (e) {
              b[e] = new h(e, 4, !1, e, null, !1, !1);
            }),
            ["cols", "rows", "size", "span"].forEach(function (e) {
              b[e] = new h(e, 6, !1, e, null, !1, !1);
            }),
            ["rowSpan", "start"].forEach(function (e) {
              b[e] = new h(e, 5, !1, e.toLowerCase(), null, !1, !1);
            }));
          var v = /[\-:]([a-z])/g;
          function g(e) {
            return e[1].toUpperCase();
          }
          function w(e, n, t, r) {
            var a = b.hasOwnProperty(n) ? b[n] : null;
            (null !== a
              ? 0 !== a.type
              : r ||
                !(2 < n.length) ||
                ("o" !== n[0] && "O" !== n[0]) ||
                ("n" !== n[1] && "N" !== n[1])) &&
              ((function (e, n, t, r) {
                if (
                  null == n ||
                  (function (e, n, t, r) {
                    if (null !== t && 0 === t.type) return !1;
                    switch (typeof n) {
                      case "function":
                      case "symbol":
                        return !0;
                      case "boolean":
                        return (
                          !r &&
                          (null !== t
                            ? !t.acceptsBooleans
                            : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                              "aria-" !== e)
                        );
                      default:
                        return !1;
                    }
                  })(e, n, t, r)
                )
                  return !0;
                if (r) return !1;
                if (null !== t)
                  switch (t.type) {
                    case 3:
                      return !n;
                    case 4:
                      return !1 === n;
                    case 5:
                      return isNaN(n);
                    case 6:
                      return isNaN(n) || 1 > n;
                  }
                return !1;
              })(n, t, a, r) && (t = null),
              r || null === a
                ? (function (e) {
                    return (
                      !!d.call(m, e) ||
                      (!d.call(p, e) &&
                        (f.test(e) ? (m[e] = !0) : ((p[e] = !0), !1)))
                    );
                  })(n) &&
                  (null === t
                    ? e.removeAttribute(n)
                    : e.setAttribute(n, "" + t))
                : a.mustUseProperty
                  ? (e[a.propertyName] = null === t ? 3 !== a.type && "" : t)
                  : ((n = a.attributeName),
                    (r = a.attributeNamespace),
                    null === t
                      ? e.removeAttribute(n)
                      : ((t =
                          3 === (a = a.type) || (4 === a && !0 === t)
                            ? ""
                            : "" + t),
                        r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
          }
          ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
            .split(" ")
            .forEach(function (e) {
              var n = e.replace(v, g);
              b[n] = new h(n, 1, !1, e, null, !1, !1);
            }),
            "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
              .split(" ")
              .forEach(function (e) {
                var n = e.replace(v, g);
                b[n] = new h(
                  n,
                  1,
                  !1,
                  e,
                  "http://www.w3.org/1999/xlink",
                  !1,
                  !1,
                );
              }),
            ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
              var n = e.replace(v, g);
              b[n] = new h(
                n,
                1,
                !1,
                e,
                "http://www.w3.org/XML/1998/namespace",
                !1,
                !1,
              );
            }),
            ["tabIndex", "crossOrigin"].forEach(function (e) {
              b[e] = new h(e, 1, !1, e.toLowerCase(), null, !1, !1);
            }),
            (b.xlinkHref = new h(
              "xlinkHref",
              1,
              !1,
              "xlink:href",
              "http://www.w3.org/1999/xlink",
              !0,
              !1,
            )),
            ["src", "href", "action", "formAction"].forEach(function (e) {
              b[e] = new h(e, 1, !1, e.toLowerCase(), null, !0, !0);
            }));
          var y = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
            x = Symbol.for("react.element"),
            I = Symbol.for("react.portal"),
            k = Symbol.for("react.fragment"),
            S = Symbol.for("react.strict_mode"),
            A = Symbol.for("react.profiler"),
            N = Symbol.for("react.provider"),
            E = Symbol.for("react.context"),
            D = Symbol.for("react.forward_ref"),
            _ = Symbol.for("react.suspense"),
            L = Symbol.for("react.suspense_list"),
            O = Symbol.for("react.memo"),
            C = Symbol.for("react.lazy");
          (Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode"));
          var R = Symbol.for("react.offscreen");
          (Symbol.for("react.legacy_hidden"),
            Symbol.for("react.cache"),
            Symbol.for("react.tracing_marker"));
          var P = Symbol.iterator;
          function j(e) {
            return null === e || "object" != typeof e
              ? null
              : "function" == typeof (e = (P && e[P]) || e["@@iterator"])
                ? e
                : null;
          }
          var T,
            V = Object.assign;
          function F(e) {
            if (void 0 === T)
              try {
                throw Error();
              } catch (e) {
                var n = e.stack.trim().match(/\n( *(at )?)/);
                T = (n && n[1]) || "";
              }
            return "\n" + T + e;
          }
          var z = !1;
          function M(e, n) {
            if (!e || z) return "";
            z = !0;
            var t = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            try {
              if (n)
                if (
                  ((n = function () {
                    throw Error();
                  }),
                  Object.defineProperty(n.prototype, "props", {
                    set: function () {
                      throw Error();
                    },
                  }),
                  "object" == typeof Reflect && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(n, []);
                  } catch (e) {
                    var r = e;
                  }
                  Reflect.construct(e, [], n);
                } else {
                  try {
                    n.call();
                  } catch (e) {
                    r = e;
                  }
                  e.call(n.prototype);
                }
              else {
                try {
                  throw Error();
                } catch (e) {
                  r = e;
                }
                e();
              }
            } catch (n) {
              if (n && r && "string" == typeof n.stack) {
                for (
                  var a = n.stack.split("\n"),
                    i = r.stack.split("\n"),
                    l = a.length - 1,
                    o = i.length - 1;
                  1 <= l && 0 <= o && a[l] !== i[o];

                )
                  o--;
                for (; 1 <= l && 0 <= o; l--, o--)
                  if (a[l] !== i[o]) {
                    if (1 !== l || 1 !== o)
                      do {
                        if ((l--, 0 > --o || a[l] !== i[o])) {
                          var s = "\n" + a[l].replace(" at new ", " at ");
                          return (
                            e.displayName &&
                              s.includes("<anonymous>") &&
                              (s = s.replace("<anonymous>", e.displayName)),
                            s
                          );
                        }
                      } while (1 <= l && 0 <= o);
                    break;
                  }
              }
            } finally {
              ((z = !1), (Error.prepareStackTrace = t));
            }
            return (e = e ? e.displayName || e.name : "") ? F(e) : "";
          }
          function B(e) {
            switch (e.tag) {
              case 5:
                return F(e.type);
              case 16:
                return F("Lazy");
              case 13:
                return F("Suspense");
              case 19:
                return F("SuspenseList");
              case 0:
              case 2:
              case 15:
                return M(e.type, !1);
              case 11:
                return M(e.type.render, !1);
              case 1:
                return M(e.type, !0);
              default:
                return "";
            }
          }
          function U(e) {
            if (null == e) return null;
            if ("function" == typeof e) return e.displayName || e.name || null;
            if ("string" == typeof e) return e;
            switch (e) {
              case k:
                return "Fragment";
              case I:
                return "Portal";
              case A:
                return "Profiler";
              case S:
                return "StrictMode";
              case _:
                return "Suspense";
              case L:
                return "SuspenseList";
            }
            if ("object" == typeof e)
              switch (e.$$typeof) {
                case E:
                  return (e.displayName || "Context") + ".Consumer";
                case N:
                  return (e._context.displayName || "Context") + ".Provider";
                case D:
                  var n = e.render;
                  return (
                    (e = e.displayName) ||
                      (e =
                        "" !== (e = n.displayName || n.name || "")
                          ? "ForwardRef(" + e + ")"
                          : "ForwardRef"),
                    e
                  );
                case O:
                  return null !== (n = e.displayName || null)
                    ? n
                    : U(e.type) || "Memo";
                case C:
                  ((n = e._payload), (e = e._init));
                  try {
                    return U(e(n));
                  } catch (e) {}
              }
            return null;
          }
          function H(e) {
            var n = e.type;
            switch (e.tag) {
              case 24:
                return "Cache";
              case 9:
                return (n.displayName || "Context") + ".Consumer";
              case 10:
                return (n._context.displayName || "Context") + ".Provider";
              case 18:
                return "DehydratedFragment";
              case 11:
                return (
                  (e = (e = n.render).displayName || e.name || ""),
                  n.displayName ||
                    ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
                );
              case 7:
                return "Fragment";
              case 5:
                return n;
              case 4:
                return "Portal";
              case 3:
                return "Root";
              case 6:
                return "Text";
              case 16:
                return U(n);
              case 8:
                return n === S ? "StrictMode" : "Mode";
              case 22:
                return "Offscreen";
              case 12:
                return "Profiler";
              case 21:
                return "Scope";
              case 13:
                return "Suspense";
              case 19:
                return "SuspenseList";
              case 25:
                return "TracingMarker";
              case 1:
              case 0:
              case 17:
              case 2:
              case 14:
              case 15:
                if ("function" == typeof n)
                  return n.displayName || n.name || null;
                if ("string" == typeof n) return n;
            }
            return null;
          }
          function G(e) {
            switch (typeof e) {
              case "boolean":
              case "number":
              case "string":
              case "undefined":
              case "object":
                return e;
              default:
                return "";
            }
          }
          function q(e) {
            var n = e.type;
            return (
              (e = e.nodeName) &&
              "input" === e.toLowerCase() &&
              ("checkbox" === n || "radio" === n)
            );
          }
          function W(e) {
            e._valueTracker ||
              (e._valueTracker = (function (e) {
                var n = q(e) ? "checked" : "value",
                  t = Object.getOwnPropertyDescriptor(
                    e.constructor.prototype,
                    n,
                  ),
                  r = "" + e[n];
                if (
                  !e.hasOwnProperty(n) &&
                  void 0 !== t &&
                  "function" == typeof t.get &&
                  "function" == typeof t.set
                ) {
                  var a = t.get,
                    i = t.set;
                  return (
                    Object.defineProperty(e, n, {
                      configurable: !0,
                      get: function () {
                        return a.call(this);
                      },
                      set: function (e) {
                        ((r = "" + e), i.call(this, e));
                      },
                    }),
                    Object.defineProperty(e, n, { enumerable: t.enumerable }),
                    {
                      getValue: function () {
                        return r;
                      },
                      setValue: function (e) {
                        r = "" + e;
                      },
                      stopTracking: function () {
                        ((e._valueTracker = null), delete e[n]);
                      },
                    }
                  );
                }
              })(e));
          }
          function $(e) {
            if (!e) return !1;
            var n = e._valueTracker;
            if (!n) return !0;
            var t = n.getValue(),
              r = "";
            return (
              e && (r = q(e) ? (e.checked ? "true" : "false") : e.value),
              (e = r) !== t && (n.setValue(e), !0)
            );
          }
          function K(e) {
            if (
              void 0 ===
              (e = e || ("undefined" != typeof document ? document : void 0))
            )
              return null;
            try {
              return e.activeElement || e.body;
            } catch (n) {
              return e.body;
            }
          }
          function X(e, n) {
            var t = n.checked;
            return V({}, n, {
              defaultChecked: void 0,
              defaultValue: void 0,
              value: void 0,
              checked: null != t ? t : e._wrapperState.initialChecked,
            });
          }
          function J(e, n) {
            var t = null == n.defaultValue ? "" : n.defaultValue,
              r = null != n.checked ? n.checked : n.defaultChecked;
            ((t = G(null != n.value ? n.value : t)),
              (e._wrapperState = {
                initialChecked: r,
                initialValue: t,
                controlled:
                  "checkbox" === n.type || "radio" === n.type
                    ? null != n.checked
                    : null != n.value,
              }));
          }
          function Q(e, n) {
            null != (n = n.checked) && w(e, "checked", n, !1);
          }
          function Z(e, n) {
            Q(e, n);
            var t = G(n.value),
              r = n.type;
            if (null != t)
              "number" === r
                ? ((0 === t && "" === e.value) || e.value != t) &&
                  (e.value = "" + t)
                : e.value !== "" + t && (e.value = "" + t);
            else if ("submit" === r || "reset" === r)
              return void e.removeAttribute("value");
            (n.hasOwnProperty("value")
              ? ee(e, n.type, t)
              : n.hasOwnProperty("defaultValue") &&
                ee(e, n.type, G(n.defaultValue)),
              null == n.checked &&
                null != n.defaultChecked &&
                (e.defaultChecked = !!n.defaultChecked));
          }
          function Y(e, n, t) {
            if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
              var r = n.type;
              if (
                !(
                  ("submit" !== r && "reset" !== r) ||
                  (void 0 !== n.value && null !== n.value)
                )
              )
                return;
              ((n = "" + e._wrapperState.initialValue),
                t || n === e.value || (e.value = n),
                (e.defaultValue = n));
            }
            ("" !== (t = e.name) && (e.name = ""),
              (e.defaultChecked = !!e._wrapperState.initialChecked),
              "" !== t && (e.name = t));
          }
          function ee(e, n, t) {
            ("number" === n && K(e.ownerDocument) === e) ||
              (null == t
                ? (e.defaultValue = "" + e._wrapperState.initialValue)
                : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
          }
          var ne = Array.isArray;
          function te(e, n, t, r) {
            if (((e = e.options), n)) {
              n = {};
              for (var a = 0; a < t.length; a++) n["$" + t[a]] = !0;
              for (t = 0; t < e.length; t++)
                ((a = n.hasOwnProperty("$" + e[t].value)),
                  e[t].selected !== a && (e[t].selected = a),
                  a && r && (e[t].defaultSelected = !0));
            } else {
              for (t = "" + G(t), n = null, a = 0; a < e.length; a++) {
                if (e[a].value === t)
                  return (
                    (e[a].selected = !0),
                    void (r && (e[a].defaultSelected = !0))
                  );
                null !== n || e[a].disabled || (n = e[a]);
              }
              null !== n && (n.selected = !0);
            }
          }
          function re(e, n) {
            if (null != n.dangerouslySetInnerHTML) throw Error(i(91));
            return V({}, n, {
              value: void 0,
              defaultValue: void 0,
              children: "" + e._wrapperState.initialValue,
            });
          }
          function ae(e, n) {
            var t = n.value;
            if (null == t) {
              if (((t = n.children), (n = n.defaultValue), null != t)) {
                if (null != n) throw Error(i(92));
                if (ne(t)) {
                  if (1 < t.length) throw Error(i(93));
                  t = t[0];
                }
                n = t;
              }
              (null == n && (n = ""), (t = n));
            }
            e._wrapperState = { initialValue: G(t) };
          }
          function ie(e, n) {
            var t = G(n.value),
              r = G(n.defaultValue);
            (null != t &&
              ((t = "" + t) !== e.value && (e.value = t),
              null == n.defaultValue &&
                e.defaultValue !== t &&
                (e.defaultValue = t)),
              null != r && (e.defaultValue = "" + r));
          }
          function le(e) {
            var n = e.textContent;
            n === e._wrapperState.initialValue &&
              "" !== n &&
              null !== n &&
              (e.value = n);
          }
          function oe(e) {
            switch (e) {
              case "svg":
                return "http://www.w3.org/2000/svg";
              case "math":
                return "http://www.w3.org/1998/Math/MathML";
              default:
                return "http://www.w3.org/1999/xhtml";
            }
          }
          function se(e, n) {
            return null == e || "http://www.w3.org/1999/xhtml" === e
              ? oe(n)
              : "http://www.w3.org/2000/svg" === e && "foreignObject" === n
                ? "http://www.w3.org/1999/xhtml"
                : e;
          }
          var ue,
            ce,
            de =
              ((ce = function (e, n) {
                if (
                  "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                  "innerHTML" in e
                )
                  e.innerHTML = n;
                else {
                  for (
                    (ue = ue || document.createElement("div")).innerHTML =
                      "<svg>" + n.valueOf().toString() + "</svg>",
                      n = ue.firstChild;
                    e.firstChild;

                  )
                    e.removeChild(e.firstChild);
                  for (; n.firstChild; ) e.appendChild(n.firstChild);
                }
              }),
              "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
                ? function (e, n, t, r) {
                    MSApp.execUnsafeLocalFunction(function () {
                      return ce(e, n);
                    });
                  }
                : ce);
          function fe(e, n) {
            if (n) {
              var t = e.firstChild;
              if (t && t === e.lastChild && 3 === t.nodeType)
                return void (t.nodeValue = n);
            }
            e.textContent = n;
          }
          var pe = {
              animationIterationCount: !0,
              aspectRatio: !0,
              borderImageOutset: !0,
              borderImageSlice: !0,
              borderImageWidth: !0,
              boxFlex: !0,
              boxFlexGroup: !0,
              boxOrdinalGroup: !0,
              columnCount: !0,
              columns: !0,
              flex: !0,
              flexGrow: !0,
              flexPositive: !0,
              flexShrink: !0,
              flexNegative: !0,
              flexOrder: !0,
              gridArea: !0,
              gridRow: !0,
              gridRowEnd: !0,
              gridRowSpan: !0,
              gridRowStart: !0,
              gridColumn: !0,
              gridColumnEnd: !0,
              gridColumnSpan: !0,
              gridColumnStart: !0,
              fontWeight: !0,
              lineClamp: !0,
              lineHeight: !0,
              opacity: !0,
              order: !0,
              orphans: !0,
              tabSize: !0,
              widows: !0,
              zIndex: !0,
              zoom: !0,
              fillOpacity: !0,
              floodOpacity: !0,
              stopOpacity: !0,
              strokeDasharray: !0,
              strokeDashoffset: !0,
              strokeMiterlimit: !0,
              strokeOpacity: !0,
              strokeWidth: !0,
            },
            me = ["Webkit", "ms", "Moz", "O"];
          function he(e, n, t) {
            return null == n || "boolean" == typeof n || "" === n
              ? ""
              : t ||
                  "number" != typeof n ||
                  0 === n ||
                  (pe.hasOwnProperty(e) && pe[e])
                ? ("" + n).trim()
                : n + "px";
          }
          function be(e, n) {
            for (var t in ((e = e.style), n))
              if (n.hasOwnProperty(t)) {
                var r = 0 === t.indexOf("--"),
                  a = he(t, n[t], r);
                ("float" === t && (t = "cssFloat"),
                  r ? e.setProperty(t, a) : (e[t] = a));
              }
          }
          Object.keys(pe).forEach(function (e) {
            me.forEach(function (n) {
              ((n = n + e.charAt(0).toUpperCase() + e.substring(1)),
                (pe[n] = pe[e]));
            });
          });
          var ve = V(
            { menuitem: !0 },
            {
              area: !0,
              base: !0,
              br: !0,
              col: !0,
              embed: !0,
              hr: !0,
              img: !0,
              input: !0,
              keygen: !0,
              link: !0,
              meta: !0,
              param: !0,
              source: !0,
              track: !0,
              wbr: !0,
            },
          );
          function ge(e, n) {
            if (n) {
              if (
                ve[e] &&
                (null != n.children || null != n.dangerouslySetInnerHTML)
              )
                throw Error(i(137, e));
              if (null != n.dangerouslySetInnerHTML) {
                if (null != n.children) throw Error(i(60));
                if (
                  "object" != typeof n.dangerouslySetInnerHTML ||
                  !("__html" in n.dangerouslySetInnerHTML)
                )
                  throw Error(i(61));
              }
              if (null != n.style && "object" != typeof n.style)
                throw Error(i(62));
            }
          }
          function we(e, n) {
            if (-1 === e.indexOf("-")) return "string" == typeof n.is;
            switch (e) {
              case "annotation-xml":
              case "color-profile":
              case "font-face":
              case "font-face-src":
              case "font-face-uri":
              case "font-face-format":
              case "font-face-name":
              case "missing-glyph":
                return !1;
              default:
                return !0;
            }
          }
          var ye = null;
          function xe(e) {
            return (
              (e = e.target || e.srcElement || window)
                .correspondingUseElement && (e = e.correspondingUseElement),
              3 === e.nodeType ? e.parentNode : e
            );
          }
          var Ie = null,
            ke = null,
            Se = null;
          function Ae(e) {
            if ((e = wa(e))) {
              if ("function" != typeof Ie) throw Error(i(280));
              var n = e.stateNode;
              n && ((n = xa(n)), Ie(e.stateNode, e.type, n));
            }
          }
          function Ne(e) {
            ke ? (Se ? Se.push(e) : (Se = [e])) : (ke = e);
          }
          function Ee() {
            if (ke) {
              var e = ke,
                n = Se;
              if (((Se = ke = null), Ae(e), n))
                for (e = 0; e < n.length; e++) Ae(n[e]);
            }
          }
          function De(e, n) {
            return e(n);
          }
          function _e() {}
          var Le = !1;
          function Oe(e, n, t) {
            if (Le) return e(n, t);
            Le = !0;
            try {
              return De(e, n, t);
            } finally {
              ((Le = !1), (null !== ke || null !== Se) && (_e(), Ee()));
            }
          }
          function Ce(e, n) {
            var t = e.stateNode;
            if (null === t) return null;
            var r = xa(t);
            if (null === r) return null;
            t = r[n];
            e: switch (n) {
              case "onClick":
              case "onClickCapture":
              case "onDoubleClick":
              case "onDoubleClickCapture":
              case "onMouseDown":
              case "onMouseDownCapture":
              case "onMouseMove":
              case "onMouseMoveCapture":
              case "onMouseUp":
              case "onMouseUpCapture":
              case "onMouseEnter":
                ((r = !r.disabled) ||
                  (r = !(
                    "button" === (e = e.type) ||
                    "input" === e ||
                    "select" === e ||
                    "textarea" === e
                  )),
                  (e = !r));
                break e;
              default:
                e = !1;
            }
            if (e) return null;
            if (t && "function" != typeof t) throw Error(i(231, n, typeof t));
            return t;
          }
          var Re = !1;
          if (c)
            try {
              var Pe = {};
              (Object.defineProperty(Pe, "passive", {
                get: function () {
                  Re = !0;
                },
              }),
                window.addEventListener("test", Pe, Pe),
                window.removeEventListener("test", Pe, Pe));
            } catch (ce) {
              Re = !1;
            }
          function je(e, n, t, r, a, i, l, o, s) {
            var u = Array.prototype.slice.call(arguments, 3);
            try {
              n.apply(t, u);
            } catch (e) {
              this.onError(e);
            }
          }
          var Te = !1,
            Ve = null,
            Fe = !1,
            ze = null,
            Me = {
              onError: function (e) {
                ((Te = !0), (Ve = e));
              },
            };
          function Be(e, n, t, r, a, i, l, o, s) {
            ((Te = !1), (Ve = null), je.apply(Me, arguments));
          }
          function Ue(e) {
            var n = e,
              t = e;
            if (e.alternate) for (; n.return; ) n = n.return;
            else {
              e = n;
              do {
                (!!(4098 & (n = e).flags) && (t = n.return), (e = n.return));
              } while (e);
            }
            return 3 === n.tag ? t : null;
          }
          function He(e) {
            if (13 === e.tag) {
              var n = e.memoizedState;
              if (
                (null === n &&
                  null !== (e = e.alternate) &&
                  (n = e.memoizedState),
                null !== n)
              )
                return n.dehydrated;
            }
            return null;
          }
          function Ge(e) {
            if (Ue(e) !== e) throw Error(i(188));
          }
          function qe(e) {
            return null !==
              (e = (function (e) {
                var n = e.alternate;
                if (!n) {
                  if (null === (n = Ue(e))) throw Error(i(188));
                  return n !== e ? null : e;
                }
                for (var t = e, r = n; ; ) {
                  var a = t.return;
                  if (null === a) break;
                  var l = a.alternate;
                  if (null === l) {
                    if (null !== (r = a.return)) {
                      t = r;
                      continue;
                    }
                    break;
                  }
                  if (a.child === l.child) {
                    for (l = a.child; l; ) {
                      if (l === t) return (Ge(a), e);
                      if (l === r) return (Ge(a), n);
                      l = l.sibling;
                    }
                    throw Error(i(188));
                  }
                  if (t.return !== r.return) ((t = a), (r = l));
                  else {
                    for (var o = !1, s = a.child; s; ) {
                      if (s === t) {
                        ((o = !0), (t = a), (r = l));
                        break;
                      }
                      if (s === r) {
                        ((o = !0), (r = a), (t = l));
                        break;
                      }
                      s = s.sibling;
                    }
                    if (!o) {
                      for (s = l.child; s; ) {
                        if (s === t) {
                          ((o = !0), (t = l), (r = a));
                          break;
                        }
                        if (s === r) {
                          ((o = !0), (r = l), (t = a));
                          break;
                        }
                        s = s.sibling;
                      }
                      if (!o) throw Error(i(189));
                    }
                  }
                  if (t.alternate !== r) throw Error(i(190));
                }
                if (3 !== t.tag) throw Error(i(188));
                return t.stateNode.current === t ? e : n;
              })(e))
              ? We(e)
              : null;
          }
          function We(e) {
            if (5 === e.tag || 6 === e.tag) return e;
            for (e = e.child; null !== e; ) {
              var n = We(e);
              if (null !== n) return n;
              e = e.sibling;
            }
            return null;
          }
          var $e = a.unstable_scheduleCallback,
            Ke = a.unstable_cancelCallback,
            Xe = a.unstable_shouldYield,
            Je = a.unstable_requestPaint,
            Qe = a.unstable_now,
            Ze = a.unstable_getCurrentPriorityLevel,
            Ye = a.unstable_ImmediatePriority,
            en = a.unstable_UserBlockingPriority,
            nn = a.unstable_NormalPriority,
            tn = a.unstable_LowPriority,
            rn = a.unstable_IdlePriority,
            an = null,
            ln = null,
            on = Math.clz32
              ? Math.clz32
              : function (e) {
                  return 0 === (e >>>= 0) ? 32 : (31 - ((sn(e) / un) | 0)) | 0;
                },
            sn = Math.log,
            un = Math.LN2,
            cn = 64,
            dn = 4194304;
          function fn(e) {
            switch (e & -e) {
              case 1:
                return 1;
              case 2:
                return 2;
              case 4:
                return 4;
              case 8:
                return 8;
              case 16:
                return 16;
              case 32:
                return 32;
              case 64:
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
                return 4194240 & e;
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
              case 67108864:
                return 130023424 & e;
              case 134217728:
                return 134217728;
              case 268435456:
                return 268435456;
              case 536870912:
                return 536870912;
              case 1073741824:
                return 1073741824;
              default:
                return e;
            }
          }
          function pn(e, n) {
            var t = e.pendingLanes;
            if (0 === t) return 0;
            var r = 0,
              a = e.suspendedLanes,
              i = e.pingedLanes,
              l = 268435455 & t;
            if (0 !== l) {
              var o = l & ~a;
              0 !== o ? (r = fn(o)) : 0 !== (i &= l) && (r = fn(i));
            } else 0 !== (l = t & ~a) ? (r = fn(l)) : 0 !== i && (r = fn(i));
            if (0 === r) return 0;
            if (
              0 !== n &&
              n !== r &&
              0 === (n & a) &&
              ((a = r & -r) >= (i = n & -n) || (16 === a && 4194240 & i))
            )
              return n;
            if ((4 & r && (r |= 16 & t), 0 !== (n = e.entangledLanes)))
              for (e = e.entanglements, n &= r; 0 < n; )
                ((a = 1 << (t = 31 - on(n))), (r |= e[t]), (n &= ~a));
            return r;
          }
          function mn(e, n) {
            switch (e) {
              case 1:
              case 2:
              case 4:
                return n + 250;
              case 8:
              case 16:
              case 32:
              case 64:
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
                return n + 5e3;
              default:
                return -1;
            }
          }
          function hn(e) {
            return 0 != (e = -1073741825 & e.pendingLanes)
              ? e
              : 1073741824 & e
                ? 1073741824
                : 0;
          }
          function bn() {
            var e = cn;
            return (!(4194240 & (cn <<= 1)) && (cn = 64), e);
          }
          function vn(e) {
            for (var n = [], t = 0; 31 > t; t++) n.push(e);
            return n;
          }
          function gn(e, n, t) {
            ((e.pendingLanes |= n),
              536870912 !== n && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
              ((e = e.eventTimes)[(n = 31 - on(n))] = t));
          }
          function wn(e, n) {
            var t = (e.entangledLanes |= n);
            for (e = e.entanglements; t; ) {
              var r = 31 - on(t),
                a = 1 << r;
              ((a & n) | (e[r] & n) && (e[r] |= n), (t &= ~a));
            }
          }
          var yn = 0;
          function xn(e) {
            return 1 < (e &= -e)
              ? 4 < e
                ? 268435455 & e
                  ? 16
                  : 536870912
                : 4
              : 1;
          }
          var In,
            kn,
            Sn,
            An,
            Nn,
            En = !1,
            Dn = [],
            _n = null,
            Ln = null,
            On = null,
            Cn = new Map(),
            Rn = new Map(),
            Pn = [],
            jn =
              "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
                " ",
              );
          function Tn(e, n) {
            switch (e) {
              case "focusin":
              case "focusout":
                _n = null;
                break;
              case "dragenter":
              case "dragleave":
                Ln = null;
                break;
              case "mouseover":
              case "mouseout":
                On = null;
                break;
              case "pointerover":
              case "pointerout":
                Cn.delete(n.pointerId);
                break;
              case "gotpointercapture":
              case "lostpointercapture":
                Rn.delete(n.pointerId);
            }
          }
          function Vn(e, n, t, r, a, i) {
            return null === e || e.nativeEvent !== i
              ? ((e = {
                  blockedOn: n,
                  domEventName: t,
                  eventSystemFlags: r,
                  nativeEvent: i,
                  targetContainers: [a],
                }),
                null !== n && null !== (n = wa(n)) && kn(n),
                e)
              : ((e.eventSystemFlags |= r),
                (n = e.targetContainers),
                null !== a && -1 === n.indexOf(a) && n.push(a),
                e);
          }
          function Fn(e) {
            var n = ga(e.target);
            if (null !== n) {
              var t = Ue(n);
              if (null !== t)
                if (13 === (n = t.tag)) {
                  if (null !== (n = He(t)))
                    return (
                      (e.blockedOn = n),
                      void Nn(e.priority, function () {
                        Sn(t);
                      })
                    );
                } else if (
                  3 === n &&
                  t.stateNode.current.memoizedState.isDehydrated
                )
                  return void (e.blockedOn =
                    3 === t.tag ? t.stateNode.containerInfo : null);
            }
            e.blockedOn = null;
          }
          function zn(e) {
            if (null !== e.blockedOn) return !1;
            for (var n = e.targetContainers; 0 < n.length; ) {
              var t = Jn(
                e.domEventName,
                e.eventSystemFlags,
                n[0],
                e.nativeEvent,
              );
              if (null !== t)
                return (null !== (n = wa(t)) && kn(n), (e.blockedOn = t), !1);
              var r = new (t = e.nativeEvent).constructor(t.type, t);
              ((ye = r), t.target.dispatchEvent(r), (ye = null), n.shift());
            }
            return !0;
          }
          function Mn(e, n, t) {
            zn(e) && t.delete(n);
          }
          function Bn() {
            ((En = !1),
              null !== _n && zn(_n) && (_n = null),
              null !== Ln && zn(Ln) && (Ln = null),
              null !== On && zn(On) && (On = null),
              Cn.forEach(Mn),
              Rn.forEach(Mn));
          }
          function Un(e, n) {
            e.blockedOn === n &&
              ((e.blockedOn = null),
              En ||
                ((En = !0),
                a.unstable_scheduleCallback(a.unstable_NormalPriority, Bn)));
          }
          function Hn(e) {
            function n(n) {
              return Un(n, e);
            }
            if (0 < Dn.length) {
              Un(Dn[0], e);
              for (var t = 1; t < Dn.length; t++) {
                var r = Dn[t];
                r.blockedOn === e && (r.blockedOn = null);
              }
            }
            for (
              null !== _n && Un(_n, e),
                null !== Ln && Un(Ln, e),
                null !== On && Un(On, e),
                Cn.forEach(n),
                Rn.forEach(n),
                t = 0;
              t < Pn.length;
              t++
            )
              (r = Pn[t]).blockedOn === e && (r.blockedOn = null);
            for (; 0 < Pn.length && null === (t = Pn[0]).blockedOn; )
              (Fn(t), null === t.blockedOn && Pn.shift());
          }
          var Gn = y.ReactCurrentBatchConfig,
            qn = !0;
          function Wn(e, n, t, r) {
            var a = yn,
              i = Gn.transition;
            Gn.transition = null;
            try {
              ((yn = 1), Kn(e, n, t, r));
            } finally {
              ((yn = a), (Gn.transition = i));
            }
          }
          function $n(e, n, t, r) {
            var a = yn,
              i = Gn.transition;
            Gn.transition = null;
            try {
              ((yn = 4), Kn(e, n, t, r));
            } finally {
              ((yn = a), (Gn.transition = i));
            }
          }
          function Kn(e, n, t, r) {
            if (qn) {
              var a = Jn(e, n, t, r);
              if (null === a) (Gr(e, n, r, Xn, t), Tn(e, r));
              else if (
                (function (e, n, t, r, a) {
                  switch (n) {
                    case "focusin":
                      return ((_n = Vn(_n, e, n, t, r, a)), !0);
                    case "dragenter":
                      return ((Ln = Vn(Ln, e, n, t, r, a)), !0);
                    case "mouseover":
                      return ((On = Vn(On, e, n, t, r, a)), !0);
                    case "pointerover":
                      var i = a.pointerId;
                      return (
                        Cn.set(i, Vn(Cn.get(i) || null, e, n, t, r, a)),
                        !0
                      );
                    case "gotpointercapture":
                      return (
                        (i = a.pointerId),
                        Rn.set(i, Vn(Rn.get(i) || null, e, n, t, r, a)),
                        !0
                      );
                  }
                  return !1;
                })(a, e, n, t, r)
              )
                r.stopPropagation();
              else if ((Tn(e, r), 4 & n && -1 < jn.indexOf(e))) {
                for (; null !== a; ) {
                  var i = wa(a);
                  if (
                    (null !== i && In(i),
                    null === (i = Jn(e, n, t, r)) && Gr(e, n, r, Xn, t),
                    i === a)
                  )
                    break;
                  a = i;
                }
                null !== a && r.stopPropagation();
              } else Gr(e, n, r, null, t);
            }
          }
          var Xn = null;
          function Jn(e, n, t, r) {
            if (((Xn = null), null !== (e = ga((e = xe(r))))))
              if (null === (n = Ue(e))) e = null;
              else if (13 === (t = n.tag)) {
                if (null !== (e = He(n))) return e;
                e = null;
              } else if (3 === t) {
                if (n.stateNode.current.memoizedState.isDehydrated)
                  return 3 === n.tag ? n.stateNode.containerInfo : null;
                e = null;
              } else n !== e && (e = null);
            return ((Xn = e), null);
          }
          function Qn(e) {
            switch (e) {
              case "cancel":
              case "click":
              case "close":
              case "contextmenu":
              case "copy":
              case "cut":
              case "auxclick":
              case "dblclick":
              case "dragend":
              case "dragstart":
              case "drop":
              case "focusin":
              case "focusout":
              case "input":
              case "invalid":
              case "keydown":
              case "keypress":
              case "keyup":
              case "mousedown":
              case "mouseup":
              case "paste":
              case "pause":
              case "play":
              case "pointercancel":
              case "pointerdown":
              case "pointerup":
              case "ratechange":
              case "reset":
              case "resize":
              case "seeked":
              case "submit":
              case "touchcancel":
              case "touchend":
              case "touchstart":
              case "volumechange":
              case "change":
              case "selectionchange":
              case "textInput":
              case "compositionstart":
              case "compositionend":
              case "compositionupdate":
              case "beforeblur":
              case "afterblur":
              case "beforeinput":
              case "blur":
              case "fullscreenchange":
              case "focus":
              case "hashchange":
              case "popstate":
              case "select":
              case "selectstart":
                return 1;
              case "drag":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "mousemove":
              case "mouseout":
              case "mouseover":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "scroll":
              case "toggle":
              case "touchmove":
              case "wheel":
              case "mouseenter":
              case "mouseleave":
              case "pointerenter":
              case "pointerleave":
                return 4;
              case "message":
                switch (Ze()) {
                  case Ye:
                    return 1;
                  case en:
                    return 4;
                  case nn:
                  case tn:
                    return 16;
                  case rn:
                    return 536870912;
                  default:
                    return 16;
                }
              default:
                return 16;
            }
          }
          var Zn = null,
            Yn = null,
            et = null;
          function nt() {
            if (et) return et;
            var e,
              n,
              t = Yn,
              r = t.length,
              a = "value" in Zn ? Zn.value : Zn.textContent,
              i = a.length;
            for (e = 0; e < r && t[e] === a[e]; e++);
            var l = r - e;
            for (n = 1; n <= l && t[r - n] === a[i - n]; n++);
            return (et = a.slice(e, 1 < n ? 1 - n : void 0));
          }
          function tt(e) {
            var n = e.keyCode;
            return (
              "charCode" in e
                ? 0 === (e = e.charCode) && 13 === n && (e = 13)
                : (e = n),
              10 === e && (e = 13),
              32 <= e || 13 === e ? e : 0
            );
          }
          function rt() {
            return !0;
          }
          function at() {
            return !1;
          }
          function it(e) {
            function n(n, t, r, a, i) {
              for (var l in ((this._reactName = n),
              (this._targetInst = r),
              (this.type = t),
              (this.nativeEvent = a),
              (this.target = i),
              (this.currentTarget = null),
              e))
                e.hasOwnProperty(l) &&
                  ((n = e[l]), (this[l] = n ? n(a) : a[l]));
              return (
                (this.isDefaultPrevented = (
                  null != a.defaultPrevented
                    ? a.defaultPrevented
                    : !1 === a.returnValue
                )
                  ? rt
                  : at),
                (this.isPropagationStopped = at),
                this
              );
            }
            return (
              V(n.prototype, {
                preventDefault: function () {
                  this.defaultPrevented = !0;
                  var e = this.nativeEvent;
                  e &&
                    (e.preventDefault
                      ? e.preventDefault()
                      : "unknown" != typeof e.returnValue &&
                        (e.returnValue = !1),
                    (this.isDefaultPrevented = rt));
                },
                stopPropagation: function () {
                  var e = this.nativeEvent;
                  e &&
                    (e.stopPropagation
                      ? e.stopPropagation()
                      : "unknown" != typeof e.cancelBubble &&
                        (e.cancelBubble = !0),
                    (this.isPropagationStopped = rt));
                },
                persist: function () {},
                isPersistent: rt,
              }),
              n
            );
          }
          var lt,
            ot,
            st,
            ut = {
              eventPhase: 0,
              bubbles: 0,
              cancelable: 0,
              timeStamp: function (e) {
                return e.timeStamp || Date.now();
              },
              defaultPrevented: 0,
              isTrusted: 0,
            },
            ct = it(ut),
            dt = V({}, ut, { view: 0, detail: 0 }),
            ft = it(dt),
            pt = V({}, dt, {
              screenX: 0,
              screenY: 0,
              clientX: 0,
              clientY: 0,
              pageX: 0,
              pageY: 0,
              ctrlKey: 0,
              shiftKey: 0,
              altKey: 0,
              metaKey: 0,
              getModifierState: At,
              button: 0,
              buttons: 0,
              relatedTarget: function (e) {
                return void 0 === e.relatedTarget
                  ? e.fromElement === e.srcElement
                    ? e.toElement
                    : e.fromElement
                  : e.relatedTarget;
              },
              movementX: function (e) {
                return "movementX" in e
                  ? e.movementX
                  : (e !== st &&
                      (st && "mousemove" === e.type
                        ? ((lt = e.screenX - st.screenX),
                          (ot = e.screenY - st.screenY))
                        : (ot = lt = 0),
                      (st = e)),
                    lt);
              },
              movementY: function (e) {
                return "movementY" in e ? e.movementY : ot;
              },
            }),
            mt = it(pt),
            ht = it(V({}, pt, { dataTransfer: 0 })),
            bt = it(V({}, dt, { relatedTarget: 0 })),
            vt = it(
              V({}, ut, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
            ),
            gt = V({}, ut, {
              clipboardData: function (e) {
                return "clipboardData" in e
                  ? e.clipboardData
                  : window.clipboardData;
              },
            }),
            wt = it(gt),
            yt = it(V({}, ut, { data: 0 })),
            xt = {
              Esc: "Escape",
              Spacebar: " ",
              Left: "ArrowLeft",
              Up: "ArrowUp",
              Right: "ArrowRight",
              Down: "ArrowDown",
              Del: "Delete",
              Win: "OS",
              Menu: "ContextMenu",
              Apps: "ContextMenu",
              Scroll: "ScrollLock",
              MozPrintableKey: "Unidentified",
            },
            It = {
              8: "Backspace",
              9: "Tab",
              12: "Clear",
              13: "Enter",
              16: "Shift",
              17: "Control",
              18: "Alt",
              19: "Pause",
              20: "CapsLock",
              27: "Escape",
              32: " ",
              33: "PageUp",
              34: "PageDown",
              35: "End",
              36: "Home",
              37: "ArrowLeft",
              38: "ArrowUp",
              39: "ArrowRight",
              40: "ArrowDown",
              45: "Insert",
              46: "Delete",
              112: "F1",
              113: "F2",
              114: "F3",
              115: "F4",
              116: "F5",
              117: "F6",
              118: "F7",
              119: "F8",
              120: "F9",
              121: "F10",
              122: "F11",
              123: "F12",
              144: "NumLock",
              145: "ScrollLock",
              224: "Meta",
            },
            kt = {
              Alt: "altKey",
              Control: "ctrlKey",
              Meta: "metaKey",
              Shift: "shiftKey",
            };
          function St(e) {
            var n = this.nativeEvent;
            return n.getModifierState
              ? n.getModifierState(e)
              : !!(e = kt[e]) && !!n[e];
          }
          function At() {
            return St;
          }
          var Nt = V({}, dt, {
              key: function (e) {
                if (e.key) {
                  var n = xt[e.key] || e.key;
                  if ("Unidentified" !== n) return n;
                }
                return "keypress" === e.type
                  ? 13 === (e = tt(e))
                    ? "Enter"
                    : String.fromCharCode(e)
                  : "keydown" === e.type || "keyup" === e.type
                    ? It[e.keyCode] || "Unidentified"
                    : "";
              },
              code: 0,
              location: 0,
              ctrlKey: 0,
              shiftKey: 0,
              altKey: 0,
              metaKey: 0,
              repeat: 0,
              locale: 0,
              getModifierState: At,
              charCode: function (e) {
                return "keypress" === e.type ? tt(e) : 0;
              },
              keyCode: function (e) {
                return "keydown" === e.type || "keyup" === e.type
                  ? e.keyCode
                  : 0;
              },
              which: function (e) {
                return "keypress" === e.type
                  ? tt(e)
                  : "keydown" === e.type || "keyup" === e.type
                    ? e.keyCode
                    : 0;
              },
            }),
            Et = it(Nt),
            Dt = it(
              V({}, pt, {
                pointerId: 0,
                width: 0,
                height: 0,
                pressure: 0,
                tangentialPressure: 0,
                tiltX: 0,
                tiltY: 0,
                twist: 0,
                pointerType: 0,
                isPrimary: 0,
              }),
            ),
            _t = it(
              V({}, dt, {
                touches: 0,
                targetTouches: 0,
                changedTouches: 0,
                altKey: 0,
                metaKey: 0,
                ctrlKey: 0,
                shiftKey: 0,
                getModifierState: At,
              }),
            ),
            Lt = it(
              V({}, ut, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
            ),
            Ot = V({}, pt, {
              deltaX: function (e) {
                return "deltaX" in e
                  ? e.deltaX
                  : "wheelDeltaX" in e
                    ? -e.wheelDeltaX
                    : 0;
              },
              deltaY: function (e) {
                return "deltaY" in e
                  ? e.deltaY
                  : "wheelDeltaY" in e
                    ? -e.wheelDeltaY
                    : "wheelDelta" in e
                      ? -e.wheelDelta
                      : 0;
              },
              deltaZ: 0,
              deltaMode: 0,
            }),
            Ct = it(Ot),
            Rt = [9, 13, 27, 32],
            Pt = c && "CompositionEvent" in window,
            jt = null;
          c && "documentMode" in document && (jt = document.documentMode);
          var Tt = c && "TextEvent" in window && !jt,
            Vt = c && (!Pt || (jt && 8 < jt && 11 >= jt)),
            Ft = String.fromCharCode(32),
            zt = !1;
          function Mt(e, n) {
            switch (e) {
              case "keyup":
                return -1 !== Rt.indexOf(n.keyCode);
              case "keydown":
                return 229 !== n.keyCode;
              case "keypress":
              case "mousedown":
              case "focusout":
                return !0;
              default:
                return !1;
            }
          }
          function Bt(e) {
            return "object" == typeof (e = e.detail) && "data" in e
              ? e.data
              : null;
          }
          var Ut = !1,
            Ht = {
              color: !0,
              date: !0,
              datetime: !0,
              "datetime-local": !0,
              email: !0,
              month: !0,
              number: !0,
              password: !0,
              range: !0,
              search: !0,
              tel: !0,
              text: !0,
              time: !0,
              url: !0,
              week: !0,
            };
          function Gt(e) {
            var n = e && e.nodeName && e.nodeName.toLowerCase();
            return "input" === n ? !!Ht[e.type] : "textarea" === n;
          }
          function qt(e, n, t, r) {
            (Ne(r),
              0 < (n = Wr(n, "onChange")).length &&
                ((t = new ct("onChange", "change", null, t, r)),
                e.push({ event: t, listeners: n })));
          }
          var Wt = null,
            $t = null;
          function Kt(e) {
            Fr(e, 0);
          }
          function Xt(e) {
            if ($(ya(e))) return e;
          }
          function Jt(e, n) {
            if ("change" === e) return n;
          }
          var Qt = !1;
          if (c) {
            var Zt;
            if (c) {
              var Yt = "oninput" in document;
              if (!Yt) {
                var er = document.createElement("div");
                (er.setAttribute("oninput", "return;"),
                  (Yt = "function" == typeof er.oninput));
              }
              Zt = Yt;
            } else Zt = !1;
            Qt = Zt && (!document.documentMode || 9 < document.documentMode);
          }
          function nr() {
            Wt && (Wt.detachEvent("onpropertychange", tr), ($t = Wt = null));
          }
          function tr(e) {
            if ("value" === e.propertyName && Xt($t)) {
              var n = [];
              (qt(n, $t, e, xe(e)), Oe(Kt, n));
            }
          }
          function rr(e, n, t) {
            "focusin" === e
              ? (nr(), ($t = t), (Wt = n).attachEvent("onpropertychange", tr))
              : "focusout" === e && nr();
          }
          function ar(e) {
            if ("selectionchange" === e || "keyup" === e || "keydown" === e)
              return Xt($t);
          }
          function ir(e, n) {
            if ("click" === e) return Xt(n);
          }
          function lr(e, n) {
            if ("input" === e || "change" === e) return Xt(n);
          }
          var or =
            "function" == typeof Object.is
              ? Object.is
              : function (e, n) {
                  return (
                    (e === n && (0 !== e || 1 / e == 1 / n)) ||
                    (e != e && n != n)
                  );
                };
          function sr(e, n) {
            if (or(e, n)) return !0;
            if (
              "object" != typeof e ||
              null === e ||
              "object" != typeof n ||
              null === n
            )
              return !1;
            var t = Object.keys(e),
              r = Object.keys(n);
            if (t.length !== r.length) return !1;
            for (r = 0; r < t.length; r++) {
              var a = t[r];
              if (!d.call(n, a) || !or(e[a], n[a])) return !1;
            }
            return !0;
          }
          function ur(e) {
            for (; e && e.firstChild; ) e = e.firstChild;
            return e;
          }
          function cr(e, n) {
            var t,
              r = ur(e);
            for (e = 0; r; ) {
              if (3 === r.nodeType) {
                if (((t = e + r.textContent.length), e <= n && t >= n))
                  return { node: r, offset: n - e };
                e = t;
              }
              e: {
                for (; r; ) {
                  if (r.nextSibling) {
                    r = r.nextSibling;
                    break e;
                  }
                  r = r.parentNode;
                }
                r = void 0;
              }
              r = ur(r);
            }
          }
          function dr(e, n) {
            return (
              !(!e || !n) &&
              (e === n ||
                ((!e || 3 !== e.nodeType) &&
                  (n && 3 === n.nodeType
                    ? dr(e, n.parentNode)
                    : "contains" in e
                      ? e.contains(n)
                      : !!e.compareDocumentPosition &&
                        !!(16 & e.compareDocumentPosition(n)))))
            );
          }
          function fr() {
            for (var e = window, n = K(); n instanceof e.HTMLIFrameElement; ) {
              try {
                var t = "string" == typeof n.contentWindow.location.href;
              } catch (e) {
                t = !1;
              }
              if (!t) break;
              n = K((e = n.contentWindow).document);
            }
            return n;
          }
          function pr(e) {
            var n = e && e.nodeName && e.nodeName.toLowerCase();
            return (
              n &&
              (("input" === n &&
                ("text" === e.type ||
                  "search" === e.type ||
                  "tel" === e.type ||
                  "url" === e.type ||
                  "password" === e.type)) ||
                "textarea" === n ||
                "true" === e.contentEditable)
            );
          }
          function mr(e) {
            var n = fr(),
              t = e.focusedElem,
              r = e.selectionRange;
            if (
              n !== t &&
              t &&
              t.ownerDocument &&
              dr(t.ownerDocument.documentElement, t)
            ) {
              if (null !== r && pr(t))
                if (
                  ((n = r.start),
                  void 0 === (e = r.end) && (e = n),
                  "selectionStart" in t)
                )
                  ((t.selectionStart = n),
                    (t.selectionEnd = Math.min(e, t.value.length)));
                else if (
                  (e =
                    ((n = t.ownerDocument || document) && n.defaultView) ||
                    window).getSelection
                ) {
                  e = e.getSelection();
                  var a = t.textContent.length,
                    i = Math.min(r.start, a);
                  ((r = void 0 === r.end ? i : Math.min(r.end, a)),
                    !e.extend && i > r && ((a = r), (r = i), (i = a)),
                    (a = cr(t, i)));
                  var l = cr(t, r);
                  a &&
                    l &&
                    (1 !== e.rangeCount ||
                      e.anchorNode !== a.node ||
                      e.anchorOffset !== a.offset ||
                      e.focusNode !== l.node ||
                      e.focusOffset !== l.offset) &&
                    ((n = n.createRange()).setStart(a.node, a.offset),
                    e.removeAllRanges(),
                    i > r
                      ? (e.addRange(n), e.extend(l.node, l.offset))
                      : (n.setEnd(l.node, l.offset), e.addRange(n)));
                }
              for (n = [], e = t; (e = e.parentNode); )
                1 === e.nodeType &&
                  n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
              for (
                "function" == typeof t.focus && t.focus(), t = 0;
                t < n.length;
                t++
              )
                (((e = n[t]).element.scrollLeft = e.left),
                  (e.element.scrollTop = e.top));
            }
          }
          var hr =
              c && "documentMode" in document && 11 >= document.documentMode,
            br = null,
            vr = null,
            gr = null,
            wr = !1;
          function yr(e, n, t) {
            var r =
              t.window === t
                ? t.document
                : 9 === t.nodeType
                  ? t
                  : t.ownerDocument;
            wr ||
              null == br ||
              br !== K(r) ||
              ((r =
                "selectionStart" in (r = br) && pr(r)
                  ? { start: r.selectionStart, end: r.selectionEnd }
                  : {
                      anchorNode: (r = (
                        (r.ownerDocument && r.ownerDocument.defaultView) ||
                        window
                      ).getSelection()).anchorNode,
                      anchorOffset: r.anchorOffset,
                      focusNode: r.focusNode,
                      focusOffset: r.focusOffset,
                    }),
              (gr && sr(gr, r)) ||
                ((gr = r),
                0 < (r = Wr(vr, "onSelect")).length &&
                  ((n = new ct("onSelect", "select", null, n, t)),
                  e.push({ event: n, listeners: r }),
                  (n.target = br))));
          }
          function xr(e, n) {
            var t = {};
            return (
              (t[e.toLowerCase()] = n.toLowerCase()),
              (t["Webkit" + e] = "webkit" + n),
              (t["Moz" + e] = "moz" + n),
              t
            );
          }
          var Ir = {
              animationend: xr("Animation", "AnimationEnd"),
              animationiteration: xr("Animation", "AnimationIteration"),
              animationstart: xr("Animation", "AnimationStart"),
              transitionend: xr("Transition", "TransitionEnd"),
            },
            kr = {},
            Sr = {};
          function Ar(e) {
            if (kr[e]) return kr[e];
            if (!Ir[e]) return e;
            var n,
              t = Ir[e];
            for (n in t)
              if (t.hasOwnProperty(n) && n in Sr) return (kr[e] = t[n]);
            return e;
          }
          c &&
            ((Sr = document.createElement("div").style),
            "AnimationEvent" in window ||
              (delete Ir.animationend.animation,
              delete Ir.animationiteration.animation,
              delete Ir.animationstart.animation),
            "TransitionEvent" in window || delete Ir.transitionend.transition);
          var Nr = Ar("animationend"),
            Er = Ar("animationiteration"),
            Dr = Ar("animationstart"),
            _r = Ar("transitionend"),
            Lr = new Map(),
            Or =
              "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
                " ",
              );
          function Cr(e, n) {
            (Lr.set(e, n), s(n, [e]));
          }
          for (var Rr = 0; Rr < Or.length; Rr++) {
            var Pr = Or[Rr];
            Cr(Pr.toLowerCase(), "on" + (Pr[0].toUpperCase() + Pr.slice(1)));
          }
          (Cr(Nr, "onAnimationEnd"),
            Cr(Er, "onAnimationIteration"),
            Cr(Dr, "onAnimationStart"),
            Cr("dblclick", "onDoubleClick"),
            Cr("focusin", "onFocus"),
            Cr("focusout", "onBlur"),
            Cr(_r, "onTransitionEnd"),
            u("onMouseEnter", ["mouseout", "mouseover"]),
            u("onMouseLeave", ["mouseout", "mouseover"]),
            u("onPointerEnter", ["pointerout", "pointerover"]),
            u("onPointerLeave", ["pointerout", "pointerover"]),
            s(
              "onChange",
              "change click focusin focusout input keydown keyup selectionchange".split(
                " ",
              ),
            ),
            s(
              "onSelect",
              "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
                " ",
              ),
            ),
            s("onBeforeInput", [
              "compositionend",
              "keypress",
              "textInput",
              "paste",
            ]),
            s(
              "onCompositionEnd",
              "compositionend focusout keydown keypress keyup mousedown".split(
                " ",
              ),
            ),
            s(
              "onCompositionStart",
              "compositionstart focusout keydown keypress keyup mousedown".split(
                " ",
              ),
            ),
            s(
              "onCompositionUpdate",
              "compositionupdate focusout keydown keypress keyup mousedown".split(
                " ",
              ),
            ));
          var jr =
              "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
                " ",
              ),
            Tr = new Set(
              "cancel close invalid load scroll toggle".split(" ").concat(jr),
            );
          function Vr(e, n, t) {
            var r = e.type || "unknown-event";
            ((e.currentTarget = t),
              (function (e, n, t, r, a, l, o, s, u) {
                if ((Be.apply(this, arguments), Te)) {
                  if (!Te) throw Error(i(198));
                  var c = Ve;
                  ((Te = !1), (Ve = null), Fe || ((Fe = !0), (ze = c)));
                }
              })(r, n, void 0, e),
              (e.currentTarget = null));
          }
          function Fr(e, n) {
            n = !!(4 & n);
            for (var t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.event;
              r = r.listeners;
              e: {
                var i = void 0;
                if (n)
                  for (var l = r.length - 1; 0 <= l; l--) {
                    var o = r[l],
                      s = o.instance,
                      u = o.currentTarget;
                    if (((o = o.listener), s !== i && a.isPropagationStopped()))
                      break e;
                    (Vr(a, o, u), (i = s));
                  }
                else
                  for (l = 0; l < r.length; l++) {
                    if (
                      ((s = (o = r[l]).instance),
                      (u = o.currentTarget),
                      (o = o.listener),
                      s !== i && a.isPropagationStopped())
                    )
                      break e;
                    (Vr(a, o, u), (i = s));
                  }
              }
            }
            if (Fe) throw ((e = ze), (Fe = !1), (ze = null), e);
          }
          function zr(e, n) {
            var t = n[ha];
            void 0 === t && (t = n[ha] = new Set());
            var r = e + "__bubble";
            t.has(r) || (Hr(n, e, 2, !1), t.add(r));
          }
          function Mr(e, n, t) {
            var r = 0;
            (n && (r |= 4), Hr(t, e, r, n));
          }
          var Br = "_reactListening" + Math.random().toString(36).slice(2);
          function Ur(e) {
            if (!e[Br]) {
              ((e[Br] = !0),
                l.forEach(function (n) {
                  "selectionchange" !== n &&
                    (Tr.has(n) || Mr(n, !1, e), Mr(n, !0, e));
                }));
              var n = 9 === e.nodeType ? e : e.ownerDocument;
              null === n ||
                n[Br] ||
                ((n[Br] = !0), Mr("selectionchange", !1, n));
            }
          }
          function Hr(e, n, t, r) {
            switch (Qn(n)) {
              case 1:
                var a = Wn;
                break;
              case 4:
                a = $n;
                break;
              default:
                a = Kn;
            }
            ((t = a.bind(null, n, t, e)),
              (a = void 0),
              !Re ||
                ("touchstart" !== n && "touchmove" !== n && "wheel" !== n) ||
                (a = !0),
              r
                ? void 0 !== a
                  ? e.addEventListener(n, t, { capture: !0, passive: a })
                  : e.addEventListener(n, t, !0)
                : void 0 !== a
                  ? e.addEventListener(n, t, { passive: a })
                  : e.addEventListener(n, t, !1));
          }
          function Gr(e, n, t, r, a) {
            var i = r;
            if (!(1 & n || 2 & n || null === r))
              e: for (;;) {
                if (null === r) return;
                var l = r.tag;
                if (3 === l || 4 === l) {
                  var o = r.stateNode.containerInfo;
                  if (o === a || (8 === o.nodeType && o.parentNode === a))
                    break;
                  if (4 === l)
                    for (l = r.return; null !== l; ) {
                      var s = l.tag;
                      if (
                        (3 === s || 4 === s) &&
                        ((s = l.stateNode.containerInfo) === a ||
                          (8 === s.nodeType && s.parentNode === a))
                      )
                        return;
                      l = l.return;
                    }
                  for (; null !== o; ) {
                    if (null === (l = ga(o))) return;
                    if (5 === (s = l.tag) || 6 === s) {
                      r = i = l;
                      continue e;
                    }
                    o = o.parentNode;
                  }
                }
                r = r.return;
              }
            Oe(function () {
              var r = i,
                a = xe(t),
                l = [];
              e: {
                var o = Lr.get(e);
                if (void 0 !== o) {
                  var s = ct,
                    u = e;
                  switch (e) {
                    case "keypress":
                      if (0 === tt(t)) break e;
                    case "keydown":
                    case "keyup":
                      s = Et;
                      break;
                    case "focusin":
                      ((u = "focus"), (s = bt));
                      break;
                    case "focusout":
                      ((u = "blur"), (s = bt));
                      break;
                    case "beforeblur":
                    case "afterblur":
                      s = bt;
                      break;
                    case "click":
                      if (2 === t.button) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                      s = mt;
                      break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                      s = ht;
                      break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                      s = _t;
                      break;
                    case Nr:
                    case Er:
                    case Dr:
                      s = vt;
                      break;
                    case _r:
                      s = Lt;
                      break;
                    case "scroll":
                      s = ft;
                      break;
                    case "wheel":
                      s = Ct;
                      break;
                    case "copy":
                    case "cut":
                    case "paste":
                      s = wt;
                      break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                      s = Dt;
                  }
                  var c = !!(4 & n),
                    d = !c && "scroll" === e,
                    f = c ? (null !== o ? o + "Capture" : null) : o;
                  c = [];
                  for (var p, m = r; null !== m; ) {
                    var h = (p = m).stateNode;
                    if (
                      (5 === p.tag &&
                        null !== h &&
                        ((p = h),
                        null !== f &&
                          null != (h = Ce(m, f)) &&
                          c.push(qr(m, h, p))),
                      d)
                    )
                      break;
                    m = m.return;
                  }
                  0 < c.length &&
                    ((o = new s(o, u, null, t, a)),
                    l.push({ event: o, listeners: c }));
                }
              }
              if (!(7 & n)) {
                if (
                  ((s = "mouseout" === e || "pointerout" === e),
                  (!(o = "mouseover" === e || "pointerover" === e) ||
                    t === ye ||
                    !(u = t.relatedTarget || t.fromElement) ||
                    (!ga(u) && !u[ma])) &&
                    (s || o) &&
                    ((o =
                      a.window === a
                        ? a
                        : (o = a.ownerDocument)
                          ? o.defaultView || o.parentWindow
                          : window),
                    s
                      ? ((s = r),
                        null !==
                          (u = (u = t.relatedTarget || t.toElement)
                            ? ga(u)
                            : null) &&
                          (u !== (d = Ue(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                          (u = null))
                      : ((s = null), (u = r)),
                    s !== u))
                ) {
                  if (
                    ((c = mt),
                    (h = "onMouseLeave"),
                    (f = "onMouseEnter"),
                    (m = "mouse"),
                    ("pointerout" !== e && "pointerover" !== e) ||
                      ((c = Dt),
                      (h = "onPointerLeave"),
                      (f = "onPointerEnter"),
                      (m = "pointer")),
                    (d = null == s ? o : ya(s)),
                    (p = null == u ? o : ya(u)),
                    ((o = new c(h, m + "leave", s, t, a)).target = d),
                    (o.relatedTarget = p),
                    (h = null),
                    ga(a) === r &&
                      (((c = new c(f, m + "enter", u, t, a)).target = p),
                      (c.relatedTarget = d),
                      (h = c)),
                    (d = h),
                    s && u)
                  )
                    e: {
                      for (f = u, m = 0, p = c = s; p; p = $r(p)) m++;
                      for (p = 0, h = f; h; h = $r(h)) p++;
                      for (; 0 < m - p; ) ((c = $r(c)), m--);
                      for (; 0 < p - m; ) ((f = $r(f)), p--);
                      for (; m--; ) {
                        if (c === f || (null !== f && c === f.alternate))
                          break e;
                        ((c = $r(c)), (f = $r(f)));
                      }
                      c = null;
                    }
                  else c = null;
                  (null !== s && Kr(l, o, s, c, !1),
                    null !== u && null !== d && Kr(l, d, u, c, !0));
                }
                if (
                  "select" ===
                    (s =
                      (o = r ? ya(r) : window).nodeName &&
                      o.nodeName.toLowerCase()) ||
                  ("input" === s && "file" === o.type)
                )
                  var b = Jt;
                else if (Gt(o))
                  if (Qt) b = lr;
                  else {
                    b = ar;
                    var v = rr;
                  }
                else
                  (s = o.nodeName) &&
                    "input" === s.toLowerCase() &&
                    ("checkbox" === o.type || "radio" === o.type) &&
                    (b = ir);
                switch (
                  (b && (b = b(e, r))
                    ? qt(l, b, t, a)
                    : (v && v(e, o, r),
                      "focusout" === e &&
                        (v = o._wrapperState) &&
                        v.controlled &&
                        "number" === o.type &&
                        ee(o, "number", o.value)),
                  (v = r ? ya(r) : window),
                  e)
                ) {
                  case "focusin":
                    (Gt(v) || "true" === v.contentEditable) &&
                      ((br = v), (vr = r), (gr = null));
                    break;
                  case "focusout":
                    gr = vr = br = null;
                    break;
                  case "mousedown":
                    wr = !0;
                    break;
                  case "contextmenu":
                  case "mouseup":
                  case "dragend":
                    ((wr = !1), yr(l, t, a));
                    break;
                  case "selectionchange":
                    if (hr) break;
                  case "keydown":
                  case "keyup":
                    yr(l, t, a);
                }
                var g;
                if (Pt)
                  e: {
                    switch (e) {
                      case "compositionstart":
                        var w = "onCompositionStart";
                        break e;
                      case "compositionend":
                        w = "onCompositionEnd";
                        break e;
                      case "compositionupdate":
                        w = "onCompositionUpdate";
                        break e;
                    }
                    w = void 0;
                  }
                else
                  Ut
                    ? Mt(e, t) && (w = "onCompositionEnd")
                    : "keydown" === e &&
                      229 === t.keyCode &&
                      (w = "onCompositionStart");
                (w &&
                  (Vt &&
                    "ko" !== t.locale &&
                    (Ut || "onCompositionStart" !== w
                      ? "onCompositionEnd" === w && Ut && (g = nt())
                      : ((Yn = "value" in (Zn = a) ? Zn.value : Zn.textContent),
                        (Ut = !0))),
                  0 < (v = Wr(r, w)).length &&
                    ((w = new yt(w, e, null, t, a)),
                    l.push({ event: w, listeners: v }),
                    (g || null !== (g = Bt(t))) && (w.data = g))),
                  (g = Tt
                    ? (function (e, n) {
                        switch (e) {
                          case "compositionend":
                            return Bt(n);
                          case "keypress":
                            return 32 !== n.which ? null : ((zt = !0), Ft);
                          case "textInput":
                            return (e = n.data) === Ft && zt ? null : e;
                          default:
                            return null;
                        }
                      })(e, t)
                    : (function (e, n) {
                        if (Ut)
                          return "compositionend" === e || (!Pt && Mt(e, n))
                            ? ((e = nt()), (et = Yn = Zn = null), (Ut = !1), e)
                            : null;
                        switch (e) {
                          case "paste":
                          default:
                            return null;
                          case "keypress":
                            if (
                              !(n.ctrlKey || n.altKey || n.metaKey) ||
                              (n.ctrlKey && n.altKey)
                            ) {
                              if (n.char && 1 < n.char.length) return n.char;
                              if (n.which) return String.fromCharCode(n.which);
                            }
                            return null;
                          case "compositionend":
                            return Vt && "ko" !== n.locale ? null : n.data;
                        }
                      })(e, t)) &&
                    0 < (r = Wr(r, "onBeforeInput")).length &&
                    ((a = new yt("onBeforeInput", "beforeinput", null, t, a)),
                    l.push({ event: a, listeners: r }),
                    (a.data = g)));
              }
              Fr(l, n);
            });
          }
          function qr(e, n, t) {
            return { instance: e, listener: n, currentTarget: t };
          }
          function Wr(e, n) {
            for (var t = n + "Capture", r = []; null !== e; ) {
              var a = e,
                i = a.stateNode;
              (5 === a.tag &&
                null !== i &&
                ((a = i),
                null != (i = Ce(e, t)) && r.unshift(qr(e, i, a)),
                null != (i = Ce(e, n)) && r.push(qr(e, i, a))),
                (e = e.return));
            }
            return r;
          }
          function $r(e) {
            if (null === e) return null;
            do {
              e = e.return;
            } while (e && 5 !== e.tag);
            return e || null;
          }
          function Kr(e, n, t, r, a) {
            for (var i = n._reactName, l = []; null !== t && t !== r; ) {
              var o = t,
                s = o.alternate,
                u = o.stateNode;
              if (null !== s && s === r) break;
              (5 === o.tag &&
                null !== u &&
                ((o = u),
                a
                  ? null != (s = Ce(t, i)) && l.unshift(qr(t, s, o))
                  : a || (null != (s = Ce(t, i)) && l.push(qr(t, s, o)))),
                (t = t.return));
            }
            0 !== l.length && e.push({ event: n, listeners: l });
          }
          var Xr = /\r\n?/g,
            Jr = /\u0000|\uFFFD/g;
          function Qr(e) {
            return ("string" == typeof e ? e : "" + e)
              .replace(Xr, "\n")
              .replace(Jr, "");
          }
          function Zr(e, n, t) {
            if (((n = Qr(n)), Qr(e) !== n && t)) throw Error(i(425));
          }
          function Yr() {}
          var ea = null,
            na = null;
          function ta(e, n) {
            return (
              "textarea" === e ||
              "noscript" === e ||
              "string" == typeof n.children ||
              "number" == typeof n.children ||
              ("object" == typeof n.dangerouslySetInnerHTML &&
                null !== n.dangerouslySetInnerHTML &&
                null != n.dangerouslySetInnerHTML.__html)
            );
          }
          var ra = "function" == typeof setTimeout ? setTimeout : void 0,
            aa = "function" == typeof clearTimeout ? clearTimeout : void 0,
            ia = "function" == typeof Promise ? Promise : void 0,
            la =
              "function" == typeof queueMicrotask
                ? queueMicrotask
                : void 0 !== ia
                  ? function (e) {
                      return ia.resolve(null).then(e).catch(oa);
                    }
                  : ra;
          function oa(e) {
            setTimeout(function () {
              throw e;
            });
          }
          function sa(e, n) {
            var t = n,
              r = 0;
            do {
              var a = t.nextSibling;
              if ((e.removeChild(t), a && 8 === a.nodeType))
                if ("/$" === (t = a.data)) {
                  if (0 === r) return (e.removeChild(a), void Hn(n));
                  r--;
                } else ("$" !== t && "$?" !== t && "$!" !== t) || r++;
              t = a;
            } while (t);
            Hn(n);
          }
          function ua(e) {
            for (; null != e; e = e.nextSibling) {
              var n = e.nodeType;
              if (1 === n || 3 === n) break;
              if (8 === n) {
                if ("$" === (n = e.data) || "$!" === n || "$?" === n) break;
                if ("/$" === n) return null;
              }
            }
            return e;
          }
          function ca(e) {
            e = e.previousSibling;
            for (var n = 0; e; ) {
              if (8 === e.nodeType) {
                var t = e.data;
                if ("$" === t || "$!" === t || "$?" === t) {
                  if (0 === n) return e;
                  n--;
                } else "/$" === t && n++;
              }
              e = e.previousSibling;
            }
            return null;
          }
          var da = Math.random().toString(36).slice(2),
            fa = "__reactFiber$" + da,
            pa = "__reactProps$" + da,
            ma = "__reactContainer$" + da,
            ha = "__reactEvents$" + da,
            ba = "__reactListeners$" + da,
            va = "__reactHandles$" + da;
          function ga(e) {
            var n = e[fa];
            if (n) return n;
            for (var t = e.parentNode; t; ) {
              if ((n = t[ma] || t[fa])) {
                if (
                  ((t = n.alternate),
                  null !== n.child || (null !== t && null !== t.child))
                )
                  for (e = ca(e); null !== e; ) {
                    if ((t = e[fa])) return t;
                    e = ca(e);
                  }
                return n;
              }
              t = (e = t).parentNode;
            }
            return null;
          }
          function wa(e) {
            return !(e = e[fa] || e[ma]) ||
              (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
              ? null
              : e;
          }
          function ya(e) {
            if (5 === e.tag || 6 === e.tag) return e.stateNode;
            throw Error(i(33));
          }
          function xa(e) {
            return e[pa] || null;
          }
          var Ia = [],
            ka = -1;
          function Sa(e) {
            return { current: e };
          }
          function Aa(e) {
            0 > ka || ((e.current = Ia[ka]), (Ia[ka] = null), ka--);
          }
          function Na(e, n) {
            (ka++, (Ia[ka] = e.current), (e.current = n));
          }
          var Ea = {},
            Da = Sa(Ea),
            _a = Sa(!1),
            La = Ea;
          function Oa(e, n) {
            var t = e.type.contextTypes;
            if (!t) return Ea;
            var r = e.stateNode;
            if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
              return r.__reactInternalMemoizedMaskedChildContext;
            var a,
              i = {};
            for (a in t) i[a] = n[a];
            return (
              r &&
                (((e =
                  e.stateNode).__reactInternalMemoizedUnmaskedChildContext = n),
                (e.__reactInternalMemoizedMaskedChildContext = i)),
              i
            );
          }
          function Ca(e) {
            return null != e.childContextTypes;
          }
          function Ra() {
            (Aa(_a), Aa(Da));
          }
          function Pa(e, n, t) {
            if (Da.current !== Ea) throw Error(i(168));
            (Na(Da, n), Na(_a, t));
          }
          function ja(e, n, t) {
            var r = e.stateNode;
            if (
              ((n = n.childContextTypes),
              "function" != typeof r.getChildContext)
            )
              return t;
            for (var a in (r = r.getChildContext()))
              if (!(a in n)) throw Error(i(108, H(e) || "Unknown", a));
            return V({}, t, r);
          }
          function Ta(e) {
            return (
              (e =
                ((e = e.stateNode) &&
                  e.__reactInternalMemoizedMergedChildContext) ||
                Ea),
              (La = Da.current),
              Na(Da, e),
              Na(_a, _a.current),
              !0
            );
          }
          function Va(e, n, t) {
            var r = e.stateNode;
            if (!r) throw Error(i(169));
            (t
              ? ((e = ja(e, n, La)),
                (r.__reactInternalMemoizedMergedChildContext = e),
                Aa(_a),
                Aa(Da),
                Na(Da, e))
              : Aa(_a),
              Na(_a, t));
          }
          var Fa = null,
            za = !1,
            Ma = !1;
          function Ba(e) {
            null === Fa ? (Fa = [e]) : Fa.push(e);
          }
          function Ua() {
            if (!Ma && null !== Fa) {
              Ma = !0;
              var e = 0,
                n = yn;
              try {
                var t = Fa;
                for (yn = 1; e < t.length; e++) {
                  var r = t[e];
                  do {
                    r = r(!0);
                  } while (null !== r);
                }
                ((Fa = null), (za = !1));
              } catch (n) {
                throw (null !== Fa && (Fa = Fa.slice(e + 1)), $e(Ye, Ua), n);
              } finally {
                ((yn = n), (Ma = !1));
              }
            }
            return null;
          }
          var Ha = [],
            Ga = 0,
            qa = null,
            Wa = 0,
            $a = [],
            Ka = 0,
            Xa = null,
            Ja = 1,
            Qa = "";
          function Za(e, n) {
            ((Ha[Ga++] = Wa), (Ha[Ga++] = qa), (qa = e), (Wa = n));
          }
          function Ya(e, n, t) {
            (($a[Ka++] = Ja), ($a[Ka++] = Qa), ($a[Ka++] = Xa), (Xa = e));
            var r = Ja;
            e = Qa;
            var a = 32 - on(r) - 1;
            ((r &= ~(1 << a)), (t += 1));
            var i = 32 - on(n) + a;
            if (30 < i) {
              var l = a - (a % 5);
              ((i = (r & ((1 << l) - 1)).toString(32)),
                (r >>= l),
                (a -= l),
                (Ja = (1 << (32 - on(n) + a)) | (t << a) | r),
                (Qa = i + e));
            } else ((Ja = (1 << i) | (t << a) | r), (Qa = e));
          }
          function ei(e) {
            null !== e.return && (Za(e, 1), Ya(e, 1, 0));
          }
          function ni(e) {
            for (; e === qa; )
              ((qa = Ha[--Ga]),
                (Ha[Ga] = null),
                (Wa = Ha[--Ga]),
                (Ha[Ga] = null));
            for (; e === Xa; )
              ((Xa = $a[--Ka]),
                ($a[Ka] = null),
                (Qa = $a[--Ka]),
                ($a[Ka] = null),
                (Ja = $a[--Ka]),
                ($a[Ka] = null));
          }
          var ti = null,
            ri = null,
            ai = !1,
            ii = null;
          function li(e, n) {
            var t = Lu(5, null, null, 0);
            ((t.elementType = "DELETED"),
              (t.stateNode = n),
              (t.return = e),
              null === (n = e.deletions)
                ? ((e.deletions = [t]), (e.flags |= 16))
                : n.push(t));
          }
          function oi(e, n) {
            switch (e.tag) {
              case 5:
                var t = e.type;
                return (
                  null !==
                    (n =
                      1 !== n.nodeType ||
                      t.toLowerCase() !== n.nodeName.toLowerCase()
                        ? null
                        : n) &&
                  ((e.stateNode = n), (ti = e), (ri = ua(n.firstChild)), !0)
                );
              case 6:
                return (
                  null !==
                    (n =
                      "" === e.pendingProps || 3 !== n.nodeType ? null : n) &&
                  ((e.stateNode = n), (ti = e), (ri = null), !0)
                );
              case 13:
                return (
                  null !== (n = 8 !== n.nodeType ? null : n) &&
                  ((t = null !== Xa ? { id: Ja, overflow: Qa } : null),
                  (e.memoizedState = {
                    dehydrated: n,
                    treeContext: t,
                    retryLane: 1073741824,
                  }),
                  ((t = Lu(18, null, null, 0)).stateNode = n),
                  (t.return = e),
                  (e.child = t),
                  (ti = e),
                  (ri = null),
                  !0)
                );
              default:
                return !1;
            }
          }
          function si(e) {
            return !(!(1 & e.mode) || 128 & e.flags);
          }
          function ui(e) {
            if (ai) {
              var n = ri;
              if (n) {
                var t = n;
                if (!oi(e, n)) {
                  if (si(e)) throw Error(i(418));
                  n = ua(t.nextSibling);
                  var r = ti;
                  n && oi(e, n)
                    ? li(r, t)
                    : ((e.flags = (-4097 & e.flags) | 2), (ai = !1), (ti = e));
                }
              } else {
                if (si(e)) throw Error(i(418));
                ((e.flags = (-4097 & e.flags) | 2), (ai = !1), (ti = e));
              }
            }
          }
          function ci(e) {
            for (
              e = e.return;
              null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

            )
              e = e.return;
            ti = e;
          }
          function di(e) {
            if (e !== ti) return !1;
            if (!ai) return (ci(e), (ai = !0), !1);
            var n;
            if (
              ((n = 3 !== e.tag) &&
                !(n = 5 !== e.tag) &&
                (n =
                  "head" !== (n = e.type) &&
                  "body" !== n &&
                  !ta(e.type, e.memoizedProps)),
              n && (n = ri))
            ) {
              if (si(e)) throw (fi(), Error(i(418)));
              for (; n; ) (li(e, n), (n = ua(n.nextSibling)));
            }
            if ((ci(e), 13 === e.tag)) {
              if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
                throw Error(i(317));
              e: {
                for (e = e.nextSibling, n = 0; e; ) {
                  if (8 === e.nodeType) {
                    var t = e.data;
                    if ("/$" === t) {
                      if (0 === n) {
                        ri = ua(e.nextSibling);
                        break e;
                      }
                      n--;
                    } else ("$" !== t && "$!" !== t && "$?" !== t) || n++;
                  }
                  e = e.nextSibling;
                }
                ri = null;
              }
            } else ri = ti ? ua(e.stateNode.nextSibling) : null;
            return !0;
          }
          function fi() {
            for (var e = ri; e; ) e = ua(e.nextSibling);
          }
          function pi() {
            ((ri = ti = null), (ai = !1));
          }
          function mi(e) {
            null === ii ? (ii = [e]) : ii.push(e);
          }
          var hi = y.ReactCurrentBatchConfig;
          function bi(e, n, t) {
            if (
              null !== (e = t.ref) &&
              "function" != typeof e &&
              "object" != typeof e
            ) {
              if (t._owner) {
                if ((t = t._owner)) {
                  if (1 !== t.tag) throw Error(i(309));
                  var r = t.stateNode;
                }
                if (!r) throw Error(i(147, e));
                var a = r,
                  l = "" + e;
                return null !== n &&
                  null !== n.ref &&
                  "function" == typeof n.ref &&
                  n.ref._stringRef === l
                  ? n.ref
                  : ((n = function (e) {
                      var n = a.refs;
                      null === e ? delete n[l] : (n[l] = e);
                    }),
                    (n._stringRef = l),
                    n);
              }
              if ("string" != typeof e) throw Error(i(284));
              if (!t._owner) throw Error(i(290, e));
            }
            return e;
          }
          function vi(e, n) {
            throw (
              (e = Object.prototype.toString.call(n)),
              Error(
                i(
                  31,
                  "[object Object]" === e
                    ? "object with keys {" + Object.keys(n).join(", ") + "}"
                    : e,
                ),
              )
            );
          }
          function gi(e) {
            return (0, e._init)(e._payload);
          }
          function wi(e) {
            function n(n, t) {
              if (e) {
                var r = n.deletions;
                null === r ? ((n.deletions = [t]), (n.flags |= 16)) : r.push(t);
              }
            }
            function t(t, r) {
              if (!e) return null;
              for (; null !== r; ) (n(t, r), (r = r.sibling));
              return null;
            }
            function r(e, n) {
              for (e = new Map(); null !== n; )
                (null !== n.key ? e.set(n.key, n) : e.set(n.index, n),
                  (n = n.sibling));
              return e;
            }
            function a(e, n) {
              return (((e = Cu(e, n)).index = 0), (e.sibling = null), e);
            }
            function l(n, t, r) {
              return (
                (n.index = r),
                e
                  ? null !== (r = n.alternate)
                    ? (r = r.index) < t
                      ? ((n.flags |= 2), t)
                      : r
                    : ((n.flags |= 2), t)
                  : ((n.flags |= 1048576), t)
              );
            }
            function o(n) {
              return (e && null === n.alternate && (n.flags |= 2), n);
            }
            function s(e, n, t, r) {
              return null === n || 6 !== n.tag
                ? (((n = Tu(t, e.mode, r)).return = e), n)
                : (((n = a(n, t)).return = e), n);
            }
            function u(e, n, t, r) {
              var i = t.type;
              return i === k
                ? d(e, n, t.props.children, r, t.key)
                : null !== n &&
                    (n.elementType === i ||
                      ("object" == typeof i &&
                        null !== i &&
                        i.$$typeof === C &&
                        gi(i) === n.type))
                  ? (((r = a(n, t.props)).ref = bi(e, n, t)), (r.return = e), r)
                  : (((r = Ru(t.type, t.key, t.props, null, e.mode, r)).ref =
                      bi(e, n, t)),
                    (r.return = e),
                    r);
            }
            function c(e, n, t, r) {
              return null === n ||
                4 !== n.tag ||
                n.stateNode.containerInfo !== t.containerInfo ||
                n.stateNode.implementation !== t.implementation
                ? (((n = Vu(t, e.mode, r)).return = e), n)
                : (((n = a(n, t.children || [])).return = e), n);
            }
            function d(e, n, t, r, i) {
              return null === n || 7 !== n.tag
                ? (((n = Pu(t, e.mode, r, i)).return = e), n)
                : (((n = a(n, t)).return = e), n);
            }
            function f(e, n, t) {
              if (("string" == typeof n && "" !== n) || "number" == typeof n)
                return (((n = Tu("" + n, e.mode, t)).return = e), n);
              if ("object" == typeof n && null !== n) {
                switch (n.$$typeof) {
                  case x:
                    return (
                      ((t = Ru(n.type, n.key, n.props, null, e.mode, t)).ref =
                        bi(e, null, n)),
                      (t.return = e),
                      t
                    );
                  case I:
                    return (((n = Vu(n, e.mode, t)).return = e), n);
                  case C:
                    return f(e, (0, n._init)(n._payload), t);
                }
                if (ne(n) || j(n))
                  return (((n = Pu(n, e.mode, t, null)).return = e), n);
                vi(e, n);
              }
              return null;
            }
            function p(e, n, t, r) {
              var a = null !== n ? n.key : null;
              if (("string" == typeof t && "" !== t) || "number" == typeof t)
                return null !== a ? null : s(e, n, "" + t, r);
              if ("object" == typeof t && null !== t) {
                switch (t.$$typeof) {
                  case x:
                    return t.key === a ? u(e, n, t, r) : null;
                  case I:
                    return t.key === a ? c(e, n, t, r) : null;
                  case C:
                    return p(e, n, (a = t._init)(t._payload), r);
                }
                if (ne(t) || j(t))
                  return null !== a ? null : d(e, n, t, r, null);
                vi(e, t);
              }
              return null;
            }
            function m(e, n, t, r, a) {
              if (("string" == typeof r && "" !== r) || "number" == typeof r)
                return s(n, (e = e.get(t) || null), "" + r, a);
              if ("object" == typeof r && null !== r) {
                switch (r.$$typeof) {
                  case x:
                    return u(
                      n,
                      (e = e.get(null === r.key ? t : r.key) || null),
                      r,
                      a,
                    );
                  case I:
                    return c(
                      n,
                      (e = e.get(null === r.key ? t : r.key) || null),
                      r,
                      a,
                    );
                  case C:
                    return m(e, n, t, (0, r._init)(r._payload), a);
                }
                if (ne(r) || j(r))
                  return d(n, (e = e.get(t) || null), r, a, null);
                vi(n, r);
              }
              return null;
            }
            function h(a, i, o, s) {
              for (
                var u = null, c = null, d = i, h = (i = 0), b = null;
                null !== d && h < o.length;
                h++
              ) {
                d.index > h ? ((b = d), (d = null)) : (b = d.sibling);
                var v = p(a, d, o[h], s);
                if (null === v) {
                  null === d && (d = b);
                  break;
                }
                (e && d && null === v.alternate && n(a, d),
                  (i = l(v, i, h)),
                  null === c ? (u = v) : (c.sibling = v),
                  (c = v),
                  (d = b));
              }
              if (h === o.length) return (t(a, d), ai && Za(a, h), u);
              if (null === d) {
                for (; h < o.length; h++)
                  null !== (d = f(a, o[h], s)) &&
                    ((i = l(d, i, h)),
                    null === c ? (u = d) : (c.sibling = d),
                    (c = d));
                return (ai && Za(a, h), u);
              }
              for (d = r(a, d); h < o.length; h++)
                null !== (b = m(d, a, h, o[h], s)) &&
                  (e &&
                    null !== b.alternate &&
                    d.delete(null === b.key ? h : b.key),
                  (i = l(b, i, h)),
                  null === c ? (u = b) : (c.sibling = b),
                  (c = b));
              return (
                e &&
                  d.forEach(function (e) {
                    return n(a, e);
                  }),
                ai && Za(a, h),
                u
              );
            }
            function b(a, o, s, u) {
              var c = j(s);
              if ("function" != typeof c) throw Error(i(150));
              if (null == (s = c.call(s))) throw Error(i(151));
              for (
                var d = (c = null), h = o, b = (o = 0), v = null, g = s.next();
                null !== h && !g.done;
                b++, g = s.next()
              ) {
                h.index > b ? ((v = h), (h = null)) : (v = h.sibling);
                var w = p(a, h, g.value, u);
                if (null === w) {
                  null === h && (h = v);
                  break;
                }
                (e && h && null === w.alternate && n(a, h),
                  (o = l(w, o, b)),
                  null === d ? (c = w) : (d.sibling = w),
                  (d = w),
                  (h = v));
              }
              if (g.done) return (t(a, h), ai && Za(a, b), c);
              if (null === h) {
                for (; !g.done; b++, g = s.next())
                  null !== (g = f(a, g.value, u)) &&
                    ((o = l(g, o, b)),
                    null === d ? (c = g) : (d.sibling = g),
                    (d = g));
                return (ai && Za(a, b), c);
              }
              for (h = r(a, h); !g.done; b++, g = s.next())
                null !== (g = m(h, a, b, g.value, u)) &&
                  (e &&
                    null !== g.alternate &&
                    h.delete(null === g.key ? b : g.key),
                  (o = l(g, o, b)),
                  null === d ? (c = g) : (d.sibling = g),
                  (d = g));
              return (
                e &&
                  h.forEach(function (e) {
                    return n(a, e);
                  }),
                ai && Za(a, b),
                c
              );
            }
            return function e(r, i, l, s) {
              if (
                ("object" == typeof l &&
                  null !== l &&
                  l.type === k &&
                  null === l.key &&
                  (l = l.props.children),
                "object" == typeof l && null !== l)
              ) {
                switch (l.$$typeof) {
                  case x:
                    e: {
                      for (var u = l.key, c = i; null !== c; ) {
                        if (c.key === u) {
                          if ((u = l.type) === k) {
                            if (7 === c.tag) {
                              (t(r, c.sibling),
                                ((i = a(c, l.props.children)).return = r),
                                (r = i));
                              break e;
                            }
                          } else if (
                            c.elementType === u ||
                            ("object" == typeof u &&
                              null !== u &&
                              u.$$typeof === C &&
                              gi(u) === c.type)
                          ) {
                            (t(r, c.sibling),
                              ((i = a(c, l.props)).ref = bi(r, c, l)),
                              (i.return = r),
                              (r = i));
                            break e;
                          }
                          t(r, c);
                          break;
                        }
                        (n(r, c), (c = c.sibling));
                      }
                      l.type === k
                        ? (((i = Pu(
                            l.props.children,
                            r.mode,
                            s,
                            l.key,
                          )).return = r),
                          (r = i))
                        : (((s = Ru(
                            l.type,
                            l.key,
                            l.props,
                            null,
                            r.mode,
                            s,
                          )).ref = bi(r, i, l)),
                          (s.return = r),
                          (r = s));
                    }
                    return o(r);
                  case I:
                    e: {
                      for (c = l.key; null !== i; ) {
                        if (i.key === c) {
                          if (
                            4 === i.tag &&
                            i.stateNode.containerInfo === l.containerInfo &&
                            i.stateNode.implementation === l.implementation
                          ) {
                            (t(r, i.sibling),
                              ((i = a(i, l.children || [])).return = r),
                              (r = i));
                            break e;
                          }
                          t(r, i);
                          break;
                        }
                        (n(r, i), (i = i.sibling));
                      }
                      (((i = Vu(l, r.mode, s)).return = r), (r = i));
                    }
                    return o(r);
                  case C:
                    return e(r, i, (c = l._init)(l._payload), s);
                }
                if (ne(l)) return h(r, i, l, s);
                if (j(l)) return b(r, i, l, s);
                vi(r, l);
              }
              return ("string" == typeof l && "" !== l) || "number" == typeof l
                ? ((l = "" + l),
                  null !== i && 6 === i.tag
                    ? (t(r, i.sibling), ((i = a(i, l)).return = r), (r = i))
                    : (t(r, i), ((i = Tu(l, r.mode, s)).return = r), (r = i)),
                  o(r))
                : t(r, i);
            };
          }
          var yi = wi(!0),
            xi = wi(!1),
            Ii = Sa(null),
            ki = null,
            Si = null,
            Ai = null;
          function Ni() {
            Ai = Si = ki = null;
          }
          function Ei(e) {
            var n = Ii.current;
            (Aa(Ii), (e._currentValue = n));
          }
          function Di(e, n, t) {
            for (; null !== e; ) {
              var r = e.alternate;
              if (
                ((e.childLanes & n) !== n
                  ? ((e.childLanes |= n), null !== r && (r.childLanes |= n))
                  : null !== r &&
                    (r.childLanes & n) !== n &&
                    (r.childLanes |= n),
                e === t)
              )
                break;
              e = e.return;
            }
          }
          function _i(e, n) {
            ((ki = e),
              (Ai = Si = null),
              null !== (e = e.dependencies) &&
                null !== e.firstContext &&
                (0 !== (e.lanes & n) && (wo = !0), (e.firstContext = null)));
          }
          function Li(e) {
            var n = e._currentValue;
            if (Ai !== e)
              if (
                ((e = { context: e, memoizedValue: n, next: null }),
                null === Si)
              ) {
                if (null === ki) throw Error(i(308));
                ((Si = e), (ki.dependencies = { lanes: 0, firstContext: e }));
              } else Si = Si.next = e;
            return n;
          }
          var Oi = null;
          function Ci(e) {
            null === Oi ? (Oi = [e]) : Oi.push(e);
          }
          function Ri(e, n, t, r) {
            var a = n.interleaved;
            return (
              null === a
                ? ((t.next = t), Ci(n))
                : ((t.next = a.next), (a.next = t)),
              (n.interleaved = t),
              Pi(e, r)
            );
          }
          function Pi(e, n) {
            e.lanes |= n;
            var t = e.alternate;
            for (
              null !== t && (t.lanes |= n), t = e, e = e.return;
              null !== e;

            )
              ((e.childLanes |= n),
                null !== (t = e.alternate) && (t.childLanes |= n),
                (t = e),
                (e = e.return));
            return 3 === t.tag ? t.stateNode : null;
          }
          var ji = !1;
          function Ti(e) {
            e.updateQueue = {
              baseState: e.memoizedState,
              firstBaseUpdate: null,
              lastBaseUpdate: null,
              shared: { pending: null, interleaved: null, lanes: 0 },
              effects: null,
            };
          }
          function Vi(e, n) {
            ((e = e.updateQueue),
              n.updateQueue === e &&
                (n.updateQueue = {
                  baseState: e.baseState,
                  firstBaseUpdate: e.firstBaseUpdate,
                  lastBaseUpdate: e.lastBaseUpdate,
                  shared: e.shared,
                  effects: e.effects,
                }));
          }
          function Fi(e, n) {
            return {
              eventTime: e,
              lane: n,
              tag: 0,
              payload: null,
              callback: null,
              next: null,
            };
          }
          function zi(e, n, t) {
            var r = e.updateQueue;
            if (null === r) return null;
            if (((r = r.shared), 2 & Es)) {
              var a = r.pending;
              return (
                null === a ? (n.next = n) : ((n.next = a.next), (a.next = n)),
                (r.pending = n),
                Pi(e, t)
              );
            }
            return (
              null === (a = r.interleaved)
                ? ((n.next = n), Ci(r))
                : ((n.next = a.next), (a.next = n)),
              (r.interleaved = n),
              Pi(e, t)
            );
          }
          function Mi(e, n, t) {
            if (null !== (n = n.updateQueue) && ((n = n.shared), 4194240 & t)) {
              var r = n.lanes;
              ((t |= r &= e.pendingLanes), (n.lanes = t), wn(e, t));
            }
          }
          function Bi(e, n) {
            var t = e.updateQueue,
              r = e.alternate;
            if (null !== r && t === (r = r.updateQueue)) {
              var a = null,
                i = null;
              if (null !== (t = t.firstBaseUpdate)) {
                do {
                  var l = {
                    eventTime: t.eventTime,
                    lane: t.lane,
                    tag: t.tag,
                    payload: t.payload,
                    callback: t.callback,
                    next: null,
                  };
                  (null === i ? (a = i = l) : (i = i.next = l), (t = t.next));
                } while (null !== t);
                null === i ? (a = i = n) : (i = i.next = n);
              } else a = i = n;
              return (
                (t = {
                  baseState: r.baseState,
                  firstBaseUpdate: a,
                  lastBaseUpdate: i,
                  shared: r.shared,
                  effects: r.effects,
                }),
                void (e.updateQueue = t)
              );
            }
            (null === (e = t.lastBaseUpdate)
              ? (t.firstBaseUpdate = n)
              : (e.next = n),
              (t.lastBaseUpdate = n));
          }
          function Ui(e, n, t, r) {
            var a = e.updateQueue;
            ji = !1;
            var i = a.firstBaseUpdate,
              l = a.lastBaseUpdate,
              o = a.shared.pending;
            if (null !== o) {
              a.shared.pending = null;
              var s = o,
                u = s.next;
              ((s.next = null), null === l ? (i = u) : (l.next = u), (l = s));
              var c = e.alternate;
              null !== c &&
                (o = (c = c.updateQueue).lastBaseUpdate) !== l &&
                (null === o ? (c.firstBaseUpdate = u) : (o.next = u),
                (c.lastBaseUpdate = s));
            }
            if (null !== i) {
              var d = a.baseState;
              for (l = 0, c = u = s = null, o = i; ; ) {
                var f = o.lane,
                  p = o.eventTime;
                if ((r & f) === f) {
                  null !== c &&
                    (c = c.next =
                      {
                        eventTime: p,
                        lane: 0,
                        tag: o.tag,
                        payload: o.payload,
                        callback: o.callback,
                        next: null,
                      });
                  e: {
                    var m = e,
                      h = o;
                    switch (((f = n), (p = t), h.tag)) {
                      case 1:
                        if ("function" == typeof (m = h.payload)) {
                          d = m.call(p, d, f);
                          break e;
                        }
                        d = m;
                        break e;
                      case 3:
                        m.flags = (-65537 & m.flags) | 128;
                      case 0:
                        if (
                          null ==
                          (f =
                            "function" == typeof (m = h.payload)
                              ? m.call(p, d, f)
                              : m)
                        )
                          break e;
                        d = V({}, d, f);
                        break e;
                      case 2:
                        ji = !0;
                    }
                  }
                  null !== o.callback &&
                    0 !== o.lane &&
                    ((e.flags |= 64),
                    null === (f = a.effects) ? (a.effects = [o]) : f.push(o));
                } else
                  ((p = {
                    eventTime: p,
                    lane: f,
                    tag: o.tag,
                    payload: o.payload,
                    callback: o.callback,
                    next: null,
                  }),
                    null === c ? ((u = c = p), (s = d)) : (c = c.next = p),
                    (l |= f));
                if (null === (o = o.next)) {
                  if (null === (o = a.shared.pending)) break;
                  ((o = (f = o).next),
                    (f.next = null),
                    (a.lastBaseUpdate = f),
                    (a.shared.pending = null));
                }
              }
              if (
                (null === c && (s = d),
                (a.baseState = s),
                (a.firstBaseUpdate = u),
                (a.lastBaseUpdate = c),
                null !== (n = a.shared.interleaved))
              ) {
                a = n;
                do {
                  ((l |= a.lane), (a = a.next));
                } while (a !== n);
              } else null === i && (a.shared.lanes = 0);
              ((js |= l), (e.lanes = l), (e.memoizedState = d));
            }
          }
          function Hi(e, n, t) {
            if (((e = n.effects), (n.effects = null), null !== e))
              for (n = 0; n < e.length; n++) {
                var r = e[n],
                  a = r.callback;
                if (null !== a) {
                  if (((r.callback = null), (r = t), "function" != typeof a))
                    throw Error(i(191, a));
                  a.call(r);
                }
              }
          }
          var Gi = {},
            qi = Sa(Gi),
            Wi = Sa(Gi),
            $i = Sa(Gi);
          function Ki(e) {
            if (e === Gi) throw Error(i(174));
            return e;
          }
          function Xi(e, n) {
            switch ((Na($i, n), Na(Wi, e), Na(qi, Gi), (e = n.nodeType))) {
              case 9:
              case 11:
                n = (n = n.documentElement) ? n.namespaceURI : se(null, "");
                break;
              default:
                n = se(
                  (n = (e = 8 === e ? n.parentNode : n).namespaceURI || null),
                  (e = e.tagName),
                );
            }
            (Aa(qi), Na(qi, n));
          }
          function Ji() {
            (Aa(qi), Aa(Wi), Aa($i));
          }
          function Qi(e) {
            Ki($i.current);
            var n = Ki(qi.current),
              t = se(n, e.type);
            n !== t && (Na(Wi, e), Na(qi, t));
          }
          function Zi(e) {
            Wi.current === e && (Aa(qi), Aa(Wi));
          }
          var Yi = Sa(0);
          function el(e) {
            for (var n = e; null !== n; ) {
              if (13 === n.tag) {
                var t = n.memoizedState;
                if (
                  null !== t &&
                  (null === (t = t.dehydrated) ||
                    "$?" === t.data ||
                    "$!" === t.data)
                )
                  return n;
              } else if (
                19 === n.tag &&
                void 0 !== n.memoizedProps.revealOrder
              ) {
                if (128 & n.flags) return n;
              } else if (null !== n.child) {
                ((n.child.return = n), (n = n.child));
                continue;
              }
              if (n === e) break;
              for (; null === n.sibling; ) {
                if (null === n.return || n.return === e) return null;
                n = n.return;
              }
              ((n.sibling.return = n.return), (n = n.sibling));
            }
            return null;
          }
          var nl = [];
          function tl() {
            for (var e = 0; e < nl.length; e++)
              nl[e]._workInProgressVersionPrimary = null;
            nl.length = 0;
          }
          var rl = y.ReactCurrentDispatcher,
            al = y.ReactCurrentBatchConfig,
            il = 0,
            ll = null,
            ol = null,
            sl = null,
            ul = !1,
            cl = !1,
            dl = 0,
            fl = 0;
          function pl() {
            throw Error(i(321));
          }
          function ml(e, n) {
            if (null === n) return !1;
            for (var t = 0; t < n.length && t < e.length; t++)
              if (!or(e[t], n[t])) return !1;
            return !0;
          }
          function hl(e, n, t, r, a, l) {
            if (
              ((il = l),
              (ll = n),
              (n.memoizedState = null),
              (n.updateQueue = null),
              (n.lanes = 0),
              (rl.current = null === e || null === e.memoizedState ? Zl : Yl),
              (e = t(r, a)),
              cl)
            ) {
              l = 0;
              do {
                if (((cl = !1), (dl = 0), 25 <= l)) throw Error(i(301));
                ((l += 1),
                  (sl = ol = null),
                  (n.updateQueue = null),
                  (rl.current = eo),
                  (e = t(r, a)));
              } while (cl);
            }
            if (
              ((rl.current = Ql),
              (n = null !== ol && null !== ol.next),
              (il = 0),
              (sl = ol = ll = null),
              (ul = !1),
              n)
            )
              throw Error(i(300));
            return e;
          }
          function bl() {
            var e = 0 !== dl;
            return ((dl = 0), e);
          }
          function vl() {
            var e = {
              memoizedState: null,
              baseState: null,
              baseQueue: null,
              queue: null,
              next: null,
            };
            return (
              null === sl ? (ll.memoizedState = sl = e) : (sl = sl.next = e),
              sl
            );
          }
          function gl() {
            if (null === ol) {
              var e = ll.alternate;
              e = null !== e ? e.memoizedState : null;
            } else e = ol.next;
            var n = null === sl ? ll.memoizedState : sl.next;
            if (null !== n) ((sl = n), (ol = e));
            else {
              if (null === e) throw Error(i(310));
              ((e = {
                memoizedState: (ol = e).memoizedState,
                baseState: ol.baseState,
                baseQueue: ol.baseQueue,
                queue: ol.queue,
                next: null,
              }),
                null === sl ? (ll.memoizedState = sl = e) : (sl = sl.next = e));
            }
            return sl;
          }
          function wl(e, n) {
            return "function" == typeof n ? n(e) : n;
          }
          function yl(e) {
            var n = gl(),
              t = n.queue;
            if (null === t) throw Error(i(311));
            t.lastRenderedReducer = e;
            var r = ol,
              a = r.baseQueue,
              l = t.pending;
            if (null !== l) {
              if (null !== a) {
                var o = a.next;
                ((a.next = l.next), (l.next = o));
              }
              ((r.baseQueue = a = l), (t.pending = null));
            }
            if (null !== a) {
              ((l = a.next), (r = r.baseState));
              var s = (o = null),
                u = null,
                c = l;
              do {
                var d = c.lane;
                if ((il & d) === d)
                  (null !== u &&
                    (u = u.next =
                      {
                        lane: 0,
                        action: c.action,
                        hasEagerState: c.hasEagerState,
                        eagerState: c.eagerState,
                        next: null,
                      }),
                    (r = c.hasEagerState ? c.eagerState : e(r, c.action)));
                else {
                  var f = {
                    lane: d,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null,
                  };
                  (null === u ? ((s = u = f), (o = r)) : (u = u.next = f),
                    (ll.lanes |= d),
                    (js |= d));
                }
                c = c.next;
              } while (null !== c && c !== l);
              (null === u ? (o = r) : (u.next = s),
                or(r, n.memoizedState) || (wo = !0),
                (n.memoizedState = r),
                (n.baseState = o),
                (n.baseQueue = u),
                (t.lastRenderedState = r));
            }
            if (null !== (e = t.interleaved)) {
              a = e;
              do {
                ((l = a.lane), (ll.lanes |= l), (js |= l), (a = a.next));
              } while (a !== e);
            } else null === a && (t.lanes = 0);
            return [n.memoizedState, t.dispatch];
          }
          function xl(e) {
            var n = gl(),
              t = n.queue;
            if (null === t) throw Error(i(311));
            t.lastRenderedReducer = e;
            var r = t.dispatch,
              a = t.pending,
              l = n.memoizedState;
            if (null !== a) {
              t.pending = null;
              var o = (a = a.next);
              do {
                ((l = e(l, o.action)), (o = o.next));
              } while (o !== a);
              (or(l, n.memoizedState) || (wo = !0),
                (n.memoizedState = l),
                null === n.baseQueue && (n.baseState = l),
                (t.lastRenderedState = l));
            }
            return [l, r];
          }
          function Il() {}
          function kl(e, n) {
            var t = ll,
              r = gl(),
              a = n(),
              l = !or(r.memoizedState, a);
            if (
              (l && ((r.memoizedState = a), (wo = !0)),
              (r = r.queue),
              jl(Nl.bind(null, t, r, e), [e]),
              r.getSnapshot !== n ||
                l ||
                (null !== sl && 1 & sl.memoizedState.tag))
            ) {
              if (
                ((t.flags |= 2048),
                Ll(9, Al.bind(null, t, r, a, n), void 0, null),
                null === Ds)
              )
                throw Error(i(349));
              30 & il || Sl(t, n, a);
            }
            return a;
          }
          function Sl(e, n, t) {
            ((e.flags |= 16384),
              (e = { getSnapshot: n, value: t }),
              null === (n = ll.updateQueue)
                ? ((n = { lastEffect: null, stores: null }),
                  (ll.updateQueue = n),
                  (n.stores = [e]))
                : null === (t = n.stores)
                  ? (n.stores = [e])
                  : t.push(e));
          }
          function Al(e, n, t, r) {
            ((n.value = t), (n.getSnapshot = r), El(n) && Dl(e));
          }
          function Nl(e, n, t) {
            return t(function () {
              El(n) && Dl(e);
            });
          }
          function El(e) {
            var n = e.getSnapshot;
            e = e.value;
            try {
              var t = n();
              return !or(e, t);
            } catch (e) {
              return !0;
            }
          }
          function Dl(e) {
            var n = Pi(e, 1);
            null !== n && nu(n, e, 1, -1);
          }
          function _l(e) {
            var n = vl();
            return (
              "function" == typeof e && (e = e()),
              (n.memoizedState = n.baseState = e),
              (e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: wl,
                lastRenderedState: e,
              }),
              (n.queue = e),
              (e = e.dispatch = $l.bind(null, ll, e)),
              [n.memoizedState, e]
            );
          }
          function Ll(e, n, t, r) {
            return (
              (e = { tag: e, create: n, destroy: t, deps: r, next: null }),
              null === (n = ll.updateQueue)
                ? ((n = { lastEffect: null, stores: null }),
                  (ll.updateQueue = n),
                  (n.lastEffect = e.next = e))
                : null === (t = n.lastEffect)
                  ? (n.lastEffect = e.next = e)
                  : ((r = t.next),
                    (t.next = e),
                    (e.next = r),
                    (n.lastEffect = e)),
              e
            );
          }
          function Ol() {
            return gl().memoizedState;
          }
          function Cl(e, n, t, r) {
            var a = vl();
            ((ll.flags |= e),
              (a.memoizedState = Ll(
                1 | n,
                t,
                void 0,
                void 0 === r ? null : r,
              )));
          }
          function Rl(e, n, t, r) {
            var a = gl();
            r = void 0 === r ? null : r;
            var i = void 0;
            if (null !== ol) {
              var l = ol.memoizedState;
              if (((i = l.destroy), null !== r && ml(r, l.deps)))
                return void (a.memoizedState = Ll(n, t, i, r));
            }
            ((ll.flags |= e), (a.memoizedState = Ll(1 | n, t, i, r)));
          }
          function Pl(e, n) {
            return Cl(8390656, 8, e, n);
          }
          function jl(e, n) {
            return Rl(2048, 8, e, n);
          }
          function Tl(e, n) {
            return Rl(4, 2, e, n);
          }
          function Vl(e, n) {
            return Rl(4, 4, e, n);
          }
          function Fl(e, n) {
            return "function" == typeof n
              ? ((e = e()),
                n(e),
                function () {
                  n(null);
                })
              : null != n
                ? ((e = e()),
                  (n.current = e),
                  function () {
                    n.current = null;
                  })
                : void 0;
          }
          function zl(e, n, t) {
            return (
              (t = null != t ? t.concat([e]) : null),
              Rl(4, 4, Fl.bind(null, n, e), t)
            );
          }
          function Ml() {}
          function Bl(e, n) {
            var t = gl();
            n = void 0 === n ? null : n;
            var r = t.memoizedState;
            return null !== r && null !== n && ml(n, r[1])
              ? r[0]
              : ((t.memoizedState = [e, n]), e);
          }
          function Ul(e, n) {
            var t = gl();
            n = void 0 === n ? null : n;
            var r = t.memoizedState;
            return null !== r && null !== n && ml(n, r[1])
              ? r[0]
              : ((e = e()), (t.memoizedState = [e, n]), e);
          }
          function Hl(e, n, t) {
            return 21 & il
              ? (or(t, n) ||
                  ((t = bn()), (ll.lanes |= t), (js |= t), (e.baseState = !0)),
                n)
              : (e.baseState && ((e.baseState = !1), (wo = !0)),
                (e.memoizedState = t));
          }
          function Gl(e, n) {
            var t = yn;
            ((yn = 0 !== t && 4 > t ? t : 4), e(!0));
            var r = al.transition;
            al.transition = {};
            try {
              (e(!1), n());
            } finally {
              ((yn = t), (al.transition = r));
            }
          }
          function ql() {
            return gl().memoizedState;
          }
          function Wl(e, n, t) {
            var r = eu(e);
            ((t = {
              lane: r,
              action: t,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
              Kl(e)
                ? Xl(n, t)
                : null !== (t = Ri(e, n, t, r)) &&
                  (nu(t, e, r, Ys()), Jl(t, n, r)));
          }
          function $l(e, n, t) {
            var r = eu(e),
              a = {
                lane: r,
                action: t,
                hasEagerState: !1,
                eagerState: null,
                next: null,
              };
            if (Kl(e)) Xl(n, a);
            else {
              var i = e.alternate;
              if (
                0 === e.lanes &&
                (null === i || 0 === i.lanes) &&
                null !== (i = n.lastRenderedReducer)
              )
                try {
                  var l = n.lastRenderedState,
                    o = i(l, t);
                  if (((a.hasEagerState = !0), (a.eagerState = o), or(o, l))) {
                    var s = n.interleaved;
                    return (
                      null === s
                        ? ((a.next = a), Ci(n))
                        : ((a.next = s.next), (s.next = a)),
                      void (n.interleaved = a)
                    );
                  }
                } catch (e) {}
              null !== (t = Ri(e, n, a, r)) &&
                (nu(t, e, r, (a = Ys())), Jl(t, n, r));
            }
          }
          function Kl(e) {
            var n = e.alternate;
            return e === ll || (null !== n && n === ll);
          }
          function Xl(e, n) {
            cl = ul = !0;
            var t = e.pending;
            (null === t ? (n.next = n) : ((n.next = t.next), (t.next = n)),
              (e.pending = n));
          }
          function Jl(e, n, t) {
            if (4194240 & t) {
              var r = n.lanes;
              ((t |= r &= e.pendingLanes), (n.lanes = t), wn(e, t));
            }
          }
          var Ql = {
              readContext: Li,
              useCallback: pl,
              useContext: pl,
              useEffect: pl,
              useImperativeHandle: pl,
              useInsertionEffect: pl,
              useLayoutEffect: pl,
              useMemo: pl,
              useReducer: pl,
              useRef: pl,
              useState: pl,
              useDebugValue: pl,
              useDeferredValue: pl,
              useTransition: pl,
              useMutableSource: pl,
              useSyncExternalStore: pl,
              useId: pl,
              unstable_isNewReconciler: !1,
            },
            Zl = {
              readContext: Li,
              useCallback: function (e, n) {
                return ((vl().memoizedState = [e, void 0 === n ? null : n]), e);
              },
              useContext: Li,
              useEffect: Pl,
              useImperativeHandle: function (e, n, t) {
                return (
                  (t = null != t ? t.concat([e]) : null),
                  Cl(4194308, 4, Fl.bind(null, n, e), t)
                );
              },
              useLayoutEffect: function (e, n) {
                return Cl(4194308, 4, e, n);
              },
              useInsertionEffect: function (e, n) {
                return Cl(4, 2, e, n);
              },
              useMemo: function (e, n) {
                var t = vl();
                return (
                  (n = void 0 === n ? null : n),
                  (e = e()),
                  (t.memoizedState = [e, n]),
                  e
                );
              },
              useReducer: function (e, n, t) {
                var r = vl();
                return (
                  (n = void 0 !== t ? t(n) : n),
                  (r.memoizedState = r.baseState = n),
                  (e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: n,
                  }),
                  (r.queue = e),
                  (e = e.dispatch = Wl.bind(null, ll, e)),
                  [r.memoizedState, e]
                );
              },
              useRef: function (e) {
                return ((e = { current: e }), (vl().memoizedState = e));
              },
              useState: _l,
              useDebugValue: Ml,
              useDeferredValue: function (e) {
                return (vl().memoizedState = e);
              },
              useTransition: function () {
                var e = _l(!1),
                  n = e[0];
                return (
                  (e = Gl.bind(null, e[1])),
                  (vl().memoizedState = e),
                  [n, e]
                );
              },
              useMutableSource: function () {},
              useSyncExternalStore: function (e, n, t) {
                var r = ll,
                  a = vl();
                if (ai) {
                  if (void 0 === t) throw Error(i(407));
                  t = t();
                } else {
                  if (((t = n()), null === Ds)) throw Error(i(349));
                  30 & il || Sl(r, n, t);
                }
                a.memoizedState = t;
                var l = { value: t, getSnapshot: n };
                return (
                  (a.queue = l),
                  Pl(Nl.bind(null, r, l, e), [e]),
                  (r.flags |= 2048),
                  Ll(9, Al.bind(null, r, l, t, n), void 0, null),
                  t
                );
              },
              useId: function () {
                var e = vl(),
                  n = Ds.identifierPrefix;
                if (ai) {
                  var t = Qa;
                  ((n =
                    ":" +
                    n +
                    "R" +
                    (t = (Ja & ~(1 << (32 - on(Ja) - 1))).toString(32) + t)),
                    0 < (t = dl++) && (n += "H" + t.toString(32)),
                    (n += ":"));
                } else n = ":" + n + "r" + (t = fl++).toString(32) + ":";
                return (e.memoizedState = n);
              },
              unstable_isNewReconciler: !1,
            },
            Yl = {
              readContext: Li,
              useCallback: Bl,
              useContext: Li,
              useEffect: jl,
              useImperativeHandle: zl,
              useInsertionEffect: Tl,
              useLayoutEffect: Vl,
              useMemo: Ul,
              useReducer: yl,
              useRef: Ol,
              useState: function () {
                return yl(wl);
              },
              useDebugValue: Ml,
              useDeferredValue: function (e) {
                return Hl(gl(), ol.memoizedState, e);
              },
              useTransition: function () {
                return [yl(wl)[0], gl().memoizedState];
              },
              useMutableSource: Il,
              useSyncExternalStore: kl,
              useId: ql,
              unstable_isNewReconciler: !1,
            },
            eo = {
              readContext: Li,
              useCallback: Bl,
              useContext: Li,
              useEffect: jl,
              useImperativeHandle: zl,
              useInsertionEffect: Tl,
              useLayoutEffect: Vl,
              useMemo: Ul,
              useReducer: xl,
              useRef: Ol,
              useState: function () {
                return xl(wl);
              },
              useDebugValue: Ml,
              useDeferredValue: function (e) {
                var n = gl();
                return null === ol
                  ? (n.memoizedState = e)
                  : Hl(n, ol.memoizedState, e);
              },
              useTransition: function () {
                return [xl(wl)[0], gl().memoizedState];
              },
              useMutableSource: Il,
              useSyncExternalStore: kl,
              useId: ql,
              unstable_isNewReconciler: !1,
            };
          function no(e, n) {
            if (e && e.defaultProps) {
              for (var t in ((n = V({}, n)), (e = e.defaultProps)))
                void 0 === n[t] && (n[t] = e[t]);
              return n;
            }
            return n;
          }
          function to(e, n, t, r) {
            ((t = null == (t = t(r, (n = e.memoizedState))) ? n : V({}, n, t)),
              (e.memoizedState = t),
              0 === e.lanes && (e.updateQueue.baseState = t));
          }
          var ro = {
            isMounted: function (e) {
              return !!(e = e._reactInternals) && Ue(e) === e;
            },
            enqueueSetState: function (e, n, t) {
              e = e._reactInternals;
              var r = Ys(),
                a = eu(e),
                i = Fi(r, a);
              ((i.payload = n),
                null != t && (i.callback = t),
                null !== (n = zi(e, i, a)) && (nu(n, e, a, r), Mi(n, e, a)));
            },
            enqueueReplaceState: function (e, n, t) {
              e = e._reactInternals;
              var r = Ys(),
                a = eu(e),
                i = Fi(r, a);
              ((i.tag = 1),
                (i.payload = n),
                null != t && (i.callback = t),
                null !== (n = zi(e, i, a)) && (nu(n, e, a, r), Mi(n, e, a)));
            },
            enqueueForceUpdate: function (e, n) {
              e = e._reactInternals;
              var t = Ys(),
                r = eu(e),
                a = Fi(t, r);
              ((a.tag = 2),
                null != n && (a.callback = n),
                null !== (n = zi(e, a, r)) && (nu(n, e, r, t), Mi(n, e, r)));
            },
          };
          function ao(e, n, t, r, a, i, l) {
            return "function" == typeof (e = e.stateNode).shouldComponentUpdate
              ? e.shouldComponentUpdate(r, i, l)
              : !(
                  n.prototype &&
                  n.prototype.isPureReactComponent &&
                  sr(t, r) &&
                  sr(a, i)
                );
          }
          function io(e, n, t) {
            var r = !1,
              a = Ea,
              i = n.contextType;
            return (
              "object" == typeof i && null !== i
                ? (i = Li(i))
                : ((a = Ca(n) ? La : Da.current),
                  (i = (r = null != (r = n.contextTypes)) ? Oa(e, a) : Ea)),
              (n = new n(t, i)),
              (e.memoizedState =
                null !== n.state && void 0 !== n.state ? n.state : null),
              (n.updater = ro),
              (e.stateNode = n),
              (n._reactInternals = e),
              r &&
                (((e =
                  e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a),
                (e.__reactInternalMemoizedMaskedChildContext = i)),
              n
            );
          }
          function lo(e, n, t, r) {
            ((e = n.state),
              "function" == typeof n.componentWillReceiveProps &&
                n.componentWillReceiveProps(t, r),
              "function" == typeof n.UNSAFE_componentWillReceiveProps &&
                n.UNSAFE_componentWillReceiveProps(t, r),
              n.state !== e && ro.enqueueReplaceState(n, n.state, null));
          }
          function oo(e, n, t, r) {
            var a = e.stateNode;
            ((a.props = t), (a.state = e.memoizedState), (a.refs = {}), Ti(e));
            var i = n.contextType;
            ("object" == typeof i && null !== i
              ? (a.context = Li(i))
              : ((i = Ca(n) ? La : Da.current), (a.context = Oa(e, i))),
              (a.state = e.memoizedState),
              "function" == typeof (i = n.getDerivedStateFromProps) &&
                (to(e, n, i, t), (a.state = e.memoizedState)),
              "function" == typeof n.getDerivedStateFromProps ||
                "function" == typeof a.getSnapshotBeforeUpdate ||
                ("function" != typeof a.UNSAFE_componentWillMount &&
                  "function" != typeof a.componentWillMount) ||
                ((n = a.state),
                "function" == typeof a.componentWillMount &&
                  a.componentWillMount(),
                "function" == typeof a.UNSAFE_componentWillMount &&
                  a.UNSAFE_componentWillMount(),
                n !== a.state && ro.enqueueReplaceState(a, a.state, null),
                Ui(e, t, a, r),
                (a.state = e.memoizedState)),
              "function" == typeof a.componentDidMount && (e.flags |= 4194308));
          }
          function so(e, n) {
            try {
              var t = "",
                r = n;
              do {
                ((t += B(r)), (r = r.return));
              } while (r);
              var a = t;
            } catch (e) {
              a = "\nError generating stack: " + e.message + "\n" + e.stack;
            }
            return { value: e, source: n, stack: a, digest: null };
          }
          function uo(e, n, t) {
            return {
              value: e,
              source: null,
              stack: null != t ? t : null,
              digest: null != n ? n : null,
            };
          }
          function co(e, n) {
            try {
              console.error(n.value);
            } catch (e) {
              setTimeout(function () {
                throw e;
              });
            }
          }
          var fo = "function" == typeof WeakMap ? WeakMap : Map;
          function po(e, n, t) {
            (((t = Fi(-1, t)).tag = 3), (t.payload = { element: null }));
            var r = n.value;
            return (
              (t.callback = function () {
                (Hs || ((Hs = !0), (Gs = r)), co(0, n));
              }),
              t
            );
          }
          function mo(e, n, t) {
            (t = Fi(-1, t)).tag = 3;
            var r = e.type.getDerivedStateFromError;
            if ("function" == typeof r) {
              var a = n.value;
              ((t.payload = function () {
                return r(a);
              }),
                (t.callback = function () {
                  co(0, n);
                }));
            }
            var i = e.stateNode;
            return (
              null !== i &&
                "function" == typeof i.componentDidCatch &&
                (t.callback = function () {
                  (co(0, n),
                    "function" != typeof r &&
                      (null === qs ? (qs = new Set([this])) : qs.add(this)));
                  var e = n.stack;
                  this.componentDidCatch(n.value, {
                    componentStack: null !== e ? e : "",
                  });
                }),
              t
            );
          }
          function ho(e, n, t) {
            var r = e.pingCache;
            if (null === r) {
              r = e.pingCache = new fo();
              var a = new Set();
              r.set(n, a);
            } else void 0 === (a = r.get(n)) && ((a = new Set()), r.set(n, a));
            a.has(t) || (a.add(t), (e = Su.bind(null, e, n, t)), n.then(e, e));
          }
          function bo(e) {
            do {
              var n;
              if (
                ((n = 13 === e.tag) &&
                  (n = null === (n = e.memoizedState) || null !== n.dehydrated),
                n)
              )
                return e;
              e = e.return;
            } while (null !== e);
            return null;
          }
          function vo(e, n, t, r, a) {
            return 1 & e.mode
              ? ((e.flags |= 65536), (e.lanes = a), e)
              : (e === n
                  ? (e.flags |= 65536)
                  : ((e.flags |= 128),
                    (t.flags |= 131072),
                    (t.flags &= -52805),
                    1 === t.tag &&
                      (null === t.alternate
                        ? (t.tag = 17)
                        : (((n = Fi(-1, 1)).tag = 2), zi(t, n, 1))),
                    (t.lanes |= 1)),
                e);
          }
          var go = y.ReactCurrentOwner,
            wo = !1;
          function yo(e, n, t, r) {
            n.child = null === e ? xi(n, null, t, r) : yi(n, e.child, t, r);
          }
          function xo(e, n, t, r, a) {
            t = t.render;
            var i = n.ref;
            return (
              _i(n, a),
              (r = hl(e, n, t, r, i, a)),
              (t = bl()),
              null === e || wo
                ? (ai && t && ei(n), (n.flags |= 1), yo(e, n, r, a), n.child)
                : ((n.updateQueue = e.updateQueue),
                  (n.flags &= -2053),
                  (e.lanes &= ~a),
                  Ho(e, n, a))
            );
          }
          function Io(e, n, t, r, a) {
            if (null === e) {
              var i = t.type;
              return "function" != typeof i ||
                Ou(i) ||
                void 0 !== i.defaultProps ||
                null !== t.compare ||
                void 0 !== t.defaultProps
                ? (((e = Ru(t.type, null, r, n, n.mode, a)).ref = n.ref),
                  (e.return = n),
                  (n.child = e))
                : ((n.tag = 15), (n.type = i), ko(e, n, i, r, a));
            }
            if (((i = e.child), 0 === (e.lanes & a))) {
              var l = i.memoizedProps;
              if (
                (t = null !== (t = t.compare) ? t : sr)(l, r) &&
                e.ref === n.ref
              )
                return Ho(e, n, a);
            }
            return (
              (n.flags |= 1),
              ((e = Cu(i, r)).ref = n.ref),
              (e.return = n),
              (n.child = e)
            );
          }
          function ko(e, n, t, r, a) {
            if (null !== e) {
              var i = e.memoizedProps;
              if (sr(i, r) && e.ref === n.ref) {
                if (((wo = !1), (n.pendingProps = r = i), 0 === (e.lanes & a)))
                  return ((n.lanes = e.lanes), Ho(e, n, a));
                131072 & e.flags && (wo = !0);
              }
            }
            return No(e, n, t, r, a);
          }
          function So(e, n, t) {
            var r = n.pendingProps,
              a = r.children,
              i = null !== e ? e.memoizedState : null;
            if ("hidden" === r.mode)
              if (1 & n.mode) {
                if (!(1073741824 & t))
                  return (
                    (e = null !== i ? i.baseLanes | t : t),
                    (n.lanes = n.childLanes = 1073741824),
                    (n.memoizedState = {
                      baseLanes: e,
                      cachePool: null,
                      transitions: null,
                    }),
                    (n.updateQueue = null),
                    Na(Cs, Os),
                    (Os |= e),
                    null
                  );
                ((n.memoizedState = {
                  baseLanes: 0,
                  cachePool: null,
                  transitions: null,
                }),
                  (r = null !== i ? i.baseLanes : t),
                  Na(Cs, Os),
                  (Os |= r));
              } else
                ((n.memoizedState = {
                  baseLanes: 0,
                  cachePool: null,
                  transitions: null,
                }),
                  Na(Cs, Os),
                  (Os |= t));
            else
              (null !== i
                ? ((r = i.baseLanes | t), (n.memoizedState = null))
                : (r = t),
                Na(Cs, Os),
                (Os |= r));
            return (yo(e, n, a, t), n.child);
          }
          function Ao(e, n) {
            var t = n.ref;
            ((null === e && null !== t) || (null !== e && e.ref !== t)) &&
              ((n.flags |= 512), (n.flags |= 2097152));
          }
          function No(e, n, t, r, a) {
            var i = Ca(t) ? La : Da.current;
            return (
              (i = Oa(n, i)),
              _i(n, a),
              (t = hl(e, n, t, r, i, a)),
              (r = bl()),
              null === e || wo
                ? (ai && r && ei(n), (n.flags |= 1), yo(e, n, t, a), n.child)
                : ((n.updateQueue = e.updateQueue),
                  (n.flags &= -2053),
                  (e.lanes &= ~a),
                  Ho(e, n, a))
            );
          }
          function Eo(e, n, t, r, a) {
            if (Ca(t)) {
              var i = !0;
              Ta(n);
            } else i = !1;
            if ((_i(n, a), null === n.stateNode))
              (Uo(e, n), io(n, t, r), oo(n, t, r, a), (r = !0));
            else if (null === e) {
              var l = n.stateNode,
                o = n.memoizedProps;
              l.props = o;
              var s = l.context,
                u = t.contextType;
              u =
                "object" == typeof u && null !== u
                  ? Li(u)
                  : Oa(n, (u = Ca(t) ? La : Da.current));
              var c = t.getDerivedStateFromProps,
                d =
                  "function" == typeof c ||
                  "function" == typeof l.getSnapshotBeforeUpdate;
              (d ||
                ("function" != typeof l.UNSAFE_componentWillReceiveProps &&
                  "function" != typeof l.componentWillReceiveProps) ||
                ((o !== r || s !== u) && lo(n, l, r, u)),
                (ji = !1));
              var f = n.memoizedState;
              ((l.state = f),
                Ui(n, r, l, a),
                (s = n.memoizedState),
                o !== r || f !== s || _a.current || ji
                  ? ("function" == typeof c &&
                      (to(n, t, c, r), (s = n.memoizedState)),
                    (o = ji || ao(n, t, o, r, f, s, u))
                      ? (d ||
                          ("function" != typeof l.UNSAFE_componentWillMount &&
                            "function" != typeof l.componentWillMount) ||
                          ("function" == typeof l.componentWillMount &&
                            l.componentWillMount(),
                          "function" == typeof l.UNSAFE_componentWillMount &&
                            l.UNSAFE_componentWillMount()),
                        "function" == typeof l.componentDidMount &&
                          (n.flags |= 4194308))
                      : ("function" == typeof l.componentDidMount &&
                          (n.flags |= 4194308),
                        (n.memoizedProps = r),
                        (n.memoizedState = s)),
                    (l.props = r),
                    (l.state = s),
                    (l.context = u),
                    (r = o))
                  : ("function" == typeof l.componentDidMount &&
                      (n.flags |= 4194308),
                    (r = !1)));
            } else {
              ((l = n.stateNode),
                Vi(e, n),
                (o = n.memoizedProps),
                (u = n.type === n.elementType ? o : no(n.type, o)),
                (l.props = u),
                (d = n.pendingProps),
                (f = l.context),
                (s =
                  "object" == typeof (s = t.contextType) && null !== s
                    ? Li(s)
                    : Oa(n, (s = Ca(t) ? La : Da.current))));
              var p = t.getDerivedStateFromProps;
              ((c =
                "function" == typeof p ||
                "function" == typeof l.getSnapshotBeforeUpdate) ||
                ("function" != typeof l.UNSAFE_componentWillReceiveProps &&
                  "function" != typeof l.componentWillReceiveProps) ||
                ((o !== d || f !== s) && lo(n, l, r, s)),
                (ji = !1),
                (f = n.memoizedState),
                (l.state = f),
                Ui(n, r, l, a));
              var m = n.memoizedState;
              o !== d || f !== m || _a.current || ji
                ? ("function" == typeof p &&
                    (to(n, t, p, r), (m = n.memoizedState)),
                  (u = ji || ao(n, t, u, r, f, m, s) || !1)
                    ? (c ||
                        ("function" != typeof l.UNSAFE_componentWillUpdate &&
                          "function" != typeof l.componentWillUpdate) ||
                        ("function" == typeof l.componentWillUpdate &&
                          l.componentWillUpdate(r, m, s),
                        "function" == typeof l.UNSAFE_componentWillUpdate &&
                          l.UNSAFE_componentWillUpdate(r, m, s)),
                      "function" == typeof l.componentDidUpdate &&
                        (n.flags |= 4),
                      "function" == typeof l.getSnapshotBeforeUpdate &&
                        (n.flags |= 1024))
                    : ("function" != typeof l.componentDidUpdate ||
                        (o === e.memoizedProps && f === e.memoizedState) ||
                        (n.flags |= 4),
                      "function" != typeof l.getSnapshotBeforeUpdate ||
                        (o === e.memoizedProps && f === e.memoizedState) ||
                        (n.flags |= 1024),
                      (n.memoizedProps = r),
                      (n.memoizedState = m)),
                  (l.props = r),
                  (l.state = m),
                  (l.context = s),
                  (r = u))
                : ("function" != typeof l.componentDidUpdate ||
                    (o === e.memoizedProps && f === e.memoizedState) ||
                    (n.flags |= 4),
                  "function" != typeof l.getSnapshotBeforeUpdate ||
                    (o === e.memoizedProps && f === e.memoizedState) ||
                    (n.flags |= 1024),
                  (r = !1));
            }
            return Do(e, n, t, r, i, a);
          }
          function Do(e, n, t, r, a, i) {
            Ao(e, n);
            var l = !!(128 & n.flags);
            if (!r && !l) return (a && Va(n, t, !1), Ho(e, n, i));
            ((r = n.stateNode), (go.current = n));
            var o =
              l && "function" != typeof t.getDerivedStateFromError
                ? null
                : r.render();
            return (
              (n.flags |= 1),
              null !== e && l
                ? ((n.child = yi(n, e.child, null, i)),
                  (n.child = yi(n, null, o, i)))
                : yo(e, n, o, i),
              (n.memoizedState = r.state),
              a && Va(n, t, !0),
              n.child
            );
          }
          function _o(e) {
            var n = e.stateNode;
            (n.pendingContext
              ? Pa(0, n.pendingContext, n.pendingContext !== n.context)
              : n.context && Pa(0, n.context, !1),
              Xi(e, n.containerInfo));
          }
          function Lo(e, n, t, r, a) {
            return (pi(), mi(a), (n.flags |= 256), yo(e, n, t, r), n.child);
          }
          var Oo,
            Co,
            Ro,
            Po = { dehydrated: null, treeContext: null, retryLane: 0 };
          function jo(e) {
            return { baseLanes: e, cachePool: null, transitions: null };
          }
          function To(e, n, t) {
            var r,
              a = n.pendingProps,
              l = Yi.current,
              o = !1,
              s = !!(128 & n.flags);
            if (
              ((r = s) ||
                (r = (null === e || null !== e.memoizedState) && !!(2 & l)),
              r
                ? ((o = !0), (n.flags &= -129))
                : (null !== e && null === e.memoizedState) || (l |= 1),
              Na(Yi, 1 & l),
              null === e)
            )
              return (
                ui(n),
                null !== (e = n.memoizedState) && null !== (e = e.dehydrated)
                  ? (1 & n.mode
                      ? "$!" === e.data
                        ? (n.lanes = 8)
                        : (n.lanes = 1073741824)
                      : (n.lanes = 1),
                    null)
                  : ((s = a.children),
                    (e = a.fallback),
                    o
                      ? ((a = n.mode),
                        (o = n.child),
                        (s = { mode: "hidden", children: s }),
                        1 & a || null === o
                          ? (o = ju(s, a, 0, null))
                          : ((o.childLanes = 0), (o.pendingProps = s)),
                        (e = Pu(e, a, t, null)),
                        (o.return = n),
                        (e.return = n),
                        (o.sibling = e),
                        (n.child = o),
                        (n.child.memoizedState = jo(t)),
                        (n.memoizedState = Po),
                        e)
                      : Vo(n, s))
              );
            if (null !== (l = e.memoizedState) && null !== (r = l.dehydrated))
              return (function (e, n, t, r, a, l, o) {
                if (t)
                  return 256 & n.flags
                    ? ((n.flags &= -257), Fo(e, n, o, (r = uo(Error(i(422))))))
                    : null !== n.memoizedState
                      ? ((n.child = e.child), (n.flags |= 128), null)
                      : ((l = r.fallback),
                        (a = n.mode),
                        (r = ju(
                          { mode: "visible", children: r.children },
                          a,
                          0,
                          null,
                        )),
                        ((l = Pu(l, a, o, null)).flags |= 2),
                        (r.return = n),
                        (l.return = n),
                        (r.sibling = l),
                        (n.child = r),
                        1 & n.mode && yi(n, e.child, null, o),
                        (n.child.memoizedState = jo(o)),
                        (n.memoizedState = Po),
                        l);
                if (!(1 & n.mode)) return Fo(e, n, o, null);
                if ("$!" === a.data) {
                  if ((r = a.nextSibling && a.nextSibling.dataset))
                    var s = r.dgst;
                  return (
                    (r = s),
                    Fo(e, n, o, (r = uo((l = Error(i(419))), r, void 0)))
                  );
                }
                if (((s = 0 !== (o & e.childLanes)), wo || s)) {
                  if (null !== (r = Ds)) {
                    switch (o & -o) {
                      case 4:
                        a = 2;
                        break;
                      case 16:
                        a = 8;
                        break;
                      case 64:
                      case 128:
                      case 256:
                      case 512:
                      case 1024:
                      case 2048:
                      case 4096:
                      case 8192:
                      case 16384:
                      case 32768:
                      case 65536:
                      case 131072:
                      case 262144:
                      case 524288:
                      case 1048576:
                      case 2097152:
                      case 4194304:
                      case 8388608:
                      case 16777216:
                      case 33554432:
                      case 67108864:
                        a = 32;
                        break;
                      case 536870912:
                        a = 268435456;
                        break;
                      default:
                        a = 0;
                    }
                    0 !== (a = 0 !== (a & (r.suspendedLanes | o)) ? 0 : a) &&
                      a !== l.retryLane &&
                      ((l.retryLane = a), Pi(e, a), nu(r, e, a, -1));
                  }
                  return (mu(), Fo(e, n, o, (r = uo(Error(i(421))))));
                }
                return "$?" === a.data
                  ? ((n.flags |= 128),
                    (n.child = e.child),
                    (n = Nu.bind(null, e)),
                    (a._reactRetry = n),
                    null)
                  : ((e = l.treeContext),
                    (ri = ua(a.nextSibling)),
                    (ti = n),
                    (ai = !0),
                    (ii = null),
                    null !== e &&
                      (($a[Ka++] = Ja),
                      ($a[Ka++] = Qa),
                      ($a[Ka++] = Xa),
                      (Ja = e.id),
                      (Qa = e.overflow),
                      (Xa = n)),
                    ((n = Vo(n, r.children)).flags |= 4096),
                    n);
              })(e, n, s, a, r, l, t);
            if (o) {
              ((o = a.fallback), (s = n.mode), (r = (l = e.child).sibling));
              var u = { mode: "hidden", children: a.children };
              return (
                1 & s || n.child === l
                  ? ((a = Cu(l, u)).subtreeFlags = 14680064 & l.subtreeFlags)
                  : (((a = n.child).childLanes = 0),
                    (a.pendingProps = u),
                    (n.deletions = null)),
                null !== r
                  ? (o = Cu(r, o))
                  : ((o = Pu(o, s, t, null)).flags |= 2),
                (o.return = n),
                (a.return = n),
                (a.sibling = o),
                (n.child = a),
                (a = o),
                (o = n.child),
                (s =
                  null === (s = e.child.memoizedState)
                    ? jo(t)
                    : {
                        baseLanes: s.baseLanes | t,
                        cachePool: null,
                        transitions: s.transitions,
                      }),
                (o.memoizedState = s),
                (o.childLanes = e.childLanes & ~t),
                (n.memoizedState = Po),
                a
              );
            }
            return (
              (e = (o = e.child).sibling),
              (a = Cu(o, { mode: "visible", children: a.children })),
              !(1 & n.mode) && (a.lanes = t),
              (a.return = n),
              (a.sibling = null),
              null !== e &&
                (null === (t = n.deletions)
                  ? ((n.deletions = [e]), (n.flags |= 16))
                  : t.push(e)),
              (n.child = a),
              (n.memoizedState = null),
              a
            );
          }
          function Vo(e, n) {
            return (
              ((n = ju(
                { mode: "visible", children: n },
                e.mode,
                0,
                null,
              )).return = e),
              (e.child = n)
            );
          }
          function Fo(e, n, t, r) {
            return (
              null !== r && mi(r),
              yi(n, e.child, null, t),
              ((e = Vo(n, n.pendingProps.children)).flags |= 2),
              (n.memoizedState = null),
              e
            );
          }
          function zo(e, n, t) {
            e.lanes |= n;
            var r = e.alternate;
            (null !== r && (r.lanes |= n), Di(e.return, n, t));
          }
          function Mo(e, n, t, r, a) {
            var i = e.memoizedState;
            null === i
              ? (e.memoizedState = {
                  isBackwards: n,
                  rendering: null,
                  renderingStartTime: 0,
                  last: r,
                  tail: t,
                  tailMode: a,
                })
              : ((i.isBackwards = n),
                (i.rendering = null),
                (i.renderingStartTime = 0),
                (i.last = r),
                (i.tail = t),
                (i.tailMode = a));
          }
          function Bo(e, n, t) {
            var r = n.pendingProps,
              a = r.revealOrder,
              i = r.tail;
            if ((yo(e, n, r.children, t), 2 & (r = Yi.current)))
              ((r = (1 & r) | 2), (n.flags |= 128));
            else {
              if (null !== e && 128 & e.flags)
                e: for (e = n.child; null !== e; ) {
                  if (13 === e.tag) null !== e.memoizedState && zo(e, t, n);
                  else if (19 === e.tag) zo(e, t, n);
                  else if (null !== e.child) {
                    ((e.child.return = e), (e = e.child));
                    continue;
                  }
                  if (e === n) break e;
                  for (; null === e.sibling; ) {
                    if (null === e.return || e.return === n) break e;
                    e = e.return;
                  }
                  ((e.sibling.return = e.return), (e = e.sibling));
                }
              r &= 1;
            }
            if ((Na(Yi, r), 1 & n.mode))
              switch (a) {
                case "forwards":
                  for (t = n.child, a = null; null !== t; )
                    (null !== (e = t.alternate) && null === el(e) && (a = t),
                      (t = t.sibling));
                  (null === (t = a)
                    ? ((a = n.child), (n.child = null))
                    : ((a = t.sibling), (t.sibling = null)),
                    Mo(n, !1, a, t, i));
                  break;
                case "backwards":
                  for (t = null, a = n.child, n.child = null; null !== a; ) {
                    if (null !== (e = a.alternate) && null === el(e)) {
                      n.child = a;
                      break;
                    }
                    ((e = a.sibling), (a.sibling = t), (t = a), (a = e));
                  }
                  Mo(n, !0, t, null, i);
                  break;
                case "together":
                  Mo(n, !1, null, null, void 0);
                  break;
                default:
                  n.memoizedState = null;
              }
            else n.memoizedState = null;
            return n.child;
          }
          function Uo(e, n) {
            !(1 & n.mode) &&
              null !== e &&
              ((e.alternate = null), (n.alternate = null), (n.flags |= 2));
          }
          function Ho(e, n, t) {
            if (
              (null !== e && (n.dependencies = e.dependencies),
              (js |= n.lanes),
              0 === (t & n.childLanes))
            )
              return null;
            if (null !== e && n.child !== e.child) throw Error(i(153));
            if (null !== n.child) {
              for (
                t = Cu((e = n.child), e.pendingProps),
                  n.child = t,
                  t.return = n;
                null !== e.sibling;

              )
                ((e = e.sibling),
                  ((t = t.sibling = Cu(e, e.pendingProps)).return = n));
              t.sibling = null;
            }
            return n.child;
          }
          function Go(e, n) {
            if (!ai)
              switch (e.tailMode) {
                case "hidden":
                  n = e.tail;
                  for (var t = null; null !== n; )
                    (null !== n.alternate && (t = n), (n = n.sibling));
                  null === t ? (e.tail = null) : (t.sibling = null);
                  break;
                case "collapsed":
                  t = e.tail;
                  for (var r = null; null !== t; )
                    (null !== t.alternate && (r = t), (t = t.sibling));
                  null === r
                    ? n || null === e.tail
                      ? (e.tail = null)
                      : (e.tail.sibling = null)
                    : (r.sibling = null);
              }
          }
          function qo(e) {
            var n = null !== e.alternate && e.alternate.child === e.child,
              t = 0,
              r = 0;
            if (n)
              for (var a = e.child; null !== a; )
                ((t |= a.lanes | a.childLanes),
                  (r |= 14680064 & a.subtreeFlags),
                  (r |= 14680064 & a.flags),
                  (a.return = e),
                  (a = a.sibling));
            else
              for (a = e.child; null !== a; )
                ((t |= a.lanes | a.childLanes),
                  (r |= a.subtreeFlags),
                  (r |= a.flags),
                  (a.return = e),
                  (a = a.sibling));
            return ((e.subtreeFlags |= r), (e.childLanes = t), n);
          }
          function Wo(e, n, t) {
            var r = n.pendingProps;
            switch ((ni(n), n.tag)) {
              case 2:
              case 16:
              case 15:
              case 0:
              case 11:
              case 7:
              case 8:
              case 12:
              case 9:
              case 14:
                return (qo(n), null);
              case 1:
              case 17:
                return (Ca(n.type) && Ra(), qo(n), null);
              case 3:
                return (
                  (r = n.stateNode),
                  Ji(),
                  Aa(_a),
                  Aa(Da),
                  tl(),
                  r.pendingContext &&
                    ((r.context = r.pendingContext), (r.pendingContext = null)),
                  (null !== e && null !== e.child) ||
                    (di(n)
                      ? (n.flags |= 4)
                      : null === e ||
                        (e.memoizedState.isDehydrated && !(256 & n.flags)) ||
                        ((n.flags |= 1024),
                        null !== ii && (iu(ii), (ii = null)))),
                  qo(n),
                  null
                );
              case 5:
                Zi(n);
                var a = Ki($i.current);
                if (((t = n.type), null !== e && null != n.stateNode))
                  (Co(e, n, t, r),
                    e.ref !== n.ref &&
                      ((n.flags |= 512), (n.flags |= 2097152)));
                else {
                  if (!r) {
                    if (null === n.stateNode) throw Error(i(166));
                    return (qo(n), null);
                  }
                  if (((e = Ki(qi.current)), di(n))) {
                    ((r = n.stateNode), (t = n.type));
                    var l = n.memoizedProps;
                    switch (
                      ((r[fa] = n), (r[pa] = l), (e = !!(1 & n.mode)), t)
                    ) {
                      case "dialog":
                        (zr("cancel", r), zr("close", r));
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        zr("load", r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < jr.length; a++) zr(jr[a], r);
                        break;
                      case "source":
                        zr("error", r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        (zr("error", r), zr("load", r));
                        break;
                      case "details":
                        zr("toggle", r);
                        break;
                      case "input":
                        (J(r, l), zr("invalid", r));
                        break;
                      case "select":
                        ((r._wrapperState = { wasMultiple: !!l.multiple }),
                          zr("invalid", r));
                        break;
                      case "textarea":
                        (ae(r, l), zr("invalid", r));
                    }
                    for (var s in (ge(t, l), (a = null), l))
                      if (l.hasOwnProperty(s)) {
                        var u = l[s];
                        "children" === s
                          ? "string" == typeof u
                            ? r.textContent !== u &&
                              (!0 !== l.suppressHydrationWarning &&
                                Zr(r.textContent, u, e),
                              (a = ["children", u]))
                            : "number" == typeof u &&
                              r.textContent !== "" + u &&
                              (!0 !== l.suppressHydrationWarning &&
                                Zr(r.textContent, u, e),
                              (a = ["children", "" + u]))
                          : o.hasOwnProperty(s) &&
                            null != u &&
                            "onScroll" === s &&
                            zr("scroll", r);
                      }
                    switch (t) {
                      case "input":
                        (W(r), Y(r, l, !0));
                        break;
                      case "textarea":
                        (W(r), le(r));
                        break;
                      case "select":
                      case "option":
                        break;
                      default:
                        "function" == typeof l.onClick && (r.onclick = Yr);
                    }
                    ((r = a),
                      (n.updateQueue = r),
                      null !== r && (n.flags |= 4));
                  } else {
                    ((s = 9 === a.nodeType ? a : a.ownerDocument),
                      "http://www.w3.org/1999/xhtml" === e && (e = oe(t)),
                      "http://www.w3.org/1999/xhtml" === e
                        ? "script" === t
                          ? (((e = s.createElement("div")).innerHTML =
                              "<script><\/script>"),
                            (e = e.removeChild(e.firstChild)))
                          : "string" == typeof r.is
                            ? (e = s.createElement(t, { is: r.is }))
                            : ((e = s.createElement(t)),
                              "select" === t &&
                                ((s = e),
                                r.multiple
                                  ? (s.multiple = !0)
                                  : r.size && (s.size = r.size)))
                        : (e = s.createElementNS(e, t)),
                      (e[fa] = n),
                      (e[pa] = r),
                      Oo(e, n),
                      (n.stateNode = e));
                    e: {
                      switch (((s = we(t, r)), t)) {
                        case "dialog":
                          (zr("cancel", e), zr("close", e), (a = r));
                          break;
                        case "iframe":
                        case "object":
                        case "embed":
                          (zr("load", e), (a = r));
                          break;
                        case "video":
                        case "audio":
                          for (a = 0; a < jr.length; a++) zr(jr[a], e);
                          a = r;
                          break;
                        case "source":
                          (zr("error", e), (a = r));
                          break;
                        case "img":
                        case "image":
                        case "link":
                          (zr("error", e), zr("load", e), (a = r));
                          break;
                        case "details":
                          (zr("toggle", e), (a = r));
                          break;
                        case "input":
                          (J(e, r), (a = X(e, r)), zr("invalid", e));
                          break;
                        case "option":
                        default:
                          a = r;
                          break;
                        case "select":
                          ((e._wrapperState = { wasMultiple: !!r.multiple }),
                            (a = V({}, r, { value: void 0 })),
                            zr("invalid", e));
                          break;
                        case "textarea":
                          (ae(e, r), (a = re(e, r)), zr("invalid", e));
                      }
                      for (l in (ge(t, a), (u = a)))
                        if (u.hasOwnProperty(l)) {
                          var c = u[l];
                          "style" === l
                            ? be(e, c)
                            : "dangerouslySetInnerHTML" === l
                              ? null != (c = c ? c.__html : void 0) && de(e, c)
                              : "children" === l
                                ? "string" == typeof c
                                  ? ("textarea" !== t || "" !== c) && fe(e, c)
                                  : "number" == typeof c && fe(e, "" + c)
                                : "suppressContentEditableWarning" !== l &&
                                  "suppressHydrationWarning" !== l &&
                                  "autoFocus" !== l &&
                                  (o.hasOwnProperty(l)
                                    ? null != c &&
                                      "onScroll" === l &&
                                      zr("scroll", e)
                                    : null != c && w(e, l, c, s));
                        }
                      switch (t) {
                        case "input":
                          (W(e), Y(e, r, !1));
                          break;
                        case "textarea":
                          (W(e), le(e));
                          break;
                        case "option":
                          null != r.value &&
                            e.setAttribute("value", "" + G(r.value));
                          break;
                        case "select":
                          ((e.multiple = !!r.multiple),
                            null != (l = r.value)
                              ? te(e, !!r.multiple, l, !1)
                              : null != r.defaultValue &&
                                te(e, !!r.multiple, r.defaultValue, !0));
                          break;
                        default:
                          "function" == typeof a.onClick && (e.onclick = Yr);
                      }
                      switch (t) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                          r = !!r.autoFocus;
                          break e;
                        case "img":
                          r = !0;
                          break e;
                        default:
                          r = !1;
                      }
                    }
                    r && (n.flags |= 4);
                  }
                  null !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
                }
                return (qo(n), null);
              case 6:
                if (e && null != n.stateNode) Ro(0, n, e.memoizedProps, r);
                else {
                  if ("string" != typeof r && null === n.stateNode)
                    throw Error(i(166));
                  if (((t = Ki($i.current)), Ki(qi.current), di(n))) {
                    if (
                      ((r = n.stateNode),
                      (t = n.memoizedProps),
                      (r[fa] = n),
                      (l = r.nodeValue !== t) && null !== (e = ti))
                    )
                      switch (e.tag) {
                        case 3:
                          Zr(r.nodeValue, t, !!(1 & e.mode));
                          break;
                        case 5:
                          !0 !== e.memoizedProps.suppressHydrationWarning &&
                            Zr(r.nodeValue, t, !!(1 & e.mode));
                      }
                    l && (n.flags |= 4);
                  } else
                    (((r = (
                      9 === t.nodeType ? t : t.ownerDocument
                    ).createTextNode(r))[fa] = n),
                      (n.stateNode = r));
                }
                return (qo(n), null);
              case 13:
                if (
                  (Aa(Yi),
                  (r = n.memoizedState),
                  null === e ||
                    (null !== e.memoizedState &&
                      null !== e.memoizedState.dehydrated))
                ) {
                  if (ai && null !== ri && 1 & n.mode && !(128 & n.flags))
                    (fi(), pi(), (n.flags |= 98560), (l = !1));
                  else if (((l = di(n)), null !== r && null !== r.dehydrated)) {
                    if (null === e) {
                      if (!l) throw Error(i(318));
                      if (
                        !(l =
                          null !== (l = n.memoizedState) ? l.dehydrated : null)
                      )
                        throw Error(i(317));
                      l[fa] = n;
                    } else
                      (pi(),
                        !(128 & n.flags) && (n.memoizedState = null),
                        (n.flags |= 4));
                    (qo(n), (l = !1));
                  } else (null !== ii && (iu(ii), (ii = null)), (l = !0));
                  if (!l) return 65536 & n.flags ? n : null;
                }
                return 128 & n.flags
                  ? ((n.lanes = t), n)
                  : ((r = null !== r) !=
                      (null !== e && null !== e.memoizedState) &&
                      r &&
                      ((n.child.flags |= 8192),
                      1 & n.mode &&
                        (null === e || 1 & Yi.current
                          ? 0 === Rs && (Rs = 3)
                          : mu())),
                    null !== n.updateQueue && (n.flags |= 4),
                    qo(n),
                    null);
              case 4:
                return (
                  Ji(),
                  null === e && Ur(n.stateNode.containerInfo),
                  qo(n),
                  null
                );
              case 10:
                return (Ei(n.type._context), qo(n), null);
              case 19:
                if ((Aa(Yi), null === (l = n.memoizedState)))
                  return (qo(n), null);
                if (((r = !!(128 & n.flags)), null === (s = l.rendering)))
                  if (r) Go(l, !1);
                  else {
                    if (0 !== Rs || (null !== e && 128 & e.flags))
                      for (e = n.child; null !== e; ) {
                        if (null !== (s = el(e))) {
                          for (
                            n.flags |= 128,
                              Go(l, !1),
                              null !== (r = s.updateQueue) &&
                                ((n.updateQueue = r), (n.flags |= 4)),
                              n.subtreeFlags = 0,
                              r = t,
                              t = n.child;
                            null !== t;

                          )
                            ((e = r),
                              ((l = t).flags &= 14680066),
                              null === (s = l.alternate)
                                ? ((l.childLanes = 0),
                                  (l.lanes = e),
                                  (l.child = null),
                                  (l.subtreeFlags = 0),
                                  (l.memoizedProps = null),
                                  (l.memoizedState = null),
                                  (l.updateQueue = null),
                                  (l.dependencies = null),
                                  (l.stateNode = null))
                                : ((l.childLanes = s.childLanes),
                                  (l.lanes = s.lanes),
                                  (l.child = s.child),
                                  (l.subtreeFlags = 0),
                                  (l.deletions = null),
                                  (l.memoizedProps = s.memoizedProps),
                                  (l.memoizedState = s.memoizedState),
                                  (l.updateQueue = s.updateQueue),
                                  (l.type = s.type),
                                  (e = s.dependencies),
                                  (l.dependencies =
                                    null === e
                                      ? null
                                      : {
                                          lanes: e.lanes,
                                          firstContext: e.firstContext,
                                        })),
                              (t = t.sibling));
                          return (Na(Yi, (1 & Yi.current) | 2), n.child);
                        }
                        e = e.sibling;
                      }
                    null !== l.tail &&
                      Qe() > Bs &&
                      ((n.flags |= 128),
                      (r = !0),
                      Go(l, !1),
                      (n.lanes = 4194304));
                  }
                else {
                  if (!r)
                    if (null !== (e = el(s))) {
                      if (
                        ((n.flags |= 128),
                        (r = !0),
                        null !== (t = e.updateQueue) &&
                          ((n.updateQueue = t), (n.flags |= 4)),
                        Go(l, !0),
                        null === l.tail &&
                          "hidden" === l.tailMode &&
                          !s.alternate &&
                          !ai)
                      )
                        return (qo(n), null);
                    } else
                      2 * Qe() - l.renderingStartTime > Bs &&
                        1073741824 !== t &&
                        ((n.flags |= 128),
                        (r = !0),
                        Go(l, !1),
                        (n.lanes = 4194304));
                  l.isBackwards
                    ? ((s.sibling = n.child), (n.child = s))
                    : (null !== (t = l.last) ? (t.sibling = s) : (n.child = s),
                      (l.last = s));
                }
                return null !== l.tail
                  ? ((n = l.tail),
                    (l.rendering = n),
                    (l.tail = n.sibling),
                    (l.renderingStartTime = Qe()),
                    (n.sibling = null),
                    (t = Yi.current),
                    Na(Yi, r ? (1 & t) | 2 : 1 & t),
                    n)
                  : (qo(n), null);
              case 22:
              case 23:
                return (
                  cu(),
                  (r = null !== n.memoizedState),
                  null !== e &&
                    (null !== e.memoizedState) !== r &&
                    (n.flags |= 8192),
                  r && 1 & n.mode
                    ? !!(1073741824 & Os) &&
                      (qo(n), 6 & n.subtreeFlags && (n.flags |= 8192))
                    : qo(n),
                  null
                );
              case 24:
              case 25:
                return null;
            }
            throw Error(i(156, n.tag));
          }
          function $o(e, n) {
            switch ((ni(n), n.tag)) {
              case 1:
                return (
                  Ca(n.type) && Ra(),
                  65536 & (e = n.flags)
                    ? ((n.flags = (-65537 & e) | 128), n)
                    : null
                );
              case 3:
                return (
                  Ji(),
                  Aa(_a),
                  Aa(Da),
                  tl(),
                  65536 & (e = n.flags) && !(128 & e)
                    ? ((n.flags = (-65537 & e) | 128), n)
                    : null
                );
              case 5:
                return (Zi(n), null);
              case 13:
                if (
                  (Aa(Yi),
                  null !== (e = n.memoizedState) && null !== e.dehydrated)
                ) {
                  if (null === n.alternate) throw Error(i(340));
                  pi();
                }
                return 65536 & (e = n.flags)
                  ? ((n.flags = (-65537 & e) | 128), n)
                  : null;
              case 19:
                return (Aa(Yi), null);
              case 4:
                return (Ji(), null);
              case 10:
                return (Ei(n.type._context), null);
              case 22:
              case 23:
                return (cu(), null);
              default:
                return null;
            }
          }
          ((Oo = function (e, n) {
            for (var t = n.child; null !== t; ) {
              if (5 === t.tag || 6 === t.tag) e.appendChild(t.stateNode);
              else if (4 !== t.tag && null !== t.child) {
                ((t.child.return = t), (t = t.child));
                continue;
              }
              if (t === n) break;
              for (; null === t.sibling; ) {
                if (null === t.return || t.return === n) return;
                t = t.return;
              }
              ((t.sibling.return = t.return), (t = t.sibling));
            }
          }),
            (Co = function (e, n, t, r) {
              var a = e.memoizedProps;
              if (a !== r) {
                ((e = n.stateNode), Ki(qi.current));
                var i,
                  l = null;
                switch (t) {
                  case "input":
                    ((a = X(e, a)), (r = X(e, r)), (l = []));
                    break;
                  case "select":
                    ((a = V({}, a, { value: void 0 })),
                      (r = V({}, r, { value: void 0 })),
                      (l = []));
                    break;
                  case "textarea":
                    ((a = re(e, a)), (r = re(e, r)), (l = []));
                    break;
                  default:
                    "function" != typeof a.onClick &&
                      "function" == typeof r.onClick &&
                      (e.onclick = Yr);
                }
                for (c in (ge(t, r), (t = null), a))
                  if (
                    !r.hasOwnProperty(c) &&
                    a.hasOwnProperty(c) &&
                    null != a[c]
                  )
                    if ("style" === c) {
                      var s = a[c];
                      for (i in s)
                        s.hasOwnProperty(i) && (t || (t = {}), (t[i] = ""));
                    } else
                      "dangerouslySetInnerHTML" !== c &&
                        "children" !== c &&
                        "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        "autoFocus" !== c &&
                        (o.hasOwnProperty(c)
                          ? l || (l = [])
                          : (l = l || []).push(c, null));
                for (c in r) {
                  var u = r[c];
                  if (
                    ((s = null != a ? a[c] : void 0),
                    r.hasOwnProperty(c) && u !== s && (null != u || null != s))
                  )
                    if ("style" === c)
                      if (s) {
                        for (i in s)
                          !s.hasOwnProperty(i) ||
                            (u && u.hasOwnProperty(i)) ||
                            (t || (t = {}), (t[i] = ""));
                        for (i in u)
                          u.hasOwnProperty(i) &&
                            s[i] !== u[i] &&
                            (t || (t = {}), (t[i] = u[i]));
                      } else (t || (l || (l = []), l.push(c, t)), (t = u));
                    else
                      "dangerouslySetInnerHTML" === c
                        ? ((u = u ? u.__html : void 0),
                          (s = s ? s.__html : void 0),
                          null != u && s !== u && (l = l || []).push(c, u))
                        : "children" === c
                          ? ("string" != typeof u && "number" != typeof u) ||
                            (l = l || []).push(c, "" + u)
                          : "suppressContentEditableWarning" !== c &&
                            "suppressHydrationWarning" !== c &&
                            (o.hasOwnProperty(c)
                              ? (null != u &&
                                  "onScroll" === c &&
                                  zr("scroll", e),
                                l || s === u || (l = []))
                              : (l = l || []).push(c, u));
                }
                t && (l = l || []).push("style", t);
                var c = l;
                (n.updateQueue = c) && (n.flags |= 4);
              }
            }),
            (Ro = function (e, n, t, r) {
              t !== r && (n.flags |= 4);
            }));
          var Ko = !1,
            Xo = !1,
            Jo = "function" == typeof WeakSet ? WeakSet : Set,
            Qo = null;
          function Zo(e, n) {
            var t = e.ref;
            if (null !== t)
              if ("function" == typeof t)
                try {
                  t(null);
                } catch (t) {
                  ku(e, n, t);
                }
              else t.current = null;
          }
          function Yo(e, n, t) {
            try {
              t();
            } catch (t) {
              ku(e, n, t);
            }
          }
          var es = !1;
          function ns(e, n, t) {
            var r = n.updateQueue;
            if (null !== (r = null !== r ? r.lastEffect : null)) {
              var a = (r = r.next);
              do {
                if ((a.tag & e) === e) {
                  var i = a.destroy;
                  ((a.destroy = void 0), void 0 !== i && Yo(n, t, i));
                }
                a = a.next;
              } while (a !== r);
            }
          }
          function ts(e, n) {
            if (
              null !== (n = null !== (n = n.updateQueue) ? n.lastEffect : null)
            ) {
              var t = (n = n.next);
              do {
                if ((t.tag & e) === e) {
                  var r = t.create;
                  t.destroy = r();
                }
                t = t.next;
              } while (t !== n);
            }
          }
          function rs(e) {
            var n = e.ref;
            if (null !== n) {
              var t = e.stateNode;
              (e.tag, (e = t), "function" == typeof n ? n(e) : (n.current = e));
            }
          }
          function as(e) {
            var n = e.alternate;
            (null !== n && ((e.alternate = null), as(n)),
              (e.child = null),
              (e.deletions = null),
              (e.sibling = null),
              5 === e.tag &&
                null !== (n = e.stateNode) &&
                (delete n[fa],
                delete n[pa],
                delete n[ha],
                delete n[ba],
                delete n[va]),
              (e.stateNode = null),
              (e.return = null),
              (e.dependencies = null),
              (e.memoizedProps = null),
              (e.memoizedState = null),
              (e.pendingProps = null),
              (e.stateNode = null),
              (e.updateQueue = null));
          }
          function is(e) {
            return 5 === e.tag || 3 === e.tag || 4 === e.tag;
          }
          function ls(e) {
            e: for (;;) {
              for (; null === e.sibling; ) {
                if (null === e.return || is(e.return)) return null;
                e = e.return;
              }
              for (
                e.sibling.return = e.return, e = e.sibling;
                5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

              ) {
                if (2 & e.flags) continue e;
                if (null === e.child || 4 === e.tag) continue e;
                ((e.child.return = e), (e = e.child));
              }
              if (!(2 & e.flags)) return e.stateNode;
            }
          }
          function os(e, n, t) {
            var r = e.tag;
            if (5 === r || 6 === r)
              ((e = e.stateNode),
                n
                  ? 8 === t.nodeType
                    ? t.parentNode.insertBefore(e, n)
                    : t.insertBefore(e, n)
                  : (8 === t.nodeType
                      ? (n = t.parentNode).insertBefore(e, t)
                      : (n = t).appendChild(e),
                    null != (t = t._reactRootContainer) ||
                      null !== n.onclick ||
                      (n.onclick = Yr)));
            else if (4 !== r && null !== (e = e.child))
              for (os(e, n, t), e = e.sibling; null !== e; )
                (os(e, n, t), (e = e.sibling));
          }
          function ss(e, n, t) {
            var r = e.tag;
            if (5 === r || 6 === r)
              ((e = e.stateNode), n ? t.insertBefore(e, n) : t.appendChild(e));
            else if (4 !== r && null !== (e = e.child))
              for (ss(e, n, t), e = e.sibling; null !== e; )
                (ss(e, n, t), (e = e.sibling));
          }
          var us = null,
            cs = !1;
          function ds(e, n, t) {
            for (t = t.child; null !== t; ) (fs(e, n, t), (t = t.sibling));
          }
          function fs(e, n, t) {
            if (ln && "function" == typeof ln.onCommitFiberUnmount)
              try {
                ln.onCommitFiberUnmount(an, t);
              } catch (e) {}
            switch (t.tag) {
              case 5:
                Xo || Zo(t, n);
              case 6:
                var r = us,
                  a = cs;
                ((us = null),
                  ds(e, n, t),
                  (cs = a),
                  null !== (us = r) &&
                    (cs
                      ? ((e = us),
                        (t = t.stateNode),
                        8 === e.nodeType
                          ? e.parentNode.removeChild(t)
                          : e.removeChild(t))
                      : us.removeChild(t.stateNode)));
                break;
              case 18:
                null !== us &&
                  (cs
                    ? ((e = us),
                      (t = t.stateNode),
                      8 === e.nodeType
                        ? sa(e.parentNode, t)
                        : 1 === e.nodeType && sa(e, t),
                      Hn(e))
                    : sa(us, t.stateNode));
                break;
              case 4:
                ((r = us),
                  (a = cs),
                  (us = t.stateNode.containerInfo),
                  (cs = !0),
                  ds(e, n, t),
                  (us = r),
                  (cs = a));
                break;
              case 0:
              case 11:
              case 14:
              case 15:
                if (
                  !Xo &&
                  null !== (r = t.updateQueue) &&
                  null !== (r = r.lastEffect)
                ) {
                  a = r = r.next;
                  do {
                    var i = a,
                      l = i.destroy;
                    ((i = i.tag),
                      void 0 !== l && (2 & i || 4 & i) && Yo(t, n, l),
                      (a = a.next));
                  } while (a !== r);
                }
                ds(e, n, t);
                break;
              case 1:
                if (
                  !Xo &&
                  (Zo(t, n),
                  "function" == typeof (r = t.stateNode).componentWillUnmount)
                )
                  try {
                    ((r.props = t.memoizedProps),
                      (r.state = t.memoizedState),
                      r.componentWillUnmount());
                  } catch (e) {
                    ku(t, n, e);
                  }
                ds(e, n, t);
                break;
              case 21:
                ds(e, n, t);
                break;
              case 22:
                1 & t.mode
                  ? ((Xo = (r = Xo) || null !== t.memoizedState),
                    ds(e, n, t),
                    (Xo = r))
                  : ds(e, n, t);
                break;
              default:
                ds(e, n, t);
            }
          }
          function ps(e) {
            var n = e.updateQueue;
            if (null !== n) {
              e.updateQueue = null;
              var t = e.stateNode;
              (null === t && (t = e.stateNode = new Jo()),
                n.forEach(function (n) {
                  var r = Eu.bind(null, e, n);
                  t.has(n) || (t.add(n), n.then(r, r));
                }));
            }
          }
          function ms(e, n) {
            var t = n.deletions;
            if (null !== t)
              for (var r = 0; r < t.length; r++) {
                var a = t[r];
                try {
                  var l = e,
                    o = n,
                    s = o;
                  e: for (; null !== s; ) {
                    switch (s.tag) {
                      case 5:
                        ((us = s.stateNode), (cs = !1));
                        break e;
                      case 3:
                      case 4:
                        ((us = s.stateNode.containerInfo), (cs = !0));
                        break e;
                    }
                    s = s.return;
                  }
                  if (null === us) throw Error(i(160));
                  (fs(l, o, a), (us = null), (cs = !1));
                  var u = a.alternate;
                  (null !== u && (u.return = null), (a.return = null));
                } catch (e) {
                  ku(a, n, e);
                }
              }
            if (12854 & n.subtreeFlags)
              for (n = n.child; null !== n; ) (hs(n, e), (n = n.sibling));
          }
          function hs(e, n) {
            var t = e.alternate,
              r = e.flags;
            switch (e.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                if ((ms(n, e), bs(e), 4 & r)) {
                  try {
                    (ns(3, e, e.return), ts(3, e));
                  } catch (n) {
                    ku(e, e.return, n);
                  }
                  try {
                    ns(5, e, e.return);
                  } catch (n) {
                    ku(e, e.return, n);
                  }
                }
                break;
              case 1:
                (ms(n, e), bs(e), 512 & r && null !== t && Zo(t, t.return));
                break;
              case 5:
                if (
                  (ms(n, e),
                  bs(e),
                  512 & r && null !== t && Zo(t, t.return),
                  32 & e.flags)
                ) {
                  var a = e.stateNode;
                  try {
                    fe(a, "");
                  } catch (n) {
                    ku(e, e.return, n);
                  }
                }
                if (4 & r && null != (a = e.stateNode)) {
                  var l = e.memoizedProps,
                    o = null !== t ? t.memoizedProps : l,
                    s = e.type,
                    u = e.updateQueue;
                  if (((e.updateQueue = null), null !== u))
                    try {
                      ("input" === s &&
                        "radio" === l.type &&
                        null != l.name &&
                        Q(a, l),
                        we(s, o));
                      var c = we(s, l);
                      for (o = 0; o < u.length; o += 2) {
                        var d = u[o],
                          f = u[o + 1];
                        "style" === d
                          ? be(a, f)
                          : "dangerouslySetInnerHTML" === d
                            ? de(a, f)
                            : "children" === d
                              ? fe(a, f)
                              : w(a, d, f, c);
                      }
                      switch (s) {
                        case "input":
                          Z(a, l);
                          break;
                        case "textarea":
                          ie(a, l);
                          break;
                        case "select":
                          var p = a._wrapperState.wasMultiple;
                          a._wrapperState.wasMultiple = !!l.multiple;
                          var m = l.value;
                          null != m
                            ? te(a, !!l.multiple, m, !1)
                            : p !== !!l.multiple &&
                              (null != l.defaultValue
                                ? te(a, !!l.multiple, l.defaultValue, !0)
                                : te(
                                    a,
                                    !!l.multiple,
                                    l.multiple ? [] : "",
                                    !1,
                                  ));
                      }
                      a[pa] = l;
                    } catch (n) {
                      ku(e, e.return, n);
                    }
                }
                break;
              case 6:
                if ((ms(n, e), bs(e), 4 & r)) {
                  if (null === e.stateNode) throw Error(i(162));
                  ((a = e.stateNode), (l = e.memoizedProps));
                  try {
                    a.nodeValue = l;
                  } catch (n) {
                    ku(e, e.return, n);
                  }
                }
                break;
              case 3:
                if (
                  (ms(n, e),
                  bs(e),
                  4 & r && null !== t && t.memoizedState.isDehydrated)
                )
                  try {
                    Hn(n.containerInfo);
                  } catch (n) {
                    ku(e, e.return, n);
                  }
                break;
              case 4:
              default:
                (ms(n, e), bs(e));
                break;
              case 13:
                (ms(n, e),
                  bs(e),
                  8192 & (a = e.child).flags &&
                    ((l = null !== a.memoizedState),
                    (a.stateNode.isHidden = l),
                    !l ||
                      (null !== a.alternate &&
                        null !== a.alternate.memoizedState) ||
                      (Ms = Qe())),
                  4 & r && ps(e));
                break;
              case 22:
                if (
                  ((d = null !== t && null !== t.memoizedState),
                  1 & e.mode
                    ? ((Xo = (c = Xo) || d), ms(n, e), (Xo = c))
                    : ms(n, e),
                  bs(e),
                  8192 & r)
                ) {
                  if (
                    ((c = null !== e.memoizedState),
                    (e.stateNode.isHidden = c) && !d && 1 & e.mode)
                  )
                    for (Qo = e, d = e.child; null !== d; ) {
                      for (f = Qo = d; null !== Qo; ) {
                        switch (((m = (p = Qo).child), p.tag)) {
                          case 0:
                          case 11:
                          case 14:
                          case 15:
                            ns(4, p, p.return);
                            break;
                          case 1:
                            Zo(p, p.return);
                            var h = p.stateNode;
                            if ("function" == typeof h.componentWillUnmount) {
                              ((r = p), (t = p.return));
                              try {
                                ((n = r),
                                  (h.props = n.memoizedProps),
                                  (h.state = n.memoizedState),
                                  h.componentWillUnmount());
                              } catch (e) {
                                ku(r, t, e);
                              }
                            }
                            break;
                          case 5:
                            Zo(p, p.return);
                            break;
                          case 22:
                            if (null !== p.memoizedState) {
                              ys(f);
                              continue;
                            }
                        }
                        null !== m ? ((m.return = p), (Qo = m)) : ys(f);
                      }
                      d = d.sibling;
                    }
                  e: for (d = null, f = e; ; ) {
                    if (5 === f.tag) {
                      if (null === d) {
                        d = f;
                        try {
                          ((a = f.stateNode),
                            c
                              ? "function" == typeof (l = a.style).setProperty
                                ? l.setProperty("display", "none", "important")
                                : (l.display = "none")
                              : ((s = f.stateNode),
                                (o =
                                  null != (u = f.memoizedProps.style) &&
                                  u.hasOwnProperty("display")
                                    ? u.display
                                    : null),
                                (s.style.display = he("display", o))));
                        } catch (n) {
                          ku(e, e.return, n);
                        }
                      }
                    } else if (6 === f.tag) {
                      if (null === d)
                        try {
                          f.stateNode.nodeValue = c ? "" : f.memoizedProps;
                        } catch (n) {
                          ku(e, e.return, n);
                        }
                    } else if (
                      ((22 !== f.tag && 23 !== f.tag) ||
                        null === f.memoizedState ||
                        f === e) &&
                      null !== f.child
                    ) {
                      ((f.child.return = f), (f = f.child));
                      continue;
                    }
                    if (f === e) break e;
                    for (; null === f.sibling; ) {
                      if (null === f.return || f.return === e) break e;
                      (d === f && (d = null), (f = f.return));
                    }
                    (d === f && (d = null),
                      (f.sibling.return = f.return),
                      (f = f.sibling));
                  }
                }
                break;
              case 19:
                (ms(n, e), bs(e), 4 & r && ps(e));
              case 21:
            }
          }
          function bs(e) {
            var n = e.flags;
            if (2 & n) {
              try {
                e: {
                  for (var t = e.return; null !== t; ) {
                    if (is(t)) {
                      var r = t;
                      break e;
                    }
                    t = t.return;
                  }
                  throw Error(i(160));
                }
                switch (r.tag) {
                  case 5:
                    var a = r.stateNode;
                    (32 & r.flags && (fe(a, ""), (r.flags &= -33)),
                      ss(e, ls(e), a));
                    break;
                  case 3:
                  case 4:
                    var l = r.stateNode.containerInfo;
                    os(e, ls(e), l);
                    break;
                  default:
                    throw Error(i(161));
                }
              } catch (n) {
                ku(e, e.return, n);
              }
              e.flags &= -3;
            }
            4096 & n && (e.flags &= -4097);
          }
          function vs(e, n, t) {
            ((Qo = e), gs(e, n, t));
          }
          function gs(e, n, t) {
            for (var r = !!(1 & e.mode); null !== Qo; ) {
              var a = Qo,
                i = a.child;
              if (22 === a.tag && r) {
                var l = null !== a.memoizedState || Ko;
                if (!l) {
                  var o = a.alternate,
                    s = (null !== o && null !== o.memoizedState) || Xo;
                  o = Ko;
                  var u = Xo;
                  if (((Ko = l), (Xo = s) && !u))
                    for (Qo = a; null !== Qo; )
                      ((s = (l = Qo).child),
                        22 === l.tag && null !== l.memoizedState
                          ? xs(a)
                          : null !== s
                            ? ((s.return = l), (Qo = s))
                            : xs(a));
                  for (; null !== i; ) ((Qo = i), gs(i, n, t), (i = i.sibling));
                  ((Qo = a), (Ko = o), (Xo = u));
                }
                ws(e);
              } else
                8772 & a.subtreeFlags && null !== i
                  ? ((i.return = a), (Qo = i))
                  : ws(e);
            }
          }
          function ws(e) {
            for (; null !== Qo; ) {
              var n = Qo;
              if (8772 & n.flags) {
                var t = n.alternate;
                try {
                  if (8772 & n.flags)
                    switch (n.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Xo || ts(5, n);
                        break;
                      case 1:
                        var r = n.stateNode;
                        if (4 & n.flags && !Xo)
                          if (null === t) r.componentDidMount();
                          else {
                            var a =
                              n.elementType === n.type
                                ? t.memoizedProps
                                : no(n.type, t.memoizedProps);
                            r.componentDidUpdate(
                              a,
                              t.memoizedState,
                              r.__reactInternalSnapshotBeforeUpdate,
                            );
                          }
                        var l = n.updateQueue;
                        null !== l && Hi(n, l, r);
                        break;
                      case 3:
                        var o = n.updateQueue;
                        if (null !== o) {
                          if (((t = null), null !== n.child))
                            switch (n.child.tag) {
                              case 5:
                              case 1:
                                t = n.child.stateNode;
                            }
                          Hi(n, o, t);
                        }
                        break;
                      case 5:
                        var s = n.stateNode;
                        if (null === t && 4 & n.flags) {
                          t = s;
                          var u = n.memoizedProps;
                          switch (n.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                              u.autoFocus && t.focus();
                              break;
                            case "img":
                              u.src && (t.src = u.src);
                          }
                        }
                        break;
                      case 6:
                      case 4:
                      case 12:
                      case 19:
                      case 17:
                      case 21:
                      case 22:
                      case 23:
                      case 25:
                        break;
                      case 13:
                        if (null === n.memoizedState) {
                          var c = n.alternate;
                          if (null !== c) {
                            var d = c.memoizedState;
                            if (null !== d) {
                              var f = d.dehydrated;
                              null !== f && Hn(f);
                            }
                          }
                        }
                        break;
                      default:
                        throw Error(i(163));
                    }
                  Xo || (512 & n.flags && rs(n));
                } catch (e) {
                  ku(n, n.return, e);
                }
              }
              if (n === e) {
                Qo = null;
                break;
              }
              if (null !== (t = n.sibling)) {
                ((t.return = n.return), (Qo = t));
                break;
              }
              Qo = n.return;
            }
          }
          function ys(e) {
            for (; null !== Qo; ) {
              var n = Qo;
              if (n === e) {
                Qo = null;
                break;
              }
              var t = n.sibling;
              if (null !== t) {
                ((t.return = n.return), (Qo = t));
                break;
              }
              Qo = n.return;
            }
          }
          function xs(e) {
            for (; null !== Qo; ) {
              var n = Qo;
              try {
                switch (n.tag) {
                  case 0:
                  case 11:
                  case 15:
                    var t = n.return;
                    try {
                      ts(4, n);
                    } catch (e) {
                      ku(n, t, e);
                    }
                    break;
                  case 1:
                    var r = n.stateNode;
                    if ("function" == typeof r.componentDidMount) {
                      var a = n.return;
                      try {
                        r.componentDidMount();
                      } catch (e) {
                        ku(n, a, e);
                      }
                    }
                    var i = n.return;
                    try {
                      rs(n);
                    } catch (e) {
                      ku(n, i, e);
                    }
                    break;
                  case 5:
                    var l = n.return;
                    try {
                      rs(n);
                    } catch (e) {
                      ku(n, l, e);
                    }
                }
              } catch (e) {
                ku(n, n.return, e);
              }
              if (n === e) {
                Qo = null;
                break;
              }
              var o = n.sibling;
              if (null !== o) {
                ((o.return = n.return), (Qo = o));
                break;
              }
              Qo = n.return;
            }
          }
          var Is,
            ks = Math.ceil,
            Ss = y.ReactCurrentDispatcher,
            As = y.ReactCurrentOwner,
            Ns = y.ReactCurrentBatchConfig,
            Es = 0,
            Ds = null,
            _s = null,
            Ls = 0,
            Os = 0,
            Cs = Sa(0),
            Rs = 0,
            Ps = null,
            js = 0,
            Ts = 0,
            Vs = 0,
            Fs = null,
            zs = null,
            Ms = 0,
            Bs = 1 / 0,
            Us = null,
            Hs = !1,
            Gs = null,
            qs = null,
            Ws = !1,
            $s = null,
            Ks = 0,
            Xs = 0,
            Js = null,
            Qs = -1,
            Zs = 0;
          function Ys() {
            return 6 & Es ? Qe() : -1 !== Qs ? Qs : (Qs = Qe());
          }
          function eu(e) {
            return 1 & e.mode
              ? 2 & Es && 0 !== Ls
                ? Ls & -Ls
                : null !== hi.transition
                  ? (0 === Zs && (Zs = bn()), Zs)
                  : 0 !== (e = yn)
                    ? e
                    : (e = void 0 === (e = window.event) ? 16 : Qn(e.type))
              : 1;
          }
          function nu(e, n, t, r) {
            if (50 < Xs) throw ((Xs = 0), (Js = null), Error(i(185)));
            (gn(e, t, r),
              (2 & Es && e === Ds) ||
                (e === Ds && (!(2 & Es) && (Ts |= t), 4 === Rs && lu(e, Ls)),
                tu(e, r),
                1 === t &&
                  0 === Es &&
                  !(1 & n.mode) &&
                  ((Bs = Qe() + 500), za && Ua())));
          }
          function tu(e, n) {
            var t = e.callbackNode;
            !(function (e, n) {
              for (
                var t = e.suspendedLanes,
                  r = e.pingedLanes,
                  a = e.expirationTimes,
                  i = e.pendingLanes;
                0 < i;

              ) {
                var l = 31 - on(i),
                  o = 1 << l,
                  s = a[l];
                (-1 === s
                  ? (0 !== (o & t) && 0 === (o & r)) || (a[l] = mn(o, n))
                  : s <= n && (e.expiredLanes |= o),
                  (i &= ~o));
              }
            })(e, n);
            var r = pn(e, e === Ds ? Ls : 0);
            if (0 === r)
              (null !== t && Ke(t),
                (e.callbackNode = null),
                (e.callbackPriority = 0));
            else if (((n = r & -r), e.callbackPriority !== n)) {
              if ((null != t && Ke(t), 1 === n))
                (0 === e.tag
                  ? (function (e) {
                      ((za = !0), Ba(e));
                    })(ou.bind(null, e))
                  : Ba(ou.bind(null, e)),
                  la(function () {
                    !(6 & Es) && Ua();
                  }),
                  (t = null));
              else {
                switch (xn(r)) {
                  case 1:
                    t = Ye;
                    break;
                  case 4:
                    t = en;
                    break;
                  case 16:
                  default:
                    t = nn;
                    break;
                  case 536870912:
                    t = rn;
                }
                t = Du(t, ru.bind(null, e));
              }
              ((e.callbackPriority = n), (e.callbackNode = t));
            }
          }
          function ru(e, n) {
            if (((Qs = -1), (Zs = 0), 6 & Es)) throw Error(i(327));
            var t = e.callbackNode;
            if (xu() && e.callbackNode !== t) return null;
            var r = pn(e, e === Ds ? Ls : 0);
            if (0 === r) return null;
            if (30 & r || 0 !== (r & e.expiredLanes) || n) n = hu(e, r);
            else {
              n = r;
              var a = Es;
              Es |= 2;
              var l = pu();
              for (
                (Ds === e && Ls === n) ||
                ((Us = null), (Bs = Qe() + 500), du(e, n));
                ;

              )
                try {
                  vu();
                  break;
                } catch (n) {
                  fu(e, n);
                }
              (Ni(),
                (Ss.current = l),
                (Es = a),
                null !== _s ? (n = 0) : ((Ds = null), (Ls = 0), (n = Rs)));
            }
            if (0 !== n) {
              if (
                (2 === n && 0 !== (a = hn(e)) && ((r = a), (n = au(e, a))),
                1 === n)
              )
                throw ((t = Ps), du(e, 0), lu(e, r), tu(e, Qe()), t);
              if (6 === n) lu(e, r);
              else {
                if (
                  ((a = e.current.alternate),
                  !(
                    30 & r ||
                    (function (e) {
                      for (var n = e; ; ) {
                        if (16384 & n.flags) {
                          var t = n.updateQueue;
                          if (null !== t && null !== (t = t.stores))
                            for (var r = 0; r < t.length; r++) {
                              var a = t[r],
                                i = a.getSnapshot;
                              a = a.value;
                              try {
                                if (!or(i(), a)) return !1;
                              } catch (e) {
                                return !1;
                              }
                            }
                        }
                        if (
                          ((t = n.child), 16384 & n.subtreeFlags && null !== t)
                        )
                          ((t.return = n), (n = t));
                        else {
                          if (n === e) break;
                          for (; null === n.sibling; ) {
                            if (null === n.return || n.return === e) return !0;
                            n = n.return;
                          }
                          ((n.sibling.return = n.return), (n = n.sibling));
                        }
                      }
                      return !0;
                    })(a) ||
                    ((n = hu(e, r)),
                    2 === n &&
                      ((l = hn(e)), 0 !== l && ((r = l), (n = au(e, l)))),
                    1 !== n)
                  ))
                )
                  throw ((t = Ps), du(e, 0), lu(e, r), tu(e, Qe()), t);
                switch (((e.finishedWork = a), (e.finishedLanes = r), n)) {
                  case 0:
                  case 1:
                    throw Error(i(345));
                  case 2:
                  case 5:
                    yu(e, zs, Us);
                    break;
                  case 3:
                    if (
                      (lu(e, r),
                      (130023424 & r) === r && 10 < (n = Ms + 500 - Qe()))
                    ) {
                      if (0 !== pn(e, 0)) break;
                      if (((a = e.suspendedLanes) & r) !== r) {
                        (Ys(), (e.pingedLanes |= e.suspendedLanes & a));
                        break;
                      }
                      e.timeoutHandle = ra(yu.bind(null, e, zs, Us), n);
                      break;
                    }
                    yu(e, zs, Us);
                    break;
                  case 4:
                    if ((lu(e, r), (4194240 & r) === r)) break;
                    for (n = e.eventTimes, a = -1; 0 < r; ) {
                      var o = 31 - on(r);
                      ((l = 1 << o), (o = n[o]) > a && (a = o), (r &= ~l));
                    }
                    if (
                      ((r = a),
                      10 <
                        (r =
                          (120 > (r = Qe() - r)
                            ? 120
                            : 480 > r
                              ? 480
                              : 1080 > r
                                ? 1080
                                : 1920 > r
                                  ? 1920
                                  : 3e3 > r
                                    ? 3e3
                                    : 4320 > r
                                      ? 4320
                                      : 1960 * ks(r / 1960)) - r))
                    ) {
                      e.timeoutHandle = ra(yu.bind(null, e, zs, Us), r);
                      break;
                    }
                    yu(e, zs, Us);
                    break;
                  default:
                    throw Error(i(329));
                }
              }
            }
            return (
              tu(e, Qe()),
              e.callbackNode === t ? ru.bind(null, e) : null
            );
          }
          function au(e, n) {
            var t = Fs;
            return (
              e.current.memoizedState.isDehydrated && (du(e, n).flags |= 256),
              2 !== (e = hu(e, n)) && ((n = zs), (zs = t), null !== n && iu(n)),
              e
            );
          }
          function iu(e) {
            null === zs ? (zs = e) : zs.push.apply(zs, e);
          }
          function lu(e, n) {
            for (
              n &= ~Vs,
                n &= ~Ts,
                e.suspendedLanes |= n,
                e.pingedLanes &= ~n,
                e = e.expirationTimes;
              0 < n;

            ) {
              var t = 31 - on(n),
                r = 1 << t;
              ((e[t] = -1), (n &= ~r));
            }
          }
          function ou(e) {
            if (6 & Es) throw Error(i(327));
            xu();
            var n = pn(e, 0);
            if (!(1 & n)) return (tu(e, Qe()), null);
            var t = hu(e, n);
            if (0 !== e.tag && 2 === t) {
              var r = hn(e);
              0 !== r && ((n = r), (t = au(e, r)));
            }
            if (1 === t) throw ((t = Ps), du(e, 0), lu(e, n), tu(e, Qe()), t);
            if (6 === t) throw Error(i(345));
            return (
              (e.finishedWork = e.current.alternate),
              (e.finishedLanes = n),
              yu(e, zs, Us),
              tu(e, Qe()),
              null
            );
          }
          function su(e, n) {
            var t = Es;
            Es |= 1;
            try {
              return e(n);
            } finally {
              0 === (Es = t) && ((Bs = Qe() + 500), za && Ua());
            }
          }
          function uu(e) {
            null !== $s && 0 === $s.tag && !(6 & Es) && xu();
            var n = Es;
            Es |= 1;
            var t = Ns.transition,
              r = yn;
            try {
              if (((Ns.transition = null), (yn = 1), e)) return e();
            } finally {
              ((yn = r), (Ns.transition = t), !(6 & (Es = n)) && Ua());
            }
          }
          function cu() {
            ((Os = Cs.current), Aa(Cs));
          }
          function du(e, n) {
            ((e.finishedWork = null), (e.finishedLanes = 0));
            var t = e.timeoutHandle;
            if ((-1 !== t && ((e.timeoutHandle = -1), aa(t)), null !== _s))
              for (t = _s.return; null !== t; ) {
                var r = t;
                switch ((ni(r), r.tag)) {
                  case 1:
                    null != (r = r.type.childContextTypes) && Ra();
                    break;
                  case 3:
                    (Ji(), Aa(_a), Aa(Da), tl());
                    break;
                  case 5:
                    Zi(r);
                    break;
                  case 4:
                    Ji();
                    break;
                  case 13:
                  case 19:
                    Aa(Yi);
                    break;
                  case 10:
                    Ei(r.type._context);
                    break;
                  case 22:
                  case 23:
                    cu();
                }
                t = t.return;
              }
            if (
              ((Ds = e),
              (_s = e = Cu(e.current, null)),
              (Ls = Os = n),
              (Rs = 0),
              (Ps = null),
              (Vs = Ts = js = 0),
              (zs = Fs = null),
              null !== Oi)
            ) {
              for (n = 0; n < Oi.length; n++)
                if (null !== (r = (t = Oi[n]).interleaved)) {
                  t.interleaved = null;
                  var a = r.next,
                    i = t.pending;
                  if (null !== i) {
                    var l = i.next;
                    ((i.next = a), (r.next = l));
                  }
                  t.pending = r;
                }
              Oi = null;
            }
            return e;
          }
          function fu(e, n) {
            for (;;) {
              var t = _s;
              try {
                if ((Ni(), (rl.current = Ql), ul)) {
                  for (var r = ll.memoizedState; null !== r; ) {
                    var a = r.queue;
                    (null !== a && (a.pending = null), (r = r.next));
                  }
                  ul = !1;
                }
                if (
                  ((il = 0),
                  (sl = ol = ll = null),
                  (cl = !1),
                  (dl = 0),
                  (As.current = null),
                  null === t || null === t.return)
                ) {
                  ((Rs = 1), (Ps = n), (_s = null));
                  break;
                }
                e: {
                  var l = e,
                    o = t.return,
                    s = t,
                    u = n;
                  if (
                    ((n = Ls),
                    (s.flags |= 32768),
                    null !== u &&
                      "object" == typeof u &&
                      "function" == typeof u.then)
                  ) {
                    var c = u,
                      d = s,
                      f = d.tag;
                    if (!(1 & d.mode || (0 !== f && 11 !== f && 15 !== f))) {
                      var p = d.alternate;
                      p
                        ? ((d.updateQueue = p.updateQueue),
                          (d.memoizedState = p.memoizedState),
                          (d.lanes = p.lanes))
                        : ((d.updateQueue = null), (d.memoizedState = null));
                    }
                    var m = bo(o);
                    if (null !== m) {
                      ((m.flags &= -257),
                        vo(m, o, s, 0, n),
                        1 & m.mode && ho(l, c, n),
                        (u = c));
                      var h = (n = m).updateQueue;
                      if (null === h) {
                        var b = new Set();
                        (b.add(u), (n.updateQueue = b));
                      } else h.add(u);
                      break e;
                    }
                    if (!(1 & n)) {
                      (ho(l, c, n), mu());
                      break e;
                    }
                    u = Error(i(426));
                  } else if (ai && 1 & s.mode) {
                    var v = bo(o);
                    if (null !== v) {
                      (!(65536 & v.flags) && (v.flags |= 256),
                        vo(v, o, s, 0, n),
                        mi(so(u, s)));
                      break e;
                    }
                  }
                  ((l = u = so(u, s)),
                    4 !== Rs && (Rs = 2),
                    null === Fs ? (Fs = [l]) : Fs.push(l),
                    (l = o));
                  do {
                    switch (l.tag) {
                      case 3:
                        ((l.flags |= 65536),
                          (n &= -n),
                          (l.lanes |= n),
                          Bi(l, po(0, u, n)));
                        break e;
                      case 1:
                        s = u;
                        var g = l.type,
                          w = l.stateNode;
                        if (
                          !(
                            128 & l.flags ||
                            ("function" != typeof g.getDerivedStateFromError &&
                              (null === w ||
                                "function" != typeof w.componentDidCatch ||
                                (null !== qs && qs.has(w))))
                          )
                        ) {
                          ((l.flags |= 65536),
                            (n &= -n),
                            (l.lanes |= n),
                            Bi(l, mo(l, s, n)));
                          break e;
                        }
                    }
                    l = l.return;
                  } while (null !== l);
                }
                wu(t);
              } catch (e) {
                ((n = e), _s === t && null !== t && (_s = t = t.return));
                continue;
              }
              break;
            }
          }
          function pu() {
            var e = Ss.current;
            return ((Ss.current = Ql), null === e ? Ql : e);
          }
          function mu() {
            ((0 !== Rs && 3 !== Rs && 2 !== Rs) || (Rs = 4),
              null === Ds ||
                (!(268435455 & js) && !(268435455 & Ts)) ||
                lu(Ds, Ls));
          }
          function hu(e, n) {
            var t = Es;
            Es |= 2;
            var r = pu();
            for ((Ds === e && Ls === n) || ((Us = null), du(e, n)); ; )
              try {
                bu();
                break;
              } catch (n) {
                fu(e, n);
              }
            if ((Ni(), (Es = t), (Ss.current = r), null !== _s))
              throw Error(i(261));
            return ((Ds = null), (Ls = 0), Rs);
          }
          function bu() {
            for (; null !== _s; ) gu(_s);
          }
          function vu() {
            for (; null !== _s && !Xe(); ) gu(_s);
          }
          function gu(e) {
            var n = Is(e.alternate, e, Os);
            ((e.memoizedProps = e.pendingProps),
              null === n ? wu(e) : (_s = n),
              (As.current = null));
          }
          function wu(e) {
            var n = e;
            do {
              var t = n.alternate;
              if (((e = n.return), 32768 & n.flags)) {
                if (null !== (t = $o(t, n)))
                  return ((t.flags &= 32767), void (_s = t));
                if (null === e) return ((Rs = 6), void (_s = null));
                ((e.flags |= 32768),
                  (e.subtreeFlags = 0),
                  (e.deletions = null));
              } else if (null !== (t = Wo(t, n, Os))) return void (_s = t);
              if (null !== (n = n.sibling)) return void (_s = n);
              _s = n = e;
            } while (null !== n);
            0 === Rs && (Rs = 5);
          }
          function yu(e, n, t) {
            var r = yn,
              a = Ns.transition;
            try {
              ((Ns.transition = null),
                (yn = 1),
                (function (e, n, t, r) {
                  do {
                    xu();
                  } while (null !== $s);
                  if (6 & Es) throw Error(i(327));
                  t = e.finishedWork;
                  var a = e.finishedLanes;
                  if (null === t) return null;
                  if (
                    ((e.finishedWork = null),
                    (e.finishedLanes = 0),
                    t === e.current)
                  )
                    throw Error(i(177));
                  ((e.callbackNode = null), (e.callbackPriority = 0));
                  var l = t.lanes | t.childLanes;
                  if (
                    ((function (e, n) {
                      var t = e.pendingLanes & ~n;
                      ((e.pendingLanes = n),
                        (e.suspendedLanes = 0),
                        (e.pingedLanes = 0),
                        (e.expiredLanes &= n),
                        (e.mutableReadLanes &= n),
                        (e.entangledLanes &= n),
                        (n = e.entanglements));
                      var r = e.eventTimes;
                      for (e = e.expirationTimes; 0 < t; ) {
                        var a = 31 - on(t),
                          i = 1 << a;
                        ((n[a] = 0), (r[a] = -1), (e[a] = -1), (t &= ~i));
                      }
                    })(e, l),
                    e === Ds && ((_s = Ds = null), (Ls = 0)),
                    (!(2064 & t.subtreeFlags) && !(2064 & t.flags)) ||
                      Ws ||
                      ((Ws = !0),
                      Du(nn, function () {
                        return (xu(), null);
                      })),
                    (l = !!(15990 & t.flags)),
                    15990 & t.subtreeFlags || l)
                  ) {
                    ((l = Ns.transition), (Ns.transition = null));
                    var o = yn;
                    yn = 1;
                    var s = Es;
                    ((Es |= 4),
                      (As.current = null),
                      (function (e, n) {
                        if (((ea = qn), pr((e = fr())))) {
                          if ("selectionStart" in e)
                            var t = {
                              start: e.selectionStart,
                              end: e.selectionEnd,
                            };
                          else
                            e: {
                              var r =
                                (t =
                                  ((t = e.ownerDocument) && t.defaultView) ||
                                  window).getSelection && t.getSelection();
                              if (r && 0 !== r.rangeCount) {
                                t = r.anchorNode;
                                var a = r.anchorOffset,
                                  l = r.focusNode;
                                r = r.focusOffset;
                                try {
                                  (t.nodeType, l.nodeType);
                                } catch (e) {
                                  t = null;
                                  break e;
                                }
                                var o = 0,
                                  s = -1,
                                  u = -1,
                                  c = 0,
                                  d = 0,
                                  f = e,
                                  p = null;
                                n: for (;;) {
                                  for (
                                    var m;
                                    f !== t ||
                                      (0 !== a && 3 !== f.nodeType) ||
                                      (s = o + a),
                                      f !== l ||
                                        (0 !== r && 3 !== f.nodeType) ||
                                        (u = o + r),
                                      3 === f.nodeType &&
                                        (o += f.nodeValue.length),
                                      null !== (m = f.firstChild);

                                  )
                                    ((p = f), (f = m));
                                  for (;;) {
                                    if (f === e) break n;
                                    if (
                                      (p === t && ++c === a && (s = o),
                                      p === l && ++d === r && (u = o),
                                      null !== (m = f.nextSibling))
                                    )
                                      break;
                                    p = (f = p).parentNode;
                                  }
                                  f = m;
                                }
                                t =
                                  -1 === s || -1 === u
                                    ? null
                                    : { start: s, end: u };
                              } else t = null;
                            }
                          t = t || { start: 0, end: 0 };
                        } else t = null;
                        for (
                          na = { focusedElem: e, selectionRange: t },
                            qn = !1,
                            Qo = n;
                          null !== Qo;

                        )
                          if (
                            ((e = (n = Qo).child),
                            1028 & n.subtreeFlags && null !== e)
                          )
                            ((e.return = n), (Qo = e));
                          else
                            for (; null !== Qo; ) {
                              n = Qo;
                              try {
                                var h = n.alternate;
                                if (1024 & n.flags)
                                  switch (n.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                    case 5:
                                    case 6:
                                    case 4:
                                    case 17:
                                      break;
                                    case 1:
                                      if (null !== h) {
                                        var b = h.memoizedProps,
                                          v = h.memoizedState,
                                          g = n.stateNode,
                                          w = g.getSnapshotBeforeUpdate(
                                            n.elementType === n.type
                                              ? b
                                              : no(n.type, b),
                                            v,
                                          );
                                        g.__reactInternalSnapshotBeforeUpdate =
                                          w;
                                      }
                                      break;
                                    case 3:
                                      var y = n.stateNode.containerInfo;
                                      1 === y.nodeType
                                        ? (y.textContent = "")
                                        : 9 === y.nodeType &&
                                          y.documentElement &&
                                          y.removeChild(y.documentElement);
                                      break;
                                    default:
                                      throw Error(i(163));
                                  }
                              } catch (e) {
                                ku(n, n.return, e);
                              }
                              if (null !== (e = n.sibling)) {
                                ((e.return = n.return), (Qo = e));
                                break;
                              }
                              Qo = n.return;
                            }
                        ((h = es), (es = !1));
                      })(e, t),
                      hs(t, e),
                      mr(na),
                      (qn = !!ea),
                      (na = ea = null),
                      (e.current = t),
                      vs(t, e, a),
                      Je(),
                      (Es = s),
                      (yn = o),
                      (Ns.transition = l));
                  } else e.current = t;
                  if (
                    (Ws && ((Ws = !1), ($s = e), (Ks = a)),
                    0 === (l = e.pendingLanes) && (qs = null),
                    (function (e) {
                      if (ln && "function" == typeof ln.onCommitFiberRoot)
                        try {
                          ln.onCommitFiberRoot(
                            an,
                            e,
                            void 0,
                            !(128 & ~e.current.flags),
                          );
                        } catch (e) {}
                    })(t.stateNode),
                    tu(e, Qe()),
                    null !== n)
                  )
                    for (r = e.onRecoverableError, t = 0; t < n.length; t++)
                      r((a = n[t]).value, {
                        componentStack: a.stack,
                        digest: a.digest,
                      });
                  if (Hs) throw ((Hs = !1), (e = Gs), (Gs = null), e);
                  (!!(1 & Ks) && 0 !== e.tag && xu(),
                    1 & (l = e.pendingLanes)
                      ? e === Js
                        ? Xs++
                        : ((Xs = 0), (Js = e))
                      : (Xs = 0),
                    Ua());
                })(e, n, t, r));
            } finally {
              ((Ns.transition = a), (yn = r));
            }
            return null;
          }
          function xu() {
            if (null !== $s) {
              var e = xn(Ks),
                n = Ns.transition,
                t = yn;
              try {
                if (
                  ((Ns.transition = null), (yn = 16 > e ? 16 : e), null === $s)
                )
                  var r = !1;
                else {
                  if (((e = $s), ($s = null), (Ks = 0), 6 & Es))
                    throw Error(i(331));
                  var a = Es;
                  for (Es |= 4, Qo = e.current; null !== Qo; ) {
                    var l = Qo,
                      o = l.child;
                    if (16 & Qo.flags) {
                      var s = l.deletions;
                      if (null !== s) {
                        for (var u = 0; u < s.length; u++) {
                          var c = s[u];
                          for (Qo = c; null !== Qo; ) {
                            var d = Qo;
                            switch (d.tag) {
                              case 0:
                              case 11:
                              case 15:
                                ns(8, d, l);
                            }
                            var f = d.child;
                            if (null !== f) ((f.return = d), (Qo = f));
                            else
                              for (; null !== Qo; ) {
                                var p = (d = Qo).sibling,
                                  m = d.return;
                                if ((as(d), d === c)) {
                                  Qo = null;
                                  break;
                                }
                                if (null !== p) {
                                  ((p.return = m), (Qo = p));
                                  break;
                                }
                                Qo = m;
                              }
                          }
                        }
                        var h = l.alternate;
                        if (null !== h) {
                          var b = h.child;
                          if (null !== b) {
                            h.child = null;
                            do {
                              var v = b.sibling;
                              ((b.sibling = null), (b = v));
                            } while (null !== b);
                          }
                        }
                        Qo = l;
                      }
                    }
                    if (2064 & l.subtreeFlags && null !== o)
                      ((o.return = l), (Qo = o));
                    else
                      e: for (; null !== Qo; ) {
                        if (2048 & (l = Qo).flags)
                          switch (l.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ns(9, l, l.return);
                          }
                        var g = l.sibling;
                        if (null !== g) {
                          ((g.return = l.return), (Qo = g));
                          break e;
                        }
                        Qo = l.return;
                      }
                  }
                  var w = e.current;
                  for (Qo = w; null !== Qo; ) {
                    var y = (o = Qo).child;
                    if (2064 & o.subtreeFlags && null !== y)
                      ((y.return = o), (Qo = y));
                    else
                      e: for (o = w; null !== Qo; ) {
                        if (2048 & (s = Qo).flags)
                          try {
                            switch (s.tag) {
                              case 0:
                              case 11:
                              case 15:
                                ts(9, s);
                            }
                          } catch (e) {
                            ku(s, s.return, e);
                          }
                        if (s === o) {
                          Qo = null;
                          break e;
                        }
                        var x = s.sibling;
                        if (null !== x) {
                          ((x.return = s.return), (Qo = x));
                          break e;
                        }
                        Qo = s.return;
                      }
                  }
                  if (
                    ((Es = a),
                    Ua(),
                    ln && "function" == typeof ln.onPostCommitFiberRoot)
                  )
                    try {
                      ln.onPostCommitFiberRoot(an, e);
                    } catch (e) {}
                  r = !0;
                }
                return r;
              } finally {
                ((yn = t), (Ns.transition = n));
              }
            }
            return !1;
          }
          function Iu(e, n, t) {
            ((e = zi(e, (n = po(0, (n = so(t, n)), 1)), 1)),
              (n = Ys()),
              null !== e && (gn(e, 1, n), tu(e, n)));
          }
          function ku(e, n, t) {
            if (3 === e.tag) Iu(e, e, t);
            else
              for (; null !== n; ) {
                if (3 === n.tag) {
                  Iu(n, e, t);
                  break;
                }
                if (1 === n.tag) {
                  var r = n.stateNode;
                  if (
                    "function" == typeof n.type.getDerivedStateFromError ||
                    ("function" == typeof r.componentDidCatch &&
                      (null === qs || !qs.has(r)))
                  ) {
                    ((n = zi(n, (e = mo(n, (e = so(t, e)), 1)), 1)),
                      (e = Ys()),
                      null !== n && (gn(n, 1, e), tu(n, e)));
                    break;
                  }
                }
                n = n.return;
              }
          }
          function Su(e, n, t) {
            var r = e.pingCache;
            (null !== r && r.delete(n),
              (n = Ys()),
              (e.pingedLanes |= e.suspendedLanes & t),
              Ds === e &&
                (Ls & t) === t &&
                (4 === Rs ||
                (3 === Rs && (130023424 & Ls) === Ls && 500 > Qe() - Ms)
                  ? du(e, 0)
                  : (Vs |= t)),
              tu(e, n));
          }
          function Au(e, n) {
            0 === n &&
              (1 & e.mode
                ? ((n = dn), !(130023424 & (dn <<= 1)) && (dn = 4194304))
                : (n = 1));
            var t = Ys();
            null !== (e = Pi(e, n)) && (gn(e, n, t), tu(e, t));
          }
          function Nu(e) {
            var n = e.memoizedState,
              t = 0;
            (null !== n && (t = n.retryLane), Au(e, t));
          }
          function Eu(e, n) {
            var t = 0;
            switch (e.tag) {
              case 13:
                var r = e.stateNode,
                  a = e.memoizedState;
                null !== a && (t = a.retryLane);
                break;
              case 19:
                r = e.stateNode;
                break;
              default:
                throw Error(i(314));
            }
            (null !== r && r.delete(n), Au(e, t));
          }
          function Du(e, n) {
            return $e(e, n);
          }
          function _u(e, n, t, r) {
            ((this.tag = e),
              (this.key = t),
              (this.sibling =
                this.child =
                this.return =
                this.stateNode =
                this.type =
                this.elementType =
                  null),
              (this.index = 0),
              (this.ref = null),
              (this.pendingProps = n),
              (this.dependencies =
                this.memoizedState =
                this.updateQueue =
                this.memoizedProps =
                  null),
              (this.mode = r),
              (this.subtreeFlags = this.flags = 0),
              (this.deletions = null),
              (this.childLanes = this.lanes = 0),
              (this.alternate = null));
          }
          function Lu(e, n, t, r) {
            return new _u(e, n, t, r);
          }
          function Ou(e) {
            return !(!(e = e.prototype) || !e.isReactComponent);
          }
          function Cu(e, n) {
            var t = e.alternate;
            return (
              null === t
                ? (((t = Lu(e.tag, n, e.key, e.mode)).elementType =
                    e.elementType),
                  (t.type = e.type),
                  (t.stateNode = e.stateNode),
                  (t.alternate = e),
                  (e.alternate = t))
                : ((t.pendingProps = n),
                  (t.type = e.type),
                  (t.flags = 0),
                  (t.subtreeFlags = 0),
                  (t.deletions = null)),
              (t.flags = 14680064 & e.flags),
              (t.childLanes = e.childLanes),
              (t.lanes = e.lanes),
              (t.child = e.child),
              (t.memoizedProps = e.memoizedProps),
              (t.memoizedState = e.memoizedState),
              (t.updateQueue = e.updateQueue),
              (n = e.dependencies),
              (t.dependencies =
                null === n
                  ? null
                  : { lanes: n.lanes, firstContext: n.firstContext }),
              (t.sibling = e.sibling),
              (t.index = e.index),
              (t.ref = e.ref),
              t
            );
          }
          function Ru(e, n, t, r, a, l) {
            var o = 2;
            if (((r = e), "function" == typeof e)) Ou(e) && (o = 1);
            else if ("string" == typeof e) o = 5;
            else
              e: switch (e) {
                case k:
                  return Pu(t.children, a, l, n);
                case S:
                  ((o = 8), (a |= 8));
                  break;
                case A:
                  return (
                    ((e = Lu(12, t, n, 2 | a)).elementType = A),
                    (e.lanes = l),
                    e
                  );
                case _:
                  return (
                    ((e = Lu(13, t, n, a)).elementType = _),
                    (e.lanes = l),
                    e
                  );
                case L:
                  return (
                    ((e = Lu(19, t, n, a)).elementType = L),
                    (e.lanes = l),
                    e
                  );
                case R:
                  return ju(t, a, l, n);
                default:
                  if ("object" == typeof e && null !== e)
                    switch (e.$$typeof) {
                      case N:
                        o = 10;
                        break e;
                      case E:
                        o = 9;
                        break e;
                      case D:
                        o = 11;
                        break e;
                      case O:
                        o = 14;
                        break e;
                      case C:
                        ((o = 16), (r = null));
                        break e;
                    }
                  throw Error(i(130, null == e ? e : typeof e, ""));
              }
            return (
              ((n = Lu(o, t, n, a)).elementType = e),
              (n.type = r),
              (n.lanes = l),
              n
            );
          }
          function Pu(e, n, t, r) {
            return (((e = Lu(7, e, r, n)).lanes = t), e);
          }
          function ju(e, n, t, r) {
            return (
              ((e = Lu(22, e, r, n)).elementType = R),
              (e.lanes = t),
              (e.stateNode = { isHidden: !1 }),
              e
            );
          }
          function Tu(e, n, t) {
            return (((e = Lu(6, e, null, n)).lanes = t), e);
          }
          function Vu(e, n, t) {
            return (
              ((n = Lu(
                4,
                null !== e.children ? e.children : [],
                e.key,
                n,
              )).lanes = t),
              (n.stateNode = {
                containerInfo: e.containerInfo,
                pendingChildren: null,
                implementation: e.implementation,
              }),
              n
            );
          }
          function Fu(e, n, t, r, a) {
            ((this.tag = n),
              (this.containerInfo = e),
              (this.finishedWork =
                this.pingCache =
                this.current =
                this.pendingChildren =
                  null),
              (this.timeoutHandle = -1),
              (this.callbackNode = this.pendingContext = this.context = null),
              (this.callbackPriority = 0),
              (this.eventTimes = vn(0)),
              (this.expirationTimes = vn(-1)),
              (this.entangledLanes =
                this.finishedLanes =
                this.mutableReadLanes =
                this.expiredLanes =
                this.pingedLanes =
                this.suspendedLanes =
                this.pendingLanes =
                  0),
              (this.entanglements = vn(0)),
              (this.identifierPrefix = r),
              (this.onRecoverableError = a),
              (this.mutableSourceEagerHydrationData = null));
          }
          function zu(e, n, t, r, a, i, l, o, s) {
            return (
              (e = new Fu(e, n, t, o, s)),
              1 === n ? ((n = 1), !0 === i && (n |= 8)) : (n = 0),
              (i = Lu(3, null, null, n)),
              (e.current = i),
              (i.stateNode = e),
              (i.memoizedState = {
                element: r,
                isDehydrated: t,
                cache: null,
                transitions: null,
                pendingSuspenseBoundaries: null,
              }),
              Ti(i),
              e
            );
          }
          function Mu(e) {
            if (!e) return Ea;
            e: {
              if (Ue((e = e._reactInternals)) !== e || 1 !== e.tag)
                throw Error(i(170));
              var n = e;
              do {
                switch (n.tag) {
                  case 3:
                    n = n.stateNode.context;
                    break e;
                  case 1:
                    if (Ca(n.type)) {
                      n = n.stateNode.__reactInternalMemoizedMergedChildContext;
                      break e;
                    }
                }
                n = n.return;
              } while (null !== n);
              throw Error(i(171));
            }
            if (1 === e.tag) {
              var t = e.type;
              if (Ca(t)) return ja(e, t, n);
            }
            return n;
          }
          function Bu(e, n, t, r, a, i, l, o, s) {
            return (
              ((e = zu(t, r, !0, e, 0, i, 0, o, s)).context = Mu(null)),
              (t = e.current),
              ((i = Fi((r = Ys()), (a = eu(t)))).callback =
                null != n ? n : null),
              zi(t, i, a),
              (e.current.lanes = a),
              gn(e, a, r),
              tu(e, r),
              e
            );
          }
          function Uu(e, n, t, r) {
            var a = n.current,
              i = Ys(),
              l = eu(a);
            return (
              (t = Mu(t)),
              null === n.context ? (n.context = t) : (n.pendingContext = t),
              ((n = Fi(i, l)).payload = { element: e }),
              null !== (r = void 0 === r ? null : r) && (n.callback = r),
              null !== (e = zi(a, n, l)) && (nu(e, a, l, i), Mi(e, a, l)),
              l
            );
          }
          function Hu(e) {
            return (e = e.current).child
              ? (e.child.tag, e.child.stateNode)
              : null;
          }
          function Gu(e, n) {
            if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
              var t = e.retryLane;
              e.retryLane = 0 !== t && t < n ? t : n;
            }
          }
          function qu(e, n) {
            (Gu(e, n), (e = e.alternate) && Gu(e, n));
          }
          Is = function (e, n, t) {
            if (null !== e)
              if (e.memoizedProps !== n.pendingProps || _a.current) wo = !0;
              else {
                if (0 === (e.lanes & t) && !(128 & n.flags))
                  return (
                    (wo = !1),
                    (function (e, n, t) {
                      switch (n.tag) {
                        case 3:
                          (_o(n), pi());
                          break;
                        case 5:
                          Qi(n);
                          break;
                        case 1:
                          Ca(n.type) && Ta(n);
                          break;
                        case 4:
                          Xi(n, n.stateNode.containerInfo);
                          break;
                        case 10:
                          var r = n.type._context,
                            a = n.memoizedProps.value;
                          (Na(Ii, r._currentValue), (r._currentValue = a));
                          break;
                        case 13:
                          if (null !== (r = n.memoizedState))
                            return null !== r.dehydrated
                              ? (Na(Yi, 1 & Yi.current), (n.flags |= 128), null)
                              : 0 !== (t & n.child.childLanes)
                                ? To(e, n, t)
                                : (Na(Yi, 1 & Yi.current),
                                  null !== (e = Ho(e, n, t))
                                    ? e.sibling
                                    : null);
                          Na(Yi, 1 & Yi.current);
                          break;
                        case 19:
                          if (((r = 0 !== (t & n.childLanes)), 128 & e.flags)) {
                            if (r) return Bo(e, n, t);
                            n.flags |= 128;
                          }
                          if (
                            (null !== (a = n.memoizedState) &&
                              ((a.rendering = null),
                              (a.tail = null),
                              (a.lastEffect = null)),
                            Na(Yi, Yi.current),
                            r)
                          )
                            break;
                          return null;
                        case 22:
                        case 23:
                          return ((n.lanes = 0), So(e, n, t));
                      }
                      return Ho(e, n, t);
                    })(e, n, t)
                  );
                wo = !!(131072 & e.flags);
              }
            else ((wo = !1), ai && 1048576 & n.flags && Ya(n, Wa, n.index));
            switch (((n.lanes = 0), n.tag)) {
              case 2:
                var r = n.type;
                (Uo(e, n), (e = n.pendingProps));
                var a = Oa(n, Da.current);
                (_i(n, t), (a = hl(null, n, r, e, a, t)));
                var l = bl();
                return (
                  (n.flags |= 1),
                  "object" == typeof a &&
                  null !== a &&
                  "function" == typeof a.render &&
                  void 0 === a.$$typeof
                    ? ((n.tag = 1),
                      (n.memoizedState = null),
                      (n.updateQueue = null),
                      Ca(r) ? ((l = !0), Ta(n)) : (l = !1),
                      (n.memoizedState =
                        null !== a.state && void 0 !== a.state
                          ? a.state
                          : null),
                      Ti(n),
                      (a.updater = ro),
                      (n.stateNode = a),
                      (a._reactInternals = n),
                      oo(n, r, e, t),
                      (n = Do(null, n, r, !0, l, t)))
                    : ((n.tag = 0),
                      ai && l && ei(n),
                      yo(null, n, a, t),
                      (n = n.child)),
                  n
                );
              case 16:
                r = n.elementType;
                e: {
                  switch (
                    (Uo(e, n),
                    (e = n.pendingProps),
                    (r = (a = r._init)(r._payload)),
                    (n.type = r),
                    (a = n.tag =
                      (function (e) {
                        if ("function" == typeof e) return Ou(e) ? 1 : 0;
                        if (null != e) {
                          if ((e = e.$$typeof) === D) return 11;
                          if (e === O) return 14;
                        }
                        return 2;
                      })(r)),
                    (e = no(r, e)),
                    a)
                  ) {
                    case 0:
                      n = No(null, n, r, e, t);
                      break e;
                    case 1:
                      n = Eo(null, n, r, e, t);
                      break e;
                    case 11:
                      n = xo(null, n, r, e, t);
                      break e;
                    case 14:
                      n = Io(null, n, r, no(r.type, e), t);
                      break e;
                  }
                  throw Error(i(306, r, ""));
                }
                return n;
              case 0:
                return (
                  (r = n.type),
                  (a = n.pendingProps),
                  No(e, n, r, (a = n.elementType === r ? a : no(r, a)), t)
                );
              case 1:
                return (
                  (r = n.type),
                  (a = n.pendingProps),
                  Eo(e, n, r, (a = n.elementType === r ? a : no(r, a)), t)
                );
              case 3:
                e: {
                  if ((_o(n), null === e)) throw Error(i(387));
                  ((r = n.pendingProps),
                    (a = (l = n.memoizedState).element),
                    Vi(e, n),
                    Ui(n, r, null, t));
                  var o = n.memoizedState;
                  if (((r = o.element), l.isDehydrated)) {
                    if (
                      ((l = {
                        element: r,
                        isDehydrated: !1,
                        cache: o.cache,
                        pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                        transitions: o.transitions,
                      }),
                      (n.updateQueue.baseState = l),
                      (n.memoizedState = l),
                      256 & n.flags)
                    ) {
                      n = Lo(e, n, r, t, (a = so(Error(i(423)), n)));
                      break e;
                    }
                    if (r !== a) {
                      n = Lo(e, n, r, t, (a = so(Error(i(424)), n)));
                      break e;
                    }
                    for (
                      ri = ua(n.stateNode.containerInfo.firstChild),
                        ti = n,
                        ai = !0,
                        ii = null,
                        t = xi(n, null, r, t),
                        n.child = t;
                      t;

                    )
                      ((t.flags = (-3 & t.flags) | 4096), (t = t.sibling));
                  } else {
                    if ((pi(), r === a)) {
                      n = Ho(e, n, t);
                      break e;
                    }
                    yo(e, n, r, t);
                  }
                  n = n.child;
                }
                return n;
              case 5:
                return (
                  Qi(n),
                  null === e && ui(n),
                  (r = n.type),
                  (a = n.pendingProps),
                  (l = null !== e ? e.memoizedProps : null),
                  (o = a.children),
                  ta(r, a)
                    ? (o = null)
                    : null !== l && ta(r, l) && (n.flags |= 32),
                  Ao(e, n),
                  yo(e, n, o, t),
                  n.child
                );
              case 6:
                return (null === e && ui(n), null);
              case 13:
                return To(e, n, t);
              case 4:
                return (
                  Xi(n, n.stateNode.containerInfo),
                  (r = n.pendingProps),
                  null === e ? (n.child = yi(n, null, r, t)) : yo(e, n, r, t),
                  n.child
                );
              case 11:
                return (
                  (r = n.type),
                  (a = n.pendingProps),
                  xo(e, n, r, (a = n.elementType === r ? a : no(r, a)), t)
                );
              case 7:
                return (yo(e, n, n.pendingProps, t), n.child);
              case 8:
              case 12:
                return (yo(e, n, n.pendingProps.children, t), n.child);
              case 10:
                e: {
                  if (
                    ((r = n.type._context),
                    (a = n.pendingProps),
                    (l = n.memoizedProps),
                    (o = a.value),
                    Na(Ii, r._currentValue),
                    (r._currentValue = o),
                    null !== l)
                  )
                    if (or(l.value, o)) {
                      if (l.children === a.children && !_a.current) {
                        n = Ho(e, n, t);
                        break e;
                      }
                    } else
                      for (
                        null !== (l = n.child) && (l.return = n);
                        null !== l;

                      ) {
                        var s = l.dependencies;
                        if (null !== s) {
                          o = l.child;
                          for (var u = s.firstContext; null !== u; ) {
                            if (u.context === r) {
                              if (1 === l.tag) {
                                (u = Fi(-1, t & -t)).tag = 2;
                                var c = l.updateQueue;
                                if (null !== c) {
                                  var d = (c = c.shared).pending;
                                  (null === d
                                    ? (u.next = u)
                                    : ((u.next = d.next), (d.next = u)),
                                    (c.pending = u));
                                }
                              }
                              ((l.lanes |= t),
                                null !== (u = l.alternate) && (u.lanes |= t),
                                Di(l.return, t, n),
                                (s.lanes |= t));
                              break;
                            }
                            u = u.next;
                          }
                        } else if (10 === l.tag)
                          o = l.type === n.type ? null : l.child;
                        else if (18 === l.tag) {
                          if (null === (o = l.return)) throw Error(i(341));
                          ((o.lanes |= t),
                            null !== (s = o.alternate) && (s.lanes |= t),
                            Di(o, t, n),
                            (o = l.sibling));
                        } else o = l.child;
                        if (null !== o) o.return = l;
                        else
                          for (o = l; null !== o; ) {
                            if (o === n) {
                              o = null;
                              break;
                            }
                            if (null !== (l = o.sibling)) {
                              ((l.return = o.return), (o = l));
                              break;
                            }
                            o = o.return;
                          }
                        l = o;
                      }
                  (yo(e, n, a.children, t), (n = n.child));
                }
                return n;
              case 9:
                return (
                  (a = n.type),
                  (r = n.pendingProps.children),
                  _i(n, t),
                  (r = r((a = Li(a)))),
                  (n.flags |= 1),
                  yo(e, n, r, t),
                  n.child
                );
              case 14:
                return (
                  (a = no((r = n.type), n.pendingProps)),
                  Io(e, n, r, (a = no(r.type, a)), t)
                );
              case 15:
                return ko(e, n, n.type, n.pendingProps, t);
              case 17:
                return (
                  (r = n.type),
                  (a = n.pendingProps),
                  (a = n.elementType === r ? a : no(r, a)),
                  Uo(e, n),
                  (n.tag = 1),
                  Ca(r) ? ((e = !0), Ta(n)) : (e = !1),
                  _i(n, t),
                  io(n, r, a),
                  oo(n, r, a, t),
                  Do(null, n, r, !0, e, t)
                );
              case 19:
                return Bo(e, n, t);
              case 22:
                return So(e, n, t);
            }
            throw Error(i(156, n.tag));
          };
          var Wu =
            "function" == typeof reportError
              ? reportError
              : function (e) {
                  console.error(e);
                };
          function $u(e) {
            this._internalRoot = e;
          }
          function Ku(e) {
            this._internalRoot = e;
          }
          function Xu(e) {
            return !(
              !e ||
              (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
            );
          }
          function Ju(e) {
            return !(
              !e ||
              (1 !== e.nodeType &&
                9 !== e.nodeType &&
                11 !== e.nodeType &&
                (8 !== e.nodeType ||
                  " react-mount-point-unstable " !== e.nodeValue))
            );
          }
          function Qu() {}
          function Zu(e, n, t, r, a) {
            var i = t._reactRootContainer;
            if (i) {
              var l = i;
              if ("function" == typeof a) {
                var o = a;
                a = function () {
                  var e = Hu(l);
                  o.call(e);
                };
              }
              Uu(n, l, e, a);
            } else
              l = (function (e, n, t, r, a) {
                if (a) {
                  if ("function" == typeof r) {
                    var i = r;
                    r = function () {
                      var e = Hu(l);
                      i.call(e);
                    };
                  }
                  var l = Bu(n, r, e, 0, null, !1, 0, "", Qu);
                  return (
                    (e._reactRootContainer = l),
                    (e[ma] = l.current),
                    Ur(8 === e.nodeType ? e.parentNode : e),
                    uu(),
                    l
                  );
                }
                for (; (a = e.lastChild); ) e.removeChild(a);
                if ("function" == typeof r) {
                  var o = r;
                  r = function () {
                    var e = Hu(s);
                    o.call(e);
                  };
                }
                var s = zu(e, 0, !1, null, 0, !1, 0, "", Qu);
                return (
                  (e._reactRootContainer = s),
                  (e[ma] = s.current),
                  Ur(8 === e.nodeType ? e.parentNode : e),
                  uu(function () {
                    Uu(n, s, t, r);
                  }),
                  s
                );
              })(t, n, e, a, r);
            return Hu(l);
          }
          ((Ku.prototype.render = $u.prototype.render =
            function (e) {
              var n = this._internalRoot;
              if (null === n) throw Error(i(409));
              Uu(e, n, null, null);
            }),
            (Ku.prototype.unmount = $u.prototype.unmount =
              function () {
                var e = this._internalRoot;
                if (null !== e) {
                  this._internalRoot = null;
                  var n = e.containerInfo;
                  (uu(function () {
                    Uu(null, e, null, null);
                  }),
                    (n[ma] = null));
                }
              }),
            (Ku.prototype.unstable_scheduleHydration = function (e) {
              if (e) {
                var n = An();
                e = { blockedOn: null, target: e, priority: n };
                for (
                  var t = 0;
                  t < Pn.length && 0 !== n && n < Pn[t].priority;
                  t++
                );
                (Pn.splice(t, 0, e), 0 === t && Fn(e));
              }
            }),
            (In = function (e) {
              switch (e.tag) {
                case 3:
                  var n = e.stateNode;
                  if (n.current.memoizedState.isDehydrated) {
                    var t = fn(n.pendingLanes);
                    0 !== t &&
                      (wn(n, 1 | t),
                      tu(n, Qe()),
                      !(6 & Es) && ((Bs = Qe() + 500), Ua()));
                  }
                  break;
                case 13:
                  (uu(function () {
                    var n = Pi(e, 1);
                    if (null !== n) {
                      var t = Ys();
                      nu(n, e, 1, t);
                    }
                  }),
                    qu(e, 1));
              }
            }),
            (kn = function (e) {
              if (13 === e.tag) {
                var n = Pi(e, 134217728);
                (null !== n && nu(n, e, 134217728, Ys()), qu(e, 134217728));
              }
            }),
            (Sn = function (e) {
              if (13 === e.tag) {
                var n = eu(e),
                  t = Pi(e, n);
                (null !== t && nu(t, e, n, Ys()), qu(e, n));
              }
            }),
            (An = function () {
              return yn;
            }),
            (Nn = function (e, n) {
              var t = yn;
              try {
                return ((yn = e), n());
              } finally {
                yn = t;
              }
            }),
            (Ie = function (e, n, t) {
              switch (n) {
                case "input":
                  if (
                    (Z(e, t), (n = t.name), "radio" === t.type && null != n)
                  ) {
                    for (t = e; t.parentNode; ) t = t.parentNode;
                    for (
                      t = t.querySelectorAll(
                        "input[name=" +
                          JSON.stringify("" + n) +
                          '][type="radio"]',
                      ),
                        n = 0;
                      n < t.length;
                      n++
                    ) {
                      var r = t[n];
                      if (r !== e && r.form === e.form) {
                        var a = xa(r);
                        if (!a) throw Error(i(90));
                        ($(r), Z(r, a));
                      }
                    }
                  }
                  break;
                case "textarea":
                  ie(e, t);
                  break;
                case "select":
                  null != (n = t.value) && te(e, !!t.multiple, n, !1);
              }
            }),
            (De = su),
            (_e = uu));
          var Yu = {
              usingClientEntryPoint: !1,
              Events: [wa, ya, xa, Ne, Ee, su],
            },
            ec = {
              findFiberByHostInstance: ga,
              bundleType: 0,
              version: "18.3.1",
              rendererPackageName: "react-dom",
            },
            nc = {
              bundleType: ec.bundleType,
              version: ec.version,
              rendererPackageName: ec.rendererPackageName,
              rendererConfig: ec.rendererConfig,
              overrideHookState: null,
              overrideHookStateDeletePath: null,
              overrideHookStateRenamePath: null,
              overrideProps: null,
              overridePropsDeletePath: null,
              overridePropsRenamePath: null,
              setErrorHandler: null,
              setSuspenseHandler: null,
              scheduleUpdate: null,
              currentDispatcherRef: y.ReactCurrentDispatcher,
              findHostInstanceByFiber: function (e) {
                return null === (e = qe(e)) ? null : e.stateNode;
              },
              findFiberByHostInstance:
                ec.findFiberByHostInstance ||
                function () {
                  return null;
                },
              findHostInstancesForRefresh: null,
              scheduleRefresh: null,
              scheduleRoot: null,
              setRefreshHandler: null,
              getCurrentFiber: null,
              reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
            };
          if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
            var tc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (!tc.isDisabled && tc.supportsFiber)
              try {
                ((an = tc.inject(nc)), (ln = tc));
              } catch (ce) {}
          }
          ((n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Yu),
            (n.createPortal = function (e, n) {
              var t =
                2 < arguments.length && void 0 !== arguments[2]
                  ? arguments[2]
                  : null;
              if (!Xu(n)) throw Error(i(200));
              return (function (e, n, t) {
                var r =
                  3 < arguments.length && void 0 !== arguments[3]
                    ? arguments[3]
                    : null;
                return {
                  $$typeof: I,
                  key: null == r ? null : "" + r,
                  children: e,
                  containerInfo: n,
                  implementation: t,
                };
              })(e, n, null, t);
            }),
            (n.createRoot = function (e, n) {
              if (!Xu(e)) throw Error(i(299));
              var t = !1,
                r = "",
                a = Wu;
              return (
                null != n &&
                  (!0 === n.unstable_strictMode && (t = !0),
                  void 0 !== n.identifierPrefix && (r = n.identifierPrefix),
                  void 0 !== n.onRecoverableError &&
                    (a = n.onRecoverableError)),
                (n = zu(e, 1, !1, null, 0, t, 0, r, a)),
                (e[ma] = n.current),
                Ur(8 === e.nodeType ? e.parentNode : e),
                new $u(n)
              );
            }),
            (n.findDOMNode = function (e) {
              if (null == e) return null;
              if (1 === e.nodeType) return e;
              var n = e._reactInternals;
              if (void 0 === n) {
                if ("function" == typeof e.render) throw Error(i(188));
                throw ((e = Object.keys(e).join(",")), Error(i(268, e)));
              }
              return null === (e = qe(n)) ? null : e.stateNode;
            }),
            (n.flushSync = function (e) {
              return uu(e);
            }),
            (n.hydrate = function (e, n, t) {
              if (!Ju(n)) throw Error(i(200));
              return Zu(null, e, n, !0, t);
            }),
            (n.hydrateRoot = function (e, n, t) {
              if (!Xu(e)) throw Error(i(405));
              var r = (null != t && t.hydratedSources) || null,
                a = !1,
                l = "",
                o = Wu;
              if (
                (null != t &&
                  (!0 === t.unstable_strictMode && (a = !0),
                  void 0 !== t.identifierPrefix && (l = t.identifierPrefix),
                  void 0 !== t.onRecoverableError &&
                    (o = t.onRecoverableError)),
                (n = Bu(n, null, e, 1, null != t ? t : null, a, 0, l, o)),
                (e[ma] = n.current),
                Ur(e),
                r)
              )
                for (e = 0; e < r.length; e++)
                  ((a = (a = (t = r[e])._getVersion)(t._source)),
                    null == n.mutableSourceEagerHydrationData
                      ? (n.mutableSourceEagerHydrationData = [t, a])
                      : n.mutableSourceEagerHydrationData.push(t, a));
              return new Ku(n);
            }),
            (n.render = function (e, n, t) {
              if (!Ju(n)) throw Error(i(200));
              return Zu(null, e, n, !1, t);
            }),
            (n.unmountComponentAtNode = function (e) {
              if (!Ju(e)) throw Error(i(40));
              return (
                !!e._reactRootContainer &&
                (uu(function () {
                  Zu(null, null, e, !1, function () {
                    ((e._reactRootContainer = null), (e[ma] = null));
                  });
                }),
                !0)
              );
            }),
            (n.unstable_batchedUpdates = su),
            (n.unstable_renderSubtreeIntoContainer = function (e, n, t, r) {
              if (!Ju(t)) throw Error(i(200));
              if (null == e || void 0 === e._reactInternals) throw Error(i(38));
              return Zu(e, n, t, !1, r);
            }),
            (n.version = "18.3.1-next-f1338f8080-20240426"));
        },
        338(e, n, t) {
          var r = t(961);
          ((n.createRoot = r.createRoot), (n.hydrateRoot = r.hydrateRoot));
        },
        961(e, n, t) {
          (!(function e() {
            if (
              "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
              "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
            )
              try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
              } catch (e) {
                console.error(e);
              }
          })(),
            (e.exports = t(551)));
        },
        799(e, n) {
          var t = "function" == typeof Symbol && Symbol.for,
            r = t ? Symbol.for("react.element") : 60103,
            a = t ? Symbol.for("react.portal") : 60106,
            i = t ? Symbol.for("react.fragment") : 60107,
            l = t ? Symbol.for("react.strict_mode") : 60108,
            o = t ? Symbol.for("react.profiler") : 60114,
            s = t ? Symbol.for("react.provider") : 60109,
            u = t ? Symbol.for("react.context") : 60110,
            c = t ? Symbol.for("react.async_mode") : 60111,
            d = t ? Symbol.for("react.concurrent_mode") : 60111,
            f = t ? Symbol.for("react.forward_ref") : 60112,
            p = t ? Symbol.for("react.suspense") : 60113,
            m = t ? Symbol.for("react.suspense_list") : 60120,
            h = t ? Symbol.for("react.memo") : 60115,
            b = t ? Symbol.for("react.lazy") : 60116,
            v = t ? Symbol.for("react.block") : 60121,
            g = t ? Symbol.for("react.fundamental") : 60117,
            w = t ? Symbol.for("react.responder") : 60118,
            y = t ? Symbol.for("react.scope") : 60119;
          function x(e) {
            if ("object" == typeof e && null !== e) {
              var n = e.$$typeof;
              switch (n) {
                case r:
                  switch ((e = e.type)) {
                    case c:
                    case d:
                    case i:
                    case o:
                    case l:
                    case p:
                      return e;
                    default:
                      switch ((e = e && e.$$typeof)) {
                        case u:
                        case f:
                        case b:
                        case h:
                        case s:
                          return e;
                        default:
                          return n;
                      }
                  }
                case a:
                  return n;
              }
            }
          }
          function I(e) {
            return x(e) === d;
          }
          ((n.AsyncMode = c),
            (n.ConcurrentMode = d),
            (n.ContextConsumer = u),
            (n.ContextProvider = s),
            (n.Element = r),
            (n.ForwardRef = f),
            (n.Fragment = i),
            (n.Lazy = b),
            (n.Memo = h),
            (n.Portal = a),
            (n.Profiler = o),
            (n.StrictMode = l),
            (n.Suspense = p),
            (n.isAsyncMode = function (e) {
              return I(e) || x(e) === c;
            }),
            (n.isConcurrentMode = I),
            (n.isContextConsumer = function (e) {
              return x(e) === u;
            }),
            (n.isContextProvider = function (e) {
              return x(e) === s;
            }),
            (n.isElement = function (e) {
              return "object" == typeof e && null !== e && e.$$typeof === r;
            }),
            (n.isForwardRef = function (e) {
              return x(e) === f;
            }),
            (n.isFragment = function (e) {
              return x(e) === i;
            }),
            (n.isLazy = function (e) {
              return x(e) === b;
            }),
            (n.isMemo = function (e) {
              return x(e) === h;
            }),
            (n.isPortal = function (e) {
              return x(e) === a;
            }),
            (n.isProfiler = function (e) {
              return x(e) === o;
            }),
            (n.isStrictMode = function (e) {
              return x(e) === l;
            }),
            (n.isSuspense = function (e) {
              return x(e) === p;
            }),
            (n.isValidElementType = function (e) {
              return (
                "string" == typeof e ||
                "function" == typeof e ||
                e === i ||
                e === d ||
                e === o ||
                e === l ||
                e === p ||
                e === m ||
                ("object" == typeof e &&
                  null !== e &&
                  (e.$$typeof === b ||
                    e.$$typeof === h ||
                    e.$$typeof === s ||
                    e.$$typeof === u ||
                    e.$$typeof === f ||
                    e.$$typeof === g ||
                    e.$$typeof === w ||
                    e.$$typeof === y ||
                    e.$$typeof === v))
              );
            }),
            (n.typeOf = x));
        },
        363(e, n, t) {
          e.exports = t(799);
        },
        20(e, n, t) {
          var r = t(540),
            a = Symbol.for("react.element"),
            i = Symbol.for("react.fragment"),
            l = Object.prototype.hasOwnProperty,
            o =
              r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
                .ReactCurrentOwner,
            s = { key: !0, ref: !0, __self: !0, __source: !0 };
          function u(e, n, t) {
            var r,
              i = {},
              u = null,
              c = null;
            for (r in (void 0 !== t && (u = "" + t),
            void 0 !== n.key && (u = "" + n.key),
            void 0 !== n.ref && (c = n.ref),
            n))
              l.call(n, r) && !s.hasOwnProperty(r) && (i[r] = n[r]);
            if (e && e.defaultProps)
              for (r in (n = e.defaultProps)) void 0 === i[r] && (i[r] = n[r]);
            return {
              $$typeof: a,
              type: e,
              key: u,
              ref: c,
              props: i,
              _owner: o.current,
            };
          }
          ((n.Fragment = i), (n.jsx = u), (n.jsxs = u));
        },
        287(e, n) {
          var t = Symbol.for("react.element"),
            r = Symbol.for("react.portal"),
            a = Symbol.for("react.fragment"),
            i = Symbol.for("react.strict_mode"),
            l = Symbol.for("react.profiler"),
            o = Symbol.for("react.provider"),
            s = Symbol.for("react.context"),
            u = Symbol.for("react.forward_ref"),
            c = Symbol.for("react.suspense"),
            d = Symbol.for("react.memo"),
            f = Symbol.for("react.lazy"),
            p = Symbol.iterator,
            m = {
              isMounted: function () {
                return !1;
              },
              enqueueForceUpdate: function () {},
              enqueueReplaceState: function () {},
              enqueueSetState: function () {},
            },
            h = Object.assign,
            b = {};
          function v(e, n, t) {
            ((this.props = e),
              (this.context = n),
              (this.refs = b),
              (this.updater = t || m));
          }
          function g() {}
          function w(e, n, t) {
            ((this.props = e),
              (this.context = n),
              (this.refs = b),
              (this.updater = t || m));
          }
          ((v.prototype.isReactComponent = {}),
            (v.prototype.setState = function (e, n) {
              if ("object" != typeof e && "function" != typeof e && null != e)
                throw Error(
                  "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
                );
              this.updater.enqueueSetState(this, e, n, "setState");
            }),
            (v.prototype.forceUpdate = function (e) {
              this.updater.enqueueForceUpdate(this, e, "forceUpdate");
            }),
            (g.prototype = v.prototype));
          var y = (w.prototype = new g());
          ((y.constructor = w),
            h(y, v.prototype),
            (y.isPureReactComponent = !0));
          var x = Array.isArray,
            I = Object.prototype.hasOwnProperty,
            k = { current: null },
            S = { key: !0, ref: !0, __self: !0, __source: !0 };
          function A(e, n, r) {
            var a,
              i = {},
              l = null,
              o = null;
            if (null != n)
              for (a in (void 0 !== n.ref && (o = n.ref),
              void 0 !== n.key && (l = "" + n.key),
              n))
                I.call(n, a) && !S.hasOwnProperty(a) && (i[a] = n[a]);
            var s = arguments.length - 2;
            if (1 === s) i.children = r;
            else if (1 < s) {
              for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
              i.children = u;
            }
            if (e && e.defaultProps)
              for (a in (s = e.defaultProps)) void 0 === i[a] && (i[a] = s[a]);
            return {
              $$typeof: t,
              type: e,
              key: l,
              ref: o,
              props: i,
              _owner: k.current,
            };
          }
          function N(e) {
            return "object" == typeof e && null !== e && e.$$typeof === t;
          }
          var E = /\/+/g;
          function D(e, n) {
            return "object" == typeof e && null !== e && null != e.key
              ? (function (e) {
                  var n = { "=": "=0", ":": "=2" };
                  return (
                    "$" +
                    e.replace(/[=:]/g, function (e) {
                      return n[e];
                    })
                  );
                })("" + e.key)
              : n.toString(36);
          }
          function _(e, n, a, i, l) {
            var o = typeof e;
            ("undefined" !== o && "boolean" !== o) || (e = null);
            var s = !1;
            if (null === e) s = !0;
            else
              switch (o) {
                case "string":
                case "number":
                  s = !0;
                  break;
                case "object":
                  switch (e.$$typeof) {
                    case t:
                    case r:
                      s = !0;
                  }
              }
            if (s)
              return (
                (l = l((s = e))),
                (e = "" === i ? "." + D(s, 0) : i),
                x(l)
                  ? ((a = ""),
                    null != e && (a = e.replace(E, "$&/") + "/"),
                    _(l, n, a, "", function (e) {
                      return e;
                    }))
                  : null != l &&
                    (N(l) &&
                      (l = (function (e, n) {
                        return {
                          $$typeof: t,
                          type: e.type,
                          key: n,
                          ref: e.ref,
                          props: e.props,
                          _owner: e._owner,
                        };
                      })(
                        l,
                        a +
                          (!l.key || (s && s.key === l.key)
                            ? ""
                            : ("" + l.key).replace(E, "$&/") + "/") +
                          e,
                      )),
                    n.push(l)),
                1
              );
            if (((s = 0), (i = "" === i ? "." : i + ":"), x(e)))
              for (var u = 0; u < e.length; u++) {
                var c = i + D((o = e[u]), u);
                s += _(o, n, a, c, l);
              }
            else if (
              ((c = (function (e) {
                return null === e || "object" != typeof e
                  ? null
                  : "function" == typeof (e = (p && e[p]) || e["@@iterator"])
                    ? e
                    : null;
              })(e)),
              "function" == typeof c)
            )
              for (e = c.call(e), u = 0; !(o = e.next()).done; )
                s += _((o = o.value), n, a, (c = i + D(o, u++)), l);
            else if ("object" === o)
              throw (
                (n = String(e)),
                Error(
                  "Objects are not valid as a React child (found: " +
                    ("[object Object]" === n
                      ? "object with keys {" + Object.keys(e).join(", ") + "}"
                      : n) +
                    "). If you meant to render a collection of children, use an array instead.",
                )
              );
            return s;
          }
          function L(e, n, t) {
            if (null == e) return e;
            var r = [],
              a = 0;
            return (
              _(e, r, "", "", function (e) {
                return n.call(t, e, a++);
              }),
              r
            );
          }
          function O(e) {
            if (-1 === e._status) {
              var n = e._result;
              ((n = n()).then(
                function (n) {
                  (0 !== e._status && -1 !== e._status) ||
                    ((e._status = 1), (e._result = n));
                },
                function (n) {
                  (0 !== e._status && -1 !== e._status) ||
                    ((e._status = 2), (e._result = n));
                },
              ),
                -1 === e._status && ((e._status = 0), (e._result = n)));
            }
            if (1 === e._status) return e._result.default;
            throw e._result;
          }
          var C = { current: null },
            R = { transition: null },
            P = {
              ReactCurrentDispatcher: C,
              ReactCurrentBatchConfig: R,
              ReactCurrentOwner: k,
            };
          function j() {
            throw Error(
              "act(...) is not supported in production builds of React.",
            );
          }
          ((n.Children = {
            map: L,
            forEach: function (e, n, t) {
              L(
                e,
                function () {
                  n.apply(this, arguments);
                },
                t,
              );
            },
            count: function (e) {
              var n = 0;
              return (
                L(e, function () {
                  n++;
                }),
                n
              );
            },
            toArray: function (e) {
              return (
                L(e, function (e) {
                  return e;
                }) || []
              );
            },
            only: function (e) {
              if (!N(e))
                throw Error(
                  "React.Children.only expected to receive a single React element child.",
                );
              return e;
            },
          }),
            (n.Component = v),
            (n.Fragment = a),
            (n.Profiler = l),
            (n.PureComponent = w),
            (n.StrictMode = i),
            (n.Suspense = c),
            (n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = P),
            (n.act = j),
            (n.cloneElement = function (e, n, r) {
              if (null == e)
                throw Error(
                  "React.cloneElement(...): The argument must be a React element, but you passed " +
                    e +
                    ".",
                );
              var a = h({}, e.props),
                i = e.key,
                l = e.ref,
                o = e._owner;
              if (null != n) {
                if (
                  (void 0 !== n.ref && ((l = n.ref), (o = k.current)),
                  void 0 !== n.key && (i = "" + n.key),
                  e.type && e.type.defaultProps)
                )
                  var s = e.type.defaultProps;
                for (u in n)
                  I.call(n, u) &&
                    !S.hasOwnProperty(u) &&
                    (a[u] = void 0 === n[u] && void 0 !== s ? s[u] : n[u]);
              }
              var u = arguments.length - 2;
              if (1 === u) a.children = r;
              else if (1 < u) {
                s = Array(u);
                for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
                a.children = s;
              }
              return {
                $$typeof: t,
                type: e.type,
                key: i,
                ref: l,
                props: a,
                _owner: o,
              };
            }),
            (n.createContext = function (e) {
              return (
                ((e = {
                  $$typeof: s,
                  _currentValue: e,
                  _currentValue2: e,
                  _threadCount: 0,
                  Provider: null,
                  Consumer: null,
                  _defaultValue: null,
                  _globalName: null,
                }).Provider = { $$typeof: o, _context: e }),
                (e.Consumer = e)
              );
            }),
            (n.createElement = A),
            (n.createFactory = function (e) {
              var n = A.bind(null, e);
              return ((n.type = e), n);
            }),
            (n.createRef = function () {
              return { current: null };
            }),
            (n.forwardRef = function (e) {
              return { $$typeof: u, render: e };
            }),
            (n.isValidElement = N),
            (n.lazy = function (e) {
              return {
                $$typeof: f,
                _payload: { _status: -1, _result: e },
                _init: O,
              };
            }),
            (n.memo = function (e, n) {
              return { $$typeof: d, type: e, compare: void 0 === n ? null : n };
            }),
            (n.startTransition = function (e) {
              var n = R.transition;
              R.transition = {};
              try {
                e();
              } finally {
                R.transition = n;
              }
            }),
            (n.unstable_act = j),
            (n.useCallback = function (e, n) {
              return C.current.useCallback(e, n);
            }),
            (n.useContext = function (e) {
              return C.current.useContext(e);
            }),
            (n.useDebugValue = function () {}),
            (n.useDeferredValue = function (e) {
              return C.current.useDeferredValue(e);
            }),
            (n.useEffect = function (e, n) {
              return C.current.useEffect(e, n);
            }),
            (n.useId = function () {
              return C.current.useId();
            }),
            (n.useImperativeHandle = function (e, n, t) {
              return C.current.useImperativeHandle(e, n, t);
            }),
            (n.useInsertionEffect = function (e, n) {
              return C.current.useInsertionEffect(e, n);
            }),
            (n.useLayoutEffect = function (e, n) {
              return C.current.useLayoutEffect(e, n);
            }),
            (n.useMemo = function (e, n) {
              return C.current.useMemo(e, n);
            }),
            (n.useReducer = function (e, n, t) {
              return C.current.useReducer(e, n, t);
            }),
            (n.useRef = function (e) {
              return C.current.useRef(e);
            }),
            (n.useState = function (e) {
              return C.current.useState(e);
            }),
            (n.useSyncExternalStore = function (e, n, t) {
              return C.current.useSyncExternalStore(e, n, t);
            }),
            (n.useTransition = function () {
              return C.current.useTransition();
            }),
            (n.version = "18.3.1"));
        },
        540(e, n, t) {
          e.exports = t(287);
        },
        848(e, n, t) {
          e.exports = t(20);
        },
        463(e, n) {
          function t(e, n) {
            var t = e.length;
            e.push(n);
            e: for (; 0 < t; ) {
              var r = (t - 1) >>> 1,
                a = e[r];
              if (!(0 < i(a, n))) break e;
              ((e[r] = n), (e[t] = a), (t = r));
            }
          }
          function r(e) {
            return 0 === e.length ? null : e[0];
          }
          function a(e) {
            if (0 === e.length) return null;
            var n = e[0],
              t = e.pop();
            if (t !== n) {
              e[0] = t;
              e: for (var r = 0, a = e.length, l = a >>> 1; r < l; ) {
                var o = 2 * (r + 1) - 1,
                  s = e[o],
                  u = o + 1,
                  c = e[u];
                if (0 > i(s, t))
                  u < a && 0 > i(c, s)
                    ? ((e[r] = c), (e[u] = t), (r = u))
                    : ((e[r] = s), (e[o] = t), (r = o));
                else {
                  if (!(u < a && 0 > i(c, t))) break e;
                  ((e[r] = c), (e[u] = t), (r = u));
                }
              }
            }
            return n;
          }
          function i(e, n) {
            var t = e.sortIndex - n.sortIndex;
            return 0 !== t ? t : e.id - n.id;
          }
          if (
            "object" == typeof performance &&
            "function" == typeof performance.now
          ) {
            var l = performance;
            n.unstable_now = function () {
              return l.now();
            };
          } else {
            var o = Date,
              s = o.now();
            n.unstable_now = function () {
              return o.now() - s;
            };
          }
          var u = [],
            c = [],
            d = 1,
            f = null,
            p = 3,
            m = !1,
            h = !1,
            b = !1,
            v = "function" == typeof setTimeout ? setTimeout : null,
            g = "function" == typeof clearTimeout ? clearTimeout : null,
            w = "undefined" != typeof setImmediate ? setImmediate : null;
          function y(e) {
            for (var n = r(c); null !== n; ) {
              if (null === n.callback) a(c);
              else {
                if (!(n.startTime <= e)) break;
                (a(c), (n.sortIndex = n.expirationTime), t(u, n));
              }
              n = r(c);
            }
          }
          function x(e) {
            if (((b = !1), y(e), !h))
              if (null !== r(u)) ((h = !0), R(I));
              else {
                var n = r(c);
                null !== n && P(x, n.startTime - e);
              }
          }
          function I(e, t) {
            ((h = !1), b && ((b = !1), g(N), (N = -1)), (m = !0));
            var i = p;
            try {
              for (
                y(t), f = r(u);
                null !== f && (!(f.expirationTime > t) || (e && !_()));

              ) {
                var l = f.callback;
                if ("function" == typeof l) {
                  ((f.callback = null), (p = f.priorityLevel));
                  var o = l(f.expirationTime <= t);
                  ((t = n.unstable_now()),
                    "function" == typeof o
                      ? (f.callback = o)
                      : f === r(u) && a(u),
                    y(t));
                } else a(u);
                f = r(u);
              }
              if (null !== f) var s = !0;
              else {
                var d = r(c);
                (null !== d && P(x, d.startTime - t), (s = !1));
              }
              return s;
            } finally {
              ((f = null), (p = i), (m = !1));
            }
          }
          "undefined" != typeof navigator &&
            void 0 !== navigator.scheduling &&
            void 0 !== navigator.scheduling.isInputPending &&
            navigator.scheduling.isInputPending.bind(navigator.scheduling);
          var k,
            S = !1,
            A = null,
            N = -1,
            E = 5,
            D = -1;
          function _() {
            return !(n.unstable_now() - D < E);
          }
          function L() {
            if (null !== A) {
              var e = n.unstable_now();
              D = e;
              var t = !0;
              try {
                t = A(!0, e);
              } finally {
                t ? k() : ((S = !1), (A = null));
              }
            } else S = !1;
          }
          if ("function" == typeof w)
            k = function () {
              w(L);
            };
          else if ("undefined" != typeof MessageChannel) {
            var O = new MessageChannel(),
              C = O.port2;
            ((O.port1.onmessage = L),
              (k = function () {
                C.postMessage(null);
              }));
          } else
            k = function () {
              v(L, 0);
            };
          function R(e) {
            ((A = e), S || ((S = !0), k()));
          }
          function P(e, t) {
            N = v(function () {
              e(n.unstable_now());
            }, t);
          }
          ((n.unstable_IdlePriority = 5),
            (n.unstable_ImmediatePriority = 1),
            (n.unstable_LowPriority = 4),
            (n.unstable_NormalPriority = 3),
            (n.unstable_Profiling = null),
            (n.unstable_UserBlockingPriority = 2),
            (n.unstable_cancelCallback = function (e) {
              e.callback = null;
            }),
            (n.unstable_continueExecution = function () {
              h || m || ((h = !0), R(I));
            }),
            (n.unstable_forceFrameRate = function (e) {
              0 > e || 125 < e
                ? console.error(
                    "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                  )
                : (E = 0 < e ? Math.floor(1e3 / e) : 5);
            }),
            (n.unstable_getCurrentPriorityLevel = function () {
              return p;
            }),
            (n.unstable_getFirstCallbackNode = function () {
              return r(u);
            }),
            (n.unstable_next = function (e) {
              switch (p) {
                case 1:
                case 2:
                case 3:
                  var n = 3;
                  break;
                default:
                  n = p;
              }
              var t = p;
              p = n;
              try {
                return e();
              } finally {
                p = t;
              }
            }),
            (n.unstable_pauseExecution = function () {}),
            (n.unstable_requestPaint = function () {}),
            (n.unstable_runWithPriority = function (e, n) {
              switch (e) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                  break;
                default:
                  e = 3;
              }
              var t = p;
              p = e;
              try {
                return n();
              } finally {
                p = t;
              }
            }),
            (n.unstable_scheduleCallback = function (e, a, i) {
              var l = n.unstable_now();
              switch (
                ((i =
                  "object" == typeof i &&
                  null !== i &&
                  "number" == typeof (i = i.delay) &&
                  0 < i
                    ? l + i
                    : l),
                e)
              ) {
                case 1:
                  var o = -1;
                  break;
                case 2:
                  o = 250;
                  break;
                case 5:
                  o = 1073741823;
                  break;
                case 4:
                  o = 1e4;
                  break;
                default:
                  o = 5e3;
              }
              return (
                (e = {
                  id: d++,
                  callback: a,
                  priorityLevel: e,
                  startTime: i,
                  expirationTime: (o = i + o),
                  sortIndex: -1,
                }),
                i > l
                  ? ((e.sortIndex = i),
                    t(c, e),
                    null === r(u) &&
                      e === r(c) &&
                      (b ? (g(N), (N = -1)) : (b = !0), P(x, i - l)))
                  : ((e.sortIndex = o), t(u, e), h || m || ((h = !0), R(I))),
                e
              );
            }),
            (n.unstable_shouldYield = _),
            (n.unstable_wrapCallback = function (e) {
              var n = p;
              return function () {
                var t = p;
                p = n;
                try {
                  return e.apply(this, arguments);
                } finally {
                  p = t;
                }
              };
            }));
        },
        982(e, n, t) {
          e.exports = t(463);
        },
        72(e) {
          var n = [];
          function t(e) {
            for (var t = -1, r = 0; r < n.length; r++)
              if (n[r].identifier === e) {
                t = r;
                break;
              }
            return t;
          }
          function r(e, r) {
            for (var i = {}, l = [], o = 0; o < e.length; o++) {
              var s = e[o],
                u = r.base ? s[0] + r.base : s[0],
                c = i[u] || 0,
                d = "".concat(u, " ").concat(c);
              i[u] = c + 1;
              var f = t(d),
                p = {
                  css: s[1],
                  media: s[2],
                  sourceMap: s[3],
                  supports: s[4],
                  layer: s[5],
                };
              if (-1 !== f) (n[f].references++, n[f].updater(p));
              else {
                var m = a(p, r);
                ((r.byIndex = o),
                  n.splice(o, 0, { identifier: d, updater: m, references: 1 }));
              }
              l.push(d);
            }
            return l;
          }
          function a(e, n) {
            var t = n.domAPI(n);
            return (
              t.update(e),
              function (n) {
                if (n) {
                  if (
                    n.css === e.css &&
                    n.media === e.media &&
                    n.sourceMap === e.sourceMap &&
                    n.supports === e.supports &&
                    n.layer === e.layer
                  )
                    return;
                  t.update((e = n));
                } else t.remove();
              }
            );
          }
          e.exports = function (e, a) {
            var i = r((e = e || []), (a = a || {}));
            return function (e) {
              e = e || [];
              for (var l = 0; l < i.length; l++) {
                var o = t(i[l]);
                n[o].references--;
              }
              for (var s = r(e, a), u = 0; u < i.length; u++) {
                var c = t(i[u]);
                0 === n[c].references && (n[c].updater(), n.splice(c, 1));
              }
              i = s;
            };
          };
        },
        659(e) {
          var n = {};
          e.exports = function (e, t) {
            var r = (function (e) {
              if (void 0 === n[e]) {
                var t = document.querySelector(e);
                if (
                  window.HTMLIFrameElement &&
                  t instanceof window.HTMLIFrameElement
                )
                  try {
                    t = t.contentDocument.head;
                  } catch (e) {
                    t = null;
                  }
                n[e] = t;
              }
              return n[e];
            })(e);
            if (!r)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
              );
            r.appendChild(t);
          };
        },
        159(e) {
          e.exports = function (e) {
            var n = document.createElement("style");
            return (
              e.setAttributes(n, e.attributes),
              e.insert(n, e.options),
              n
            );
          };
        },
        56(e, n, t) {
          e.exports = function (e) {
            var n = t.nc;
            n && e.setAttribute("nonce", n);
          };
        },
        825(e) {
          e.exports = function (e) {
            if ("undefined" == typeof document)
              return { update: function () {}, remove: function () {} };
            var n = e.insertStyleElement(e);
            return {
              update: function (t) {
                !(function (e, n, t) {
                  var r = "";
                  (t.supports && (r += "@supports (".concat(t.supports, ") {")),
                    t.media && (r += "@media ".concat(t.media, " {")));
                  var a = void 0 !== t.layer;
                  (a &&
                    (r += "@layer".concat(
                      t.layer.length > 0 ? " ".concat(t.layer) : "",
                      " {",
                    )),
                    (r += t.css),
                    a && (r += "}"),
                    t.media && (r += "}"),
                    t.supports && (r += "}"));
                  var i = t.sourceMap;
                  (i &&
                    "undefined" != typeof btoa &&
                    (r +=
                      "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                        btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                        " */",
                      )),
                    n.styleTagTransform(r, e, n.options));
                })(n, e, t);
              },
              remove: function () {
                !(function (e) {
                  if (null === e.parentNode) return !1;
                  e.parentNode.removeChild(e);
                })(n);
              },
            };
          };
        },
        113(e) {
          e.exports = function (e, n) {
            if (n.styleSheet) n.styleSheet.cssText = e;
            else {
              for (; n.firstChild; ) n.removeChild(n.firstChild);
              n.appendChild(document.createTextNode(e));
            }
          };
        },
        301(e) {
          e.exports =
            "data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 width=%278%27 height=%2714%27 viewBox=%270 0 8 14%27 fill=%27none%27><path d=%27M1 1l6 6-6 6%27 stroke=%27%23EEEEEE%27 stroke-width=%272%27 stroke-linecap=%27square%27/></svg>";
        },
        425(e, n, t) {
          function r(e, n) {
            return function () {
              return e.apply(n, arguments);
            };
          }
          const { toString: a } = Object.prototype,
            { getPrototypeOf: i } = Object,
            { iterator: l, toStringTag: o } = Symbol,
            s =
              ((u = Object.create(null)),
              (e) => {
                const n = a.call(e);
                return u[n] || (u[n] = n.slice(8, -1).toLowerCase());
              });
          var u;
          const c = (e) => ((e = e.toLowerCase()), (n) => s(n) === e),
            d = (e) => (n) => typeof n === e,
            { isArray: f } = Array,
            p = d("undefined");
          function m(e) {
            return (
              null !== e &&
              !p(e) &&
              null !== e.constructor &&
              !p(e.constructor) &&
              v(e.constructor.isBuffer) &&
              e.constructor.isBuffer(e)
            );
          }
          const h = c("ArrayBuffer"),
            b = d("string"),
            v = d("function"),
            g = d("number"),
            w = (e) => null !== e && "object" == typeof e,
            y = (e) => {
              if ("object" !== s(e)) return !1;
              const n = i(e);
              return !(
                (null !== n &&
                  n !== Object.prototype &&
                  null !== Object.getPrototypeOf(n)) ||
                o in e ||
                l in e
              );
            },
            x = c("Date"),
            I = c("File"),
            k = c("Blob"),
            S = c("FileList"),
            A =
              "undefined" != typeof globalThis
                ? globalThis
                : "undefined" != typeof self
                  ? self
                  : "undefined" != typeof window
                    ? window
                    : void 0 !== t.g
                      ? t.g
                      : {},
            N = void 0 !== A.FormData ? A.FormData : void 0,
            E = c("URLSearchParams"),
            [D, _, L, O] = [
              "ReadableStream",
              "Request",
              "Response",
              "Headers",
            ].map(c);
          function C(e, n, { allOwnKeys: t = !1 } = {}) {
            if (null == e) return;
            let r, a;
            if (("object" != typeof e && (e = [e]), f(e)))
              for (r = 0, a = e.length; r < a; r++) n.call(null, e[r], r, e);
            else {
              if (m(e)) return;
              const a = t ? Object.getOwnPropertyNames(e) : Object.keys(e),
                i = a.length;
              let l;
              for (r = 0; r < i; r++) ((l = a[r]), n.call(null, e[l], l, e));
            }
          }
          function R(e, n) {
            if (m(e)) return null;
            n = n.toLowerCase();
            const t = Object.keys(e);
            let r,
              a = t.length;
            for (; a-- > 0; ) if (((r = t[a]), n === r.toLowerCase())) return r;
            return null;
          }
          const P =
              "undefined" != typeof globalThis
                ? globalThis
                : "undefined" != typeof self
                  ? self
                  : "undefined" != typeof window
                    ? window
                    : t.g,
            j = (e) => !p(e) && e !== P,
            T =
              ((V = "undefined" != typeof Uint8Array && i(Uint8Array)),
              (e) => V && e instanceof V);
          var V;
          const F = c("HTMLFormElement"),
            z = (
              ({ hasOwnProperty: e }) =>
              (n, t) =>
                e.call(n, t)
            )(Object.prototype),
            M = c("RegExp"),
            B = (e, n) => {
              const t = Object.getOwnPropertyDescriptors(e),
                r = {};
              (C(t, (t, a) => {
                let i;
                !1 !== (i = n(t, a, e)) && (r[a] = i || t);
              }),
                Object.defineProperties(e, r));
            },
            U = c("AsyncFunction"),
            H =
              ((G = "function" == typeof setImmediate),
              (q = v(P.postMessage)),
              G
                ? setImmediate
                : q
                  ? ((e, n) => (
                      P.addEventListener(
                        "message",
                        ({ source: t, data: r }) => {
                          t === P && r === e && n.length && n.shift()();
                        },
                        !1,
                      ),
                      (t) => {
                        (n.push(t), P.postMessage(e, "*"));
                      }
                    ))(`axios@${Math.random()}`, [])
                  : (e) => setTimeout(e));
          var G, q;
          const W =
            "undefined" != typeof queueMicrotask
              ? queueMicrotask.bind(P)
              : ("undefined" != typeof process && process.nextTick) || H;
          var $ = {
            isArray: f,
            isArrayBuffer: h,
            isBuffer: m,
            isFormData: (e) => {
              if (!e) return !1;
              if (N && e instanceof N) return !0;
              const n = i(e);
              if (!n || n === Object.prototype) return !1;
              if (!v(e.append)) return !1;
              const t = s(e);
              return (
                "formdata" === t ||
                ("object" === t &&
                  v(e.toString) &&
                  "[object FormData]" === e.toString())
              );
            },
            isArrayBufferView: function (e) {
              let n;
              return (
                (n =
                  "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
                    ? ArrayBuffer.isView(e)
                    : e && e.buffer && h(e.buffer)),
                n
              );
            },
            isString: b,
            isNumber: g,
            isBoolean: (e) => !0 === e || !1 === e,
            isObject: w,
            isPlainObject: y,
            isEmptyObject: (e) => {
              if (!w(e) || m(e)) return !1;
              try {
                return (
                  0 === Object.keys(e).length &&
                  Object.getPrototypeOf(e) === Object.prototype
                );
              } catch (e) {
                return !1;
              }
            },
            isReadableStream: D,
            isRequest: _,
            isResponse: L,
            isHeaders: O,
            isUndefined: p,
            isDate: x,
            isFile: I,
            isReactNativeBlob: (e) => !(!e || void 0 === e.uri),
            isReactNative: (e) => e && void 0 !== e.getParts,
            isBlob: k,
            isRegExp: M,
            isFunction: v,
            isStream: (e) => w(e) && v(e.pipe),
            isURLSearchParams: E,
            isTypedArray: T,
            isFileList: S,
            forEach: C,
            merge: function e(...n) {
              const { caseless: t, skipUndefined: r } = (j(this) && this) || {},
                a = {},
                i = (n, i) => {
                  if (
                    "__proto__" === i ||
                    "constructor" === i ||
                    "prototype" === i
                  )
                    return;
                  const l = (t && R(a, i)) || i,
                    o = z(a, l) ? a[l] : void 0;
                  y(o) && y(n)
                    ? (a[l] = e(o, n))
                    : y(n)
                      ? (a[l] = e({}, n))
                      : f(n)
                        ? (a[l] = n.slice())
                        : (r && p(n)) || (a[l] = n);
                };
              for (let e = 0, t = n.length; e < t; e++) n[e] && C(n[e], i);
              return a;
            },
            extend: (e, n, t, { allOwnKeys: a } = {}) => (
              C(
                n,
                (n, a) => {
                  t && v(n)
                    ? Object.defineProperty(e, a, {
                        __proto__: null,
                        value: r(n, t),
                        writable: !0,
                        enumerable: !0,
                        configurable: !0,
                      })
                    : Object.defineProperty(e, a, {
                        __proto__: null,
                        value: n,
                        writable: !0,
                        enumerable: !0,
                        configurable: !0,
                      });
                },
                { allOwnKeys: a },
              ),
              e
            ),
            trim: (e) =>
              e.trim
                ? e.trim()
                : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
            stripBOM: (e) => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
            inherits: (e, n, t, r) => {
              ((e.prototype = Object.create(n.prototype, r)),
                Object.defineProperty(e.prototype, "constructor", {
                  __proto__: null,
                  value: e,
                  writable: !0,
                  enumerable: !1,
                  configurable: !0,
                }),
                Object.defineProperty(e, "super", {
                  __proto__: null,
                  value: n.prototype,
                }),
                t && Object.assign(e.prototype, t));
            },
            toFlatObject: (e, n, t, r) => {
              let a, l, o;
              const s = {};
              if (((n = n || {}), null == e)) return n;
              do {
                for (a = Object.getOwnPropertyNames(e), l = a.length; l-- > 0; )
                  ((o = a[l]),
                    (r && !r(o, e, n)) || s[o] || ((n[o] = e[o]), (s[o] = !0)));
                e = !1 !== t && i(e);
              } while (e && (!t || t(e, n)) && e !== Object.prototype);
              return n;
            },
            kindOf: s,
            kindOfTest: c,
            endsWith: (e, n, t) => {
              ((e = String(e)),
                (void 0 === t || t > e.length) && (t = e.length),
                (t -= n.length));
              const r = e.indexOf(n, t);
              return -1 !== r && r === t;
            },
            toArray: (e) => {
              if (!e) return null;
              if (f(e)) return e;
              let n = e.length;
              if (!g(n)) return null;
              const t = new Array(n);
              for (; n-- > 0; ) t[n] = e[n];
              return t;
            },
            forEachEntry: (e, n) => {
              const t = (e && e[l]).call(e);
              let r;
              for (; (r = t.next()) && !r.done; ) {
                const t = r.value;
                n.call(e, t[0], t[1]);
              }
            },
            matchAll: (e, n) => {
              let t;
              const r = [];
              for (; null !== (t = e.exec(n)); ) r.push(t);
              return r;
            },
            isHTMLForm: F,
            hasOwnProperty: z,
            hasOwnProp: z,
            reduceDescriptors: B,
            freezeMethods: (e) => {
              B(e, (n, t) => {
                if (v(e) && ["arguments", "caller", "callee"].includes(t))
                  return !1;
                const r = e[t];
                v(r) &&
                  ((n.enumerable = !1),
                  "writable" in n
                    ? (n.writable = !1)
                    : n.set ||
                      (n.set = () => {
                        throw Error(
                          "Can not rewrite read-only method '" + t + "'",
                        );
                      }));
              });
            },
            toObjectSet: (e, n) => {
              const t = {},
                r = (e) => {
                  e.forEach((e) => {
                    t[e] = !0;
                  });
                };
              return (f(e) ? r(e) : r(String(e).split(n)), t);
            },
            toCamelCase: (e) =>
              e
                .toLowerCase()
                .replace(/[-_\s]([a-z\d])(\w*)/g, function (e, n, t) {
                  return n.toUpperCase() + t;
                }),
            noop: () => {},
            toFiniteNumber: (e, n) =>
              null != e && Number.isFinite((e = +e)) ? e : n,
            findKey: R,
            global: P,
            isContextDefined: j,
            isSpecCompliantForm: function (e) {
              return !!(e && v(e.append) && "FormData" === e[o] && e[l]);
            },
            toJSONObject: (e) => {
              const n = new Array(10),
                t = (e, r) => {
                  if (w(e)) {
                    if (n.indexOf(e) >= 0) return;
                    if (m(e)) return e;
                    if (!("toJSON" in e)) {
                      n[r] = e;
                      const a = f(e) ? [] : {};
                      return (
                        C(e, (e, n) => {
                          const i = t(e, r + 1);
                          !p(i) && (a[n] = i);
                        }),
                        (n[r] = void 0),
                        a
                      );
                    }
                  }
                  return e;
                };
              return t(e, 0);
            },
            isAsyncFn: U,
            isThenable: (e) => e && (w(e) || v(e)) && v(e.then) && v(e.catch),
            setImmediate: H,
            asap: W,
            isIterable: (e) => null != e && v(e[l]),
          };
          const K = $.toObjectSet([
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
            ]),
            X = Symbol("internals"),
            J = /[^\x09\x20-\x7E\x80-\xFF]/g;
          function Q(e) {
            return e && String(e).trim().toLowerCase();
          }
          function Z(e) {
            return !1 === e || null == e
              ? e
              : $.isArray(e)
                ? e.map(Z)
                : (function (e) {
                    let n = 0,
                      t = e.length;
                    for (; n < t; ) {
                      const t = e.charCodeAt(n);
                      if (9 !== t && 32 !== t) break;
                      n += 1;
                    }
                    for (; t > n; ) {
                      const n = e.charCodeAt(t - 1);
                      if (9 !== n && 32 !== n) break;
                      t -= 1;
                    }
                    return 0 === n && t === e.length ? e : e.slice(n, t);
                  })(String(e).replace(J, ""));
          }
          function Y(e, n, t, r, a) {
            return $.isFunction(r)
              ? r.call(this, n, t)
              : (a && (n = t),
                $.isString(n)
                  ? $.isString(r)
                    ? -1 !== n.indexOf(r)
                    : $.isRegExp(r)
                      ? r.test(n)
                      : void 0
                  : void 0);
          }
          class ee {
            constructor(e) {
              e && this.set(e);
            }
            set(e, n, t) {
              const r = this;
              function a(e, n, t) {
                const a = Q(n);
                if (!a)
                  throw new Error("header name must be a non-empty string");
                const i = $.findKey(r, a);
                (!i ||
                  void 0 === r[i] ||
                  !0 === t ||
                  (void 0 === t && !1 !== r[i])) &&
                  (r[i || n] = Z(e));
              }
              const i = (e, n) => $.forEach(e, (e, t) => a(e, t, n));
              if ($.isPlainObject(e) || e instanceof this.constructor) i(e, n);
              else if (
                $.isString(e) &&
                (e = e.trim()) &&
                !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
              )
                i(
                  ((e) => {
                    const n = {};
                    let t, r, a;
                    return (
                      e &&
                        e.split("\n").forEach(function (e) {
                          ((a = e.indexOf(":")),
                            (t = e.substring(0, a).trim().toLowerCase()),
                            (r = e.substring(a + 1).trim()),
                            !t ||
                              (n[t] && K[t]) ||
                              ("set-cookie" === t
                                ? n[t]
                                  ? n[t].push(r)
                                  : (n[t] = [r])
                                : (n[t] = n[t] ? n[t] + ", " + r : r)));
                        }),
                      n
                    );
                  })(e),
                  n,
                );
              else if ($.isObject(e) && $.isIterable(e)) {
                let t,
                  r,
                  a = {};
                for (const n of e) {
                  if (!$.isArray(n))
                    throw TypeError(
                      "Object iterator must return a key-value pair",
                    );
                  a[(r = n[0])] = (t = a[r])
                    ? $.isArray(t)
                      ? [...t, n[1]]
                      : [t, n[1]]
                    : n[1];
                }
                i(a, n);
              } else null != e && a(n, e, t);
              return this;
            }
            get(e, n) {
              if ((e = Q(e))) {
                const t = $.findKey(this, e);
                if (t) {
                  const e = this[t];
                  if (!n) return e;
                  if (!0 === n)
                    return (function (e) {
                      const n = Object.create(null),
                        t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                      let r;
                      for (; (r = t.exec(e)); ) n[r[1]] = r[2];
                      return n;
                    })(e);
                  if ($.isFunction(n)) return n.call(this, e, t);
                  if ($.isRegExp(n)) return n.exec(e);
                  throw new TypeError("parser must be boolean|regexp|function");
                }
              }
            }
            has(e, n) {
              if ((e = Q(e))) {
                const t = $.findKey(this, e);
                return !(
                  !t ||
                  void 0 === this[t] ||
                  (n && !Y(0, this[t], t, n))
                );
              }
              return !1;
            }
            delete(e, n) {
              const t = this;
              let r = !1;
              function a(e) {
                if ((e = Q(e))) {
                  const a = $.findKey(t, e);
                  !a || (n && !Y(0, t[a], a, n)) || (delete t[a], (r = !0));
                }
              }
              return ($.isArray(e) ? e.forEach(a) : a(e), r);
            }
            clear(e) {
              const n = Object.keys(this);
              let t = n.length,
                r = !1;
              for (; t--; ) {
                const a = n[t];
                (e && !Y(0, this[a], a, e, !0)) || (delete this[a], (r = !0));
              }
              return r;
            }
            normalize(e) {
              const n = this,
                t = {};
              return (
                $.forEach(this, (r, a) => {
                  const i = $.findKey(t, a);
                  if (i) return ((n[i] = Z(r)), void delete n[a]);
                  const l = e
                    ? (function (e) {
                        return e
                          .trim()
                          .toLowerCase()
                          .replace(
                            /([a-z\d])(\w*)/g,
                            (e, n, t) => n.toUpperCase() + t,
                          );
                      })(a)
                    : String(a).trim();
                  (l !== a && delete n[a], (n[l] = Z(r)), (t[l] = !0));
                }),
                this
              );
            }
            concat(...e) {
              return this.constructor.concat(this, ...e);
            }
            toJSON(e) {
              const n = Object.create(null);
              return (
                $.forEach(this, (t, r) => {
                  null != t &&
                    !1 !== t &&
                    (n[r] = e && $.isArray(t) ? t.join(", ") : t);
                }),
                n
              );
            }
            [Symbol.iterator]() {
              return Object.entries(this.toJSON())[Symbol.iterator]();
            }
            toString() {
              return Object.entries(this.toJSON())
                .map(([e, n]) => e + ": " + n)
                .join("\n");
            }
            getSetCookie() {
              return this.get("set-cookie") || [];
            }
            get [Symbol.toStringTag]() {
              return "AxiosHeaders";
            }
            static from(e) {
              return e instanceof this ? e : new this(e);
            }
            static concat(e, ...n) {
              const t = new this(e);
              return (n.forEach((e) => t.set(e)), t);
            }
            static accessor(e) {
              const n = (this[X] = this[X] = { accessors: {} }).accessors,
                t = this.prototype;
              function r(e) {
                const r = Q(e);
                n[r] ||
                  ((function (e, n) {
                    const t = $.toCamelCase(" " + n);
                    ["get", "set", "has"].forEach((r) => {
                      Object.defineProperty(e, r + t, {
                        __proto__: null,
                        value: function (e, t, a) {
                          return this[r].call(this, n, e, t, a);
                        },
                        configurable: !0,
                      });
                    });
                  })(t, e),
                  (n[r] = !0));
              }
              return ($.isArray(e) ? e.forEach(r) : r(e), this);
            }
          }
          (ee.accessor([
            "Content-Type",
            "Content-Length",
            "Accept",
            "Accept-Encoding",
            "User-Agent",
            "Authorization",
          ]),
            $.reduceDescriptors(ee.prototype, ({ value: e }, n) => {
              let t = n[0].toUpperCase() + n.slice(1);
              return {
                get: () => e,
                set(e) {
                  this[t] = e;
                },
              };
            }),
            $.freezeMethods(ee));
          class ne extends Error {
            static from(e, n, t, r, a, i) {
              const l = new ne(e.message, n || e.code, t, r, a);
              return (
                (l.cause = e),
                (l.name = e.name),
                null != e.status && null == l.status && (l.status = e.status),
                i && Object.assign(l, i),
                l
              );
            }
            constructor(e, n, t, r, a) {
              (super(e),
                Object.defineProperty(this, "message", {
                  __proto__: null,
                  value: e,
                  enumerable: !0,
                  writable: !0,
                  configurable: !0,
                }),
                (this.name = "AxiosError"),
                (this.isAxiosError = !0),
                n && (this.code = n),
                t && (this.config = t),
                r && (this.request = r),
                a && ((this.response = a), (this.status = a.status)));
            }
            toJSON() {
              const e = this.config,
                n = e && $.hasOwnProp(e, "redact") ? e.redact : void 0,
                t =
                  $.isArray(n) && n.length > 0
                    ? (function (e, n) {
                        const t = new Set(
                            n.map((e) => String(e).toLowerCase()),
                          ),
                          r = [],
                          a = (e) => {
                            if (null === e || "object" != typeof e) return e;
                            if ($.isBuffer(e)) return e;
                            if (-1 !== r.indexOf(e)) return;
                            let n;
                            if (
                              (e instanceof ee && (e = e.toJSON()),
                              r.push(e),
                              $.isArray(e))
                            )
                              ((n = []),
                                e.forEach((e, t) => {
                                  const r = a(e);
                                  $.isUndefined(r) || (n[t] = r);
                                }));
                            else {
                              if (
                                !$.isPlainObject(e) &&
                                (function (e) {
                                  if ($.hasOwnProp(e, "toJSON")) return !0;
                                  let n = Object.getPrototypeOf(e);
                                  for (; n && n !== Object.prototype; ) {
                                    if ($.hasOwnProp(n, "toJSON")) return !0;
                                    n = Object.getPrototypeOf(n);
                                  }
                                  return !1;
                                })(e)
                              )
                                return (r.pop(), e);
                              n = Object.create(null);
                              for (const [r, i] of Object.entries(e)) {
                                const e = t.has(r.toLowerCase())
                                  ? "[REDACTED ****]"
                                  : a(i);
                                $.isUndefined(e) || (n[r] = e);
                              }
                            }
                            return (r.pop(), n);
                          };
                        return a(e);
                      })(e, n)
                    : $.toJSONObject(e);
              return {
                message: this.message,
                name: this.name,
                description: this.description,
                number: this.number,
                fileName: this.fileName,
                lineNumber: this.lineNumber,
                columnNumber: this.columnNumber,
                stack: this.stack,
                config: t,
                code: this.code,
                status: this.status,
              };
            }
          }
          function te(e) {
            return $.isPlainObject(e) || $.isArray(e);
          }
          function re(e) {
            return $.endsWith(e, "[]") ? e.slice(0, -2) : e;
          }
          function ae(e, n, t) {
            return e
              ? e
                  .concat(n)
                  .map(function (e, n) {
                    return ((e = re(e)), !t && n ? "[" + e + "]" : e);
                  })
                  .join(t ? "." : "")
              : n;
          }
          ((ne.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE"),
            (ne.ERR_BAD_OPTION = "ERR_BAD_OPTION"),
            (ne.ECONNABORTED = "ECONNABORTED"),
            (ne.ETIMEDOUT = "ETIMEDOUT"),
            (ne.ECONNREFUSED = "ECONNREFUSED"),
            (ne.ERR_NETWORK = "ERR_NETWORK"),
            (ne.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS"),
            (ne.ERR_DEPRECATED = "ERR_DEPRECATED"),
            (ne.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE"),
            (ne.ERR_BAD_REQUEST = "ERR_BAD_REQUEST"),
            (ne.ERR_CANCELED = "ERR_CANCELED"),
            (ne.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT"),
            (ne.ERR_INVALID_URL = "ERR_INVALID_URL"),
            (ne.ERR_FORM_DATA_DEPTH_EXCEEDED = "ERR_FORM_DATA_DEPTH_EXCEEDED"));
          const ie = $.toFlatObject($, {}, null, function (e) {
            return /^is[A-Z]/.test(e);
          });
          function le(e, n, t) {
            if (!$.isObject(e)) throw new TypeError("target must be an object");
            n = n || new FormData();
            const r = (t = $.toFlatObject(
                t,
                { metaTokens: !0, dots: !1, indexes: !1 },
                !1,
                function (e, n) {
                  return !$.isUndefined(n[e]);
                },
              )).metaTokens,
              a = t.visitor || d,
              i = t.dots,
              l = t.indexes,
              o = t.Blob || ("undefined" != typeof Blob && Blob),
              s = void 0 === t.maxDepth ? 100 : t.maxDepth,
              u = o && $.isSpecCompliantForm(n);
            if (!$.isFunction(a))
              throw new TypeError("visitor must be a function");
            function c(e) {
              if (null === e) return "";
              if ($.isDate(e)) return e.toISOString();
              if ($.isBoolean(e)) return e.toString();
              if (!u && $.isBlob(e))
                throw new ne("Blob is not supported. Use a Buffer instead.");
              return $.isArrayBuffer(e) || $.isTypedArray(e)
                ? u && "function" == typeof Blob
                  ? new Blob([e])
                  : Buffer.from(e)
                : e;
            }
            function d(e, t, a) {
              let o = e;
              if ($.isReactNative(n) && $.isReactNativeBlob(e))
                return (n.append(ae(a, t, i), c(e)), !1);
              if (e && !a && "object" == typeof e)
                if ($.endsWith(t, "{}"))
                  ((t = r ? t : t.slice(0, -2)), (e = JSON.stringify(e)));
                else if (
                  ($.isArray(e) &&
                    (function (e) {
                      return $.isArray(e) && !e.some(te);
                    })(e)) ||
                  (($.isFileList(e) || $.endsWith(t, "[]")) &&
                    (o = $.toArray(e)))
                )
                  return (
                    (t = re(t)),
                    o.forEach(function (e, r) {
                      !$.isUndefined(e) &&
                        null !== e &&
                        n.append(
                          !0 === l ? ae([t], r, i) : null === l ? t : t + "[]",
                          c(e),
                        );
                    }),
                    !1
                  );
              return !!te(e) || (n.append(ae(a, t, i), c(e)), !1);
            }
            const f = [],
              p = Object.assign(ie, {
                defaultVisitor: d,
                convertValue: c,
                isVisitable: te,
              });
            if (!$.isObject(e)) throw new TypeError("data must be an object");
            return (
              (function e(t, r, i = 0) {
                if (!$.isUndefined(t)) {
                  if (i > s)
                    throw new ne(
                      "Object is too deeply nested (" +
                        i +
                        " levels). Max depth: " +
                        s,
                      ne.ERR_FORM_DATA_DEPTH_EXCEEDED,
                    );
                  if (-1 !== f.indexOf(t))
                    throw Error(
                      "Circular reference detected in " + r.join("."),
                    );
                  (f.push(t),
                    $.forEach(t, function (t, l) {
                      !0 ===
                        (!($.isUndefined(t) || null === t) &&
                          a.call(n, t, $.isString(l) ? l.trim() : l, r, p)) &&
                        e(t, r ? r.concat(l) : [l], i + 1);
                    }),
                    f.pop());
                }
              })(e),
              n
            );
          }
          function oe(e) {
            const n = {
              "!": "%21",
              "'": "%27",
              "(": "%28",
              ")": "%29",
              "~": "%7E",
              "%20": "+",
            };
            return encodeURIComponent(e).replace(/[!'()~]|%20/g, function (e) {
              return n[e];
            });
          }
          function se(e, n) {
            ((this._pairs = []), e && le(e, this, n));
          }
          const ue = se.prototype;
          function ce(e) {
            return encodeURIComponent(e)
              .replace(/%3A/gi, ":")
              .replace(/%24/g, "$")
              .replace(/%2C/gi, ",")
              .replace(/%20/g, "+");
          }
          function de(e, n, t) {
            if (!n) return e;
            const r = (t && t.encode) || ce,
              a = $.isFunction(t) ? { serialize: t } : t,
              i = a && a.serialize;
            let l;
            if (
              ((l = i
                ? i(n, a)
                : $.isURLSearchParams(n)
                  ? n.toString()
                  : new se(n, a).toString(r)),
              l)
            ) {
              const n = e.indexOf("#");
              (-1 !== n && (e = e.slice(0, n)),
                (e += (-1 === e.indexOf("?") ? "?" : "&") + l));
            }
            return e;
          }
          ((ue.append = function (e, n) {
            this._pairs.push([e, n]);
          }),
            (ue.toString = function (e) {
              const n = e
                ? function (n) {
                    return e.call(this, n, oe);
                  }
                : oe;
              return this._pairs
                .map(function (e) {
                  return n(e[0]) + "=" + n(e[1]);
                }, "")
                .join("&");
            }));
          class fe {
            constructor() {
              this.handlers = [];
            }
            use(e, n, t) {
              return (
                this.handlers.push({
                  fulfilled: e,
                  rejected: n,
                  synchronous: !!t && t.synchronous,
                  runWhen: t ? t.runWhen : null,
                }),
                this.handlers.length - 1
              );
            }
            eject(e) {
              this.handlers[e] && (this.handlers[e] = null);
            }
            clear() {
              this.handlers && (this.handlers = []);
            }
            forEach(e) {
              $.forEach(this.handlers, function (n) {
                null !== n && e(n);
              });
            }
          }
          var pe = {
              silentJSONParsing: !0,
              forcedJSONParsing: !0,
              clarifyTimeoutError: !1,
              legacyInterceptorReqResOrdering: !0,
            },
            me = {
              isBrowser: !0,
              classes: {
                URLSearchParams:
                  "undefined" != typeof URLSearchParams ? URLSearchParams : se,
                FormData: "undefined" != typeof FormData ? FormData : null,
                Blob: "undefined" != typeof Blob ? Blob : null,
              },
              protocols: ["http", "https", "file", "blob", "url", "data"],
            };
          const he =
              "undefined" != typeof window && "undefined" != typeof document,
            be = ("object" == typeof navigator && navigator) || void 0,
            ve =
              he &&
              (!be ||
                ["ReactNative", "NativeScript", "NS"].indexOf(be.product) < 0),
            ge =
              "undefined" != typeof WorkerGlobalScope &&
              self instanceof WorkerGlobalScope &&
              "function" == typeof self.importScripts,
            we = (he && window.location.href) || "http://localhost";
          var ye = {
            ...Object.freeze({
              __proto__: null,
              hasBrowserEnv: he,
              hasStandardBrowserEnv: ve,
              hasStandardBrowserWebWorkerEnv: ge,
              navigator: be,
              origin: we,
            }),
            ...me,
          };
          function xe(e) {
            function n(e, t, r, a) {
              let i = e[a++];
              if ("__proto__" === i) return !0;
              const l = Number.isFinite(+i),
                o = a >= e.length;
              return (
                (i = !i && $.isArray(r) ? r.length : i),
                o
                  ? ($.hasOwnProp(r, i)
                      ? (r[i] = $.isArray(r[i]) ? r[i].concat(t) : [r[i], t])
                      : (r[i] = t),
                    !l)
                  : ((r[i] && $.isObject(r[i])) || (r[i] = []),
                    n(e, t, r[i], a) &&
                      $.isArray(r[i]) &&
                      (r[i] = (function (e) {
                        const n = {},
                          t = Object.keys(e);
                        let r;
                        const a = t.length;
                        let i;
                        for (r = 0; r < a; r++) ((i = t[r]), (n[i] = e[i]));
                        return n;
                      })(r[i])),
                    !l)
              );
            }
            if ($.isFormData(e) && $.isFunction(e.entries)) {
              const t = {};
              return (
                $.forEachEntry(e, (e, r) => {
                  n(
                    (function (e) {
                      return $.matchAll(/\w+|\[(\w*)]/g, e).map((e) =>
                        "[]" === e[0] ? "" : e[1] || e[0],
                      );
                    })(e),
                    r,
                    t,
                    0,
                  );
                }),
                t
              );
            }
            return null;
          }
          const Ie = (e, n) =>
              null != e && $.hasOwnProp(e, n) ? e[n] : void 0,
            ke = {
              transitional: pe,
              adapter: ["xhr", "http", "fetch"],
              transformRequest: [
                function (e, n) {
                  const t = n.getContentType() || "",
                    r = t.indexOf("application/json") > -1,
                    a = $.isObject(e);
                  if (
                    (a && $.isHTMLForm(e) && (e = new FormData(e)),
                    $.isFormData(e))
                  )
                    return r ? JSON.stringify(xe(e)) : e;
                  if (
                    $.isArrayBuffer(e) ||
                    $.isBuffer(e) ||
                    $.isStream(e) ||
                    $.isFile(e) ||
                    $.isBlob(e) ||
                    $.isReadableStream(e)
                  )
                    return e;
                  if ($.isArrayBufferView(e)) return e.buffer;
                  if ($.isURLSearchParams(e))
                    return (
                      n.setContentType(
                        "application/x-www-form-urlencoded;charset=utf-8",
                        !1,
                      ),
                      e.toString()
                    );
                  let i;
                  if (a) {
                    const n = Ie(this, "formSerializer");
                    if (t.indexOf("application/x-www-form-urlencoded") > -1)
                      return (function (e, n) {
                        return le(e, new ye.classes.URLSearchParams(), {
                          visitor: function (e, n, t, r) {
                            return ye.isNode && $.isBuffer(e)
                              ? (this.append(n, e.toString("base64")), !1)
                              : r.defaultVisitor.apply(this, arguments);
                          },
                          ...n,
                        });
                      })(e, n).toString();
                    if (
                      (i = $.isFileList(e)) ||
                      t.indexOf("multipart/form-data") > -1
                    ) {
                      const t = Ie(this, "env"),
                        r = t && t.FormData;
                      return le(i ? { "files[]": e } : e, r && new r(), n);
                    }
                  }
                  return a || r
                    ? (n.setContentType("application/json", !1),
                      (function (e) {
                        if ($.isString(e))
                          try {
                            return ((0, JSON.parse)(e), $.trim(e));
                          } catch (e) {
                            if ("SyntaxError" !== e.name) throw e;
                          }
                        return (0, JSON.stringify)(e);
                      })(e))
                    : e;
                },
              ],
              transformResponse: [
                function (e) {
                  const n = Ie(this, "transitional") || ke.transitional,
                    t = n && n.forcedJSONParsing,
                    r = Ie(this, "responseType"),
                    a = "json" === r;
                  if ($.isResponse(e) || $.isReadableStream(e)) return e;
                  if (e && $.isString(e) && ((t && !r) || a)) {
                    const t = !(n && n.silentJSONParsing) && a;
                    try {
                      return JSON.parse(e, Ie(this, "parseReviver"));
                    } catch (e) {
                      if (t) {
                        if ("SyntaxError" === e.name)
                          throw ne.from(
                            e,
                            ne.ERR_BAD_RESPONSE,
                            this,
                            null,
                            Ie(this, "response"),
                          );
                        throw e;
                      }
                    }
                  }
                  return e;
                },
              ],
              timeout: 0,
              xsrfCookieName: "XSRF-TOKEN",
              xsrfHeaderName: "X-XSRF-TOKEN",
              maxContentLength: -1,
              maxBodyLength: -1,
              env: { FormData: ye.classes.FormData, Blob: ye.classes.Blob },
              validateStatus: function (e) {
                return e >= 200 && e < 300;
              },
              headers: {
                common: {
                  Accept: "application/json, text/plain, */*",
                  "Content-Type": void 0,
                },
              },
            };
          function Se(e, n) {
            const t = this || ke,
              r = n || t,
              a = ee.from(r.headers);
            let i = r.data;
            return (
              $.forEach(e, function (e) {
                i = e.call(t, i, a.normalize(), n ? n.status : void 0);
              }),
              a.normalize(),
              i
            );
          }
          function Ae(e) {
            return !(!e || !e.__CANCEL__);
          }
          $.forEach(
            ["delete", "get", "head", "post", "put", "patch", "query"],
            (e) => {
              ke.headers[e] = {};
            },
          );
          class Ne extends ne {
            constructor(e, n, t) {
              (super(null == e ? "canceled" : e, ne.ERR_CANCELED, n, t),
                (this.name = "CanceledError"),
                (this.__CANCEL__ = !0));
            }
          }
          function Ee(e, n, t) {
            const r = t.config.validateStatus;
            t.status && r && !r(t.status)
              ? n(
                  new ne(
                    "Request failed with status code " + t.status,
                    t.status >= 400 && t.status < 500
                      ? ne.ERR_BAD_REQUEST
                      : ne.ERR_BAD_RESPONSE,
                    t.config,
                    t.request,
                    t,
                  ),
                )
              : e(t);
          }
          const De = (e, n, t = 3) => {
              let r = 0;
              const a = (function (e, n) {
                e = e || 10;
                const t = new Array(e),
                  r = new Array(e);
                let a,
                  i = 0,
                  l = 0;
                return (
                  (n = void 0 !== n ? n : 1e3),
                  function (o) {
                    const s = Date.now(),
                      u = r[l];
                    (a || (a = s), (t[i] = o), (r[i] = s));
                    let c = l,
                      d = 0;
                    for (; c !== i; ) ((d += t[c++]), (c %= e));
                    if (
                      ((i = (i + 1) % e),
                      i === l && (l = (l + 1) % e),
                      s - a < n)
                    )
                      return;
                    const f = u && s - u;
                    return f ? Math.round((1e3 * d) / f) : void 0;
                  }
                );
              })(50, 250);
              return (function (t, i) {
                let l,
                  o,
                  s = 0,
                  u = 1e3 / i;
                const c = (t, i = Date.now()) => {
                  ((s = i),
                    (l = null),
                    o && (clearTimeout(o), (o = null)),
                    ((t) => {
                      const i = t.loaded,
                        l = t.lengthComputable ? t.total : void 0,
                        o = null != l ? Math.min(i, l) : i,
                        s = Math.max(0, o - r),
                        u = a(s);
                      ((r = Math.max(r, o)),
                        e({
                          loaded: o,
                          total: l,
                          progress: l ? o / l : void 0,
                          bytes: s,
                          rate: u || void 0,
                          estimated: u && l ? (l - o) / u : void 0,
                          event: t,
                          lengthComputable: null != l,
                          [n ? "download" : "upload"]: !0,
                        }));
                    })(...t));
                };
                return [
                  (...e) => {
                    const n = Date.now(),
                      t = n - s;
                    t >= u
                      ? c(e, n)
                      : ((l = e),
                        o ||
                          (o = setTimeout(() => {
                            ((o = null), c(l));
                          }, u - t)));
                  },
                  () => l && c(l),
                ];
              })(0, t);
            },
            _e = (e, n) => {
              const t = null != e;
              return [
                (r) => n[0]({ lengthComputable: t, total: e, loaded: r }),
                n[1],
              ];
            },
            Le =
              (e) =>
              (...n) =>
                $.asap(() => e(...n));
          var Oe = ye.hasStandardBrowserEnv
              ? ((e, n) => (t) => (
                  (t = new URL(t, ye.origin)),
                  e.protocol === t.protocol &&
                    e.host === t.host &&
                    (n || e.port === t.port)
                ))(
                  new URL(ye.origin),
                  ye.navigator &&
                    /(msie|trident)/i.test(ye.navigator.userAgent),
                )
              : () => !0,
            Ce = ye.hasStandardBrowserEnv
              ? {
                  write(e, n, t, r, a, i, l) {
                    if ("undefined" == typeof document) return;
                    const o = [`${e}=${encodeURIComponent(n)}`];
                    ($.isNumber(t) &&
                      o.push(`expires=${new Date(t).toUTCString()}`),
                      $.isString(r) && o.push(`path=${r}`),
                      $.isString(a) && o.push(`domain=${a}`),
                      !0 === i && o.push("secure"),
                      $.isString(l) && o.push(`SameSite=${l}`),
                      (document.cookie = o.join("; ")));
                  },
                  read(e) {
                    if ("undefined" == typeof document) return null;
                    const n = document.cookie.split(";");
                    for (let t = 0; t < n.length; t++) {
                      const r = n[t].replace(/^\s+/, ""),
                        a = r.indexOf("=");
                      if (-1 !== a && r.slice(0, a) === e)
                        return decodeURIComponent(r.slice(a + 1));
                    }
                    return null;
                  },
                  remove(e) {
                    this.write(e, "", Date.now() - 864e5, "/");
                  },
                }
              : { write() {}, read: () => null, remove() {} };
          function Re(e, n, t) {
            let r = !(
              "string" == typeof (a = n) &&
              /^([a-z][a-z\d+\-.]*:)?\/\//i.test(a)
            );
            var a;
            return e && (r || !1 === t)
              ? (function (e, n) {
                  return n
                    ? e.replace(/\/?\/$/, "") + "/" + n.replace(/^\/+/, "")
                    : e;
                })(e, n)
              : n;
          }
          const Pe = (e) => (e instanceof ee ? { ...e } : e);
          function je(e, n) {
            n = n || {};
            const t = Object.create(null);
            function r(e, n, t, r) {
              return $.isPlainObject(e) && $.isPlainObject(n)
                ? $.merge.call({ caseless: r }, e, n)
                : $.isPlainObject(n)
                  ? $.merge({}, n)
                  : $.isArray(n)
                    ? n.slice()
                    : n;
            }
            function a(e, n, t, a) {
              return $.isUndefined(n)
                ? $.isUndefined(e)
                  ? void 0
                  : r(void 0, e, 0, a)
                : r(e, n, 0, a);
            }
            function i(e, n) {
              if (!$.isUndefined(n)) return r(void 0, n);
            }
            function l(e, n) {
              return $.isUndefined(n)
                ? $.isUndefined(e)
                  ? void 0
                  : r(void 0, e)
                : r(void 0, n);
            }
            function o(t, a, i) {
              return $.hasOwnProp(n, i)
                ? r(t, a)
                : $.hasOwnProp(e, i)
                  ? r(void 0, t)
                  : void 0;
            }
            Object.defineProperty(t, "hasOwnProperty", {
              __proto__: null,
              value: Object.prototype.hasOwnProperty,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            });
            const s = {
              url: i,
              method: i,
              data: i,
              baseURL: l,
              transformRequest: l,
              transformResponse: l,
              paramsSerializer: l,
              timeout: l,
              timeoutMessage: l,
              withCredentials: l,
              withXSRFToken: l,
              adapter: l,
              responseType: l,
              xsrfCookieName: l,
              xsrfHeaderName: l,
              onUploadProgress: l,
              onDownloadProgress: l,
              decompress: l,
              maxContentLength: l,
              maxBodyLength: l,
              beforeRedirect: l,
              transport: l,
              httpAgent: l,
              httpsAgent: l,
              cancelToken: l,
              socketPath: l,
              allowedSocketPaths: l,
              responseEncoding: l,
              validateStatus: o,
              headers: (e, n, t) => a(Pe(e), Pe(n), 0, !0),
            };
            return (
              $.forEach(Object.keys({ ...e, ...n }), function (r) {
                if (
                  "__proto__" === r ||
                  "constructor" === r ||
                  "prototype" === r
                )
                  return;
                const i = $.hasOwnProp(s, r) ? s[r] : a,
                  l = i(
                    $.hasOwnProp(e, r) ? e[r] : void 0,
                    $.hasOwnProp(n, r) ? n[r] : void 0,
                    r,
                  );
                ($.isUndefined(l) && i !== o) || (t[r] = l);
              }),
              t
            );
          }
          const Te = ["content-type", "content-length"];
          var Ve = (e) => {
              const n = je({}, e),
                t = (e) => ($.hasOwnProp(n, e) ? n[e] : void 0),
                r = t("data");
              let a = t("withXSRFToken");
              const i = t("xsrfHeaderName"),
                l = t("xsrfCookieName");
              let o = t("headers");
              const s = t("auth"),
                u = t("baseURL"),
                c = t("allowAbsoluteUrls"),
                d = t("url");
              var f;
              if (
                ((n.headers = o = ee.from(o)),
                (n.url = de(Re(u, d, c), e.params, e.paramsSerializer)),
                s &&
                  o.set(
                    "Authorization",
                    "Basic " +
                      btoa(
                        (s.username || "") +
                          ":" +
                          (s.password
                            ? ((f = s.password),
                              encodeURIComponent(f).replace(
                                /%([0-9A-F]{2})/gi,
                                (e, n) => String.fromCharCode(parseInt(n, 16)),
                              ))
                            : ""),
                      ),
                  ),
                $.isFormData(r) &&
                  (ye.hasStandardBrowserEnv || ye.hasStandardBrowserWebWorkerEnv
                    ? o.setContentType(void 0)
                    : $.isFunction(r.getHeaders) &&
                      (function (e, n, t) {
                        "content-only" === t
                          ? Object.entries(n).forEach(([n, t]) => {
                              Te.includes(n.toLowerCase()) && e.set(n, t);
                            })
                          : e.set(n);
                      })(o, r.getHeaders(), t("formDataHeaderPolicy"))),
                ye.hasStandardBrowserEnv &&
                  ($.isFunction(a) && (a = a(n)),
                  !0 === a || (null == a && Oe(n.url))))
              ) {
                const e = i && l && Ce.read(l);
                e && o.set(i, e);
              }
              return n;
            },
            Fe =
              "undefined" != typeof XMLHttpRequest &&
              function (e) {
                return new Promise(function (n, t) {
                  const r = Ve(e);
                  let a = r.data;
                  const i = ee.from(r.headers).normalize();
                  let l,
                    o,
                    s,
                    u,
                    c,
                    {
                      responseType: d,
                      onUploadProgress: f,
                      onDownloadProgress: p,
                    } = r;
                  function m() {
                    (u && u(),
                      c && c(),
                      r.cancelToken && r.cancelToken.unsubscribe(l),
                      r.signal && r.signal.removeEventListener("abort", l));
                  }
                  let h = new XMLHttpRequest();
                  function b() {
                    if (!h) return;
                    const r = ee.from(
                      "getAllResponseHeaders" in h && h.getAllResponseHeaders(),
                    );
                    (Ee(
                      function (e) {
                        (n(e), m());
                      },
                      function (e) {
                        (t(e), m());
                      },
                      {
                        data:
                          d && "text" !== d && "json" !== d
                            ? h.response
                            : h.responseText,
                        status: h.status,
                        statusText: h.statusText,
                        headers: r,
                        config: e,
                        request: h,
                      },
                    ),
                      (h = null));
                  }
                  (h.open(r.method.toUpperCase(), r.url, !0),
                    (h.timeout = r.timeout),
                    "onloadend" in h
                      ? (h.onloadend = b)
                      : (h.onreadystatechange = function () {
                          h &&
                            4 === h.readyState &&
                            (0 !== h.status ||
                              (h.responseURL &&
                                h.responseURL.startsWith("file:"))) &&
                            setTimeout(b);
                        }),
                    (h.onabort = function () {
                      h &&
                        (t(new ne("Request aborted", ne.ECONNABORTED, e, h)),
                        m(),
                        (h = null));
                    }),
                    (h.onerror = function (n) {
                      const r = n && n.message ? n.message : "Network Error",
                        a = new ne(r, ne.ERR_NETWORK, e, h);
                      ((a.event = n || null), t(a), m(), (h = null));
                    }),
                    (h.ontimeout = function () {
                      let n = r.timeout
                        ? "timeout of " + r.timeout + "ms exceeded"
                        : "timeout exceeded";
                      const a = r.transitional || pe;
                      (r.timeoutErrorMessage && (n = r.timeoutErrorMessage),
                        t(
                          new ne(
                            n,
                            a.clarifyTimeoutError
                              ? ne.ETIMEDOUT
                              : ne.ECONNABORTED,
                            e,
                            h,
                          ),
                        ),
                        m(),
                        (h = null));
                    }),
                    void 0 === a && i.setContentType(null),
                    "setRequestHeader" in h &&
                      $.forEach(i.toJSON(), function (e, n) {
                        h.setRequestHeader(n, e);
                      }),
                    $.isUndefined(r.withCredentials) ||
                      (h.withCredentials = !!r.withCredentials),
                    d && "json" !== d && (h.responseType = r.responseType),
                    p &&
                      (([s, c] = De(p, !0)), h.addEventListener("progress", s)),
                    f &&
                      h.upload &&
                      (([o, u] = De(f)),
                      h.upload.addEventListener("progress", o),
                      h.upload.addEventListener("loadend", u)),
                    (r.cancelToken || r.signal) &&
                      ((l = (n) => {
                        h &&
                          (t(!n || n.type ? new Ne(null, e, h) : n),
                          h.abort(),
                          m(),
                          (h = null));
                      }),
                      r.cancelToken && r.cancelToken.subscribe(l),
                      r.signal &&
                        (r.signal.aborted
                          ? l()
                          : r.signal.addEventListener("abort", l))));
                  const v = (function (e) {
                    const n = /^([-+\w]{1,25}):(?:\/\/)?/.exec(e);
                    return (n && n[1]) || "";
                  })(r.url);
                  !v || ye.protocols.includes(v)
                    ? h.send(a || null)
                    : t(
                        new ne(
                          "Unsupported protocol " + v + ":",
                          ne.ERR_BAD_REQUEST,
                          e,
                        ),
                      );
                });
              };
          const ze = (e, n) => {
              const { length: t } = (e = e ? e.filter(Boolean) : []);
              if (n || t) {
                let t,
                  r = new AbortController();
                const a = function (e) {
                  if (!t) {
                    ((t = !0), l());
                    const n = e instanceof Error ? e : this.reason;
                    r.abort(
                      n instanceof ne
                        ? n
                        : new Ne(n instanceof Error ? n.message : n),
                    );
                  }
                };
                let i =
                  n &&
                  setTimeout(() => {
                    ((i = null),
                      a(new ne(`timeout of ${n}ms exceeded`, ne.ETIMEDOUT)));
                  }, n);
                const l = () => {
                  e &&
                    (i && clearTimeout(i),
                    (i = null),
                    e.forEach((e) => {
                      e.unsubscribe
                        ? e.unsubscribe(a)
                        : e.removeEventListener("abort", a);
                    }),
                    (e = null));
                };
                e.forEach((e) => e.addEventListener("abort", a));
                const { signal: o } = r;
                return ((o.unsubscribe = () => $.asap(l)), o);
              }
            },
            Me = function* (e, n) {
              let t = e.byteLength;
              if (t < n) return void (yield e);
              let r,
                a = 0;
              for (; a < t; ) ((r = a + n), yield e.slice(a, r), (a = r));
            },
            Be = (e, n, t, r) => {
              const a = (async function* (e, n) {
                for await (const t of (async function* (e) {
                  if (e[Symbol.asyncIterator]) return void (yield* e);
                  const n = e.getReader();
                  try {
                    for (;;) {
                      const { done: e, value: t } = await n.read();
                      if (e) break;
                      yield t;
                    }
                  } finally {
                    await n.cancel();
                  }
                })(e))
                  yield* Me(t, n);
              })(e, n);
              let i,
                l = 0,
                o = (e) => {
                  i || ((i = !0), r && r(e));
                };
              return new ReadableStream(
                {
                  async pull(e) {
                    try {
                      const { done: n, value: r } = await a.next();
                      if (n) return (o(), void e.close());
                      let i = r.byteLength;
                      if (t) {
                        let e = (l += i);
                        t(e);
                      }
                      e.enqueue(new Uint8Array(r));
                    } catch (e) {
                      throw (o(e), e);
                    }
                  },
                  cancel: (e) => (o(e), a.return()),
                },
                { highWaterMark: 2 },
              );
            },
            Ue = "1.16.0",
            { isFunction: He } = $,
            Ge = (e, ...n) => {
              try {
                return !!e(...n);
              } catch (e) {
                return !1;
              }
            },
            qe = (e) => {
              const n = $.global ?? globalThis,
                { ReadableStream: t, TextEncoder: r } = n;
              e = $.merge.call(
                { skipUndefined: !0 },
                { Request: n.Request, Response: n.Response },
                e,
              );
              const { fetch: a, Request: i, Response: l } = e,
                o = a ? He(a) : "function" == typeof fetch,
                s = He(i),
                u = He(l);
              if (!o) return !1;
              const c = o && He(t),
                d =
                  o &&
                  ("function" == typeof r
                    ? ((f = new r()), (e) => f.encode(e))
                    : async (e) =>
                        new Uint8Array(await new i(e).arrayBuffer()));
              var f;
              const p =
                  s &&
                  c &&
                  Ge(() => {
                    let e = !1;
                    const n = new i(ye.origin, {
                        body: new t(),
                        method: "POST",
                        get duplex() {
                          return ((e = !0), "half");
                        },
                      }),
                      r = n.headers.has("Content-Type");
                    return (null != n.body && n.body.cancel(), e && !r);
                  }),
                m = u && c && Ge(() => $.isReadableStream(new l("").body)),
                h = { stream: m && ((e) => e.body) };
              o &&
                ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(
                  (e) => {
                    !h[e] &&
                      (h[e] = (n, t) => {
                        let r = n && n[e];
                        if (r) return r.call(n);
                        throw new ne(
                          `Response type '${e}' is not supported`,
                          ne.ERR_NOT_SUPPORT,
                          t,
                        );
                      });
                  },
                );
              const b = async (e, n) => {
                const t = $.toFiniteNumber(e.getContentLength());
                return null == t
                  ? (async (e) => {
                      if (null == e) return 0;
                      if ($.isBlob(e)) return e.size;
                      if ($.isSpecCompliantForm(e)) {
                        const n = new i(ye.origin, { method: "POST", body: e });
                        return (await n.arrayBuffer()).byteLength;
                      }
                      return $.isArrayBufferView(e) || $.isArrayBuffer(e)
                        ? e.byteLength
                        : ($.isURLSearchParams(e) && (e += ""),
                          $.isString(e) ? (await d(e)).byteLength : void 0);
                    })(n)
                  : t;
              };
              return async (e) => {
                let {
                  url: n,
                  method: t,
                  data: o,
                  signal: u,
                  cancelToken: c,
                  timeout: d,
                  onDownloadProgress: f,
                  onUploadProgress: v,
                  responseType: g,
                  headers: w,
                  withCredentials: y = "same-origin",
                  fetchOptions: x,
                  maxContentLength: I,
                  maxBodyLength: k,
                } = Ve(e);
                const S = $.isNumber(I) && I > -1,
                  A = $.isNumber(k) && k > -1;
                let N = a || fetch;
                g = g ? (g + "").toLowerCase() : "text";
                let E = ze([u, c && c.toAbortSignal()], d),
                  D = null;
                const _ =
                  E &&
                  E.unsubscribe &&
                  (() => {
                    E.unsubscribe();
                  });
                let L;
                try {
                  if (S && "string" == typeof n && n.startsWith("data:")) {
                    const t = (function (e) {
                      if (!e || "string" != typeof e) return 0;
                      if (!e.startsWith("data:")) return 0;
                      const n = e.indexOf(",");
                      if (n < 0) return 0;
                      const t = e.slice(5, n),
                        r = e.slice(n + 1);
                      if (/;base64/i.test(t)) {
                        let e = r.length;
                        const n = r.length;
                        for (let t = 0; t < n; t++)
                          if (37 === r.charCodeAt(t) && t + 2 < n) {
                            const n = r.charCodeAt(t + 1),
                              a = r.charCodeAt(t + 2);
                            ((n >= 48 && n <= 57) ||
                              (n >= 65 && n <= 70) ||
                              (n >= 97 && n <= 102)) &&
                              ((a >= 48 && a <= 57) ||
                                (a >= 65 && a <= 70) ||
                                (a >= 97 && a <= 102)) &&
                              ((e -= 2), (t += 2));
                          }
                        let t = 0,
                          a = n - 1;
                        const i = (e) =>
                          e >= 2 &&
                          37 === r.charCodeAt(e - 2) &&
                          51 === r.charCodeAt(e - 1) &&
                          (68 === r.charCodeAt(e) || 100 === r.charCodeAt(e));
                        (a >= 0 &&
                          (61 === r.charCodeAt(a)
                            ? (t++, a--)
                            : i(a) && (t++, (a -= 3))),
                          1 === t &&
                            a >= 0 &&
                            (61 === r.charCodeAt(a) || i(a)) &&
                            t++);
                        const l = 3 * Math.floor(e / 4) - (t || 0);
                        return l > 0 ? l : 0;
                      }
                      if (
                        "undefined" != typeof Buffer &&
                        "function" == typeof Buffer.byteLength
                      )
                        return Buffer.byteLength(r, "utf8");
                      let a = 0;
                      for (let e = 0, n = r.length; e < n; e++) {
                        const t = r.charCodeAt(e);
                        if (t < 128) a += 1;
                        else if (t < 2048) a += 2;
                        else if (t >= 55296 && t <= 56319 && e + 1 < n) {
                          const n = r.charCodeAt(e + 1);
                          n >= 56320 && n <= 57343 ? ((a += 4), e++) : (a += 3);
                        } else a += 3;
                      }
                      return a;
                    })(n);
                    if (t > I)
                      throw new ne(
                        "maxContentLength size of " + I + " exceeded",
                        ne.ERR_BAD_RESPONSE,
                        e,
                        D,
                      );
                  }
                  if (A && "get" !== t && "head" !== t) {
                    const n = await b(w, o);
                    if ("number" == typeof n && isFinite(n) && n > k)
                      throw new ne(
                        "Request body larger than maxBodyLength limit",
                        ne.ERR_BAD_REQUEST,
                        e,
                        D,
                      );
                  }
                  if (
                    v &&
                    p &&
                    "get" !== t &&
                    "head" !== t &&
                    0 !== (L = await b(w, o))
                  ) {
                    let e,
                      t = new i(n, { method: "POST", body: o, duplex: "half" });
                    if (
                      ($.isFormData(o) &&
                        (e = t.headers.get("content-type")) &&
                        w.setContentType(e),
                      t.body)
                    ) {
                      const [e, n] = _e(L, De(Le(v)));
                      o = Be(t.body, 65536, e, n);
                    }
                  }
                  $.isString(y) || (y = y ? "include" : "omit");
                  const a = s && "credentials" in i.prototype;
                  if ($.isFormData(o)) {
                    const e = w.getContentType();
                    e &&
                      /^multipart\/form-data/i.test(e) &&
                      !/boundary=/i.test(e) &&
                      w.delete("content-type");
                  }
                  w.set("User-Agent", "axios/" + Ue, !1);
                  const u = {
                    ...x,
                    signal: E,
                    method: t.toUpperCase(),
                    headers: w.normalize().toJSON(),
                    body: o,
                    duplex: "half",
                    credentials: a ? y : void 0,
                  };
                  D = s && new i(n, u);
                  let c = await (s ? N(D, x) : N(n, u));
                  if (S) {
                    const n = $.toFiniteNumber(c.headers.get("content-length"));
                    if (null != n && n > I)
                      throw new ne(
                        "maxContentLength size of " + I + " exceeded",
                        ne.ERR_BAD_RESPONSE,
                        e,
                        D,
                      );
                  }
                  const d = m && ("stream" === g || "response" === g);
                  if (m && c.body && (f || S || (d && _))) {
                    const n = {};
                    ["status", "statusText", "headers"].forEach((e) => {
                      n[e] = c[e];
                    });
                    const t = $.toFiniteNumber(c.headers.get("content-length")),
                      [r, a] = (f && _e(t, De(Le(f), !0))) || [];
                    let i = 0;
                    const o = (n) => {
                      if (S && ((i = n), i > I))
                        throw new ne(
                          "maxContentLength size of " + I + " exceeded",
                          ne.ERR_BAD_RESPONSE,
                          e,
                          D,
                        );
                      r && r(n);
                    };
                    c = new l(
                      Be(c.body, 65536, o, () => {
                        (a && a(), _ && _());
                      }),
                      n,
                    );
                  }
                  g = g || "text";
                  let O = await h[$.findKey(h, g) || "text"](c, e);
                  if (S && !m && !d) {
                    let n;
                    if (
                      (null != O &&
                        ("number" == typeof O.byteLength
                          ? (n = O.byteLength)
                          : "number" == typeof O.size
                            ? (n = O.size)
                            : "string" == typeof O &&
                              (n =
                                "function" == typeof r
                                  ? new r().encode(O).byteLength
                                  : O.length)),
                      "number" == typeof n && n > I)
                    )
                      throw new ne(
                        "maxContentLength size of " + I + " exceeded",
                        ne.ERR_BAD_RESPONSE,
                        e,
                        D,
                      );
                  }
                  return (
                    !d && _ && _(),
                    await new Promise((n, t) => {
                      Ee(n, t, {
                        data: O,
                        headers: ee.from(c.headers),
                        status: c.status,
                        statusText: c.statusText,
                        config: e,
                        request: D,
                      });
                    })
                  );
                } catch (n) {
                  if ((_ && _(), E && E.aborted && E.reason instanceof ne)) {
                    const t = E.reason;
                    throw (
                      (t.config = e),
                      D && (t.request = D),
                      n !== t && (t.cause = n),
                      t
                    );
                  }
                  if (
                    n &&
                    "TypeError" === n.name &&
                    /Load failed|fetch/i.test(n.message)
                  )
                    throw Object.assign(
                      new ne(
                        "Network Error",
                        ne.ERR_NETWORK,
                        e,
                        D,
                        n && n.response,
                      ),
                      { cause: n.cause || n },
                    );
                  throw ne.from(n, n && n.code, e, D, n && n.response);
                }
              };
            },
            We = new Map(),
            $e = (e) => {
              let n = (e && e.env) || {};
              const { fetch: t, Request: r, Response: a } = n,
                i = [r, a, t];
              let l,
                o,
                s = i.length,
                u = We;
              for (; s--; )
                ((l = i[s]),
                  (o = u.get(l)),
                  void 0 === o && u.set(l, (o = s ? new Map() : qe(n))),
                  (u = o));
              return o;
            };
          $e();
          const Ke = { http: null, xhr: Fe, fetch: { get: $e } };
          $.forEach(Ke, (e, n) => {
            if (e) {
              try {
                Object.defineProperty(e, "name", { __proto__: null, value: n });
              } catch (e) {}
              Object.defineProperty(e, "adapterName", {
                __proto__: null,
                value: n,
              });
            }
          });
          const Xe = (e) => `- ${e}`,
            Je = (e) => $.isFunction(e) || null === e || !1 === e;
          var Qe = function (e, n) {
            e = $.isArray(e) ? e : [e];
            const { length: t } = e;
            let r, a;
            const i = {};
            for (let l = 0; l < t; l++) {
              let t;
              if (
                ((r = e[l]),
                (a = r),
                !Je(r) &&
                  ((a = Ke[(t = String(r)).toLowerCase()]), void 0 === a))
              )
                throw new ne(`Unknown adapter '${t}'`);
              if (a && ($.isFunction(a) || (a = a.get(n)))) break;
              i[t || "#" + l] = a;
            }
            if (!a) {
              const e = Object.entries(i).map(
                ([e, n]) =>
                  `adapter ${e} ` +
                  (!1 === n
                    ? "is not supported by the environment"
                    : "is not available in the build"),
              );
              let n = t
                ? e.length > 1
                  ? "since :\n" + e.map(Xe).join("\n")
                  : " " + Xe(e[0])
                : "as no adapter specified";
              throw new ne(
                "There is no suitable adapter to dispatch the request " + n,
                "ERR_NOT_SUPPORT",
              );
            }
            return a;
          };
          function Ze(e) {
            if (
              (e.cancelToken && e.cancelToken.throwIfRequested(),
              e.signal && e.signal.aborted)
            )
              throw new Ne(null, e);
          }
          function Ye(e) {
            return (
              Ze(e),
              (e.headers = ee.from(e.headers)),
              (e.data = Se.call(e, e.transformRequest)),
              -1 !== ["post", "put", "patch"].indexOf(e.method) &&
                e.headers.setContentType(
                  "application/x-www-form-urlencoded",
                  !1,
                ),
              Qe(
                e.adapter || ke.adapter,
                e,
              )(e).then(
                function (n) {
                  (Ze(e), (e.response = n));
                  try {
                    n.data = Se.call(e, e.transformResponse, n);
                  } finally {
                    delete e.response;
                  }
                  return ((n.headers = ee.from(n.headers)), n);
                },
                function (n) {
                  if (!Ae(n) && (Ze(e), n && n.response)) {
                    e.response = n.response;
                    try {
                      n.response.data = Se.call(
                        e,
                        e.transformResponse,
                        n.response,
                      );
                    } finally {
                      delete e.response;
                    }
                    n.response.headers = ee.from(n.response.headers);
                  }
                  return Promise.reject(n);
                },
              )
            );
          }
          const en = {};
          [
            "object",
            "boolean",
            "number",
            "function",
            "string",
            "symbol",
          ].forEach((e, n) => {
            en[e] = function (t) {
              return typeof t === e || "a" + (n < 1 ? "n " : " ") + e;
            };
          });
          const nn = {};
          ((en.transitional = function (e, n, t) {
            function r(e, n) {
              return (
                "[Axios v" +
                Ue +
                "] Transitional option '" +
                e +
                "'" +
                n +
                (t ? ". " + t : "")
              );
            }
            return (t, a, i) => {
              if (!1 === e)
                throw new ne(
                  r(a, " has been removed" + (n ? " in " + n : "")),
                  ne.ERR_DEPRECATED,
                );
              return (
                n &&
                  !nn[a] &&
                  ((nn[a] = !0),
                  console.warn(
                    r(
                      a,
                      " has been deprecated since v" +
                        n +
                        " and will be removed in the near future",
                    ),
                  )),
                !e || e(t, a, i)
              );
            };
          }),
            (en.spelling = function (e) {
              return (n, t) => (
                console.warn(`${t} is likely a misspelling of ${e}`),
                !0
              );
            }));
          var tn = {
            assertOptions: function (e, n, t) {
              if ("object" != typeof e)
                throw new ne(
                  "options must be an object",
                  ne.ERR_BAD_OPTION_VALUE,
                );
              const r = Object.keys(e);
              let a = r.length;
              for (; a-- > 0; ) {
                const i = r[a],
                  l = Object.prototype.hasOwnProperty.call(n, i)
                    ? n[i]
                    : void 0;
                if (l) {
                  const n = e[i],
                    t = void 0 === n || l(n, i, e);
                  if (!0 !== t)
                    throw new ne(
                      "option " + i + " must be " + t,
                      ne.ERR_BAD_OPTION_VALUE,
                    );
                  continue;
                }
                if (!0 !== t)
                  throw new ne("Unknown option " + i, ne.ERR_BAD_OPTION);
              }
            },
            validators: en,
          };
          const rn = tn.validators;
          class an {
            constructor(e) {
              ((this.defaults = e || {}),
                (this.interceptors = {
                  request: new fe(),
                  response: new fe(),
                }));
            }
            async request(e, n) {
              try {
                return await this._request(e, n);
              } catch (e) {
                if (e instanceof Error) {
                  let n = {};
                  Error.captureStackTrace
                    ? Error.captureStackTrace(n)
                    : (n = new Error());
                  const t = (() => {
                    if (!n.stack) return "";
                    const e = n.stack.indexOf("\n");
                    return -1 === e ? "" : n.stack.slice(e + 1);
                  })();
                  try {
                    if (e.stack) {
                      if (t) {
                        const n = t.indexOf("\n"),
                          r = -1 === n ? -1 : t.indexOf("\n", n + 1),
                          a = -1 === r ? "" : t.slice(r + 1);
                        String(e.stack).endsWith(a) || (e.stack += "\n" + t);
                      }
                    } else e.stack = t;
                  } catch (e) {}
                }
                throw e;
              }
            }
            _request(e, n) {
              ("string" == typeof e ? ((n = n || {}).url = e) : (n = e || {}),
                (n = je(this.defaults, n)));
              const { transitional: t, paramsSerializer: r, headers: a } = n;
              (void 0 !== t &&
                tn.assertOptions(
                  t,
                  {
                    silentJSONParsing: rn.transitional(rn.boolean),
                    forcedJSONParsing: rn.transitional(rn.boolean),
                    clarifyTimeoutError: rn.transitional(rn.boolean),
                    legacyInterceptorReqResOrdering: rn.transitional(
                      rn.boolean,
                    ),
                  },
                  !1,
                ),
                null != r &&
                  ($.isFunction(r)
                    ? (n.paramsSerializer = { serialize: r })
                    : tn.assertOptions(
                        r,
                        { encode: rn.function, serialize: rn.function },
                        !0,
                      )),
                void 0 !== n.allowAbsoluteUrls ||
                  (void 0 !== this.defaults.allowAbsoluteUrls
                    ? (n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
                    : (n.allowAbsoluteUrls = !0)),
                tn.assertOptions(
                  n,
                  {
                    baseUrl: rn.spelling("baseURL"),
                    withXsrfToken: rn.spelling("withXSRFToken"),
                  },
                  !0,
                ),
                (n.method = (
                  n.method ||
                  this.defaults.method ||
                  "get"
                ).toLowerCase()));
              let i = a && $.merge(a.common, a[n.method]);
              (a &&
                $.forEach(
                  [
                    "delete",
                    "get",
                    "head",
                    "post",
                    "put",
                    "patch",
                    "query",
                    "common",
                  ],
                  (e) => {
                    delete a[e];
                  },
                ),
                (n.headers = ee.concat(i, a)));
              const l = [];
              let o = !0;
              this.interceptors.request.forEach(function (e) {
                if ("function" == typeof e.runWhen && !1 === e.runWhen(n))
                  return;
                o = o && e.synchronous;
                const t = n.transitional || pe;
                t && t.legacyInterceptorReqResOrdering
                  ? l.unshift(e.fulfilled, e.rejected)
                  : l.push(e.fulfilled, e.rejected);
              });
              const s = [];
              let u;
              this.interceptors.response.forEach(function (e) {
                s.push(e.fulfilled, e.rejected);
              });
              let c,
                d = 0;
              if (!o) {
                const e = [Ye.bind(this), void 0];
                for (
                  e.unshift(...l),
                    e.push(...s),
                    c = e.length,
                    u = Promise.resolve(n);
                  d < c;

                )
                  u = u.then(e[d++], e[d++]);
                return u;
              }
              c = l.length;
              let f = n;
              for (; d < c; ) {
                const e = l[d++],
                  n = l[d++];
                try {
                  f = e(f);
                } catch (e) {
                  n.call(this, e);
                  break;
                }
              }
              try {
                u = Ye.call(this, f);
              } catch (e) {
                return Promise.reject(e);
              }
              for (d = 0, c = s.length; d < c; ) u = u.then(s[d++], s[d++]);
              return u;
            }
            getUri(e) {
              return de(
                Re(
                  (e = je(this.defaults, e)).baseURL,
                  e.url,
                  e.allowAbsoluteUrls,
                ),
                e.params,
                e.paramsSerializer,
              );
            }
          }
          ($.forEach(["delete", "get", "head", "options"], function (e) {
            an.prototype[e] = function (n, t) {
              return this.request(
                je(t || {}, { method: e, url: n, data: (t || {}).data }),
              );
            };
          }),
            $.forEach(["post", "put", "patch", "query"], function (e) {
              function n(n) {
                return function (t, r, a) {
                  return this.request(
                    je(a || {}, {
                      method: e,
                      headers: n
                        ? { "Content-Type": "multipart/form-data" }
                        : {},
                      url: t,
                      data: r,
                    }),
                  );
                };
              }
              ((an.prototype[e] = n()),
                "query" !== e && (an.prototype[e + "Form"] = n(!0)));
            }));
          class ln {
            constructor(e) {
              if ("function" != typeof e)
                throw new TypeError("executor must be a function.");
              let n;
              this.promise = new Promise(function (e) {
                n = e;
              });
              const t = this;
              (this.promise.then((e) => {
                if (!t._listeners) return;
                let n = t._listeners.length;
                for (; n-- > 0; ) t._listeners[n](e);
                t._listeners = null;
              }),
                (this.promise.then = (e) => {
                  let n;
                  const r = new Promise((e) => {
                    (t.subscribe(e), (n = e));
                  }).then(e);
                  return (
                    (r.cancel = function () {
                      t.unsubscribe(n);
                    }),
                    r
                  );
                }),
                e(function (e, r, a) {
                  t.reason || ((t.reason = new Ne(e, r, a)), n(t.reason));
                }));
            }
            throwIfRequested() {
              if (this.reason) throw this.reason;
            }
            subscribe(e) {
              this.reason
                ? e(this.reason)
                : this._listeners
                  ? this._listeners.push(e)
                  : (this._listeners = [e]);
            }
            unsubscribe(e) {
              if (!this._listeners) return;
              const n = this._listeners.indexOf(e);
              -1 !== n && this._listeners.splice(n, 1);
            }
            toAbortSignal() {
              const e = new AbortController(),
                n = (n) => {
                  e.abort(n);
                };
              return (
                this.subscribe(n),
                (e.signal.unsubscribe = () => this.unsubscribe(n)),
                e.signal
              );
            }
            static source() {
              let e;
              return {
                token: new ln(function (n) {
                  e = n;
                }),
                cancel: e,
              };
            }
          }
          const on = {
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
            WebServerIsDown: 521,
            ConnectionTimedOut: 522,
            OriginIsUnreachable: 523,
            TimeoutOccurred: 524,
            SslHandshakeFailed: 525,
            InvalidSslCertificate: 526,
          };
          Object.entries(on).forEach(([e, n]) => {
            on[n] = e;
          });
          const sn = (function e(n) {
            const t = new an(n),
              a = r(an.prototype.request, t);
            return (
              $.extend(a, an.prototype, t, { allOwnKeys: !0 }),
              $.extend(a, t, null, { allOwnKeys: !0 }),
              (a.create = function (t) {
                return e(je(n, t));
              }),
              a
            );
          })(ke);
          ((sn.Axios = an),
            (sn.CanceledError = Ne),
            (sn.CancelToken = ln),
            (sn.isCancel = Ae),
            (sn.VERSION = Ue),
            (sn.toFormData = le),
            (sn.AxiosError = ne),
            (sn.Cancel = sn.CanceledError),
            (sn.all = function (e) {
              return Promise.all(e);
            }),
            (sn.spread = function (e) {
              return function (n) {
                return e.apply(null, n);
              };
            }),
            (sn.isAxiosError = function (e) {
              return $.isObject(e) && !0 === e.isAxiosError;
            }),
            (sn.mergeConfig = je),
            (sn.AxiosHeaders = ee),
            (sn.formToJSON = (e) => xe($.isHTMLForm(e) ? new FormData(e) : e)),
            (sn.getAdapter = Qe),
            (sn.HttpStatusCode = on),
            (sn.default = sn),
            (e.exports = sn));
        },
      },
      r = {};
    function a(e) {
      var n = r[e];
      if (void 0 !== n) return n.exports;
      var i = (r[e] = { id: e, exports: {} });
      return (t[e](i, i.exports, a), i.exports);
    }
    ((a.m = t),
      (a.n = (e) => {
        var n = e && e.__esModule ? () => e.default : () => e;
        return (a.d(n, { a: n }), n);
      }),
      (n = Object.getPrototypeOf
        ? (e) => Object.getPrototypeOf(e)
        : (e) => e.__proto__),
      (a.t = function (t, r) {
        if ((1 & r && (t = this(t)), 8 & r)) return t;
        if ("object" == typeof t && t) {
          if (4 & r && t.__esModule) return t;
          if (16 & r && "function" == typeof t.then) return t;
        }
        var i = Object.create(null);
        a.r(i);
        var l = {};
        e = e || [null, n({}), n([]), n(n)];
        for (
          var o = 2 & r && t;
          ("object" == typeof o || "function" == typeof o) && !~e.indexOf(o);
          o = n(o)
        )
          Object.getOwnPropertyNames(o).forEach((e) => (l[e] = () => t[e]));
        return ((l.default = () => t), a.d(i, l), i);
      }),
      (a.d = (e, n) => {
        for (var t in n)
          a.o(n, t) &&
            !a.o(e, t) &&
            Object.defineProperty(e, t, { enumerable: !0, get: n[t] });
      }),
      (a.g = (function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e) {
          if ("object" == typeof window) return window;
        }
      })()),
      (a.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
      (a.r = (e) => {
        ("undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 }));
      }),
      (a.b =
        ("undefined" != typeof document && document.baseURI) ||
        self.location.href),
      (a.nc = void 0));
    var i = {};
    (a.r(i), a.d(i, { Home: () => Wl }));
    var l = {};
    (a.r(l),
      a.d(l, {
        hasBrowserEnv: () => Ne,
        hasStandardBrowserEnv: () => De,
        hasStandardBrowserWebWorkerEnv: () => _e,
        navigator: () => Ee,
        origin: () => Le,
      }));
    var o = a(338),
      s = a(540),
      u = a.t(s, 2);
    function c(e, n) {
      return function () {
        return e.apply(n, arguments);
      };
    }
    const { toString: d } = Object.prototype,
      { getPrototypeOf: f } = Object,
      { iterator: p, toStringTag: m } = Symbol,
      h =
        ((b = Object.create(null)),
        (e) => {
          const n = d.call(e);
          return b[n] || (b[n] = n.slice(8, -1).toLowerCase());
        });
    var b;
    const v = (e) => ((e = e.toLowerCase()), (n) => h(n) === e),
      g = (e) => (n) => typeof n === e,
      { isArray: w } = Array,
      y = g("undefined");
    function x(e) {
      return (
        null !== e &&
        !y(e) &&
        null !== e.constructor &&
        !y(e.constructor) &&
        S(e.constructor.isBuffer) &&
        e.constructor.isBuffer(e)
      );
    }
    const I = v("ArrayBuffer"),
      k = g("string"),
      S = g("function"),
      A = g("number"),
      N = (e) => null !== e && "object" == typeof e,
      E = (e) => {
        if ("object" !== h(e)) return !1;
        const n = f(e);
        return !(
          (null !== n &&
            n !== Object.prototype &&
            null !== Object.getPrototypeOf(n)) ||
          m in e ||
          p in e
        );
      },
      D = v("Date"),
      _ = v("File"),
      L = v("Blob"),
      O = v("FileList"),
      C =
        "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
              ? window
              : void 0 !== a.g
                ? a.g
                : {},
      R = void 0 !== C.FormData ? C.FormData : void 0,
      P = v("URLSearchParams"),
      [j, T, V, F] = ["ReadableStream", "Request", "Response", "Headers"].map(
        v,
      );
    function z(e, n, { allOwnKeys: t = !1 } = {}) {
      if (null == e) return;
      let r, a;
      if (("object" != typeof e && (e = [e]), w(e)))
        for (r = 0, a = e.length; r < a; r++) n.call(null, e[r], r, e);
      else {
        if (x(e)) return;
        const a = t ? Object.getOwnPropertyNames(e) : Object.keys(e),
          i = a.length;
        let l;
        for (r = 0; r < i; r++) ((l = a[r]), n.call(null, e[l], l, e));
      }
    }
    function M(e, n) {
      if (x(e)) return null;
      n = n.toLowerCase();
      const t = Object.keys(e);
      let r,
        a = t.length;
      for (; a-- > 0; ) if (((r = t[a]), n === r.toLowerCase())) return r;
      return null;
    }
    const B =
        "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
              ? window
              : a.g,
      U = (e) => !y(e) && e !== B,
      H =
        ((G = "undefined" != typeof Uint8Array && f(Uint8Array)),
        (e) => G && e instanceof G);
    var G;
    const q = v("HTMLFormElement"),
      W = (
        ({ hasOwnProperty: e }) =>
        (n, t) =>
          e.call(n, t)
      )(Object.prototype),
      $ = v("RegExp"),
      K = (e, n) => {
        const t = Object.getOwnPropertyDescriptors(e),
          r = {};
        (z(t, (t, a) => {
          let i;
          !1 !== (i = n(t, a, e)) && (r[a] = i || t);
        }),
          Object.defineProperties(e, r));
      },
      X = v("AsyncFunction"),
      J =
        ((Q = "function" == typeof setImmediate),
        (Z = S(B.postMessage)),
        Q
          ? setImmediate
          : Z
            ? ((e, n) => (
                B.addEventListener(
                  "message",
                  ({ source: t, data: r }) => {
                    t === B && r === e && n.length && n.shift()();
                  },
                  !1,
                ),
                (t) => {
                  (n.push(t), B.postMessage(e, "*"));
                }
              ))(`axios@${Math.random()}`, [])
            : (e) => setTimeout(e));
    var Q, Z;
    const Y =
        "undefined" != typeof queueMicrotask
          ? queueMicrotask.bind(B)
          : ("undefined" != typeof process && process.nextTick) || J,
      ee = {
        isArray: w,
        isArrayBuffer: I,
        isBuffer: x,
        isFormData: (e) => {
          if (!e) return !1;
          if (R && e instanceof R) return !0;
          const n = f(e);
          if (!n || n === Object.prototype) return !1;
          if (!S(e.append)) return !1;
          const t = h(e);
          return (
            "formdata" === t ||
            ("object" === t &&
              S(e.toString) &&
              "[object FormData]" === e.toString())
          );
        },
        isArrayBufferView: function (e) {
          let n;
          return (
            (n =
              "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
                ? ArrayBuffer.isView(e)
                : e && e.buffer && I(e.buffer)),
            n
          );
        },
        isString: k,
        isNumber: A,
        isBoolean: (e) => !0 === e || !1 === e,
        isObject: N,
        isPlainObject: E,
        isEmptyObject: (e) => {
          if (!N(e) || x(e)) return !1;
          try {
            return (
              0 === Object.keys(e).length &&
              Object.getPrototypeOf(e) === Object.prototype
            );
          } catch (e) {
            return !1;
          }
        },
        isReadableStream: j,
        isRequest: T,
        isResponse: V,
        isHeaders: F,
        isUndefined: y,
        isDate: D,
        isFile: _,
        isReactNativeBlob: (e) => !(!e || void 0 === e.uri),
        isReactNative: (e) => e && void 0 !== e.getParts,
        isBlob: L,
        isRegExp: $,
        isFunction: S,
        isStream: (e) => N(e) && S(e.pipe),
        isURLSearchParams: P,
        isTypedArray: H,
        isFileList: O,
        forEach: z,
        merge: function e(...n) {
          const { caseless: t, skipUndefined: r } = (U(this) && this) || {},
            a = {},
            i = (n, i) => {
              if ("__proto__" === i || "constructor" === i || "prototype" === i)
                return;
              const l = (t && M(a, i)) || i,
                o = W(a, l) ? a[l] : void 0;
              E(o) && E(n)
                ? (a[l] = e(o, n))
                : E(n)
                  ? (a[l] = e({}, n))
                  : w(n)
                    ? (a[l] = n.slice())
                    : (r && y(n)) || (a[l] = n);
            };
          for (let e = 0, t = n.length; e < t; e++) n[e] && z(n[e], i);
          return a;
        },
        extend: (e, n, t, { allOwnKeys: r } = {}) => (
          z(
            n,
            (n, r) => {
              t && S(n)
                ? Object.defineProperty(e, r, {
                    __proto__: null,
                    value: c(n, t),
                    writable: !0,
                    enumerable: !0,
                    configurable: !0,
                  })
                : Object.defineProperty(e, r, {
                    __proto__: null,
                    value: n,
                    writable: !0,
                    enumerable: !0,
                    configurable: !0,
                  });
            },
            { allOwnKeys: r },
          ),
          e
        ),
        trim: (e) =>
          e.trim
            ? e.trim()
            : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
        stripBOM: (e) => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
        inherits: (e, n, t, r) => {
          ((e.prototype = Object.create(n.prototype, r)),
            Object.defineProperty(e.prototype, "constructor", {
              __proto__: null,
              value: e,
              writable: !0,
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e, "super", {
              __proto__: null,
              value: n.prototype,
            }),
            t && Object.assign(e.prototype, t));
        },
        toFlatObject: (e, n, t, r) => {
          let a, i, l;
          const o = {};
          if (((n = n || {}), null == e)) return n;
          do {
            for (a = Object.getOwnPropertyNames(e), i = a.length; i-- > 0; )
              ((l = a[i]),
                (r && !r(l, e, n)) || o[l] || ((n[l] = e[l]), (o[l] = !0)));
            e = !1 !== t && f(e);
          } while (e && (!t || t(e, n)) && e !== Object.prototype);
          return n;
        },
        kindOf: h,
        kindOfTest: v,
        endsWith: (e, n, t) => {
          ((e = String(e)),
            (void 0 === t || t > e.length) && (t = e.length),
            (t -= n.length));
          const r = e.indexOf(n, t);
          return -1 !== r && r === t;
        },
        toArray: (e) => {
          if (!e) return null;
          if (w(e)) return e;
          let n = e.length;
          if (!A(n)) return null;
          const t = new Array(n);
          for (; n-- > 0; ) t[n] = e[n];
          return t;
        },
        forEachEntry: (e, n) => {
          const t = (e && e[p]).call(e);
          let r;
          for (; (r = t.next()) && !r.done; ) {
            const t = r.value;
            n.call(e, t[0], t[1]);
          }
        },
        matchAll: (e, n) => {
          let t;
          const r = [];
          for (; null !== (t = e.exec(n)); ) r.push(t);
          return r;
        },
        isHTMLForm: q,
        hasOwnProperty: W,
        hasOwnProp: W,
        reduceDescriptors: K,
        freezeMethods: (e) => {
          K(e, (n, t) => {
            if (S(e) && ["arguments", "caller", "callee"].includes(t))
              return !1;
            const r = e[t];
            S(r) &&
              ((n.enumerable = !1),
              "writable" in n
                ? (n.writable = !1)
                : n.set ||
                  (n.set = () => {
                    throw Error("Can not rewrite read-only method '" + t + "'");
                  }));
          });
        },
        toObjectSet: (e, n) => {
          const t = {},
            r = (e) => {
              e.forEach((e) => {
                t[e] = !0;
              });
            };
          return (w(e) ? r(e) : r(String(e).split(n)), t);
        },
        toCamelCase: (e) =>
          e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (e, n, t) {
            return n.toUpperCase() + t;
          }),
        noop: () => {},
        toFiniteNumber: (e, n) =>
          null != e && Number.isFinite((e = +e)) ? e : n,
        findKey: M,
        global: B,
        isContextDefined: U,
        isSpecCompliantForm: function (e) {
          return !!(e && S(e.append) && "FormData" === e[m] && e[p]);
        },
        toJSONObject: (e) => {
          const n = new Array(10),
            t = (e, r) => {
              if (N(e)) {
                if (n.indexOf(e) >= 0) return;
                if (x(e)) return e;
                if (!("toJSON" in e)) {
                  n[r] = e;
                  const a = w(e) ? [] : {};
                  return (
                    z(e, (e, n) => {
                      const i = t(e, r + 1);
                      !y(i) && (a[n] = i);
                    }),
                    (n[r] = void 0),
                    a
                  );
                }
              }
              return e;
            };
          return t(e, 0);
        },
        isAsyncFn: X,
        isThenable: (e) => e && (N(e) || S(e)) && S(e.then) && S(e.catch),
        setImmediate: J,
        asap: Y,
        isIterable: (e) => null != e && S(e[p]),
      },
      ne = ee.toObjectSet([
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
      ]),
      te = (e) => {
        const n = {};
        let t, r, a;
        return (
          e &&
            e.split("\n").forEach(function (e) {
              ((a = e.indexOf(":")),
                (t = e.substring(0, a).trim().toLowerCase()),
                (r = e.substring(a + 1).trim()),
                !t ||
                  (n[t] && ne[t]) ||
                  ("set-cookie" === t
                    ? n[t]
                      ? n[t].push(r)
                      : (n[t] = [r])
                    : (n[t] = n[t] ? n[t] + ", " + r : r)));
            }),
          n
        );
      };
    (Object.getOwnPropertyDescriptor(te, "name") || {}).writable ||
      Object.defineProperty(te, "name", { value: "default", configurable: !0 });
    const re = Symbol("internals"),
      ae = /[^\x09\x20-\x7E\x80-\xFF]/g;
    function ie(e) {
      return e && String(e).trim().toLowerCase();
    }
    function le(e) {
      return !1 === e || null == e
        ? e
        : ee.isArray(e)
          ? e.map(le)
          : (function (e) {
              let n = 0,
                t = e.length;
              for (; n < t; ) {
                const t = e.charCodeAt(n);
                if (9 !== t && 32 !== t) break;
                n += 1;
              }
              for (; t > n; ) {
                const n = e.charCodeAt(t - 1);
                if (9 !== n && 32 !== n) break;
                t -= 1;
              }
              return 0 === n && t === e.length ? e : e.slice(n, t);
            })(String(e).replace(ae, ""));
    }
    function oe(e, n, t, r, a) {
      return ee.isFunction(r)
        ? r.call(this, n, t)
        : (a && (n = t),
          ee.isString(n)
            ? ee.isString(r)
              ? -1 !== n.indexOf(r)
              : ee.isRegExp(r)
                ? r.test(n)
                : void 0
            : void 0);
    }
    class se {
      constructor(e) {
        e && this.set(e);
      }
      set(e, n, t) {
        const r = this;
        function a(e, n, t) {
          const a = ie(n);
          if (!a) throw new Error("header name must be a non-empty string");
          const i = ee.findKey(r, a);
          (!i ||
            void 0 === r[i] ||
            !0 === t ||
            (void 0 === t && !1 !== r[i])) &&
            (r[i || n] = le(e));
        }
        const i = (e, n) => ee.forEach(e, (e, t) => a(e, t, n));
        if (ee.isPlainObject(e) || e instanceof this.constructor) i(e, n);
        else if (
          ee.isString(e) &&
          (e = e.trim()) &&
          !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
        )
          i(te(e), n);
        else if (ee.isObject(e) && ee.isIterable(e)) {
          let t,
            r,
            a = {};
          for (const n of e) {
            if (!ee.isArray(n))
              throw TypeError("Object iterator must return a key-value pair");
            a[(r = n[0])] = (t = a[r])
              ? ee.isArray(t)
                ? [...t, n[1]]
                : [t, n[1]]
              : n[1];
          }
          i(a, n);
        } else null != e && a(n, e, t);
        return this;
      }
      get(e, n) {
        if ((e = ie(e))) {
          const t = ee.findKey(this, e);
          if (t) {
            const e = this[t];
            if (!n) return e;
            if (!0 === n)
              return (function (e) {
                const n = Object.create(null),
                  t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                let r;
                for (; (r = t.exec(e)); ) n[r[1]] = r[2];
                return n;
              })(e);
            if (ee.isFunction(n)) return n.call(this, e, t);
            if (ee.isRegExp(n)) return n.exec(e);
            throw new TypeError("parser must be boolean|regexp|function");
          }
        }
      }
      has(e, n) {
        if ((e = ie(e))) {
          const t = ee.findKey(this, e);
          return !(!t || void 0 === this[t] || (n && !oe(0, this[t], t, n)));
        }
        return !1;
      }
      delete(e, n) {
        const t = this;
        let r = !1;
        function a(e) {
          if ((e = ie(e))) {
            const a = ee.findKey(t, e);
            !a || (n && !oe(0, t[a], a, n)) || (delete t[a], (r = !0));
          }
        }
        return (ee.isArray(e) ? e.forEach(a) : a(e), r);
      }
      clear(e) {
        const n = Object.keys(this);
        let t = n.length,
          r = !1;
        for (; t--; ) {
          const a = n[t];
          (e && !oe(0, this[a], a, e, !0)) || (delete this[a], (r = !0));
        }
        return r;
      }
      normalize(e) {
        const n = this,
          t = {};
        return (
          ee.forEach(this, (r, a) => {
            const i = ee.findKey(t, a);
            if (i) return ((n[i] = le(r)), void delete n[a]);
            const l = e
              ? (function (e) {
                  return e
                    .trim()
                    .toLowerCase()
                    .replace(
                      /([a-z\d])(\w*)/g,
                      (e, n, t) => n.toUpperCase() + t,
                    );
                })(a)
              : String(a).trim();
            (l !== a && delete n[a], (n[l] = le(r)), (t[l] = !0));
          }),
          this
        );
      }
      concat(...e) {
        return this.constructor.concat(this, ...e);
      }
      toJSON(e) {
        const n = Object.create(null);
        return (
          ee.forEach(this, (t, r) => {
            null != t &&
              !1 !== t &&
              (n[r] = e && ee.isArray(t) ? t.join(", ") : t);
          }),
          n
        );
      }
      [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]();
      }
      toString() {
        return Object.entries(this.toJSON())
          .map(([e, n]) => e + ": " + n)
          .join("\n");
      }
      getSetCookie() {
        return this.get("set-cookie") || [];
      }
      get [Symbol.toStringTag]() {
        return "AxiosHeaders";
      }
      static from(e) {
        return e instanceof this ? e : new this(e);
      }
      static concat(e, ...n) {
        const t = new this(e);
        return (n.forEach((e) => t.set(e)), t);
      }
      static accessor(e) {
        const n = (this[re] = this[re] = { accessors: {} }).accessors,
          t = this.prototype;
        function r(e) {
          const r = ie(e);
          n[r] ||
            ((function (e, n) {
              const t = ee.toCamelCase(" " + n);
              ["get", "set", "has"].forEach((r) => {
                Object.defineProperty(e, r + t, {
                  __proto__: null,
                  value: function (e, t, a) {
                    return this[r].call(this, n, e, t, a);
                  },
                  configurable: !0,
                });
              });
            })(t, e),
            (n[r] = !0));
        }
        return (ee.isArray(e) ? e.forEach(r) : r(e), this);
      }
    }
    (se.accessor([
      "Content-Type",
      "Content-Length",
      "Accept",
      "Accept-Encoding",
      "User-Agent",
      "Authorization",
    ]),
      ee.reduceDescriptors(se.prototype, ({ value: e }, n) => {
        let t = n[0].toUpperCase() + n.slice(1);
        return {
          get: () => e,
          set(e) {
            this[t] = e;
          },
        };
      }),
      ee.freezeMethods(se));
    const ue = se;
    class ce extends Error {
      static from(e, n, t, r, a, i) {
        const l = new ce(e.message, n || e.code, t, r, a);
        return (
          (l.cause = e),
          (l.name = e.name),
          null != e.status && null == l.status && (l.status = e.status),
          i && Object.assign(l, i),
          l
        );
      }
      constructor(e, n, t, r, a) {
        (super(e),
          Object.defineProperty(this, "message", {
            __proto__: null,
            value: e,
            enumerable: !0,
            writable: !0,
            configurable: !0,
          }),
          (this.name = "AxiosError"),
          (this.isAxiosError = !0),
          n && (this.code = n),
          t && (this.config = t),
          r && (this.request = r),
          a && ((this.response = a), (this.status = a.status)));
      }
      toJSON() {
        const e = this.config,
          n = e && ee.hasOwnProp(e, "redact") ? e.redact : void 0,
          t =
            ee.isArray(n) && n.length > 0
              ? (function (e, n) {
                  const t = new Set(n.map((e) => String(e).toLowerCase())),
                    r = [],
                    a = (e) => {
                      if (null === e || "object" != typeof e) return e;
                      if (ee.isBuffer(e)) return e;
                      if (-1 !== r.indexOf(e)) return;
                      let n;
                      if (
                        (e instanceof ue && (e = e.toJSON()),
                        r.push(e),
                        ee.isArray(e))
                      )
                        ((n = []),
                          e.forEach((e, t) => {
                            const r = a(e);
                            ee.isUndefined(r) || (n[t] = r);
                          }));
                      else {
                        if (
                          !ee.isPlainObject(e) &&
                          (function (e) {
                            if (ee.hasOwnProp(e, "toJSON")) return !0;
                            let n = Object.getPrototypeOf(e);
                            for (; n && n !== Object.prototype; ) {
                              if (ee.hasOwnProp(n, "toJSON")) return !0;
                              n = Object.getPrototypeOf(n);
                            }
                            return !1;
                          })(e)
                        )
                          return (r.pop(), e);
                        n = Object.create(null);
                        for (const [r, i] of Object.entries(e)) {
                          const e = t.has(r.toLowerCase())
                            ? "[REDACTED ****]"
                            : a(i);
                          ee.isUndefined(e) || (n[r] = e);
                        }
                      }
                      return (r.pop(), n);
                    };
                  return a(e);
                })(e, n)
              : ee.toJSONObject(e);
        return {
          message: this.message,
          name: this.name,
          description: this.description,
          number: this.number,
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          config: t,
          code: this.code,
          status: this.status,
        };
      }
    }
    ((ce.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE"),
      (ce.ERR_BAD_OPTION = "ERR_BAD_OPTION"),
      (ce.ECONNABORTED = "ECONNABORTED"),
      (ce.ETIMEDOUT = "ETIMEDOUT"),
      (ce.ECONNREFUSED = "ECONNREFUSED"),
      (ce.ERR_NETWORK = "ERR_NETWORK"),
      (ce.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS"),
      (ce.ERR_DEPRECATED = "ERR_DEPRECATED"),
      (ce.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE"),
      (ce.ERR_BAD_REQUEST = "ERR_BAD_REQUEST"),
      (ce.ERR_CANCELED = "ERR_CANCELED"),
      (ce.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT"),
      (ce.ERR_INVALID_URL = "ERR_INVALID_URL"),
      (ce.ERR_FORM_DATA_DEPTH_EXCEEDED = "ERR_FORM_DATA_DEPTH_EXCEEDED"));
    const de = ce;
    function fe(e) {
      return ee.isPlainObject(e) || ee.isArray(e);
    }
    function pe(e) {
      return ee.endsWith(e, "[]") ? e.slice(0, -2) : e;
    }
    function me(e, n, t) {
      return e
        ? e
            .concat(n)
            .map(function (e, n) {
              return ((e = pe(e)), !t && n ? "[" + e + "]" : e);
            })
            .join(t ? "." : "")
        : n;
    }
    const he = ee.toFlatObject(ee, {}, null, function (e) {
        return /^is[A-Z]/.test(e);
      }),
      be = function (e, n, t) {
        if (!ee.isObject(e)) throw new TypeError("target must be an object");
        n = n || new FormData();
        const r = (t = ee.toFlatObject(
            t,
            { metaTokens: !0, dots: !1, indexes: !1 },
            !1,
            function (e, n) {
              return !ee.isUndefined(n[e]);
            },
          )).metaTokens,
          a = t.visitor || d,
          i = t.dots,
          l = t.indexes,
          o = t.Blob || ("undefined" != typeof Blob && Blob),
          s = void 0 === t.maxDepth ? 100 : t.maxDepth,
          u = o && ee.isSpecCompliantForm(n);
        if (!ee.isFunction(a))
          throw new TypeError("visitor must be a function");
        function c(e) {
          if (null === e) return "";
          if (ee.isDate(e)) return e.toISOString();
          if (ee.isBoolean(e)) return e.toString();
          if (!u && ee.isBlob(e))
            throw new de("Blob is not supported. Use a Buffer instead.");
          return ee.isArrayBuffer(e) || ee.isTypedArray(e)
            ? u && "function" == typeof Blob
              ? new Blob([e])
              : Buffer.from(e)
            : e;
        }
        function d(e, t, a) {
          let o = e;
          if (ee.isReactNative(n) && ee.isReactNativeBlob(e))
            return (n.append(me(a, t, i), c(e)), !1);
          if (e && !a && "object" == typeof e)
            if (ee.endsWith(t, "{}"))
              ((t = r ? t : t.slice(0, -2)), (e = JSON.stringify(e)));
            else if (
              (ee.isArray(e) &&
                (function (e) {
                  return ee.isArray(e) && !e.some(fe);
                })(e)) ||
              ((ee.isFileList(e) || ee.endsWith(t, "[]")) &&
                (o = ee.toArray(e)))
            )
              return (
                (t = pe(t)),
                o.forEach(function (e, r) {
                  !ee.isUndefined(e) &&
                    null !== e &&
                    n.append(
                      !0 === l ? me([t], r, i) : null === l ? t : t + "[]",
                      c(e),
                    );
                }),
                !1
              );
          return !!fe(e) || (n.append(me(a, t, i), c(e)), !1);
        }
        const f = [],
          p = Object.assign(he, {
            defaultVisitor: d,
            convertValue: c,
            isVisitable: fe,
          });
        if (!ee.isObject(e)) throw new TypeError("data must be an object");
        return (
          (function e(t, r, i = 0) {
            if (!ee.isUndefined(t)) {
              if (i > s)
                throw new de(
                  "Object is too deeply nested (" +
                    i +
                    " levels). Max depth: " +
                    s,
                  de.ERR_FORM_DATA_DEPTH_EXCEEDED,
                );
              if (-1 !== f.indexOf(t))
                throw Error("Circular reference detected in " + r.join("."));
              (f.push(t),
                ee.forEach(t, function (t, l) {
                  !0 ===
                    (!(ee.isUndefined(t) || null === t) &&
                      a.call(n, t, ee.isString(l) ? l.trim() : l, r, p)) &&
                    e(t, r ? r.concat(l) : [l], i + 1);
                }),
                f.pop());
            }
          })(e),
          n
        );
      };
    function ve(e) {
      const n = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
      };
      return encodeURIComponent(e).replace(/[!'()~]|%20/g, function (e) {
        return n[e];
      });
    }
    function ge(e, n) {
      ((this._pairs = []), e && be(e, this, n));
    }
    const we = ge.prototype;
    ((we.append = function (e, n) {
      this._pairs.push([e, n]);
    }),
      (we.toString = function (e) {
        const n = e
          ? function (n) {
              return e.call(this, n, ve);
            }
          : ve;
        return this._pairs
          .map(function (e) {
            return n(e[0]) + "=" + n(e[1]);
          }, "")
          .join("&");
      }));
    const ye = ge;
    function xe(e) {
      return encodeURIComponent(e)
        .replace(/%3A/gi, ":")
        .replace(/%24/g, "$")
        .replace(/%2C/gi, ",")
        .replace(/%20/g, "+");
    }
    function Ie(e, n, t) {
      if (!n) return e;
      const r = (t && t.encode) || xe,
        a = ee.isFunction(t) ? { serialize: t } : t,
        i = a && a.serialize;
      let l;
      if (
        ((l = i
          ? i(n, a)
          : ee.isURLSearchParams(n)
            ? n.toString()
            : new ye(n, a).toString(r)),
        l)
      ) {
        const n = e.indexOf("#");
        (-1 !== n && (e = e.slice(0, n)),
          (e += (-1 === e.indexOf("?") ? "?" : "&") + l));
      }
      return e;
    }
    const ke = class {
        constructor() {
          this.handlers = [];
        }
        use(e, n, t) {
          return (
            this.handlers.push({
              fulfilled: e,
              rejected: n,
              synchronous: !!t && t.synchronous,
              runWhen: t ? t.runWhen : null,
            }),
            this.handlers.length - 1
          );
        }
        eject(e) {
          this.handlers[e] && (this.handlers[e] = null);
        }
        clear() {
          this.handlers && (this.handlers = []);
        }
        forEach(e) {
          ee.forEach(this.handlers, function (n) {
            null !== n && e(n);
          });
        }
      },
      Se = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1,
        legacyInterceptorReqResOrdering: !0,
      },
      Ae = {
        isBrowser: !0,
        classes: {
          URLSearchParams:
            "undefined" != typeof URLSearchParams ? URLSearchParams : ye,
          FormData: "undefined" != typeof FormData ? FormData : null,
          Blob: "undefined" != typeof Blob ? Blob : null,
        },
        protocols: ["http", "https", "file", "blob", "url", "data"],
      },
      Ne = "undefined" != typeof window && "undefined" != typeof document,
      Ee = ("object" == typeof navigator && navigator) || void 0,
      De =
        Ne &&
        (!Ee || ["ReactNative", "NativeScript", "NS"].indexOf(Ee.product) < 0),
      _e =
        "undefined" != typeof WorkerGlobalScope &&
        self instanceof WorkerGlobalScope &&
        "function" == typeof self.importScripts,
      Le = (Ne && window.location.href) || "http://localhost",
      Oe = { ...l, ...Ae },
      Ce = function (e) {
        function n(e, t, r, a) {
          let i = e[a++];
          if ("__proto__" === i) return !0;
          const l = Number.isFinite(+i),
            o = a >= e.length;
          return (
            (i = !i && ee.isArray(r) ? r.length : i),
            o
              ? (ee.hasOwnProp(r, i)
                  ? (r[i] = ee.isArray(r[i]) ? r[i].concat(t) : [r[i], t])
                  : (r[i] = t),
                !l)
              : ((r[i] && ee.isObject(r[i])) || (r[i] = []),
                n(e, t, r[i], a) &&
                  ee.isArray(r[i]) &&
                  (r[i] = (function (e) {
                    const n = {},
                      t = Object.keys(e);
                    let r;
                    const a = t.length;
                    let i;
                    for (r = 0; r < a; r++) ((i = t[r]), (n[i] = e[i]));
                    return n;
                  })(r[i])),
                !l)
          );
        }
        if (ee.isFormData(e) && ee.isFunction(e.entries)) {
          const t = {};
          return (
            ee.forEachEntry(e, (e, r) => {
              n(
                (function (e) {
                  return ee
                    .matchAll(/\w+|\[(\w*)]/g, e)
                    .map((e) => ("[]" === e[0] ? "" : e[1] || e[0]));
                })(e),
                r,
                t,
                0,
              );
            }),
            t
          );
        }
        return null;
      },
      Re = (e, n) => (null != e && ee.hasOwnProp(e, n) ? e[n] : void 0),
      Pe = {
        transitional: Se,
        adapter: ["xhr", "http", "fetch"],
        transformRequest: [
          function (e, n) {
            const t = n.getContentType() || "",
              r = t.indexOf("application/json") > -1,
              a = ee.isObject(e);
            if (
              (a && ee.isHTMLForm(e) && (e = new FormData(e)), ee.isFormData(e))
            )
              return r ? JSON.stringify(Ce(e)) : e;
            if (
              ee.isArrayBuffer(e) ||
              ee.isBuffer(e) ||
              ee.isStream(e) ||
              ee.isFile(e) ||
              ee.isBlob(e) ||
              ee.isReadableStream(e)
            )
              return e;
            if (ee.isArrayBufferView(e)) return e.buffer;
            if (ee.isURLSearchParams(e))
              return (
                n.setContentType(
                  "application/x-www-form-urlencoded;charset=utf-8",
                  !1,
                ),
                e.toString()
              );
            let i;
            if (a) {
              const n = Re(this, "formSerializer");
              if (t.indexOf("application/x-www-form-urlencoded") > -1)
                return (function (e, n) {
                  return be(e, new Oe.classes.URLSearchParams(), {
                    visitor: function (e, n, t, r) {
                      return Oe.isNode && ee.isBuffer(e)
                        ? (this.append(n, e.toString("base64")), !1)
                        : r.defaultVisitor.apply(this, arguments);
                    },
                    ...n,
                  });
                })(e, n).toString();
              if (
                (i = ee.isFileList(e)) ||
                t.indexOf("multipart/form-data") > -1
              ) {
                const t = Re(this, "env"),
                  r = t && t.FormData;
                return be(i ? { "files[]": e } : e, r && new r(), n);
              }
            }
            return a || r
              ? (n.setContentType("application/json", !1),
                (function (e) {
                  if (ee.isString(e))
                    try {
                      return ((0, JSON.parse)(e), ee.trim(e));
                    } catch (e) {
                      if ("SyntaxError" !== e.name) throw e;
                    }
                  return (0, JSON.stringify)(e);
                })(e))
              : e;
          },
        ],
        transformResponse: [
          function (e) {
            const n = Re(this, "transitional") || Pe.transitional,
              t = n && n.forcedJSONParsing,
              r = Re(this, "responseType"),
              a = "json" === r;
            if (ee.isResponse(e) || ee.isReadableStream(e)) return e;
            if (e && ee.isString(e) && ((t && !r) || a)) {
              const t = !(n && n.silentJSONParsing) && a;
              try {
                return JSON.parse(e, Re(this, "parseReviver"));
              } catch (e) {
                if (t) {
                  if ("SyntaxError" === e.name)
                    throw de.from(
                      e,
                      de.ERR_BAD_RESPONSE,
                      this,
                      null,
                      Re(this, "response"),
                    );
                  throw e;
                }
              }
            }
            return e;
          },
        ],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: { FormData: Oe.classes.FormData, Blob: Oe.classes.Blob },
        validateStatus: function (e) {
          return e >= 200 && e < 300;
        },
        headers: {
          common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0,
          },
        },
      };
    ee.forEach(
      ["delete", "get", "head", "post", "put", "patch", "query"],
      (e) => {
        Pe.headers[e] = {};
      },
    );
    const je = Pe;
    function Te(e, n) {
      const t = this || je,
        r = n || t,
        a = ue.from(r.headers);
      let i = r.data;
      return (
        ee.forEach(e, function (e) {
          i = e.call(t, i, a.normalize(), n ? n.status : void 0);
        }),
        a.normalize(),
        i
      );
    }
    function Ve(e) {
      return !(!e || !e.__CANCEL__);
    }
    const Fe = class extends de {
      constructor(e, n, t) {
        (super(null == e ? "canceled" : e, de.ERR_CANCELED, n, t),
          (this.name = "CanceledError"),
          (this.__CANCEL__ = !0));
      }
    };
    function ze(e, n, t) {
      const r = t.config.validateStatus;
      t.status && r && !r(t.status)
        ? n(
            new de(
              "Request failed with status code " + t.status,
              t.status >= 400 && t.status < 500
                ? de.ERR_BAD_REQUEST
                : de.ERR_BAD_RESPONSE,
              t.config,
              t.request,
              t,
            ),
          )
        : e(t);
    }
    const Me = (e, n, t = 3) => {
        let r = 0;
        const a = (function (e, n) {
          e = e || 10;
          const t = new Array(e),
            r = new Array(e);
          let a,
            i = 0,
            l = 0;
          return (
            (n = void 0 !== n ? n : 1e3),
            function (o) {
              const s = Date.now(),
                u = r[l];
              (a || (a = s), (t[i] = o), (r[i] = s));
              let c = l,
                d = 0;
              for (; c !== i; ) ((d += t[c++]), (c %= e));
              if (((i = (i + 1) % e), i === l && (l = (l + 1) % e), s - a < n))
                return;
              const f = u && s - u;
              return f ? Math.round((1e3 * d) / f) : void 0;
            }
          );
        })(50, 250);
        return (function (e, n) {
          let t,
            r,
            a = 0,
            i = 1e3 / n;
          const l = (n, i = Date.now()) => {
            ((a = i), (t = null), r && (clearTimeout(r), (r = null)), e(...n));
          };
          return [
            (...e) => {
              const n = Date.now(),
                o = n - a;
              o >= i
                ? l(e, n)
                : ((t = e),
                  r ||
                    (r = setTimeout(() => {
                      ((r = null), l(t));
                    }, i - o)));
            },
            () => t && l(t),
          ];
        })((t) => {
          const i = t.loaded,
            l = t.lengthComputable ? t.total : void 0,
            o = null != l ? Math.min(i, l) : i,
            s = Math.max(0, o - r),
            u = a(s);
          ((r = Math.max(r, o)),
            e({
              loaded: o,
              total: l,
              progress: l ? o / l : void 0,
              bytes: s,
              rate: u || void 0,
              estimated: u && l ? (l - o) / u : void 0,
              event: t,
              lengthComputable: null != l,
              [n ? "download" : "upload"]: !0,
            }));
        }, t);
      },
      Be = (e, n) => {
        const t = null != e;
        return [
          (r) => n[0]({ lengthComputable: t, total: e, loaded: r }),
          n[1],
        ];
      },
      Ue =
        (e) =>
        (...n) =>
          ee.asap(() => e(...n)),
      He = Oe.hasStandardBrowserEnv
        ? ((e, n) => (t) => (
            (t = new URL(t, Oe.origin)),
            e.protocol === t.protocol &&
              e.host === t.host &&
              (n || e.port === t.port)
          ))(
            new URL(Oe.origin),
            Oe.navigator && /(msie|trident)/i.test(Oe.navigator.userAgent),
          )
        : () => !0,
      Ge = Oe.hasStandardBrowserEnv
        ? {
            write(e, n, t, r, a, i, l) {
              if ("undefined" == typeof document) return;
              const o = [`${e}=${encodeURIComponent(n)}`];
              (ee.isNumber(t) && o.push(`expires=${new Date(t).toUTCString()}`),
                ee.isString(r) && o.push(`path=${r}`),
                ee.isString(a) && o.push(`domain=${a}`),
                !0 === i && o.push("secure"),
                ee.isString(l) && o.push(`SameSite=${l}`),
                (document.cookie = o.join("; ")));
            },
            read(e) {
              if ("undefined" == typeof document) return null;
              const n = document.cookie.split(";");
              for (let t = 0; t < n.length; t++) {
                const r = n[t].replace(/^\s+/, ""),
                  a = r.indexOf("=");
                if (-1 !== a && r.slice(0, a) === e)
                  return decodeURIComponent(r.slice(a + 1));
              }
              return null;
            },
            remove(e) {
              this.write(e, "", Date.now() - 864e5, "/");
            },
          }
        : { write() {}, read: () => null, remove() {} };
    function qe(e, n, t) {
      let r = !(
        "string" == typeof (a = n) && /^([a-z][a-z\d+\-.]*:)?\/\//i.test(a)
      );
      var a;
      return e && (r || !1 === t)
        ? (function (e, n) {
            return n
              ? e.replace(/\/?\/$/, "") + "/" + n.replace(/^\/+/, "")
              : e;
          })(e, n)
        : n;
    }
    const We = (e) => (e instanceof ue ? { ...e } : e);
    function $e(e, n) {
      n = n || {};
      const t = Object.create(null);
      function r(e, n, t, r) {
        return ee.isPlainObject(e) && ee.isPlainObject(n)
          ? ee.merge.call({ caseless: r }, e, n)
          : ee.isPlainObject(n)
            ? ee.merge({}, n)
            : ee.isArray(n)
              ? n.slice()
              : n;
      }
      function a(e, n, t, a) {
        return ee.isUndefined(n)
          ? ee.isUndefined(e)
            ? void 0
            : r(void 0, e, 0, a)
          : r(e, n, 0, a);
      }
      function i(e, n) {
        if (!ee.isUndefined(n)) return r(void 0, n);
      }
      function l(e, n) {
        return ee.isUndefined(n)
          ? ee.isUndefined(e)
            ? void 0
            : r(void 0, e)
          : r(void 0, n);
      }
      function o(t, a, i) {
        return ee.hasOwnProp(n, i)
          ? r(t, a)
          : ee.hasOwnProp(e, i)
            ? r(void 0, t)
            : void 0;
      }
      Object.defineProperty(t, "hasOwnProperty", {
        __proto__: null,
        value: Object.prototype.hasOwnProperty,
        enumerable: !1,
        writable: !0,
        configurable: !0,
      });
      const s = {
        url: i,
        method: i,
        data: i,
        baseURL: l,
        transformRequest: l,
        transformResponse: l,
        paramsSerializer: l,
        timeout: l,
        timeoutMessage: l,
        withCredentials: l,
        withXSRFToken: l,
        adapter: l,
        responseType: l,
        xsrfCookieName: l,
        xsrfHeaderName: l,
        onUploadProgress: l,
        onDownloadProgress: l,
        decompress: l,
        maxContentLength: l,
        maxBodyLength: l,
        beforeRedirect: l,
        transport: l,
        httpAgent: l,
        httpsAgent: l,
        cancelToken: l,
        socketPath: l,
        allowedSocketPaths: l,
        responseEncoding: l,
        validateStatus: o,
        headers: (e, n, t) => a(We(e), We(n), 0, !0),
      };
      return (
        ee.forEach(Object.keys({ ...e, ...n }), function (r) {
          if ("__proto__" === r || "constructor" === r || "prototype" === r)
            return;
          const i = ee.hasOwnProp(s, r) ? s[r] : a,
            l = i(
              ee.hasOwnProp(e, r) ? e[r] : void 0,
              ee.hasOwnProp(n, r) ? n[r] : void 0,
              r,
            );
          (ee.isUndefined(l) && i !== o) || (t[r] = l);
        }),
        t
      );
    }
    const Ke = ["content-type", "content-length"],
      Xe = (e) => {
        const n = $e({}, e),
          t = (e) => (ee.hasOwnProp(n, e) ? n[e] : void 0),
          r = t("data");
        let a = t("withXSRFToken");
        const i = t("xsrfHeaderName"),
          l = t("xsrfCookieName");
        let o = t("headers");
        const s = t("auth"),
          u = t("baseURL"),
          c = t("allowAbsoluteUrls"),
          d = t("url");
        var f;
        if (
          ((n.headers = o = ue.from(o)),
          (n.url = Ie(qe(u, d, c), e.params, e.paramsSerializer)),
          s &&
            o.set(
              "Authorization",
              "Basic " +
                btoa(
                  (s.username || "") +
                    ":" +
                    (s.password
                      ? ((f = s.password),
                        encodeURIComponent(f).replace(
                          /%([0-9A-F]{2})/gi,
                          (e, n) => String.fromCharCode(parseInt(n, 16)),
                        ))
                      : ""),
                ),
            ),
          ee.isFormData(r) &&
            (Oe.hasStandardBrowserEnv || Oe.hasStandardBrowserWebWorkerEnv
              ? o.setContentType(void 0)
              : ee.isFunction(r.getHeaders) &&
                (function (e, n, t) {
                  "content-only" === t
                    ? Object.entries(n).forEach(([n, t]) => {
                        Ke.includes(n.toLowerCase()) && e.set(n, t);
                      })
                    : e.set(n);
                })(o, r.getHeaders(), t("formDataHeaderPolicy"))),
          Oe.hasStandardBrowserEnv &&
            (ee.isFunction(a) && (a = a(n)),
            !0 === a || (null == a && He(n.url))))
        ) {
          const e = i && l && Ge.read(l);
          e && o.set(i, e);
        }
        return n;
      };
    (Object.getOwnPropertyDescriptor(Xe, "name") || {}).writable ||
      Object.defineProperty(Xe, "name", { value: "default", configurable: !0 });
    const Je =
        "undefined" != typeof XMLHttpRequest &&
        function (e) {
          return new Promise(function (n, t) {
            const r = Xe(e);
            let a = r.data;
            const i = ue.from(r.headers).normalize();
            let l,
              o,
              s,
              u,
              c,
              {
                responseType: d,
                onUploadProgress: f,
                onDownloadProgress: p,
              } = r;
            function m() {
              (u && u(),
                c && c(),
                r.cancelToken && r.cancelToken.unsubscribe(l),
                r.signal && r.signal.removeEventListener("abort", l));
            }
            let h = new XMLHttpRequest();
            function b() {
              if (!h) return;
              const r = ue.from(
                "getAllResponseHeaders" in h && h.getAllResponseHeaders(),
              );
              (ze(
                function (e) {
                  (n(e), m());
                },
                function (e) {
                  (t(e), m());
                },
                {
                  data:
                    d && "text" !== d && "json" !== d
                      ? h.response
                      : h.responseText,
                  status: h.status,
                  statusText: h.statusText,
                  headers: r,
                  config: e,
                  request: h,
                },
              ),
                (h = null));
            }
            (h.open(r.method.toUpperCase(), r.url, !0),
              (h.timeout = r.timeout),
              "onloadend" in h
                ? (h.onloadend = b)
                : (h.onreadystatechange = function () {
                    h &&
                      4 === h.readyState &&
                      (0 !== h.status ||
                        (h.responseURL && h.responseURL.startsWith("file:"))) &&
                      setTimeout(b);
                  }),
              (h.onabort = function () {
                h &&
                  (t(new de("Request aborted", de.ECONNABORTED, e, h)),
                  m(),
                  (h = null));
              }),
              (h.onerror = function (n) {
                const r = n && n.message ? n.message : "Network Error",
                  a = new de(r, de.ERR_NETWORK, e, h);
                ((a.event = n || null), t(a), m(), (h = null));
              }),
              (h.ontimeout = function () {
                let n = r.timeout
                  ? "timeout of " + r.timeout + "ms exceeded"
                  : "timeout exceeded";
                const a = r.transitional || Se;
                (r.timeoutErrorMessage && (n = r.timeoutErrorMessage),
                  t(
                    new de(
                      n,
                      a.clarifyTimeoutError ? de.ETIMEDOUT : de.ECONNABORTED,
                      e,
                      h,
                    ),
                  ),
                  m(),
                  (h = null));
              }),
              void 0 === a && i.setContentType(null),
              "setRequestHeader" in h &&
                ee.forEach(i.toJSON(), function (e, n) {
                  h.setRequestHeader(n, e);
                }),
              ee.isUndefined(r.withCredentials) ||
                (h.withCredentials = !!r.withCredentials),
              d && "json" !== d && (h.responseType = r.responseType),
              p && (([s, c] = Me(p, !0)), h.addEventListener("progress", s)),
              f &&
                h.upload &&
                (([o, u] = Me(f)),
                h.upload.addEventListener("progress", o),
                h.upload.addEventListener("loadend", u)),
              (r.cancelToken || r.signal) &&
                ((l = (n) => {
                  h &&
                    (t(!n || n.type ? new Fe(null, e, h) : n),
                    h.abort(),
                    m(),
                    (h = null));
                }),
                r.cancelToken && r.cancelToken.subscribe(l),
                r.signal &&
                  (r.signal.aborted
                    ? l()
                    : r.signal.addEventListener("abort", l))));
            const v = (function (e) {
              const n = /^([-+\w]{1,25}):(?:\/\/)?/.exec(e);
              return (n && n[1]) || "";
            })(r.url);
            !v || Oe.protocols.includes(v)
              ? h.send(a || null)
              : t(
                  new de(
                    "Unsupported protocol " + v + ":",
                    de.ERR_BAD_REQUEST,
                    e,
                  ),
                );
          });
        },
      Qe = (e, n) => {
        const { length: t } = (e = e ? e.filter(Boolean) : []);
        if (n || t) {
          let t,
            r = new AbortController();
          const a = function (e) {
            if (!t) {
              ((t = !0), l());
              const n = e instanceof Error ? e : this.reason;
              r.abort(
                n instanceof de
                  ? n
                  : new Fe(n instanceof Error ? n.message : n),
              );
            }
          };
          let i =
            n &&
            setTimeout(() => {
              ((i = null),
                a(new de(`timeout of ${n}ms exceeded`, de.ETIMEDOUT)));
            }, n);
          const l = () => {
            e &&
              (i && clearTimeout(i),
              (i = null),
              e.forEach((e) => {
                e.unsubscribe
                  ? e.unsubscribe(a)
                  : e.removeEventListener("abort", a);
              }),
              (e = null));
          };
          e.forEach((e) => e.addEventListener("abort", a));
          const { signal: o } = r;
          return ((o.unsubscribe = () => ee.asap(l)), o);
        }
      },
      Ze = function* (e, n) {
        let t = e.byteLength;
        if (!n || t < n) return void (yield e);
        let r,
          a = 0;
        for (; a < t; ) ((r = a + n), yield e.slice(a, r), (a = r));
      },
      Ye = (e, n, t, r) => {
        const a = (async function* (e, n) {
          for await (const t of (async function* (e) {
            if (e[Symbol.asyncIterator]) return void (yield* e);
            const n = e.getReader();
            try {
              for (;;) {
                const { done: e, value: t } = await n.read();
                if (e) break;
                yield t;
              }
            } finally {
              await n.cancel();
            }
          })(e))
            yield* Ze(t, n);
        })(e, n);
        let i,
          l = 0,
          o = (e) => {
            i || ((i = !0), r && r(e));
          };
        return new ReadableStream(
          {
            async pull(e) {
              try {
                const { done: n, value: r } = await a.next();
                if (n) return (o(), void e.close());
                let i = r.byteLength;
                if (t) {
                  let e = (l += i);
                  t(e);
                }
                e.enqueue(new Uint8Array(r));
              } catch (e) {
                throw (o(e), e);
              }
            },
            cancel: (e) => (o(e), a.return()),
          },
          { highWaterMark: 2 },
        );
      },
      en = "1.16.0",
      { isFunction: nn } = ee,
      tn = (e, ...n) => {
        try {
          return !!e(...n);
        } catch (e) {
          return !1;
        }
      },
      rn = (e) => {
        const n = ee.global ?? globalThis,
          { ReadableStream: t, TextEncoder: r } = n;
        e = ee.merge.call(
          { skipUndefined: !0 },
          { Request: n.Request, Response: n.Response },
          e,
        );
        const { fetch: a, Request: i, Response: l } = e,
          o = a ? nn(a) : "function" == typeof fetch,
          s = nn(i),
          u = nn(l);
        if (!o) return !1;
        const c = o && nn(t),
          d =
            o &&
            ("function" == typeof r
              ? ((f = new r()), (e) => f.encode(e))
              : async (e) => new Uint8Array(await new i(e).arrayBuffer()));
        var f;
        const p =
            s &&
            c &&
            tn(() => {
              let e = !1;
              const n = new i(Oe.origin, {
                  body: new t(),
                  method: "POST",
                  get duplex() {
                    return ((e = !0), "half");
                  },
                }),
                r = n.headers.has("Content-Type");
              return (null != n.body && n.body.cancel(), e && !r);
            }),
          m = u && c && tn(() => ee.isReadableStream(new l("").body)),
          h = { stream: m && ((e) => e.body) };
        o &&
          ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
            !h[e] &&
              (h[e] = (n, t) => {
                let r = n && n[e];
                if (r) return r.call(n);
                throw new de(
                  `Response type '${e}' is not supported`,
                  de.ERR_NOT_SUPPORT,
                  t,
                );
              });
          });
        const b = async (e, n) => {
          const t = ee.toFiniteNumber(e.getContentLength());
          return null == t
            ? (async (e) => {
                if (null == e) return 0;
                if (ee.isBlob(e)) return e.size;
                if (ee.isSpecCompliantForm(e)) {
                  const n = new i(Oe.origin, { method: "POST", body: e });
                  return (await n.arrayBuffer()).byteLength;
                }
                return ee.isArrayBufferView(e) || ee.isArrayBuffer(e)
                  ? e.byteLength
                  : (ee.isURLSearchParams(e) && (e += ""),
                    ee.isString(e) ? (await d(e)).byteLength : void 0);
              })(n)
            : t;
        };
        return async (e) => {
          let {
            url: n,
            method: t,
            data: o,
            signal: u,
            cancelToken: c,
            timeout: d,
            onDownloadProgress: f,
            onUploadProgress: v,
            responseType: g,
            headers: w,
            withCredentials: y = "same-origin",
            fetchOptions: x,
            maxContentLength: I,
            maxBodyLength: k,
          } = Xe(e);
          const S = ee.isNumber(I) && I > -1,
            A = ee.isNumber(k) && k > -1;
          let N = a || fetch;
          g = g ? (g + "").toLowerCase() : "text";
          let E = Qe([u, c && c.toAbortSignal()], d),
            D = null;
          const _ =
            E &&
            E.unsubscribe &&
            (() => {
              E.unsubscribe();
            });
          let L;
          try {
            if (S && "string" == typeof n && n.startsWith("data:")) {
              const t = (function (e) {
                if (!e || "string" != typeof e) return 0;
                if (!e.startsWith("data:")) return 0;
                const n = e.indexOf(",");
                if (n < 0) return 0;
                const t = e.slice(5, n),
                  r = e.slice(n + 1);
                if (/;base64/i.test(t)) {
                  let e = r.length;
                  const n = r.length;
                  for (let t = 0; t < n; t++)
                    if (37 === r.charCodeAt(t) && t + 2 < n) {
                      const n = r.charCodeAt(t + 1),
                        a = r.charCodeAt(t + 2);
                      ((n >= 48 && n <= 57) ||
                        (n >= 65 && n <= 70) ||
                        (n >= 97 && n <= 102)) &&
                        ((a >= 48 && a <= 57) ||
                          (a >= 65 && a <= 70) ||
                          (a >= 97 && a <= 102)) &&
                        ((e -= 2), (t += 2));
                    }
                  let t = 0,
                    a = n - 1;
                  const i = (e) =>
                    e >= 2 &&
                    37 === r.charCodeAt(e - 2) &&
                    51 === r.charCodeAt(e - 1) &&
                    (68 === r.charCodeAt(e) || 100 === r.charCodeAt(e));
                  (a >= 0 &&
                    (61 === r.charCodeAt(a)
                      ? (t++, a--)
                      : i(a) && (t++, (a -= 3))),
                    1 === t &&
                      a >= 0 &&
                      (61 === r.charCodeAt(a) || i(a)) &&
                      t++);
                  const l = 3 * Math.floor(e / 4) - (t || 0);
                  return l > 0 ? l : 0;
                }
                if (
                  "undefined" != typeof Buffer &&
                  "function" == typeof Buffer.byteLength
                )
                  return Buffer.byteLength(r, "utf8");
                let a = 0;
                for (let e = 0, n = r.length; e < n; e++) {
                  const t = r.charCodeAt(e);
                  if (t < 128) a += 1;
                  else if (t < 2048) a += 2;
                  else if (t >= 55296 && t <= 56319 && e + 1 < n) {
                    const n = r.charCodeAt(e + 1);
                    n >= 56320 && n <= 57343 ? ((a += 4), e++) : (a += 3);
                  } else a += 3;
                }
                return a;
              })(n);
              if (t > I)
                throw new de(
                  "maxContentLength size of " + I + " exceeded",
                  de.ERR_BAD_RESPONSE,
                  e,
                  D,
                );
            }
            if (A && "get" !== t && "head" !== t) {
              const n = await b(w, o);
              if ("number" == typeof n && isFinite(n) && n > k)
                throw new de(
                  "Request body larger than maxBodyLength limit",
                  de.ERR_BAD_REQUEST,
                  e,
                  D,
                );
            }
            if (
              v &&
              p &&
              "get" !== t &&
              "head" !== t &&
              0 !== (L = await b(w, o))
            ) {
              let e,
                t = new i(n, { method: "POST", body: o, duplex: "half" });
              if (
                (ee.isFormData(o) &&
                  (e = t.headers.get("content-type")) &&
                  w.setContentType(e),
                t.body)
              ) {
                const [e, n] = Be(L, Me(Ue(v)));
                o = Ye(t.body, 65536, e, n);
              }
            }
            ee.isString(y) || (y = y ? "include" : "omit");
            const a = s && "credentials" in i.prototype;
            if (ee.isFormData(o)) {
              const e = w.getContentType();
              e &&
                /^multipart\/form-data/i.test(e) &&
                !/boundary=/i.test(e) &&
                w.delete("content-type");
            }
            w.set("User-Agent", "axios/" + en, !1);
            const u = {
              ...x,
              signal: E,
              method: t.toUpperCase(),
              headers: w.normalize().toJSON(),
              body: o,
              duplex: "half",
              credentials: a ? y : void 0,
            };
            D = s && new i(n, u);
            let c = await (s ? N(D, x) : N(n, u));
            if (S) {
              const n = ee.toFiniteNumber(c.headers.get("content-length"));
              if (null != n && n > I)
                throw new de(
                  "maxContentLength size of " + I + " exceeded",
                  de.ERR_BAD_RESPONSE,
                  e,
                  D,
                );
            }
            const d = m && ("stream" === g || "response" === g);
            if (m && c.body && (f || S || (d && _))) {
              const n = {};
              ["status", "statusText", "headers"].forEach((e) => {
                n[e] = c[e];
              });
              const t = ee.toFiniteNumber(c.headers.get("content-length")),
                [r, a] = (f && Be(t, Me(Ue(f), !0))) || [];
              let i = 0;
              const o = (n) => {
                if (S && ((i = n), i > I))
                  throw new de(
                    "maxContentLength size of " + I + " exceeded",
                    de.ERR_BAD_RESPONSE,
                    e,
                    D,
                  );
                r && r(n);
              };
              c = new l(
                Ye(c.body, 65536, o, () => {
                  (a && a(), _ && _());
                }),
                n,
              );
            }
            g = g || "text";
            let O = await h[ee.findKey(h, g) || "text"](c, e);
            if (S && !m && !d) {
              let n;
              if (
                (null != O &&
                  ("number" == typeof O.byteLength
                    ? (n = O.byteLength)
                    : "number" == typeof O.size
                      ? (n = O.size)
                      : "string" == typeof O &&
                        (n =
                          "function" == typeof r
                            ? new r().encode(O).byteLength
                            : O.length)),
                "number" == typeof n && n > I)
              )
                throw new de(
                  "maxContentLength size of " + I + " exceeded",
                  de.ERR_BAD_RESPONSE,
                  e,
                  D,
                );
            }
            return (
              !d && _ && _(),
              await new Promise((n, t) => {
                ze(n, t, {
                  data: O,
                  headers: ue.from(c.headers),
                  status: c.status,
                  statusText: c.statusText,
                  config: e,
                  request: D,
                });
              })
            );
          } catch (n) {
            if ((_ && _(), E && E.aborted && E.reason instanceof de)) {
              const t = E.reason;
              throw (
                (t.config = e),
                D && (t.request = D),
                n !== t && (t.cause = n),
                t
              );
            }
            if (
              n &&
              "TypeError" === n.name &&
              /Load failed|fetch/i.test(n.message)
            )
              throw Object.assign(
                new de("Network Error", de.ERR_NETWORK, e, D, n && n.response),
                { cause: n.cause || n },
              );
            throw de.from(n, n && n.code, e, D, n && n.response);
          }
        };
      },
      an = new Map(),
      ln = (e) => {
        let n = (e && e.env) || {};
        const { fetch: t, Request: r, Response: a } = n,
          i = [r, a, t];
        let l,
          o,
          s = i.length,
          u = an;
        for (; s--; )
          ((l = i[s]),
            (o = u.get(l)),
            void 0 === o && u.set(l, (o = s ? new Map() : rn(n))),
            (u = o));
        return o;
      },
      on = (ln(), { http: null, xhr: Je, fetch: { get: ln } });
    ee.forEach(on, (e, n) => {
      if (e) {
        try {
          Object.defineProperty(e, "name", { __proto__: null, value: n });
        } catch (e) {}
        Object.defineProperty(e, "adapterName", { __proto__: null, value: n });
      }
    });
    const sn = (e) => `- ${e}`,
      un = (e) => ee.isFunction(e) || null === e || !1 === e,
      cn = function (e, n) {
        e = ee.isArray(e) ? e : [e];
        const { length: t } = e;
        let r, a;
        const i = {};
        for (let l = 0; l < t; l++) {
          let t;
          if (
            ((r = e[l]),
            (a = r),
            !un(r) && ((a = on[(t = String(r)).toLowerCase()]), void 0 === a))
          )
            throw new de(`Unknown adapter '${t}'`);
          if (a && (ee.isFunction(a) || (a = a.get(n)))) break;
          i[t || "#" + l] = a;
        }
        if (!a) {
          const e = Object.entries(i).map(
            ([e, n]) =>
              `adapter ${e} ` +
              (!1 === n
                ? "is not supported by the environment"
                : "is not available in the build"),
          );
          let n = t
            ? e.length > 1
              ? "since :\n" + e.map(sn).join("\n")
              : " " + sn(e[0])
            : "as no adapter specified";
          throw new de(
            "There is no suitable adapter to dispatch the request " + n,
            "ERR_NOT_SUPPORT",
          );
        }
        return a;
      };
    function dn(e) {
      if (
        (e.cancelToken && e.cancelToken.throwIfRequested(),
        e.signal && e.signal.aborted)
      )
        throw new Fe(null, e);
    }
    function fn(e) {
      return (
        dn(e),
        (e.headers = ue.from(e.headers)),
        (e.data = Te.call(e, e.transformRequest)),
        -1 !== ["post", "put", "patch"].indexOf(e.method) &&
          e.headers.setContentType("application/x-www-form-urlencoded", !1),
        cn(
          e.adapter || je.adapter,
          e,
        )(e).then(
          function (n) {
            (dn(e), (e.response = n));
            try {
              n.data = Te.call(e, e.transformResponse, n);
            } finally {
              delete e.response;
            }
            return ((n.headers = ue.from(n.headers)), n);
          },
          function (n) {
            if (!Ve(n) && (dn(e), n && n.response)) {
              e.response = n.response;
              try {
                n.response.data = Te.call(e, e.transformResponse, n.response);
              } finally {
                delete e.response;
              }
              n.response.headers = ue.from(n.response.headers);
            }
            return Promise.reject(n);
          },
        )
      );
    }
    const pn = {};
    ["object", "boolean", "number", "function", "string", "symbol"].forEach(
      (e, n) => {
        pn[e] = function (t) {
          return typeof t === e || "a" + (n < 1 ? "n " : " ") + e;
        };
      },
    );
    const mn = {};
    ((pn.transitional = function (e, n, t) {
      function r(e, n) {
        return (
          "[Axios v" +
          en +
          "] Transitional option '" +
          e +
          "'" +
          n +
          (t ? ". " + t : "")
        );
      }
      return (t, a, i) => {
        if (!1 === e)
          throw new de(
            r(a, " has been removed" + (n ? " in " + n : "")),
            de.ERR_DEPRECATED,
          );
        return (
          n &&
            !mn[a] &&
            ((mn[a] = !0),
            console.warn(
              r(
                a,
                " has been deprecated since v" +
                  n +
                  " and will be removed in the near future",
              ),
            )),
          !e || e(t, a, i)
        );
      };
    }),
      (pn.spelling = function (e) {
        return (n, t) => (
          console.warn(`${t} is likely a misspelling of ${e}`),
          !0
        );
      }));
    const hn = {
        assertOptions: function (e, n, t) {
          if ("object" != typeof e)
            throw new de("options must be an object", de.ERR_BAD_OPTION_VALUE);
          const r = Object.keys(e);
          let a = r.length;
          for (; a-- > 0; ) {
            const i = r[a],
              l = Object.prototype.hasOwnProperty.call(n, i) ? n[i] : void 0;
            if (l) {
              const n = e[i],
                t = void 0 === n || l(n, i, e);
              if (!0 !== t)
                throw new de(
                  "option " + i + " must be " + t,
                  de.ERR_BAD_OPTION_VALUE,
                );
              continue;
            }
            if (!0 !== t)
              throw new de("Unknown option " + i, de.ERR_BAD_OPTION);
          }
        },
        validators: pn,
      },
      bn = hn.validators;
    class vn {
      constructor(e) {
        ((this.defaults = e || {}),
          (this.interceptors = { request: new ke(), response: new ke() }));
      }
      async request(e, n) {
        try {
          return await this._request(e, n);
        } catch (e) {
          if (e instanceof Error) {
            let n = {};
            Error.captureStackTrace
              ? Error.captureStackTrace(n)
              : (n = new Error());
            const t = (() => {
              if (!n.stack) return "";
              const e = n.stack.indexOf("\n");
              return -1 === e ? "" : n.stack.slice(e + 1);
            })();
            try {
              if (e.stack) {
                if (t) {
                  const n = t.indexOf("\n"),
                    r = -1 === n ? -1 : t.indexOf("\n", n + 1),
                    a = -1 === r ? "" : t.slice(r + 1);
                  String(e.stack).endsWith(a) || (e.stack += "\n" + t);
                }
              } else e.stack = t;
            } catch (e) {}
          }
          throw e;
        }
      }
      _request(e, n) {
        ("string" == typeof e ? ((n = n || {}).url = e) : (n = e || {}),
          (n = $e(this.defaults, n)));
        const { transitional: t, paramsSerializer: r, headers: a } = n;
        (void 0 !== t &&
          hn.assertOptions(
            t,
            {
              silentJSONParsing: bn.transitional(bn.boolean),
              forcedJSONParsing: bn.transitional(bn.boolean),
              clarifyTimeoutError: bn.transitional(bn.boolean),
              legacyInterceptorReqResOrdering: bn.transitional(bn.boolean),
            },
            !1,
          ),
          null != r &&
            (ee.isFunction(r)
              ? (n.paramsSerializer = { serialize: r })
              : hn.assertOptions(
                  r,
                  { encode: bn.function, serialize: bn.function },
                  !0,
                )),
          void 0 !== n.allowAbsoluteUrls ||
            (void 0 !== this.defaults.allowAbsoluteUrls
              ? (n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
              : (n.allowAbsoluteUrls = !0)),
          hn.assertOptions(
            n,
            {
              baseUrl: bn.spelling("baseURL"),
              withXsrfToken: bn.spelling("withXSRFToken"),
            },
            !0,
          ),
          (n.method = (
            n.method ||
            this.defaults.method ||
            "get"
          ).toLowerCase()));
        let i = a && ee.merge(a.common, a[n.method]);
        (a &&
          ee.forEach(
            [
              "delete",
              "get",
              "head",
              "post",
              "put",
              "patch",
              "query",
              "common",
            ],
            (e) => {
              delete a[e];
            },
          ),
          (n.headers = ue.concat(i, a)));
        const l = [];
        let o = !0;
        this.interceptors.request.forEach(function (e) {
          if ("function" == typeof e.runWhen && !1 === e.runWhen(n)) return;
          o = o && e.synchronous;
          const t = n.transitional || Se;
          t && t.legacyInterceptorReqResOrdering
            ? l.unshift(e.fulfilled, e.rejected)
            : l.push(e.fulfilled, e.rejected);
        });
        const s = [];
        let u;
        this.interceptors.response.forEach(function (e) {
          s.push(e.fulfilled, e.rejected);
        });
        let c,
          d = 0;
        if (!o) {
          const e = [fn.bind(this), void 0];
          for (
            e.unshift(...l), e.push(...s), c = e.length, u = Promise.resolve(n);
            d < c;

          )
            u = u.then(e[d++], e[d++]);
          return u;
        }
        c = l.length;
        let f = n;
        for (; d < c; ) {
          const e = l[d++],
            n = l[d++];
          try {
            f = e(f);
          } catch (e) {
            n.call(this, e);
            break;
          }
        }
        try {
          u = fn.call(this, f);
        } catch (e) {
          return Promise.reject(e);
        }
        for (d = 0, c = s.length; d < c; ) u = u.then(s[d++], s[d++]);
        return u;
      }
      getUri(e) {
        return Ie(
          qe((e = $e(this.defaults, e)).baseURL, e.url, e.allowAbsoluteUrls),
          e.params,
          e.paramsSerializer,
        );
      }
    }
    (ee.forEach(["delete", "get", "head", "options"], function (e) {
      vn.prototype[e] = function (n, t) {
        return this.request(
          $e(t || {}, { method: e, url: n, data: (t || {}).data }),
        );
      };
    }),
      ee.forEach(["post", "put", "patch", "query"], function (e) {
        function n(n) {
          return function (t, r, a) {
            return this.request(
              $e(a || {}, {
                method: e,
                headers: n ? { "Content-Type": "multipart/form-data" } : {},
                url: t,
                data: r,
              }),
            );
          };
        }
        ((vn.prototype[e] = n()),
          "query" !== e && (vn.prototype[e + "Form"] = n(!0)));
      }));
    const gn = vn;
    class wn {
      constructor(e) {
        if ("function" != typeof e)
          throw new TypeError("executor must be a function.");
        let n;
        this.promise = new Promise(function (e) {
          n = e;
        });
        const t = this;
        (this.promise.then((e) => {
          if (!t._listeners) return;
          let n = t._listeners.length;
          for (; n-- > 0; ) t._listeners[n](e);
          t._listeners = null;
        }),
          (this.promise.then = (e) => {
            let n;
            const r = new Promise((e) => {
              (t.subscribe(e), (n = e));
            }).then(e);
            return (
              (r.cancel = function () {
                t.unsubscribe(n);
              }),
              r
            );
          }),
          e(function (e, r, a) {
            t.reason || ((t.reason = new Fe(e, r, a)), n(t.reason));
          }));
      }
      throwIfRequested() {
        if (this.reason) throw this.reason;
      }
      subscribe(e) {
        this.reason
          ? e(this.reason)
          : this._listeners
            ? this._listeners.push(e)
            : (this._listeners = [e]);
      }
      unsubscribe(e) {
        if (!this._listeners) return;
        const n = this._listeners.indexOf(e);
        -1 !== n && this._listeners.splice(n, 1);
      }
      toAbortSignal() {
        const e = new AbortController(),
          n = (n) => {
            e.abort(n);
          };
        return (
          this.subscribe(n),
          (e.signal.unsubscribe = () => this.unsubscribe(n)),
          e.signal
        );
      }
      static source() {
        let e;
        return {
          token: new wn(function (n) {
            e = n;
          }),
          cancel: e,
        };
      }
    }
    const yn = wn,
      xn = {
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
        WebServerIsDown: 521,
        ConnectionTimedOut: 522,
        OriginIsUnreachable: 523,
        TimeoutOccurred: 524,
        SslHandshakeFailed: 525,
        InvalidSslCertificate: 526,
      };
    Object.entries(xn).forEach(([e, n]) => {
      xn[n] = e;
    });
    const In = xn,
      kn = (function e(n) {
        const t = new gn(n),
          r = c(gn.prototype.request, t);
        return (
          ee.extend(r, gn.prototype, t, { allOwnKeys: !0 }),
          ee.extend(r, t, null, { allOwnKeys: !0 }),
          (r.create = function (t) {
            return e($e(n, t));
          }),
          r
        );
      })(je);
    ((kn.Axios = gn),
      (kn.CanceledError = Fe),
      (kn.CancelToken = yn),
      (kn.isCancel = Ve),
      (kn.VERSION = en),
      (kn.toFormData = be),
      (kn.AxiosError = de),
      (kn.Cancel = kn.CanceledError),
      (kn.all = function (e) {
        return Promise.all(e);
      }),
      (kn.spread = function (e) {
        return function (n) {
          return e.apply(null, n);
        };
      }),
      (kn.isAxiosError = function (e) {
        return ee.isObject(e) && !0 === e.isAxiosError;
      }),
      (kn.mergeConfig = $e),
      (kn.AxiosHeaders = ue),
      (kn.formToJSON = (e) => Ce(ee.isHTMLForm(e) ? new FormData(e) : e)),
      (kn.getAdapter = cn),
      (kn.HttpStatusCode = In),
      (kn.default = kn));
    const Sn = kn;
    var An = a(72),
      Nn = a.n(An),
      En = a(825),
      Dn = a.n(En),
      _n = a(659),
      Ln = a.n(_n),
      On = a(56),
      Cn = a.n(On),
      Rn = a(159),
      Pn = a.n(Rn),
      jn = a(113),
      Tn = a.n(jn),
      Vn = a(653),
      Fn = {};
    ((Fn.styleTagTransform = Tn()),
      (Fn.setAttributes = Cn()),
      (Fn.insert = Ln().bind(null, "head")),
      (Fn.domAPI = Dn()),
      (Fn.insertStyleElement = Pn()),
      Nn()(Vn.A, Fn),
      Vn.A && Vn.A.locals && Vn.A.locals);
    var zn = "en-".concat("US".toLowerCase());
    if (window.location.host.indexOf(".nvidia.cn") > -1) zn = "zh-cn";
    else {
      var Mn = window.location.pathname.split("/");
      zn =
        Mn[1] && Mn[1].includes("-")
          ? Mn[1].toLowerCase()
          : Mn[1] && Mn[2] && Mn[2].includes("_")
            ? Mn[2].replace("_", "-").toLowerCase()
            : "";
    }
    console.log("Current Locale:", zn);
    var Bn = zn,
      Un = a(848);
    const Hn = function (e) {
      var n = e.results,
        t = (e.currentPage - 1) * e.pageSize,
        r =
          (!Bn || Bn.startsWith("en"),
          function (e) {
            return e.replace(/\\u([0-9A-Fa-f]{4})/g, function (e, n) {
              return String.fromCharCode(parseInt(n, 16));
            });
          });
      return (0, Un.jsx)("div", {
        className: "librarian-resultsContainer",
        children: (0, Un.jsx)("ul", {
          className: "librarian-ul-list",
          children: n.map(function (e, n) {
            return (0, Un.jsx)(
              "li",
              {
                className: "librarian-results",
                children: (0, Un.jsx)("a", {
                  href: e.document_url,
                  className: "librarian-result-item",
                  children: (0, Un.jsxs)("div", {
                    className: "librarian-result-heading",
                    children: [
                      (0, Un.jsx)("span", {
                        className: "librarian-result-number",
                        "aria-hidden": "true",
                        children: t + n + 1,
                      }),
                      (0, Un.jsxs)("div", {
                        className: "librarian-result-body",
                        children: [
                          (0, Un.jsx)("div", {
                            className: "librarian-result-title",
                            children: r(e.document_title),
                          }),
                          (0, Un.jsx)(
                            "p",
                            {
                              className: "librarian-result-description",
                              children: r(e.text),
                            },
                            n,
                          ),
                          (0, Un.jsx)("div", {
                            className: "librarian-result-link",
                            children: e.display_url || e.document_url,
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              },
              n,
            );
          }),
        }),
      });
    };
    var Gn = a(952),
      qn = {};
    ((qn.styleTagTransform = Tn()),
      (qn.setAttributes = Cn()),
      (qn.insert = Ln().bind(null, "head")),
      (qn.domAPI = Dn()),
      (qn.insertStyleElement = Pn()),
      Nn()(Gn.A, qn),
      Gn.A && Gn.A.locals && Gn.A.locals);
    var Wn = a(393),
      $n = {};
    function Kn() {
      return (
        (Kn = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var t = arguments[n];
                for (var r in t)
                  ({}).hasOwnProperty.call(t, r) && (e[r] = t[r]);
              }
              return e;
            }),
        Kn.apply(null, arguments)
      );
    }
    (($n.styleTagTransform = Tn()),
      ($n.setAttributes = Cn()),
      ($n.insert = Ln().bind(null, "head")),
      ($n.domAPI = Dn()),
      ($n.insertStyleElement = Pn()),
      Nn()(Wn.A, $n),
      Wn.A && Wn.A.locals && Wn.A.locals);
    var Xn = (function () {
        function e(e) {
          var n = this;
          ((this._insertTag = function (e) {
            var t;
            ((t =
              0 === n.tags.length
                ? n.insertionPoint
                  ? n.insertionPoint.nextSibling
                  : n.prepend
                    ? n.container.firstChild
                    : n.before
                : n.tags[n.tags.length - 1].nextSibling),
              n.container.insertBefore(e, t),
              n.tags.push(e));
          }),
            (this.isSpeedy = void 0 === e.speedy || e.speedy),
            (this.tags = []),
            (this.ctr = 0),
            (this.nonce = e.nonce),
            (this.key = e.key),
            (this.container = e.container),
            (this.prepend = e.prepend),
            (this.insertionPoint = e.insertionPoint),
            (this.before = null));
        }
        var n = e.prototype;
        return (
          (n.hydrate = function (e) {
            e.forEach(this._insertTag);
          }),
          (n.insert = function (e) {
            this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 &&
              this._insertTag(
                (function (e) {
                  var n = document.createElement("style");
                  return (
                    n.setAttribute("data-emotion", e.key),
                    void 0 !== e.nonce && n.setAttribute("nonce", e.nonce),
                    n.appendChild(document.createTextNode("")),
                    n.setAttribute("data-s", ""),
                    n
                  );
                })(this),
              );
            var n = this.tags[this.tags.length - 1];
            if (this.isSpeedy) {
              var t = (function (e) {
                if (e.sheet) return e.sheet;
                for (var n = 0; n < document.styleSheets.length; n++)
                  if (document.styleSheets[n].ownerNode === e)
                    return document.styleSheets[n];
              })(n);
              try {
                t.insertRule(e, t.cssRules.length);
              } catch (e) {}
            } else n.appendChild(document.createTextNode(e));
            this.ctr++;
          }),
          (n.flush = function () {
            (this.tags.forEach(function (e) {
              var n;
              return null == (n = e.parentNode) ? void 0 : n.removeChild(e);
            }),
              (this.tags = []),
              (this.ctr = 0));
          }),
          e
        );
      })(),
      Jn = Math.abs,
      Qn = String.fromCharCode,
      Zn = Object.assign;
    function Yn(e) {
      return e.trim();
    }
    function et(e, n, t) {
      return e.replace(n, t);
    }
    function nt(e, n) {
      return e.indexOf(n);
    }
    function tt(e, n) {
      return 0 | e.charCodeAt(n);
    }
    function rt(e, n, t) {
      return e.slice(n, t);
    }
    function at(e) {
      return e.length;
    }
    function it(e) {
      return e.length;
    }
    function lt(e, n) {
      return (n.push(e), e);
    }
    var ot = 1,
      st = 1,
      ut = 0,
      ct = 0,
      dt = 0,
      ft = "";
    function pt(e, n, t, r, a, i, l) {
      return {
        value: e,
        root: n,
        parent: t,
        type: r,
        props: a,
        children: i,
        line: ot,
        column: st,
        length: l,
        return: "",
      };
    }
    function mt(e, n) {
      return Zn(
        pt("", null, null, "", null, null, 0),
        e,
        { length: -e.length },
        n,
      );
    }
    function ht() {
      return (
        (dt = ct > 0 ? tt(ft, --ct) : 0),
        st--,
        10 === dt && ((st = 1), ot--),
        dt
      );
    }
    function bt() {
      return (
        (dt = ct < ut ? tt(ft, ct++) : 0),
        st++,
        10 === dt && ((st = 1), ot++),
        dt
      );
    }
    function vt() {
      return tt(ft, ct);
    }
    function gt() {
      return ct;
    }
    function wt(e, n) {
      return rt(ft, e, n);
    }
    function yt(e) {
      switch (e) {
        case 0:
        case 9:
        case 10:
        case 13:
        case 32:
          return 5;
        case 33:
        case 43:
        case 44:
        case 47:
        case 62:
        case 64:
        case 126:
        case 59:
        case 123:
        case 125:
          return 4;
        case 58:
          return 3;
        case 34:
        case 39:
        case 40:
        case 91:
          return 2;
        case 41:
        case 93:
          return 1;
      }
      return 0;
    }
    function xt(e) {
      return ((ot = st = 1), (ut = at((ft = e))), (ct = 0), []);
    }
    function It(e) {
      return ((ft = ""), e);
    }
    function kt(e) {
      return Yn(wt(ct - 1, Nt(91 === e ? e + 2 : 40 === e ? e + 1 : e)));
    }
    function St(e) {
      for (; (dt = vt()) && dt < 33; ) bt();
      return yt(e) > 2 || yt(dt) > 3 ? "" : " ";
    }
    function At(e, n) {
      for (
        ;
        --n &&
        bt() &&
        !(dt < 48 || dt > 102 || (dt > 57 && dt < 65) || (dt > 70 && dt < 97));

      );
      return wt(e, gt() + (n < 6 && 32 == vt() && 32 == bt()));
    }
    function Nt(e) {
      for (; bt(); )
        switch (dt) {
          case e:
            return ct;
          case 34:
          case 39:
            34 !== e && 39 !== e && Nt(dt);
            break;
          case 40:
            41 === e && Nt(e);
            break;
          case 92:
            bt();
        }
      return ct;
    }
    function Et(e, n) {
      for (; bt() && e + dt !== 57 && (e + dt !== 84 || 47 !== vt()); );
      return "/*" + wt(n, ct - 1) + "*" + Qn(47 === e ? e : bt());
    }
    function Dt(e) {
      for (; !yt(vt()); ) bt();
      return wt(e, ct);
    }
    var _t = "-ms-",
      Lt = "-moz-",
      Ot = "-webkit-",
      Ct = "comm",
      Rt = "rule",
      Pt = "decl",
      jt = "@keyframes";
    function Tt(e, n) {
      for (var t = "", r = it(e), a = 0; a < r; a++)
        t += n(e[a], a, e, n) || "";
      return t;
    }
    function Vt(e, n, t, r) {
      switch (e.type) {
        case "@layer":
          if (e.children.length) break;
        case "@import":
        case Pt:
          return (e.return = e.return || e.value);
        case Ct:
          return "";
        case jt:
          return (e.return = e.value + "{" + Tt(e.children, r) + "}");
        case Rt:
          e.value = e.props.join(",");
      }
      return at((t = Tt(e.children, r)))
        ? (e.return = e.value + "{" + t + "}")
        : "";
    }
    function Ft(e) {
      return It(zt("", null, null, null, [""], (e = xt(e)), 0, [0], e));
    }
    function zt(e, n, t, r, a, i, l, o, s) {
      for (
        var u = 0,
          c = 0,
          d = l,
          f = 0,
          p = 0,
          m = 0,
          h = 1,
          b = 1,
          v = 1,
          g = 0,
          w = "",
          y = a,
          x = i,
          I = r,
          k = w;
        b;

      )
        switch (((m = g), (g = bt()))) {
          case 40:
            if (108 != m && 58 == tt(k, d - 1)) {
              -1 != nt((k += et(kt(g), "&", "&\f")), "&\f") && (v = -1);
              break;
            }
          case 34:
          case 39:
          case 91:
            k += kt(g);
            break;
          case 9:
          case 10:
          case 13:
          case 32:
            k += St(m);
            break;
          case 92:
            k += At(gt() - 1, 7);
            continue;
          case 47:
            switch (vt()) {
              case 42:
              case 47:
                lt(Bt(Et(bt(), gt()), n, t), s);
                break;
              default:
                k += "/";
            }
            break;
          case 123 * h:
            o[u++] = at(k) * v;
          case 125 * h:
          case 59:
          case 0:
            switch (g) {
              case 0:
              case 125:
                b = 0;
              case 59 + c:
                (-1 == v && (k = et(k, /\f/g, "")),
                  p > 0 &&
                    at(k) - d &&
                    lt(
                      p > 32
                        ? Ut(k + ";", r, t, d - 1)
                        : Ut(et(k, " ", "") + ";", r, t, d - 2),
                      s,
                    ));
                break;
              case 59:
                k += ";";
              default:
                if (
                  (lt(
                    (I = Mt(k, n, t, u, c, a, o, w, (y = []), (x = []), d)),
                    i,
                  ),
                  123 === g)
                )
                  if (0 === c) zt(k, n, I, I, y, i, d, o, x);
                  else
                    switch (99 === f && 110 === tt(k, 3) ? 100 : f) {
                      case 100:
                      case 108:
                      case 109:
                      case 115:
                        zt(
                          e,
                          I,
                          I,
                          r &&
                            lt(Mt(e, I, I, 0, 0, a, o, w, a, (y = []), d), x),
                          a,
                          x,
                          d,
                          o,
                          r ? y : x,
                        );
                        break;
                      default:
                        zt(k, I, I, I, [""], x, 0, o, x);
                    }
            }
            ((u = c = p = 0), (h = v = 1), (w = k = ""), (d = l));
            break;
          case 58:
            ((d = 1 + at(k)), (p = m));
          default:
            if (h < 1)
              if (123 == g) --h;
              else if (125 == g && 0 == h++ && 125 == ht()) continue;
            switch (((k += Qn(g)), g * h)) {
              case 38:
                v = c > 0 ? 1 : ((k += "\f"), -1);
                break;
              case 44:
                ((o[u++] = (at(k) - 1) * v), (v = 1));
                break;
              case 64:
                (45 === vt() && (k += kt(bt())),
                  (f = vt()),
                  (c = d = at((w = k += Dt(gt())))),
                  g++);
                break;
              case 45:
                45 === m && 2 == at(k) && (h = 0);
            }
        }
      return i;
    }
    function Mt(e, n, t, r, a, i, l, o, s, u, c) {
      for (
        var d = a - 1, f = 0 === a ? i : [""], p = it(f), m = 0, h = 0, b = 0;
        m < r;
        ++m
      )
        for (
          var v = 0, g = rt(e, d + 1, (d = Jn((h = l[m])))), w = e;
          v < p;
          ++v
        )
          (w = Yn(h > 0 ? f[v] + " " + g : et(g, /&\f/g, f[v]))) &&
            (s[b++] = w);
      return pt(e, n, t, 0 === a ? Rt : o, s, u, c);
    }
    function Bt(e, n, t) {
      return pt(e, n, t, Ct, Qn(dt), rt(e, 2, -2), 0);
    }
    function Ut(e, n, t, r) {
      return pt(e, n, t, Pt, rt(e, 0, r), rt(e, r + 1, -1), r);
    }
    var Ht = function (e, n, t) {
        for (
          var r = 0, a = 0;
          (r = a), (a = vt()), 38 === r && 12 === a && (n[t] = 1), !yt(a);

        )
          bt();
        return wt(e, ct);
      },
      Gt = new WeakMap(),
      qt = function (e) {
        if ("rule" === e.type && e.parent && !(e.length < 1)) {
          for (
            var n = e.value,
              t = e.parent,
              r = e.column === t.column && e.line === t.line;
            "rule" !== t.type;

          )
            if (!(t = t.parent)) return;
          if (
            (1 !== e.props.length || 58 === n.charCodeAt(0) || Gt.get(t)) &&
            !r
          ) {
            Gt.set(e, !0);
            for (
              var a = [],
                i = (function (e, n) {
                  return It(
                    (function (e, n) {
                      var t = -1,
                        r = 44;
                      do {
                        switch (yt(r)) {
                          case 0:
                            (38 === r && 12 === vt() && (n[t] = 1),
                              (e[t] += Ht(ct - 1, n, t)));
                            break;
                          case 2:
                            e[t] += kt(r);
                            break;
                          case 4:
                            if (44 === r) {
                              ((e[++t] = 58 === vt() ? "&\f" : ""),
                                (n[t] = e[t].length));
                              break;
                            }
                          default:
                            e[t] += Qn(r);
                        }
                      } while ((r = bt()));
                      return e;
                    })(xt(e), n),
                  );
                })(n, a),
                l = t.props,
                o = 0,
                s = 0;
              o < i.length;
              o++
            )
              for (var u = 0; u < l.length; u++, s++)
                e.props[s] = a[o]
                  ? i[o].replace(/&\f/g, l[u])
                  : l[u] + " " + i[o];
          }
        }
      },
      Wt = function (e) {
        if ("decl" === e.type) {
          var n = e.value;
          108 === n.charCodeAt(0) &&
            98 === n.charCodeAt(2) &&
            ((e.return = ""), (e.value = ""));
        }
      };
    function $t(e, n) {
      switch (
        (function (e, n) {
          return 45 ^ tt(e, 0)
            ? (((((((n << 2) ^ tt(e, 0)) << 2) ^ tt(e, 1)) << 2) ^ tt(e, 2)) <<
                2) ^
                tt(e, 3)
            : 0;
        })(e, n)
      ) {
        case 5103:
          return Ot + "print-" + e + e;
        case 5737:
        case 4201:
        case 3177:
        case 3433:
        case 1641:
        case 4457:
        case 2921:
        case 5572:
        case 6356:
        case 5844:
        case 3191:
        case 6645:
        case 3005:
        case 6391:
        case 5879:
        case 5623:
        case 6135:
        case 4599:
        case 4855:
        case 4215:
        case 6389:
        case 5109:
        case 5365:
        case 5621:
        case 3829:
          return Ot + e + e;
        case 5349:
        case 4246:
        case 4810:
        case 6968:
        case 2756:
          return Ot + e + Lt + e + _t + e + e;
        case 6828:
        case 4268:
          return Ot + e + _t + e + e;
        case 6165:
          return Ot + e + _t + "flex-" + e + e;
        case 5187:
          return (
            Ot +
            e +
            et(e, /(\w+).+(:[^]+)/, Ot + "box-$1$2" + _t + "flex-$1$2") +
            e
          );
        case 5443:
          return Ot + e + _t + "flex-item-" + et(e, /flex-|-self/, "") + e;
        case 4675:
          return (
            Ot +
            e +
            _t +
            "flex-line-pack" +
            et(e, /align-content|flex-|-self/, "") +
            e
          );
        case 5548:
          return Ot + e + _t + et(e, "shrink", "negative") + e;
        case 5292:
          return Ot + e + _t + et(e, "basis", "preferred-size") + e;
        case 6060:
          return (
            Ot +
            "box-" +
            et(e, "-grow", "") +
            Ot +
            e +
            _t +
            et(e, "grow", "positive") +
            e
          );
        case 4554:
          return Ot + et(e, /([^-])(transform)/g, "$1" + Ot + "$2") + e;
        case 6187:
          return (
            et(
              et(et(e, /(zoom-|grab)/, Ot + "$1"), /(image-set)/, Ot + "$1"),
              e,
              "",
            ) + e
          );
        case 5495:
        case 3959:
          return et(e, /(image-set\([^]*)/, Ot + "$1$`$1");
        case 4968:
          return (
            et(
              et(
                e,
                /(.+:)(flex-)?(.*)/,
                Ot + "box-pack:$3" + _t + "flex-pack:$3",
              ),
              /s.+-b[^;]+/,
              "justify",
            ) +
            Ot +
            e +
            e
          );
        case 4095:
        case 3583:
        case 4068:
        case 2532:
          return et(e, /(.+)-inline(.+)/, Ot + "$1$2") + e;
        case 8116:
        case 7059:
        case 5753:
        case 5535:
        case 5445:
        case 5701:
        case 4933:
        case 4677:
        case 5533:
        case 5789:
        case 5021:
        case 4765:
          if (at(e) - 1 - n > 6)
            switch (tt(e, n + 1)) {
              case 109:
                if (45 !== tt(e, n + 4)) break;
              case 102:
                return (
                  et(
                    e,
                    /(.+:)(.+)-([^]+)/,
                    "$1" +
                      Ot +
                      "$2-$3$1" +
                      Lt +
                      (108 == tt(e, n + 3) ? "$3" : "$2-$3"),
                  ) + e
                );
              case 115:
                return ~nt(e, "stretch")
                  ? $t(et(e, "stretch", "fill-available"), n) + e
                  : e;
            }
          break;
        case 4949:
          if (115 !== tt(e, n + 1)) break;
        case 6444:
          switch (tt(e, at(e) - 3 - (~nt(e, "!important") && 10))) {
            case 107:
              return et(e, ":", ":" + Ot) + e;
            case 101:
              return (
                et(
                  e,
                  /(.+:)([^;!]+)(;|!.+)?/,
                  "$1" +
                    Ot +
                    (45 === tt(e, 14) ? "inline-" : "") +
                    "box$3$1" +
                    Ot +
                    "$2$3$1" +
                    _t +
                    "$2box$3",
                ) + e
              );
          }
          break;
        case 5936:
          switch (tt(e, n + 11)) {
            case 114:
              return Ot + e + _t + et(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
            case 108:
              return Ot + e + _t + et(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
            case 45:
              return Ot + e + _t + et(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
          }
          return Ot + e + _t + e + e;
      }
      return e;
    }
    var Kt = [
        function (e, n, t, r) {
          if (e.length > -1 && !e.return)
            switch (e.type) {
              case Pt:
                e.return = $t(e.value, e.length);
                break;
              case jt:
                return Tt([mt(e, { value: et(e.value, "@", "@" + Ot) })], r);
              case Rt:
                if (e.length)
                  return (function (e, n) {
                    return e.map(n).join("");
                  })(e.props, function (n) {
                    switch (
                      (function (e) {
                        return (e = /(::plac\w+|:read-\w+)/.exec(e)) ? e[0] : e;
                      })(n)
                    ) {
                      case ":read-only":
                      case ":read-write":
                        return Tt(
                          [
                            mt(e, {
                              props: [et(n, /:(read-\w+)/, ":-moz-$1")],
                            }),
                          ],
                          r,
                        );
                      case "::placeholder":
                        return Tt(
                          [
                            mt(e, {
                              props: [
                                et(n, /:(plac\w+)/, ":" + Ot + "input-$1"),
                              ],
                            }),
                            mt(e, { props: [et(n, /:(plac\w+)/, ":-moz-$1")] }),
                            mt(e, {
                              props: [et(n, /:(plac\w+)/, _t + "input-$1")],
                            }),
                          ],
                          r,
                        );
                    }
                    return "";
                  });
            }
        },
      ],
      Xt = function (e) {
        var n = e.key;
        if ("css" === n) {
          var t = document.querySelectorAll(
            "style[data-emotion]:not([data-s])",
          );
          Array.prototype.forEach.call(t, function (e) {
            -1 !== e.getAttribute("data-emotion").indexOf(" ") &&
              (document.head.appendChild(e), e.setAttribute("data-s", ""));
          });
        }
        var r,
          a,
          i = e.stylisPlugins || Kt,
          l = {},
          o = [];
        ((r = e.container || document.head),
          Array.prototype.forEach.call(
            document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
            function (e) {
              for (
                var n = e.getAttribute("data-emotion").split(" "), t = 1;
                t < n.length;
                t++
              )
                l[n[t]] = !0;
              o.push(e);
            },
          ));
        var s,
          u,
          c,
          d,
          f = [
            Vt,
            ((d = function (e) {
              s.insert(e);
            }),
            function (e) {
              e.root || ((e = e.return) && d(e));
            }),
          ],
          p =
            ((u = [qt, Wt].concat(i, f)),
            (c = it(u)),
            function (e, n, t, r) {
              for (var a = "", i = 0; i < c; i++) a += u[i](e, n, t, r) || "";
              return a;
            });
        a = function (e, n, t, r) {
          ((s = t),
            Tt(Ft(e ? e + "{" + n.styles + "}" : n.styles), p),
            r && (m.inserted[n.name] = !0));
        };
        var m = {
          key: n,
          sheet: new Xn({
            key: n,
            container: r,
            nonce: e.nonce,
            speedy: e.speedy,
            prepend: e.prepend,
            insertionPoint: e.insertionPoint,
          }),
          nonce: e.nonce,
          inserted: l,
          registered: {},
          insert: a,
        };
        return (m.sheet.hydrate(o), m);
      };
    function Jt(e, n, t) {
      var r = "";
      return (
        t.split(" ").forEach(function (t) {
          void 0 !== e[t] ? n.push(e[t] + ";") : t && (r += t + " ");
        }),
        r
      );
    }
    var Qt = function (e, n, t) {
        var r = e.key + "-" + n.name;
        !1 === t && void 0 === e.registered[r] && (e.registered[r] = n.styles);
      },
      Zt = function (e, n, t) {
        Qt(e, n, t);
        var r = e.key + "-" + n.name;
        if (void 0 === e.inserted[n.name]) {
          var a = n;
          do {
            (e.insert(n === a ? "." + r : "", a, e.sheet, !0), (a = a.next));
          } while (void 0 !== a);
        }
      },
      Yt = {
        animationIterationCount: 1,
        aspectRatio: 1,
        borderImageOutset: 1,
        borderImageSlice: 1,
        borderImageWidth: 1,
        boxFlex: 1,
        boxFlexGroup: 1,
        boxOrdinalGroup: 1,
        columnCount: 1,
        columns: 1,
        flex: 1,
        flexGrow: 1,
        flexPositive: 1,
        flexShrink: 1,
        flexNegative: 1,
        flexOrder: 1,
        gridRow: 1,
        gridRowEnd: 1,
        gridRowSpan: 1,
        gridRowStart: 1,
        gridColumn: 1,
        gridColumnEnd: 1,
        gridColumnSpan: 1,
        gridColumnStart: 1,
        msGridRow: 1,
        msGridRowSpan: 1,
        msGridColumn: 1,
        msGridColumnSpan: 1,
        fontWeight: 1,
        lineHeight: 1,
        opacity: 1,
        order: 1,
        orphans: 1,
        scale: 1,
        tabSize: 1,
        widows: 1,
        zIndex: 1,
        zoom: 1,
        WebkitLineClamp: 1,
        fillOpacity: 1,
        floodOpacity: 1,
        stopOpacity: 1,
        strokeDasharray: 1,
        strokeDashoffset: 1,
        strokeMiterlimit: 1,
        strokeOpacity: 1,
        strokeWidth: 1,
      };
    function er(e) {
      var n = Object.create(null);
      return function (t) {
        return (void 0 === n[t] && (n[t] = e(t)), n[t]);
      };
    }
    var nr = /[A-Z]|^ms/g,
      tr = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
      rr = function (e) {
        return 45 === e.charCodeAt(1);
      },
      ar = function (e) {
        return null != e && "boolean" != typeof e;
      },
      ir = er(function (e) {
        return rr(e) ? e : e.replace(nr, "-$&").toLowerCase();
      }),
      lr = function (e, n) {
        switch (e) {
          case "animation":
          case "animationName":
            if ("string" == typeof n)
              return n.replace(tr, function (e, n, t) {
                return ((sr = { name: n, styles: t, next: sr }), n);
              });
        }
        return 1 === Yt[e] || rr(e) || "number" != typeof n || 0 === n
          ? n
          : n + "px";
      };
    function or(e, n, t) {
      if (null == t) return "";
      var r = t;
      if (void 0 !== r.__emotion_styles) return r;
      switch (typeof t) {
        case "boolean":
          return "";
        case "object":
          var a = t;
          if (1 === a.anim)
            return (
              (sr = { name: a.name, styles: a.styles, next: sr }),
              a.name
            );
          var i = t;
          if (void 0 !== i.styles) {
            var l = i.next;
            if (void 0 !== l)
              for (; void 0 !== l; )
                ((sr = { name: l.name, styles: l.styles, next: sr }),
                  (l = l.next));
            return i.styles + ";";
          }
          return (function (e, n, t) {
            var r = "";
            if (Array.isArray(t))
              for (var a = 0; a < t.length; a++) r += or(e, n, t[a]) + ";";
            else
              for (var i in t) {
                var l = t[i];
                if ("object" != typeof l) {
                  var o = l;
                  null != n && void 0 !== n[o]
                    ? (r += i + "{" + n[o] + "}")
                    : ar(o) && (r += ir(i) + ":" + lr(i, o) + ";");
                } else if (
                  !Array.isArray(l) ||
                  "string" != typeof l[0] ||
                  (null != n && void 0 !== n[l[0]])
                ) {
                  var s = or(e, n, l);
                  switch (i) {
                    case "animation":
                    case "animationName":
                      r += ir(i) + ":" + s + ";";
                      break;
                    default:
                      r += i + "{" + s + "}";
                  }
                } else
                  for (var u = 0; u < l.length; u++)
                    ar(l[u]) && (r += ir(i) + ":" + lr(i, l[u]) + ";");
              }
            return r;
          })(e, n, t);
        case "function":
          if (void 0 !== e) {
            var o = sr,
              s = t(e);
            return ((sr = o), or(e, n, s));
          }
      }
      var u = t;
      if (null == n) return u;
      var c = n[u];
      return void 0 !== c ? c : u;
    }
    var sr,
      ur = /label:\s*([^\s;{]+)\s*(;|$)/g;
    function cr(e, n, t) {
      if (
        1 === e.length &&
        "object" == typeof e[0] &&
        null !== e[0] &&
        void 0 !== e[0].styles
      )
        return e[0];
      var r = !0,
        a = "";
      sr = void 0;
      var i = e[0];
      null == i || void 0 === i.raw
        ? ((r = !1), (a += or(t, n, i)))
        : (a += i[0]);
      for (var l = 1; l < e.length; l++)
        ((a += or(t, n, e[l])), r && (a += i[l]));
      ur.lastIndex = 0;
      for (var o, s = ""; null !== (o = ur.exec(a)); ) s += "-" + o[1];
      var u =
        (function (e) {
          for (var n, t = 0, r = 0, a = e.length; a >= 4; ++r, a -= 4)
            ((n =
              1540483477 *
                (65535 &
                  (n =
                    (255 & e.charCodeAt(r)) |
                    ((255 & e.charCodeAt(++r)) << 8) |
                    ((255 & e.charCodeAt(++r)) << 16) |
                    ((255 & e.charCodeAt(++r)) << 24))) +
              ((59797 * (n >>> 16)) << 16)),
              (t =
                (1540483477 * (65535 & (n ^= n >>> 24)) +
                  ((59797 * (n >>> 16)) << 16)) ^
                (1540483477 * (65535 & t) + ((59797 * (t >>> 16)) << 16))));
          switch (a) {
            case 3:
              t ^= (255 & e.charCodeAt(r + 2)) << 16;
            case 2:
              t ^= (255 & e.charCodeAt(r + 1)) << 8;
            case 1:
              t =
                1540483477 * (65535 & (t ^= 255 & e.charCodeAt(r))) +
                ((59797 * (t >>> 16)) << 16);
          }
          return (
            ((t =
              1540483477 * (65535 & (t ^= t >>> 13)) +
              ((59797 * (t >>> 16)) << 16)) ^
              (t >>> 15)) >>>
            0
          ).toString(36);
        })(a) + s;
      return { name: u, styles: a, next: sr };
    }
    var dr = !!u.useInsertionEffect && u.useInsertionEffect,
      fr =
        dr ||
        function (e) {
          return e();
        },
      pr =
        (dr || s.useLayoutEffect,
        s.createContext(
          "undefined" != typeof HTMLElement ? Xt({ key: "css" }) : null,
        )),
      mr =
        (pr.Provider,
        function (e) {
          return (0, s.forwardRef)(function (n, t) {
            var r = (0, s.useContext)(pr);
            return e(n, r, t);
          });
        }),
      hr = s.createContext({}),
      br = {}.hasOwnProperty,
      vr = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
      gr = function (e) {
        var n = e.cache,
          t = e.serialized,
          r = e.isStringTag;
        return (
          Qt(n, t, r),
          fr(function () {
            return Zt(n, t, r);
          }),
          null
        );
      },
      wr = mr(function (e, n, t) {
        var r = e.css;
        "string" == typeof r &&
          void 0 !== n.registered[r] &&
          (r = n.registered[r]);
        var a = e[vr],
          i = [r],
          l = "";
        "string" == typeof e.className
          ? (l = Jt(n.registered, i, e.className))
          : null != e.className && (l = e.className + " ");
        var o = cr(i, void 0, s.useContext(hr));
        l += n.key + "-" + o.name;
        var u = {};
        for (var c in e)
          br.call(e, c) && "css" !== c && c !== vr && (u[c] = e[c]);
        return (
          (u.className = l),
          t && (u.ref = t),
          s.createElement(
            s.Fragment,
            null,
            s.createElement(gr, {
              cache: n,
              serialized: o,
              isStringTag: "string" == typeof a,
            }),
            s.createElement(a, u),
          )
        );
      }),
      yr = wr,
      xr =
        /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
      Ir = er(function (e) {
        return (
          xr.test(e) ||
          (111 === e.charCodeAt(0) &&
            110 === e.charCodeAt(1) &&
            e.charCodeAt(2) < 91)
        );
      }),
      kr = function (e) {
        return "theme" !== e;
      },
      Sr = function (e) {
        return "string" == typeof e && e.charCodeAt(0) > 96 ? Ir : kr;
      },
      Ar = function (e, n, t) {
        var r;
        if (n) {
          var a = n.shouldForwardProp;
          r =
            e.__emotion_forwardProp && a
              ? function (n) {
                  return e.__emotion_forwardProp(n) && a(n);
                }
              : a;
        }
        return (
          "function" != typeof r && t && (r = e.__emotion_forwardProp),
          r
        );
      },
      Nr = function (e) {
        var n = e.cache,
          t = e.serialized,
          r = e.isStringTag;
        return (
          Qt(n, t, r),
          fr(function () {
            return Zt(n, t, r);
          }),
          null
        );
      },
      Er = function e(n, t) {
        var r,
          a,
          i = n.__emotion_real === n,
          l = (i && n.__emotion_base) || n;
        void 0 !== t && ((r = t.label), (a = t.target));
        var o = Ar(n, t, i),
          u = o || Sr(l),
          c = !u("as");
        return function () {
          var d = arguments,
            f =
              i && void 0 !== n.__emotion_styles
                ? n.__emotion_styles.slice(0)
                : [];
          if (
            (void 0 !== r && f.push("label:" + r + ";"),
            null == d[0] || void 0 === d[0].raw)
          )
            f.push.apply(f, d);
          else {
            var p = d[0];
            f.push(p[0]);
            for (var m = d.length, h = 1; h < m; h++) f.push(d[h], p[h]);
          }
          var b = mr(function (e, n, t) {
            var r = (c && e.as) || l,
              i = "",
              d = [],
              p = e;
            if (null == e.theme) {
              for (var m in ((p = {}), e)) p[m] = e[m];
              p.theme = s.useContext(hr);
            }
            "string" == typeof e.className
              ? (i = Jt(n.registered, d, e.className))
              : null != e.className && (i = e.className + " ");
            var h = cr(f.concat(d), n.registered, p);
            ((i += n.key + "-" + h.name), void 0 !== a && (i += " " + a));
            var b = c && void 0 === o ? Sr(r) : u,
              v = {};
            for (var g in e) (c && "as" === g) || (b(g) && (v[g] = e[g]));
            return (
              (v.className = i),
              t && (v.ref = t),
              s.createElement(
                s.Fragment,
                null,
                s.createElement(Nr, {
                  cache: n,
                  serialized: h,
                  isStringTag: "string" == typeof r,
                }),
                s.createElement(r, v),
              )
            );
          });
          return (
            (b.displayName =
              void 0 !== r
                ? r
                : "Styled(" +
                  ("string" == typeof l
                    ? l
                    : l.displayName || l.name || "Component") +
                  ")"),
            (b.defaultProps = n.defaultProps),
            (b.__emotion_real = b),
            (b.__emotion_base = l),
            (b.__emotion_styles = f),
            (b.__emotion_forwardProp = o),
            Object.defineProperty(b, "toString", {
              value: function () {
                return "." + a;
              },
            }),
            (b.withComponent = function (n, r) {
              return e(
                n,
                Kn({}, t, r, { shouldForwardProp: Ar(b, r, !0) }),
              ).apply(void 0, f);
            }),
            b
          );
        };
      }.bind(null);
    ([
      "a",
      "abbr",
      "address",
      "area",
      "article",
      "aside",
      "audio",
      "b",
      "base",
      "bdi",
      "bdo",
      "big",
      "blockquote",
      "body",
      "br",
      "button",
      "canvas",
      "caption",
      "cite",
      "code",
      "col",
      "colgroup",
      "data",
      "datalist",
      "dd",
      "del",
      "details",
      "dfn",
      "dialog",
      "div",
      "dl",
      "dt",
      "em",
      "embed",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "head",
      "header",
      "hgroup",
      "hr",
      "html",
      "i",
      "iframe",
      "img",
      "input",
      "ins",
      "kbd",
      "keygen",
      "label",
      "legend",
      "li",
      "link",
      "main",
      "map",
      "mark",
      "marquee",
      "menu",
      "menuitem",
      "meta",
      "meter",
      "nav",
      "noscript",
      "object",
      "ol",
      "optgroup",
      "option",
      "output",
      "p",
      "param",
      "picture",
      "pre",
      "progress",
      "q",
      "rp",
      "rt",
      "ruby",
      "s",
      "samp",
      "script",
      "section",
      "select",
      "small",
      "source",
      "span",
      "strong",
      "style",
      "sub",
      "summary",
      "sup",
      "table",
      "tbody",
      "td",
      "textarea",
      "tfoot",
      "th",
      "thead",
      "time",
      "title",
      "tr",
      "track",
      "u",
      "ul",
      "var",
      "video",
      "wbr",
      "circle",
      "clipPath",
      "defs",
      "ellipse",
      "foreignObject",
      "g",
      "image",
      "line",
      "linearGradient",
      "mask",
      "path",
      "pattern",
      "polygon",
      "polyline",
      "radialGradient",
      "rect",
      "stop",
      "svg",
      "text",
      "tspan",
    ].forEach(function (e) {
      Er[e] = Er(e);
    }),
      a(146));
    var Dr,
      _r,
      Lr,
      Or,
      Cr,
      Rr = function (e, n) {
        var t = arguments;
        if (null == n || !br.call(n, "css"))
          return s.createElement.apply(void 0, t);
        var r = t.length,
          a = new Array(r);
        ((a[0] = yr),
          (a[1] = (function (e, n) {
            var t = {};
            for (var r in n) br.call(n, r) && (t[r] = n[r]);
            return ((t[vr] = e), t);
          })(e, n)));
        for (var i = 2; i < r; i++) a[i] = t[i];
        return s.createElement.apply(null, a);
      };
    function Pr() {
      for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
        n[t] = arguments[t];
      return cr(n);
    }
    function jr(e, n) {
      return (
        n || (n = e.slice(0)),
        Object.freeze(
          Object.defineProperties(e, { raw: { value: Object.freeze(n) } }),
        )
      );
    }
    ((Dr = Rr || (Rr = {})), _r || (_r = Dr.JSX || (Dr.JSX = {})));
    var Tr = (function () {
        var e = Pr.apply(void 0, arguments),
          n = "animation-" + e.name;
        return {
          name: n,
          styles: "@keyframes " + n + "{" + e.styles + "}",
          anim: 1,
          toString: function () {
            return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
          },
        };
      })(Lr || (Lr = jr(["\n  \t100% { transform: rotate(360deg); }\n"]))),
      Vr = Er.div(
        Or ||
          (Or = jr([
            "\n  margin-top: 80px;\n  margin-bottom: 50px;\n  z-index: 1000;\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-content: center\n",
          ])),
      ),
      Fr = Er.div(
        Cr || (Cr = jr(["\n  animation: ", " 1.2s linear infinite;\n"])),
        Tr,
      );
    const zr = function () {
      return (0, Un.jsx)(Vr, {
        children: (0, Un.jsx)(Fr, {
          children: (0, Un.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "106",
            height: "106",
            viewBox: "0 0 106 106",
            fill: "none",
            children: (0, Un.jsx)("path", {
              d: "M3.46289 53C3.46289 80.6142 25.6414 103 52.9999 103C80.3585 103 102.537 80.6142 102.537 53C102.537 25.3858 80.3585 3 52.9999 3",
              stroke: "#59A700",
              strokeWidth: "6",
            }),
          }),
        }),
      });
    };
    var Mr,
      Br = a(785),
      Ur = {};
    function Hr(e) {
      return (
        (Hr =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
        Hr(e)
      );
    }
    function Gr(e, n) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (n &&
          (r = r.filter(function (n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable;
          })),
          t.push.apply(t, r));
      }
      return t;
    }
    function qr(e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {};
        n % 2
          ? Gr(Object(t), !0).forEach(function (n) {
              Wr(e, n, t[n]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Gr(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n),
                );
              });
      }
      return e;
    }
    function Wr(e, n, t) {
      return (
        (n = (function (e) {
          var n = (function (e) {
            if ("object" != Hr(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var t = n.call(e, "string");
              if ("object" != Hr(t)) return t;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return String(e);
          })(e);
          return "symbol" == Hr(n) ? n : n + "";
        })(n)) in e
          ? Object.defineProperty(e, n, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[n] = t),
        e
      );
    }
    ((Ur.styleTagTransform = Tn()),
      (Ur.setAttributes = Cn()),
      (Ur.insert = Ln().bind(null, "head")),
      (Ur.domAPI = Dn()),
      (Ur.insertStyleElement = Pn()),
      Nn()(Br.A, Ur),
      Br.A && Br.A.locals && Br.A.locals);
    var $r = "en-us",
      Kr =
        (Wr(
          Wr(
            Wr(
              Wr(
                Wr(
                  Wr(
                    Wr(
                      Wr(
                        Wr(
                          Wr((Mr = {}), $r, {
                            overlayHeading: "What can I help you with?",
                            defaultPlaceholder: "AI-powered search",
                            trySearchesLabel: "Try These Searches",
                            searchRecommended: "Recommended",
                            searchRecommendedForYou: "Recommended For You",
                            searchPrevLabel: "Prev",
                            searchNextLabel: "Next",
                            searchPageOfLabel: "of",
                            filterTitle: "Filter",
                            filtersButtonLabel: "Filters",
                            selectAllLabel: "Select All",
                            deselectAllLabel: "Deselect All",
                            showMoreLabel: "Show More",
                            showLessLabel: "Show Less",
                            moreLabel: "More",
                            resetLabel: "Reset",
                            applyLabel: "Apply",
                            locationLabel: "Location",
                            productsLabel: "Products",
                            searchRefinementsLabel:
                              "Try These Search Refinements",
                            resultsOfLabel: "of",
                            paginationPrev: "Prev",
                            paginationNext: "Next",
                            paginationOf: "of",
                            promoRecommended: "Recommended",
                            generatingSummary: "Generating your summary...",
                            summaryTitle:
                              "AI-generated summary of your search results",
                            copyLabel: "Copy",
                            copiedLabel: "Copied",
                            likedLabel: "Liked",
                            likeLabel: "Like",
                            dislikedLabel: "Disliked",
                            dislikeLabel: "Dislike",
                            showMoreSummaryLabel: "Show more",
                            showLessSummaryLabel: "Show less",
                            disclaimerIntro:
                              "AI-generated content may be incomplete. Verify important info.",
                            learnMoreLabel: "Learn more",
                            builtWithPrefix: "Built with Llama (",
                            builtWithSuffix: " Community License Agreements).",
                            notFoundStatus: "404-Page Not Found",
                            notFoundTitle: "Something Went Wrong",
                            notFoundDescription:
                              "We're sorry: The page you're looking for can't be found. Head to our homepage to explore available topics or try to search again.",
                            notFoundButton: "Go to NVIDIA Home",
                            noResultsHeading: "No results found for",
                            searchTipsLabel: "Search tips:",
                            tipSpell: "Check your spelling.",
                            tipSynonym:
                              "Try a different word that means the same thing.",
                            tipGeneral: "Try more general words.",
                            defaultSearchPills: [
                              "Gaming on GeForce NOW",
                              "NVIDIA Nemotron",
                              "Download CUDA Toolkit",
                              "cuDNN library",
                              "NVIDIA Broadcast",
                              "Custom gaming PC",
                              "DGX Spark AI Supercomputer",
                              "PhysX SDK for game development",
                              "Geforce RTX 50 Series Graphics Cards",
                              "Computer vision for self-driving cars",
                              "GeForce Experience features",
                              "Generative AI for healthcare",
                              "Reasoning with NVIDIA Vera Rubin",
                              "5090 specs",
                              "Building a RAG-powered AI chatbot",
                            ],
                          }),
                          "de-de",
                          {
                            overlayHeading: "Womit kann ich Ihnen helfen?",
                            defaultPlaceholder: "Starten Sie Ihre Suche",
                            trySearchesLabel:
                              "Probieren Sie diese Suchanfragen aus",
                            searchRecommended: "Empfohlen",
                            searchRecommendedForYou: "Für Sie empfohlen",
                            searchPrevLabel: "Zurück",
                            searchNextLabel: "Weiter",
                            searchPageOfLabel: "von",
                            filterTitle: "FILTERN",
                            filtersButtonLabel: "FILTERN",
                            selectAllLabel: "Alle auswählen",
                            deselectAllLabel: "Gesamte Auswahl aufheben",
                            showMoreLabel: "Mehr anzeigen",
                            showLessLabel: "Weniger anzeigen",
                            moreLabel: "MEHR",
                            resetLabel: "Zurücksetzen",
                            applyLabel: "ANWENDEN",
                            locationLabel: "Ort",
                            productsLabel: "Produkte",
                            searchRefinementsLabel:
                              "Probieren Sie diese Suchanfragen aus",
                            resultsOfLabel: "von",
                            paginationPrev: "Zurück",
                            paginationNext: "Weiter",
                            paginationOf: "von",
                            promoRecommended: "Empfohlen",
                            generatingSummary:
                              "KI-generierte Zusammenfassung wird erstellt...",
                            summaryTitle:
                              "KI-generierte Zusammenfassung Ihrer Suchergebnisse",
                            copyLabel: "Kopieren",
                            copiedLabel: "Kopiert",
                            likedLabel: "Gefällt mir",
                            likeLabel: "Gefällt mir",
                            dislikedLabel: "Gefällt mir nicht",
                            dislikeLabel: "Gefällt mir nicht",
                            showMoreSummaryLabel: "Mehr anzeigen",
                            showLessSummaryLabel: "Weniger anzeigen",
                            disclaimerIntro:
                              "KI-generierte Inhalte können unvollständig sein. Überprüfen Sie wichtige Informationen.",
                            learnMoreLabel: "Erfahren Sie mehr",
                            builtWithPrefix: "Mit Llama erstellt (",
                            builtWithSuffix:
                              " Llama 3.3 & Llama 3.2 Community-Lizenzvereinbarungen).",
                            notFoundStatus: "404-Seite nicht gefunden",
                            notFoundTitle: "Etwas ist schiefgegangen",
                            notFoundDescription:
                              "Es tut uns leid: Die gesuchte Seite kann nicht gefunden werden. Besuchen Sie unsere Startseite, um verfügbare Themen zu durchsuchen oder versuchen Sie es erneut.",
                            notFoundButton: "Zur NVIDIA-Startseite",
                            noResultsHeading: "Keine Ergebnisse gefunden für",
                            searchTipsLabel: "Suchtipps:",
                            tipSpell: "Überprüfen Sie Ihre Rechtschreibung.",
                            tipSynonym:
                              "Versuchen Sie ein anderes Wort mit derselben Bedeutung.",
                            tipGeneral: "Versuchen Sie allgemeinere Wörter.",
                            defaultSearchPills: [
                              "Gaming auf GeForce NOW",
                              "NVIDIA Nemotron",
                              "CUDA Toolkit herunterladen",
                              "cuDNN-Bibliothek",
                              "NVIDIA Broadcast",
                              "Custom Gaming-PC",
                              "DGX Spark KI-Supercomputer",
                              "PhysX SDK für die Spieleentwicklung",
                              "Grafikkarten der Geforce RTX 50-Serie",
                              "Computer Vision für autonomes Fahren",
                              "GeForce Experience Funktionen",
                              "Generative KI im Gesundheitswesen",
                              "Reasoning mit NVIDIA Vera Rubin",
                              "5090 Spezifikationen",
                              "Einen RAG-basierten KI-Chatbot bauen",
                            ],
                          },
                        ),
                        "fr-fr",
                        {
                          overlayHeading: "En quoi puis-je vous aider ?",
                          defaultPlaceholder: "Commencez votre recherche",
                          trySearchesLabel: "Essayez ces recherches",
                          searchRecommended: "Recommandé",
                          searchRecommendedForYou: "Recommandé pour vous",
                          searchPrevLabel: "Précédent",
                          searchNextLabel: "Suiv.",
                          searchPageOfLabel: "sur",
                          filterTitle: "FILTRER",
                          filtersButtonLabel: "FILTRER",
                          selectAllLabel: "Tout sélectionner",
                          deselectAllLabel: "Tout désélectionner",
                          showMoreLabel: "Afficher plus",
                          showLessLabel: "Afficher moins",
                          moreLabel: "Plus",
                          resetLabel: "Réinitialiser",
                          applyLabel: "APPLIQUER",
                          locationLabel: "Localisation",
                          productsLabel: "Produits",
                          searchRefinementsLabel: "Essayez ces recherches",
                          resultsOfLabel: "sur",
                          paginationPrev: "Précédent",
                          paginationNext: "Suiv.",
                          paginationOf: "sur",
                          promoRecommended: "Recommandé",
                          generatingSummary: "Génération de votre résumé...",
                          summaryTitle:
                            "Résumé de vos résultats de recherche généré par l'IA",
                          copyLabel: "Copier",
                          copiedLabel: "Copié",
                          likedLabel: "Aimé",
                          likeLabel: "Aimer",
                          dislikedLabel: "Pas aimé",
                          dislikeLabel: "Ne pas aimer",
                          showMoreSummaryLabel: "Afficher plus",
                          showLessSummaryLabel: "Afficher moins",
                          disclaimerIntro:
                            "Le contenu généré par l'IA peut être incomplet. Vérifier les informations importantes.",
                          learnMoreLabel: "En savoir plus",
                          builtWithPrefix: "Basé sur Llama (",
                          builtWithSuffix:
                            " Accords de Licence Communautaire Llama 3.3 et Llama 3.2).",
                          notFoundStatus: "404-Page non trouvée",
                          notFoundTitle: "Quelque chose s'est mal passé",
                          notFoundDescription:
                            "Nous sommes désolés : la page que vous cherchez est introuvable. Rendez-vous sur notre page d'accueil pour parcourir les sujets disponibles ou réessayez votre recherche.",
                          notFoundButton: "Aller à l'accueil NVIDIA",
                          noResultsHeading: "Aucun résultat trouvé pour",
                          searchTipsLabel: "Astuces de recherche :",
                          tipSpell: "Vérifiez votre orthographe.",
                          tipSynonym:
                            "Essayez un mot différent qui signifie la même chose.",
                          tipGeneral: "Essayez des mots plus généraux.",
                          defaultSearchPills: [
                            "Jouer sur GeForce NOW",
                            "NVIDIA Nemotron",
                            "Télécharger CUDA Toolkit",
                            "Bibliothèque cuDNN",
                            "NVIDIA Broadcast",
                            "PC gaming personnalisé",
                            "Supercalculateur d'IA DGX Spark",
                            "PhysX SDK pour le développement de jeux",
                            "Cartes graphiques Geforce RTX série 50",
                            "Vision par ordinateur pour les voitures autonomes",
                            "Fonctionnalités GeForce Experience",
                            "IA générative pour la santé",
                            "Raisonnement avec NVIDIA Vera Rubin",
                            "Spécifications 5090",
                            "Créer un chatbot IA basé sur RAG",
                          ],
                        },
                      ),
                      "es-es",
                      {
                        overlayHeading: "¿En qué puedo ayudarte?",
                        defaultPlaceholder: "Comienza tu búsqueda",
                        trySearchesLabel: "Prueba estas búsquedas",
                        searchRecommended: "Recomendado",
                        searchRecommendedForYou: "Recomendado para ti",
                        searchPrevLabel: "Anterior",
                        searchNextLabel: "Siguiente",
                        searchPageOfLabel: "de",
                        filterTitle: "Filtro",
                        filtersButtonLabel: "Filtro",
                        selectAllLabel: "Seleccionar todo",
                        deselectAllLabel: "Deseleccionar todo",
                        showMoreLabel: "Mostrar más",
                        showLessLabel: "Mostrar menos",
                        moreLabel: "Más",
                        resetLabel: "Restablecer",
                        applyLabel: "Aplicar",
                        locationLabel: "Ubicación",
                        productsLabel: "Productos",
                        searchRefinementsLabel: "Prueba estas búsquedas",
                        resultsOfLabel: "de",
                        paginationPrev: "Anterior",
                        paginationNext: "Siguiente",
                        paginationOf: "de",
                        promoRecommended: "Recomendado",
                        generatingSummary: "Generando tu resumen...",
                        summaryTitle:
                          "Resumen generado por IA de tus resultados de búsqueda",
                        copyLabel: "Copiar",
                        copiedLabel: "Copiado",
                        likedLabel: "Me gusta",
                        likeLabel: "Me gusta",
                        dislikedLabel: "No me gusta",
                        dislikeLabel: "No me gusta",
                        showMoreSummaryLabel: "Mostrar más",
                        showLessSummaryLabel: "Mostrar menos",
                        disclaimerIntro:
                          "El contenido generado por IA puede estar incompleto. Verifica la información importante.",
                        learnMoreLabel: "Más información",
                        builtWithPrefix: "Desarrollado con Llama (",
                        builtWithSuffix:
                          " Acuerdos de Licencia Comunitaria Llama 3.3 y Llama 3.2).",
                        notFoundStatus: "404-Página no encontrada",
                        notFoundTitle: "Algo salió mal",
                        notFoundDescription:
                          "Lo sentimos: no se puede encontrar la página que buscas. Visita nuestra página de inicio para explorar los temas disponibles o intenta buscar de nuevo.",
                        notFoundButton: "Ir a la página de inicio de NVIDIA",
                        noResultsHeading: "No se encontraron resultados para",
                        searchTipsLabel: "Consejos de búsqueda:",
                        tipSpell: "Revisa tu ortografía.",
                        tipSynonym:
                          "Prueba una palabra diferente que signifique lo mismo.",
                        tipGeneral: "Prueba palabras más generales.",
                        defaultSearchPills: [
                          "Gaming en GeForce NOW",
                          "NVIDIA Nemotron",
                          "Descargar CUDA Toolkit",
                          "Biblioteca cuDNN",
                          "NVIDIA Broadcast",
                          "PC gaming personalizado",
                          "Superordenador de IA DGX Spark",
                          "PhysX SDK para el desarrollo de juegos",
                          "Tarjetas gráficas Geforce RTX serie 50",
                          "Visión artificial para coches autónomos",
                          "Funciones de GeForce Experience",
                          "IA generativa para sanidad",
                          "Razonamiento con NVIDIA Vera Rubin",
                          "5090 especificaciones",
                          "Crear un chatbot de IA con RAG",
                        ],
                      },
                    ),
                    "it-it",
                    {
                      overlayHeading: "Come posso aiutarla?",
                      defaultPlaceholder: "Inizi la ricerca",
                      trySearchesLabel: "Provi queste ricerche",
                      searchRecommended: "Consigliato",
                      searchRecommendedForYou: "Consigliato per lei",
                      searchPrevLabel: "Precedente",
                      searchNextLabel: "Avanti",
                      searchPageOfLabel: "di",
                      filterTitle: "Filtro",
                      filtersButtonLabel: "Filtro",
                      selectAllLabel: "Seleziona tutto",
                      deselectAllLabel: "Deseleziona tutto",
                      showMoreLabel: "Mostra di più",
                      showLessLabel: "Mostra meno",
                      moreLabel: "ALTRO",
                      resetLabel: "Ripristina",
                      applyLabel: "Applica",
                      locationLabel: "Località",
                      productsLabel: "Prodotti",
                      searchRefinementsLabel: "Provi queste ricerche",
                      resultsOfLabel: "di",
                      paginationPrev: "Precedente",
                      paginationNext: "Avanti",
                      paginationOf: "di",
                      promoRecommended: "Consigliato",
                      generatingSummary:
                        "Generazione del riepilogo in corso...",
                      summaryTitle:
                        "Riepilogo dei risultati della ricerca generato dall'IA",
                      copyLabel: "Copia",
                      copiedLabel: "Copiato",
                      likedLabel: "Mi piace",
                      likeLabel: "Mi piace",
                      dislikedLabel: "Non mi piace",
                      dislikeLabel: "Non mi piace",
                      showMoreSummaryLabel: "Mostra di più",
                      showLessSummaryLabel: "Mostra meno",
                      disclaimerIntro:
                        "I contenuti generati dall'IA potrebbero essere incompleti. Verificare le informazioni importanti.",
                      learnMoreLabel: "Ulteriori informazioni",
                      builtWithPrefix: "Realizzato con Llama (",
                      builtWithSuffix:
                        " Accordi di licenza della Community di Llama 3.3 e Llama 3.2).",
                      notFoundStatus: "404-Pagina non trovata",
                      notFoundTitle: "Qualcosa è andato storto",
                      notFoundDescription:
                        "Ci scusiamo: la pagina che stai cercando non può essere trovata. Vai alla nostra homepage per esplorare gli argomenti disponibili o riprova la ricerca.",
                      notFoundButton: "Vai alla homepage NVIDIA",
                      noResultsHeading: "Nessun risultato trovato per",
                      searchTipsLabel: "Suggerimenti per la ricerca:",
                      tipSpell: "Controlla l'ortografia.",
                      tipSynonym:
                        "Prova una parola diversa con lo stesso significato.",
                      tipGeneral: "Prova parole più generali.",
                      defaultSearchPills: [
                        "Gaming su GeForce NOW",
                        "NVIDIA Nemotron",
                        "Scaricare CUDA Toolkit",
                        "Libreria cuDNN",
                        "NVIDIA Broadcast",
                        "PC gaming personalizzato",
                        "Supercomputer IA DGX Spark",
                        "PhysX SDK per lo sviluppo di videogiochi",
                        "Schede grafiche Geforce RTX Serie 50",
                        "Visione artificiale per auto a guida autonoma",
                        "Funzionalità di GeForce Experience",
                        "IA generativa per la sanità",
                        "Ragionamento con NVIDIA Vera Rubin",
                        "Specifiche di 5090",
                        "Creare un chatbot IA basato su RAG",
                      ],
                    },
                  ),
                  "cs-cz",
                  {
                    overlayHeading: "S čím vám můžu pomoct?",
                    defaultPlaceholder: "Zahájit vyhledávání",
                    trySearchesLabel: "Vyzkoušejte následující vyhledávání",
                    searchRecommended: "Doporučeno",
                    searchRecommendedForYou: "Doporučeno pro vás",
                    searchPrevLabel: "Předchozí",
                    searchNextLabel: "Další",
                    searchPageOfLabel: "z",
                    filterTitle: "Filtr",
                    filtersButtonLabel: "Filtry",
                    selectAllLabel: "Vybrat vše",
                    deselectAllLabel: "Zrušit výběr",
                    showMoreLabel: "Zobrazit více",
                    showLessLabel: "Zobrazit méně",
                    moreLabel: "Více",
                    resetLabel: "Obnovit",
                    applyLabel: "Použít",
                    locationLabel: "Poloha",
                    searchRefinementsLabel:
                      "Vyzkoušejte následující vyhledávání",
                    resultsOfLabel: "z",
                    paginationPrev: "Předchozí",
                    paginationNext: "Další",
                    paginationOf: "z",
                    promoRecommended: "Doporučeno",
                    defaultSearchPills: [
                      "Hraní na GeForce NOW",
                      "NVIDIA Nemotron",
                      "Stáhnout CUDA Toolkit",
                      "Knihovna cuDNN",
                      "NVIDIA Broadcast",
                      "Herní PC na míru",
                      "DGX Spark AI superpočítač",
                      "PhysX SDK pro vývoj her",
                      "Grafické karty GeForce RTX 50",
                      "Počítačové vidění pro autonomní vozidla",
                      "Funkce GeForce Experience",
                      "Generativní AI ve zdravotnictví",
                      "Reasoning s NVIDIA Vera Rubin",
                      "Specifikace 5090",
                      "Vytvoření AI chatbota s technologií RAG",
                    ],
                  },
                ),
                "da-dk",
                {
                  overlayHeading: "Hvad kan jeg hjælpe dig med?",
                  defaultPlaceholder: "Start din søgning",
                  trySearchesLabel: "Prøv disse søgninger",
                  searchRecommended: "Anbefales",
                  searchRecommendedForYou: "Anbefales til dig",
                  searchPrevLabel: "Forrige",
                  searchNextLabel: "Næste",
                  searchPageOfLabel: "af",
                  filterTitle: "Filter",
                  filtersButtonLabel: "Filtre",
                  selectAllLabel: "Vælg alle",
                  deselectAllLabel: "Fravælg alle",
                  showMoreLabel: "Vis mere",
                  showLessLabel: "Vis mindre",
                  moreLabel: "MERE",
                  resetLabel: "Nulstil",
                  applyLabel: "Anvend",
                  locationLabel: "Placering",
                  searchRefinementsLabel: "Prøv disse søgninger",
                  resultsOfLabel: "af",
                  paginationPrev: "Forrige",
                  paginationNext: "Næste",
                  paginationOf: "af",
                  promoRecommended: "Anbefales",
                  defaultSearchPills: [
                    "Gaming på GeForce NOW",
                    "NVIDIA Nemotron",
                    "Download CUDA Toolkit",
                    "cuDNN-bibliotek",
                    "NVIDIA Broadcast",
                    "Brugertilpasset gaming-pc",
                    "DGX Spark AI-supercomputer",
                    "PhysX SDK til spiludvikling",
                    "GeForce RTX 50-grafikkort",
                    "Computer vision til selvkørende biler",
                    "GeForce Experience-funktioner",
                    "Generativ AI til sundhedsvæsenet",
                    "Reasoning med NVIDIA Vera Rubin",
                    "5090-specifikationer",
                    "Byg en RAG-baseret AI-chatbot",
                  ],
                },
              ),
              "fi-fi",
              {
                overlayHeading: "Miten voin auttaa?",
                defaultPlaceholder: "Aloita haku",
                trySearchesLabel: "Kokeile näitä hakuja",
                searchRecommended: "Suositeltu",
                searchRecommendedForYou: "Suositellaan sinulle",
                searchPrevLabel: "Edellinen",
                searchNextLabel: "Seuraava",
                searchPageOfLabel: "/",
                filterTitle: "Suodata",
                filtersButtonLabel: "Suodattimet",
                selectAllLabel: "Valitse kaikki",
                deselectAllLabel: "Poista valinnat",
                showMoreLabel: "Näytä lisää",
                showLessLabel: "Näytä vähemmän",
                moreLabel: "LISÄÄ",
                resetLabel: "Nollaa",
                applyLabel: "Käytä",
                locationLabel: "Sijainti",
                searchRefinementsLabel: "Kokeile näitä hakuja",
                resultsOfLabel: "/",
                paginationPrev: "Edellinen",
                paginationNext: "Seuraava",
                paginationOf: "/",
                promoRecommended: "Suositeltu",
                defaultSearchPills: [
                  "Pelaaminen GeForce NOW:lla",
                  "NVIDIA Nemotron",
                  "Lataa CUDA Toolkit",
                  "cuDNN-kirjasto",
                  "NVIDIA Broadcast",
                  "Räätälöity pelitietokone",
                  "DGX Spark -tekoälysupertietokone",
                  "PhysX SDK pelinkehitykseen",
                  "GeForce RTX 50 -näytönohjaimet",
                  "Tietokonenäkö itseajaviin autoihin",
                  "GeForce Experience -ominaisuudet",
                  "Generatiivinen tekoäly terveydenhuollossa",
                  "Päättely NVIDIA Vera Rubinilla",
                  "5090:n tekniset tiedot",
                  "RAG-pohjaisen tekoälychatbotin rakentaminen",
                ],
              },
            ),
            "nl-nl",
            {
              overlayHeading: "Waarmee kan ik u helpen?",
              defaultPlaceholder: "Start uw zoekopdracht",
              trySearchesLabel: "Probeer deze zoekopdrachten",
              searchRecommended: "Aanbevolen",
              searchRecommendedForYou: "Aanbevolen voor u",
              searchPrevLabel: "Vorige",
              searchNextLabel: "Volgende",
              searchPageOfLabel: "van",
              filterTitle: "Filter",
              filtersButtonLabel: "Filters",
              selectAllLabel: "Selecteer alles",
              deselectAllLabel: "Alles deselecteren",
              showMoreLabel: "Meer weergeven",
              showLessLabel: "Minder weergeven",
              moreLabel: "Meer",
              resetLabel: "Reset",
              applyLabel: "Toepassen",
              locationLabel: "Locatie",
              searchRefinementsLabel: "Probeer deze zoekopdrachten",
              resultsOfLabel: "van",
              paginationPrev: "Vorige",
              paginationNext: "Volgende",
              paginationOf: "van",
              promoRecommended: "Aanbevolen",
              defaultSearchPills: [
                "Gamen op GeForce NOW",
                "NVIDIA Nemotron",
                "CUDA Toolkit downloaden",
                "cuDNN-bibliotheek",
                "NVIDIA Broadcast",
                "Aangepaste gaming-pc",
                "DGX Spark AI-supercomputer",
                "PhysX SDK voor game-ontwikkeling",
                "GeForce RTX 50 grafische kaarten",
                "Computer vision voor zelfrijdende auto's",
                "GeForce Experience-functies",
                "Generatieve AI voor de gezondheidszorg",
                "Redeneren met NVIDIA Vera Rubin",
                "5090-specificaties",
                "Een RAG-aangedreven AI-chatbot bouwen",
              ],
            },
          ),
          "nb-no",
          {
            overlayHeading: "Hva kan jeg hjelpe deg med?",
            defaultPlaceholder: "Start søket",
            trySearchesLabel: "Prøv disse søkene",
            searchRecommended: "Anbefalt",
            searchRecommendedForYou: "Anbefalt for deg",
            searchPrevLabel: "Forrige",
            searchNextLabel: "Neste",
            searchPageOfLabel: "av",
            filterTitle: "Filtrer",
            filtersButtonLabel: "Filtre",
            selectAllLabel: "Velg alle",
            deselectAllLabel: "Avmarker alle",
            showMoreLabel: "Vis mer",
            showLessLabel: "Vis mindre",
            moreLabel: "Mer",
            resetLabel: "Tilbakestill",
            applyLabel: "Bruk",
            locationLabel: "Plassering",
            searchRefinementsLabel: "Prøv disse søkene",
            resultsOfLabel: "av",
            paginationPrev: "Forrige",
            paginationNext: "Neste",
            paginationOf: "av",
            promoRecommended: "Anbefalt",
            defaultSearchPills: [
              "Spill på GeForce NOW",
              "NVIDIA Nemotron",
              "Last ned CUDA Toolkit",
              "cuDNN-bibliotek",
              "NVIDIA Broadcast",
              "Tilpasset spill-PC",
              "DGX Spark AI-superdatamaskin",
              "PhysX SDK for spillutvikling",
              "GeForce RTX 50-skjermkort",
              "Datasyn for selvkjørende biler",
              "GeForce Experience-funksjoner",
              "Generativ AI for helsevesenet",
              "Resonnement med NVIDIA Vera Rubin",
              "5090-spesifikasjoner",
              "Bygge en RAG-drevet AI-chatbot",
            ],
          },
        ),
        Wr(
          Wr(
            Wr(
              Wr(
                Wr(
                  Wr(
                    Wr(Mr, "pl-pl", {
                      overlayHeading: "W czym mogę pomóc?",
                      defaultPlaceholder: "Rozpocznij wyszukiwanie",
                      trySearchesLabel: "Wypróbuj te frazy wyszukiwania",
                      searchRecommended: "Zalecane",
                      searchRecommendedForYou: "Zalecane dla Ciebie",
                      searchPrevLabel: "Poprzednie",
                      searchNextLabel: "Następne",
                      searchPageOfLabel: "z",
                      filterTitle: "Filtruj",
                      filtersButtonLabel: "Filtry",
                      selectAllLabel: "Wybierz wszystko",
                      deselectAllLabel: "Anuluj wybór wszystkiego",
                      showMoreLabel: "Pokaż więcej",
                      showLessLabel: "Pokaż mniej",
                      moreLabel: "WIĘCEJ",
                      resetLabel: "Resetuj",
                      applyLabel: "Zastosuj",
                      locationLabel: "Lokalizacja",
                      searchRefinementsLabel: "Wypróbuj te frazy wyszukiwania",
                      resultsOfLabel: "z",
                      paginationPrev: "Poprzednie",
                      paginationNext: "Następne",
                      paginationOf: "z",
                      promoRecommended: "Zalecane",
                      defaultSearchPills: [
                        "Granie w GeForce NOW",
                        "NVIDIA Nemotron",
                        "Pobierz CUDA Toolkit",
                        "Biblioteka cuDNN",
                        "NVIDIA Broadcast",
                        "Niestandardowy komputer do gier",
                        "Superkomputer AI DGX Spark",
                        "PhysX SDK do tworzenia gier",
                        "Karty graficzne GeForce RTX 50",
                        "Wizja komputerowa dla samochodów autonomicznych",
                        "Funkcje GeForce Experience",
                        "Generatywna AI w służbie zdrowia",
                        "Rozumowanie z NVIDIA Vera Rubin",
                        "Specyfikacja 5090",
                        "Tworzenie chatbota AI opartego na RAG",
                      ],
                    }),
                    "ro-ro",
                    {
                      overlayHeading: "Cu ce vă pot ajuta?",
                      defaultPlaceholder: "Începeți căutarea",
                      trySearchesLabel: "Încercați aceste căutări",
                      searchRecommended: "Recomandat",
                      searchRecommendedForYou: "Recomandat pentru dvs.",
                      searchPrevLabel: "Anterior",
                      searchNextLabel: "Următor",
                      searchPageOfLabel: "din",
                      filterTitle: "Filtru",
                      filtersButtonLabel: "Filtre",
                      selectAllLabel: "Selectează tot",
                      deselectAllLabel: "Deselectează tot",
                      showMoreLabel: "Afișează mai mult",
                      showLessLabel: "Afișează mai puțin",
                      moreLabel: "Mai multe",
                      resetLabel: "Resetează",
                      applyLabel: "Aplică",
                      locationLabel: "Locație",
                      searchRefinementsLabel: "Încercați aceste căutări",
                      resultsOfLabel: "din",
                      paginationPrev: "Anterior",
                      paginationNext: "Următor",
                      paginationOf: "din",
                      promoRecommended: "Recomandat",
                      defaultSearchPills: [
                        "Gaming pe GeForce NOW",
                        "NVIDIA Nemotron",
                        "Descărcați CUDA Toolkit",
                        "Bibliotecă cuDNN",
                        "NVIDIA Broadcast",
                        "PC personalizat pentru gaming",
                        "Supercomputer AI DGX Spark",
                        "PhysX SDK pentru dezvoltarea jocurilor",
                        "Plăci video GeForce RTX 50",
                        "Computer vision pentru mașini autonome",
                        "Funcționalități GeForce Experience",
                        "AI generativ pentru sănătate",
                        "Raționament cu NVIDIA Vera Rubin",
                        "Specificații 5090",
                        "Construirea unui chatbot AI bazat pe RAG",
                      ],
                    },
                  ),
                  "sv-se",
                  {
                    overlayHeading: "Vad kan jag hjälpa dig med?",
                    defaultPlaceholder: "Starta din sökning",
                    trySearchesLabel: "Prova dessa sökningar",
                    searchRecommended: "Rekommenderas",
                    searchRecommendedForYou: "Rekommenderas för dig",
                    searchPrevLabel: "Föregående",
                    searchNextLabel: "Nästa",
                    searchPageOfLabel: "av",
                    filterTitle: "Filtrera",
                    filtersButtonLabel: "Filter",
                    selectAllLabel: "Välj alla",
                    deselectAllLabel: "Avmarkera alla",
                    showMoreLabel: "Visa mer",
                    showLessLabel: "Visa mindre",
                    moreLabel: "Mer",
                    resetLabel: "Återställ",
                    applyLabel: "Tillämpa",
                    locationLabel: "Plats",
                    searchRefinementsLabel: "Prova dessa sökningar",
                    resultsOfLabel: "av",
                    paginationPrev: "Föregående",
                    paginationNext: "Nästa",
                    paginationOf: "av",
                    promoRecommended: "Rekommenderas",
                    defaultSearchPills: [
                      "Gaming på GeForce NOW",
                      "NVIDIA Nemotron",
                      "Ladda ner CUDA Toolkit",
                      "cuDNN-bibliotek",
                      "NVIDIA Broadcast",
                      "Skräddarsydd gamingdator",
                      "DGX Spark AI-superdator",
                      "PhysX SDK för spelutveckling",
                      "GeForce RTX 50-grafikkort",
                      "Datorseende för självkörande bilar",
                      "GeForce Experience-funktioner",
                      "Generativ AI för sjukvården",
                      "Resonemang med NVIDIA Vera Rubin",
                      "5090-specifikationer",
                      "Bygga en RAG-driven AI-chatbot",
                    ],
                  },
                ),
                "tr-tr",
                {
                  overlayHeading: "Size nasıl yardımcı olabilirim?",
                  defaultPlaceholder: "Aramanıza başlayın",
                  trySearchesLabel: "Bu Aramaları Deneyin",
                  searchRecommended: "Önerilen",
                  searchRecommendedForYou: "Sizin İçin Önerilen",
                  searchPrevLabel: "Önceki",
                  searchNextLabel: "Sonraki",
                  searchPageOfLabel: "/",
                  filterTitle: "Filtre",
                  filtersButtonLabel: "Filtreler",
                  selectAllLabel: "Tümünü Seç",
                  deselectAllLabel: "Tüm Seçimleri Kaldır",
                  showMoreLabel: "Daha Fazla Göster",
                  showLessLabel: "Daha Az Göster",
                  moreLabel: "Daha fazla",
                  resetLabel: "Sıfırla",
                  applyLabel: "Uygula",
                  locationLabel: "Konum",
                  searchRefinementsLabel: "Bu Aramaları Deneyin",
                  resultsOfLabel: "/",
                  paginationPrev: "Önceki",
                  paginationNext: "Sonraki",
                  paginationOf: "/",
                  promoRecommended: "Önerilen",
                  defaultSearchPills: [
                    "GeForce NOW'da Oyun",
                    "NVIDIA Nemotron",
                    "CUDA Toolkit'i İndirin",
                    "cuDNN kütüphanesi",
                    "NVIDIA Broadcast",
                    "Özel oyun bilgisayarı",
                    "DGX Spark Yapay Zeka Süper Bilgisayarı",
                    "Oyun geliştirme için PhysX SDK",
                    "GeForce RTX 50 Serisi Ekran Kartları",
                    "Sürücüsüz araçlar için bilgisayarlı görü",
                    "GeForce Experience özellikleri",
                    "Sağlık için Üretken Yapay Zeka",
                    "NVIDIA Vera Rubin ile akıl yürütme",
                    "5090 özellikleri",
                    "RAG destekli yapay zeka sohbet botu oluşturma",
                  ],
                },
              ),
              "ja-jp",
              {
                overlayHeading: "お手伝いできることはありますか?",
                defaultPlaceholder: "検索を開始する",
                trySearchesLabel: "おすすめの検索ワード",
                searchRecommended: "推奨",
                searchRecommendedForYou: "あなたにおすすめ",
                searchPrevLabel: "前へ",
                searchNextLabel: "次へ",
                searchPageOfLabel: "/",
                filterTitle: "絞り込む",
                filtersButtonLabel: "絞り込む",
                selectAllLabel: "すべて選択する",
                deselectAllLabel: "すべての選択を解除する",
                showMoreLabel: "もっと表示する",
                showLessLabel: "表示を減らす",
                moreLabel: "もっと見る",
                resetLabel: "リセットする",
                applyLabel: "適用する",
                locationLabel: "地域",
                searchRefinementsLabel: "おすすめの検索ワード",
                resultsOfLabel: "/",
                paginationPrev: "前へ",
                paginationNext: "次へ",
                paginationOf: "/",
                promoRecommended: "推奨",
                defaultSearchPills: [
                  "GeForce NOW でゲーム",
                  "NVIDIA Nemotron",
                  "CUDA Toolkit のダウンロード",
                  "cuDNN ライブラリ",
                  "NVIDIA Broadcast",
                  "カスタム ゲーミング PC",
                  "DGX Spark AI スーパーコンピューター",
                  "ゲーム開発のための PhysX SDK",
                  "GeForce RTX 50 シリーズ グラフィックス カード",
                  "自動運転車向けコンピュータ ビジョン",
                  "GeForce Experience の機能",
                  "ヘルスケア向け生成 AI",
                  "NVIDIA Vera Rubin による推論",
                  "5090 のスペック",
                  "RAG を活用した AI チャットボットの構築",
                ],
              },
            ),
            "ko-kr",
            {
              overlayHeading: "무엇을 도와드릴까요?",
              defaultPlaceholder: "검색을 시작하세요.",
              trySearchesLabel: "다음과 같이 검색해 보세요.",
              searchRecommended: "추천됨",
              searchRecommendedForYou: "당신을 위한 추천",
              searchPrevLabel: "이전",
              searchNextLabel: "다음",
              searchPageOfLabel: "/",
              filterTitle: "필터",
              filtersButtonLabel: "필터",
              selectAllLabel: "모두 선택",
              deselectAllLabel: "모두 선택 취소",
              showMoreLabel: "더 보기",
              showLessLabel: "간략히 보기",
              moreLabel: "더 보기",
              resetLabel: "초기화",
              applyLabel: "적용",
              locationLabel: "위치",
              searchRefinementsLabel: "다음과 같이 검색해 보세요.",
              resultsOfLabel: "/",
              paginationPrev: "이전",
              paginationNext: "다음",
              paginationOf: "/",
              promoRecommended: "추천됨",
              defaultSearchPills: [
                "GeForce NOW에서 게임 즐기기",
                "NVIDIA Nemotron",
                "CUDA Toolkit 다운로드",
                "cuDNN 라이브러리",
                "NVIDIA Broadcast",
                "맞춤형 게이밍 PC",
                "DGX Spark AI 슈퍼컴퓨터",
                "게임 개발용 PhysX SDK",
                "GeForce RTX 50 시리즈 그래픽카드",
                "자율주행차를 위한 컴퓨터 비전",
                "GeForce Experience 기능",
                "헬스케어 분야의 생성형 AI",
                "NVIDIA Vera Rubin을 활용한 추론",
                "5090 사양",
                "RAG 기반 AI 챗봇 구축",
              ],
            },
          ),
          "zh-tw",
          {
            overlayHeading: "我能夠為您提供什麼協助？",
            defaultPlaceholder: "開始搜尋",
            trySearchesLabel: "嘗試這些搜尋",
            searchRecommended: "推薦",
            searchRecommendedForYou: "為您推薦",
            searchPrevLabel: "上一頁",
            searchNextLabel: "下一頁",
            searchPageOfLabel: "/",
            filterTitle: "篩選器",
            filtersButtonLabel: "篩選器",
            selectAllLabel: "全部選取",
            deselectAllLabel: "取消全部選取",
            showMoreLabel: "顯示更多",
            showLessLabel: "顯示更少",
            moreLabel: "更多",
            resetLabel: "重設",
            applyLabel: "套用",
            locationLabel: "位置",
            searchRefinementsLabel: "嘗試這些搜尋",
            resultsOfLabel: "/",
            paginationPrev: "上一頁",
            paginationNext: "下一頁",
            paginationOf: "/",
            promoRecommended: "推薦",
            defaultSearchPills: [
              "在 GeForce NOW 上玩遊戲",
              "NVIDIA Nemotron",
              "下載 CUDA Toolkit",
              "cuDNN 函式庫",
              "NVIDIA Broadcast",
              "客製化遊戲電腦",
              "DGX Spark AI 超級電腦",
              "用於遊戲開發的 PhysX SDK",
              "GeForce RTX 50 系列顯示卡",
              "自動駕駛車輛的電腦視覺",
              "GeForce Experience 功能",
              "醫療保健的生成式 AI",
              "使用 NVIDIA Vera Rubin 進行推理",
              "5090 規格",
              "建構 RAG 驅動的 AI 聊天機器人",
            ],
          },
        )),
      Xr = { "de-at": "de-de", "fr-be": "fr-fr" },
      Jr = function (e) {
        var n = Kr[$r];
        if (!e) return n;
        var t = e.toLowerCase(),
          r = Kr[Xr[t] || t];
        return r ? qr(qr({}, n), r) : n;
      },
      Qr = Jr(Bn);
    const Zr = function (e) {
      var n = e.currentPage,
        t = e.totalSize,
        r = e.handleActivePage,
        a = e.isLoading,
        i = e.pageSize;
      return (0, Un.jsxs)("div", {
        className: "librarian-search-pagination-wrapper",
        children: [
          (0, Un.jsx)("div", {
            className: "librarian-pager-left",
            children: (0, Un.jsx)("button", {
              type: "button",
              className: "librarian-pagination-button",
              disabled: (n <= 1) | a,
              onClick: function () {
                r(parseInt(n) - 1);
              },
              children: Qr.paginationPrev,
            }),
          }),
          (0, Un.jsxs)("div", {
            className: "librarian-pager-center",
            children: [n, " ", Qr.paginationOf, " ", Math.ceil(t / i)],
          }),
          (0, Un.jsx)("div", {
            className: "librarian-pager-right",
            children: (0, Un.jsx)("button", {
              type: "button",
              className: "librarian-pagination-button",
              disabled: !(n < Math.ceil(t / i)) | a,
              onClick: function () {
                r(parseInt(n) + 1);
              },
              children: Qr.paginationNext,
            }),
          }),
        ],
      });
    };
    var Yr = a(963),
      ea = {};
    ((ea.styleTagTransform = Tn()),
      (ea.setAttributes = Cn()),
      (ea.insert = Ln().bind(null, "head")),
      (ea.domAPI = Dn()),
      (ea.insertStyleElement = Pn()),
      Nn()(Yr.A, ea),
      Yr.A && Yr.A.locals && Yr.A.locals);
    var na = function () {
        return (0, Un.jsx)("svg", {
          width: "20",
          height: "12",
          viewBox: "0 0 20 12",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, Un.jsx)("path", {
            d: "M1 11L10 2L19 11",
            stroke: "#CCCCCC",
            strokeWidth: "2",
            strokeLinecap: "round",
          }),
        });
      },
      ta = function () {
        return (0, Un.jsx)("svg", {
          width: "14",
          height: "9",
          viewBox: "0 0 14 9",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, Un.jsx)("path", {
            d: "M12.5742 2L7.44923 7L2.32425 2",
            stroke: "#76B900",
            strokeWidth: "2",
            strokeLinecap: "square",
          }),
        });
      },
      ra = function () {
        return (0, Un.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          children: (0, Un.jsx)("path", {
            d: "M0.748047 1.62305L15.2423 8.00051L0.748047 14.378L2.3229 8.50055H8.00081V7.50055H2.32292L0.748047 1.62305Z",
            fill: "black",
            fillOpacity: "0.9",
          }),
        });
      },
      aa = function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = e.color,
          t = void 0 === n ? "white" : n,
          r = e.size,
          a = void 0 === r ? 32 : r;
        return (0, Un.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: a,
          height: a,
          viewBox: "0 0 24 24",
          fill: "none",
          "aria-hidden": "true",
          children: (0, Un.jsx)("path", {
            d: "M19.856 14.1893C19.6846 14.1893 19.5188 14.2218 19.3641 14.2816L17.7227 11.746L19.3641 9.2105C19.5188 9.27023 19.6846 9.3028 19.856 9.3028C20.6186 9.3028 21.2376 8.69471 21.2376 7.94545C21.2376 7.19619 20.6186 6.5881 19.856 6.5881C19.4415 6.5881 19.0767 6.7727 18.8225 7.05503L13.4231 4.02542C13.4673 3.88968 13.5004 3.75395 13.5004 3.60735C13.5004 2.85809 12.8815 2.25 12.1188 2.25C11.3561 2.25 10.7372 2.85809 10.7372 3.60735C10.7372 3.75395 10.7648 3.89511 10.8145 4.02542L5.4151 7.05503C5.16088 6.7727 4.79613 6.5881 4.38164 6.5881C3.61897 6.5881 3 7.19619 3 7.94545C3 8.69471 3.61897 9.3028 4.38164 9.3028C4.55296 9.3028 4.71876 9.27023 4.8735 9.2105L6.51488 11.746L4.8735 14.2816C4.71876 14.2218 4.55296 14.1893 4.38164 14.1893C3.61897 14.1893 3 14.7974 3 15.5466C3 16.2959 3.61897 16.904 4.38164 16.904C4.79613 16.904 5.16088 16.7194 5.4151 16.437L10.8145 19.4667C10.7703 19.6024 10.7372 19.7381 10.7372 19.8901C10.7372 20.6394 11.3561 21.2475 12.1188 21.2475C12.8815 21.2475 13.5004 20.6394 13.5004 19.8901C13.5004 19.7436 13.4728 19.6024 13.4231 19.4667L18.8225 16.437C19.0767 16.7194 19.4415 16.904 19.856 16.904C20.6186 16.904 21.2376 16.2959 21.2376 15.5466C21.2376 14.7974 20.6186 14.1893 19.856 14.1893ZM18.8999 14.5748C18.8557 14.6182 18.817 14.6671 18.7783 14.7159L16.5235 13.6083L17.3966 12.2564L18.8999 14.5748ZM12.1188 18.5328C11.9475 18.5328 11.7817 18.5654 11.6269 18.6251L8.51549 13.8201L11.0356 12.5822C11.2898 12.8971 11.6767 13.1034 12.1188 13.1034C12.5609 13.1034 12.9478 12.8971 13.202 12.5822L15.7221 13.8201L12.6107 18.6251C12.4559 18.5654 12.2956 18.5328 12.1188 18.5328ZM12.1188 4.95927C12.2901 4.95927 12.4559 4.9267 12.6107 4.86697L15.7221 9.672L13.1965 10.9099C12.9423 10.595 12.5554 10.3887 12.1133 10.3887C11.6711 10.3887 11.2843 10.595 11.0301 10.9099L8.50444 9.672L11.6159 4.86697C11.7706 4.9267 11.9364 4.95927 12.1077 4.95927H12.1188ZM10.7869 11.3986C10.7537 11.5126 10.7372 11.6266 10.7372 11.746C10.7372 11.8655 10.7593 11.9849 10.7869 12.0935L8.21153 13.3586L7.16701 11.746L8.21153 10.1335L10.7869 11.3986ZM13.4507 12.0935C13.4839 11.9795 13.5004 11.8655 13.5004 11.746C13.5004 11.6266 13.4783 11.5071 13.4507 11.3986L16.0261 10.1335L17.0706 11.746L16.0261 13.3586L13.4507 12.0935ZM17.3966 11.2411L16.5235 9.88918L18.7783 8.78158C18.817 8.83044 18.8557 8.87931 18.8999 8.92274L17.3966 11.2411ZM18.5517 7.52738C18.5075 7.66312 18.4743 7.79886 18.4743 7.94545C18.4743 8.0649 18.4964 8.18434 18.5241 8.29293L16.2195 9.42768L13.0749 4.57379C13.0749 4.57379 13.1246 4.51949 13.1467 4.49235L18.5462 7.52196L18.5517 7.52738ZM11.0853 4.49235C11.1074 4.51949 11.1351 4.54664 11.1572 4.57379L8.01258 9.42768L5.70801 8.29293C5.74117 8.17891 5.75775 8.0649 5.75775 7.94545C5.75775 7.79886 5.73011 7.65769 5.68037 7.52738L11.0798 4.49777L11.0853 4.49235ZM5.33773 8.91731C5.38194 8.87388 5.42063 8.82501 5.45931 8.77615L7.71414 9.88375L6.84095 11.2357L5.33773 8.91731ZM6.84095 12.251L7.71414 13.6029L5.45931 14.7105C5.42063 14.6616 5.38194 14.6128 5.33773 14.5693L6.84095 12.251ZM5.6859 15.9701C5.73011 15.8344 5.76327 15.6986 5.76327 15.552C5.76327 15.4326 5.74117 15.3132 5.71353 15.2046L8.0181 14.0698L11.1627 18.9237C11.1627 18.9237 11.113 18.978 11.0909 19.0052L5.69143 15.9755L5.6859 15.9701ZM13.1523 18.9997C13.1302 18.9726 13.1025 18.9454 13.0804 18.9183L16.225 14.0644L18.5296 15.1991C18.4964 15.3132 18.4799 15.4272 18.4799 15.5466C18.4799 15.6932 18.5075 15.8344 18.5572 15.9647L13.1578 18.9943L13.1523 18.9997Z",
            fill: t,
          }),
        });
      },
      ia = function () {
        return (0, Un.jsx)("svg", {
          width: "14",
          height: "9",
          viewBox: "0 0 14 9",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          "aria-hidden": "true",
          children: (0, Un.jsx)("path", {
            d: "M12.5742 2L7.44923 7L2.32425 2",
            stroke: "#76B900",
            strokeWidth: "2",
            strokeLinecap: "square",
          }),
        });
      },
      la = function () {
        return (0, Un.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          children: [
            (0, Un.jsx)("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
            (0, Un.jsx)("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
          ],
        });
      },
      oa = function () {
        return (0, Un.jsx)("svg", {
          width: "20",
          height: "20",
          viewBox: "0 0 20 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, Un.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M2.5 2.5H15V15H2.5V2.5ZM3.75 3.75V13.75H13.75V3.75H3.75ZM16.25 16.25L16.25 5H17.5L17.5 17.5L5 17.5V16.25L16.25 16.25Z",
            fill: "white",
          }),
        });
      },
      sa = function () {
        return (0, Un.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "20",
          height: "20",
          viewBox: "0 0 20 20",
          fill: "none",
          children: [
            (0, Un.jsx)("path", { d: "M15 2.5H2.5V15H15V2.5Z", fill: "white" }),
            (0, Un.jsx)("path", {
              d: "M16.25 5L16.25 16.25L5 16.25V17.5L17.5 17.5L17.5 5H16.25Z",
              fill: "white",
            }),
          ],
        });
      },
      ua = function () {
        return (0, Un.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "20",
          height: "20",
          viewBox: "0 0 20 20",
          fill: "none",
          children: [
            (0, Un.jsx)("path", { d: "M15 2.5H2.5V15H15V2.5Z", fill: "white" }),
            (0, Un.jsx)("path", {
              d: "M16.25 5L16.25 16.25L5 16.25V17.5L17.5 17.5L17.5 5H16.25Z",
              fill: "white",
            }),
          ],
        });
      },
      ca = function () {
        return (0, Un.jsx)("svg", {
          width: "20",
          height: "20",
          viewBox: "0 0 20 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, Un.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M10.4381 2.5C10.2429 2.5 10.0625 2.60415 9.96485 2.77322L7.37512 7.25876L6.875 7.75888V14.353L9.28981 15H15.1663L16.5569 9.81011L15.9379 7.5H9.81048L10.9659 3.18788C11.0589 2.84082 10.7974 2.5 10.4381 2.5ZM5.625 15V7.5L3.75 7.5V15L5.625 15ZM6.51416 6.25L8.88232 2.14822C9.20322 1.5924 9.79628 1.25 10.4381 1.25C11.6193 1.25 12.479 2.37044 12.1733 3.5114L11.4395 6.25H16.897L17.851 9.81011L16.1254 16.25H9.12525L6.875 15.6471V16.25H2.5V6.25001L6.51416 6.25Z",
            fill: "white",
          }),
        });
      },
      da = function () {
        return (0, Un.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "20",
          height: "20",
          viewBox: "0 0 20 20",
          fill: "none",
          children: [
            (0, Un.jsx)("path", {
              d: "M5.62502 6.25L2.5 6.25001V16.25H5.62503L5.62502 6.25Z",
              fill: "white",
            }),
            (0, Un.jsx)("path", {
              d: "M6.87503 15.6471L9.12525 16.25H16.1254L17.851 9.81011L16.897 6.25H11.4395L12.1733 3.5114C12.479 2.37044 11.6193 1.25 10.4381 1.25C9.79628 1.25 9.20322 1.5924 8.88232 2.14822L6.87502 5.62496L6.87503 15.6471Z",
              fill: "white",
            }),
          ],
        });
      },
      fa = function () {
        return (0, Un.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "20",
          height: "20",
          viewBox: "0 0 20 20",
          fill: "none",
          children: [
            (0, Un.jsx)("path", {
              d: "M5.62502 6.25L2.5 6.25001V16.25H5.62503L5.62502 6.25Z",
              fill: "white",
            }),
            (0, Un.jsx)("path", {
              d: "M6.87503 15.6471L9.12525 16.25H16.1254L17.851 9.81011L16.897 6.25H11.4395L12.1733 3.5114C12.479 2.37044 11.6193 1.25 10.4381 1.25C9.79628 1.25 9.20322 1.5924 8.88232 2.14822L6.87502 5.62496L6.87503 15.6471Z",
              fill: "white",
            }),
          ],
        });
      },
      pa = function () {
        return (0, Un.jsx)("svg", {
          width: "20",
          height: "20",
          viewBox: "0 0 20 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, Un.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M13.1249 3.75H17.4999V13.75L13.4858 13.75L11.1176 17.8518C10.7967 18.4076 10.2037 18.75 9.56186 18.75C8.38065 18.75 7.52091 17.6296 7.82663 16.4886L8.56043 13.75H3.1029L2.14897 10.1899L3.87453 3.75H10.8747L13.1249 4.35296V3.75ZM14.3749 12.5L16.2499 12.5V5L14.3749 5V12.5ZM13.1249 5.64705V12.2411L12.6248 12.7412L10.0351 17.2268C9.93748 17.3959 9.75709 17.5 9.56186 17.5C9.20256 17.5 8.94104 17.1592 9.03403 16.8121L10.1895 12.5H4.06206L3.44307 10.1899L4.83369 5H10.7101L13.1249 5.64705Z",
            fill: "white",
          }),
        });
      },
      ma = function () {
        return (0, Un.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "20",
          height: "20",
          viewBox: "0 0 20 20",
          fill: "none",
          children: [
            (0, Un.jsx)("path", {
              d: "M14.375 13.75L17.5 13.75V3.75H14.375L14.375 13.75Z",
              fill: "white",
            }),
            (0, Un.jsx)("path", {
              d: "M13.125 4.35295L10.8748 3.75H3.87461L2.14905 10.1899L3.10298 13.75H8.56051L7.8267 16.4886C7.52098 17.6296 8.38072 18.75 9.56194 18.75C10.2037 18.75 10.7968 18.4076 11.1177 17.8518L13.125 14.375L13.125 4.35295Z",
              fill: "white",
            }),
          ],
        });
      },
      ha = function () {
        return (0, Un.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "20",
          height: "20",
          viewBox: "0 0 20 20",
          fill: "none",
          children: [
            (0, Un.jsx)("path", {
              d: "M14.375 13.75L17.5 13.75V3.75H14.375L14.375 13.75Z",
              fill: "white",
            }),
            (0, Un.jsx)("path", {
              d: "M13.125 4.35295L10.8748 3.75H3.87461L2.14905 10.1899L3.10298 13.75H8.56051L7.8267 16.4886C7.52098 17.6296 8.38072 18.75 9.56194 18.75C10.2037 18.75 10.7968 18.4076 11.1177 17.8518L13.125 14.375L13.125 4.35295Z",
              fill: "white",
            }),
          ],
        });
      };
    function ba() {
      var e,
        n,
        t = "function" == typeof Symbol ? Symbol : {},
        r = t.iterator || "@@iterator",
        a = t.toStringTag || "@@toStringTag";
      function i(t, r, a, i) {
        var s = r && r.prototype instanceof o ? r : o,
          u = Object.create(s.prototype);
        return (
          va(
            u,
            "_invoke",
            (function (t, r, a) {
              var i,
                o,
                s,
                u = 0,
                c = a || [],
                d = !1,
                f = {
                  p: 0,
                  n: 0,
                  v: e,
                  a: p,
                  f: p.bind(e, 4),
                  d: function (n, t) {
                    return ((i = n), (o = 0), (s = e), (f.n = t), l);
                  },
                };
              function p(t, r) {
                for (o = t, s = r, n = 0; !d && u && !a && n < c.length; n++) {
                  var a,
                    i = c[n],
                    p = f.p,
                    m = i[2];
                  t > 3
                    ? (a = m === r) &&
                      ((s = i[(o = i[4]) ? 5 : ((o = 3), 3)]),
                      (i[4] = i[5] = e))
                    : i[0] <= p &&
                      ((a = t < 2 && p < i[1])
                        ? ((o = 0), (f.v = r), (f.n = i[1]))
                        : p < m &&
                          (a = t < 3 || i[0] > r || r > m) &&
                          ((i[4] = t), (i[5] = r), (f.n = m), (o = 0)));
                }
                if (a || t > 1) return l;
                throw ((d = !0), r);
              }
              return function (a, c, m) {
                if (u > 1) throw TypeError("Generator is already running");
                for (
                  d && 1 === c && p(c, m), o = c, s = m;
                  (n = o < 2 ? e : s) || !d;

                ) {
                  i ||
                    (o
                      ? o < 3
                        ? (o > 1 && (f.n = -1), p(o, s))
                        : (f.n = s)
                      : (f.v = s));
                  try {
                    if (((u = 2), i)) {
                      if ((o || (a = "next"), (n = i[a]))) {
                        if (!(n = n.call(i, s)))
                          throw TypeError("iterator result is not an object");
                        if (!n.done) return n;
                        ((s = n.value), o < 2 && (o = 0));
                      } else
                        (1 === o && (n = i.return) && n.call(i),
                          o < 2 &&
                            ((s = TypeError(
                              "The iterator does not provide a '" +
                                a +
                                "' method",
                            )),
                            (o = 1)));
                      i = e;
                    } else if ((n = (d = f.n < 0) ? s : t.call(r, f)) !== l)
                      break;
                  } catch (n) {
                    ((i = e), (o = 1), (s = n));
                  } finally {
                    u = 1;
                  }
                }
                return { value: n, done: d };
              };
            })(t, a, i),
            !0,
          ),
          u
        );
      }
      var l = {};
      function o() {}
      function s() {}
      function u() {}
      n = Object.getPrototypeOf;
      var c = [][r]
          ? n(n([][r]()))
          : (va((n = {}), r, function () {
              return this;
            }),
            n),
        d = (u.prototype = o.prototype = Object.create(c));
      function f(e) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(e, u)
            : ((e.__proto__ = u), va(e, a, "GeneratorFunction")),
          (e.prototype = Object.create(d)),
          e
        );
      }
      return (
        (s.prototype = u),
        va(d, "constructor", u),
        va(u, "constructor", s),
        (s.displayName = "GeneratorFunction"),
        va(u, a, "GeneratorFunction"),
        va(d),
        va(d, a, "Generator"),
        va(d, r, function () {
          return this;
        }),
        va(d, "toString", function () {
          return "[object Generator]";
        }),
        (ba = function () {
          return { w: i, m: f };
        })()
      );
    }
    function va(e, n, t, r) {
      var a = Object.defineProperty;
      try {
        a({}, "", {});
      } catch (e) {
        a = 0;
      }
      ((va = function (e, n, t, r) {
        function i(n, t) {
          va(e, n, function (e) {
            return this._invoke(n, t, e);
          });
        }
        n
          ? a
            ? a(e, n, {
                value: t,
                enumerable: !r,
                configurable: !r,
                writable: !r,
              })
            : (e[n] = t)
          : (i("next", 0), i("throw", 1), i("return", 2));
      }),
        va(e, n, t, r));
    }
    function ga(e, n, t, r, a, i, l) {
      try {
        var o = e[i](l),
          s = o.value;
      } catch (e) {
        return void t(e);
      }
      o.done ? n(s) : Promise.resolve(s).then(r, a);
    }
    function wa(e, n) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, n) {
          var t =
            null == e
              ? null
              : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
          if (null != t) {
            var r,
              a,
              i,
              l,
              o = [],
              s = !0,
              u = !1;
            try {
              if (((i = (t = t.call(e)).next), 0 === n)) {
                if (Object(t) !== t) return;
                s = !1;
              } else
                for (
                  ;
                  !(s = (r = i.call(t)).done) &&
                  (o.push(r.value), o.length !== n);
                  s = !0
                );
            } catch (e) {
              ((u = !0), (a = e));
            } finally {
              try {
                if (
                  !s &&
                  null != t.return &&
                  ((l = t.return()), Object(l) !== l)
                )
                  return;
              } finally {
                if (u) throw a;
              }
            }
            return o;
          }
        })(e, n) ||
        (function (e, n) {
          if (e) {
            if ("string" == typeof e) return ya(e, n);
            var t = {}.toString.call(e).slice(8, -1);
            return (
              "Object" === t && e.constructor && (t = e.constructor.name),
              "Map" === t || "Set" === t
                ? Array.from(e)
                : "Arguments" === t ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                  ? ya(e, n)
                  : void 0
            );
          }
        })(e, n) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        })()
      );
    }
    function ya(e, n) {
      (null == n || n > e.length) && (n = e.length);
      for (var t = 0, r = Array(n); t < n; t++) r[t] = e[t];
      return r;
    }
    var xa = Jr(Bn);
    const Ia = function (e) {
      var n = e.activePage,
        t = e.query,
        r = e.summaryText,
        a = e.results,
        i = e.isGenerating,
        l = wa((0, s.useState)(!1), 2),
        o = l[0],
        u = l[1],
        c = wa((0, s.useState)(!1), 2),
        d = c[0],
        f = c[1],
        p = wa((0, s.useState)(null), 2),
        m = p[0],
        h = p[1],
        b = wa((0, s.useState)(null), 2),
        v = b[0],
        g = b[1],
        w = wa((0, s.useState)(!1), 2),
        y = w[0],
        x = w[1],
        I = wa((0, s.useState)(!1), 2),
        k = I[0],
        S = I[1],
        A = wa((0, s.useState)(!1), 2),
        N = A[0],
        E = (A[1], wa((0, s.useState)(!1), 2)),
        D = E[0],
        _ = E[1],
        L = wa((0, s.useState)(!1), 2),
        O = L[0],
        C = L[1],
        R = wa((0, s.useState)(!1), 2),
        P = R[0],
        j = R[1],
        T = wa((0, s.useState)(!1), 2),
        V = T[0],
        F = T[1],
        z = (0, s.useRef)(null),
        M = (0, s.useRef)(null),
        B = (0, s.useRef)(null);
      ((0, s.useEffect)(
        function () {
          var e = z.current,
            n = B.current;
          if (e) {
            var t = function () {
              (f(e.scrollHeight > 330), h(e.scrollHeight));
            };
            if ((t(), n && "undefined" != typeof ResizeObserver)) {
              var r = new ResizeObserver(t);
              return (
                r.observe(n),
                function () {
                  return r.disconnect();
                }
              );
            }
          }
        },
        [r, a, i],
      ),
        (0, s.useEffect)(
          function () {
            if (i || 0 === r.length) return (g(null), void x(!1));
            if (!y) {
              var e = requestAnimationFrame(function () {
                var e = B.current;
                if (e) {
                  var n = e.offsetHeight - e.clientHeight;
                  g(e.scrollHeight + n);
                }
              });
              return function () {
                return cancelAnimationFrame(e);
              };
            }
          },
          [i, r, a, y],
        ),
        (0, s.useEffect)(
          function () {
            if (null !== v && !y) {
              var e = setTimeout(function () {
                return x(!0);
              }, 600);
              return function () {
                return clearTimeout(e);
              };
            }
          },
          [v, y],
        ),
        (0, s.useEffect)(
          function () {
            var e = B.current,
              n = M.current;
            if (e && n) {
              var t = function () {
                e.style.setProperty(
                  "--librarian-btn-bar-height",
                  "".concat(n.offsetHeight, "px"),
                );
              };
              t();
              var r = new ResizeObserver(t);
              return (
                r.observe(n),
                function () {
                  return r.disconnect();
                }
              );
            }
          },
          [o, r, a],
        ),
        (0, s.useEffect)(
          function () {
            B.current &&
              null !== v &&
              B.current.style.setProperty(
                "--librarian-genai-container-height",
                "".concat(v, "px"),
              );
          },
          [v],
        ),
        (0, s.useEffect)(
          function () {
            z.current &&
              null !== m &&
              z.current.style.setProperty(
                "--librarian-genai-content-height",
                "".concat(m, "px"),
              );
          },
          [m],
        ));
      var U = (function () {
        var e,
          n =
            ((e = ba().m(function e() {
              var n, a, i, l, o;
              return ba().w(function (e) {
                for (;;)
                  switch (e.n) {
                    case 0:
                      (F(!V),
                        C(!1),
                        (n = {
                          method: "post",
                          maxBodyLength: 1 / 0,
                          url: "https://api-prod.nvidia.com/services/nod/api/v1/user-feedback",
                          headers: { "Content-Type": "application/json" },
                          data: {
                            feedbackCode: V ? 0 : -1,
                            query: t,
                            genSummary: r,
                          },
                        }),
                        Sn.request(n)
                          .then(function (e) {})
                          .catch(function (e) {
                            console.error("Error in /user-feedback API: ", e);
                          }),
                        (a = document.querySelector(
                          ".librarian-thumbsdowntext",
                        )),
                        (i = V ? xa.dislikeLabel : xa.dislikedLabel),
                        (a.textContent = i),
                        (l = document.querySelector(".librarian-thumbsuptext")),
                        (o = V ? xa.likedLabel : xa.likeLabel),
                        (l.textContent = o));
                    case 1:
                      return e.a(2);
                  }
              }, e);
            })),
            function () {
              var n = this,
                t = arguments;
              return new Promise(function (r, a) {
                var i = e.apply(n, t);
                function l(e) {
                  ga(i, r, a, l, o, "next", e);
                }
                function o(e) {
                  ga(i, r, a, l, o, "throw", e);
                }
                l(void 0);
              });
            });
        return function () {
          return n.apply(this, arguments);
        };
      })();
      return (0, Un.jsx)(Un.Fragment, {
        children:
          1 === n
            ? (0, Un.jsxs)("div", {
                ref: B,
                className: "librarian-genai-container rotating-gradient-border"
                  .concat(0 === r.length || i ? " librarian-genai-empty" : "")
                  .concat(
                    y
                      ? " librarian-genai-revealed"
                      : null !== v
                        ? " librarian-genai-measured"
                        : "",
                  ),
                children: [
                  (0, Un.jsx)("div", {
                    className: "librarian-genai-header",
                    children: (0, Un.jsxs)("p", {
                      className: "librarian-genAi-summery-title",
                      children: [
                        (0, Un.jsx)("span", { children: (0, Un.jsx)(aa, {}) }),
                        "  ",
                        (0, Un.jsx)("span", {
                          className: "librarian-genai-title-text",
                          children: i
                            ? (0, Un.jsxs)(Un.Fragment, {
                                children: [
                                  xa.generatingSummary.replace(/\.+$/, ""),
                                  (0, Un.jsxs)("span", {
                                    className: "librarian-generating-dots",
                                    "aria-hidden": "true",
                                    children: [
                                      (0, Un.jsx)("span", { children: "." }),
                                      (0, Un.jsx)("span", { children: "." }),
                                      (0, Un.jsx)("span", { children: "." }),
                                    ],
                                  }),
                                ],
                              })
                            : xa.summaryTitle,
                        }),
                      ],
                    }),
                  }),
                  r.length > 0 &&
                    !i &&
                    (0, Un.jsx)("ul", {
                      ref: z,
                      className: "librarian-ai-summery-text"
                        .concat(null !== m ? " librarian-summery-measured" : "")
                        .concat(d && !o ? " librarian-show-less-text" : ""),
                      children: (function (e) {
                        return e
                          .replace(/\\u([0-9A-Fa-f]{4})/g, function (e, n) {
                            return String.fromCharCode(parseInt(n, 16));
                          })
                          .replace(/\[\[/g, "[")
                          .replace(/\\\",/g, " ")
                          .replace(/\],/g, "")
                          .replace(/\]\]\]/g, "]")
                          .replace(/\[\]/g, "")
                          .split(/\[\\"/g)
                          .filter(function (e) {
                            return "" !== e;
                          })
                          .map(function (e, n) {
                            return (0, Un.jsx)(
                              "li",
                              {
                                children:
                                  ((t = e),
                                  t
                                    .split(/\[(\d+(?:,*\s*\d+)*)\]/g)
                                    .map(function (e, n) {
                                      if (e.match(/^\d+(?:,*\s*\d+)*$/g)) {
                                        var t = e
                                          .split(",")
                                          .map(function (e, n) {
                                            var t = e.trim(),
                                              r = parseInt(t, 10) - 1,
                                              i = a[r]
                                                ? a[r].document_url
                                                : "#";
                                            return (0, Un.jsx)(
                                              "a",
                                              {
                                                href: i,
                                                target: "_blank",
                                                className: "librarian-citation",
                                                children: t,
                                              },
                                              n,
                                            );
                                          });
                                        return (0, Un.jsx)(
                                          "span",
                                          { children: t },
                                          n,
                                        );
                                      }
                                      return e;
                                    })),
                              },
                              n,
                            );
                            var t;
                          });
                      })(r),
                    }),
                  r.length > 0 &&
                    !i &&
                    (0, Un.jsxs)("div", {
                      className:
                        "librarian-genAI-summary-btn-container librarian-genai-fade-in",
                      children: [
                        d &&
                          (0, Un.jsxs)("button", {
                            className: "librarian-show-more-button",
                            onClick: function () {
                              (u(function (e) {
                                return !e;
                              }),
                                (document.documentElement.scrollTop = 0));
                            },
                            "aria-expanded": o,
                            children: [
                              (0, Un.jsx)("span", {
                                className: "librarian-show-more",
                                children: o
                                  ? xa.showLessLabel
                                  : xa.showMoreLabel,
                              }),
                              (0, Un.jsx)("span", {
                                className: "librarian-arrow".concat(
                                  o ? " librarian-rotated" : "",
                                ),
                                children: (0, Un.jsx)(ta, {}),
                              }),
                            ],
                          }),
                        (0, Un.jsxs)("div", {
                          className: N
                            ? "librarian-tooltip librarian-tooltip-selected"
                            : "librarian-tooltip",
                          children: [
                            (0, Un.jsx)("div", {
                              onClick: function () {
                                var e = document.querySelector(
                                  ".librarian-ai-summery-text",
                                ).textContent;
                                navigator.clipboard.writeText(e);
                                var n = document.querySelector(
                                  ".librarian-tooltiptext",
                                );
                                ((n.textContent = xa.copiedLabel),
                                  setTimeout(function () {
                                    n.textContent = xa.copyLabel;
                                  }, 2e3));
                              },
                              onMouseOver: function () {
                                S(!0);
                              },
                              onMouseOut: function () {
                                S(!1);
                              },
                              children: N
                                ? (0, Un.jsx)(ua, {})
                                : k
                                  ? (0, Un.jsx)(sa, {})
                                  : (0, Un.jsx)(oa, {}),
                            }),
                            (0, Un.jsx)("span", {
                              className: "librarian-tooltiptext",
                              children: xa.copyLabel,
                            }),
                          ],
                        }),
                        (0, Un.jsxs)("div", {
                          className: O
                            ? "librarian-thumbs-up librarian-thumbs-up-selected"
                            : "librarian-thumbs-up",
                          children: [
                            (0, Un.jsx)("div", {
                              onClick: function () {
                                (C(!O), F(!1));
                                var e = {
                                  method: "post",
                                  maxBodyLength: 1 / 0,
                                  url: "https://api-prod.nvidia.com/services/nod/api/v1/user-feedback",
                                  headers: {
                                    "Content-Type": "application/json",
                                  },
                                  data: {
                                    feedbackCode: O ? 0 : 1,
                                    query: t,
                                    genSummary: r,
                                  },
                                };
                                Sn.request(e)
                                  .then(function (e) {})
                                  .catch(function (e) {
                                    console.error(
                                      "Error in /user-feedback API: ",
                                      e,
                                    );
                                  });
                                var n = document.querySelector(
                                    ".librarian-thumbsuptext",
                                  ),
                                  a = O ? xa.likeLabel : xa.likedLabel;
                                n.textContent = a;
                                var i = document.querySelector(
                                    ".librarian-thumbsdowntext",
                                  ),
                                  l = O ? xa.dislikedLabel : xa.dislikeLabel;
                                i.textContent = l;
                              },
                              onMouseOver: function () {
                                _(!0);
                              },
                              onMouseOut: function () {
                                _(!1);
                              },
                              children: O
                                ? (0, Un.jsx)(fa, {})
                                : D
                                  ? (0, Un.jsx)(da, {})
                                  : (0, Un.jsx)(ca, {}),
                            }),
                            (0, Un.jsx)("span", {
                              className: "librarian-thumbsuptext",
                              children: "Like",
                            }),
                          ],
                        }),
                        (0, Un.jsxs)("div", {
                          className: V
                            ? "librarian-thumbs-down librarian-thumbs-down-selected"
                            : "librarian-thumbs-down",
                          children: [
                            (0, Un.jsx)("div", {
                              onClick: U,
                              onMouseOver: function () {
                                j(!0);
                              },
                              onMouseOut: function () {
                                j(!1);
                              },
                              children: V
                                ? (0, Un.jsx)(ha, {})
                                : P
                                  ? (0, Un.jsx)(ma, {})
                                  : (0, Un.jsx)(pa, {}),
                            }),
                            (0, Un.jsx)("span", {
                              className: "librarian-thumbsdowntext",
                              children: "Dislike",
                            }),
                          ],
                        }),
                      ],
                    }),
                  r.length > 0 &&
                    !i &&
                    (0, Un.jsx)("div", {
                      ref: M,
                      className:
                        "librarian-show-more-btn-container librarian-genai-fade-in",
                      children: (0, Un.jsx)("div", {
                        className: "librarian-disclaimer-container",
                        children: (0, Un.jsxs)("p", {
                          children: [
                            xa.disclaimerIntro,
                            " ",
                            (0, Un.jsx)("a", {
                              href: "https://www.nvidia.com/en-us/agreements/trustworthy-ai/terms/",
                              target: "_blank",
                              children: xa.learnMoreLabel,
                            }),
                            ". ",
                            xa.builtWithPrefix,
                            (0, Un.jsx)("a", {
                              href: "https://www.llama.com/llama3_3/license/",
                              target: "_blank",
                              children: "Llama 3.3",
                            }),
                            " ",
                            "&",
                            " ",
                            (0, Un.jsx)("a", {
                              href: "https://www.llama.com/llama3_2/license/",
                              target: "_blank",
                              children: "Llama 3.2",
                            }),
                            " ",
                            xa.builtWithSuffix,
                          ],
                        }),
                      }),
                    }),
                ],
              })
            : (0, Un.jsx)(Un.Fragment, {}),
      });
    };
    var ka = a(247),
      Sa = {};
    ((Sa.styleTagTransform = Tn()),
      (Sa.setAttributes = Cn()),
      (Sa.insert = Ln().bind(null, "head")),
      (Sa.domAPI = Dn()),
      (Sa.insertStyleElement = Pn()),
      Nn()(ka.A, Sa),
      ka.A && ka.A.locals && ka.A.locals);
    var Aa = Jr(Bn);
    const Na = function (e) {
      var n = e.promos;
      return (0, Un.jsx)("div", {
        className: "librarian-search-results-wrapper",
        children: n.map(function (e, n) {
          return "suggestion" === e.promotype
            ? (0, Un.jsxs)(
                "div",
                {
                  className: "search-results-item promoted-item",
                  children: [
                    (0, Un.jsx)("div", {
                      className: "event-item-image",
                      children: (0, Un.jsx)("a", {
                        href: e.url,
                        className: "librarian-result-item",
                        children: (0, Un.jsx)("div", {
                          className: "librarian-item-image",
                          children: (0, Un.jsx)("img", {
                            src: e.image,
                            title: e.title,
                            alt: e.title,
                            className: "thumbnail in",
                          }),
                        }),
                      }),
                    }),
                    (0, Un.jsxs)("div", {
                      className: "librarian-search-results-text",
                      children: [
                        (0, Un.jsx)("div", {
                          className: "recommended",
                          children: Aa.promoRecommended,
                        }),
                        (0, Un.jsx)("div", {
                          className: "librarian-item-title",
                          children: (0, Un.jsx)("a", {
                            className: "librarian-result-item",
                            href: e.url,
                            children: e.title,
                          }),
                        }),
                        (0, Un.jsx)("div", {
                          className: "librarian-item-summary",
                          children: e.summary,
                        }),
                        (0, Un.jsx)("div", {
                          className: "librarian-item-footer",
                          children: (0, Un.jsx)("span", {
                            className: "librarian-item-footer-inner",
                            children: (0, Un.jsx)("span", {
                              className: "librarian-item-link",
                              children: (0, Un.jsx)("a", {
                                className: "librarian-result-item",
                                href: e.url,
                                children: e.displayUrl,
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                },
                n,
              )
            : (0, Un.jsx)(Un.Fragment, {});
        }),
      });
    };
    function Ea() {
      return (
        (Ea = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var t = arguments[n];
                for (var r in t)
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              }
              return e;
            }),
        Ea.apply(this, arguments)
      );
    }
    var Da;
    !(function (e) {
      ((e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE"));
    })(Da || (Da = {}));
    const _a = "popstate";
    function La(e, n) {
      if (!1 === e || null == e) throw new Error(n);
    }
    function Oa(e, n) {
      return { usr: e.state, key: e.key, idx: n };
    }
    function Ca(e, n, t, r) {
      return (
        void 0 === t && (t = null),
        Ea(
          {
            pathname: "string" == typeof e ? e : e.pathname,
            search: "",
            hash: "",
          },
          "string" == typeof n ? Pa(n) : n,
          {
            state: t,
            key: (n && n.key) || r || Math.random().toString(36).substr(2, 8),
          },
        )
      );
    }
    function Ra(e) {
      let { pathname: n = "/", search: t = "", hash: r = "" } = e;
      return (
        t && "?" !== t && (n += "?" === t.charAt(0) ? t : "?" + t),
        r && "#" !== r && (n += "#" === r.charAt(0) ? r : "#" + r),
        n
      );
    }
    function Pa(e) {
      let n = {};
      if (e) {
        let t = e.indexOf("#");
        t >= 0 && ((n.hash = e.substr(t)), (e = e.substr(0, t)));
        let r = e.indexOf("?");
        (r >= 0 && ((n.search = e.substr(r)), (e = e.substr(0, r))),
          e && (n.pathname = e));
      }
      return n;
    }
    var ja;
    (!(function (e) {
      ((e.data = "data"),
        (e.deferred = "deferred"),
        (e.redirect = "redirect"),
        (e.error = "error"));
    })(ja || (ja = {})),
      new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]));
    const Ta = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
    function Va(e, n) {
      void 0 === n && (n = "/");
      let t,
        {
          pathname: r,
          search: a = "",
          hash: i = "",
        } = "string" == typeof e ? Pa(e) : e;
      if (r)
        if (((l = r), Ta.test(l))) t = r;
        else {
          if (r.includes("//")) {
            let e = r;
            ((r = r.replace(/\/\/+/g, "/")),
              (function (e, n) {
                if (!e) {
                  "undefined" != typeof console && console.warn(n);
                  try {
                    throw new Error(n);
                  } catch (e) {}
                }
              })(
                !1,
                "Pathnames cannot have embedded double slashes - normalizing " +
                  e +
                  " -> " +
                  r,
              ));
          }
          t = r.startsWith("/") ? Fa(r.substring(1), "/") : Fa(r, n);
        }
      else t = n;
      var l;
      return { pathname: t, search: Ma(a), hash: Ba(i) };
    }
    function Fa(e, n) {
      let t = n.replace(/\/+$/, "").split("/");
      return (
        e.split("/").forEach((e) => {
          ".." === e ? t.length > 1 && t.pop() : "." !== e && t.push(e);
        }),
        t.length > 1 ? t.join("/") : "/"
      );
    }
    function za(e, n, t, r) {
      return (
        "Cannot include a '" +
        e +
        "' character in a manually specified `to." +
        n +
        "` field [" +
        JSON.stringify(r) +
        "].  Please separate it out to the `to." +
        t +
        '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
      );
    }
    const Ma = (e) => (e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : ""),
      Ba = (e) => (e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "");
    Error;
    const Ua = ["post", "put", "patch", "delete"],
      Ha = (new Set(Ua), ["get", ...Ua]);
    function Ga() {
      return (
        (Ga = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var t = arguments[n];
                for (var r in t)
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              }
              return e;
            }),
        Ga.apply(this, arguments)
      );
    }
    (new Set(Ha),
      new Set([301, 302, 303, 307, 308]),
      new Set([307, 308]),
      Symbol("deferred"));
    const qa = s.createContext(null),
      Wa = s.createContext(null),
      $a = s.createContext(null),
      Ka = s.createContext({ outlet: null, matches: [], isDataRoute: !1 });
    function Xa() {
      return null != s.useContext($a);
    }
    function Ja() {
      return (Xa() || La(!1), s.useContext($a).location);
    }
    function Qa(e) {
      s.useContext(Wa).static || s.useLayoutEffect(e);
    }
    function Za() {
      let { isDataRoute: e } = s.useContext(Ka);
      return e
        ? (function () {
            let { router: e } = (function () {
                let e = s.useContext(qa);
                return (e || La(!1), e);
              })(Ya.UseNavigateStable),
              n = (function () {
                let e = (function () {
                    let e = s.useContext(Ka);
                    return (e || La(!1), e);
                  })(),
                  n = e.matches[e.matches.length - 1];
                return (n.route.id || La(!1), n.route.id);
              })(ei.UseNavigateStable),
              t = s.useRef(!1);
            Qa(() => {
              t.current = !0;
            });
            let r = s.useCallback(
              function (r, a) {
                (void 0 === a && (a = {}),
                  t.current &&
                    ("number" == typeof r
                      ? e.navigate(r)
                      : e.navigate(r, Ga({ fromRouteId: n }, a))));
              },
              [e, n],
            );
            return r;
          })()
        : (function () {
            Xa() || La(!1);
            let e = s.useContext(qa),
              { basename: n, future: t, navigator: r } = s.useContext(Wa),
              { matches: a } = s.useContext(Ka),
              { pathname: i } = Ja(),
              l = JSON.stringify(
                (function (e, n) {
                  let t = (function (e) {
                    return e.filter(
                      (e, n) =>
                        0 === n || (e.route.path && e.route.path.length > 0),
                    );
                  })(e);
                  return n
                    ? t.map((e, n) =>
                        n === t.length - 1 ? e.pathname : e.pathnameBase,
                      )
                    : t.map((e) => e.pathnameBase);
                })(a, t.v7_relativeSplatPath),
              ),
              o = s.useRef(!1);
            Qa(() => {
              o.current = !0;
            });
            let u = s.useCallback(
              function (t, a) {
                if ((void 0 === a && (a = {}), !o.current)) return;
                if ("number" == typeof t) return void r.go(t);
                let s = (function (e, n, t, r) {
                  let a;
                  (void 0 === r && (r = !1),
                    "string" == typeof e
                      ? (a = Pa(e))
                      : ((a = Ea({}, e)),
                        La(
                          !a.pathname || !a.pathname.includes("?"),
                          za("?", "pathname", "search", a),
                        ),
                        La(
                          !a.pathname || !a.pathname.includes("#"),
                          za("#", "pathname", "hash", a),
                        ),
                        La(
                          !a.search || !a.search.includes("#"),
                          za("#", "search", "hash", a),
                        )));
                  let i,
                    l = "" === e || "" === a.pathname,
                    o = l ? "/" : a.pathname;
                  if (null == o) i = t;
                  else {
                    let e = n.length - 1;
                    if (!r && o.startsWith("..")) {
                      let n = o.split("/");
                      for (; ".." === n[0]; ) (n.shift(), (e -= 1));
                      a.pathname = n.join("/");
                    }
                    i = e >= 0 ? n[e] : "/";
                  }
                  let s = Va(a, i),
                    u = o && "/" !== o && o.endsWith("/"),
                    c = (l || "." === o) && t.endsWith("/");
                  return (
                    s.pathname.endsWith("/") ||
                      (!u && !c) ||
                      (s.pathname += "/"),
                    s
                  );
                })(t, JSON.parse(l), i, "path" === a.relative);
                (null == e &&
                  "/" !== n &&
                  (s.pathname =
                    "/" === s.pathname
                      ? n
                      : [n, s.pathname].join("/").replace(/\/\/+/g, "/")),
                  (a.replace ? r.replace : r.push)(s, a.state, a));
              },
              [n, r, l, i, e],
            );
            return u;
          })();
    }
    s.Component;
    var Ya = (function (e) {
        return (
          (e.UseBlocker = "useBlocker"),
          (e.UseRevalidator = "useRevalidator"),
          (e.UseNavigateStable = "useNavigate"),
          e
        );
      })(Ya || {}),
      ei = (function (e) {
        return (
          (e.UseBlocker = "useBlocker"),
          (e.UseLoaderData = "useLoaderData"),
          (e.UseActionData = "useActionData"),
          (e.UseRouteError = "useRouteError"),
          (e.UseNavigation = "useNavigation"),
          (e.UseRouteLoaderData = "useRouteLoaderData"),
          (e.UseMatches = "useMatches"),
          (e.UseRevalidator = "useRevalidator"),
          (e.UseNavigateStable = "useNavigate"),
          (e.UseRouteId = "useRouteId"),
          e
        );
      })(ei || {});
    function ni(e) {
      let {
        basename: n = "/",
        children: t = null,
        location: r,
        navigationType: a = Da.Pop,
        navigator: i,
        static: l = !1,
        future: o,
      } = e;
      Xa() && La(!1);
      let u = n.replace(/^\/*/, "/"),
        c = s.useMemo(
          () => ({
            basename: u,
            navigator: i,
            static: l,
            future: Ga({ v7_relativeSplatPath: !1 }, o),
          }),
          [u, o, i, l],
        );
      "string" == typeof r && (r = Pa(r));
      let {
          pathname: d = "/",
          search: f = "",
          hash: p = "",
          state: m = null,
          key: h = "default",
        } = r,
        b = s.useMemo(() => {
          let e = (function (e, n) {
            if ("/" === n) return e;
            if (!e.toLowerCase().startsWith(n.toLowerCase())) return null;
            let t = n.endsWith("/") ? n.length - 1 : n.length,
              r = e.charAt(t);
            return r && "/" !== r ? null : e.slice(t) || "/";
          })(d, u);
          return null == e
            ? null
            : {
                location: { pathname: e, search: f, hash: p, state: m, key: h },
                navigationType: a,
              };
        }, [u, d, f, p, m, h, a]);
      return null == b
        ? null
        : s.createElement(
            Wa.Provider,
            { value: c },
            s.createElement($a.Provider, { children: t, value: b }),
          );
    }
    (u.startTransition, new Promise(() => {}), s.Component);
    var ti = a(632),
      ri = {};
    ((ri.styleTagTransform = Tn()),
      (ri.setAttributes = Cn()),
      (ri.insert = Ln().bind(null, "head")),
      (ri.domAPI = Dn()),
      (ri.insertStyleElement = Pn()),
      Nn()(ti.A, ri),
      ti.A && ti.A.locals && ti.A.locals);
    var ai = Jr(Bn);
    const ii = function (e) {
      var n,
        t = e.searchTerm;
      return (0, Un.jsxs)("div", {
        className: "librarian-no-results-container",
        children: [
          (0, Un.jsxs)("p", {
            className: "librarian-no-results-text",
            children: [
              ai.noResultsHeading,
              " ",
              (0, Un.jsxs)("span", {
                className: "librarian-no-results-term",
                children: [
                  '"',
                  ((n = t),
                  n.replace(/[&<>"']/g, function (e) {
                    switch (e) {
                      case "&":
                        return "&amp;";
                      case "<":
                        return "&lt;";
                      case ">":
                        return "&gt;";
                      case '"':
                        return "&quot;";
                      case "'":
                        return "&apos;";
                    }
                  })),
                  '"',
                ],
              }),
            ],
          }),
          (0, Un.jsxs)("div", {
            className: "librarian-search-tips-container",
            children: [
              (0, Un.jsx)("p", {
                className: "librarian-no-result-tips",
                children: ai.searchTipsLabel,
              }),
              (0, Un.jsxs)("ul", {
                className: "librarian-no-results-list librarian-ul-list",
                children: [
                  (0, Un.jsx)("li", {
                    children: (0, Un.jsx)("span", { children: ai.tipSpell }),
                  }),
                  (0, Un.jsx)("li", {
                    children: (0, Un.jsx)("span", { children: ai.tipSynonym }),
                  }),
                  (0, Un.jsx)("li", {
                    children: (0, Un.jsx)("span", { children: ai.tipGeneral }),
                  }),
                ],
              }),
            ],
          }),
        ],
      });
    };
    var li = a(836),
      oi = {};
    function si(e) {
      return (
        (si =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
        si(e)
      );
    }
    function ui(e, n) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (n &&
          (r = r.filter(function (n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable;
          })),
          t.push.apply(t, r));
      }
      return t;
    }
    function ci(e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {};
        n % 2
          ? ui(Object(t), !0).forEach(function (n) {
              di(e, n, t[n]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ui(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n),
                );
              });
      }
      return e;
    }
    function di(e, n, t) {
      return (
        (n = (function (e) {
          var n = (function (e) {
            if ("object" != si(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var t = n.call(e, "string");
              if ("object" != si(t)) return t;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return String(e);
          })(e);
          return "symbol" == si(n) ? n : n + "";
        })(n)) in e
          ? Object.defineProperty(e, n, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[n] = t),
        e
      );
    }
    function fi(e, n) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, n) {
          var t =
            null == e
              ? null
              : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
          if (null != t) {
            var r,
              a,
              i,
              l,
              o = [],
              s = !0,
              u = !1;
            try {
              if (((i = (t = t.call(e)).next), 0 === n)) {
                if (Object(t) !== t) return;
                s = !1;
              } else
                for (
                  ;
                  !(s = (r = i.call(t)).done) &&
                  (o.push(r.value), o.length !== n);
                  s = !0
                );
            } catch (e) {
              ((u = !0), (a = e));
            } finally {
              try {
                if (
                  !s &&
                  null != t.return &&
                  ((l = t.return()), Object(l) !== l)
                )
                  return;
              } finally {
                if (u) throw a;
              }
            }
            return o;
          }
        })(e, n) ||
        (function (e, n) {
          if (e) {
            if ("string" == typeof e) return pi(e, n);
            var t = {}.toString.call(e).slice(8, -1);
            return (
              "Object" === t && e.constructor && (t = e.constructor.name),
              "Map" === t || "Set" === t
                ? Array.from(e)
                : "Arguments" === t ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                  ? pi(e, n)
                  : void 0
            );
          }
        })(e, n) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        })()
      );
    }
    function pi(e, n) {
      (null == n || n > e.length) && (n = e.length);
      for (var t = 0, r = Array(n); t < n; t++) r[t] = e[t];
      return r;
    }
    ((oi.styleTagTransform = Tn()),
      (oi.setAttributes = Cn()),
      (oi.insert = Ln().bind(null, "head")),
      (oi.domAPI = Dn()),
      (oi.insertStyleElement = Pn()),
      Nn()(li.A, oi),
      li.A && li.A.locals && li.A.locals);
    var mi = Jr(Bn);
    const hi = function (e) {
      var n = e.librarianSiteFilters,
        t = e.selectedFilters,
        r = e.appliedFilters,
        a = e.handleSelectedFilters,
        i = e.initialLoad,
        l = e.dataLength,
        o = e.expandFilters,
        u = e.selectAllFilters,
        c = e.deselectAllFilters,
        d = e.resetFilters,
        f = e.showSelectAll,
        p = e.setShowSelectAll,
        m = e.applyFilters,
        h = fi((0, s.useState)(!1), 2),
        b = h[0],
        v = h[1],
        g = fi((0, s.useState)(!0), 2),
        w = g[0],
        y = g[1],
        x = fi((0, s.useState)({}), 2),
        I = x[0],
        k = x[1];
      (0, s.useEffect)(
        function () {
          o && v(o);
        },
        [o],
      );
      var S = function (e) {
        k(function (n) {
          return ci(ci({}, n), {}, di({}, e, !n[e]));
        });
      };
      return (
        (0, s.useEffect)(function () {
          o && v(o);
        }, []),
        (0, Un.jsxs)("div", {
          children: [
            (0, Un.jsxs)("div", {
              className: "librarian-filter-title-container",
              onClick: function () {
                y(!w);
              },
              children: [
                (0, Un.jsx)("h1", {
                  className: "librarian-filter-title",
                  children: mi.filterTitle,
                }),
                (0, Un.jsx)("div", {
                  className: "librarian-arrow-icon ".concat(
                    w ? "" : "librarian-arrow-icon-rotated",
                  ),
                  children: (0, Un.jsx)(na, {}),
                }),
              ],
            }),
            (0, Un.jsx)("div", {
              className:
                "librarian-select-deselect librarian-select-deselect-top",
              children: (0, Un.jsxs)("label", {
                className: "librarian-checkbox-all",
                children: [
                  (0, Un.jsx)("input", {
                    type: "checkbox",
                    className: "librarian-checkbox",
                    checked: !f,
                    onChange: function () {
                      (p(!f), f ? u() : c());
                    },
                  }),
                  (0, Un.jsx)("span", {
                    className:
                      "librarian-checkbox-label librarian-select-deselect-label",
                    children: f ? mi.selectAllLabel : mi.deselectAllLabel,
                  }),
                ],
              }),
            }),
            (0, Un.jsxs)("div", {
              className: "librarian-site-filters-list".concat(
                w ? "" : " librarian-hide-filters",
              ),
              children: [
                n.slice(0, b ? n.length : 3).map(function (e, n) {
                  var o = I[n],
                    s =
                      e.asset_heading === mi.locationLabel &&
                      e.asset_values.length > 4,
                    u =
                      o || !s
                        ? e.asset_values
                        : (function (e) {
                            if (e.length <= 4) return e;
                            var n = r || t,
                              a = e.filter(function (e) {
                                return e.value.every(function (e) {
                                  return n.includes(e);
                                });
                              });
                            return 0 === a.length
                              ? e.slice(0, 4)
                              : a.length <= 4
                                ? a
                                : a.slice(0, 4);
                          })(e.asset_values),
                    c = s && !o;
                  return (0, Un.jsxs)(
                    "div",
                    {
                      className: "librarian-filter-headings",
                      children: [
                        (0, Un.jsx)("p", { children: e.asset_heading }),
                        u.map(function (e) {
                          return (0, Un.jsxs)(
                            "div",
                            {
                              className: "librarian-checkbox-item",
                              children: [
                                (0, Un.jsx)("input", {
                                  id: e.value.join(","),
                                  className: "librarian-checkbox",
                                  type: "checkbox",
                                  readOnly: !0,
                                  onClick: function () {
                                    return (function (e) {
                                      a(e);
                                    })(e.value);
                                  },
                                  checked: e.value.every(function (e) {
                                    return t.includes(e);
                                  }),
                                  disabled: i && l <= 0,
                                }),
                                (0, Un.jsx)("label", {
                                  htmlFor: e.value.join(","),
                                  className: "librarian-checkbox-label".concat(
                                    i && l <= 0
                                      ? " librarian-checkbox-label-disabled"
                                      : "",
                                  ),
                                  children: e.label,
                                }),
                              ],
                            },
                            e.value.join(","),
                          );
                        }),
                        c &&
                          (0, Un.jsxs)("div", {
                            className: "librarian-checkbox-item",
                            children: [
                              (0, Un.jsx)("span", {
                                className: "librarian-checkbox-span",
                              }),
                              (0, Un.jsx)("button", {
                                className: "librarian-more-less-btn",
                                onClick: function () {
                                  return S(n);
                                },
                                children: mi.moreLabel,
                              }),
                            ],
                          }),
                        o &&
                          s &&
                          (0, Un.jsxs)("div", {
                            className: "librarian-checkbox-item",
                            children: [
                              (0, Un.jsx)("span", {
                                className: "librarian-checkbox-span",
                              }),
                              (0, Un.jsx)("button", {
                                className: "librarian-more-less-btn",
                                onClick: function () {
                                  return S(n);
                                },
                                children: mi.showLessLabel,
                              }),
                            ],
                          }),
                      ],
                    },
                    n,
                  );
                }),
                n.length > 2
                  ? (0, Un.jsx)("button", {
                      className: "librarian-show-all-btn",
                      onClick: function () {
                        v(!b);
                      },
                      children: b ? mi.showLessLabel : mi.showMoreLabel,
                    })
                  : (0, Un.jsx)(Un.Fragment, {}),
              ],
            }),
            (0, Un.jsxs)("div", {
              className: "librarian-filters-reset-apply-container",
              children: [
                (0, Un.jsx)("button", {
                  onClick: function () {
                    d();
                  },
                  className: "librarian-reset-btn",
                  children: mi.resetLabel,
                }),
                (0, Un.jsx)("button", {
                  onClick: function () {
                    (k(function (e) {
                      var t = ci({}, e);
                      return (
                        n.forEach(function (e, n) {
                          e.asset_heading === mi.locationLabel && (t[n] = !1);
                        }),
                        t
                      );
                    }),
                      m());
                  },
                  className: "librarian-apply-btn",
                  children: mi.applyLabel,
                }),
              ],
            }),
          ],
        })
      );
    };
    function bi(e) {
      return (
        (bi =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
        bi(e)
      );
    }
    function vi(e, n) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (n &&
          (r = r.filter(function (n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable;
          })),
          t.push.apply(t, r));
      }
      return t;
    }
    function gi(e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {};
        n % 2
          ? vi(Object(t), !0).forEach(function (n) {
              wi(e, n, t[n]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : vi(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n),
                );
              });
      }
      return e;
    }
    function wi(e, n, t) {
      return (
        (n = (function (e) {
          var n = (function (e) {
            if ("object" != bi(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var t = n.call(e, "string");
              if ("object" != bi(t)) return t;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return String(e);
          })(e);
          return "symbol" == bi(n) ? n : n + "";
        })(n)) in e
          ? Object.defineProperty(e, n, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[n] = t),
        e
      );
    }
    function yi(e, n) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, n) {
          var t =
            null == e
              ? null
              : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
          if (null != t) {
            var r,
              a,
              i,
              l,
              o = [],
              s = !0,
              u = !1;
            try {
              if (((i = (t = t.call(e)).next), 0 === n)) {
                if (Object(t) !== t) return;
                s = !1;
              } else
                for (
                  ;
                  !(s = (r = i.call(t)).done) &&
                  (o.push(r.value), o.length !== n);
                  s = !0
                );
            } catch (e) {
              ((u = !0), (a = e));
            } finally {
              try {
                if (
                  !s &&
                  null != t.return &&
                  ((l = t.return()), Object(l) !== l)
                )
                  return;
              } finally {
                if (u) throw a;
              }
            }
            return o;
          }
        })(e, n) ||
        (function (e, n) {
          if (e) {
            if ("string" == typeof e) return xi(e, n);
            var t = {}.toString.call(e).slice(8, -1);
            return (
              "Object" === t && e.constructor && (t = e.constructor.name),
              "Map" === t || "Set" === t
                ? Array.from(e)
                : "Arguments" === t ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                  ? xi(e, n)
                  : void 0
            );
          }
        })(e, n) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        })()
      );
    }
    function xi(e, n) {
      (null == n || n > e.length) && (n = e.length);
      for (var t = 0, r = Array(n); t < n; t++) r[t] = e[t];
      return r;
    }
    var Ii = Jr(Bn);
    const ki = function (e) {
      var n = e.showFilters,
        t = e.librarianSiteFilters,
        r = e.selectedFilters,
        a = e.appliedFilters,
        i = e.handleSelectedFilters,
        l = (e.closeMobileFilters, e.resetFilters),
        o = e.initialLoad,
        u = e.dataLength,
        c = e.selectAllFilters,
        d = e.deselectAllFilters,
        f = e.showSelectAll,
        p = e.setShowSelectAll,
        m = e.applyFilters,
        h = yi((0, s.useState)(!1), 2),
        b = h[0],
        v = h[1],
        g = yi((0, s.useState)(!0), 2),
        w = (g[0], g[1], yi((0, s.useState)({}), 2)),
        y = w[0],
        x = w[1],
        I = function (e) {
          x(function (n) {
            return gi(gi({}, n), {}, wi({}, e, !n[e]));
          });
        };
      return (0, Un.jsxs)("div", {
        className: "librarian-filters-container ".concat(
          n ? "" : "librarian-filters-container-hide",
        ),
        children: [
          (0, Un.jsx)("div", {
            className: "librarian-filters-container-items",
            children: (0, Un.jsxs)("div", {
              className: "librarian-mobile-filters-content",
              children: [
                (0, Un.jsx)("div", {
                  className: "librarian-select-deselect",
                  children: (0, Un.jsxs)("label", {
                    className: "librarian-checkbox-all",
                    children: [
                      (0, Un.jsx)("input", {
                        type: "checkbox",
                        className: "librarian-checkbox",
                        checked: !f,
                        onChange: function () {
                          (p(!f), f ? c() : d());
                        },
                      }),
                      (0, Un.jsx)("span", {
                        className:
                          "librarian-checkbox-label librarian-select-deselect-label",
                        children: f ? Ii.selectAllLabel : Ii.deselectAllLabel,
                      }),
                    ],
                  }),
                }),
                (0, Un.jsx)("div", {
                  className: "librarian-items-container",
                  children: t.slice(0, b ? t.length : 4).map(function (e, n) {
                    var t = y[n],
                      l =
                        e.asset_heading === Ii.locationLabel &&
                        e.asset_values.length > 4,
                      s =
                        t || !l
                          ? e.asset_values
                          : (function (e) {
                              if (e.length <= 4) return e;
                              var n = a || r,
                                t = e.filter(function (e) {
                                  return e.value.every(function (e) {
                                    return n.includes(e);
                                  });
                                });
                              return 0 === t.length
                                ? e.slice(0, 4)
                                : t.length <= 4
                                  ? t
                                  : t.slice(0, 4);
                            })(e.asset_values),
                      c = l && !t;
                    return (0, Un.jsxs)(
                      "div",
                      {
                        className: "librarian-filter-headings",
                        children: [
                          (0, Un.jsx)("p", { children: e.asset_heading }),
                          s.map(function (e) {
                            return (0, Un.jsxs)(
                              "div",
                              {
                                className: "librarian-checkbox-item",
                                children: [
                                  (0, Un.jsx)("input", {
                                    id: e.value.join(","),
                                    className: "librarian-checkbox",
                                    type: "checkbox",
                                    readOnly: !0,
                                    onClick: function () {
                                      return (function (e) {
                                        i(e);
                                      })(e.value);
                                    },
                                    checked: e.value.every(function (e) {
                                      return r.includes(e);
                                    }),
                                    disabled: o && u <= 0,
                                  }),
                                  (0, Un.jsx)("label", {
                                    htmlFor: e.value.join(","),
                                    className:
                                      "librarian-checkbox-label".concat(
                                        o && u <= 0
                                          ? " librarian-checkbox-label-disabled"
                                          : "",
                                      ),
                                    children: e.label,
                                  }),
                                ],
                              },
                              e.value.join(","),
                            );
                          }),
                          c &&
                            (0, Un.jsxs)("div", {
                              className: "librarian-checkbox-item",
                              children: [
                                (0, Un.jsx)("span", {
                                  className: "librarian-checkbox-span",
                                }),
                                (0, Un.jsx)("button", {
                                  className: "librarian-more-less-btn",
                                  onClick: function () {
                                    return I(n);
                                  },
                                  children: Ii.moreLabel,
                                }),
                              ],
                            }),
                          t &&
                            l &&
                            (0, Un.jsxs)("div", {
                              className: "librarian-checkbox-item",
                              children: [
                                (0, Un.jsx)("span", {
                                  className: "librarian-checkbox-span",
                                }),
                                (0, Un.jsx)("button", {
                                  className: "librarian-more-less-btn",
                                  onClick: function () {
                                    return I(n);
                                  },
                                  children: Ii.showLessLabel,
                                }),
                              ],
                            }),
                        ],
                      },
                      n,
                    );
                  }),
                }),
                t.length > 2
                  ? (0, Un.jsx)("button", {
                      className: "librarian-show-all-btn",
                      onClick: function () {
                        v(!b);
                      },
                      children: b ? Ii.showLessLabel : Ii.showMoreLabel,
                    })
                  : (0, Un.jsx)(Un.Fragment, {}),
              ],
            }),
          }),
          (0, Un.jsxs)("div", {
            className: "librarian-filters-reset-apply-container",
            children: [
              (0, Un.jsx)("button", {
                onClick: function () {
                  l();
                },
                className: "librarian-reset-btn",
                children: Ii.resetLabel,
              }),
              (0, Un.jsx)("button", {
                onClick: function () {
                  (x(function (e) {
                    var n = gi({}, e);
                    return (
                      t.forEach(function (e, t) {
                        e.asset_heading === Ii.locationLabel && (n[t] = !1);
                      }),
                      n
                    );
                  }),
                    m());
                },
                className: "librarian-apply-btn",
                children: Ii.applyLabel,
              }),
            ],
          }),
        ],
      });
    };
    var Si = a(201),
      Ai = {};
    ((Ai.styleTagTransform = Tn()),
      (Ai.setAttributes = Cn()),
      (Ai.insert = Ln().bind(null, "head")),
      (Ai.domAPI = Dn()),
      (Ai.insertStyleElement = Pn()),
      Nn()(Si.A, Ai),
      Si.A && Si.A.locals && Si.A.locals);
    var Ni = Jr(Bn);
    const Ei = function () {
        return (0, Un.jsxs)("div", {
          className: "librarian-notfound-container",
          children: [
            (0, Un.jsx)("h2", {
              className: "librarian-notfound-status",
              children: Ni.notFoundStatus,
            }),
            (0, Un.jsxs)("div", {
              children: [
                (0, Un.jsx)("h1", {
                  className: "librarian-notfound-title",
                  children: Ni.notFoundTitle,
                }),
                (0, Un.jsx)("p", {
                  className: "librarian-notfound-description",
                  children: Ni.notFoundDescription,
                }),
              ],
            }),
            (0, Un.jsx)("div", {
              children: (0, Un.jsx)("button", {
                onClick: function () {
                  return (window.location.href = "/");
                },
                className: "librarian-notfound-button",
                children: Ni.notFoundButton,
              }),
            }),
          ],
        });
      },
      Di = JSON.parse(
        '[{"asset_heading":"Ort","asset_values":[{"label":"NVIDIA Australien","value":["wwwnvidiacomau"]},{"label":"NVIDIA Österreich","value":["wwwnvidiacomat"]},{"label":"NVIDIA Belgien","value":["wwwnvidiacombe"]},{"label":"NVIDIA Tschechische Republik","value":["wwwnvidiacomcz"]},{"label":"NVIDIA Dänemark","value":["wwwnvidiacomdk"]},{"label":"NVIDIA Europa","value":["wwwnvidiacomeu"]},{"label":"NVIDIA Finnland","value":["wwwnvidiacomfi"]},{"label":"NVIDIA Frankreich","value":["wwwnvidiacomfr"]},{"label":"NVIDIA Deutschland","value":["wwwnvidiacomde"]},{"label":"NVIDIA Großbritannien","value":["wwwnvidiacomgb"]},{"label":"NVIDIA Indien","value":["wwwnvidiacomin"]},{"label":"NVIDIA Italien","value":["wwwnvidiacomit"]},{"label":"NVIDIA Japan","value":["wwwnvidiacomjp"]},{"label":"NVIDIA Korea","value":["wwwnvidiacomkr"]},{"label":"NVIDIA Naher Osten","value":["wwwnvidiacomme"]},{"label":"NVIDIA Niederlande","value":["wwwnvidiacomnl"]},{"label":"NVIDIA Norwegen","value":["wwwnvidiacomno"]},{"label":"NVIDIA Polen","value":["wwwnvidiacompl"]},{"label":"NVIDIA Rumänien","value":["wwwnvidiacomro"]},{"label":"NVIDIA Singapur","value":["wwwnvidiacomsg"]},{"label":"NVIDIA Spanien","value":["wwwnvidiacomes"]},{"label":"NVIDIA Schweden","value":["wwwnvidiacomse"]},{"label":"NVIDIA Taiwan","value":["wwwnvidiacomtw"]},{"label":"NVIDIA Türkei","value":["wwwnvidiacomtr"]},{"label":"NVIDIA Vereinigte Staaten","value":["wwwnvidiacom"]}]},{"asset_heading":"Marktplatz","asset_values":[{"label":"Kaufen","value":["marketplace"]}]},{"asset_heading":"Entwicklerressourcen","asset_values":[{"label":"Modelle und Blueprints","value":["build_nvidia"]},{"label":"NGC-Katalog","value":["ngccontainers","ngcmodels","ngcresources"]},{"label":"NIM-APIs","value":["buildnvidia"]},{"label":"NVIDIA Entwickler","value":["developernvidiacom"]},{"label":"Technische Dokumentation","value":["docshub","omniverse","docsapi","runai"]}]},{"asset_heading":"Veranstaltungen","asset_values":[{"label":"GTC KI-Konferenz","value":["wwwnvidiacomgtc"]}]},{"asset_heading":"Lernen und Medien","asset_values":[{"label":"Videos auf Abruf","value":["nvod"]},{"label":"Webinare","value":["webinars"]},{"label":"Technische Schulungen","value":["dli"]}]},{"asset_heading":"Artikel","asset_values":[{"label":"Unternehmensblog","value":["nvblogs"]},{"label":"Entwicklerblog","value":["techblogs"]},{"label":"Pressezentrum","value":["nvidianews"]}]}]',
      ),
      _i = JSON.parse(
        '[{"asset_heading":"Localisation","asset_values":[{"label":"NVIDIA Australie","value":["wwwnvidiacomau"]},{"label":"NVIDIA Autriche","value":["wwwnvidiacomat"]},{"label":"NVIDIA Belgique","value":["wwwnvidiacombe"]},{"label":"NVIDIA République tchèque","value":["wwwnvidiacomcz"]},{"label":"NVIDIA Danemark","value":["wwwnvidiacomdk"]},{"label":"NVIDIA Europe","value":["wwwnvidiacomeu"]},{"label":"NVIDIA Finlande","value":["wwwnvidiacomfi"]},{"label":"NVIDIA France","value":["wwwnvidiacomfr"]},{"label":"NVIDIA Allemagne","value":["wwwnvidiacomde"]},{"label":"NVIDIA Grande-Bretagne","value":["wwwnvidiacomgb"]},{"label":"NVIDIA Inde","value":["wwwnvidiacomin"]},{"label":"NVIDIA Italie","value":["wwwnvidiacomit"]},{"label":"NVIDIA Japon","value":["wwwnvidiacomjp"]},{"label":"NVIDIA Corée","value":["wwwnvidiacomkr"]},{"label":"NVIDIA Moyen-Orient","value":["wwwnvidiacomme"]},{"label":"NVIDIA Pays-Bas","value":["wwwnvidiacomnl"]},{"label":"NVIDIA Norvège","value":["wwwnvidiacomno"]},{"label":"NVIDIA Pologne","value":["wwwnvidiacompl"]},{"label":"NVIDIA Roumanie","value":["wwwnvidiacomro"]},{"label":"NVIDIA Singapour","value":["wwwnvidiacomsg"]},{"label":"NVIDIA Espagne","value":["wwwnvidiacomes"]},{"label":"NVIDIA Suède","value":["wwwnvidiacomse"]},{"label":"NVIDIA Taïwan","value":["wwwnvidiacomtw"]},{"label":"NVIDIA Turquie","value":["wwwnvidiacomtr"]},{"label":"NVIDIA États-Unis","value":["wwwnvidiacom"]}]},{"asset_heading":"Marketplace","asset_values":[{"label":"Acheter","value":["marketplace"]}]},{"asset_heading":"Ressources pour développeurs","asset_values":[{"label":"Modèles et plans","value":["build_nvidia"]},{"label":"Catalogue NGC","value":["ngccontainers","ngcmodels","ngcresources"]},{"label":"API NIM","value":["buildnvidia"]},{"label":"NVIDIA Développeur","value":["developernvidiacom"]},{"label":"Documentation technique","value":["docshub","omniverse","docsapi","runai"]}]},{"asset_heading":"Événements","asset_values":[{"label":"Conférence GTC sur l\'IA","value":["wwwnvidiacomgtc"]}]},{"asset_heading":"Formation et médias","asset_values":[{"label":"Vidéos à la demande","value":["nvod"]},{"label":"Webinaires","value":["webinars"]},{"label":"Formation technique","value":["dli"]}]},{"asset_heading":"Articles","asset_values":[{"label":"Blog d\'entreprise","value":["nvblogs"]},{"label":"Blog développeurs","value":["techblogs"]},{"label":"Salle de presse","value":["nvidianews"]}]}]',
      ),
      Li = JSON.parse(
        '[{"asset_heading":"Ubicación","asset_values":[{"label":"NVIDIA Australia","value":["wwwnvidiacomau"]},{"label":"NVIDIA Austria","value":["wwwnvidiacomat"]},{"label":"NVIDIA Bélgica","value":["wwwnvidiacombe"]},{"label":"NVIDIA República Checa","value":["wwwnvidiacomcz"]},{"label":"NVIDIA Dinamarca","value":["wwwnvidiacomdk"]},{"label":"NVIDIA Europa","value":["wwwnvidiacomeu"]},{"label":"NVIDIA Finlandia","value":["wwwnvidiacomfi"]},{"label":"NVIDIA Francia","value":["wwwnvidiacomfr"]},{"label":"NVIDIA Alemania","value":["wwwnvidiacomde"]},{"label":"NVIDIA Gran Bretaña","value":["wwwnvidiacomgb"]},{"label":"NVIDIA India","value":["wwwnvidiacomin"]},{"label":"NVIDIA Italia","value":["wwwnvidiacomit"]},{"label":"NVIDIA Japón","value":["wwwnvidiacomjp"]},{"label":"NVIDIA Corea","value":["wwwnvidiacomkr"]},{"label":"NVIDIA Oriente Medio","value":["wwwnvidiacomme"]},{"label":"NVIDIA Países Bajos","value":["wwwnvidiacomnl"]},{"label":"NVIDIA Noruega","value":["wwwnvidiacomno"]},{"label":"NVIDIA Polonia","value":["wwwnvidiacompl"]},{"label":"NVIDIA Rumanía","value":["wwwnvidiacomro"]},{"label":"NVIDIA Singapur","value":["wwwnvidiacomsg"]},{"label":"NVIDIA España","value":["wwwnvidiacomes"]},{"label":"NVIDIA Suecia","value":["wwwnvidiacomse"]},{"label":"NVIDIA Taiwán","value":["wwwnvidiacomtw"]},{"label":"NVIDIA Turquía","value":["wwwnvidiacomtr"]},{"label":"NVIDIA Estados Unidos","value":["wwwnvidiacom"]}]},{"asset_heading":"Mercado","asset_values":[{"label":"Comprar","value":["marketplace"]}]},{"asset_heading":"Recursos para desarrolladores","asset_values":[{"label":"Modelos y planos","value":["build_nvidia"]},{"label":"Catálogo NGC","value":["ngccontainers","ngcmodels","ngcresources"]},{"label":"API de NIM","value":["buildnvidia"]},{"label":"NVIDIA desarrollador","value":["developernvidiacom"]},{"label":"Documentación técnica","value":["docshub","omniverse","docsapi","runai"]}]},{"asset_heading":"Eventos","asset_values":[{"label":"Conferencia GTC sobre IA","value":["wwwnvidiacomgtc"]}]},{"asset_heading":"Aprendizaje y medios","asset_values":[{"label":"Vídeos a la carta","value":["nvod"]},{"label":"Seminarios web","value":["webinars"]},{"label":"Formación técnica","value":["dli"]}]},{"asset_heading":"Artículos","asset_values":[{"label":"Blog corporativo","value":["nvblogs"]},{"label":"Blog de desarrolladores","value":["techblogs"]},{"label":"Sala de prensa","value":["nvidianews"]}]}]',
      ),
      Oi = JSON.parse(
        '[{"asset_heading":"Località","asset_values":[{"label":"NVIDIA Australia","value":["wwwnvidiacomau"]},{"label":"NVIDIA Austria","value":["wwwnvidiacomat"]},{"label":"NVIDIA Belgio","value":["wwwnvidiacombe"]},{"label":"NVIDIA Repubblica Ceca","value":["wwwnvidiacomcz"]},{"label":"NVIDIA Danimarca","value":["wwwnvidiacomdk"]},{"label":"NVIDIA Europa","value":["wwwnvidiacomeu"]},{"label":"NVIDIA Finlandia","value":["wwwnvidiacomfi"]},{"label":"NVIDIA Francia","value":["wwwnvidiacomfr"]},{"label":"NVIDIA Germania","value":["wwwnvidiacomde"]},{"label":"NVIDIA Regno Unito","value":["wwwnvidiacomgb"]},{"label":"NVIDIA India","value":["wwwnvidiacomin"]},{"label":"NVIDIA Italia","value":["wwwnvidiacomit"]},{"label":"NVIDIA Giappone","value":["wwwnvidiacomjp"]},{"label":"NVIDIA Corea","value":["wwwnvidiacomkr"]},{"label":"NVIDIA Medio Oriente","value":["wwwnvidiacomme"]},{"label":"NVIDIA Paesi Bassi","value":["wwwnvidiacomnl"]},{"label":"NVIDIA Norvegia","value":["wwwnvidiacomno"]},{"label":"NVIDIA Polonia","value":["wwwnvidiacompl"]},{"label":"NVIDIA Romania","value":["wwwnvidiacomro"]},{"label":"NVIDIA Singapore","value":["wwwnvidiacomsg"]},{"label":"NVIDIA Spagna","value":["wwwnvidiacomes"]},{"label":"NVIDIA Svezia","value":["wwwnvidiacomse"]},{"label":"NVIDIA Taiwan","value":["wwwnvidiacomtw"]},{"label":"NVIDIA Turchia","value":["wwwnvidiacomtr"]},{"label":"NVIDIA Stati Uniti","value":["wwwnvidiacom"]}]},{"asset_heading":"Piattaforma di commercio","asset_values":[{"label":"Acquista","value":["marketplace"]}]},{"asset_heading":"Risorse per sviluppatori","asset_values":[{"label":"Modelli e progetti","value":["build_nvidia"]},{"label":"Catalogo NGC","value":["ngccontainers","ngcmodels","ngcresources"]},{"label":"API NIM","value":["buildnvidia"]},{"label":"NVIDIA Sviluppatore","value":["developernvidiacom"]},{"label":"Documentazione tecnica","value":["docshub","omniverse","docsapi","runai"]}]},{"asset_heading":"Eventi","asset_values":[{"label":"Conferenza GTC sull\'IA","value":["wwwnvidiacomgtc"]}]},{"asset_heading":"Formazione & Media","asset_values":[{"label":"Video su richiesta","value":["nvod"]},{"label":"Webinar","value":["webinars"]},{"label":"Formazione tecnica","value":["dli"]}]},{"asset_heading":"Articoli","asset_values":[{"label":"Blog aziendale","value":["nvblogs"]},{"label":"Blog per sviluppatori","value":["techblogs"]},{"label":"Sala stampa","value":["nvidianews"]}]}]',
      ),
      Ci = JSON.parse(
        '[{"asset_heading":"Poloha","asset_values":[{"label":"NVIDIA Austrálie","value":["wwwnvidiacomau"]},{"label":"NVIDIA Rakousko","value":["wwwnvidiacomat"]},{"label":"NVIDIA Belgie","value":["wwwnvidiacombe"]},{"label":"NVIDIA Česká republika","value":["wwwnvidiacomcz"]},{"label":"NVIDIA Dánsko","value":["wwwnvidiacomdk"]},{"label":"NVIDIA Evropa","value":["wwwnvidiacomeu"]},{"label":"NVIDIA Finsko","value":["wwwnvidiacomfi"]},{"label":"NVIDIA Francie","value":["wwwnvidiacomfr"]},{"label":"NVIDIA Německo","value":["wwwnvidiacomde"]},{"label":"NVIDIA Velká Británie","value":["wwwnvidiacomgb"]},{"label":"NVIDIA Indie","value":["wwwnvidiacomin"]},{"label":"NVIDIA Itálie","value":["wwwnvidiacomit"]},{"label":"NVIDIA Japonsko","value":["wwwnvidiacomjp"]},{"label":"NVIDIA Korea","value":["wwwnvidiacomkr"]},{"label":"NVIDIA Střední východ","value":["wwwnvidiacomme"]},{"label":"NVIDIA Nizozemsko","value":["wwwnvidiacomnl"]},{"label":"NVIDIA Norsko","value":["wwwnvidiacomno"]},{"label":"NVIDIA Polsko","value":["wwwnvidiacompl"]},{"label":"NVIDIA Rumunsko","value":["wwwnvidiacomro"]},{"label":"NVIDIA Singapur","value":["wwwnvidiacomsg"]},{"label":"NVIDIA Španělsko","value":["wwwnvidiacomes"]},{"label":"NVIDIA Švédsko","value":["wwwnvidiacomse"]},{"label":"NVIDIA Tchaj-wan","value":["wwwnvidiacomtw"]},{"label":"NVIDIA Turecko","value":["wwwnvidiacomtr"]},{"label":"NVIDIA Spojené státy americké","value":["wwwnvidiacom"]}]},{"asset_heading":"Marketplace","asset_values":[{"label":"Nakupovat","value":["marketplace"]}]},{"asset_heading":"Prostředky pro vývojáře","asset_values":[{"label":"Modely a blueprinty","value":["build_nvidia"]},{"label":"Katalog NGC","value":["ngccontainers","ngcmodels","ngcresources"]},{"label":"API NIM","value":["buildnvidia"]},{"label":"Vývojář NVIDIA","value":["developernvidiacom"]},{"label":"Technická dokumentace","value":["docshub","omniverse","docsapi","runai"]}]},{"asset_heading":"Události","asset_values":[{"label":"Konference o umělé inteligenci GTC","value":["wwwnvidiacomgtc"]}]},{"asset_heading":"Vzdělávání a média","asset_values":[{"label":"Videa na vyžádání","value":["nvod"]},{"label":"Webináře","value":["webinars"]},{"label":"Technické školení","value":["dli"]}]},{"asset_heading":"Články","asset_values":[{"label":"Firemní blog","value":["nvblogs"]},{"label":"Blog pro vývojáře","value":["techblogs"]},{"label":"Tiskové centrum","value":["nvidianews"]}]}]',
      ),
      Ri = JSON.parse(
        '[{"asset_heading":"Placering","asset_values":[{"label":"NVIDIA Australien","value":["wwwnvidiacomau"]},{"label":"NVIDIA Østrig","value":["wwwnvidiacomat"]},{"label":"NVIDIA Belgien","value":["wwwnvidiacombe"]},{"label":"NVIDIA Tjekkiet","value":["wwwnvidiacomcz"]},{"label":"NVIDIA Danmark","value":["wwwnvidiacomdk"]},{"label":"NVIDIA Europa","value":["wwwnvidiacomeu"]},{"label":"NVIDIA Finland","value":["wwwnvidiacomfi"]},{"label":"NVIDIA Frankrig","value":["wwwnvidiacomfr"]},{"label":"NVIDIA Tyskland","value":["wwwnvidiacomde"]},{"label":"NVIDIA Storbritannien","value":["wwwnvidiacomgb"]},{"label":"NVIDIA Indien","value":["wwwnvidiacomin"]},{"label":"NVIDIA Italien","value":["wwwnvidiacomit"]},{"label":"NVIDIA Japan","value":["wwwnvidiacomjp"]},{"label":"NVIDIA Korea","value":["wwwnvidiacomkr"]},{"label":"NVIDIA Mellemøsten","value":["wwwnvidiacomme"]},{"label":"NVIDIA Holland","value":["wwwnvidiacomnl"]},{"label":"NVIDIA Norge","value":["wwwnvidiacomno"]},{"label":"NVIDIA Polen","value":["wwwnvidiacompl"]},{"label":"NVIDIA Rumænien","value":["wwwnvidiacomro"]},{"label":"NVIDIA Singapore","value":["wwwnvidiacomsg"]},{"label":"NVIDIA Spanien","value":["wwwnvidiacomes"]},{"label":"NVIDIA Sverige","value":["wwwnvidiacomse"]},{"label":"NVIDIA Taiwan","value":["wwwnvidiacomtw"]},{"label":"NVIDIA Tyrkiet","value":["wwwnvidiacomtr"]},{"label":"NVIDIA USA","value":["wwwnvidiacom"]}]},{"asset_heading":"Markedsplads","asset_values":[{"label":"Køb","value":["marketplace"]}]},{"asset_heading":"Ressourcer til udviklere","asset_values":[{"label":"Modeller og tegninger","value":["build_nvidia"]},{"label":"NGC-katalog","value":["ngccontainers","ngcmodels","ngcresources"]},{"label":"NIM API\'er","value":["buildnvidia"]},{"label":"NVIDIA Developer","value":["developernvidiacom"]},{"label":"Teknisk dokumentation","value":["docshub","omniverse","docsapi","runai"]}]},{"asset_heading":"Begivenheder","asset_values":[{"label":"GTC AI-konference","value":["wwwnvidiacomgtc"]}]},{"asset_heading":"Læring og medier","asset_values":[{"label":"Videoer efter behov","value":["nvod"]},{"label":"Webinarer","value":["webinars"]},{"label":"Teknisk træning","value":["dli"]}]},{"asset_heading":"Artikler","asset_values":[{"label":"Virksomhedsblog","value":["nvblogs"]},{"label":"Udviklerblog","value":["techblogs"]},{"label":"Nyhedsrum","value":["nvidianews"]}]}]',
      ),
      Pi = JSON.parse(
        '[{"asset_heading":"Sijainti","asset_values":[{"label":"NVIDIA Australia","value":["wwwnvidiacomau"]},{"label":"NVIDIA Itävalta","value":["wwwnvidiacomat"]},{"label":"NVIDIA Belgia","value":["wwwnvidiacombe"]},{"label":"NVIDIA Tšekki","value":["wwwnvidiacomcz"]},{"label":"NVIDIA Tanska","value":["wwwnvidiacomdk"]},{"label":"NVIDIA Eurooppa","value":["wwwnvidiacomeu"]},{"label":"NVIDIA Suomi","value":["wwwnvidiacomfi"]},{"label":"NVIDIA Ranska","value":["wwwnvidiacomfr"]},{"label":"NVIDIA Saksa","value":["wwwnvidiacomde"]},{"label":"NVIDIA Iso-Britannia","value":["wwwnvidiacomgb"]},{"label":"NVIDIA Intia","value":["wwwnvidiacomin"]},{"label":"NVIDIA Italia","value":["wwwnvidiacomit"]},{"label":"NVIDIA Japani","value":["wwwnvidiacomjp"]},{"label":"NVIDIA Korea","value":["wwwnvidiacomkr"]},{"label":"NVIDIA Lähi-itä","value":["wwwnvidiacomme"]},{"label":"NVIDIA Alankomaat","value":["wwwnvidiacomnl"]},{"label":"NVIDIA Norja","value":["wwwnvidiacomno"]},{"label":"NVIDIA Puola","value":["wwwnvidiacompl"]},{"label":"NVIDIA Romania","value":["wwwnvidiacomro"]},{"label":"NVIDIA Singapore","value":["wwwnvidiacomsg"]},{"label":"NVIDIA Espanja","value":["wwwnvidiacomes"]},{"label":"NVIDIA Ruotsi","value":["wwwnvidiacomse"]},{"label":"NVIDIA Taiwan","value":["wwwnvidiacomtw"]},{"label":"NVIDIA Turkki","value":["wwwnvidiacomtr"]},{"label":"NVIDIA Yhdysvallat","value":["wwwnvidiacom"]}]},{"asset_heading":"Markkinapaikka","asset_values":[{"label":"Osta","value":["marketplace"]}]},{"asset_heading":"Kehittäjien resurssit","asset_values":[{"label":"Mallit ja Blueprints-suunnitelmat","value":["build_nvidia"]},{"label":"NGC-luettelo","value":["ngccontainers","ngcmodels","ngcresources"]},{"label":"NIM-sovellusrajapinnat","value":["buildnvidia"]},{"label":"NVIDIA Developer","value":["developernvidiacom"]},{"label":"Tekninen dokumentaatio","value":["docshub","omniverse","docsapi","runai"]}]},{"asset_heading":"Tapahtumat","asset_values":[{"label":"GTC-tekoälykonferenssi","value":["wwwnvidiacomgtc"]}]},{"asset_heading":"Oppiminen ja media","asset_values":[{"label":"Tilausvideot","value":["nvod"]},{"label":"Webinaarit","value":["webinars"]},{"label":"Tekninen koulutus","value":["dli"]}]},{"asset_heading":"Artikkelit","asset_values":[{"label":"Yritysblogi","value":["nvblogs"]},{"label":"Kehittäjäblogi","value":["techblogs"]},{"label":"Uutiset","value":["nvidianews"]}]}]',
      ),
      ji = JSON.parse(
        '[{"asset_heading":"Locatie","asset_values":[{"label":"NVIDIA Australië","value":["wwwnvidiacomau"]},{"label":"NVIDIA Oostenrijk","value":["wwwnvidiacomat"]},{"label":"NVIDIA België","value":["wwwnvidiacombe"]},{"label":"NVIDIA Tsjechië","value":["wwwnvidiacomcz"]},{"label":"NVIDIA Denemarken","value":["wwwnvidiacomdk"]},{"label":"NVIDIA Europa","value":["wwwnvidiacomeu"]},{"label":"NVIDIA Finland","value":["wwwnvidiacomfi"]},{"label":"NVIDIA Frankrijk","value":["wwwnvidiacomfr"]},{"label":"NVIDIA Duitsland","value":["wwwnvidiacomde"]},{"label":"NVIDIA Groot-Brittannië","value":["wwwnvidiacomgb"]},{"label":"NVIDIA India","value":["wwwnvidiacomin"]},{"label":"NVIDIA Italië","value":["wwwnvidiacomit"]},{"label":"NVIDIA Japan","value":["wwwnvidiacomjp"]},{"label":"NVIDIA Korea","value":["wwwnvidiacomkr"]},{"label":"NVIDIA Midden-Oosten","value":["wwwnvidiacomme"]},{"label":"NVIDIA Nederland","value":["wwwnvidiacomnl"]},{"label":"NVIDIA Noorwegen","value":["wwwnvidiacomno"]},{"label":"NVIDIA Polen","value":["wwwnvidiacompl"]},{"label":"NVIDIA Roemenië","value":["wwwnvidiacomro"]},{"label":"NVIDIA Singapore","value":["wwwnvidiacomsg"]},{"label":"NVIDIA Spanje","value":["wwwnvidiacomes"]},{"label":"NVIDIA Zweden","value":["wwwnvidiacomse"]},{"label":"NVIDIA Taiwan","value":["wwwnvidiacomtw"]},{"label":"NVIDIA Turkije","value":["wwwnvidiacomtr"]},{"label":"NVIDIA Verenigde Staten","value":["wwwnvidiacom"]}]},{"asset_heading":"Marktplaats","asset_values":[{"label":"Winkel","value":["marketplace"]}]},{"asset_heading":"Resources voor ontwikkelaars","asset_values":[{"label":"Modellen en blauwdrukken","value":["build_nvidia"]},{"label":"NGC-catalogus","value":["ngccontainers","ngcmodels","ngcresources"]},{"label":"NIM API\'s","value":["buildnvidia"]},{"label":"NVIDIA-ontwikkelaar","value":["developernvidiacom"]},{"label":"Technische documentatie","value":["docshub","omniverse","docsapi","runai"]}]},{"asset_heading":"Evenementen","asset_values":[{"label":"GTC AI-conferentie","value":["wwwnvidiacomgtc"]}]},{"asset_heading":"Leren en media","asset_values":[{"label":"On-demand video\'s","value":["nvod"]},{"label":"Webinars","value":["webinars"]},{"label":"Technische training","value":["dli"]}]},{"asset_heading":"Artikelen","asset_values":[{"label":"Bedrijfsblog","value":["nvblogs"]},{"label":"Ontwikkelaarsblog","value":["techblogs"]},{"label":"Newsroom","value":["nvidianews"]}]}]',
      ),
      Ti = JSON.parse(
        '[{"asset_heading":"Plassering","asset_values":[{"label":"NVIDIA Australia","value":["wwwnvidiacomau"]},{"label":"NVIDIA Østerrike","value":["wwwnvidiacomat"]},{"label":"NVIDIA Belgia","value":["wwwnvidiacombe"]},{"label":"NVIDIA Tsjekkia","value":["wwwnvidiacomcz"]},{"label":"NVIDIA Danmark","value":["wwwnvidiacomdk"]},{"label":"NVIDIA Europa","value":["wwwnvidiacomeu"]},{"label":"NVIDIA Finland","value":["wwwnvidiacomfi"]},{"label":"NVIDIA Frankrike","value":["wwwnvidiacomfr"]},{"label":"NVIDIA Tyskland","value":["wwwnvidiacomde"]},{"label":"NVIDIA Storbritannia","value":["wwwnvidiacomgb"]},{"label":"NVIDIA India","value":["wwwnvidiacomin"]},{"label":"NVIDIA Italia","value":["wwwnvidiacomit"]},{"label":"NVIDIA Japan","value":["wwwnvidiacomjp"]},{"label":"NVIDIA Korea","value":["wwwnvidiacomkr"]},{"label":"NVIDIA Midtøsten","value":["wwwnvidiacomme"]},{"label":"NVIDIA Nederland","value":["wwwnvidiacomnl"]},{"label":"NVIDIA Norge","value":["wwwnvidiacomno"]},{"label":"NVIDIA Polen","value":["wwwnvidiacompl"]},{"label":"NVIDIA Romania","value":["wwwnvidiacomro"]},{"label":"NVIDIA Singapore","value":["wwwnvidiacomsg"]},{"label":"NVIDIA Spania","value":["wwwnvidiacomes"]},{"label":"NVIDIA Sverige","value":["wwwnvidiacomse"]},{"label":"NVIDIA Taiwan","value":["wwwnvidiacomtw"]},{"label":"NVIDIA Tyrkia","value":["wwwnvidiacomtr"]},{"label":"NVIDIA USA","value":["wwwnvidiacom"]}]},{"asset_heading":"Markedsplass","asset_values":[{"label":"Kjøp","value":["marketplace"]}]},{"asset_heading":"Ressurser for utviklere","asset_values":[{"label":"Modeller og tegninger","value":["build_nvidia"]},{"label":"NGC-katalogen","value":["ngccontainers","ngcmodels","ngcresources"]},{"label":"NIM API-er","value":["buildnvidia"]},{"label":"NVIDIA Developer","value":["developernvidiacom"]},{"label":"Teknisk dokumentasjon","value":["docshub","omniverse","docsapi","runai"]}]},{"asset_heading":"Hendelser","asset_values":[{"label":"GTC KI-konferanse","value":["wwwnvidiacomgtc"]}]},{"asset_heading":"Læring og medier","asset_values":[{"label":"Videoer på forespørsel","value":["nvod"]},{"label":"Nettseminarer","value":["webinars"]},{"label":"Teknisk opplæring","value":["dli"]}]},{"asset_heading":"Artikler","asset_values":[{"label":"Bedriftsblogg","value":["nvblogs"]},{"label":"Utviklerblogg","value":["techblogs"]},{"label":"Nyhetsrom","value":["nvidianews"]}]}]',
      ),
      Vi = JSON.parse(
        '[{"asset_heading":"Lokalizacja","asset_values":[{"label":"NVIDIA Australia","value":["wwwnvidiacomau"]},{"label":"NVIDIA Austria","value":["wwwnvidiacomat"]},{"label":"NVIDIA Belgia","value":["wwwnvidiacombe"]},{"label":"NVIDIA Czechy","value":["wwwnvidiacomcz"]},{"label":"NVIDIA Dania","value":["wwwnvidiacomdk"]},{"label":"NVIDIA Europa","value":["wwwnvidiacomeu"]},{"label":"NVIDIA Finlandia","value":["wwwnvidiacomfi"]},{"label":"NVIDIA Francja","value":["wwwnvidiacomfr"]},{"label":"NVIDIA Niemcy","value":["wwwnvidiacomde"]},{"label":"NVIDIA Wielka Brytania","value":["wwwnvidiacomgb"]},{"label":"NVIDIA Indie","value":["wwwnvidiacomin"]},{"label":"NVIDIA Włochy","value":["wwwnvidiacomit"]},{"label":"NVIDIA Japonia","value":["wwwnvidiacomjp"]},{"label":"NVIDIA Korea","value":["wwwnvidiacomkr"]},{"label":"NVIDIA Bliski Wschód","value":["wwwnvidiacomme"]},{"label":"NVIDIA Holandia","value":["wwwnvidiacomnl"]},{"label":"NVIDIA Norwegia","value":["wwwnvidiacomno"]},{"label":"NVIDIA Polska","value":["wwwnvidiacompl"]},{"label":"NVIDIA Rumunia","value":["wwwnvidiacomro"]},{"label":"NVIDIA Singapore","value":["wwwnvidiacomsg"]},{"label":"NVIDIA Hiszpania","value":["wwwnvidiacomes"]},{"label":"NVIDIA Szwecja","value":["wwwnvidiacomse"]},{"label":"NVIDIA Tajwan","value":["wwwnvidiacomtw"]},{"label":"NVIDIA Turcja","value":["wwwnvidiacomtr"]},{"label":"NVIDIA Stany Zjednoczone","value":["wwwnvidiacom"]}]},{"asset_heading":"Rynek","asset_values":[{"label":"Sklep","value":["marketplace"]}]},{"asset_heading":"Zasoby dla twórców oprogramowania","asset_values":[{"label":"Modele i plany","value":["build_nvidia"]},{"label":"Katalog NGC","value":["ngccontainers","ngcmodels","ngcresources"]},{"label":"API NIM","value":["buildnvidia"]},{"label":"NVIDIA Developer","value":["developernvidiacom"]},{"label":"Dokumentacja techniczna","value":["docshub","omniverse","docsapi","runai"]}]},{"asset_heading":"Wydarzenia","asset_values":[{"label":"Konferencja GTC AI","value":["wwwnvidiacomgtc"]}]},{"asset_heading":"Edukacja i media","asset_values":[{"label":"Filmy na żądanie","value":["nvod"]},{"label":"Webinaria","value":["webinars"]},{"label":"Szkolenie techniczne","value":["dli"]}]},{"asset_heading":"Artykuły","asset_values":[{"label":"Blog korporacyjny","value":["nvblogs"]},{"label":"Blog twórców oprogramowania","value":["techblogs"]},{"label":"Informacje prasowe","value":["nvidianews"]}]}]',
      ),
      Fi = JSON.parse(
        '[{"asset_heading":"Locație","asset_values":[{"label":"NVIDIA Australia","value":["wwwnvidiacomau"]},{"label":"NVIDIA Austria","value":["wwwnvidiacomat"]},{"label":"NVIDIA Belgia","value":["wwwnvidiacombe"]},{"label":"NVIDIA Republica Cehă","value":["wwwnvidiacomcz"]},{"label":"NVIDIA Danemarca","value":["wwwnvidiacomdk"]},{"label":"NVIDIA Europa","value":["wwwnvidiacomeu"]},{"label":"NVIDIA Finlanda","value":["wwwnvidiacomfi"]},{"label":"NVIDIA Franța","value":["wwwnvidiacomfr"]},{"label":"NVIDIA Germania","value":["wwwnvidiacomde"]},{"label":"NVIDIA Marea Britanie","value":["wwwnvidiacomgb"]},{"label":"NVIDIA India","value":["wwwnvidiacomin"]},{"label":"NVIDIA Italia","value":["wwwnvidiacomit"]},{"label":"NVIDIA Japonia","value":["wwwnvidiacomjp"]},{"label":"NVIDIA Korea","value":["wwwnvidiacomkr"]},{"label":"NVIDIA Orientul Mijlociu","value":["wwwnvidiacomme"]},{"label":"NVIDIA Olanda","value":["wwwnvidiacomnl"]},{"label":"NVIDIA Norvegia","value":["wwwnvidiacomno"]},{"label":"NVIDIA Polonia","value":["wwwnvidiacompl"]},{"label":"NVIDIA Romania","value":["wwwnvidiacomro"]},{"label":"NVIDIA Singapore","value":["wwwnvidiacomsg"]},{"label":"NVIDIA Spania","value":["wwwnvidiacomes"]},{"label":"NVIDIA Suedia","value":["wwwnvidiacomse"]},{"label":"NVIDIA Taiwan","value":["wwwnvidiacomtw"]},{"label":"NVIDIA Turcia","value":["wwwnvidiacomtr"]},{"label":"NVIDIA Statele Unite ale Americii","value":["wwwnvidiacom"]}]},{"asset_heading":"Piață","asset_values":[{"label":"Cumpără","value":["marketplace"]}]},{"asset_heading":"Resurse pentru dezvoltatori","asset_values":[{"label":"Modele și planuri","value":["build_nvidia"]},{"label":"Catalog NGC","value":["ngccontainers","ngcmodels","ngcresources"]},{"label":"API-uri NIM","value":["buildnvidia"]},{"label":"NVIDIA Developer","value":["developernvidiacom"]},{"label":"Documentație tehnică","value":["docshub","omniverse","docsapi","runai"]}]},{"asset_heading":"Evenimente","asset_values":[{"label":"Conferința GTC AI","value":["wwwnvidiacomgtc"]}]},{"asset_heading":"Învățare și media","asset_values":[{"label":"Videoclipuri la cerere","value":["nvod"]},{"label":"Webinarii","value":["webinars"]},{"label":"Instruire tehnică","value":["dli"]}]},{"asset_heading":"Articole","asset_values":[{"label":"Blog corporativ","value":["nvblogs"]},{"label":"Blog pentru dezvoltatori","value":["techblogs"]},{"label":"Newsroom","value":["nvidianews"]}]}]',
      ),
      zi = JSON.parse(
        '[{"asset_heading":"Plats","asset_values":[{"label":"NVIDIA Australien","value":["wwwnvidiacomau"]},{"label":"NVIDIA Österrike","value":["wwwnvidiacomat"]},{"label":"NVIDIA Belgien","value":["wwwnvidiacombe"]},{"label":"NVIDIA Tjeckien","value":["wwwnvidiacomcz"]},{"label":"NVIDIA Danmark","value":["wwwnvidiacomdk"]},{"label":"NVIDIA Europa","value":["wwwnvidiacomeu"]},{"label":"NVIDIA Finland","value":["wwwnvidiacomfi"]},{"label":"NVIDIA Frankrike","value":["wwwnvidiacomfr"]},{"label":"NVIDIA Tyskland","value":["wwwnvidiacomde"]},{"label":"NVIDIA Storbritannien","value":["wwwnvidiacomgb"]},{"label":"NVIDIA Indien","value":["wwwnvidiacomin"]},{"label":"NVIDIA Italien","value":["wwwnvidiacomit"]},{"label":"NVIDIA Japan","value":["wwwnvidiacomjp"]},{"label":"NVIDIA Korea","value":["wwwnvidiacomkr"]},{"label":"NVIDIA Mellanöstern","value":["wwwnvidiacomme"]},{"label":"NVIDIA Nederländerna","value":["wwwnvidiacomnl"]},{"label":"NVIDIA Norge","value":["wwwnvidiacomno"]},{"label":"NVIDIA Polen","value":["wwwnvidiacompl"]},{"label":"NVIDIA Rumänien","value":["wwwnvidiacomro"]},{"label":"NVIDIA Singapore","value":["wwwnvidiacomsg"]},{"label":"NVIDIA Spanien","value":["wwwnvidiacomes"]},{"label":"NVIDIA Sverige","value":["wwwnvidiacomse"]},{"label":"NVIDIA Taiwan","value":["wwwnvidiacomtw"]},{"label":"NVIDIA Turkiet","value":["wwwnvidiacomtr"]},{"label":"NVIDIA USA","value":["wwwnvidiacom"]}]},{"asset_heading":"Marknadsplats","asset_values":[{"label":"Handla","value":["marketplace"]}]},{"asset_heading":"Utvecklarresurser","asset_values":[{"label":"Modeller och ritningar","value":["build_nvidia"]},{"label":"NGC-katalog","value":["ngccontainers","ngcmodels","ngcresources"]},{"label":"NIM API:er","value":["buildnvidia"]},{"label":"NVIDIA-utvecklare","value":["developernvidiacom"]},{"label":"Teknisk dokumentation","value":["docshub","omniverse","docsapi","runai"]}]},{"asset_heading":"Evenemang","asset_values":[{"label":"GTC AI-konferens","value":["wwwnvidiacomgtc"]}]},{"asset_heading":"Utbildning och media","asset_values":[{"label":"Videor på begäran","value":["nvod"]},{"label":"Webbinarier","value":["webinars"]},{"label":"Teknisk utbildning","value":["dli"]}]},{"asset_heading":"Artiklar","asset_values":[{"label":"Företagsblogg","value":["nvblogs"]},{"label":"Utvecklarblogg","value":["techblogs"]},{"label":"Nyhetsrum","value":["nvidianews"]}]}]',
      ),
      Mi = JSON.parse(
        '[{"asset_heading":"Konum","asset_values":[{"label":"NVIDIA Avustralya","value":["wwwnvidiacomau"]},{"label":"NVIDIA Avusturya","value":["wwwnvidiacomat"]},{"label":"NVIDIA Belçika","value":["wwwnvidiacombe"]},{"label":"NVIDIA Çek Cumhuriyeti","value":["wwwnvidiacomcz"]},{"label":"NVIDIA Danimarka","value":["wwwnvidiacomdk"]},{"label":"NVIDIA Avrupa","value":["wwwnvidiacomeu"]},{"label":"NVIDIA Finlandiya","value":["wwwnvidiacomfi"]},{"label":"NVIDIA Fransa","value":["wwwnvidiacomfr"]},{"label":"NVIDIA Almanya","value":["wwwnvidiacomde"]},{"label":"NVIDIA Büyük Britanya","value":["wwwnvidiacomgb"]},{"label":"NVIDIA Hindistan","value":["wwwnvidiacomin"]},{"label":"NVIDIA İtalya","value":["wwwnvidiacomit"]},{"label":"NVIDIA Japonya","value":["wwwnvidiacomjp"]},{"label":"NVIDIA Kore","value":["wwwnvidiacomkr"]},{"label":"NVIDIA Orta Doğu","value":["wwwnvidiacomme"]},{"label":"NVIDIA Hollanda","value":["wwwnvidiacomnl"]},{"label":"NVIDIA Norveç","value":["wwwnvidiacomno"]},{"label":"NVIDIA Polonya","value":["wwwnvidiacompl"]},{"label":"NVIDIA Romanya","value":["wwwnvidiacomro"]},{"label":"NVIDIA Singapore","value":["wwwnvidiacomsg"]},{"label":"NVIDIA İspanya","value":["wwwnvidiacomes"]},{"label":"NVIDIA İsveç","value":["wwwnvidiacomse"]},{"label":"NVIDIA Tayvan","value":["wwwnvidiacomtw"]},{"label":"NVIDIA Türkiye","value":["wwwnvidiacomtr"]},{"label":"NVIDIA United States","value":["wwwnvidiacom"]}]},{"asset_heading":"Marketplace","asset_values":[{"label":"Mağaza","value":["marketplace"]}]},{"asset_heading":"Geliştirici Kaynakları","asset_values":[{"label":"Modeller ve Tasarımlar","value":["build_nvidia"]},{"label":"NGC Kataloğu","value":["ngccontainers","ngcmodels","ngcresources"]},{"label":"NIM API\'leri","value":["buildnvidia"]},{"label":"NVIDIA Geliştirici","value":["developernvidiacom"]},{"label":"Teknik Dokümantasyon","value":["docshub","omniverse","docsapi","runai"]}]},{"asset_heading":"Etkinlikler","asset_values":[{"label":"GTC Yapay Zeka Konferansı","value":["wwwnvidiacomgtc"]}]},{"asset_heading":"Öğrenim ve Medya","asset_values":[{"label":"İsteğe Bağlı Videolar","value":["nvod"]},{"label":"Web Seminerleri","value":["webinars"]},{"label":"Teknik Eğitim","value":["dli"]}]},{"asset_heading":"Makaleler","asset_values":[{"label":"Kurumsal Blog","value":["nvblogs"]},{"label":"Geliştirici Blogu","value":["techblogs"]},{"label":"Basın Odası","value":["nvidianews"]}]}]',
      ),
      Bi = JSON.parse(
        '[{"asset_heading":"地域","asset_values":[{"label":"NVIDIA Australia","value":["wwwnvidiacomau"]},{"label":"NVIDIA Austria","value":["wwwnvidiacomat"]},{"label":"NVIDIA Belgium","value":["wwwnvidiacombe"]},{"label":"NVIDIA Czech Republic","value":["wwwnvidiacomcz"]},{"label":"NVIDIA Denmark","value":["wwwnvidiacomdk"]},{"label":"NVIDIA Europe","value":["wwwnvidiacomeu"]},{"label":"NVIDIA Finland","value":["wwwnvidiacomfi"]},{"label":"NVIDIA France","value":["wwwnvidiacomfr"]},{"label":"NVIDIA Germany","value":["wwwnvidiacomde"]},{"label":"NVIDIA Great Britain","value":["wwwnvidiacomgb"]},{"label":"NVIDIA India","value":["wwwnvidiacomin"]},{"label":"NVIDIA Italy","value":["wwwnvidiacomit"]},{"label":"NVIDIA Japan","value":["wwwnvidiacomjp"]},{"label":"NVIDIA Korea","value":["wwwnvidiacomkr"]},{"label":"NVIDIA Middle East","value":["wwwnvidiacomme"]},{"label":"NVIDIA Netherlands","value":["wwwnvidiacomnl"]},{"label":"NVIDIA Norway","value":["wwwnvidiacomno"]},{"label":"NVIDIA Poland","value":["wwwnvidiacompl"]},{"label":"NVIDIA Romania","value":["wwwnvidiacomro"]},{"label":"NVIDIA Singapore","value":["wwwnvidiacomsg"]},{"label":"NVIDIA Spain","value":["wwwnvidiacomes"]},{"label":"NVIDIA Sweden","value":["wwwnvidiacomse"]},{"label":"NVIDIA Taiwan","value":["wwwnvidiacomtw"]},{"label":"NVIDIA Turkey","value":["wwwnvidiacomtr"]},{"label":"NVIDIA United States","value":["wwwnvidiacom"]}]},{"asset_heading":"マーケットプレイス","asset_values":[{"label":"ショップ","value":["marketplace"]}]},{"asset_heading":"開発者向け関連情報","asset_values":[{"label":"モデルとブループリント","value":["build_nvidia"]},{"label":"NGC カタログ","value":["ngccontainers","ngcmodels","ngcresources"]},{"label":"NIM API","value":["buildnvidia"]},{"label":"開発者","value":["developernvidiacom"]},{"label":"技術ドキュメント","value":["docshub","omniverse","docsapi","runai"]}]},{"asset_heading":"イベント","asset_values":[{"label":"GTC AI カンファレンス","value":["wwwnvidiacomgtc"]}]},{"asset_heading":"学習とメディア","asset_values":[{"label":"オンデマンド動画","value":["nvod"]},{"label":"ウェビナー","value":["webinars"]},{"label":"技術トレーニング","value":["dli"]}]},{"asset_heading":"記事","asset_values":[{"label":"企業ブログ","value":["nvblogs"]},{"label":"開発者向けブログ","value":["techblogs"]},{"label":"ニュースルーム","value":["nvidianews"]}]}]',
      ),
      Ui = JSON.parse(
        '[{"asset_heading":"위치","asset_values":[{"label":"NVIDIA 호주","value":["wwwnvidiacomau"]},{"label":"NVIDIA 오스트리아","value":["wwwnvidiacomat"]},{"label":"NVIDIA 벨기에","value":["wwwnvidiacombe"]},{"label":"NVIDIA 체코","value":["wwwnvidiacomcz"]},{"label":"NVIDIA 덴마크","value":["wwwnvidiacomdk"]},{"label":"NVIDIA 유럽","value":["wwwnvidiacomeu"]},{"label":"NVIDIA 핀란드","value":["wwwnvidiacomfi"]},{"label":"NVIDIA 프랑스","value":["wwwnvidiacomfr"]},{"label":"NVIDIA 독일","value":["wwwnvidiacomde"]},{"label":"NVIDIA 영국","value":["wwwnvidiacomgb"]},{"label":"NVIDIA 인도","value":["wwwnvidiacomin"]},{"label":"NVIDIA 이탈리아","value":["wwwnvidiacomit"]},{"label":"NVIDIA 일본","value":["wwwnvidiacomjp"]},{"label":"NVIDIA 한국","value":["wwwnvidiacomkr"]},{"label":"NVIDIA 중동","value":["wwwnvidiacomme"]},{"label":"NVIDIA 네덜란드","value":["wwwnvidiacomnl"]},{"label":"NVIDIA 노르웨이","value":["wwwnvidiacomno"]},{"label":"NVIDIA 폴란드","value":["wwwnvidiacompl"]},{"label":"NVIDIA 루마니아","value":["wwwnvidiacomro"]},{"label":"NVIDIA 싱가폴","value":["wwwnvidiacomsg"]},{"label":"NVIDIA 스페인","value":["wwwnvidiacomes"]},{"label":"NVIDIA 스웨덴","value":["wwwnvidiacomse"]},{"label":"NVIDIA 대만","value":["wwwnvidiacomtw"]},{"label":"NVIDIA 튀르키예","value":["wwwnvidiacomtr"]},{"label":"NVIDIA 미국","value":["wwwnvidiacom"]}]},{"asset_heading":"마켓플레이스","asset_values":[{"label":"제품 둘러보기","value":["marketplace"]}]},{"asset_heading":"개발자 리소스","asset_values":[{"label":"모델 및 Blueprint","value":["build_nvidia"]},{"label":"NGC 카탈로그","value":["ngccontainers","ngcmodels","ngcresources"]},{"label":"NIM API","value":["buildnvidia"]},{"label":"NVIDIA 개발자","value":["developernvidiacom"]},{"label":"기술 문서","value":["docshub","omniverse","docsapi","runai"]}]},{"asset_heading":"이벤트","asset_values":[{"label":"GTC AI 컨퍼런스","value":["wwwnvidiacomgtc"]}]},{"asset_heading":"학습 & 미디어","asset_values":[{"label":"온디맨드 영상","value":["nvod"]},{"label":"웨비나","value":["webinars"]},{"label":"기술 교육","value":["dli"]}]},{"asset_heading":"기사","asset_values":[{"label":"기업 블로그","value":["nvblogs"]},{"label":"개발자 블로그","value":["techblogs"]},{"label":"뉴스룸","value":["nvidianews"]}]}]',
      ),
      Hi = JSON.parse(
        '[{"asset_heading":"位置","asset_values":[{"label":"NVIDIA Australia","value":["wwwnvidiacomau"]},{"label":"NVIDIA Austria","value":["wwwnvidiacomat"]},{"label":"NVIDIA Belgium","value":["wwwnvidiacombe"]},{"label":"NVIDIA Czech Republic","value":["wwwnvidiacomcz"]},{"label":"NVIDIA Denmark","value":["wwwnvidiacomdk"]},{"label":"NVIDIA Europe","value":["wwwnvidiacomeu"]},{"label":"NVIDIA Finland","value":["wwwnvidiacomfi"]},{"label":"NVIDIA France","value":["wwwnvidiacomfr"]},{"label":"NVIDIA Germany","value":["wwwnvidiacomde"]},{"label":"NVIDIA Great Britain","value":["wwwnvidiacomgb"]},{"label":"NVIDIA India","value":["wwwnvidiacomin"]},{"label":"NVIDIA Italy","value":["wwwnvidiacomit"]},{"label":"NVIDIA Japan","value":["wwwnvidiacomjp"]},{"label":"NVIDIA Korea","value":["wwwnvidiacomkr"]},{"label":"NVIDIA Middle East","value":["wwwnvidiacomme"]},{"label":"NVIDIA Netherlands","value":["wwwnvidiacomnl"]},{"label":"NVIDIA Norway","value":["wwwnvidiacomno"]},{"label":"NVIDIA Poland","value":["wwwnvidiacompl"]},{"label":"NVIDIA Romania","value":["wwwnvidiacomro"]},{"label":"NVIDIA Singapore","value":["wwwnvidiacomsg"]},{"label":"NVIDIA Spain","value":["wwwnvidiacomes"]},{"label":"NVIDIA Sweden","value":["wwwnvidiacomse"]},{"label":"NVIDIA Taiwan","value":["wwwnvidiacomtw"]},{"label":"NVIDIA Turkey","value":["wwwnvidiacomtr"]},{"label":"NVIDIA United States","value":["wwwnvidiacom"]}]},{"asset_heading":"Marketplace","asset_values":[{"label":"商店","value":["marketplace"]}]},{"asset_heading":"開發人員資源","asset_values":[{"label":"模型與 Blueprints","value":["build_nvidia"]},{"label":"NGC 目錄","value":["ngccontainers","ngcmodels","ngcresources"]},{"label":"NIM APIs","value":["buildnvidia"]},{"label":"NVIDIA 開發人員","value":["developernvidiacom"]},{"label":"技術文件","value":["docshub","omniverse","docsapi","runai"]}]},{"asset_heading":"活動","asset_values":[{"label":"GTC AI 大會","value":["wwwnvidiacomgtc"]}]},{"asset_heading":"學習與媒體","asset_values":[{"label":"隨選影片","value":["nvod"]},{"label":"線上研討會","value":["webinars"]},{"label":"技術訓練","value":["dli"]}]},{"asset_heading":"文章","asset_values":[{"label":"企業部落格","value":["nvblogs"]},{"label":"開發人員部落格","value":["techblogs"]},{"label":"新聞中心","value":["nvidianews"]}]}]',
      );
    function Gi(e) {
      return (
        (Gi =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
        Gi(e)
      );
    }
    function qi(e, n) {
      (null == n || n > e.length) && (n = e.length);
      for (var t = 0, r = Array(n); t < n; t++) r[t] = e[t];
      return r;
    }
    function Wi(e, n) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (n &&
          (r = r.filter(function (n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable;
          })),
          t.push.apply(t, r));
      }
      return t;
    }
    function $i(e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {};
        n % 2
          ? Wi(Object(t), !0).forEach(function (n) {
              Ki(e, n, t[n]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Wi(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n),
                );
              });
      }
      return e;
    }
    function Ki(e, n, t) {
      return (
        (n = (function (e) {
          var n = (function (e) {
            if ("object" != Gi(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var t = n.call(e, "string");
              if ("object" != Gi(t)) return t;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return String(e);
          })(e);
          return "symbol" == Gi(n) ? n : n + "";
        })(n)) in e
          ? Object.defineProperty(e, n, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[n] = t),
        e
      );
    }
    var Xi = "US",
      Ji = { AT: "DE", BE: "FR" };
    (Ji[
      (Xi =
        window.location.host.indexOf(".nvidia.cn") > 1
          ? "CN"
          : void 0 !== window.location.pathname.split("/")[1].split("-")[1]
            ? "ZZ" ==
              window.location.pathname.split("/")[1].split("-")[1].toUpperCase()
              ? "US"
              : window.location.pathname
                  .split("/")[1]
                  .split("-")[1]
                  .toUpperCase()
            : "")
    ] && (Xi = Ji[Xi]),
      Xi.toLowerCase());
    var Qi = {
        DE: Di,
        FR: _i,
        ES: Li,
        IT: Oi,
        CZ: Ci,
        DK: Ri,
        FI: Pi,
        NL: ji,
        NO: Ti,
        PL: Vi,
        RO: Fi,
        SE: zi,
        TR: Mi,
        JP: Bi,
        KR: Ui,
        TW: Hi,
        otherDomains: [
          {
            asset_heading: "Site",
            asset_values: [
              { label: "www.nvidia.com", value: ["wwwnvidiacom"] },
              { label: "Shop", value: ["marketplace"] },
            ],
          },
          {
            asset_heading: "Developer Resources",
            asset_values: [
              { label: "Models and Blueprints", value: ["build_nvidia"] },
              {
                label: "NGC Catalog",
                value: ["ngccontainers", "ngcmodels", "ngcresources"],
              },
              { label: "NIM APIs", value: ["buildnvidia"] },
              { label: "NVIDIA Developer", value: ["developernvidiacom"] },
              {
                label: "Technical Documentation",
                value: ["docshub", "omniverse", "docsapi", "runai"],
              },
            ],
          },
          {
            asset_heading: "Events",
            asset_values: [
              { label: "GTC AI Conference", value: ["wwwnvidiacomgtc"] },
            ],
          },
          {
            asset_heading: "Learning & Media",
            asset_values: [
              { label: "On-Demand Videos", value: ["nvod"] },
              { label: "Webinars", value: ["webinars"] },
              { label: "Technical Training", value: ["dli"] },
            ],
          },
          {
            asset_heading: "Articles",
            asset_values: [
              { label: "Corporate Blog", value: ["nvblogs"] },
              { label: "Developer Blog", value: ["techblogs"] },
              { label: "Newsroom", value: ["nvidianews"] },
            ],
          },
        ],
        blogs: [
          {
            asset_heading: "Articles",
            asset_values: [
              { label: "Corporate Blog", value: ["nvblogs"] },
              { label: "Developer Blog", value: ["techblogs"] },
              { label: "Newsroom", value: ["nvidianews"] },
            ],
          },
          {
            asset_heading: "Site",
            asset_values: [
              { label: "www.nvidia.com", value: ["wwwnvidiacom"] },
              { label: "Shop", value: ["marketplace"] },
            ],
          },
          {
            asset_heading: "Developer Resources",
            asset_values: [
              { label: "Models and Blueprints", value: ["build_nvidia"] },
              {
                label: "NGC Catalog",
                value: ["ngccontainers", "ngcmodels", "ngcresources"],
              },
              { label: "NIM APIs", value: ["buildnvidia"] },
              { label: "NVIDIA Developer", value: ["developernvidiacom"] },
              {
                label: "Technical Documentation",
                value: ["docshub", "omniverse", "docsapi", "runai"],
              },
            ],
          },
          {
            asset_heading: "Events",
            asset_values: [
              { label: "GTC AI Conference", value: ["wwwnvidiacomgtc"] },
            ],
          },
          {
            asset_heading: "Learning & Media",
            asset_values: [
              { label: "On-Demand Videos", value: ["nvod"] },
              { label: "Webinars", value: ["webinars"] },
              { label: "Technical Training", value: ["dli"] },
            ],
          },
        ],
        others: [
          {
            asset_heading: "Location",
            asset_values: [
              { label: "NVIDIA Australia", value: ["wwwnvidiacomau"] },
              { label: "NVIDIA Austria", value: ["wwwnvidiacomat"] },
              { label: "NVIDIA Belgium", value: ["wwwnvidiacombe"] },
              { label: "NVIDIA Czech Republic", value: ["wwwnvidiacomcz"] },
              { label: "NVIDIA Denmark", value: ["wwwnvidiacomdk"] },
              { label: "NVIDIA Europe", value: ["wwwnvidiacomeu"] },
              { label: "NVIDIA Finland", value: ["wwwnvidiacomfi"] },
              { label: "NVIDIA France", value: ["wwwnvidiacomfr"] },
              { label: "NVIDIA Germany", value: ["wwwnvidiacomde"] },
              { label: "NVIDIA Great Britain", value: ["wwwnvidiacomgb"] },
              { label: "NVIDIA India", value: ["wwwnvidiacomin"] },
              { label: "NVIDIA Italy", value: ["wwwnvidiacomit"] },
              { label: "NVIDIA Japan", value: ["wwwnvidiacomjp"] },
              { label: "NVIDIA Korea", value: ["wwwnvidiacomkr"] },
              { label: "NVIDIA Middle East", value: ["wwwnvidiacomme"] },
              { label: "NVIDIA Netherlands", value: ["wwwnvidiacomnl"] },
              { label: "NVIDIA Norway", value: ["wwwnvidiacomno"] },
              { label: "NVIDIA Poland", value: ["wwwnvidiacompl"] },
              { label: "NVIDIA Romania", value: ["wwwnvidiacomro"] },
              { label: "NVIDIA Singapore", value: ["wwwnvidiacomsg"] },
              { label: "NVIDIA Spain", value: ["wwwnvidiacomes"] },
              { label: "NVIDIA Sweden", value: ["wwwnvidiacomse"] },
              { label: "NVIDIA Taiwan", value: ["wwwnvidiacomtw"] },
              { label: "NVIDIA Turkey", value: ["wwwnvidiacomtr"] },
              { label: "NVIDIA United States", value: ["wwwnvidiacom"] },
            ],
          },
          {
            asset_heading: "Marketplace",
            asset_values: [{ label: "Shop", value: ["marketplace"] }],
          },
          {
            asset_heading: "Developer Resources",
            asset_values: [
              { label: "Models and Blueprints", value: ["build_nvidia"] },
              {
                label: "NGC Catalog",
                value: ["ngccontainers", "ngcmodels", "ngcresources"],
              },
              { label: "NIM APIs", value: ["buildnvidia"] },
              { label: "NVIDIA Developer", value: ["developernvidiacom"] },
              {
                label: "Technical Documentation",
                value: ["docshub", "omniverse", "docsapi", "runai"],
              },
            ],
          },
          {
            asset_heading: "Events",
            asset_values: [
              { label: "GTC AI Conference", value: ["wwwnvidiacomgtc"] },
            ],
          },
          {
            asset_heading: "Learning & Media",
            asset_values: [
              { label: "On-Demand Videos", value: ["nvod"] },
              { label: "Webinars", value: ["webinars"] },
              { label: "Technical Training", value: ["dli"] },
            ],
          },
          {
            asset_heading: "Articles",
            asset_values: [
              { label: "Corporate Blog", value: ["nvblogs"] },
              { label: "Developer Blog", value: ["techblogs"] },
              { label: "Newsroom", value: ["nvidianews"] },
            ],
          },
        ],
      },
      Zi = function (e) {
        return Array.isArray(e)
          ? e.map(function (e) {
              return "Location" === e.asset_heading &&
                Array.isArray(e.asset_values)
                ? $i(
                    $i({}, e),
                    {},
                    {
                      asset_values: ((n = e.asset_values),
                      (function (e) {
                        if (Array.isArray(e)) return qi(e);
                      })(n) ||
                        (function (e) {
                          if (
                            ("undefined" != typeof Symbol &&
                              null != e[Symbol.iterator]) ||
                            null != e["@@iterator"]
                          )
                            return Array.from(e);
                        })(n) ||
                        (function (e, n) {
                          if (e) {
                            if ("string" == typeof e) return qi(e, n);
                            var t = {}.toString.call(e).slice(8, -1);
                            return (
                              "Object" === t &&
                                e.constructor &&
                                (t = e.constructor.name),
                              "Map" === t || "Set" === t
                                ? Array.from(e)
                                : "Arguments" === t ||
                                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                      t,
                                    )
                                  ? qi(e, n)
                                  : void 0
                            );
                          }
                        })(n) ||
                        (function () {
                          throw new TypeError(
                            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                          );
                        })()).sort(function (e, n) {
                        return (e.label || "").localeCompare(
                          n.label || "",
                          void 0,
                          { sensitivity: "base" },
                        );
                      }),
                    },
                  )
                : e;
              var n;
            })
          : e;
      };
    function Yi(e) {
      return (
        (Yi =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
        Yi(e)
      );
    }
    function el(e) {
      if (null != e) {
        var n =
            e[("function" == typeof Symbol && Symbol.iterator) || "@@iterator"],
          t = 0;
        if (n) return n.call(e);
        if ("function" == typeof e.next) return e;
        if (!isNaN(e.length))
          return {
            next: function () {
              return (
                e && t >= e.length && (e = void 0),
                { value: e && e[t++], done: !e }
              );
            },
          };
      }
      throw new TypeError(Yi(e) + " is not iterable");
    }
    function nl() {
      var e,
        n,
        t = "function" == typeof Symbol ? Symbol : {},
        r = t.iterator || "@@iterator",
        a = t.toStringTag || "@@toStringTag";
      function i(t, r, a, i) {
        var s = r && r.prototype instanceof o ? r : o,
          u = Object.create(s.prototype);
        return (
          tl(
            u,
            "_invoke",
            (function (t, r, a) {
              var i,
                o,
                s,
                u = 0,
                c = a || [],
                d = !1,
                f = {
                  p: 0,
                  n: 0,
                  v: e,
                  a: p,
                  f: p.bind(e, 4),
                  d: function (n, t) {
                    return ((i = n), (o = 0), (s = e), (f.n = t), l);
                  },
                };
              function p(t, r) {
                for (o = t, s = r, n = 0; !d && u && !a && n < c.length; n++) {
                  var a,
                    i = c[n],
                    p = f.p,
                    m = i[2];
                  t > 3
                    ? (a = m === r) &&
                      ((s = i[(o = i[4]) ? 5 : ((o = 3), 3)]),
                      (i[4] = i[5] = e))
                    : i[0] <= p &&
                      ((a = t < 2 && p < i[1])
                        ? ((o = 0), (f.v = r), (f.n = i[1]))
                        : p < m &&
                          (a = t < 3 || i[0] > r || r > m) &&
                          ((i[4] = t), (i[5] = r), (f.n = m), (o = 0)));
                }
                if (a || t > 1) return l;
                throw ((d = !0), r);
              }
              return function (a, c, m) {
                if (u > 1) throw TypeError("Generator is already running");
                for (
                  d && 1 === c && p(c, m), o = c, s = m;
                  (n = o < 2 ? e : s) || !d;

                ) {
                  i ||
                    (o
                      ? o < 3
                        ? (o > 1 && (f.n = -1), p(o, s))
                        : (f.n = s)
                      : (f.v = s));
                  try {
                    if (((u = 2), i)) {
                      if ((o || (a = "next"), (n = i[a]))) {
                        if (!(n = n.call(i, s)))
                          throw TypeError("iterator result is not an object");
                        if (!n.done) return n;
                        ((s = n.value), o < 2 && (o = 0));
                      } else
                        (1 === o && (n = i.return) && n.call(i),
                          o < 2 &&
                            ((s = TypeError(
                              "The iterator does not provide a '" +
                                a +
                                "' method",
                            )),
                            (o = 1)));
                      i = e;
                    } else if ((n = (d = f.n < 0) ? s : t.call(r, f)) !== l)
                      break;
                  } catch (n) {
                    ((i = e), (o = 1), (s = n));
                  } finally {
                    u = 1;
                  }
                }
                return { value: n, done: d };
              };
            })(t, a, i),
            !0,
          ),
          u
        );
      }
      var l = {};
      function o() {}
      function s() {}
      function u() {}
      n = Object.getPrototypeOf;
      var c = [][r]
          ? n(n([][r]()))
          : (tl((n = {}), r, function () {
              return this;
            }),
            n),
        d = (u.prototype = o.prototype = Object.create(c));
      function f(e) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(e, u)
            : ((e.__proto__ = u), tl(e, a, "GeneratorFunction")),
          (e.prototype = Object.create(d)),
          e
        );
      }
      return (
        (s.prototype = u),
        tl(d, "constructor", u),
        tl(u, "constructor", s),
        (s.displayName = "GeneratorFunction"),
        tl(u, a, "GeneratorFunction"),
        tl(d),
        tl(d, a, "Generator"),
        tl(d, r, function () {
          return this;
        }),
        tl(d, "toString", function () {
          return "[object Generator]";
        }),
        (nl = function () {
          return { w: i, m: f };
        })()
      );
    }
    function tl(e, n, t, r) {
      var a = Object.defineProperty;
      try {
        a({}, "", {});
      } catch (e) {
        a = 0;
      }
      ((tl = function (e, n, t, r) {
        function i(n, t) {
          tl(e, n, function (e) {
            return this._invoke(n, t, e);
          });
        }
        n
          ? a
            ? a(e, n, {
                value: t,
                enumerable: !r,
                configurable: !r,
                writable: !r,
              })
            : (e[n] = t)
          : (i("next", 0), i("throw", 1), i("return", 2));
      }),
        tl(e, n, t, r));
    }
    function rl(e, n, t, r, a, i, l) {
      try {
        var o = e[i](l),
          s = o.value;
      } catch (e) {
        return void t(e);
      }
      o.done ? n(s) : Promise.resolve(s).then(r, a);
    }
    function al(e) {
      return function () {
        var n = this,
          t = arguments;
        return new Promise(function (r, a) {
          var i = e.apply(n, t);
          function l(e) {
            rl(i, r, a, l, o, "next", e);
          }
          function o(e) {
            rl(i, r, a, l, o, "throw", e);
          }
          l(void 0);
        });
      };
    }
    function il(e, n) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (n &&
          (r = r.filter(function (n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable;
          })),
          t.push.apply(t, r));
      }
      return t;
    }
    function ll(e, n, t) {
      return (
        (n = (function (e) {
          var n = (function (e) {
            if ("object" != Yi(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var t = n.call(e, "string");
              if ("object" != Yi(t)) return t;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return String(e);
          })(e);
          return "symbol" == Yi(n) ? n : n + "";
        })(n)) in e
          ? Object.defineProperty(e, n, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[n] = t),
        e
      );
    }
    function ol(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return cl(e);
        })(e) ||
        (function (e) {
          if (
            ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
            null != e["@@iterator"]
          )
            return Array.from(e);
        })(e) ||
        ul(e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        })()
      );
    }
    function sl(e, n) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, n) {
          var t =
            null == e
              ? null
              : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
          if (null != t) {
            var r,
              a,
              i,
              l,
              o = [],
              s = !0,
              u = !1;
            try {
              if (((i = (t = t.call(e)).next), 0 === n)) {
                if (Object(t) !== t) return;
                s = !1;
              } else
                for (
                  ;
                  !(s = (r = i.call(t)).done) &&
                  (o.push(r.value), o.length !== n);
                  s = !0
                );
            } catch (e) {
              ((u = !0), (a = e));
            } finally {
              try {
                if (
                  !s &&
                  null != t.return &&
                  ((l = t.return()), Object(l) !== l)
                )
                  return;
              } finally {
                if (u) throw a;
              }
            }
            return o;
          }
        })(e, n) ||
        ul(e, n) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        })()
      );
    }
    function ul(e, n) {
      if (e) {
        if ("string" == typeof e) return cl(e, n);
        var t = {}.toString.call(e).slice(8, -1);
        return (
          "Object" === t && e.constructor && (t = e.constructor.name),
          "Map" === t || "Set" === t
            ? Array.from(e)
            : "Arguments" === t ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
              ? cl(e, n)
              : void 0
        );
      }
    }
    function cl(e, n) {
      (null == n || n > e.length) && (n = e.length);
      for (var t = 0, r = Array(n); t < n; t++) r[t] = e[t];
      return r;
    }
    var dl,
      fl = Jr(Bn);
    const pl = function (e) {
      var n,
        t,
        r,
        i = e.placeholderText,
        l = e.siteVal,
        o = e.generateSummary,
        u = e.preSelectedFilters,
        c = e.retainFilters,
        d = e.expandFilters,
        f = (0, s.useRef)(),
        p = new URLSearchParams(Ja().search),
        m = p.get("q") || p.get("term"),
        h = p.get("page"),
        b = 10,
        v = l,
        g = (function (e) {
          return (function (e) {
            return (
              !(!e || "string" != typeof e) &&
              /(^|\/\/|\.)blogs?\.nvidia\.com/i.test(e)
            );
          })(e)
            ? Zi(Qi.blogs)
            : Zi(
                "" === Xi ? Qi.otherDomains : Qi[Xi && Qi[Xi] ? Xi : "others"],
              );
        })(v);
      (void 0 === u && (u = ""), void 0 === c && (c = !1));
      var w = Za(),
        y = s.useContext($a).navigationType,
        x = sl((0, s.useState)([]), 2),
        I = x[0],
        k = x[1],
        S = sl((0, s.useState)([]), 2),
        A = S[0],
        N = S[1],
        E = sl((0, s.useState)([]), 2),
        D = E[0],
        _ = E[1],
        L = sl((0, s.useState)(""), 2),
        O = L[0],
        C = L[1],
        R = sl((0, s.useState)([]), 2),
        P = R[0],
        j = R[1],
        T = sl((0, s.useState)(0), 2),
        V = T[0],
        F = T[1],
        z = sl((0, s.useState)(!1), 2),
        M = z[0],
        B = z[1],
        U = sl((0, s.useState)(""), 2),
        H = U[0],
        G = U[1],
        q = sl((0, s.useState)(!1), 2),
        W = q[0],
        $ = q[1],
        K = sl((0, s.useState)(!0), 2),
        X = K[0],
        J = K[1],
        Q = sl((0, s.useState)(1), 2),
        Z = Q[0],
        Y = Q[1],
        ee = sl((0, s.useState)(""), 2),
        ne = (ee[0], ee[1], sl((0, s.useState)(!1), 2)),
        te = ne[0],
        re = ne[1],
        ae = sl((0, s.useState)(!1), 2),
        ie = ae[0],
        le = ae[1],
        oe = sl((0, s.useState)(!1), 2),
        se = oe[0],
        ue = oe[1],
        ce = sl((0, s.useState)(!1), 2),
        de = ce[0],
        fe = ce[1],
        pe = sl((0, s.useState)(0 === u.length), 2),
        me = pe[0],
        he = pe[1],
        be = function () {
          return g.reduce(function (e, n) {
            return (
              Array.isArray(n.asset_values) &&
                n.asset_values.forEach(function (n) {
                  n && n.value && e.push.apply(e, ol(n.value));
                }),
              e
            );
          }, []);
        },
        ve = function () {
          return u.length > 0 ? u.split(",") : [];
        },
        ge = sl(
          (0, s.useState)(function () {
            return ve();
          }),
          2,
        ),
        we = ge[0],
        ye = ge[1],
        xe = sl(
          (0, s.useState)(function () {
            return ve();
          }),
          2,
        ),
        Ie = xe[0],
        ke = xe[1],
        Se = g.reduce(function (e, n) {
          var t;
          return (
            e +
            (null === (t = n.asset_values) || void 0 === t ? void 0 : t.length)
          );
        }, 0);
      ((0, s.useEffect)(function () {
        null === m ||
          "" === m ||
          m.match(/^\s+$/) ||
          (p.get("q") && (null === h || "" === h)) ||
          (G(m),
          J(!0),
          Y(h ? parseInt(h) : 1),
          p.get("q") ||
            !p.get("term") ||
            (h && "" !== h) ||
            w("?term=".concat(encodeURIComponent(m), "&page=1"), {
              replace: !0,
            }));
      }, []),
        (0, s.useEffect)(
          function () {
            V > 0 &&
              (h < 1 || h > Math.ceil(V / b)) &&
              (p.get("q") || h) &&
              (dl && dl.abort(),
              Y(1),
              _e(1, m),
              w("?q=".concat(encodeURIComponent(m), "&page=1")));
          },
          [V],
        ),
        (0, s.useEffect)(
          function () {
            (X &&
              (null === m ||
                "" === m ||
                m.match(/^\s+$/) ||
                (p.get("q") && (null === h || "" === h)) ||
                _e(h || 1, m)),
              we.length < Se ? he(!0) : he(!1));
          },
          [we],
        ),
        (0, s.useEffect)(
          function () {
            H.length >= 1024 && G(H.substring(0, 1024));
          },
          [H],
        ));
      var Ae = function (e) {
        return e && 0 !== e.length
          ? e.map(function (e) {
              var n,
                t,
                r = (function (e) {
                  for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2
                      ? il(Object(t), !0).forEach(function (n) {
                          ll(e, n, t[n]);
                        })
                      : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(t),
                          )
                        : il(Object(t)).forEach(function (n) {
                            Object.defineProperty(
                              e,
                              n,
                              Object.getOwnPropertyDescriptor(t, n),
                            );
                          });
                  }
                  return e;
                })({}, e);
              return (
                r.text && (r.text = De(r.text)),
                r.document_title && (r.document_title = De(r.document_title)),
                r.document_url &&
                  (r.display_url =
                    null === (n = r.document_url) || void 0 === n
                      ? void 0
                      : n.replace(/\bansel\b/gi, "photo-mode")),
                r.url &&
                  (r.display_url =
                    null === (t = r.url) || void 0 === t
                      ? void 0
                      : t.replace(/\bansel\b/gi, "photo-mode")),
                r
              );
            })
          : e;
      };
      function Ne(e, n, t) {
        return Ee.apply(this, arguments);
      }
      function Ee() {
        return (
          (Ee = al(
            nl().m(function e(t, r, i) {
              var l, o, s;
              return nl().w(function (e) {
                for (;;)
                  switch (e.n) {
                    case 0:
                      return (
                        C(""),
                        dl && dl.abort(),
                        B(!0),
                        (l = a(425)),
                        (o = JSON.stringify({
                          query: t,
                          k: 100,
                          channel: i,
                          asset_types: we.length > 0 ? ol(we) : be(),
                        })),
                        (s = {
                          method: "post",
                          maxBodyLength: 1 / 0,
                          url: "https://www".concat(
                            "",
                            ".nvidia.com/ai-agents/chimera/search",
                          ),
                          headers: { "Content-Type": "application/json" },
                          data: o,
                        }),
                        (n = performance.now()),
                        (e.n = 1),
                        l
                          .request(s)
                          .then(function (e) {
                            var n = e.data.results,
                              t = Ae(n);
                            e.data.results ? k(t) : k([]);
                            var a = t.slice((r - 1) * b, r * b);
                            (N(a),
                              $(!1),
                              F(t.length),
                              0 === t.length ? fe(!0) : fe(!1));
                          })
                          .catch(function (e) {
                            var n;
                            (console.error("Error in /search API: ", e),
                              $(!0),
                              (n = e.response
                                ? e.response.status
                                : e.request
                                  ? e.request.status
                                  : e.message));
                            var r = new CustomEvent("chimeraRedirectToVertex", {
                              detail: { searchQuery: t, errorCode: n },
                            });
                            document.dispatchEvent(r);
                          })
                      );
                    case 1:
                      (B(!1), J(!1));
                    case 2:
                      return e.a(2);
                  }
              }, e);
            }),
          )),
          Ee.apply(this, arguments)
        );
      }
      var De = function (e) {
          return e && "string" == typeof e
            ? (e = (e = (e = e.replace(
                /\bansel\s+photo\s+mode\b/gi,
                "Photo Mode",
              )).replace(/\bansel\b/gi, "Photo Mode")).replace(
                /photo\s+mode\s+photo\s+mode/gi,
                "Photo Mode",
              ))
            : e;
        },
        _e = function (e, i) {
          if ("" !== i || !i.match(/^\s+$/) || null !== i) {
            B(!0);
            var l = a(425),
              s = {
                variables: {
                  input: { query: i },
                  context: {
                    site: v,
                    lang: Bn || "en-us",
                    searchId: "ab0dd5a5-e266-4b0a-a482-c706e6bed0fe",
                  },
                },
                query:
                  "query Q($input: SearchInput!, $context: SearchContextInput!) {\n    promotions(input: $input, context: $context) {\n    id\n    url\n    displayUrl\n    image\n    landscapeImage\n    title\n    promotype\n    summary\n    keywords\n    __typename\n  }\n}\n",
              };
            (l
              .post("https://api-prod.nvidia.com/search/graphql", s)
              .then(function (e) {
                var n = [];
                (e.data.data.promotions.length > 0 &&
                  e.data.data.promotions.map(function (e) {
                    "suggestion" === e.promotype && n.push(e);
                  }),
                  n.length > 0 ? _(n) : _([]));
              })
              .catch(function (e) {
                (console.error(
                  "Error in promos API: ",
                  e.response ? e.response.data : e.message,
                ),
                  B(!1));
              }),
              "true" === o
                ? (function (e, a) {
                    ue(!0);
                    var i = {
                      method: "post",
                      maxBodyLength: 1 / 0,
                      url: "https://www".concat(
                        "",
                        ".nvidia.com/ai-agents/chimera/create-channel",
                      ),
                    };
                    Sn.request(i)
                      .then(function (i) {
                        (Ne(e, a, i.data.channel),
                          (function (e) {
                            (B(!0), C(""), j([]));
                            var a = (dl = new AbortController()).signal;
                            (fetch(
                              "https://www"
                                .concat(
                                  "",
                                  ".nvidia.com/ai-agents/chimera/stream?channel=",
                                )
                                .concat(e),
                              {
                                method: "GET",
                                headers: { Accept: "text/event-stream" },
                                signal: a,
                              },
                            )
                              .then(
                                (function () {
                                  var e = al(
                                    nl().m(function e(a) {
                                      var i, l, o, s;
                                      return nl().w(function (e) {
                                        for (;;)
                                          switch (e.n) {
                                            case 0:
                                              ((i = a.body.getReader()),
                                                (l = new TextDecoder()),
                                                (o = !1),
                                                (s = nl().m(function e() {
                                                  var a,
                                                    s,
                                                    u,
                                                    c,
                                                    d,
                                                    f,
                                                    p,
                                                    m,
                                                    h,
                                                    b,
                                                    v,
                                                    g,
                                                    w,
                                                    y,
                                                    x,
                                                    I;
                                                  return nl().w(function (e) {
                                                    for (;;)
                                                      switch (e.n) {
                                                        case 0:
                                                          return (
                                                            (e.n = 1),
                                                            i.read()
                                                          );
                                                        case 1:
                                                          if (
                                                            ((a = e.v),
                                                            (s = a.done),
                                                            (u = a.value),
                                                            !s)
                                                          ) {
                                                            e.n = 2;
                                                            break;
                                                          }
                                                          return (
                                                            le(!1),
                                                            ue(!1),
                                                            C(function (e) {
                                                              return De(e);
                                                            }),
                                                            e.a(2, 1)
                                                          );
                                                        case 2:
                                                          (le(!0),
                                                            (c = l.decode(u, {
                                                              stream: !0,
                                                            })),
                                                            (d =
                                                              c.indexOf(
                                                                "event:generation",
                                                              )),
                                                            o ||
                                                              -1 === d ||
                                                              ((o = !0),
                                                              (t =
                                                                performance.now()),
                                                              (r =
                                                                (t - n) /
                                                                1e3) &&
                                                                ((f =
                                                                  new CustomEvent(
                                                                    "timeToFirstToken",
                                                                    {
                                                                      detail: {
                                                                        ttft: r,
                                                                      },
                                                                    },
                                                                  )),
                                                                document.dispatchEvent(
                                                                  f,
                                                                ))),
                                                            (p =
                                                              /event:generation\s+data:\{"message": "(.*?)"\}/g),
                                                            (m = ol(
                                                              c.matchAll(p),
                                                            ).map(function (e) {
                                                              return e[1];
                                                            })),
                                                            (h = m.join("")),
                                                            C(function (e) {
                                                              return De(e + h);
                                                            }),
                                                            (b =
                                                              /event:related\s+data:\{"message": "(.*?)"\}/g),
                                                            1 ===
                                                              (v = ol(
                                                                c.matchAll(b),
                                                              ).map(
                                                                function (e) {
                                                                  return e[1];
                                                                },
                                                              )).length &&
                                                              ((g = v[0]
                                                                .split("[")[1]
                                                                .split("]")[0]
                                                                .split(",")),
                                                              (w = []),
                                                              (w =
                                                                g.length > 5
                                                                  ? g.slice(
                                                                      0,
                                                                      5,
                                                                    )
                                                                  : g.slice(
                                                                      0,
                                                                      g.length,
                                                                    )),
                                                              (y = w.map(
                                                                function (e) {
                                                                  return e.trim();
                                                                },
                                                              )),
                                                              (x = y.map(
                                                                function (e) {
                                                                  return e.substring(
                                                                    2,
                                                                    e.length -
                                                                      2,
                                                                  );
                                                                },
                                                              )),
                                                              (I = x.map(
                                                                function (e) {
                                                                  return De(e);
                                                                },
                                                              )),
                                                              j(I)),
                                                            /event:close/g.test(
                                                              c,
                                                            ) &&
                                                              (le(!1),
                                                              ue(!1),
                                                              C(function (e) {
                                                                return De(e);
                                                              })));
                                                        case 3:
                                                          return e.a(2);
                                                      }
                                                  }, e);
                                                })));
                                            case 1:
                                              return e.d(el(s()), 2);
                                            case 2:
                                              if (!e.v) {
                                                e.n = 3;
                                                break;
                                              }
                                              return e.a(3, 4);
                                            case 3:
                                              e.n = 1;
                                              break;
                                            case 4:
                                              B(!1);
                                            case 5:
                                              return e.a(2);
                                          }
                                      }, e);
                                    }),
                                  );
                                  return function (n) {
                                    return e.apply(this, arguments);
                                  };
                                })(),
                              )
                              .catch(function (e) {
                                (B(!1),
                                  "AbortError" !==
                                    (null == e ? void 0 : e.name) && ue(!1));
                              }),
                              J(!1));
                          })(i.data.channel),
                          $(!1));
                      })
                      .catch(function (n) {
                        (console.error("Error in /create-channel API: ", n),
                          $(!0),
                          ue(!1),
                          Ne(e, a));
                      });
                  })(i, e)
                : Ne(i, e));
          }
        },
        Le = function (e) {
          var n = e.every(function (e) {
            return we.includes(e);
          });
          (dl && dl.abort(),
            ye(
              n
                ? we.filter(function (n) {
                    return !e.includes(n);
                  })
                : [].concat(
                    ol(we),
                    ol(
                      e.filter(function (e) {
                        return !we.includes(e);
                      }),
                    ),
                  ),
            ));
        },
        Oe = function () {
          (ke(ol(we)),
            X
              ? null === m ||
                "" === m ||
                m.match(/^\s+$/) ||
                (p.get("q") && (null === h || "" === h)) ||
                _e(h || 1, m)
              : (C(""),
                j([]),
                k([]),
                G(m),
                w("?q=".concat(encodeURIComponent(m), "&page=1")),
                _e(1, m),
                Y(1)));
        },
        Ce = function () {
          g.reduce(function (e, n) {
            return (
              Array.isArray(n.asset_values) &&
                n.asset_values.forEach(function (n) {
                  n && n.value && e.push.apply(e, ol(n.value));
                }),
              e
            );
          }, []);
          var e = u.length > 0 ? u.split(",") : [];
          (ye(e),
            ke(e),
            J(!0),
            dl && dl.abort(),
            e.length < Se ? he(!0) : he(!1));
        },
        Re = function () {
          ye([]);
        },
        Pe = function () {
          var e = g.reduce(function (e, n) {
            return (
              Array.isArray(n.asset_values) &&
                n.asset_values.forEach(function (n) {
                  n && n.value && e.push.apply(e, ol(n.value));
                }),
              e
            );
          }, []);
          ye(e);
        };
      return (
        (0, s.useEffect)(
          function () {
            if ("POP" === y) {
              var e = m,
                n = parseInt(h || "1", 10),
                t = Number.isNaN(n) ? 1 : n;
              null === e ||
                "" === e ||
                e.match(/^\s+$/) ||
                (p.get("q") && (null === h || "" === h)) ||
                (dl && dl.abort(), G(e), Y(t), J(!0), _e(t, e));
            }
          },
          [y, m, h],
        ),
        W
          ? (0, Un.jsx)(Ei, {})
          : (0, Un.jsxs)(Un.Fragment, {
              children: [
                (0, Un.jsx)("div", { id: "focus-scroll-container" }),
                (0, Un.jsx)("div", {
                  className:
                    "nv-container container responsivegrid aem-GridColumn aem-GridColumn--default--12",
                  children: (0, Un.jsxs)("div", {
                    className: "general-container librarian-results-layout",
                    children: [
                      W || de || !m
                        ? (0, Un.jsx)(Un.Fragment, {})
                        : (0, Un.jsxs)("div", {
                            className:
                              "librarian-recommendedForYouDesktopAndLaptop",
                            children: [
                              (0, Un.jsx)(hi, {
                                librarianSiteFilters: g,
                                selectedFilters: we,
                                appliedFilters: Ie,
                                handleSelectedFilters: Le,
                                initialLoad: X,
                                dataLength: I.length,
                                expandFilters: d,
                                selectAllFilters: Pe,
                                deselectAllFilters: Re,
                                resetFilters: Ce,
                                showSelectAll: me,
                                setShowSelectAll: he,
                                applyFilters: Oe,
                              }),
                              (0, Un.jsx)("div", {
                                id: "search-promo-container",
                              }),
                            ],
                          }),
                      (0, Un.jsxs)("div", {
                        className: "librarian-box-container",
                        children: [
                          (0, Un.jsxs)("div", {
                            className: "librarian-search-row",
                            children: [
                              (0, Un.jsxs)("form", {
                                onSubmit: function (e) {
                                  (e.preventDefault(),
                                    dl && dl.abort(),
                                    (function (e) {
                                      if (
                                        (Y(1),
                                        "" !== e && !e.match(/^\s+$/) && !M)
                                      )
                                        if (
                                          (w(
                                            "?q=".concat(
                                              encodeURIComponent(e),
                                              "&page=1",
                                            ),
                                          ),
                                          k([]),
                                          N([]),
                                          _([]),
                                          C(""),
                                          j([]),
                                          fe(!1),
                                          J(!0),
                                          c)
                                        )
                                          null === e ||
                                            "" === e ||
                                            e.match(/^\s+$/) ||
                                            _e(1, e);
                                        else {
                                          var n = ve();
                                          (ye(n), ke(n));
                                        }
                                    })(H));
                                },
                                className:
                                  "librarian-search-input-wrapper rotating-gradient-border",
                                children: [
                                  (0, Un.jsx)("span", {
                                    className: "librarian-search-ai-icon",
                                    "aria-hidden": "true",
                                    children: (0, Un.jsx)(aa, {}),
                                  }),
                                  (0, Un.jsx)("input", {
                                    id: "search-bar-results-page",
                                    type: "text",
                                    autoComplete: "off",
                                    placeholder: i || fl.defaultPlaceholder,
                                    ref: f,
                                    value: H,
                                    className: "librarian-search-input",
                                    onChange: function (e) {
                                      return G(e.target.value);
                                    },
                                  }),
                                  "" !== H &&
                                    !H.match(/^\s+$/) &&
                                    (0, Un.jsx)("button", {
                                      type: "button",
                                      className: "librarian-cross-icon",
                                      "aria-label": "cross-button",
                                      onClick: function () {
                                        return G("");
                                      },
                                      children: (0, Un.jsx)(la, {}),
                                    }),
                                  (0, Un.jsx)("button", {
                                    type: "submit",
                                    disabled: !H || H.match(/^\s+$/),
                                    className: "librarian-paperplane-icon",
                                    "aria-label": "submit-button",
                                    children: (0, Un.jsx)(ra, {}),
                                  }),
                                ],
                              }),
                              W || de || !m
                                ? (0, Un.jsx)(Un.Fragment, {})
                                : (0, Un.jsxs)("div", {
                                    onClick: function () {
                                      X && !I.length > 0 ? re(!1) : re(!te);
                                    },
                                    className:
                                      "librarian-showFilterIcon ".concat(
                                        te
                                          ? "librarian-showFilterIcon-opened"
                                          : "",
                                      ),
                                    children: [
                                      (0, Un.jsx)("svg", {
                                        width: "20",
                                        height: "14",
                                        viewBox: "0 0 20 14",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: (0, Un.jsx)("path", {
                                          stroke: "".concat(
                                            te ? "#76b900" : "black",
                                          ),
                                          d: "M0 1H20M4 7H16M8 13H12",
                                          strokeWidth: "2",
                                        }),
                                      }),
                                      (0, Un.jsx)("p", {
                                        className: "".concat(
                                          te
                                            ? "librarian-showFilterIcon-label"
                                            : "",
                                        ),
                                        children: fl.filtersButtonLabel,
                                      }),
                                    ],
                                  }),
                            ],
                          }),
                          W || de || !m
                            ? (0, Un.jsx)(Un.Fragment, {})
                            : (0, Un.jsx)(ki, {
                                showFilters: te,
                                librarianSiteFilters: g,
                                selectedFilters: we,
                                appliedFilters: Ie,
                                handleSelectedFilters: Le,
                                closeMobileFilters: function () {
                                  re(!1);
                                },
                                resetFilters: Ce,
                                initialLoad: X,
                                dataLength: I.length,
                                selectAllFilters: Pe,
                                deselectAllFilters: Re,
                                showSelectAll: me,
                                setShowSelectAll: he,
                                applyFilters: Oe,
                              }),
                          !W &&
                            !de &&
                            "true" === o &&
                            (se || 0 !== O.length) &&
                            (0, Un.jsx)("div", {
                              className: "librarian-genai-summery".concat(
                                1 === Z
                                  ? " librarian-genai-summery-active"
                                  : "",
                              ),
                              children: (0, Un.jsx)(Ia, {
                                activePage: Z,
                                query: m,
                                summaryText: O,
                                results: I,
                                isGenerating: ie || (se && 0 === O.length),
                              }),
                            }),
                          (0, Un.jsxs)("div", {
                            className: "librarian-page-cascade".concat(
                              !M && (I.length > 0 || de)
                                ? " librarian-page-cascade-ready"
                                : "",
                            ),
                            children: [
                              !W &&
                                1 === Z &&
                                0 !== P.length &&
                                I.length > 0 &&
                                (0, Un.jsxs)("div", {
                                  className: "librarian-search-refinements",
                                  children: [
                                    (0, Un.jsx)("p", {
                                      className:
                                        "librarian-search-refinements-header",
                                      children: fl.searchRefinementsLabel,
                                    }),
                                    (0, Un.jsx)("div", {
                                      className:
                                        "librarian-search-refinements-container",
                                      children: P.map(function (e, n) {
                                        return (0, Un.jsx)(
                                          "div",
                                          {
                                            className:
                                              "librarian-search-refinements-capsule",
                                            onClick: function () {
                                              return (function (e) {
                                                var n;
                                                if (
                                                  ((n = document.getElementById(
                                                    "focus-scroll-container",
                                                  )) &&
                                                    (n.focus({
                                                      preventScroll: !0,
                                                    }),
                                                    setTimeout(function () {
                                                      n.scrollIntoView({
                                                        behavior: "smooth",
                                                        block: "center",
                                                      });
                                                    }, 100)),
                                                  G(e),
                                                  w(
                                                    "?q=".concat(
                                                      encodeURIComponent(e),
                                                      "&page=1",
                                                    ),
                                                  ),
                                                  k([]),
                                                  N([]),
                                                  _([]),
                                                  C(""),
                                                  j([]),
                                                  fe(!1),
                                                  J(!0),
                                                  c)
                                                )
                                                  _e(1, e);
                                                else {
                                                  var t = ve();
                                                  (ye(t), ke(t));
                                                }
                                              })(e);
                                            },
                                            children: e,
                                          },
                                          n,
                                        );
                                      }),
                                    }),
                                  ],
                                }),
                              (0, Un.jsxs)("div", {
                                className: "librarian-result-count-and-promos",
                                children: [
                                  !W &&
                                    !X &&
                                    !M &&
                                    I.length > 0 &&
                                    (0, Un.jsxs)("div", {
                                      children: [
                                        (0, Un.jsxs)("p", {
                                          className: "librarian-results-count",
                                          children: [
                                            (Z - 1) * b + 1,
                                            "-",
                                            Z * b < V ? Z * b : V,
                                            " ",
                                            fl.resultsOfLabel,
                                            " ",
                                            V,
                                          ],
                                        }),
                                        (0, Un.jsx)("hr", {
                                          className:
                                            "librarian-results-divider",
                                        }),
                                      ],
                                    }),
                                  !W &&
                                    1 === Z &&
                                    !M &&
                                    !de &&
                                    (D.length > 0
                                      ? (0, Un.jsx)(Na, { promos: D })
                                      : (0, Un.jsx)(Un.Fragment, {})),
                                ],
                              }),
                              M &&
                                "true" !== o &&
                                (0, Un.jsx)("div", {
                                  className: "librarian-loader-container",
                                  children: (0, Un.jsx)(zr, {}),
                                }),
                              I.length > 0 &&
                                (0, Un.jsxs)(Un.Fragment, {
                                  children: [
                                    M
                                      ? (0, Un.jsx)(Un.Fragment, {})
                                      : (0, Un.jsx)(Hn, {
                                          results: A,
                                          currentPage: Z,
                                          pageSize: b,
                                        }),
                                    (0, Un.jsx)(Zr, {
                                      currentPage: Z,
                                      totalSize: V,
                                      isLoading: M,
                                      handleActivePage: function (e) {
                                        (Y(e),
                                          w(
                                            "?q="
                                              .concat(
                                                encodeURIComponent(H),
                                                "&page=",
                                              )
                                              .concat(e),
                                          ),
                                          window.scrollTo(0, 0));
                                        var n = e * b,
                                          t = n - b,
                                          r = I.slice(t, n);
                                        N(r);
                                      },
                                      pageSize: b,
                                    }),
                                  ],
                                }),
                              de && (0, Un.jsx)(ii, { searchTerm: m }),
                            ],
                          }),
                          (0, Un.jsx)("div", { id: "target-div" }),
                          de
                            ? (0, Un.jsx)(Un.Fragment, {})
                            : X
                              ? !M &&
                                I.length > 0 &&
                                (0, Un.jsx)("div", {
                                  className:
                                    "librarian-recommendedForYouMobileandTablet",
                                  children: (0, Un.jsx)("div", {
                                    id: "mobile-generated-banner-list",
                                  }),
                                })
                              : (0, Un.jsx)("div", {
                                  className:
                                    "librarian-recommendedForYouMobileandTablet",
                                  children: (0, Un.jsx)("div", {
                                    id: "mobile-generated-banner-list",
                                  }),
                                }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            })
      );
    };
    var ml = a(625),
      hl = {};
    ((hl.styleTagTransform = Tn()),
      (hl.setAttributes = Cn()),
      (hl.insert = Ln().bind(null, "head")),
      (hl.domAPI = Dn()),
      (hl.insertStyleElement = Pn()),
      Nn()(ml.A, hl),
      ml.A && ml.A.locals && ml.A.locals);
    var bl = {
        color: void 0,
        size: void 0,
        className: void 0,
        style: void 0,
        attr: void 0,
      },
      vl = s.createContext && s.createContext(bl),
      gl = function () {
        return (
          (gl =
            Object.assign ||
            function (e) {
              for (var n, t = 1, r = arguments.length; t < r; t++)
                for (var a in (n = arguments[t]))
                  Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              return e;
            }),
          gl.apply(this, arguments)
        );
      };
    function wl(e) {
      return (
        e &&
        e.map(function (e, n) {
          return s.createElement(e.tag, gl({ key: n }, e.attr), wl(e.child));
        })
      );
    }
    function yl(e) {
      return function (n) {
        return s.createElement(
          xl,
          gl({ attr: gl({}, e.attr) }, n),
          wl(e.child),
        );
      };
    }
    function xl(e) {
      var n = function (n) {
        var t,
          r = e.attr,
          a = e.size,
          i = e.title,
          l = (function (e, n) {
            var t = {};
            for (var r in e)
              Object.prototype.hasOwnProperty.call(e, r) &&
                n.indexOf(r) < 0 &&
                (t[r] = e[r]);
            if (
              null != e &&
              "function" == typeof Object.getOwnPropertySymbols
            ) {
              var a = 0;
              for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
                n.indexOf(r[a]) < 0 &&
                  Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
                  (t[r[a]] = e[r[a]]);
            }
            return t;
          })(e, ["attr", "size", "title"]),
          o = a || n.size || "1em";
        return (
          n.className && (t = n.className),
          e.className && (t = (t ? t + " " : "") + e.className),
          s.createElement(
            "svg",
            gl(
              {
                stroke: "currentColor",
                fill: "currentColor",
                strokeWidth: "0",
              },
              n.attr,
              r,
              l,
              {
                className: t,
                style: gl(gl({ color: e.color || n.color }, n.style), e.style),
                height: o,
                width: o,
                xmlns: "http://www.w3.org/2000/svg",
              },
            ),
            i && s.createElement("title", null, i),
            e.children,
          )
        );
      };
      return void 0 !== vl
        ? s.createElement(vl.Consumer, null, function (e) {
            return n(e);
          })
        : n(bl);
    }
    function Il(e) {
      return yl({
        tag: "svg",
        attr: {
          version: "1.1",
          id: "search",
          x: "0px",
          y: "0px",
          viewBox: "0 0 24 24",
          style: "enable-background:new 0 0 24 24;",
        },
        child: [
          {
            tag: "g",
            attr: {},
            child: [
              {
                tag: "path",
                attr: {
                  d: "M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31\n\t\tc0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z\n\t\t M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02\n\t\tz",
                },
              },
            ],
          },
        ],
      })(e);
    }
    var kl = a(321),
      Sl = {};
    function Al(e, n) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, n) {
          var t =
            null == e
              ? null
              : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
          if (null != t) {
            var r,
              a,
              i,
              l,
              o = [],
              s = !0,
              u = !1;
            try {
              if (((i = (t = t.call(e)).next), 0 === n)) {
                if (Object(t) !== t) return;
                s = !1;
              } else
                for (
                  ;
                  !(s = (r = i.call(t)).done) &&
                  (o.push(r.value), o.length !== n);
                  s = !0
                );
            } catch (e) {
              ((u = !0), (a = e));
            } finally {
              try {
                if (
                  !s &&
                  null != t.return &&
                  ((l = t.return()), Object(l) !== l)
                )
                  return;
              } finally {
                if (u) throw a;
              }
            }
            return o;
          }
        })(e, n) ||
        (function (e, n) {
          if (e) {
            if ("string" == typeof e) return Nl(e, n);
            var t = {}.toString.call(e).slice(8, -1);
            return (
              "Object" === t && e.constructor && (t = e.constructor.name),
              "Map" === t || "Set" === t
                ? Array.from(e)
                : "Arguments" === t ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                  ? Nl(e, n)
                  : void 0
            );
          }
        })(e, n) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        })()
      );
    }
    function Nl(e, n) {
      (null == n || n > e.length) && (n = e.length);
      for (var t = 0, r = Array(n); t < n; t++) r[t] = e[t];
      return r;
    }
    ((Sl.styleTagTransform = Tn()),
      (Sl.setAttributes = Cn()),
      (Sl.insert = Ln().bind(null, "head")),
      (Sl.domAPI = Dn()),
      (Sl.insertStyleElement = Pn()),
      Nn()(kl.A, Sl),
      kl.A && kl.A.locals && kl.A.locals);
    const El = function (e) {
      var n,
        t = e.placeholderText,
        r = e.overlayHeading,
        a = e.page,
        i = e.searchRedirectPath,
        l = e.suggestedSearchPills,
        o = e.overlay,
        u = void 0 === o || o,
        c = e.expandPills,
        d = void 0 !== c && c,
        f = Jr(Bn),
        p = l && l.length > 0 ? l : f.defaultSearchPills || [],
        m = !1 === u,
        h = Al((0, s.useState)(m), 2),
        b = h[0],
        v = h[1],
        g = Al((0, s.useState)(""), 2),
        w = g[0],
        y = g[1],
        x = Al((0, s.useState)(!0 === d), 2),
        I = x[0],
        k = x[1],
        S = (0, s.useRef)(),
        A = (0, s.useRef)(),
        N = (0, s.useRef)(null),
        E = (0, s.useRef)(null),
        D = (0, s.useRef)(null),
        _ = (0, s.useRef)(null),
        L = (0, s.useRef)(null),
        O = Bn ? "".concat(Bn, "/") : "";
      n = "".concat(window.location.origin, "/").concat(O, "search/");
      var C =
          "localhost" === window.location.hostname ||
          "127.0.0.1" === window.location.hostname,
        R = function (e) {
          "docs" === a ||
            m ||
            (S.current &&
              !S.current.contains(e.target) &&
              (v(!1),
              E.current &&
                ((E.current.style.display = "block"), E.current.focus()),
              D.current && D.current.classList.add("hide"),
              _.current &&
                ((_.current.style.display = "block"), _.current.focus()),
              L.current && L.current.classList.add("hide")));
        },
        P = function () {
          (v(!b),
            (document.querySelector(".close-x").style.display = "none"),
            (document.querySelector(".icon-search").style.display = ""));
        };
      ((0, s.useEffect)(function () {
        if (!m) {
          var e = document.getElementById("nv-search-box"),
            n = document.getElementById("cancel-nv-search-box"),
            t = document.getElementById("nv-search-box-mobile"),
            r = document.getElementById("cancel-nv-search-box-mobile"),
            a = document.getElementById("nv-search-box-doc");
          ((E.current = e), (D.current = n), (_.current = t), (L.current = r));
          var i = function (e) {
              return "Enter" === e || "ArrowUp" === e || "ArrowDown" === e;
            },
            l = function (e) {
              i(e.key) && (e.preventDefault(), T());
            },
            o = function (e) {
              i(e.key) && (e.preventDefault(), V());
            };
          return (
            E.current &&
              (E.current.addEventListener("click", T),
              E.current.addEventListener("keydown", l)),
            D.current &&
              (D.current.addEventListener("click", V),
              D.current.addEventListener("keydown", o)),
            _.current &&
              (_.current.addEventListener("click", T),
              _.current.addEventListener("keydown", l)),
            L.current &&
              (L.current.addEventListener("click", V),
              L.current.addEventListener("keydown", o)),
            a && a.addEventListener("click", P),
            document.addEventListener("mousedown", R),
            function () {
              (E.current &&
                (E.current.removeEventListener("click", T),
                E.current.removeEventListener("keydown", l)),
                D.current &&
                  (D.current.removeEventListener("click", V),
                  D.current.removeEventListener("keydown", o)),
                _.current &&
                  (_.current.removeEventListener("click", T),
                  _.current.removeEventListener("keydown", l)),
                L.current &&
                  (L.current.removeEventListener("click", V),
                  L.current.removeEventListener("keydown", o)),
                a && a.removeEventListener("click", P),
                document.removeEventListener("mousedown", R));
            }
          );
        }
      }, []),
        (0, s.useEffect)(
          function () {
            if (!m) {
              var e = document.getElementsByTagName("body")[0];
              ((N.current = e),
                "docs" !== a &&
                  (b
                    ? (A.current.focus(), (N.current.style.overflow = "hidden"))
                    : (N.current.style.overflow = "hidden auto")));
            }
          },
          [b],
        ),
        (0, s.useEffect)(
          function () {
            b && w.length >= 1024 && y(w.substring(0, 1024));
          },
          [w],
        ));
      var j = function (e) {
          if (e && !e.match(/^\s+$/)) {
            y(e);
            var t = new URLSearchParams({ q: e, page: 1 }),
              r =
                "docs" === a
                  ? "".concat(i, "?").concat(t.toString())
                  : "".concat(i || n, "?").concat(t.toString());
            window.location.href = r;
          }
        },
        T = function () {
          (v(!0),
            E.current && (E.current.style.display = "none"),
            D.current && D.current.classList.remove("hide"),
            _.current && (_.current.style.display = "none"),
            L.current && L.current.classList.remove("hide"));
        },
        V = function () {
          (v(!1),
            E.current && (E.current.style.display = "block"),
            D.current && D.current.classList.add("hide"),
            _.current && (_.current.style.display = "block"),
            L.current && L.current.classList.add("hide"));
        },
        F = (0, Un.jsx)("div", {
          className: "librarian-overlay-container".concat(
            m ? " librarian-inline-container" : "",
          ),
          ref: S,
          children: (0, Un.jsxs)("div", {
            className: "general-container",
            children: [
              (0, Un.jsxs)("div", {
                className: "librarian-overlay-topWrapper",
                children: [
                  !m &&
                    (0, Un.jsx)("div", {
                      className: "librarian-overlay-text-container",
                      children: (0, Un.jsx)("h1", {
                        className: "librarian-overlay-text",
                        children: r || f.overlayHeading,
                      }),
                    }),
                  (0, Un.jsxs)("form", {
                    role: "search",
                    id: "librarian-search-form",
                    action: i || n,
                    tabIndex: "0",
                    __bizdiag: "-1902636770",
                    __biza: "WJ__",
                    className:
                      "search-form librarian-search-input-wrapper librarian-search-input-home rotating-gradient-border",
                    onSubmit: function (e) {
                      (("" === i || w.match(/^\s+$/)) &&
                        (window.location.href = ""
                          .concat(i, "?")
                          .concat(params.toString())),
                        "docs" === a &&
                          setTimeout(function () {
                            var e = new URLSearchParams({ q: w, page: 1 });
                            window.location.href = ""
                              .concat(i, "?")
                              .concat(e.toString());
                          }, 0));
                    },
                    children: [
                      (0, Un.jsx)("span", {
                        className: "librarian-search-ai-icon",
                        "aria-hidden": "true",
                        children: (0, Un.jsx)(aa, {}),
                      }),
                      (0, Un.jsx)("input", {
                        "aria-label": "Search",
                        "data-search-box-input": "",
                        id: "search-bar-home-page",
                        name: "q",
                        autoComplete: "off",
                        ref: A,
                        type: "text",
                        placeholder: t || f.defaultPlaceholder,
                        value: w,
                        className: "librarian-search-input placeholder",
                        onChange: function (e) {
                          return y(e.target.value);
                        },
                        onKeyDown: function (e) {
                          if ("ArrowDown" === e.key) {
                            var n = document.querySelector(
                              ".librarian-suggestedPillsContainer .librarian-suggestedPills",
                            );
                            n && (e.preventDefault(), n.focus());
                          }
                        },
                      }),
                      (0, Un.jsx)("input", {
                        type: "hidden",
                        name: "page",
                        id: "page",
                        value: "1",
                      }),
                      "" !== w &&
                        !w.match(/^\s+$/) &&
                        (0, Un.jsx)("button", {
                          type: "button",
                          className: "librarian-cross-icon",
                          "aria-label": "cross-button",
                          onClick: function () {
                            return y("");
                          },
                          children: (0, Un.jsx)(la, {}),
                        }),
                      (0, Un.jsx)("button", {
                        type: "submit",
                        disabled: !w || w.match(/^\s+$/),
                        className: "librarian-paperplane-icon",
                        "aria-label": "submit-button",
                        children: (0, Un.jsx)(ra, {}),
                      }),
                    ],
                  }),
                ],
              }),
              p.length > 0 &&
                (0, Un.jsxs)("div", {
                  className: "librarian-suggestedPillsWrapper",
                  children: [
                    (0, Un.jsxs)("button", {
                      type: "button",
                      className: "librarian-try-searches-header",
                      "aria-expanded": I,
                      "aria-controls": "librarian-suggested-pills-list",
                      onClick: function () {
                        return k(function (e) {
                          return !e;
                        });
                      },
                      children: [
                        (0, Un.jsx)("span", { children: f.trySearchesLabel }),
                        (0, Un.jsx)("span", {
                          className: "librarian-try-searches-chevron".concat(
                            I ? " librarian-rotated" : "",
                          ),
                          "aria-hidden": "true",
                          children: (0, Un.jsx)(ia, {}),
                        }),
                      ],
                    }),
                    I &&
                      (0, Un.jsx)("div", {
                        id: "librarian-suggested-pills-list",
                        className: "librarian-suggestedPillsContainer",
                        children: p.slice(0, 15).map(function (e, n, t) {
                          return (0, Un.jsx)(
                            "div",
                            {
                              className: "librarian-suggestedPills",
                              role: "button",
                              "aria-label": "Try search ".concat(e),
                              tabIndex: "0",
                              onClick: function () {
                                return j(e);
                              },
                              onKeyDown: function (r) {
                                return (function (e, n, t, r, a) {
                                  if ("Enter" === e.key || " " === e.key)
                                    return (e.preventDefault(), void j(r));
                                  if ("ArrowDown" !== e.key)
                                    if ("ArrowUp" !== e.key) {
                                      if (t && "Tab" === e.key && !e.shiftKey)
                                        if ((e.preventDefault(), D.current))
                                          D.current.focus();
                                        else {
                                          var i = document.getElementById(
                                              "cancel-nv-search-box",
                                            ),
                                            l = document.getElementById(
                                              "cancel-nv-search-box-mobile",
                                            );
                                          (i && i.focus(), l && l.focus());
                                        }
                                    } else {
                                      e.preventDefault();
                                      var o = document.querySelector(
                                        ".librarian-suggestedPillsContainer .librarian-suggestedPills:nth-child(".concat(
                                          n,
                                          ")",
                                        ),
                                      );
                                      o
                                        ? o.focus()
                                        : A.current && A.current.focus();
                                    }
                                  else {
                                    if ((e.preventDefault(), n === a - 1))
                                      return void (
                                        D.current && D.current.focus()
                                      );
                                    var s = document.querySelector(
                                      ".librarian-suggestedPillsContainer .librarian-suggestedPills:nth-child(".concat(
                                        n + 2,
                                        ")",
                                      ),
                                    );
                                    s && s.focus();
                                  }
                                })(r, n, n === t.length - 1, e, t.length);
                              },
                              children: e,
                            },
                            n,
                          );
                        }),
                      }),
                  ],
                }),
            ],
          }),
        });
      return m
        ? (0, Un.jsx)("div", { className: "librarian-inline", children: F })
        : (0, Un.jsxs)(Un.Fragment, {
            children: [
              C &&
                (0, Un.jsx)(Il, {
                  role: "button",
                  id: "nv-search-box",
                  className: "librarian-search-icon",
                  tabIndex: "0",
                }),
              b &&
                (0, Un.jsx)("div", {
                  className: "librarian-overlay",
                  children: F,
                }),
            ],
          });
    };
    var Dl = a(961),
      _l = a.t(Dl, 2);
    new Set([
      "application/x-www-form-urlencoded",
      "multipart/form-data",
      "text/plain",
    ]);
    try {
      window.__reactRouterVersion = "6";
    } catch (e) {}
    new Map();
    const Ll = u.startTransition;
    function Ol(e) {
      let { basename: n, children: t, future: r, window: a } = e,
        i = s.useRef();
      null == i.current &&
        (i.current = (function (e) {
          return (
            void 0 === e && (e = {}),
            (function (e, n, t, r) {
              void 0 === r && (r = {});
              let { window: a = document.defaultView, v5Compat: i = !1 } = r,
                l = a.history,
                o = Da.Pop,
                s = null,
                u = c();
              function c() {
                return (l.state || { idx: null }).idx;
              }
              function d() {
                o = Da.Pop;
                let e = c(),
                  n = null == e ? null : e - u;
                ((u = e),
                  s && s({ action: o, location: p.location, delta: n }));
              }
              function f(e) {
                let n =
                    "null" !== a.location.origin
                      ? a.location.origin
                      : a.location.href,
                  t = "string" == typeof e ? e : Ra(e);
                return (
                  (t = t.replace(/ $/, "%20")),
                  La(
                    n,
                    "No window.location.(origin|href) available to create URL for href: " +
                      t,
                  ),
                  new URL(t, n)
                );
              }
              null == u &&
                ((u = 0), l.replaceState(Ea({}, l.state, { idx: u }), ""));
              let p = {
                get action() {
                  return o;
                },
                get location() {
                  return e(a, l);
                },
                listen(e) {
                  if (s)
                    throw new Error(
                      "A history only accepts one active listener",
                    );
                  return (
                    a.addEventListener(_a, d),
                    (s = e),
                    () => {
                      (a.removeEventListener(_a, d), (s = null));
                    }
                  );
                },
                createHref: (e) => n(a, e),
                createURL: f,
                encodeLocation(e) {
                  let n = f(e);
                  return {
                    pathname: n.pathname,
                    search: n.search,
                    hash: n.hash,
                  };
                },
                push: function (e, n) {
                  o = Da.Push;
                  let r = Ca(p.location, e, n);
                  (t && t(r, e), (u = c() + 1));
                  let d = Oa(r, u),
                    f = p.createHref(r);
                  try {
                    l.pushState(d, "", f);
                  } catch (e) {
                    if (
                      e instanceof DOMException &&
                      "DataCloneError" === e.name
                    )
                      throw e;
                    a.location.assign(f);
                  }
                  i && s && s({ action: o, location: p.location, delta: 1 });
                },
                replace: function (e, n) {
                  o = Da.Replace;
                  let r = Ca(p.location, e, n);
                  (t && t(r, e), (u = c()));
                  let a = Oa(r, u),
                    d = p.createHref(r);
                  (l.replaceState(a, "", d),
                    i && s && s({ action: o, location: p.location, delta: 0 }));
                },
                go: (e) => l.go(e),
              };
              return p;
            })(
              function (e, n) {
                let { pathname: t, search: r, hash: a } = e.location;
                return Ca(
                  "",
                  { pathname: t, search: r, hash: a },
                  (n.state && n.state.usr) || null,
                  (n.state && n.state.key) || "default",
                );
              },
              function (e, n) {
                return "string" == typeof n ? n : Ra(n);
              },
              null,
              e,
            )
          );
        })({ window: a, v5Compat: !0 }));
      let l = i.current,
        [o, u] = s.useState({ action: l.action, location: l.location }),
        { v7_startTransition: c } = r || {},
        d = s.useCallback(
          (e) => {
            c && Ll ? Ll(() => u(e)) : u(e);
          },
          [u, c],
        );
      return (
        s.useLayoutEffect(() => l.listen(d), [l, d]),
        s.useEffect(() => {
          return (
            null == (e = r) || e.v7_startTransition,
            void 0 === (null == e ? void 0 : e.v7_relativeSplatPath) &&
              (!n || n.v7_relativeSplatPath),
            void (
              n &&
              (n.v7_fetcherPersist,
              n.v7_normalizeFormMethod,
              n.v7_partialHydration,
              n.v7_skipActionErrorRevalidation)
            )
          );
          var e, n;
        }, [r]),
        s.createElement(ni, {
          basename: n,
          children: t,
          location: o.location,
          navigationType: o.action,
          navigator: l,
          future: r,
        })
      );
    }
    var Cl, Rl;
    (_l.flushSync,
      u.useId,
      "undefined" != typeof window &&
        void 0 !== window.document &&
        window.document.createElement,
      (function (e) {
        ((e.UseScrollRestoration = "useScrollRestoration"),
          (e.UseSubmit = "useSubmit"),
          (e.UseSubmitFetcher = "useSubmitFetcher"),
          (e.UseFetcher = "useFetcher"),
          (e.useViewTransitionState = "useViewTransitionState"));
      })(Cl || (Cl = {})),
      (function (e) {
        ((e.UseFetcher = "useFetcher"),
          (e.UseFetchers = "useFetchers"),
          (e.UseScrollRestoration = "useScrollRestoration"));
      })(Rl || (Rl = {})));
    const Pl = function (e) {
      var n = e.generateSummary;
      return (
        "boolean" == typeof n && (n = n.toString()),
        (0, Un.jsx)(Ol, {
          children: (0, Un.jsx)("div", {
            children: e.searchPage
              ? (0, Un.jsx)(pl, {
                  placeholderText: e.placeholder,
                  siteVal: e.site,
                  generateSummary: n,
                  preSelectedFilters: e.preSelectedFilters,
                  retainFilters: e.retainFilters,
                  expandFilters: e.expandFilters,
                })
              : (0, Un.jsx)(El, {
                  placeholderText: e.placeholder,
                  overlayHeading: e.overlayHeading,
                  page: e.page,
                  searchRedirectPath: e.searchRedirectPath,
                  suggestedSearchPills: e.suggestedSearchPills,
                  overlay: e.overlay,
                  expandPills: e.expandPills,
                }),
          }),
        })
      );
    };
    var jl,
      Tl = a(220),
      Vl = {};
    function Fl(e, n) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (n &&
          (r = r.filter(function (n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable;
          })),
          t.push.apply(t, r));
      }
      return t;
    }
    function zl() {
      return (
        (zl = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var t = arguments[n];
                for (var r in t)
                  ({}).hasOwnProperty.call(t, r) && (e[r] = t[r]);
              }
              return e;
            }),
        zl.apply(null, arguments)
      );
    }
    function Ml(e) {
      return (
        (Ml =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
        Ml(e)
      );
    }
    function Bl() {
      try {
        var e = !Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {}),
        );
      } catch (e) {}
      return (Bl = function () {
        return !!e;
      })();
    }
    function Ul(e) {
      return (
        (Ul = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            }),
        Ul(e)
      );
    }
    function Hl(e, n) {
      return (
        (Hl = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, n) {
              return ((e.__proto__ = n), e);
            }),
        Hl(e, n)
      );
    }
    function Gl(e, n, t) {
      return (
        (n = ql(n)) in e
          ? Object.defineProperty(e, n, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[n] = t),
        e
      );
    }
    function ql(e) {
      var n = (function (e) {
        if ("object" != Ml(e) || !e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
          var t = n.call(e, "string");
          if ("object" != Ml(t)) return t;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e);
      })(e);
      return "symbol" == Ml(n) ? n : n + "";
    }
    ((Vl.styleTagTransform = Tn()),
      (Vl.setAttributes = Cn()),
      (Vl.insert = Ln().bind(null, "head")),
      (Vl.domAPI = Dn()),
      (Vl.insertStyleElement = Pn()),
      Nn()(Tl.A, Vl),
      Tl.A && Tl.A.locals && Tl.A.locals);
    var Wl = (function (e) {
      function n() {
        return (
          (function (e, n) {
            if (!(e instanceof n))
              throw new TypeError("Cannot call a class as a function");
          })(this, n),
          (function (e, n, t) {
            return (
              (n = Ul(n)),
              (function (e, n) {
                if (n && ("object" == Ml(n) || "function" == typeof n))
                  return n;
                if (void 0 !== n)
                  throw new TypeError(
                    "Derived constructors may only return object or undefined",
                  );
                return (function (e) {
                  if (void 0 === e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called",
                    );
                  return e;
                })(e);
              })(
                e,
                Bl()
                  ? Reflect.construct(n, t || [], Ul(e).constructor)
                  : n.apply(e, t),
              )
            );
          })(this, n, arguments)
        );
      }
      return (
        (function (e, n) {
          if ("function" != typeof n && null !== n)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          ((e.prototype = Object.create(n && n.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            n && Hl(e, n));
        })(n, e),
        (t = n),
        Object.defineProperty(t, "prototype", { writable: !1 }),
        t
      );
      var t;
    })(s.Component);
    return (
      (jl = Wl),
      Gl(Wl, "mount", function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = zl(
            {},
            ((function (e) {
              if (null == e) throw new TypeError("Cannot destructure " + e);
            })(e),
            e),
          );
        "complete" === document.readyState
          ? jl.doRender(n)
          : window.addEventListener("load", jl.doRender(n));
      }),
      Gl(Wl, "doRender", function (e) {
        var n = document.getElementById(e.elementId);
        if (null === n)
          throw new Error(
            "No element with id ".concat(
              e.elementId,
              " exists, create it first",
            ),
          );
        o.createRoot(n).render(
          (0, Un.jsx)(
            Pl,
            (function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {};
                n % 2
                  ? Fl(Object(t), !0).forEach(function (n) {
                      Gl(e, n, t[n]);
                    })
                  : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(t),
                      )
                    : Fl(Object(t)).forEach(function (n) {
                        Object.defineProperty(
                          e,
                          n,
                          Object.getOwnPropertyDescriptor(t, n),
                        );
                      });
              }
              return e;
            })({}, e),
          ),
        );
      }),
      Gl(Wl, "unMount", function (e) {
        var n = document.getElementById(e.elementId);
        o.createRoot(n).unmount();
      }),
      i
    );
  })(),
);
