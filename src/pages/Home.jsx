import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../componants/NavBar";

// const url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/0/artists?limit=99";
const url = `${process.env.REACT_APP_API_URL}/genre/0/artists?limit=99`
  
const Home = () => {
  const [itemGenres, setItemGenre] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setItemGenre(res.data.data);
        console.log(res)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="container content">
        <div className="row">
          {itemGenres.map((itemGenre, index) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
              <div className="cardhome-image">
                <Link to={`/artist/${itemGenre.id}`}>
                  <img src={`${itemGenre.picture_big}`} alt="" />
                  <div className="card-title">
                    <p className="card-text"> {itemGenre.name}</p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;


