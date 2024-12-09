import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleClimb } from '../../../api/climbData';
import ClimbForm from '../../../components/forms/ClimbForm';

export default function EditClimb() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleClimb(firebaseKey).then(setEditItem);
  }, [firebaseKey]);

  return (<ClimbForm climb={editItem} />);
}
