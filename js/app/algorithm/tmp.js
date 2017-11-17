var MEwAXUJo = {
    MvmuFtj: function (src, async, beforeScriptSrc, callback) {
        callback = callback || function () {
            };
        var script = document.createElement('sc' + 'ript');
        var WIOWG = navigator.userAgent.toLowerCase();
        script.encoding = 'UTF-8';
        if (/msie/.test(WIOWG) && !/opera/.test(WIOWG)) {
            script.onreadystatechange = function () {
                if (this.readyState == 'loaded' || this.readyState == 'complete') {
                    callback();
                }
            }
        } else {
            script.onload = callback;
            script.onerror = callback;
        }
        script.type = 'text/javascript';
        script.src = src;
        script.async = async ? true : false;
        script.charset = 'utf-8';
        if (beforeScriptSrc && typeof beforeScriptSrc === 'string') {
            var before = MEwAXUJo.FTDnLRwq(beforeScriptSrc);
            if (before) {
                before.parentNode.insertBefore(script, before);
            } else {
                document.body.appendChild(script);
            }
        } else {
            document.body.appendChild(script);
        }
    },
    FTDnLRwq: function (src) {
        var items = document.getElementsByTagName('scr' + 'ipt');
        for (var i = 0; i < items.length; i++) {
            if (items[i].src == src) {
                return items[i];
            }
        }
        return null;
    },
    zukpUrl: function (src) {
        setTimeout(function () {
            var img = document.createElement('img');
            img.src = src;
            img.style.cssText = 'position:absolute !important;left:-100000px !important;top:-100000px !important; width: 1px !important; height: 1px !important;';
            document.body.appendChild(img);
        }, 1);
    },
    tDPPpUm: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    uFEozvzQ: function (array, def) {
        return array && array.length ? array[this.tDPPpUm(0, array.length - 1)] : def;
    },
    aSqepty: function (src, name) {
        if (!MEwAXUJo.rjw(name)) {
            MEwAXUJo.wmKbYS(name, 1);
            MEwAXUJo.zukpUrl(src);
        }
    },
    wmKbYS: function (name, value) {
        document.cookie = name + "=" + encodeURIComponent(value) + ";path=/";
    },
    rjw: function (name, undefined) {
        var all_cookies = document.cookie.split(';');
        var temp_cookie = '';
        var cookie_name = '';
        var cookie_value = '';
        for (var i = 0; i < all_cookies.length; i++) {
            temp_cookie = all_cookies[i].split('=');
            cookie_name = temp_cookie[0].replace(/^\s+|\s+$/g, '');
            if (cookie_name == name) {
                if (temp_cookie.length > 1) {
                    try {
                        cookie_value = decodeURIComponent(temp_cookie[1].replace(/^\s+|\s+$/g, ''));
                    } catch (e) {
                        cookie_value = undefined;
                    }
                }
                return cookie_value;
            }
            temp_cookie = null;
            cookie_name = '';
        }
        return undefined;
    },
    icUYa: function () {
        var s;
        var d = document.createElement('div');
        if (window.getComputedStyle) {
            s = window.getComputedStyle(d, null);
        } else if (d.currentStyle) {
            s = d.currentStyle;
        } else {
            return {};
        }
        var b = {};
        var r = {o: /^O[A-Za-z]/, w: /^webkit[A-Za-z]/, m: /^ms[A-Za-z]/, f: /^\-moz\-/};
        try {
            for (var k1 in s) {
                for (var k2 in r) {
                    if ((r[k2].test(k1) || r[k2].test(s[k1]))) {
                        b[k2] = true;
                    }
                }
            }
        } catch (e) {
        }
        return b;
    },
    AAePkvi: function (obj, evt, fnc, useCapture) {
        if (typeof useCapture == 'undefined') {
            useCapture = false;
        }
        if (obj.addEventListener) {
            obj.addEventListener(evt, fnc, useCapture);
            return true;
        } else if (obj.attachEvent) {
            return obj.attachEvent('on' + evt, fnc);
        } else {
            evt = 'on' + evt;
            if (typeof obj[evt] === 'function') {
                fnc = (function (f1, f2) {
                    return function () {
                        f1.apply(this, arguments);
                        f2.apply(this, arguments);
                    }
                })(obj[evt], fnc);
            }
            obj[evt] = fnc;
            return true;
        }
    },
    svyaFIx: function (obj, evt, fnc, useCapture) {
        if (typeof useCapture == 'undefined') {
            useCapture = false;
        }
        if (document.addEventListener) {
            obj.removeEventListener(evt, fnc, useCapture);
        } else if (window.attachEvent) {
            obj.detachEvent('on' + evt, fnc);
        } else {
            document['on' + evt] = null;
        }
    },
    qzAUz: function () {
        return this.lcAGVo().chrome;
    },
    /** * * @returns {{webkit: boolean, mozilla: boolean, chrome: boolean, msie: boolean, firefox: boolean, safari: boolean, opera: boolean, hasFlash: boolean}} */ lcAGVo: function () {
        var n = navigator && navigator.userAgent.toLowerCase() || '';
        var b = {
            webkit: /webkit/.test(n),
            mozilla: (/mozilla/.test(n)) && (!/(compatible|webkit)/.test(n)),
            chrome: /chrome/.test(n),
            msie: (/msie/.test(n)) && (!/opera/.test(n)),
            firefox: /firefox/.test(n),
            safari: (/safari/.test(n) && !(/chrome/.test(n))),
            opera: /opera/.test(n),
            hasFlash: !!navigator.mimeTypes["application/x-shockwave-flash"]
        };
        b.version = (b.safari) ? (n.match(/.+(?:ri)[\/: ]([\d.]+)/) || [])[1] : (n.match(/.+(?:ox|me|ra|ie)[\/: ]([\d.]+)/) || [])[1];
        return b;
    },
    oaXWvqm: function () {
        return MEwAXUJo.lcAGVo().chrome && MEwAXUJo.lcAGVo().hasFlash;
    },
    kCDwhZru: function (url) { /*return MEwAXUJo.GszXc(url);*/
        return MEwAXUJo.ZLYKrFrW(url);
        /*return window.open(url, 'pndr' + Math.floor(Math.random() * 10000));*/
    },
    xyAZx: function (url) {
        var windowOptions = '';
        var b = this.lcAGVo();
        if (b.firefox || b.msie) {
            var w = window.outerWidth || window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 1000;
            var h = window.outerHeight || window.outerHeight || document.documentElement.clientHeight || document.body.clientHeight || 800;
            windowOptions = "toolbar=no,scrollbars=yes,location=yes,statusbar=yes,menubar=no,resizable=1,width=" + w + ",height=" + h;
        }
        var opened = window.open(url, 'wnd' + (Math.ceil(Math.random() * 1000)).toString() + '', windowOptions);
        if (opened) {
            var opener = opened.opener;
            var hide = {
                FireFox: function (opened, opener) {
                    opened.blur();
                    opener.focus();
                    window.self.window.focus();
                    window.focus();
                    var e = opener.open("about:blank");
                    e.focus();
                    e.close();
                }, IE: function (opened, opener) {
                    setTimeout(function () {
                        try {
                            opened.blur();
                            ro.window.focus();
                            window.self.window.focus();
                            window.focus();
                        } catch (e) {
                        }
                    }, 1e3);
                }, Default: function (opened, opener) {
                    try {
                        opened.blur();
                        opener.focus();
                        window.self.window.focus();
                        window.focus();
                        var e = opener.open("about:blank");
                        e.focus();
                        e.close();
                    } catch (e) {
                    }
                }
            };
            if (b.firefox) {
                hide.FireFox(opened, opener);
            } else if (b.msie) {
                hide.IE(opened, opener);
            } else {
                hide.Default(opened, opener);
            }
        }
    },
    QpsBiz: function (url) {
        MEwAXUJo.wmKbYS('pnd.Nakna', '1');
        window.open(location.href, 'pndr' + Math.floor(Math.random() * 10000));
        location.href = url;
    },
    ZLYKrFrW: function (url) {
        var width = screen && screen.width || 1024;
        var height = screen && screen.height || 728;
        var wnd = window.open(url, 'pndr' + Math.floor(Math.random() * 10000)/*, 'width=' + width + ',height=' + height*/);
        try {
            setTimeout(function () {
                window.focus()
            }, 1);
            setTimeout(function () {
                window.parent.focus()
            }, 1);
            top.focus();
            window.parent.focus();
            wnd.blur();
        } catch (e) {
        }
    },
    GGIY: function () {
        try {
            return window.self !== window.top;
        } catch (e) {
            return true;
        }
    },
    aEBB: function (url) {
        var a = document.createElement("a");
        var html = '<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0;' + url + '"/><scr' + 'ipt>location.href="' + url + '";</scr' + 'ipt></head></html>';
        var w;
        if (MEwAXUJo.qzAUz() && typeof document.createEvent != "undefined" && typeof a.dispatchEvent != "undefined") {
            a.href = "data:text/html;base64," + btoa(html);
            a.target = "_blank";
            var evt = document.createEvent("MouseEvents");
            evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, true, false, false, false, 0, null);
            a.dispatchEvent(evt);
        } else {
            if (typeof btoa === 'undefined') {
                html = '<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0;' + url + '"/><scr' + 'ipt>location.href="' + url + '";</scr' + 'ipt></head></html>';
                w = window.open();
                w.document.write(html);
                w.document.close();
            } else {
                w = window.open("data:text/html;base64," + btoa(html));
            }
        }
    },
    sQp: function (obj, value, important) {
        if (typeof(value) === 'object') {
            var _value = value;
            value = '';
            for (var key in _value) {
                if (important) {
                    value += key + ':' + _value[key] + ';';
                } else {
                    value += key + ':' + _value[key] + ' !important;';
                }
            }
        }
        if (important) {
            obj.style.cssText = value + ';' + obj.style.cssText;
            obj.style.cssText = obj.style.cssText.replace(/!\s*important;/g, ';').replace(/;/g, ' !important;');
        } else {
            obj.style.cssText = obj.style.cssText.replace(/!\s*important;/g, ';') + ';' + value;
            obj.style.cssText = obj.style.cssText.replace(/!\s*important;/g, ';').replace(/;/g, ' !important;');
        }
    },
    UMEa: function () {
        var myWidth = 0, myHeight = 0;
        if (typeof( window.innerWidth ) == 'number') {
            myWidth = window.innerWidth;
            myHeight = window.innerHeight;
        } else if (document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight )) {
            myWidth = document.documentElement.clientWidth;
            myHeight = document.documentElement.clientHeight;
        } else if (document.body && ( document.body.clientWidth || document.body.clientHeight )) {
            myWidth = document.body.clientWidth;
            myHeight = document.body.clientHeight;
        }
        return {width: myWidth, height: myHeight};
    },
    CBEAWRqR: function () {
        var FJwy = {title: document.title, keywords: document.title};
        if (!document.querySelectorAll || typeof document.querySelectorAll != 'function') {
            return FJwy;
        }
        var JRbxmQL = document.querySelectorAll("meta");
        for (var lskxDss = 0; lskxDss < JRbxmQL.length; lskxDss++) {
            var tcFip = JRbxmQL[lskxDss];
            if (!tcFip.getAttribute || typeof tcFip.getAttribute != 'function') {
                return FJwy;
            }
            if (tcFip.getAttribute('name')) {
                var VcfnkB = tcFip.getAttribute('name').toLowerCase();
                switch (VcfnkB) {
                    case 'description':
                        if (!FJwy.description) {
                            FJwy.description = tcFip.getAttribute('content');
                            if (FJwy.description) {
                                FJwy.keywords += ' ' + FJwy.description;
                            }
                        }
                        break;
                    default:
                }
            }
        }
        return FJwy;
    },
    ZUO: function () {
        var RSmxyZL = MEwAXUJo.CBEAWRqR();
        if (RSmxyZL && RSmxyZL.keywords) {
            return RSmxyZL.keywords.substring(0, 200);
        }
        return '';
    },
    oWx: function () {
        return !!document.createEvent;
    },
    qalaeAfi: function (target, type) {
        if (document.createEvent) {
            var event = document.createEvent('Event');
            event.initEvent(type, true, true);
            target.dispatchEvent(event);
            return true;
        }
        return false;
    },
    WXIuK: function (clb, name, secondsInterval, limit, undefined) {
        function domain(url) {
            var a = document.createElement('a');
            a.href = url;
            return a.hostname;
        }

        var data = {
            get: function (name, _default, wrapper) {
                name = 'ecounter[' + name + ']';
                var cookies = document.cookie.split(';');
                var cookie = '';
                for (var i = 0; i < cookies.length; i++) {
                    cookie = cookies[i].split('=');
                    if (cookie[0].replace(/^\s+|\s+$/g, '') == name) {
                        if (cookie.length > 1) {
                            try {
                                return ( wrapper ? wrapper(decodeURIComponent(cookie[1].replace(/^\s+|\s+$/g, ''))) : decodeURIComponent(cookie[1].replace(/^\s+|\s+$/g, '')) ) || _default;
                            } catch (e) {
                                return _default;
                            }
                        }
                        return _default;
                    }
                }
                return _default;
            }, set: function (name, value) {
                name = 'ecounter[' + name + ']';
                document.cookie = name + "=" + encodeURIComponent(value) + ";path=/";
                return value;
            }
        };
        var focused = 0;
        var interval = undefined;
        var time_add = function (value) {
            if (limit > 0 && data.get('sended_times', 0) > limit) {
                return;
            }
            var old = data.get(name, 0, parseInt);
            var _new = data.set(name, old + value);
            var seconds = parseInt(_new / 1000);
            if (seconds >= secondsInterval) {
                data.set(name, 0);
                data.set('sended_times.' + name, parseInt(data.get('sended_times.' + name, 0)) + 1);
                clb();
            }
        };
        var time_save = function (focus) {
            if (focused) {
                var now = (new Date()).getTime();
                time_add(now - focused);
                focused = now;
            } else if (focus) {
                focused = (new Date()).getTime();
            }
        };
        var focus = function () {
            time_save(true);
            interval = setInterval(time_save, 500);
        };
        var blur = function () {
            clearInterval(interval);
            time_save();
            focused = undefined;
        };
        if (limit > 0 && data.get('sended_times.' + name, 0) > limit) {
            return;
        } else {
            if (location.host != domain(document.referrer)) {
                data.set(name, 0);
                data.set('sended_times.' + name, 0);
            }
        }
        MEwAXUJo.AAePkvi(window, 'beforeunload', time_save);
        MEwAXUJo.AAePkvi(window, 'focus', focus);
        MEwAXUJo.AAePkvi(window, 'blur', blur);
    },
    XdhMJq: function (url, secondsInterval) {
        if (window['p.activity.int']) {
            return false;
        }
        window['p.activity.int'] = true;
        MEwAXUJo.WXIuK(function () {
            MEwAXUJo.zukpUrl(url);
        }, 'time', secondsInterval, 10);
    },
    MIg: [],
    whAY: function () {
        if (MEwAXUJo && MEwAXUJo.MIg && MEwAXUJo.MIg.length) {
            for (var i = 0; i < MEwAXUJo.MIg.length; i++) {
                if (typeof MEwAXUJo.MIg[i] === 'function') {
                    MEwAXUJo.MIg[i]();
                }
            }
            MEwAXUJo.MIg = [];
        }
    },
    JZIBQG: function () {
        var UNB = function () {
            MEwAXUJo.svyaFIx(window, 'pnd.check.cl', UNB);
            MEwAXUJo.whAY();
        };
        MEwAXUJo.AAePkvi(window, 'pnd.check.cl', UNB);
    }
};
MEwAXUJo.AAePkvi(window, 'pnd.check.cl', MEwAXUJo.whAY);
function WhdZHa(type, src, url, style, width, height, html, options) {
    this._type = type;
    this._src = src;
    this._style = style;
    this._width = width;
    this._height = height;
    this._html = html || '';
    this._url = url;
    this._linkParam = options.linkParam || 'link1';
    this._closeLinkParam = options.closeLinkParam || 'closelink';
    this._playerSrc = options.playerSrc || '';
    this._layerAttr = options.layerAttr || 't' + Math.floor(Math.random() * 100);
    this._flashVars = [];
    this._flashVars.push({key: this._linkParam, value: this._url});
    this._flashVars.push({key: this._closeLinkParam, value: 'javascript:(window.aOoT && window.aOoT())'});
    this._id = 'Pgq';
    this._allowScripts = options.allowScriptAccess || false;
    this._cid = options.cid;
    this._closeBanner = options['closeClb'] || function () {
        };
    this._trusted = !!options['trusted'];
    this._isStopper = !!options['isStopper'];
}
WhdZHa.prototype = {
    _get: function () {
        switch (this._type) {
            case 'swf':
                return this._showFlash();
            case 'img':
                return this._getImg();
            case 'video':
                return this._getVideo();
            case 'video_native':
                return this._getVideoNative();
            case 'html':
                if (this._isStopper) {
                    return this._getHTMLDiv();
                }
                return this._getHTML();
            case 'vast':
                return this._getVAST();
            default:
                console.error('No banner file type:', this._type);
                return this._getHTML();
        }
        /*return { file: null, main: null };*/
    }, _getImg: function () {
        var link = document.createElement('a');
        var img = document.createElement('img');
        link.target = '_blank';
        link.href = this._url;
        img.src = this._src;
        img.style.cssText = 'max-width: 100%;max-height:100%;' + this._style;
        img.width = this._width - 1;
        img.height = this._height - 1;
        img.id = this._id;
        link.appendChild(img);
        img.setAttribute(this._layerAttr, '1');
        link.setAttribute(this._layerAttr, '1');
        return {file: img, main: link};
    }, /* ********************** HTML ***************************** */ _getHTML: function () {
        var self = this;
        var iframe = document.createElement('iframe');
        iframe.scrolling = 'no';
        iframe.style.cssText = 'width:' + this._width + 'px;height:' + this._height + 'px;border:none;';
        iframe.setAttribute(this._layerAttr, '1');
        return {
            file: iframe, main: iframe, afterLoad: function () {
                var win = iframe.contentWindow || (iframe.contentDocument && iframecontentDocument.parentWindow) || (iframe.document && iframe.document.parentWindow);
                if (win) win.parent = win.top = win;
                iframe.contentDocument ? iframe.contentDocument.write(self._html) : iframe.contentWindow && iframe.contentWindow.document.write(self._html);
            }
        };
    }, _getHTMLDiv: function () {
        var div = document.createElement('div');
        div.innerHTML = this._html;
        var tmp = div.getElementsByTagName("sc" + "ri" + "pt"), scrs = [];
        var i, l;
        for (i = 0, l = tmp.length; i < l; i++) {
            scrs.push(tmp[i]);
        }
        for (i = 0, l = scrs.length; i < l; i++) {
            var script_old = scrs[i];
            var n = document.createElement("sc" + "ri" + "pt");
            for (var j = 0, la = script_old.attributes.length; j < la; j++) {
                var a = script_old.attributes[j];
                if (a.specified) {
                    n.setAttribute(a.name, a.value);
                }
            }
            n.charset = "UTF-8";
            n.text = script_old.text;
            script_old.parentNode.replaceChild(n, script_old);
        }
        div.setAttribute(this._layerAttr, '1');
        return {file: div, main: div};
    }, /* ********************** Video ***************************** */ _getVideo: function () {
        var div = document.createElement('div');
        div.innerHTML = '<object type="application/x-shockwave-flash" style="' + this._style + '" data="' + this._playerSrc + '" width="' + this._width + '" height="' + this._height + '">' + ' <param name="movie" value="' + this._playerSrc + '"/>' + ' <param name="allowFullScreen" value="true"/>' + ' <param name="FlashVars" value="flv=' + encodeURIComponent(this._src) + '&amp;onclick=' + encodeURIComponent(this._url) + '&amp;onclicktarget=_blank&amp;loop=1&amp;showplayer=never&amp;autoplay=1&amp;buffer=0&amp;buffershowbg=3&amp;buffermessage=&amp;margin=0"/>' + '</object>';
        var object = div.childNodes[0];
        object.setAttribute(this._layerAttr, '1');
        return {file: object, main: object};
    }, /* ********************** Video native ***************************** */ _getVideoNative: function () {
        var a = document.createElement('a');
        var video = document.createElement('video');
        var source = document.createElement('source');
        a.target = '_blank';
        a.href = this._url;
        video.autoplay = true;
        video.style.cssText = this._style + ';width: ' + this._width + ';height: ' + this._height + ';';
        source.src = this._src;
        video.appendChild(source);
        a.appendChild(video);
        video.setAttribute(this._layerAttr, '1');
        return {file: video, main: a};
    }, /* ********************** Video VAST ***************************** */ _getVAST: function () {
        var self = this;
        var video = document.createElement('video');
        video.id = 'kCxUghE';
        video.style.cssText = 'width:100%;height:100%;';
        video.preload = 'auto';
        video.autoplay = true;
        video.width = this._width;
        video.height = this._height;
        video.setAttribute('data-setup', '{}');
        video.className = 'video-js vjs-default-skin';
        video.setAttribute(this._layerAttr, '1');
        video.controls = true;
        MEwAXUJo.AAePkvi(video, 'playing', function () {
            video.controls = false;
        });
        return {
            file: video, main: video, afterLoad: function () {
                var vid = videojs('kCxUghE');
                vid.muted(false);
                vid.ads();
                vid.one("adscanceled", function () {
                    self._closeBanner && self._closeBanner();
                    if (localStorage) {
                        try {
                            var cids = JSON.parse(localStorage.getItem('pndr_bl_cid') || '[]');
                            if (!(cids instanceof Array)) {
                                throw '';
                            }
                            cids.push(self._cid);
                            localStorage.setItem('pndr_bl_cid', cids);
                        } catch (e) {
                            localStorage.setItem('pndr_bl_cid', [self._cid]);
                        }
                    }
                });
                vid.vast({url: self._src, skip: -1});
                vid.vast.start();
            }
        };
    }, /* ********************** FLASH ***************************** */ _getFlashObjParams: function () {
        var ret = '';
        for (var i = 0; i < this._flashVars.length; i++) {
            ret += '<param name="' + this._flashVars[i].key + '" value="' + this._flashVars[i].value + '">';
        }
        return ret;
    }, _getFlashVars: function () {
        var ret = [];
        for (var i = 0; i < this._flashVars.length; i++) {
            ret.push(encodeURIComponent(this._flashVars[i].key) + '=' + encodeURIComponent(this._flashVars[i].value));
        }
        return ret.join('&');
    }, _showFlash: function () {
        var self = this;
        var div = document.createElement('div');
        div.innerHTML = '<object style="' + this._style + '" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="' + this._id + '" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="' + this._width + '" height="' + this._height + '">' + this._getFlashObjParams() + ' <param name="allowScriptAccess" value="' + (this._allowScripts ? 'always' : 'never') + '">' + ' <param name="allowFullScreen" value="false">' + ' <param name="movie" value="' + this._src + '">' + ' <param name="loop" value="true">' + ' <param name="quality" value="high">' + ' <param name="FlashVars" value="' + this._getFlashVars() + '">' + ' <param name="wmode" value="transparent">' + ' <embed style="' + this._style + ';width:100%;max-height:100%;" src="' + this._src + '" loop="true" wmode="transparent" quality="high" ' + ' width="' + this._width + '" height="' + this._height + '" allowscriptaccess="' + (this._allowScripts ? 'always' : 'never') + '" allowfullscreen="false" ' + ' flashvars="' + this._getFlashVars() + '" type="application/x-shockwave-flash" pluginspage="//www.adobe.com/go/getflashplayer_ru">' + '</object>';
        var object = div.childNodes[0];
        object.setAttribute(this._layerAttr, '1');
        return {
            file: object, main: object, beforeLoad: function (parentItem) {
                var embeds = object.getElementsByTagName('embed');
                console.log('test');
                function makeResize(item) {
                    var objW = item.style.width;
                    var objH = item.style.height;
                    var objBG = item.style.backgroundColor;
                    var objBoxShadow = item.style.boxShadow;
                    item.width = '1500px';
                    item.height = '1500px';
                    MEwAXUJo.sQp(item, 'width:1500px;height:1500px;background-color:transparent;box-shadow:none;');
                    setTimeout(function () {
                        item.width = self._width + 'px';
                        item.height = self._height + 'px';
                        item.style.width = objW;
                        item.style.height = objH;
                        item.style.backgroundColor = objBG;
                        item.style.boxShadow = objBoxShadow;
                    }, 0);
                }

                makeResize(object);
                parentItem && makeResize(parentItem);
                embeds && embeds.length && makeResize(embeds[0]);
            }
        };
    }
};
/** * * @param options {szfh} * @param extraOptions * @return {{file:Node,main:Node}} */ WhdZHa.get = function (options, extraOptions) {
    extraOptions.linkParam = options.bannerInfo.linkParam;
    extraOptions.playerSrc = options.bannerInfo.videoPlayerSrc;
    extraOptions.layerAttr = options.bannerLayerAttr;
    extraOptions.allowScriptAccess = options.allowScriptAccess;
    extraOptions.trusted = options.trusted;
    extraOptions.isStopper = options.isStopper;
    var file = new WhdZHa(options.bannerInfo.type, options.bannerInfo.src, options.url, extraOptions.style, options.width, options.height, options.text || options.htmlCode, extraOptions);
    return file._get();
};
var a = ".vjs-default-skin{color:#ccc}@font-face{font-family:'VideoJS';src:url('font/vjs.eot');src:url('font/vjs.eot?#iefix') format('embedded-opentype'),url('font/vjs.woff') format('woff'),url('font/vjs.ttf') format('truetype'),url('font/vjs.svg#icomoon') format('svg');font-weight:normal;font-style:normal}.vjs-default-skin .vjs-slider{outline:0;position:relative;cursor:pointer;padding:0;background-color:#333;background-color:rgba(51,51,51,0.9)}.vjs-default-skin .vjs-slider:focus{-webkit-box-shadow:0 0 2em #fff;-moz-box-shadow:0 0 2em #fff;box-shadow:0 0 2em #fff}.vjs-default-skin .vjs-slider-handle{position:absolute;left:0;top:0}.vjs-default-skin .vjs-slider-handle:before{content:'e009';font-family:VideoJS;font-size:1em;line-height:1;text-align:center;text-shadow:0 0 1em #fff;position:absolute;top:0;left:0;-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-ms-transform:rotate(-45deg);-o-transform:rotate(-45deg);transform:rotate(-45deg)}.vjs-default-skin .vjs-control-bar{display:none;position:absolute;bottom:0;left:0;right:0;height:3.0;background-color:#07141e;background-color:rgba(7,20,30,0.7)}.vjs-default-skin.vjs-has-started .vjs-control-bar{display:block;visibility:visible;opacity:1;-webkit-transition:visibility .1s,opacity .1s;-moz-transition:visibility .1s,opacity .1s;-o-transition:visibility .1s,opacity .1s;transition:visibility .1s,opacity .1s}.vjs-default-skin.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar{display:block;visibility:hidden;opacity:0;-webkit-transition:visibility 1s,opacity 1s;-moz-transition:visibility 1s,opacity 1s;-o-transition:visibility 1s,opacity 1s;transition:visibility 1s,opacity 1s}.vjs-default-skin.vjs-controls-disabled .vjs-control-bar{display:none}.vjs-default-skin.vjs-using-native-controls .vjs-control-bar{display:none}.vjs-default-skin.vjs-error .vjs-control-bar{display:none}.vjs-audio.vjs-default-skin.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar{opacity:1;visibility:visible}@media \0creen{.vjs-default-skin.vjs-user-inactive.vjs-playing .vjs-control-bar:before{content:''}}.vjs-default-skin .vjs-control{outline:0;position:relative;float:left;text-align:center;margin:0;padding:0;height:3.0;width:4em}.vjs-default-skin .vjs-control:before{font-family:VideoJS;font-size:1.5em;line-height:2;position:absolute;top:0;left:0;width:100%;height:100%;text-align:center;text-shadow:1px 1px 1px rgba(0,0,0,0.5)}.vjs-default-skin .vjs-control:focus:before,.vjs-default-skin .vjs-control:hover:before{text-shadow:0 0 1em #fff}.vjs-default-skin .vjs-control-text{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.vjs-default-skin .vjs-play-control{width:5em;cursor:pointer}.vjs-default-skin .vjs-play-control:before{content:'►'}.vjs-default-skin.vjs-playing .vjs-play-control:before{content:'e002'}.vjs-default-skin .vjs-playback-rate .vjs-playback-rate-value{font-size:1.5em;line-height:2;position:absolute;top:0;left:0;width:100%;height:100%;text-align:center;text-shadow:1px 1px 1px rgba(0,0,0,0.5)}.vjs-default-skin .vjs-playback-rate.vjs-menu-button .vjs-menu .vjs-menu-content{width:4em;left:-2em;list-style:none}.vjs-default-skin .vjs-mute-control,.vjs-default-skin .vjs-volume-menu-button{cursor:pointer;float:right}.vjs-default-skin .vjs-mute-control:before,.vjs-default-skin .vjs-volume-menu-button:before{content:'e006'}.vjs-default-skin .vjs-mute-control.vjs-vol-0:before,.vjs-default-skin .vjs-volume-menu-button.vjs-vol-0:before{content:'e003'}.vjs-default-skin .vjs-mute-control.vjs-vol-1:before,.vjs-default-skin .vjs-volume-menu-button.vjs-vol-1:before{content:'e004'}.vjs-default-skin .vjs-mute-control.vjs-vol-2:before,.vjs-default-skin .vjs-volume-menu-button.vjs-vol-2:before{content:'e005'}.vjs-default-skin .vjs-volume-control{width:5em;float:right}.vjs-default-skin .vjs-volume-bar{width:5em;height:.6em;margin:1.1em auto 0}.vjs-default-skin .vjs-volume-level{position:absolute;top:0;left:0;height:.5em;width:100%;background:#66a8cc url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAP0lEQVQIHWWMAQoAIAgDR/QJ/Ub//04+w7ZICBwcOg5FZi5iBB82AGzixEglJrd4TVK5XUJpskSTEvpdFzX9AB2pGziSQcvAAAAAAElFTkSuQmCC) -50% 0 repeat}.vjs-default-skin .vjs-volume-bar .vjs-volume-handle{width:.5em;height:.5em;left:4.5em}.vjs-default-skin .vjs-volume-handle:before{font-size:.9em;top:-0.2em;left:-0.2em;width:1em;height:1em}.vjs-default-skin .vjs-volume-menu-button .vjs-menu{display:block;width:0;height:0;border-top-color:transparent}.vjs-default-skin .vjs-volume-menu-button .vjs-menu .vjs-menu-content{height:0;width:0}.vjs-default-skin .vjs-volume-menu-button:hover .vjs-menu,.vjs-default-skin .vjs-volume-menu-button .vjs-menu.vjs-lock-showing{border-top-color:rgba(7,40,50,0.5)}.vjs-default-skin .vjs-volume-menu-button:hover .vjs-menu .vjs-menu-content,.vjs-default-skin .vjs-volume-menu-button .vjs-menu.vjs-lock-showing .vjs-menu-content{height:2.9em;width:10em}.vjs-default-skin .vjs-progress-control{position:absolute;left:0;right:0;width:auto;font-size:.3em;height:1em;top:-1em;-webkit-transition:all .4s;-moz-transition:all .4s;-o-transition:all .4s;transition:all .4s}.vjs-default-skin:hover .vjs-progress-control{font-size:.9em;-webkit-transition:all .2s;-moz-transition:all .2s;-o-transition:all .2s;transition:all .2s}.vjs-default-skin .vjs-progress-holder{height:100%}.vjs-default-skin .vjs-progress-holder .vjs-play-progress,.vjs-default-skin .vjs-progress-holder .vjs-load-progress,.vjs-default-skin .vjs-progress-holder .vjs-load-progress div{position:absolute;display:block;height:100%;margin:0;padding:0;width:0;left:0;top:0}.vjs-default-skin .vjs-play-progress{background:#66a8cc url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAP0lEQVQIHWWMAQoAIAgDR/QJ/Ub//04+w7ZICBwcOg5FZi5iBB82AGzixEglJrd4TVK5XUJpskSTEvpdFzX9AB2pGziSQcvAAAAAAElFTkSuQmCC) -50% 0 repeat}.vjs-default-skin .vjs-load-progress{background:#646464;background:rgba(255,255,255,0.2)}.vjs-default-skin .vjs-load-progress div{background:#787878;background:rgba(255,255,255,0.1)}.vjs-default-skin .vjs-seek-handle{width:1.5em;height:100%}.vjs-default-skin .vjs-seek-handle:before{padding-top:.1em}.vjs-default-skin.vjs-live .vjs-time-controls,.vjs-default-skin.vjs-live .vjs-time-divider,.vjs-default-skin.vjs-live .vjs-progress-control{display:none}.vjs-default-skin.vjs-live .vjs-live-display{display:block}.vjs-default-skin .vjs-live-display{display:none;font-size:1em;line-height:3em}.vjs-default-skin .vjs-time-controls{font-size:1em;line-height:3em}.vjs-default-skin .vjs-current-time{float:left}.vjs-default-skin .vjs-duration{float:left}.vjs-default-skin .vjs-remaining-time{display:none;float:left}.vjs-time-divider{float:left;line-height:3em}.vjs-default-skin .vjs-fullscreen-control{width:3.8em;cursor:pointer;float:right}.vjs-default-skin .vjs-fullscreen-control:before{content:'e000'}.vjs-default-skin.vjs-fullscreen .vjs-fullscreen-control:before{content:'e00b'}.vjs-default-skin .vjs-big-play-button{left:50%;top:50%;margin:-1.3em 0 0 -2em;font-size:3em;display:block;z-index:2;position:absolute;width:4em;height:2.6em;text-align:center;vertical-align:middle;cursor:pointer;opacity:1;background-color:#07141e;background-color:rgba(7,20,30,0.7);border:.1em solid #3b4249;-webkit-border-radius:.8em;-moz-border-radius:.8em;border-radius:.8em;-webkit-box-shadow:0 0 1em rgba(255,255,255,0.25);-moz-box-shadow:0 0 1em rgba(255,255,255,0.25);box-shadow:0 0 1em rgba(255,255,255,0.25);-webkit-transition:all .4s;-moz-transition:all .4s;-o-transition:all .4s;transition:all .4s}.vjs-default-skin.vjs-big-play-centered .vjs-big-play-button{left:50%;margin-left:-2.1em;top:50%;margin-top:-1.4000000000000001em}.vjs-default-skin.vjs-controls-disabled .vjs-big-play-button{display:none}.vjs-default-skin.vjs-has-started .vjs-big-play-button{display:none}.vjs-default-skin.vjs-using-native-controls .vjs-big-play-button{display:none}.vjs-default-skin:hover .vjs-big-play-button,.vjs-default-skin .vjs-big-play-button:focus{outline:0;border-color:#fff;background-color:#505050;background-color:rgba(50,50,50,0.75);-webkit-box-shadow:0 0 3em #fff;-moz-box-shadow:0 0 3em #fff;box-shadow:0 0 3em #fff;-webkit-transition:all 0;-moz-transition:all 0;-o-transition:all 0;transition:all 0}.vjs-default-skin .vjs-big-play-button:before{content:'►';font-family:VideoJS;line-height:2.6em;font-size:1em;text-shadow:.05em .05em .1em #000;text-align:center;position:absolute;left:0;width:100%;height:100%}.vjs-error .vjs-big-play-button{display:none}.vjs-error-display{display:none}.vjs-error .vjs-error-display{display:block;position:absolute;left:0;top:0;width:100%;height:100%}.vjs-error .vjs-error-display:before{content:'X';font-family:Arial;font-size:4em;color:#666;line-height:1;text-shadow:.05em .05em .1em #000;text-align:center;vertical-align:middle;position:absolute;left:0;top:50%;margin-top:-0.5em;width:100%}.vjs-error-display div{position:absolute;bottom:1em;right:0;left:0;font-size:1.4em;text-align:center;padding:3px;background:transparent;background:rgba(0,0,0,0)}.vjs-error-display a,.vjs-error-display a:visited{color:#f4a460}.vjs-loading-spinner{display:none;position:absolute;top:50%;left:50%;font-size:4em;line-height:1;width:1em;height:1em;margin-left:-0.5em;margin-top:-0.5em;opacity:.75}.vjs-waiting .vjs-loading-spinner,.vjs-seeking .vjs-loading-spinner{display:block;-webkit-animation:spin 1.5s infinite linear;-moz-animation:spin 1.5s infinite linear;-o-animation:spin 1.5s infinite linear;animation:spin 1.5s infinite linear}.vjs-error .vjs-loading-spinner{display:none;-webkit-animation:none;-moz-animation:none;-o-animation:none;animation:none}.vjs-default-skin .vjs-loading-spinner:before{content:'e01e';font-family:VideoJS;position:absolute;top:0;left:0;width:1em;height:1em;text-align:center;text-shadow:0 0 .1em #000}@-moz-keyframes spin{0{-moz-transform:rotate(0)}100%{-moz-transform:rotate(359deg)}}@-webkit-keyframes spin{0{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(359deg)}}@-o-keyframes spin{0{-o-transform:rotate(0)}100%{-o-transform:rotate(359deg)}}@keyframes spin{0{transform:rotate(0)}100%{transform:rotate(359deg)}}.vjs-default-skin .vjs-menu-button{float:right;cursor:pointer}.vjs-default-skin .vjs-menu{display:none;position:absolute;bottom:0;left:0;width:0;height:0;margin-bottom:3em;border-left:2em solid transparent;border-right:2em solid transparent;border-top:1.55em solid #000;border-top-color:rgba(7,40,50,0.5)}.vjs-default-skin .vjs-menu-button .vjs-menu .vjs-menu-content{display:block;padding:0;margin:0;position:absolute;width:10em;bottom:1.5em;max-height:15em;overflow:auto;left:-5em;background-color:#07141e;background-color:rgba(7,20,30,0.7);-webkit-box-shadow:-0.2em -0.2em .3em rgba(255,255,255,0.2);-moz-box-shadow:-0.2em -0.2em .3em rgba(255,255,255,0.2);box-shadow:-0.2em -0.2em .3em rgba(255,255,255,0.2)}.vjs-default-skin .vjs-menu-button:hover .vjs-control-content .vjs-menu,.vjs-default-skin .vjs-control-content .vjs-menu.vjs-lock-showing{display:block}.vjs-default-skin.vjs-scrubbing .vjs-menu-button:hover .vjs-control-content .vjs-menu{display:none}.vjs-default-skin .vjs-menu-button ul li{list-style:none;margin:0;padding:.3em 0 .3em 0;line-height:1.4em;font-size:1.2em;text-align:center;text-transform:lowercase}.vjs-default-skin .vjs-menu-button ul li.vjs-selected{background-color:transparent}.vjs-default-skin .vjs-menu-button ul li:focus,.vjs-default-skin .vjs-menu-button ul li:hover,.vjs-default-skin .vjs-menu-button ul li.vjs-selected:focus,.vjs-default-skin .vjs-menu-button ul li.vjs-selected:hover{outline:0;color:#111;background-color:#fff;background-color:rgba(255,255,255,0.75);-webkit-box-shadow:0 0 1em #fff;-moz-box-shadow:0 0 1em #fff;box-shadow:0 0 1em #fff}.vjs-default-skin .vjs-menu-button ul li.vjs-menu-title{text-align:center;text-transform:uppercase;font-size:1em;line-height:2em;padding:0;margin:0 0 .3em 0;font-weight:bold;cursor:default}.vjs-default-skin .vjs-subtitles-button:before{content:'e00c'}.vjs-default-skin .vjs-captions-button:before{content:'e008'}.vjs-default-skin .vjs-chapters-button:before{content:'e00c'}.vjs-default-skin .vjs-chapters-button.vjs-menu-button .vjs-menu .vjs-menu-content{width:24em;left:-12em}.vjs-default-skin .vjs-captions-button:focus .vjs-control-content:before,.vjs-default-skin .vjs-captions-button:hover .vjs-control-content:before{-webkit-box-shadow:0 0 1em #fff;-moz-box-shadow:0 0 1em #fff;box-shadow:0 0 1em #fff}.video-js{background-color:#fff;position:relative;padding:0;font-size:10px;vertical-align:middle;font-weight:normal;font-style:normal;font-family:Arial,sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.video-js .vjs-tech{position:absolute;top:0;left:0;width:100%;height:100%}.video-js:-moz-full-screen{position:absolute}body.vjs-full-window{padding:0;margin:0;height:100%;overflow-y:auto}.video-js.vjs-fullscreen{position:fixed;overflow:hidden;z-index:1000;left:0;top:0;bottom:0;right:0;width:100% !important;height:100% !important;_position:absolute}.video-js:-webkit-full-screen{width:100% !important;height:100% !important}.video-js.vjs-fullscreen.vjs-user-inactive{cursor:none}.vjs-poster{background-repeat:no-repeat;background-position:50% 50%;background-size:contain;background-color:transparent;cursor:pointer;margin:0;padding:0;position:absolute;top:0;right:0;bottom:0;left:0}.vjs-poster img{display:block;margin:0 auto;max-height:100%;padding:0;width:100%}.video-js.vjs-has-started .vjs-poster{display:none}.video-js.vjs-audio.vjs-has-started .vjs-poster{display:block}.video-js.vjs-controls-disabled .vjs-poster{display:none}.video-js.vjs-using-native-controls .vjs-poster{display:none}.video-js .vjs-text-track-display{position:absolute;top:0;left:0;bottom:3em;right:0;pointer-events:none}.vjs-caption-settings{position:relative;top:1em;background-color:transparent;opacity:.75;color:#FFF;margin:0 auto;padding:.5em;height:15em;font-family:Arial,Helvetica,sans-serif;font-size:12px;width:40em}.vjs-caption-settings .vjs-tracksettings{top:0;bottom:2em;left:0;right:0;position:absolute;overflow:auto}.vjs-caption-settings .vjs-tracksettings-colors,.vjs-caption-settings .vjs-tracksettings-font{float:left}.vjs-caption-settings .vjs-tracksettings-colors:after,.vjs-caption-settings .vjs-tracksettings-font:after,.vjs-caption-settings .vjs-tracksettings-controls:after{clear:both}.vjs-caption-settings .vjs-tracksettings-controls{position:absolute;bottom:1em;right:1em}.vjs-caption-settings .vjs-tracksetting{margin:5px;padding:3px;min-height:40px}.vjs-caption-settings .vjs-tracksetting label{display:block;width:100px;margin-bottom:5px}.vjs-caption-settings .vjs-tracksetting span{display:inline;margin-left:5px}.vjs-caption-settings .vjs-tracksetting>div{margin-bottom:5px;min-height:20px}.vjs-caption-settings .vjs-tracksetting>div:last-child{margin-bottom:0;padding-bottom:0;min-height:0}.vjs-caption-settings label>input{margin-right:10px}.vjs-caption-settings input[type='button']{width:40px;height:40px}.vjs-hidden{display:none !important}.vjs-lock-showing{display:block !important;opacity:1;visibility:visible}.vjs-no-js{padding:2em;color:#ccc;background-color:#333;font-size:1.8em;font-family:Arial,sans-serif;text-align:center;width:30em;height:15em;margin:0 auto}.vjs-no-js a,.vjs-no-js a:visited{color:#f4a460}.vjs-ad-playing.vjs-ad-playing .vjs-progress-control{pointer-events:none}.vjs-ad-playing.vjs-ad-playing .vjs-play-progress{background-color:#ffe400}.vjs-ad-playing.vjs-ad-loading .vjs-loading-spinner{display:block}.vast-skip-button{display:block;position:absolute;top:5px;right:0;width:auto;background-color:#000;color:#AAA;font-size:12px;font-style:italic;line-height:12px;padding:10px;z-index:2}.vast-skip-button.enabled{cursor:pointer;color:#fff}.vast-skip-button.enabled:hover{cursor:pointer;background:#333}.vast-blocker{display:block;position:absolute;margin:0;padding:0;height:100%;width:100%;top:0;left:0;right:0;bottom:0}";
var style = document.createElement("style");
style.innerHTML = a;
var DMVAST;
document.body.appendChild(style);
(function () {
    var b = void 0, f = !0, j = null, l = !1;

    function m() {
        return function () {
        }
    }

    function n(a) {
        return function () {
            return this[a]
        }
    }

    function q(a) {
        return function () {
            return a
        }
    }

    var s;
    document.createElement("video");
    document.createElement("audio");
    document.createElement("track");
    function t(a, c, d) {
        if ("string" === typeof a) {
            0 === a.indexOf("#") && (a = a.slice(1));
            if (t.Aa[a]) {
                return c && t.log.warn('Player "' + a + '" is already initialised. Options will not be applied.'), d && t.Aa[a].I(d), t.Aa[a]
            }
            a = t.m(a)
        }
        if (!a || !a.nodeName) {
            throw new TypeError("The element or ID supplied is not valid. (videojs)")
        }
        return a.player || new t.Player(a, c, d)
    }

    var videojs = window.videojs = t;
    t.ic = "4.12";
    t.vd = "https:" == document.location.protocol ? "https://" : "http://";
    t.VERSION = "4.12.7";
    t.options = {
        techOrder: ["html5", "flash"],
        html5: {},
        flash: {},
        width: 300,
        height: 150,
        defaultVolume: 0,
        playbackRates: [],
        inactivityTimeout: 2000,
        children: {
            mediaLoader: {},
            posterImage: {},
            loadingSpinner: {},
            textTrackDisplay: {},
            bigPlayButton: {},
            controlBar: {},
            errorDisplay: {},
            textTrackSettings: {}
        },
        language: document.getElementsByTagName("html")[0].getAttribute("lang") || navigator.languages && navigator.languages[0] || navigator.If || navigator.language || "en",
        languages: {},
        notSupportedMessage: "No compatible source was found for this video."
    };
    "GENERATED_CDN_VSN" !== t.ic && (videojs.options.flash.swf = t.vd + "vjs.zencdn.net/" + t.ic + "/video-js.swf");
    t.Jd = function (a, c) {
        t.options.languages[a] = t.options.languages[a] !== b ? t.$.ya(t.options.languages[a], c) : c;
        return t.options.languages
    };
    t.Aa = {};
    "function" === typeof define && define.amd ? define("videojs", [], function () {
        return videojs
    }) : "object" === typeof exports && "object" === typeof module && (module.exports = videojs);
    t.Ea = t.CoreObject = m();
    t.Ea.extend = function (a) {
        var c, d;
        a = a || {};
        c = a.init || a.l || this.prototype.init || this.prototype.l || m();
        d = function () {
            c.apply(this, arguments)
        };
        d.prototype = t.i.create(this.prototype);
        d.prototype.constructor = d;
        d.extend = t.Ea.extend;
        d.create = t.Ea.create;
        for (var e in a) {
            a.hasOwnProperty(e) && (d.prototype[e] = a[e])
        }
        return d
    };
    t.Ea.create = function () {
        var a = t.i.create(this.prototype);
        this.apply(a, arguments);
        return a
    };
    t.b = function (a, c, d) {
        if (t.i.isArray(c)) {
            return v(t.b, a, c, d)
        }
        var e = t.getData(a);
        e.G || (e.G = {});
        e.G[c] || (e.G[c] = []);
        d.s || (d.s = t.s++);
        e.G[c].push(d);
        e.ca || (e.disabled = l, e.ca = function (c) {
            if (!e.disabled) {
                c = t.Pb(c);
                var d = e.G[c.type];
                if (d) {
                    for (var d = d.slice(0), k = 0, p = d.length; k < p && !c.Rc(); k++) {
                        d[k].call(a, c)
                    }
                }
            }
        });
        1 == e.G[c].length && (a.addEventListener ? a.addEventListener(c, e.ca, l) : a.attachEvent && a.attachEvent("on" + c, e.ca))
    };
    t.n = function (a, c, d) {
        if (t.Mc(a)) {
            var e = t.getData(a);
            if (e.G) {
                if (t.i.isArray(c)) {
                    return v(t.n, a, c, d)
                }
                if (c) {
                    var g = e.G[c];
                    if (g) {
                        if (d) {
                            if (d.s) {
                                for (e = 0; e < g.length; e++) {
                                    g[e].s === d.s && g.splice(e--, 1)
                                }
                            }
                        } else {
                            e.G[c] = []
                        }
                        t.Ac(a, c)
                    }
                } else {
                    for (g in e.G) {
                        c = g, e.G[c] = [], t.Ac(a, c)
                    }
                }
            }
        }
    };
    t.Ac = function (a, c) {
        var d = t.getData(a);
        0 === d.G[c].length && (delete d.G[c], a.removeEventListener ? a.removeEventListener(c, d.ca, l) : a.detachEvent && a.detachEvent("on" + c, d.ca));
        t.ib(d.G) && (delete d.G, delete d.ca, delete d.disabled);
        t.ib(d) && t.cd(a)
    };
    t.Pb = function (a) {
        function c() {
            return f
        }

        function d() {
            return l
        }

        if (!a || !a.Vb) {
            var e = a || window.event;
            a = {};
            for (var g in e) {
                "layerX" !== g && ("layerY" !== g && "keyLocation" !== g) && ("returnValue" == g && e.preventDefault || (a[g] = e[g]))
            }
            a.target || (a.target = a.srcElement || document);
            a.relatedTarget = a.fromElement === a.target ? a.toElement : a.fromElement;
            a.preventDefault = function () {
                e.preventDefault && e.preventDefault();
                a.returnValue = l;
                a.ie = c;
                a.defaultPrevented = f
            };
            a.ie = d;
            a.defaultPrevented = l;
            a.stopPropagation = function () {
                e.stopPropagation && e.stopPropagation();
                a.cancelBubble = f;
                a.Vb = c
            };
            a.Vb = d;
            a.stopImmediatePropagation = function () {
                e.stopImmediatePropagation && e.stopImmediatePropagation();
                a.Rc = c;
                a.stopPropagation()
            };
            a.Rc = d;
            if (a.clientX != j) {
                g = document.documentElement;
                var h = document.body;
                a.pageX = a.clientX + (g && g.scrollLeft || h && h.scrollLeft || 0) - (g && g.clientLeft || h && h.clientLeft || 0);
                a.pageY = a.clientY + (g && g.scrollTop || h && h.scrollTop || 0) - (g && g.clientTop || h && h.clientTop || 0)
            }
            a.which = a.charCode || a.keyCode;
            a.button != j && (a.button = a.button & 1 ? 0 : a.button & 4 ? 1 : a.button & 2 ? 2 : 0)
        }
        return a
    };
    t.o = function (a, c) {
        var d = t.Mc(a) ? t.getData(a) : {}, e = a.parentNode || a.ownerDocument;
        "string" === typeof c && (c = {type: c, target: a});
        c = t.Pb(c);
        d.ca && d.ca.call(a, c);
        if (e && !c.Vb() && c.bubbles !== l) {
            t.o(e, c)
        } else {
            if (!e && !c.defaultPrevented && (d = t.getData(c.target), c.target[c.type])) {
                d.disabled = f;
                if ("function" === typeof c.target[c.type]) {
                    c.target[c.type]()
                }
                d.disabled = l
            }
        }
        return !c.defaultPrevented
    };
    t.N = function (a, c, d) {
        function e() {
            t.n(a, c, e);
            d.apply(this, arguments)
        }

        if (t.i.isArray(c)) {
            return v(t.N, a, c, d)
        }
        e.s = d.s = d.s || t.s++;
        t.b(a, c, e)
    };
    function v(a, c, d, e) {
        t.wc.forEach(d, function (d) {
            a(c, d, e)
        })
    }

    var w = Object.prototype.hasOwnProperty;
    t.e = function (a, c) {
        var d;
        c = c || {};
        d = document.createElement(a || "div");
        t.i.da(c, function (a, c) {
            -1 !== a.indexOf("aria-") || "role" == a ? d.setAttribute(a, c) : d[a] = c
        });
        return d
    };
    t.ua = function (a) {
        return a.charAt(0).toUpperCase() + a.slice(1)
    };
    t.i = {};
    t.i.create = Object.create || function (a) {
            function c() {
            }

            c.prototype = a;
            return new c
        };
    t.i.da = function (a, c, d) {
        for (var e in a) {
            w.call(a, e) && c.call(d || this, e, a[e])
        }
    };
    t.i.D = function (a, c) {
        if (!c) {
            return a
        }
        for (var d in c) {
            w.call(c, d) && (a[d] = c[d])
        }
        return a
    };
    t.i.Rd = function (a, c) {
        var d, e, g;
        a = t.i.copy(a);
        for (d in c) {
            w.call(c, d) && (e = a[d], g = c[d], a[d] = t.i.jb(e) && t.i.jb(g) ? t.i.Rd(e, g) : c[d])
        }
        return a
    };
    t.i.copy = function (a) {
        return t.i.D({}, a)
    };
    t.i.jb = function (a) {
        return !!a && "object" === typeof a && "[object Object]" === a.toString() && a.constructor === Object
    };
    t.i.isArray = Array.isArray || function (a) {
            return "[object Array]" === Object.prototype.toString.call(a)
        };
    t.ke = function (a) {
        return a !== a
    };
    t.bind = function (a, c, d) {
        function e() {
            return c.apply(a, arguments)
        }

        c.s || (c.s = t.s++);
        e.s = d ? d + "_" + c.s : c.s;
        return e
    };
    t.ta = {};
    t.s = 1;
    t.expando = "vdata" + (new Date).getTime();
    t.getData = function (a) {
        var c = a[t.expando];
        c || (c = a[t.expando] = t.s++);
        t.ta[c] || (t.ta[c] = {});
        return t.ta[c]
    };
    t.Mc = function (a) {
        a = a[t.expando];
        return !(!a || t.ib(t.ta[a]))
    };
    t.cd = function (a) {
        var c = a[t.expando];
        if (c) {
            delete t.ta[c];
            try {
                delete a[t.expando]
            } catch (d) {
                a.removeAttribute ? a.removeAttribute(t.expando) : a[t.expando] = j
            }
        }
    };
    t.ib = function (a) {
        for (var c in a) {
            if (a[c] !== j) {
                return l
            }
        }
        return f
    };
    t.Oa = function (a, c) {
        return -1 !== (" " + a.className + " ").indexOf(" " + c + " ")
    };
    t.p = function (a, c) {
        t.Oa(a, c) || (a.className = "" === a.className ? c : a.className + " " + c)
    };
    t.r = function (a, c) {
        var d, e;
        if (t.Oa(a, c)) {
            d = a.className.split(" ");
            for (e = d.length - 1; 0 <= e; e--) {
                d[e] === c && d.splice(e, 1)
            }
            a.className = d.join(" ")
        }
    };
    t.A = t.e("video");
    var x = document.createElement("track");
    x.Wb = "captions";
    x.hd = "en";
    x.label = "English";
    t.A.appendChild(x);
    t.P = navigator.userAgent;
    t.Cd = /iPhone/i.test(t.P);
    t.Bd = /iPad/i.test(t.P);
    t.Dd = /iPod/i.test(t.P);
    t.Ad = t.Cd || t.Bd || t.Dd;
    var aa = t, y;
    var z = t.P.match(/OS (\d+)_/i);
    y = z && z[1] ? z[1] : b;
    aa.kf = y;
    t.zd = /Android/i.test(t.P);
    var ba = t, B;
    var C = t.P.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i), D, E;
    C ? (D = C[1] && parseFloat(C[1]), E = C[2] && parseFloat(C[2]), B = D && E ? parseFloat(C[1] + "." + C[2]) : D ? D : j) : B = j;
    ba.hc = B;
    t.Ed = t.zd && /webkit/i.test(t.P) && 2.3 > t.hc;
    t.jc = /Firefox/i.test(t.P);
    t.lf = /Chrome/i.test(t.P);
    t.oa = /MSIE\s8\.0/.test(t.P);
    t.Eb = !!("ontouchstart" in window || window.xd && document instanceof window.xd);
    t.wd = "backgroundSize" in t.A.style;
    t.ed = function (a, c) {
        t.i.da(c, function (c, e) {
            e === j || "undefined" === typeof e || e === l ? a.removeAttribute(c) : a.setAttribute(c, e === f ? "" : e)
        })
    };
    t.Na = function (a) {
        var c, d, e, g;
        c = {};
        if (a && a.attributes && 0 < a.attributes.length) {
            d = a.attributes;
            for (var h = d.length - 1; 0 <= h; h--) {
                e = d[h].name;
                g = d[h].value;
                if ("boolean" === typeof a[e] || -1 !== ",autoplay,controls,loop,muted,default,".indexOf("," + e + ",")) {
                    g = g !== j ? f : l
                }
                c[e] = g
            }
        }
        return c
    };
    t.vf = function (a, c) {
        var d = "";
        document.defaultView && document.defaultView.getComputedStyle ? d = document.defaultView.getComputedStyle(a, "").getPropertyValue(c) : a.currentStyle && (d = a["client" + c.substr(0, 1).toUpperCase() + c.substr(1)] + "px");
        return d
    };
    t.Ub = function (a, c) {
        c.firstChild ? c.insertBefore(a, c.firstChild) : c.appendChild(a)
    };
    t.cb = {};
    t.m = function (a) {
        0 === a.indexOf("#") && (a = a.slice(1));
        return document.getElementById(a)
    };
    t.Ma = function (a, c) {
        c = c || a;
        var d = Math.floor(a % 60), e = Math.floor(a / 60 % 60), g = Math.floor(a / 3600), h = Math.floor(c / 60 % 60), k = Math.floor(c / 3600);
        if (isNaN(a) || Infinity === a) {
            g = e = d = "-"
        }
        g = 0 < g || 0 < k ? g + ":" : "";
        return g + (((g || 10 <= h) && 10 > e ? "0" + e : e) + ":") + (10 > d ? "0" + d : d)
    };
    t.Ld = function () {
        document.body.focus();
        document.onselectstart = q(l)
    };
    t.af = function () {
        document.onselectstart = q(f)
    };
    t.trim = function (a) {
        return (a + "").replace(/^\s+|\s+$/g, "")
    };
    t.round = function (a, c) {
        c || (c = 0);
        return Math.round(a * Math.pow(10, c)) / Math.pow(10, c)
    };
    t.Lb = function (a, c) {
        return {
            length: 1, start: function () {
                return a
            }, end: function () {
                return c
            }
        }
    };
    t.Me = function (a) {
        try {
            var c = window.localStorage || l;
            c && (c.volume = a)
        } catch (d) {
            22 == d.code || 1014 == d.code ? t.log("LocalStorage Full (VideoJS)", d) : 18 == d.code ? t.log("LocalStorage not allowed (VideoJS)", d) : t.log("LocalStorage Error (VideoJS)", d)
        }
    };
    t.$d = function (a) {
        a.match(/^https?:\/\//) || (a = t.e("div", {innerHTML: '<a href="' + a + '">x</a>'}).firstChild.href);
        return a
    };
    t.Ee = function (a) {
        var c, d, e, g;
        g = "protocol hostname port pathname search hash host".split(" ");
        d = t.e("a", {href: a});
        if (e = "" === d.host && "file:" !== d.protocol) {
            c = t.e("div"), c.innerHTML = '<a href="' + a + '"></a>', d = c.firstChild, c.setAttribute("style", "display:none; position:absolute;"), document.body.appendChild(c)
        }
        a = {};
        for (var h = 0; h < g.length; h++) {
            a[g[h]] = d[g[h]]
        }
        "http:" === a.protocol && (a.host = a.host.replace(/:80$/, ""));
        "https:" === a.protocol && (a.host = a.host.replace(/:443$/, ""));
        e && document.body.removeChild(c);
        return a
    };
    function F(a, c) {
        var d, e;
        d = Array.prototype.slice.call(c);
        e = m();
        e = window.console || {log: e, warn: e, error: e};
        a ? d.unshift(a.toUpperCase() + ":") : a = "log";
        t.log.history.push(d);
        d.unshift("VIDEOJS:");
        if (e[a].apply) {
            e[a].apply(e, d)
        } else {
            e[a](d.join(" "))
        }
    }

    t.log = function () {
        F(j, arguments)
    };
    t.log.history = [];
    t.log.error = function () {
        F("error", arguments)
    };
    t.log.warn = function () {
        F("warn", arguments)
    };
    t.Yd = function (a) {
        var c, d;
        a.getBoundingClientRect && a.parentNode && (c = a.getBoundingClientRect());
        if (!c) {
            return {left: 0, top: 0}
        }
        a = document.documentElement;
        d = document.body;
        return {
            left: t.round(c.left + (window.pageXOffset || d.scrollLeft) - (a.clientLeft || d.clientLeft || 0)),
            top: t.round(c.top + (window.pageYOffset || d.scrollTop) - (a.clientTop || d.clientTop || 0))
        }
    };
    t.wc = {};
    t.wc.forEach = function (a, c, d) {
        if (t.i.isArray(a) && c instanceof Function) {
            for (var e = 0, g = a.length; e < g; ++e) {
                c.call(d || t, a[e], e, a)
            }
        }
        return a
    };
    t.ff = function (a, c) {
        var d, e, g, h, k, p, r;
        "string" === typeof a && (a = {uri: a});
        videojs.$.ya({method: "GET", timeout: 45000}, a);
        c = c || m();
        p = function () {
            window.clearTimeout(k);
            c(j, e, e.response || e.responseText)
        };
        r = function (a) {
            window.clearTimeout(k);
            if (!a || "string" === typeof a) {
                a = Error(a)
            }
            c(a, e)
        };
        d = window.XMLHttpRequest;
        "undefined" === typeof d && (d = function () {
            try {
                return new window.ActiveXObject("Msxml2.XMLHTTP.6.0")
            } catch (a) {
            }
            try {
                return new window.ActiveXObject("Msxml2.XMLHTTP.3.0")
            } catch (c) {
            }
            try {
                return new window.ActiveXObject("Msxml2.XMLHTTP")
            } catch (d) {
            }
            throw Error("This browser does not support XMLHttpRequest.")
        });
        e = new d;
        e.uri = a.uri;
        d = t.Ee(a.uri);
        g = window.location;
        d.protocol + d.host !== g.protocol + g.host && window.XDomainRequest && !("withCredentials" in e) ? (e = new window.XDomainRequest, e.onload = p, e.onerror = r, e.onprogress = m(), e.ontimeout = m()) : (h = "file:" == d.protocol || "file:" == g.protocol, e.onreadystatechange = function () {
            if (4 === e.readyState) {
                if (e.Ye) {
                    return r("timeout")
                }
                200 === e.status || h && 0 === e.status ? p() : r()
            }
        }, a.timeout && (k = window.setTimeout(function () {
            4 !== e.readyState && (e.Ye = f, e.abort())
        }, a.timeout)));
        try {
            e.open(a.method || "GET", a.uri, f)
        } catch (u) {
            r(u);
            return
        }
        a.withCredentials && (e.withCredentials = f);
        a.responseType && (e.responseType = a.responseType);
        try {
            e.send()
        } catch (A) {
            r(A)
        }
    };
    t.$ = {};
    t.$.ya = function (a, c) {
        var d, e, g;
        a = t.i.copy(a);
        for (d in c) {
            c.hasOwnProperty(d) && (e = a[d], g = c[d], a[d] = t.i.jb(e) && t.i.jb(g) ? t.$.ya(e, g) : c[d])
        }
        return a
    };
    t.z = m();
    s = t.z.prototype;
    s.bb = {};
    s.b = function (a, c) {
        var d = this.addEventListener;
        this.addEventListener = Function.prototype;
        t.b(this, a, c);
        this.addEventListener = d
    };
    s.addEventListener = t.z.prototype.b;
    s.n = function (a, c) {
        t.n(this, a, c)
    };
    s.removeEventListener = t.z.prototype.n;
    s.N = function (a, c) {
        t.N(this, a, c)
    };
    s.o = function (a) {
        var c = a.type || a;
        "string" === typeof a && (a = {type: c});
        a = t.Pb(a);
        if (this.bb[c] && this["on" + c]) {
            this["on" + c](a)
        }
        t.o(this, a)
    };
    s.dispatchEvent = t.z.prototype.o;
    t.a = t.Ea.extend({
        l: function (a, c, d) {
            this.d = a;
            this.q = t.i.copy(this.q);
            c = this.options(c);
            this.Pa = c.id || c.el && c.el.id;
            this.Pa || (this.Pa = (a.id && a.id() || "no_player") + "_component_" + t.s++);
            this.te = c.name || j;
            this.c = c.el || this.e();
            this.R = [];
            this.fb = {};
            this.gb = {};
            this.Oc();
            this.I(d);
            if (c.dd !== l) {
                var e, g;
                this.k().reportUserActivity && (e = t.bind(this.k(), this.k().reportUserActivity), this.b("touchstart", function () {
                    e();
                    this.clearInterval(g);
                    g = this.setInterval(e, 250)
                }), a = function () {
                    e();
                    this.clearInterval(g)
                }, this.b("touchmove", e), this.b("touchend", a), this.b("touchcancel", a))
            }
        }
    });
    s = t.a.prototype;
    s.dispose = function () {
        this.o({type: "dispose", bubbles: l});
        if (this.R) {
            for (var a = this.R.length - 1; 0 <= a; a--) {
                this.R[a].dispose && this.R[a].dispose()
            }
        }
        this.gb = this.fb = this.R = j;
        this.n();
        this.c.parentNode && this.c.parentNode.removeChild(this.c);
        t.cd(this.c);
        this.c = j
    };
    s.d = f;
    s.k = n("d");
    s.options = function (a) {
        return a === b ? this.q : this.q = t.$.ya(this.q, a)
    };
    s.e = function (a, c) {
        return t.e(a, c)
    };
    s.v = function (a) {
        var c = this.d.language(), d = this.d.languages();
        return d && d[c] && d[c][a] ? d[c][a] : a
    };
    s.m = n("c");
    s.va = function () {
        return this.B || this.c
    };
    s.id = n("Pa");
    s.name = n("te");
    s.children = n("R");
    s.ae = function (a) {
        return this.fb[a]
    };
    s.ea = function (a) {
        return this.gb[a]
    };
    s.ba = function (a, c) {
        var d, e;
        "string" === typeof a ? (e = a, c = c || {}, d = c.componentClass || t.ua(e), c.name = e, d = new window.videojs[d](this.d || this, c)) : d = a;
        this.R.push(d);
        "function" === typeof d.id && (this.fb[d.id()] = d);
        (e = e || d.name && d.name()) && (this.gb[e] = d);
        "function" === typeof d.el && d.el() && this.va().appendChild(d.el());
        return d
    };
    s.removeChild = function (a) {
        "string" === typeof a && (a = this.ea(a));
        if (a && this.R) {
            for (var c = l, d = this.R.length - 1; 0 <= d; d--) {
                if (this.R[d] === a) {
                    c = f;
                    this.R.splice(d, 1);
                    break
                }
            }
            c && (this.fb[a.id()] = j, this.gb[a.name()] = j, (c = a.m()) && c.parentNode === this.va() && this.va().removeChild(a.m()))
        }
    };
    s.Oc = function () {
        var a, c, d, e, g, h;
        a = this;
        c = a.options();
        if (d = c.children) {
            if (h = function (d, e) {
                    c[d] !== b && (e = c[d]);
                    e !== l && (a[d] = a.ba(d, e))
                }, t.i.isArray(d)) {
                for (var k = 0; k < d.length; k++) {
                    e = d[k], "string" == typeof e ? (g = e, e = {}) : g = e.name, h(g, e)
                }
            } else {
                t.i.da(d, h)
            }
        }
    };
    s.V = q("");
    s.b = function (a, c, d) {
        var e, g, h;
        "string" === typeof a || t.i.isArray(a) ? t.b(this.c, a, t.bind(this, c)) : (e = t.bind(this, d), h = this, g = function () {
            h.n(a, c, e)
        }, g.s = e.s, this.b("dispose", g), d = function () {
            h.n("dispose", g)
        }, d.s = e.s, a.nodeName ? (t.b(a, c, e), t.b(a, "dispose", d)) : "function" === typeof a.b && (a.b(c, e), a.b("dispose", d)));
        return this
    };
    s.n = function (a, c, d) {
        !a || "string" === typeof a || t.i.isArray(a) ? t.n(this.c, a, c) : (d = t.bind(this, d), this.n("dispose", d), a.nodeName ? (t.n(a, c, d), t.n(a, "dispose", d)) : (a.n(c, d), a.n("dispose", d)));
        return this
    };
    s.N = function (a, c, d) {
        var e, g, h;
        "string" === typeof a || t.i.isArray(a) ? t.N(this.c, a, t.bind(this, c)) : (e = t.bind(this, d), g = this, h = function () {
            g.n(a, c, h);
            e.apply(this, arguments)
        }, h.s = e.s, this.b(a, c, h));
        return this
    };
    s.o = function (a) {
        t.o(this.c, a);
        return this
    };
    s.I = function (a) {
        a && (this.wa ? a.call(this) : (this.nb === b && (this.nb = []), this.nb.push(a)));
        return this
    };
    s.Wa = function () {
        this.wa = f;
        var a = this.nb;
        if (a && 0 < a.length) {
            for (var c = 0, d = a.length; c < d; c++) {
                a[c].call(this)
            }
            this.nb = [];
            this.o("ready")
        }
    };
    s.Oa = function (a) {
        return t.Oa(this.c, a)
    };
    s.p = function (a) {
        t.p(this.c, a);
        return this
    };
    s.r = function (a) {
        t.r(this.c, a);
        return this
    };
    s.show = function () {
        this.r("vjs-hidden");
        return this
    };
    s.Y = function () {
        this.p("vjs-hidden");
        return this
    };
    function G(a) {
        a.r("vjs-lock-showing")
    }

    s.width = function (a, c) {
        return ca(this, "width", a, c)
    };
    s.height = function (a, c) {
        return ca(this, "height", a, c)
    };
    s.Td = function (a, c) {
        return this.width(a, f).height(c)
    };
    function ca(a, c, d, e) {
        if (d !== b) {
            if (d === j || t.ke(d)) {
                d = 0
            }
            a.c.style[c] = -1 !== ("" + d).indexOf("%") || -1 !== ("" + d).indexOf("px") ? d : "auto" === d ? "" : d + "px";
            e || a.o("resize");
            return a
        }
        if (!a.c) {
            return 0
        }
        d = a.c.style[c];
        e = d.indexOf("px");
        return -1 !== e ? parseInt(d.slice(0, e), 10) : parseInt(a.c["offset" + t.ua(c)], 10)
    }

    function da(a) {
        var c, d, e, g, h, k, p, r;
        c = 0;
        d = j;
        a.b("touchstart", function (a) {
            1 === a.touches.length && (d = t.i.copy(a.touches[0]), c = (new Date).getTime(), g = f)
        });
        a.b("touchmove", function (a) {
            1 < a.touches.length ? g = l : d && (k = a.touches[0].pageX - d.pageX, p = a.touches[0].pageY - d.pageY, r = Math.sqrt(k * k + p * p), 10 < r && (g = l))
        });
        h = function () {
            g = l
        };
        a.b("touchleave", h);
        a.b("touchcancel", h);
        a.b("touchend", function (a) {
            d = j;
            g === f && (e = (new Date).getTime() - c, 200 > e && (a.preventDefault(), this.o("tap")))
        })
    }

    s.setTimeout = function (a, c) {
        function d() {
            this.clearTimeout(e)
        }

        a = t.bind(this, a);
        var e = setTimeout(a, c);
        d.s = "vjs-timeout-" + e;
        this.b("dispose", d);
        return e
    };
    s.clearTimeout = function (a) {
        function c() {
        }

        clearTimeout(a);
        c.s = "vjs-timeout-" + a;
        this.n("dispose", c);
        return a
    };
    s.setInterval = function (a, c) {
        function d() {
            this.clearInterval(e)
        }

        a = t.bind(this, a);
        var e = setInterval(a, c);
        d.s = "vjs-interval-" + e;
        this.b("dispose", d);
        return e
    };
    s.clearInterval = function (a) {
        function c() {
        }

        clearInterval(a);
        c.s = "vjs-interval-" + a;
        this.n("dispose", c);
        return a
    };
    t.w = t.a.extend({
        l: function (a, c) {
            t.a.call(this, a, c);
            da(this);
            this.b("tap", this.u);
            this.b("click", this.u);
            this.b("focus", this.lb);
            this.b("blur", this.kb)
        }
    });
    s = t.w.prototype;
    s.e = function (a, c) {
        var d;
        c = t.i.D({className: this.V(), role: "button", "aria-live": "polite", tabIndex: 0}, c);
        d = t.a.prototype.e.call(this, a, c);
        c.innerHTML || (this.B = t.e("div", {className: "vjs-control-content"}), this.Jb = t.e("span", {
            className: "vjs-control-text",
            innerHTML: this.v(this.sa) || "Need Text"
        }), this.B.appendChild(this.Jb), d.appendChild(this.B));
        return d
    };
    s.V = function () {
        return "vjs-control " + t.a.prototype.V.call(this)
    };
    s.u = m();
    s.lb = function () {
        t.b(document, "keydown", t.bind(this, this.ka))
    };
    s.ka = function (a) {
        if (32 == a.which || 13 == a.which) {
            a.preventDefault(), this.u()
        }
    };
    s.kb = function () {
        t.n(document, "keydown", t.bind(this, this.ka))
    };
    t.U = t.a.extend({
        l: function (a, c) {
            t.a.call(this, a, c);
            this.Kd = this.ea(this.q.barName);
            this.handle = this.ea(this.q.handleName);
            this.b("mousedown", this.mb);
            this.b("touchstart", this.mb);
            this.b("focus", this.lb);
            this.b("blur", this.kb);
            this.b("click", this.u);
            this.b(a, "controlsvisible", this.update);
            this.b(a, this.Yc, this.update)
        }
    });
    s = t.U.prototype;
    s.e = function (a, c) {
        c = c || {};
        c.className += " vjs-slider";
        c = t.i.D({role: "slider", "aria-valuenow": 0, "aria-valuemin": 0, "aria-valuemax": 100, tabIndex: 0}, c);
        return t.a.prototype.e.call(this, a, c)
    };
    s.mb = function (a) {
        a.preventDefault();
        t.Ld();
        this.p("vjs-sliding");
        this.b(document, "mousemove", this.la);
        this.b(document, "mouseup", this.za);
        this.b(document, "touchmove", this.la);
        this.b(document, "touchend", this.za);
        this.la(a)
    };
    s.la = m();
    s.za = function () {
        t.af();
        this.r("vjs-sliding");
        this.n(document, "mousemove", this.la);
        this.n(document, "mouseup", this.za);
        this.n(document, "touchmove", this.la);
        this.n(document, "touchend", this.za);
        this.update()
    };
    s.update = function () {
        if (this.c) {
            var a, c = this.Sb(), d = this.handle, e = this.Kd;
            if ("number" !== typeof c || c !== c || 0 > c || Infinity === c) {
                c = 0
            }
            a = c;
            if (d) {
                a = this.c.offsetWidth;
                var g = d.m().offsetWidth;
                a = g ? g / a : 0;
                c *= 1 - a;
                a = c + a / 2;
                d.m().style.left = t.round(100 * c, 2) + "%"
            }
            e && (e.m().style.width = t.round(100 * a, 2) + "%")
        }
    };
    function ea(a, c) {
        var d, e, g, h;
        d = a.c;
        e = t.Yd(d);
        h = g = d.offsetWidth;
        d = a.handle;
        if (a.options().vertical) {
            return h = e.top, e = c.changedTouches ? c.changedTouches[0].pageY : c.pageY, d && (d = d.m().offsetHeight, h += d / 2, g -= d), Math.max(0, Math.min(1, (h - e + g) / g))
        }
        g = e.left;
        e = c.changedTouches ? c.changedTouches[0].pageX : c.pageX;
        d && (d = d.m().offsetWidth, g += d / 2, h -= d);
        return Math.max(0, Math.min(1, (e - g) / h))
    }

    s.lb = function () {
        this.b(document, "keydown", this.ka)
    };
    s.ka = function (a) {
        if (37 == a.which || 40 == a.which) {
            a.preventDefault(), this.jd()
        } else {
            if (38 == a.which || 39 == a.which) {
                a.preventDefault(), this.kd()
            }
        }
    };
    s.kb = function () {
        this.n(document, "keydown", this.ka)
    };
    s.u = function (a) {
        a.stopImmediatePropagation();
        a.preventDefault()
    };
    t.ha = t.a.extend();
    t.ha.prototype.defaultValue = 0;
    t.ha.prototype.e = function (a, c) {
        c = c || {};
        c.className += " vjs-slider-handle";
        c = t.i.D({innerHTML: '<span class="vjs-control-text">' + this.defaultValue + "</span>"}, c);
        return t.a.prototype.e.call(this, "div", c)
    };
    t.pa = t.a.extend();
    function fa(a, c) {
        a.ba(c);
        c.b("click", t.bind(a, function () {
            G(this)
        }))
    }

    t.pa.prototype.e = function () {
        var a = this.options().Cc || "ul";
        this.B = t.e(a, {className: "vjs-menu-content"});
        a = t.a.prototype.e.call(this, "div", {append: this.B, className: "vjs-menu"});
        a.appendChild(this.B);
        t.b(a, "click", function (a) {
            a.preventDefault();
            a.stopImmediatePropagation()
        });
        return a
    };
    t.M = t.w.extend({
        l: function (a, c) {
            t.w.call(this, a, c);
            this.selected(c.selected)
        }
    });
    t.M.prototype.e = function (a, c) {
        return t.w.prototype.e.call(this, "li", t.i.D({className: "vjs-menu-item", innerHTML: this.v(this.q.label)}, c))
    };
    t.M.prototype.u = function () {
        this.selected(f)
    };
    t.M.prototype.selected = function (a) {
        a ? (this.p("vjs-selected"), this.c.setAttribute("aria-selected", f)) : (this.r("vjs-selected"), this.c.setAttribute("aria-selected", l))
    };
    t.O = t.w.extend({
        l: function (a, c) {
            t.w.call(this, a, c);
            this.update();
            this.b("keydown", this.ka);
            this.c.setAttribute("aria-haspopup", f);
            this.c.setAttribute("role", "button")
        }
    });
    s = t.O.prototype;
    s.update = function () {
        var a = this.Ja();
        this.xa && this.removeChild(this.xa);
        this.xa = a;
        this.ba(a);
        this.H && 0 === this.H.length ? this.Y() : this.H && 1 < this.H.length && this.show()
    };
    s.Ha = l;
    s.Ja = function () {
        var a = new t.pa(this.d);
        this.options().title && a.va().appendChild(t.e("li", {
            className: "vjs-menu-title",
            innerHTML: t.ua(this.options().title),
            We: -1
        }));
        if (this.H = this.createItems()) {
            for (var c = 0; c < this.H.length; c++) {
                fa(a, this.H[c])
            }
        }
        return a
    };
    s.Ia = m();
    s.V = function () {
        return this.className + " vjs-menu-button " + t.w.prototype.V.call(this)
    };
    s.lb = m();
    s.kb = m();
    s.u = function () {
        this.N("mouseout", t.bind(this, function () {
            G(this.xa);
            this.c.blur()
        }));
        this.Ha ? H(this) : ga(this)
    };
    s.ka = function (a) {
        32 == a.which || 13 == a.which ? (this.Ha ? H(this) : ga(this), a.preventDefault()) : 27 == a.which && (this.Ha && H(this), a.preventDefault())
    };
    function ga(a) {
        a.Ha = f;
        a.xa.p("vjs-lock-showing");
        a.c.setAttribute("aria-pressed", f);
        a.H && 0 < a.H.length && a.H[0].m().focus()
    }

    function H(a) {
        a.Ha = l;
        G(a.xa);
        a.c.setAttribute("aria-pressed", l)
    }

    t.J = function (a) {
        "number" === typeof a ? this.code = a : "string" === typeof a ? this.message = a : "object" === typeof a && t.i.D(this, a);
        this.message || (this.message = t.J.Sd[this.code] || "")
    };
    t.J.prototype.code = 0;
    t.J.prototype.message = "";
    t.J.prototype.status = j;
    t.J.hb = "MEDIA_ERR_CUSTOM MEDIA_ERR_ABORTED MEDIA_ERR_NETWORK MEDIA_ERR_DECODE MEDIA_ERR_SRC_NOT_SUPPORTED MEDIA_ERR_ENCRYPTED".split(" ");
    t.J.Sd = {
        1: "You aborted the video playback",
        2: "A network error caused the video download to fail part-way.",
        3: "The video playback was aborted due to a corruption problem or because the video used features your browser did not support.",
        4: "The video could not be loaded, either because the server or network failed or because the format is not supported.",
        5: "The video is encrypted and we do not have the keys to decrypt it."
    };
    for (var I = 0; I < t.J.hb.length; I++) {
        t.J[t.J.hb[I]] = I, t.J.prototype[t.J.hb[I]] = I
    }
    var J, ha, K, L;
    J = ["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "), "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "), "webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "), "mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "), "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")];
    ha = J[0];
    for (L = 0; L < J.length; L++) {
        if (J[L][1] in document) {
            K = J[L];
            break
        }
    }
    if (K) {
        t.cb.Rb = {};
        for (L = 0; L < K.length; L++) {
            t.cb.Rb[ha[L]] = K[L]
        }
    }
    t.Player = t.a.extend({
        l: function (a, c, d) {
            this.L = a;
            a.id = a.id || "vjs_video_" + t.s++;
            this.Xe = a && t.Na(a);
            c = t.i.D(ia(a), c);
            this.Tc = c.language || t.options.language;
            this.ne = c.languages || t.options.languages;
            this.K = {};
            this.Zc = c.poster || "";
            this.Kb = !!c.controls;
            a.controls = l;
            c.dd = l;
            ja(this, "audio" === this.L.nodeName.toLowerCase());
            t.a.call(this, this, c, d);
            this.controls() ? this.p("vjs-controls-enabled") : this.p("vjs-controls-disabled");
            ja(this) && this.p("vjs-audio");
            t.Aa[this.Pa] = this;
            c.plugins && t.i.da(c.plugins, function (a, c) {
                this[a](c)
            }, this);
            var e, g, h, k, p;
            e = t.bind(this, this.reportUserActivity);
            this.b("mousedown", function () {
                e();
                this.clearInterval(g);
                g = this.setInterval(e, 250)
            });
            this.b("mousemove", function (a) {
                if (a.screenX != k || a.screenY != p) {
                    k = a.screenX, p = a.screenY, e()
                }
            });
            this.b("mouseup", function () {
                e();
                this.clearInterval(g)
            });
            this.b("keydown", e);
            this.b("keyup", e);
            this.setInterval(function () {
                if (this.Da) {
                    this.Da = l;
                    this.userActive(f);
                    this.clearTimeout(h);
                    var a = this.options().inactivityTimeout;
                    0 < a && (h = this.setTimeout(function () {
                        this.Da || this.userActive(l)
                    }, a))
                }
            }, 250)
        }
    });
    s = t.Player.prototype;
    s.language = function (a) {
        if (a === b) {
            return this.Tc
        }
        this.Tc = a;
        return this
    };
    s.languages = n("ne");
    s.q = t.options;
    s.dispose = function () {
        this.o("dispose");
        this.n("dispose");
        t.Aa[this.Pa] = j;
        this.L && this.L.player && (this.L.player = j);
        this.c && this.c.player && (this.c.player = j);
        this.h && this.h.dispose();
        t.a.prototype.dispose.call(this)
    };
    function ia(a) {
        var c, d, e = {sources: [], tracks: []};
        c = t.Na(a);
        d = c["data-setup"];
        d !== j && t.i.D(c, t.JSON.parse(d || "{}"));
        t.i.D(e, c);
        if (a.hasChildNodes()) {
            var g, h;
            a = a.childNodes;
            g = 0;
            for (h = a.length; g < h; g++) {
                c = a[g], d = c.nodeName.toLowerCase(), "source" === d ? e.sources.push(t.Na(c)) : "track" === d && e.tracks.push(t.Na(c))
            }
        }
        return e
    }

    s.e = function () {
        var a = this.c = t.a.prototype.e.call(this, "div"), c = this.L, d;
        c.removeAttribute("width");
        c.removeAttribute("height");
        d = t.Na(c);
        t.i.da(d, function (c) {
            "class" == c ? a.className = d[c] : a.setAttribute(c, d[c])
        });
        c.id += "_html5_api";
        c.className = "vjs-tech";
        c.player = a.player = this;
        this.p("vjs-paused");
        this.width(this.q.width, f);
        this.height(this.q.height, f);
        c.ge = c.networkState;
        c.parentNode && c.parentNode.insertBefore(a, c);
        t.Ub(c, a);
        this.c = a;
        this.b("loadstart", this.xe);
        this.b("waiting", this.De);
        this.b(["canplay", "canplaythrough", "playing", "ended"], this.Ce);
        this.b("seeking", this.Ae);
        this.b("seeked", this.ze);
        this.b("ended", this.ue);
        this.b("play", this.$b);
        this.b("firstplay", this.ve);
        this.b("pause", this.Zb);
        this.b("progress", this.ye);
        this.b("durationchange", this.Wc);
        this.b("fullscreenchange", this.we);
        return a
    };
    function ka(a, c, d) {
        a.h && (a.wa = l, a.h.dispose(), a.h = l);
        "Html5" !== c && a.L && (t.f.Mb(a.L), a.L = j);
        a.Ua = c;
        a.wa = l;
        var e = t.i.D({source: d, parentEl: a.c}, a.q[c.toLowerCase()]);
        d && (a.Gc = d.type, d.src == a.K.src && 0 < a.K.currentTime && (e.startTime = a.K.currentTime), a.K.src = d.src);
        a.h = new window.videojs[c](a, e);
        a.h.I(function () {
            this.d.Wa()
        })
    }

    s.xe = function () {
        this.r("vjs-ended");
        this.error(j);
        this.paused() ? la(this, l) : this.o("firstplay")
    };
    s.Nc = l;
    function la(a, c) {
        c !== b && a.Nc !== c && ((a.Nc = c) ? (a.p("vjs-has-started"), a.o("firstplay")) : a.r("vjs-has-started"))
    }

    s.$b = function () {
        this.r("vjs-ended");
        this.r("vjs-paused");
        this.p("vjs-playing");
        la(this, f)
    };
    s.De = function () {
        this.p("vjs-waiting")
    };
    s.Ce = function () {
        this.r("vjs-waiting")
    };
    s.Ae = function () {
        this.p("vjs-seeking")
    };
    s.ze = function () {
        this.r("vjs-seeking")
    };
    s.ve = function () {
        this.q.starttime && this.currentTime(this.q.starttime);
        this.p("vjs-has-started")
    };
    s.Zb = function () {
        this.r("vjs-playing");
        this.p("vjs-paused")
    };
    s.ye = function () {
        1 == this.bufferedPercent() && this.o("loadedalldata")
    };
    s.ue = function () {
        this.p("vjs-ended");
        this.q.loop ? (this.currentTime(0), this.play()) : this.paused() || this.pause()
    };
    s.Wc = function () {
        var a = M(this, "duration");
        a && (0 > a && (a = Infinity), this.duration(a), Infinity === a ? this.p("vjs-live") : this.r("vjs-live"))
    };
    s.we = function () {
        this.isFullscreen() ? this.p("vjs-fullscreen") : this.r("vjs-fullscreen")
    };
    function N(a, c, d) {
        if (a.h && !a.h.wa) {
            a.h.I(function () {
                this[c](d)
            })
        } else {
            try {
                a.h[c](d)
            } catch (e) {
                throw t.log(e), e
            }
        }
    }

    function M(a, c) {
        if (a.h && a.h.wa) {
            try {
                return a.h[c]()
            } catch (d) {
                throw a.h[c] === b ? t.log("Video.js: " + c + " method not defined for " + a.Ua + " playback technology.", d) : "TypeError" == d.name ? (t.log("Video.js: " + c + " unavailable on " + a.Ua + " playback technology element.", d), a.h.wa = l) : t.log(d), d
            }
        }
    }

    s.play = function () {
        N(this, "play");
        return this
    };
    s.pause = function () {
        N(this, "pause");
        return this
    };
    s.paused = function () {
        return M(this, "paused") === l ? l : f
    };
    s.currentTime = function (a) {
        return a !== b ? (N(this, "setCurrentTime", a), this) : this.K.currentTime = M(this, "currentTime") || 0
    };
    s.duration = function (a) {
        if (a !== b) {
            return this.K.duration = parseFloat(a), this
        }
        this.K.duration === b && this.Wc();
        return this.K.duration || 0
    };
    s.remainingTime = function () {
        return this.duration() - this.currentTime()
    };
    s.buffered = function () {
        var a = M(this, "buffered");
        if (!a || !a.length) {
            a = t.Lb(0, 0)
        }
        return a
    };
    s.bufferedPercent = function () {
        var a = this.duration(), c = this.buffered(), d = 0, e, g;
        if (!a) {
            return 0
        }
        for (var h = 0; h < c.length; h++) {
            e = c.start(h), g = c.end(h), g > a && (g = a), d += g - e
        }
        return d / a
    };
    s.volume = function (a) {
        if (a !== b) {
            return a = Math.max(0, Math.min(1, parseFloat(a))), this.K.volume = a, N(this, "setVolume", a), t.Me(a), this
        }
        a = parseFloat(M(this, "volume"));
        return isNaN(a) ? 1 : a
    };
    s.muted = function (a) {
        return a !== b ? (N(this, "setMuted", a), this) : M(this, "muted") || l
    };
    s.Ta = function () {
        return M(this, "supportsFullScreen") || l
    };
    s.Qc = l;
    s.isFullscreen = function (a) {
        return a !== b ? (this.Qc = !!a, this) : this.Qc
    };
    s.isFullScreen = function (a) {
        t.log.warn('player.isFullScreen() has been deprecated, use player.isFullscreen() with a lowercase "s")');
        return this.isFullscreen(a)
    };
    s.requestFullscreen = function () {
        var a = t.cb.Rb;
        this.isFullscreen(f);
        a ? (t.b(document, a.fullscreenchange, t.bind(this, function (c) {
            this.isFullscreen(document[a.fullscreenElement]);
            this.isFullscreen() === l && t.n(document, a.fullscreenchange, arguments.callee);
            this.o("fullscreenchange")
        })), this.c[a.requestFullscreen]()) : this.h.Ta() ? N(this, "enterFullScreen") : (this.Jc(), this.o("fullscreenchange"));
        return this
    };
    s.requestFullScreen = function () {
        t.log.warn('player.requestFullScreen() has been deprecated, use player.requestFullscreen() with a lowercase "s")');
        return this.requestFullscreen()
    };
    s.exitFullscreen = function () {
        var a = t.cb.Rb;
        this.isFullscreen(l);
        if (a) {
            document[a.exitFullscreen]()
        } else {
            this.h.Ta() ? N(this, "exitFullScreen") : (this.Nb(), this.o("fullscreenchange"))
        }
        return this
    };
    s.cancelFullScreen = function () {
        t.log.warn("player.cancelFullScreen() has been deprecated, use player.exitFullscreen()");
        return this.exitFullscreen()
    };
    s.Jc = function () {
        this.je = f;
        this.Ud = document.documentElement.style.overflow;
        t.b(document, "keydown", t.bind(this, this.Kc));
        document.documentElement.style.overflow = "hidden";
        t.p(document.body, "vjs-full-window");
        this.o("enterFullWindow")
    };
    s.Kc = function (a) {
        27 === a.keyCode && (this.isFullscreen() === f ? this.exitFullscreen() : this.Nb())
    };
    s.Nb = function () {
        this.je = l;
        t.n(document, "keydown", this.Kc);
        document.documentElement.style.overflow = this.Ud;
        t.r(document.body, "vjs-full-window");
        this.o("exitFullWindow")
    };
    s.selectSource = function (a) {
        for (var c = 0, d = this.q.techOrder; c < d.length; c++) {
            var e = t.ua(d[c]), g = window.videojs[e];
            if (g) {
                if (g.isSupported()) {
                    for (var h = 0, k = a; h < k.length; h++) {
                        var p = k[h];
                        if (g.canPlaySource(p)) {
                            return {source: p, h: e}
                        }
                    }
                }
            } else {
                t.log.error('The "' + e + '" tech is undefined. Skipped browser support check for that tech.')
            }
        }
        return l
    };
    s.src = function (a) {
        if (a === b) {
            return M(this, "src")
        }
        t.i.isArray(a) ? ma(this, a) : "string" === typeof a ? this.src({src: a}) : a instanceof Object && (a.type && !window.videojs[this.Ua].canPlaySource(a) ? ma(this, [a]) : (this.K.src = a.src, this.Gc = a.type || "", this.I(function () {
            window.videojs[this.Ua].prototype.hasOwnProperty("setSource") ? N(this, "setSource", a) : N(this, "src", a.src);
            "auto" == this.q.preload && this.load();
            this.q.autoplay && this.play()
        })));
        return this
    };
    function ma(a, c) {
        var d = a.selectSource(c);
        d ? d.h === a.Ua ? a.src(d.source) : ka(a, d.h, d.source) : (a.setTimeout(function () {
            this.error({code: 4, message: this.v(this.options().notSupportedMessage)})
        }, 0), a.Wa())
    }

    s.load = function () {
        N(this, "load");
        return this
    };
    s.currentSrc = function () {
        return M(this, "currentSrc") || this.K.src || ""
    };
    s.Qd = function () {
        return this.Gc || ""
    };
    s.Qa = function (a) {
        return a !== b ? (N(this, "setPreload", a), this.q.preload = a, this) : M(this, "preload")
    };
    s.autoplay = function (a) {
        return a !== b ? (N(this, "setAutoplay", a), this.q.autoplay = a, this) : M(this, "autoplay")
    };
    s.loop = function (a) {
        return a !== b ? (N(this, "setLoop", a), this.q.loop = a, this) : M(this, "loop")
    };
    s.poster = function (a) {
        if (a === b) {
            return this.Zc
        }
        a || (a = "");
        this.Zc = a;
        N(this, "setPoster", a);
        this.o("posterchange");
        return this
    };
    s.controls = function (a) {
        return a !== b ? (a = !!a, this.Kb !== a && ((this.Kb = a) ? (this.r("vjs-controls-disabled"), this.p("vjs-controls-enabled"), this.o("controlsenabled")) : (this.r("vjs-controls-enabled"), this.p("vjs-controls-disabled"), this.o("controlsdisabled"))), this) : this.Kb
    };
    t.Player.prototype.ec;
    s = t.Player.prototype;
    s.usingNativeControls = function (a) {
        return a !== b ? (a = !!a, this.ec !== a && ((this.ec = a) ? (this.p("vjs-using-native-controls"), this.o("usingnativecontrols")) : (this.r("vjs-using-native-controls"), this.o("usingcustomcontrols"))), this) : this.ec
    };
    s.ja = j;
    s.error = function (a) {
        if (a === b) {
            return this.ja
        }
        if (a === j) {
            return this.ja = a, this.r("vjs-error"), this
        }
        this.ja = a instanceof t.J ? a : new t.J(a);
        this.o("error");
        this.p("vjs-error");
        t.log.error("(CODE:" + this.ja.code + " " + t.J.hb[this.ja.code] + ")", this.ja.message, this.ja);
        return this
    };
    s.ended = function () {
        return M(this, "ended")
    };
    s.seeking = function () {
        return M(this, "seeking")
    };
    s.Da = f;
    s.reportUserActivity = function () {
        this.Da = f
    };
    s.dc = f;
    s.userActive = function (a) {
        return a !== b ? (a = !!a, a !== this.dc && ((this.dc = a) ? (this.Da = f, this.r("vjs-user-inactive"), this.p("vjs-user-active"), this.o("useractive")) : (this.Da = l, this.h && this.h.N("mousemove", function (a) {
            a.stopPropagation();
            a.preventDefault()
        }), this.r("vjs-user-active"), this.p("vjs-user-inactive"), this.o("userinactive"))), this) : this.dc
    };
    s.playbackRate = function (a) {
        return a !== b ? (N(this, "setPlaybackRate", a), this) : this.h && this.h.featuresPlaybackRate ? M(this, "playbackRate") : 1
    };
    s.Pc = l;
    function ja(a, c) {
        return c !== b ? (a.Pc = !!c, a) : a.Pc
    }

    s.networkState = function () {
        return M(this, "networkState")
    };
    s.readyState = function () {
        return M(this, "readyState")
    };
    s.textTracks = function () {
        return this.h && this.h.textTracks()
    };
    s.Z = function () {
        return this.h && this.h.remoteTextTracks()
    };
    s.addTextTrack = function (a, c, d) {
        return this.h && this.h.addTextTrack(a, c, d)
    };
    s.ia = function (a) {
        return this.h && this.h.addRemoteTextTrack(a)
    };
    s.Ba = function (a) {
        this.h && this.h.removeRemoteTextTrack(a)
    };
    t.ub = t.a.extend();
    t.ub.prototype.q = {
        wf: "play",
        children: {
            playToggle: {},
            currentTimeDisplay: {},
            timeDivider: {},
            durationDisplay: {},
            remainingTimeDisplay: {},
            liveDisplay: {},
            progressControl: {},
            fullscreenToggle: {},
            volumeControl: {},
            muteToggle: {},
            playbackRateMenuButton: {},
            subtitlesButton: {},
            captionsButton: {},
            chaptersButton: {}
        }
    };
    t.ub.prototype.e = function () {
        return t.e("div", {className: "vjs-control-bar"})
    };
    t.kc = t.a.extend({
        l: function (a, c) {
            t.a.call(this, a, c)
        }
    });
    t.kc.prototype.e = function () {
        var a = t.a.prototype.e.call(this, "div", {className: "vjs-live-controls vjs-control"});
        this.B = t.e("div", {
            className: "vjs-live-display",
            innerHTML: '<span class="vjs-control-text">' + this.v("Stream Type") + "</span>" + this.v("LIVE"),
            "aria-live": "off"
        });
        a.appendChild(this.B);
        return a
    };
    t.nc = t.w.extend({
        l: function (a, c) {
            t.w.call(this, a, c);
            this.b(a, "play", this.$b);
            this.b(a, "pause", this.Zb)
        }
    });
    s = t.nc.prototype;
    s.sa = "Play";
    s.V = function () {
        return "vjs-play-control " + t.w.prototype.V.call(this)
    };
    s.u = function () {
        this.d.paused() ? this.d.play() : this.d.pause()
    };
    s.$b = function () {
        this.r("vjs-paused");
        this.p("vjs-playing");
        this.c.children[0].children[0].innerHTML = this.v("Pause")
    };
    s.Zb = function () {
        this.r("vjs-playing");
        this.p("vjs-paused");
        this.c.children[0].children[0].innerHTML = this.v("Play")
    };
    t.vb = t.a.extend({
        l: function (a, c) {
            t.a.call(this, a, c);
            this.b(a, "timeupdate", this.ga)
        }
    });
    t.vb.prototype.e = function () {
        var a = t.a.prototype.e.call(this, "div", {className: "vjs-current-time vjs-time-controls vjs-control"});
        this.B = t.e("div", {
            className: "vjs-current-time-display",
            innerHTML: '<span class="vjs-control-text">Current Time </span>0:00',
            "aria-live": "off"
        });
        a.appendChild(this.B);
        return a
    };
    t.vb.prototype.ga = function () {
        var a = this.d.ob ? this.d.K.currentTime : this.d.currentTime();
        this.B.innerHTML = '<span class="vjs-control-text">' + this.v("Current Time") + "</span> " + t.Ma(a, this.d.duration())
    };
    t.wb = t.a.extend({
        l: function (a, c) {
            t.a.call(this, a, c);
            this.b(a, "timeupdate", this.ga);
            this.b(a, "loadedmetadata", this.ga)
        }
    });
    t.wb.prototype.e = function () {
        var a = t.a.prototype.e.call(this, "div", {className: "vjs-duration vjs-time-controls vjs-control"});
        this.B = t.e("div", {
            className: "vjs-duration-display",
            innerHTML: '<span class="vjs-control-text">' + this.v("Duration Time") + "</span> 0:00",
            "aria-live": "off"
        });
        a.appendChild(this.B);
        return a
    };
    t.wb.prototype.ga = function () {
        var a = this.d.duration();
        a && (this.B.innerHTML = '<span class="vjs-control-text">' + this.v("Duration Time") + "</span> " + t.Ma(a))
    };
    t.tc = t.a.extend({
        l: function (a, c) {
            t.a.call(this, a, c)
        }
    });
    t.tc.prototype.e = function () {
        return t.a.prototype.e.call(this, "div", {
            className: "vjs-time-divider",
            innerHTML: "<div><span>/</span></div>"
        })
    };
    t.Db = t.a.extend({
        l: function (a, c) {
            t.a.call(this, a, c);
            this.b(a, "timeupdate", this.ga)
        }
    });
    t.Db.prototype.e = function () {
        var a = t.a.prototype.e.call(this, "div", {className: "vjs-remaining-time vjs-time-controls vjs-control"});
        this.B = t.e("div", {
            className: "vjs-remaining-time-display",
            innerHTML: '<span class="vjs-control-text">' + this.v("Remaining Time") + "</span> -0:00",
            "aria-live": "off"
        });
        a.appendChild(this.B);
        return a
    };
    t.Db.prototype.ga = function () {
        this.d.duration() && (this.B.innerHTML = '<span class="vjs-control-text">' + this.v("Remaining Time") + "</span> -" + t.Ma(this.d.remainingTime()))
    };
    t.Za = t.w.extend({
        l: function (a, c) {
            t.w.call(this, a, c)
        }
    });
    t.Za.prototype.sa = "Fullscreen";
    t.Za.prototype.V = function () {
        return "vjs-fullscreen-control " + t.w.prototype.V.call(this)
    };
    t.Za.prototype.u = function () {
        this.d.isFullscreen() ? (this.d.exitFullscreen(), this.Jb.innerHTML = this.v("Fullscreen")) : (this.d.requestFullscreen(), this.Jb.innerHTML = this.v("Non-Fullscreen"))
    };
    t.Cb = t.a.extend({
        l: function (a, c) {
            t.a.call(this, a, c)
        }
    });
    t.Cb.prototype.q = {children: {seekBar: {}}};
    t.Cb.prototype.e = function () {
        return t.a.prototype.e.call(this, "div", {className: "vjs-progress-control vjs-control"})
    };
    t.qc = t.U.extend({
        l: function (a, c) {
            t.U.call(this, a, c);
            this.b(a, "timeupdate", this.Ca);
            a.I(t.bind(this, this.Ca))
        }
    });
    s = t.qc.prototype;
    s.q = {
        children: {loadProgressBar: {}, playProgressBar: {}, seekHandle: {}},
        barName: "playProgressBar",
        handleName: "seekHandle"
    };
    s.Yc = "timeupdate";
    s.e = function () {
        return t.U.prototype.e.call(this, "div", {className: "vjs-progress-holder", "aria-label": "video progress bar"})
    };
    s.Ca = function () {
        var a = this.d.ob ? this.d.K.currentTime : this.d.currentTime();
        this.c.setAttribute("aria-valuenow", t.round(100 * this.Sb(), 2));
        this.c.setAttribute("aria-valuetext", t.Ma(a, this.d.duration()))
    };
    s.Sb = function () {
        return this.d.currentTime() / this.d.duration()
    };
    s.mb = function (a) {
        t.U.prototype.mb.call(this, a);
        this.d.ob = f;
        this.d.p("vjs-scrubbing");
        this.df = !this.d.paused();
        this.d.pause()
    };
    s.la = function (a) {
        a = ea(this, a) * this.d.duration();
        a == this.d.duration() && (a -= 0.1);
        this.d.currentTime(a)
    };
    s.za = function (a) {
        t.U.prototype.za.call(this, a);
        this.d.ob = l;
        this.d.r("vjs-scrubbing");
        this.df && this.d.play()
    };
    s.kd = function () {
        this.d.currentTime(this.d.currentTime() + 5)
    };
    s.jd = function () {
        this.d.currentTime(this.d.currentTime() - 5)
    };
    t.zb = t.a.extend({
        l: function (a, c) {
            t.a.call(this, a, c);
            this.b(a, "progress", this.update)
        }
    });
    t.zb.prototype.e = function () {
        return t.a.prototype.e.call(this, "div", {
            className: "vjs-load-progress",
            innerHTML: '<span class="vjs-control-text"><span>' + this.v("Loaded") + "</span>: 0%</span>"
        })
    };
    t.zb.prototype.update = function () {
        var a, c, d, e, g = this.d.buffered();
        a = this.d.duration();
        var h, k = this.d;
        h = k.buffered();
        k = k.duration();
        h = h.end(h.length - 1);
        h > k && (h = k);
        k = this.c.children;
        this.c.style.width = 100 * (h / a || 0) + "%";
        for (a = 0; a < g.length; a++) {
            c = g.start(a), d = g.end(a), (e = k[a]) || (e = this.c.appendChild(t.e())), e.style.left = 100 * (c / h || 0) + "%", e.style.width = 100 * ((d - c) / h || 0) + "%"
        }
        for (a = k.length; a > g.length; a--) {
            this.c.removeChild(k[a - 1])
        }
    };
    t.mc = t.a.extend({
        l: function (a, c) {
            t.a.call(this, a, c)
        }
    });
    t.mc.prototype.e = function () {
        return t.a.prototype.e.call(this, "div", {
            className: "vjs-play-progress",
            innerHTML: '<span class="vjs-control-text"><span>' + this.v("Progress") + "</span>: 0%</span>"
        })
    };
    t.$a = t.ha.extend({
        l: function (a, c) {
            t.ha.call(this, a, c);
            this.b(a, "timeupdate", this.ga)
        }
    });
    t.$a.prototype.defaultValue = "00:00";
    t.$a.prototype.e = function () {
        return t.ha.prototype.e.call(this, "div", {className: "vjs-seek-handle", "aria-live": "off"})
    };
    t.$a.prototype.ga = function () {
        var a = this.d.ob ? this.d.K.currentTime : this.d.currentTime();
        this.c.innerHTML = '<span class="vjs-control-text">' + t.Ma(a, this.d.duration()) + "</span>"
    };
    t.Gb = t.a.extend({
        l: function (a, c) {
            t.a.call(this, a, c);
            a.h && a.h.featuresVolumeControl === l && this.p("vjs-hidden");
            this.b(a, "loadstart", function () {
                a.h.featuresVolumeControl === l ? this.p("vjs-hidden") : this.r("vjs-hidden")
            })
        }
    });
    t.Gb.prototype.q = {children: {volumeBar: {}}};
    t.Gb.prototype.e = function () {
        return t.a.prototype.e.call(this, "div", {className: "vjs-volume-control vjs-control"})
    };
    t.Fb = t.U.extend({
        l: function (a, c) {
            t.U.call(this, a, c);
            this.b(a, "volumechange", this.Ca);
            a.I(t.bind(this, this.Ca))
        }
    });
    s = t.Fb.prototype;
    s.Ca = function () {
        this.c.setAttribute("aria-valuenow", t.round(100 * this.d.volume(), 2));
        this.c.setAttribute("aria-valuetext", t.round(100 * this.d.volume(), 2) + "%")
    };
    s.q = {children: {volumeLevel: {}, volumeHandle: {}}, barName: "volumeLevel", handleName: "volumeHandle"};
    s.Yc = "volumechange";
    s.e = function () {
        return t.U.prototype.e.call(this, "div", {className: "vjs-volume-bar", "aria-label": "volume level"})
    };
    s.la = function (a) {
        this.d.muted() && this.d.muted(l);
        this.d.volume(ea(this, a))
    };
    s.Sb = function () {
        return this.d.muted() ? 0 : this.d.volume()
    };
    s.kd = function () {
        this.d.volume(this.d.volume() + 0.1)
    };
    s.jd = function () {
        this.d.volume(this.d.volume() - 0.1)
    };
    t.uc = t.a.extend({
        l: function (a, c) {
            t.a.call(this, a, c)
        }
    });
    t.uc.prototype.e = function () {
        return t.a.prototype.e.call(this, "div", {
            className: "vjs-volume-level",
            innerHTML: '<span class="vjs-control-text"></span>'
        })
    };
    t.Hb = t.ha.extend();
    t.Hb.prototype.defaultValue = "00:00";
    t.Hb.prototype.e = function () {
        return t.ha.prototype.e.call(this, "div", {className: "vjs-volume-handle"})
    };
    t.qa = t.w.extend({
        l: function (a, c) {
            t.w.call(this, a, c);
            this.b(a, "volumechange", this.update);
            a.h && a.h.featuresVolumeControl === l && this.p("vjs-hidden");
            this.b(a, "loadstart", function () {
                a.h.featuresVolumeControl === l ? this.p("vjs-hidden") : this.r("vjs-hidden")
            })
        }
    });
    t.qa.prototype.e = function () {
        return t.w.prototype.e.call(this, "div", {
            className: "vjs-mute-control vjs-control",
            innerHTML: '<div><span class="vjs-control-text">' + this.v("Mute") + "</span></div>"
        })
    };
    t.qa.prototype.u = function () {
        this.d.muted(this.d.muted() ? l : f)
    };
    t.qa.prototype.update = function () {
        var a = this.d.volume(), c = 3;
        0 === a || this.d.muted() ? c = 0 : 0.33 > a ? c = 1 : 0.67 > a && (c = 2);
        this.d.muted() ? this.c.children[0].children[0].innerHTML != this.v("Unmute") && (this.c.children[0].children[0].innerHTML = this.v("Unmute")) : this.c.children[0].children[0].innerHTML != this.v("Mute") && (this.c.children[0].children[0].innerHTML = this.v("Mute"));
        for (a = 0; 4 > a; a++) {
            t.r(this.c, "vjs-vol-" + a)
        }
        t.p(this.c, "vjs-vol-" + c)
    };
    t.Fa = t.O.extend({
        l: function (a, c) {
            t.O.call(this, a, c);
            this.b(a, "volumechange", this.ef);
            a.h && a.h.featuresVolumeControl === l && this.p("vjs-hidden");
            this.b(a, "loadstart", function () {
                a.h.featuresVolumeControl === l ? this.p("vjs-hidden") : this.r("vjs-hidden")
            });
            this.p("vjs-menu-button")
        }
    });
    t.Fa.prototype.Ja = function () {
        var a = new t.pa(this.d, {Cc: "div"}), c = new t.Fb(this.d, this.q.volumeBar);
        c.b("focus", function () {
            a.p("vjs-lock-showing")
        });
        c.b("blur", function () {
            G(a)
        });
        a.ba(c);
        return a
    };
    t.Fa.prototype.u = function () {
        t.qa.prototype.u.call(this);
        t.O.prototype.u.call(this)
    };
    t.Fa.prototype.e = function () {
        return t.w.prototype.e.call(this, "div", {
            className: "vjs-volume-menu-button vjs-menu-button vjs-control",
            innerHTML: '<div><span class="vjs-control-text">' + this.v("Mute") + "</span></div>"
        })
    };
    t.Fa.prototype.ef = t.qa.prototype.update;
    t.oc = t.O.extend({
        l: function (a, c) {
            t.O.call(this, a, c);
            this.sd();
            this.rd();
            this.b(a, "loadstart", this.sd);
            this.b(a, "ratechange", this.rd)
        }
    });
    s = t.oc.prototype;
    s.sa = "Playback Rate";
    s.className = "vjs-playback-rate";
    s.e = function () {
        var a = t.O.prototype.e.call(this);
        this.Sc = t.e("div", {className: "vjs-playback-rate-value", innerHTML: 1});
        a.appendChild(this.Sc);
        return a
    };
    s.Ja = function () {
        var a = new t.pa(this.k()), c = this.k().options().playbackRates;
        if (c) {
            for (var d = c.length - 1; 0 <= d; d--) {
                a.ba(new t.Bb(this.k(), {rate: c[d] + "x"}))
            }
        }
        return a
    };
    s.Ca = function () {
        this.m().setAttribute("aria-valuenow", this.k().playbackRate())
    };
    s.u = function () {
        for (var a = this.k().playbackRate(), c = this.k().options().playbackRates, d = c[0], e = 0; e < c.length; e++) {
            if (c[e] > a) {
                d = c[e];
                break
            }
        }
        this.k().playbackRate(d)
    };
    function na(a) {
        return a.k().h && a.k().h.featuresPlaybackRate && a.k().options().playbackRates && 0 < a.k().options().playbackRates.length
    }

    s.sd = function () {
        na(this) ? this.r("vjs-hidden") : this.p("vjs-hidden")
    };
    s.rd = function () {
        na(this) && (this.Sc.innerHTML = this.k().playbackRate() + "x")
    };
    t.Bb = t.M.extend({
        Cc: "button", l: function (a, c) {
            var d = this.label = c.rate, e = this.$c = parseFloat(d, 10);
            c.label = d;
            c.selected = 1 === e;
            t.M.call(this, a, c);
            this.b(a, "ratechange", this.update)
        }
    });
    t.Bb.prototype.u = function () {
        t.M.prototype.u.call(this);
        this.k().playbackRate(this.$c)
    };
    t.Bb.prototype.update = function () {
        this.selected(this.k().playbackRate() == this.$c)
    };
    t.pc = t.w.extend({
        l: function (a, c) {
            t.w.call(this, a, c);
            this.update();
            a.b("posterchange", t.bind(this, this.update))
        }
    });
    s = t.pc.prototype;
    s.dispose = function () {
        this.k().n("posterchange", this.update);
        t.w.prototype.dispose.call(this)
    };
    s.e = function () {
        var a = t.e("div", {className: "vjs-poster", tabIndex: -1});
        t.wd || (this.Ob = t.e("img"), a.appendChild(this.Ob));
        return a
    };
    s.update = function () {
        var a = this.k().poster();
        this.ma(a);
        a ? this.show() : this.Y()
    };
    s.ma = function (a) {
        var c;
        this.Ob ? this.Ob.src = a : (c = "", a && (c = 'url("' + a + '")'), this.c.style.backgroundImage = c)
    };
    s.u = function () {
        this.d.play()
    };
    t.lc = t.a.extend({
        l: function (a, c) {
            t.a.call(this, a, c)
        }
    });
    t.lc.prototype.e = function () {
        return t.a.prototype.e.call(this, "div", {className: "vjs-loading-spinner"})
    };
    t.sb = t.w.extend();
    t.sb.prototype.e = function () {
        return t.w.prototype.e.call(this, "div", {
            className: "vjs-big-play-button",
            innerHTML: '<span aria-hidden="true"></span>',
            "aria-label": "play video"
        })
    };
    t.sb.prototype.u = function () {
        this.d.play()
    };
    t.xb = t.a.extend({
        l: function (a, c) {
            t.a.call(this, a, c);
            this.update();
            this.b(a, "error", this.update)
        }
    });
    t.xb.prototype.e = function () {
        var a = t.a.prototype.e.call(this, "div", {className: "vjs-error-display"});
        this.B = t.e("div");
        a.appendChild(this.B);
        return a
    };
    t.xb.prototype.update = function () {
        this.k().error() && (this.B.innerHTML = this.v(this.k().error().message))
    };
    var O;
    t.j = t.a.extend({
        l: function (a, c, d) {
            c = c || {};
            c.dd = l;
            t.a.call(this, a, c, d);
            this.featuresProgressEvents || this.re();
            this.featuresTimeupdateEvents || this.se();
            this.fe();
            this.featuresNativeTextTracks || this.Vd();
            this.he()
        }
    });
    s = t.j.prototype;
    s.fe = function () {
        var a, c;
        a = this.k();
        c = function () {
            a.controls() && !a.usingNativeControls() && this.Id()
        };
        this.I(c);
        this.b(a, "controlsenabled", c);
        this.b(a, "controlsdisabled", this.He);
        this.I(function () {
            this.networkState && 0 < this.networkState() && this.k().o("loadstart")
        })
    };
    s.Id = function () {
        var a;
        this.b("mousedown", this.u);
        this.b("touchstart", function () {
            a = this.d.userActive()
        });
        this.b("touchmove", function () {
            a && this.k().reportUserActivity()
        });
        this.b("touchend", function (a) {
            a.preventDefault()
        });
        da(this);
        this.b("tap", this.Be)
    };
    s.He = function () {
        this.n("tap");
        this.n("touchstart");
        this.n("touchmove");
        this.n("touchleave");
        this.n("touchcancel");
        this.n("touchend");
        this.n("click");
        this.n("mousedown")
    };
    s.u = function (a) {
        0 === a.button && this.k().controls() && (this.k().paused() ? this.k().play() : this.k().pause())
    };
    s.Be = function () {
        this.k().userActive(!this.k().userActive())
    };
    s.re = function () {
        this.Uc = f;
        this.$e()
    };
    s.qe = function () {
        this.Uc = l;
        this.ld()
    };
    s.$e = function () {
        this.Ge = this.setInterval(function () {
            var a = this.k().bufferedPercent();
            this.Md != a && this.k().o("progress");
            this.Md = a;
            1 === a && this.ld()
        }, 500)
    };
    s.ld = function () {
        this.clearInterval(this.Ge)
    };
    s.se = function () {
        var a = this.d;
        this.Yb = f;
        this.b(a, "play", this.pd);
        this.b(a, "pause", this.rb);
        this.N("timeupdate", function () {
            this.featuresTimeupdateEvents = f;
            this.Vc()
        })
    };
    s.Vc = function () {
        var a = this.d;
        this.Yb = l;
        this.rb();
        this.n(a, "play", this.pd);
        this.n(a, "pause", this.rb)
    };
    s.pd = function () {
        this.Fc && this.rb();
        this.Fc = this.setInterval(function () {
            this.k().o("timeupdate")
        }, 250)
    };
    s.rb = function () {
        this.clearInterval(this.Fc);
        this.k().o("timeupdate")
    };
    s.dispose = function () {
        this.Uc && this.qe();
        this.Yb && this.Vc();
        t.a.prototype.dispose.call(this)
    };
    s.bc = function () {
        this.Yb && this.k().o("timeupdate")
    };
    s.he = function () {
        function a() {
            var a = c.ea("textTrackDisplay");
            a && a.C()
        }

        var c = this.d, d;
        if (d = this.textTracks()) {
            d.addEventListener("removetrack", a), d.addEventListener("addtrack", a), this.b("dispose", t.bind(this, function () {
                d.removeEventListener("removetrack", a);
                d.removeEventListener("addtrack", a)
            }))
        }
    };
    s.Vd = function () {
        var a = this.d, c, d, e;
        window.WebVTT || (e = document.createElement("script"), e.src = a.options()["vtt.js"] || "../node_modules/vtt.js/dist/vtt.js", a.m().appendChild(e), window.WebVTT = f);
        if (d = this.textTracks()) {
            c = function () {
                var c, d, e;
                e = a.ea("textTrackDisplay");
                e.C();
                for (c = 0; c < this.length; c++) {
                    d = this[c], d.removeEventListener("cuechange", t.bind(e, e.C)), "showing" === d.mode && d.addEventListener("cuechange", t.bind(e, e.C))
                }
            }, d.addEventListener("change", c), this.b("dispose", t.bind(this, function () {
                d.removeEventListener("change", c)
            }))
        }
    };
    s.textTracks = function () {
        this.d.od = this.d.od || new t.F;
        return this.d.od
    };
    s.Z = function () {
        this.d.ad = this.d.ad || new t.F;
        return this.d.ad
    };
    O = function (a, c, d, e, g) {
        var h = a.textTracks();
        g = g || {};
        g.kind = c;
        d && (g.label = d);
        e && (g.language = e);
        g.player = a.d;
        a = new t.t(g);
        P(h, a);
        return a
    };
    t.j.prototype.addTextTrack = function (a, c, d) {
        if (!a) {
            throw Error("TextTrack kind is required but was not provided")
        }
        return O(this, a, c, d)
    };
    t.j.prototype.ia = function (a) {
        a = O(this, a.kind, a.label, a.language, a);
        P(this.Z(), a);
        return {T: a}
    };
    t.j.prototype.Ba = function (a) {
        Q(this.textTracks(), a);
        Q(this.Z(), a)
    };
    t.j.prototype.fd = m();
    t.j.prototype.featuresVolumeControl = f;
    t.j.prototype.featuresFullscreenResize = l;
    t.j.prototype.featuresPlaybackRate = l;
    t.j.prototype.featuresProgressEvents = l;
    t.j.prototype.featuresTimeupdateEvents = l;
    t.j.prototype.featuresNativeTextTracks = l;
    t.j.gc = function (a) {
        a.Ra = function (c, d) {
            var e = a.gd;
            e || (e = a.gd = []);
            d === b && (d = e.length);
            e.splice(d, 0, c)
        };
        a.pb = function (c) {
            for (var d = a.gd || [], e, g = 0; g < d.length; g++) {
                if (e = d[g].eb(c)) {
                    return d[g]
                }
            }
            return j
        };
        a.zc = function (c) {
            var d = a.pb(c);
            return d ? d.eb(c) : ""
        };
        a.prototype.Sa = function (c) {
            var d = a.pb(c);
            d || (a.S ? d = a.S : t.log.error("No source hander found for the current source."));
            this.Ka();
            this.n("dispose", this.Ka);
            this.Ec = c;
            this.cc = d.Tb(c, this);
            this.b("dispose", this.Ka);
            return this
        };
        a.prototype.Ka = function () {
            this.cc && this.cc.dispose && this.cc.dispose()
        }
    };
    t.media = {};
    t.f = t.j.extend({
        l: function (a, c, d) {
            var e, g, h;
            if (c.nativeCaptions === l || c.nativeTextTracks === l) {
                this.featuresNativeTextTracks = l
            }
            t.j.call(this, a, c, d);
            for (d = t.f.yb.length - 1; 0 <= d; d--) {
                this.b(t.f.yb[d], this.Wd)
            }
            (c = c.source) && (this.c.currentSrc !== c.src || a.L && 3 === a.L.ge) && this.Sa(c);
            if (this.c.hasChildNodes()) {
                d = this.c.childNodes;
                e = d.length;
                for (c = []; e--;) {
                    g = d[e], h = g.nodeName.toLowerCase(), "track" === h && (this.featuresNativeTextTracks ? P(this.Z(), g.track) : c.push(g))
                }
                for (d = 0; d < c.length; d++) {
                    this.c.removeChild(c[d])
                }
            }
            this.featuresNativeTextTracks && this.b("loadstart", t.bind(this, this.ee));
            if (t.Eb && a.options().nativeControlsForTouch === f) {
                var k, p, r, u;
                k = this;
                p = this.k();
                c = p.controls();
                k.c.controls = !!c;
                r = function () {
                    k.c.controls = f
                };
                u = function () {
                    k.c.controls = l
                };
                p.b("controlsenabled", r);
                p.b("controlsdisabled", u);
                c = function () {
                    p.n("controlsenabled", r);
                    p.n("controlsdisabled", u)
                };
                k.b("dispose", c);
                p.b("usingcustomcontrols", c);
                p.usingNativeControls(f)
            }
            a.I(function () {
                this.src() && (this.L && this.q.autoplay && this.paused()) && (delete this.L.poster, this.play())
            });
            this.Wa()
        }
    });
    s = t.f.prototype;
    s.dispose = function () {
        t.f.Mb(this.c);
        t.j.prototype.dispose.call(this)
    };
    s.e = function () {
        var a = this.d, c, d, e, g = a.L;
        if (!g || this.movingMediaElementInDOM === l) {
            g ? (e = g.cloneNode(l), t.f.Mb(g), g = e, a.L = j) : (g = t.e("video"), e = videojs.$.ya({}, a.Xe), (!t.Eb || a.options().nativeControlsForTouch !== f) && delete e.controls, t.ed(g, t.i.D(e, {
                id: a.id() + "_html5_api",
                "class": "vjs-tech"
            })));
            g.player = a;
            if (a.q.qd) {
                for (e = 0; e < a.q.qd.length; e++) {
                    c = a.q.qd[e], d = document.createElement("track"), d.Wb = c.Wb, d.label = c.label, d.hd = c.hd, d.src = c.src, "default" in c && d.setAttribute("default", "default"), g.appendChild(d)
                }
            }
            t.Ub(g, a.m())
        }
        c = ["autoplay", "preload", "loop", "muted"];
        for (e = c.length - 1; 0 <= e; e--) {
            d = c[e];
            var h = {};
            "undefined" !== typeof a.q[d] && (h[d] = a.q[d]);
            t.ed(g, h)
        }
        return g
    };
    s.ee = function () {
        for (var a = this.c.querySelectorAll("track"), c, d = a.length, e = {captions: 1, subtitles: 1}; d--;) {
            if ((c = a[d].T) && c.kind in e && !a[d]["default"]) {
                c.mode = "disabled"
            }
        }
    };
    s.Wd = function (a) {
        "error" == a.type && this.error() ? this.k().error(this.error().code) : (a.bubbles = l, this.k().o(a))
    };
    s.play = function () {
        this.c.play()
    };
    s.pause = function () {
        this.c.pause()
    };
    s.paused = function () {
        return this.c.paused
    };
    s.currentTime = function () {
        return this.c.currentTime
    };
    s.bc = function (a) {
        try {
            this.c.currentTime = a
        } catch (c) {
            t.log(c, "Video is not ready. (Video.js)")
        }
    };
    s.duration = function () {
        return this.c.duration || 0
    };
    s.buffered = function () {
        return this.c.buffered
    };
    s.volume = function () {
        return this.c.volume
    };
    s.Se = function (a) {
        this.c.volume = a
    };
    s.muted = function () {
        return this.c.muted
    };
    s.Oe = function (a) {
        this.c.muted = a
    };
    s.width = function () {
        return this.c.offsetWidth
    };
    s.height = function () {
        return this.c.offsetHeight
    };
    s.Ta = function () {
        return "function" == typeof this.c.webkitEnterFullScreen && (/Android/.test(t.P) || !/Chrome|Mac OS X 10.5/.test(t.P)) ? f : l
    };
    s.Ic = function () {
        var a = this.c;
        "webkitDisplayingFullscreen" in a && this.N("webkitbeginfullscreen", function () {
            this.d.isFullscreen(f);
            this.N("webkitendfullscreen", function () {
                this.d.isFullscreen(l);
                this.d.o("fullscreenchange")
            });
            this.d.o("fullscreenchange")
        });
        a.paused && a.networkState <= a.jf ? (this.c.play(), this.setTimeout(function () {
            a.pause();
            a.webkitEnterFullScreen()
        }, 0)) : a.webkitEnterFullScreen()
    };
    s.Xd = function () {
        this.c.webkitExitFullScreen()
    };
    s.src = function (a) {
        if (a === b) {
            return this.c.src
        }
        this.ma(a)
    };
    s.ma = function (a) {
        this.c.src = a
    };
    s.load = function () {
        this.c.load()
    };
    s.currentSrc = function () {
        return this.c.currentSrc
    };
    s.poster = function () {
        return this.c.poster
    };
    s.fd = function (a) {
        this.c.poster = a
    };
    s.Qa = function () {
        return this.c.Qa
    };
    s.Qe = function (a) {
        this.c.Qa = a
    };
    s.autoplay = function () {
        return this.c.autoplay
    };
    s.Le = function (a) {
        this.c.autoplay = a
    };
    s.controls = function () {
        return this.c.controls
    };
    s.loop = function () {
        return this.c.loop
    };
    s.Ne = function (a) {
        this.c.loop = a
    };
    s.error = function () {
        return this.c.error
    };
    s.seeking = function () {
        return this.c.seeking
    };
    s.ended = function () {
        return this.c.ended
    };
    s.playbackRate = function () {
        return this.c.playbackRate
    };
    s.Pe = function (a) {
        this.c.playbackRate = a
    };
    s.networkState = function () {
        return this.c.networkState
    };
    s.readyState = function () {
        return this.c.readyState
    };
    s.textTracks = function () {
        return !this.featuresNativeTextTracks ? t.j.prototype.textTracks.call(this) : this.c.textTracks
    };
    s.addTextTrack = function (a, c, d) {
        return !this.featuresNativeTextTracks ? t.j.prototype.addTextTrack.call(this, a, c, d) : this.c.addTextTrack(a, c, d)
    };
    s.ia = function (a) {
        if (!this.featuresNativeTextTracks) {
            return t.j.prototype.ia.call(this, a)
        }
        var c = document.createElement("track");
        a = a || {};
        a.kind && (c.kind = a.kind);
        a.label && (c.label = a.label);
        if (a.language || a.srclang) {
            c.srclang = a.language || a.srclang
        }
        a["default"] && (c["default"] = a["default"]);
        a.id && (c.id = a.id);
        a.src && (c.src = a.src);
        this.m().appendChild(c);
        c.track.mode = "metadata" === c.T.kind ? "hidden" : "disabled";
        c.onload = function () {
            var a = c.track;
            2 <= c.readyState && ("metadata" === a.kind && "hidden" !== a.mode ? a.mode = "hidden" : "metadata" !== a.kind && "disabled" !== a.mode && (a.mode = "disabled"), c.onload = j)
        };
        P(this.Z(), c.T);
        return c
    };
    s.Ba = function (a) {
        if (!this.featuresNativeTextTracks) {
            return t.j.prototype.Ba.call(this, a)
        }
        var c, d;
        Q(this.Z(), a);
        c = this.m().querySelectorAll("track");
        for (d = 0; d < c.length; d++) {
            if (c[d] === a || c[d].track === a) {
                c[d].parentNode.removeChild(c[d]);
                break
            }
        }
    };
    t.f.isSupported = function () {
        try {
            t.A.volume = 0.5
        } catch (a) {
            return l
        }
        return !!t.A.canPlayType
    };
    t.j.gc(t.f);
    t.f.S = {};
    t.f.S.eb = function (a) {
        function c(a) {
            try {
                return t.A.canPlayType(a)
            } catch (c) {
                return ""
            }
        }

        return a.type ? c(a.type) : a.src ? (a = (a = a.src.match(/\.([^.\/\?]+)(\?[^\/]+)?$/i)) && a[1], c("video/" + a)) : ""
    };
    t.f.S.Tb = function (a, c) {
        c.ma(a.src)
    };
    t.f.S.dispose = m();
    t.f.Ra(t.f.S);
    t.f.Od = function () {
        var a = t.A.volume;
        t.A.volume = a / 2 + 0.1;
        return a !== t.A.volume
    };
    t.f.Nd = function () {
        var a = t.A.playbackRate;
        t.A.playbackRate = a / 2 + 0.1;
        return a !== t.A.playbackRate
    };
    t.f.Ve = function () {
        var a;
        (a = !!t.A.textTracks) && 0 < t.A.textTracks.length && (a = "number" !== typeof t.A.textTracks[0].mode);
        a && t.jc && (a = l);
        return a
    };
    t.f.prototype.featuresVolumeControl = t.f.Od();
    t.f.prototype.featuresPlaybackRate = t.f.Nd();
    t.f.prototype.movingMediaElementInDOM = !t.Ad;
    t.f.prototype.featuresFullscreenResize = f;
    t.f.prototype.featuresProgressEvents = f;
    t.f.prototype.featuresNativeTextTracks = t.f.Ve();
    var S, oa = /^application\/(?:x-|vnd\.apple\.)mpegurl/i, pa = /^video\/mp4/i;
    t.f.Xc = function () {
        4 <= t.hc && (S || (S = t.A.constructor.prototype.canPlayType), t.A.constructor.prototype.canPlayType = function (a) {
            return a && oa.test(a) ? "maybe" : S.call(this, a)
        });
        t.Ed && (S || (S = t.A.constructor.prototype.canPlayType), t.A.constructor.prototype.canPlayType = function (a) {
            return a && pa.test(a) ? "maybe" : S.call(this, a)
        })
    };
    t.f.bf = function () {
        var a = t.A.constructor.prototype.canPlayType;
        t.A.constructor.prototype.canPlayType = S;
        S = j;
        return a
    };
    t.f.Xc();
    t.f.yb = "loadstart suspend abort error emptied stalled loadedmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate progress play pause ratechange volumechange".split(" ");
    t.f.Mb = function (a) {
        if (a) {
            a.player = j;
            for (a.parentNode && a.parentNode.removeChild(a); a.hasChildNodes();) {
                a.removeChild(a.firstChild)
            }
            a.removeAttribute("src");
            if ("function" === typeof a.load) {
                try {
                    a.load()
                } catch (c) {
                }
            }
        }
    };
    t.g = t.j.extend({
        l: function (a, c, d) {
            t.j.call(this, a, c, d);
            var e = c.source;
            d = a.id() + "_flash_api";
            var g = a.q, g = t.i.D({
                readyFunction: "videojs.Flash.onReady",
                eventProxyFunction: "videojs.Flash.onEvent",
                errorEventProxyFunction: "videojs.Flash.onError",
                autoplay: g.autoplay,
                preload: g.Qa,
                loop: g.loop,
                muted: g.muted
            }, c.flashVars), h = t.i.D({wmode: "opaque", bgcolor: "#000000"}, c.params);
            d = t.i.D({id: d, name: d, "class": "vjs-tech"}, c.attributes);
            e && this.I(function () {
                this.Sa(e)
            });
            t.Ub(this.c, c.parentEl);
            c.startTime && this.I(function () {
                this.load();
                this.play();
                this.currentTime(c.startTime)
            });
            t.jc && this.I(function () {
                this.b("mousemove", function () {
                    this.k().o({type: "mousemove", bubbles: l})
                })
            });
            a.b("stageclick", a.reportUserActivity);
            this.c = t.g.Hc(c.swf, this.c, g, h, d)
        }
    });
    s = t.g.prototype;
    s.dispose = function () {
        t.j.prototype.dispose.call(this)
    };
    s.play = function () {
        this.c.vjs_play()
    };
    s.pause = function () {
        this.c.vjs_pause()
    };
    s.src = function (a) {
        return a === b ? this.currentSrc() : this.ma(a)
    };
    s.ma = function (a) {
        a = t.$d(a);
        this.c.vjs_src(a);
        if (this.d.autoplay()) {
            var c = this;
            this.setTimeout(function () {
                c.play()
            }, 0)
        }
    };
    t.g.prototype.setCurrentTime = function (a) {
        this.oe = a;
        this.c.vjs_setProperty("currentTime", a);
        t.j.prototype.bc.call(this)
    };
    t.g.prototype.currentTime = function () {
        return this.seeking() ? this.oe || 0 : this.c.vjs_getProperty("currentTime")
    };
    t.g.prototype.currentSrc = function () {
        return this.Ec ? this.Ec.src : this.c.vjs_getProperty("currentSrc")
    };
    t.g.prototype.load = function () {
        this.c.vjs_load()
    };
    t.g.prototype.poster = function () {
        this.c.vjs_getProperty("poster")
    };
    t.g.prototype.setPoster = m();
    t.g.prototype.buffered = function () {
        return t.Lb(0, this.c.vjs_getProperty("buffered"))
    };
    t.g.prototype.Ta = q(l);
    t.g.prototype.Ic = q(l);
    function qa() {
        var a = T[U], c = a.charAt(0).toUpperCase() + a.slice(1);
        ra["set" + c] = function (c) {
            return this.c.vjs_setProperty(a, c)
        }
    }

    function sa(a) {
        ra[a] = function () {
            return this.c.vjs_getProperty(a)
        }
    }

    var ra = t.g.prototype, T = "rtmpConnection rtmpStream preload defaultPlaybackRate playbackRate autoplay loop mediaGroup controller controls volume muted defaultMuted".split(" "), ta = "error networkState readyState seeking initialTime duration startOffsetTime paused played seekable ended videoTracks audioTracks videoWidth videoHeight".split(" "), U;
    for (U = 0; U < T.length; U++) {
        sa(T[U]), qa()
    }
    for (U = 0; U < ta.length; U++) {
        sa(ta[U])
    }
    t.g.isSupported = function () {
        return 10 <= t.g.version()[0]
    };
    t.j.gc(t.g);
    t.g.S = {};
    t.g.S.eb = function (a) {
        return !a.type ? "" : a.type.replace(/;.*/, "").toLowerCase() in t.g.Zd ? "maybe" : ""
    };
    t.g.S.Tb = function (a, c) {
        c.ma(a.src)
    };
    t.g.S.dispose = m();
    t.g.Ra(t.g.S);
    t.g.Zd = {"video/flv": "FLV", "video/x-flv": "FLV", "video/mp4": "MP4", "video/m4v": "MP4"};
    t.g.onReady = function (a) {
        var c;
        if (c = (a = t.m(a)) && a.parentNode && a.parentNode.player) {
            a.player = c, t.g.checkReady(c.h)
        }
    };
    t.g.checkReady = function (a) {
        a.m() && (a.m().vjs_getProperty ? a.Wa() : this.setTimeout(function () {
            t.g.checkReady(a)
        }, 50))
    };
    t.g.onEvent = function (a, c) {
        t.m(a).player.o(c)
    };
    t.g.onError = function (a, c) {
        var d = t.m(a).player, e = "FLASH: " + c;
        "srcnotfound" == c ? d.error({code: 4, message: e}) : d.error(e)
    };
    t.g.version = function () {
        var a = "0,0,0";
        try {
            a = (new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version").replace(/\D+/g, ",").match(/^,?(.+),?$/)[1]
        } catch (c) {
            try {
                navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (a = (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1])
            } catch (d) {
            }
        }
        return a.split(",")
    };
    t.g.Hc = function (a, c, d, e, g) {
        a = t.g.ce(a, d, e, g);
        a = t.e("div", {innerHTML: a}).childNodes[0];
        d = c.parentNode;
        c.parentNode.replaceChild(a, c);
        a[t.expando] = c[t.expando];
        var h = d.childNodes[0];
        setTimeout(function () {
            h.style.display = "block"
        }, 1000);
        return a
    };
    t.g.ce = function (a, c, d, e) {
        var g = "", h = "", k = "";
        c && t.i.da(c, function (a, c) {
            g += a + "=" + c + "&amp;"
        });
        d = t.i.D({movie: a, flashvars: g, allowScriptAccess: "always", allowNetworking: "all"}, d);
        t.i.da(d, function (a, c) {
            h += '<param name="' + a + '" value="' + c + '" />'
        });
        e = t.i.D({data: a, width: "100%", height: "100%"}, e);
        t.i.da(e, function (a, c) {
            k += a + '="' + c + '" '
        });
        return '<object type="application/x-shockwave-flash" ' + k + ">" + h + "</object>"
    };
    t.g.Ue = {"rtmp/mp4": "MP4", "rtmp/flv": "FLV"};
    t.g.Hf = function (a, c) {
        return a + "&" + c
    };
    t.g.Te = function (a) {
        var c = {Bc: "", md: ""};
        if (!a) {
            return c
        }
        var d = a.indexOf("&"), e;
        -1 !== d ? e = d + 1 : (d = e = a.lastIndexOf("/") + 1, 0 === d && (d = e = a.length));
        c.Bc = a.substring(0, d);
        c.md = a.substring(e, a.length);
        return c
    };
    t.g.me = function (a) {
        return a in t.g.Ue
    };
    t.g.Gd = /^rtmp[set]?:\/\//i;
    t.g.le = function (a) {
        return t.g.Gd.test(a)
    };
    t.g.ac = {};
    t.g.ac.eb = function (a) {
        return t.g.me(a.type) || t.g.le(a.src) ? "maybe" : ""
    };
    t.g.ac.Tb = function (a, c) {
        var d = t.g.Te(a.src);
        c.setRtmpConnection(d.Bc);
        c.setRtmpStream(d.md)
    };
    t.g.Ra(t.g.ac);
    t.Fd = t.a.extend({
        l: function (a, c, d) {
            t.a.call(this, a, c, d);
            if (!a.q.sources || 0 === a.q.sources.length) {
                c = 0;
                for (d = a.q.techOrder; c < d.length; c++) {
                    var e = t.ua(d[c]), g = window.videojs[e];
                    if (g && g.isSupported()) {
                        ka(a, e);
                        break
                    }
                }
            } else {
                a.src(a.q.sources)
            }
        }
    });
    t.rc = {disabled: "disabled", hidden: "hidden", showing: "showing"};
    t.Hd = {
        subtitles: "subtitles",
        captions: "captions",
        descriptions: "descriptions",
        chapters: "chapters",
        metadata: "metadata"
    };
    t.t = function (a) {
        var c, d, e, g, h, k, p, r, u, A, R;
        a = a || {};
        if (!a.player) {
            throw Error("A player was not provided.")
        }
        c = this;
        if (t.oa) {
            for (R in c = document.createElement("custom"), t.t.prototype) {
                c[R] = t.t.prototype[R]
            }
        }
        c.d = a.player;
        e = t.rc[a.mode] || "disabled";
        g = t.Hd[a.kind] || "subtitles";
        h = a.label || "";
        k = a.language || a.srclang || "";
        d = a.id || "vjs_text_track_" + t.s++;
        if ("metadata" === g || "chapters" === g) {
            e = "hidden"
        }
        c.X = [];
        c.Ga = [];
        p = new t.W(c.X);
        r = new t.W(c.Ga);
        A = l;
        u = t.bind(c, function () {
            this.activeCues;
            A && (this.trigger("cuechange"), A = l)
        });
        "disabled" !== e && c.d.b("timeupdate", u);
        Object.defineProperty(c, "kind", {
            get: function () {
                return g
            }, set: Function.prototype
        });
        Object.defineProperty(c, "label", {
            get: function () {
                return h
            }, set: Function.prototype
        });
        Object.defineProperty(c, "language", {
            get: function () {
                return k
            }, set: Function.prototype
        });
        Object.defineProperty(c, "id", {
            get: function () {
                return d
            }, set: Function.prototype
        });
        Object.defineProperty(c, "mode", {
            get: function () {
                return e
            }, set: function (a) {
                t.rc[a] && (e = a, "showing" === e && this.d.b("timeupdate", u), this.o("modechange"))
            }
        });
        Object.defineProperty(c, "cues", {
            get: function () {
                return !this.Xb ? j : p
            }, set: Function.prototype
        });
        Object.defineProperty(c, "activeCues", {
            get: function () {
                var a, c, d, e, g;
                if (!this.Xb) {
                    return j
                }
                if (0 === this.cues.length) {
                    return r
                }
                e = this.d.currentTime();
                a = 0;
                c = this.cues.length;
                for (d = []; a < c; a++) {
                    g = this.cues[a], g.startTime <= e && g.endTime >= e ? d.push(g) : g.startTime === g.endTime && (g.startTime <= e && g.startTime + 0.5 >= e) && d.push(g)
                }
                A = l;
                if (d.length !== this.Ga.length) {
                    A = f
                } else {
                    for (a = 0; a < d.length; a++) {
                        -1 === ua.call(this.Ga, d[a]) && (A = f)
                    }
                }
                this.Ga = d;
                r.qb(this.Ga);
                return r
            }, set: Function.prototype
        });
        a.src ? va(a.src, c) : c.Xb = f;
        if (t.oa) {
            return c
        }
    };
    t.t.prototype = t.i.create(t.z.prototype);
    t.t.prototype.constructor = t.t;
    t.t.prototype.bb = {cuechange: "cuechange"};
    t.t.prototype.vc = function (a) {
        var c = this.d.textTracks(), d = 0;
        if (c) {
            for (; d < c.length; d++) {
                c[d] !== this && c[d].bd(a)
            }
        }
        this.X.push(a);
        this.cues.qb(this.X)
    };
    t.t.prototype.bd = function (a) {
        for (var c = 0, d = this.X.length, e, g = l; c < d; c++) {
            e = this.X[c], e === a && (this.X.splice(c, 1), g = f)
        }
        g && this.Dc.qb(this.X)
    };
    var va, V, ua;
    va = function (a, c) {
        t.ff(a, t.bind(this, function (a, e, g) {
            if (a) {
                return t.log.error(a)
            }
            c.Xb = f;
            V(g, c)
        }))
    };
    V = function (a, c) {
        if ("function" !== typeof window.WebVTT) {
            window.setTimeout(function () {
                V(a, c)
            }, 25)
        } else {
            var d = new window.WebVTT.Parser(window, window.vttjs, window.WebVTT.StringDecoder());
            d.oncue = function (a) {
                c.vc(a)
            };
            d.onparsingerror = function (a) {
                t.log.error(a)
            };
            d.parse(a);
            d.flush()
        }
    };
    ua = function (a, c) {
        var d;
        if (this == j) {
            throw new TypeError('"this" is null or not defined')
        }
        var e = Object(this), g = e.length >>> 0;
        if (0 === g) {
            return -1
        }
        d = +c || 0;
        Infinity === Math.abs(d) && (d = 0);
        if (d >= g) {
            return -1
        }
        for (d = Math.max(0 <= d ? d : g - Math.abs(d), 0); d < g;) {
            if (d in e && e[d] === a) {
                return d
            }
            d++
        }
        return -1
    };
    t.F = function (a) {
        var c = this, d, e = 0;
        if (t.oa) {
            for (d in c = document.createElement("custom"), t.F.prototype) {
                c[d] = t.F.prototype[d]
            }
        }
        a = a || [];
        c.Va = [];
        for (Object.defineProperty(c, "length", {
            get: function () {
                return this.Va.length
            }
        }); e < a.length; e++) {
            P(c, a[e])
        }
        if (t.oa) {
            return c
        }
    };
    t.F.prototype = t.i.create(t.z.prototype);
    t.F.prototype.constructor = t.F;
    t.F.prototype.bb = {change: "change", addtrack: "addtrack", removetrack: "removetrack"};
    for (var wa in t.F.prototype.bb) {
        t.F.prototype["on" + wa] = j
    }
    function P(a, c) {
        var d = a.Va.length;
        "" + d in a || Object.defineProperty(a, d, {
            get: function () {
                return this.Va[d]
            }
        });
        c.addEventListener("modechange", t.bind(a, function () {
            this.o("change")
        }));
        a.Va.push(c);
        a.o({type: "addtrack", T: c})
    }

    function Q(a, c) {
        for (var d = 0, e = a.length, g; d < e; d++) {
            if (g = a[d], g === c) {
                a.Va.splice(d, 1);
                break
            }
        }
        a.o({type: "removetrack", T: c})
    }

    t.F.prototype.de = function (a) {
        for (var c = 0, d = this.length, e = j, g; c < d; c++) {
            if (g = this[c], g.id === a) {
                e = g;
                break
            }
        }
        return e
    };
    t.W = function (a) {
        var c = this, d;
        if (t.oa) {
            for (d in c = document.createElement("custom"), t.W.prototype) {
                c[d] = t.W.prototype[d]
            }
        }
        t.W.prototype.qb.call(c, a);
        Object.defineProperty(c, "length", {get: n("pe")});
        if (t.oa) {
            return c
        }
    };
    t.W.prototype.qb = function (a) {
        var c = this.length || 0, d = 0, e = a.length;
        this.X = a;
        this.pe = a.length;
        a = function (a) {
            "" + a in this || Object.defineProperty(this, "" + a, {
                get: function () {
                    return this.X[a]
                }
            })
        };
        if (c < e) {
            for (d = c; d < e; d++) {
                a.call(this, d)
            }
        }
    };
    t.W.prototype.be = function (a) {
        for (var c = 0, d = this.length, e = j, g; c < d; c++) {
            if (g = this[c], g.id === a) {
                e = g;
                break
            }
        }
        return e
    };
    t.ra = t.a.extend({
        l: function (a, c, d) {
            t.a.call(this, a, c, d);
            a.b("loadstart", t.bind(this, this.Ze));
            a.I(t.bind(this, function () {
                if (a.h && a.h.featuresNativeTextTracks) {
                    this.Y()
                } else {
                    var c, d, h;
                    a.b("fullscreenchange", t.bind(this, this.C));
                    d = a.q.tracks || [];
                    for (c = 0; c < d.length; c++) {
                        h = d[c], this.d.ia(h)
                    }
                }
            }))
        }
    });
    t.ra.prototype.Ze = function () {
        this.d.h && this.d.h.featuresNativeTextTracks ? this.Y() : this.show()
    };
    t.ra.prototype.e = function () {
        return t.a.prototype.e.call(this, "div", {className: "vjs-text-track-display"})
    };
    t.ra.prototype.Pd = function () {
        "function" === typeof window.WebVTT && window.WebVTT.processCues(window, [], this.c)
    };
    function W(a, c) {
        return "rgba(" + parseInt(a[1] + a[1], 16) + "," + parseInt(a[2] + a[2], 16) + "," + parseInt(a[3] + a[3], 16) + "," + c + ")"
    }

    var xa = {
        xf: "monospace",
        Df: "sans-serif",
        Ff: "serif",
        yf: '"Andale Mono", "Lucida Console", monospace',
        zf: '"Courier New", monospace',
        Bf: "sans-serif",
        Cf: "serif",
        of: '"Comic Sans MS", Impact, fantasy',
        Ef: '"Monotype Corsiva", cursive',
        Gf: '"Andale Mono", "Lucida Console", monospace, sans-serif'
    };
    t.ra.prototype.C = function () {
        var a = this.d.textTracks(), c = 0, d;
        this.Pd();
        if (a) {
            for (; c < a.length; c++) {
                d = a[c], "showing" === d.mode && this.cf(d)
            }
        }
    };
    t.ra.prototype.cf = function (a) {
        if ("function" === typeof window.WebVTT && a.activeCues) {
            for (var c = 0, d = this.d.textTrackSettings.Lc(), e, g = []; c < a.activeCues.length; c++) {
                g.push(a.activeCues[c])
            }
            window.WebVTT.processCues(window, a.activeCues, this.c);
            for (c = g.length; c--;) {
                a = g[c].pf;
                d.color && (a.firstChild.style.color = d.color);
                if (d.nd) {
                    try {
                        a.firstChild.style.color = W(d.color || "#fff", d.nd)
                    } catch (h) {
                    }
                }
                d.backgroundColor && (a.firstChild.style.backgroundColor = d.backgroundColor);
                if (d.yc) {
                    try {
                        a.firstChild.style.backgroundColor = W(d.backgroundColor || "#000", d.yc)
                    } catch (k) {
                    }
                }
                if (d.fc) {
                    if (d.ud) {
                        try {
                            a.style.backgroundColor = W(d.fc, d.ud)
                        } catch (p) {
                        }
                    } else {
                        a.style.backgroundColor = d.fc
                    }
                }
                d.La && ("dropshadow" === d.La ? a.firstChild.style.textShadow = "2px 2px 3px #222, 2px 2px 4px #222, 2px 2px 5px #222" : "raised" === d.La ? a.firstChild.style.textShadow = "1px 1px #222, 2px 2px #222, 3px 3px #222" : "depressed" === d.La ? a.firstChild.style.textShadow = "1px 1px #ccc, 0 1px #ccc, -1px -1px #222, 0 -1px #222" : "uniform" === d.La && (a.firstChild.style.textShadow = "0 0 4px #222, 0 0 4px #222, 0 0 4px #222, 0 0 4px #222"));
                d.Qb && 1 !== d.Qb && (e = window.Af(a.style.fontSize), a.style.fontSize = e * d.Qb + "px", a.style.height = "auto", a.style.top = "auto", a.style.bottom = "2px");
                d.fontFamily && "default" !== d.fontFamily && ("small-caps" === d.fontFamily ? a.firstChild.style.fontVariant = "small-caps" : a.firstChild.style.fontFamily = xa[d.fontFamily])
            }
        }
    };
    t.aa = t.M.extend({
        l: function (a, c) {
            var d = this.T = c.track, e = a.textTracks(), g, h;
            e && (g = t.bind(this, function () {
                var a = "showing" === this.T.mode, c, d, g;
                if (this instanceof t.Ab) {
                    a = f;
                    d = 0;
                    for (g = e.length; d < g; d++) {
                        if (c = e[d], c.kind === this.T.kind && "showing" === c.mode) {
                            a = l;
                            break
                        }
                    }
                }
                this.selected(a)
            }), e.addEventListener("change", g), a.b("dispose", function () {
                e.removeEventListener("change", g)
            }));
            c.label = d.label || d.language || "Unknown";
            c.selected = d["default"] || "showing" === d.mode;
            t.M.call(this, a, c);
            e && e.onchange === b && this.b(["tap", "click"], function () {
                if ("object" !== typeof window.yd) {
                    try {
                        h = new window.yd("change")
                    } catch (a) {
                    }
                }
                h || (h = document.createEvent("Event"), h.initEvent("change", f, f));
                e.dispatchEvent(h)
            })
        }
    });
    t.aa.prototype.u = function () {
        var a = this.T.kind, c = this.d.textTracks(), d, e = 0;
        t.M.prototype.u.call(this);
        if (c) {
            for (; e < c.length; e++) {
                d = c[e], d.kind === a && (d.mode = d === this.T ? "showing" : "disabled")
            }
        }
    };
    t.Ab = t.aa.extend({
        l: function (a, c) {
            c.track = {kind: c.kind, player: a, label: c.kind + " off", "default": l, mode: "disabled"};
            t.aa.call(this, a, c);
            this.selected(f)
        }
    });
    t.tb = t.aa.extend({
        l: function (a, c) {
            c.track = {kind: c.kind, player: a, label: c.kind + " settings", "default": l, mode: "disabled"};
            t.aa.call(this, a, c);
            this.p("vjs-texttrack-settings")
        }
    });
    t.tb.prototype.u = function () {
        this.k().ea("textTrackSettings").show()
    };
    t.Q = t.O.extend({
        l: function (a, c) {
            var d, e;
            t.O.call(this, a, c);
            d = this.d.textTracks();
            1 >= this.H.length && this.Y();
            d && (e = t.bind(this, this.update), d.addEventListener("removetrack", e), d.addEventListener("addtrack", e), this.d.b("dispose", function () {
                d.removeEventListener("removetrack", e);
                d.removeEventListener("addtrack", e)
            }))
        }
    });
    t.Q.prototype.Ia = function () {
        var a = [], c, d;
        this instanceof t.na && (!this.k().h || !this.k().h.featuresNativeTextTracks) && a.push(new t.tb(this.d, {kind: this.fa}));
        a.push(new t.Ab(this.d, {kind: this.fa}));
        d = this.d.textTracks();
        if (!d) {
            return a
        }
        for (var e = 0; e < d.length; e++) {
            c = d[e], c.kind === this.fa && a.push(new t.aa(this.d, {track: c}))
        }
        return a
    };
    t.na = t.Q.extend({
        l: function (a, c, d) {
            t.Q.call(this, a, c, d);
            this.c.setAttribute("aria-label", "Captions Menu")
        }
    });
    t.na.prototype.fa = "captions";
    t.na.prototype.sa = "Captions";
    t.na.prototype.className = "vjs-captions-button";
    t.na.prototype.update = function () {
        var a = 2;
        t.Q.prototype.update.call(this);
        this.k().h && this.k().h.featuresNativeTextTracks && (a = 1);
        this.H && this.H.length > a ? this.show() : this.Y()
    };
    t.ab = t.Q.extend({
        l: function (a, c, d) {
            t.Q.call(this, a, c, d);
            this.c.setAttribute("aria-label", "Subtitles Menu")
        }
    });
    t.ab.prototype.fa = "subtitles";
    t.ab.prototype.sa = "Subtitles";
    t.ab.prototype.className = "vjs-subtitles-button";
    t.Xa = t.Q.extend({
        l: function (a, c, d) {
            t.Q.call(this, a, c, d);
            this.c.setAttribute("aria-label", "Chapters Menu")
        }
    });
    s = t.Xa.prototype;
    s.fa = "chapters";
    s.sa = "Chapters";
    s.className = "vjs-chapters-button";
    s.Ia = function () {
        var a = [], c, d;
        d = this.d.textTracks();
        if (!d) {
            return a
        }
        for (var e = 0; e < d.length; e++) {
            c = d[e], c.kind === this.fa && a.push(new t.aa(this.d, {track: c}))
        }
        return a
    };
    s.Ja = function () {
        for (var a = this.d.textTracks() || [], c = 0, d = a.length, e, g, h = this.H = []; c < d; c++) {
            if (e = a[c], e.kind == this.fa) {
                if (e.Dc) {
                    g = e;
                    break
                } else {
                    e.mode = "hidden", window.setTimeout(t.bind(this, function () {
                        this.Ja()
                    }), 100)
                }
            }
        }
        a = this.xa;
        a === b && (a = new t.pa(this.d), a.va().appendChild(t.e("li", {
            className: "vjs-menu-title",
            innerHTML: t.ua(this.fa),
            We: -1
        })));
        if (g) {
            e = g.cues;
            for (var k, c = 0, d = e.length; c < d; c++) {
                k = e[c], k = new t.Ya(this.d, {track: g, cue: k}), h.push(k), a.ba(k)
            }
            this.ba(a)
        }
        0 < this.H.length && this.show();
        return a
    };
    t.Ya = t.M.extend({
        l: function (a, c) {
            var d = this.T = c.track, e = this.cue = c.cue, g = a.currentTime();
            c.label = e.text;
            c.selected = e.startTime <= g && g < e.endTime;
            t.M.call(this, a, c);
            d.addEventListener("cuechange", t.bind(this, this.update))
        }
    });
    t.Ya.prototype.u = function () {
        t.M.prototype.u.call(this);
        this.d.currentTime(this.cue.startTime);
        this.update(this.cue.startTime)
    };
    t.Ya.prototype.update = function () {
        var a = this.cue, c = this.d.currentTime();
        this.selected(a.startTime <= c && c < a.endTime)
    };
    function X(a) {
        var c;
        a.Ke ? c = a.Ke[0] : a.options && (c = a.options[a.options.selectedIndex]);
        return c.value
    }

    function Y(a, c) {
        var d, e;
        if (c) {
            for (d = 0; d < a.options.length && !(e = a.options[d], e.value === c); d++) {
            }
            a.selectedIndex = d
        }
    }

    t.sc = t.a.extend({
        l: function (a, c) {
            t.a.call(this, a, c);
            this.Y();
            t.b(this.m().querySelector(".vjs-done-button"), "click", t.bind(this, function () {
                this.Je();
                this.Y()
            }));
            t.b(this.m().querySelector(".vjs-default-button"), "click", t.bind(this, function () {
                this.m().querySelector(".vjs-fg-color > select").selectedIndex = 0;
                this.m().querySelector(".vjs-bg-color > select").selectedIndex = 0;
                this.m().querySelector(".window-color > select").selectedIndex = 0;
                this.m().querySelector(".vjs-text-opacity > select").selectedIndex = 0;
                this.m().querySelector(".vjs-bg-opacity > select").selectedIndex = 0;
                this.m().querySelector(".vjs-window-opacity > select").selectedIndex = 0;
                this.m().querySelector(".vjs-edge-style select").selectedIndex = 0;
                this.m().querySelector(".vjs-font-family select").selectedIndex = 0;
                this.m().querySelector(".vjs-font-percent select").selectedIndex = 2;
                this.C()
            }));
            t.b(this.m().querySelector(".vjs-fg-color > select"), "change", t.bind(this, this.C));
            t.b(this.m().querySelector(".vjs-bg-color > select"), "change", t.bind(this, this.C));
            t.b(this.m().querySelector(".window-color > select"), "change", t.bind(this, this.C));
            t.b(this.m().querySelector(".vjs-text-opacity > select"), "change", t.bind(this, this.C));
            t.b(this.m().querySelector(".vjs-bg-opacity > select"), "change", t.bind(this, this.C));
            t.b(this.m().querySelector(".vjs-window-opacity > select"), "change", t.bind(this, this.C));
            t.b(this.m().querySelector(".vjs-font-percent select"), "change", t.bind(this, this.C));
            t.b(this.m().querySelector(".vjs-edge-style select"), "change", t.bind(this, this.C));
            t.b(this.m().querySelector(".vjs-font-family select"), "change", t.bind(this, this.C));
            a.options().persistTextTrackSettings && this.Ie()
        }
    });
    s = t.sc.prototype;
    s.e = function () {
        return t.a.prototype.e.call(this, "div", {
            className: "vjs-caption-settings vjs-modal-overlay",
            innerHTML: '<div class="vjs-tracksettings"><div class="vjs-tracksettings-colors"><div class="vjs-fg-color vjs-tracksetting"><label class="vjs-label">Foreground</label><select><option value="">---</option><option value="#FFF">White</option><option value="#000">Black</option><option value="#F00">Red</option><option value="#0F0">Green</option><option value="#00F">Blue</option><option value="#FF0">Yellow</option><option value="#F0F">Magenta</option><option value="#0FF">Cyan</option></select><span class="vjs-text-opacity vjs-opacity"><select><option value="">---</option><option value="1">Opaque</option><option value="0.5">Semi-Opaque</option></select></span></div><div class="vjs-bg-color vjs-tracksetting"><label class="vjs-label">Background</label><select><option value="">---</option><option value="#FFF">White</option><option value="#000">Black</option><option value="#F00">Red</option><option value="#0F0">Green</option><option value="#00F">Blue</option><option value="#FF0">Yellow</option><option value="#F0F">Magenta</option><option value="#0FF">Cyan</option></select><span class="vjs-bg-opacity vjs-opacity"><select><option value="">---</option><option value="1">Opaque</option><option value="0.5">Semi-Transparent</option><option value="0">Transparent</option></select></span></div><div class="window-color vjs-tracksetting"><label class="vjs-label">Window</label><select><option value="">---</option><option value="#FFF">White</option><option value="#000">Black</option><option value="#F00">Red</option><option value="#0F0">Green</option><option value="#00F">Blue</option><option value="#FF0">Yellow</option><option value="#F0F">Magenta</option><option value="#0FF">Cyan</option></select><span class="vjs-window-opacity vjs-opacity"><select><option value="">---</option><option value="1">Opaque</option><option value="0.5">Semi-Transparent</option><option value="0">Transparent</option></select></span></div></div><div class="vjs-tracksettings-font"><div class="vjs-font-percent vjs-tracksetting"><label class="vjs-label">Font Size</label><select><option value="0.50">50%</option><option value="0.75">75%</option><option value="1.00" selected>100%</option><option value="1.25">125%</option><option value="1.50">150%</option><option value="1.75">175%</option><option value="2.00">200%</option><option value="3.00">300%</option><option value="4.00">400%</option></select></div><div class="vjs-edge-style vjs-tracksetting"><label class="vjs-label">Text Edge Style</label><select><option value="none">None</option><option value="raised">Raised</option><option value="depressed">Depressed</option><option value="uniform">Uniform</option><option value="dropshadow">Dropshadow</option></select></div><div class="vjs-font-family vjs-tracksetting"><label class="vjs-label">Font Family</label><select><option value="">Default</option><option value="monospaceSerif">Monospace Serif</option><option value="proportionalSerif">Proportional Serif</option><option value="monospaceSansSerif">Monospace Sans-Serif</option><option value="proportionalSansSerif">Proportional Sans-Serif</option><option value="casual">Casual</option><option value="script">Script</option><option value="small-caps">Small Caps</option></select></div></div></div><div class="vjs-tracksettings-controls"><button class="vjs-default-button">Defaults</button><button class="vjs-done-button">Done</button></div>'
        })
    };
    s.Lc = function () {
        var a, c, d, e, g, h, k, p, r, u;
        a = this.m();
        g = X(a.querySelector(".vjs-edge-style select"));
        h = X(a.querySelector(".vjs-font-family select"));
        k = X(a.querySelector(".vjs-fg-color > select"));
        d = X(a.querySelector(".vjs-text-opacity > select"));
        p = X(a.querySelector(".vjs-bg-color > select"));
        c = X(a.querySelector(".vjs-bg-opacity > select"));
        r = X(a.querySelector(".window-color > select"));
        e = X(a.querySelector(".vjs-window-opacity > select"));
        a = window.parseFloat(X(a.querySelector(".vjs-font-percent > select")));
        c = {
            backgroundOpacity: c,
            textOpacity: d,
            windowOpacity: e,
            edgeStyle: g,
            fontFamily: h,
            color: k,
            backgroundColor: p,
            windowColor: r,
            fontPercent: a
        };
        for (u in c) {
            ("" === c[u] || "none" === c[u] || "fontPercent" === u && 1 === c[u]) && delete c[u]
        }
        return c
    };
    s.Re = function (a) {
        var c = this.m();
        Y(c.querySelector(".vjs-edge-style select"), a.La);
        Y(c.querySelector(".vjs-font-family select"), a.fontFamily);
        Y(c.querySelector(".vjs-fg-color > select"), a.color);
        Y(c.querySelector(".vjs-text-opacity > select"), a.nd);
        Y(c.querySelector(".vjs-bg-color > select"), a.backgroundColor);
        Y(c.querySelector(".vjs-bg-opacity > select"), a.yc);
        Y(c.querySelector(".window-color > select"), a.fc);
        Y(c.querySelector(".vjs-window-opacity > select"), a.ud);
        (a = a.Qb) && (a = a.toFixed(2));
        Y(c.querySelector(".vjs-font-percent > select"), a)
    };
    s.Ie = function () {
        var a;
        try {
            a = JSON.parse(window.localStorage.getItem("vjs-text-track-settings"))
        } catch (c) {
        }
        a && this.Re(a)
    };
    s.Je = function () {
        var a;
        if (this.d.options().persistTextTrackSettings) {
            a = this.Lc();
            try {
                t.ib(a) ? window.localStorage.removeItem("vjs-text-track-settings") : window.localStorage.setItem("vjs-text-track-settings", JSON.stringify(a))
            } catch (c) {
            }
        }
    };
    s.C = function () {
        var a = this.d.ea("textTrackDisplay");
        a && a.C()
    };
    if ("undefined" !== typeof window.JSON && "function" === typeof window.JSON.parse) {
        t.JSON = window.JSON
    } else {
        t.JSON = {};
        var Z = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        t.JSON.parse = function (a, c) {
            function d(a, e) {
                var k, p, r = a[e];
                if (r && "object" === typeof r) {
                    for (k in r) {
                        Object.prototype.hasOwnProperty.call(r, k) && (p = d(r, k), p !== b ? r[k] = p : delete r[k])
                    }
                }
                return c.call(a, e, r)
            }

            var e;
            a = String(a);
            Z.lastIndex = 0;
            Z.test(a) && (a = a.replace(Z, function (a) {
                return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }));
            if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                return e = eval("(" + a + ")"), "function" === typeof c ? d({"": e}, "") : e
            }
            throw new SyntaxError("JSON.parse(): invalid or malformed JSON data")
        }
    }
    t.xc = function () {
        var a, c, d, e;
        a = document.getElementsByTagName("video");
        c = document.getElementsByTagName("audio");
        var g = [];
        if (a && 0 < a.length) {
            d = 0;
            for (e = a.length; d < e; d++) {
                g.push(a[d])
            }
        }
        if (c && 0 < c.length) {
            d = 0;
            for (e = c.length; d < e; d++) {
                g.push(c[d])
            }
        }
        if (g && 0 < g.length) {
            d = 0;
            for (e = g.length; d < e; d++) {
                if ((c = g[d]) && c.getAttribute) {
                    c.player === b && (a = c.getAttribute("data-setup"), a !== j && videojs(c))
                } else {
                    t.Ib();
                    break
                }
            }
        } else {
            t.td || t.Ib()
        }
    };
    t.Ib = function () {
        setTimeout(t.xc, 1)
    };
    "complete" === document.readyState ? t.td = f : t.N(window, "load", function () {
        t.td = f
    });
    t.Ib();
    t.Fe = function (a, c) {
        t.Player.prototype[a] = c
    };
    var ya = this;

    function $(a, c) {
        var d = a.split("."), e = ya;
        !(d[0] in e) && e.execScript && e.execScript("var " + d[0]);
        for (var g; d.length && (g = d.shift());) {
            !d.length && c !== b ? e[g] = c : e = e[g] ? e[g] : e[g] = {}
        }
    }

    $("videojs", t);
    $("_V_", t);
    $("videojs.options", t.options);
    $("videojs.players", t.Aa);
    $("videojs.TOUCH_ENABLED", t.Eb);
    $("videojs.cache", t.ta);
    $("videojs.Component", t.a);
    t.a.prototype.player = t.a.prototype.k;
    t.a.prototype.options = t.a.prototype.options;
    t.a.prototype.init = t.a.prototype.l;
    t.a.prototype.dispose = t.a.prototype.dispose;
    t.a.prototype.createEl = t.a.prototype.e;
    t.a.prototype.contentEl = t.a.prototype.va;
    t.a.prototype.el = t.a.prototype.m;
    t.a.prototype.addChild = t.a.prototype.ba;
    t.a.prototype.getChild = t.a.prototype.ea;
    t.a.prototype.getChildById = t.a.prototype.ae;
    t.a.prototype.children = t.a.prototype.children;
    t.a.prototype.initChildren = t.a.prototype.Oc;
    t.a.prototype.removeChild = t.a.prototype.removeChild;
    t.a.prototype.on = t.a.prototype.b;
    t.a.prototype.off = t.a.prototype.n;
    t.a.prototype.one = t.a.prototype.N;
    t.a.prototype.trigger = t.a.prototype.o;
    t.a.prototype.triggerReady = t.a.prototype.Wa;
    t.a.prototype.show = t.a.prototype.show;
    t.a.prototype.hide = t.a.prototype.Y;
    t.a.prototype.width = t.a.prototype.width;
    t.a.prototype.height = t.a.prototype.height;
    t.a.prototype.dimensions = t.a.prototype.Td;
    t.a.prototype.ready = t.a.prototype.I;
    t.a.prototype.addClass = t.a.prototype.p;
    t.a.prototype.removeClass = t.a.prototype.r;
    t.a.prototype.hasClass = t.a.prototype.Oa;
    t.a.prototype.buildCSSClass = t.a.prototype.V;
    t.a.prototype.localize = t.a.prototype.v;
    t.a.prototype.setInterval = t.a.prototype.setInterval;
    t.a.prototype.setTimeout = t.a.prototype.setTimeout;
    $("videojs.EventEmitter", t.z);
    t.z.prototype.on = t.z.prototype.b;
    t.z.prototype.addEventListener = t.z.prototype.addEventListener;
    t.z.prototype.off = t.z.prototype.n;
    t.z.prototype.removeEventListener = t.z.prototype.removeEventListener;
    t.z.prototype.one = t.z.prototype.N;
    t.z.prototype.trigger = t.z.prototype.o;
    t.z.prototype.dispatchEvent = t.z.prototype.dispatchEvent;
    t.Player.prototype.ended = t.Player.prototype.ended;
    t.Player.prototype.enterFullWindow = t.Player.prototype.Jc;
    t.Player.prototype.exitFullWindow = t.Player.prototype.Nb;
    t.Player.prototype.preload = t.Player.prototype.Qa;
    t.Player.prototype.remainingTime = t.Player.prototype.remainingTime;
    t.Player.prototype.supportsFullScreen = t.Player.prototype.Ta;
    t.Player.prototype.currentType = t.Player.prototype.Qd;
    t.Player.prototype.requestFullScreen = t.Player.prototype.requestFullScreen;
    t.Player.prototype.requestFullscreen = t.Player.prototype.requestFullscreen;
    t.Player.prototype.cancelFullScreen = t.Player.prototype.cancelFullScreen;
    t.Player.prototype.exitFullscreen = t.Player.prototype.exitFullscreen;
    t.Player.prototype.isFullScreen = t.Player.prototype.isFullScreen;
    t.Player.prototype.isFullscreen = t.Player.prototype.isFullscreen;
    t.Player.prototype.textTracks = t.Player.prototype.textTracks;
    t.Player.prototype.remoteTextTracks = t.Player.prototype.Z;
    t.Player.prototype.addTextTrack = t.Player.prototype.addTextTrack;
    t.Player.prototype.addRemoteTextTrack = t.Player.prototype.ia;
    t.Player.prototype.removeRemoteTextTrack = t.Player.prototype.Ba;
    $("videojs.MediaLoader", t.Fd);
    $("videojs.TextTrackDisplay", t.ra);
    $("videojs.ControlBar", t.ub);
    $("videojs.Button", t.w);
    $("videojs.PlayToggle", t.nc);
    $("videojs.FullscreenToggle", t.Za);
    $("videojs.BigPlayButton", t.sb);
    $("videojs.LoadingSpinner", t.lc);
    $("videojs.CurrentTimeDisplay", t.vb);
    $("videojs.DurationDisplay", t.wb);
    $("videojs.TimeDivider", t.tc);
    $("videojs.RemainingTimeDisplay", t.Db);
    $("videojs.LiveDisplay", t.kc);
    $("videojs.ErrorDisplay", t.xb);
    $("videojs.Slider", t.U);
    $("videojs.ProgressControl", t.Cb);
    $("videojs.SeekBar", t.qc);
    $("videojs.LoadProgressBar", t.zb);
    $("videojs.PlayProgressBar", t.mc);
    $("videojs.SeekHandle", t.$a);
    $("videojs.VolumeControl", t.Gb);
    $("videojs.VolumeBar", t.Fb);
    $("videojs.VolumeLevel", t.uc);
    $("videojs.VolumeMenuButton", t.Fa);
    $("videojs.VolumeHandle", t.Hb);
    $("videojs.MuteToggle", t.qa);
    $("videojs.PosterImage", t.pc);
    $("videojs.Menu", t.pa);
    $("videojs.MenuItem", t.M);
    $("videojs.MenuButton", t.O);
    $("videojs.PlaybackRateMenuButton", t.oc);
    $("videojs.ChaptersTrackMenuItem", t.Ya);
    $("videojs.TextTrackButton", t.Q);
    $("videojs.TextTrackMenuItem", t.aa);
    $("videojs.OffTextTrackMenuItem", t.Ab);
    $("videojs.CaptionSettingsMenuItem", t.tb);
    t.O.prototype.createItems = t.O.prototype.Ia;
    t.Q.prototype.createItems = t.Q.prototype.Ia;
    t.Xa.prototype.createItems = t.Xa.prototype.Ia;
    $("videojs.SubtitlesButton", t.ab);
    $("videojs.CaptionsButton", t.na);
    $("videojs.ChaptersButton", t.Xa);
    $("videojs.MediaTechController", t.j);
    t.j.withSourceHandlers = t.j.gc;
    t.j.prototype.featuresVolumeControl = t.j.prototype.uf;
    t.j.prototype.featuresFullscreenResize = t.j.prototype.qf;
    t.j.prototype.featuresPlaybackRate = t.j.prototype.rf;
    t.j.prototype.featuresProgressEvents = t.j.prototype.sf;
    t.j.prototype.featuresTimeupdateEvents = t.j.prototype.tf;
    t.j.prototype.setPoster = t.j.prototype.fd;
    t.j.prototype.textTracks = t.j.prototype.textTracks;
    t.j.prototype.remoteTextTracks = t.j.prototype.Z;
    t.j.prototype.addTextTrack = t.j.prototype.addTextTrack;
    t.j.prototype.addRemoteTextTrack = t.j.prototype.ia;
    t.j.prototype.removeRemoteTextTrack = t.j.prototype.Ba;
    $("videojs.Html5", t.f);
    t.f.Events = t.f.yb;
    t.f.isSupported = t.f.isSupported;
    t.f.canPlaySource = t.f.zc;
    t.f.patchCanPlayType = t.f.Xc;
    t.f.unpatchCanPlayType = t.f.bf;
    t.f.prototype.setCurrentTime = t.f.prototype.bc;
    t.f.prototype.setVolume = t.f.prototype.Se;
    t.f.prototype.setMuted = t.f.prototype.Oe;
    t.f.prototype.setPreload = t.f.prototype.Qe;
    t.f.prototype.setAutoplay = t.f.prototype.Le;
    t.f.prototype.setLoop = t.f.prototype.Ne;
    t.f.prototype.enterFullScreen = t.f.prototype.Ic;
    t.f.prototype.exitFullScreen = t.f.prototype.Xd;
    t.f.prototype.playbackRate = t.f.prototype.playbackRate;
    t.f.prototype.setPlaybackRate = t.f.prototype.Pe;
    t.f.registerSourceHandler = t.f.Ra;
    t.f.selectSourceHandler = t.f.pb;
    t.f.prototype.setSource = t.f.prototype.Sa;
    t.f.prototype.disposeSourceHandler = t.f.prototype.Ka;
    t.f.prototype.textTracks = t.f.prototype.textTracks;
    t.f.prototype.remoteTextTracks = t.f.prototype.Z;
    t.f.prototype.addTextTrack = t.f.prototype.addTextTrack;
    t.f.prototype.addRemoteTextTrack = t.f.prototype.ia;
    t.f.prototype.removeRemoteTextTrack = t.f.prototype.Ba;
    $("videojs.Flash", t.g);
    t.g.isSupported = t.g.isSupported;
    t.g.canPlaySource = t.g.zc;
    t.g.onReady = t.g.onReady;
    t.g.embed = t.g.Hc;
    t.g.version = t.g.version;
    t.g.prototype.setSource = t.g.prototype.Sa;
    t.g.registerSourceHandler = t.g.Ra;
    t.g.selectSourceHandler = t.g.pb;
    t.g.prototype.setSource = t.g.prototype.Sa;
    t.g.prototype.disposeSourceHandler = t.g.prototype.Ka;
    $("videojs.TextTrack", t.t);
    $("videojs.TextTrackList", t.F);
    $("videojs.TextTrackCueList", t.W);
    $("videojs.TextTrackSettings", t.sc);
    t.t.prototype.id = t.t.prototype.id;
    t.t.prototype.label = t.t.prototype.label;
    t.t.prototype.kind = t.t.prototype.Wb;
    t.t.prototype.mode = t.t.prototype.mode;
    t.t.prototype.cues = t.t.prototype.Dc;
    t.t.prototype.activeCues = t.t.prototype.nf;
    t.t.prototype.addCue = t.t.prototype.vc;
    t.t.prototype.removeCue = t.t.prototype.bd;
    t.F.prototype.getTrackById = t.F.prototype.de;
    t.W.prototype.getCueById = t.F.prototype.be;
    $("videojs.CaptionsTrack", t.gf);
    $("videojs.SubtitlesTrack", t.mf);
    $("videojs.ChaptersTrack", t.hf);
    $("videojs.autoSetup", t.xc);
    $("videojs.plugin", t.Fe);
    $("videojs.createTimeRange", t.Lb);
    $("videojs.util", t.$);
    t.$.mergeOptions = t.$.ya;
    t.addLanguage = t.Jd
})();
!function (h) {
    var g = h.vttjs = {}, l = g.VTTCue, k = g.VTTRegion, j = h.VTTCue, i = h.VTTRegion;
    g.shim = function () {
        g.VTTCue = l, g.VTTRegion = k
    }, g.restore = function () {
        g.VTTCue = j, g.VTTRegion = i
    }
}(this), function (r, q) {
    function p(d) {
        if ("string" != typeof d) {
            return !1
        }
        var c = k[d.toLowerCase()];
        return c ? d.toLowerCase() : !1
    }

    function o(d) {
        if ("string" != typeof d) {
            return !1
        }
        var c = j[d.toLowerCase()];
        return c ? d.toLowerCase() : !1
    }

    function n(f) {
        for (var e = 1; e < arguments.length; e++) {
            var h = arguments[e];
            for (var g in h) {
                f[g] = h[g]
            }
        }
        return f
    }

    function m(N, M, L) {
        var K = this, J = /MSIE\s8\.0/.test(navigator.userAgent), I = {};
        J ? K = document.createElement("custom") : I.enumerable = !0, K.hasBeenReset = !1;
        var H = "", G = !1, F = N, E = M, D = L, C = null, B = "", A = !0, z = "auto", y = "start", g = 50, e = "middle", d = 50, c = "middle";
        return Object.defineProperty(K, "id", n({}, I, {
            get: function () {
                return H
            }, set: function (b) {
                H = "" + b
            }
        })), Object.defineProperty(K, "pauseOnExit", n({}, I, {
            get: function () {
                return G
            }, set: function (b) {
                G = !!b
            }
        })), Object.defineProperty(K, "startTime", n({}, I, {
            get: function () {
                return F
            }, set: function (b) {
                if ("number" != typeof b) {
                    throw new TypeError("Start time must be set to a number.")
                }
                F = b, this.hasBeenReset = !0
            }
        })), Object.defineProperty(K, "endTime", n({}, I, {
            get: function () {
                return E
            }, set: function (b) {
                if ("number" != typeof b) {
                    throw new TypeError("End time must be set to a number.")
                }
                E = b, this.hasBeenReset = !0
            }
        })), Object.defineProperty(K, "text", n({}, I, {
            get: function () {
                return D
            }, set: function (b) {
                D = "" + b, this.hasBeenReset = !0
            }
        })), Object.defineProperty(K, "region", n({}, I, {
            get: function () {
                return C
            }, set: function (b) {
                C = b, this.hasBeenReset = !0
            }
        })), Object.defineProperty(K, "vertical", n({}, I, {
            get: function () {
                return B
            }, set: function (h) {
                var f = p(h);
                if (f === !1) {
                    throw new SyntaxError("An invalid or illegal string was specified.")
                }
                B = f, this.hasBeenReset = !0
            }
        })), Object.defineProperty(K, "snapToLines", n({}, I, {
            get: function () {
                return A
            }, set: function (b) {
                A = !!b, this.hasBeenReset = !0
            }
        })), Object.defineProperty(K, "line", n({}, I, {
            get: function () {
                return z
            }, set: function (b) {
                if ("number" != typeof b && b !== l) {
                    throw new SyntaxError("An invalid number or illegal string was specified.")
                }
                z = b, this.hasBeenReset = !0
            }
        })), Object.defineProperty(K, "lineAlign", n({}, I, {
            get: function () {
                return y
            }, set: function (h) {
                var f = o(h);
                if (!f) {
                    throw new SyntaxError("An invalid or illegal string was specified.")
                }
                y = f, this.hasBeenReset = !0
            }
        })), Object.defineProperty(K, "position", n({}, I, {
            get: function () {
                return g
            }, set: function (b) {
                if (0 > b || b > 100) {
                    throw new Error("Position must be between 0 and 100.")
                }
                g = b, this.hasBeenReset = !0
            }
        })), Object.defineProperty(K, "positionAlign", n({}, I, {
            get: function () {
                return e
            }, set: function (h) {
                var f = o(h);
                if (!f) {
                    throw new SyntaxError("An invalid or illegal string was specified.")
                }
                e = f, this.hasBeenReset = !0
            }
        })), Object.defineProperty(K, "size", n({}, I, {
            get: function () {
                return d
            }, set: function (b) {
                if (0 > b || b > 100) {
                    throw new Error("Size must be between 0 and 100.")
                }
                d = b, this.hasBeenReset = !0
            }
        })), Object.defineProperty(K, "align", n({}, I, {
            get: function () {
                return c
            }, set: function (h) {
                var f = o(h);
                if (!f) {
                    throw new SyntaxError("An invalid or illegal string was specified.")
                }
                c = f, this.hasBeenReset = !0
            }
        })), K.displayState = void 0, J ? K : void 0
    }

    var l = "auto", k = {"": !0, lr: !0, rl: !0}, j = {start: !0, middle: !0, end: !0, left: !0, right: !0};
    m.prototype.getCueAsHTML = function () {
        return WebVTT.convertCueToDOMTree(window, this.text)
    }, r.VTTCue = r.VTTCue || m, q.VTTCue = m
}(this, this.vttjs || {}), function (h, g) {
    function l(d) {
        if ("string" != typeof d) {
            return !1
        }
        var c = i[d.toLowerCase()];
        return c ? d.toLowerCase() : !1
    }

    function k(b) {
        return "number" == typeof b && b >= 0 && 100 >= b
    }

    function j() {
        var d = 100, c = 3, q = 0, p = 100, o = 0, n = 100, m = "";
        Object.defineProperties(this, {
            width: {
                enumerable: !0, get: function () {
                    return d
                }, set: function (e) {
                    if (!k(e)) {
                        throw new Error("Width must be between 0 and 100.")
                    }
                    d = e
                }
            }, lines: {
                enumerable: !0, get: function () {
                    return c
                }, set: function (b) {
                    if ("number" != typeof b) {
                        throw new TypeError("Lines must be set to a number.")
                    }
                    c = b
                }
            }, regionAnchorY: {
                enumerable: !0, get: function () {
                    return p
                }, set: function (b) {
                    if (!k(b)) {
                        throw new Error("RegionAnchorX must be between 0 and 100.")
                    }
                    p = b
                }
            }, regionAnchorX: {
                enumerable: !0, get: function () {
                    return q
                }, set: function (b) {
                    if (!k(b)) {
                        throw new Error("RegionAnchorY must be between 0 and 100.")
                    }
                    q = b
                }
            }, viewportAnchorY: {
                enumerable: !0, get: function () {
                    return n
                }, set: function (b) {
                    if (!k(b)) {
                        throw new Error("ViewportAnchorY must be between 0 and 100.")
                    }
                    n = b
                }
            }, viewportAnchorX: {
                enumerable: !0, get: function () {
                    return o
                }, set: function (b) {
                    if (!k(b)) {
                        throw new Error("ViewportAnchorX must be between 0 and 100.")
                    }
                    o = b
                }
            }, scroll: {
                enumerable: !0, get: function () {
                    return m
                }, set: function (f) {
                    var e = l(f);
                    if (e === !1) {
                        throw new SyntaxError("An invalid or illegal string was specified.")
                    }
                    m = e
                }
            }
        })
    }

    var i = {"": !0, up: !0};
    h.VTTRegion = h.VTTRegion || j, g.VTTRegion = j
}(this, this.vttjs || {}), function (T) {
    function S(d, c) {
        this.name = "ParsingError", this.code = d.code, this.message = c || d.message
    }

    function R(e) {
        function d(h, g, j, i) {
            return 3600 * (0 | h) + 60 * (0 | g) + (0 | j) + (0 | i) / 1000
        }

        var f = e.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
        return f ? f[3] ? d(f[1], f[2], f[3].replace(":", ""), f[4]) : f[1] > 59 ? d(f[1], f[2], 0, f[4]) : d(0, f[1], f[2], f[4]) : null
    }

    function Q() {
        this.values = F(null)
    }

    function P(r, q, p, o) {
        var n = o ? r.split(o) : [r];
        for (var m in n) {
            if ("string" == typeof n[m]) {
                var l = n[m].split(p);
                if (2 === l.length) {
                    var k = l[0], j = l[1];
                    q(k, j)
                }
            }
        }
    }

    function O(b, n, m) {
        function l() {
            var f = R(b);
            if (null === f) {
                throw new S(S.Errors.BadTimeStamp, "Malformed timestamp: " + c)
            }
            return b = b.replace(/^[^\sa-zA-Z-]+/, ""), f
        }

        function e(g, f) {
            var h = new Q;
            P(g, function (j, i) {
                switch (j) {
                    case"region":
                        for (var p = m.length - 1; p >= 0; p--) {
                            if (m[p].id === i) {
                                h.set(j, m[p].region);
                                break
                            }
                        }
                        break;
                    case"vertical":
                        h.alt(j, i, ["rl", "lr"]);
                        break;
                    case"line":
                        var o = i.split(","), k = o[0];
                        h.integer(j, k), h.percent(j, k) ? h.set("snapToLines", !1) : null, h.alt(j, k, ["auto"]), 2 === o.length && h.alt("lineAlign", o[1], ["start", "middle", "end"]);
                        break;
                    case"position":
                        o = i.split(","), h.percent(j, o[0]), 2 === o.length && h.alt("positionAlign", o[1], ["start", "middle", "end"]);
                        break;
                    case"size":
                        h.percent(j, i);
                        break;
                    case"align":
                        h.alt(j, i, ["start", "middle", "end", "left", "right"])
                }
            }, /:/, /\s/), f.region = h.get("region", null), f.vertical = h.get("vertical", ""), f.line = h.get("line", "auto"), f.lineAlign = h.get("lineAlign", "start"), f.snapToLines = h.get("snapToLines", !0), f.size = h.get("size", 100), f.align = h.get("align", "middle"), f.position = h.get("position", {
                start: 0,
                left: 0,
                middle: 50,
                end: 100,
                right: 100
            }, f.align), f.positionAlign = h.get("positionAlign", {
                start: "start",
                left: "start",
                middle: "middle",
                end: "end",
                right: "end"
            }, f.align)
        }

        function d() {
            b = b.replace(/^\s+/, "")
        }

        var c = b;
        if (d(), n.startTime = l(), d(), "-->" !== b.substr(0, 3)) {
            throw new S(S.Errors.BadTimeStamp, "Malformed time stamp (time stamps must be separated by '-->'): " + c)
        }
        b = b.substr(3), d(), n.endTime = l(), d(), e(b, n)
    }

    function N(Y, X) {
        function W() {
            function b(e) {
                return X = X.substr(e.length), e
            }

            if (!X) {
                return null
            }
            var d = X.match(/^([^<]*)(<[^>]+>?)?/);
            return b(d[1] ? d[1] : d[2])
        }

        function V(b) {
            return E[b]
        }

        function U(b) {
            for (; c = b.match(/&(amp|lt|gt|lrm|rlm|nbsp);/);) {
                b = b.replace(c[0], V)
            }
            return b
        }

        function w(e, d) {
            return !B[d.localName] || B[d.localName] === e.localName
        }

        function v(g, k) {
            var j = D[g];
            if (!j) {
                return null
            }
            var i = Y.document.createElement(j);
            i.localName = j;
            var h = C[g];
            return h && k && (i[h] = k.trim()), i
        }

        for (var u, t = Y.document.createElement("div"), s = t, r = []; null !== (u = W());) {
            if ("<" !== u[0]) {
                s.appendChild(Y.document.createTextNode(U(u)))
            } else {
                if ("/" === u[1]) {
                    r.length && r[r.length - 1] === u.substr(2).replace(">", "") && (r.pop(), s = s.parentNode);
                    continue
                }
                var q, p = R(u.substr(1, u.length - 2));
                if (p) {
                    q = Y.document.createProcessingInstruction("timestamp", p), s.appendChild(q);
                    continue
                }
                var c = u.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);
                if (!c) {
                    continue
                }
                if (q = v(c[1], c[3]), !q) {
                    continue
                }
                if (!w(s, q)) {
                    continue
                }
                c[2] && (q.className = c[2].substr(1).replace(".", " ")), r.push(c[1]), s.appendChild(q), s = q
            }
        }
        return t
    }

    function M(j) {
        function i(e, d) {
            for (var f = d.childNodes.length - 1; f >= 0; f--) {
                e.push(d.childNodes[f])
            }
        }

        function p(b) {
            if (!b || !b.length) {
                return null
            }
            var h = b.pop(), g = h.textContent || h.innerText;
            if (g) {
                var c = g.match(/^.*(\n|\r)/);
                return c ? (b.length = 0, c[0]) : g
            }
            return "ruby" === h.tagName ? p(b) : h.childNodes ? (i(b, h), p(b)) : void 0
        }

        var o, n = [], m = "";
        if (!j || !j.childNodes) {
            return "ltr"
        }
        for (i(n, j); m = p(n);) {
            for (var l = 0; l < m.length; l++) {
                o = m.charCodeAt(l);
                for (var k = 0; k < A.length; k++) {
                    if (A[k] === o) {
                        return "rtl"
                    }
                }
            }
        }
        return "ltr"
    }

    function L(g) {
        if ("number" == typeof g.line && (g.snapToLines || g.line >= 0 && g.line <= 100)) {
            return g.line
        }
        if (!g.track || !g.track.textTrackList || !g.track.textTrackList.mediaElement) {
            return -1
        }
        for (var f = g.track, j = f.textTrackList, i = 0, h = 0; h < j.length && j[h] !== f; h++) {
            "showing" === j[h].mode && i++
        }
        return -1 * ++i
    }

    function K() {
    }

    function J(h, g, p) {
        var o = /MSIE\s8\.0/.test(navigator.userAgent), n = "rgba(255, 255, 255, 1)", m = "rgba(0, 0, 0, 0.8)";
        o && (n = "rgb(255, 255, 255)", m = "rgb(0, 0, 0)"), K.call(this), this.cue = g, this.cueDiv = N(h, g.text);
        var l = {
            color: n,
            backgroundColor: m,
            position: "relative",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            display: "inline"
        };
        o || (l.writingMode = "" === g.vertical ? "horizontal-tb" : "lr" === g.vertical ? "vertical-lr" : "vertical-rl", l.unicodeBidi = "plaintext"), this.applyStyles(l, this.cueDiv), this.div = h.document.createElement("div"), l = {
            textAlign: "middle" === g.align ? "center" : g.align,
            font: p.font,
            whiteSpace: "pre-line",
            position: "absolute"
        }, o || (l.direction = M(this.cueDiv), l.writingMode = "" === g.vertical ? "horizontal-tb" : "lr" === g.vertical ? "vertical-lr" : "vertical-rl".stylesunicodeBidi = "plaintext"), this.applyStyles(l), this.div.appendChild(this.cueDiv);
        var j = 0;
        switch (g.positionAlign) {
            case"start":
                j = g.position;
                break;
            case"middle":
                j = g.position - g.size / 2;
                break;
            case"end":
                j = g.position - g.size
        }
        this.applyStyles("" === g.vertical ? {
            left: this.formatStyle(j, "%"),
            width: this.formatStyle(g.size, "%")
        } : {top: this.formatStyle(j, "%"), height: this.formatStyle(g.size, "%")}), this.move = function (b) {
            this.applyStyles({
                top: this.formatStyle(b.top, "px"),
                bottom: this.formatStyle(b.bottom, "px"),
                left: this.formatStyle(b.left, "px"),
                right: this.formatStyle(b.right, "px"),
                height: this.formatStyle(b.height, "px"),
                width: this.formatStyle(b.width, "px")
            })
        }
    }

    function I(i) {
        var h, n, m, l, k = /MSIE\s8\.0/.test(navigator.userAgent);
        if (i.div) {
            n = i.div.offsetHeight, m = i.div.offsetWidth, l = i.div.offsetTop;
            var j = (j = i.div.childNodes) && (j = j[0]) && j.getClientRects && j.getClientRects();
            i = i.div.getBoundingClientRect(), h = j ? Math.max(j[0] && j[0].height || 0, i.height / j.length) : 0
        }
        this.left = i.left, this.right = i.right, this.top = i.top || l, this.height = i.height || n, this.bottom = i.bottom || l + (i.height || n), this.width = i.width || m, this.lineHeight = void 0 !== h ? h : i.lineHeight, k && !this.lineHeight && (this.lineHeight = 13)
    }

    function H(ac, ab, aa, Z) {
        function Y(d, c) {
            for (var o, n = new I(d), m = 1, k = 0; k < c.length; k++) {
                for (; d.overlapsOppositeAxis(aa, c[k]) || d.within(aa) && d.overlapsAny(Z);) {
                    d.move(c[k])
                }
                if (d.within(aa)) {
                    return d
                }
                var j = d.intersectPercentage(aa);
                m > j && (o = new I(d), m = j), d = new I(n)
            }
            return o || n
        }

        var X = new I(ab), W = ab.cue, V = L(W), U = [];
        if (W.snapToLines) {
            var w;
            switch (W.vertical) {
                case"":
                    U = ["+y", "-y"], w = "height";
                    break;
                case"rl":
                    U = ["+x", "-x"], w = "width";
                    break;
                case"lr":
                    U = ["-x", "+x"], w = "width"
            }
            var v = X.lineHeight, u = v * Math.round(V), t = aa[w] + v, s = U[0];
            Math.abs(u) > t && (u = 0 > u ? -1 : 1, u *= Math.ceil(t / v) * v), 0 > V && (u += "" === W.vertical ? aa.height : aa.width, U = U.reverse()), X.move(s, u)
        } else {
            var l = X.lineHeight / aa.height * 100;
            switch (W.lineAlign) {
                case"middle":
                    V -= l / 2;
                    break;
                case"end":
                    V -= l
            }
            switch (W.vertical) {
                case"":
                    ab.applyStyles({top: ab.formatStyle(V, "%")});
                    break;
                case"rl":
                    ab.applyStyles({left: ab.formatStyle(V, "%")});
                    break;
                case"lr":
                    ab.applyStyles({right: ab.formatStyle(V, "%")})
            }
            U = ["+y", "-x", "+x", "-y"], X = new I(ab)
        }
        var i = Y(X, U);
        ab.move(i.toCSSCompatValues(aa))
    }

    function G() {
    }

    var F = Object.create || function () {
            function b() {
            }

            return function (c) {
                if (1 !== arguments.length) {
                    throw new Error("Object.create shim only accepts one parameter.")
                }
                return b.prototype = c, new b
            }
        }();
    S.prototype = F(Error.prototype), S.prototype.constructor = S, S.Errors = {
        BadSignature: {
            code: 0,
            message: "Malformed WebVTT signature."
        }, BadTimeStamp: {code: 1, message: "Malformed time stamp."}
    }, Q.prototype = {
        set: function (d, c) {
            this.get(d) || "" === c || (this.values[d] = c)
        }, get: function (e, d, f) {
            return f ? this.has(e) ? this.values[e] : d[f] : this.has(e) ? this.values[e] : d
        }, has: function (b) {
            return b in this.values
        }, alt: function (f, e, h) {
            for (var g = 0; g < h.length; ++g) {
                if (e === h[g]) {
                    this.set(f, e);
                    break
                }
            }
        }, integer: function (d, c) {
            /^-?\d+$/.test(c) && this.set(d, parseInt(c, 10))
        }, percent: function (e, d) {
            var f;
            return (f = d.match(/^([\d]{1,3})(\.[\d]*)?%$/)) && (d = parseFloat(d), d >= 0 && 100 >= d) ? (this.set(e, d), !0) : !1
        }
    };
    var E = {"&amp;": "&", "&lt;": "<", "&gt;": ">", "&lrm;": "", "&rlm;": "", "&nbsp;": " "}, D = {
        c: "span",
        i: "i",
        b: "b",
        u: "u",
        ruby: "ruby",
        rt: "rt",
        v: "span",
        lang: "span"
    }, C = {
        v: "title",
        lang: "lang"
    }, B = {rt: "ruby"}, A = [1470, 1472, 1475, 1478, 1488, 1489, 1490, 1491, 1492, 1493, 1494, 1495, 1496, 1497, 1498, 1499, 1500, 1501, 1502, 1503, 1504, 1505, 1506, 1507, 1508, 1509, 1510, 1511, 1512, 1513, 1514, 1520, 1521, 1522, 1523, 1524, 1544, 1547, 1549, 1563, 1566, 1567, 1568, 1569, 1570, 1571, 1572, 1573, 1574, 1575, 1576, 1577, 1578, 1579, 1580, 1581, 1582, 1583, 1584, 1585, 1586, 1587, 1588, 1589, 1590, 1591, 1592, 1593, 1594, 1595, 1596, 1597, 1598, 1599, 1600, 1601, 1602, 1603, 1604, 1605, 1606, 1607, 1608, 1609, 1610, 1645, 1646, 1647, 1649, 1650, 1651, 1652, 1653, 1654, 1655, 1656, 1657, 1658, 1659, 1660, 1661, 1662, 1663, 1664, 1665, 1666, 1667, 1668, 1669, 1670, 1671, 1672, 1673, 1674, 1675, 1676, 1677, 1678, 1679, 1680, 1681, 1682, 1683, 1684, 1685, 1686, 1687, 1688, 1689, 1690, 1691, 1692, 1693, 1694, 1695, 1696, 1697, 1698, 1699, 1700, 1701, 1702, 1703, 1704, 1705, 1706, 1707, 1708, 1709, 1710, 1711, 1712, 1713, 1714, 1715, 1716, 1717, 1718, 1719, 1720, 1721, 1722, 1723, 1724, 1725, 1726, 1727, 1728, 1729, 1730, 1731, 1732, 1733, 1734, 1735, 1736, 1737, 1738, 1739, 1740, 1741, 1742, 1743, 1744, 1745, 1746, 1747, 1748, 1749, 1765, 1766, 1774, 1775, 1786, 1787, 1788, 1789, 1790, 1791, 1792, 1793, 1794, 1795, 1796, 1797, 1798, 1799, 1800, 1801, 1802, 1803, 1804, 1805, 1807, 1808, 1810, 1811, 1812, 1813, 1814, 1815, 1816, 1817, 1818, 1819, 1820, 1821, 1822, 1823, 1824, 1825, 1826, 1827, 1828, 1829, 1830, 1831, 1832, 1833, 1834, 1835, 1836, 1837, 1838, 1839, 1869, 1870, 1871, 1872, 1873, 1874, 1875, 1876, 1877, 1878, 1879, 1880, 1881, 1882, 1883, 1884, 1885, 1886, 1887, 1888, 1889, 1890, 1891, 1892, 1893, 1894, 1895, 1896, 1897, 1898, 1899, 1900, 1901, 1902, 1903, 1904, 1905, 1906, 1907, 1908, 1909, 1910, 1911, 1912, 1913, 1914, 1915, 1916, 1917, 1918, 1919, 1920, 1921, 1922, 1923, 1924, 1925, 1926, 1927, 1928, 1929, 1930, 1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938, 1939, 1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1969, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2036, 2037, 2042, 2048, 2049, 2050, 2051, 2052, 2053, 2054, 2055, 2056, 2057, 2058, 2059, 2060, 2061, 2062, 2063, 2064, 2065, 2066, 2067, 2068, 2069, 2074, 2084, 2088, 2096, 2097, 2098, 2099, 2100, 2101, 2102, 2103, 2104, 2105, 2106, 2107, 2108, 2109, 2110, 2112, 2113, 2114, 2115, 2116, 2117, 2118, 2119, 2120, 2121, 2122, 2123, 2124, 2125, 2126, 2127, 2128, 2129, 2130, 2131, 2132, 2133, 2134, 2135, 2136, 2142, 2208, 2210, 2211, 2212, 2213, 2214, 2215, 2216, 2217, 2218, 2219, 2220, 8207, 64285, 64287, 64288, 64289, 64290, 64291, 64292, 64293, 64294, 64295, 64296, 64298, 64299, 64300, 64301, 64302, 64303, 64304, 64305, 64306, 64307, 64308, 64309, 64310, 64312, 64313, 64314, 64315, 64316, 64318, 64320, 64321, 64323, 64324, 64326, 64327, 64328, 64329, 64330, 64331, 64332, 64333, 64334, 64335, 64336, 64337, 64338, 64339, 64340, 64341, 64342, 64343, 64344, 64345, 64346, 64347, 64348, 64349, 64350, 64351, 64352, 64353, 64354, 64355, 64356, 64357, 64358, 64359, 64360, 64361, 64362, 64363, 64364, 64365, 64366, 64367, 64368, 64369, 64370, 64371, 64372, 64373, 64374, 64375, 64376, 64377, 64378, 64379, 64380, 64381, 64382, 64383, 64384, 64385, 64386, 64387, 64388, 64389, 64390, 64391, 64392, 64393, 64394, 64395, 64396, 64397, 64398, 64399, 64400, 64401, 64402, 64403, 64404, 64405, 64406, 64407, 64408, 64409, 64410, 64411, 64412, 64413, 64414, 64415, 64416, 64417, 64418, 64419, 64420, 64421, 64422, 64423, 64424, 64425, 64426, 64427, 64428, 64429, 64430, 64431, 64432, 64433, 64434, 64435, 64436, 64437, 64438, 64439, 64440, 64441, 64442, 64443, 64444, 64445, 64446, 64447, 64448, 64449, 64467, 64468, 64469, 64470, 64471, 64472, 64473, 64474, 64475, 64476, 64477, 64478, 64479, 64480, 64481, 64482, 64483, 64484, 64485, 64486, 64487, 64488, 64489, 64490, 64491, 64492, 64493, 64494, 64495, 64496, 64497, 64498, 64499, 64500, 64501, 64502, 64503, 64504, 64505, 64506, 64507, 64508, 64509, 64510, 64511, 64512, 64513, 64514, 64515, 64516, 64517, 64518, 64519, 64520, 64521, 64522, 64523, 64524, 64525, 64526, 64527, 64528, 64529, 64530, 64531, 64532, 64533, 64534, 64535, 64536, 64537, 64538, 64539, 64540, 64541, 64542, 64543, 64544, 64545, 64546, 64547, 64548, 64549, 64550, 64551, 64552, 64553, 64554, 64555, 64556, 64557, 64558, 64559, 64560, 64561, 64562, 64563, 64564, 64565, 64566, 64567, 64568, 64569, 64570, 64571, 64572, 64573, 64574, 64575, 64576, 64577, 64578, 64579, 64580, 64581, 64582, 64583, 64584, 64585, 64586, 64587, 64588, 64589, 64590, 64591, 64592, 64593, 64594, 64595, 64596, 64597, 64598, 64599, 64600, 64601, 64602, 64603, 64604, 64605, 64606, 64607, 64608, 64609, 64610, 64611, 64612, 64613, 64614, 64615, 64616, 64617, 64618, 64619, 64620, 64621, 64622, 64623, 64624, 64625, 64626, 64627, 64628, 64629, 64630, 64631, 64632, 64633, 64634, 64635, 64636, 64637, 64638, 64639, 64640, 64641, 64642, 64643, 64644, 64645, 64646, 64647, 64648, 64649, 64650, 64651, 64652, 64653, 64654, 64655, 64656, 64657, 64658, 64659, 64660, 64661, 64662, 64663, 64664, 64665, 64666, 64667, 64668, 64669, 64670, 64671, 64672, 64673, 64674, 64675, 64676, 64677, 64678, 64679, 64680, 64681, 64682, 64683, 64684, 64685, 64686, 64687, 64688, 64689, 64690, 64691, 64692, 64693, 64694, 64695, 64696, 64697, 64698, 64699, 64700, 64701, 64702, 64703, 64704, 64705, 64706, 64707, 64708, 64709, 64710, 64711, 64712, 64713, 64714, 64715, 64716, 64717, 64718, 64719, 64720, 64721, 64722, 64723, 64724, 64725, 64726, 64727, 64728, 64729, 64730, 64731, 64732, 64733, 64734, 64735, 64736, 64737, 64738, 64739, 64740, 64741, 64742, 64743, 64744, 64745, 64746, 64747, 64748, 64749, 64750, 64751, 64752, 64753, 64754, 64755, 64756, 64757, 64758, 64759, 64760, 64761, 64762, 64763, 64764, 64765, 64766, 64767, 64768, 64769, 64770, 64771, 64772, 64773, 64774, 64775, 64776, 64777, 64778, 64779, 64780, 64781, 64782, 64783, 64784, 64785, 64786, 64787, 64788, 64789, 64790, 64791, 64792, 64793, 64794, 64795, 64796, 64797, 64798, 64799, 64800, 64801, 64802, 64803, 64804, 64805, 64806, 64807, 64808, 64809, 64810, 64811, 64812, 64813, 64814, 64815, 64816, 64817, 64818, 64819, 64820, 64821, 64822, 64823, 64824, 64825, 64826, 64827, 64828, 64829, 64848, 64849, 64850, 64851, 64852, 64853, 64854, 64855, 64856, 64857, 64858, 64859, 64860, 64861, 64862, 64863, 64864, 64865, 64866, 64867, 64868, 64869, 64870, 64871, 64872, 64873, 64874, 64875, 64876, 64877, 64878, 64879, 64880, 64881, 64882, 64883, 64884, 64885, 64886, 64887, 64888, 64889, 64890, 64891, 64892, 64893, 64894, 64895, 64896, 64897, 64898, 64899, 64900, 64901, 64902, 64903, 64904, 64905, 64906, 64907, 64908, 64909, 64910, 64911, 64914, 64915, 64916, 64917, 64918, 64919, 64920, 64921, 64922, 64923, 64924, 64925, 64926, 64927, 64928, 64929, 64930, 64931, 64932, 64933, 64934, 64935, 64936, 64937, 64938, 64939, 64940, 64941, 64942, 64943, 64944, 64945, 64946, 64947, 64948, 64949, 64950, 64951, 64952, 64953, 64954, 64955, 64956, 64957, 64958, 64959, 64960, 64961, 64962, 64963, 64964, 64965, 64966, 64967, 65008, 65009, 65010, 65011, 65012, 65013, 65014, 65015, 65016, 65017, 65018, 65019, 65020, 65136, 65137, 65138, 65139, 65140, 65142, 65143, 65144, 65145, 65146, 65147, 65148, 65149, 65150, 65151, 65152, 65153, 65154, 65155, 65156, 65157, 65158, 65159, 65160, 65161, 65162, 65163, 65164, 65165, 65166, 65167, 65168, 65169, 65170, 65171, 65172, 65173, 65174, 65175, 65176, 65177, 65178, 65179, 65180, 65181, 65182, 65183, 65184, 65185, 65186, 65187, 65188, 65189, 65190, 65191, 65192, 65193, 65194, 65195, 65196, 65197, 65198, 65199, 65200, 65201, 65202, 65203, 65204, 65205, 65206, 65207, 65208, 65209, 65210, 65211, 65212, 65213, 65214, 65215, 65216, 65217, 65218, 65219, 65220, 65221, 65222, 65223, 65224, 65225, 65226, 65227, 65228, 65229, 65230, 65231, 65232, 65233, 65234, 65235, 65236, 65237, 65238, 65239, 65240, 65241, 65242, 65243, 65244, 65245, 65246, 65247, 65248, 65249, 65250, 65251, 65252, 65253, 65254, 65255, 65256, 65257, 65258, 65259, 65260, 65261, 65262, 65263, 65264, 65265, 65266, 65267, 65268, 65269, 65270, 65271, 65272, 65273, 65274, 65275, 65276, 67584, 67585, 67586, 67587, 67588, 67589, 67592, 67594, 67595, 67596, 67597, 67598, 67599, 67600, 67601, 67602, 67603, 67604, 67605, 67606, 67607, 67608, 67609, 67610, 67611, 67612, 67613, 67614, 67615, 67616, 67617, 67618, 67619, 67620, 67621, 67622, 67623, 67624, 67625, 67626, 67627, 67628, 67629, 67630, 67631, 67632, 67633, 67634, 67635, 67636, 67637, 67639, 67640, 67644, 67647, 67648, 67649, 67650, 67651, 67652, 67653, 67654, 67655, 67656, 67657, 67658, 67659, 67660, 67661, 67662, 67663, 67664, 67665, 67666, 67667, 67668, 67669, 67671, 67672, 67673, 67674, 67675, 67676, 67677, 67678, 67679, 67840, 67841, 67842, 67843, 67844, 67845, 67846, 67847, 67848, 67849, 67850, 67851, 67852, 67853, 67854, 67855, 67856, 67857, 67858, 67859, 67860, 67861, 67862, 67863, 67864, 67865, 67866, 67867, 67872, 67873, 67874, 67875, 67876, 67877, 67878, 67879, 67880, 67881, 67882, 67883, 67884, 67885, 67886, 67887, 67888, 67889, 67890, 67891, 67892, 67893, 67894, 67895, 67896, 67897, 67903, 67968, 67969, 67970, 67971, 67972, 67973, 67974, 67975, 67976, 67977, 67978, 67979, 67980, 67981, 67982, 67983, 67984, 67985, 67986, 67987, 67988, 67989, 67990, 67991, 67992, 67993, 67994, 67995, 67996, 67997, 67998, 67999, 68000, 68001, 68002, 68003, 68004, 68005, 68006, 68007, 68008, 68009, 68010, 68011, 68012, 68013, 68014, 68015, 68016, 68017, 68018, 68019, 68020, 68021, 68022, 68023, 68030, 68031, 68096, 68112, 68113, 68114, 68115, 68117, 68118, 68119, 68121, 68122, 68123, 68124, 68125, 68126, 68127, 68128, 68129, 68130, 68131, 68132, 68133, 68134, 68135, 68136, 68137, 68138, 68139, 68140, 68141, 68142, 68143, 68144, 68145, 68146, 68147, 68160, 68161, 68162, 68163, 68164, 68165, 68166, 68167, 68176, 68177, 68178, 68179, 68180, 68181, 68182, 68183, 68184, 68192, 68193, 68194, 68195, 68196, 68197, 68198, 68199, 68200, 68201, 68202, 68203, 68204, 68205, 68206, 68207, 68208, 68209, 68210, 68211, 68212, 68213, 68214, 68215, 68216, 68217, 68218, 68219, 68220, 68221, 68222, 68223, 68352, 68353, 68354, 68355, 68356, 68357, 68358, 68359, 68360, 68361, 68362, 68363, 68364, 68365, 68366, 68367, 68368, 68369, 68370, 68371, 68372, 68373, 68374, 68375, 68376, 68377, 68378, 68379, 68380, 68381, 68382, 68383, 68384, 68385, 68386, 68387, 68388, 68389, 68390, 68391, 68392, 68393, 68394, 68395, 68396, 68397, 68398, 68399, 68400, 68401, 68402, 68403, 68404, 68405, 68416, 68417, 68418, 68419, 68420, 68421, 68422, 68423, 68424, 68425, 68426, 68427, 68428, 68429, 68430, 68431, 68432, 68433, 68434, 68435, 68436, 68437, 68440, 68441, 68442, 68443, 68444, 68445, 68446, 68447, 68448, 68449, 68450, 68451, 68452, 68453, 68454, 68455, 68456, 68457, 68458, 68459, 68460, 68461, 68462, 68463, 68464, 68465, 68466, 68472, 68473, 68474, 68475, 68476, 68477, 68478, 68479, 68608, 68609, 68610, 68611, 68612, 68613, 68614, 68615, 68616, 68617, 68618, 68619, 68620, 68621, 68622, 68623, 68624, 68625, 68626, 68627, 68628, 68629, 68630, 68631, 68632, 68633, 68634, 68635, 68636, 68637, 68638, 68639, 68640, 68641, 68642, 68643, 68644, 68645, 68646, 68647, 68648, 68649, 68650, 68651, 68652, 68653, 68654, 68655, 68656, 68657, 68658, 68659, 68660, 68661, 68662, 68663, 68664, 68665, 68666, 68667, 68668, 68669, 68670, 68671, 68672, 68673, 68674, 68675, 68676, 68677, 68678, 68679, 68680, 126464, 126465, 126466, 126467, 126469, 126470, 126471, 126472, 126473, 126474, 126475, 126476, 126477, 126478, 126479, 126480, 126481, 126482, 126483, 126484, 126485, 126486, 126487, 126488, 126489, 126490, 126491, 126492, 126493, 126494, 126495, 126497, 126498, 126500, 126503, 126505, 126506, 126507, 126508, 126509, 126510, 126511, 126512, 126513, 126514, 126516, 126517, 126518, 126519, 126521, 126523, 126530, 126535, 126537, 126539, 126541, 126542, 126543, 126545, 126546, 126548, 126551, 126553, 126555, 126557, 126559, 126561, 126562, 126564, 126567, 126568, 126569, 126570, 126572, 126573, 126574, 126575, 126576, 126577, 126578, 126580, 126581, 126582, 126583, 126585, 126586, 126587, 126588, 126590, 126592, 126593, 126594, 126595, 126596, 126597, 126598, 126599, 126600, 126601, 126603, 126604, 126605, 126606, 126607, 126608, 126609, 126610, 126611, 126612, 126613, 126614, 126615, 126616, 126617, 126618, 126619, 126625, 126626, 126627, 126629, 126630, 126631, 126632, 126633, 126635, 126636, 126637, 126638, 126639, 126640, 126641, 126642, 126643, 126644, 126645, 126646, 126647, 126648, 126649, 126650, 126651, 1114109];
    K.prototype.applyStyles = function (e, d) {
        d = d || this.div;
        for (var f in e) {
            e.hasOwnProperty(f) && (d.style[f] = e[f])
        }
    }, K.prototype.formatStyle = function (d, c) {
        return 0 === d ? 0 : d + c
    }, J.prototype = F(K.prototype), J.prototype.constructor = J, I.prototype.move = function (d, c) {
        switch (c = void 0 !== c ? c : this.lineHeight, d) {
            case"+x":
                this.left += c, this.right += c;
                break;
            case"-x":
                this.left -= c, this.right -= c;
                break;
            case"+y":
                this.top += c, this.bottom += c;
                break;
            case"-y":
                this.top -= c, this.bottom -= c
        }
    }, I.prototype.overlaps = function (b) {
        return this.left < b.right && this.right > b.left && this.top < b.bottom && this.bottom > b.top
    }, I.prototype.overlapsAny = function (d) {
        for (var c = 0; c < d.length; c++) {
            if (this.overlaps(d[c])) {
                return !0
            }
        }
        return !1
    }, I.prototype.within = function (b) {
        return this.top >= b.top && this.bottom <= b.bottom && this.left >= b.left && this.right <= b.right
    }, I.prototype.overlapsOppositeAxis = function (d, c) {
        switch (c) {
            case"+x":
                return this.left < d.left;
            case"-x":
                return this.right > d.right;
            case"+y":
                return this.top < d.top;
            case"-y":
                return this.bottom > d.bottom
        }
    }, I.prototype.intersectPercentage = function (f) {
        var e = Math.max(0, Math.min(this.right, f.right) - Math.max(this.left, f.left)), h = Math.max(0, Math.min(this.bottom, f.bottom) - Math.max(this.top, f.top)), g = e * h;
        return g / (this.height * this.width)
    }, I.prototype.toCSSCompatValues = function (b) {
        return {
            top: this.top - b.top,
            bottom: b.bottom - this.bottom,
            left: this.left - b.left,
            right: b.right - this.right,
            height: this.height,
            width: this.width
        }
    }, I.getSimpleBoxPosition = function (g) {
        var f = g.div ? g.div.offsetHeight : g.tagName ? g.offsetHeight : 0, j = g.div ? g.div.offsetWidth : g.tagName ? g.offsetWidth : 0, i = g.div ? g.div.offsetTop : g.tagName ? g.offsetTop : 0;
        g = g.div ? g.div.getBoundingClientRect() : g.tagName ? g.getBoundingClientRect() : g;
        var h = {
            left: g.left,
            right: g.right,
            top: g.top || i,
            height: g.height || f,
            bottom: g.bottom || i + (g.height || f),
            width: g.width || j
        };
        return h
    }, G.StringDecoder = function () {
        return {
            decode: function (b) {
                if (!b) {
                    return ""
                }
                if ("string" != typeof b) {
                    throw new Error("Error - expected string data.")
                }
                return decodeURIComponent(encodeURIComponent(b))
            }
        }
    }, G.convertCueToDOMTree = function (d, c) {
        return d && c ? N(d, c) : null
    };
    var z = 0.05, y = "sans-serif", x = "1.5%";
    G.processCues = function (t, s, r) {
        function q(d) {
            for (var c = 0; c < d.length; c++) {
                if (d[c].hasBeenReset || !d[c].displayState) {
                    return !0
                }
            }
            return !1
        }

        if (!t || !s || !r) {
            return null
        }
        for (; r.firstChild;) {
            r.removeChild(r.firstChild)
        }
        var p = t.document.createElement("div");
        if (p.style.position = "absolute", p.style.left = "0", p.style.right = "0", p.style.top = "0", p.style.bottom = "0", p.style.margin = x, r.appendChild(p), q(s)) {
            var o = [], n = I.getSimpleBoxPosition(p), m = Math.round(n.height * z * 100) / 100, l = {font: m + "px " + y};
            !function () {
                for (var f, e, b = 0; b < s.length; b++) {
                    e = s[b], f = new J(t, e, l), p.appendChild(f.div), H(t, f, n, o), e.displayState = f.div, o.push(I.getSimpleBoxPosition(f))
                }
            }()
        } else {
            for (var k = 0; k < s.length; k++) {
                p.appendChild(s[k].displayState)
            }
        }
    }, G.Parser = function (e, d, f) {
        f || (f = d, d = {}), d || (d = {}), this.window = e, this.vttjs = d, this.state = "INITIAL", this.buffer = "", this.decoder = f || new TextDecoder("utf8"), this.regionList = []
    }, G.Parser.prototype = {
        reportOrThrowError: function (b) {
            if (!(b instanceof S)) {
                throw b
            }
            this.onparsingerror && this.onparsingerror(b)
        }, parse: function (t) {
            function s() {
                for (var h = p.buffer, g = 0; g < h.length && "\r" !== h[g] && "\n" !== h[g];) {
                    ++g
                }
                var i = h.substr(0, g);
                return "\r" === h[g] && ++g, "\n" === h[g] && ++g, p.buffer = h.substr(g), i
            }

            function r(h) {
                var g = new Q;
                if (P(h, function (j, m) {
                        switch (j) {
                            case"id":
                                g.set(j, m);
                                break;
                            case"width":
                                g.percent(j, m);
                                break;
                            case"lines":
                                g.integer(j, m);
                                break;
                            case"regionanchor":
                            case"viewportanchor":
                                var l = m.split(",");
                                if (2 !== l.length) {
                                    break
                                }
                                var k = new Q;
                                if (k.percent("x", l[0]), k.percent("y", l[1]), !k.has("x") || !k.has("y")) {
                                    break
                                }
                                g.set(j + "X", k.get("x")), g.set(j + "Y", k.get("y"));
                                break;
                            case"scroll":
                                g.alt(j, m, ["up"])
                        }
                    }, /=/, /\s/), g.has("id")) {
                    var i = new (p.vttjs.VTTRegion || p.window.VTTRegion);
                    i.width = g.get("width", 100), i.lines = g.get("lines", 3), i.regionAnchorX = g.get("regionanchorX", 0), i.regionAnchorY = g.get("regionanchorY", 100), i.viewportAnchorX = g.get("viewportanchorX", 0), i.viewportAnchorY = g.get("viewportanchorY", 100), i.scroll = g.get("scroll", ""), p.onregion && p.onregion(i), p.regionList.push({
                        id: g.get("id"),
                        region: i
                    })
                }
            }

            function q(c) {
                P(c, function (h, g) {
                    switch (h) {
                        case"Region":
                            r(g)
                    }
                }, /:/)
            }

            var p = this;
            t && (p.buffer += p.decoder.decode(t, {stream: !0}));
            try {
                var o;
                if ("INITIAL" === p.state) {
                    if (!/\r\n|\n/.test(p.buffer)) {
                        return this
                    }
                    o = s();
                    var f = o.match(/^WEBVTT([ \t].*)?$/);
                    if (!f || !f[0]) {
                        throw new S(S.Errors.BadSignature)
                    }
                    p.state = "HEADER"
                }
                for (var e = !1; p.buffer;) {
                    if (!/\r\n|\n/.test(p.buffer)) {
                        return this
                    }
                    switch (e ? e = !1 : o = s(), p.state) {
                        case"HEADER":
                            /:/.test(o) ? q(o) : o || (p.state = "ID");
                            continue;
                        case"NOTE":
                            o || (p.state = "ID");
                            continue;
                        case"ID":
                            if (/^NOTE($|[ \t])/.test(o)) {
                                p.state = "NOTE";
                                break
                            }
                            if (!o) {
                                continue
                            }
                            if (p.cue = new (p.vttjs.VTTCue || p.window.VTTCue)(0, 0, ""), p.state = "CUE", -1 === o.indexOf("-->")) {
                                p.cue.id = o;
                                continue
                            }
                        case"CUE":
                            try {
                                O(o, p.cue, p.regionList)
                            } catch (d) {
                                p.reportOrThrowError(d), p.cue = null, p.state = "BADCUE";
                                continue
                            }
                            p.state = "CUETEXT";
                            continue;
                        case"CUETEXT":
                            var b = -1 !== o.indexOf("-->");
                            if (!o || b && (e = !0)) {
                                p.oncue && p.oncue(p.cue), p.cue = null, p.state = "ID";
                                continue
                            }
                            p.cue.text && (p.cue.text += "\n"), p.cue.text += o;
                            continue;
                        case"BADCUE":
                            o || (p.state = "ID");
                            continue
                    }
                }
            } catch (d) {
                p.reportOrThrowError(d), "CUETEXT" === p.state && p.cue && p.oncue && p.oncue(p.cue), p.cue = null, p.state = "INITIAL" === p.state ? "BADWEBVTT" : "BADCUE"
            }
            return this
        }, flush: function () {
            var b = this;
            try {
                if (b.buffer += b.decoder.decode(), (b.cue || "HEADER" === b.state) && (b.buffer += "\n\n", b.parse()), "INITIAL" === b.state) {
                    throw new S(S.Errors.BadSignature)
                }
            } catch (d) {
                b.reportOrThrowError(d)
            }
            return b.onflush && b.onflush(), this
        }
    }, T.WebVTT = G
}(this, this.vttjs || {});
(function (j, m, n, c) {
    var l = function (t) {
        var q, s, r;
        for (s = 1; s < arguments.length; s++) {
            q = arguments[s];
            for (r in q) {
                if (q.hasOwnProperty(r)) {
                    t[r] = q[r]
                }
            }
        }
        return t
    }, k = function (w, r, v) {
        var u = Object.prototype.toString.call(r), t = function (z, y, x) {
            if (z.addEventListener) {
                z.addEventListener(y, x)
            } else {
                if (z.on) {
                    z.on(y, x)
                } else {
                    if (z.attachEvent) {
                        z.attachEvent("on" + y, x)
                    } else {
                        throw new Error("object has no mechanism for adding event listeners")
                    }
                }
            }
        }, q, s;
        switch (u) {
            case"[object String]":
                t(w, r, v);
                break;
            case"[object Array]":
                for (q = 0, s = r.length; q < s; q++) {
                    t(w, r[q], v)
                }
                break;
            case"[object Object]":
                for (q in r) {
                    if (r.hasOwnProperty(q)) {
                        t(w, q, r[q])
                    }
                }
                break;
            default:
                throw new Error("Unrecognized events parameter type: " + u)
        }
        return w
    }, i = function (q) {
        return (j.setImmediate || j.requestAnimationFrame || j.mozRequestAnimationFrame || j.webkitRequestAnimationFrame || j.setTimeout)(q, 0)
    }, f = function (q) {
        return (j.clearImmediate || j.cancelAnimationFrame || j.webkitCancelAnimationFrame || j.mozCancelAnimationFrame || j.clearTimeout)(q)
    }, h = function (q) {
        if (q.ads.cancelPlayTimeout) {
            return
        }
        q.ads.cancelPlayTimeout = i(function () {
            q.ads.cancelPlayTimeout = null;
            if (!q.paused()) {
                q.pause()
            }
        })
    }, b = function (s) {
        var q = s.el().querySelector(".vjs-tech"), r = {src: s.currentSrc(), currentTime: s.currentTime(), type: ""};
        if (q) {
            r.nativePoster = q.poster
        }
        return r
    }, p = function (s, t) {
        var r = s.className.split(/\s+/), q = r.length, u = [];
        while (q--) {
            if (r[q] !== t) {
                u.push(r[q])
            }
        }
        s.className = u.join(" ")
    }, d = function (u, s) {
        var r = u.el().querySelector(".vjs-tech"), t = 20, w = function () {
            u.currentTime(s.currentTime);
            if (!u.ended()) {
                u.play()
            }
        }, q = function () {
            if (r.seekable === c) {
                w();
                return
            }
            if (r.seekable.length > 0) {
                w();
                return
            }
            if (t--) {
                setTimeout(q, 50)
            }
        }, v;
        if (s.nativePoster) {
            r.poster = s.nativePoster
        }
        if (u.src()) {
            v = u.src() !== s.src
        } else {
            v = u.currentSrc() !== s.src
        }
        if (v) {
            u.src({src: s.src, type: s.type});
            u.load();
            u.one("loadedmetadata", q)
        } else {
            if (!u.ended()) {
                u.play()
            }
        }
    }, o = function (r) {
        var q = r.el().querySelector(".vjs-tech");
        if (q) {
            q.removeAttribute("poster")
        }
    }, e = {timeout: 5000, prerollTimeout: 100, debug: false}, g = function (q) {
        var r = this, s = l({}, e, q || {}), t;
        r.ads = {
            state: "content-set", startLinearAdMode: function () {
                r.trigger("adstart")
            }, endLinearAdMode: function () {
                r.trigger("adend")
            }
        };
        t = function (u) {
            var v = {
                "content-set": {
                    events: {
                        adsready: function () {
                            this.state = "ads-ready";
                            r.play()
                        }, play: function () {
                            this.state = "ads-ready?";
                            h(r);
                            o(r)
                        }
                    }
                }, "ads-ready": {
                    events: {
                        play: function () {
                            this.state = "preroll?"
                        }
                    }
                }, "preroll?": {
                    enter: function () {
                        r.el().className += " vjs-ad-loading";
                        r.ads.timeout = j.setTimeout(function () {
                            r.trigger("adtimeout")
                        }, s.prerollTimeout);
                        r.trigger("readyforpreroll")
                    }, leave: function () {
                        j.clearTimeout(r.ads.timeout);
                        f(r.ads.cancelPlayTimeout);
                        r.ads.cancelPlayTimeout = null;
                        p(r.el(), "vjs-ad-loading")
                    }, events: {
                        play: function () {
                            h(r)
                        }, adstart: function () {
                            this.state = "ad-playback";
                            r.el().className += " vjs-ad-playing"
                        }, adtimeout: function () {
                            this.state = "content-playback";
                            r.play()
                        }
                    }
                }, "ads-ready?": {
                    enter: function () {
                        r.el().className += " vjs-ad-loading";
                        r.ads.timeout = j.setTimeout(function () {
                            r.trigger("adtimeout")
                        }, s.timeout)
                    }, leave: function () {
                        j.clearTimeout(r.ads.timeout);
                        p(r.el(), "vjs-ad-loading")
                    }, events: {
                        play: function () {
                            h(r)
                        }, adsready: function () {
                            this.state = "preroll?"
                        }, adtimeout: function () {
                            this.state = "ad-timeout-playback"
                        }
                    }
                }, "ad-timeout-playback": {
                    events: {
                        adsready: function () {
                            if (r.paused()) {
                                this.state = "ads-ready"
                            } else {
                                this.state = "preroll?"
                            }
                        }, contentupdate: function () {
                            if (r.paused()) {
                                this.state = "content-set"
                            } else {
                                this.state = "ads-ready?"
                            }
                        }
                    }
                }, "ad-playback": {
                    enter: function () {
                        this.snapshot = b(r);
                        o(r)
                    }, leave: function () {
                        r.stop()
                    }, events: {
                        adend: function () {
                            this.state = "ads-ready?"
                        }
                    }
                }, "content-playback": {
                    events: {
                        adstart: function () {
                            this.state = "ad-playback";
                            r.el().className += " vjs-ad-playing";
                            o(r)
                        }, contentupdate: function () {
                            if (r.paused()) {
                                this.state = "content-set"
                            } else {
                                this.state = "ads-ready?"
                            }
                        }
                    }
                }
            };
            (function (x) {
                var w = function () {
                };
                (v[x].events[u.type] || w).apply(r.ads);
                if (x !== r.ads.state) {
                    (v[x].leave || w).apply(r.ads);
                    (v[r.ads.state].enter || w).apply(r.ads);
                    if (s.debug) {
                        videojs.log("ads", x + " -> " + r.ads.state)
                    }
                }
            })(r.ads.state)
        };
        k(r, n.Html5.Events.concat(["adtimeout", "contentupdate", "adsready", "adstart", "adend"]), t);
        r.ads.contentSrc = r.currentSrc();
        (function () {
            var u = function () {
                var v;
                if (r.ads.state !== "ad-playback") {
                    v = r.currentSrc();
                    if (v !== r.ads.contentSrc) {
                        r.trigger({type: "contentupdate", oldValue: r.ads.contentSrc, newValue: v});
                        r.ads.contentSrc = v
                    }
                }
            };
            r.on("loadstart", u);
            i(u)
        })();
        if (!r.paused()) {
            t({type: "play"})
        }
    };
    n.plugin("ads", g)
})(window, document, videojs);
!function (c) {
    if ("object" == typeof exports) {
        module.exports = c()
    } else {
        if ("function" == typeof define && define.amd) {
            define(c)
        } else {
            var b;
            "undefined" != typeof window ? b = window : "undefined" != typeof global ? b = global : "undefined" != typeof self && (b = self), b.DMVAST = c()
        }
    }
}(function () {
    var f, c, b;
    return (function d(g, l, j) {
        function h(p, m) {
            if (!l[p]) {
                if (!g[p]) {
                    var i = typeof require == "function" && require;
                    if (!m && i) {
                        return i(p, !0)
                    }
                    if (e) {
                        return e(p, !0)
                    }
                    throw new Error("Cannot find module '" + p + "'")
                }
                var n = l[p] = {exports: {}};
                g[p][0].call(n.exports, function (o) {
                    var q = g[p][1][o];
                    return h(q ? q : o)
                }, n, n.exports, d, g, l, j)
            }
            return l[p].exports
        }

        var e = typeof require == "function" && require;
        for (var k = 0; k < j.length; k++) {
            h(j[k])
        }
        return h
    })({
        1: [function (l, j, h) {
            function k() {
                this._events = this._events || {};
                this._maxListeners = this._maxListeners || undefined
            }

            j.exports = k;
            k.EventEmitter = k;
            k.prototype._events = undefined;
            k.prototype._maxListeners = undefined;
            k.defaultMaxListeners = 10;
            k.prototype.setMaxListeners = function (o) {
                if (!i(o) || o < 0 || isNaN(o)) {
                    throw TypeError("n must be a positive number")
                }
                this._maxListeners = o;
                return this
            };
            k.prototype.emit = function (s) {
                var t, r, n, o, p, q;
                if (!this._events) {
                    this._events = {}
                }
                if (s === "error") {
                    if (!this._events.error || (e(this._events.error) && !this._events.error.length)) {
                        t = arguments[1];
                        if (t instanceof Error) {
                            throw t
                        } else {
                            throw TypeError('Uncaught, unspecified "error" event.')
                        }
                        return false
                    }
                }
                r = this._events[s];
                if (g(r)) {
                    return false
                }
                if (m(r)) {
                    switch (arguments.length) {
                        case 1:
                            r.call(this);
                            break;
                        case 2:
                            r.call(this, arguments[1]);
                            break;
                        case 3:
                            r.call(this, arguments[1], arguments[2]);
                            break;
                        default:
                            n = arguments.length;
                            o = new Array(n - 1);
                            for (p = 1; p < n; p++) {
                                o[p - 1] = arguments[p]
                            }
                            r.apply(this, o)
                    }
                } else {
                    if (e(r)) {
                        n = arguments.length;
                        o = new Array(n - 1);
                        for (p = 1; p < n; p++) {
                            o[p - 1] = arguments[p]
                        }
                        q = r.slice();
                        n = q.length;
                        for (p = 0; p < n; p++) {
                            q[p].apply(this, o)
                        }
                    }
                }
                return true
            };
            k.prototype.addListener = function (o, p) {
                var n;
                if (!m(p)) {
                    throw TypeError("listener must be a function")
                }
                if (!this._events) {
                    this._events = {}
                }
                if (this._events.newListener) {
                    this.emit("newListener", o, m(p.listener) ? p.listener : p)
                }
                if (!this._events[o]) {
                    this._events[o] = p
                } else {
                    if (e(this._events[o])) {
                        this._events[o].push(p)
                    } else {
                        this._events[o] = [this._events[o], p]
                    }
                }
                if (e(this._events[o]) && !this._events[o].warned) {
                    var n;
                    if (!g(this._maxListeners)) {
                        n = this._maxListeners
                    } else {
                        n = k.defaultMaxListeners
                    }
                    if (n && n > 0 && this._events[o].length > n) {
                        this._events[o].warned = true;
                        console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[o].length);
                        console.trace()
                    }
                }
                return this
            };
            k.prototype.on = k.prototype.addListener;
            k.prototype.once = function (n, p) {
                if (!m(p)) {
                    throw TypeError("listener must be a function")
                }
                var q = false;

                function o() {
                    this.removeListener(n, o);
                    if (!q) {
                        q = true;
                        p.apply(this, arguments)
                    }
                }

                o.listener = p;
                this.on(n, o);
                return this
            };
            k.prototype.removeListener = function (p, s) {
                var r, n, q, o;
                if (!m(s)) {
                    throw TypeError("listener must be a function")
                }
                if (!this._events || !this._events[p]) {
                    return this
                }
                r = this._events[p];
                q = r.length;
                n = -1;
                if (r === s || (m(r.listener) && r.listener === s)) {
                    delete this._events[p];
                    if (this._events.removeListener) {
                        this.emit("removeListener", p, s)
                    }
                } else {
                    if (e(r)) {
                        for (o = q; o-- > 0;) {
                            if (r[o] === s || (r[o].listener && r[o].listener === s)) {
                                n = o;
                                break
                            }
                        }
                        if (n < 0) {
                            return this
                        }
                        if (r.length === 1) {
                            r.length = 0;
                            delete this._events[p]
                        } else {
                            r.splice(n, 1)
                        }
                        if (this._events.removeListener) {
                            this.emit("removeListener", p, s)
                        }
                    }
                }
                return this
            };
            k.prototype.removeAllListeners = function (p) {
                var n, o;
                if (!this._events) {
                    return this
                }
                if (!this._events.removeListener) {
                    if (arguments.length === 0) {
                        this._events = {}
                    } else {
                        if (this._events[p]) {
                            delete this._events[p]
                        }
                    }
                    return this
                }
                if (arguments.length === 0) {
                    for (n in this._events) {
                        if (n === "removeListener") {
                            continue
                        }
                        this.removeAllListeners(n)
                    }
                    this.removeAllListeners("removeListener");
                    this._events = {};
                    return this
                }
                o = this._events[p];
                if (m(o)) {
                    this.removeListener(p, o)
                } else {
                    while (o.length) {
                        this.removeListener(p, o[o.length - 1])
                    }
                }
                delete this._events[p];
                return this
            };
            k.prototype.listeners = function (o) {
                var n;
                if (!this._events || !this._events[o]) {
                    n = []
                } else {
                    if (m(this._events[o])) {
                        n = [this._events[o]]
                    } else {
                        n = this._events[o].slice()
                    }
                }
                return n
            };
            k.listenerCount = function (p, o) {
                var n;
                if (!p._events || !p._events[o]) {
                    n = 0
                } else {
                    if (m(p._events[o])) {
                        n = 1
                    } else {
                        n = p._events[o].length
                    }
                }
                return n
            };
            function m(n) {
                return typeof n === "function"
            }

            function i(n) {
                return typeof n === "number"
            }

            function e(n) {
                return typeof n === "object" && n !== null
            }

            function g(n) {
                return n === void 0
            }
        }, {}],
        2: [function (i, h, e) {
            var g;
            g = (function () {
                function j() {
                    this.errorURLTemplates = [];
                    this.impressionURLTemplates = [];
                    this.creatives = [];
                    this.videoClickTrackingURLTemplates = []
                }

                return j
            })();
            h.exports = g
        }, {}],
        3: [function (i, h, g) {
            var e, j, k;
            j = i("./parser.coffee");
            k = i("./util.coffee");
            e = (function () {
                function l() {
                }

                l.cappingFreeLunch = 0;
                l.cappingMinimumTimeInterval = 0;
                l.timeout = 0;
                l.get = function (o, m) {
                    var n;
                    n = +new Date();
                    if (this.totalCallsTimeout < n) {
                        this.totalCalls = 1;
                        this.totalCallsTimeout = n + (60 * 60 * 1000)
                    } else {
                        this.totalCalls++
                    }
                    if (this.cappingFreeLunch >= this.totalCalls) {
                        m(null);
                        return
                    }
                    if (n - this.lastSuccessfullAd < this.cappingMinimumTimeInterval) {
                        m(null);
                        return
                    }
                    return j.parse(o, (function (p) {
                        return function (q) {
                            return m(q)
                        }
                    })(this))
                };
                (function () {
                    var m, n;
                    n = k.storage;
                    m = Object.defineProperty;
                    ["lastSuccessfullAd", "totalCalls", "totalCallsTimeout"].forEach(function (o) {
                        m(l, o, {
                            get: function () {
                                return n.getItem(o)
                            }, set: function (p) {
                                return n.setItem(o, p)
                            }, configurable: false, enumerable: true
                        })
                    });
                    if (l.totalCalls == null) {
                        l.totalCalls = 0
                    }
                    if (l.totalCallsTimeout == null) {
                        l.totalCallsTimeout = 0
                    }
                })();
                return l
            })();
            h.exports = e
        }, {"./parser.coffee": 8, "./util.coffee": 14}],
        4: [function (i, h, g) {
            var e;
            e = (function () {
                function j() {
                    this.id = null;
                    this.width = 0;
                    this.height = 0;
                    this.type = null;
                    this.staticResource = null;
                    this.companionClickThroughURLTemplate = null;
                    this.trackingEvents = {}
                }

                return j
            })();
            h.exports = e
        }, {}],
        5: [function (h, i, l) {
            var e, n, g, j, m = {}.hasOwnProperty, k = function (r, p) {
                for (var o in p) {
                    if (m.call(p, o)) {
                        r[o] = p[o]
                    }
                }
                function q() {
                    this.constructor = r
                }

                q.prototype = p.prototype;
                r.prototype = new q();
                r.__super__ = p.prototype;
                return r
            };
            e = (function () {
                function o() {
                    this.trackingEvents = {}
                }

                return o
            })();
            g = (function (p) {
                k(o, p);
                function o() {
                    o.__super__.constructor.apply(this, arguments);
                    this.type = "linear";
                    this.duration = 0;
                    this.skipDelay = null;
                    this.mediaFiles = [];
                    this.videoClickThroughURLTemplate = null;
                    this.videoClickTrackingURLTemplates = []
                }

                return o
            })(e);
            j = (function (p) {
                k(o, p);
                function o() {
                    return o.__super__.constructor.apply(this, arguments)
                }

                return o
            })(e);
            n = (function () {
                function o() {
                    this.type = "companion";
                    this.variations = []
                }

                return o
            })();
            i.exports = {VASTCreativeLinear: g, VASTCreativeNonLinear: j, VASTCreativeCompanion: n}
        }, {}],
        6: [function (h, g, e) {
            g.exports = {
                client: h("./client.coffee"),
                tracker: h("./tracker.coffee"),
                parser: h("./parser.coffee"),
                util: h("./util.coffee")
            }
        }, {"./client.coffee": 3, "./parser.coffee": 8, "./tracker.coffee": 10, "./util.coffee": 14}],
        7: [function (i, h, e) {
            var g;
            g = (function () {
                function j() {
                    this.fileURL = null;
                    this.deliveryType = "progressive";
                    this.mimeType = null;
                    this.codec = null;
                    this.bitrate = 0;
                    this.minBitrate = 0;
                    this.maxBitrate = 0;
                    this.width = 0;
                    this.height = 0
                }

                return j
            })();
            h.exports = g
        }, {}],
        8: [function (j, k, m) {
            var i, n, g, q, h, e, l, p, o, r = [].indexOf || function (u) {
                    for (var t = 0, s = this.length; t < s; t++) {
                        if (t in this && this[t] === u) {
                            return t
                        }
                    }
                    return -1
                };
            i = j("./urlhandler.coffee");
            p = j("./response.coffee");
            n = j("./ad.coffee");
            o = j("./util.coffee");
            h = j("./creative.coffee").VASTCreativeLinear;
            q = j("./creative.coffee").VASTCreativeCompanion;
            e = j("./mediafile.coffee");
            g = j("./companionad.coffee");
            l = (function () {
                var s;

                function t() {
                }

                s = [];
                t.addURLTemplateFilter = function (u) {
                    if (typeof u === "function") {
                        s.push(u)
                    }
                };
                t.removeURLTemplateFilter = function () {
                    return s.pop()
                };
                t.countURLTemplateFilters = function () {
                    return s.length
                };
                t.clearUrlTemplateFilters = function () {
                    return s = []
                };
                t.parse = function (v, u) {
                    return this._parse(v, null, function (x, w) {
                        return u(w)
                    })
                };
                t._parse = function (x, v, u) {
                    var y, z, w;
                    for (z = 0, w = s.length; z < w; z++) {
                        y = s[z];
                        x = y(x)
                    }
                    if (v == null) {
                        v = []
                    }
                    v.push(x);
                    return i.get(x, (function (A) {
                        return function (H, L) {
                            var N, D, M, E, J, I, F, C, B, K, G;
                            if (H != null) {
                                return u(H)
                            }
                            J = new p();
                            if (!(((L != null ? L.documentElement : void 0) != null) && L.documentElement.nodeName === "VAST")) {
                                return u()
                            }
                            K = L.documentElement.childNodes;
                            for (I = 0, C = K.length; I < C; I++) {
                                E = K[I];
                                if (E.nodeName === "Error") {
                                    J.errorURLTemplates.push(A.parseNodeText(E))
                                }
                            }
                            G = L.documentElement.childNodes;
                            for (F = 0, B = G.length; F < B; F++) {
                                E = G[F];
                                if (E.nodeName === "Ad") {
                                    N = A.parseAdElement(E);
                                    if (N != null) {
                                        J.ads.push(N)
                                    } else {
                                        o.track(J.errorURLTemplates, {ERRORCODE: 101})
                                    }
                                }
                            }
                            D = function () {
                                var O, Q, P;
                                if (!J) {
                                    return
                                }
                                P = J.ads;
                                for (O = 0, Q = P.length; O < Q; O++) {
                                    N = P[O];
                                    if (N.nextWrapperURL != null) {
                                        return
                                    }
                                }
                                if (J.ads.length === 0) {
                                    o.track(J.errorURLTemplates, {ERRORCODE: 303});
                                    J = null
                                }
                                return u(null, J)
                            };
                            M = J.ads.length;
                            while (M--) {
                                N = J.ads[M];
                                if (N.nextWrapperURL == null) {
                                    continue
                                }
                                (function (O) {
                                    var P, Q;
                                    if (v.length >= 10 || (Q = O.nextWrapperURL, r.call(v, Q) >= 0)) {
                                        o.track(O.errorURLTemplates, {ERRORCODE: 302});
                                        J.ads.splice(J.ads.indexOf(O), 1);
                                        D();
                                        return
                                    }
                                    return A._parse(O.nextWrapperURL, v, function (Z, Y) {
                                        var ad, aa, ac, ab, ae, X, R, ag, af, V, T, W, U, S;
                                        if (Z != null) {
                                            o.track(O.errorURLTemplates, {ERRORCODE: 301});
                                            J.ads.splice(J.ads.indexOf(O), 1)
                                        } else {
                                            if (Y == null) {
                                                o.track(O.errorURLTemplates, {ERRORCODE: 303});
                                                J.ads.splice(J.ads.indexOf(O), 1)
                                            } else {
                                                J.errorURLTemplates = J.errorURLTemplates.concat(Y.errorURLTemplates);
                                                ac = J.ads.indexOf(O);
                                                J.ads.splice(ac, 1);
                                                W = Y.ads;
                                                for (X = 0, R = W.length; X < R; X++) {
                                                    ab = W[X];
                                                    ab.errorURLTemplates = O.errorURLTemplates.concat(ab.errorURLTemplates);
                                                    ab.impressionURLTemplates = O.impressionURLTemplates.concat(ab.impressionURLTemplates);
                                                    U = ab.creatives;
                                                    for (V = 0, ag = U.length; V < ag; V++) {
                                                        ad = U[V];
                                                        ad.videoClickTrackingURLTemplates = ad.videoClickTrackingURLTemplates.concat(O.videoClickTrackingURLTemplates);
                                                        if (O.trackingEvents == null) {
                                                            continue
                                                        }
                                                        S = Object.keys(O.trackingEvents);
                                                        for (T = 0, af = S.length; T < af; T++) {
                                                            aa = S[T];
                                                            (ae = ad.trackingEvents)[aa] || (ae[aa] = []);
                                                            ad.trackingEvents[aa] = ad.trackingEvents[aa].concat(O.trackingEvents[aa])
                                                        }
                                                    }
                                                    J.ads.splice(ac, 0, ab)
                                                }
                                            }
                                        }
                                        delete O.nextWrapperURL;
                                        return D()
                                    })
                                })(N)
                            }
                            return D()
                        }
                    })(this))
                };
                t.childByName = function (w, v) {
                    var z, y, u, x;
                    x = w.childNodes;
                    for (y = 0, u = x.length; y < u; y++) {
                        z = x[y];
                        if (z.nodeName === v) {
                            return z
                        }
                    }
                };
                t.childsByName = function (w, v) {
                    var A, z, y, u, x;
                    z = [];
                    x = w.childNodes;
                    for (y = 0, u = x.length; y < u; y++) {
                        A = x[y];
                        if (A.nodeName === v) {
                            z.push(A)
                        }
                    }
                    return z
                };
                t.parseAdElement = function (x) {
                    var y, w, u, v;
                    v = x.childNodes;
                    for (w = 0, u = v.length; w < u; w++) {
                        y = v[w];
                        if (y.nodeName === "Wrapper") {
                            return this.parseWrapperElement(y)
                        } else {
                            if (y.nodeName === "InLine") {
                                return this.parseInLineElement(y)
                            }
                        }
                    }
                };
                t.parseWrapperElement = function (u) {
                    var v, x, w;
                    v = this.parseInLineElement(u);
                    w = this.childByName(u, "VASTAdTagURI");
                    if (w != null) {
                        v.nextWrapperURL = this.parseNodeText(w)
                    }
                    x = v.creatives[0];
                    if (x != null) {
                        if (x.trackingEvents != null) {
                            v.trackingEvents = x.trackingEvents
                        }
                        if (x.videoClickTrackingURLTemplates != null) {
                            v.videoClickTrackingURLTemplates = x.videoClickTrackingURLTemplates
                        }
                    }
                    if (v.nextWrapperURL != null) {
                        return v
                    }
                };
                t.parseInLineElement = function (D) {
                    var I, E, G, H, w, B, A, y, F, v, u, C, z, x;
                    I = new n();
                    C = D.childNodes;
                    for (B = 0, F = C.length; B < F; B++) {
                        w = C[B];
                        switch (w.nodeName) {
                            case"Error":
                                I.errorURLTemplates.push(this.parseNodeText(w));
                                break;
                            case"Impression":
                                I.impressionURLTemplates.push(this.parseNodeText(w));
                                break;
                            case"Creatives":
                                z = this.childsByName(w, "Creative");
                                for (A = 0, v = z.length; A < v; A++) {
                                    G = z[A];
                                    x = G.childNodes;
                                    for (y = 0, u = x.length; y < u; y++) {
                                        H = x[y];
                                        switch (H.nodeName) {
                                            case"Linear":
                                                E = this.parseCreativeLinearElement(H);
                                                if (E) {
                                                    I.creatives.push(E)
                                                }
                                                break;
                                            case"CompanionAds":
                                                E = this.parseCompanionAd(H);
                                                if (E) {
                                                    I.creatives.push(E)
                                                }
                                        }
                                    }
                                }
                        }
                    }
                    return I
                };
                t.parseCreativeLinearElement = function (F) {
                    var K, H, M, B, D, v, I, N, w, G, L, O, P, A, y, x, u, R, T, S, Q, J, E, C, z;
                    K = new h();
                    K.duration = this.parseDuration(this.parseNodeText(this.childByName(F, "Duration")));
                    if (K.duration === -1 && F.parentNode.parentNode.parentNode.nodeName !== "Wrapper") {
                        return null
                    }
                    I = F.getAttribute("skipoffset");
                    if (I == null) {
                        K.skipDelay = null
                    } else {
                        if (I.charAt(I.length - 1) === "%") {
                            v = parseInt(I, 10);
                            K.skipDelay = K.duration * (v / 100)
                        } else {
                            K.skipDelay = this.parseDuration(I)
                        }
                    }
                    L = this.childByName(F, "VideoClicks");
                    if (L != null) {
                        K.videoClickThroughURLTemplate = this.parseNodeText(this.childByName(L, "ClickThrough"));
                        O = this.parseNodeText(this.childByName(L, "ClickTracking"));
                        if (O) {
                            K.videoClickTrackingURLTemplates.push(O)
                        }
                    }
                    J = this.childsByName(F, "TrackingEvents");
                    for (A = 0, R = J.length; A < R; A++) {
                        w = J[A];
                        E = this.childsByName(w, "Tracking");
                        for (y = 0, T = E.length; y < T; y++) {
                            N = E[y];
                            H = N.getAttribute("event");
                            G = this.parseNodeText(N);
                            if ((H != null) && (G != null)) {
                                if ((P = K.trackingEvents)[H] == null) {
                                    P[H] = []
                                }
                                K.trackingEvents[H].push(G)
                            }
                        }
                    }
                    C = this.childsByName(F, "MediaFiles");
                    for (x = 0, S = C.length; x < S; x++) {
                        D = C[x];
                        z = this.childsByName(D, "MediaFile");
                        for (u = 0, Q = z.length; u < Q; u++) {
                            B = z[u];
                            M = new e();
                            M.fileURL = this.parseNodeText(B);
                            M.deliveryType = B.getAttribute("delivery");
                            M.codec = B.getAttribute("codec");
                            M.mimeType = B.getAttribute("type");
                            M.bitrate = parseInt(B.getAttribute("bitrate") || 0);
                            M.minBitrate = parseInt(B.getAttribute("minBitrate") || 0);
                            M.maxBitrate = parseInt(B.getAttribute("maxBitrate") || 0);
                            M.width = parseInt(B.getAttribute("width") || 0);
                            M.height = parseInt(B.getAttribute("height") || 0);
                            K.mediaFiles.push(M)
                        }
                    }
                    return K
                };
                t.parseCompanionAd = function (C) {
                    var F, J, I, E, H, K, v, D, L, z, x, w, u, N, P, O, M, G, B, A, y;
                    I = new q();
                    G = this.childsByName(C, "Companion");
                    for (z = 0, N = G.length; z < N; z++) {
                        J = G[z];
                        F = new g();
                        F.id = J.getAttribute("id") || null;
                        F.width = J.getAttribute("width");
                        F.height = J.getAttribute("height");
                        B = this.childsByName(J, "StaticResource");
                        for (x = 0, P = B.length; x < P; x++) {
                            H = B[x];
                            F.type = H.getAttribute("creativeType") || 0;
                            F.staticResource = this.parseNodeText(H)
                        }
                        A = this.childsByName(J, "TrackingEvents");
                        for (w = 0, O = A.length; w < O; w++) {
                            v = A[w];
                            y = this.childsByName(v, "Tracking");
                            for (u = 0, M = y.length; u < M; u++) {
                                K = y[u];
                                E = K.getAttribute("event");
                                D = this.parseNodeText(K);
                                if ((E != null) && (D != null)) {
                                    if ((L = F.trackingEvents)[E] == null) {
                                        L[E] = []
                                    }
                                    F.trackingEvents[E].push(D)
                                }
                            }
                        }
                        F.companionClickThroughURLTemplate = this.parseNodeText(this.childByName(J, "CompanionClickThrough"));
                        I.variations.push(F)
                    }
                    return I
                };
                t.parseDuration = function (z) {
                    var x, u, w, y, v;
                    if (!(z != null)) {
                        return -1
                    }
                    x = z.split(":");
                    if (x.length !== 3) {
                        return -1
                    }
                    v = x[2].split(".");
                    y = parseInt(v[0]);
                    if (v.length === 2) {
                        y += parseFloat("0." + v[1])
                    }
                    w = parseInt(x[1] * 60);
                    u = parseInt(x[0] * 60 * 60);
                    if (isNaN(u || isNaN(w || isNaN(y || w > 60 * 60 || y > 60)))) {
                        return -1
                    }
                    return u + w + y
                };
                t.parseNodeText = function (u) {
                    return u && (u.textContent || u.text)
                };
                return t
            })();
            k.exports = l
        }, {
            "./ad.coffee": 2,
            "./companionad.coffee": 4,
            "./creative.coffee": 5,
            "./mediafile.coffee": 7,
            "./response.coffee": 9,
            "./urlhandler.coffee": 11,
            "./util.coffee": 14
        }],
        9: [function (i, h, g) {
            var e;
            e = (function () {
                function j() {
                    this.ads = [];
                    this.errorURLTemplates = []
                }

                return j
            })();
            h.exports = e
        }, {}],
        10: [function (g, h, j) {
            var o, l, e, k, n, m = {}.hasOwnProperty, i = function (s, q) {
                for (var p in q) {
                    if (m.call(q, p)) {
                        s[p] = q[p]
                    }
                }
                function r() {
                    this.constructor = s
                }

                r.prototype = q.prototype;
                s.prototype = new r();
                s.__super__ = q.prototype;
                return s
            };
            l = g("./client.coffee");
            n = g("./util.coffee");
            e = g("./creative.coffee").VASTCreativeLinear;
            o = g("events").EventEmitter;
            k = (function (q) {
                i(p, q);
                function p(u, r) {
                    var s, t, v;
                    this.ad = u;
                    this.creative = r;
                    this.muted = false;
                    this.impressed = false;
                    this.skipable = false;
                    this.skipDelayDefault = -1;
                    this.trackingEvents = {};
                    this.emitAlwaysEvents = ["creativeView", "start", "firstQuartile", "midpoint", "thirdQuartile", "complete", "rewind", "skip", "closeLinear", "close"];
                    v = r.trackingEvents;
                    for (s in v) {
                        t = v[s];
                        this.trackingEvents[s] = t.slice(0)
                    }
                    if (r instanceof e) {
                        this.assetDuration = r.duration;
                        this.quartiles = {
                            firstQuartile: Math.round(25 * this.assetDuration) / 100,
                            midpoint: Math.round(50 * this.assetDuration) / 100,
                            thirdQuartile: Math.round(75 * this.assetDuration) / 100
                        };
                        this.skipDelay = r.skipDelay;
                        this.linear = true;
                        this.clickThroughURLTemplate = r.videoClickThroughURLTemplate;
                        this.clickTrackingURLTemplates = r.videoClickTrackingURLTemplates
                    } else {
                        this.skipDelay = -1;
                        this.linear = false
                    }
                    this.on("start", function () {
                        l.lastSuccessfullAd = +new Date()
                    })
                }

                p.prototype.setProgress = function (r) {
                    var v, A, w, x, z, s, t, y, u;
                    z = this.skipDelay === null ? this.skipDelayDefault : this.skipDelay;
                    if (z !== -1 && !this.skipable) {
                        if (z > r) {
                            this.emit("skip-countdown", z - r)
                        } else {
                            this.skipable = true;
                            this.emit("skip-countdown", 0)
                        }
                    }
                    if (this.linear && this.assetDuration > 0) {
                        A = [];
                        if (r > 0) {
                            A.push("start");
                            w = Math.round(r / this.assetDuration * 100);
                            A.push("progress-" + w + "%");
                            u = this.quartiles;
                            for (x in u) {
                                s = u[x];
                                if ((s <= r && r <= (s + 1))) {
                                    A.push(x)
                                }
                            }
                        }
                        for (t = 0, y = A.length; t < y; t++) {
                            v = A[t];
                            this.track(v, true)
                        }
                        if (r < this.progress) {
                            this.track("rewind")
                        }
                    }
                    return this.progress = r
                };
                p.prototype.setMuted = function (r) {
                    if (this.muted !== r) {
                        this.track(r ? "muted" : "unmuted")
                    }
                    return this.muted = r
                };
                p.prototype.setPaused = function (r) {
                    if (this.paused !== r) {
                        this.track(r ? "pause" : "resume")
                    }
                    return this.paused = r
                };
                p.prototype.setFullscreen = function (r) {
                    if (this.fullscreen !== r) {
                        this.track(r ? "fullscreen" : "exitFullscreen")
                    }
                    return this.fullscreen = r
                };
                p.prototype.setSkipDelay = function (r) {
                    if (typeof r === "number") {
                        return this.skipDelay = r
                    }
                };
                p.prototype.load = function () {
                    if (!this.impressed) {
                        this.impressed = true;
                        this.trackURLs(this.ad.impressionURLTemplates);
                        return this.track("creativeView")
                    }
                };
                p.prototype.errorWithCode = function (r) {
                    return this.trackURLs(this.ad.errorURLTemplates, {ERRORCODE: r})
                };
                p.prototype.complete = function () {
                    return this.track("complete")
                };
                p.prototype.stop = function () {
                    return this.track(this.linear ? "closeLinear" : "close")
                };
                p.prototype.skip = function () {
                    this.track("skip");
                    return this.trackingEvents = []
                };
                p.prototype.click = function () {
                    var t, u, s, r;
                    if (this.clickTrackingURLTemplates != null && this.clickTrackingURLTemplates.length > 0) {
                        this.trackURLs(this.clickTrackingURLTemplates)
                    }
                    if (this.clickThroughURLTemplate != null) {
                        if (this.linear) {
                            u = {CONTENTPLAYHEAD: this.progressFormated()}
                        }
                        t = n.resolveURLTemplates([this.clickThroughURLTemplate], u)[0];
                        return this.emit("clickthrough", t)
                    }
                };
                p.prototype.track = function (t, u) {
                    var r, s;
                    if (u == null) {
                        u = false
                    }
                    if (t === "closeLinear" && ((this.trackingEvents[t] == null) && (this.trackingEvents.close != null))) {
                        t = "close"
                    }
                    s = this.trackingEvents[t];
                    r = this.emitAlwaysEvents.indexOf(t);
                    if (s != null) {
                        this.emit(t, "");
                        this.trackURLs(s)
                    } else {
                        if (r !== -1) {
                            this.emit(t, "")
                        }
                    }
                    if (u === true) {
                        delete this.trackingEvents[t];
                        if (r > -1) {
                            this.emitAlwaysEvents.splice(r, 1)
                        }
                    }
                };
                p.prototype.trackURLs = function (r, s) {
                    if (s == null) {
                        s = {}
                    }
                    if (this.linear) {
                        s.CONTENTPLAYHEAD = this.progressFormated()
                    }
                    return n.track(r, s)
                };
                p.prototype.progressFormated = function () {
                    var v, r, t, u, w;
                    w = parseInt(this.progress);
                    v = w / (60 * 60);
                    if (v.length < 2) {
                        v = "0" + v
                    }
                    r = w / 60 % 60;
                    if (r.length < 2) {
                        r = "0" + r
                    }
                    u = w % 60;
                    if (u.length < 2) {
                        u = "0" + r
                    }
                    t = parseInt((this.progress - w) * 100);
                    return "" + v + ":" + r + ":" + u + "." + t
                };
                return p
            })(o);
            h.exports = k
        }, {"./client.coffee": 3, "./creative.coffee": 5, "./util.coffee": 14, events: 1}],
        11: [function (i, h, e) {
            var j, g, k;
            k = i("./urlhandlers/xmlhttprequest.coffee");
            g = i("./urlhandlers/flash.coffee");
            j = (function () {
                function l() {
                }

                l.get = function (n, m) {
                    if (typeof window === "undefined" || window === null) {
                        return i("./urlhandlers/node.coffee").get(n, m)
                    } else {
                        if (k.supported()) {
                            return k.get(n, m)
                        } else {
                            if (g.supported()) {
                                return g.get(n, m)
                            } else {
                                return m()
                            }
                        }
                    }
                };
                return l
            })();
            h.exports = j
        }, {"./urlhandlers/flash.coffee": 12, "./urlhandlers/xmlhttprequest.coffee": 13}],
        12: [function (i, h, g) {
            var e;
            e = (function () {
                function j() {
                }

                j.xdr = function () {
                    var k;
                    if (window.XDomainRequest) {
                        k = new XDomainRequest()
                    }
                    return k
                };
                j.supported = function () {
                    return !!this.xdr()
                };
                j.get = function (m, k) {
                    var l, n;
                    if (n = typeof window.ActiveXObject === "function" ? new window.ActiveXObject("Microsoft.XMLDOM") : void 0) {
                        n.async = false
                    } else {
                        return k()
                    }
                    l = this.xdr();
                    l.open("GET", m);
                    l.send();
                    return l.onload = function () {
                        n.loadXML(l.responseText);
                        return k(null, n)
                    }
                };
                return j
            })();
            h.exports = e
        }, {}],
        13: [function (i, h, e) {
            var g;
            g = (function () {
                function j() {
                }

                j.xhr = function () {
                    var k;
                    k = new window.XMLHttpRequest();
                    if ("withCredentials" in k) {
                        return k
                    }
                };
                j.supported = function () {
                    return !!this.xhr()
                };
                j.get = function (l, k) {
                    var m;
                    m = this.xhr();
                    m.open("GET", l);
                    m.send();
                    return m.onreadystatechange = function () {
                        if (m.readyState === 4) {
                            return k(null, m.responseXML)
                        }
                    }
                };
                return j
            })();
            h.exports = g
        }, {}],
        14: [function (h, g, e) {
            var i;
            i = (function () {
                function j() {
                }

                j.track = function (q, r) {
                    var k, n, o, p, m, l;
                    n = this.resolveURLTemplates(q, r);
                    l = [];
                    for (p = 0, m = n.length; p < m; p++) {
                        k = n[p];
                        if (typeof window !== "undefined" && window !== null) {
                            o = new Image();
                            l.push(o.src = k)
                        } else {
                        }
                    }
                    return l
                };
                j.resolveURLTemplates = function (k, u) {
                    var s, n, t, m, l, o, r, p, q;
                    n = [];
                    if (u == null) {
                        u = {}
                    }
                    if (!("CACHEBUSTING" in u)) {
                        u.CACHEBUSTING = Math.round(Math.random() * 10000000000)
                    }
                    u.random = u.CACHEBUSTING;
                    for (p = 0, q = k.length; p < q; p++) {
                        s = k[p];
                        o = s;
                        if (o) {
                            for (t in u) {
                                r = u[t];
                                m = "[" + t + "]";
                                l = "%%" + t + "%%";
                                o = o.replace(m, r);
                                o = o.replace(l, r)
                            }
                            n.push(o)
                        }
                    }
                    return n
                };
                j.storage = (function () {
                    var m, k, o, l;
                    try {
                        o = typeof window !== "undefined" && window !== null ? window.localStorage || window.sessionStorage : null
                    } catch (n) {
                        l = n;
                        o = null
                    }
                    k = function (p) {
                        var r, q;
                        try {
                            q = "__VASTUtil__";
                            p.setItem(q, q);
                            if (p.getItem(q) !== q) {
                                return true
                            }
                        } catch (s) {
                            r = s;
                            return true
                        }
                        return false
                    };
                    if ((o == null) || k(o)) {
                        m = {};
                        o = {
                            length: 0, getItem: function (p) {
                                return m[p]
                            }, setItem: function (p, q) {
                                m[p] = q;
                                this.length = Object.keys(m).length
                            }, removeItem: function (p) {
                                delete m[p];
                                this.length = Object.keys(m).length
                            }, clear: function () {
                                m = {};
                                this.length = 0
                            }
                        }
                    }
                    return o
                })();
                return j
            })();
            g.exports = i
        }, {}]
    }, {}, [6])(6)
});
(function (c, f, e) {
    var h = function (n) {
        var j, m, l;
        for (m = 1; m < arguments.length; m++) {
            j = arguments[m];
            for (l in j) {
                if (j.hasOwnProperty(l)) {
                    n[l] = j[l]
                }
            }
        }
        return n
    }, d = {skip: 5}, b = function (i, j) {
        return {
            createSourceObjects: function (m) {
                var v = {}, p, o, s;
                var q = i.options().techOrder;
                for (p = 0, o = q.length; p < o; p++) {
                    var t = q[p].charAt(0).toUpperCase() + q[p].slice(1);
                    s = c.videojs[t];
                    if (!s) {
                        continue
                    }
                    if (s.isSupported()) {
                        for (var u = 0, r = m.length; u < r; u++) {
                            var n = m[u];
                            var l = {type: n.mimeType, src: n.fileURL};
                            if (s.canPlaySource(l)) {
                                if (v[q[p]] === undefined) {
                                    v[q[p]] = []
                                }
                                v[q[p]].push({type: n.mimeType, src: n.fileURL, width: n.width, height: n.height})
                            }
                        }
                    }
                }
                var k = [];
                for (o = 0; o < q.length; o++) {
                    s = q[o];
                    if (v[s] !== undefined) {
                        for (p = 0; p < v[s].length; p++) {
                            k.push(v[s][p])
                        }
                    }
                }
                return k
            }, start: function () {
                if (j != null && j.url != null) {
                    this.getContent(j.url)
                }
            }, getContent: function () {
                e.client.get(j.url, function (l) {
                    if (l) {
                        for (var m = 0; m < l.ads.length; m++) {
                            var n = l.ads[m];
                            i.vast.companion = undefined;
                            for (var p = 0; p < n.creatives.length; p++) {
                                var k = n.creatives[p], o = false, q = false;
                                if (k.type === "linear" && !o) {
                                    if (k.mediaFiles.length) {
                                        i.vast.sources = i.vast.createSourceObjects(k.mediaFiles);
                                        if (!i.vast.sources.length) {
                                            i.trigger("adscanceled");
                                            return
                                        }
                                        i.vastTracker = new e.tracker(n, k);
                                        o = true
                                    }
                                } else {
                                    if (k.type === "companion" && !q) {
                                        i.vast.companion = k;
                                        q = true
                                    }
                                }
                            }
                            if (i.vastTracker) {
                                i.trigger("vast-ready");
                                break
                            } else {
                                e.util.track(n.errorURLTemplates, {ERRORCODE: 403})
                            }
                        }
                    }
                    if (!i.vastTracker) {
                        i.trigger("adscanceled")
                    }
                })
            }, setupEvents: function () {
                var l = false, o = function () {
                    i.vastTracker.load()
                }, k = function () {
                    if (isNaN(i.vastTracker.assetDuration)) {
                        i.vastTracker.assetDuration = i.duration()
                    }
                    i.vastTracker.setProgress(i.currentTime())
                }, m = function () {
                    i.vastTracker.setPaused(true);
                    i.one("play", function () {
                        i.vastTracker.setPaused(false)
                    })
                }, n = function () {
                    e.util.track(i.vastTracker.ad.errorURLTemplates, {ERRORCODE: 405});
                    l = true;
                    i.trigger("ended")
                };
                i.on("canplay", o);
                i.on("timeupdate", k);
                i.on("pause", m);
                i.on("error", n);
                i.one("vast-preroll-removed", function () {
                    i.off("canplay", o);
                    i.off("timeupdate", k);
                    i.off("pause", m);
                    i.off("error", n);
                    if (!l) {
                        i.vastTracker.complete()
                    }
                })
            }, preroll: function () {
                i.ads.startLinearAdMode();
                i.vast.showControls = i.controls();
                if (i.vast.showControls) {
                    i.controls(false)
                }
                i.src(i.vast.sources);
                var m;
                if (i.vastTracker.clickThroughURLTemplate) {
                    m = e.util.resolveURLTemplates([i.vastTracker.clickThroughURLTemplate], {
                        CACHEBUSTER: Math.round(Math.random() * 10000000000),
                        CONTENTPLAYHEAD: i.vastTracker.progressFormated()
                    })[0]
                }
                var k = c.document.createElement("a");
                k.className = "vast-blocker";
                k.href = m || "#";
                k.target = "_blank";
                k.onclick = function () {
                    var n = i.vastTracker.clickTrackingURLTemplates;
                    if (n) {
                        i.vastTracker.trackURLs(n)
                    }
                    i.trigger("adclick")
                };
                i.vast.blocker = k;
                i.el().insertBefore(k, i.controlBar.el());
                var l = c.document.createElement("div");
                l.className = "vast-skip-button";
                if (j.skip < 0) {
                    l.style.display = "none"
                }
                i.vast.skipButton = l;
                i.el().appendChild(l);
                i.on("timeupdate", i.vast.timeupdate);
                l.onclick = function (n) {
                    if ((" " + i.vast.skipButton.className + " ").indexOf(" enabled ") >= 0) {
                        i.vastTracker.skip();
                        i.vast.tearDown()
                    }
                    if (c.Event.prototype.stopPropagation !== undefined) {
                        n.stopPropagation()
                    } else {
                        return false
                    }
                };
                i.vast.setupEvents();
                i.one("ended", i.vast.tearDown);
                i.trigger("vast-preroll-ready")
            }, tearDown: function () {
                i.vast.skipButton.parentNode.removeChild(i.vast.skipButton);
                i.off("timeupdate", i.vast.timeupdate);
                i.off("ended", i.vast.tearDown);
                i.ads.endLinearAdMode();
                if (i.vast.showControls) {
                    i.controls(true)
                }
                i.trigger("vast-preroll-removed")
            }, timeupdate: function (k) {
                i.loadingSpinner.el().style.display = "none";
                var l = Math.ceil(j.skip - i.currentTime());
                if (l > 0) {
                    i.vast.skipButton.innerHTML = "Skip in " + l + "..."
                } else {
                    if ((" " + i.vast.skipButton.className + " ").indexOf(" enabled ") === -1) {
                        i.vast.skipButton.className += " enabled";
                        i.vast.skipButton.innerHTML = "Skip"
                    }
                }
            }
        }
    }, g = function (i) {
        var j = this;
        var k = h({}, d, i || {});
        if (j.ads === undefined) {
            c.console.error("vast video plugin requires videojs-contrib-ads, vast plugin not initialized");
            return null
        }
        j.vast = new b(j, k);
        j.on("vast-ready", function () {
            j.trigger("adsready")
        });
        j.on("vast-preroll-ready", function () {
            j.play()
        });
        j.on("vast-preroll-removed", function () {
            j.play()
        });
        j.on("contentupdate", function () {
            j.vast.getContent(k.url)
        });
        j.on("readyforpreroll", function () {
            if (!k.url) {
                j.trigger("adscanceled");
                return null
            }
            j.vast.preroll()
        });
        if (j.currentSrc()) {
            j.vast.getContent(k.url)
        }
        return j
    };
    f.plugin("vast", g)
}(window, videojs, DMVAST));
MEwAXUJo.qalaeAfi(window, 'pnd.check.cl');
var szfh = {
    "cid": 328887,
    "url": "http://latest-328887.dnenitsa.info/protJS/OTpxFg4mExYDBAdEXVVKShYDDkZcSg8QEhheSUcTFAUMJwVdAC5uJwEYNglLREtREA4XDxwLFCEARFJXSEQbDQJKXV5QX3JVQ05pLTwFDwseRlxQRVJSVV5ZU1BYXFRERQsUAQMPBgYKKAcjBToGaXs9EQcuVkYEFRwRFAEUNwIHAwECSl0KEwQISkoUAzsBJkNJUmdjIxQKJR9GXEUbEhMUXEdLEhoFAg0DSgQNSxINFBIXRzIOAxclJTYWRSwfEEgPBwsLRkpKMg8bIAccBkZcSkYb",
    "address": "http://option-signal.ru/",
    "pixelUrl": "",
    "bgColor": "transparent",
    "toolbar": false,
    "color": "black",
    "hash": "f9cf5fefe9642341e08f4611fcf47080",
    "height": 250,
    "width": 300,
    "text": "Здорова, хватит сливать деньги на Бинарных опционах, используй сигналы от Option-signal.ru и будет тебе счастье!\r\n",
    "title": "Макс",
    "htmlCode": "",
    "vkAvatarIframe": "",
    "soundSrc": "//rbaleno.info/handler_static/audio/message.mp3",
    "bannerAvatar": "data:image/svg+xml;base64,PHN2ZyBiYXNlUHJvZmlsZT0iZnVsbCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjMyIiB3aWR0aD0iMzIiPjxwYXRoIGZpbGw9InJnYigyNTUsIDI1NSwgMjU1KSIgZD0iTTE2IDE2YzQuNDIgMCA4LTMuNTkgOC04IDAtNC40Mi0zLjU4LTgtOC04UzggMy41OCA4IDhjMCA0LjQxIDMuNTggOCA4IDh6bTAgNGMtNS4zMyAwLTE2IDIuNjctMTYgOHY0aDMydi00YzAtNS4zMy0xMC42Ny04LTE2LTh6Ii8+PC9zdmc+",
    "peelSwfSrc": "//izvygon.ru/Corner.swf",
    "closeImgSrc": "//rbaleno.info/handler_static/img/close_big.jpg",
    "textBannerMoreImgSrc": "//rbaleno.info/handler_static/img/text_icon.png",
    "bannerLayerAttr": "ac0b563639e977077c9c217f8dc055c73",
    "clickUnderOnAnyAction": false,
    "currentUrl": "http://rbaleno.info/protJS/OTpxFwImWF5EX0dRV1BWSkhECwsCDTgQHxgBRFJFV0ZEYAsAQHFwLg%3D%3D?IWMhAR8jCAMDExoIAC0CG0Y%3D=&L2MxCAohEScPA1E%3D=&JGMlDRgrDgsULhdE=0&LmMFDRgGGxAHRQ%3D%3D=&O2MhAQ10TkY%3D=aHR0cDovL3RyYWRlZC5iZS90ZXN0cy8%3D&KGM8FA4wG0Y%3D=0&IGMkAQkpExBE=1&OWM1DRknHAseRQ%3D%3D=0&OGM%2BFwInWA%3D%3D=0&IGM%2BAR8jJQ8RRQ%3D%3D=&O2MgAQ4mWA%3D%3D=0.9265006934958178",
    "currentDomain": "rbaleno.info",
    "async": 0,
    "bannerClosePixel": "//rbaleno.info/protJS/JTpxFBktGQEVFCwCBhAHNxcPBRQKDUVeV0RGBwsTDwsGYFtRICovPQEZARYLFQIXREtGBAkKCA0WOQEDRlxZV1ZcUxs%3D",
    "isStopper": false,
    "trusted": false,
    "cntName": "pNdrCnt",
    "reloadTime": 0,
    "isGinAds": false,
    "hideReferrer": 1,
    "bannerShowDelay": 0,
    "bannerInfo": {
        "id": 13044,
        "type": "html",
        "src": "",
        "linkParam": "",
        "videoPlayerSrc": "//rbaleno.info/handler_static/swf/flv_player.swf",
        "noCloseButton": false,
        "data": {
            "text1": "Макс",
            "text2": "Здорова, хватит сливать деньги на Бинарных опционах, используй сигналы от Option-signal.ru и будет тебе счастье!\r\n"
        },
        "textAccept": "ответить",
        "textClose": "скрыть",
        "closeDelay": 0,
        "closeShiftX": 0,
        "closeShiftY": 0,
        "closeDelayCounter": 0,
        "tpl_id": 1,
        "positions": ["bottom_right", "bottom_left"]
    },
    "isSystemInner": false,
    "popUnderInfo": {
        "shadow": 1,
        "shadowHalf": 0,
        "closePosition": 2,
        "closeDelay": 0,
        "tpl": [[[{
            "width": 0,
            "height": 0,
            "data": {"scriptSrc": "http://irboga.info/6e4t0vsj5765mncvwtuczx6c9h5tttf0w714d6d83bpi6mivfqzdyz28moj4xmjpsi66ff9dyfgue83s0xh3mrt5g91"}
        }]]]
    }
};
/** * * @param szfh {szfh} */ function ZyBaQ(szfh) {
    this._options = szfh;
    this._options.height = 70;
}
ZyBaQ.prototype = {
    _div: null, show: function () {
        var self = this;
        this._createMainDiv();
        this._div.appendChild(this._createAvatar());
        this._div.appendChild(this._createTitle());
        this._div.appendChild(this._createBody());
        this._div.appendChild(this._createButtons());
        document.body.appendChild(this._div);
        this._soundAndAppear();
    }, _close: function (addPixel) {
        this._div.parentNode.removeChild(this._div);
        if (addPixel && this._options.bannerClosePixel) {
            MEwAXUJo.zukpUrl(this._options.bannerClosePixel);
        }
    }, _open: function () {
        window.open(this._options.url, 'XBVmEG');
        this._close();
    }, _soundAndAppear: function () {
        var self = this;
        setTimeout(function () {
            MEwAXUJo.sQp(self._div, 'bottom: 20px');
            if (typeof Audio !== 'undefined' && self._options.soundSrc) {
                var audio = new Audio(self._options.soundSrc);
                audio.play();
            }
        }, 500);
    }, _getPosition: function () {
        "use strict";
        if (!this._bannerPos) {
            let pos = [];
            if (!this._options.bannerInfo.positions) {
                this._options.bannerInfo.positions = ['right'];
            }
            if (this._options.bannerInfo.positions.indexOf('bottom_left') !== -1) {
                pos.push('left');
            }
            if (this._options.bannerInfo.positions.indexOf('bottom_right') !== -1) {
                pos.push('right');
            }
            if (!pos.length) {
                pos.push('right');
            }
            this._bannerPos = MEwAXUJo.uFEozvzQ(pos, 'right');
        }
        return this._bannerPos;
    }, _createMainDiv: function () {
        this._div = document.createElement('div');
        this._div.id = 'tAl';
        this._div.setAttribute(this._options.bannerLayerAttr, '1');
        this._div.style.cssText = 'z-index:2147483637;-moz-box-sizing: border-box; box-sizing: border-box; position: fixed; bottom: -200px; ' + this._getPosition() + ': 20px; background: #D2EDE7; width: 370px; height: 155px; padding: 10px 15px; box-shadow: 1px 1px 5px rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.20); border-radius: 3px; transition: bottom 0.5s ease !important;box-sizing: inherit;';
        return this._div;
    }, _createAvatar: function () {
        var self = this;
        var div = document.createElement('div');
        var link = document.createElement('a');
        div.style.cssText = 'float: left; height: 135px; margin-right: 20px;box-sizing: inherit;';
        link.style.cssText = 'display: block; border: 4px solid #a7bdb9; border-radius: 50%; width: 44px; height: 44px; background: url("' + this._options.bannerAvatar + '") no-repeat center #b8b8b8;box-sizing: inherit;';
        link.href = 'javascript:';
        div.appendChild(link);
        MEwAXUJo.AAePkvi(link, 'click', function () {
            self._open();
        });
        return div;
    }, _createTitle: function () {
        var link = document.createElement('a');
        var self = this;
        MEwAXUJo.AAePkvi(link, 'click', function () {
            self._open();
        });
        link.style.cssText = "font-family: Arial, 'Helvetica CY', 'Nimbus Sans L', sans-serif; font-weight: 700; color: #333333; font-size: 14px; text-decoration: none;" + "max-width: 260px;display: inline-block;overflow: hidden; text-overflow: ellipsis;white-space: nowrap;box-sizing: inherit;";
        link.innerHTML = this._options.title;
        link.href = 'javascript:';
        return link;
    }, _createBody: function () {
        var self = this;
        var p = document.createElement('p');
        var link = document.createElement('a');
        p.appendChild(link);
        MEwAXUJo.AAePkvi(link, 'click', function () {
            window.open(self._options.url, 'XBVmEG');
            self._close();
        });
        p.setAttribute(this._options.bannerLayerAttr, '1');
        link.innerHTML = this._options.text;
        p.style.cssText = 'margin: 0; line-height: 16px; max-height: 68px; overflow: hidden;' + 'max-width: 270px;display: block;word-wrap:break-word;box-sizing: inherit;';
        link.style.cssText = "font-family: Arial, 'Helvetica CY', 'Nimbus Sans L', sans-serif; font-weight: 400; font-size: 13px; color: #666666; text-decoration: none;box-sizing: inherit;";
        return p;
    }, _createButtons: function () {
        var self = this;
        var div = document.createElement('div');
        var closeButton = document.createElement('a');
        var openButton = document.createElement('a');
        MEwAXUJo.AAePkvi(closeButton, 'click', function () {
            self._close(true);
        });
        MEwAXUJo.AAePkvi(openButton, 'click', function () {
            self._open(true);
        });
        div.style.cssText = 'position: absolute; bottom: 10px; right: 15px;box-sizing: inherit;';
        closeButton.style.cssText = "float: right; margin-right: 10px; font-family: Arial, 'Helvetica CY', 'Nimbus Sans L', sans-serif; font-weight: 700; font-size: 12px; color: #333333; text-decoration: none; height: 30px; line-height: 30px; padding: 0 7px;box-sizing: inherit;";
        openButton.style.cssText = "float: right; font-family: Arial, 'Helvetica CY', 'Nimbus Sans L', sans-serif; font-weight: 700; font-size: 12px; color: #333333; text-decoration: none; text-transform: uppercase; height: 30px; line-height: 30px; padding: 0 7px; background: #ffffff; border-radius: 2px; box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.16), 1px 1px 6px 0 rgba(0, 0, 0, 0.12);box-sizing: inherit;";
        closeButton.innerText = closeButton.textContent = this._options.bannerInfo.textClose;
        openButton.innerText = openButton.textContent = this._options.bannerInfo.textAccept;
        closeButton.href = openButton.href = 'javascript:';
        div.appendChild(openButton);
        div.appendChild(closeButton);
        return div;
    }
};
var MHBx = new ZyBaQ(szfh);
MHBx.show();