import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/AudioPlayerStyle.css";

function AudioPlayer({ src }) {

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const handlePlay = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      handlePause();
    } else {
      handlePlay();
    }
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    setDuration(30);
  };

  const handleSeek = (e) => {
    audioRef.current.currentTime = e.target.value;
    setCurrentTime(e.target.value);
  };

  const [volume, setVolume] = useState(0.5);

  const [isMuted, setIsMuted] = useState(false); // Mute state

  function formatDuration(durationSeconds) {
    const minutes = Math.floor(durationSeconds / 60);
    const seconds = Math.floor(durationSeconds % 60);
    const formattedSeconds = seconds.toString().padStart(2, "0");
    return `${minutes}:${formattedSeconds}`;
  }

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value); 
    setVolume(newVolume);
    audioRef.current.volume = newVolume; 
    if (newVolume > 0){
        setIsMuted(false); 
    } 
  };

  // Function to toggle mute/unmute
  const toggleMute = () => {
    if (isMuted) {
      audioRef.current.volume = volume; 
      setIsMuted(false); 
    } else {
      audioRef.current.volume = 0; 
      setIsMuted(true); 
    }
  };

  useEffect(() => {
    audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
      handlePlay();
    };
  }, [src]);

  return (
    <div className="audio-player">
      <div className="info-player">
        <img
          src={`https://e-cdns-images.dzcdn.net/images/cover/${src.md5_image}/40x40-000000-80-0-0.jpg`}
        />
        <div>
          <p className="Label_h3">{src.title}</p>
          <div className="name-artist">
            <Link  to={`/artist/${src.artist.id}`}>
              <label className="Label_h4 cursor_pointer">
                {src.artist.name}
              </label>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div>
          <button className="button-player" onClick={handlePlayPause}>
            <span>
              {isPlaying ? (
                <svg
                  className="icon-player"
                  viewBox="0 0 24 24"
                  focusable="false"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.001 11.58c.02-2.585.249-4.847.55-6.753A.97.97 0 0 1 6.503 4H11v16H6.521a.968.968 0 0 1-.95-.823A45.403 45.403 0 0 1 5 11.579ZM17.48 4c.468 0 .873.344.95.823a45.4 45.4 0 0 1 .57 7.598 45.347 45.347 0 0 1-.55 6.752.97.97 0 0 1-.951.827H13V4h4.479Z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="icon-player"
                  viewBox="0 0 24 24"
                  focusable="false"
                >
                  <path d="M16.04 9.009a93.31 93.31 0 0 0-5.18-2.992 85.246 85.246 0 0 0-3.861-1.945.756.756 0 0 0-1.075.62 85.122 85.122 0 0 0-.246 4.317 92.993 92.993 0 0 0 0 5.982c.048 1.492.131 2.935.246 4.316.043.524.6.845 1.074.62a85.293 85.293 0 0 0 3.861-1.944 93.24 93.24 0 0 0 5.181-2.992 85.086 85.086 0 0 0 3.652-2.396.725.725 0 0 0 0-1.19A84.99 84.99 0 0 0 16.04 9.01Z"></path>
                </svg>
              )}
            </span>
          </button>
        </div>
        <div className="audio-duration">
          <p>{formatDuration(currentTime)}</p>
          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={handleSeek}
          />
          <p>{formatDuration(duration)}</p>
          <audio ref={audioRef} src={src.preview} />
        </div>
      </div>
      <div className="audio-volume">
        <button className="button-volume" onClick={toggleMute}>{isMuted ? (<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 14V10C3 9.44772 3.44772 9 4 9H6.64922C6.87629 9 7.0966 8.92272 7.27391 8.78087L10.3753 6.29976C11.0301 5.77595 12 6.24212 12 7.08062V16.9194C12 17.7579 11.0301 18.2241 10.3753 17.7002L7.27391 15.2191C7.0966 15.0773 6.87629 15 6.64922 15H4C3.44772 15 3 14.5523 3 14Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M16 9.5L18.5 12M21 14.5L18.5 12M18.5 12L21 9.5M18.5 12L16 14.5" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>) 
        :  (<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 14V10C3 9.44772 3.44772 9 4 9H6.64922C6.87629 9 7.0966 8.92272 7.27391 8.78087L10.3753 6.29976C11.0301 5.77595 12 6.24212 12 7.08062V16.9194C12 17.7579 11.0301 18.2241 10.3753 17.7002L7.27391 15.2191C7.0966 15.0773 6.87629 15 6.64922 15H4C3.44772 15 3 14.5523 3 14Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M15.8302 15.2139C16.5435 14.3639 16.9537 13.3008 16.9963 12.1919C17.0389 11.0831 16.7114 9.99163 16.0655 9.08939" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M18.8944 17.7851C20.2406 16.1807 20.9852 14.1571 20.9998 12.0628C21.0144 9.96855 20.2982 7.93473 18.9745 6.31174" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>)}</button>
        <div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            style={{ width: "100px" }}
          />
          <p style={{display: "none"}}>Current Volume: {Math.round(volume * 100)}%</p>
        </div>
      </div>
    </div>
  );
}

export default AudioPlayer;
