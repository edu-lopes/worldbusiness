document.body.style.overflowX = "hidden";

function typeWrite(element) {
    const textArray = element.innerHTML.split('');
    element.innerHTML = '';
    textArray.forEach((word, i) => {
        setTimeout(() => element.innerHTML += word, 65 * i);
    });
}

const title = document.querySelector('span');
setTimeout(() => typeWrite(title), 700);


class UlNavBar {
    constructor(mobileMenuSelector, ulSelector) {
        this.mobileMenu = document.querySelector(mobileMenuSelector);
        this.ul = document.querySelector(ulSelector);
        this.activeClass = 'active';
        this.handleClick = this.handleClick.bind(this);
        this.handleResize = this.handleResize.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
    }

    handleClick() {
        console.log('Menu button clicked');
        this.ul.classList.toggle(this.activeClass);
        console.log(this.ul.classList);

        // Adiciona ou remove o evento de clique fora do navbar
        if (this.ul.classList.contains(this.activeClass)) {
            document.addEventListener("click", this.handleOutsideClick);
        } else {
            document.removeEventListener("click", this.handleOutsideClick);
        }
    }

    handleResize() {
        if (window.innerWidth > 750) {
            this.ul.classList.remove(this.activeClass);
            document.removeEventListener("click", this.handleOutsideClick);
        }
    }

    handleOutsideClick(event) {
        if (!this.ul.contains(event.target) && !this.mobileMenu.contains(event.target)) {
            this.ul.classList.remove(this.activeClass);
            document.removeEventListener("click", this.handleOutsideClick);
        }
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
        console.log('Click event added to mobile menu');
    }

    addResizeEvent() {
        window.addEventListener("resize", this.handleResize);
        console.log('Resize event added');
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
            this.addResizeEvent();
        }
        return this;
    }
}

const mobileNavBar = new UlNavBar(".mobile-menu", "ul");
mobileNavBar.init();

const target = document.querySelectorAll('[anime-data]');
const animationClass = 'animate';

function animeScroll() {
    const windowTop = window.scrollY + ((window.innerHeight * 3) / 4.2);
    target.forEach(function(element) {
        if((windowTop) > element.offsetTop) {
            element.classList.add(animationClass);
        }
        else {
            element.classList.remove(animationClass);
        }
    })
}

animeScroll();


if(target.length) {
window.addEventListener('scroll', function() {
    animeScroll();
    console.log('blabla');
})
}

document.addEventListener("DOMContentLoaded", function() {
    const profileIcon = document.querySelector(".profile-icon");
    const dropdownMenu = document.querySelector(".dropdown-menu");
    let timeout;

    function showDropdown() {
        clearTimeout(timeout);
        dropdownMenu.style.display = "block";
    }

    function hideDropdown() {
        timeout = setTimeout(() => {
            dropdownMenu.style.display = "none";
        }, 1000);
    }

    profileIcon.addEventListener("mouseenter", showDropdown);
    profileIcon.addEventListener("mouseleave", hideDropdown);
    dropdownMenu.addEventListener("mouseenter", showDropdown);
    dropdownMenu.addEventListener("mouseleave", hideDropdown);
});

document.querySelectorAll('.day').forEach(day => {
    day.addEventListener('click', function() {
        if (this.classList.contains('selected')) {
            this.classList.remove('selected');
        } else {
            document.querySelectorAll('.day').forEach(d => d.classList.remove('selected'));

            this.classList.add('selected');
        }
    });
});
