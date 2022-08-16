import AccountItem from '~/components/AccountItem';
import HeadeLessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { faCircleXmark, faL, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { SearchIcon } from '~/components/Icons';
const cx = classNames.bind(styles);

function Search() {
   const [searchResult, setSearchResult] = useState([]);
   const [showResult, setShowResult] = useState(true);
   const [searchValue, setSearchValue] = useState('');

   const inputRef = useRef();
   useEffect(() => {
      setTimeout(() => {
         setSearchResult([1]);
      }, 0);
   }, []);

   const handleClear = () => {
      setSearchValue('');
      setSearchResult([]);
      inputRef.current.focus();
   };

   const handleHideResult = () => {
      setShowResult(false);
   };

   return (
      <HeadeLessTippy
         interactive="true"
         visible={showResult && searchResult.length > 0}
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
         onClickOutside={handleHideResult}
      >
         <div className={cx('search')}>
            <input
               ref={inputRef}
               placeholder="Search accounts and videos"
               spellCheck="false"
               value={searchValue}
               onChange={(e) => {
                  setSearchValue(e.target.value);
               }}
               onFocus={() => {
                  setShowResult(true);
               }}
            />
            {!!searchValue && (
               <button className={cx('clear-btn')} onClick={handleClear}>
                  <FontAwesomeIcon icon={faCircleXmark} />
               </button>
            )}
            {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}

            <button className={cx('search-btn')}>
               <SearchIcon />
            </button>
         </div>
      </HeadeLessTippy>
   );
}

export default Search;
