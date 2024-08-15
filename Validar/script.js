// boton

let miBtn = document.getElementById("boton");

miBtn.addEventListener("click",function(){
    // class="input-a-buscar"
    let texto = document.querySelector(".input-a-buscar");

    if(texto.value !== ""){
        document.querySelector(".resultado").innerHTML = "Estas buscando:"+texto.value;
    }else{
        document.querySelector(".resultado").innerHTML = "Para poder buscar debes ingresar una palabra";
    }
} );