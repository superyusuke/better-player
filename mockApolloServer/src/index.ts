import { ApolloServer, gql } from "apollo-server";
import { Resolvers } from "src/types/generated/graphql";

import { TotalInfo } from "../../src/model/music/base/index";

const info: TotalInfo = {
  key: "C",
  barMetaList: [
    {
      duration: 8,
      chordList: [],
      noteList: [
        {
          noteNumber: 1,
          octaveNumber: 1,
          accidentalNumber: 0,
        },
        {
          noteNumber: 2,
          octaveNumber: -1,
          accidentalNumber: 0,
        },
      ],
    },
    {
      duration: 8,
      chordList: [],
      noteList: [
        {
          noteNumber: 3,
          octaveNumber: 0,
          accidentalNumber: 0,
        },
        {
          noteNumber: 4,
          octaveNumber: 0,
          accidentalNumber: 0,
        },
      ],
    },
    {
      duration: 16,
      chordList: [],
      noteList: [
        {
          noteNumber: 2,
          octaveNumber: 0,
          accidentalNumber: 0,
        },
        {
          noteNumber: 3,
          octaveNumber: 0,
          accidentalNumber: 0,
        },
        {
          noteNumber: 4,
          octaveNumber: 0,
          accidentalNumber: 0,
        },
        {
          noteNumber: 5,
          octaveNumber: 0,
          accidentalNumber: 0,
        },
      ],
    },
    {
      duration: 8,
      chordList: [],
      noteList: [
        {
          noteNumber: 6,
          octaveNumber: 0,
          accidentalNumber: 1,
        },
        {
          noteNumber: 7,
          octaveNumber: 0,
          accidentalNumber: -1,
        },
      ],
    },
    {
      duration: 4,
      chordList: [],
      noteList: [
        {
          noteNumber: 6,
          octaveNumber: 0,
          accidentalNumber: 1,
        },
      ],
    },
  ],
};

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
