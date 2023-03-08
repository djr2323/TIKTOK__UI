import Header from '~/components/LayOut/header';
import Sidebar from './Sidebar';
import Styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(Styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
