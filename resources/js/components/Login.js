import m from "mithril"
import Copy from "./Copy"
import User from "../models/User"
import _isEmpty from "lodash.isempty"
import Alert from "./Alert"

var component = {
    view: () => {
        return m('.w-full.max-w-xs.mx-auto', [
            _isEmpty(User.error) ? null : m(Alert, { type: 'error', message: User.error.errors.user[0] }),
            m('form.form.content[action=/login][method=post]', {
                onsubmit: e => {
                    e.preventDefault();

                    User.login({
                        email: e.target.elements.email.value,
                        password: e.target.elements.password.value,
                    });
                },
            }, [
                m('input[type=hidden][name=_token]', {
                    value: m.defaults.headers['X-CSRF-TOKEN'],
                }),
                m('.form__group', [
                    m('label.input__label[for=email]', 'Email'),
                    m('input#email.form__input[type=text][name=email][autocomplete=off][required][autofocus]'),
                ]),
                m('.form__group', [
                    m('label.input__label[for=password]', 'Password'),
                    m('input#password.form__input[type=password][name=password][required]'),
                ]),
                m('.form__footer', [
                    m('button.form__button[type=submit]', 'Sign In'),
                    m('a.form__link[href=#]', 'Forgot Password?'),
                ]),
            ]),
            m(Copy),
        ]);
    },
};

export default component;
