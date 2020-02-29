async function getData() {
  const res = await fetch('/api');
  const data = await res.json();

  data.forEach(item => {
    const rootDiv = document.createElement('ul');
    const geoLocation = document.createElement('li');
    const mood = document.createElement('li');
    const ts = document.createElement('li');
    const dateString = new Date(item.timestamp).toLocaleString();

    geoLocation.textContent = `Coordinates: latitude: ${item.lat}, longitude ${item.lon}`;
    mood.textContent = `Mood: ${item.mood}`;
    ts.textContent = `Timestamp: ${dateString}`;
    rootDiv.append(geoLocation, mood, ts);
    document.body.append(rootDiv);
  });
}
getData()
