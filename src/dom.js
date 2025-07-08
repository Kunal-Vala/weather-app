import { getIconPath } from './ui';

const container = document.querySelector('.container');

function renderWeather(iconName, temp, condition, feelsLike, minTemp, maxTemp) {
  container.innerHTML = `
    <div class="main-icon">
      <img src="${getIconPath(iconName)}" alt="Weather Icon" />
    </div>
    <h1 class="current-temp">${temp}°C</h1>
    <div class="condition">${condition}</div>
    <div class="details">
      <span>Feels like: ${feelsLike}°C</span> |
      <span>Min: ${minTemp}°C</span> |
      <span>Max: ${maxTemp}°C</span>
    </div>
    <div class="form-container">
      <form>
        <input type="text" id="location" placeholder="${location}" />
        <button type="submit">Enter</button>
      </form>
    </div>
  `;
}

let location;
function start(onSubmit) {
  const form = document.querySelector('form');
  const formInput = document.querySelector('input');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const locationName = formInput.value.trim();
    location = locationName;
    if (locationName && typeof onSubmit === 'function') {
      onSubmit(locationName);
    }
  });
}

function renderLoading() {
  container.innerHTML = `<div class="loading">Loading...</div>`;
}

function renderError(message) {
  container.innerHTML = `<div class="error">${message}</div>`;
}

export { start, renderWeather, renderLoading, renderError };
