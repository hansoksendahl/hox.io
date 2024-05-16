function Ur(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
}
var We = { exports: {} }, p = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tt;
function Wr() {
  if (Tt)
    return p;
  Tt = 1;
  var l = Symbol.for("react.element"), i = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), V = Symbol.for("react.provider"), z = Symbol.for("react.context"), ae = Symbol.for("react.forward_ref"), oe = Symbol.for("react.suspense"), Q = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), H = Symbol.iterator;
  function ue(r) {
    return r === null || typeof r != "object" ? null : (r = H && r[H] || r["@@iterator"], typeof r == "function" ? r : null);
  }
  var L = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, q = Object.assign, pe = {};
  function M(r, o, v) {
    this.props = r, this.context = o, this.refs = pe, this.updater = v || L;
  }
  M.prototype.isReactComponent = {}, M.prototype.setState = function(r, o) {
    if (typeof r != "object" && typeof r != "function" && r != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, r, o, "setState");
  }, M.prototype.forceUpdate = function(r) {
    this.updater.enqueueForceUpdate(this, r, "forceUpdate");
  };
  function ve() {
  }
  ve.prototype = M.prototype;
  function X(r, o, v) {
    this.props = r, this.context = o, this.refs = pe, this.updater = v || L;
  }
  var J = X.prototype = new ve();
  J.constructor = X, q(J, M.prototype), J.isPureReactComponent = !0;
  var N = Array.isArray, P = Object.prototype.hasOwnProperty, D = { current: null }, U = { key: !0, ref: !0, __self: !0, __source: !0 };
  function K(r, o, v) {
    var m, h = {}, O = null, w = null;
    if (o != null)
      for (m in o.ref !== void 0 && (w = o.ref), o.key !== void 0 && (O = "" + o.key), o)
        P.call(o, m) && !U.hasOwnProperty(m) && (h[m] = o[m]);
    var C = arguments.length - 2;
    if (C === 1)
      h.children = v;
    else if (1 < C) {
      for (var b = Array(C), I = 0; I < C; I++)
        b[I] = arguments[I + 2];
      h.children = b;
    }
    if (r && r.defaultProps)
      for (m in C = r.defaultProps, C)
        h[m] === void 0 && (h[m] = C[m]);
    return { $$typeof: l, type: r, key: O, ref: w, props: h, _owner: D.current };
  }
  function ye(r, o) {
    return { $$typeof: l, type: r.type, key: o, ref: r.ref, props: r.props, _owner: r._owner };
  }
  function ie(r) {
    return typeof r == "object" && r !== null && r.$$typeof === l;
  }
  function Pe(r) {
    var o = { "=": "=0", ":": "=2" };
    return "$" + r.replace(/[=:]/g, function(v) {
      return o[v];
    });
  }
  var me = /\/+/g;
  function se(r, o) {
    return typeof r == "object" && r !== null && r.key != null ? Pe("" + r.key) : o.toString(36);
  }
  function Z(r, o, v, m, h) {
    var O = typeof r;
    (O === "undefined" || O === "boolean") && (r = null);
    var w = !1;
    if (r === null)
      w = !0;
    else
      switch (O) {
        case "string":
        case "number":
          w = !0;
          break;
        case "object":
          switch (r.$$typeof) {
            case l:
            case i:
              w = !0;
          }
      }
    if (w)
      return w = r, h = h(w), r = m === "" ? "." + se(w, 0) : m, N(h) ? (v = "", r != null && (v = r.replace(me, "$&/") + "/"), Z(h, o, v, "", function(I) {
        return I;
      })) : h != null && (ie(h) && (h = ye(h, v + (!h.key || w && w.key === h.key ? "" : ("" + h.key).replace(me, "$&/") + "/") + r)), o.push(h)), 1;
    if (w = 0, m = m === "" ? "." : m + ":", N(r))
      for (var C = 0; C < r.length; C++) {
        O = r[C];
        var b = m + se(O, C);
        w += Z(O, o, v, b, h);
      }
    else if (b = ue(r), typeof b == "function")
      for (r = b.call(r), C = 0; !(O = r.next()).done; )
        O = O.value, b = m + se(O, C++), w += Z(O, o, v, b, h);
    else if (O === "object")
      throw o = String(r), Error("Objects are not valid as a React child (found: " + (o === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : o) + "). If you meant to render a collection of children, use an array instead.");
    return w;
  }
  function F(r, o, v) {
    if (r == null)
      return r;
    var m = [], h = 0;
    return Z(r, m, "", "", function(O) {
      return o.call(v, O, h++);
    }), m;
  }
  function W(r) {
    if (r._status === -1) {
      var o = r._result;
      o = o(), o.then(function(v) {
        (r._status === 0 || r._status === -1) && (r._status = 1, r._result = v);
      }, function(v) {
        (r._status === 0 || r._status === -1) && (r._status = 2, r._result = v);
      }), r._status === -1 && (r._status = 0, r._result = o);
    }
    if (r._status === 1)
      return r._result.default;
    throw r._result;
  }
  var f = { current: null }, G = { transition: null }, he = { ReactCurrentDispatcher: f, ReactCurrentBatchConfig: G, ReactCurrentOwner: D };
  function ee() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return p.Children = { map: F, forEach: function(r, o, v) {
    F(r, function() {
      o.apply(this, arguments);
    }, v);
  }, count: function(r) {
    var o = 0;
    return F(r, function() {
      o++;
    }), o;
  }, toArray: function(r) {
    return F(r, function(o) {
      return o;
    }) || [];
  }, only: function(r) {
    if (!ie(r))
      throw Error("React.Children.only expected to receive a single React element child.");
    return r;
  } }, p.Component = M, p.Fragment = g, p.Profiler = x, p.PureComponent = X, p.StrictMode = T, p.Suspense = oe, p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = he, p.act = ee, p.cloneElement = function(r, o, v) {
    if (r == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + r + ".");
    var m = q({}, r.props), h = r.key, O = r.ref, w = r._owner;
    if (o != null) {
      if (o.ref !== void 0 && (O = o.ref, w = D.current), o.key !== void 0 && (h = "" + o.key), r.type && r.type.defaultProps)
        var C = r.type.defaultProps;
      for (b in o)
        P.call(o, b) && !U.hasOwnProperty(b) && (m[b] = o[b] === void 0 && C !== void 0 ? C[b] : o[b]);
    }
    var b = arguments.length - 2;
    if (b === 1)
      m.children = v;
    else if (1 < b) {
      C = Array(b);
      for (var I = 0; I < b; I++)
        C[I] = arguments[I + 2];
      m.children = C;
    }
    return { $$typeof: l, type: r.type, key: h, ref: O, props: m, _owner: w };
  }, p.createContext = function(r) {
    return r = { $$typeof: z, _currentValue: r, _currentValue2: r, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, r.Provider = { $$typeof: V, _context: r }, r.Consumer = r;
  }, p.createElement = K, p.createFactory = function(r) {
    var o = K.bind(null, r);
    return o.type = r, o;
  }, p.createRef = function() {
    return { current: null };
  }, p.forwardRef = function(r) {
    return { $$typeof: ae, render: r };
  }, p.isValidElement = ie, p.lazy = function(r) {
    return { $$typeof: B, _payload: { _status: -1, _result: r }, _init: W };
  }, p.memo = function(r, o) {
    return { $$typeof: Q, type: r, compare: o === void 0 ? null : o };
  }, p.startTransition = function(r) {
    var o = G.transition;
    G.transition = {};
    try {
      r();
    } finally {
      G.transition = o;
    }
  }, p.unstable_act = ee, p.useCallback = function(r, o) {
    return f.current.useCallback(r, o);
  }, p.useContext = function(r) {
    return f.current.useContext(r);
  }, p.useDebugValue = function() {
  }, p.useDeferredValue = function(r) {
    return f.current.useDeferredValue(r);
  }, p.useEffect = function(r, o) {
    return f.current.useEffect(r, o);
  }, p.useId = function() {
    return f.current.useId();
  }, p.useImperativeHandle = function(r, o, v) {
    return f.current.useImperativeHandle(r, o, v);
  }, p.useInsertionEffect = function(r, o) {
    return f.current.useInsertionEffect(r, o);
  }, p.useLayoutEffect = function(r, o) {
    return f.current.useLayoutEffect(r, o);
  }, p.useMemo = function(r, o) {
    return f.current.useMemo(r, o);
  }, p.useReducer = function(r, o, v) {
    return f.current.useReducer(r, o, v);
  }, p.useRef = function(r) {
    return f.current.useRef(r);
  }, p.useState = function(r) {
    return f.current.useState(r);
  }, p.useSyncExternalStore = function(r, o, v) {
    return f.current.useSyncExternalStore(r, o, v);
  }, p.useTransition = function() {
    return f.current.useTransition();
  }, p.version = "18.3.1", p;
}
var de = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
de.exports;
var Pt;
function Yr() {
  return Pt || (Pt = 1, function(l, i) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var g = "18.3.1", T = Symbol.for("react.element"), x = Symbol.for("react.portal"), V = Symbol.for("react.fragment"), z = Symbol.for("react.strict_mode"), ae = Symbol.for("react.profiler"), oe = Symbol.for("react.provider"), Q = Symbol.for("react.context"), B = Symbol.for("react.forward_ref"), H = Symbol.for("react.suspense"), ue = Symbol.for("react.suspense_list"), L = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), pe = Symbol.for("react.offscreen"), M = Symbol.iterator, ve = "@@iterator";
      function X(e) {
        if (e === null || typeof e != "object")
          return null;
        var t = M && e[M] || e[ve];
        return typeof t == "function" ? t : null;
      }
      var J = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, N = {
        transition: null
      }, P = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, D = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, U = {}, K = null;
      function ye(e) {
        K = e;
      }
      U.setExtraStackFrame = function(e) {
        K = e;
      }, U.getCurrentStack = null, U.getStackAddendum = function() {
        var e = "";
        K && (e += K);
        var t = U.getCurrentStack;
        return t && (e += t() || ""), e;
      };
      var ie = !1, Pe = !1, me = !1, se = !1, Z = !1, F = {
        ReactCurrentDispatcher: J,
        ReactCurrentBatchConfig: N,
        ReactCurrentOwner: D
      };
      F.ReactDebugCurrentFrame = U, F.ReactCurrentActQueue = P;
      function W(e) {
        {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
            n[a - 1] = arguments[a];
          G("warn", e, n);
        }
      }
      function f(e) {
        {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
            n[a - 1] = arguments[a];
          G("error", e, n);
        }
      }
      function G(e, t, n) {
        {
          var a = F.ReactDebugCurrentFrame, u = a.getStackAddendum();
          u !== "" && (t += "%s", n = n.concat([u]));
          var c = n.map(function(s) {
            return String(s);
          });
          c.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, c);
        }
      }
      var he = {};
      function ee(e, t) {
        {
          var n = e.constructor, a = n && (n.displayName || n.name) || "ReactClass", u = a + "." + t;
          if (he[u])
            return;
          f("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", t, a), he[u] = !0;
        }
      }
      var r = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(e) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(e, t, n) {
          ee(e, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(e, t, n, a) {
          ee(e, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(e, t, n, a) {
          ee(e, "setState");
        }
      }, o = Object.assign, v = {};
      Object.freeze(v);
      function m(e, t, n) {
        this.props = e, this.context = t, this.refs = v, this.updater = n || r;
      }
      m.prototype.isReactComponent = {}, m.prototype.setState = function(e, t) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, t, "setState");
      }, m.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      {
        var h = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, O = function(e, t) {
          Object.defineProperty(m.prototype, e, {
            get: function() {
              W("%s(...) is deprecated in plain JavaScript React classes. %s", t[0], t[1]);
            }
          });
        };
        for (var w in h)
          h.hasOwnProperty(w) && O(w, h[w]);
      }
      function C() {
      }
      C.prototype = m.prototype;
      function b(e, t, n) {
        this.props = e, this.context = t, this.refs = v, this.updater = n || r;
      }
      var I = b.prototype = new C();
      I.constructor = b, o(I, m.prototype), I.isPureReactComponent = !0;
      function xt() {
        var e = {
          current: null
        };
        return Object.seal(e), e;
      }
      var Ft = Array.isArray;
      function ge(e) {
        return Ft(e);
      }
      function Lt(e) {
        {
          var t = typeof Symbol == "function" && Symbol.toStringTag, n = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return n;
        }
      }
      function Mt(e) {
        try {
          return Be(e), !1;
        } catch {
          return !0;
        }
      }
      function Be(e) {
        return "" + e;
      }
      function _e(e) {
        if (Mt(e))
          return f("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Lt(e)), Be(e);
      }
      function Nt(e, t, n) {
        var a = e.displayName;
        if (a)
          return a;
        var u = t.displayName || t.name || "";
        return u !== "" ? n + "(" + u + ")" : n;
      }
      function He(e) {
        return e.displayName || "Context";
      }
      function Y(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case V:
            return "Fragment";
          case x:
            return "Portal";
          case ae:
            return "Profiler";
          case z:
            return "StrictMode";
          case H:
            return "Suspense";
          case ue:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case Q:
              var t = e;
              return He(t) + ".Consumer";
            case oe:
              var n = e;
              return He(n._context) + ".Provider";
            case B:
              return Nt(e, e.render, "ForwardRef");
            case L:
              var a = e.displayName || null;
              return a !== null ? a : Y(e.type) || "Memo";
            case q: {
              var u = e, c = u._payload, s = u._init;
              try {
                return Y(s(c));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var ce = Object.prototype.hasOwnProperty, qe = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Ke, Ge, Ae;
      Ae = {};
      function Qe(e) {
        if (ce.call(e, "ref")) {
          var t = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (t && t.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function Xe(e) {
        if (ce.call(e, "key")) {
          var t = Object.getOwnPropertyDescriptor(e, "key").get;
          if (t && t.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function Vt(e, t) {
        var n = function() {
          Ke || (Ke = !0, f("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
      function Ut(e, t) {
        var n = function() {
          Ge || (Ge = !0, f("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
      function Wt(e) {
        if (typeof e.ref == "string" && D.current && e.__self && D.current.stateNode !== e.__self) {
          var t = Y(D.current.type);
          Ae[t] || (f('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', t, e.ref), Ae[t] = !0);
        }
      }
      var je = function(e, t, n, a, u, c, s) {
        var d = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: T,
          // Built-in properties that belong on the element
          type: e,
          key: t,
          ref: n,
          props: s,
          // Record the component responsible for creating this element.
          _owner: c
        };
        return d._store = {}, Object.defineProperty(d._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(d, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: a
        }), Object.defineProperty(d, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: u
        }), Object.freeze && (Object.freeze(d.props), Object.freeze(d)), d;
      };
      function Yt(e, t, n) {
        var a, u = {}, c = null, s = null, d = null, y = null;
        if (t != null) {
          Qe(t) && (s = t.ref, Wt(t)), Xe(t) && (_e(t.key), c = "" + t.key), d = t.__self === void 0 ? null : t.__self, y = t.__source === void 0 ? null : t.__source;
          for (a in t)
            ce.call(t, a) && !qe.hasOwnProperty(a) && (u[a] = t[a]);
        }
        var _ = arguments.length - 2;
        if (_ === 1)
          u.children = n;
        else if (_ > 1) {
          for (var E = Array(_), R = 0; R < _; R++)
            E[R] = arguments[R + 2];
          Object.freeze && Object.freeze(E), u.children = E;
        }
        if (e && e.defaultProps) {
          var S = e.defaultProps;
          for (a in S)
            u[a] === void 0 && (u[a] = S[a]);
        }
        if (c || s) {
          var k = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          c && Vt(u, k), s && Ut(u, k);
        }
        return je(e, c, s, d, y, D.current, u);
      }
      function zt(e, t) {
        var n = je(e.type, t, e.ref, e._self, e._source, e._owner, e.props);
        return n;
      }
      function Bt(e, t, n) {
        if (e == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var a, u = o({}, e.props), c = e.key, s = e.ref, d = e._self, y = e._source, _ = e._owner;
        if (t != null) {
          Qe(t) && (s = t.ref, _ = D.current), Xe(t) && (_e(t.key), c = "" + t.key);
          var E;
          e.type && e.type.defaultProps && (E = e.type.defaultProps);
          for (a in t)
            ce.call(t, a) && !qe.hasOwnProperty(a) && (t[a] === void 0 && E !== void 0 ? u[a] = E[a] : u[a] = t[a]);
        }
        var R = arguments.length - 2;
        if (R === 1)
          u.children = n;
        else if (R > 1) {
          for (var S = Array(R), k = 0; k < R; k++)
            S[k] = arguments[k + 2];
          u.children = S;
        }
        return je(e.type, c, s, d, y, _, u);
      }
      function te(e) {
        return typeof e == "object" && e !== null && e.$$typeof === T;
      }
      var Je = ".", Ht = ":";
      function qt(e) {
        var t = /[=:]/g, n = {
          "=": "=0",
          ":": "=2"
        }, a = e.replace(t, function(u) {
          return n[u];
        });
        return "$" + a;
      }
      var Ze = !1, Kt = /\/+/g;
      function et(e) {
        return e.replace(Kt, "$&/");
      }
      function Ie(e, t) {
        return typeof e == "object" && e !== null && e.key != null ? (_e(e.key), qt("" + e.key)) : t.toString(36);
      }
      function be(e, t, n, a, u) {
        var c = typeof e;
        (c === "undefined" || c === "boolean") && (e = null);
        var s = !1;
        if (e === null)
          s = !0;
        else
          switch (c) {
            case "string":
            case "number":
              s = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case T:
                case x:
                  s = !0;
              }
          }
        if (s) {
          var d = e, y = u(d), _ = a === "" ? Je + Ie(d, 0) : a;
          if (ge(y)) {
            var E = "";
            _ != null && (E = et(_) + "/"), be(y, t, E, "", function(Vr) {
              return Vr;
            });
          } else
            y != null && (te(y) && (y.key && (!d || d.key !== y.key) && _e(y.key), y = zt(
              y,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              n + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (y.key && (!d || d.key !== y.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                et("" + y.key) + "/"
              ) : "") + _
            )), t.push(y));
          return 1;
        }
        var R, S, k = 0, A = a === "" ? Je : a + Ht;
        if (ge(e))
          for (var Te = 0; Te < e.length; Te++)
            R = e[Te], S = A + Ie(R, Te), k += be(R, t, n, S, u);
        else {
          var Ue = X(e);
          if (typeof Ue == "function") {
            var St = e;
            Ue === St.entries && (Ze || W("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Ze = !0);
            for (var Mr = Ue.call(St), Ot, Nr = 0; !(Ot = Mr.next()).done; )
              R = Ot.value, S = A + Ie(R, Nr++), k += be(R, t, n, S, u);
          } else if (c === "object") {
            var kt = String(e);
            throw new Error("Objects are not valid as a React child (found: " + (kt === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : kt) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return k;
      }
      function Ee(e, t, n) {
        if (e == null)
          return e;
        var a = [], u = 0;
        return be(e, a, "", "", function(c) {
          return t.call(n, c, u++);
        }), a;
      }
      function Gt(e) {
        var t = 0;
        return Ee(e, function() {
          t++;
        }), t;
      }
      function Qt(e, t, n) {
        Ee(e, function() {
          t.apply(this, arguments);
        }, n);
      }
      function Xt(e) {
        return Ee(e, function(t) {
          return t;
        }) || [];
      }
      function Jt(e) {
        if (!te(e))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
      function Zt(e) {
        var t = {
          $$typeof: Q,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: e,
          _currentValue2: e,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        t.Provider = {
          $$typeof: oe,
          _context: t
        };
        var n = !1, a = !1, u = !1;
        {
          var c = {
            $$typeof: Q,
            _context: t
          };
          Object.defineProperties(c, {
            Provider: {
              get: function() {
                return a || (a = !0, f("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), t.Provider;
              },
              set: function(s) {
                t.Provider = s;
              }
            },
            _currentValue: {
              get: function() {
                return t._currentValue;
              },
              set: function(s) {
                t._currentValue = s;
              }
            },
            _currentValue2: {
              get: function() {
                return t._currentValue2;
              },
              set: function(s) {
                t._currentValue2 = s;
              }
            },
            _threadCount: {
              get: function() {
                return t._threadCount;
              },
              set: function(s) {
                t._threadCount = s;
              }
            },
            Consumer: {
              get: function() {
                return n || (n = !0, f("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), t.Consumer;
              }
            },
            displayName: {
              get: function() {
                return t.displayName;
              },
              set: function(s) {
                u || (W("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", s), u = !0);
              }
            }
          }), t.Consumer = c;
        }
        return t._currentRenderer = null, t._currentRenderer2 = null, t;
      }
      var le = -1, $e = 0, tt = 1, er = 2;
      function tr(e) {
        if (e._status === le) {
          var t = e._result, n = t();
          if (n.then(function(c) {
            if (e._status === $e || e._status === le) {
              var s = e;
              s._status = tt, s._result = c;
            }
          }, function(c) {
            if (e._status === $e || e._status === le) {
              var s = e;
              s._status = er, s._result = c;
            }
          }), e._status === le) {
            var a = e;
            a._status = $e, a._result = n;
          }
        }
        if (e._status === tt) {
          var u = e._result;
          return u === void 0 && f(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, u), "default" in u || f(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, u), u.default;
        } else
          throw e._result;
      }
      function rr(e) {
        var t = {
          // We use these fields to store the result.
          _status: le,
          _result: e
        }, n = {
          $$typeof: q,
          _payload: t,
          _init: tr
        };
        {
          var a, u;
          Object.defineProperties(n, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return a;
              },
              set: function(c) {
                f("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), a = c, Object.defineProperty(n, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return u;
              },
              set: function(c) {
                f("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), u = c, Object.defineProperty(n, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return n;
      }
      function nr(e) {
        e != null && e.$$typeof === L ? f("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? f("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && f("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && f("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var t = {
          $$typeof: B,
          render: e
        };
        {
          var n;
          Object.defineProperty(t, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return n;
            },
            set: function(a) {
              n = a, !e.name && !e.displayName && (e.displayName = a);
            }
          });
        }
        return t;
      }
      var rt;
      rt = Symbol.for("react.module.reference");
      function nt(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === V || e === ae || Z || e === z || e === H || e === ue || se || e === pe || ie || Pe || me || typeof e == "object" && e !== null && (e.$$typeof === q || e.$$typeof === L || e.$$typeof === oe || e.$$typeof === Q || e.$$typeof === B || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        e.$$typeof === rt || e.getModuleId !== void 0));
      }
      function ar(e, t) {
        nt(e) || f("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var n = {
          $$typeof: L,
          type: e,
          compare: t === void 0 ? null : t
        };
        {
          var a;
          Object.defineProperty(n, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return a;
            },
            set: function(u) {
              a = u, !e.name && !e.displayName && (e.displayName = u);
            }
          });
        }
        return n;
      }
      function $() {
        var e = J.current;
        return e === null && f(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), e;
      }
      function or(e) {
        var t = $();
        if (e._context !== void 0) {
          var n = e._context;
          n.Consumer === e ? f("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : n.Provider === e && f("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return t.useContext(e);
      }
      function ur(e) {
        var t = $();
        return t.useState(e);
      }
      function ir(e, t, n) {
        var a = $();
        return a.useReducer(e, t, n);
      }
      function sr(e) {
        var t = $();
        return t.useRef(e);
      }
      function cr(e, t) {
        var n = $();
        return n.useEffect(e, t);
      }
      function lr(e, t) {
        var n = $();
        return n.useInsertionEffect(e, t);
      }
      function fr(e, t) {
        var n = $();
        return n.useLayoutEffect(e, t);
      }
      function dr(e, t) {
        var n = $();
        return n.useCallback(e, t);
      }
      function pr(e, t) {
        var n = $();
        return n.useMemo(e, t);
      }
      function vr(e, t, n) {
        var a = $();
        return a.useImperativeHandle(e, t, n);
      }
      function yr(e, t) {
        {
          var n = $();
          return n.useDebugValue(e, t);
        }
      }
      function mr() {
        var e = $();
        return e.useTransition();
      }
      function hr(e) {
        var t = $();
        return t.useDeferredValue(e);
      }
      function gr() {
        var e = $();
        return e.useId();
      }
      function _r(e, t, n) {
        var a = $();
        return a.useSyncExternalStore(e, t, n);
      }
      var fe = 0, at, ot, ut, it, st, ct, lt;
      function ft() {
      }
      ft.__reactDisabledLog = !0;
      function br() {
        {
          if (fe === 0) {
            at = console.log, ot = console.info, ut = console.warn, it = console.error, st = console.group, ct = console.groupCollapsed, lt = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: ft,
              writable: !0
            };
            Object.defineProperties(console, {
              info: e,
              log: e,
              warn: e,
              error: e,
              group: e,
              groupCollapsed: e,
              groupEnd: e
            });
          }
          fe++;
        }
      }
      function Er() {
        {
          if (fe--, fe === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: o({}, e, {
                value: at
              }),
              info: o({}, e, {
                value: ot
              }),
              warn: o({}, e, {
                value: ut
              }),
              error: o({}, e, {
                value: it
              }),
              group: o({}, e, {
                value: st
              }),
              groupCollapsed: o({}, e, {
                value: ct
              }),
              groupEnd: o({}, e, {
                value: lt
              })
            });
          }
          fe < 0 && f("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var De = F.ReactCurrentDispatcher, xe;
      function Re(e, t, n) {
        {
          if (xe === void 0)
            try {
              throw Error();
            } catch (u) {
              var a = u.stack.trim().match(/\n( *(at )?)/);
              xe = a && a[1] || "";
            }
          return `
` + xe + e;
        }
      }
      var Fe = !1, we;
      {
        var Rr = typeof WeakMap == "function" ? WeakMap : Map;
        we = new Rr();
      }
      function dt(e, t) {
        if (!e || Fe)
          return "";
        {
          var n = we.get(e);
          if (n !== void 0)
            return n;
        }
        var a;
        Fe = !0;
        var u = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var c;
        c = De.current, De.current = null, br();
        try {
          if (t) {
            var s = function() {
              throw Error();
            };
            if (Object.defineProperty(s.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(s, []);
              } catch (A) {
                a = A;
              }
              Reflect.construct(e, [], s);
            } else {
              try {
                s.call();
              } catch (A) {
                a = A;
              }
              e.call(s.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (A) {
              a = A;
            }
            e();
          }
        } catch (A) {
          if (A && a && typeof A.stack == "string") {
            for (var d = A.stack.split(`
`), y = a.stack.split(`
`), _ = d.length - 1, E = y.length - 1; _ >= 1 && E >= 0 && d[_] !== y[E]; )
              E--;
            for (; _ >= 1 && E >= 0; _--, E--)
              if (d[_] !== y[E]) {
                if (_ !== 1 || E !== 1)
                  do
                    if (_--, E--, E < 0 || d[_] !== y[E]) {
                      var R = `
` + d[_].replace(" at new ", " at ");
                      return e.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", e.displayName)), typeof e == "function" && we.set(e, R), R;
                    }
                  while (_ >= 1 && E >= 0);
                break;
              }
          }
        } finally {
          Fe = !1, De.current = c, Er(), Error.prepareStackTrace = u;
        }
        var S = e ? e.displayName || e.name : "", k = S ? Re(S) : "";
        return typeof e == "function" && we.set(e, k), k;
      }
      function wr(e, t, n) {
        return dt(e, !1);
      }
      function Cr(e) {
        var t = e.prototype;
        return !!(t && t.isReactComponent);
      }
      function Ce(e, t, n) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return dt(e, Cr(e));
        if (typeof e == "string")
          return Re(e);
        switch (e) {
          case H:
            return Re("Suspense");
          case ue:
            return Re("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case B:
              return wr(e.render);
            case L:
              return Ce(e.type, t, n);
            case q: {
              var a = e, u = a._payload, c = a._init;
              try {
                return Ce(c(u), t, n);
              } catch {
              }
            }
          }
        return "";
      }
      var pt = {}, vt = F.ReactDebugCurrentFrame;
      function Se(e) {
        if (e) {
          var t = e._owner, n = Ce(e.type, e._source, t ? t.type : null);
          vt.setExtraStackFrame(n);
        } else
          vt.setExtraStackFrame(null);
      }
      function Sr(e, t, n, a, u) {
        {
          var c = Function.call.bind(ce);
          for (var s in e)
            if (c(e, s)) {
              var d = void 0;
              try {
                if (typeof e[s] != "function") {
                  var y = Error((a || "React class") + ": " + n + " type `" + s + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[s] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw y.name = "Invariant Violation", y;
                }
                d = e[s](t, s, a, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (_) {
                d = _;
              }
              d && !(d instanceof Error) && (Se(u), f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", n, s, typeof d), Se(null)), d instanceof Error && !(d.message in pt) && (pt[d.message] = !0, Se(u), f("Failed %s type: %s", n, d.message), Se(null));
            }
        }
      }
      function re(e) {
        if (e) {
          var t = e._owner, n = Ce(e.type, e._source, t ? t.type : null);
          ye(n);
        } else
          ye(null);
      }
      var Le;
      Le = !1;
      function yt() {
        if (D.current) {
          var e = Y(D.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
      function Or(e) {
        if (e !== void 0) {
          var t = e.fileName.replace(/^.*[\\\/]/, ""), n = e.lineNumber;
          return `

Check your code at ` + t + ":" + n + ".";
        }
        return "";
      }
      function kr(e) {
        return e != null ? Or(e.__source) : "";
      }
      var mt = {};
      function Tr(e) {
        var t = yt();
        if (!t) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (t = `

Check the top-level render call using <` + n + ">.");
        }
        return t;
      }
      function ht(e, t) {
        if (!(!e._store || e._store.validated || e.key != null)) {
          e._store.validated = !0;
          var n = Tr(t);
          if (!mt[n]) {
            mt[n] = !0;
            var a = "";
            e && e._owner && e._owner !== D.current && (a = " It was passed a child from " + Y(e._owner.type) + "."), re(e), f('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, a), re(null);
          }
        }
      }
      function gt(e, t) {
        if (typeof e == "object") {
          if (ge(e))
            for (var n = 0; n < e.length; n++) {
              var a = e[n];
              te(a) && ht(a, t);
            }
          else if (te(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var u = X(e);
            if (typeof u == "function" && u !== e.entries)
              for (var c = u.call(e), s; !(s = c.next()).done; )
                te(s.value) && ht(s.value, t);
          }
        }
      }
      function _t(e) {
        {
          var t = e.type;
          if (t == null || typeof t == "string")
            return;
          var n;
          if (typeof t == "function")
            n = t.propTypes;
          else if (typeof t == "object" && (t.$$typeof === B || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          t.$$typeof === L))
            n = t.propTypes;
          else
            return;
          if (n) {
            var a = Y(t);
            Sr(n, e.props, "prop", a, e);
          } else if (t.PropTypes !== void 0 && !Le) {
            Le = !0;
            var u = Y(t);
            f("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
          }
          typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && f("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Pr(e) {
        {
          for (var t = Object.keys(e.props), n = 0; n < t.length; n++) {
            var a = t[n];
            if (a !== "children" && a !== "key") {
              re(e), f("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), re(null);
              break;
            }
          }
          e.ref !== null && (re(e), f("Invalid attribute `ref` supplied to `React.Fragment`."), re(null));
        }
      }
      function bt(e, t, n) {
        var a = nt(e);
        if (!a) {
          var u = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (u += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var c = kr(t);
          c ? u += c : u += yt();
          var s;
          e === null ? s = "null" : ge(e) ? s = "array" : e !== void 0 && e.$$typeof === T ? (s = "<" + (Y(e.type) || "Unknown") + " />", u = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, f("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, u);
        }
        var d = Yt.apply(this, arguments);
        if (d == null)
          return d;
        if (a)
          for (var y = 2; y < arguments.length; y++)
            gt(arguments[y], e);
        return e === V ? Pr(d) : _t(d), d;
      }
      var Et = !1;
      function Ar(e) {
        var t = bt.bind(null, e);
        return t.type = e, Et || (Et = !0, W("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(t, "type", {
          enumerable: !1,
          get: function() {
            return W("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: e
            }), e;
          }
        }), t;
      }
      function jr(e, t, n) {
        for (var a = Bt.apply(this, arguments), u = 2; u < arguments.length; u++)
          gt(arguments[u], a.type);
        return _t(a), a;
      }
      function Ir(e, t) {
        var n = N.transition;
        N.transition = {};
        var a = N.transition;
        N.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          e();
        } finally {
          if (N.transition = n, n === null && a._updatedFibers) {
            var u = a._updatedFibers.size;
            u > 10 && W("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), a._updatedFibers.clear();
          }
        }
      }
      var Rt = !1, Oe = null;
      function $r(e) {
        if (Oe === null)
          try {
            var t = ("require" + Math.random()).slice(0, 7), n = l && l[t];
            Oe = n.call(l, "timers").setImmediate;
          } catch {
            Oe = function(u) {
              Rt === !1 && (Rt = !0, typeof MessageChannel > "u" && f("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var c = new MessageChannel();
              c.port1.onmessage = u, c.port2.postMessage(void 0);
            };
          }
        return Oe(e);
      }
      var ne = 0, wt = !1;
      function Ct(e) {
        {
          var t = ne;
          ne++, P.current === null && (P.current = []);
          var n = P.isBatchingLegacy, a;
          try {
            if (P.isBatchingLegacy = !0, a = e(), !n && P.didScheduleLegacyUpdate) {
              var u = P.current;
              u !== null && (P.didScheduleLegacyUpdate = !1, Ve(u));
            }
          } catch (S) {
            throw ke(t), S;
          } finally {
            P.isBatchingLegacy = n;
          }
          if (a !== null && typeof a == "object" && typeof a.then == "function") {
            var c = a, s = !1, d = {
              then: function(S, k) {
                s = !0, c.then(function(A) {
                  ke(t), ne === 0 ? Me(A, S, k) : S(A);
                }, function(A) {
                  ke(t), k(A);
                });
              }
            };
            return !wt && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              s || (wt = !0, f("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), d;
          } else {
            var y = a;
            if (ke(t), ne === 0) {
              var _ = P.current;
              _ !== null && (Ve(_), P.current = null);
              var E = {
                then: function(S, k) {
                  P.current === null ? (P.current = [], Me(y, S, k)) : S(y);
                }
              };
              return E;
            } else {
              var R = {
                then: function(S, k) {
                  S(y);
                }
              };
              return R;
            }
          }
        }
      }
      function ke(e) {
        e !== ne - 1 && f("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), ne = e;
      }
      function Me(e, t, n) {
        {
          var a = P.current;
          if (a !== null)
            try {
              Ve(a), $r(function() {
                a.length === 0 ? (P.current = null, t(e)) : Me(e, t, n);
              });
            } catch (u) {
              n(u);
            }
          else
            t(e);
        }
      }
      var Ne = !1;
      function Ve(e) {
        if (!Ne) {
          Ne = !0;
          var t = 0;
          try {
            for (; t < e.length; t++) {
              var n = e[t];
              do
                n = n(!0);
              while (n !== null);
            }
            e.length = 0;
          } catch (a) {
            throw e = e.slice(t + 1), a;
          } finally {
            Ne = !1;
          }
        }
      }
      var Dr = bt, xr = jr, Fr = Ar, Lr = {
        map: Ee,
        forEach: Qt,
        count: Gt,
        toArray: Xt,
        only: Jt
      };
      i.Children = Lr, i.Component = m, i.Fragment = V, i.Profiler = ae, i.PureComponent = b, i.StrictMode = z, i.Suspense = H, i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = F, i.act = Ct, i.cloneElement = xr, i.createContext = Zt, i.createElement = Dr, i.createFactory = Fr, i.createRef = xt, i.forwardRef = nr, i.isValidElement = te, i.lazy = rr, i.memo = ar, i.startTransition = Ir, i.unstable_act = Ct, i.useCallback = dr, i.useContext = or, i.useDebugValue = yr, i.useDeferredValue = hr, i.useEffect = cr, i.useId = gr, i.useImperativeHandle = vr, i.useInsertionEffect = lr, i.useLayoutEffect = fr, i.useMemo = pr, i.useReducer = ir, i.useRef = sr, i.useState = ur, i.useSyncExternalStore = _r, i.useTransition = mr, i.version = g, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(de, de.exports)), de.exports;
}
process.env.NODE_ENV === "production" ? We.exports = Wr() : We.exports = Yr();
var zr = We.exports;
const j = /* @__PURE__ */ Ur(zr);
function $t({
  children: l,
  direction: i,
  style: g,
  ...T
}) {
  return /* @__PURE__ */ j.createElement(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: i,
        ...g
      },
      ...T
    },
    l
  );
}
function Kr({
  style: l,
  ...i
}) {
  return /* @__PURE__ */ j.createElement(
    $t,
    {
      ...i,
      direction: "column",
      style: {
        width: "100%",
        ...l
      }
    }
  );
}
const Dt = Math.sqrt(5), Gr = (Dt - 1) / 2, Br = (Dt + 1) / 2;
function Qr({
  name: l,
  style: i,
  transform: g,
  color: T = "black",
  ...x
}) {
  return /* @__PURE__ */ j.createElement(j.Fragment, null, /* @__PURE__ */ j.createElement("svg", { viewBox: "0,0 1,1", ...x }, /* @__PURE__ */ j.createElement(
    "g",
    {
      transform: g
    },
    /* @__PURE__ */ j.createElement(
      "use",
      {
        x: 0,
        y: 0,
        xlinkHref: `#${l}`,
        style: {
          color: T,
          ...i
        }
      }
    )
  )));
}
function ze(l) {
  return ({ target: { value: i } }) => l(i);
}
function Xr({
  style: l,
  onChange: i,
  ...g
}) {
  return /* @__PURE__ */ j.createElement(
    "textarea",
    {
      onChange: i && ze(i),
      style: {
        outline: "none",
        display: "block",
        height: "100%",
        width: "100%",
        resize: "none",
        ...l
      },
      ...g
    }
  );
}
function Hr({
  children: l,
  ...i
}) {
  return /* @__PURE__ */ j.createElement(
    "option",
    {
      ...i
    },
    l
  );
}
function Jr({
  options: l,
  style: i,
  onChange: g,
  ...T
}) {
  return /* @__PURE__ */ j.createElement(
    "select",
    {
      onChange: g && ze(g),
      style: {
        outline: "none",
        ...i
      },
      ...T
    },
    l && l.map(({ label: x, value: V }, z) => /* @__PURE__ */ j.createElement(
      Hr,
      {
        key: z,
        value: V
      },
      x
    ))
  );
}
function Zr({
  style: l,
  onChange: i,
  ...g
}) {
  return /* @__PURE__ */ j.createElement(
    "input",
    {
      type: "text",
      onChange: i && ze(i),
      style: {
        outline: "none",
        display: "block",
        ...l
      },
      ...g
    }
  );
}
function en({
  style: l,
  ...i
}) {
  return /* @__PURE__ */ j.createElement(
    $t,
    {
      ...i,
      direction: "row",
      style: {
        width: "100%",
        ...l
      }
    }
  );
}
function Ye(l, i) {
  const g = Br ** l;
  return i ? `${g}${i}` : g;
}
function At(l, i) {
  return Array.isArray(l) ? l.map((g) => g > 0 ? Ye(g, i) : 0).join(" ") : Ye(l, i);
}
const jt = "rem";
function tn({
  children: l,
  margin: i,
  padding: g,
  style: T,
  ...x
}) {
  return /* @__PURE__ */ j.createElement(
    "div",
    {
      style: {
        margin: i && At(i, jt),
        padding: g && At(g, jt),
        ...T
      },
      ...x
    },
    l
  );
}
const qr = "rgb(80,80,80)";
function It({
  style: l,
  children: i,
  size: g = 0,
  ...T
}) {
  return /* @__PURE__ */ j.createElement(
    "span",
    {
      style: {
        fontFamily: "Helvetica, Arial, sans-serif",
        fontSize: `${Ye(g)}rem`,
        lineHeight: "1.3em",
        color: qr,
        ...l
      },
      ...T
    },
    i
  );
}
function rn({
  children: l,
  style: i,
  ...g
}) {
  return Array.isArray(l) ? l.map((T, x) => /* @__PURE__ */ j.createElement(
    It,
    {
      key: x,
      style: {
        display: "inline-block",
        marginBottom: "1rem",
        ...i
      }
    },
    T
  )) : /* @__PURE__ */ j.createElement(It, { style: i, ...g }, l);
}
export {
  Kr as Column,
  $t as Flex,
  Qr as Icon,
  Xr as InputBlob,
  Jr as InputSelect,
  Zr as InputText,
  Br as Phi,
  en as Row,
  tn as Spacing,
  rn as Text,
  Gr as phi
};
