# ⚡ Hero Forge — Generador de Identidades Marvel × DC

Hero Forge es una aplicación web interactiva que permite crear personajes originales del universo Marvel y DC. El usuario elige su nombre, universo, origen de poderes, estilo de combate y motivación, y la aplicación genera una ficha completa con estadísticas, poderes, equipamiento e historia de origen. Además incluye un sistema de batalla por rondas, comparación de stats contra personajes oficiales y una galería de personajes guardados en la sesión.

Este proyecto fue desarrollado íntegramente con ayuda de **Claude** (modelo de lenguaje de Anthropic), que generó el código HTML, CSS y JavaScript a partir de prompts en lenguaje natural. El proceso consistió en describir la idea, el diseño y las funcionalidades esperadas, y Claude produjo el código de forma iterativa hasta llegar al resultado final.

---

## 🛠️ Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| **HTML5** | Estructura y maquetado de las 6 pantallas de la app |
| **CSS3** | Estilos, animaciones, diseño responsive y modo impresión |
| **JavaScript (Vanilla)** | Toda la lógica: generador, sistema de batalla, comparador y galería |
| **Canvas API** | Partículas animadas de fondo generadas dinámicamente |
| **Google Fonts** | Tipografías Bebas Neue, Barlow Condensed y Barlow |
| **Claude (Anthropic)** | IA utilizada para generar y refinar todo el código del proyecto |

No se utilizaron frameworks, librerías externas ni dependencias de terceros. La aplicación corre completamente en el navegador sin necesidad de servidor ni conexión a internet tras la carga inicial de las fuentes.

---

## 🚀 Cómo ejecutar

1. Clona o descarga el repositorio
2. Abre el archivo `index.html` directamente en tu navegador
3. ¡Listo!

```
hero-forge/
├── index.html   ← Punto de entrada
├── style.css    ← Todos los estilos y animaciones
├── app.js       ← Lógica completa de la aplicación
└── README.md
```

> Probado en Chrome, Firefox y Edge. Se recomienda Chrome para mejor experiencia visual.

---

## 🎮 Cómo se usa

### Crear tu identidad
1. Clic en **"Crear mi identidad"**
2. **Paso 1:** Escribe tu nombre de héroe, elige universo (Marvel / DC / Ambos) y lado (Héroe / Villano / Antihéroe)
3. **Paso 2:** Selecciona el origen de tus poderes y tu estilo de combate
4. **Paso 3:** Elige tu motivación y presiona **"Forjar identidad"**

### Modos disponibles
Una vez generado tu personaje tienes acceso a tres modos extra:

**⚔️ Batalla**
Tu héroe se enfrenta a un personaje oficial del universo Marvel o DC en un combate por rondas. El sistema calcula el daño basándose en las estadísticas de ambos, muestra un log animado de cada golpe y las barras de HP bajan en tiempo real. Puedes cambiar de rival y repetir cuantas veces quieras.

**🆚 Comparar**
Compara tus 6 estadísticas directamente contra un personaje oficial. Las barras resaltan en cuáles atributos lo superas y al final se indica quién tiene los mejores stats globales.

**🖼️ Galería**
Guarda los personajes que vayas creando durante la sesión. Aparecen en tarjetas y puedes hacer clic en cualquiera para cargarlo de nuevo.

---

## ✨ Funcionalidades

- Formulario de creación en 3 pasos con validación
- 6 orígenes de poder × 6 estilos de combate × 3 universos = más de 200 combinaciones únicas
- 4 poderes generados según las elecciones del usuario
- 6 estadísticas de combate con bonificadores según el estilo elegido
- Historia de origen, némesis, punto débil y frase icónica únicos por personaje
- 30 personajes oficiales (Marvel y DC) como rivales en batalla y comparación
- Sistema de batalla por rondas con log en tiempo real
- Comparativa visual de estadísticas contra personajes oficiales
- Galería de personajes guardados en sesión
- Cursor personalizado animado
- Partículas de fondo generadas con Canvas API
- Diseño responsive para móvil y escritorio
- Soporte de impresión para exportar la ficha como PDF
