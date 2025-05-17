import { a as F, r as s } from './index-CdUicJsP.js';
import { j as p } from './jsx-runtime-D_zvdyIk.js';
import { a as y } from './utils-BaGd3ScT.js';
import './index-tgq_NGtl.js';
import './_commonjsHelpers-CqkleIqs.js';
import './index-PxHYSiC3.js';
function T(e, t = []) {
  let o = [];
  function a(n, u) {
    const i = s.createContext(u),
      l = o.length;
    o = [...o, u];
    const f = (c) => {
      var b;
      const { scope: d, children: v, ...g } = c,
        m = ((b = d == null ? void 0 : d[e]) == null ? void 0 : b[l]) || i,
        S = s.useMemo(() => g, Object.values(g));
      return p.jsx(m.Provider, { value: S, children: v });
    };
    f.displayName = n + 'Provider';
    function x(c, d) {
      var m;
      const v = ((m = d == null ? void 0 : d[e]) == null ? void 0 : m[l]) || i,
        g = s.useContext(v);
      if (g) return g;
      if (u !== void 0) return u;
      throw new Error(`\`${c}\` must be used within \`${n}\``);
    }
    return [f, x];
  }
  const r = () => {
    const n = o.map((u) => s.createContext(u));
    return function (i) {
      const l = (i == null ? void 0 : i[e]) || n;
      return s.useMemo(() => ({ [`__scope${e}`]: { ...i, [e]: l } }), [i, l]);
    };
  };
  return (r.scopeName = e), [a, G(r, ...t)];
}
function G(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const o = () => {
    const a = e.map((r) => ({ useScope: r(), scopeName: r.scopeName }));
    return function (n) {
      const u = a.reduce((i, { useScope: l, scopeName: f }) => {
        const c = l(n)[`__scope${f}`];
        return { ...i, ...c };
      }, {});
      return s.useMemo(() => ({ [`__scope${t.scopeName}`]: u }), [u]);
    };
  };
  return (o.scopeName = t.scopeName), o;
}
function W(e) {
  const t = s.useRef(e);
  return (
    s.useEffect(() => {
      t.current = e;
    }),
    s.useMemo(
      () =>
        (...o) => {
          var a;
          return (a = t.current) == null ? void 0 : a.call(t, ...o);
        },
      []
    )
  );
}
var A = globalThis != null && globalThis.document ? s.useLayoutEffect : () => {};
function j(e, t) {
  if (typeof e == 'function') return e(t);
  e != null && (e.current = t);
}
function H(...e) {
  return (t) => {
    let o = !1;
    const a = e.map((r) => {
      const n = j(r, t);
      return !o && typeof n == 'function' && (o = !0), n;
    });
    if (o)
      return () => {
        for (let r = 0; r < a.length; r++) {
          const n = a[r];
          typeof n == 'function' ? n() : j(e[r], null);
        }
      };
  };
}
function B(...e) {
  return s.useCallback(H(...e), e);
}
function U(e) {
  const t = K(e),
    o = s.forwardRef((a, r) => {
      const { children: n, ...u } = a,
        i = s.Children.toArray(n),
        l = i.find(J);
      if (l) {
        const f = l.props.children,
          x = i.map((c) =>
            c === l
              ? s.Children.count(f) > 1
                ? s.Children.only(null)
                : s.isValidElement(f)
                  ? f.props.children
                  : null
              : c
          );
        return p.jsx(t, { ...u, ref: r, children: s.isValidElement(f) ? s.cloneElement(f, void 0, x) : null });
      }
      return p.jsx(t, { ...u, ref: r, children: n });
    });
  return (o.displayName = `${e}.Slot`), o;
}
function K(e) {
  const t = s.forwardRef((o, a) => {
    const { children: r, ...n } = o,
      u = s.isValidElement(r) ? X(r) : void 0,
      i = B(u, a);
    if (s.isValidElement(r)) {
      const l = Q(n, r.props);
      return r.type !== s.Fragment && (l.ref = i), s.cloneElement(r, l);
    }
    return s.Children.count(r) > 1 ? s.Children.only(null) : null;
  });
  return (t.displayName = `${e}.SlotClone`), t;
}
var Z = Symbol('radix.slottable');
function J(e) {
  return s.isValidElement(e) && typeof e.type == 'function' && '__radixId' in e.type && e.type.__radixId === Z;
}
function Q(e, t) {
  const o = { ...t };
  for (const a in t) {
    const r = e[a],
      n = t[a];
    /^on[A-Z]/.test(a)
      ? r && n
        ? (o[a] = (...i) => {
            const l = n(...i);
            return r(...i), l;
          })
        : r && (o[a] = r)
      : a === 'style'
        ? (o[a] = { ...r, ...n })
        : a === 'className' && (o[a] = [r, n].filter(Boolean).join(' '));
  }
  return { ...e, ...o };
}
function X(e) {
  var a, r;
  let t = (a = Object.getOwnPropertyDescriptor(e.props, 'ref')) == null ? void 0 : a.get,
    o = t && 'isReactWarning' in t && t.isReactWarning;
  return o
    ? e.ref
    : ((t = (r = Object.getOwnPropertyDescriptor(e, 'ref')) == null ? void 0 : r.get),
      (o = t && 'isReactWarning' in t && t.isReactWarning),
      o ? e.props.ref : e.props.ref || e.ref);
}
var Y = [
    'a',
    'button',
    'div',
    'form',
    'h2',
    'h3',
    'img',
    'input',
    'label',
    'li',
    'nav',
    'ol',
    'p',
    'select',
    'span',
    'svg',
    'ul'
  ],
  w = Y.reduce((e, t) => {
    const o = U(`Primitive.${t}`),
      a = s.forwardRef((r, n) => {
        const { asChild: u, ...i } = r,
          l = u ? o : t;
        return typeof window < 'u' && (window[Symbol.for('radix-ui')] = !0), p.jsx(l, { ...i, ref: n });
      });
    return (a.displayName = `Primitive.${t}`), { ...e, [t]: a };
  }, {}),
  E = { exports: {} },
  C = {}; /**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var N;
function ee() {
  if (N) return C;
  N = 1;
  var e = F();
  function t(c, d) {
    return (c === d && (c !== 0 || 1 / c === 1 / d)) || (c !== c && d !== d);
  }
  var o = typeof Object.is == 'function' ? Object.is : t,
    a = e.useState,
    r = e.useEffect,
    n = e.useLayoutEffect,
    u = e.useDebugValue;
  function i(c, d) {
    var v = d(),
      g = a({ inst: { value: v, getSnapshot: d } }),
      m = g[0].inst,
      S = g[1];
    return (
      n(
        function () {
          (m.value = v), (m.getSnapshot = d), l(m) && S({ inst: m });
        },
        [c, v, d]
      ),
      r(
        function () {
          return (
            l(m) && S({ inst: m }),
            c(function () {
              l(m) && S({ inst: m });
            })
          );
        },
        [c]
      ),
      u(v),
      v
    );
  }
  function l(c) {
    var d = c.getSnapshot;
    c = c.value;
    try {
      var v = d();
      return !o(c, v);
    } catch {
      return !0;
    }
  }
  function f(c, d) {
    return d();
  }
  var x = typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u' ? f : i;
  return (C.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : x), C;
}
var L;
function te() {
  return L || ((L = 1), (E.exports = ee())), E.exports;
}
var re = te();
function ne() {
  return re.useSyncExternalStore(
    ae,
    () => !0,
    () => !1
  );
}
function ae() {
  return () => {};
}
var R = 'Avatar',
  [oe, he] = T(R),
  [se, k] = oe(R),
  q = s.forwardRef((e, t) => {
    const { __scopeAvatar: o, ...a } = e,
      [r, n] = s.useState('idle');
    return p.jsx(se, {
      scope: o,
      imageLoadingStatus: r,
      onImageLoadingStatusChange: n,
      children: p.jsx(w.span, { ...a, ref: t })
    });
  });
q.displayName = R;
var M = 'AvatarImage',
  O = s.forwardRef((e, t) => {
    const { __scopeAvatar: o, src: a, onLoadingStatusChange: r = () => {}, ...n } = e,
      u = k(M, o),
      i = ie(a, n),
      l = W((f) => {
        r(f), u.onImageLoadingStatusChange(f);
      });
    return (
      A(() => {
        i !== 'idle' && l(i);
      }, [i, l]),
      i === 'loaded' ? p.jsx(w.img, { ...n, ref: t, src: a }) : null
    );
  });
O.displayName = M;
var z = 'AvatarFallback',
  D = s.forwardRef((e, t) => {
    const { __scopeAvatar: o, delayMs: a, ...r } = e,
      n = k(z, o),
      [u, i] = s.useState(a === void 0);
    return (
      s.useEffect(() => {
        if (a !== void 0) {
          const l = window.setTimeout(() => i(!0), a);
          return () => window.clearTimeout(l);
        }
      }, [a]),
      u && n.imageLoadingStatus !== 'loaded' ? p.jsx(w.span, { ...r, ref: t }) : null
    );
  });
D.displayName = z;
function I(e, t) {
  return e
    ? t
      ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? 'loaded' : 'loading')
      : 'error'
    : 'idle';
}
function ie(e, { referrerPolicy: t, crossOrigin: o }) {
  const a = ne(),
    r = s.useRef(null),
    n = a ? (r.current || (r.current = new window.Image()), r.current) : null,
    [u, i] = s.useState(() => I(n, e));
  return (
    A(() => {
      i(I(n, e));
    }, [n, e]),
    A(() => {
      const l = (c) => () => {
        i(c);
      };
      if (!n) return;
      const f = l('loaded'),
        x = l('error');
      return (
        n.addEventListener('load', f),
        n.addEventListener('error', x),
        t && (n.referrerPolicy = t),
        typeof o == 'string' && (n.crossOrigin = o),
        () => {
          n.removeEventListener('load', f), n.removeEventListener('error', x);
        }
      );
    }, [n, o, t]),
    u
  );
}
var ue = q,
  le = O,
  ce = D;
function de({ className: e, ...t }) {
  return p.jsx(ue, {
    'data-slot': 'avatar',
    className: y('relative flex size-8 shrink-0 overflow-hidden rounded-full', e),
    ...t
  });
}
function fe({ className: e, ...t }) {
  return p.jsx(le, { 'data-slot': 'avatar-image', className: y('aspect-square size-full', e), ...t });
}
function pe({ className: e, ...t }) {
  return p.jsx(ce, {
    'data-slot': 'avatar-fallback',
    className: y('bg-muted flex size-full items-center justify-center rounded-full', e),
    ...t
  });
}
const _ = ({ src: e, alt: t = 'EG', className: o, size: a = 'md' }) => {
  const r = { sm: '30px', md: '40px', lg: '50px', xl: '60px', '2xl': '70px', '3xl': '80px' },
    n = {
      sm: 'text-[0.8em]',
      md: 'text-[1em]',
      lg: 'text-[1.2em]',
      xl: 'text-[1.4em]',
      '2xl': 'text-[1.6em]',
      '3xl': 'text-[1.8em]'
    },
    u = r[a],
    i = n[a];
  return p.jsxs(de, {
    className: y('dark:bg-gray-700 rounded-full flex items-center justify-center', o),
    style: { width: u, height: u },
    children: [
      p.jsx(fe, { src: e, style: { width: u, height: u } }),
      p.jsx(pe, { className: y('text-text-light dark:text-text-dark leading-[1.2] pt-[0.2em]', i), children: t })
    ]
  });
};
try {
  (_.displayName = 'Avatar'),
    (_.__docgenInfo = {
      description: '',
      displayName: 'Avatar',
      props: {
        src: { defaultValue: null, description: '@control src', name: 'src', required: !0, type: { name: 'string' } },
        size: {
          defaultValue: { value: 'md' },
          description: '@control select',
          name: 'size',
          required: !1,
          type: {
            name: 'enum',
            value: [
              { value: '"sm"' },
              { value: '"md"' },
              { value: '"lg"' },
              { value: '"xl"' },
              { value: '"2xl"' },
              { value: '"3xl"' }
            ]
          }
        },
        alt: {
          defaultValue: { value: 'EG' },
          description: '@control text',
          name: 'alt',
          required: !1,
          type: { name: 'string' }
        },
        className: {
          defaultValue: null,
          description: '@control text',
          name: 'className',
          required: !1,
          type: { name: 'string' }
        }
      }
    });
} catch {}
const Ee = { title: 'Atoms/Avatar', component: _, parameters: { docs: { autodocs: !0 } }, tags: ['autodocs'] },
  h = { args: { size: 'md', alt: 'EG', className: '' } };
var P, V, $;
h.parameters = {
  ...h.parameters,
  docs: {
    ...((P = h.parameters) == null ? void 0 : P.docs),
    source: {
      originalSource: `{
  args: {
    size: 'md',
    alt: 'EG',
    className: ''
  }
}`,
      ...(($ = (V = h.parameters) == null ? void 0 : V.docs) == null ? void 0 : $.source)
    }
  }
};
const Ce = ['Default'];
export { h as Default, Ce as __namedExportsOrder, Ee as default };
