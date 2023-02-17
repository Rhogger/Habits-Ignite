import { PrismaClient } from '@prisma/client'

// Essa linha faz a conexão com o banco de dados
const prisma = new PrismaClient()

// id e data dos 3 hábitos teste
const firstHabitId = '0730ffac-d039-4194-9571-01aa2aa0efbd'
const firstHabitCreationDate = new Date('2022-12-31T03:00:00.000')

const secondHabitId = '00880d75-a933-4fef-94ab-e05744435297'
const secondHabitCreationDate = new Date('2023-01-03T03:00:00.000')

const thirdHabitId = 'fa1a1bcf-3d87-4626-8c0d-d7fd1255ac00'
const thirdHabitCreationDate = new Date('2023-01-08T03:00:00.000')

async function run() {
	// Deleta tudo antes de rodar o seed novamente para não gerar dados repetidos
	await prisma.habit.deleteMany()
	await prisma.day.deleteMany()

	// Cria os hábitos
	await Promise.all([
		prisma.habit.create({
			data: {
				id: firstHabitId,
				title: 'Beber 2L água',
				created_at: firstHabitCreationDate,
				// Atribuindo dados na relação (weekDays), que é quais os dias da semana ele estará disponível
				weekDays: {
					create: [{ week_day: 1 }, { week_day: 2 }, { week_day: 3 }],
				},
			},
		}),

		prisma.habit.create({
			data: {
				id: secondHabitId,
				title: 'Exercitar',
				created_at: secondHabitCreationDate,
				weekDays: {
					create: [{ week_day: 3 }, { week_day: 4 }, { week_day: 5 }],
				},
			},
		}),

		prisma.habit.create({
			data: {
				id: thirdHabitId,
				title: 'Dormir 8h',
				created_at: thirdHabitCreationDate,
				weekDays: {
					create: [
						{ week_day: 1 },
						{ week_day: 2 },
						{ week_day: 3 },
						{ week_day: 4 },
						{ week_day: 5 },
					],
				},
			},
		}),
	])

	await Promise.all([
		// Cria os hábitos já concluídos (1/1)
		prisma.day.create({
			data: {
				/** Segunda */
				date: new Date('2023-01-02T03:00:00.000z'),
				dayHabits: {
					create: {
						habit_id: firstHabitId,
					},
				},
			},
		}),

		// Cria os hábitos já concluídos (1/1)
		prisma.day.create({
			data: {
				/** Friday */
				date: new Date('2023-01-06T03:00:00.000z'),
				dayHabits: {
					create: {
						habit_id: secondHabitId,
					},
				},
			},
		}),

		// Cria os hábitos já concluídos (2/2)
		prisma.day.create({
			data: {
				/** Wednesday */
				date: new Date('2023-01-04T03:00:00.000z'),
				dayHabits: {
					create: [{ habit_id: firstHabitId }, { habit_id: secondHabitId }],
				},
			},
		}),
	])
}

// Roda a função run()
run()
	// Quando a função finalizar a execução, desconectamos do banco
	.then(async () => {
		await prisma.$disconnect()
	})
	// Se der algum erro, mostro o que deu de erro e desconecto do banco
	.catch(async (e) => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
