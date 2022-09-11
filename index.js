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
  const value3 = inputs[2].value;

  if (Number(value1) < 0 || Number(value2) < 0 || Number(value3) < 0) {

    showMsg("Please enter positive values in the fields.");

  } else if (value1 === "" || value2 === "" || value3 === "") {
    showMsg("Please enter values in the fields.");
  } else {

    if (Number(value1) !== 0 && Number(value2) !== 0 && Number(value3) !== 0) {

      const sumOfAngles = calculateSumOftriangles(Number(value1), Number(value2), Number(value3));

      if (sumOfAngles == 180) {
        //  console.log("yay, The angles form a triangle");
        showMsg("Yay, The angles form a triangle");
      } else {
        // console.log("Oh Oh! The angles don't form a triangle");
        showMsg("Oh Oh! The angles don't form a triangle");
      }
    } else {
      showMsg("value should be greater than 0.");
    }
  }
}


function showMsg(massage) {
  outputE1.innerText=massage;
}

isTriangleBtn.addEventListener("click", isTriangle)