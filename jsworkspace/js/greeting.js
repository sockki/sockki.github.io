const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginWapper = document.querySelector("#loginWrapper")
const mainWrapper = document.querySelector("#mainWrapper");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";   // string 값 변수로 정의
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);   // localstorage에 유저네임 저장
    loginForm.classList.add(HIDDEN_CLASSNAME);     // input form 지우기
    paintMain(username);
}

function paintMain(username){
    loginWapper.classList.remove("login-wrapper");
    loginWapper.classList.add(HIDDEN_CLASSNAME);
    mainWrapper.classList.remove(HIDDEN_CLASSNAME);
    mainWrapper.classList.add("main-wrapper");
    greeting.innerText = `Hello ${username}`
    const div = document.createElement("div");
    div.innerText = 'How are you today?';
    div.id = "greeting2";
    greeting.appendChild(div);
}

function paintlogin() {
    loginWapper.classList.add("login-wrapper");
    loginWapper.classList.remove(HIDDEN_CLASSNAME);
    mainWrapper.classList.add(HIDDEN_CLASSNAME);
    mainWrapper.classList.remove("main-wrapper");
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);  


if(savedUsername === null) {  // localstrage에 유저네임 없으면 input form 사용, 없으면 바로 h1으로 유저네임 display
    paintlogin();
} else {
    paintMain(savedUsername);
}