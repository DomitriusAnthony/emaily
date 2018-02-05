// common js modules below (requiring code between different files)
const express = require ('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ Hi: 'there'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);