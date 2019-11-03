var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext('2d');

function Circle(x, y, dx, dy, radius, gradient) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function() {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.strokeStyle = '#43aa8b';
        context.lineWidth = 4;
        context.stroke();
        context.fillStyle = '#254441';
        context.fill();
    };

    this.update = function() {
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    };
}

var x, y, dx, dy, radius;
var circleArray = [];

// solid
for (let i = 0; i < 2000; i++) {
    radius = Math.random() * 20;
    x = Math.random() * (canvas.width - radius * 2) + radius;
    y = Math.random() * (canvas.height - radius * 2) + radius;
    dx = (Math.random() - 0.5) * 0.2;
    dy = (Math.random() - 0.5) * 0.2;

    circleArray.push(new Circle(x, y, dx, dy, radius));
}

// liquid
// for (let i = 0; i < 1000; i++) {
//     radius = Math.random() * 20;
//     x = Math.random() * (canvas.width - radius * 2) + radius;
//     y = Math.random() * (canvas.height - radius * 2) + radius;
//     dx = (Math.random() - 0.5) * 5;
//     dy = (Math.random() - 0.5) * 5;

//     circleArray.push(new Circle(x, y, dx, dy, radius));
// }

// gas
// for (let i = 0; i < 100; i++) {
//     radius = Math.random() * 20;
//     x = Math.random() * (canvas.width - radius * 2) + radius;
//     y = Math.random() * (canvas.height - radius * 2) + radius;
//     dx = (Math.random() - 0.5) * (20 - 10) + 10;
//     dy = (Math.random() - 0.5) * (20 - 10) + 10;

//     circleArray.push(new Circle(x, y, dx, dy, radius));
// }

function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}

animate();
