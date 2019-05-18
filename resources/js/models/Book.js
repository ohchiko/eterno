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
        })
        .then(res => {
            model.current = res;
        })
        .catch(e => {
            model.error = JSON.parse(e.message);
        });
    },
    create: data => {
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
        })
        .catch(e => {
            model.error = JSON.parse(e.message);
        });
    },
};

export default model;
