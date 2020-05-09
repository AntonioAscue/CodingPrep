const goodbyeLink = document.getElementById("goodbye");
goodbyeLink.addEventListener('click', () => {
  goodbyeLink.href = "http://localhost:3000/goodbye.html"
})

if ('geolocation' in navigator) {
  console.log('navigator exists');
  navigator.geolocation.getCurrentPosition(position => {
    const lat = position.coords.latitude.toFixed(2);
    const lon = position.coords.longitude.toFixed(2);
    const ts = position.timestamp;
    const latDom = document.getElementById("latitude");
    const lonDom = document.getElementById("longitude");

    const coordBtn = document.getElementsByTagName("button")[0];
    coordBtn.addEventListener('click', () => {

      latDom.innerHTML = lat;
      lonDom.innerHTML = lon;
      mapCoord(lat, lon);
      const data 
    });
    fetch('/', {
      method: 'POST',
      Headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  })
}
else {

}


function mapCoord(x, y) {
  const mymap = L.map('mapid').setView([x, y], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(mymap);
  marker(x, y, mymap)
}

function marker(x,y, map){
  L.marker([x, y]).addTo(map)
    .openPopup();
}