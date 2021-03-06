/* Load modules */
const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
// const route = require('./js/route');

/* Import routes */
// const reviews = require('./routes/reviews');

// Create our express server
const app = express();

// Serve static files from the 'dist' directory (generated by webpack)
app.use(express.static('dist'));
// Set our views path
app.set('views', path.join(__dirname, 'views'));
// Set our app to use the handlebars engine
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

/* Set routes */
// app.get(route.create('/reviews'), reviews.view);

// Serve Webpack build output in prod (to get React Router to work)
app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}../../../dist/index.html`));
});

// Start listening on the specified port, or 8080 for development
app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
