import m from "mithril"

var model = {
    current: {},
    list: [],
    error: {},
    login: data => {
        model.current = model.error = {};
        m.request({
            method: 'post',
            url: '/api/users/login',
            headers: m.defaults.headers,
            data,
        })
        .then(res => {
            localStorage.setItem('user', JSON.stringify(res));
            model.current = res;
            m.route.set('/');
        })
        .catch(e => {
            model.error = JSON.parse(e.message);
        });
    },
    logout: () => {
        model.current = {};
        localStorage.removeItem('user');
        m.route.set('/login');
    },
    fetchAll: () => {
        let api_token = window.getUserApiToken();
        m.request({
            method: 'get',
            url: '/api/users',
            headers: m.defaults.headers,
            data: { api_token },
        })
            .then(res => {
                model.list = res;
            })
            .catch(e => {
                model.error = JSON.parse(e.message);
            });
    },
    fetch: id => {
        data.api_token = window.getUserApiToken();
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

                if (!_isEmpty(model.current))
                    m.route.set('/login');
            })
            .catch(e => {
                model.error = JSON.parse(e.message);
            });
    },
    update: (data, id) => {
        data.api_token = window.getUserApiToken();
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
            data: { api_token: window.getUserApiToken() }
        })
            .catch(e => {
                model.error = JSON.parse(e.message);
            });
    },
};

export default model;

