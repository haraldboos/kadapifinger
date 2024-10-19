console.log('kadapi pundai andi')
// const { Model } = require('objection');
// const kad = require('knex');
//ok baby
const mysql = require('mysql');
const kadapi = require('net');
const http = require('http');
const express = require('express');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rav113880",
    database: "kadapi"
  });

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

app.use(express.json());
const server = http.createServer(app);
app.post('/api/data', (req, res) => {
    const sensorValue = req.body

    console.log(sensorValue)
    const omm = "insert into students (student_id,student_name,contact_no,dob,fingerprint_data) values (?,?,?,?)";
    
    const values = [studentData.student_id, studentData.student_name, studentData.contact_no, studentData.dob, studentData.fingerprint_data];
    con.query(omm, values, (err, result) => {
        if (err){
            console.error(err);
            
        }
    });
    con.commit()

});
// const bodyParser = require('body-parser');
// const kal =  kad({
//     client:'sqlite3',
//     useNullAsDefault:true,
//     connection:{
//         filename:'kadapi.db'
//     }

// });



//   connectiontest
//   con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//   });


const harish =  kadapi.createServer(socket =>{
    console.log('kadapifu  creates');
    socket.on('data',data =>{
        if(data){
        const fingesql = "select student_id where fingerprint_data = ?"
        let fval = data
        con.query(fingesql,fval,(err,res)=>{
                if (err){
                    console.err(err);
                }
                sqlsktup="insert into sstulatetu(stuid) values (?)";
                con.query(sqlsktup,val,(err,res)=>{
                if (err){
                console.err(err);
            }
        
        
        });
            
            });
        
        console.log(data);
        }
        console.log('data recived :',data.toString());
        
    });

});
const port = 9000;
harish.listen(port,()=>{
    console.log(`dai punda mane ${port}`);
});
server.listen(port1, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });