var q = 'tasks';
 
// AMQP PORT 5672

// amqp://user:pass@host.com/vhost
// amqp://localhost

// amqp://mindtree:mindtree@mt.nodesense.ai

var open = require('amqplib').connect('amqp://test:test@mt.nodesense.ai');
 
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
 