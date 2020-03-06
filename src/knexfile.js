// Update with your config settings.
const { password } = require('./.env')

module.exports = {
  client: 'mysql',
  connection: {
    database: 'graphql',
    user: 'graphql',
    password
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
