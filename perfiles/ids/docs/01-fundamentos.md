# Parte 1. Fundamentos

**Manual de Uso de GLPI para IDS (Ingenieros de Servicio)**
Trantor Technologies | Service Desk

---

## 1.1 Propósito de este manual

Este manual explica cómo usar GLPI desde tu rol como IDS: cómo revisar los tickets que te asignan, qué información debes identificar en ellos y cómo documentar cada etapa de tu atención en sitio.

No busca que memorices pantallas, sino que entiendas por qué cada registro importa y cómo tu documentación se conecta con el trabajo de Mesa de Ayuda Central (MAC) y de tu coordinador.

## 1.2 Tu rol dentro del flujo de atención

Un ticket no nace contigo, pero tú eres quien lo resuelve frente al cliente. El recorrido, antes de llegar a ti, es el siguiente:

1. El cliente o área solicita un servicio.
2. Un agente de Mesa de Ayuda Central (MAC) registra el ticket en GLPI y lo clasifica.
3. Tu coordinador operativo revisa el ticket y te lo asigna a ti.
4. Tú te trasladas a sitio, diagnosticas y resuelves, o reportas si algo queda pendiente (por ejemplo, una refacción).
5. MAC da seguimiento al ticket hasta que el servicio queda restablecido.

Tu trabajo es la atención en sitio, lo que en la operación se conoce como nivel 2 (N2). Y como se mencionó antes, lo que registras en GLPI durante ese proceso es la evidencia oficial de tu servicio.

## 1.3 ¿Qué es GLPI?

GLPI es la plataforma donde vive toda la operación de soporte de Trantor Technologies. Cada solicitud de un cliente se convierte en un ticket, y ese ticket se documenta ahí de principio a fin.

Para ti como IDS, GLPI es el lugar donde:

- Consultas los tickets que tienes asignados.
- Encuentras la información que necesitas para atender (ubicación, contacto, equipo).
- Registras cada etapa de tu atención con las plantillas de seguimiento correspondientes.

Regla base de la operación, la misma que aplica para todo el equipo: si no está en el ticket, no sucedió.

## 1.4 Lo que debes conocer sobre SLA, prioridad y escalación

### SLA (Acuerdo de Nivel de Servicio)

El SLA es el compromiso de tiempo con el que se debe atender y resolver un ticket. Cuando ves un ticket, ese SLA ya corre en segundo plano desde que se registró.

Esto tiene un efecto directo en tu trabajo: mientras más rápido documentes tu avance (que vas en camino, que llegaste a sitio, que ya diagnosticaste), más control tiene la operación sobre ese tiempo. Y si el ticket queda detenido por algo que no depende de ti (por ejemplo, una refacción), existe una forma correcta de registrarlo para que el SLA se pause. Esto se explica a detalle en la Parte 4.

### Prioridad

La prioridad de un ticket ya viene definida cuando te llega, la calculó GLPI a partir de la urgencia e impacto que capturó MAC. Tú no la modificas, pero sí debes tomarla en cuenta: un ticket de prioridad alta requiere que actúes y documentes con mayor rapidez, porque su SLA es más ajustado.

### Escalación

Escalar significa avisar a un nivel con mayor capacidad de decisión cuando algo bloquea tu atención y tú, en sitio, no lo puedes resolver por tu cuenta: una refacción que no llega, un acceso que el cliente no autoriza, una instrucción que te falta.

Escalar a tiempo no es una falla, es parte correcta de tu trabajo. Lo que sí afecta el servicio es quedarte con el problema sin avisar y sin dejarlo documentado en el ticket. El detalle de a quién reportas un bloqueo se explica en la Parte 4.

## 1.5 Glosario de términos

| Término | Qué significa para ti |
|---|---|
| Ticket | Registro de una atención en GLPI. Es el expediente completo del caso que vas a atender. |
| Incidencia | Una falla: algo que funcionaba y dejó de funcionar. |
| Solicitud | Una petición estándar, sin falla de por medio (por ejemplo, instalar un equipo nuevo). |
| Solicitante | La persona que originó la petición ante MAC. No siempre es la misma persona que te recibe en sitio. |
| Agente / Técnico | Cualquier persona que atiende un ticket en GLPI. Tú, como IDS, eres uno de estos roles. |
| Estado | La etapa en la que va el ticket (por ejemplo, en curso, en espera, resuelto). |
| Prioridad | El nivel de urgencia con el que debe atenderse el ticket, ya calculado por el sistema. |
| SLA | El compromiso de tiempo de atención y solución del ticket. |
| Seguimiento | Cada nota o actualización que registras en el ticket conforme avanzas. |
| Solución | El registro de cómo quedó resuelto el ticket. |
| Base de Conocimiento | El repositorio de soluciones documentadas que puedes consultar para resolver más rápido. |
| Categoría | La clasificación del tipo de servicio que se está atendiendo. |

---

*Fin de la Parte 1. Fundamentos.*
