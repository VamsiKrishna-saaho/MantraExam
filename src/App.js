import React, { useState } from 'react';

const Mantra1 = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
  });

  const [savedData, setSavedData] = useState([]);
  const [selectedDay, setSelectedDay] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = () => {
    if (formData.date !== '') {
      setSavedData((prevData) => [...prevData, formData]);
      setFormData({ title: '', description: '', date: '' });
    } else {
      alert('Please select a date before saving.');
    }
  };

  const handleDaySelection = (day) => {
    setSelectedDay(day);
  };

  const getDayOfWeek = (dateString) => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const date = new Date(dateString);
    const dayOfWeek = daysOfWeek[date.getDay()];
    return dayOfWeek;
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
          <label>Title:</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} />
          <br />
          <label>Description:</label>
          <input type="text" name="description" value={formData.description} onChange={handleChange} />
          <br />
          <label>Date:</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} />
          <br />
          <button onClick={handleSave}>Save</button>
        </div>
        <div>
          <label>Select Day:</label>
          <input type="date" onChange={(e) => handleDaySelection(getDayOfWeek(e.target.value))} />
        </div>
      </div>
      <div>
        <h2>Data for {selectedDay}:</h2>
        <ul>
          {savedData.map((item, index) => (
            <li key={index}>
              <strong>Title:</strong> {item.title}, <strong>Description:</strong> {item.description},{' '}
              <strong>Date:</strong> {item.date}
            </li>
          ))}
        </ul>
      </div>
      {savedData.length > 0 && (
        <div>
          <h2>Recently Saved:</h2>
          <p>
            <strong>Title:</strong> {savedData[savedData.length - 1].title},{' '}
            <strong>Description:</strong> {savedData[savedData.length - 1].description}
          </p>
        </div>
      )}
    </div>
  );
};

export default Mantra1;
