var img = document.querySelector('.img');
var body = document.querySelector('body');

var movex = 0;
var movey = 0;
body.addEventListener('keydown', function(dets) {
    if (dets.code === 'ArrowRight') {
        movex++;
        console.log('arrow right clicked', movex);
    } else if (dets.code === 'ArrowLeft') {
        movex--;
        console.log('arrow left clicked', movex);
    } else if (dets.code === 'ArrowUp') {
        movey++;
        console.log('arrow up clicked', movey);
    } else if (dets.code === 'ArrowDown') {
        movey--;
        console.log('arrow down clicked', movey);
    } else {
        console.log('other key pressed');
    }

    img.style.left = movex + '2px'
    img.style.bottom = movey + '2px'
});
