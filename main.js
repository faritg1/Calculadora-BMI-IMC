let boton1 = document.getElementById("calcular")

function conversion(){
    let valor1 = document.getElementById("peso").value
    let valor2 = document.getElementById("altura").value
    let resultado


    if (valor2%1 == 0){

        valor2 = valor2/100
        resultado = valor1/(valor2*valor2)
        document.getElementById("relt").innerHTML = resultado.toFixed(1)
    }
    else{

        resultado = (valor1/(valor2*valor2))
        document.getElementById("relt").innerHTML = resultado.toFixed(1)
    }

}

boton1.addEventListener("click", conversion);


let boton2=document.getElementById("reiniciar");

function reiniciar(){

    document.getElementById("peso").value = ""
    document.getElementById("altura").value = ""
    document.getElementById("relt").innerHTML = ""

}
boton2.addEventListener('click',reiniciar)
