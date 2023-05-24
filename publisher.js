const amqp = require('amqplib')


const msg = {number: process.argv[2]}
connect()
async function connect(){
    try{
        const amqpServer = "amqps://ffurugzq:kCckdk4AMU16w0Lf7FaIdo6BBzuiQjiF@puffin.rmq2.cloudamqp.com/ffurugzq"
        const connection = await amqp.connect(amqpServer);
        const channel = await connection.createChannel("jobs")
        await channel.assertQueue("jobs");
    
        await channel.sendToQueue("jobs", Buffer.from(JSON.stringify(msg)))
        console.log(`Job sent successfully ${msg.number}`)
        await channel.close();
        await connection.close()
    
        
    }catch(err){
    console.log(err)
    }
}
