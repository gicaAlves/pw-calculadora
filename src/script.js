 // Passo a passo das funcionalidades da calculadorinha:
 // pegar o elemento do visor
 var visor = document.getElementById("visor");

 // quando uma tecla for pressionada, seu valor vai pro visor
 function adicionae(tecla) {
   visor.value = visor.value + tecla;
 }

 // quando o "c" for pressionado limpa o visor
 function limpezatotal() {
   visor.value = "";
   alert("Apagando... ✨");
 }

 // quando o "=" for pressionado calcula
 function calculari() {
   visor.value = eval(visor.value);
 }