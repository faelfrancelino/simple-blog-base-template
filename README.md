# SimpleBlogBase

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.2.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


NOTAS

Curso Angular - Enaju
https://enaju.cnj.jus.br/ead/mod/page/view.php?id=11835

Angular sáo construidos com TypeScript
Node.js LTS sao utilizado como ambiente de execucao do JS.
Visual Studio Code

1. Criar projeto Node.js
   npm init -y
   * pré-requisito - instalar o node.

2. Instalar o Typescript no projeto criado:
   npm install --save-dev typescript @types/node ts-node
   A pasta node modules vai pro git ignore

3. Cria arquivo de configuraçao do TypeScript
   npx tsc --init 

4. Eslint
   npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin 

   * Resumo - criei projeto node e configurei nele o typescript e o eslint.
https://www.youtube.com/
Para executar e testar:

	npm run dev
	npm run build - gera os js na pasta dist
	npm run lint

Angular CLIC:\Users\136395\Documents\workspace\my-todo\.angular

Ferramenta pra criar projeto Angular com bibliotecas necessarias e compilacao padrao do TypeScript. Cria uma estrutura padrao e convencionada do projeto.

C:\Users\136395\AppData\Roaming\npm


ANGULAR

npm install -g @angular/cli
ng help
ng new my-todo
ng serve //inicia servidor de dev http://localhost:4200

npm install luxon //lib pra trabalhar com data e hora
Site com libs: https://www.npmjs.com/

Criar componente

ng generate component <nome do componente>

Limpar cache:

* Pare o terminal (pressione Ctrl + C).
* Delete a pasta .angular que está na raiz do seu projeto.

HttpClient - requisicoes API Rest
-- config: add o provide provideHttpClient() no app.config.ts
-- uso: constructor(private http:HttpClient){} -- ja pode usar o this.http

Simulador de JSON Server

npm install -D json-server
npm install uuid
npm install @types/uuid

npx json-server db.json --port 4201 //startar json server

ng generate service <nome_do_servico>

biblioteca Prime NG - implementação dos componentes visuais do Angular que o TRT3 utilizado. No curso utiliza o Angular Material.

Criação de novo projeto:

ng new simple-blog-base --css, no, none ia
ng add @angular/material

Autenticação
npm uninstall json-server

npm install json-server@0.17.4

npm install json-server-auth

npx json-server-auth db.json --port 4201



