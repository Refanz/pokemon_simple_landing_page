let slideIndex = 1;

const currentSlide = (num) => {
    showImageSlide(num);
}

const showImageSlide = (num) => {
    let imgSlides = document.querySelectorAll(".jumbotron-img img");

    for (let i = 0; i < imgSlides.length; i++) {
        imgSlides[i].className = imgSlides[i].className.replace("active", "");
    }

    imgSlides[num - 1].className.a
}