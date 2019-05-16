import m from "mithril"
import Copy from "./Copy";

var component = {
    view: () => {
        return m('.w-full.max-w-xs.mx-auto', [
            m('form.form.content[action=/register][method=post]', [
                m('input[type=hidden][name=_token]', {
                    value: m.defaults.headers['X-CSRF-TOKEN'],
                }),
                m('.form__group', [
                    m('label.input__label[for=name]', 'Name'),
                    m('input#name.form__input[type=text][name=name][autocomplete=off][autofocus][required]'),
                ]),
                m('.form__group', [
                    m('label.input__label[for=email]', 'Email'),
                    m('input#email.form__input[type=text][name=email][autocomplete=off][required]'),
                ]),
                m('.form__group', [
                    m('label.input__label[for=password]', 'Password'),
                    m('input#password.form__input[type=password][name=password][required]'),
                ]),
                m('.form__group', [
                    m('label.input__label[for=confirmPassword]', 'Confirm Password'),
                    m('input#confirmPassword.form__input[type=password][name=password_confirmation][required]'),
                ]),
                m('.form__footer', [
                    m('button.form__button[type=submit]', 'Register'),
                    m('a.form__link[href=/login]', { oncreate: m.route.link }, 'Have account?'),
                ]),
            ]),
            m(Copy),
        ]);
    },
};

export default component;
