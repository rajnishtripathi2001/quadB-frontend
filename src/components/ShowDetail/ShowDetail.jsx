import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ShowDetail.css";
import { useNavigate } from "react-router-dom";

export default function ShowDetail() {

  const navigate = useNavigate();
  const { id } = useParams();
  const [show, setShow] = useState({});
  var genres = show.genres;

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setShow(data);
        document.title = data.name + " - TV Shows";
      })
      .catch((error) => {
        console.error("Error fetching show:", error);
      });
  }, [id]);



  const BookTicket = (name) => {
    console.log(name);
    navigate(`/booking/${name}`);
  };

  return (
    <div className="show-page">
      <div className="show-details">
        <div className="img-container">
          {show.image && <img src={show.image.medium} alt={show.name} />}
        </div>
        <div className="info-container">
          <h2>{show.name}</h2>
          
          <div className="genere-container">
            {genres &&
              genres.map((genre) => {
                return <div className="genere">{genre}</div>;
              })}
          </div>
          <p>Rating: {show.rating?.average || "N/A"}</p>
          <p>Language: {show.language}</p>
          <p>Country: {show.network ? show.network.country.name : "NA"}</p>
          <p>Premiered: {show.premiered ? show.premiered.split("-")[0] : "N/A"}</p>
        </div>
      </div>

      <div className="summary-container">
        <h3>Summary</h3>
        <p>{show.summary ? show.summary.replace(/<[^>]+>/g, "") : "N/A"}</p>
        <button className="bookBtn" onClick={()=>{BookTicket(show.name)}}>Book Ticket</button>
      </div>

      

    </div>
  );
}
