(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Coveo"));
	else if(typeof define === 'function' && define.amd)
		define(["Coveo"], factory);
	else if(typeof exports === 'object')
		exports["CoveoForZendeskAgent"] = factory(require("Coveo"));
	else
		root["CoveoForZendeskAgent"] = factory(root["Coveo"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_coveo_search_ui__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/commonjs";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/coveo-search-ui-extensions/bin/es6/Index.js":
/*!******************************************************************!*\
  !*** ./node_modules/coveo-search-ui-extensions/bin/es6/Index.js ***!
  \******************************************************************/
/*! exports provided: AttachResult, UserActivity, UserActions, ClickedDocumentList, QueryList, UserProfilingEndpoint, UserProfileModel, ResultsFilter, ViewedByCustomer, ResultAction, CopyToClipboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_AttachResult_AttachResult__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/AttachResult/AttachResult */ "./node_modules/coveo-search-ui-extensions/bin/es6/components/AttachResult/AttachResult.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttachResult", function() { return _components_AttachResult_AttachResult__WEBPACK_IMPORTED_MODULE_0__["AttachResult"]; });

/* harmony import */ var _components_UserActions_UserActivity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/UserActions/UserActivity */ "./node_modules/coveo-search-ui-extensions/bin/es6/components/UserActions/UserActivity.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserActivity", function() { return _components_UserActions_UserActivity__WEBPACK_IMPORTED_MODULE_1__["UserActivity"]; });

/* harmony import */ var _components_UserActions_UserActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/UserActions/UserActions */ "./node_modules/coveo-search-ui-extensions/bin/es6/components/UserActions/UserActions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserActions", function() { return _components_UserActions_UserActions__WEBPACK_IMPORTED_MODULE_2__["UserActions"]; });

/* harmony import */ var _components_UserActions_ClickedDocumentList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/UserActions/ClickedDocumentList */ "./node_modules/coveo-search-ui-extensions/bin/es6/components/UserActions/ClickedDocumentList.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClickedDocumentList", function() { return _components_UserActions_ClickedDocumentList__WEBPACK_IMPORTED_MODULE_3__["ClickedDocumentList"]; });

/* harmony import */ var _components_UserActions_QueryList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/UserActions/QueryList */ "./node_modules/coveo-search-ui-extensions/bin/es6/components/UserActions/QueryList.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueryList", function() { return _components_UserActions_QueryList__WEBPACK_IMPORTED_MODULE_4__["QueryList"]; });

/* harmony import */ var _rest_UserProfilingEndpoint__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rest/UserProfilingEndpoint */ "./node_modules/coveo-search-ui-extensions/bin/es6/rest/UserProfilingEndpoint.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserProfilingEndpoint", function() { return _rest_UserProfilingEndpoint__WEBPACK_IMPORTED_MODULE_5__["UserProfilingEndpoint"]; });

/* harmony import */ var _models_UserProfileModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./models/UserProfileModel */ "./node_modules/coveo-search-ui-extensions/bin/es6/models/UserProfileModel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserProfileModel", function() { return _models_UserProfileModel__WEBPACK_IMPORTED_MODULE_6__["UserProfileModel"]; });

/* harmony import */ var _components_ResultsFilter_ResultsFilter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/ResultsFilter/ResultsFilter */ "./node_modules/coveo-search-ui-extensions/bin/es6/components/ResultsFilter/ResultsFilter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResultsFilter", function() { return _components_ResultsFilter_ResultsFilter__WEBPACK_IMPORTED_MODULE_7__["ResultsFilter"]; });

/* harmony import */ var _components_ViewedByCustomer_ViewedByCustomer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/ViewedByCustomer/ViewedByCustomer */ "./node_modules/coveo-search-ui-extensions/bin/es6/components/ViewedByCustomer/ViewedByCustomer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewedByCustomer", function() { return _components_ViewedByCustomer_ViewedByCustomer__WEBPACK_IMPORTED_MODULE_8__["ViewedByCustomer"]; });

/* harmony import */ var _components_ResultAction_ResultAction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/ResultAction/ResultAction */ "./node_modules/coveo-search-ui-extensions/bin/es6/components/ResultAction/ResultAction.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResultAction", function() { return _components_ResultAction_ResultAction__WEBPACK_IMPORTED_MODULE_9__["ResultAction"]; });

/* harmony import */ var _components_CopyToClipboard_CopyToClipboard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/CopyToClipboard/CopyToClipboard */ "./node_modules/coveo-search-ui-extensions/bin/es6/components/CopyToClipboard/CopyToClipboard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CopyToClipboard", function() { return _components_CopyToClipboard_CopyToClipboard__WEBPACK_IMPORTED_MODULE_10__["CopyToClipboard"]; });

// This entry point defines all the components that are included in the extensions.











//# sourceMappingURL=Index.js.map

/***/ }),

/***/ "./node_modules/coveo-search-ui-extensions/bin/es6/components/AttachResult/AttachResult.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/coveo-search-ui-extensions/bin/es6/components/AttachResult/AttachResult.js ***!
  \*************************************************************************************************/
/*! exports provided: AttachResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttachResult", function() { return AttachResult; });
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! coveo-search-ui */ "coveo-search-ui");
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/icons */ "./node_modules/coveo-search-ui-extensions/bin/es6/utils/icons.js");
/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Events */ "./node_modules/coveo-search-ui-extensions/bin/es6/components/AttachResult/Events.js");
/* harmony import */ var _Strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Strings */ "./node_modules/coveo-search-ui-extensions/bin/es6/components/AttachResult/Strings.js");




/**
 * The AttachResult component allows a user to link a search result to something else in their external
 * system, for instance a case, incident, request, etc.
 */
class AttachResult extends coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(element, options, bindings, queryResult) {
        super(element, AttachResult.ID, bindings);
        this.element = element;
        this.options = options;
        this.bindings = bindings;
        this.queryResult = queryResult;
        this.options = coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].initComponentOptions(element, AttachResult, options);
        this.queryResult = this.queryResult || this.resolveResult();
        this.initialize();
        this.bind.on(this.element, 'click', this.toggleAttached);
    }
    /**
     * Gets whether or not the result is currently attached.
     */
    isAttached() {
        return !!this.attached;
    }
    /**
     * Attach the query result.
     */
    attach() {
        if (this.attached || this.loading) {
            return Promise.resolve();
        }
        this.setLoading(true);
        return this.options
            .attach(this.queryResult)
            .then(() => {
            this.attached = true;
            this.logAnalyticsCaseEvent(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["analyticsActionCauseList"].caseAttach);
            Coveo.$$(this.root).trigger(_Events__WEBPACK_IMPORTED_MODULE_2__["AttachResultEvents"].Attach, { queryResult: this.queryResult });
        })
            .finally(() => {
            this.setLoading(false);
        });
    }
    /**
     * Detach the query result.
     */
    detach() {
        if (!this.attached && !this.loading) {
            return Promise.resolve();
        }
        this.setLoading(true);
        return this.options
            .detach(this.queryResult)
            .then(() => {
            this.attached = false;
            this.logAnalyticsCaseEvent(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["analyticsActionCauseList"].caseDetach);
            Coveo.$$(this.root).trigger(_Events__WEBPACK_IMPORTED_MODULE_2__["AttachResultEvents"].Detach, { queryResult: this.queryResult });
        })
            .finally(() => {
            this.setLoading(false);
        });
    }
    /** Toggle the state of the component. If the current result is not attached, attach it, if not, detach it. */
    toggleAttached() {
        this.attached ? this.detach() : this.attach();
    }
    initialize() {
        this.buttonElement = Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])('div').el;
        this.element.appendChild(this.buttonElement);
        this.tooltipElement = Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])('div', {
            className: 'coveo-caption-for-icon'
        }).el;
        this.element.appendChild(this.tooltipElement);
        this.updateInitialAttachedState();
    }
    updateInitialAttachedState() {
        this.attached = false;
        this.render();
        // Resolve the current result for the component and the initial state.
        if (this.options.isAttached) {
            this.setLoading(true);
            this.options
                .isAttached(this.queryResult)
                .then(attached => {
                this.attached = attached;
            })
                .catch(error => {
                this.logger.error('Error retrieving initial result attached state.', error);
            })
                .finally(() => {
                this.setLoading(false);
            });
        }
    }
    /** Set the loading property and updates the component UI. */
    setLoading(loading) {
        this.loading = loading;
        this.render();
    }
    logAnalyticsCaseEvent(cause) {
        let customData = {
            resultUriHash: this.queryResult.raw.urihash,
            author: this.queryResult.raw.author,
            articleID: null,
            caseID: null
        };
        this.usageAnalytics.logCustomEvent(cause, customData, this.root);
    }
    render() {
        Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(this.buttonElement).removeClass('coveo-icon-attached');
        Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(this.buttonElement).removeClass('coveo-icon-attach');
        Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(this.buttonElement).removeClass('coveo-icon-loading');
        if (this.loading) {
            Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(this.buttonElement).addClass('coveo-icon-loading');
            this.buttonElement.innerHTML = _utils_icons__WEBPACK_IMPORTED_MODULE_1__["wait"];
        }
        else {
            this.buttonElement.innerHTML = _utils_icons__WEBPACK_IMPORTED_MODULE_1__["paperclipIcon"];
            if (this.attached) {
                Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(this.buttonElement).addClass('coveo-icon-attached');
                Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(this.tooltipElement).text(this.options.detachCaption);
            }
            else {
                Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(this.buttonElement).addClass('coveo-icon-attach');
                Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(this.tooltipElement).text(this.options.attachCaption);
            }
        }
    }
}
AttachResult.ID = 'AttachResult';
AttachResult.options = {
    attachCaption: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({
        defaultValue: Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])(`${AttachResult.ID}_Attach`)
    }),
    detachCaption: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({
        defaultValue: Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])(`${AttachResult.ID}_Detach`)
    }),
    attach: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildCustomOption(name => (result) => new Promise((resolve, reject) => {
        console.log('attached ', result);
        resolve();
    }), {
        defaultFunction: () => (result) => new Promise((resolve, reject) => {
            console.log('attached ', result);
            resolve();
        })
    }),
    detach: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildCustomOption(name => (result) => new Promise((resolve, reject) => {
        console.log('detached ', result);
        resolve();
    }), {
        defaultFunction: () => (result) => new Promise((resolve, reject) => {
            console.log('detached ', result);
            resolve();
        })
    })
};
coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].registerComponentFields(AttachResult.ID, ['urihash']);
coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].registerAutoCreateComponent(AttachResult);
//# sourceMappingURL=AttachResult.js.map

/***/ }),

/***/ "./node_modules/coveo-search-ui-extensions/bin/es6/components/AttachResult/Events.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/coveo-search-ui-extensions/bin/es6/components/AttachResult/Events.js ***!
  \*******************************************************************************************/
/*! exports provided: AttachResultEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttachResultEvents", function() { return AttachResultEvents; });
/**
 * List of possible event types triggered by the **AttachResult** component
 * when a user interacts with it.
 */
var AttachResultEvents;
(function (AttachResultEvents) {
    AttachResultEvents["Attach"] = "attach";
    AttachResultEvents["Detach"] = "detach";
})(AttachResultEvents || (AttachResultEvents = {}));
//# sourceMappingURL=Events.js.map

/***/ }),

/***/ "./node_modules/coveo-search-ui-extensions/bin/es6/components/AttachResult/Strings.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/coveo-search-ui-extensions/bin/es6/components/AttachResult/Strings.js ***!
  \********************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_translation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/translation */ "./node_modules/coveo-search-ui-extensions/bin/es6/utils/translation.js");

_utils_translation__WEBPACK_IMPORTED_MODULE_0__["Translation"].register(_utils_translation__WEBPACK_IMPORTED_MODULE_0__["Language"].English, {
    AttachResult_Attach: 'Attach Result',
    AttachResult_Detach: 'Detach Result'
});
//# sourceMappingURL=Strings.js.map

/***/ }),

/***/ "./node_modules/coveo-search-ui-extensions/bin/es6/components/CopyToClipboard/CopyToClipboard.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/coveo-search-ui-extensions/bin/es6/components/CopyToClipboard/CopyToClipboard.js ***!
  \*******************************************************************************************************/
/*! exports provided: CopyToClipboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopyToClipboard", function() { return CopyToClipboard; });
/* harmony import */ var _ResultAction_ResultAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ResultAction/ResultAction */ "./node_modules/coveo-search-ui-extensions/bin/es6/components/ResultAction/ResultAction.js");
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! coveo-search-ui */ "coveo-search-ui");
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/icons */ "./node_modules/coveo-search-ui-extensions/bin/es6/utils/icons.js");
/* harmony import */ var _Strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Strings */ "./node_modules/coveo-search-ui-extensions/bin/es6/components/CopyToClipboard/Strings.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




class CopyToClipboard extends _ResultAction_ResultAction__WEBPACK_IMPORTED_MODULE_0__["ResultAction"] {
    /**
     * Construct a ResultAction component.
     * @param element The HTML element bound to this component.
     * @param options The options that can be provided to this component.
     * @param bindings The bindings, or environment within which this component exists.
     * @param result The result of the query in which this resultAction exists.
     */
    constructor(element, options, bindings, result) {
        super(element, coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].initComponentOptions(element, CopyToClipboard, options), bindings, result);
        this.element = element;
        this.options = options;
        this.bindings = bindings;
        this.result = result;
        super.init();
    }
    doAction() {
        this.usageAnalytics.logClickEvent({ name: 'copyToClipboard', type: 'resultAction' }, {}, this.result, this.element);
        this.copyToClipboard(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["StringUtils"].buildStringTemplateFromResult(this.options.template, this.result));
    }
    copyToClipboard(text) {
        return __awaiter(this, void 0, void 0, function* () {
            if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
                try {
                    yield navigator.clipboard.writeText(text);
                }
                catch (err) {
                    this.logger.error('Copy to clipboard failed.', text, err);
                    this.copyToClipboardFallback(text);
                }
            }
            else {
                this.copyToClipboardFallback(text);
            }
            this.setToolipText(this.options.successTooltip);
            this.refreshTooltip();
        });
    }
    refreshTooltip() {
        setTimeout(() => this.setToolipText(this.options.tooltip), 500);
    }
    setToolipText(text) {
        const tooltipElement = this.element.querySelector('.coveo-caption-for-icon');
        if (tooltipElement && text) {
            tooltipElement.innerText = text;
        }
    }
    /**
     * Sadly that's the only way of doing in in IE11 and in lockerservice.
     */
    copyToClipboardFallback(text) {
        const el = document.createElement('textarea');
        el.value = text;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }
}
CopyToClipboard.ID = 'CopyToClipboard';
/**
 * The possible options for _ResultAction_.
 * @componentOptions
 */
CopyToClipboard.options = {
    icon: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].buildStringOption({ defaultValue: _utils_icons__WEBPACK_IMPORTED_MODULE_2__["copy"] }),
    tooltip: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].buildCustomOption(tooltip => tooltip, { defaultFunction: () => Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["l"])('CopyToClipboard_copy') }),
    successTooltip: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].buildCustomOption(tooltip => tooltip, { defaultFunction: () => Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["l"])('CopyToClipboard_copied') }),
    template: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].buildStringOption({ defaultValue: '${title}\n${clickUri}' })
};
coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["Initialization"].registerComponentFields(CopyToClipboard.ID, ['title', 'clickUri']);
coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["Initialization"].registerAutoCreateComponent(CopyToClipboard);
//# sourceMappingURL=CopyToClipboard.js.map

/***/ }),

/***/ "./node_modules/coveo-search-ui-extensions/bin/es6/components/CopyToClipboard/Strings.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/coveo-search-ui-extensions/bin/es6/components/CopyToClipboard/Strings.js ***!
  \***********************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_translation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/translation */ "./node_modules/coveo-search-ui-extensions/bin/es6/utils/translation.js");

_utils_translation__WEBPACK_IMPORTED_MODULE_0__["Translation"].register(_utils_translation__WEBPACK_IMPORTED_MODULE_0__["Language"].English, {
    CopyToClipboard_copy: 'Copy',
    CopyToClipboard_copied: 'Copied!'
});
//# sourceMappingURL=Strings.js.map

/***/ }),

/***/ "./node_modules/coveo-search-ui-extensions/bin/es6/components/ResultAction/ResultAction.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/coveo-search-ui-extensions/bin/es6/components/ResultAction/ResultAction.js ***!
  \*************************************************************************************************/
/*! exports provided: ResultAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultAction", function() { return ResultAction; });
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! coveo-search-ui */ "coveo-search-ui");
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__);

/**
 * The base class for all ResultAction components.
 * Its main responsibility is handling the visual elements of the Result Action.
 */
class ResultAction extends coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    /**
     * Construct a ResultAction component.
     * @param element The HTML element bound to this component.
     * @param options The options that can be provided to this component.
     * @param bindings The bindings, or environment within which this component exists.
     * @param queryResult The result of the query in which this resultAction exists.
     */
    constructor(element, options, bindings, queryResult) {
        super(element, ResultAction.ID, bindings);
        this.element = element;
        this.options = options;
        this.bindings = bindings;
        this.queryResult = queryResult;
        this.isInitialized = false;
        this.options = coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].initComponentOptions(element, ResultAction, options);
        this.queryResult = this.queryResult || this.resolveResult();
        // Hide until initialized.
        Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(this.element).addClass('coveo-hidden');
        this.bind.on(this.element, 'click', () => this.doAction());
    }
    /**
     * Initializes the component if it is not already initialized.
     */
    init() {
        if (!this.isInitialized) {
            this.show();
            this.isInitialized = true;
        }
        else {
            this.logger.debug('Attempted to initialize ResultAction that was already initialized.');
        }
    }
    /**
     * Deactivate the component if it is initialized.
     * @param e The reason for the deactivation.
     */
    deactivate(e) {
        Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(this.element).remove();
        this.logger.warn(e);
        this.isInitialized = false;
    }
    /**
     * Make the result action button visible.
     */
    show() {
        Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(this.element).removeClass('coveo-hidden');
        if (this.options.icon) {
            const icon = document.createElement('span');
            icon.innerHTML = this.options.icon;
            icon.className = 'coveo-icon';
            this.element.appendChild(icon);
        }
        if (this.options.tooltip) {
            const tooltip = document.createElement('span');
            tooltip.innerText = this.options.tooltip;
            tooltip.className = 'coveo-caption-for-icon';
            this.element.appendChild(tooltip);
        }
    }
}
ResultAction.ID = 'ResultAction';
/**
 * The possible options for _ResultAction_.
 * @componentOptions
 */
ResultAction.options = {
    /**
     * See {@link IResultActionOptions.icon}
     * Optional. You may instead provide the icon by appending it as a child element.
     */
    icon: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption(),
    /**
     * See {@link IResultActionOptions.tooltip}
     * Optional. If no tooltip is provided, the tooltip popup will not appear.
     */
    tooltip: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption()
};
//# sourceMappingURL=ResultAction.js.map

/***/ }),

/***/ "./node_modules/coveo-search-ui-extensions/bin/es6/components/ResultsFilter/Events.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/coveo-search-ui-extensions/bin/es6/components/ResultsFilter/Events.js ***!
  \********************************************************************************************/
/*! exports provided: ResultsFilterEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsFilterEvents", function() { return ResultsFilterEvents; });
/**
 * Events triggered by the **ResultsFilter** component.
 */
var ResultsFilterEvents;
(function (ResultsFilterEvents) {
    ResultsFilterEvents["Click"] = "click";
})(ResultsFilterEvents || (ResultsFilterEvents = {}));
//# sourceMappingURL=Events.js.map

/***/ }),

/***/ "./node_modules/coveo-search-ui-extensions/bin/es6/components/ResultsFilter/ResultsFilter.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/coveo-search-ui-extensions/bin/es6/components/ResultsFilter/ResultsFilter.js ***!
  \***************************************************************************************************/
/*! exports provided: ResultsFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsFilter", function() { return ResultsFilter; });
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! coveo-search-ui */ "coveo-search-ui");
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Events */ "./node_modules/coveo-search-ui-extensions/bin/es6/components/ResultsFilter/Events.js");
/* harmony import */ var _Strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Strings */ "./node_modules/coveo-search-ui-extensions/bin/es6/components/ResultsFilter/Strings.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



/**
 * The ResultsFilter component allows a user to click a checkbox to
 * search only for matching results.
 */
class ResultsFilter extends coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(element, options, bindings) {
        super(element, ResultsFilter.ID, bindings);
        this.element = element;
        this.options = options;
        this.bindings = bindings;
        this.options = coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].initComponentOptions(element, ResultsFilter, options);
        this.initialize();
        this.queryStateModel.registerNewAttribute(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["QueryStateModel"].getFacetId(ResultsFilter.ID), false);
        this.bind.onRootElement(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["QueryEvents"].buildingQuery, this.handleBuildingQuery.bind(this));
        this.bind.onQueryState('change:', coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["QueryStateModel"].getFacetId(ResultsFilter.ID), this.handleQueryStateChange.bind(this));
    }
    isSelected() {
        return this.checkbox && this.checkbox.isSelected();
    }
    toggle() {
        if (this.isSelected()) {
            this.checkbox.reset();
        }
        else {
            this.checkbox.select(true);
        }
    }
    initialize() {
        const mainSection = Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])('div', { className: 'CoveoFacet' });
        const headerSection = Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])('div', { className: 'coveo-facet-header' });
        const labelDiv = Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])('label', {
            className: 'coveo-facet-value-label-wrapper'
        }).el;
        headerSection.append(labelDiv);
        mainSection.append(headerSection.el);
        this.createCheckbox().then(checkbox => {
            this.checkbox = checkbox;
            labelDiv.appendChild(this.checkbox.getElement());
        });
        this.element.appendChild(mainSection.el);
    }
    createCheckbox() {
        return __awaiter(this, void 0, void 0, function* () {
            if (Coveo.Checkbox === undefined) {
                yield Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["load"])('Checkbox');
            }
            return new coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Checkbox"](this.handleCheckboxChange.bind(this), this.options.text);
        });
    }
    handleCheckboxChange(checkbox) {
        this.queryStateModel.set(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["QueryStateModel"].getFacetId(ResultsFilter.ID), this.checkbox.isSelected());
        this.triggerQuery();
        Coveo.$$(this.root).trigger(_Events__WEBPACK_IMPORTED_MODULE_1__["ResultsFilterEvents"].Click, { checked: this.checkbox.isSelected() });
    }
    triggerQuery() {
        this.usageAnalytics.logSearchEvent({ name: ResultsFilter.ID, type: 'misc' }, { filteredResults: this.isSelected() });
        this.queryController.executeQuery({ origin: this });
    }
    handleQueryStateChange(args) {
        if (args['value']) {
            this.checkbox.select(false);
        }
        else {
            this.checkbox.reset();
        }
    }
    handleBuildingQuery(args) {
        if (this.isSelected()) {
            const values = this.options.getValues();
            args.queryBuilder.advancedExpression.add(`@${this.options.field}=(${values.join(',')})`);
        }
    }
}
ResultsFilter.ID = 'ResultsFilter';
ResultsFilter.options = {
    text: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({
        defaultValue: Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])(`${ResultsFilter.ID}_Label`)
    }),
    field: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({
        defaultValue: 'urihash'
    }),
    getValues: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildCustomOption(name => () => new Array(), {
        defaultFunction: () => () => new Array()
    })
};
coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].registerAutoCreateComponent(ResultsFilter);
//# sourceMappingURL=ResultsFilter.js.map

/***/ }),

/***/ "./node_modules/coveo-search-ui-extensions/bin/es6/components/ResultsFilter/Strings.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/coveo-search-ui-extensions/bin/es6/components/ResultsFilter/Strings.js ***!
  \*********************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_translation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/translation */ "./node_modules/coveo-search-ui-extensions/bin/es6/utils/translation.js");

_utils_translation__WEBPACK_IMPORTED_MODULE_0__["Translation"].register(_utils_translation__WEBPACK_IMPORTED_MODULE_0__["Language"].English, {
    ResultsFilter_Label: 'Filter Results'
});
//# sourceMappingURL=Strings.js.map

/***/ }),

/***/ "./node_modules/coveo-search-ui-extensions/bin/es6/components/UserActions/ClickedDocumentList.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/coveo-search-ui-extensions/bin/es6/components/UserActions/ClickedDocumentList.js ***!
  \*******************************************************************************************************/
/*! exports provided: ClickedDocumentList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickedDocumentList", function() { return ClickedDocumentList; });
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! coveo-search-ui */ "coveo-search-ui");
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_UserProfileModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/UserProfileModel */ "./node_modules/coveo-search-ui-extensions/bin/es6/models/UserProfileModel.js");
/* harmony import */ var _ExpandableList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExpandableList */ "./node_modules/coveo-search-ui-extensions/bin/es6/components/UserActions/ExpandableList.js");
/* harmony import */ var _rest_UserProfilingEndpoint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../rest/UserProfilingEndpoint */ "./node_modules/coveo-search-ui-extensions/bin/es6/rest/UserProfilingEndpoint.js");
/* harmony import */ var _utils_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/icons */ "./node_modules/coveo-search-ui-extensions/bin/es6/utils/icons.js");
/* harmony import */ var _Strings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Strings */ "./node_modules/coveo-search-ui-extensions/bin/es6/components/UserActions/Strings.js");






/**
 * Display the list of the most recent clicked documents of a user.
 */
class ClickedDocumentList extends coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    /**
     * Create an instance of **ClickedDocumentList**. Initialize is needed the **UserProfileModel** and fetch user actions related to the **UserId**.
     *
     * @param element Element on which to bind the component.
     * @param options Initialization options of the component.
     * @param bindings Bindings of the Search-UI environment.
     */
    constructor(element, options, bindings) {
        super(element, ClickedDocumentList.ID, bindings);
        this.element = element;
        this.options = options;
        this.bindings = bindings;
        this.options = coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].initComponentOptions(element, ClickedDocumentList, options);
        if (!this.options.userId) {
            this.disable();
            return;
        }
        this.userProfileModel = Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["get"])(this.root, _models_UserProfileModel__WEBPACK_IMPORTED_MODULE_1__["UserProfileModel"]);
        this.userProfileModel.getActions(this.options.userId).then(actions => {
            this.sortedDocumentsList = actions
                .filter(action => action.document && action.type === _rest_UserProfilingEndpoint__WEBPACK_IMPORTED_MODULE_3__["UserActionType"].Click)
                .sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime())
                .reverse()
                .reduce(this.filterDuplicatesClickAction, [])
                .map(action => {
                action.document.searchInterface = this.searchInterface;
                return action.document;
            });
            this.render();
        }, this.logger.error.bind(this.logger));
    }
    filterDuplicatesClickAction(accumulator, action) {
        return !accumulator.find(existing => existing.raw.uri_hash === action.raw.uri_hash) ? [...accumulator, action] : accumulator;
    }
    render() {
        new _ExpandableList__WEBPACK_IMPORTED_MODULE_2__["ExpandableList"](this.element, this.sortedDocumentsList, {
            maximumItemsShown: this.sortedDocumentsList.length,
            minimumItemsShown: this.options.numberOfItems,
            transform: result => {
                coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["QueryUtils"].setStateObjectOnQueryResult(this.queryStateModel.get(), result);
                coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["QueryUtils"].setSearchInterfaceObjectOnQueryResult(this.searchInterface, result);
                return this.options.template.instantiateToElement(result, {
                    wrapInDiv: true,
                    checkCondition: true,
                    currentLayout: 'list',
                    responsiveComponents: this.searchInterface.responsiveComponents
                }).then(element => {
                    coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].automaticallyCreateComponentsInsideResult(element, result);
                    return element;
                });
            },
            listLabel: this.options.listLabel,
            messageWhenEmpty: Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])(`${ClickedDocumentList.ID}_no_clicked_documents`),
            showMoreMessage: Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])(`${ClickedDocumentList.ID}_more`),
            showLessMessage: Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])(`${ClickedDocumentList.ID}_less`)
        });
    }
}
/**
 * Identifier of the Search-UI component.
 */
ClickedDocumentList.ID = 'ClickedDocumentList';
/**
 * Default initialization options of the **ClickedDocumentList** class.
 */
ClickedDocumentList.options = {
    numberOfItems: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildNumberOption({
        defaultValue: 4,
        min: 1
    }),
    listLabel: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({
        defaultValue: 'Recent Clicked Documents'
    }),
    userId: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({ required: true }),
    template: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildTemplateOption({
        defaultValue: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["HtmlTemplate"].fromString(`<div class="coveo-list-row">
                    <div class="coveo-row-icon">${_utils_icons__WEBPACK_IMPORTED_MODULE_4__["duplicate"]}</div>
                    <a class="CoveoResultLink"/a>
                </div>`, {
            layout: 'list'
        })
    })
};
coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].registerAutoCreateComponent(ClickedDocumentList);
//# sourceMappingURL=ClickedDocumentList.js.map

/***/ }),

/***/ "./node_modules/coveo-search-ui-extensions/bin/es6/components/UserActions/ExpandableList.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/coveo-search-ui-extensions/bin/es6/components/UserActions/ExpandableList.js ***!
  \**************************************************************************************************/
/*! exports provided: ExpandableList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandableList", function() { return ExpandableList; });
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! coveo-search-ui */ "coveo-search-ui");
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/**
 * Display a list that expand when click on the more button.
 */
class ExpandableList {
    /**
     * Create an instance of the **ExpandableList** class.
     *
     * @param element Element on which to bind the component
     * @param items List of items to display.
     * @param options Initialization options.
     */
    constructor(element, items, options) {
        this.element = element;
        this.items = items;
        this.options = options;
        this.isOpen = false;
        this.options = this.parseOptions(options);
        coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Assert"].isNotUndefined(this.options.transform);
        coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Assert"].isNotNull(this.options.transform);
        this.proccessedItem = items.slice(0, this.options.maximumItemsShown).map(this.options.transform);
        this.visibleItems = this.proccessedItem.slice(0, this.options.minimumItemsShown);
        this.hiddenItems = this.proccessedItem.slice(this.options.minimumItemsShown, this.options.maximumItemsShown);
        this.render();
    }
    buildMoreButton() {
        const button = document.createElement('button');
        button.type = 'button';
        button.classList.add('coveo-more-less');
        button.addEventListener('click', this.toggleExpansion.bind(this));
        this.button = button;
        return button;
    }
    isSomeItemsHidden() {
        return !(this.options.maximumItemsShown === this.options.minimumItemsShown || this.hiddenItems.length === 0);
    }
    parseOptions(options) {
        const moreOrEqualThan = (mininum, value) => (value >= mininum ? value : mininum);
        let parsedOptions = Object.assign({}, options);
        parsedOptions.showLessMessage = parsedOptions.showLessMessage || ExpandableList.DEFAULTS.LESS_LABEL;
        parsedOptions.showMoreMessage = parsedOptions.showMoreMessage || ExpandableList.DEFAULTS.MORE_LABEL;
        parsedOptions.minimumItemsShown = parsedOptions.minimumItemsShown || ExpandableList.DEFAULTS.MINIMUM_ITEMS_SHOWN;
        parsedOptions.maximumItemsShown = parsedOptions.maximumItemsShown || ExpandableList.DEFAULTS.MAXIMUM_ITEMS_SHOWN;
        parsedOptions.minimumItemsShown = moreOrEqualThan(parsedOptions.minimumItemsShown, 1);
        parsedOptions.maximumItemsShown = moreOrEqualThan(parsedOptions.maximumItemsShown, parsedOptions.minimumItemsShown);
        parsedOptions.listLabel = parsedOptions.listLabel || ExpandableList.DEFAULTS.LIST_LABEL;
        return parsedOptions;
    }
    render() {
        this.element.classList.add(ExpandableList.COMPONENT_CLASS);
        const header = document.createElement('h2');
        header.classList.add('coveo-title');
        header.innerText = this.options.listLabel;
        const list = document.createElement('ol');
        list.classList.add('coveo-list');
        this.element.appendChild(header);
        this.element.appendChild(list);
        if (this.isSomeItemsHidden()) {
            this.element.appendChild(this.buildMoreButton());
        }
        if (this.items.length === 0) {
            this.renderEmpty();
        }
        else {
            this.fold();
        }
    }
    renderEmpty() {
        const list = this.element.querySelector('.coveo-list');
        const li = document.createElement('li');
        li.classList.add(ExpandableList.EMPTY_CLASS);
        li.innerText = this.options.messageWhenEmpty || '';
        list.appendChild(li);
    }
    toggleExpansion() {
        if (this.isOpen) {
            this.fold();
        }
        else {
            this.unfold();
        }
        this.isOpen = !this.isOpen;
    }
    fold() {
        this.update(this.visibleItems, this.options.showMoreMessage);
    }
    unfold() {
        this.update([...this.visibleItems, ...this.hiddenItems], this.options.showLessMessage);
    }
    update(items, buttonText) {
        return __awaiter(this, void 0, void 0, function* () {
            const list = this.element.querySelector('.coveo-list');
            const listItems = (yield Promise.all(items)).map(itemElement => {
                const listItem = document.createElement('li');
                listItem.appendChild(itemElement);
                return listItem;
            });
            list.innerHTML = '';
            listItems.forEach(itemElement => {
                Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(list).append(itemElement);
            });
            if (this.button) {
                this.button.innerText = buttonText;
            }
        });
    }
}
ExpandableList.DEFAULTS = Object.freeze({
    LESS_LABEL: 'Show Less',
    MORE_LABEL: 'Show More',
    LIST_LABEL: 'Items',
    MAXIMUM_ITEMS_SHOWN: 8,
    MINIMUM_ITEMS_SHOWN: 4
});
ExpandableList.COMPONENT_CLASS = 'coveo-expandable-list';
ExpandableList.EMPTY_CLASS = 'coveo-empty';
//# sourceMappingURL=ExpandableList.js.map

/***/ }),

/***/ "./node_modules/coveo-search-ui-extensions/bin/es6/components/UserActions/QueryList.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/coveo-search-ui-extensions/bin/es6/components/UserActions/QueryList.js ***!
  \*********************************************************************************************/
/*! exports provided: QueryList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryList", function() { return QueryList; });
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! coveo-search-ui */ "coveo-search-ui");
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_UserProfileModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/UserProfileModel */ "./node_modules/coveo-search-ui-extensions/bin/es6/models/UserProfileModel.js");
/* harmony import */ var _ExpandableList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExpandableList */ "./node_modules/coveo-search-ui-extensions/bin/es6/components/UserActions/ExpandableList.js");
/* harmony import */ var _utils_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/icons */ "./node_modules/coveo-search-ui-extensions/bin/es6/utils/icons.js");
/* harmony import */ var _Strings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Strings */ "./node_modules/coveo-search-ui-extensions/bin/es6/components/UserActions/Strings.js");





const DEFAULT_TRANSFORMATION = () => (query) => {
    const container = document.createElement('div');
    container.classList.add('coveo-list-row');
    const icon = document.createElement('div');
    icon.classList.add('coveo-row-icon');
    icon.innerHTML = _utils_icons__WEBPACK_IMPORTED_MODULE_3__["search"];
    const link = document.createElement('a');
    link.classList.add('coveo-link');
    link.innerHTML = query;
    container.appendChild(icon);
    container.appendChild(link);
    return Promise.resolve(container);
};
/**
 * Display the list of the most recent queries of a user.
 */
class QueryList extends coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    /**
     * Create an instance of **QueryList**. Initialize is needed the **UserProfileModel** and fetch user actions related to the **UserId**.
     *
     * @param element Element on which to bind the component.
     * @param options Initialization options of the component.
     * @param bindings Bindings of the Search-UI environment.
     */
    constructor(element, options, bindings) {
        super(element, QueryList.ID, bindings);
        this.element = element;
        this.options = options;
        this.bindings = bindings;
        this.options = coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].initComponentOptions(element, QueryList, options);
        if (!this.options.userId) {
            this.disable();
            return;
        }
        this.userProfileModel = Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["get"])(this.root, _models_UserProfileModel__WEBPACK_IMPORTED_MODULE_1__["UserProfileModel"]);
        this.userProfileModel.getActions(this.options.userId).then(actions => {
            this.sortedQueryList = [...actions]
                .filter(action => action.query)
                .sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime())
                .reverse()
                .map(action => action.query)
                .reduce(this.removeDuplicateQueries, []);
            this.render();
        }, this.logger.error.bind(this.logger));
    }
    removeDuplicateQueries(acc, query) {
        return acc.indexOf(query) === -1 ? [...acc, query] : acc;
    }
    render() {
        new _ExpandableList__WEBPACK_IMPORTED_MODULE_2__["ExpandableList"](this.element, this.sortedQueryList, {
            maximumItemsShown: this.sortedQueryList.length,
            minimumItemsShown: this.options.numberOfItems,
            transform: (query) => this.options.transform(query).then(this.makeClickable.bind(this, query)),
            listLabel: this.options.listLabel,
            messageWhenEmpty: Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])(`${QueryList.ID}_no_queries`),
            showMoreMessage: Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])(`${QueryList.ID}_more`),
            showLessMessage: Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])(`${QueryList.ID}_less`)
        });
    }
    /**
     * Make a list item element generate a query when click if an omnibox is present.
     * @param query The query to generate.
     * @param listItem  The list item element.
     */
    makeClickable(query, listItem) {
        const omniboxElement = this.root.querySelector('.CoveoOmnibox');
        if (omniboxElement != null) {
            listItem.addEventListener('click', () => {
                Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["get"])(omniboxElement, coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Omnibox"], true).setText(query);
                this.usageAnalytics.logSearchEvent({ name: 'userActionsSubmit', type: 'User Actions' }, {});
                this.queryController.executeQuery();
            });
            listItem.style.cursor = 'pointer';
        }
        return listItem;
    }
}
/**
 * Identifier of the Search-UI component.
 */
QueryList.ID = 'QueryList';
/**
 * Default initialization options of the **QueryList** class.
 */
QueryList.options = {
    numberOfItems: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildNumberOption({
        defaultValue: 4,
        min: 1,
        required: true
    }),
    listLabel: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({
        defaultValue: 'Recent Queries'
    }),
    transform: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildCustomOption(DEFAULT_TRANSFORMATION, {
        defaultValue: DEFAULT_TRANSFORMATION()
    }),
    userId: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({ required: true })
};
coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].registerAutoCreateComponent(QueryList);
//# sourceMappingURL=QueryList.js.map

/***/ }),

/***/ "./node_modules/coveo-search-ui-extensions/bin/es6/components/UserActions/ResponsiveUserActions.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/coveo-search-ui-extensions/bin/es6/components/UserActions/ResponsiveUserActions.js ***!
  \*********************************************************************************************************/
/*! exports provided: ResponsiveUserActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveUserActions", function() { return ResponsiveUserActions; });
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! coveo-search-ui */ "coveo-search-ui");
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UserActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserActions */ "./node_modules/coveo-search-ui-extensions/bin/es6/components/UserActions/UserActions.js");


/**
 * Handle the responsive button creation and positionning.
 */
class ResponsiveUserActions {
    /**
     * Create a **ResponsiveUserActions** instance.
     *
     * @param root The root of the interface.
     * @param ID Identifier of the **ResponsiveUserActions**.
     * @param _options _unused parameter_.
     */
    constructor(root, ID, _options) {
        this.root = root;
        this.ID = ID;
    }
    /**
     * Register the **component** to the **ResponsiveComponentsManager**.
     *
     * @param root The root of the interface.
     * @param component The component to register as a responsive component.
     */
    static init(root, component) {
        coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ResponsiveComponentsManager"].register(ResponsiveUserActions, Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(root), _UserActions__WEBPACK_IMPORTED_MODULE_1__["UserActions"].ID, component, {});
    }
    /**
     * Register the user action component as a responsive component.
     *
     * @param component The component to register as a responsive component.
     */
    registerComponent(component) {
        if (!this.userActions && component.constructor.ID === _UserActions__WEBPACK_IMPORTED_MODULE_1__["UserActions"].ID) {
            this.userActions = component;
            this.buildDropdownHeader(this.userActions.options.buttonLabel);
            return true;
        }
        return false;
    }
    /**
     * On resize, will place the user actions button in the Dropdown Header Wrapper Section.
     */
    handleResizeEvent() {
        const wrapper = Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(this.root).find(`.${coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ResponsiveComponentsManager"].DROPDOWN_HEADER_WRAPPER_CSS_CLASS}`);
        if (wrapper != null) {
            Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(wrapper).append(this.dropdownHeader.element.el);
        }
    }
    /**
     * Always return true because the component always need a button.
     */
    needDropdownWrapper() {
        return true;
    }
    buildDropdownHeader(label) {
        // Create a button.
        const button = document.createElement('a');
        const content = document.createElement('p');
        content.innerText = label;
        button.appendChild(content);
        this.dropdownHeader = new coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ResponsiveDropdownHeader"]('user-actions', Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(button));
        this.dropdownHeader.element.on('click', () => {
            this.userActions.toggle();
        });
    }
}
//# sourceMappingURL=ResponsiveUserActions.js.map

/***/ }),

/***/ "./node_modules/coveo-search-ui-extensions/bin/es6/components/UserActions/Strings.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/coveo-search-ui-extensions/bin/es6/components/UserActions/Strings.js ***!
  \*******************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_translation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/translation */ "./node_modules/coveo-search-ui-extensions/bin/es6/utils/translation.js");

_utils_translation__WEBPACK_IMPORTED_MODULE_0__["Translation"].register(_utils_translation__WEBPACK_IMPORTED_MODULE_0__["Language"].English, {
    UserActions_no_actions: 'No actions available for this user',
    UserActions_enable_prompt: 'The User Action feature is not activated for your organization.\nTo activate it, contact Coveo Support.',
    QueryList_more: 'Show More',
    QueryList_less: 'Show Less',
    QueryList_no_queries: 'No queries made by this user',
    ClickedDocumentList_more: 'Show More',
    ClickedDocumentList_less: 'Show Less',
    ClickedDocumentList_no_clicked_documents: 'No document clicked by this user',
    UserActivity_start_date: 'Start Date',
    UserActivity_start_time: 'Start Time',
    UserActivity_duration: 'Duration',
    UserActivity_other_event: 'Other Event',
    UserActivity_other_events: 'Other Events',
    UserActivity_search: 'Query',
    UserActivity_query: 'User Query',
    UserActivity_click: 'Clicked Document',
    UserActivity_view: 'Page View',
    UserActivity_custom: 'Custom Action'
});
//# sourceMappingURL=Strings.js.map

/***/ }),

/***/ "./node_modules/coveo-search-ui-extensions/bin/es6/components/UserActions/UserActions.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/coveo-search-ui-extensions/bin/es6/components/UserActions/UserActions.js ***!
  \***********************************************************************************************/
/*! exports provided: UserActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserActions", function() { return UserActions; });
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! coveo-search-ui */ "coveo-search-ui");
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ResponsiveUserActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResponsiveUserActions */ "./node_modules/coveo-search-ui-extensions/bin/es6/components/UserActions/ResponsiveUserActions.js");
/* harmony import */ var _utils_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/icons */ "./node_modules/coveo-search-ui-extensions/bin/es6/utils/icons.js");
/* harmony import */ var _ClickedDocumentList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ClickedDocumentList */ "./node_modules/coveo-search-ui-extensions/bin/es6/components/UserActions/ClickedDocumentList.js");
/* harmony import */ var _QueryList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./QueryList */ "./node_modules/coveo-search-ui-extensions/bin/es6/components/UserActions/QueryList.js");
/* harmony import */ var _UserActivity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UserActivity */ "./node_modules/coveo-search-ui-extensions/bin/es6/components/UserActions/UserActivity.js");
/* harmony import */ var _Index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Index */ "./node_modules/coveo-search-ui-extensions/bin/es6/Index.js");
/* harmony import */ var _Strings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Strings */ "./node_modules/coveo-search-ui-extensions/bin/es6/components/UserActions/Strings.js");
/* harmony import */ var _ViewedByCustomer_ViewedByCustomer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ViewedByCustomer/ViewedByCustomer */ "./node_modules/coveo-search-ui-extensions/bin/es6/components/ViewedByCustomer/ViewedByCustomer.js");









var ResultLayoutType;
(function (ResultLayoutType) {
    ResultLayoutType["LIST"] = "list";
    ResultLayoutType["TABLE"] = "table";
    ResultLayoutType["CARD"] = "card";
})(ResultLayoutType || (ResultLayoutType = {}));
/**
 * Display a panel that contains a summary of a user session and that also contains detailed information about user actions.
 */
class UserActions extends coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    /**
     * Create an instance of the **UserActions** class. Initialize is needed the **UserProfileModel** and fetch user actions related to the **UserId**.
     *
     * @param element Element on which to bind the component.
     * @param options Initialization options of the component.
     * @param bindings Bindings of the Search-UI environment.
     */
    constructor(element, options, bindings) {
        super(element, UserActions.ID, bindings);
        this.element = element;
        this.options = options;
        this.bindings = bindings;
        this.options = coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].initComponentOptions(element, UserActions, options);
        if (!this.options.userId) {
            this.disable();
            return;
        }
        if (this.options.viewedByCustomer) {
            this.showViewedByCustomer();
        }
        this.tagViewsOfUser();
        if (!options.hidden) {
            _ResponsiveUserActions__WEBPACK_IMPORTED_MODULE_1__["ResponsiveUserActions"].init(this.root, this);
            this.bind.onRootElement(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["QueryEvents"].newQuery, () => this.hide());
            this.hide();
        }
    }
    /**
     * Collapse the panel.
     */
    hide() {
        if (this.isOpened) {
            Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["get"])(this.root, _Index__WEBPACK_IMPORTED_MODULE_6__["UserProfileModel"]).deleteActions(this.options.userId);
            this.root.classList.remove(UserActions.USER_ACTION_OPENED);
            this.isOpened = false;
        }
    }
    /**
     * Open the panel.
     */
    show() {
        if (!this.isOpened) {
            Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["get"])(this.root, _Index__WEBPACK_IMPORTED_MODULE_6__["UserProfileModel"])
                .getActions(this.options.userId)
                .then(actions => (actions.length > 0 ? this.render() : this.renderNoActions()))
                .catch(e => (e && e.statusCode === 404 ? this.renderEnablePrompt() : this.renderNoActions()));
            this.bindings.usageAnalytics.logCustomEvent({ name: 'openUserActions', type: 'User Actions' }, {}, this.element);
            this.root.classList.add(UserActions.USER_ACTION_OPENED);
            this.isOpened = true;
        }
    }
    /**
     * Toggle the visibility of the panel.
     */
    toggle() {
        if (this.isOpened) {
            this.hide();
        }
        else {
            this.show();
        }
    }
    buildAccordionHeader(title) {
        const div = document.createElement('div');
        div.classList.add('coveo-accordion-header');
        const headerTitle = document.createElement('div');
        headerTitle.classList.add('coveo-accordion-header-title');
        headerTitle.innerText = title;
        const arrow = document.createElement('div');
        arrow.classList.add('coveo-arrow-down');
        arrow.innerHTML = _utils_icons__WEBPACK_IMPORTED_MODULE_2__["arrowDown"];
        div.appendChild(headerTitle);
        div.appendChild(arrow);
        return div;
    }
    buildAccordion(title, elements) {
        const div = document.createElement('div');
        div.classList.add('coveo-accordion');
        const header = this.buildAccordionHeader(title);
        const foldable = document.createElement('div');
        foldable.classList.add('coveo-accordion-foldable');
        elements.forEach(el => foldable.appendChild(el));
        div.appendChild(header);
        div.appendChild(foldable);
        header.addEventListener('click', () => {
            if (div.classList.contains('coveo-folded')) {
                div.classList.remove('coveo-folded');
            }
            else {
                div.classList.add('coveo-folded');
            }
        });
        return div;
    }
    buildCoveoElement(klass) {
        const el = document.createElement('div');
        el.classList.add(`Coveo${klass.ID}`);
        return el;
    }
    /**
     * Initialize child Search-UI component and pass down critical options.
     *
     * @param element Parent element of each child that would be initialize.
     */
    initializeSearchUIComponents(element) {
        const originalOptions = this.searchInterface.options.originalOptionsObject;
        coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].automaticallyCreateComponentsInside(element, {
            options: Object.assign(Object.assign({}, originalOptions), { QueryList: Object.assign(Object.assign({}, originalOptions.QueryList), { userId: this.options.userId }), ClickedDocumentList: Object.assign(Object.assign({}, originalOptions.ClickedDocumentList), { userId: this.options.userId }), UserActivity: Object.assign(Object.assign({}, originalOptions.UserActivity), { userId: this.options.userId }) }),
            bindings: this.bindings
        });
    }
    render() {
        const element = document.createElement('div');
        const summarySection = this.buildAccordion(this.options.summaryLabel, [
            this.buildCoveoElement(_ClickedDocumentList__WEBPACK_IMPORTED_MODULE_3__["ClickedDocumentList"]),
            this.buildCoveoElement(_QueryList__WEBPACK_IMPORTED_MODULE_4__["QueryList"])
        ]);
        summarySection.classList.add(`coveo-summary`);
        const detailsSection = this.buildAccordion(this.options.activityLabel, [this.buildCoveoElement(_UserActivity__WEBPACK_IMPORTED_MODULE_5__["UserActivity"])]);
        detailsSection.classList.add('coveo-details');
        element.appendChild(summarySection);
        element.appendChild(detailsSection);
        this.initializeSearchUIComponents(element);
        this.element.innerHTML = '';
        this.element.appendChild(element);
    }
    renderNoActions() {
        const element = document.createElement('div');
        element.classList.add('coveo-no-actions');
        element.innerText = Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])(`${UserActions.ID}_no_actions`);
        this.element.innerHTML = '';
        this.element.appendChild(element);
    }
    renderEnablePrompt() {
        const element = document.createElement('div');
        element.classList.add('coveo-enable-prompt');
        element.innerText = Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])(`${UserActions.ID}_enable_prompt`);
        this.element.innerHTML = '';
        this.element.appendChild(element);
    }
    showViewedByCustomer() {
        this.bind.onRootElement(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ResultListEvents"].newResultDisplayed, (args) => {
            if (Boolean(args.item.getElementsByClassName('CoveoViewedByCustomer').length)) {
                return;
            }
            if (this.inferResultListLayout() !== ResultLayoutType.TABLE) {
                const resultLastRow = '.coveo-result-row:last-child';
                args.item
                    .querySelector(resultLastRow)
                    .parentNode.appendChild(_ViewedByCustomer_ViewedByCustomer__WEBPACK_IMPORTED_MODULE_8__["ViewedByCustomer"].getViewedByCustomerResultRowDom(this.bindings, args.result));
            }
        });
    }
    tagViewsOfUser() {
        Coveo.$$(this.root).on('buildingQuery', (e, args) => {
            try {
                args.queryBuilder.userActions = {
                    tagViewsOfUser: this.options.userId
                };
            }
            catch (e) {
                this.logger.warn("CreatedBy Email wasn't found", e);
            }
        });
    }
    inferResultListLayout() {
        const resultLists = this.root.querySelectorAll(`${coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Component"].computeSelectorForType(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ResultList"].ID)}:not(.coveo-hidden)`);
        const resultListLayoutTypes = [ResultLayoutType.CARD, ResultLayoutType.TABLE, ResultLayoutType.LIST];
        if (resultLists.length > 0 && resultListLayoutTypes.indexOf(resultLists[0].dataset.layout) !== -1) {
            return resultLists[0].dataset.layout;
        }
        return ResultLayoutType.LIST;
    }
}
/**
 * Identifier of the Search-UI component.
 */
UserActions.ID = 'UserActions';
/**
 * Default initialization options of the **UserActions** class.
 */
UserActions.options = {
    userId: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({ required: true }),
    buttonLabel: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({
        defaultValue: 'User Actions'
    }),
    summaryLabel: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({
        defaultValue: 'Session Summary'
    }),
    activityLabel: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({
        defaultValue: "User's Recent Activity"
    }),
    viewedByCustomer: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildBooleanOption({
        defaultValue: true
    }),
    hidden: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildBooleanOption({
        defaultValue: false
    })
};
UserActions.USER_ACTION_OPENED = 'coveo-user-actions-opened';
coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].registerAutoCreateComponent(UserActions);
//# sourceMappingURL=UserActions.js.map

/***/ }),

/***/ "./node_modules/coveo-search-ui-extensions/bin/es6/components/UserActions/UserActivity.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/coveo-search-ui-extensions/bin/es6/components/UserActions/UserActivity.js ***!
  \************************************************************************************************/
/*! exports provided: UserActivity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserActivity", function() { return UserActivity; });
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! coveo-search-ui */ "coveo-search-ui");
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/time */ "./node_modules/coveo-search-ui-extensions/bin/es6/utils/time.js");
/* harmony import */ var _models_UserProfileModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/UserProfileModel */ "./node_modules/coveo-search-ui-extensions/bin/es6/models/UserProfileModel.js");
/* harmony import */ var _utils_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/icons */ "./node_modules/coveo-search-ui-extensions/bin/es6/utils/icons.js");
/* harmony import */ var _rest_UserProfilingEndpoint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../rest/UserProfilingEndpoint */ "./node_modules/coveo-search-ui-extensions/bin/es6/rest/UserProfilingEndpoint.js");
/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/events */ "./node_modules/coveo-search-ui-extensions/bin/es6/utils/events.js");
/* harmony import */ var _Strings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Strings */ "./node_modules/coveo-search-ui-extensions/bin/es6/components/UserActions/Strings.js");







const MAIN_CLASS = 'coveo-user-activity';
const CELL_CLASS = 'coveo-cell';
const TITLE_CLASS = 'coveo-title';
const DATA_CLASS = 'coveo-data';
const TIMESTAMP_CLASS = 'coveo-footer';
const HEADER_CLASS = 'coveo-header';
const ACTIVITY_CLASS = 'coveo-activity';
const CLICK_EVENT_CLASS = 'coveo-click';
const SEARCH_EVENT_CLASS = 'coveo-search';
const CUSTOM_EVENT_CLASS = 'coveo-custom';
const VIEW_EVENT_CLASS = 'coveo-view';
const FOLDED_CLASS = 'coveo-folded';
const TEXT_CLASS = 'coveo-text';
const ICON_CLASS = 'coveo-icon';
const BUBBLE_CLASS = 'coveo-bubble';
class UserActivity extends coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    /**
     * Create an instance of the **UserActivity** class. Initialize is needed the **UserProfileModel** and fetch user actions related to the **UserId**.
     *
     * @param element Element on which to bind the component.
     * @param options Initialization options of the component.
     * @param bindings Bindings of the Search-UI environment.
     */
    constructor(element, options, bindings) {
        super(element, UserActivity.ID, bindings);
        this.element = element;
        this.options = options;
        this.bindings = bindings;
        this.options = coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].initComponentOptions(element, UserActivity, options);
        if (!this.options.userId) {
            this.disable();
            return;
        }
        this.userProfileModel = Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["get"])(this.root, _models_UserProfileModel__WEBPACK_IMPORTED_MODULE_2__["UserProfileModel"]);
        this.userProfileModel.getActions(this.options.userId).then(actions => {
            this.actions = actions.sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());
            this.foldedActions = this.actions.filter(action => !this.isUnfoldByDefault(action));
            this.render();
        });
    }
    isUnfoldByDefault(action) {
        const isCustom = action.type === _rest_UserProfilingEndpoint__WEBPACK_IMPORTED_MODULE_4__["UserActionType"].Custom;
        const isSearch = action.type === _rest_UserProfilingEndpoint__WEBPACK_IMPORTED_MODULE_4__["UserActionType"].Search;
        const isClick = action.type === _rest_UserProfilingEndpoint__WEBPACK_IMPORTED_MODULE_4__["UserActionType"].Click;
        const cause = (isCustom && action.raw.event_value) || (isSearch && action.raw.cause) || '';
        const useInclude = this.options.unfoldInclude && this.options.unfoldInclude.length > 0;
        const isExcluded = (isSearch || isCustom) && this.options.unfoldExclude.indexOf(cause) !== -1;
        const isIncluded = (isSearch || isCustom) && this.options.unfoldInclude.indexOf(cause) !== -1;
        return isClick || (useInclude && isIncluded) || (!useInclude && !isExcluded);
    }
    render() {
        const panel = document.createElement('div');
        panel.classList.add(MAIN_CLASS);
        const timestampSection = document.createElement('div');
        timestampSection.classList.add(HEADER_CLASS);
        this.buildTimestampSection().forEach(el => timestampSection.appendChild(el));
        const activitySection = this.buildActivitySection();
        activitySection.classList.add(ACTIVITY_CLASS);
        panel.appendChild(timestampSection);
        panel.appendChild(activitySection);
        this.element.innerHTML = '';
        this.element.appendChild(panel);
    }
    buildActivitySection() {
        const list = document.createElement('ol');
        this.buildListItems(this.actions).forEach((listItem, index, array) => {
            list.appendChild(listItem);
            if (index < array.length - 1) {
                list.appendChild(this.buildBubble());
            }
        });
        return list;
    }
    buildBubble() {
        const li = document.createElement('li');
        li.classList.add(BUBBLE_CLASS);
        return li;
    }
    buildListItems(actions) {
        const nbUnfoldedActions = this.actions.length - this.foldedActions.length;
        return actions
            .reduce((acc, action) => {
            const last = acc[acc.length - 1];
            if (this.foldedActions.indexOf(action) !== -1 && nbUnfoldedActions > 0) {
                if (Array.isArray(last)) {
                    last.push(action);
                    return [...acc];
                }
                else {
                    return [...acc, [action]];
                }
            }
            else {
                return [...acc, action];
            }
        }, [])
            .map(item => {
            if (Array.isArray(item)) {
                return this.buildFolded(item);
            }
            else {
                return this.buildListItem(item);
            }
        });
    }
    buildListItem(action) {
        let li;
        switch (action.type) {
            case _rest_UserProfilingEndpoint__WEBPACK_IMPORTED_MODULE_4__["UserActionType"].Click:
                li = this.buildClickEvent(action);
                break;
            case _rest_UserProfilingEndpoint__WEBPACK_IMPORTED_MODULE_4__["UserActionType"].Search:
                li = this.buildSearchEvent(action);
                break;
            case _rest_UserProfilingEndpoint__WEBPACK_IMPORTED_MODULE_4__["UserActionType"].PageView:
                li = this.buildViewEvent(action);
                break;
            default:
            case _rest_UserProfilingEndpoint__WEBPACK_IMPORTED_MODULE_4__["UserActionType"].Custom:
                li = this.buildCustomEvent(action);
                break;
        }
        return li;
    }
    buildFolded(actions) {
        const li = document.createElement('li');
        li.classList.add(FOLDED_CLASS);
        const hr = document.createElement('hr');
        const span = document.createElement('span');
        span.classList.add(TEXT_CLASS);
        span.innerText = `${actions.length} ${actions.length > 1 ? Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])(`${UserActivity.ID}_other_events`) : Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])(`${UserActivity.ID}_other_event`)}`;
        hr.appendChild(span);
        li.addEventListener('click', () => {
            this.foldedActions = this.foldedActions.filter(action => actions.indexOf(action) === -1);
            this.render();
        });
        li.appendChild(hr);
        return li;
    }
    buildClickEvent(action) {
        const li = document.createElement('li');
        li.classList.add(CLICK_EVENT_CLASS);
        const dataElement = document.createElement('a');
        dataElement.classList.add(DATA_CLASS);
        dataElement.innerText = (action.document && action.document.title) || '';
        dataElement.href = (action.document && action.document.clickUri) || '';
        document.createAttributeNS('svg', 'svg');
        li.appendChild(this.buildTitleElement(action));
        if (action.document) {
            li.appendChild(dataElement);
        }
        li.appendChild(this.buildTimestampElement(action));
        li.appendChild(this.buildIcon(_utils_icons__WEBPACK_IMPORTED_MODULE_3__["duplicate"]));
        return li;
    }
    buildSearchEvent(action) {
        const li = document.createElement('li');
        li.classList.add(SEARCH_EVENT_CLASS);
        li.appendChild(this.buildTitleElement(action));
        if (action.query) {
            const dataElement = document.createElement('div');
            dataElement.classList.add(DATA_CLASS);
            dataElement.innerText = action.query || '';
            li.appendChild(dataElement);
        }
        li.appendChild(this.buildTimestampElement(action));
        li.appendChild(this.buildIcon(_utils_icons__WEBPACK_IMPORTED_MODULE_3__["search"]));
        return li;
    }
    buildViewEvent(action) {
        const li = document.createElement('li');
        li.classList.add(VIEW_EVENT_CLASS);
        const dataElement = document.createElement('div');
        dataElement.classList.add(DATA_CLASS);
        dataElement.innerText = `${action.raw.content_id_key}: ${action.raw.content_id_value}`;
        li.appendChild(this.buildTitleElement(action));
        li.appendChild(dataElement);
        li.appendChild(this.buildTimestampElement(action));
        li.appendChild(this.buildIcon(_utils_icons__WEBPACK_IMPORTED_MODULE_3__["view"]));
        return li;
    }
    buildCustomEvent(action) {
        const li = document.createElement('li');
        li.classList.add(CUSTOM_EVENT_CLASS);
        const titleElem = document.createElement('div');
        titleElem.classList.add(TITLE_CLASS);
        titleElem.innerText = `${Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])(action.raw.event_type || `${UserActivity.ID}_custom`)}`;
        const dataElement = document.createElement('div');
        dataElement.classList.add(DATA_CLASS);
        dataElement.innerText = action.raw.event_value || '';
        li.appendChild(titleElem);
        li.appendChild(dataElement);
        li.appendChild(this.buildTimestampElement(action));
        li.appendChild(this.buildIcon(_utils_icons__WEBPACK_IMPORTED_MODULE_3__["dot"]));
        return li;
    }
    buildTimestampElement(action) {
        const el = document.createElement('div');
        el.classList.add(TIMESTAMP_CLASS);
        el.innerText = `${Object(_utils_time__WEBPACK_IMPORTED_MODULE_1__["formatTime"])(action.timestamp)}${(action.raw.origin_level_1 && ` - ${action.raw.origin_level_1}`) || ''}`;
        return el;
    }
    buildTitleElement(action) {
        const title = this.isManualSubmitAction(action) ? 'query' : action.type.toLowerCase();
        const el = document.createElement('div');
        el.classList.add(TITLE_CLASS);
        el.innerText = Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])(`${UserActivity.ID}_${title}`);
        return el;
    }
    buildIcon(icon) {
        const el = document.createElement('div');
        el.classList.add(ICON_CLASS);
        el.innerHTML = icon;
        return el;
    }
    buildTimestampSection() {
        const startDate = this.actions[0];
        const endDate = this.actions[this.actions.length - 1];
        const duration = endDate.timestamp.getTime() - startDate.timestamp.getTime();
        return [
            this.buildTimestampCell({ title: Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])(`${UserActivity.ID}_start_date`), data: Object(_utils_time__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(startDate.timestamp) }),
            this.buildTimestampCell({ title: Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])(`${UserActivity.ID}_start_time`), data: Object(_utils_time__WEBPACK_IMPORTED_MODULE_1__["formatTime"])(startDate.timestamp) }),
            this.buildTimestampCell({ title: Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])(`${UserActivity.ID}_duration`), data: Object(_utils_time__WEBPACK_IMPORTED_MODULE_1__["formatTimeInterval"])(duration) })
        ];
    }
    buildTimestampCell({ title, data }) {
        const cell = document.createElement('div');
        cell.classList.add(CELL_CLASS);
        const titleElement = document.createElement('div');
        titleElement.classList.add(TITLE_CLASS);
        titleElement.innerText = title;
        const dataElement = document.createElement('div');
        dataElement.classList.add(DATA_CLASS);
        dataElement.innerText = data;
        cell.appendChild(titleElement);
        cell.appendChild(dataElement);
        return cell;
    }
    /**
     * Dertermine if an action is a manual search submit.
     * A manual search submit is a Search event that has a query expression and that the cause is one of the above:
     * + **omniboxAnalytics**
     * + **userActionsSubmit**
     * + **omniboxFromLink**
     * + **searchboxAsYouType**
     * + **searchboxSubmit**
     * + **searchFromLink**
     * @param action Action that will be tested.
     */
    isManualSubmitAction(action) {
        return action.type === _rest_UserProfilingEndpoint__WEBPACK_IMPORTED_MODULE_4__["UserActionType"].Search && action.raw.query_expression && _utils_events__WEBPACK_IMPORTED_MODULE_5__["MANUAL_SEARCH_EVENT_CAUSE"].indexOf(action.raw.cause) !== -1;
    }
}
UserActivity.ID = 'UserActivity';
UserActivity.options = {
    userId: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({ required: true }),
    unfoldInclude: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildListOption({
        defaultValue: [
            'didyoumeanAutomatic',
            'didyoumeanClick',
            'omniboxAnalytics',
            'omniboxFromLink',
            'searchboxSubmit',
            'searchFromLink',
            'userActionsSubmit'
        ],
        required: true
    }),
    unfoldExclude: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildListOption({
        defaultValue: [],
        required: true
    })
};
coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].registerAutoCreateComponent(UserActivity);
//# sourceMappingURL=UserActivity.js.map

/***/ }),

/***/ "./node_modules/coveo-search-ui-extensions/bin/es6/components/ViewedByCustomer/Strings.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/coveo-search-ui-extensions/bin/es6/components/ViewedByCustomer/Strings.js ***!
  \************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_translation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/translation */ "./node_modules/coveo-search-ui-extensions/bin/es6/utils/translation.js");

_utils_translation__WEBPACK_IMPORTED_MODULE_0__["Translation"].register(_utils_translation__WEBPACK_IMPORTED_MODULE_0__["Language"].English, {
    ViewedByCustomer_DefaultLabel: 'Viewed by Customer'
});
//# sourceMappingURL=Strings.js.map

/***/ }),

/***/ "./node_modules/coveo-search-ui-extensions/bin/es6/components/ViewedByCustomer/ViewedByCustomer.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/coveo-search-ui-extensions/bin/es6/components/ViewedByCustomer/ViewedByCustomer.js ***!
  \*********************************************************************************************************/
/*! exports provided: ViewedByCustomer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewedByCustomer", function() { return ViewedByCustomer; });
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! coveo-search-ui */ "coveo-search-ui");
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UserActions_UserActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UserActions/UserActions */ "./node_modules/coveo-search-ui-extensions/bin/es6/components/UserActions/UserActions.js");
/* harmony import */ var _utils_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/icons */ "./node_modules/coveo-search-ui-extensions/bin/es6/utils/icons.js");
/* harmony import */ var _Strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Strings */ "./node_modules/coveo-search-ui-extensions/bin/es6/components/ViewedByCustomer/Strings.js");




/**
 * The _ViewedByCustomer_  component allows your agents to see, within the Salesforce Lightning console, every result which the user clicked. It displays an icon and a label on each result, if already viewed by the customer who created the case (see [Coveo Component ViewedByCustomer](https://docs.coveo.com/en/3073/coveoforsalesforce/viewedbycustomercomponent)).
 * ```html
 * <div class="CoveoViewedByCustomer"></div>
 * ```
 */
class ViewedByCustomer extends coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    /**
     * Create an instance of {@link ViewedByCustomer}.
     * @param element Element on which to bind the component.
     * @param options Initialization options of the component.
     * @param bindings Bindings of the Search-UI environment.
     */
    constructor(element, options, bindings, result) {
        super(element, ViewedByCustomer.ID, bindings);
        this.element = element;
        this.options = options;
        this.bindings = bindings;
        if (this.root.getElementsByClassName(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Component"].computeCssClassNameForType(_UserActions_UserActions__WEBPACK_IMPORTED_MODULE_1__["UserActions"].ID)).length === 0) {
            this.logger.warn('The ViewedByCustomer component has been detected without a UserActions component. You may encounter issues with the former.');
        }
        this.options = coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].initComponentOptions(element, ViewedByCustomer, options);
        result = result ? result : this.resolveResult();
        if (!result) {
            throw new Error('No result found on result component ViewedByCustomer.');
        }
        if (result.isUserActionView) {
            this.render();
        }
    }
    render() {
        if (this.options.showIcon) {
            const iconElement = document.createElement('span');
            iconElement.classList.add(ViewedByCustomer.ICON_CLASS);
            iconElement.innerHTML = _utils_icons__WEBPACK_IMPORTED_MODULE_2__["user"];
            this.element.appendChild(iconElement);
        }
        const labelElement = document.createElement('span');
        labelElement.classList.add(ViewedByCustomer.LABEL_CLASS);
        labelElement.innerText = this.options.label;
        this.element.appendChild(labelElement);
    }
    /**
     * Generate a ViewedByCustomer in a preformated Dom ready to be inserted in a result
     * @param bindings bindings to be used by the {@link ViewedByCustomer}
     * @param result result to be used by the {@link ViewedByCustomer}
     */
    static getViewedByCustomerResultRowDom(bindings, result) {
        const viewedByCustomerRow = document.createElement('div');
        viewedByCustomerRow.classList.add('coveo-result-row');
        const viewedByCustomerCell = document.createElement('div');
        viewedByCustomerCell.classList.add('coveo-result-cell');
        const viewedByCustomerElement = document.createElement('span');
        new ViewedByCustomer(viewedByCustomerElement, undefined, bindings, result);
        viewedByCustomerCell.appendChild(viewedByCustomerElement);
        viewedByCustomerRow.appendChild(viewedByCustomerCell);
        return viewedByCustomerRow;
    }
}
/**
 * Unique Identifier used by the Search-UI.
 */
ViewedByCustomer.ID = 'ViewedByCustomer';
/**
 * Default options used by the component.
 */
ViewedByCustomer.options = {
    showIcon: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildBooleanOption({ defaultValue: true }),
    label: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({ defaultValue: Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])(`${ViewedByCustomer.ID}_DefaultLabel`) })
};
// Internal CSS selectors.
ViewedByCustomer.ICON_CLASS = 'viewed-by-customer-icon';
ViewedByCustomer.LABEL_CLASS = 'viewed-by-customer-label';
coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].registerAutoCreateComponent(ViewedByCustomer);
//# sourceMappingURL=ViewedByCustomer.js.map

/***/ }),

/***/ "./node_modules/coveo-search-ui-extensions/bin/es6/models/UserProfileModel.js":
/*!************************************************************************************!*\
  !*** ./node_modules/coveo-search-ui-extensions/bin/es6/models/UserProfileModel.js ***!
  \************************************************************************************/
/*! exports provided: UserAction, UserProfileModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAction", function() { return UserAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileModel", function() { return UserProfileModel; });
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! coveo-search-ui */ "coveo-search-ui");
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rest_UserProfilingEndpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rest/UserProfilingEndpoint */ "./node_modules/coveo-search-ui-extensions/bin/es6/rest/UserProfilingEndpoint.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


/**
 * Represent an action that a user has made.
 */
class UserAction {
    constructor(type, timestamp, raw, document, query) {
        this.type = type;
        this.timestamp = timestamp;
        this.raw = raw;
        this.document = document;
        this.query = query;
    }
}
/**
 * Model that store each user profile informations such as actions made by them,
 */
class UserProfileModel extends coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Model"] {
    /**
     * Create a `UserProfileModel` and bound it to `element`.
     * Also create a `UserProfilingEndpoint` that will be use to fetch actions made by a user.
     *
     * @param element An element on which the model will be bound on.
     * @param options A set of options necessary for the component creation.
     */
    constructor(element, options) {
        super(element, UserProfileModel.ID, {});
        this.options = options;
        coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Assert"].isNotUndefined(this.options.restUri);
        coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Assert"].isNotUndefined(this.options.organizationId);
        coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Assert"].isNotUndefined(this.options.searchEndpoint);
        this.getOrFetchCache = {};
        this.endpoint = new _rest_UserProfilingEndpoint__WEBPACK_IMPORTED_MODULE_1__["UserProfilingEndpoint"]({
            uri: this.options.restUri,
            accessToken: this.options.accessToken || this.options.searchEndpoint.accessToken,
            organization: this.options.organizationId
        });
    }
    /**
     * Get all actions related to a user.
     *
     * @param userId The identifier of a user.
     */
    getActions(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            let actions = this.get(userId);
            actions = Array.isArray(actions) ? actions : yield this.fetchActions(userId);
            this.set(userId, actions, UserProfileModel.MODEL_CONFIG);
            return actions;
        });
    }
    /**
     * Delete all actions related to a user from the model.
     *
     * @param userId The identifier of a user.
     */
    deleteActions(userId) {
        this.set(userId, undefined, UserProfileModel.MODEL_CONFIG);
        this.getOrFetchCache[userId] = undefined;
    }
    fetchActions(userId) {
        const pendingFetch = this.getOrFetchCache[userId];
        const doFetch = () => {
            this.getOrFetchCache[userId] = this.endpoint.getActions(userId).then(actions => this.parseGetActionsResponse(userId, actions));
            return this.getOrFetchCache[userId];
        };
        return pendingFetch || doFetch();
    }
    parseGetActionsResponse(userId, actions) {
        const userActions = this.buildUserActions(actions);
        this.registerNewAttribute(userId, userActions);
        return userActions;
    }
    fetchDocuments(urihashes) {
        return __awaiter(this, void 0, void 0, function* () {
            if (urihashes.length === 0) {
                return Promise.resolve({});
            }
            const query = new coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["QueryBuilder"]();
            query.advancedExpression.addFieldExpression('@urihash', '==', urihashes.filter(x => x));
            // Ensure we fetch the good amount of document.
            query.numberOfResults = urihashes.length;
            // Here we directly use the Search Endpoint to query without side effects.
            const searchRequest = yield this.options.searchEndpoint.search(query.build());
            const documentsDict = searchRequest.results.reduce((acc, result) => (Object.assign(Object.assign({}, acc), { [result.raw.urihash]: result })), {});
            return documentsDict;
        });
    }
    buildUserActions(actions) {
        return __awaiter(this, void 0, void 0, function* () {
            let documents = {};
            const urihashes = actions
                .filter(this.isClick)
                .map(action => action.value.uri_hash)
                // Remove duplicates.
                .filter((value, index, list) => list.indexOf(value) === index);
            try {
                documents = yield this.fetchDocuments(urihashes);
            }
            catch (error) {
                this.logger.error(UserProfileModel.ERROR_MESSAGE.FETCH_CLICKED_DOCUMENT_FAIL, error);
            }
            return actions.map(action => {
                return new UserAction(action.name, new Date(action.time), action.value, this.isClickOrView(action) ? documents[action.value.uri_hash] : undefined, this.isSearch(action) ? action.value.query_expression : undefined);
            });
        });
    }
    isClick(action) {
        return action.name === _rest_UserProfilingEndpoint__WEBPACK_IMPORTED_MODULE_1__["UserActionType"].Click;
    }
    isClickOrView(action) {
        return this.isClick(action) || action.name === _rest_UserProfilingEndpoint__WEBPACK_IMPORTED_MODULE_1__["UserActionType"].PageView;
    }
    isSearch(action) {
        return action.name === _rest_UserProfilingEndpoint__WEBPACK_IMPORTED_MODULE_1__["UserActionType"].Search;
    }
}
/**
 * Identifier of the Search-UI component.
 */
UserProfileModel.ID = 'UserProfileModel';
UserProfileModel.ERROR_MESSAGE = Object.freeze({
    FETCH_CLICKED_DOCUMENT_FAIL: 'Fetching clicked documents details failed'
});
UserProfileModel.MODEL_CONFIG = {
    customAttribute: true,
    silent: true
};
/**
 * Expose the UserProfileModel so a user action implementation can use it.
 */
window['Coveo'] && (window['Coveo']['UserProfileModel'] = UserProfileModel);
//# sourceMappingURL=UserProfileModel.js.map

/***/ }),

/***/ "./node_modules/coveo-search-ui-extensions/bin/es6/rest/UserProfilingEndpoint.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/coveo-search-ui-extensions/bin/es6/rest/UserProfilingEndpoint.js ***!
  \***************************************************************************************/
/*! exports provided: UserActionType, UserProfilingEndpoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserActionType", function() { return UserActionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilingEndpoint", function() { return UserProfilingEndpoint; });
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! coveo-search-ui */ "coveo-search-ui");
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/**
 * User Actions posible type.
 */
var UserActionType;
(function (UserActionType) {
    UserActionType["Search"] = "SEARCH";
    UserActionType["Click"] = "CLICK";
    UserActionType["PageView"] = "VIEW";
    UserActionType["Custom"] = "CUSTOM";
})(UserActionType || (UserActionType = {}));
/**
 * Class that handle interaction with the endpoint.
 */
class UserProfilingEndpoint {
    /**
     * Create a `UserProfilingEndpoint` instance.
     * Create [`EndpointCaller`]{@link EndpointCaller} instance and uses it to communicate with the endpoint internally.
     *
     * @param options The options to initialize the component.
     */
    constructor(options) {
        this.options = options;
        coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Assert"].exists(this.options.accessToken);
        coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Assert"].exists(this.options.organization);
        this.options.uri = this.options.uri ? this.options.uri : UserProfilingEndpoint.DEFAULT_URI;
        this.options.accessToken.subscribeToRenewal(this.buildEndpointCaller.bind(this));
        this.buildEndpointCaller(this.options.accessToken.token);
    }
    buildEndpointCaller(token) {
        this.caller = new coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["EndpointCaller"]({ accessToken: token });
    }
    /**
     * Get the list of actions a user has performed.
     *
     * @param userId Id from which action history will be retrieve. (either visitId or user email).
     */
    getActions(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Assert"].exists(userId);
            const response = yield this.caller.call({
                method: 'POST',
                url: `${this.options.uri}/rest/organizations/${this.options.organization}/machinelearning/user/actions`,
                queryString: [],
                responseType: 'json',
                requestDataType: 'application/json',
                requestData: { objectId: userId },
                errorsAsSuccess: false
            });
            if (this.isResponseEmpty(response)) {
                throw new Error(`Response has no values: ${JSON.stringify(response)}`);
            }
            return this.parseResponse(response.data);
        });
    }
    parseResponse(response) {
        return response.value.map(v => {
            return {
                time: parseInt(v.time),
                value: JSON.parse(v.value),
                name: v.name
            };
        });
    }
    isResponseEmpty(response) {
        return !response || !response.data || !response.data.value || !Array.isArray(response.data.value) || !(response.data.value.length > 0);
    }
}
/**
 * Default platform uri.
 */
UserProfilingEndpoint.DEFAULT_URI = 'https://platform.cloud.coveo.com';
//# sourceMappingURL=UserProfilingEndpoint.js.map

/***/ }),

/***/ "./node_modules/coveo-search-ui-extensions/bin/es6/utils/events.js":
/*!*************************************************************************!*\
  !*** ./node_modules/coveo-search-ui-extensions/bin/es6/utils/events.js ***!
  \*************************************************************************/
/*! exports provided: MANUAL_SEARCH_EVENT_CAUSE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MANUAL_SEARCH_EVENT_CAUSE", function() { return MANUAL_SEARCH_EVENT_CAUSE; });
const MANUAL_SEARCH_EVENT_CAUSE = Object.freeze([
    'omniboxAnalytics',
    'userActionsSubmit',
    'omniboxFromLink',
    'searchboxAsYouType',
    'searchboxSubmit',
    'searchFromLink'
]);
//# sourceMappingURL=events.js.map

/***/ }),

/***/ "./node_modules/coveo-search-ui-extensions/bin/es6/utils/icons.js":
/*!************************************************************************!*\
  !*** ./node_modules/coveo-search-ui-extensions/bin/es6/utils/icons.js ***!
  \************************************************************************/
/*! exports provided: arrowDown, duplicate, search, view, dot, paperclipIcon, user, wait, copy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrowDown", function() { return arrowDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "duplicate", function() { return duplicate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "search", function() { return search; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "view", function() { return view; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function() { return dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paperclipIcon", function() { return paperclipIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "user", function() { return user; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wait", function() { return wait; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
const ARROW_DOWN = '<svg xmlns="http://www.w3.org/2000/svg" width=".5em" height=".5em" enable-background="new 0 0 10 6" viewBox="0 0 10 6"><g fill="black"><path d="m5 5.932c-.222 0-.443-.084-.612-.253l-4.134-4.134c-.338-.338-.338-.886 0-1.224s.886-.338 1.224 0l3.522 3.521 3.523-3.521c.336-.338.886-.338 1.224 0s .337.886-.001 1.224l-4.135 4.134c-.168.169-.39.253-.611.253z"/></g></svg>';
const DUPLICATE = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" fill="#004990" viewBox="0 0 30 30"><circle cx="15" cy="15" r="15" fill="#f7f8f9"/><g transform="translate(6, 5)"><path d="M4 5h7v1H4V5m0 3h7v1H4V8m0 3h7v1H4v-1"/><path d="M15 1c.009-.525.066-1-1-1H1.002c-.651 0-1 .33-1 1v15c0 .66.351 1 1 1H3v2c.075.546.383 1 1 1h13c.718 0 1-.295 1-1V3c.001-.468-.406-.99-1-1h-2V1M2 15V2h11v13H2m14 3H5v-.995L14 17c.5.005.976-.428 1-1l.021-12H16v14"/></g></svg>';
const SEARCH = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" fill="#004990" viewBox="0 0 25 25"><circle cx="12.5" cy="12.5" r="12.5" fill="#f7f8f9"/><g transform="translate(5, 5)"><path d="M2.01 6.03a4.025 4.025 0 0 1 4.02-4.02 4.025 4.025 0 0 1 4.02 4.02 4.025 4.025 0 0 1-4.02 4.02 4.024 4.024 0 0 1-4.02-4.02m12.696 7.256l-3.769-3.768a5.991 5.991 0 0 0 1.12-3.487 6.036 6.036 0 0 0-6.03-6.03 6.036 6.036 0 0 0-6.03 6.03 6.036 6.036 0 0 0 6.03 6.03c1.3 0 2.502-.418 3.487-1.12l3.769 3.769a1.001 1.001 0 0 0 1.42 0 1.005 1.005 0 0 0 0-1.422"/></g></svg>';
const VIEW = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" fill="#004990" viewBox="0 0 800 800"><circle cx="400" cy="400" r="400" fill="#f7f8f9"/><g transform="translate(112, 144)"><path d="M569.354 231.631C512.969 135.949 407.81 72 288 72 168.14 72 63.004 135.994 6.646 231.631a47.999 47.999 0 0 0 0 48.739C63.031 376.051 168.19 440 288 440c119.86 0 224.996-63.994 281.354-159.631a47.997 47.997 0 0 0 0-48.738zM288 392c-75.162 0-136-60.827-136-136 0-75.162 60.826-136 136-136 75.162 0 136 60.826 136 136 0 75.162-60.826 136-136 136zm104-136c0 57.438-46.562 104-104 104s-104-46.562-104-104c0-17.708 4.431-34.379 12.236-48.973l-.001.032c0 23.651 19.173 42.823 42.824 42.823s42.824-19.173 42.824-42.823c0-23.651-19.173-42.824-42.824-42.824l-.032.001C253.621 156.431 270.292 152 288 152c57.438 0 104 46.562 104 104z"/></g></svg>';
const DOT = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" fill="#004990" viewBox="0 0 10 10"><circle cx="5" cy="5" r="5" fill="#f7f8f9"/><circle cx="5" cy="5" r="3"/></svg>';
const PAPER_CLIP = '<svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 80 75" enable-background="new 0 0 80 75" xml:space="preserve"><path d="M73.844,6.458c-8.208-8.611-21.558-8.611-29.766,0L4.389,48.092c-5.853,6.14-5.853,16.164,0,22.304&#xA;&#x9;&#x9;&#x9;c5.853,6.14,15.409,6.14,21.262,0l39.688-41.634c3.497-3.668,3.497-9.714,0-13.382c-3.497-3.668-9.26-3.668-12.757,0&#xA;&#x9;&#x9;&#x9;L18.564,51.065c-0.777,0.793-1.088,1.964-0.812,3.064c0.276,1.1,1.095,1.959,2.143,2.249c1.049,0.289,2.165-0.036,2.921-0.852&#xA;&#x9;&#x9;&#x9;L56.835,19.84c1.215-1.274,3.038-1.274,4.252,0c1.215,1.274,1.215,3.187,0,4.461L21.399,65.935c-3.571,3.745-9.187,3.745-12.757,0&#xA;&#x9;&#x9;&#x9;c-3.57-3.745-3.57-9.637,0-13.382L48.33,10.919c5.926-6.217,15.335-6.217,21.262,0c5.926,6.217,5.926,16.087,0,22.304&#xA;&#x9;&#x9;&#x9;L35.573,68.908c-0.778,0.793-1.089,1.964-0.814,3.065c0.276,1.101,1.095,1.96,2.145,2.25c1.049,0.289,2.166-0.037,2.922-0.854&#xA;&#x9;&#x9;&#x9;l34.018-35.686C82.052,29.072,82.052,15.069,73.844,6.458z"/></svg>';
const USER = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" viewBox="0 0 15 15"><path d="M 7.5,15 A 7.5,7.5 0 1 1 15,7.5 7.5,7.5 0 0 1 7.5,15 Z M 7.5,1 A 6.5,6.5 0 1 0 14,7.5 6.51,6.51 0 0 0 7.5,1 Z"/><path d="M 3.39,12.5 A 6.48,6.48 0 0 0 11.5,12.6 7.08,7.08 0 0 0 8.98,11.6 8,8 0 0 1 8.6,10.25 4,4 0 0 0 11,6.5 3.78,3.78 0 0 0 7.5,2.5 3.78,3.78 0 0 0 4,6.5 4,4 0 0 0 6.37,10.29 8.25,8.25 0 0 1 6.01,11.61 7.2,7.2 0 0 0 3.39,12.5 Z"/></svg>';
const WAIT = '<svg enable-background="new 0 0 18 18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><g><path d="m16.76 8.051c-.448 0-.855-.303-.969-.757-.78-3.117-3.573-5.294-6.791-5.294s-6.01 2.177-6.79 5.294c-.134.537-.679.861-1.213.727-.536-.134-.861-.677-.728-1.212 1.004-4.009 4.594-6.809 8.731-6.809 4.138 0 7.728 2.8 8.73 6.809.135.536-.191 1.079-.727 1.213-.081.02-.162.029-.243.029z"/><path d="m9 18c-4.238 0-7.943-3.007-8.809-7.149-.113-.541.234-1.071.774-1.184.541-.112 1.071.232 1.184.773.674 3.222 3.555 5.56 6.851 5.56s6.178-2.338 6.852-5.56c.113-.539.634-.892 1.184-.773.54.112.887.643.773 1.184-.866 4.142-4.57 7.149-8.809 7.149z"/></g></svg>';
const COPY_PASTE = '<svg width=".5em" height=".5em" viewBox="0 0 20 20"><path d="M4 5h7v1H4V5m0 3h7v1H4V8m0 3h7v1H4v-1"/><path d="M15 1c.009-.525.066-1-1-1H1.002c-.651 0-1 .33-1 1v15c0 .66.351 1 1 1H3v2c.075.546.383 1 1 1h13c.718 0 1-.295 1-1V3c.001-.468-.406-.99-1-1h-2V1M2 15V2h11v13H2m14 3H5v-.995L14 17c.5.005.976-.428 1-1l.021-12H16v14"/></svg>';
const arrowDown = ARROW_DOWN;
const duplicate = DUPLICATE;
const search = SEARCH;
const view = VIEW;
const dot = DOT;
const paperclipIcon = PAPER_CLIP;
const user = USER;
const wait = WAIT;
const copy = COPY_PASTE;
//# sourceMappingURL=icons.js.map

/***/ }),

/***/ "./node_modules/coveo-search-ui-extensions/bin/es6/utils/time.js":
/*!***********************************************************************!*\
  !*** ./node_modules/coveo-search-ui-extensions/bin/es6/utils/time.js ***!
  \***********************************************************************/
/*! exports provided: formatDate, formatTime, formatTimeInterval */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTime", function() { return formatTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTimeInterval", function() { return formatTimeInterval; });
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! coveo-search-ui */ "coveo-search-ui");
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Format a date object to a date string that follow the format describe below.
 * > Ex: `Mon, Apr 29, 2019`
 * @param date The date that will be formated.
 * @returns A string formated version of the date.
 */
function formatDate(date) {
    return date.toLocaleDateString('default', {
        weekday: 'short',
        month: 'short',
        day: '2-digit',
        year: 'numeric'
    });
}
/**
 * Format a date object to a time string that follow the format describe below.
 * > Ex: `12:00:00 PM`
 * @param date The date that will be formated.
 * @returns A string formated version of the time.
 */
function formatTime(date) {
    return date.toLocaleTimeString('default', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
}
const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const WEEK = 7 * DAY;
/**
 * Format a time interval to a user friendly string format.
 * > Ex: `5 minutes 10 seconds`
 * @param interval The time interval in milliseconds to format in a user friendly fashion.
 */
function formatTimeInterval(interval) {
    const string_index = 1;
    const nb_seconds = Math.floor(Math.round((interval % MINUTE) / SECOND));
    const nb_minutes = Math.floor((interval % HOUR) / MINUTE);
    const nb_hour = Math.floor((interval % DAY) / HOUR);
    const nb_day = Math.floor((interval % WEEK) / DAY);
    const nb_week = Math.floor(interval / WEEK);
    const formater = (nb, unit) => `${nb} ${unit}${nb === 1 ? '' : 's'}`;
    const seconds_str = formater(nb_seconds, Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])('second'));
    const minutes_str = formater(nb_minutes, Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])('minute'));
    const hour_str = formater(nb_hour, Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])('hour'));
    const day_str = formater(nb_day, Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])('day'));
    const week_str = formater(nb_week, Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])('week'));
    const time_per_unit = [
        [nb_week, `${week_str}${nb_day > 0 ? ` ${day_str}` : ''}`],
        [nb_day, `${day_str}${nb_hour > 0 ? ` ${hour_str}` : ''}`],
        [nb_hour, `${hour_str}${nb_minutes > 0 ? ` ${minutes_str}` : ''}`],
        [nb_minutes, `${minutes_str}${nb_seconds > 0 ? ` ${seconds_str}` : ''}`],
        [nb_seconds, seconds_str]
    ];
    const first_meaningful_tuple = time_per_unit.find(([amount, _]) => amount > 0) || [0, '0 seconds'];
    return first_meaningful_tuple[string_index];
}
//# sourceMappingURL=time.js.map

/***/ }),

/***/ "./node_modules/coveo-search-ui-extensions/bin/es6/utils/translation.js":
/*!******************************************************************************!*\
  !*** ./node_modules/coveo-search-ui-extensions/bin/es6/utils/translation.js ***!
  \******************************************************************************/
/*! exports provided: Language, Translation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Language", function() { return Language; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Translation", function() { return Translation; });
/**
 * Supported languages.
 */
var Language;
(function (Language) {
    Language["English"] = "en";
})(Language || (Language = {}));
/**
 * Translation utilities.
 */
class Translation {
    /**
     * Register translations for a language.
     *
     * @param language Language of the dictionary.
     * @param translationDictionary Key-Value dictionary that contain all traslation for a language.
     */
    static register(language, translationDictionary) {
        Object.keys(translationDictionary).forEach(key => {
            String['locales'] = String['locales'] || {};
            String['locales'][language] = String['locales'][language] || {};
            String['locales'][language][key] = translationDictionary[key];
        });
        String['toLocaleString'].call(this, { [language]: String['locales'][language] });
    }
}
//# sourceMappingURL=translation.js.map

/***/ }),

/***/ "./src/CoveoForZendesk.ts":
/*!********************************!*\
  !*** ./src/CoveoForZendesk.ts ***!
  \********************************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony import */ var _components_InsightPanel_InsightPanel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/InsightPanel/InsightPanel */ "./src/components/InsightPanel/InsightPanel.ts");
/* harmony import */ var _zendesk_ZendeskClient_ZendeskClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zendesk/ZendeskClient/ZendeskClient */ "./src/zendesk/ZendeskClient/ZendeskClient.ts");
/* harmony import */ var _components_TopBar_TopBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/TopBar/TopBar */ "./src/components/TopBar/TopBar.ts");



function init(options) {
    var root = document.querySelector("#search");
    if (options.product == "support" && options.location.indexOf("ticket_sidebar") >= 0) {
        new _components_InsightPanel_InsightPanel__WEBPACK_IMPORTED_MODULE_0__["InsightPanel"](root, options, new _zendesk_ZendeskClient_ZendeskClient__WEBPACK_IMPORTED_MODULE_1__["ZendeskClient"]()).init(options.location != "new_ticket_sidebar");
    }
    else if (options.product == "support" && options.location == "top_bar") {
        new _components_TopBar_TopBar__WEBPACK_IMPORTED_MODULE_2__["TopBar"](root, options, new _zendesk_ZendeskClient_ZendeskClient__WEBPACK_IMPORTED_MODULE_1__["ZendeskClient"]()).init();
    }
}


/***/ }),

/***/ "./src/Index.ts":
/*!**********************!*\
  !*** ./src/Index.ts ***!
  \**********************/
/*! exports provided: ZendeskClient, InitializationHandler, InsightPanel, TopBar, init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _zendesk_ZendeskClient_ZendeskClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zendesk/ZendeskClient/ZendeskClient */ "./src/zendesk/ZendeskClient/ZendeskClient.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ZendeskClient", function() { return _zendesk_ZendeskClient_ZendeskClient__WEBPACK_IMPORTED_MODULE_0__["ZendeskClient"]; });

/* harmony import */ var _utils_InitializationHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/InitializationHandler */ "./src/utils/InitializationHandler.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InitializationHandler", function() { return _utils_InitializationHandler__WEBPACK_IMPORTED_MODULE_1__["InitializationHandler"]; });

/* harmony import */ var _components_InsightPanel_InsightPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/InsightPanel/InsightPanel */ "./src/components/InsightPanel/InsightPanel.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InsightPanel", function() { return _components_InsightPanel_InsightPanel__WEBPACK_IMPORTED_MODULE_2__["InsightPanel"]; });

/* harmony import */ var _components_TopBar_TopBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/TopBar/TopBar */ "./src/components/TopBar/TopBar.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopBar", function() { return _components_TopBar_TopBar__WEBPACK_IMPORTED_MODULE_3__["TopBar"]; });

/* harmony import */ var _CoveoForZendesk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CoveoForZendesk */ "./src/CoveoForZendesk.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "init", function() { return _CoveoForZendesk__WEBPACK_IMPORTED_MODULE_4__["init"]; });

// This entry point defines all the components that are included in the extensions.







/***/ }),

/***/ "./src/components/InsightPanel/InsightPanel.ts":
/*!*****************************************************!*\
  !*** ./src/components/InsightPanel/InsightPanel.ts ***!
  \*****************************************************/
/*! exports provided: InsightPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsightPanel", function() { return InsightPanel; });
/* harmony import */ var _Strings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Strings */ "./src/components/InsightPanel/Strings.ts");
/* harmony import */ var _Strings__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Strings__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_InitializationHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/InitializationHandler */ "./src/utils/InitializationHandler.ts");
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! coveo-search-ui */ "coveo-search-ui");
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_2__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



/**
 * The AttachResult component allows a user to link a search result to something else in their external
 * system, for instance a case, incident, request, etc.
 */
class InsightPanel {
    constructor(element, options, zendeskClient) {
        this.options = options;
        this.zendeskClient = zendeskClient;
        // Explode objects to flatten the metadata
        this.flattenFields = function (prefix, fieldValues) {
            var finalMap = {};
            if (!fieldValues)
                return finalMap;
            return Object.keys(fieldValues)
                .filter(fieldName => fieldName != "errors")
                .reduce((result, fieldName) => {
                var fieldValue = fieldValues[fieldName];
                var prefixedFieldName = prefix == '' ? fieldName : prefix + '.' + fieldName;
                var fieldType = typeof fieldValue;
                if (fieldType == "object") {
                    Object.assign(result, this.flattenFields(prefixedFieldName, fieldValue));
                }
                else if (fieldType == "string" || fieldType == "boolean" || fieldType == "number") {
                    result[prefixedFieldName] = fieldValue;
                }
                return result;
            }, {});
        };
        this.executeQuery = _.throttle(() => {
            Coveo.logSearchEvent(this.root.el, { name: 'CaseInputChange', type: 'Search' }, this.ticketContext);
            Coveo.executeQuery(this.root.el);
        }, 2000);
        this.root = new coveo_search_ui__WEBPACK_IMPORTED_MODULE_2__["Dom"](element);
    }
    parseFieldList(fieldString) {
        if (fieldString) {
            return fieldString.split(';');
        }
        return [];
    }
    filterFields(flattenFields) {
        return __awaiter(this, void 0, void 0, function* () {
            var fieldNames = Object.keys(flattenFields);
            var settings = yield this.zendeskClient.getSettings();
            //For all you snowflakes out there
            var whiteList = this.parseFieldList(settings.insightPanelFieldsAllowlist);
            var blackList = this.parseFieldList(settings.insightPanelFieldsBlocklist);
            return fieldNames.filter(fieldName => (whiteList.length == 0 || whiteList.some(whiteFieldName => new RegExp(whiteFieldName).test(fieldName))))
                .filter(fieldName => (!blackList.some(blackFieldName => new RegExp(blackFieldName).test(fieldName))))
                .reduce((result, fieldName) => {
                result[fieldName] = flattenFields[fieldName];
                return result;
            }, {});
        });
    }
    getTicketContext() {
        return __awaiter(this, void 0, void 0, function* () {
            var fieldsMetadata = yield this.zendeskClient.getTicketFields();
            var ticket_fields = fieldsMetadata.map(field => {
                return `ticket.${field.name}`;
            });
            var fieldValues = yield this.zendeskClient.getClient().get(ticket_fields);
            var renamedFieldValues = {};
            fieldsMetadata.forEach(field => {
                renamedFieldValues[`ticket.${field.label}`] = fieldValues[`ticket.${field.name}`];
            });
            var filteredFields = yield this.filterFields(this.flattenFields('', renamedFieldValues));
            //Dots aren't supported in context values, so we are replacing them with underscores
            var replacedDots = Object.keys(filteredFields).reduce((result, key) => {
                result[key.split('.').join('_')] = filteredFields[key];
                return result;
            }, {});
            return replacedDots;
        });
    }
    computeHeight() {
        var windowHeight = window.outerHeight;
        return windowHeight / 2 + 'px';
    }
    bindCoveoEvents(requesterEmail) {
        return __awaiter(this, void 0, void 0, function* () {
            var _this = this;
            Coveo.$$(this.root).on('buildingQuery', function (e, args) {
                args.queryBuilder.addContext(_this.ticketContext);
                if (requesterEmail) {
                    args.queryBuilder.userActions = { tagViewsOfUser: requesterEmail };
                }
            });
        });
    }
    setTicketContext(ticketContext) {
        this.ticketContext = ticketContext;
        if (this.topBarClient) {
            this.topBarClient.trigger('ticket_context_updated', this.ticketContext);
        }
    }
    bindZendeskEvents() {
        return __awaiter(this, void 0, void 0, function* () {
            this.zendeskClient.getClient().on('*.changed', (e) => {
                this.getTicketContext().then((ticketContext) => {
                    this.setTicketContext(ticketContext);
                    this.executeQuery();
                });
            });
            this.zendeskClient.getClient().get('instances').then((instancesData) => {
                var instances = instancesData.instances;
                var guid = Object.keys(instances).filter((instanceGuid) => {
                    return instances[instanceGuid].location == 'top_bar';
                }).join('');
                return this.zendeskClient.getClient().instance(guid);
            }).then((topBarClient) => {
                this.topBarClient = topBarClient;
            });
            this.zendeskClient.getClient().on('top_bar_loaded', () => {
                this.setTicketContext(this.ticketContext);
            });
        });
    }
    getRequesterEmail() {
        return __awaiter(this, void 0, void 0, function* () {
            var requester = yield this.zendeskClient.getClient().get('ticket.requester');
            if (requester['ticket.requester']) {
                return requester['ticket.requester'].email;
            }
            return undefined;
        });
    }
    init(enableUserActions) {
        return __awaiter(this, void 0, void 0, function* () {
            this.setTicketContext(yield this.getTicketContext());
            this.bindZendeskEvents();
            var initializationHandler = new _utils_InitializationHandler__WEBPACK_IMPORTED_MODULE_1__["InitializationHandler"](this.zendeskClient);
            var requesterEmail = yield this.getRequesterEmail();
            if (enableUserActions && requesterEmail) {
                this.bindCoveoEvents(requesterEmail);
                initializationHandler.initializeSearchInterfaceWithUserActions(this.root.el, this.options, requesterEmail);
            }
            else {
                this.bindCoveoEvents(null);
                initializationHandler.initializeSearchInterface(this.root.el, this.options);
            }
            this.zendeskClient.getClient().invoke('resize', { width: '100%', height: this.computeHeight() });
        });
    }
}


/***/ }),

/***/ "./src/components/InsightPanel/Strings.ts":
/*!************************************************!*\
  !*** ./src/components/InsightPanel/Strings.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/TopBar/Strings.ts":
/*!******************************************!*\
  !*** ./src/components/TopBar/Strings.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/TopBar/TopBar.ts":
/*!*****************************************!*\
  !*** ./src/components/TopBar/TopBar.ts ***!
  \*****************************************/
/*! exports provided: TopBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopBar", function() { return TopBar; });
/* harmony import */ var _Strings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Strings */ "./src/components/TopBar/Strings.ts");
/* harmony import */ var _Strings__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Strings__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_InitializationHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/InitializationHandler */ "./src/utils/InitializationHandler.ts");
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! coveo-search-ui */ "coveo-search-ui");
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_2__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



/**
 * The AttachResult component allows a user to link a search result to something else in their external
 * system, for instance a case, incident, request, etc.
 */
class TopBar {
    constructor(element, options, zendeskClient) {
        this.options = options;
        this.zendeskClient = zendeskClient;
        this.executeQuery = _.throttle(() => {
            Coveo.logSearchEvent(this.root.el, { name: 'CaseInputChange', type: 'Search' }, this.ticketContext);
            Coveo.executeQuery(this.root.el);
        }, 2000);
        this.root = new coveo_search_ui__WEBPACK_IMPORTED_MODULE_2__["Dom"](element);
    }
    bindCoveoEvents() {
        return __awaiter(this, void 0, void 0, function* () {
            var _this = this;
            Coveo.$$(this.root).on('buildingQuery', function (e, args) {
                args.queryBuilder.addContext(_this.ticketContext);
            });
        });
    }
    setTicketContext(ticketContext) {
        this.ticketContext = ticketContext;
    }
    bindZendeskEvents() {
        return __awaiter(this, void 0, void 0, function* () {
            var _this = this;
            this.zendeskClient.getClient().on('ticket_context_updated', (ticketContext) => {
                debugger;
                _this.setTicketContext(ticketContext);
                _this.executeQuery();
            });
            this.zendeskClient.getClient().get('instances').then((instancesData) => {
                var instances = instancesData.instances;
                var guid = Object.keys(instances).filter((instanceGuid) => {
                    return instances[instanceGuid].location.indexOf('ticket_sidebar') >= 0;
                }).join('');
                return this.zendeskClient.getClient().instance(guid);
            }).then((insightPanelClient) => {
                insightPanelClient.trigger('top_bar_loaded');
            });
        });
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.bindCoveoEvents();
            this.bindZendeskEvents();
            this.options.autoTriggerQuery = true; //TODO: This is not ideal since we trigger 2 queries in some cases .. Could be improved
            var initializationHandler = new _utils_InitializationHandler__WEBPACK_IMPORTED_MODULE_1__["InitializationHandler"](this.zendeskClient);
            initializationHandler.initializeSearchInterface(this.root.el, this.options);
            this.zendeskClient.getClient().invoke('resize', { width: '1000px', height: '500px' });
        });
    }
}


/***/ }),

/***/ "./src/utils/InitializationHandler.ts":
/*!********************************************!*\
  !*** ./src/utils/InitializationHandler.ts ***!
  \********************************************/
/*! exports provided: InitializationHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitializationHandler", function() { return InitializationHandler; });
/* harmony import */ var coveo_search_ui_extensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! coveo-search-ui-extensions */ "./node_modules/coveo-search-ui-extensions/bin/es6/Index.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class InitializationHandler {
    constructor(zendeskClient) {
        this.zendeskClient = zendeskClient;
        this.client = zendeskClient;
    }
    initializeSearchInterfaceWithUserActions(root, options, caseCreatedBy) {
        return __awaiter(this, void 0, void 0, function* () {
            var settings = yield this.client.getSettings();
            Coveo.SearchEndpoint.endpoints['default'] = new Coveo.SearchEndpoint({
                restUri: options.endpointUrl + '/rest/search',
                accessToken: options.searchToken,
                queryStringArguments: {
                    organizationId: settings.organizationId
                },
                renewAccessToken: () => {
                    var currentLocation = window.location;
                    window.location.href = currentLocation.pathname + currentLocation.hash;
                    return Promise.resolve("");
                }
            });
            var searchInterfaceOptions = {
                Analytics: {
                    searchHub: 'zd_' + options.product + '_' + options.location
                }
            };
            if (caseCreatedBy) {
                new coveo_search_ui_extensions__WEBPACK_IMPORTED_MODULE_0__["UserProfileModel"](root, {
                    searchEndpoint: Coveo.SearchEndpoint.endpoints.default,
                    organizationId: settings.organizationId,
                    restUri: options.endpointUrl
                });
                searchInterfaceOptions.UserActions = {
                    userId: caseCreatedBy,
                };
            }
            if (options.autoTriggerQuery === false) {
                searchInterfaceOptions.SearchInterface = {
                    autoTriggerQuery: false
                };
            }
            Coveo.init(root, searchInterfaceOptions);
        });
    }
    initializeSearchInterface(root, options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.initializeSearchInterfaceWithUserActions(root, options, null);
        });
    }
}


/***/ }),

/***/ "./src/zendesk/ZendeskClient/ZendeskClient.ts":
/*!****************************************************!*\
  !*** ./src/zendesk/ZendeskClient/ZendeskClient.ts ***!
  \****************************************************/
/*! exports provided: ZendeskClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZendeskClient", function() { return ZendeskClient; });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class ZendeskClient {
    constructor() { }
    getClient() {
        if (!this.client)
            this.client = ZAFClient.init();
        return this.client;
    }
    getSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.metadata)
                this.metadata = yield this.getClient().metadata();
            return this.metadata.settings;
        });
    }
    getTicketFields() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.zendeskFields) {
                var allFieldsRequest = {
                    url: '/api/v2/ticket_fields.json',
                    type: 'GET',
                    dataType: 'json'
                };
                //For some ludicrous reason, it's impossible to retreive all the fields
                //with one call. Plus, the rest call doesn't tell us which fields are custom
                //So we do that little song and dance to make this work
                var customFields = (yield this.getClient().get('ticketFields')).ticketFields.filter(field => {
                    return field.type != "built-in";
                }).map(field => {
                    return {
                        name: `customField:${field.name}`,
                        label: field.label ? field.label : field.name
                    };
                });
                var standardFields = (yield this.getClient().request(allFieldsRequest)).ticket_fields.map(field => {
                    return {
                        name: field.type,
                        label: field.title
                    };
                });
                this.zendeskFields = standardFields.concat(customFields);
            }
            return Promise.resolve(this.zendeskFields);
        });
    }
}


/***/ }),

/***/ "coveo-search-ui":
/*!************************!*\
  !*** external "Coveo" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_coveo_search_ui__;

/***/ })

/******/ });
});
//# sourceMappingURL=CoveoForZendesk.js.map