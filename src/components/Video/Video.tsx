import {VideoDto} from 'containers/App/App';

interface VideoProps extends VideoDto {}

export function Video(props: VideoProps) {
    return (
        <div className="item item-video">
            <iframe
                src={props.url}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
            ></iframe>
            <p className="views">Просмотров: {props.views}</p>
        </div>
    );
}
