const weatherButton = document.getElementById('weather')

// Function to fetch information through an async/await mechanism
async function getWeatherData() {
    const city = document.getElementById('city').value

    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=1586ba39a39b0e4ae17c264588d43487');
    const responseData = await response.json();
    const weatherInfo = {
        temperature: responseData.main.temp,
        weather: responseData.weather[0].description,
        wind: responseData.wind.speed
    };
    return(weatherInfo);
}

// Component to append weather info.
async function component() {
    const element = document.createElement('div');
    element.className = 'weatherinfo';
    const weatherData = await getWeatherData();
    element.textContent = `
        <p>The weather right now in your location is as follows:</p>
        Temperature: ${(weatherData[0] - 273.15)}
        Weather: ${weatherData[1]}
        Wind: ${weatherData[2]}
        <p>Don't forget to go outside for a walk whenever your mental health is in trouble.</p>
    `
    return element;
}

weatherButton.addEventListener('click', () => {
    console.log(component())
})