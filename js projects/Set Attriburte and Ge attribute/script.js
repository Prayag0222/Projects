var img1 = document.querySelector('#image1')
var img2 = document.querySelector('#image2')
var btn = document.querySelector('button')

btn.addEventListener('click',function(){

var imgsrc1 = img1.getAttribute('src')
var imgsrc2 = img2.getAttribute('src')


img1.setAttribute('src',imgsrc2)
img2.setAttribute('src',imgsrc1)


})