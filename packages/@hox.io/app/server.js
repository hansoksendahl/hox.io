const express = require('express');
const app = express();
var path = require('path');

app.use(express.static('dist'));

app.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
