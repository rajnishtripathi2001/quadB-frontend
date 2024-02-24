import React, { useState } from "react";
import "./BookTicket.css";
import { useParams } from "react-router-dom";

export default function BookTicket() {
  const { name } = useParams();

  const [toggle, setToggle] = useState(false);

  const submitform = (e) => {
    e.preventDefault();
    setToggle(true);
  };

  return (
    <>
      {toggle ? (
        <div className="booking-form">
          <h4>Booking Confirmed</h4>
          <p>Thank you for booking. Your ticket is confirmed.</p>
          <p>Please check your email for the ticket details.</p>
        </div>
      ) : (
        <div className="booking-form">
          <h4>Book Ticket</h4>
          <form onSubmit={submitform}> 
            <div className="form-group">
              <label htmlFor="show">Show</label>
              <input
                type="text"
                id="show"
                className="form-control"
                value={name}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" className="form-control" required/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" className="form-control" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="text" id="phone" className="form-control" required />
            </div>
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input type="date" id="date" className="form-control" required />
            </div>
            <div className="form-group">
              <label htmlFor="time">Time</label>
              <input type="time" id="time" className="form-control" required/>
            </div>
            <div className="form-group">
              <label htmlFor="tickets">Tickets</label>
              <input type="number" id="tickets" className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">
              Book Now
            </button>
          </form>
        </div>
      )}
    </>
  );
}
