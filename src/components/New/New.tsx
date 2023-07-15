import {ChildrenProps} from 'utils/types';

interface NewProps extends ChildrenProps {}

export function New(props: NewProps) {
    return (
        <div className="wrap-item wrap-item-new">
            <span className="label">New!</span>
            {props.children}
        </div>
    );
}
