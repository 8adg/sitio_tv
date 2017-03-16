$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    navText : ["<img src='img/prev.svg' height='30px'>","<img src='img/next.svg' height='30px'>"],
    rewindNav : true,
    loop:true,
    margin:10,
    responsiveClass:true,
    autoHeight : true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1024:{
            items:4,
            nav:true,
            loop:false
        }
    }
})
});