import { sql } from './db.js'

sql`
  CREATE TABLE pontoDeColeta (
      id text PRIMARY KEY,
      name character varying(255),
      endereco character varying(255),
      complemento character varying(255),
      descricao character varying(255)
  );
`.then(() => {
  console.log('tabela criada');
})