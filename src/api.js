const API_KEY = 'VVBPXJGK4XY8H8XF2JZPBEE7D';

async function fetchWeatherData(locationName) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationName}?unitGroup=metric&include=current%2Calerts%2Cdays%2Cevents&key=${API_KEY}&contentType=json`,
      { mode: 'cors' }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (e) {
    console.error(e, 'Something went wrong');
  }
}

export { fetchWeatherData };
