async function getData() {
  const res = await fetch('/api');
  const data = await res.json();

  data.forEach(item => {
    const rootDiv = document.createElement('div');
    rootDiv.className = 'dbDiv';
    const geoLocation = document.createElement('p');
    const mood = document.createElement('p');
    const ts = document.createElement('p');
    const videoImage = document.createElement('img')
    const dateString = new Date(item.timestamp).toLocaleString();
    

    geoLocation.textContent = `Coordinates: latitude: ${item.lat}, longitude ${item.lon}`;
    mood.textContent = `Mood: ${item.mood}`;
    ts.textContent = `Timestamp: ${dateString}`;
    videoImage.src = item.image64;
    rootDiv.append(geoLocation, mood, ts, videoImage);
    document.body.append(rootDiv);
  });
}
getData()
