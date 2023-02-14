const valorFrenteCm = 1.5;
const valorFrentDorsoCm = 2.5;
const valorLacaCm = 2.3;
const valorLacaFrendorsoCm = 4;
//let tipo ='';
let laca = '';




class Producto {
    constructor(nombre, largo, ancho, tipo, laca, valor, sumTot) {
        this.nombre = nombre;
        this.largo = Number(largo);
        this.ancho = Number(ancho);
        this.tipo = tipo;
        this.laca = laca;
        this.valor = valor;
        this.sumTot = sumTot;
    }

    precioFr() {
        return (this.largo * this.ancho) * valorFrenteCm
    };

    precioFd() {
        return (this.largo * this.ancho) * valorFrentDorsoCm
    };
    precioConLacaF() {
        return (this.largo * this.ancho) * valorLacaCm
    };
    precioConLacaD() {
        return (this.largo * this.ancho) * valorLacaFrendorsoCm
    }

}



const cotizar = []

console.log("solo array cotizar", cotizar)

const formDatos = document.querySelector('#form-datos');
const nombreInput = document.querySelector('#nombre-input');
const largoInput = document.querySelector('#largo-input');
const anchoInput = document.querySelector('#ancho-input');
const tipoInput = document.querySelector('#tipo-input');
const lacaInput = document.querySelector('#laca-input');
//const radioDefault = document.getElementsByClassName('radio-default')
const totalFolletos = document.querySelector('#total-folletos')
const devDatos = document.querySelector('#dev-datos');



formDatos.addEventListener("submit", cargaDatos);

const renderizarProductos = () => {
    let sumaTotal = 0
    devDatos.innerHTML = "";

    cotizar.forEach(producto => {
        let valorParcial = 0

        if (producto['tipo'] == 'FR' && producto['laca'] == 'NO') {
            console.log(producto.laca);
            console.log(producto.precioFr());
            valorParcial = producto.precioFr();
            sumaTotal += producto.precioFr();
        } else
        if (producto['tipo'] == 'FR' && producto['laca'] == 'SI') {
            console.log(producto.laca);
            console.log(producto.precioFr());
            console.log(producto.precioConLacaF());
            valorParcial = producto.precioConLacaF() + producto.precioFr();
            sumaTotal += producto.precioConLacaF() + producto.precioFr();
        } else
        if (producto['tipo'] == 'FD' && producto['laca'] == 'NO') {
            console.log(producto.laca);
            console.log(producto.precioFd());
            valorParcial = producto.precioFd();
            sumaTotal += producto.precioFd();
        } else
        if (producto['tipo'] == 'FD' && producto['laca'] == 'SI') {
            console.log(producto.laca);
            console.log(producto.precioFd());
            console.log(producto.precioConLacaD());
            valorParcial = producto.precioConLacaD() + producto.precioFd();
            sumaTotal += producto.precioConLacaD() + producto.precioFd();
        }

        producto.valor = valorParcial;
        producto.sumTot = sumaTotal;

        let respuestaCalculo = document.createElement("div")
        respuestaCalculo.className = "cajaTextrespuesta";
        respuestaCalculo.innerHTML = `<h5>Nombre del prod: ${producto.nombre}</h5>
                                      <p> Largo: ${producto.largo}</p>
                                      <p> Ancho : ${producto.ancho}</p>
                                      <p>Impresión : ${producto.tipo}</p>
                                      <p>Lleva laca : ${producto.laca}</p>
                                      <h5> Valor del folleto: ${valorParcial}</h5>
                                      `
       
        devDatos.appendChild(respuestaCalculo)

    })

    totalFolletos.innerHTML = `Total de los folletos : $  <spam class="totalFolletos">${sumaTotal}</spam>`

}

function cargaDatos(e) {

    e.preventDefault();
    if (nombreInput.value != "" && largoInput.value != "" && anchoInput.value != "") {
        const nuevoProducto = new Producto(formDatos[0].value, formDatos[1].value, formDatos[2].value, formDatos[3].value, formDatos[4].value, formDatos[5].value, 0);
        cotizar.push(nuevoProducto);

        renderizarProductos();
        
        const cotizarJson = JSON.stringify(cotizar);
        localStorage.setItem("productos", cotizarJson)

        formDatos.reset();
        nombreInput.focus();
        alertaCarga();
    }
}


function alertaCarga() {
    Toastify({
        text: "Ingreso el dato correctamente",
        duration: 1200,
        gravity: "botton",
        offset: {
            x: 200,
            y: 200
        },
        position: "left",
        style: {
            background: "(#0000FF)",

            color: "whait"
        }
    }).showToast()
}


// Recupero Storage

const mostrarStorage = document.getElementById("mostrarStorage");
const totalStorage = document.getElementById("total-st")

mostrarStorage.addEventListener("click", () => {

    const cotizacion = document.getElementById("cotizacion-st")
    const modal = document.getElementById("modal")
    const textoModal = document.getElementById("texto-modal")
    const productosLs = JSON.parse(localStorage.getItem("productos")) || [];

  

    const {
        nombre,
        largo,
        ancho,
        tipo,
        laca, 
        sumTot,
        valor
    } = productosLs;

    const producto = new Producto(nombre, largo, ancho, tipo, laca, sumTot, valor);

    
    productosLs.forEach(resultado =>  {

        console.log(" este es resultado",resultado)

        let cotizacion = document.createElement("div")
        cotizacion.className = "cajaTextomodal";
        cotizacion.innerHTML += `<h5>Nombre del prod:  ${resultado.nombre}</h5>
        <p> Largo :  ${resultado.largo}</p>
        <p> Ancho :  ${resultado.ancho}</p>
        <p>Impresión :  ${resultado.tipo}</p>
        <p>Lleva laca :  ${resultado.laca}</p>
        <h5> Valor del folleto:  ${resultado.valor}</h5>
         `
        textoModal.appendChild(cotizacion)
        console.log(resultado.sumTot)
        totalStorage.innerHTML = `<spam class="textoToalModal">Total de los folletos : </spam> <spam class="totalPrecioModal"> $ ${resultado.sumTot} </spam>`
    })

    
})
