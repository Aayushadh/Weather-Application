const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const forecast = require('./forecast');

const pubDir = path.join(__dirname, "../public/");
const viewsPath = path.join(__dirname, "../templates/views");
const hbsPath = path.join(__dirname, "../templates/partials");

app.use(express.static(pubDir));

app.set('view engine', 'hbs');
app.set('views', viewsPath);

hbs.registerPartials(hbsPath)

app.get('', (req, res) => {

    res.render('index', {
        title: "Weather",
        content: "Application to find weather"
    });
})
app.get('/about', (req, res) => {

    res.render('about', {
        title: "About",
        content: "I'm a Software Engineer"
    });
})
app.get('/help', (req, res) => {

    res.render('help', {
        title: "Help",
        content: "We are happy to help"
    });
})
app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: "Provide an address"
        });
    }
    forecast.getWeatherdata(req.query.address, (error, response) => {
        if (error) {
            return res.send(error);

        } else {
            return res.send(response.body)
        }

    });



});

app.get('/help/*', (req, res) => {

    res.render('404Error', {
        title: "Helo Not Found",
        content: "Help article Not found"
    })
});

app.get('*', (req, res) => {
    res.render('404Error', {
        title: "404 Not Found",
        content: "404 Page Not Found"
    })
});

app.listen(3000);