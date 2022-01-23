const router = require("express").Router();
const db = require("../../db/db.json");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

router.get("/notes", (req, res) => {
  let results = db;
  console.log("api note get");
  res.json(results);
});


// router.post("/notes", (req, res) => {
//   let results = req.body;
//   console.log("api note post");
//   res.json(results);
// });


// GET request for db
router.get("/db", (req, res) => {
    console.log("database");
  res.json(db);
});

router.delete("/notes/:id", (req, res) => {
    const selected = req.params.id
  res.send(selected);
});


// this is wrong
// POST request to add a note
router.post("/notes", (req, res) => {


  const { title, text } = req.body;

  if (title && text) {
    const newNote = {
        id :  uuidv4(),
      title,
      text,
    };

    console.log(newNote);
  res.send("done");

// fs.readFile('./db/db.json', "utf-8", (err, data) => {
//     if(err) {
//     console.log(err);
//   } else {
    // const parsedNotes = JSON.parse(data);
    // console.log(parsedNotes);
    // parsedNotes.push(newNote);
    db.push(newNote);

//     fs.writeFile("./db/db.json", JSON.stringify(parsedNotes), (err) =>
//       err ? console.error(err) : console.log('Reviews for has been written'));
// }
fs.writeFile("./db/db.json", JSON.stringify(db), (err) =>
      err ? console.error(err) : console.log('Reviews for has been written'));
}
});
//   }
// });

module.exports = router;
