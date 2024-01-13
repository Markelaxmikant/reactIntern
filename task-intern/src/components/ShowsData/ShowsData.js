import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Style.css'


const ShowsData = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    tickets: 1,
  });
          
  const url =`https://api.tvmaze.com/shows/${id}`
  const fetchData = ()=>{
    fetch(url)
      .then((response) => response.json())
      .then((data) => setShow(data));
  }
  useEffect(() => {
    fetchData()
  }, [id]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBookTicket = () => {
    const bookingDetails = {
      showName: show.name,
      ...formData,
    };

    localStorage.setItem('bookingDetails', JSON.stringify(bookingDetails));

    console.log('Booking details:', bookingDetails);
  };

  return (
    <div className="show-details-container">
      <Link to="/" className="back-link">
        <button>Back to Shows</button> 
      </Link>
      {show ? (
        <div className="show-details-content">
          <h2>{show.name}</h2>
          <p dangerouslySetInnerHTML={{ __html: show.summary }}></p>

          <form>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="tickets">Number of Tickets:</label>
            <input
              type="number"
              id="tickets"
              name="tickets"
              value={formData.tickets}
              onChange={handleInputChange}
              min="1"
              required
            />

            <button type="button" onClick={handleBookTicket}>
              Book Ticket
            </button>
          </form>
        </div>
      ) : (
        <p>Loading.....</p>
      )}
    </div>
  );
};

export default ShowsData;
