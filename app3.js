import { listarCursos, inserirCurso } from './cursoRepository.js';

import express from 'express'
const api = express();
api.use(express.json()); // permite o uso de BODY

api.get('/curso', async(req,resp)=>{
    let registros = await listarCursos();
    resp.send(registros);
})

api.post('/curso', async (req,resp)=>{
    let novoCurso= req.body;

    let id = await inserirCurso(novoCurso);
    resp.send({novoId:id});
})

api.listen(5010, () => console.log('API subiu com sucesso!'));