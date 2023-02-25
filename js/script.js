let monthlyBtn = document.getElementsByClassName("buttonBlue");
let yearlyBtn = document.getElementsByClassName("buttonWhite");

monthlyBtn.addEventListener("click", function () {
  if (monthlyBtn.style.backgroundColor === "blue") {
    monthlyBtn.style.backgroundColor = "white";
  }
});

yearlyBtn.addEventListener("click", function () {
  if (yearlyBtn.style.backgroundColor === "white") {
    yearlyBtn.style.backgroundColor = "blue";
  }
});
