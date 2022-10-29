"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _format = require("./utils /format");
var _constant = require("./constant");
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
  songList = [],
  pattern = _constant.LOOP,
  isMute = false,
  size = 100
}, ref) => {
  const audioRef = (0, _react.useRef)();
  const automaticCutting = (0, _react.useRef)(false); //自动切歌，用于自动切歌的时候自动播放
  const [currentTime, setCurrentTime] = (0, _react.useState)(0);
  const [totalTime, setTotalTime] = (0, _react.useState)(0);
  const [mode, setMode] = (0, _react.useState)(pattern);
  const [currentSong, setCurrentSong] = (0, _react.useState)(0);
  const [songInfo, setSongInfo] = (0, _react.useState)(null);
  const [hiddenSongList, setHiddenSongList] = (0, _react.useState)(true);
  const [isPlaying, setPlaying] = (0, _react.useState)(false);
  const [songSrc, setSongSrc] = (0, _react.useState)('');
  (0, _react.useImperativeHandle)(ref, () => {
    return {
      pause: pause,
      play: play
    };
  });

  //对当前播放歌曲的歌词下载
  (0, _react.useEffect)(() => {
    setSongInfo(songList[currentSong]);
    setSongSrc(songList[currentSong]?.resource);
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
    if (mode === _constant.LOOP) {
      audioRef.current.currentTime = 0;
      play();
    } else if (mode === _constant.ORDER) {
      setCurrentSong((currentSong + 1) % songList.length);
      automaticCutting.current = true;
    } else {
      audioRef.current.currentTime = 0;
      play();
    }
  };
  const handleAudioOnCanplay = () => {
    setTotalTime(audioRef.current.duration * 1000);
    if (automaticCutting.current) {
      play();
      automaticCutting.current = false;
    }
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
    className: "player",
    style: {
      width: `${6 * size}px`,
      height: `${size}px`
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "player-left",
    style: {
      width: `${size}px`
    }
  }, /*#__PURE__*/_react.default.createElement(_SongCover.default, {
    size: size,
    src: songInfo?.songCover || _constant.DEFAULT_SONGCOVER,
    isPlaying: isPlaying,
    handleChangePlay: handleChangePlay
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "player-right",
    style: {
      paddingLeft: `${size / 10}px`
    }
  }, /*#__PURE__*/_react.default.createElement(_SongInfo.default, {
    size: size,
    songName: songInfo?.songName || _constant.DEFAULT_SONGNAME,
    singer: songInfo?.singer || _constant.DEFAULT_SINGER
  }), /*#__PURE__*/_react.default.createElement(_LyricsDisplay.default, {
    size: size,
    lyrics: (0, _format.parseLyric)(songInfo?.lyrics),
    currentTime: currentTime
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "ops"
  }, /*#__PURE__*/_react.default.createElement(_ProgressBar.default, {
    size: size,
    currentTime: currentTime,
    totalTime: totalTime,
    handleChangeCurrentTime: handleChangeCurrentTime
  }), /*#__PURE__*/_react.default.createElement(_TimeDisplay.default, {
    size: size,
    currentTime: currentTime,
    totalTime: totalTime
  }), /*#__PURE__*/_react.default.createElement(_OperationBar.default, {
    size: size,
    isMute: isMute,
    handleChangeVolume: handleChangeVolume,
    mode: mode,
    setMode: setMode,
    handleHiddenSongList: handleHiddenSongList
  }))), /*#__PURE__*/_react.default.createElement(_SongList.default, {
    size: size,
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