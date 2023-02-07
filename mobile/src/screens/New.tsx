import { useState } from 'react'
import { ScrollView, View, Text, TextInput } from 'react-native'
import { BackButton } from '../components/BackButton'
import { Checkbox } from '../components/Checkbox'

const avaiableWeekDays = [
	'Domingo',
	'Segunda-Feira',
	'Terça-Feira',
	'Quarta-Feira',
	'Quinta-Feira',
	'Sexta-Feira',
	'Sábado',
]

export function New() {
	// Estado do tipo vetores de Números
	// weekDays é o nome do Estado
	// setWeekDays é a alteração do Estado
	const [weekDays, setWeekDays] = useState<number[]>([])

	// Função que faz a marcação e desmarcação do checkbox
	function handleToggleWeekDay(weekDayIndex: number) {
		// Desmarcar
		if (weekDays.includes(weekDayIndex)) {
			setWeekDays((prevState) => prevState.filter((weekDays) => weekDays !== weekDayIndex))
			// Marcar
		} else {
			setWeekDays((prevState) => [...prevState, weekDayIndex])
		}
	}

	return (
		<View className="flex-1 bg-background px-8 pt-16">
			<ScrollView showsVerticalScrollIndicator={false}>
				<BackButton />

				<Text className="mt-6 text-white font-extrabold text-3xl">Criar Hábito</Text>

				<Text className="mt-6 text-white font-semibold text-base">Qual seu comprometimento?</Text>

				<TextInput className="h-12 pl-4 rounded-lg mt-3 bg-zinc-300 text-white focus:border-2 focus:border-green-600" />

				<Text className="font-semibold mt-4 mb-3 text-white text-base">Qual a recorrência?</Text>

				{avaiableWeekDays.map((weekDay, index) => (
					<Checkbox
						key={weekDay}
						title={weekDay}
						checked={weekDays.includes(index)}
						onPress={() => handleToggleWeekDay(index)}
					/>
				))}
			</ScrollView>
		</View>
	)
}
