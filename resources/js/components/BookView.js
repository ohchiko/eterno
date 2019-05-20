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
            m('.content.flex.flex-wrap.justify-between', _isEmpty(Book.current) ? null : [
                m('.card', [
                    m('.card__body', [
                        m('p.card__title', Book.current.name),
                        m('p.text-gray-700.text-sm.mb-4', Book.current.description),
                        m('p.bg-gray-200.rounded-full.inline-block.py-1.px-3.text-xs.text-gray-700.font-bold', Book.current.user.name),
                    ]),
                ]),
                _isEmpty(Book.current) ? null : m('.card', [
                    m('iframe#pdfViewer', {
                        src: 'js/pdfjs/web/pdfjs_viewer.html',
                        onload: e => {
                            var raw = atob(Book.current.file),
                                uint8Array = new Uint8Array(raw.length),
                                pdfjsFrame = e.target;
                            
                            for (let i = 0; i < raw.length; i++) {
                                uint8Array[i] = raw.charCodeAt(i);
                            }
                            
                            var pdfData = uint8Array;
                            PDFViewerApplication.open(pdfData);
                        },
                    }),
                ]),
            ]),
            m(Copy),
        ]);
    },
};

export default component;
