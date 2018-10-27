const { convertFromKelvinToCelsius } = require('./');

describe('utilities', () => {
  describe('convert from kelvin to celsius degrees', () => {
    it('should properly convert the value', () => {
      expect(convertFromKelvinToCelsius(273.15)).toBe(0);
    });
  });
});
