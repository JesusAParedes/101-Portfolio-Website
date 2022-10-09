// colors = ["#1B02A3", "#006AF9", "#00C0F9", "#DC00FE", "#BC00FE", "#5319FB",]

let canvas = document.getElementById("my-canvas")
const c = canvas.getContext('2d')


 canvas.width = window.innerWidth
 canvas.height = window.innerHeight

for(let i=0; i < 450; i++ ) {
    const x = Math.random() * (window.innerWidth)
    const y = Math.random() * (window.innerHeight)
    // the first value will be null to accommodate for no 0 number being drawn
    const colors = [ "#1B02A3", "#006AF9", "#00C0F9", "#DC00FE", "#BC00FE", "#5319FB",]
    const randomIndex = Math.floor(Math.random() * (13 - 1)) + 1;

    // Draw Circle
    c.beginPath();
    // replace "black" with the random color selected from the list
    c.strokeStyle = colors[randomIndex];
    c.arc(x, y, 4, 0, 1.75 * Math.PI);
    c.arc(x, y, 8, 0, 1.25 * Math.PI);
    c.arc(x, y, 12, 0, .75 * Math.PI);
    c.stroke();
    c.beginPath();
    c.moveTo(x, y);
    c.lineTo(x, y);
    c.stroke()}



  









