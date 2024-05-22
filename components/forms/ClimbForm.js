import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { getClimbs, createClimb, updateClimb } from '../../api/climbData';

const initialState = {
  name: '',
  image: '',
  description: '',
  location: '',
  grade: '',
  favorite: false,
};

function ClimbForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const [, setPlayers] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    getClimbs(user.uid).then(setPlayers);

    if (obj.firebaseKey) setFormInput(obj);
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateClimb(formInput).then(() => router.push('/'));
    } else {
      const payload = { ...formInput, uid: user.uid, timeStamp: Date.now() };
      createClimb(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateClimb(patchPayload).then(() => {
          router.push('/');
        });
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.firebaseKey ? 'Update' : 'Create'} Player</h2>

      {/* Name INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="Name of Climb" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter Name"
          name="name"
          value={formInput.name}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* IMAGE INPUT  */}
      <FloatingLabel controlId="floatingInput2" label="Picture of Climb" className="mb-3">
        <Form.Control
          type="url"
          placeholder="Enter an image url"
          name="image"
          value={formInput.image}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* DESCRIPTION INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="Description" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Add Description"
          name="description"
          value={formInput.description}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* Location INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="Location" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Add Location"
          name="location"
          value={formInput.location}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* GRADE SELECT  */}
      <FloatingLabel controlId="floatingSelect" label="Grade">
        <Form.Select
          aria-label="Grade"
          name="grade"
          onChange={handleChange}
          className="mb-3"
          value={formInput.grade}
          required
        >
          <option disabled selected value="">Select an Option</option>
          <option value="V0">V0</option>
          <option value="V1">V1</option>
          <option value="V2">V2</option>
          <option value="V3">V3</option>
          <option value="V4">V4</option>
          <option value="V5">V5</option>
          <option value="V6">V6</option>
          <option value="V7">V7</option>
          <option value="V8">V8</option>
          <option value="V9">V9</option>
          <option value="V10">V10</option>
          <option value="5.6">5.6</option>
          <option value="5.7">5.7</option>
          <option value="5.8">5.8</option>
          <option value="5.9">5.9</option>
          <option value="5.10">5.10</option>
          <option value="5.11">5.11</option>
          <option value="5.12">5.12</option>
          <option value="5.13">5.13</option>
          <option value="5.14">5.14</option>
        </Form.Select>
      </FloatingLabel>

      {/* SUBMIT BUTTON  */}
      <Button type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Climb</Button>
    </Form>
  );
}

ClimbForm.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    location: PropTypes.string,
    grade: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

ClimbForm.defaultProps = {
  obj: initialState,
};

export default ClimbForm;
