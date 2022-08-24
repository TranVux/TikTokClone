import styles from './Sidebar.module.scss';
import className from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import configs from '~/configs';
import { HomeIcon, HomeIconSolid, LiveIcon, LiveIconSolid, UserGroupIcon, UserGroupIconSolid } from '~/components/Icons'
import SuggestedAccounts from '~/components/SuggestedAccounts';

const cx = className.bind(styles);

function SideBar() {
   return (
      <aside className={cx('wrapper')}>
         <Menu>
            <MenuItem title='For You' to={configs.routes.home} icon={<HomeIcon />} activeIcon={<HomeIconSolid />} />
            <MenuItem title='Following' to={configs.routes.following} icon={<UserGroupIcon />} activeIcon={<UserGroupIconSolid />} />
            <MenuItem title='LIVE' to={configs.routes.live} icon={<LiveIcon />} activeIcon={<LiveIconSolid />} />
         </Menu>
         <SuggestedAccounts label='Suggested accounts' />
         <SuggestedAccounts label='Following accounts' />
      </aside>
   );
}

export default SideBar;
