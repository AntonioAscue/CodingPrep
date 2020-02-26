if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(position => {
    const button = document.getElementById('btn');
    button.addEventListener('click', () => {

    const ts = position.timestamp;
    const lat = position.coords.latitude.toFixed(2);
    const lon = position.coords.longitude.toFixed(2);
   
      document.getElementById('latitude').innerText = lat;
      document.getElementById('longitude').innerText = lon;
      const data = {
        timestamp: ts,
        latitude: lat,
        longitude: lon
      }
      fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => console.log(data));
    });
  });
}