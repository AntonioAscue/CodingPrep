async function getData() {
  const response = await fetch('/api');
  const data = response.json();
  return data
}

getData()
  .then(data => uploadDb(data))
  .then(final => console.log(final))

function uploadDb(dbData) {
  const div = document.getElementById("dbTable");
  dbData.forEach(dbObj => {
    const dbPro = document.createElement("div");
    Object.keys(dbObj).forEach(key => {
      const p = document.createElement("p");
      console.log(dbObj[key]);
      p.innerHTML = `${key} : ${dbObj[key]}`;
      dbPro.append(p);
    })
    div.append(dbPro);
  })
}