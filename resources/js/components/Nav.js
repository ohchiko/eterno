import m from "mithril"
import User from "../models/User"
import _isEmpty from "lodash.isempty"

var component = {
    oncreate: () => {
        if (localStorage.getItem('user') !== null)
            User.auth();
    },
    view: () => {
        return [
            m('.flex.items-center.flex-shrink-0 text-gray-600.mr-6', [
                m.trust('<svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>'),
                m('span.font-semibold.text-xl.tracking-widest.uppercase', 'Eterno'),
            ]),
            m('.w-full.block.flex-grow.lg:flex.lg:items-center.lg:w-auto', [
                !_isEmpty(User.current) ? [
                    m('.text-sm.lg:flex-grow', User.current.admin ? [
                        m('a[href=/users].mt-4.inline-block.lg:mt-0.text-gray-500.mr-4', { oncreate: m.route.link }, 'Users'),
                        m('a[href=/logs].mt-4.inline-block.lg:mt-0.text-gray-500.mr-4', { oncreate: m.route.link }, 'Logs'),
                    ] : [
                        m('a[href=/books].mt-4.inline-block.lg:mt-0.text-gray-500.mr-4', { oncreate: m.route.link }, 'Books'),
                        m('a[href=/account].mt-4.inline-block.lg:mt-0.text-gray-500.mr-4', { oncreate: m.route.link }, 'Account'),
                    ]),
                    m('', [
                        m('span#userName.inline-block.text-xs.text-gray-700', 'Logged in as: ' + User.current.name),
                        m('span#userEmail.inline-block.text-xs.text-gray-700'),
                        m('a[href=/logout].inline-block.text-xs.mx-2', {
                            onclick: e => {
                                e.preventDefault();

                                User.logout();
                            },
                        }, 'Logout'),
                    ]),
                ]
                : [
                    m('.flex-grow'),
                    m('.text-sm', [
                        m('a[href=/login].mt-4.inline-block.lg:mt-0.text-gray-700.mr-4', { oncreate: m.route.link }, 'Login'),
                        m('a[href=/register].mt-4.inline-block.lg:mt-0.text-gray-700.mr-4', { oncreate: m.route.link }, 'Register'),
                    ]),
                ]
            ])
        ];
    },
};

export default component;
