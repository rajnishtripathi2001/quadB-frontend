import React, { useEffect, useState } from "react";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then((response) => response.json())
      .then((data) => {
        setShows(data);
      });
  }, []);

  const showMore = (id) => {
    navigate(`/show/${id}`);
  };

  return (
    <div className="home-container">
      <h1>TV Shows</h1>

      <div className="card-container">
        {shows.map((show) => (
          <div className="card" key={show.id}>
            <img src={show.image.medium} alt={show.name} />
            <h3>{show.name}</h3>
            <p>{show.genres.join(", ")}</p>
            <button onClick={() => showMore(show.id)}>Show More</button>
          </div>
        ))}
      </div>
    </div>
  );
}
