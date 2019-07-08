import m from "mithril"
import Copy from "./Copy"
import Alert from "./Alert"

var component = {
    view: () => {
        return m('.w-full.max-w-5xl.mx-auto', [
            m('.content', [
                //m(Alert, { type: 'error' }),
                m('p.text-3xl.font-bold.text-gray-500', 'Home sweet home!'),
            ]),
            m(Copy),
        ]);
    },
};

export default component;
