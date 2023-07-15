import {Article} from 'components/Article/Article';
import {New} from 'components/New/New';
import {Popular} from 'components/Popular/Popular';
import {Video} from 'components/Video/Video';
import {ListDto, VideoDto} from 'containers/App/App';
import {cn} from 'utils/classname';

import './List.scss';

const block = cn('list');

interface ListProps {
    list: ListDto;
}

export function List(props: ListProps) {
    return (
        <div className={block()}>
            {props.list.map((item, idx) => {
                switch (item.type) {
                    case 'video':
                        return <PrettyView key={idx} Component={Video} {...item} />;
                    case 'article':
                        return <PrettyView key={idx} Component={Article} {...item} />;
                    default:
                        return null;
                }
            })}
        </div>
    );
}

type PrettyViewProps = ListDto[number] & {
    Component: typeof Video | typeof Article;
};

function PrettyView({Component, ...props}: PrettyViewProps) {
    const WrapComponent = getWrapComponent(props.views);

    if (checkIsVideoComponent(Component)) {
        if (WrapComponent && checkIsVideoProps(props)) {
            return (
                <WrapComponent>
                    <Component {...props} />
                </WrapComponent>
            );
        }

        return checkIsVideoProps(props) ? <Component {...props} /> : null;
    } else {
        if (WrapComponent && !checkIsVideoProps(props)) {
            return (
                <WrapComponent>
                    <Component {...props} />
                </WrapComponent>
            );
        }

        return checkIsVideoProps(props) ? null : <Component {...props} />;
    }
}

function checkIsVideoComponent(Component: PrettyViewProps['Component']): Component is typeof Video {
    return Component === Video;
}

function checkIsVideoProps(props: ListDto[number]): props is VideoDto {
    return 'url' in props;
}

function getWrapComponent(views: number) {
    if (views >= 1000) {
        return Popular;
    } else if (views < 100) {
        return New;
    }
    return null;
}
