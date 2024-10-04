
import { fastify } from 'fastify';
import cors from '@fastify/cors';
import { DatabasePostgres } from './database-postgres.js';

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
        let error = {};
        if(!body.name){
            error.name = 'Valor name não foi informado.'
    
        } if (!body.endereco){
            error.endereco = 'Valor endereço não foi informado.'
        }
     if (!body.complemento){
        error.complemento = 'Valor complemento não foi informado.'
         }
         if (!body.descricao){
    error.descricao = 'Valor descrição não foi informado.'
        }

    if(body.name && body.endereco){
        await databasePostgres.createPonto(body);
        return reply.status(201).send();

    }else{
        return reply.status(400).send(error);

    }
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
  

    let error = {};

    if(!body.name){
        error.name = 'Valor name não foi informado.'

    } if (!body.endereco){
        error.endereco = 'Valor endereço não foi informado.'
    }
    if (!body.complemento){
    error.complemento = 'Valor complemento não foi informado.'
     }
     if (!pontoID){
        error.complemento = 'Valor ID não foi informado.'
         }
     if (!body.descricao){
error.descricao = 'Valor descrição não foi informado.'
    }
    if(body.name && body.endereco && pontoID){
        await databasePostgres.updatePonto(pontoID, body);
        return reply.status(201).send();

    }else{
        return reply.status(400).send(error);

    }
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
