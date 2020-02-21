import React, { useContext } from 'react';

import { Redirect, useParams } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

import { FaUserGraduate } from 'react-icons/fa';

import NavBar from '../shared/NavBar';
import BackButton from '../shared/BackButton';

import UserContext from '../../utils/UserContext';

import users from '../../data/users.json';

export default function Profile() {
  const { userId } = useParams();
  const user = userId ? users[userId] : useContext(UserContext);
  console.log(user);

  const renderProfileCard = () => (
    <Card className="Profile-card">
      <FaUserGraduate className="ReviewCard-reviewer-icon" />
    </Card>
  );

  const renderProfileInfoCard = (header, info) => (
    <Card className="Profile-info-card">
      <Card.Header as="h4">{header}</Card.Header>
      <Card.Body>
        {info}
      </Card.Body>
    </Card>
  );

  const renderClassesTaken = () => {
    const classesTakenInfo = user.classesTaken.join(', ');

    return classesTakenInfo.length > 0
      ? renderProfileInfoCard('Classes Taken', classesTakenInfo)
      : null;
  };

  const renderProfilePage = () => (
    <>
      <NavBar />
      <Container className="Profile">
        <BackButton to="/" />
        {renderProfileCard()}
        {renderProfileInfoCard('Major', user.major)}
        {renderProfileInfoCard('Year', user.year)}
        {renderClassesTaken()}
      </Container>
    </>
  );

  return user ? renderProfilePage() : <Redirect to="/" />;
}
