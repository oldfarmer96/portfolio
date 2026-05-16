# AGENTS.md

## Objetivo del proyecto
- Este repositorio contiene el portafolio personal de Jose en Astro.
- La prioridad es una experiencia visual profesional, clara y rapida en movil y escritorio.

## Reglas de interfaz
- Mantener una barra de navegacion flotante en la parte inferior, siempre visible.
- No usar header superior ni footer en la pagina principal.
- Mantener el contenido principal centrado y con buena jerarquia tipografica.
- Respetar modo claro y modo oscuro con contraste legible en textos y controles.
- Evitar paletas genericas moradas; priorizar tonos teal/cyan definidos en tokens.

## Arquitectura y estilo
- Mantener componentes pequenos y reutilizables en `src/components`.
- Centralizar tokens visuales (colores, superficies, tipografia) en `src/styles/global.css`.
- Evitar estilos inline complejos si pueden vivir en clases reutilizables.
- Conservar IDs de seccion (`#about`, `#experience`, `#projects`, `#skills`, `#contact`) para navegacion.

## Calidad
- Antes de cerrar cambios de UI, ejecutar `pnpm build`.
- Si se agregan scripts o cambios de comportamiento, validar accesibilidad basica de teclado y foco.
- No introducir dependencias nuevas sin necesidad clara.

## Comportamiento esperado de agentes
- Leer primero el contexto existente y seguir convenciones del repo.
- No revertir cambios del usuario que no esten relacionados con la tarea.
- Proponer cambios modulares y consistentes, evitando duplicacion de estilos.
- Documentar brevemente decisiones importantes en el mensaje final con rutas de archivo.
