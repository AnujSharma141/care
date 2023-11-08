const resolvers = {
    Query: {
      user: (parent, args, context) => {
        return context.prisma.user.findUnique({
          where: { id: args.id },
          include: { injuries: true },
        });
      },
      injuries: (parent, args, context) => {
        return context.prisma.injury.findMany();
      },
    },
    Mutation: {
      createUser: (parent, args, context) => {
        return context.prisma.user.create({
          data: {
            name: args.name,
            email: args.email,
            password: args.password,
          },
        });
      },
      addInjury: (parent, args, context) => {
        return context.prisma.injury.create({
          data: {
            name: args.name,
            type: args.type,
            location: args.location,
            reportedBy: args.reportedBy,
            reportedDate: args.reportedDate,
            reportedTime: args.reportedTime,
            painLevel: args.painLevel,
            patientName: args.patientName,
            userId: args.userId,
          },
        });
      },
    },
  };
  
  export default resolvers;
  