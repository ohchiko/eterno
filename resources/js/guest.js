import m from "mithril"
import Login from "./components/Login"
import Register from "./components/Register"
import Welcome from "./components/Welcome"

let headers = [];
headers['X-Requested-With'] = 'XMLHttpRequest';
let token = document.head.querySelector('meta[name="csrf-token"]');
if (token) {
    headers['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

m.defaults = { headers };

m.route.prefix('#');

m.route(document.body.querySelector('main'), '/welcome', {
    '/welcome': Welcome,
    '/login': Login,
    '/register': Register,
});
