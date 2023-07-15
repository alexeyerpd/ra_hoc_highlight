import * as React from 'react';
import {List} from 'components/List/List';

import '../../styles/root.scss';
import './App.scss';

interface Common {
    views: number;
}

export type ArticleDto = Common & {
    type: 'article';
    title: string;
};

export type VideoDto = Common & {
    type: 'video';
    url: string;
};

export type ListDto = (ArticleDto | VideoDto)[];

export function App() {
    const [list] = React.useState<ListDto>([
        {
            type: 'video',
            url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
            views: 50,
        },
        {
            type: 'video',
            url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
            views: 12,
        },
        {
            type: 'article',
            title: 'Невероятные события в неизвестном поселке...',
            views: 175,
        },
        {
            type: 'article',
            title: 'Секретные данные были раскрыты!',
            views: 1532,
        },
        {
            type: 'video',
            url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
            views: 4253,
        },
        {
            type: 'article',
            title: 'Кот Бегемот обладает невероятной...',
            views: 12,
        },
    ]);

    return <List list={list} />;
}
