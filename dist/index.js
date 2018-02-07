/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/public/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "xVnv");
/******/ })
/************************************************************************/
/******/ ({

/***/ "xVnv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FrameServiceWorker = function () {
  _createClass(FrameServiceWorker, null, [{
    key: 'register',
    value: function register(name, options) {
      return new FrameServiceWorker(options).register(name);
    }
  }]);

  function FrameServiceWorker(options) {
    _classCallCheck(this, FrameServiceWorker);

    var t = Date.now();
    this.options = _extends({}, {
      manifestUrl: '/public/sw-manifest.json?t=' + t
    }, options);
  }

  _createClass(FrameServiceWorker, [{
    key: 'fetch',
    value: function (_fetch) {
      function fetch(_x, _x2) {
        return _fetch.apply(this, arguments);
      }

      fetch.toString = function () {
        return _fetch.toString();
      };

      return fetch;
    }(function (url, options) {
      return fetch(url, _extends({
        method: 'GET',
        mode: 'no-cors',
        cache: 'default'
      }, options));
    })
  }, {
    key: 'fetchServiceWorkerManifest',
    value: function fetchServiceWorkerManifest(manifestUrl) {
      var _this = this;

      return this.fetch(manifestUrl || this.options.manifestUrl).then(function (res) {
        return res.json();
      }).catch(function (err) {
        _this.report({
          msg: 'fetch manifest error:' + err.toString()
        });
        return null;
      });
    }
  }, {
    key: 'getServiceWorkerUrl',
    value: function getServiceWorkerUrl(name, manifest) {
      name = /\.js/.test(name) ? name : name + '.js';
      var prefix = manifest.config && manifest.config.prefix;
      var babel = prefix ? prefix + '-' + name : name;
      return manifest[babel] || babel;
    }
  }, {
    key: 'register',
    value: function register(name) {
      var _this2 = this;

      if (navigator.serviceWorker) {
        return this.fetchServiceWorkerManifest().then(function (manifest) {
          if (manifest) {
            var swUrl = _this2.getServiceWorkerUrl(name, manifest);
            return navigator.serviceWorker.register(swUrl);
          }
        });
      } else {
        this.report({
          msg: 'the browser is not support service worker'
        });
      }
    }
  }, {
    key: 'report',
    value: function report(info) {
      var msg = _extends({}, {
        url: location.href,
        useAgent: navigator.userAgent.toString()
      }, info);
      return this.options.report && this.options.report(msg);
    }
  }]);

  return FrameServiceWorker;
}();

exports.default = FrameServiceWorker;

/***/ })

/******/ });