import React from "react";
import HomePage from "./components/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import ShowDetail from "./components/ShowDetail/ShowDetail";
import BookTicket from "./components/BookTicket/BookTicket";

export default function App() {
  return (
    <Routes>
          <Route exact path="/" element={ <HomePage />}/>
          <Route path="/show/:id" element={<ShowDetail />} />
          <Route path="/booking/:name" element={<BookTicket/>} />
    </Routes>
  );
}
