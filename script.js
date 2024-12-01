document.addEventListener("DOMContentLoaded", () => {
  console.log("BetTrackerPro Loaded");
  alert("Welcome to BetTrackerPro!");
});
document.addEventListener("DOMContentLoaded", () => {
  console.log("BetTrackerPro Loaded");

  // Poišči vse elemente na strani, na katere želiš dodati klike
  const featuresSection = document.querySelector("section");
  
  // Dodaj funkcionalnost na klik
  featuresSection.addEventListener("click", () => {
    alert("You clicked on the Features section!");
  });

  // Dodatna funkcionalnost za gumb
  const learnMoreButton = document.getElementById("learn-more");

  if (learnMoreButton) {
    learnMoreButton.addEventListener("click", () => {
      alert("More features coming soon!");
    });
  }
});
