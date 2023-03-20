import WebPush from 'web-push'
import { FastifyInstance } from 'fastify'
import { z } from 'zod'

const publicKEY =
	'BBId7Adv45M0vf2UvM-qmFpME-HphAkrO_NWaypz-vfXEBsg4JIZph1WjT17D0ht1lRhN8uQvrcup7eSwA3k1K0'
const privateKEY = 'dHRp271AP2bmY_k81D_6cKcBMpM_Q5N0zM-zSA0BR6c'

WebPush.setVapidDetails('http://localhost:3333', publicKEY, privateKEY)

export async function notificationRoutes(app: FastifyInstance) {
	app.get('/push/public_key', () => {
		return {
			publicKEY,
		}
	})

	app.post('/push/register', (request, reply) => {
		console.log(request.body)

		return reply.status(201).send()
	})

	app.post('/push/send', async (request, reply) => {
		const sendPushBody = z.object({
			subscription: z.object({
				endpoint: z.string(),
				keys: z.object({
					p256dh: z.string(),
					auth: z.string(),
				}),
			}),
		})

		const { subscription } = sendPushBody.parse(request.body)
		//FIXME: Essa string deve ser inserido no método abaixo como 2° parametro.
		const payload = 'Notificação Teste'

		try {
			const teste = await WebPush.sendNotification(subscription)
			console.log(teste.statusCode)
			reply.status(201).send()
		} catch (error) {
			reply.status(500).send({ error: 'Internal Server Error' })
		}
	})
}
