 fetch('http://localhost:3000/films/1')
  .then(response => response.json())
  .then(data => {

    const posterUrl = data.poster;
    const title = data.title;
    const runtime = data.runtime;
    const showtime = data.showtime;
    const capacity = data.capacity;
    const ticketsSold = data.tickets_sold;
    const availableTickets = capacity - ticketsSold;
    // document.getElementById('next').addEventListener((e)=>{

    // })
    document.getElementById('poster').src = posterUrl;
    document.getElementById('title').textContent = title;
    document.getElementById('runtime').textContent = `${runtime} minutes`;
    document.getElementById('showtime').textContent = showtime;
    document.getElementById('available-tickets').textContent = availableTickets;
  })
  .catch(error => {
    console.error('Error:', error);
  });

  let currentMovieId = 1;

function changeContent() {
  currentMovieId++;
  
  fetch(`http://localhost:3000/films/${currentMovieId}`)
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
    });
}
