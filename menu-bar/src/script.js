const body = document.querySelector('body')
const nav = document.querySelector('nav')
const menuIcon = nav.querySelector('.main-content .sidebar-top .menu')
const logoVet = nav.querySelector('.main-content .sidebar-top .logo')
const searchIcon = nav.querySelector('.main-content .sidebar-content .search')
const sidebarT = nav.querySelector('.main-content .sidebar-top')
const profile = nav.querySelector('.sidebar-footer .profile')
const logout = nav.querySelector('.sidebar-footer .logout-icon')
const sidebarF = nav.querySelector('.sidebar-footer')
const sidebarC = nav.querySelector('.sidebar-content')
const mainContent = nav.querySelector('.main-content')
const logo = nav.querySelector('.main-content .sidebar-top .logo .icon')

// OPEN-CLOSE MENU

menuIcon.addEventListener('click', function(){
    nav.classList.toggle('close-nav')
    logoVet.classList.toggle('close')
    searchIcon.classList.toggle('close')
    sidebarT.classList.toggle('close-sidebarT')
    profile.classList.toggle('close')
    logout.classList.toggle('close-logout')
    sidebarF.classList.toggle('close-sidebarF')
    button.classList.toggle('button-close')
})

// DARK-LIGHT THEME

const button = nav.querySelector('.button-theme')
const selector = button.querySelector('.selector')

button.addEventListener('click', function(){
    selector.classList.toggle('switch-theme')
    nav.classList.toggle('dark-nav')
    sidebarF.classList.toggle('dark-sidebarF')
    sidebarC.classList.toggle('dark-sidebarC')
    searchIcon.classList.toggle('.search-dark')
    mainContent.classList.toggle('dark-mainContent')
    logo.classList.toggle('dark-logo')
    menuIcon.classList.toggle('dark-menu')
    body.classList.toggle('dark-body')
    
})
