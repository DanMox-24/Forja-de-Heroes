# ⚡ Hero Forge — Generador de Identidades Marvel × DC

Crea tu propia identidad de superhéroe o supervillano con poderes reales del universo Marvel y DC. Sin APIs, sin instalaciones, abre el archivo y listo.

## 🚀 Cómo ejecutar

1. Descarga o clona el repositorio
2. Abre `index.html` directamente en tu navegador
3. ¡Listo! No requiere instalación ni conexión a internet

```
hero-forge/
├── index.html   ← Abrir este archivo en el navegador
├── style.css
├── app.js
└── README.md
```

## ✨ ¿Qué genera?

- **Nombre de héroe** personalizado por ti
- **Universo**: Marvel, DC o ambos
- **Lado**: Héroe, Villano o Antihéroe
- **Origen de poderes**: 6 tipos (accidente científico, entrenamiento, tecnología, magia, alienígena, mutación)
- **4 poderes únicos** combinando origen y estilo de combate
- **6 estadísticas** de combate con barras animadas
- **3 inspiraciones** de personajes reales del universo seleccionado
- **4 objetos de equipamiento** según el origen
- **Historia de origen** narrativa según la motivación
- **Némesis** y **punto débil** únicos
- **Frase icónica** del personaje

## 🎮 Cómo se usa

1. Clic en **"Crear mi identidad"**
2. **Paso 1:** Escribe tu nombre de héroe, elige universo y lado
3. **Paso 2:** Selecciona el origen de tus poderes y tipo de combate
4. **Paso 3:** Elige tu motivación y clic en **"Forjar identidad"**
5. Explora tu ficha completa
6. **"Nueva identidad"** para generar otro personaje diferente
7. **"Guardar ficha"** para imprimir o guardar como PDF

---

## 📝 Prompts utilizados para generar el proyecto

### Prompt 1 — Estructura HTML y diseño visual

```
Eres un desarrollador frontend experto en diseño de aplicaciones de entretenimiento y cómics.
Construye la estructura HTML y CSS completa de una aplicación web llamada "Hero Forge",
un generador de identidades de superhéroes y supervillanos del universo Marvel y DC.

La aplicación debe tener 3 pantallas:
1. Intro: nombre de la app en tipografía de cómic, subtítulo y botón de inicio con íconos flotantes animados
2. Formulario en 3 pasos: paso 1 (nombre, universo Marvel/DC/Ambos, héroe/villano/antihéroe),
   paso 2 (origen de poderes en cuadrícula de 6 opciones, tipo de combate), paso 3 (motivación)
3. Resultado: tarjeta del héroe con avatar, estadísticas con barras animadas, poderes, inspiraciones,
   equipamiento, historia de origen, némesis y frase icónica

Estilo visual: oscuro y de alto contraste inspirado en cómics modernos. Colores: negro profundo (#05070f),
rojo Marvel (#e8192c) y azul DC (#0066ff) como acentos. Tipografía: Bebas Neue para títulos, Barlow
Condensed para etiquetas, Barlow para texto. Agrega partículas flotantes animadas en canvas.
Cursor personalizado: un punto rojo con un anillo azul que sigue al mouse.
Todo separado en index.html, style.css y app.js.
```

### Prompt 2 — Lógica completa del generador

```
Implementa toda la lógica JavaScript de Hero Forge. El sistema debe:

- Gestionar un formulario de 3 pasos con validación en cada uno
- Generar aleatoriamente: 4 poderes únicos (2 según origen + 2 según tipo de combate),
  6 estadísticas numéricas (Fuerza, Velocidad, Inteligencia, Durabilidad, Energía, Combate)
  con bonificadores según el tipo de combate seleccionado, 3 personajes de inspiración
  del universo elegido (Marvel, DC o ambos), 4 objetos de equipamiento según el origen,
  historia de origen narrativa según la motivación, némesis según el lado (héroe/villano/antihéroe),
  debilidad oculta y frase icónica del personaje
- Todos los datos en pools separados por categoría para garantizar coherencia temática
- Función de reset completo para generar nueva identidad
- Soporte de impresión CSS para guardar ficha como PDF
```

### Prompt 3 — Animaciones, cursor y pulido final

```
Agrega los siguientes refinamientos a Hero Forge:

1. Cursor personalizado con un punto rojo de 16px (mix-blend-mode screen) y un anillo
   azul que lo sigue con delay de 80ms. Al pasar sobre botones, el cursor crece y se vuelve dorado
2. Partículas de fondo en canvas: 55 puntos que se mueven aleatoriamente, algunos rojos (Marvel)
   y otros azules (DC), con variación de opacidad
3. Barras de estadísticas con animación CSS de llenado progresivo al aparecer la ficha
4. Iconos flotantes en la pantalla de inicio con animación de levitación escalonada
5. Transiciones suaves entre pasos del formulario y entre pantallas
6. Responsive para móviles: cuadrículas de 2 columnas, ocultar elementos decorativos en pantallas pequeñas
7. Botones con clip-path diagonal estilo cómic en la esquina superior derecha
```
