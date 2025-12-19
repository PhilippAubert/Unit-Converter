import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import { convertWeight, 
	convertLength, 
	convertTemperature 
} from "./utils/converter.js";

import { validateConversionRequest } from "./utils/validation.js";
  
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/", express.static(path.join(__dirname, "app")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.post("/", (req, res) => {

    const validatedInput = validateConversionRequest(req.body);

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
        <h1>Converted value  ${value} ${from}:  ${result} ${to}</h1>
        <a href="/">Back</a>
    `);
});

app.listen(3000, () => {
  	console.log("Server running on http://localhost:3000");
});

//temperature=5645&to=celsius&to=fahrenheit