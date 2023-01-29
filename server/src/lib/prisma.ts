// Esse arquivo foi criado para separar as configurações do prisma do server.ts

// Importação dentro do Prisma o Client
import { PrismaClient } from '@prisma/client'

// Estabelece a conexão com o banco de dados
export const prisma = new PrismaClient({
  // Mostrar todas as queries que são feitas no banco
  log: ['query']
})
// Nossa aplicação seguirá as proprias convenções do HTTP
// Métodos HTTP:
// - Get : Trazer informações
// - Post : Criar alguma coisa
// - Put : Atualizar algum recurso por completo
// - Patch : Atualizar alguma informação específica de algum recurso
// - Delete : Deletar algum recurso