//console.log('Hola mundo'


// ---- proyecto 1 ----

/*const valorFrenteCm = 1.5;
const valorFrentDorsoCm = 2.5;
const valorLacaCm = 2.3;
let tipo ='';
let laca ='';



    

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
                return ('Error de carga');
        }
    }
    alert(' '+'Largo del folleto: ' +(n1) + '\n Ancho del folleto :  ' +(n2) + '\n El valor del folleto es : '+'$ ' + precio(n1,n2,tipo));

laca=prompt('Necesita cotizar Laca : ? \n si o no')

if (laca === 'si'){
   let folletoConLaca = ((n1 * n2) * valorLacaCm )+ precio(n1,n2,tipo) ;
    alert('El valor del folleto con Laca es : $ '+ folletoConLaca)
}else (alert('Gracias por usar el calculador '));

*/ 

// --- Proyecto 2

/*function sum(num1,num2) {
    return num1+num2
}
console.log (sum(50, 100));*/

//let n1=prompt('ingrese');

// function great(n1) {
//     return 'hola ' + n1;
// }

// const great =(n1)=> 'hola '+n1
// console.log (great(n1))

// let semana=prompt('coloca un día de la semana')

// switch (semana) {
//     case 'lunes':
//         alert('tomar cafe')
//         break;
//     case 'martes':
//         alert('tomar te')
//         break;
//     case 'miercoles':
//         alert('comer tomate')
//         break;
//     case 'jueves':
//         alert('tomar cafe')
//         break;
//     case 'viernes':
//         alert('tomar cafe')
//         break;

//     default:
//         alert('no eligio un dia de la semana ')
//         break;
// }

// for (let i = 0; i <=4; i++) {
//     console.log('el numero es:' + i);
    
// }


// let i=10

// while (i<30) {
//     i++
//     if (i<20) {
//         continue
//     }
    
//     console.log('el numero es' + i)
// }
const valorFrenteCm = 1.5;
const valorFrentDorsoCm = 2.5;
const valorLacaCm = 2.3;
const valorLacaFrendorsoCm = 4;
//let tipo ='';
let laca ='';




class Producto{
    constructor(nombre, largo, ancho, tipo){
        this.nombre = nombre.toUpperCase();
        this.largo = Number(largo);
        this.ancho = Number(ancho);
        this.tipo = tipo.toUpperCase();
        this.laca = laca.toUpperCase();
        this.precioFr = function (){
            return (this.largo * this.ancho)*valorFrenteCm
         };
         this.precioFd =function(){
            return (this.largo * this.ancho)*valorFrentDorsoCm
         };
         this.precioConLacaF = function(){
            return (this.largo * this.ancho)*valorLacaCm
         };
         this.precioConLacaD = function(){
            return (this.largo * this.ancho)*valorLacaFrendorsoCm
        }
    }
}

const cotizar = []


         do{
             cantProductos=Number(prompt('Ingrese el número de productos que desea cotizar'))
            }while 
                (isNaN(cantProductos) || cantProductos <= 0) ;
  
        do {
            const nombre = prompt('Ingrese el nombre del producto');
            do{
                largo=Number(prompt('Ingrese el largo del producto'));
            }while 
                (isNaN(largo) || largo <= 0) ;
            
            do{
                ancho=Number(prompt('Ingrese el ancho del producto'));
            }while 
                (isNaN(ancho) || ancho <= 0) ;

                    const tipo = prompt('Ingrese el tipo del producto(FR o FD)');
            do{
                laca=prompt('¿Desea cotizar Laca? SI / NO');
            }while
                
                 (laca != 'SI' && laca != 'NO');
        
            
        
            
            const nuevoProducto = new Producto(nombre, largo, ancho, tipo, laca);
         
            if(tipo === 'FR' || tipo === 'Fr' || tipo === 'fr' ||tipo ==='FD'|| tipo === 'Fd'|| tipo === 'fd' ){
                cotizar.push(nuevoProducto);
            }/*else if
                (laca === 'Si' || laca === 'SI' || laca === 'si'|| laca === 'NO' || laca === 'No' || laca === 'no'){
                cotizar.push(nuevoProducto);
            }*/else{
                alert('Ingrese un tipo valido')
            
            }
        }while(cotizar.length !=cantProductos);

        console.log(cotizar)

        let sumaTotal = 0
        
        cotizar.forEach(producto=> {
            if(producto['tipo'] == 'FR'&& producto['laca']=='NO') {
                console.log(producto.laca);
                console.log(producto.precioFr());
                sumaTotal += producto.precioFr();
            }else 
                if(producto ['tipo'] == 'FR' && producto['laca']=='SI'){
                    console.log(producto.laca);
                    console.log(producto.precioFr());
                    console.log(producto.precioConLacaF());
                    sumaTotal += producto.precioConLacaF() + producto.precioFr() ;
            }else
                 if(producto['tipo']=='FD' && producto['laca']=='NO'){
                    console.log(producto.laca);
                    console.log(producto.precioFd());
                    sumaTotal += producto.precioFd();
            }else
                 if(producto['tipo']=='FD' && producto['laca']=='SI'){
                    console.log(producto.laca);
                    console.log(producto.precioFd());
                    console.log(producto.precioConLacaD());
                    sumaTotal += producto.precioConLacaD() + producto.precioFd()
            }else
            console.log('error de carga')
        })

        
        console.log('La suma total de la cotización es: ' + sumaTotal);
        
        // ---para pedir laca ---

       /* let precioTotalConLaca = 0
        let lacaUso =''
        let lacaTipo =''
    
        lacaUso = prompt('¿Desea laca? : Si/No')

        if(lacaUso == 'si' || lacaUso == 'Si' || lacaUso == 'SI'){
                lacaTipo = prompt('¿Que laca desea? : \n FR = folleto frente \n FD = folleto dorso ');
        } if(lacaTipo == 'FR'|| lacaTipo == 'Fr ' || lacaTipo =='fr' ){
            cotizar.forEach(producto =>{
                 console.log(producto.precioConLacaF())
                    precioTotalConLaca += producto.precioConLacaF();
        })
        } if(lacaTipo == 'FD'|| lacaTipo == 'Fd ' || lacaTipo =='fd' ){
            cotizar.forEach(producto =>{
                 console.log(producto.precioConLacaD())
                    precioTotalConLaca += producto.precioConLacaD();
        })
        }else
        console.log('Precio total con Laca', precioTotalConLaca)
        */




/*for (let i = 0; i < cantProductos; i++) {
    const nombre = prompt('Ingrese el nombre del producto')
    do{
        largo=Number(prompt('Ingrese el largo del producto'))
    }while 
            (isNaN(largo) || largo <= 0) ;
    
    do{
        ancho=Number(prompt('Ingrese el ancho del producto'))
    }while 
            (isNaN(ancho) || ancho <= 0) ;
    const tipo = prompt('Ingrese el tipo del producto(FR o FD)')

    const nuevoProducto = new Producto(nombre, largo, ancho, tipo)
 
    if(tipo === 'FR' || tipo === 'Fr' || tipo === 'fr'){
        cotizar.push(nuevoProducto)
    } else if
        (tipo ==='FD'|| tipo === 'Fd'|| tipo === 'fd'){
        cotizar.push(nuevoProducto)
    }else{
        alert('Ingrese un tipo valido')
    
    }
}
*/



    
/*console.log(`${producto.nombre} - $${producto.precioFr()
      }`);
    totalCotizacion+=producto.precioFr()
/*})

/*cotizar.forEach(producto=> {
    console.log(`${producto.nombre} - $${producto.precio()
    }`);
    totalCotizacion+=producto.precio()
})*/

//cotizar.push(new Producto('lolo',15 , 10, 'fr'))

/*let cantidad = Number(prompt('ingrese cant folletos a cotizar'))
do { 
    let nombre = prompt('ingresa nombre folleto');
    let largo = prompt('ingresa largo trabajo');
    let ancho = prompt('ingrese ancho trabajo');
    let tipo = prompt('Ingrese tipo de impresión : \n fr = folleto frente \n fd= folleto dorso');
    
cotizar.push(new Producto(nombre, largo, ancho, tipo))

console.log(cotizar)
} while(cotizar.length != cantidad)
*/
/*console.log(Producto)
cotizar[0].precio()
console.log(cotizar[0].precio())

for(const prod of cotizar){
    console.log(prod)
}*/

/*const prod1 = new Producto(prompt("Ingresa el nombre del producto"),prompt("Ingresa largo"),prompt("Ingresa ancho"))

console.log (prod1.nombre,prod1.largo,prod1.ancho,prod1.tipo)


while (tipo !=='fr' & tipo !=='fd' ){
    tipo=prompt('Ingrese tipo de impresión : \n fr = folleto frente \n fd= folleto dorso')
 }
 
 function precio(largo=0,ancho=0, tipo){
         switch (tipo) {
             case "fr":
                 return (largo * ancho)*valorFrenteCm;
     
             case "fd":
              return (largo * ancho)*valorFrentDorsoCm;
         
             default:
                 return ('Error de Carga');
         }
     }



console.log (prod1.nombre,prod1.largo,prod1.ancho,prod1.tipo)
console.log (precio(largo,ancho,tipo))

/*while (tipo !=='fr' & tipo !=='fd' ){
   tipo=prompt('Ingrese tipo de impresión : \n fr = folleto frente \n fd= folleto dorso')
}

function precio(n1=0,n2=0, tipo){
        switch (tipo) {
            case "fr":
                return (n1 * n2)*valorFrenteCm;
    
            case "fd":
             return (n1 * n2)*valorFrentDorsoCm;
        
            default:
                return ('Error de Carga');
        }
    }
    alert(' '+'Largo del folleto: ' +(n1) + '\n Ancho del folleto :  ' +(n2) + '\n El valor del folleto es : '+'$ ' + precio(n1,n2,tipo));

laca=prompt('Necesita cotizar Laca : ? \n si o no')

if (laca === 'si'){
   let folletoConLaca = ((precio(n1,n2,tipo) * valorLacaCm ))+ precio(n1,n2,tipo) ;
    alert('El valor del folleto con Laca es : $ '+ folletoConLaca)
}else (alert('Gracias por usar el calculador '));
*/



// ---para pedir laca ---
/*let lacaUso = prompt('¿Desea laca? : Si/No')

if(lacaUso == 'si' || lacaUso == 'Si'){
    laca = prompt('¿Que laca desea? : Brillo/Mate')
    if(laca == 'brillo'|| laca == 'Brillo'){
        cotizar.forEach(producto =>{
            totalCotizacion += producto.precioFd() + producto.precioFr() + (producto.largo * producto.ancho)*valorLacaCm
            folletosFren += producto.precioFr()
            folletosDor += producto.precioFd()
        })
        console.log('Precio total', totalCotizacion)
        console.log('Precio folletos frente', folletosFren)
        console.log('Precio folletos dorso', folletosDor)
        console.log('Precio laca brillo
        */


