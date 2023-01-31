import { HabitDay } from './HabitDay'

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

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
				<HabitDay />
				<HabitDay />
				<HabitDay />
				<HabitDay />
				<HabitDay />
				<HabitDay />
				<HabitDay />
				<HabitDay />
				<HabitDay />
				<HabitDay />
				<HabitDay />
				<HabitDay />
				<HabitDay />
				<HabitDay />
				<HabitDay />
				<HabitDay />
				<HabitDay />
				<HabitDay />
				<HabitDay />
				<HabitDay />
				<HabitDay />
				<HabitDay />
				<HabitDay />
				<HabitDay />
				<HabitDay />
				<HabitDay />
				<HabitDay />
				<HabitDay />
				<HabitDay />
				<HabitDay />
				<HabitDay />
				<HabitDay />
				<HabitDay />
				<HabitDay />
				<HabitDay />
				<HabitDay />
				<HabitDay />
				<HabitDay />
				<HabitDay />
				<HabitDay />
				<HabitDay />
				<HabitDay />
				<HabitDay />
				<HabitDay />
				<HabitDay />
				<HabitDay />
				<HabitDay />
				<HabitDay />
				<HabitDay />
				<HabitDay />
				<HabitDay />
				<HabitDay />
				<HabitDay />
				<HabitDay />
				<HabitDay />
				<HabitDay />
			</div>
		</div>
	)
}
