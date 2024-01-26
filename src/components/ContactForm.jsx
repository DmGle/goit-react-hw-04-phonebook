import React, { useState } from 'react';
import './contactForm.css';

const ContactForm = ({ onSubmit }) => {
  const [localName, setLocalName] = useState('');
  const [localNumber, setLocalNumber] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    name === 'localName' ? setLocalName(value) : setLocalNumber(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name: localName, number: localNumber });
    setLocalName('');
    setLocalNumber('');
  };

  return (
    <form className='contact-form' onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="localName"
          value={localName}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Number:
        <input
          type="tel"
          name="localNumber"
          value={localNumber}
          onChange={handleChange}
          required
        />
      </label>
      <button className='button' type="submit">
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;