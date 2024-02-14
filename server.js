const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

mongoose.connect('mongodb://localhost/friendsphere', {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.set('debug', true);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
