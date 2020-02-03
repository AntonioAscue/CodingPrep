const getData = async () => {
  const response = await fetch('ZonAnn.Ts+dSST.csv');
  const data = await response.text();
  const table = data
    .trim() // removes white space
    .split(/\n/) // splits text data based on line breaks
    .slice(1); // removes first element === first row
  const yearMeanDiffTemp = table
    .map(row => row.split(',').slice(0, 2)); 
    //comma-separated values and exclude all except the 2 first values
}

getData();