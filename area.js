const inputBase = document.querySelector ("#base");
const inputHeight = document.querySelector ("#height");
const checkAreaBtn = document.querySelector ("#check-area-btn");
const outputE1 = document.querySelector ("#output");

checkAreaBtn.addEventListener ("click", ()=> {

    if (inputBase.value <0 || inputHeight.value < 0) {
        outputE1.innerText = "Please enter positive values in the fields.";
    } else if ( inputBase.value === "" || inputHeight.value === "") {
        outpuE1t.innerText = "Please enter values in the fields."
    } else {
        var area = (inputBase.value * inputHeight.value)/2;
    outputE1.innerText = "The area of the triangle is " + area+"cm²";
    }
    
});