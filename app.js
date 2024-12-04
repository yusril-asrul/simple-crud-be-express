const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config');
const Book = require('./models/book');
const bookRoutes = require('./routes/bookRoutes');
const cors = require('cors')

const app = express();
const PORT = 3001;


// Izinkan semua origin (atau tentukan origin tertentu jika perlu)
app.use(cors({
  origin: 'http://localhost:3000', // Ganti dengan URL frontend Anda
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Batasi metode jika diperlukan
  credentials: true // Izinkan cookie jika diperlukan
}));

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/books', bookRoutes);

// Sinkronisasi database dan mulai server
sequelize.sync({ force: false }) // Set `true` untuk reset database saat pengembangan
  .then(() => {
    console.log('Database synced successfully.');
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  })
  .catch((error) => console.error('Unable to sync database:', error));
