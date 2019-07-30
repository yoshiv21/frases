// 1. constIABLES
const palabraA = document.getElementById("palabraA")
const palabraB = document.getElementById("palabraB")
const palabraC = document.getElementById("palabraC")
const palabraD = document.getElementById("palabraD")
const boton = document.getElementById("boton-frase")

const frase = document.getElementById("resultado-frase")

// 2. FUNCIONES

const  armarFrase = (a, b, c, d) => {
    return  a + " " + b + " " + c + " " + d
}

// 3. EVENTOS

boton.addEventListener("click", function(){
    // 1. Obtener todas las palabras
    const pA = palabraA.value;
    const pB = palabraB.value;
    const pC = palabraC.value;
    const pD = palabraD.value;
    // 2. Juntar las palabras
    const fraseFinal = armarFrase(pA,pB,pC,pD);
    // 3. Expresar las palabras en el HTML
    frase.innerHTML = fraseFinal;
})
