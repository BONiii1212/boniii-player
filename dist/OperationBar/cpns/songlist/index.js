"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./index.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const SongList = ({
  handleHiddenSongList
}) => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "song-list",
    onClick: handleHiddenSongList
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "icon-font"
  }, "\uEB7C"));
};
var _default = SongList;
exports.default = _default;