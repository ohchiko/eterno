import m from "mithril"
import Copy from "./Copy"
import Book from "../models/Book"
import _isEmpty from "lodash.isempty"
var pdfjsLib = require('pdfjs-dist');

var component = {
    oninit: vnode => {
        Book.fetch(vnode.attrs.id);
    },
    view: () => {
        return m('.w-full.max-w-5xl.mx-auto', [
            m('.content', _isEmpty(Book.current) ? null : [
                m('.card.mx-auto', [
                    m('.card__body', [
                        m('p.card__title', Book.current.name),
                        m('p.text-gray-700.text-sm.mb-4', Book.current.description),
                        m('p.bg-gray-200.rounded-full.inline-block.py-1.px-3.text-xs.text-gray-700.font-bold', Book.current.user.name),
                    ]),
                ]),
                _isEmpty(Book.current) ? null : m('.card.bg-gray-400', {
                    style: { overflow: 'auto', maxHeight: '300px' }
                }, [
                    m('.card__body', {
                        oncreate: vnode => {
                            pdfjsLib.GlobalWorkerOptions.workerSrc = './js/pdfjs/pdf.worker.js';
                            console.log(pdfjsLib);
                            var pdfData = atob(Book.current.file),
                                pdfFrame = vnode.dom,
                                loadingTask = pdfjsLib.getDocument({ data: pdfData });

                            var renderPage = page => {
                                var scale = 1.5,
                                    viewport = page.getViewport(scale),
                                    canvas = document.createElement('canvas'),
                                    ctx = canvas.getContext('2d'),
                                    renderContext = {
                                        canvasContext: ctx,
                                        viewport: viewport,
                                    };

                                canvas.height = viewport.height;
                                canvas.width = viewport.width;
                                canvas.classList.add('my-4');
                                canvas.classList.add('mx-auto');

                                pdfFrame.appendChild(canvas);

                                page.render(renderContext);
                            };

                            var renderPages = pdfDoc => {
                                for (var num = 1; num <= pdfDoc.numPages; num++)
                                    pdfDoc.getPage(num).then(renderPage);
                            }

                            loadingTask.promise.then(renderPages);
                        }
                    }),
                ]),
            ]),
            m(Copy),
        ]);
    },
};

export default component;
