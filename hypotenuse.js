const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputE1 = document.querySelector("#output");

function calculateSumOfSquare(a, b) {
    const sumOfSquare = a * a + b * b;
    return sumOfSquare;
}

function calculateHypotenuse() {
    const value1 = sides[0].value;
    const value2 = sides[1].value;
    if (Number(value1) < 0 || Number(value2) < 0) {
        outputE1.innerText = "Please enter positive values in the fields.";
    } 
    // else if (Number(value1) == 0|| Number(value2) == 0) {
    //     outputE1.innerText = "Please enter positive values in the fields. change"
    // } 
    else if (value1 === "" || value2 === "" ) {
        outputE1.innerText = "Please enter values in the fields."
    } else {

        if( Number(value1) !== 0 && Number(value2) !== 0){
            
        const sumOfSquare = calculateSumOfSquare(Number(value1), Number(value2));
        const lengthOfHypotenuse = Math.sqrt(sumOfSquare);
        outputE1.innerText = "The length of Hypotenuse is " + lengthOfHypotenuse.toFixed(2);
        }
        else{
            outputE1.innerText = "value should be greater than 0."
        }
    }
}

hypotenuseBtn.addEventListener('click', calculateHypotenuse);