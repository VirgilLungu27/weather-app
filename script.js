const weatherButton = document.getElementById('weather')

async function showInfo() {
    const weatherData = await getWeatherData();
    await function component() {
        const element = document.createElement('div');
        element.className = 'weatherinfo';
        element.textContent = `<p>The weather right now in your location is as follows:</p>
            Temperature: ${(weatherData[0] - 273.15)}
            Weather: ${weatherData[1]}
            Wind: ${weatherData[2]}
        <p>Don't forget to go outside for a walk whenever your mental health is in trouble.</p>
        `
        return element;
    }
}


async function getWeatherData() {
    const city = document.getElementById('city').value

    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=1586ba39a39b0e4ae17c264588d43487');
    const responseData = await response.json();
    const weatherInfo = [responseData.main.temp, responseData.weather[0].description, responseData.wind.speed];
    console.log(weatherInfo);
    return weatherInfo;
}

weatherButton.addEventListener('click', () => {
    showInfo();
    document.appendChild(component());
})