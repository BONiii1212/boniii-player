"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _songlist = _interopRequireDefault(require("./cpns/songlist"));
var _voice = _interopRequireDefault(require("./cpns/voice"));
var _pattern = _interopRequireDefault(require("./cpns/pattern"));
require("./index.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const OperationBar = ({
  handleChangeVolume,
  mode,
  setMode,
  handleHiddenSongList
}) => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "operation-bar"
  }, /*#__PURE__*/_react.default.createElement(_voice.default, {
    handleChangeVolume: handleChangeVolume
  }), /*#__PURE__*/_react.default.createElement(_pattern.default, {
    mode: mode,
    setMode: setMode
  }), /*#__PURE__*/_react.default.createElement(_songlist.default, {
    handleHiddenSongList: handleHiddenSongList
  }));
};
var _default = OperationBar;
exports.default = _default;