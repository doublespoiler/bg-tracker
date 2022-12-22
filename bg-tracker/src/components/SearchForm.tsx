import React from "react";

interface SearchFormProps{
  formSubmissionHandler: Function
}

const SearchForm:React.FC<SearchFormProps> = (props) => {
  return(
    //TODO: Fix type, works as vanilla js
    <div className="search-form" onSubmit={props.formSubmissionHandler}>
      <form>
        <p className="form--title">Search Game</p>
        <label>Name</label>
        <input type="text" name="gameName"></input>
        <label></label>
        <button type="submit">Search!</button>
      </form>
    </div>
  )
}

export default SearchForm;