let headerEl = document.querySelector('.header');
let burgerBtn = document.querySelector('.btn-mobile-nav');
let faqBtns = document.querySelectorAll('.faq-toggle');
let galleryImages = document.querySelectorAll('.gallery-item');
let modalImg = document.querySelector('.img-place');
let galleryPrevtBtn = document.getElementById('#gallery-left-btn');
let galleryNextBtn = document.getElementById('#gallery-right-btn');
let modalEl = document.querySelector('.modal')
let closeModal = document.querySelector('.close-gallery');
let getLatestOpenedImg;
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
bodyRect = document.body.getBoundingClientRect();
// let aweyFromTop = bodyRect.top;



// Hamburger Button
burgerBtn.addEventListener('click', function() {
    headerEl.classList.toggle('nav-open')
});

// Faq Toggle
faqBtns.forEach(btn => {
    btn.addEventListener('click', function(){
        btn.parentNode.classList.toggle('active');
    })
});



// Gallery
galleryImages.forEach((image, index) => {
    // console.log(image.getAttribute('src'));

    // Preview
    image.addEventListener('click', () => {
        let imgSrcAttribute = image.getAttribute('src');
        let imgSrcNumber = imgSrcAttribute.split('img/kaca/gallery/');
        let setNewSrcAtr = imgSrcNumber[1]
        // console.log(setNewSrcAtr);

        
        modalEl.style.transform = "translate(-50%, -50%)";

        // document.querySelector('.modal').style.marginTop = `${aweyFromTop * 2}px`
        // console.log(MDLheight);

        modalEl.style.display = "flex";

        let newImg = document.createElement("img");
        modalImg.appendChild(newImg);
        newImg.setAttribute("src", "img/kaca/gallery/" + setNewSrcAtr);
        newImg.setAttribute("id", "current-img")
        // console.log(newImg);

        getLatestOpenedImg = index + 1;
        // modalImg.innerHTML = `<img src="${imgSrcAttribute}">`
    })
});



function changeImg(changeDir){
    document.querySelector('#current-img').remove();

    let getImgWindow = document.querySelector('.img-window');
    let newImg = document.createElement("img");
    getImgWindow.appendChild(newImg);

    let calcNewImg;
    if (changeDir === 1) {
        calcNewImg = getLatestOpenedImg + 1;

        if (calcNewImg > galleryImages.length) {
            calcNewImg = 1
        }
    } else if(changeDir === 0) {
        calcNewImg = getLatestOpenedImg - 1;

        if (calcNewImg < 1) {
            calcNewImg = galleryImages.length;
        }
    }

    newImg.setAttribute("src", "img/kaca/gallery/img-" + calcNewImg + ".jpg");
    newImg.setAttribute("id", "current-img");

    getLatestOpenedImg = calcNewImg;
}

// Closing modal
closeModal.addEventListener('click', () => {
    modalEl.style.display = "none";
})

