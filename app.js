let campoNombre = document.querySelector("#nombre")
let campoEmail = document.querySelector("#e-mail")
let campoAsunto = document.querySelector("#asunto")
let campoMensaje = document.querySelector("#mensaje")
let botonContacto = document.querySelector("#boton-contacto")

function estaVacio(input,nombre){

    if(!input.value){

        alert(`No se ha llenado el campo ${nombre}`)

    } else{

        return true
    }

}

function maximoCarateres(input,longitud){

    if(input.value.length == longitud){

        alert("Has llegado al límite de carácteres")

    } else{

        return true

    }

}

function alertaNombre(){

    let noEstaVacio = estaVacio(campoNombre,"con tu nombre")

    let noMaximoCaracteres = maximoCarateres(campoNombre, 50)

    return noEstaVacio && noMaximoCaracteres
}

function alertaEmail(){

    let noEstaVacio = estaVacio(campoEmail,"con tu E-mail")

    let emailCorrecto = ()=>{

        if(campoEmail.validity.typeMismatch){

            alert("No has ingresado tu E-mail correctamente")

        }else{

            return true

        }

    }

    return noEstaVacio && emailCorrecto()

}

function alertaAsunto(){

    let noEstaVacio = estaVacio(campoAsunto,"con tu asunto")

    let noMaximoCaracteres = maximoCarateres(campoAsunto, 50)

    return noEstaVacio && noMaximoCaracteres
}

function alertaMensaje(){

    let noEstaVacio = estaVacio(campoMensaje,"con tu mensaje")

    let noMaximoCaracteres = maximoCarateres(campoMensaje, 300)

    return noEstaVacio && noMaximoCaracteres

}



botonContacto.addEventListener("click",(evento)=>{ 

    evento.preventDefault()

    if( alertaNombre()&& alertaEmail()&& alertaAsunto()&& alertaMensaje())
        
    {
        
        alert("Tu respuesta ha sido enviada con Exito")

        location.reload()

    }
    
} 
)

