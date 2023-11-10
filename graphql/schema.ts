export const typeDefs = `

type Injury {
  id: String!
  name: String!
  location: String!
  reportedBy: String!
  reportedDate: String!
  reportedTime: String!
  painLevel: Int!
  email: String!
}

type Query {
  injuries(email: String!): [Injury!]!
}

type Mutation {
  addInjury( name: String!, location: String, reportedBy: String, reportedDate: String, reportedTime: String, painLevel: Int, email: String): Injury
}`
