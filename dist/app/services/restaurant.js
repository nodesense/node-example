"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.updateRestaurant = updateRestaurant;exports.deleteRestaurant = deleteRestaurant;exports.getRestaurants = exports.getRestaurant = exports.createRestaurant = void 0;var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));var _restaurant = _interopRequireDefault(require("../models/restaurant"));

var createRestaurant = function createRestaurant(restaurantData) {var restaurant, savedRestaurant;return _regenerator["default"].async(function createRestaurant$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.prev = 0;

          console.log('service createRestaurant ', restaurantData);
          restaurant = new _restaurant["default"](restaurantData);_context.next = 5;return _regenerator["default"].awrap(
          restaurant.save());case 5:savedRestaurant = _context.sent;
          console.log('saved ', savedRestaurant);return _context.abrupt("return",
          savedRestaurant);case 10:_context.prev = 10;_context.t0 = _context["catch"](0);


          //FIXME: winston
          console.log('error ', _context.t0);throw _context.t0;case 14:case "end":return _context.stop();}}}, null, null, [[0, 10]]);};exports.createRestaurant = createRestaurant;





var getRestaurant = function getRestaurant(id) {var restaurant;return _regenerator["default"].async(function getRestaurant$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.prev = 0;

          console.log('service getRestaurant ', id);_context2.next = 4;return _regenerator["default"].awrap(
          _restaurant["default"].findById(id));case 4:restaurant = _context2.sent;
          console.log('**restaurant ', restaurant);return _context2.abrupt("return",
          restaurant);case 9:_context2.prev = 9;_context2.t0 = _context2["catch"](0);


          //FIXME: winston
          console.log('error ', _context2.t0);throw _context2.t0;case 13:case "end":return _context2.stop();}}}, null, null, [[0, 9]]);};exports.getRestaurant = getRestaurant;





var getRestaurants = function getRestaurants(params, query) {var limit, skip, restaurants;return _regenerator["default"].async(function getRestaurants$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.prev = 0;

          limit = params && params.limit || query && query.limit || 50;
          skip = params && params.skip || query && query.skip || 0;
          console.log('service getRestaurants ', limit, skip);_context3.next = 6;return _regenerator["default"].awrap(
          _restaurant["default"].find({}, null, { limit: limit, skip: skip }));case 6:restaurants = _context3.sent;
          console.log('restaurants ', restaurants);return _context3.abrupt("return",
          restaurants);case 11:_context3.prev = 11;_context3.t0 = _context3["catch"](0);


          //FIXME: winston
          console.log('error ', _context3.t0);throw _context3.t0;case 15:case "end":return _context3.stop();}}}, null, null, [[0, 11]]);};exports.getRestaurants = getRestaurants;




function updateRestaurant(restaurant) {
}

function deleteRestaurant(id) {
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvc2VydmljZXMvcmVzdGF1cmFudC5qcyJdLCJuYW1lcyI6WyJjcmVhdGVSZXN0YXVyYW50IiwicmVzdGF1cmFudERhdGEiLCJjb25zb2xlIiwibG9nIiwicmVzdGF1cmFudCIsIlJlc3RhdXJhbnQiLCJzYXZlIiwic2F2ZWRSZXN0YXVyYW50IiwiZ2V0UmVzdGF1cmFudCIsImlkIiwiZmluZEJ5SWQiLCJnZXRSZXN0YXVyYW50cyIsInBhcmFtcyIsInF1ZXJ5IiwibGltaXQiLCJza2lwIiwiZmluZCIsInJlc3RhdXJhbnRzIiwidXBkYXRlUmVzdGF1cmFudCIsImRlbGV0ZVJlc3RhdXJhbnQiXSwibWFwcGluZ3MiOiI0WkFBQTs7QUFFTyxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQU9DLGNBQVA7O0FBRTVCQyxVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSwyQkFBWixFQUF5Q0YsY0FBekM7QUFDTUcsVUFBQUEsVUFIc0IsR0FHVCxJQUFJQyxzQkFBSixDQUFlSixjQUFmLENBSFM7QUFJRUcsVUFBQUEsVUFBVSxDQUFDRSxJQUFYLEVBSkYsU0FJdEJDLGVBSnNCO0FBSzVCTCxVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCSSxlQUF0QixFQUw0QjtBQU1yQkEsVUFBQUEsZUFOcUI7OztBQVN4QjtBQUNBTCxVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLGVBVndCLHlGQUF6QixDOzs7Ozs7QUFnQkEsSUFBTUssYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFPQyxFQUFQOztBQUVyQlAsVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksd0JBQVosRUFBc0NNLEVBQXRDLEVBRnFCO0FBR0tKLGlDQUFXSyxRQUFYLENBQW9CRCxFQUFwQixDQUhMLFNBR2ZMLFVBSGU7QUFJcEJGLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVosRUFBNkJDLFVBQTdCLEVBSm9CO0FBS2RBLFVBQUFBLFVBTGM7OztBQVFqQjtBQUNBRixVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLGdCQVRpQiwwRkFBdEIsQzs7Ozs7O0FBZUEsSUFBTVEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFPQyxNQUFQLEVBQWVDLEtBQWY7O0FBRWhCQyxVQUFBQSxLQUZnQixHQUVQRixNQUFNLElBQUlBLE1BQU0sQ0FBQ0UsS0FBbEIsSUFBNkJELEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUE1QyxJQUFzRCxFQUY5QztBQUdoQkMsVUFBQUEsSUFIZ0IsR0FHUkgsTUFBTSxJQUFJQSxNQUFNLENBQUNHLElBQWxCLElBQTRCRixLQUFLLElBQUlBLEtBQUssQ0FBQ0UsSUFBM0MsSUFBb0QsQ0FIM0M7QUFJdEJiLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHlCQUFaLEVBQXVDVyxLQUF2QyxFQUE4Q0MsSUFBOUMsRUFKc0I7QUFLS1YsaUNBQVdXLElBQVgsQ0FBZ0IsRUFBaEIsRUFBbUIsSUFBbkIsRUFBd0IsRUFBQ0YsS0FBSyxFQUFMQSxLQUFELEVBQU9DLElBQUksRUFBSkEsSUFBUCxFQUF4QixDQUxMLFNBS2hCRSxXQUxnQjtBQU1yQmYsVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWixFQUE0QmMsV0FBNUIsRUFOcUI7QUFPZkEsVUFBQUEsV0FQZTs7O0FBVWxCO0FBQ0FmLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosZ0JBWGtCLDJGQUF2QixDOzs7OztBQWdCQSxTQUFTZSxnQkFBVCxDQUEwQmQsVUFBMUIsRUFBc0M7QUFDNUM7O0FBRU0sU0FBU2UsZ0JBQVQsQ0FBMEJWLEVBQTFCLEVBQThCO0FBQ3BDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlc3RhdXJhbnQgZnJvbSAnLi4vbW9kZWxzL3Jlc3RhdXJhbnQnO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlUmVzdGF1cmFudCA9IGFzeW5jIChyZXN0YXVyYW50RGF0YSkgPT4ge1xuICAgIHRyeSB7XG4gICAgY29uc29sZS5sb2coJ3NlcnZpY2UgY3JlYXRlUmVzdGF1cmFudCAnLCByZXN0YXVyYW50RGF0YSlcbiAgICBjb25zdCByZXN0YXVyYW50ID0gbmV3IFJlc3RhdXJhbnQocmVzdGF1cmFudERhdGEpO1xuICAgIGNvbnN0IHNhdmVkUmVzdGF1cmFudCA9IGF3YWl0IHJlc3RhdXJhbnQuc2F2ZSgpO1xuICAgIGNvbnNvbGUubG9nKCdzYXZlZCAnLCBzYXZlZFJlc3RhdXJhbnQpO1xuICAgIHJldHVybiBzYXZlZFJlc3RhdXJhbnQ7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAvL0ZJWE1FOiB3aW5zdG9uXG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciAnLCBlcnJvcik7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbn1cblxuXG5leHBvcnQgY29uc3QgZ2V0UmVzdGF1cmFudCA9IGFzeW5jIChpZCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzZXJ2aWNlIGdldFJlc3RhdXJhbnQgJywgaWQpXG4gICAgICAgIGNvbnN0IHJlc3RhdXJhbnQgPSAgYXdhaXQgUmVzdGF1cmFudC5maW5kQnlJZChpZCk7XG4gICAgICAgICBjb25zb2xlLmxvZygnKipyZXN0YXVyYW50ICcsIHJlc3RhdXJhbnQpO1xuICAgICAgICByZXR1cm4gcmVzdGF1cmFudDtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIC8vRklYTUU6IHdpbnN0b25cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciAnLCBlcnJvcik7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxufVxuXG5cbmV4cG9ydCBjb25zdCBnZXRSZXN0YXVyYW50cyA9IGFzeW5jIChwYXJhbXMsIHF1ZXJ5KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgbGltaXQgPSAocGFyYW1zICYmIHBhcmFtcy5saW1pdCkgfHwgKHF1ZXJ5ICYmIHF1ZXJ5LmxpbWl0KSB8fCA1MDtcbiAgICAgICAgY29uc3Qgc2tpcCA9IChwYXJhbXMgJiYgcGFyYW1zLnNraXApIHx8IChxdWVyeSAmJiBxdWVyeS5za2lwKSB8fCAwO1xuICAgICAgICBjb25zb2xlLmxvZygnc2VydmljZSBnZXRSZXN0YXVyYW50cyAnLCBsaW1pdCwgc2tpcClcbiAgICAgICAgY29uc3QgcmVzdGF1cmFudHMgPSAgYXdhaXQgUmVzdGF1cmFudC5maW5kKHt9LG51bGwse2xpbWl0LHNraXB9KTtcbiAgICAgICAgIGNvbnNvbGUubG9nKCdyZXN0YXVyYW50cyAnLCByZXN0YXVyYW50cyk7XG4gICAgICAgIHJldHVybiByZXN0YXVyYW50cztcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIC8vRklYTUU6IHdpbnN0b25cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciAnLCBlcnJvcik7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUmVzdGF1cmFudChyZXN0YXVyYW50KSB7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVSZXN0YXVyYW50KGlkKSB7XG59XG5cbiJdfQ==