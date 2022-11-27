
// ******************* start for GraphiQL=GUI *******************
var express = require('express');
var { graphqlHTTP } = require('express-graphql');
// ******************* end for GraphiQL *******************
// const userData = require('./user.json');

// schema 
const schema = require('./schema.js');

// resolver function 
const root = require('./resolver.js');


// ******************* start for GraphiQL=GUI *******************
var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(4000);
// ******************* End for GraphiQL *******************





// Run the GraphQL query '{ hello }' and print out the response
// graphql({
//   schema,
//   source: '{name, email }',
//   rootValue
// }).then((response) => {
//   console.log(response);
// });




