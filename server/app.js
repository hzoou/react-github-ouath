require('dotenv').config();

const express = require('express');
const app = express();
const PORT = 4000;
const cors = require('cors');

const passport = require('./middlewares/passport');
const apiRouter = require('./routes');

app.use(cors());
app.use(passport.initialize());
app.use('/api', apiRouter);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
