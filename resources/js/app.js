import m from "mithril"
import Nav from "./components/Nav"
import Login from "./components/Login"
import Register from "./components/Register"
import Welcome from "./components/Welcome"
import Home from "./components/Home"
import Books from "./components/Books"
import Account from "./components/Account"
import BookNew from "./components/BookNew"
import BookView from "./components/BookView"
import Users from "./components/Users"

let getUserApiToken = function () {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user !== null)
        return user.api_token;
    return false;
}

let headers = [];
headers['X-Requested-With'] = 'XMLHttpRequest';
let token = document.head.querySelector('meta[name="csrf-token"]');
if (token) {
    headers['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

m.defaults = { headers };

m.mount(document.body.querySelector('nav'), Nav);

m.route(document.body.querySelector('main'), '/', {
    '/': Home,
    '/welcome': Welcome,
    '/login': Login,
    '/register': Register,
    '/books': Books,
    '/account': Account,
    '/books/new': BookNew,
    '/books/:id': BookView,
    '/users': Users,
});
