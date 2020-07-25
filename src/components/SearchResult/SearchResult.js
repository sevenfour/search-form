import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import Tile from '../Tile';
import LazyImage from 'components/LazyImage';

import styles from './SearchResult.module.css';

const SearchResult = props => {
  const {
    className,
    name,
    smallImage,
    mainImage
  } = props;

  return (
    <Tile className={clsx(styles.container, className)}>
      <figure className={styles.figure}>
        <LazyImage
          alt={name}
          height={200}
          mainUrl={mainImage}
          smallUrl={smallImage}
          width={200}
        />
        <figcaption className={styles.figcaption}>
          {name}
        </figcaption>
      </figure>
    </Tile>
  );
};

SearchResult.propTypes = {
  className: PropTypes.string,
  mainImage: PropTypes.string,
  name: PropTypes.string,
  smallImage: PropTypes.string
};

export default SearchResult;
