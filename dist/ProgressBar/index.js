"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./index.css");
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const ProgressBar = ({
  size,
  currentTime,
  totalTime,
  handleChangeCurrentTime
}) => {
  const progressRef = (0, _react.useRef)();
  const isClick = (0, _react.useRef)(false);
  const isDraping = (0, _react.useRef)(false);
  const [playedWidth, setPlayedWidth] = (0, _react.useState)(0);

  // 点击
  const handleProgressBarMouseDown = event => {
    isClick.current = true;
    let target = progressRef.current;
    const barWidth = target.clientWidth;
    // 点击后修改playedWidth
    setPlayedWidth(event.nativeEvent.offsetX / barWidth * 100);
    window.addEventListener('mousemove', mouseMove);
  };
  const mouseMove = event => {
    if (isClick.current) {
      isDraping.current = true;
      let target = progressRef.current;
      const barWidth = target.clientWidth;
      // 鼠标距离左屏幕的距离
      const slideX = event.clientX;
      // 滚动组件距左屏幕的位置
      const progressLeft = target.getBoundingClientRect().left;
      const progressRight = progressLeft + target.offsetWidth;
      // 在允许移动的范围内
      if (slideX <= progressRight && slideX >= progressLeft) {
        setPlayedWidth((slideX - progressLeft) / barWidth * 100);
      }
    }
  };
  (0, _react.useEffect)(() => {
    if (isClick.current === false) return;
    const mouseUp = function () {
      if (isClick.current) {
        isClick.current = false;
        isDraping.current = false;
        window.removeEventListener('mousemove', mouseMove);
        handleChangeCurrentTime(playedWidth / 100 * totalTime / 1000);
      }
    };
    window.addEventListener('mouseup', mouseUp);
    return () => {
      window.removeEventListener('mouseup', mouseUp);
    };
  }, [playedWidth, totalTime, handleChangeCurrentTime]);
  (0, _react.useEffect)(() => {
    if (!isClick.current && !isDraping.current) {
      setPlayedWidth(currentTime / totalTime * 100);
    }
  }, [currentTime, totalTime]);
  return /*#__PURE__*/_react.default.createElement("div", {
    ref: progressRef,
    style: {
      height: `${0.1 * size}px`
    },
    className: "progress-bar-wrap",
    onMouseDown: handleProgressBarMouseDown
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      height: `${0.02 * size}px`
    },
    className: "progress-bar"
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: `${playedWidth}%`
    },
    className: "progress-played"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "progress-loaded"
  })));
};
var _default = ProgressBar;
exports.default = _default;