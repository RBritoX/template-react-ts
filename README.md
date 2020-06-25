<h1 align="center">
  Template with React and TypeScript
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/rbritox/template-react-ts?color=yellow">

  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/rbritox/template-react-ts?color=yellow">

  <img alt="GitHub repo size in bytes" src="https://img.shields.io/github/repo-size/rbritox/template-react-ts?color=yellow">

  <img alt="Code quality" src="https://api.codacy.com/project/badge/Grade/76f70dac6eb8494aa3f9b3cc6e6102dc">

  <img alt="Made by Rocketseat" src="https://img.shields.io/github/license/rbritox/template-react-ts">

  <br>

  <img alt="React.js version" src="https://img.shields.io/badge/React.js-v16.13.1-60dafb?style=flat&logoColor=60dafb&logo=react">

  <img alt="TypeScript version" src="https://img.shields.io/badge/TypeScript-v3.8.3-007acc?style=flat&logoColor=007acc&logo=typescript">
</p>

<h3 align="center">
  Index
</h3>

<p align="center">
  📝 <a href="#-about-the-project">The Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  🛠 <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  🏁 <a href="#-starting-the-project">Starting</a>
</p>

<br>

<h3 align="center">
  🚧 In Construction 🚧
</h3>

<br>

## 📝 About the project
This is a React.js template with TypeScript which I decided to leave in a repository to save time. So I don't need to install and configure some libraries, whenever I have to create a new project.

## 🛠 Technologies
- ⚛️ **[React.js](https://reactjs.org/)**
- 🟪 **[TypeScript](https://www.typescriptlang.org/)**
- 💅 *[Styled-Components](https://styled-components.com/)*
- 😁 *[Styled-Icons](https://styled-icons.js.org/)*
- 🎨 *[Polished](https://polished.js.org/)*
- 🗺 *[React Router DOM](https://reacttraining.com/react-router/web/guides/quick-start)*
- 🔌 *[Axios](https://nodemon.io/)*
- 🃏 *[Jest](https://jestjs.io/)*
- 🐺 *[Scaffdog](https://github.com/cats-oss/scaffdog#scaffdog-generate)*
- 📏 *[ESLint](https://eslint.org/)*
- ✨ *[Prettier](https://prettier.io/)*
- 🐭 *[EditorConfig](https://editorconfig.org/)*
- 🐶 *[Husky](https://github.com/typicode/husky)*
- 🚨 *[Commitlint](https://github.com/conventional-changelog/commitlint)*
- 🚦 *[cz-cli](https://github.com/commitizen/cz-cli)*
- 🚥 *[Lint-staged](https://github.com/okonet/lint-staged)*
- 🗂 *[Root-import](https://www.npmjs.com/package/babel-plugin-root-import)*

## ⚙️ How to use

### 🗄 Criar componente:
Para criar um componente, basta rodar `yarn creating` e selecionar/responder as perguntas que irão aparecer no terminal para o 🐺 **Scaffdog** fazer o trabalho de forma automática. Ele irá criar uma pasta dentro de `src/components` com um arquivo para o index e outro para os estilos.

### 🗃 Componentes:
Deixei alguns componentes prontos para serem usados: **Header**, **Button** e **Input**. Todos são totalmente customizados como exemplificado no arquivo principal.

### 🎨 Colors:
As cores são definidas a partir do tema (light/dark) que estão na pasta `src/styles/theme`. Ambos também são totalmente customizados, podendo acrescentar ou remover qualquer cor, seguindo o padrão que já foi configurado, sendo necessário inserir o campo string no arquivo `src/styles/styled.d.ts`. Para usar essas cores em uma página ou componente, basta seguir o exemplo do arquivo global de estilos, exp.: `color: ${(props) => props.theme.colors.text};` e não precisa importar nada.

### 💾 Commitar o código:
Para commitar o código, existem algumas regras que garantem a padronização do commit. Dessa forma, pode rodar normalmente `git add .`, depois `git commit` (sem o `-m ""` mesmo). O 🐶 **Husky** foi configurado, junto com 🚨 **Commitlint**, 🚦**cz-cli** e 🚥 **Lint-staged**, dessa forma será feita algumas perguntas no terminal e na sequencia vão verificar algumas regras no código, por fim, pode rodar `git push -u origin master` normalmente.

## 🏁 Starting the project
Clone the project: `git clone https://github.com/RBritoX/template-react-ts`

🖥 To run the **Front-End**, open terminal and execute the following commands:

````zsh
# to download the dependencies
$ yarn

# to start the application on port 3000
$ yarn start
````

🧪 To run the **Tests**, execute the following commands:

````zsh
# to start tests with Jest
$ yarn test
````

<br>

---

<h3 align="center">
  Made by Raphael Brito (RBritoX)
</h3>

<p align="center">
  <a href="https://www.linkedin.com/in/raphaellbrito/">
    <img alt="React.js version" src="https://img.shields.io/badge/LinkedIn-/in/raphaellbrito-0e76a8?style=flat&logoColor=white&logo=linkedin">
  </a>
  <a href="https://www.facebook.com/RaphaBrito">
    <img alt="React.js version" src="https://img.shields.io/badge/Facebook-/RaphaBrito-1778F2?style=flat&logoColor=white&logo=facebook">
  </a>
  <a href="https://www.instagram.com/raphaellbrito/">
    <img alt="React.js version" src="https://img.shields.io/badge/Instagram-@raphaellbrito-833AB4?style=flat&logoColor=white&logo=instagram">
  </a>
</p>
