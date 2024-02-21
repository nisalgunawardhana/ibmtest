const express = require('express');
const router = express.Router();

let books = [
    {
        isbn: "9781593275846",
        title: "Eloquent JavaScript, Third Edition",
        author: "Marijn Haverbeke",
        reviews: ["Excellent book for learning JavaScript"],
    },
    {
        isbn: "9781449331818",
        title: "Learning JavaScript Design Patterns",
        author: "Addy Osmani",
        reviews: ["Great resource for understanding design patterns"],
    },
    {
        isbn: "9781449365035",
        title: "Speaking JavaScript",
        author: "Axel Rauschmayer",
        reviews: ["Comprehensive guide to JavaScript language"],
    }
];

// Task 1: Get all books
router.get('/', (req, res) => {
    res.send(JSON.stringify(books, null, 2));
});

// Task 2: Get book details by ISBN
router.get('/isbn/:isbn', (req, res) => {
    const isbn = req.params.isbn;
    const book = books.find(book => book.isbn === isbn);
    if (book) {
        res.send(JSON.stringify(book, null, 2));
    } else {
        res.status(404).send('Book not found.');
    }
});

// Task 3: Get books by author
router.get('/author/:author', (req, res) => {
    const author = req.params.author;
    const authorBooks = books.filter(book => book.author === author);
    if (authorBooks.length > 0) {
        res.send(JSON.stringify(authorBooks, null, 2));
    } else {
        res.status(404).send('Books by author not found.');
    }
});

// Task 4: Get books by title
router.get('/title/:title', (req, res) => {
    const title = req.params.title;
    const titleBooks = books.filter(book => book.title === title);
    if (titleBooks.length > 0) {
        res.send(JSON.stringify(titleBooks, null, 2));
    } else {
        res.status(404).send('Books by title not found.');
    }
});

// Task 5: Get book reviews by ISBN
router.get('/review/:isbn', (req, res) => {
    const isbn = req.params.isbn;
    const book = books.find(book => book.isbn === isbn);
    if (book) {
        res.send(JSON.stringify(book.reviews, null, 2));
    } else {
        res.status(404).send('Book not found.');
    }
});

// Task 6: Register a new user
router.post('/register', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        res.status(400).send('Username and password are required.');
    } else if (users.some(user => user.username === username)) {
        res.status(400).send('Username already exists.');
    } else {
        // Code for user registration
        res.send('User registered successfully.');
    }
});

module.exports = router;
