import express from 'express';
import cors from 'cors';
const app = express();

// CORS
app.use(cors());

// Get acces to req body
app.use(express.json());

// SERVING IMAGES
app.use(express.static('../public'));

// UNHANDLED ROUTES
app.use('/', (req, res, next) => {
  res.status(404).json({
    status: 'fail',
    message: 'No resuorce found!',
  });
});

export default app;
