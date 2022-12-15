import React from "react";

interface SearchFormProps{

}

const SearchForm:React.FC<SearchFormProps> = () => {
  return(
    <div className="search-form">
      <form>
        <p className="form--title">Search Game</p>
        <label></label>
      </form>
    </div>
  )
}

export default SearchForm;