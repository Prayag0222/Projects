var body  = document.querySelector('body')
var btn  = document.querySelector('.buttons')

var buttons = document.querySelectorAll('.buttons button');

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        body.style.backgroundColor = button.textContent.toLowerCase();
    });
});