import { useState } from "react";
import { Button } from "react-bootstrap";

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    onSearch(input);
  };

  return (
    <div class="input-group mt-3">
      <input
        type="text"
        value={input}
        class="form-control mb-2"
        id="searchField"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="basic-addon2"
        onChange={(e) => setInput(e.target.value)}
      />
      <div class="input-group-append" style={{ marginBottom: "4%" }}>
        <Button variant="outline-secondary" type="button" id="button-addon1" onClick={handleSearch}>
          GO
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
