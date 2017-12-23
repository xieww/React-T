let uid = ['0', '0', '0'];
const Util = {

    nextUid() {
        let index = uid.length;
        let digit;

        while (index) {
            index--;
            digit = uid[index].charCodeAt(0);
            if (digit === 57 /*'9'*/) {
                uid[index] = 'A';
                return uid.join('');
            }
            if (digit === 90 /*'Z'*/) {
                uid[index] = '0';
            } else {
                uid[index] = String.fromCharCode(digit + 1);
                return uid.join('');
            }
        }
        uid.unshift('0');
        return uid.join('');
    },

    isString(value) { return typeof value === 'string'; },

    isDefined(value) { return typeof value !== 'undefined'; },

    isUndefined(value) { return typeof value === 'undefined'; },

    isFunction(value) { return typeof value === 'function'; },

    /**
     * Checks if `obj` is a window object.
     *
     * @private
     * @param {*} obj Object to check
     * @returns {boolean} True if `obj` is a window obj.
     */
    isWindow(obj) {
        return obj && obj.document && obj.location && obj.alert && obj.setInterval;
    },

    /**
     * @private
     * @param {*} obj
     * @return {boolean} Returns true if `obj` is an array or array-like object (NodeList, Arguments,
     *                   String ...)
     */
    isArrayLike(obj) {
        if (obj == null || this.isWindow(obj)) {
            return false;
        }

        let length = obj.length;

        if (obj.nodeType === 1 && length) {
            return true;
        }

        return this.isString(obj) || Array.isArray(obj) || length === 0 ||
            typeof length === 'number' && length > 0 && (length - 1) in obj;
    },

    /**
     * @ngdoc function
     * @name angular.forEach
     * @module ng
     * @kind function
     *
     * @description
     * Invokes the `iterator` function once for each item in `obj` collection, which can be either an
     * object or an array. The `iterator` function is invoked with `iterator(value, key)`, where `value`
     * is the value of an object property or an array element and `key` is the object property key or
     * array element index. Specifying a `context` for the function is optional.
     *
     * It is worth noting that `.forEach` does not iterate over inherited properties because it filters
     * using the `hasOwnProperty` method.
     *
       ```js
         var values = {name: 'misko', gender: 'male'};
         var log = [];
         angular.forEach(values, function(value, key) {
           this.push(key + ': ' + value);
         }, log);
         expect(log).toEqual(['name: misko', 'gender: male']);
       ```
     *
     * @param {Object|Array} obj Object to iterate over.
     * @param {Function} iterator Iterator function.
     * @param {Object=} context Object to become context (`this`) for the iterator function.
     * @returns {Object|Array} Reference to `obj`.
     */
    forEach(obj, iterator, context) {
        let key;
        if (obj) {
            if (this.isFunction(obj)) {
                for (key in obj) {
                    // Need to check if hasOwnProperty exists,
                    // as on IE8 the result of querySelectorAll is an object without a hasOwnProperty function
                    if (key != 'prototype' && key != 'length' && key != 'name' && (!obj.hasOwnProperty || obj.hasOwnProperty(key))) {
                        iterator.call(context, obj[key], key);
                    }
                }
            } else if (Array.isArray(obj) || this.isArrayLike(obj)) {
                for (key = 0; key < obj.length; key++) {
                    iterator.call(context, obj[key], key);
                }
            } else if (obj.forEach && obj.forEach !== this.forEach) {
                obj.forEach(iterator, context);
            } else {
                for (key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        iterator.call(context, obj[key], key);
                    }
                }
            }
        }
        return obj;
    },

    toJsonReplacer(key, value) {
        let val = value;

        return val;
    },

    /**
     * @ngdoc function
     * @name angular.toJson
     * @module ng
     * @kind function
     *
     * @description
     * Serializes input into a JSON-formatted string. Properties with leading $ characters will be
     * stripped since angular uses this notation internally.
     *
     * @param {Object|Array|Date|string|number} obj Input to be serialized into JSON.
     * @param {boolean=} pretty If set to true, the JSON output will contain newlines and whitespace.
     * @returns {string|undefined} JSON-ified string representing `obj`.
     */
    toJson(obj, pretty) {
        if (typeof obj === 'undefined') return undefined;
        return JSON.stringify(obj, this.toJsonReplacer, pretty ? '  ' : null);
    },


    /**
     * @ngdoc function
     * @name angular.fromJson
     * @module ng
     * @kind function
     *
     * @description
     * Deserializes a JSON string.
     *
     * @param {string} json JSON string to deserialize.
     * @returns {Object|Array|string|number} Deserialized thingy.
     */
    fromJson(json) {
        return this.isString(json) ? JSON.parse(json) : json;
    },

    /**
     * This method is intended for encoding *key* or *value* parts of query component. We need a custom
     * method because encodeURIComponent is too aggressive and encodes stuff that doesn't have to be
     * encoded per http://tools.ietf.org/html/rfc3986:
     *    query       = *( pchar / "/" / "?" )
     *    pchar         = unreserved / pct-encoded / sub-delims / ":" / "@"
     *    unreserved    = ALPHA / DIGIT / "-" / "." / "_" / "~"
     *    pct-encoded   = "%" HEXDIG HEXDIG
     *    sub-delims    = "!" / "$" / "&" / "'" / "(" / ")"
     *                     / "*" / "+" / "," / ";" / "="
     */
    encodeUriQuery(val, pctEncodeSpaces) {
        return encodeURIComponent(val).
            replace(/%40/gi, '@').
            replace(/%3A/gi, ':').
            replace(/%24/g, '$').
            replace(/%2C/gi, ',').
            replace(/%20/g, (pctEncodeSpaces ? '%20' : '+'));
    },

    tryDecodeURIComponent(value) {
        try {
            return decodeURIComponent(value);
        } catch (e) {
            // Ignore any invalid uri component
        }
    },

    /**
     * Parses an escaped url query string into key-value pairs.
     * @returns {Object.<string,boolean|Array>}
     */
    parseKeyValue(/**string*/ keyValue) {
        let _self = this;
        let obj = {};
        let keyValuePire;
        let key;
        (keyValue || "").split('&').forEach(function(keyValue) {
            if (keyValue) {
                keyValuePire = keyValue.replace(/\+/g, '%20').split('=');
                key = _self.tryDecodeURIComponent(keyValuePire[0]);
                if (_self.isDefined(key)) {
                    let val = _self.isDefined(keyValuePire[1]) ? _self.tryDecodeURIComponent(keyValuePire[1]) : true;
                    if (!hasOwnProperty.call(obj, key)) {
                        obj[key] = val;
                    } else if (Array.isArray(obj[key])) {
                        obj[key].push(val);
                    } else {
                        obj[key] = [obj[key], val];
                    }
                }
            }
        });
        return obj;
    },

    toKeyValue(obj) {
        let _self = this;
        let parts = [];
        _self.forEach(obj, function(value, key) {
            if (Array.isArray(value)) {
                _self.forEach(value, function(arrayValue) {
                    parts.push(_self.encodeUriQuery(key, true) +
                        (arrayValue === true ? '' : '=' + _self.encodeUriQuery(arrayValue, true)));
                });
            } else {
                parts.push(_self.encodeUriQuery(key, true) +
                    (value === true ? '' : '=' + _self.encodeUriQuery(value, true)));
            }
        });
        return parts.length ? parts.join('&') : '';
    },

    parseUrl(str, component) {
        //       discuss at: http://phpjs.org/functions/parse_url/
        //      original by: Steven Levithan (http://blog.stevenlevithan.com)
        // reimplemented by: Brett Zamir (http://brett-zamir.me)
        //         input by: Lorenzo Pisani
        //         input by: Tony
        //      improved by: Brett Zamir (http://brett-zamir.me)
        //             note: original by http://stevenlevithan.com/demo/parseuri/js/assets/parseuri.js
        //             note: blog post at http://blog.stevenlevithan.com/archives/parseuri
        //             note: demo at http://stevenlevithan.com/demo/parseuri/js/assets/parseuri.js
        //             note: Does not replace invalid characters with '_' as in PHP, nor does it return false with
        //             note: a seriously malformed URL.
        //             note: Besides function name, is essentially the same as parseUri as well as our allowing
        //             note: an extra slash after the scheme/protocol (to allow file:/// as in PHP)
        //        example 1: parse_url('http://username:password@hostname/path?arg=value#anchor');
        //        returns 1: {scheme: 'http', host: 'hostname', user: 'username', pass: 'password', path: '/path', query: 'arg=value', fragment: 'anchor'}
        //        example 2: parse_url('http://en.wikipedia.org/wiki/%22@%22_%28album%29');
        //        returns 2: {scheme: 'http', host: 'en.wikipedia.org', path: '/wiki/%22@%22_%28album%29'}
        //        example 3: parse_url('https://host.domain.tld/a@b.c/folder')
        //        returns 3: {scheme: 'https', host: 'host.domain.tld', path: '/a@b.c/folder'}
        //        example 4: parse_url('https://gooduser:secretpassword@www.example.com/a@b.c/folder?foo=bar');
        //        returns 4: { scheme: 'https', host: 'www.example.com', path: '/a@b.c/folder', query: 'foo=bar', user: 'gooduser', pass: 'secretpassword' }

        try {
            this.php_js = this.php_js || {};
        } catch (e) {
            this.php_js = {};
        }

        let query;
        let ini = (this.php_js && this.php_js.ini) || {};
        let mode = (ini['phpjs.parse_url.mode'] && ini['phpjs.parse_url.mode'].local_value) || 'php';
        let key = [
            'source',
            'scheme',
            'authority',
            'userInfo',
            'user',
            'pass',
            'host',
            'port',
            'relative',
            'path',
            'directory',
            'file',
            'query',
            'fragment',
        ];
        let parser = {
            php: /^(?:([^:\/?#]+):)?(?:\/\/()(?:(?:()(?:([^:@\/]*):?([^:@\/]*))?@)?([^:\/?#]*)(?::(\d*))?))?()(?:(()(?:(?:[^?#\/]*\/)*)()(?:[^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
            strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@\/]*):?([^:@\/]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
            loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/\/?)?((?:(([^:@\/]*):?([^:@\/]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, // Added one optional slash to post-scheme to catch file:/// (should restrict this)
        };

        let m = parser[mode].exec(str);
        let uri = {};
        let i = 14;

        while (i--) {
            if (m[i]) {
                uri[key[i]] = m[i];
            }
        }

        if (component) {
            return uri[component.replace('PHP_URL_', '')
                .toLowerCase()];
        }

        if (mode !== 'php') {
            let name = (ini['phpjs.parse_url.queryKey'] &&
                ini['phpjs.parse_url.queryKey'].local_value) || 'queryKey';
            parser = /(?:^|&)([^&=]*)=?([^&]*)/g;
            uri[name] = {};
            query = uri[key[12]] || '';
            query.replace(parser, function($0, $1, $2) {
                if ($1) {
                    uri[name][$1] = $2;
                }
            });
        }

        delete uri.source;
        return uri;
    },

    redirectTo(destination) {
        window.location.replace(destination);
    },

    httpBuildQuery(formdata, numericPrefix, argSeparator) {
        //  discuss at: http://phpjs.org/functions/http_build_query/
        // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
        // improved by: Legaev Andrey
        // improved by: Michael White (http://getsprink.com)
        // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
        // improved by: Brett Zamir (http://brett-zamir.me)
        //  revised by: stag019
        //    input by: Dreamer
        // bugfixed by: Brett Zamir (http://brett-zamir.me)
        // bugfixed by: MIO_KODUKI (http://mio-koduki.blogspot.com/)
        //        note: If the value is null, key and value are skipped in the http_build_query of PHP while in phpjs they are not.
        //  depends on: urlencode
        //   example 1: http_build_query({foo: 'bar', php: 'hypertext processor', baz: 'boom', cow: 'milk'}, '', '&amp;');
        //   returns 1: 'foo=bar&amp;php=hypertext+processor&amp;baz=boom&amp;cow=milk'
        //   example 2: http_build_query({'php': 'hypertext processor', 0: 'foo', 1: 'bar', 2: 'baz', 3: 'boom', 'cow': 'milk'}, 'myvar_');
        //   returns 2: 'myvar_0=foo&myvar_1=bar&myvar_2=baz&myvar_3=boom&php=hypertext+processor&cow=milk'

        let value;
        let key;
        let tmp = [];
        let that = this;

        let _httpBuildQueryHelper = function(key, val, argSeparator) {
            let k;
            let tmp = [];
            if (val === true) {
                val = '1';
            } else if (val === false) {
                val = '0';
            }
            if (val != null) {
                if (typeof val === 'object') {
                    for (k in val) {
                        if (val[k] != null) {
                            tmp.push(_httpBuildQueryHelper(key + '[' + k + ']', val[k], argSeparator));
                        }
                    }
                    return tmp.join(argSeparator);
                } else if (typeof val !== 'function') {
                    return that.urlencode(key) + '=' + that.urlencode(val);
                } else {
                    throw new Error('There was an error processing for http_build_query().');
                }
            } else {
                return '';
            }
        };

        if (!argSeparator) {
            argSeparator = '&';
        }
        for (key in formdata) {
            value = formdata[key];
            if (numericPrefix && !isNaN(key)) {
                key = String(numericPrefix) + key;
            }
            let query = _httpBuildQueryHelper(key, value, argSeparator);
            if (query !== '') {
                tmp.push(query);
            }
        }

        return tmp.join(argSeparator);
    },

    /**
     * @ngdoc function
     * @name angular.extend
     * @module ng
     * @kind function
     *
     * @description
     * Extends the destination object `dst` by copying own enumerable properties from the `src` object(s)
     * to `dst`. You can specify multiple `src` objects.
     *
     * @param {Object} dst Destination object.
     * @param {...Object} src Source object(s).
     * @returns {Object} Reference to `dst`.
     */
    extend(dst) {
        let _self = this;
        _self.forEach(arguments, function(obj) {
            if (obj !== dst) {
                _self.forEach(obj, function(value, key) {
                    dst[key] = value;
                });
            }
        });
        return dst;
    },
};

export default Util;
