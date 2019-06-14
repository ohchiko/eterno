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
                _isEmpty(Book.current) ? null : m('.card.flex-grow', [
                    m('iframe#pdfViewer.w-full', {
                        src: 'js/pdfjs/viewer.html',
                        oncreate: vnode => {
                            var raw = atob(Book.current.file),
                                uint8Array = new Uint8Array(raw.length),
                                pdfjsFrame = vnode.dom;
                            
                            for (let i = 0; i < raw.length; i++) {
                                uint8Array[i] = raw.charCodeAt(i);
                            }

							pdfjsLib.GlobalWorkerOptions.workerSrc = './js/pdfjs/pdf.worker.js';
                            var pdfData = uint8Array;
							var loadingTask = pdfjsLib.getDocument(pdfData);
							loadingTask.promise.then(function (pdfDocument) {
								// Request a first page
								return pdfDocument.getPage(1).then(function (pdfPage) {
									// Display page on the existing canvas with 100% scale.
									var viewport = pdfPage.getViewport({ scale: 1.0, });
									var canvas = pdfjsFrame.contentWindow.document.getElementById('theCanvas');
console.log(canvas);
									canvas.width = viewport.width;
									canvas.height = viewport.height;
									var ctx = canvas.getContext('2d');
									var renderTask = pdfPage.render({
										canvasContext: ctx,
										viewport: viewport,
									});
									return renderTask.promise;
								});
							}).catch(function (reason) {
								console.error('Error: ' + reason);
							});
                        },
                    }),
                ]),
            ]),
            m(Copy),
        ]);
    },
};

export default component;
