let canvas = document.querySelector('canvas');
canvas.width = 610;
canvas.height = 610;

let c = canvas.getContext('2d');

window.addEventListener('resize', function () {
    canvas.width = canvas.width;
    canvas.height = canvas.height;
    init();
})


let X = [47, 47, 564, 564];
let Y = [564, 564, 47, 47];

function Circle(x, y, r, color, dx, dy) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.draw = function () {
        c.beginPath();
        c.arc(x, y, r, 0, Math.PI * 2, false);
        c.fillStyle = color;
        c.fill();
    }

    this.update = function () {
        if ((x + r) > 578 || (x - r) < 33) {
            dx = -dx;
        } else if ((y + r) > 578 || (y - r) < 33) {
            dy = -dy;
        } else if ((x < 50 && y < 50) ||
            (x < 50 && y > 555) ||
            (x > 555 && y < 50) ||
            (x > 555 && y > 555)) {
            r = 0;
            alert('Cobgratualations!!! You Won! :)))')    
        }
                
        x += dx;
        y += dy;
        this.draw();
    }

}

let striker = [];

function init() {
    striker = [];
    let x = Math.floor(Math.random() * (251)) + 220;
    let y = 505.5;
    let dx = Math.random() * 5;
    let dy = Math.random() * 5;
    let r = 12;
    let R = Math.floor(Math.random() * 180 + 1);
    let g = Math.floor(Math.random() * 0 + 1);
    let b = Math.floor(Math.random() * 180 + 1);
    let color = "rgb( " + R + "," + g + "," + b + ")";
    striker.push(new Circle(x, y, r, color, dx, dy));
}

function animate() {
    c.clearRect(0, 0, innerWidth, innerHeight);
    requestAnimationFrame(animate);
    striker[0].update();
}
init();
animate();