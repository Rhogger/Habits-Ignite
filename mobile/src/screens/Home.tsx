import { View, Text, ScrollView } from 'react-native'

// Components
import { HabitDay, daySize } from '../components/HabitDay'
import { Header } from '../components/Header'

import { generateDatesFromYearsBeginning } from '../utils/generate-dates-from-years-beginning'

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
const datesFromYearStart = generateDatesFromYearsBeginning()
const minimumSummaryDatesSizes = 18 * 6
const amountOfDaysToFill = minimumSummaryDatesSizes - datesFromYearStart.length

export function Home() {
	return (
		<View className="flex-1 bg-background px-8 pt-16">
			<Header />
			<View className="flex-row mt-6 mb-2">
				{weekDays.map((weekDays, i) => (
					<Text
						key={`${weekDays} - ${i}`}
						className="text-zinc-400 text-xl font-bold text-center mx-1"
						style={{ width: daySize, height: daySize }}>
						{weekDays}
					</Text>
				))}
			</View>

			<ScrollView>
				<View className="flex-row flex-wrap">
					{datesFromYearStart.map((date) => (
						<HabitDay key={date.toISOString()} />
					))}

					{amountOfDaysToFill > 0 &&
						Array.from({ length: amountOfDaysToFill }).map((_, i) => (
							<View
								className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40"
								style={{ width: daySize, height: daySize }}
							/>
						))}
				</View>
			</ScrollView>
		</View>
	)
}
