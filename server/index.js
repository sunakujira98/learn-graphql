const express = require('express');
const path = require('path')
require('dotenv').config({path: path.resolve(__dirname, '.env')});
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const connectDB = require('./config/db')
const port = process.env.PORT || 5000;

const app = express();

// Connect to database
connectDB()

app.use(
  '/graphql', 
  graphqlHTTP({
    schema,
    graphiql: true
  })
)

app.listen(port, console.log(`Server running on port ${port}`))



