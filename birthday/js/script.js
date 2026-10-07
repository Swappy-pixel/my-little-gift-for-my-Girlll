/* Logic only — customise content in js/config.js */
const C = birthdayConfig, $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const fmt = s => String(s ?? '').replaceAll('{name}', C.name).replaceAll('{sender}', C.sender);
const get = (o, p) => p.split('.').reduce((a, k) => a && a[k], o);
const rnd = (a, b) => a + Math.random() * (b - a);
let run = 0, cur = 0, loop, audio, started = 0;
const later = (f, ms) => { const m = run; setTimeout(() => m === run && f(), ms); };

const BR = { b: '#c98a4b', l: '#f7d9b5', a: '#ff5d8f' }, CR = { b: '#f3d2b3', l: '#fff4e8', a: '#ff8fc0', hair: 1 };
function bearG(c) {
  const bow = c.hair ? `<g fill="${c.a}"><path d="M128 28l-24-12v24zM128 28l24-12v24z"/><circle cx="128" cy="28" r="6"/></g>`
    : `<g fill="${c.a}"><path d="M100 146l-24-13v26zM100 146l24-13v26z"/><circle cx="100" cy="146" r="6"/></g>`;
  return `<g fill="${c.b}"><circle cx="42" cy="38" r="25"/><circle cx="158" cy="38" r="25"/><ellipse cx="100" cy="162" rx="54" ry="58"/><ellipse cx="66" cy="216" rx="26" ry="15"/><ellipse cx="134" cy="216" rx="26" ry="15"/><circle cx="100" cy="82" r="58"/></g>
<g fill="${c.l}"><circle cx="42" cy="38" r="13"/><circle cx="158" cy="38" r="13"/><ellipse cx="100" cy="172" rx="34" ry="38"/><ellipse cx="100" cy="100" rx="26" ry="20"/><ellipse cx="66" cy="218" rx="14" ry="8"/><ellipse cx="134" cy="218" rx="14" ry="8"/></g>
<g class="eo"><g fill="#3b2314"><circle cx="76" cy="80" r="8.5"/><circle cx="124" cy="80" r="8.5"/></g><g fill="#fff"><circle cx="79" cy="76.5" r="3.2"/><circle cx="127" cy="76.5" r="3.2"/><circle cx="73.5" cy="83.5" r="1.5"/><circle cx="121.5" cy="83.5" r="1.5"/></g></g>
<g class="ec"><path d="M65 83q11-13 22 0M113 83q11-13 22 0" stroke="#3b2314" stroke-width="4" fill="none" stroke-linecap="round"/></g>
<ellipse cx="100" cy="94" rx="8" ry="5.5" fill="#3b2314"/><path d="M100 99v4M91 103q4 6 9 0q5 6 9 0" stroke="#3b2314" stroke-width="3" fill="none" stroke-linecap="round"/>
<g fill="#ff8fab" opacity=".6"><ellipse cx="57" cy="101" rx="10" ry="7"/><ellipse cx="143" cy="101" rx="10" ry="7"/></g>${bow}`;
}
function teddy(hold, wave) {
  if (C.teddyImage) return `<img src="${C.teddyImage}" alt="Cute teddy bear">`;
  return `<svg viewBox="0 0 200 230" role="img" aria-label="Cute teddy bear">${bearG(BR)}<ellipse cx="46" cy="152" rx="15" ry="32" fill="${BR.b}" transform="rotate(20 46 152)"/><g class="${wave ? 'wave' : ''}"><ellipse cx="154" cy="152" rx="15" ry="32" fill="${BR.b}" transform="rotate(-20 154 152)"/></g>${hold ? `<text x="100" y="186" font-size="52" text-anchor="middle">${hold}</text>` : ''}</svg>`;
}
function couple() {
  if (C.coupleImage) return `<img src="${C.coupleImage}" alt="Two teddy bears">`;
  const arm = (x, y, r, f) => `<ellipse cx="${x}" cy="${y}" rx="12" ry="56" fill="${f}" transform="rotate(${r} ${x} ${y})"/>`;
  return `<svg viewBox="0 0 360 250" role="img" aria-label="Two teddy bears hugging and kissing"><g class="cl"><g transform="translate(14 16) scale(.84)">${bearG(BR)}</g></g><g class="cr"><g transform="translate(182 16) scale(.84)">${bearG(CR)}</g></g><g class="cl">${arm(176, 140, 82, BR.b)}</g><g class="cr">${arm(184, 154, -82, CR.b)}</g><text class="fx hf" x="180" y="44" font-size="34" text-anchor="middle">💞</text><text class="fx kf" x="180" y="104" font-size="30" text-anchor="middle">💋</text></svg>`;
}
const drawTeddies = (r = document) => r.querySelectorAll('.teddy').forEach(e => e.innerHTML = e.hasAttribute('data-couple') && C.couple ? couple() : teddy(e.dataset.hold, e.dataset.wave));
function coupleLoop(sel) { const el = $(sel); if (!el || !C.couple) return; el.dataset.mode = 'hug';
  const t = () => { el.dataset.mode = el.dataset.mode === 'hug' ? 'kiss' : 'hug';
    if (el.dataset.mode === 'kiss') { const r = el.getBoundingClientRect(); burst(r.left + r.width / 2, r.top + r.height * .35, '💋', 5); }
    later(t, 3200); };
  later(t, 3200); }

function spawn(cls, txt, css) { const s = document.createElement('span'); s.className = cls; s.textContent = txt; s.style.cssText = css; document.body.append(s); return s; }
function burst(x, y, e = '✨', n = 10) {
  for (let i = 0; i < n; i++) { const a = rnd(0, 6.28), d = rnd(40, 120); const s = spawn('bit', e, `left:${x}px;top:${y}px;--dx:${Math.cos(a) * d}px;--dy:${Math.sin(a) * d - 30}px`); setTimeout(() => s.remove(), 1200); }
}
function confetti(n = 90) {
  for (let i = 0; i < n; i++) { const c = document.createElement('i'); c.className = 'cf'; c.style.cssText = `left:${rnd(0, 100)}vw;background:hsl(${rnd(0, 360)} 90% 70%);--r:${rnd(0, 720)}deg;--x:${rnd(-100, 100)}px;animation-duration:${rnd(2.5, 4.5)}s;animation-delay:${rnd(0, .6)}s`; document.body.append(c); setTimeout(() => c.remove(), 5500); }
}
function balloons(n = 6) {
  for (let i = 0; i < n; i++) { const s = spawn('bl', '🎈', `left:${rnd(2, 90)}vw;--sw:${rnd(-40, 40)}px;animation-duration:${rnd(5, 8)}s;animation-delay:${rnd(0, 1)}s`); setTimeout(() => s.remove(), 9500); }
}
const floaters = ['❤️', '💖', '✨', '🧸', '⭐', '🎈', '💕'];
setInterval(() => { if (document.hidden) return; const s = spawn('fl', floaters[Math.floor(rnd(0, floaters.length))], `left:${rnd(0, 94)}vw;font-size:${rnd(1, 2.2)}rem;--sw:${rnd(-50, 50)}px;animation-duration:${rnd(9, 15)}s`); setTimeout(() => s.remove(), 15500); }, 800);

function type(el, txt, sp = 55, done) {
  const m = run, a = [...txt]; let i = 0; el.textContent = '';
  (function t() { if (m !== run) return; el.textContent = a.slice(0, ++i).join(''); i < a.length ? setTimeout(t, sp) : done && done(); })();
}

const order = [1, 2, 3, 4, 5, 6, 7].filter(n => !(n === 3 && !C.sections.cake) && !(n === 6 && (!C.sections.memories || !C.memories.length)));
function go(n, overlay) {
  run++; clearInterval(loop); cur = n; const t = $('#s' + n);
  $$('.step').forEach(s => { if (s === t) return; if (overlay && s.classList.contains('active')) s.classList.add('dim'); else s.classList.remove('active', 'dim'); });
  t.querySelectorAll('.rv').forEach(e => e.classList.remove('on'));
  t.classList.remove('dim'); t.classList.add('active'); t.scrollTop = 0;
  $$('#dots i').forEach(d => d.classList.toggle('on', +d.dataset.n <= n));
  onEnter[n] && onEnter[n]();
}
const goNext = () => go(order[order.indexOf(cur) + 1] || 1);
const on = id => $(id).classList.add('on');

const onEnter = {
  2() { const a = $('#d1'), b = $('#d2'); a.textContent = b.textContent = '';
    type(a, fmt(C.texts.day1), 60, () => later(() => type(b, fmt(C.texts.day2), 60, () => on('#b2')), 400)); },
  3() { coupleLoop('#t3'); const c = $$('.candle'); c.forEach(x => x.classList.remove('lit')); $('#t3').classList.remove('jump');
    c.forEach((x, i) => later(() => x.classList.add('lit'), 1200 + i * 500));
    later(() => { on('#hb'); $('#t3').classList.add('jump'); confetti(120); balloons(8); }, 3000);
    later(() => on('#wait'), 4800); },
  4() { $('#env').className = 'env'; $('#b4').classList.remove('gone'); },
  5() { const L = C.letter, s = $('#scroll'), m = run; let skip = false;
    s.innerHTML = '<div class="teddy sm sticker" data-hold="💌"></div>'; drawTeddies(s); s.onclick = () => skip = true;
    for (let i = 0; i < 3; i++) later(() => burst(innerWidth / 2, innerHeight / 2, '💕', 10), 300 + i * 800);
    const items = [['h2', L.title], ['p', L.greeting], ...L.paragraphs.map(p => ['p', p])];
    if (L.quote) items.push(['blockquote', L.quote]); items.push(['p', L.signature, 'sig']);
    (function next(i) { if (m !== run || i >= items.length) return;
      const [tag, txt, cls] = items[i], e = document.createElement(tag), a = [...fmt(txt)]; let k = 0;
      e.className = (cls || '') + ' typing'; s.append(e);
      (function t() { if (m !== run) return; k = skip ? a.length : k + 1; e.textContent = a.slice(0, k).join(''); s.scrollTop = s.scrollHeight;
        if (k < a.length) setTimeout(t, 28); else { e.classList.remove('typing'); setTimeout(() => next(i + 1), skip ? 0 : 350); } })();
    })(0); },
  6() { buildCar(); },
  7() { coupleLoop('#t7'); later(() => on('#f1'), 400);
    later(() => { on('#f2'); confetti(150); balloons(10); }, 1800);
    later(() => on('#f3'), 3200);
    later(() => { on('#f4'); $('#f4').scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 5800);
    loop = setInterval(() => { confetti(30); balloons(2); const r = $('#t7').getBoundingClientRect(); burst(r.left + r.width / 2, r.top + r.height / 2, '❤️', 7); }, 3000); }
};

$('#b4').onclick = e => { const b = e.currentTarget, env = $('#env'); b.classList.add('gone'); env.classList.add('shake');
  later(() => { env.classList.remove('shake'); env.classList.add('open'); const r = $('.seal').getBoundingClientRect(); burst(r.left + r.width / 2, r.top + r.height / 2, '💗', 12); }, 700);
  later(() => go(5, true), 3100); };

let ci = 0;
function buildCar() {
  const T = $('#track'), H = $('#thumbs'), bad = "this.replaceWith(Object.assign(document.createElement('div'),{className:'ph',textContent:'🧸 Add your photo in config.js'}))";
  T.innerHTML = H.innerHTML = '';
  C.memories.forEach((m, i) => {
    const q = s => String(s || '').replace(/"/g, '&quot;'), f = document.createElement('figure'); f.className = 'slide';
    f.innerHTML = (m.type === 'video' ? `<video src="${q(m.src)}" controls playsinline preload="metadata"></video>` : `<img src="${q(m.src)}" alt="${q(m.caption) || 'Memory ' + (i + 1)}" onerror="${bad}">`) + (m.caption ? `<figcaption>${fmt(m.caption)}</figcaption>` : '');
    T.append(f);
    const b = document.createElement('button'); b.className = 'th'; b.setAttribute('aria-label', 'Show memory ' + (i + 1));
    b.innerHTML = m.type === 'video' ? '🎥' : `<img src="${q(m.src)}" alt="" onerror="this.remove()">`; b.onclick = () => show(i); H.append(b);
  });
  H.hidden = C.memories.length < 2; show(0);
}
function show(i) {
  const N = C.memories.length; ci = (i + N) % N;
  $('#track').style.transform = `translateX(-${ci * 100}%)`; $('#count').textContent = `${ci + 1} / ${N}`;
  $$('.slide').forEach((s, k) => { s.classList.toggle('on', k === ci); const v = s.querySelector('video'); if (v && k !== ci) v.pause(); });
  $$('.th').forEach((t, k) => t.classList.toggle('on', k === ci));
  const th = $$('.th')[ci]; th && th.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
  const r = $('#vp').getBoundingClientRect(); burst(r.left + r.width / 2, r.top + r.height / 2, ['✨', '💖', '❤️'][ci % 3], 9);
  if (ci === N - 1) later(() => { on('#memEnd'); $('#memEnd').scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }, 700);
}
$('#prv').onclick = () => show(ci - 1); $('#nxt').onclick = () => show(ci + 1);
let sx = 0;
$('#vp').addEventListener('touchstart', e => sx = e.touches[0].clientX, { passive: true });
$('#vp').addEventListener('touchend', e => { const d = e.changedTouches[0].clientX - sx; if (Math.abs(d) > 50) show(ci + (d < 0 ? 1 : -1)); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') $('#lb').classList.remove('on'); if (cur === 6) { if (e.key === 'ArrowRight') show(ci + 1); if (e.key === 'ArrowLeft') show(ci - 1); } });
$('#track').addEventListener('click', e => { if (e.target.tagName === 'IMG') { $('#lb img').src = e.target.src; $('#lb img').alt = e.target.alt; $('#lb').classList.add('on'); } });
$('#lb').onclick = () => $('#lb').classList.remove('on');

if (C.music) { audio = new Audio(C.music); audio.loop = true; audio.volume = .5; const m = $('#mute'); m.hidden = false;
  m.onclick = () => { if (audio.paused) { audio.play(); m.textContent = '🔊'; } else { audio.pause(); m.textContent = '🔇'; } }; }
document.addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b) return; const r = b.getBoundingClientRect();
  burst(e.detail ? e.clientX : r.left + r.width / 2, e.detail ? e.clientY : r.top + r.height / 2, '💖', 7);
  if (audio && !started && b.id !== 'mute') { started = 1; audio.play().then(() => $('#mute').textContent = '🔊').catch(() => {}); }
  if (b.hasAttribute('data-next')) goNext();
  if (b.hasAttribute('data-replay')) go(1);
});
$$('[data-c]').forEach(e => e.textContent = fmt(get(C, e.dataset.c)));
$('#f3').textContent = fmt(C.finalMessage);
$('#dots').innerHTML = order.map(n => `<i data-n="${n}"></i>`).join('');
drawTeddies(); go(1);
