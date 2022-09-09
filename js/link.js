const links = document.querySelector("#link");

const youtube = document.createElement("a");
const twitch = document.createElement("a");
const naver = document.createElement("a");
const insta = document.createElement("a");
const google = document.createElement("a");

youtube.href = "https://www.youtube.com";
youtube.target = "blank";
youtube.innerText = "youtube";

twitch.href = "https://www.twitch.tv/";
twitch.target = "blank";
twitch.innerText = "twitch";

naver.href = "https://www.naver.com/";
naver.target = "blank";
naver.innerText = "naver";

insta.href = "https://www.instagram.com/";
insta.target = "blank";
insta.innerText = "instagram";

google.href = "https://www.google.com/";
google.target = "blank";
google.innerText = "google";


links.appendChild(youtube);
links.appendChild(twitch);
links.appendChild(naver);
links.appendChild(insta);
links.appendChild(google);