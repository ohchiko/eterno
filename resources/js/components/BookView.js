import m from "mithril"
import Copy from "./Copy"
import Book from "../models/Book"
import _isEmpty from "lodash.isempty"

var component = {
    oninit: vnode => {
        Book.fetch(vnode.attrs.id);
    },
    view: () => {
        return m('.w-full.max-w-5xl.mx-auto', [
            m('.content', _isEmpty(Book.current) ? null : [
                m('.card', [
                    m('.card__body', [
                        m('p.card__title', Book.current.name),
                        m('p.text-gray-700.text-sm.mb-4', Book.current.description),
                        m('p.bg-gray-200.rounded-full.inline-block.py-1.px-3.text-xs.text-gray-700.font-bold', Book.current.user.name),
                    ]),
                ]),
                m('.card'),
            ]),
            m(Copy),
        ]);
    },
};

export default component;
