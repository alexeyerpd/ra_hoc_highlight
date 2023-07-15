import {ArticleDto} from 'containers/App/App';

interface ArticleProps extends ArticleDto {}

export function Article(props: ArticleProps) {
    return (
        <div className="item item-article">
            <h3>
                <a href="#">{props.title}</a>
            </h3>
            <p className="views">Прочтений: {props.views}</p>
        </div>
    );
}
