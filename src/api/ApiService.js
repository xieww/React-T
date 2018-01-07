import http from './HttpClient';
import util from '../core/Util';
import { apiBaseUrl, isMobileClient } from './ApiConfig';

const urlMap = {
    getNews: 'https://m.toutiao.com/list/?tag=__all__&ac=wap&count=20&format=json_raw&as=A1958AA43CAE16A&cp=5A4C6EF1B6EA1E1&min_behot_time=1514987245',
    getNewsDetail: 'https://m.toutiao.com/i{{groupId}}/info/?_signature=P4l3zhAVZczD8J2yQcB56z-Jd9&i={{groupId}}'
};

const ApiService = {
    /**
     * 获取首页新闻信息
     * @author xieww
     * @param {*} requestConfig 
     * @param {*} callback 
     */
    getNews(requestConfig, callback) {
        const url = urlMap.getNews;
        return http.get(url, requestConfig.params).then(response => {
            console.log(response);
            return callback(response);
        });
    },

    /**
     * 获取新闻详情
     * @author
     * @param {*} requestConfig 
     * @param {*} callback 
     */
    getNewsDetail(requestConfig, callback) {
        const url = urlMap.getNewsDetail.replace(/{{groupId}}/ig, requestConfig.params.groupId);

        return http.get(url, requestConfig.params).then(response => {
            return callback(response);
        });
    },

};

export default ApiService;
