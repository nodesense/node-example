"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _express = _interopRequireDefault(require("express"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _restaurant = _interopRequireDefault(require("./routes/restaurant"));

require('../app/config/consul');

var app = (0, _express["default"])();
app.use(_bodyParser["default"].json());
app.use(_restaurant["default"]);var _default =

app;exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAvaW5kZXguanMiXSwibmFtZXMiOlsicmVxdWlyZSIsImFwcCIsInVzZSIsImJvZHlQYXJzZXIiLCJqc29uIiwicHJvZHVjdFJvdXRlciJdLCJtYXBwaW5ncyI6IjRMQUFBO0FBQ0E7QUFDQTs7QUFFQUEsT0FBTyxDQUFDLHNCQUFELENBQVA7O0FBRUEsSUFBTUMsR0FBRyxHQUFHLDBCQUFaO0FBQ0FBLEdBQUcsQ0FBQ0MsR0FBSixDQUFRQyx1QkFBV0MsSUFBWCxFQUFSO0FBQ0FILEdBQUcsQ0FBQ0MsR0FBSixDQUFRRyxzQkFBUixFOztBQUVlSixHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgIGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInO1xuaW1wb3J0IHByb2R1Y3RSb3V0ZXIgZnJvbSAnLi9yb3V0ZXMvcmVzdGF1cmFudCc7XG5cbnJlcXVpcmUoJy4uL2FwcC9jb25maWcvY29uc3VsJyk7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xuYXBwLnVzZShwcm9kdWN0Um91dGVyKTsgXG5cbmV4cG9ydCBkZWZhdWx0IGFwcDsiXX0=