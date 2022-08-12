import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem({ src }) {
   return (
      <div className={cx('wrapper')}>
         <img className={cx('avt')} src={src} alt="Hoa" />
         <div className={cx('info')}>
            <h4 className={cx('name')}>
               <span>NguyenVanA</span>
               <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </h4>
            <span className={cx('username')}>NguyễnVănA</span>
         </div>
      </div>
   );
}

export default AccountItem;
