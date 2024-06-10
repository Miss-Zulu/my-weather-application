function handleSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-button");
  console.log(searchInput.value);
  let cityElement = document.querySelector("#place");
  cityElement.innerHTML = searchInput.value;
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearch);
