const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle");
const outputE1 = document.querySelector("#output");

function calculateSumOftriangles(angle1, angle2, angle3) {
  const sumOfAngles = angle1 + angle2 + angle3;
  return sumOfAngles;
}

function isTriangle() {
  const value1 = inputs[0].value;
  const value2 = inputs[1].value;
  const value3 = inputs[3].value;
  if (Number(value1) < 0 || Number(value2) < 0 || Number(value3)) {
    outputE1.innerText = "Please enter positive values in the fields.";
  } else if (value1 === "" || value2 === "" || value3 === "") {
    outputE1.innerText = "Please enter values in the fields.";
  } else {
    const sumOfAngles = calculateSumOftriangles(Number(value1), Number(value2), Number(value3));

    if (sumOfAngles == 180) {
      //  console.log("yay, The angles form a triangle");
      outputE1.innerText = "Yay, The angles form a triangle";
    } else {
      // console.log("Oh Oh! The angles don't form a triangle");
      outputE1.innerText = "Oh Oh! The angles don't form a triangle";
    }
  }
}
isTriangleBtn.addEventListener("click", isTriangle)