chartIt()

async function chartIt() {
  const tempData = await getData();
  const ctx = document.getElementById('chart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: tempData.years,
      datasets: [{
        label: 'Global T(°C)',
        data: tempData.temp,
        backgroundColor: '#8B0000',
        borderColor: 'transparent',
        fill: false,
        pointHoverBorderColor: '#FF4500',
        pointHoverBorderWidth: 3.8,
        pointHoverRadius: 1.2,
      },
      {
        label: 'Temperature Model',
        data: tempData.modelTempr,
        backgroundColor: 'transparent',
        borderColor: '#FF0000',
        pointBorderColor: 'transparent'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            suggestedMin: 13.4,
            suggestedMax: 15.2,
            drawTicks: true,
            beginAtZero: false,
            callback: function (value, index, values) {
              return value + '°';
            }
          },
            scaleLabel: {
              display: true,
              fontStyle: 'bold',
              fontColor: 'black',
              fontSize: 13,
              labelString: 'Temperature °C',
            }
        }],
        xAxes: [{
          ticks: {
            beginAtZero: true,
            suggestedMin: 1860,
            suggestedMax: 2040
          },
          scaleLabel: {
            display: true,
            fontStyle: 'bold',
            fontColor: 'black',
            fontSize: 13,
            labelString: 'Year'
          }
        }]
      },
    }
  });
}

async function getData() {
  const xlabels = [];
  const ytemps = [];
  const yPolyFit = []
  const response = await fetch('ZonAnn.Ts+dSST.csv');
  const data = await response.text();
  data
    .trim() // removes white space
    .split(/\n/) // splits text data based on line breaks
    .slice(1) // removes first element containing string labels === first row
    .forEach(row => {
      const rowData = row.split(',');
      const year = rowData[0];
      const tempr = +rowData[1] + 14;
      xlabels.push(year);
      ytemps.push(parseFloat(tempr));
      yPolyFit.push(tempr_Model(year))
    });

  return {
    'years': xlabels,
    'temp': ytemps,
    'modelTempr': yPolyFit
  }
}

function tempr_Model(x) {
  return 4.291978 * x - 2.287448e-03 * x ** 2 + 4.063452e-07 * x ** 3 - 2.670433e+03;
}