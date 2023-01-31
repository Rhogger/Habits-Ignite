import { View } from 'react-native'

// Importação do SVG
import Logo from '../assets/logo.svg'
// importação de QUALQUER Ícone dentre várias Libs dentro dessa Vector-Icons
import {} from '@expo/vector-icons'

export function Header() {
	return (
		<View className="w-full flex-row items-center justify-between">
			<Logo />
		</View>
	)
}
