let selectedValue = null;

const options = document.querySelectorAll(".option");

options.forEach((option) => {
  option.addEventListener("click", () => {
    option.classList.add("selected");
    selectedValue = option.value;
  });
});

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //   navigating to the thanks page!
  if (selectedValue) {
    alert(`selected value is ${selectedValue}`);

    options.forEach((option) => {
      option.classList.remove("selected");
    });
    selectedValue = null;
  } else {
    alert("you have to select a value!");
  }
});
