import styles from './Icon.module.scss';
import classNames from 'classnames/bind';
import { forwardRef } from 'react';
import PropTypes from 'prop-types'
const cx = classNames.bind(styles);
const WrapperIcon = forwardRef(({ amountNotify, notify, children, className }, ref) => {
   const classes = cx('wrapper', {
      [className]: className,
      notify,
   });
   return (
      <button ref={ref} notify={amountNotify} className={classes}>
         {children}
      </button>
   );
});

WrapperIcon.propTypes = {
   amountNotify: PropTypes.number,
   notify: PropTypes.bool,
   children: PropTypes.node.isRequired,
   classNames: PropTypes.string
}

export default WrapperIcon;
