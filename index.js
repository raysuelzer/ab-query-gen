require('graphql-import-node');
const typeDefs = require('./ab_schema.graphql');
const makeExecutableSchema = require('graphql-tools').makeExecutableSchema;

const { generateAll, generateQuery } =  require('gql-generator-node');

const schema = makeExecutableSchema({ typeDefs });

// const {queries, mutations} = generateAll(schema, 4, ({args})=>{
//   const o = {};
//   (args || []).forEach(arg=>{
//       o[arg.name] = arg;
//   });
//   return o;
// });


const query = generateQuery({
  field: schema
      .getQueryType()
      .getFields().getEntity,
  depthLimit: 8
})

// Write the file someplace
require("fs").writeFile("getEntity.gql", query , (err) => {})
