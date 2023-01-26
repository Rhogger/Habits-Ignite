// Importação para utilizar recursos do Fastify
import Fastify from "fastify";

import cors from '@fastify/cors'
// Importação dentro do Prisma o Client
import { PrismaClient } from '@prisma/client'

// Cria a aplicação executando a função Fastify()
const app = Fastify()

// Estabelece a conexão com o banco de dados
const prisma = new PrismaClient()
// Nossa aplicação seguirá as proprias convenções do HTTP
// Métodos HTTP:
// - Get : Trazer informações
// - Post : Criar alguma coisa
// - Put : Atualizar algum recurso por completo
// - Patch : Atualizar alguma informação específica de algum recurso
// - Delete : Deletar algum recurso

// Cria a integração com o Front-End
app.register(cors)
// Posso configurar para apenas alguns endereços poderem consumir os dados do Back-End, bastamos utilizar o "origin: 'http://endereço/rota'"

// Cria uma rota, localizada no http://localhost:3333/ onde:
// 1° parâmetro é a rota, que no caso não é destinado a nenhum lugar (padrão)
// 2° parâmetro é a função que irá rodar nessa rota
app.get('/', async () =>{
  // Dentro dessa rota consigo acessar o banco, na tabela habits e procurar por alguns dados 
  // A cada parâmetro passado na função eu teclar Ctrl + Space, a linguagem da uma sugestão do que podemos usar como parâmetro.
  const habits = await prisma.habit.findMany({
    // Se eu aperto Ctrl + Space aqui, consigo ver as operações que consigo fazer dentro do banco na tabela habits

    // Aqui estou buscando na tabela habits, a coluna title que começa com 'Beber'
    // where: {
    //   title: {
    //     startsWith: 'Beber'
    //   }
    // }

    // Se eu quiser que essa função retorne todos os dados, basta retirar a consulta com o where (comentei).
  })

  // Essa função irá retornar uma promise (no JS), se eu quiser aguardar a busca dos dados ser finalizada antes de retornar os dados pro Front End, precisa usar o await na promessa que temos que esperar a sua finalização, e para usar o await, é necessário deixar a função assíncrona com o async
  return habits
  // O bom do prisma é que ele já valida os dados antes mesmo de fazer a migração e acontecer qualquer erro, ele valida se estamos utilizando operações válidas com dados válidos.
})

// Faz com que nossa aplicação se conecte através da porta passada por parâmetro (3333)
// O .then() faz com que execute aquela mensagem enquanto o servidor está sendo executado.
app.listen({
  port: 3333,
}).then(() => {
  console.log('HTTP Server Running');
})