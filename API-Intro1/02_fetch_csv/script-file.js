chartIt()

async function chartIt() {
  const tempData = await getData();
  const ctx = document.getElementById('chart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: tempData.years,
      datasets: [{
        label: 'Combined Land-Surface Air and Sea-Surface Water Temperature Anomalies C°',
        data: tempData.temp,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        pointBackgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: '#F08080',
        borderWidth: 0-5,
        fill: false,
        pointBorderWidth: 1,
        pointHoverBorderColor: '#FF0000',
        pointHoverBorderWidth: 3.8,
        pointHoverRadius: 1.5,
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            suggestedMin: 13.4,
            suggestedMax: 15.2,
            beginAtZero: false,
            callback: function(value, index, values) {
              return value + '°';
          }
          }
        }]
      }
    }
  });
}
async function getData() {
  const xlabels = [];
  const ytemps = [];
  const response = await fetch('ZonAnn.Ts+dSST.csv');
  const data = await response.text();
  data
    .trim() // removes white space
    .split(/\n/) // splits text data based on line breaks
    .slice(1) // removes first element containing string labels === first row
    .forEach(row => {
      const yearTemp = row.split(','); //comma-separated values
      xlabels.push(yearTemp[0]);
      ytemps.push(parseFloat(yearTemp[1]) + 14);
    });

  return {
    'years': xlabels,
    'temp': ytemps
  }
}
