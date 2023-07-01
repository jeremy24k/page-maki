let buttomSwitch = document.getElementById('buttom-switch')
let changeForm = document.getElementById('form')

buttomSwitch.addEventListener('click', ()=> {
    buttomSwitch.classList.toggle('active')
    changeForm.classList.toggle('change-form')
});