import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
import PropTypes from 'prop-types'
const cx = classNames.bind(styles);

function Button({
   to,
   href,
   primary = false,
   outline = false,
   text = false,
   textOutline = false,
   rounded = false,
   disabled = false,
   small = false,
   large = false,
   leftIcon,
   rightIcon,
   children,
   className,
   onClick,
   ...passProps
}) {
   let Comp = 'button';
   const props = {
      onClick,
      ...passProps,
   };
   // Remove event listener when disabled
   if (disabled) {
      Object.keys(props).forEach((key) => {
         if (key.startsWith('on') && typeof props === 'function') {
            delete props[key];
         }
      });
   }

   if (to) {
      props.to = to;
      Comp = Link;
   } else if (href) {
      props.href = href;
      Comp = 'a';
   }

   const classes = cx('wrapper', {
      [className]: className,
      primary,
      outline,
      small,
      large,
      text,
      textOutline,
      disabled,
      rounded,
   });
   return (
      <Comp className={classes} {...props}>
         {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
         <span className={cx('title')}>{children}</span>
         {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
      </Comp>
   );
}

Button.propsTypes = {
   children: PropTypes.node.isRequired,
   to: PropTypes.string,
   href: PropTypes.string,
   primary: PropTypes.bool,
   outline: PropTypes.bool,
   text: PropTypes.bool,
   textOutline: PropTypes.bool,
   rounded: PropTypes.bool,
   disabled: PropTypes.bool,
   small: PropTypes.bool,
   large: PropTypes.bool,
   leftIcon: PropTypes.node,
   rightIcon: PropTypes.node,
   className: PropTypes.string,
   onClick: PropTypes.func,
}

export default Button;
