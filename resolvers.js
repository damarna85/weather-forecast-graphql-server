const { convertFromKelvinToCelsius } = require('./utils');

const resolvers = {
  Query: {
    weather: async (_, { cityName }, { dataSources }) => {
      const {
        main,
        weather,
      } = await dataSources.weatherAPI.getWeatherByCityName(cityName);
      return {
        forecast: weather[0].main,
        details: weather[0].description,
        temperature: `${convertFromKelvinToCelsius(main.temp)}°C`,
        pressure: `${main.pressure} hPa`,
        humidity: `${main.humidity}%`,
      };
    },
  },
};

module.exports = { resolvers };
