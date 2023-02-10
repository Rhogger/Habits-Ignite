// Importando o CSS
import './styles/global.css'

import './lib/dayjs'
// Importando o componente Habit da pasta 'components'
// import { Habit } from './components/Habit'

import { Header } from './components/Header'
import { SummaryTable } from './components/SummaryTable'

// Essa função é a aplicação
export function App() {
	return (
		// Se quiser saber o que cada classe faz, basta passar o mouse em cima.
		<div className="w-screen h-screen flex justify-center items-center">
			<div className="w-full max-w-5xl px-6 flex flex-col gap-16">
				<Header />
				<SummaryTable />
			</div>
		</div>
	)
}

export default App
