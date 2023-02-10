import { TouchableOpacity, Dimensions, TouchableOpacityProps } from 'react-native'
import { generateProgressPercentage } from '../utils/generate-progress-percentage'

// Dias da semana
const weekDays = 7
// Padding Lateral da tela, (32 * 2) são as laterais e o 5 é para o espaçamento entre os elementos (Quadradinhos)
const screenHorizontalPadding = (32 * 2) / 5
// Espaçamento entre elementos (Quadradinhos)
export const dayMarginBetween = 8
// Tamanho (responsivo) dos elementos (quadradinhos)
export const daySize = Dimensions.get('screen').width / weekDays - (screenHorizontalPadding + 5)

interface Props extends TouchableOpacityProps {
	amountOfHabits?: number
	amountCompleted?: number
	date: Date
}

export function HabitDay({ amountOfHabits = 0, amountCompleted = 0, date, ...rest }: Props) {
	const amountAccomplishedPercentage =
		amountOfHabits > 0 ? generateProgressPercentage(amountOfHabits, amountCompleted) : 0

	return (
		<TouchableOpacity
			className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800"
			style={{ width: daySize, height: daySize }}
			activeOpacity={0.7}
			{...rest}
		/>
	)
}
