import { j as c } from './jsx-runtime-D_zvdyIk.js';
import { a as i } from './utils-BaGd3ScT.js';
const t = ({ width: a = '100px', height: l = '20px', rounded: n = 'md', className: d, ...u }) =>
  c.jsx('div', {
    ...u,
    'data-slot': 'skeleton',
    className: i('bg-gray-500 dark:bg-gray-700 animate-pulse opacity-20', `rounded-${n}`, d),
    style: { width: `${a}`, height: `${l}` }
  });
try {
  (t.displayName = 'Skeleton'),
    (t.__docgenInfo = {
      description: '',
      displayName: 'Skeleton',
      props: {
        width: {
          defaultValue: { value: '100px' },
          description: '@control text',
          name: 'width',
          required: !1,
          type: { name: 'string' }
        },
        height: {
          defaultValue: { value: '20px' },
          description: '@control text',
          name: 'height',
          required: !1,
          type: { name: 'string' }
        },
        rounded: {
          defaultValue: { value: 'md' },
          description: '@control select',
          name: 'rounded',
          required: !1,
          type: {
            name: 'enum',
            value: [{ value: '"md"' }, { value: '"lg"' }, { value: '"sm"' }, { value: '"none"' }, { value: '"full"' }]
          }
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
const g = { title: 'Atoms/Skeleton', component: t, parameters: { docs: { autodocs: !0 } }, tags: ['autodocs'] },
  e = { args: {} };
var r, o, s;
e.parameters = {
  ...e.parameters,
  docs: {
    ...((r = e.parameters) == null ? void 0 : r.docs),
    source: {
      originalSource: `{
  args: {}
}`,
      ...((s = (o = e.parameters) == null ? void 0 : o.docs) == null ? void 0 : s.source)
    }
  }
};
const f = ['Default'];
export { e as Default, f as __namedExportsOrder, g as default };
