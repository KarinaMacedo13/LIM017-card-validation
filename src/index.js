import validator from './validator.js';

const formCard=document.querySelector("#formCard"),
numberCard=document.querySelector(".number"),
name=document.querySelector(".name"),
logoBrand=document.querySelector("#logoBrand"),
mistake=document.querySelector("#mistake");

//input numberCard
formCard.inputNumber.addEventListener("keyup", (e)=>{
  let cardNumber=e.target.value;
  let numbermask = validator.maskify(cardNumber);
  formCard.inputNumber.value=cardNumber
  //Eliminamos los espacios en blanco
  .replace(/\s/g,"")
  //Eliminamos las letras
  .replace(/\D/g,"")
  numberCard.innerHTML=numbermask;
  if(cardNumber==""){
    numberCard.innerHTML="#### #### #### ####";
    logoBrand.innerHTML=" ";
  }
  let issuer = validator.getIssuer(cardNumber);
  if(issuer=="visa"){
    logoBrand.innerHTML=" ";
    const img=document.createElement("img");
    img.src="img/logo/visa.png";
    logoBrand.appendChild(img);
  } else if(issuer=="mastercard"){
    logoBrand.innerHTML=" ";
    const img=document.createElement("img");
    img.src="img/logo/mastercard.png";
    logoBrand.appendChild(img);
  }
});
//input cardname
formCard.inputName.addEventListener("keyup", (e)=>{
  let cardName=e.target.value;
  name.innerHTML=cardName;
  formCard.inputName.value=cardName
  //Eliminamos los numeros
  .replace(/\d/g,"")
  if(cardName==""){
    name.innerHTML="Ingrese Nombre";
  }
});

const btnSend=document.querySelector("#btnSend");
btnSend.addEventListener("click", (e)=>{
  e.preventDefault();
  let inputNumber=document.querySelector("#inputNumber").value;
  let inputName=document.querySelector("#inputName").value;
  let valid=document.getElementById("valid");
  if (inputNumber=="" && inputName==""||inputNumber==""||inputName==""){
    mistake.innerHTML="Ingrese sus datos";
    document.querySelector(".mistake").style.display="block";
    //alert("Ingrese sus datos");
  } else if (validator.isValid(inputNumber)==true){
    valid.innerHTML = "Tu tarjeta es válida";
    document.getElementById("screen2").style.display="block";
    document.getElementById("screen1").style.display="none";
  }else{
    valid.innerHTML= "Tu tarjeta es inválida";
    document.getElementById("screen2").style.display="block";
    document.getElementById("screen1").style.display="none";
}
});

const btnReturn=document.getElementById("btnReturn");
btnReturn.addEventListener("click", ()=>{
  document.getElementById('formCard').reset();
  document.querySelector(".mistake").style.display="none";
  document.getElementById("screen2").style.display="none";
  document.getElementById("screen1").style.display="block";
});

