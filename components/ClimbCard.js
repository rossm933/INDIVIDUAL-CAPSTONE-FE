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
  const deleteThisClimb = () => {
    if (window.confirm(`Delete ${climbObj.name}?`)) {
      deleteClimb(climbObj.firebaseKey).then(() => onUpdate());
    }
  };
  console.warn(climbObj);

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={climbObj.image} alt={climbObj.name} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{climbObj.name}</Card.Title>
        <Card.Text>{climbObj.grade}</Card.Text>
        <Button onClick={toggleFavorite}><span>{climbObj.favorite ? '❤️' : '🤍'}</span></Button>
        <Card.Text>Date Created: </Card.Text>
        {/* DYNAMIC LINK TO VIEW THE CLIMB DETAILS  */}
        <Link href={`/climbs/${climbObj.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2">VIEW</Button>
        </Link>
        {/* DYNAMIC LINK TO EDIT THE CLIMB DETAILS  */}
        <Link href={`/climbs/edit/${climbObj.firebaseKey}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisClimb} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

ClimbCard.propTypes = {
  climbObj: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    favorite: PropTypes.bool,
    sent: PropTypes.bool,
    grade: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default ClimbCard;