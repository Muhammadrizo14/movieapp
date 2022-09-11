<template>

  <div class="slider">
    <div class="callbacks_container">
      <ul class="rslides" id="slider">
        <li><img src="@/assets/images/banner.jpg" class="img-responsive" alt=""/>
          <div class="button">
            <a href="#" class="hvr-shutter-out-horizontal">Watch Now</a>
          </div>
        </li>
        <li><img src="@/assets/images/banner1.jpg" class="img-responsive" alt=""/>
          <div class="button">
            <a href="#" class="hvr-shutter-out-horizontal">Watch Now</a>
          </div>
        </li>
        <li><img src="@/assets/images/banner2.jpg" class="img-responsive" alt=""/>
          <div class="button">
            <a href="#" class="hvr-shutter-out-horizontal">Watch Now</a>
          </div>
        </li>
      </ul>
    </div>
    <div class="banner_desc">
      <div class="col-md-9">
        <ul class="list_1">
          <li>Published <span class="m_1">Feb 20, 2015</span></li>
          <li>Updated <span class="m_1">Feb 20 2015</span></li>
          <li>Rating <span class="m_1"><img src="@/assets/images/rating.png" alt=""/></span></li>
        </ul>
      </div>
      <div class="col-md-3 grid_1">
        <ul class="list_1 list_2">
          <li><i class="icon1"> </i>
            <p>2,548</p></li>
          <li><i class="icon2"> </i>
            <p>215</p></li>
          <li><i class="icon3"> </i>
            <p>546</p></li>
        </ul>
      </div>
    </div>
  </div>

</template>


<script>
    import * as jQuery from 'jquery'
    import '@/assets/js/jquery-1.11.1.min';
    // import '@/assets/js/jquery.flexisel';
    // import '@/assets/js/responsiveslides.min.js';

    export default {
        name: "slider",
        mounted() {
            /*
* File: jquery.flexisel.js
* Version: 1.0.0
* Description: Responsive carousel jQuery plugin
* Author: 9bit Studios
* Copyright 2012, 9bit Studios
* http://www.9bitstudios.com
* Free to use and abuse under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
*/

            (function ($) {

                $.fn.flexisel = function (options) {

                    var defaults = $.extend({
                        visibleItems: 4,
                        animationSpeed: 200,
                        autoPlay: false,
                        autoPlaySpeed: 3000,
                        pauseOnHover: true,
                        setMaxWidthAndHeight: false,
                        enableResponsiveBreakpoints: false,
                        responsiveBreakpoints: {
                            portrait: {
                                changePoint: 480,
                                visibleItems: 1
                            },
                            landscape: {
                                changePoint: 640,
                                visibleItems: 2
                            },
                            tablet: {
                                changePoint: 768,
                                visibleItems: 3
                            }
                        }
                    }, options);

                    /******************************
                     Private Variables
                     *******************************/

                    var object = $(this);
                    var settings = $.extend(defaults, options);
                    var itemsWidth; // Declare the global width of each item in carousel
                    var canNavigate = true;
                    var itemsVisible = settings.visibleItems;

                    /******************************
                     Public Methods
                     *******************************/

                    var methods = {

                        init: function () {

                            return this.each(function () {
                                methods.appendHTML();
                                methods.setEventHandlers();
                                methods.initializeItems();
                            });
                        },

                        /******************************
                         Initialize Items
                         *******************************/

                        initializeItems: function () {

                            var listParent = object.parent();
                            var innerHeight = listParent.height();
                            var childSet = object.children();

                            var innerWidth = listParent.width(); // Set widths
                            itemsWidth = (innerWidth) / itemsVisible;
                            childSet.width(itemsWidth);
                            childSet.last().insertBefore(childSet.first());
                            childSet.last().insertBefore(childSet.first());
                            object.css({'left': -itemsWidth});

                            object.fadeIn();
                            $(window).trigger("resize"); // needed to position arrows correctly

                        },


                        /******************************
                         Append HTML
                         *******************************/

                        appendHTML: function () {

                            object.addClass("nbs-flexisel-ul");
                            object.wrap("<div class='nbs-flexisel-container'><div class='nbs-flexisel-inner'></div></div>");
                            object.find("li").addClass("nbs-flexisel-item");

                            if (settings.setMaxWidthAndHeight) {
                                var baseWidth = $(".nbs-flexisel-item > img").width();
                                var baseHeight = $(".nbs-flexisel-item > img").height();
                                $(".nbs-flexisel-item > img").css("max-width", baseWidth);
                                $(".nbs-flexisel-item > img").css("max-height", baseHeight);
                            }

                            $("<div class='nbs-flexisel-nav-left'></div><div class='nbs-flexisel-nav-right'></div>").insertAfter(object);
                            var cloneContent = object.children().clone();
                            object.append(cloneContent);
                        },


                        /******************************
                         Set Event Handlers
                         *******************************/
                        setEventHandlers: function () {

                            var listParent = object.parent();
                            var childSet = object.children();
                            var leftArrow = listParent.find($(".nbs-flexisel-nav-left"));
                            var rightArrow = listParent.find($(".nbs-flexisel-nav-right"));

                            $(window).on("resize", function (event) {

                                methods.setResponsiveEvents();

                                var innerWidth = $(listParent).width();
                                var innerHeight = $(listParent).height();

                                itemsWidth = (innerWidth) / itemsVisible;

                                childSet.width(itemsWidth);
                                object.css({'left': -itemsWidth});

                                var halfArrowHeight = (leftArrow.height()) / 2;
                                var arrowMargin = (innerHeight / 2) - halfArrowHeight;
                                leftArrow.css("top", arrowMargin + "px");
                                rightArrow.css("top", arrowMargin + "px");

                            });

                            $(leftArrow).on("click", function (event) {
                                methods.scrollLeft();
                            });

                            $(rightArrow).on("click", function (event) {
                                methods.scrollRight();
                            });

                            if (settings.pauseOnHover == true) {
                                $(".nbs-flexisel-item").on({
                                    mouseenter: function () {
                                        canNavigate = false;
                                    },
                                    mouseleave: function () {
                                        canNavigate = true;
                                    }
                                });
                            }

                            if (settings.autoPlay == true) {

                                setInterval(function () {
                                    if (canNavigate == true)
                                        methods.scrollRight();
                                }, settings.autoPlaySpeed);
                            }

                        },

                        /******************************
                         Set Responsive Events
                         *******************************/

                        setResponsiveEvents: function () {
                            var contentWidth = $('html').width();

                            if (settings.enableResponsiveBreakpoints == true) {
                                if (contentWidth < settings.responsiveBreakpoints.portrait.changePoint) {
                                    itemsVisible = settings.responsiveBreakpoints.portrait.visibleItems;
                                } else if (contentWidth > settings.responsiveBreakpoints.portrait.changePoint && contentWidth < settings.responsiveBreakpoints.landscape.changePoint) {
                                    itemsVisible = settings.responsiveBreakpoints.landscape.visibleItems;
                                } else if (contentWidth > settings.responsiveBreakpoints.landscape.changePoint && contentWidth < settings.responsiveBreakpoints.tablet.changePoint) {
                                    itemsVisible = settings.responsiveBreakpoints.tablet.visibleItems;
                                } else {
                                    itemsVisible = settings.visibleItems;
                                }
                            }
                        },

                        /******************************
                         Scroll Left
                         *******************************/

                        scrollLeft: function () {

                            if (canNavigate == true) {
                                canNavigate = false;

                                var listParent = object.parent();
                                var innerWidth = listParent.width();

                                itemsWidth = (innerWidth) / itemsVisible;

                                var childSet = object.children();

                                object.animate({
                                        'left': "+=" + itemsWidth
                                    },
                                    {
                                        queue: false,
                                        duration: settings.animationSpeed,
                                        easing: "linear",
                                        complete: function () {
                                            childSet.last().insertBefore(childSet.first()); // Get the first list item and put it after the last list item (that's how the infinite effects is made)
                                            methods.adjustScroll();
                                            canNavigate = true;
                                        }
                                    }
                                );
                            }
                        },

                        /******************************
                         Scroll Right
                         *******************************/

                        scrollRight: function () {

                            if (canNavigate == true) {
                                canNavigate = false;

                                var listParent = object.parent();
                                var innerWidth = listParent.width();

                                itemsWidth = (innerWidth) / itemsVisible;

                                var childSet = object.children();

                                object.animate({
                                        'left': "-=" + itemsWidth
                                    },
                                    {
                                        queue: false,
                                        duration: settings.animationSpeed,
                                        easing: "linear",
                                        complete: function () {
                                            childSet.first().insertAfter(childSet.last()); // Get the first list item and put it after the last list item (that's how the infinite effects is made)
                                            methods.adjustScroll();
                                            canNavigate = true;
                                        }
                                    }
                                );
                            }
                        },

                        /******************************
                         Adjust Scroll
                         *******************************/

                        adjustScroll: function () {

                            var listParent = object.parent();
                            var childSet = object.children();

                            var innerWidth = listParent.width();
                            itemsWidth = (innerWidth) / itemsVisible;
                            childSet.width(itemsWidth);
                            object.css({'left': -itemsWidth});
                        }

                    };

                    if (methods[options]) { 	// $("#element").pluginName('methodName', 'arg1', 'arg2');
                        return methods[options].apply(this, Array.prototype.slice.call(arguments, 1));
                    } else if (typeof options === 'object' || !options) { 	// $("#element").pluginName({ option: 1, option:2 });
                        return methods.init.apply(this);
                    } else {
                        $.error('Method "' + method + '" does not exist in flexisel plugin!');
                    }
                };

            })(jQuery);
            /*! http://responsiveslides.com v1.54 by @viljamis */
            (function (c, I, B) {
                c.fn.responsiveSlides = function (l) {
                    var a = c.extend({
                        auto: !0,
                        speed: 500,
                        timeout: 4E3,
                        pager: !1,
                        nav: !1,
                        random: !1,
                        pause: !1,
                        pauseControls: !0,
                        prevText: "Previous",
                        nextText: "Next",
                        maxwidth: "",
                        navContainer: "",
                        manualControls: "",
                        namespace: "rslides",
                        before: c.noop,
                        after: c.noop
                    }, l);
                    return this.each(function () {
                        B++;
                        var f = c(this), s, r, t, m, p, q, n = 0, e = f.children(), C = e.size(),
                            h = parseFloat(a.speed), D = parseFloat(a.timeout), u = parseFloat(a.maxwidth),
                            g = a.namespace, d = g + B, E = g + "_nav " + d + "_nav", v = g + "_here", j = d + "_on",
                            w = d + "_s", k = c("<ul class='" + g + "_tabs " + d + "_tabs' />"),
                            x = {"float": "left", position: "relative", opacity: 1, zIndex: 2},
                            y = {"float": "none", position: "absolute", opacity: 0, zIndex: 1}, F = function () {
                                var b = (document.body || document.documentElement).style, a = "transition";
                                if ("string" === typeof b[a]) return !0;
                                s = ["Moz", "Webkit", "Khtml", "O", "ms"];
                                var a = a.charAt(0).toUpperCase() + a.substr(1), c;
                                for (c = 0; c < s.length; c++) if ("string" === typeof b[s[c] + a]) return !0;
                                return !1
                            }(), z = function (b) {
                                a.before(b);
                                F ? (e.removeClass(j).css(y).eq(b).addClass(j).css(x),
                                    n = b, setTimeout(function () {
                                    a.after(b)
                                }, h)) : e.stop().fadeOut(h, function () {
                                    c(this).removeClass(j).css(y).css("opacity", 1)
                                }).eq(b).fadeIn(h, function () {
                                    c(this).addClass(j).css(x);
                                    a.after(b);
                                    n = b
                                })
                            };
                        a.random && (e.sort(function () {
                            return Math.round(Math.random()) - 0.5
                        }), f.empty().append(e));
                        e.each(function (a) {
                            this.id = w + a
                        });
                        f.addClass(g + " " + d);
                        l && l.maxwidth && f.css("max-width", u);
                        e.hide().css(y).eq(0).addClass(j).css(x).show();
                        F && e.show().css({
                            "-webkit-transition": "opacity " + h + "ms ease-in-out",
                            "-moz-transition": "opacity " +
                                h + "ms ease-in-out",
                            "-o-transition": "opacity " + h + "ms ease-in-out",
                            transition: "opacity " + h + "ms ease-in-out"
                        });
                        if (1 < e.size()) {
                            if (D < h + 100) return;
                            if (a.pager && !a.manualControls) {
                                var A = [];
                                e.each(function (a) {
                                    a += 1;
                                    A += "<li><a href='#' class='" + w + a + "'>" + a + "</a></li>"
                                });
                                k.append(A);
                                l.navContainer ? c(a.navContainer).append(k) : f.after(k)
                            }
                            a.manualControls && (k = c(a.manualControls), k.addClass(g + "_tabs " + d + "_tabs"));
                            (a.pager || a.manualControls) && k.find("li").each(function (a) {
                                c(this).addClass(w + (a + 1))
                            });
                            if (a.pager || a.manualControls) q =
                                k.find("a"), r = function (a) {
                                q.closest("li").removeClass(v).eq(a).addClass(v)
                            };
                            a.auto && (t = function () {
                                p = setInterval(function () {
                                    e.stop(!0, !0);
                                    var b = n + 1 < C ? n + 1 : 0;
                                    (a.pager || a.manualControls) && r(b);
                                    z(b)
                                }, D)
                            }, t());
                            m = function () {
                                a.auto && (clearInterval(p), t())
                            };
                            a.pause && f.hover(function () {
                                clearInterval(p)
                            }, function () {
                                m()
                            });
                            if (a.pager || a.manualControls) q.bind("click", function (b) {
                                b.preventDefault();
                                a.pauseControls || m();
                                b = q.index(this);
                                n === b || c("." + j).queue("fx").length || (r(b), z(b))
                            }).eq(0).closest("li").addClass(v),
                            a.pauseControls && q.hover(function () {
                                clearInterval(p)
                            }, function () {
                                m()
                            });
                            if (a.nav) {
                                g = "<a href='#' class='" + E + " prev'>" + a.prevText + "</a><a href='#' class='" + E + " next'>" + a.nextText + "</a>";
                                l.navContainer ? c(a.navContainer).append(g) : f.after(g);
                                var d = c("." + d + "_nav"), G = d.filter(".prev");
                                d.bind("click", function (b) {
                                    b.preventDefault();
                                    b = c("." + j);
                                    if (!b.queue("fx").length) {
                                        var d = e.index(b);
                                        b = d - 1;
                                        d = d + 1 < C ? n + 1 : 0;
                                        z(c(this)[0] === G[0] ? b : d);
                                        if (a.pager || a.manualControls) r(c(this)[0] === G[0] ? b : d);
                                        a.pauseControls || m()
                                    }
                                });
                                a.pauseControls && d.hover(function () {
                                    clearInterval(p)
                                }, function () {
                                    m()
                                })
                            }
                        }
                        if ("undefined" === typeof document.body.style.maxWidth && l.maxwidth) {
                            var H = function () {
                                f.css("width", "100%");
                                f.width() > u && f.css("width", u)
                            };
                            H();
                            c(I).bind("resize", function () {
                                H()
                            })
                        }
                    })
                }
            })(jQuery, this, 0);


        }
    }
</script>


<style scoped>
  @import "../assets/css/style.css";
  @import "../assets/css/bootstrap.css";
</style>