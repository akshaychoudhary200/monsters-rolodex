import React from "react";

export const SearchBox = ({placeholder, handleChange}) => {
  return (
  <input
   className="search-field"
   placeholder={placeholder}
   onChange={handleChange } />
   );
}