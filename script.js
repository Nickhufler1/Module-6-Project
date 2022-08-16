let weather = {
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=8d8663b2eef62ec8f533a6af330ecd0a&units=imperial").then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".description").innerText = description;
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".temp").innerText = temp;
        document.querySelector(".wind", ".card-container").innerText = "Wind speed: " + speed + " MPH";
        
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document
    .querySelector(".search button")
    .addEventListener("click", function() {
        weather.search();
    });

document
    .querySelector(".search-bar").addEventListener("keyup", function (event){
        if (event.key === "Enter"){
            weather.search();
        }
    });

weather.fetchWeather("")