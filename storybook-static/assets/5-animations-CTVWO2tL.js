import { useMDXComponents as o } from './index-7_urXZbD.js';
import { M as r } from './index-DNKfmwyC.js';
import { j as e } from './jsx-runtime-D_zvdyIk.js';
import './index-CdUicJsP.js';
import './_commonjsHelpers-CqkleIqs.js';
import './iframe-MV1DbkKU.js';
import './index-tgq_NGtl.js';
import './index-PxHYSiC3.js';
import './index-CXQShRbs.js';
import './index-DrFu-skq.js';
function n(i) {
  const t = { p: 'p', ...o(), ...i.components };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(r, { title: 'Design System/Animations' }),
      `
`,
      e.jsx('h1', { style: { color: '#d61e2b' }, children: 'Animations' }),
      `
`,
      e.jsx('p', {
        style: { color: '#ccc', marginBottom: '1rem' },
        children: e.jsx(t.p, {
          children:
            'The following CSS variables define the key animation tokens used in the Egdev Design System. Some animations are continuous (like rotation), while others are entrance/exit effects.'
        })
      }),
      `
`,
      e.jsx('p', {
        style: { color: '#ccc', marginBottom: '1rem' },
        children: e.jsx(t.p, { children: 'Hover the image to run the animation' })
      }),
      `
`,
      e.jsxs('div', {
        style: { display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' },
        children: [
          e.jsxs('div', {
            style: { display: 'flex', alignItems: 'center', gap: '1rem' },
            children: [
              e.jsx('div', {
                style: {
                  border: '2px solid #FF0F34',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  insetInline: '2px'
                },
                children: e.jsx('div', {
                  className: 'hover:animate-fadeIn',
                  style: {
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    backgroundColor: '#FF0F34',
                    opacity: '0',
                    transition: '0.4s ease-in-out',
                    animationFillMode: 'forwards'
                  }
                })
              }),
              e.jsx('div', {
                style: { color: '#fff', width: '200px' },
                children: e.jsx('code', { children: '--animate-fadeIn' })
              }),
              e.jsx('div', {
                style: { color: '#888' },
                children: e.jsx('code', { children: 'fadeIn 400ms ease-in-out' })
              })
            ]
          }),
          e.jsxs('div', {
            style: { display: 'flex', alignItems: 'center', gap: '1rem' },
            children: [
              e.jsx('div', {
                style: {
                  border: '2px solid #FF0F34',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  insetInline: '2px'
                },
                children: e.jsx('div', {
                  className: 'hover:animate-fadeOut',
                  style: {
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    backgroundColor: '#FF0F34',
                    opacity: '1',
                    transition: '0.4s ease-in-out',
                    animationFillMode: 'forwards'
                  }
                })
              }),
              e.jsx('div', {
                style: { color: '#fff', width: '200px' },
                children: e.jsx('code', { children: '--animate-fadeOut' })
              }),
              e.jsx('div', {
                style: { color: '#888' },
                children: e.jsx('code', { children: 'fadeOut 400ms ease-in-out' })
              })
            ]
          }),
          e.jsxs('div', {
            style: { display: 'flex', alignItems: 'center', gap: '1rem' },
            children: [
              e.jsx('div', {
                className: 'hover:animate-rotation-360',
                style: { width: '40px', height: '40px', backgroundColor: '#FF0F34', borderRadius: '4px' }
              }),
              e.jsx('div', {
                style: { color: '#fff', width: '200px' },
                children: e.jsx('code', { children: '--animate-rotation-360' })
              }),
              e.jsx('div', {
                style: { color: '#888' },
                children: e.jsx('code', { children: 'rotation-360 1s linear infinite' })
              })
            ]
          }),
          e.jsxs('div', {
            style: { display: 'flex', alignItems: 'center', gap: '1rem' },
            children: [
              e.jsx('div', {
                className: 'hover:animate-rotation-360-reverse',
                style: { width: '40px', height: '40px', backgroundColor: '#FF0F34', borderRadius: '4px' }
              }),
              e.jsx('div', {
                style: { color: '#fff', width: '200px' },
                children: e.jsx('code', { children: '--animate-rotation-360-reverse' })
              }),
              e.jsx('div', {
                style: { color: '#888' },
                children: e.jsx('code', { children: 'rotation-360 1s linear infinite reverse' })
              })
            ]
          })
        ]
      })
    ]
  });
}
function j(i = {}) {
  const { wrapper: t } = { ...o(), ...i.components };
  return t ? e.jsx(t, { ...i, children: e.jsx(n, { ...i }) }) : n(i);
}
export { j as default };
