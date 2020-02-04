const mymap = L.map('issMap').setView([0, 0], 1);
const attribution =
'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';

const tile_url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
//tile_url is not an actual URL, but it is a format for other particular url 
//for tiles with a specific style(s), zoom(z), and coordinates(x,y)
const tiles = L.tileLayer(tile_url,{attribution});
tiles.addTo(mymap);

const myIcon = L.icon({
  iconUrl: 'ISS.png',
  iconSize: [30, 60],
  iconAnchor: [25, 16],
});
const marker = L.marker([0, 0], {icon: myIcon}).addTo(mymap);

const coordISS = async () => {
  const response = await fetch(api_url);
  const ISS_data = await response.json()
  const {latitude, longitude} = ISS_data;
  marker.setLatLng([latitude, longitude]) 
  console.log(latitude);
  console.log(longitude);
  document.getElementById('lat').innerHTML = latitude;
  document.getElementById('lon').innerHTML = longitude;
}
 
const intervalID = setInterval(coordISS, 3000)

