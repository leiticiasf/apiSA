import { sql } from "./db.js";

export class Database{  //export significa que a classe é publica 

        async create(pontoDeColeta){
            const id = 10;
            const nome = pontoDeColeta.nome; //const sao variaveis que nunca tem seu valor alterado
            const endereco = pontoDeColeta.endereco;
            const complemento = pontoDeColeta.complemento;
            const descricao = pontoDeColeta.descricao;

            await sql`insert into artigos(id, nome, endereco, complemento, descricao) 
            values(${id},${nome}, ${endereco}, ${complemento}, ${descricao} )` //string js 
        }

} 