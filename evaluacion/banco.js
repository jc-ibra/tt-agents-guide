/**
 * Banco de reactivos y clave para la versión interactiva (quiz.html).
 * Criterio: ≥90 % y reprobatorio automático en reactivos críticos.
 */
window.EVAL_BANCO = {
  titulo: "Evaluación de comprensión del Manual GLPI",
  subtitulo: "Perfiles Agente MAC e Ingeniero de Servicio (IDS)",
  aprobatorio: 0.9,
  criticos: ["A3", "A10", "B2", "B3", "B4", "B12", "B15", "C4", "C7", "C9", "C11"],
  bloques: {
    A: {
      id: "A",
      nombre: "Fundamentos comunes",
      quien: "MAC e IDS",
      items: [
        {
          id: "A1",
          stem: "La regla “si no está en el ticket, no sucedió” significa que:",
          opciones: {
            a: "Los tickets sin actividad se eliminan automáticamente.",
            b: "Solo cuentan las acciones registradas en GLPI; toda gestión, llamada o correo debe reflejarse en el ticket.",
            c: "Puedes registrar de memoria, al final del turno, lo que hiciste.",
            d: "Las llamadas telefónicas no necesitan registrarse."
          },
          correcta: "b"
        },
        {
          id: "A2",
          stem: "Diferencia entre incidencia y solicitud de servicio:",
          opciones: {
            a: "Son lo mismo; GLPI las trata igual.",
            b: "Incidencia = instalar un equipo nuevo; solicitud = una falla urgente.",
            c: "Incidencia = interrupción/falla de un servicio que funcionaba; solicitud = petición estándar prevista, sin falla.",
            d: "La incidencia siempre es de prioridad baja."
          },
          correcta: "c"
        },
        {
          id: "A3",
          critico: true,
          stem: "La única forma correcta de pausar el reloj del SLA es:",
          opciones: {
            a: "Cambiar el estado a “En espera” manualmente.",
            b: "Avisar verbalmente al coordinador.",
            c: "Dejar el ticket sin actualizar hasta que el tercero responda.",
            d: "Aplicar la plantilla de Pendiente (por cliente o por refacción)."
          },
          correcta: "d"
        },
        {
          id: "A4",
          stem: "La documentación de una atención:",
          opciones: {
            a: "Se registra en tiempo real: cada etapa en el momento en que ocurre.",
            b: "Se hace en un solo resumen al final, si el servicio salió bien.",
            c: "Solo se documenta si el cliente lo pide.",
            d: "Basta con avisar al coordinador por mensaje."
          },
          correcta: "a"
        },
        {
          id: "A5",
          stem: "Sobre plantillas de seguimiento vs. texto libre:",
          opciones: {
            a: "El texto libre es más rápido, se prefiere siempre.",
            b: "Se usa siempre la plantilla que corresponda; el texto libre solo cuando ninguna plantilla cubre el caso.",
            c: "Las plantillas son opcionales.",
            d: "El texto libre está prohibido en todos los casos."
          },
          correcta: "b"
        },
        {
          id: "A6",
          stem: "Si olvidas o pierdes tu contraseña:",
          opciones: {
            a: "La restableces tú desde “olvidé mi contraseña”.",
            b: "Usas la de un compañero mientras tanto.",
            c: "No hay autoservicio; se solicita el restablecimiento al administrador (vía el responsable / MAC / coordinador).",
            d: "Creas una cuenta nueva."
          },
          correcta: "c"
        },
        {
          id: "A7",
          stem: "Escalar un ticket:",
          opciones: {
            a: "Es una falla que debe evitarse a toda costa.",
            b: "Se puede saltar directo a la dirección si urge.",
            c: "Es correcto y parte del trabajo; se hace en orden, sin saltar niveles.",
            d: "Solo lo hace el cliente."
          },
          correcta: "c"
        },
        {
          id: "A8",
          stem: "Botones Responder y Resolver:",
          opciones: {
            a: "Responder = avances y pendientes; Resolver = cierre de la atención (resolución/cancelación).",
            b: "Son el mismo botón con distinto nombre.",
            c: "Resolver se usa para poner el ticket en espera.",
            d: "Responder cierra el ticket."
          },
          correcta: "a"
        },
        {
          id: "A9",
          stem: "La prioridad de un ticket:",
          opciones: {
            a: "La elige el agente a criterio.",
            b: "La calcula GLPI automáticamente combinando impacto y urgencia; no se captura a mano.",
            c: "La define el IDS en sitio.",
            d: "Siempre es Alta."
          },
          correcta: "b"
        },
        {
          id: "A10",
          critico: true,
          stem: "Compartir tu usuario y contraseña:",
          opciones: {
            a: "Se permite entre compañeros del mismo turno.",
            b: "Es obligatorio para cubrir ausencias.",
            c: "No afecta en nada.",
            d: "No está permitido; rompe la trazabilidad de quién hizo cada acción."
          },
          correcta: "d"
        },
        {
          id: "A11",
          stem: "Una plantilla aplicada “a medias” (sin completar los espacios [__]):",
          opciones: {
            a: "Documenta menos que un buen texto libre; hay que llenar todos los espacios con el dato real.",
            b: "Es aceptable porque ya se usó la plantilla.",
            c: "GLPI la completa sola.",
            d: "Es mejor que una completa."
          },
          correcta: "a"
        },
        {
          id: "A12",
          stem: "Un ticket de prioridad Alta implica que:",
          opciones: {
            a: "Puede esperar al día siguiente.",
            b: "No requiere documentación.",
            c: "Debes actuar y documentar con mayor rapidez, porque su SLA es más ajustado.",
            d: "Su SLA no corre."
          },
          correcta: "c"
        }
      ]
    },
    B: {
      id: "B",
      nombre: "Perfil MAC — Agente de Mesa de Ayuda",
      quien: "Solo perfil MAC",
      items: [
        {
          id: "B1",
          stem: "Todo ticket que crea el agente MAC nace en el estado:",
          opciones: {
            a: "Nuevo.",
            b: "En curso (asignada).",
            c: "En espera.",
            d: "Aprobación."
          },
          correcta: "b"
        },
        {
          id: "B2",
          critico: true,
          stem: "El agente MAC cierra el ticket:",
          opciones: {
            a: "Manualmente, en cuanto lo resuelve.",
            b: "A las 24 horas.",
            c: "Nunca; GLPI lo cierra automáticamente a las 48 horas de estar en Resuelto.",
            d: "Cuando el cliente lo pide por teléfono."
          },
          correcta: "c"
        },
        {
          id: "B3",
          critico: true,
          stem: "El uso de MAYÚSCULAS aplica a:",
          opciones: {
            a: "Solo el título completo y los valores NO APLICA / NO PROPORCIONADO; todo lo demás en altas y bajas.",
            b: "Todo el ticket.",
            c: "Solo la descripción.",
            d: "Nada va en mayúsculas."
          },
          correcta: "a"
        },
        {
          id: "B4",
          critico: true,
          stem: "Diferencia entre NO PROPORCIONADO y NO APLICA:",
          opciones: {
            a: "Son intercambiables.",
            b: "NO PROPORCIONADO = debía haber dato pero no lo dieron; NO APLICA = por naturaleza del caso no corresponde ninguno.",
            c: "NO APLICA se usa cuando el cliente no contestó.",
            d: "Ambos se escriben en minúsculas."
          },
          correcta: "b"
        },
        {
          id: "B5",
          stem: "Campo CC (centro de costos) en la tab Clientes Externos:",
          opciones: {
            a: "Puede ir NO APLICA sin problema.",
            b: "Se deja vacío.",
            c: "Puede ir NO PROPORCIONADO si no se tiene, pero nunca NO APLICA (todo proyecto tiene CC).",
            d: "Se inventa un número."
          },
          correcta: "c"
        },
        {
          id: "B6",
          stem: "Título de un cliente externo con sucursal:",
          opciones: {
            a: "NOMBRE DE CLIENTE - SUCURSAL - DESCRIPCIÓN BREVE",
            b: "descripción - cliente - fecha",
            c: "Solo la descripción.",
            d: "NOMBRE DE CATEGORÍA - DESCRIPCIÓN (sin sucursal)."
          },
          correcta: "a"
        },
        {
          id: "B7",
          stem: "Título de una categoría interna (áreas internas / administración):",
          opciones: {
            a: "Igual que un externo, con sucursal.",
            b: "Lleva el nombre del coordinador.",
            c: "Sin segmento SUCURSAL: NOMBRE DE LA CATEGORÍA - DESCRIPCIÓN",
            d: "Va en minúsculas."
          },
          correcta: "c"
        },
        {
          id: "B8",
          stem: "En un Cliente Externo de atención dinámica por zona, el campo “Asignado a” se llena:",
          opciones: {
            a: "Manualmente, con el coordinador operativo según el estado donde se dará el servicio.",
            b: "GLPI lo asigna solo, siempre.",
            c: "Con el IDS directamente.",
            d: "Se deja sin asignar."
          },
          correcta: "a"
        },
        {
          id: "B9",
          stem: "Categorías con responsable fijo (p. ej. Control de Envíos, Laboratorio, Sistemas Internos):",
          opciones: {
            a: "El agente asigna al coordinador por estado.",
            b: "GLPI las asigna automáticamente; el agente no elige coordinador.",
            c: "No se asignan a nadie.",
            d: "Las asigna el IDS."
          },
          correcta: "b"
        },
        {
          id: "B10",
          stem: "Después de guardar el ticket, se debe reabrir para:",
          opciones: {
            a: "Cambiar la prioridad.",
            b: "Cerrarlo.",
            c: "Habilitar los campos personalizados y validar la asignación/categoría.",
            d: "Nada; el registro ya terminó."
          },
          correcta: "c"
        },
        {
          id: "B11",
          stem: "Al reabrir, la asignación automática no cayó en el responsable esperado. Casi siempre significa que:",
          opciones: {
            a: "La categoría está mal elegida y debe corregirse.",
            b: "Hay que ignorarlo.",
            c: "Se asigna a cualquiera.",
            d: "Se cancela el ticket."
          },
          correcta: "a"
        },
        {
          id: "B12",
          critico: true,
          stem: "La tab IDS se llena:",
          opciones: {
            a: "Solo en clientes externos.",
            b: "Siempre, en todas las categorías, con una única excepción: Control de Activos.",
            c: "Nunca la llena el MAC.",
            d: "Solo cuando el IDS lo pide."
          },
          correcta: "b"
        },
        {
          id: "B13",
          stem: "Un pedido SAE (Control de Activos) que debe viajar a otro estado con guía de traslado:",
          opciones: {
            a: "Se pone todo en el mismo ticket de Control de Activos.",
            b: "No se registra.",
            c: "Se registra en un ticket aparte de Control de Envíos; no se mezcla con Control de Activos.",
            d: "Va en la tab IDS."
          },
          correcta: "c"
        },
        {
          id: "B14",
          stem: "Regla de los 30 km (Local o Foráneo):",
          opciones: {
            a: "Si el IDS se traslada a más de 30 km de su localidad de origen/residencia es Foráneo; si no, Local.",
            b: "Más de 30 km es Local.",
            c: "Se mide desde la oficina de MAC.",
            d: "Siempre es Foráneo."
          },
          correcta: "a"
        },
        {
          id: "B15",
          critico: true,
          stem: "La Fecha de apertura:",
          opciones: {
            a: "Se deja la que pone GLPI por defecto.",
            b: "Se captura manualmente: la fecha/hora indicada en la solicitud, o la del correo si no se especifica.",
            c: "Es la fecha en que se cierra.",
            d: "La elige el IDS."
          },
          correcta: "b"
        },
        {
          id: "B16",
          stem: "Necesitas un valor que no existe en una lista (Equipo, Carrier, Regional…):",
          opciones: {
            a: "Lo das de alta tú mismo.",
            b: "Usas NO APLICA.",
            c: "Dejas el campo vacío.",
            d: "No lo creas; lo solicitas al administrador (Juan Carlos Pérez Salgado)."
          },
          correcta: "d"
        },
        {
          id: "B17",
          stem: "En la matriz de prioridad, urgencia Alta + impacto Medio =",
          opciones: {
            a: "Media.",
            b: "Alta.",
            c: "Baja.",
            d: "Crítica."
          },
          correcta: "b"
        },
        {
          id: "B18",
          stem: "SLA estándar vigente de un Incidente:",
          opciones: {
            a: "TTO 6 h y TTR 30 h.",
            b: "24 h para todo.",
            c: "TTO 3 h y TTR 10 h, calendario 5×8.",
            d: "Sin límite de tiempo."
          },
          correcta: "c"
        },
        {
          id: "B19",
          stem: "El SLA se asigna:",
          opciones: {
            a: "Automáticamente según el tipo (Incidente/Solicitud); por eso clasificar bien el tipo es clave.",
            b: "El agente lo captura a mano.",
            c: "Lo define el coordinador.",
            d: "No existe SLA."
          },
          correcta: "a"
        },
        {
          id: "B20",
          stem: "En las categorías Edificios (Actinver / Afirme):",
          opciones: {
            a: "Se asigna coordinador por estado como cualquier cliente.",
            b: "La Regional es Edificios (no una zona DTN/DTS) y la Sucursal es ACTINVER CORPORATIVO / AFIRME CORPORATIVO.",
            c: "No se llena la tab Clientes Externos.",
            d: "El título no lleva el segmento de sucursal."
          },
          correcta: "b"
        }
      ]
    },
    C: {
      id: "C",
      nombre: "Perfil IDS — Ingeniero de Servicio",
      quien: "Solo perfil IDS",
      items: [
        {
          id: "C1",
          stem: "Antes de trasladarte a sitio:",
          opciones: {
            a: "Entras al ticket en GLPI y revisas toda la información, no solo el título.",
            b: "Basta con lo que te dijo el coordinador por teléfono.",
            c: "Vas directo y revisas al llegar.",
            d: "Esperas a que el cliente te llame."
          },
          correcta: "a"
        },
        {
          id: "C2",
          stem: "En las tabs del ticket, como IDS encuentras:",
          opciones: {
            a: "Nada que te sirva.",
            b: "Dirección/ubicación, usuario de contacto en sitio y datos del equipo (y no las modificas).",
            c: "Solo el nombre del coordinador.",
            d: "Tu contraseña."
          },
          correcta: "b"
        },
        {
          id: "C3",
          stem: "El usuario de contacto en sitio:",
          opciones: {
            a: "Siempre es quien solicitó el servicio.",
            b: "Es tu coordinador.",
            c: "No siempre es quien solicitó el servicio; con esa persona te presentas al llegar.",
            d: "No importa quién sea."
          },
          correcta: "c"
        },
        {
          id: "C4",
          critico: true,
          stem: "¿Puede el IDS modificar la información general que capturó MAC?",
          opciones: {
            a: "No; solo agrega sus seguimientos con las plantillas correspondientes.",
            b: "Sí, la que quiera.",
            c: "Solo la prioridad.",
            d: "Solo la categoría."
          },
          correcta: "a"
        },
        {
          id: "C5",
          stem: "Orden mínimo de documentación de un ticket:",
          opciones: {
            a: "Solo la Resolución al final.",
            b: "IDS En camino → En sitio → Diagnosticado → Resolución.",
            c: "En sitio → En camino → Resolución.",
            d: "Cualquier orden, no importa."
          },
          correcta: "b"
        },
        {
          id: "C6",
          stem: "Un diagnóstico bien documentado se ve así:",
          opciones: {
            a: "“Se revisó el equipo y se encontró la falla.”",
            b: "“Ya quedó.”",
            c: "“Impresora HP LaserJet M404, fusor dañado que impide el paso del papel; requiere reemplazo de fusor.”",
            d: "“Falla varia.”"
          },
          correcta: "c"
        },
        {
          id: "C7",
          critico: true,
          stem: "El formato físico de conformidad:",
          opciones: {
            a: "Se digitaliza y se adjunta al ticket; enviarlo al coordinador no sustituye adjuntarlo (debe estar en ambos lugares).",
            b: "Basta con enviarlo al coordinador por WhatsApp.",
            c: "No es necesario si el servicio quedó bien.",
            d: "Solo se guarda en papel."
          },
          correcta: "a"
        },
        {
          id: "C8",
          stem: "Un ticket no se considera correctamente documentado hasta que:",
          opciones: {
            a: "El coordinador lo aprueba verbalmente.",
            b: "El formato de conformidad está adjunto en GLPI.",
            c: "Pasan 48 horas.",
            d: "El cliente paga."
          },
          correcta: "b"
        },
        {
          id: "C9",
          critico: true,
          stem: "Tu atención se detiene porque falta una refacción:",
          opciones: {
            a: "Dejas el ticket sin tocar.",
            b: "Lo cierras como resuelto.",
            c: "Aplicas la plantilla Pendiente por refacción (pausa el SLA); nunca de forma manual ni solo verbal.",
            d: "Avisas solo por teléfono y ya."
          },
          correcta: "c"
        },
        {
          id: "C10",
          stem: "Al revisar el ticket detectas que falta información (dirección incompleta, sin contacto):",
          opciones: {
            a: "No supones el dato ni te trasladas; lo solicitas a MAC antes de salir.",
            b: "Vas a sitio y ahí improvisas.",
            c: "Cancelas el ticket.",
            d: "Inventas la dirección más probable."
          },
          correcta: "a"
        },
        {
          id: "C11",
          critico: true,
          stem: "Si no puedes acceder a GLPI y necesitas documentar tu atención:",
          opciones: {
            a: "Dejas la documentación para cuando recuperes el acceso, sin avisar.",
            b: "Pides a MAC que registre por ti con el detalle exacto; la responsabilidad de que quede bien sigue siendo tuya.",
            c: "No documentas; no es tu culpa.",
            d: "Usas la cuenta de un compañero."
          },
          correcta: "b"
        },
        {
          id: "C12",
          stem: "Evidencia fotográfica:",
          opciones: {
            a: "Cuantas más fotos, mejor.",
            b: "Solo cuando aporta al caso, 1 o 2 fotos suficientes; no se abusa de imágenes.",
            c: "Nunca se adjuntan fotos.",
            d: "Solo una selfie del IDS en sitio."
          },
          correcta: "b"
        },
        {
          id: "C13",
          stem: "La prioridad del ticket, para el IDS:",
          opciones: {
            a: "Ya viene calculada por GLPI; no la modificas, pero la tomas en cuenta para actuar más rápido.",
            b: "La cambias en sitio.",
            c: "No existe.",
            d: "La define el cliente."
          },
          correcta: "a"
        },
        {
          id: "C14",
          stem: "El acceso del IDS en campo:",
          opciones: {
            a: "Solo desde una PC de oficina.",
            b: "Con la cuenta del coordinador.",
            c: "Principalmente desde el celular, con su correo y contraseña; desde cualquier dispositivo con internet.",
            d: "No necesita cuenta."
          },
          correcta: "c"
        }
      ]
    }
  }
};
