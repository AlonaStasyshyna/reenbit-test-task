import searchIcon from '../../images/search-icon.svg';

export const SearchForm = ({ query, handleChange }) => {
  const changeInput = e => {
    let { value } = e.target;
    handleChange(value.toLowerCase().trim());
  };

  const formSubmit = e => {
    e.preventDefault();
  };

  return (
    <form onSubmit={formSubmit}>
      <label>
        <input
          type="text"
          name="query"
          value={query}
          onChange={changeInput}
          placeholder="Filter by name..."
        />
      </label>

      <button type="submit">
        <svg width="24" height="24">
          <use href={searchIcon}></use>
        </svg>
      </button>
    </form>
  );
};
