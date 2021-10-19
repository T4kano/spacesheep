class MobileNavbar {
    constructor(toggler, navList, navLinks) {
        this.toggler = document.querySelector(toggler);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${
                    index / 7 + 0.3
                }s`);
        })
    }

    handleClick() {
        console.log(this);
        this.navList.classList.toggle(this.activeClass);
        this.toggler.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.toggler.addEventListener("click", this.handleClick);
    }

    init() {
        console.log("opa 1")
        if (this.toggler) {
            console.log("opa 2");
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".nav__toggler",
    ".nav__list",
    ".nav__list li",
)

mobileNavbar.init();
