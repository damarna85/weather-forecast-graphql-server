const KELVIN_BASE_CONST = 273.15;

const convertFromKelvinToCelsius = temp => temp - KELVIN_BASE_CONST;

module.exports = { convertFromKelvinToCelsius };
