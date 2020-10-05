const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/01.jpg') {
      myImage.setAttribute ('src','images/02.jpg');
    } else {
      myImage.setAttribute ('src','images/01.jpg');
    }
}