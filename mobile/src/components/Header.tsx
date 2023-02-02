import { View, Text, TouchableOpacity } from 'react-native'

// Importação do SVG
import Logo from '../assets/logo.svg'
// importação de QUALQUER Ícone dentre várias Libs dentro dessa Vector-Icons
import { Feather } from '@expo/vector-icons'
// Importar as cores do Tailwind
import colors from 'tailwindcss/colors'

export function Header() {
	return (
		<View className="w-full flex-row items-center justify-between">
			<Logo />

			<TouchableOpacity
				className="flex-row h-11 px-4 border border-violet-500 rounded-lg items-center"
				activeOpacity={0.7}>
				<Feather
					name="plus"
					color={colors.violet[500]}
					size={20}
				/>
				<Text className="text-white ml-3 font-semibold text-base">Novo</Text>
			</TouchableOpacity>
		</View>
	)
}
