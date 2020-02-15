async function getData() {
  const response = await fetch('./data/ZonAnn.Ts+dSST.csv');
  const table = await response.text();
  return parseData(table)
}

async function setup() {
  const data = await getData();
  const rows = data.years.length;

  createCanvas(800, 400);
  background(0);
  noFill();
  drawGraph(rows, data.globalTemp, 'red');
  drawGraph(rows, data.northernTemp, 'cyan');
  drawGraph(rows, data.southernTemp, 'orange');
}

function drawGraph(rows, temp, color) {
  beginShape();
  stroke(color)
  for (i = 0; i < rows; i++) {
    let x = map(i, 0, rows - 1, 0, width);
    let y = map(temp[i], 13.4, 15.4, height, 0);
    vertex(x, y);
  }
  endShape();
}

function parseData(data){
  const years = [];
  const globalTemp = [];
  const northernTemp = [];
  const southernTemp = [];
  
  data
    .trim()
    .split(/\n/)
    .slice(1)
    .map(row => {
      const rows = row.split(',');
      years.push(rows[0]);
      globalTemp.push(+rows[1] + 14);
      northernTemp.push(+rows[2] + 14);
      southernTemp.push(+rows[3] + 14);
    })
  return { years, globalTemp, northernTemp, southernTemp };
}
