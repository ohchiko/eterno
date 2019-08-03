import m from "mithril"
import Copy from "./Copy";
import _isEmpty from "lodash.isempty"
import User from "../models/User"
import Alert from "./Alert"

var component = {
    view: () => {
        return _isEmpty(User.current) ? null : m('.w-full.max-w-xs.mx-auto', [
            _isEmpty(User.error) ? null : m(Alert, { type: 'error', messsage: User.error.errors.user[0] }),
            m('form.form.content[action=/register][method=post]', {
                onsubmit: e => {
                    e.preventDefault();

                    User.create({
                        'name': e.target.elements.name.value,
                        'email': e.target.elements.email.value,
                        'role': e.target.elements.role.value,
                        'password': e.target.elements.password.value,
                        'password_confirmation': e.target.elements.password_confirmation.value,
                    });
                }
            }, [
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
                    m('label.input__label[for=role]', 'Role'),
                    m('select.form__input#role[name=role][required]', [
                        User.current.roles[0].name === 'admin' ? [
                            m('option', { value: 'school' }, 'School'),
                            m('option', { value: 'admin' }, 'Admin')
                        ] : [
                            m('option', { value: 'visitor' }, 'Visitor'),
                        ]
                    ])
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
                    //m('a.form__link[href=/login]', { oncreate: m.route.link }, 'Have account?'),
                ]),
            ]),
            m(Copy),
        ]);
    },
};

export default component;
