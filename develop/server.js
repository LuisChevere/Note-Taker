const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const allNotes = require("./db/db.json");

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});


app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
})