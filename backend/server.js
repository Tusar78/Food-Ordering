import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";

// app config
const app = express();
const port = 4000;


// middleware
app.use(express.json())
app.use(cors())

// db Connection
connectDB();

app.get("/", (req, res) => {
    res.send("API Working")
})

app.listen(port, () => {
    console.log(`Server Stated on http://localhost:${port}`)
})

// mongodb+srv://sdp300:sdp300@cluster0.n6msi.mongodb.net/?