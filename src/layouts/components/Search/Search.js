import HeadeLessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';

import * as searchService from '~/services/searchService';
import AccountItem from '~/components/AccountItem';
import { useDebounce } from '~/hooks';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { SearchIcon } from '~/components/Icons';
const cx = classNames.bind(styles);

function Search() {
   const [searchResult, setSearchResult] = useState([]);
   const [searchValue, setSearchValue] = useState('');
   const [showResult, setShowResult] = useState(false);
   const [loading, setLoading] = useState(false);
   const inputRef = useRef();

   const debouncedValue = useDebounce(searchValue, 500);

   useEffect(() => {
      if (!debouncedValue.trim()) {
         setSearchResult([]);
         return;
      }

      const fetchAPI = async () => {

         setLoading(true);

         const result = await searchService.search(debouncedValue);

         setSearchResult(result);
         setLoading(false);
      }

      fetchAPI();

   }, [debouncedValue]);

   const handleClear = () => {
      setSearchValue('');
      setSearchResult([]);
      inputRef.current.focus();
   };

   const handleHideResult = () => {
      setShowResult(false);
   };

   const handleChange = (e) => {
      const searchValue = e.target.value;
      if (!searchValue.startsWith(' ')) {
         setSearchValue(searchValue);
      }
   }

   const handleSubmit = () => {

   }

   return (
      // Turn off warning of HeadeLessTippy
      // So here, you can see a wrapper <div>
      <div>
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
                  onChange={handleChange}
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
               <button className={cx('search-btn')} onClick={handleSubmit} onMouseDown={(e) => {
                  e.preventDefault();
               }}>
                  <SearchIcon />
               </button>
            </div>
         </HeadeLessTippy >
      </div>
   );
}

export default Search;
