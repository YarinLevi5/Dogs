let dogImg = document.querySelector('#dogImg');
let heading = document.querySelector('h1');

function randomDogImg() {

    heading.classList.add('none');

    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(function (data) {
            let dogPic = data.message;
            return dogImg.src = dogPic;
        })
        .catch(error => console.log(error));
}
setInterval(randomDogImg, 3000);