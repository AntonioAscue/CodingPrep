if ("geolocation" in navigator) {
  console.log('geolocation works');
  navigator.geolocation.getCurrentPosition(position =>{
    const postData = position.coords;
    document.getElementById('latitude').textContent = postData.latitude;
    document.getElementById('longitude').textContent = postData.longitude;
  });
} else {
  console.log("geolocation doesn/'t work");
}

