import * as ee from "react";
import Be, { useState as Y, useCallback as Mt, useMemo as ze, createContext as jt, useContext as be, useLayoutEffect as ya, useEffect as $, useRef as re, forwardRef as Sc, createElement as va, useId as Rr, useInsertionEffect as Cc, cloneElement as Ac, Children as Pc, isValidElement as Rc, useImperativeHandle as kc } from "react";
import R, { keyframes as Oc, ThemeProvider as _c, useTheme as Lc } from "styled-components";
import Dc from "react-dom";
function sy(e) {
  const [t, n] = Y(e), [r, o] = Y("default");
  return {
    state: t,
    setState: n,
    setStatus: o,
    reset() {
      n(e), o("default");
    },
    bindings: {
      value: t,
      status: r,
      onChange(s) {
        n(s.target.value);
      }
    }
  };
}
function ay(e = !1) {
  const [t, n] = Y(e);
  return {
    state: t,
    setState: n,
    reset: () => n(e),
    bindings: {
      checked: t,
      onChange: (r) => n(r)
    }
  };
}
function ly(e = !1) {
  const [t, n] = Y(e);
  return {
    isOpen: t,
    setOpen: n,
    bindings: {
      open: t,
      setOpen: n
    }
  };
}
var Bn = {}, Vc = {
  get exports() {
    return Bn;
  },
  set exports(e) {
    Bn = e;
  }
}, Sn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fi;
function Fc() {
  if (Fi)
    return Sn;
  Fi = 1;
  var e = Be, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(a, l, c) {
    var u, d = {}, f = null, h = null;
    c !== void 0 && (f = "" + c), l.key !== void 0 && (f = "" + l.key), l.ref !== void 0 && (h = l.ref);
    for (u in l)
      r.call(l, u) && !s.hasOwnProperty(u) && (d[u] = l[u]);
    if (a && a.defaultProps)
      for (u in l = a.defaultProps, l)
        d[u] === void 0 && (d[u] = l[u]);
    return { $$typeof: t, type: a, key: f, ref: h, props: d, _owner: o.current };
  }
  return Sn.Fragment = n, Sn.jsx = i, Sn.jsxs = i, Sn;
}
var Cn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mi;
function Mc() {
  return Mi || (Mi = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Be, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), m = Symbol.iterator, g = "@@iterator";
    function b(p) {
      if (p === null || typeof p != "object")
        return null;
      var E = m && p[m] || p[g];
      return typeof E == "function" ? E : null;
    }
    var y = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(p) {
      {
        for (var E = arguments.length, C = new Array(E > 1 ? E - 1 : 0), k = 1; k < E; k++)
          C[k - 1] = arguments[k];
        v("error", p, C);
      }
    }
    function v(p, E, C) {
      {
        var k = y.ReactDebugCurrentFrame, L = k.getStackAddendum();
        L !== "" && (E += "%s", C = C.concat([L]));
        var q = C.map(function(H) {
          return String(H);
        });
        q.unshift("Warning: " + E), Function.prototype.apply.call(console[p], console, q);
      }
    }
    var T = !1, P = !1, O = !1, M = !1, N = !1, G;
    G = Symbol.for("react.module.reference");
    function z(p) {
      return !!(typeof p == "string" || typeof p == "function" || p === r || p === s || N || p === o || p === c || p === u || M || p === h || T || P || O || typeof p == "object" && p !== null && (p.$$typeof === f || p.$$typeof === d || p.$$typeof === i || p.$$typeof === a || p.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      p.$$typeof === G || p.getModuleId !== void 0));
    }
    function te(p, E, C) {
      var k = p.displayName;
      if (k)
        return k;
      var L = E.displayName || E.name || "";
      return L !== "" ? C + "(" + L + ")" : C;
    }
    function ce(p) {
      return p.displayName || "Context";
    }
    function oe(p) {
      if (p == null)
        return null;
      if (typeof p.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof p == "function")
        return p.displayName || p.name || null;
      if (typeof p == "string")
        return p;
      switch (p) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case s:
          return "Profiler";
        case o:
          return "StrictMode";
        case c:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof p == "object")
        switch (p.$$typeof) {
          case a:
            var E = p;
            return ce(E) + ".Consumer";
          case i:
            var C = p;
            return ce(C._context) + ".Provider";
          case l:
            return te(p, p.render, "ForwardRef");
          case d:
            var k = p.displayName || null;
            return k !== null ? k : oe(p.type) || "Memo";
          case f: {
            var L = p, q = L._payload, H = L._init;
            try {
              return oe(H(q));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var B = Object.assign, I = 0, W, Z, ie, we, Ve, wt, ne;
    function dt() {
    }
    dt.__reactDisabledLog = !0;
    function tn() {
      {
        if (I === 0) {
          W = console.log, Z = console.info, ie = console.warn, we = console.error, Ve = console.group, wt = console.groupCollapsed, ne = console.groupEnd;
          var p = {
            configurable: !0,
            enumerable: !0,
            value: dt,
            writable: !0
          };
          Object.defineProperties(console, {
            info: p,
            log: p,
            warn: p,
            error: p,
            group: p,
            groupCollapsed: p,
            groupEnd: p
          });
        }
        I++;
      }
    }
    function nn() {
      {
        if (I--, I === 0) {
          var p = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: B({}, p, {
              value: W
            }),
            info: B({}, p, {
              value: Z
            }),
            warn: B({}, p, {
              value: ie
            }),
            error: B({}, p, {
              value: we
            }),
            group: B({}, p, {
              value: Ve
            }),
            groupCollapsed: B({}, p, {
              value: wt
            }),
            groupEnd: B({}, p, {
              value: ne
            })
          });
        }
        I < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var xt = y.ReactCurrentDispatcher, Ye;
    function Et(p, E, C) {
      {
        if (Ye === void 0)
          try {
            throw Error();
          } catch (L) {
            var k = L.stack.trim().match(/\n( *(at )?)/);
            Ye = k && k[1] || "";
          }
        return `
` + Ye + p;
      }
    }
    var $e = !1, me;
    {
      var Tt = typeof WeakMap == "function" ? WeakMap : Map;
      me = new Tt();
    }
    function ke(p, E) {
      if (!p || $e)
        return "";
      {
        var C = me.get(p);
        if (C !== void 0)
          return C;
      }
      var k;
      $e = !0;
      var L = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var q;
      q = xt.current, xt.current = null, tn();
      try {
        if (E) {
          var H = function() {
            throw Error();
          };
          if (Object.defineProperty(H.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(H, []);
            } catch (ye) {
              k = ye;
            }
            Reflect.construct(p, [], H);
          } else {
            try {
              H.call();
            } catch (ye) {
              k = ye;
            }
            p.call(H.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ye) {
            k = ye;
          }
          p();
        }
      } catch (ye) {
        if (ye && k && typeof ye.stack == "string") {
          for (var j = ye.stack.split(`
`), xe = k.stack.split(`
`), le = j.length - 1, de = xe.length - 1; le >= 1 && de >= 0 && j[le] !== xe[de]; )
            de--;
          for (; le >= 1 && de >= 0; le--, de--)
            if (j[le] !== xe[de]) {
              if (le !== 1 || de !== 1)
                do
                  if (le--, de--, de < 0 || j[le] !== xe[de]) {
                    var Pe = `
` + j[le].replace(" at new ", " at ");
                    return p.displayName && Pe.includes("<anonymous>") && (Pe = Pe.replace("<anonymous>", p.displayName)), typeof p == "function" && me.set(p, Pe), Pe;
                  }
                while (le >= 1 && de >= 0);
              break;
            }
        }
      } finally {
        $e = !1, xt.current = q, nn(), Error.prepareStackTrace = L;
      }
      var gt = p ? p.displayName || p.name : "", X = gt ? Et(gt) : "";
      return typeof p == "function" && me.set(p, X), X;
    }
    function ft(p, E, C) {
      return ke(p, !1);
    }
    function St(p) {
      var E = p.prototype;
      return !!(E && E.isReactComponent);
    }
    function Fe(p, E, C) {
      if (p == null)
        return "";
      if (typeof p == "function")
        return ke(p, St(p));
      if (typeof p == "string")
        return Et(p);
      switch (p) {
        case c:
          return Et("Suspense");
        case u:
          return Et("SuspenseList");
      }
      if (typeof p == "object")
        switch (p.$$typeof) {
          case l:
            return ft(p.render);
          case d:
            return Fe(p.type, E, C);
          case f: {
            var k = p, L = k._payload, q = k._init;
            try {
              return Fe(q(L), E, C);
            } catch {
            }
          }
        }
      return "";
    }
    var ht = Object.prototype.hasOwnProperty, Ee = {}, Ct = y.ReactDebugCurrentFrame;
    function je(p) {
      if (p) {
        var E = p._owner, C = Fe(p.type, p._source, E ? E.type : null);
        Ct.setExtraStackFrame(C);
      } else
        Ct.setExtraStackFrame(null);
    }
    function Ge(p, E, C, k, L) {
      {
        var q = Function.call.bind(ht);
        for (var H in p)
          if (q(p, H)) {
            var j = void 0;
            try {
              if (typeof p[H] != "function") {
                var xe = Error((k || "React class") + ": " + C + " type `" + H + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof p[H] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw xe.name = "Invariant Violation", xe;
              }
              j = p[H](E, H, k, C, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (le) {
              j = le;
            }
            j && !(j instanceof Error) && (je(L), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", k || "React class", C, H, typeof j), je(null)), j instanceof Error && !(j.message in Ee) && (Ee[j.message] = !0, je(L), w("Failed %s type: %s", C, j.message), je(null));
          }
      }
    }
    var ae = Array.isArray;
    function Xe(p) {
      return ae(p);
    }
    function rn(p) {
      {
        var E = typeof Symbol == "function" && Symbol.toStringTag, C = E && p[Symbol.toStringTag] || p.constructor.name || "Object";
        return C;
      }
    }
    function At(p) {
      try {
        return Nt(p), !1;
      } catch {
        return !0;
      }
    }
    function Nt(p) {
      return "" + p;
    }
    function Pt(p) {
      if (At(p))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", rn(p)), Nt(p);
    }
    var Ne = y.ReactCurrentOwner, Je = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Rt, Ze, Qe;
    Qe = {};
    function on(p) {
      if (ht.call(p, "ref")) {
        var E = Object.getOwnPropertyDescriptor(p, "ref").get;
        if (E && E.isReactWarning)
          return !1;
      }
      return p.ref !== void 0;
    }
    function Ut(p) {
      if (ht.call(p, "key")) {
        var E = Object.getOwnPropertyDescriptor(p, "key").get;
        if (E && E.isReactWarning)
          return !1;
      }
      return p.key !== void 0;
    }
    function pt(p, E) {
      if (typeof p.ref == "string" && Ne.current && E && Ne.current.stateNode !== E) {
        var C = oe(Ne.current.type);
        Qe[C] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', oe(Ne.current.type), p.ref), Qe[C] = !0);
      }
    }
    function ge(p, E) {
      {
        var C = function() {
          Rt || (Rt = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", E));
        };
        C.isReactWarning = !0, Object.defineProperty(p, "key", {
          get: C,
          configurable: !0
        });
      }
    }
    function Ce(p, E) {
      {
        var C = function() {
          Ze || (Ze = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", E));
        };
        C.isReactWarning = !0, Object.defineProperty(p, "ref", {
          get: C,
          configurable: !0
        });
      }
    }
    var zt = function(p, E, C, k, L, q, H) {
      var j = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: p,
        key: E,
        ref: C,
        props: H,
        // Record the component responsible for creating this element.
        _owner: q
      };
      return j._store = {}, Object.defineProperty(j._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(j, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: k
      }), Object.defineProperty(j, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: L
      }), Object.freeze && (Object.freeze(j.props), Object.freeze(j)), j;
    };
    function Wt(p, E, C, k, L) {
      {
        var q, H = {}, j = null, xe = null;
        C !== void 0 && (Pt(C), j = "" + C), Ut(E) && (Pt(E.key), j = "" + E.key), on(E) && (xe = E.ref, pt(E, L));
        for (q in E)
          ht.call(E, q) && !Je.hasOwnProperty(q) && (H[q] = E[q]);
        if (p && p.defaultProps) {
          var le = p.defaultProps;
          for (q in le)
            H[q] === void 0 && (H[q] = le[q]);
        }
        if (j || xe) {
          var de = typeof p == "function" ? p.displayName || p.name || "Unknown" : p;
          j && ge(H, de), xe && Ce(H, de);
        }
        return zt(p, j, xe, L, k, Ne.current, H);
      }
    }
    var et = y.ReactCurrentOwner, kt = y.ReactDebugCurrentFrame;
    function _e(p) {
      if (p) {
        var E = p._owner, C = Fe(p.type, p._source, E ? E.type : null);
        kt.setExtraStackFrame(C);
      } else
        kt.setExtraStackFrame(null);
    }
    var tt;
    tt = !1;
    function nt(p) {
      return typeof p == "object" && p !== null && p.$$typeof === t;
    }
    function Ot() {
      {
        if (et.current) {
          var p = oe(et.current.type);
          if (p)
            return `

Check the render method of \`` + p + "`.";
        }
        return "";
      }
    }
    function sn(p) {
      {
        if (p !== void 0) {
          var E = p.fileName.replace(/^.*[\\\/]/, ""), C = p.lineNumber;
          return `

Check your code at ` + E + ":" + C + ".";
        }
        return "";
      }
    }
    var ue = {};
    function Te(p) {
      {
        var E = Ot();
        if (!E) {
          var C = typeof p == "string" ? p : p.displayName || p.name;
          C && (E = `

Check the top-level render call using <` + C + ">.");
        }
        return E;
      }
    }
    function V(p, E) {
      {
        if (!p._store || p._store.validated || p.key != null)
          return;
        p._store.validated = !0;
        var C = Te(E);
        if (ue[C])
          return;
        ue[C] = !0;
        var k = "";
        p && p._owner && p._owner !== et.current && (k = " It was passed a child from " + oe(p._owner.type) + "."), _e(p), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', C, k), _e(null);
      }
    }
    function U(p, E) {
      {
        if (typeof p != "object")
          return;
        if (Xe(p))
          for (var C = 0; C < p.length; C++) {
            var k = p[C];
            nt(k) && V(k, E);
          }
        else if (nt(p))
          p._store && (p._store.validated = !0);
        else if (p) {
          var L = b(p);
          if (typeof L == "function" && L !== p.entries)
            for (var q = L.call(p), H; !(H = q.next()).done; )
              nt(H.value) && V(H.value, E);
        }
      }
    }
    function Ae(p) {
      {
        var E = p.type;
        if (E == null || typeof E == "string")
          return;
        var C;
        if (typeof E == "function")
          C = E.propTypes;
        else if (typeof E == "object" && (E.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        E.$$typeof === d))
          C = E.propTypes;
        else
          return;
        if (C) {
          var k = oe(E);
          Ge(C, p.props, "prop", k, p);
        } else if (E.PropTypes !== void 0 && !tt) {
          tt = !0;
          var L = oe(E);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", L || "Unknown");
        }
        typeof E.getDefaultProps == "function" && !E.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function mt(p) {
      {
        for (var E = Object.keys(p.props), C = 0; C < E.length; C++) {
          var k = E[C];
          if (k !== "children" && k !== "key") {
            _e(p), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", k), _e(null);
            break;
          }
        }
        p.ref !== null && (_e(p), w("Invalid attribute `ref` supplied to `React.Fragment`."), _e(null));
      }
    }
    function A(p, E, C, k, L, q) {
      {
        var H = z(p);
        if (!H) {
          var j = "";
          (p === void 0 || typeof p == "object" && p !== null && Object.keys(p).length === 0) && (j += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var xe = sn(L);
          xe ? j += xe : j += Ot();
          var le;
          p === null ? le = "null" : Xe(p) ? le = "array" : p !== void 0 && p.$$typeof === t ? (le = "<" + (oe(p.type) || "Unknown") + " />", j = " Did you accidentally export a JSX literal instead of a component?") : le = typeof p, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", le, j);
        }
        var de = Wt(p, E, C, L, q);
        if (de == null)
          return de;
        if (H) {
          var Pe = E.children;
          if (Pe !== void 0)
            if (k)
              if (Xe(Pe)) {
                for (var gt = 0; gt < Pe.length; gt++)
                  U(Pe[gt], p);
                Object.freeze && Object.freeze(Pe);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              U(Pe, p);
        }
        return p === r ? mt(de) : Ae(de), de;
      }
    }
    function D(p, E, C) {
      return A(p, E, C, !0);
    }
    function _(p, E, C) {
      return A(p, E, C, !1);
    }
    var J = _, he = D;
    Cn.Fragment = r, Cn.jsx = J, Cn.jsxs = he;
  }()), Cn;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Fc() : e.exports = Mc();
})(Vc);
const bn = Bn.Fragment, S = Bn.jsx, Q = Bn.jsxs, Bc = (e) => /* @__PURE__ */ Q(
  $c,
  {
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    ...e,
    children: [
      /* @__PURE__ */ S(
        "circle",
        {
          cx: "24",
          cy: "24",
          fill: "none",
          r: "20",
          strokeDasharray: "80",
          strokeLinecap: "round",
          stroke: "currentColor",
          strokeWidth: "3"
        }
      ),
      /* @__PURE__ */ S(
        "circle",
        {
          cx: "24",
          cy: "24",
          fill: "none",
          opacity: "0.3",
          r: "20",
          strokeLinecap: "round",
          stroke: "currentColor",
          strokeWidth: "3"
        }
      )
    ]
  }
), Ic = Oc`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`, $c = R.svg`
  color: currentColor;
  font-size: 1em;
  width: 1em;
  height: 1em;
  animation: ${Ic} 0.9s linear infinite;
`, jc = R.button.attrs((e) => ({
  children: e.loading ? /* @__PURE__ */ S(Bc, { style: { margin: ".18rem 0" } }) : e.icon ? /* @__PURE__ */ Q(bn, { children: [
    (!e.iconPosition || e.iconPosition === "left") && e.icon,
    e.children,
    e.iconPosition === "right" && e.icon
  ] }) : e.children
}))`
  display: flex;
  outline: none;
  cursor: pointer;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 16px;
  font-weight: 600;
  padding: 12px 24px;
  width: ${(e) => e.fullWidth ? "100%" : e.width || "250px"};
  ${(e) => !e.width && "min-width: 100px"};
  height: ${(e) => e.height || "46px"};
  border-radius: 12px;
  text-align: center;
  align-items: center;
  justify-content: center;
  gap: ${(e) => e.icon ? "4px" : "0"};
  background: ${(e) => e.theme.button.background[e.variant || "primary"].default};
  color: ${(e) => e.theme.button.text[e.variant || "primary"]};

  &:hover {
    background: ${(e) => e.theme.button.background[e.variant || "primary"].hover};
    border: ${(e) => e.theme.button.hoverBorder[e.variant || "primary"]};
  }

  &:active {
    background: ${(e) => e.theme.button.background[e.variant || "primary"].active};
  }

  &:disabled {
    cursor: not-allowed;
    background: ${(e) => e.theme.button.background[e.variant || "primary"].disabled};
    color: ${(e) => e.theme.button.text.disabled};
  }
`, ba = R.div`
  padding: 24px;
  border-radius: 8px;
  border: 1px solid rgb(${(e) => e.theme.cardBorder});
  background-color: ${(e) => e.theme.cardBackground};
`, Nc = {
  extraLight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800
}, Uc = {
  // Display text (Hero, Banner)
  "7xl": "3.5rem",
  // 56px
  "6xl": "3rem",
  // 48px
  "5xl": "2.75rem",
  // 44px
  "4xl": "2.5rem",
  // 40px
  // Headings
  "3xl": "2rem",
  // 32px
  "2xl": "1.75rem",
  // 28px
  xl: "1.5rem",
  // 24px
  // Body text
  lg: "1.25rem",
  // 20px
  md: "1.125rem",
  // 18px
  base: "1rem",
  // 16px
  sm: "0.875rem",
  // 14px
  xs: "0.75rem",
  // 12px
  // Micro text (Labels, badges, tags)
  "2xs": "0.625rem",
  // 10px
  "3xs": "0.5rem",
  // 8px
  "4xs": "0.375rem",
  // 6px
  "5xs": "0.25rem",
  // 4px
  "6xs": "0.125rem",
  // 2px
  "7xs": "0.0625rem"
  // 1px
};
function wn({
  children: e,
  lineHeight: t,
  noMargin: n = !1,
  as: r = "p",
  size: o = "base",
  weight: s = "regular",
  variant: i = "primary",
  ...a
}) {
  return /* @__PURE__ */ S(
    zc,
    {
      as: r,
      $size: o,
      $weight: s,
      $variant: i,
      $lineHeight: t,
      $noMargin: n,
      ...a,
      children: e
    }
  );
}
const zc = R.p`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: ${(e) => Uc[e.$size]};
  font-weight: ${(e) => Nc[e.$weight]};
  ${(e) => e.$lineHeight && `line-height: ${e.$lineHeight};`}
  color: ${(e) => e.$variant === "primary" ? e.theme.primaryText : e.$variant === "secondary" ? e.theme.secondaryText : e.theme.tertiaryText};
  ${(e) => e.$noMargin && "margin: 0;"}
`, cy = ({
  checked: e,
  onChange: t,
  size: n = 24,
  label: r,
  labelProps: o
}) => {
  const s = Mt(() => {
    t && t(!e);
  }, [t, e]);
  return /* @__PURE__ */ Q(Wc, { size: n, onClick: s, children: [
    /* @__PURE__ */ Q(Hc, { children: [
      /* @__PURE__ */ S(
        qc,
        {
          checked: e,
          "aria-checked": e,
          role: "checkbox"
        }
      ),
      /* @__PURE__ */ S(Kc, { size: n })
    ] }),
    r && // @ts-ignore
    /* @__PURE__ */ S(Yc, { ...o, size: n, children: r })
  ] });
}, Wc = R.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${(e) => Math.max(8, e.size ? e.size * 0.4 : 8)}px;
  margin-left: 0.12rem;
  cursor: pointer;
`, Hc = R.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(e) => e.size}px;
  height: ${(e) => e.size}px;
`, qc = R.input.attrs({ type: "checkbox" })`
  visibility: hidden;

  &:checked + label {
    background-color: ${(e) => e.theme.theme};
    border-color: ${(e) => e.theme.theme};
  }

  &:checked + label:after {
    opacity: 1;
  }

  &:focus + label {
    box-shadow: 0 0 0 2px ${(e) => e.theme.theme}33;
  }
`, Kc = R.label`
  box-sizing: border-box;
  background-color: transparent;
  border: 2.25px solid ${(e) => e.theme.theme};
  border-radius: 50%;
  cursor: pointer;
  height: ${(e) => e.size}px;
  width: ${(e) => e.size}px;
  position: absolute;
  margin: auto;

  transition: all 0.2s ease;

  &:hover {
    border-color: ${(e) => e.theme.theme};
    background-color: ${(e) => e.theme.theme}11;
  }

  &:after {
    border: 2.25px solid #fff;
    border-top: none;
    border-right: none;
    content: "";
    height: ${(e) => e.size / 4}px;
    left: ${(e) => e.size / 8}px;
    opacity: 0;
    position: absolute;
    top: ${(e) => e.size / 6}px;
    transform: rotate(-45deg);
    width: ${(e) => e.size / 2}px;
    transition: opacity 0.2s ease;
  }
`, Yc = R(wn).attrs({
  weight: "medium",
  noMargin: !0
})`
  font-size: ${(e) => Math.max(14, e.size ? e.size * 0.6 : 14)}px;
  display: flex;
  align-items: center;
  height: ${(e) => Math.max(e.size || 24, 24)}px;
`;
function We() {
  return We = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, We.apply(this, arguments);
}
var Gc = function(t) {
  return /* @__PURE__ */ S("svg", We({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, t, {
    children: /* @__PURE__ */ S("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M12 8v4m0 4h.01M22 12c0 5.5228-4.4772 10-10 10S2 17.5228 2 12 6.4772 2 12 2s10 4.4772 10 10"
    })
  }));
}, kr = function(t) {
  return /* @__PURE__ */ S("svg", We({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, t, {
    children: /* @__PURE__ */ S("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "m6 9 6 6 6-6"
    })
  }));
}, Xc = function(t) {
  return /* @__PURE__ */ S("svg", We({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, t, {
    children: /* @__PURE__ */ S("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "m9 18 6-6-6-6"
    })
  }));
}, Jc = function(t) {
  return /* @__PURE__ */ S("svg", We({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, t, {
    children: /* @__PURE__ */ S("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "m18 15-6-6-6 6"
    })
  }));
}, Zc = function(t) {
  return /* @__PURE__ */ Q("svg", We({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, t, {
    children: [/* @__PURE__ */ S("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M2.4201 12.7132c-.1362-.2157-.2043-.3235-.2424-.4898-.0286-.1249-.0286-.3219 0-.4468.0381-.1663.1062-.2741.2424-.4898C3.5455 9.5048 6.8954 5 12.0004 5s8.4549 4.5048 9.5803 6.2868c.1362.2157.2043.3235.2424.4898.0286.1249.0286.3219 0 .4468-.0381.1663-.1062.2741-.2424.4898C20.4553 14.4952 17.1054 19 12.0004 19s-8.4549-4.5048-9.5803-6.2868"
    }), /* @__PURE__ */ S("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M12.0004 15c1.6569 0 3-1.3431 3-3s-1.3431-3-3-3-3 1.3431-3 3 1.3431 3 3 3"
    })]
  }));
}, Qc = function(t) {
  return /* @__PURE__ */ S("svg", We({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, t, {
    children: /* @__PURE__ */ S("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M10.7429 5.0923A8.6 8.6 0 0 1 12.0004 5c5.105 0 8.4549 4.5048 9.5803 6.2868.1362.2157.2043.3235.2424.4899.0287.1249.0286.322 0 .4469-.0382.1663-.1067.2749-.2439.492a17.5 17.5 0 0 1-1.3627 1.8649M6.7243 6.715c-2.162 1.4667-3.6298 3.5044-4.3032 4.5703-.1368.2166-.2052.3249-.2434.4912-.0286.1249-.0286.3219 0 .4469.0381.1663.1062.2741.2424.4898C3.5455 14.4952 6.8954 19 12.0004 19c2.0584 0 3.8315-.7324 5.2884-1.7234M3.0004 3l18 18M9.8791 9.8787c-.5429.5429-.8787 1.2929-.8787 2.1213 0 1.6569 1.3432 3 3 3 .8284 0 1.5784-.3358 2.1213-.8787"
    })
  }));
}, eu = function(t) {
  return /* @__PURE__ */ S("svg", We({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, t, {
    children: /* @__PURE__ */ S("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "m21 21-5.9999-6M17 10c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7 7 3.134 7 7"
    })
  }));
}, tu = function(t) {
  return /* @__PURE__ */ S("svg", We({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, t, {
    children: /* @__PURE__ */ S("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "m15 9-6 6m0-6 6 6m7-3c0 5.5228-4.4772 10-10 10S2 17.5228 2 12 6.4772 2 12 2s10 4.4772 10 10"
    })
  }));
}, wa = function(t) {
  return /* @__PURE__ */ S("svg", We({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, t, {
    children: /* @__PURE__ */ S("path", {
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M18 6 6 18M6 6l12 12"
    })
  }));
};
const nu = {
  small: "42px",
  normal: "52px"
}, ru = {
  small: "16px",
  normal: "18px",
  large: "40px"
};
function uy({
  label: e,
  fullWidth: t,
  sizeVariant: n = "normal",
  status: r = "default",
  disabled: o,
  variant: s = "default",
  iconLeft: i,
  iconRight: a,
  errorMessage: l,
  special: c,
  inputContainerStyle: u,
  labelStyle: d,
  type: f = "text",
  inputFooter: h,
  onBlur: m,
  stacked: g,
  ...b
}) {
  const [y, w] = Y(!1), [v, T] = Y(null), [P, O] = Y(!1), M = ze(() => f === "password" ? P ? "text" : "password" : f, [s, P, f]), N = ze(
    () => ({
      fullWidth: t,
      sizeVariant: n,
      variant: s,
      status: r,
      disabled: o,
      iconLeft: i,
      iconRight: a,
      special: c,
      ...b
    }),
    [
      t,
      n,
      s,
      r,
      o,
      i,
      a,
      c,
      b
    ]
  ), G = (I) => {
    const W = setTimeout(() => {
      w(!1), clearTimeout(W);
    }, 200);
    T(W), m == null || m(I);
  }, z = (I) => {
    var W;
    I.preventDefault(), v && clearTimeout(v), w(!0), (W = b == null ? void 0 : b.onChange) == null || W.call(b, {
      target: {
        value: "",
        name: b == null ? void 0 : b.name
      }
    });
  }, te = () => a || (f === "password" ? /* @__PURE__ */ S(
    vo,
    {
      as: P ? Qc : Zc,
      onClick: () => O(!P)
    }
  ) : s === "dropdown" ? /* @__PURE__ */ S(vo, { as: kr, disabled: o }) : b.value && y ? /* @__PURE__ */ S(au, { onClick: z, height: 20, width: 20 }) : r === "error" ? /* @__PURE__ */ S(Gc, { height: 20, width: 20, color: "#D22B1F" }) : null), oe = (() => i || (s === "search" ? /* @__PURE__ */ S(su, { disabled: o }) : null))(), B = te();
  return /* @__PURE__ */ Q(bn, { children: [
    e && /* @__PURE__ */ S(Ea, { style: d, children: e }),
    /* @__PURE__ */ Q(
      xa,
      {
        fullWidth: t,
        sizeVariant: n,
        status: r ?? "default",
        disabled: o,
        variant: s,
        special: c,
        style: u,
        stacked: g,
        children: [
          oe && /* @__PURE__ */ S(yo, { position: "left", children: oe }),
          /* @__PURE__ */ Q(lu, { stacked: g, children: [
            /* @__PURE__ */ S(
              iu,
              {
                ...N,
                type: M,
                disabled: o,
                onFocus: () => w(!0),
                onBlur: G
              }
            ),
            B && /* @__PURE__ */ S(yo, { position: "right", children: B })
          ] }),
          h
        ]
      }
    ),
    r === "error" && l && /* @__PURE__ */ S(ou, { children: l })
  ] });
}
const xa = R.div`
  position: relative;
  display: flex;
  flex-direction: ${(e) => e.stacked ? "column" : "row"};
  gap: 4px;
  align-items: center;
  height: ${(e) => nu[e.sizeVariant ?? "normal"]};
  width: ${(e) => e.fullWidth ? "100%" : "345px"};
  padding: ${(e) => e.sizeVariant === "small" ? "12px" : "12px 14px"};
  background: ${(e) => e.theme.input.background[e.variant ?? "default"].default};
  border-radius: 10px;
  box-sizing: border-box;
  border: 1.5px solid transparent;

  overflow: hidden;
  color: rgb(${(e) => e.theme.cardBorder});
  transition: border-color 0.13s ease-in-out, background 0.13s ease-in-out;

  ${(e) => e.variant === "dropdown" ? `
      border: 1.5px solid  ${e.theme.input.border[e.variant || "default"].default};
      background: ${e.theme.input.background[e.variant || "default"].default};
      box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.06);
    ` : e.variant === "search" && e.special ? `border: 1.5px solid ${e.theme.input.border[e.variant || "default"].special}; background:  ${e.theme.input.background[e.variant || "default"].special};` : ""}

  ${(e) => e.status === "error" && `border: 1.5px solid ${e.theme.fail}`};

  &:hover {
    ${(e) => "border: 1.5px solid " + (e.status === "error" ? e.theme.fail : "")};
  }

  &:focus-within,
  &:active {
    border: 1.5px solid
      ${(e) => e.status === "error" ? e.theme.fail : e.theme.input.border[e.variant ?? "default"].focused};
  }

  ${(e) => e.disabled && `
    background: ${e.theme.input.background[e.variant ?? "default"].disabled};
    border: 1.5px solid ${e.theme.input.border[e.variant ?? "default"].disabled};
    color: #838383;
  `}
`, Ea = R.p`
  font-size: 14px;
  font-weight: 500;
  font-family: "Plus Jakarta Sans", sans-serif;
  color: #666;
  margin: 0;
  margin-bottom: 8px;
`, ou = R.p`
  color: ${(e) => e.theme.fail};
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  margin: 0;
  padding-top: 8px;
`, iu = R.input`
  box-sizing: border-box;
  display: flex;
  flex: 1;
  outline: none;
  border: none;
  background-color: transparent;
  color: ${(e) => e.theme.primaryText};

  font-size: ${(e) => ru[e.sizeVariant ?? "normal"]};
  font-weight: 500;
  width: 100%;
  transition: all 0.23s ease-in-out;

  ::-webkit-input-placeholder {
    color: ${(e) => e.theme.input.placeholder[e.variant || "default"]};
  }

  :-ms-input-placeholder {
    color: ${(e) => e.theme.input.placeholder[e.variant || "default"]};
  }

  ::placeholder {
    color: ${(e) => e.theme.input.placeholder[e.variant || "default"]};
  }
`, yo = R.div`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 500;
  color: #666;
  cursor: pointer;
`, su = R(eu)`
  color: ${(e) => e.theme.input.icons[e.disabled ? "searchInactive" : "searchActive"]};
`, vo = R(tu)`
  height: 20px;
  width: 20px;
  cursor: pointer;
  color: ${({ theme: e, disabled: t }) => t ? e.tertiaryText : e.secondaryText};
`, au = ({
  onClick: e,
  width: t = 20,
  height: n = 20,
  color: r = "#838383"
}) => /* @__PURE__ */ S(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    viewBox: "0 0 16 16",
    fill: "none",
    onClick: e,
    children: /* @__PURE__ */ S(
      "path",
      {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M8.00008 0.666656C3.94999 0.666656 0.666748 3.9499 0.666748 7.99999C0.666748 12.0501 3.94999 15.3333 8.00008 15.3333C12.0502 15.3333 15.3334 12.0501 15.3334 7.99999C15.3334 3.9499 12.0502 0.666656 8.00008 0.666656ZM10.4715 5.52859C10.7318 5.78893 10.7318 6.21105 10.4715 6.47139L8.94289 7.99999L10.4715 9.52859C10.7318 9.78893 10.7318 10.211 10.4715 10.4714C10.2111 10.7317 9.78903 10.7317 9.52868 10.4714L8.00008 8.9428L6.47149 10.4714C6.21114 10.7317 5.78903 10.7317 5.52868 10.4714C5.26833 10.211 5.26833 9.78893 5.52868 9.52859L7.05727 7.99999L5.52868 6.47139C5.26833 6.21105 5.26833 5.78893 5.52868 5.52859C5.78903 5.26824 6.21114 5.26824 6.47149 5.52859L8.00008 7.05718L9.52868 5.52859C9.78903 5.26824 10.2111 5.26824 10.4715 5.52859Z",
        fill: r
      }
    )
  }
), lu = R.div`
  display: flex;
  gap: 4px;
  align-items: center;
  width: 100%;
  flex: ${(e) => e.stacked ? "0" : "1"};
`, Yo = jt({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
}), Or = jt({});
function cu() {
  return be(Or).visualElement;
}
const Hn = jt(null), Zt = typeof document < "u", On = Zt ? ya : $, Ta = jt({ strict: !1 });
function uu(e, t, n, r) {
  const o = cu(), s = be(Ta), i = be(Hn), a = be(Yo).reducedMotion, l = re();
  r = r || s.renderer, !l.current && r && (l.current = r(e, {
    visualState: t,
    parent: o,
    props: n,
    presenceId: i ? i.id : void 0,
    blockInitialAnimation: i ? i.initial === !1 : !1,
    reducedMotionConfig: a
  }));
  const c = l.current;
  return On(() => {
    c && c.render();
  }), On(() => {
    c && c.animationState && c.animationState.animateChanges();
  }), On(() => () => c && c.notify("Unmount"), []), c;
}
function cn(e) {
  return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function du(e, t, n) {
  return Mt(
    (r) => {
      r && e.mount && e.mount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : cn(n) && (n.current = r));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
function In(e) {
  return typeof e == "string" || Array.isArray(e);
}
function _r(e) {
  return typeof e == "object" && typeof e.start == "function";
}
const fu = [
  "initial",
  "animate",
  "exit",
  "whileHover",
  "whileDrag",
  "whileTap",
  "whileFocus",
  "whileInView"
];
function Lr(e) {
  return _r(e.animate) || fu.some((t) => In(e[t]));
}
function Sa(e) {
  return !!(Lr(e) || e.variants);
}
function hu(e, t) {
  if (Lr(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || In(n) ? n : void 0,
      animate: In(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function pu(e) {
  const { initial: t, animate: n } = hu(e, be(Or));
  return ze(() => ({ initial: t, animate: n }), [Bi(t), Bi(n)]);
}
function Bi(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const yt = (e) => ({
  isEnabled: (t) => e.some((n) => !!t[n])
}), $n = {
  measureLayout: yt(["layout", "layoutId", "drag"]),
  animation: yt([
    "animate",
    "exit",
    "variants",
    "whileHover",
    "whileTap",
    "whileFocus",
    "whileDrag",
    "whileInView"
  ]),
  exit: yt(["exit"]),
  drag: yt(["drag", "dragControls"]),
  focus: yt(["whileFocus"]),
  hover: yt(["whileHover", "onHoverStart", "onHoverEnd"]),
  tap: yt(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
  pan: yt([
    "onPan",
    "onPanStart",
    "onPanSessionStart",
    "onPanEnd"
  ]),
  inView: yt([
    "whileInView",
    "onViewportEnter",
    "onViewportLeave"
  ])
};
function mu(e) {
  for (const t in e)
    t === "projectionNodeConstructor" ? $n.projectionNodeConstructor = e[t] : $n[t].Component = e[t];
}
function Dr(e) {
  const t = re(null);
  return t.current === null && (t.current = e()), t.current;
}
const _n = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
let gu = 1;
function yu() {
  return Dr(() => {
    if (_n.hasEverUpdated)
      return gu++;
  });
}
const Go = jt({});
class vu extends Be.Component {
  /**
   * Update visual element props as soon as we know this update is going to be commited.
   */
  getSnapshotBeforeUpdate() {
    const { visualElement: t, props: n } = this.props;
    return t && t.setProps(n), null;
  }
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
const Ca = jt({}), bu = Symbol.for("motionComponentSymbol");
function wu({ preloadedFeatures: e, createVisualElement: t, projectionNodeConstructor: n, useRender: r, useVisualState: o, Component: s }) {
  e && mu(e);
  function i(l, c) {
    const u = {
      ...be(Yo),
      ...l,
      layoutId: xu(l)
    }, { isStatic: d } = u;
    let f = null;
    const h = pu(l), m = d ? void 0 : yu(), g = o(l, d);
    if (!d && Zt) {
      h.visualElement = uu(s, g, u, t);
      const b = be(Ta).strict, y = be(Ca);
      h.visualElement && (f = h.visualElement.loadFeatures(
        // Note: Pass the full new combined props to correctly re-render dynamic feature components.
        u,
        b,
        e,
        m,
        n || $n.projectionNodeConstructor,
        y
      ));
    }
    return ee.createElement(
      vu,
      { visualElement: h.visualElement, props: u },
      f,
      ee.createElement(Or.Provider, { value: h }, r(s, l, m, du(g, h.visualElement, c), g, d, h.visualElement))
    );
  }
  const a = Sc(i);
  return a[bu] = s, a;
}
function xu({ layoutId: e }) {
  const t = be(Go).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function Eu(e) {
  function t(r, o = {}) {
    return wu(e(r, o));
  }
  if (typeof Proxy > "u")
    return t;
  const n = /* @__PURE__ */ new Map();
  return new Proxy(t, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (r, o) => (n.has(o) || n.set(o, t(o)), n.get(o))
  });
}
const Tu = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function Xo(e) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof e != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    e.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(Tu.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/.test(e))
    )
  );
}
const fr = {};
function Su(e) {
  Object.assign(fr, e);
}
const hr = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], Qt = new Set(hr);
function Aa(e, { layout: t, layoutId: n }) {
  return Qt.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!fr[e] || e === "opacity");
}
const at = (e) => !!(e != null && e.getVelocity), Cu = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, Au = (e, t) => hr.indexOf(e) - hr.indexOf(t);
function Pu({ transform: e, transformKeys: t }, { enableHardwareAcceleration: n = !0, allowTransformNone: r = !0 }, o, s) {
  let i = "";
  t.sort(Au);
  for (const a of t)
    i += `${Cu[a] || a}(${e[a]}) `;
  return n && !e.z && (i += "translateZ(0)"), i = i.trim(), s ? i = s(e, o ? "" : i) : r && o && (i = "none"), i;
}
function Pa(e) {
  return e.startsWith("--");
}
const Ru = (e, t) => t && typeof e == "number" ? t.transform(e) : e, pn = (e, t, n) => Math.min(Math.max(n, e), t), en = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, Ln = {
  ...en,
  transform: (e) => pn(0, 1, e)
}, er = {
  ...en,
  default: 1
}, Dn = (e) => Math.round(e * 1e5) / 1e5, jn = /(-)?([\d]*\.?[\d])+/g, bo = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, ku = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function qn(e) {
  return typeof e == "string";
}
const Kn = (e) => ({
  test: (t) => qn(t) && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), Lt = Kn("deg"), it = Kn("%"), F = Kn("px"), Ou = Kn("vh"), _u = Kn("vw"), Ii = {
  ...it,
  parse: (e) => it.parse(e) / 100,
  transform: (e) => it.transform(e * 100)
}, $i = {
  ...en,
  transform: Math.round
}, Ra = {
  // Border props
  borderWidth: F,
  borderTopWidth: F,
  borderRightWidth: F,
  borderBottomWidth: F,
  borderLeftWidth: F,
  borderRadius: F,
  radius: F,
  borderTopLeftRadius: F,
  borderTopRightRadius: F,
  borderBottomRightRadius: F,
  borderBottomLeftRadius: F,
  // Positioning props
  width: F,
  maxWidth: F,
  height: F,
  maxHeight: F,
  size: F,
  top: F,
  right: F,
  bottom: F,
  left: F,
  // Spacing props
  padding: F,
  paddingTop: F,
  paddingRight: F,
  paddingBottom: F,
  paddingLeft: F,
  margin: F,
  marginTop: F,
  marginRight: F,
  marginBottom: F,
  marginLeft: F,
  // Transform props
  rotate: Lt,
  rotateX: Lt,
  rotateY: Lt,
  rotateZ: Lt,
  scale: er,
  scaleX: er,
  scaleY: er,
  scaleZ: er,
  skew: Lt,
  skewX: Lt,
  skewY: Lt,
  distance: F,
  translateX: F,
  translateY: F,
  translateZ: F,
  x: F,
  y: F,
  z: F,
  perspective: F,
  transformPerspective: F,
  opacity: Ln,
  originX: Ii,
  originY: Ii,
  originZ: F,
  // Misc
  zIndex: $i,
  // SVG
  fillOpacity: Ln,
  strokeOpacity: Ln,
  numOctaves: $i
};
function Jo(e, t, n, r) {
  const { style: o, vars: s, transform: i, transformKeys: a, transformOrigin: l } = e;
  a.length = 0;
  let c = !1, u = !1, d = !0;
  for (const f in t) {
    const h = t[f];
    if (Pa(f)) {
      s[f] = h;
      continue;
    }
    const m = Ra[f], g = Ru(h, m);
    if (Qt.has(f)) {
      if (c = !0, i[f] = g, a.push(f), !d)
        continue;
      h !== (m.default || 0) && (d = !1);
    } else
      f.startsWith("origin") ? (u = !0, l[f] = g) : o[f] = g;
  }
  if (t.transform || (c || r ? o.transform = Pu(e, n, d, r) : o.transform && (o.transform = "none")), u) {
    const { originX: f = "50%", originY: h = "50%", originZ: m = 0 } = l;
    o.transformOrigin = `${f} ${h} ${m}`;
  }
}
const Zo = () => ({
  style: {},
  transform: {},
  transformKeys: [],
  transformOrigin: {},
  vars: {}
});
function ka(e, t, n) {
  for (const r in t)
    !at(t[r]) && !Aa(r, n) && (e[r] = t[r]);
}
function Lu({ transformTemplate: e }, t, n) {
  return ze(() => {
    const r = Zo();
    return Jo(r, t, { enableHardwareAcceleration: !n }, e), Object.assign({}, r.vars, r.style);
  }, [t]);
}
function Du(e, t, n) {
  const r = e.style || {}, o = {};
  return ka(o, r, e), Object.assign(o, Lu(e, t, n)), e.transformValues ? e.transformValues(o) : o;
}
function Vu(e, t, n) {
  const r = {}, o = Du(e, t, n);
  return e.drag && e.dragListener !== !1 && (r.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), r.style = o, r;
}
const Fu = [
  "animate",
  "exit",
  "variants",
  "whileHover",
  "whileTap",
  "whileFocus",
  "whileDrag",
  "whileInView"
], Mu = ["whileTap", "onTap", "onTapStart", "onTapCancel"], Bu = ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"], Iu = [
  "whileInView",
  "onViewportEnter",
  "onViewportLeave",
  "viewport"
], $u = /* @__PURE__ */ new Set([
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "layout",
  "layoutId",
  "layoutDependency",
  "onLayoutAnimationStart",
  "onLayoutAnimationComplete",
  "onLayoutMeasure",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "drag",
  "dragControls",
  "dragListener",
  "dragConstraints",
  "dragDirectionLock",
  "dragSnapToOrigin",
  "_dragX",
  "_dragY",
  "dragElastic",
  "dragMomentum",
  "dragPropagation",
  "dragTransition",
  "onHoverStart",
  "onHoverEnd",
  "layoutScroll",
  ...Iu,
  ...Mu,
  ...Fu,
  ...Bu
]);
function pr(e) {
  return $u.has(e);
}
let Oa = (e) => !pr(e);
function ju(e) {
  e && (Oa = (t) => t.startsWith("on") ? !pr(t) : e(t));
}
try {
  ju(require("@emotion/is-prop-valid").default);
} catch {
}
function Nu(e, t, n) {
  const r = {};
  for (const o in e)
    (Oa(o) || n === !0 && pr(o) || !t && !pr(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (r[o] = e[o]);
  return r;
}
function ji(e, t, n) {
  return typeof e == "string" ? e : F.transform(t + n * e);
}
function Uu(e, t, n) {
  const r = ji(t, e.x, e.width), o = ji(n, e.y, e.height);
  return `${r} ${o}`;
}
const zu = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, Wu = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function Hu(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const s = o ? zu : Wu;
  e[s.offset] = F.transform(-r);
  const i = F.transform(t), a = F.transform(n);
  e[s.array] = `${i} ${a}`;
}
function Qo(e, {
  attrX: t,
  attrY: n,
  originX: r,
  originY: o,
  pathLength: s,
  pathSpacing: i = 1,
  pathOffset: a = 0,
  // This is object creation, which we try to avoid per-frame.
  ...l
}, c, u, d) {
  if (Jo(e, l, c, d), u) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: f, style: h, dimensions: m } = e;
  f.transform && (m && (h.transform = f.transform), delete f.transform), m && (r !== void 0 || o !== void 0 || h.transform) && (h.transformOrigin = Uu(m, r !== void 0 ? r : 0.5, o !== void 0 ? o : 0.5)), t !== void 0 && (f.x = t), n !== void 0 && (f.y = n), s !== void 0 && Hu(f, s, i, a, !1);
}
const _a = () => ({
  ...Zo(),
  attrs: {}
}), ei = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function qu(e, t, n, r) {
  const o = ze(() => {
    const s = _a();
    return Qo(s, t, { enableHardwareAcceleration: !1 }, ei(r), e.transformTemplate), {
      ...s.attrs,
      style: { ...s.style }
    };
  }, [t]);
  if (e.style) {
    const s = {};
    ka(s, e.style, e), o.style = { ...s, ...o.style };
  }
  return o;
}
function Ku(e = !1) {
  return (n, r, o, s, { latestValues: i }, a) => {
    const c = (Xo(n) ? qu : Vu)(r, i, a, n), d = {
      ...Nu(r, typeof n == "string", e),
      ...c,
      ref: s
    };
    return o && (d["data-projection-id"] = o), va(n, d);
  };
}
const ti = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
function La(e, { style: t, vars: n }, r, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(r));
  for (const s in n)
    e.style.setProperty(s, n[s]);
}
const Da = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function Va(e, t, n, r) {
  La(e, t, void 0, r);
  for (const o in t.attrs)
    e.setAttribute(Da.has(o) ? o : ti(o), t.attrs[o]);
}
function ni(e) {
  const { style: t } = e, n = {};
  for (const r in t)
    (at(t[r]) || Aa(r, e)) && (n[r] = t[r]);
  return n;
}
function Fa(e) {
  const t = ni(e);
  for (const n in e)
    if (at(e[n])) {
      const r = n === "x" || n === "y" ? "attr" + n.toUpperCase() : n;
      t[r] = e[n];
    }
  return t;
}
function ri(e, t, n, r = {}, o = {}) {
  return typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)), typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)), t;
}
const mr = (e) => Array.isArray(e), Yu = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), Gu = (e) => mr(e) ? e[e.length - 1] || 0 : e;
function ar(e) {
  const t = at(e) ? e.get() : e;
  return Yu(t) ? t.toValue() : t;
}
function Xu({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n }, r, o, s) {
  const i = {
    latestValues: Ju(r, o, s, e),
    renderState: t()
  };
  return n && (i.mount = (a) => n(r, a, i)), i;
}
const Ma = (e) => (t, n) => {
  const r = be(Or), o = be(Hn), s = () => Xu(e, t, r, o);
  return n ? s() : Dr(s);
};
function Ju(e, t, n, r) {
  const o = {}, s = r(e);
  for (const f in s)
    o[f] = ar(s[f]);
  let { initial: i, animate: a } = e;
  const l = Lr(e), c = Sa(e);
  t && c && !l && e.inherit !== !1 && (i === void 0 && (i = t.initial), a === void 0 && (a = t.animate));
  let u = n ? n.initial === !1 : !1;
  u = u || i === !1;
  const d = u ? a : i;
  return d && typeof d != "boolean" && !_r(d) && (Array.isArray(d) ? d : [d]).forEach((h) => {
    const m = ri(e, h);
    if (!m)
      return;
    const { transitionEnd: g, transition: b, ...y } = m;
    for (const w in y) {
      let v = y[w];
      if (Array.isArray(v)) {
        const T = u ? v.length - 1 : 0;
        v = v[T];
      }
      v !== null && (o[w] = v);
    }
    for (const w in g)
      o[w] = g[w];
  }), o;
}
const Zu = {
  useVisualState: Ma({
    scrapeMotionValuesFromProps: Fa,
    createRenderState: _a,
    onMount: (e, t, { renderState: n, latestValues: r }) => {
      try {
        n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect();
      } catch {
        n.dimensions = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
      }
      Qo(n, r, { enableHardwareAcceleration: !1 }, ei(t.tagName), e.transformTemplate), Va(t, n);
    }
  })
}, Qu = {
  useVisualState: Ma({
    scrapeMotionValuesFromProps: ni,
    createRenderState: Zo
  })
};
function ed(e, { forwardMotionProps: t = !1 }, n, r, o) {
  return {
    ...Xo(e) ? Zu : Qu,
    preloadedFeatures: n,
    useRender: Ku(t),
    createVisualElement: r,
    projectionNodeConstructor: o,
    Component: e
  };
}
var se;
(function(e) {
  e.Animate = "animate", e.Hover = "whileHover", e.Tap = "whileTap", e.Drag = "whileDrag", e.Focus = "whileFocus", e.InView = "whileInView", e.Exit = "exit";
})(se || (se = {}));
function Vr(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function wo(e, t, n, r) {
  $(() => {
    const o = e.current;
    if (n && o)
      return Vr(o, t, n, r);
  }, [e, t, n, r]);
}
function td({ whileFocus: e, visualElement: t }) {
  const { animationState: n } = t, r = () => {
    n && n.setActive(se.Focus, !0);
  }, o = () => {
    n && n.setActive(se.Focus, !1);
  };
  wo(t, "focus", e ? r : void 0), wo(t, "blur", e ? o : void 0);
}
function Ba(e) {
  return typeof PointerEvent < "u" && e instanceof PointerEvent ? e.pointerType === "mouse" : e instanceof MouseEvent;
}
function Ia(e) {
  return !!e.touches;
}
function nd(e) {
  return (t) => {
    const n = t instanceof MouseEvent;
    (!n || n && t.button === 0) && e(t);
  };
}
const rd = { pageX: 0, pageY: 0 };
function od(e, t = "page") {
  const r = e.touches[0] || e.changedTouches[0] || rd;
  return {
    x: r[t + "X"],
    y: r[t + "Y"]
  };
}
function id(e, t = "page") {
  return {
    x: e[t + "X"],
    y: e[t + "Y"]
  };
}
function oi(e, t = "page") {
  return {
    point: Ia(e) ? od(e, t) : id(e, t)
  };
}
const $a = (e, t = !1) => {
  const n = (r) => e(r, oi(r));
  return t ? nd(n) : n;
}, sd = () => Zt && window.onpointerdown === null, ad = () => Zt && window.ontouchstart === null, ld = () => Zt && window.onmousedown === null, cd = {
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointercancel: "mousecancel",
  pointerover: "mouseover",
  pointerout: "mouseout",
  pointerenter: "mouseenter",
  pointerleave: "mouseleave"
}, ud = {
  pointerdown: "touchstart",
  pointermove: "touchmove",
  pointerup: "touchend",
  pointercancel: "touchcancel"
};
function ja(e) {
  return sd() ? e : ad() ? ud[e] : ld() ? cd[e] : e;
}
function fn(e, t, n, r) {
  return Vr(e, ja(t), $a(n, t === "pointerdown"), r);
}
function gr(e, t, n, r) {
  return wo(e, ja(t), n && $a(n, t === "pointerdown"), r);
}
function Na(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? (t = e, n) : !1;
  };
}
const Ni = Na("dragHorizontal"), Ui = Na("dragVertical");
function Ua(e) {
  let t = !1;
  if (e === "y")
    t = Ui();
  else if (e === "x")
    t = Ni();
  else {
    const n = Ni(), r = Ui();
    n && r ? t = () => {
      n(), r();
    } : (n && n(), r && r());
  }
  return t;
}
function za() {
  const e = Ua(!0);
  return e ? (e(), !1) : !0;
}
function zi(e, t, n) {
  return (r, o) => {
    !Ba(r) || za() || (e.animationState && e.animationState.setActive(se.Hover, t), n && n(r, o));
  };
}
function dd({ onHoverStart: e, onHoverEnd: t, whileHover: n, visualElement: r }) {
  gr(r, "pointerenter", e || n ? zi(r, !0, e) : void 0, { passive: !e }), gr(r, "pointerleave", t || n ? zi(r, !1, t) : void 0, { passive: !t });
}
const Wa = (e, t) => t ? e === t ? !0 : Wa(e, t.parentElement) : !1;
function ii(e) {
  return $(() => () => e(), []);
}
const fd = (e, t) => (n) => t(e(n)), Fr = (...e) => e.reduce(fd);
function hd({ onTap: e, onTapStart: t, onTapCancel: n, whileTap: r, visualElement: o }) {
  const s = e || t || n || r, i = re(!1), a = re(null), l = {
    passive: !(t || e || n || h)
  };
  function c() {
    a.current && a.current(), a.current = null;
  }
  function u() {
    return c(), i.current = !1, o.animationState && o.animationState.setActive(se.Tap, !1), !za();
  }
  function d(m, g) {
    u() && (Wa(o.current, m.target) ? e && e(m, g) : n && n(m, g));
  }
  function f(m, g) {
    u() && n && n(m, g);
  }
  function h(m, g) {
    c(), !i.current && (i.current = !0, a.current = Fr(fn(window, "pointerup", d, l), fn(window, "pointercancel", f, l)), o.animationState && o.animationState.setActive(se.Tap, !0), t && t(m, g));
  }
  gr(o, "pointerdown", s ? h : void 0, l), ii(c);
}
const Wi = "production", si = typeof process > "u" || process.env === void 0 ? Wi : process.env.NODE_ENV || Wi, Hi = /* @__PURE__ */ new Set();
function ai(e, t, n) {
  e || Hi.has(t) || (console.warn(t), n && console.warn(n), Hi.add(t));
}
const xo = /* @__PURE__ */ new WeakMap(), Jr = /* @__PURE__ */ new WeakMap(), pd = (e) => {
  const t = xo.get(e.target);
  t && t(e);
}, md = (e) => {
  e.forEach(pd);
};
function gd({ root: e, ...t }) {
  const n = e || document;
  Jr.has(n) || Jr.set(n, {});
  const r = Jr.get(n), o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(md, { root: e, ...t })), r[o];
}
function yd(e, t, n) {
  const r = gd(t);
  return xo.set(e, n), r.observe(e), () => {
    xo.delete(e), r.unobserve(e);
  };
}
function vd({ visualElement: e, whileInView: t, onViewportEnter: n, onViewportLeave: r, viewport: o = {} }) {
  const s = re({
    hasEnteredView: !1,
    isInView: !1
  });
  let i = !!(t || n || r);
  o.once && s.current.hasEnteredView && (i = !1), (typeof IntersectionObserver > "u" ? xd : wd)(i, s.current, e, o);
}
const bd = {
  some: 0,
  all: 1
};
function wd(e, t, n, { root: r, margin: o, amount: s = "some", once: i }) {
  $(() => {
    if (!e || !n.current)
      return;
    const a = {
      root: r == null ? void 0 : r.current,
      rootMargin: o,
      threshold: typeof s == "number" ? s : bd[s]
    }, l = (c) => {
      const { isIntersecting: u } = c;
      if (t.isInView === u || (t.isInView = u, i && !u && t.hasEnteredView))
        return;
      u && (t.hasEnteredView = !0), n.animationState && n.animationState.setActive(se.InView, u);
      const d = n.getProps(), f = u ? d.onViewportEnter : d.onViewportLeave;
      f && f(c);
    };
    return yd(n.current, a, l);
  }, [e, r, o, s]);
}
function xd(e, t, n, { fallback: r = !0 }) {
  $(() => {
    !e || !r || (si !== "production" && ai(!1, "IntersectionObserver not available on this device. whileInView animations will trigger on mount."), requestAnimationFrame(() => {
      t.hasEnteredView = !0;
      const { onViewportEnter: o } = n.getProps();
      o && o(null), n.animationState && n.animationState.setActive(se.InView, !0);
    }));
  }, [e]);
}
const Vt = (e) => (t) => (e(t), null), Ed = {
  inView: Vt(vd),
  tap: Vt(hd),
  focus: Vt(td),
  hover: Vt(dd)
};
function Ha() {
  const e = be(Hn);
  if (e === null)
    return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e, o = Rr();
  return $(() => r(o), []), !t && n ? [!1, () => n && n(o)] : [!0];
}
function qa(e, t) {
  if (!Array.isArray(t))
    return !1;
  const n = t.length;
  if (n !== e.length)
    return !1;
  for (let r = 0; r < n; r++)
    if (t[r] !== e[r])
      return !1;
  return !0;
}
const Td = (e) => /^\-?\d*\.?\d+$/.test(e), Sd = (e) => /^0[^.\s]+$/.test(e), vt = {
  delta: 0,
  timestamp: 0
}, Ka = 1 / 60 * 1e3, Cd = typeof performance < "u" ? () => performance.now() : () => Date.now(), Ya = typeof window < "u" ? (e) => window.requestAnimationFrame(e) : (e) => setTimeout(() => e(Cd()), Ka);
function Ad(e) {
  let t = [], n = [], r = 0, o = !1, s = !1;
  const i = /* @__PURE__ */ new WeakSet(), a = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (l, c = !1, u = !1) => {
      const d = u && o, f = d ? t : n;
      return c && i.add(l), f.indexOf(l) === -1 && (f.push(l), d && o && (r = t.length)), l;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (l) => {
      const c = n.indexOf(l);
      c !== -1 && n.splice(c, 1), i.delete(l);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (l) => {
      if (o) {
        s = !0;
        return;
      }
      if (o = !0, [t, n] = [n, t], n.length = 0, r = t.length, r)
        for (let c = 0; c < r; c++) {
          const u = t[c];
          u(l), i.has(u) && (a.schedule(u), e());
        }
      o = !1, s && (s = !1, a.process(l));
    }
  };
  return a;
}
const Pd = 40;
let Eo = !0, Nn = !1, To = !1;
const Yn = [
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
], Mr = Yn.reduce((e, t) => (e[t] = Ad(() => Nn = !0), e), {}), Oe = Yn.reduce((e, t) => {
  const n = Mr[t];
  return e[t] = (r, o = !1, s = !1) => (Nn || kd(), n.schedule(r, o, s)), e;
}, {}), Bt = Yn.reduce((e, t) => (e[t] = Mr[t].cancel, e), {}), Zr = Yn.reduce((e, t) => (e[t] = () => Mr[t].process(vt), e), {}), Rd = (e) => Mr[e].process(vt), Ga = (e) => {
  Nn = !1, vt.delta = Eo ? Ka : Math.max(Math.min(e - vt.timestamp, Pd), 1), vt.timestamp = e, To = !0, Yn.forEach(Rd), To = !1, Nn && (Eo = !1, Ya(Ga));
}, kd = () => {
  Nn = !0, Eo = !0, To || Ya(Ga);
};
function li(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function ci(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class ui {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return li(this.subscriptions, t), () => ci(this.subscriptions, t);
  }
  notify(t, n, r) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1)
        this.subscriptions[0](t, n, r);
      else
        for (let s = 0; s < o; s++) {
          const i = this.subscriptions[s];
          i && i(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function di(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Od = (e) => !isNaN(parseFloat(e));
class _d {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
  constructor(t, n = {}) {
    this.version = "7.10.3", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (r, o = !0) => {
      this.prev = this.current, this.current = r;
      const { delta: s, timestamp: i } = vt;
      this.lastUpdated !== i && (this.timeDelta = s, this.lastUpdated = i, Oe.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), o && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.scheduleVelocityCheck = () => Oe.postRender(this.velocityCheck), this.velocityCheck = ({ timestamp: r }) => {
      r !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()));
    }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = Od(this.current), this.owner = n.owner;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @privateRemarks
   *
   * We could look into a `useOnChange` hook if the above lifecycle management proves confusing.
   *
   * ```jsx
   * useOnChange(x, () => {})
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new ui()), this.events[t].add(n);
  }
  clearListeners() {
    for (const t in this.events)
      this.events[t].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   *
   * @internal
   */
  attach(t) {
    this.passiveEffect = t;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(t, n = !0) {
    !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n), this.prev = t, this.timeDelta = r;
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    return this.canTrackVelocity ? (
      // These casts could be avoided if parseFloat would be typed better
      di(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
    ) : 0;
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   *
   * @internal
   */
  start(t) {
    return this.stop(), new Promise((n) => {
      this.hasAnimated = !0, this.stopAnimation = t(n), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.stopAnimation && (this.stopAnimation(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.stopAnimation;
  }
  clearAnimation() {
    this.stopAnimation = null;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.clearListeners(), this.stop();
  }
}
function mn(e, t) {
  return new _d(e, t);
}
const fi = (e, t) => (n) => !!(qn(n) && ku.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t)), Xa = (e, t, n) => (r) => {
  if (!qn(r))
    return r;
  const [o, s, i, a] = r.match(jn);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(s),
    [n]: parseFloat(i),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, Ld = (e) => pn(0, 255, e), Qr = {
  ...en,
  transform: (e) => Math.round(Ld(e))
}, Yt = {
  test: fi("rgb", "red"),
  parse: Xa("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + Qr.transform(e) + ", " + Qr.transform(t) + ", " + Qr.transform(n) + ", " + Dn(Ln.transform(r)) + ")"
};
function Dd(e) {
  let t = "", n = "", r = "", o = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), o = e.substring(4, 5), t += t, n += n, r += r, o += o), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const So = {
  test: fi("#"),
  parse: Dd,
  transform: Yt.transform
}, un = {
  test: fi("hsl", "hue"),
  parse: Xa("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + it.transform(Dn(t)) + ", " + it.transform(Dn(n)) + ", " + Dn(Ln.transform(r)) + ")"
}, Re = {
  test: (e) => Yt.test(e) || So.test(e) || un.test(e),
  parse: (e) => Yt.test(e) ? Yt.parse(e) : un.test(e) ? un.parse(e) : So.parse(e),
  transform: (e) => qn(e) ? e : e.hasOwnProperty("red") ? Yt.transform(e) : un.transform(e)
}, Ja = "${c}", Za = "${n}";
function Vd(e) {
  var t, n;
  return isNaN(e) && qn(e) && (((t = e.match(jn)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(bo)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
function yr(e) {
  typeof e == "number" && (e = `${e}`);
  const t = [];
  let n = 0, r = 0;
  const o = e.match(bo);
  o && (n = o.length, e = e.replace(bo, Ja), t.push(...o.map(Re.parse)));
  const s = e.match(jn);
  return s && (r = s.length, e = e.replace(jn, Za), t.push(...s.map(en.parse))), { values: t, numColors: n, numNumbers: r, tokenised: e };
}
function Qa(e) {
  return yr(e).values;
}
function el(e) {
  const { values: t, numColors: n, tokenised: r } = yr(e), o = t.length;
  return (s) => {
    let i = r;
    for (let a = 0; a < o; a++)
      i = i.replace(a < n ? Ja : Za, a < n ? Re.transform(s[a]) : Dn(s[a]));
    return i;
  };
}
const Fd = (e) => typeof e == "number" ? 0 : e;
function Md(e) {
  const t = Qa(e);
  return el(e)(t.map(Fd));
}
const It = { test: Vd, parse: Qa, createTransformer: el, getAnimatableNone: Md }, Bd = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function Id(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(jn) || [];
  if (!r)
    return e;
  const o = n.replace(r, "");
  let s = Bd.has(t) ? 1 : 0;
  return r !== n && (s *= 100), t + "(" + s + o + ")";
}
const $d = /([a-z-]*)\(.*?\)/g, Co = {
  ...It,
  getAnimatableNone: (e) => {
    const t = e.match($d);
    return t ? t.map(Id).join(" ") : e;
  }
}, jd = {
  ...Ra,
  // Color props
  color: Re,
  backgroundColor: Re,
  outlineColor: Re,
  fill: Re,
  stroke: Re,
  // Border props
  borderColor: Re,
  borderTopColor: Re,
  borderRightColor: Re,
  borderBottomColor: Re,
  borderLeftColor: Re,
  filter: Co,
  WebkitFilter: Co
}, hi = (e) => jd[e];
function pi(e, t) {
  var n;
  let r = hi(e);
  return r !== Co && (r = It), (n = r.getAnimatableNone) === null || n === void 0 ? void 0 : n.call(r, t);
}
const tl = (e) => (t) => t.test(e), Nd = {
  test: (e) => e === "auto",
  parse: (e) => e
}, nl = [en, F, it, Lt, _u, Ou, Nd], An = (e) => nl.find(tl(e)), Ud = [...nl, Re, It], zd = (e) => Ud.find(tl(e));
function Wd(e) {
  const t = {};
  return e.values.forEach((n, r) => t[r] = n.get()), t;
}
function Hd(e) {
  const t = {};
  return e.values.forEach((n, r) => t[r] = n.getVelocity()), t;
}
function Br(e, t, n) {
  const r = e.getProps();
  return ri(r, t, n !== void 0 ? n : r.custom, Wd(e), Hd(e));
}
function qd(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, mn(n));
}
function Kd(e, t) {
  const n = Br(e, t);
  let { transitionEnd: r = {}, transition: o = {}, ...s } = n ? e.makeTargetAnimatable(n, !1) : {};
  s = { ...s, ...r };
  for (const i in s) {
    const a = Gu(s[i]);
    qd(e, i, a);
  }
}
function Yd(e, t, n) {
  var r, o;
  const s = Object.keys(t).filter((a) => !e.hasValue(a)), i = s.length;
  if (i)
    for (let a = 0; a < i; a++) {
      const l = s[a], c = t[l];
      let u = null;
      Array.isArray(c) && (u = c[0]), u === null && (u = (o = (r = n[l]) !== null && r !== void 0 ? r : e.readValue(l)) !== null && o !== void 0 ? o : t[l]), u != null && (typeof u == "string" && (Td(u) || Sd(u)) ? u = parseFloat(u) : !zd(u) && It.test(c) && (u = pi(l, c)), e.addValue(l, mn(u, { owner: e })), n[l] === void 0 && (n[l] = u), u !== null && e.setBaseTarget(l, u));
    }
}
function Gd(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function Xd(e, t, n) {
  var r;
  const o = {};
  for (const s in e) {
    const i = Gd(s, t);
    o[s] = i !== void 0 ? i : (r = n.getValue(s)) === null || r === void 0 ? void 0 : r.get();
  }
  return o;
}
function vr(e) {
  return !!(at(e) && e.add);
}
const Jd = (e, t) => `${e}: ${t}`;
function Zd(e, t) {
  const { MotionAppearAnimations: n } = window, r = Jd(e, Qt.has(t) ? "transform" : t), o = n && n.get(r);
  return o ? (Oe.render(() => {
    try {
      o.cancel(), n.delete(r);
    } catch {
    }
  }), o.currentTime || 0) : 0;
}
const Qd = "framerAppearId", ef = "data-" + ti(Qd);
var Ir = function() {
}, He = function() {
};
process.env.NODE_ENV !== "production" && (Ir = function(e, t) {
  !e && typeof console < "u" && console.warn(t);
}, He = function(e, t) {
  if (!e)
    throw new Error(t);
});
const lr = (e) => e * 1e3, tf = {
  current: !1
}, mi = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, gi = (e) => (t) => 1 - e(1 - t), yi = (e) => e * e, nf = gi(yi), vi = mi(yi), fe = (e, t, n) => -n * e + n * t + e;
function eo(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function rf({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let o = 0, s = 0, i = 0;
  if (!t)
    o = s = i = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - a;
    o = eo(l, a, e + 1 / 3), s = eo(l, a, e), i = eo(l, a, e - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(s * 255),
    blue: Math.round(i * 255),
    alpha: r
  };
}
const to = (e, t, n) => {
  const r = e * e;
  return Math.sqrt(Math.max(0, n * (t * t - r) + r));
}, of = [So, Yt, un], sf = (e) => of.find((t) => t.test(e));
function qi(e) {
  const t = sf(e);
  He(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`);
  let n = t.parse(e);
  return t === un && (n = rf(n)), n;
}
const rl = (e, t) => {
  const n = qi(e), r = qi(t), o = { ...n };
  return (s) => (o.red = to(n.red, r.red, s), o.green = to(n.green, r.green, s), o.blue = to(n.blue, r.blue, s), o.alpha = fe(n.alpha, r.alpha, s), Yt.transform(o));
};
function ol(e, t) {
  return typeof e == "number" ? (n) => fe(e, t, n) : Re.test(e) ? rl(e, t) : sl(e, t);
}
const il = (e, t) => {
  const n = [...e], r = n.length, o = e.map((s, i) => ol(s, t[i]));
  return (s) => {
    for (let i = 0; i < r; i++)
      n[i] = o[i](s);
    return n;
  };
}, af = (e, t) => {
  const n = { ...e, ...t }, r = {};
  for (const o in n)
    e[o] !== void 0 && t[o] !== void 0 && (r[o] = ol(e[o], t[o]));
  return (o) => {
    for (const s in r)
      n[s] = r[s](o);
    return n;
  };
}, sl = (e, t) => {
  const n = It.createTransformer(t), r = yr(e), o = yr(t);
  return r.numColors === o.numColors && r.numNumbers >= o.numNumbers ? Fr(il(r.values, o.values), n) : (Ir(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), (i) => `${i > 0 ? t : e}`);
}, br = (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
}, Ki = (e, t) => (n) => fe(e, t, n);
function lf(e) {
  return typeof e == "number" ? Ki : typeof e == "string" ? Re.test(e) ? rl : sl : Array.isArray(e) ? il : typeof e == "object" ? af : Ki;
}
function cf(e, t, n) {
  const r = [], o = n || lf(e[0]), s = e.length - 1;
  for (let i = 0; i < s; i++) {
    let a = o(e[i], e[i + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[i] : t;
      a = Fr(l, a);
    }
    r.push(a);
  }
  return r;
}
function al(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const s = e.length;
  He(s === t.length, "Both input and output ranges must be the same length"), He(!r || !Array.isArray(r) || r.length === s - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), e[0] > e[s - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const i = cf(t, r, o), a = i.length, l = (c) => {
    let u = 0;
    if (a > 1)
      for (; u < e.length - 2 && !(c < e[u + 1]); u++)
        ;
    const d = br(e[u], e[u + 1], c);
    return i[u](d);
  };
  return n ? (c) => l(pn(e[0], e[s - 1], c)) : l;
}
const bi = (e) => e, ll = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, uf = 1e-7, df = 12;
function ff(e, t, n, r, o) {
  let s, i, a = 0;
  do
    i = t + (n - t) / 2, s = ll(i, r, o) - e, s > 0 ? n = i : t = i;
  while (Math.abs(s) > uf && ++a < df);
  return i;
}
function cl(e, t, n, r) {
  if (e === t && n === r)
    return bi;
  const o = (s) => ff(s, 0, 1, e, n);
  return (s) => s === 0 || s === 1 ? s : ll(o(s), t, r);
}
const ul = (e) => 1 - Math.sin(Math.acos(e)), wi = gi(ul), hf = mi(wi), dl = cl(0.33, 1.53, 0.69, 0.99), xi = gi(dl), pf = mi(xi), mf = (e) => (e *= 2) < 1 ? 0.5 * xi(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), Yi = {
  linear: bi,
  easeIn: yi,
  easeInOut: vi,
  easeOut: nf,
  circIn: ul,
  circInOut: hf,
  circOut: wi,
  backIn: xi,
  backInOut: pf,
  backOut: dl,
  anticipate: mf
}, Gi = (e) => {
  if (Array.isArray(e)) {
    He(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [t, n, r, o] = e;
    return cl(t, n, r, o);
  } else if (typeof e == "string")
    return He(Yi[e] !== void 0, `Invalid easing type '${e}'`), Yi[e];
  return e;
}, gf = (e) => Array.isArray(e) && typeof e[0] != "number";
function yf(e, t) {
  return e.map(() => t || vi).splice(0, e.length - 1);
}
function vf(e) {
  const t = e.length;
  return e.map((n, r) => r !== 0 ? r / (t - 1) : 0);
}
function bf(e, t) {
  return e.map((n) => n * t);
}
function wr({ keyframes: e, ease: t = vi, times: n, duration: r = 300 }) {
  e = [...e];
  const o = wr[0], s = gf(t) ? t.map(Gi) : Gi(t), i = { done: !1, value: o }, a = bf(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === wr.length ? n : vf(e),
    r
  );
  function l() {
    return al(a, e, {
      ease: Array.isArray(s) ? s : yf(e, s)
    });
  }
  let c = l();
  return {
    next: (u) => (i.value = c(u), i.done = u >= r, i),
    flipTarget: () => {
      e.reverse(), c = l();
    }
  };
}
const no = 1e-3, wf = 0.01, Xi = 10, xf = 0.05, Ef = 1;
function Tf({ duration: e = 800, bounce: t = 0.25, velocity: n = 0, mass: r = 1 }) {
  let o, s;
  Ir(e <= Xi * 1e3, "Spring duration must be 10 seconds or less");
  let i = 1 - t;
  i = pn(xf, Ef, i), e = pn(wf, Xi, e / 1e3), i < 1 ? (o = (c) => {
    const u = c * i, d = u * e, f = u - n, h = Ao(c, i), m = Math.exp(-d);
    return no - f / h * m;
  }, s = (c) => {
    const d = c * i * e, f = d * n + n, h = Math.pow(i, 2) * Math.pow(c, 2) * e, m = Math.exp(-d), g = Ao(Math.pow(c, 2), i);
    return (-o(c) + no > 0 ? -1 : 1) * ((f - h) * m) / g;
  }) : (o = (c) => {
    const u = Math.exp(-c * e), d = (c - n) * e + 1;
    return -no + u * d;
  }, s = (c) => {
    const u = Math.exp(-c * e), d = (n - c) * (e * e);
    return u * d;
  });
  const a = 5 / e, l = Cf(o, s, a);
  if (e = e * 1e3, isNaN(l))
    return {
      stiffness: 100,
      damping: 10,
      duration: e
    };
  {
    const c = Math.pow(l, 2) * r;
    return {
      stiffness: c,
      damping: i * 2 * Math.sqrt(r * c),
      duration: e
    };
  }
}
const Sf = 12;
function Cf(e, t, n) {
  let r = n;
  for (let o = 1; o < Sf; o++)
    r = r - e(r) / t(r);
  return r;
}
function Ao(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const Af = ["duration", "bounce"], Pf = ["stiffness", "damping", "mass"];
function Ji(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function Rf(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!Ji(e, Pf) && Ji(e, Af)) {
    const n = Tf(e);
    t = {
      ...t,
      ...n,
      velocity: 0,
      mass: 1
    }, t.isResolvedFromDuration = !0;
  }
  return t;
}
const kf = 5;
function fl({ keyframes: e, restSpeed: t = 2, restDelta: n = 0.01, ...r }) {
  let o = e[0], s = e[e.length - 1];
  const i = { done: !1, value: o }, { stiffness: a, damping: l, mass: c, velocity: u, duration: d, isResolvedFromDuration: f } = Rf(r);
  let h = Of, m = u ? -(u / 1e3) : 0;
  const g = l / (2 * Math.sqrt(a * c));
  function b() {
    const y = s - o, w = Math.sqrt(a / c) / 1e3;
    if (n === void 0 && (n = Math.min(Math.abs(s - o) / 100, 0.4)), g < 1) {
      const v = Ao(w, g);
      h = (T) => {
        const P = Math.exp(-g * w * T);
        return s - P * ((m + g * w * y) / v * Math.sin(v * T) + y * Math.cos(v * T));
      };
    } else if (g === 1)
      h = (v) => s - Math.exp(-w * v) * (y + (m + w * y) * v);
    else {
      const v = w * Math.sqrt(g * g - 1);
      h = (T) => {
        const P = Math.exp(-g * w * T), O = Math.min(v * T, 300);
        return s - P * ((m + g * w * y) * Math.sinh(O) + v * y * Math.cosh(O)) / v;
      };
    }
  }
  return b(), {
    next: (y) => {
      const w = h(y);
      if (f)
        i.done = y >= d;
      else {
        let v = m;
        if (y !== 0)
          if (g < 1) {
            const O = Math.max(0, y - kf);
            v = di(w - h(O), y - O);
          } else
            v = 0;
        const T = Math.abs(v) <= t, P = Math.abs(s - w) <= n;
        i.done = T && P;
      }
      return i.value = i.done ? s : w, i;
    },
    flipTarget: () => {
      m = -m, [o, s] = [s, o], b();
    }
  };
}
fl.needsInterpolation = (e, t) => typeof e == "string" || typeof t == "string";
const Of = (e) => 0;
function _f({
  /**
   * The decay animation dynamically calculates an end of the animation
   * based on the initial keyframe, so we only need to define a single keyframe
   * as default.
   */
  keyframes: e = [0],
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 350,
  restDelta: o = 0.5,
  modifyTarget: s
}) {
  const i = e[0], a = { done: !1, value: i };
  let l = n * t;
  const c = i + l, u = s === void 0 ? c : s(c);
  return u !== c && (l = u - i), {
    next: (d) => {
      const f = -l * Math.exp(-d / r);
      return a.done = !(f > o || f < -o), a.value = a.done ? u : u + f, a;
    },
    flipTarget: () => {
    }
  };
}
const Lf = {
  decay: _f,
  keyframes: wr,
  tween: wr,
  spring: fl
};
function hl(e, t, n = 0) {
  return e - t - n;
}
function Df(e, t = 0, n = 0, r = !0) {
  return r ? hl(t + -e, t, n) : t - (e - t) + n;
}
function Vf(e, t, n, r) {
  return r ? e >= t + n : e <= -n;
}
const Ff = (e) => {
  const t = ({ delta: n }) => e(n);
  return {
    start: () => Oe.update(t, !0),
    stop: () => Bt.update(t)
  };
};
function xr({ duration: e, driver: t = Ff, elapsed: n = 0, repeat: r = 0, repeatType: o = "loop", repeatDelay: s = 0, keyframes: i, autoplay: a = !0, onPlay: l, onStop: c, onComplete: u, onRepeat: d, onUpdate: f, type: h = "keyframes", ...m }) {
  var g, b;
  let y, w = 0, v = e, T, P = !1, O = !0, M;
  const N = Lf[i.length > 2 ? "keyframes" : h], G = i[0], z = i[i.length - 1];
  !((b = (g = N).needsInterpolation) === null || b === void 0) && b.call(g, G, z) && (M = al([0, 100], [G, z], {
    clamp: !1
  }), i = [0, 100]);
  const te = N({
    ...m,
    duration: e,
    keyframes: i
  });
  function ce() {
    w++, o === "reverse" ? (O = w % 2 === 0, n = Df(n, v, s, O)) : (n = hl(n, v, s), o === "mirror" && te.flipTarget()), P = !1, d && d();
  }
  function oe() {
    y.stop(), u && u();
  }
  function B(W) {
    if (O || (W = -W), n += W, !P) {
      const Z = te.next(Math.max(0, n));
      T = Z.value, M && (T = M(T)), P = O ? Z.done : n <= 0;
    }
    f && f(T), P && (w === 0 && (v = v !== void 0 ? v : n), w < r ? Vf(n, v, s, O) && ce() : oe());
  }
  function I() {
    l && l(), y = t(B), y.start();
  }
  return a && I(), {
    stop: () => {
      c && c(), y.stop();
    },
    sample: (W) => te.next(Math.max(0, W))
  };
}
function Mf(e) {
  return !e || // Default easing
  Array.isArray(e) || // Bezier curve
  typeof e == "string" && pl[e];
}
const kn = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, pl = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: kn([0, 0.65, 0.55, 1]),
  circOut: kn([0.55, 0, 1, 0.45]),
  backIn: kn([0.31, 0.01, 0.66, -0.59]),
  backOut: kn([0.33, 1.53, 0.69, 0.99])
};
function Bf(e) {
  if (e)
    return Array.isArray(e) ? kn(e) : pl[e];
}
function If(e, t, n, { delay: r = 0, duration: o, repeat: s = 0, repeatType: i = "loop", ease: a, times: l } = {}) {
  return e.animate({ [t]: n, offset: l }, {
    delay: r,
    duration: o,
    easing: Bf(a),
    fill: "both",
    iterations: s + 1,
    direction: i === "reverse" ? "alternate" : "normal"
  });
}
const tr = 10;
function $f(e, t, { onUpdate: n, onComplete: r, ...o }) {
  let { keyframes: s, duration: i = 0.3, elapsed: a = 0, ease: l } = o;
  if (o.type === "spring" || !Mf(o.ease)) {
    const u = xr(o);
    let d = { done: !1, value: s[0] };
    const f = [];
    let h = 0;
    for (; !d.done; )
      d = u.sample(h), f.push(d.value), h += tr;
    s = f, i = h - tr, l = "linear";
  }
  const c = If(e.owner.current, t, s, {
    ...o,
    delay: -a,
    duration: i,
    /**
     * This function is currently not called if ease is provided
     * as a function so the cast is safe.
     *
     * However it would be possible for a future refinement to port
     * in easing pregeneration from Motion One for browsers that
     * support the upcoming `linear()` easing function.
     */
    ease: l
  });
  return c.onfinish = () => {
    e.set(s[s.length - 1]), r && r();
  }, () => {
    const { currentTime: u } = c;
    if (u) {
      const d = xr(o);
      e.setWithVelocity(d.sample(u - tr).value, d.sample(u).value, tr);
    }
    Oe.update(() => c.cancel());
  };
}
function ml(e, t) {
  const n = performance.now(), r = ({ timestamp: o }) => {
    const s = o - n;
    s >= t && (Bt.read(r), e(s - t));
  };
  return Oe.read(r, !0), () => Bt.read(r);
}
function jf({ keyframes: e, elapsed: t, onUpdate: n, onComplete: r }) {
  const o = () => (n && n(e[e.length - 1]), r && r(), () => {
  });
  return t ? ml(o, -t) : o();
}
function Nf({ keyframes: e, velocity: t = 0, min: n, max: r, power: o = 0.8, timeConstant: s = 750, bounceStiffness: i = 500, bounceDamping: a = 10, restDelta: l = 1, modifyTarget: c, driver: u, onUpdate: d, onComplete: f, onStop: h }) {
  const m = e[0];
  let g;
  function b(T) {
    return n !== void 0 && T < n || r !== void 0 && T > r;
  }
  function y(T) {
    return n === void 0 ? r : r === void 0 || Math.abs(n - T) < Math.abs(r - T) ? n : r;
  }
  function w(T) {
    g == null || g.stop(), g = xr({
      keyframes: [0, 1],
      velocity: 0,
      ...T,
      driver: u,
      onUpdate: (P) => {
        var O;
        d == null || d(P), (O = T.onUpdate) === null || O === void 0 || O.call(T, P);
      },
      onComplete: f,
      onStop: h
    });
  }
  function v(T) {
    w({
      type: "spring",
      stiffness: i,
      damping: a,
      restDelta: l,
      ...T
    });
  }
  if (b(m))
    v({
      velocity: t,
      keyframes: [m, y(m)]
    });
  else {
    let T = o * t + m;
    typeof c < "u" && (T = c(T));
    const P = y(T), O = P === n ? -1 : 1;
    let M, N;
    const G = (z) => {
      M = N, N = z, t = di(z - M, vt.delta), (O === 1 && z > P || O === -1 && z < P) && v({ keyframes: [z, P], velocity: t });
    };
    w({
      type: "decay",
      keyframes: [m, 0],
      velocity: t,
      timeConstant: s,
      power: o,
      restDelta: l,
      modifyTarget: c,
      onUpdate: b(T) ? G : void 0
    });
  }
  return {
    stop: () => g == null ? void 0 : g.stop()
  };
}
const Ht = () => ({
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}), nr = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), ro = () => ({
  type: "keyframes",
  ease: "linear",
  duration: 0.3
}), Uf = {
  type: "keyframes",
  duration: 0.8
}, Zi = {
  x: Ht,
  y: Ht,
  z: Ht,
  rotate: Ht,
  rotateX: Ht,
  rotateY: Ht,
  rotateZ: Ht,
  scaleX: nr,
  scaleY: nr,
  scale: nr,
  opacity: ro,
  backgroundColor: ro,
  color: ro,
  default: nr
}, zf = (e, { keyframes: t }) => t.length > 2 ? Uf : (Zi[e] || Zi.default)(t[1]), Po = (e, t) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
It.test(t) && // And it contains numbers and/or colors
!t.startsWith("url("));
function Wf({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: o, repeat: s, repeatType: i, repeatDelay: a, from: l, ...c }) {
  return !!Object.keys(c).length;
}
function Qi(e) {
  return e === 0 || typeof e == "string" && parseFloat(e) === 0 && e.indexOf(" ") === -1;
}
function es(e) {
  return typeof e == "number" ? 0 : pi("", e);
}
function gl(e, t) {
  return e[t] || e.default || e;
}
function Hf(e, t, n, r) {
  const o = Po(t, n);
  let s = r.from !== void 0 ? r.from : e.get();
  return s === "none" && o && typeof n == "string" ? s = pi(t, n) : Qi(s) && typeof n == "string" ? s = es(n) : !Array.isArray(n) && Qi(n) && typeof s == "string" && (n = es(s)), Array.isArray(n) ? (n[0] === null && (n[0] = s), n) : [s, n];
}
const ts = {
  waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate")
}, oo = {}, yl = {};
for (const e in ts)
  yl[e] = () => (oo[e] === void 0 && (oo[e] = ts[e]()), oo[e]);
const qf = /* @__PURE__ */ new Set(["opacity"]), Ei = (e, t, n, r = {}) => (o) => {
  const s = gl(r, e) || {}, i = s.delay || r.delay || 0;
  let { elapsed: a = 0 } = r;
  a = a - lr(i);
  const l = Hf(t, e, n, s), c = l[0], u = l[l.length - 1], d = Po(e, c), f = Po(e, u);
  Ir(d === f, `You are trying to animate ${e} from "${c}" to "${u}". ${c} is not an animatable value - to enable this animation set ${c} to a value animatable to ${u} via the \`style\` property.`);
  let h = {
    keyframes: l,
    velocity: t.getVelocity(),
    ...s,
    elapsed: a,
    onUpdate: (y) => {
      t.set(y), s.onUpdate && s.onUpdate(y);
    },
    onComplete: () => {
      o(), s.onComplete && s.onComplete();
    }
  };
  if (!d || !f || tf.current || s.type === !1)
    return jf(h);
  if (s.type === "inertia") {
    const y = Nf(h);
    return () => y.stop();
  }
  Wf(s) || (h = {
    ...h,
    ...zf(e, h)
  }), h.duration && (h.duration = lr(h.duration)), h.repeatDelay && (h.repeatDelay = lr(h.repeatDelay));
  const m = t.owner, g = m && m.current;
  if (yl.waapi() && qf.has(e) && !h.repeatDelay && h.repeatType !== "mirror" && h.damping !== 0 && m && g instanceof HTMLElement && !m.getProps().onUpdate)
    return $f(t, e, h);
  {
    const y = xr(h);
    return () => y.stop();
  }
};
function Kf(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((s) => Ro(e, s, n));
    r = Promise.all(o);
  } else if (typeof t == "string")
    r = Ro(e, t, n);
  else {
    const o = typeof t == "function" ? Br(e, t, n.custom) : t;
    r = vl(e, o, n);
  }
  return r.then(() => e.notify("AnimationComplete", t));
}
function Ro(e, t, n = {}) {
  var r;
  const o = Br(e, t, n.custom);
  let { transition: s = e.getDefaultTransition() || {} } = o || {};
  n.transitionOverride && (s = n.transitionOverride);
  const i = o ? () => vl(e, o, n) : () => Promise.resolve(), a = !((r = e.variantChildren) === null || r === void 0) && r.size ? (c = 0) => {
    const { delayChildren: u = 0, staggerChildren: d, staggerDirection: f } = s;
    return Yf(e, t, u + c, d, f, n);
  } : () => Promise.resolve(), { when: l } = s;
  if (l) {
    const [c, u] = l === "beforeChildren" ? [i, a] : [a, i];
    return c().then(u);
  } else
    return Promise.all([i(), a(n.delay)]);
}
function vl(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  var s;
  let { transition: i = e.getDefaultTransition(), transitionEnd: a, ...l } = e.makeTargetAnimatable(t);
  const c = e.getValue("willChange");
  r && (i = r);
  const u = [], d = o && ((s = e.animationState) === null || s === void 0 ? void 0 : s.getState()[o]);
  for (const f in l) {
    const h = e.getValue(f), m = l[f];
    if (!h || m === void 0 || d && Xf(d, f))
      continue;
    let g = { delay: n, elapsed: 0, ...i };
    if (e.shouldReduceMotion && Qt.has(f) && (g = {
      ...g,
      type: !1,
      delay: 0
    }), !h.hasAnimated) {
      const y = e.getProps()[ef];
      y && (g.elapsed = Zd(y, f));
    }
    let b = h.start(Ei(f, h, m, g));
    vr(c) && (c.add(f), b = b.then(() => c.remove(f))), u.push(b);
  }
  return Promise.all(u).then(() => {
    a && Kd(e, a);
  });
}
function Yf(e, t, n = 0, r = 0, o = 1, s) {
  const i = [], a = (e.variantChildren.size - 1) * r, l = o === 1 ? (c = 0) => c * r : (c = 0) => a - c * r;
  return Array.from(e.variantChildren).sort(Gf).forEach((c, u) => {
    i.push(Ro(c, t, {
      ...s,
      delay: n + l(u)
    }).then(() => c.notify("AnimationComplete", t)));
  }), Promise.all(i);
}
function Gf(e, t) {
  return e.sortNodePosition(t);
}
function Xf({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
const Ti = [
  se.Animate,
  se.InView,
  se.Focus,
  se.Hover,
  se.Tap,
  se.Drag,
  se.Exit
], Jf = [...Ti].reverse(), Zf = Ti.length;
function Qf(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => Kf(e, n, r)));
}
function eh(e) {
  let t = Qf(e);
  const n = nh();
  let r = !0;
  const o = (l, c) => {
    const u = Br(e, c);
    if (u) {
      const { transition: d, transitionEnd: f, ...h } = u;
      l = { ...l, ...h, ...f };
    }
    return l;
  };
  function s(l) {
    t = l(e);
  }
  function i(l, c) {
    const u = e.getProps(), d = e.getVariantContext(!0) || {}, f = [], h = /* @__PURE__ */ new Set();
    let m = {}, g = 1 / 0;
    for (let y = 0; y < Zf; y++) {
      const w = Jf[y], v = n[w], T = u[w] !== void 0 ? u[w] : d[w], P = In(T), O = w === c ? v.isActive : null;
      O === !1 && (g = y);
      let M = T === d[w] && T !== u[w] && P;
      if (M && r && e.manuallyAnimateOnMount && (M = !1), v.protectedKeys = { ...m }, // If it isn't active and hasn't *just* been set as inactive
      !v.isActive && O === null || // If we didn't and don't have any defined prop for this animation type
      !T && !v.prevProp || // Or if the prop doesn't define an animation
      _r(T) || typeof T == "boolean")
        continue;
      const N = th(v.prevProp, T);
      let G = N || // If we're making this variant active, we want to always make it active
      w === c && v.isActive && !M && P || // If we removed a higher-priority variant (i is in reverse order)
      y > g && P;
      const z = Array.isArray(T) ? T : [T];
      let te = z.reduce(o, {});
      O === !1 && (te = {});
      const { prevResolvedValues: ce = {} } = v, oe = {
        ...ce,
        ...te
      }, B = (I) => {
        G = !0, h.delete(I), v.needsAnimating[I] = !0;
      };
      for (const I in oe) {
        const W = te[I], Z = ce[I];
        m.hasOwnProperty(I) || (W !== Z ? mr(W) && mr(Z) ? !qa(W, Z) || N ? B(I) : v.protectedKeys[I] = !0 : W !== void 0 ? B(I) : h.add(I) : W !== void 0 && h.has(I) ? B(I) : v.protectedKeys[I] = !0);
      }
      v.prevProp = T, v.prevResolvedValues = te, v.isActive && (m = { ...m, ...te }), r && e.blockInitialAnimation && (G = !1), G && !M && f.push(...z.map((I) => ({
        animation: I,
        options: { type: w, ...l }
      })));
    }
    if (h.size) {
      const y = {};
      h.forEach((w) => {
        const v = e.getBaseTarget(w);
        v !== void 0 && (y[w] = v);
      }), f.push({ animation: y });
    }
    let b = !!f.length;
    return r && u.initial === !1 && !e.manuallyAnimateOnMount && (b = !1), r = !1, b ? t(f) : Promise.resolve();
  }
  function a(l, c, u) {
    var d;
    if (n[l].isActive === c)
      return Promise.resolve();
    (d = e.variantChildren) === null || d === void 0 || d.forEach((h) => {
      var m;
      return (m = h.animationState) === null || m === void 0 ? void 0 : m.setActive(l, c);
    }), n[l].isActive = c;
    const f = i(u, l);
    for (const h in n)
      n[h].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: i,
    setActive: a,
    setAnimateFunction: s,
    getState: () => n
  };
}
function th(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !qa(t, e) : !1;
}
function qt(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function nh() {
  return {
    [se.Animate]: qt(!0),
    [se.InView]: qt(),
    [se.Hover]: qt(),
    [se.Tap]: qt(),
    [se.Drag]: qt(),
    [se.Focus]: qt(),
    [se.Exit]: qt()
  };
}
const rh = {
  animation: Vt(({ visualElement: e, animate: t }) => {
    e.animationState || (e.animationState = eh(e)), _r(t) && $(() => t.subscribe(e), [t]);
  }),
  exit: Vt((e) => {
    const { custom: t, visualElement: n } = e, [r, o] = Ha(), s = be(Hn);
    $(() => {
      n.isPresent = r;
      const i = n.animationState && n.animationState.setActive(se.Exit, !r, {
        custom: s && s.custom || t
      });
      i && !r && i.then(o);
    }, [r]);
  })
}, ns = (e, t) => Math.abs(e - t);
function oh(e, t) {
  const n = ns(e.x, t.x), r = ns(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class bl {
  constructor(t, n, { transformPagePoint: r } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const c = so(this.lastMoveEventInfo, this.history), u = this.startEvent !== null, d = oh(c.offset, { x: 0, y: 0 }) >= 3;
      if (!u && !d)
        return;
      const { point: f } = c, { timestamp: h } = vt;
      this.history.push({ ...f, timestamp: h });
      const { onStart: m, onMove: g } = this.handlers;
      u || (m && m(this.lastMoveEvent, c), this.startEvent = this.lastMoveEvent), g && g(this.lastMoveEvent, c);
    }, this.handlePointerMove = (c, u) => {
      if (this.lastMoveEvent = c, this.lastMoveEventInfo = io(u, this.transformPagePoint), Ba(c) && c.buttons === 0) {
        this.handlePointerUp(c, u);
        return;
      }
      Oe.update(this.updatePoint, !0);
    }, this.handlePointerUp = (c, u) => {
      this.end();
      const { onEnd: d, onSessionEnd: f } = this.handlers, h = so(io(u, this.transformPagePoint), this.history);
      this.startEvent && d && d(c, h), f && f(c, h);
    }, Ia(t) && t.touches.length > 1)
      return;
    this.handlers = n, this.transformPagePoint = r;
    const o = oi(t), s = io(o, this.transformPagePoint), { point: i } = s, { timestamp: a } = vt;
    this.history = [{ ...i, timestamp: a }];
    const { onSessionStart: l } = n;
    l && l(t, so(s, this.history)), this.removeListeners = Fr(fn(window, "pointermove", this.handlePointerMove), fn(window, "pointerup", this.handlePointerUp), fn(window, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Bt.update(this.updatePoint);
  }
}
function io(e, t) {
  return t ? { point: t(e.point) } : e;
}
function rs(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function so({ point: e }, t) {
  return {
    point: e,
    delta: rs(e, wl(t)),
    offset: rs(e, ih(t)),
    velocity: sh(t, 0.1)
  };
}
function ih(e) {
  return e[0];
}
function wl(e) {
  return e[e.length - 1];
}
function sh(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const o = wl(e);
  for (; n >= 0 && (r = e[n], !(o.timestamp - r.timestamp > lr(t))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  const s = (o.timestamp - r.timestamp) / 1e3;
  if (s === 0)
    return { x: 0, y: 0 };
  const i = {
    x: (o.x - r.x) / s,
    y: (o.y - r.y) / s
  };
  return i.x === 1 / 0 && (i.x = 0), i.y === 1 / 0 && (i.y = 0), i;
}
function De(e) {
  return e.max - e.min;
}
function ko(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function os(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = fe(t.min, t.max, e.origin), e.scale = De(n) / De(t), (ko(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = fe(n.min, n.max, e.origin) - e.originPoint, (ko(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Vn(e, t, n, r) {
  os(e.x, t.x, n.x, r == null ? void 0 : r.originX), os(e.y, t.y, n.y, r == null ? void 0 : r.originY);
}
function is(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + De(t);
}
function ah(e, t, n) {
  is(e.x, t.x, n.x), is(e.y, t.y, n.y);
}
function ss(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + De(t);
}
function Fn(e, t, n) {
  ss(e.x, t.x, n.x), ss(e.y, t.y, n.y);
}
function lh(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? fe(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? fe(n, e, r.max) : Math.min(e, n)), e;
}
function as(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function ch(e, { top: t, left: n, bottom: r, right: o }) {
  return {
    x: as(e.x, n, o),
    y: as(e.y, t, r)
  };
}
function ls(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function uh(e, t) {
  return {
    x: ls(e.x, t.x),
    y: ls(e.y, t.y)
  };
}
function dh(e, t) {
  let n = 0.5;
  const r = De(e), o = De(t);
  return o > r ? n = br(t.min, t.max - r, e.min) : r > o && (n = br(e.min, e.max - o, t.min)), pn(0, 1, n);
}
function fh(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const Oo = 0.35;
function hh(e = Oo) {
  return e === !1 ? e = 0 : e === !0 && (e = Oo), {
    x: cs(e, "left", "right"),
    y: cs(e, "top", "bottom")
  };
}
function cs(e, t, n) {
  return {
    min: us(e, t),
    max: us(e, n)
  };
}
function us(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const ds = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Mn = () => ({
  x: ds(),
  y: ds()
}), fs = () => ({ min: 0, max: 0 }), ve = () => ({
  x: fs(),
  y: fs()
});
function rt(e) {
  return [e("x"), e("y")];
}
function xl({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function ph({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function mh(e, t) {
  if (!t)
    return e;
  const n = t({ x: e.left, y: e.top }), r = t({ x: e.right, y: e.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: r.y,
    right: r.x
  };
}
function ao(e) {
  return e === void 0 || e === 1;
}
function _o({ scale: e, scaleX: t, scaleY: n }) {
  return !ao(e) || !ao(t) || !ao(n);
}
function Kt(e) {
  return _o(e) || El(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function El(e) {
  return hs(e.x) || hs(e.y);
}
function hs(e) {
  return e && e !== "0%";
}
function Er(e, t, n) {
  const r = e - n, o = t * r;
  return n + o;
}
function ps(e, t, n, r, o) {
  return o !== void 0 && (e = Er(e, o, r)), Er(e, n, r) + t;
}
function Lo(e, t = 0, n = 1, r, o) {
  e.min = ps(e.min, t, n, r, o), e.max = ps(e.max, t, n, r, o);
}
function Tl(e, { x: t, y: n }) {
  Lo(e.x, t.translate, t.scale, t.originPoint), Lo(e.y, n.translate, n.scale, n.originPoint);
}
function gh(e, t, n, r = !1) {
  var o, s;
  const i = n.length;
  if (!i)
    return;
  t.x = t.y = 1;
  let a, l;
  for (let c = 0; c < i; c++)
    a = n[c], l = a.projectionDelta, ((s = (o = a.instance) === null || o === void 0 ? void 0 : o.style) === null || s === void 0 ? void 0 : s.display) !== "contents" && (r && a.options.layoutScroll && a.scroll && a !== a.root && dn(e, {
      x: -a.scroll.offset.x,
      y: -a.scroll.offset.y
    }), l && (t.x *= l.x.scale, t.y *= l.y.scale, Tl(e, l)), r && Kt(a.latestValues) && dn(e, a.latestValues));
  t.x = ms(t.x), t.y = ms(t.y);
}
function ms(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1;
}
function Dt(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function gs(e, t, [n, r, o]) {
  const s = t[o] !== void 0 ? t[o] : 0.5, i = fe(e.min, e.max, s);
  Lo(e, t[n], t[r], i, t.scale);
}
const yh = ["x", "scaleX", "originX"], vh = ["y", "scaleY", "originY"];
function dn(e, t) {
  gs(e.x, t, yh), gs(e.y, t, vh);
}
function Sl(e, t) {
  return xl(mh(e.getBoundingClientRect(), t));
}
function bh(e, t, n) {
  const r = Sl(e, n), { scroll: o } = t;
  return o && (Dt(r.x, o.offset.x), Dt(r.y, o.offset.y)), r;
}
const wh = /* @__PURE__ */ new WeakMap();
class xh {
  constructor(t) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = ve(), this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    if (this.visualElement.isPresent === !1)
      return;
    const r = (a) => {
      this.stopAnimation(), n && this.snapToCursor(oi(a, "page").point);
    }, o = (a, l) => {
      var c;
      const { drag: u, dragPropagation: d, onDragStart: f } = this.getProps();
      u && !d && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = Ua(u), !this.openGlobalLock) || (this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), rt((h) => {
        var m, g;
        let b = this.getAxisMotionValue(h).get() || 0;
        if (it.test(b)) {
          const y = (g = (m = this.visualElement.projection) === null || m === void 0 ? void 0 : m.layout) === null || g === void 0 ? void 0 : g.layoutBox[h];
          y && (b = De(y) * (parseFloat(b) / 100));
        }
        this.originPoint[h] = b;
      }), f == null || f(a, l), (c = this.visualElement.animationState) === null || c === void 0 || c.setActive(se.Drag, !0));
    }, s = (a, l) => {
      const { dragPropagation: c, dragDirectionLock: u, onDirectionLock: d, onDrag: f } = this.getProps();
      if (!c && !this.openGlobalLock)
        return;
      const { offset: h } = l;
      if (u && this.currentDirection === null) {
        this.currentDirection = Eh(h), this.currentDirection !== null && (d == null || d(this.currentDirection));
        return;
      }
      this.updateAxis("x", l.point, h), this.updateAxis("y", l.point, h), this.visualElement.render(), f == null || f(a, l);
    }, i = (a, l) => this.stop(a, l);
    this.panSession = new bl(t, {
      onSessionStart: r,
      onStart: o,
      onMove: s,
      onSessionEnd: i
    }, { transformPagePoint: this.visualElement.getTransformPagePoint() });
  }
  stop(t, n) {
    const r = this.isDragging;
    if (this.cancel(), !r)
      return;
    const { velocity: o } = n;
    this.startAnimation(o);
    const { onDragEnd: s } = this.getProps();
    s == null || s(t, n);
  }
  cancel() {
    var t, n;
    this.isDragging = !1, this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1), (t = this.panSession) === null || t === void 0 || t.end(), this.panSession = void 0;
    const { dragPropagation: r } = this.getProps();
    !r && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), (n = this.visualElement.animationState) === null || n === void 0 || n.setActive(se.Drag, !1);
  }
  updateAxis(t, n, r) {
    const { drag: o } = this.getProps();
    if (!r || !rr(t, o, this.currentDirection))
      return;
    const s = this.getAxisMotionValue(t);
    let i = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (i = lh(i, this.constraints[t], this.elastic[t])), s.set(i);
  }
  resolveConstraints() {
    const { dragConstraints: t, dragElastic: n } = this.getProps(), { layout: r } = this.visualElement.projection || {}, o = this.constraints;
    t && cn(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = ch(r.layoutBox, t) : this.constraints = !1, this.elastic = hh(n), o !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && rt((s) => {
      this.getAxisMotionValue(s) && (this.constraints[s] = fh(r.layoutBox[s], this.constraints[s]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !cn(t))
      return !1;
    const r = t.current;
    He(r !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const s = bh(r, o.root, this.visualElement.getTransformPagePoint());
    let i = uh(o.layout.layoutBox, s);
    if (n) {
      const a = n(ph(i));
      this.hasMutatedConstraints = !!a, a && (i = xl(a));
    }
    return i;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: o, dragTransition: s, dragSnapToOrigin: i, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, c = rt((u) => {
      if (!rr(u, n, this.currentDirection))
        return;
      let d = (l == null ? void 0 : l[u]) || {};
      i && (d = { min: 0, max: 0 });
      const f = o ? 200 : 1e6, h = o ? 40 : 1e7, m = {
        type: "inertia",
        velocity: r ? t[u] : 0,
        bounceStiffness: f,
        bounceDamping: h,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...s,
        ...d
      };
      return this.startAxisValueAnimation(u, m);
    });
    return Promise.all(c).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(Ei(t, r, 0, n));
  }
  stopAnimation() {
    rt((t) => this.getAxisMotionValue(t).stop());
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(t) {
    var n;
    const r = "_drag" + t.toUpperCase(), o = this.visualElement.getProps()[r];
    return o || this.visualElement.getValue(t, ((n = this.visualElement.getProps().initial) === null || n === void 0 ? void 0 : n[t]) || 0);
  }
  snapToCursor(t) {
    rt((n) => {
      const { drag: r } = this.getProps();
      if (!rr(n, r, this.currentDirection))
        return;
      const { projection: o } = this.visualElement, s = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: i, max: a } = o.layout.layoutBox[n];
        s.set(t[n] - fe(i, a, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    var t;
    if (!this.visualElement.current)
      return;
    const { drag: n, dragConstraints: r } = this.getProps(), { projection: o } = this.visualElement;
    if (!cn(r) || !o || !this.constraints)
      return;
    this.stopAnimation();
    const s = { x: 0, y: 0 };
    rt((a) => {
      const l = this.getAxisMotionValue(a);
      if (l) {
        const c = l.get();
        s[a] = dh({ min: c, max: c }, this.constraints[a]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    this.visualElement.current.style.transform = i ? i({}, "") : "none", (t = o.root) === null || t === void 0 || t.updateScroll(), o.updateLayout(), this.resolveConstraints(), rt((a) => {
      if (!rr(a, n, null))
        return;
      const l = this.getAxisMotionValue(a), { min: c, max: u } = this.constraints[a];
      l.set(fe(c, u, s[a]));
    });
  }
  addListeners() {
    var t;
    if (!this.visualElement.current)
      return;
    wh.set(this.visualElement, this);
    const n = this.visualElement.current, r = fn(n, "pointerdown", (c) => {
      const { drag: u, dragListener: d = !0 } = this.getProps();
      u && d && this.start(c);
    }), o = () => {
      const { dragConstraints: c } = this.getProps();
      cn(c) && (this.constraints = this.resolveRefConstraints());
    }, { projection: s } = this.visualElement, i = s.addEventListener("measure", o);
    s && !s.layout && ((t = s.root) === null || t === void 0 || t.updateScroll(), s.updateLayout()), o();
    const a = Vr(window, "resize", () => this.scalePositionWithinConstraints()), l = s.addEventListener("didUpdate", ({ delta: c, hasLayoutChanged: u }) => {
      this.isDragging && u && (rt((d) => {
        const f = this.getAxisMotionValue(d);
        f && (this.originPoint[d] += c[d].translate, f.set(f.get() + c[d].translate));
      }), this.visualElement.render());
    });
    return () => {
      a(), r(), i(), l == null || l();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: o = !1, dragConstraints: s = !1, dragElastic: i = Oo, dragMomentum: a = !0 } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: o,
      dragConstraints: s,
      dragElastic: i,
      dragMomentum: a
    };
  }
}
function rr(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function Eh(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
function Th(e) {
  const { dragControls: t, visualElement: n } = e, r = Dr(() => new xh(n));
  $(() => t && t.subscribe(r), [r, t]), $(() => r.addListeners(), [r]);
}
function Sh({ onPan: e, onPanStart: t, onPanEnd: n, onPanSessionStart: r, visualElement: o }) {
  const s = e || t || n || r, i = re(null), { transformPagePoint: a } = be(Yo), l = {
    onSessionStart: r,
    onStart: t,
    onMove: e,
    onEnd: (u, d) => {
      i.current = null, n && n(u, d);
    }
  };
  $(() => {
    i.current !== null && i.current.updateHandlers(l);
  });
  function c(u) {
    i.current = new bl(u, l, {
      transformPagePoint: a
    });
  }
  gr(o, "pointerdown", s && c), ii(() => i.current && i.current.end());
}
const Ch = {
  pan: Vt(Sh),
  drag: Vt(Th)
};
function Do(e) {
  return typeof e == "string" && e.startsWith("var(--");
}
const Cl = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function Ah(e) {
  const t = Cl.exec(e);
  if (!t)
    return [,];
  const [, n, r] = t;
  return [n, r];
}
const Ph = 4;
function Vo(e, t, n = 1) {
  He(n <= Ph, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
  const [r, o] = Ah(e);
  if (!r)
    return;
  const s = window.getComputedStyle(t).getPropertyValue(r);
  return s ? s.trim() : Do(o) ? Vo(o, t, n + 1) : o;
}
function Rh(e, { ...t }, n) {
  const r = e.current;
  if (!(r instanceof Element))
    return { target: t, transitionEnd: n };
  n && (n = { ...n }), e.values.forEach((o) => {
    const s = o.get();
    if (!Do(s))
      return;
    const i = Vo(s, r);
    i && o.set(i);
  });
  for (const o in t) {
    const s = t[o];
    if (!Do(s))
      continue;
    const i = Vo(s, r);
    i && (t[o] = i, n && n[o] === void 0 && (n[o] = s));
  }
  return { target: t, transitionEnd: n };
}
const kh = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  "x",
  "y"
]), Al = (e) => kh.has(e), Oh = (e) => Object.keys(e).some(Al), Pl = (e, t) => {
  e.set(t, !1), e.set(t);
}, or = (e) => e === en || e === F;
var ys;
(function(e) {
  e.width = "width", e.height = "height", e.left = "left", e.right = "right", e.top = "top", e.bottom = "bottom";
})(ys || (ys = {}));
const vs = (e, t) => parseFloat(e.split(", ")[t]), bs = (e, t) => (n, { transform: r }) => {
  if (r === "none" || !r)
    return 0;
  const o = r.match(/^matrix3d\((.+)\)$/);
  if (o)
    return vs(o[1], t);
  {
    const s = r.match(/^matrix\((.+)\)$/);
    return s ? vs(s[1], e) : 0;
  }
}, _h = /* @__PURE__ */ new Set(["x", "y", "z"]), Lh = hr.filter((e) => !_h.has(e));
function Dh(e) {
  const t = [];
  return Lh.forEach((n) => {
    const r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), t.length && e.render(), t;
}
const ws = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: bs(4, 13),
  y: bs(5, 14)
}, Vh = (e, t, n) => {
  const r = t.measureViewportBox(), o = t.current, s = getComputedStyle(o), { display: i } = s, a = {};
  i === "none" && t.setStaticValue("display", e.display || "block"), n.forEach((c) => {
    a[c] = ws[c](r, s);
  }), t.render();
  const l = t.measureViewportBox();
  return n.forEach((c) => {
    const u = t.getValue(c);
    Pl(u, a[c]), e[c] = ws[c](l, s);
  }), e;
}, Fh = (e, t, n = {}, r = {}) => {
  t = { ...t }, r = { ...r };
  const o = Object.keys(t).filter(Al);
  let s = [], i = !1;
  const a = [];
  if (o.forEach((l) => {
    const c = e.getValue(l);
    if (!e.hasValue(l))
      return;
    let u = n[l], d = An(u);
    const f = t[l];
    let h;
    if (mr(f)) {
      const m = f.length, g = f[0] === null ? 1 : 0;
      u = f[g], d = An(u);
      for (let b = g; b < m; b++)
        h ? He(An(f[b]) === h, "All keyframes must be of the same type") : (h = An(f[b]), He(h === d || or(d) && or(h), "Keyframes must be of the same dimension as the current value"));
    } else
      h = An(f);
    if (d !== h)
      if (or(d) && or(h)) {
        const m = c.get();
        typeof m == "string" && c.set(parseFloat(m)), typeof f == "string" ? t[l] = parseFloat(f) : Array.isArray(f) && h === F && (t[l] = f.map(parseFloat));
      } else
        d != null && d.transform && (h != null && h.transform) && (u === 0 || f === 0) ? u === 0 ? c.set(h.transform(u)) : t[l] = d.transform(f) : (i || (s = Dh(e), i = !0), a.push(l), r[l] = r[l] !== void 0 ? r[l] : t[l], Pl(c, f));
  }), a.length) {
    const l = a.indexOf("height") >= 0 ? window.pageYOffset : null, c = Vh(t, e, a);
    return s.length && s.forEach(([u, d]) => {
      e.getValue(u).set(d);
    }), e.render(), Zt && l !== null && window.scrollTo({ top: l }), { target: c, transitionEnd: r };
  } else
    return { target: t, transitionEnd: r };
};
function Mh(e, t, n, r) {
  return Oh(t) ? Fh(e, t, n, r) : { target: t, transitionEnd: r };
}
const Bh = (e, t, n, r) => {
  const o = Rh(e, t, r);
  return t = o.target, r = o.transitionEnd, Mh(e, t, n, r);
}, Fo = { current: null }, Rl = { current: !1 };
function Ih() {
  if (Rl.current = !0, !!Zt)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => Fo.current = e.matches;
      e.addListener(t), t();
    } else
      Fo.current = !1;
}
function $h(e, t, n) {
  const { willChange: r } = t;
  for (const o in t) {
    const s = t[o], i = n[o];
    if (at(s))
      e.addValue(o, s), vr(r) && r.add(o), process.env.NODE_ENV === "development" && ai(s.version === "7.10.3", `Attempting to mix Framer Motion versions ${s.version} with 7.10.3 may not work as expected.`);
    else if (at(i))
      e.addValue(o, mn(s, { owner: e })), vr(r) && r.remove(o);
    else if (i !== s)
      if (e.hasValue(o)) {
        const a = e.getValue(o);
        !a.hasAnimated && a.set(s);
      } else {
        const a = e.getStaticValue(o);
        e.addValue(o, mn(a !== void 0 ? a : s));
      }
  }
  for (const o in n)
    t[o] === void 0 && e.removeValue(o);
  return t;
}
const kl = Object.keys($n), jh = kl.length, xs = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "Unmount",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class Nh {
  constructor({ parent: t, props: n, reducedMotionConfig: r, visualState: o }, s = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.isPresent = !0, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.scheduleRender = () => Oe.render(this.render, !1, !0);
    const { latestValues: i, renderState: a } = o;
    this.latestValues = i, this.baseTarget = { ...i }, this.initialValues = n.initial ? { ...i } : {}, this.renderState = a, this.parent = t, this.props = n, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = r, this.options = s, this.isControllingVariants = Lr(n), this.isVariantNode = Sa(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: l, ...c } = this.scrapeMotionValuesFromProps(n);
    for (const u in c) {
      const d = c[u];
      i[u] !== void 0 && at(d) && (d.set(i[u], !1), vr(l) && l.add(u));
    }
  }
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(t) {
    return {};
  }
  mount(t) {
    var n;
    this.current = t, this.projection && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = (n = this.parent) === null || n === void 0 ? void 0 : n.addVariantChild(this)), this.values.forEach((r, o) => this.bindToMotionValue(o, r)), Rl.current || Ih(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Fo.current, this.parent && this.parent.children.add(this), this.setProps(this.props);
  }
  unmount() {
    var t, n, r;
    (t = this.projection) === null || t === void 0 || t.unmount(), Bt.update(this.notifyUpdate), Bt.render(this.render), this.valueSubscriptions.forEach((o) => o()), (n = this.removeFromVariantTree) === null || n === void 0 || n.call(this), (r = this.parent) === null || r === void 0 || r.children.delete(this);
    for (const o in this.events)
      this.events[o].clear();
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = Qt.has(t), o = n.on("change", (i) => {
      this.latestValues[t] = i, this.props.onUpdate && Oe.update(this.notifyUpdate, !1, !0), r && this.projection && (this.projection.isTransformDirty = !0);
    }), s = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      o(), s();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures(t, n, r, o, s, i) {
    const a = [];
    si !== "production" && r && n && He(!1, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
    for (let l = 0; l < jh; l++) {
      const c = kl[l], { isEnabled: u, Component: d } = $n[c];
      u(t) && d && a.push(va(d, {
        key: c,
        ...t,
        visualElement: this
      }));
    }
    if (!this.projection && s) {
      this.projection = new s(o, this.latestValues, this.parent && this.parent.projection);
      const { layoutId: l, layout: c, drag: u, dragConstraints: d, layoutScroll: f } = t;
      this.projection.setOptions({
        layoutId: l,
        layout: c,
        alwaysMeasureLayout: !!u || d && cn(d),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        /**
         * TODO: Update options in an effect. This could be tricky as it'll be too late
         * to update by the time layout animations run.
         * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
         * ensuring it gets called if there's no potential layout animations.
         *
         */
        animationType: typeof c == "string" ? c : "both",
        initialPromotionConfig: i,
        layoutScroll: f
      });
    }
    return a;
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ve();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  /**
   * Make a target animatable by Popmotion. For instance, if we're
   * trying to animate width from 100px to 100vw we need to measure 100vw
   * in pixels to determine what we really need to animate to. This is also
   * pluggable to support Framer's custom value types like Color,
   * and CSS variables.
   */
  makeTargetAnimatable(t, n = !0) {
    return this.makeTargetAnimatableFromInstance(t, this.props, n);
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  setProps(t) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.props = t;
    for (let n = 0; n < xs.length; n++) {
      const r = xs[n];
      this.propEventSubscriptions[r] && (this.propEventSubscriptions[r](), delete this.propEventSubscriptions[r]);
      const o = t["on" + r];
      o && (this.propEventSubscriptions[r] = this.on(r, o));
    }
    this.prevMotionValues = $h(this, this.scrapeMotionValuesFromProps(t), this.prevMotionValues);
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(t) {
    var n;
    return (n = this.props.variants) === null || n === void 0 ? void 0 : n[t];
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    var t;
    return this.isVariantNode ? this : (t = this.parent) === null || t === void 0 ? void 0 : t.getClosestVariantNode();
  }
  getVariantContext(t = !1) {
    var n, r;
    if (t)
      return (n = this.parent) === null || n === void 0 ? void 0 : n.getVariantContext();
    if (!this.isControllingVariants) {
      const s = ((r = this.parent) === null || r === void 0 ? void 0 : r.getVariantContext()) || {};
      return this.props.initial !== void 0 && (s.initial = this.props.initial), s;
    }
    const o = {};
    for (let s = 0; s < Uh; s++) {
      const i = Ol[s], a = this.props[i];
      (In(a) || a === !1) && (o[i] = a);
    }
    return o;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(t) {
    var n;
    const r = this.getClosestVariantNode();
    if (r)
      return (n = r.variantChildren) === null || n === void 0 || n.add(t), () => r.variantChildren.delete(t);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(t, n) {
    this.hasValue(t) && this.removeValue(t), this.values.set(t, n), this.latestValues[t] = n.get(), this.bindToMotionValue(t, n);
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(t) {
    var n;
    this.values.delete(t), (n = this.valueSubscriptions.get(t)) === null || n === void 0 || n(), this.valueSubscriptions.delete(t), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(t) {
    return this.values.has(t);
  }
  /**
   * Get a motion value for this key. If called with a default
   * value, we'll create one if none exists.
   */
  getValue(t, n) {
    if (this.props.values && this.props.values[t])
      return this.props.values[t];
    let r = this.values.get(t);
    return r === void 0 && n !== void 0 && (r = mn(n, { owner: this }), this.addValue(t, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t) {
    return this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : this.readValueFromInstance(this.current, t, this.options);
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props, o = typeof r == "string" || typeof r == "object" ? (n = ri(this.props, r)) === null || n === void 0 ? void 0 : n[t] : void 0;
    if (r && o !== void 0)
      return o;
    const s = this.getBaseTargetFromProps(this.props, t);
    return s !== void 0 && !at(s) ? s : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new ui()), this.events[t].add(n);
  }
  notify(t, ...n) {
    var r;
    (r = this.events[t]) === null || r === void 0 || r.notify(...n);
  }
}
const Ol = ["initial", ...Ti], Uh = Ol.length;
class _l extends Nh {
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    var r;
    return (r = t.style) === null || r === void 0 ? void 0 : r[n];
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  makeTargetAnimatableFromInstance({ transition: t, transitionEnd: n, ...r }, { transformValues: o }, s) {
    let i = Xd(r, t || {}, this);
    if (o && (n && (n = o(n)), r && (r = o(r)), i && (i = o(i))), s) {
      Yd(this, r, i);
      const a = Bh(this, r, i, n);
      n = a.transitionEnd, r = a.target;
    }
    return {
      transition: t,
      transitionEnd: n,
      ...r
    };
  }
}
function zh(e) {
  return window.getComputedStyle(e);
}
class Wh extends _l {
  readValueFromInstance(t, n) {
    if (Qt.has(n)) {
      const r = hi(n);
      return r && r.default || 0;
    } else {
      const r = zh(t), o = (Pa(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Sl(t, n);
  }
  build(t, n, r, o) {
    Jo(t, n, r, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t) {
    return ni(t);
  }
  renderInstance(t, n, r, o) {
    La(t, n, r, o);
  }
}
class Hh extends _l {
  constructor() {
    super(...arguments), this.isSVGTag = !1;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    var r;
    return Qt.has(n) ? ((r = hi(n)) === null || r === void 0 ? void 0 : r.default) || 0 : (n = Da.has(n) ? n : ti(n), t.getAttribute(n));
  }
  measureInstanceViewportBox() {
    return ve();
  }
  scrapeMotionValuesFromProps(t) {
    return Fa(t);
  }
  build(t, n, r, o) {
    Qo(t, n, r, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, n, r, o) {
    Va(t, n, r, o);
  }
  mount(t) {
    this.isSVGTag = ei(t.tagName), super.mount(t);
  }
}
const qh = (e, t) => Xo(e) ? new Hh(t, { enableHardwareAcceleration: !1 }) : new Wh(t, { enableHardwareAcceleration: !0 });
function Es(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const Pn = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (F.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = Es(e, t.target.x), r = Es(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, Ts = "_$css", Kh = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, o = e.includes("var("), s = [];
    o && (e = e.replace(Cl, (h) => (s.push(h), Ts)));
    const i = It.parse(e);
    if (i.length > 5)
      return r;
    const a = It.createTransformer(e), l = typeof i[0] != "number" ? 1 : 0, c = n.x.scale * t.x, u = n.y.scale * t.y;
    i[0 + l] /= c, i[1 + l] /= u;
    const d = fe(c, u, 0.5);
    typeof i[2 + l] == "number" && (i[2 + l] /= d), typeof i[3 + l] == "number" && (i[3 + l] /= d);
    let f = a(i);
    if (o) {
      let h = 0;
      f = f.replace(Ts, () => {
        const m = s[h];
        return h++, m;
      });
    }
    return f;
  }
};
class Yh extends Be.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: o } = this.props, { projection: s } = t;
    Su(Xh), s && (n.group && n.group.add(s), r && r.register && o && r.register(s), s.root.didUpdate(), s.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), s.setOptions({
      ...s.options,
      onExitComplete: () => this.safeToRemove()
    })), _n.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: o, isPresent: s } = this.props, i = r.projection;
    return i && (i.isPresent = s, o || t.layoutDependency !== n || n === void 0 ? i.willUpdate() : this.safeToRemove(), t.isPresent !== s && (s ? i.promote() : i.relegate() || Oe.postRender(() => {
      var a;
      !((a = i.getStack()) === null || a === void 0) && a.members.length || this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), !t.currentAnimation && t.isLead() && this.safeToRemove());
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r } = this.props, { projection: o } = t;
    o && (o.scheduleCheckAfterUnmount(), n != null && n.group && n.group.remove(o), r != null && r.deregister && r.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t == null || t();
  }
  render() {
    return null;
  }
}
function Gh(e) {
  const [t, n] = Ha(), r = be(Go);
  return Be.createElement(Yh, { ...e, layoutGroup: r, switchLayoutGroup: be(Ca), isPresent: t, safeToRemove: n });
}
const Xh = {
  borderRadius: {
    ...Pn,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Pn,
  borderTopRightRadius: Pn,
  borderBottomLeftRadius: Pn,
  borderBottomRightRadius: Pn,
  boxShadow: Kh
}, Jh = {
  measureLayout: Gh
};
function Zh(e, t, n = {}) {
  const r = at(e) ? e : mn(e);
  return r.start(Ei("", r, t, n)), {
    stop: () => r.stop(),
    isAnimating: () => r.isAnimating()
  };
}
const Ll = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], Qh = Ll.length, Ss = (e) => typeof e == "string" ? parseFloat(e) : e, Cs = (e) => typeof e == "number" || F.test(e);
function ep(e, t, n, r, o, s) {
  o ? (e.opacity = fe(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    tp(r)
  ), e.opacityExit = fe(t.opacity !== void 0 ? t.opacity : 1, 0, np(r))) : s && (e.opacity = fe(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let i = 0; i < Qh; i++) {
    const a = `border${Ll[i]}Radius`;
    let l = As(t, a), c = As(n, a);
    if (l === void 0 && c === void 0)
      continue;
    l || (l = 0), c || (c = 0), l === 0 || c === 0 || Cs(l) === Cs(c) ? (e[a] = Math.max(fe(Ss(l), Ss(c), r), 0), (it.test(c) || it.test(l)) && (e[a] += "%")) : e[a] = c;
  }
  (t.rotate || n.rotate) && (e.rotate = fe(t.rotate || 0, n.rotate || 0, r));
}
function As(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const tp = Dl(0, 0.5, wi), np = Dl(0.5, 0.95, bi);
function Dl(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(br(e, t, r));
}
function Ps(e, t) {
  e.min = t.min, e.max = t.max;
}
function Ue(e, t) {
  Ps(e.x, t.x), Ps(e.y, t.y);
}
function Rs(e, t, n, r, o) {
  return e -= t, e = Er(e, 1 / n, r), o !== void 0 && (e = Er(e, 1 / o, r)), e;
}
function rp(e, t = 0, n = 1, r = 0.5, o, s = e, i = e) {
  if (it.test(t) && (t = parseFloat(t), t = fe(i.min, i.max, t / 100) - i.min), typeof t != "number")
    return;
  let a = fe(s.min, s.max, r);
  e === s && (a -= t), e.min = Rs(e.min, t, n, a, o), e.max = Rs(e.max, t, n, a, o);
}
function ks(e, t, [n, r, o], s, i) {
  rp(e, t[n], t[r], t[o], t.scale, s, i);
}
const op = ["x", "scaleX", "originX"], ip = ["y", "scaleY", "originY"];
function Os(e, t, n, r) {
  ks(e.x, t, op, n == null ? void 0 : n.x, r == null ? void 0 : r.x), ks(e.y, t, ip, n == null ? void 0 : n.y, r == null ? void 0 : r.y);
}
function _s(e) {
  return e.translate === 0 && e.scale === 1;
}
function Vl(e) {
  return _s(e.x) && _s(e.y);
}
function Fl(e, t) {
  return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
}
function Ls(e) {
  return De(e.x) / De(e.y);
}
class sp {
  constructor() {
    this.members = [];
  }
  add(t) {
    li(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (ci(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((o) => t === o);
    if (n === 0)
      return !1;
    let r;
    for (let o = n; o >= 0; o--) {
      const s = this.members[o];
      if (s.isPresent !== !1) {
        r = s;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    var r;
    const o = this.lead;
    if (t !== o && (this.prevLead = o, this.lead = t, t.show(), o)) {
      o.instance && o.scheduleRender(), t.scheduleRender(), t.resumeFrom = o, n && (t.resumeFrom.preserveOpacity = !0), o.snapshot && (t.snapshot = o.snapshot, t.snapshot.latestValues = o.animationValues || o.latestValues), !((r = t.root) === null || r === void 0) && r.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: s } = t.options;
      s === !1 && o.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      var n, r, o, s, i;
      (r = (n = t.options).onExitComplete) === null || r === void 0 || r.call(n), (i = (o = t.resumingFrom) === null || o === void 0 ? void 0 : (s = o.options).onExitComplete) === null || i === void 0 || i.call(s);
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Ds(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x, s = e.y.translate / t.y;
  if ((o || s) && (r = `translate3d(${o}px, ${s}px, 0) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { rotate: l, rotateX: c, rotateY: u } = n;
    l && (r += `rotate(${l}deg) `), c && (r += `rotateX(${c}deg) `), u && (r += `rotateY(${u}deg) `);
  }
  const i = e.x.scale * t.x, a = e.y.scale * t.y;
  return (i !== 1 || a !== 1) && (r += `scale(${i}, ${a})`), r || "none";
}
const ap = (e, t) => e.depth - t.depth;
class lp {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    li(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    ci(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(ap), this.isDirty = !1, this.children.forEach(t);
  }
}
const Vs = ["", "X", "Y", "Z"], Fs = 1e3;
let cp = 0;
function Ml({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: o }) {
  return class {
    constructor(i, a = {}, l = t == null ? void 0 : t()) {
      this.id = cp++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isTransformDirty = !1, this.isProjectionDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.potentialNodes = /* @__PURE__ */ new Map(), this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.nodes.forEach(fp), this.nodes.forEach(mp), this.nodes.forEach(gp);
      }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.elementId = i, this.latestValues = a, this.root = l ? l.root || l : this, this.path = l ? [...l.path, l] : [], this.parent = l, this.depth = l ? l.depth + 1 : 0, i && this.root.registerPotentialNode(i, this);
      for (let c = 0; c < this.path.length; c++)
        this.path[c].shouldResetTransform = !0;
      this.root === this && (this.nodes = new lp());
    }
    addEventListener(i, a) {
      return this.eventHandlers.has(i) || this.eventHandlers.set(i, new ui()), this.eventHandlers.get(i).add(a);
    }
    notifyListeners(i, ...a) {
      const l = this.eventHandlers.get(i);
      l == null || l.notify(...a);
    }
    hasListeners(i) {
      return this.eventHandlers.has(i);
    }
    registerPotentialNode(i, a) {
      this.potentialNodes.set(i, a);
    }
    /**
     * Lifecycles
     */
    mount(i, a = !1) {
      var l;
      if (this.instance)
        return;
      this.isSVG = i instanceof SVGElement && i.tagName !== "svg", this.instance = i;
      const { layoutId: c, layout: u, visualElement: d } = this.options;
      if (d && !d.current && d.mount(i), this.root.nodes.add(this), (l = this.parent) === null || l === void 0 || l.children.add(this), this.elementId && this.root.potentialNodes.delete(this.elementId), a && (u || c) && (this.isLayoutDirty = !0), e) {
        let f;
        const h = () => this.root.updateBlockedByResize = !1;
        e(i, () => {
          this.root.updateBlockedByResize = !0, f && f(), f = ml(h, 250), _n.hasAnimatedSinceResize && (_n.hasAnimatedSinceResize = !1, this.nodes.forEach(Bs));
        });
      }
      c && this.root.registerSharedNode(c, this), this.options.animate !== !1 && d && (c || u) && this.addEventListener("didUpdate", ({ delta: f, hasLayoutChanged: h, hasRelativeTargetChanged: m, layout: g }) => {
        var b, y, w, v, T;
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const P = (y = (b = this.options.transition) !== null && b !== void 0 ? b : d.getDefaultTransition()) !== null && y !== void 0 ? y : xp, { onLayoutAnimationStart: O, onLayoutAnimationComplete: M } = d.getProps(), N = !this.targetLayout || !Fl(this.targetLayout, g) || m, G = !h && m;
        if (!((w = this.resumeFrom) === null || w === void 0) && w.instance || G || h && (N || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(f, G);
          const z = {
            ...gl(P, "layout"),
            onPlay: O,
            onComplete: M
          };
          d.shouldReduceMotion && (z.delay = 0, z.type = !1), this.startAnimation(z);
        } else
          !h && this.animationProgress === 0 && Bs(this), this.isLead() && ((T = (v = this.options).onExitComplete) === null || T === void 0 || T.call(v));
        this.targetLayout = g;
      });
    }
    unmount() {
      var i, a;
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this), (i = this.getStack()) === null || i === void 0 || i.remove(this), (a = this.parent) === null || a === void 0 || a.children.delete(this), this.instance = void 0, Bt.preRender(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      var i;
      return this.isAnimationBlocked || ((i = this.parent) === null || i === void 0 ? void 0 : i.isTreeAnimationBlocked()) || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      var i;
      this.isUpdateBlocked() || (this.isUpdating = !0, (i = this.nodes) === null || i === void 0 || i.forEach(yp), this.animationId++);
    }
    willUpdate(i = !0) {
      var a, l, c;
      if (this.root.isUpdateBlocked()) {
        (l = (a = this.options).onExitComplete) === null || l === void 0 || l.call(a);
        return;
      }
      if (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let h = 0; h < this.path.length; h++) {
        const m = this.path[h];
        m.shouldResetTransform = !0, m.updateScroll("snapshot");
      }
      const { layoutId: u, layout: d } = this.options;
      if (u === void 0 && !d)
        return;
      const f = (c = this.options.visualElement) === null || c === void 0 ? void 0 : c.getProps().transformTemplate;
      this.prevTransformTemplateValue = f == null ? void 0 : f(this.latestValues, ""), this.updateSnapshot(), i && this.notifyListeners("willUpdate");
    }
    // Note: Currently only running on root node
    didUpdate() {
      if (this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Ms);
        return;
      }
      this.isUpdating && (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(Ep), this.potentialNodes.clear()), this.nodes.forEach(pp), this.nodes.forEach(up), this.nodes.forEach(dp), this.clearAllSnapshots(), Zr.update(), Zr.preRender(), Zr.render());
    }
    clearAllSnapshots() {
      this.nodes.forEach(hp), this.sharedNodes.forEach(vp);
    }
    scheduleUpdateProjection() {
      Oe.preRender(this.updateProjection, !1, !0);
    }
    scheduleCheckAfterUnmount() {
      Oe.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      var i;
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++)
          this.path[l].updateScroll();
      const a = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = ve(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox), (i = this.options.visualElement) === null || i === void 0 || i.notify("LayoutMeasure", this.layout.layoutBox, a == null ? void 0 : a.layoutBox);
    }
    updateScroll(i = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === i && (a = !1), a && (this.scroll = {
        animationId: this.root.animationId,
        phase: i,
        isRoot: r(this.instance),
        offset: n(this.instance)
      });
    }
    resetTransform() {
      var i;
      if (!o)
        return;
      const a = this.isLayoutDirty || this.shouldResetTransform, l = this.projectionDelta && !Vl(this.projectionDelta), c = (i = this.options.visualElement) === null || i === void 0 ? void 0 : i.getProps().transformTemplate, u = c == null ? void 0 : c(this.latestValues, ""), d = u !== this.prevTransformTemplateValue;
      a && (l || Kt(this.latestValues) || d) && (o(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(i = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return i && (l = this.removeTransform(l)), Tp(l), {
        animationId: this.root.animationId,
        measuredBox: a,
        layoutBox: l,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement: i } = this.options;
      if (!i)
        return ve();
      const a = i.measureViewportBox(), { scroll: l } = this.root;
      return l && (Dt(a.x, l.offset.x), Dt(a.y, l.offset.y)), a;
    }
    removeElementScroll(i) {
      const a = ve();
      Ue(a, i);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l], { scroll: u, options: d } = c;
        if (c !== this.root && u && d.layoutScroll) {
          if (u.isRoot) {
            Ue(a, i);
            const { scroll: f } = this.root;
            f && (Dt(a.x, -f.offset.x), Dt(a.y, -f.offset.y));
          }
          Dt(a.x, u.offset.x), Dt(a.y, u.offset.y);
        }
      }
      return a;
    }
    applyTransform(i, a = !1) {
      const l = ve();
      Ue(l, i);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        !a && u.options.layoutScroll && u.scroll && u !== u.root && dn(l, {
          x: -u.scroll.offset.x,
          y: -u.scroll.offset.y
        }), Kt(u.latestValues) && dn(l, u.latestValues);
      }
      return Kt(this.latestValues) && dn(l, this.latestValues), l;
    }
    removeTransform(i) {
      var a;
      const l = ve();
      Ue(l, i);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        if (!u.instance || !Kt(u.latestValues))
          continue;
        _o(u.latestValues) && u.updateSnapshot();
        const d = ve(), f = u.measurePageBox();
        Ue(d, f), Os(l, u.latestValues, (a = u.snapshot) === null || a === void 0 ? void 0 : a.layoutBox, d);
      }
      return Kt(this.latestValues) && Os(l, this.latestValues), l;
    }
    /**
     *
     */
    setTargetDelta(i) {
      this.targetDelta = i, this.isProjectionDirty = !0, this.root.scheduleUpdateProjection();
    }
    setOptions(i) {
      this.options = {
        ...this.options,
        ...i,
        crossfade: i.crossfade !== void 0 ? i.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    /**
     * Frame calculations
     */
    resolveTargetDelta() {
      var i;
      const a = this.getLead();
      if (this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty), !this.isProjectionDirty && !this.attemptToResolveRelativeTarget)
        return;
      const { layout: l, layoutId: c } = this.options;
      if (!(!this.layout || !(l || c))) {
        if (!this.targetDelta && !this.relativeTarget) {
          const u = this.getClosestProjectingParent();
          u && u.layout ? (this.relativeParent = u, this.relativeTarget = ve(), this.relativeTargetOrigin = ve(), Fn(this.relativeTargetOrigin, this.layout.layoutBox, u.layout.layoutBox), Ue(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = ve(), this.targetWithTransforms = ve()), this.relativeTarget && this.relativeTargetOrigin && (!((i = this.relativeParent) === null || i === void 0) && i.target) ? ah(this.target, this.relativeTarget, this.relativeParent.target) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Ue(this.target, this.layout.layoutBox), Tl(this.target, this.targetDelta)) : Ue(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = !1;
          const u = this.getClosestProjectingParent();
          u && !!u.resumingFrom == !!this.resumingFrom && !u.options.layoutScroll && u.target ? (this.relativeParent = u, this.relativeTarget = ve(), this.relativeTargetOrigin = ve(), Fn(this.relativeTargetOrigin, this.target, u.target), Ue(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || _o(this.parent.latestValues) || El(this.parent.latestValues)))
        return (this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent();
    }
    calcProjection() {
      var i;
      const { isProjectionDirty: a, isTransformDirty: l } = this;
      this.isProjectionDirty = this.isTransformDirty = !1;
      const c = this.getLead(), u = !!this.resumingFrom || this !== c;
      let d = !0;
      if (a && (d = !1), u && l && (d = !1), d)
        return;
      const { layout: f, layoutId: h } = this.options;
      if (this.isTreeAnimating = !!(!((i = this.parent) === null || i === void 0) && i.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(f || h))
        return;
      Ue(this.layoutCorrected, this.layout.layoutBox), gh(this.layoutCorrected, this.treeScale, this.path, u);
      const { target: m } = c;
      if (!m)
        return;
      this.projectionDelta || (this.projectionDelta = Mn(), this.projectionDeltaWithTransform = Mn());
      const g = this.treeScale.x, b = this.treeScale.y, y = this.projectionTransform;
      Vn(this.projectionDelta, this.layoutCorrected, m, this.latestValues), this.projectionTransform = Ds(this.projectionDelta, this.treeScale), (this.projectionTransform !== y || this.treeScale.x !== g || this.treeScale.y !== b) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", m));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(i = !0) {
      var a, l, c;
      (l = (a = this.options).scheduleRender) === null || l === void 0 || l.call(a), i && ((c = this.getStack()) === null || c === void 0 || c.scheduleRender()), this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    setAnimationOrigin(i, a = !1) {
      var l, c;
      const u = this.snapshot, d = (u == null ? void 0 : u.latestValues) || {}, f = { ...this.latestValues }, h = Mn();
      this.relativeTarget = this.relativeTargetOrigin = void 0, this.attemptToResolveRelativeTarget = !a;
      const m = ve(), g = (u == null ? void 0 : u.source) !== ((l = this.layout) === null || l === void 0 ? void 0 : l.source), b = (((c = this.getStack()) === null || c === void 0 ? void 0 : c.members.length) || 0) <= 1, y = !!(g && !b && this.options.crossfade === !0 && !this.path.some(wp));
      this.animationProgress = 0, this.mixTargetDelta = (w) => {
        var v;
        const T = w / 1e3;
        Is(h.x, i.x, T), Is(h.y, i.y, T), this.setTargetDelta(h), this.relativeTarget && this.relativeTargetOrigin && this.layout && (!((v = this.relativeParent) === null || v === void 0) && v.layout) && (Fn(m, this.layout.layoutBox, this.relativeParent.layout.layoutBox), bp(this.relativeTarget, this.relativeTargetOrigin, m, T)), g && (this.animationValues = f, ep(f, d, this.latestValues, T, y, b)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = T;
      }, this.mixTargetDelta(0);
    }
    startAnimation(i) {
      var a, l;
      this.notifyListeners("animationStart"), (a = this.currentAnimation) === null || a === void 0 || a.stop(), this.resumingFrom && ((l = this.resumingFrom.currentAnimation) === null || l === void 0 || l.stop()), this.pendingAnimation && (Bt.update(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Oe.update(() => {
        _n.hasAnimatedSinceResize = !0, this.currentAnimation = Zh(0, Fs, {
          ...i,
          onUpdate: (c) => {
            var u;
            this.mixTargetDelta(c), (u = i.onUpdate) === null || u === void 0 || u.call(i, c);
          },
          onComplete: () => {
            var c;
            (c = i.onComplete) === null || c === void 0 || c.call(i), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      var i;
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0), (i = this.getStack()) === null || i === void 0 || i.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      var i;
      this.currentAnimation && ((i = this.mixTargetDelta) === null || i === void 0 || i.call(this, Fs), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const i = this.getLead();
      let { targetWithTransforms: a, target: l, layout: c, latestValues: u } = i;
      if (!(!a || !l || !c)) {
        if (this !== i && this.layout && c && Bl(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
          l = this.target || ve();
          const d = De(this.layout.layoutBox.x);
          l.x.min = i.target.x.min, l.x.max = l.x.min + d;
          const f = De(this.layout.layoutBox.y);
          l.y.min = i.target.y.min, l.y.max = l.y.min + f;
        }
        Ue(a, l), dn(a, u), Vn(this.projectionDeltaWithTransform, this.layoutCorrected, a, u);
      }
    }
    registerSharedNode(i, a) {
      var l, c, u;
      this.sharedNodes.has(i) || this.sharedNodes.set(i, new sp()), this.sharedNodes.get(i).add(a), a.promote({
        transition: (l = a.options.initialPromotionConfig) === null || l === void 0 ? void 0 : l.transition,
        preserveFollowOpacity: (u = (c = a.options.initialPromotionConfig) === null || c === void 0 ? void 0 : c.shouldPreserveFollowOpacity) === null || u === void 0 ? void 0 : u.call(c, a)
      });
    }
    isLead() {
      const i = this.getStack();
      return i ? i.lead === this : !0;
    }
    getLead() {
      var i;
      const { layoutId: a } = this.options;
      return a ? ((i = this.getStack()) === null || i === void 0 ? void 0 : i.lead) || this : this;
    }
    getPrevLead() {
      var i;
      const { layoutId: a } = this.options;
      return a ? (i = this.getStack()) === null || i === void 0 ? void 0 : i.prevLead : void 0;
    }
    getStack() {
      const { layoutId: i } = this.options;
      if (i)
        return this.root.sharedNodes.get(i);
    }
    promote({ needsReset: i, transition: a, preserveFollowOpacity: l } = {}) {
      const c = this.getStack();
      c && c.promote(this, l), i && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({ transition: a });
    }
    relegate() {
      const i = this.getStack();
      return i ? i.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: i } = this.options;
      if (!i)
        return;
      let a = !1;
      const { latestValues: l } = i;
      if ((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (a = !0), !a)
        return;
      const c = {};
      for (let u = 0; u < Vs.length; u++) {
        const d = "rotate" + Vs[u];
        l[d] && (c[d] = l[d], i.setStaticValue(d, 0));
      }
      i == null || i.render();
      for (const u in c)
        i.setStaticValue(u, c[u]);
      i.scheduleRender();
    }
    getProjectionStyles(i = {}) {
      var a, l, c;
      const u = {};
      if (!this.instance || this.isSVG)
        return u;
      if (this.isVisible)
        u.visibility = "";
      else
        return { visibility: "hidden" };
      const d = (a = this.options.visualElement) === null || a === void 0 ? void 0 : a.getProps().transformTemplate;
      if (this.needsReset)
        return this.needsReset = !1, u.opacity = "", u.pointerEvents = ar(i.pointerEvents) || "", u.transform = d ? d(this.latestValues, "") : "none", u;
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const b = {};
        return this.options.layoutId && (b.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, b.pointerEvents = ar(i.pointerEvents) || ""), this.hasProjected && !Kt(this.latestValues) && (b.transform = d ? d({}, "") : "none", this.hasProjected = !1), b;
      }
      const h = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(), u.transform = Ds(this.projectionDeltaWithTransform, this.treeScale, h), d && (u.transform = d(h, u.transform));
      const { x: m, y: g } = this.projectionDelta;
      u.transformOrigin = `${m.origin * 100}% ${g.origin * 100}% 0`, f.animationValues ? u.opacity = f === this ? (c = (l = h.opacity) !== null && l !== void 0 ? l : this.latestValues.opacity) !== null && c !== void 0 ? c : 1 : this.preserveOpacity ? this.latestValues.opacity : h.opacityExit : u.opacity = f === this ? h.opacity !== void 0 ? h.opacity : "" : h.opacityExit !== void 0 ? h.opacityExit : 0;
      for (const b in fr) {
        if (h[b] === void 0)
          continue;
        const { correct: y, applyTo: w } = fr[b], v = y(h[b], f);
        if (w) {
          const T = w.length;
          for (let P = 0; P < T; P++)
            u[w[P]] = v;
        } else
          u[b] = v;
      }
      return this.options.layoutId && (u.pointerEvents = f === this ? ar(i.pointerEvents) || "" : "none"), u;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((i) => {
        var a;
        return (a = i.currentAnimation) === null || a === void 0 ? void 0 : a.stop();
      }), this.root.nodes.forEach(Ms), this.root.sharedNodes.clear();
    }
  };
}
function up(e) {
  e.updateLayout();
}
function dp(e) {
  var t, n, r;
  const o = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && o && e.hasListeners("didUpdate")) {
    const { layoutBox: s, measuredBox: i } = e.layout, { animationType: a } = e.options, l = o.source !== e.layout.source;
    a === "size" ? rt((h) => {
      const m = l ? o.measuredBox[h] : o.layoutBox[h], g = De(m);
      m.min = s[h].min, m.max = m.min + g;
    }) : Bl(a, o.layoutBox, s) && rt((h) => {
      const m = l ? o.measuredBox[h] : o.layoutBox[h], g = De(s[h]);
      m.max = m.min + g;
    });
    const c = Mn();
    Vn(c, s, o.layoutBox);
    const u = Mn();
    l ? Vn(u, e.applyTransform(i, !0), o.measuredBox) : Vn(u, s, o.layoutBox);
    const d = !Vl(c);
    let f = !1;
    if (!e.resumeFrom) {
      const h = e.getClosestProjectingParent();
      if (h && !h.resumeFrom) {
        const { snapshot: m, layout: g } = h;
        if (m && g) {
          const b = ve();
          Fn(b, o.layoutBox, m.layoutBox);
          const y = ve();
          Fn(y, s, g.layoutBox), Fl(b, y) || (f = !0);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: s,
      snapshot: o,
      delta: u,
      layoutDelta: c,
      hasLayoutChanged: d,
      hasRelativeTargetChanged: f
    });
  } else
    e.isLead() && ((r = (n = e.options).onExitComplete) === null || r === void 0 || r.call(n));
  e.options.transition = void 0;
}
function fp(e) {
  e.isProjectionDirty || (e.isProjectionDirty = !!(e.parent && e.parent.isProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = !!(e.parent && e.parent.isTransformDirty));
}
function hp(e) {
  e.clearSnapshot();
}
function Ms(e) {
  e.clearMeasurements();
}
function pp(e) {
  const { visualElement: t } = e.options;
  t != null && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function Bs(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0;
}
function mp(e) {
  e.resolveTargetDelta();
}
function gp(e) {
  e.calcProjection();
}
function yp(e) {
  e.resetRotation();
}
function vp(e) {
  e.removeLeadSnapshot();
}
function Is(e, t, n) {
  e.translate = fe(t.translate, 0, n), e.scale = fe(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function $s(e, t, n, r) {
  e.min = fe(t.min, n.min, r), e.max = fe(t.max, n.max, r);
}
function bp(e, t, n, r) {
  $s(e.x, t.x, n.x, r), $s(e.y, t.y, n.y, r);
}
function wp(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const xp = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
};
function Ep(e, t) {
  let n = e.root;
  for (let s = e.path.length - 1; s >= 0; s--)
    if (e.path[s].instance) {
      n = e.path[s];
      break;
    }
  const o = (n && n !== e.root ? n.instance : document).querySelector(`[data-projection-id="${t}"]`);
  o && e.mount(o, !0);
}
function js(e) {
  e.min = Math.round(e.min), e.max = Math.round(e.max);
}
function Tp(e) {
  js(e.x), js(e.y);
}
function Bl(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !ko(Ls(t), Ls(n), 0.2);
}
const Sp = Ml({
  attachResizeListener: (e, t) => Vr(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), lo = {
  current: void 0
}, Cp = Ml({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!lo.current) {
      const e = new Sp(0, {});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), lo.current = e;
    }
    return lo.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), Ap = {
  ...rh,
  ...Ed,
  ...Ch,
  ...Jh
}, Un = /* @__PURE__ */ Eu((e, t) => ed(e, t, Ap, qh, Cp));
function Il() {
  const e = re(!1);
  return On(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function Pp() {
  const e = Il(), [t, n] = Y(0), r = Mt(() => {
    e.current && n(t + 1);
  }, [t]);
  return [Mt(() => Oe.postRender(r), [r]), t];
}
class Rp extends ee.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      r.height = n.offsetHeight || 0, r.width = n.offsetWidth || 0, r.top = n.offsetTop, r.left = n.offsetLeft;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function kp({ children: e, isPresent: t }) {
  const n = Rr(), r = re(null), o = re({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  });
  return Cc(() => {
    const { width: s, height: i, top: a, left: l } = o.current;
    if (t || !r.current || !s || !i)
      return;
    r.current.dataset.motionPopId = n;
    const c = document.createElement("style");
    return document.head.appendChild(c), c.sheet && c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${i}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `), () => {
      document.head.removeChild(c);
    };
  }, [t]), ee.createElement(Rp, { isPresent: t, childRef: r, sizeRef: o }, ee.cloneElement(e, { ref: r }));
}
const co = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: o, presenceAffectsLayout: s, mode: i }) => {
  const a = Dr(Op), l = Rr(), c = ze(
    () => ({
      id: l,
      initial: t,
      isPresent: n,
      custom: o,
      onExitComplete: (u) => {
        a.set(u, !0);
        for (const d of a.values())
          if (!d)
            return;
        r && r();
      },
      register: (u) => (a.set(u, !1), () => a.delete(u))
    }),
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    s ? void 0 : [n]
  );
  return ze(() => {
    a.forEach((u, d) => a.set(d, !1));
  }, [n]), ee.useEffect(() => {
    !n && !a.size && r && r();
  }, [n]), i === "popLayout" && (e = ee.createElement(kp, { isPresent: n }, e)), ee.createElement(Hn.Provider, { value: c }, e);
};
function Op() {
  return /* @__PURE__ */ new Map();
}
const ln = (e) => e.key || "";
function _p(e, t) {
  e.forEach((n) => {
    const r = ln(n);
    t.set(r, n);
  });
}
function Lp(e) {
  const t = [];
  return Pc.forEach(e, (n) => {
    Rc(n) && t.push(n);
  }), t;
}
const $r = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, exitBeforeEnter: o, presenceAffectsLayout: s = !0, mode: i = "sync" }) => {
  o && (i = "wait", ai(!1, "Replace exitBeforeEnter with mode='wait'"));
  let [a] = Pp();
  const l = be(Go).forceRender;
  l && (a = l);
  const c = Il(), u = Lp(e);
  let d = u;
  const f = /* @__PURE__ */ new Set(), h = re(d), m = re(/* @__PURE__ */ new Map()).current, g = re(!0);
  if (On(() => {
    g.current = !1, _p(u, m), h.current = d;
  }), ii(() => {
    g.current = !0, m.clear(), f.clear();
  }), g.current)
    return ee.createElement(ee.Fragment, null, d.map((v) => ee.createElement(co, { key: ln(v), isPresent: !0, initial: n ? void 0 : !1, presenceAffectsLayout: s, mode: i }, v)));
  d = [...d];
  const b = h.current.map(ln), y = u.map(ln), w = b.length;
  for (let v = 0; v < w; v++) {
    const T = b[v];
    y.indexOf(T) === -1 && f.add(T);
  }
  return i === "wait" && f.size && (d = []), f.forEach((v) => {
    if (y.indexOf(v) !== -1)
      return;
    const T = m.get(v);
    if (!T)
      return;
    const P = b.indexOf(v), O = () => {
      m.delete(v), f.delete(v);
      const M = h.current.findIndex((N) => N.key === v);
      if (h.current.splice(M, 1), !f.size) {
        if (h.current = u, c.current === !1)
          return;
        a(), r && r();
      }
    };
    d.splice(P, 0, ee.createElement(co, { key: ln(T), isPresent: !1, onExitComplete: O, custom: t, presenceAffectsLayout: s, mode: i }, T));
  }), d = d.map((v) => {
    const T = v.key;
    return f.has(T) ? v : ee.createElement(co, { key: ln(v), isPresent: !0, presenceAffectsLayout: s, mode: i }, v);
  }), si !== "production" && i === "wait" && d.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`), ee.createElement(ee.Fragment, null, f.size ? d : d.map((v) => Ac(v)));
};
function Dp({ dragControls: e }) {
  function t(n) {
    n.stopPropagation(), e.start(n);
  }
  return /* @__PURE__ */ S(
    Vp,
    {
      onPointerDown: t,
      title: "Click & drag",
      children: /* @__PURE__ */ Q(
        Fp,
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            /* @__PURE__ */ S(
              "path",
              {
                d: "M4.25 8.75H19.25",
                stroke: "currentColor",
                "stroke-width": "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              }
            ),
            /* @__PURE__ */ S(
              "path",
              {
                d: "M4.25 15.25H19.25",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              }
            )
          ]
        }
      )
    }
  );
}
const Vp = R.div`
  display: flex;
  color: rgb(${(e) => e.theme.secondaryText});
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`, Fp = R.svg`
  font-size: 1.4rem;
  width: 1em;
  height: 1em;
`;
let ir;
const Mp = new Uint8Array(16);
function Bp() {
  if (!ir && (ir = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !ir))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return ir(Mp);
}
const Se = [];
for (let e = 0; e < 256; ++e)
  Se.push((e + 256).toString(16).slice(1));
function Ip(e, t = 0) {
  return Se[e[t + 0]] + Se[e[t + 1]] + Se[e[t + 2]] + Se[e[t + 3]] + "-" + Se[e[t + 4]] + Se[e[t + 5]] + "-" + Se[e[t + 6]] + Se[e[t + 7]] + "-" + Se[e[t + 8]] + Se[e[t + 9]] + "-" + Se[e[t + 10]] + Se[e[t + 11]] + Se[e[t + 12]] + Se[e[t + 13]] + Se[e[t + 14]] + Se[e[t + 15]];
}
const $p = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Ns = {
  randomUUID: $p
};
function jp(e, t, n) {
  if (Ns.randomUUID && !t && !e)
    return Ns.randomUUID();
  e = e || {};
  const r = e.random || (e.rng || Bp)();
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
    n = n || 0;
    for (let o = 0; o < 16; ++o)
      t[n + o] = r[o];
    return t;
  }
  return Ip(r);
}
function $l(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Np } = Object.prototype, { getPrototypeOf: Si } = Object, jr = ((e) => (t) => {
  const n = Np.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), ct = (e) => (e = e.toLowerCase(), (t) => jr(t) === e), Nr = (e) => (t) => typeof t === e, { isArray: xn } = Array, zn = Nr("undefined");
function Up(e) {
  return e !== null && !zn(e) && e.constructor !== null && !zn(e.constructor) && Ie(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const jl = ct("ArrayBuffer");
function zp(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && jl(e.buffer), t;
}
const Wp = Nr("string"), Ie = Nr("function"), Nl = Nr("number"), Ur = (e) => e !== null && typeof e == "object", Hp = (e) => e === !0 || e === !1, cr = (e) => {
  if (jr(e) !== "object")
    return !1;
  const t = Si(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, qp = ct("Date"), Kp = ct("File"), Yp = ct("Blob"), Gp = ct("FileList"), Xp = (e) => Ur(e) && Ie(e.pipe), Jp = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Ie(e.append) && ((t = jr(e)) === "formdata" || // detect form-data instance
  t === "object" && Ie(e.toString) && e.toString() === "[object FormData]"));
}, Zp = ct("URLSearchParams"), Qp = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Gn(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), xn(e))
    for (r = 0, o = e.length; r < o; r++)
      t.call(null, e[r], r, e);
  else {
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = s.length;
    let a;
    for (r = 0; r < i; r++)
      a = s[r], t.call(null, e[a], a, e);
  }
}
function Ul(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const zl = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Wl = (e) => !zn(e) && e !== zl;
function Mo() {
  const { caseless: e } = Wl(this) && this || {}, t = {}, n = (r, o) => {
    const s = e && Ul(t, o) || o;
    cr(t[s]) && cr(r) ? t[s] = Mo(t[s], r) : cr(r) ? t[s] = Mo({}, r) : xn(r) ? t[s] = r.slice() : t[s] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Gn(arguments[r], n);
  return t;
}
const em = (e, t, n, { allOwnKeys: r } = {}) => (Gn(t, (o, s) => {
  n && Ie(o) ? e[s] = $l(o, n) : e[s] = o;
}, { allOwnKeys: r }), e), tm = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), nm = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, rm = (e, t, n, r) => {
  let o, s, i;
  const a = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (o = Object.getOwnPropertyNames(e), s = o.length; s-- > 0; )
      i = o[s], (!r || r(i, e, t)) && !a[i] && (t[i] = e[i], a[i] = !0);
    e = n !== !1 && Si(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, om = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, im = (e) => {
  if (!e)
    return null;
  if (xn(e))
    return e;
  let t = e.length;
  if (!Nl(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, sm = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Si(Uint8Array)), am = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const s = o.value;
    t.call(e, s[0], s[1]);
  }
}, lm = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, cm = ct("HTMLFormElement"), um = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, o) {
    return r.toUpperCase() + o;
  }
), Us = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), dm = ct("RegExp"), Hl = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Gn(n, (o, s) => {
    let i;
    (i = t(o, s, e)) !== !1 && (r[s] = i || o);
  }), Object.defineProperties(e, r);
}, fm = (e) => {
  Hl(e, (t, n) => {
    if (Ie(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (Ie(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, hm = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((s) => {
      n[s] = !0;
    });
  };
  return xn(e) ? r(e) : r(String(e).split(t)), n;
}, pm = () => {
}, mm = (e, t) => (e = +e, Number.isFinite(e) ? e : t), uo = "abcdefghijklmnopqrstuvwxyz", zs = "0123456789", ql = {
  DIGIT: zs,
  ALPHA: uo,
  ALPHA_DIGIT: uo + uo.toUpperCase() + zs
}, gm = (e = 16, t = ql.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function ym(e) {
  return !!(e && Ie(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const vm = (e) => {
  const t = new Array(10), n = (r, o) => {
    if (Ur(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[o] = r;
        const s = xn(r) ? [] : {};
        return Gn(r, (i, a) => {
          const l = n(i, o + 1);
          !zn(l) && (s[a] = l);
        }), t[o] = void 0, s;
      }
    }
    return r;
  };
  return n(e, 0);
}, bm = ct("AsyncFunction"), wm = (e) => e && (Ur(e) || Ie(e)) && Ie(e.then) && Ie(e.catch), x = {
  isArray: xn,
  isArrayBuffer: jl,
  isBuffer: Up,
  isFormData: Jp,
  isArrayBufferView: zp,
  isString: Wp,
  isNumber: Nl,
  isBoolean: Hp,
  isObject: Ur,
  isPlainObject: cr,
  isUndefined: zn,
  isDate: qp,
  isFile: Kp,
  isBlob: Yp,
  isRegExp: dm,
  isFunction: Ie,
  isStream: Xp,
  isURLSearchParams: Zp,
  isTypedArray: sm,
  isFileList: Gp,
  forEach: Gn,
  merge: Mo,
  extend: em,
  trim: Qp,
  stripBOM: tm,
  inherits: nm,
  toFlatObject: rm,
  kindOf: jr,
  kindOfTest: ct,
  endsWith: om,
  toArray: im,
  forEachEntry: am,
  matchAll: lm,
  isHTMLForm: cm,
  hasOwnProperty: Us,
  hasOwnProp: Us,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Hl,
  freezeMethods: fm,
  toObjectSet: hm,
  toCamelCase: um,
  noop: pm,
  toFiniteNumber: mm,
  findKey: Ul,
  global: zl,
  isContextDefined: Wl,
  ALPHABET: ql,
  generateString: gm,
  isSpecCompliantForm: ym,
  toJSONObject: vm,
  isAsyncFn: bm,
  isThenable: wm
};
function K(e, t, n, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), o && (this.response = o);
}
x.inherits(K, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: x.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Kl = K.prototype, Yl = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  Yl[e] = { value: e };
});
Object.defineProperties(K, Yl);
Object.defineProperty(Kl, "isAxiosError", { value: !0 });
K.from = (e, t, n, r, o, s) => {
  const i = Object.create(Kl);
  return x.toFlatObject(e, i, function(l) {
    return l !== Error.prototype;
  }, (a) => a !== "isAxiosError"), K.call(i, e.message, t, n, r, o), i.cause = e, i.name = e.name, s && Object.assign(i, s), i;
};
const xm = null;
function Bo(e) {
  return x.isPlainObject(e) || x.isArray(e);
}
function Gl(e) {
  return x.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Ws(e, t, n) {
  return e ? e.concat(t).map(function(o, s) {
    return o = Gl(o), !n && s ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function Em(e) {
  return x.isArray(e) && !e.some(Bo);
}
const Tm = x.toFlatObject(x, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function zr(e, t, n) {
  if (!x.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = x.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(g, b) {
    return !x.isUndefined(b[g]);
  });
  const r = n.metaTokens, o = n.visitor || u, s = n.dots, i = n.indexes, l = (n.Blob || typeof Blob < "u" && Blob) && x.isSpecCompliantForm(t);
  if (!x.isFunction(o))
    throw new TypeError("visitor must be a function");
  function c(m) {
    if (m === null)
      return "";
    if (x.isDate(m))
      return m.toISOString();
    if (!l && x.isBlob(m))
      throw new K("Blob is not supported. Use a Buffer instead.");
    return x.isArrayBuffer(m) || x.isTypedArray(m) ? l && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m;
  }
  function u(m, g, b) {
    let y = m;
    if (m && !b && typeof m == "object") {
      if (x.endsWith(g, "{}"))
        g = r ? g : g.slice(0, -2), m = JSON.stringify(m);
      else if (x.isArray(m) && Em(m) || (x.isFileList(m) || x.endsWith(g, "[]")) && (y = x.toArray(m)))
        return g = Gl(g), y.forEach(function(v, T) {
          !(x.isUndefined(v) || v === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Ws([g], T, s) : i === null ? g : g + "[]",
            c(v)
          );
        }), !1;
    }
    return Bo(m) ? !0 : (t.append(Ws(b, g, s), c(m)), !1);
  }
  const d = [], f = Object.assign(Tm, {
    defaultVisitor: u,
    convertValue: c,
    isVisitable: Bo
  });
  function h(m, g) {
    if (!x.isUndefined(m)) {
      if (d.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      d.push(m), x.forEach(m, function(y, w) {
        (!(x.isUndefined(y) || y === null) && o.call(
          t,
          y,
          x.isString(w) ? w.trim() : w,
          g,
          f
        )) === !0 && h(y, g ? g.concat(w) : [w]);
      }), d.pop();
    }
  }
  if (!x.isObject(e))
    throw new TypeError("data must be an object");
  return h(e), t;
}
function Hs(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function Ci(e, t) {
  this._pairs = [], e && zr(e, this, t);
}
const Xl = Ci.prototype;
Xl.append = function(t, n) {
  this._pairs.push([t, n]);
};
Xl.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Hs);
  } : Hs;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function Sm(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Jl(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || Sm, o = n && n.serialize;
  let s;
  if (o ? s = o(t, n) : s = x.isURLSearchParams(t) ? t.toString() : new Ci(t, n).toString(r), s) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class Cm {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    x.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const qs = Cm, Zl = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Am = typeof URLSearchParams < "u" ? URLSearchParams : Ci, Pm = typeof FormData < "u" ? FormData : null, Rm = typeof Blob < "u" ? Blob : null, km = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Am,
    FormData: Pm,
    Blob: Rm
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ql = typeof window < "u" && typeof document < "u", Om = ((e) => Ql && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), _m = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), Lm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ql,
  hasStandardBrowserEnv: Om,
  hasStandardBrowserWebWorkerEnv: _m
}, Symbol.toStringTag, { value: "Module" })), ot = {
  ...Lm,
  ...km
};
function Dm(e, t) {
  return zr(e, new ot.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, o, s) {
      return ot.isNode && x.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Vm(e) {
  return x.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Fm(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let s;
  for (r = 0; r < o; r++)
    s = n[r], t[s] = e[s];
  return t;
}
function ec(e) {
  function t(n, r, o, s) {
    let i = n[s++];
    if (i === "__proto__")
      return !0;
    const a = Number.isFinite(+i), l = s >= n.length;
    return i = !i && x.isArray(o) ? o.length : i, l ? (x.hasOwnProp(o, i) ? o[i] = [o[i], r] : o[i] = r, !a) : ((!o[i] || !x.isObject(o[i])) && (o[i] = []), t(n, r, o[i], s) && x.isArray(o[i]) && (o[i] = Fm(o[i])), !a);
  }
  if (x.isFormData(e) && x.isFunction(e.entries)) {
    const n = {};
    return x.forEachEntry(e, (r, o) => {
      t(Vm(r), o, n, 0);
    }), n;
  }
  return null;
}
function Mm(e, t, n) {
  if (x.isString(e))
    try {
      return (t || JSON.parse)(e), x.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const Ai = {
  transitional: Zl,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, s = x.isObject(t);
    if (s && x.isHTMLForm(t) && (t = new FormData(t)), x.isFormData(t))
      return o ? JSON.stringify(ec(t)) : t;
    if (x.isArrayBuffer(t) || x.isBuffer(t) || x.isStream(t) || x.isFile(t) || x.isBlob(t))
      return t;
    if (x.isArrayBufferView(t))
      return t.buffer;
    if (x.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (s) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Dm(t, this.formSerializer).toString();
      if ((a = x.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return zr(
          a ? { "files[]": t } : t,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return s || o ? (n.setContentType("application/json", !1), Mm(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Ai.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (t && x.isString(t) && (r && !this.responseType || o)) {
      const i = !(n && n.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (a) {
        if (i)
          throw a.name === "SyntaxError" ? K.from(a, K.ERR_BAD_RESPONSE, this, null, this.response) : a;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: ot.classes.FormData,
    Blob: ot.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
x.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Ai.headers[e] = {};
});
const Pi = Ai, Bm = x.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), Im = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(i) {
    o = i.indexOf(":"), n = i.substring(0, o).trim().toLowerCase(), r = i.substring(o + 1).trim(), !(!n || t[n] && Bm[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Ks = Symbol("internals");
function Rn(e) {
  return e && String(e).trim().toLowerCase();
}
function ur(e) {
  return e === !1 || e == null ? e : x.isArray(e) ? e.map(ur) : String(e);
}
function $m(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const jm = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function fo(e, t, n, r, o) {
  if (x.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!x.isString(t)) {
    if (x.isString(r))
      return t.indexOf(r) !== -1;
    if (x.isRegExp(r))
      return r.test(t);
  }
}
function Nm(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Um(e, t) {
  const n = x.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(o, s, i) {
        return this[r].call(this, t, o, s, i);
      },
      configurable: !0
    });
  });
}
class Wr {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function s(a, l, c) {
      const u = Rn(l);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const d = x.findKey(o, u);
      (!d || o[d] === void 0 || c === !0 || c === void 0 && o[d] !== !1) && (o[d || l] = ur(a));
    }
    const i = (a, l) => x.forEach(a, (c, u) => s(c, u, l));
    return x.isPlainObject(t) || t instanceof this.constructor ? i(t, n) : x.isString(t) && (t = t.trim()) && !jm(t) ? i(Im(t), n) : t != null && s(n, t, r), this;
  }
  get(t, n) {
    if (t = Rn(t), t) {
      const r = x.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return $m(o);
        if (x.isFunction(n))
          return n.call(this, o, r);
        if (x.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Rn(t), t) {
      const r = x.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || fo(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function s(i) {
      if (i = Rn(i), i) {
        const a = x.findKey(r, i);
        a && (!n || fo(r, r[a], a, n)) && (delete r[a], o = !0);
      }
    }
    return x.isArray(t) ? t.forEach(s) : s(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const s = n[r];
      (!t || fo(this, this[s], s, t, !0)) && (delete this[s], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return x.forEach(this, (o, s) => {
      const i = x.findKey(r, s);
      if (i) {
        n[i] = ur(o), delete n[s];
        return;
      }
      const a = t ? Nm(s) : String(s).trim();
      a !== s && delete n[s], n[a] = ur(o), r[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return x.forEach(this, (r, o) => {
      r != null && r !== !1 && (n[o] = t && x.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[Ks] = this[Ks] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function s(i) {
      const a = Rn(i);
      r[a] || (Um(o, i), r[a] = !0);
    }
    return x.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
Wr.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
x.reduceDescriptors(Wr.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
x.freezeMethods(Wr);
const bt = Wr;
function ho(e, t) {
  const n = this || Pi, r = t || n, o = bt.from(r.headers);
  let s = r.data;
  return x.forEach(e, function(a) {
    s = a.call(n, s, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), s;
}
function tc(e) {
  return !!(e && e.__CANCEL__);
}
function Xn(e, t, n) {
  K.call(this, e ?? "canceled", K.ERR_CANCELED, t, n), this.name = "CanceledError";
}
x.inherits(Xn, K, {
  __CANCEL__: !0
});
function zm(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new K(
    "Request failed with status code " + n.status,
    [K.ERR_BAD_REQUEST, K.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const Wm = ot.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, o, s) {
      const i = [e + "=" + encodeURIComponent(t)];
      x.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), x.isString(r) && i.push("path=" + r), x.isString(o) && i.push("domain=" + o), s === !0 && i.push("secure"), document.cookie = i.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function Hm(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function qm(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function nc(e, t) {
  return e && !Hm(t) ? qm(e, t) : t;
}
const Km = ot.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let r;
    function o(s) {
      let i = s;
      return t && (n.setAttribute("href", i), i = n.href), n.setAttribute("href", i), {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
      };
    }
    return r = o(window.location.href), function(i) {
      const a = x.isString(i) ? o(i) : i;
      return a.protocol === r.protocol && a.host === r.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  function() {
    return function() {
      return !0;
    };
  }()
);
function Ym(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Gm(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let o = 0, s = 0, i;
  return t = t !== void 0 ? t : 1e3, function(l) {
    const c = Date.now(), u = r[s];
    i || (i = c), n[o] = l, r[o] = c;
    let d = s, f = 0;
    for (; d !== o; )
      f += n[d++], d = d % e;
    if (o = (o + 1) % e, o === s && (s = (s + 1) % e), c - i < t)
      return;
    const h = u && c - u;
    return h ? Math.round(f * 1e3 / h) : void 0;
  };
}
function Ys(e, t) {
  let n = 0;
  const r = Gm(50, 250);
  return (o) => {
    const s = o.loaded, i = o.lengthComputable ? o.total : void 0, a = s - n, l = r(a), c = s <= i;
    n = s;
    const u = {
      loaded: s,
      total: i,
      progress: i ? s / i : void 0,
      bytes: a,
      rate: l || void 0,
      estimated: l && i && c ? (i - s) / l : void 0,
      event: o
    };
    u[t ? "download" : "upload"] = !0, e(u);
  };
}
const Xm = typeof XMLHttpRequest < "u", Jm = Xm && function(e) {
  return new Promise(function(n, r) {
    let o = e.data;
    const s = bt.from(e.headers).normalize();
    let { responseType: i, withXSRFToken: a } = e, l;
    function c() {
      e.cancelToken && e.cancelToken.unsubscribe(l), e.signal && e.signal.removeEventListener("abort", l);
    }
    let u;
    if (x.isFormData(o)) {
      if (ot.hasStandardBrowserEnv || ot.hasStandardBrowserWebWorkerEnv)
        s.setContentType(!1);
      else if ((u = s.getContentType()) !== !1) {
        const [g, ...b] = u ? u.split(";").map((y) => y.trim()).filter(Boolean) : [];
        s.setContentType([g || "multipart/form-data", ...b].join("; "));
      }
    }
    let d = new XMLHttpRequest();
    if (e.auth) {
      const g = e.auth.username || "", b = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      s.set("Authorization", "Basic " + btoa(g + ":" + b));
    }
    const f = nc(e.baseURL, e.url);
    d.open(e.method.toUpperCase(), Jl(f, e.params, e.paramsSerializer), !0), d.timeout = e.timeout;
    function h() {
      if (!d)
        return;
      const g = bt.from(
        "getAllResponseHeaders" in d && d.getAllResponseHeaders()
      ), y = {
        data: !i || i === "text" || i === "json" ? d.responseText : d.response,
        status: d.status,
        statusText: d.statusText,
        headers: g,
        config: e,
        request: d
      };
      zm(function(v) {
        n(v), c();
      }, function(v) {
        r(v), c();
      }, y), d = null;
    }
    if ("onloadend" in d ? d.onloadend = h : d.onreadystatechange = function() {
      !d || d.readyState !== 4 || d.status === 0 && !(d.responseURL && d.responseURL.indexOf("file:") === 0) || setTimeout(h);
    }, d.onabort = function() {
      d && (r(new K("Request aborted", K.ECONNABORTED, e, d)), d = null);
    }, d.onerror = function() {
      r(new K("Network Error", K.ERR_NETWORK, e, d)), d = null;
    }, d.ontimeout = function() {
      let b = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const y = e.transitional || Zl;
      e.timeoutErrorMessage && (b = e.timeoutErrorMessage), r(new K(
        b,
        y.clarifyTimeoutError ? K.ETIMEDOUT : K.ECONNABORTED,
        e,
        d
      )), d = null;
    }, ot.hasStandardBrowserEnv && (a && x.isFunction(a) && (a = a(e)), a || a !== !1 && Km(f))) {
      const g = e.xsrfHeaderName && e.xsrfCookieName && Wm.read(e.xsrfCookieName);
      g && s.set(e.xsrfHeaderName, g);
    }
    o === void 0 && s.setContentType(null), "setRequestHeader" in d && x.forEach(s.toJSON(), function(b, y) {
      d.setRequestHeader(y, b);
    }), x.isUndefined(e.withCredentials) || (d.withCredentials = !!e.withCredentials), i && i !== "json" && (d.responseType = e.responseType), typeof e.onDownloadProgress == "function" && d.addEventListener("progress", Ys(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && d.upload && d.upload.addEventListener("progress", Ys(e.onUploadProgress)), (e.cancelToken || e.signal) && (l = (g) => {
      d && (r(!g || g.type ? new Xn(null, e, d) : g), d.abort(), d = null);
    }, e.cancelToken && e.cancelToken.subscribe(l), e.signal && (e.signal.aborted ? l() : e.signal.addEventListener("abort", l)));
    const m = Ym(f);
    if (m && ot.protocols.indexOf(m) === -1) {
      r(new K("Unsupported protocol " + m + ":", K.ERR_BAD_REQUEST, e));
      return;
    }
    d.send(o || null);
  });
}, Io = {
  http: xm,
  xhr: Jm
};
x.forEach(Io, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Gs = (e) => `- ${e}`, Zm = (e) => x.isFunction(e) || e === null || e === !1, rc = {
  getAdapter: (e) => {
    e = x.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const o = {};
    for (let s = 0; s < t; s++) {
      n = e[s];
      let i;
      if (r = n, !Zm(n) && (r = Io[(i = String(n)).toLowerCase()], r === void 0))
        throw new K(`Unknown adapter '${i}'`);
      if (r)
        break;
      o[i || "#" + s] = r;
    }
    if (!r) {
      const s = Object.entries(o).map(
        ([a, l]) => `adapter ${a} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? s.length > 1 ? `since :
` + s.map(Gs).join(`
`) : " " + Gs(s[0]) : "as no adapter specified";
      throw new K(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Io
};
function po(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Xn(null, e);
}
function Xs(e) {
  return po(e), e.headers = bt.from(e.headers), e.data = ho.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), rc.getAdapter(e.adapter || Pi.adapter)(e).then(function(r) {
    return po(e), r.data = ho.call(
      e,
      e.transformResponse,
      r
    ), r.headers = bt.from(r.headers), r;
  }, function(r) {
    return tc(r) || (po(e), r && r.response && (r.response.data = ho.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = bt.from(r.response.headers))), Promise.reject(r);
  });
}
const Js = (e) => e instanceof bt ? e.toJSON() : e;
function gn(e, t) {
  t = t || {};
  const n = {};
  function r(c, u, d) {
    return x.isPlainObject(c) && x.isPlainObject(u) ? x.merge.call({ caseless: d }, c, u) : x.isPlainObject(u) ? x.merge({}, u) : x.isArray(u) ? u.slice() : u;
  }
  function o(c, u, d) {
    if (x.isUndefined(u)) {
      if (!x.isUndefined(c))
        return r(void 0, c, d);
    } else
      return r(c, u, d);
  }
  function s(c, u) {
    if (!x.isUndefined(u))
      return r(void 0, u);
  }
  function i(c, u) {
    if (x.isUndefined(u)) {
      if (!x.isUndefined(c))
        return r(void 0, c);
    } else
      return r(void 0, u);
  }
  function a(c, u, d) {
    if (d in t)
      return r(c, u);
    if (d in e)
      return r(void 0, c);
  }
  const l = {
    url: s,
    method: s,
    data: s,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: a,
    headers: (c, u) => o(Js(c), Js(u), !0)
  };
  return x.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const d = l[u] || o, f = d(e[u], t[u], u);
    x.isUndefined(f) && d !== a || (n[u] = f);
  }), n;
}
const oc = "1.6.7", Ri = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ri[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Zs = {};
Ri.transitional = function(t, n, r) {
  function o(s, i) {
    return "[Axios v" + oc + "] Transitional option '" + s + "'" + i + (r ? ". " + r : "");
  }
  return (s, i, a) => {
    if (t === !1)
      throw new K(
        o(i, " has been removed" + (n ? " in " + n : "")),
        K.ERR_DEPRECATED
      );
    return n && !Zs[i] && (Zs[i] = !0, console.warn(
      o(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(s, i, a) : !0;
  };
};
function Qm(e, t, n) {
  if (typeof e != "object")
    throw new K("options must be an object", K.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const s = r[o], i = t[s];
    if (i) {
      const a = e[s], l = a === void 0 || i(a, s, e);
      if (l !== !0)
        throw new K("option " + s + " must be " + l, K.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new K("Unknown option " + s, K.ERR_BAD_OPTION);
  }
}
const $o = {
  assertOptions: Qm,
  validators: Ri
}, _t = $o.validators;
class Tr {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new qs(),
      response: new qs()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let o;
        Error.captureStackTrace ? Error.captureStackTrace(o = {}) : o = new Error();
        const s = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        r.stack ? s && !String(r.stack).endsWith(s.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + s) : r.stack = s;
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = gn(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: s } = n;
    r !== void 0 && $o.assertOptions(r, {
      silentJSONParsing: _t.transitional(_t.boolean),
      forcedJSONParsing: _t.transitional(_t.boolean),
      clarifyTimeoutError: _t.transitional(_t.boolean)
    }, !1), o != null && (x.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : $o.assertOptions(o, {
      encode: _t.function,
      serialize: _t.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = s && x.merge(
      s.common,
      s[n.method]
    );
    s && x.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (m) => {
        delete s[m];
      }
    ), n.headers = bt.concat(i, s);
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function(g) {
      typeof g.runWhen == "function" && g.runWhen(n) === !1 || (l = l && g.synchronous, a.unshift(g.fulfilled, g.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(g) {
      c.push(g.fulfilled, g.rejected);
    });
    let u, d = 0, f;
    if (!l) {
      const m = [Xs.bind(this), void 0];
      for (m.unshift.apply(m, a), m.push.apply(m, c), f = m.length, u = Promise.resolve(n); d < f; )
        u = u.then(m[d++], m[d++]);
      return u;
    }
    f = a.length;
    let h = n;
    for (d = 0; d < f; ) {
      const m = a[d++], g = a[d++];
      try {
        h = m(h);
      } catch (b) {
        g.call(this, b);
        break;
      }
    }
    try {
      u = Xs.call(this, h);
    } catch (m) {
      return Promise.reject(m);
    }
    for (d = 0, f = c.length; d < f; )
      u = u.then(c[d++], c[d++]);
    return u;
  }
  getUri(t) {
    t = gn(this.defaults, t);
    const n = nc(t.baseURL, t.url);
    return Jl(n, t.params, t.paramsSerializer);
  }
}
x.forEach(["delete", "get", "head", "options"], function(t) {
  Tr.prototype[t] = function(n, r) {
    return this.request(gn(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
x.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(s, i, a) {
      return this.request(gn(a || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: i
      }));
    };
  }
  Tr.prototype[t] = n(), Tr.prototype[t + "Form"] = n(!0);
});
const dr = Tr;
class ki {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(s) {
      n = s;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners)
        return;
      let s = r._listeners.length;
      for (; s-- > 0; )
        r._listeners[s](o);
      r._listeners = null;
    }), this.promise.then = (o) => {
      let s;
      const i = new Promise((a) => {
        r.subscribe(a), s = a;
      }).then(o);
      return i.cancel = function() {
        r.unsubscribe(s);
      }, i;
    }, t(function(s, i, a) {
      r.reason || (r.reason = new Xn(s, i, a), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new ki(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
const eg = ki;
function tg(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function ng(e) {
  return x.isObject(e) && e.isAxiosError === !0;
}
const jo = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(jo).forEach(([e, t]) => {
  jo[t] = e;
});
const rg = jo;
function ic(e) {
  const t = new dr(e), n = $l(dr.prototype.request, t);
  return x.extend(n, dr.prototype, t, { allOwnKeys: !0 }), x.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return ic(gn(e, o));
  }, n;
}
const pe = ic(Pi);
pe.Axios = dr;
pe.CanceledError = Xn;
pe.CancelToken = eg;
pe.isCancel = tc;
pe.VERSION = oc;
pe.toFormData = zr;
pe.AxiosError = K;
pe.Cancel = pe.CanceledError;
pe.all = function(t) {
  return Promise.all(t);
};
pe.spread = tg;
pe.isAxiosError = ng;
pe.mergeConfig = gn;
pe.AxiosHeaders = bt;
pe.formToJSON = (e) => ec(x.isHTMLForm(e) ? new FormData(e) : e);
pe.getAdapter = rc.getAdapter;
pe.HttpStatusCode = rg;
pe.default = pe;
const og = pe;
function ig({
  children: e,
  img: t,
  outline: n,
  hideSquircle: r = !1,
  ...o
}) {
  const [s, i] = Y(), a = ze(() => jp(), [t]);
  return $(() => {
    (async () => {
      if (!t || r)
        return i(t);
      try {
        const d = (await og.get(t, { responseType: "blob" })).data, f = new FileReader();
        f.onloadend = () => {
          const h = f.result;
          typeof h == "string" && i(h);
        }, f.readAsDataURL(d);
      } catch (u) {
        console.error("Error loading image:", u), i(void 0);
      }
    })();
  }, [t]), /* @__PURE__ */ Q(sg, { ...o, children: [
    !r && /* @__PURE__ */ Q(
      ag,
      {
        width: "60",
        height: "60",
        viewBox: "0 0 60 60",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          s && /* @__PURE__ */ S("defs", { children: /* @__PURE__ */ S(
            "pattern",
            {
              id: a,
              patternUnits: "userSpaceOnUse",
              width: "60",
              height: "60",
              children: /* @__PURE__ */ S(
                "image",
                {
                  xlinkHref: s,
                  x: "0",
                  y: "0",
                  width: "60",
                  height: "60",
                  preserveAspectRatio: "xMidYMid slice"
                }
              )
            }
          ) }),
          /* @__PURE__ */ S(
            "path",
            {
              d: n ? "M1 30C1 23.8466 1.33102 18.97 2.18954 15.107C3.04554 11.2554 4.41259 8.47287 6.44273 6.44273C8.47287 4.41259 11.2554 3.04554 15.107 2.18954C18.97 1.33102 23.8466 1 30 1C36.1534 1 41.03 1.33102 44.893 2.18954C48.7446 3.04554 51.5271 4.41259 53.5573 6.44273C55.5874 8.47287 56.9545 11.2554 57.8105 15.107C58.669 18.97 59 23.8466 59 30C59 36.1534 58.669 41.03 57.8105 44.893C56.9545 48.7446 55.5874 51.5271 53.5573 53.5573C51.5271 55.5874 48.7446 56.9545 44.893 57.8105C41.03 58.669 36.1534 59 30 59C23.8466 59 18.97 58.669 15.107 57.8105C11.2554 56.9545 8.47287 55.5874 6.44273 53.5573C4.41259 51.5271 3.04554 48.7446 2.18954 44.893C1.33102 41.03 1 36.1534 1 30Z" : "M0 30C0 5.295 5.295 0 30 0C54.705 0 60 5.295 60 30C60 54.705 54.705 60 30 60C5.295 60 0 54.705 0 30Z",
              fill: s ? `url(#${a})` : "currentColor",
              strokeWidth: n ? 2 : void 0,
              stroke: n
            }
          )
        ]
      }
    ),
    e
  ] });
}
const sg = R.div`
  position: relative;
  width: 1rem;
  height: 1rem;
  color: rgb(${(e) => e.theme.theme});
`, ag = R.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
function fy({
  children: e,
  small: t = !1,
  active: n,
  height: r,
  padding: o = 8,
  title: s,
  titleStyle: i,
  subtitle: a,
  subtitleStyle: l,
  subtitleExtra: c,
  subtitleExtraStyle: u,
  img: d,
  icon: f,
  leftIcon: h,
  rightIcon: m,
  dragControls: g,
  expandableContent: b,
  expandedText: y = "Hide",
  collapsedText: w = "Show",
  expandable: v = !1,
  showArrow: T = !1,
  squircleSize: P = t ? 32 : 48,
  hideSquircle: O = !1,
  ...M
}) {
  const [N, G] = Y(!1), z = ze(() => r || (!O && P ? P + 2 * (o ?? 8) : t ? 36 : 48), [r, t, P, O, o]);
  return /* @__PURE__ */ Q(
    lg,
    {
      small: t,
      active: n,
      height: z,
      padding: o,
      ...M,
      children: [
        /* @__PURE__ */ Q(cg, { height: z, children: [
          /* @__PURE__ */ Q(dg, { children: [
            (h || f || d || e) && (!O || d ? /* @__PURE__ */ S(Qs, { small: t, img: d, squircleSize: P, children: /* @__PURE__ */ S(ea, { children: h || f || e }) }) : /* @__PURE__ */ S(
              "div",
              {
                style: { flexShrink: 0, display: "flex", alignItems: "center" },
                children: h || f || e
              }
            )),
            /* @__PURE__ */ Q("div", { style: { width: "100%" }, children: [
              typeof s == "string" ? /* @__PURE__ */ S(fg, { small: t, style: i, children: s }) : s,
              a && (typeof a == "string" ? /* @__PURE__ */ S(hg, { small: t, style: l, children: a }) : a)
            ] })
          ] }),
          /* @__PURE__ */ Q(gg, { children: [
            c && /* @__PURE__ */ S(pg, { small: t, style: u, children: c }),
            m && (O ? m : /* @__PURE__ */ S(Qs, { small: t, squircleSize: P, children: /* @__PURE__ */ S(ea, { children: m }) })),
            !g && T && /* @__PURE__ */ S(mg, {}),
            g && /* @__PURE__ */ S(Dp, { dragControls: g })
          ] })
        ] }),
        v && /* @__PURE__ */ Q(bn, { children: [
          /* @__PURE__ */ Q(
            yg,
            {
              expanded: N,
              onClick: (te) => {
                te.stopPropagation(), G((ce) => !ce);
              },
              children: [
                /* @__PURE__ */ S(ta, { active: n }),
                /* @__PURE__ */ Q(
                  "div",
                  {
                    style: {
                      display: "flex",
                      gap: 4,
                      alignItems: "center",
                      justifyContent: "center"
                    },
                    children: [
                      /* @__PURE__ */ S(
                        wn,
                        {
                          style: { whiteSpace: "nowrap" },
                          variant: "secondary",
                          size: "xs",
                          weight: "medium",
                          noMargin: !0,
                          children: N ? y : w
                        }
                      ),
                      /* @__PURE__ */ S(vg, { as: N ? Jc : kr })
                    ]
                  }
                ),
                /* @__PURE__ */ S(ta, { active: n })
              ]
            }
          ),
          /* @__PURE__ */ S(
            Un.div,
            {
              initial: !1,
              animate: {
                height: N ? "auto" : 0,
                opacity: N ? 1 : 0
              },
              transition: {
                duration: 0.3,
                ease: "easeInOut",
                opacity: { duration: 0.2, delay: N ? 0.1 : 0 }
              },
              style: { overflow: "hidden" },
              onClick: (te) => te.stopPropagation(),
              children: /* @__PURE__ */ S($r, { mode: "wait", children: N && /* @__PURE__ */ S(
                Un.div,
                {
                  initial: { opacity: 0, y: -10 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -10 },
                  transition: {
                    duration: 0.25,
                    ease: "easeOut"
                  },
                  children: /* @__PURE__ */ S(ug, { children: b })
                },
                "expandable-content"
              ) })
            }
          )
        ] })
      ]
    }
  );
}
const lg = R.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 12px;
  overflow: hidden;
  padding: ${(e) => e.padding}px;
  box-sizing: border-box;
  transition: all 0.23s ease-in-out;

  background-color: ${(e) => e.active ? e.theme.listItem.active : "none"};

  &:hover {
    background-color: ${(e) => e.theme.listItem.hover};
  }
`, cg = R.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  cursor: pointer;
  height: ${(e) => e.height};
  width: 100%;
`, ug = R.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`, dg = R.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 12px;
`, Qs = R(ig)`
  position: relative;
  flex-shrink: 0;
  width: ${(e) => e.squircleSize}px;
  height: ${(e) => e.squircleSize}px;
  color: ${(e) => e.theme.theme};
`, fg = R(wn).attrs({
  noMargin: !0,
  weight: "semibold"
})`
  font-size: ${(e) => e.small ? "16px" : "18px"};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 250px;
`, hg = R(wn).attrs({
  noMargin: !0,
  variant: "secondary",
  weight: "medium"
})`
  font-size: ${(e) => e.small ? "12px" : "14px"};
`, pg = R(wn).attrs({
  noMargin: !0,
  variant: "secondary",
  weight: "medium"
})`
  font-size: ${(e) => e.small ? "14px" : "16px"};
`, mg = R(Xc)`
  color: ${(e) => e.theme.listItem.icon};
  width: 24px;
  height: 24px;
`, ea = R.div`
  position: absolute;
  font-size: 1.5rem;
  width: 1em;
  height: 1em;
  color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`, hy = R.img.attrs({
  alt: "icon",
  draggable: !1
})`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1.5rem;
  user-select: none;
  transform: translate(-50%, -50%);
`, gg = R.div`
  display: flex;
  align-items: center;
  gap: 8px;
`, yg = R.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 0.5rem;
  align-items: center;
  padding: ${(e) => `1rem 0 ${e.expanded ? "1rem" : "0"} 0`};
  cursor: pointer;

  transition: all 0.23s ease-in-out;

  &:hover {
    opacity: 0.85;
  }

  &:active {
    transform: scale(0.92);
  }
`, vg = R(kr)`
  cursor: pointer;
  font-size: 1.25rem;
  width: 1rem;
  height: 1rem;
  color: ${(e) => e.theme.tertiaryText};
`, ta = R.div`
  width: 100%;
  height: ${({ height: e }) => e || 1}px;
  background: ${({ theme: e, active: t }) => t ? e.borderDefault : e.borderSecondary};
  margin: ${({ marginVertical: e }) => e || 0}px 0;
`;
function bg(e) {
  return {
    top: {
      bottom: "133%",
      left: "50%",
      transform: "translate(-50%, 0)"
    },
    topStart: {
      bottom: "133%",
      left: "-37%"
    },
    topEnd: {
      bottom: "133%",
      right: "-37%"
    },
    bottom: {
      top: "133%",
      left: "50%",
      transform: "translate(-50%, 0)"
    },
    bottomStart: {
      top: "133%",
      left: "-37%"
    },
    bottomEnd: {
      top: "133%",
      right: "-37%"
    },
    left: {
      top: "50%",
      right: "125%",
      transform: "translate(0, -50%)"
    },
    right: {
      top: "50%",
      left: "125%",
      transform: "translate(0, -50%)"
    }
  }[e];
}
function py({
  children: e,
  content: t,
  position: n = "top",
  customPos: r,
  mode: o = "click",
  ...s
}) {
  const [i, a] = Y(!1);
  $(() => (document.addEventListener("mousedown", u), () => {
    document.removeEventListener("mousedown", u);
  }));
  const l = re(), c = re();
  function u(d) {
    var f, h;
    o === "click" && (!i && ((f = c.current) != null && f.contains(d.target)) ? a(!0) : i && !((h = l.current) != null && h.contains(d.target)) && (d.preventDefault(), d.stopPropagation(), a(!1)));
  }
  return /* @__PURE__ */ Q(
    wg,
    {
      onMouseEnter: () => {
        o === "hover" && a(!0);
      },
      onMouseLeave: () => {
        o === "hover" && a(!1);
      },
      ref: c,
      children: [
        /* @__PURE__ */ S($r, { children: i && /* @__PURE__ */ S(
          xg,
          {
            style: r || bg(n),
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 0.23, ease: "easeInOut" },
            ref: l,
            children: /* @__PURE__ */ S(ba, { ...s, children: t })
          }
        ) }),
        e
      ]
    }
  );
}
const wg = R.div`
  position: relative;
  display: inline-block;
`, xg = R(Un.div)`
  position: absolute;
  z-index: 100;
`, sc = jt({
  toasts: [],
  setToast() {
  }
}), Eg = () => be(sc);
let Tg = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
function Sg(e) {
  return /* @__PURE__ */ ee.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, e), /* @__PURE__ */ ee.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M4.75 12C4.75 7.99594 7.99594 4.75 12 4.75V4.75C16.0041 4.75 19.25 7.99594 19.25 12V12C19.25 16.0041 16.0041 19.25 12 19.25V19.25C7.99594 19.25 4.75 16.0041 4.75 12V12Z"
  }), /* @__PURE__ */ ee.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M9.75 12.75L10.1837 13.6744C10.5275 14.407 11.5536 14.4492 11.9564 13.7473L14.25 9.75"
  }));
}
function Cg(e) {
  return /* @__PURE__ */ ee.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, e), /* @__PURE__ */ ee.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M7.75 19.25H16.25C17.3546 19.25 18.25 18.3546 18.25 17.25V9L14 4.75H7.75C6.64543 4.75 5.75 5.64543 5.75 6.75V17.25C5.75 18.3546 6.64543 19.25 7.75 19.25Z"
  }), /* @__PURE__ */ ee.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M18 9.25H13.75V5"
  }));
}
function ac(e) {
  return /* @__PURE__ */ ee.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, e), /* @__PURE__ */ ee.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 13V15"
  }), /* @__PURE__ */ ee.createElement("circle", {
    cx: 12,
    cy: 9,
    r: 1,
    fill: "currentColor"
  }), /* @__PURE__ */ ee.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 7.25,
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5
  }));
}
function Ag(e) {
  return /* @__PURE__ */ ee.createElement("svg", Object.assign({
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, e), /* @__PURE__ */ ee.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 7.25,
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5
  }), /* @__PURE__ */ ee.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 4.25,
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5
  }), /* @__PURE__ */ ee.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 1.25,
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5
  }));
}
const Pg = (e) => {
  switch (e) {
    case "info":
      return ac;
    case "error":
      return Ag;
    default:
      return Sg;
  }
};
function Rg({
  children: e,
  duration: t,
  action: n,
  type: r = "info",
  close: o,
  addedAt: s,
  icon: i,
  showProgress: a = !1,
  progressColor: l,
  showIcon: c = !0,
  showCloseButton: u = !0
}) {
  const [d, f] = Y(100), h = re(100), m = re(Date.now()), g = Mt(async () => {
    n && (await n.task(), o());
  }, [n, o]);
  return $(() => {
    if (!a)
      return;
    const y = s + t;
    let w;
    m.current = Date.now();
    const v = () => {
      const T = Date.now(), P = Math.max(0, y - T);
      if (T - m.current >= 16) {
        const O = P / t * 100;
        Math.abs(O - h.current) >= 1 && (f(O), h.current = O), m.current = T;
      }
      P > 0 && (w = requestAnimationFrame(v));
    };
    return v(), () => {
      w && cancelAnimationFrame(w);
    };
  }, [s, t, a]), /* @__PURE__ */ Q(kg, { children: [
    /* @__PURE__ */ Q(_g, { children: [
      c && (i || /* @__PURE__ */ S(Lg, { as: Pg(r), type: r })),
      /* @__PURE__ */ S(Dg, { children: e })
    ] }),
    /* @__PURE__ */ Q(Vg, { children: [
      n && /* @__PURE__ */ S(uc, { onClick: g, children: n.name }),
      u && /* @__PURE__ */ S(Fg, { onClick: o, children: /* @__PURE__ */ S(Mg, {}) })
    ] }),
    a && d > 0 && /* @__PURE__ */ S(Og, { type: r, progress: d, color: l })
  ] });
}
const lc = ".25rem", kg = R(Un.div).attrs({
  initial: {
    opacity: 0,
    translateY: "-100%",
    scale: 0.85,
    transition: {
      ease: "easeInOut",
      duration: 0.23
    }
  },
  animate: {
    opacity: 1,
    translateY: 0,
    scale: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.23
    }
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.23
    }
  }
})`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  color: #fff;
  font-weight: 500;
  background-color: ${(e) => e.theme.displayTheme === "light" ? "black" : e.theme.cardBackground};
  border-radius: 8px;
  //padding: .5rem 1.1rem calc(.5rem + ${lc});
  padding: 0.5rem 0.75rem;
  width: calc(100% - 2.2rem);
  overflow: hidden;
  border: ${(e) => e.theme.displayTheme === "light" ? "none" : "2px solid rgb(" + e.theme.cardBorder + ")"};
  transition: all 0.23s ease-in-out;
`, cc = {
  success: (e) => e.theme.success,
  error: (e) => e.theme.fail,
  info: (e) => e.theme.theme
}, Og = R.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: ${lc};
  width: ${(e) => e.progress || "100"}%;
  background: ${(e) => e.color || cc[e.type](e)};
  will-change: width;
`, Sr = ".35rem", _g = R.div`
  display: flex;
  align-items: center;
  gap: 0.45rem;
`, Lg = R(ac)`
  font-size: 1.25rem;
  width: 1em;
  height: 1em;
  flex-shrink: 0;
  color: ${(e) => cc[e.type](e)};
`, Dg = R.div`
  padding: ${Sr} 0;
`, Vg = R.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`, No = "1rem", uc = R.button`
  font-size: ${No};
  font-weight: 500;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  padding: ${Sr} 0.9rem;
  background-color: transparent;
  transition: all 0.23s ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.22);
  }
`, Fg = R(uc)`
  position: relative;
  border-radius: 100%;
  padding: 0;
  width: calc(${Sr} * 2 + ${No});
  height: calc(${Sr} * 2 + ${No});
`, Mg = R(wa)`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 1.2em;
  width: 1em;
  height: 1em;
  color: #fff;
  transform: translate(-50%, -50%);
`, Bg = {
  top: `
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
  `,
  bottom: `
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
  `
}, Ig = ({ setToasts: e }) => {
  const { toasts: t } = Eg(), n = Mt(
    (s) => {
      e((i) => i.filter((a) => a.id !== s));
    },
    [e]
  ), r = Mt(
    (s, i) => typeof s == "function" ? s({ close: () => n(i) }) : s,
    [n]
  ), o = ze(() => t.reduce((s, i) => {
    const a = i.position || "bottom";
    return s[a] || (s[a] = []), s[a].push(i), s;
  }, {}), [t]);
  return /* @__PURE__ */ S(bn, { children: Object.entries(o).map(([s, i]) => /* @__PURE__ */ S($g, { position: s, children: /* @__PURE__ */ S($r, { children: i.map((a) => /* @__PURE__ */ S(
    Rg,
    {
      action: a.action,
      duration: a.duration,
      type: a.type,
      close: () => n(a.id),
      addedAt: a.addedAt,
      showProgress: a.showProgress,
      progressColor: a.progressColor,
      showIcon: a.showIcon,
      icon: a.icon,
      showCloseButton: a.showCloseButton,
      children: r(a.content, a.id)
    },
    a.id
  )) }) }, s)) });
}, $g = R.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  ${(e) => Bg[e.position]}
  max-width: calc(100% - 2rem);
  width: 420px;
  z-index: 10000;
`, my = {
  displayTheme: "light",
  theme: "#6B57F9",
  primaryText: "#121212",
  secondaryText: "#666",
  tertiaryText: "#838383",
  cardBorder: "235, 235, 241",
  background: "255, 255, 255",
  cardBackground: "#FFF",
  // New styles:
  backgroundv2: "#FFFFFF",
  primary: "#6B57F9",
  primaryBtnHover: "#5647A0",
  secondaryBtnHover: "#DDD9F4",
  secondaryItemHover: "#EBE8F8",
  buttonDisabled: "#BCB3E9",
  primaryTextv2: "#191919",
  secondaryTextv2: "#757575",
  buttonDisabledText: "#DDD9F4",
  inputField: "#757575",
  success: "#17A815",
  fail: "#D22B1F",
  backgroundSecondary: "#CCCCCC",
  delete: "#F58080",
  secondaryDelete: "#F58080",
  surfaceDefault: "#FFF",
  surfaceSecondaryPopup: "#FFFFFF",
  surfaceSecondary: "#F2F2F7",
  surfaceTertiary: "#f2f2f7",
  borderDefault: "#D6D6DD",
  borderSecondary: "#E4E4EB",
  button: {
    background: {
      primary: {
        default: "linear-gradient(47deg, #5842f8 5.41%, #6b57f9 96%)",
        hover: "#503ece",
        active: "#503ece",
        disabled: "#f5f4ff"
      },
      secondary: {
        default: "#F2F2F7",
        hover: "#EBEBF0",
        active: "#F2F2F7",
        disabled: "#F2F2F7"
      },
      secondaryAlt: {
        default: "#F5F4FF",
        hover: "#E3E1FA",
        active: "#F5F4FF",
        disabled: "#F5F4FF"
      }
    },
    text: {
      primary: "#fff",
      secondary: "#291C8B",
      secondaryAlt: "#291C8B",
      disabled: "#847eaf"
    },
    hoverBorder: {
      primary: "none",
      secondary: "1.5px solid #EBEBF0",
      secondaryAlt: "none"
    }
  },
  input: {
    background: {
      search: { default: "#f2f2f7", disabled: "#FFF", special: "#F2F2F7" },
      default: { default: "#f2f2f7", disabled: "#FFF" },
      dropdown: { default: "#FFF", disabled: "#FFF" }
    },
    border: {
      search: { disabled: "#E4E4EB", focused: "#D6D6DD", special: "#6B57F9" },
      default: { disabled: "#E4E4EB", focused: "#D6D6DD" },
      dropdown: { default: "#E4E4EB", disabled: "#E4E4EB", focused: "#D6D6DD" }
    },
    placeholder: {
      search: "#666666",
      default: "#666666",
      dropdown: "#121212"
    },
    icons: {
      searchActive: "#6B57F9",
      searchInactive: "#838383"
    }
  },
  listItem: {
    hover: "#F2F2F7",
    active: "#EBEBF0",
    icon: "#838383"
  }
}, gy = {
  displayTheme: "dark",
  theme: "#6B57F9",
  primaryText: "#EEE",
  secondaryText: "#AAA",
  tertiaryText: "#838383",
  cardBorder: "44, 44, 47",
  background: "18, 18, 18",
  cardBackground: "#121212",
  // New styles:
  backgroundv2: "#121212",
  primary: "#6B57F9",
  primaryBtnHover: "#6751D0",
  secondaryBtnHover: "#36324D",
  secondaryItemHover: "#2B2838",
  buttonDisabled: "#544A81",
  primaryTextv2: "#FFFFFF",
  secondaryTextv2: "#A3A3A3",
  buttonDisabledText: "#A9A4C0",
  inputField: "#847F90",
  success: "#56C980",
  fail: "#FF1A1A",
  backgroundSecondary: "#333333",
  delete: "#8C1A1A",
  secondaryDelete: "#C51A1A",
  surfaceDefault: "#121212",
  surfaceSecondaryPopup: "#1B1B1B",
  surfaceSecondary: "#242426",
  surfaceTertiary: "#2C2C2E",
  borderDefault: "#333",
  borderSecondary: "#2C2C2E",
  button: {
    background: {
      primary: {
        default: "linear-gradient(47deg, #5842F8 5.41%, #6B57F9 96%)",
        hover: "#503ece",
        active: "#503ece",
        disabled: "#2B2269"
      },
      secondary: {
        default: "#333336",
        hover: "#2C2C2E",
        active: "#333336",
        disabled: "#333336"
      },
      secondaryAlt: {
        default: "#403785",
        hover: "#2A2260",
        active: "#403785",
        disabled: "#403785"
      }
    },
    text: {
      primary: "#fff",
      secondary: "#EEE",
      secondaryAlt: "#EEE",
      disabled: "#8E8D97"
    },
    hoverBorder: {
      primary: "none",
      secondary: "1.5px solid #2C2C2E",
      secondaryAlt: "none"
    }
  },
  input: {
    background: {
      search: { default: "#2C2C2E", disabled: "#2C2C2E", special: "#2C2C2E" },
      default: { default: "#2C2C2E", disabled: "#2C2C2E" },
      dropdown: { default: "#242426", disabled: "#2C2C2E" }
    },
    border: {
      search: { disabled: "#2C2C2E", focused: "#333", special: "#6B57F9" },
      default: { disabled: "#2C2C2E", focused: "#333" },
      dropdown: { default: "#2C2C2E", disabled: "#2C2C2E", focused: "#333" }
    },
    placeholder: {
      search: "#AAAAAA",
      default: "#AAAAAA",
      dropdown: "#EEEEEE"
    },
    icons: {
      searchActive: "#9787FF",
      searchInactive: "#838383"
    }
  },
  listItem: {
    hover: "#242426",
    active: "#2C2C2E",
    icon: "#838383"
  }
};
function yy({
  children: e,
  theme: t
}) {
  const [n, r] = Y([]);
  function o(s) {
    const i = Tg();
    r((a) => [
      ...a,
      { ...s, id: i, addedAt: (/* @__PURE__ */ new Date()).getTime() }
    ]), setTimeout(
      () => r((a) => a.filter((l) => l.id !== i)),
      s.duration
    );
  }
  return /* @__PURE__ */ S(_c, { theme: t, children: /* @__PURE__ */ Q(sc.Provider, { value: { toasts: n, setToast: o }, children: [
    /* @__PURE__ */ S(Ig, { setToasts: r }),
    e
  ] }) });
}
const vy = R.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: ${({ showPaddingHorizontal: e = !0, showPaddingVertical: t = !0 }) => `${t ? "24px" : "0px"} ${e ? "24px" : "0px"}`};
`;
function by({
  children: e,
  label: t,
  fullWidth: n,
  small: r,
  status: o = "default",
  ...s
}) {
  const i = ze(
    () => ({ fullWidth: n, small: r, status: o, ...s }),
    [n, r, o, s]
  );
  return /* @__PURE__ */ Q(bn, { children: [
    t && /* @__PURE__ */ S(Ea, { children: t }),
    /* @__PURE__ */ Q(
      xa,
      {
        fullWidth: n,
        sizeVariant: "small",
        status: o ?? "default",
        children: [
          /* @__PURE__ */ S(jg, { ...i, children: e }),
          /* @__PURE__ */ S(yo, { position: "right", children: /* @__PURE__ */ S(vo, { as: kr }) })
        ]
      }
    )
  ] });
}
const jg = R.select`
  outline: none;
  border: none;
  background-color: transparent;
  color: ${(e) => e.theme.primaryText};

  font-size: 16px;
  font-weight: 500;
  padding: ${(e) => e.small ? "12px" : "12px 14px"};
  line-height: 22px;
  width: 100%;
  cursor: pointer;
  transition: all 0.23s ease-in-out;
  z-index: 15;

  -webkit-appearance: none;
  -moz-appearance: none;

  &::-ms-expand {
    display: none;
  }

  option {
  }
`, yn = Math.min, Gt = Math.max, Cr = Math.round, sr = Math.floor, st = (e) => ({
  x: e,
  y: e
}), Ng = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Ug = {
  start: "end",
  end: "start"
};
function Uo(e, t, n) {
  return Gt(e, yn(t, n));
}
function Jn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Xt(e) {
  return e.split("-")[0];
}
function Zn(e) {
  return e.split("-")[1];
}
function dc(e) {
  return e === "x" ? "y" : "x";
}
function Oi(e) {
  return e === "y" ? "height" : "width";
}
const zg = /* @__PURE__ */ new Set(["top", "bottom"]);
function Ft(e) {
  return zg.has(Xt(e)) ? "y" : "x";
}
function _i(e) {
  return dc(Ft(e));
}
function Wg(e, t, n) {
  n === void 0 && (n = !1);
  const r = Zn(e), o = _i(e), s = Oi(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (i = Ar(i)), [i, Ar(i)];
}
function Hg(e) {
  const t = Ar(e);
  return [zo(e), t, zo(t)];
}
function zo(e) {
  return e.replace(/start|end/g, (t) => Ug[t]);
}
const na = ["left", "right"], ra = ["right", "left"], qg = ["top", "bottom"], Kg = ["bottom", "top"];
function Yg(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? ra : na : t ? na : ra;
    case "left":
    case "right":
      return t ? qg : Kg;
    default:
      return [];
  }
}
function Gg(e, t, n, r) {
  const o = Zn(e);
  let s = Yg(Xt(e), n === "start", r);
  return o && (s = s.map((i) => i + "-" + o), t && (s = s.concat(s.map(zo)))), s;
}
function Ar(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Ng[t]);
}
function Xg(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function fc(e) {
  return typeof e != "number" ? Xg(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Pr(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function oa(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const s = Ft(t), i = _i(t), a = Oi(i), l = Xt(t), c = s === "y", u = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
  let h;
  switch (l) {
    case "top":
      h = {
        x: u,
        y: r.y - o.height
      };
      break;
    case "bottom":
      h = {
        x: u,
        y: r.y + r.height
      };
      break;
    case "right":
      h = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      h = {
        x: r.x - o.width,
        y: d
      };
      break;
    default:
      h = {
        x: r.x,
        y: r.y
      };
  }
  switch (Zn(t)) {
    case "start":
      h[i] -= f * (n && c ? -1 : 1);
      break;
    case "end":
      h[i] += f * (n && c ? -1 : 1);
      break;
  }
  return h;
}
const Jg = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: s = [],
    platform: i
  } = n, a = s.filter(Boolean), l = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let c = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: u,
    y: d
  } = oa(c, r, l), f = r, h = {}, m = 0;
  for (let g = 0; g < a.length; g++) {
    const {
      name: b,
      fn: y
    } = a[g], {
      x: w,
      y: v,
      data: T,
      reset: P
    } = await y({
      x: u,
      y: d,
      initialPlacement: r,
      placement: f,
      strategy: o,
      middlewareData: h,
      rects: c,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = w ?? u, d = v ?? d, h = {
      ...h,
      [b]: {
        ...h[b],
        ...T
      }
    }, P && m <= 50 && (m++, typeof P == "object" && (P.placement && (f = P.placement), P.rects && (c = P.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : P.rects), {
      x: u,
      y: d
    } = oa(c, f, l)), g = -1);
  }
  return {
    x: u,
    y: d,
    placement: f,
    strategy: o,
    middlewareData: h
  };
};
async function hc(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: s,
    rects: i,
    elements: a,
    strategy: l
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: d = "floating",
    altBoundary: f = !1,
    padding: h = 0
  } = Jn(t, e), m = fc(h), b = a[f ? d === "floating" ? "reference" : "floating" : d], y = Pr(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(b))) == null || n ? b : b.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: u,
    strategy: l
  })), w = d === "floating" ? {
    x: r,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, v = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating)), T = await (s.isElement == null ? void 0 : s.isElement(v)) ? await (s.getScale == null ? void 0 : s.getScale(v)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, P = Pr(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: w,
    offsetParent: v,
    strategy: l
  }) : w);
  return {
    top: (y.top - P.top + m.top) / T.y,
    bottom: (P.bottom - y.bottom + m.bottom) / T.y,
    left: (y.left - P.left + m.left) / T.x,
    right: (P.right - y.right + m.right) / T.x
  };
}
const Zg = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: s,
      platform: i,
      elements: a,
      middlewareData: l
    } = t, {
      element: c,
      padding: u = 0
    } = Jn(e, t) || {};
    if (c == null)
      return {};
    const d = fc(u), f = {
      x: n,
      y: r
    }, h = _i(o), m = Oi(h), g = await i.getDimensions(c), b = h === "y", y = b ? "top" : "left", w = b ? "bottom" : "right", v = b ? "clientHeight" : "clientWidth", T = s.reference[m] + s.reference[h] - f[h] - s.floating[m], P = f[h] - s.reference[h], O = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c));
    let M = O ? O[v] : 0;
    (!M || !await (i.isElement == null ? void 0 : i.isElement(O))) && (M = a.floating[v] || s.floating[m]);
    const N = T / 2 - P / 2, G = M / 2 - g[m] / 2 - 1, z = yn(d[y], G), te = yn(d[w], G), ce = z, oe = M - g[m] - te, B = M / 2 - g[m] / 2 + N, I = Uo(ce, B, oe), W = !l.arrow && Zn(o) != null && B !== I && s.reference[m] / 2 - (B < ce ? z : te) - g[m] / 2 < 0, Z = W ? B < ce ? B - ce : B - oe : 0;
    return {
      [h]: f[h] + Z,
      data: {
        [h]: I,
        centerOffset: B - I - Z,
        ...W && {
          alignmentOffset: Z
        }
      },
      reset: W
    };
  }
}), Qg = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: s,
        rects: i,
        initialPlacement: a,
        platform: l,
        elements: c
      } = t, {
        mainAxis: u = !0,
        crossAxis: d = !0,
        fallbackPlacements: f,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: g = !0,
        ...b
      } = Jn(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const y = Xt(o), w = Ft(a), v = Xt(a) === a, T = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), P = f || (v || !g ? [Ar(a)] : Hg(a)), O = m !== "none";
      !f && O && P.push(...Gg(a, g, m, T));
      const M = [a, ...P], N = await hc(t, b), G = [];
      let z = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (u && G.push(N[y]), d) {
        const B = Wg(o, i, T);
        G.push(N[B[0]], N[B[1]]);
      }
      if (z = [...z, {
        placement: o,
        overflows: G
      }], !G.every((B) => B <= 0)) {
        var te, ce;
        const B = (((te = s.flip) == null ? void 0 : te.index) || 0) + 1, I = M[B];
        if (I && (!(d === "alignment" ? w !== Ft(I) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        z.every((ie) => Ft(ie.placement) === w ? ie.overflows[0] > 0 : !0)))
          return {
            data: {
              index: B,
              overflows: z
            },
            reset: {
              placement: I
            }
          };
        let W = (ce = z.filter((Z) => Z.overflows[0] <= 0).sort((Z, ie) => Z.overflows[1] - ie.overflows[1])[0]) == null ? void 0 : ce.placement;
        if (!W)
          switch (h) {
            case "bestFit": {
              var oe;
              const Z = (oe = z.filter((ie) => {
                if (O) {
                  const we = Ft(ie.placement);
                  return we === w || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  we === "y";
                }
                return !0;
              }).map((ie) => [ie.placement, ie.overflows.filter((we) => we > 0).reduce((we, Ve) => we + Ve, 0)]).sort((ie, we) => ie[1] - we[1])[0]) == null ? void 0 : oe[0];
              Z && (W = Z);
              break;
            }
            case "initialPlacement":
              W = a;
              break;
          }
        if (o !== W)
          return {
            reset: {
              placement: W
            }
          };
      }
      return {};
    }
  };
}, e0 = /* @__PURE__ */ new Set(["left", "top"]);
async function t0(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = Xt(n), a = Zn(n), l = Ft(n) === "y", c = e0.has(i) ? -1 : 1, u = s && l ? -1 : 1, d = Jn(t, e);
  let {
    mainAxis: f,
    crossAxis: h,
    alignmentAxis: m
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return a && typeof m == "number" && (h = a === "end" ? m * -1 : m), l ? {
    x: h * u,
    y: f * c
  } : {
    x: f * c,
    y: h * u
  };
}
const n0 = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: s,
        placement: i,
        middlewareData: a
      } = t, l = await t0(t, e);
      return i === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
        x: o + l.x,
        y: s + l.y,
        data: {
          ...l,
          placement: i
        }
      };
    }
  };
}, r0 = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: s = !0,
        crossAxis: i = !1,
        limiter: a = {
          fn: (b) => {
            let {
              x: y,
              y: w
            } = b;
            return {
              x: y,
              y: w
            };
          }
        },
        ...l
      } = Jn(e, t), c = {
        x: n,
        y: r
      }, u = await hc(t, l), d = Ft(Xt(o)), f = dc(d);
      let h = c[f], m = c[d];
      if (s) {
        const b = f === "y" ? "top" : "left", y = f === "y" ? "bottom" : "right", w = h + u[b], v = h - u[y];
        h = Uo(w, h, v);
      }
      if (i) {
        const b = d === "y" ? "top" : "left", y = d === "y" ? "bottom" : "right", w = m + u[b], v = m - u[y];
        m = Uo(w, m, v);
      }
      const g = a.fn({
        ...t,
        [f]: h,
        [d]: m
      });
      return {
        ...g,
        data: {
          x: g.x - n,
          y: g.y - r,
          enabled: {
            [f]: s,
            [d]: i
          }
        }
      };
    }
  };
};
function Hr() {
  return typeof window < "u";
}
function En(e) {
  return pc(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Le(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ut(e) {
  var t;
  return (t = (pc(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function pc(e) {
  return Hr() ? e instanceof Node || e instanceof Le(e).Node : !1;
}
function qe(e) {
  return Hr() ? e instanceof Element || e instanceof Le(e).Element : !1;
}
function lt(e) {
  return Hr() ? e instanceof HTMLElement || e instanceof Le(e).HTMLElement : !1;
}
function ia(e) {
  return !Hr() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Le(e).ShadowRoot;
}
const o0 = /* @__PURE__ */ new Set(["inline", "contents"]);
function Qn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Ke(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !o0.has(o);
}
const i0 = /* @__PURE__ */ new Set(["table", "td", "th"]);
function s0(e) {
  return i0.has(En(e));
}
const a0 = [":popover-open", ":modal"];
function qr(e) {
  return a0.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const l0 = ["transform", "translate", "scale", "rotate", "perspective"], c0 = ["transform", "translate", "scale", "rotate", "perspective", "filter"], u0 = ["paint", "layout", "strict", "content"];
function Li(e) {
  const t = Di(), n = qe(e) ? Ke(e) : e;
  return l0.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || c0.some((r) => (n.willChange || "").includes(r)) || u0.some((r) => (n.contain || "").includes(r));
}
function d0(e) {
  let t = $t(e);
  for (; lt(t) && !vn(t); ) {
    if (Li(t))
      return t;
    if (qr(t))
      return null;
    t = $t(t);
  }
  return null;
}
function Di() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const f0 = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function vn(e) {
  return f0.has(En(e));
}
function Ke(e) {
  return Le(e).getComputedStyle(e);
}
function Kr(e) {
  return qe(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function $t(e) {
  if (En(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    ia(e) && e.host || // Fallback.
    ut(e)
  );
  return ia(t) ? t.host : t;
}
function mc(e) {
  const t = $t(e);
  return vn(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : lt(t) && Qn(t) ? t : mc(t);
}
function Wn(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = mc(e), s = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = Le(o);
  if (s) {
    const a = Wo(i);
    return t.concat(i, i.visualViewport || [], Qn(o) ? o : [], a && n ? Wn(a) : []);
  }
  return t.concat(o, Wn(o, [], n));
}
function Wo(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function gc(e) {
  const t = Ke(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = lt(e), s = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, a = Cr(n) !== s || Cr(r) !== i;
  return a && (n = s, r = i), {
    width: n,
    height: r,
    $: a
  };
}
function Vi(e) {
  return qe(e) ? e : e.contextElement;
}
function hn(e) {
  const t = Vi(e);
  if (!lt(t))
    return st(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: s
  } = gc(t);
  let i = (s ? Cr(n.width) : n.width) / r, a = (s ? Cr(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: i,
    y: a
  };
}
const h0 = /* @__PURE__ */ st(0);
function yc(e) {
  const t = Le(e);
  return !Di() || !t.visualViewport ? h0 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function p0(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Le(e) ? !1 : t;
}
function Jt(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = Vi(e);
  let i = st(1);
  t && (r ? qe(r) && (i = hn(r)) : i = hn(e));
  const a = p0(s, n, r) ? yc(s) : st(0);
  let l = (o.left + a.x) / i.x, c = (o.top + a.y) / i.y, u = o.width / i.x, d = o.height / i.y;
  if (s) {
    const f = Le(s), h = r && qe(r) ? Le(r) : r;
    let m = f, g = Wo(m);
    for (; g && r && h !== m; ) {
      const b = hn(g), y = g.getBoundingClientRect(), w = Ke(g), v = y.left + (g.clientLeft + parseFloat(w.paddingLeft)) * b.x, T = y.top + (g.clientTop + parseFloat(w.paddingTop)) * b.y;
      l *= b.x, c *= b.y, u *= b.x, d *= b.y, l += v, c += T, m = Le(g), g = Wo(m);
    }
  }
  return Pr({
    width: u,
    height: d,
    x: l,
    y: c
  });
}
function Yr(e, t) {
  const n = Kr(e).scrollLeft;
  return t ? t.left + n : Jt(ut(e)).left + n;
}
function vc(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - Yr(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function m0(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const s = o === "fixed", i = ut(r), a = t ? qr(t.floating) : !1;
  if (r === i || a && s)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = st(1);
  const u = st(0), d = lt(r);
  if ((d || !d && !s) && ((En(r) !== "body" || Qn(i)) && (l = Kr(r)), lt(r))) {
    const h = Jt(r);
    c = hn(r), u.x = h.x + r.clientLeft, u.y = h.y + r.clientTop;
  }
  const f = i && !d && !s ? vc(i, l) : st(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + u.x + f.x,
    y: n.y * c.y - l.scrollTop * c.y + u.y + f.y
  };
}
function g0(e) {
  return Array.from(e.getClientRects());
}
function y0(e) {
  const t = ut(e), n = Kr(e), r = e.ownerDocument.body, o = Gt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), s = Gt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + Yr(e);
  const a = -n.scrollTop;
  return Ke(r).direction === "rtl" && (i += Gt(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: s,
    x: i,
    y: a
  };
}
const sa = 25;
function v0(e, t) {
  const n = Le(e), r = ut(e), o = n.visualViewport;
  let s = r.clientWidth, i = r.clientHeight, a = 0, l = 0;
  if (o) {
    s = o.width, i = o.height;
    const u = Di();
    (!u || u && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  const c = Yr(r);
  if (c <= 0) {
    const u = r.ownerDocument, d = u.body, f = getComputedStyle(d), h = u.compatMode === "CSS1Compat" && parseFloat(f.marginLeft) + parseFloat(f.marginRight) || 0, m = Math.abs(r.clientWidth - d.clientWidth - h);
    m <= sa && (s -= m);
  } else
    c <= sa && (s += c);
  return {
    width: s,
    height: i,
    x: a,
    y: l
  };
}
const b0 = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function w0(e, t) {
  const n = Jt(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, s = lt(e) ? hn(e) : st(1), i = e.clientWidth * s.x, a = e.clientHeight * s.y, l = o * s.x, c = r * s.y;
  return {
    width: i,
    height: a,
    x: l,
    y: c
  };
}
function aa(e, t, n) {
  let r;
  if (t === "viewport")
    r = v0(e, n);
  else if (t === "document")
    r = y0(ut(e));
  else if (qe(t))
    r = w0(t, n);
  else {
    const o = yc(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Pr(r);
}
function bc(e, t) {
  const n = $t(e);
  return n === t || !qe(n) || vn(n) ? !1 : Ke(n).position === "fixed" || bc(n, t);
}
function x0(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Wn(e, [], !1).filter((a) => qe(a) && En(a) !== "body"), o = null;
  const s = Ke(e).position === "fixed";
  let i = s ? $t(e) : e;
  for (; qe(i) && !vn(i); ) {
    const a = Ke(i), l = Li(i);
    !l && a.position === "fixed" && (o = null), (s ? !l && !o : !l && a.position === "static" && !!o && b0.has(o.position) || Qn(i) && !l && bc(e, i)) ? r = r.filter((u) => u !== i) : o = a, i = $t(i);
  }
  return t.set(e, r), r;
}
function E0(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? qr(t) ? [] : x0(t, this._c) : [].concat(n), r], a = i[0], l = i.reduce((c, u) => {
    const d = aa(t, u, o);
    return c.top = Gt(d.top, c.top), c.right = yn(d.right, c.right), c.bottom = yn(d.bottom, c.bottom), c.left = Gt(d.left, c.left), c;
  }, aa(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function T0(e) {
  const {
    width: t,
    height: n
  } = gc(e);
  return {
    width: t,
    height: n
  };
}
function S0(e, t, n) {
  const r = lt(t), o = ut(t), s = n === "fixed", i = Jt(e, !0, s, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = st(0);
  function c() {
    l.x = Yr(o);
  }
  if (r || !r && !s)
    if ((En(t) !== "body" || Qn(o)) && (a = Kr(t)), r) {
      const h = Jt(t, !0, s, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else
      o && c();
  s && !r && o && c();
  const u = o && !r && !s ? vc(o, a) : st(0), d = i.left + a.scrollLeft - l.x - u.x, f = i.top + a.scrollTop - l.y - u.y;
  return {
    x: d,
    y: f,
    width: i.width,
    height: i.height
  };
}
function mo(e) {
  return Ke(e).position === "static";
}
function la(e, t) {
  if (!lt(e) || Ke(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return ut(e) === n && (n = n.ownerDocument.body), n;
}
function wc(e, t) {
  const n = Le(e);
  if (qr(e))
    return n;
  if (!lt(e)) {
    let o = $t(e);
    for (; o && !vn(o); ) {
      if (qe(o) && !mo(o))
        return o;
      o = $t(o);
    }
    return n;
  }
  let r = la(e, t);
  for (; r && s0(r) && mo(r); )
    r = la(r, t);
  return r && vn(r) && mo(r) && !Li(r) ? n : r || d0(e) || n;
}
const C0 = async function(e) {
  const t = this.getOffsetParent || wc, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: S0(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function A0(e) {
  return Ke(e).direction === "rtl";
}
const P0 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: m0,
  getDocumentElement: ut,
  getClippingRect: E0,
  getOffsetParent: wc,
  getElementRects: C0,
  getClientRects: g0,
  getDimensions: T0,
  getScale: hn,
  isElement: qe,
  isRTL: A0
};
function xc(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function R0(e, t) {
  let n = null, r;
  const o = ut(e);
  function s() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), n = null;
  }
  function i(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), s();
    const c = e.getBoundingClientRect(), {
      left: u,
      top: d,
      width: f,
      height: h
    } = c;
    if (a || t(), !f || !h)
      return;
    const m = sr(d), g = sr(o.clientWidth - (u + f)), b = sr(o.clientHeight - (d + h)), y = sr(u), v = {
      rootMargin: -m + "px " + -g + "px " + -b + "px " + -y + "px",
      threshold: Gt(0, yn(1, l)) || 1
    };
    let T = !0;
    function P(O) {
      const M = O[0].intersectionRatio;
      if (M !== l) {
        if (!T)
          return i();
        M ? i(!1, M) : r = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      M === 1 && !xc(c, e.getBoundingClientRect()) && i(), T = !1;
    }
    try {
      n = new IntersectionObserver(P, {
        ...v,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(P, v);
    }
    n.observe(e);
  }
  return i(!0), s;
}
function k0(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, c = Vi(e), u = o || s ? [...c ? Wn(c) : [], ...Wn(t)] : [];
  u.forEach((y) => {
    o && y.addEventListener("scroll", n, {
      passive: !0
    }), s && y.addEventListener("resize", n);
  });
  const d = c && a ? R0(c, n) : null;
  let f = -1, h = null;
  i && (h = new ResizeObserver((y) => {
    let [w] = y;
    w && w.target === c && h && (h.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var v;
      (v = h) == null || v.observe(t);
    })), n();
  }), c && !l && h.observe(c), h.observe(t));
  let m, g = l ? Jt(e) : null;
  l && b();
  function b() {
    const y = Jt(e);
    g && !xc(g, y) && n(), g = y, m = requestAnimationFrame(b);
  }
  return n(), () => {
    var y;
    u.forEach((w) => {
      o && w.removeEventListener("scroll", n), s && w.removeEventListener("resize", n);
    }), d == null || d(), (y = h) == null || y.disconnect(), h = null, l && cancelAnimationFrame(m);
  };
}
const O0 = n0, _0 = r0, L0 = Qg, D0 = Zg, ca = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: P0,
    ...n
  }, s = {
    ...o.platform,
    _c: r
  };
  return Jg(e, t, {
    ...o,
    platform: s
  });
};
var Ho = {}, V0 = {
  get exports() {
    return Ho;
  },
  set exports(e) {
    Ho = e;
  }
};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function n() {
      for (var s = "", i = 0; i < arguments.length; i++) {
        var a = arguments[i];
        a && (s = o(s, r(a)));
      }
      return s;
    }
    function r(s) {
      if (typeof s == "string" || typeof s == "number")
        return s;
      if (typeof s != "object")
        return "";
      if (Array.isArray(s))
        return n.apply(null, s);
      if (s.toString !== Object.prototype.toString && !s.toString.toString().includes("[native code]"))
        return s.toString();
      var i = "";
      for (var a in s)
        t.call(s, a) && s[a] && (i = o(i, a));
      return i;
    }
    function o(s, i) {
      return i ? s ? s + " " + i : s + i : s;
    }
    e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
  })();
})(V0);
const qo = Ho;
/*
* React Tooltip
* {@link https://github.com/ReactTooltip/react-tooltip}
* @copyright ReactTooltip Team
* @license MIT
*/
const F0 = "react-tooltip-core-styles", M0 = "react-tooltip-base-styles", ua = { core: !1, base: !1 };
function da({ css: e, id: t = M0, type: n = "base", ref: r }) {
  var o, s;
  if (!e || typeof document > "u" || ua[n] || n === "core" && typeof process < "u" && (!((o = process == null ? void 0 : process.env) === null || o === void 0) && o.REACT_TOOLTIP_DISABLE_CORE_STYLES) || n !== "base" && typeof process < "u" && (!((s = process == null ? void 0 : process.env) === null || s === void 0) && s.REACT_TOOLTIP_DISABLE_BASE_STYLES))
    return;
  n === "core" && (t = F0), r || (r = {});
  const { insertAt: i } = r;
  if (document.getElementById(t))
    return;
  const a = document.head || document.getElementsByTagName("head")[0], l = document.createElement("style");
  l.id = t, l.type = "text/css", i === "top" && a.firstChild ? a.insertBefore(l, a.firstChild) : a.appendChild(l), l.styleSheet ? l.styleSheet.cssText = e : l.appendChild(document.createTextNode(e)), ua[n] = !0;
}
const fa = async ({ elementReference: e = null, tooltipReference: t = null, tooltipArrowReference: n = null, place: r = "top", offset: o = 10, strategy: s = "absolute", middlewares: i = [O0(Number(o)), L0({ fallbackAxisSideDirection: "start" }), _0({ padding: 5 })], border: a, arrowSize: l = 8 }) => {
  if (!e)
    return { tooltipStyles: {}, tooltipArrowStyles: {}, place: r };
  if (t === null)
    return { tooltipStyles: {}, tooltipArrowStyles: {}, place: r };
  const c = i;
  return n ? (c.push(D0({ element: n, padding: 5 })), ca(e, t, { placement: r, strategy: s, middleware: c }).then(({ x: u, y: d, placement: f, middlewareData: h }) => {
    var m, g;
    const b = { left: `${u}px`, top: `${d}px`, border: a }, { x: y, y: w } = (m = h.arrow) !== null && m !== void 0 ? m : { x: 0, y: 0 }, v = (g = { top: "bottom", right: "left", bottom: "top", left: "right" }[f.split("-")[0]]) !== null && g !== void 0 ? g : "bottom", T = a && { borderBottom: a, borderRight: a };
    let P = 0;
    if (a) {
      const O = `${a}`.match(/(\d+)px/);
      P = O != null && O[1] ? Number(O[1]) : 1;
    }
    return { tooltipStyles: b, tooltipArrowStyles: { left: y != null ? `${y}px` : "", top: w != null ? `${w}px` : "", right: "", bottom: "", ...T, [v]: `-${l / 2 + P}px` }, place: f };
  })) : ca(e, t, { placement: "bottom", strategy: s, middleware: c }).then(({ x: u, y: d, placement: f }) => ({ tooltipStyles: { left: `${u}px`, top: `${d}px` }, tooltipArrowStyles: {}, place: f }));
}, ha = (e, t) => !("CSS" in window && "supports" in window.CSS) || window.CSS.supports(e, t), pa = (e, t, n) => {
  let r = null;
  const o = function(...s) {
    const i = () => {
      r = null, n || e.apply(this, s);
    };
    n && !r && (e.apply(this, s), r = setTimeout(i, t)), n || (r && clearTimeout(r), r = setTimeout(i, t));
  };
  return o.cancel = () => {
    r && (clearTimeout(r), r = null);
  }, o;
}, ma = (e) => e !== null && !Array.isArray(e) && typeof e == "object", Ko = (e, t) => {
  if (e === t)
    return !0;
  if (Array.isArray(e) && Array.isArray(t))
    return e.length === t.length && e.every((o, s) => Ko(o, t[s]));
  if (Array.isArray(e) !== Array.isArray(t))
    return !1;
  if (!ma(e) || !ma(t))
    return e === t;
  const n = Object.keys(e), r = Object.keys(t);
  return n.length === r.length && n.every((o) => Ko(e[o], t[o]));
}, B0 = (e) => {
  if (!(e instanceof HTMLElement || e instanceof SVGElement))
    return !1;
  const t = getComputedStyle(e);
  return ["overflow", "overflow-x", "overflow-y"].some((n) => {
    const r = t.getPropertyValue(n);
    return r === "auto" || r === "scroll";
  });
}, ga = (e) => {
  if (!e)
    return null;
  let t = e.parentElement;
  for (; t; ) {
    if (B0(t))
      return t;
    t = t.parentElement;
  }
  return document.scrollingElement || document.documentElement;
}, I0 = typeof window < "u" ? ya : $, Me = (e) => {
  e.current && (clearTimeout(e.current), e.current = null);
}, $0 = "DEFAULT_TOOLTIP_ID", j0 = { anchorRefs: /* @__PURE__ */ new Set(), activeAnchor: { current: null }, attach: () => {
}, detach: () => {
}, setActiveAnchor: () => {
} }, N0 = jt({ getTooltipData: () => j0 });
function Ec(e = $0) {
  return be(N0).getTooltipData(e);
}
var an = { tooltip: "core-styles-module_tooltip__3vRRp", fixed: "core-styles-module_fixed__pcSol", arrow: "core-styles-module_arrow__cvMwQ", noArrow: "core-styles-module_noArrow__xock6", clickable: "core-styles-module_clickable__ZuTTB", show: "core-styles-module_show__Nt9eE", closing: "core-styles-module_closing__sGnxF" }, go = { tooltip: "styles-module_tooltip__mnnfp", arrow: "styles-module_arrow__K0L3T", dark: "styles-module_dark__xNqje", light: "styles-module_light__Z6W-X", success: "styles-module_success__A2AKt", warning: "styles-module_warning__SCK0X", error: "styles-module_error__JvumD", info: "styles-module_info__BWdHW" };
const U0 = ({ forwardRef: e, id: t, className: n, classNameArrow: r, variant: o = "dark", anchorId: s, anchorSelect: i, place: a = "top", offset: l = 10, events: c = ["hover"], openOnClick: u = !1, positionStrategy: d = "absolute", middlewares: f, wrapper: h, delayShow: m = 0, delayHide: g = 0, float: b = !1, hidden: y = !1, noArrow: w = !1, clickable: v = !1, closeOnEsc: T = !1, closeOnScroll: P = !1, closeOnResize: O = !1, openEvents: M, closeEvents: N, globalCloseEvents: G, imperativeModeOnly: z, style: te, position: ce, afterShow: oe, afterHide: B, disableTooltip: I, content: W, contentWrapperRef: Z, isOpen: ie, defaultIsOpen: we = !1, setIsOpen: Ve, previousActiveAnchor: wt, activeAnchor: ne, setActiveAnchor: dt, border: tn, opacity: nn, arrowColor: xt, arrowSize: Ye = 8, role: Et = "tooltip" }) => {
  var $e;
  const me = re(null), Tt = re(null), ke = re(null), ft = re(null), St = re(null), [Fe, ht] = Y({ tooltipStyles: {}, tooltipArrowStyles: {}, place: a }), [Ee, Ct] = Y(!1), [je, Ge] = Y(!1), [ae, Xe] = Y(null), rn = re(!1), At = re(null), { anchorRefs: Nt, setActiveAnchor: Pt } = Ec(t), Ne = re(!1), [Je, Rt] = Y([]), Ze = re(!1), Qe = u || c.includes("click"), on = Qe || (M == null ? void 0 : M.click) || (M == null ? void 0 : M.dblclick) || (M == null ? void 0 : M.mousedown), Ut = M ? { ...M } : { mouseover: !0, focus: !0, mouseenter: !1, click: !1, dblclick: !1, mousedown: !1 };
  !M && Qe && Object.assign(Ut, { mouseenter: !1, focus: !1, mouseover: !1, click: !0 });
  const pt = N ? { ...N } : { mouseout: !0, blur: !0, mouseleave: !1, click: !1, dblclick: !1, mouseup: !1 };
  !N && Qe && Object.assign(pt, { mouseleave: !1, blur: !1, mouseout: !1 });
  const ge = G ? { ...G } : { escape: T || !1, scroll: P || !1, resize: O || !1, clickOutsideAnchor: on || !1 };
  z && (Object.assign(Ut, { mouseover: !1, focus: !1, mouseenter: !1, click: !1, dblclick: !1, mousedown: !1 }), Object.assign(pt, { mouseout: !1, blur: !1, mouseleave: !1, click: !1, dblclick: !1, mouseup: !1 }), Object.assign(ge, { escape: !1, scroll: !1, resize: !1, clickOutsideAnchor: !1 })), I0(() => (Ze.current = !0, () => {
    Ze.current = !1;
  }), []);
  const Ce = (A) => {
    Ze.current && (A && Ge(!0), setTimeout(() => {
      Ze.current && (Ve == null || Ve(A), ie === void 0 && Ct(A));
    }, 10));
  };
  $(() => {
    if (t) {
      if (Ee) {
        D(wt);
        const _ = A(ne), J = [.../* @__PURE__ */ new Set([..._, t])].filter(Boolean).join(" ");
        ne == null || ne.setAttribute("aria-describedby", J);
      } else
        D(ne);
      return () => {
        D(ne), D(wt);
      };
    }
    function A(_) {
      var J;
      return ((J = _ == null ? void 0 : _.getAttribute("aria-describedby")) === null || J === void 0 ? void 0 : J.split(" ")) || [];
    }
    function D(_) {
      const J = A(_).filter((he) => he !== t);
      J.length ? _ == null || _.setAttribute("aria-describedby", J.join(" ")) : _ == null || _.removeAttribute("aria-describedby");
    }
  }, [ne, Ee, t, wt]), $(() => {
    if (ie === void 0)
      return () => null;
    ie && Ge(!0);
    const A = setTimeout(() => {
      Ct(ie);
    }, 10);
    return () => {
      clearTimeout(A);
    };
  }, [ie]), $(() => {
    if (Ee !== rn.current)
      if (Me(St), rn.current = Ee, Ee)
        oe == null || oe();
      else {
        const A = ((D) => {
          const _ = D.match(/^([\d.]+)(ms|s)$/);
          if (!_)
            return 0;
          const [, J, he] = _;
          return Number(J) * (he === "ms" ? 1 : 1e3);
        })(getComputedStyle(document.body).getPropertyValue("--rt-transition-show-delay"));
        St.current = setTimeout(() => {
          Ge(!1), Xe(null), B == null || B();
        }, A + 25);
      }
  }, [Ee]);
  const zt = (A) => {
    ht((D) => Ko(D, A) ? D : A);
  }, Wt = (A = m) => {
    Me(ke), je ? Ce(!0) : ke.current = setTimeout(() => {
      Ce(!0);
    }, A);
  }, et = (A = g) => {
    Me(ft), ft.current = setTimeout(() => {
      Ne.current || Ce(!1);
    }, A);
  }, kt = (A) => {
    var D;
    if (!A)
      return;
    const _ = (D = A.currentTarget) !== null && D !== void 0 ? D : A.target;
    if (!(_ != null && _.isConnected))
      return dt(null), void Pt({ current: null });
    m ? Wt() : Ce(!0), dt(_), Pt({ current: _ }), Me(ft);
  }, _e = () => {
    v ? et(g || 100) : g ? et() : Ce(!1), Me(ke);
  }, tt = ({ x: A, y: D }) => {
    var _;
    const J = { getBoundingClientRect: () => ({ x: A, y: D, width: 0, height: 0, top: D, left: A, right: A, bottom: D }) };
    fa({ place: (_ = ae == null ? void 0 : ae.place) !== null && _ !== void 0 ? _ : a, offset: l, elementReference: J, tooltipReference: me.current, tooltipArrowReference: Tt.current, strategy: d, middlewares: f, border: tn, arrowSize: Ye }).then((he) => {
      zt(he);
    });
  }, nt = (A) => {
    if (!A)
      return;
    const D = A, _ = { x: D.clientX, y: D.clientY };
    tt(_), At.current = _;
  }, Ot = (A) => {
    var D;
    if (!Ee)
      return;
    const _ = A.target;
    _.isConnected && (!((D = me.current) === null || D === void 0) && D.contains(_) || [document.querySelector(`[id='${s}']`), ...Je].some((J) => J == null ? void 0 : J.contains(_)) || (Ce(!1), Me(ke)));
  }, sn = pa(kt, 50, !0), ue = pa(_e, 50, !0), Te = (A) => {
    ue.cancel(), sn(A);
  }, V = () => {
    sn.cancel(), ue();
  }, U = Mt(() => {
    var A, D;
    const _ = (A = ae == null ? void 0 : ae.position) !== null && A !== void 0 ? A : ce;
    _ ? tt(_) : b ? At.current && tt(At.current) : ne != null && ne.isConnected && fa({ place: (D = ae == null ? void 0 : ae.place) !== null && D !== void 0 ? D : a, offset: l, elementReference: ne, tooltipReference: me.current, tooltipArrowReference: Tt.current, strategy: d, middlewares: f, border: tn, arrowSize: Ye }).then((J) => {
      Ze.current && zt(J);
    });
  }, [Ee, ne, W, te, a, ae == null ? void 0 : ae.place, l, d, ce, ae == null ? void 0 : ae.position, b, Ye]);
  $(() => {
    var A, D;
    const _ = new Set(Nt);
    Je.forEach((X) => {
      I != null && I(X) || _.add({ current: X });
    });
    const J = document.querySelector(`[id='${s}']`);
    J && !(I != null && I(J)) && _.add({ current: J });
    const he = () => {
      Ce(!1);
    }, p = ga(ne), E = ga(me.current);
    ge.scroll && (window.addEventListener("scroll", he), p == null || p.addEventListener("scroll", he), E == null || E.addEventListener("scroll", he));
    let C = null;
    ge.resize ? window.addEventListener("resize", he) : ne && me.current && (C = k0(ne, me.current, U, { ancestorResize: !0, elementResize: !0, layoutShift: !0 }));
    const k = (X) => {
      X.key === "Escape" && Ce(!1);
    };
    ge.escape && window.addEventListener("keydown", k), ge.clickOutsideAnchor && window.addEventListener("click", Ot);
    const L = [], q = (X) => !!(X != null && X.target && (ne != null && ne.contains(X.target))), H = (X) => {
      Ee && q(X) || kt(X);
    }, j = (X) => {
      Ee && q(X) && _e();
    }, xe = ["mouseover", "mouseout", "mouseenter", "mouseleave", "focus", "blur"], le = ["click", "dblclick", "mousedown", "mouseup"];
    Object.entries(Ut).forEach(([X, ye]) => {
      ye && (xe.includes(X) ? L.push({ event: X, listener: Te }) : le.includes(X) && L.push({ event: X, listener: H }));
    }), Object.entries(pt).forEach(([X, ye]) => {
      ye && (xe.includes(X) ? L.push({ event: X, listener: V }) : le.includes(X) && L.push({ event: X, listener: j }));
    }), b && L.push({ event: "pointermove", listener: nt });
    const de = () => {
      Ne.current = !0;
    }, Pe = () => {
      Ne.current = !1, _e();
    }, gt = v && (pt.mouseout || pt.mouseleave);
    return gt && ((A = me.current) === null || A === void 0 || A.addEventListener("mouseover", de), (D = me.current) === null || D === void 0 || D.addEventListener("mouseout", Pe)), L.forEach(({ event: X, listener: ye }) => {
      _.forEach((Gr) => {
        var Tn;
        (Tn = Gr.current) === null || Tn === void 0 || Tn.addEventListener(X, ye);
      });
    }), () => {
      var X, ye;
      ge.scroll && (window.removeEventListener("scroll", he), p == null || p.removeEventListener("scroll", he), E == null || E.removeEventListener("scroll", he)), ge.resize ? window.removeEventListener("resize", he) : C == null || C(), ge.clickOutsideAnchor && window.removeEventListener("click", Ot), ge.escape && window.removeEventListener("keydown", k), gt && ((X = me.current) === null || X === void 0 || X.removeEventListener("mouseover", de), (ye = me.current) === null || ye === void 0 || ye.removeEventListener("mouseout", Pe)), L.forEach(({ event: Gr, listener: Tn }) => {
        _.forEach((Tc) => {
          var Xr;
          (Xr = Tc.current) === null || Xr === void 0 || Xr.removeEventListener(Gr, Tn);
        });
      });
    };
  }, [ne, U, je, Nt, Je, M, N, G, Qe, m, g]), $(() => {
    var A, D;
    let _ = (D = (A = ae == null ? void 0 : ae.anchorSelect) !== null && A !== void 0 ? A : i) !== null && D !== void 0 ? D : "";
    !_ && t && (_ = `[data-tooltip-id='${t.replace(/'/g, "\\'")}']`);
    const J = new MutationObserver((he) => {
      const p = [], E = [];
      he.forEach((C) => {
        if (C.type === "attributes" && C.attributeName === "data-tooltip-id" && (C.target.getAttribute("data-tooltip-id") === t ? p.push(C.target) : C.oldValue === t && E.push(C.target)), C.type === "childList") {
          if (ne) {
            const k = [...C.removedNodes].filter((L) => L.nodeType === 1);
            if (_)
              try {
                E.push(...k.filter((L) => L.matches(_))), E.push(...k.flatMap((L) => [...L.querySelectorAll(_)]));
              } catch {
              }
            k.some((L) => {
              var q;
              return !!(!((q = L == null ? void 0 : L.contains) === null || q === void 0) && q.call(L, ne)) && (Ge(!1), Ce(!1), dt(null), Me(ke), Me(ft), !0);
            });
          }
          if (_)
            try {
              const k = [...C.addedNodes].filter((L) => L.nodeType === 1);
              p.push(...k.filter((L) => L.matches(_))), p.push(...k.flatMap((L) => [...L.querySelectorAll(_)]));
            } catch {
            }
        }
      }), (p.length || E.length) && Rt((C) => [...C.filter((k) => !E.includes(k)), ...p]);
    });
    return J.observe(document.body, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["data-tooltip-id"], attributeOldValue: !0 }), () => {
      J.disconnect();
    };
  }, [t, i, ae == null ? void 0 : ae.anchorSelect, ne]), $(() => {
    U();
  }, [U]), $(() => {
    if (!(Z != null && Z.current))
      return () => null;
    const A = new ResizeObserver(() => {
      setTimeout(() => U());
    });
    return A.observe(Z.current), () => {
      A.disconnect();
    };
  }, [W, Z == null ? void 0 : Z.current]), $(() => {
    var A;
    const D = document.querySelector(`[id='${s}']`), _ = [...Je, D];
    ne && _.includes(ne) || dt((A = Je[0]) !== null && A !== void 0 ? A : D);
  }, [s, Je, ne]), $(() => (we && Ce(!0), () => {
    Me(ke), Me(ft);
  }), []), $(() => {
    var A;
    let D = (A = ae == null ? void 0 : ae.anchorSelect) !== null && A !== void 0 ? A : i;
    if (!D && t && (D = `[data-tooltip-id='${t.replace(/'/g, "\\'")}']`), D)
      try {
        const _ = Array.from(document.querySelectorAll(D));
        Rt(_);
      } catch {
        Rt([]);
      }
  }, [t, i, ae == null ? void 0 : ae.anchorSelect]), $(() => {
    ke.current && (Me(ke), Wt(m));
  }, [m]);
  const Ae = ($e = ae == null ? void 0 : ae.content) !== null && $e !== void 0 ? $e : W, mt = Ee && Object.keys(Fe.tooltipStyles).length > 0;
  return kc(e, () => ({ open: (A) => {
    if (A != null && A.anchorSelect)
      try {
        document.querySelector(A.anchorSelect);
      } catch {
        return void console.warn(`[react-tooltip] "${A.anchorSelect}" is not a valid CSS selector`);
      }
    Xe(A ?? null), A != null && A.delay ? Wt(A.delay) : Ce(!0);
  }, close: (A) => {
    A != null && A.delay ? et(A.delay) : Ce(!1);
  }, activeAnchor: ne, place: Fe.place, isOpen: !!(je && !y && Ae && mt) })), je && !y && Ae ? Be.createElement(h, { id: t, role: Et, className: qo("react-tooltip", an.tooltip, go.tooltip, go[o], n, `react-tooltip__place-${Fe.place}`, an[mt ? "show" : "closing"], mt ? "react-tooltip__show" : "react-tooltip__closing", d === "fixed" && an.fixed, v && an.clickable), onTransitionEnd: (A) => {
    Me(St), Ee || A.propertyName !== "opacity" || (Ge(!1), Xe(null), B == null || B());
  }, style: { ...te, ...Fe.tooltipStyles, opacity: nn !== void 0 && mt ? nn : void 0 }, ref: me }, Ae, Be.createElement(h, { className: qo("react-tooltip-arrow", an.arrow, go.arrow, r, w && an.noArrow), style: { ...Fe.tooltipArrowStyles, background: xt ? `linear-gradient(to right bottom, transparent 50%, ${xt} 50%)` : void 0, "--rt-arrow-size": `${Ye}px` }, ref: Tt })) : null;
}, z0 = ({ content: e }) => Be.createElement("span", { dangerouslySetInnerHTML: { __html: e } }), W0 = Be.forwardRef(({ id: e, anchorId: t, anchorSelect: n, content: r, html: o, render: s, className: i, classNameArrow: a, variant: l = "dark", place: c = "top", offset: u = 10, wrapper: d = "div", children: f = null, events: h = ["hover"], openOnClick: m = !1, positionStrategy: g = "absolute", middlewares: b, delayShow: y = 0, delayHide: w = 0, float: v = !1, hidden: T = !1, noArrow: P = !1, clickable: O = !1, closeOnEsc: M = !1, closeOnScroll: N = !1, closeOnResize: G = !1, openEvents: z, closeEvents: te, globalCloseEvents: ce, imperativeModeOnly: oe = !1, style: B, position: I, isOpen: W, defaultIsOpen: Z = !1, disableStyleInjection: ie = !1, border: we, opacity: Ve, arrowColor: wt, arrowSize: ne, setIsOpen: dt, afterShow: tn, afterHide: nn, disableTooltip: xt, role: Ye = "tooltip" }, Et) => {
  const [$e, me] = Y(r), [Tt, ke] = Y(o), [ft, St] = Y(c), [Fe, ht] = Y(l), [Ee, Ct] = Y(u), [je, Ge] = Y(y), [ae, Xe] = Y(w), [rn, At] = Y(v), [Nt, Pt] = Y(T), [Ne, Je] = Y(d), [Rt, Ze] = Y(h), [Qe, on] = Y(g), [Ut, pt] = Y(null), [ge, Ce] = Y(null), zt = re(null), Wt = re(ie), { anchorRefs: et, activeAnchor: kt } = Ec(e), _e = (ue) => ue == null ? void 0 : ue.getAttributeNames().reduce((Te, V) => {
    var U;
    return V.startsWith("data-tooltip-") && (Te[V.replace(/^data-tooltip-/, "")] = (U = ue == null ? void 0 : ue.getAttribute(V)) !== null && U !== void 0 ? U : null), Te;
  }, {}), tt = (ue) => {
    const Te = { place: (V) => {
      var U;
      St((U = V) !== null && U !== void 0 ? U : c);
    }, content: (V) => {
      me(V ?? r);
    }, html: (V) => {
      ke(V ?? o);
    }, variant: (V) => {
      var U;
      ht((U = V) !== null && U !== void 0 ? U : l);
    }, offset: (V) => {
      Ct(V === null ? u : Number(V));
    }, wrapper: (V) => {
      var U;
      Je((U = V) !== null && U !== void 0 ? U : d);
    }, events: (V) => {
      const U = V == null ? void 0 : V.split(" ");
      Ze(U ?? h);
    }, "position-strategy": (V) => {
      var U;
      on((U = V) !== null && U !== void 0 ? U : g);
    }, "delay-show": (V) => {
      Ge(V === null ? y : Number(V));
    }, "delay-hide": (V) => {
      Xe(V === null ? w : Number(V));
    }, float: (V) => {
      At(V === null ? v : V === "true");
    }, hidden: (V) => {
      Pt(V === null ? T : V === "true");
    }, "class-name": (V) => {
      pt(V);
    } };
    Object.values(Te).forEach((V) => V(null)), Object.entries(ue).forEach(([V, U]) => {
      var Ae;
      (Ae = Te[V]) === null || Ae === void 0 || Ae.call(Te, U);
    });
  };
  $(() => {
    me(r);
  }, [r]), $(() => {
    ke(o);
  }, [o]), $(() => {
    St(c);
  }, [c]), $(() => {
    ht(l);
  }, [l]), $(() => {
    Ct(u);
  }, [u]), $(() => {
    Ge(y);
  }, [y]), $(() => {
    Xe(w);
  }, [w]), $(() => {
    At(v);
  }, [v]), $(() => {
    Pt(T);
  }, [T]), $(() => {
    on(g);
  }, [g]), $(() => {
    Wt.current !== ie && console.warn("[react-tooltip] Do not change `disableStyleInjection` dynamically.");
  }, [ie]), $(() => {
    typeof window < "u" && window.dispatchEvent(new CustomEvent("react-tooltip-inject-styles", { detail: { disableCore: ie === "core", disableBase: ie } }));
  }, []), $(() => {
    var ue;
    const Te = new Set(et);
    let V = n;
    if (!V && e && (V = `[data-tooltip-id='${e.replace(/'/g, "\\'")}']`), V)
      try {
        document.querySelectorAll(V).forEach((D) => {
          Te.add({ current: D });
        });
      } catch {
        console.warn(`[react-tooltip] "${V}" is not a valid CSS selector`);
      }
    const U = document.querySelector(`[id='${t}']`);
    if (U && Te.add({ current: U }), !Te.size)
      return () => null;
    const Ae = (ue = ge ?? U) !== null && ue !== void 0 ? ue : kt.current, mt = new MutationObserver((D) => {
      D.forEach((_) => {
        var J;
        if (!Ae || _.type !== "attributes" || !(!((J = _.attributeName) === null || J === void 0) && J.startsWith("data-tooltip-")))
          return;
        const he = _e(Ae);
        tt(he);
      });
    }), A = { attributes: !0, childList: !1, subtree: !1 };
    if (Ae) {
      const D = _e(Ae);
      tt(D), mt.observe(Ae, A);
    }
    return () => {
      mt.disconnect();
    };
  }, [et, kt, ge, t, n]), $(() => {
    B != null && B.border && console.warn("[react-tooltip] Do not set `style.border`. Use `border` prop instead."), we && !ha("border", `${we}`) && console.warn(`[react-tooltip] "${we}" is not a valid \`border\`.`), B != null && B.opacity && console.warn("[react-tooltip] Do not set `style.opacity`. Use `opacity` prop instead."), Ve && !ha("opacity", `${Ve}`) && console.warn(`[react-tooltip] "${Ve}" is not a valid \`opacity\`.`);
  }, []);
  let nt = f;
  const Ot = re(null);
  if (s) {
    const ue = s({ content: (ge == null ? void 0 : ge.getAttribute("data-tooltip-content")) || $e || null, activeAnchor: ge });
    nt = ue ? Be.createElement("div", { ref: Ot, className: "react-tooltip-content-wrapper" }, ue) : null;
  } else
    $e && (nt = $e);
  Tt && (nt = Be.createElement(z0, { content: Tt }));
  const sn = { forwardRef: Et, id: e, anchorId: t, anchorSelect: n, className: qo(i, Ut), classNameArrow: a, content: nt, contentWrapperRef: Ot, place: ft, variant: Fe, offset: Ee, wrapper: Ne, events: Rt, openOnClick: m, positionStrategy: Qe, middlewares: b, delayShow: je, delayHide: ae, float: rn, hidden: Nt, noArrow: P, clickable: O, closeOnEsc: M, closeOnScroll: N, closeOnResize: G, openEvents: z, closeEvents: te, globalCloseEvents: ce, imperativeModeOnly: oe, style: B, position: I, isOpen: W, defaultIsOpen: Z, border: we, opacity: Ve, arrowColor: wt, arrowSize: ne, setIsOpen: dt, afterShow: tn, afterHide: nn, disableTooltip: xt, activeAnchor: ge, previousActiveAnchor: zt.current, setActiveAnchor: (ue) => {
    Ce((Te) => (ue != null && ue.isSameNode(Te) || (zt.current = Te), ue));
  }, role: Ye };
  return Be.createElement(U0, { ...sn });
});
typeof window < "u" && window.addEventListener("react-tooltip-inject-styles", (e) => {
  e.detail.disableCore || da({ css: ":root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9;--rt-transition-show-delay:0.15s;--rt-transition-closing-delay:0.15s;--rt-arrow-size:8px}.core-styles-module_tooltip__3vRRp{position:absolute;top:0;left:0;pointer-events:none;opacity:0;will-change:opacity}.core-styles-module_fixed__pcSol{position:fixed}.core-styles-module_arrow__cvMwQ{position:absolute;background:inherit;z-index:-1}.core-styles-module_noArrow__xock6{display:none}.core-styles-module_clickable__ZuTTB{pointer-events:auto}.core-styles-module_show__Nt9eE{opacity:var(--rt-opacity);transition:opacity var(--rt-transition-show-delay)ease-out}.core-styles-module_closing__sGnxF{opacity:0;transition:opacity var(--rt-transition-closing-delay)ease-in}", type: "core" }), e.detail.disableBase || da({ css: `
.styles-module_tooltip__mnnfp{padding:8px 16px;border-radius:3px;font-size:90%;width:max-content}.styles-module_arrow__K0L3T{width:var(--rt-arrow-size);height:var(--rt-arrow-size)}[class*='react-tooltip__place-top']>.styles-module_arrow__K0L3T{transform:rotate(45deg)}[class*='react-tooltip__place-right']>.styles-module_arrow__K0L3T{transform:rotate(135deg)}[class*='react-tooltip__place-bottom']>.styles-module_arrow__K0L3T{transform:rotate(225deg)}[class*='react-tooltip__place-left']>.styles-module_arrow__K0L3T{transform:rotate(315deg)}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}`, type: "base" });
});
const H0 = {
  top: "top",
  topStart: "top-start",
  topEnd: "top-end",
  bottom: "bottom",
  bottomStart: "bottom-start",
  bottomEnd: "bottom-end",
  left: "left",
  right: "right",
  leftStart: "left-start",
  leftEnd: "left-end",
  rightStart: "right-start",
  rightEnd: "right-end"
};
function q0(e) {
  return H0[e];
}
function wy({
  children: e,
  content: t,
  underline: n = !1,
  position: r = "top",
  style: o,
  ...s
}) {
  const i = Rr(), a = Lc(), l = q0(r), c = `1px solid ${a.borderDefault}`;
  return /* @__PURE__ */ Q(bn, { children: [
    /* @__PURE__ */ S(K0, { "data-tooltip-id": i, underline: n, children: e }),
    /* @__PURE__ */ S(
      Y0,
      {
        id: i,
        place: l,
        opacity: 1,
        positionStrategy: "fixed",
        delayShow: 0.23,
        delayHide: 0.23,
        border: c,
        style: o,
        ...s,
        children: t
      }
    )
  ] });
}
const K0 = R.div`
  position: relative;
  display: inline-flex;
  ${(e) => e.underline ? "border-bottom: 1px dotted rgb(" + e.theme.cardBorder + ");" : ""}
  ${(e) => e.underline ? "cursor: pointer;" : ""}
`, Y0 = R(W0)`
  background-color: ${(e) => e.theme.displayTheme === "light" ? e.theme.surfaceDefault : e.theme.backgroundSecondary} !important;
  color: ${(e) => e.theme.primaryText} !important;
  padding: 10px 15px !important;
  border-radius: 10px !important;
  font-size: 14px !important;
  font-weight: 500 !important;
  line-height: 19px !important;
  min-width: 109px !important;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.14) !important;
  z-index: 99999 !important;
`, xy = R.span`
  display: block;
  height: ${({ y: e }) => e ? `${e}rem` : "0"};
  width: ${({ x: e }) => e ? `${e}rem` : "0"};
`;
function Ey({
  children: e,
  accept: t,
  multiple: n,
  inputRef: r,
  ...o
}) {
  const [s, i] = Y([]);
  return $(() => {
    if (!(r != null && r.current))
      return;
    const a = () => {
      var c;
      const l = (c = r == null ? void 0 : r.current) == null ? void 0 : c.files;
      if (!l || l.length === 0)
        return i([]);
      i(Array.from(l).map((u) => u.name));
    };
    return r.current.addEventListener("change", a), () => {
      var l;
      return (l = r.current) == null ? void 0 : l.removeEventListener("change", a);
    };
  }, [r == null ? void 0 : r.current]), /* @__PURE__ */ Q(G0, { ...o, children: [
    /* @__PURE__ */ S(wn, { children: s.length === 0 && e || s.join(", ") }),
    /* @__PURE__ */ S(J0, { onClick: () => {
      var a;
      return (a = r == null ? void 0 : r.current) == null ? void 0 : a.click();
    }, children: /* @__PURE__ */ S(Cg, {}) }),
    /* @__PURE__ */ S(X0, { accept: t, multiple: n, ref: r })
  ] });
}
const G0 = R(ba).attrs({
  smallPadding: !0
})`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  border-width: 2px;
`, X0 = R.input.attrs({
  type: "file"
})`
  position: absolute;
  z-index: 10;
  border: none;
  outline: none;
  background-color: transparent;
  opacity: 0;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`, J0 = R(jc).attrs({
  secondary: !0
})`
  z-index: 20;
  padding: 0.9rem;
  border-radius: 20px;
`;
function Ty({
  children: e,
  open: t,
  setOpen: n,
  actions: r,
  root: o,
  showCloseIcon: s = !1
}) {
  return Dc.createPortal(
    /* @__PURE__ */ S($r, { children: t && /* @__PURE__ */ S(Z0, { onClick: () => n(!1), children: /* @__PURE__ */ Q(Q0, { onClick: (i) => i.stopPropagation(), children: [
      s && /* @__PURE__ */ S(ny, { onClick: () => n(!1) }),
      /* @__PURE__ */ S(ey, { children: e }),
      r && /* @__PURE__ */ S(ty, { children: r })
    ] }) }) }),
    o || document.getElementById("root")
  );
}
const Z0 = R(Un.div).attrs({
  variants: {
    open: {
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.2
      }
    },
    closed: {
      opacity: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.2
      }
    }
  },
  initial: "closed",
  animate: "open",
  exit: "closed"
})`
  position: fixed;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  z-index: 11000;
  background-color: rgba(19, 19, 19, 0.5);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  max-height: 100%;
  overflow-y: auto;
  padding: 2rem 0;
`, Q0 = R.div`
  position: relative;
  background-color: ${(e) => e.theme.surfaceSecondaryPopup};
  border: 1px solid ${(e) => e.theme.borderDefault};
  border-radius: 10px;
  width: 300px;
  margin: auto;
  padding: 32px;
  box-sizing: border-box;
  gap: 16px;
`, ey = R.div`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  color: ${(e) => e.theme.primaryText};
  line-height: 25px;
  align-self: stretch;
`, ty = R.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  gap: 10px;
`, ny = R(wa)`
  position: absolute;
  top: 16px;
  right: 16px;
  height: 24px;
  width: 24px;
  cursor: pointer;
  color: ${(e) => e.theme.tertiaryText};

  &:hover {
    color: ${(e) => e.theme.secondaryText};
  }

  &:active {
    color: ${(e) => e.theme.secondaryText};
    transform: scale(0.9);
  }
`;
export {
  gy as ARCONNECT_DARK_THEME,
  my as ARCONNECT_LIGHT_THEME,
  jc as Button,
  ba as Card,
  cy as Checkbox,
  ou as ErrorMsg,
  Ey as FileInput,
  vo as Icon,
  yo as IconWrapper,
  uy as Input,
  iu as InputElement,
  xa as InputWrapper,
  Ea as Label,
  fy as ListItem,
  ea as ListItemIcon,
  hy as ListItemImg,
  Bc as Loading,
  Ty as Modal,
  py as Popover,
  yy as Provider,
  vy as Section,
  by as Select,
  xy as Spacer,
  wn as Text,
  wy as Tooltip,
  ay as useCheckbox,
  sy as useInput,
  ly as useModal,
  Eg as useToasts
};
