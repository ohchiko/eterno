import m from "mithril"
import Copy from "./Copy"
import User from "../models/User"
import _isEmpty from "lodash.isempty"

var component = {
    oninit: () => {
        //User.fetch(document.body.querySelector('#userId').innerHTML);
        User.fetchAll();
    },
    view: () => {
        return m('.w-full.max-w-5xl.mx-auto', [
            m('.content', [
                m('p.content__title', 'Users List'),
            ]),
            m(Copy),
        ]);
    },
};

export default component;

