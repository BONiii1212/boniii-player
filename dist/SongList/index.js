"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./index.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const SongList = ({
  size,
  songList,
  hiddenSongList,
  currentSong,
  handleSongListItemClick
}) => {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      height: `${hiddenSongList ? 0 : 3.1 * size}px`
    },
    className: "song-list-main"
  }, songList && songList.map((songInfo, index) => {
    return /*#__PURE__*/_react.default.createElement("div", {
      style: {
        fontSize: `${0.13 * size}px`,
        padding: `${0.06 * size}px ${0.1 * size}px ${0.06 * size}px ${0.02 * size}px`
      },
      className: currentSong === index ? "song-list-item active-item" : "song-list-item",
      onClick: () => handleSongListItemClick(index),
      key: songInfo.id
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "before-bar"
    }, /*#__PURE__*/_react.default.createElement("span", {
      style: {
        marginRight: `${0.06 * size}px`,
        width: `${0.03 * size}px`
      },
      className: "before-block"
    }), /*#__PURE__*/_react.default.createElement("span", null, songInfo.songName)), /*#__PURE__*/_react.default.createElement("div", null, songInfo.singer));
  }));
};
var _default = SongList;
exports.default = _default;