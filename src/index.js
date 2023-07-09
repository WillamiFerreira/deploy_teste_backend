const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({
    origin: 'https://shiny-cupcake-cc0748.netlify.app'
}))

app.get("/", (req, res) => {
    res.send("Welcome to Home!");
})

app.post('/', (req, res) => {
    res.send(req.body);
});


const PORT = 3000;
app.listen(PORT, ()=> console.log("Server listening on port", PORT));