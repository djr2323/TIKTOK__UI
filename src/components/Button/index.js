import classNames from 'classnames/bind';
import Styles from './Button.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(Styles);

function Button({
    to,
    href,
    primary,
    outline,
    small,
    large,
    text,
    disabled,
    rounded,
    children,
    rightIcon,
    leftIcon,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = { onClick, ...passProps };

    // remove event Listener when btn is disabled
    if (disabled) {
        Object.keys(props).forEach((propKey) => {
            if (propKey.startsWith('on') && typeof props[propKey] == 'function') {
                delete props[propKey];
            }
        });
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', { primary, outline, small, text, disabled, rounded, large });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
