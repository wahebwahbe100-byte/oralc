
const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.main-nav');if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.1});document.querySelectorAll('.reveal').forEach(el=>io.observe(el));


// Collapsible Doctolib booking tab.
(() => {
  document.querySelectorAll('.doctolib-float').forEach((widget, index) => {
    const toggle = widget.querySelector('.doctolib-float__toggle');
    const link = widget.querySelector('.doctolib-float__link');
    if (!toggle || !link) return;

    if (!link.id) link.id = `doctolib-booking-link-${index + 1}`;
    toggle.setAttribute('aria-controls', link.id);

    const setCollapsed = collapsed => {
      widget.classList.toggle('is-collapsed', collapsed);
      toggle.setAttribute('aria-expanded', String(!collapsed));
      toggle.setAttribute('aria-label', collapsed
        ? 'Online-Terminleiste öffnen'
        : 'Online-Terminleiste schließen');
    };

    setCollapsed(widget.classList.contains('is-collapsed'));
    toggle.addEventListener('click', () => {
      setCollapsed(!widget.classList.contains('is-collapsed'));
    });
  });
})();
