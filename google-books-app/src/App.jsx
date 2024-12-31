import React from "react";
import BookList from "./components/BookList";

const App = () => {
    return (
        <div>
            <header>
                <h1>Google Books App</h1>
            </header>
            <main>
                <BookList />
            </main>
            <footer>
                <p>&copy; 2024 Google Books App</p>
            </footer>
        </div>
    );
};

export default App;
