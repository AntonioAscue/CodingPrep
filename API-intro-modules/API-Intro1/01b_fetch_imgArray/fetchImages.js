const imgArray = [
  'images/choquequirao.jpg',
  'images/limaCosta.jpg',
  'images/selva.jpg'
]
async function fetchImages(images){
  for(let i of images){
    const response = await fetch(i);
    const blob = await response.blob();
    const img = document.createElement('img');
    img.src = URL.createObjectURL(blob);
    img.width = '200';
    img.height = '150';
    document.body.append(img);
  }
}

fetchImages(imgArray).then(
  console.log('Worked')
).catch(error =>{
  console.log(error)
})

