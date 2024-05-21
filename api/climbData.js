import { clientCredentials } from '../utils/client';
// API CALLS FOR CLIMBS

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

// TODO: DELETE CLIMB
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

// TODO: GET SINGLE CLIMB
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

// TODO: CREATE CLIMB
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

// TODO: UPDATE CLIMB
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

export {
  getClimbs,
  createClimb,
  deleteClimb,
  getSingleClimb,
  updateClimb,
};
