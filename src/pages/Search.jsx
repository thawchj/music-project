import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../componants/NavBar";
import AudioPlayer from "../componants/AudioPlayer";
// const url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com";
const url = process.env.REACT_APP_API_URL



const Search = () => {
  let params = useParams();
  const [dataSearch, setDataSearch] = useState([]);
  const [songPreview, setSongPreview] = useState(null);

  useEffect(() => {
    axios
      .get(`${url}/search?q=${params.serchtext}`)
      .then((res) => {
        setDataSearch(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.serchtext]);

  function clickPlayMusic(song) {
    console.log(song);
    setSongPreview(song);
  }

  function convertSecondsToMinutes(seconds) {
    let minutes = Math.floor(seconds / 60);
    let extraSeconds = seconds % 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    extraSeconds = extraSeconds < 10 ? "0" + extraSeconds : extraSeconds;

    return minutes + ":" + extraSeconds;
  }

  return (
    <>
      <Navbar />
      <div className="container content">
        <table className="table-track">
          <thead>
            <tr>
              <th>TRACK</th>
              <th style={{ width: "12.5%" }}>ALBUM</th>
              <th style={{ width: "12.5%" }}>ARTIST</th>
              <th style={{ width: "10%" }} className="text-center">
                TIME
              </th>
            </tr>
          </thead>
          <tbody>
            {dataSearch.map((track, index) => (
              <tr key={index} className="tr-track">
                <td>
                  <div
                    className="cover-imgtrack cursor_pointer"
                    onClick={() => clickPlayMusic(track)}
                  >
                    <img
                      src={`https://e-cdns-images.dzcdn.net/images/cover/${track.md5_image}/40x40-000000-80-0-0.jpg`}
                      alt=""
                      className="imgtrack"
                    />
                    <div className="imgtrack-hover">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="36px"
                        viewBox="0 -960 960 960"
                        width="36px"
                        fill="#FFFFFF"
                      >
                        <path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                      </svg>
                    </div>
                  </div>
                  <label>{track.title}</label>
                </td>
                <td>
                  <Link to={`/album/${track.album.id} `}>
                    <label className="text-ellipsis cursor_pointer mt-5">
                      {track.album.title}
                    </label>
                  </Link>
                </td>
                <td>
                  <Link to={`/artist/${track.artist.id}`}>
                    <label className="cursor_pointer">
                      {track.artist.name}
                    </label>
                  </Link>
                </td>
                <td className="text-center">
                  {convertSecondsToMinutes(track.duration)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="cover-player">
        {songPreview ? <AudioPlayer src={songPreview} /> : <div></div>}
      </div>
    </>
  );
};

export default Search;
