const buttonGeoLoc = document.getElementById("btnGeo");
const latHTML = document.getElementById('latitude');
const lonHTML = document.getElementById('longitude');
const submitBtn = document.getElementById('submit');
const errMes = document.querySelector(".hidden")
let coordinates;

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(position => {
    buttonGeoLoc.addEventListener('click', () => {
      coordinates = coord(position);
    });
  });
} else {
  console.log('Geolocation API is not available');
}

submitBtn.addEventListener('click', () => {
  const item = document.getElementById("item").value;
  const timestamp = new Date(0);
  let data = {timestamp};
  
  if (coordinates === undefined && item === "") {
    errMes.classList.remove('hidden');
    data = {...data, message:"No data was submitted"}
  } else if (coordinates === undefined) {
    data = {...data, item};
  } else if (item === "") {
    data = {...data, ...coordinates};
  } else {
    data = {...data, ...coordinates, item};
  }
  sendData(data)
      .then(res => res.text())
      .then(text => console.log('received the promise', text));
})

function coord(position) {
  const latitude = position.coords.latitude.toFixed(2);
  const longitude = position.coords.longitude.toFixed(2);
  latHTML.innerText = latitude;
  lonHTML.innerText = longitude;
  return { latitude, longitude };
}

function sendData(data) {
  console.log(data);
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
