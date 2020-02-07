import React, {useState} from 'react';

import { Link } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import SchoolImage from '../../img/school.png';
import Logo from '../shared/Logo';

export default function Home() {
  const [classText, setClassText] = useState('Find a Class')
  const [isLinkVisible, setIsLinkVisible] = useState(false);
  const onClassClick = () => {
    setClassText('COGS 120 - Scott Klemmer');
    setIsLinkVisible(true)
  }

  const buttonVisible = () => {
    if(isLinkVisible) {
      return (
      <>
        <Link to="/reviews">
          <Button variant="primary">{classText}</Button>
        </Link>
      </>);
    } else {
      return (
      <>
        <Button variant="primary" onClick={onClassClick}>{classText}</Button>
      </>);
    }
  }

  return (
    <div className="Home">
      <Jumbotron>
    <svg width="100" height="100" viewBox="0 0 49 41" fill="none" xmlns="http://www.w3.org/2000/svg" className="SchoolProven-logo">
      <path d="M7.45831 23.2042V29.6438C7.45831 31.3167 8.37497 32.875 9.84164 33.6771L21.3 39.9333C22.675 40.6896 24.325 40.6896 25.7 39.9333L37.1583 33.6771C38.625 32.875 39.5416 31.3167 39.5416 29.6438V23.2042L25.7 30.7667C24.325 31.5229 22.675 31.5229 21.3 30.7667L7.45831 23.2042ZM21.3 1.06666L1.98123 11.6083C0.399976 12.4792 0.399976 14.7708 1.98123 15.6417L21.3 26.1833C22.675 26.9396 24.325 26.9396 25.7 26.1833L44.125 16.1229V29.6667C44.125 30.9271 45.1562 31.9583 46.4166 31.9583C47.677 31.9583 48.7083 30.9271 48.7083 29.6667V14.9771C48.7083 14.1292 48.25 13.3729 47.5166 12.9604L25.7 1.06666C24.325 0.333329 22.675 0.333329 21.3 1.06666Z" fill="#149650" />
    </svg>
        <h1>SchoolProven</h1>
        <p>
          Research your classes with confidence!
        </p>
        <p>
          {buttonVisible()}
        </p>
      </Jumbotron>
      <Image src={SchoolImage} alt="School" className="schoolimg"/>
    </div>
  );
}


