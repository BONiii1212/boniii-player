"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _constant = require("../constant");
require("./index.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const SongCover = ({
  size,
  src,
  alt = _constant.IMAGE_ERROR,
  isPlaying,
  handleChangePlay
}) => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "image-cover"
  }, isPlaying ? /*#__PURE__*/_react.default.createElement("span", {
    style: {
      fontSize: `${0.22 * size}px`
    },
    onClick: handleChangePlay,
    className: "icon-font play"
  }, "\uEA81") : /*#__PURE__*/_react.default.createElement("span", {
    style: {
      fontSize: `${0.22 * size}px`
    },
    onClick: handleChangePlay,
    className: "icon-font pause"
  }, "\uEA82"), /*#__PURE__*/_react.default.createElement("img", {
    src: src,
    alt: alt
  }));
};
var _default = SongCover;
exports.default = _default;