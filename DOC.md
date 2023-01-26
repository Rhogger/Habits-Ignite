# Documentação Server
<br>

<div align="center">

## Iniciar projeto em node

</div>

> Para iniciar o projeto em Node, é necessário ir até a pasta root do projeto e digitar o seguinte comando: 
```
  npm init -y
```
> Esse comando irá gerar o arquivo package.json que contém algumas informações importantes sobre o projeto.

<br><hr><br>

<div align="center">

## Framework: Fastify

</div>

<br>

### O que é o Fastify?

> Fastify é um framework Back-End para JavaScript e pode ser utilizado com o ecossistema NodeJS, bem parecido com o express e inspirado no Hapi com seu modelo de plug-ins. 
<br><br>
> Fastify realmente cumpre o que promete, que é a velocidade nas requisições de suas aplicações. 
<br><br>
> Isso acontece porque o framework possui uma arquitetura baseada em plugins.
<br><br>
> Dessa forma, há menor sobrecarga, o que ajuda em muito no desenvolvimento de aplicações baseadas em microsserviços.
<br><br>
> Além disso, devido a sua arquitetura, a ferramenta também garante maior segurança e performance, constituindo-se em uma boa experiência para a pessoa desenvolvedora.
<br><br>
> O encapsulamento permite que cada plug-in use suas próprias dependências e hooks se houver necessidade, e esse comportamento possibilita maior reusabilidade de software. Além disso, o completo encapsulamento para os plug-ins fornece um roteamento mais rápido devido a renderização mais veloz do JSON.

<br><br>

### Principais recursos

> - Alto desempenho: até onde sabemos, Fastify é um dos mais rápidos web frameworks 'na área', dependendo da complexidade do código, com o Fastify, você pode servir mais de 76 mil requisições por segundo.
<br><br>
> - Extensível: Fastify é completamente extensível via hooks, plugins e decorators.
<br><br>
> - Baseado em Schema: mesmo não sendo obrigatório, recomendamos o uso de JSON Schema para validar suas rotas e serializar seus retornos, internamente o Fastify compila o schema em funções de alto desempenho.
<br><br>
> - Logging: logs são extremamente importantes mas são dispendiosos; escolhemos o melhor logger para quase remover esse 'custo'!
<br><br>
> - Amigável ao Desenvolvedor: o framework foi construido para ser significante ao mesmo tempo que realmente ajuda o desenvolvedor no uso dia após dia, sem sacrificar desempenho ou segurança.

<br>

<div align="center">

### Mais sobre [Fastify](https://github.com/fastify/docs-portuguese)...

</div>

<br><hr><br>

<div align="center">

## Superconjunto de JS: TypeScript

</div>

<br>

### O que é?


> TypeScript é um superconjunto de JavaScript, ou seja, um conjunto de ferramentas e formas mais eficientes de escrever código JavaScript, adicionando recursos que não estão presentes de maneira nativa na linguagem.

<br>

### Principais vantagens

> A principal vantagem do TypeScript em relação ao JavaScript “tradicional” é adicionar recursos importantes e úteis para a construção de projetos em larga escala, como tipagem estática, forte e automática, orientação a objetos e a possibilidade de descobrir e corrigir erros em tempo real durante o desenvolvimento.

<br>

### Como funciona?

```ts
  //Sintaxe
  const varName: varType = valor;
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

### Configurações

<br>

#### **Instalação como Dependência de Desenvolvimento**

```
  npm i typescript -D
```

<br>

#### **Configuração do TypeScript no projeto**

> Cria o arquivo **```tsconfig.json```** que é a configuração do TypeScript no projeto.

```
  npx tsc --init
```

> Dentro desse arquivo, é necessário mudar o **```target```** de **```"es2016"```** para **```"es2020"```**, pois o Node suporta features mais recentes do JavaScript

<br>

#### **Executando arquivo do Node com TypeScript**

> Agora para executar algum código sem termos que fazer alguma conversão do Node para o TS, bastamos instalar uma outra depêndencia de desenvolvimento.

```
  npm i tsx -D 
``` 

> Após isso, podemos configurar esse comando através do **```package.json```**, deixando mais simples a execução.

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

#### **Sair do modo Watch nos consoles**

> Para sair do modo Watch, basta clicar **```Ctrl```** + **```C```**.

<br>

<div align="center">

### Mais sobre [TypeScript](https://www.typescriptlang.org/docs/)...

</div>

<br><hr><br>

<div align="center">

## Sobre o Back-End da aplicação

</div>

<br>

> Nosso back-end será uma [API RESTful](https://www.hostinger.com.br/tutoriais/api-restful), ou seja, uma API que provê recursos, acessos à entidades, funcionalidades (criação, edição, remoção, etc) através de rotas http.

> Ele terá algumas rotas, que são recursos que o Front-End vai acessar dentro da aplicação.

<br><hr><br>

<div align="center">

## ORM: Prisma

</div>

<br>

### O que é?

> Ele é um ORM para Node e TypeScript (Object-Relational Mapping), em português, mapeamento objeto-relacional , é uma técnica para aproximar o paradigma de desenvolvimento de aplicações orientadas a objetos ao paradigma do banco de dados relacional. O uso da técnica de mapeamento objeto-relacional é realizado através de um mapeador objeto-relacional que geralmente é a biblioteca ou framework que ajuda no mapeamento e uso do banco de dados.

> O Prisma tem muitas funcionalidades legais, como uma integração com Typescript automática, geração de migrations automática, um SGBD próprio, etc.

<br>

### Principais Ferramentas

> O Prisma consiste em três ferramentas principais:
> - Prisma Client: um construtor de consultas gerado automaticamente e fortemente tipado para o Node.js e o TypeScript.
> - Prisma Migrate: um sistema declarativo de modelagem e migração de dados.
> - Prisma Studio: uma GUI para visualizar e editar dados em seu banco de dados.

<br>

### Instalando o Prisma

> Instalar a extensão no VSCode do Prisma:

> Nome: Prisma
<br>
> Id: Prisma.prisma
<br>
> VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=Prisma.prisma

<br>

> Instalar a Dependência de Desenvolvimento:
```
npm i -D prisma
```

<br>

> Instalar client do Prisma, a Dependência que iremos utilizar para acessar o banco de dados na aplicação:
```
npm i @prisma/client
```

<br>

> Instalar o Provider SQLite, ou seja, a nossa aplicação usará SOMENTE o banco SQLite, pois ele cria o banco local, não sendo necessário nenhum outro intermédio para subir esse banco local. Esse comando também gera um arquivo **```schema.prisma```**, que é onde vamos criar as tabelas, relações, variáveis, etc, é o intermédio entre a aplicação e o banco:
```
npx prisma init --datasource-provider SQLite
```

<br>

### Criando uma tabela

> Para criar uma tabela no Prisma, basta ir no **```schema.prisma```** e adicionar os seguintes comandos: 

```prisma
// Criando uma tabela com nome Habit
model Habit {
  // 1° - Criando uma coluna da tabela com nome "id"
  // 2° - Definindo tipo String
  // 3° - Estabelecendo ela como chave primária
  // 4° - Estabelecendo um UUID (Identificador Único Universal) para essa chave
  id         String   @id @default(uuid())
  // 1° - Criando uma coluna da tabela com nome "title"
  // 2° - Definindo tipo String
  title      String
  // 1° - Criando uma coluna da tabela com nome "created_at"
  // 2° - Definindo tipo DateTime
  created_at DateTime

  // Renomeando a tabela para "habits"
  @@map("habits")
}
```
<br>

### Executando o Prisma

> Para executar o **```schema.prisma```**, ou seja, fazer a portabilidade do código feito em prisma para SQLite. Esse comando faz com que crie o banco se não houver um **```dev.db```** e a pasta . Então basta executar o seguinte comando no terminal: 

```
npx prisma migrate dev 
```

<br>

> Vai pedir para definir um nome para a migração, nesse campo você pode dizer o que fez no banco. Após isso, é criado a pasta migrations com subpastas nomeada com o ano+mes+dia... e dentro está o arquivo migration.sql, que é responsável pela atualização do banco. A cada vez que você executar esse comando, ele atualiza o banco e cria outra migration.

<br>

> Aqui está um exemplo da migration.sql, esse arquivo executa exatamente o que solicitamos no **```schema.prisma```** antes da migração.

```sql
CREATE TABLE "habits" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL
);
```

<br>

### Visualizar o Banco

> Para visualizar o banco, basta executar o seguinte código no terminal:

```
  npx prisma studio
```

> Ele irá abrir uma página no navegador mostrando o banco, suas tabelas, colunas.

<br>

<div align="center">

### Mais sobre [Prisma](https://www.prisma.io/docs)...

</div>

<br><hr><br>

<div align="center">

## Mecanismo: Cors

</div>

<br>

### O que é?

<br>

> O Cors, Cross-Origin Resource Sharing (Compartilhamento de recursos com origens diferentes), é um mecanismo que usa cabeçalhos adicionais HTTP para informar a um navegador que permita que um aplicativo Web seja executado em uma origem (domínio) com permissão para acessar recursos selecionados de um servidor em uma origem distinta. Um aplicativo Web executa uma requisição cross-origin HTTP ao solicitar um recurso que tenha uma origem diferente (domínio, protocolo e porta) da sua própria origem. 

<br>

> Se eu não configurar o cors, nenhuma aplicação Front-End conseguirá buscar os dados no Back-End

<br>

### Instalação do cors

> Vamos instalar o cors que está integrado ao Fastify:

```
  npm i @fastify/cors
```

<br>

### Configurando o cors

> Primeiramente importamos o cors para o **```server.ts```**:
```ts
  import cors from '@fastify/cors'
```

<br>

> Após isso, ainda no **```server.ts```**, crie a integração com o Front apenas com os comandos: 

```ts
  app.register(cors)
```

<br>

<div align="center">

### Mais sobre [Cors](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS)...

</div>

<br><hr><br>

<div align="center">

## Framework: Vite JS

</div>

<br>

### O que é?

<br>

> É uma ferramenta para o frontend JavaScript com a qual você pode gerar estrutura de código de vários frameworks como React, Vanilla, Vue, Svelte e outros. Além de ser um gerador muito rápido, o Vite.js nos poupa muito tempo configurando outras bibliotecas.

<br>

### Instalação do vite

> Vamos instalar o vite fora da pasta server, pois ele fará parte é do nosso Front-End:

```
  npm create vite@latest
```

> Selecionamos em seguinte, o **```nome do projeto```** (pasta), coloquei como "**```web```**", selecionamos também o **```framework```**, que nesse caso é o **```React```** e por último a **```variante```** que é o **```TypeScript```**, pois estamos fazendo nosso projeto em TS.

<br>

### Instalando as Dependências:

> Já na pasta **```web```**:
```
  npm i
```

> Após isso, será criado todos os arquivos necessários para prosseguirmos o desenvolvimento.

<br>

> Em seguida, podemos configurar o comando de execução do Projeto através do **```package.json```**, novamente:

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

### Rodar o projeto

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

## Biblioteca: React JS

</div>

<br>

### O que é?

> O React é a biblioteca mais popular do JavaScript e é usada para construir uma interface de usuário (IU). Ela oferece uma resposta excelente para o usuário adicionar comandos usando um novo método de renderizar sites.

<br>

### Por que usar?
<div align="center">

#### **Fácil de Usar**

</div>

> O React é uma biblioteca de código aberto para interfaces gráficas (GUI) que tem como foco uma só coisa: tornar a experiência do usuário com a interface mais eficiente. Ela pode ser categorizada como o “V” no padrão MVC (Model-View-Controller). 

<br>

<div align="center">

#### **Suporte a Componente Reusável em Java**

</div>

> O React permite que você reuse componentes que tenham sido desenvolvido em outras aplicações e que usem a mesma função. A função de reusabilidade é uma vantagem importante para desenvolvedores em geral. 

<br>

<div align="center">

#### **Componente Fácil de Escrever**

</div>

> Também conhecido como React JS, o componente do React é fácil de escrever porque ele usa JSX, uma extensão de sintaxe opcional para JavaScript. Ela permite que você combine HTML com JavaScript.  
<br>
> O JSX é uma excelente combinação de JavaScript e HTML. Ela simplesmente simplifica toda a estrutura de codificação escrita de um site. Além disso, a extensão também faz com que a renderização de múltiplas funções seja mais fácil.
<br><br>
> Ainda que o JSX não seja a extensão de sintaxe mais popular, ela tem provado ser bastante eficiente. Especialmente quando falamos em desenvolver componentes especiais ou aplicações de alto rendimento.  

<br>

<div align="center">

#### **Melhor Desempenho com Virtual DOM**

</div>

> O React melhora, de maneira eficiente, o processo de atualização do DOM (Document Object Model). Como você deve saber, esse processo pode causar muita frustração em projetos baseados em aplicações-web. Por sorte, o React usa Virtual DOMs, então você consegue driblar esses problemas.
<br><br>
> A ferramenta permite que você construa um Virtual DOM e o hospede na memória. Como resultado, toda vez que acontece uma mudança no DOM real, o virtual se modifica imediatamente.     
<br> 
> O sistema vai impedir que o DOM real faça atualizações constantemente. Por conta disso, a velocidade da sua aplicação não vai ser interrompida. 

<br>

<div align="center">
  
  #### **Amigável a SEO**
  
</div>

<br>

> O React permite que você crie uma interface de usuário que pode ser encontrada e acessa em diversos motores de busca. Esse recurso é uma vantagem sensacional porque nem todos os frameworks de JavaScript são amigáveis a SEO.
<br><br>
> Junto a isso, como o React melhora o processamento da sua aplicação, ele também pode melhorar os resultados do seu SEO. Afinal, o tempo de carregamento de um site é um fator crucial na otimização de SEO.  
<br>
> Porém, você deve se atentar ao fato de que o React é apenas uma biblioteca JavaScript. Isso significa que você não pode fazer tudo com ele. O uso de bibliotecas adicionais podem ser necessárias para propósitos de gerenciamento, apontamento ou interações complexas.

<br>

### Componentes

> Geralmente, componentes React são como funções JavaScript. Eles aceitam entradas como propriedades (chamadas “props”) e retornam novos elementos React, os chamados JSX.
<br><br>
> Os componentes permitem que a UI seja dividida em partes independentes e reutilizáveis, ou seja, trata cada parte da aplicação como um bloco isolado, livre de outras dependências externas.

```jsx
  import React from "react";
  import ReactDOM from "react-dom";

  const Index = () => {
    return <div>Hello React!</div>;
  };

  ReactDOM.render(<Index />, document.getElementById("index"));
```
<br>

### Props

> Props, que é uma abreviação de properties, ou propriedades, são informações que podem ser passadas para um componente. Pode ser uma string, um número, até mesmo uma função. Este valor pode então ser utilizado pelo componente que a recebe. Primeiro, passamos o dado que desejamos passar ao componente definindo-o como um atributo, onde o componente é utilizado. Vamos passar a prop currentCount para o componente CountDisplay, que está sendo chamado no arquivo App.js. Para o valor numérico, passamos o mesmo dentro de chaves. Vejamos:

```tsx
import React from "react";
import ReactDOM from "react-dom";

import CountDisplay from "./CountDisplay";

const App = (props) => {
  return <CountDisplay 
    currentCount={3}
  />;
};

export default App;
```

<br>

### State

> State, assim como as props, são dados utilizados pelo componente. Novamente, pode ser uma string, um objeto, um array, um número. A diferença, no caso do state, é que ao invés de receber a informação e somente utilizá-la, o state é privado e completamente controlado pelo componente. 

<br>

<div align="center">

### Mais sobre [Componentes, Props e State](https://felipegalvao.com.br/pt/blog/learn-react-components-state-and-props/)...

</div>

<br>

<div align="center">

### Mais sobre [React](https://reactjs.org)...

</div>

<br><hr><br>

## 
<!-- 
# Aula pausada em 50:00 -->