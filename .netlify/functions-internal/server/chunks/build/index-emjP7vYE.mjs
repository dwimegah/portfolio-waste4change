import { _ as __nuxt_component_0 } from './nuxt-link-CRoTzmtr.mjs';
import { withCtx, unref, createTextVNode, toDisplayString, createVNode, resolveDynamicComponent, defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderStyle, ssrRenderComponent, ssrInterpolate, ssrRenderAttrs, ssrRenderVNode } from 'vue/server-renderer';
import { a as useI18n, u as useHead, _ as _export_sfc } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'vue-router';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main$7 = {
  __name: "ServiceCard",
  __ssrInlineRender: true,
  props: {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    link: { type: String, required: true },
    icon: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const { locale, t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<li${ssrRenderAttrs(_attrs)}><article class="group h-full rounded-xl bg-white p-8 border border-slate-100 shadow-sm transition-all duration-300 flex flex-col justify-between hover:bg-sky-500 hover:shadow-lg"><div><div class="w-12 h-12 rounded-full border border-sky-500 text-sky-500 flex items-center justify-center mb-6 transition-colors duration-300 group-hover:border-white group-hover:text-white" aria-hidden="true">`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.icon), { class: "w-7 h-7 text-sky-400 group-hover:text-white transition" }, null), _parent);
      _push(`</div><h3 class="text-lg font-semibold text-slate-800 mb-3 transition-colors duration-300 group-hover:text-white">${ssrInterpolate(__props.title)}</h3><p class="text-sm leading-relaxed text-slate-500 transition-colors duration-300 group-hover:text-white/90">${ssrInterpolate(__props.desc)}</p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: __props.link,
        class: "mt-8 inline-flex items-center text-sm font-semibold text-sky-600 transition-colors duration-300 group-hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("lihatproyek"))} <span class="ml-2" aria-hidden="true"${_scopeId}>→</span>`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("lihatproyek")) + " ", 1),
              createVNode("span", {
                class: "ml-2",
                "aria-hidden": "true"
              }, "→")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</article></li>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/ServiceCard.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "SocialIcon",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      required: true
    },
    href: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        href: __props.href,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": `Waste4Change on ${__props.type}`,
        class: "group w-11 h-11 rounded-full bg-white/20 flex items-center justify-center transition-all duration-300 hover:bg-white/30"
      }, _attrs))}>`);
      if (__props.type === "instagram") {
        _push(`<svg class="w-5 h-5 text-white transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" stroke-width="2"></rect><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"></circle><circle cx="17" cy="7" r="1.2" fill="currentColor"></circle></svg>`);
      } else if (__props.type === "facebook") {
        _push(`<svg class="w-5 h-5 text-white transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13 9h3V6h-3c-2.8 0-4 1.7-4 4v3H6v3h3v6h3v-6h3l1-3h-4v-3c0-.8.2-1 1-1Z"></path></svg>`);
      } else if (__props.type === "twitter") {
        _push(`<svg class="w-5 h-5 text-white transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.9 2H22l-7.6 8.7L23 22h-6.6l-5.2-6.8L5.3 22H2l8.1-9.3L1 2h6.7l4.7 6.2L18.9 2Z"></path></svg>`);
      } else if (__props.type === "linkedin") {
        _push(`<svg class="w-5 h-5 text-white transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4 3a2 2 0 1 0 0 4a2 2 0 0 0 0-4Zm0 6h4v12H4V9Zm6 0h4v2h.1c.6-1 2-2 4-2c4.3 0 5 2.8 5 6.4V21h-4v-5.4c0-1.3 0-3-2-3s-2.3 1.5-2.3 2.9V21h-4V9Z"></path></svg>`);
      } else if (__props.type === "youtube") {
        _push(`<svg class="w-5 h-5 text-white transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.9C16.2 5 12 5 12 5s-4.2 0-7 .1c-.4.1-1.2.1-2 .9c-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.6C2 14.4 2.2 16 2.2 16s.2 1.4.8 2c.8.8 1.9.8 2.4.9c1.7.2 6.6.2 6.6.2s4.2 0 7-.1c.4-.1 1.2-.1 2-.9c.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.6C22 9.6 21.8 8 21.8 8ZM10 15V9l5 3l-5 3Z"></path></svg>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</a>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/SocialIcon.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Bottom",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "relative bg-gradient-to-r from-sky-500 via-teal-500 to-green-400 text-white",
        "aria-labelledby": "footer-heading"
      }, _attrs))}><h2 id="footer-heading" class="sr-only"> Footer Navigation </h2><div class="max-w-7xl mx-auto px-6 py-16"><div class="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"><nav aria-label="Footer Navigation"><h3 class="text-sm font-semibold uppercase mb-6"> Waste4Change </h3><ul class="space-y-3 text-sm"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/services",
        class: "hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("semualayanan"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("semualayanan")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/products",
        class: "hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("product"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("product")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: "hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("tentangkami"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("tentangkami")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/research",
        class: "hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("riset"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("riset")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/blog",
        class: "hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Blog`);
          } else {
            return [
              createTextVNode("Blog")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/media",
        class: "hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Media`);
          } else {
            return [
              createTextVNode("Media")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/portfolio",
        class: "hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("portfolio"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("portfolio")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/career/full-time",
        class: "hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Full-time`);
          } else {
            return [
              createTextVNode("Full-time")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/career/internship",
        class: "hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Internship`);
          } else {
            return [
              createTextVNode("Internship")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("contact"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("contact")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></nav><nav aria-label="For Company"><h3 class="text-sm font-semibold uppercase mb-6">${ssrInterpolate(unref(t)("perusahaan"))}</h3><ul class="space-y-3 text-sm"><li>Reduce Waste to Landfill</li><li>Material &amp; Document Destruction</li><li>Event Waste Management</li><li>In-Store Recycling</li><li>Digital EPR</li><li>Waste Credit</li><li>Solid Waste Management Research</li><li>Community-Based Implementation</li><li>3R School Program</li><li>AKABIS (Waste Management Academy)</li><li>AKABIS Black Soldier Fly</li><li>Engineering, Procurement &amp; Construction</li></ul></nav><div><h3 class="text-sm font-semibold uppercase mb-6"> Connect With Us </h3><address class="not-italic text-sm space-y-4"><p> Kantor Waste4Change, Vida Bumipala<br> Jl. Alun Alun Utara, RT.002/RW.001,<br> Padurenan, Mustika Jaya, Kota Bekasi,<br> Jawa Barat 17156 </p><p><a href="tel:+628211110170" class="hover:underline"> +62 821 1110 0170 </a></p><p><a href="mailto:contact@waste4change.com" class="hover:underline"> contact@waste4change.com </a></p></address><div class="flex gap-4 mt-6">`);
      _push(ssrRenderComponent(_sfc_main$6, {
        type: "instagram",
        href: "https://instagram.com/waste4change"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$6, {
        type: "facebook",
        href: "https://facebook.com/waste4change"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$6, {
        type: "twitter",
        href: "https://twitter.com/waste4change"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$6, {
        type: "linkedin",
        href: "https://linkedin.com/company/waste4change"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$6, {
        type: "youtube",
        href: "https://youtube.com/@waste4change"
      }, null, _parent));
      _push(`</div></div></div></div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/Bottom.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 64 64",
    class: "w-7 h-7 text-sky-400",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, _attrs))}><circle cx="20" cy="18" r="4"></circle><path d="M14 30c0-4 12-4 12 0v4H14z"></path><circle cx="36" cy="18" r="4"></circle><path d="M30 30c0-4 12-4 12 0v4H30z"></path><rect x="42" y="10" width="14" height="18" rx="2"></rect><path d="M46 15h6"></path><path d="M46 20h6"></path><path d="M46 25h6"></path><path d="M34 44h10"></path><path d="M40 40l4 4-4 4"></path></svg>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/icons/IconConsult.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const IconConsult = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "64",
    height: "64",
    viewBox: "0 0 64 64",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><circle cx="32" cy="32" r="30" stroke="#2BB0E6" stroke-width="2"></circle><circle cx="24" cy="24" r="4" fill="#2BB0E6"></circle><path d="M18 38c0-4 3-7 6-7s6 3 6 7" stroke="#2BB0E6" stroke-width="2" stroke-linecap="round"></path><circle cx="40" cy="24" r="4" fill="#2BB0E6"></circle><path d="M34 38c0-4 3-7 6-7s6 3 6 7" stroke="#2BB0E6" stroke-width="2" stroke-linecap="round"></path></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/icons/IconCampaign.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const IconCampaign = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "64",
    height: "64",
    viewBox: "0 0 64 64",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><rect x="10" y="10" width="18" height="18" rx="3" stroke="#2BB0E6" stroke-width="2"></rect><rect x="36" y="10" width="18" height="18" rx="3" stroke="#2BB0E6" stroke-width="2"></rect><rect x="23" y="36" width="18" height="18" rx="3" stroke="#2BB0E6" stroke-width="2"></rect></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/icons/IconCollect.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const IconCollect = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "64",
    height: "64",
    viewBox: "0 0 64 64",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><circle cx="32" cy="32" r="30" stroke="#2BB0E6" stroke-width="2"></circle><rect x="18" y="26" width="28" height="16" rx="2" stroke="#2BB0E6" stroke-width="2"></rect><path d="M18 26l6-6h16l6 6" stroke="#2BB0E6" stroke-width="2" stroke-linejoin="round"></path><circle cx="44" cy="22" r="5" stroke="#2BB0E6" stroke-width="2"></circle><path d="M44 19v6M41 22h6" stroke="#2BB0E6" stroke-width="2" stroke-linecap="round"></path></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/icons/IconCreate.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const IconCreate = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, t } = useI18n();
    useHead({
      title: "Portofolio | Waste4Change",
      meta: [
        {
          name: "description",
          content: "Solusi pengelolaan limbah yang bertanggung jawab oleh PT Waste4Change Alam Indonesia."
        },
        {
          property: "og:title",
          content: "Solusi Pengelolaan Limbah yang Bertanggung Jawab"
        },
        {
          property: "og:description",
          content: "Penyedia layanan pengelolaan limbah holistik berbasis di Bekasi, Indonesia."
        },
        {
          property: "og:type",
          content: "website"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[--><section class="relative w-full flex items-center min-h-[70vh] lg:min-h-[100vh]"><div class="absolute inset-0 bg-cover bg-center blur-[1.5px] brightness-75 contrast-110 saturate-75" style="${ssrRenderStyle({ "background-image": "url('/truksampah.jpeg')" })}" aria-hidden="true"></div><div class="absolute inset-0 bg-black/50" aria-hidden="true"></div><div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" aria-hidden="true"></div><div <div class="relative z-10 max-w-7xl mx-auto px-6 pt-20 text-white"><nav class="text-sm mb-3 opacity-90" aria-label="Breadcrumb"><ol class="flex items-center gap-2"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("beranda"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("beranda")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li aria-hidden="true">›</li><li class="opacity-80">${ssrInterpolate(unref(t)("portofolio"))}</li></ol></nav><h1 class="font-bold leading-tight text-3xl sm:text-4xl lg:text-5xl max-w-3xl">${ssrInterpolate(unref(t)("solusi"))}</h1><p class="mt-4 max-w-2xl text-white/90 text-base sm:text-lg">${ssrInterpolate(unref(t)("solusi_description"))}</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "inline-flex items-center mt-6 px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white text-sm font-semibold rounded-full shadow-md shadow-sky-500/30 transition-all duration-200 hover:-translate-y-0.5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` WORK WITH US `);
          } else {
            return [
              createTextVNode(" WORK WITH US ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section class="bg-white py-20" aria-labelledby="business-help-heading"><div class="max-w-7xl mx-auto px-6"><header class="text-center max-w-3xl mx-auto"><h2 id="business-help-heading" class="text-xl sm:text-2xl font-semibold tracking-wide text-slate-800 uppercase">${ssrInterpolate(unref(t)("bantu"))}</h2><div class="w-20 h-1 bg-sky-500 mx-auto my-4" aria-hidden="true"></div><p class="text-slate-500 text-sm sm:text-base">${ssrInterpolate(unref(t)("layanan"))}</p><p><b>Consult, Campaign, Collect, Create.</b></p></header><ul class="mt-14 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" role="list">`);
      _push(ssrRenderComponent(_sfc_main$7, {
        title: "Consult",
        desc: unref(t)("consult"),
        link: "/portfolio/campaign",
        icon: IconConsult
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$7, {
        title: "Campaign",
        desc: unref(t)("campaign"),
        link: "/portfolio/campaign",
        icon: IconCampaign
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$7, {
        title: "Collect",
        desc: unref(t)("collect"),
        link: "/portfolio/collect",
        icon: IconCollect
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$7, {
        title: "Create",
        desc: unref(t)("create"),
        link: "/portfolio/create",
        icon: IconCreate
      }, null, _parent));
      _push(`</ul></div></section>`);
      _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-emjP7vYE.mjs.map
