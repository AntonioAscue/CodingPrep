const mymap = L.map('issMap').setView([0, 0], 2);
const attribution =
'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tile_url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tile_url,{attribution});
tiles.addTo(mymap);
//tile_url is not an actual URL, but it is a format for other particular url 
//for tiles with a specific style(s), zoom(z), and coordinates(x,y)

const myIcon = L.icon({
  iconUrl: 'ISS.png',
  iconSize: [30, 60],
  iconAnchor: [40, 45]
});
const marker = L.marker([0, 0], {icon: myIcon}).addTo(mymap);

const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';

let firstView = true;
async function coordISS() {
  const response = await fetch(api_url);
  const ISS_data = await response.json()
  const {latitude, longitude} = ISS_data; // destructuring

  marker.setLatLng([latitude, longitude]); // L.marker longitude and latitude

  firstView?( mymap.setView([latitude,longitude]), firstView = false):
  document.getElementById('lat').innerHTML = latitude.toFixed(2);
  document.getElementById('lon').innerHTML = longitude.toFixed(2);
}
coordISS()
setInterval(coordISS, 3000)