import { c as V } from './index-DM07Bv7T.js';
import { j as f } from './jsx-runtime-D_zvdyIk.js';
import { a as N } from './utils-BaGd3ScT.js';
const T = V({
  base: 'font-normal leading-[1.2] text-text-light dark:text-text-dark',
  variants: {
    font: { primary: 'font-primary', secondary: 'font-secondary', secondaryBold: 'font-secondaryBold' },
    tag: { p: 'fs-base', span: 'fs-base', small: 'fs-small' },
    prominent: { true: 'font-bold', false: '' },
    srOnly: { true: 'srOnly', false: '' }
  },
  defaultVariants: { size: void 0, color: 'default', prominent: !1 }
});
function l(n) {
  const e = document.createElement('template');
  return (
    (e.innerHTML = n),
    e.content.querySelectorAll('script').forEach((a) => a.remove()),
    e.content.querySelectorAll('*').forEach((a) => {
      [...a.attributes].forEach((t) => {
        t.name.startsWith('on') && a.removeAttribute(t.name);
      });
    }),
    e.innerHTML
  );
}
const i = ({
  font: n = 'secondary',
  tag: e = 'p',
  prominent: c,
  className: m,
  children: a,
  isHtml: t = !1,
  ariaLive: L,
  srOnly: k,
  ...q
}) => {
  const p = e,
    d = t ? l(a) : void 0,
    u = { className: N(T({ tag: e, prominent: c }), m), ...q };
  return t && typeof d == 'string'
    ? f.jsx(p, { ...u, dangerouslySetInnerHTML: { __html: d } })
    : f.jsx(p, { ...u, 'aria-live': L ?? void 0, children: a });
};
try {
  (l.displayName = 'sanitizeHtml'), (l.__docgenInfo = { description: '', displayName: 'sanitizeHtml', props: {} });
} catch {}
try {
  (i.displayName = 'Text'),
    (i.__docgenInfo = {
      description: '',
      displayName: 'Text',
      props: {
        font: {
          defaultValue: { value: 'secondary' },
          description: '@control select',
          name: 'font',
          required: !1,
          type: {
            name: 'enum',
            value: [{ value: '"primary"' }, { value: '"secondary"' }, { value: '"secondaryBold"' }]
          }
        },
        tag: {
          defaultValue: { value: 'p' },
          description: '@control select',
          name: 'tag',
          required: !1,
          type: { name: 'enum', value: [{ value: '"p"' }, { value: '"span"' }, { value: '"small"' }] }
        },
        prominent: {
          defaultValue: null,
          description: '@control boolean',
          name: 'prominent',
          required: !1,
          type: { name: 'boolean' }
        },
        className: {
          defaultValue: null,
          description: '@control text',
          name: 'className',
          required: !1,
          type: { name: 'string' }
        },
        srOnly: {
          defaultValue: null,
          description: '@control boolean',
          name: 'srOnly',
          required: !1,
          type: { name: 'boolean' }
        },
        ariaLive: {
          defaultValue: null,
          description: '@control text',
          name: 'ariaLive',
          required: !1,
          type: { name: 'enum', value: [{ value: '"polite"' }, { value: '"assertive"' }, { value: '"off"' }] }
        },
        isHtml: {
          defaultValue: { value: 'false' },
          description: `@control boolean
@control boolean`,
          name: 'isHtml',
          required: !1,
          type: { name: 'boolean' }
        }
      }
    });
} catch {}
const C = { title: 'Atoms/Text', component: i, parameters: { docs: { autodocs: !0 } }, tags: ['autodocs'] },
  r = { args: { children: 'Lorem ipsum', font: 'secondary', tag: 'p', prominent: !1, srOnly: !1, isHtml: !1 } },
  s = { args: { children: '<i>Lorem ipsum</i>', font: 'secondary', tag: 'p', prominent: !1, srOnly: !1, isHtml: !0 } },
  o = {
    args: {
      children: 'Lorem ipsum',
      font: 'secondary',
      tag: 'p',
      prominent: !1,
      srOnly: !1,
      isHtml: !1,
      className: 'text-yellow dark:text-pink'
    }
  };
var y, g, v;
r.parameters = {
  ...r.parameters,
  docs: {
    ...((y = r.parameters) == null ? void 0 : y.docs),
    source: {
      originalSource: `{
  args: {
    children: 'Lorem ipsum',
    font: 'secondary',
    tag: 'p',
    prominent: false,
    srOnly: false,
    isHtml: false
  }
}`,
      ...((v = (g = r.parameters) == null ? void 0 : g.docs) == null ? void 0 : v.source)
    }
  }
};
var x, _, H;
s.parameters = {
  ...s.parameters,
  docs: {
    ...((x = s.parameters) == null ? void 0 : x.docs),
    source: {
      originalSource: `{
  args: {
    children: '<i>Lorem ipsum</i>',
    font: 'secondary',
    tag: 'p',
    prominent: false,
    srOnly: false,
    isHtml: true
  }
}`,
      ...((H = (_ = s.parameters) == null ? void 0 : _.docs) == null ? void 0 : H.source)
    }
  }
};
var h, b, O;
o.parameters = {
  ...o.parameters,
  docs: {
    ...((h = o.parameters) == null ? void 0 : h.docs),
    source: {
      originalSource: `{
  args: {
    children: 'Lorem ipsum',
    font: 'secondary',
    tag: 'p',
    prominent: false,
    srOnly: false,
    isHtml: false,
    className: 'text-yellow dark:text-pink'
  }
}`,
      ...((O = (b = o.parameters) == null ? void 0 : b.docs) == null ? void 0 : O.source)
    }
  }
};
const j = ['Default', 'WithHtml', 'CustomColors'];
export { o as CustomColors, r as Default, s as WithHtml, j as __namedExportsOrder, C as default };
