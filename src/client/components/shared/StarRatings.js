import React from 'react';
import PropTypes from 'prop-types';

import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

export default function StarRatings(props) {
  const { rating, stat } = props;

  const renderStars = () => {
    const stars = [];

    let i;
    for (i = 0; i < Math.floor(rating); i += 1) {
      stars.push(<FaStar key={i} />);
    }

    if (rating % 1 >= 0.5) {
      stars.push(<FaStarHalfAlt key={i} />);
      i += 1;
    }

    while (stars.length < 5) {
      stars.push(<FaRegStar key={i} />);
      i += 1;
    }

    return stars;
  };

  return (
    <span className="StarRatings">
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
};

StarRatings.defaultProps = {
  stat: '',
};
