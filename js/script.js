document.addEventListener('DOMContentLoaded', function() {
    var menu = document.getElementById('menu');
    var navbar = document.querySelector('.navbar');
    var navLinks = navbar.querySelectorAll('ul li a');

    // active navbar fo small screen device
    
menu.addEventListener('click', function() {
    this.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
    });
    // remove class whene click in "a" after change class Name
    navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        menu.classList.remove('fa-times');
        navbar.classList.remove('nav-toggle');
    });
    });
});

// Swipper script 

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    breakpoints: {
    640: {
        slidesPerView: 2,
        spaceBetween: 20,
    },
    768: {
        slidesPerView: 3,
        spaceBetween: 40,
    },
    1024: {
        slidesPerView: 4,
        spaceBetween: 50,
    },
    },
});


// animation wehen scrolling 

// let imageinfo =  document.querySelector(".Dev-su")
// window.onscroll = (function(){
//     if(window.scrollY >= 1000){
//         imageinfo.style.transform= "translateX(0px)"
//         imageinfo.style.transition  = "1.4s ease"
//     }
// })


window.onscroll = function() {
    let elements = document.getElementsByClassName('Dev-su');
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    var scrollPosition = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var position = element.offsetTop;

    if (position < scrollPosition + windowHeight + -70) {
        element.classList.add('active');
        console.log( element.offsetTop)
    }
    }
};


let Time = Date.now()

Cookies.set('TimeVisite', `${Time}`, { expires: 2 })