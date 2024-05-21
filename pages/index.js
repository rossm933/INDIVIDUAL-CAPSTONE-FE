import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap'; // TODO: COMMENT IN FOR AUTH
import Link from 'next/link';
import { useAuth } from '../utils/context/authContext'; // TODO: COMMENT IN FOR AUTH
import { getClimbs } from '../api/climbData';
import ClimbCard from '../components/ClimbCard';

function Home() {
  const [climbs, setClimbs] = useState([]);

  const { user } = useAuth(); // TODO: COMMENT IN FOR AUTH

  const getAllTheClimbs = () => {
    getClimbs(user.uid).then(setClimbs);
  };

  useEffect(() => {
    getAllTheClimbs();
  }, []);

  // const user = { displayName: 'Dr. T' }; // TODO: COMMENT OUT FOR AUTH
  return (
    <div className="text-center my-4">
      <Link href="/climbs/new" passHref>
        <Button>Add A Climb</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {/* TODO: map over climbs here using ClimbCard component */}
        {climbs.map((climb) => (
          <ClimbCard key={climb.firebaseKey} climbObj={climb} onUpdate={getAllTheClimbs} />
        ))}
      </div>

    </div>
  );
}

export default Home;
