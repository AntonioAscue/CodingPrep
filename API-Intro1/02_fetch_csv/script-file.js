const xlabels =[];
const ytemps= [];
chartIt()

async function chartIt() {
  await getData();
  const ctx = document.getElementById('chart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: xlabels,
      datasets: [{
        label: 'Global Average Temperature',
        data: ytemps,
        backgroundColor: ['rgba(255, 99, 132, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)'],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}
async function getData(){
  const response = await fetch('ZonAnn.Ts+dSST.csv');
  const data = await response.text();
  const table = data
    .trim() // removes white space
    .split(/\n/) // splits text data based on line breaks
    .slice(1); // removes first element === first row
    
    table.forEach(row => {
      const yearTemp = row.split(',').slice(0, 2);
      xlabels.push(yearTemp[0]);
      ytemps.push(yearTemp[1]);
    });
  //comma-separated values and exclude all except the 2 first value
}
