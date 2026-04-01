

# Plan: Activar PostHog Error Tracking

## Cambio único

**Archivo:** `src/contexts/PostHogContext.tsx` — línea 17

Agregar una línea después de `autocapture: false,`:

```ts
autocapture: false,
enable_exception_autocapture: true,  // Captura errores JS automáticamente
```

Eso es todo. Un flag de configuración, zero impacto en rendimiento.

