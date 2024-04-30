const { PrismaClient } = require ('@prisma/client');
const prisma = new PrismaClient();
const showbaner = require('node-banner');
console.log('kadapi pundai andi');
const net = require('net');
const http = require('http');
const express = require('express');
const { Socket } = require('dgram');
require('dotenv').config();

const app = express();
const host= process.env.HOST;
const sport=process.env.SOCKET_PORT;
const webport =process.env.WEB_PORT;
console.log(host);
(()=>{
    showbaner('KADAPI  &  Harish MONITORING',`Kadapis student monitoing system runing in ${host} web port is ${webport} and socket port is ${sport}`);
})();
const socketsrver=net.createServer(Socket =>{
console.log(Socket);
    Socket.on('data',data=>{
    console.log(data.toString());
    });
    Socket.on('end',()=>{
        console.log('connection lost');
    });
    Socket.write('hellow from server');

});
socketsrver.listen()