'use strict';
class Restaurante{
    constructor(){
        let nombre;
        let direccion;
        let telefono;
    }
     obtenerNombre(){
        return this.nombre;
}
     obtenerDireccion(){ 
        return this.direccion;
}
     obtenerTelefono(){
        return this.telefono;
}
     dameNombre(a){
        this.nombre = a;
    }
     dameDireccion(b){
        this.direccion = b;
    }
     dameTelefono(c){
        this.telefono = c;
    }
}

let abajenio = new Restaurante()
let quesadillas = new Restaurante()

function principal(){
    let cosa = prompt('Dame un nombre GOE');
    abajenio.dameNombre(cosa);
    let b = prompt('Dame una direccion GOE');
    abajenio.dameDireccion(b);
    let c = prompt('Dame un telefono GOE');
    abajenio.dameTelefono(c);

    alert ("El nombre es: "+ abajenio.obtenerNombre()+"\nLa direccion es: "+ abajenio.obtenerDireccion()+"\nEl telefono es: "+abajenio.obtenerTelefono())
}
