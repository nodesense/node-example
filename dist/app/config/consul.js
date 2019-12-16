"use strict";
// var consul = require('consul')();
var Bluebird = require('bluebird');
var CONSUL_HOST = process.env.CONSUL_HOST || 'localhost';
var APP_SERVICE_NAME = process.env.APP_SERVICE_NAME || 'SEARCH-SERVICE';
var IP_ADDRESS = process.env.IP_ADDRESS || '127.0.0.1';
var PORT = +process.env.PORT || 7777;
var CONSUL_ID = require('uuid').v4();

console.log('consul register port ', PORT);

function fromCallback(fn) {
  return new Bluebird(function (resolve, reject) {
    try {
      return fn(function (err, data, res) {
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
  host: CONSUL_HOST });


consul.acl.bootstrap(function (err, result) {
  console.log(err, result);
  // if (err) throw err;
});


consul.agent.members(function (err, result) {
  console.log('memebrs', err, result);
  if (err) throw err;
});



var details = {
  name: APP_SERVICE_NAME, // service group name search or order
  address: IP_ADDRESS,
  port: PORT,
  id: CONSUL_ID,
  check: {
    ttl: '10s',
    deregister_critical_service_after: '1m' } };


consul.agent.service.register(details, function (err) {
  // schedule heartbeat
  console.log("register ", err);
});

setInterval(function () {
  consul.agent.check.pass({ id: "service:".concat(CONSUL_ID) }, function (err) {
    if (err) throw new Error(err);
    console.log('told Consul that we are healthy');
  });
}, 5 * 1000);

process.on('SIGINT', function () {
  console.log('SIGINT. De-Registering...');
  var details = { id: CONSUL_ID };

  consul.agent.service.deregister(details, function (err) {
    console.log('de-registered.', err);
    process.exit();
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29uZmlnL2NvbnN1bC5qcyJdLCJuYW1lcyI6WyJCbHVlYmlyZCIsInJlcXVpcmUiLCJDT05TVUxfSE9TVCIsInByb2Nlc3MiLCJlbnYiLCJBUFBfU0VSVklDRV9OQU1FIiwiSVBfQUREUkVTUyIsIlBPUlQiLCJDT05TVUxfSUQiLCJ2NCIsImNvbnNvbGUiLCJsb2ciLCJmcm9tQ2FsbGJhY2siLCJmbiIsInJlc29sdmUiLCJyZWplY3QiLCJlcnIiLCJkYXRhIiwicmVzIiwiY29uc3VsIiwicHJvbWlzaWZ5IiwiaG9zdCIsImFjbCIsImJvb3RzdHJhcCIsInJlc3VsdCIsImFnZW50IiwibWVtYmVycyIsImRldGFpbHMiLCJuYW1lIiwiYWRkcmVzcyIsInBvcnQiLCJpZCIsImNoZWNrIiwidHRsIiwiZGVyZWdpc3Rlcl9jcml0aWNhbF9zZXJ2aWNlX2FmdGVyIiwic2VydmljZSIsInJlZ2lzdGVyIiwic2V0SW50ZXJ2YWwiLCJwYXNzIiwiRXJyb3IiLCJvbiIsImRlcmVnaXN0ZXIiLCJleGl0Il0sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQSxJQUFJQSxRQUFRLEdBQUdDLE9BQU8sQ0FBQyxVQUFELENBQXRCO0FBQ0EsSUFBTUMsV0FBVyxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsV0FBWixJQUEyQixXQUEvQztBQUNBLElBQU1HLGdCQUFnQixHQUFHRixPQUFPLENBQUNDLEdBQVIsQ0FBWUMsZ0JBQVosSUFBZ0MsZ0JBQXpEO0FBQ0EsSUFBTUMsVUFBVSxHQUFHSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUUsVUFBWixJQUEwQixXQUE3QztBQUNBLElBQU1DLElBQUksR0FBRyxDQUFDSixPQUFPLENBQUNDLEdBQVIsQ0FBWUcsSUFBYixJQUFxQixJQUFsQztBQUNBLElBQU1DLFNBQVMsR0FBR1AsT0FBTyxDQUFDLE1BQUQsQ0FBUCxDQUFnQlEsRUFBaEIsRUFBbEI7O0FBRUFDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaLEVB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QUNBYixJQUFBQSxPQUFPLENBQUN1QyxJQUFSO0FBQ0QsR0FIRDtBQUlELENBUkQiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIHZhciBjb25zdWwgPSByZXF1aXJlKCdjb25zdWwnKSgpO1xudmFyIEJsdWViaXJkID0gcmVxdWlyZSgnYmx1ZWJpcmQnKTtcbmNvbnN0IENPTlNVTF9IT1NUID0gcHJvY2Vzcy5lbnYuQ09OU1VMX0hPU1QgfHwgJ2xvY2FsaG9zdCc7XG5jb25zdCBBUFBfU0VSVklDRV9OQU1FID0gcHJvY2Vzcy5lbnYuQVBQX1NFUlZJQ0VfTkFNRSB8fCAnU0VBUkNILVNFUlZJQ0UnO1xuY29uc3QgSVBfQUREUkVTUyA9IHByb2Nlc3MuZW52LklQX0FERFJFU1MgfHwgJzEyNy4wLjAuMSdcbmNvbnN0IFBPUlQgPSArcHJvY2Vzcy5lbnYuUE9SVCB8fCA3Nzc3O1xuY29uc3QgQ09OU1VMX0lEID0gcmVxdWlyZSgndXVpZCcpLnY0KCk7XG5cbmNvbnNvbGUubG9nKCdjb25zdWwgcmVnaXN0ZXIgcG9ydCAnLCBQT1JUKTtcblxuZnVuY3Rpb24gZnJvbUNhbGxiYWNrKGZuKSB7XG4gICAgcmV0dXJuIG5ldyBCbHVlYmlyZChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBmbihmdW5jdGlvbihlcnIsIGRhdGEsIHJlcykge1xuICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIGVyci5yZXMgPSByZXM7XG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXNvbHZlKFtkYXRhLCByZXNdKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG52YXIgY29uc3VsID0gcmVxdWlyZSgnY29uc3VsJykoeyBwcm9taXNpZnk6IGZyb21DYWxsYmFjayxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvc3Q6IENPTlNVTF9IT1NUIH0pO1xuXG5cbmNvbnN1bC5hY2wuYm9vdHN0cmFwKGZ1bmN0aW9uKGVyciwgcmVzdWx0KSB7XG4gICAgY29uc29sZS5sb2coZXJyLCByZXN1bHQpXG4gICAgLy8gaWYgKGVycikgdGhyb3cgZXJyO1xuICB9KTtcblxuXG4gIGNvbnN1bC5hZ2VudC5tZW1iZXJzKGZ1bmN0aW9uKGVyciwgcmVzdWx0KSB7XG4gICAgY29uc29sZS5sb2coJ21lbWVicnMnLCBlcnIsIHJlc3VsdClcbiAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XG4gIH0pO1xuXG5cblxuICBsZXQgZGV0YWlscyA9IHtcbiAgICBuYW1lOiBBUFBfU0VSVklDRV9OQU1FLCAvLyBzZXJ2aWNlIGdyb3VwIG5hbWUgc2VhcmNoIG9yIG9yZGVyXG4gICAgYWRkcmVzczogSVBfQUREUkVTUyxcbiAgICBwb3J0OiBQT1JULFxuICAgIGlkOiBDT05TVUxfSUQsXG4gICAgY2hlY2s6IHtcbiAgICAgIHR0bDogJzEwcycsXG4gICAgICBkZXJlZ2lzdGVyX2NyaXRpY2FsX3NlcnZpY2VfYWZ0ZXI6ICcxbSdcbiAgICB9XG4gIH07XG4gIGNvbnN1bC5hZ2VudC5zZXJ2aWNlLnJlZ2lzdGVyKGRldGFpbHMsIGVyciA9PiB7XG4gICAgLy8gc2NoZWR1bGUgaGVhcnRiZWF0XG4gICAgY29uc29sZS5sb2coXCJyZWdpc3RlciBcIiwgZXJyKVxuICB9KTsgXG4gIFxuICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBjb25zdWwuYWdlbnQuY2hlY2sucGFzcyh7aWQ6YHNlcnZpY2U6JHtDT05TVUxfSUR9YH0sIGVyciA9PiB7XG4gICAgICAgIGlmIChlcnIpIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICBjb25zb2xlLmxvZygndG9sZCBDb25zdWwgdGhhdCB3ZSBhcmUgaGVhbHRoeScpO1xuICAgICAgfSk7XG4gICAgfSwgNSAqIDEwMDApO1xuICBcbiAgICBwcm9jZXNzLm9uKCdTSUdJTlQnLCAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnU0lHSU5ULiBEZS1SZWdpc3RlcmluZy4uLicpO1xuICAgICAgbGV0IGRldGFpbHMgPSB7aWQ6IENPTlNVTF9JRH07XG4gICAgXG4gICAgICBjb25zdWwuYWdlbnQuc2VydmljZS5kZXJlZ2lzdGVyKGRldGFpbHMsIChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2RlLXJlZ2lzdGVyZWQuJywgZXJyKTtcbiAgICAgICAgcHJvY2Vzcy5leGl0KCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgXG4gICAgIl19