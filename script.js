const weatherButton = document.getElementById('weather')

// Function to fetch information through an async/await mechanism
async function getWeatherData() {
    const city = document.getElementById('city').value

    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=1586ba39a39b0e4ae17c264588d43487');
    const responseData = await response.json();
    const weatherInfo = await {
        'city': city,
        'temperature': responseData.main.temp,
        'weather': responseData.weather[0].description,
        'wind': responseData.wind.speed
    };
    return(weatherInfo);
}

// Component to append weather info.
async function component() {
    const weatherData = await getWeatherData();

    const element = document.createElement('div');
    element.className = 'weatherinfo';
    element.innerHTML = `<div class="hero"><h2>The weather right now in ${weatherData.city} is as follows:</h2>
        <div class="temp"><h3>Temperature: ${(weatherData.temperature - 273.15).toFixed(1)} °C </h3></div>
        <div class="weather"><h3>Weather: ${weatherData.weather}</h3></div>
        <div class="wind"><h3>Wind: ${weatherData.wind} m/s</h3></div>
        <h5><i>Go outside for a walk whenever you feel like you need to manage your mental health.</i></h5></div>`
    return element;
}

weatherButton.addEventListener('click', async function appendComponent() {
    document.body.appendChild(await component())
})