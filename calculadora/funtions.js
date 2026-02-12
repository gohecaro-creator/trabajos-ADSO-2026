function Add () {
let number1 =Number (document.getElementById("Number1").value)
let number2 =Number (document.getElementById("Number2").value)
let result =number1+ number2;

document.getElementById("result").value=result;
document.getElementById ("result2").innerHTML="Resultado:" + result;

}


function Rest () {
let number1 =Number (document.getElementById("Number1").value)
let number2 =Number (document.getElementById("Number2").value)
let result =number1 - number2;

document.getElementById("result").value=result;
document.getElementById ("result2").innerHTML="Resultado:" - result;

}


const Mult = () => {
let number1 =Number (document.getElementById("Number1").value);
let number2 =Number (document.getElementById("Number2").value);
let result =number1 * number2;

document.getElementById("result").value=result;
document.getElementById ("result2").innerHTML="Resultado:" - result;

}


const Divi = () => {
  let number1 = Number(document.getElementById("Number1").value);
  let number2 = Number(document.getElementById("Number2").value);

  if (number2 === 0) {
    document.getElementById("result2").innerHTML =
      "no se puede dividir por 0";
    document.getElementById("result").value = "";
  } else {
    let result = number1 / number2;
    document.getElementById("result").value = result;
    document.getElementById("result2").innerHTML =
      "Resultado: " + result;
  }
};

