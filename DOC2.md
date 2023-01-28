## Prisma

<br>

### Criar relação entre tabelas

> Para criar uma relação entre tabelas, precisamos antes fazer uma configuração opcional no **```settings.json```**. Primeiro acesse o arquivo e procure pelas configurações do prisma:

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

> Aí a cada vez que você salvar o código, o VSCode formata o código automaticamente o código feito em prisma.

<br>

> Voltando ao que importa, a relação entre tabelas, no **```schema.prisma```**, você vai criar um alias que referencia a uma model e depois usar o **```@relation()```** para criar essa relação.

```sql
  day     Day    @relation()
  habit   Habit  @relation()
```

> Onde:
<br><br>
> - 'day' e 'habit' são os alias,
<br>
> - 'Day' e 'Habit' são as Models (Tabelas)
<br>
> - @relation() são as relações (incompletas)

<br>

> Para completar essa relação de forma automática, devemos salvar o código com **```Ctrl```** + **```S```** e o prisma faz isso pra gente:

```sql
  day     Day    @relation(fields: [dayId], references: [id])
  habit   Habit  @relation(fields: [habitId], references: [id])
  dayId   String
  habitId String
```

> Ele cria já as chaves estrangeiras abaixo, mas como não estamos montando o padrão de camelCase, podemos alterar os nomes das chaves:

```sql
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

```sql
  dayHabits DayHabit[]
```

<br><hr><br>

### Visualizar o diagrama do banco de dados

> Para visualizar o banco de dados pelo navegador, iremos usar o Prisma ERD Generator.
<br><br>
> Vamos instalar as Dependências, que são os geradores de diagrama, primeiro:

```
  npm i -D prisma-erd-generator @mermaid-js/mermaid-cli
```

> Após isso, já no **```schema.prisma```**, vamos adicionar um trecho de código:

```prisma
  generator erd {
  provider = "prisma-erd-generator"
  }
```

> Depois, já no console, vamos dar o seguinte comando:

```
  npx prisma generate
```

> Ele vai instalar primeiro a Engine do Prisma e depois gera um SVG na pasta do prisma e podemos abrir ele no navegador e visualizar ele por lá através da opção "Open with Live Server".
<br><br>
> Dá para aplicar também, temas.

<br>

<div align="center">

### Mais Sobre [Prisma ERD Generator](https://www.npmjs.com/package/prisma-erd-generator)...

</div>

<br><hr><br>