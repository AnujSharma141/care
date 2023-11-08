import Cors from 'micro-cors'
import { ApolloServer } from 'apollo-server-micro';
import { PrismaClient } from '@prisma/client';
import { typeDefs } from '../../graphql/schema.ts'; // Import your GraphQL schema
import resolvers from '../../graphql/resolvers'; // Create resolvers for your schema

// const prisma = new PrismaClient();

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: ({ req }) => ({
//     prisma,
//   }),
//   playground: true,
// });

// async function startServer() {
//     try {
//       await server.start();
//       console.log('Apollo Server is running on http://localhost:3000/api/graphql');
//     } catch (error) {
//       console.error('Error starting Apollo Server:', error);
//     }
//   }
  
//   startServer(); // Start the server asynchronously
  

// export default server.createHandler({ path: '/api/graphql' });
 

export const config = {
    api: {
      bodyParser: false,
    },
  };
  
  const cors = Cors();
  
const prisma = new PrismaClient();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    prisma,
  }),
  playground: true,
});
  
  const startServer = server.start();
  
  export default cors(async (req, res) => {
    if (req.method === "OPTIONS") {
      res.end();
      return false;
    }
  
    await startServer;
    await server.createHandler({ path: "/api/graphql" })(req, res);
  });