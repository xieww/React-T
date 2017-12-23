/**
 * API config for PC/Client
 */
import MobileDetect from 'mobile-detect';

let apiBaseUrl;
const clientPrefix = '10.22.0.37:9000';//'http://luckymoney.fxiaoke.com';
const rootUrl = '/bro';
const baseUrl = '/FHE/EM1ALM/LuckyMoney/';

const MobileClientObj = new MobileDetect(window.navigator.userAgent);
const isMobileClient = MobileClientObj.mobile() ? true : false;

apiBaseUrl = isMobileClient ? [clientPrefix, rootUrl, baseUrl].join('') : [rootUrl, baseUrl].join('');

export { apiBaseUrl, isMobileClient };
