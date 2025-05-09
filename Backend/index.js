const express = require('express');
require('dotenv').config();
const cors = require('cors');

const mongoose = require('mongoose');
const dbConfig = require('./config/dataconfig');
const jwt = require('jsonwebtoken');

const app = express();


  

const UserRoutes = require('./routes/UserRoutes');
const authRoutes = require('./routes/authRoutes');
const blogRoutes = require('./routes/blogRoutes');
const courseRoutes = require('./routes/courseRoutes');
const clubRoutes = require('./routes/clubRoutes');

app.use(express.json()); // Pour analyser les corps de requête JSON


app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
  });

  app.use(cors({
    origin: 'http://localhost:5000', // l’URL de ton frontend React
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173') });

app.use('/api/auth',  authRoutes);
app.use('/api/users', UserRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/clubs', clubRoutes);




mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {

}).then(() => {
    console.log('Base de données connectée avec succès');

}).catch(err =>{
    console.log('Impossible de se connecter', err);
    process.exit();
    
});

app.get('/', (req, res) => {
    res.send("Connection activée")
});

app.listen(5000, () => {
    console.log("Serveur is listening on http://localhost:5000");
    
});
