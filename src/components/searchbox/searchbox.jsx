<div className="search-box position-relative">
  <img
    src={assets.search_icon}
    alt="search"
    className="action-icon"
    onClick={() => setShowSearch(!showSearch)}
    style={{ cursor: "pointer" }}
  />

  {showSearch && (
    <input
      type="text"
      placeholder="Search food..."
      className="search-input"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          console.log("Searching for:", searchQuery);
          setShowSearch(false);
        }
      }}
    />
  )}
</div>
