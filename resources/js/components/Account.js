import m from "mithril"
import Copy from "./Copy"

var component = {
    view: () => {
        return m('.w-full.max-w-5xl.mx-auto', [
            m('.content', [
                m('p.content__title', document.body.querySelector('#userName').innerHTML + '\'s Account'),
                m('form.form.content', [
                    m('input[type=hidden][name=_token]', {
                        value: m.defaults.headers['X-CSRF-TOKEN'],
                    }),
                    m('.form__group', [
                        m('label.input__label[for=name]', 'Name'),
                        m('input#name.form__input[type=text][name=name][autocomplete=off][required]', {
                            value: document.body.querySelector('#userName').innerHTML,
                        }),
                    ]),
                    m('.form__group', [
                        m('label.input__label[for=email]', 'Email'),
                        m('input#email.form__input[type=text][name=email][autocomplete=off][required][readonly]', {
                            value: document.body.querySelector('#userEmail').innerHTML,
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
