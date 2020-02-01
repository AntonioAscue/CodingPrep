const imgArray = [
  'images/choquequirao.jpg',
  'images/limaCosta.jpg',
  'images/selva.jpg'
]

async function fetchImages(images){
  const promiseResp = await images.map(img => fetch(img));
  const response = await Promise.all(promiseResp);
  const promiseBlob = await response.map(img => img.blob())
  const respBlob = await Promise.all(promiseBlob); 
  respBlob.map(blob => {
    img = document.createElement('img');
    img.src = URL.createObjectURL(blob);
    img.width = '200';
    img.height = '150';
    document.body.append(img);
  }); 
}

fetchImages(imgArray).then(
  console.log('Worked')
).catch(error =>{
  console.log(error)
})
