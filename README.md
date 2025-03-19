# Monitoramento de Testes Automatizados com Playwright

Este documento explica como configurar e utilizar um sistema de monitoramento automático para testes utilizando Playwright.

### Pré-requisitos

- Node.js e Bun instalados

- Playwright instalado no projeto

- Chokidar instalado para monitoramento de arquivos

## Como rodar a aplicação

Para iniciar a aplicação, execute:

```bash
bun run start
```

## Como rodar o modo de monitoramento

Para ativar o modo de watch, que detecta alterações nos arquivos e executa os testes automaticamente, utilize o comando:

```bash
bun run watch-tests
```

## Funcionamento

O comando bun run watch-tests inicia um processo que monitora alterações nos arquivos dentro da pasta src.

Sempre que um arquivo for modificado, os testes do Playwright serão executados automaticamente.

## TODO

Caso queira rodar um teste específico, utilize:

bun run watch-tests tests/meu-teste.spec.ts

Isso executará apenas o teste informado.

## Benefícios

Automatiza a execução de testes sempre que houver mudanças no código.

Reduz erros manuais ao rodar testes.

Facilita o desenvolvimento orientado a testes (TDD).

Agora, basta iniciar o watch mode e continuar desenvolvendo normalmente!
# fazenda-web
