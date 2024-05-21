import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleClimb } from '../../../api/climbData';
import ClimbForm from '../../../components/forms/ClimbForm';

export default function EditClimb() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  // TODO: grab the firebasekey
  const { firebaseKey } = router.query;

  // TODO: make a call to the API to get the book data
  useEffect(() => {
    getSingleClimb(firebaseKey).then(setEditItem);
  }, [firebaseKey]);

  // TODO: pass object to form
  return (<ClimbForm obj={editItem} />);
}
