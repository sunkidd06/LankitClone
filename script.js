
let btnNextElement = document.querySelector("#next");
let titleHeaderElement = document.querySelector("#title__header");
let footerContentElement = document.querySelector("#footer--content");
let imgElement = document.querySelector("#slider__img--item");
console.log(titleHeaderElement);
var i = 1;
function Slide(index) {
    let sliderimgElement = document.getElementById("slider__img");
    let sliderContentElement = document.getElementById("slider__content");
    if (i < 0) {
        i = 1;
    }
    if (i > 2) {
        i = 2;
    }

    if (index != i) {
        sliderimgElement.classList.add("active");
        sliderContentElement.classList.add("active");
        titleHeaderElement.innerHTML = "“I've never used a theme as versatile and flexible as Landkit. It's my go to for building landing sites on almost any project.”";
        footerContentElement.innerHTML = "Russ D'Sa";
        document.getElementById("slider__img--item").src = "./access/imgs/photo-1.jpg";
        i++;
        setTimeout(() => {
            if (sliderimgElement.classList.contains("active") && sliderContentElement.classList.contains("active")) {
                sliderimgElement.classList.remove("active");
                sliderContentElement.classList.remove("active");
            }
        }, 500);
    }

    else {
        sliderimgElement.classList.add("active");
        sliderContentElement.classList.add("active");
        titleHeaderElement.innerHTML = "“Landkit is hands down the most useful front end Bootstrap theme I've ever used. I can't wait to use it again for my next project.”";
        footerContentElement.innerHTML = "Dave Gamache";
        document.getElementById("slider__img--item").src = "./access/imgs/photo-26.jpg";
        i--;
        setTimeout(() => {
            if (sliderimgElement.classList.contains("active") && sliderContentElement.classList.contains("active")) {
                console.log("flag 1");
                sliderimgElement.classList.remove("active");
                sliderContentElement.classList.remove("active");
            }
        }, 1100);
    }

    console.log(`I: ${i}`);

}
function validate() {
    let checkBoxElement = document.getElementById("checkbox");
    let checkLabelElement = document.getElementById("check-label");
    let interval = 1000;
    let PriceElement = document.getElementById("card--detail__header--price");


    if (checkBoxElement.checked) {
        let endValue = PriceElement.getAttribute("data-val");
        let duration = Math.floor(interval / endValue);
        let startValue = 29;
        checkLabelElement.style.setProperty("background-color","#335eea");
        let couter = setInterval(function () {
            startValue += 1;
            PriceElement.textContent = startValue;
            console.log(startValue);
            if (startValue == endValue) {
                clearInterval(couter);
            }
        }, duration);
    }
    if (!checkBoxElement.checked) {

        let endValue = 29;
        let duration = Math.floor(interval / endValue);
        let startValue = 49;
        checkLabelElement.style.setProperty("background-color","#d9e2ef");

        let couter = setInterval(function () {
            startValue -= 1;
            PriceElement.textContent = startValue;
            console.log(startValue);
            if (startValue == endValue) {
                clearInterval(couter);
            }
        }, duration);
    }
}

function toggleMenu() {
    let menuToggleElement = document.querySelector("#menuToggle");
    let bodyElement = document.body;
    console.log(bodyElement);
    if (menuToggleElement.classList.contains("hidden")) {
        menuToggleElement.classList.remove("hidden");
        menuToggleElement.classList.add("active");
        bodyElement.style.overflow = "hidden";
    }
}
function handleHidden() {
    let bodyElement = document.body;
    let menuToggleElement = document.querySelector("#menuToggle");
    if (menuToggleElement.classList.contains("active")) {
        menuToggleElement.classList.remove("active");
        menuToggleElement.classList.add("hidden");
        bodyElement.style.overflow = "scroll";

    }
}
function myFunction() {
    let bodyElement = document.body;
    var width = bodyElement.offsetWidth;
    var height = window.innerHeight;
    console.log(width);
    let menuToggleElement = document.querySelector("#menuToggle");
    if (width > 990) {
        if (menuToggleElement.classList.contains("active")) {
            menuToggleElement.classList.remove("active");
            menuToggleElement.classList.add("hidden");
            bodyElement.style.overflow = "scroll";

        }
    }
}

function toggle_dropdown(index) {
    let toggleDropdown = document.querySelector(`#dropdown-menu${index}`);
    console.log(`#dropdown-menu${index}`);
    if (toggleDropdown.classList.contains("active")) {
        toggleDropdown.classList.remove("active");
        toggleDropdown.classList.add("hidden");

    }
    else {
        toggleDropdown.classList.remove("hidden");
        toggleDropdown.classList.add("active");
    }
}

function revealLeft() {
    var revealLeft = document.querySelectorAll(".content--left");
    // var revealLeft = document.querySelectorAll(".content--right");
    // console.log(revealLeft);

    for (var i = 0; i < revealLeft.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = revealLeft[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            revealLeft[i].classList.add("active");
        } else {
            revealLeft[i].classList.remove("active");
        }
    }

}
function revealRight() {
    var revealRight = document.querySelectorAll(".content--right");
    // var revealRight = document.querySelectorAll(".content--right");
    // console.log(revealRight);

    for (var i = 0; i < revealRight.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = revealRight[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            revealRight[i].classList.add("active");
        } else {
            revealRight[i].classList.remove("active");
        }
    }
}
function Increment() {

    var reveal = document.getElementById("section--6");
    var windowHeight = window.innerHeight;
    var elementTop = reveal.getBoundingClientRect().top;
    var elementVisible = 200;

    if (elementTop < windowHeight - elementVisible) {
        let val100Element = document.getElementById("val100");
        let Sale100Element = document.getElementById("Sale100");
        let interval = 1000;

        let endValue = val100Element.getAttribute("data-val");
        console.log("End value", endValue);
        let duration = Math.floor(interval / endValue);
        let startValue = 0;

        let couter = setInterval(function () {
            startValue += 1;
            val100Element.textContent = startValue;
            Sale100Element.textContent = startValue;
            if (startValue == endValue) {
                clearInterval(couter);
            }
        }, duration);
    }
}

window.addEventListener("scroll", revealLeft);
window.addEventListener("scroll", revealRight);
window.addEventListener("scroll", Increment);