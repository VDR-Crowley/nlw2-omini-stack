import express from 'express';
import cors from 'cors';
import routes from './routers';

const app = express();

app.use(cors());
app.use(express.json()); // Necessario para o reconhecimento do json
app.use(routes);


app.listen(3333);

// GET: Buscar ou listar uma informação
// POST: Criar alguns nova informação
// PUT: Atualizar uma informação existente
// DELETE: Deletar uma informação existente

// Corpo (Request Body): Dados para criação ou atualização de um registro
// Route Parans: Identificar qual recurso quero atualizar ou deletar
// Query Parans: Paginação, filtros, ordenação




//localhost:3333;