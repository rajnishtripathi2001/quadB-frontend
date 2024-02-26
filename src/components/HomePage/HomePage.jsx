import React, { useEffect, useState } from "react";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";

export default function HomePage() {
  const navigate = useNavigate();
  // const [loading, setLoading] = useState(true);

  const [shows, setShows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const showsPerPage = 12;
  const maxPageButtons = 5;

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 5000);
  // }, []);

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then((response) => response.json())
      .then((data) => {
        setShows(data);
        console.log(data);
      });
  }, []);

  const indexOfLastShow = currentPage * showsPerPage;
  const indexOfFirstShow = indexOfLastShow - showsPerPage;
  const currentShows = shows.slice(indexOfFirstShow, indexOfLastShow);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const showMore = (id) => {
    navigate(`/show/${id}`);
  };

  const totalPages = Math.ceil(shows.length / showsPerPage);

  const pageNumbers = [];
  if (totalPages <= maxPageButtons) {
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  } else {
    const leftOffset = Math.max(
      currentPage - Math.floor(maxPageButtons / 2),
      1
    );
    const rightOffset = Math.min(leftOffset + maxPageButtons - 1, totalPages);

    for (let i = leftOffset; i <= rightOffset; i++) {
      pageNumbers.push(i);
    }
  }

  return (
    <div className="home-container">
      <Header />

      <div className="card-container">
        {currentShows.map((show) => (
          <div className="card" key={show.id}>
            <img src={show.image.medium} alt={show.name} />
            <h3>{show.name}</h3>
            <p>{show.genres.join(", ")}</p>
            <div className="card-bottom">
              <div className="raitng-box">
                <img src="../../star.png" alt="sd" />
                {show.rating.average}
              </div>
              <button onClick={() => showMore(show.id)}>Show More</button>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        {currentPage > 1 && (
          <button onClick={() => paginate(currentPage - 1)}>&lt;</button>
        )}

        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={currentPage === number ? "active" : ""}
          >
            {number}
          </button>
        ))}

        {currentPage < totalPages && (
          <button onClick={() => paginate(currentPage + 1)}>&gt;</button>
        )}
      </div>
    </div>
  );
}
