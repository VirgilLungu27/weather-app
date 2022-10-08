const weatherButton = document.getElementById('weather')
const weatherDiv = document.getElementById('weatherinfo')

// Function to fetch information through an async/await mechanism
async function getWeatherData() {
    const city = document.getElementById('city').value

    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=1586ba39a39b0e4ae17c264588d43487');
    const responseData = await response.json();
    const weatherInfo = await {
        'temperature': responseData.main.temp,
        'weather': responseData.weather[0].description,
        'wind': responseData.wind.speed
    };
    return(weatherInfo);
}

// Component to append weather info.
async function component() {
    const weatherData = await getWeatherData();

    const element = await document.createElement('div');
    element.className = await 'weatherinfo';
    element.textContent = await `
        The weather right now in your location is as follows: \n
        Temperature: ${(weatherData.temperature - 273.15)} \n
        Weather: ${weatherData.weather} \n
        Wind: ${weatherData.wind} \n
        Don't forget to go outside for a walk whenever your mental health is in trouble.
    `
    return element;
}

weatherButton.addEventListener('click', async function appendComponent() {
    koko = await component()
    console.log(koko)
    weatherDiv.appendChild(koko)
})