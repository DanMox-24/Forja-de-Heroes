// ═══════════════════════════════════════════════════════
//  HERO FORGE — app.js
// ═══════════════════════════════════════════════════════

// ── DATOS ───────────────────────────────────────────────

const POWERS = {
  'Accidente científico': [
    { icon:'☢️', name:'Energía Radiactiva',    desc:'Emites pulsos de energía que desintegran materia sólida.' },
    { icon:'🧪', name:'Regeneración Celular',  desc:'Tu cuerpo se cura de cualquier herida en cuestión de segundos.' },
    { icon:'💪', name:'Superfuerza Mutada',    desc:'Levantas hasta 100 toneladas sin el menor esfuerzo.' },
    { icon:'🔬', name:'Sentidos Amplificados', desc:'Percibes frecuencias y dimensiones invisibles al ojo humano.' },
  ],
  'Entrenamiento extremo': [
    { icon:'🥋', name:'Maestría en Combate',   desc:'Dominas 127 estilos de combate cuerpo a cuerpo.' },
    { icon:'🎯', name:'Puntería Perfecta',     desc:'Jamás fallas un disparo, sin importar las condiciones.' },
    { icon:'🧠', name:'Mente Táctica',         desc:'Calculas miles de escenarios de combate por segundo.' },
    { icon:'⚡', name:'Velocidad de Pico',     desc:'Reaccionas más rápido que una bala de pistola.' },
  ],
  'Tecnología avanzada': [
    { icon:'🤖', name:'Armadura Exoesqueleto', desc:'Traje de vibranium con IA integrada y propulsión de vuelo.' },
    { icon:'🔫', name:'Arsenal Tecnológico',   desc:'Gadgets de última generación para cada situación posible.' },
    { icon:'💻', name:'Hackeo Neuronal',       desc:'Interfaz directa con cualquier sistema electrónico.' },
    { icon:'🛸', name:'Propulsión Antigravedad',desc:'Vuelas a velocidades supersónicas con control total.' },
  ],
  'Magia ancestral': [
    { icon:'🔮', name:'Manipulación Dimensional',desc:'Abres portales entre dimensiones a voluntad.' },
    { icon:'✨', name:'Hechizos de Enlace',     desc:'Atas la realidad con conjuros de poder incalculable.' },
    { icon:'🌀', name:'Control del Tiempo',     desc:'Ralentizas o revert es momentos específicos.' },
    { icon:'🧿', name:'Visión Mística',         desc:'Ves el pasado y futuros posibles de cualquier objeto.' },
  ],
  'Alienígena': [
    { icon:'👽', name:'Fuerza Cósmica',        desc:'Poder físico que rivaliza con las estrellas mismas.' },
    { icon:'🌌', name:'Vuelo Interestelar',    desc:'Viajas a velocidades cercanas a la luz.' },
    { icon:'🔆', name:'Proyección de Energía', desc:'Disparas rayos de energía pura desde cualquier punto de tu cuerpo.' },
    { icon:'🧬', name:'Adaptación Biológica',  desc:'Tu cuerpo se adapta instantáneamente a cualquier entorno.' },
  ],
  'Mutación genética': [
    { icon:'🧬', name:'Gen-X Activo',          desc:'Tu mutación te coloca en la cima de la evolución humana.' },
    { icon:'🌡️', name:'Control Elemental',    desc:'Manipulas fuego, hielo, electricidad o viento.' },
    { icon:'🕸️', name:'Biomecánica Alterada', desc:'Tu cuerpo produce sustancias y materiales únicos.' },
    { icon:'👁️', name:'Telepatía Avanzada',   desc:'Lees, modificas y controlas mentes a kilómetros de distancia.' },
  ],
};

const COMBAT_POWERS = {
  'Fuerza bruta':         [{ icon:'💥', name:'Golpe Sísmico',    desc:'Un puñetazo que genera ondas de choque destructoras.' },{ icon:'🦾', name:'Resistencia Absoluta', desc:'Absorbes impactos que demolerían edificios enteros.' }],
  'Velocidad y agilidad': [{ icon:'⚡', name:'Velocidad Supersónica', desc:'Te mueves a Mach 5, invisible para el ojo humano.' },{ icon:'🌪️', name:'Multiplicación Visual', desc:'Tu velocidad crea copias que confunden a cualquier rival.' }],
  'Poderes mentales':     [{ icon:'🧠', name:'Telepatía de Combate', desc:'Conoces el próximo movimiento del enemigo antes de que ocurra.' },{ icon:'💫', name:'Telequinesis Ofensiva', desc:'Usas objetos como proyectiles devastadores con tu mente.' }],
  'Ataques a distancia':  [{ icon:'🎯', name:'Precisión Imposible', desc:'Aciertas blancos en movimiento a 3 km de distancia.' },{ icon:'💢', name:'Rayo de Enfoque', desc:'Concentras energía en un punto de destrucción absoluta.' }],
  'Sigilo y táctica':     [{ icon:'🌑', name:'Camuflaje Perfecto', desc:'Te vuelves completamente invisible a cualquier sensor.' },{ icon:'🗡️', name:'Strike Letal', desc:'Un golpe silencioso que neutraliza sin dejar rastro.' }],
  'Magia y hechizos':     [{ icon:'🔥', name:'Fuego Eterno', desc:'Llamas que no se apagan con agua, vacío ni tiempo.' },{ icon:'⚡', name:'Tormenta Arcana', desc:'Desatas una tempestad de energía mágica pura.' }],
};

const INSPIRATIONS = {
  Marvel: [
    {name:'Spider-Man',uni:'marvel'},{name:'Iron Man',uni:'marvel'},{name:'Thor',uni:'marvel'},
    {name:'Black Panther',uni:'marvel'},{name:'Doctor Strange',uni:'marvel'},{name:'Captain Marvel',uni:'marvel'},
    {name:'Wolverine',uni:'marvel'},{name:'Magneto',uni:'marvel'},{name:'Thanos',uni:'marvel'},{name:'Deadpool',uni:'marvel'},
  ],
  DC: [
    {name:'Batman',uni:'dc'},{name:'Superman',uni:'dc'},{name:'Wonder Woman',uni:'dc'},
    {name:'The Flash',uni:'dc'},{name:'Aquaman',uni:'dc'},{name:'Green Lantern',uni:'dc'},
    {name:'Joker',uni:'dc'},{name:'Lex Luthor',uni:'dc'},{name:'Harley Quinn',uni:'dc'},{name:'Nightwing',uni:'dc'},
  ],
  Ambos: [
    {name:'Spider-Man',uni:'marvel'},{name:'Batman',uni:'dc'},{name:'Iron Man',uni:'marvel'},
    {name:'Superman',uni:'dc'},{name:'Doctor Strange',uni:'marvel'},{name:'Wonder Woman',uni:'dc'},
    {name:'Wolverine',uni:'marvel'},{name:'The Flash',uni:'dc'},{name:'Thanos',uni:'marvel'},{name:'Joker',uni:'dc'},
  ],
};

const GEAR_BY_ORIGIN = {
  'Accidente científico': [{icon:'🧪',name:'Suero Estabilizador',type:'Consumible'},{icon:'☢️',name:'Traje de Contención',type:'Armadura'},{icon:'💊',name:'Inhibidores de Poder',type:'Utilidad'},{icon:'🔬',name:'Escáner Molecular',type:'Tecnología'}],
  'Entrenamiento extremo': [{icon:'🥷',name:'Traje de Combate Stealth',type:'Armadura'},{icon:'🎯',name:'Shurikens de Precisión',type:'Arma'},{icon:'🪝',name:'Gancho de Desplazamiento',type:'Movilidad'},{icon:'🔦',name:'Visión Nocturna Táctica',type:'Tecnología'}],
  'Tecnología avanzada': [{icon:'🤖',name:'Armadura Mark XVII',type:'Exoesqueleto'},{icon:'📡',name:'Sistema de Comunicación Cifrado',type:'Tecnología'},{icon:'🔋',name:'Reactor de Energía Personal',type:'Fuente de poder'},{icon:'🛸',name:'Plataforma de Vuelo',type:'Movilidad'}],
  'Magia ancestral': [{icon:'📖',name:'Libro de los Vishuanti',type:'Grimorio'},{icon:'💍',name:'Anillo de Poder Místico',type:'Accesorio'},{icon:'🪄',name:'Bastón Dimensional',type:'Foco arcano'},{icon:'🧿',name:'Amuleto de Protección',type:'Defensa mágica'}],
  'Alienígena': [{icon:'💍',name:'Anillo de Poder Cósmico',type:'Arma/Accesorio'},{icon:'🛸',name:'Nave Personal Compacta',type:'Transporte'},{icon:'⚡',name:'Cristal de Energía Cósmica',type:'Fuente de poder'},{icon:'🌌',name:'Mapa Galáctico Holográfico',type:'Exploración'}],
  'Mutación genética': [{icon:'🧬',name:'Inhibidor de Mutación',type:'Utilidad'},{icon:'🩺',name:'Monitor Biométrico',type:'Tecnología'},{icon:'🦾',name:'Potenciador de Mutación',type:'Mejora'},{icon:'🎓',name:'Credencial del Instituto Xavier',type:'Identificación'}],
};

const BACKSTORIES = {
  'Proteger a los inocentes': ['Viste cómo una tragedia arrasó con todo lo que amabas. Esa noche prometiste que mientras pudieras hacer algo, nadie más sufriría lo mismo. No es un trabajo para ti. Es una deuda que nunca terminarás de saldar.','Tuviste el poder desde joven pero lo ignoraste por años. Un día, al mirar para otro lado, alguien pagó el precio. Desde entonces usas todo lo que tienes para que eso no vuelva a ocurrir.'],
  'Venganza personal': ['Alguien destruyó todo lo que te importaba. Nombre, organización, objetivo: lo tienes todo. No te llames héroe ni villano; llámarte lo que eres: alguien con cuentas pendientes y el poder de cobrarlas.','El sistema te falló cuando más lo necesitabas. Ahora tienes el poder y has decidido que el sistema te debe una respuesta.'],
  'Dominar el mundo': ['No es ambición sin más: es visión. El mundo bajo el liderazgo correcto podría ser perfecto. Y tú eres el único con la inteligencia y el poder para lograrlo.','Has visto cómo héroes y gobiernos fracasan una y otra vez. El caos es la prueba de que necesitan un orden superior. Tú lo serás.'],
  'Buscar la verdad': ['Descubriste que todo lo que creías sobre tu origen era una mentira construida. Ahora cada misión es un paso hacia la verdad que alguien se esforzó mucho en ocultarte.','Hay fuerzas que operan en las sombras y que nadie ve. Tú las ves. Y una vez que las ves, no puedes mirar para otro lado.'],
  'Sobrevivir': ['No elegiste esta vida ni estos poderes. Simplemente sobreviviste cuando nadie más lo hizo. Ahora usas lo que tienes para seguir en pie un día más.','Cada día es una batalla. No contra villanos ni por el bien mayor, sino por continuar existiendo en un mundo que preferiría que no lo hicieras.'],
  'Redimirse': ['Hubo un tiempo en que eras lo que ahora combates. Hiciste cosas de las que no te enorgulleces. No puedes borrarlas, pero puedes pasar el resto de tu vida intentando compensarlas.','Te dieron una segunda oportunidad cuando no la merecías. No sabes bien por qué. Pero no vas a desperdiciarla.'],
};

const NEMESIS_BY_SIDE = {
  'Héroe':    ['Un villano que comparte exactamente tu mismo origen pero tomó el camino contrario. Te conoce mejor que nadie.','Una organización secreta que te considera la mayor amenaza para sus planes de control global.','Alguien de tu pasado que cree que te lo mereces. Y quizás tenga razón en algunos puntos.'],
  'Villano':  ['El héroe más obstinado del planeta que ha jurado detenerte sin importar el costo.','Un rival dentro de tu propia facción que quiere tu poder y no tiene escrúpulos.','Una alianza de héroes que considera tu eliminación una prioridad de nivel uno.'],
  'Antihéroe':['Tanto héroes como villanos te consideran impredecible y peligroso. Ninguno confía en ti.','Tu pasado como villano te persigue: alguien que amabas juró encontrarte.','Un agente del gobierno obsesionado con meterte en una celda o en una tumba.'],
};

const WEAKNESSES = [
  '⚠ Tu mayor vulnerabilidad no es física: es la gente que te importa. Cualquiera que lo sepa puede usarla.',
  '⚠ El exceso de poder te consume. Cada vez que te sueltas por completo, pierdes algo de tu humanidad.',
  '⚠ Una sustancia específica neutraliza todos tus poderes en segundos. Algunos enemigos ya lo saben.',
  '⚠ Tu mente carga el peso de todo lo que has visto. En los momentos más críticos, a veces duda.',
  '⚠ Dependes de una fuente externa para mantener tus poderes activos. Si la pierdes, eres vulnerable.',
  '⚠ Tu código moral es tan rígido que tus enemigos lo explotan para predecir tus movimientos.',
];

const QUOTES = {
  'Héroe':     ['"Con gran poder viene una responsabilidad que nadie te pide, pero que no puedes ignorar."','"No lo hago porque sea fácil. Lo hago porque es lo correcto."','"Cada vez que me caigo, hay alguien que me recuerda por qué me levanto."'],
  'Villano':   ['"Llámame villano. Los vencedores siempre reescriben la historia de todas formas."','"Ellos defienden el orden. Yo defiendo la verdad. La diferencia es que yo sé cuál es cuál."','"El caos no es mi arma. Es mi idioma."'],
  'Antihéroe': ['"No soy el héroe que necesitan. Soy el que pueden tener."','"Hago lo correcto de formas que nadie aprobaría. Los resultados hablan solos."','"Héroes y villanos duermen bien. Yo, en cambio, hago el trabajo real."'],
};

const AVATARS_BY_COMBAT = {
  'Fuerza bruta':'🦾','Velocidad y agilidad':'⚡','Poderes mentales':'🧠',
  'Ataques a distancia':'🎯','Sigilo y táctica':'🌑','Magia y hechizos':'🔮',
};

const STAT_CONFIG = [
  {key:'Fuerza',      color:'var(--str)',   base:40},
  {key:'Velocidad',   color:'var(--spd)',   base:35},
  {key:'Inteligencia',color:'var(--int)',   base:45},
  {key:'Durabilidad', color:'var(--dur)',   base:40},
  {key:'Energía',     color:'var(--ener)',  base:30},
  {key:'Combate',     color:'var(--fight)', base:50},
];

const STAT_BOOSTS = {
  'Fuerza bruta':         {Fuerza:35,Durabilidad:20},
  'Velocidad y agilidad': {Velocidad:40,Combate:15},
  'Poderes mentales':     {Inteligencia:40,Energía:20},
  'Ataques a distancia':  {Energía:35,Velocidad:20},
  'Sigilo y táctica':     {Combate:35,Inteligencia:20},
  'Magia y hechizos':     {Energía:45,Inteligencia:15},
};

// Rivales para batalla y comparar
const RIVALS = [
  // ── MARVEL ──
  {name:'Thanos',         avatar:'💜', uni:'MARVEL', power:95, hp:200, stats:{Fuerza:95,Velocidad:60,Inteligencia:85,Durabilidad:90,Energía:88,Combate:80}},
  {name:'Iron Man',       avatar:'🔴', uni:'MARVEL', power:78, hp:160, stats:{Fuerza:65,Velocidad:75,Inteligencia:100,Durabilidad:70,Energía:85,Combate:70}},
  {name:'Magneto',        avatar:'🔵', uni:'MARVEL', power:88, hp:175, stats:{Fuerza:70,Velocidad:65,Inteligencia:90,Durabilidad:75,Energía:95,Combate:72}},
  {name:'Wolverine',      avatar:'🟡', uni:'MARVEL', power:82, hp:170, stats:{Fuerza:80,Velocidad:65,Inteligencia:60,Durabilidad:95,Energía:60,Combate:95}},
  {name:'Doctor Strange', avatar:'🌀', uni:'MARVEL', power:89, hp:172, stats:{Fuerza:50,Velocidad:70,Inteligencia:95,Durabilidad:72,Energía:98,Combate:78}},
  {name:'Spider-Man',     avatar:'🕷️', uni:'MARVEL', power:80, hp:158, stats:{Fuerza:75,Velocidad:88,Inteligencia:85,Durabilidad:68,Energía:65,Combate:88}},
  {name:'Thor',           avatar:'⚡', uni:'MARVEL', power:91, hp:192, stats:{Fuerza:98,Velocidad:80,Inteligencia:70,Durabilidad:92,Energía:90,Combate:85}},
  {name:'Black Panther',  avatar:'🐾', uni:'MARVEL', power:76, hp:155, stats:{Fuerza:72,Velocidad:80,Inteligencia:90,Durabilidad:74,Energía:60,Combate:92}},
  {name:'Captain Marvel', avatar:'⭐', uni:'MARVEL', power:90, hp:188, stats:{Fuerza:90,Velocidad:88,Inteligencia:75,Durabilidad:88,Energía:95,Combate:82}},
  {name:'Deadpool',       avatar:'🗡️', uni:'MARVEL', power:74, hp:162, stats:{Fuerza:68,Velocidad:72,Inteligencia:65,Durabilidad:98,Energía:50,Combate:90}},
  {name:'Venom',          avatar:'🖤', uni:'MARVEL', power:83, hp:174, stats:{Fuerza:88,Velocidad:68,Inteligencia:55,Durabilidad:85,Energía:70,Combate:80}},
  {name:'Loki',           avatar:'🟢', uni:'MARVEL', power:86, hp:168, stats:{Fuerza:65,Velocidad:72,Inteligencia:98,Durabilidad:70,Energía:90,Combate:75}},
  {name:'Black Widow',    avatar:'🕸️', uni:'MARVEL', power:68, hp:135, stats:{Fuerza:58,Velocidad:85,Inteligencia:92,Durabilidad:60,Energía:45,Combate:95}},
  {name:'Hulk',           avatar:'💚', uni:'MARVEL', power:97, hp:210, stats:{Fuerza:100,Velocidad:55,Inteligencia:45,Durabilidad:98,Energía:75,Combate:78}},
  {name:'Silver Surfer',  avatar:'🪙', uni:'MARVEL', power:93, hp:195, stats:{Fuerza:88,Velocidad:98,Inteligencia:80,Durabilidad:90,Energía:98,Combate:72}},
  // ── DC ──
  {name:'Superman',       avatar:'🟦', uni:'DC',     power:92, hp:195, stats:{Fuerza:100,Velocidad:95,Inteligencia:80,Durabilidad:95,Energía:90,Combate:85}},
  {name:'Batman',         avatar:'🦇', uni:'DC',     power:72, hp:150, stats:{Fuerza:60,Velocidad:70,Inteligencia:100,Durabilidad:65,Energía:55,Combate:90}},
  {name:'Wonder Woman',   avatar:'🌟', uni:'DC',     power:90, hp:190, stats:{Fuerza:95,Velocidad:85,Inteligencia:80,Durabilidad:88,Energía:82,Combate:92}},
  {name:'The Flash',      avatar:'🔶', uni:'DC',     power:85, hp:165, stats:{Fuerza:55,Velocidad:100,Inteligencia:75,Durabilidad:70,Energía:78,Combate:75}},
  {name:'Joker',          avatar:'🃏', uni:'DC',     power:65, hp:130, stats:{Fuerza:50,Velocidad:60,Inteligencia:90,Durabilidad:55,Energía:40,Combate:70}},
  {name:'Aquaman',        avatar:'🔱', uni:'DC',     power:84, hp:172, stats:{Fuerza:92,Velocidad:75,Inteligencia:72,Durabilidad:85,Energía:78,Combate:80}},
  {name:'Green Lantern',  avatar:'💚', uni:'DC',     power:87, hp:178, stats:{Fuerza:68,Velocidad:82,Inteligencia:85,Durabilidad:75,Energía:98,Combate:74}},
  {name:'Lex Luthor',     avatar:'🧠', uni:'DC',     power:70, hp:140, stats:{Fuerza:55,Velocidad:58,Inteligencia:100,Durabilidad:62,Energía:72,Combate:65}},
  {name:'Harley Quinn',   avatar:'🎭', uni:'DC',     power:63, hp:125, stats:{Fuerza:55,Velocidad:72,Inteligencia:80,Durabilidad:58,Energía:38,Combate:85}},
  {name:'Nightwing',      avatar:'🌑', uni:'DC',     power:71, hp:145, stats:{Fuerza:62,Velocidad:82,Inteligencia:85,Durabilidad:65,Energía:50,Combate:92}},
  {name:'Darkseid',       avatar:'🔥', uni:'DC',     power:96, hp:205, stats:{Fuerza:98,Velocidad:62,Inteligencia:88,Durabilidad:95,Energía:92,Combate:82}},
  {name:'Green Arrow',    avatar:'🏹', uni:'DC',     power:67, hp:132, stats:{Fuerza:60,Velocidad:75,Inteligencia:88,Durabilidad:62,Energía:50,Combate:88}},
  {name:'Cyborg',         avatar:'🤖', uni:'DC',     power:78, hp:158, stats:{Fuerza:72,Velocidad:70,Inteligencia:90,Durabilidad:78,Energía:85,Combate:72}},
  {name:'Shazam',         avatar:'⚡', uni:'DC',     power:88, hp:180, stats:{Fuerza:95,Velocidad:85,Inteligencia:68,Durabilidad:88,Energía:88,Combate:80}},
];

// ── UTILS ────────────────────────────────────────────────

const rand  = arr => arr[Math.floor(Math.random() * arr.length)];
const randN = (min,max) => Math.floor(Math.random()*(max-min+1))+min;
function pick(arr,n){const c=[...arr],r=[];for(let i=0;i<n&&c.length;i++)r.push(c.splice(Math.floor(Math.random()*c.length),1)[0]);return r;}

// ── ESTADO GLOBAL ────────────────────────────────────────

let form = { name:'', universe:'Marvel', side:'Héroe', origin:'', combat:'', motivation:'' };
let currentHero = null;   // objeto completo del héroe generado
let currentRival = null;  // rival actual para batalla/comparar
let gallery = [];         // array de héroes guardados en sesión

// ── CANVAS ───────────────────────────────────────────────

(function bgCanvas(){
  const canvas=document.getElementById('bg-canvas');
  const ctx=canvas.getContext('2d');
  const pts=[];
  function resize(){canvas.width=innerWidth;canvas.height=innerHeight;}
  resize(); addEventListener('resize',resize);
  for(let i=0;i<55;i++) pts.push({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:Math.random()*1.2+.2,a:Math.random()*Math.PI*2,speed:Math.random()*.3+.05,red:Math.random()>.7});
  function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    pts.forEach(p=>{
      p.x+=Math.cos(p.a)*p.speed; p.y+=Math.sin(p.a)*p.speed; p.a+=(Math.random()-.5)*.02;
      if(p.x<0)p.x=canvas.width; if(p.x>canvas.width)p.x=0;
      if(p.y<0)p.y=canvas.height; if(p.y>canvas.height)p.y=0;
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle=p.red?`rgba(232,25,44,${Math.random()*.4+.1})`:`rgba(77,159,255,${Math.random()*.3+.05})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
})();

// ── CURSOR ───────────────────────────────────────────────

(function customCursor(){
  const cursor=document.getElementById('cursor');
  const trail=document.getElementById('cursor-trail');
  document.addEventListener('mousemove',e=>{
    cursor.style.left=e.clientX+'px'; cursor.style.top=e.clientY+'px';
    setTimeout(()=>{ trail.style.left=e.clientX+'px'; trail.style.top=e.clientY+'px'; },80);
  });
  document.addEventListener('mouseover',e=>{
    if(e.target.closest('button,input,a')){
      cursor.style.width='24px'; cursor.style.height='24px'; cursor.style.background='var(--gold)';
    } else {
      cursor.style.width='16px'; cursor.style.height='16px'; cursor.style.background='var(--red)';
    }
  });
})();

// ── NAVEGACIÓN ───────────────────────────────────────────

function goTo(id){
  document.querySelectorAll('.screen').forEach(s=>{s.classList.remove('active');s.style.animation='none';});
  const t=document.getElementById(id);
  void t.offsetWidth; t.style.animation=''; t.classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});
}

function setStep(n){
  document.querySelectorAll('.form-step').forEach((s,i)=>s.classList.toggle('active',i+1===n));
  document.querySelectorAll('.step').forEach((s,i)=>{
    s.classList.remove('active','done');
    if(i+1===n) s.classList.add('active');
    if(i+1<n)   s.classList.add('done');
  });
}

// ── TOGGLES ──────────────────────────────────────────────

function makeToggle(sel,prop){
  document.querySelectorAll(sel).forEach(btn=>btn.addEventListener('click',()=>{
    document.querySelectorAll(sel).forEach(b=>b.classList.remove('active','selected'));
    btn.classList.add('active','selected'); form[prop]=btn.dataset.value;
  }));
}
function makeGrid(sel,prop){
  document.querySelectorAll(sel).forEach(btn=>btn.addEventListener('click',()=>{
    document.querySelectorAll(sel).forEach(b=>b.classList.remove('selected'));
    btn.classList.add('selected'); form[prop]=btn.dataset.value;
  }));
}

makeToggle('.uni-btn','universe');
makeToggle('.side-btn','side');
makeGrid('.origin-card','origin');
makeGrid('.combat-btn','combat');
makeGrid('.motiv-btn','motivation');

// ── EVENTOS FORMULARIO ───────────────────────────────────

document.getElementById('startBtn').addEventListener('click',()=>goTo('screen-form'));
document.getElementById('backBtn').addEventListener('click',()=>goTo('screen-intro'));
document.getElementById('backToStep1').addEventListener('click',()=>setStep(1));
document.getElementById('backToStep2').addEventListener('click',()=>setStep(2));

document.getElementById('toStep2').addEventListener('click',()=>{
  form.name=document.getElementById('heroName').value.trim();
  if(!form.name){document.getElementById('error1').textContent='Ponle nombre a tu héroe primero.';return;}
  document.getElementById('error1').textContent=''; setStep(2);
});
document.getElementById('toStep3').addEventListener('click',()=>{
  if(!form.origin){document.getElementById('error2').textContent='Elige el origen de tus poderes.';return;}
  if(!form.combat){document.getElementById('error2').textContent='Elige tu tipo de combate.';return;}
  document.getElementById('error2').textContent=''; setStep(3);
});
document.getElementById('generateBtn').addEventListener('click',()=>{
  if(!form.motivation){document.getElementById('error3').textContent='Elige tu motivación.';return;}
  document.getElementById('error3').textContent=''; generateHero();
});

// ── EVENTOS RESULTADO ────────────────────────────────────

document.getElementById('rerollBtn').addEventListener('click',()=>{
  form={name:'',universe:'Marvel',side:'Héroe',origin:'',combat:'',motivation:''};
  document.querySelectorAll('.origin-card,.combat-btn,.motiv-btn').forEach(b=>b.classList.remove('selected'));
  document.querySelectorAll('.uni-btn').forEach((b,i)=>b.classList.toggle('active',i===0));
  document.querySelectorAll('.side-btn').forEach((b,i)=>b.classList.toggle('active',i===0));
  document.getElementById('heroName').value='';
  document.getElementById('savedMsg').textContent='';
  setStep(1); goTo('screen-form');
});
document.getElementById('printBtn').addEventListener('click',()=>window.print());
document.getElementById('saveToGalleryBtn').addEventListener('click',saveToGallery);
document.getElementById('galleryBtn').addEventListener('click',()=>{renderGallery();goTo('screen-gallery');});
document.getElementById('battleBtn').addEventListener('click',()=>{initBattle();goTo('screen-battle');});
document.getElementById('compareBtn').addEventListener('click',()=>{initCompare();goTo('screen-compare');});

// ── EVENTOS BATALLA ──────────────────────────────────────

document.getElementById('backFromBattle').addEventListener('click',()=>goTo('screen-result'));
document.getElementById('backFromBattle2').addEventListener('click',()=>goTo('screen-result'));
document.getElementById('startBattleBtn').addEventListener('click',runBattle);
document.getElementById('newRivalBtn').addEventListener('click',()=>{initBattle();});

// ── EVENTOS COMPARAR ─────────────────────────────────────

document.getElementById('backFromCompare').addEventListener('click',()=>goTo('screen-result'));
document.getElementById('backFromCompare2').addEventListener('click',()=>goTo('screen-result'));
document.getElementById('rerollCompareBtn').addEventListener('click',initCompare);

// ── EVENTOS GALERÍA ──────────────────────────────────────

document.getElementById('backFromGallery').addEventListener('click',()=>goTo('screen-result'));
document.getElementById('clearGalleryBtn').addEventListener('click',()=>{gallery=[];renderGallery();});

// ── GENERADOR ────────────────────────────────────────────

function generateHero(){
  const {origin,combat,universe,side,motivation,name} = form;
  const originPowers = pick(POWERS[origin]||[],2);
  const combatPowers = pick(COMBAT_POWERS[combat]||[],2);
  const inspoPool    = INSPIRATIONS[universe]||INSPIRATIONS['Ambos'];
  const boosts       = STAT_BOOSTS[combat]||{};
  const stats        = STAT_CONFIG.map(s=>({...s, value:Math.min(100,s.base+(boosts[s.key]||0)+randN(0,20))}));

  currentHero = {
    name, universe, side, origin, combat,
    avatar:    AVATARS_BY_COMBAT[combat]||'⚡',
    powers:    [...originPowers,...combatPowers],
    inspos:    pick(inspoPool,3),
    gear:      pick(GEAR_BY_ORIGIN[origin]||[],4),
    stats,
    backstory: rand(BACKSTORIES[motivation]||['Tu historia está por escribirse.']),
    nemesis:   rand(NEMESIS_BY_SIDE[side]||NEMESIS_BY_SIDE['Héroe']),
    weakness:  rand(WEAKNESSES),
    quote:     rand(QUOTES[side]||QUOTES['Héroe']),
    tags:      [origin,combat,universe],
    totalPower:Math.round(stats.reduce((a,s)=>a+s.value,0)/stats.length),
  };

  renderResult(currentHero);
  goTo('screen-result');
}

function renderResult(h){
  document.getElementById('universeBadge').textContent = h.universe.toUpperCase();
  document.getElementById('sideBadge').textContent     = h.side.toUpperCase();
  document.getElementById('heroAvatar').textContent    = h.avatar;
  document.getElementById('heroCodename').textContent  = h.name.toUpperCase();
  document.getElementById('heroBg').style.background   =
    h.side==='Villano' ? 'linear-gradient(135deg,#1a0000,#0a0d1a,#00001a)' :
    h.side==='Antihéroe'? 'linear-gradient(135deg,#1a0d00,#0a0d1a,#000f1a)' :
    'linear-gradient(135deg,#0d001a,#0a0d1a,#001a0d)';

  document.getElementById('heroTags').innerHTML = h.tags.map(t=>`<span class="hero-tag">${t}</span>`).join('');

  document.getElementById('statsList').innerHTML = h.stats.map(s=>`
    <div class="stat-row">
      <span class="stat-label">${s.key}</span>
      <div class="stat-track"><div class="stat-fill" style="width:${s.value}%;background:${s.color}"></div></div>
      <span class="stat-num" style="color:${s.color}">${s.value}</span>
    </div>`).join('');

  document.getElementById('powersGrid').innerHTML = h.powers.map(p=>`
    <div class="power-item">
      <span class="power-icon">${p.icon}</span>
      <div><div class="power-name">${p.name}</div><div class="power-desc">${p.desc}</div></div>
    </div>`).join('');

  document.getElementById('inspoRow').innerHTML = h.inspos.map(i=>`
    <div class="inspo-chip"><span class="inspo-uni ${i.uni}">${i.uni.toUpperCase()}</span>${i.name}</div>`).join('');

  document.getElementById('gearGrid').innerHTML = h.gear.map(g=>`
    <div class="gear-item"><span class="gear-icon">${g.icon}</span>
    <div><div class="gear-name">${g.name}</div><div class="gear-type">${g.type}</div></div></div>`).join('');

  document.getElementById('originText').textContent  = h.backstory;
  document.getElementById('nemesisText').textContent = h.nemesis;
  document.getElementById('weaknessText').textContent= h.weakness;
  document.getElementById('heroQuote').textContent   = h.quote;
  document.getElementById('savedMsg').textContent    = '';
}

// ── GALERÍA ──────────────────────────────────────────────

function saveToGallery(){
  if(!currentHero) return;
  const already = gallery.find(h=>h.name===currentHero.name);
  if(already){ document.getElementById('savedMsg').textContent='Este héroe ya está en tu galería.'; return; }
  gallery.push({...currentHero});
  document.getElementById('savedMsg').textContent=`✓ ${currentHero.name} guardado en la galería.`;
}

function renderGallery(){
  const grid=document.getElementById('galleryGrid');
  if(!gallery.length){
    grid.innerHTML='<p class="gallery-empty">Tu galería está vacía. Crea y guarda personajes para verlos aquí.</p>';
    return;
  }
  grid.innerHTML=gallery.map((h,i)=>`
    <div class="gallery-card" onclick="loadFromGallery(${i})">
      <div class="gallery-card-avatar">${h.avatar}</div>
      <div class="gallery-card-name">${h.name.toUpperCase()}</div>
      <div class="gallery-card-sub">${h.universe} · ${h.side}</div>
      <div class="gallery-card-tags">
        ${h.tags.map(t=>`<span class="gallery-card-tag">${t}</span>`).join('')}
      </div>
    </div>`).join('');
}

function loadFromGallery(i){
  currentHero = gallery[i];
  renderResult(currentHero);
  goTo('screen-result');
}

// ── BATALLA ──────────────────────────────────────────────

function initBattle(){
  currentRival = {...rand(RIVALS)};
  const hero   = currentHero;
  const rival  = currentRival;

  // HP máximos
  hero._maxHp  = 100 + hero.totalPower;
  hero._hp     = hero._maxHp;
  rival._maxHp = rival.hp;
  rival._hp    = rival._maxHp;

  document.getElementById('battleLog').innerHTML = '';
  document.getElementById('battleResultBox').classList.remove('show');
  document.getElementById('battleResultBox').style.display = 'none';
  document.getElementById('startBattleBtn').disabled = false;

  renderBattleArena();
}

function renderBattleArena(){
  const hero  = currentHero;
  const rival = currentRival;

  document.getElementById('battleArena').innerHTML = `
    <div class="fighter-card">
      <div class="fighter-avatar">${hero.avatar}</div>
      <div class="fighter-name">${hero.name.toUpperCase()}</div>
      <span class="fighter-uni universe-badge">${hero.universe}</span>
      <div class="fighter-hp-wrap">
        <div class="fighter-hp-label"><span>HP</span><span id="heroHpNum">${hero._hp}</span></div>
        <div class="fighter-hp-track"><div class="fighter-hp-bar" id="heroHpBar" style="width:100%;background:var(--dur)"></div></div>
      </div>
    </div>
    <div class="vs-badge">VS</div>
    <div class="fighter-card">
      <div class="fighter-avatar">${rival.avatar}</div>
      <div class="fighter-name">${rival.name.toUpperCase()}</div>
      <span class="fighter-uni universe-badge" style="background:var(--blue)">${rival.uni}</span>
      <div class="fighter-hp-wrap">
        <div class="fighter-hp-label"><span>HP</span><span id="rivalHpNum">${rival._hp}</span></div>
        <div class="fighter-hp-track"><div class="fighter-hp-bar" id="rivalHpBar" style="width:100%;background:var(--red)"></div></div>
      </div>
    </div>`;
}

function addLog(text, cls){
  const log = document.getElementById('battleLog');
  const line = document.createElement('div');
  line.className = `log-line ${cls}`;
  line.textContent = text;
  log.appendChild(line);
  log.scrollTop = log.scrollHeight;
}

function updateHpBar(who, hp, maxHp){
  const pct = Math.max(0, (hp/maxHp)*100);
  const bar = document.getElementById(who+'HpBar');
  const num = document.getElementById(who+'HpNum');
  if(bar) bar.style.width = pct+'%';
  if(num) num.textContent = Math.max(0,Math.round(hp));
  // color por vida
  if(bar){
    if(pct > 50) bar.style.background = who==='hero' ? 'var(--dur)' : 'var(--red)';
    else if(pct > 25) bar.style.background = 'var(--spd)';
    else bar.style.background = 'var(--str)';
  }
}

async function runBattle(){
  if(!currentHero||!currentRival) return;
  document.getElementById('startBattleBtn').disabled = true;
  document.getElementById('battleLog').innerHTML = '';

  const hero  = currentHero;
  const rival = currentRival;
  hero._hp    = hero._maxHp;
  rival._hp   = rival._maxHp;

  updateHpBar('hero',  hero._hp,  hero._maxHp);
  updateHpBar('rival', rival._hp, rival._maxHp);

  const heroPow  = hero.totalPower;
  const rivalPow = rival.power;

  addLog(`⚔️ ¡Comienza el combate! ${hero.name} vs ${rival.name}`, 'log-system');

  await sleep(500);

  let round = 1;
  while(hero._hp > 0 && rival._hp > 0 && round <= 10){
    await sleep(600);

    // Hero ataca
    const heroDmg = Math.max(5, randN(heroPow * 0.08, heroPow * 0.18));
    rival._hp -= heroDmg;
    updateHpBar('rival', rival._hp, rival._maxHp);
    const heroMove = rand(hero.powers);
    addLog(`💥 Ronda ${round}: ${hero.name} usa ${heroMove.name} — ${Math.round(heroDmg)} daño`, 'hit-rival');

    await sleep(500);
    if(rival._hp <= 0) break;

    // Rival ataca
    const rivalDmg = Math.max(5, randN(rivalPow * 0.07, rivalPow * 0.16));
    hero._hp -= rivalDmg;
    updateHpBar('hero', hero._hp, hero._maxHp);
    addLog(`🔥 ${rival.name} contraataca — ${Math.round(rivalDmg)} daño`, 'hit-hero');

    round++;
  }

  await sleep(700);

  const resultBox = document.getElementById('battleResultBox');
  resultBox.style.display = 'block';
  resultBox.classList.add('show');

  if(hero._hp > rival._hp){
    resultBox.innerHTML = `<div class="battle-result-title win">¡VICTORIA!</div><p class="battle-result-sub">${hero.name} derrotó a ${rival.name} con ${Math.round(Math.max(0,hero._hp))} HP restantes.</p>`;
    addLog(`🏆 ${hero.name} gana el combate!`, 'log-system');
  } else if(rival._hp > hero._hp){
    resultBox.innerHTML = `<div class="battle-result-title lose">DERROTA</div><p class="battle-result-sub">${rival.name} fue demasiado poderoso esta vez. ¡Vuelve más fuerte!</p>`;
    addLog(`💀 ${rival.name} gana el combate.`, 'log-system');
  } else {
    resultBox.innerHTML = `<div class="battle-result-title draw">EMPATE</div><p class="battle-result-sub">Ninguno pudo vencer al otro. La batalla queda sin resolver.</p>`;
    addLog(`⚖️ ¡Empate épico!`, 'log-system');
  }
}

function sleep(ms){ return new Promise(r=>setTimeout(r,ms)); }

// ── COMPARAR ─────────────────────────────────────────────

function initCompare(){
  currentRival = {...rand(RIVALS)};
  renderCompare();
}

function renderCompare(){
  const hero  = currentHero;
  const rival = currentRival;
  const statKeys = STAT_CONFIG.map(s=>s.key);

  // Calcular totales para decidir ganador
  const heroTotal  = statKeys.reduce((a,k)=>{ const s=hero.stats.find(x=>x.key===k); return a+(s?s.value:0); },0);
  const rivalTotal = statKeys.reduce((a,k)=>a+(rival.stats[k]||0),0);
  const winner = heroTotal > rivalTotal ? 'hero' : heroTotal < rivalTotal ? 'rival' : 'draw';

  const heroStatsHtml = statKeys.map(k=>{
    const hv = (hero.stats.find(s=>s.key===k)||{value:50}).value;
    const rv = rival.stats[k]||50;
    const col = STAT_CONFIG.find(s=>s.key===k)?.color||'var(--text)';
    const hWin = hv >= rv;
    return `
      <div class="compare-stat-row">
        <span class="compare-stat-name">${k}</span>
        <div class="compare-bar-wrap"><div class="compare-bar ${hWin?'winner':''}" style="width:${hv}%;background:${col};color:${col}"></div></div>
        <span class="compare-val" style="color:${col}">${hv}</span>
      </div>`;
  }).join('');

  const rivalStatsHtml = statKeys.map(k=>{
    const hv = (hero.stats.find(s=>s.key===k)||{value:50}).value;
    const rv = rival.stats[k]||50;
    const col = STAT_CONFIG.find(s=>s.key===k)?.color||'var(--text)';
    const rWin = rv >= hv;
    return `
      <div class="compare-stat-row">
        <span class="compare-stat-name">${k}</span>
        <div class="compare-bar-wrap"><div class="compare-bar ${rWin?'winner':''}" style="width:${rv}%;background:${col};color:${col}"></div></div>
        <span class="compare-val" style="color:${col}">${rv}</span>
      </div>`;
  }).join('');

  const winnerHtml = winner==='hero'
    ? `<div class="compare-winner-badge is-hero">🏆 ${hero.name} tiene mejores stats globales</div>`
    : winner==='rival'
      ? `<div class="compare-winner-badge is-rival">🏆 ${rival.name} tiene mejores stats globales</div>`
      : `<div class="compare-winner-badge is-draw">⚖️ Stats globales empatados</div>`;

  document.getElementById('compareGrid').innerHTML = `
    <div class="compare-col">
      <div class="compare-header">
        <div class="compare-avatar">${hero.avatar}</div>
        <div class="compare-name">${hero.name.toUpperCase()}</div>
        <div class="compare-sub">${hero.universe} · ${hero.side}</div>
      </div>
      <div class="compare-stat-block">${heroStatsHtml}</div>
    </div>
    <div class="compare-vs">VS</div>
    <div class="compare-col">
      <div class="compare-header">
        <div class="compare-avatar">${rival.avatar}</div>
        <div class="compare-name">${rival.name.toUpperCase()}</div>
        <div class="compare-sub">${rival.uni} · Personaje oficial</div>
      </div>
      <div class="compare-stat-block">${rivalStatsHtml}</div>
    </div>
    <div style="grid-column:1/-1">${winnerHtml}</div>`;
}
