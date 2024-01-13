import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import './ShowStyle.css'

const Shows = () => {
  const [data, setData] = useState([]);

  const url = "https://api.tvmaze.com/search/shows?q=all";

  const fetchApi = () => {
    fetch(url)
      .then((resp) => resp.json())
      .then((d) => setData(d))
      .catch(() => console.log(" Data not found"));
    console.log("Data Fetch");
  };
  useEffect(() => {
    fetchApi();
  }, []);
  
  return (
    <div className="show-list-container">
      <h1> All Shows </h1>
      <ul className="show-list">
        {data.map((itm) => (
          <li className="show-item" key={itm.show.id}>
            <Link to={`/show/${itm.show.id}`}>
                <img src={itm.show.image?.medium} alt={itm.show.name}/> 
                <div className="show-details">
                    <h2>{itm.show.name}</h2>
                <p>Premiered: {itm.show.premiered}</p>
                <p>Genres: {itm.show.genres}</p>
                <p>language: {itm.show.language}</p>
                </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shows;
