
let nota1, nota2, media

//prompt("Digite nota 1") // ou nota1= parseFloat(prompt("Digite nota 1"))
//nota1= parseFloat(nota1)
//nota2= prompt("Digite nota 2")
//nota2= parseFloat(nota2)
//console.log("vc digitou",nota1);
//console.log("vc digitou",nota2);
//media = (nota1+nota2)/2
//console.log("A média é",media)
    //console.log("passei aqui");
    //console.log("estou no trecho calcular")

function calcular(){
   
    let elem1= document.getElementById("campo1")
    let nota1 = parseFloat(elem1.value)
    let elem2= document.getElementById("campo2")
    let nota2 = parseFloat(elem2.value)
    media = (nota1+nota2)/2
    console.log("A média é",media);

}

//let elem1 = document.getElementById("campo1")
//console.log("elem1",elem1.value);

