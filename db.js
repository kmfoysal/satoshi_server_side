
const Pool = require('pg').Pool;

const pool = new Pool ({
    host : process.env.PG_HOST,
    user : process.env.PG_USER,
    port : process.env.PG_PORT,
    password : process.env.PG_PASSWORD,
    database : process.env.DB_NAME
});


module.exports = pool;






// const {Client} = require('pg');

// const client = new Client ({
//     host : '139.59.146.34',
//     user : 'genuser',
//     port : 5432,
//     password : 'LeNnoX_kr=An$c6pFH3FxR-YXh$K5VH_nXfwars',
//     database : 'CoinIndex'
// })

// client.connect();


// client.query(`Select * from table_2`, (err, res) =>{
//     if(!err){
//         console.log(res.rows);
//     }
//     else{
//         console.log(err.message);
//     }

//     client.end;
// })