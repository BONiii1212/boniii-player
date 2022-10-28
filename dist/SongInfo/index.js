"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./index.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const SongInfo = ({
  size,
  songName,
  singer
}) => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "song-info"
  }, /*#__PURE__*/_react.default.createElement("span", {
    style: {
      fontSize: `${0.16 * size}px`
    }
  }, songName), /*#__PURE__*/_react.default.createElement("span", {
    style: {
      fontSize: `${0.12 * size}px`
    }
  }, " - ", singer));
};
var _default = SongInfo;
exports.default = _default;