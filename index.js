import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import {
    convertWeight,
    convertLength,
    convertTemperature
} from "./utils/converter.js";

import { pluralizeUnits, normalizeResult } from "./utils/normalizers.js";

import { validateRequest } from "./utils/validation.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/", express.static(path.join(__dirname, "app")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.post("/", (req, res) => {
    const validatedInput = validateRequest(req.body);

    if (!validatedInput.valid) {
        return res.status(400).send(validatedInput.error);
    }

    const { value, type, from, to } = validatedInput;

    let result;

    switch (type) {
        case "temperature":
            result = convertTemperature(value, from, to);
            break;
        case "length":
            result = convertLength(value, from, to);
            break;
        case "weight":
            result = convertWeight(value, from, to);
            break;
        default:
            return res.status(400).send("Unknown conversion type");
    }

    res.send(`
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<link rel="stylesheet" href="./styles.css">
			<title>Unit Converter Result</title>
		</head>
		<body>
			<div class="global-app">
				<header class="header">
					<h1 class="headline">Unit Converter</h1>
					<nav class="navigation">
						<ul class="list-container">
							<li class="list-item"><a href="/index.html"><p class="list-item-text">Length</p></a></li>
							<li class="list-item"><a href="/weight.html"><p class="list-item-text">Weight</p></a></li>
							<li class="list-item"><a href="/temperature.html"><p class="list-item-text">Temperature</p></a></li>
						</ul>
					</nav>
				</header>
				<main class="main">
					<div class="result-container">
						<p>Converted</p> 
						<p>
							<strong>${value} ${pluralizeUnits({ unit: from, value })}</strong>
						</p>
						<p>to</p>
						<p>
							<strong>${normalizeResult(result)} ${pluralizeUnits({ unit: to, value: result })}</strong>
						</p>
					</div>
					<div class="button-area">
						<a href="/"><button>Reset</button></a>
					</div>
				</main>
				<footer class="footer">
					<p class="footer-text">Unit Converter 2025</p>
				</footer>
			</div>
		</body>
		</html>
	`);
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
