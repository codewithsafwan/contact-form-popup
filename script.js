// Get the reference to the popup element
let popup = document.getElementById("popup");

// Function to open the popup
function openPopup() {
    popup.classList.add("open-popup"); // Add the "open-popup" class to show the popup
}

// Function to close the popup
function closePopup() {
    popup.classList.remove("open-popup"); // Remove the "open-popup" class to hide the popup
}

// Function to handle form submission
function submitForm(event) {
    event.preventDefault(); // Prevent default form submission behavior
    
    openPopup(); // Open the popup
    return false; // Prevent the form from being cleared
}
