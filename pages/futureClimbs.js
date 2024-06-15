import React, { useEffect, useState } from 'react';
import { getClimbs } from '../api/climbData';
import ClimbCard from '../components/ClimbCard';
import { useAuth } from '../utils/context/authContext';

export default function ViewFutureClimbs() {
  const [climbs, setClimbs] = useState([]);

  const { user } = useAuth();

  const getAllTheClimbs = () => {
    getClimbs(user.uid).then(setClimbs);
  };

  useEffect(() => {
    getAllTheClimbs();
  }, []);
  const filteredClimbs = climbs.filter((climb) => climb.sent === false);
  return (
    <div className="text-center my-4">
      <div className="d-flex flex-wrap justify-content-center align-items-center">
        {filteredClimbs.map((climb) => (
          <ClimbCard key={climb.firebaseKey} climbObj={climb} onUpdate={getAllTheClimbs} />
        ))}
      </div>

    </div>
  );
}
