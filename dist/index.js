"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _format = require("./utils /format");
var _SongCover = _interopRequireDefault(require("./SongCover"));
var _SongInfo = _interopRequireDefault(require("./SongInfo"));
var _LyricsDisplay = _interopRequireDefault(require("./LyricsDisplay"));
var _ProgressBar = _interopRequireDefault(require("./ProgressBar"));
var _TimeDisplay = _interopRequireDefault(require("./TimeDisplay"));
var _OperationBar = _interopRequireDefault(require("./OperationBar"));
var _SongList = _interopRequireDefault(require("./SongList"));
require("./index.css");
require("./iconFont/index.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const BONiiiPlayer = /*#__PURE__*/(0, _react.forwardRef)(({
  songList
}, ref) => {
  const audioRef = (0, _react.useRef)();
  const automaticCutting = (0, _react.useRef)(false);
  const [currentTime, setCurrentTime] = (0, _react.useState)(0);
  const [totalTime, setTotalTime] = (0, _react.useState)(0);
  const [mode, setMode] = (0, _react.useState)('loop');
  const [currentSong, setCurrentSong] = (0, _react.useState)(0);
  const [songInfo, setSongInfo] = (0, _react.useState)(null);
  const [hiddenSongList, setHiddenSongList] = (0, _react.useState)(true);
  const [isPlaying, setPlaying] = (0, _react.useState)(false);
  const [songSrc, setSongSrc] = (0, _react.useState)('');
  (0, _react.useImperativeHandle)(ref, () => {
    return {
      pause: pause(),
      play: play()
    };
  });

  //对当前播放歌曲的歌词下载
  (0, _react.useEffect)(() => {
    setSongInfo(songList[currentSong]);
    setSongSrc(songList[currentSong]?.resource);
    if (automaticCutting.current) {
      play();
      automaticCutting.current = false;
    }
  }, [currentSong, songList]);

  // 播放
  const play = () => {
    audioRef.current.play();
    setPlaying(true);
  };
  // 暂停
  const pause = () => {
    audioRef.current.pause();
    setPlaying(false);
  };

  // 切换播放暂停
  const handleChangePlay = () => {
    isPlaying ? pause() : play();
  };
  const handleChangeCurrentTime = currentTime => {
    if (audioRef.current) {
      audioRef.current.currentTime = currentTime;
      setCurrentTime(currentTime * 1000);
    }
  };
  const handleChangeVolume = volume => {
    // volume的范围为0-1
    audioRef.current.volume = volume / 100;
  };

  // 处理每一首歌播放完成后
  const handleMusicEnd = () => {
    if (mode === 'loop') {
      audioRef.current.currentTime = 0;
      play();
    } else {
      setCurrentSong((currentSong + 1) % songList.length);
      automaticCutting.current = true;
    }
  };
  const handleAudioOnCanplay = () => {
    setTotalTime(audioRef.current.duration * 1000);
  };
  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime * 1000);
  };
  const handleHiddenSongList = () => {
    setHiddenSongList(!hiddenSongList);
  };
  const handleSongListItemClick = index => {
    setCurrentSong(index);
    setPlaying(false);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "player"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "player-left"
  }, /*#__PURE__*/_react.default.createElement(_SongCover.default, {
    src: songInfo?.songCover || "data:image/jpeg;base64,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",
    isPlaying: isPlaying,
    handleChangePlay: handleChangePlay
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "player-right"
  }, /*#__PURE__*/_react.default.createElement(_SongInfo.default, {
    songName: songInfo?.songName || "歌名",
    singer: songInfo?.singer || "歌手"
  }), /*#__PURE__*/_react.default.createElement(_LyricsDisplay.default, {
    lyrics: (0, _format.parseLyric)(songInfo?.lyrics),
    currentTime: currentTime
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "ops"
  }, /*#__PURE__*/_react.default.createElement(_ProgressBar.default, {
    currentTime: currentTime,
    totalTime: totalTime,
    handleChangeCurrentTime: handleChangeCurrentTime
  }), /*#__PURE__*/_react.default.createElement(_TimeDisplay.default, {
    currentTime: currentTime,
    totalTime: totalTime
  }), /*#__PURE__*/_react.default.createElement(_OperationBar.default, {
    handleChangeVolume: handleChangeVolume,
    mode: mode,
    setMode: setMode,
    handleHiddenSongList: handleHiddenSongList
  }))), /*#__PURE__*/_react.default.createElement(_SongList.default, {
    songList: songList,
    hiddenSongList: hiddenSongList,
    currentSong: currentSong,
    handleSongListItemClick: handleSongListItemClick
  }), /*#__PURE__*/_react.default.createElement("audio", {
    ref: audioRef,
    onEnded: handleMusicEnd,
    onCanPlay: handleAudioOnCanplay,
    onTimeUpdate: handleTimeUpdate,
    src: songSrc
  }));
});
var _default = BONiiiPlayer;
exports.default = _default;