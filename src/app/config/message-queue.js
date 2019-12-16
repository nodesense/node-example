var QUEUE_NAME = 'orders/gk';
 
// AMQP PORT 5672

// amqp://user:pass@host.com/vhost
// amqp://localhost

// amqp://mindtree:mindtree@mt.nodesense.ai

var open = require('amqplib')
      .connect('amqp://test:test@mt.nodesense.ai');
 
// Publisher
let channel = null;

open.then(function(conn) {
  return conn.createChannel();
}).then(function(ch) {
  return ch.assertQueue(QUEUE_NAME).then(function(ok) {
    console.log('queue ready');
    channel = ch;

    return ch;
  });
})
.catch(console.warn);

module.exports = function sendToQueue ( msg) {
  console.log('sending to rabbitmq')
  if (channel) {
    channel.sendToQueue(QUEUE_NAME, Buffer.from(JSON.stringify(msg)));
  }
}