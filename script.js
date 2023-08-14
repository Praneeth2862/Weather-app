
const weather = function () {
const city=document.querySelector('#city').value;

const apiKey = "f47bd6298c1db7d6ec6e6043936bd05a";
const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}`;
const rem="&units=metric&appid=";
  fetch(apiURL + rem + apiKey)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
        document.querySelector('.type').innerHTML=data.weather[0].main;
        document.querySelector('.location').innerHTML=data.name;
        document.querySelector('.degrees').innerHTML=data.main.temp;
        document.querySelector('.wind-value').innerHTML=data.wind.speed +"Kmph";
        document.querySelector('.humidity-value').innerHTML=data.main.humidity+"%";
        const weatherCondition = data.weather[0].main;
        const weatherImage = document.querySelector('.weather-image');
        if (weatherCondition === "Rainy") {
        weatherImage.setAttribute("src", "rain.png");
        } else if (weatherCondition === "Clouds") {
        weatherImage.setAttribute("src", "cloudy.png");}
        else if (weatherCondition === "Clear") {
            weatherImage.setAttribute("src", "clear-sky.png");
            }
        else if (weatherCondition === "Thunderstorm") {
            weatherImage.setAttribute("src", "sunny.png");
        } 
        else if (weatherCondition === "Snow") {
            weatherImage.setAttribute("src", "snowflake.png");
        } 
        else {
        weatherImage.setAttribute("src", "sunny.png");
        }
        document.querySelector('.main').style.display="block";
    })
    .catch(error => {
      console.error("Error fetching weather data:", error);
    });
};

