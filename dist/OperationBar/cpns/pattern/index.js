"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _constant = require("../../../constant");
require("./index.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Pattern = ({
  size,
  mode,
  setMode
}) => {
  const handleLoopClick = () => {
    setMode(mode === _constant.LOOP ? _constant.ORDER : _constant.LOOP);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "play-patten",
    onClick: handleLoopClick
  }, mode === _constant.LOOP && /*#__PURE__*/_react.default.createElement("span", {
    style: {
      fontSize: `${0.16 * size}px`
    },
    className: "icon-font"
  }, "\uEA76"), mode === _constant.ORDER && /*#__PURE__*/_react.default.createElement("span", {
    style: {
      fontSize: `${0.16 * size}px`
    },
    className: "icon-font"
  }, "\uEA75"));
};
var _default = Pattern;
exports.default = _default;