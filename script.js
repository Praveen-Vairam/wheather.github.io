let weather = {
  apiKey: "3ca74e0e331e003d7065cb7e1474ae94",
  fetchWeather: function (city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid="+this.apiKey
    )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText =
      "Wind speed: " + speed + " km/h";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage =
      "url('https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fcloudy-background&psig=AOvVaw0keEudAVA7jrZo-vd6yrF4&ust=1678372925279000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKid28HIzP0CFQAAAAAdAAAAABAE" + name + "')";
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

weather.fetchWeather("Delhi");

var today=new Date();
var date=today.getDate()+' /'+ (today.getMonth()+1)+' /' + today .getFullYear();
document.getElementById("currentDate").innerHTML=date;

var time=today.getHours()+':'+ today.getMinutes() +':'+ today.getSeconds();
document.getElementById("currentTime").innerHTML=time;