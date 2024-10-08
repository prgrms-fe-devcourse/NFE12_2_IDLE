// PostHeader.jsx

import { useState } from "react";
import PropTypes from "prop-types";
import { CiSearch } from "react-icons/ci";

const PostHeader = ({ activeTab, onFilterChange, isCurrentUser, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div className="post-header d-flex justify-content-between mx-3">
      <form className="d-flex" role="search" onSubmit={handleSearch}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="포스트 검색"
          aria-label="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="btn btn-outline-primary" type="submit">
          <CiSearch />
        </button>
      </form>

      <ul className="nav nav-underline">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "My Posts" ? "active" : ""}`}
            onClick={() => onFilterChange("My Posts")}
          >
            My Posts
          </button>
        </li>
        {isCurrentUser && (
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "Likes" ? "active" : ""}`}
              onClick={() => onFilterChange("Likes")}
            >
              Likes
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

PostHeader.propTypes = {
    activeTab: PropTypes.string.isRequired,  // activeTab은 문자열이며 필수
    onFilterChange: PropTypes.func.isRequired, // onFilterChange는 함수이며 필수
    isCurrentUser: PropTypes.bool.isRequired, // isCurrentUser는 boolean이며 필수
    onSearch: PropTypes.func.isRequired, // onSearch는 함수이며 필수
};

export default PostHeader;