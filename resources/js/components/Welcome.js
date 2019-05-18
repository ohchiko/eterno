import m from "mithril"

var component = {
    view: () => {
        return m('.w-full.max-w-xs.mx-auto', [
            m('.bg-white.shadow-md.rounded.px-8.pt-6.pb-8.mb-4', [
                m('p.text-center.text-2xl.text-gray-700.mb-4', 'Welcome'),
                m('p.text-center.text-md.text-gray-500.mb-8', 'Let your yearbook go online!'),
                m('.flex.items-center.justify-around', [
                    m('a[href=/login].font-bold', { oncreate: m.route.link }, 'Log In'),
                    m('a[href=/register].font-bold', { oncreate: m.route.link }, 'Register'),
                ]),
            ]),
            m('p.text-center.text-gray-500.text-xs', [
                m.trust('&copy;'),
                '2019 ',
                m('a[href=/]', { oncreate: m.route.link }, 'Eterno'),
                '. All rights reserved',
            ]),
        ]);
    },
};

export default component;
