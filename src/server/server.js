const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const db = require('../config/keys').mongodbURI;
const port = process.env.PORT || 5000;
const persons = require('./routes/api/persons');


const app = express();

mongoose.connect(db, {useNewUrlParser: true})
	.then(() => console.log('DB connected'))
	.catch((err) => console.log('DB error', err));

app.use(bodyParser.json());
app.use('/api/persons', persons);
app.listen(port, () => console.log('App listening on port' + port));

if (process.env.NODE_ENV === 'production') {
	app.enable('trust proxy');
	app.use((req, res, next) => {
		if (req.secure) next();
		else
			res.redirect('https://${req.headers.host}${req.url}');
	});
}

app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

const PUBLIC_DIR = process.cwd() + '/dist';
app.use(express.static(PUBLIC_DIR));
