import m from "mithril"
import Copy from "./Copy"
import User from "../models/User"
import _isEmpty from "lodash.isempty"
import _filter from "lodash.filter"

var component = {
    oninit: () => {
        //User.fetch(document.body.querySelector('#userId').innerHTML);
        User.fetchAll();
    },
    view: () => {
        return m('.w-full.max-w-5xl.mx-auto', [
            m('.content', [
                m('p.content__title', 'Users List'),
                m('.flex.justify-around', [
                    m('.card.max-w-3xl',
                        m('table.table.w-full.mx-auto.text-gray-700', [
                            m('tr', [
                                m('th', '#'),
                                m('th', 'Name'),
                                m('th', 'Email'),
                                m('th', 'Registered At'),
                            ]),
                            User.list.map((user, id) => {
                                return m('tr', [
                                    m('td', (id + 1) + '.'),
                                    m('td', user.name),
                                    m('td', user.email),
                                    m('td', user.created_at),
                                ]);
                            }),
                        ])),
                    m('.card.py-4.px-6.text-gray-700.self-center',
                        m('table', [
                            m('tr', [
                                m('th[colspan=2].text-left', 'Summary'),
                            ]),
                            m('tr', [
                                m('td', 'Administrators: '),
                                m('td.px-4', _filter(User.list, user => user.admin).length),
                            ]),
                            m('tr', [
                                m('td', 'Total Users: '),
                                m('td.px-4', User.list.length),
                            ]),
                        ])),
                ]),
            ]),
            m(Copy),
        ]);
    },
};

export default component;

