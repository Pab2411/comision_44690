//console.log('Hola mundo'



const valorFrenteCm = 1.5;
const valorFrentDorsoCm = 2.5;
const valorLacaCm = 2.3;
let tipo ='';
let laca ='';
let cotizar='';


    

let n1 = Number(prompt("Ingresa largo folleto"));
let n2 = Number(prompt("Ingresa ancho folleto"));



while (tipo !=='fr' & tipo !=='fd' ){
   tipo=prompt('Ingrese tipo de impresión : \n fr = folleto frente \n fd= folleto dorso')
}

function precio(n1=0,n2=0, tipo){
        switch (tipo) {
            case "fr":
                return (n1 * n2)*valorFrenteCm;
    
            case "fd":
             return (n1 * n2)*valorFrentDorsoCm;
        
            default:
                return (cotizar);
        }
    }
    alert(' '+'Largo del folleto: ' +(n1) + '\n Ancho del folleto :  ' +(n2) + '\n El valor del folleto es : '+'$ ' + precio(n1,n2,tipo));

laca=prompt('Necesita cotizar Laca : ? \n si o no')

if (laca === 'si'){
   let folletoConLaca = valorLacaCm + precio(n1,n2,tipo) ;
    alert('El valor del folleto con Laca es : $ '+ folletoConLaca)
}else (alert('Gracias por usar el calculador'));




