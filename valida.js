const usuario = [
    {
        login:"sara",
        pass:"sara"
    },
    {
        login:"jennifer",
        pass:"teamo"
    },
    {
        login:"cristininha",
        pass:"03081993"
    },
    
]

let botao = document.getElementById('btnlogar')

botao.addEventListener('click', function logar(){

    let pegarusuario = document.getElementById('usuario').value
    let pegarsenha = document.getElementById('senha').value 
    let validalogin = false

    for(let i in usuario){

        if(pegarusuario == usuario[i].login && pegarsenha == usuario[i].pass){
           validalogin = true
           break
        }
    }
    if(validalogin == true){
        location.href = 'index.html'
    }else{
        alert('usuario e senha incorretos')
    }
})

