let selectedSeats = [];
let unitFare = 950;

function openSeatModal(cat, fare) {
    unitFare = fare;
    document.getElementById('seatModal').style.display = 'block';
}

function selectSeat(el, seatNum) {
    if (el.classList.contains('booked')) return;
    if (el.classList.contains('selected')) {
        el.classList.remove('selected');
        selectedSeats = selectedSeats.filter(s => s !== seatNum);
    } else {
        el.classList.add('selected');
        selectedSeats.push(seatNum);
    }
    document.getElementById('selSeats').innerText = selectedSeats.length ? selectedSeats.join(', ') : 'None';
    document.getElementById('totalFare').innerText = selectedSeats.length * unitFare;
}

function confirmBusTicket() {
    if (!selectedSeats.length) { alert('Please select at least one seat.'); return; }
    alert(`Ticket Confirmed!\nSeats: ${selectedSeats.join(', ')}\nTotal Paid: Rs. ${selectedSeats.length * unitFare}\nConfirmation SMS and E-Ticket dispatched!`);
}

function postComment() {
    const user = document.getElementById('commUser').value;
    const text = document.getElementById('commText').value;
    if (!user || !text) { alert('Please enter your name and comment'); return; }
    const p = document.createElement('p');
    p.innerHTML = `<strong>${user}:</strong> ${text}`;
    document.getElementById('commentsList').appendChild(p);
    document.getElementById('commUser').value = '';
    document.getElementById('commText').value = '';
}
