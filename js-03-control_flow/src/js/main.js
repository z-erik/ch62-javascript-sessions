/*
     Realizar una función que reciba un código(weatherCode) de temperatura.
     De acuerdo al código recibo, retornar un mensaje:
     Code   Description
    0           Clear sky
    1, 2, 3     Mainly clear, partly cloudy, and overcast
    45, 48      Fog and depositing rime fog
    
*/

/*const getWeather=(codigo)=>{
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
   
}*/

//console.log(getWeather(88));




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
    








