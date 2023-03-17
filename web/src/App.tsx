// Importando o CSS
import './styles/global.css'
import './lib/dayjs'
import { Header } from './components/Header'
import { SummaryTable } from './components/SummaryTable'
import { api } from './lib/axios'

navigator.serviceWorker
	.register('service-worker.js')
	.then(async (serviceWorker) => {
		let subscription = await serviceWorker.pushManager.getSubscription()

		if (!subscription) {
			const publicKeyResponse = await api.get('push/public_key')

			subscription = await serviceWorker.pushManager.subscribe({
				userVisibleOnly: true,
				applicationServerKey: publicKeyResponse.data.publicKEY,
			})
		}

		console.log(subscription)

		await api.post('/push/register', {
			subscription,
		})

		await api.post('/push/send', {
			subscription,
		})
	})
	.catch((error) => {
		console.log(error)
	})

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
