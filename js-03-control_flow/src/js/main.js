/*
     Realizar una función que reciba un código(weatherCode) de temperatura.
     De acuerdo al código recibo, retornar un mensaje:
     Code   Description
    0           Clear sky
    1, 2, 3     Mainly clear, partly cloudy, and overcast
    45, 48      Fog and depositing rime fog
    
*/





/*
//asignamos el valor del id a una variable const
const dino=document.getElementById("dinosaurio");
//valor boleano para determinar la felicidad
let felicidad=true;

//construccion del boton
const boton= document.getElementById("boton");

boton.onclick= function(){
   if (felicidad) {
    felicidad=false;
    
    dino.src="./public/images/dino-emo.png"
    
   } else {
    felicidad=true;
     dino.src="./public/images/dino.jpg"
   }

    
};

*/
/*
    const getAccessLevel = ( role ) => {
    let accessLevel;
    switch ( role ) {

        case "super admin":
        case "admin":
            accessLevel = "Acceso completo al sistema";
            break;
        case "editor":
            accessLevel = "Acceso para editar contenido";
            break;  
        case "viewer":
            accessLevel = "Acceso solo para ver contenido";
            break;
        default:
            accessLevel = "Acceso denegado";
    }
    return accessLevel;
};
console.log( getAccessLevel("editor") ); // Acceso para editar contenido*/



const getWeather=(codigo)=>{
     let message;
    if(codigo===0){
        message="Clear Sky";
    }else if( codigo===1 ||codigo===2 ||codigo===3  ){
        message="Mainly clear, partly cloudy, and overcast";
    }else if(codigo===45 || codigo===48){
        message="Fog and depositing rime fog";
    }else{
        message="no definido";
    }
    return message;
   
}


const getWeatherSwitch=(codigo)=>{
let message;

switch (codigo) {
    case 0:
        message="Clear Sky";
    break;

    case 1:
    case 2:
    case 3:
        message="Mainly clear, partly cloudy, and overcast";
    break;
    case 45:
        message="Fog and depositing rime fog";  
    break;
    case 48:
        message="Fog and depositing rime fog";
    break;
    default:
        message="No definido"
        break;
}
return message;
}
//console.log(getWeatherSwitch(48));


const esPar=(numero)=>{
    return numero% 2===0 ? "Es par ": "No es par";
}
console.log(esPar(14));