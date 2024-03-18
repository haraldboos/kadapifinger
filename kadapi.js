console.log('kadapi pundai andi')
const kadapi = require('net');
const harish =  kadapi.createServer(socket =>{
    console.log('kadapifu  creates');
    socket.on('data',data =>{
        console.log('data recived :',data.toString());
    });

});
const port = 9000;
harish.listen(port,()=>{
    console.log('dai punda mane ${port}');
});