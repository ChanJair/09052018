'use strict';
class rest{
    constructor(){
        let name;
    }
    obtenerNombre(){
        return this.name;
}
    dameNombre(j){
        this.name = j;
}
}

let toma = new Object()
let i; 
function final(){
    let a = Number(prompt('Cuantos restaurantes quieres?'));
    let n = a;
    var arr = [n]
    
    
    for (i=1; i<=n; i++){
        arr.push( new Object())
        a= prompt('Dame el nombre del restaurante: '+ i);
        arr[i].dameNombre(a)
        toma.dameNombre(arr);
}
}
function principal(){
    let nombre = prompt('Dame el nombre del restaurante: '+i)
}
