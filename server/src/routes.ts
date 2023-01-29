import { FastifyInstance } from "fastify"
import { z } from 'zod'
import { prisma } from "./lib/prisma"

// Função que contém todas as rotas do app
export async function appRoutes(app: FastifyInstance) {
  app.post('/habits', async (request) => {
    const createHabitBody = z.object({
      // Para fazer a propriedade ser obrigatória, definimos apenas o tipo
      title: z.string(),

      // Para criar a propriedade do tipo array que armazene números pre-definidos, definimos o tipo array para ela e definimos um mínimo com a função .min() e um máximo com a .max()
      weekDays: z.array(
        z.number().min(0).max(6)
      )
      //Para ela não ser obrigatória, poderíamos adicionar a função .nullable()
      // title: z.string().nullable()

    })

    // Dentro do request, conseguimos obter várias informações
    // Por exemplo: 
    // body - que é o corpo da requisição, onde buscamos informações quando criamos ou atualizamos recursos
    // params - que são os parâmetros na rota, usado pra identificar algum recurso (./habits/3), o parâmetro aqui é o N° 3
    // query - usado para paginações, filtros, etc (./habits?page=1)
    const { title, weekDays } = createHabitBody.parse(request.body)
    //Zod agora irá validar os dados dessa requisição

    // Criar um novo hábito
    await prisma.habit.create({
      data: {
        title,
        created_at: new Date(),
        weekDays: {
          // Percorre os dias da semana, e para cada dia da semana vou retornar um objeto com as informações que quero inserir
          create: weekDays.map(weekDay => {
            return {
              week_day: weekDay,
            }
          })
        }
      }
    })
  })
}