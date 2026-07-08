# Guía de capturas de pantalla — perfil Ingeniero de Servicio (IDS)

Lista de screenshots que el manual del **IDS** necesita. Toma cada captura
en la instancia real de GLPI (`https://helpdesk.trantortechnologies.mx`), **desde
la vista del perfil IDS**, y **guárdala con el nombre exacto indicado** dentro de
la carpeta:

```
perfiles/ids/docs/capturas/
```

- Formato: **PNG**. Ancho recomendado: ~1600 px (o captura de celular si la vista
  es la de campo). Oculta datos sensibles reales (nombres/credenciales/direcciones)
  usando una cuenta de prueba si es necesario.
- El nombre del archivo debe ser idéntico al de la columna **Nombre de archivo**
  (minúsculas, sin espacios, con guiones).
- Cuando una captura esté lista, marca su casilla `[x]`. Yo reemplazo el
  marcador `[CAPTURA: ...]` del documento por la imagen.

---

## Parte 2 - Primeros pasos (`perfiles/ids/docs/02-primeros-pasos.md`)

| ✔ | Nombre de archivo | Qué debe mostrar |
|---|---|---|
| [x] | `02-01-login-glpi.png` | Pantalla de inicio de sesión de GLPI (usuario y contraseña). §2.1 |
| [x] | `02-02-menu-perfil-ids.png` | Menú principal / lateral de GLPI con las opciones visibles para el perfil **IDS** (Tablero, Tickets, Catálogo de servicios, Base de conocimientos). §2.2 |
| [x] | `02-03-tablero-vista-personal.png` | Tablero, pestaña **Vista personal**, con el resumen de tickets (abiertos, resueltos, desfasados, cerrados). §2.3 |
| [x] | `02-04-tickets-asignados.png` | Listado de tickets asignados dentro de **Soporte > Tickets**. §2.3 |

## Parte 3 - Gestión de tickets: recepción y lectura (`perfiles/ids/docs/03-gestion-tickets.md`)

| ✔ | Nombre de archivo | Qué debe mostrar |
|---|---|---|
| [x] | `03-01-ticket-vista-general.png` | Vista general de un ticket abierto, con los campos principales visibles (descripción, prioridad, estado, categoría). §3.2 |
| [x] | `03-02-tabs-ticket-ids.png` | Tabs del ticket con la información personalizada visible para el perfil IDS (dirección/ubicación, usuario de contacto, datos del equipo). §3.3 |

## Parte 4 - Seguimiento y resolución (`perfiles/ids/docs/04-seguimiento-y-resolucion.md`)

| ✔ | Nombre de archivo | Qué debe mostrar |
|---|---|---|
| [x] | `04-01-menu-plantillas-responder.png` | Menú de plantillas de seguimiento desplegado desde el botón **Responder** (En camino, En sitio, Diagnosticado, Pendiente). §4.2 |
| [ ] | `04-02-plantilla-campos-completados.png` | Ejemplo de una plantilla con los campos completados de forma específica (p. ej. Diagnosticado). §4.4 — ⚠️ **reemplazar**: el archivo subido es idéntico a 04-03 y 04-04 (un hilo de seguimientos, no una plantilla en edición). |
| [ ] | `04-03-ticket-resuelto-conformidad.png` | Ticket resuelto con el formato de conformidad adjunto en GLPI. §4.6 — ⚠️ **reemplazar**: archivo duplicado (ver 04-02). Falta el ticket ya **resuelto** con el formato de conformidad adjunto. |
| [ ] | `04-04-hilo-completo-seguimientos.png` | Hilo completo de seguimientos de un ticket resuelto, con todas las plantillas aplicadas en orden (En camino → En sitio → Diagnosticado → [Pendiente] → Resolución). §4.7 — ⚠️ **reemplazar**: archivo duplicado (ver 04-02). La imagen actual muestra el hilo en estado *En espera*, no resuelto. |

---

**Total: 10 capturas.**

> Sugerencia: puedes ir entregando capturas por partes. Cada una se integra en
> cuanto la tengas, sin esperar a las demás.
