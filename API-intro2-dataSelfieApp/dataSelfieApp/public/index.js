
let lat;
let lon;
const button = document.getElementById('btn');
button.addEventListener('click', () => {
  const submitData = document.getElementById('submit').value;
  const data = { lat, lon, mood: submitData };
  const options = {
    method: 'POST',
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

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(position => {
    const postData = position.coords;
    lat = postData.latitude.toFixed(2);
    lon = postData.longitude.toFixed(2);
    document.getElementById('latitude').textContent = lat;
    document.getElementById('longitude').textContent = lon;
  });
} else {
  console.log("geolocation doesn/'t work");
}