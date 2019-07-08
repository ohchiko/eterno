import m from "mithril"

var model = {
    current: {},
    list: [],
    error: {},
    auth: () => {
        model.current = {};
        m.defaults.headers['Authorization'] = 'Bearer ' + JSON.parse(sessionStorage.user).api_token;
        m.request({
            method: 'get',
            url: '/api/users/auth',
            headers: m.defaults.headers,
        })
            .then(res => {
                model.current = res;
            })
            .catch(e => {
                model.error = JSON.parse(e.message);
            });
    },
    login: data => {
        model.current = model.error = {};
        m.request({
            method: 'post',
            url: '/api/users/login',
            headers: m.defaults.headers,
            data,
        })
            .then(res => {
                sessionStorage.setItem('user', JSON.stringify(res));
                model.auth();
                m.route.set('/');
            })
            .catch(e => {
                model.error = JSON.parse(e.message);
            });
    },
    logout: () => {
        model.current = {};
        m.defaults.headers['Authorization'] = null;
        sessionStorage.removeItem('user');
        m.route.set('/login');
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

                if (!_isEmpty(model.current))
                    m.route.set('/login');
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

