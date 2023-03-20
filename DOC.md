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
- [Sobre o Front-End da aplicação](#sobre_front)
  - [Importações necessárias (routes)](#routes_importacao)
  - [Criando uma rota e acessando dados de dentro do banco (routes)](#routes_criar_rotas_acessar_no_banco)
- [Sobre o Back-End da aplicação](#sobre_backend)
  - [Importações necessárias](#server_importações)
  - [Criar uma aplicação](#server_aplicacao)
  - [Conectando a aplicação à uma porta local](#server_conectar_aplicacao_a_porta)
  - [Integrando a aplicação às rotas](#server_integrando_as_rotas)
  - [Integrando a aplicação ao Front-End](#server_integrando_ao_front)
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
    - [Criar uma classe que não está no Tailwind por padrão](#tailwind_criar_classe)
- [Bibliotecas](#libs)
  - [React JS](#react)
    - [O que é?](#react_sobre)
    - [Características](#react_caracteristicas)
    - [Componentes (Components)](#react_componentes)
    - [Propriedades (Props)](#react_propriedades)
    - [Estado (State)](#react_estado)
    - [Exemplos de uso](#react_exemplo)
      - [Progress Bar sem Lib](#react_progressbar_sem_lib)
  - [Zod](#zod)
    - [O que é?](#zod_sobre)
    - [Características](#zod_caracteristicas)
    - [Instalação](#zod_instalacao)
    - [Importação](#zod_importacao)
    - [Exemplos usados na aplicação](#zod_exemplos)
  - [DayJs](#dayjs)
    - [O que é?](#dayjs_sobre)
    - [Características](#dayjs_caracteristicas)
    - [Instalação](#dayjs_instalacao)
    - [Importação](#dayjs_importacao)
    - [Configurar Modelo de Data para pt-br](#dayjs_config_modelo_data_pt)
  - [Phosphor Icon](#phosphor)
    - [O que é?](#phosphor_sobre)
    - [Instalação](#phosphor_instalacao)
    - [Importação](#phosphor_importacao)
    - [Como usar?](#phosphor_como_usar)
  - [NativeWind](#nativewind)
    - [O que é?](#nativewind_sobre)
    - [Características](#nativewind_caracteristicas)
    - [Instalação](#nativewind_instalacao)
    - [Inicialização](#nativewind_inicializacao)
    - [Configuração](#nativewind_configuracao)
    - [Tipagem](#nativewind_tipagem)
    - [Usar SVG no React Native](#nativewind_usar_svg)
  - [Vector-Icons](#vector)
    - [O que é?](#vector_sobre)
    - [Importação](#vector_importacao)
    - [Como usar?](#vector_como_usar)
  - [Radix UI](#radix)
    - [O que é?](#radix_sobre)
    - [Características](#radix_caracteristicas)
    - [Instalação](#radix_instalacao)
    - [Importação](#radix_importacao)
    - [Como usar?](#radix_como_usar)
  - [CLSX](#clsx)
    - [O que é?](#clsx_sobre)
    - [Instalação](#clsx_instalacao)
    - [Importação](#clsx_importacao)
    - [Exemplo de uso](#clsx_exemplo)
  - [React Navigation](#react_navigation)
    - [O que é?](#react_navigation_sobre)
    - [Características](#react_navigation_caracteristicas)
    - [Instalação](#react_navigation_instalacao)
    - [Importação](#react_navigation_importacao)
- [Object-Relational Mapping (ORM)](#orm)
  - [Prisma](#prisma)
    - [O que é?](#prisma_sobre)
    - [Principais ferramentas](#prisma_ferramentas)
    - [Instalação](#prisma_instalacao)
    - [Criando uma tabela](#prisma_criando_tabela)
    - [Criar relação entre tabelas](#prisma_relação_entre_tabelas)
    - [Executando o Prisma](#prisma_executando)
    - [Fazendo o Seeding no banco](#prisma_seeding)
    - [Visualizar o banco](#prisma_visualizar_banco)
    - [Visualizar o diagrama do banco de dados](#prisma_visualizar_diagrama)
    - [Problemas](#prisma_problemas)
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
    - [Iniciando o projeto com Expo](#expo_iniciando_projeto)
    - [Executando a aplicação](#expo_executando_aplicacao)
    - [Instalando fontes](#expo_instalando_fontes)
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

## Sobre o Front-End da aplicação <a name = "sobre_front"></a>

</div>

<br>

### Importações necessárias (routes) <a name = "routes_importacao"></a>

```ts
import { FastifyInstance } from 'fastify'
import { prisma } from './lib/prisma'
// Importação dentro do Prisma o Client
import { PrismaClient } from '@prisma/client'
```

<br>

### Criando uma rota e acessando dados de dentro do banco (routes) <a name = "routes_criar_rotas_acessar_no_banco"></a>

> Para criar um rota, fiz da seguinte maneira:

```ts
// Cria uma rota, localizada no http://localhost:3333/ onde:
// 1° parâmetro é a rota, que no caso não é destinado a nenhum lugar (padrão)
// 2° parâmetro é a função que irá rodar nessa rota
app.post('/habits', async () => {
	// Dentro dessa rota consigo acessar o banco, na tabela habits e procurar por alguns dados
	// A cada parâmetro passado na função eu teclar Ctrl + Space, a linguagem da uma sugestão do que podemos usar como parâmetro.
	const habits = await prisma.habit.findMany({
		// Se eu aperto Ctrl + Space aqui, consigo ver as operações que consigo fazer dentro do banco na tabela habits

		// Aqui estou buscando na tabela habits, a coluna title que começa com 'Beber'
		where: {
			title: {
				startsWith: 'Beber',
			},
		},

		// Se eu quiser que essa função retorne todos os dados, basta retirar a consulta com o where (comentei).
	})

	// Essa função irá retornar uma promise (no JS), se eu quiser aguardar a busca dos dados ser finalizada antes de retornar os dados pro Front End, precisa usar o await na promessa que temos que esperar a sua finalização, e para usar o await, é necessário deixar a função assíncrona com o async
	return habits
	// O bom do prisma é que ele já valida os dados antes mesmo de fazer a migração e acontecer qualquer erro, ele valida se estamos utilizando operações válidas com dados válidos.
})
```

<br><hr><br>

<div align="center">

## Sobre o Back-End da aplicação <a name = "sobre_backend"></a>

</div>

<br>

> Nosso back-end será uma [API RESTful](https://www.hostinger.com.br/tutoriais/api-restful), ou
> seja, uma API que provê recursos, acessos à entidades, funcionalidades (criação, edição, remoção,
> etc) através de rotas HTTP. <br><br> Ele terá algumas rotas, que são recursos que o Front-End vai
> acessar dentro da aplicação.

<br>

### Importações necessárias (server) <a name = "server_importações"></a>

```ts
// Importação para utilizar recursos do Fastify
import Fastify from 'fastify'
import cors from '@fastify/cors'
// Importação das rotas
import { appRoutes } from './routes'
```

<br>

### Criar uma aplicação (função) (server) <a name = "server_aplicacao"></a>

```ts
// Cria a aplicação executando a função Fastify()
const app = Fastify()
```

<br>

### Conectando a aplicação à uma porta local (server) <a name = "server_conectar_aplicacao_a_porta"></a>

```ts
// Faz com que nossa aplicação se conecte através da porta passada por parâmetro (3333)
// O .then() faz com que execute aquela mensagem enquanto o servidor está sendo executado.
app
	.listen({
		port: 3333,
	})
	.then(() => {
		console.log('HTTP Server Running')
	})
```

<br>

### Integrando a aplicação às rotas (server) <a name = "server_integrando_as_rotas"></a>

```ts
// Cria a integração com rotas
app.register(appRoutes)
```

<br>

### Integrando a aplicação ao Front-End (server) <a name = "server_integrando_ao_front"></a>

```ts
// Cria a integração com o Front-End
app.register(cors)
// Posso configurar para apenas alguns endereços poderem consumir os dados do Back-End, bastamos utilizar o "origin: 'http://endereço/rota'"
```

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
const valor: number = 5

// Erro, a função só pode retornar um number e essa função retornaria uma String
function soma(): number {
	return valor + '5'
}

// Retorna '55'
function concat(): String {
	return valor + '5'
}

// Crio um tipo estático de um objeto
type User = {
	name: String
	age: number
}

// Crio uma função colocando uma tipagem nela (User)
function showUserName(user: User) {
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
const user2 = {
	age: 25,
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

<div align="center">

<br><hr><br>

### Mais sobre [TypeScript](https://www.typescriptlang.org/docs/)...

<br><hr><br><br>

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

<br><hr><br>

### Mais sobre [Fastify](https://github.com/fastify/docs-portuguese)...

<br><hr><br><br>

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

<div align="center">

<br><hr><br>

### Mais sobre [Vite](https://vitejs.dev)...

<br><hr><br><br>

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

<br><hr><br>

### Mais sobre [React Native](https://reactnative.dev/docs/getting-started)...

<br><hr><br><br>

## Tailwind CSS <a name = "tailwind"></a>

</div>

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

<br>

### Criar uma classe que não está no Tailwind por padrão <a name = "tailwind_criar_classe"></a>

> Acesse o arquivo **`tailwind.config.cjs`**, na parte
> **`module.exports > content > theme > extends`**:

```cjs
module.exports = {
	content: [
		// Dentro da pasta 'src', qualquer pasta que tenha qualquer arquivo com a extensão .tsx
		'./src/**/*.tsx',
		'./index.html',
		// Esses 2 caminhos é para dizer onde poderei utilizar o tailwind
	],
	theme: {
		extend: {},
	},
	plugins: [],
}
```

> Em extends, tecle **`Ctrl`** + **`Space`** para abrir o painel de sugestões e procure pela
> propriedade CSS que você quer criar a classe, no meu caso foi uma cor (objeto) e nela eu criei um
> alias (background) com um conteúdo:

```cjs
  theme: {
		extend: {
      colors: {
        background: '#09090A'
      }
    },
	},
```

<div align="center">

<br><hr><br>

### Mais sobre [Tailwind CSS](https://v2.tailwindcss.com/docs)...

<br><hr><br><br>

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

<div align="center">

<br><hr><br>

### Mais sobre [Componentes, Props e State](https://felipegalvao.com.br/pt/blog/learn-react-components-state-and-props/)...

<br><hr><br>

</div>

### Exemplos de uso <a name = "react_exemplo"></a>

> Aqui será registrado algumas coisas que criamos usando o React.

<br>

<div align="center">

#### **Progress Bar sem Lib** <a name = "react_progressbar_sem_lib"></a>

</div>

```tsx
<div
	role="progressbar"
	aria-label="Progresso de hábitos completados nesse dia"
	aria-valuemin={0}
	aria-valuemax={100}
	aria-valuenow={75}
	className="h-3 rounded-xl bg-violet-600 w-3/4"
/>
```

<div align="center">

<br><hr><br>

### Mais sobre [React](https://reactjs.org)...

<br><hr><br><br>

## Zod <a name = "zod"></a>

</div>

<br>

### O que é? <a name = "zod_sobre"></a>

> Zod é uma biblioteca de declaração e validação de TypeScript-first schema. O termo "schema"
> refere-se amplamente a qualquer tipo de dados, desde uma string a um objeto complexo aninhado.
> <br><br> Projetado para ser o mais amigável possível ao desenvolvedor, o objetivodo zod é eliminar
> declarações de tipo duplicadas. Você declara um validador uma vez e Zod inferirá automaticamente o
> tipo estático do TypeScript. É fácil compor tipos mais simples em estruturas de dados complexas.

<br>

### Características <a name = "zod_caracteristicas"></a>

> Alguns grandes aspectos: <br><br>
>
> - Zero dependências <br>
> - Funciona em Node.js e em todos os navegadores modernos <br>
> - Pequeno: 8kb minificado + compactado <br>
> - Imutável: métodos (por exemplo, .optional()) retornam uma nova instância <br>
> - Interface concisa e encadeável <br>
> - Abordagem funcional: analise, não valide <br>
> - Funciona com JavaScript simples também! Você não precisa usar somente TypeScript.

<br>

### Instalação <a name = "zod_instalacao"></a>

> Para instalar, siga o comando:

```
  npm i zod
```

<br>

### Importação <a name = "zod_importacao"></a>

```ts
import { z } from 'zod'
```

<br>

### Exemplos usados na aplicação <a name = "zod_exemplos"></a>

```ts
    // Para fazer a propriedade ser obrigatória, definimos apenas o tipo
      title: z.string(),

      // Para criar a propriedade do tipo array que armazene números pre-definidos, definimos o tipo array para ela e definimos um mínimo com a função .min() e um máximo com a .max()
      weekDays: z.array(
        z.number().min(0).max(6)
      )
      //Para ela não ser obrigatória, poderíamos adicionar a função .nullable()
      // title: z.string().nullable()
```

<br><hr><br>

<div align="center">

## DayJs <a name = "dayjs"></a>

</div>

<br>

### O que é? <a name = "dayjs_sobre"></a>

> Day.js é uma biblioteca JavaScript minimalista que analisa, valida, manipula e exibe datas e horas
> para navegadores modernos com uma API amplamente compatível com Moment.js. Se você usa Moment.js,
> já sabe como usar Day.js.

<br>

### Características <a name = "dayjs_caracteristicas"></a>

> - Leve: Menos JavaScript para baixar, analisar e executar, deixando mais tempo para o seu código.
>   <br>
> - Imutável: Todas as operações de API que alteram o objeto Day.js retornarão uma nova instância.
>   Isso ajuda a prevenir bugs e evitar longas sessões de depuração. <br>
> - I18n: O Day.js tem um ótimo suporte para internacionalização. Mas nenhum deles será incluído em
>   sua compilação, a menos que você os use.

<br>

### Instalação <a name = "dayjs_instalacao"></a>

```
  npm i dayjs
```

<br>

### Importação <a name = "dayjs_importacao"></a>

```ts
import dayjs from 'dayjs'
```

<br>

### Configurar Modelo de Data para pt-br <a name = "dayjs_config_modelo_data_pt-br"></a>

> Crie uma pasta lib, para melhor organizar os arquivos, nela crie um arquivo com nome
> **`dayjs.ts`** e cole o seguinte código:

```ts
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'

// COnfigurando a data para pt-br
dayjs.locale('pt-br')
```

> E depois importe pro **`App.tsx`**:

```tsx
// Config do DayJs
import './src/lib/dayjs'
```

<br>

<br><hr><br>

<div align="center">

## Phosphor Icon <a name = "phosphor"></a>

</div>

<br>

### O que é? <a name = "phosphor_sobre"></a>

> Phosphor é uma biblioteca de ícones flexíveis para interfaces, diagramas, apresentações, o que
> quiser que seja.

<br>

### Instalação <a name = "phosphor_instalacao"></a>

```
  npm i phosphor-react
```

<br>

### Importação <a name = "phosphor_importacao"></a>

```tsx
// Importando QUALQUER ícone da lib Phosphor Icon, só teclar Ctrl + Space
import {} from 'phosphor-react'
```

<br>

### Como usar? <a name = "phosphor_como_usar"></a>

> Escolha o ícone na importação da lib:

```tsx
// Escolhi o ícone Plus
import { Plus } from 'phosphor-react'
```

> Depois é só usá-lo como componente:

```tsx
<Plus
	size={20}
	className="text-violet-500"
/>
```

<div align="center">

<br><hr><br>

### Mais Sobre [Phosphor Icon](https://github.com/phosphor-icons/react)...

<br><hr><br><br>

## NativeWind <a name = "nativewind"></a>

</div>

<br>

### O que é? <a name = "nativewind_sobre"></a>

> NativeWind usa Tailwind CSS como linguagem de script para criar um sistema de estilo universal
> para React Native. Os componentes NativeWind podem ser compartilhados entre plataformas e
> produzirão seus estilos como CSS StyleSheet na web e StyleSheet.create para nativos.

<br>

### Características <a name = "nativewind_caracteristicas"></a>

> Seus objetivos são fornecer uma experiência de estilo consistente em todas as plataformas,
> melhorar a UX do desenvolvedor e a capacidade de manutenção do código. <br><br> NativeWind
> consegue isso pré-compilando seus estilos e usa um tempo de execução mínimo para aplicar
> seletivamente estilos responsivos.

<br>

### Instalação <a name = "nativewind_instalacao"></a>

```
  npm i nativewind --save -dev
```

<br>

### Inicialização <a name = "nativewind_inicializacao"></a>

```
npx tailwindcss init
```

<br>

### Configuração <a name = "nativewind_configuracao"></a>

> No arquivo **`tailwind.config.js`**, você irá adicionar algumas linhas de código:

```js
// Original
module.exports = {
  content: [],

// Modificado
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
```

<br>

> Agora no **`babel.config.js`**:

```js
// Original
module.exports = function (api) {
	api.cache(true)
	return {
		presets: ['babel-preset-expo'],
	}
}

// Modificado
module.exports = function (api) {
	api.cache(true)
	return {
		presets: ['babel-preset-expo'],
		plugins: ['nativewind/babel'],
	}
}
```

<br>

### Tipagem <a name = "nativewind_tipagem"></a>

> Para utilizarmos o **`className`** no React Native, devemos fazer uma tipagem primeiro. Então crie
> uma pasta **`@types`** no **`src`** e depois um arquivo **`app.d.ts`** nela. Após isso adicione os
> seguintes comandos nesse arquivo:

```ts
/// <reference types="nativewind/types" />
```

> Com isso, agora podemos utilizar algumas propriedades nos componentes.

<br>

### Usar SVG no React Native <a name = "nativewind_usar_svg"></a>

> Vamos instalar a biblioteca **`react-native-svg`**, que fornece suporte SVG para React Native no
> iOS, Android, macOS, Windows e uma camada de compatibilidade para a web:

```
npx expo install react-native-svg
```

> E importao para o projeto:

```tsx
import * as Svg from 'react-native-svg'
```

> Também vamos instalar outra biblioteca, a **`react-native-svg-transformer`**, vamos instalar como
> dependência de desenvolvimento:

```
npm i react-native-svg-transformer --save-dev
```

> Criar um arquivo na raíz do projeto (mobile) e nomear com **`metro.config.js`** e adicionar o
> seguinte trecho de código nesse arquivo:

```js
const { getDefaultConfig } = require('expo/metro-config')

module.exports = (() => {
	const config = getDefaultConfig(__dirname)

	const { transformer, resolver } = config

	config.transformer = {
		...transformer,
		babelTransformerPath: require.resolve('react-native-svg-transformer'),
	}
	config.resolver = {
		...resolver,
		assetExts: resolver.assetExts.filter((ext) => ext !== 'svg'),
		sourceExts: [...resolver.sourceExts, 'svg'],
	}

	return config
})()
```

> Depois só importar o logo pro projeto:

```tsx
import Logo from '../assets/logo.svg'
```

<br><hr><br>

<div align="center">

## Vector-Icons <a name = "vector"></a>

</div>

<br>

### O que é? <a name = "vector_sobre"></a>

> Essa biblioteca é instalada por padrão ao criar o projeto no expo. Ele é construído sobre
> react-native-vector-icons e usa uma API semelhante. Inclui conjuntos de ícones populares que você
> pode navegar em **`icons.expo.fyi`**.

<br>

### Importação <a name = "vector_importacao"></a>

```tsx
import {} from '@expo/vector-icons'
```

> Nas **`{}`** você pode usar algumas bibliotecas de ícones, como por exemplo: Feather, FontAwesome,
> Ionicons, entre outras.

<br>

### Como usar? <a name = "vector_como_usar"></a>

> E depois para usar algum ícone da biblioteca de ícones, você precisa usar o componente
> (biblioteca) que você importou:

```tsx
<Feather
	name="plus"
	color="white"
	size={20}
/>
```

> Onde **`name`** é o nome do ícone que você consegue buscar entre as várias bibliotecas de ícones
> nesse [**`site`**](https://oblador.github.io/react-native-vector-icons/).

<br><hr><br>

<div align="center">

## Radix UI <a name = "radix"></a>

</div>

<br>

### O que é? <a name = "radix_sobre"></a>

> Radix Primitives é uma biblioteca de componentes de interface do usuário de baixo nível com foco
> em acessibilidade, personalização e experiência do desenvolvedor. Você pode usar esses componentes
> como a camada base do seu sistema de design ou adotá-los de forma incremental.

<br>

### Características <a name = "radix_caracteristicas"></a>

<br>

<div align="center">

#### **Acessível**

</div>

> Os componentes aderem aos padrões de design WAI-ARIA sempre que possível. Lidamos com muitos dos
> detalhes difíceis de implementação relacionados à acessibilidade, incluindo atributos de ária e
> função, gerenciamento de foco e navegação pelo teclado.

<br>

<div align="center">

#### **Sem estilo**

</div>

> Os componentes são fornecidos com zero estilos, dando a você controle total sobre o estilo. Os
> componentes podem ser estilizados com qualquer solução de estilo (CSS vanilla, pré-processadores
> CSS, bibliotecas CSS-in-JS).

<br>

<div align="center">

#### **Aberto**

</div>

> Radix Primitives são projetados para serem personalizados para atender às suas necessidades. Nossa
> arquitetura de componentes abertos fornece acesso granular a cada parte do componente, para que
> você possa envolvê-los e adicionar seus próprios event listeners, props, ou refs.

<br>

<div align="center">

#### **Descontrolado**

</div>

> Quando aplicável, os componentes não são controlados por padrão, mas também podem ser controlados
> alternativamente. Toda a fiação de comportamento é tratada internamente, para que você possa
> começar a operar da maneira mais tranquila possível, sem a necessidade de criar nenhum estado
> local.

<br>

<div align="center">

#### **Experiência do desenvolvedor**

</div>

> Um de nossos principais objetivos é fornecer a melhor experiência possível ao desenvolvedor. Radix
> Primitives fornece uma API totalmente tipada. Todos os componentes compartilham uma API
> semelhante, criando uma experiência consistente e previsível. Também implementamos uma propriedade
> asChild, dando aos usuários controle total sobre o elemento renderizado.

<br>

<div align="center">

#### **Adoção incremental**

</div>

> Cada primitivo pode ser instalado individualmente para que você possa adotá-los de forma
> incremental.

```
npm install @radix-ui/react-dialog
npm install @radix-ui/react-dropdown-menu
npm install @radix-ui/react-tooltip
```

> Primitivos também são versionados de forma independente, para facilitar ainda mais a adoção
> incremental.

<br>

### Instalação <a name = "radix_instalacao"></a>

> Primeiro você escolhe qual dos componentes você vai querer, aí na documentação você obtém o código
> de instalação e importação, no meu caso, precisava do **`dialog`**:

```
npm install @radix-ui/react-dialog
```

<br>

### Importação <a name = "radix_importacao"></a>

> Como na importação ele importa tudo de Dialog, ou seja, todos os outros componentes de Dialog, dá
> também para importar separadamente, mas nao faz muito sentido utilizar os componentes
> separadamente, por isso importamos tudo.

```tsx
import * as Dialog from '@radix-ui/react-dialog'
```

<br>

### Como usar? <a name = "radix_como_usar"></a>

> Também está na documentação a maneira de usar. Existe toda uma estruturação de componentes a ser
> feita para que possamos usar o componente certinho.

```tsx
<Dialog.Root>
	<Dialog.Trigger
		type="button"
		className="border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-violet-300"
	>
		<Plus
			size={20}
			className="text-violet-500"
		/>
		Novo Hábito
	</Dialog.Trigger>

	<Dialog.Portal>
		<Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0" />
		<Dialog.Content className="absolute p-10 bg-zinc-900 rounded-2xl max-w-md w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
			<Dialog.Close className=" absolute right-6 top-6 text-zinc-400 hover:text-zinc-200">
				<X
					size={24}
					aria-label="Fechar"
				/>
			</Dialog.Close>
			<Dialog.Title className="text-3xl leading-tight font-extrabold">Criar Hábito</Dialog.Title>

			<NewHabitForm />
		</Dialog.Content>
	</Dialog.Portal>
</Dialog.Root>
```

<br><hr><br>

<div align="center">

## CLSX <a name = "clsx"></a>

</div>

<br>

### O que é? <a name = "clsx_sobre"></a>

> Um pequeno utilitário (228B) para construir strings condicionais no className. Também serve como
> um substituto menor e mais rápido para o módulo classnames.

<br>

### Instalação <a name = "clsx_instalacao"></a>

```
npm i clsx
```

<br>

### Importação <a name = "clsx_importacao"></a>

```tsx
import clsx from 'clsx'
```

<br>

### Exemplo de uso <a name = "clsx_exemplo"></a>

```tsx
<Popover.Trigger
	className={clsx('w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg', {
		'bg-zinc-900 border-zinc-800': completedPercentage === 0,
		'bg-violet-900 border-violet-700': completedPercentage > 0 && completedPercentage < 20,
		'bg-violet-800 border-violet-600': completedPercentage >= 20 && completedPercentage < 40,
		'bg-violet-700 border-violet-500': completedPercentage >= 40 && completedPercentage < 60,
		'bg-violet-600 border-violet-400': completedPercentage >= 60 && completedPercentage < 80,
		'bg-violet-500 border-violet-300': completedPercentage >= 80,
	})}
/>
```

<br><hr><br>

<div align="center">

## React Navigation <a name = "react_navigation"></a>

</div>

<br>

### O que é? <a name = "react_navigation_sobre"></a>

> O React Navigation é responsável por resolver uma grande questão de suas aplicações: a navegação.
> Influenciando na experiência da pessoa usuário e no design do app, a navegação e pode tornar tudo
> mais fácil ou mais complexo. <br><br> Porém o React Native não apresenta uma solução para o
> roteamento de forma nativa. Então, o React Navigation é uma possibilidade para realizar isso de
> forma simples.

<br>

### Características <a name = "react_navigation_caracteristicas"></a>

<div align="center">

**Fácil de usar**

</div>

> Comece rapidamente com navegadores integrados que oferecem uma interface perfeita e pronta para
> uso experiência.

<br>

<div align="center">

**Componentes criados para iOS e Android**

</div>

> Componentes criados para a aparência específica de dispositivos iOS e Android com animações e
> gestos suaves.

<br>

<div align="center">

**Completamente personalizável**

</div>

> Se você sabe escrever aplicativos usando JavaScript, pode personalizar qualquer parte do React
> Navigation.

<br>

<div align="center">

**Plataforma extensível**

</div>

> React Navigation é extensível em todas as camadas - você pode escrever suas próprias navegações ou
> até mesmo substituir a API voltada para o usuário.

<br>

### Instalação <a name = "react_navigation_instalacao"></a>

> Instalar os pacotes necessários para o projeto:

```
npm i @react-navigation/native
```

> E as Dependências de Desenvolvimento:

```
npm install react-native-screens react-native-safe-area-context
```

> Onde o **`react-native-screens`** que é para lidar com as navegações e o
> **`react-native-safe-area-context`** que é para garantir que os elementos sejam renderizados em
> tela

<br>

> Após selecionar o tipo de navegação que iremos querer, podemos instalar elas:

```
npm install @react-navigation/native-stack
```

<br>

### Importação <a name = "react_navigation_importacao"></a>

```
import {createNativeStackNavigator} from '@react-navigation/native-stack'
```

<div align="center">

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

### Criar relação entre tabelas <a name = "prisma_relação_entre_tabelas"></a>

> Para criar uma relação entre tabelas, precisamos antes fazer uma configuração opcional no
> **`settings.json`**. Primeiro acesse o arquivo e procure pelas configurações do prisma:

```json
  // Original
  "[prisma]": {
    "editor.defaultFormatter": "Prisma.prisma",
    "editor.formatOnSave": false
  }

  // Modificado
  "[prisma]": {
      "editor.defaultFormatter": "Prisma.prisma",
      "editor.formatOnSave": true
    }
```

> Aí a cada vez que você salvar o código, o VSCode formata o código automaticamente o código feito
> em prisma.

<br>

> Voltando ao que importa, a relação entre tabelas, no **`schema.prisma`**, você vai criar um alias
> que referencia a uma model e depois usar o **`@relation()`** para criar essa relação.

```prisma
  day     Day    @relation()
  habit   Habit  @relation()
```

> Onde:
>
> - 'day' e 'habit' são os alias, <br>
> - 'Day' e 'Habit' são as Models (Tabelas) <br>
> - @relation() são as relações (incompletas)

<br>

> Para completar essa relação de forma automática, devemos salvar o código com **`Ctrl`** + **`S`**
> e o prisma faz isso pra gente:

```prisma
  day     Day    @relation(fields: [dayId], references: [id])
  habit   Habit  @relation(fields: [habitId], references: [id])
  dayId   String
  habitId String
```

> Ele cria já as chaves estrangeiras abaixo, mas como não estamos montando o padrão de camelCase,
> podemos alterar os nomes das chaves:

```prisma
  --- Antes
  day     Day    @relation(fields: [dayId], references: [id])
  habit   Habit  @relation(fields: [habitId], references: [id])
  dayId   String
  habitId String


  --- Depois
  day_id   String
  habit_id String

  day     Day    @relation(fields: [day_id], references: [id])
  habit   Habit  @relation(fields: [habit_id], references: [id])
```

<!-- TODO: Não sei ainda o que esse comando faz. -->

> O prisma também vai criar um comando nas outras tabelas para concluir essas relações:

```prisma
  dayHabits DayHabit[]
```

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

### Fazendo o Seeding no banco <a name = "prisma_seeding"></a>

> Seeding nada mais é que colocar dados no banco a fim de testes. Para fazer isso, criamos um
> arquivo com nome **`seed.ts`**, configuramos nosso **`package.json`** com as seguintes instruções:

```json
  "prisma": {
    "seed": "tsx prisma/seed.ts"
  }
```

> Onde **`"seed"`** é o nome do comando que iremos executar para fazer o seeding, **`tsx`** é a lib
> que usaremos pra estar executando e **`prisma/seed.ts`** é a pasta/nome do arquivo.

<br>

> Para montar um seeding, temos aqui a estrutura base dele:

```ts
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {}

main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async (e) => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
```

> Depois de criarmos nosso próprio Seed, vamos fazer o seeding no banco:

```
  npx prisma db seed
```

<div align="center">

<br><hr><br>

### Mais Sobre [Prisma Seeding DataBase](https://www.prisma.io/docs/guides/database/seed-database)...

<br><hr><br>

</div>

### Visualizar o Banco <a name = "prisma_visualizar_banco"></a>

> Para visualizar o banco, basta executar o seguinte código no terminal:

```
  npx prisma studio
```

> Ele irá abrir uma página no navegador mostrando o banco, suas tabelas, colunas.

<br>

### Visualizar o diagrama do banco de dados <a name = "prisma_visualizar_diagrama"></a>

> Para visualizar o banco de dados pelo navegador, iremos usar o Prisma ERD Generator. <br><br>
> Vamos instalar as Dependências, que são os geradores de diagrama, primeiro:

```
  npm i -D prisma-erd-generator @mermaid-js/mermaid-cli
```

> Após isso, já no **`schema.prisma`**, vamos adicionar um trecho de código:

```prisma
  generator erd {
    provider = "prisma-erd-generator"
  }
```

> Depois, já no console, vamos dar o seguinte comando:

```
  npx prisma generate
```

> Ele vai instalar primeiro a Engine do Prisma e depois gera um SVG na pasta do prisma e podemos
> abrir ele no navegador e visualizar ele por lá através da opção "Open with Live Server". <br><br>
> Dá para aplicar também, temas.

<br>

<div align="center">

<br><hr><br>

### Mais Sobre [Prisma ERD Generator](https://www.npmjs.com/package/prisma-erd-generator)...

<br><hr><br>

### Problemas <a name = "prisma_problemas"></a>

<div align="center">

#### **Exclusão de tabelas**

</div>

<br>

> Quando vamos excluir os dados de tabelas, precisamos excluir todos os dados de tabelas
> relacionadas primeiro para depois as tabelas raíz. Para corrigir isso, vamos adicionar um pequeno
> parâmetro nas **`@relation`**:

```prisma
  habit Habit @relation(fields: [habit_id], references: [id], onDelete: Cascade)
```

> O parâmetro adicionado é esse **`onDelete: Cascade`**, com ele precisamos apenas deletar os dados
> da tabela raíz que o banco deleta automaticamente os dados das tabelas relacionadas.

<br><hr><br>

### Mais sobre [Prisma](https://www.prisma.io/docs)...

<br><hr><br><br>

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

<br><hr><br>

### Mais sobre [Cors](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS)...

<br><hr><br><br>

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

<div align="center">

<br><hr><br>

### Mais sobre [Expo](https://docs.expo.dev)...

<br><hr><br><br>

</div>

<!-- Links úteis:
- Async / await : https://www.alura.com.br/artigos/async-await-no-javascript-o-que-e-e-quando-usar?gclid=Cj0KCQiAw8OeBhCeARIsAGxWtUzlETfyVC2fz0onBK8HzW8ePrntJtBgFy6BmUdbbkoftP-BWmjjC1kaAvG7EALw_wcB -->

<!-- ## Pesquisar sobre:

- FastifyInstance
- SQLite
- SQL RAW
- EPOCH Unix Timestemp
- Fetch API
- Axios
- React Native Reanimated
- Notification API
- Scheduling
- Notification Timestamp Trigger
- Service Workers
- PushManager API
-->