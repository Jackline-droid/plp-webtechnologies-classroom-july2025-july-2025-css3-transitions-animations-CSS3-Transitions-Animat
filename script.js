/* 📚 Part 2: JavaScript Functions — Parameters, Return Values, Scope */

// Global variable
let clickCount = 0;

// Function with parameters & return value
function multiply(num1, num2) {
  return num1 * num2;
}

// Local vs global scope demo
function updateClickCount() {
  let localMessage = "Button was clicked!";
  clickCount++;
  console.log(localMessage + " Total clicks: " + clickCount);
}

/* 🎬 Part 3: Combining CSS & JS Animations */

// Animate box on button click
document.getElementById("animateBtn").addEventListener("click", function() {
  const box = document.getElementById("animateBox");
  box.classList.toggle("animate"); // Toggle animation
  updateClickCount(); // Call function to log clicks
});

// Popup modal logic
document.getElementById("popupBtn").addEventListener("click", function() {
  togglePopup(true);
});

document.getElementById("closePopup").addEventListener("click", function() {
  togglePopup(false);
});

// Reusable function with parameter
function togglePopup(show) {
  const popup = document.getElementById("popup");
  if (show) {
    popup.classList.add("show");
  } else {
    popup.classList.remove("show");
  }
}
