//Install express server
const express = require('express');
const path = require('path');
//const app = require('../app/app-routing.module')(app)

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/EcomApp'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/EcomApp/'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
