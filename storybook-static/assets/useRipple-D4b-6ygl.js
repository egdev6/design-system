import { r as l } from './index-CdUicJsP.js';
const p = (e) => {
  l.useEffect(() => {
    const r = (i) => {
        if (!e.current) return;
        const t = document.createElement('span');
        t.classList.add('ripple');
        const c = Math.max(e.current.offsetWidth, e.current.offsetHeight);
        t.style.width = t.style.height = c * 2 + 'px';
        const s = e.current.getBoundingClientRect();
        (t.style.left = i.clientX - s.left - c + 'px'),
          (t.style.top = i.clientY - s.top - c + 'px'),
          e.current.appendChild(t),
          t.addEventListener('animationend', () => {
            t.remove();
          });
      },
      n = e.current;
    return (
      n && n.addEventListener('click', r),
      () => {
        n && n.removeEventListener('click', r);
      }
    );
  }, [e]);
};
export { p as u };
