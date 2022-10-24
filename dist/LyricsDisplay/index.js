"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./index.css");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const LyricsDisplay = ({
  lyrics,
  currentTime
}) => {
  // 当前歌词
  const [currentLyric, setCurrentLyric] = (0, _react.useState)("");
  const [currentPosition, setCurrentPosition] = (0, _react.useState)(-34);
  (0, _react.useEffect)(() => {
    // 从后往前，找到第一个当前时间大于歌词时间的
    for (let i = lyrics.length - 1; i >= 0; i--) {
      const item = lyrics[i];
      if (currentTime > item.time) {
        if (currentLyric !== item.content) setCurrentLyric(item.content);
        break;
      }
    }
    // 计算偏移量
    let j = 0;
    while (j < lyrics.length && currentTime > lyrics[j].time) j++;
    if (currentPosition !== j * 17 - 34) setCurrentPosition(j * 17 - 34);
  }, [currentTime, lyrics, currentLyric, currentPosition]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "lyrics-display"
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      transform: `translateY(${-currentPosition}px)`,
      transition: "all .3s linear"
    }
  }, lyrics.map((item, index) => {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "lyrics-display-item",
      key: index
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: currentLyric === item.content ? "lyric-active" : ""
    }, item.content));
  })));
};
var _default = LyricsDisplay;
exports.default = _default;