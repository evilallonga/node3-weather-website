console.log("Client side javascript file is loaded!");

/* const address = "Boston";
const urlMapBox =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
  encodeURIComponent(address) +
  ".json?access_token=pk.eyJ1IjoiZXZpbGFsbG9uZ2EiLCJhIjoiY2xkeDJwajIyMGRkZzN1a2FhMThuNGw0ZiJ9.Hvhf64L1hd3gcYoSQY8NRQ&limit=1";

fetch(urlMapBox).then((response) => {
  response.json().then(({ features }) => {
    const latitude = features[0].center[1];
    const longitude = features[0].center[0];
    const urlForeCast =
      "http://api.weatherstack.com/current?access_key=9363e4ba21d0a429da27157993dfbe9d&query=" +
      latitude +
      "," +
      longitude +
      "&units=f";
    fetch(urlForeCast).then((responseForecats) => {
      responseForecats.json().then(({ current }) => {
        console.log("Location: " + features[0].place_name);
        console.log(
          current.weather_descriptions[0] +
            ". It is currently " +
            current.temperature +
            " degrees out. It feels like " +
            current.feelslike +
            " degrees out."
        );
      });
    });
  });
}); */

/* fetch("https://puzzle.mead.io/puzzle").then((response) => {
  response.json().then((data) => {
    console.log(data);
  });
}); */

/* fetch("http://localhost:3000/weather?address=boston").then((response) => {
  response.json().then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(data.location);
      console.log(data.forecast);
    }
  });
}); */

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";
  const location = search.value;
  fetch("http://localhost:3000/weather?address=" + location).then(
    (response) => {
      response.json().then((data) => {
        if (data.error) {
          messageOne.textContent = data.error;
        } else {
          messageOne.textContent = data.location;
          messageTwo.textContent = data.forecast;
        }
      });
    }
  );
});
