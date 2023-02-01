import dayjs from 'dayjs'
import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from './lib/prisma'

// Função que contém todas as rotas do app
export async function appRoutes(app: FastifyInstance) {
	app.post('/habits', async (request) => {
		const createHabitBody = z.object({
			// Para fazer a propriedade ser obrigatória, definimos apenas o tipo
			title: z.string(),

			// Para criar a propriedade do tipo array que armazene números pre-definidos, definimos o tipo array para ela e definimos um mínimo com a função .min() e um máximo com a .max()
			weekDays: z.array(z.number().min(0).max(6)),
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

		// Criando a data do hoje
		// .startOf() zera as horas, minutos e segundos
		// .toDate() retorna um tipo date do próprio JS
		const today = dayjs().startOf('day').toDate()

		// Criar um novo hábito
		await prisma.habit.create({
			data: {
				title,
				created_at: today,
				weekDays: {
					// Percorre os dias da semana, e para cada dia da semana vou retornar um objeto com as informações que quero inserir
					create: weekDays.map((weekDay) => {
						return {
							week_day: weekDay,
						}
					}),
				},
			},
		})
	})

	// Rota para buscar um dia específico
	app.get('/day', async (request) => {
		// Faz com que os parâmetros sejam do tipo date, porém convertido para String
		const getDayParams = z.object({
			date: z.coerce.date(),
		})

		// Recebe os parâmetros da rota (localhost:3333/day?date=2023-01-29T00)
		const { date } = getDayParams.parse(request.query)
		// FIXME: Requisição nao retorna nada se o horário não for diferente de 00:00:00:000z
		const parsedDate = dayjs(date).startOf('day')

		// Recebe o dia da semana em Int
		const weekDay = parsedDate.get('day')

		// Buscar todos os hábitos possíveis no dia selecionado
		const possibleHabits = await prisma.habit.findMany({
			where: {
				// Buscar uma data de criação que seja menor ou igual
				created_at: {
					lte: date,
				},
				// Buscar hábitos onde tenha algum dia da semana que preenche os requisitos
				weekDays: {
					some: {
						week_day: weekDay,
					},
				},
			},
		})

		// Buscar informações do dia
		const day = await prisma.day.findUnique({
			where: {
				date: parsedDate.toDate(),
			},
			include: {
				dayHabits: true,
			},
		})

		// Varável que recebe o dia em que o hábito foi completado, caso não existir (null) (? verifica se é nulo), ele retorna os id's dos hábitos que foram completados na model dayHabits
		const completedHabits = day?.dayHabits.map((dayHabit) => {
			return dayHabit.habit_id
		})

		return {
			possibleHabits,
			completedHabits,
		}
	})
}

// Rota para completar e reverter ação

// Rota que retorna todos os hábitos em tabela
