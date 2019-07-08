import m from "mithril"
import Copy from "./Copy"
import Book from "../models/Book"

var component = {
    view: () => {
        return m('.w-full.max-w-5xl.mx-auto', [
            m('.content', [
                m('p.content__title', 'New Year Book'),
                m('form.form.content', {
                    onsubmit: e => {
                        e.preventDefault();

                        let data = new FormData();
                        data.append('name', e.target.elements.name.value);
                        data.append('file', e.target.elements.file.files[0]);
                        data.append('description', e.target.elements.description.value);
                        Book.create(data);
                    },
                }, [
                    m('input[type=hidden][name=_token]', {
                        value: m.defaults.headers['X-CSRF-TOKEN'],
                    }),
                    m('.form__group', [
                        m('label.input__label[for=name]', 'Name'),
                        m('input#name.form__input[type=text][name=name][autocomplete=off][required]'),
                    ]),
                    m('.form__group', [
                        m('label.input__label[for=file]', 'File'),
                        m('input#file.form__input[type=file][name=file][accept=.pdf][required]'),
                    ]),
                    m('.form__group', [
                        m('label.input__label[for=description]', 'Description'),
                        m('textarea#description.form__input[name=description][rows=5]'),
                    ]),
                    m('.form__footer', [
                        m(''),
                        m('button.form__button[type=submit]', 'Upload'),
                    ]),
                ]),
            ]),
            m(Copy),
        ]);
    },
};

export default component;
