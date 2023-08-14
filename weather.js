const apiKey = "####";
     const apiUrl =
     "https://api.openweathermap.org/data/2.5/weather?q=##&appid=####";

    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather_icon");

    async function check(city) {
      const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
      var data = await response.json();
      console.log(data);

      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

      if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "cloud.png";
      } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "rain.png";
      } else if (data.weather[0].main == "Snows") {
        weatherIcon.src = "snow1.png";
      } else if (data.weather[0].main == "Night") {
        weatherIcon.src = "night.png";
      }
    }
    searchBtn.addEventListener("Click", () => {
      check(searchBox.value);
    });
