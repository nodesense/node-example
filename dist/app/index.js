"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _express = _interopRequireDefault(require("express"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _restaurant = _interopRequireDefault(require("./routes/restaurant"));

var app = (0, _express["default"])();
app.use(_bodyParser["default"].json());
app.use(_restaurant["default"]);var _default =

app;exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAvaW5kZXguanMiXSwibmFtZXMiOlsiYXBwIiwidXNlIiwiYm9keVBhcnNlciIsImpzb24iLCJwcm9kdWN0Um91dGVyIl0sIm1hcHBpbmdzIjoiNExBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLEdBQUcsR0FBRywwQkFBWjtBQUNBQSxHQUFHLENBQUNDLEdBQUosQ0FBUUMsdUJBQVdDLElBQVgsRUFBUjtBQUNBSCxHQUFHLENBQUNDLEdBQUosQ0FBUUcsc0JBQVIsRTs7QUFFZUosRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0ICBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJztcbmltcG9ydCBwcm9kdWN0Um91dGVyIGZyb20gJy4vcm91dGVzL3Jlc3RhdXJhbnQnO1xuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcbmFwcC51c2UocHJvZHVjdFJvdXRlcik7IFxuXG5leHBvcnQgZGVmYXVsdCBhcHA7Il19