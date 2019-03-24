var inputs = document.querySelectorAll(".form__radio");
var inputsGender = document.querySelectorAll(".form__radio--gender");

for (var i = 0; i < inputsGender.length; i++) {
  inputsGender[i].addEventListener("click", function () {
    for (i = 0; i < inputs.length; i++) {
      inputs[i].disabled = false;
    }
  })
}
