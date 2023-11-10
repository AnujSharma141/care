const resolvers = {
    Query: {
      injuries: (parent, args, context) => {
        return context.prisma.injury.findMany({
          where: { email: args.email },
        });
      },
    },
    Mutation: {
      addInjury: (parent, args, context) => {
        return context.prisma.injury.create({
          data: {
            name: args.name,
            location: args.location,
            reportedBy: args.reportedBy,
            reportedDate: args.reportedDate,
            reportedTime: args.reportedTime,
            painLevel: args.painLevel,
            email: args.email,
          },
        });
      },
    },
  };
  
  export default resolvers;
  