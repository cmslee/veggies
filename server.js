require('dotenv').config();

const express = require('express');
const mongoose = require ('mongoose');

//call data
const Veggie = require('./models/Vegetable');
const veggies = require('./models/veggies');

const app = express();
const PORT = 3000;

//* === config ===

app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

//* === middleware ===
app.use((req, res, next) => {
    console.log(req.url)
    next()
})

app.use(express.urlencoded({extended: false}));

//* === routes ===

//home
app.get('/', (req, res) => {
    res.send(`
        <h1>Hello, veggies.</h1> 
        <a href="/vegetables">click to start</a>
    `)
})

//Index Route (return list)
app.get('/vegetables', (req, res) => {
    Veggie.find({}, (error, allVeggies) => {
        res.render('vegetables/Index', {veggies: allVeggies})
    })
})

//Post (this is tied to the form...)
//? This shares the same endpoint as Index route??? Oh...bc that's where the inputs will be taken in and displayed as part of list.
app.post('/vegetables', (req, res) => {
    console.log(req.body);
    Veggie.create(req.body, (error, createdFruit) =>{
        res.redirect('/vegetables')
    });
});

//New Route (the form)
app.get('/vegetables/new', (req, res) => {
    res.render('vegetables/New')
})

//Show Route
app.get('/vegetables/:id', (req, res) => {
    Veggie.findById(req.params.id, (error, foundVeggies) => {
        res.render('vegetables/Show', {veggie: foundVeggies})
    });
});

//Wildcard route
app.get('*', (req, res) => {
    res.render('404')
})

//* === PORT ===

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}...`);
    mongoose.set('strictQuery', true)
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    mongoose.connection.once('open', () => {
        console.log('Connected to MongoDB!')
    })
})