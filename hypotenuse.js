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
        showMsg("Please enter positive values in the fields.");
    }

    else if (value1 === "" || value2 === "") {
        showMsg("Please enter values in the fields.")
    } else {

        if (Number(value1) !== 0 && Number(value2) !== 0) {

            const sumOfSquare = calculateSumOfSquare(Number(value1), Number(value2));
            const lengthOfHypotenuse = Math.sqrt(sumOfSquare);
            showMsg("The length of Hypotenuse is " + lengthOfHypotenuse.toFixed(2));
        }
        else {
            showMsg("value should be greater than 0.");
        }
    }
}

function showMsg(massage) {
    outputE1.innerText = massage;
}

hypotenuseBtn.addEventListener('click', calculateHypotenuse);