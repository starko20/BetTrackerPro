const apiKey = "8a9d4fa13d33034d39fed0eb756aa49b";

const fetchStatistics = async () => {
  const eventsContainer = document.getElementById("events-container");
  eventsContainer.innerHTML = "<p>Loading statistics...</p>";

  try {
    const response = await fetch(
      `https://api.the-odds-api.com/v4/sports/upcoming/?apiKey=${apiKey}&dateFrom=2024-12-01&dateTo=2024-12-02`
    );
    const data = await response.json();

    if (data.length === 0) {
      eventsContainer.innerHTML = "<p>No statistics found for the selected dates.</p>";
      return;
    }

    const statsHTML = data
      .map(
        (event) => `
      <div class="event">
        <h3>${event.home_team} vs ${event.away_team}</h3>
        <p><strong>Sport:</strong> ${event.sport_title}</p>
        <p><strong>Date:</strong> ${new Date(event.commence_time).toLocaleString()}</p>
        <p><strong>Odds:</strong> Home - ${event.bookmakers[0]?.markets[0]?.outcomes[0]?.price || "N/A"}, Away - ${event.bookmakers[0]?.markets[0]?.outcomes[1]?.price || "N/A"}</p>
      </div>
    `
      )
      .join("");
    eventsContainer.innerHTML = statsHTML;
  } catch (error) {
    console.error("Error fetching statistics:", error);
    eventsContainer.innerHTML = "<p>Error fetching statistics. Please try again later.</p>";
  }
};

document.addEventListener("DOMContentLoaded", fetchStatistics);
