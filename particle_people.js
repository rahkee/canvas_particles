const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// square
c.fillStyle = '#b4da55';
c.fillRect(5, 5, 5, 5);
c.fillStyle = 'green';
c.fillRect(10, 10, 10, 10);
c.fillStyle = 'red';
c.fillRect(20, 20, 20, 20);

// line
c.beginPath();
c.moveTo(50, 50);
c.lineTo(100, 100);
c.strokeStyle = '#b4da55';
c.lineTo(125, 50);
c.stroke();

// arc
c.beginPath();
c.arc(200, 200, 30, 0, Math.PI * 2, false);
c.strokeStyle = 'blue';
c.stroke();
