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
})({"kn9T2":[function(require,module,exports) {
var Refresh = require('react-refresh/runtime');
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};

},{"react-refresh/runtime":"3FsDI"}],"M1MZ5":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "14f5514656c130f2";
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

},{}],"lldrP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _eventemitter3 = require("eventemitter3");
var _eventemitter3Default = parcelHelpers.interopDefault(_eventemitter3);
var _web = require("./adapters/web");
var _webDefault = parcelHelpers.interopDefault(_web);
var _iframe = require("./adapters/iframe");
var _iframeDefault = parcelHelpers.interopDefault(_iframe);
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
var __values = undefined && undefined.__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var Solflare = /** @class */ function(_super) {
    __extends(Solflare1, _super);
    function Solflare1(config) {
        var _this = _super.call(this) || this;
        _this._network = 'mainnet-beta';
        _this._provider = null;
        _this._adapterInstance = null;
        _this._element = null;
        _this._iframe = null;
        _this._connectHandler = null;
        _this._flutterHandlerInterval = null;
        _this._handleEvent = function(event) {
            var _a, _b, _c;
            switch(event.type){
                case 'connect_native_web':
                    _this._collapseIframe();
                    _this._adapterInstance = new _webDefault.default(_this._iframe, _this._network, ((_a = event.data) === null || _a === void 0 ? void 0 : _a.provider) || _this._provider || 'https://solflare.com/provider');
                    _this._adapterInstance.on('connect', _this._webConnected);
                    _this._adapterInstance.on('disconnect', _this._webDisconnected);
                    _this._adapterInstance.connect();
                    _this._setPreferredAdapter('native_web');
                    return;
                case 'connect':
                    _this._collapseIframe();
                    _this._adapterInstance = new _iframeDefault.default(_this._iframe, ((_b = event.data) === null || _b === void 0 ? void 0 : _b.publicKey) || '');
                    _this._adapterInstance.connect();
                    _this._setPreferredAdapter((_c = event.data) === null || _c === void 0 ? void 0 : _c.adapter);
                    if (_this._connectHandler) {
                        _this._connectHandler.resolve();
                        _this._connectHandler = null;
                    }
                    _this.emit('connect', _this.publicKey);
                    return;
                case 'disconnect':
                    if (_this._connectHandler) {
                        _this._connectHandler.reject();
                        _this._connectHandler = null;
                    }
                    _this._disconnected();
                    _this.emit('disconnect');
                    return;
                case 'collapse':
                    _this._collapseIframe();
                    return;
                default:
                    return;
            }
        };
        _this._handleMessage = function(event) {
            var _a;
            if (((_a = event.data) === null || _a === void 0 ? void 0 : _a.channel) !== 'solflareIframeToWalletAdapter') return;
            var data = event.data.data || {};
            if (data.type === 'event') _this._handleEvent(data.event);
            else if (_this._adapterInstance) _this._adapterInstance.handleMessage(data);
        };
        _this._removeElement = function() {
            if (_this._flutterHandlerInterval !== null) {
                clearInterval(_this._flutterHandlerInterval);
                _this._flutterHandlerInterval = null;
            }
            if (_this._element) {
                _this._element.remove();
                _this._element = null;
            }
        };
        _this._removeDanglingElements = function() {
            var e_1, _a;
            var elements = document.getElementsByClassName('solflare-wallet-adapter-iframe');
            try {
                for(var elements_1 = __values(elements), elements_1_1 = elements_1.next(); !elements_1_1.done; elements_1_1 = elements_1.next()){
                    var element = elements_1_1.value;
                    if (element.parentElement) element.remove();
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally{
                try {
                    if (elements_1_1 && !elements_1_1.done && (_a = elements_1.return)) _a.call(elements_1);
                } finally{
                    if (e_1) throw e_1.error;
                }
            }
        };
        _this._injectElement = function() {
            _this._removeElement();
            _this._removeDanglingElements();
            var iframeUrl = "".concat(Solflare1.IFRAME_URL, "?cluster=").concat(encodeURIComponent(_this._network), "&origin=").concat(encodeURIComponent(window.location.origin));
            var preferredAdapter = _this._getPreferredAdapter();
            if (preferredAdapter) iframeUrl += "&adapter=".concat(encodeURIComponent(preferredAdapter));
            _this._element = document.createElement('div');
            _this._element.className = 'solflare-wallet-adapter-iframe';
            _this._element.innerHTML = "\n      <iframe src='".concat(iframeUrl, "' style='position: fixed; top: 0; bottom: 0; left: 0; right: 0; width: 100%; height: 100%; border: none; border-radius: 0; z-index: 99999; color-scheme: auto;' allowtransparency='true'></iframe>\n    ");
            document.body.appendChild(_this._element);
            _this._iframe = _this._element.querySelector('iframe');
            // @ts-ignore
            window.fromFlutter = _this._handleMobileMessage;
            _this._flutterHandlerInterval = setInterval(function() {
                // @ts-ignore
                window.fromFlutter = _this._handleMobileMessage;
            }, 100);
            window.addEventListener('message', _this._handleMessage, false);
        };
        _this._collapseIframe = function() {
            if (_this._iframe) {
                _this._iframe.style.top = '';
                _this._iframe.style.right = '';
                _this._iframe.style.height = '2px';
                _this._iframe.style.width = '2px';
            }
        };
        _this._getPreferredAdapter = function() {
            if (localStorage) return localStorage.getItem('solflarePreferredWalletAdapter') || null;
            return null;
        };
        _this._setPreferredAdapter = function(adapter) {
            if (localStorage && adapter) localStorage.setItem('solflarePreferredWalletAdapter', adapter);
        };
        _this._clearPreferredAdapter = function() {
            if (localStorage) localStorage.removeItem('solflarePreferredWalletAdapter');
        };
        _this._webConnected = function() {
            if (_this._connectHandler) {
                _this._connectHandler.resolve();
                _this._connectHandler = null;
            }
            _this.emit('connect', _this.publicKey);
        };
        _this._webDisconnected = function() {
            if (_this._connectHandler) {
                _this._connectHandler.reject();
                _this._connectHandler = null;
            }
            _this._disconnected();
            _this.emit('disconnect');
        };
        _this._disconnected = function() {
            window.removeEventListener('message', _this._handleMessage, false);
            _this._removeElement();
            _this._clearPreferredAdapter();
            _this._adapterInstance = null;
        };
        _this._handleMobileMessage = function(data) {
            var _a, _b;
            (_b = (_a = _this._iframe) === null || _a === void 0 ? void 0 : _a.contentWindow) === null || _b === void 0 || _b.postMessage({
                channel: 'solflareMobileToIframe',
                data: data
            }, '*');
        };
        if (config === null || config === void 0 ? void 0 : config.network) _this._network = config === null || config === void 0 ? void 0 : config.network;
        if (config === null || config === void 0 ? void 0 : config.provider) _this._provider = config === null || config === void 0 ? void 0 : config.provider;
        return _this;
    }
    Object.defineProperty(Solflare1.prototype, "publicKey", {
        get: function() {
            var _a;
            return ((_a = this._adapterInstance) === null || _a === void 0 ? void 0 : _a.publicKey) || null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Solflare1.prototype, "isConnected", {
        get: function() {
            var _a;
            return !!((_a = this._adapterInstance) === null || _a === void 0 ? void 0 : _a.connected);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Solflare1.prototype, "connected", {
        get: function() {
            return this.isConnected;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Solflare1.prototype, "autoApprove", {
        get: function() {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    Solflare1.prototype.connect = function() {
        return __awaiter(this, void 0, void 0, function() {
            var _this = this;
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        if (this.connected) return [
                            2 /*return*/ 
                        ];
                        this._injectElement();
                        return [
                            4 /*yield*/ ,
                            new Promise(function(resolve, reject) {
                                _this._connectHandler = {
                                    resolve: resolve,
                                    reject: reject
                                };
                            })
                        ];
                    case 1:
                        _a.sent();
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    Solflare1.prototype.disconnect = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        if (!this._adapterInstance) return [
                            2 /*return*/ 
                        ];
                        return [
                            4 /*yield*/ ,
                            this._adapterInstance.disconnect()
                        ];
                    case 1:
                        _a.sent();
                        this._disconnected();
                        this.emit('disconnect');
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    Solflare1.prototype.signTransaction = function(transaction) {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        if (!this.connected) throw new Error('Wallet not connected');
                        return [
                            4 /*yield*/ ,
                            this._adapterInstance.signTransaction(transaction)
                        ];
                    case 1:
                        return [
                            2 /*return*/ ,
                            _a.sent()
                        ];
                }
            });
        });
    };
    Solflare1.prototype.signAllTransactions = function(transactions) {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        if (!this.connected) throw new Error('Wallet not connected');
                        return [
                            4 /*yield*/ ,
                            this._adapterInstance.signAllTransactions(transactions)
                        ];
                    case 1:
                        return [
                            2 /*return*/ ,
                            _a.sent()
                        ];
                }
            });
        });
    };
    Solflare1.prototype.signMessage = function(data, display) {
        if (display === void 0) display = 'utf8';
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        if (!this.connected) throw new Error('Wallet not connected');
                        return [
                            4 /*yield*/ ,
                            this._adapterInstance.signMessage(data, display)
                        ];
                    case 1:
                        return [
                            2 /*return*/ ,
                            _a.sent()
                        ];
                }
            });
        });
    };
    Solflare1.prototype.sign = function(data, display) {
        if (display === void 0) display = 'utf8';
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        return [
                            4 /*yield*/ ,
                            this.signMessage(data, display)
                        ];
                    case 1:
                        return [
                            2 /*return*/ ,
                            _a.sent()
                        ];
                }
            });
        });
    };
    Solflare1.prototype.detectWallet = function(timeout) {
        if (timeout === void 0) timeout = 10;
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a1) {
                return [
                    2 /*return*/ ,
                    new Promise(function(resolve) {
                        var element = null;
                        function handleDetected(detected) {
                            cleanUp();
                            resolve(detected);
                        }
                        var timeoutHandler = setTimeout(function() {
                            handleDetected(false);
                        }, timeout * 1000);
                        function cleanUp() {
                            window.removeEventListener('message', handleMessage, false);
                            if (element) {
                                document.body.removeChild(element);
                                element = null;
                            }
                            if (timeoutHandler) {
                                clearTimeout(timeoutHandler);
                                timeoutHandler = null;
                            }
                        }
                        function handleMessage(event) {
                            var _a, _b, _c;
                            if (((_a = event.data) === null || _a === void 0 ? void 0 : _a.channel) !== 'solflareDetectorToAdapter') return;
                            handleDetected(!!((_c = (_b = event.data) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.detected));
                        }
                        window.addEventListener('message', handleMessage, false);
                        element = document.createElement('div');
                        element.className = 'solflare-wallet-detect-iframe';
                        element.innerHTML = "\n        <iframe src='".concat(Solflare1.DETECT_IFRAME_URL, "?timeout=").concat(timeout, "' style='position: fixed; top: -9999px; left: -9999px; width: 0; height: 0; pointer-events: none; border: none;'></iframe>\n      ");
                        document.body.appendChild(element);
                    })
                ];
            });
        });
    };
    Solflare1.IFRAME_URL = 'https://connect.solflare.com/';
    Solflare1.DETECT_IFRAME_URL = 'https://connect.solflare.com/detect';
    return Solflare1;
}(_eventemitter3Default.default);
exports.default = Solflare;

},{"eventemitter3":"3fnfh","./adapters/web":"atSeb","./adapters/iframe":"3pWvo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"atSeb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _base = require("./base");
var _baseDefault = parcelHelpers.interopDefault(_base);
var _solWalletAdapter = require("@project-serum/sol-wallet-adapter");
var _solWalletAdapterDefault = parcelHelpers.interopDefault(_solWalletAdapter);
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
var WebAdapter = /** @class */ function(_super) {
    __extends(WebAdapter1, _super);
    // @ts-ignore
    function WebAdapter1(iframe, network, provider) {
        var _this = _super.call(this) || this;
        _this._instance = null;
        // @ts-ignore
        _this.handleMessage = function(data) {
        // nothing to do here
        };
        _this._handleConnect = function() {
            _this.emit('connect');
        };
        _this._handleDisconnect = function() {
            window.clearInterval(_this._pollTimer);
            _this.emit('disconnect');
        };
        _this._network = network;
        _this._provider = provider;
        return _this;
    }
    Object.defineProperty(WebAdapter1.prototype, "publicKey", {
        get: function() {
            return this._instance.publicKey || null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebAdapter1.prototype, "connected", {
        get: function() {
            return this._instance.connected || false;
        },
        enumerable: false,
        configurable: true
    });
    WebAdapter1.prototype.connect = function() {
        return __awaiter(this, void 0, void 0, function() {
            var _this = this;
            return __generator(this, function(_a1) {
                switch(_a1.label){
                    case 0:
                        this._instance = new _solWalletAdapterDefault.default(this._provider, this._network);
                        this._instance.on('connect', this._handleConnect);
                        this._instance.on('disconnect', this._handleDisconnect);
                        this._pollTimer = window.setInterval(function() {
                            var _a, _b;
                            // @ts-ignore
                            if (((_b = (_a = _this._instance) === null || _a === void 0 ? void 0 : _a._popup) === null || _b === void 0 ? void 0 : _b.closed) !== false) _this._handleDisconnect();
                        }, 200);
                        return [
                            4 /*yield*/ ,
                            this._instance.connect()
                        ];
                    case 1:
                        _a1.sent();
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    WebAdapter1.prototype.disconnect = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        if (!this.connected) throw new Error('Wallet not connected');
                        this._instance.removeAllListeners('connect');
                        this._instance.removeAllListeners('disconnect');
                        return [
                            4 /*yield*/ ,
                            this._instance.disconnect()
                        ];
                    case 1:
                        _a.sent();
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    WebAdapter1.prototype.signTransaction = function(transaction) {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        if (!this.connected) throw new Error('Wallet not connected');
                        return [
                            4 /*yield*/ ,
                            this._instance.signTransaction(transaction)
                        ];
                    case 1:
                        return [
                            2 /*return*/ ,
                            _a.sent()
                        ];
                }
            });
        });
    };
    WebAdapter1.prototype.signAllTransactions = function(transactions) {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        if (!this.connected) throw new Error('Wallet not connected');
                        return [
                            4 /*yield*/ ,
                            this._instance.signAllTransactions(transactions)
                        ];
                    case 1:
                        return [
                            2 /*return*/ ,
                            _a.sent()
                        ];
                }
            });
        });
    };
    WebAdapter1.prototype.signMessage = function(data, display) {
        if (display === void 0) display = 'hex';
        return __awaiter(this, void 0, void 0, function() {
            var signature;
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        if (!this.connected) throw new Error('Wallet not connected');
                        return [
                            4 /*yield*/ ,
                            this._instance.sign(data, display)
                        ];
                    case 1:
                        signature = _a.sent().signature;
                        return [
                            2 /*return*/ ,
                            Uint8Array.from(signature)
                        ];
                }
            });
        });
    };
    return WebAdapter1;
}(_baseDefault.default);
exports.default = WebAdapter;

},{"./base":"kVxtd","@project-serum/sol-wallet-adapter":"eRPaq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kVxtd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _eventemitter3 = require("eventemitter3");
var _eventemitter3Default = parcelHelpers.interopDefault(_eventemitter3);
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
var WalletAdapter = /** @class */ function(_super) {
    __extends(WalletAdapter1, _super);
    function WalletAdapter1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return WalletAdapter1;
}(_eventemitter3Default.default);
exports.default = WalletAdapter;

},{"eventemitter3":"3fnfh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eRPaq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _eventemitter3 = require("eventemitter3");
var _eventemitter3Default = parcelHelpers.interopDefault(_eventemitter3);
var _web3Js = require("@solana/web3.js");
var _bs58 = require("bs58");
var _bs58Default = parcelHelpers.interopDefault(_bs58);
class Wallet extends _eventemitter3Default.default {
    constructor(provider, network){
        var _this;
        super();
        _this = this;
        this._handleMessage = (e)=>{
            if (this._injectedProvider && e.source === window || e.origin === this._providerUrl.origin && e.source === this._popup) {
                if (e.data.method === 'connected') {
                    const newPublicKey = new _web3Js.PublicKey(e.data.params.publicKey);
                    if (!this._publicKey || !this._publicKey.equals(newPublicKey)) {
                        if (this._publicKey && !this._publicKey.equals(newPublicKey)) this._handleDisconnect();
                        this._publicKey = newPublicKey;
                        this._autoApprove = !!e.data.params.autoApprove;
                        this.emit('connect', this._publicKey);
                    }
                } else if (e.data.method === 'disconnected') this._handleDisconnect();
                else if (e.data.result || e.data.error) {
                    if (this._responsePromises.has(e.data.id)) {
                        const [resolve, reject] = this._responsePromises.get(e.data.id);
                        if (e.data.result) resolve(e.data.result);
                        else reject(new Error(e.data.error));
                    }
                }
            }
        };
        this._handleConnect = ()=>{
            if (!this._handlerAdded) {
                this._handlerAdded = true;
                window.addEventListener('message', this._handleMessage);
                window.addEventListener('beforeunload', this.disconnect);
            }
            if (this._injectedProvider) return new Promise((resolve)=>{
                this._sendRequest('connect', {});
                resolve();
            });
            else {
                window.name = 'parent';
                this._popup = window.open(this._providerUrl.toString(), '_blank', 'location,resizable,width=460,height=675');
                return new Promise((resolve)=>{
                    this.once('connect', resolve);
                });
            }
        };
        this._handleDisconnect = ()=>{
            if (this._handlerAdded) {
                this._handlerAdded = false;
                window.removeEventListener('message', this._handleMessage);
                window.removeEventListener('beforeunload', this.disconnect);
            }
            if (this._publicKey) {
                this._publicKey = null;
                this.emit('disconnect');
            }
            this._responsePromises.forEach(([resolve, reject], id)=>{
                this._responsePromises.delete(id);
                reject('Wallet disconnected');
            });
        };
        this._sendRequest = async function(method, params) {
            if (method !== 'connect' && !_this.connected) throw new Error('Wallet not connected');
            const requestId = _this._nextRequestId;
            ++_this._nextRequestId;
            return new Promise((resolve, reject)=>{
                _this._responsePromises.set(requestId, [
                    resolve,
                    reject
                ]);
                if (_this._injectedProvider) _this._injectedProvider.postMessage({
                    jsonrpc: '2.0',
                    id: requestId,
                    method,
                    params: {
                        network: _this._network,
                        ...params
                    }
                });
                else {
                    _this._popup.postMessage({
                        jsonrpc: '2.0',
                        id: requestId,
                        method,
                        params
                    }, _this._providerUrl.origin);
                    if (!_this.autoApprove) _this._popup.focus();
                }
            });
        };
        this.connect = ()=>{
            if (this._popup) this._popup.close();
            return this._handleConnect();
        };
        this.disconnect = async function() {
            if (_this._injectedProvider) await _this._sendRequest('disconnect', {});
            if (_this._popup) _this._popup.close();
            _this._handleDisconnect();
        };
        this.sign = async function(data, display) {
            if (!(data instanceof Uint8Array)) throw new Error('Data must be an instance of Uint8Array');
            const response = await _this._sendRequest('sign', {
                data,
                display
            });
            const signature = _bs58Default.default.decode(response.signature);
            const publicKey = new _web3Js.PublicKey(response.publicKey);
            return {
                signature,
                publicKey
            };
        };
        this.signTransaction = async function(transaction) {
            const response = await _this._sendRequest('signTransaction', {
                message: _bs58Default.default.encode(transaction.serializeMessage())
            });
            const signature = _bs58Default.default.decode(response.signature);
            const publicKey = new _web3Js.PublicKey(response.publicKey);
            transaction.addSignature(publicKey, signature);
            return transaction;
        };
        this.signAllTransactions = async function(transactions) {
            const response = await _this._sendRequest('signAllTransactions', {
                messages: transactions.map((tx)=>_bs58Default.default.encode(tx.serializeMessage())
                )
            });
            const signatures = response.signatures.map((s)=>_bs58Default.default.decode(s)
            );
            const publicKey = new _web3Js.PublicKey(response.publicKey);
            transactions = transactions.map((tx, idx)=>{
                tx.addSignature(publicKey, signatures[idx]);
                return tx;
            });
            return transactions;
        };
        if (isInjectedProvider(provider)) this._injectedProvider = provider;
        else if (isString(provider)) {
            this._providerUrl = new URL(provider);
            this._providerUrl.hash = new URLSearchParams({
                origin: window.location.origin,
                network
            }).toString();
        } else throw new Error('provider parameter must be an injected provider or a URL string.');
        this._network = network;
        this._publicKey = null;
        this._autoApprove = false;
        this._popup = null;
        this._handlerAdded = false;
        this._nextRequestId = 1;
        this._responsePromises = new Map();
    }
    get publicKey() {
        return this._publicKey;
    }
    get connected() {
        return this._publicKey !== null;
    }
    get autoApprove() {
        return this._autoApprove;
    }
}
function isString(a) {
    return typeof a === 'string';
}
function isInjectedProvider(a) {
    return isObject(a) && isFunction(a.postMessage);
}
function isObject(a) {
    return typeof a === 'object' && a !== null;
}
function isFunction(a) {
    return typeof a === 'function';
}
exports.default = Wallet;

},{"eventemitter3":"3fnfh","@solana/web3.js":"5JBKN","bs58":"4ji3p","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3pWvo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _web3Js = require("@solana/web3.js");
var _base = require("./base");
var _baseDefault = parcelHelpers.interopDefault(_base);
var _uuid = require("uuid");
var _bs58 = require("bs58");
var _bs58Default = parcelHelpers.interopDefault(_bs58);
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
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var IframeAdapter = /** @class */ function(_super) {
    __extends(IframeAdapter1, _super);
    function IframeAdapter1(iframe, publicKey) {
        var _this = this;
        var _a1;
        _this = _super.call(this) || this;
        _this._publicKey = null;
        _this._messageHandlers = {};
        _this.handleMessage = function(data) {
            if (_this._messageHandlers[data.id]) {
                var _a = _this._messageHandlers[data.id], resolve = _a.resolve, reject = _a.reject;
                delete _this._messageHandlers[data.id];
                if (data.error) reject(data.error);
                else resolve(data.result);
            }
        };
        _this._sendMessage = function(data) {
            if (!_this.connected) throw new Error('Wallet not connected');
            return new Promise(function(resolve, reject) {
                var _a, _b;
                var messageId = _uuid.v4();
                _this._messageHandlers[messageId] = {
                    resolve: resolve,
                    reject: reject
                };
                (_b = (_a = _this._iframe) === null || _a === void 0 ? void 0 : _a.contentWindow) === null || _b === void 0 || _b.postMessage({
                    channel: 'solflareWalletAdapterToIframe',
                    data: __assign({
                        id: messageId
                    }, data)
                }, '*');
            });
        };
        _this._iframe = iframe;
        _this._publicKey = new _web3Js.PublicKey((_a1 = publicKey === null || publicKey === void 0 ? void 0 : publicKey.toString) === null || _a1 === void 0 ? void 0 : _a1.call(publicKey));
        return _this;
    }
    Object.defineProperty(IframeAdapter1.prototype, "publicKey", {
        get: function() {
            return this._publicKey || null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IframeAdapter1.prototype, "connected", {
        get: function() {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    IframeAdapter1.prototype.connect = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
                return [
                    2 /*return*/ 
                ];
            });
        });
    };
    IframeAdapter1.prototype.disconnect = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        return [
                            4 /*yield*/ ,
                            this._sendMessage({
                                method: 'disconnect'
                            })
                        ];
                    case 1:
                        _a.sent();
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    IframeAdapter1.prototype.signTransaction = function(transaction) {
        return __awaiter(this, void 0, void 0, function() {
            var _a, publicKey, signature, e_1;
            return __generator(this, function(_b) {
                switch(_b.label){
                    case 0:
                        if (!this.connected) throw new Error('Wallet not connected');
                        _b.label = 1;
                    case 1:
                        _b.trys.push([
                            1,
                            3,
                            ,
                            4
                        ]);
                        return [
                            4 /*yield*/ ,
                            this._sendMessage({
                                method: 'signTransaction',
                                params: {
                                    message: _bs58Default.default.encode(transaction.serializeMessage())
                                }
                            })
                        ];
                    case 2:
                        _a = _b.sent(), publicKey = _a.publicKey, signature = _a.signature;
                        transaction.addSignature(new _web3Js.PublicKey(publicKey), _bs58Default.default.decode(signature));
                        return [
                            2 /*return*/ ,
                            transaction
                        ];
                    case 3:
                        e_1 = _b.sent();
                        console.log(e_1);
                        throw new Error('Failed to sign transaction');
                    case 4:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    IframeAdapter1.prototype.signAllTransactions = function(transactions) {
        return __awaiter(this, void 0, void 0, function() {
            var _a, publicKey_1, signatures_1, e_2;
            return __generator(this, function(_b) {
                switch(_b.label){
                    case 0:
                        if (!this.connected) throw new Error('Wallet not connected');
                        _b.label = 1;
                    case 1:
                        _b.trys.push([
                            1,
                            3,
                            ,
                            4
                        ]);
                        return [
                            4 /*yield*/ ,
                            this._sendMessage({
                                method: 'signAllTransactions',
                                params: {
                                    messages: transactions.map(function(transaction) {
                                        return _bs58Default.default.encode(transaction.serializeMessage());
                                    })
                                }
                            })
                        ];
                    case 2:
                        _a = _b.sent(), publicKey_1 = _a.publicKey, signatures_1 = _a.signatures;
                        return [
                            2 /*return*/ ,
                            transactions.map(function(tx, id) {
                                tx.addSignature(new _web3Js.PublicKey(publicKey_1), _bs58Default.default.decode(signatures_1[id]));
                                return tx;
                            })
                        ];
                    case 3:
                        e_2 = _b.sent();
                        console.log(e_2);
                        throw new Error('Failed to sign transactions');
                    case 4:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    IframeAdapter1.prototype.signMessage = function(data, display) {
        if (display === void 0) display = 'hex';
        return __awaiter(this, void 0, void 0, function() {
            var result, e_3;
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        if (!this.connected) throw new Error('Wallet not connected');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([
                            1,
                            3,
                            ,
                            4
                        ]);
                        return [
                            4 /*yield*/ ,
                            this._sendMessage({
                                method: 'signMessage',
                                params: {
                                    data: data,
                                    display: display
                                }
                            })
                        ];
                    case 2:
                        result = _a.sent();
                        return [
                            2 /*return*/ ,
                            Uint8Array.from(_bs58Default.default.decode(result))
                        ];
                    case 3:
                        e_3 = _a.sent();
                        console.log(e_3);
                        throw new Error('Failed to sign message');
                    case 4:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    return IframeAdapter1;
}(_baseDefault.default);
exports.default = IframeAdapter;

},{"@solana/web3.js":"5JBKN","./base":"kVxtd","uuid":"j4KJi","bs58":"4ji3p","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["kn9T2","M1MZ5"], null, "parcelRequireb35c")

//# sourceMappingURL=esm.56c130f2.js.map
