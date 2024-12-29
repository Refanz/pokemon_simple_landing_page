let slideIndex = -1;

const runAutomaticSlides = () => {
    let imgSlides = document.querySelectorAll(".jumbotron-img img");

    for (let i = 0; i < imgSlides.length; i++) {
        imgSlides[i].className = imgSlides[i].className.replace("active", "");
    }

    slideIndex++;

    if (slideIndex === 3) {
        slideIndex = 0;
    }

    imgSlides[slideIndex].className += "active";
    setTimeout(runAutomaticSlides, 2000);
}

runAutomaticSlides();

const currentSlide = (num) => {
    showImageSlide(slideIndex = num - 1);
}

const showImageSlide = (num) => {
    let imgSlides = document.querySelectorAll(".jumbotron-img img");

    for (let i = 0; i < imgSlides.length; i++) {
        imgSlides[i].className = imgSlides[i].className.replace("active", "");
    }

    imgSlides[num].className += "active";
}