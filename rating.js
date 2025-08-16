const options = document.querySelectorAll(".option");
const ratingSection = document.getElementById("rating-state");
const thankState = document.querySelector(".thank-you-state");
const selectedRating = document.getElementById("selected-rating");
const form = document.querySelector("form");

options.forEach((option) => {
  option.addEventListener("click", () => {
    options.forEach((option) => {
        option.classList.remove("selected"); // reset classlist
    });

    selectedRating.textContent = option.value;
    option.classList.add("selected");
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (selectedRating.textContent) {
    //  displaying thank you state
    ratingSection.classList.add("hide");
    thankState.classList.add("display");
  } else {
    alert("you have to select a value!");
  }
});
