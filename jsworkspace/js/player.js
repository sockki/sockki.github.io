const tag = document.createElement('script');
const playbtn = document.querySelector("#playbtn");
const playtext = document.querySelector("#playtext");
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


const svgs = ["img/play_arrow", "img/pause.svg"];
const playsvg = document.createElement("span");
const pausesvg = document.createElement("span");
playsvg.innerText = "▶"
pausesvg.innerText = "||"

playbtn.appendChild(playsvg);
playbtn.appendChild(pausesvg);


let player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
      height: "300",
      width: "300",
      videoId: "X_IX2y6IcRw",
      events: {},
    });
}

function handlePlayBtnClick() {
    player.playVideo();
    playtext.innerText = "Now playing..."
}

function handlePauseBtnClick() {
    player.pauseVideo();
    playtext.innerText = "Click the play button";
}

const playButton = document.querySelector("#playbtn span:first-child");
const pauseButton = document.querySelector("#playbtn span:last-child");

playButton.addEventListener("click", handlePlayBtnClick);
pauseButton.addEventListener("click", handlePauseBtnClick);

