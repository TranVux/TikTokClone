import styles from './Header.module.scss';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import { useEffect, useState } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
const cx = classNames.bind(styles);

function Header() {
   const [searchResult, setsearchResult] = useState([]);

   useEffect(() => {
      setTimeout(() => {
         setsearchResult([]);
      }, 0);
   }, []);

   return (
      <header className={cx('wrapper')}>
         <div className={cx('inner')}>
            <img src={images.logo} alt="tiktok" />
            <Tippy
               interactive="true"
               visible={searchResult.length > 0}
               render={(attrs) => (
                  <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                     <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        <AccountItem src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/cec7391ebc0367b00be36670f368c015~c5_100x100.jpeg?x-expires=1660471200&x-signature=Ut4Thv6EyKGSkPtZqRdtDCThs%2Fc%3D" />
                        <AccountItem src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/6074cf656f9c3479b3e497a3ebb17728~c5_100x100.jpeg?x-expires=1660471200&x-signature=F0fN79dPFeY4n5SsHE7YgHHv5OE%3D" />
                        <AccountItem src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/a4f64fa88d2aaf825b24223a9f70d327~c5_100x100.jpeg?x-expires=1660471200&x-signature=cCnrGG%2BhiY09%2BXDAEQDhT%2FP1UGw%3D" />
                        <AccountItem src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/09d8e30850c23622548bf38e4ab50ae6~c5_100x100.jpeg?x-expires=1660471200&x-signature=yBDyIu4VWjoeSK2HYd18Qpl704M%3D" />
                     </PopperWrapper>
                  </div>
               )}
            >
               <div className={cx('search')}>
                  <input placeholder="Search accounts and videos" spellCheck="false" />
                  <button className={cx('clear-btn')}>
                     <FontAwesomeIcon icon={faCircleXmark} />
                  </button>
                  <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                  <button className={cx('search-btn')}>
                     <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
               </div>
            </Tippy>
            <div className={cx('actions')}></div>
         </div>
      </header>
   );
}

export default Header;
