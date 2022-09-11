const inputBase = document.querySelector("#base");
const inputHeight = document.querySelector("#height");
const checkAreaBtn = document.querySelector("#check-area-btn");
const outputE1 = document.querySelector("#output");

checkAreaBtn.addEventListener("click", () => {



    if (inputBase.value < 0 || inputHeight.value < 0) {

        showMsg("Please enter positive values in the fields.");
    } else if (inputBase.value === "" || inputHeight.value === "" || inputBase.value == 0 || inputHeight.value == 0) {
        showMsg("Field should not be empty or equal to 0.");
    } else {
            var area = (inputBase.value * inputHeight.value) / 2;
            showMsg("The area of the triangle is " + area + "cm²");
    }

    

});

function showMsg(massage) {
    outputE1.innerText = massage;
}