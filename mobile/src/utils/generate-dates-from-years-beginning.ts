import dayjs from 'dayjs'

// Essa função gera os dias desde o começo do ano
export function generateDatesFromYearsBeginning() {
	const firstDayOfYear = dayjs().startOf('year')

	const today = new Date()

	// Array que contém todas as datas que sejam igual ao today
	const dates = []

	let compareDate = firstDayOfYear

	// Faz a verificação para que as datas do array dates sejam menores ou iguais a today
	while (compareDate.isBefore(today)) {
		// Adciona a data válida para o array
		dates.push(compareDate.toDate())
		//acrescenta 1 dia ao incremento (var)
		compareDate = compareDate.add(1, 'day')
	}

	return dates
}
