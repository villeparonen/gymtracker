const express = require("express");
const { ApolloServer, gql, UserInputError } = require('apollo-server-express');

const app = express();
const uuid = require('uuid/v1');

let persons = [
    {
        name: "Arto Hellas",
        phone: "040-123543",
        street: "Tapiolankatu 5 A",
        city: "Espoo",
        id: "3d594650-3436-11e9-bc57-8b80ba54c431"
    },
    {
        name: "Matti Luukkainen",
        phone: "040-432342",
        street: "Malminkaari 10 A",
        city: "Helsinki",
        id: '3d599470-3436-11e9-bc57-8b80ba54c431'
    },
    {
        name: "Venla Ruuska",
        street: "Nallemäentie 22 C",
        city: "Helsinki",
        id: '3d599471-3436-11e9-bc57-8b80ba54c431'
    },
];

const typeDefs = gql`
    type Address {
        street: String!
        city: String!
    }

type Person {
    name: String!
    phone: String
    address: Address!
    id: ID!
  }

  type Query {
    personCount: Int!
    allPersons: [Person!]!
    findPerson(name: String!): Person
  }

  type Mutation {
    addPerson(
      name: String!
      phone: String
      street: String!
      city: String!
    ): Person
    editNumber(
        name: String!
        phone: String!
      ): Person
  }

`;

// Mutaatio siis saa parametreina käyttäjän tiedot. 
// Parametreista phone on ainoa, jolle ei ole pakko asettaa arvoa. 
// Mutaatioilla on parametrien lisäksi paluuarvo. 
// Paluuarvo on nyt tyyppiä Person, 
// ideana on palauttaa operaation onnistuessa lisätyn henkilön tiedot 
// ja muussa tapauksessa null. Mutaatiossa ei anneta parametrina kentän id arvoa, 
// sen luominen on parempi jättää palvelimen vastuulle.
// -------
// resolvers are used to return data for fields from the schema. 
// The data source doesn’t matter, because the data can be hardcoded, 
// can come from a database, or from another (RESTful) API endpoint.

const resolvers = {
    Query: {
        personCount: () => persons.length,
        allPersons: () => persons,
        findPerson: (root, args) =>
            persons.find(p => p.name === args.name)
        // args sisältää kyselyn parametrit.. ARGS = kyselyt.
        // Ensimmäisenä olevaa parametria root resolveri ei tarvitse.
    },

    Person: {
        address: (root) => {
          return { 
            street: root.street,
            city: root.city
          };
        }
      },

    // Mutaatio siis lisää parametreina args saamansa olion taulukkoon persons ja palauttaa lisätyn olion.
    // Kentälle id saadaan luotua uniikki tunniste kirjaston uuid avulla.

      Mutation: {
        addPerson: (root, args) => {
          if (persons.find(p => p.name === args.name)) {
            throw new UserInputError('Name must be unique', {
              invalidArgs: args.name,
            });
          }

          // Apollo server provides a couple predefined errors, 
          // including AuthenticationError, ForbiddenError, UserInputError and a generic ApolloError
          // https://www.apollographql.com/docs/apollo-server/features/errors
    
          const person = { ...args, id: uuid() };
          persons = persons.concat(person);
          return person;
        },

        editNumber: (root, args) => {
            const person = persons.find(p => p.name === args.name);
            if (!person) {
              return null;
            }
        
            const updatedPerson = { ...person, phone: args.phone };
            persons = persons.map(p => p.name === args.name ? updatedPerson : p);
            return updatedPerson;
          }   

    }

    // Mutaatio: Lisää olio ...

    // mutation {
    //     addPerson(
    //       name: "Pekka Mikkola"
    //       phone: "045-2374321"
    //       street: "Vilppulantie 25"
    //       city: "Helsinki"
    //     ) {
    //       name
    //       phone
    //       address{
    //         city
    //         street
    //       }
    //       id
    //     }
    //   }

    // KOVAKOODAA tietty vastaus
    // Person: {
    //     street: (root) => "Manhattan",
    //     city: (root) => "New York"
    //   }
      // Esimerkki kuinka kovakoodata joku tietty sisältö (Manhattan yms) oliolle

};

// ApolloServer saa kaksi parametria:
// 1. typeDefs sisältää sovelluksen käyttämän GraphQL skeeman
// 2. Resolvers on olio, joka sisältää koodin, joka
// määrittelee miten graphQL kyselyihin vastataan. 

const server = new ApolloServer({
    typeDefs,   // skeema
    resolvers,  // määritys Miten kyselyihin vastataan
});

// Using Apollo Server’s applyMiddleware() method, you can opt-in any middleware,
// which in this case is Express. 
// Also, you can specify the path for your GraphQL API endpoint
server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 8000 }, () => {
    console.log('Apollo Server on http://localhost:8000/graphql');
});
