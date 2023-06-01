// server/index.js
const express = require("express");
const bodyParser = require('body-parser');
const fs = require("fs");
const multer = require("multer");
const mimeTypes = require("mime-types");

const storage = multer.diskStorage({
    destination: './archivos',
    filename:function(req,file,cb){
        cb("",file.originalname);
    }
});

const PORT = process.env.PORT || 3002;
const app = express();
app.use(bodyParser.json());
const upload = multer({
    storage: storage
});

app.get("/", (req, res) => {
    console.log(__dirname);
  res.sendFile(__dirname + "../public/index.html");
});
app.post("/files",upload.single('archivos') ,(req, res) => {
    res.send("ok");
  });


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
  