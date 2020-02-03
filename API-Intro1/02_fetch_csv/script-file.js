const ctx = document.getElementById('chart').getContext('2d');
const xlabels = [];
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: xlabels,
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
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
const getData = async () => {
  const response = await fetch('ZonAnn.Ts+dSST.csv');
  const data = await response.text();
  const table = data
    .trim() // removes white space
    .split(/\n/) // splits text data based on line breaks
    .slice(1); // removes first element === first row
  const yearDiffTemp = table
    .map(row => row.split(',').slice(0, 2)); 
    //comma-separated values and exclude all except the 2 first values
    const year = yearDiffTemp[0];
    const temp = yearDiffTemp[1];
    xlabels.push(year,temp)
}
getData();