const express = require('express');
const  models = require ('./users/models/index');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const bodyParser =require('body-parser');
const { ApolloServer, gql } = require('apollo-server-express');
const userRouter =require('./users/router/Users');
const authUser = require('./users/middleware/Auth');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;

models.sequelize.authenticate().then(() => console.log('Database connected ...'))
.catch((error)=> console.log(error))
app.use(express.json()) 

app.use('/api/users',userRouter)
app.use(authUser)  
app.use('/',(req,res,next) =>res.send("ok"));
//end insert pg
//chua hieu
const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });
//chua hieu

models.sequelize.sync().then(() => {
    app.listen(port)
})





// const userRouter = require("./users/router/router")
// const userRouter = require("./users/router/Users")
// //Database
// app.use(express.static('public'))
// app.use('/static', express.static(path.join(__dirname, 'public')))
// app.use(express.json())                                                 //use read req.body in stack
// app.use('/api/users',userRouter)
//end insert pg