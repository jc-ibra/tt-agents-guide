# Guía de capturas de pantalla

Lista de screenshots que el sitio necesita. Toma cada captura en la instancia
real de GLPI (`https://helpdesk.trantortechnologies.mx`) y **guárdala con el
nombre exacto indicado** dentro de la carpeta:

```
docs/capturas/
```

- Formato: **PNG**. Ancho recomendado: ~1600 px. Oculta datos sensibles reales
  si es necesario (nombres/credenciales) usando una cuenta de prueba.
- El nombre del archivo debe ser idéntico al de la columna **Nombre de archivo**
  (minúsculas, sin espacios, con guiones).
- Cuando una captura esté lista, marca su casilla `[x]`. Yo reemplazo el
  marcador `> [Insertar captura: ...]` del documento por la imagen.

---

## Parte 2 - Primeros pasos (`docs/02-primeros-pasos.md`)

| ✔ | Nombre de archivo | Qué debe mostrar |
|---|---|---|
| [X] | `02-01-login-glpi.png` | Pantalla de inicio de sesión de GLPI (usuario y contraseña). |
| [X] | `02-02-selector-perfil-mac.png` | Selector de perfil de la barra superior mostrando el perfil **MAC** activo. |
| [X] | `02-03-tablero-mac.png` | Pantalla central / tablero del perfil MAC (contadores y accesos rápidos). |
| [x] | `02-04-tickets-asignados.png` | Vista "Mis tickets" / tickets asignados al agente. |

## Parte 3 - Gestión de tickets: creación (`docs/03-gestion-tickets.md`)

| ✔ | Nombre de archivo | Qué debe mostrar |
|---|---|---|
| [x] | `03-01-formulario-creacion-ticket.png` | Formulario de creación de ticket (Soporte > Tickets > nuevo). |
| [x] | `03-02-campo-asignado-a.png` | Campo **"Asignado a"** con un coordinador seleccionado. |
| [x] | `03-03-menu-lateral-tabs.png` | Menú lateral del ticket con las tabs: Áreas Internas, Clientes Externos, Control de Activos, Control de Envíos e IDS. |
| [x] | `03-04-tab-clientes-externos.png` | Tab **Clientes Externos** con sus campos. |
| [x] | `03-05-tab-areas-internas.png` | Tab **Áreas Internas** con sus campos. |
| [x] | `03-06-tab-control-activos.png` | Tab **Control de Activos** con sus campos. |
| [x] | `03-07-tab-control-envios.png` | Tab **Control de Envíos** con sus campos. |
| [x] | `03-08-tab-ids.png` | Tab **IDS** con Nombre y Número de empleado seleccionados. |

## Parte 4 - Seguimiento (`docs/04-seguimiento.md`)

| ✔ | Nombre de archivo | Qué debe mostrar |
|---|---|---|
| [x] | `04-01-catalogo-plantillas.png` | Menú de plantillas de seguimiento desplegado desde el botón **Responder** (§4.3). |
| [x] | `04-02-plantilla-pendiente-sla-pausado.png` | Ticket con una plantilla de **Pendiente** aplicada y el reloj del **SLA en pausa** (§4.4). |
| [x] | `04-03-resolver-plantilla-resolucion.png` | Botón **Resolver** con una plantilla de **Resolución** seleccionada (§4.5). |

---

**Total: 15 capturas.**

> Sugerencia: puedes ir entregando capturas por partes. Cada una se integra en
> cuanto la tengas, sin esperar a las demás.
