async function fetchText(){
  const response = await fetch('poem.txt');
  const text = await response.text();
  document.getElementById('poem').innerHTML = text;
}
document.
fetchText().
then(response =>{
  console.log('Success!')
}).catch(error =>{
  console.log(error)
})