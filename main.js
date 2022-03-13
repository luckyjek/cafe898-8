"use strict";

//MouseEvent
const target = document.querySelector('.target');
document.addEventListener('mousemove', (event) => {
    const x = event.pageX;
    const y = event.pageY;

    target.style.left = `${x}px`
    target.style.top = `${y}px`
});


//Make navbar transparent when it is on the top
//만약 메뉴를 클릭하면,뷰포트 기준 그 섹션을 다 꽉 채운다.
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
    // console.log(window.scrollY);
    // console.log(`navbarHeight:${navbarHeight}`);
    if (window.scrollY > navbarHeight) {
        navbar.classList.add("navbar--dark");
    } else {
        navbar.classList.remove("navbar--dark");
    }
});

//Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
    const target = event.target;
    const link = target.dataset.link;

    if (link == null) {
        return;
    }
    navbarMenu.classList.remove("open");
    /*html에서 date-link */
    // console.log(event.target.dataset.link);
    scrollIntoView(link);
});

//Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
navbarToggleBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("open");
});

//Handle click on "contact me" button on home
const homeContactBtn = document.querySelector(".home__contact");
homeContactBtn.addEventListener("click", () => {
    scrollIntoView("#contact");
});

//Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

//Show "arrow up" button when scrolling down
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
    if (window.scrollY > homeHeight / 2) {
        arrowUp.classList.add("visible");
    } else {
        arrowUp.classList.remove("visible");
    }
});

//Handle click on the "arrow up" button
arrowUp.addEventListener("click", () => {
    scrollIntoView("#home");
});

/*코드가 중복이 되므로 함수를 하나 만든다.*/
function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({
        behavior: "smooth"
    });
}

//magazine
const firstSlide = document.querySelector('.magazine__slider-item:first-child');
const lastSlide = document.querySelector('.magazine__slider-item:last-child');

function nextSlide() { //자동으로 작동하는 캐로쉘의 slide 함수와 같다.
    const currentSlide = document.querySelector('.showing');
    if (currentSlide) {
        currentSlide.classList.remove('showing');
        const nextSlide = currentSlide.nextElementSibling;
        if (nextSlide) {
            nextSlide.classList.add('showing');
        } else {
            firstSlide.classList.add('showing');
        }
    } else {
        firstSlide.classList.add('showing');
    }
}

/*  nextSlide 함수에서는 다음 형제 노드를 가져왔고, 마지막 이미지 요소가 
 *  showing 클래스를 가지고 있을 때 next 버튼(오른쪽 화살표)이 click 되었다면 
 *  다시 첫번째 이미지 요소에 showing 클래스를 추가했다.
 *
 *  prevSlide 함수에서는 다음 형제 노드 대신 이전 형제 노드를 가져오는 것, 첫 이미지 요소가 
 *  showing 클래스를 가지고 있을 때 prev 버튼(왼쪽 화살표)이 click 되었다면
 *  마지막 이미지 요소에 showing 클래스를 추가하는 것이 다르다.
 */

function prevSlide() {
    const currentSlide = document.querySelector('.showing');
    if (currentSlide) {
        currentSlide.classList.remove('showing');
        const prevSlide = currentSlide.previousElementSibling;

        if (prevSlide) {
            prevSlide.classList.add('showing');
        } else {
            lastSlide.classList.add('showing');
        }
    } else {
        lastSlide.classList.add('showing');
    }
}


//magazine
// const firstSlide = document.querySelector('.magazine__slider-item:first-child');
// const lastSlide = document.querySelector('.magazine__slider-item:last-child');
// const currentSlide = document.querySelector('.showing');

// function slide() {
//     const nextSlide = currentSlide.nextElementSibling;
//     const prevSlide = currentSlide.previousElementSibling;

//     if (currentSlide) {
//         currentSlide.classList.remove('showing');

//         if (nextSlide) {
//             nextSlide.classList.add('showing')
//         } else {
//             firstSlide.classList.add('showing');
//         }
//         firstSlide.classList.add('showing');

//         if (prevSlide) {
//             prevSlide.classList.add('showing');
//         } else {
//             lastSlide.classList.add('showing');
//         }
//         lastSlide.classList.add('showing');

//     }
// }

document.getElementById('prev').addEventListener('click', prevSlide);
document.getElementById('next').addEventListener('click', nextSlide);