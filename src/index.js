import validator from './validator.js';

const btnvalid = document.getElementById('btn');
btnvalid.addEventListener('click',btnclick);

function btnclick (){
let numbercardvalid = document.getElementById("numbercard").value;
let respuesta = document.getElementById("respuesta");
let respuesta2 = document.getElementById("respuesta2");
let numbermask = validator.maskify(numbercardvalid);
respuesta.innerHTML = "Tu tarjeta es: "+numbermask;
if (validator.isValid(numbercardvalid)==true){
  respuesta2.innerHTML = "Tu tarjeta es valida";
}else{
  respuesta2.innerHTML = "Tu tarjeta es invalida";
}
}

console.log(validator);


