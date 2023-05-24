const amqp = require('amqplib')

consume()
async function consume(){
    try{
        const amqpServer = "amqps://ffurugzq:kCckdk4AMU16w0Lf7FaIdo6BBzuiQjiF@puffin.rmq2.cloudamqp.com/ffurugzq"
        const connection = await amqp.connect(amqpServer);
        const channel = await connection.createChannel()
        await channel.assertQueue("jobs");
    
    await channel.consume("jobs",async(msg)=>{
        const recieved_msg = await JSON.parse(msg.content.toString());
        console.log(`Job ${recieved_msg.number} recieved`)
     })

     console.log("Waiting for messages...")
   
        
    }catch(err){
    console.log(err)
    }
};