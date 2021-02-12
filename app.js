//Get the API key && FETCH the data THEN callback

let weather = {
    apiKey: "9621af4d6ca6e5d3811e3c8bc0317726",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=" +
          this.apiKey
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

    //display the data from API
    displayWeather:  (data) => {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;

      //Selectors
      document.querySelector(".city").innerText = "Weather in " + name;
      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°C";
      document.querySelector(".humidity").innerText =
        "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText =
        "Wind speed: " + speed + " km/h";

      //to remove the old information until finish loading  
      document.querySelector(".weather").classList.remove("loading");

      document.body.style.backgroundImage =
        "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },

    //connect the data with search to get the value
    search:function()  {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
  }
  
  //Events
  document.querySelector(".search button").addEventListener("click",  () => {
    weather.search();
  });
  
  document
    .querySelector(".search-bar")
    .addEventListener("keyup", (event) => {
      if (event.key == "Enter") {
        weather.search();
      }
    });

  //when the page load call the function fetchWeather
  weather.fetchWeather("Denver");