import HeadeLessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';

import * as searchService from '~/apiServices/searchService';
import AccountItem from '~/components/AccountItem';
import { useDebounce } from '~/hooks';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { SearchIcon } from '~/components/Icons';
const cx = classNames.bind(styles);

function Search() {
   const [searchResult, setSearchResult] = useState([]);
   const [searchValue, setSearchValue] = useState('');
   const [showResult, setShowResult] = useState(true);
   const [loading, setLoading] = useState(false);
   const inputRef = useRef();

   const debounced = useDebounce(searchValue, 500);

   useEffect(() => {
      if (!debounced.trim()) {
         setSearchResult([]);
         return;
      }

      const fetchAPI = async () => {

         setLoading(true);

         const result = await searchService.search(debounced);
         setSearchResult(result);

         setLoading(false);
      }

      fetchAPI();

   }, [debounced]);

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
                  {searchResult.map((result) => (
                     <AccountItem key={result.id} data={result} />
                  ))}
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
            {!!searchValue && !loading && (
               <button className={cx('clear-btn')} onClick={handleClear}>
                  <FontAwesomeIcon icon={faCircleXmark} />
               </button>
            )}
            {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

            <button className={cx('search-btn')}>
               <SearchIcon />
            </button>
         </div>
      </HeadeLessTippy>
   );
}

export default Search;
