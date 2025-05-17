const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const db = require('./config/db'); 

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.send('Hello Mini-Learner. Code, Learn, Play the Minimind Way!!!');
});

app.use('/api/institutions', require('./routes/institutionRoutes'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
