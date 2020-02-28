import React from 'react';

import { IoMdArrowRoundBack } from 'react-icons/io';

export default function BackButton() {
  return (
    // eslint-disable-next-line no-restricted-globals
    <IoMdArrowRoundBack onClick={() => history.back()} className="BackButton" />
  );
}
