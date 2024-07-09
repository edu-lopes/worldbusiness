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
    const windowTop = window.scrollY + ((window.innerHeight * 3) / 4.5);
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