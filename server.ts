import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import {buildSchema} from 'graphql';
import resolvers from './resolvers';
import schema from './schema';


const app = express();

app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        rootValue: resolvers,
        graphiql: true
    })
)

app.listen(4000, () => {
    console.log('server is running on port 4000');
})