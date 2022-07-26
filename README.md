# A Best Girl da UniOtaku

## [Roadmap](https://github.com/qgustavor/best-girl-da-uniotaku/discussions/1)

Baseado no template Vue 3 + Vite, logo `<script setup>` é suportado e recomendado.

É recomendado usar [VS Code](https://code.visualstudio.com/) com o plugin [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar).

## Testando

1. Rode um dos comandos abaixo para simular a API:

    - `npx micro mock-api/preliminary.cjs`: votação preliminar
    - `npx micro mock-api/tie-break.cjs`: votação de desempate
    - `npx micro mock-api/voting.cjs`: votação normal
    - `npx micro mock-api/finished.cjs`: votação encerrada
    - `npx micro mock-api/invalid-login.cjs`: o usuário está usando um token inválido ou que expirou

2. Ao mesmo tempo rode `npm run dev`

---

Documentation and discussions is in Portuguese since there are some novice developers that may help and may not know English well. In the other hand the code, comments in the code and commits will be in English.
