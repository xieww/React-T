import http from './HttpClient';
import util from '../core/Util';
import { apiBaseUrl, isMobileClient } from './ApiConfig';

const urlMap = {
    'getLuckyMoneyLimit': apiBaseUrl + 'GetLuckyMoneyLimit',
    'packLuckyMoney': apiBaseUrl + 'PackLuckyMoney',
    'unpackLuckyMoney': apiBaseUrl + 'UnpackLuckyMoney',
    'grabLuckyMoney': apiBaseUrl + 'GrabLuckyMoney',
    'getSentInfo': apiBaseUrl + 'GetSentInfo',
    'getReceivedInfo': apiBaseUrl + 'GetReceivedInfo',
    'getLuckyMoneyInfo': apiBaseUrl + 'GetLuckyMoneyInfo',
    'getReceivedUserDetail': apiBaseUrl + 'GetReceivedUserDetail',
    'leaveLuckyMemo': apiBaseUrl + 'LeaveLuckyMemo',
};

const ApiService = {
    getLuckyMoneyLimit(requestConfig, callback) {
        const url = urlMap.getLuckyMoneyLimit;

        return http.get(url, requestConfig.params).then(response => {
            return callback(response);
        });
    },

    packLuckyMoney(requestConfig, callback) {
        const url = urlMap.packLuckyMoney;
        // TODO: delete '!' symbol
        if (isMobileClient) {
            return http.get(url, util.toJson(requestConfig.params)).then(response => {
                return callback(response);
            });
        }

        return http.post(url, requestConfig.params).then(response => {
            return callback(response);
        });
    },
    //拆红包
    unpackLuckyMoney(requestConfig, callback) {
        const url = urlMap.unpackLuckyMoney;
        // TODO: delete '!' symbol
        if (isMobileClient) {
            return http.get(url, util.toJson(requestConfig.params)).then(response => {
                return callback(response);
            });
        }

        return http.post(url, requestConfig.params).then(response => {
            return callback(response);
        });
    },
    //抢红包
    grabLuckyMoney(requestConfig, callback) {
        const url = urlMap.grabLuckyMoney;
        // TODO: delete '!' symbol
        if (isMobileClient) {
            return http.get(url, util.toJson(requestConfig.params)).then(response => {
                return callback(response);
            });
        }

        return http.post(url, requestConfig.params).then(response => {
            return callback(response);
        });
    },
    //查询我发出的红包
    getSentInfo(requestConfig, callback) {
        const url = urlMap.getSentInfo;
        // TODO: delete '!' symbol
        if (isMobileClient) {
            return http.get(url, util.toJson(requestConfig.params)).then(response => {
                return callback(response);
            });
        }

        return http.post(url, requestConfig.params).then(response => {
            return callback(response);
        });
    },
    //查询我收到的红包
    getReceivedInfo(requestConfig, callback) {
        const url = urlMap.getReceivedInfo;
        // TODO: delete '!' symbol when build
        if (isMobileClient) {
            return http.get(url, util.toJson(requestConfig.params)).then(response => {
                return callback(response);
            });
        }

        return http.post(url, requestConfig.params).then(response => {
            return callback(response);
        });
    },
    //查询红包详情
    getLuckyMoneyInfo(requestConfig, callback) {
        const url = urlMap.getLuckyMoneyInfo;
        // TODO: delete '!' symbol when build
        if (isMobileClient) {
            return http.get(url, util.toJson(requestConfig.params)).then(response => {
                return callback(response);
            });
        }

        return http.post(url, requestConfig.params).then(response => {
            return callback(response);
        });
    },
    //分页获取已抢到红包人员列表
    getReceivedUserDetail(requestConfig, callback) {
        const url = urlMap.getReceivedUserDetail;
        // TODO: delete '!' symbol when build
        if (isMobileClient) {
            return http.get(url, util.toJson(requestConfig.params)).then(response => {
                return callback(response);
            });
        }

        return http.post(url, requestConfig.params).then(response => {
            return callback(response);
        });
    },
    //留言
    leaveLuckyMemo(requestConfig, callback) {
        const url = urlMap.leaveLuckyMemo;
        // TODO: delete '!' symbol when build
        if (isMobileClient) {
            return http.get(url, util.toJson(requestConfig.params)).then(response => {
                return callback(response);
            });
        }

        return http.post(url, requestConfig.params).then(response => {
            return callback(response);
        });
    },

    connectWebViewJavascriptBridge(callback) {
        if (window.WebViewJavascriptBridge) {
            callback(window.WebViewJavascriptBridge);
        } else {
            document.addEventListener('WebViewJavascriptBridgeReady', () => {
                callback(window.WebViewJavascriptBridge);
            }, false);
        }
    },
};

export default ApiService;
