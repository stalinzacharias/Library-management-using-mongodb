const API_URL = "http://localhost:5000/api/books";

/* Fetch Books */
async function fetchBooks() {
    const res = await fetch(API_URL);
    const books = await res.json();

    const table = document.getElementById("bookTable");
    table.innerHTML = "";

    books.forEach(book => {
        table.innerHTML += `
            <tr>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.isbn || ""}</td>
                <td>${book.publishedYear || ""}</td>
                <td>
                    <button onclick="deleteBook('${book._id}')">Delete</button>
                </td>
            </tr>
        `;
    });
}

/* Add Book */
async function addBook() {
    const book = {
        title: document.getElementById("title").value,
        author: document.getElementById("author").value,
        isbn: document.getElementById("isbn").value,
        publishedYear: document.getElementById("year").value
    };

    await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(book)
    });

    fetchBooks();
}

/* Delete Book */
async function deleteBook(id) {
    await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });

    fetchBooks();
}

fetchBooks();
