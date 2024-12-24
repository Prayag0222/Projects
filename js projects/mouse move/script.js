var body = document.querySelector('body')
var circle = document.querySelector('.circle')
var h1 = document.querySelector('.h1')

body.addEventListener('mousemove', function(event) {
    var x = event.clientX;
    var y = event.clientY;
    circle.style.left = x + 'px';
    circle.style.top = y + 'px';

h1.addEventListener('mouseenter', function() {
    circle.style.transform = 'scale(5)'; // Scale to 80px based on original size
    console.log('Mouse entered h1');
});

h1.addEventListener('mouseout', function() {
    circle.style.transform = 'scale(1)'; // Reset scale when mouse leaves
});

})

