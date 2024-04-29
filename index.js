console.log('kadapi pundai andi')
// const { Model } = require('objection');
// const kad = require('knex');
// const mysql = require('mysql');
const kadapi = require('net');
const http = require('http');
const express = require('express');

// var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "rav113880",
//     database: "kadapi"
//   });

const DEV="A01";
const app = express();
const port1 = 3000;

const studentData = {
    student_id: 123,
    student_name: 'John Doe',
    contact_no: '1234567890',
    dob: '1990-01-01',
    fingerprint_data: '...'
  };



const harish =  kadapi.createServer(socket =>{
    console.log('kadapifu  creates');
    socket.on('data',data =>{
    });

});
const port = 9000;
harish.listen(port,()=>{
    console.log(`dai punda mane ${port}`);
});
server.listen(port1, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });