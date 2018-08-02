function limpiar(){
    calculadora.valor.value="";
}

function calcular(){
    nvector=calculadora.valor.value.split(" ");
    for(i in nvector){
        if(nvector[i]=="*"){
            var resultado=parseInt(nvector[i-1]);
            i++;
            resultado=resultado*parseInt(nvector[i]);
           
        }
        if(nvector[i]=="/"){
            var resultado=parseInt(nvector[i-1]);
            i++;
            resultado=resultado/parseInt(nvector[i]);
           
        }
        if(nvector[i]=="+"){
            var resultado=parseInt(nvector[i-1]);
            i++;
            resultado=resultado+parseInt(nvector[i]);
           
        }
        if(nvector[i]=="-"){
            var resultado=parseInt(nvector[i-1]);
            i++;
            resultado=resultado-parseInt(nvector[i]);
           

        }
        
    }
    calculadora.valor.value=resultado;                        
}