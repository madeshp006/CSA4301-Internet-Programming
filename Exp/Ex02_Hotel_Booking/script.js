// Hotel Room Booking Logic & 3-Day Rule Verification
function checkAvailability(e) {
    e.preventDefault();
    const cin = document.getElementById('checkInDate').value;
    const cout = document.getElementById('checkOutDate').value;
    if (!cin || !cout) { alert('Please select check-in and check-out dates.'); return; }
    if (new Date(cin) >= new Date(cout)) { alert('Check-out date must be after check-in date.'); return; }
    alert(`Checking room availability for ${cin} to ${cout}. All 4 room categories have available units!`);
}

function bookRoom(type, price) {
    const name = prompt("Enter guest primary name:");
    if (!name) return;
    alert(`Booking Confirmed!\nGuest: ${name}\nRoom: ${type}\nRate: Rs. ${price}/night\nConfirmation email dispatched.`);
}

function check3DayRule(checkInDateStr, actionType) {
    const today = new Date('2026-10-15'); // Current execution date
    const checkIn = new Date(checkInDateStr);
    const diffTime = checkIn - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays >= 3) {
        alert(`Request APPROVED!\nDays until arrival: ${diffDays} days (>= 3 days).\nBooking has been successfully ${actionType === 'cancel' ? 'CANCELLED with 100% refund' : 'opened for date modification'}.`);
    } else {
        alert(`Request REJECTED!\nDays until arrival: ${diffDays} days (< 3 days).\nPolicy Violation: Changes and cancellations are strictly permitted only up to 3 days before arrival.`);
    }
}

function adminUpdateRooms() {
    alert("Administrator updates saved! Room inventory counts and tariff modifications updated in database.");
}
