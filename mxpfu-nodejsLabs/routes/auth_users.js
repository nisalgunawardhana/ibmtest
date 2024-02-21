const express = require('express');
const router = express.Router();

// Sample users array, you should replace it with your actual user data
let users = [
    {
        username: "user1",
        password: "password1"
    },
    {
        username: "user2",
        password: "password2"
    }
];

// Task 7: Login as a registered user and save session as JWT
router.post('/customer/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        // Mock implementation to create and send JWT
        const token = jwt.sign({ username: user.username }, 'secret_key');
        res.json({ token });
    } else {
        res.status(401).send('Invalid username or password.');
    }
});

// Task 8: Add or modify a book review
router.post('/review/:isbn', (req, res) => {
    const isbn = req.params.isbn;
    const { review } = req.query;
    const username = req.user.username; // Assuming user is authenticated and session is maintained

    // Find the book by ISBN
    const bookIndex = books.findIndex(book => book.isbn === isbn);

    if (bookIndex !== -1) {
        const existingReviewIndex = books[bookIndex].reviews.findIndex(r => r.username === username);
        if (existingReviewIndex !== -1) {
            // Modify existing review
            books[bookIndex].reviews[existingReviewIndex].review = review;
            res.send('Review modified successfully.');
        } else {
            // Add new review
            books[bookIndex].reviews.push({ username, review });
            res.send('Review added successfully.');
        }
    } else {
        res.status(404).send('Book not found.');
    }
});

// Task 9: Delete a book review
router.delete('/review/:isbn', (req, res) => {
    const isbn = req.params.isbn;
    const username = req.user.username; // Assuming user is authenticated and session is maintained

    // Find the book by ISBN
    const bookIndex = books.findIndex(book => book.isbn === isbn);

    if (bookIndex !== -1) {
        const reviewIndex = books[bookIndex].reviews.findIndex(review => review.username === username);
        if (reviewIndex !== -1) {
            // Delete review
            books[bookIndex].reviews.splice(reviewIndex, 1);
            res.send('Review deleted successfully.');
        } else {
            res.status(404).send('Review not found.');
        }
    } else {
        res.status(404).send('Book not found.');
    }
});

module.exports = router;
