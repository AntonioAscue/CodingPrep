const geoMap = new L.map('mapid')
const attribution = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const openStreetMapURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?';
const tileLayer = L.tileLayer(openStreetMapURL, { attribution });
const button = document.getElementById("geolocation");

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(position => {
    const lat = position.coords.latitude.toFixed(2);
    const lon = position.coords.longitude.toFixed(2);
    const theMarker = L.marker([lat, lon]);

    button.addEventListener('click', () => {
      button.innerText === "Geolocation" ? (button.innerText = "Hide location",
        coordToHTML(lat, lon),
        addToMap(tileLayer, theMarker),
        geoMap.setView([lat, lon], 13))
        : (button.innerText = "Geolocation",
          coordToHTML('', ''),
          rmvFromMap(tileLayer, theMarker));
    });

    function addToMap(...layers) {
      layers.forEach(x => x.addTo(geoMap));
    }
    
    function rmvFromMap(...layers) {
      layers.forEach(x => geoMap.removeLayer(x));
    }
    
    function coordToHTML(lat, lon) {
      document.getElementById('latitude').innerText = lat;
      document.getElementById('longitude').innerText = lon;;
    }
  });
} else {
  console.log('Geolocation does not function');
}

