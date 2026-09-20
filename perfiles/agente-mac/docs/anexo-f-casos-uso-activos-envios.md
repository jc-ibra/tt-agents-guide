# Anexo F. Casos de uso: Control de Activos y Control de Envíos

**Manual de Uso de GLPI para Agentes de Mesa de Ayuda**
Trantor Technologies | Service Desk

---

Estos casos de uso son ficticios y muestran el llenado y seguimiento de las categorías de Administración que sí opera el agente MAC. A diferencia de Clientes Externos, estas categorías **no tienen plantillas de seguimiento configuradas**, por lo que las actualizaciones se documentan con **texto libre**.

Antes de ver los casos, la regla que los distingue: cuando un envío corresponde a un pedido SAE que ya tiene folio, no se abre folio nuevo de Control de Envíos, se documenta en el mismo folio del pedido (ver 3.7.3 y 3.7.4). El Caso 1 muestra ese folio consolidado con sus dos rutas de cierre. El Caso 2 muestra un envío que sí abre folio propio, porque no proviene de un pedido SAE.

---

## Caso 1. Control de Activos (pedido SAE) con folio consolidado

Recordatorio: esta categoría se usa cuando Almacén genera un pedido en Aspel SAE y se le da trazabilidad hasta que se resuelve. No lleva IDS. Si el pedido debe trasladarse, el envío se documenta en la tab Control de Envíos del mismo folio; la categoría no cambia en ningún momento del ciclo.

Antes de registrar cualquier envío de este pedido, el agente verifica en GLPI si el número de pedido SAE ya tiene folio abierto. En este caso sí lo tiene: es el mismo ticket que se creó al surtir el pedido.

### Ficha del ticket

| Dato | Valor |
|---|---|
| Título | CONTROL DE ACTIVOS - PEDIDO SAE 2254 |
| Tipo | Solicitud |
| Categoría | AD > Almacén > Control de Activos |
| Estado inicial | En curso (asignada) |
| Origen | Correo electrónico |
| ID Externo | NO APLICA |
| Solicitante | Agente MAC que registra |
| Asignado a | Automático: Antonio Hernández Bermúdez |

### Tab Control de Activos (se llena al crear el ticket)

| Campo | Valor | Nota |
|---|---|---|
| Equipo | CPU | Obligatorio (lista). |
| Modelo | OPTIPLEX 780 | Obligatorio. |
| Serie | NXY112-1A | Obligatorio. |
| SIAF | 111485 | Número de inventario del cliente. |
| CC | 302 | Centro de costos. |
| SAE | 2254 | Número de pedido en Aspel SAE. |

La tab IDS se deja **sin tocar**: esta categoría no registra atención en sitio, tampoco cuando se llena la tab Control de Envíos.

### Seguimiento común a ambas rutas (texto libre)

**Pedido creado**
> Se genera el pedido SAE 2254 para surtir 1 equipo CPU Optiplex 780 (serie NXY112-1A), CC 302. En espera de surtido por Almacén.

**Pedido surtido**
> El pedido SAE 2254 fue surtido correctamente por Almacén. Equipo CPU Optiplex 780 (serie NXY112-1A) disponible.

A partir de aquí, el destino del equipo define la ruta de cierre.

---

### Ruta A. Despacho en oficina

El equipo no viaja: se entrega en oficina y lo recoge ahí el personal que lo requiere. No se llena la tab Control de Envíos.

**Entrega en oficina y resolución**
> El equipo CPU Optiplex 780 (serie NXY112-1A) fue recogido en oficina por Juan Pablo Rentería Solís el 08-07-2026. Se cierra la trazabilidad del pedido.
>
> El ticket queda en estado Resuelto.

El ticket pasa a **Resuelto** (botón Resolver) y GLPI lo cierra automáticamente a las 48 horas.

---

### Ruta B. El pedido viaja con guía

Se define que el equipo debe trasladarse a otro estado. El agente confirma que el pedido SAE 2254 no tiene otro folio de envíos abierto y llena la tab Control de Envíos **en este mismo ticket**, sin crear uno nuevo y sin cambiar la categoría. Al documentar la guía se agrega a Gloria Deyanira Guerrero Palomares como segundo asignado, sin retirar a Antonio Hernández Bermúdez.

### Tab Control de Envíos (se agrega en el mismo folio)

| Campo | Valor | Obligatorio |
|---|---|---|
| Guía | 3111074702 | Sí |
| Carrier | DHL | Sí |
| Proyecto | Actinver | Sí |
| Solicitante | Yael Levi Gallardo Sánchez | Sí |
| CC | 302 | Sí |
| Remitente Nombre | Rolando David Abrego Ramírez | Sí |
| Remitente Estado | Sonora | Sí |
| Remitente Localidad | Hermosillo | Sí |
| Destinatario Nombre | José Fernando Aguilar Fuerte | Sí |
| Destinatario Estado | Jalisco | Sí |
| Destinatario Localidad | Guadalajara | Sí |
| Fecha de envío | 04-07-2026 | Sí |
| Costo guía | 250 | No |
| Ticket asociado | NO APLICA | No |
| Serie | NXY112-1A | No |
| SIAF | 111485 | No |
| Fecha de recolección | (pendiente) | No |

> Nota: el campo Ticket asociado queda NO APLICA porque el envío vive en el mismo folio del pedido, no en uno separado. Ese campo se usa para ligar folios de envíos independientes (ver Caso 2 y el cuadro comparativo).

**Guía generada**
> Se genera la guía DHL 3111074702 para el traslado del equipo CPU Optiplex 780 (serie NXY112-1A) del remitente Rolando David Abrego Ramírez (Hermosillo, Sonora) al destinatario José Fernando Aguilar Fuerte (Guadalajara, Jalisco). Proyecto Actinver, CC 302. Se agrega a Gloria Deyanira Guerrero Palomares como segundo asignado para dar seguimiento a la fase de envío.

**Envío en tránsito (opcional)**
> Envío en tránsito con DHL. Guía 3111074702. Se da seguimiento a la recolección.

**Recolección notificada y resolución**
> Logística notificó la recolección de la guía DHL 3111074702 por parte del destinatario. Se cierra la trazabilidad del pedido y del envío.
>
> El ticket queda en estado Resuelto.

El ticket pasa a **Resuelto** (botón Resolver) hasta este momento, no antes: no se resuelve al surtir el pedido ni al generar la guía. GLPI lo cierra automáticamente a las 48 horas.

> Si por excepción el pedido requiriera una segunda guía, esa se registra en un folio aparte de Control de Envíos, ligado a este folio por el campo "Ticket asociado".

---

## Caso 2. Control de Envíos (envío sin pedido SAE)

Este caso es el **envío del teclado de refacción** que quedó pendiente en el ticket 42 (Anexo E). No proviene de un pedido SAE: es una refacción entre técnicos, por lo que abre su propio folio de Control de Envíos, ligado por el campo "Ticket asociado" al ticket de atención donde se originó la necesidad.

### Ficha del ticket

| Dato | Valor |
|---|---|
| Título | CONTROL DE ENVÍOS - ENVÍO REFACCIÓN TECLADO T490 |
| Tipo | Solicitud |
| Categoría | AD > Servicios Generales > Control de Envíos |
| Estado inicial | En curso (asignada) |
| Origen | Correo electrónico |
| ID Externo | NO APLICA |
| Solicitante | Agente MAC que registra |
| Asignado a | Automático: Gloria Deyanira Guerrero Palomares |

### Tab Control de Envíos

| Campo | Valor | Obligatorio |
|---|---|---|
| Guía | 3111074702 | Sí |
| Carrier | DHL | Sí |
| Proyecto | Actinver | Sí |
| Solicitante | Yael Levi Gallardo Sánchez | Sí |
| CC | 123 | Sí |
| Remitente Nombre | Rolando David Abrego Ramírez | Sí |
| Remitente Estado | Sonora | Sí |
| Remitente Localidad | Hermosillo | Sí |
| Destinatario Nombre | José Fernando Aguilar Fuerte | Sí |
| Destinatario Estado | Jalisco | Sí |
| Destinatario Localidad | Guadalajara | Sí |
| Fecha de envío | 04-07-2026 | Sí |
| Costo guía | 250 | No |
| Ticket asociado | 42, 35 | No |
| Serie | NX322254 | No |
| SIAF | NO APLICA | No |
| Fecha de recolección | (pendiente) | No |

La tab IDS **sí se llena** en esta categoría: se registra a quien coordina o entrega el envío.

### Seguimiento (texto libre)

**Envío generado**
> Se genera la guía DHL 3111074702 para el traslado de refacción (teclado T490, serie NX322254) del remitente Rolando David Abrego Ramírez (Hermosillo, Sonora) al destinatario José Fernando Aguilar Fuerte (Guadalajara, Jalisco). Proyecto Actinver, CC 123. Tickets asociados: 42 y 35.

**En tránsito (opcional)**
> Envío en tránsito con DHL. Guía 3111074702. Se da seguimiento a la entrega.

**Entregado y resolución**
> La guía DHL 3111074702 fue entregada al destinatario. Refacción recibida correctamente. Se cierra la trazabilidad del envío.
>
> El ticket queda en estado Resuelto.

El ticket pasa a **Resuelto** (botón Resolver) y GLPI lo cierra automáticamente a las 48 horas.

---

## Cuándo es un folio y cuándo son dos

| Situación | ¿Cuántos folios? | Cómo se documenta |
|---|---|---|
| Pedido SAE con folio vigente que debe viajar | Uno | Se llena la tab Control de Envíos en el mismo folio de Control de Activos (Ruta B). |
| Pedido SAE con folio vigente, sin traslado | Uno | Solo la tab Control de Activos; se resuelve al ser recogido en oficina (Ruta A). |
| Envío sin pedido SAE (refacción entre técnicos, devolución, traslado suelto) | Dos (o el folio de envíos y el de la atención que lo originó) | Folio propio de Control de Envíos, ligado por "Ticket asociado" al ticket relacionado. |
| Guía que llega cuando el folio del pedido ya está Resuelto o Cerrado | Dos | No se reabre el folio del pedido: se abre un folio nuevo de Control de Envíos ligado por "Ticket asociado". |
| Segunda guía para el mismo pedido (excepción) | Dos | El pedido conserva su folio con la primera guía; la segunda guía va en folio aparte de Control de Envíos ligado por "Ticket asociado". |

## Qué ilustran estos casos

- **El folio de un pedido SAE con folio vigente no se duplica.** Si el envío corresponde a ese pedido, se documenta en el mismo ticket llenando la tab Control de Envíos; no se abre un ticket aparte.
- **Sin plantillas, el seguimiento es texto libre**, pero igual debe registrar cada hito de la ruta que aplique (ver 4.2). La regla de propiedad del ticket aplica igual: el agente persigue el dato, no espera.
- **Control de Activos no lleva IDS**, con o sin tab de envíos. Un folio propio de Control de Envíos sí lleva IDS.
- **El campo Ticket asociado liga folios independientes:** se usa cuando el envío no vive en el mismo ticket del pedido (Caso 2, guía tardía o segunda guía), no cuando ambas tabs están en el mismo folio.
- **ID Externo NO APLICA:** son procesos internos sin número de cliente.
- **Nota de SLA:** ambos casos siguen el estándar de Solicitud (TTO 6 h, TTR 30 h, calendario 5x8). El folio consolidado de la Ruta B puede exceder ese tiempo por depender del tránsito del envío; está en definición un SLA específico para las categorías administrativas (ver Anexo B).
---

*Fin del Anexo F. Casos de uso: Control de Activos y Control de Envíos.*
