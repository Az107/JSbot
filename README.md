# JSbot

Bot de Discord en TypeScript. El token **nunca** va en el repo: se lee de `TOKEN`.

## Arrancar

    npx tsc            # compila src/ -> build/ (tsconfig: outDir ./build)
    TOKEN=<token del bot> npm start

`build/` no se versiona (son artefactos; y ya hubo un token commiteado ahí en 2021, en el
historial). `typescript` no está en `devDependencies`: por eso `npx tsc` en vez de
`npm run build`; si lo añades, puedes dejar un script `build`.

## Secretos

- El token del bot va en la variable de entorno `TOKEN` del proceso (o en un `.env` que
  esté ignorado). Nunca en `src/`, ni en `build/`, ni en la config de despliegue.
- Hook de pre-commit con gitleaks:

      cp scripts/pre-commit .git/hooks/pre-commit && chmod +x .git/hooks/pre-commit

  Escanea solo el diff que se va a commitear (`gitleaks git . --staged`), con la config de
  `.gitleaks.toml`. No mira el historial: el token viejo sigue ahí y está rotado, y reescribir
  el historial de un repo público no aporta.
