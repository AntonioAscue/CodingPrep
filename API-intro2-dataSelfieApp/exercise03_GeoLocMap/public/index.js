if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(position => {
    const latitude = position.coords.latitude.toFixed(2);
    const longitude = position.coords.longitude.toFixed(2);
    const button = document.getElementById("geolocation");

    button.addEventListener('click', () => {
      button.innerText === "Geolocation" ? (button.innerText = "Hide location",
        coordText(latitude, longitude))
        : (button.innerText = "Geolocation",
          coordText('', ''));
    });

    function coordText(lat, lon) {
      document.getElementById('latitude').innerText = lat;
      document.getElementById('longitude').innerText = lon;;
    }
  });
} else {
  console.log("geolocation sucks");
}