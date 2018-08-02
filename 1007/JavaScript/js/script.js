function conversor(){
var euro=10;
var mostrar=(euro + " Euros Son "+ euro*1.08+ " Dolares <br>") + (euro + " Euro * 133.75 son " +euro*133.75 + " Yen ");
document.getElementById("conversor").innerHTML=mostrar;
}

/*function comer(persona, comida){
    return (persona + " Come "+ comida);
}

document.write("<br>"+ comer("Oscar", "Arroz"));
*/



function suma(nmero1,nmero2){
    var nmero1=document.getElementById("numero").value;
    var nmero2=document.getElementById("numero2").value;
    var resultado= parseInt(nmero1)+parseInt(nmero2);
    document.getElementById("resultado").value = resultado;
}


function carros(param1,param2){
alert("Marca "+ param1 + " Serie " +param2);
}


function edad(valor1){
    if(valor1 >=18){
        alert ("eres mayor de edad");
    }
    else{
        alert ("eres menor de edad");
    }
}


function ciclo(){
    for(var i=0; i<5; i++){
        alert(i)
    }
}


function arreglo(){
    var dias=["Lunes","martes","Miercoles","Jueves","Vierns","Sabado"];
    for(var i=0;i<=dias.length-1;i++){
        alert(dias[i]);

    }
}

function mueveReloj(){ 
    momentoActual = new Date(); 
    hora = momentoActual.getHours();
    minuto = momentoActual.getMinutes();
    segundo = momentoActual.getSeconds(); 

    horaImprimible = hora + " : " + minuto + " : " + segundo; 

    document.rel.reloj.value = horaImprimible; 

    setTimeout("mueveReloj()",1000);
} 