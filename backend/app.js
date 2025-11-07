const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const AppError = require('./utils/appError');
const photoRouter = require('./routes/photoRouter');
const globalErrorHandler = require('./controllers/errorController');

const app = express();

app.use(fileUpload());
app.use(helmet());

app.use(morgan('dev'));

app.use(cors({
  origin: 'http://localhost:5500',
  methods: '*',
}));

app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
  req.body.requestTime = new Date().toISOString();
  next();
});

app.use('/api/v1/photos', photoRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
