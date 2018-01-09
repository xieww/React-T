import http from './HttpClient';
import util from '../core/Util';
import { apiBaseUrl, isMobileClient } from './ApiConfig';

const urlMap = {
    getNews: 'https://m.toutiao.com/list/?tag={{tagId}}&ac=wap&count=20&format=json_raw&as=A1958AA43CAE16A&cp=5A4C6EF1B6EA1E1&min_behot_time=1514987245',
    // getNews: 'https://m.toutiao.com/list/?tag=__all__&ac=wap&count=20&format=json_raw&as=A1958AA43CAE16A&cp=5A4C6EF1B6EA1E1&min_behot_time=1514987245',
    getNewsDetail: 'https://m.toutiao.com/i{{groupId}}/info/?_signature=P4l3zhAVZczD8J2yQcB56z-Jd9&i={{groupId}}',
    getLikeNews: 'https://m.toutiao.com/related/open/6508960192061768195/?parent_rid=12742470515496204508&city=%E9%A9%BB%E9%A9%AC%E5%BA%97&province=%E6%B2%B3%E5%8D%97&page_type=article&share_iid=&share_app_name=&wx_share_count=0&site_id=5000246&num=5&num=15&num=3&code_id=14798012085000246&code_id=14799599715000246&code_id=14818696195000246&tt_running=0&enable_mix=1'
};

const ApiService = {
    /**
     * 获取首页新闻信息
     * @author xieww
     * @param {*} requestConfig 
     * @param {*} callback 
     */
    getNews(requestConfig, callback, failCallback) {
        // const url = urlMap.getNews;
        const url = urlMap.getNews.replace(/{{tagId}}/ig, requestConfig.params.tagId);
        console.log('打印url信息' + url);
        return http.get(url, requestConfig.params).then(response => {
            return callback(response);
        },err => {
            return failCallback && failCallback();
        });
    },

    /**
     * 获取新闻详情
     * @author
     * @param {*} requestConfig 
     * @param {*} callback 
     */
    getNewsDetail(requestConfig, callback, failCallback) {
        const url = urlMap.getNewsDetail.replace(/{{groupId}}/ig, requestConfig.params.groupId);

        return http.get(url, requestConfig.params).then(response => {
            return callback(response);
        },err => {
            return failCallback && failCallback();
        });
    },

    /**
     * 获取新闻
     * @author
     * @param {*} requestConfig 
     * @param {*} callback 
     */
    getLikeNews(requestConfig, callback, failCallback) {
        const url = urlMap.getLikeNews;

        return http.get(url, requestConfig.params).then(response => {
            return callback(response);
        },err => {
            return failCallback && failCallback();
        });
    },

};

export default ApiService;
