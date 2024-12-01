const apiKey = "8a9d4fa13d33034d39fed0eb756aa49b";

const fetchEvents = async () => {
  const eventsContainer = document.getElementById("events-container");
  eventsContainer.innerHTML = "<p>Loading events...</p>";

  try {
    const response = await fetch(
      `https://api.the-odds-api.com/v4/sports/upcoming/?apiKey=${apiKey}&dateFrom=2024-12-01&dateTo=2024-12-02`
    );
    const data = await response.json();

    if (data.length === 0) {
      eventsContainer.innerHTML = "<p>No events found for the selected dates.</p>";
      return;
    }

    const eventsHTML = data
      .map(
        (event) => `
      <div class="event">
        <h3>${event.home_team} vs ${event.away_team}</h3>
        <p><strong>Sport:</strong> ${event.sport_title}</p>
        <p><strong>Date:</strong> ${new Date(event.commence_time).toLocaleString()}</p>
      </div>
    `
      )
      .join("");
    eventsContainer.innerHTML = eventsHTML;
  } catch (error) {
    console.error("Error fetching events:", error);
    eventsContainer.innerHTML = "<p>Error fetching events. Please try again later.</p>";
  }
};

fetchEvents();
