const ratingButtonsContainer = document.getElementById("rating-buttons");
const submitButton = document.getElementById("submit-buttons");

let buttonClicked = false;

for (let i = 1; i <= 5; i++) {
  const ratingButton = document.createElement("button");

  ratingButton.innerText = i;
  ratingButton.value = i;
  ratingButtonsContainer.appendChild(ratingButton);

  ratingButton.addEventListener("click", (event) => {
    const clickedButton = event.target;
    const buttons = ratingButtonsContainer.getElementsByTagName("button");

    for (let j = 0; j < buttons.length; j++) {
      buttons[j].classList.remove("active");
    }
    clickedButton.classList.add("active");
    buttonClicked = true;
  })

}

submitButton.addEventListener("click", () => {
  if (!buttonClicked) {
    alert("No button clicked");
  } else {
    const ratingSentence = document.getElementById("ratingSentence");
    const activeButton = ratingButtonsContainer.querySelector(".active");
    const ratingContainer = document.querySelector(".rating-container");
    const selectedRating = activeButton.value;

    ratingSentence.innerText = `You selected ${selectedRating} out of 5`;

    // Hide the rating container and show the thankyou-container
    ratingContainer.style.display = "none";
    document.querySelector(".thankyou-container").style.display = "block";
  }
});






