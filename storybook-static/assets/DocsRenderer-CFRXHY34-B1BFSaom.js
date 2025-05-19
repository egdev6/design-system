const __viteMapDeps = (
  i,
  m = __viteMapDeps,
  d = m.f || (m.f = ['./index-7_urXZbD.js', './index-CdUicJsP.js', './_commonjsHelpers-CqkleIqs.js'])
) => i.map((i) => d[i]);
import { _ as p } from './iframe-MV1DbkKU.js';
import { r as c, e } from './index-CdUicJsP.js';
import { k as E, j as h, H as l, i as u } from './index-DNKfmwyC.js';
import { renderElement as d, unmountElement as x } from './react-18-DroeUvO3.js';
import './_commonjsHelpers-CqkleIqs.js';
import './jsx-runtime-D_zvdyIk.js';
import './index-tgq_NGtl.js';
import './index-PxHYSiC3.js';
import './index-CXQShRbs.js';
import './index-DrFu-skq.js';
var _ = { code: h, a: u, ...l },
  D = class extends c.Component {
    constructor() {
      super(...arguments), (this.state = { hasError: !1 });
    }
    static getDerivedStateFromError() {
      return { hasError: !0 };
    }
    componentDidCatch(t) {
      const { showException: r } = this.props;
      r(t);
    }
    render() {
      const { hasError: t } = this.state,
        { children: r } = this.props;
      return t ? null : e.createElement(e.Fragment, null, r);
    }
  },
  H = class {
    constructor() {
      (this.render = async (t, r, n) => {
        const s = { ..._, ...(r == null ? void 0 : r.components) },
          i = E;
        return new Promise((m, a) => {
          p(
            async () => {
              const { MDXProvider: o } = await import('./index-7_urXZbD.js');
              return { MDXProvider: o };
            },
            __viteMapDeps([0, 1, 2]),
            import.meta.url
          )
            .then(({ MDXProvider: o }) =>
              d(
                e.createElement(
                  D,
                  { showException: a, key: Math.random() },
                  e.createElement(o, { components: s }, e.createElement(i, { context: t, docsParameter: r }))
                ),
                n
              )
            )
            .then(() => m());
        });
      }),
        (this.unmount = (t) => {
          x(t);
        });
    }
  };
export { H as DocsRenderer, _ as defaultComponents };
