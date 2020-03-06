if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(position => {
    const lat = position.coords.latitude.toFixed(2);
    const lon = position.coords.longitude.toFixed(2);
    document.getElementById('latitude').innerText = lat;
    document.getElementById('longitude').innerText = lon;
    const data = { lat, lon }
    sendData(data)
    .then(res => res.text())
    .then(text => console.log('received the promise',text));
  });
} else {
  console.log('Geolocation API is not available');
}

function sendData(data) {
  const options = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data)
  }
  return fetch('/api', options)
}
