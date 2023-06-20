alert("Bienvenido a MaquinasMdq")


let precioFinal = function (precio, cuota)  {
    return precio / cuota
  };

let nombre, marca, monto, cuota, recalcular

do {

do {
    nombre = prompt("Ingrese su nombre:").toLowerCase()
}while(!isNaN(nombre || nombre.length <0))

do {
    correo = prompt("Ingrese su correo:").toLowerCase()
}while(!isNaN(correo || correo.length <0))

alert("Las marcas disponibles son: STIHL, ECHO, HUSQVARNA, MAKITA, SHIZEN")

do {
    marca = prompt("Ingrese la marca que prefiera").toUpperCase()
}while(!isNaN(marca || marca.length <0))

switch(marca) {

    case "STIHL":
        precio = 100000
        alert(`Hola Sr. ${nombre}, el valor de la marca ${marca} es de: en una cuota ${precioFinal(precio,1)}, en 3 cuotas ${precioFinal(precio,3)}, en 6 cuotas ${precioFinal(precio,6)} y en 9 cuotas ${precioFinal(precio,9)}.`)
        break

    case "ECHO":
        precio = 110000
        alert(`Hola Sr. ${nombre}, el valor de la marca ${marca} es de: en una cuota ${precioFinal(precio,1)}, en 3 cuotas ${precioFinal(precio,3)}, en 6 cuotas ${precioFinal(precio,6)} y en 9 cuotas ${precioFinal(precio,9)}.`)
        break

    case "HUSQVARNA":
        precio = 130000
        alert(`Hola Sr. ${nombre}, el valor de la marca ${marca} es de: en una cuota ${precioFinal(precio,1)}, en 3 cuotas ${precioFinal(precio,3)}, en 6 cuotas ${precioFinal(precio,6)} y en 9 cuotas ${precioFinal(precio,9)}.`)
        break

    case "MAKITA":
        precio = 85000
        alert(`Hola Sr. ${nombre}, el valor de la marca ${marca} es de: en una cuota ${precioFinal(precio,1)}, en 3 cuotas ${precioFinal(precio,3)}, en 6 cuotas ${precioFinal(precio,6)} y en 9 cuotas ${precioFinal(precio,9)}.`)
        break

    case "SHIZEN":
        precio = 65000
        alert(`Hola Sr. ${nombre}, el valor de la marca ${marca} es de: en una cuota ${precioFinal(precio,1)}, en 3 cuotas ${precioFinal(precio,3)}, en 6 cuotas ${precioFinal(precio,6)} y en 9 cuotas ${precioFinal(precio,9)}.`)
        break
   
}
// nueva consulta

recotizar = prompt("¿Desea realizar una nueva consulta?").toLowerCase()

}while(recotizar!="no")