function checkPNR() {
    const pnr = document.getElementById('pnrInput').value;
    if(!pnr) { alert('Enter PNR number'); return; }
    document.getElementById('pnrResult').innerHTML = `<span class="badge badge-success">CONFIRMED</span> Train: 12623 MAS-TVC Mail | Coach: S4, Seat: 42 (Middle Berth) | Status: CNF`;
}
function bookTrain(e) {
    e.preventDefault();
    const pnr = "PNR" + Math.floor(100000000 + Math.random() * 900000000);
    alert(`Ticket Reserved Successfully!\nPNR Generated: ${pnr}\nStatus: CONFIRMED\nPayment: Online Mode Settled.\nRedirecting to print ticket view...`);
    window.location.href = "print_ticket.html?pnr=" + pnr;
}
function cancelTrainTicket() {
    const pnr = document.getElementById('cancelPnr').value;
    if(!pnr) { alert('Enter PNR'); return; }
    alert(`Ticket #${pnr} Cancelled.\nCancellation Time: >48 Hours before departure.\nRefund Amount: 80% (Rs. 388.00 credited back to bank).`);
}
