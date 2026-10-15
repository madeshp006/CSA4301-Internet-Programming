// Library Management Interactive Logic
function searchBooks() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const cat = document.getElementById('catFilter').value.toLowerCase();
    const rows = document.querySelectorAll('#booksBody tr');
    
    rows.forEach(row => {
        const text = row.innerText.toLowerCase();
        const matchesText = text.includes(input);
        const matchesCat = cat === "" || text.includes(cat);
        row.style.display = (matchesText && matchesCat) ? "" : "none";
    });
}

function borrowBook(title) {
    alert(`Borrow request for "${title}" has been registered! Please collect the book from the librarian desk.`);
}

function payFine(amt) {
    alert(`Processing online payment of Rs. ${amt}.00 via UPI/NetBanking. Overdue fine cleared!`);
}

function addBook() {
    const title = document.getElementById('nbTitle').value;
    if (!title) { alert('Please enter book title'); return; }
    alert(`Book "${title}" successfully added to inventory.`);
}

function issueBook() {
    const reg = document.getElementById('issReg').value;
    const b = document.getElementById('issBook').value;
    if (!reg || !b) { alert('Enter student register number and book name'); return; }
    alert(`Book "${b}" issued to student ${reg}. Due date set to 14 days from today.`);
}
