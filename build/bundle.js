(function () {
	'use strict';

	var n = [];
	var t, o;

	function r() {
	  return !!t;
	}

	function u(n) {
	  var o = t,
	      r = function r() {};

	  t = r, a(r);
	  var u = n(function () {
	    S(r), t = void 0;
	  });
	  return t = o, u;
	}

	function c(n) {
	  var o = t;
	  t = void 0;
	  var r = n();
	  return t = o, r;
	}

	function i(t) {
	  o = [];
	  var r = t();
	  var u = o;
	  return o = void 0, u.forEach(function (t) {
	    if (t.t !== n) {
	      var _o = t.t;
	      t.t = n, t(_o);
	    }
	  }), r;
	}

	function e(r) {
	  function u(c) {
	    if (0 === arguments.length) return t && !u.__l.has(t) && (u.__l.add(t), t.o.push(u)), r;
	    if (o) return u.t === n && o.push(u), u.t = c, c;
	    r = c;
	    var i = t;
	    return t = void 0, u.u = new Set(u.__l), u.u.forEach(function (n) {
	      return n.i = !1;
	    }), u.u.forEach(function (n) {
	      n.i || n();
	    }), t = i, r;
	  }

	  return u.$o = !0, u.__l = new Set(), u.t = n, u;
	}

	function f(n, o) {
	  function r() {
	    var u = t;
	    t && t.__c.push(r);
	    var c = r.__c;
	    return S(r), r.i = !0, t = r, o = n(o), c.forEach(function (n) {
	      -1 === r.__c.indexOf(n) && (n.i = !0);
	    }), function n(t) {
	      return t.reduce(function (t, o) {
	        return t.concat(o, n(o.__c));
	      }, []);
	    }(r.__c).forEach(function (n) {
	      n.i && n.o.forEach(function (t) {
	        t.u && t.u.delete(n);
	      });
	    }), t = u, o;
	  }

	  function u() {
	    return r.i ? r.o.forEach(function (n) {
	      return n();
	    }) : o = r(), o;
	  }

	  return n.s = r, a(r), r(), u.$o = !0, u;
	}

	function s(n) {
	  return t && t.v.push(n), n;
	}

	function d(n) {
	  return f(n), function () {
	    return S(n.s);
	  };
	}

	function v(n) {
	  S(n.s);
	}

	function S(n) {
	  n.__c.forEach(S), n.o.forEach(function (t) {
	    t.__l.delete(n);
	  }), n.v.forEach(function (n) {
	    return n();
	  }), a(n);
	}

	function a(n) {
	  n.o = [], n.__c = [], n.v = [];
	}

	var n$1 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		S: f,
		cleanup: s,
		computed: f,
		isListening: r,
		o: e,
		observable: e,
		root: u,
		sample: c,
		subscribe: d,
		transaction: i,
		unsubscribe: v
	});

	var e$1 = {},
	    s$1 = [],
	    f$1 = "__g";

	function i$1(n, t, o, e) {
	  if (o) {
	    if (t) {
	      if (!e) {
	        var _t2 = (e = o.previousSibling || n.lastChild)[f$1];
	        if (_t2) for (e = e.previousSibling; e && e[f$1] !== _t2;) {
	          e = e.previousSibling;
	        }
	      }

	      var _t;

	      for (; e && e !== o;) {
	        _t = e.nextSibling, n.removeChild(e), e[f$1] = 0, e = _t;
	      }
	    }
	  } else n.textContent = "";
	}

	var r$1 = 0;

	function u$1(n, t, o, u, c) {
	  n = o && o.parentNode || n;
	  var l = typeof t;
	  return t === u || (!t && 0 !== t || !0 === t ? (i$1(n, u, o, c), u = null) : u && "string" != typeof u || !("string" === l || "number" === l && (t += "")) ? "function" === l ? e$1.subscribe(function () {
	    u = e$1.insert(n, t(), o, u);
	  }) : (i$1(n, u, o, c), t instanceof Node || (t = e$1.h(s$1, t)), 11 === t.nodeType && t.firstChild !== t.lastChild && (t.firstChild[f$1] = t.lastChild[f$1] = ++r$1), n.insertBefore(t, o || null), u = t) : (null != u && n.firstChild ? o ? (o.previousSibling || n.lastChild).data = t : n.firstChild.data = t : o ? n.insertBefore(document.createTextNode(t), o) : n.textContent = t, u = t)), u;
	}

	function c$1(n, t, o, s, f) {
	  if (!n || "attrs" === n && (s = !0)) for (n in t) {
	    c$1(n, t[n], o, s, f);
	  } else "o" !== n[0] || "n" !== n[1] || t.$o ? "function" == typeof t ? t.$t ? t.$t(2, c$1, o, n) : e$1.subscribe(function () {
	    c$1(n, t(), o, s, f);
	  }) : f ? o.style.setProperty(n, t) : s || "data-" === n.slice(0, 5) || "aria-" === n.slice(0, 5) ? o.setAttribute(n, t) : "style" === n ? "string" == typeof t ? o.style.cssText = t : c$1(null, t, o, s, !0) : ("class" === n && (n += "Name"), o[n] = t) : function (n, t, o) {
	    t = t.slice(2);
	    var s = e$1.cleanup(function () {
	      return n.removeEventListener(t, l);
	    });
	    o ? n.addEventListener(t, l) : s(), (n.__l || (n.__l = {}))[t] = o;
	  }(o, n, t);
	}

	function l(n) {
	  return this.__l[n.type](n);
	}

	function a$1(n, t) {
	  for (var _t3 in n) {
	    e$1[_t3] = n[_t3];
	  }

	  function o() {
	    var n = s$1.slice.call(arguments);
	    var o;
	    return n.forEach(function e(s) {
	      var f = typeof s;
	      if (null == s) ;else if ("string" === f) o ? o.appendChild(document.createTextNode(s)) : o = t ? document.createElementNS("http://www.w3.org/2000/svg", s) : document.createElement(s);else if (Array.isArray(s)) o || (o = document.createDocumentFragment()), s.forEach(e);else if (s instanceof Node) o ? o.appendChild(s) : o = s;else if ("object" === f) c$1(null, s, o, t);else if ("function" === f) {
	        if (o) {
	          var _n = o.appendChild(document.createTextNode(""));

	          s.$t ? s.$t(1, u$1, o, "") : u$1(o, s, _n);
	        } else o = s.apply(null, n.splice(1));
	      } else o.appendChild(document.createTextNode("" + s));
	    }), o;
	  }

	  return e$1.insert = u$1, e$1.property = c$1, e$1.h = o, o;
	}

	var m = a$1(n$1),
	    p = a$1(n$1, !0);

	var n$2 = "__g",
	    t$1 = "nextSibling",
	    o$1 = "previousSibling";
	var e$2 = 0;

	function f$2(r, t, o) {
	  var f;
	  return t instanceof Node ? 11 === t.nodeType && (f = t.firstChild) && f !== t.lastChild && (f[n$2] = t.lastChild[n$2] = ++e$2) : t = document.createTextNode(t), r.insertBefore(t, o || null), f || t;
	}

	function u$2(r, t, o) {
	  var e = r[n$2];
	  if (e) for (r = r[t]; r && r[n$2] !== e;) {
	    r = r[t];
	  }
	  return o ? r : r[t];
	}

	function i$2(r, n, t) {
	  var o;

	  for (; n !== t;) {
	    o = n.nextSibling, r.removeChild(n), n = o;
	  }
	}

	function c$2(r, n, t, o) {
	  var e;

	  for (; n !== t;) {
	    e = n.nextSibling, r.insertBefore(n, o), n = e;
	  }
	}

	function l$1(r, n) {
	  var t = -1,
	      o = r.length;
	  if (o > 0 && r[o - 1] <= n) return o - 1;

	  for (; o - t > 1;) {
	    var e = (t + o) / 2 | 0;
	    r[e] > n ? o = e : t = e;
	  }

	  return t;
	}

	function s$2(n, e, s) {
	  var a = e$1.subscribe,
	      b = e$1.root,
	      m = e$1.sample,
	      p = e$1.cleanup;
	  null == s && (s = !e.$t);
	  var d = document.createDocumentFragment();
	  var v = d.appendChild(document.createTextNode("")),
	      w = d.appendChild(document.createTextNode("")),
	      g = new Map();

	  function k() {
	    g.forEach(function (r) {
	      return r();
	    }), g.clear();
	  }

	  function x(r) {
	    var n = g.get(r);
	    n && n(), g.delete(r);
	  }

	  function y(r, n, t, o, u) {
	    return s ? b(function (i) {
	      var c = f$2(r, e(n, t, o), u);
	      return g.set(c, i), c;
	    }) : f$2(r, e(n, t, o), u);
	  }

	  return p(a(function (r) {
	    var e = n();
	    return m(function () {
	      return function r(n, e, f, s, a, b, m, p) {
	        n = a.parentNode;
	        var d,
	            v = f.length;
	        if (0 === v) return s.previousSibling || a.nextSibling ? i$2(n, s.nextSibling, a) : (n.textContent = "", n.appendChild(s), n.appendChild(a)), m && m(), [];

	        if (0 === e.length) {
	          for (d = 0; d < v; d++) {
	            b(n, f[d], d, f, a);
	          }

	          return f.slice();
	        }

	        var w,
	            g,
	            k = 0,
	            x = 0,
	            y = e.length - 1,
	            A = v - 1,
	            M = s.nextSibling,
	            S = a.previousSibling,
	            _ = a;

	        r: for (;;) {
	          for (; e[k] === f[x];) {
	            if (x++, M = u$2(M, t$1), y < ++k || A < x) break r;
	          }

	          for (; e[y] === f[A];) {
	            if (A--, _ = u$2(S, o$1, !0), S = _.previousSibling, --y < k || A < x) break r;
	          }

	          break;
	        }

	        if (A < x) {
	          for (; k <= y--;) {
	            w = u$2(S, o$1, !0), g = w.previousSibling, i$2(n, w, S.nextSibling), p && p(w), S = g;
	          }

	          return f.slice();
	        }

	        if (y < k) {
	          for (; x <= A;) {
	            b(n, f[x++], x, f, _);
	          }

	          return f.slice();
	        }

	        var j = new Array(A + 1 - x),
	            N = new Map();

	        for (d = x; d <= A; d++) {
	          j[d] = -1, N.set(f[d], d);
	        }

	        v = 0;
	        var h = [];

	        for (d = k; d <= y; d++) {
	          w = N.get(e[d]), w ? (j[w] = d, v++) : h.push(d);
	        }

	        if (0 === v) return r(n, r(n, e, [], s, a, b, m), f, s, a, b);
	        var q = [];

	        for (w = M, d = k; d <= y; d++) {
	          q[d] = w, w = u$2(w, t$1);
	        }

	        for (d = 0; d < h.length; d++) {
	          w = q[h[d]], i$2(n, w, u$2(w, t$1)), p && p(w);
	        }

	        var z = function (r, n) {
	          var t = [],
	              o = [],
	              e = -1,
	              f = new Array(r.length);

	          for (var u = n, i = r.length; u < i; u++) {
	            var c = r[u];

	            if (!(c < 0)) {
	              var s = l$1(t, c);
	              -1 !== s && (f[u] = o[s]), s === e ? (e++, t[e] = c, o[e] = u) : c < t[s + 1] && (t[s + 1] = c, o[s + 1] = u);
	            }
	          }

	          for (u = o[e]; e >= 0; u = f[u], e--) {
	            t[e] = u;
	          }

	          return t;
	        }(j, x);

	        for (v = z.length - 1, d = A; d >= x; d--) {
	          z[v] === d ? (_ = q[j[z[v]]], v--) : (-1 === j[d] ? w = b(n, f[d], d, f, _) : (w = q[j[d]], c$2(n, w, u$2(w, t$1), _)), _ = w);
	        }

	        return f.slice();
	      }(d, r || [], e || [], v, w, y, s && k, s && x);
	    });
	  })), p(k), d;
	}

	// Fork of https://codepen.io/developit/full/xGoagz/
	var counts = [50, 100, 200, 500, 1000, 2000];
	var count = e(counts[0]);
	var LOOPS = 6;
	var debounceRendering = requestAnimationFrame;

	function AnimationPicker() {
	  var timingFunction = e('requestAnimationFrame');
	  var IDLE_TIMEOUT = {
	    timeout: 50
	  };
	  var timingFunctions = {
	    'requestAnimationFrame': requestAnimationFrame,
	    'setTimeout(100)': function setTimeout100(f) {
	      return setTimeout(f, 100);
	    },
	    'requestIdleCallback': function (_requestIdleCallback) {
	      function requestIdleCallback(_x) {
	        return _requestIdleCallback.apply(this, arguments);
	      }

	      requestIdleCallback.toString = function () {
	        return _requestIdleCallback.toString();
	      };

	      return requestIdleCallback;
	    }(function (f) {
	      return requestIdleCallback(f, IDLE_TIMEOUT);
	    }),
	    'setTimeout(0)': function setTimeout0(f) {
	      return setTimeout(f, 0);
	    }
	  };
	  d(function () {
	    return debounceRendering = timingFunctions[timingFunction()];
	  });
	  return m([m("label", {
	    "class": "animation-picker picker",
	    onmousedown: function onmousedown(e) {
	      return e.stopPropagation();
	    }
	  }, "Timing:", m("select", {
	    value: timingFunction,
	    onchange: function onchange(e) {
	      return timingFunction(e.target.value);
	    }
	  }, function () {
	    return Object.keys(timingFunctions).map(function (name) {
	      return m("option", {
	        value: name,
	        disabled: timingFunctions[name] === undefined
	      }, name);
	    });
	  })), m("label", {
	    "class": "amount-picker picker",
	    onmousedown: function onmousedown(e) {
	      return e.stopPropagation();
	    }
	  }, "Amount", m("select", {
	    value: count,
	    onchange: function onchange(e) {
	      return count(parseInt(e.target.value));
	    }
	  }, counts.map(function (count) {
	    return m("option", {
	      value: count
	    }, count);
	  })))]);
	}
	/** This component controls the app itself.
	 *  It wires up some global mouse events (this is uncommon).
	 *  When component state changes, it gets re-rendered automatically.
	 */


	function Main() {
	  var x = e(0);
	  var y = e(0);
	  var big = e(false);
	  var counter = e(0);
	  var touch = navigator.maxTouchPoints > 1; // set mouse position state on move:

	  addEventListener(touch ? 'touchmove' : 'mousemove', function (e) {
	    setMouse(e.touches ? e.touches[0] : e);
	  }); // holding the mouse down enables big mode:

	  addEventListener(touch ? 'touchstart' : 'mousedown', function (e) {
	    e.preventDefault();
	    big(true);
	  });
	  addEventListener(touch ? 'touchend' : 'mouseup', function () {
	    return big(false);
	  });
	  increment();

	  function increment() {
	    counter(counter() + 1);
	    debounceRendering(increment);
	  }

	  function setMouse(_ref) {
	    var pageX = _ref.pageX,
	        pageY = _ref.pageY;
	    x(pageX);
	    y(pageY);
	  }

	  var max = f(function mmax() {
	    return count() + Math.round(Math.sin(counter() / 90 * 2 * Math.PI) * count() * 0.5);
	  });
	  var cache = [];
	  var cursors = f(function ccursors() {
	    var list = Array(max()).fill(0);
	    return c(function () {
	      return list.map(function (_, i) {
	        return cache[i] || (cache[i] = cursor(i));
	      });
	    });
	  });

	  function cursor(i) {
	    return {
	      x: f(function xx() {
	        var f = i / max() * LOOPS,
	            θ = f * 2 * Math.PI,
	            m = 20 + i * 2;
	        return c(x) + Math.sin(θ) * m | 0;
	      }),
	      y: f(function yy() {
	        var f = i / max() * LOOPS,
	            θ = f * 2 * Math.PI,
	            m = 20 + i * 2;
	        return c(y) + Math.cos(θ) * m | 0;
	      }),
	      color: f(function ccolor() {
	        var f = i / max() * LOOPS,
	            hue = (f * 255 + c(counter) * 10) % 255;
	        return 'hsl(' + hue + ',100%,50%)';
	      })
	    };
	  }

	  return m("div", {
	    id: "main"
	  }, m(AnimationPicker, null), m(Cursor, {
	    label: true,
	    big: big,
	    x: x,
	    y: y
	  }), s$2(cursors, function (_ref2) {
	    var x = _ref2.x,
	        y = _ref2.y,
	        color = _ref2.color;
	    return m(Cursor, {
	      big: big,
	      x: x,
	      y: y,
	      color: color
	    });
	  }));
	}
	/** Represents a single coloured dot. */


	function Cursor(props) {
	  var big = props.big,
	      label = props.label,
	      x = props.x,
	      y = props.y,
	      color = props.color; // get shared/pooled class object

	  function getClass(big, label) {
	    var cl = 'cursor';
	    if (big) cl += ' big';
	    if (label) cl += ' label';
	    return cl;
	  }

	  var inner = null;
	  if (label) inner = m("span", {
	    "class": "label"
	  }, x, ",", y);
	  return m("div", {
	    "class": function _class() {
	      return getClass(big(), label);
	    },
	    style: function style() {
	      return "left:" + (typeof x === "function" ? x() : x) + "px;top:" + (typeof y === "function" ? y() : y) + "px;border-color:" + (typeof color === "function" ? color() : color);
	    }
	  }, inner);
	} // Mount the top-level component to the DOM:


	document.body.appendChild(Main()); // Addendum: disable dragging on mobile

	addEventListener('touchstart', function (e) {
	  return e.preventDefault(), false;
	});

}());
//# sourceMappingURL=bundle.js.map
