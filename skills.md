# Skills para HarmonieDerm

> Este documento está pensado para guiar a **Claude** como agente de codificación dentro de Cursor.  
> Cuando trabajes con Claude, pídele que lea este archivo al inicio de la sesión y que lo use como marco de referencia para decisiones de contenido, SEO y estructura.

## Contexto del proyecto

HarmonieDerm necesita una plataforma web enfocada en:

- SEO local para `Trujillo, Peru`
- captación de pacientes desde búsqueda orgánica e Instagram
- presentación profesional de tratamientos estéticos no quirúrgicos
- arquitectura preparada para futuras fases como agenda, CRM y automatización

La Fase 1 es un sitio informativo, rápido, mobile-first y orientado a conversión.

## Skills base ya útiles

Estos skills ya encajan con el proyecto y deben considerarse parte del stack operativo:

- `nextjs-app-router-16`
  Para estructura, rutas, metadata, rendering y convenciones de Next.js App Router.
- `react-19-ui-patterns`
  Para composición de componentes, límites cliente/servidor e interacciones limpias.
- `tailwind-4-ui`
  Para sistema visual, tokens, layout responsive y consistencia visual.
- `html-css-a11y`
  Para semántica, accesibilidad, landmarks, headings y formularios.

## Skills custom recomendados

### 1. `harmoniederm-brand-copy`

Propósito:
Definir y producir copy de marca, tono de voz, propuestas de valor, CTAs y mensajes por sección.

Debe cubrir:

- voz de marca elegante, médica y confiable
- mensajes orientados a resultados naturales
- copy para home, about, tratamientos, contacto y CTAs
- adaptación del lenguaje para SEO sin sonar robótico
- consistencia entre Instagram, web y campañas

Valor:
Evita copy genérico y alinea toda la comunicación comercial.

### 2. `harmoniederm-seo-local`

Propósito:
Diseñar y validar SEO on-page y local para servicios estéticos en Trujillo.

Debe cubrir:

- keyword mapping por tratamiento
- slugs SEO
- titles y meta descriptions
- estructura H1/H2/H3
- enlazado interno
- schema markup local y de servicios
- estrategia de landing pages como `/facial-harmonization-trujillo`
- checklist para imágenes, alt text y performance SEO

Valor:
Este es uno de los skills más críticos porque el proyecto nace con enfoque SEO-first.

### 3. `harmoniederm-treatment-pages`

Propósito:
Estandarizar cómo se diseña y redacta cada página de tratamiento.

Debe cubrir:

- estructura base de página de tratamiento
- beneficios
- perfil del paciente ideal
- cómo funciona el procedimiento
- resultados esperados
- preguntas frecuentes
- CTAs a WhatsApp
- bloques de confianza y disclaimers

Valor:
Permite crear páginas escalables y consistentes para servicios core y secundarios.

### 4. `harmoniederm-before-after-gallery`

Propósito:
Definir cómo presentar galerías de resultados con foco en conversión, confianza y claridad visual.

Debe cubrir:

- estructura de galería
- organización por tratamiento
- etiquetas descriptivas
- buenas prácticas de carga de imágenes
- accesibilidad y alt text
- criterios de credibilidad para contenido visual

Valor:
El negocio depende mucho del impacto visual de antes y después.

### 5. `harmoniederm-blog-seo`

Propósito:
Crear artículos educativos orientados a tráfico orgánico y captación.

Debe cubrir:

- selección de temas por intención de búsqueda
- estructura de artículos
- FAQs SEO
- enlazado desde blog hacia tratamientos
- plantillas de contenido evergreen
- criterios E-E-A-T aplicados a medicina estética

Valor:
Convierte el blog en canal real de adquisición, no solo contenido decorativo.

### 6. `harmoniederm-lead-conversion`

Propósito:
Optimizar puntos de conversión hacia WhatsApp y contacto.

Debe cubrir:

- ubicación de CTAs
- copy de intención alta y baja
- formularios simples si se agregan más adelante
- fricción mínima en mobile
- microcopys de confianza
- tracking de eventos de conversión

Valor:
La web debe transformar tráfico en consultas, no solo informar.

### 7. `harmoniederm-analytics-tracking`

Propósito:
Implementar y mantener medición de marketing.

Debe cubrir:

- Google Analytics
- Google Tag Manager
- Meta Pixel
- eventos clave: clic a WhatsApp, scroll, lead intent, visitas a tratamientos
- nomenclatura consistente para eventos
- validación de tags en producción

Valor:
Sin esto no se puede medir qué tratamiento o canal convierte mejor.

### 8. `harmoniederm-content-model`

Propósito:
Definir una estructura de contenido extensible para tratamientos, blog, FAQs, testimonios y galerías.

Debe cubrir:

- shape de datos para tratamientos
- campos SEO
- campos para highlights y CTAs
- soporte para contenido reusable
- preparación para CMS o source files futuros

Valor:
Reduce refactors cuando el sitio crezca o se conecte a CMS.

### 9. `harmoniederm-design-system`

Propósito:
Crear reglas de UI específicas de la marca.

Debe cubrir:

- tipografía
- color system
- spacing
- cards
- sections
- botones
- badges
- tratamiento visual de contenido médico-estético premium

Valor:
Evita una interfaz genérica y ayuda a sostener una identidad visual coherente.

### 10. `harmoniederm-medical-content-guardrails`

Propósito:
Definir límites editoriales y legales para contenido médico-estético.

Debe cubrir:

- lenguaje permitido y no permitido
- cómo hablar de resultados sin promesas absolutas
- disclaimers necesarios
- tono profesional sin claims riesgosos
- consistencia con contenido educativo y comercial

Valor:
Es importante para reducir riesgo reputacional y mensajes inadecuados.

## Orden recomendado de creación

1. `harmoniederm-brand-copy`
2. `harmoniederm-seo-local`
3. `harmoniederm-treatment-pages`
4. `harmoniederm-design-system`
5. `harmoniederm-lead-conversion`
6. `harmoniederm-content-model`
7. `harmoniederm-blog-seo`
8. `harmoniederm-before-after-gallery`
9. `harmoniederm-analytics-tracking`
10. `harmoniederm-medical-content-guardrails`

## Prioridad real para Fase 1

Si solo se van a construir los skills estrictamente necesarios para arrancar bien, los mínimos son:

- `harmoniederm-brand-copy`
- `harmoniederm-seo-local`
- `harmoniederm-treatment-pages`
- `harmoniederm-design-system`
- `harmoniederm-lead-conversion`

## Resultado esperado

Con estos skills, el proyecto puede ejecutarse con una base clara para:

- contenido de marca consistente
- páginas de tratamiento escalables
- SEO local sólido
- mejor conversión hacia WhatsApp
- una UI más diferenciada y profesional
- crecimiento ordenado hacia fases futuras
