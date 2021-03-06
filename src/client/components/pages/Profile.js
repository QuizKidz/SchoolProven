import React, { useContext, useState, useEffect } from 'react';
import ReactGA from 'react-ga';

import { Redirect, useParams } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

import { FaUserGraduate } from 'react-icons/fa';

import NavBar from '../shared/NavBar';
import BackButton from '../shared/BackButton';
import ProvenBadge from '../shared/ProvenBadge';
import EndorsementsModal from '../modals/EndorsementsModal';

import UserContext from '../../utils/UserContext';

import users from '../../data/users.json';

export default function Profile() {
  useEffect(() => {
    ReactGA.set({ page: '/profile' });
  }, []);

  const { userId } = useParams();
  const loggedInUser = useContext(UserContext);
  const profileUser = userId ? users[userId] : loggedInUser;

  const [showEndorseModal, setShowEndorseModal] = useState(false);

  const isProfileUserLoggedIn = () => loggedInUser && profileUser.id === loggedInUser.id;

  const renderProfileCard = () => (
    <Card className="Profile-card">
      <FaUserGraduate className="ReviewCard-reviewer-icon" />
      <br />
      <ProvenBadge />
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
    const classesTakenInfo = profileUser.classesTaken.join(', ');

    return classesTakenInfo.length > 0
      ? renderProfileInfoCard('Classes Taken', classesTakenInfo)
      : null;
  };

  const handleEndorsementButtonClick = () => {
    ReactGA.event({
      category: 'endorse',
      action: 'open modal'
    });
    setShowEndorseModal(true);
  };

  const renderEndorsementButton = () => (
    isProfileUserLoggedIn()
      ? null
      : <Button onClick={handleEndorsementButtonClick}>+</Button>
  );

  const renderEndorsementsContent = () => (
    profileUser.endorsements.map((endorsement, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <ListGroup.Item key={i} className="Profile-endorsements">
        {endorsement.message}
        <h5>
          <Badge variant="secondary">{endorsement.count}</Badge>
        </h5>
      </ListGroup.Item>
    ))
  );

  const renderEndorsements = () => (
    <Card className="Profile-info-card">
      <Card.Header as="h4" className="Profile-endorsements">
        Endorsements
        {renderEndorsementButton()}
      </Card.Header>
      <ListGroup variant="flush">
        {profileUser.endorsements && profileUser.endorsements.length > 0
          ? renderEndorsementsContent()
          : (
            <ListGroup.Item className="Profile-endorsements">
              <i>No endorsements yet.</i>
            </ListGroup.Item>
          )
        }
      </ListGroup>
    </Card>
  );

  const renderProfilePage = () => (
    <>
      <NavBar />
      <Container className="Profile">
        <BackButton />
        {renderProfileCard()}
        {renderEndorsements()}
        {renderProfileInfoCard('Major', profileUser.major)}
        {renderProfileInfoCard('Year', profileUser.year)}
        {renderClassesTaken()}
      </Container>

      <EndorsementsModal
        show={showEndorseModal}
        onHide={() => setShowEndorseModal(false)}
        userId={profileUser.id}
      />
    </>
  );

  return profileUser ? renderProfilePage() : <Redirect to="/" />;
}
