const weatherButton = document.getElementById('weather')

async function getWeatherData() {
    const lat = document.getElementById('latitude').value;
    const long = document.getElementById('longitude').value;

    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&appid=30f8c65d65be94be78fe5fc8b7cbfe8f');
    const responseData = await response.json();
    const weatherInfo = [responseData.main.temp, responseData.weather[0].description, responseData.wind.speed];
    console.log(weatherInfo);
}

weatherButton.addEventListener('click', (e) => {
    getWeatherData();
})