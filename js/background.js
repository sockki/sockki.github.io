const imagename1 = "img/two.gif";
const imagename2 = "img/four.gif";
const images = [imagename1, imagename2];
const CSSchoice = document.querySelector("link");

const chosenImage = images[Math.floor(Math.random() * images.length)]

document.body.style.backgroundImage = `url('${chosenImage}')`;

if(chosenImage === imagename1) {
    CSSchoice.href = "css/style11.css";
}
else {
    CSSchoice.href = "css/style22.css";
}
