"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const data_1 = require("./data");
const TaskType = new graphql_1.GraphQLObjectType({
    name: 'Task',
    fields: {
        id: { type: graphql_1.GraphQLInt },
        task: { type: graphql_1.GraphQLString },
        checked: { type: graphql_1.GraphQLBoolean },
        closed: { type: graphql_1.GraphQLBoolean }
    }
});
const CategoryType = new graphql_1.GraphQLObjectType({
    name: 'Category',
    fields: {
        category: { type: graphql_1.GraphQLString },
        tasks: { type: new graphql_1.GraphQLList(TaskType) }
    }
});
const RootQuery = new graphql_1.GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        categories: {
            type: new graphql_1.GraphQLList(CategoryType),
            resolve() {
                return data_1.data;
            }
        }
    }
});
const RootMutation = new graphql_1.GraphQLObjectType({
    name: 'RootMutation',
    fields: {
        updateTask: {
            type: TaskType,
            args: {
                id: { type: graphql_1.GraphQLInt },
                checked: { type: graphql_1.GraphQLBoolean },
                closed: { type: graphql_1.GraphQLBoolean },
            },
            resolve(parent, args) {
            }
        }
    }
});
const schema = new graphql_1.GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
});
exports.default = schema;
