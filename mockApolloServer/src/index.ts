import { ApolloServer, gql } from "apollo-server";
// @ts-ignore
import { Resolvers } from "src/types/generated/graphql";

const typeDefs = gql`
  scalar JSON

  type Query {
    totalInfo: JSON
  }

  #  enum OctaveNumber {
  #    a
  #    b
  #    c
  #  }

  #  enum Key {
  #    C
  #    G
  #    D
  #    A
  #    E
  #    B
  #    F_SHARP
  #    C_SHARP
  #    F
  #    B_FLAT
  #    E_FLAT
  #    A_FLAT
  #    D_FLAT
  #    G_FLAT
  #    C_FLAT
  #  }
`;

const info2 = {
  data: {
    music: "music",
  },
};

const resolvers: Resolvers = {
  Query: {
    totalInfo: () => info2,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen(4000).then(({ url }: { url: any }) => {
  console.log(`🚀  Server ready at ${url}`);
});
