document.addEventListener("DOMContentLoaded", () => {
  console.log("BetTrackerPro Loaded!");

  // Funkcija za nalaganje vsebine
  function loadContent(featureId) {
    const content = {
      feature1: "Detailed tracking of betting statistics helps you stay ahead!",
      feature2: "Customize your dashboard to suit your betting style.",
      feature3: "Use our comprehensive analysis tools to make informed decisions."
    };

    const dynamicContent = document.getElementById("dynamic-content");
    if (content[featureId]) {
      dynamicContent.innerHTML = `<p>${content[featureId]}</p>`;
    } else {
      dynamicContent.innerHTML = "<p>Feature not found!</p>";
    }
  }

  // Klik na posamezne funkcionalnosti
  document.getElementById("feature1").addEventListener("click", () => {
    loadContent("feature1");
  });

  document.getElementById("feature2").addEventListener("click", () => {
    loadContent("feature2");
  });

  document.getElementById("feature3").addEventListener("click", () => {
    loadContent("feature3");
  });
});
