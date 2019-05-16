import m from "mithril"
import Home from "./components/Home"
import Books from "./components/Books"

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

m.route(document.body.querySelector('main'), '/', {
    '/': Home,
    '/books': Books,
});
