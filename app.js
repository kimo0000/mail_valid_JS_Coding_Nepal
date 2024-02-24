const formEl = document.querySelector("form"),
  enveloppeEl = formEl.querySelector(".envelope"),
  inputEl = formEl.querySelector("input"),
  exclamationEl = formEl.querySelector(".exclamation"),
  btn = formEl.querySelector("button"),
  resultEl = document.querySelector(".result");

// console.log(validEmail)

btn.addEventListener("click", (e) => {
  let validEmail = /\w+@(gmail|hotmail)\.(com|fr|yahoo|org|net)/gi;
  let valueInput = inputEl.value;
  console.log(validEmail.test(valueInput));
  if (valueInput == "") {
    resultEl.innerText = "do not empty input";
    resultEl.style.color = "red";
  } else if (!valueInput.match(validEmail)) {
    formEl.classList.add("error");
    resultEl.style.color = "red";
    resultEl.innerText = "please enter a valid email";
  } else {
    formEl.classList.replace("error", "valid");
    resultEl.style.color = "green";
    resultEl.innerText = "valid email";
  }
});
