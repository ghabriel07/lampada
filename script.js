function calcular() {
    let potenciaLampada = document.getElementById("lamp").value
    let Largura = document.getElementById("width").value
    let Comprimento = document.getElementById("length").value
    let result = document.getElementById("resultado").value
 
    resultado.innerHTML=((Comprimento*Largura)*18)/potenciaLampada
}