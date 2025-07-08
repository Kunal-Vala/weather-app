import { fetchWeatherData } from './api';
import './style.css';
import { start, renderWeather, renderLoading, renderError } from './dom';

start(async (locationName) => {
  renderLoading();
  try {
    const data = await fetchWeatherData(locationName);
    if (data && data.currentConditions && data.days && data.days[0]) {
      const icon = data.currentConditions.icon;
      const temp = data.currentConditions.temp;
      const condition = data.currentConditions.conditions;
      const feelsLike = data.currentConditions.feelslike;
      const minTemp = data.days[0].tempmin;
      const maxTemp = data.days[0].tempmax;
      renderWeather(icon, temp, condition, feelsLike, minTemp, maxTemp);
    } else {
      renderError('Could not retrieve weather data.');
    }
  } catch (e) {
    renderError(e, 'Something went wrong.');
  }
});
