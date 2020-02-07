import React from 'react';
import PropTypes from 'prop-types';

import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

export default function StarRatings(props) {
  const { rating, totalCount } = props;

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < Math.floor(rating); i += 1) {
      stars.push(<FaStar />);
    }

    if (rating % 1 >= 0.5) {
      stars.push(<FaStarHalfAlt />);
    }

    while (stars.length < 5) {
      stars.push(<FaRegStar />);
    }

    return stars;
  };

  return (
    <div className="StarRatings">
      {renderStars()}
      <h1>
        (
        {totalCount}
        )
      </h1>
    </div>
  );
}

StarRatings.propTypes = {
  rating: PropTypes.number.isRequired,
  totalCount: PropTypes.number,
};

StarRatings.defaultProps = {
  totalCount: -1,
};
