import React, { useContext } from 'react';
// import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

import NavBar from '../shared/NavBar';
import BackButton from '../shared/BackButton';

import UserContext from '../../utils/UserContext';

export default function Profile() {
  const user = useContext(UserContext);
  console.log(user);

  const renderProfileCard = () => (
    <Card />
  );

  return (
    <>
      <NavBar />
      <Container className="Profile">
        <BackButton to="/" />
        {renderProfileCard()}
      </Container>
    </>
  );
}

// Profile.propTypes = {
//   className: PropTypes.string,
// };

// Profile.defaultProps = {
//   className: 'NoResultsCard',
// };
