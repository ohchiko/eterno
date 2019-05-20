import m from "mithril"
import Copy from "./Copy"
import User from "../models/User"
import _isEmpty from "lodash.isempty"

var component = {
    oninit: () => {
        //User.fetch(document.body.querySelector('#userId').innerHTML);
    },
    view: () => {
        return m('.w-full.max-w-5xl.mx-auto', [
            m('.content', [
                m('p.content__title', document.body.querySelector('#userName').innerHTML + '\'s Account'),
                _isEmpty(User.current) ? null : m('form.form.content', {
                    onsubmit: e => {
                        e.preventDefault();

                        User.update({
                            name: e.target.elements.name.value,
                        }, User.current.id);
                    },
                    }, [
                    m('input[type=hidden][name=_token]', {
                        value: m.defaults.headers['X-CSRF-TOKEN'],
                    }),
                    m('.form__group', [
                        m('label.input__label[for=name]', 'Name'),
                        m('input#name.form__input[type=text][name=name][autocomplete=off][required]', {
                            value: User.current.name,
                        }),
                    ]),
                    m('.form__group', [
                        m('label.input__label[for=email]', 'Email'),
                        m('input#email.form__input[type=text][name=email][autocomplete=off][required][readonly]', {
                            value: User.current.email,
                        }),
                    ]),
                    m('.form__footer', [
                        m(''),
                        m('button.form__button[type=submit]', 'Save Changes'),
                    ]),
                ]),
            ]),
            m(Copy),
        ]);
    },
};

export default component;
