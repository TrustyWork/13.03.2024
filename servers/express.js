import path from 'node:path';
import createError from 'http-errors';
import express from 'express';
import logger from 'morgan';

import mainRouter from '../routes/main.js';
import apiRouter from '../routes/api.js';
import adminRouter from '../routes/admin.js';

const serv = express();

// view engine setup
serv.set('views', path.join(process.cwd(), './views'));
serv.set('view engine', 'ejs');

serv.use(logger('dev'));
serv.use(express.json());
serv.use(express.urlencoded({ extended: false }));
serv.use(express.static(path.join(process.cwd(), 'public')));

serv.use('/', mainRouter);
serv.use('/api', apiRouter);
serv.use('/admin', adminRouter);

// catch 404 and forward to error handler
serv.use(function(req, res, next) {
  next(createError(404));
});

// error handler
serv.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.serv.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default serv;
