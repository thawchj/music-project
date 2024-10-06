import { useEffect, useState } from "react"
import { Link ,useNavigate  } from 'react-router-dom'
import '../index.css'


const Navbar = () => {
    const navigate = useNavigate();

    const searchInput = (e) => {
        if (e.key === 'Enter') {
            console.log('search target',e.target.value)
            navigate(`/search/${e.target.value}`);
        }  
    }
    
    return (
      <div className="nav-bar">
        <button className="nav-bar-item button-none">
          <Link to="/">
            <img src="https://e-cdn-files.dzcdn.net/img/developers/logo-deezer-developers-v00402444.png" />
          </Link>
        </button>
  
        <div className="nav-bar-divinput">
          <div className="nav-bar-divsvg">
            <button className="button-none">
              <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                <path d="M10.947 5.35c3.725 0 5.614 1.89 5.614 5.614 0 1.513-.326 2.745-.967 3.661l-.392.477-.398.374c-.925.731-2.223 1.102-3.857 1.102-3.725 0-5.614-1.889-5.614-5.614 0-3.725 1.889-5.613 5.614-5.613Zm0-1.332C6.486 4.018 4 6.503 4 10.964s2.486 6.947 6.947 6.947c1.955 0 3.53-.478 4.684-1.39l3.243 3.462L20 18.927l-3.315-3.537c.79-1.127 1.209-2.61 1.209-4.426 0-4.46-2.486-6.946-6.947-6.946Z"></path>
              </svg>
            </button>
          </div>
          <input type="text" onKeyDown={searchInput}/>
        </div>
      </div>
    );
  };
  

export default Navbar
