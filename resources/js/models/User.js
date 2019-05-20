import m from "mithril"

var model = {
    current: {},
    list: [],
    error: {},
    login: data => {
        m.request({
            method: 'post',
            url: '/api/users/login',
            headers: m.defaults.headers,
            data,
        })
        .then(res => {
            localStorage.setItem('userid', res.id);
            console.log(res);
            location.replace('/home');
        })
        .catch(e => {
            model.error = JSON.parse(e.message);
        });
    },
    fetchAll: () => {
        m.request({
            method: 'get',
            url: '/api/users',
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
            url: '/api/users/' + id,
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
            url: '/api/users',
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
            url: '/api/users/' + id,
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
            url: '/api/users/' + id,
            headers: m.defaults.headers,
        })
            .catch(e => {
                model.error = JSON.parse(e.message);
            });
    },
};

export default model;

