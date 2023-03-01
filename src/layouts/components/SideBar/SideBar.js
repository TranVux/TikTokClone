import styles from './Sidebar.module.scss';
import className from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import configs from '~/configs';
import { HomeIcon, HomeIconSolid, LiveIcon, LiveIconSolid, UserGroupIcon, UserGroupIconSolid } from '~/components/Icons'
import SuggestedAccounts from '~/components/SuggestedAccounts';
import * as userService from '~/services/userService';
import { useEffect, useState } from 'react';

const cx = className.bind(styles);
const INIT_PAGE = 1;
const PER_PAGE = 5;

function SideBar() {
   const [page, setPage] = useState(INIT_PAGE);
   const [suggestedUsers, setSuggestedUsers] = useState([]);

   useEffect(() => {
      userService.getSuggested({ page, perPage: PER_PAGE }).then((data) => {
         // setSuggestedUsers(prevUsers => [...prevUsers, ...data]);
      }).catch((error) => {
         console.log(error);
      })
   }, [page]);

   return (
      <aside className={cx('wrapper')}>
         <Menu>
            <MenuItem title='For You' to={configs.routes.home} icon={<HomeIcon />} activeIcon={<HomeIconSolid />} />
            <MenuItem title='Following' to={configs.routes.following} icon={<UserGroupIcon />} activeIcon={<UserGroupIconSolid />} />
            <MenuItem title='LIVE' to={configs.routes.live} icon={<LiveIcon />} activeIcon={<LiveIconSolid />} />
         </Menu>
         <SuggestedAccounts label='Suggested accounts' data={suggestedUsers} />
         <SuggestedAccounts label='Following accounts' />
      </aside>
   );
}

export default SideBar;
