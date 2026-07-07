# CLAUDE.md

Guía para trabajar en este repositorio.

## Qué es este proyecto

Sitio web tipo **manual / instructivo de uso** para la plataforma GLPI de
Trantor Technologies (Mesa de Ayuda Central, perfil MAC). El contenido ya existe
en Markdown dentro de `docs/`; el sitio lo presenta con navegación por
categorías, buscador, títulos y enlaces cruzados entre temas.

Punto de acceso de la plataforma documentada: `https://helpdesk.trantortechnologies.mx`

El diseño busca ser **funcional y reutilizable**: la misma base sirve para
cualquier manual futuro cambiando el contenido y el manifiesto de navegación.

## Estructura del repositorio

```
helpesk-glpi/
├── CLAUDE.md               # este archivo
├── CAPTURAS.md             # guía de screenshots por tomar (nombres exactos de archivo)
├── docs/                   # FUENTE de contenido (Markdown) — se edita aquí
│   ├── 00-indice.md
│   ├── 01-fundamentos.md
│   ├── 02-primeros-pasos.md
│   ├── 03-gestion-tickets.md
│   ├── 04-seguimiento.md
│   ├── anexo-a … anexo-g.md
│   └── capturas/           # aquí van las imágenes que tome el usuario (ver CAPTURAS.md)
└── web/                    # el sitio (por construir)
    ├── index.html
    ├── manifest.json       # define categorías + orden del sidebar
    └── assets/
        ├── css/styles.css
        ├── js/app.js
        └── vendor/marked.min.js
```

## Contenido (mapa de docs)

- **Partes 1–4**: lectura secuencial (fundamentos → primeros pasos → creación de
  tickets → seguimiento).
- **Anexos A–G**: consulta rápida (tabla maestra de categorías, SLA, escalación,
  guía rápida, casos de uso resueltos).
- `00-indice.md` es el índice maestro y describe cada archivo.

## Convenciones

- **Idioma:** español. Terminología del dominio: MAC, IDS, CE, AI, OP, AD, SLA,
  TTO, TTR (glosario en `01-fundamentos.md` §1.4).
- **Capturas de pantalla:** en los docs se marcan con
  `> [Insertar captura: <descripción>]`. Cada marcador tiene asignado un nombre
  de archivo en `CAPTURAS.md`. Al integrar una captura, se reemplaza el marcador
  por `![descripción](capturas/<nombre>.png)`.
- No se inventan datos operativos (coordinadores, categorías, SLA): provienen de
  `docs/` y del administrador (Juan Carlos Pérez Salgado,
  jperez@trantortechnologies.mx).

## Arquitectura del sitio (decisión)

Sitio **estático sin build**: HTML + CSS + JS vanilla que renderiza el Markdown
de `docs/` en el cliente con `marked.js`. La navegación se arma desde
`manifest.json` (categorías y orden). Ventajas: cero dependencias de build,
el contenido sigue siendo Markdown editable, y es reutilizable para otros
manuales.

**UI de referencia:** panel tipo "Nexus" — barra superior oscura, sidebar
izquierdo con grupos de categorías, área de contenido clara tipo tarjeta.

### Cómo servir el sitio en local

El renderizado usa `fetch()` sobre los `.md`, que el protocolo `file://` bloquea.
Además, el sitio (`web/`) lee el contenido de `../docs`, así que se debe servir
desde la **raíz del repositorio** (no desde `web/`, o el servidor bloquea el
acceso a `../docs`):

```
cd /Users/carlosperez/Documents/helpesk-glpi
python3 -m http.server 8000
# abrir http://localhost:8000/web/
```

## Notas

- El repositorio **no** es un repo git todavía.
- Alta/cambio de categorías o valores de lista: se refleja primero en `docs/`
  (fuente única) y luego se ve reflejado en el sitio.
