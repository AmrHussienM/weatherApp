# Weather App



## Prerequisites

* HTML
* CSS
* JAVASCRIPT
* PHP

### Installing

Use the [openWeatherMapApi](https://openweathermap.org/api)


* app.js
```
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
        
```

#### Deployment

1. preparing files (html,css,js,php).
2. upload on GitHub.
3. Create App on Heroku cloud host.
4. Deployment method by GitHub.

