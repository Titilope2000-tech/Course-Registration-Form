// RegistrationForm.jsx - Course Registration Form
import React, { useState } from 'react';

function RegistrationForm() {
  // --- State Variables ---
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [course, setCourse] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // --- Validation Function ---
  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!firstName.trim()) newErrors.firstName = 'First name is required';
    if (!lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    else if (!emailRegex.test(email)) newErrors.email = 'Invalid email format';
    if (!age) newErrors.age = 'Age is required';
    else if (Number(age) < 18) newErrors.age = 'You must be at least 18 years old';
    if (!course) newErrors.course = 'Please select a course';

    return newErrors;
  };

  // --- Handle Form Submission ---
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitted(false);
    } else {
      setErrors({});
      setIsSubmitted(true);

      // Clear all input fields
      setFirstName('');
      setLastName('');
      setEmail('');
      setAge('');
      setCourse('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>Course Registration</h2>

      {/* First Name */}
      <div style={styles.field}>
        <label>First Name:</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        {errors.firstName && <p style={styles.error}>{errors.firstName}</p>}
      </div>

      {/* Last Name */}
      <div style={styles.field}>
        <label>Last Name:</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        {errors.lastName && <p style={styles.error}>{errors.lastName}</p>}
      </div>

      {/* Email */}
      <div style={styles.field}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p style={styles.error}>{errors.email}</p>}
      </div>

      {/* Age */}
      <div style={styles.field}>
        <label>Age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        {errors.age && <p style={styles.error}>{errors.age}</p>}
      </div>

      {/* Course Selection */}
      <div style={styles.field}>
        <label>Course Selection:</label>
        <select value={course} onChange={(e) => setCourse(e.target.value)}>
          <option value="">-- Select a Course --</option>
          <option value="React Basics">React Basics</option>
          <option value="Advanced JavaScript">Advanced JavaScript</option>
          <option value="UI/UX Design">UI/UX Design</option>
        </select>
        {errors.course && <p style={styles.error}>{errors.course}</p>}
      </div>

      <button type="submit" style={styles.button}>Register</button>

      {/* Success Message */}
      {isSubmitted && <p style={styles.success}>✅ Registration successful!</p>}
    </form>
  );
}

export default RegistrationForm;

// --- Inline CSS Styles ---
const styles = {
  form: {
    maxWidth: '420px',
    margin: '40px auto',
    padding: '25px',
    background: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  field: {
    marginBottom: '15px',
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '10px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  error: {
    color: 'red',
    fontSize: '0.85em',
    marginTop: '4px',
  },
  success: {
    color: 'green',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '15px',
  },
};
