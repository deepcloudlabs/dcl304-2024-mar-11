function fun(e) {
    console.log("button is just clicked");
    console.log(e);
}
function gun() {
    console.log("After 5 seconds...");
}
function application() {
    const btn1 = document.getElementById("btn1");
    btn1.addEventListener("click", fun);
    window.setInterval(gun, 1_000);
}

window.addEventListener("load", application);