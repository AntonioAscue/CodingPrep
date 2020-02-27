
let ts, lat, lon;
const button = document.getElementById('submit');
button.addEventListener('click', () => {
  const item = document.getElementById("item").value;
  const data = {
    timestamp: ts,
    latitude: lat,
    longitude: lon,
    item: item
  };
  fetch('/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data)
  })
    .then(res => res.text())
    .then(data => console.log(data));
});

if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(position => {
    ts = Date.now();
    lat = position.coords.latitude.toFixed(2);
    lon = position.coords.longitude.toFixed(2);
    document.getElementById('latitude').innerText = lat;
    document.getElementById('longitude').innerText = lon;
  });
} else {
  console.log('geolocation not available');
}