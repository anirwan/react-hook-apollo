const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

//allow cross-origin requests
app.use(cors())

mongoose.connect('mongodb+srv://admin:YaZ0Lh194ppxILkL@cluster0-qpd2y.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true })
mongoose.connection.once('open', () => {
    console.log('connected to mongo db')
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(4000, () => {
    console.log('listening for requests on port 4000')
})