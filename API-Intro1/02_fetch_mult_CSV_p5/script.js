async function chart() {
  const data = await getData();
  var ctx = document.getElementById('myChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.years,
      datasets: [{
        label: 'Global',
        data: data.globalTemp,
        backgroundColor: 'transparent',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        pointRadius: 2
      },
      {
        label: 'Northern Hemisphere',
        data: data.northernTemp,
        backgroundColor: 'transparent',
        borderColor: 'blue',
        borderWidth: 1,
        pointRadius: 2
      },
      {
        label: 'Southern Hemisphere',
        data: data.southernTemp,
        backgroundColor: 'transparent',
        borderColor: 'green',
        borderWidth: 1,
        pointRadius: 2
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false,
            min: 13.2,
            max: 15.6,
            stepSize: 0.2,
            fontSize: 10,
            callback: function (value) {
              return value + '°C';
            }
          }
        }]
      }
    }
  });
}

async function getData() {
  const years = [];
  const globalTemp = [];
  const northernTemp = [];
  const southernTemp = [];

  const response = await fetch('./data/ZonAnn.Ts+dSST.csv');
  const table = await response.text();
  table
    .trim()
    .split(/\n/)
    .slice(1)
    .map(row => {
      const dataPoints = row.split(',');
      years.push(dataPoints[0]);
      globalTemp.push(parseFloat(dataPoints[1]) + 14);
      northernTemp.push(parseFloat(dataPoints[2]) + 14);
      southernTemp.push(parseFloat(dataPoints[3]) + 14);
    })
    console.table(years, globalTemp)
  return { years, globalTemp, northernTemp, southernTemp };
}

chart();