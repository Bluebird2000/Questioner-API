'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();
if (!module.parent) {
  _app2.default.listen(process.env.PORT, function () {
    console.log('Application now listening on port ' + process.env.PORT);
  });
}
exports.default = _app2.default;