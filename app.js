const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');
const blogRoutes = require('./routes/blogRoutes');
const axios = require('axios').default;
const { response } = require('express');
const trivia = require('./trivia');

// express app
const app = express();

// db
const dbURI = 'mongodb+srv://YasminaBarakat:yasminaomar1990@FullstackTask1.82cnx.mongodb.net/FullStackTask1?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true, UseUnifiedTopology: true})
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err)
);

// register view engine
app.set('view engine', 'ejs');

//public folder made public
app.use(express.static('public'));
app.use(morgan('dev'));

app.use(trivia) ;

//middleware for encoding to accept form data
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.redirect('/blogs');
  });

app.get('/about', (req,res) => {
    res.render('about', {title: 'About'});
});

app.get('/check_api', (req, res) => {
    res.render('check_api', { title: 'Check API' });
  });

//blog routes from router
app.use('/blogs', blogRoutes);  

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
  });