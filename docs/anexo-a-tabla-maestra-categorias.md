# Anexo A. Tabla maestra de categorías
 
**Manual de Uso de GLPI para Agentes de Mesa de Ayuda**
Trantor Technologies | Service Desk
 
---
 
Esta tabla concentra, por categoría, todo lo que el agente MAC necesita para registrar y despachar un ticket correctamente. Sustituye la consulta de varias tablas dispersas: aquí está el tipo de ticket en que la categoría es visible, la convención de SUCURSAL para el título, cómo se asigna, qué tab de campos personalizados se llena y si lleva IDS.
 
## Cómo leer la tabla
 
- **Tipo visible:** en qué tipo de ticket aparece la categoría (Incidencia, Solicitud o ambas). Si el caso no corresponde al tipo, la categoría no se mostrará.
- **Convención SUCURSAL:** qué va en el segmento SUCURSAL del título. "Sucursal real" significa que se usa el nombre de la sucursal física donde se dará el servicio; el resto son convenciones fijas.
- **Asignación:** "Auto" significa que GLPI asigna solo por regla de negocio (el agente no elige coordinador). "Coordinador por estado" significa que el agente asigna manualmente al coordinador según el estado (ver Anexo de coordinadores por estado).
- **Tab:** la tab de campos personalizados que se completa al reabrir el ticket.
- **IDS:** si se captura la tab IDS.
## Rama OP > CE (Clientes Externos)
 
| Categoría | Tipo visible | Convención SUCURSAL | Asignación | Tab | IDS |
|---|---|---|---|---|---|
| OP > CE > Actinver > Edificios | Ambas | Actinver Edificio | Auto: Eleazar Espinoza Chávez | Clientes Externos | Sí |
| OP > CE > Actinver > Data Center | Ambas | Actinver Data Center | Auto: Fernando Manuel Juárez Ruiz | Clientes Externos | Sí |
| OP > CE > Actinver > Multivendor | Ambas | Sucursal real | Coordinador por estado | Clientes Externos | Sí |
| OP > CE > Afirme > Edificios | Ambas | Afirme Edificio | Auto: Arely Belén Hernández Reyes | Clientes Externos | Sí |
| OP > CE > Afirme > Multivendor | Ambas | Sucursal real | Coordinador por estado | Clientes Externos | Sí |
| OP > CE > Banorte | Ambas | Sucursal real | Coordinador por estado | Clientes Externos | Sí |
| OP > CE > Sellcom BBVA > Incidencias | Solo incidencia | Sucursal real | Coordinador por estado | Clientes Externos | Sí |
| OP > CE > Sellcom BBVA > Instalaciones RT | Ambas | Sucursal real | Coordinador por estado | Clientes Externos | Sí |
| OP > CE > Sellcom BBVA > Cajeros | Ambas | Sucursal real | Coordinador por estado | Clientes Externos | Sí |
| OP > CE > Sellcom BBVA > CEASC | Ambas | Sucursal real | Coordinador por estado | Clientes Externos | Sí |
| OP > CE > Sellcom BBVA > Plan Inmobiliario | Ambas | Sucursal real | Coordinador por estado | Clientes Externos | Sí |
| OP > CE > Sellcom | Ambas | Sucursal real | Coordinador por estado | Clientes Externos | Sí |
| OP > CE > Cattri | Ambas | Sucursal real | Coordinador por estado | Clientes Externos | Sí |
| OP > CE > Lexmark | Ambas | Sucursal real | Coordinador por estado | Clientes Externos | Sí |
| OP > CE > Pop Media | Ambas | Sucursal real | Coordinador por estado | Clientes Externos | Sí |
| OP > CE > Symetry > Receptores | Ambas | Sucursal real | Coordinador por estado | Clientes Externos | Sí |
| OP > CE > Symetry > Kiosko Digital | Ambas | Sucursal real | Coordinador por estado | Clientes Externos | Sí |
| OP > CE > VoxPop | Ambas | Sucursal real | Coordinador por estado | Clientes Externos | Sí |
| OP > CE > Sappa | Ambas | Sucursal real | Coordinador por estado | Clientes Externos | Sí |
| OP > CE > Grupo Asesores | Ambas | Sucursal real | Coordinador por estado | Clientes Externos | Sí |
| OP > CE > Digital Solution | Ambas | Sucursal real | Coordinador por estado | Clientes Externos | Sí |
| OP > CE > Otro | Ambas | Sucursal real | Coordinador por estado | Clientes Externos | Sí |
 
## Rama OP > AI (Áreas Internas)
 
| Categoría | Tipo visible | Convención SUCURSAL | Asignación | Tab | IDS |
|---|---|---|---|---|---|
| OP > AI > Laboratorio | Ambas | Laboratorio | Auto: Raúl López Balbuena | Áreas Internas | Sí |
| OP > AI > Sistemas Internos | Ambas | Sistemas Internos | Auto: Fernando Zárate Delgadillo | Áreas Internas | Sí |
| OP > AI > Documentación Interna | Solo solicitud | Documentación Interna | Coordinador por estado (verificar) | Áreas Internas | Sí |
 
## Rama AD (Administración)
 
| Categoría | Tipo visible | Convención SUCURSAL | Asignación | Tab | IDS |
|---|---|---|---|---|---|
| AD > Almacén > Control de Activos | Solo solicitud | Almacén | Auto: Antonio Hernández Bermúdez | Control de Activos | No |
| AD > Servicios Generales > Control de Envíos | Solo solicitud | Logística | Auto: Gloria Deyanira Guerrero Palomares | Control de Envíos | Sí |
| AD > Servicios Generales > Servicios Internos | Ambas | Mantenimiento | Auto: Gloria Deyanira Guerrero Palomares | Áreas Internas | Sí |
| AD > Tesorería > Viáticos | Solo solicitud | Tesorería | Auto: Ramón Escalante Méndez | Fuera de alcance en esta fase | Fuera de alcance |
| AD > Relaciones Humanas > Personal | Solo solicitud | RRHH | Auto: Miriam Yennifer López Hipólito | Fuera de alcance en esta fase | Fuera de alcance |
 
## Notas
 
- **Nodos padre no seleccionables:** OP, AD, CE, AI, y los nodos de cliente que solo agrupan (por ejemplo Actinver, Afirme, Sellcom BBVA, Symetry como nodo) no se seleccionan directamente. El agente elige siempre la categoría hoja más específica.
- **Viáticos y Personal:** en esta fase el agente MAC no crea tickets de estas categorías (se gestionarán mediante formularios más adelante). Sí puede darles seguimiento. Su detalle irá en un anexo posterior.
- **Documentación Interna:** figura con asignación por coordinador de zona (dinámica). Conviene verificar este comportamiento con el administrador, ya que es una categoría interna y no una atención a cliente en sitio.
- **Fuente:** esta tabla se construyó a partir del catálogo de categorías de GLPI, la matriz de responsables de asignación y la tabla de convenciones de SUCURSAL. Cualquier alta o cambio de categoría debe reflejarse aquí para mantenerla como referencia única.
---
 
*Fin del Anexo A. Tabla maestra de categorías.*
 