// colors = ["#1B02A3", "#006AF9", "#00C0F9", "#DC00FE", "#BC00FE", "#5319FB",]

let canvas = document.getElementById("my-canvas")
const c = canvas.getContext('2d')


 canvas.width = window.innerWidth
 canvas.height = window.innerHeight

// for(let i=0; i < 450; i++ ) {
//     const x = Math.random() * (window.innerWidth)
//     const y = Math.random() * (window.innerHeight)
//     // the first value will be null to accommodate for no 0 number being drawn
//     const colors = [ "#1B02A3", "#006AF9", "#00C0F9", "#DC00FE", "#BC00FE", "#5319FB",]
//     const randomIndex = Math.floor(Math.random() * (13 - 1)) + 1;

//     // Draw Circle
//     c.beginPath();
//     // replace "black" with the random color selected from the list
//     c.strokeStyle = colors[randomIndex];
//     c.arc(x, y, 4, 0, 1.75 * Math.PI);
//     c.arc(x, y, 8, 0, 1.25 * Math.PI);
//     c.arc(x, y, 12, 0, .75 * Math.PI);
//     c.stroke();
//     c.beginPath();
//     c.moveTo(x, y);
//     c.lineTo(x, y);
//     c.stroke()}




function Circle(x, y, dx, dy) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;

    this.draw = function() {
        c.beginPath();
    // replace "black" with the random color selected from the list
    c.strokeStyle = "#1B02A3";
    c.fillStyle = "#BC00FE";
    c.arc(this.x, this.y, 28, 0, 1.75 * Math.PI);
    c.arc(this.x, this.y, 18, 0, 1.25 * Math.PI);
    c.arc(this.x, this.y, 8, 0, .75 * Math.PI);
    c.fill();
    c.stroke();
    }
    this.update = function() {
        if(this.x > innerWidth || this.x < 0) {
            this.dx = -this.dx
          } else if(this.y > innerHeight || this.y < 0) {
            this.dy = -this.dy
          } 
        this.x += this.dx
        this.y += this.dy

        this.draw();
    }
    
}




let circleArray = []
for (let i = 0; i < 100; i++) {
    let x = Math.random() * innerWidth;
    let y = Math.random() * innerHeight;
    let dx = Math.random() - 0.5;
    let dy = Math.random() - 0.5;
    let radius = 4;
    circleArray.push(new Circle(x, y, dx, dy, radius))
    
}

const animate = () => {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, innerWidth, innerHeight)
    
    
    for (let j = 0; j < circleArray.length; j++) {
        circleArray[j].update()
    }

    

}

animate()


  









