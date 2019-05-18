import m from "mithril"

var component = {
    view: () => {
        return m('p.form__copy', [
            m.trust('&copy;'),
            '2019 ',
            m('a[href=/]', { oncreate: m.route.link }, 'Eterno'),
            '. All rights reserved',
        ]);
    },
};

export default component;
