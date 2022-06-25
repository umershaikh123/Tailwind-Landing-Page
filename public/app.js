const menuToggleIcon = document.querySelector('#menu-toggle-icon');

const toggleMenu = () =>{
    const mobileMenu = document.querySelector('#Menu');
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');
}

menuToggleIcon.addEventListener('click', toggleMenu);


