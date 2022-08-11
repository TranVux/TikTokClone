import styles from './Sidebar.module.scss';
import className from 'classnames/bind';

const cx = className.bind(styles);

function SideBar() {
   return (
      <aside className={cx('wrapper')}>
         <h1>Side Bar</h1>
      </aside>
   );
}

export default SideBar;
