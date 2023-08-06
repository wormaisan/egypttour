/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/js/common.js":
/*!*********************************!*\
  !*** ./assets/src/js/common.js ***!
  \*********************************/
/***/ (function() {

// работа с бургером
var burgerBtn = document.querySelector('.header__burgerBtn');
var burgerContainer = document.querySelector('.burgerContainer');
var burgerLinks = document.querySelectorAll('.burgerContainer a');
function openCloseBurger() {
  burgerBtn.classList.toggle('active');
  burgerContainer.classList.toggle('active');
}
if (burgerBtn !== null && burgerContainer !== null) {
  burgerBtn.addEventListener('click', function () {
    openCloseBurger();
  });
  burgerContainer.addEventListener('click', function (e) {
    if (e.target === burgerContainer) {
      openCloseBurger();
    }
  });
  if (burgerLinks.length > 0) {
    for (var i = 0; i < burgerLinks.length; i++) {
      burgerLinks[i].addEventListener('click', function () {
        openCloseBurger();
      });
    }
  }
}
//**************************************************************************

//прокрутка страницы до нужного блока при выборе пункта меню
var curUrl = '';
var anchors = document.querySelectorAll('a[href*="' + curUrl + '#anchor"]');
if (anchors.length > 0) {
  var _loop = function _loop() {
    var anchor = anchors[_i];
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      var href = anchor.getAttribute('href');
      var blockID = href.substring(href.indexOf('#') + 1);
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  };
  for (var _i = 0; _i < anchors.length; _i++) {
    _loop();
  }
}
//**************************************************************************

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!*******************************!*\
  !*** ./assets/src/js/home.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_src_js_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/src/js/common */ "./assets/src/js/common.js");
/* harmony import */ var _assets_src_js_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_src_js_common__WEBPACK_IMPORTED_MODULE_0__);

var selectLists = document.querySelectorAll('.search__itemList select');
if (selectLists.length > 0) {
  for (var i = 0; i < selectLists.length; i++) {
    selectLists[i].addEventListener('focus', function () {
      this.parentElement.classList.add('active');
    });
    selectLists[i].addEventListener('blur', function () {
      this.parentElement.classList.remove('active');
    });
  }
}
}();
/******/ })()
;
//# sourceMappingURL=home.js.map