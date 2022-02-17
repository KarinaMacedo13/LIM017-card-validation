import validator from './validator.js';

/*const btnValid = document.querySelector('.btnSend');
btnValid.addEventListener('click',btnClick);*/

const formCard=document.querySelector("#formCard"),
numberCard=document.querySelector(".number"),
name=document.querySelector(".name"),
logoBrand=document.querySelector("#logoBrand");
//btnSend.addEventListener("click",validate());

/*function btnClick (){
//let numberCardValid = document.getElementById("inputNumber").value;
let numberCardValid=e.target.value;
let respuesta = document.getElementById("respuesta");
let respuesta2 = document.getElementById("respuesta2");
let numbermask = validator.maskify(numberCardValid);
respuesta.innerHTML = "Tu tarjeta es: "+numbermask;
if (validator.isValid(numberCardValid)==true){
  respuesta2.innerHTML = "Tu tarjeta es valida";
}else{
  respuesta2.innerHTML = "Tu tarjeta es invalida";
}
}*/

//input numberCard
formCard.inputNumber.addEventListener("keyup", (e)=>{
  let cardNumber=e.target.value;
  let numbermask = validator.maskify(cardNumber);
  formCard.inputNumber.value=cardNumber
  //Eliminamos los espacios en blanco
  .replace(/\s/g,"")
  //Eliminamos las letras
  .replace(/\D/g,"")
  numberCard.textContent=numbermask;
  if(cardNumber==""){
    numberCard.textContent="#### #### #### ####";
    logoBrand.innerHTML=" ";
  }
  if(cardNumber[0]==4){
    logoBrand.innerHTML=" ";
    const img=document.createElement("img");
    img.src="img/logo/visa.png";
    logoBrand.appendChild(img);
  } else if(cardNumber[0]==5){
    logoBrand.innerHTML=" ";
    const img=document.createElement("img");
    img.src="img/logo/mastercard.png";
    logoBrand.appendChild(img);
  }
});

formCard.inputName.addEventListener("keyup", (e)=>{
  let cardName=e.target.value;
  name.textContent=cardName;
  if(cardName==""){
    name.textContent="Ingrese Nombre";
  }
});

formCard.btnSend.addEventListener("click", ()=>{
  let inputNumber=document.querySelector("#formCard #inputNumber").value;
  let valid=document.getElementById("valid");
  if (inputNumber==""){
    alert("Ingrese sus datos");
  } else if (validator.isValid(inputNumber)==true){
    valid.textContent = "Tu tarjeta es válida";
  }else{
    valid.textContent= "Tu tarjeta es inválida";
}
document.getElementById("screen2").style.display="block";
document.getElementById("screen1").style.display="none";
});

const btnReturn=document.getElementById("btnReturn");
btnReturn.addEventListener("click", ()=>{
  document.getElementById("screen2").style.display="none";
  document.getElementById("screen1").style.display="block";
});
/*function validate () {

}*/

console.log(validator);


