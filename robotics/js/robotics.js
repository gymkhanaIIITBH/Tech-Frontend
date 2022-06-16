let toggling =document.getElementById('navLinks');
let togglerchange = document.getElementById('togglerchange');

function togglerFunc(){
    if(toggling.style.display==="block"){
        toggling.style.display="none";
        togglerchange.children[0].className="fa fa-regular fa-align-justify";
    }else{
        togglerchange.children[0].className="fa fa-regular fa-align-right";
        toggling.style.display="block";
    }
}

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    loop: true,
});