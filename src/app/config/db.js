import config from './index';

var mongoose = require('mongoose');
mongoose.connect(config.MongoUrl, {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected');
});

