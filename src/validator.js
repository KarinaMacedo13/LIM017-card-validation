const validator = {
  isValid:function(numbercardvalid){
    let arraycard= Array.from(numbercardvalid);
    let arraycard2=[];
    let plus = 0;
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
      plus += numreverse[i];
    }
    if (plus % 10 == 0) {
      return true;
    } else {
      return false;
    }
  },

  maskify:function(numbercardvalid){
    let n=4,
    mask="#",
    newnumber="";
    newnumber=(""+numbercardvalid).slice(0,-n).replace(/./g,mask)+(""+numbercardvalid).slice(-n);
    return newnumber;
  },

  getIssuer:function(numbercardvalid){
    if(numbercardvalid[0]==4){
      return "visa";

    } else if(numbercardvalid[0]==5&&numbercardvalid[1]==1||numbercardvalid[0]==5&&numbercardvalid[1]==5){
      return "mastercard";
    }
  },
};

export default validator;
