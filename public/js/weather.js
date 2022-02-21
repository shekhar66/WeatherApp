function getTheWeatherData() {
  const city = document.getElementById("weather-city-search");
  if (!city.value) {
    city.style.borderColor = "red";
    return;
  }
  const response = fetch(
    `http://api.weatherstack.com/current?access_key=b3fd734a9e20c3c0b39512af18a15921&query=${city.value}`
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.current) {
        const weatherinfo = `The temperature is
      ${data.current.temperature} degrees and wind speed is ${data.current.wind_speed} km/hr at ${data.location.name},${data.location.region}.`;
        document.querySelector("#weather-main").style.display = "block";
        document.querySelector("#weather-info").textContent = weatherinfo;
        document.querySelector("#weather-info").style.color = "black";
      } else {
        document.querySelector("#weather-main").style.display = "block";
        document.querySelector("#weather-main").style.height = "3.5vw";
        document.querySelector("#weather-info").textContent =
          "Invalid city..!!";
        document.querySelector("#weather-info").style.color = "red";
      }
    });
}

function hideWeatherInfoBlock() {
  document.querySelector("#weather-main").style.display = "none";
}
