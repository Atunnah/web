const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const scrollToTop = $(".scroll-to-top");
const sections = $$("section");
const navs = $$("#nav .nav-item");
const processes = $$("#skills .chart .item .process");

window.addEventListener("scroll", () => {
    if(window.scrollY < 300) {
        scrollToTop.style.display = "none";
    }
    else {
        scrollToTop.style.display = "flex";
    }
    sections.forEach((sec, i) => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let screenHeight = window.innerHeight;
        if(offset - top <= screenHeight / 2) {
            navs.forEach((nav) => {
                nav.classList.remove("active");
                nav[i].classList.add("active");
            });
        }
    });
});
scrollToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

let mySideNav = document.querySelector('.side-nav');
let myExit = document.querySelector('.exit-bar');

function showSideNav() {
    if(mySideNav.style.left === "-100%" && myExit.style.display === "none") {
        mySideNav.style.left = "0";
        myExit.style.display = "flex";
    } else {
        mySideNav.style.left = "-100%";
        myExit.style.display = "none";
    }
    if(mySideNav.style.left === "0" && myExit.style.display === "flex") {
        mySideNav.style.left = "-100%";
        myExit.style.display = "none";
    }
}

processes.forEach((pro) => {
    pro.style.setProperty("--process", pro.dataset.number);
});
