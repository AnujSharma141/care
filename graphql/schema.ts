export const typeDefs = `type User {
  id: Int!
  name: String!
  email: String!
  injuries: [Injury!]!
}

type Injury {
  id: Int!
  name: String!
  type: String!
  location: String!
  reportedBy: String!
  reportedDate: String!
  reportedTime: String!
  painLevel: Int!
  patientName: String!
}

type Query {
  user(id: Int!): User
  injuries: [Injury!]!
}

type Mutation {
  createUser(name: String!, email: String!, password: String!): User
  addInjury(userId: Int!, name: String!, type: String, location: String, reportedBy: String, reportedDate: String, reportedTime: String, painLevel: Int, patientName: String): Injury
}`
