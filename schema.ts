import { GraphQLObjectType, GraphQLSchema, GraphQLList, GraphQLBoolean, GraphQLString, GraphQLInt } from "graphql";
import { data } from "./data";

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
                return data
            }
        }
    }
})

const RootMutation = new GraphQLObjectType({
    name: 'RootMutation',
    fields: {
        updateTask: {
            type: TaskType,
            args: {
                id: {type: GraphQLInt},
                checked: {type: GraphQLBoolean},
                closed: {type: GraphQLBoolean},
            },
            resolve(parent, args){
                const {id, checked, closed} = args;
                const taskToUpdate = findTaskById(id);

                if(!taskToUpdate){
                    throw new Error(`Task with ID ${id} not found`)
                }
                console.log('hello')
                taskToUpdate.checked = checked;
                taskToUpdate.closed = closed;
                return taskToUpdate;
            }
        }
    }
})

function findTaskById(id: number) {
    for (const category of data) {
      const task = category.tasks.find((task) => task.id === id);
      if (task) {
        return task;
      }
    }
    return null; // Task not found
  }

const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
});

export default schema;