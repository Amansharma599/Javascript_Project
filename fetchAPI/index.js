console.log("Hello ji Aj hum sikhaygay kesay api call kartay he");

let API_key = "a099ef8670c52f0082ca04be9f62cade";
async function fetchWeatherDetail() {
  try {
    let cityName = "gwalior";

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_key}`
    );

    const data = await response.json();
    console.log("weather data:->", data);

    let newpara = document.createElement("p");
    newpara.textContent = `${data?.main?.temp?.toFixed(2)} °C`;

    document.body.appendChild(newpara);
  } catch (err) {
    // Handle the Err here
    console.log("Error Found In Fetching wheather API" + err);
  }
}
