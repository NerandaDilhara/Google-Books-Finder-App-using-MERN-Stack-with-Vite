import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const PORT = 5050;

app.use(cors());

app.get("/api/books", async (req, res) => {
    const query = req.query.q || "fiction"; // Default query
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${query}`;
    
    try {
        const response = await axios.get(apiUrl);
        const books = response.data.items.map((item) => ({
            id: item.id,
            title: item.volumeInfo.title,
            authors: item.volumeInfo.authors,
            thumbnail: item.volumeInfo.imageLinks?.thumbnail,
            description: item.volumeInfo.description,
        }));
        res.json(books);
    } catch (error) {
        console.error("Error fetching data from Google Books API:", error);
        res.status(500).json({ error: "Failed to fetch books." });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
