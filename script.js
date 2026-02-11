const ratingPointButtons = document.querySelectorAll(".rating-point-button");
const ratingSubmitButton = document.querySelector(".rating-submit-button");
const ratingContainer = document.querySelector(".rating-container");
const resultContainer = document.querySelector(".result-container");
const resultRatingPoint = document.querySelector(".result-rating-point");

let selectedRating = null;

ratingPointButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    ratingPointButtons.forEach((btn) => btn.classList.remove("selected"));
    e.currentTarget.classList.add("selected");

    selectedRating = e.currentTarget.textContent;

    ratingSubmitButton.removeAttribute("disabled");
  });
});

ratingSubmitButton.addEventListener("click", () => {
  resultRatingPoint.textContent = selectedRating;

  ratingContainer.classList.add("hidden");
  resultContainer.classList.remove("hidden");
});
