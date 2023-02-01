import { TouchableOpacity, Dimensions } from 'react-native'

// Dias da semana
const weekDays = 7
// Padding Lateral da tela, (32 * 2) são as laterais e o 5 é para o espaçamento entre os elementos (Quadradinhos)
const screenHorizontalPadding = (32 * 2) / 5
// Espaçamento entre elementos (Quadradinhos)
export const dayMarginBetween = 8
// Tamanho (responsivo) dos elementos (quadradinhos)
export const daySize = Dimensions.get('screen').width / weekDays - (screenHorizontalPadding + 5)

export function HabitDay() {
	return (
		<TouchableOpacity
			className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800"
			style={{ width: daySize, height: daySize }}
		/>
	)
}
