async function getData() {
  const response = await fetch('/api');
  const data = response.json();
  return data
}

getData()
  .then(data => uploadDb(data))
  .catch(err => console.log(err));

function uploadDb(dbData) {
  const table = document.getElementById("dbTable");
  dbData.forEach(dbObj => {
    const tableRow = document.createElement("tr");
    let latPlaceholder;
    for (let [key, value] of Object.entries(dbObj)) {
      const cell = document.createElement("td");
      if (key === "timestamp") {
        const timeStamp = new Date(value).toString().replace('(Central European Standard Time)','');
        cell.innerHTML = `${timeStamp}`;
      } else if(key === "latitude"){
        latPlaceholder = value;
      } else if(key === "longitude"){
        cell.innerHTML = `[${latPlaceholder}, ${value}])`;
      }
      else {
        cell.innerHTML = `${value}`;
      } 
      if(cell.innerHTML !== ""){
        tableRow.append(cell);
      }
    }
    addDeleteButton(table, tableRow)
  });
}

function addDeleteButton(table, row){
  const tdBtn = document.createElement('td');
  const delButton = document.createElement("button");
  delButton.innerHTML= "Delete";
  tdBtn.append(delButton);
  row.append(tdBtn);
  return table.append(row);
}
