var operandoa;
var operandob;
var operacion;


function init(){
    alert ("Hello... desafio 1 de Elvia Delgado");


//Var


var resultado=document.getElementById("resultado");
var reset=document.getElementById("reset");
var suma=document.getElementById("suma");
var resta=document.getElementById("resta");
var multiplicacion=document.getElementById("multiplicacion");
var division=document.getElementById("division");
var igual=document.getElementById("igual");
var uno=docuement.getElementById("uno");
var dos=document.getElementById("dos");
var tres=document.getElementById("tres");
var cuatro=document.getElementById("cuatro");
var cinco=document.getElementById("cinco");
var seis=document.getElementById("seis");
var siete=document.getElemtnById("siete");
var ocho=document.getElementById("ocho");
var nueve=document.getElementById("nueve");
var cero=document.getElementById("cero");

//Eventos 
uno.onclick=function(e){

    resultado.textContent=resultado.textContent +"1";

}
dos.onclick=function(e){

    resultado.textContent=resultado.textContent +"2";

}

tres.onclick=function(e){

    resultado.textContent=resultado.textContent +"3";
}

cuatro.onclick=function(e){

    resultado.textContent=resultado.textContent +"4"; 
}

cinco.onclick=function(e){

    resultado.textContent=resultado.textContent +"5";
}

seis.onclick=function(e){

    resultado.textContent=resultado.textContent +"6";
}

siete.onclick=function(e){

    resultado.textContent=resultado.textContent +"7";
}

ocho.onclick=function(e){

    resultado.textContent=resultado.textContent +"8";
}

nueve.onclick=function(e){

    resultado.textContent=resultado.textContent +"9";
}

cero.onclick=function(e){

    resultado.textContent=resultado.textContent +"0";
}

reset.onclick=function(e){

    resetear();
}


reset.onclick=function(e){

    resetear();
}

suma.onclick=function(e){
    operandoa=resultado.textContent;
    operacion="+";
    limpiar();
}

resta.onclick=function(e){
    operandoa=resultado.textContent;
    operacion="-";
    limpiar();
}

multiplicacion.onclick=function(e){
    operandoa=resultado.textContent;
    operacion="*";
    limpiar();
}
division.onclick=function(e){
    operandoa=resultado.textContent;
    operacion="/";
    limpiar();
}
igual.onclick=function(e){
    operandob=resultado.textContent;
    operacion="+";
    limpiar();
}
function limpiar(){
    operandob=resultado.textContent="";

}
function resetear(){
    resultado.textContent="";
    operandoa = 0;
    operandob =0;
    operacion="";

}
function resolver (){
    var res 0=;
    switch(operation){
        case"+":
        res= parseFloat(operandoa)+ parseFloat(operandob);
        break;

        case"-":
        res= parseFloat(operandoa) - parseFloat(operandob);
        break; 

        case"*":
        res= parseFloat(operandoa) * parseFloat(operandob);
        break;

        case"/":
        res= parseFloat(operandoa) / parseFloat(operandob);
        break;

    }
    resetear();
    resultado.textContent = res;
    
}