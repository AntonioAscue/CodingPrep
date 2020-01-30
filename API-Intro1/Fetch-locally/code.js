const catchImage = async () => {
    const response = await fetch('huaraz.jpg');
    const blob = await response.blob();
    const imgId = document.getElementById('huaraz_img')
    imgId.src = URL.createObjectURL(blob)
    imgId.style.border = "5px solid black";
}
catchImage()
    .then(response => '')
    .catch(error => {
        console.log(error);
    })