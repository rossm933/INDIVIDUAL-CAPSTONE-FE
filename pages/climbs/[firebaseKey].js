import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleClimb } from '../../api/climbData';

export default function ViewClimb() {
  const [climbDetails, setClimbDetails] = useState({});
  const router = useRouter();

  // TODO: grab firebaseKey from url
  const { firebaseKey } = router.query;

  // TODO: make call to API layer to get the data
  useEffect(() => {
    getSingleClimb(firebaseKey).then(setClimbDetails);
  }, [firebaseKey]);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="d-flex flex-column">
        <img src={climbDetails.image} alt={climbDetails.name} style={{ width: '300px' }} />
      </div>
      <div className="text-white ms-5 details">
        <h5>
          Name: {climbDetails.name}
        </h5>
        <p> Description: {climbDetails.description || ''}</p>
        <hr />
        <p>
          Location: {climbDetails.location}
        </p>
        <p> Grade: {climbDetails.grade}</p>
      </div>
    </div>
  );
}
