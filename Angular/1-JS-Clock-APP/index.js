let indianClock = document.querySelector("#indianClock");
let dubaiClock = document.querySelector("#dubaiClock");
let usClock = document.querySelector("#usClock");


function jsClock(props) {

    let date = new Date();

    let ui = `
    <div>
        <span> ${props} </span>
        <p> ${date.toLocaleTimeString('en-US',{timeZone:props})} </p>
    </div>
    `
    return ui;

}



setInterval(() => {
    indianClock.innerHTML = jsClock('asia/kolkata');
    dubaiClock.innerHTML = jsClock('asia/dubai');
    usClock.innerHTML = jsClock('america/new_york');
}, 1000)