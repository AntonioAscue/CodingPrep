const mymap = L.map('issMap').setView([0, 0], 1);
const attribution =
'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';

const tile_url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
//tile_url is not an actual URL, but it is a format for other particular url 
//for tiles with a specific style(s), zoom(z), and coordinates(x,y)
const tiles = L.tileLayer(tile_url,{attribution});
tiles.addTo(mymap);
console.log(api_url);

const issCoordinates = async () => {
  const response = await fetch(api_url);
  const ISS_data = await response.json()
  const lat = ISS_data.latitude;
  const lon = ISS_data.longitude;
  console.log(lat)
  document.getElementById('lat').innerHTML = lat;
  document.getElementById('lon').innerHTML = lon;
}
 
const intervalID = setInterval(issCoordinates, 3000)

