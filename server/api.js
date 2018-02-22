/**
 * Created by Tomi on 2018-02-22.
 */


const express = require('express');
const fs= require('fs');
var cities = require('./cities.json');
var companies = require('./companies.json');
var schedule = require('./schedule.json');
const app = express();
var cors = require('cors');

app.use(cors());
app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));

app.get('/:tableName', (req,res)=>{
    //var table = require(`./${req.params.tableName}.json`);
    var table1= fs.readFile(`./server/${req.params.tableName}.json`, (err, data)=>{
        console.log(err);
        if(err) {
            res.sendStatus(404);
        }

        res.send(data);
    });
});

// app.get('/cities', (req,res)=>{
//     res.send(cities);
// });
//
// app.get('/companies', (req,res)=>{
//         res.send(companies);
// });
//
// app.get('/schedule', (req,res)=>{
//         res.send(schedule);
// })
