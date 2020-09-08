import { ApolloServer, gql } from "apollo-server";
import { Book, Resolvers } from "./types/generated/graphql";

import { test } from "src/test";

const books: Book[] = [
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
  },
  {
    title: "Jurassic Park",
    author: "Michael Crichton" + test,
  },
];

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

const resolvers: Resolvers = {
  Query: {
    books: () => books,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen(4000).then(({ url }: { url: any }) => {
  console.log(`🚀  Server ready at ${url}`);
});
