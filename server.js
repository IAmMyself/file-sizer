var express = require("express"),
	path = require("path"),
	multer = require('multer'),
	app = express(),
	upload = multer({ dest: "./uploads/" });

console.log("Booted!");

app.get("/", function (req, res) {
	res.sendfile(path.join(__dirname, "home.html"));
});

app.post("/measure", upload.single("thisfile"), function (req, res) {
	res.send(JSON.stringify({size: req.file.size}));
	res.end();
});

app.listen(process.env.PORT);