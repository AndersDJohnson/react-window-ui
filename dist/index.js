"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MacTerminal = exports.Terminal = exports.Browser = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  border: ", ";\n  background: ", ";\n  color: white;\n  padding-top: calc(", " + ", ");\n  ", " &:after {\n    top: 0.5em;\n    left: 0.6em;\n    ", ";\n  }\n  &:before {\n    height: ", ";\n    line-height: ", ";\n    border-bottom: ", ";\n    background: ", ";\n    color: #444;\n    ", ";\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  border: ", ";\n  background: ", ";\n  color: white;\n  padding-top: calc(", " + ", ");\n  ", " &:after {\n    top: 0.8em;\n    left: 0.8em;\n    ", ";\n  }\n  &:before {\n    height: ", ";\n    line-height: ", ";\n    background: ", ";\n    border-bottom: ", ";\n    background: ", ";\n    color: #ccc;\n    ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border: ", ";\n  background: ", ";\n  padding-top: calc(", " + ", ");\n  ", " &:after {\n    top: 0.8em;\n    left: 0.8em;\n    ", ";\n  }\n  &:before {\n    height: ", ";\n    line-height: ", ";\n    border-bottom: ", ";\n    background: ", ";\n    color: #444;\n    ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var standard = function standard(props) {
  return "\n  padding-left: ".concat(props.padding || '.5em', ";\n  padding-right: ").concat(props.padding || '.5em', ";\n  padding-bottom: ").concat(props.padding || '.5em', ";\n  resize: ").concat(props.resize && 'both' || 'none', ";\n  min-height: ").concat(props.minHeight || '11em', ";\n  min-width: ").concat(props.minWidth || '11em', ";\n  max-height: ").concat(props.maxHeight || null, ";\n  max-width: ").concat(props.maxWidth || '100%', ";\n  height: ").concat(props.height || null, ";\n  box-shadow: ").concat(props.boxShadow ? props.boxShadow : '0 20px 68px rgba(0, 0, 0, 0.55)', ";\n  border-radius: 0.5em;\n  position: relative;\n  overflow: auto;\n  z-index: 2;\n");
};

var after = function after(props) {
  return "\n  content: '';\n  position: absolute;\n  width: 6px;\n  height: 6px;\n  z-index: 2;\n  border-radius: 50%;\n  background: ".concat(props.grayscale ? '#8D8D92' : '#f85955', ";\n  box-shadow: ").concat(props.grayscale ? '0 0 0 0.2em #8D8D92,  1.1em 0 0 0.2em #8D8D92, 2.2em 0 0 0.2em #8D8D92' : '0 0 0 0.2em #f85955,  1.2em 0 0 0.2em #fbbe3f, 2.3em 0 0 0.2em #45cc4b', ";\n}\n");
};

var before = function before(props) {
  return "\n  content: '".concat(props.topbarTitle || '', "';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 1;\n  border-top-left-radius: 0.4em;\n  border-top-right-radius: 0.4em;\n  background-clip: padding-box;\n  font-family: -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif, \"Apple Color Emoji\";\n  text-align: center;\n");
};

var getPaddingTop = function getPaddingTop(props) {
  return (props.padding === '0' ? '0px' : props.padding) || '.5em';
};

var Browser = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.border || '0.05em solid #AEAEAE';
}, function (props) {
  return props.background || '#fff';
}, getPaddingTop, function (props) {
  return function (props) {
    return props.barHeight || '2em';
  };
}, standard, after, function (props) {
  return props.barHeight || '2em';
}, function (props) {
  return props.barHeight || '2em';
}, function (props) {
  return props.divider || '0.05em solid #ccc';
}, function (props) {
  return props.topbarColor || '#E6E6E6';
}, before);

exports.Browser = Browser;

var Terminal = _styledComponents["default"].section(_templateObject2(), function (props) {
  return props.border || '0.05em solid #000';
}, function (props) {
  return props.background || '#000';
}, getPaddingTop, function (props) {
  return function (props) {
    return props.barHeight || '2em';
  };
}, standard, after, function (props) {
  return props.barHeight || '2em';
}, function (props) {
  return props.barHeight || '2em';
}, function (props) {
  return props.background || '#000';
}, function (props) {
  return props.divider || '0.05em solid #000';
}, function (props) {
  return props.topbarColor || '#000';
}, before);

exports.Terminal = Terminal;

var MacTerminal = _styledComponents["default"].section(_templateObject3(), function (props) {
  return props.border || '0.0em solid #1D1F21';
}, function (props) {
  return props.background || '#000';
}, getPaddingTop, function (props) {
  return function (props) {
    return props.barHeight || '1.4em';
  };
}, standard, after, function (props) {
  return props.barHeight || '1.4em';
}, function (props) {
  return props.barHeight || '1.4em';
}, function (props) {
  return props.divider || '0.05em solid #1D1F21';
}, function (props) {
  return props.topbarColor || '#E6E6E6';
}, before);

exports.MacTerminal = MacTerminal;