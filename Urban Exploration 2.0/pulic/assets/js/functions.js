AOS.init();
//
//Header Animation
//
function headerAnimation() {
    var header = document.querySelector("header");
    var scrollPos = window.scrollY || document.documentElement.scrollTop;

    var scrollDistance = 50;

    if (scrollPos >= scrollDistance) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
}

window.addEventListener("scroll", headerAnimation);

headerAnimation();

//Back to top button animation
function backTop(){
    var btn = document.getElementById("back-to-top");
    var scrollPos = window.scrollY || document.documentElement.scrollTop;

    var scrollDistance = 400;

    if (scrollPos >= scrollDistance) {
        btn.classList.add("show");
    } else {
        btn.classList.remove("show");
    }
}
window.addEventListener("scroll", backTop);
backTop();

//gallery functionality
const images = [
    './assets/images/gallery/14-min.jpg',
    './assets/images/gallery/15-min.jpg',
    './assets/images/gallery/16-min.jpg',
    './assets/images/gallery/04-min.jpg',
    './assets/images/gallery/18-min.jpg',
    './assets/images/gallery/19-min.jpg',
    './assets/images/gallery/20-min.jpg',
    './assets/images/gallery/11.jpg',
    './assets/images/gallery/12.jpg',
    './assets/images/gallery/13.jpg',
    './assets/images/gallery/21.jpg',
    './assets/images/gallery/22.jpg',
    './assets/images/gallery/23.jpg',
    './assets/images/gallery/24.jpg',
    './assets/images/gallery/25.jpg',
    './assets/images/gallery/26.jpg',
    './assets/images/gallery/27.jpg',
    './assets/images/gallery/17-min.jpg'
];

let currentIndex = 0;
const modalImage = document.getElementById('gallery-img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updateModalContent() {
    modalImage.src = images[currentIndex];
}

prevBtn.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateModalContent();
});

nextBtn.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % images.length;
    updateModalContent();
});

// Handle modal show event
$('#myModal6').on('show.bs.modal', function(event) {
    const triggerElement = event.relatedTarget;
    currentIndex = parseInt(triggerElement.getAttribute('alt').replace('Image ', '')) - 1;
    updateModalContent();
});

function category(){
    const firstCategory = document.getElementById("abandoned"),
              secondCategory = document.getElementById("destroyed"),
              firstBtn = document.getElementById('abond-btn'),
              secBtn = document.getElementById("destroy-btn");

        firstBtn.addEventListener("click", ()=>{
            if (firstCategory.style.display = 'none') {
                firstCategory.style.display = 'block';
                secBtn.classList.remove("btn-grey");
                secBtn.classList.add("btn-orange");
                firstBtn.classList.add("btn-grey");
                secondCategory.style.display = 'none';
            }else{
                firstCategory.style.display = 'none'
                firstBtn.classList.add(".btn-grey");
            }
        });
        secBtn.addEventListener('click', ()=>{
            if(secondCategory.style.display = 'none'){
                secondCategory.style.display = 'block';
                firstBtn.classList.remove("btn-grey");
                firstBtn.classList.add("btn-orange");
                secBtn.classList.add("btn-grey");
                firstCategory.style.display = 'none';
            }else{
                secondCategory.style.display = 'none';
            }
        })
}
