// script.js
const apiKey = "7caa2d85657b46024c3f50729e54ccf9";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${apiKey}&q=`;

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weather_icon = document.querySelector(".weather_icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city);
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data = await response.json();
        console.log(data);
        document.querySelector(".place").textContent = data.name;
        document.querySelector(".temp").textContent = Math.round(data.main.temp) + "°C";
        document.querySelector(".description").textContent = data.weather[0].main;
    
        if (data.weather[0].main === "Thunderstrom") {
            weather_icon.src = "images/thunderstrom.png";
        } else if (data.weather[0].main === "Clouds") {
            weather_icon.src = "images/clouds.png";
        } else if (data.weather[0].main === "Rain") {
            weather_icon.src = "images/rainy.png";
        }
        else if (data.weather[0].main === "Mist") {
            weather_icon.src = "images/mist.png";
        }
        else if (data.weather[0].main === "Clear") {
            weather_icon.src = "images/sunny.png";
        }
        else if (data.weather[0].main === "Haze") {
            weather_icon.src = "images/haze.png";
        }
    
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";   
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

