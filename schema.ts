import { GraphQLObjectType, GraphQLSchema, GraphQLList, GraphQLBoolean, GraphQLString, GraphQLInt } from "graphql";

const TaskType = new GraphQLObjectType({
    name: 'Task',
    fields: {
        id: {type: GraphQLInt},
        task: {type: GraphQLString},
        checked: {type: GraphQLBoolean},
        closed: {type: GraphQLBoolean}
    }
});


const CategoryType = new GraphQLObjectType({
    name: 'Category',
    fields: {
        category: {type: GraphQLString},
        tasks: {type: new GraphQLList(TaskType)}
    }
})


const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        categories: {
            type: new GraphQLList(CategoryType),
            resolve(){
                return []
            }
        }
    }
})


const schema = new GraphQLSchema({
    query: RootQuery
});

export default schema;