"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./index.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const SongCover = ({
  src,
  alt = "图片加载失败",
  isPlaying,
  handleChangePlay
}) => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "image-cover"
  }, isPlaying ? /*#__PURE__*/_react.default.createElement("span", {
    onClick: handleChangePlay,
    className: "icon-font play"
  }, "\uEA81") : /*#__PURE__*/_react.default.createElement("span", {
    onClick: handleChangePlay,
    className: "icon-font pause"
  }, "\uEA82"), /*#__PURE__*/_react.default.createElement("img", {
    src: src,
    alt: alt
  }));
};
var _default = SongCover;
exports.default = _default;