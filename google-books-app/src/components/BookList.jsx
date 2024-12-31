import React, { useState, useEffect } from "react";
import BookItem from "./BookItem";
import "./BookList.css";

const BookList = () => {
    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState("");

    const fetchBooks = async (query = "fiction") => {
        try {
            const response = await fetch(`http://localhost:5050/api/books?q=${query}`);
            const data = await response.json();
            setBooks(data);
        } catch (error) {
            console.error("Error fetching books:", error);
        }
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        fetchBooks(query);
    };

    return (
        <div className="form">
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search for books"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            <div className="book-list">
                {books.map((book) => (
                    <BookItem key={book.id} book={book} />
                ))}
            </div>
        </div>
    );
};

export default BookList;
