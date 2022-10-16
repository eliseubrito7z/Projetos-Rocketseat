const checkbox = document.querySelector('.box__checkbox')
const email = document.querySelector('.input__email')

// function for change the background of checkbox (tag 'i') when clicked
checkbox.addEventListener('click', function(){
    checkbox.classList.toggle('checked')
    
})