"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");require("dotenv/config");

var _http = _interopRequireDefault(require("http"));


require("./app/config/db");

var _app = _interopRequireDefault(require("./app"));console.log('Hello Node.js project.');console.log(process.env.MY_SECRET);

var IP_ADDRESS = process.env.IP_ADDRESS || '0.0.0.0';
var PORT = process.env.PORT || 7777;

var server = _http["default"].createServer(_app["default"]);

if (process.env.NODE_ENV !== "test") {

  server.listen(PORT, IP_ADDRESS, function (err) {
    if (err)
    console.error("Could not listen ", err);
    return;
  });

  console.log("Server running on ".concat(IP_ADDRESS, ":").concat(PORT));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZXJ2ZXIuanMiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsInByb2Nlc3MiLCJlbnYiLCJNWV9TRUNSRVQiLCJJUF9BRERSRVNTIiwiUE9SVCIsInNlcnZlciIsImh0dHAiLCJjcmVhdGVTZXJ2ZXIiLCJhcHAiLCJOT0RFX0VOViIsImxpc3RlbiIsImVyciIsImVycm9yIl0sIm1hcHBpbmdzIjoia0dBQUE7O0FBRUE7OztBQUdBOztBQUVBLG9EQUpBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx3QkFBWixFQUNBRCxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFNBQXhCOztBQUtBLElBQU1DLFVBQVUsR0FBR0gsT0FBTyxDQUFDQyxHQUFSLENBQVlFLFVBQVosSUFBMEIsU0FBN0M7QUFDQSxJQUFNQyxJQUFJLEdBQUdKLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyxJQUFaLElBQW9CLElBQWpDOztBQUVBLElBQUlDLE1BQU0sR0FBR0MsaUJBQUtDLFlBQUwsQ0FBa0JDLGVBQWxCLENBQWI7O0FBRUEsSUFBSVIsT0FBTyxDQUFDQyxHQUFSLENBQVlRLFFBQVosS0FBeUIsTUFBN0IsRUFBb0M7O0FBRWhDSixFQUFBQSxNQUFNLENBQUNLLE1BQVAsQ0FBY04sSUFBZCxFQUFvQkQsVUFBcEIsRUFBZ0MsVUFBU1EsR0FBVCxFQUFhO0FBQ3pDLFFBQUlBLEdBQUo7QUFDSWIsSUFBQUEsT0FBTyxDQUFDYyxLQUFSLENBQWMsbUJBQWQsRUFBbUNELEdBQW5DO0FBQ0E7QUFDSCxHQUpMOztBQU1BYixFQUFBQSxPQUFPLENBQUNDLEdBQVIsNkJBQWlDSSxVQUFqQyxjQUErQ0MsSUFBL0M7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnZG90ZW52L2NvbmZpZyc7XG5cbmltcG9ydCBodHRwIGZyb20gJ2h0dHAnO1xuY29uc29sZS5sb2coJ0hlbGxvIE5vZGUuanMgcHJvamVjdC4nKTtcbmNvbnNvbGUubG9nKHByb2Nlc3MuZW52Lk1ZX1NFQ1JFVCk7XG5pbXBvcnQgJy4vYXBwL2NvbmZpZy9kYic7XG5cbmltcG9ydCBhcHAgZnJvbSAnLi9hcHAnO1xuXG5jb25zdCBJUF9BRERSRVNTID0gcHJvY2Vzcy5lbnYuSVBfQUREUkVTUyB8fCAnMC4wLjAuMCc7XG5jb25zdCBQT1JUID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA3Nzc3O1xuXG52YXIgc2VydmVyID0gaHR0cC5jcmVhdGVTZXJ2ZXIoYXBwKVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwidGVzdFwiKXtcblxuICAgIHNlcnZlci5saXN0ZW4oUE9SVCwgSVBfQUREUkVTUywgZnVuY3Rpb24oZXJyKXtcbiAgICAgICAgaWYgKGVycilcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDb3VsZCBub3QgbGlzdGVuIFwiLCBlcnIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKGBTZXJ2ZXIgcnVubmluZyBvbiAke0lQX0FERFJFU1N9OiR7UE9SVH1gICk7XG59XG4iXX0=