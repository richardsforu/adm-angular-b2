let indianClock = document.querySelector("#indianClock");
let dubaiClock = document.querySelector("#dubaiClock");
let usClock = document.querySelector("#usClock");


function jsClock(props) {

    let date = new Date().toLocaleTimeString('en-US', { timeZone: props })

    let ui = `
    <div>
        <div> ${props} </div>
        <p> ${date} </p>
    </div>
    `
    return ui;

}

setInterval(() => {

    indianClock.innerHTML = jsClock('Asia/Kolkata');
    dubaiClock.innerHTML = jsClock('Asia/Dubai');
    usClock.innerHTML = jsClock('America/New_York');

}, 1000)

