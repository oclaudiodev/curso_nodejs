import mysql from 'mysql2/promise'

const conection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '59222502',
  database: 'curso_aluno'
})

console.log('Conexão com BD realizada!')

export { conection }