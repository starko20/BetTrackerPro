document.addEventListener("DOMContentLoaded", () => {
  console.log("BetTrackerPro Loaded!");

  // Poišči gumb z ID-jem 'click-me'
  const button = document.getElementById("click-me");

  // Preveri, ali obstaja gumb
  if (button) {
    button.addEventListener("click", () => {
      alert("You clicked the button!");
    });
  } else {
    console.error("Gumb z ID 'click-me' ni najden.");
  }
});
