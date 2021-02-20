const navLink = document.querySelectorAll('.nav__link')
const navBurger = document.querySelector('.nav__burger')
const navBurgerOpen = document.querySelector('.nav__burger--open')
const navBurgerClose = document.querySelector('.nav__burger--close')
const navList = document.querySelector('.nav__list')

for (let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener('click', function (e) {
        e.preventDefault()
    })
}

navBurger.addEventListener('click', function () {
    console.log( navList.style.display )

    if (navList.style.display == 'block') {
        navList.style.display = 'none'
        navBurgerOpen.style.display = 'block'
        navBurgerClose.style.display = 'none'
    } else {
        navList.style.display = 'block'
        navBurgerOpen.style.display = 'none'
        navBurgerClose.style.display = 'block'
    }
})
