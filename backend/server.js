const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./router/usersRouter');
const StudentRouter = require('./router/studentsRouter');
const SubjectRouter = require('./router/subjectsRouter');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

const app = express();

// Set up CORS middleware before defining routes
app.use(cors({
  origin: ['http://localhost:3000'], // Allow requests from your frontend's localhost address
  credentials: true,
}));

app.use(express.json());

app.use('/user', router);
app.use('/students', StudentRouter);
app.use('/subjects', SubjectRouter);
app.use(errorHandler);

const PORT = process.env.PORT || 4000;

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
    console.log('MongoDB connected');
  })
  .catch((error) => {
    console.log(error);
  });
