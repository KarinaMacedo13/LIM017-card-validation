const validator = {
  isValid:function(numbercardvalid){
    let arraycard= Array.from(numbercardvalid);
    let arraycard2=[];
    let suma = 0;
    for (let i= 0, l = arraycard.length; i < l; i = i + 1) {
      arraycard2.push(parseInt(arraycard[i]));
    }
    let numreverse = arraycard2.reverse();

    for (let i = 0, l = numreverse.length; i < l; i = i + 1) {
      if (i%2!==0){
        numreverse[i] *= 2;
        if (numreverse[i] >= 10) {
          numreverse[i] = (numreverse[i] % 10) + 1;
        }
      }
      suma += numreverse[i];
    }
    if (suma % 10 == 0 || suma == 0) {
      return true;
    } else {
      return false;
    }
  },

  maskify:function(numbercardvalid){
    let n=4;
    let mascara="#";
    let newnumber="";
    newnumber=(""+numbercardvalid).slice(0,-n).replace(/./g,mascara)+(""+numbercardvalid).slice(-n);
    return newnumber;
  },
};

export default validator;
