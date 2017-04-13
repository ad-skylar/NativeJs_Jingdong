;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-home" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M957.725929 523.872399c-10.998946 11.491729-11.76134 10.558473-45.118396 10.558473l-65.871896 0.010233 0 344.488869c0 52.571333-27.796182 83.272565-78.636117 83.272565l-92.083935 0-35.70564-0.671289L640.309947 663.85864c0-35.786041-18.545115-44.781926-39.779588-44.781926L437.096546 619.076714c-23.844011 0-42.709434 9.958816-42.709434 43.092447l0 299.748898-47.406602 0.282433-80.302128 0c-48.269284 0-78.616673-27.386744-78.616673-88.283696L188.061709 534.587438l-67.837747 0.010233c-35.786484 0-37.893558-5.52483-46.424188-15.925714-16.919015-20.551058-15.956044-46.155203 27.034811-81.543178l377.084341-350.779132c11.160635-8.483208 22.400067-25.007557 36.649166-25.007557l5.962026 0c14.249099 0 25.507975 13.116739 36.666563 21.588691l373.473969 354.029152C966.638267 460.899158 980.125996 500.470409 957.725929 523.872399z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-home1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M979.774943 516.757351c0.271188-9.781784-4.690009-20.431332-13.949272-29.474288L546.846062 77.860299c-19.271711-18.844184-50.552425-18.844184-69.823113 0L58.041294 487.284085c-10.503656 10.260691-15.994947 21.626553-14.21125 32.055067-0.120755 0.895393-0.203646 1.801019-0.203646 2.728134 0 11.489682 9.529427 20.806885 21.292826 20.806885l110.524778 0c-2.78965 6.102998-4.062696 13.175067-4.062696 20.722974l0 353.805048c0 22.981411 19.063971 41.611723 42.584628 41.611723l596.197075 0c23.520657 0 42.584628-18.630313 42.584628-41.611723L852.747637 563.597145c0.287561-8.266267-0.705088-15.118326-2.858214-20.722974L959.208695 542.874171c11.762375 0 21.292826-9.318226 21.292826-20.806885C980.501521 520.229428 980.233404 518.456039 979.774943 516.757351zM810.161985 875.785354c0 22.986527-19.063971 41.61684-42.584628 41.61684L256.550562 917.402193c-23.520657 0-42.584628-18.630313-42.584628-41.61684L213.965934 521.985422c-0.001023 0-0.00307 0-0.004093 0-0.046051-11.450796-9.553988-20.72502-21.287709-20.72502l-85.058735 0 369.407553-360.983541c19.271711-18.837021 50.552425-18.837021 69.823113 0.007163l369.406529 360.975355-84.796757 0c-11.734745 0-21.242682 9.274224-21.287709 20.72502-0.001023 0-0.00307 0-0.004093 0L810.164032 875.785354z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-arrow-right" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M307.234383 118.302383c-8.79941 8.79941-8.79941 23.069415 0 31.869848L669.062152 512 307.234383 873.827769c-8.800433 8.800433-8.79941 23.069415 0 31.869848 8.800433 8.800433 23.069415 8.800433 31.869848 0l377.762693-377.762693c1.100054-1.100054 2.062985-2.285043 2.88777-3.5345 1.115404-1.689479 1.88493-3.518127 2.49789-5.38873 0.542352-1.654686 0.87902-3.346211 1.028423-5.065366 0.260943-3.018753-0.076748-6.05081-1.028423-8.955976-0.61296-1.870604-1.382487-3.700275-2.49789-5.389754-0.824785-1.249457-1.787716-2.435469-2.88777-3.535523L339.103208 118.302383C330.303798 109.50195 316.034816 109.500926 307.234383 118.302383z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-arrowleft" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M358.899578 511.536442l383.478881-383.506511-76.68452 0L282.161846 511.536442l383.53107 383.53107 76.68452 0L358.899578 511.536442 358.899578 511.536442z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)