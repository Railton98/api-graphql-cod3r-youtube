const db = require('../config/database')

module.exports = {
    Query: {
        // getUser = async (_, { id }) => await db('users').where({ id })
        async getUser(_, { id }) {
            return await db('users').where({ id })
        },
        async getUsers() {
            return await db('users')
        }
    },
    Mutation: {
        async createUser(_, { input }) {
            const result = await db('users').insert({
                name: input.name,
                email: input.email,
                password: input.password
            })

            const id = result[0]
            return await db('users').where({ id }).first()
        }
    }
}
