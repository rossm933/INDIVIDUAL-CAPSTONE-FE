import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteClimb, updateClimb } from '../api/climbData';

function ClimbCard({ climbObj, onUpdate }) {
  const toggleFavorite = () => {
    if (climbObj.favorite) {
      updateClimb({ ...climbObj, favorite: false }).then(onUpdate);
    } else {
      updateClimb({ ...climbObj, favorite: true }).then(onUpdate);
    }
  };

  const toggleSent = () => {
    if (climbObj.sent) {
      updateClimb({ ...climbObj, sent: false }).then(onUpdate);
    } else {
      updateClimb({ ...climbObj, sent: true }).then(onUpdate);
    }
  };

  const deleteThisClimb = () => {
    if (window.confirm(`Delete ${climbObj.name}?`)) {
      deleteClimb(climbObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh', // Ensures the wrapper takes up the full viewport height
      }}
    >
      <Card
        id="climb-card"
        style={{
          width: '18rem', margin: '10px', border: 'solid 5px black', background: '#D4D4D4',
        }}
      >
        <Card.Img variant="top" src={climbObj.image} alt={climbObj.name} style={{ height: '400px' }} />
        <Card.Body>
          <Card.Title><Button style={{ background: '#D4D4D4', border: '#D4D4D4' }} onClick={toggleFavorite}><span>{climbObj.favorite ? '❤️' : '🤍'}</span></Button>{climbObj.name}</Card.Title>
          <Button style={{ background: '#B38B6D', border: 'solid 1px black' }} onClick={toggleSent}><span>Sent? {climbObj.sent ? 'Yes' : 'No'}</span></Button>
          <Card.Text>{climbObj.grade}</Card.Text>
          <Card.Text>Date Created: {climbObj.timeStamp ? new Date(climbObj.timeStamp).toString().split(' G')[0] : ''}</Card.Text>
          {/* DYNAMIC LINK TO VIEW THE CLIMB DETAILS  */}
          <Link href={`/climbs/${climbObj.firebaseKey}`} passHref>
            <Button style={{ background: '#B38B6D', border: 'solid 1px black' }} variant="primary" className="m-2">VIEW</Button>
          </Link>
          {/* DYNAMIC LINK TO EDIT THE CLIMB DETAILS  */}
          <Link href={`/climbs/edit/${climbObj.firebaseKey}`} passHref>
            <Button style={{ background: '#B38B6D', border: 'solid 1px black' }} variant="info">EDIT</Button>
          </Link>
          <Button variant="danger" style={{ background: '#8b0000', border: 'solid 1px black' }} onClick={deleteThisClimb} className="m-2">
            DELETE
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

ClimbCard.propTypes = {
  climbObj: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    favorite: PropTypes.bool,
    sent: PropTypes.bool,
    grade: PropTypes.string,
    timeStamp: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default ClimbCard;
