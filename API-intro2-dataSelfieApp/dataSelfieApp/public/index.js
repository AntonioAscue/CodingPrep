function setup() {
  noCanvas();
  const video =  createCapture(VIDEO);
  video.size(320,240);
  let lat, lon;
  const button = document.getElementById('btn');
  
  button.addEventListener('click', () => {
    const mood = document.getElementById('submit').value;
    video.loadPixels(); // alert p5 you want to load the video pixel data
    const image64 = video.canvas.toDataURL();
    const data = { lat, lon, mood, image64 };
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
}

