"use strict";var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _express = _interopRequireDefault(require("express"));

var controllers = _interopRequireWildcard(require("../controllers/search"));

var router = _express["default"].Router();
router.get('/search', controllers.search);var _default =

router;exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvcm91dGVzL3NlYXJjaC5qcyJdLCJuYW1lcyI6WyJyb3V0ZXIiLCJleHByZXNzIiwiUm91dGVyIiwiZ2V0IiwiY29udHJvbGxlcnMiLCJzZWFyY2giXSwibWFwcGluZ3MiOiJtUkFBQTs7QUFFQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLG9CQUFRQyxNQUFSLEVBQWY7QUFDQUYsTUFBTSxDQUFDRyxHQUFQLENBQVcsU0FBWCxFQUFzQkMsV0FBVyxDQUFDQyxNQUFsQyxFOztBQUVlTCxNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5cbmltcG9ydCAqIGFzIGNvbnRyb2xsZXJzIGZyb20gJy4uL2NvbnRyb2xsZXJzL3NlYXJjaCc7XG5cbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5yb3V0ZXIuZ2V0KCcvc2VhcmNoJywgY29udHJvbGxlcnMuc2VhcmNoKTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyOyJdfQ==