# CLAUDE.md

Guía para trabajar en este repositorio.

## Qué es este proyecto

**Portal de materiales de apoyo** para la plataforma GLPI de Trantor Technologies
(Mesa de Ayuda Central). La raíz (`/`) es un portal que ofrece un material por
**perfil de usuario**; cada perfil es un sitio-manual independiente que comparte
un mismo **motor** (`engine/`).

Perfiles previstos:

| Perfil | Carpeta | Estado |
|--------|---------|--------|
| Agente de Mesa de Ayuda (MAC) | `perfiles/agente-mac/` | **Completo** |
| Ingeniero de Servicio (IDS)   | `perfiles/ids/`          | En construcción |
| Personal Administrativo (AD)  | `perfiles/administrativo/` | En construcción |
| Portal de Autoservicio        | `perfiles/autoservicio/`   | En construcción |

Punto de acceso de la plataforma documentada: `https://helpdesk.trantortechnologies.mx`

El diseño busca ser **funcional y reutilizable**: el mismo motor sirve para
cualquier manual futuro cambiando el contenido y el manifiesto de navegación.
Agregar un perfil = crear su carpeta bajo `perfiles/` y una entrada en
`perfiles.json`.

## Estructura del repositorio

```
helpesk-glpi/
├── CLAUDE.md               # este archivo
├── CAPTURAS.md             # guía de screenshots del manual Agente MAC
├── index.html              # PORTAL de perfiles (raíz del sitio)
├── perfiles.json           # fuente de datos del portal (lista de perfiles + estado)
├── assets/                 # recursos del portal
│   ├── portal.css
│   ├── portal.js
│   └── favicon.png
├── engine/                 # MOTOR compartido de los manuales (reutilizable)
│   ├── css/styles.css
│   ├── js/app.js
│   └── vendor/marked.min.js
└── perfiles/
    ├── en-construccion.html   # página compartida para perfiles sin material aún
    ├── agente-mac/            # PERFIL COMPLETO
    │   ├── index.html         # shell del manual (usa ../../engine + su manifest)
    │   ├── deck.html          # resumen en diapositivas
    │   ├── manifest.json      # define categorías + orden del sidebar
    │   └── docs/              # FUENTE de contenido (Markdown) - se edita aquí
    │       ├── 00-indice.md … 04-seguimiento.md, anexo-a … anexo-g.md
    │       ├── assets/favicon.png
    │       └── capturas/      # imágenes del manual (ver CAPTURAS.md)
    ├── ids/                   # perfiles en construcción: index.html redirige a
    ├── administrativo/        #   en-construccion.html?p=<id>. Al construirlos,
    └── autoservicio/          #   replican el patrón de agente-mac/.
```

## Contenido del manual Agente MAC (mapa de docs)

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
  los `docs/` del perfil y del administrador (Juan Carlos Pérez Salgado,
  jperez@trantortechnologies.mx).

## Arquitectura del sitio (decisión)

Sitio **estático sin build**: HTML + CSS + JS vanilla.

- **Portal** (`index.html` + `assets/`): lee `perfiles.json` y pinta una tarjeta
  por perfil. Los perfiles `disponible` enlazan a su manual; los de estado
  `construccion` van a `perfiles/en-construccion.html?p=<id>`.
- **Motor** (`engine/`): `app.js` + `styles.css` + `marked.js`. Renderiza el
  Markdown del perfil en el cliente y arma la navegación desde el `manifest.json`
  de ese perfil. Es genérico: no contiene contenido, solo lógica.
- **Perfil-manual** (`perfiles/<perfil>/`): `index.html` (shell que carga el
  motor con `../../engine/…`), `manifest.json` (categorías/orden, con
  `contentBase: "docs"`) y `docs/` (Markdown + capturas).

Ventajas: cero dependencias de build, el contenido sigue siendo Markdown
editable, y el motor se reutiliza tal cual entre perfiles.

**UI de referencia:** panel tipo "Nexus" - barra superior oscura, sidebar
izquierdo con grupos de categorías, área de contenido clara tipo tarjeta.

### Cómo agregar un perfil nuevo

1. Duplicar `perfiles/agente-mac/` en `perfiles/<nuevo>/` (o crear `index.html`,
   `manifest.json` y `docs/` siguiendo ese patrón).
2. Ajustar su `manifest.json` (branding, `home`, grupos e ítems).
3. En `perfiles.json`, cambiar el estado del perfil a `"disponible"` (o agregar
   la entrada si es un perfil nuevo).

### Cómo servir el sitio en local

El renderizado usa `fetch()` sobre los `.md`/`.json`, que el protocolo `file://`
bloquea. Servir desde la **raíz del repositorio**:

```
cd /Users/carlosperez/Documents/helpesk-glpi
python3 -m http.server 8000
# Portal:            http://localhost:8000/
# Manual Agente MAC: http://localhost:8000/perfiles/agente-mac/
```

## Notas

- El repositorio **no** es un repo git todavía.
- Alta/cambio de categorías o valores de lista: se refleja primero en los `docs/`
  del perfil (fuente única) y luego se ve reflejado en el sitio.
