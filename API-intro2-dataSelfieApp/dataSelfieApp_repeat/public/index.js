const goodbyeLink = document.getElementById("goodbye");
goodbyeLink.addEventListener('click', () => {
  goodbyeLink.href = "http://localhost:3000/goodbye.html"
})

if('geolocation' in navigator){
  console.log('navigator exists');
  navigator.geolocation.getCurrentPosition(position => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const ts = position.timestamp;
    
    const latDom = document.getElementById("latitude");
    const lonDom = document.getElementById("longitude");
    latDom.innerHTML = lat;
    lonDom.innerHTML = lon;
  })
}
else {

}
