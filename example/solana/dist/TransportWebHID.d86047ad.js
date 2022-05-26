// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"ejTmX":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "a798b89ad86047ad";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ('reload' in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === 'undefined' ? typeof browser === 'undefined' ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8O295":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _hwTransport = require("@ledgerhq/hw-transport");
var _hwTransportDefault = parcelHelpers.interopDefault(_hwTransport);
var _hidFraming = require("@ledgerhq/devices/lib/hid-framing");
var _hidFramingDefault = parcelHelpers.interopDefault(_hidFraming);
var _devices = require("@ledgerhq/devices");
var _logs = require("@ledgerhq/logs");
var _errors = require("@ledgerhq/errors");
var Buffer = require("buffer").Buffer;
var __extends = undefined && undefined.__extends || function() {
    var extendStatics = function(d1, b1) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d1, b1);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = undefined && undefined.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
var __read = undefined && undefined.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var ledgerDevices = [
    {
        vendorId: _devices.ledgerUSBVendorId
    }, 
];
var isSupported = function() {
    return Promise.resolve(!!(window.navigator && window.navigator.hid));
};
var getHID = function() {
    // $FlowFixMe
    var hid = navigator.hid;
    if (!hid) throw new _errors.TransportError("navigator.hid is not supported", "HIDNotSupported");
    return hid;
};
function requestLedgerDevices() {
    return __awaiter(this, void 0, void 0, function() {
        var device;
        return __generator(this, function(_a) {
            switch(_a.label){
                case 0:
                    return [
                        4 /*yield*/ ,
                        getHID().requestDevice({
                            filters: ledgerDevices
                        })
                    ];
                case 1:
                    device = _a.sent();
                    if (Array.isArray(device)) return [
                        2 /*return*/ ,
                        device
                    ];
                    return [
                        2 /*return*/ ,
                        [
                            device
                        ]
                    ];
            }
        });
    });
}
function getLedgerDevices() {
    return __awaiter(this, void 0, void 0, function() {
        var devices;
        return __generator(this, function(_a) {
            switch(_a.label){
                case 0:
                    return [
                        4 /*yield*/ ,
                        getHID().getDevices()
                    ];
                case 1:
                    devices = _a.sent();
                    return [
                        2 /*return*/ ,
                        devices.filter(function(d) {
                            return d.vendorId === _devices.ledgerUSBVendorId;
                        })
                    ];
            }
        });
    });
}
function getFirstLedgerDevice() {
    return __awaiter(this, void 0, void 0, function() {
        var existingDevices, devices;
        return __generator(this, function(_a) {
            switch(_a.label){
                case 0:
                    return [
                        4 /*yield*/ ,
                        getLedgerDevices()
                    ];
                case 1:
                    existingDevices = _a.sent();
                    if (existingDevices.length > 0) return [
                        2 /*return*/ ,
                        existingDevices[0]
                    ];
                    return [
                        4 /*yield*/ ,
                        requestLedgerDevices()
                    ];
                case 2:
                    devices = _a.sent();
                    return [
                        2 /*return*/ ,
                        devices[0]
                    ];
            }
        });
    });
}
/**
 * WebHID Transport implementation
 * @example
 * import TransportWebHID from "@ledgerhq/hw-transport-webhid";
 * ...
 * TransportWebHID.create().then(transport => ...)
 */ var TransportWebHID = /** @class */ function(_super) {
    __extends(TransportWebHID1, _super);
    function TransportWebHID1(device) {
        var _this1 = _super.call(this) || this;
        _this1.channel = Math.floor(Math.random() * 0xffff);
        _this1.packetSize = 64;
        _this1.inputs = [];
        _this1.read = function() {
            if (_this1.inputs.length) return Promise.resolve(_this1.inputs.shift());
            return new Promise(function(success) {
                _this1.inputCallback = success;
            });
        };
        _this1.onInputReport = function(e) {
            var buffer = Buffer.from(e.data.buffer);
            if (_this1.inputCallback) {
                _this1.inputCallback(buffer);
                _this1.inputCallback = null;
            } else _this1.inputs.push(buffer);
        };
        _this1._disconnectEmitted = false;
        _this1._emitDisconnect = function(e) {
            if (_this1._disconnectEmitted) return;
            _this1._disconnectEmitted = true;
            _this1.emit("disconnect", e);
        };
        /**
         * Exchange with the device using APDU protocol.
         * @param apdu
         * @returns a promise of apdu response
         */ _this1.exchange = function(apdu) {
            return __awaiter(_this1, void 0, void 0, function() {
                var b;
                var _this = this;
                return __generator(this, function(_a1) {
                    switch(_a1.label){
                        case 0:
                            return [
                                4 /*yield*/ ,
                                this.exchangeAtomicImpl(function() {
                                    return __awaiter(_this, void 0, void 0, function() {
                                        var _a, channel, packetSize, framing, blocks, i, result, acc, buffer;
                                        return __generator(this, function(_b) {
                                            switch(_b.label){
                                                case 0:
                                                    _a = this, channel = _a.channel, packetSize = _a.packetSize;
                                                    _logs.log("apdu", "=> " + apdu.toString("hex"));
                                                    framing = _hidFramingDefault.default(channel, packetSize);
                                                    blocks = framing.makeBlocks(apdu);
                                                    i = 0;
                                                    _b.label = 1;
                                                case 1:
                                                    if (!(i < blocks.length)) return [
                                                        3 /*break*/ ,
                                                        4
                                                    ];
                                                    return [
                                                        4 /*yield*/ ,
                                                        this.device.sendReport(0, blocks[i])
                                                    ];
                                                case 2:
                                                    _b.sent();
                                                    _b.label = 3;
                                                case 3:
                                                    i++;
                                                    return [
                                                        3 /*break*/ ,
                                                        1
                                                    ];
                                                case 4:
                                                    if (!!(result = framing.getReducedResult(acc))) return [
                                                        3 /*break*/ ,
                                                        6
                                                    ];
                                                    return [
                                                        4 /*yield*/ ,
                                                        this.read()
                                                    ];
                                                case 5:
                                                    buffer = _b.sent();
                                                    acc = framing.reduceResponse(acc, buffer);
                                                    return [
                                                        3 /*break*/ ,
                                                        4
                                                    ];
                                                case 6:
                                                    _logs.log("apdu", "<= " + result.toString("hex"));
                                                    return [
                                                        2 /*return*/ ,
                                                        result
                                                    ];
                                            }
                                        });
                                    });
                                })["catch"](function(e) {
                                    if (e && e.message && e.message.includes("write")) {
                                        _this._emitDisconnect(e);
                                        throw new _errors.DisconnectedDeviceDuringOperation(e.message);
                                    }
                                    throw e;
                                })
                            ];
                        case 1:
                            b = _a1.sent();
                            return [
                                2 /*return*/ ,
                                b
                            ];
                    }
                });
            });
        };
        _this1.device = device;
        _this1.deviceModel = typeof device.productId === "number" ? _devices.identifyUSBProductId(device.productId) : undefined;
        device.addEventListener("inputreport", _this1.onInputReport);
        return _this1;
    }
    /**
     * Similar to create() except it will always display the device permission (even if some devices are already accepted).
     */ TransportWebHID1.request = function() {
        return __awaiter(this, void 0, void 0, function() {
            var _a, device;
            return __generator(this, function(_b) {
                switch(_b.label){
                    case 0:
                        return [
                            4 /*yield*/ ,
                            requestLedgerDevices()
                        ];
                    case 1:
                        _a = __read.apply(void 0, [
                            _b.sent(),
                            1
                        ]), device = _a[0];
                        return [
                            2 /*return*/ ,
                            TransportWebHID1.open(device)
                        ];
                }
            });
        });
    };
    /**
     * Similar to create() except it will never display the device permission (it returns a Promise<?Transport>, null if it fails to find a device).
     */ TransportWebHID1.openConnected = function() {
        return __awaiter(this, void 0, void 0, function() {
            var devices;
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        return [
                            4 /*yield*/ ,
                            getLedgerDevices()
                        ];
                    case 1:
                        devices = _a.sent();
                        if (devices.length === 0) return [
                            2 /*return*/ ,
                            null
                        ];
                        return [
                            2 /*return*/ ,
                            TransportWebHID1.open(devices[0])
                        ];
                }
            });
        });
    };
    /**
     * Create a Ledger transport with a HIDDevice
     */ TransportWebHID1.open = function(device) {
        return __awaiter(this, void 0, void 0, function() {
            var transport, onDisconnect;
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        return [
                            4 /*yield*/ ,
                            device.open()
                        ];
                    case 1:
                        _a.sent();
                        transport = new TransportWebHID1(device);
                        onDisconnect = function(e) {
                            if (device === e.device) {
                                getHID().removeEventListener("disconnect", onDisconnect);
                                transport._emitDisconnect(new _errors.DisconnectedDevice());
                            }
                        };
                        getHID().addEventListener("disconnect", onDisconnect);
                        return [
                            2 /*return*/ ,
                            transport
                        ];
                }
            });
        });
    };
    /**
     * Release the transport device
     */ TransportWebHID1.prototype.close = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        return [
                            4 /*yield*/ ,
                            this.exchangeBusyPromise
                        ];
                    case 1:
                        _a.sent();
                        this.device.removeEventListener("inputreport", this.onInputReport);
                        return [
                            4 /*yield*/ ,
                            this.device.close()
                        ];
                    case 2:
                        _a.sent();
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    TransportWebHID1.prototype.setScrambleKey = function() {};
    /**
     * Check if WebUSB transport is supported.
     */ TransportWebHID1.isSupported = isSupported;
    /**
     * List the WebUSB devices that was previously authorized by the user.
     */ TransportWebHID1.list = getLedgerDevices;
    /**
     * Actively listen to WebUSB devices and emit ONE device
     * that was either accepted before, if not it will trigger the native permission UI.
     *
     * Important: it must be called in the context of a UI click!
     */ TransportWebHID1.listen = function(observer) {
        var unsubscribed = false;
        getFirstLedgerDevice().then(function(device) {
            if (!device) observer.error(new _errors.TransportOpenUserCancelled("Access denied to use Ledger device"));
            else if (!unsubscribed) {
                var deviceModel = typeof device.productId === "number" ? _devices.identifyUSBProductId(device.productId) : undefined;
                observer.next({
                    type: "add",
                    descriptor: device,
                    deviceModel: deviceModel
                });
                observer.complete();
            }
        }, function(error) {
            observer.error(new _errors.TransportOpenUserCancelled(error.message));
        });
        function unsubscribe() {
            unsubscribed = true;
        }
        return {
            unsubscribe: unsubscribe
        };
    };
    return TransportWebHID1;
}(_hwTransportDefault.default);
exports.default = TransportWebHID;

},{"@ledgerhq/hw-transport":"59Ey9","@ledgerhq/devices/lib/hid-framing":"fvgJh","@ledgerhq/devices":"fnHxP","@ledgerhq/logs":"i4OI0","@ledgerhq/errors":"EVZMy","buffer":"fCgem","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fvgJh":[function(require,module,exports) {
"use strict";
var Buffer = require("buffer").Buffer;
exports.__esModule = true;
var errors_1 = require("@ledgerhq/errors");
var Tag = 0x05;
function asUInt16BE(value) {
    var b = Buffer.alloc(2);
    b.writeUInt16BE(value, 0);
    return b;
}
var initialAcc = {
    data: Buffer.alloc(0),
    dataLength: 0,
    sequence: 0
};
/**
 *
 */ var createHIDframing = function(channel, packetSize) {
    return {
        makeBlocks: function(apdu) {
            var data = Buffer.concat([
                asUInt16BE(apdu.length),
                apdu
            ]);
            var blockSize = packetSize - 5;
            var nbBlocks = Math.ceil(data.length / blockSize);
            data = Buffer.concat([
                data,
                Buffer.alloc(nbBlocks * blockSize - data.length + 1).fill(0), 
            ]);
            var blocks = [];
            for(var i = 0; i < nbBlocks; i++){
                var head = Buffer.alloc(5);
                head.writeUInt16BE(channel, 0);
                head.writeUInt8(Tag, 2);
                head.writeUInt16BE(i, 3);
                var chunk = data.slice(i * blockSize, (i + 1) * blockSize);
                blocks.push(Buffer.concat([
                    head,
                    chunk
                ]));
            }
            return blocks;
        },
        reduceResponse: function(acc, chunk) {
            var _a = acc || initialAcc, data = _a.data, dataLength = _a.dataLength, sequence = _a.sequence;
            if (chunk.readUInt16BE(0) !== channel) throw new errors_1.TransportError("Invalid channel", "InvalidChannel");
            if (chunk.readUInt8(2) !== Tag) throw new errors_1.TransportError("Invalid tag", "InvalidTag");
            if (chunk.readUInt16BE(3) !== sequence) throw new errors_1.TransportError("Invalid sequence", "InvalidSequence");
            if (!acc) dataLength = chunk.readUInt16BE(5);
            sequence++;
            var chunkData = chunk.slice(acc ? 5 : 7);
            data = Buffer.concat([
                data,
                chunkData
            ]);
            if (data.length > dataLength) data = data.slice(0, dataLength);
            return {
                data: data,
                dataLength: dataLength,
                sequence: sequence
            };
        },
        getReducedResult: function(acc) {
            if (acc && acc.dataLength === acc.data.length) return acc.data;
        }
    };
};
exports["default"] = createHIDframing;

},{"buffer":"fCgem","@ledgerhq/errors":"EVZMy"}],"fnHxP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "IIGenericHID", ()=>IIGenericHID
);
parcelHelpers.export(exports, "IIKeyboardHID", ()=>IIKeyboardHID
);
parcelHelpers.export(exports, "IIU2F", ()=>IIU2F
);
parcelHelpers.export(exports, "IICCID", ()=>IICCID
);
parcelHelpers.export(exports, "IIWebUSB", ()=>IIWebUSB
);
parcelHelpers.export(exports, "DeviceModelId", ()=>DeviceModelId
);
parcelHelpers.export(exports, "ledgerUSBVendorId", ()=>ledgerUSBVendorId
);
parcelHelpers.export(exports, "getDeviceModel", ()=>getDeviceModel
);
parcelHelpers.export(exports, "identifyTargetId", ()=>identifyTargetId
);
parcelHelpers.export(exports, "identifyUSBProductId", ()=>identifyUSBProductId
);
parcelHelpers.export(exports, "identifyProductName", ()=>identifyProductName
);
parcelHelpers.export(exports, "getBluetoothServiceUuids", ()=>getBluetoothServiceUuids
);
parcelHelpers.export(exports, "getInfosForServiceUuid", ()=>getInfosForServiceUuid
);
var _semver = require("semver");
var _semverDefault = parcelHelpers.interopDefault(_semver);
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i1 = 1, n = arguments.length; i1 < n; i1++){
            s = arguments[i1];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _a;
var IIGenericHID = 0x01;
var IIKeyboardHID = 0x02;
var IIU2F = 0x04;
var IICCID = 0x08;
var IIWebUSB = 0x10;
var DeviceModelId;
(function(DeviceModelId1) {
    DeviceModelId1["blue"] = "blue";
    DeviceModelId1["nanoS"] = "nanoS";
    DeviceModelId1["nanoSP"] = "nanoSP";
    DeviceModelId1["nanoX"] = "nanoX";
    DeviceModelId1["nanoFTS"] = "nanoFTS";
})(DeviceModelId || (DeviceModelId = {}));
var devices = (_a = {}, _a[DeviceModelId.blue] = {
    id: DeviceModelId.blue,
    productName: "Ledger Blue",
    productIdMM: 0x00,
    legacyUsbProductId: 0x0000,
    usbOnly: true,
    memorySize: 491520,
    masks: [
        0x31000000,
        0x31010000
    ],
    getBlockSize: function(_firwareVersion) {
        return 4096;
    }
}, _a[DeviceModelId.nanoS] = {
    id: DeviceModelId.nanoS,
    productName: "Ledger Nano S",
    productIdMM: 0x10,
    legacyUsbProductId: 0x0001,
    usbOnly: true,
    memorySize: 327680,
    masks: [
        0x31100000
    ],
    getBlockSize: function(firmwareVersion) {
        var _a1;
        return _semverDefault.default.lt((_a1 = _semverDefault.default.coerce(firmwareVersion)) !== null && _a1 !== void 0 ? _a1 : "", "2.0.0") ? 4096 : 2048;
    }
}, _a[DeviceModelId.nanoSP] = {
    id: DeviceModelId.nanoSP,
    productName: "Ledger Nano S Plus",
    productIdMM: 0x50,
    legacyUsbProductId: 0x0005,
    usbOnly: true,
    memorySize: 1572864,
    masks: [
        0x33100000
    ],
    getBlockSize: function(_firmwareVersion) {
        return 32;
    }
}, _a[DeviceModelId.nanoX] = {
    id: DeviceModelId.nanoX,
    productName: "Ledger Nano X",
    productIdMM: 0x40,
    legacyUsbProductId: 0x0004,
    usbOnly: false,
    memorySize: 2097152,
    masks: [
        0x33000000
    ],
    getBlockSize: function(_firwareVersion) {
        return 4096;
    },
    bluetoothSpec: [
        {
            serviceUuid: "13d63400-2c97-0004-0000-4c6564676572",
            notifyUuid: "13d63400-2c97-0004-0001-4c6564676572",
            writeUuid: "13d63400-2c97-0004-0002-4c6564676572",
            writeCmdUuid: "13d63400-2c97-0004-0003-4c6564676572"
        }, 
    ]
}, _a[DeviceModelId.nanoFTS] = {
    id: DeviceModelId.nanoFTS,
    productName: "Ledger Nano FTS",
    productIdMM: 0x60,
    legacyUsbProductId: 0x0006,
    usbOnly: false,
    memorySize: 2097152,
    masks: [
        0x33200000
    ],
    getBlockSize: function(_firwareVersion) {
        return 4096;
    },
    bluetoothSpec: [
        {
            serviceUuid: "13d63400-2c97-6004-0000-4c6564676572",
            notifyUuid: "13d63400-2c97-6004-0001-4c6564676572",
            writeUuid: "13d63400-2c97-6004-0002-4c6564676572",
            writeCmdUuid: "13d63400-2c97-6004-0003-4c6564676572"
        }, 
    ]
}, _a);
var productMap = {
    Blue: DeviceModelId.blue,
    "Nano S": DeviceModelId.nanoS,
    "Nano S Plus": DeviceModelId.nanoSP,
    "Nano X": DeviceModelId.nanoX,
    "Nano FTS": DeviceModelId.nanoFTS
};
var devicesList = Object.values(devices);
var ledgerUSBVendorId = 0x2c97;
var getDeviceModel = function(id1) {
    var info = devices[id1];
    if (!info) throw new Error("device '" + id1 + "' does not exist");
    return info;
};
var identifyTargetId = function(targetId) {
    var deviceModel1 = devicesList.find(function(_a2) {
        var masks = _a2.masks;
        return masks.find(function(mask) {
            return (targetId & 0xffff0000) === mask;
        });
    });
    return deviceModel1;
};
var identifyUSBProductId = function(usbProductId) {
    var legacy = devicesList.find(function(d) {
        return d.legacyUsbProductId === usbProductId;
    });
    if (legacy) return legacy;
    var mm = usbProductId >> 8;
    var deviceModel2 = devicesList.find(function(d) {
        return d.productIdMM === mm;
    });
    return deviceModel2;
};
var identifyProductName = function(productName) {
    var deviceModel3 = devicesList.find(function(d) {
        return d.id === productMap[productName];
    });
    return deviceModel3;
};
var bluetoothServices = [];
var serviceUuidToInfos = {};
for(var id in devices){
    var deviceModel = devices[id];
    var bluetoothSpec = deviceModel.bluetoothSpec;
    if (bluetoothSpec) for(var i = 0; i < bluetoothSpec.length; i++){
        var spec = bluetoothSpec[i];
        bluetoothServices.push(spec.serviceUuid);
        serviceUuidToInfos[spec.serviceUuid] = serviceUuidToInfos[spec.serviceUuid.replace(/-/g, "")] = __assign({
            deviceModel: deviceModel
        }, spec);
    }
}
var getBluetoothServiceUuids = function() {
    return bluetoothServices;
};
var getInfosForServiceUuid = function(uuid) {
    return serviceUuidToInfos[uuid.toLowerCase()];
};

},{"semver":"3th7M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3th7M":[function(require,module,exports) {
// just pre-load all the stuff that index.js lazily exports
const internalRe = require('./internal/re');
module.exports = {
    re: internalRe.re,
    src: internalRe.src,
    tokens: internalRe.t,
    SEMVER_SPEC_VERSION: require('./internal/constants').SEMVER_SPEC_VERSION,
    SemVer: require('./classes/semver'),
    compareIdentifiers: require('./internal/identifiers').compareIdentifiers,
    rcompareIdentifiers: require('./internal/identifiers').rcompareIdentifiers,
    parse: require('./functions/parse'),
    valid: require('./functions/valid'),
    clean: require('./functions/clean'),
    inc: require('./functions/inc'),
    diff: require('./functions/diff'),
    major: require('./functions/major'),
    minor: require('./functions/minor'),
    patch: require('./functions/patch'),
    prerelease: require('./functions/prerelease'),
    compare: require('./functions/compare'),
    rcompare: require('./functions/rcompare'),
    compareLoose: require('./functions/compare-loose'),
    compareBuild: require('./functions/compare-build'),
    sort: require('./functions/sort'),
    rsort: require('./functions/rsort'),
    gt: require('./functions/gt'),
    lt: require('./functions/lt'),
    eq: require('./functions/eq'),
    neq: require('./functions/neq'),
    gte: require('./functions/gte'),
    lte: require('./functions/lte'),
    cmp: require('./functions/cmp'),
    coerce: require('./functions/coerce'),
    Comparator: require('./classes/comparator'),
    Range: require('./classes/range'),
    satisfies: require('./functions/satisfies'),
    toComparators: require('./ranges/to-comparators'),
    maxSatisfying: require('./ranges/max-satisfying'),
    minSatisfying: require('./ranges/min-satisfying'),
    minVersion: require('./ranges/min-version'),
    validRange: require('./ranges/valid'),
    outside: require('./ranges/outside'),
    gtr: require('./ranges/gtr'),
    ltr: require('./ranges/ltr'),
    intersects: require('./ranges/intersects'),
    simplifyRange: require('./ranges/simplify'),
    subset: require('./ranges/subset')
};

},{"./internal/re":"3aKaA","./internal/constants":"kfqYl","./classes/semver":"7HV8v","./internal/identifiers":"3Ushi","./functions/parse":"fKLuB","./functions/valid":"fONiE","./functions/clean":"lDszQ","./functions/inc":"knExV","./functions/diff":"gd8W5","./functions/major":"aQdxS","./functions/minor":"5Jk7e","./functions/patch":"k27vv","./functions/prerelease":"53tgW","./functions/compare":"d0byB","./functions/rcompare":"aVRRy","./functions/compare-loose":"cRDDp","./functions/compare-build":"8IgjV","./functions/sort":"uRtcB","./functions/rsort":"faT9h","./functions/gt":"4Ummg","./functions/lt":"cevz4","./functions/eq":"g8cVO","./functions/neq":"6pfyl","./functions/gte":"10dKg","./functions/lte":"g8gHq","./functions/cmp":"duXdn","./functions/coerce":"mfbCy","./classes/comparator":"gVFDT","./classes/range":"iSOAN","./functions/satisfies":"4GGCq","./ranges/to-comparators":"h7PG2","./ranges/max-satisfying":"k7Iyh","./ranges/min-satisfying":"gedPT","./ranges/min-version":"bD9nR","./ranges/valid":"hrqD8","./ranges/outside":"WXkQN","./ranges/gtr":"3m3un","./ranges/ltr":"lVkgp","./ranges/intersects":"3twh6","./ranges/simplify":"2hxzT","./ranges/subset":"f8DRU"}],"3aKaA":[function(require,module,exports) {
const { MAX_SAFE_COMPONENT_LENGTH  } = require('./constants');
const debug = require('./debug');
exports = module.exports = {};
// The actual regexps go on exports.re
const re = exports.re = [];
const src = exports.src = [];
const t = exports.t = {};
let R = 0;
const createToken = (name, value, isGlobal)=>{
    const index = R++;
    debug(name, index, value);
    t[name] = index;
    src[index] = value;
    re[index] = new RegExp(value, isGlobal ? 'g' : undefined);
};
// The following Regular Expressions can be used for tokenizing,
// validating, and parsing SemVer version strings.
// ## Numeric Identifier
// A single `0`, or a non-zero digit followed by zero or more digits.
createToken('NUMERICIDENTIFIER', '0|[1-9]\\d*');
createToken('NUMERICIDENTIFIERLOOSE', '[0-9]+');
// ## Non-numeric Identifier
// Zero or more digits, followed by a letter or hyphen, and then zero or
// more letters, digits, or hyphens.
createToken('NONNUMERICIDENTIFIER', '\\d*[a-zA-Z-][a-zA-Z0-9-]*');
// ## Main Version
// Three dot-separated numeric identifiers.
createToken('MAINVERSION', `(${src[t.NUMERICIDENTIFIER]})\\.` + `(${src[t.NUMERICIDENTIFIER]})\\.` + `(${src[t.NUMERICIDENTIFIER]})`);
createToken('MAINVERSIONLOOSE', `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` + `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` + `(${src[t.NUMERICIDENTIFIERLOOSE]})`);
// ## Pre-release Version Identifier
// A numeric identifier, or a non-numeric identifier.
createToken('PRERELEASEIDENTIFIER', `(?:${src[t.NUMERICIDENTIFIER]}|${src[t.NONNUMERICIDENTIFIER]})`);
createToken('PRERELEASEIDENTIFIERLOOSE', `(?:${src[t.NUMERICIDENTIFIERLOOSE]}|${src[t.NONNUMERICIDENTIFIER]})`);
// ## Pre-release Version
// Hyphen, followed by one or more dot-separated pre-release version
// identifiers.
createToken('PRERELEASE', `(?:-(${src[t.PRERELEASEIDENTIFIER]}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`);
createToken('PRERELEASELOOSE', `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`);
// ## Build Metadata Identifier
// Any combination of digits, letters, or hyphens.
createToken('BUILDIDENTIFIER', '[0-9A-Za-z-]+');
// ## Build Metadata
// Plus sign, followed by one or more period-separated build metadata
// identifiers.
createToken('BUILD', `(?:\\+(${src[t.BUILDIDENTIFIER]}(?:\\.${src[t.BUILDIDENTIFIER]})*))`);
// ## Full Version String
// A main version, followed optionally by a pre-release version and
// build metadata.
// Note that the only major, minor, patch, and pre-release sections of
// the version string are capturing groups.  The build metadata is not a
// capturing group, because it should not ever be used in version
// comparison.
createToken('FULLPLAIN', `v?${src[t.MAINVERSION]}${src[t.PRERELEASE]}?${src[t.BUILD]}?`);
createToken('FULL', `^${src[t.FULLPLAIN]}$`);
// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
// common in the npm registry.
createToken('LOOSEPLAIN', `[v=\\s]*${src[t.MAINVERSIONLOOSE]}${src[t.PRERELEASELOOSE]}?${src[t.BUILD]}?`);
createToken('LOOSE', `^${src[t.LOOSEPLAIN]}$`);
createToken('GTLT', '((?:<|>)?=?)');
// Something like "2.*" or "1.2.x".
// Note that "x.x" is a valid xRange identifer, meaning "any version"
// Only the first item is strictly required.
createToken('XRANGEIDENTIFIERLOOSE', `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
createToken('XRANGEIDENTIFIER', `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`);
createToken('XRANGEPLAIN', `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})` + `(?:\\.(${src[t.XRANGEIDENTIFIER]})` + `(?:\\.(${src[t.XRANGEIDENTIFIER]})` + `(?:${src[t.PRERELEASE]})?${src[t.BUILD]}?` + `)?)?`);
createToken('XRANGEPLAINLOOSE', `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})` + `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` + `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` + `(?:${src[t.PRERELEASELOOSE]})?${src[t.BUILD]}?` + `)?)?`);
createToken('XRANGE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`);
createToken('XRANGELOOSE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`);
// Coercion.
// Extract anything that could conceivably be a part of a valid semver
createToken('COERCE', `${"(^|[^\\d])(\\d{1,"}${MAX_SAFE_COMPONENT_LENGTH}})` + `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?` + `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?` + `(?:$|[^\\d])`);
createToken('COERCERTL', src[t.COERCE], true);
// Tilde ranges.
// Meaning is "reasonably at or greater than"
createToken('LONETILDE', '(?:~>?)');
createToken('TILDETRIM', `(\\s*)${src[t.LONETILDE]}\\s+`, true);
exports.tildeTrimReplace = '$1~';
createToken('TILDE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`);
createToken('TILDELOOSE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`);
// Caret ranges.
// Meaning is "at least and backwards compatible with"
createToken('LONECARET', '(?:\\^)');
createToken('CARETTRIM', `(\\s*)${src[t.LONECARET]}\\s+`, true);
exports.caretTrimReplace = '$1^';
createToken('CARET', `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`);
createToken('CARETLOOSE', `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`);
// A simple gt/lt/eq thing, or just "" to indicate "any version"
createToken('COMPARATORLOOSE', `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`);
createToken('COMPARATOR', `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`);
// An expression to strip any whitespace between the gtlt and the thing
// it modifies, so that `> 1.2.3` ==> `>1.2.3`
createToken('COMPARATORTRIM', `(\\s*)${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true);
exports.comparatorTrimReplace = '$1$2$3';
// Something like `1.2.3 - 1.2.4`
// Note that these all use the loose form, because they'll be
// checked against either the strict or loose comparator form
// later.
createToken('HYPHENRANGE', `^\\s*(${src[t.XRANGEPLAIN]})` + `\\s+-\\s+` + `(${src[t.XRANGEPLAIN]})` + `\\s*$`);
createToken('HYPHENRANGELOOSE', `^\\s*(${src[t.XRANGEPLAINLOOSE]})` + `\\s+-\\s+` + `(${src[t.XRANGEPLAINLOOSE]})` + `\\s*$`);
// Star ranges basically just allow anything at all.
createToken('STAR', '(<|>)?=?\\s*\\*');
// >=0.0.0 is like a star
createToken('GTE0', '^\\s*>=\\s*0\\.0\\.0\\s*$');
createToken('GTE0PRE', '^\\s*>=\\s*0\\.0\\.0-0\\s*$');

},{"./constants":"kfqYl","./debug":"bFCt8"}],"kfqYl":[function(require,module,exports) {
// Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.
const SEMVER_SPEC_VERSION = '2.0.0';
const MAX_LENGTH = 256;
const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */ 9007199254740991;
// Max safe segment length for coercion.
const MAX_SAFE_COMPONENT_LENGTH = 16;
module.exports = {
    SEMVER_SPEC_VERSION,
    MAX_LENGTH,
    MAX_SAFE_INTEGER,
    MAX_SAFE_COMPONENT_LENGTH
};

},{}],"bFCt8":[function(require,module,exports) {
var process = require("process");
const debug = (typeof process === 'object' && process.env, ()=>{});
module.exports = debug;

},{"process":"d5jf4"}],"7HV8v":[function(require,module,exports) {
const debug = require('../internal/debug');
const { MAX_LENGTH , MAX_SAFE_INTEGER  } = require('../internal/constants');
const { re , t  } = require('../internal/re');
const parseOptions = require('../internal/parse-options');
const { compareIdentifiers  } = require('../internal/identifiers');
class SemVer {
    constructor(version, options){
        options = parseOptions(options);
        if (version instanceof SemVer) {
            if (version.loose === !!options.loose && version.includePrerelease === !!options.includePrerelease) return version;
            else version = version.version;
        } else if (typeof version !== 'string') throw new TypeError(`Invalid Version: ${version}`);
        if (version.length > MAX_LENGTH) throw new TypeError(`version is longer than ${MAX_LENGTH} characters`);
        debug('SemVer', version, options);
        this.options = options;
        this.loose = !!options.loose;
        // this isn't actually relevant for versions, but keep it so that we
        // don't run into trouble passing this.options around.
        this.includePrerelease = !!options.includePrerelease;
        const m = version.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL]);
        if (!m) throw new TypeError(`Invalid Version: ${version}`);
        this.raw = version;
        // these are actually numbers
        this.major = +m[1];
        this.minor = +m[2];
        this.patch = +m[3];
        if (this.major > MAX_SAFE_INTEGER || this.major < 0) throw new TypeError('Invalid major version');
        if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) throw new TypeError('Invalid minor version');
        if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) throw new TypeError('Invalid patch version');
        // numberify any prerelease numeric ids
        if (!m[4]) this.prerelease = [];
        else this.prerelease = m[4].split('.').map((id)=>{
            if (/^[0-9]+$/.test(id)) {
                const num = +id;
                if (num >= 0 && num < MAX_SAFE_INTEGER) return num;
            }
            return id;
        });
        this.build = m[5] ? m[5].split('.') : [];
        this.format();
    }
    format() {
        this.version = `${this.major}.${this.minor}.${this.patch}`;
        if (this.prerelease.length) this.version += `-${this.prerelease.join('.')}`;
        return this.version;
    }
    toString() {
        return this.version;
    }
    compare(other) {
        debug('SemVer.compare', this.version, this.options, other);
        if (!(other instanceof SemVer)) {
            if (typeof other === 'string' && other === this.version) return 0;
            other = new SemVer(other, this.options);
        }
        if (other.version === this.version) return 0;
        return this.compareMain(other) || this.comparePre(other);
    }
    compareMain(other) {
        if (!(other instanceof SemVer)) other = new SemVer(other, this.options);
        return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
    }
    comparePre(other) {
        if (!(other instanceof SemVer)) other = new SemVer(other, this.options);
        // NOT having a prerelease is > having one
        if (this.prerelease.length && !other.prerelease.length) return -1;
        else if (!this.prerelease.length && other.prerelease.length) return 1;
        else if (!this.prerelease.length && !other.prerelease.length) return 0;
        let i = 0;
        do {
            const a = this.prerelease[i];
            const b = other.prerelease[i];
            debug('prerelease compare', i, a, b);
            if (a === undefined && b === undefined) return 0;
            else if (b === undefined) return 1;
            else if (a === undefined) return -1;
            else if (a === b) continue;
            else return compareIdentifiers(a, b);
        }while (++i)
    }
    compareBuild(other) {
        if (!(other instanceof SemVer)) other = new SemVer(other, this.options);
        let i = 0;
        do {
            const a = this.build[i];
            const b = other.build[i];
            debug('prerelease compare', i, a, b);
            if (a === undefined && b === undefined) return 0;
            else if (b === undefined) return 1;
            else if (a === undefined) return -1;
            else if (a === b) continue;
            else return compareIdentifiers(a, b);
        }while (++i)
    }
    // preminor will bump the version up to the next minor release, and immediately
    // down to pre-release. premajor and prepatch work the same way.
    inc(release, identifier) {
        switch(release){
            case 'premajor':
                this.prerelease.length = 0;
                this.patch = 0;
                this.minor = 0;
                this.major++;
                this.inc('pre', identifier);
                break;
            case 'preminor':
                this.prerelease.length = 0;
                this.patch = 0;
                this.minor++;
                this.inc('pre', identifier);
                break;
            case 'prepatch':
                // If this is already a prerelease, it will bump to the next version
                // drop any prereleases that might already exist, since they are not
                // relevant at this point.
                this.prerelease.length = 0;
                this.inc('patch', identifier);
                this.inc('pre', identifier);
                break;
            // If the input is a non-prerelease version, this acts the same as
            // prepatch.
            case 'prerelease':
                if (this.prerelease.length === 0) this.inc('patch', identifier);
                this.inc('pre', identifier);
                break;
            case 'major':
                // If this is a pre-major version, bump up to the same major version.
                // Otherwise increment major.
                // 1.0.0-5 bumps to 1.0.0
                // 1.1.0 bumps to 2.0.0
                if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) this.major++;
                this.minor = 0;
                this.patch = 0;
                this.prerelease = [];
                break;
            case 'minor':
                // If this is a pre-minor version, bump up to the same minor version.
                // Otherwise increment minor.
                // 1.2.0-5 bumps to 1.2.0
                // 1.2.1 bumps to 1.3.0
                if (this.patch !== 0 || this.prerelease.length === 0) this.minor++;
                this.patch = 0;
                this.prerelease = [];
                break;
            case 'patch':
                // If this is not a pre-release version, it will increment the patch.
                // If it is a pre-release it will bump up to the same patch version.
                // 1.2.0-5 patches to 1.2.0
                // 1.2.0 patches to 1.2.1
                if (this.prerelease.length === 0) this.patch++;
                this.prerelease = [];
                break;
            // This probably shouldn't be used publicly.
            // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.
            case 'pre':
                if (this.prerelease.length === 0) this.prerelease = [
                    0
                ];
                else {
                    let i = this.prerelease.length;
                    while(--i >= 0)if (typeof this.prerelease[i] === 'number') {
                        this.prerelease[i]++;
                        i = -2;
                    }
                    if (i === -1) // didn't increment anything
                    this.prerelease.push(0);
                }
                if (identifier) {
                    // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
                    // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
                    if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
                        if (isNaN(this.prerelease[1])) this.prerelease = [
                            identifier,
                            0
                        ];
                    } else this.prerelease = [
                        identifier,
                        0
                    ];
                }
                break;
            default:
                throw new Error(`invalid increment argument: ${release}`);
        }
        this.format();
        this.raw = this.version;
        return this;
    }
}
module.exports = SemVer;

},{"../internal/debug":"bFCt8","../internal/constants":"kfqYl","../internal/re":"3aKaA","../internal/parse-options":"1qAg7","../internal/identifiers":"3Ushi"}],"1qAg7":[function(require,module,exports) {
// parse out just the options we care about so we always get a consistent
// obj with keys in a consistent order.
const opts = [
    'includePrerelease',
    'loose',
    'rtl'
];
const parseOptions = (options)=>!options ? {} : typeof options !== 'object' ? {
        loose: true
    } : opts.filter((k)=>options[k]
    ).reduce((o, k)=>{
        o[k] = true;
        return o;
    }, {})
;
module.exports = parseOptions;

},{}],"3Ushi":[function(require,module,exports) {
const numeric = /^[0-9]+$/;
const compareIdentifiers = (a, b)=>{
    const anum = numeric.test(a);
    const bnum = numeric.test(b);
    if (anum && bnum) {
        a = +a;
        b = +b;
    }
    return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
};
const rcompareIdentifiers = (a, b)=>compareIdentifiers(b, a)
;
module.exports = {
    compareIdentifiers,
    rcompareIdentifiers
};

},{}],"fKLuB":[function(require,module,exports) {
const { MAX_LENGTH  } = require('../internal/constants');
const { re , t  } = require('../internal/re');
const SemVer = require('../classes/semver');
const parseOptions = require('../internal/parse-options');
const parse = (version, options)=>{
    options = parseOptions(options);
    if (version instanceof SemVer) return version;
    if (typeof version !== 'string') return null;
    if (version.length > MAX_LENGTH) return null;
    const r = options.loose ? re[t.LOOSE] : re[t.FULL];
    if (!r.test(version)) return null;
    try {
        return new SemVer(version, options);
    } catch (er) {
        return null;
    }
};
module.exports = parse;

},{"../internal/constants":"kfqYl","../internal/re":"3aKaA","../classes/semver":"7HV8v","../internal/parse-options":"1qAg7"}],"fONiE":[function(require,module,exports) {
const parse = require('./parse');
const valid = (version, options)=>{
    const v = parse(version, options);
    return v ? v.version : null;
};
module.exports = valid;

},{"./parse":"fKLuB"}],"lDszQ":[function(require,module,exports) {
const parse = require('./parse');
const clean = (version, options)=>{
    const s = parse(version.trim().replace(/^[=v]+/, ''), options);
    return s ? s.version : null;
};
module.exports = clean;

},{"./parse":"fKLuB"}],"knExV":[function(require,module,exports) {
const SemVer = require('../classes/semver');
const inc = (version, release, options, identifier)=>{
    if (typeof options === 'string') {
        identifier = options;
        options = undefined;
    }
    try {
        return new SemVer(version instanceof SemVer ? version.version : version, options).inc(release, identifier).version;
    } catch (er) {
        return null;
    }
};
module.exports = inc;

},{"../classes/semver":"7HV8v"}],"gd8W5":[function(require,module,exports) {
const parse = require('./parse');
const eq = require('./eq');
const diff = (version1, version2)=>{
    if (eq(version1, version2)) return null;
    else {
        const v1 = parse(version1);
        const v2 = parse(version2);
        const hasPre = v1.prerelease.length || v2.prerelease.length;
        const prefix = hasPre ? 'pre' : '';
        const defaultResult = hasPre ? 'prerelease' : '';
        for(const key in v1)if (key === 'major' || key === 'minor' || key === 'patch') {
            if (v1[key] !== v2[key]) return prefix + key;
        }
        return defaultResult // may be undefined
        ;
    }
};
module.exports = diff;

},{"./parse":"fKLuB","./eq":"g8cVO"}],"g8cVO":[function(require,module,exports) {
const compare = require('./compare');
const eq = (a, b, loose)=>compare(a, b, loose) === 0
;
module.exports = eq;

},{"./compare":"d0byB"}],"d0byB":[function(require,module,exports) {
const SemVer = require('../classes/semver');
const compare = (a, b, loose)=>new SemVer(a, loose).compare(new SemVer(b, loose))
;
module.exports = compare;

},{"../classes/semver":"7HV8v"}],"aQdxS":[function(require,module,exports) {
const SemVer = require('../classes/semver');
const major = (a, loose)=>new SemVer(a, loose).major
;
module.exports = major;

},{"../classes/semver":"7HV8v"}],"5Jk7e":[function(require,module,exports) {
const SemVer = require('../classes/semver');
const minor = (a, loose)=>new SemVer(a, loose).minor
;
module.exports = minor;

},{"../classes/semver":"7HV8v"}],"k27vv":[function(require,module,exports) {
const SemVer = require('../classes/semver');
const patch = (a, loose)=>new SemVer(a, loose).patch
;
module.exports = patch;

},{"../classes/semver":"7HV8v"}],"53tgW":[function(require,module,exports) {
const parse = require('./parse');
const prerelease = (version, options)=>{
    const parsed = parse(version, options);
    return parsed && parsed.prerelease.length ? parsed.prerelease : null;
};
module.exports = prerelease;

},{"./parse":"fKLuB"}],"aVRRy":[function(require,module,exports) {
const compare = require('./compare');
const rcompare = (a, b, loose)=>compare(b, a, loose)
;
module.exports = rcompare;

},{"./compare":"d0byB"}],"cRDDp":[function(require,module,exports) {
const compare = require('./compare');
const compareLoose = (a, b)=>compare(a, b, true)
;
module.exports = compareLoose;

},{"./compare":"d0byB"}],"8IgjV":[function(require,module,exports) {
const SemVer = require('../classes/semver');
const compareBuild = (a, b, loose)=>{
    const versionA = new SemVer(a, loose);
    const versionB = new SemVer(b, loose);
    return versionA.compare(versionB) || versionA.compareBuild(versionB);
};
module.exports = compareBuild;

},{"../classes/semver":"7HV8v"}],"uRtcB":[function(require,module,exports) {
const compareBuild = require('./compare-build');
const sort = (list, loose)=>list.sort((a, b)=>compareBuild(a, b, loose)
    )
;
module.exports = sort;

},{"./compare-build":"8IgjV"}],"faT9h":[function(require,module,exports) {
const compareBuild = require('./compare-build');
const rsort = (list, loose)=>list.sort((a, b)=>compareBuild(b, a, loose)
    )
;
module.exports = rsort;

},{"./compare-build":"8IgjV"}],"4Ummg":[function(require,module,exports) {
const compare = require('./compare');
const gt = (a, b, loose)=>compare(a, b, loose) > 0
;
module.exports = gt;

},{"./compare":"d0byB"}],"cevz4":[function(require,module,exports) {
const compare = require('./compare');
const lt = (a, b, loose)=>compare(a, b, loose) < 0
;
module.exports = lt;

},{"./compare":"d0byB"}],"6pfyl":[function(require,module,exports) {
const compare = require('./compare');
const neq = (a, b, loose)=>compare(a, b, loose) !== 0
;
module.exports = neq;

},{"./compare":"d0byB"}],"10dKg":[function(require,module,exports) {
const compare = require('./compare');
const gte = (a, b, loose)=>compare(a, b, loose) >= 0
;
module.exports = gte;

},{"./compare":"d0byB"}],"g8gHq":[function(require,module,exports) {
const compare = require('./compare');
const lte = (a, b, loose)=>compare(a, b, loose) <= 0
;
module.exports = lte;

},{"./compare":"d0byB"}],"duXdn":[function(require,module,exports) {
const eq = require('./eq');
const neq = require('./neq');
const gt = require('./gt');
const gte = require('./gte');
const lt = require('./lt');
const lte = require('./lte');
const cmp = (a, op, b, loose)=>{
    switch(op){
        case '===':
            if (typeof a === 'object') a = a.version;
            if (typeof b === 'object') b = b.version;
            return a === b;
        case '!==':
            if (typeof a === 'object') a = a.version;
            if (typeof b === 'object') b = b.version;
            return a !== b;
        case '':
        case '=':
        case '==':
            return eq(a, b, loose);
        case '!=':
            return neq(a, b, loose);
        case '>':
            return gt(a, b, loose);
        case '>=':
            return gte(a, b, loose);
        case '<':
            return lt(a, b, loose);
        case '<=':
            return lte(a, b, loose);
        default:
            throw new TypeError(`Invalid operator: ${op}`);
    }
};
module.exports = cmp;

},{"./eq":"g8cVO","./neq":"6pfyl","./gt":"4Ummg","./gte":"10dKg","./lt":"cevz4","./lte":"g8gHq"}],"mfbCy":[function(require,module,exports) {
const SemVer = require('../classes/semver');
const parse = require('./parse');
const { re , t  } = require('../internal/re');
const coerce = (version, options)=>{
    if (version instanceof SemVer) return version;
    if (typeof version === 'number') version = String(version);
    if (typeof version !== 'string') return null;
    options = options || {};
    let match = null;
    if (!options.rtl) match = version.match(re[t.COERCE]);
    else {
        // Find the right-most coercible string that does not share
        // a terminus with a more left-ward coercible string.
        // Eg, '1.2.3.4' wants to coerce '2.3.4', not '3.4' or '4'
        //
        // Walk through the string checking with a /g regexp
        // Manually set the index so as to pick up overlapping matches.
        // Stop when we get a match that ends at the string end, since no
        // coercible string can be more right-ward without the same terminus.
        let next;
        while((next = re[t.COERCERTL].exec(version)) && (!match || match.index + match[0].length !== version.length)){
            if (!match || next.index + next[0].length !== match.index + match[0].length) match = next;
            re[t.COERCERTL].lastIndex = next.index + next[1].length + next[2].length;
        }
        // leave it in a clean state
        re[t.COERCERTL].lastIndex = -1;
    }
    if (match === null) return null;
    return parse(`${match[2]}.${match[3] || '0'}.${match[4] || '0'}`, options);
};
module.exports = coerce;

},{"../classes/semver":"7HV8v","./parse":"fKLuB","../internal/re":"3aKaA"}],"gVFDT":[function(require,module,exports) {
const ANY = Symbol('SemVer ANY');
// hoisted class for cyclic dependency
class Comparator {
    static get ANY() {
        return ANY;
    }
    constructor(comp, options){
        options = parseOptions(options);
        if (comp instanceof Comparator) {
            if (comp.loose === !!options.loose) return comp;
            else comp = comp.value;
        }
        debug('comparator', comp, options);
        this.options = options;
        this.loose = !!options.loose;
        this.parse(comp);
        if (this.semver === ANY) this.value = '';
        else this.value = this.operator + this.semver.version;
        debug('comp', this);
    }
    parse(comp) {
        const r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR];
        const m = comp.match(r);
        if (!m) throw new TypeError(`Invalid comparator: ${comp}`);
        this.operator = m[1] !== undefined ? m[1] : '';
        if (this.operator === '=') this.operator = '';
        // if it literally is just '>' or '' then allow anything.
        if (!m[2]) this.semver = ANY;
        else this.semver = new SemVer(m[2], this.options.loose);
    }
    toString() {
        return this.value;
    }
    test(version) {
        debug('Comparator.test', version, this.options.loose);
        if (this.semver === ANY || version === ANY) return true;
        if (typeof version === 'string') try {
            version = new SemVer(version, this.options);
        } catch (er) {
            return false;
        }
        return cmp(version, this.operator, this.semver, this.options);
    }
    intersects(comp, options) {
        if (!(comp instanceof Comparator)) throw new TypeError('a Comparator is required');
        if (!options || typeof options !== 'object') options = {
            loose: !!options,
            includePrerelease: false
        };
        if (this.operator === '') {
            if (this.value === '') return true;
            return new Range(comp.value, options).test(this.value);
        } else if (comp.operator === '') {
            if (comp.value === '') return true;
            return new Range(this.value, options).test(comp.semver);
        }
        const sameDirectionIncreasing = (this.operator === '>=' || this.operator === '>') && (comp.operator === '>=' || comp.operator === '>');
        const sameDirectionDecreasing = (this.operator === '<=' || this.operator === '<') && (comp.operator === '<=' || comp.operator === '<');
        const sameSemVer = this.semver.version === comp.semver.version;
        const differentDirectionsInclusive = (this.operator === '>=' || this.operator === '<=') && (comp.operator === '>=' || comp.operator === '<=');
        const oppositeDirectionsLessThan = cmp(this.semver, '<', comp.semver, options) && (this.operator === '>=' || this.operator === '>') && (comp.operator === '<=' || comp.operator === '<');
        const oppositeDirectionsGreaterThan = cmp(this.semver, '>', comp.semver, options) && (this.operator === '<=' || this.operator === '<') && (comp.operator === '>=' || comp.operator === '>');
        return sameDirectionIncreasing || sameDirectionDecreasing || sameSemVer && differentDirectionsInclusive || oppositeDirectionsLessThan || oppositeDirectionsGreaterThan;
    }
}
module.exports = Comparator;
const parseOptions = require('../internal/parse-options');
const { re , t  } = require('../internal/re');
const cmp = require('../functions/cmp');
const debug = require('../internal/debug');
const SemVer = require('./semver');
const Range = require('./range');

},{"../internal/parse-options":"1qAg7","../internal/re":"3aKaA","../functions/cmp":"duXdn","../internal/debug":"bFCt8","./semver":"7HV8v","./range":"iSOAN"}],"iSOAN":[function(require,module,exports) {
// hoisted class for cyclic dependency
class Range {
    constructor(range, options){
        options = parseOptions(options);
        if (range instanceof Range) {
            if (range.loose === !!options.loose && range.includePrerelease === !!options.includePrerelease) return range;
            else return new Range(range.raw, options);
        }
        if (range instanceof Comparator) {
            // just put it in the set and return
            this.raw = range.value;
            this.set = [
                [
                    range
                ]
            ];
            this.format();
            return this;
        }
        this.options = options;
        this.loose = !!options.loose;
        this.includePrerelease = !!options.includePrerelease;
        // First, split based on boolean or ||
        this.raw = range;
        this.set = range.split('||')// map the range to a 2d array of comparators
        .map((r)=>this.parseRange(r.trim())
        )// throw out any comparator lists that are empty
        // this generally means that it was not a valid range, which is allowed
        // in loose mode, but will still throw if the WHOLE range is invalid.
        .filter((c)=>c.length
        );
        if (!this.set.length) throw new TypeError(`Invalid SemVer Range: ${range}`);
        // if we have any that are not the null set, throw out null sets.
        if (this.set.length > 1) {
            // keep the first one, in case they're all null sets
            const first = this.set[0];
            this.set = this.set.filter((c)=>!isNullSet(c[0])
            );
            if (this.set.length === 0) this.set = [
                first
            ];
            else if (this.set.length > 1) {
                // if we have any that are *, then the range is just *
                for (const c of this.set)if (c.length === 1 && isAny(c[0])) {
                    this.set = [
                        c
                    ];
                    break;
                }
            }
        }
        this.format();
    }
    format() {
        this.range = this.set.map((comps)=>{
            return comps.join(' ').trim();
        }).join('||').trim();
        return this.range;
    }
    toString() {
        return this.range;
    }
    parseRange(range) {
        range = range.trim();
        // memoize range parsing for performance.
        // this is a very hot path, and fully deterministic.
        const memoOpts = Object.keys(this.options).join(',');
        const memoKey = `parseRange:${memoOpts}:${range}`;
        const cached = cache.get(memoKey);
        if (cached) return cached;
        const loose = this.options.loose;
        // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
        const hr = loose ? re[t.HYPHENRANGELOOSE] : re[t.HYPHENRANGE];
        range = range.replace(hr, hyphenReplace(this.options.includePrerelease));
        debug('hyphen replace', range);
        // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
        range = range.replace(re[t.COMPARATORTRIM], comparatorTrimReplace);
        debug('comparator trim', range);
        // `~ 1.2.3` => `~1.2.3`
        range = range.replace(re[t.TILDETRIM], tildeTrimReplace);
        // `^ 1.2.3` => `^1.2.3`
        range = range.replace(re[t.CARETTRIM], caretTrimReplace);
        // normalize spaces
        range = range.split(/\s+/).join(' ');
        // At this point, the range is completely trimmed and
        // ready to be split into comparators.
        let rangeList = range.split(' ').map((comp)=>parseComparator(comp, this.options)
        ).join(' ').split(/\s+/)// >=0.0.0 is equivalent to *
        .map((comp)=>replaceGTE0(comp, this.options)
        );
        if (loose) // in loose mode, throw out any that are not valid comparators
        rangeList = rangeList.filter((comp)=>{
            debug('loose invalid filter', comp, this.options);
            return !!comp.match(re[t.COMPARATORLOOSE]);
        });
        debug('range list', rangeList);
        // if any comparators are the null set, then replace with JUST null set
        // if more than one comparator, remove any * comparators
        // also, don't include the same comparator more than once
        const rangeMap = new Map();
        const comparators = rangeList.map((comp)=>new Comparator(comp, this.options)
        );
        for (const comp1 of comparators){
            if (isNullSet(comp1)) return [
                comp1
            ];
            rangeMap.set(comp1.value, comp1);
        }
        if (rangeMap.size > 1 && rangeMap.has('')) rangeMap.delete('');
        const result = [
            ...rangeMap.values()
        ];
        cache.set(memoKey, result);
        return result;
    }
    intersects(range, options) {
        if (!(range instanceof Range)) throw new TypeError('a Range is required');
        return this.set.some((thisComparators)=>{
            return isSatisfiable(thisComparators, options) && range.set.some((rangeComparators)=>{
                return isSatisfiable(rangeComparators, options) && thisComparators.every((thisComparator)=>{
                    return rangeComparators.every((rangeComparator)=>{
                        return thisComparator.intersects(rangeComparator, options);
                    });
                });
            });
        });
    }
    // if ANY of the sets match ALL of its comparators, then pass
    test(version) {
        if (!version) return false;
        if (typeof version === 'string') try {
            version = new SemVer(version, this.options);
        } catch (er) {
            return false;
        }
        for(let i = 0; i < this.set.length; i++){
            if (testSet(this.set[i], version, this.options)) return true;
        }
        return false;
    }
}
module.exports = Range;
const LRU = require('lru-cache');
const cache = new LRU({
    max: 1000
});
const parseOptions = require('../internal/parse-options');
const Comparator = require('./comparator');
const debug = require('../internal/debug');
const SemVer = require('./semver');
const { re , t , comparatorTrimReplace , tildeTrimReplace , caretTrimReplace ,  } = require('../internal/re');
const isNullSet = (c)=>c.value === '<0.0.0-0'
;
const isAny = (c)=>c.value === ''
;
// take a set of comparators and determine whether there
// exists a version which can satisfy it
const isSatisfiable = (comparators, options)=>{
    let result = true;
    const remainingComparators = comparators.slice();
    let testComparator = remainingComparators.pop();
    while(result && remainingComparators.length){
        result = remainingComparators.every((otherComparator)=>{
            return testComparator.intersects(otherComparator, options);
        });
        testComparator = remainingComparators.pop();
    }
    return result;
};
// comprised of xranges, tildes, stars, and gtlt's at this point.
// already replaced the hyphen ranges
// turn into a set of JUST comparators.
const parseComparator = (comp, options)=>{
    debug('comp', comp, options);
    comp = replaceCarets(comp, options);
    debug('caret', comp);
    comp = replaceTildes(comp, options);
    debug('tildes', comp);
    comp = replaceXRanges(comp, options);
    debug('xrange', comp);
    comp = replaceStars(comp, options);
    debug('stars', comp);
    return comp;
};
const isX = (id)=>!id || id.toLowerCase() === 'x' || id === '*'
;
// ~, ~> --> * (any, kinda silly)
// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0-0
// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0-0
// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0-0
// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0-0
// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0-0
const replaceTildes = (comp, options)=>comp.trim().split(/\s+/).map((c)=>{
        return replaceTilde(c, options);
    }).join(' ')
;
const replaceTilde = (comp, options)=>{
    const r = options.loose ? re[t.TILDELOOSE] : re[t.TILDE];
    return comp.replace(r, (_, M, m, p, pr)=>{
        debug('tilde', comp, _, M, m, p, pr);
        let ret;
        if (isX(M)) ret = '';
        else if (isX(m)) ret = `>=${M}.0.0 <${+M + 1}.0.0-0`;
        else if (isX(p)) // ~1.2 == >=1.2.0 <1.3.0-0
        ret = `>=${M}.${m}.0 <${M}.${+m + 1}.0-0`;
        else if (pr) {
            debug('replaceTilde pr', pr);
            ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
        } else // ~1.2.3 == >=1.2.3 <1.3.0-0
        ret = `>=${M}.${m}.${p} <${M}.${+m + 1}.0-0`;
        debug('tilde return', ret);
        return ret;
    });
};
// ^ --> * (any, kinda silly)
// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0-0
// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0-0
// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0-0
// ^1.2.3 --> >=1.2.3 <2.0.0-0
// ^1.2.0 --> >=1.2.0 <2.0.0-0
const replaceCarets = (comp, options)=>comp.trim().split(/\s+/).map((c)=>{
        return replaceCaret(c, options);
    }).join(' ')
;
const replaceCaret = (comp, options)=>{
    debug('caret', comp, options);
    const r = options.loose ? re[t.CARETLOOSE] : re[t.CARET];
    const z = options.includePrerelease ? '-0' : '';
    return comp.replace(r, (_, M, m, p, pr)=>{
        debug('caret', comp, _, M, m, p, pr);
        let ret;
        if (isX(M)) ret = '';
        else if (isX(m)) ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`;
        else if (isX(p)) {
            if (M === '0') ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`;
            else ret = `>=${M}.${m}.0${z} <${+M + 1}.0.0-0`;
        } else if (pr) {
            debug('replaceCaret pr', pr);
            if (M === '0') {
                if (m === '0') ret = `>=${M}.${m}.${p}-${pr} <${M}.${m}.${+p + 1}-0`;
                else ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
            } else ret = `>=${M}.${m}.${p}-${pr} <${+M + 1}.0.0-0`;
        } else {
            debug('no pr');
            if (M === '0') {
                if (m === '0') ret = `>=${M}.${m}.${p}${z} <${M}.${m}.${+p + 1}-0`;
                else ret = `>=${M}.${m}.${p}${z} <${M}.${+m + 1}.0-0`;
            } else ret = `>=${M}.${m}.${p} <${+M + 1}.0.0-0`;
        }
        debug('caret return', ret);
        return ret;
    });
};
const replaceXRanges = (comp, options)=>{
    debug('replaceXRanges', comp, options);
    return comp.split(/\s+/).map((c)=>{
        return replaceXRange(c, options);
    }).join(' ');
};
const replaceXRange = (comp, options)=>{
    comp = comp.trim();
    const r = options.loose ? re[t.XRANGELOOSE] : re[t.XRANGE];
    return comp.replace(r, (ret, gtlt, M, m, p, pr)=>{
        debug('xRange', comp, ret, gtlt, M, m, p, pr);
        const xM = isX(M);
        const xm = xM || isX(m);
        const xp = xm || isX(p);
        const anyX = xp;
        if (gtlt === '=' && anyX) gtlt = '';
        // if we're including prereleases in the match, then we need
        // to fix this to -0, the lowest possible prerelease value
        pr = options.includePrerelease ? '-0' : '';
        if (xM) {
            if (gtlt === '>' || gtlt === '<') // nothing is allowed
            ret = '<0.0.0-0';
            else // nothing is forbidden
            ret = '*';
        } else if (gtlt && anyX) {
            // we know patch is an x, because we have any x at all.
            // replace X with 0
            if (xm) m = 0;
            p = 0;
            if (gtlt === '>') {
                // >1 => >=2.0.0
                // >1.2 => >=1.3.0
                gtlt = '>=';
                if (xm) {
                    M = +M + 1;
                    m = 0;
                    p = 0;
                } else {
                    m = +m + 1;
                    p = 0;
                }
            } else if (gtlt === '<=') {
                // <=0.7.x is actually <0.8.0, since any 0.7.x should
                // pass.  Similarly, <=7.x is actually <8.0.0, etc.
                gtlt = '<';
                if (xm) M = +M + 1;
                else m = +m + 1;
            }
            if (gtlt === '<') pr = '-0';
            ret = `${gtlt + M}.${m}.${p}${pr}`;
        } else if (xm) ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0`;
        else if (xp) ret = `>=${M}.${m}.0${pr} <${M}.${+m + 1}.0-0`;
        debug('xRange return', ret);
        return ret;
    });
};
// Because * is AND-ed with everything else in the comparator,
// and '' means "any version", just remove the *s entirely.
const replaceStars = (comp, options)=>{
    debug('replaceStars', comp, options);
    // Looseness is ignored here.  star is always as loose as it gets!
    return comp.trim().replace(re[t.STAR], '');
};
const replaceGTE0 = (comp, options)=>{
    debug('replaceGTE0', comp, options);
    return comp.trim().replace(re[options.includePrerelease ? t.GTE0PRE : t.GTE0], '');
};
// This function is passed to string.replace(re[t.HYPHENRANGE])
// M, m, patch, prerelease, build
// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
// 1.2.3 - 3.4 => >=1.2.0 <3.5.0-0 Any 3.4.x will do
// 1.2 - 3.4 => >=1.2.0 <3.5.0-0
const hyphenReplace = (incPr)=>($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr, tb)=>{
        if (isX(fM)) from = '';
        else if (isX(fm)) from = `>=${fM}.0.0${incPr ? '-0' : ''}`;
        else if (isX(fp)) from = `>=${fM}.${fm}.0${incPr ? '-0' : ''}`;
        else if (fpr) from = `>=${from}`;
        else from = `>=${from}${incPr ? '-0' : ''}`;
        if (isX(tM)) to = '';
        else if (isX(tm)) to = `<${+tM + 1}.0.0-0`;
        else if (isX(tp)) to = `<${tM}.${+tm + 1}.0-0`;
        else if (tpr) to = `<=${tM}.${tm}.${tp}-${tpr}`;
        else if (incPr) to = `<${tM}.${tm}.${+tp + 1}-0`;
        else to = `<=${to}`;
        return `${from} ${to}`.trim();
    }
;
const testSet = (set, version, options)=>{
    for(let i = 0; i < set.length; i++){
        if (!set[i].test(version)) return false;
    }
    if (version.prerelease.length && !options.includePrerelease) {
        // Find the set of versions that are allowed to have prereleases
        // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
        // That should allow `1.2.3-pr.2` to pass.
        // However, `1.2.4-alpha.notready` should NOT be allowed,
        // even though it's within the range set by the comparators.
        for(let i = 0; i < set.length; i++){
            debug(set[i].semver);
            if (set[i].semver === Comparator.ANY) continue;
            if (set[i].semver.prerelease.length > 0) {
                const allowed = set[i].semver;
                if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) return true;
            }
        }
        // Version has a -pre, but it's not one of the ones we like.
        return false;
    }
    return true;
};

},{"lru-cache":"26bTZ","../internal/parse-options":"1qAg7","./comparator":"gVFDT","../internal/debug":"bFCt8","./semver":"7HV8v","../internal/re":"3aKaA"}],"26bTZ":[function(require,module,exports) {
'use strict';
// A linked list to keep track of recently-used-ness
const Yallist = require('yallist');
const MAX = Symbol('max');
const LENGTH = Symbol('length');
const LENGTH_CALCULATOR = Symbol('lengthCalculator');
const ALLOW_STALE = Symbol('allowStale');
const MAX_AGE = Symbol('maxAge');
const DISPOSE = Symbol('dispose');
const NO_DISPOSE_ON_SET = Symbol('noDisposeOnSet');
const LRU_LIST = Symbol('lruList');
const CACHE = Symbol('cache');
const UPDATE_AGE_ON_GET = Symbol('updateAgeOnGet');
const naiveLength = ()=>1
;
// lruList is a yallist where the head is the youngest
// item, and the tail is the oldest.  the list contains the Hit
// objects as the entries.
// Each Hit object has a reference to its Yallist.Node.  This
// never changes.
//
// cache is a Map (or PseudoMap) that matches the keys to
// the Yallist.Node object.
class LRUCache {
    constructor(options){
        if (typeof options === 'number') options = {
            max: options
        };
        if (!options) options = {};
        if (options.max && (typeof options.max !== 'number' || options.max < 0)) throw new TypeError('max must be a non-negative number');
        // Kind of weird to have a default max of Infinity, but oh well.
        const max = this[MAX] = options.max || Infinity;
        const lc = options.length || naiveLength;
        this[LENGTH_CALCULATOR] = typeof lc !== 'function' ? naiveLength : lc;
        this[ALLOW_STALE] = options.stale || false;
        if (options.maxAge && typeof options.maxAge !== 'number') throw new TypeError('maxAge must be a number');
        this[MAX_AGE] = options.maxAge || 0;
        this[DISPOSE] = options.dispose;
        this[NO_DISPOSE_ON_SET] = options.noDisposeOnSet || false;
        this[UPDATE_AGE_ON_GET] = options.updateAgeOnGet || false;
        this.reset();
    }
    // resize the cache when the max changes.
    set max(mL) {
        if (typeof mL !== 'number' || mL < 0) throw new TypeError('max must be a non-negative number');
        this[MAX] = mL || Infinity;
        trim(this);
    }
    get max() {
        return this[MAX];
    }
    set allowStale(allowStale) {
        this[ALLOW_STALE] = !!allowStale;
    }
    get allowStale() {
        return this[ALLOW_STALE];
    }
    set maxAge(mA) {
        if (typeof mA !== 'number') throw new TypeError('maxAge must be a non-negative number');
        this[MAX_AGE] = mA;
        trim(this);
    }
    get maxAge() {
        return this[MAX_AGE];
    }
    // resize the cache when the lengthCalculator changes.
    set lengthCalculator(lC) {
        if (typeof lC !== 'function') lC = naiveLength;
        if (lC !== this[LENGTH_CALCULATOR]) {
            this[LENGTH_CALCULATOR] = lC;
            this[LENGTH] = 0;
            this[LRU_LIST].forEach((hit)=>{
                hit.length = this[LENGTH_CALCULATOR](hit.value, hit.key);
                this[LENGTH] += hit.length;
            });
        }
        trim(this);
    }
    get lengthCalculator() {
        return this[LENGTH_CALCULATOR];
    }
    get length() {
        return this[LENGTH];
    }
    get itemCount() {
        return this[LRU_LIST].length;
    }
    rforEach(fn, thisp) {
        thisp = thisp || this;
        for(let walker = this[LRU_LIST].tail; walker !== null;){
            const prev = walker.prev;
            forEachStep(this, fn, walker, thisp);
            walker = prev;
        }
    }
    forEach(fn, thisp) {
        thisp = thisp || this;
        for(let walker = this[LRU_LIST].head; walker !== null;){
            const next = walker.next;
            forEachStep(this, fn, walker, thisp);
            walker = next;
        }
    }
    keys() {
        return this[LRU_LIST].toArray().map((k)=>k.key
        );
    }
    values() {
        return this[LRU_LIST].toArray().map((k)=>k.value
        );
    }
    reset() {
        if (this[DISPOSE] && this[LRU_LIST] && this[LRU_LIST].length) this[LRU_LIST].forEach((hit)=>this[DISPOSE](hit.key, hit.value)
        );
        this[CACHE] = new Map() // hash of items by key
        ;
        this[LRU_LIST] = new Yallist() // list of items in order of use recency
        ;
        this[LENGTH] = 0 // length of items in the list
        ;
    }
    dump() {
        return this[LRU_LIST].map((hit)=>isStale(this, hit) ? false : {
                k: hit.key,
                v: hit.value,
                e: hit.now + (hit.maxAge || 0)
            }
        ).toArray().filter((h)=>h
        );
    }
    dumpLru() {
        return this[LRU_LIST];
    }
    set(key, value, maxAge) {
        maxAge = maxAge || this[MAX_AGE];
        if (maxAge && typeof maxAge !== 'number') throw new TypeError('maxAge must be a number');
        const now = maxAge ? Date.now() : 0;
        const len = this[LENGTH_CALCULATOR](value, key);
        if (this[CACHE].has(key)) {
            if (len > this[MAX]) {
                del(this, this[CACHE].get(key));
                return false;
            }
            const node = this[CACHE].get(key);
            const item = node.value;
            // dispose of the old one before overwriting
            // split out into 2 ifs for better coverage tracking
            if (this[DISPOSE]) {
                if (!this[NO_DISPOSE_ON_SET]) this[DISPOSE](key, item.value);
            }
            item.now = now;
            item.maxAge = maxAge;
            item.value = value;
            this[LENGTH] += len - item.length;
            item.length = len;
            this.get(key);
            trim(this);
            return true;
        }
        const hit = new Entry(key, value, len, now, maxAge);
        // oversized objects fall out of cache automatically.
        if (hit.length > this[MAX]) {
            if (this[DISPOSE]) this[DISPOSE](key, value);
            return false;
        }
        this[LENGTH] += hit.length;
        this[LRU_LIST].unshift(hit);
        this[CACHE].set(key, this[LRU_LIST].head);
        trim(this);
        return true;
    }
    has(key) {
        if (!this[CACHE].has(key)) return false;
        const hit = this[CACHE].get(key).value;
        return !isStale(this, hit);
    }
    get(key) {
        return get(this, key, true);
    }
    peek(key) {
        return get(this, key, false);
    }
    pop() {
        const node = this[LRU_LIST].tail;
        if (!node) return null;
        del(this, node);
        return node.value;
    }
    del(key) {
        del(this, this[CACHE].get(key));
    }
    load(arr) {
        // reset the cache
        this.reset();
        const now = Date.now();
        // A previous serialized cache has the most recent items first
        for(let l = arr.length - 1; l >= 0; l--){
            const hit = arr[l];
            const expiresAt = hit.e || 0;
            if (expiresAt === 0) // the item was created without expiration in a non aged cache
            this.set(hit.k, hit.v);
            else {
                const maxAge = expiresAt - now;
                // dont add already expired items
                if (maxAge > 0) this.set(hit.k, hit.v, maxAge);
            }
        }
    }
    prune() {
        this[CACHE].forEach((value, key)=>get(this, key, false)
        );
    }
}
const get = (self, key, doUse)=>{
    const node = self[CACHE].get(key);
    if (node) {
        const hit = node.value;
        if (isStale(self, hit)) {
            del(self, node);
            if (!self[ALLOW_STALE]) return undefined;
        } else if (doUse) {
            if (self[UPDATE_AGE_ON_GET]) node.value.now = Date.now();
            self[LRU_LIST].unshiftNode(node);
        }
        return hit.value;
    }
};
const isStale = (self, hit)=>{
    if (!hit || !hit.maxAge && !self[MAX_AGE]) return false;
    const diff = Date.now() - hit.now;
    return hit.maxAge ? diff > hit.maxAge : self[MAX_AGE] && diff > self[MAX_AGE];
};
const trim = (self)=>{
    if (self[LENGTH] > self[MAX]) for(let walker = self[LRU_LIST].tail; self[LENGTH] > self[MAX] && walker !== null;){
        // We know that we're about to delete this one, and also
        // what the next least recently used key will be, so just
        // go ahead and set it now.
        const prev = walker.prev;
        del(self, walker);
        walker = prev;
    }
};
const del = (self, node)=>{
    if (node) {
        const hit = node.value;
        if (self[DISPOSE]) self[DISPOSE](hit.key, hit.value);
        self[LENGTH] -= hit.length;
        self[CACHE].delete(hit.key);
        self[LRU_LIST].removeNode(node);
    }
};
class Entry {
    constructor(key, value, length, now, maxAge){
        this.key = key;
        this.value = value;
        this.length = length;
        this.now = now;
        this.maxAge = maxAge || 0;
    }
}
const forEachStep = (self, fn, node, thisp)=>{
    let hit = node.value;
    if (isStale(self, hit)) {
        del(self, node);
        if (!self[ALLOW_STALE]) hit = undefined;
    }
    if (hit) fn.call(thisp, hit.value, hit.key, self);
};
module.exports = LRUCache;

},{"yallist":"7m1YN"}],"7m1YN":[function(require,module,exports) {
'use strict';
module.exports = Yallist;
Yallist.Node = Node;
Yallist.create = Yallist;
function Yallist(list) {
    var self = this;
    if (!(self instanceof Yallist)) self = new Yallist();
    self.tail = null;
    self.head = null;
    self.length = 0;
    if (list && typeof list.forEach === 'function') list.forEach(function(item) {
        self.push(item);
    });
    else if (arguments.length > 0) for(var i = 0, l = arguments.length; i < l; i++)self.push(arguments[i]);
    return self;
}
Yallist.prototype.removeNode = function(node) {
    if (node.list !== this) throw new Error('removing node which does not belong to this list');
    var next = node.next;
    var prev = node.prev;
    if (next) next.prev = prev;
    if (prev) prev.next = next;
    if (node === this.head) this.head = next;
    if (node === this.tail) this.tail = prev;
    node.list.length--;
    node.next = null;
    node.prev = null;
    node.list = null;
    return next;
};
Yallist.prototype.unshiftNode = function(node) {
    if (node === this.head) return;
    if (node.list) node.list.removeNode(node);
    var head = this.head;
    node.list = this;
    node.next = head;
    if (head) head.prev = node;
    this.head = node;
    if (!this.tail) this.tail = node;
    this.length++;
};
Yallist.prototype.pushNode = function(node) {
    if (node === this.tail) return;
    if (node.list) node.list.removeNode(node);
    var tail = this.tail;
    node.list = this;
    node.prev = tail;
    if (tail) tail.next = node;
    this.tail = node;
    if (!this.head) this.head = node;
    this.length++;
};
Yallist.prototype.push = function() {
    for(var i = 0, l = arguments.length; i < l; i++)push(this, arguments[i]);
    return this.length;
};
Yallist.prototype.unshift = function() {
    for(var i = 0, l = arguments.length; i < l; i++)unshift(this, arguments[i]);
    return this.length;
};
Yallist.prototype.pop = function() {
    if (!this.tail) return undefined;
    var res = this.tail.value;
    this.tail = this.tail.prev;
    if (this.tail) this.tail.next = null;
    else this.head = null;
    this.length--;
    return res;
};
Yallist.prototype.shift = function() {
    if (!this.head) return undefined;
    var res = this.head.value;
    this.head = this.head.next;
    if (this.head) this.head.prev = null;
    else this.tail = null;
    this.length--;
    return res;
};
Yallist.prototype.forEach = function(fn, thisp) {
    thisp = thisp || this;
    for(var walker = this.head, i = 0; walker !== null; i++){
        fn.call(thisp, walker.value, i, this);
        walker = walker.next;
    }
};
Yallist.prototype.forEachReverse = function(fn, thisp) {
    thisp = thisp || this;
    for(var walker = this.tail, i = this.length - 1; walker !== null; i--){
        fn.call(thisp, walker.value, i, this);
        walker = walker.prev;
    }
};
Yallist.prototype.get = function(n) {
    for(var i = 0, walker = this.head; walker !== null && i < n; i++)// abort out of the list early if we hit a cycle
    walker = walker.next;
    if (i === n && walker !== null) return walker.value;
};
Yallist.prototype.getReverse = function(n) {
    for(var i = 0, walker = this.tail; walker !== null && i < n; i++)// abort out of the list early if we hit a cycle
    walker = walker.prev;
    if (i === n && walker !== null) return walker.value;
};
Yallist.prototype.map = function(fn, thisp) {
    thisp = thisp || this;
    var res = new Yallist();
    for(var walker = this.head; walker !== null;){
        res.push(fn.call(thisp, walker.value, this));
        walker = walker.next;
    }
    return res;
};
Yallist.prototype.mapReverse = function(fn, thisp) {
    thisp = thisp || this;
    var res = new Yallist();
    for(var walker = this.tail; walker !== null;){
        res.push(fn.call(thisp, walker.value, this));
        walker = walker.prev;
    }
    return res;
};
Yallist.prototype.reduce = function(fn, initial) {
    var acc;
    var walker = this.head;
    if (arguments.length > 1) acc = initial;
    else if (this.head) {
        walker = this.head.next;
        acc = this.head.value;
    } else throw new TypeError('Reduce of empty list with no initial value');
    for(var i = 0; walker !== null; i++){
        acc = fn(acc, walker.value, i);
        walker = walker.next;
    }
    return acc;
};
Yallist.prototype.reduceReverse = function(fn, initial) {
    var acc;
    var walker = this.tail;
    if (arguments.length > 1) acc = initial;
    else if (this.tail) {
        walker = this.tail.prev;
        acc = this.tail.value;
    } else throw new TypeError('Reduce of empty list with no initial value');
    for(var i = this.length - 1; walker !== null; i--){
        acc = fn(acc, walker.value, i);
        walker = walker.prev;
    }
    return acc;
};
Yallist.prototype.toArray = function() {
    var arr = new Array(this.length);
    for(var i = 0, walker = this.head; walker !== null; i++){
        arr[i] = walker.value;
        walker = walker.next;
    }
    return arr;
};
Yallist.prototype.toArrayReverse = function() {
    var arr = new Array(this.length);
    for(var i = 0, walker = this.tail; walker !== null; i++){
        arr[i] = walker.value;
        walker = walker.prev;
    }
    return arr;
};
Yallist.prototype.slice = function(from, to) {
    to = to || this.length;
    if (to < 0) to += this.length;
    from = from || 0;
    if (from < 0) from += this.length;
    var ret = new Yallist();
    if (to < from || to < 0) return ret;
    if (from < 0) from = 0;
    if (to > this.length) to = this.length;
    for(var i = 0, walker = this.head; walker !== null && i < from; i++)walker = walker.next;
    for(; walker !== null && i < to; i++, walker = walker.next)ret.push(walker.value);
    return ret;
};
Yallist.prototype.sliceReverse = function(from, to) {
    to = to || this.length;
    if (to < 0) to += this.length;
    from = from || 0;
    if (from < 0) from += this.length;
    var ret = new Yallist();
    if (to < from || to < 0) return ret;
    if (from < 0) from = 0;
    if (to > this.length) to = this.length;
    for(var i = this.length, walker = this.tail; walker !== null && i > to; i--)walker = walker.prev;
    for(; walker !== null && i > from; i--, walker = walker.prev)ret.push(walker.value);
    return ret;
};
Yallist.prototype.splice = function(start, deleteCount, ...nodes) {
    if (start > this.length) start = this.length - 1;
    if (start < 0) start = this.length + start;
    for(var i = 0, walker = this.head; walker !== null && i < start; i++)walker = walker.next;
    var ret = [];
    for(var i = 0; walker && i < deleteCount; i++){
        ret.push(walker.value);
        walker = this.removeNode(walker);
    }
    if (walker === null) walker = this.tail;
    if (walker !== this.head && walker !== this.tail) walker = walker.prev;
    for(var i = 0; i < nodes.length; i++)walker = insert(this, walker, nodes[i]);
    return ret;
};
Yallist.prototype.reverse = function() {
    var head = this.head;
    var tail = this.tail;
    for(var walker = head; walker !== null; walker = walker.prev){
        var p = walker.prev;
        walker.prev = walker.next;
        walker.next = p;
    }
    this.head = tail;
    this.tail = head;
    return this;
};
function insert(self, node, value) {
    var inserted = node === self.head ? new Node(value, null, node, self) : new Node(value, node, node.next, self);
    if (inserted.next === null) self.tail = inserted;
    if (inserted.prev === null) self.head = inserted;
    self.length++;
    return inserted;
}
function push(self, item) {
    self.tail = new Node(item, self.tail, null, self);
    if (!self.head) self.head = self.tail;
    self.length++;
}
function unshift(self, item) {
    self.head = new Node(item, null, self.head, self);
    if (!self.tail) self.tail = self.head;
    self.length++;
}
function Node(value, prev, next, list) {
    if (!(this instanceof Node)) return new Node(value, prev, next, list);
    this.list = list;
    this.value = value;
    if (prev) {
        prev.next = this;
        this.prev = prev;
    } else this.prev = null;
    if (next) {
        next.prev = this;
        this.next = next;
    } else this.next = null;
}
try {
    // add if support for Symbol.iterator is present
    require('./iterator.js')(Yallist);
} catch (er) {}

},{"./iterator.js":"8T9JN"}],"8T9JN":[function(require,module,exports) {
'use strict';
module.exports = function(Yallist) {
    Yallist.prototype[Symbol.iterator] = function*() {
        for(let walker = this.head; walker; walker = walker.next)yield walker.value;
    };
};

},{}],"4GGCq":[function(require,module,exports) {
const Range = require('../classes/range');
const satisfies = (version, range, options)=>{
    try {
        range = new Range(range, options);
    } catch (er) {
        return false;
    }
    return range.test(version);
};
module.exports = satisfies;

},{"../classes/range":"iSOAN"}],"h7PG2":[function(require,module,exports) {
const Range = require('../classes/range');
// Mostly just for testing and legacy API reasons
const toComparators = (range, options)=>new Range(range, options).set.map((comp)=>comp.map((c)=>c.value
        ).join(' ').trim().split(' ')
    )
;
module.exports = toComparators;

},{"../classes/range":"iSOAN"}],"k7Iyh":[function(require,module,exports) {
const SemVer = require('../classes/semver');
const Range = require('../classes/range');
const maxSatisfying = (versions, range, options)=>{
    let max = null;
    let maxSV = null;
    let rangeObj = null;
    try {
        rangeObj = new Range(range, options);
    } catch (er) {
        return null;
    }
    versions.forEach((v)=>{
        if (rangeObj.test(v)) // satisfies(v, range, options)
        {
            if (!max || maxSV.compare(v) === -1) {
                // compare(max, v, true)
                max = v;
                maxSV = new SemVer(max, options);
            }
        }
    });
    return max;
};
module.exports = maxSatisfying;

},{"../classes/semver":"7HV8v","../classes/range":"iSOAN"}],"gedPT":[function(require,module,exports) {
const SemVer = require('../classes/semver');
const Range = require('../classes/range');
const minSatisfying = (versions, range, options)=>{
    let min = null;
    let minSV = null;
    let rangeObj = null;
    try {
        rangeObj = new Range(range, options);
    } catch (er) {
        return null;
    }
    versions.forEach((v)=>{
        if (rangeObj.test(v)) // satisfies(v, range, options)
        {
            if (!min || minSV.compare(v) === 1) {
                // compare(min, v, true)
                min = v;
                minSV = new SemVer(min, options);
            }
        }
    });
    return min;
};
module.exports = minSatisfying;

},{"../classes/semver":"7HV8v","../classes/range":"iSOAN"}],"bD9nR":[function(require,module,exports) {
const SemVer = require('../classes/semver');
const Range = require('../classes/range');
const gt = require('../functions/gt');
const minVersion = (range, loose)=>{
    range = new Range(range, loose);
    let minver = new SemVer('0.0.0');
    if (range.test(minver)) return minver;
    minver = new SemVer('0.0.0-0');
    if (range.test(minver)) return minver;
    minver = null;
    for(let i = 0; i < range.set.length; ++i){
        const comparators = range.set[i];
        let setMin = null;
        comparators.forEach((comparator)=>{
            // Clone to avoid manipulating the comparator's semver object.
            const compver = new SemVer(comparator.semver.version);
            switch(comparator.operator){
                case '>':
                    if (compver.prerelease.length === 0) compver.patch++;
                    else compver.prerelease.push(0);
                    compver.raw = compver.format();
                /* fallthrough */ case '':
                case '>=':
                    if (!setMin || gt(compver, setMin)) setMin = compver;
                    break;
                case '<':
                case '<=':
                    break;
                /* istanbul ignore next */ default:
                    throw new Error(`Unexpected operation: ${comparator.operator}`);
            }
        });
        if (setMin && (!minver || gt(minver, setMin))) minver = setMin;
    }
    if (minver && range.test(minver)) return minver;
    return null;
};
module.exports = minVersion;

},{"../classes/semver":"7HV8v","../classes/range":"iSOAN","../functions/gt":"4Ummg"}],"hrqD8":[function(require,module,exports) {
const Range = require('../classes/range');
const validRange = (range, options)=>{
    try {
        // Return '*' instead of '' so that truthiness works.
        // This will throw if it's invalid anyway
        return new Range(range, options).range || '*';
    } catch (er) {
        return null;
    }
};
module.exports = validRange;

},{"../classes/range":"iSOAN"}],"WXkQN":[function(require,module,exports) {
const SemVer = require('../classes/semver');
const Comparator = require('../classes/comparator');
const { ANY  } = Comparator;
const Range = require('../classes/range');
const satisfies = require('../functions/satisfies');
const gt = require('../functions/gt');
const lt = require('../functions/lt');
const lte = require('../functions/lte');
const gte = require('../functions/gte');
const outside = (version, range, hilo, options)=>{
    version = new SemVer(version, options);
    range = new Range(range, options);
    let gtfn, ltefn, ltfn, comp, ecomp;
    switch(hilo){
        case '>':
            gtfn = gt;
            ltefn = lte;
            ltfn = lt;
            comp = '>';
            ecomp = '>=';
            break;
        case '<':
            gtfn = lt;
            ltefn = gte;
            ltfn = gt;
            comp = '<';
            ecomp = '<=';
            break;
        default:
            throw new TypeError('Must provide a hilo val of "<" or ">"');
    }
    // If it satisfies the range it is not outside
    if (satisfies(version, range, options)) return false;
    // From now on, variable terms are as if we're in "gtr" mode.
    // but note that everything is flipped for the "ltr" function.
    for(let i = 0; i < range.set.length; ++i){
        const comparators = range.set[i];
        let high = null;
        let low = null;
        comparators.forEach((comparator)=>{
            if (comparator.semver === ANY) comparator = new Comparator('>=0.0.0');
            high = high || comparator;
            low = low || comparator;
            if (gtfn(comparator.semver, high.semver, options)) high = comparator;
            else if (ltfn(comparator.semver, low.semver, options)) low = comparator;
        });
        // If the edge version comparator has a operator then our version
        // isn't outside it
        if (high.operator === comp || high.operator === ecomp) return false;
        // If the lowest version comparator has an operator and our version
        // is less than it then it isn't higher than the range
        if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) return false;
        else if (low.operator === ecomp && ltfn(version, low.semver)) return false;
    }
    return true;
};
module.exports = outside;

},{"../classes/semver":"7HV8v","../classes/comparator":"gVFDT","../classes/range":"iSOAN","../functions/satisfies":"4GGCq","../functions/gt":"4Ummg","../functions/lt":"cevz4","../functions/lte":"g8gHq","../functions/gte":"10dKg"}],"3m3un":[function(require,module,exports) {
// Determine if version is greater than all the versions possible in the range.
const outside = require('./outside');
const gtr = (version, range, options)=>outside(version, range, '>', options)
;
module.exports = gtr;

},{"./outside":"WXkQN"}],"lVkgp":[function(require,module,exports) {
const outside = require('./outside');
// Determine if version is less than all the versions possible in the range
const ltr = (version, range, options)=>outside(version, range, '<', options)
;
module.exports = ltr;

},{"./outside":"WXkQN"}],"3twh6":[function(require,module,exports) {
const Range = require('../classes/range');
const intersects = (r1, r2, options)=>{
    r1 = new Range(r1, options);
    r2 = new Range(r2, options);
    return r1.intersects(r2);
};
module.exports = intersects;

},{"../classes/range":"iSOAN"}],"2hxzT":[function(require,module,exports) {
// given a set of versions and a range, create a "simplified" range
// that includes the same versions that the original range does
// If the original range is shorter than the simplified one, return that.
const satisfies = require('../functions/satisfies.js');
const compare = require('../functions/compare.js');
module.exports = (versions, range, options)=>{
    const set = [];
    let first = null;
    let prev = null;
    const v = versions.sort((a, b)=>compare(a, b, options)
    );
    for (const version of v){
        const included = satisfies(version, range, options);
        if (included) {
            prev = version;
            if (!first) first = version;
        } else {
            if (prev) set.push([
                first,
                prev
            ]);
            prev = null;
            first = null;
        }
    }
    if (first) set.push([
        first,
        null
    ]);
    const ranges = [];
    for (const [min, max] of set){
        if (min === max) ranges.push(min);
        else if (!max && min === v[0]) ranges.push('*');
        else if (!max) ranges.push(`>=${min}`);
        else if (min === v[0]) ranges.push(`<=${max}`);
        else ranges.push(`${min} - ${max}`);
    }
    const simplified = ranges.join(' || ');
    const original = typeof range.raw === 'string' ? range.raw : String(range);
    return simplified.length < original.length ? simplified : range;
};

},{"../functions/satisfies.js":"4GGCq","../functions/compare.js":"d0byB"}],"f8DRU":[function(require,module,exports) {
const Range = require('../classes/range.js');
const Comparator = require('../classes/comparator.js');
const { ANY  } = Comparator;
const satisfies = require('../functions/satisfies.js');
const compare = require('../functions/compare.js');
// Complex range `r1 || r2 || ...` is a subset of `R1 || R2 || ...` iff:
// - Every simple range `r1, r2, ...` is a null set, OR
// - Every simple range `r1, r2, ...` which is not a null set is a subset of
//   some `R1, R2, ...`
//
// Simple range `c1 c2 ...` is a subset of simple range `C1 C2 ...` iff:
// - If c is only the ANY comparator
//   - If C is only the ANY comparator, return true
//   - Else if in prerelease mode, return false
//   - else replace c with `[>=0.0.0]`
// - If C is only the ANY comparator
//   - if in prerelease mode, return true
//   - else replace C with `[>=0.0.0]`
// - Let EQ be the set of = comparators in c
// - If EQ is more than one, return true (null set)
// - Let GT be the highest > or >= comparator in c
// - Let LT be the lowest < or <= comparator in c
// - If GT and LT, and GT.semver > LT.semver, return true (null set)
// - If any C is a = range, and GT or LT are set, return false
// - If EQ
//   - If GT, and EQ does not satisfy GT, return true (null set)
//   - If LT, and EQ does not satisfy LT, return true (null set)
//   - If EQ satisfies every C, return true
//   - Else return false
// - If GT
//   - If GT.semver is lower than any > or >= comp in C, return false
//   - If GT is >=, and GT.semver does not satisfy every C, return false
//   - If GT.semver has a prerelease, and not in prerelease mode
//     - If no C has a prerelease and the GT.semver tuple, return false
// - If LT
//   - If LT.semver is greater than any < or <= comp in C, return false
//   - If LT is <=, and LT.semver does not satisfy every C, return false
//   - If GT.semver has a prerelease, and not in prerelease mode
//     - If no C has a prerelease and the LT.semver tuple, return false
// - Else return true
const subset = (sub, dom, options = {})=>{
    if (sub === dom) return true;
    sub = new Range(sub, options);
    dom = new Range(dom, options);
    let sawNonNull = false;
    OUTER: for (const simpleSub of sub.set){
        for (const simpleDom of dom.set){
            const isSub = simpleSubset(simpleSub, simpleDom, options);
            sawNonNull = sawNonNull || isSub !== null;
            if (isSub) continue OUTER;
        }
        // the null set is a subset of everything, but null simple ranges in
        // a complex range should be ignored.  so if we saw a non-null range,
        // then we know this isn't a subset, but if EVERY simple range was null,
        // then it is a subset.
        if (sawNonNull) return false;
    }
    return true;
};
const simpleSubset = (sub, dom, options)=>{
    if (sub === dom) return true;
    if (sub.length === 1 && sub[0].semver === ANY) {
        if (dom.length === 1 && dom[0].semver === ANY) return true;
        else if (options.includePrerelease) sub = [
            new Comparator('>=0.0.0-0')
        ];
        else sub = [
            new Comparator('>=0.0.0')
        ];
    }
    if (dom.length === 1 && dom[0].semver === ANY) {
        if (options.includePrerelease) return true;
        else dom = [
            new Comparator('>=0.0.0')
        ];
    }
    const eqSet = new Set();
    let gt, lt;
    for (const c of sub){
        if (c.operator === '>' || c.operator === '>=') gt = higherGT(gt, c, options);
        else if (c.operator === '<' || c.operator === '<=') lt = lowerLT(lt, c, options);
        else eqSet.add(c.semver);
    }
    if (eqSet.size > 1) return null;
    let gtltComp;
    if (gt && lt) {
        gtltComp = compare(gt.semver, lt.semver, options);
        if (gtltComp > 0) return null;
        else if (gtltComp === 0 && (gt.operator !== '>=' || lt.operator !== '<=')) return null;
    }
    // will iterate one or zero times
    for (const eq of eqSet){
        if (gt && !satisfies(eq, String(gt), options)) return null;
        if (lt && !satisfies(eq, String(lt), options)) return null;
        for (const c of dom){
            if (!satisfies(eq, String(c), options)) return false;
        }
        return true;
    }
    let higher, lower;
    let hasDomLT, hasDomGT;
    // if the subset has a prerelease, we need a comparator in the superset
    // with the same tuple and a prerelease, or it's not a subset
    let needDomLTPre = lt && !options.includePrerelease && lt.semver.prerelease.length ? lt.semver : false;
    let needDomGTPre = gt && !options.includePrerelease && gt.semver.prerelease.length ? gt.semver : false;
    // exception: <1.2.3-0 is the same as <1.2.3
    if (needDomLTPre && needDomLTPre.prerelease.length === 1 && lt.operator === '<' && needDomLTPre.prerelease[0] === 0) needDomLTPre = false;
    for (const c1 of dom){
        hasDomGT = hasDomGT || c1.operator === '>' || c1.operator === '>=';
        hasDomLT = hasDomLT || c1.operator === '<' || c1.operator === '<=';
        if (gt) {
            if (needDomGTPre) {
                if (c1.semver.prerelease && c1.semver.prerelease.length && c1.semver.major === needDomGTPre.major && c1.semver.minor === needDomGTPre.minor && c1.semver.patch === needDomGTPre.patch) needDomGTPre = false;
            }
            if (c1.operator === '>' || c1.operator === '>=') {
                higher = higherGT(gt, c1, options);
                if (higher === c1 && higher !== gt) return false;
            } else if (gt.operator === '>=' && !satisfies(gt.semver, String(c1), options)) return false;
        }
        if (lt) {
            if (needDomLTPre) {
                if (c1.semver.prerelease && c1.semver.prerelease.length && c1.semver.major === needDomLTPre.major && c1.semver.minor === needDomLTPre.minor && c1.semver.patch === needDomLTPre.patch) needDomLTPre = false;
            }
            if (c1.operator === '<' || c1.operator === '<=') {
                lower = lowerLT(lt, c1, options);
                if (lower === c1 && lower !== lt) return false;
            } else if (lt.operator === '<=' && !satisfies(lt.semver, String(c1), options)) return false;
        }
        if (!c1.operator && (lt || gt) && gtltComp !== 0) return false;
    }
    // if there was a < or >, and nothing in the dom, then must be false
    // UNLESS it was limited by another range in the other direction.
    // Eg, >1.0.0 <1.0.1 is still a subset of <2.0.0
    if (gt && hasDomLT && !lt && gtltComp !== 0) return false;
    if (lt && hasDomGT && !gt && gtltComp !== 0) return false;
    // we needed a prerelease range in a specific tuple, but didn't get one
    // then this isn't a subset.  eg >=1.2.3-pre is not a subset of >=1.0.0,
    // because it includes prereleases in the 1.2.3 tuple
    if (needDomGTPre || needDomLTPre) return false;
    return true;
};
// >=1.2.3 is lower than >1.2.3
const higherGT = (a, b, options)=>{
    if (!a) return b;
    const comp = compare(a.semver, b.semver, options);
    return comp > 0 ? a : comp < 0 ? b : b.operator === '>' && a.operator === '>=' ? b : a;
};
// <=1.2.3 is higher than <1.2.3
const lowerLT = (a, b, options)=>{
    if (!a) return b;
    const comp = compare(a.semver, b.semver, options);
    return comp < 0 ? a : comp > 0 ? b : b.operator === '<' && a.operator === '<=' ? b : a;
};
module.exports = subset;

},{"../classes/range.js":"iSOAN","../classes/comparator.js":"gVFDT","../functions/satisfies.js":"4GGCq","../functions/compare.js":"d0byB"}],"i4OI0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "log", ()=>log
);
parcelHelpers.export(exports, "listen", ()=>listen
);
var id = 0;
var subscribers = [];
var log = function(type, message, data) {
    var obj = {
        type: type,
        id: String(++id),
        date: new Date()
    };
    if (message) obj.message = message;
    if (data) obj.data = data;
    dispatch(obj);
};
var listen = function(cb) {
    subscribers.push(cb);
    return function() {
        var i = subscribers.indexOf(cb);
        if (i !== -1) {
            // equivalent of subscribers.splice(i, 1) // https://twitter.com/Rich_Harris/status/1125850391155965952
            subscribers[i] = subscribers[subscribers.length - 1];
            subscribers.pop();
        }
    };
};
function dispatch(log1) {
    for(var i = 0; i < subscribers.length; i++)try {
        subscribers[i](log1);
    } catch (e) {
        console.error(e);
    }
}
if (typeof window !== "undefined") window.__ledgerLogsListen = listen;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["ejTmX"], null, "parcelRequireb35c")

//# sourceMappingURL=TransportWebHID.d86047ad.js.map
