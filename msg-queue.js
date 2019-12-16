var q = 'tasks';
 
// AMQP PORT 5672

var open = require('amqplib').connect('amqp://localhost');
 
// Publisher
open.then(function(conn) {
  return conn.createChannel();
}).then(function(ch) {
  return ch.assertQueue(q).then(function(ok) {

    setInterval( () => {
        ch.sendToQueue(q, Buffer.from('something to do ' + Math.random()));
    }, 5000)

    return ch.sendToQueue(q, Buffer.from('something to do'));

  });
}).catch(console.warn);
 
// Consumer
open.then(function(conn) {
  return conn.createChannel();
}).then(function(ch) {
  return ch.assertQueue(q).then(function(ok) {
    return ch.consume(q, function(msg) {
      if (msg !== null) {
        console.log(msg.content.toString());
        ch.ack(msg);
      }
    });
  });
}).catch(console.warn); 