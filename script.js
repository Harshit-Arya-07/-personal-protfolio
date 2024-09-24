// Add event listeners to buttons
document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach(function(button) {
    button.addEventListener("click", function(event) {
      // Get the button's text content
      const buttonText = event.target.textContent;

      // Handle button clicks
      if (buttonText === "View Project") {
        // Open a new tab with a project details page
        window.open("project-details.html", "_blank");
      } else if (buttonText === "Send Message") {
        // Open a new email composition window
        window.open("mailto:example@example.com?subject=Message from Portfolio Website", "_blank");
      }
    });
  });
});
