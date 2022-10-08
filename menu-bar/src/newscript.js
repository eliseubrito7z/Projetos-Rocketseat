const nav = document.querySelector('nav')
const menuIcon = nav.querySelector('.main-content .sidebar-top .menu')
const logoVet = nav.querySelector('.main-content .sidebar-top .logo')
const searchIcon = nav.querySelector('.main-content .sidebar-content .search')
const sidebarT = nav.querySelector('.main-content .sidebar-top')
const profile = nav.querySelector('.sidebar-footer .profile')
const logout = nav.querySelector('.sidebar-footer .logout-icon')
const sidebarF = nav.querySelector('.sidebar-footer')


menuIcon.addEventListener('click', function(){
    nav.classList.toggle('close-nav')
    logoVet.classList.toggle('close')
    searchIcon.classList.toggle('close')
    sidebarT.classList.toggle('close-sidebarT')
    profile.classList.toggle('close')
    logout.classList.toggle('close-logout')
    sidebarF.classList.toggle('close-sidebarF')
})