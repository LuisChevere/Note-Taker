const fs = require('fs');
const path = require('path');

module.exports = app => {
    fs.readFile("db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        var notes = JSON.parse(data);

        app.get("/api/notes/", function(res,req) {
            res.JSON(notes);
        });

        app.post("/api/notes", function(req,res) {
            let newNote = req.body;
            notes.push(newNote);
            updateDB();
            return console.log("New note added: "+newNote.title);
        });

        app.get("/api/notes/:id", function(req,res) {
            res.JSON(notes[req.params.id]);
        });

        app.delete("/api/notes/:id", function(req,res){
            notes.splice(req.params.id, 1);
            updateDB();
            console.log("Note deleted, id "+req.params.id);
        });

        
    })
}