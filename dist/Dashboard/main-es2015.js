(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-dashboard></app-dashboard>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/machine/machine.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/machine/machine.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngFor=\"let item of items\" class=\"view\">\n  <div class=\"machine\">\n    <div class=\"row col-md-12 machine__title\"> \n      <span>{{ item.machine }}</span><span>OEE: {{item.oee | number:'0.2-2'}} %</span>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-3 machine__item\">\n        <div class=\"small-title\">Total net production</div>\n        <div class=\"data-style\">{{ item.net }}</div>\n      </div>\n      <div class=\"col-md-3 machine__item\">\n        <div class=\"small-title\"> Scrap percentage</div>\n        <div class=\"data-style\">{{ item.scrap_percentage | number:'0.2-4' }} %</div>\n      </div>\n      <div class=\"col-md-3 machine__item\">\n        <div class=\"small-title\"> Downtime percentage</div>\n        <div class=\"data-style\">{{item.downtime_percentage | number:'0.2-2'}} %</div>\n      </div>\n      <div class=\"col-md-3 machine__item\">\n        <div class=\"small-title\"> Temperature status</div>\n        <div class=\"status\" [ngClass]=\"'status ' + item.state\"></div>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/containers/dashboard/dashboard.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/containers/dashboard/dashboard.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <div class=\"card-header header\"> Dashboard </div>\n  <div class=\"container wrapper\">   \n    <app-machine [items]=\"machineData$ | async\"></app-machine>\n    <div class=\"chart-container\">\n        <ngx-charts-line-chart\n        [scheme]=\"chartColorScheme\"\n        [results]=\"chartData\"\n        [gradient]=\"gradient\"\n        [view]=\"view\"\n        xAxis=\"true\"\n        yAxis=\"true\"\n        legend=\"true\"\n        showXAxisLabel=\"true\"\n        showYAxisLabel=\"true\"\n        xAxisLabel=\"Hour\"\n        yAxisLabel=\"Production\"\n        autoScale=\"true\"\n        legendPosition=\"right\">\n        </ngx-charts-line-chart>\n    </div>\n  </div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Dashboard';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _containers_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers/dashboard/dashboard.component */ "./src/app/containers/dashboard/dashboard.component.ts");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/fesm2015/swimlane-ngx-charts.js");
/* harmony import */ var _components_machine_machine_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/machine/machine.component */ "./src/app/components/machine/machine.component.ts");









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _containers_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
            _components_machine_machine_component__WEBPACK_IMPORTED_MODULE_8__["MachineComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_7__["NgxChartsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/machine/machine.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/machine/machine.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".machine {\n  padding-bottom: 20px;\n}\n.machine__title {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  text-transform: uppercase;\n  font-size: 16px;\n  margin: 0 0 20px 0;\n  background-color: #242121;\n  padding: 5px 15px;\n  color: #fff;\n}\n.machine__item {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.small-title {\n  font-weight: 600;\n  font-size: 14px;\n  margin-bottom: 15px;\n}\n.data-style {\n  font-size: 24px;\n}\n.status {\n  border-radius: 100%;\n  width: 30px;\n  height: 30px;\n}\n.st-good {\n  background-color: #52d96b;\n}\n.st-fatal {\n  background-color: #f54242;\n}\n.st-warn {\n  background-color: #f59042;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Vc2Vycy9QYXVsaW5hL1Byb2pla3R5L0Rhc2hib2FyZC9zcmMvYXBwL2NvbXBvbmVudHMvbWFjaGluZS9tYWNoaW5lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21hY2hpbmUvbWFjaGluZS5jb21wb25lbnQuc2NzcyIsIi9tbnQvYy9Vc2Vycy9QYXVsaW5hL1Byb2pla3R5L0Rhc2hib2FyZC9zcmMvYXBwL3Njc3MvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxvQkFBQTtBQ0RGO0FER0U7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkVYUTtFRllSLGlCQUFBO0VBQ0EsV0VaSTtBRFdSO0FESUU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDRko7QURNQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDSEY7QURNQTtFQUNFLGVBQUE7QUNIRjtBRE1BO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0hGO0FETUE7RUFDRSx5QkVwQ007QURpQ1I7QURNQTtFQUNFLHlCRXpDSTtBRHNDTjtBRE1BO0VBQ0UseUJFOUNPO0FEMkNUIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYWNoaW5lL21hY2hpbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9zY3NzL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbi5tYWNoaW5lIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuXHJcbiAgJl9fdGl0bGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW46IDAgMCAyMHB4IDA7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmstZ3JleTtcclxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gICAgY29sb3I6ICR3aGl0ZTtcclxuICB9XHJcblxyXG4gICZfX2l0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuLnNtYWxsLXRpdGxlIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4uZGF0YS1zdHlsZSB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG4uc3RhdHVzIHtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxufVxyXG5cclxuLnN0LWdvb2Qge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRncmVlbjtcclxufVxyXG5cclxuLnN0LWZhdGFsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkO1xyXG59XHJcblxyXG4uc3Qtd2FybiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcclxufSIsIi5tYWNoaW5lIHtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4ubWFjaGluZV9fdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luOiAwIDAgMjBweCAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyMTIxO1xuICBwYWRkaW5nOiA1cHggMTVweDtcbiAgY29sb3I6ICNmZmY7XG59XG4ubWFjaGluZV9faXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zbWFsbC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmRhdGEtc3R5bGUge1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5zdGF0dXMge1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4uc3QtZ29vZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MmQ5NmI7XG59XG5cbi5zdC1mYXRhbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNTQyNDI7XG59XG5cbi5zdC13YXJuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1OTA0Mjtcbn0iLCIkZGFyay1ncmV5OiAjMjQyMTIxO1xyXG4kd2hpdGU6ICNmZmY7XHJcbiRvcmFuZ2U6ICNmNTkwNDI7XHJcbiRyZWQ6ICNmNTQyNDI7XHJcbiRncmVlbjogIzUyZDk2YjtcclxuJGJsdWU6ICM0Qjg4QTI7XHJcbiRwdXJwbGU6ICMyRjMwNjE7Il19 */");

/***/ }),

/***/ "./src/app/components/machine/machine.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/machine/machine.component.ts ***!
  \*********************************************************/
/*! exports provided: MachineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachineComponent", function() { return MachineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MachineComponent = class MachineComponent {
    constructor() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MachineComponent.prototype, "items", void 0);
MachineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-machine',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./machine.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/machine/machine.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./machine.component.scss */ "./src/app/components/machine/machine.component.scss")).default]
    })
], MachineComponent);



/***/ }),

/***/ "./src/app/containers/dashboard/dashboard.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/containers/dashboard/dashboard.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\n  margin-top: 30px;\n}\n\n.header {\n  text-transform: uppercase;\n  font-weight: 600;\n  background-color: #242121;\n  color: #fff;\n}\n\n.chart-container {\n  width: 100%;\n  height: 15vw;\n  max-height: 500px;\n  min-height: 150px;\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Vc2Vycy9QYXVsaW5hL1Byb2pla3R5L0Rhc2hib2FyZC9zcmMvYXBwL2NvbnRhaW5lcnMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGFpbmVycy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwiL21udC9jL1VzZXJzL1BhdWxpbmEvUHJvamVrdHkvRGFzaGJvYXJkL3NyYy9hcHAvc2Nzcy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGdCQUFBO0FDREY7O0FESUE7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJFVFU7RUZVVixXRVRNO0FEUVI7O0FESUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvY29udGFpbmVycy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vc2Nzcy92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRkYXJrLWdyZXk7XHJcbiAgY29sb3I6ICR3aGl0ZTtcclxufVxyXG5cclxuLmNoYXJ0LWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxNXZ3O1xyXG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuIiwiLndyYXBwZXIge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uaGVhZGVyIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjEyMTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5jaGFydC1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNXZ3O1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgbWluLWhlaWdodDogMTUwcHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59IiwiJGRhcmstZ3JleTogIzI0MjEyMTtcclxuJHdoaXRlOiAjZmZmO1xyXG4kb3JhbmdlOiAjZjU5MDQyO1xyXG4kcmVkOiAjZjU0MjQyO1xyXG4kZ3JlZW46ICM1MmQ5NmI7XHJcbiRibHVlOiAjNEI4OEEyO1xyXG4kcHVycGxlOiAjMkYzMDYxOyJdfQ== */");

/***/ }),

/***/ "./src/app/containers/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/containers/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_machine_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/machine-data.service */ "./src/app/machine-data.service.ts");
/* harmony import */ var _scss_variables_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../scss/variables.scss */ "./src/app/scss/variables.scss");




let DashboardComponent = class DashboardComponent {
    constructor(machineService) {
        this.machineService = machineService;
        this.machineData$ = this.machineService.machineData$;
        this.chartData = this.machineService.chartData;
        this.chartColorScheme = {
            domain: ['#BD2D87', '#59C9A5', '#4B88A2', '#AAAAAA']
        };
    }
};
DashboardComponent.ctorParameters = () => [
    { type: src_app_machine_data_service__WEBPACK_IMPORTED_MODULE_2__["MachineDataService"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/containers/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/containers/dashboard/dashboard.component.scss")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/input-data.ts":
/*!*******************************!*\
  !*** ./src/app/input-data.ts ***!
  \*******************************/
/*! exports provided: productionData, stateData, oeeData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productionData", function() { return productionData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stateData", function() { return stateData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oeeData", function() { return oeeData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const productionData = [
    { "MACHINE": "2x2 brick mould", "DATETIME_FROM": "2018-01-07 00:00:00", "DATETIME_TO": "2018-01-08 00:00:00", "H0": 19078, "H1": 19607, "H2": 22538, "H3": 19520, "H4": 25549, "H5": 23444, "H6": 25238, "H7": 21743, "H8": 28107, "H9": 21086, "H10": 23518, "H11": 22287, "H12": 20003, "H13": 30232, "H14": 26812, "H15": 24325, "H16": 20233, "H17": 22770, "H18": 25661, "H19": 25736, "H20": 19507, "H21": 20391, "H22": 29299, "H23": 12330, "SCRAP_PERCENTAGE": 0.034238792002505, "DOWNTIME_PERCENTAGE": 0.24305555555556, "PRODUCTION": 549014 },
    { "MACHINE": "3x2 brick mould", "DATETIME_FROM": "2018-01-07 00:00:00", "DATETIME_TO": "2018-01-08 00:00:00", "H0": 25263, "H1": 16644, "H2": 26143, "H3": 23183, "H4": 19144, "H5": 23530, "H6": 25810, "H7": 19633, "H8": 21782, "H9": 21590, "H10": 27437, "H11": 18720, "H12": 25551, "H13": 24531, "H14": 26445, "H15": 20521, "H16": 26613, "H17": 25574, "H18": 21950, "H19": 28071, "H20": 22075, "H21": 25057, "H22": 28999, "H23": 22118, "SCRAP_PERCENTAGE": 0.034499217554064, "DOWNTIME_PERCENTAGE": 0.20833333333333, "PRODUCTION": 566384 },
    { "MACHINE": "4x2 brick mould", "DATETIME_FROM": "2018-01-07 00:00:00", "DATETIME_TO": "2018-01-08 00:00:00", "H0": 19096, "H1": 24985, "H2": 23594, "H3": 25471, "H4": 26350, "H5": 26529, "H6": 21239, "H7": 18268, "H8": 26449, "H9": 22492, "H10": 25104, "H11": 25415, "H12": 21314, "H13": 16494, "H14": 20758, "H15": 28443, "H16": 31753, "H17": 22564, "H18": 20424, "H19": 25337, "H20": 25928, "H21": 20698, "H22": 24215, "H23": 17466, "SCRAP_PERCENTAGE": 0.034631147187974, "DOWNTIME_PERCENTAGE": 0.23263888888889, "PRODUCTION": 560386 }
];
const stateData = { "2x2 brick mould": "warning\/orange", "3x2 brick mould": "fatal\/red", "4x2 brick mould": "good\/green" };
const oeeData = [{ "MACHINE": "2x2 brick mould", "DATETIME_FROM": "2018-01-07 00:00:00", "DATETIME_TO": "2018-01-08 00:00:00", "PERFORMANCE": 0.78955277777778, "AVAILABILITY": 1.0092592592593, "QUALITY": 0.9657612079975, "OEE": 0.76957980967078 }, { "MACHINE": "3x2 brick mould", "DATETIME_FROM": "2018-01-07 00:00:00", "DATETIME_TO": "2018-01-08 00:00:00", "PERFORMANCE": 0.81475277777778, "AVAILABILITY": 1.0555555555556, "QUALITY": 0.96550078244594, "OEE": 0.83034691358025 }, { "MACHINE": "4x2 brick mould", "DATETIME_FROM": "2018-01-07 00:00:00", "DATETIME_TO": "2018-01-08 00:00:00", "PERFORMANCE": 0.80623472222222, "AVAILABILITY": 1.0231481481481, "QUALITY": 0.96536885281203, "OEE": 0.79633041409465 }];


/***/ }),

/***/ "./src/app/machine-data.service.ts":
/*!*****************************************!*\
  !*** ./src/app/machine-data.service.ts ***!
  \*****************************************/
/*! exports provided: MachineDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachineDataService", function() { return MachineDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _input_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./input-data */ "./src/app/input-data.ts");





var MachineStateEnum;
(function (MachineStateEnum) {
    MachineStateEnum["warning/orange"] = "st-warn";
    MachineStateEnum["fatal/red"] = "st-fatal";
    MachineStateEnum["good/green"] = "st-good";
})(MachineStateEnum || (MachineStateEnum = {}));
let MachineDataService = class MachineDataService {
    constructor() {
        this.productionData = _input_data__WEBPACK_IMPORTED_MODULE_4__["productionData"];
        this.stateData = _input_data__WEBPACK_IMPORTED_MODULE_4__["stateData"];
        this.oeeData = _input_data__WEBPACK_IMPORTED_MODULE_4__["oeeData"];
        this.combinedData = this.productionData.map(el => {
            const statusValue = this.stateData[el.MACHINE];
            const oeeItem = this.oeeData.find(a => a.MACHINE === el.MACHINE);
            return Object.assign({}, el, oeeItem, { status: statusValue });
        });
        this.dataKeysToLowerCase = this.combinedData.map(data => {
            return lodash__WEBPACK_IMPORTED_MODULE_3__["transform"](data, (result, val, key) => {
                result[key.toLowerCase()] = val;
            });
        });
        this.chartData = [];
        this.dashboardData = this.dataKeysToLowerCase.map(el => {
            /** Data formatting for chart library */
            let chartDataItem;
            const chartDataSeries = [];
            for (let i = 0; i < 24; i++) {
                chartDataSeries.push({ name: i, value: `${el['h' + i]}` });
                chartDataItem = { name: el.machine, series: chartDataSeries };
            }
            this.chartData.push(chartDataItem);
            /** Data processing for dashboard display */
            const scrap = el.scrap_percentage * el.production / 100;
            el.net = Math.floor(el.production - scrap);
            el.state = MachineStateEnum[el.status];
            return el;
        });
        this.machineData$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.dashboardData);
    }
};
MachineDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], MachineDataService);



/***/ }),

/***/ "./src/app/scss/variables.scss":
/*!*************************************!*\
  !*** ./src/app/scss/variables.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Njc3MvdmFyaWFibGVzLnNjc3MifQ== */");

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/c/Users/Paulina/Projekty/Dashboard/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map