const options = document.querySelectorAll(".option");
const ratingSection = document.getElementById("rating-state");
const thankState = document.querySelector(".thank-you-state");
const selectedRating = document.getElementById("selected-rating");

options.forEach((option) => {
  
  option.addEventListener("click", () => {
    options.forEach(option => {
      if (option.className.includes("selected")) {
      option.classList.remove("selected");  
      } 
    })
    
    selectedRating.textContent = option.value;
      option.classList.add("selected");
    });
    
});

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (selectedRating.textContent) {
    //  displaying thank you state
    ratingSection.classList.add("display-none");
    thankState.classList.add("display");
  } else {
    alert("you have to select a value!");
  }
});
