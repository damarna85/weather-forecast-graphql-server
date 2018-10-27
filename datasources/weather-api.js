const { RESTDataSource } = require('apollo-datasource-rest');

class WeatherAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.OPEN_WEATHER_HOST;
  }

  willSendRequest(request) {
    request.headers.set('x-api-key', this.context.apiKey);
  }

  async getWeatherByCityName(cityName) {
    return this.get('weather', { q: cityName });
  }
}

module.exports = { WeatherAPI };
