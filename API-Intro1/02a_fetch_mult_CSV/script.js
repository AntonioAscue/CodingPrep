function canvas(){
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',    
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
            ],
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

async function getData() {
  //variables to store data
  const year = [];
  const globTemp = [];
  const NHTemp = [];
  const SHTemp = [];
  //fetch data
  const response = await fetch('./data/ZonAnn.Ts+dSST.csv');
  const table = await response.text();
  // parse data 
  table
    .trim()
    .split(/\n/)
    .slice(1)
    .map(row => {
      const parseData = row.split(',');
      year.push(parseData[0]);
      globTemp.push(parseData[1]);
      NHTemp.push(parseData[2]);
      SHTemp.push(parseData[3]);
    })
    return {
      'year': year,
      'global': globTemp,
      'nothern': NHTemp,
      'southern': SHTemp
    }
}
getData()
  .then(data =>{
    console.log(data);
  })
