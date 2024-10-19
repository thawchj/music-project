import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";

const Navbar = () => {
  const navigate = useNavigate();

  const searchInput = (e) => {
    if (e.key === "Enter") {
      console.log("search target", e.target.value);
      navigate(`/search/${e.target.value}`);
    }
  };

  return (
    <div className="nav-bar">
      <button className="nav-bar-item button-none">
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="52"
            height="60"
            viewBox="0 0 52 60"
            fill="none"
          >
            <path
              d="M23.5185 41.3407C24.2919 41.2856 24.9648 41.8675 25.0175 42.6433C25.0725 43.4167 24.4907 44.0895 23.7149 44.1422C23.497 44.1589 23.2264 44.1709 22.9103 44.1829C22.556 44.1949 22.2878 44.202 22.101 44.202C15.9976 44.202 10.4709 41.7262 6.47246 37.7296C2.47375 33.7309 0 28.2045 0 22.101C0 15.9976 2.47589 10.4709 6.47246 6.47246C10.4712 2.47375 15.9976 0 22.101 0C28.2045 0 33.7311 2.47589 37.7296 6.47246C41.7283 10.4712 44.202 15.9976 44.202 22.101C44.202 22.2734 44.1949 22.5368 44.1829 22.884V22.8984C44.1709 23.2001 44.1589 23.4539 44.147 23.6622C44.0943 24.4356 43.4262 25.0223 42.6528 24.9696C41.8794 24.9169 41.2928 24.2488 41.3455 23.4754C41.3646 23.2072 41.3766 22.9798 41.3814 22.8025V22.7858C41.3862 22.6469 41.3886 22.417 41.3886 22.101C41.3886 16.7757 39.2288 11.9506 35.7401 8.46214C32.249 4.97103 27.4268 2.81364 22.0988 2.81364C16.7735 2.81364 11.9484 4.97342 8.45997 8.46214C4.96886 11.9532 2.81148 16.7754 2.81148 22.101C2.81148 27.4286 4.97126 32.2513 8.45997 35.7422C11.9511 39.2333 16.7732 41.3907 22.0988 41.3907C22.422 41.3907 22.6591 41.3859 22.8075 41.3812C22.9943 41.374 23.2314 41.362 23.5163 41.3404L23.5185 41.3407ZM11.3331 22.0986C11.3331 22.8744 10.7034 23.5066 9.92514 23.5066C9.14935 23.5066 8.51719 22.8768 8.51719 22.0986C8.51719 18.3489 10.0353 14.9537 12.4944 12.4944C14.9511 10.0353 18.3488 8.51721 22.0986 8.51721C22.8744 8.51721 23.5065 9.14693 23.5065 9.92517C23.5065 10.701 22.8768 11.3331 22.0986 11.3331C19.1246 11.3331 16.4333 12.5375 14.4841 14.4866C12.535 16.4333 11.3306 19.1271 11.3306 22.1011L11.3331 22.0986ZM22.1007 15.6574C23.8798 15.6574 25.4888 16.3781 26.655 17.5442C27.8211 18.7103 28.5418 20.3218 28.5418 22.0985C28.5418 23.8775 27.8211 25.4866 26.655 26.6527C25.4889 27.8188 23.8774 28.5396 22.1007 28.5396C20.3217 28.5396 18.7126 27.8188 17.5465 26.6527C16.3804 25.4867 15.6596 23.8752 15.6596 22.0985C15.6596 20.3194 16.3804 18.7103 17.5465 17.5442C18.7125 16.3781 20.324 15.6574 22.1007 15.6574ZM46.6702 42.1854V29.6836L32.5766 34.7288V53.5589C32.5766 55.338 31.8558 56.9471 30.6897 58.1132C29.5237 59.2793 27.9122 60 26.1355 60C24.3564 60 22.7474 59.2793 21.5788 58.1132C20.4128 56.9471 19.692 55.3356 19.692 53.5589C19.692 51.7799 20.4128 50.1708 21.5788 49.0047C22.7449 47.8386 24.3564 47.1178 26.1355 47.1178C27.4812 47.1178 28.7311 47.5321 29.7655 48.2384V33.7427C29.7655 33.1129 30.1797 32.5814 30.7496 32.3994L47.5539 26.3869C47.5874 26.3749 47.6209 26.3606 47.6545 26.351L49.5293 25.6805C50.262 25.4195 51.0642 25.8002 51.3252 26.5329C51.5862 27.2656 51.2055 28.0678 50.4728 28.3288L49.4862 28.6831V47.5133C49.4862 49.2923 48.7631 50.9014 47.5994 52.0676C46.4333 53.2336 44.8219 53.9544 43.0451 53.9544C41.2661 53.9544 39.657 53.2336 38.4909 52.0676C37.3248 50.9015 36.6041 49.29 36.6041 47.5133C36.6041 45.7342 37.3248 44.1252 38.4909 42.959C39.657 41.793 41.2684 41.0722 43.0451 41.0722C44.3908 41.0722 45.6408 41.4865 46.6752 42.1928L46.6702 42.1854Z"
              fill="#E6438F"
            />
          </svg>
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
        <input type="text" onKeyDown={searchInput} />
      </div>
    </div>
  );
};

export default Navbar;
