## Prisma

<br>

### Criar relação entre tabelas

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

> Onde: <br><br>
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

<br><hr><br>

### Visualizar o diagrama do banco de dados

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

### Mais Sobre [Prisma ERD Generator](https://www.npmjs.com/package/prisma-erd-generator)...

</div>

<br><hr><br>

### Fazendo o Seeding no nosso banco

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

<!-- TODO: Fazer exemplo de seed -->

> Para montar um seeding, temos aqui a estrutura base dele:

> Agora no console, vamos fazer o seeding:

```
  npx prisma db seed
```

<div align="center">

### Mais Sobre [Prisma Seeding DataBase](https://www.prisma.io/docs/guides/database/seed-database)...

</div>

<br><hr><br>

### Problemas

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

<div align="center">

## TypeScript

</div>

<br>

### Importações necessárias (server)

```ts
// Importação para utilizar recursos do Fastify
import Fastify from 'fastify'
import cors from '@fastify/cors'
// Importação das rotas
import { appRoutes } from './routes'
```

<br>

### Criar uma aplicação (função) (server)

```ts
// Cria a aplicação executando a função Fastify()
const app = Fastify()
```

<br>

### Integrando a aplicação ao Front-End (server)

```ts
// Cria a integração com o Front-End
app.register(cors)
// Posso configurar para apenas alguns endereços poderem consumir os dados do Back-End, bastamos utilizar o "origin: 'http://endereço/rota'"
```

<br>

### Integrando a aplicação às rotas (server)

```ts
// Cria a integração com rotas
app.register(appRoutes)
```

<br>

### Conectando a aplicação à uma porta local (server)

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

### Importações necessárias (routes)

```ts
import { FastifyInstance } from 'fastify'
import { prisma } from './lib/prisma'
// Importação dentro do Prisma o Client
import { PrismaClient } from '@prisma/client'
```

<br>

### Criando uma rota e acessando dados de dentro do banco (routes)

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

<br><br><br>

<div align="center">

## Biblioteca: zod

</div>

<br>

### O que é?

> Zod é uma biblioteca de declaração e validação de TypeScript-first schema. O termo "schema"
> refere-se amplamente a qualquer tipo de dados, desde uma string a um objeto complexo aninhado.
> <br><br> Projetado para ser o mais amigável possível ao desenvolvedor, o objetivodo zod é eliminar
> declarações de tipo duplicadas. Você declara um validador uma vez e Zod inferirá automaticamente o
> tipo estático do TypeScript. É fácil compor tipos mais simples em estruturas de dados complexas.

<br>

### Características

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

### Instalação

> Para instalar, siga o comando:

```
  npm i zod
```

<br>

### Importação

```ts
import { z } from 'zod'
```

<br>

### Exemplos usados na aplicação

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

## Biblioteca: DayJs

</div>

<br>

### O que é?

> Day.js é uma biblioteca JavaScript minimalista que analisa, valida, manipula e exibe datas e horas
> para navegadores modernos com uma API amplamente compatível com Moment.js. Se você usa Moment.js,
> já sabe como usar Day.js.

<br>

### Características

> - Leve: Menos JavaScript para baixar, analisar e executar, deixando mais tempo para o seu código.
>   <br>
> - Imutável: Todas as operações de API que alteram o objeto Day.js retornarão uma nova instância.
>   Isso ajuda a prevenir bugs e evitar longas sessões de depuração. <br>
> - I18n: O Day.js tem um ótimo suporte para internacionalização. Mas nenhum deles será incluído em
>   sua compilação, a menos que você os use.

<br>

### Instalação

```
  npm i dayjs
```

<br>

### Importação

```ts
import dayjs from 'dayjs'
```

<br>

<div align="center">

## Tailwind CSS

</div>

<br>

### Criar uma classe que não está no Tailwind por padrão

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

<br>

<br><hr><br>

<div align="center">

## Biblioteca: Phospor Icon

</div>

<br>

### O que é?

> Phosphor é uma biblioteca de ícones flexíveis para interfaces, diagramas, apresentações, o que
> quiser que seja.

<br>

### Instalação

```
  npm i phosphor-react
```

<br>

### Importação

```tsx
// Importando QUALQUER ícone da lib Phosphor Icon, só teclar Ctrl + Space
import {} from 'phosphor-react'
```

<br>

<div align="center">

### Mais Sobre [Phosphor Icon](https://github.com/phosphor-icons/react)...

</div>

<br>

<br><hr><br>

## Pesquisar sobre:

- FastifyInstance
