/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../utils/context/authContext';
import ClimbCard from '../../components/ClimbCard';
import { searchClimbs } from '../../api/climbData';

export default function Search() {
  const [searchResults, setSearchResults] = useState([]);
  const { user } = useAuth();

  const router = useRouter();
  const { searchInput } = router.query;

  const getSearchResults = async () => {
    const filteredResults = await searchClimbs(searchInput, user.uid);
    setSearchResults(filteredResults);
  };

  useEffect(() => {
    getSearchResults();
  }, [searchInput, user.uid]);

  return (
    <div className="d-flex flex-wrap">
      {searchResults.length === 0
        ? (<h1>No climbs found.</h1>)
        : (searchResults.map((results) => (
          <ClimbCard key={results.firebaseKey} climbObj={results} onUpdate={getSearchResults} />)))}
    </div>
  );
}
