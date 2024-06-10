function refreshData(response) {
  let temperatureElement = document.querySelector("#feel");
  let temperature = response.data.temperature.current;

  temperatureElement.innerHTML = Math.round(temperature);

  let cityElement = document.querySelector("#place");
  cityElement.innerHTML = response.data.city;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.condition.description;
  let humidityElement = document.querySelector("#humdidity");
  humidityElement.innerHTML = response.data.temperature.humidity;
}

function searchCity(city) {
  let apiKey = "9dcefb646a0cd4b5f33ct484b05bcoe0";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshData);
}

function handleSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-button");
  console.log(searchInput.value);

  searchCity(searchInput.value);
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearch);
