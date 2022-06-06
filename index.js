const express = require('express');
const app = express();
const cors = require("cors");
const pool = require('./db');

const port = process.env.PORT || 5000 ;

// Middleware 
app.use(cors());
app.use(express.json());


// Routes 

// Get all from Table 1 
app.get('/table1', async(req, res) => {
    try{
        const allData = await pool.query("SELECT * FROM table_1");
        res.json(allData.rows);
    }
    catch(err){
        console.error(err.message);
    }
});


// Get all from Table 2 
app.get('/table2', async(req, res) => {
    try{
        const allData = await pool.query("SELECT * FROM table_2");
        res.json(allData.rows);
    }
    catch(err){
        console.error(err.message);
    }
});


// Get all from Table 5 
app.get('/table5', async(req, res) => {
    try{
        const allData = await pool.query("SELECT * FROM table_5");
        res.json(allData.rows);
    }
    catch(err){
        console.error(err.message);
    }
});


// Get all from Table 6
app.get('/table6', async(req, res) => {
    try{
        const allData = await pool.query("SELECT * FROM table_6");
        res.json(allData.rows);
    }
    catch(err){
        console.error(err.message);
    }
});


// Get all from Table 7 
app.get('/table7', async(req, res) => {
    try{
        const allData = await pool.query("SELECT * FROM table_7");
        res.json(allData.rows);
    }
    catch(err){
        console.error(err.message);
    }
});



// Get all from Table 8
app.get('/table8', async(req, res) => {
    try{
        const allData = await pool.query("SELECT * FROM table_8");
        res.json(allData.rows);
    }
    catch(err){
        console.error(err.message);
    }
})

// Get all from Table 9
app.get('/table9', async(req, res) => {
    try{
        const allData = await pool.query("SELECT * FROM table_9");
        res.json(allData.rows);
    }
    catch(err){
        console.error(err.message);
    }
})


app.listen(port, ()=>{
    console.log('Server Is Running at Port', port);
})