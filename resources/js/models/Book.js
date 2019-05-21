import m from "mithril"

var model = {
    current: {},
    list: [],
    error: {},
    fetchAll: () => {
        m.request({
            method: 'get',
            url: '/api/books',
            headers: m.defaults.headers,
            data: { api_token: window.getUserApiToken() },
        })
        .then(res => {
            model.list = res;
        })
        .catch(e => {
            model.error = JSON.parse(e.message);
        });
    },
    fetch: id => {
        m.request({
            method: 'get',
            url: '/api/books/' + id,
            headers: m.defaults.headers,
            data: { api_token: window.getUserApiToken() },
        })
        .then(res => {
            model.current = res;
        })
        .catch(e => {
            model.error = JSON.parse(e.message);
        });
    },
    create: data => {
        data.append('api_token', window.getUserApiToken());
        m.request({
            method: 'post',
            url: '/api/books',
            headers: m.defaults.headers,
            data,
        })
        .then(res => {
            model.current = res;
        })
        .catch(e => {
            model.error = JSON.parse(e.message);
        });
    },
    update: (data, id) => {
        data.api_token = window.getUserApiToken();
        m.request({
            method: 'put',
            url: '/api/books/' + id,
            headers: m.defaults.headers,
            data,
        })
        .then(res => {
            model.current = res;
        })
        .catch(e => {
            model.error = JSON.parse(e.message);
        });
    },
    remove: id => {
        m.request({
            method: 'delete',
            url: '/api/books/' + id,
            headers: m.defaults.headers,
            data: { api_token: window.getUserApiToken() },
        })
        .catch(e => {
            model.error = JSON.parse(e.message);
        });
    },
};

export default model;
