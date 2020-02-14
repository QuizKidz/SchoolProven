import React from 'react';
import PropTypes from 'prop-types';

import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

export default function StarRatings(props) {
  const {
    rating, stat, large, onClick
  } = props;

  const renderStars = () => {
    const stars = [];

    let i;
    for (i = 0; i < Math.floor(rating); i += 1) {
      stars.push(<FaStar key={i + 1} onClick={onClick(i + 1)} />);
    }

    if (rating % 1 >= 0.5) {
      stars.push(<FaStarHalfAlt key={i + 1} onClick={onClick(i + 1)} />);
      i += 1;
    }

    while (stars.length < 5) {
      stars.push(<FaRegStar key={i + 1} onClick={onClick(i + 1)} />);
      i += 1;
    }

    return stars;
  };

  const largeClass = large ? 'large' : '';

  return (
    <span className={`StarRatings ${largeClass}`}>
      {renderStars()}
      <span className="StarRatings-stat">
        {stat || null}
      </span>
    </span>
  );
}

StarRatings.propTypes = {
  rating: PropTypes.number.isRequired,
  stat: PropTypes.string,
  large: PropTypes.bool,
  onClick: PropTypes.func,
};

StarRatings.defaultProps = {
  stat: '',
  large: false,
  onClick: () => {},
};
