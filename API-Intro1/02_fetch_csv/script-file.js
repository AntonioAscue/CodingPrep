const xlabels =[];
const ytemps= [];
chartIt()

async function chartIt() {
  await getData();
  const ctx = document.getElementById('chart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: xlabels,
      datasets: [{
        label: 'Global Average Temperature',
        data: ytemps,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        pointBackgroundColor:'#FF0000',
        borderColor: '#F08080',
        borderWidth: 1,
        fill: false,
        pointBorderWidth:1,
        pointHoverBorderColor: '#0000FF',
        pointHoverBorderWidth:3.8,
        pointHoverRadius: 1.5,
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            suggestedMin:13.4,
            suggestedMax:15.2,
            beginAtZero: false
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
      ytemps.push(parseFloat(yearTemp[1]) + 14);
    });
  //comma-separated values and exclude all except the 2 first value
}
