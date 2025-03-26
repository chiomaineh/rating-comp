let selectedRating = 0;

// Select all number buttons
const numberButtons = document.querySelectorAll(".number");
const submitButton = document.getElementById("submit");
const selectedRatingText = document.getElementById("selected-rating");
const ratingContainer = document.getElementById("rating");
const thankYouContainer = document.getElementById("thank-you");

// Add click event to each rating button
numberButtons.forEach(button => {
    button.addEventListener("click", function () {
        // Remove active class from all buttons
        numberButtons.forEach(btn => btn.classList.remove("selected"));
        
        // Add active class to clicked button
        this.classList.add("selected");
        

        // Update selected rating
        selectedRating = this.textContent;
        
        // Enable submit button
        submitButton.disabled = false;
    });
});

// Handle submit button click
submitButton.addEventListener("click", function () {
    if (selectedRating > 0) { 
    
        // Update the thank-you message with the selected rating
        selectedRatingText.textContent = selectedRating;
        
        // Hide rating section and show thank-you section
        ratingContainer.style.display = "none";
        thankYouContainer.style.display = "block";
    }
});

