import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getClimbs = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/climbs.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const deleteClimb = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/climbs/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

const getSingleClimb = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/climbs/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const createClimb = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/climbs.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateClimb = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/climbs/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const searchClimbs = async (searchValue, uid) => {
  const allClimbs = await getClimbs(uid);

  const filteredClimbs = await allClimbs.filter((climb) => (
    climb.name.toLowerCase().includes(searchValue)
    || climb.grade.toLowerCase().includes(searchValue)
  ));

  return filteredClimbs;
};

export {
  getClimbs,
  createClimb,
  deleteClimb,
  getSingleClimb,
  updateClimb,
  searchClimbs,
};
