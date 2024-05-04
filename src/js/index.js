let email_registrar = document.querySelector('#email_registrar')
let senha_registrar = document.querySelector('#senha_registrar')
let email_entrar = document.querySelector('#email_entrar')
let senha_entrar = document.querySelector('#senha_entrar')

let enviar_registro = document.querySelector('#enviar_registro')
let enviar_entrar = document.querySelector('#enviar_entrar')
let btn_apagar_registro = document.querySelector('#btn_apagar_registro')

let lc1 = window.localStorage.getItem('email')
let lc2 = window.localStorage.getItem('senha')

enviar_registro.addEventListener('click',(evt)=>{
    if(!(email_registrar == '' || senha_registrar == '')){
        localStorage.setItem('email',email_registrar.value)
        localStorage.setItem('senha',senha_registrar.value)
        email_registrar.value = ''
        senha_registrar.value = ''
    }
    window.location.reload()
})

enviar_entrar.addEventListener('click',(evt)=>{
    if(!(email_entrar == '' || senha_entrar == '')){
        if(email_entrar.value == lc1 && senha_entrar.value == lc2){
            alert('Email e senha corretos.')
        } else {
            alert('Email ou senha incorretos, tente novamente.')
        }
        email_entrar.value = ''
        senha_entrar.value = ''
    }
})

btn_apagar_registro.addEventListener('click',(evt)=>{
    localStorage.clear()
})