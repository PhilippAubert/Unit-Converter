import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/', express.static(path.join(__dirname, 'app')));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/', (req, res) => {
    console.log('POST request received');
    const { length, from, to } = req.body;

    //CALCULATION STARTS HERE! 
    // SEND SIMPLIFED INDEX WITH H1 AS TEMPLATE LITERAL 
    // ERROR HANDLING GALORE!!! 

    res.send(`
        <h1>Received value</h1>
        <p>Length: ${length}</p>
        <a href="/">Back</a>
    `);    
});


app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

//temperature=5645&to=celsius&to=fahrenheit