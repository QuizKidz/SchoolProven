/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

export default function ReviewCard(props) {
  const { initialLikes, initialDislikes } = props;
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const [numLikes, setNumLikes] = useState(initialLikes);
  const [numDislikes, setNumDislikes] = useState(initialDislikes);

  const likeButtonClassName = liked ? 'Like' : '';
  const dislikeButtonClassName = disliked ? 'Dislike' : '';

  const handleLikeCLick = () => {
    if (liked) {
      return;
    }

    if (disliked) {
      setNumDislikes(numDislikes - 1);
    }

    setLiked(true);
    setDisliked(false);
    setNumLikes(numLikes + 1);
  };

  const handleDislikeCLick = () => {
    if (disliked) {
      return;
    }

    if (liked) {
      setNumLikes(numLikes - 1);
    }

    setDisliked(true);
    setLiked(false);

    setNumDislikes(numDislikes + 1);
  };

  return (
    <div className="ReviewCard-review-reacts">
      <div className="ReviewCard-review-react" onClick={handleLikeCLick}>
        <FaThumbsUp className={likeButtonClassName} />
        {' '}
        {numLikes}
      </div>
      <div className="ReviewCard-review-react" onClick={handleDislikeCLick}>
        <FaThumbsDown className={dislikeButtonClassName} />
        {' '}
        {numDislikes}
      </div>
    </div>
  );
}

ReviewCard.propTypes = {
  initialLikes: PropTypes.number.isRequired,
  initialDislikes: PropTypes.number.isRequired,
};
