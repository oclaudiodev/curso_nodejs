import 'dotenv/config.js'
import express from 'express';
import cors from 'cors'

import adicionarRotas from './rotas.js';

const servidor = express();
servidor.use(express.json());
servidor.use(cors())

//adiciona as rotas
adicionarRotas(servidor)



const PORTA = process.env.PORTA;

servidor.listen(
    PORTA,
    () =>console.log(`----> API SUBIU COM SUCESSO NA PORTA ${PORTA}!!!  <----`))