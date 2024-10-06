import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../componants/NavBar";
import AudioPlayer from "../componants/AudioPlayer";
import "../styles/ArtistPageStyle.css";

// const urlArtist =
//   "https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/";

// toptracks https://api.deezer.com/artist/2810121/top?limit=50

const urlArtist = `${process.env.REACT_APP_API_URL}/artist/`

const Artist = () => {
  let params = useParams();
  console.log("params Artist", params.artistid);

  const [artistInfo, setArtistInfo] = useState([]);
  const [artistTracks, setArtistTracks] = useState([]);
  const [artistRAlbum, setArtistRAlbum] = useState([]);
  const [artistRSingle, setArtistRSingle] = useState([]);
  const [artistREp, setArtistREp] = useState([]);
  const [songPreview, setSongPreview] = useState(null);

  useEffect(() => {
    axios
      .get(`${urlArtist}${params.artistid}`)
      .then((res) => {
        setArtistInfo(res.data);
        console.log("artistInfo", res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`${urlArtist}${params.artistid}/top?limit=50`)
      .then((res) => {
        setArtistTracks(res.data.data);
        console.log("track", res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`${urlArtist}${params.artistid}/albums?limit=9999`)
      .then((res) => {
        let artistAlbum = res.data.data;
        let rAlbum = artistAlbum.filter(
          (item1) => item1.record_type == "album"
        );
        let rSingle = artistAlbum.filter(
          (item2) => item2.record_type == "single"
        );
        let rEp = artistAlbum.filter((item3) => item3.record_type == "ep");
        console.log(artistAlbum);
        setArtistRAlbum(rAlbum);
        setArtistRSingle(rSingle);
        setArtistREp(rEp);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function convertSecondsToMinutes(seconds) {
    let minutes = Math.floor(seconds / 60);
    let extraSeconds = seconds % 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    extraSeconds = extraSeconds < 10 ? "0" + extraSeconds : extraSeconds;

    return minutes + ":" + extraSeconds;
  }

  function clickPlayMusic(song) {
    console.log(song);
    setSongPreview(song);
  }

  return (
    <>
      <Navbar />
      <div className="container artistpage content">
        <div className="section-header">
          <div className="cover-logo">
            <img src={`${artistInfo.picture_big}`} alt="" />
          </div>
          <div className="cover-name">
            <label className="Label_h1 font-weight-semi-extra">{`${artistInfo.name}`}</label>
          </div>
        </div>
        <div className="section-album">
          <div>
            <div className="head-cover-line">
              <div>
                <label className="Label_h2 font-weight-medium">Albums</label>
              </div>
              <div className="cover-line">
                <div className="line"></div>
              </div>
            </div>
            <div className="row ">
              {artistRAlbum.map((album, index) => (
                <div className="col-6 col-sm-2 card-album" key={index}>
                  <Link to={`/album/${album.id}`} className="cursor_pointer">
                    <div>
                      <img
                        className="mb-10"
                        src={`${album.cover_big}`}
                        alt=""
                      />
                      <div>
                        <label className="Label_h3 cursor_pointer text-ellipsis">
                          {album.title}
                        </label>
                      </div>
                      <div>
                        <label className="Label_h5 cursor_pointer">
                          Released on {album.release_date}
                        </label>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="head-cover-line">
              <div>
                <label className="Label_h2 font-weight-medium ">Eps</label>
              </div>
              <div className="cover-line">
                <div className="line"></div>
              </div>
            </div>
            <div className="row">
              {artistREp.map((album, index) => (
                <div className="col-6 col-sm-2 card-album" key={index}>
                  <Link to={`/album/${album.id}`} className="cursor_pointer">
                    <div>
                      <img
                        className="mb-10"
                        src={`${album.cover_big}`}
                        alt=""
                      />
                      <div>
                        <label className="Label_h3 cursor_pointer text-ellipsis">{album.title}</label>
                      </div>
                      <div>
                        <label className="Label_h5 cursor_pointer">
                          Released on {album.release_date}
                        </label>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="head-cover-line">
              <div>
                <label className="Label_h2 font-weight-medium ">Singles</label>
              </div>
              <div className="cover-line">
                <div className="line"></div>
              </div>
            </div>
            <div className="row">
              {artistRSingle.map((album, index) => (
                <div className="col-6 col-sm-2 card-album " key={index}>
                  <Link to={`/album/${album.id}`} className="cursor_pointer">
                    <div>
                      <img
                        className="mb-10"
                        src={`${album.cover_big}`}
                        alt=""
                      />
                      <div>
                        <label className="Label_h3 cursor_pointer text-ellipsis">{album.title}</label>
                      </div>
                      <div>
                        <label className="Label_h5 cursor_pointer">
                          Released on {album.release_date}
                        </label>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div class="section-track mt-20">
          <table className="table-track">
            <thead>
              <tr>
                <th>TRACK</th>
                <th style={{width: "25%"}}>ALBUM</th>
                <th className="text-center" style={{width: "10%"}}>TIME</th>
              </tr>
            </thead>
            <tbody>
              {artistTracks.map((track, index) => (
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
                    <Link  to={`/album/${track.album.id}`}>
                      <label  className="text-ellipsis mt-5 cursor_pointer">
                          {track.album.title}
                      </label>
                    </Link>
                  </td>
                  <td className="text-center ">
                    {convertSecondsToMinutes(track.duration)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="cover-player">
        {songPreview ? <AudioPlayer src={songPreview} /> : <div></div>}
      </div>
    </>
  );
};

export default Artist;
