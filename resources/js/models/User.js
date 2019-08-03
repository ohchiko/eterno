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
                setTimeout(() => { location.reload() }, 900);
            });
    },
    logout: () => {
        model.current = {};
        m.defaults.headers['Authorization'] = null;
        sessionStorage.removeItem('user');
        m.route.set('/login');
        location.reload();
    },
    fetchAll: () => {
        model.list = {};
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
    fetchVisitor: () => {
        model.list = {};
        m.request({
            method: 'get',
            url: '/api/visitors',
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
        model.current = {};
        m.request({
            method: 'post',
            url: '/api/users',
            headers: m.defaults.headers,
            data,
        })
            .then(res => {
                //model.current = res;
                m.route.set('/');
                location.reload();
            })
            .catch(e => {
                model.error = JSON.parse(e.message);
            });
    },
    update: (data, id) => {
        model.current = {};
        m.request({
            method: 'put',
            url: '/api/users/' + id,
            headers: m.defaults.headers,
            data,
        })
            .then(res => {
                model.current = res;
                location.reload();
            })
            .catch(e => {
                model.error = JSON.parse(e.message);
            });
    },
    remove: id => {
        model.current = {};
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

