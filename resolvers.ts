import {data} from './data';

const resolvers = {
    Query: { 
        categories: () => data
    }
}


export default resolvers