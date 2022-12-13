const bienvenida = alert (`¡Bienvenido a la tienda de fotografía! Hoy con gran descuento de hasta el 10% sobre el valor de productos seleccionados`)

let requestName = prompt(`Ingrese su nombre:`)
function nombre ( ) {
    if (requestName != "") {
        console.log (`Nombre del usuario: ${requestName}`)
    } else {
        alert (`Ingrese sus datos:`);
        requestName = prompt (`Ingrese su nombre:`)
    }
    
}

nombre()

let requestUser = prompt(`Ingrese su nombre de usuario:`)
let requestPassword = prompt (`Ingrese su contraseña:`)
let user = requestName+"123"
let password = `coderrrrrr`
function loggeo () {

    if ((requestUser === user) && (requestPassword == password)) {
        alert (`¡Bienvenido ${requestName}!`)
    } else if ((requestUser !== user) && (requestPassword == password)) {
        alert (`Su usuario es erróneo`);
        requestUser = prompt(`Ingrese su nombre de usuario:`)
        loggeo ()
    }  else if ((requestUser === user) && (requestPassword !== password)) {
        alert (`Su contraseña es errónea`);
        requestPassword = prompt (`Ingrese su contraseña:`)
        loggeo ()
    } else {
        alert ("SU USUARIO Y CONTRASEÑA SON ERRÓNEOS");
        requestUser = prompt(`Ingrese su nombre de usuario:`);
        requestPassword = prompt (`Ingrese su contraseña:`);
        loggeo ()
    }
}

loggeo()

function comprobarUsuario() {

    let arroba = false
    for (let i = 0; i< user.length; i++) {
        if (user[i]===`@`){
            arroba = true
        } else if ( arroba!= true) {
            user = prompt (`Debe ingresar un nuevo nombre de usuario que contenga el carácter @:`);
            break;
        }
    }
}

comprobarUsuario(user)

function comprobarPassword() {

    let caracteres = false
    for (let i = 8; i>password.length; i++) {
        if (password[i]>8) {
            caracteres = true
        } else if (caracteres != true) {
            alert ("Su contraseña es insegura.")
            break;
        }
    }
}

comprobarPassword()

function validacionPassword() {
    let numeros = false
    let cambiar = 0
    for (let i = 0; i<password.length; i++) {
        if (password[i].match(/\d/)) {
            numeros = true
        } else if (numeros != true) {
            cambiar = prompt (`Su contraseña debe tener caracteres alfanuméricos. ¿Desea cambiarla? Escriba si o no como respuesta:`)
            break;
        } else if (cambiar.toLowerCase() == `si`) {
            password = prompt (`Cambie su contraseña (debe contener al menos un número):`);
            break;
        }
    }
}

validacionPassword(password)

// Verificamos qué elementos del array tienen oferta
function descuento () {
    let inventarioConDescuento = [...inventario]
    inventarioConDescuento.forEach(elemento => {
        if (elemento.oferta) {
            let rebaja = elemento.precio * 0.10
            elemento.precio -= rebaja
        }
    })
}
descuento(inventario)
// Orden alfabético
const ordenAlfabetico = [...inventario].sort ((a, b) => {
    if ( a.producto < b.producto ){
        return -1
    } else if ( a.producto > b.producto){
        return 1
    } else {
        return 0
    }
})
console.log(ordenAlfabetico)
// Filtrar los productos que tienen oferta

const verOfertas = inventario.filter ((inventario) => {
    let confirmar = confirm("¿Desea ver las ofertas disponibles?")
    if ((confirmar===true)&&(inventario.oferta===true)) {
        console.log(`El valor del producto ${inventario.producto} con el 10% de descuento es: $${inventario.precio}`)
    } else {
        console.log(`El producto ${inventario.producto} no tiene descuento y su precio es: $${inventario.precio}`)
    }
})

// Buscar el producto con el nombre 
function buscarProducto () {
    let busqueda = prompt (`Escriba el nombre del producto que desea buscar (ejemplo: 2 ):\n\n 1) Filtro CPL\n\n 2) Filtro ND\n\n 3) Filtro UV Nano\n\n 4) Juego de Anillos Adaptadores\n\n 5) Lector de Tarjeta SD\n\n 6) Maleta de Filtros para Lentes\n\n 7) Adaptador de Captura de Video\n\n 8) Adaptador de Montura Canon EOS-EF a EOS-RF\n\n 9) Objetivo Canon EOS-RF 50mm F1.8\n\n 10) Objetivo Canon EOS-RF 85mm F2.0\n\n 11) Objetivo Canon EOS-RF 35mm F1.8\n\n 12) Maleta para Cámara a Prueba de Agua\n\n 13) SSD 2.5 pulgadas\n\n 14) SSD NVMe M.2\n\n 15) Tarjeta SD`).toLowerCase()
    let busquedaProducto = inventario.find (inventario => inventario.producto === busqueda)
    if ((busquedaProducto===undefined)||(busquedaProducto===false)||(busquedaProducto===null)){
        console.log(`El producto que ingreso no se encuentra disponible`)
        busqueda = prompt ("Escriba nuevamente el nombre del producto que desea buscar:\n\n 1) Filtro CPL\n\n 2) Filtro ND\n\n 3) Filtro UV Nano\n\n 4) Juego de Anillos Adaptadores\n\n 5) Lector de Tarjeta SD\n\n 6) Maleta de Filtros para Lentes\n\n 7) Adaptador de Captura de Video\n\n 8) Adaptador de Montura Canon EOS-EF a EOS-RF\n\n 9) Objetivo Canon EOS-RF 50mm F1.8\n\n 10) Objetivo Canon EOS-RF 85mm F2.0\n\n 11) Objetivo Canon EOS-RF 35mm F1.8\n\n 12) Maleta para Cámara a Prueba de Agua\n\n 13) SSD 2.5 pulgadas\n\n 14) SSD NVMe M.2\n\n 15) Tarjeta SD`).toLowerCase()")
        buscarProducto()
    } else {
        console.log (busquedaProducto)
        alert = (busquedaProducto)
    }
}

buscarProducto(inventario)