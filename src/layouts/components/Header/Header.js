import {
   faCoins,
   faEarthAsia,
   faEllipsisVertical,
   faGear,
   faKeyboard,
   faPlus,
   faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faUser } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css';

import config from '~/configs';
import { InboxIcon, MessageIcon } from '~/components/Icons';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import WrapperIcon from '~/components/Icons/WrapperIcon';
import Search from '~/layouts/components/Search';

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
   const currentUser = true;

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
            <Link to={config.routes.home} className={cx('logo-link')}><img src={images.logo} alt="tiktok" /></Link>

            {/* search */}
            <Search />
            <div className={cx('actions')}>
               <Button textOutline leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                  Upload
               </Button>
               {currentUser ? (
                  <>
                     <Tippy content="Messages" placement="bottom" delay={[0, 200]}>
                        <WrapperIcon className={cx('actions-btn')}>
                           <MessageIcon className={cx('message-icon')} width="2.5rem" height="2.5rem" />
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
