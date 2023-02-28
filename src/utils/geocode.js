const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoiZXZpbGFsbG9uZ2EiLCJhIjoiY2xkeDJwajIyMGRkZzN1a2FhMThuNGw0ZiJ9.Hvhf64L1hd3gcYoSQY8NRQ&limit=1";
  request({ url, json: true }, (error, { body: { features } }) => {
    if (error) {
      callback("Unable to connect to mapbox service!", undefined);
    } else if (features.length === 0) {
      callback("Unable to find coordinates.", undefined);
    } else {
      callback(undefined, {
        latitude: features[0].center[1],
        longitude: features[0].center[0],
        location: features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
