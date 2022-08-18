import { useState, forwardRef } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types'
import images from '~/assets/images';
import styles from './Image.module.scss';

const Image = forwardRef(({ src, alt, className, fallback, ...props }, ref) => {
   const [_fallback, setFallback] = useState('');
   const handleError = () => {
      setFallback(fallback || images.noImage);
   };
   return (
      <img
         src={_fallback || src}
         ref={ref}
         {...props}
         alt={alt}
         onError={handleError}
         className={classNames(styles.wrapper, className)}
      />
   );
});

Image.propTypes = {
   src: PropTypes.string,
   alt: PropTypes.string,
   classNames: PropTypes.string,
   fallback: PropTypes.string
}

export default Image;
