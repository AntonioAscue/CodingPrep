async function getData() {
  const response = await fetch('./data/ZonAnn.Ts+dSST.csv');
  const table = await response.text();
  return parseData(table)
}

async function setup() {
  const data = await getData();
  const totalRows = data.years.length;

  createCanvas(800, 400);
  background(0);
  noFill();
  drawGraph(totalRows, data.globalTemp, 'red');
  drawGraph(totalRows, data.northernTemp, 'cyan');
  drawGraph(totalRows, data.southernTemp, 'orange');
  graphGrid(totalRows);
}

function drawGraph(totalRows, temp, color) {
  beginShape();
  stroke(color)
  for (i = 0; i < totalRows; i++) {
    let x = map(i, 0, totalRows - 1, 0, width);
    let y = map(temp[i], 13.4, 15.4, height, 0);
    vertex(x, y);
  }
  endShape();
}

function graphGrid(totalRows) {
  stroke('gray');
  strokeWeight(0.4);
  yGrid(totalRows);
  xGrid(totalRows);
}

function xGrid(xAxisPoints) {
  xValues = []
  for (i = 0; i < xAxisPoints; i++) {
    if (i % 5 === 0) {
      const x = map(i, 0, xAxisPoints - 1, 0, width);
      xValues.push(x);
      line(x, height, x, 0)
    }   
  }
}

function yGrid(){
  const numberOfLines = 10;
  const yGridStep = 400 / numberOfLines;
  for (i = 0; i < numberOfLines; i++) {
    yLine = i * yGridStep;
    line(0, yLine, width, yLine)
  }
}

function parseData(data) {
  const years = [];
  const globalTemp = [];
  const northernTemp = [];
  const southernTemp = [];

  data
    .trim()
    .split(/\n/)
    .slice(1)
    .map(row => {
      const totalRows = row.split(',');
      years.push(totalRows[0]);
      globalTemp.push(+totalRows[1] + 14);
      northernTemp.push(+totalRows[2] + 14);
      southernTemp.push(+totalRows[3] + 14);
    })
  return { years, globalTemp, northernTemp, southernTemp };
}
