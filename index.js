function cal() {

    let number1 = document.getElementById("number1");
    let result = document.getElementById("result");

    let sum0 = parseFloat(number1.value) *24.30 ;

    result.innerHTML = sum0.toFixed(2);
}