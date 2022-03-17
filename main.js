"use strict";

const target = document.querySelector('.target');
document.addEventListener('mousemove', (event) => {
    const x = event.pageX;
    const y = event.pageY;

    target.style.left = `${x}px`
    target.style.top = `${y}px`
});

const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
    //console.log(window.scrollY);
    //console.log(`navbarHeight:${navbarHeight}`);
    if (window.scrollY > navbarHeight) {
        navbar.classList.add("navbar--dark");
    } else {
        navbar.classList.remove("navbar--dark");
    }
});

const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
    const target = event.target;
    const link = target.dataset.link;

    if (link == null) {
        return;
    }
    //html에서 date-link설정-> scrollIntoView()호출
    //console.log(event.target.dataset.link);
    scrollIntoView(link);
});

//samll screen 일때 적용되는 toggle버튼
const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
navbarToggleBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("open");
});

//'contact me' 버튼을 눌렀을때 contact section으로 이동
const homeContactBtn = document.querySelector(".home__contact");
homeContactBtn.addEventListener("click", () => {
    scrollIntoView("#contact");
});

//윈도우 스크롤을 내렸을때 살며시 사라지게함
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

//스크롤을 반정도 내렸을때 "arrow up"버튼이 보이게함
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
    if (window.scrollY > homeHeight / 2) {
        arrowUp.classList.add("visible");
    } else {
        arrowUp.classList.remove("visible");
    }
});

//'arrow up' 버튼을 누를시, 최상단으로 올라간다.
arrowUp.addEventListener("click", () => {
    scrollIntoView("#home");
});

//코드가 중복이 되므로 scrollIntoView 함수를 하나 만들었다.
function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({
        behavior: "smooth"
    });
}

/*nextSlide 함수에서는 다음 형제 노드를 가져왔고, 마지막 이미지 요소가 
 *showing 클래스를 가지고 있을 때 next 버튼(오른쪽 화살표)이 click 되었다면 
 *다시 첫번째 이미지 요소에 showing 클래스를 추가했다.
 *
 *prevSlide 함수에서는 다음 형제 노드 대신 이전 형제 노드를 가져오는 것, 첫 이미지 요소가 
 *showing 클래스를 가지고 있을 때 prev 버튼(왼쪽 화살표)이 click 되었다면
 *마지막 이미지 요소에 showing 클래스를 추가하는 것이 다르다.
 */
const firstSlide = document.querySelector('.magazine__slider-item:first-child');
const lastSlide = document.querySelector('.magazine__slider-item:last-child');

function nextSlide() {
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

document.getElementById('prev').addEventListener('click', prevSlide);
document.getElementById('next').addEventListener('click', nextSlide);
