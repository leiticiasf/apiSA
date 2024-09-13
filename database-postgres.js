import { randomUUID } from "crypto";
import { sql } from './db.js';

export class DatabasePostgres { 

  async createPontoDeColeta(PontoDeColeta) {
    const artigoID = randomUUID();
    // const artigoID = 1;
    const { nome, descricao, conteudo, imagem, github } = artigo;

    await sql`insert into artigos (id, nome, descricao, conteudo, imagem, github) 
              values (${artigoID}, ${nome}, ${descricao}, ${conteudo}, ${imagem}, ${github})`;
  }

  async updatePontoDeColeta(id, pontoDeColeta) {
     
  }

  async deletePontoDeColeta(id) {
     
  }

}