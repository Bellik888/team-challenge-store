import React from "react";
import BookCard from "../BookCard";

const Main = () => {
    const books = [
        {
            index:1,
            title: "Book 1",
            author: "Author 1",
            image: "/path/to/image1.jpg",
            rating: 4,
            price: 10.99,
        },
    ];

    return (
        <div>
            <h1>Book List</h1>
            <div className="book-list">
                {books.map((book, index) => (
                    <BookCard key={books.index} book={book} />
                ))}
            </div>
        </div>
    );
};

export default Main;