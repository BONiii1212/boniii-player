"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _format = require("../utils /format");
require("./index.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const TimeDisplay = ({
  currentTime,
  totalTime
}) => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "time-line"
  }, /*#__PURE__*/_react.default.createElement("span", null, (0, _format.formatDate)(currentTime, "mm:ss")), /*#__PURE__*/_react.default.createElement("span", null, "/"), /*#__PURE__*/_react.default.createElement("span", null, (0, _format.formatDate)(totalTime, "mm:ss")));
};
var _default = TimeDisplay;
exports.default = _default;