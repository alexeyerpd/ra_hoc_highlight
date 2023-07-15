import {ChildrenProps} from 'utils/types';

interface PopularProps extends ChildrenProps {}

export function Popular(props: PopularProps) {
    return (
        <div className="wrap-item wrap-item-popular">
            <span className="label">Popular!</span>
            {props.children}
        </div>
    );
}
