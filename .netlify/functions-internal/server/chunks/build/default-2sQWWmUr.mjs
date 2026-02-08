import { defineComponent, mergeProps, ref, computed, withCtx, createVNode, unref, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './nuxt-link-CRoTzmtr.mjs';
import { p as publicAssetsURL } from '../_/nitro.mjs';
import { a as useI18n, b as useSwitchLocalePath, c as useRouter, _ as _export_sfc } from './server.mjs';
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

const _imports_0 = publicAssetsURL("/waste4change.png");
const _sfc_main$5 = {
  __name: "NavbarDropdown",
  __ssrInlineRender: true,
  props: {
    label: { type: String, required: true },
    items: { type: Array, required: true }
  },
  setup(__props) {
    const open = ref(false);
    const wrapper = ref(null);
    const close = () => open.value = false;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "wrapper",
        ref: wrapper,
        class: "relative inline-block"
      }, _attrs))}><button class="flex items-center gap-1 text-sm font-semibold uppercase text-slate-700 hover:text-sky-600 transition"${ssrRenderAttr("aria-expanded", open.value)}><span>${ssrInterpolate(__props.label)}</span><svg class="${ssrRenderClass([{ "rotate-180": open.value }, "w-4 h-4 transition-transform"])}" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6l6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></button><div class="absolute top-full mt-3 left-1/2 -translate-x-1/2 w-44 bg-white rounded-md shadow-lg border border-slate-100 z-50" style="${ssrRenderStyle(open.value ? null : { display: "none" })}"><ul class="py-2"><!--[-->`);
      ssrRenderList(__props.items, (item) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: item.to,
          class: "block px-5 py-2 text-sm text-slate-700 hover:bg-slate-100 transition",
          onClick: close
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/NavbarDropdown.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, t } = useI18n();
    useSwitchLocalePath();
    useRouter();
    const open = ref(false);
    const mobileOpen = ref(false);
    ref(null);
    const languages = [
      { code: "ID", locale: "id", flag: "/ID.png" },
      { code: "EN", locale: "en", flag: "/EN.png" }
    ];
    const current = computed(() => {
      return languages.find((l) => l.locale === locale.value) || languages[0];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "w-full bg-white border-b border-slate-200" }, _attrs))}><div class="mx-auto max-w-7xl h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Waste4Change Logo" class="h-8 w-auto"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "Waste4Change Logo",
                class: "h-8 w-auto"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-700" aria-label="Main navigation">`);
      _push(ssrRenderComponent(_sfc_main$5, {
        label: unref(t)("services_text"),
        items: [
          { label: "FOR COMPANY", to: "/" },
          { label: "FOR INDIVIDU", to: "/" },
          { label: "MITRA", to: "/" },
          { label: "PERUMAHAN & KAWASAN", to: "/" }
        ]
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "hover:text-indigo-500",
        to: "/products"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("produk"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("produk")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "hover:text-indigo-500",
        to: "/about"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("tentang"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("tentang")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "hover:text-indigo-500",
        to: "/research"
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
      _push(ssrRenderComponent(_sfc_main$5, {
        label: "BLOG & MEDIA",
        items: [
          { label: "BLOG", to: "/" },
          { label: "MEDIA KIT", to: "/" }
        ]
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, {
        label: unref(t)("portfolio"),
        items: [
          { label: "PORTFOLIO", to: "/" },
          { label: "LAUT YANG TENANG", to: "/" }
        ]
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, {
        label: unref(t)("karir"),
        items: [
          { label: "FULL-TIME", to: "/" },
          { label: "INTERNSHIP", to: "/" }
        ]
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "hover:text-indigo-500",
        to: "/contact"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("kontak"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("kontak")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav><div class="flex items-center gap-3"><div class="relative"><button class="flex items-center gap-2 px-2 py-1 rounded text-sm font-medium uppercase hover:bg-slate-100"${ssrRenderAttr("aria-expanded", open.value)} aria-haspopup="listbox"><img${ssrRenderAttr("src", current.value.flag)} class="w-5 h-5 rounded-sm"><span>${ssrInterpolate(current.value.code)}</span><svg class="w-3 h-3" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2"></path></svg></button><ul class="absolute right-0 mt-2 w-28 bg-white border border-slate-200 rounded-md shadow-lg text-sm z-50" style="${ssrRenderStyle(open.value ? null : { display: "none" })}"><!--[-->`);
      ssrRenderList(languages, (lang) => {
        _push(`<li><button class="w-full flex items-center gap-2 px-3 py-2 hover:bg-slate-100"><img${ssrRenderAttr("src", lang.flag)} class="w-5 h-5 rounded-sm"> ${ssrInterpolate(lang.code)}</button></li>`);
      });
      _push(`<!--]--></ul></div><button class="lg:hidden p-2 rounded hover:bg-slate-100" aria-label="Open menu"><svg class="w-6 h-6" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></button></div></div>`);
      if (mobileOpen.value) {
        _push(`<nav class="lg:hidden border-t border-slate-200 bg-white"><ul class="flex flex-col p-4 space-y-4 text-sm font-semibold">`);
        _push(ssrRenderComponent(_sfc_main$5, {
          label: _ctx.serviceslabel,
          items: [
            { label: "FOR COMPANY", to: "/" },
            { label: "FOR INDIVIDU", to: "/" },
            { label: "MITRA", to: "/" },
            { label: "PERUMAHAN & KAWASAN", to: "/" }
          ]
        }, null, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/products" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`PRODUK`);
            } else {
              return [
                createTextVNode("PRODUK")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/about" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`TENTANG`);
            } else {
              return [
                createTextVNode("TENTANG")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/research" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`RISET`);
            } else {
              return [
                createTextVNode("RISET")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_sfc_main$5, {
          label: "BLOG & MEDIA",
          items: [
            { label: "BLOG", to: "/" },
            { label: "MEDIA KIT", to: "/" }
          ]
        }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$5, {
          label: "PORTFOLIO",
          items: [
            { label: "PORTFOLIO", to: "/" },
            { label: "LAUT YANG TENANG", to: "/" }
          ]
        }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$5, {
          label: "CAREER",
          items: [
            { label: "FULL-TIME", to: "/" },
            { label: "INTERNSHIP", to: "/" }
          ]
        }, null, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/contact" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`KONTAK`);
            } else {
              return [
                createTextVNode("KONTAK")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</ul></nav>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/layout/Header.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "w-full bg-gradient-to-r from-teal-600 via-teal-500 to-emerald-400 text-white" }, _attrs))}><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between text-sm"><p class="opacity-90"> © 2022 – All Rights Reserved Waste4Change </p><button class="flex items-center gap-2 hover:opacity-80 transition" aria-label="Change language"><svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3a9 9 0 100 18 9 9 0 000-18zm0 0c2.5 2.5 4 6 4 9s-1.5 6.5-4 9m0-18C9.5 5.5 8 9 8 12s1.5 6.5 4 9M3 12h18"></path></svg><span class="uppercase font-medium"> ID / EN </span></button></div></footer>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/layout/Footer.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = {
  __name: "ScrollToTop",
  __ssrInlineRender: true,
  setup(__props) {
    const visible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        "aria-label": "Scroll to top",
        class: "fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-sky-50"
      }, _attrs, {
        style: visible.value ? null : { display: "none" }
      }))}><svg class="w-6 h-6 text-sky-600" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 19V5" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path><path d="M6 11l6-6l6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/ScrollToTop.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const phoneNumber = "628211110170";
const _sfc_main$1 = {
  __name: "WhatsappButton",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, t } = useI18n();
    const message = encodeURIComponent(
      "Hello Waste4Change, I would like to know more about your services."
    );
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        href: whatsappLink,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": "Chat with Waste4Change on WhatsApp",
        class: "fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg transition-all duration-300"
      }, _attrs))}><svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.5 3.5A11.9 11.9 0 0 0 12 0C5.4 0 0 5.4 0 12c0 2.1.5 4.2 1.6 6L0 24l6.2-1.6c1.7.9 3.7 1.4 5.8 1.4c6.6 0 12-5.4 12-12c0-3.2-1.3-6.2-3.5-8.3Zm-8.5 18c-1.9 0-3.7-.5-5.3-1.5l-.4-.2l-3.7 1l1-3.6l-.2-.4c-1-1.6-1.6-3.4-1.6-5.3c0-5.4 4.4-9.8 9.8-9.8c2.6 0 5.1 1 6.9 2.9c1.8 1.8 2.9 4.3 2.9 6.9c0 5.4-4.4 9.8-9.8 9.8Zm5.3-7.4c-.3-.1-1.8-.9-2.1-1c-.3-.1-.5-.1-.7.1c-.2.3-.8 1-.9 1.2c-.2.2-.4.2-.7.1c-.3-.1-1.3-.5-2.5-1.6c-.9-.8-1.6-1.8-1.8-2.1c-.2-.3 0-.5.1-.6c.1-.1.3-.4.4-.6c.1-.2.2-.4.3-.6c.1-.2 0-.4 0-.6c0-.1-.7-1.7-.9-2.3c-.3-.6-.6-.5-.8-.5h-.7c-.2 0-.6.1-.9.4c-.3.3-1.1 1-1.1 2.5c0 1.5 1.1 2.9 1.3 3.1c.1.2 2.2 3.3 5.4 4.7c.8.3 1.4.5 1.8.6c.8.2 1.6.2 2.2.1c.7-.1 1.8-.7 2-1.4c.2-.7.2-1.3.1-1.4c-.1-.2-.3-.3-.6-.4Z"></path></svg><span class="hidden sm:inline font-semibold text-sm">${ssrInterpolate(unref(t)("contact_us"))}</span></a>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../components/WhatsappButton.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex min-h-screen flex-col" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(`<main class="flex-1">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(Footer, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-2sQWWmUr.mjs.map
