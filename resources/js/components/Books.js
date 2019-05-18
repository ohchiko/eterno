import m from "mithril"
import Copy from "./Copy"

var component = {
    view: () => {
        return m('.w-full.max-w-5xl.mx-auto', [
            m('.content', [
                m('p.content__title', document.body.querySelector('#userName').innerHTML + '\'s Books'),
                m('.flex.flex-wrap.items-center.justify-around',
                    [...Array(10).keys()].map(() => m('.card', [
                        m('img.card__header'),
                        m('.card__body', [
                            m('.card__title', '2018: The Year of Greatness!'),
                            m('.card__description', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.'),
                        ]),
                        m('.card__footer'),
                    ]))),
            ]),
            m(Copy),
        ]);
    },
};

export default component;
