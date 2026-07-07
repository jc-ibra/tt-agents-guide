# Notas internas para revisar (NO PUBLICAR)

Este archivo **no es parte del manual** y no está enlazado en ninguna navegación.
Recopila notas editoriales que Claude dejó dentro de los `.md` de `docs/` marcando
**datos que no pudo verificar** y que quedaron pendientes de confirmar con el
administrador. Se quitaron de los documentos originales para que no aparezcan en
el sitio público. Revisa cada una, confírmala con la operación y decide si el
dato queda como está o se corrige en `docs/`.

Generado: 2026-07-06.

---

## Notas quitadas de los documentos (ya NO están públicas)

### 1. Documentación Interna - ¿asignación por coordinador de zona?
- **Archivo:** `docs/anexo-a-tabla-maestra-categorias.md`
- **Bloque:** tabla "Rama OP > AI (Áreas Internas)", fila `OP > AI > Documentación Interna`, columna *Asignación*.
- **Texto quitado:** el marcador `(verificar)` en la celda → quedaba `Coordinador por estado (verificar)`. Ahora dice solo `Coordinador por estado`.
- **Por qué:** era una marca de duda de Claude sobre si esa celda es correcta.
- **A validar:** ¿`Documentación Interna` realmente se asigna al coordinador por estado (dinámica), o tiene un responsable fijo como el resto de categorías internas?

### 2. Documentación Interna - comportamiento a confirmar con el administrador
- **Archivo:** `docs/anexo-a-tabla-maestra-categorias.md`
- **Bloque:** sección `## Notas` (era una viñeta de la lista).
- **Texto quitado (completo):**
  > - **Documentación Interna:** figura con asignación por coordinador de zona (dinámica). Conviene verificar este comportamiento con el administrador, ya que es una categoría interna y no una atención a cliente en sitio.
- **Por qué:** nota dirigida al administrador señalando que el dato podría no ser correcto. Es la misma duda que la nota 1.
- **A validar:** mismo punto que la nota 1. Si se confirma el comportamiento, no hace falta re-publicar la nota; si cambia, corregir la tabla en Anexo A y Anexo C.

### 3. Matriz de prioridad - debe coincidir con la instancia
- **Archivo:** `docs/03-gestion-tickets.md`
- **Bloque:** sección `### Urgencia, Impacto y Prioridad` (justo debajo de la tabla de la matriz de prioridad).
- **Texto quitado (completo):**
  > Nota: los tres niveles deben coincidir con la configuración de la instancia de GLPI de Trantor Technologies.
- **Por qué:** es una advertencia de implementación (que la matriz del manual cuadre con la config real de GLPI), no algo que el agente use en su operación diaria.
- **A validar:** que la matriz Baja/Media/Alta del manual sea idéntica a la configurada en la instancia. Es verificación una sola vez; no necesita estar en el manual del agente.

### 4. Calendario 5x8 - confirmar detalle con el administrador
- **Archivo:** `docs/anexo-b-sla.md`
- **Bloque:** sección `## Qué significa el calendario 5x8`.
- **Texto quitado (solo la última frase de la nota):**
  > Confirmar con el administrador si se requiere el detalle.
- **Nota que quedó publicada (recortada):**
  > Nota: la ventana exacta del calendario 5x8 (hora de inicio y fin, días festivos considerados) está definida en la configuración de GLPI.
- **Por qué:** la frase quitada era la parte "pendiente de confirmar"; el resto es información válida para el lector, así que se conservó.
- **A validar:** cuál es la ventana exacta (hora inicio/fin y días festivos) del calendario 5x8, por si quieres documentarla explícitamente.

---

## Puntos que NO quité, pero conviene que revises

Estos NO son notas de Claude; son contenido intencional del manual, pero los
menciono por si quieres ajustarlos:

- **Referencia a una "Parte 5" inexistente.** En `docs/02-primeros-pasos.md`, sección
  `### Vista de "Mis tickets"`, dice *"…se aborda en las Partes 3 y 5."* El manual
  solo tiene Partes 1–4; el seguimiento está en la **Parte 4**. Parece un error de
  numeración, no una nota. Si quieres lo corrijo a "Partes 3 y 4".
- **Sección "En desarrollo (fases posteriores)"** en `docs/00-indice.md`: es una hoja
  de ruta intencional (Viáticos/Personal, formularios, SLA por proyecto). La dejé
  publicada porque parece deliberada; si prefieres ocultarla del sitio público, dime.
- **Viñeta "Fuente:"** al final de `## Notas` en `docs/anexo-a-tabla-maestra-categorias.md`:
  explica de dónde salió la tabla y que hay que mantenerla actualizada. Es guía de
  mantenimiento, no una duda. La dejé; quítala si no quieres que sea pública.
