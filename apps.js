
document.addEventListener('DOMContentLoaded', function () {
  const calendarEl = document.getElementById('calendar');
  const bookingList = document.getElementById('booking-list');
  const form = document.getElementById('booking-form');
  let bookings = JSON.parse(localStorage.getItem('bookings')) || [];

  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'timeGridWeek',
    locale: 'pl',
    weekends: false,
    hiddenDays: [0, 6],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'timeGridWeek,timeGridDay'
    },
    slotMinTime: "15:00:00",
    slotMaxTime: "23:00:00",
    scrollTime: "15:00:00",
    height: "auto",
    events: bookings.map((b, index) => ({
      id: index,
      title: `${b.client} (${b.type})`,
      start: b.time,
      end: new Date(new Date(b.time).getTime() + 60 * 60 * 1000),
      backgroundColor: b.type === 'grupowy' ? 'green' : 'blue',
      borderColor: b.type === 'grupowy' ? 'green' : 'blue'
    }))
  });

  calendar.render();

  function saveAndRender() {
    bookings.sort((a, b) => new Date(a.time) - new Date(b.time));
    localStorage.setItem('bookings', JSON.stringify(bookings));
    renderTable();
  }

  function renderTable() {
    bookingList.innerHTML = '';
    bookings.forEach((b, i) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${b.client}</td>
        <td>${b.trainer}</td>
        <td>${b.type}</td>
        <td>${new Date(b.time).toLocaleString()}</td>
        <td><button class="delete-btn" data-index="${i}">Usuń</button></td>
      `;
      bookingList.appendChild(row);
    });

    document.querySelectorAll('.delete-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        const i = this.getAttribute('data-index');
        bookings.splice(i, 1);
        calendar.removeAllEvents();
        bookings.forEach((b, index) => {
          calendar.addEvent({
            id: index,
            title: `${b.client} (${b.type})`,
            start: b.time,
            end: new Date(new Date(b.time).getTime() + 60 * 60 * 1000),
            backgroundColor: b.type === 'grupowy' ? 'green' : 'blue',
            borderColor: b.type === 'grupowy' ? 'green' : 'blue'
          });
        });
        saveAndRender();
      });
    });
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const client = document.getElementById('client-name').value;
    const trainer = document.getElementById('trainer-name').value;
    const time = document.getElementById('training-time').value;
    const type = document.getElementById('type').value;

    bookings.push({ client, trainer, time, type });

    calendar.addEvent({
      title: `${client} (${type})`,
      start: time,
      end: new Date(new Date(time).getTime() + 60 * 60 * 1000),
      backgroundColor: type === 'grupowy' ? 'green' : 'blue',
      borderColor: type === 'grupowy' ? 'green' : 'blue'
    });

    saveAndRender();
    form.reset();
  });

  renderTable();
});
