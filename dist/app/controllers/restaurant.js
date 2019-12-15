"use strict";var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.updateRestaurant = updateRestaurant;exports.deleteRestaurant = deleteRestaurant;exports.getRestaurant = exports.getRestaurants = exports.createRestaurant = void 0;var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));var restaurantService = _interopRequireWildcard(require("../services/restaurant"));

var createRestaurant = function createRestaurant(req, res) {var restaurant;return _regenerator["default"].async(function createRestaurant$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
          console.log('createRestaurant ', req.body);_context.prev = 1;_context.next = 4;return _regenerator["default"].awrap(

          restaurantService.createRestaurant(req.body));case 4:restaurant = _context.sent;return _context.abrupt("return",
          res.json(restaurant));case 8:_context.prev = 8;_context.t0 = _context["catch"](1);

          res.status = 400; // FIXME classification
          res.json({ error: _context.t0 });case 12:case "end":return _context.stop();}}}, null, null, [[1, 8]]);};exports.createRestaurant = createRestaurant;




var getRestaurants = function getRestaurants(req, res) {var restaurants;return _regenerator["default"].async(function getRestaurants$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
          console.log('getRestaurants ', req.params, req.query);_context2.prev = 1;_context2.next = 4;return _regenerator["default"].awrap(

          restaurantService.getRestaurants(req.params, res.query));case 4:restaurants = _context2.sent;return _context2.abrupt("return",

          res.json(restaurants));case 8:_context2.prev = 8;_context2.t0 = _context2["catch"](1);

          res.status = 400; // FIXME classification
          res.json({ error: _context2.t0 });case 12:case "end":return _context2.stop();}}}, null, null, [[1, 8]]);};exports.getRestaurants = getRestaurants;



var getRestaurant = function getRestaurant(req, res) {var restaurant;return _regenerator["default"].async(function getRestaurant$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
          console.log('createRestaurant ', req.body);_context3.prev = 1;_context3.next = 4;return _regenerator["default"].awrap(

          restaurantService.getRestaurant(req.params.id));case 4:restaurant = _context3.sent;if (
          restaurant) {_context3.next = 9;break;}
          res.status = 404;
          res.json({ error: 'not found' });return _context3.abrupt("return");case 9:return _context3.abrupt("return",



          res.json(restaurant));case 12:_context3.prev = 12;_context3.t0 = _context3["catch"](1);

          res.status = 400; // FIXME classification
          res.json({ error: _context3.t0 });case 16:case "end":return _context3.stop();}}}, null, null, [[1, 12]]);};exports.getRestaurant = getRestaurant;




function updateRestaurant(req, res) {
}


function deleteRestaurant(req, res) {
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvY29udHJvbGxlcnMvcmVzdGF1cmFudC5qcyJdLCJuYW1lcyI6WyJjcmVhdGVSZXN0YXVyYW50IiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsImJvZHkiLCJyZXN0YXVyYW50U2VydmljZSIsInJlc3RhdXJhbnQiLCJqc29uIiwic3RhdHVzIiwiZXJyb3IiLCJnZXRSZXN0YXVyYW50cyIsInBhcmFtcyIsInF1ZXJ5IiwicmVzdGF1cmFudHMiLCJnZXRSZXN0YXVyYW50IiwiaWQiLCJ1cGRhdGVSZXN0YXVyYW50IiwiZGVsZXRlUmVzdGF1cmFudCJdLCJtYXBwaW5ncyI6Im1mQUFBOztBQUVPLElBQU9BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBT0MsR0FBUCxFQUFZQyxHQUFaO0FBQzdCQyxVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWixFQUFpQ0gsR0FBRyxDQUFDSSxJQUFyQyxFQUQ2Qjs7QUFHSkMsVUFBQUEsaUJBQWlCLENBQUNOLGdCQUFsQixDQUFtQ0MsR0FBRyxDQUFDSSxJQUF2QyxDQUhJLFNBR3ZCRSxVQUh1QjtBQUl0QkwsVUFBQUEsR0FBRyxDQUFDTSxJQUFKLENBQVNELFVBQVQsQ0FKc0I7O0FBTXpCTCxVQUFBQSxHQUFHLENBQUNPLE1BQUosR0FBYSxHQUFiLENBTnlCLENBTVA7QUFDbEJQLFVBQUFBLEdBQUcsQ0FBQ00sSUFBSixDQUFTLEVBQUNFLEtBQUssYUFBTixFQUFULEVBUHlCLHNFQUExQixDOzs7OztBQVlBLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBT1YsR0FBUCxFQUFZQyxHQUFaO0FBQzFCQyxVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWixFQUErQkgsR0FBRyxDQUFDVyxNQUFuQyxFQUEyQ1gsR0FBRyxDQUFDWSxLQUEvQyxFQUQwQjs7QUFHSVAsVUFBQUEsaUJBQWlCLENBQUNLLGNBQWxCLENBQWlDVixHQUFHLENBQUNXLE1BQXJDLEVBQTZDVixHQUFHLENBQUNXLEtBQWpELENBSEosU0FHaEJDLFdBSGdCOztBQUtmWixVQUFBQSxHQUFHLENBQUNNLElBQUosQ0FBU00sV0FBVCxDQUxlOztBQU90QlosVUFBQUEsR0FBRyxDQUFDTyxNQUFKLEdBQWEsR0FBYixDQVBzQixDQU9KO0FBQ2xCUCxVQUFBQSxHQUFHLENBQUNNLElBQUosQ0FBUyxFQUFDRSxLQUFLLGNBQU4sRUFBVCxFQVJzQix1RUFBdkIsQzs7OztBQVlBLElBQU1LLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBT2QsR0FBUCxFQUFZQyxHQUFaO0FBQ3pCQyxVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWixFQUFpQ0gsR0FBRyxDQUFDSSxJQUFyQyxFQUR5Qjs7QUFHSUMsVUFBQUEsaUJBQWlCLENBQUNTLGFBQWxCLENBQWdDZCxHQUFHLENBQUNXLE1BQUosQ0FBV0ksRUFBM0MsQ0FISixTQUdmVCxVQUhlO0FBSWhCQSxVQUFBQSxVQUpnQjtBQUtqQkwsVUFBQUEsR0FBRyxDQUFDTyxNQUFKLEdBQWEsR0FBYjtBQUNBUCxVQUFBQSxHQUFHLENBQUNNLElBQUosQ0FBUyxFQUFDRSxLQUFLLEVBQUUsV0FBUixFQUFULEVBTmlCOzs7O0FBVWRSLFVBQUFBLEdBQUcsQ0FBQ00sSUFBSixDQUFTRCxVQUFULENBVmM7O0FBWXJCTCxVQUFBQSxHQUFHLENBQUNPLE1BQUosR0FBYSxHQUFiLENBWnFCLENBWUg7QUFDbEJQLFVBQUFBLEdBQUcsQ0FBQ00sSUFBSixDQUFTLEVBQUNFLEtBQUssY0FBTixFQUFULEVBYnFCLHdFQUF0QixDOzs7OztBQWtCQSxTQUFTTyxnQkFBVCxDQUEwQmhCLEdBQTFCLEVBQStCQyxHQUEvQixFQUFvQztBQUMxQzs7O0FBR00sU0FBU2dCLGdCQUFULENBQTBCakIsR0FBMUIsRUFBK0JDLEdBQS9CLEVBQW9DO0FBQzFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcmVzdGF1cmFudFNlcnZpY2UgZnJvbSAnLi4vc2VydmljZXMvcmVzdGF1cmFudCc7XG5cbmV4cG9ydCBjb25zdCAgY3JlYXRlUmVzdGF1cmFudCA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdjcmVhdGVSZXN0YXVyYW50ICcsIHJlcS5ib2R5KVxuICAgIHRyeSB7XG4gICAgY29uc3QgcmVzdGF1cmFudCA9IGF3YWl0IHJlc3RhdXJhbnRTZXJ2aWNlLmNyZWF0ZVJlc3RhdXJhbnQocmVxLmJvZHkpO1xuICAgIHJldHVybiByZXMuanNvbihyZXN0YXVyYW50KVxuICAgIH1jYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmVzLnN0YXR1cyA9IDQwMDsgLy8gRklYTUUgY2xhc3NpZmljYXRpb25cbiAgICAgICAgcmVzLmpzb24oe2Vycm9yfSlcbiAgICB9XG5cbn1cblxuZXhwb3J0IGNvbnN0IGdldFJlc3RhdXJhbnRzID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2dldFJlc3RhdXJhbnRzICcsIHJlcS5wYXJhbXMsIHJlcS5xdWVyeSlcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN0YXVyYW50cyA9IGF3YWl0IHJlc3RhdXJhbnRTZXJ2aWNlLmdldFJlc3RhdXJhbnRzKHJlcS5wYXJhbXMsIHJlcy5xdWVyeSk7XG4gICAgICAgICBcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKHJlc3RhdXJhbnRzKVxuICAgIH1jYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmVzLnN0YXR1cyA9IDQwMDsgLy8gRklYTUUgY2xhc3NpZmljYXRpb25cbiAgICAgICAgcmVzLmpzb24oe2Vycm9yfSlcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBnZXRSZXN0YXVyYW50ID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2NyZWF0ZVJlc3RhdXJhbnQgJywgcmVxLmJvZHkpXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzdGF1cmFudCA9IGF3YWl0IHJlc3RhdXJhbnRTZXJ2aWNlLmdldFJlc3RhdXJhbnQocmVxLnBhcmFtcy5pZCk7XG4gICAgICAgIGlmICghcmVzdGF1cmFudCkge1xuICAgICAgICAgICAgcmVzLnN0YXR1cyA9IDQwNDtcbiAgICAgICAgICAgIHJlcy5qc29uKHtlcnJvcjogJ25vdCBmb3VuZCd9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKHJlc3RhdXJhbnQpXG4gICAgfWNhdGNoIChlcnJvcikge1xuICAgICAgICByZXMuc3RhdHVzID0gNDAwOyAvLyBGSVhNRSBjbGFzc2lmaWNhdGlvblxuICAgICAgICByZXMuanNvbih7ZXJyb3J9KVxuICAgIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUmVzdGF1cmFudChyZXEsIHJlcykge1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVSZXN0YXVyYW50KHJlcSwgcmVzKSB7XG59XG4iXX0=