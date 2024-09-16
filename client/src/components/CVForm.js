// client/src/components/CVForm.js
import React, { useState } from 'react';

const CVForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    education: '',
    skills: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/cvs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...formData, skills: formData.skills.split(',') })
      });
      if (response.ok) {
        alert('CV submitted successfully!');
        setFormData({ name: '', email: '', phone: '', experience: '', education: '', skills: '' });
      } else {
        alert('Error submitting CV');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
      <textarea name="experience" placeholder="Experience" value={formData.experience} onChange={handleChange} required></textarea>
      <textarea name="education" placeholder="Education" value={formData.education} onChange={handleChange} required></textarea>
      <input type="text" name="skills" placeholder="Skills (comma separated)" value={formData.skills} onChange={handleChange} required />
      <button type="submit">Submit CV</button>
    </form>
  );
};

export default CVForm;
