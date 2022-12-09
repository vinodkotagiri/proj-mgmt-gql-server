const express = require('express')
const colors = require('colors')
require('dotenv').config()
const connectDB = require('./config/db')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const PORT = process.env.PORT || 5000
const app = express()
connectDB()
app.use('/graphql', graphqlHTTP({ schema, graphiql: process.env.NODE_ENV === 'development' }))
app.listen(PORT, console.log('Server listening on port: ' + PORT))
