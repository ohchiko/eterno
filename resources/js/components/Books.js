import m from "mithril"
import Copy from "./Copy"
import Book from "../models/Book"
import _isEmpty from "lodash.isempty"
import User from "../models/User"

var component = {
    oninit: () => {
        Book.fetchAll();
    },
    view: () => {
        return m('.w-full.max-w-5xl.mx-auto', [
            m('.content', [
                m('.flex.items-center', [
                    m('p.content__title.flex-grow', User.current.name + '\'s Books'),
                    m('a.bg-blue-500.text-white.no-underline.rounded.py-1.px-3.font-bold[href=/books/new]', { oncreate: m.route.link }, 'New'),
                ]),
                _isEmpty(Book.list) ? null : m('.flex.flex-wrap.items-center.justify-around',
                    Book.list.map(book => m('.card', [
                        m('img.card__header'),
                        m('.card__body', [
                            m('.card__title',
                                m('a[href=/books/' + book.id + ']', { oncreate: m.route.link }, book.name)),
                            m('.card__description', book.description),
                        ]),
                        m('.card__footer'),
                    ]))),
            ]),
            m(Copy),
        ]);
    },
};

export default component;
