
// var consul = require('consul')();
var Bluebird = require('bluebird');

function fromCallback(fn) {
    return new Bluebird(function(resolve, reject) {
      try {
        return fn(function(err, data, res) {
          if (err) {
            err.res = res;
            return reject(err);
          }
          return resolve([data, res]);
        });
      } catch (err) {
        return reject(err);
      }
    });
  }
var consul = require('consul')({ promisify: fromCallback,
                                 host: '127.0.0.1' });


consul.acl.bootstrap(function(err, result) {
    console.log(err, result)
    // if (err) throw err;
  });


  consul.agent.members(function(err, result) {
    console.log('memebrs', err, result)
    if (err) throw err;
  });


 
let known_search_instances = [];

const watcher = consul.watch({
  method: consul.health.service,
  options: {
    service: 'SEARCH-SERVICE',
    passing: true
  }
});

watcher.on('change', data => {
    known_search_instances = [];
  data.forEach(entry => {
    known_search_instances.push(`http://${entry.Service.Address}:${entry.Service.Port}/`);
  });

  console.log("Available search services ", known_search_instances);
});

module.exports = function getSearchUrl() {
    const index = Math.floor(known_search_instances.length * Math.random());
    const nextUrl = known_search_instances[index];
    console.log('getSearchUrl ', nextUrl);
    return    nextUrl;
}
 
