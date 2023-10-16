 fetch('http://localhost:3000/films/2')
  .then(response => response.json())
  .then(data => {
    const posterUrl = data.poster;
    const title = data.title;
    const runtime = data.runtime;
    const showtime = data.showtime;
    const capacity = data.capacity;
    const ticketsSold = data.tickets_sold;
    const availableTickets = capacity - ticketsSold;

    document.getElementById('poster').src = posterUrl;
    document.getElementById('title').textContent = title;
    document.getElementById('runtime').textContent = `${runtime} minutes`;
    document.getElementById('showtime').textContent = showtime;
    document.getElementById('available-tickets').textContent = availableTickets;
  })
  .catch(error => {
    console.error('Error:', error);
  });
