const { gql } = require('apollo-server');

const typeDefs = gql`
  type WeatherSummary {
    forecast: String!
    details: String
    temperature: String
    pressure: String
    humidity: String
  }

  type Query {
    weather(cityName: String): WeatherSummary
  }
`;

module.exports = { typeDefs };
