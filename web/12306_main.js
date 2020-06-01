/*!
 * SuperSlide v2.1.2
 * 轻松解决网站大部分特效展示问题
 * 详尽信息请看官网：http://www.SuperSlide2.com/
 *
 * Copyright 2011-2015, 大话主席
 *
 * 请尊重原创，保留头部版权
 * 在保留版权的前提下可应用于个人或商业用途

 * v2.1.1：修复当调用多个SuperSlide，并设置returnDefault:true 时返回defaultIndex索引错误
 * v2.1.2：增加参数设置vis:"auto"，解决左滚动自适应窗口宽度问题。适应情况：vis:"auto",scroll:1, effect:"left或leftLoop"（注：此为临时解决方案，日后版本可能变动）
 * v2.1.2：修复 mouseOverStop 和 autoPlay均为false下，点击切换按钮后会自动播放bug

 */

function timeChangetype(e) {
    return Date.parse(new Date(e))
}
function GetDateStr(e) {
    var t = new Date;
    return t.setDate(t.getDate() + e),
        t.getFullYear() + "-" + (t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1) + "-" + (t.getDate() < 10 ? "0" + t.getDate() : t.getDate())
}
function GetDateStr2(e, t) {
    var a = new Date;
    return a.setDate(a.getDate() + t),
        a.getFullYear() + "-" + (a.getMonth() + 1 < 10 ? "0" + (a.getMonth() + 1) : a.getMonth() + 1) + "-" + (a.getDate() < 10 ? "0" + a.getDate() : a.getDate())
}
function setStorage(e, t) {
    e && ("string" != typeof t && (t = JSON.stringify(t)),
        window.sessionStorage.setItem(e, t))
}
function getStorage(e) {
    if (e)
        return window.sessionStorage.getItem(e)
}
function removeStore(e) {
    if (e)
        return window.sessionStorage.removeItem(e)
}
function setLocalStorage(e, t) {
    e && ("string" != typeof t && (t = JSON.stringify(t)),
        window.localStorage.setItem(e, t))
}
function getLocalStorage(e) {
    if (e)
        return window.localStorage.getItem(e)
}
function removeLocalStore(e) {
    e && window.localStorage.removeItem(e)
}
function noChoseCity(e, t, a, r) {
    r = r || "请选择出发城市",
        a = a || "347px",
        t = t || "0",
        e.parent().parent().append('<div class="tooltip-error" data-id=' + e.attr("id") + ' style="left:' + a + "; top: " + t + '; display: block;"><i class="icon icon-plaint-fill"></i>' + r + "</div>")
}
function footerFn() {
    $(".content").css("height", "auto");
    var e = $(window).height()
        , t = $(".footer").height()
        , a = $(".content").height()
        , r = e - 109 - t;
    a <= r && $(".content").height(r)
}
function getUrlParms(e) {
    var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)")
        , a = window.location.search.substr(1).match(t);
    return null != a ? unescape(a[2]) : null
}
function deepClone(e) {
    var t = JSON.stringify(e);
    return JSON.parse(t)
}
function getScSnameListFn() {
    $.ajax({
        url: getScSnameListpr,
        type: "POST",
        timeout: 1e4,
        dataType: "json",
        data: {
            station_telecode: $("#sale").val()
        },
        success: function (e) {
            var t = e.data;
            if ($(".content").height(""),
                $(".sale-list").empty(),
                e.data) {
                $("#ticket-box-tips").show();
                for (var a = 0; a < t.length; a++)
                    if (citys[t[a]]) {
                        var r = '<li><h3 class="sale-tit">' + t[a] + '</h3><div class="sale-time">' + (citys[t[a]] || "暂无") + "</div></li>";
                        $(".sale-list").append(r),
                            $(".result-none").hide()
                    }
            } else if (citys[$("#saleText").val()]) {
                var r = '<li><h3 class="sale-tit">' + $("#saleText").val() + '</h3><div class="sale-time">' + (citys[$("#saleText").val()] || "暂无") + "</div></li>";
                $(".sale-list").append(r),
                    $("#ticket-box-tips").show(),
                    $(".result-none").hide()
            } else
                $(".sale-list").empty(),
                    $("#ticket-box-tips").hide(),
                    $(".result-none").show();
            footerFn()
        },
        error: function (e) { }
    })
}
function loadingShow() {
    $(".mask").fadeIn()
}
function loadingHide() {
    $(".mask").fadeOut()
}
define("g/g-header", ["jquery"], function (e) {
    function t() {
        function t(e) {
            e[0].indexOf(e[1]) > -1 && (e[0] = e[0].replace(e[1], '<span style="color:red;">' + e[1] + "</span>"));
            var t = e[2];
            return e[4] += "<li url=" + e[3] + '><i class="icon icon-' + t + ' "> </i>' + e[0] + '<span class="list-txt"></span></li>',
                resList = e[4],
                resList
        }
        function r(a) {
            e.ajax({
                url: getSearchUrl,
                method: "GET",
                timeout: 1e4,
                data: {
                    keyword: a,
                    suorce: "",
                    action: ""
                },
                dataType: "jsonp",
                xhrFields: {
                    withCredentials: !0
                },
                crossDomain: !0,
                success: function (r) {
                    var s = JSON.stringify(r.data);
                    localStorage.setItem("common_search_firstData", s),
                        h = localStorage.getItem("common_search_firstData");
                    var d = r.data.length;
                    if (0 == d) {
                        for (var p = [{
                            value: "城市",
                            ico: "place",
                            url: turnToCity
                        }, {
                            value: "车票",
                            ico: "jianpiao",
                            url: turnToTicket
                        }, {
                            value: "正晚点",
                            ico: "time",
                            url: turnToZwd
                        }, {
                            value: "起售时间",
                            ico: "selltime",
                            url: turnToSaletime
                        }, {
                            value: "检票口",
                            ico: "jianpiao",
                            url: turnToTicketcheck
                        }, {
                            value: "时刻表",
                            ico: "date",
                            url: turnToTrainInfo
                        }, {
                            value: "代售点",
                            ico: "train",
                            url: turnToAgencySellTicket
                        }, {
                            value: "交通查询",
                            ico: "zhanche",
                            url: turnToTraffic
                        }, {
                            value: "天气",
                            ico: "weather",
                            url: turnToWeather
                        }, {
                            value: "问答",
                            ico: "wenda",
                            url: turnToAnswer
                        }, {
                            value: "服务",
                            ico: "fuwu",
                            url: turnToService
                        }, {
                            value: "订单",
                            ico: "dingdanchaxun",
                            url: turnToOrder
                        }], d = p.length, f = "", _ = 0; _ <= d - 1; _++)
                            f += "<li" + p[_].url + '><i class="icon icon-' + p[_].ico + ' "> </i>' + p[_].value + '<span class="list-txt"></span></li>';
                        return e(".search-down-list").html(f),
                            e(".search-down").fadeIn(),
                            l = "noresults",
                            e(".search-down-list").off("click", "li").on("click", "li", function () {
                                "" != e(this)[0].getAttribute("url") && void 0 != e(this)[0].getAttribute("url") && null != e(this)[0].getAttribute("url") && window.open(e(this)[0].getAttribute("url"))
                            }),
                            void e(".search-down").fadeOut()
                    }
                    for (var v = "", _ = 0; _ <= d - 1; _++)
                        if ("001" == r.data[_].type) {
                            var m = "huochepiao";
                            v = t([r.data[_].word, a, m, r.data[_].url, v])
                        } else if ("view" == r.data[_].type) {
                            var m = "wenda";
                            v = t([r.data[_].word, a, m, r.data[_].url, v])
                        } else if ("002" == r.data[_].type) {
                            var m = "selltime";
                            v = t([r.data[_].word, a, m, r.data[_].url, v])
                        } else if ("003" == r.data[_].type) {
                            var m = "time";
                            v = t([r.data[_].word, a, m, r.data[_].url, v])
                        } else if ("004" == r.data[_].type) {
                            var m = "selltime";
                            v = t([r.data[_].word, a, m, r.data[_].url, v])
                        } else if ("006" == r.data[_].type) {
                            var m = "yupiao";
                            v = t([r.data[_].word, a, m, r.data[_].url, v])
                        } else if ("100" == r.data[_].type) {
                            var m = "train";
                            v = t([r.data[_].word, a, m, r.data[_].url, v])
                        } else if ("101" == r.data[_].type) {
                            var m = "huochepiao";
                            v = t([r.data[_].word, a, m, r.data[_].url, v])
                        } else if ("102" == r.data[_].type) {
                            var m = "dingdanchaxun";
                            v = t([r.data[_].word, a, m, r.data[_].url, v])
                        } else if ("103" == r.data[_].type) {
                            var m = "dingdanchaxun";
                            v = t([r.data[_].word, a, m, r.data[_].url, v])
                        } else if ("104" == r.data[_].type) {
                            var m = "user";
                            v = t([r.data[_].word, a, m, r.data[_].url, v])
                        } else if ("105" == r.data[_].type) {
                            var m = "wenda";
                            v = t([r.data[_].word, a, m, r.data[_].url, v])
                        } else if ("106" == r.data[_].type) {
                            var m = "wenda";
                            v = t([r.data[_].word, a, m, r.data[_].url, v])
                        } else if ("107" == r.data[_].type) {
                            var m = "wenda";
                            v = t([r.data[_].word, a, m, r.data[_].url, v])
                        } else if ("108" == r.data[_].type) {
                            var m = "wenda";
                            v = t([r.data[_].word, a, m, r.data[_].url, v])
                        } else if ("109" == r.data[_].type) {
                            var m = "wenda";
                            v = t([r.data[_].word, a, m, r.data[_].url, v])
                        } else if ("110" == r.data[_].type) {
                            var m = "dingcan";
                            v = t([r.data[_].word, a, m, r.data[_].url, v])
                        } else if ("111" == r.data[_].type) {
                            var m = "user";
                            v = t([r.data[_].word, a, m, r.data[_].url, v])
                        } else if ("112" == r.data[_].type) {
                            var m = "wenda";
                            v = t([r.data[_].word, a, m, r.data[_].url, v])
                        } else if ("113" == r.data[_].type) {
                            var m = "wenda";
                            v = t([r.data[_].word, a, m, r.data[_].url, v])
                        } else if ("114" == r.data[_].type) {
                            var m = "wenda";
                            v = t([r.data[_].word, a, m, r.data[_].url, v])
                        } else if ("115" == r.data[_].type) {
                            var m = "fuwu";
                            v = t([r.data[_].word, a, m, r.data[_].url, v])
                        } else if ("116" == r.data[_].type) {
                            var m = "fuwu";
                            v = t([r.data[_].word, a, m, r.data[_].url, v])
                        } else if ("117" == r.data[_].type) {
                            var m = "fuwu";
                            v = t([r.data[_].word, a, m, r.data[_].url, v])
                        } else if ("118" == r.data[_].type) {
                            var m = "fuwu";
                            v = t([r.data[_].word, a, m, r.data[_].url, v])
                        } else if ("119" == r.data[_].type) {
                            var m = "dingdanchaxun";
                            v = t([r.data[_].word, a, m, r.data[_].url, v])
                        } else if ("120" == r.data[_].type) {
                            var m = "xiangdao";
                            v = t([r.data[_].word, a, m, r.data[_].url, v])
                        } else if ("121" == r.data[_].type) {
                            var m = "shanglv";
                            v = t([r.data[_].word, a, m, r.data[_].url, v])
                        } else if ("122" == r.data[_].type) {
                            var m = "user";
                            v = t([r.data[_].word, a, m, r.data[_].url, v])
                        } else if ("123" == r.data[_].type) {
                            var m = "user";
                            v = t([r.data[_].word, a, m, r.data[_].url, v])
                        } else if ("124" == r.data[_].type) {
                            var m = "user";
                            v = t([r.data[_].word, a, m, r.data[_].url, v])
                        } else if ("125" == r.data[_].type) {
                            var m = "fuwu";
                            v = t([r.data[_].word, a, m, r.data[_].url, v])
                        } else if ("126" == r.data[_].type) {
                            var m = "wenda";
                            v = t([r.data[_].word, a, m, r.data[_].url, v])
                        } else if ("127" == r.data[_].type) {
                            var m = "dingdanchaxun";
                            v = t([r.data[_].word, a, m, r.data[_].url, v])
                        } else if ("128" == r.data[_].type) {
                            var m = "dingcan";
                            v = t([r.data[_].word, a, m, r.data[_].url, v])
                        } else if ("129" == r.data[_].type) {
                            var m = "fuwu";
                            v = t([r.data[_].word, a, m, r.data[_].url, v])
                        } else if ("130" == r.data[_].type) {
                            var m = "user";
                            v = t([r.data[_].word, a, m, r.data[_].url, v])
                        } else if ("131" == r.data[_].type) {
                            var m = "dingdanchaxun";
                            v = t([r.data[_].word, a, m, r.data[_].url, v])
                        }
                    e(".search-down-list").html(v),
                        e(".search-down").fadeIn(),
                        e(".search-down-list").off("click", "li").on("click", "li", function () {
                            var t = {
                                innerText: e(this)[0].innerText,
                                url: e(this)[0].getAttribute("url")
                            };
                            if ("" != t.url && void 0 != t.url && null != t.url) {
                                window.open(e(this).attr("url")),
                                    c.unshift(t);
                                var a = c.slice(0, 10);
                                n("searchHistory", JSON.stringify(a), 60),
                                    o = JSON.parse(i("searchHistory")),
                                    u = o;
                                for (var r = "", s = 0; s <= u.length - 1; s++)
                                    r += "<li url=" + u[s].url + ">" + u[s].innerText + "</li>";
                                e(".search-history-list").html(r)
                            }
                        })
                },
                error: function (e) { }
            })
        }
        function i(e) {
            var t = document.cookie.indexOf(e)
                , a = document.cookie.indexOf(";", t);
            return -1 == t ? "" : unescape(document.cookie.substring(t + e.length + 1, a > t ? a : document.cookie.length))
        }
        function n(e, t, a, r, i, n) {
            var o = document.domain;
            o = o.substring(o.indexOf(".") + 1, o.length);
            var s = new Date;
            s.setTime(s.getTime() + 1e3 * a),
                document.cookie = escape(e) + "=" + escape(t) + (r ? "; path=" + r : ";path=/") + "; domain=" + o + (n ? "; secure" : "") + ";expires=" + s
        }
        jQuery.support.cors = !0;
        var o, s, l, c = [], u = [], d = !0;
        e(".header-search .search-input").on("focus", function () {
            if (d = !0,
                p.splice(0, p.length),
                e(this).addClass("focus"),
                e(".search-btn").css({
                    background: "#2676E3"
                }),
                e(".search-down").fadeOut(),
                e(".search-input").val(""),
                "" == e(".search-input").val() && (b = 0),
                i("searchHistory"))
                if (o = JSON.parse(i("searchHistory")),
                    u = o,
                    c = u,
                    0 != u.length) {
                    for (var t = "", a = 0; a <= u.length - 1; a++)
                        t += "<li url=" + u[a].url + ">" + u[a].innerText + "</li>";
                    e(".search-history-list").html(t),
                        e(".search-history").fadeIn()
                } else
                    e(".search-history").fadeOut();
            else
                "" != u ? e(".search-history").fadeIn() : e(".search-history").fadeOut();
            e(".search-btn")[0].onclick = function () {
                var t = e(".header-search .search-input").val();
                if (t = t.replace(/^ +| +$/g, ""),
                    !(t.length <= 0)) {
                    for (var a = e(".search-input").val(), h = "[@`~!#$^&*()=|{}':;',\\[\\].<>《》/?~！#￥……&*（）——|{}【】‘；：”“'。，、？]‘’", p = a.length, f = 0; f <= p - 1; f++)
                        if (h.indexOf(a[f]) > -1)
                            return;
                    1 == d && r(a);
                    var _ = e(".search-down-list li");
                    if ("noresults" == l)
                        ;
                    else {
                        if (0 == _.length)
                            return;
                        window.open(_.eq(0).attr("url"))
                    }
                    var v = {
                        innerText: a,
                        url: _.eq(0).attr("url")
                    };
                    c.unshift(v),
                        s = c.slice(0, 10),
                        n("searchHistory", JSON.stringify(s), 60),
                        o = JSON.parse(i("searchHistory")),
                        u = o,
                        e(".search-input").val("");
                    for (var m = "", f = 0; f <= u.length; f++) {
                        for (var f = 0; f <= u.length - 1; f++)
                            m += "<li url=" + u[f].url + ">" + u[f].innerText + "</li>";
                        e(".search-history-list").html(m)
                    }
                }
            }
                ,
                e(".search-history-list")[0].onclick = function (t) {
                    var t = t || window.event
                        , a = t.target || t.srcElement;
                    if ("li" === a.nodeName.toLowerCase()) {
                        if ("undefined" == a.getAttribute("url"))
                            return;
                        e(".search-down-list li");
                        window.open(a.getAttribute("url"))
                    }
                }
                ,
                e(".history-clear").on("click", function () {
                    c.splice(0, c.length),
                        s = c.slice(0, 10),
                        n("searchHistory", JSON.stringify(s), 60),
                        o = JSON.parse(i("searchHistory")),
                        u = o,
                        list = "",
                        e(".search-history-list").html(u)
                })
        });
        var h, p = [];
        if (navigator.userAgent.indexOf("Trident") > -1) {
            var f = (navigator.appName,
                navigator.appVersion)
                , _ = f.split(";")
                , v = _ && _.length > 1
                , m = v ? _[1].replace(/[ ]/g, "") : "";
            document.onmousedown = function (t) {
                var t = t || window.event;
                if ("MSIE8.0" == m || "MSIE9.0" == m || "MSIE10.0" == m || "WOW64" == m) {
                    var a = t.clientX
                        , r = t.clientY
                        , i = e("#search-input").offset().left
                        , n = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                            i + e("#search-input").outerWidth())
                        , o = e("#search-input").offset().top
                        , s = e("#search-input").outerHeight()
                        , l = o + s + 204;
                    (a < i || a > n || r < o || r > l) && (e(".search-down").fadeOut(),
                        e(".search-history").fadeOut(),
                        p.splice(0, p.length))
                }
            }
        } else
            e(".header-search .search-input").on("blur", function () {
                e(".search-history").fadeOut(),
                    e(this).removeClass("focus"),
                    e(".search-btn").css({
                        "background-color": "#3B99FC"
                    }),
                    e(".search-down").fadeOut(),
                    p.splice(0, p.length)
            });
        var g, y, w, b = 0;
        e(".header-search .search-input").on("keyup", function (t) {
            function a(e) {
                void 0 !== e && "" !== e && window.open(e)
            }
            8 == t.keyCode && (b = 0),
                e(".search-history").fadeOut();
            g = t.timeStamp,
                16 != t.keyCode && 38 != t.keyCode && 40 != t.keyCode && 37 != t.keyCode && 39 != t.keyCode && setTimeout(function () {
                    try {
                        if (g - t.timeStamp == 0) {
                            k = e(".search-input").val().toUpperCase(),
                                "" == k && (e(".search-down-list").html(""),
                                    e(".search-down").fadeOut()),
                                p.push(k);
                            for (var a = "[@`~!#$^&*()=|{}':;',\\[\\].<>《》/?~！#￥……&*（）——|{}【】‘；：”“'。，、？]‘’", i = k.length, n = 0; n <= i - 1; n++) {
                                if (a.indexOf(k[n]) > -1)
                                    return e(".search-down-list").html(""),
                                        e(".search-down").fadeOut(),
                                        void (d = !1);
                                d = !0
                            }
                            var o = p.length;
                            if ("" != k)
                                if (k.indexOf(p[o - 2]) > -1) {
                                    e(".search-down-list").html(""),
                                        y = JSON.parse(h),
                                        w = y.length;
                                    for (var s = "", l = 0, n = 0; n <= w - 1; n++)
                                        if (y[n].word.indexOf(k) > -1 && "001" == y[n].type) {
                                            l++,
                                                y[n].word = y[n].word.replace(k, '<span style="color:red;">' + k + "</span>");
                                            s += "<li url=" + y[n].url + '><i class="icon icon-huochepiao "> </i>' + y[n].word + '<span class="list-txt"></span></li>'
                                        }
                                    0 == l && 1 == d && r(k),
                                        e(".search-down-list").html(s)
                                } else
                                    1 == d && r(k)
                        }
                    } catch (t) {
                        k = e(".search-input").val().toUpperCase();
                        for (var a = "[@`~!#$^&*()=|{}':;',\\[\\].<>《》/?~！#￥……&*（）——|{}【】‘；：”“'。，、？]‘’", i = k.length, n = 0; n <= i - 1; n++) {
                            if (a.indexOf(k[n]) > -1)
                                return e(".search-down-list").html(""),
                                    e(".search-down").fadeOut(),
                                    void (d = !1);
                            d = !0
                        }
                        "" != k && 1 == d && r(k)
                    }
                }, 500);
            var l = e(".search-down-list li");
            if (1 == b && 40 != t.keyCode && (b = 0),
                40 == t.keyCode && b <= l.length - 1) {
                b++;
                for (var f = 0; f <= l.length - 1; f++)
                    l.eq(f).css({
                        background: "",
                        color: "black"
                    }),
                        l.eq(f).children().eq(0).css({
                            color: "#3B99FC"
                        });
                if (l.eq(b - 1).css({
                    background: "#3B99FC",
                    color: "white"
                }),
                    l.eq(b - 1).children().eq(0).css({
                        color: "white"
                    }),
                    e("#search-input").val(l.eq(b - 1)[0].innerText),
                    b >= 0 && b < 7)
                    e(".search-down-list").scrollTop(0);
                else if (6 != b && parseInt(b / 6) >= 1) {
                    var _ = parseInt(b / 6) + 1
                        , v = 204 * (_ - 1) - 30;
                    e(".search-down-list").scrollTop(v)
                }
                l.eq(b - 1).click(function () {
                    window.open(l.eq(b - 1).attr("url"))
                })
            }
            if (38 == t.keyCode && b > 0) {
                b--;
                for (var f = 0; f <= l.length - 1; f++)
                    l.eq(f).css({
                        background: "",
                        color: "black"
                    }),
                        l.eq(f).children().eq(0).css({
                            color: "#3B99FC"
                        });
                if (l.eq(b - 1).css({
                    background: "#3B99FC",
                    color: "white"
                }),
                    l.eq(b - 1).children().eq(0).css({
                        color: "white"
                    }),
                    e("#search-input").val(l.eq(b - 1)[0].innerText),
                    b >= 0 && b < 7)
                    e(".search-down-list").scrollTop(0),
                        0 == b && (b = 1);
                else if (6 != b && parseInt(b / 6) >= 1) {
                    var _ = parseInt(b / 6) + 1
                        , v = 203.5 * (_ - 1) - 30;
                    e(".search-down-list").scrollTop(v)
                }
                l.eq(b - 1).on("click", function () {
                    window.open(l.eq(b).attr("url"))
                })
            }
            if (13 == t.keyCode) {
                var m, D = e(".header-search .search-input").val();
                if (D = D.replace(/^ +| +$/g, ""),
                    D.length <= 0)
                    return;
                var k = e(".search-input").val();
                0 == b ? (a(l.eq(0).attr("url")),
                    m = l.eq(0).attr("url")) : (a(l.eq(b - 1).attr("url")),
                        m = l.eq(b - 1).attr("url"));
                for (var C = {
                    innerText: k,
                    url: m
                }, T = "[@`~!#$^&*()=|{}':;',\\[\\].<>《》/?~！#￥……&*（）——|{}【】‘；：”“'。，、？]‘’", M = k.length, f = 0; f <= M - 1; f++)
                    if (T.indexOf(k[f]) > -1)
                        return;
                c.unshift(C),
                    s = c.slice(0, 10),
                    n("searchHistory", JSON.stringify(s), 60),
                    o = JSON.parse(i("searchHistory")),
                    u = o,
                    e(".search-input").val("")
            }
            for (var S = "", f = 0; f <= u.length - 1; f++)
                S += "<li url=" + u[f].url + ">" + u[f].innerText + "</li>";
            e(".search-history-list").html(S)
        }),
            e(".search-down .close").on("click", function () {
                e(".search-input").val(""),
                    e(this).parent().fadeOut(),
                    p.splice(0, p.length)
            }),
            a()
    }
    function a() {
        var t;
        i(),
            e.ajax({
                url: loginConf,
                type: "POST",
                timeout: 1e4,
                async: !1,
                success: function (a) {
                    if (a.data)
                        if (window.psr_qr_code_result = a.data.psr_qr_code_result,
                            window.hb_qr_code_result = a.data.hb_qr_code_result,
                            stu_control = a.data.stu_control,
                            other_control = a.data.other_control,
                            window.studentDates = a.data.studentDate,
                            "Y" == a.data.is_login)
                            t = "Y",
                                window.isLogin = t,
                                window.ajaxLogin_flag = !0,
                                n(),
                                e("#J-header-logout a.txt-primary").html(a.data.name),
                                e("#J-header-logout a.logout").attr("href", logout);
                        else {
                            var i = ["emailSuccess", "emailError"]
                                , l = r(document.URL);
                            -1 == i.indexOf(l) && ("Y" === a.data.is_uam_login ? o(a.data) : (isOver = !isOver,
                                s(static_url_path + "/" + a.data.login_url)))
                        }
                },
                error: function (e) {
                    window.ajaxLogin_flag = !0
                }
            })
    }
    function r(e) {
        var t = /(.*\/)*([^.]+).*/gi;
        return e.replace(t, "$2")
    }
    function i() {
        e("#J-header-login").show(),
            e("#J-header-logout").hide()
    }
    function n() {
        e("#J-header-login").hide(),
            e("#J-header-logout").show()
    }
    function o(t) {
        e.ajax({
            url: passport_apptk_static,
            data: {
                appid: passport_appId
            },
            xhrFields: {
                withCredentials: !0
            },
            type: "POST",
            timeout: 1e4,
            async: !1,
            success: function (e) {
                "0" == e.result_code ? (isLogin = "Y",
                    window.isLogin = isLogin,
                    window.ajaxLogin = (new Date).getTime(),
                    isOver = !isOver,
                    s(userLogin_url)) : (isLogin = "N",
                        window.isLogin = isLogin,
                        window.ajaxLogin = (new Date).getTime(),
                        isOver = !isOver,
                        s(static_url_path + "/" + t.login_url)),
                    window.ajaxLogin_flag = !0
            },
            error: function (e) {
                window.ajaxLogin_flag = !0
            }
        })
    }
    function s(e) {
        window.location.href = e
    }
    return window.isLogin = "N",
        window.ajaxLogin_flag = !1,
        e("#index_ads") && e("#index_ads").length > 0 ? e("#gLink").click(function () {
            return e("html, body").animate({
                scrollTop: e("#index_ads").offset().top
            }, {
                duration: 500,
                easing: "swing"
            }),
                !1
        }) : e("#gLink").click(function () {
            e("#gLink").attr("href", ggHtml)
        }),
    {
        initialize: function () {
            t(),
                window.gHeader = (new Date).getTime()
        }
    }
}),
    define("g/g-footer", ["jquery"], function (e) {
        function t() {
            var t = e(window).height()
                , a = e(".footer").height()
                , r = e(".content").height()
                , i = t - 109 - a;
            r <= i && e(".content").height(i)
        }
        return {
            initialize: function () {
                t(),
                    window.gFooter = (new Date).getTime()
            }
        }
    }),
    define("g/g-href", ["jquery"], function (e) {
        function t() {
            e('a[name="g_href"]').click(function () {
                var t = e(this).attr("data-redirect")
                    , a = e(this).attr("data-type")
                    , r = e(this).attr("data-href")
                    , i = e(this).attr("data-target");
                "Y" == t ? "_blank" == i ? 1 == a ? window.open(href_baseUrl_1 + href_path_1 + r) : 2 == a ? window.open(href_baseUrl_2 + href_path_2 + r) : 3 == a ? window.open(href_baseUrl_3 + href_path_3 + r) : 4 == a ? window.open(href_baseUrl_4 + href_path_4 + r) : 5 == a ? window.open(href_baseUrl_5 + href_path_5 + r) : 6 == a ? window.open(href_baseUrl_6 + href_path_6 + r) : 10 == a && window.open(href_baseUrl_10 + href_path_10 + r) : 1 == a ? window.location.href = href_baseUrl_1 + href_path_1 + r : 2 == a ? window.location.href = href_baseUrl_2 + href_path_2 + r : 3 == a ? window.location.href = href_baseUrl_3 + href_path_3 + r : 4 == a ? window.location.href = href_baseUrl_4 + href_path_4 + r : 5 == a ? window.location.href = href_baseUrl_5 + href_path_5 + r : 6 == a ? window.location.href = href_baseUrl_6 + href_path_6 + r : 10 == a && (window.location.href = href_baseUrl_10 + href_path_10 + r) : "_blank" == i ? window.open(r) : window.location.href = r
            })
        }
        return {
            initialize: function () {
                t()
            }
        }
    }),
    function (e) {
        "function" == typeof define && define.amd ? define("core/common/jquery.SuperSlide", ["jquery"], e) : e(jQuery)
    }(function (e) {
        !function (e) {
            e.fn.slide = function (t) {
                return e.fn.slide.defaults = {
                    type: "slide",
                    effect: "fade",
                    autoPlay: !1,
                    delayTime: 500,
                    interTime: 2500,
                    triggerTime: 150,
                    defaultIndex: 0,
                    titCell: ".hd li",
                    mainCell: ".bd",
                    targetCell: null,
                    trigger: "mouseover",
                    scroll: 1,
                    vis: 1,
                    titOnClassName: "on",
                    autoPage: !1,
                    prevCell: ".prev",
                    nextCell: ".next",
                    pageStateCell: ".pageState",
                    opp: !1,
                    pnLoop: !0,
                    easing: "swing",
                    startFun: null,
                    endFun: null,
                    switchLoad: null,
                    playStateCell: ".playState",
                    mouseOverStop: !0,
                    defaultPlay: !0,
                    returnDefault: !1
                },
                    this.each(function () {
                        var a, r = e.extend({}, e.fn.slide.defaults, t), i = e(this), n = r.effect, o = e(r.prevCell, i), s = e(r.nextCell, i), l = e(r.pageStateCell, i), c = e(r.playStateCell, i), u = e(r.titCell, i), d = u.size(), h = e(r.mainCell, i), p = h.children().size(), f = r.switchLoad, _ = e(r.targetCell, i), v = parseInt(r.defaultIndex), m = parseInt(r.delayTime), g = parseInt(r.interTime), y = (parseInt(r.triggerTime),
                            parseInt(r.scroll)), w = "false" != r.autoPlay && 0 != r.autoPlay, b = "false" != r.opp && 0 != r.opp, D = "false" != r.autoPage && 0 != r.autoPage, k = "false" != r.pnLoop && 0 != r.pnLoop, C = "false" != r.mouseOverStop && 0 != r.mouseOverStop, T = "false" != r.defaultPlay && 0 != r.defaultPlay, M = "false" != r.returnDefault && 0 != r.returnDefault, S = isNaN(r.vis) ? 1 : parseInt(r.vis), x = !-[1] && !window.XMLHttpRequest, I = 0, j = 0, O = 0, N = 0, q = r.easing, L = null, U = null, F = null, P = r.titOnClassName, A = u.index(i.find("." + P)), E = v = -1 == A ? v : A, H = v, Q = v, Y = p >= S ? p % y != 0 ? p % y : y : 0, R = "leftMarquee" == n || "topMarquee" == n, B = function () {
                                e.isFunction(r.startFun) && r.startFun(v, d, i, e(r.titCell, i), h, _, o, s)
                            }, z = function () {
                                e.isFunction(r.endFun) && r.endFun(v, d, i, e(r.titCell, i), h, _, o, s)
                            }, $ = function () {
                                u.removeClass(P),
                                    T && u.eq(H).addClass(P)
                            };
                        if ("menu" == r.type)
                            return T && u.removeClass(P).eq(v).addClass(P),
                                u.hover(function () {
                                    a = e(this).find(r.targetCell);
                                    var t = u.index(e(this));
                                    U = setTimeout(function () {
                                        switch (v = t,
                                        u.removeClass(P).eq(v).addClass(P),
                                        B(),
                                        n) {
                                            case "fade":
                                                a.stop(!0, !0).animate({
                                                    opacity: "show"
                                                }, m, q, z);
                                                break;
                                            case "slideDown":
                                                a.stop(!0, !0).animate({
                                                    height: "show"
                                                }, m, q, z)
                                        }
                                    }, r.triggerTime)
                                }, function () {
                                    switch (clearTimeout(U),
                                    n) {
                                        case "fade":
                                            a.animate({
                                                opacity: "hide"
                                            }, m, q);
                                            break;
                                        case "slideDown":
                                            a.animate({
                                                height: "hide"
                                            }, m, q)
                                    }
                                }),
                                void (M && i.hover(function () {
                                    clearTimeout(F)
                                }, function () {
                                    F = setTimeout($, m)
                                }));
                        if (0 == d && (d = p),
                            R && (d = 2),
                            D) {
                            if (p >= S)
                                if ("leftLoop" == n || "topLoop" == n)
                                    d = p % y != 0 ? 1 + (p / y ^ 0) : p / y;
                                else {
                                    var Z = p - S;
                                    d = 1 + parseInt(Z % y != 0 ? Z / y + 1 : Z / y),
                                        d <= 0 && (d = 1)
                                }
                            else
                                d = 1;
                            u.html("");
                            var W = "";
                            if (1 == r.autoPage || "true" == r.autoPage)
                                for (var J = 0; J < d; J++)
                                    W += "<li>" + (J + 1) + "</li>";
                            else
                                for (var J = 0; J < d; J++)
                                    W += r.autoPage.replace("$", J + 1);
                            u.html(W);
                            var u = u.children()
                        }
                        if (p >= S) {
                            h.children().each(function () {
                                e(this).width() > O && (O = e(this).width(),
                                    j = e(this).outerWidth(!0)),
                                    e(this).height() > N && (N = e(this).height(),
                                        I = e(this).outerHeight(!0))
                            });
                            var G = h.children()
                                , V = function () {
                                    for (var e = 0; e < S; e++)
                                        G.eq(e).clone().addClass("clone").appendTo(h);
                                    for (var e = 0; e < Y; e++)
                                        G.eq(p - e - 1).clone().addClass("clone").prependTo(h)
                                };
                            switch (n) {
                                case "fold":
                                    h.css({
                                        position: "relative",
                                        width: j,
                                        height: I
                                    }).children().css({
                                        position: "absolute",
                                        width: O,
                                        left: 0,
                                        top: 0,
                                        display: "none"
                                    });
                                    break;
                                case "top":
                                    h.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:' + S * I + 'px"></div>').css({
                                        top: -v * y * I,
                                        position: "relative",
                                        padding: "0",
                                        margin: "0"
                                    }).children().css({
                                        height: N
                                    });
                                    break;
                                case "left":
                                    h.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:' + S * j + 'px"></div>').css({
                                        width: p * j,
                                        left: -v * y * j,
                                        position: "relative",
                                        overflow: "hidden",
                                        padding: "0",
                                        margin: "0"
                                    }).children().css({
                                        float: "left",
                                        width: O
                                    });
                                    break;
                                case "leftLoop":
                                case "leftMarquee":
                                    V(),
                                        h.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:' + S * j + 'px"></div>').css({
                                            width: (p + S + Y) * j,
                                            position: "relative",
                                            overflow: "hidden",
                                            padding: "0",
                                            margin: "0",
                                            left: -(Y + v * y) * j
                                        }).children().css({
                                            float: "left",
                                            width: O
                                        });
                                    break;
                                case "topLoop":
                                case "topMarquee":
                                    V(),
                                        h.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:' + S * I + 'px"></div>').css({
                                            height: (p + S + Y) * I,
                                            position: "relative",
                                            padding: "0",
                                            margin: "0",
                                            top: -(Y + v * y) * I
                                        }).children().css({
                                            height: N
                                        })
                            }
                        }
                        var K = function (e) {
                            var t = e * y;
                            return e == d ? t = p : -1 == e && p % y != 0 && (t = -p % y),
                                t
                        }
                            , X = function (t) {
                                var a = function (a) {
                                    for (var r = a; r < S + a; r++)
                                        t.eq(r).find("img[" + f + "]").each(function () {
                                            var t = e(this);
                                            if (t.attr("src", t.attr(f)).removeAttr(f),
                                                h.find(".clone")[0])
                                                for (var a = h.children(), r = 0; r < a.size(); r++)
                                                    a.eq(r).find("img[" + f + "]").each(function () {
                                                        e(this).attr(f) == t.attr("src") && e(this).attr("src", e(this).attr(f)).removeAttr(f)
                                                    })
                                        })
                                };
                                switch (n) {
                                    case "fade":
                                    case "fold":
                                    case "top":
                                    case "left":
                                    case "slideDown":
                                        a(v * y);
                                        break;
                                    case "leftLoop":
                                    case "topLoop":
                                        a(Y + K(Q));
                                        break;
                                    case "leftMarquee":
                                    case "topMarquee":
                                        var r = "leftMarquee" == n ? h.css("left").replace("px", "") : h.css("top").replace("px", "")
                                            , i = "leftMarquee" == n ? j : I
                                            , o = Y;
                                        if (r % i != 0) {
                                            var s = Math.abs(r / i ^ 0);
                                            o = 1 == v ? Y + s : Y + s - 1
                                        }
                                        a(o)
                                }
                            }
                            , ee = function (e) {
                                if (!T || E != v || e || R) {
                                    if (R ? v >= 1 ? v = 1 : v <= 0 && (v = 0) : (Q = v,
                                        v >= d ? v = 0 : v < 0 && (v = d - 1)),
                                        B(),
                                        null != f && X(h.children()),
                                        _[0] && (a = _.eq(v),
                                            null != f && X(_),
                                            "slideDown" == n ? (_.not(a).stop(!0, !0).slideUp(m),
                                                a.slideDown(m, q, function () {
                                                    h[0] || z()
                                                })) : (_.not(a).stop(!0, !0).hide(),
                                                    a.animate({
                                                        opacity: "show"
                                                    }, m, function () {
                                                        h[0] || z()
                                                    }))),
                                        p >= S)
                                        switch (n) {
                                            case "fade":
                                                h.children().stop(!0, !0).eq(v).animate({
                                                    opacity: "show"
                                                }, m, q, function () {
                                                    z()
                                                }).siblings().hide();
                                                break;
                                            case "fold":
                                                h.children().stop(!0, !0).eq(v).animate({
                                                    opacity: "show"
                                                }, m, q, function () {
                                                    z()
                                                }).siblings().animate({
                                                    opacity: "hide"
                                                }, m, q);
                                                break;
                                            case "top":
                                                h.stop(!0, !1).animate({
                                                    top: -v * y * I
                                                }, m, q, function () {
                                                    z()
                                                });
                                                break;
                                            case "left":
                                                h.stop(!0, !1).animate({
                                                    left: -v * y * j
                                                }, m, q, function () {
                                                    z()
                                                });
                                                break;
                                            case "leftLoop":
                                                var t = Q;
                                                h.stop(!0, !0).animate({
                                                    left: -(K(Q) + Y) * j
                                                }, m, q, function () {
                                                    t <= -1 ? h.css("left", -(Y + (d - 1) * y) * j) : t >= d && h.css("left", -Y * j),
                                                        z()
                                                });
                                                break;
                                            case "topLoop":
                                                var t = Q;
                                                h.stop(!0, !0).animate({
                                                    top: -(K(Q) + Y) * I
                                                }, m, q, function () {
                                                    t <= -1 ? h.css("top", -(Y + (d - 1) * y) * I) : t >= d && h.css("top", -Y * I),
                                                        z()
                                                });
                                                break;
                                            case "leftMarquee":
                                                var r = h.css("left").replace("px", "");
                                                0 == v ? h.animate({
                                                    left: ++r
                                                }, 0, function () {
                                                    h.css("left").replace("px", "") >= 0 && h.css("left", -p * j)
                                                }) : h.animate({
                                                    left: --r
                                                }, 0, function () {
                                                    h.css("left").replace("px", "") <= -(p + Y) * j && h.css("left", -Y * j)
                                                });
                                                break;
                                            case "topMarquee":
                                                var i = h.css("top").replace("px", "");
                                                0 == v ? h.animate({
                                                    top: ++i
                                                }, 0, function () {
                                                    h.css("top").replace("px", "") >= 0 && h.css("top", -p * I)
                                                }) : h.animate({
                                                    top: --i
                                                }, 0, function () {
                                                    h.css("top").replace("px", "") <= -(p + Y) * I && h.css("top", -Y * I)
                                                })
                                        }
                                    u.removeClass(P).eq(v).addClass(P),
                                        E = v,
                                        k || (s.removeClass("nextStop"),
                                            o.removeClass("prevStop"),
                                            0 == v && o.addClass("prevStop"),
                                            v == d - 1 && s.addClass("nextStop")),
                                        l.html("<span>" + (v + 1) + "</span>/" + d)
                                }
                            };
                        T && ee(!0),
                            M && i.hover(function () {
                                clearTimeout(F)
                            }, function () {
                                F = setTimeout(function () {
                                    v = H,
                                        T ? ee() : "slideDown" == n ? a.slideUp(m, $) : a.animate({
                                            opacity: "hide"
                                        }, m, $),
                                        E = v
                                }, 300)
                            });
                        var te = function (e) {
                            L = setInterval(function () {
                                b ? v-- : v++,
                                    ee()
                            }, e || g)
                        }
                            , ae = function (e) {
                                L = setInterval(ee, e || g)
                            }
                            , re = function () {
                                C || !w || c.hasClass("pauseState") || (clearInterval(L),
                                    te())
                            }
                            , ie = function () {
                                (k || v != d - 1) && (v++,
                                    ee(),
                                    R || re())
                            }
                            , ne = function () {
                                (k || 0 != v) && (v--,
                                    ee(),
                                    R || re())
                            }
                            , oe = function () {
                                clearInterval(L),
                                    R ? ae() : te(),
                                    c.removeClass("pauseState")
                            }
                            , se = function () {
                                clearInterval(L),
                                    c.addClass("pauseState")
                            };
                        if (w ? R ? (b ? v-- : v++,
                            ae(),
                            C && h.hover(se, oe)) : (te(),
                                C && i.hover(se, oe)) : (R && (b ? v-- : v++),
                                    c.addClass("pauseState")),
                            c.click(function () {
                                c.hasClass("pauseState") ? oe() : se()
                            }),
                            "mouseover" == r.trigger ? u.hover(function () {
                                var e = u.index(this);
                                U = setTimeout(function () {
                                    v = e,
                                        ee(),
                                        re()
                                }, r.triggerTime)
                            }, function () {
                                clearTimeout(U)
                            }) : u.click(function () {
                                v = u.index(this),
                                    ee(),
                                    re()
                            }),
                            R) {
                            if (s.mousedown(ie),
                                o.mousedown(ne),
                                k) {
                                var le, ce = function () {
                                    le = setTimeout(function () {
                                        clearInterval(L),
                                            ae(g / 10 ^ 0)
                                    }, 150)
                                }, ue = function () {
                                    clearTimeout(le),
                                        clearInterval(L),
                                        ae()
                                };
                                s.mousedown(ce),
                                    s.mouseup(ue),
                                    o.mousedown(ce),
                                    o.mouseup(ue)
                            }
                            "mouseover" == r.trigger && (s.hover(ie, function () { }),
                                o.hover(ne, function () { }))
                        } else
                            s.click(ie),
                                o.click(ne);
                        if ("auto" == r.vis && 1 == y && ("left" == n || "leftLoop" == n)) {
                            var de, he = function () {
                                x && (h.width("auto"),
                                    h.children().width("auto")),
                                    h.parent().width("auto"),
                                    j = h.parent().width(),
                                    x && h.parent().width(j),
                                    h.children().width(j),
                                    "left" == n ? (h.width(j * p),
                                        h.stop(!0, !1).animate({
                                            left: -v * j
                                        }, 0)) : (h.width(j * (p + 2)),
                                            h.stop(!0, !1).animate({
                                                left: -(v + 1) * j
                                            }, 0)),
                                    x || j == h.parent().width() || he()
                            };
                            e(window).resize(function () {
                                clearTimeout(de),
                                    de = setTimeout(he, 100)
                            }),
                                he()
                        }
                    })
            }
        }(jQuery),
            jQuery.easing.jswing = jQuery.easing.swing,
            jQuery.extend(jQuery.easing, {
                def: "easeOutQuad",
                swing: function (e, t, a, r, i) {
                    return jQuery.easing[jQuery.easing.def](e, t, a, r, i)
                },
                easeInQuad: function (e, t, a, r, i) {
                    return r * (t /= i) * t + a
                },
                easeOutQuad: function (e, t, a, r, i) {
                    return -r * (t /= i) * (t - 2) + a
                },
                easeInOutQuad: function (e, t, a, r, i) {
                    return (t /= i / 2) < 1 ? r / 2 * t * t + a : -r / 2 * (--t * (t - 2) - 1) + a
                },
                easeInCubic: function (e, t, a, r, i) {
                    return r * (t /= i) * t * t + a
                },
                easeOutCubic: function (e, t, a, r, i) {
                    return r * ((t = t / i - 1) * t * t + 1) + a
                },
                easeInOutCubic: function (e, t, a, r, i) {
                    return (t /= i / 2) < 1 ? r / 2 * t * t * t + a : r / 2 * ((t -= 2) * t * t + 2) + a
                },
                easeInQuart: function (e, t, a, r, i) {
                    return r * (t /= i) * t * t * t + a
                },
                easeOutQuart: function (e, t, a, r, i) {
                    return -r * ((t = t / i - 1) * t * t * t - 1) + a
                },
                easeInOutQuart: function (e, t, a, r, i) {
                    return (t /= i / 2) < 1 ? r / 2 * t * t * t * t + a : -r / 2 * ((t -= 2) * t * t * t - 2) + a
                },
                easeInQuint: function (e, t, a, r, i) {
                    return r * (t /= i) * t * t * t * t + a
                },
                easeOutQuint: function (e, t, a, r, i) {
                    return r * ((t = t / i - 1) * t * t * t * t + 1) + a
                },
                easeInOutQuint: function (e, t, a, r, i) {
                    return (t /= i / 2) < 1 ? r / 2 * t * t * t * t * t + a : r / 2 * ((t -= 2) * t * t * t * t + 2) + a
                },
                easeInSine: function (e, t, a, r, i) {
                    return -r * Math.cos(t / i * (Math.PI / 2)) + r + a
                },
                easeOutSine: function (e, t, a, r, i) {
                    return r * Math.sin(t / i * (Math.PI / 2)) + a
                },
                easeInOutSine: function (e, t, a, r, i) {
                    return -r / 2 * (Math.cos(Math.PI * t / i) - 1) + a
                },
                easeInExpo: function (e, t, a, r, i) {
                    return 0 == t ? a : r * Math.pow(2, 10 * (t / i - 1)) + a
                },
                easeOutExpo: function (e, t, a, r, i) {
                    return t == i ? a + r : r * (1 - Math.pow(2, -10 * t / i)) + a
                },
                easeInOutExpo: function (e, t, a, r, i) {
                    return 0 == t ? a : t == i ? a + r : (t /= i / 2) < 1 ? r / 2 * Math.pow(2, 10 * (t - 1)) + a : r / 2 * (2 - Math.pow(2, -10 * --t)) + a
                },
                easeInCirc: function (e, t, a, r, i) {
                    return -r * (Math.sqrt(1 - (t /= i) * t) - 1) + a
                },
                easeOutCirc: function (e, t, a, r, i) {
                    return r * Math.sqrt(1 - (t = t / i - 1) * t) + a
                },
                easeInOutCirc: function (e, t, a, r, i) {
                    return (t /= i / 2) < 1 ? -r / 2 * (Math.sqrt(1 - t * t) - 1) + a : r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + a
                },
                easeInElastic: function (e, t, a, r, i) {
                    var n = 1.70158
                        , o = 0
                        , s = r;
                    if (0 == t)
                        return a;
                    if (1 == (t /= i))
                        return a + r;
                    if (o || (o = .3 * i),
                        s < Math.abs(r)) {
                        s = r;
                        var n = o / 4
                    } else
                        var n = o / (2 * Math.PI) * Math.asin(r / s);
                    return -s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - n) * (2 * Math.PI) / o) + a
                },
                easeOutElastic: function (e, t, a, r, i) {
                    var n = 1.70158
                        , o = 0
                        , s = r;
                    if (0 == t)
                        return a;
                    if (1 == (t /= i))
                        return a + r;
                    if (o || (o = .3 * i),
                        s < Math.abs(r)) {
                        s = r;
                        var n = o / 4
                    } else
                        var n = o / (2 * Math.PI) * Math.asin(r / s);
                    return s * Math.pow(2, -10 * t) * Math.sin((t * i - n) * (2 * Math.PI) / o) + r + a
                },
                easeInOutElastic: function (e, t, a, r, i) {
                    var n = 1.70158
                        , o = 0
                        , s = r;
                    if (0 == t)
                        return a;
                    if (2 == (t /= i / 2))
                        return a + r;
                    if (o || (o = i * (.3 * 1.5)),
                        s < Math.abs(r)) {
                        s = r;
                        var n = o / 4
                    } else
                        var n = o / (2 * Math.PI) * Math.asin(r / s);
                    return t < 1 ? s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - n) * (2 * Math.PI) / o) * -.5 + a : s * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * i - n) * (2 * Math.PI) / o) * .5 + r + a
                },
                easeInBack: function (e, t, a, r, i, n) {
                    return void 0 == n && (n = 1.70158),
                        r * (t /= i) * t * ((n + 1) * t - n) + a
                },
                easeOutBack: function (e, t, a, r, i, n) {
                    return void 0 == n && (n = 1.70158),
                        r * ((t = t / i - 1) * t * ((n + 1) * t + n) + 1) + a
                },
                easeInOutBack: function (e, t, a, r, i, n) {
                    return void 0 == n && (n = 1.70158),
                        (t /= i / 2) < 1 ? r / 2 * (t * t * ((1 + (n *= 1.525)) * t - n)) + a : r / 2 * ((t -= 2) * t * ((1 + (n *= 1.525)) * t + n) + 2) + a
                },
                easeInBounce: function (e, t, a, r, i) {
                    return r - jQuery.easing.easeOutBounce(e, i - t, 0, r, i) + a
                },
                easeOutBounce: function (e, t, a, r, i) {
                    return (t /= i) < 1 / 2.75 ? r * (7.5625 * t * t) + a : t < 2 / 2.75 ? r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + a : t < 2.5 / 2.75 ? r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + a : r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + a
                },
                easeInOutBounce: function (e, t, a, r, i) {
                    return t < i / 2 ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, r, i) + a : .5 * jQuery.easing.easeOutBounce(e, 2 * t - i, 0, r, i) + .5 * r + a
                }
            })
    });
var GetStrDateSubtract = function (e, t) {
    e = new Date(e.replace(/-/g, "/")),
        t = new Date(t.replace(/-/g, "/"));
    var a = t.getTime() - e.getTime();
    return parseInt(a / 864e5)
}
    , formatDate = function (e) {
        var t = e.getFullYear()
            , a = e.getMonth() + 1;
        a = a < 10 ? "0" + a : a;
        var r = e.getDate();
        return r = r < 10 ? "0" + r : r,
            t + "-" + a + "-" + r
    };
Array.prototype.distinct = function () {
    var e, t, a = this, r = a.length;
    for (e = 0; e < r; e++)
        for (t = e + 1; t < r; t++)
            a[e] == a[t] && (a.splice(t, 1),
                r--,
                t--);
    return a
}
    ;
var formatDateNextMonth = function (e) {
    var t = new Date
        , a = new Date(t);
    return a.setDate(t.getDate() + 29),
        a.getFullYear() + "-" + (a.getMonth() + 1) + "-" + a.getDate()
}
    , userinfo_messages = {
        "userinfo_message.confirm_info": "您确认吗？",
        "userinfo_message.title_info": "信息提示",
        "userinfo_message.error_info": "错误提示",
        "userinfo_button.ok_info": "确认",
        "userinfo_phone.null_error": "请输入手机号！",
        "userinfo_phone.ismobile_error": "您输入的手机号码不是有效的格式！",
        "userinfo_email.null_error": "请输入电子邮件地址！",
        "userinfo_email.isemail_error": "请输入有效的电子邮件地址！",
        "userinfo_email.remote_error": "电子邮件地址已被注册，请使用其他email！",
        "userinfo_name.null_error": "请输入您的姓名！",
        "userinfo_name.range_length_error": "允许输入的字符串在3-30个字符之间！",
        "userinfo_name.:char_blank_error": "姓名只能包含中文或者英文，如有生僻字或繁体字参见姓名填写规则进行填写！",
        "userinfo_sex.:null_error": "请选择性别！",
        "userinfo_password.null_error": "请输入密码！",
        "userinfo_password.length_error": "密码长度不能少于6个字符！",
        "userinfo_telephone.pattern_error": "固定电话格式错误",
        "userinfo_idtype.null_error": "请选择证件类型！",
        "userinfo_bornDate.null_error": "请选择出生日期！",
        "userinfo_youxiaoDate.null_error": "请选择有效截止日期！",
        "userinfo_idno.null_error": "请输入证件号码！",
        "userinfo_idno.id_valid_error": "输入的证件号码中包含中文信息或特殊字符！",
        "userinfo_idno.sec_id_card_error": "请正确输入18位的证件号码！",
        "userinfo_idno.fir_id_card_error": "请正确输入15或者18位的证件号码！",
        "userinfo_idno.check_Hkmacao_error": "请输入有效的港澳居民通行证号码！",
        "userinfo_idno.check_taiw_error": "请输入有效的台湾居民通行证号码！",
        "userinfo_idno.check_passport_error": "请输入有效的护照号码！",
        "userinfo_idno.check_work_error": "请输入有效的外国人居留证号码！",
        "userinfo_student.province_name_error": "请输入省份！",
        "userinfo_student.school_name_error": "请输入学校！",
        "userinfo_student.student_no_error": "请输入学号！",
        "userinfo_student.school_system_error": "请选择学制！",
        "userinfo_student.enter_year_error": "请选择入学年份！"
    };
define("core/common/mUtils", function () { }),
    function (e) {
        "function" == typeof define && define.amd ? define("core/common/common", ["jquery"], e) : e(jQuery)
    }(function (e) {
        var t = function () {
            e(".js-gotop").on("click", function (t) {
                return t.preventDefault(),
                    e("html, body").animate({
                        scrollTop: e("html").offset().top
                    }, 500, "easeInOutExpo"),
                    !1
            }),
                e(window).scroll(function () {
                    e(window).scrollTop() > 200 ? e(".js-top").addClass("active") : e(".js-top").removeClass("active")
                })
        }
            , a = function () {
                var t = e(window).height() - e(".header").outerHeight(!0) - e(".footer").outerHeight(!0);
                e(".content").css("min-height", t)
            };
        e(function () {
            t(),
                a()
        }),
            e(window).on("resize", function () {
                a()
            });
        e(".center-menu .icon-switch").on("click", function () {
            var t = e(this)
                , a = t.parent().next();
            if (a.is(".menu-sub") && a.is(":visible"))
                a.slideUp(300, function () {
                    a.parent("li").addClass("menu-less")
                });
            else if (a.is(".menu-sub") && !a.is(":visible")) {
                var r = t.parents(".menu-item");
                a.slideDown(300, function () {
                    r.removeClass("menu-less")
                })
            }
        }),
            e("body").on("click", ".order-panel .icon-fold", function () {
                var t = e(this)
                    , a = t.parent().next();
                if (a.is(".order-item-bd") && a.is(":visible"))
                    a.slideUp(300, function () {
                        a.parents(".order-item").addClass("show-less")
                    });
                else if (a.is(".order-item-bd") && !a.is(":visible")) {
                    var r = t.parents(".order-item");
                    a.slideDown(300, function () {
                        r.removeClass("show-less")
                    })
                }
            }),
            e("#js-minHeight").css("minHeight", e(".center-menu").outerHeight()),
            e(".center-main .tab-item").css("minHeight", e(".center-menu").outerHeight() - 42),
            e("body").on("click", function (t) {
                e(".sel").removeClass("active")
            }),
            e("body").on("click", ".sel .sel-hd", function (t) {
                t.stopPropagation(),
                    e(".sel").removeClass("active"),
                    e(this).children().hasClass("form-bd-txt") || e(this).parent().addClass("active")
            }),
            e("body").on("click", '.sel .sel-list li:not(".disabled")', function (t) {
                t.stopPropagation();
                var a = e(this).html()
                    , r = e(this).parents(".sel");
                e(this).addClass("selected").siblings().removeClass("selected"),
                    r.find(".sel-inner").html(a),
                    r.removeClass("active")
            })
    }),
    function (e) {
        "function" == typeof define && define.amd ? define("core/common/data.jcokies", ["jquery"], e) : e(jQuery)
    }(function (e) {
        jQuery.extend({
            jc_getFromStation: function () {
                return e.jc_getcookie("_jc_save_fromStation")
            },
            jc_setFromStation: function (t, a) {
                if (void 0 === t || void 0 === a || "" == t || "" == a)
                    throw "参数错误";
                var r = t + "," + a;
                e.jc_setcookie("_jc_save_fromStation", r, 10)
            },
            jc_getToStation: function () {
                return e.jc_getcookie("_jc_save_toStation")
            },
            jc_setToStation: function (t, a) {
                if (void 0 === t || void 0 === a || "" == t || "" == a)
                    throw "参数错误";
                var r = t + "," + a;
                e.jc_setcookie("_jc_save_toStation", r, 10)
            },
            jc_getFromDate: function () {
                return e.jc_getcookie("_jc_save_fromDate")
            },
            jc_setFromDate: function (t) {
                void 0 === t && (t = "");
                var a = t;
                e.jc_setcookie("_jc_save_fromDate", a, 10)
            },
            jc_getTrainNumber: function () {
                return e.jc_getcookie("_jc_save_trainNumber")
            },
            jc_setTrainNumber: function (t) {
                void 0 === t && (t = "");
                var a = t;
                e.jc_setcookie("_jc_save_trainNumber", a, 10)
            },
            jc_zGetTrainStition: function () {
                return e.jc_getcookie("_jc_save_zwdch_fromStation")
            },
            jc_zSetTrainStition: function (t, a) {
                if (void 0 === t || void 0 === a || "" == t || "" == a)
                    throw "参数错误";
                var r = t + "," + a;
                e.jc_setcookie("_jc_save_zwdch_fromStation", r, 10)
            },
            jc_zGetTrainNumber: function () {
                return e.jc_getcookie("_jc_save_zwdch_cc")
            },
            jc_zSetTrainNumber: function (t) {
                void 0 === t && (t = "");
                var a = t;
                e.jc_setcookie("_jc_save_zwdch_cc", a, 10)
            },
            jc_getIsStudent: function () {
                return e.jc_getcookie("_jc_save_stuFlag_flag")
            },
            jc_setIsStudent: function (t) {
                void 0 === t && (t = "");
                var a = t;
                e.jc_setcookie("_jc_save_stuFlag_flag", a, 10)
            },
            jc_setIsGD: function () {
                return e.jc_getcookie("_jc_save_gdFlag_flag")
            },
            jc_setIsGD: function (t) {
                void 0 === t && (t = "");
                var a = t;
                e.jc_setcookie("_jc_save_gdFlag_flag", a, 10)
            },
            jc_setPageFrom: function () {
                return e.jc_getcookie("jc_setPageFrom")
            },
            jc_setPageFrom: function (t) {
                void 0 === t && (t = "");
                var a = t;
                e.jc_setcookie("jc_setPageFrom", a, 10)
            },
            jc_saveZzwdch: function (t) {
                void 0 === t && (t = "");
                var a = t;
                e.jc_setcookie("_jc_save_zwdch_cxlx", a, 10)
            },
            jc_getToDate: function () {
                return e.jc_getcookie("_jc_save_toDate")
            },
            jc_setToDate: function (t) {
                void 0 === t && (t = "");
                var a = t;
                e.jc_setcookie("_jc_save_toDate", a, 10)
            },
            jc_getWfOrDc: function () {
                return e.jc_getcookie("_jc_save_wfdc_flag")
            },
            jc_setWfOrDc: function (t) {
                if (void 0 === t)
                    throw "参数错误";
                var a = t;
                e.jc_setcookie("_jc_save_wfdc_flag", a, 10)
            },
            jc_getcookie: function (e) {
                var t = document.cookie.indexOf(e)
                    , a = document.cookie.indexOf(";", t);
                return -1 == t ? "" : unescape(document.cookie.substring(t + e.length + 1, a > t ? a : document.cookie.length))
            },
            jc_setcookie: function (e, t, a, r, i, n) {
                var o = document.domain;
                o = o.substring(o.indexOf(".") + 1, o.length);
                var s = new Date;
                s.setTime(s.getTime() + 1e3 * a),
                    document.cookie = escape(e) + "=" + escape(t) + (r ? "; path=" + r : ";path=/") + "; domain=" + o + (n ? "; secure" : "") + ";expires=" + s
            }
        })
    });
var static_url = "https://kyfw.12306.cn"
    , search_base_url = "https://search.12306.cn"
    , send_url = "https://tj.12306.cn"
    , qr_code = "https://kyfw.12306.cn"
    , path = "/otn"
    , static_url_path = static_url + path
    , getSearchUrl = search_base_url + "/search/v1/h5/search"
    , getNotTripUrl = static_url_path + "/queryOrder/queryMyOrder"
    , getNotCompleteUrl = static_url_path + "/queryOrder/queryMyOrderNoComplete"
    , iscantuipiao = static_url_path + "/queryOrder/returnTicketAffirm"
    , order_url = static_url_path + "/psr/query"
    , qxyyUrl = static_url_path + "/icentre/qxyyApi"
    , stopTrainUrl = static_url_path + "/icentre/stopTrain"
    , isRepeatSubmitUrl = static_url_path + "/icentre/isRepeatSubmit"
    , addQxyyUrl = static_url_path + "/icentre/addQxyy"
    , lostItemsApiUrl = static_url_path + "/icentre/lostItemsApi"
    , addLostItemsUrl = static_url_path + "/icentre/addLostItems"
    , lostItemsUrl = static_url_path + "/icentre/lostItems"
    , serviceQueryHtml = static_url_path + "/view/icentre_serviceQuery.html"
    , orderInit = static_url_path + "/orderdetail/initApi"
    , queryOrderDetail = static_url_path + "/orderdetail/queryOrderDetail"
    , checkBeforeReturnIsu = static_url_path + "/orderdetail/checkBeforeReturnIsu"
    , queryRefundInfo = static_url_path + "/orderdetail/queryRefundInfo"
    , returnIsu = static_url_path + "/orderdetail/returnIsu"
    , payfinishApi = static_url_path + "/orderdetail/payfinishApi"
    , paycheckNew = static_url_path + "/orderdetail/paycheckNew"
    , queryMyIns = static_url_path + "/insurance/queryMyIns"
    , queryOrderForQii = static_url_path + "/orderdetail/queryOrderForQii"
    , initQueryUserInfoApi = static_url_path + "/modifyUser/initQueryUserInfoApi"
    , intelligenceUrl = static_url_path + "/psr/queryStudentInfo"
    , saveModifyUserInfo = static_url_path + "/modifyUser/saveModifyUserInfo"
    , cancelDeliveryUrl = static_url_path + "/queryOrder/cancelDelivery"
    , queryDeliverInfo = static_url_path + "/orderdetail/queryDeliverInfo"
    , initServiceQuery = static_url_path + "/icentre/initServiceQuery"
    , trackDeliveryDetailUrl = static_url_path + "/queryOrder/trackDeliveryDetail"
    , stopTrain = static_url_path + "/icentre/stopTrain"
    , adviceApi = static_url_path + "/advice/adviceApi"
    , addAdvice = static_url_path + "/advice/addAdvice"
    , complaintApi = static_url_path + "/advice/complaintApi"
    , initcomplaintService = static_url_path + "/advice/initcomplaintService"
    , addServiceQuality = static_url_path + "/advice/addServiceQuality"
    , initcomplaintNet = static_url_path + "/advice/initcomplaintNet"
    , addNetSale = static_url_path + "/advice/addNetSale"
    , uploading = static_url_path + "/advice/uploading"
    , userSecurityInitApi = static_url_path + "/userSecurity/initApi"
    , userSecurityDoEditSafeEmail = static_url_path + "/userSecurity/doEditSafeEmail"
    , userSecurityCheckUserIsActive = static_url_path + "/userSecurity/checkUserIsActive"
    , userSecuritySafeEmailApi = static_url_path + "/userSecurity/safeEmailApi"
    , resulttUrl = static_url_path + "/passengers/result"
    , addressInitApi = static_url_path + "/address/initApi"
    , addressAddInitApi = static_url_path + "/address/addInitApi"
    , addressEditApi = static_url_path + "/address/edit"
    , addressDeleteApi = static_url_path + "/address/delete"
    , addressAddApi = static_url_path + "/address/add"
    , addressGetProvince = static_url_path + "/address/getProvince"
    , addressGetCity = static_url_path + "/address/getCity"
    , addressGetCountry = static_url_path + "/address/getCountry"
    , addressGetTown = static_url_path + "/address/getTown"
    , addressGetStreet = static_url_path + "/address/getStreet"
    , userLogin_url = static_url_path + "/login/userLogin"
    , ticket_notice_url = static_url_path + "/psr/getItineraryNotice"
    , personal_welcome_url = static_url_path + "/index/initMy12306Api"
    , refundUrl = static_url_path + "/queryOrder/returnTicketAffirm"
    , returnUrl = static_url_path + "/queryOrder/returnTicket"
    , turnUrl = static_url_path + "/queryOrder/returnTicketRedirect"
    , resginUrl = static_url_path + "/queryOrder/resginTicket"
    , cateringUrl = static_url_path + "/queryOrder/queryCateringParams"
    , noticeUrl = static_url_path + "/view/userSecurity_accountBindInfo.html"
    , downUrl = static_url_path + "/psr/downloadItineraryNotice"
    , loginConf = static_url_path + "/login/conf"
    , passport_appId = "otn"
    , passport_apptk_static = static_url + "/passport/web/auth/uamtk"
    , qr_codeurl = static_url + "/passport/web/create-verifyqr64"
    , success_qrcode_url = static_url_path + "/psr/checkVerifyqr"
    , late_url = static_url_path + "/zwdch/init"
    , logout = static_url_path + "/login/loginOut"
    , getMobileCode4pwdemail = static_url_path + "/userSecurity/getMobileCode4pwdemail"
    , safeEmail = static_url_path + "/userSecurity/safeEmailApi"
    , passwordChange = static_url_path + "/userSecurity/loginPwdApi"
    , confirmChangePassword = static_url_path + "/userSecurity/editLoginPwd"
    , userSecurityInit = static_url_path + "userSecurity/init"
    , noticeSetting = static_url_path + "/userSecurity/accountBindInfoApi"
    , updateSendMsgType = static_url_path + "/userSecurity/updateSendMsgType"
    , accountUnbind = static_url_path + "/userSecurity/accountUnbind"
    , requestAliQr = static_url_path + "/index/requestAliQr"
    , requestWechatQr = static_url_path + "/index/requestWechatQr"
    , accountBindInfo = static_url_path + "/userSecurity/accountBindInfo"
    , userSecurity = static_url_path + "/view/userSecurity.html"
    , turnToIndex = "https://www.12306.cn/index/index.html"
    , checkMobileCode = static_url_path + "/userSecurity/checkMobileCode"
    , initQueryUserInfo = static_url_path + "/view/information.html"
    , doEditTel = static_url_path + "/userSecurity/doEditTel"
    , checkMobileCode = static_url_path + "/userSecurity/checkMobileCode"
    , bindTelApi = static_url_path + "/userSecurity/bindTelApi"
    , payOrderInit = static_url_path + "/afterNatePay/payOrderInit"
    , cancelNotComplete = static_url_path + "/afterNateOrder/cancelNotComplete"
    , paycheck = static_url_path + "/afterNatePay/paycheck"
    , payFinishInitApi = static_url_path + "/afterNatePay/payFinishInitApi"
    , paySuccessInitApi = static_url_path + "/afterNatePay/paySuccessInitApi"
    , stu_control = 60
    , other_control = 30
    , isOver = !0
    , htmlHref = {
        orderDetail: static_url_path + "/view/order.html#DETAIL",
        orderRefund: static_url_path + "/view/order.html#REFUND",
        orderDeliver: static_url_path + "/view/order.html#DELIVER",
        orderInsurance: static_url_path + "/view/order.html#INSURANCE",
        advice: static_url_path + "/view/advice_advice.html",
        complaint: static_url_path + "/view/advice_complaint.html",
        addressInit: static_url_path + "/view/address_init.html",
        userSecurity: static_url_path + "/view/userSecurity.html",
        userSecurityAccountBindInfo: static_url_path + "/view/userSecurity_accountBindInfo.html",
        passengers: static_url_path + "/view/passengers.html",
        index: static_url_path + "/view/index.html",
        leftTicketInit: static_url_path + "/leftTicket/init",
        browserForie: href_baseUrl_1 + href_path_1 + "view/forie.html",
        lineUpPayConfirm: static_url_path + "/view/lineUp_payConfirm.html",
        lineUpOrder: static_url_path + "/view/lineUp_order.html",
        lineUpOrder2: static_url_path + "/view/lineUp_order.html?type=2",
        lineUpOrder3: static_url_path + "/view/lineUp_order.html?type=3",
        lineUpPaySuccess: static_url_path + "/view/lineUp_paySuccess.html",
        lineUpRefundFailed: static_url_path + "/view/lineUp_refundSuccess.html",
        verification: static_url_path + "/view/verification.html",
        emailSuccess: static_url_path + "/view/emailSuccess.html",
        emailError: static_url_path + "/view/emailError.html"
    }
    , href_baseUrl_1 = "https://www.12306.cn/"
    , href_path_1 = "index/"
    , href_baseUrl_2 = "https://kyfw.12306.cn/"
    , href_path_2 = "otn/"
    , href_baseUrl_3 = "https://cx.12306.cn/"
    , href_path_3 = "tlcx/"
    , href_baseUrl_4 = "https://www.12306.cn/"
    , href_path_4 = "mormhweb/"
    , href_baseUrl_5 = "https://travel.12306.cn/"
    , href_path_5 = "portal/"
    , href_baseUrl_6 = "https://dynamic.12306.cn/"
    , href_path_6 = "otn/"
    , href_baseUrl_10 = "https://exservice.12306.cn/"
    , href_path_10 = "excater/"
    , ggHtml = href_baseUrl_1 + href_path_1 + "index.html#index_ads"
    , oneTopContactsUrl = static_url_path + "/passengers/showApi"
    , topContactsUrl = static_url_path + "/passengers/query"
    , deleteContactUrl = static_url_path + "/passengers/delete"
    , editContactUrl = static_url_path + "/passengers/edit"
    , addContactUrl = static_url_path + "/passengers/add"
    , getSchoolUrl = static_url_path + "/userCommon/schoolNames"
    , getCityUrl = static_url_path + "/userCommon/allCitys"
    , toPassengers = static_url_path + "/view/passengers.html"
    , toPassengerEdit = static_url_path + "/view/passenger_edit.html?type=edit"
    , toPassengerAdd = static_url_path + "/view/passenger_edit.html?type=add"
    , getQueryRefundInfo = static_url_path + "/queryRefund/queryRefundInfo"
    , toleftTicketInit = static_url_path + "/leftTicket/init"
    , getinitNoCompleteQueueApi = static_url_path + "/queryOrder/initNoCompleteQueueApi"
    , getcancelNoCompleteMyOrder = static_url_path + "/queryOrder/cancelNoCompleteMyOrder"
    , getcontinuePayNoCompleteMyOrder = static_url_path + "/queryOrder/continuePayNoCompleteMyOrder"
    , getpayOrderInit = static_url_path + "/payOrder/init"
    , getconfirmPassengerReport = static_url_path + "/confirmPassenger/report"
    , getinitNoComplete = static_url_path + "/view/train_order.html"
    , getinitNoComplete2 = static_url_path + "/view/train_order.html?type=2"
    , getcancelQueueNoCompleteMyOrder = static_url_path + "/queryOrder/cancelQueueNoCompleteMyOrder"
    , getPassengerDTOsUrl = static_url_path + "/confirmPassenger/getPassengerDTOs"
    , getpassengerInitApiUrl = static_url_path + "/afterNate/passengerInitApi"
    , queryQueueUrl = static_url_path + "/afterNateOrder/queryQueue"
    , queryNotCompleteUrl = static_url_path + "/afterNateOrder/queryNotComplete"
    , cancelNotCompleteUrl = static_url_path + "/afterNateOrder/cancelNotComplete"
    , initUrl = static_url_path + "/afterNateOrder/init"
    , continuePayNoCompleteMyOrderUrl = static_url_path + "/afterNateOrder/continuePayNoCompleteMyOrder"
    , cancelWaitingHOrderUrl = static_url_path + "/afterNateOrder/cancelWaitingHOrder"
    , queryUnHonourHOrderUrl = static_url_path + "/afterNateOrder/queryUnHonourHOrder"
    , queryProcessedHOrderUrl = static_url_path + "/afterNateOrder/queryProcessedHOrder"
    , reserveReturnCheckUrl = static_url_path + "/afterNateOrder/reserveReturnCheck"
    , reserveReturnUrl = static_url_path + "/afterNateOrder/reserveReturn"
    , queryProcessedHOrderUrl = static_url_path + "/afterNateOrder/queryProcessedHOrder"
    , pay_success_qrcode_url = static_url_path + "/afterNateQRCode/checkVerifyqr"
    , saveRelationUrl = static_url_path + "/afterNateOrder/saveRelation"
    , getMaxRealizeLimitTime = static_url_path + "/afterNateOrder/getMaxRealizeLimitTime"
    , updateRealizeLimitTime = static_url_path + "/afterNateOrder/updateRealizeLimitTime"
    , payOrderInit = static_url_path + "/afterNatePay/payOrderInit"
    , cancelNotComplete = static_url_path + "/afterNateOrder/cancelNotComplete"
    , paycheck = static_url_path + "/afterNatePay/paycheck"
    , payFinishInit = static_url_path + "/afterNatePay/payFinishInit"
    , reserveReturnSuccessApi = static_url_path + "/afterNateOrder/reserveReturnSuccessApi"
    , getQueueNum = static_url_path + "/afterNate/getQueueNum"
    , fromSn = {
        "兰州": {
            msg: "您乘坐的列车始发站为兰州站，兰州西站不停车，请不要到兰州西站乘车。祝您旅途愉快！",
            limit: ["D2753", "D2755", "D2747", "D2749", "D2725"]
        },
        "重庆北": {
            msg: "请购买“G、D、C字头及Z4、Z50、Z49、Z258、K504、K503次列车”的旅客，到重庆北站北广场进站上车；请购买“T、K字头、数字开头、Z96、Z223次及普通列车”的旅客，到重庆北站南广场进站上车。目前，重庆北站南、北广场没有连通，两地之间的距离较远。请您务必注意进站地点，并预留充足时间进站，以免耽误您的行程。",
            limit: []
        },
        "香港西九龙": {
            msg: "跨境车票必须换取纸质车票",
            limit: []
        },
        "昭化": {
            msg: "受广元站施工影响，本次列车改停昭化站，昭化站位于宝轮镇。因乘车站变化，请您预留充足时间抵达车站，以免耽误您的行程。",
            limit: []
        },
        "广元南": {
            msg: "受广元站施工影响，本次列车改停广元南站，广元南站位于下西坝。因乘车站变化，请您预留充足时间抵达车站，以免耽误您的行程。",
            limit: []
        },
        "龙洞堡": {
            msg: "龙洞堡站为地下车站，地面设有两处进口。一处由T2航站楼11号到达口下行至-2F层，一处临近机场1号停车场北出口，请您关注相关引导标识并预留充足时间抵达车站，以免耽误您的行程。",
            limit: []
        }
    }
    , toSn = {
        "昭化": {
            msg: "受广元站施工影响，本次列车改停昭化站，昭化站位于宝轮镇。请您注意到站信息，以免下错站或让亲友错误接车。",
            limit: []
        },
        "香港西九龙": {
            msg: "跨境车票必须换取纸质车票",
            limit: []
        },
        "广元南": {
            msg: "受广元站施工影响，本次列车改停广元南站，广元南站位于下西坝。请您注意到站信息，以免下错站或让亲友错误接车。",
            limit: []
        }
    };
define("core/common/url_config", function () { }),
    function (e) {
        "function" == typeof define && define.amd ? define("core/common/data.jcalendar", ["jquery"], e) : e(jQuery)
    }(function (e) {
        var t = !0
            , a = e('<div class="cal-wrap" style="z-index:30000;display:none;position: absolute;left: 23px;top: 23px; "><div class="cal"><div class="cal-top"><a href="javascript:void(0);" class="first"></a><a href="javascript:void(0);" class="prev"></a><div class="month"><input type="text" value="" readonly="readonly" disabled="disabled"/><ul class="time-list"><li>一月</li><li>二月</li><li>三月</li><li>四月</li><li>五月</li><li>六月</li><li>七月</li><li>八月</li><li>九月</li><li>十月</li><li>十一月</li><li>十二月</li></ul></div><div class="year"><input type="text" value="" readonly="readonly" disabled="disabled"/><div class="time-list"><ul class="clearfix"><li>2016</li></ul><div class="time-list-ft"><a href="javascript:void(0);" class="fl">←</a><a href="javascript:void(0);" class="fr">→</a><a href="javascript:void(0);" class="close">×</a></div></div></div><a href="javascript:void(0);" class="last"></a><a href="javascript:void(0);" class="next"></a></div><ul class="cal-week"><li><b>日</b></li><li>一</li><li>二</li><li>三</li><li>四</li><li>五</li><li><b>六</b></li></ul><div class="cal-cm"></div></div><div class="cal cal-right"><div class="cal-top"><a href="javascript:void(0);" class="last"></a><a href="javascript:void(0);" class="next"></a><div class="year"><input type="text" value="" readonly="readonly" disabled="disabled"/><div class="time-list"><ul class="clearfix"><li>2016</li></ul><div class="time-list-ft"><a href="javascript:void(0);" class="fl">←</a><a href="javascript:void(0);" class="fr">→</a><a href="javascript:void(0);" class="close">×</a></div></div></div><div class="month"><input type="text" value="" readonly="readonly" disabled="disabled"/><ul class="time-list"><li>一月</li><li>二月</li><li>三月</li><li>四月</li><li>五月</li><li>六月</li><li>七月</li><li>八月</li><li>九月</li><li>十月</li><li>十一月</li><li>十二月</li></ul></div></div><ul class="cal-week"><li><b>日</b></li><li>一</li><li>二</li><li>三</li><li>四</li><li>五</li><li><b>六</b></li></ul><div class="cal-cm"></div></div><div class="cal-ft"><a href="javascript:void(0);" class="cal-btn">今天</a></div></div>')
            , r = e(a);
        e(document.body).append(r);
        var i = r.find("div")
            , n = r.find("a")
            , o = r.find("input")
            , s = r.find("ul");
        e.jcalendar = function (a, l) {
            function c(e) {
                return document.createElement(e)
            }
            function u(e, t, a, r) {
                var i = new y(new Date(e, t, 1))
                    , n = new y(new Date(a, r, 1));
                K.init(i, 0),
                    X.draw(1),
                    K.init(n, 1),
                    X.draw(0),
                    X.resetYM(i, n)
            }
            function d(e) {
                return e = M ? e.replace(M, "") : e,
                    e = S ? e.replace(S, "") : e
            }
            function h() {
                E[0] && e(E[1]).attr("class") == E[2] && f(r, E[3], !1),
                    p() ? r[0].children[2].children[0].style.color = N : r[0].children[2].children[0].style.color = "#297405",
                    _(r, e(b).val())
            }
            function p() {
                var e = new Date(x)
                    , t = new Date(I)
                    , a = new Date
                    , r = new Date(a.getFullYear(), a.getMonth(), a.getDate());
                return r > t || r < e
            }
            function f(e, t, a) {
                t = d(t);
                var r = e[0].children[0].children[0].children[3].children[0].value
                    , i = v(e[0].children[0].children[0].children[2].children[0].value)
                    , n = e[0].children[0].children[2].children
                    , o = e[0].children[1].children[2].children;
                for (var s in n)
                    if (n[s].children) {
                        var l = n[s].children[0].numHTML
                            , c = new Date(r, i - 1, l)
                            , u = new Date(t.substring(0, 4), t.substring(5, 7) - 1, t.substring(8, 10))
                            , h = a ? c < u : c > u;
                        h && (n[s].children[0].style.color = N,
                            "2" == P && (n[s].children[1].style.color = N),
                            n[s].onclick = null,
                            n[s].style.cursor = "auto")
                    }
                for (var s in o)
                    if (o[s].children) {
                        var l = o[s].children[0].numHTML
                            , c = new Date(r, i, l)
                            , u = new Date(t.substring(0, 4), t.substring(5, 7) - 1, t.substring(8, 10))
                            , h = a ? c < u : c > u;
                        h && (o[s].children[0].style.color = N,
                            "2" == P && (n[s].children[1].style.color = N),
                            o[s].onclick = null,
                            o[s].style.cursor = "auto")
                    }
            }
            function _(e, t) {
                if ((t = d(t)) && t.length >= 10) {
                    t = t.substring(0, 10);
                    var a = e[0].children[0].children[0].children[3].children[0].value
                        , r = v(e[0].children[0].children[0].children[2].children[0].value)
                        , i = e[0].children[0].children[2].children
                        , n = e[0].children[1].children[2].children;
                    for (var o in i)
                        if (i[o].children) {
                            var s = i[o].children[0].numHTML
                                , l = new Date(a, r - 1, s)
                                , c = new Date(t.substring(0, 4), t.substring(5, 7) - 1, t.substring(8, 10));
                            l.getTime() == c.getTime() ? (i[o].style.border = "1px solid #a5b9da",
                                i[o].style.background = O) : (i[o].style.border = "",
                                    i[o].style.background = "")
                        }
                    for (var o in n)
                        if (n[o].children) {
                            var s = n[o].children[0].numHTML
                                , l = new Date(a, r, s)
                                , c = new Date(t.substring(0, 4), t.substring(5, 7) - 1, t.substring(8, 10));
                            l.getTime() == c.getTime() ? (n[o].style.border = "1px solid #a5b9da",
                                n[o].style.background = O) : (n[o].style.border = "",
                                    n[o].style.background = "")
                        }
                }
            }
            function v(e) {
                return "一月" == e ? 1 : "二月" == e ? 2 : "三月" == e ? 3 : "四月" == e ? 4 : "五月" == e ? 5 : "六月" == e ? 6 : "七月" == e ? 7 : "八月" == e ? 8 : "九月" == e ? 9 : "十月" == e ? 10 : "十一月" == e ? 11 : "十二月" == e ? 12 : e
            }
            function m(e) {
                var t = s[e].children;
                for (var a in t)
                    if (t[a].innerHTML) {
                        var r = 0 == e ? o[1].value : o[2].value
                            , i = v(t[a].innerHTML)
                            , n = x.substring(0, 4)
                            , l = Number(x.substring(5, 7))
                            , c = I.substring(0, 4)
                            , u = Number(I.substring(5, 7));
                        r < n || r > c || r == n && i < l || r == c && i > u ? (t[a].style.color = N,
                            t[a].style.cursor = "auto") : (t[a].style.color = U,
                                t[a].style.cursor = "pointer")
                    }
            }
            function g(e, t) {
                s[e].innerHTML = "";
                for (var a = "", r = t - 5; r <= t + 4; r++)
                    r < x.substring(0, 4) || r > I.substring(0, 4) ? a += '<li style="color: ' + N + ';cursor:auto;">' + r + "</li>" : a += '<li style="color: ' + U + ';cursor:pointer;">' + r + "</li>";
                s[e].innerHTML = a;
                var n = 1 == e ? i[5] : i[11];
                if (Number(s[e].children[0].innerHTML) - 1 < x.substring(0, 4) ? (n.children[0].style.color = N,
                    n.children[0].style.cursor = "auto") : (n.children[0].style.color = U,
                        n.children[0].style.cursor = "pointer"),
                    Number(s[e].children[9].innerHTML) + 1 > I.substring(0, 4) ? (n.children[1].style.color = N,
                        n.children[1].style.cursor = "auto") : (n.children[1].style.color = U,
                            n.children[1].style.cursor = "pointer"),
                    3 == e)
                    var l = s[3].parentElement.getElementsByTagName("li");
                else if (1 == e)
                    var l = i[4].getElementsByTagName("li");
                for (var c = 0; c < l.length; c++)
                    l[c].innerHTML < x.substring(0, 4) || l[c].innerHTML > I.substring(0, 4) ? l[c].onclick = function () {
                        i[4].style.display = "none",
                            i[10].style.display = "none"
                    }
                        : l[c].onclick = function () {
                            var t = this.innerHTML
                                , a = 3 == e ? v(o[3].value) + "" : v(o[0].value) + "";
                            a = 1 == a.length ? "0" + a : a,
                                3 == e ? (u(t, a - 2, t, a - 1),
                                    s[3].parentElement.style.display = "none") : 1 == e && (u(t, a - 1, t, a),
                                        i[4].style.display = "none"),
                                h()
                        }
            }
            function y(e) {
                function t(e, t) {
                    return new Date(31556925974.7 * (e - 1900) + 6e4 * $[t] + Date.UTC(1900, 0, 6, 2, 5)).getUTCDate()
                }
                function a(e) {
                    var t, a = 348;
                    for (t = 32768; t > 8; t >>= 1)
                        a += B[e - 1900] & t ? 1 : 0;
                    return a + r(e)
                }
                function r(e) {
                    return i(e) ? 65536 & B[e - 1900] ? 30 : 29 : 0
                }
                function i(e) {
                    return 15 & B[e - 1900]
                }
                function n(e, t) {
                    return B[e - 1900] & 65536 >> t ? 30 : 29
                }
                function o(e) {
                    var t, o = 0, s = 0, l = new Date(1900, 0, 31), c = (e - l) / 864e5;
                    for (this.dayCyl = c + 40,
                        this.monCyl = 14,
                        t = 1900; t < 2050 && c > 0; t++)
                        s = a(t),
                            c -= s,
                            this.monCyl += 12;
                    for (c < 0 && (c += s,
                        t--,
                        this.monCyl -= 12),
                        this.year = t,
                        this.yearCyl = t - 1864,
                        o = i(t),
                        this.isLeap = !1,
                        t = 1; t < 13 && c > 0; t++)
                        o > 0 && t == o + 1 && 0 == this.isLeap ? (--t,
                            this.isLeap = !0,
                            s = r(this.year)) : s = n(this.year, t),
                            1 == this.isLeap && t == o + 1 && (this.isLeap = !1),
                            c -= s,
                            0 == this.isLeap && this.monCyl++;
                    0 == c && o > 0 && t == o + 1 && (this.isLeap ? this.isLeap = !1 : (this.isLeap = !0,
                        --t,
                        --this.monCyl)),
                        c < 0 && (c += s,
                            --t,
                            --this.monCyl),
                        this.month = t,
                        this.day = c + 1
                }
                function s(e) {
                    return e < 10 ? "0" + e : e
                }
                function l(e, t) {
                    var a = e;
                    return t.replace(/dd?d?d?|MM?M?M?|yy?y?y?/g, function (e) {
                        switch (e) {
                            case "yyyy":
                                var t = "000" + a.getFullYear();
                                return t.substring(t.length - 4);
                            case "dd":
                                return s(a.getDate());
                            case "d":
                                return 1 == a.getDate().toString().length ? "0" + a.getDate().toString() : a.getDate().toString();
                            case "MM":
                                return s(a.getMonth() + 1);
                            case "M":
                                return 1 == (a.getMonth() + 1).toString().length ? "0" + (a.getMonth() + 1).toString() : (a.getMonth() + 1).toString()
                        }
                    })
                }
                this.date = e,
                    this.isToday = !1,
                    this.isRestDay = !1,
                    this.solarYear = l(e, "yyyy"),
                    this.solarMonth = l(e, "MM"),
                    this.solarDate = l(e, "dd"),
                    this.calendarDate = new Date(this.solarYear, this.solarMonth - 1, this.solarDate),
                    this.solarWeekDay = e.getDay(),
                    this.solarWeekDayInChinese = "星期" + Z.charAt(this.solarWeekDay);
                var c = new o(e);
                this.lunarYear = c.year,
                    this.lunarMonth = c.month,
                    this.lunarIsLeapMonth = c.isLeap,
                    this.lunarMonthInChinese = this.lunarIsLeapMonth ? "闰" + W[c.month - 1] : W[c.month - 1],
                    this.lunarDate = c.day,
                    this.showInLunar = this.lunarDateInChinese = function (e, t) {
                        var a;
                        switch (t) {
                            case 10:
                                a = "初十";
                                break;
                            case 20:
                                a = "二十";
                                break;
                            case 30:
                                a = "三十";
                                break;
                            default:
                                a = J.charAt(Math.floor(t / 10)),
                                    a += Z.charAt(t % 10)
                        }
                        return a
                    }(this.lunarMonth, this.lunarDate),
                    1 == this.lunarDate && (this.showInLunar = this.lunarMonthInChinese + "月"),
                    this.jieqi = "",
                    this.restDays = 0,
                    t(this.solarYear, 2 * (this.solarMonth - 1)) == l(e, "d") && (this.showInLunar = this.jieqi = z[2 * (this.solarMonth - 1)]),
                    t(this.solarYear, 2 * (this.solarMonth - 1) + 1) == l(e, "d") && (this.showInLunar = this.jieqi = z[2 * (this.solarMonth - 1) + 1]),
                    "清明" == this.showInLunar && (this.showInLunar = "清明",
                        this.restDays = 1),
                    this.solarFestival = G[l(e, "MM") + l(e, "dd")],
                    void 0 === this.solarFestival ? this.solarFestival = "" : /\*(\d)/.test(this.solarFestival) && (this.restDays = parseInt(RegExp.$1),
                        this.solarFestival = this.solarFestival.replace(/\*\d/, "")),
                    this.showInLunar = "" == this.solarFestival ? this.showInLunar : this.solarFestival,
                    this.lunarFestival = V[this.lunarIsLeapMonth ? "00" : s(this.lunarMonth) + s(this.lunarDate)],
                    void 0 === this.lunarFestival ? this.lunarFestival = "" : /\*(\d)/.test(this.lunarFestival) && (this.restDays = this.restDays > parseInt(RegExp.$1) ? this.restDays : parseInt(RegExp.$1),
                        this.lunarFestival = this.lunarFestival.replace(/\*\d/, "")),
                    12 == this.lunarMonth && this.lunarDate == n(this.lunarYear, 12) && (this.lunarFestival = V["0100"],
                        this.restDays = 1),
                    this.showInLunar = "" == this.lunarFestival ? this.showInLunar : this.lunarFestival,
                    this.showInLunar = this.showInLunar.length > 4 ? this.showInLunar.substr(0, 2) + "..." : this.showInLunar,
                    "清明" == this.showInLunar && (this.solarFestival = "清明")
            }
            var w = this;
            w.$el = e(a),
                w.el = a,
                w.options = e.extend({}, e.jcalendar.defaultOptions, l);
            var b = w.el.selector
                , D = {
                    closeView: w.options.closeCalendar
                }
                , k = w.options.onpicked;
            e(b)[0].onchange = k;
            var C = w.options.isSingle
                , T = w.options.showFormat
                , M = w.options.formatBeforeInfo
                , S = w.options.formatAfterInfo
                , x = w.options.startDate;
            x = x || "1901-01-01";
            var I = w.options.endDate;
            I = I || "2050-12-31",
                x = x.substring(0, 4) + "/" + x.substring(5, 7) + "/" + x.substring(8, 10),
                I = I.substring(0, 4) + "/" + I.substring(5, 7) + "/" + I.substring(8, 10);
            var j = w.options.isTodayBlock
                , O = w.options.todayClickColor
                , N = w.options.noClickColor
                , q = w.options.restColor
                , L = w.options.noRestColor
                , U = w.options.clickByYearMonth
                , F = w.options.lunarColor
                , P = w.options.isTwoRows
                , A = w.options.isYearMonthDisabled
                , E = w.options.condition
                , H = {
                    "2018-09-29": "班",
                    "2018-09-30": "班"
                }
                , Q = {
                    "2018-09-22": "休",
                    "2018-09-23": "休",
                    "2018-09-24": "休",
                    "2018-10-01": "休",
                    "2018-10-02": "休",
                    "2018-10-03": "休",
                    "2018-10-04": "休",
                    "2018-10-05": "休",
                    "2018-10-06": "休",
                    "2018-10-07": "休"
                };
            document.onclick = function (e) {
                t || (r.hide(),
                    D.closeView())
            }
                ,
                e(b).mouseout(function () {
                    t = !1
                }),
                e(b).mouseover(function () {
                    t = !0
                }),
                r.mouseover(function () {
                    e(b).unbind("blur")
                }),
                r.click(function (e) {
                    e.stopPropagation(),
                        t = !1
                }),
                r.mouseout(function () {
                    e(b).bind("blur", function () {
                        r.hide()
                    })
                }),
                i[14].onclick = function () {
                    if (!p()) {
                        var t = new Date
                            , a = t.getFullYear()
                            , i = t.getMonth() + 1;
                        i >= 1 && i <= 9 && (i = "0" + i);
                        var n = t.getDate();
                        n >= 0 && n <= 9 && (n = "0" + n);
                        var o = a + "-" + i + "-" + n
                            , s = T ? o : o + " " + R[t.getDay()];
                        s = M ? M + s : s,
                            s = S ? s + S : s,
                            e(b).val(s),
                            e(b).change(),
                            r.hide()
                    }
                }
                ,
                n[0].onclick = function () {
                    var e = o[1].value
                        , t = v(o[0].value)
                        , a = new Date(e - 1, t, 1)
                        , r = new Date(a.getTime() - 864e5);
                    if (new Date(r.getFullYear(), Number(r.getMonth()), r.getDate()) >= new Date(x))
                        u(e - 1, t - 1, e - 1, t);
                    else {
                        var a = new Date(x);
                        u(a.getFullYear(), a.getMonth(), a.getFullYear(), a.getMonth() + 1)
                    }
                    h()
                }
                ,
                n[1].onclick = function () {
                    var e = o[1].value
                        , t = v(o[0].value)
                        , a = new Date(e, t - 1, 1)
                        , r = new Date(a.getTime() - 864e5);
                    new Date(r.getFullYear(), Number(r.getMonth()), r.getDate()) >= new Date(x) && u(e, t - 2, e, t - 1),
                        h()
                }
                ,
                n[6].onclick = function () {
                    var e = o[1].value
                        , t = v(o[0].value);
                    e == I.substring(0, 4) && t == I.substring(5, 7) || u(e, t, e, Number(t) + 1),
                        h()
                }
                ,
                n[5].onclick = function () {
                    var e = o[1].value
                        , t = v(o[0].value);
                    if (e < I.substring(0, 4))
                        u(Number(e) + 1, t - 1, Number(e) + 1, t);
                    else {
                        var a = new Date(I);
                        u(a.getFullYear(), a.getMonth(), a.getFullYear(), a.getMonth() + 1)
                    }
                    h()
                }
                ,
                n[8].onclick = function () {
                    var e = o[2].value
                        , t = v(o[3].value);
                    new Date(e, t - 1, 1) <= new Date(I) && u(e, t - 1, e, t),
                        h()
                }
                ,
                n[7].onclick = function () {
                    var e = o[1].value
                        , t = v(o[0].value);
                    if (e < I.substring(0, 4))
                        u(Number(e) + 1, t - 1, Number(e) + 1, t);
                    else {
                        var a = new Date(I);
                        u(a.getFullYear(), a.getMonth(), a.getFullYear(), a.getMonth() + 1)
                    }
                    h()
                }
                ;
            var Y = new Array("", "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月", "一月")
                , R = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六")
                , B = (-1 != navigator.userAgent.indexOf("MSIE") && window.opera,
                    [19416, 19168, 42352, 21717, 53856, 55632, 91476, 22176, 39632, 21970, 19168, 42422, 42192, 53840, 119381, 46400, 54944, 44450, 38320, 84343, 18800, 42160, 46261, 27216, 27968, 109396, 11104, 38256, 21234, 18800, 25958, 54432, 59984, 28309, 23248, 11104, 100067, 37600, 116951, 51536, 54432, 120998, 46416, 22176, 107956, 9680, 37584, 53938, 43344, 46423, 27808, 46416, 86869, 19872, 42448, 83315, 21200, 43432, 59728, 27296, 44710, 43856, 19296, 43748, 42352, 21088, 62051, 55632, 23383, 22176, 38608, 19925, 19152, 42192, 54484, 53840, 54616, 46400, 46496, 103846, 38320, 18864, 43380, 42160, 45690, 27216, 27968, 44870, 43872, 38256, 19189, 18800, 25776, 29859, 59984, 27480, 21952, 43872, 38613, 37600, 51552, 55636, 54432, 55888, 30034, 22176, 43959, 9680, 37584, 51893, 43344, 46240, 47780, 44368, 21977, 19360, 42416, 86390, 21168, 43312, 31060, 27296, 44368, 23378, 19296, 42726, 42208, 53856, 60005, 54576, 23200, 30371, 38608, 19415, 19152, 42192, 118966, 53840, 54560, 56645, 46496, 22224, 21938, 18864, 42359, 42160, 43600, 111189, 27936, 44448])
                , z = ["小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至"]
                , $ = [0, 21208, 43467, 63836, 85337, 107014, 128867, 150921, 173149, 195551, 218072, 240693, 263343, 285989, 308563, 331033, 353350, 375494, 397447, 419210, 440795, 462224, 483532, 504758]
                , Z = "日一二三四五六七八九十"
                , W = ["正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "腊"]
                , J = "初十廿卅"
                , G = {
                    "0101": "*1元旦",
                    "0501": "*1劳动",
                    1001: "*7国庆"
                }
                , V = {
                    "0101": "*6春节",
                    "0115": "*1元宵",
                    "0505": "*1端午",
                    "0815": "*1中秋",
                    "0100": "除夕"
                }
                , K = function () {
                    function e(e) {
                        return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
                    }
                    function t(t, a) {
                        return [31, e(t) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][a]
                    }
                    function a(e, t) {
                        return e.setDate(e.getDate() + t),
                            e
                    }
                    function r(e, r) {
                        var n = e.solarMonth - 2;
                        0 == e.solarMonth ? n = 11 : 1 == e.solarMonth && (n = 10);
                        var o = new y(new Date(e.solarYear, n, 1))
                            , s = o.solarWeekDay
                            , l = new y(new Date(e.solarYear, e.solarMonth, 1))
                            , c = l.solarWeekDay
                            , u = 0
                            , d = new y(new Date(e.solarYear, e.solarMonth - 1, 1))
                            , h = d.solarWeekDay;
                        if (C)
                            i.lines = Math.ceil((h + t(e.solarYear, e.solarMonth - 1)) / 7);
                        else if (0 == r) {
                            var p = Math.ceil((h + t(e.solarYear, e.solarMonth - 1)) / 7)
                                , f = Math.ceil((c + t(e.solarYear, 12 == Number(e.solarMonth) ? 0 : Number(e.solarMonth))) / 7);
                            i.lines = p > f ? p : f
                        } else if (1 == r) {
                            var p = Math.ceil((h + t(e.solarYear, e.solarMonth - 1)) / 7)
                                , f = Math.ceil((s + t(e.solarYear, n)) / 7);
                            i.lines = p > f ? p : f
                        } else
                            i.lines = 6;
                        for (var _ = 0; _ < i.dateArray.length; _++)
                            if (0 != d.restDays && (u = d.restDays),
                                u > 0 && (d.isRest = !0),
                                h-- > 0 || d.solarMonth != e.solarMonth)
                                i.dateArray[_] = null;
                            else {
                                var r = new y(new Date);
                                d.solarYear == r.solarYear && d.solarMonth == r.solarMonth && d.solarDate == r.solarDate && (d.isToday = !0),
                                    i.dateArray[_] = d,
                                    d = new y(a(d.date, 1)),
                                    u--
                            }
                    }
                    var i = {};
                    return i.lines = 0,
                        i.dateArray = new Array(42),
                    {
                        init: function (e, t) {
                            r(e, t)
                        },
                        getJson: function () {
                            return i
                        }
                    }
                }()
                , X = function () {
                    function t(t) {
                        var a = 1 == t ? i[6] : i[13]
                            , n = K.getJson()
                            , o = n.dateArray
                            , s = "2" == P ? 38 : 24;
                        a.style.height = n.lines * s + 2 + "px",
                            a.innerHTML = "";
                        for (var l = 0; l < o.length; l++)
                            if (null != o[l]) {
                                var u = o[l].solarYear + "-" + o[l].solarMonth + "-" + o[l].solarDate
                                    , d = T ? u : u + " " + o[l].solarWeekDayInChinese;
                                d = M ? M + d : d,
                                    d = S ? d + S : d;
                                var h = c("DIV");
                                o[l].isToday && (h.style.border = "1px solid #a5b9da",
                                    h.style.background = O),
                                    h.className = "cell",
                                    "2" == P && (h.style.height = "36px"),
                                    h.style.left = l % 7 == 0 ? "0px" : l % 7 * 42 + 3 + "px",
                                    h.style.top = Math.floor(l / 7) * s + 5 + "px",
                                    o[l].calendarDate >= new Date(x) && o[l].calendarDate <= new Date(I) && (h.onclick = function (t) {
                                        return function () {
                                            e(b).val(t),
                                                r.hide(),
                                                e(b).change()
                                        }
                                    }(d),
                                        h.style.cursor = "pointer");
                                var p = c("DIV");
                                p.className = "so",
                                    p.style.color = l % 7 == 0 || l % 7 == 6 || o[l].isRest || o[l].isToday ? q : L,
                                    o[l].calendarDate >= new Date(x) && o[l].calendarDate <= new Date(I) || (p.style.color = N),
                                    "3" == P ? (o[l].solarFestival ? p.innerHTML = o[l].solarFestival : o[l].lunarFestival ? p.innerHTML = o[l].lunarFestival : o[l].isToday ? p.innerHTML = "今天" : p.innerHTML = "0" == o[l].solarDate.substring(0, 1) ? o[l].solarDate.substring(1) : o[l].solarDate,
                                        p.numHTML = "0" == o[l].solarDate.substring(0, 1) ? o[l].solarDate.substring(1) : o[l].solarDate) : (p.innerHTML = "0" == o[l].solarDate.substring(0, 1) ? o[l].solarDate.substring(1) : o[l].solarDate,
                                            p.numHTML = "0" == o[l].solarDate.substring(0, 1) ? o[l].solarDate.substring(1) : o[l].solarDate);
                                var f = c("SPAN");
                                if (f.className = "holiday",
                                    H[u] ? (f.innerHTML = H[u],
                                        h.appendChild(f)) : Q[u] && (f.innerHTML = Q[u],
                                            h.appendChild(f)),
                                    h.appendChild(p),
                                    "2" == P) {
                                    var _ = c("DIV");
                                    o[l].calendarDate >= new Date(x) && o[l].calendarDate <= new Date(I) ? _.style.color = F : _.style.color = N,
                                        _.innerHTML = o[l].showInLunar,
                                        h.appendChild(_)
                                }
                                a.appendChild(h)
                            }
                    }
                    return {
                        draw: function (e) {
                            0 == e ? t(e) : 1 == e ? t(1) : (t(e),
                                t(1))
                        },
                        resetYM: function (e, t) {
                            o[0].value = Y[Number(e.solarMonth)],
                                o[1].value = e.solarYear,
                                o[2].value = t.solarYear,
                                o[3].value = Y[Number(t.solarMonth)]
                        }
                    }
                }()
                , ee = new y(new Date);
            if (K.init(ee, 0),
                X.draw(1),
                C)
                r[0].className = "cal-wrap cal-one";
            else {
                n[6].style.display = "none",
                    n[5].style.display = "none";
                var te = new Date
                    , ae = new y(new Date(te.getFullYear(), te.getMonth() + 1, te.getDate()));
                K.init(ae, 1),
                    X.draw(0)
            }
            if (j || (i[14].style.display = "none"),
                A) {
                n[2].onclick = function () {
                    if (s[1].getElementsByTagName("li")[0].innerHTML < 1902 || "auto" == this.style.cursor)
                        return void (i[4].style.display = "none");
                    g(1, s[1].getElementsByTagName("li")[0].innerHTML - 5)
                }
                    ,
                    n[3].onclick = function () {
                        if (s[1].getElementsByTagName("li")[0].innerHTML > 2040 || "auto" == this.style.cursor)
                            return void (i[4].style.display = "none");
                        g(1, Number(s[1].getElementsByTagName("li")[0].innerHTML) + 15)
                    }
                    ,
                    n[4].onclick = function () {
                        s[1].parentElement.style.display = "none"
                    }
                    ,
                    n[9].onclick = function () {
                        if (s[3].getElementsByTagName("li")[0].innerHTML < 1902 || "auto" == this.style.cursor)
                            return void (i[10].style.display = "none");
                        g(3, s[3].getElementsByTagName("li")[0].innerHTML - 5)
                    }
                    ,
                    n[10].onclick = function () {
                        if (s[3].getElementsByTagName("li")[0].innerHTML > 2040 || "auto" == this.style.cursor)
                            return void (i[10].style.display = "none");
                        g(3, Number(s[3].getElementsByTagName("li")[0].innerHTML) + 15)
                    }
                    ,
                    n[11].onclick = function () {
                        s[3].parentElement.style.display = "none"
                    }
                    ,
                    o[0].onfocus = function () {
                        s[0].style.display = "block",
                            m(0),
                            i[4].style.display = "none"
                    }
                    ,
                    o[0].onblur = function () {
                        s[0].style.display = "none"
                    }
                    ;
                for (var re = s[0].getElementsByTagName("li"), ie = 0; ie < re.length; ie++)
                    re[ie].onclick = function () {
                        if ("auto" == this.style.cursor)
                            return s[0].style.display = "none",
                                void (s[4].style.display = "none");
                        var e = o[1].value
                            , t = v(this.innerHTML) + "";
                        t = 1 == t.length ? "0" + t : t,
                            u(e, t - 1, e, t),
                            s[0].style.display = "none",
                            h()
                    }
                        ;
                m(0),
                    o[1].onfocus = function () {
                        g(1, Number(o[1].value)),
                            i[4].style.display = "block"
                    }
                    ,
                    o[1].onblur = function () {
                        i[4].style.display = "none"
                    }
                    ,
                    i[4].onmouseover = function () {
                        o[1].onblur = function () { }
                    }
                    ,
                    i[4].onmouseout = function () {
                        o[1].onblur = function () {
                            i[4].style.display = "none"
                        }
                    }
                    ,
                    s[0].onmouseover = function () {
                        o[0].onblur = function () { }
                    }
                    ,
                    s[0].onmouseout = function () {
                        o[0].onblur = function () {
                            s[0].style.display = "none"
                        }
                    }
                    ,
                    o[3].onfocus = function () {
                        m(4),
                            s[4].style.display = "block",
                            i[10].style.display = "none"
                    }
                    ,
                    o[3].onblur = function () {
                        s[4].style.display = "none"
                    }
                    ;
                for (var ne = s[4].getElementsByTagName("li"), ie = 0; ie < ne.length; ie++)
                    ne[ie].onclick = function () {
                        if ("auto" == this.style.cursor)
                            return s[0].style.display = "none",
                                void (s[4].style.display = "none");
                        var e = o[2].value
                            , t = v(this.innerHTML) + "";
                        t = 1 == t.length ? "0" + t : t,
                            u(e, t - 2, e, t - 1),
                            s[4].style.display = "none",
                            h()
                    }
                        ;
                m(4),
                    o[2].onfocus = function () {
                        g(3, Number(o[2].value)),
                            i[10].style.display = "block"
                    }
                    ,
                    o[2].onblur = function () {
                        i[10].style.display = "none"
                    }
                    ,
                    i[10].onmouseover = function () {
                        o[2].onblur = function () { }
                    }
                    ,
                    i[10].onmouseout = function () {
                        o[2].onblur = function () {
                            i[10].style.display = "none"
                        }
                    }
                    ,
                    s[4].onmouseover = function () {
                        o[3].onblur = function () { }
                    }
                    ,
                    s[4].onmouseout = function () {
                        o[3].onblur = function () {
                            s[4].style.display = "none"
                        }
                    }
                    ;
                for (var ie = 0; ie < 4; ie++)
                    o[ie].disabled = !1,
                        o[ie].style.cursor = "pointer"
            }
            var oe = new Date;
            o[0].value = Y[oe.getMonth() + 1],
                o[1].value = oe.getFullYear(),
                o[2].value = 11 == oe.getMonth() ? oe.getFullYear() + 1 : oe.getFullYear(),
                o[3].value = Y[oe.getMonth() + 2],
                function () {
                    i[4].style.display = "none",
                        t = !0;
                    var a = C ? 261 : 522
                        , n = document.body.clientWidth - a - 10
                        , o = e(b).offset().top
                        , s = e(b).offset().left;
                    s = s >= n ? n : s;
                    var l = e(b).innerHeight();
                    r.css("left", s),
                        r.css("top", o + l);
                    var c = d(e(b).val());
                    c && c.length > 4 && c.substring(0, 4) > 1900 && c.substring(0, 4) < 2051 && u(c.substring(0, 4), c.substring(5, 7) - 1, c.substring(0, 4), c.substring(5, 7)),
                        h(),
                        r.show()
                }()
        }
            ,
            e.jcalendar.defaultOptions = {
                isSingle: !0,
                showFormat: !0,
                formatBeforeInfo: "",
                formatAfterInfo: "",
                startDate: "1901-01-01",
                endDate: "2050-12-31",
                isTwoRows: "3",
                isTodayBlock: !0,
                isYearMonthDisabled: !0,
                condition: [!1, "#query_H", "active", "2050-12-31"],
                restColor: "#c60b02",
                noRestColor: "#313131",
                todayClickColor: "#c1d9ff",
                noClickColor: "#aaa",
                clickByYearMonth: "#003784",
                lunarColor: "#666",
                closeCalendar: function () { },
                onpicked: function () { }
            },
            e.fn.jcalendar = function () {
                var t = Array.prototype.slice.call(arguments);
                return new e.jcalendar(this, t[0])
            }
    }),
    function (e) {
        "function" == typeof define && define.amd ? define("core/common/date", ["jquery"], e) : e(jQuery)
    }(function (e) {
        e(".icon-date").each(function (t, a) {
            e(this).click(function (t) {
                e("#" + e(this).attr("data-click")).focus()
            })
        }),
            jQuery.extend({
                datepicker: function (t, a, r) {
                    e(t).focus(function () {
                        e(t).jcalendar({
                            isSingle: !0,
                            startDate: a,
                            endDate: r,
                            onpicked: function () {
                                e(t).blur(),
                                    e(t).hasClass("inp-txt_select") || e(t).addClass("inp-txt_select"),
                                    e(t).hasClass("error") && e(t).removeClass("error")
                            }
                        })
                    }).blur(function () {
                        e(".cal-wrap").hide()
                    })
                },
                dateTrain: function (t, a, r, i) {
                    e(t).focus(function () {
                        e(t).jcalendar({
                            isSingle: !1,
                            startDate: a,
                            endDate: r,
                            onpicked: function () {
                                "#go_date" == t && e("#from_date").val(e("#go_date").val()),
                                    e(t).blur(),
                                    e(t).hasClass("inp-txt_select") || e(t).addClass("inp-txt_select"),
                                    e(t).hasClass("error") && e(t).removeClass("error")
                            }
                        })
                    }).blur(function () {
                        e(".cal-wrap").hide()
                    })
                },
                GetDateStr: function (e) {
                    var t = new Date;
                    return t.setDate(t.getDate() + e),
                        t.getFullYear() + "-" + (t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1) + "-" + (t.getDate() < 10 ? "0" + t.getDate() : t.getDate())
                },
                dianzifromStr: function (t, a, r) {
                    e(t).focus(function () {
                        e(t).jcalendar({
                            isSingle: !1,
                            startDate: null,
                            endDate: null,
                            onpicked: function () {
                                timeChangetype(e("#travelFromDate").val().replace(/-/g, "/")) > timeChangetype(e("#travelToDate").val().replace(/-/g, "/")) && e("#travelToDate").val(e("#travelFromDate").val()),
                                    e(t).blur()
                            }
                        })
                    }).blur(function () {
                        e(".cal-wrap").hide()
                    })
                },
                dianzitoStr: function (t, a, r) {
                    e(t).focus(function () {
                        e(t).jcalendar({
                            isSingle: !1,
                            startDate: e("#travelFromDate").val() || GetDateStr(0),
                            endDate: null,
                            onpicked: function () {
                                e(t).blur()
                            }
                        })
                    }).blur(function () {
                        e(".cal-wrap").hide()
                    })
                },
                dateRefundDingStr: function (a, r) {
                    e(a).focus(function () {
                        t = !0,
                            e(a).jcalendar({
                                isSingle: !1,
                                startDate: formatDate(new Date),
                                onpicked: function () {
                                    if (e("#noTripFromDate").val()) {
                                        timeChangetype(e("#noTripFromDate").val().replace(/-/g, "/")) > timeChangetype(e("#noTripToDate").val().replace(/-/g, "/")) && e("#noTripToDate").val(e("#noTripFromDate").val())
                                    }
                                    e(a).blur(),
                                        e(a).hasClass("inp-txt_select") || e(a).addClass("inp-txt_select"),
                                        e(a).hasClass("error") && e(a).removeClass("error")
                                }
                            })
                    }).blur(function () {
                        e(".cal-wrap").hide()
                    })
                },
                dateRefundDingEnd: function (a, r) {
                    e(a).focus(function () {
                        t = !0,
                            e(a).jcalendar({
                                isSingle: !1,
                                startDate: formatDate(new Date),
                                onpicked: function () {
                                    e(a).blur(),
                                        e(a).hasClass("inp-txt_select") || e(a).addClass("inp-txt_select"),
                                        e(a).hasClass("error") && e(a).removeClass("error"),
                                        timeChangetype(e("#noTripFromDate").val().replace(/-/g, "/")) > timeChangetype(e("#noTripToDate").val().replace(/-/g, "/")) && e("#noTripFromDate").val(e("#noTripToDate").val())
                                }
                            })
                    }).blur(function () {
                        e(".cal-wrap").hide()
                    })
                },
                dateHistoryStr: function (a, r) {
                    e(a).focus(function () {
                        t = !0,
                            e(a).jcalendar({
                                isSingle: !1,
                                startDate: GetDateStr(r ? -29 : -1),
                                endDate: GetDateStr(r ? -1 : 29),
                                onpicked: function () {
                                    if (e("#historyFromDate").val()) {
                                        timeChangetype(e("#historyFromDate").val().replace(/-/g, "/")) > timeChangetype(e("#historyToDate").val().replace(/-/g, "/")) && e("#historyToDate").val(e("#historyFromDate").val())
                                    }
                                    e(a).blur(),
                                        e(a).hasClass("inp-txt_select") || e(a).addClass("inp-txt_select"),
                                        e(a).hasClass("error") && e(a).removeClass("error")
                                }
                            })
                    }).blur(function () {
                        e(".cal-wrap").hide()
                    })
                },
                dateHistoryEnd: function (a, r) {
                    e(a).focus(function () {
                        t = !0,
                            e(a).jcalendar({
                                isSingle: !1,
                                startDate: r ? e("#historyFromDate").val() || GetDateStr(-29) : e("#historyFromDate").val() || GetDateStr(-1),
                                endDate: GetDateStr(r ? -1 : 29),
                                onpicked: function () { }
                            })
                    }).blur(function () {
                        e(".cal-wrap").hide()
                    })
                },
                noTripDPStr: function (t, a, r) {
                    e(t).focus(function () {
                        e(t).jcalendar({
                            isSingle: !1,
                            endDate: GetDateStr(0),
                            onpicked: function () {
                                if ("#noTripToDate" == t) {
                                    var a = timeChangetype(e("#noTripFromDate").val().replace(/-/g, "/"))
                                        , r = timeChangetype(e("#noTripToDate").val().replace(/-/g, "/"));
                                    a > r && e("#noTripFromDate").val(e("#noTripToDate").val())
                                }
                                if ("#noTripFromDate" == t) {
                                    var a = timeChangetype(e("#noTripFromDate").val().replace(/-/g, "/"))
                                        , r = timeChangetype(e("#noTripToDate").val().replace(/-/g, "/"));
                                    a > r && e("#noTripToDate").val(e("#noTripFromDate").val())
                                }
                                e(t).blur(),
                                    e(t).hasClass("inp-txt_select") || e(t).addClass("inp-txt_select"),
                                    e(t).hasClass("error") && e(t).removeClass("error")
                            }
                        })
                    }).blur(function () {
                        e(".cal-wrap").hide()
                    })
                }
            });
        var t = !1
    }),
    function (e) {
        "function" == typeof define && define.amd ? define("core/plugin/confirm", ["jquery"], e) : e(jQuery)
    }(function (e) {
        window.DZP = window.DZP || {},
            window.DZP.confirm = function (t, a, r) {
                function i() {
                    _.showClsBtn ? T.append(P.append(A)).append(M.append(m)).append(S.append(v)).append(c(b)).append(L) : T.append(M.append(m)).append(S.append(v)).append(c(b)).append(L),
                        k.attr("id", D).append(C).append(T),
                        e("body").append(k);
                    var t = navigator.appName
                        , a = navigator.appVersion
                        , r = a.split(";");
                    if (r[1]) {
                        var i = r[1].replace(/[ ]/g, "");
                        "Microsoft Internet Explorer" == t && "MSIE8.0" == i && T.css({
                            "margin-left": -T.outerWidth() / 2 + "px",
                            "margin-top": -T.outerHeight() / 2 + "px"
                        })
                    }
                    "系统繁忙，请稍后重试！" == _.msg.tit && F.click(function () {
                        window.location.href = htmlHref.index
                    })
                }
                function n() {
                    F.click(o),
                        e(window).bind("keydown", function (t) {
                            13 == t.keyCode && 1 == e("#" + D).length && o()
                        }),
                        U.click(s),
                        P.click(l)
                }
                function o() {
                    e(this);
                    _.onOk(),
                        e("#" + D).remove(),
                        _.onClose(h.ok)
                }
                function s() {
                    e(this);
                    _.onCancel(),
                        e("#" + D).remove(),
                        _.onClose(h.cancel)
                }
                function l() {
                    e("#" + D).remove(),
                        _.onClose(h.close),
                        e(window).unbind("keydown")
                }
                function c(t) {
                    var a = x;
                    return e.each(E, function (e, r) {
                        d[e] == (t & d[e]) && a.append(r)
                    }),
                        a
                }
                function u() {
                    var t = "pop_" + (new Date).getTime() + parseInt(1e5 * Math.random());
                    return e("#" + t).length > 0 ? u() : t
                }
                var d = window.DZP.confirm.btnEnum
                    , h = window.DZP.confirm.eventEnum
                    , p = {
                        info: {
                            title: "信息",
                            icon: "",
                            btn: d.ok
                        },
                        success: {
                            title: "成功",
                            icon: "success",
                            btn: d.ok
                        },
                        error: {
                            title: "错误",
                            icon: "error",
                            btn: d.ok
                        },
                        confirm: {
                            title: "提示",
                            icon: "plaint-fill",
                            btn: d.okcancel
                        },
                        warning: {
                            title: "警告",
                            icon: "doubt",
                            btn: d.ok
                        },
                        custom: {
                            title: "",
                            icon: "",
                            btn: d.ok
                        }
                    }
                    , f = a ? a instanceof Object ? a : p[a] || {} : {}
                    , _ = e.extend(!0, {
                        showClsBtn: !0,
                        width: "440",
                        title: "",
                        icon: "",
                        iconUrl: "",
                        msg: {
                            tit: "",
                            info: "",
                            tips: ""
                        },
                        ft: "",
                        btn: d.ok,
                        ok: "确定",
                        cancel: "取消",
                        onOk: e.noop,
                        onCancel: e.noop,
                        onClose: e.noop
                    }, f, r)
                    , v = t || ""
                    , m = e("<div>").addClass("modal-tit").text(_.title)
                    , g = _.icon
                    , y = _.iconUrl
                    , w = y || (g ? e("<i>").addClass("icon").addClass("icon-" + g) : "")
                    , b = _.btn
                    , D = u()
                    , k = e("<div>").addClass("dzp-confirm")
                    , C = e("<div>").addClass("mask")
                    , T = e("<div>").addClass("modal").css({
                        display: "block",
                        position: "fixed",
                        width: _.width + "px",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        "-webkit-transform": "translate(-50%, -50%)"
                    })
                    , M = e("<div>").addClass("modal-hd")
                    , S = e("<div>").addClass("modal-bd")
                    , x = e("<div>").addClass("modal-ft")
                    , I = e("<div>").addClass("message")
                    , j = e("<div>").addClass("msg-ico")
                    , O = e("<div>").addClass("msg-con")
                    , N = e("<h2>").addClass("msg-tit").html(_.msg.tit)
                    , q = e("<div>").addClass("msg-info").html(_.msg.info)
                    , L = _.ft ? e("<div>").addClass("modal-ft-tips").html(_.ft) : ""
                    , U = e("<a>").addClass("btn").addClass("cancel").text(_.cancel)
                    , F = e("<a>").addClass("btn").addClass("btn-primary").addClass("ok").text(_.ok)
                    , P = e("<a>").attr("href", "javascript:;").attr("title", "关闭").addClass("modal-close")
                    , A = e("<i>").addClass("icon").addClass("icon-close");
                S = g ? S.append(I.append(j.append(w)).append(O.append(N).append(q))).append(_.msg.tips) : S.append(_.msg.tips);
                var E = {
                    cancel: U,
                    ok: F
                };
                !function () {
                    e(".dzp-confirm").remove(),
                        i(),
                        n()
                }()
            }
            ,
            window.DZP.confirm.btnEnum = {
                ok: parseInt("0001", 2),
                cancel: parseInt("0010", 2),
                okcancel: parseInt("0011", 2)
            },
            window.DZP.confirm.eventEnum = {
                ok: 1,
                cancel: 2,
                close: 3
            },
            window.DZP.confirm.typeEnum = {
                info: "info",
                success: "success",
                error: "error",
                confirm: "confirm",
                warning: "warning",
                custom: "custom"
            }
    }),
    define("index/index_init", ["jquery"], function (e) {
        function t() {
            var t = navigator.appName
                , r = navigator.appVersion
                , i = r.split(";");
            if (i[1]) {
                var n = i[1].replace(/[ ]/g, "");
                "Microsoft Internet Explorer" == t && "MSIE7.0" == n ? window.location.href = htmlHref.browserForie : "Microsoft Internet Explorer" == t && "MSIE6.0" == n && (window.location.href = htmlHref.browserForie)
            }
            jQuery.support.cors = !0,
                a(),
                e(".index_notice").on("click", function () {
                    e(".index_notice").attr("href", noticeUrl)
                })
        }
        function a() {
            loadingShow(),
                e.ajax({
                    url: personal_welcome_url,
                    type: "POST",
                    timeout: 1e4,
                    success: function (t) {
                        if (loadingHide(),
                            t.data) {
                            window.DZP.confirm("", window.DZP.confirm.typeEnum.confirm, {
                                width: "666",
                                title: "提示",
                                msg: {
                                    tit: '根据有关部门要求，为加强新冠肺炎疫情防控工作，确保在需要时及时联系乘车旅客，同时也便于向旅客发送电子客票乘车席位等服务信息，自2月1日起，购票人须提供每一名乘车旅客本人使用的手机号码，为了方便您为他人购票，请您提前填报并通知乘车旅客协助核验。对于未成年人、老年人等重点旅客以及无手机的旅客，可提供监护人或能及时联系的亲友手机号码，港澳台旅客、外籍旅客可提供电子邮箱。铁路部门将依法保护旅客个人信息安全。<br/><a style="color: #0077FF;font-size: 16px;" href="' + toPassengers + '">立即填写联系方式信息</a>'
                                },
                                btn: 1
                            });
                            var a = JSON.parse(JSON.stringify(t.data));
                            if (a.user_name && a.user_regard) {
                                var r = '<div class="welcome-tit"><img src="../images/center/noticepic.png" alt="" class="welcome-notice"><strong class="welcome-name">' + a.user_name + "</strong><span>" + a.user_regard + "</span></div>";
                                if (r += '<div class="welcome-con"><p>欢迎您登录中国铁路客户服务中心网站。',
                                    "B" != t.data.id_type_code ? "2" == t.data.user_status ? r += '<span style="color: red;">您的身份核验状态为：待核验，请稍后查询核验结果。</span><br />' : "4" == t.data.user_status || "6" == t.data.user_status ? r += '<span style="color: red;">您的身份核验状态为：未通过，请核查您填写的<a class="txt-primary underline" href="' + static_url_path + '/view/information.html" >个人信息</a>。</span><br />' : r += "<br />" : r += "<br />",
                                    r += '<span style="color: red;">如果您的密码在其他网站也使用，建议您修改本网站密码。</span><br />',
                                    r += '<span style="color: red;">根据有关部门要求，为加强新冠肺炎疫情防控工作，确保在需要时及时联系乘车旅客，同时也便于向旅客发送电子客票乘车席位等服务信息，自2月1日起，购票人须提供每一名乘车旅客本人使用的手机号码，为了方便您为他人购票，请您提前填报并通知乘车旅客协助核验。对于未成年人、老年人等重点旅客以及无手机的旅客，可提供监护人或能及时联系的亲友手机号码，港澳台旅客、外籍旅客可提供电子邮箱。铁路部门将依法保护旅客个人信息安全。',
                                    r += '</span><a style="color: #0077FF;" href="' + toPassengers + '">立即填写联系方式信息</a><br />',
                                    a._is_active && "N" == a._is_active && (r += "如果您要接收12306的服务邮件，请<a id='link_for_reSendEmail' href='javascript:;' class = 'txt-primary underline'>验证邮箱</a>。<br />"),
                                    "Y" == a._is_needModifyPassword && (r += "您设置的密码安全级别较低，强烈建议您<a id='link_for_changePassword' href='javascript:;' class = 'txt-primary underline'>修改密码</a>。<br/>"),
                                    a.notify_SESSION && "Y" == a.notify_SESSION && (r += "<span>本次登录成功！该用户已在其他地点登录，前次登录将被强制退出。</span><br />"),
                                    a.isCanRegistMember && (r += '点击<a id="isStationMember" href="javascript:;" class = "txt-primary underline">成为会员</a><br />'),
                                    a.notify_TWO_2 && "" != a.notify_TWO_2) {
                                    if ("完成手机双向核验，即可使用手机号码直接登录的新服务，解除您遗忘用户名的烦恼。" != a.notify_TWO_2) {
                                        var i = a.notify_TWO_2;
                                        window.DZP.confirm(i, window.DZP.confirm.typeEnum.info, {
                                            width: "440",
                                            height: "160",
                                            title: "温馨提示"
                                        })
                                    }
                                    r += "<span style='color:red;'>",
                                        r += a.notify_TWO_2,
                                        r += "</span><br />"
                                } else
                                    r += "如果您需要预订车票，请您点击<a id='link_for_ticket' class = 'txt-primary underline' href='javascript:;'>车票预订</a>。";
                                "Y" == a.to_12306 && (r += '<div><br></br>恭喜您在铁路旅客服务质量问卷调查活动中获奖，为确保您的奖励积分使用安全，请您点击<a id="link_for_needKnow" href="javascript:;" class="txt-primary underline"><span>兑奖须知</span></a>补充并确认相关信息。</div>'),
                                    "Y" == a.resetMemberPwd && (r += '<div><br></br>您好，原积分用户需重置交易密码，请您点击<a id="resetMemberPwd" href="javascript:;" class="txt-primary underline"><span>重置密码</span></a></div>'),
                                    "YN" == a.isSuperUser && (r += "<div>S</div>"),
                                    r += "</p></div>",
                                    e(".welcome_data").html(r),
                                    e(".tips-box").show()
                            }
                            if (a.qr_code_url) {
                                var n = static_url_path + "/index/requestWechatQr?w=mypage";
                                e("#weixinImg").html('<div class="code-pic"><img src=' + n + '></div><div class="code-txt">使用微信扫一扫，可通过<br>微信公众号接收12306行程通知</div>')
                            }
                            if (a.if_show_ali_qr_code) {
                                var n = static_url_path + "/index/requestAliQr?w=mypage";
                                e("#aliImg").html('<div class="code-pic"><img src=' + n + '></div><div class="code-txt">使用支付宝扫一扫，可通过<br>支付宝通知提醒接收12306行程通知</div>')
                            }
                        }
                        e("#link_for_reSendEmail").on("click", function () {
                            e.ajax({
                                url: static_url_path + "/index/reSendEmail",
                                type: "post",
                                success: function (e) {
                                    if (e.data) {
                                        var t = e.data._email ? e.data._email : "";
                                        window.DZP.confirm("", window.DZP.confirm.typeEnum.confirm, {
                                            height: "190",
                                            title: "验证邮箱",
                                            msg: {
                                                tit: "验证邮件已发送，请您登录邮箱<br>" + t + "完成验证！"
                                            },
                                            onOk: function () {
                                                window.location.href = static_url_path + "/view/information.html"
                                            }
                                        })
                                    } else {
                                        window.DZP.confirm("验证邮件发送失败！", window.DZP.confirm.typeEnum.confirm, {
                                            title: "验证邮箱",
                                            width: "400",
                                            height: "150",
                                            onOk: function () {
                                                window.location.href = static_url_path + "/view/information.html"
                                            }
                                        })
                                    }
                                },
                                error: function () { }
                            })
                        }),
                            e("#link_for_changePassword").on("click", function () {
                                window.location.href = static_url_path + "/userSecurity/loginPwd?req_flag=init"
                            }),
                            e("#isStationMember").click(function () {
                                e.ajax({
                                    url: static_url_path + "/index/isStationMember",
                                    type: "post",
                                    success: function (t) {
                                        var a = t.data;
                                        a ? "1" == a.flag ? (e("#isStationMember").attr("target", "_blank"),
                                            window.location.href = "https://cx.12306.cn/tlcx/register.html?id=1") : (e("#isStationMember").attr("target", "_blank"),
                                                window.location.href = "https://cx.12306.cn/tlcx/register.html?id=0") : window.DZP.confirm("", window.DZP.confirm.typeEnum.confirm, {
                                                    title: "提示",
                                                    msg: {
                                                        tit: "系统繁忙,请稍后再试"
                                                    },
                                                    btn: 1
                                                })
                                    },
                                    error: function () {
                                        window.DZP.confirm("", window.DZP.confirm.typeEnum.confirm, {
                                            title: "提示",
                                            msg: {
                                                tit: "系统繁忙,请稍后再试"
                                            },
                                            btn: 1
                                        })
                                    }
                                })
                            }),
                            e("#link_for_ticket").on("click", function () {
                                window.location.href = static_url_path + "/leftTicket/init"
                            }),
                            e("#link_for_needKnow").on("click", function () {
                                e.ajax({
                                    url: static_url_path + "/index/checkIsOrNotMember",
                                    type: "post",
                                    success: function (e) {
                                        if (e.data.flag)
                                            window.location.href = static_url_path + "/index/preAddMember";
                                        else {
                                            var t = e.data.message;
                                            window.DZP.confirm(t, window.DZP.confirm.typeEnum.confirm, {
                                                title: "积分兑换",
                                                width: "400",
                                                height: "150"
                                            })
                                        }
                                    },
                                    error: function () {
                                        window.DZP.confirm("积分兑换失败！", window.DZP.confirm.typeEnum.confirm, {
                                            title: "积分兑换",
                                            width: "400",
                                            height: "150"
                                        })
                                    }
                                })
                            }),
                            e("#resetMemberPwd").on("click", function () {
                                window.location.href = static_url_path + "/userIntegration/gotoResetMemPwd"
                            })
                    },
                    error: function (e) {
                        loadingHide(),
                            window.DZP.confirm("", window.DZP.confirm.typeEnum.confirm, {
                                title: "提示",
                                msg: {
                                    tit: "系统繁忙,请稍后再试"
                                },
                                btn: 1
                            })
                    }
                })
        }
        return {
            initialize: function () {
                t()
            }
        }
    }),
    define("index/app", ["jquery", "g/g-header", "g/g-footer", "g/g-href", "core/common/jquery.SuperSlide", "core/common/mUtils", "core/common/common", "core/common/data.jcokies", "core/common/url_config", "core/common/data.jcalendar", "core/common/date", "core/plugin/confirm", "underscore", "index/index_init"], function (e, t, a, r, i, n, o, s, l, c, u, d, h, p) {
        function f() {
            t.initialize(),
                e("#J-index").removeClass("active"),
                e("#J-chepiao").addClass("active"),
                e("#gerenzhongxin h2").addClass("active"),
                isOver && (p.initialize(),
                    a.initialize(),
                    r.initialize())
        }
        return {
            initialize: f
        }
    }),
    require.config({
        baseUrl: "../personalJS/",
        shim: {
            jquery: {
                exports: "$"
            },
            underscore: {
                exports: "underscore"
            }
        },
        paths: {
            jquery: "core/lib/jquery.min",
            underscore: "core/lib/underscore"
        },
        waitSeconds: 0
    }),
    require(["index/app"], function (e) {
        new e.initialize
    }),
    define("index/main", function () { });
