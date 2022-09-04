const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputE1 = document.querySelector("#output");

function calculateSumOfSquare(a,b){
    const sumOfSquare = a*a + b*b;
    return sumOfSquare
}

function calculateHypotenuse(){
    const sumOfSquare = calculateSumOfSquare(Number(sides[0].value), Number(sides[1].value));
     const  lengthOfHypotenuse = Math.sqrt(sumOfSquare);
     outputE1.innerText = "The length of Hypotenuse is " + lengthOfHypotenuse;
}

hypotenuseBtn.addEventListener('click',calculateHypotenuse);