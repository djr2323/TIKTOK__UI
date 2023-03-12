import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import Styles from './AccountItem.module.scss';

const cx = classNames.bind(Styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src={images.avatar} alt="AAA" />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                </p>
                <span className={cx('userName')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
