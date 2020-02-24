if ("geolocation" in navigator) {
  console.log('geolocation works');
  navigator.geolocation.getCurrentPosition(position => {
    const postData = position.coords;
    const lat = postData.latitude.toFixed(2)
    const lon = postData.longitude.toFixed(2)
    document.getElementById('latitude').textContent = lat;
    document.getElementById('longitude').textContent = lon;

    const data = { lat, lon };
    const options  =  {
      method:'POST', 
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data)
    }
    fetch('/api', options)
    .then(res => res.json())
    .then(json => console.log(json));
  });
} else {
  console.log("geolocation doesn/'t work");
}

