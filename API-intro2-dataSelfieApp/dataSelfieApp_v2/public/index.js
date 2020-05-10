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

  const timestamp = Date.now();
  let data = {timestamp};
  
  if (coordinates === undefined && item === "") {
    errMes.classList.remove('hidden');
    data = {message:"No data was submitted", ...data}
  } else if (coordinates === undefined) {
    data = { item, ...data};
  } else if (item === "") {
    data = {...coordinates, ...data};
  } else {
    data = {...coordinates, item, ...data};
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

