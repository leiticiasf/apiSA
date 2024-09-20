
import { fastify } from 'fastify'
import cors from '@fastify/cors'
import { DatabasePostgres } from './database-postgres.js'

const server = fastify();
const databasePostgres = new DatabasePostgres;

// CORS
server.register(cors, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
})

// ENDPOINTS (CRUD):

// CREATE
server.post('/pontoDeColeta', async (request, reply) => {
    const body = request.body;
    await databasePostgres.createPonto(body);
    return reply.status(201).send();
})

// READE
server.get('/pontoDeColeta', async () => {
    const pontoDeColeta = await databasePostgres.listPontoDeColeta();
    return pontoDeColeta;
});

// UPDATE
server.put('/pontoDeColeta/:id', async (request, reply) => {
    const pontoID = request.params.id;
    const body = request.body;
    await databasePostgres.updatePonto(pontoID, body);

    return reply.status(204).send();
})

// DELETE
server.delete('/pontoDeColeta/:id', async (request, reply) => {
    const pontoID = request.params.id;
    await databasePostgres.deletePonto(pontoID);

    return reply.status(204).send();
})


server.listen({
    port: 3333
});
