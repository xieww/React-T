import request from 'superagent';
import noCache from 'superagent-no-cache';
const HttpClient = {

    get: (path, requestConfig) => new Promise((resolve, reject) => {
        request
            .get(path)
            .use(noCache)
            .query(requestConfig)
            .accept('application/json')
            .end((err, res) => {
                if (err) {
                    if (err.status === 404) {
                        resolve(null);
                    } else {
                        reject(err);
                    }
                } else {
                    res.body ? resolve(res.body) : resolve(JSON.parse(res.text));
                }
            });
    }),

    post: (path, requestConfig) => new Promise((resolve, reject) => {
        request
            .post(path)
            .use(noCache)
            .send(requestConfig)
            .accept('application/json')
            .end((err, res) => {
                if (err) {
                    if (err.status === 404) {
                        resolve(null);
                    } else {
                        reject(err);
                    }
                } else {
                    resolve(res.body);
                }
            });
    }),

};

export default HttpClient;
