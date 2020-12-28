/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/images/icon-location.svg":
/*!**************************************!*\
  !*** ./src/images/icon-location.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/7e6459d2a9278295ae782e100965be4b.svg");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _images_icon_location_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/icon-location.svg */ "./src/images/icon-location.svg");



(function () {
    const apiurl = "https://geo.ipify.org/api/v1?apiKey=";
    let mymap = undefined;

    function Filldata(data) {
        document.querySelector(".rc-ipaddress .value").innerHTML = data.ip;
        document.querySelector(".rc-location .value").innerHTML = `${data.location.city}, ${data.location.region} ${data.location.postalCode}`;
        document.querySelector(".rc-timezone .value").innerHTML = `UTC${data.location.timezone}`;
        document.querySelector(".rc-isp .value").innerHTML = data.isp;

        let coord = [data.location.lat, data.location.lng];

        let mylocationicon = L.icon({
            iconUrl: _images_icon_location_svg__WEBPACK_IMPORTED_MODULE_1__.default,
            iconSize: [46,56]
        });

        mymap.setView(coord, 13);

        L.marker(coord, { icon: mylocationicon}).addTo(mymap);

    }

    function SearchIp(value) {
        let request = `${apiurl}${"at_r0S9pqw31VulpGcLqvGwykA7Ei7Qp"}&ipAddress=${value}`;

        fetch(request).then(response => response.json()).then(respo => Filldata(respo));
    }

    function Search() {
        let ipvalue = document.getElementById("ipaddress").value;
        document.getElementById("ipaddress").value = "";
        SearchIp(ipvalue);
    }

    function initialize() {
        document.getElementById("ipaddress").addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
               Search();
            }
        });

        document.querySelector(".btnSearch").addEventListener("click", () => Search());

        mymap = L.map('map').setView([51.505, -0.09], 13);

        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: "pk.eyJ1IjoiYmV3aW1pczYzOSIsImEiOiJja2o3cnptZnozdnBxMnhxamtzaGVjZXY5In0.6_DT5zxXKyyhaiKn09FMMw"
        }).addTo(mymap);

        SearchIp('192.212.174.101');

    }

    window.onload = initialize;
})()

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pcC1hZGRyZXNzLXRyYWNrZXItbWFzdGVyLy4vc3JjL2ltYWdlcy9pY29uLWxvY2F0aW9uLnN2ZyIsIndlYnBhY2s6Ly9pcC1hZGRyZXNzLXRyYWNrZXItbWFzdGVyLy4vc3JjL3N0eWxlLnNjc3M/NDk3MCIsIndlYnBhY2s6Ly9pcC1hZGRyZXNzLXRyYWNrZXItbWFzdGVyLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2lwLWFkZHJlc3MtdHJhY2tlci1tYXN0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaXAtYWRkcmVzcy10cmFja2VyLW1hc3Rlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaXAtYWRkcmVzcy10cmFja2VyLW1hc3Rlci93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2lwLWFkZHJlc3MtdHJhY2tlci1tYXN0ZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9pcC1hZGRyZXNzLXRyYWNrZXItbWFzdGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaXAtYWRkcmVzcy10cmFja2VyLW1hc3Rlci93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9pcC1hZGRyZXNzLXRyYWNrZXItbWFzdGVyL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFlLHFCQUF1QixnREFBZ0QsRTs7Ozs7Ozs7Ozs7QUNBdEY7Ozs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQ2dDOztBQUV0RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFFQUFxRSxtQkFBbUIsSUFBSSxxQkFBcUIsR0FBRyx5QkFBeUI7QUFDN0ksd0VBQXdFLHVCQUF1QjtBQUMvRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQiw4REFBWTtBQUNqQztBQUNBLFNBQVM7O0FBRVQ7O0FBRUEseUJBQXlCLHNCQUFzQjs7QUFFL0M7O0FBRUE7QUFDQSx5QkFBeUIsT0FBTyxFQUFFLGtDQUF5QixDQUFDLGFBQWEsTUFBTTs7QUFFL0U7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBOztBQUVBLHVEQUF1RCxHQUFHLFFBQVEsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLGVBQWUsWUFBWTtBQUN2Ryx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsK0ZBQWdDO0FBQ3pELFNBQVM7O0FBRVQ7O0FBRUE7O0FBRUE7QUFDQSxDQUFDLEc7Ozs7OztVQy9ERDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7V0FDQSxDQUFDLEk7Ozs7O1dDUEQsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esa0M7Ozs7VUNmQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzLzdlNjQ1OWQyYTkyNzgyOTVhZTc4MmUxMDA5NjViZTRiLnN2Z1wiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCAnLi9zdHlsZS5zY3NzJztcclxuaW1wb3J0IEljb25Mb2NhdGlvbiBmcm9tICcuL2ltYWdlcy9pY29uLWxvY2F0aW9uLnN2Zyc7XHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgYXBpdXJsID0gXCJodHRwczovL2dlby5pcGlmeS5vcmcvYXBpL3YxP2FwaUtleT1cIjtcclxuICAgIGxldCBteW1hcCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICBmdW5jdGlvbiBGaWxsZGF0YShkYXRhKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yYy1pcGFkZHJlc3MgLnZhbHVlXCIpLmlubmVySFRNTCA9IGRhdGEuaXA7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yYy1sb2NhdGlvbiAudmFsdWVcIikuaW5uZXJIVE1MID0gYCR7ZGF0YS5sb2NhdGlvbi5jaXR5fSwgJHtkYXRhLmxvY2F0aW9uLnJlZ2lvbn0gJHtkYXRhLmxvY2F0aW9uLnBvc3RhbENvZGV9YDtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJjLXRpbWV6b25lIC52YWx1ZVwiKS5pbm5lckhUTUwgPSBgVVRDJHtkYXRhLmxvY2F0aW9uLnRpbWV6b25lfWA7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yYy1pc3AgLnZhbHVlXCIpLmlubmVySFRNTCA9IGRhdGEuaXNwO1xyXG5cclxuICAgICAgICBsZXQgY29vcmQgPSBbZGF0YS5sb2NhdGlvbi5sYXQsIGRhdGEubG9jYXRpb24ubG5nXTtcclxuXHJcbiAgICAgICAgbGV0IG15bG9jYXRpb25pY29uID0gTC5pY29uKHtcclxuICAgICAgICAgICAgaWNvblVybDogSWNvbkxvY2F0aW9uLFxyXG4gICAgICAgICAgICBpY29uU2l6ZTogWzQ2LDU2XVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBteW1hcC5zZXRWaWV3KGNvb3JkLCAxMyk7XHJcblxyXG4gICAgICAgIEwubWFya2VyKGNvb3JkLCB7IGljb246IG15bG9jYXRpb25pY29ufSkuYWRkVG8obXltYXApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBTZWFyY2hJcCh2YWx1ZSkge1xyXG4gICAgICAgIGxldCByZXF1ZXN0ID0gYCR7YXBpdXJsfSR7cHJvY2Vzcy5lbnYuSVBJRllfQVBJX0tFWX0maXBBZGRyZXNzPSR7dmFsdWV9YDtcclxuXHJcbiAgICAgICAgZmV0Y2gocmVxdWVzdCkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4ocmVzcG8gPT4gRmlsbGRhdGEocmVzcG8pKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBTZWFyY2goKSB7XHJcbiAgICAgICAgbGV0IGlwdmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlwYWRkcmVzc1wiKS52YWx1ZTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlwYWRkcmVzc1wiKS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgU2VhcmNoSXAoaXB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlwYWRkcmVzc1wiKS5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgICAgICAgICAgU2VhcmNoKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG5TZWFyY2hcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IFNlYXJjaCgpKTtcclxuXHJcbiAgICAgICAgbXltYXAgPSBMLm1hcCgnbWFwJykuc2V0VmlldyhbNTEuNTA1LCAtMC4wOV0sIDEzKTtcclxuXHJcbiAgICAgICAgTC50aWxlTGF5ZXIoJ2h0dHBzOi8vYXBpLm1hcGJveC5jb20vc3R5bGVzL3YxL3tpZH0vdGlsZXMve3p9L3t4fS97eX0/YWNjZXNzX3Rva2VuPXthY2Nlc3NUb2tlbn0nLCB7XHJcbiAgICAgICAgICAgIGF0dHJpYnV0aW9uOiAnTWFwIGRhdGEgJmNvcHk7IDxhIGhyZWY9XCJodHRwczovL3d3dy5vcGVuc3RyZWV0bWFwLm9yZy9jb3B5cmlnaHRcIj5PcGVuU3RyZWV0TWFwPC9hPiBjb250cmlidXRvcnMsIEltYWdlcnkgwqkgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm1hcGJveC5jb20vXCI+TWFwYm94PC9hPicsXHJcbiAgICAgICAgICAgIG1heFpvb206IDE4LFxyXG4gICAgICAgICAgICBpZDogJ21hcGJveC9zdHJlZXRzLXYxMScsXHJcbiAgICAgICAgICAgIHRpbGVTaXplOiA1MTIsXHJcbiAgICAgICAgICAgIHpvb21PZmZzZXQ6IC0xLFxyXG4gICAgICAgICAgICBhY2Nlc3NUb2tlbjogcHJvY2Vzcy5lbnYuTUFQX0JPWF9BQ0NFU1NfVE9LRU5cclxuICAgICAgICB9KS5hZGRUbyhteW1hcCk7XHJcblxyXG4gICAgICAgIFNlYXJjaElwKCcxOTIuMjEyLjE3NC4xMDEnKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93Lm9ubG9hZCA9IGluaXRpYWxpemU7XHJcbn0pKCkiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9