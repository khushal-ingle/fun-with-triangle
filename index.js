const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle");
const outputE1 = document.querySelector("#output");

function calculateSumOftriangles(angle1,angle2,angle3){
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}

function isTriangle(){
  const sumOfAngles = calculateSumOftriangles(Number(inputs[0].value) ,Number(inputs[1].value) , Number(inputs[2].value));

  if(sumOfAngles == 180){
    //  console.log("yay, The angles form a triangle");
     outputE1.innerText = "Yay, The angles form a triangle";
  }else{
    // console.log("Oh Oh! The angles don't form a triangle");
    outputE1.innerText = "Oh Oh! The angles don't form a triangle";
  }
}

isTriangleBtn.addEventListener("click", isTriangle)