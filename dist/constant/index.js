"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ORDER = exports.NO_LYRICS = exports.LOOP = exports.IMAGE_ERROR = exports.DEFAULT_SONGNAME = exports.DEFAULT_SONGCOVER = exports.DEFAULT_SINGER = void 0;
const DEFAULT_SONGCOVER = "data:image/jpeg;base64,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";
exports.DEFAULT_SONGCOVER = DEFAULT_SONGCOVER;
const DEFAULT_SONGNAME = "歌名";
exports.DEFAULT_SONGNAME = DEFAULT_SONGNAME;
const DEFAULT_SINGER = "歌手";
exports.DEFAULT_SINGER = DEFAULT_SINGER;
const IMAGE_ERROR = "图片加载失败";
exports.IMAGE_ERROR = IMAGE_ERROR;
const NO_LYRICS = "暂无歌词";
exports.NO_LYRICS = NO_LYRICS;
const LOOP = 'loop';
exports.LOOP = LOOP;
const ORDER = 'order';
exports.ORDER = ORDER;