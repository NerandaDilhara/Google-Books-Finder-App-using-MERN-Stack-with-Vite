import React from "react";
import "./BookItem.css";

const BookItem = ({ book }) => {
    return (
        <div className="book-item">
            <img src={book.thumbnail || "/default-book.png"} alt={book.title} />
            <div>
                <h3>{book.title}</h3>
                <p>{book.authors?.join(", ")}</p>
                <p>{book.description?.slice(0, 100)}...</p>
            </div>
        </div>
    );
};

export default BookItem;
