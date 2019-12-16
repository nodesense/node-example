var q = 'tasks/gk';
 
// AMQP PORT 5672

// amqp://user:pass@host.com/vhost
// amqp://localhost

// amqp://mindtree:mindtree@mt.nodesense.ai

var open = require('amqplib')
      .connect('amqp://test:test@mt.nodesense.ai');
 
// Publisher
open.then(function(conn) {
  return conn.createChannel();
}).then(function(ch) {
  return ch.assertQueue(q).then(function(ok) {

    setInterval( () => {
        const payload = {
          orderId: Math.ceil(Math.random() * 100000),
          restaurantId: `${Math.ceil(Math.random() * 100000)}`,
          orderTime: '2019-12-14:T15:20:10',
          amount: Math.ceil(Math.random() * 1000),
          items: [{}],
          customerId: Math.ceil(Math.random() * 100000),
          to: 'email@exmaple.com'
        }
        console.log('order is ', payload)
        ch.sendToQueue(q, Buffer.from(JSON.stringify(payload)));
    }, 5000)

    return ch.sendToQueue(q, Buffer.from('something to do'));

  });
}).catch(console.warn);
 