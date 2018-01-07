import http from './HttpClient';
import util from '../core/Util';
import { apiBaseUrl, isMobileClient } from './ApiConfig';

const urlMap = {
    'getNews': 'https://m.toutiao.com/list/?tag=__all__&ac=wap&count=20&format=json_raw&as=A1958AA43CAE16A&cp=5A4C6EF1B6EA1E1&min_behot_time=1514987245',
};

const ApiService = {
    getNews(requestConfig, callback) {
        const url = urlMap.getNews;

        return http.get(url, requestConfig.params).then(response => {
            console.log(response);
            return callback(response);
        });
    },

};

export default ApiService;
