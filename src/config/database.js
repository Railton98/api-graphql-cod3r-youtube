const knexfile = require('../knexfile')

const knex = require('knex')(knexfile)

module.exports = knex

// knex('users').insert({
//     name: 'Teste',
//     email: 'teste@email.com',
//     password: '123'
// }).then((data) => console.log(data))

// knex('users').select('*').then(res => console.log(res))
