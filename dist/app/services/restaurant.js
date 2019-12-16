"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.updateRestaurant = updateRestaurant;exports.deleteRestaurant = deleteRestaurant;exports.getRestaurants = exports.getRestaurant = exports.createRestaurant = void 0;var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));var _restaurant = _interopRequireDefault(require("../models/restaurant"));
var sendToQueue = require('../config/message-queue');

var createRestaurant = function createRestaurant(restaurantData) {var restaurant, savedRestaurant, msg;return _regenerator["default"].async(function createRestaurant$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.prev = 0;

          console.log('service createRestaurant ', restaurantData);
          restaurant = new _restaurant["default"](restaurantData);_context.next = 5;return _regenerator["default"].awrap(
          restaurant.save());case 5:savedRestaurant = _context.sent;
          console.log('saved ', savedRestaurant);

          msg = {
            id: '12',
            amount: 100 };


          sendToQueue(msg);return _context.abrupt("return",

          savedRestaurant);case 12:_context.prev = 12;_context.t0 = _context["catch"](0);


          //FIXME: winston
          console.log('error ', _context.t0);throw _context.t0;case 16:case "end":return _context.stop();}}}, null, null, [[0, 12]]);};exports.createRestaurant = createRestaurant;





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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvc2VydmljZXMvcmVzdGF1cmFudC5qcyJdLCJuYW1lcyI6WyJzZW5kVG9RdWV1ZSIsInJlcXVpcmUiLCJjcmVhdGVSZXN0YXVyYW50IiwicmVzdGF1cmFudERhdGEiLCJjb25zb2xlIiwibG9nIiwicmVzdGF1cmFudCIsIlJlc3RhdXJhbnQiLCJzYXZlIiwic2F2ZWRSZXN0YXVyYW50IiwibXNnIiwiaWQiLCJhbW91bnQiLCJnZXRSZXN0YXVyYW50IiwiZmluZEJ5SWQiLCJnZXRSZXN0YXVyYW50cyIsInBhcmFtcyIsInF1ZXJ5IiwibGltaXQiLCJza2lwIiwiZmluZCIsInJlc3RhdXJhbnRzIiwidXBkYXRlUmVzdGF1cmFudCIsImRlbGV0ZVJlc3RhdXJhbnQiXSwibWFwcGluZ3MiOiI0WkFBQTtBQUNBLElBQU1BLFdBQVcsR0FBR0MsT0FBTyxDQUFDLHlCQUFELENBQTNCOztBQUVPLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBT0MsY0FBUDs7QUFFNUJDLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDJCQUFaLEVBQXlDRixjQUF6QztBQUNNRyxVQUFBQSxVQUhzQixHQUdULElBQUlDLHNCQUFKLENBQWVKLGNBQWYsQ0FIUztBQUlFRyxVQUFBQSxVQUFVLENBQUNFLElBQVgsRUFKRixTQUl0QkMsZUFKc0I7QUFLNUJMLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0JJLGVBQXRCOztBQUVNQyxVQUFBQSxHQVBzQixHQU9oQjtBQUNSQyxZQUFBQSxFQUFFLEVBQUUsSUFESTtBQUVSQyxZQUFBQSxNQUFNLEVBQUUsR0FGQSxFQVBnQjs7O0FBWTVCWixVQUFBQSxXQUFXLENBQUNVLEdBQUQsQ0FBWCxDQVo0Qjs7QUFjckJELFVBQUFBLGVBZHFCOzs7QUFpQnhCO0FBQ0FMLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosZUFsQndCLHlGQUF6QixDOzs7Ozs7QUF3QkEsSUFBTVEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFPRixFQUFQOztBQUVyQlAsVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksd0JBQVosRUFBc0NNLEVBQXRDLEVBRnFCO0FBR0tKLGlDQUFXTyxRQUFYLENBQW9CSCxFQUFwQixDQUhMLFNBR2ZMLFVBSGU7QUFJcEJGLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVosRUFBNkJDLFVBQTdCLEVBSm9CO0FBS2RBLFVBQUFBLFVBTGM7OztBQVFqQjtBQUNBRixVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLGdCQVRpQiwwRkFBdEIsQzs7Ozs7O0FBZUEsSUFBTVUsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFPQyxNQUFQLEVBQWVDLEtBQWY7O0FBRWhCQyxVQUFBQSxLQUZnQixHQUVQRixNQUFNLElBQUlBLE1BQU0sQ0FBQ0UsS0FBbEIsSUFBNkJELEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUE1QyxJQUFzRCxFQUY5QztBQUdoQkMsVUFBQUEsSUFIZ0IsR0FHUkgsTUFBTSxJQUFJQSxNQUFNLENBQUNHLElBQWxCLElBQTRCRixLQUFLLElBQUlBLEtBQUssQ0FBQ0UsSUFBM0MsSUFBb0QsQ0FIM0M7QUFJdEJmLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHlCQUFaLEVBQXVDYSxLQUF2QyxFQUE4Q0MsSUFBOUMsRUFKc0I7QUFLS1osaUNBQVdhLElBQVgsQ0FBZ0IsRUFBaEIsRUFBbUIsSUFBbkIsRUFBd0IsRUFBQ0YsS0FBSyxFQUFMQSxLQUFELEVBQU9DLElBQUksRUFBSkEsSUFBUCxFQUF4QixDQUxMLFNBS2hCRSxXQUxnQjtBQU1yQmpCLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosRUFBNEJnQixXQUE1QixFQU5xQjtBQU9mQSxVQUFBQSxXQVBlOzs7QUFVbEI7QUFDQWpCLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosZ0JBWGtCLDJGQUF2QixDOzs7OztBQWdCQSxTQUFTaUIsZ0JBQVQsQ0FBMEJoQixVQUExQixFQUFzQztBQUM1Qzs7QUFFTSxTQUFTaUIsZ0JBQVQsQ0FBMEJaLEVBQTFCLEVBQThCO0FBQ3BDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlc3RhdXJhbnQgZnJvbSAnLi4vbW9kZWxzL3Jlc3RhdXJhbnQnO1xuY29uc3Qgc2VuZFRvUXVldWUgPSByZXF1aXJlKCcuLi9jb25maWcvbWVzc2FnZS1xdWV1ZScpO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlUmVzdGF1cmFudCA9IGFzeW5jIChyZXN0YXVyYW50RGF0YSkgPT4ge1xuICAgIHRyeSB7XG4gICAgY29uc29sZS5sb2coJ3NlcnZpY2UgY3JlYXRlUmVzdGF1cmFudCAnLCByZXN0YXVyYW50RGF0YSlcbiAgICBjb25zdCByZXN0YXVyYW50ID0gbmV3IFJlc3RhdXJhbnQocmVzdGF1cmFudERhdGEpO1xuICAgIGNvbnN0IHNhdmVkUmVzdGF1cmFudCA9IGF3YWl0IHJlc3RhdXJhbnQuc2F2ZSgpO1xuICAgIGNvbnNvbGUubG9nKCdzYXZlZCAnLCBzYXZlZFJlc3RhdXJhbnQpO1xuXG4gICAgY29uc3QgbXNnID0ge1xuICAgICAgICBpZDogJzEyJyxcbiAgICAgICAgYW1vdW50OiAxMDBcbiAgICB9XG5cbiAgICBzZW5kVG9RdWV1ZShtc2cpXG4gICAgXG4gICAgcmV0dXJuIHNhdmVkUmVzdGF1cmFudDtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vRklYTUU6IHdpbnN0b25cbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yICcsIGVycm9yKTtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBjb25zdCBnZXRSZXN0YXVyYW50ID0gYXN5bmMgKGlkKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3NlcnZpY2UgZ2V0UmVzdGF1cmFudCAnLCBpZClcbiAgICAgICAgY29uc3QgcmVzdGF1cmFudCA9ICBhd2FpdCBSZXN0YXVyYW50LmZpbmRCeUlkKGlkKTtcbiAgICAgICAgIGNvbnNvbGUubG9nKCcqKnJlc3RhdXJhbnQgJywgcmVzdGF1cmFudCk7XG4gICAgICAgIHJldHVybiByZXN0YXVyYW50O1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgLy9GSVhNRTogd2luc3RvblxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yICcsIGVycm9yKTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG59XG5cblxuZXhwb3J0IGNvbnN0IGdldFJlc3RhdXJhbnRzID0gYXN5bmMgKHBhcmFtcywgcXVlcnkpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBsaW1pdCA9IChwYXJhbXMgJiYgcGFyYW1zLmxpbWl0KSB8fCAocXVlcnkgJiYgcXVlcnkubGltaXQpIHx8IDUwO1xuICAgICAgICBjb25zdCBza2lwID0gKHBhcmFtcyAmJiBwYXJhbXMuc2tpcCkgfHwgKHF1ZXJ5ICYmIHF1ZXJ5LnNraXApIHx8IDA7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzZXJ2aWNlIGdldFJlc3RhdXJhbnRzICcsIGxpbWl0LCBza2lwKVxuICAgICAgICBjb25zdCByZXN0YXVyYW50cyA9ICBhd2FpdCBSZXN0YXVyYW50LmZpbmQoe30sbnVsbCx7bGltaXQsc2tpcH0pO1xuICAgICAgICAgY29uc29sZS5sb2coJ3Jlc3RhdXJhbnRzICcsIHJlc3RhdXJhbnRzKTtcbiAgICAgICAgcmV0dXJuIHJlc3RhdXJhbnRzO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgLy9GSVhNRTogd2luc3RvblxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yICcsIGVycm9yKTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVSZXN0YXVyYW50KHJlc3RhdXJhbnQpIHtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVJlc3RhdXJhbnQoaWQpIHtcbn1cblxuIl19