import m from "mithril"

var model = {
    current: {},
    list: [],
    error: {},
    fetchAll: () => {
        model.list = [];
        m.request({
            method: 'get',
            url: '/api/books',
            headers: m.defaults.headers,
        })
        .then(res => {
            model.list = res;
        })
        .catch(e => {
            model.error = JSON.parse(e.message);
        });
    },
    fetch: id => {
        model.current = {};
        m.request({
            method: 'get',
            url: '/api/books/' + id,
            headers: m.defaults.headers,
        })
        .then(res => {
            model.current = res;
        })
        .catch(e => {
            model.error = JSON.parse(e.message);
        });
    },
    create: data => {
        model.current = {};
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
        model.current = {};
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
        model.current = {};
        m.request({
            method: 'delete',
            url: '/api/books/' + id,
            headers: m.defaults.headers,
        })
        .catch(e => {
            model.error = JSON.parse(e.message);
        });
    },
};

export default model;
