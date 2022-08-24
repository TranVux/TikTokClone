import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function AccountItem({ }) {
    return (
        <div className={cx('account-item')}>
            <img className={cx('avt')} src='https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-1/185204302_1163620777456081_5636434007978208375_n.jpg?stp=dst-jpg_p160x160&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=rHwHVTEITVQAX_-7tlD&_nc_ht=scontent.fsgn5-5.fna&oh=00_AT_NSeuQwFPGpFHwnbjiz_4ZkxxJIhsx6HOtilUtl92ZTw&oe=630BCC3B' alt=''></img>
            <div className={cx('item-info')}>
                <p className={cx('nick-name')}>
                    <strong>tavux</strong>
                    <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Tran Anh Vu</p>
            </div>
        </div>
    );
}

AccountItem.propTypes = {

}

export default AccountItem;