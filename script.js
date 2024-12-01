const apiKey = "8a9d4fa13d33034d39fed0eb756aa49b";

async function fetchOdds() {
  const response = await fetch(
    `https://api.the-odds-api.com/v4/sports/upcoming/?apiKey=${apiKey}&dateFrom=2024-12-01&dateTo=2024-12-02`
  );
  const data = await response.json();

  const container = document.getElementById("odds-container");
  container.innerHTML = ""; // Clear loading message

  if (data.length === 0) {
    container.innerHTML = "<p>No upcoming events found.</p>";
    return;
  }

  data.forEach(event => {
    const eventDiv = document.createElement("div");
    eventDiv.classList.add("event");

    const title = document.createElement("h3");
    title.textContent = `${event.sport_title}: ${event.home_team} vs. ${event.away_team}`;
    eventDiv.appendChild(title);

    const commenceTime = document.createElement("p");
    commenceTime.textContent = `Start Time: ${new Date(
      event.commence_time
    ).toLocaleString()}`;
    eventDiv.appendChild(commenceTime);

    event.bookmakers.forEach(bookmaker => {
      const bookmakerDiv = document.createElement("div");
      bookmakerDiv.classList.add("bookmaker");

      const bookmakerTitle = document.createElement("h4");
      bookmakerTitle.textContent = `${bookmaker.title}`;
      bookmakerDiv.appendChild(bookmakerTitle);

      bookmaker.markets.forEach(market => {
        if (market.key === "h2h") {
          market.outcomes.forEach(outcome => {
            const outcomeP = document.createElement("p");
            outcomeP.textContent = `${outcome.name}: ${outcome.price}`;
            bookmakerDiv.appendChild(outcomeP);
          });
        }
      });

      eventDiv.appendChild(bookmakerDiv);
    });

    container.appendChild(eventDiv);
  });
}

fetchOdds();
