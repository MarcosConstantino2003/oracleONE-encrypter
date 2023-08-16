const textoUser = document.querySelector(".textouser");
const textoRes = document.querySelector(".textores");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function encriptar(stringAEncriptar){
    stringAEncriptar = stringAEncriptar.toLowerCase();
    switch(true){
        case stringAEncriptar.includes("e"): stringAEncriptar = stringAEncriptar.replaceAll("e","enter");
        case stringAEncriptar.includes("i"): stringAEncriptar = stringAEncriptar.replaceAll("i","imes");
        case stringAEncriptar.includes("a"): stringAEncriptar = stringAEncriptar.replaceAll("a","ai"); 
        case stringAEncriptar.includes("o"): stringAEncriptar = stringAEncriptar.replaceAll("o","ober");
        case stringAEncriptar.includes("u"): stringAEncriptar = stringAEncriptar.replaceAll("u","ufat");
    }
    return stringAEncriptar;
}

function btnEncriptar(){
    const encriptado = encriptar(textoUser.value);
    textoRes.value = encriptado;
    textoRes.style.backgroundImage = "none";
    textoUser.value = "";
}

function desencriptar(stringADesencriptar){
    stringADesencriptar = stringADesencriptar.toLowerCase();
    switch(true){
        case stringADesencriptar.includes("enter"): stringADesencriptar = stringADesencriptar.replaceAll("enter","e");
        case stringADesencriptar.includes("imes"): stringADesencriptar = stringADesencriptar.replaceAll("imes","i");
        case stringADesencriptar.includes("ai"): stringADesencriptar = stringADesencriptar.replaceAll("ai","a"); 
        case stringADesencriptar.includes("ober"): stringADesencriptar = stringADesencriptar.replaceAll("ober","o");
        case stringADesencriptar.includes("ufat"): stringADesencriptar = stringADesencriptar.replaceAll("ufat","u");
    }
    return stringADesencriptar;
}

function btnDesencriptar(){
    const desencriptado = desencriptar(textoUser.value);
    textoRes.value = desencriptado;
    textoRes.style.backgroundImage = "none";
    textoUser.value = "";
}

function copiar(){
    navigator.clipboard.writeText(textoRes.value);
    alert("Copiado!");

}