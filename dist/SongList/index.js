"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./index.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const SongList = ({
  songList,
  hiddenSongList,
  currentSong,
  handleSongListItemClick
}) => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: hiddenSongList ? "song-list-main hidden" : "song-list-main"
  }, songList && songList.map((songInfo, index) => {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: currentSong === index ? "song-list-item active-item" : "song-list-item",
      onClick: () => handleSongListItemClick(index),
      key: songInfo.id
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "before-bar"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "before-block"
    }), /*#__PURE__*/_react.default.createElement("span", null, songInfo.songName)), /*#__PURE__*/_react.default.createElement("div", null, songInfo.singer));
  }));
};
var _default = SongList;
exports.default = _default;