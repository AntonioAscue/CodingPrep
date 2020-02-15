let table;
function preload() {
  table = loadTable('data/ZonAnn.Ts+dSST.csv','header');
}

function setup() {
  createCanvas(600, 400);
  background(0);
  stroke(255);
  noFill();
  beginShape();
  const totalRows = table.getRowCount()
  for (var i = 0; i < totalRows; i++) {
    let row = table.getRow(i);
    let temp = 14 + row.getNum('Glob');
    let x = map(i, 0, totalRows - 1, 0, width);
    let y = map(temp, 13.4, 15.2, height,0, false);
    vertex(x, y);
  }
  endShape();
}