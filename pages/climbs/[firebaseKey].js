import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleClimb } from '../../api/climbData';

export default function ViewClimb() {
  const [climbDetails, setClimbDetails] = useState({});
  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleClimb(firebaseKey).then(setClimbDetails);
  }, [firebaseKey]);

  return (
    <div
      className="mt-5 d-flex flex-wrap"
    >
      <div className="d-flex flex-column">
        <img src={climbDetails.image} alt={climbDetails.name} style={{ width: '300px', border: 'solid 2px black' }} />
      </div>
      <div className="text-black ms-5 details">
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
