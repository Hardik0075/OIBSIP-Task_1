function clrscrn() {
    document.getElementById("result").value = "";
}

function display(value) {
    document.getElementById("result").value += value;
}
 
// This function evaluates the expression and returns result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}

 function deleteChr() {
//     let str =document.getElementById("result").value ;
//     let p = str.slice(0, -1);
//     document.getElementById("result").value=p;
      // Masteringjs.io

      let str = document.getElementById("result").value;
      let newstr = str.substring(0, str.length - 1); // Masteringjs.io
 //     str.substr(0, str.length - 1); // Masteringjs.io
   //   str.replace(/.$/, '');
      document.getElementById("result").value  = newstr;
}
let universal_num= document.getElementById("result").value;
function pos_to_neg(universal_num)
{
// let newnum= -Math.abs(num);
// let num = document.getElementById("result").value ;
let nums= "-" + num;
document.getElementById("result").value =nums;
// document.getElementById("result").value  = newnum;

}