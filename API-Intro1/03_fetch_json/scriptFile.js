const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';
console.log(api_url);

async function issCoordinates() {
  const response = await fetch(api_url);
  const ISS_data = await response.json()
  console.log(ISS_data.longitude)
}

issCoordinates()