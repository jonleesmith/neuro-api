'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
*/

const { graphqlAdonis, graphiqlAdonis } = require("apollo-server-adonis");
const { makeExecutableSchema } = require("graphql-tools");
const Route = use('Route')
const Nuxt = use('Nuxt')

const books = [
  {
    title: "Harry Potter and the Sorcerer's stone",
    author: "J.K. Rowling"
  },
  {
    title: "Jurassic Park",
    author: "Michael Crichton"
  }
];

// The GraphQL schema in string form
const typeDefs = `
  type Query { books: [Book] }
  type Book { title: String, author: String }
`;

// The resolvers
const resolvers = {
  Query: { books: () => books }
};

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

// Setup the /graphiql route to show the GraphiQL UI
Route.get( '/graphiql', graphiqlAdonis({ endpointURL: '/graphql', }) );

Route.group(() => {

    // Authentication
    Route.post('auth/register', 'AuthController.register')
    Route.post('auth/login', 'AuthController.login')

}).prefix('v1')

Route.group(() => {

    Route.get('auth/me', 'AuthController.me');
    Route.post('auth/logout', 'AuthController.logout')

}).prefix('v1').middleware(['auth'])

Route.group(() => {

    Route.get('/collections', 'ElementController.index')
    Route.get('/collections/:collection', 'ElementController.show').middleware('rmb:Neuro/CollectionRepository,collection')


}).prefix('v1/:site').middleware([])
