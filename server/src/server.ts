import Fastify from 'fastify'
import cors from '@fastify/cors'
import { appRoues } from './routes'

const app = Fastify()

app.register(cors)
app.register(appRoues)

app.listen({
    port: 3333,
}).then(() => {
    console.log('Server listening on port 3333')
})