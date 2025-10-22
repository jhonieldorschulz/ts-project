
# ts-project

Projetos com exemplos em **TypeScript** para aulas de Arquitetura de Software / P.O.O. / TDD.

> Material didático: código simples, testes e exemplos para demonstrar conceitos de design, orientação a objetos e testes automatizados.

---

## Sumário

* Sobre
* Pré-requisitos
* Instalação rápida
* Scripts comuns
* Estrutura do repositório
* Como executar exemplos
* Testes e cobertura
* Boas práticas e estilo
* Contribuição
* Licença

---

## Sobre

Este repositório reúne pequenos projetos/exemplos em **TypeScript** usados nas aulas do curso. Cada pasta contém um exemplo com código-fonte (`src/`), código transpilado/empacotado (`dist/`) e testes (`tests/`). Ideal para estudar TDD, padrões de projeto e conceitos de arquitetura.

---

## Pré-requisitos

* Node.js (LTS recomendado — 16+ ou 18+)
* npm (ou yarn/pnpm — as instruções abaixo usam npm)
* (Opcional) VSCode para depuração e edição

---

## Instalação rápida

1. Clone o repositório:

```bash
git clone https://github.com/jhonieldorschulz/ts-project.git
cd ts-project
```

2. Instale dependências:

```bash
npm install
```

> Observação: se usar `yarn` ou `pnpm`, substitua `npm install` por `yarn` / `pnpm install`.

---

## Scripts (exemplos)

> Nota: os nomes abaixo são *os mais comuns* em projetos TypeScript. Substitua pelos scripts reais do `package.json` se forem diferentes.

* `npm run build` — transpila TypeScript para JavaScript (gera `dist/`).
* `npm run dev` — watch mode / desenvolvimento (recompila automaticamente).
* `npm test` — roda a suíte de testes (Jest / vitest / mocha, dependendo do projeto).
* `npm run lint` — verifica estilo com ESLint.
* `npm run format` — formata código com Prettier.
* `npm run clean` — limpa `dist/` e artefatos.

Se os scripts no `package.json` do repositório tiverem nomes diferentes, substitua ao colar no README.

---

## Estrutura do repositório (explicada)

```
.
├─ .vscode/          # configurações opcionais do editor
├─ dist/             # código transpilado (gerado)
├─ src/              # código-fonte TypeScript
│   └─ index.ts      # ponto de entrada / exemplos
├─ tests/            # testes automatizados
├─ package.json
├─ tsconfig.json
└─ README.md
```

**O que buscar em cada pasta**

* `src/`: aqui ficam os exemplos que demonstram conceitos (classes, interfaces, módulos, etc).
* `tests/`: exemplos de testes (TDD). Leia os testes — eles explicam a intenção do código.
* `dist/`: artefatos compilados, normalmente não versionar se gerado.

---

## Como executar (passo a passo)

1. Instalar dependências (já mostrado acima).
2. Rodar build (opcional, se quiser ver o JS gerado):

```bash
npm run build
# saída: dist/
```

3. Rodar testes:

```bash
npm test
```

Se houver modo watch para testes:

```bash
npm run test:watch
```

4. No desenvolvimento:

```bash
npm run dev
```

---

## Testes e TDD

* Os exemplos vêm com testes (Jest / vitest ou semelhante).
* Testes servem como documentação executável: leia os casos de teste para entender requisitos e contratos.
* Sugestões pedagógicas:

  * Primeiro leia um teste que falha.
  * Implemente o mínimo no `src/` para que o teste passe.
  * Refatore mantendo os testes verdes.

---

## Boas práticas e convenções sugeridas

* Tipagem forte: prefira `interface`/`type` quando fizer sentido.
* Evitar `any` salvo justificativa didática.
* Arquivos pequenos, uma responsabilidade por módulo.
* Padronizar lint/format (ESLint + Prettier).
* Documentar com comentários curtos e testes claros.

---

## Exemplos de comandos úteis (resumido)

```bash
# instalar dependências
npm install

# rodar testes
npm test

# build
npm run build

# desenvolvimento com watch
npm run dev

# lint
npm run lint

# format
npm run format
```

---

## Como contribuir

1. Fork this repo;
2. Crie uma branch: `git checkout -b feat/minha-aula`;
3. Faça commits pequenos e claros;
4. Abra um Pull Request descrevendo:

   * objetivo da modificação;
   * o que foi testado;
   * qualquer dependência nova.
5. Para correções rápidas (typo, README), abra PR com `fix/readme`.

---

## Observações sobre este README

* Eu gerei este README com base na estrutura do repo (pastas `src`, `tests`, `dist`, `package.json`, `tsconfig.json`) que foi listada, mas não consegui ler o conteúdo dos arquivos (`package.json`, `tsconfig.json`, etc`) por um erro ao abrir os arquivos no GitHub.
* Se você quiser, eu adapto este README para incluir **os scripts exatos** e as **dependências listadas** no `package.json` (ex.: comandos reais em `scripts`, versões, devDependencies como jest/ts-jest/ts-node/eslint). Cole aqui o conteúdo do `package.json` ou me autorize a tentar carregar os arquivos novamente — eu ajusto sem cerimônia.

---


