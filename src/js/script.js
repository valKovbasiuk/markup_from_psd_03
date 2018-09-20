//====== minimize top menu on scroll ======

$(window).scroll(function() {
  if ($(this).scrollTop() > 30) {
    $(".header").addClass("header--minimized");
  } else {
    $(".header").removeClass("header--minimized");
  }
});

//======= burger menu =====

function onOff() {
  document.querySelector(".nav__burger--open").classList.toggle("hide");
  document.querySelector(".nav").classList.toggle("show");
  document.querySelector(".nav__burger--close").classList.toggle("hide");
}

// function hide() {
//     document.querySelector('.nav').classList.remove('show');
//     // document.querySelector('#click_me').focus();
// }

window.onload = function() {
  document.querySelector(".nav__burger").addEventListener("click", onOff);
  // document.querySelector('.nav__link').addEventListener('click', hide);
};

//==== packages animation ===

if (window.matchMedia("(max-width: 480px)").matches) {
  $(".coll__name--mobile")
    .next()
    .hide();
  $(".coll__name--mobile").click(function() {
    $(this)
      .next()
      .slideToggle();
    $(".coll__name--mobile")
      .not(this)
      .next()
      .stop(true, true)
      .slideUp();
  });
}

// ===== Scroll to Top ====

$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) {
    // If page is scrolled more than 50px
    $("#return-to-top").fadeIn(200); // Fade in the arrow
  } else {
    $("#return-to-top").fadeOut(200); // Else fade out the arrow
  }
});
$("#return-to-top").click(function() {
  // When arrow is clicked
  $("body,html").animate(
    {
      scrollTop: 0 // Scroll to top of body
    },
    500
  );
});



//========= AOS confiig =======

!(function(e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
      ? define(t)
      : (e.AOS = t());
})(this, function() {
  "use strict";
  var e =
      "undefined" != typeof window
        ? window
        : "undefined" != typeof global
          ? global
          : "undefined" != typeof self
            ? self
            : {},
    t = "Expected a function",
    n = NaN,
    o = "[object Symbol]",
    i = /^\s+|\s+$/g,
    a = /^[-+]0x[0-9a-f]+$/i,
    r = /^0b[01]+$/i,
    c = /^0o[0-7]+$/i,
    s = parseInt,
    u = "object" == typeof e && e && e.Object === Object && e,
    d = "object" == typeof self && self && self.Object === Object && self,
    f = u || d || Function("return this")(),
    l = Object.prototype.toString,
    m = Math.max,
    p = Math.min,
    v = function() {
      return f.Date.now();
    };
  function b(e, n, o) {
    var i,
      a,
      r,
      c,
      s,
      u,
      d = 0,
      f = !1,
      l = !1,
      b = !0;
    if ("function" != typeof e) throw new TypeError(t);
    function h(t) {
      var n = i,
        o = a;
      return (i = a = void 0), (d = t), (c = e.apply(o, n));
    }
    function y(e) {
      var t = e - u;
      return void 0 === u || t >= n || t < 0 || (l && e - d >= r);
    }
    function k() {
      var e = v();
      if (y(e)) return x(e);
      s = setTimeout(
        k,
        (function(e) {
          var t = n - (e - u);
          return l ? p(t, r - (e - d)) : t;
        })(e)
      );
    }
    function x(e) {
      return (s = void 0), b && i ? h(e) : ((i = a = void 0), c);
    }
    function j() {
      var e = v(),
        t = y(e);
      if (((i = arguments), (a = this), (u = e), t)) {
        if (void 0 === s)
          return (function(e) {
            return (d = e), (s = setTimeout(k, n)), f ? h(e) : c;
          })(u);
        if (l) return (s = setTimeout(k, n)), h(u);
      }
      return void 0 === s && (s = setTimeout(k, n)), c;
    }
    return (
      (n = w(n) || 0),
      g(o) &&
        ((f = !!o.leading),
        (r = (l = "maxWait" in o) ? m(w(o.maxWait) || 0, n) : r),
        (b = "trailing" in o ? !!o.trailing : b)),
      (j.cancel = function() {
        void 0 !== s && clearTimeout(s), (d = 0), (i = u = a = s = void 0);
      }),
      (j.flush = function() {
        return void 0 === s ? c : x(v());
      }),
      j
    );
  }
  function g(e) {
    var t = typeof e;
    return !!e && ("object" == t || "function" == t);
  }
  function w(e) {
    if ("number" == typeof e) return e;
    if (
      (function(e) {
        return (
          "symbol" == typeof e ||
          ((function(e) {
            return !!e && "object" == typeof e;
          })(e) &&
            l.call(e) == o)
        );
      })(e)
    )
      return n;
    if (g(e)) {
      var t = "function" == typeof e.valueOf ? e.valueOf() : e;
      e = g(t) ? t + "" : t;
    }
    if ("string" != typeof e) return 0 === e ? e : +e;
    e = e.replace(i, "");
    var u = r.test(e);
    return u || c.test(e) ? s(e.slice(2), u ? 2 : 8) : a.test(e) ? n : +e;
  }
  var h = function(e, n, o) {
      var i = !0,
        a = !0;
      if ("function" != typeof e) throw new TypeError(t);
      return (
        g(o) &&
          ((i = "leading" in o ? !!o.leading : i),
          (a = "trailing" in o ? !!o.trailing : a)),
        b(e, n, { leading: i, maxWait: n, trailing: a })
      );
    },
    y = "Expected a function",
    k = NaN,
    x = "[object Symbol]",
    j = /^\s+|\s+$/g,
    O = /^[-+]0x[0-9a-f]+$/i,
    E = /^0b[01]+$/i,
    N = /^0o[0-7]+$/i,
    z = parseInt,
    C = "object" == typeof e && e && e.Object === Object && e,
    A = "object" == typeof self && self && self.Object === Object && self,
    q = C || A || Function("return this")(),
    L = Object.prototype.toString,
    T = Math.max,
    S = Math.min,
    M = function() {
      return q.Date.now();
    };
  function H(e) {
    var t = typeof e;
    return !!e && ("object" == t || "function" == t);
  }
  function $(e) {
    if ("number" == typeof e) return e;
    if (
      (function(e) {
        return (
          "symbol" == typeof e ||
          ((function(e) {
            return !!e && "object" == typeof e;
          })(e) &&
            L.call(e) == x)
        );
      })(e)
    )
      return k;
    if (H(e)) {
      var t = "function" == typeof e.valueOf ? e.valueOf() : e;
      e = H(t) ? t + "" : t;
    }
    if ("string" != typeof e) return 0 === e ? e : +e;
    e = e.replace(j, "");
    var n = E.test(e);
    return n || N.test(e) ? z(e.slice(2), n ? 2 : 8) : O.test(e) ? k : +e;
  }
  var D = function(e, t, n) {
      var o,
        i,
        a,
        r,
        c,
        s,
        u = 0,
        d = !1,
        f = !1,
        l = !0;
      if ("function" != typeof e) throw new TypeError(y);
      function m(t) {
        var n = o,
          a = i;
        return (o = i = void 0), (u = t), (r = e.apply(a, n));
      }
      function p(e) {
        var n = e - s;
        return void 0 === s || n >= t || n < 0 || (f && e - u >= a);
      }
      function v() {
        var e = M();
        if (p(e)) return b(e);
        c = setTimeout(
          v,
          (function(e) {
            var n = t - (e - s);
            return f ? S(n, a - (e - u)) : n;
          })(e)
        );
      }
      function b(e) {
        return (c = void 0), l && o ? m(e) : ((o = i = void 0), r);
      }
      function g() {
        var e = M(),
          n = p(e);
        if (((o = arguments), (i = this), (s = e), n)) {
          if (void 0 === c)
            return (function(e) {
              return (u = e), (c = setTimeout(v, t)), d ? m(e) : r;
            })(s);
          if (f) return (c = setTimeout(v, t)), m(s);
        }
        return void 0 === c && (c = setTimeout(v, t)), r;
      }
      return (
        (t = $(t) || 0),
        H(n) &&
          ((d = !!n.leading),
          (a = (f = "maxWait" in n) ? T($(n.maxWait) || 0, t) : a),
          (l = "trailing" in n ? !!n.trailing : l)),
        (g.cancel = function() {
          void 0 !== c && clearTimeout(c), (u = 0), (o = s = i = c = void 0);
        }),
        (g.flush = function() {
          return void 0 === c ? r : b(M());
        }),
        g
      );
    },
    W = function() {};
  function P(e) {
    e &&
      e.forEach(function(e) {
        var t = Array.prototype.slice.call(e.addedNodes),
          n = Array.prototype.slice.call(e.removedNodes);
        if (
          (function e(t) {
            var n = void 0,
              o = void 0;
            for (n = 0; n < t.length; n += 1) {
              if ((o = t[n]).dataset && o.dataset.aos) return !0;
              if (o.children && e(o.children)) return !0;
            }
            return !1;
          })(t.concat(n))
        )
          return W();
      });
  }
  var _ = function(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    },
    Y = (function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o);
        }
      }
      return function(t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t;
      };
    })(),
    B =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var o in n)
            Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
        }
        return e;
      },
    F = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
    I = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
    K = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
    G = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
  function J() {
    return navigator.userAgent || navigator.vendor || window.opera || "";
  }
  var Q = new ((function() {
      function e() {
        _(this, e);
      }
      return (
        Y(e, [
          {
            key: "phone",
            value: function() {
              var e = J();
              return !(!F.test(e) && !I.test(e.substr(0, 4)));
            }
          },
          {
            key: "mobile",
            value: function() {
              var e = J();
              return !(!K.test(e) && !G.test(e.substr(0, 4)));
            }
          },
          {
            key: "tablet",
            value: function() {
              return this.mobile() && !this.phone();
            }
          },
          {
            key: "ie11",
            value: function() {
              return (
                "-ms-scroll-limit" in document.documentElement.style &&
                "-ms-ime-align" in document.documentElement.style
              );
            }
          }
        ]),
        e
      );
    })())(),
    R = function(e, t) {
      var n = void 0;
      return (
        Q.ie11()
          ? (n = document.createEvent("CustomEvent")).initCustomEvent(
              e,
              !0,
              !0,
              { detail: t }
            )
          : (n = new CustomEvent(e, { detail: t })),
        document.dispatchEvent(n)
      );
    },
    U = function(e) {
      return e.forEach(function(e, t) {
        return (function(e, t) {
          var n = e.options,
            o = e.position,
            i = e.node,
            a = (e.data,
            function() {
              e.animated &&
                ((function(e, t) {
                  t &&
                    t.forEach(function(t) {
                      return e.classList.remove(t);
                    });
                })(i, n.animatedClassNames),
                R("aos:out", i),
                e.options.id && R("aos:in:" + e.options.id, i),
                (e.animated = !1));
            });
          n.mirror && t >= o.out && !n.once
            ? a()
            : t >= o.in
              ? e.animated ||
                ((function(e, t) {
                  t &&
                    t.forEach(function(t) {
                      return e.classList.add(t);
                    });
                })(i, n.animatedClassNames),
                R("aos:in", i),
                e.options.id && R("aos:in:" + e.options.id, i),
                (e.animated = !0))
              : e.animated && !n.once && a();
        })(e, window.pageYOffset);
      });
    },
    V = function(e) {
      for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop); )
        (t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0)),
          (n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0)),
          (e = e.offsetParent);
      return { top: n, left: t };
    },
    X = function(e, t, n) {
      var o = e.getAttribute("data-aos-" + t);
      if (void 0 !== o) {
        if ("true" === o) return !0;
        if ("false" === o) return !1;
      }
      return o || n;
    },
    Z = function(e, t) {
      return (
        e.forEach(function(e, n) {
          var o = X(e.node, "mirror", t.mirror),
            i = X(e.node, "once", t.once),
            a = X(e.node, "id"),
            r = t.useClassNames && e.node.getAttribute("data-aos"),
            c = [t.animatedClassName]
              .concat(r ? r.split(" ") : [])
              .filter(function(e) {
                return "string" == typeof e;
              });
          t.initClassName && e.node.classList.add(t.initClassName),
            (e.position = {
              in: (function(e, t, n) {
                var o = window.innerHeight,
                  i = X(e, "anchor"),
                  a = X(e, "anchor-placement"),
                  r = Number(X(e, "offset", a ? 0 : t)),
                  c = a || n,
                  s = e;
                i &&
                  document.querySelectorAll(i) &&
                  (s = document.querySelectorAll(i)[0]);
                var u = V(s).top - o;
                switch (c) {
                  case "top-bottom":
                    break;
                  case "center-bottom":
                    u += s.offsetHeight / 2;
                    break;
                  case "bottom-bottom":
                    u += s.offsetHeight;
                    break;
                  case "top-center":
                    u += o / 2;
                    break;
                  case "center-center":
                    u += o / 2 + s.offsetHeight / 2;
                    break;
                  case "bottom-center":
                    u += o / 2 + s.offsetHeight;
                    break;
                  case "top-top":
                    u += o;
                    break;
                  case "bottom-top":
                    u += o + s.offsetHeight;
                    break;
                  case "center-top":
                    u += o + s.offsetHeight / 2;
                }
                return u + r;
              })(e.node, t.offset, t.anchorPlacement),
              out:
                o &&
                (function(e, t) {
                  window.innerHeight;
                  var n = X(e, "anchor"),
                    o = X(e, "offset", t),
                    i = e;
                  return (
                    n &&
                      document.querySelectorAll(n) &&
                      (i = document.querySelectorAll(n)[0]),
                    V(i).top + i.offsetHeight - o
                  );
                })(e.node, t.offset)
            }),
            (e.options = { once: i, mirror: o, animatedClassNames: c, id: a });
        }),
        e
      );
    },
    ee = function() {
      var e = document.querySelectorAll("[data-aos]");
      return Array.prototype.map.call(e, function(e) {
        return { node: e };
      });
    },
    te = [],
    ne = !1,
    oe = {
      offset: 120,
      delay: 0,
      easing: "ease",
      duration: 400,
      disable: !1,
      once: !1,
      mirror: !1,
      anchorPlacement: "top-bottom",
      startEvent: "DOMContentLoaded",
      animatedClassName: "aos-animate",
      initClassName: "aos-init",
      useClassNames: !1
    },
    ie = function() {
      return document.all && !window.atob;
    },
    ae = function() {
      arguments.length > 0 &&
        void 0 !== arguments[0] &&
        arguments[0] &&
        (ne = !0),
        ne &&
          ((te = Z(te, oe)),
          U(te),
          window.addEventListener(
            "scroll",
            h(function() {
              U(te, oe.once);
            }, 99)
          ));
    },
    re = function() {
      if (((te = ee()), se(oe.disable) || ie())) return ce();
      ae();
    },
    ce = function() {
      te.forEach(function(e, t) {
        e.node.removeAttribute("data-aos"),
          e.node.removeAttribute("data-aos-easing"),
          e.node.removeAttribute("data-aos-duration"),
          e.node.removeAttribute("data-aos-delay"),
          oe.initClassName && e.node.classList.remove(oe.initClassName),
          oe.animatedClassName && e.node.classList.remove(oe.animatedClassName);
      });
    },
    se = function(e) {
      return (
        !0 === e ||
        ("mobile" === e && Q.mobile()) ||
        ("phone" === e && Q.phone()) ||
        ("tablet" === e && Q.tablet()) ||
        ("function" == typeof e && !0 === e())
      );
    };
  return {
    init: function(e) {
      var t, n, o;
      return (
        (oe = B(oe, e)),
        (te = ee()),
        (t = re),
        (n = window.document),
        (o = new (window.MutationObserver ||
          window.WebKitMutationObserver ||
          window.MozMutationObserver)(P)),
        (W = t),
        o.observe(n.documentElement, {
          childList: !0,
          subtree: !0,
          removedNodes: !0
        }),
        se(oe.disable) || ie()
          ? ce()
          : (document
              .querySelector("body")
              .setAttribute("data-aos-easing", oe.easing),
            document
              .querySelector("body")
              .setAttribute("data-aos-duration", oe.duration),
            document
              .querySelector("body")
              .setAttribute("data-aos-delay", oe.delay),
            -1 === ["DOMContentLoaded", "load"].indexOf(oe.startEvent)
              ? document.addEventListener(oe.startEvent, function() {
                  ae(!0);
                })
              : window.addEventListener("load", function() {
                  ae(!0);
                }),
            "DOMContentLoaded" === oe.startEvent &&
              ["complete", "interactive"].indexOf(document.readyState) > -1 &&
              ae(!0),
            window.addEventListener("resize", D(ae, 50, !0)),
            window.addEventListener("orientationchange", D(ae, 50, !0)),
            te)
      );
    },
    refresh: ae,
    refreshHard: re
  };
});



//========== slick slider =======

$(".slider--big").slick({
  autoplay: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 1000,
  arrows: false,
  fade: true,
  asNavFor: ".slider--small"
});
$(".slider--small").slick({
  autoplay: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 1000,
  dots: true,
  arrows: false,
  fade: true,
  asNavFor: ".slider--big",
  appendDots: $(".slider__dots")
});

//========= AOS init =======
// AOS.init();
// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  // Settings that can be overriden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom" // defines which position of the element regarding to window should trigger the animation
});

//===== init b-lazy ====

$(document).ready(function() {
  var bLazy = new Blazy();

});

//=============== Modal Sec VARIANT ========
$('.button').click(function () {
    var buttonId = $(this).attr('id');
    $('#modal-container').removeAttr('class').addClass(buttonId);
    $('body').addClass('modal-active');
})

$('#modal__close').click(function () {
    $('#modal-container').addClass('out');
    $('body').removeClass('modal-active');
});


//======= Modal ===========

console.clear();

let body = document.body;
let modal = createModal(document.querySelector(".modal"));
let openButton = document.querySelectorAll(".open-button");

openButton.forEach(function(elem) {
  elem.addEventListener("click", function() {
    modal.open();
  });
});
//
// openButton.addEventListener("click", function () {
//     modal.open();
// });

function createModal(container) {
  let content = container.querySelector(".modal__content");
  let dialog = container.querySelector(".modal__dialog");
  let polygon = container.querySelector(".modal__polygon");
  let svg = container.querySelector(".modal__svg");

  let point1 = createPoint(45, 45);
  let point2 = createPoint(55, 45);
  let point3 = createPoint(55, 55);
  let point4 = createPoint(45, 55);

  let animation = new TimelineMax({
    onReverseComplete: onReverseComplete,
    onStart: onStart,
    paused: true
  })
    .to(
      point1,
      0.3,
      {
        x: 15,
        y: 30,
        ease: Power4.easeIn
      },
      0
    )
    .to(
      point4,
      0.3,
      {
        x: 5,
        y: 80,
        ease: Power2.easeIn
      },
      "-=0.1"
    )
    .to(point1, 0.3, {
      x: 0,
      y: 0,
      ease: Power3.easeIn
    })
    .to(
      point2,
      0.3,
      {
        x: 100,
        y: 0,
        ease: Power2.easeIn
      },
      "-=0.2"
    )
    .to(point3, 0.3, {
      x: 100,
      y: 100,
      ease: Power2.easeIn
    })
    .to(
      point4,
      0.3,
      {
        x: 0,
        y: 100,
        ease: Power2.easeIn
      },
      "-=0.1"
    )
    .to(
      container,
      1,
      {
        autoAlpha: 1
      },
      0
    )
    .to(content, 1, {
      autoAlpha: 1
    });

  let modal = {
    animation: animation,
    container: container,
    content: content,
    dialog: dialog,
    isOpen: false,
    open: open,
    close: close
  };

  body.removeChild(container);

  function onClick() {
    if (modal.isOpen) {
      close();
    }
  }

  function onStart() {
    body.appendChild(container);
    container.addEventListener("click", onClick);
  }

  function onReverseComplete() {
    container.removeEventListener("click", onClick);
    body.removeChild(container);
  }

  function open() {
    modal.isOpen = true;
    animation.play().timeScale(2);
  }

  function close() {
    modal.isOpen = false;
    animation.reverse().timeScale(2.5);
  }

  function createPoint(x, y) {
    let point = polygon.points.appendItem(svg.createSVGPoint());
    point.x = x || 0;
    point.y = y || 0;
    return point;
  }

  return modal;
}
