document.addEventListener("DOMContentLoaded", () => {
  console.log("BetTrackerPro Loaded!");

  const mainContent = document.getElementById("main-content");

  // Funkcija za nalaganje vsebine
  function loadContent(page) {
    switch (page) {
      case "home":
        mainContent.innerHTML = `
          <section>
            <h2>Welcome to BetTrackerPro</h2>
            <p>Track your betting statistics and make smarter decisions!</p>
          </section>`;
        break;
      case "register":
        mainContent.innerHTML = `
          <section>
            <h2>Register</h2>
            <form id="register-form">
              <label for="username">Username:</label>
              <input type="text" id="username" required>
              <label for="password">Password:</label>
              <input type="password" id="password" required>
              <button type="submit">Register</button>
            </form>
          </section>`;
        document.getElementById("register-form").addEventListener("submit", (e) => {
          e.preventDefault();
          alert("User registered!");
        });
        break;
      case "login":
        mainContent.innerHTML = `
          <section>
            <h2>Login</h2>
            <form id="login-form">
              <label for="username">Username:</label>
              <input type="text" id="username" required>
              <label for="password">Password:</label>
              <input type="password" id="password" required>
              <button type="submit">Login</button>
            </form>
          </section>`;
        document.getElementById("login-form").addEventListener("submit", (e) => {
          e.preventDefault();
          alert("User logged in!");
        });
        break;
      case "membership":
        mainContent.innerHTML = `
          <section>
            <h2>Membership</h2>
            <p>Subscribe for premium features:</p>
            <button id="subscribe">Subscribe for $5/month</button>
          </section>`;
        document.getElementById("subscribe").addEventListener("click", () => {
          alert("Membership activated!");
        });
        break;
      default:
        mainContent.innerHTML = "<p>Page not found!</p>";
    }
  }

  // Dodajanje event listenerjev za zavihke
  document.getElementById("home").addEventListener("click", () => loadContent("home"));
  document.getElementById("register").addEventListener("click", () => loadContent("register"));
  document.getElementById("login").addEventListener("click", () => loadContent("login"));
  document.getElementById("membership").addEventListener("click", () => loadContent("membership"));
});
