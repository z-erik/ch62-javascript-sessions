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



/*let num1=8;
let num2=8;
const calculate= (a,b,c)=>{

    return c(a,b);
} 

const Suma =(x,y)=> x+y;
const Resta=(a,b)=>a-b;

console.log(calculate(num1,num2,Suma));*/

//console.log(false && "Hola"); // false


/*Operador || (OR)
- Evalúa de izquierda a derecha.
- Si el primer valor es truthy, se detiene ahí y devuelve ese valor.
- Si el primer valor es falsy, evalúa el segundo y devuelve ese.*/







console.log(true || "Hola");     // "true"   → porque null es falsy
console.log(null || 0);          // 0        → devuelve el primer valor truthy
console.log(null || false);      // false    → ambos falsy, devuelve el último
console.log(null || null);       // null     → ambos falsy

/*Operador && (AND)
- Evalúa de izquierda a derecha.
- Si el primer valor es falsy, se detiene ahí y devuelve ese valor.
- Si el primer valor es truthy, evalúa el segundo y devuelve ese.*/

const Suma =(x,y)=> x+y;

console.log(null && "Hola"); //null
console.log(Suma(8,9) && 0); //0
console.log(true && "Hello"); //Hello
console.log(0 && null); //0
console.log("Texto" && null); //null
console.log(undefined && "Mundo"); //undefined
console.log(Suma() && "Adiós"); //Nan


/*
console.log(null && "Hola"); //Null
console.log("" && 0);         // 0 y false o ""
console.log(true && "Hello");       //Hello
console.log(0 && null);       //0 
console.log(undefined && "Hola"); //undefined
console.log("true" && 0); //*/
/*console.log(true && "Hello");
console.log(0 && null);
console.log("Texto" && null);
console.log(undefined && "Mundo");
console.log(false && "Adiós");
console.log("Hola" && "Mundo");
console.log(1 && "Activo");
console.log("Activo" && 123);*/
