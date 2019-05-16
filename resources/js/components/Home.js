import m from "mithril"
import Copy from "./Copy"

var component = {
    view: () => {
        return m('.w-full.max-w-5xl.mx-auto', [
            m('.content', [
            ]),
            m(Copy),
        ]);
    },
};

export default component;
