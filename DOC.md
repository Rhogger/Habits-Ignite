<div align="center">

# Documentação de Aprendizado

</div>

<br>

Essa é documentação de todo o meu aprendizado que adquiri nesse projeto, tanto no Front quanto Back,
Mecanismos, Ferramentas, Bibliotecas, Frameworks, Linguagens, etc.

<br>

Abaixo, os tópicos da documentação:

<br>

- [Iniciar Projeto em Node](#projeto_node)
- [Sobre o Back-End da aplicação](#sobre_backend)
- [Superconjunto](#superconjunto)
  - [TypeScript](#typescript)
    - [O que é?](#typescript_sobre)
    - [Como funciona?](#typescript_como_funciona)
    - [Configuração](#typescript_config)
- [Frameworks](#frameworks)
  - [Fastify](#fastify)
    - [O que é?](#fastify_sobre)
    - [Características](#fastify_caracteristicas)
    - [Instalação](#fastify_instalacao)
  - [Vite](#vite)
    - [O que é?](#vite_sobre)
    - [Instalação](#vite_instalacao)
    - [Instalação das Dependências](#vite_instalacao_dependencia)
    - [Configuração](#vite_config)
    - [Executando o projeto](#vite_executando_projeto)
  - [React Native](#react_native)
    - [O que é?](#react_native_sobre)
    - [Características](#react_native_caracteristicas)
    - [View e Text](#react_native_view_text)
  - [Tailwind CSS](#tailwind)
    - [O que é?](#tailwind_sobre)
    - [Instalação das Dependências de Desenvolvimento](#tailwind_instalacao_dependencias_desenvolvimento)
    - [Iniciando o Tailwind](#tailwind_iniciando)
    - [Configuração](#tailwind_config)
- [Bibliotecas](#libs)
  - [React JS](#react)
    - [O que é?](#react_sobre)
    - [Características](#react_caracteristicas)
    - [Componentes (Components)](#react_componentes)
    - [Propriedades (Props)](#react_propriedades)
    - [Estado (State)](#react_estado)
- [Object-Relational Mapping (ORM)](#orm)
  - [Prisma](#prisma)
    - [O que é?](#prisma_sobre)
    - [Principais Ferramentas](#prisma_ferramentas)
    - [Instalação](#prisma_instalacao)
    - [Criando uma tabela](#prisma_criando_tabela)
    - [Executando o Prisma](#prisma_executando)
    - [Visualizar o Banco](#prisma_visualizar_banco)
- [Mecanismos](#mecanismos)
  - [Cors](#cors)
    - [O que é?](#cors_sobre)
    - [Instalação](#cors_instalacao)
    - [Configuração](#cors_config)
- [Ferramentas](#ferramentas)
  - [Expo](#expo)
    - [O que é?](#expo_sobre)
    - [Características](#expo_características)
    - [Quando utilizar?](#expo_utilizacao)
    - [Instalando o Expo CLI](#expo_cli)
    - [Instalando o Expo GO](#expo_go)
    - [Iniciando o Projeto com Expo](#expo_iniciando_projeto)
    - [Executando a aplicação](#expo_executando_aplicacao)
    - [Instalando Fontes](#expo_instalando_fontes)
    - [Problemas](#expo_problemas)

<br><hr><br>

<div align="center">

## Iniciar Projeto em Node <a name = "projeto_node"></a>

</div>

<br>

> Para iniciar o projeto em Node, é necessário ir até a pasta root do projeto e digitar o seguinte
> comando:

```
  npm init -y
```

> Esse comando irá gerar o arquivo package.json que contém algumas informações importantes sobre o
> projeto.

<br><hr><br>

<div align="center">

## Sobre o Back-End da aplicação <a name = "sobre_backend"></a>

</div>

<br>

> Nosso back-end será uma [API RESTful](https://www.hostinger.com.br/tutoriais/api-restful), ou
> seja, uma API que provê recursos, acessos à entidades, funcionalidades (criação, edição, remoção,
> etc) através de rotas HTTP. <br><br> Ele terá algumas rotas, que são recursos que o Front-End vai
> acessar dentro da aplicação.

<br><hr><br>

<div align="center">

## Superconjuntos

<br>

## TypeScript <a name = "typescript"></a>

</div>

<br>

### O que é? <a name = "typescript_sobre"></a>

> TypeScript é um superconjunto de JavaScript, ou seja, um conjunto de ferramentas e formas mais
> eficientes de escrever código JavaScript, adicionando recursos que não estão presentes de maneira
> nativa na linguagem.

<br>

### Características <a name = "typescript_caracteristicas"></a>

> A principal vantagem do TypeScript em relação ao JavaScript “tradicional” é adicionar recursos
> importantes e úteis para a construção de projetos em larga escala, como tipagem estática, forte e
> automática, orientação a objetos e a possibilidade de descobrir e corrigir erros em tempo real
> durante o desenvolvimento.

<br>

### Como funciona? <a name = "typescript_como_funciona"></a>

```ts
//Sintaxe
const varName: varType = valor
```

```ts
  const valor: number = 5;

  // Erro, a função só pode retornar um number e essa função retornaria uma String
  function soma(): number {
    return valor + '5';
  }

  // Retorna '55'
  function concat(): String {
    return valor + '5';
  }

  // Crio um tipo estático de um objeto
  type User {
    name: String,
    age: Int,
  }

  // Crio uma função colocando uma tipagem nela (User)
  function showUserName(user : User) {
    return user.name
  }

  // Crio um objeto com name e age
  const user1 = {
    name: 'Rhogger',
    age: 20,
  }

  // retorna 'Rhogger'
  showUserName(user1)

  // Crio um objeto somente com age
  const user 2 = {
    age: 25
  }

  // Erro, pois esse objeto não é identico a tipagem User
  showUserName(user2)
```

<br>

### Configurações <a name = "typescript_config"></a>

<br>

#### **Instalação como Dependência de Desenvolvimento** <a name = ""></a>

```
  npm i typescript -D
```

<br>

#### **Configuração do TypeScript no projeto** <a name = ""></a>

> Cria o arquivo **`tsconfig.json`** que é a configuração do TypeScript no projeto.

```
  npx tsc --init
```

> Dentro desse arquivo, é necessário mudar o **`target`** de **`"es2016"`** para **`"es2020"`**,
> pois o Node suporta features mais recentes do JavaScript

<br>

#### **Executando arquivo do Node com TypeScript** <a name = ""></a>

> Agora para executar algum código sem termos que fazer alguma conversão do Node para o TS, bastamos
> instalar uma outra depêndencia de desenvolvimento.

```
  npm i tsx -D
```

> Após isso, podemos configurar esse comando através do **`package.json`**, deixando mais simples a
> execução.

```json
  // package.json

  // Original
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  }

  // Modificado
  "scripts": {
    "server": "tsx watch src/server.ts"
  }

  // Onde "test" você coloca o nome que quiser;
  // O valor é:
  // 1° - Comando tsx (que executa o arquivo),
  // 2° - watch é o comando que irá fazer o console entrar em modo watch, ou seja, a cada alteração feita no código, o arquivo será executado automáticamente,
  // 3° - Caminho do arquivo (src/server.ts)
```

> Para executar agora basta digitar:

```
  npm run server
```

<br>

#### **Sair do modo Watch nos consoles** <a name = ""></a>

> Para sair do modo Watch, basta clicar **`Ctrl`** + **`C`**.

<br>

<div align="center">

### Mais sobre [TypeScript](https://www.typescriptlang.org/docs/)...

</div>

<br><hr><br>

<div align="center">

## Frameworks<a name = "frameworks"></a>

<br>

## Fastify <a name = "fastify"></a>

</div>

<br>

### O que é? <a name = "fastify_sobre"></a>

> Fastify é um framework Back-End para JavaScript e pode ser utilizado com o ecossistema NodeJS, bem
> parecido com o express e inspirado no Hapi com seu modelo de plug-ins. <br><br> Fastify realmente
> cumpre o que promete, que é a velocidade nas requisições de suas aplicações. <br><br> Isso
> acontece porque o framework possui uma arquitetura baseada em plugins. <br><br> Dessa forma, há
> menor sobrecarga, o que ajuda em muito no desenvolvimento de aplicações baseadas em
> microsserviços. <br><br> Além disso, devido a sua arquitetura, a ferramenta também garante maior
> segurança e performance, constituindo-se em uma boa experiência para a pessoa desenvolvedora.
> <br><br> O encapsulamento permite que cada plug-in use suas próprias dependências e hooks se
> houver necessidade, e esse comportamento possibilita maior reusabilidade de software. Além disso,
> o completo encapsulamento para os plug-ins fornece um roteamento mais rápido devido a renderização
> mais veloz do JSON.

<br>

### Características <a name = "fastify_caracteristicas"></a>

> - Alto desempenho: até onde sabemos, Fastify é um dos mais rápidos web frameworks 'na área',
>   dependendo da complexidade do código, com o Fastify, você pode servir mais de 76 mil requisições
>   por segundo. <br><br>
> - Extensível: Fastify é completamente extensível via hooks, plugins e decorators. <br><br>
> - Baseado em Schema: mesmo não sendo obrigatório, recomendamos o uso de JSON Schema para validar
>   suas rotas e serializar seus retornos, internamente o Fastify compila o schema em funções de
>   alto desempenho. <br><br>
> - Logging: logs são extremamente importantes mas são dispendiosos; escolhemos o melhor logger para
>   quase remover esse 'custo'! <br><br>
> - Amigável ao Desenvolvedor: o framework foi construido para ser significante ao mesmo tempo que
>   realmente ajuda o desenvolvedor no uso dia após dia, sem sacrificar desempenho ou segurança.

<br>

### Instalação <a name = "fastify_instalacao"></a>

> Para instalar o **`Fastify`**, basta realizar o seguinte comando:

```
  npm i fastify
```

<div align="center">

### Mais sobre [Fastify](https://github.com/fastify/docs-portuguese)...

</div>

<br><hr><br>

<div align="center">

## Vite JS <a name = "vite"></a>

</div>

<br>

### O que é? <a name = "vite_sobre"></a>

<br>

> É uma ferramenta para o frontend JavaScript com a qual você pode gerar estrutura de código de
> vários frameworks como React, Vanilla, Vue, Svelte e outros. Além de ser um gerador muito rápido,
> o Vite.js nos poupa muito tempo configurando outras bibliotecas.

<br>

### Instalação <a name = "vite_instalacao"></a>

> Vamos instalar o vite fora da pasta server, pois ele fará parte é do nosso Front-End:

```
  npm create vite@latest
```

> Selecionamos em seguinte, o **`nome do projeto`** (pasta), coloquei como "**`web`**", selecionamos
> também o **`framework`**, que nesse caso é o **`React`** e por último a **`variante`** que é o
> **`TypeScript`**, pois estamos fazendo nosso projeto em TS.

<br>

### Instalação das Dependências: <a name = "vite_instalacao_dependencia"></a>

> Já na pasta **`web`**:

```
  npm install
```

> Após isso, será criado todos os arquivos necessários para prosseguirmos o desenvolvimento.

<br>

### Configuração <a name = "vite_config"></a>

> Em seguida, podemos configurar o comando de execução do Projeto através do **`package.json`**,
> novamente:

```json
  // package.json

  // Original
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  }

  // Modificado
  "scripts": {
    "web": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  }
```

<br>

### Executando o projeto <a name = "vite_executando_projeto"></a>

> Execute o comando a baixo:

```
  npm run web
```

> O console irá te entregar um link local para acessar, basta segurar Ctrl e clicar no link.

<br>

<div align="center">

### Mais sobre [Vite](https://vitejs.dev)...

</div>

<br><hr><br>

<div align="center">

## React Native <a name = "react_native"></a>

</div>

<br>

### O que é? <a name = "react_native_sobre"></a>

> Baseado no React, o React Native possibilita a criação de aplicações móvel multiplataforma
> (Android e iOS) utilizando apenas Javascript. Porém, diferente de outros frameworks com esta mesma
> finalidade, todo o código desenvolvido com o React Native é convertido para linguagem nativa do
> sistema operacional, o que torna o app muito mais fluido.

<br>

### Características <a name = "react_native_caracteristicas"></a>

> - Acessar a interface e os recursos nativos do Android e iOS utilizando JavaScript; <br>
> - O código produzido é semelhante ao React para Web; <br>
> - Possui a base de conhecimento compartilhada entre o desenvolvimento mobile e front-end; <br>
> - Todo código desenvolvido é convertido para a linguagem nativa do sistema operacional; <br>
> - Com o React Native conseguimos desenvolver aplicações para Android e iOS utilizando um código
>   único; <br>
> - Por ser multiplataforma, podemos desenvolver aplicações com React Native utilizando qualquer
>   sistema operacional (Windows, macOS ou Linux).

<br>

### View e Text <a name = "react_native_view_text"></a>

> A View funciona como se fosse uma **`div`** do HTML e o Text a tag **`p`**. <br><br> A tag nativa
> do Android é a ViewGroup e a TextView, já no IOS são as UIView e UITextView.

<div align="center">

### Mais sobre [React Native](https://reactnative.dev/docs/getting-started)...

</div>

<br><hr><br>

## Tailwind CSS <a name = "tailwind"></a>

<br>

### O que é? <a name = "tailwind_sobre"></a>

> Tailwind CSS é um framework CSS com classes predefinidas que você pode usar para construir e
> projetar páginas web diretamente na sua marcação. Ele permite que você escreva CSS em seu HTML na
> forma de classes pré-definidas.

<br>

### Instalando a Dependência de Desenvolvimento: <a name = "tailwind_instalacao_dependencias_desenvolvimento"></a>

> Na pasta do Front-End, digite no terminal para instalar as Dependências:

```
npm i -D taildwindcss postcss autoprefixer
```

> O **`taildwindcss`** é a propria Dependência para utilizarmos o Taildwind CSS, **`postcss`** é uma
> ferramenta para automatizar tarefas no CSS e o **`autoprefixer`** é uma ferramenta que vai
> adicionar os prefixos de browser (motor de renderização) às classes.

<br>

### Iniciando o Tailwind <a name = "tailwind_iniciando"></a>

> Digite o comando:

```
  npx taildwindcss init -p
```

> Com isso, criará o arquivo **`tailwindcss.config.cjs`** e o parâmetro **`-p`** é para criar o
> arquivo **`postcss.config.cjs`** senão o vite não consegue rodar o Tailwind CSS.

<br>

### Configuração <a name = "tailwind_config"></a>

> Para o **`Tailwind CSS`** e o **`postcss`** funcionar corretamente, utilizamos as extensões:
> <br><br> Name: Tailwind CSS IntelliSense <br> Id: bradlc.vscode-tailwindcss <br> VS Marketplace
> Link: https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss > <br><br>
> Name: PostCSS Language Support <br> Id: csstools.postcss <br> VS Marketplace Link:
> https://marketplace.visualstudio.com/items?itemName=csstools.postcss

<br>

> Após isso, crie uma pasta **`style`** dentro de **`src`** e depois o arquivo **`global.css`** e
> dentro dele você vai importar algumas configurações do Tailwind:

```css
@tailwind base;
@tailwind utilities;
@tailwind components;
```

<div align="center">

### Mais sobre [Tailwind CSS](https://v2.tailwindcss.com/docs)...

<br><hr><br>

## Bibliotecas <a name = "libs"></a>

<br>

## React JS <a name = "react"></a>

</div>

<br>

### O que é? <a name = "react_sobre"></a>

> O React é a biblioteca mais popular do JavaScript e é usada para construir uma interface de
> usuário (IU). Ela oferece uma resposta excelente para o usuário adicionar comandos usando um novo
> método de renderizar sites.

<br>

### Características? <a name = "react_caracteristicas"></a>

<div align="center">

#### **Fácil de Usar**

</div>

> O React é uma biblioteca de código aberto para interfaces gráficas (GUI) que tem como foco uma só
> coisa: tornar a experiência do usuário com a interface mais eficiente. Ela pode ser categorizada
> como o “V” no padrão MVC (Model-View-Controller).

<br>

<div align="center">

#### **Suporte a Componente Reusável em Java**

</div>

> O React permite que você reuse componentes que tenham sido desenvolvido em outras aplicações e que
> usem a mesma função. A função de reusabilidade é uma vantagem importante para desenvolvedores em
> geral.

<br>

<div align="center">

#### **Componente Fácil de Escrever**

</div>

> Também conhecido como React JS, o componente do React é fácil de escrever porque ele usa JSX, uma
> extensão de sintaxe opcional para JavaScript. Ela permite que você combine HTML com JavaScript.  
> <br> O JSX é uma excelente combinação de JavaScript e HTML. Ela simplesmente simplifica toda a
> estrutura de codificação escrita de um site. Além disso, a extensão também faz com que a
> renderização de múltiplas funções seja mais fácil. <br><br> Ainda que o JSX não seja a extensão de
> sintaxe mais popular, ela tem provado ser bastante eficiente. Especialmente quando falamos em
> desenvolver componentes especiais ou aplicações de alto rendimento.

<br>

<div align="center">

#### **Melhor Desempenho com Virtual DOM**

</div>

> O React melhora, de maneira eficiente, o processo de atualização do DOM (Document Object Model).
> Como você deve saber, esse processo pode causar muita frustração em projetos baseados em
> aplicações-web. Por sorte, o React usa Virtual DOMs, então você consegue driblar esses problemas.
> <br><br> A ferramenta permite que você construa um Virtual DOM e o hospede na memória. Como
> resultado, toda vez que acontece uma mudança no DOM real, o virtual se modifica imediatamente.  
> <br> O sistema vai impedir que o DOM real faça atualizações constantemente. Por conta disso, a
> velocidade da sua aplicação não vai ser interrompida.

<br>

<div align="center">
  
#### **Amigável a SEO**
  
</div>

<br>

> O React permite que você crie uma interface de usuário que pode ser encontrada e acessa em
> diversos motores de busca. Esse recurso é uma vantagem sensacional porque nem todos os frameworks
> de JavaScript são amigáveis a SEO. <br><br> Junto a isso, como o React melhora o processamento da
> sua aplicação, ele também pode melhorar os resultados do seu SEO. Afinal, o tempo de carregamento
> de um site é um fator crucial na otimização de SEO.  
> <br> Porém, você deve se atentar ao fato de que o React é apenas uma biblioteca JavaScript. Isso
> significa que você não pode fazer tudo com ele. O uso de bibliotecas adicionais podem ser
> necessárias para propósitos de gerenciamento, apontamento ou interações complexas.

<br>

### Componentes (Components) <a name = "react_componentes"></a>

> Geralmente, componentes React são como funções JavaScript. Eles aceitam entradas como propriedades
> (chamadas “props”) e retornam novos elementos React, os chamados JSX. <br><br> Os componentes
> permitem que a UI seja dividida em partes independentes e reutilizáveis, ou seja, trata cada parte
> da aplicação como um bloco isolado, livre de outras dependências externas.

```jsx
import React from 'react'
import ReactDOM from 'react-dom'

const Index = () => {
	return <div>Hello React!</div>
}

ReactDOM.render(<Index />, document.getElementById('index'))
```

<br>

### Propriedades (Props) <a name = "react_propriedades"></a>

> Props, que é uma abreviação de properties, ou propriedades, são informações que podem ser passadas
> para um componente. Pode ser uma string, um número, até mesmo uma função. Este valor pode então
> ser utilizado pelo componente que a recebe. Primeiro, passamos o dado que desejamos passar ao
> componente definindo-o como um atributo, onde o componente é utilizado. Vamos passar a prop
> currentCount para o componente CountDisplay, que está sendo chamado no arquivo App.js. Para o
> valor numérico, passamos o mesmo dentro de chaves. Vejamos:

```tsx
import React from 'react'
import ReactDOM from 'react-dom'

import CountDisplay from './CountDisplay'

const App = (props) => {
	return <CountDisplay currentCount={3} />
}

export default App
```

<br>

### Estado (State) <a name = "react_estado"></a>

> State, assim como as props, são dados utilizados pelo componente. Novamente, pode ser uma string,
> um objeto, um array, um número. A diferença, no caso do state, é que ao invés de receber a
> informação e somente utilizá-la, o state é privado e completamente controlado pelo componente.

<br>

<div align="center">

### Mais sobre [Componentes, Props e State](https://felipegalvao.com.br/pt/blog/learn-react-components-state-and-props/)...

<br>

### Mais sobre [React](https://reactjs.org)...

<br><hr><br>

## Object-Relational Mapping (ORM) <a name = "orm"></a>

<br>

## ORM: Prisma <a name = "prisma"></a>

</div>

<br>

### O que é? <a name = "prisma_sobre"></a>

> Ele é um ORM para Node e TypeScript (Object-Relational Mapping), em português, mapeamento
> objeto-relacional , é uma técnica para aproximar o paradigma de desenvolvimento de aplicações
> orientadas a objetos ao paradigma do banco de dados relacional. O uso da técnica de mapeamento
> objeto-relacional é realizado através de um mapeador objeto-relacional que geralmente é a
> biblioteca ou framework que ajuda no mapeamento e uso do banco de dados.

> O Prisma tem muitas funcionalidades legais, como uma integração com Typescript automática, geração
> de migrations automática, um SGBD próprio, etc.

<br>

### Principais Ferramentas <a name = "prisma_ferramentas"></a>

> O Prisma consiste em três ferramentas principais:
>
> - Prisma Client: um construtor de consultas gerado automaticamente e fortemente tipado para o
>   Node.js e o TypeScript.
> - Prisma Migrate: um sistema declarativo de modelagem e migração de dados.
> - Prisma Studio: uma GUI para visualizar e editar dados em seu banco de dados.

<br>

### Instalação<a name = "prisma_instalacao"></a>

> Instalar a extensão no VSCode do Prisma: <br><br> Nome: Prisma <br> Id: Prisma.prisma <br> VS
> Marketplace Link: https://marketplace.visualstudio.com/items?itemName=Prisma.prisma

<br>

> Instalar a Dependência de Desenvolvimento:

```
npm i -D prisma
```

<br>

> Instalar client do Prisma, a Dependência que iremos utilizar para acessar o banco de dados na
> aplicação:

```
npm i @prisma/client
```

<br>

> Instalar o Provider SQLite, ou seja, a nossa aplicação usará SOMENTE o banco SQLite, pois ele cria
> o banco local, não sendo necessário nenhum outro intermédio para subir esse banco local. Esse
> comando também gera um arquivo **`schema.prisma`**, que é onde vamos criar as tabelas, relações,
> variáveis, etc, é o intermédio entre a aplicação e o banco:

```
npx prisma init --datasource-provider SQLite
```

<br>

### Criando uma tabela <a name = "prisma_criando_tabela"></a>

> Para criar uma tabela no Prisma, basta ir no **`schema.prisma`** e adicionar os seguintes
> comandos:

```prisma
model Habit {
  id         String   @id @default(uuid())
  title      String
  created_at DateTime

  @@map("habits")
}
```

> O que cada comando faz: <br><br> 1° linha - Criando a tabela com nome "Habit". <br> 2° linha -
> Criando uma coluna da tabela com nome "id", definindo tipo String, estabelecendo ela como chave
> primária, estabelecendo um UUID (Identificador Único Universal) para essa chave. <br> 3° linha -
> Criando uma coluna da tabela com nome "title", definindo tipo String <br> 4° linha - Criando uma
> coluna da tabela com nome "created_at", definindo tipo DateTime <br> 6° linha - Renomeando a
> tabela para "habits"

<br>

### Executando o Prisma <a name = "prisma_executando"></a>

> Para executar o **`schema.prisma`**, ou seja, fazer a portabilidade do código feito em prisma para
> SQLite. Esse comando faz com que crie o banco se não houver um **`dev.db`** e a pasta
> **`migrations`**. Então basta executar o seguinte comando no terminal:

```
npx prisma migrate dev
```

<br>

> Vai pedir para definir um nome para a migração, nesse campo você pode dizer o que fez no Prisma.
> Após isso, é criado a pasta **`migrations`** com subpastas nomeada com o ano+mes+dia... e dentro
> está o arquivo **`migration.sql`**, que é responsável pela atualização do banco. A cada vez que
> você executar esse comando, ele atualiza o banco e cria outra migration.

<br>

> Aqui está um exemplo da migration.sql, esse arquivo executa exatamente o que solicitamos no
> **`schema.prisma`** antes da migração.

```sql
CREATE TABLE "habits" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL
);
```

<br>

### Visualizar o Banco <a name = "prisma_visualizar_banco"></a>

> Para visualizar o banco, basta executar o seguinte código no terminal:

```
  npx prisma studio
```

> Ele irá abrir uma página no navegador mostrando o banco, suas tabelas, colunas.

<br>

<div align="center">

### Mais sobre [Prisma](https://www.prisma.io/docs)...

<br><hr><br>

## Mecanismos <a name = "mecanismos"></a>

<br>

## Cors <a name = "cors"></a>

</div>

<br>

### O que é? <a name = "cors_sobre"></a>

> O Cors, Cross-Origin Resource Sharing (Compartilhamento de recursos com origens diferentes), é um
> mecanismo que usa cabeçalhos adicionais HTTP para informar a um navegador que permita que um
> aplicativo Web seja executado em uma origem (domínio) com permissão para acessar recursos
> selecionados de um servidor em uma origem distinta. Um aplicativo Web executa uma requisição
> cross-origin HTTP ao solicitar um recurso que tenha uma origem diferente (domínio, protocolo e
> porta) da sua própria origem. <br><br> OBS: Se eu não configurar o cors, nenhuma aplicação
> Front-End conseguirá buscar os dados no Back-End

<br>

### Instalação <a name = "cors_instalacao"></a>

> Vamos instalar o cors que está integrado ao Fastify:

```
  npm i @fastify/cors
```

<br>

### Configuração <a name = "cors_config"></a>

> Primeiramente importamos o cors para o **`server.ts`**:

```ts
import cors from '@fastify/cors'
```

<br>

> Após isso, ainda no **`server.ts`**, crie a integração com o Front apenas com os comandos:

```ts
app.register(cors)
```

<br>

<div align="center">

### Mais sobre [Cors](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS)...

<br><hr><br>

## Ferramentas <a name = "ferramentas"></a>

<br>

## Expo <a name = "expo"></a>

</div>

<br>

### O que é? <a name = "expo_sobre"></a>

> O Expo é uma ferramenta utilizada no desenvolvimento mobile com React Native que permite o fácil
> acesso às API’s nativas do dispositivo sem precisar instalar qualquer dependência ou alterar
> código nativo.

<br>

### Características <a name = "expo_características"></a>

> Quando iniciamos no desenvolvimento mobile percebemos que o número de API’s e recursos nativos que
> podemos controlar através da nossa aplicação é gigante, e muitas vezes não nos recordamos de todas
> opções que temos disponíveis. <br><br> O Expo, por sua vez, oferece grande parte desses recursos
> de forma nativa e integrada e, por exemplo, você tem acesso à recursos como câmera, microfone,
> player de música, entre outros, de forma muito simples utilizando essa ferramenta. <br><br> Apesar
> de todos esses benefícios, o grande ponto do Expo para quem está iniciando é que para começar a
> desenvolver suas aplicações mobile com React Native você não precisará instalar a SDK do Android
> ou o XCode para Mac, isso porque o Expo possui um aplicativo móvel instalável pelas lojas do
> Android/iOS que contém todo código nativo necessário pelo React Native para iniciar sua aplicação
> e, dessa forma, a única alteração em código que você faz é em Javascript. <br><br> O ponto
> destacado acima, tem dois lados. A vantagem é que nesse formato o desenvolvedor inicia muito
> rápido e em poucos minutos está criando sua aplicação, toda parte complicada foi abstraída. A
> desvantagem está em exatamente pular essas etapas pois desconhecendo todo processo de instalação
> da SDK do Android ou XCode para iOS vai te limitar MUITO futuramente para lidar com processos de
> atualização e build das aplicações.

<br>

### Quando utilizar? <a name = "expo_utilizacao"></a>

> Recomendado é que utilize o Expo apenas em duas situações: <br>
>
> - Você está testando o React Native e quer entender como ele funciona;
> - Você não tem interesse em publicar e manter aplicações mobile complexas (apenas criar apps
>   simples).

<br>

### Instalando o Expo CLI <a name = "expo_cli"></a>

> Para instalar o Expo CLI, execute o código:

```
npm i -g expo-cli
```

> OBS: Isso com o Node entre as versões 13 e 16.

<br>

### Instalando o Expo GO <a name = "expo_go"></a>

> Com a CLI instalada no seu computador, você consegue criar projetos Expo e executar o metro
> bundler para servir o seu código, mas para executar o app no seu celular (ou emulador) você
> precisa instalar o aplicativo Expo GO. Ele é o responsável por pegar o código que o metro bundler
> envia e exibir em tela o seu app React Native. <br><br> Para instalá-lo no seu dispositivo físico,
> basta buscar nas lojas o aplicativo Expo Go: <br>
>
> - Play Store
> - Apple Store

> Para instalá-lo no seu emulador, basta executar o comando expo start e escolher qual emulador você
> deseja executar. Caso o Expo GO não esteja instalado, ele irá solicitar a sua autourização para
> instalar a versão necessária.

<br>

### Iniciando o Projeto com Expo <a name = "expo_iniciando_projeto"></a>

> Para iniciar o nosso projeto com o Expo, digite o comando no console:

```
  npx create-expo-app mobile --template
```

> Esse comando cria a pasta **`mobile`**, instala todas as dependências necessárias, as pastas e
> configurações Node e JavaScript e o parâmetro **`--template`** ele te dá a liberdade de escolher o
> template do projeto que você quer e iremos escolher a **`Blank (TypeScript)`** que já deixa o
> projeto em branco e pronto para usar o TypeScript. <br><br> Nisso, é criado os **`assets`** do
> projeto, como **`favicon`**, **`splash`**, **`icon`**, etc, as dependências na pasta
> **`node-modules`**, o **`.gitignore`** que são arquivos que o git deve ignorar durante o
> versionamento, o **`app.json`** que é informações e configurações da aplicação, o **`App.tsx`**
> que é a própria aplicação, o **`babel.config.js`** que é mais configurações da aplicação, o
> **`package-lock.json`** que tem o controle e versionamento das bibliotecas dentro do
> **`node_modules`**, o **`package.json`** que possui informações e configurações do projeto e
> também dependências do projeto e de desenvolvimento e por último o **`tsconfig.json`** que é onde
> fica a configuração do TypeScript.

<br>

### Executando a aplicação <a name = "expo_executando_aplicacao"></a>

> Para executar, digite o comando:

```
  npx expo start
```

> Ele vai executar o comando e gerar um QR Code, que é aí onde o App Expo Go entra, você vai entrar
> nele e clicar em **`"Scan QR Code"`** e só apontar a câmera da tela e pronto, nossa aplicação já
> está rodando no Expo Go. <br><br> O Expo CLI tem alguns comandos que gerou abaixo do QR Code, no
> caso para fazer o Reload da aplicação, basta clicar a tecla **`R`** do teclado.

<br>

### Instalando Fontes <a name = "expo_instalando_fontes"></a>

> Para instalar fontes é bem simples, primeiro pare a execução da aplicação e abra o terminal e
> execute o comando de instalação da API do Google Fonts:

```
  npx expo install expo-font @expo-google-fonts/inter
```

> Onde **`expo-font`** é para lidar com o carregamento das fontes e **`@expo-google-fonts/inter`** é
> a própria fonte.

<br>

### Problemas <a name = "expo_problemas"></a>

<br>

<div align="center">

#### **Mal Carregamento**

</div>

<br>

> As vezes o Expo não vai carregar 100% o projeto, como novas imagens, ícones ou até atualizações de
> códigos. Quando isso ocorrer, basta vc fechar o Expo Go no seu Smartphone, parar a execução no
> Expo CLI no Terminal, abrir novamente o Expo Go e executar novamente o projeto no Expo CLI.
> <br><br> Se mesmo assim não resolver, execute esse comando que o Bundle será recarregado
> novamente, "limpando em memória":

```
  npx expo start --clear
```

<br>

<div align="center">

#### **Imagem de Splash não mantém proporção da tela**

</div>

<br>

> Quando a imagem de Splash aparecer, mas não mantém as proporções da tela do dispositivo, assim
> deixando outro background abaixo da splash. Para isso, acesse o **`app.json`** na seção do
> **`expo`**, procure por **`"splash"`** e em **`"backgroundColor":`** você coloca o background da
> splash.

```json
  "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#09090A"
    },
```

<br>

<div align="center">

### Mais sobre [Expo](https://docs.expo.dev)...

</div>

<br><hr><br>

<!-- # Aula 1 Finalizada com 975 linhas de DOC -->

# Aula 2 Pausada em 54:20

<!-- Links úteis:
- Async / await : https://www.alura.com.br/artigos/async-await-no-javascript-o-que-e-e-quando-usar?gclid=Cj0KCQiAw8OeBhCeARIsAGxWtUzlETfyVC2fz0onBK8HzW8ePrntJtBgFy6BmUdbbkoftP-BWmjjC1kaAvG7EALw_wcB -->
