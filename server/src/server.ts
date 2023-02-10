// Importação para utilizar recursos do Fastify
import Fastify from 'fastify'
import cors from '@fastify/cors'
// Importação das rotas
import { appRoutes } from './routes'

// Cria a aplicação executando a função Fastify()
const app = Fastify()

// Cria a integração com o Front-End
app.register(cors)
// Posso configurar para apenas alguns endereços poderem consumir os dados do Back-End, bastamos utilizar o "origin: 'http://endereço/rota'"

// Cria a integração com rotas
app.register(appRoutes)

// Faz com que nossa aplicação se conecte através da porta passada por parâmetro (3333)
// O .then() faz com que execute aquela mensagem enquanto o servidor está sendo executado.
app
	.listen({
		port: 3333,
		host: '0.0.0.0',
	})
	.then(() => {
		console.log('HTTP Server Running')
	})
