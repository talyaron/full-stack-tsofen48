var Copyimages = [];
function getImages() {

    fetch('/get-images')
        .then(r => r.json())
        .then(images => {
            console.log('then')
            renderImages(images)
            getImagesForRating(images)
        })
}

function getSortedImages(){

    fetch('/get-sorted-images')
    .then(r => r.json())
    .then(sortedImages => {
        console.log('then')
        renderSortedImages(sortedImages)
    })
}

function handleSubmit(e) {
    e.preventDefault();

    let img = e.target.elements.img.value;

    fetch('/addImg', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify({img})
    }).then(r => r.json())
        .then(data => {
            console.log(data)
            return data;
        })
}

function renderImages(images) {
    const root = document.querySelector('#root');
    let html = '';
    images.forEach(function (img, index) {
        html += `<div class="item"><img class="img" src="${img.url}"/><div id="${index}" class="score">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <button id="1" onclick="RateImg(this)"><span class="fa fa-star"></span></button>
        <button  id="2" onclick="RateImg(this)"><span class="fa fa-star"></span></button>
        <button id="3" onclick="RateImg(this)"><span class="fa fa-star"></span></button>
        <button id="4" onclick="RateImg(this)"><span class="fa fa-star"></span></button>
        <button id="5" onclick="RateImg(this)"><span class="fa fa-star"></span></button>
        </div></div>`
    })
    root.innerHTML = html
}

function renderSortedImages(images) {
    const Sortedroot = document.querySelector('#Sortedroot');
    let html = '';
    images.forEach(img => {
        html += `<div class="item"><img class="img" src="${img.url}"/><div id="SortedScore" class="score">${img.score}</div></div>`
    })
    Sortedroot.innerHTML = html
}

function getImagesForRating(images) {
    Copyimages = images;
}

function RateImg(elemnt){

    let imgID = elemnt.id;
    let divID = elemnt.parentNode.id;
  
    let StarsList = elemnt.parentNode.getElementsByTagName("button");
    for(let i = 0 ; i < imgID; i++)
    {
        let span = StarsList[i].getElementsByTagName("span");
        span[0].className = "fa fa-star checked";
    }

    Copyimages.forEach(function (img,index) {
        if(divID == index){
            img.score = parseInt(imgID);
        }
    })

    SendImagesAfterRating();
}

function SendImagesAfterRating() {

    fetch('/ImagesAfterRating', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify({Copyimages})
    }).then(r => r.json())
        .then(data => {
            console.log(data)
            return data;
        })
}