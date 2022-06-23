# Tic Tae Toe - Jogo da Velha

Famoso **Jogo da Velha** usando a tecnologia REACT, biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. 

Desenvolvimento feito para a matéria de Engenharia de Software do INATEL - Instituto Nacional de Telecomunicações. 


## Menu
- [Sobre](#o-jogo)
- [React](#react)
- [Instalação e Deploy](#instalação-e-deploy)
  - [Front-end](#front-end)
  - [Back-end](#back-end)
  - [IDE de desenvolvimento](#ide-de-desenvolvimento) 
- [Clonando o projeto](#clone-o-projeto-no-seu-computador)
  - [Possíveis erros](#possíveis-erros-apos-a-execução-de-npm-start)
- [Testes com Jest/DOM](#testes-com-jest-dom)
- [Desenvolvimento e Melhorias](#desenvolvimento-e-melhorias)
- [Autores](#autores)


## O Jogo:

O objetivo do jogo é fazer uma sequência de três símbolos iguais, seja em linha vertical, horizontal ou diagonal, enquanto tenta impedir que seu adversário faça o mesmo; Quando um dos participantes faz uma linha, ganha o jogo

## React

React JS é uma biblioteca JavaScript para a criação de interfaces de usuário — ou UI de código aberto. React faz com que a criação de UIs interativas seja uma tarefa fácil. Crie views simples para cada estado na sua aplicação, e o React irá atualizar e renderizar de forma eficiente apenas os componentes necessários na medida em que os dados mudam.
Por ser uma ferramenta no qual não é da grade curricular do curso de graduação e, a fim de aprender sobre outras ferrametas que, possivelmente possamos usar no mercado de trabalho.

## Instalação e Deploy

#### Front-end:

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
)](https://pt-br.reactjs.org/) 
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
)](https://developer.mozilla.org/en-US/docs/Learn/HTML) 
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
)](https://developer.mozilla.org/en-US/docs/Learn/CSS) 
[![JavaScritp](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
)](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)

#### Back-end:

[![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
)](https://nodejs.org/en/)

#### IDE de Desenvolvimento 
[![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/)

Verifique se tem instalado o NodeJS em sua máquina. Caso nao tenha instalado em sua máquina, use [esse link](https://nodejs.org/en/) para acessar o instalador e a documentação oficial do NodeJS.

Para verificar se foi instalado corretamente e o núnero da versão instalada, use:

```bash
node -v
```

### Clone o projeto no seu computador:

```bash
git clone https://github.com/ErickBGoecking/Projeto-Engenharia-de-Software-C214-L1.git
```

Com o projeto clonado em sua máquina
Instale as dependencias do projeto usando o  npm (com o projeto aberto na IDE).

```bash
npm install
```

Para fazer o Deploy do projeto, rode dentro da pasta **jogo-da-velha** do projeto:

```bash
npm start
```

Note que após a inicialização, abrirá um localhost para execução do cógido.

```bash
http://localhost:3000
```

#### Possíveis erros após a execução de **npm start**

* Mensagem **Something is already running on port 3000**:

Execute o seguinte comando para corrigir o erro e liberar a porta 3000 e assim executar o projeto. 

```bash
npx kill-port 3000
```

* Mensagem **'React' must be in scope when using JSX**: 

Execute o seguinte comando para corrigir o erro, e rode **npm start** novamente.

```bash
npm update
```

## **Testes com Jest/ DOM**
* **React testing library**: É um conjunto de utilitários que facilitam as consultas à DOM exatamente como um usuário faria, ou seja, é capaz de encontrar elementos de formulários, botões e links, entre outros. É importante se atentar que essa lib não é um test runner ou um framework, tanto que é altamente recomendável a utilização do Jest para isso. Mesmo assim, ainda há a opção de utilizá-la sem o jest. A própria documentação disponibiliza um tutorial de como isso é possível.

* **Jest**: Esse framework foi criado pelo Facebook e tem como uma de suas principais qualidades a velocidade e facilidade em execução, já que ele visa trabalhar de uma forma simples, não há necessidade de configuração na maioria dos projetos, principalmente para o React. Ainda conta com a facilidade de lidar com snapshots e para melhorar o seu desempenho, cada teste é realizado de forma isolada.
 
* **Teste Mock**
Mocks são utilizadas para simular chamadas reais, ou seja, permitem criar módulos, funções com retorno de dados que você possa controlar (normalmente, é preferível que sejam usados dados 'falsos' para testes a fim de evitar a lentidão e a inconstância) e simular uma dependência. Elas facilitam essas chamadas onde a implementação não seria viável, no caso dos testes, por exemplo.

Para executar os testes do projeto basta apenas rodar o comando:
```bash
npm run test
```

* Obs: O comando vai realizar todos os testes que contém o método "test" no diretório raiz.

## Desenvolvimento e Melhorias

Que melhorias você fez no seu código? Ex: refatorações, melhorias de performance, acessibilidade, etc

 - [x]  Criação do README.md
 - [x]  Criação do Projeto inicial
 - [X]  Desenvolvimento do Projeto
 - [X]  Realização dos Testes


## Autores

- **Alvaro Breno** - Link Github: [Alvaro Breno](https://www.github.com/AlvaroBreno)
- **Erick Braun Goecking Martins** - Link Github: [Erick Braun](https://www.github.com/ErickBGoecking)
- **Luiza Monroe** - Link Github: [Luiza Monroe](https://www.github.com/luizamonroe)

