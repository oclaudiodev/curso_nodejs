import express from 'express';

const servidor = express();


servidor.listen(5001, () =>console.log('----> API SUBIU COM SUCESSO!!! <----'))