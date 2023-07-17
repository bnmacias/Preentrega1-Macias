/* consigna 1: crear algoritmo */

/* algoritmo de bienvenida */

let ingresarNombre= prompt("Ingresar nombre y apellido")
let ingresarCorreo= prompt("Bienvenido " +ingresarNombre+ "! " + "Ahora ingresa tu correo electrónico:")
alert("Por favor, validá tu correo electrónico desde el link que te enviamos al email.")
alert("¡Tu correo electrónico ya se encuentra validado! Ahora suscríbete para acceder a los mejores beneficios!")

/* función */

let suscripto = false;
console.log("¿Estás suscripto/a?");
let respuestaSuscripcion = prompt("¿Estás suscripto? (si/no):");

if (respuestaSuscripcion.toLowerCase() === "si") {
    suscripto = true;
}

console.log("¿Necesitas pedir un webëë?");
let respuestaPedido = prompt("¿Necesitas pedir un webëë? (si/no):");

if (respuestaPedido.toLowerCase() === "si") {
    if (suscripto) {
        console.log("El costo del servicio es de $60.");
        console.log("¡Tu webëë va en camino!");
    } else {
        console.log("El costo del servicio es de $100.");
        console.log("¿Querés suscribirte para acceder a un 40% de descuento?");
        let respuestaSuscribirse = prompt("¿Querés suscribirte para acceder a un 40% de descuento? (si/no):");
        if (respuestaSuscribirse.toLowerCase() === "si") {
            suscripto = true;
            console.log("¡Felicitaciones! Ahora estás suscripto/a y podes disfrutar del servicio a $60.");
            console.log("¡Tu webëë va en camino!");
        } else {
            console.log("¿Querés continuar con el pedido del webëë a $100?");
            let respuestaContinuar = prompt("¿Querés continuar con el pedido del webëë a $100? (si/no):");
            if (respuestaContinuar.toLowerCase() === "si") {
                console.log("¡Ok, tu webëë va en camino!");
                } else {
                    console.log("No hay problema, opdes visitar nuestro sitio web para más información.");
                }
        }
    }
    } else {
        console.log("No hay problema. Visita nuestro sitio web para descubrir todo lo que tenemos para vos.");
}













/*
console.log("¿Necesitas pedir un webëë?");
let respuesta = prompt("Respuesta (si/no):");

if (respuesta.toLowerCase === "si") { ----> por qué no funciona si el razonamiento esta ok???? 
    console.log("¿Estás suscripto?");
        let suscripto = prompt("Respuesta (si/no):");
        if (suscripto.toLowerCase === "si") {
        console.log("Ok, tu webëë va en camino.");
        } else {
            console.log("Primero debes suscribirte.");
        }
    } else {
    console.log("¡Ok! Visita nuestro sitio web para descubrir todo lo que tenemos para ofrecerte.");
}
*/