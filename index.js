import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { convert } from "./converter.js";
  
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/", express.static(path.join(__dirname, "app")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/", (req, res) => {
    convert(req.body);

    res.send(`
        <h1>Received value</h1>
        <a href="/">Back</a>
    `);    
});

app.listen(3000, () => {
  	console.log("Server running on http://localhost:3000");
});

//temperature=5645&to=celsius&to=fahrenheit