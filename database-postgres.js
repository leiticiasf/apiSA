import { randomUUID } from "crypto";
import { sql } from './db.js';

export class DatabasePostgres { 
  async listPontoDeColeta() {
    const pontoDeColeta = await sql`select * from pontoDeColeta`;
    return pontoDeColeta;
  }


  async createPonto(ponto) {
    const id = randomUUID();
    const { name, descricao, complemento, endereco  } = ponto;

    await sql`insert into pontoDeColeta (id, name, endereco, descricao, complemento) 
              values (${id}, ${name}, ${endereco}, ${descricao}, ${complemento})`;
  }

  async updatePonto(id, ponto) {
    const { name, endereco, descricao, complemento } = ponto;

    await sql`update pontoDeColeta set 
    name = ${name},
    endereco = ${endereco},
    descricao = ${descricao},
    complemento = ${complemento}
    where id = ${id}
`;

  }

  async deletePonto(id) {
    await sql`delete from pontoDeColeta where id = ${id}`

  }

}