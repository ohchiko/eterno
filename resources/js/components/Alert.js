import m from "mithril"

var component = {
    view: vnode => {
        let attrs = vnode.attrs;
        switch(attrs.type) {
            case 'info':
                return m(alerts.Info, attrs);
                break;
                
            case 'warn':
                return m(alerts.Warn, attrs);
                break;

            case 'error':
                return m(alerts.Error, attrs);
                break;
                
            default:
                return m(alerts.Info, attrs);
        };
    },
};

var alerts = {
    Info: {
        view: vnode => {
            return m('.bg-indigo-900.text-center.py-4.lg:px-4',
                m('[role=alert].p-2.bg-indigo-800.items-center.text-indigo-100.leading-none.lg:rounded-full.text-center',
                    m('span.font-semibold.mr-2.text-left', vnode.attrs.message)));
        },
    },
    Warn: {
        view: vnode => {
            return m('.bg-yellow-700.text-center.py-4.lg:px-4',
                m('[role=alert].p-2.bg-yellow-600.items-center.text-indigo-100.leading-none.lg:rounded-full.lg:inline-flex', [
                    m('span.font-semibold.mr-2.text-left.flex-auto', vnode.attrs.message),
                ]));
        },
    },
    Error: {
        view: vnode => {
            return m('.bg-red-900.text-center.py-4.lg:px-4',
                m('[role=alert].py-2.px-4.bg-red-800.items-center.text-indigo-100.leading-none.lg:rounded-full.lg:inline-flex', [
                    m('span.font-semibold.mr-2.text-left.flex-auto', vnode.attrs.message),
                ]));
        },
    },
};

export default component;
