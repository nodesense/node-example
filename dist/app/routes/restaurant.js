"use strict";var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _express = _interopRequireDefault(require("express"));

var controllers = _interopRequireWildcard(require("../controllers/restaurant"));

var router = _express["default"].Router();

router.get('/restaurants', controllers.getRestaurants);
router.get('/restaurants/:id', controllers.getRestaurant);
router.post('/restaurants', controllers.createRestaurant);
router.put('/restaurants/:id', controllers.updateRestaurant);
router.patch('/restaurants/:id', controllers.updateRestaurant);var _default =


router;exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvcm91dGVzL3Jlc3RhdXJhbnQuanMiXSwibmFtZXMiOlsicm91dGVyIiwiZXhwcmVzcyIsIlJvdXRlciIsImdldCIsImNvbnRyb2xsZXJzIiwiZ2V0UmVzdGF1cmFudHMiLCJnZXRSZXN0YXVyYW50IiwicG9zdCIsImNyZWF0ZVJlc3RhdXJhbnQiLCJwdXQiLCJ1cGRhdGVSZXN0YXVyYW50IiwicGF0Y2giXSwibWFwcGluZ3MiOiJtUkFBQTs7QUFFQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLG9CQUFRQyxNQUFSLEVBQWY7O0FBRUFGLE1BQU0sQ0FBQ0csR0FBUCxDQUFXLGNBQVgsRUFBMkJDLFdBQVcsQ0FBQ0MsY0FBdkM7QUFDQUwsTUFBTSxDQUFDRyxHQUFQLENBQVcsa0JBQVgsRUFBK0JDLFdBQVcsQ0FBQ0UsYUFBM0M7QUFDQU4sTUFBTSxDQUFDTyxJQUFQLENBQVksY0FBWixFQUE0QkgsV0FBVyxDQUFDSSxnQkFBeEM7QUFDQVIsTUFBTSxDQUFDUyxHQUFQLENBQVcsa0JBQVgsRUFBK0JMLFdBQVcsQ0FBQ00sZ0JBQTNDO0FBQ0FWLE1BQU0sQ0FBQ1csS0FBUCxDQUFhLGtCQUFiLEVBQWlDUCxXQUFXLENBQUNNLGdCQUE3QyxFOzs7QUFHZVYsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuXG5pbXBvcnQgKiBhcyBjb250cm9sbGVycyBmcm9tICcuLi9jb250cm9sbGVycy9yZXN0YXVyYW50JztcblxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxucm91dGVyLmdldCgnL3Jlc3RhdXJhbnRzJywgY29udHJvbGxlcnMuZ2V0UmVzdGF1cmFudHMpO1xucm91dGVyLmdldCgnL3Jlc3RhdXJhbnRzLzppZCcsIGNvbnRyb2xsZXJzLmdldFJlc3RhdXJhbnQpO1xucm91dGVyLnBvc3QoJy9yZXN0YXVyYW50cycsIGNvbnRyb2xsZXJzLmNyZWF0ZVJlc3RhdXJhbnQpO1xucm91dGVyLnB1dCgnL3Jlc3RhdXJhbnRzLzppZCcsIGNvbnRyb2xsZXJzLnVwZGF0ZVJlc3RhdXJhbnQpO1xucm91dGVyLnBhdGNoKCcvcmVzdGF1cmFudHMvOmlkJywgY29udHJvbGxlcnMudXBkYXRlUmVzdGF1cmFudCk7XG5cblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyOyJdfQ==