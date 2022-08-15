import {
   faCircleXmark,
   faCloudUpload,
   faCoins,
   faEarthAsia,
   faEllipsisVertical,
   faGear,
   faKeyboard,
   faMagnifyingGlass,
   faPlus,
   faSignOut,
   faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { InboxIcon, MessageIcon, SearchIcon } from '~/components/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import HeadeLessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import { faCircleQuestion, faMessage, faUser } from '@fortawesome/free-regular-svg-icons';
import WrapperIcon from '~/components/Icons/WrapperIcon';
const cx = classNames.bind(styles);
const MENU_ITEM = [
   {
      icon: <FontAwesomeIcon icon={faEarthAsia} />,
      title: 'English',
      children: {
         title: 'Languages',
         data: [
            {
               type: 'language',
               code: 'en',
               title: 'English',
            },
            {
               type: 'language',
               code: 'vi',
               title: 'Tiếng Việt',
            },
         ],
      },
   },
   {
      icon: <FontAwesomeIcon icon={faCircleQuestion} />,
      title: 'Feedback and help',
      to: '/feedback',
   },
   {
      icon: <FontAwesomeIcon icon={faKeyboard} />,
      title: 'Keyboard shortcuts',
   },
];
function Header() {
   const [searchResult, setsearchResult] = useState([]);
   const currentUser = true;

   useEffect(() => {
      setTimeout(() => {
         setsearchResult([]);
      }, 0);
   }, []);
   // handle logic
   const handleMenuChange = (menuItem) => {
      switch (menuItem.type) {
         case 'language':
            // handle change language
            console.log('Current language: ', menuItem.title);
            break;
         default:
      }
   };

   const userMenu = [
      {
         icon: <FontAwesomeIcon icon={faUser} />,
         title: 'View profile',
         to: '/profile',
      },
      {
         icon: <FontAwesomeIcon icon={faCoins} />,
         title: 'Get coins',
         to: '/coins',
      },
      {
         icon: <FontAwesomeIcon icon={faGear} />,
         title: 'Settings',
         to: '/settings',
      },
      ...MENU_ITEM,
      {
         icon: <FontAwesomeIcon icon={faSignOut} />,
         title: 'Log out',
         to: '/settings',
         separate: true,
      },
   ];

   return (
      <header className={cx('wrapper')}>
         <div className={cx('inner')}>
            <img src={images.logo} alt="tiktok" />
            <HeadeLessTippy
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
                     <SearchIcon />
                  </button>
               </div>
            </HeadeLessTippy>
            <div className={cx('actions')}>
               <Button textOutline leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                  Upload
               </Button>
               {currentUser ? (
                  <>
                     <Tippy content="Messages" placement="bottom" delay={[0, 200]}>
                        <WrapperIcon className={cx('actions-btn')}>
                           <MessageIcon className={cx('message-icon')} />
                        </WrapperIcon>
                     </Tippy>
                     <Tippy content="Inbox" placement="bottom" delay={[0, 200]}>
                        <WrapperIcon amountNotify={10} notify className={cx('actions-btn')}>
                           <InboxIcon />
                        </WrapperIcon>
                     </Tippy>
                  </>
               ) : (
                  <>
                     <Button primary>Login</Button>
                  </>
               )}
               <Menu items={currentUser ? userMenu : MENU_ITEM} onChange={handleMenuChange}>
                  {currentUser ? (
                     <Image
                        className={cx('user-avatar')}
                        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/cb9f67fa55c3dd4934a535d15e5dd8c2~c5_100x100.jpeg?x-expires=1660705200&x-signature=P52WHAtfm%2BnrdzYZCGowjOgK8LI%3D"
                        alt="Nguyeexn Vawn A"
                        fallback="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/185204302_1163620777456081_5636434007978208375_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=jaLAqkgz6XYAX8NQ6-7&_nc_ht=scontent.fsgn5-5.fna&oh=00_AT-4zyVp7vLS6WCtOjji9FiZg6Hqpvw07-klPKYHWO9Yzg&oe=62FFE039"
                     />
                  ) : (
                     <button className={cx('more-btn')}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                     </button>
                  )}
               </Menu>
            </div>
         </div>
      </header>
   );
}
export default Header;
