// Config do DayJs
import './src/lib/dayjs'

// Importando algumas APIs e Components que o React Native irá usar na aplicação
import { StatusBar } from 'react-native'
// Importando as fontes da API
import {
	useFonts,
	Inter_400Regular,
	Inter_600SemiBold,
	Inter_700Bold,
	Inter_800ExtraBold,
} from '@expo-google-fonts/inter'

// Components
import { Loading } from './src/components/Loading'

import { Routes } from './src/routes'

// Essa função é a nossa aplicação
export default function App() {
	// Importando as fontes para a aplicação
	// fontsLoaded é um valor boolean que nos diz se o valor já está carregado ou não na aplicação.
	// useFonts é um Hook
	const [fontsLoaded] = useFonts({
		Inter_400Regular,
		Inter_600SemiBold,
		Inter_700Bold,
		Inter_800ExtraBold,
	})

	// Se as fontes não forem carregadas, é retornado o componente Loading, que é o Loader do React Native
	if (!fontsLoaded) {
		return <Loading />
	}

	return (
		// A View possui a prop "style" que recebe Objetos
		// <> é o Framgment, serve para encapsular elementos, usamos isso aqui pois o Native só pode retornar um elemento, aí usamos do Fragment para agrupar tudo e retornar ele mesmo
		<>
			<Routes />
			{/* A StatusBar agora tem seu conteúdo como preto (dark) devido a prop barStyle, o background da StatusBar é transparente e a prop translucent faz com que a StatusBar fique amostra na aplicação e flutuando sobre ela.   */}
			<StatusBar
				barStyle="light-content"
				backgroundColor="transparent"
				translucent
			/>
		</>
	)
}

// Devido a API StyleSheet, podemos estilizar os elementos React Native com uma sintaxe muito próxima ao CSS. O que muda é que não utilizamos o hífen (-) e sim o CamelCase e os valores em String.
// const styles = StyleSheet.create({
// 	container: {
// 		// No react Native o FlexBox é ativo por padrão
// 		flex: 1,
// 		backgroundColor: '#09090A',
// 		alignItems: 'center',
// 		justifyContent: 'center',
// 	},
// 	text: {
// 		color: '#7C3AED',
// 		fontFamily: 'Inter_800ExtraBold',
// 	},
// })
