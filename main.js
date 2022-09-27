let boton1 = document.getElementById("calcular")

function conversion(){
    let valor1 = document.getElementById("peso").value
    let valor2 = document.getElementById("altura").value
    let resultado


    if (valor2%1 == 0){

        valor2 = valor2/100
        resultado = valor1/(valor2*valor2)
        document.getElementById("relt").innerHTML = resultado.toFixed(1)

        if(resultado<=18.4)
        {
            document.getElementById("relt").style.backgroundColor="blue"
        }
        else if(resultado>=18.5 && resultado<=24.9)
        {
            document.getElementById("relt").style.backgroundColor="green"
        }
        else if(resultado>=25 && resultado<30)
        {
            document.getElementById("relt").style.backgroundColor="yellow"
        }
        else if(resultado>=30)
        {
            document.getElementById("relt").style.backgroundColor="red"
        }

        else if("relt" !== NaN){
            document.getElementById("relt").innerHTML = ""
            alert("No hay ningun valor")
        }

   
    }
    else{

        resultado = (valor1/(valor2*valor2))
        document.getElementById("relt").innerHTML = resultado.toFixed(1)

        if(resultado<=18.4)
        {
            document.getElementById("relt").style.backgroundColor="blue"
        }
        else if(resultado>=18.5 && resultado<=24.9)
        {
            document.getElementById("relt").style.backgroundColor="green"
        }
        else if(resultado>=25 && resultado<30)
        {
            document.getElementById("relt").style.backgroundColor="yellow"
        }
        else if(resultado>=30)
        {
            document.getElementById("relt").style.backgroundColor="red"
        }

        else if("relt" !== NaN){
            document.getElementById("relt").innerHTML = ""
            alert("No hay ningun valor")
        }
    }

}

boton1.addEventListener("click", conversion);


let boton2=document.getElementById("reiniciar");

function reiniciar(){

    document.getElementById("peso").value = ""
    document.getElementById("altura").value = ""
    document.getElementById("relt").innerHTML = ""
    document.getElementById("relt").style.backgroundColor = "transparent"


}
boton2.addEventListener('click',reiniciar)
