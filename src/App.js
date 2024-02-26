import React, { useState, useEffect } from "react";
import HomePage from "./components/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import ShowDetail from "./components/ShowDetail/ShowDetail";
import BookTicket from "./components/BookTicket/BookTicket";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader">
          <div className="spinner"></div>
          <span>Loading...</span>
        </div>
      ) : (
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/show/:id" element={<ShowDetail />} />
          <Route path="/booking/:name" element={<BookTicket />} />
        </Routes>
      )}
    </>
  );
}
