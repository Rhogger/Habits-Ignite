import { generateDatesFromYearsBeginning } from '../utils/generate-dates-from-years-beginning'
import { HabitDay } from './HabitDay'

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

const summaryDates = generateDatesFromYearsBeginning()

const minimumSummaryDatesSize = 18 * 7 // 18 semanas
const amountOfDaysToFill = minimumSummaryDatesSize - summaryDates.length

export function SummaryTable() {
	return (
		<div className="w-full flex ">
			<div className="grid grid-rows-7 grid-flow-row gap-3">
				{/* Usa o método .map() para percorrer o array e retornar o valor do array */}
				{weekDays.map((weekDays, i) => {
					return (
						<div
							// Interpolação do dia da semana - o index, assim irá resultar em um valor diferente de apenas 'S' ou 'Q', que repetem no array.
							key={`${weekDays} - ${i}`}
							className="text-zinc-400 font-bold text-xl h-10 w-10 flex items-center justify-center">
							{weekDays}
						</div>
					)
				})}
			</div>

			<div className="grid grid-rows-7 grid-flow-col gap-3">
				{summaryDates.map((date) => {
					return <HabitDay key={date.toString()} />
				})}

				{amountOfDaysToFill > 0 &&
					Array.from({ length: amountOfDaysToFill }).map((_, i) => {
						return (
							<div>
								<div
									key={i}
									className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"
								/>
							</div>
						)
					})}
			</div>
		</div>
	)
}
