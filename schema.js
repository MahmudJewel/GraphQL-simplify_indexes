var { graphql, buildSchema } = require('graphql');


// Construct a schema, using GraphQL schema language
var schema = buildSchema(`

type Space{
  id: ID!
  name:String
  rent: String
}

type Query {
  getSpace(id:ID!): Space
  get_all_spaces: [Space]
}

input SpaceInput{
  name:String 
  rent:String
}

type Mutation {
  addSpace(id:ID!, name:String, rent:String): Space!
  updateSpace(id:ID!, input:SpaceInput): Space!
}
`);

module.exports = schema;