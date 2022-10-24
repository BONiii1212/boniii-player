"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./index.css");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const Voice = ({
  handleChangeVolume
}) => {
  const preVolumeSize = (0, _react.useRef)(0);
  const volumeBar = (0, _react.useRef)();
  const [silent, setSilent] = (0, _react.useState)(false);
  const [volumeSize, setVolumeSize] = (0, _react.useState)(100);

  // 修改静音和从静音中恢复
  const changeSilent = () => {
    if (silent) {
      setVolumeSize(preVolumeSize.current);
    } else {
      preVolumeSize.current = volumeSize;
      setVolumeSize(0);
    }
    handleChangeVolume(silent ? preVolumeSize.current : 0);
    setSilent(!silent);
  };
  // 控制音量大小
  const handleVolumeBarClick = event => {
    const target = volumeBar.current;
    const barHeight = target.clientHeight;
    const slideY = event.clientY;
    const barTop = target.getBoundingClientRect().top;
    let volume = (barTop + barHeight - slideY) / barHeight * 100;
    if (volume > 100) {
      volume = 100;
    } else if (volume < 0) {
      volume = 0;
    }
    setVolumeSize(volume);
    setSilent(volume === 0 ? true : false);
    handleChangeVolume(volume);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "voice"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "voice-bar"
  }, silent ? /*#__PURE__*/_react.default.createElement("span", {
    className: "icon-font",
    onClick: changeSilent
  }, "\uE650") : /*#__PURE__*/_react.default.createElement("span", {
    className: "icon-font",
    onClick: changeSilent
  }, "\uECA5")), /*#__PURE__*/_react.default.createElement("div", {
    className: "volume-bar",
    ref: volumeBar,
    onClick: handleVolumeBarClick
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "volume"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "real-volume",
    style: {
      height: volumeSize + '%'
    }
  }))));
};
var _default = Voice;
exports.default = _default;