"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./index.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Pattern = ({
  mode,
  setMode
}) => {
  const handleLoopClick = () => {
    setMode(mode === 'loop' ? 'in_order' : 'loop');
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    onClick: handleLoopClick
  }, mode === 'loop' && /*#__PURE__*/_react.default.createElement("span", {
    className: "icon-font"
  }, "\uEA76"), mode === 'in_order' && /*#__PURE__*/_react.default.createElement("span", {
    className: "icon-font"
  }, "\uEA75"));
};
var _default = Pattern;
exports.default = _default;