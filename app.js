// ═══════════════════════════════════════════════════════
//  HERO FORGE — app.js
// ═══════════════════════════════════════════════════════

// ── DATOS ───────────────────────────────────────────────

const POWERS = {
  'Accidente científico': [
    { icon: '☢️', name: 'Energía Radiactiva', desc: 'Emites pulsos de energía que desintegran materia.' },
    { icon: '🧪', name: 'Regeneración Celular', desc: 'Tu cuerpo se cura de cualquier herida en segundos.' },
    { icon: '💪', name: 'Superfuerza Mutada', desc: 'Levantas hasta 100 toneladas sin esfuerzo.' },
    { icon: '🔬', name: 'Sentidos Amplificados', desc: 'Percibes frecuencias invisibles al ojo humano.' },
  ],
  'Entrenamiento extremo': [
    { icon: '🥋', name: 'Dominio de Artes Marciales', desc: 'Maestro en 127 estilos de combate cuerpo a cuerpo.' },
    { icon: '🎯', name: 'Puntería Perfecta', desc: 'Nunca fallas un tiro, sin importar las condiciones.' },
    { icon: '🧠', name: 'Mente Táctica', desc: 'Calculas miles de escenarios de combate por segundo.' },
    { icon: '⚡', name: 'Velocidad de Pico Humano', desc: 'Reaccionas más rápido que un disparo de pistola.' },
  ],
  'Tecnología avanzada': [
    { icon: '🤖', name: 'Armadura Exoesqueleto', desc: 'Traje de vibranium con IA integrada y vuelo.' },
    { icon: '🔫', name: 'Arsenal Tecnológico', desc: 'Gadgets de última generación para cada situación.' },
    { icon: '💻', name: 'Hackeo Neuronal', desc: 'Interfaz directa con cualquier sistema electrónico.' },
    { icon: '🛸', name: 'Propulsión Antigravedad', desc: 'Vuelas a velocidades supersónicas con total control.' },
  ],
  'Magia ancestral': [
    { icon: '🔮', name: 'Manipulación Dimensional', desc: 'Abres portales entre dimensiones a voluntad.' },
    { icon: '✨', name: 'Hechizos de Enlace', desc: 'Atas la realidad con conjuros de poder incalculable.' },
    { icon: '🌀', name: 'Control del Tiempo', desc: 'Puedes ralentizar o revertir momentos específicos.' },
    { icon: '🧿', name: 'Visión Mística', desc: 'Ves el pasado y posibles futuros de cualquier objeto.' },
  ],
  'Alienígena': [
    { icon: '👽', name: 'Fuerza Cósmica', desc: 'Poder físico que rivaliza con las estrellas.' },
    { icon: '🌌', name: 'Vuelo Interestelar', desc: 'Viajas a velocidades cercanas a la luz.' },
    { icon: '🔆', name: 'Proyección de Energía', desc: 'Disparas rayos de energía pura desde cualquier punto.' },
    { icon: '🧬', name: 'Adaptación Biológica', desc: 'Tu cuerpo se adapta instantáneamente a cualquier entorno.' },
  ],
  'Mutación genética': [
    { icon: '🧬', name: 'Gen-X Activo', desc: 'Tu mutación te coloca en la cima de la evolución humana.' },
    { icon: '🌡️', name: 'Control Elemental', desc: 'Manipulas fuego, hielo, electricidad o viento.' },
    { icon: '🕸️', name: 'Biomecánica Alterada', desc: 'Tu cuerpo produce sustancias y materiales únicos.' },
    { icon: '👁️', name: 'Telepáticas Avanzadas', desc: 'Lees, modificas y controlas mentes a kilómetros.' },
  ],
};

const COMBAT_POWERS = {
  'Fuerza bruta': [
    { icon: '💥', name: 'Golpe Sísmico', desc: 'Un puñetazo que crea ondas de choque a kilómetros.' },
    { icon: '🦾', name: 'Resistencia Absoluta', desc: 'Absorbes impactos que destruirían edificios.' },
  ],
  'Velocidad y agilidad': [
    { icon: '⚡', name: 'Velocidad Supersónica', desc: 'Te mueves a Mach 5, invisible al ojo humano.' },
    { icon: '🌪️', name: 'Ilusión de Multiplicación', desc: 'Tu velocidad crea copias visuales que confunden.' },
  ],
  'Poderes mentales': [
    { icon: '🧠', name: 'Telepatía de Combate', desc: 'Conoces el próximo movimiento antes de que ocurra.' },
    { icon: '💫', name: 'Telequinesis Ofensiva', desc: 'Usas objetos como proyectiles con tu mente.' },
  ],
  'Ataques a distancia': [
    { icon: '🎯', name: 'Precisión Imposible', desc: 'Aciertas blancos en movimiento a 3 km de distancia.' },
    { icon: '💢', name: 'Rayo de Enfoque', desc: 'Concentras energía en un punto destructor.' },
  ],
  'Sigilo y táctica': [
    { icon: '🌑', name: 'Camuflaje Perfecto', desc: 'Te vuelves completamente invisible a cualquier sensor.' },
    { icon: '🗡️', name: 'Strike Letal', desc: 'Un golpe silencioso que neutraliza sin dejar rastro.' },
  ],
  'Magia y hechizos': [
    { icon: '🔥', name: 'Conjuro de Fuego Eterno', desc: 'Llamas que no se apagan con agua ni vacío.' },
    { icon: '⚡', name: 'Tormenta Arcana', desc: 'Desatas una tempestad mágica de energía pura.' },
  ],
};

const INSPIRATIONS = {
  Marvel: [
    { name: 'Spider-Man', uni: 'marvel' }, { name: 'Iron Man', uni: 'marvel' },
    { name: 'Thor', uni: 'marvel' }, { name: 'Black Panther', uni: 'marvel' },
    { name: 'Doctor Strange', uni: 'marvel' }, { name: 'Captain Marvel', uni: 'marvel' },
    { name: 'Wolverine', uni: 'marvel' }, { name: 'Magneto', uni: 'marvel' },
    { name: 'Thanos', uni: 'marvel' }, { name: 'Deadpool', uni: 'marvel' },
  ],
  DC: [
    { name: 'Batman', uni: 'dc' }, { name: 'Superman', uni: 'dc' },
    { name: 'Wonder Woman', uni: 'dc' }, { name: 'The Flash', uni: 'dc' },
    { name: 'Aquaman', uni: 'dc' }, { name: 'Green Lantern', uni: 'dc' },
    { name: 'Joker', uni: 'dc' }, { name: 'Lex Luthor', uni: 'dc' },
    { name: 'Harley Quinn', uni: 'dc' }, { name: 'Nightwing', uni: 'dc' },
  ],
  Ambos: [
    { name: 'Spider-Man', uni: 'marvel' }, { name: 'Batman', uni: 'dc' },
    { name: 'Iron Man', uni: 'marvel' }, { name: 'Superman', uni: 'dc' },
    { name: 'Doctor Strange', uni: 'marvel' }, { name: 'Wonder Woman', uni: 'dc' },
    { name: 'Wolverine', uni: 'marvel' }, { name: 'The Flash', uni: 'dc' },
    { name: 'Thanos', uni: 'marvel' }, { name: 'Joker', uni: 'dc' },
  ],
};

const GEAR_BY_ORIGIN = {
  'Accidente científico': [
    { icon: '🧪', name: 'Suero Estabilizador', type: 'Consumible' },
    { icon: '☢️', name: 'Traje de Contención', type: 'Armadura' },
    { icon: '💊', name: 'Inhibidores de Poder', type: 'Utilidad' },
    { icon: '🔬', name: 'Escáner Molecular', type: 'Tecnología' },
  ],
  'Entrenamiento extremo': [
    { icon: '🥷', name: 'Traje de Combate Stealth', type: 'Armadura' },
    { icon: '🎯', name: 'Batarangs / Shurikens', type: 'Arma arrojadiza' },
    { icon: '🪝', name: 'Gancho de Desplazamiento', type: 'Movilidad' },
    { icon: '🔦', name: 'Visión Nocturna Táctica', type: 'Tecnología' },
  ],
  'Tecnología avanzada': [
    { icon: '🤖', name: 'Armadura Mark XVII', type: 'Exoesqueleto' },
    { icon: '📡', name: 'Sistema de Comunicación Cifrado', type: 'Tecnología' },
    { icon: '🔋', name: 'Reactor de Energía Personal', type: 'Fuente de poder' },
    { icon: '🛸', name: 'Plataforma de Vuelo', type: 'Movilidad' },
  ],
  'Magia ancestral': [
    { icon: '📖', name: 'Libro de los Vishuanti', type: 'Grimorio' },
    { icon: '💍', name: 'Anillo de Poder Místico', type: 'Accesorio' },
    { icon: '🪄', name: 'Bastón Dimensional', type: 'Foco arcano' },
    { icon: '🧿', name: 'Amuleto de Protección', type: 'Defensa mágica' },
  ],
  'Alienígena': [
    { icon: '💍', name: 'Anillo de Poder Green Lantern', type: 'Arma/Accesorio' },
    { icon: '🛸', name: 'Nave Personal Compacta', type: 'Transporte' },
    { icon: '⚡', name: 'Cristal de Energía Cósmica', type: 'Fuente de poder' },
    { icon: '🌌', name: 'Mapa Galáctico Holográfico', type: 'Exploración' },
  ],
  'Mutación genética': [
    { icon: '🧬', name: 'Inhibidor de Mutación', type: 'Utilidad' },
    { icon: '🩺', name: 'Monitor Biométrico', type: 'Tecnología' },
    { icon: '🦾', name: 'Potenciador de Mutación', type: 'Mejora' },
    { icon: '🎓', name: 'Credencial del Instituto Xavier', type: 'Identificación' },
  ],
};

const BACKSTORIES = {
  'Proteger a los inocentes': [
    'Viste cómo una tragedia arrasó con todo lo que amabas cuando eras niño. Esa noche prometiste que mientras tú pudieras hacer algo, nadie más sufriría lo mismo. No es un trabajo para ti. Es una deuda que nunca terminarás de saldar.',
    'Tuviste el poder desde joven pero lo ignoraste por años. Un día, al mirar para otro lado, alguien pagó el precio. Desde entonces usas cada gramo de lo que tienes para que eso no vuelva a pasar.',
  ],
  'Venganza personal': [
    'Alguien destruyó todo lo que importaba. Nombre, organización, objetivo: lo tienes todo anotado. No te llames héroe ni villano, llámarte lo que eres: alguien con cuentas pendientes y el poder de cobrarlas.',
    'El sistema te falló cuando más lo necesitabas. Ahora que tienes el poder, decidiste que el sistema te debe una respuesta. La conseguirás de una forma u otra.',
  ],
  'Dominar el mundo': [
    'No es ambición sin más: es visión. El mundo bajo el liderazgo correcto podría ser perfecto. Y tú eres el único con la inteligencia y el poder para llevarlo ahí. Los demás lo entenderán cuando sea demasiado tarde para detenerlo.',
    'Has visto cómo los llamados héroes y gobiernos fracasan una y otra vez. El caos es la prueba de que necesitan un orden superior. Tú lo serás.',
  ],
  'Buscar la verdad': [
    'Descubriste que todo lo que creías sobre tu origen, tu mundo y tu propósito era una mentira construida. Ahora cada misión es un paso más hacia la verdad que alguien se esforzó mucho en ocultarte.',
    'Hay fuerzas que operan en las sombras y que nadie ve. Tú las ves. Y una vez que las ves, no puedes simplemente mirar hacia otro lado.',
  ],
  'Sobrevivir': [
    'No elegiste esta vida ni estos poderes. Simplemente sobreviviste cuando nadie más lo hizo. Ahora usas lo que tienes para seguir en pie un día más, porque eso es lo único que sabes hacer bien.',
    'Cada día es una batalla. No contra villanos ni por el bien mayor, sino por continuar existiendo en un mundo que preferiría que no lo hicieras.',
  ],
  'Redimirse': [
    'Hubo un tiempo en que eras lo que ahora combates. Hiciste cosas de las que no te enorgulleces. No puedes borrarlas, pero puedes pasar el resto de tu vida intentando compensarlas.',
    'Te dieron una segunda oportunidad cuando no la merecías. No sabes bien por qué. Pero no vas a desperdiciarla.',
  ],
};

const NEMESIS_BY_SIDE = {
  'Héroe': [
    'Un villano que comparte exactamente tu mismo origen pero tomó el camino opuesto. Te conoce mejor que nadie.',
    'Una organización secreta que te considera la mayor amenaza para sus planes de control global.',
    'Alguien de tu pasado que cree que te lo mereces. Y quizás tenga razón en algunos puntos.',
  ],
  'Villano': [
    'El héroe más obstinado del planeta que ha jurado detenerte sin importar el costo.',
    'Un rival dentro de tu propia facción que quiere tu poder y no tiene escrúpulos.',
    'Una alianza de héroes que considera tu eliminación una prioridad de nivel uno.',
  ],
  'Antihéroe': [
    'Tanto héroes como villanos te consideran impredecible y peligroso. Ninguno confía en ti.',
    'Tu pasado como villano te persigue. Alguien que amabas juró encontrarte.',
    'Un agente del gobierno obsesionado con meterte en una celda o en una tumba.',
  ],
};

const WEAKNESSES = [
  '⚠ Tu mayor vulnerabilidad no es física: es la gente que te importa. Cualquiera que lo sepa puede usarla contra ti.',
  '⚠ El exceso de poder te consume lentamente. Cada vez que te sueltas por completo, pierdes algo de tu humanidad.',
  '⚠ Una sustancia o frecuencia específica neutraliza todos tus poderes en segundos. Algunos ya lo saben.',
  '⚠ Tu mente lleva el peso de todo lo que has visto. En los momentos más críticos, a veces duda.',
  '⚠ Dependes de una fuente externa para mantener tus poderes activos. Si la pierdes, eres vulnerable.',
  '⚠ Tu código moral es tan rígido que tus enemigos lo explotan para predecir tus movimientos.',
];

const QUOTES = {
  'Héroe': [
    '"Con gran poder viene una responsabilidad que nadie te pide, pero que no puedes ignorar."',
    '"No lo hago porque sea fácil. Lo hago porque es lo correcto."',
    '"Cada vez que me caigo, hay alguien que me recuerda por qué me levanto."',
  ],
  'Villano': [
    '"Llámame villano. Los vencedores siempre reescriben la historia de todas formas."',
    '"Ellos defienden el orden. Yo defiendo la verdad. La diferencia es que yo sé cuál es cuál."',
    '"El caos no es mi arma. Es mi idioma."',
  ],
  'Antihéroe': [
    '"No soy el héroe que necesitan. Soy el que pueden tener."',
    '"Hago lo correcto de formas que nadie aprobaría. Los resultados hablan solos."',
    '"Héroes y villanos duermen bien por las noches. Yo, en cambio, hago el trabajo real."',
  ],
};

const AVATARS_BY_COMBAT = {
  'Fuerza bruta':        '🦾',
  'Velocidad y agilidad':'⚡',
  'Poderes mentales':    '🧠',
  'Ataques a distancia': '🎯',
  'Sigilo y táctica':    '🌑',
  'Magia y hechizos':    '🔮',
};

const STAT_CONFIG = [
  { key: 'Fuerza',      color: 'var(--str)', base: 40 },
  { key: 'Velocidad',   color: 'var(--spd)', base: 35 },
  { key: 'Inteligencia',color: 'var(--int)', base: 45 },
  { key: 'Durabilidad', color: 'var(--dur)', base: 40 },
  { key: 'Energía',     color: 'var(--ener)', base: 30 },
  { key: 'Combate',     color: 'var(--fight)', base: 50 },
];

const STAT_BOOSTS = {
  'Fuerza bruta':         { Fuerza: 35, Durabilidad: 20 },
  'Velocidad y agilidad': { Velocidad: 40, Combate: 15 },
  'Poderes mentales':     { Inteligencia: 40, Energía: 20 },
  'Ataques a distancia':  { Energía: 35, Velocidad: 20 },
  'Sigilo y táctica':     { Combate: 35, Inteligencia: 20 },
  'Magia y hechizos':     { Energía: 45, Inteligencia: 15 },
};

// ── UTILIDADES ──────────────────────────────────────────

const rand  = arr => arr[Math.floor(Math.random() * arr.length)];
const randN = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
function pick(arr, n) {
  const c = [...arr], r = [];
  for (let i = 0; i < n && c.length; i++) r.push(c.splice(Math.floor(Math.random() * c.length), 1)[0]);
  return r;
}

// ── ESTADO ──────────────────────────────────────────────

let form = {
  name: '', universe: 'Marvel', side: 'Héroe',
  origin: '', combat: '', motivation: '',
};

// ── CANVAS FONDO ────────────────────────────────────────

(function bgCanvas() {
  const canvas = document.getElementById('bg-canvas');
  const ctx    = canvas.getContext('2d');
  const pts    = [];

  function resize() { canvas.width = innerWidth; canvas.height = innerHeight; }
  resize(); addEventListener('resize', resize);

  for (let i = 0; i < 55; i++) {
    pts.push({
      x: Math.random() * innerWidth,
      y: Math.random() * innerHeight,
      r: Math.random() * 1.2 + .2,
      a: Math.random() * Math.PI * 2,
      speed: Math.random() * .3 + .05,
      red: Math.random() > .7,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pts.forEach(p => {
      p.x += Math.cos(p.a) * p.speed;
      p.y += Math.sin(p.a) * p.speed;
      p.a += (Math.random() - .5) * .02;
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.red
        ? `rgba(232,25,44,${Math.random() * .4 + .1})`
        : `rgba(77,159,255,${Math.random() * .3 + .05})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
})();

// ── CURSOR PERSONALIZADO ─────────────────────────────────

(function customCursor() {
  const cursor = document.getElementById('cursor');
  const trail  = document.getElementById('cursor-trail');
  let tx = 0, ty = 0;

  document.addEventListener('mousemove', e => {
    tx = e.clientX; ty = e.clientY;
    cursor.style.left = tx + 'px';
    cursor.style.top  = ty + 'px';
    setTimeout(() => {
      trail.style.left = tx + 'px';
      trail.style.top  = ty + 'px';
    }, 80);
  });

  document.querySelectorAll('button, input, a').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width  = '24px';
      cursor.style.height = '24px';
      cursor.style.background = 'var(--gold)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width  = '16px';
      cursor.style.height = '16px';
      cursor.style.background = 'var(--red)';
    });
  });
})();

// ── NAVEGACIÓN ───────────────────────────────────────────

function goTo(id) {
  document.querySelectorAll('.screen').forEach(s => {
    s.classList.remove('active');
    s.style.animation = 'none';
  });
  const t = document.getElementById(id);
  void t.offsetWidth;
  t.style.animation = '';
  t.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setStep(n) {
  document.querySelectorAll('.form-step').forEach((s, i) => {
    s.classList.toggle('active', i + 1 === n);
  });
  document.querySelectorAll('.step').forEach((s, i) => {
    s.classList.remove('active', 'done');
    if (i + 1 === n) s.classList.add('active');
    if (i + 1 < n)  s.classList.add('done');
  });
}

// ── TOGGLE HELPERS ───────────────────────────────────────

function makeToggle(selector, prop) {
  document.querySelectorAll(selector).forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll(selector).forEach(b => b.classList.remove('active', 'selected'));
      btn.classList.add('active', 'selected');
      form[prop] = btn.dataset.value;
    });
  });
}

function makeGrid(selector, prop) {
  document.querySelectorAll(selector).forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll(selector).forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      form[prop] = btn.dataset.value;
    });
  });
}

// ── EVENTOS ──────────────────────────────────────────────

document.getElementById('startBtn').addEventListener('click',     () => goTo('screen-form'));
document.getElementById('backBtn').addEventListener('click',      () => goTo('screen-intro'));
document.getElementById('backToStep1').addEventListener('click',  () => setStep(1));
document.getElementById('backToStep2').addEventListener('click',  () => setStep(2));

makeToggle('.uni-btn', 'universe');
makeToggle('.side-btn', 'side');
makeGrid('.origin-card', 'origin');
makeGrid('.combat-btn', 'combat');
makeGrid('.motiv-btn', 'motivation');

document.getElementById('toStep2').addEventListener('click', () => {
  form.name = document.getElementById('heroName').value.trim();
  if (!form.name) {
    document.getElementById('formError').textContent = 'Ponle nombre a tu héroe primero.';
    return;
  }
  setStep(2);
});

document.getElementById('toStep3').addEventListener('click', () => {
  if (!form.origin) { document.getElementById('formError').textContent = 'Elige el origen de tus poderes.'; return; }
  if (!form.combat)  { document.getElementById('formError').textContent = 'Elige tu tipo de combate.'; return; }
  document.getElementById('formError').textContent = '';
  setStep(3);
});

document.getElementById('generateBtn').addEventListener('click', () => {
  if (!form.motivation) {
    document.getElementById('formError').textContent = 'Elige tu motivación.';
    return;
  }
  document.getElementById('formError').textContent = '';
  generateHero();
});

document.getElementById('rerollBtn').addEventListener('click', () => {
  form = { name: '', universe: 'Marvel', side: 'Héroe', origin: '', combat: '', motivation: '' };
  document.querySelectorAll('.opt-card, .origin-card, .combat-btn, .motiv-btn').forEach(b => b.classList.remove('selected'));
  document.querySelectorAll('.uni-btn').forEach((b, i) => b.classList.toggle('active', i === 0));
  document.querySelectorAll('.side-btn').forEach((b, i) => b.classList.toggle('active', i === 0));
  document.getElementById('heroName').value = '';
  setStep(1);
  goTo('screen-form');
});

document.getElementById('printBtn').addEventListener('click', () => window.print());

// ── GENERADOR ────────────────────────────────────────────

function generateHero() {
  const { name, universe, side, origin, combat, motivation } = form;

  // Poderes: 2 del origen + 2 del combate
  const originPowers = pick(POWERS[origin] || [], 2);
  const combatPowers = pick(COMBAT_POWERS[combat] || [], 2);
  const allPowers    = [...originPowers, ...combatPowers];

  // Inspiraciones
  const inspoPool = INSPIRATIONS[universe] || INSPIRATIONS['Ambos'];
  const inspos    = pick(inspoPool, 3);

  // Gear
  const gear = pick(GEAR_BY_ORIGIN[origin] || [], 4);

  // Stats
  const boosts  = STAT_BOOSTS[combat] || {};
  const stats   = STAT_CONFIG.map(s => ({
    ...s,
    value: Math.min(100, s.base + (boosts[s.key] || 0) + randN(0, 20)),
  }));

  // Backstory, nemesis, weakness, quote
  const backstory = rand(BACKSTORIES[motivation] || ['Tu historia está por escribirse.']);
  const nemesis   = rand(NEMESIS_BY_SIDE[side]   || NEMESIS_BY_SIDE['Héroe']);
  const weakness  = rand(WEAKNESSES);
  const quote     = rand(QUOTES[side]             || QUOTES['Héroe']);

  // Avatar
  const avatar = AVATARS_BY_COMBAT[combat] || '⚡';

  // Tags
  const tags = [origin, combat, universe];

  render({ name, universe, side, allPowers, inspos, gear, stats, backstory, nemesis, weakness, quote, avatar, tags });
  goTo('screen-result');
}

function render({ name, universe, side, allPowers, inspos, gear, stats, backstory, nemesis, weakness, quote, avatar, tags }) {

  // Card
  document.getElementById('universeBadge').textContent = universe.toUpperCase();
  document.getElementById('sideBadge').textContent     = side.toUpperCase();
  document.getElementById('heroAvatar').textContent    = avatar;
  document.getElementById('heroCodename').textContent  = name.toUpperCase();
  document.getElementById('heroRealname').textContent  = 'Identidad secreta';

  const heroBg = document.getElementById('heroBg');
  heroBg.style.background = side === 'Villano'
    ? 'linear-gradient(135deg, #1a0000, #0a0d1a, #00001a)'
    : side === 'Antihéroe'
      ? 'linear-gradient(135deg, #1a0d00, #0a0d1a, #000f1a)'
      : 'linear-gradient(135deg, #0d001a, #0a0d1a, #001a0d)';

  // Tags
  const tagsEl = document.getElementById('heroTags');
  tagsEl.innerHTML = tags.map(t => `<span class="hero-tag">${t}</span>`).join('');

  // Stats
  document.getElementById('statsList').innerHTML = stats.map(s => `
    <div class="stat-row">
      <span class="stat-label">${s.key}</span>
      <div class="stat-track">
        <div class="stat-fill" style="width:${s.value}%;background:${s.color};animation-duration:${.5 + Math.random() * .5}s"></div>
      </div>
      <span class="stat-num" style="color:${s.color}">${s.value}</span>
    </div>`).join('');

  // Powers
  document.getElementById('powersGrid').innerHTML = allPowers.map(p => `
    <div class="power-item">
      <span class="power-icon">${p.icon}</span>
      <div>
        <div class="power-name">${p.name}</div>
        <div class="power-desc">${p.desc}</div>
      </div>
    </div>`).join('');

  // Inspiraciones
  document.getElementById('inspoRow').innerHTML = inspos.map(i => `
    <div class="inspo-chip">
      <span class="inspo-uni ${i.uni}">${i.uni.toUpperCase()}</span>
      ${i.name}
    </div>`).join('');

  // Gear
  document.getElementById('gearGrid').innerHTML = gear.map(g => `
    <div class="gear-item">
      <span class="gear-icon">${g.icon}</span>
      <div>
        <div class="gear-name">${g.name}</div>
        <div class="gear-type">${g.type}</div>
      </div>
    </div>`).join('');

  // Textos
  document.getElementById('originText').textContent   = backstory;
  document.getElementById('nemesisText').textContent  = nemesis;
  document.getElementById('weaknessText').textContent = weakness;
  document.getElementById('heroQuote').textContent    = quote;
}
