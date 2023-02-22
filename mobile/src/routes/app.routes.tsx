import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Navigator para criar o escopo da rota e o Screen definir onde cada rota será renderizada
const { Navigator, Screen } = createNativeStackNavigator()

// Importando as telas
import { Home } from '../screens/Home'
import { Habit } from '../screens/Habit'
import { New } from '../screens/New'

export function AppRoutes() {
	return (
		<Navigator screenOptions={{ headerShown: false }}>
			<Screen
				name="home"
				component={Home}
			/>

			<Screen
				name="new"
				component={New}
			/>

			<Screen
				name="habit"
				component={Habit}
			/>
		</Navigator>
	)
}
